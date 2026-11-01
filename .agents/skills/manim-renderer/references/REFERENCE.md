# Manim Renderer JavaScript Reference

## Scope

This reference applies to the local Obsidian Manim Renderer plugin and its locked `manim-web` 0.3.24 dependency.

Use this source order when information differs:

1. Installed declarations in `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/`.
2. The [manim-web API reference](https://maloyan.github.io/manim-web/api/) and [manim-web source exports](https://github.com/maloyan/manim-web/blob/main/src/index.ts).
3. The [Python Manim Community reference](https://docs.manim.community/en/stable/index.html) for concepts and topic structure only.

Python Manim and manim-web are separate projects. Similar names do not guarantee the same constructor, option, method, or result. Verify a member in the installed declarations before you use it.

## Code-block execution model

The plugin runs the contents of each fenced `manim` block as plain asynchronous JavaScript. It supplies three local variables:

- `scene`: A ready `manim-web` `Scene` attached to the block canvas.
- `manim`: The complete `manim-web` package namespace.
- `container`: The HTML element that contains the scene.

The plugin creates the scene with automatic resize enabled. It owns the scene lifecycle and disposes the scene when the block stops, restarts, or unloads.

These rules are mandatory:

- Do not use `import` or `export` statements.
- Do not define a Python `Scene` subclass or a `construct` method.
- Do not use TypeScript annotations, interfaces, enums, or `as` casts.
- Use `await` for `scene.play(...)` and `scene.wait(...)`.
- Get classes, colors, directions, and rate functions from `manim`.
- Do not create a second scene in the same `container`.
- Do not call `scene.dispose()`. The plugin owns cleanup.

Minimum block:

```javascript
const { Circle, Create, BLUE } = manim;

const circle = new Circle({
    radius: 1.5,
    color: BLUE,
    fillOpacity: 0.2,
});

await scene.play(new Create(circle));
await scene.wait(1);
```

## Translate Python Manim to JavaScript

Translate the design first. Then verify each API name. Do not mechanically convert every underscore to camel case.

| Python Manim | Plugin JavaScript |
| --- | --- |
| `from manim import *` | `const { Circle, Create } = manim;` |
| `class Demo(Scene):` | Omit it. The plugin supplies `scene`. |
| `def construct(self):` | Omit it. Write statements directly in the block. |
| `Circle(radius=2, color=BLUE)` | `new Circle({ radius: 2, color: BLUE })` |
| `self.add(circle)` | `scene.add(circle)` |
| `self.remove(circle)` | `scene.remove(circle)` |
| `self.play(Create(circle))` | `await scene.play(new Create(circle))` |
| `self.play(a, b)` | `await scene.play(a, b)` |
| `self.wait(1)` | `await scene.wait(1)` |
| `run_time=2` | `{ duration: 2 }` |
| `rate_func=linear` | `{ rateFunc: linear }` |
| `circle.animate.shift(2 * RIGHT)` | `circle.animate.shift([2, 0, 0])` |
| `obj.set_color(RED)` | `obj.setColor(RED)` |
| `obj.move_to([1, 2, 0])` | `obj.moveTo([1, 2, 0])` |
| `obj.next_to(other, RIGHT)` | `obj.nextTo(other, RIGHT)` |
| `VGroup(a, b)` | `new VGroup(a, b)` |
| `PI`, `TAU`, `DEGREES` | `Math.PI`, `2 * Math.PI`, `Math.PI / 180` |
| `(x, y, z)` | `[x, y, z]` |
| `lambda x: x ** 2` | `(x) => x ** 2` |
| `True`, `False`, `None` | `true`, `false`, `null` |

JavaScript constructor options use an object. Do not pass Python keyword arguments as positional values:

```javascript
const { Rotate, smooth } = manim;

await scene.play(new Rotate(circle, {
    angle: Math.PI,
    duration: 2,
    rateFunc: smooth,
}));
```

## Scene API

The supplied base `Scene` supports these common operations:

| Operation | Use |
| --- | --- |
| `scene.add(...mobjects)` | Add visible objects without an animation. |
| `scene.remove(...mobjects)` | Remove objects. |
| `scene.clear()` | Remove all objects. |
| `await scene.play(...animations)` | Play one or more animations at the same time. |
| `await scene.wait(duration)` | Hold the current frame. The default is one second. |
| `scene.pause()` / `scene.resume()` | Control active playback. Prefer the plugin controls for normal use. |
| `scene.stop()` | Stop active playback. Prefer the plugin Stop control. |
| `scene.seek(time)` | Move to a timeline time when the scene supports it. |
| `scene.batch(callback)` | Group scene changes into one render operation. |

Multiple arguments to `scene.play` start together:

```javascript
const { Circle, Square, FadeIn, FadeOut } = manim;

const circle = new Circle().shift([-2, 0, 0]);
const square = new Square().shift([2, 0, 0]);

await scene.play(
    new FadeIn(circle, { duration: 1 }),
    new FadeIn(square, { duration: 1 })
);
await scene.play(
    new FadeOut(circle),
    square.animate.setColor("#ffcc00").scale(1.5)
);
```

## Coordinates, colors, and directions

manim-web uses three-element arrays for positions and vectors:

```javascript
const point = [2, -1, 0];
circle.moveTo(point);
circle.shift([1, 0.5, 0]);
```

The namespace exports these direction constants:

`UP`, `DOWN`, `LEFT`, `RIGHT`, `IN`, `OUT`, `ORIGIN`, `UL`, `UR`, `DL`, `DR`.

It also exports Manim color constants, including common names such as `WHITE`, `BLACK`, `BLUE`, `RED`, `GREEN`, `YELLOW`, `ORANGE`, `PURPLE`, `PINK`, `GRAY`, and their shade variants. CSS colors and hexadecimal strings are valid where an option accepts a color.

Use vector utilities when an operation is clearer than array arithmetic:

`scaleVec`, `addVec`, `subVec`, `dotVec`, `crossVec`, `lengthVec`, `normalizeVec`, `unitPerpendicularTo`, `orthonormalFrame`, `orientation2D`, and `linspace`.

## Mobjects and common methods

`Mobject` is the common base class. Most visual objects support these methods:

### Style

- `setColor(color)`
- `setStrokeOpacity(opacity)`
- `setStrokeWidth(width)`
- `setFill(color?, opacity?)`
- `setFillOpacity(opacity)`
- `setStyle(style)`

`VGroup` also supplies `setStroke(color?, width?, opacity?)` and applies it to its children. For one mobject, use `setStyle({ strokeColor, strokeWidth, strokeOpacity })` when you must set all stroke properties together.

### Transform and position

- `shift(vector)`
- `moveTo(point)`
- `moveToAligned(mobject, direction)`
- `rotate(angle, axisOrOptions?)`, where the second value is an axis array or `{ axis, aboutPoint, aboutEdge }`
- `rotateAboutOrigin(angle, axis?)`
- `flip(axis?)`
- `scale(factor, { aboutPoint, aboutEdge }?)`
- `stretch(factor, dimension, { aboutPoint, aboutEdge }?)`
- `setX(x)`, `setY(y)`, `setZ(z)`
- `center()`
- `toEdge(direction, buffer?)`
- `toCorner(direction, buffer?)`
- `nextTo(mobjectOrPoint, direction?, buffer?)`
- `alignTo(mobjectOrPoint, direction)`

### Structure and inspection

- `add(...mobjects)` and `remove(...mobjects)`
- `copy()`
- `become(other)`
- `replace(other, stretch?)`
- `getCenter()`
- `getWidth()` and `getHeight()`
- `getTop()`, `getBottom()`, `getLeft()`, and `getRight()`
- `saveState()` and `restoreState()`
- `generateTarget()`

Method chains change the object immediately:

```javascript
const { Square, BLUE } = manim;

const square = new Square({ sideLength: 2 })
    .setFill(BLUE, 0.35)
    .setStyle({ strokeColor: "#ffffff", strokeWidth: 3 })
    .moveTo([-2, 1, 0]);

scene.add(square);
```

The `animate` proxy records a target state and returns an animation for `scene.play`:

```javascript
await scene.play(
    square.animate
        .shift([4, 0, 0])
        .rotate(Math.PI / 2)
        .setColor("#ff5555")
);
```

Use `VGroup` for vector mobjects and `Group` for general mobjects. `VGroup` supports `arrange(direction?, buffer?, center?)` and `arrangeInGrid(rows?, columns?, bufferX?, bufferY?)`.

## Geometry

### Common constructors

```javascript
const {
    Circle,
    Line,
    Rectangle,
    Square,
    Polygon,
    Triangle,
    Arrow,
    Dot,
    BLUE,
    RED,
} = manim;

const circle = new Circle({ radius: 1.2, color: BLUE, fillOpacity: 0.25 });
const line = new Line({ start: [-3, -1, 0], end: [3, 1, 0], color: RED });
const rectangle = new Rectangle({ width: 3, height: 1.5 });
const square = new Square({ sideLength: 2 });
const triangle = new Triangle();
const polygon = new Polygon({
    vertices: [[-1, -1, 0], [1, -1, 0], [0, 1, 0]],
});
const arrow = new Arrow({ start: [-2, 0, 0], end: [2, 0, 0] });
const dot = new Dot({ point: [0, 0, 0] });
```

Check the declaration for a constructor before you port a Python call. For example, `Polygon` takes one options object with `vertices`; it does not take Python-style vertex arguments.

### Geometry catalogue

- Curves: `Arc`, `ArcBetweenPoints`, `TangentialArc`, `CubicBezier`, `Ellipse`.
- Circular regions: `Circle`, `Annulus`, `AnnularSector`, `Sector`.
- Lines and arrows: `Line`, `DashedLine`, `Arrow`, `DoubleArrow`, `Vector`, `CurvedArrow`, `CurvedDoubleArrow`.
- Points: `Dot`, `SmallDot`, `LargeDot`, `AnnotationDot`, `LabeledDot`.
- Polygons: `Polygon`, `Triangle`, `Rectangle`, `Square`, `RoundedRectangle`, `RegularPolygon`, `Pentagon`, `Hexagon`, `Star`, `RegularPolygram`, `Polygram`.
- Measurements: `Angle`, `RightAngle`, `Elbow`, `TangentLine`.
- Matchers: `BackgroundRectangle`, `SurroundingRectangle`, `Underline`, `Cross`.
- Boolean shapes: `Union`, `Intersection`, `Difference`, `Exclusion` and the lowercase factory forms.
- Labels: `LabeledLine`, `LabeledArrow`, `LabeledPolygram`.
- Arrow tips: `ArrowTip`, triangle, circle, square, filled, and stealth variants.

## Text and formulas

### Plain text

```javascript
const { Text, Write, BLUE } = manim;

const label = new Text({
    text: "Electric field",
    fontSize: 48,
    color: BLUE,
    fontFamily: "Arial",
});

await scene.play(new Write(label));
```

`Text` options include `text`, `fontSize`, `fontFamily`, `fontWeight`, `fontStyle`, `color`, `fillOpacity`, `strokeWidth`, `lineHeight`, `letterSpacing`, `textAlign`, and `fontUrl`.

Other text objects include `Paragraph`, `MarkupText`, `Code`, `BulletedList`, `Title`, `MarkdownText`, `DecimalNumber`, `Integer`, and `Variable`.

### LaTeX

`MathTex` renders asynchronously. Wait for it before layout or animation:

```javascript
const { MathTex, Write, YELLOW } = manim;

const equation = new MathTex({
    latex: String.raw`E = mc^2`,
    color: YELLOW,
    fontSize: 56,
});

await equation.waitForRender();
await scene.play(new Write(equation));
```

Use an array for independently styled parts:

```javascript
const { MathTex, RED, BLUE, Write } = manim;

const formula = new MathTex({
    latex: [String.raw`V`, String.raw`=`, String.raw`RI`],
});

await formula.waitForRender();
formula.getPart(0).setColor(BLUE);
formula.getPart(2).setColor(RED);
await scene.play(new Write(formula));
```

`Tex` is also exported. `MathTexSVG` is a deprecated alias for `MathTex`. Prefer `MathTex`.

In manim-web 0.3.24, `MathTex.fontSize` uses point-like values and defaults to `48` in the installed runtime. Use values near `48`; values near `1` make formulas effectively invisible. The 0.3.24 TypeScript declaration incorrectly describes this option as a scale factor with a default of `1`, so use the runtime behavior documented here.

## Axes and plotting

```javascript
const { Axes, Create, BLUE, YELLOW } = manim;

const axes = new Axes({
    xRange: [-4, 4, 1],
    yRange: [-1, 5, 1],
    xLength: 8,
    yLength: 5,
    tips: true,
});
const graph = axes.plot((x) => 0.25 * x ** 2, {
    color: BLUE,
    strokeWidth: 4,
});
const area = axes.getArea(graph, [-2, 2], {
    color: YELLOW,
    opacity: 0.25,
});

scene.add(axes, area);
await scene.play(new Create(graph));
```

Important `Axes` methods:

- `c2p(x, y)` and `coordsToPoint(x, y)` convert graph coordinates to a scene point.
- `pointToCoords(point)` performs the inverse conversion.
- `plot(function, options?)` creates a `FunctionGraph`.
- `getAxisLabels(...)` creates labels.
- `getGraphLabel(graph, ...)` creates a formula label.
- `getVerticalLine(point, options?)` creates a line to the x-axis.
- `i2gp(x, graph)` gets a point on a graph.
- `getRiemannRectangles(graph, options?)` creates a rectangle group.
- `getArea(graph, xRange, options?)` creates a filled area.
- `plotLineGraph(options)` creates connected data points.

Other plotting objects include `NumberLine`, `UnitInterval`, `NumberPlane`, `FunctionGraph`, `ImplicitFunction`, `ParametricFunction`, `ComplexPlane`, `PolarPlane`, `BarChart`, `VectorField`, `ArrowVectorField`, and `StreamLines`.

## Matrices, tables, and graphs

### Matrix

```javascript
const { Matrix, Create } = manim;

const matrix = new Matrix([
    [1, 2],
    [3, 4],
]);

await scene.play(new Create(matrix));
```

Use `IntegerMatrix`, `DecimalMatrix`, or `MobjectMatrix` when the element type needs that behavior. Utilities include `getDetText`, `matrixToMobject`, and `matrixToTexString`.

### Table

`Table` takes an options object. Its `data` value is a two-dimensional array of mobjects. For text or number convenience, use `MathTable`, `IntegerTable`, or `DecimalTable` and verify their specific options in the installed declaration.

### Graphs

`Graph` and `DiGraph` create node-and-edge diagrams. Layout helpers include `computeLayout`, `computeCircularLayout`, `completeGraph`, `cycleGraph`, `pathGraph`, `starGraph`, `binaryTree`, `gridGraph`, and `bipartiteGraph`.

## Animations

Animation options commonly include:

- `duration`: Duration in seconds.
- `rateFunc`: Progress function from zero to one.
- `shift`: Optional movement vector for animations that support it.

### Creation and removal

`Create`, `DrawBorderThenFill`, `Uncreate`, `Write`, `Unwrite`, `AddTextLetterByLetter`, `RemoveTextLetterByLetter`, `AddTextWordByWord`, `ShowIncreasingSubsets`, `ShowPartial`, `ShowSubmobjectsOneByOne`, `SpiralIn`, `TypeWithCursor`, `UntypeWithCursor`, `FadeIn`, and `FadeOut`.

### Transform

```javascript
const { Square, Circle, Transform, ReplacementTransform } = manim;

const source = new Square({ sideLength: 2 });
const target = new Circle({ radius: 1.5 });

await scene.play(new Transform(source, target));

const next = new Square({ sideLength: 3 });
await scene.play(new ReplacementTransform(source, next));
```

Transform exports include `Transform`, `ReplacementTransform`, `MoveToTarget`, `TransformFromCopy`, `FadeTransform`, `FadeTransformPieces`, `TransformMatchingShapes`, `TransformMatchingTex`, `TransformAnimations`, `ClockwiseTransform`, `CounterclockwiseTransform`, `Swap`, `CyclicReplace`, `FadeToColor`, `Restore`, `ScaleInPlace`, and `ShrinkToCenter`.

Advanced function transforms include `ApplyFunction`, `ApplyMethod`, `ApplyMatrix`, `ApplyComplexFunction`, `ApplyPointwiseFunction`, and `ApplyPointwiseFunctionToCenter`.

### Movement and growth

`Rotate`, `Rotating`, `Scale`, `Shift`, `MoveToTargetPosition`, `MoveAlongPath`, `Homotopy`, `ComplexHomotopy`, `SmoothedVectorizedHomotopy`, `PhaseFlow`, `GrowArrow`, `GrowFromCenter`, `GrowFromEdge`, `GrowFromPoint`, and `SpinInFromNothing`.

### Indication

`Indicate`, `Flash`, `Circumscribe`, `Wiggle`, `ShowPassingFlash`, `ApplyWave`, `FocusOn`, `Pulse`, `ShowCreationThenDestruction`, `WiggleOutThenIn`, `ShowPassingFlashWithThinningStrokeWidth`, and `Blink`.

### Animation composition

```javascript
const {
    Circle,
    Create,
    FadeOut,
    AnimationGroup,
    LaggedStart,
    Succession,
} = manim;

const objects = [-2, 0, 2].map((x) => new Circle().shift([x, 0, 0]));

await scene.play(new LaggedStart(
    objects.map((object) => new Create(object)),
    { lagRatio: 0.2 }
));

await scene.play(new AnimationGroup(
    objects.map((object) => new FadeOut(object)),
    { lagRatio: 0 }
));

const single = new Circle();
await scene.play(new Succession([
    new Create(single),
    new FadeOut(single),
]));
```

- `AnimationGroup` combines animations in one time span.
- `LaggedStart` offsets start times with `lagRatio`.
- `Succession` runs animations in sequence.
- `LaggedStartMap` applies one animation class to many mobjects.

Lowercase factory forms such as `create(circle)` and `fadeIn(circle)` are also exported. Use either the class or factory form consistently. The examples in this reference use classes because they make constructor boundaries explicit.

## Rate functions

Common rate functions are:

`linear`, `smooth`, `easeIn`, `easeOut`, `easeInOut`, `thereAndBack`, `thereAndBackWithPause`, `rushInto`, `rushFrom`, `doubleSmooth`, `slowInto`, `runningStart`, `lingering`, and `exponentialDecay`.

The namespace also exports sine, quadratic, cubic, quartic, quintic, exponential, circular, back, elastic, and bounce variants with `easeIn...`, `easeOut...`, and `easeInOut...` names.

```javascript
const { Shift, easeInOutCubic } = manim;

await scene.play(new Shift(circle, {
    direction: [3, 0, 0],
    duration: 2,
    rateFunc: easeInOutCubic,
}));
```

## Updaters and tracked values

Use an updater when one mobject must follow changing state:

```javascript
const { ValueTracker, Dot, Line, BLUE, linear } = manim;

const tracker = new ValueTracker(0);
const dot = new Dot({ color: BLUE });
const line = new Line({ start: [-3, 0, 0], end: [3, 0, 0] });

dot.addUpdater((mobject) => {
    mobject.moveTo([tracker.getValue(), 0, 0]);
});

scene.add(line, dot);
await scene.play(tracker.animateTo(3, {
    duration: 2,
    rateFunc: linear,
}));

dot.clearUpdaters();
```

`ValueTracker` supports `getValue`, `setValue`, `incrementValue`, and `animateTo`. `ComplexValueTracker` supports complex values with `{ re, im }`.

Mobjects support `addUpdater`, `removeUpdater`, and `clearUpdaters`. An updater receives the mobject and elapsed time. Clear an updater when it is no longer needed.

Related exports include `UpdateFromFunc`, `UpdateFromAlphaFunc`, `maintainPositionRelativeTo`, `TracedPath`, `AnimatedBoundary`, `ChangingDecimal`, and `ChangeDecimalToValue`.

## SVG, images, braces, and frames

- SVG: `SVGMobject`, `VMobjectFromSVGPath`, `svgMobject`, `parseSVGPathData`, and `svgToVMobjects`.
- Images: `ImageMobject`.
- Braces: `Brace`, `BraceBetweenPoints`, `ArcBrace`, `BraceLabel`, and `BraceText`.
- Frames: `ScreenRectangle`, `FullScreenRectangle`, `FullScreenFadeRectangle`, `createFadeToBlack`, and `createFadeToWhite`.

An asset path is resolved by the browser runtime, not by Python. Test relative asset paths in the actual note. Obsidian resource URLs can differ from vault paths. Do not assume that a Python file path works in a block.

## Advanced exports and current plugin limits

The package exports more features than the current fenced-block lifecycle safely supports.

| Feature | Package state | Plugin state |
| --- | --- | --- |
| Base `Scene` and 2D mobjects | Exported | Supported. Use the supplied `scene`. |
| 3D mobjects | Exported | Limited. The supplied scene uses the base 2D scene and camera. |
| `ThreeDScene` and `ThreeDCamera` | Exported | Not supported in a block. The plugin already created a base scene. |
| `MovingCameraScene`, `ZoomedScene`, `VectorScene`, `LinearTransformationScene` | Exported | Not supported in a block for the same lifecycle reason. |
| `InteractiveScene` | Exported | Not supported as a replacement scene. |
| `Player`, `PlayerUI`, `PlayerController` | Exported | Not supported inside a block. Use plugin Run, Stop, and Replay controls. |
| `makeDraggable`, `makeHoverable`, `makeClickable` | Exported | Experimental. Their helper cleanup is not registered with the plugin lifecycle. |
| `Controls`, `PlaybackControls`, `SelectionManager`, `OrbitControls` | Exported | Experimental or unsupported. They can conflict with plugin controls and cleanup. |
| `scene.export`, `GifExporter`, `VideoExporter` | Exported | No plugin export interface. Direct use is advanced and untested. |
| `AudioManager` | Exported | Untested in Obsidian blocks. Browser media rules apply. |

Do not instantiate another scene with `new ThreeDScene(container)` or a similar call. Two renderers would own the same element, and the plugin would dispose only the supplied base scene. To support scene variants, change the plugin contract so it selects and owns the requested scene before block code runs.

The 3D object catalogue includes `Sphere`, `Cube`, `Box3D`, `Cylinder`, `Cone`, `Torus`, `Line3D`, `Arrow3D`, `Vector3D`, `Surface3D`, `ParametricSurface`, `TexturedSurface`, `ThreeDAxes`, `Polyhedron`, `Tetrahedron`, `Octahedron`, `Icosahedron`, `Dodecahedron`, `Prism`, `Dot3D`, and `ConvexHull3D`.

Other advanced catalogues include point clouds, fractals (`MandelbrotSet`, `NewtonFractal`), probability objects (`SampleSpace`, `DiceFace`), camera extensions, state serialization, timelines, feature flags, and logging. Read their installed declarations before use.

## Porting checklist

Before you run translated Python code:

1. Remove imports, scene subclasses, and `construct`.
2. Destructure every required member from `manim`.
3. Convert Python keyword arguments to a JavaScript options object.
4. Convert tuples and vector arithmetic to arrays or vector utilities.
5. Convert verified snake-case methods to their installed JavaScript names.
6. Replace `self` with the supplied `scene` only for scene operations.
7. Add `new` for class constructors.
8. Add `await` before `scene.play`, `scene.wait`, and asynchronous rendering such as `MathTex.waitForRender`.
9. Replace Python constants with verified namespace members or JavaScript expressions.
10. Check that each class, method, and option exists in the locked 0.3.24 declarations.
11. Keep a useful final frame.
12. Test Run, Replay, and Stop in Obsidian reading mode.

## Troubleshooting reference mismatches

If an example fails, inspect these paths:

- Root exports: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/index.d.ts`
- Scene: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/core/Scene.d.ts`
- Mobject: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/core/Mobject.d.ts`
- Animations: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/animation/`
- Geometry: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/mobjects/geometry/`
- Plotting: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/mobjects/graphing/`
- Text: `.obsidian/plugins/manim-renderer/node_modules/manim-web/dist/mobjects/text/`

Typical failure rules:

- `X is not a constructor`: Confirm that `X` is a root export and that it is a class, not a factory function.
- `method is not a function`: Confirm the camel-case method in the installed object declaration.
- The object is blank: Add it to the scene or play a creation animation. For `MathTex`, await rendering first.
- The final frame is blank: Do not fade out every mobject unless that result is intentional.
- A second canvas appears or cleanup fails: Remove any second `Scene` construction.
- A Python example uses an unavailable feature: Redesign it with the nearest verified manim-web feature. Do not invent a compatibility wrapper in the note.
