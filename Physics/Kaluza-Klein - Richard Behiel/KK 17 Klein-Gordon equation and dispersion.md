---
title: "Klein-Gordon equation and dispersion"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Klein-Gordon Eq., Quick Overview"
video_start: "03:17:01"
video_end: "03:35:56"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The Klein–Gordon equation encodes the relativistic energy–momentum relation; a mass term changes the frequency even when ordinary spatial momentum vanishes.

## Fix the sign convention

Use metric signature $(-,+,+,+)$ and natural units. In flat spacetime the wave operator is

$$
\Box=-\partial_{\mechanical{t}}^{\,2}+\nabla^2.
$$

The Klein–Gordon equation for a free scalar field is

$$
\left(\Box-\mechanical{m}^{\,2}\right)\signal{\psi}=0.
\tag{17.1}
$$

With the opposite metric signature, the familiar displayed sign of the mass term changes together with the definition of the wave operator. Compare whole conventions, not isolated signs. [[7.1 The Dirac Equation]] derives the scalar equation alongside its relativistic context.

## Insert a plane wave

Take

$$
\signal{\psi}(\mechanical{t},\mechanical{\mathbf x})
=C\exp\left[i\left(\mechanical{\mathbf p}\cdot\mechanical{\mathbf x}
-\energy{E}\mechanical{t}\right)\right].
\tag{17.2}
$$

The constant $C$ is an arbitrary normalization amplitude with the field’s units. Two time derivatives multiply this wave by minus the energy squared. The spatial Laplacian multiplies it by minus the squared spatial momentum. Substituting into equation (17.1) gives

$$
\energy{E}^{\,2}=|\mechanical{\mathbf p}|^2+\mechanical{m}^{\,2}.
\tag{17.3}
$$

This is the relativistic dispersion relation. The positive-frequency branch has positive energy. In quantum field theory, the complete field also has a negative-frequency sector with the appropriate particle interpretation; the scalar field should not simply be treated as an ordinary single-particle probability amplitude at all energies.

## Restore SI factors

The corresponding dimensional formula is

$$
\energy{E}^{\,2}
=|\mechanical{\mathbf p}|^2\mechanical{c}^{\,2}
+\mechanical{m}^{\,2}\mechanical{c}^{\,4}.
$$

For a plane wave, energy and momentum are related to angular frequency and wave vector by

$$
\energy{E}=\energy{\hbar}\signal{\omega},
\qquad
\mechanical{\mathbf p}=\energy{\hbar}\signal{\mathbf k}.
$$

Thus both a larger spatial wave number and a larger mass increase the temporal oscillation frequency. In natural units these conversion constants are one.

## Interpret the mass term

At zero ordinary spatial momentum, the energy is the rest mass in natural units. The field can still oscillate in time. A massless plane wave instead has energy equal to momentum magnitude.

The group velocity of a positive-energy free wave packet is

$$
\mechanical{\mathbf v}_{\mathrm g}
=\frac{\partial\energy{E}}{\partial\mechanical{\mathbf p}}
=\frac{\mechanical{\mathbf p}}{\energy{E}}.
\tag{17.4}
$$

For a nonzero mass this has magnitude below one. The phase velocity can exceed one without representing a signal speed. Do not identify phase propagation with transport of information.

## Worked energy calculation

Choose a scalar mass of $3\,\unit{GeV}$ and momentum magnitude $4\,\unit{GeV}$. Equation (17.3) gives energy $5\,\unit{GeV}$. The group-speed magnitude is four fifths of the speed of light. The units of mass and momentum are expressed as energy units because this example uses natural units.

In the compactification problem, a momentum component hidden from the four-dimensional observer will add a positive constant to the right-hand side of equation (17.3). That constant is what will look like an additional squared mass.

## Self-check

1. Does a spatially uniform massive mode have zero temporal frequency?
2. Can increasing hidden spatial momentum reduce the effective squared mass in an ordinary spacelike compactification?

### Answers

1. No. Its rest energy gives a nonzero frequency.
2. No. A spacelike momentum component enters the dispersion relation with a positive square. This sign is central to the later mass problem.

## Source and navigation

[Video segment 03:17:01–03:35:56](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=11821s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 16 Fourier modes and periodicity]] · Next: [[KK 18 Deriving the Kaluza-Klein mass tower]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf x}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in natural units. |
| $\signal{\psi}$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\mechanical{m}$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\mechanical{\mathbf p}$ | $\unit{GeV}$ | Momenta | Compact-direction or ordinary spatial momentum. |
| $\energy{E}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\signal{\omega},\;\signal{\mathbf k}$ | $\unit{GeV}$ | Angular frequency and wave vector | Temporal or spatial phase gradient in natural units. |
| $\mechanical{\mathbf v}_{\mathrm g}$ | $1$ | Group velocity | Wave-packet velocity expressed relative to the speed of light. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
