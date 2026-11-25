"""Build the Note Improvement Tracker from git-tracked notes and agent result files.

Usage: python -I build_tracker.py <vault_root> <results_dir> <out_note> <list_dir>
Result files (results_dir/*.txt) use blocks:
=== <vault-relative path>
priority: high|medium|low
graph: yes|no
manim: yes|no
summary: <one line>
- suggestion
- suggestion
"""
import os, re, subprocess, sys
from collections import Counter, OrderedDict

vault, results_dir, out_note, list_dir = sys.argv[1:5]
PILOT = "02 Physics/01 Classical Mechanics/"

files = subprocess.run(["git", "-C", vault, "-c", "core.quotepath=off", "ls-files", "*.md"],
                       capture_output=True, text=True, encoding="utf-8").stdout.splitlines()
skip_top = {"AGENTS.md", "README.md", "LICENSE"}
files = [f for f in files if not f.startswith(".") and "/" in f
         and not f.endswith("Note Improvement Tracker.md")]
files.sort()

# pilot lists for agents
os.makedirs(list_dir, exist_ok=True)
pilot = [f for f in files if f.startswith(PILOT)]
n_agents = 8
chunks = [pilot[i::1] for i in range(1)]  # placeholder
size = -(-len(pilot) // n_agents)
for i in range(n_agents):
    with open(os.path.join(list_dir, f"batch_{i+1}.txt"), "w", encoding="utf-8", newline="\n") as fh:
        fh.write("\n".join(pilot[i*size:(i+1)*size]) + "\n")

# parse results
results = {}
if os.path.isdir(results_dir):
    for name in sorted(os.listdir(results_dir)):
        if not name.endswith(".txt"):
            continue
        cur = None
        for line in open(os.path.join(results_dir, name), encoding="utf-8"):
            line = line.rstrip("\n")
            if line.startswith("=== "):
                cur = {"priority": "", "graph": "", "manim": "", "summary": "", "sugg": []}
                results[line[4:].strip().replace("\\", "/")] = cur
            elif cur is None:
                continue
            elif re.match(r"^(priority|graph|manim|summary):", line):
                k, v = line.split(":", 1)
                cur[k] = v.strip()
            elif line.lstrip().startswith("- "):
                cur["sugg"].append(line.strip()[2:])

base_count = Counter(os.path.basename(f)[:-3] for f in files)

def link(path, alias):
    stem = path[:-3]
    base = os.path.basename(stem)
    target = base if base_count[base] == 1 else stem
    return f"[[{target}\\|{alias}]]"

def cell(s):
    return s.replace("|", "\\|")

ids = {f: f"N{i+1:04d}" for i, f in enumerate(files)}
groups = OrderedDict()
for f in files:
    parts = f.split("/")
    key = "/".join(parts[:2]) if len(parts) > 2 else parts[0]
    groups.setdefault(key, []).append(f)

analyzed = [f for f in files if f in results]
out = []
out.append('---\ntitle: "Note Improvement Tracker"\n---\n')
out.append("> [!TLDR]\n> This note tracks the review of every vault note for simpler explanations, graphs, and Manim animations. "
           "Each row shows the review status, and analyzed notes link to their suggestions.\n")
out.append("## Goal\n")
out.append("Explain complex topics more simply without loss of correctness. Add native graphs and Manim animations where they help understanding. "
           "The suggestions below are proposals only. The notes themselves are not changed yet.\n")
out.append("## Status\n")
out.append("| Scope | Notes | Analyzed |\n| --- | ---: | ---: |")
for key, fl in groups.items():
    a = sum(1 for f in fl if f in results)
    out.append(f"| {cell(key)} | {len(fl)} | {a} |")
out.append(f"| **Total** | **{len(files)}** | **{len(analyzed)}** |\n")
out.append("Legend: **Status** is `Pending` or `Analyzed`. **Priority** shows how much a note gains from a rewrite (high, medium, low). "
           "**Graph** and **Manim** show whether a plot or an animation is recommended.\n")
# verification outcomes: verification/*.txt blocks "=== path" + "- STATUS | claim | detail", in claim order
verif = {}
vdir = os.path.join(os.path.dirname(results_dir.rstrip("/\\")), "verification")
if os.path.isdir(vdir):
    for name in sorted(os.listdir(vdir)):
        cur = None
        for line in open(os.path.join(vdir, name), encoding="utf-8"):
            line = line.rstrip("\n")
            if line.startswith("=== "):
                cur = verif.setdefault(line[4:].strip().replace("\\", "/"), [])
            elif cur is not None and line.startswith("- ") and "|" in line:
                parts = [p.strip() for p in line[2:].split("|")]
                cur.append((parts[0].upper(), parts[-1] if len(parts) > 2 else ""))

corr = []
for f in files:
    if f not in results:
        continue
    k = 0
    for s in results[f]["sugg"]:
        if s.startswith("[Correctness]"):
            v = verif.get(f, [])
            corr.append((f, s, v[k] if k < len(v) else None))
            k += 1
if corr:
    out.append("## Correctness findings\n")
    st = Counter(v[0] for _, _, v in corr if v)
    summary = ", ".join(f"{n} {s.lower()}" for s, n in st.most_common())
    nver = sum(1 for _, _, v in corr if v)
    out.append(f"The review found {len(corr)} possible errors or notation conflicts. "
               + (f"{nver} of them are verified ({summary}); the other {len(corr) - nver} are not verified yet. "
                  if st else "These are not verified yet. ")
               + "Each item links to the full suggestion entry.\n")
    for f, s, v in corr:
        line = f"- [[#{ids[f]}|{ids[f]}]] {os.path.basename(f)[:-3]}: {s[len('[Correctness]'):].strip()}"
        if v:
            line += f" **{v[0].capitalize()}:** {v[1]}"
        out.append(line)
    out.append("")
out.append("## Tracking table\n")
for key, fl in groups.items():
    out.append(f"### {key}\n")
    out.append("| ID | Note | Status | Priority | Graph | Manim | Suggestions |\n| --- | --- | --- | --- | --- | --- | --- |")
    for f in fl:
        rel = f[len(key)+1:] if f.startswith(key + "/") else f
        r = results.get(f)
        if r:
            out.append(f"| {ids[f]} | {link(f, cell(rel[:-3]))} | Analyzed | {r['priority']} | {r['graph']} | {r['manim']} | [[#{ids[f]}\\|View]] |")
        else:
            out.append(f"| {ids[f]} | {link(f, cell(rel[:-3]))} | Pending |  |  |  |  |")
    out.append("")
out.append("## Suggestions\n")
for f in files:
    r = results.get(f)
    if not r:
        continue
    out.append(f"### {ids[f]}\n")
    alias = os.path.basename(f)[:-3]
    out.append(f"Note: {link(f, alias).replace(chr(92) + '|', '|')}  ")
    out.append(f"Priority: {r['priority']} · Graph: {r['graph']} · Manim: {r['manim']}\n")
    if r["summary"]:
        out.append(r["summary"] + "\n")
    for s in r["sugg"]:
        out.append(f"- {s}")
    out.append("")

missing = [f for f in pilot if f not in results]
with open(out_note, "w", encoding="utf-8", newline="\n") as fh:
    fh.write("\n".join(out).rstrip("\n") + "\n")
print(f"files={len(files)} pilot={len(pilot)} analyzed={len(analyzed)} missing_pilot={len(missing)} unknown={len(set(results)-set(files))}")
for m in missing[:20]:
    print("MISSING", m)
for u in sorted(set(results) - set(files))[:20]:
    print("UNKNOWN", u)
