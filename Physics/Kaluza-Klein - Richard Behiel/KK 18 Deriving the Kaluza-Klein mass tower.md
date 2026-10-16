---
title: "Deriving the Kaluza–Klein mass tower"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Mass Quantization"
video_start: "03:35:56"
video_end: "04:00:08"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> Separating a periodic spatial coordinate in the five-dimensional Klein–Gordon equation gives a four-dimensional tower whose squared masses include the squared compact momentum.

## Start from a flat product background

For the first spectrum calculation, take a flat four-dimensional base, a constant radius, and zero electromagnetic background. The five-dimensional wave operator separates:

$$
\Box_5=\Box_4+\partial_{\mechanical{y}}^{\,2}.
$$

A scalar field of five-dimensional mass $\mechanical{m}_5$ satisfies

$$
\left(\Box_5-\mechanical{m}_5^{\,2}\right)\signal{\Psi}=0.
\tag{18.1}
$$

Insert the Fourier expansion from [[KK 16 Fourier modes and periodicity]]. Each circular factor is an eigenfunction of the second derivative:

$$
\partial_{\mechanical{y}}^{\,2}
e^{in\mechanical{y}/\mechanical{r}}
=-\frac{n^2}{\mechanical{r}^{\,2}}
e^{in\mechanical{y}/\mechanical{r}}.
$$

## Separate the mode equations

Orthogonality lets each independent Fourier coefficient satisfy

$$
\left[
\Box_4-
\left(\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}\right)
\right]\signal{\psi}_n=0.
\tag{18.2}
$$

Compare this with the four-dimensional Klein–Gordon equation. The effective mass is

$$
\mechanical{m}_n^{\,2}
=\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}}.
\tag{18.3}
$$

The mathematical field equation, not just a drawing, establishes the mass interpretation.

## Derive the same result from energy

The five-dimensional dispersion relation is

$$
\energy{E}^{\,2}
=|\mechanical{\mathbf p}|^2
+\mechanical{p}_{5,n}^{\,2}
+\mechanical{m}_5^{\,2}.
$$

A four-dimensional observer tracks the energy and three ordinary spatial momentum components. The remaining constant is interpreted as squared rest mass. Using the quantized compact momentum reproduces equation (18.3).

This interpretation does not require the particle to be classically orbiting a visible ring. It is a statement about the circular dependence of the quantum field mode.

## Important special cases

For a massless five-dimensional field,

$$
\mechanical{m}_0=0,
\qquad
\mechanical{m}_n=\frac{|n|}{\mechanical{r}}.
\tag{18.4}
$$

The plus and minus modes have equal masses. They carry opposite compact momenta and will later have opposite charges. The tower is evenly spaced in mass only in this massless starting case. If the five-dimensional mass is nonzero, equation (18.3), rather than an evenly spaced mass formula, is the correct result.

In SI units the dimensional relation is

$$
\mechanical{m}_n^{\,2}
=\mechanical{m}_5^{\,2}
+\frac{n^2\energy{\hbar}^{\,2}}{\mechanical{r}^{\,2}\mechanical{c}^{\,2}}.
$$

Equivalently, the rest-energy squared receives a contribution from the compact momentum multiplied by the speed of light.

## Worked tower

Let the inverse radius correspond to $2\,\unit{GeV}$ and the original mass be $3\,\unit{GeV}$. The zero mode has mass $3\,\unit{GeV}$. The first two nonzero levels have masses $\sqrt{13}\,\unit{GeV}$ and $5\,\unit{GeV}$. Positive and negative values of the same index give the same mass.

If instead the original mass vanishes, the same radius gives masses zero, two, four, six, and so on in GeV. The change illustrates why “equally spaced tower” needs its stated massless assumption.

## Limits of this derivation

The calculation assumes a simple product background and a free field. Warping, interactions, different boundary conditions, and a varying radius can change the spectrum. Modes can mix if the background loses circular translation symmetry. The equation is a precise result for the stated setting, not a universal mass formula for every compactification.

## Self-check

1. Can an ordinary positive five-dimensional mass cancel the compact-momentum contribution?
2. What happens to every nonzero mode as the radius tends to zero?

### Answers

1. No. Both terms in equation (18.3) are nonnegative for a stable non-tachyonic starting field.
2. Its mass increases without bound in this simple model. Only the zero-mode sector can remain light at fixed low energy.

## Source and navigation

[Video segment 03:35:56–04:00:08](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=12956s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 17 Klein-Gordon equation and dispersion]] · Next: [[KK 19 Deriving charge from phase winding]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\signal{\Psi}$ | $\unit{GeV^{3/2}}$ | Five-dimensional scalar field | Canonically normalized higher-dimensional matter field. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\mechanical{m}_5,\;\mechanical{m}_n,\;\mechanical{m}_0$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\mechanical{p}_{5,n},\;\mechanical{\mathbf p}$ | $\unit{GeV}$ | Momenta | Compact-direction or ordinary spatial momentum. |
| $\energy{E}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
