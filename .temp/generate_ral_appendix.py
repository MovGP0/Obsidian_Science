from __future__ import annotations

import argparse
import colorsys
import concurrent.futures
import hashlib
import html
import http.client
import math
import re
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


PROJECT_ROOT = Path(__file__).resolve().parents[1]
APPENDIX_PATH = PROJECT_ROOT / "Electronics" / "Appendix" / "RAL Colors.md"
CACHE_DIR = PROJECT_ROOT / ".temp" / "ral_cache"
CLASSIC_SOURCE_PATH = Path(
    r"C:\Users\Johann.Dirry\AppData\Roaming\JetBrains\Rider2026.1\resharper-host\DecompilerCache\decompiler\2932984592204e96b12b8b191540692636000\7f\a2e3e45a\RALColor.cs"
)
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/135.0 Safari/537.36"
)


@dataclass(frozen=True)
class FamilyConfig:
    name: str
    base_url: str
    slug: str
    expected_count: int


@dataclass(frozen=True)
class ColorEntry:
    code: str
    name: str
    hex_value: str
    rgb: tuple[int, int, int]
    category: str


FAMILIES = (
    FamilyConfig(
        name="RAL Design",
        base_url="https://www.ralcolorchart.com/ral-design",
        slug="ral-design",
        expected_count=1825,
    ),
    FamilyConfig(
        name="RAL Effect",
        base_url="https://www.ralcolorchart.com/ral-effect",
        slug="ral-effect",
        expected_count=490,
    ),
    FamilyConfig(
        name="RAL Plastics P1",
        base_url="https://www.ralcolorchart.com/ral-plastics-p1",
        slug="ral-plastics-p1",
        expected_count=100,
    ),
    FamilyConfig(
        name="RAL Plastics P2",
        base_url="https://www.ralcolorchart.com/ral-plastics-p2",
        slug="ral-plastics-p2",
        expected_count=200,
    ),
)


CLASSIC_CATEGORY_LABELS = (
    ("Yellow and beige", 1000, 1999),
    ("Orange", 2000, 2999),
    ("Red", 3000, 3999),
    ("Violet", 4000, 4999),
    ("Blue", 5000, 5999),
    ("Green", 6000, 6999),
    ("Grey", 7000, 7999),
    ("Brown", 8000, 8999),
    ("White and black", 9000, 9999),
)


def normalize_text(value: str) -> str:
    text = html.unescape(value)
    text = text.replace("\xa0", " ")
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def fetch_text(url: str, refresh: bool = False, retries: int = 5) -> str:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    cache_path = CACHE_DIR / f"{hashlib.sha1(url.encode('utf-8')).hexdigest()}.html"

    if cache_path.exists() and not refresh:
        return cache_path.read_text(encoding="utf-8")

    last_error: Exception | None = None

    for attempt in range(1, retries + 1):
        try:
            request = Request(url, headers={"User-Agent": USER_AGENT})
            with urlopen(request, timeout=30) as response:
                content = response.read().decode("utf-8")
            cache_path.write_text(content, encoding="utf-8")
            return content
        except (
            HTTPError,
            URLError,
            TimeoutError,
            ConnectionError,
            ConnectionResetError,
            http.client.RemoteDisconnected,
        ) as error:
            last_error = error
            if attempt == retries:
                break
            time.sleep(1.5 * attempt)

    raise RuntimeError(f"Failed to fetch {url}") from last_error


def ordered_unique(values: Iterable[str]) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []

    for value in values:
        if value in seen:
            continue
        seen.add(value)
        ordered.append(value)

    return ordered


def parse_category_links(main_html: str, family: FamilyConfig) -> list[tuple[str, str]]:
    pattern = re.compile(
        rf'<a href="(?P<href>/{re.escape(family.slug)}/(?!ral-)[^"]+)"[^>]*>(?P<label>.*?)</a>',
        re.S,
    )
    category_links: list[tuple[str, str]] = []
    seen: set[str] = set()

    for match in pattern.finditer(main_html):
        href = html.unescape(match.group("href"))
        label = normalize_text(match.group("label"))
        label = re.sub(r"\(\s*\d+\s*\)$", "", label).strip()

        if not label or href in seen:
            continue

        seen.add(href)
        category_links.append((href, label))

    return category_links


def parse_color_links(category_html: str, family: FamilyConfig) -> list[str]:
    pattern = re.compile(
        rf'href="(?P<href>/{re.escape(family.slug)}/ral-[^"]+)"',
        re.S,
    )
    return ordered_unique(
        html.unescape(match.group("href"))
        for match in pattern.finditer(category_html)
    )


def parse_effect_heading(heading: str) -> tuple[str, str]:
    match = re.match(r"^RAL\s+(\d{3}-(?:[1-6]|M))(?:\s+(.*))?$", heading, re.I)
    if match is None:
        raise ValueError(f"Unexpected RAL Effect heading: {heading}")
    return match.group(1).upper(), (match.group(2) or "").strip()


def parse_p1_heading(heading: str) -> tuple[str, str]:
    match = re.match(r"^RAL\s+(\d{4}-P)(?:\s+(.*))?$", heading, re.I)
    if match is None:
        raise ValueError(f"Unexpected RAL Plastics P1 heading: {heading}")
    return match.group(1).upper(), (match.group(2) or "").strip()


def parse_design_heading(heading: str) -> tuple[str, str]:
    match = re.match(r"^RAL\s+(\d{3}\s+\d{2}\s+\d{2})(?:\s+(.*))?$", heading, re.I)
    if match is None:
        raise ValueError(f"Unexpected RAL Design heading: {heading}")
    return re.sub(r"\s+", " ", match.group(1)).strip(), (match.group(2) or "").strip()


def parse_p2_heading(heading: str) -> tuple[str, str]:
    match = re.match(r"^RAL\s+(\d{3}\s+\d{2}\s+\d{2}-P(?:-T)?)(?:\s+(.*))?$", heading, re.I)
    if match is None:
        raise ValueError(f"Unexpected RAL Plastics P2 heading: {heading}")
    return re.sub(r"\s+", " ", match.group(1)).strip().upper(), (match.group(2) or "").strip()


def parse_color_page(html_text: str, family: FamilyConfig, category: str) -> ColorEntry:
    heading_match = re.search(r"<h1>(.*?)</h1>", html_text, re.S)
    color_match = re.search(
        r'id="color_overlay"[^>]*style="background-color:\s*(#[0-9A-Fa-f]{6})"',
        html_text,
        re.S,
    )

    if heading_match is None or color_match is None:
        raise RuntimeError(f"Could not parse color page for {family.name}")

    heading = normalize_text(heading_match.group(1))
    hex_value = color_match.group(1).upper()
    rgb = tuple(int(hex_value[index : index + 2], 16) for index in (1, 3, 5))

    if family.slug == "ral-effect":
        code, name = parse_effect_heading(heading)
    elif family.slug == "ral-plastics-p1":
        code, name = parse_p1_heading(heading)
    elif family.slug == "ral-plastics-p2":
        code, name = parse_p2_heading(heading)
    else:
        code, name = parse_design_heading(heading)

    return ColorEntry(
        code=code,
        name=name,
        hex_value=hex_value,
        rgb=rgb,
        category=category,
    )


def natural_sort_key(value: str) -> list[int | str]:
    key: list[int | str] = []

    for part in re.split(r"(\d+)", value):
        if not part:
            continue
        if part.isdigit():
            key.append(int(part))
        else:
            key.append(part.upper())

    return key


def scrape_family(family: FamilyConfig, refresh: bool = False) -> tuple[list[tuple[str, str]], list[ColorEntry]]:
    print(f"Scraping {family.name}...", flush=True)
    main_html = fetch_text(family.base_url, refresh=refresh)
    category_links = parse_category_links(main_html, family)

    if not category_links:
        raise RuntimeError(f"No categories found for {family.name}")

    category_color_links: list[tuple[str, str]] = []

    for href, category in category_links:
        category_url = f"https://www.ralcolorchart.com{href}"
        category_html = fetch_text(category_url, refresh=refresh)
        color_links = parse_color_links(category_html, family)

        if not color_links:
            raise RuntimeError(f"No colors found in {category_url}")

        category_color_links.extend((link, category) for link in color_links)

    unique_links = ordered_unique(link for link, _ in category_color_links)
    link_to_category = {}

    for link, category in category_color_links:
        link_to_category.setdefault(link, category)

    if len(unique_links) != family.expected_count:
        raise RuntimeError(
            f"{family.name}: expected {family.expected_count} colors, found {len(unique_links)}"
        )

    color_entries: list[ColorEntry] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        futures = {
            executor.submit(
                fetch_text,
                f"https://www.ralcolorchart.com{link}",
                refresh,
            ): link
            for link in unique_links
        }

        for future in concurrent.futures.as_completed(futures):
            link = futures[future]
            html_text = future.result()
            category = link_to_category[link]
            color_entries.append(parse_color_page(html_text, family, category))

    color_entries.sort(key=lambda entry: natural_sort_key(entry.code))
    print(f"  {family.name}: {len(color_entries)} colors", flush=True)
    return category_links, color_entries


def parse_classic_channel(channel_text: str) -> int:
    cleaned = re.sub(r"/\*.*?\*/", "", channel_text)
    cleaned = cleaned.replace("(int) byte.MaxValue", "255")
    return int(cleaned.strip())


def parse_classic_colors() -> list[ColorEntry]:
    source_text = CLASSIC_SOURCE_PATH.read_text(encoding="utf-8")

    values_match = re.search(
        r"private static readonly SortedDictionary<int, Color> colorValues = new SortedDictionary<int, Color>\(\)\s*\{(.*?)\n\s*\};",
        source_text,
        re.S,
    )
    names_match = re.search(
        r'private static readonly Dictionary<int, string\[]> colorNames = new Dictionary<int, string\[]>\(\)\s*\{(.*?)\n\s*\};',
        source_text,
        re.S,
    )

    if values_match is None or names_match is None:
        raise RuntimeError("Could not locate classic color tables in RALColor.cs")

    value_pattern = re.compile(
        r"\{\s*(\d+)(?:\s*/\*.*?\*/)?\s*,\s*Color\.FromArgb\((.*?)\)\s*\}",
        re.S,
    )
    name_pattern = re.compile(
        r'\{\s*(\d+)(?:\s*/\*.*?\*/)?\s*,\s*new string\[6\]\s*\{\s*"(.*?)"',
        re.S,
    )

    color_values: dict[int, tuple[int, int, int]] = {}
    for match in value_pattern.finditer(values_match.group(1)):
        number = int(match.group(1))
        channels = [parse_classic_channel(part) for part in match.group(2).split(",")]
        color_values[number] = (channels[0], channels[1], channels[2])

    color_names: dict[int, str] = {}
    for match in name_pattern.finditer(names_match.group(1)):
        color_names[int(match.group(1))] = match.group(2)

    entries: list[ColorEntry] = []
    for number, rgb in sorted(color_values.items()):
        category = next(
            label
            for label, start, end in CLASSIC_CATEGORY_LABELS
            if start <= number <= end
        )
        hex_value = f"#{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}"
        entries.append(
            ColorEntry(
                code=str(number),
                name=color_names.get(number, ""),
                hex_value=hex_value,
                rgb=rgb,
                category=category,
            )
        )

    return entries


def format_swatch(hex_value: str) -> str:
    return (
        f'<span style="display:inline-block;width:4em;height:1.25em;'
        f'background:{hex_value};border:1px solid #888;"></span>'
    )


def render_named_table(entries: list[ColorEntry]) -> list[str]:
    lines = [
        "| RAL | Name | Hex | RGB | Swatch |",
        "| --- | ---- | --- | --- | ------ |",
    ]

    for entry in entries:
        lines.append(
            f"| RAL {entry.code} | {entry.name} | `{entry.hex_value}` | "
            f"`{entry.rgb[0]}, {entry.rgb[1]}, {entry.rgb[2]}` | {format_swatch(entry.hex_value)} |"
        )

    return lines


def render_effect_table(entries: list[ColorEntry]) -> list[str]:
    lines = [
        "| RAL | Type | Hex | RGB | Swatch |",
        "| --- | ---- | --- | --- | ------ |",
    ]

    for entry in entries:
        effect_type = "Metallic" if entry.code.endswith("-M") else "Solid"
        lines.append(
            f"| RAL {entry.code} | {effect_type} | `{entry.hex_value}` | "
            f"`{entry.rgb[0]}, {entry.rgb[1]}, {entry.rgb[2]}` | {format_swatch(entry.hex_value)} |"
        )

    return lines


def render_classic_section(entries: list[ColorEntry]) -> list[str]:
    lines = [
        "## RAL Classic",
        "",
        "Source: local `RALColor.cs` decompiled color table.",
        "",
    ]

    for category_label, _, _ in CLASSIC_CATEGORY_LABELS:
        category_entries = [entry for entry in entries if entry.category == category_label]
        if not category_entries:
            continue

        lines.append(f"### {category_label}")
        lines.append("")
        lines.extend(render_named_table(category_entries))
        lines.append("")

    return lines


def render_family_section(
    family: FamilyConfig,
    category_links: list[tuple[str, str]],
    entries: list[ColorEntry],
) -> list[str]:
    lines = [
        f"## {family.name}",
        "",
        f"Source: [{family.name}]({family.base_url}) and its per-group `all ...` pages.",
        "",
    ]

    for _, category_label in category_links:
        category_entries = [entry for entry in entries if entry.category == category_label]
        if not category_entries:
            continue

        lines.append(f"### {category_label}")
        lines.append("")

        if family.slug == "ral-effect":
            lines.extend(render_effect_table(category_entries))
        else:
            lines.extend(render_named_table(category_entries))

        lines.append("")

    return lines


def lab_to_srgb(lightness: float, a_value: float, b_value: float) -> tuple[int, int, int]:
    reference_x = 95.047
    reference_y = 100.0
    reference_z = 108.883

    fy = (lightness + 16.0) / 116.0
    fx = fy + (a_value / 500.0)
    fz = fy - (b_value / 200.0)

    def invert(component: float) -> float:
        cube = component**3
        if cube > 0.008856:
            return cube
        return (component - 16.0 / 116.0) / 7.787

    x = reference_x * invert(fx)
    y = reference_y * invert(fy)
    z = reference_z * invert(fz)

    x /= 100.0
    y /= 100.0
    z /= 100.0

    red_linear = (3.2406 * x) + (-1.5372 * y) + (-0.4986 * z)
    green_linear = (-0.9689 * x) + (1.8758 * y) + (0.0415 * z)
    blue_linear = (0.0557 * x) + (-0.2040 * y) + (1.0570 * z)

    def gamma_encode(component: float) -> int:
        component = max(0.0, min(1.0, component))
        if component <= 0.0031308:
            component = 12.92 * component
        else:
            component = 1.055 * (component ** (1.0 / 2.4)) - 0.055
        return int(round(component * 255.0))

    return (
        gamma_encode(red_linear),
        gamma_encode(green_linear),
        gamma_encode(blue_linear),
    )


def parse_design_plus_code(code_text: str) -> tuple[int, int, int]:
    compact = re.sub(r"\s+", "", code_text.upper())
    compact = compact.replace("RAL", "")

    h_match = re.fullmatch(r"H(\d{3})L(\d{2})C(\d{2})", compact)
    if h_match is not None:
        return (
            int(h_match.group(1)),
            int(h_match.group(2)),
            int(h_match.group(3)),
        )

    ral_match = re.fullmatch(r"(\d{3})(\d{2})(\d{2})", compact)
    if ral_match is not None:
        return (
            int(ral_match.group(1)),
            int(ral_match.group(2)),
            int(ral_match.group(3)),
        )

    spaced_match = re.fullmatch(r"(\d{3})\D+(\d{2})\D+(\d{2})", code_text.strip())
    if spaced_match is not None:
        return (
            int(spaced_match.group(1)),
            int(spaced_match.group(2)),
            int(spaced_match.group(3)),
        )

    raise ValueError(f"Could not parse RAL Design System+ code: {code_text}")


def design_plus_to_srgb(hue: int, lightness: int, chroma: int) -> dict[str, object]:
    a_value = chroma * math.cos(math.radians(hue))
    b_value = chroma * math.sin(math.radians(hue))
    rgb = lab_to_srgb(float(lightness), a_value, b_value)
    hex_value = f"#{rgb[0]:02X}{rgb[1]:02X}{rgb[2]:02X}"
    hls = colorsys.rgb_to_hls(*(channel / 255.0 for channel in rgb))

    return {
        "code": f"RAL {hue:03d} {lightness:02d} {chroma:02d}",
        "short_code": f"H{hue:03d}L{lightness:02d}C{chroma:02d}",
        "lab": (float(lightness), a_value, b_value),
        "rgb": rgb,
        "hex": hex_value,
        "hsl": (hls[0] * 360.0, hls[2] * 100.0, hls[1] * 100.0),
    }


def render_design_plus_section() -> list[str]:
    lines = [
        "## RAL Design System+",
        "",
        "No static table is included here.",
        "",
        "RAL Design System+ is structured around hue, lightness, and chroma in the CIELAB colour space, not HSL.",
        "",
        "Utility script: "
        f"[generate_ral_appendix.py]({(PROJECT_ROOT / '.temp' / 'generate_ral_appendix.py').as_posix()})",
        "",
        "Example usage:",
        "",
        "```text",
        "python .temp/generate_ral_appendix.py generate",
        "python .temp/generate_ral_appendix.py design-plus --code \"RAL 070 60 60\"",
        "python .temp/generate_ral_appendix.py design-plus --hue 70 --lightness 60 --chroma 60",
        "```",
        "",
        "The `design-plus` command converts the H/L/C code to an approximate sRGB value via CIELAB -> sRGB.",
        "",
    ]
    return lines


def generate_appendix(refresh: bool = False) -> None:
    classic_entries = parse_classic_colors()
    family_results = [scrape_family(family, refresh=refresh) for family in FAMILIES]

    lines = [
        "# RAL Colors",
        "",
        "This appendix combines RAL Classic, RAL Design, RAL Effect, and RAL Plastics P1/P2.",
        "",
        "Generated with `.temp/generate_ral_appendix.py`.",
        "",
    ]

    lines.extend(render_classic_section(classic_entries))

    for family, result in zip(FAMILIES, family_results, strict=True):
        category_links, entries = result
        lines.extend(render_family_section(family, category_links, entries))

    lines.extend(render_design_plus_section())
    APPENDIX_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def run_design_plus_command(args: argparse.Namespace) -> int:
    if args.code:
        hue, lightness, chroma = parse_design_plus_code(args.code)
    else:
        if args.hue is None or args.lightness is None or args.chroma is None:
            raise ValueError("Either --code or all of --hue/--lightness/--chroma are required.")
        hue = args.hue
        lightness = args.lightness
        chroma = args.chroma

    result = design_plus_to_srgb(hue, lightness, chroma)
    lab = result["lab"]
    hsl = result["hsl"]
    rgb = result["rgb"]

    print("RAL Design System+ approximation")
    print(f"Code: {result['code']} ({result['short_code']})")
    print(f"CIELAB: L*={lab[0]:.2f}, a*={lab[1]:.3f}, b*={lab[2]:.3f}")
    print(f"sRGB: {rgb[0]}, {rgb[1]}, {rgb[2]}")
    print(f"Hex: {result['hex']}")
    print(f"HSL: {hsl[0]:.2f} deg, {hsl[1]:.2f} %, {hsl[2]:.2f} %")
    return 0


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Generate the RAL appendix and approximate RAL Design System+ colours."
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    generate_parser = subparsers.add_parser(
        "generate",
        help="Regenerate Electronics/Appendix/RAL Colors.md",
    )
    generate_parser.add_argument(
        "--refresh",
        action="store_true",
        help="Ignore cached HTML and fetch all pages again.",
    )

    design_plus_parser = subparsers.add_parser(
        "design-plus",
        help="Approximate a RAL Design System+ colour in sRGB.",
    )
    design_plus_parser.add_argument("--code", help='Example: "RAL 070 60 60" or "H070L60C60"')
    design_plus_parser.add_argument("--hue", type=int, help="Hue component, e.g. 70")
    design_plus_parser.add_argument("--lightness", type=int, help="Lightness component, e.g. 60")
    design_plus_parser.add_argument("--chroma", type=int, help="Chroma component, e.g. 60")

    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    if args.command == "generate":
        generate_appendix(refresh=args.refresh)
        print(f"Wrote {APPENDIX_PATH}")
        return 0

    if args.command == "design-plus":
        return run_design_plus_command(args)

    parser.error(f"Unsupported command: {args.command}")
    return 2


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        raise SystemExit(130)
