"""Report verify-and-fix batch completeness. Run from the vault root: python -I .agents/note-review/fix_status.py"""
import os
from collections import Counter

base = os.path.join(".agents", "note-review")
bdir, vdir = os.path.join(base, "fix_batches"), os.path.join(base, "verification")
done, partial, todo, stat = [], [], [], Counter()
for name in sorted(n for n in os.listdir(bdir) if n.startswith("f") and n.endswith(".txt")):
    want = sum(1 for l in open(os.path.join(bdir, name), encoding="utf-8") if l.startswith("- [Correctness]"))
    vp = os.path.join(vdir, name)
    have = [l for l in open(vp, encoding="utf-8") if l.startswith("- ") and "|" in l] if os.path.exists(vp) else []
    for l in have:
        stat[l[2:].split("|")[0].strip().upper()] += 1
    b = name[:-4]
    (done if have and len(have) >= want else partial if have else todo).append(b if not have or len(have) >= want else f"{b}({len(have)}/{want})")
print("done:", len(done), " ".join(done))
print("partial:", len(partial), " ".join(partial))
print("not started:", len(todo), " ".join(todo))
print("outcomes:", dict(stat))
