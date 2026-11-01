# Manim Renderer prototype

This Obsidian plugin renders browser-native mathematical animations with [manim-web](https://github.com/maloyan/manim-web). It does not require Python or a render server.

## Build and enable

1. Run `npm ci` in this plugin folder.
2. Run `npm run build`.
3. Reload Obsidian.
4. Enable **Manim Renderer** in **Settings > Community plugins**.

## Use

Add a `manim` code block to a note:

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

- `scene`: A ready `manim-web` `Scene` that renders into the note.
- `manim`: The complete `manim-web` package namespace.
- `container`: The HTML element that contains the scene.

Select **Run animation** to execute the block. Select **Stop** to dispose the current scene, or select **Replay** after the program completes.

## Prototype limits

- The block contains JavaScript. It does not accept Python Manim syntax or TypeScript type annotations.
- ES module `import` statements are not supported inside a block. Get API members from `manim` instead.
- The prototype has no timeline scrubber, export command, or persistent settings.
- The complete `manim-web` namespace is bundled for offline use. This makes `main.js` larger than a typical Obsidian plugin.

## Security

A `manim` block is executable JavaScript. Run a block only when you trust the note. The plugin requires an explicit button selection and does not execute blocks when a note opens.

