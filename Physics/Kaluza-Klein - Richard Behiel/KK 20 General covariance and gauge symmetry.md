---
title: "General covariance and gauge symmetry"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "What is General Covariance?"
video_start: "04:16:22"
video_end: "04:23:31"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The four-dimensional gauge freedom comes from a specific class of five-dimensional coordinate changes that preserve the compactification ansatz.

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

## Source and navigation

[Video segment 04:16:22–04:23:31](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=15382s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 19 Deriving charge from phase winding]] · Next: [[KK 21 Visualizing local phase choices]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{X}^A,\;\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
