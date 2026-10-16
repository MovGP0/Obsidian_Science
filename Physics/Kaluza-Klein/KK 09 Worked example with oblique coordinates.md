---
title: "Worked example with oblique coordinates"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A coordinate system can produce off-diagonal metric entries even in flat space; expand the line element before interpreting those entries as physical fields.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Example of Calculating a Weird Metric (Oblique Coords.)"; video_start: "01:30:50"; video_end: "01:41:13" %%

<!-- visual-source:start -->
## Geometric and field equations

Both calculations describe a Euclidean plane. Coordinates have units of length; the tilt angle is dimensionless. The first calculation uses unit basis vectors, and the second allows a general scale for the tilted vector.

### Change the basis, then read the metric %% Video 01:31:00–01:34:40 %%

To find a metric in new coordinates, calculate the squared distance and collect products of coordinate steps. Start with perpendicular unit vectors. Tilt the second primed unit vector by $\mechanical{\gamma}$ from the original vertical direction:

$$
\widehat e_{x'}=\widehat e_x,
\qquad
\widehat e_{y'}=\sin\mechanical{\gamma}\,\widehat e_x+\cos\mechanical{\gamma}\,\widehat e_y.
$$

The included angle of the primed axes is therefore a right angle minus gamma. This differs from a convention that calls the included angle itself gamma.

### Resolve each small step %% Video 01:35:00–01:37:20 %%

The triangle in the first sketch has horizontal and vertical sides in the original orthogonal frame. The parallelogram in the second sketch uses an ordinary horizontal step and a tilted primed step. Its horizontal and vertical projections are labeled separately:

$$
\mathrm d\mechanical{x}=\mathrm d\mechanical{x}'+\sin\mechanical{\gamma}\,\mathrm d\mechanical{y}',
\qquad
\mathrm d\mechanical{y}=\cos\mechanical{\gamma}\,\mathrm d\mechanical{y}'.
$$

The term sine gamma times the primed vertical-coordinate step is horizontal. The term cosine gamma times that same step is vertical. The diagrams explain why the new coordinates introduce a cross term even though the space remains flat.

### Expand and identify both mixed entries %% Video 01:37:40–01:41:00 %%

Use the positive Euclidean distance on this plane:

$$
\begin{aligned}
\mathrm d\mechanical{s}^{\,2}
&=(\mathrm d\mechanical{x})^2+(\mathrm d\mechanical{y})^2\\
&=\left(\mathrm d\mechanical{x}'+\sin\mechanical{\gamma}\,\mathrm d\mechanical{y}'\right)^2
+\left(\cos\mechanical{\gamma}\,\mathrm d\mechanical{y}'\right)^2\\
&=(\mathrm d\mechanical{x}')^2
+2\sin\mechanical{\gamma}\,\mathrm d\mechanical{x}'\mathrm d\mechanical{y}'
+(\mathrm d\mechanical{y}')^2.
\end{aligned}
$$

Thus

$$
g'_{ab}=\begin{pmatrix}1&\sin\mechanical{\gamma}\\\sin\mechanical{\gamma}&1\end{pmatrix}.
$$

Retain both symmetric off-diagonal entries. The factor two in the cross term comes from adding these equal entries. The determinant is cosine squared gamma, which is positive while the two basis vectors remain independent.

![[kk-oblique-coordinates.svg|**Fig. 9.1** The tilted coordinate step has horizontal and vertical projections, which generate the mixed metric term.]]

<!-- visual-source:end -->

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

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{u},\;\mechanical{v},\;\mechanical{X},\;\mechanical{Y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{L}$ | $\unit{GeV^{-1}}$ | Example length | Length scale used in the worked coordinate example. |
| $\mechanical{\ell}$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{ij},g'_{ab}$ | $1$ | Euclidean metrics | Components of the same plane metric in the two stated coordinate bases. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Ordinary spatial coordinate in the stated example. |
| $\mechanical{s}$ | $\unit{GeV^{-1}}$ | Interval | Ordinary spatial distance or spacetime interval, as identified in the stated calculation. |
| $\mechanical{\gamma}$ | $1$ | Basis tilt | Angle of the primed basis vector from the original vertical direction. |
