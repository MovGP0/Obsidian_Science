# 2D Graphs reference

## Code fence and top-level fields

Use a `graph` code fence:

````markdown
```graph
bounds: [-0.75, 6.2, 5.15, -0.65]
height: 480
width: 700
drag: false
showNavigation: false
keepAspectRatio: false
defaultAxes:
  x:
    withLabel: false
  y:
    withLabel: false
elements: [
  {type: functiongraph, def: [f:x**2, 0, 2], att: {strokeColor: '#2455e6', strokeWidth: 3}},
  {type: text, def: [1, -0.3, 'x'], att: {fixed: true, fontSize: 17, anchorX: 'middle', anchorY: 'middle'}}
]
```
````

`bounds` has the order `[x_min, y_max, x_max, y_min]`.

Use `keepAspectRatio: true` for geometric diagrams. Use `false` for most data plots when the horizontal and vertical units differ.

## Common 2D elements

### Function graph

```yaml
{type: functiongraph, def: [f:686/(x**5*(exp(4.796/x)-1)), 0.25, 5], att: {strokeColor: '#2455e6', strokeWidth: 3}}
```

- Prefix the expression with `f:`.
- Use `x**2` for powers.
- Common functions and constants include `sin`, `cos`, `exp`, and `PI`.
- The last two values are the visible start and end of the function.

### Curve from point arrays

```yaml
{type: curve, def: [[0, 1, 2, 3], [0, 0.8, 1.6, 1.9]], att: {strokeColor: '#222222', strokeWidth: 3}}
```

Use more points for a smoother curve. Keep the point order monotonic when the source curve is single-valued.

### Line or arrow

```yaml
{type: line, def: [[0, 0], [2, 1]], att: {straightFirst: false, straightLast: false, lastArrow: true, strokeColor: '#222222', strokeWidth: 2, fixed: true}}
```

Set both `straightFirst` and `straightLast` to `false` for a finite segment.

### Point

```yaml
{type: point, def: [1.2, 0.8], att: {size: 4, fixed: true, withLabel: false, fillColor: '#aeb4b8', strokeColor: '#666666'}}
```

### Text

```yaml
{type: text, def: [1.2, 0.8, 'E₀'], att: {fixed: true, fontSize: 17, anchorX: 'left', anchorY: 'middle', useMathJax: false}}
```

Prefer Unicode symbols in graph labels. Use `anchorX` and `anchorY` before changing the coordinates.

### Polygon

```yaml
{type: polygon, def: [[0, 0], [2, 0], [2, 1], [0, 1]], att: {fillColor: '#d9d9d9', fillOpacity: 0.45, borders: {strokeColor: '#777777'}, vertices: {visible: false}}}
```

Use a polygon for filled regions and schematic bands. Hide vertices unless the points are part of the figure.

## Axes and labels

- Disable automatic axis labels when they overlap the data.
- Add axis titles as positioned `text` elements.
- Add margin in `bounds` for labels outside the plotting region.
- Use explicit ticks only when the numerical scale is important.

## Visual validation

In Obsidian reading mode, check that:

- no plugin error replaces the graph;
- all curves are visible and smooth enough;
- no label touches an axis or another curve;
- arrowheads are present and point in the correct direction;
- logarithmic data is plotted on the intended scale; and
- the caption is directly below the graph fence.
