# Fix brief (for verify-and-fix sub-agents)

You verify and fix suspected errors in Obsidian notes in the vault `D:\GitHub\Obsidian_Science`.

## Input

Your batch file `D:\GitHub\Obsidian_Science\.agents\note-review\fix_batches\<batch>.txt` has blocks of the form `=== <vault-relative note path>`, each followed by `- [Correctness] ...` claims from an automated review. The claims may be wrong. Treat them as hypotheses, not facts. In the Classical Mechanics pilot, about 85% of such claims were correct, so check each one.

## Before editing

Read and follow `AGENTS.md`, `.agents/skills/obsidian/SKILL.md`, and `preamble.sty`. The semantic macros (`\mechanical{}`, `\energy{}`, `\signal{}`, and others) are chosen by the quantity's meaning; keep operators and indices uncolored. The formatter script named in the skill does not exist. Keep each edited note UTF-8 without BOM and with LF line endings (the Edit tool preserves the existing format; if an edited note has CRLF line endings, convert it to LF).

## For each claim

1. Read the whole note. Re-derive or recompute independently: dimensional analysis, limiting cases, small numeric checks with python when useful. For link claims, check that the target note and heading exist (grep). Decide CONFIRMED, PARTLY (some of the claim is right), or REJECTED.
2. If confirmed (or for the confirmed part), fix the note with a minimal, narrow edit:
   - Correct the equation or statement. Keep the note's style, macros, structure, and surrounding text.
   - If the fix changes a result used later in the same note, update the dependent results consistently.
   - For a symbol clash, rename one use only within that note (and its physical-quantities table), consistently.
   - For a wrong link, point it to the existing note or heading that contains the content.
   - Write new prose in English (ASD-STE100 style). If the note is in another language, match the note and say so in your report.
3. Do not rewrite for style, add new sections, edit any note that is not in your batch file, delete personal data or large passages, or redraw figures. Report such needs instead.
4. If you are still unsure after checking, do not edit. Mark the claim UNSURE and explain why.
5. Do not start sub-agents (the session has a concurrency limit). Do not commit.

## Output

Write `D:\GitHub\Obsidian_Science\.agents\note-review\verification\<batch>.txt` (UTF-8, LF), one block per note in input order, one line per claim in input order:

```text
=== <vault-relative note path>
- FIXED | <short claim> | <what you changed, one line>
- PARTLY | <short claim> | <what was right, what you changed>
- REJECTED | <short claim> | <why it is not an error, one line>
- UNSURE | <short claim> | <why, one line>
```

Never put a newline inside a line, and never use `|` inside the three fields except as the separator. Every claim must have exactly one line.

## Final reply

Reply with ONE short line only: `<batch>: fixed F, partly P, rejected R, unsure U` followed by at most three of the most significant fixes, separated by semicolons, on the same line.
