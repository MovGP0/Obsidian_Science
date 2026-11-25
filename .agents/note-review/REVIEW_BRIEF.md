# Note review brief (for review sub-agents)

You review Obsidian notes in the vault `D:\GitHub\Obsidian_Science`. This is a READ-ONLY review. Do not edit, create, or format any vault note. Your only output is your results file.

## Goal

The project explains complex topics more simply WITHOUT loss of correctness, and adds native graphs (Obsidian Graphs plugin) and Manim animations (local manim-web `manim` code blocks) where they genuinely help understanding. Read each assigned note and write concrete, note-specific suggestions. Pay special attention to correctness: a pilot review of the Classical Mechanics folder found real errors of these kinds:

- sign errors and wrong factors in derivations (for example a Lagrangian sign that made the heavier Atwood mass rise, wrong partial derivatives of a double-pendulum Lagrangian, a missing minus in $\Phi=-GM/r$, a missing factor $r$ in an integrand);
- dimensionally inconsistent formulas (a force integrated over an angle, momentum per area confused with pressure, missing $1/c$ in an action);
- wrong or misleading physics statements (for example "energy transfer between normal modes" in a linear chain, "a state is a volume in phase space", a mislabelled Verlet algorithm, $F_{ij}=-F_{ij}$);
- misquoted numerical results or rounding that changes later results;
- symbol clashes inside one note (one letter for two quantities), physical-quantity tables that list wrong meanings or symbols the note never uses, and misused semantic color macros;
- wiki links to the wrong note or to headings that do not exist, broken embeds;
- outdated experimental bounds or values.

## Before you start

Skim these for conventions (do not spend long): `AGENTS.md`, `.agents/skills/obsidian/SKILL.md`, `.agents/skills/physics-expository-writing/SKILL.md` or `.agents/skills/math-expository-writing/SKILL.md` (whichever fits your notes), `.agents/skills/obsidian-graphs/SKILL.md`, the first ~60 lines of `.agents/skills/manim-renderer/SKILL.md`, and `preamble.sty` (semantic macros such as `\mechanical{}`, `\signal{}`, `\energy{}`).

## Per note

Read every note in your list fully. Paths are relative to the vault root, UTF-8, and may contain en dashes or curly apostrophes. For each note, judge:

- Correctness: re-derive key steps and recompute key numbers (use python for numeric checks when useful). Check dimensions and limiting cases. Only report errors you are confident about, quote the offending expression, and state the correct form.
- Links: when a link looks suspicious, check that the target note and heading exist (grep).
- Clarity: where the explanation is too dense, skips steps, or lacks intuition, motivation, limiting cases, or a worked example, and how to simplify it while staying correct.
- Graph: whether a 2D or 3D plot would help. Say exactly what to plot (functions, axes, parameters, ranges).
- Manim: whether an animation would help. Say what it shows in one or two sentences. Recommend it only where motion, time evolution, or a transformation adds understanding beyond a static graph.
- Hubs, exercise lists, formula sheets, glossaries, and placeholders: keep suggestions brief ("no change needed" is fine). Do not invent suggestions.

If a single note is very large, you may delegate parts of your list to your own sub-agents with this same brief, but you are responsible for the final file and must check that it is complete.

## Output

Write `D:\GitHub\Obsidian_Science\.agents\note-review\results\<batch>.txt` (UTF-8 without BOM, LF line endings), one block per note, in the same order as your list, in EXACTLY this plain-text format:

```text
=== <vault-relative path exactly as in the list, forward slashes>
priority: high|medium|low
graph: yes|no
manim: yes|no
summary: <one sentence assessment of the note's current clarity>
- <suggestion 1>
- <suggestion 2>
```

Rules:

- priority = how much the note would gain from a rewrite.
- 2–6 suggestions per note (1 is fine for hubs and references).
- Each suggestion is one line, specific to the note (name the section or equation), and starts with one tag: `[Correctness]`, `[Simplify]`, `[Intuition]`, `[Example]`, `[Graph]`, `[Manim]`, `[Structure]`, or `[Links]`.
- Use `[Correctness]` only for actual errors (wrong math or physics, wrong links, symbol clashes, wrong tables), not for style wishes.
- Inline LaTeX with `$...$` is allowed. Never put a newline inside a suggestion, and never start a line with `=== ` except block headers.
- Every listed path must have exactly one block. Write the file incrementally (for example after every ~10 notes) so work is not lost.

## Final reply

Reply with ONE short line only: `<batch>: <blocks> blocks, high/medium/low = h/m/l, correctness = <count of [Correctness] lines>`. Details belong in the results file, not in the reply.
