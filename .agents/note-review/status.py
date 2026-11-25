"""Report review batch completeness. Run from the vault root: python -I .agents/note-review/status.py"""
import os

base = os.path.join(".agents", "note-review")
bdir, rdir = os.path.join(base, "batches"), os.path.join(base, "results")
done, partial, todo = [], [], []
for name in sorted(n for n in os.listdir(bdir) if n.startswith("r") and n.endswith(".txt")):
    want = [l for l in open(os.path.join(bdir, name), encoding="utf-8").read().splitlines() if l]
    rp = os.path.join(rdir, name)
    have = set()
    if os.path.exists(rp):
        have = {l[4:].strip() for l in open(rp, encoding="utf-8") if l.startswith("=== ")}
    missing = [w for w in want if w not in have]
    b = name[:-4]
    if not have:
        todo.append(b)
    elif missing:
        partial.append(f"{b}({len(want) - len(missing)}/{len(want)})")
    else:
        done.append(b)
print("done:", len(done), " ".join(done))
print("partial:", len(partial), " ".join(partial))
print("not started:", len(todo), " ".join(todo))
