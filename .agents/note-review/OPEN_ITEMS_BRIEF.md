# Open items brief (for sub-agents)

You work in the Obsidian vault `D:\GitHub\Obsidian_Science` on items left over from the correctness review. Your task list is in the prompt that started you.

## Rules

- Read and follow `AGENTS.md` and `.agents/skills/obsidian/SKILL.md`. For native plots (`graph` / `graph3d` code fences), also read `.agents/skills/obsidian-graphs/SKILL.md` and `.agents/skills/obsidian-graphs/references/2d-graphs.md`. Use the semantic macros from `preamble.sty` by meaning.
- Image assets live in the vault-root `Attachements` folder (keep this spelling). When you change an SVG, edit it in place and keep valid SVG; if you must create a new asset, give it a unique descriptive name and update the embed. Keep captions in the form `**Fig. N** Description`.
- Keep edits narrow. Change only the notes and assets named in your task list. Keep notes UTF-8 without BOM and with LF line endings.
- Verify the mathematics behind every figure change numerically (python is available). State the coordinates or functions you used.
- You cannot see Obsidian. Do not claim a figure renders correctly; list every changed figure so the main session can render-check it. The main session renders `graph` blocks with `.agents/note-review/graphcheck/` (a JSXGraph page that mimics the Graphs plugin), so keep blocks within the syntax used elsewhere in the vault.
- Do not start sub-agents. Do not commit.
- If an item cannot be done correctly (for example, a raster image that cannot be edited, or a source you cannot check), leave it unchanged and explain why.

## Final reply

Reply with a short list: one line per item with DONE, PARTLY, or SKIPPED, the file(s) changed, and what changed. Then list every changed figure (note path and figure number) for the render check.
