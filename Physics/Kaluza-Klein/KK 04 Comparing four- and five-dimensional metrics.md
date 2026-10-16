---
title: "Comparing four- and five-dimensional metrics"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A five-dimensional metric adds a mixed vector sector and a scalar sector to the four-dimensional metric; its global circle radius is not determined by a local coefficient alone.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Comparing g_munu and g_AB"; video_start: "00:44:34"; video_end: "00:50:27" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Read the four- and five-dimensional matrices together %% Video 00:44:40–00:50:20 %%

The flat four-dimensional metric and its interval are

$$
\mathrm d\mechanical{s}^{\,2}=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu,
\qquad
g_{\mu\nu}=\begin{pmatrix}1&0&0&0\\0&-1&0&0\\0&0&-1&0\\0&0&0&-1\end{pmatrix}.
$$

Add the circular coordinate and define the squared-radius scalar:

$$
\mechanical{\Phi}_{\mathrm{ang}}\equiv\mechanical{r}^{\,2},
\qquad
\widetilde g_{AB}
=\begin{pmatrix}
1&0&0&0&0\\0&-1&0&0&0\\0&0&-1&0&0\\0&0&0&-1&0\\0&0&0&0&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}.
$$

All off-diagonal entries vanish in the displayed Cartesian product coordinates. For example, there is no term proportional to $\mathrm d\mechanical{x}^1\mathrm d\mechanical{x}^2$. A general metric can have nonzero mixed entries and remains symmetric. A mixed entry alone is not a curvature test: the oblique-coordinate chapter later gives a flat counterexample.

A compact circle is attached to every ordinary location. An angular displacement has physical length equal to radius times angle. A general metric also permits base–circle cross terms. Completing the square separates these mixed entries from the base metric and the radius. Their transformation laws and dynamics then determine their physical interpretation.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Compare the matrices carefully

In flat four-dimensional spacetime with length-valued coordinates, the metric is

$$
g_{\mu\nu}=\operatorname{diag}(-1,1,1,1).
$$

For a flat five-dimensional product with a length coordinate on the circle,

$$
\widetilde g_{AB}=\operatorname{diag}(-1,1,1,1,1),
\qquad
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
\tag{4.1}
$$

The fifth coefficient is one, but the circle still has circumference $2\pi\mechanical{r}$. Compare this with the angle-coordinate form from [[KK 03 From distance to the metric tensor]].

A metric matrix describes local intervals. The periodic identification supplies global information. Neither item should be discarded when comparing models.

## Count independent components

A symmetric matrix with $d$ rows has $d$ diagonal entries and $d(d-1)/2$ independent off-diagonal entries. Its total is

$$
\frac{d(d+1)}{2}.
$$

Thus a four-dimensional metric has ten independent components, while a five-dimensional metric has fifteen. When one coordinate is distinguished, the fifteen split as ten plus four plus one.

The ten belong to a symmetric four-dimensional tensor. The four belong to the mixed column and row. The final one belongs to the fifth diagonal component. This count motivates a metric–vector–scalar decomposition, but it does not yet identify the vector with electromagnetism.

## Components are not propagating polarizations

Some metric variations reflect coordinate freedom. Some field equations are constraints. Consequently the number of independent matrix entries is larger than the number of physical wave polarizations.

For a massless graviton in $D$ spacetime dimensions, the number of propagating polarizations is

$$
\frac{D(D-3)}{2}.
$$

At five dimensions this is five. In the four-dimensional zero-mode description, these can be arranged into a graviton with two polarizations, a vector with two, and a scalar with one. This is a statement about the linearized massless sector, not a claim that each of the fifteen metric components is an independent particle.

## Why the scalar changes the radius

Suppose the fifth diagonal coefficient is $\mechanical{\Phi}^{\,2}$ rather than one. At fixed ordinary spacetime position,

$$
\mathrm d\mechanical{s}_5^{\,2}
=\mechanical{\Phi}^{\,2}\,\mathrm d\mechanical{y}^{\,2}.
$$

If the coefficient is independent of the circular coordinate, integrating around the circle gives physical circumference $2\pi\mechanical{r}\mechanical{\Phi}$. A position-dependent $\mechanical{\Phi}$ means that different spacetime locations have different circle sizes.

The condition $\mechanical{\Phi}=1$ is therefore a physical restriction after the coordinate period is fixed. It is not automatically a harmless coordinate choice.

## Worked comparison

Consider two regions with the same coordinate period. In one, $\mechanical{\Phi}=1$; in the other, $\mechanical{\Phi}=2$. The second region has twice the physical circle circumference. A coordinate rescaling can make its local fifth coefficient one, but it also changes the coordinate period. The physical circumference remains twice as large.

## Self-check

1. How many new algebraic components appear when moving from four to five dimensions?
2. Why does setting the fifth metric coefficient to one not always set the radius to one?

### Answers

1. Five: four mixed components and one scalar component.
2. The coordinate period still carries the radius. Physical size combines the metric coefficient with that period.

For tensor components and coordinate changes, return to [[1.1 Vectors, dual vectors, and tensors]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{\mu\nu},\;\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
