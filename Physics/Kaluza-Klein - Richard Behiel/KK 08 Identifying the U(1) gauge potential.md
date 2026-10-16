---
title: "Identifying the U(1) gauge potential"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Defining A_mu, a U(1) Gauge Field in the Metric Tensor"
video_start: "01:26:18"
video_end: "01:30:50"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The mixed metric field is an electromagnetic candidate because local shifts of the circular coordinate induce the usual gradient shift of a U(1) potential.

## A vector is not enough

Four components do not by themselves identify a field as electromagnetism. The candidate must transform correctly, couple to matter correctly, and have suitable dynamics. This chapter establishes the first requirement. Later chapters establish the coupling and action.

In the fixed-radius metric, define the circular one-form

$$
\eta=\mathrm d\mechanical{y}
+\mechanical{\kappa}\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu.
$$

The symbol $\eta$ is a mathematical one-form used to shorten the calculation.

## Change the local circular origin

Let the base coordinates be unchanged and choose

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}).
$$

Differentiation gives

$$
\mathrm d\mechanical{y}'=\mathrm d\mechanical{y}
+\mechanical{\kappa}\partial_\mu\lambda\,\mathrm d\mechanical{x}^\mu.
$$

The same geometric one-form has the same value when written in the new coordinates. Substituting this expression and comparing coefficients gives

$$
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda.
\tag{8.1}
$$

The function $\lambda$ is a freely chosen, dimensionless coordinate/gauge parameter. It is not an additional physical field. The minus sign follows from the plus sign in the coordinate redefinition.

## Find a gauge-invariant derivative combination

Define

$$
\electric{F}_{\mu\nu}
=\partial_\mu\electric{A}_\nu-\partial_\nu\electric{A}_\mu.
$$

Under equation (8.1), the transformed field strength contains two extra terms:

$$
\electric{F}_{\mu\nu}'
=\electric{F}_{\mu\nu}
-\partial_\mu\partial_\nu\lambda
+\partial_\nu\partial_\mu\lambda
=\electric{F}_{\mu\nu}.
\tag{8.2}
$$

The final equality requires a sufficiently smooth parameter on the patch. This calculation is the same local cancellation as in [[3.2 Gauge Invariance in Classical Electrodynamics]].

## Why the group is U(1)

Translations around a circle compose by addition of their angles, with a complete turn identified with the starting point. A phase factor represents this operation as multiplication by a unit complex number. The group of these phase factors is $U(1)$.

The metric calculation so far only exhibits the gauge transformation of the potential. A periodic matter mode will acquire a phase under the same coordinate change. That is the step that identifies its charge in [[KK 19 Deriving charge from phase winding]].

Locally, a pure gradient potential can be removed by a gauge choice. Globally, coordinate patches and loops can introduce additional structure. Zero field strength on a region does not by itself settle every possible global phase question; compare [[3.4 Significance of Potentials in Quantum Theory]].

## Worked sign check

Start with zero potential and choose a new circular origin that varies across the base. Equation (8.1) produces a nonzero gradient potential. Equation (8.2) still gives zero field strength. The transformed metric can have mixed entries even though no electromagnetic field was introduced.

## Self-check

1. If the coordinate shift has the opposite sign, what happens to the potential transformation?
2. What remains unproved after deriving equation (8.1)?

### Answers

1. The gradient term has the opposite sign. Consistency matters more than the isolated sign choice.
2. Maxwell dynamics and the charged-matter coupling remain to be derived. A transformation law alone does not supply them.

## Source and navigation

[Video segment 01:26:18–01:30:50](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=5178s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 07 Interpreting and rebuilding the metric]] · Next: [[KK 09 Worked example with oblique coordinates]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{F}_{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
