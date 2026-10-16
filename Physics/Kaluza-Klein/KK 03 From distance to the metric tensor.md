---
title: "From distance to the metric tensor"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A metric is the coefficient field in the quadratic expression for an infinitesimal interval, including cross terms in nonorthogonal coordinates.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Distance Formula to Metric Tensor"; video_start: "00:25:05"; video_end: "00:44:34" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Distance as a quadratic form %% Video 00:25:20–00:29:40 %%

Use capital Latin indices for five dimensions, $A,B\in\{0,1,2,3,4\}$, and Greek indices for four dimensions, $\mu,\nu\in\{0,1,2,3\}$.

The box diagram has perpendicular steps $\Delta\mechanical{x}$, $\Delta\mechanical{y}$, and $\Delta\mechanical{z}$ and a diagonal distance $\mechanical{d}$:

$$
\begin{aligned}
\mechanical{d}^{\,2}&=(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2\\
&=\begin{pmatrix}\Delta\mechanical{x}&\Delta\mechanical{y}&\Delta\mechanical{z}\end{pmatrix}
I_3
\begin{pmatrix}\Delta\mechanical{x}\\\Delta\mechanical{y}\\\Delta\mechanical{z}\end{pmatrix}.
\end{aligned}
$$

Thus the Cartesian Euclidean metric is the identity matrix. A different coordinate system can give a different matrix for the same flat space. The spherical-coordinate inset shows

$$
\begin{aligned}
\mathrm d\mechanical{s}^{\,2}
&=(\mathrm d\mechanical{r})^2+\mechanical{r}^{\,2}(\mathrm d\mechanical{\theta})^2
+\mechanical{r}^{\,2}\sin^2\mechanical{\theta}(\mathrm d\mechanical{\varphi})^2,\\
g_{ab}&=\operatorname{diag}(1,\mechanical{r}^{\,2},\mechanical{r}^{\,2}\sin^2\mechanical{\theta}).
\end{aligned}
$$

Here the theta in the spherical inset is a polar angle. It is not yet the extra circular coordinate. The matrix is position dependent without implying spacetime curvature.

### Spacetime and repeated indices %% Video 00:30:40–00:36:40 %%

Set the speed of light to one and use the mostly-minus spacetime convention in this section:

$$
(\Delta\mechanical{s})^2=(\Delta\mechanical{t})^2-(\Delta\mechanical{x})^2-(\Delta\mechanical{y})^2-(\Delta\mechanical{z})^2,
\qquad
\eta_{\mu\nu}=\operatorname{diag}(1,-1,-1,-1).
$$

For a nonrotating black hole, the Schwarzschild metric has the following mostly-minus form. Coordinates are ordered as time, radius, polar angle, and azimuth:

$$
g_{\mu\nu}=\operatorname{diag}
\left(f,-f^{-1},-\mechanical{r}^{\,2},-\mechanical{r}^{\,2}\sin^2\mechanical{\theta}\right),
\qquad
f=1-\frac{2\mechanical{M}}{\mechanical{r}}.
$$

The parameter $\mechanical{M}=\mechanical{G}\mechanical{m}_{\mathrm{BH}}$ is a geometric length, where $\mechanical{G}$ is Newton’s constant and $\mechanical{m}_{\mathrm{BH}}$ is the black-hole mass. Thus $f=1-2\mechanical{G}\mechanical{m}_{\mathrm{BH}}/\mechanical{r}$ is dimensionless. A GeV-valued mass cannot replace the length parameter unless the factor of Newton’s constant is restored. %% Provenance: Poisson 2.3.7; dimensional restoration from context. %%

Weak gravity gives a small departure from a local flat metric; strong gravity need not. This is physically different from changing coordinates on flat space. Coordinate-dependent components alone do not establish curvature. [[Schwarzschild Metric]] gives a related treatment.

For nearby points, assemble the coordinate differentials into a four-vector and evaluate the quadratic metric sum:

$$
\begin{aligned}
\mathrm d\mechanical{x}^\mu&=(\mathrm d\mechanical{t},\mathrm d\mechanical{x},\mathrm d\mechanical{y},\mathrm d\mechanical{z}),\\
\mathrm d\mechanical{s}^{\,2}&=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu\\
&=\sum_{\mu=0}^{3}\sum_{\nu=0}^{3}g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu.
\end{aligned}
$$

Written out, the repeated-index sum contains all sixteen terms:

$$
\begin{aligned}
g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
={}&g_{00}(\mathrm d\mechanical{x}^0)^2
+g_{01}\mathrm d\mechanical{x}^0\mathrm d\mechanical{x}^1
+g_{02}\mathrm d\mechanical{x}^0\mathrm d\mechanical{x}^2
+g_{03}\mathrm d\mechanical{x}^0\mathrm d\mechanical{x}^3\\
&+g_{10}\mathrm d\mechanical{x}^1\mathrm d\mechanical{x}^0
+g_{11}(\mathrm d\mechanical{x}^1)^2
+g_{12}\mathrm d\mechanical{x}^1\mathrm d\mechanical{x}^2
+g_{13}\mathrm d\mechanical{x}^1\mathrm d\mechanical{x}^3\\
&+g_{20}\mathrm d\mechanical{x}^2\mathrm d\mechanical{x}^0
+g_{21}\mathrm d\mechanical{x}^2\mathrm d\mechanical{x}^1
+g_{22}(\mathrm d\mechanical{x}^2)^2
+g_{23}\mathrm d\mechanical{x}^2\mathrm d\mechanical{x}^3\\
&+g_{30}\mathrm d\mechanical{x}^3\mathrm d\mechanical{x}^0
+g_{31}\mathrm d\mechanical{x}^3\mathrm d\mechanical{x}^1
+g_{32}\mathrm d\mechanical{x}^3\mathrm d\mechanical{x}^2
+g_{33}(\mathrm d\mechanical{x}^3)^2.
\end{aligned}
$$

For each fixed first index, the second index runs through zero to three. A symmetric off-diagonal component occurs twice, once in each order. The metric gives the local interval; a finite path length or proper time requires integration along a specified path with the relevant sign and parameterization.

### Add a circle and then a cylinder %% Video 00:37:00–00:44:20 %%

The circle diagram marks radius $\mechanical{r}$, angle $\mechanical{\theta}$, and arc length $\mechanical{d}=\mechanical{r}\mechanical{\theta}$. The cylinder uses a height coordinate $\mechanical{h}\in[0,\mechanical{H}]$ and an angle $\mechanical{\theta}\in[0,2\pi)$. For two points compared on the unrolled surface, the displayed finite-distance relation is

$$
\mechanical{d}^{\,2}=(\Delta\mechanical{h})^2+\mechanical{r}^{\,2}(\Delta\mechanical{\theta})^2.
$$

The angular difference must correspond to the selected unwrapped path; for the shortest surface path, choose the nearest circular representative. Its local differential form is

$$
\mathrm d\mechanical{\ell}^{\,2}=(\mathrm d\mechanical{h})^2+\mechanical{r}^{\,2}(\mathrm d\mechanical{\theta})^2.
$$

The drawn triangle can be unrolled into a flat strip without stretching. Its two surface directions therefore obey the ordinary Pythagorean relation locally. A round appearance in the embedding picture does not imply intrinsic curvature of the cylindrical surface.

Adding a spacelike circle gives the interval

$$
\mathrm d\mechanical{\widetilde s}^{\,2}
= (\mathrm d\mechanical{t})^2-(\mathrm d\mechanical{x})^2-(\mathrm d\mechanical{y})^2-(\mathrm d\mechanical{z})^2
-\mechanical{r}^{\,2}(\mathrm d\mechanical{\theta})^2.
$$

$$
\widetilde g_{AB}=\operatorname{diag}(1,-1,-1,-1,-\mechanical{r}^{\,2}).
$$

The radius squared belongs in the angular metric entry because the angle is dimensionless. The circle identification, rather than a local curvature term, distinguishes this space globally from an ordinary noncompact fifth spatial line.

![[kk-distance-geometry.svg|**Fig. 3.1** Orthogonal distance and the unrolled circular direction explain the metric coefficients.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

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
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{h}$ | $\unit{GeV^{-1}}$ | Cylinder height | Axial coordinate in the cylinder-distance diagram. |
| $\mechanical{d}$ | $\unit{GeV^{-1}}$ | Distance | Diagonal or circular arc distance in the diagram. |
| $\mechanical{\widetilde s}$ | $\unit{GeV^{-1}}$ | Five-dimensional interval | Five-dimensional interval in the mostly-minus convention. |
| $\mechanical{\varphi}$ | $1$ | Azimuthal angle | Ordinary spherical-coordinate azimuth, not the compactification radion. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $\mechanical{M}$ | $\unit{GeV^{-1}}$ | Angular geometric mass | Length-valued Schwarzschild parameter, equal to Newton's constant times black-hole mass in natural units. |
| $\mechanical{m}_{\mathrm{BH}}$ | $\unit{GeV}$ | Black-hole mass | Physical mass used when restoring the gravitational constant in the angular inset. |
| $\mechanical{G}$ | $\unit{GeV^{-2}}$ | Gravitational constant | Four-dimensional Newton coupling in the reduced action. |
| $\mechanical{m}$ | $\unit{GeV}$ | Rest mass | Four-dimensional rest mass in the angular Klein–Gordon equation. |
| $\mechanical{H}$ | $\unit{GeV^{-1}}$ | Angular cylinder height | Finite axial separation in the unrolled cylinder. |
| $g_{\mu\nu},g_{ab}$ | — | Angular base metric | Metric examples in this chapter; angular-coordinate entries carry the required length factors. |
