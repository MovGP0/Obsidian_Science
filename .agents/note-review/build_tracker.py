"""Build the Note Improvement Tracker (index note plus one note per folder).

Usage (from the vault root): python -I .agents/note-review/build_tracker.py

Inputs in .agents/note-review/:
- results/*.txt       review blocks: "=== <path>", priority/graph/manim/summary lines, "- [Tag] suggestion" lines
- verification/*.txt  verification blocks: "=== <path>", then "- STATUS | claim | detail" per [Correctness] claim, in claim order

Outputs:
- 04 Reference/Note Improvement Tracker.md               index with status per folder
- 04 Reference/Note Improvement Tracker/<folder>.md      table, correctness findings, and suggestions per folder
"""
import os, re, subprocess
from collections import Counter, OrderedDict

REVIEW = os.path.join(".agents", "note-review")
INDEX = "04 Reference/Note Improvement Tracker.md"
SUBDIR = "04 Reference/Note Improvement Tracker"

files = subprocess.run(["git", "-c", "core.quotepath=off", "ls-files", "*.md"],
                       capture_output=True, text=True, encoding="utf-8").stdout.splitlines()
files = sorted(f for f in files if not f.startswith(".") and "/" in f
               and not f.startswith(SUBDIR) and f != INDEX)


def parse_blocks(folder, handler):
    if not os.path.isdir(folder):
        return
    for name in sorted(os.listdir(folder)):
        if not name.endswith(".txt") or "_part" in name:
            continue
        cur = None
        for line in open(os.path.join(folder, name), encoding="utf-8"):
            line = line.rstrip("\n")
            if line.startswith("=== "):
                cur = handler(None, line[4:].strip().replace("\\", "/"))
            elif cur is not None:
                handler(cur, line)


results = {}


def res_handler(cur, line):
    if cur is None:
        results[line] = {"priority": "", "graph": "", "manim": "", "summary": "", "sugg": []}
        return results[line]
    if re.match(r"^(priority|graph|manim|summary):", line):
        k, v = line.split(":", 1)
        cur[k] = v.strip()
    elif line.lstrip().startswith("- "):
        cur["sugg"].append(line.strip()[2:])
    return cur


verif = {}


def ver_handler(cur, line):
    if cur is None:
        return verif.setdefault(line, [])
    if line.startswith("- ") and "|" in line:
        parts = [p.strip() for p in line[2:].split("|")]
        cur.append((parts[0].upper(), parts[-1] if len(parts) > 2 else ""))
    return cur


parse_blocks(os.path.join(REVIEW, "results"), res_handler)
parse_blocks(os.path.join(REVIEW, "verification"), ver_handler)

base_count = Counter(os.path.basename(f)[:-3] for f in files)


def target(path):
    stem = path[:-3]
    base = os.path.basename(stem)
    return base if base_count[base] == 1 else stem


def cell(s):
    return s.replace("|", "\\|")


ids = {f: f"N{i+1:04d}" for i, f in enumerate(files)}
MAX_GROUP = 250  # split a folder one level deeper while it holds more notes than this
dir_count = Counter()
for f in files:
    dirs = f.split("/")[:-1]
    for k in range(1, len(dirs) + 1):
        dir_count["/".join(dirs[:k])] += 1
groups = OrderedDict()
for f in files:
    dirs = f.split("/")[:-1]
    k = min(2, len(dirs))
    while k < len(dirs) and dir_count["/".join(dirs[:k])] > MAX_GROUP:
        k += 1
    groups.setdefault("/".join(dirs[:k]), []).append(f)
groups = OrderedDict(sorted(groups.items()))


def sub_name(key):
    return "Tracker " + key.replace("/", " – ")


def corr_items(f):
    items, k = [], 0
    for s in results.get(f, {}).get("sugg", []):
        if s.startswith("[Correctness]"):
            v = verif.get(f, [])
            items.append((s[len("[Correctness]"):].strip(), v[k] if k < len(v) else None))
            k += 1
    return items


os.makedirs(SUBDIR, exist_ok=True)
written = set()
summary_rows = []
tot = Counter()
for key, fl in groups.items():
    name = sub_name(key)
    written.add(name + ".md")
    an = [f for f in fl if f in results]
    high = sum(1 for f in an if results[f]["priority"] == "high")
    corr = [(f, c, v) for f in fl for c, v in corr_items(f)]
    st = Counter(v[0] for _, _, v in corr if v)
    nver = sum(st.values())
    summary_rows.append((key, name, len(fl), len(an), high, len(corr), nver, st.get("FIXED", 0) + st.get("PARTLY", 0)))
    tot.update(notes=len(fl), an=len(an), high=high, corr=len(corr), ver=nver, fixed=st.get("FIXED", 0) + st.get("PARTLY", 0))

    out = [f'---\ntitle: "Note Improvement Tracker – {key}"\n---\n']
    out.append(f"> [!TLDR]\n> This note tracks the review of the {len(fl)} notes in `{key}`. "
               "It lists possible errors, the review status of each note, and the improvement suggestions.\n")
    out.append("Back to the index: [[Note Improvement Tracker]]\n")
    out.append("## Correctness findings\n")
    if corr:
        state = (f"{nver} of them are verified ({', '.join(f'{n} {s.lower()}' for s, n in st.most_common())}); "
                 f"the other {len(corr) - nver} are not verified yet. ") if nver else "None of them are verified yet. "
        out.append(f"The review found {len(corr)} possible errors or notation conflicts. {state}"
                   "Each item links to the full suggestion entry.\n")
        for f, c, v in corr:
            line = f"- [[#{ids[f]}|{ids[f]}]] {os.path.basename(f)[:-3]}: {c}"
            if v:
                line += f" **{v[0].capitalize()}:** {v[1]}"
            out.append(line)
    else:
        out.append("The review found no possible errors in this folder.")
    out.append("")
    out.append("## Tracking table\n")
    out.append("Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.\n")
    out.append("| ID | Note | Status | Priority | Graph | Manim | Suggestions |\n| --- | --- | --- | --- | --- | --- | --- |")
    for f in fl:
        rel = f[len(key) + 1:] if f.startswith(key + "/") else f
        r = results.get(f)
        lk = f"[[{target(f)}\\|{cell(rel[:-3])}]]"
        if r:
            out.append(f"| {ids[f]} | {lk} | Analyzed | {r['priority']} | {r['graph']} | {r['manim']} | [[#{ids[f]}\\|View]] |")
        else:
            out.append(f"| {ids[f]} | {lk} | Pending |  |  |  |  |")
    out.append("")
    out.append("## Suggestions\n")
    for f in an:
        r = results[f]
        out.append(f"### {ids[f]}\n")
        out.append(f"Note: [[{target(f)}|{os.path.basename(f)[:-3]}]]  ")
        out.append(f"Priority: {r['priority']} · Graph: {r['graph']} · Manim: {r['manim']}\n")
        if r["summary"]:
            out.append(r["summary"] + "\n")
        for s in r["sugg"]:
            out.append(f"- {s}")
        out.append("")
    with open(os.path.join(SUBDIR, name + ".md"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write("\n".join(out).rstrip("\n") + "\n")

for old in os.listdir(SUBDIR):
    if old.endswith(".md") and old not in written:
        os.remove(os.path.join(SUBDIR, old))

out = ['---\ntitle: "Note Improvement Tracker"\n---\n']
out.append("> [!TLDR]\n> This note is the index of the vault review for correctness, simpler explanations, graphs, and Manim animations. "
           "Each folder has its own tracker note with the findings and suggestions.\n")
out.append("## Goal\n")
out.append("Explain complex topics more simply without loss of correctness. Add native graphs and Manim animations where they help understanding. "
           "The suggestions are proposals. Verified correctness errors are fixed in the notes.\n")
out.append("## Status\n")
out.append("| Folder | Notes | Analyzed | High priority | Possible errors | Verified | Fixed |\n| --- | ---: | ---: | ---: | ---: | ---: | ---: |")
for key, name, n, a, h, c, v, fx in summary_rows:
    out.append(f"| [[{name}\\|{cell(key)}]] | {n} | {a} | {h} | {c} | {v} | {fx} |")
out.append(f"| **Total** | **{tot['notes']}** | **{tot['an']}** | **{tot['high']}** | **{tot['corr']}** | **{tot['ver']}** | **{tot['fixed']}** |\n")
out.append("**Verified** counts findings that a second agent re-derived. **Fixed** counts verified findings that were fully or partly fixed in the note.\n")
out.append("## Process\n")
out.append("- Review data, the review brief, and the fix brief are in `.agents/note-review/`.")
out.append("- Rebuild the tracker notes from the vault root with `python -I .agents/note-review/build_tracker.py`.")
with open(INDEX, "w", encoding="utf-8", newline="\n") as fh:
    fh.write("\n".join(out).rstrip("\n") + "\n")

print(f"files={len(files)} analyzed={len(results)} groups={len(groups)} corr={tot['corr']} verified={tot['ver']} unknown={len(set(results) - set(files))}")
