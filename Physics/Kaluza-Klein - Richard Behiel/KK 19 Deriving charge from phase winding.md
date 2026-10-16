---
title: "Deriving charge from phase winding"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Charge Quantization"
video_start: "04:00:08"
video_end: "04:16:22"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> A circular Fourier mode becomes a charged four-dimensional field because shifting the circle’s origin changes that mode’s phase and the metric potential together.

## Transform the full scalar field

A scalar has the same value at the same event, even when coordinate labels change. With

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}),
$$

we have

$$
\signal{\Psi}'(\mechanical{x},\mechanical{y}')
=\signal{\Psi}(\mechanical{x},\mechanical{y}'-\mechanical{\kappa}\lambda).
$$

Insert one Fourier factor:

$$
e^{in\mechanical{y}/\mechanical{r}}
=e^{in\mechanical{y}'/\mechanical{r}}
e^{-in\mechanical{\kappa}\lambda/\mechanical{r}}.
$$

The second factor multiplies the four-dimensional mode amplitude. Therefore

$$
\signal{\psi}_n'=e^{-i\electric{q}_n\lambda}\signal{\psi}_n,
\qquad
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}}.
\tag{19.1}
$$

This is a local phase transformation with a definite charge coefficient.

## Derive the compatible covariant derivative

The ordinary derivative of the transformed field contains an extra derivative of the phase. Introduce

$$
D_\mu\signal{\psi}_n
=\left(\nabla_\mu-i\electric{q}_n\electric{A}_\mu\right)\signal{\psi}_n.
\tag{19.2}
$$

Use the potential transformation $\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda$. Expanding the transformed derivative gives two extra terms of equal magnitude and opposite sign. They cancel, leaving

$$
D'_\mu\signal{\psi}_n'
=e^{-i\electric{q}_n\lambda}D_\mu\signal{\psi}_n.
\tag{19.3}
$$

This is the meaning of gauge covariance: the derivative transforms with the same local phase as the field. Compare [[3.5 Phase Invariance in Field Theory]] and [[11.3 Local Gauge Invariance]].

## Find the derivative directly in the geometry

The horizontal derivative dual to the shifted circular one-form is

$$
\partial_\mu-\mechanical{\kappa}\electric{A}_\mu\partial_{\mechanical{y}}.
$$

Acting on a mode with circular dependence $e^{in\mechanical{y}/\mechanical{r}}$ turns the final derivative into multiplication by $in/\mechanical{r}$. The operator becomes exactly equation (19.2). Thus the charge coupling follows from the same geometry as the potential transformation.

For fixed radius, a scalar mode in a curved base with electromagnetic background obeys a gauge-covariant Klein–Gordon equation. Its mass is the mode mass obtained in [[KK 18 Deriving the Kaluza-Klein mass tower]].

## Interpret the signs and charge unit

The charge of the zero mode vanishes. Positive and negative winding indices give equal and opposite charges. The choice of orientation around the circle decides which winding is called positive; reversing that convention exchanges the signs without changing the physics.

For this one field and this geometric gauge group, every mode charge is an integer multiple of the first charge unit. That does not derive the full set of Standard Model charge assignments. Additional species and gauge structure require separate analysis.

## Worked gauge-covariance check

Suppose a mode initially has a constant amplitude on a local patch with zero potential. After a circular-origin change, the amplitude can have a position-dependent phase and the potential can become a gradient. The ordinary derivative of that new amplitude is nonzero. Its covariant derivative remains zero because the two new terms cancel. An apparent local phase variation has not created physical energy in the field.

## Self-check

1. Does a mode with index minus two have twice the mass or twice the squared mass of the first mode when the original field is massless?
2. What is its charge relative to the plus-one mode?
3. Can one fix the later mass problem by changing the sign of the charge convention?

### Answers

1. Twice the mass and four times the squared mass.
2. Minus twice its charge.
3. No. A sign convention changes orientation, not the magnitude of the mass–charge relation.

## Source and navigation

[Video segment 04:00:08–04:16:22](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=14408s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 18 Deriving the Kaluza-Klein mass tower]] · Next: [[KK 20 General covariance and gauge symmetry]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\signal{\Psi}$ | $\unit{GeV^{3/2}}$ | Five-dimensional scalar field | Canonically normalized higher-dimensional matter field. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\electric{q}_n$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
