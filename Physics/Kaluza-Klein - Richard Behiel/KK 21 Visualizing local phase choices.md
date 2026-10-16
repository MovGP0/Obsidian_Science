---
title: "Visualizing local phase choices"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "The Meditation"
video_start: "04:23:31"
video_end: "04:39:16"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> A local phase convention is a choice of where to read each circular mode; the gauge potential compensates for changes in that convention when neighboring points are compared.

## Build the mental picture one step at a time

At each ordinary spacetime event, imagine a circle. A mode has a phase that winds an integer number of times around it. Now select one marked point on each circle as the local zero of the circular coordinate.

Reading the full field at that selected circular origin gives a four-dimensional mode amplitude. Changing the selected origin changes the phase assigned to that amplitude. The full higher-dimensional scalar field remains the same geometric field.

This picture does not mean that a particle is simultaneously measured at every possible phase. It means that the four-dimensional field representative depends on a convention used to describe the circular mode.

## Express the phase relation

Write a nonzero four-dimensional scalar mode as

$$
\signal{\psi}_n=\signal{\rho}_ne^{i\signal{\chi}_n}.
$$

The magnitude $\signal{\rho}_n$ has the field’s units. The phase $\signal{\chi}_n$ is dimensionless and is only defined locally where the magnitude is nonzero.

Under a circular-origin shift,

$$
\signal{\chi}_n'=\signal{\chi}_n-\electric{q}_n\lambda,
\qquad
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda.
$$

Consequently,

$$
\partial_\mu\signal{\chi}_n'
-\electric{q}_n\electric{A}_\mu'
=\partial_\mu\signal{\chi}_n
-\electric{q}_n\electric{A}_\mu.
\tag{21.1}
$$

The phase gradient alone is convention-dependent. The compensated combination is gauge invariant.

## Connect the picture to the kinetic term

Apply the covariant derivative:

$$
D_\mu\signal{\psi}_n
=e^{i\signal{\chi}_n}
\left[
\partial_\mu\signal{\rho}_n
+i\signal{\rho}_n
\left(\partial_\mu\signal{\chi}_n-\electric{q}_n\electric{A}_\mu\right)
\right].
\tag{21.2}
$$

The kinetic term depends on derivatives of the magnitude and on the invariant phase-gradient combination. It does not depend on the arbitrary phase convention by itself.

This is why a position-dependent phase that is generated solely by a gauge change does not automatically represent a new physical flow or new field energy. The potential changes at the same time.

## Compare phases around a loop

Transport between nearby circles uses the gauge connection. For a closed loop, the phase factor can be written in terms of

$$
\exp\left(i\electric{q}_n\oint\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu\right).
\tag{21.3}
$$

An overall orientation convention can conjugate this factor. Under a single-valued gauge change, the integral of the added gradient around the loop vanishes. More general allowed large gauge changes leave the exponentiated phase unchanged for the permitted charges.

For a small contractible loop, Stokes’ theorem relates the phase to the field strength through the enclosed surface. For a noncontractible loop, global information can matter even if the field strength vanishes on the region traversed. See [[3.4 Significance of Potentials in Quantum Theory]].

## Worked cancellation

Start with a constant positive magnitude, zero phase, and zero potential on a patch. Make a gauge change. The new phase gradient is minus the charge times the parameter gradient. The new potential is minus that same parameter gradient. Substituting into equation (21.1) gives zero exactly.

The ordinary derivative of the transformed mode is generally nonzero, but its covariant derivative remains zero. This is a useful calculation to repeat whenever the visual picture becomes confusing.

## Self-check

1. Is the local phase itself a gauge-invariant observable?
2. What fails in the magnitude–phase representation at a zero of the field?
3. Why is a closed-loop comparison more useful than comparing absolute phases at isolated points?

### Answers

1. No. It changes with the chosen circular origin.
2. The phase becomes undefined. The original complex field remains the appropriate variable there.
3. The connection supplies the comparison rule, and the resulting loop phase can be gauge invariant. An absolute local phase has no such invariant meaning by itself.

## Source and navigation

[Video segment 04:23:31–04:39:16](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=15811s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 20 General covariance and gauge symmetry]] · Next: [[KK 22 Limits and missing ingredients]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\signal{\psi}_n$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\signal{\rho}_n$ | $\unit{GeV}$ | Scalar-field magnitude | Magnitude in the local magnitude-phase representation. |
| $\signal{\chi}_n$ | $1$ | Field phase | Local phase of a nonzero complex scalar mode. |
| $\electric{q}_n$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
