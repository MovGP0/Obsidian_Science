"""Extract ```graph blocks from notes into blocks.js. Usage: python -I extract.py <out_dir> <note_or_glob>..."""
import glob, json, os, re, sys

out, pats = sys.argv[1], sys.argv[2:]
blocks = []
for pat in pats:
    for f in sorted(glob.glob(pat, recursive=True)) or [pat]:
        if not os.path.isfile(f):
            continue
        t = open(f, encoding="utf-8").read()
        for i, m in enumerate(re.finditer(r"```graph\n(.*?)\n```\s*\n?(\*\*Fig\.[^\n]*)?", t, re.S)):
            blocks.append({"note": os.path.basename(f), "idx": i + 1, "yaml": m.group(1), "caption": m.group(2) or ""})
open(os.path.join(out, "blocks.js"), "w", encoding="utf-8").write("const BLOCKS = " + json.dumps(blocks, ensure_ascii=False) + ";\n")
print(len(blocks), "blocks")
