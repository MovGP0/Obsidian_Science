# Academic expository writing — Agent Skills

Two independent Agent Skills following the Agent Skills specification:
https://agentskills.io/specification

## Included

- `math-expository-writing/` — explain and rigorously prove mathematical ideas in accessible articles, lecture notes, and textbooks.
- `physics-expository-writing/` — explain physical phenomena through assumptions, governing principles, mathematical modeling, predictions, and tests.

Each folder is a **standalone skill** with a `SKILL.md` file and four supporting files under `references/`:

- `structure-and-patterns.md` — alternative article/chapter structures and detailed techniques.
- `examples.md` — fully worked original instructional examples and contrasts.
- `research.md` — bibliographic references, DOI/links, practical implications and evidence limitations.
- `quality-checklist.md` — review rubric, correctness checks, and repairs.

## Install

Copy either or both **skill folders** (not merely the `SKILL.md` files) to the skills directory recognized by your agent client. Keep folder names and relative file paths intact. Reload or restart the agent if the client requires it.

Exact installation paths differ across clients and are not specified by the Agent Skills file-format standard.

If the reference CLI is installed, validate each skill:

```sh
skills-ref validate math-expository-writing
skills-ref validate physics-expository-writing
```

If using a CLI that exposes `agentskills validate` instead, consult that implementation's documentation.

## Example prompts

- "Using the math-expository-writing skill, write a rigorous but intuitive explanation of the spectral theorem for engineering students. Include a proof roadmap, an example and a counterexample to dropping an assumption."
- "Using the physics-expository-writing skill, write a chapter on damped harmonic oscillators. Start with a phenomenon, state approximations, derive the governing equation, interpret limiting regimes and propose a measurement."
- "Use the physics-expository-writing skill to critique this section. Prioritize physical correctness and the connection between models and evidence."
- "Use the math-expository-writing skill to rewrite this proof so readers can reconstruct its strategy. Keep the theorem mathematically unchanged."

## Intended uses and limitations

These skills are for **expository and educational writing**, not a substitute for the specialized publishing standards of a new theoretical or experimental research paper.

The suggested article structures combine evidence-backed principles with editorial judgment. There is no established universally optimal article sequence for every reader or domain. The research files explicitly distinguish direct findings from extrapolations.

Version: 1.0.0; authored October 2026.
