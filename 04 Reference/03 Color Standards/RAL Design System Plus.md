---
title: RAL Design System+
---
**RAL Design System+** is organized by **hue**, **lightness**, and **chroma** in the **CIELAB** color space.

The code `RAL 070 60 60` therefore means:

- `070`: hue angle
- `60`: lightness (`L*`)
- `60`: chroma

The following script converts a RAL Design System+ code into an **approximate** sRGB color. It is useful for digital previews, but it is not a substitute for official RAL references.

**Usage**

```text
python ral_design_system_plus.py --code "RAL 070 60 60"
python ral_design_system_plus.py --code H070L60C60
python ral_design_system_plus.py --hue 70 --lightness 60 --chroma 60
```

**Script**

```py
from __future__ import annotations

import argparse
import colorsys
import math
import re


def lab_to_srgb(lightness: float, a_value: float, b_value: float) -> tuple[int, int, int]:
    reference_x = 95.047
    reference_y = 100.0
    reference_z = 108.883

    fy = (lightness + 16.0) / 116.0
    fx = fy + (a_value / 500.0)
    fz = fy - (b_value / 200.0)

    def invert(component: float) -> float:
        cube = component ** 3
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


def parse_ral_design_code(code_text: str) -> tuple[int, int, int]:
    compact = re.sub(r"\s+", "", code_text.upper())
    compact = compact.replace("RAL", "")

    compact_match = re.fullmatch(r"H(\d{3})L(\d{2})C(\d{2})", compact)
    if compact_match is not None:
        return (
            int(compact_match.group(1)),
            int(compact_match.group(2)),
            int(compact_match.group(3)),
        )

    numeric_match = re.fullmatch(r"(\d{3})(\d{2})(\d{2})", compact)
    if numeric_match is not None:
        return (
            int(numeric_match.group(1)),
            int(numeric_match.group(2)),
            int(numeric_match.group(3)),
        )

    spaced_match = re.fullmatch(r"(\d{3})\D+(\d{2})\D+(\d{2})", code_text.strip())
    if spaced_match is not None:
        return (
            int(spaced_match.group(1)),
            int(spaced_match.group(2)),
            int(spaced_match.group(3)),
        )

    raise ValueError(f"Could not parse RAL Design System+ code: {code_text}")


def convert_ral_design_plus(hue: int, lightness: int, chroma: int) -> dict[str, object]:
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


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Approximate a RAL Design System+ color in sRGB."
    )
    parser.add_argument(
        "--code",
        help='Example: "RAL 070 60 60" or "H070L60C60"',
    )
    parser.add_argument("--hue", type=int, help="Hue component, e.g. 70")
    parser.add_argument("--lightness", type=int, help="Lightness component, e.g. 60")
    parser.add_argument("--chroma", type=int, help="Chroma component, e.g. 60")
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    if args.code:
        hue, lightness, chroma = parse_ral_design_code(args.code)
    else:
        if args.hue is None or args.lightness is None or args.chroma is None:
            parser.error("Either --code or all of --hue/--lightness/--chroma are required.")
        hue = args.hue
        lightness = args.lightness
        chroma = args.chroma

    result = convert_ral_design_plus(hue, lightness, chroma)
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


if __name__ == "__main__":
    raise SystemExit(main())
```

**Example**

For `RAL 070 60 60`, this script returns the approximate preview color `#C88127`.
