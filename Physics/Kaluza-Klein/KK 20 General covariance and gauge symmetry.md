---
title: "General covariance and gauge symmetry"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The four-dimensional gauge freedom comes from a specific class of five-dimensional coordinate changes that preserve the compactification ansatz.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "What is General Covariance?"; video_start: "04:16:22"; video_end: "04:23:31" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### The complete transformation diagram %% Video 04:16:40–04:18:20 %%

General covariance permits a change of coordinate labels. In the compact-circle geometry, consider the particular circular-coordinate redefinition

$$
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{t},\mechanical{x},\mechanical{y},\mechanical{z}).
$$

Two arrows lead to the matter-field mode and four-potential:

$$
\signal{\psi}'_n=\exp(-in\mechanical{\xi}\varepsilon)\signal{\psi}_n,
\qquad
\electric{A}'_\mu=\electric{A}_\mu+\partial_\mu\varepsilon.
$$

Together these are the local $U(1)$ gauge transformation. General covariance is broader: the circular shift is one allowed coordinate change, and an arbitrary five-dimensional coordinate change need not preserve this metric ansatz or have the form of an electromagnetic gauge transformation.

### What the deformed grids show %% Video 04:18:40–04:23:20 %%

A coordinate grid can be sheared or deformed without changing the events it labels. Distances must then use the transformed metric. Measuring Euclidean distances between grid lines on a drawing would incorrectly treat coordinate labels as physical rulers.

Physical predictions do not depend on the coordinate labels. Here this is a statement about equivalent descriptions. A coordinate change alone does not create curvature, alter a measured force, or select the dynamical field equations. In the circle construction, one restricted family of coordinate changes is represented in four dimensions by the paired gauge transformations above.

The matter phase and potential must change together. Holding either one fixed while changing only the other does not describe the same higher-dimensional field.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Passive coordinate changes

A passive coordinate change assigns new labels to the same events. The components of a tensor change according to their transformation rules, while geometric quantities remain the same. For example,

$$
\mathrm d\mechanical{s}_5^{\,2}
=\widetilde g_{AB}\,\mathrm d\mechanical{X}^A\mathrm d\mechanical{X}^B
=\widetilde g'_{A'B'}\,\mathrm d\mechanical{X}^{A'}\mathrm d\mechanical{X}^{B'}.
$$

The equal interval is not evidence that the metric components are equal. The components and differentials change together. [[1.1 Vectors, dual vectors, and tensors]] gives the general rule.

General covariance means that the laws can be expressed without a preferred coordinate chart. It should not be confused with the claim that every coordinate transformation is a physical symmetry producing a new observable state.

## Restrict to transformations that preserve the model form

The compactification separates base coordinates from a circular fiber. Consider the transformations

$$
\mechanical{x}^{\mu'}=\mechanical{x}^{\mu'}(\mechanical{x}),
\qquad
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}).
\tag{20.1}
$$

The first is an ordinary base coordinate transformation. The second changes the circular origin separately above each base point. For the cylinder-independent ansatz, these preserve the interpretation as four-dimensional fields plus a compact circle.

Under the second part alone, the base metric and radion remain unchanged, the potential shifts by a gradient, and each matter mode acquires its charge-dependent local phase. [[KK 11 Full coordinate transformation calculation]] and [[KK 19 Deriving charge from phase winding]] proved those statements separately.

Together, they explain the phrase “gauge freedom from coordinate freedom.” It is not necessary to assert that all conceivable five-dimensional coordinate changes are ordinary electromagnetic gauge transformations.

## Active descriptions and gauge redundancy

One can also describe a gauge transformation actively, as a change in the field representatives at the same base coordinate labels. The potential and matter phase then change together. Gauge-invariant quantities are unchanged.

The passive five-dimensional and active four-dimensional descriptions are related ways to express the redundancy. The distinction helps avoid the idea that a gauge transformation must physically rotate or move a particle around the circle.

## Local and global questions

On one smooth coordinate patch, the gauge parameter is a function and the transformation is a gradient shift. A global circle bundle may require multiple local circular origins, related on overlaps. A single globally defined product coordinate need not exist in the most general setting.

These notes use a local product form for the calculations and a simple periodic coordinate for the mode spectrum. This is enough to establish the local gauge mechanism. It does not classify all bundles or all possible topological sectors.

For electromagnetic potentials that have important global effects, compare [[3.4 Significance of Potentials in Quantum Theory]]. The distinction between local field strength and loop phase becomes important there.

## Worked coordinate-versus-field distinction

In the flat-tube example, a coordinate transformation creates mixed metric entries. A four-dimensional observer who records the extracted fields sees a new potential related by a gauge transformation. The observer does not see a new electromagnetic field strength. Both descriptions refer to the same configuration.

If instead a nonzero field strength is introduced, it cannot be removed from a neighborhood by merely changing the circular origin. That is a different geometric connection, even though many potential representatives can describe it.

## Self-check

1. Is general covariance alone an experimental argument for a fifth dimension?
2. Why can a general coordinate change fall outside the retained four-dimensional field description?

### Answers

1. No. It is a statement about descriptions and laws. The dimension and dynamics must be established separately.
2. It can mix the base and circle in ways that spoil the ansatz or its circular independence. The induced fields may no longer fit the retained sector.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{X}^A,\;\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in the angular formulation’s natural units. |
| $\mechanical{z}$ | $\unit{GeV^{-1}}$ | Spatial coordinate | Third ordinary spatial coordinate. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Angular-convention potential | Electromagnetic potential with the angular formulation’s positive-gradient gauge law. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
