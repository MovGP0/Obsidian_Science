---
title: "Algebraic decomposition of the metric"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "Dissecting g_AB into g_munu, B_mu, and Phi"
video_start: "01:00:41"
video_end: "01:18:18"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> Completing the square separates a symmetric five-dimensional metric into a four-dimensional metric, a vector field, and a radius field.

## Start without a physical interpretation

Write a symmetric metric in block form:

$$
\widetilde g_{AB}=
\begin{pmatrix}
H_{\mu\nu}&C_\mu\\
C_\nu&D
\end{pmatrix}.
$$

The symbols $H$, $C$, and $D$ are temporary algebraic block labels. They are not additional physical fields beyond the metric. Assume that the distinguished fifth direction is spacelike, so $D>0$ in the coordinate patch under consideration.

The line element is

$$
\mathrm d\mechanical{s}_5^{\,2}
=H_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+2C_\mu\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{y}
+D\,\mathrm d\mechanical{y}^{\,2}.
\tag{6.1}
$$

Define the scalar and the mixed vector by

$$
\mechanical{\Phi}=\sqrt D,
\qquad
\electric{B}_\mu=\frac{C_\mu}{D}.
\tag{6.2}
$$

The vector $\electric{B}_\mu$ is a normalized metric shift. It is not the magnetic flux density.

## Complete the square explicitly

Expand

$$
D\left(\mathrm d\mechanical{y}+\electric{B}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2
=D\,\mathrm d\mechanical{y}^{\,2}
+2C_\mu\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{y}
+\frac{C_\mu C_\nu}{D}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu.
$$

The first two terms are exactly the fifth-direction and mixed terms in equation (6.1). Subtract the extra quadratic term from the four-dimensional block. This defines

$$
g_{\mu\nu}
=H_{\mu\nu}-\frac{C_\mu C_\nu}{D}
=\widetilde g_{\mu\nu}
-\frac{\widetilde g_{\mu5}\widetilde g_{\nu5}}{\widetilde g_{55}}.
\tag{6.3}
$$

Therefore

$$
\mathrm d\mechanical{s}_5^{\,2}
=g_{\mu\nu}\,\mathrm d\mechanical{x}^\mu\mathrm d\mechanical{x}^\nu
+\mechanical{\Phi}^{\,2}
\left(\mathrm d\mechanical{y}+\electric{B}_\mu\,\mathrm d\mechanical{x}^\mu\right)^2.
\tag{6.4}
$$

No field equation has been used. This is a block-matrix identity, also called a Schur-complement decomposition.

## Introduce the electromagnetic normalization

Write $\electric{B}_\mu=\mechanical{\kappa}\electric{A}_\mu$. The constant $\mechanical{\kappa}$ separates the normalization of the physical electromagnetic potential from its contribution to the metric. Its value will be fixed by the action, not by the square-completion identity.

All coordinates in this convention have units of length. The metric and the shift vector are dimensionless. In natural units the canonical potential has units of energy, so $\mechanical{\kappa}$ must have units of inverse energy.

## Worked block example

Consider a two-dimensional spatial block with temporary numerical entries $H=5$, $C=2$, and $D=2$. Then $\mechanical{\Phi}^{\,2}=2$, the shift coefficient is one, and the reduced metric coefficient is $5-4/2=3$. The quadratic form becomes a base contribution with coefficient three plus twice the square of the shifted circular differential. Expanding it returns the original coefficients.

This numerical example checks the subtraction sign in equation (6.3). A plus sign there would fail to reconstruct the original form.

## Self-check

1. Why is the four-dimensional metric not simply the upper-left block of the original matrix?
2. What happens to the decomposition if the fifth diagonal coefficient vanishes?

### Answers

1. The mixed terms contribute an extra base quadratic form when the square is completed. That contribution must be subtracted.
2. This form divides by that coefficient and fails in such a patch. A nondegenerate spacelike circular direction is an assumption of the construction.

## Source and navigation

[Video segment 01:00:41–01:18:18](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=3641s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 05 Cylinder condition and radion assumptions]] · Next: [[KK 07 Interpreting and rebuilding the metric]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{s}_5$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{\mu\nu},\;\widetilde g_{AB}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{B}_\mu$ | $1$ | Metric shift vector | Normalized mixed metric field, distinct from magnetic flux density. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
