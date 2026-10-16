---
title: "Why an action is needed"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Introduction to \"The Miracle\""
video_start: "02:24:12"
video_end: "02:33:10"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> An action specifies dynamics; reducing the five-dimensional gravitational action can show whether the geometric vector has the Maxwell kinetic term.

## From a field arrangement to a physical law

A metric ansatz tells us what field configurations we allow. It does not tell us which configurations solve the theory. An action supplies that information through stationary variation.

For a schematic field collection, write the action as the integral of a Lagrangian density. A variation that vanishes suitably on the boundary gives Euler–Lagrange equations. The same procedure applies to a metric, although its curvature contains second derivatives and boundary terms need care. See [[2.1 Hamilton's Principle]] and [[4.1.3 General relativity]].

The five-dimensional bulk gravitational action is

$$
\energy{S}_5
=\frac{1}{16\pi\mechanical{G}_5}
\int\mathrm d^4\mechanical{x}\,\mathrm d\mechanical{y}
\sqrt{-\widetilde g}\,R_5.
\tag{13.1}
$$

The determinant factor makes the coordinate volume into a geometric volume. The Ricci scalar is a scalar, so the product defines an invariant bulk integral. Appropriate boundary terms are understood rather than displayed in this chapter.

## What a successful reduction must show

After integrating around the circle, the action should contain a four-dimensional curvature term and an electromagnetic kinetic term. In the chosen signature and electromagnetic normalization, the target is

$$
\energy{S}_4
=\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left[
\frac{R_4}{16\pi\mechanical{G}_4}
-\frac14\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right].
\tag{13.2}
$$

The relative coefficient matters. Rescaling the vector field changes its kinetic coefficient and also changes the numerical charge assigned to matter. The convention must be kept consistent through both calculations.

For signature $(-,+,+,+)$, the Maxwell term written here has the conventional positive field energy. A sign error in the reduction could instead indicate a wrong-sign kinetic field, which would not be ordinary electromagnetism.

## Check dimensions before coefficients

Natural-unit action is dimensionless. A coordinate has units of inverse energy, so a five-dimensional volume has units of inverse energy to the fifth power. Scalar curvature has units of energy squared. It follows that the five-dimensional gravitational constant has units of inverse energy cubed.

In four dimensions, the gravitational constant instead has units of inverse energy squared. Dividing the five-dimensional constant by a circle circumference has exactly the required dimension:

$$
\mechanical{G}_4=\frac{\mechanical{G}_5}{2\pi\mechanical{r}}.
$$

Dimensional analysis cannot prove the numerical factor or the curvature split, but it can reject many incorrect formulas before a long calculation begins.

## Why this is a substantive unification

The electromagnetic term will not be inserted separately into equation (13.1). It arises when the higher-dimensional curvature is expressed in terms of the metric’s lower-dimensional components. This is the specific sense in which geometry supplies the gauge dynamics.

It does not mean that no assumptions were introduced. Compactification, the cylinder condition, a spacelike circle, a choice of action, and a fixed-radius simplification are all ingredients. The full scalar sector must be checked when comparing the result with the unrestricted five-dimensional equations.

## Self-check

1. Why is the invariant volume factor needed?
2. Why cannot the vector normalization be ignored until after calculating charges?
3. Which restriction is most likely to hide a missing field equation?

### Answers

1. Coordinate volumes change under coordinate transformations; the determinant factor compensates for that change.
2. The same field rescaling changes both the kinetic term and the coefficient in the matter covariant derivative.
3. Fixing the radion before variation. Its omitted equation must still be satisfied or replaced by a justified stabilization mechanism.

Continue with the full coefficient calculation in [[KK 14 Reducing the Einstein-Hilbert action]].

## Source and navigation

[Video segment 02:24:12–02:33:10](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=8652s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 12 What the metric construction proves]] · Next: [[KK 14 Reducing the Einstein-Hilbert action]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\energy{S}_4,\;\energy{S}_5$ | $1$ | Actions | Actions measured in units of the reduced Planck constant. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $\mechanical{G}_5$ | $\unit{GeV^{-3}}$ | Five-dimensional gravitational constant | Coupling in the higher-dimensional gravitational action. |
| $R_4,\;R_5$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
