---
title: "Cylinder condition and radion assumptions"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "The Mostly Wild 5D Metric Tensor"
video_start: "00:50:27"
video_end: "01:00:41"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> Independence from the fifth coordinate and a fixed circle radius are separate assumptions; each removes different parts of the general five-dimensional field content.

## The cylinder condition

Begin with a general metric that could depend on all five coordinates. The cylinder condition is

$$
\partial_{\mechanical{y}}\widetilde g_{AB}=0.
\tag{5.1}
$$

The derivative symbol means differentiation with respect to the circular coordinate. Equation (5.1) says that shifting around the circle does not change the background metric. It does not say that the circle has zero size, or that its coordinate does not exist.

Geometrically, translation around the circle is an isometry. The vector along that direction is a Killing vector. The connection between an isometry and its conserved quantity is developed in [[1.5 Killing vectors]].

## A Fourier interpretation

A periodic metric can formally be expanded in circular Fourier modes. Equation (5.1) retains only its zero mode. This is a restriction on the retained gravitational background, not a claim that every possible five-dimensional excitation is independent of the circle.

Later, a matter field is allowed to have nonzero circular modes while the geometry is treated as a prescribed background. This is useful for finding a spectrum. It is not a fully backreacting solution with arbitrary excited matter.

The expected excitation scale is

$$
\energy{E}_{\mathrm{KK}}\sim
\frac{\energy{\hbar}\mechanical{c}}{\mechanical{r}}.
$$

At energies well below that scale, a zero-mode effective description can be useful. A controlled low-energy expansion still requires checking interactions and consistency. Simply calling a radius small does not prove that every omitted field can be dropped.

## Freezing the radion is a second step

Write the fifth coefficient as

$$
\widetilde g_{55}=\mechanical{\Phi}^{\,2}(\mechanical{x}).
$$

The cylinder condition allows this scalar to vary across ordinary spacetime. To set it to a constant is an additional restriction:

$$
\partial_\mu\mechanical{\Phi}=0.
\tag{5.2}
$$

A constant can be absorbed into a redefinition of the reference radius. We then use $\mechanical{\Phi}=1$ for fixed-radius calculations. However, the scalar’s field equation does not disappear just because its value was fixed in an intermediate calculation.

There are three distinct operations:

1. Choose coordinates. This changes descriptions.
2. Restrict a field ansatz. This selects a subset of configurations.
3. Integrate out a heavy field. This uses its dynamics to obtain an effective theory.

Freezing the radion by assumption is the second operation. It becomes the third only after a stabilization mechanism and an approximation have been supplied.

## Degrees of freedom after the restrictions

The cylinder condition leaves fifteen metric component functions of four coordinates. Fixing the scalar leaves fourteen such functions. These are still algebraic component functions, not fourteen physical polarizations.

The terms “general metric” and “restricted metric” should therefore be used with care. One can allow arbitrary values of the retained component functions while already imposing strong restrictions on coordinate dependence and scalar dynamics.

## Worked distinction

Take a scalar radius factor that changes slowly with ordinary position but is identical all the way around each circle. It satisfies the cylinder condition and violates equation (5.2). A wave that varies around the circle violates the cylinder condition even if the average circle size is fixed.

## Self-check

1. Does independence from the circular coordinate force the radius to be constant in time?
2. Why must a frozen field’s equation still be checked?

### Answers

1. No. Time is an ordinary spacetime coordinate and can still enter the radius field.
2. A restricted action can miss an equation obtained by varying the omitted field. The retained solution may therefore fail to solve the full theory. [[KK 23 Radion and the mass-charge problem]] gives the explicit constraint.

## Source and navigation

[Video segment 00:50:27–01:00:41](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=3027s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 04 Comparing four- and five-dimensional metrics]] · Next: [[KK 06 Algebraic decomposition of the metric]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\energy{E}_{\mathrm{KK}}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
