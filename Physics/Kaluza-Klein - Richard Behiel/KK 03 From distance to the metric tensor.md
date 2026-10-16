---
title: "From distance to the metric tensor"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Distance Formula to Metric Tensor"
video_start: "00:25:05"
video_end: "00:44:34"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> A metric is the coefficient field in the quadratic expression for an infinitesimal interval, including cross terms in nonorthogonal coordinates.

## From a distance formula to a quadratic form

In Cartesian coordinates on a Euclidean plane,

$$
\mathrm d\mechanical{\ell}^{\,2}
=\mathrm d\mechanical{X}^{\,2}+\mathrm d\mechanical{Y}^{\,2}.
$$

Suppose the same points have coordinates $\mechanical{u}$ and $\mechanical{v}$. Apply the chain rule to each old coordinate:

$$
\mathrm d\mechanical{X}
=\frac{\partial\mechanical{X}}{\partial\mechanical{u}}\mathrm d\mechanical{u}
+\frac{\partial\mechanical{X}}{\partial\mechanical{v}}\mathrm d\mechanical{v},
$$

and use the corresponding expression for $\mathrm d\mechanical{Y}$. Squaring and collecting terms gives

$$
\mathrm d\mechanical{\ell}^{\,2}
=g_{uu}\,\mathrm d\mechanical{u}^{\,2}
+2g_{uv}\,\mathrm d\mechanical{u}\mathrm d\mechanical{v}
+g_{vv}\,\mathrm d\mechanical{v}^{\,2}.
\tag{3.1}
$$

The factor two is essential. In the index sum, the terms with indices $uv$ and $vu$ both occur. For a symmetric metric they are equal.

The metric components are not distances by themselves. They tell you how coordinate differences combine to produce a distance or interval. Coordinate differences can have a simple numerical form while the metric contains scale factors or cross terms.

## Spacetime intervals

With time coordinate $\mechanical{x}^0=\mechanical{c}\mechanical{t}$ and signature $(-,+,+,+)$, flat spacetime has

$$
\mathrm d\mechanical{s}_4^{\,2}
=-(\mathrm d\mechanical{x}^0)^2
+(\mathrm d\mechanical{x}^1)^2
+(\mathrm d\mechanical{x}^2)^2
+(\mathrm d\mechanical{x}^3)^2.
$$

The negative time sign distinguishes the spacetime metric from a positive Euclidean distance. Timelike, null, and spacelike intervals have different signs. See [[Spacetime Interval]].

In general coordinates,

$$
\mathrm d\mechanical{s}_4^{\,2}
=g_{\mu\nu}(\mechanical{x})\,
\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu.
\tag{3.2}
$$

Einstein summation means that the expression contains all pairs of indices. The geometry can be curved, but a complicated-looking metric can also describe flat geometry in a complicated coordinate system.

## Add a flat circle

Let the fifth coordinate be an angle $\mechanical{\theta}$ with period $2\pi$. A flat product metric is

$$
\mathrm d\mechanical{s}_5^{\,2}
=\mathrm d\mechanical{s}_4^{\,2}
+\mechanical{r}^{\,2}\,\mathrm d\mechanical{\theta}^{\,2}.
\tag{3.3}
$$

The angle is dimensionless, so its metric coefficient has units of length squared. If instead you use the length coordinate $\mechanical{y}=\mechanical{r}\mechanical{\theta}$, then

$$
\mathrm d\mechanical{s}_5^{\,2}
=\mathrm d\mechanical{s}_4^{\,2}+\mathrm d\mechanical{y}^{\,2},
\qquad
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
$$

The coefficient is now one. The radius has moved into the coordinate identification. Its absence from the local matrix does not remove it from the global geometry.

## Worked check

Set all ordinary coordinate changes to zero and take a small circular step. Equation (3.3) gives $\mathrm d\mechanical{s}_5=\mechanical{r}|\mathrm d\mechanical{\theta}|$. A full spatial circuit therefore has length $2\pi\mechanical{r}$. This checks both the dimensions and the interpretation of the angular coefficient.

## Self-check

1. A line element contains $6\,\mathrm d\mechanical{u}\mathrm d\mechanical{v}$. What is the off-diagonal component?
2. Can a coordinate transformation make a curved geometry flat?

### Answers

1. The component is $g_{uv}=g_{vu}=3$.
2. It can simplify components locally, but it cannot remove a nonzero curvature tensor. See [[1.6 Local flatness]] and [[1.9 Curvature]].

## Source and navigation

[Video segment 00:25:05–00:44:34](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=1505s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 02 Study route and source books]] · Next: [[KK 04 Comparing four- and five-dimensional metrics]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{x},\;\mechanical{y},\;\mechanical{u},\;\mechanical{v},\;\mechanical{X},\;\mechanical{Y},\;\mechanical{x}^0,\;\mechanical{x}^1,\;\mechanical{x}^2,\;\mechanical{x}^3$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Dimensionless angular coordinate with period two pi. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in natural units. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{s}_4,\;\mechanical{s}_5,\;\mechanical{\ell}$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{\mu\nu},\;g_{uv}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
