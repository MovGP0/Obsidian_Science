# 3D Graphs reference

## Code fence and top-level fields

Use a `graph3d` code fence:

````markdown
```graph3d
bounds: [-5, 7, 6, -5]
bounds3d: [[-1.5, 2.5], [-1.5, 2.5], [-0.5, 3.5]]
height: 520
width: 760
axis: false
drag: true
showNavigation: true
keepAspectRatio: true
att3d:
  projection: parallel
  axesPosition: none
  xPlaneRear: {visible: false}
  yPlaneRear: {visible: false}
  zPlaneRear: {visible: false}
  depthOrder: {enabled: true}
elements: [
  {type: line3d, def: [[0, 0, 0], [1, 0, 0]], att: {strokeColor: '#2455e6', strokeWidth: 4, lastArrow: true, fixed: true}},
  {type: point3d, def: [1, 0, 0], att: {size: 4, fixed: true, withLabel: false, fillColor: '#aeb4b8', strokeColor: '#666666'}},
  {type: text3d, def: [[1.05, 0, 0], 'x'], att: {fontSize: 18, fixed: true, anchorX: 'left'}}
]
```
````

`bounds3d` has the order `[[x_min, x_max], [y_min, y_max], [z_min, z_max]]`.

`bounds` controls the 2D screen area that contains the projected 3D view. Increase it when labels or arrowheads are clipped.

## Verified 3D elements

The following forms have working examples in this vault.

### Line and vector

```yaml
{type: line3d, def: [[0, 0, 0], [1.4, 0.8, 2.1]], att: {strokeColor: '#222222', strokeWidth: 3, lastArrow: true, fixed: true}}
```

- `def` contains two 3D points.
- Add `lastArrow: true` for a vector.
- Use `dash: 2` for a projection or construction line.
- For a polyline or an angle arc, use several adjoining `line3d` elements. Put the arrowhead only on the last segment.

### Point

```yaml
{type: point3d, def: [1.4, 0.8, 2.1], att: {size: 4, fixed: true, withLabel: false, fillColor: '#aeb4b8', strokeColor: '#666666'}}
```

### Text

```yaml
{type: text3d, def: [[1.5, 0.85, 2.2], 'vₖ′'], att: {fontSize: 18, fixed: true, anchorX: 'left'}}
```

Prefer Unicode characters in 3D labels. Keep labels short because the view can rotate.

## Coordinate systems and angles

- Define all vectors from one explicit origin.
- Keep the axes long enough to show their positive directions.
- Use the same coordinate values for a vector endpoint and its projection helpers.
- Build a projection with dashed `line3d` segments from the vector endpoint to the applicable coordinate plane.
- Build an angle arc from points calculated in the same plane as the two vectors.
- For a fixed explanatory coordinate diagram, set `drag: false` after the view is correct. For a spatial model that users must inspect, keep `drag: true` and state in the caption that the graph can rotate.

## Projection and apparent geometry

- Use `projection: parallel` for textbook coordinate diagrams and crystal structures.
- Hide the rear planes when the source has no 3D bounding box.
- Enable depth ordering when lines cross or points must appear in front of surfaces.
- If lengths or angles appear wrong, first check the projection and camera view. Do not change correct 3D coordinates only to compensate for a poor view.

## Recommended construction order

1. Add the coordinate axes.
2. Add the main vectors or geometry.
3. Add dashed projections.
4. Add angle arcs as segmented `line3d` paths.
5. Add arrowheads to the final segments.
6. Add labels last.
7. Adjust `bounds3d`, then screen `bounds`, then label anchors.

## Visual validation

In Obsidian reading mode, check that:

- the plugin renders a 3D canvas instead of an error;
- the axes and vectors start at the same origin;
- all arrowheads are visible and point outward;
- dashed projections meet the correct vector endpoints;
- angle arcs lie in the intended planes;
- labels remain associated with the correct vectors;
- the initial projection matches the source figure; and
- rotation, when enabled, does not expose disconnected geometry.
