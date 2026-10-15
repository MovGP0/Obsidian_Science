---
name: obsidian-graphs
description: Create, edit, and visually validate native 2D and 3D plots for the installed Obsidian Graphs plugin. Use for graph or graph3d code fences, JSXGraph elements, plotted figures, axes, labels, arrows, curves, and interactive mathematical diagrams in this vault.
compatibility: Requires the Obsidian Graphs plugin installed in this vault and Obsidian desktop for visual validation.
metadata:
  version: "1.0.0"
  graphs-plugin-version: "1.9.3"
---

# Obsidian Graphs

## Purpose

Use the installed Graphs plugin to create native YAML-based figures in Obsidian. Prefer a Graphs plot to an SVG when the figure is mathematical, coordinate-based, or easier to reproduce from functions and points.

## Required workflow

1. Read the target note and the source figure.
2. Decide whether the figure is 2D or 3D.
3. Read the applicable reference completely:
   - [2D graphs](references/2d-graphs.md)
   - [3D graphs](references/3d-graphs.md)
4. Search this vault for a similar working plot before inventing new syntax.
5. Add the smallest Graphs block that reproduces the mathematical content.
6. Put the figure caption directly below the code fence in this form:

   ```markdown
   **Fig. 1.1** Description of the figure.
   ```

7. Open the note in Obsidian reading mode and inspect the rendered result.
8. Correct syntax errors, clipping, scale, label overlap, arrow direction, and projection errors.
9. Reinspect the final plot after every visual correction.

## General rules

- Use a `graph` code fence for 2D plots and a `graph3d` code fence for 3D plots.
- Set `height` and `width` explicitly.
- Use `drag: false` and `showNavigation: false` for a fixed explanatory figure.
- Enable interaction only when rotation or exploration adds useful information.
- Use hexadecimal colors and explicit line widths.
- Set `fixed: true` on labels and geometry that users must not move.
- Use `lastArrow: true` on a line when its end must have an arrowhead.
- Use dashed helper lines only for projections, construction lines, and limits.
- Use English labels and captions.
- Reproduce mathematical relationships, not screenshot pixels.
- Do not report a graph as complete until it renders correctly in Obsidian reading mode.

## Relationship to the Obsidian skill

Use this skill together with the repository `obsidian` skill. The Obsidian skill controls note structure, captions, links, LaTeX, encoding, and final validation. This skill controls Graphs-plugin syntax and visual plot validation.

## Failure handling

- If the plugin reports a syntax error, reduce the block to axes and one element, then add elements back in small groups.
- If a label is in the correct coordinates but renders in the wrong place, adjust its anchor and then its coordinates.
- If a 3D figure has the correct coordinates but the wrong apparent geometry, correct the view or projection before changing the data.
- If an element type has no working example in this vault, inspect the installed plugin before using it.
