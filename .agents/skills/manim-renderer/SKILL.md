---
name: manim-renderer
description: Create, edit, validate, and troubleshoot browser-native mathematical animations in Obsidian `manim` code blocks with the local Manim Renderer plugin and manim-web. Use when a task mentions Manim, manim-web, animated mathematical figures, `manim` fences, or maintenance of the Manim Renderer plugin.
compatibility: Requires the local Manim Renderer plugin, Node.js, npm, and WebGL for visual validation.
metadata:
  version: "1.1.0"
---

# Manim Renderer

## Purpose

Use this skill to add browser-native mathematical animations to Obsidian notes and to maintain the local renderer plugin.

The plugin uses [manim-web](https://github.com/maloyan/manim-web). It does not use Python Manim or an external render server.

## Locations

- Plugin: `.obsidian/plugins/manim-renderer/`
- Plugin source: `.obsidian/plugins/manim-renderer/src/main.ts`
- Plugin usage guide: `.obsidian/plugins/manim-renderer/README.md`
- Example note in the source vault: `D:/GitHub/Obsidian_Electronics/Manim web prototype.md` (not installed in this vault).
- Full JavaScript reference: `references/REFERENCE.md`

Read [the full JavaScript reference](references/REFERENCE.md) when you author a new animation, port Python Manim code, or troubleshoot an API mismatch. It documents the plugin execution model, verified JavaScript syntax, supported API groups, and current limits.

## Author a manim block

1. Read `.agents/skills/obsidian/SKILL.md` before you edit an Obsidian note.
2. Read [the full JavaScript reference](references/REFERENCE.md) for the installed API and Python-to-JavaScript mappings.
3. Inspect the target note and nearby notes. Preserve their structure and unrelated changes.
4. Add a fenced `manim` block.
5. Use JavaScript syntax. Do not use Python syntax, TypeScript type annotations, or ES module `import` statements.
6. Get API members from the supplied `manim` namespace.
7. Use the supplied `scene` object to add mobjects and play animations.
8. Keep the final frame useful. Do not remove all visible mobjects unless a blank final frame is intentional.
9. Add a figure caption below the block when the animation is a numbered figure.

Use this minimum pattern:

````markdown
```manim
const { Circle, Square, Create, Transform } = manim;

const square = new Square({ sideLength: 3 });
const circle = new Circle({ radius: 1.5 });

await scene.play(new Create(square));
await scene.play(new Transform(square, circle));
await scene.wait(1);
```
````

The plugin supplies these variables:

- `scene`: A ready `manim-web` `Scene` that renders in the note.
- `manim`: The complete `manim-web` package namespace.
- `container`: The HTML element that contains the scene.

Check the [manim-web documentation](https://maloyan.github.io/manim-web/) when an API name, constructor option, or animation behavior is uncertain. Do not invent an API that is not in the installed package.

## Security

A `manim` block is executable JavaScript.

- Run a block only when the note is trusted.
- Do not change the plugin to run blocks automatically unless the user explicitly accepts the security risk.
- Do not expose the Obsidian `app`, vault APIs, Node.js APIs, or Electron APIs to block code.
- Do not load the runtime from a CDN. Keep the locked npm dependency so notes can render offline.

## Modify the plugin

1. Read the current plugin source, manifest, package file, README, and styles before you edit them.
2. Keep `manifest.json`, `package.json`, and the generated `main.js` version consistent.
3. Keep `obsidian` external to the bundle.
4. Keep scene cleanup in the `MarkdownRenderChild` lifecycle. Dispose the active scene when the user stops it and when Obsidian unloads the block.
5. Keep Run, Stop, Replay, status, and error behavior accessible from the keyboard.
6. Preserve the explicit-run security model.
7. Update the README and example note when the code-block contract changes.
8. Use the locked `manim-web` version. If an upgrade is required, check the official release and API documentation before you change the lock file.

Run these commands from `.obsidian/plugins/manim-renderer/` after a plugin change:

```powershell
npm ci
npm run build
node --check main.js
```

The complete `manim-web` namespace is bundled. A multi-megabyte `main.js` file is expected for this prototype.

## Validate

For a note change:

- Confirm that the `manim` fences are balanced.
- Confirm that the block has no `import` statement and no TypeScript-only syntax.
- Confirm that all used API members exist in the installed `manim-web` package.
- Open the note in Obsidian reading mode.
- Select **Run animation** and check the full animation and final frame.
- Select **Replay** and check that the scene starts from a clean state.
- Select **Stop** during a run and check that rendering stops without an error.
- Confirm that note Markdown uses UTF-8 without BOM and LF line endings, as required by this vault.

For a plugin change:

- Run the clean install, build, and syntax commands.
- Confirm that `manifest.json` is valid JSON and that its `id` matches the plugin directory.
- Check the focused diff with `git diff --check`.
- Reload Obsidian only when it is safe to replace the active plugin instance.
- Test one block with a valid program and one block with a deliberate syntax error.
- Confirm that the valid block renders and that the invalid block shows an actionable error.

## Common failures

| Symptom | Cause | Action |
| --- | --- | --- |
| `SyntaxError` mentions `import` | A block contains an ES module import. | Remove the import and get the member from `manim`. |
| `SyntaxError` mentions a type | A block contains TypeScript syntax. | Replace it with plain JavaScript. |
| A constructor is not a function | The API name does not exist in the locked package. | Check the installed declarations and official documentation. |
| The block is blank after completion | The program removed or faded out all mobjects. | Keep a useful final mobject or explain the blank frame. |
| A stale canvas remains after an edit | The old scene was not disposed. | Check the render-child unload and restart paths. |
| The animation does not appear | The plugin is disabled, the note is not rendered, or WebGL failed. | Enable the plugin, use reading mode, and inspect the error status and developer console. |

## Report

State which notes or plugin files changed. Report the build result and the Obsidian visual check separately. If the animation was not tested in Obsidian, state this limit explicitly.
