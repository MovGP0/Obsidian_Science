---
title: "Gauge freedom on a tube"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "\"The Tube\" Demonstration that A_mu is a U(1) Gauge Field"
video_start: "01:41:13"
video_end: "01:54:04"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> A position-dependent choice of circular origin creates a gradient potential on a flat tube, without creating electromagnetic field strength.

## Begin with a flat tube

Keep one spatial base coordinate and one circular coordinate. At a fixed time and fixed values of the other coordinates,

$$
\mathrm d\mechanical{\ell}^{\,2}
=\mathrm d\mechanical{x}^{\,2}+\mathrm d\mechanical{y}^{\,2},
\qquad
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
$$

The tube is intrinsically flat. Its circular direction is periodic, but a small region can be unrolled into a plane.

Change the circular label according to

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}),
\qquad
\mechanical{x}'=\mechanical{x}.
$$

The zero mark around the circle is now different at different base positions. The underlying points and distances have not changed.

## Compute the new metric

Use $\mathrm d\mechanical{y}=\mathrm d\mechanical{y}'-\mechanical{\kappa}\lambda'\mathrm d\mechanical{x}$, where the prime on $\lambda$ means its derivative with respect to the base coordinate. Then

$$
\mathrm d\mechanical{\ell}^{\,2}
=\left(1+\mechanical{\kappa}^{\,2}(\lambda')^2\right)\mathrm d\mechanical{x}^{\,2}
-2\mechanical{\kappa}\lambda'\mathrm d\mechanical{x}\mathrm d\mechanical{y}'
+\mathrm d\mechanical{y}'^{\,2}.
\tag{10.1}
$$

The new matrix has a nonzero mixed entry. Nevertheless, the completed-square form gives

$$
g_{xx}=1,
\qquad
\electric{A}_x'=-\lambda'.
\tag{10.2}
$$

The reduced base metric is still one. Its recovery requires the subtraction from [[KK 06 Algebraic decomposition of the metric]]. Reading only the upper-left entry of equation (10.1) would give the wrong base metric.

## Work an explicit smooth relabeling

Choose

$$
\lambda(\mechanical{x})=\frac{\mechanical{x}^{\,2}}{2\mechanical{L}^{\,2}}.
$$

The length $\mechanical{L}$ makes the gauge parameter dimensionless. The transformed potential is

$$
\electric{A}_x'=-\frac{\mechanical{x}}{\mechanical{L}^{\,2}}.
$$

It varies with position and is nonzero except at the origin. Yet it is a pure gradient. On a single spatial base direction, an antisymmetric spatial field-strength tensor has no nonzero component. When the same transformation is included in full spacetime, the complete gradient still has vanishing field strength because its mixed derivatives commute.

This example separates three ideas: a nonzero potential, a position-dependent potential, and a nonzero field strength. The first two do not imply the third.

## What the new coordinate curves look like

A curve of fixed new circular coordinate obeys

$$
\mathrm d\mechanical{y}
=-\mechanical{\kappa}\lambda'\,\mathrm d\mechanical{x}.
$$

It winds around the tube as the base coordinate changes. Coordinate grid lines can therefore be tilted or curved while the tube’s intrinsic geometry remains the same.

The finite-radius circular topology is preserved: adding one circumference to the old coordinate also adds one circumference to the new coordinate. The shift is assumed smooth and well-defined on the coordinate patch.

## Self-check

1. Calculate the determinant of the matrix in equation (10.1).
2. If the initial potential is already nonzero, what is the transformed potential?
3. What would indicate a genuine electromagnetic field instead of this pure-coordinate example?

### Answers

1. It is one: the squared gradient contribution cancels the square of the mixed entry.
2. It is the initial potential minus the gradient of the gauge parameter.
3. A nonzero gauge-invariant field-strength tensor. In the geometric description this obstructs removing the connection on a whole neighborhood.

Compare [[3.2 Gauge Invariance in Classical Electrodynamics]].

## Source and navigation

[Video segment 01:41:13–01:54:04](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=6073s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 09 Worked example with oblique coordinates]] · Next: [[KK 11 Full coordinate transformation calculation]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{L}$ | $\unit{GeV^{-1}}$ | Example length | Length scale used in the worked coordinate example. |
| $\mechanical{\ell}$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{xx}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_x$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
