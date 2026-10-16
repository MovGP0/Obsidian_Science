---
title: "What the metric construction proves"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Part 1 Conclusion"
video_start: "02:20:31"
video_end: "02:24:12"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The metric calculation establishes a geometric gauge structure; an action and a matter equation are still needed to identify the full physical theory.

## Reconstruct the argument without looking back

Begin with a symmetric five-dimensional metric and a spacelike circular direction. Complete the square. This gives a base metric, a scalar radius factor, and a mixed vector potential. Under a local change in the circle’s origin,

$$
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda,
\qquad
g'_{\mu\nu}=g_{\mu\nu},
\qquad
\mechanical{\Phi}'=\mechanical{\Phi}.
$$

The antisymmetric derivative of the potential is gauge invariant. The vector is therefore a good candidate for an Abelian gauge connection.

This chain contains an algebraic step and a transformation step. Neither has used the equations governing how the fields evolve.

## Separate what is proved from what is assumed

| Statement | Status at this stage |
| --- | --- |
| The fifth coordinate is periodic | An assumption about global geometry |
| The retained metric has no fifth-coordinate dependence | The cylinder condition |
| A metric–vector–scalar decomposition exists locally | An algebraic result when the circular coefficient is nonzero |
| The vector shifts by a gradient | A result of the circular-coordinate transformation |
| The radion is constant | An extra restriction when imposed |
| The vector obeys Maxwell’s equations | Not yet derived |
| Matter has the observed charges and masses | Not established |

Writing these categories explicitly prevents a common error: treating an assumption used to simplify the mathematics as a successful prediction.

## Why a gauge law does not fix all dynamics

The ordinary Maxwell kinetic expression contains

$$
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
$$

It is gauge invariant. But its square is gauge invariant too. Terms with additional derivatives can also be gauge invariant. Different choices give different equations of motion while preserving the same transformation law.

The identification of the correct low-energy electromagnetic dynamics therefore requires the action and its normalization. The five-dimensional Einstein–Hilbert action will supply a particular term and fix the scale factor between the mixed metric vector and the normalized potential.

## A useful geometric interpretation

The base metric measures the horizontal part of a displacement. The potential specifies how a displacement along the base is accompanied by a shift around the circle. The radion specifies the length scale of that circular direction.

This picture prepares a deeper result: transporting the circular origin around a small loop can fail to return it to its original value. That failure is measured locally by field strength, just as curvature measures a failure of ordinary parallel transport. The detailed calculation appears in [[KK 15 Deriving the curvature split]].

## Worked counterexample to overinterpretation

The flat-tube coordinate change in [[KK 10 Gauge freedom on a tube]] gives a nonzero mixed potential but zero field strength. Therefore a mixed metric entry alone is not evidence of a physical electromagnetic field. Conversely, a connection with nonzero curvature cannot be removed from an entire neighborhood by a single smooth choice of circular origin.

## Self-check

1. Name the missing step between the gauge transformation and Maxwell’s equations.
2. Does the decomposition explain why particles have the masses found in the Standard Model?
3. What information would be lost by keeping only the upper-left block of the five-dimensional metric?

### Answers

1. Specify and vary an action, then check its normalization and omitted-field equations.
2. No. Matter modes and their spectrum have not yet been studied; the simplest spectrum later fails the observed mass–charge relation.
3. You would lose the distinction between the base metric and the vector-dependent contribution to that block, as well as the separate circular radius information.

Review [[3.5 Phase Invariance in Field Theory]] for the distinction between a symmetry and a chosen field Lagrangian.

## Source and navigation

[Video segment 02:20:31–02:24:12](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=8431s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 11 Full coordinate transformation calculation]] · Next: [[KK 13 Why an action is needed]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
