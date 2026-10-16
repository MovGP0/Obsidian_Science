---
title: "Worked example with oblique coordinates"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Example of Calculating a Weird Metric (Oblique Coords.)"
video_start: "01:30:50"
video_end: "01:41:13"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> A coordinate system can produce off-diagonal metric entries even in flat space; expand the line element before interpreting those entries as physical fields.

## Define an oblique coordinate system

Start with a Euclidean plane and Cartesian coordinates. Introduce new length-valued coordinates by

$$
\mechanical{X}=\mechanical{u}+a\mechanical{v},
\qquad
\mechanical{Y}=b\mechanical{v},
\qquad b\ne0.
\tag{9.1}
$$

Here $a$ and $b$ are dimensionless mathematical parameters. The condition on $b$ makes the transformation invertible. If it vanished, a whole coordinate direction would collapse onto a line.

The coordinate basis vectors are $(1,0)$ and $(a,b)$. Their dot products already suggest that the metric will have a cross term when $a$ is nonzero.

## Calculate the line element

Differentiate equation (9.1):

$$
\mathrm d\mechanical{X}=\mathrm d\mechanical{u}+a\,\mathrm d\mechanical{v},
\qquad
\mathrm d\mechanical{Y}=b\,\mathrm d\mechanical{v}.
$$

Substitute into the Cartesian distance formula:

$$
\begin{aligned}
\mathrm d\mechanical{\ell}^{\,2}
&=(\mathrm d\mechanical{u}+a\,\mathrm d\mechanical{v})^2
+b^2\,\mathrm d\mechanical{v}^{\,2}\\
&=\mathrm d\mechanical{u}^{\,2}
+2a\,\mathrm d\mechanical{u}\mathrm d\mechanical{v}
+(a^2+b^2)\,\mathrm d\mechanical{v}^{\,2}.
\end{aligned}
\tag{9.2}
$$

Therefore

$$
g_{ij}=\begin{pmatrix}1&a\\a&a^2+b^2\end{pmatrix},
\qquad
\det g=b^2,
\qquad
g^{ij}=\frac1{b^2}
\begin{pmatrix}a^2+b^2&-a\\-a&1\end{pmatrix}.
\tag{9.3}
$$

The determinant is positive because the geometry is Euclidean and the transformation is nonsingular. The area measure is $|b|\,\mathrm d\mechanical{u}\mathrm d\mechanical{v}$, in agreement with the coordinate Jacobian.

## Evaluate a nontrivial step

Choose $a=1/2$ and $b=\sqrt3/2$. Both coordinate basis vectors have unit length, and their angle is sixty degrees. The metric is

$$
g_{ij}=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}.
$$

Take equal small coordinate steps $\mathrm d\mechanical{u}=\mathrm d\mechanical{v}=\mechanical{L}$. Equation (9.2) gives squared distance $3\mechanical{L}^{\,2}$. Taking opposite steps instead gives squared distance $\mechanical{L}^{\,2}$. Equal magnitudes of coordinate changes do not imply equal physical distances when the directions combine differently.

## Verify that the geometry is still flat

The metric components here are constant. All their coordinate derivatives vanish. The Christoffel symbols and Riemann tensor therefore vanish in this coordinate chart. An off-diagonal entry has not produced curvature.

This is a particularly simple example. Nonlinear coordinates can give position-dependent metric components and nonzero Christoffel symbols even in flat space. For example, polar coordinates have a radius-dependent angular coefficient. Curvature, rather than the appearance of the components, decides whether the geometry is intrinsically curved. See [[1.2 Covariant differentiation]] and [[1.9 Curvature]].

## Why this prepares the tube calculation

A change in the origin of the circular coordinate mixes circular and base differentials. Expanding the resulting square gives off-diagonal terms in exactly the same algebraic way as equation (9.2).

The useful skill is to work in this order: define the coordinate change, differentiate it, substitute into the original interval, and collect coefficients. Physical interpretation comes after the calculation.

## Self-check

1. For $a=2$ and $b=1$, calculate the metric and its determinant.
2. Can an off-diagonal metric entry alone establish an electromagnetic field?

### Answers

1. The matrix is $\begin{pmatrix}1&2\\2&5\end{pmatrix}$ and its determinant is one.
2. No. The next chapter constructs mixed entries that are entirely due to a change of circular coordinate.

## Source and navigation

[Video segment 01:30:50–01:41:13](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=5450s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 08 Identifying the U(1) gauge potential]] · Next: [[KK 10 Gauge freedom on a tube]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{u},\;\mechanical{v},\;\mechanical{X},\;\mechanical{Y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{L}$ | $\unit{GeV^{-1}}$ | Example length | Length scale used in the worked coordinate example. |
| $\mechanical{\ell}$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{ij}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
