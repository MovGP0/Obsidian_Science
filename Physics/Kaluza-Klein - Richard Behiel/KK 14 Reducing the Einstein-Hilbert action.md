---
title: "Reducing the Einstein-Hilbert action"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "A Miraculous Proof"
video_start: "02:33:10"
video_end: "02:49:03"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> Integrating the fixed-radius gravitational action around the circle gives Einstein–Maxwell form and fixes the metric-to-potential normalization.

## State the assumptions first

Use a spacelike circle of coordinate circumference $2\pi\mechanical{r}$. Retain fields independent of its coordinate. Set the radius factor to one in this restricted calculation. The base metric and potential may still vary with ordinary spacetime position.

The bulk action is equation (13.1) of [[KK 13 Why an action is needed]]. The metric determinant and scalar curvature identities are

$$
\sqrt{-\widetilde g}=\sqrt{-g},
\qquad
R_5=R_4-\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\tag{14.1}
$$

The determinant was derived in [[KK 07 Interpreting and rebuilding the metric]]. The curvature identity is derived in the next chapter. Here we use both to keep the action calculation separate from the curvature calculation.

## Integrate the circular coordinate

The integrand is independent of the circular coordinate, so its integral simply multiplies by the circumference:

$$
\begin{aligned}
\energy{S}_5
&=\frac{2\pi\mechanical{r}}{16\pi\mechanical{G}_5}
\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left(R_4-\frac{\mechanical{\kappa}^{\,2}}4\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}\right)\\
&=\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left(
\frac{R_4}{16\pi\mechanical{G}_4}
-\frac{\mechanical{\kappa}^{\,2}}{64\pi\mechanical{G}_4}
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right),
\end{aligned}
\tag{14.2}
$$

where

$$
\mechanical{G}_4=\frac{\mechanical{G}_5}{2\pi\mechanical{r}}.
$$

Matching the Maxwell coefficient to minus one quarter requires

$$
\mechanical{\kappa}^{\,2}=16\pi\mechanical{G}_4.
\tag{14.3}
$$

This is where the normalization is fixed. It is not an independent free adjustment after the gravitational and electromagnetic terms have been normalized.

## Recover the field equations

Vary the potential while holding the metric fixed. The field-strength variation is the antisymmetric derivative of the potential variation. Antisymmetry combines the two terms; integration by parts then gives

$$
\nabla_\mu\electric{F}^{\mu\nu}=0.
\tag{14.4}
$$

This is the source-free Maxwell equation. Matter couplings would supply a current on its right-hand side. The identity that the exterior derivative of the field strength vanishes supplies the homogeneous Maxwell equations.

Varying the base metric gives

$$
\mathcal G_{\mu\nu}=8\pi\mechanical{G}_4\energy{T}_{\mu\nu}^{\mathrm{EM}},
$$

with

$$
\energy{T}_{\mu\nu}^{\mathrm{EM}}
=\electric{F}_{\mu\rho}\electric{F}_\nu{}^\rho
-\frac14g_{\mu\nu}\electric{F}_{\rho\sigma}\electric{F}^{\rho\sigma}.
\tag{14.5}
$$

The symbol $\mathcal G_{\mu\nu}$ denotes the Einstein tensor, not the gravitational constant. It has curvature units. The electromagnetic stress tensor is traceless in four dimensions.

## Important limit of this calculation

The restricted action has Einstein–Maxwell form. The full five-dimensional theory also has the scalar equation omitted by fixing the radius. These are different variation problems. General Einstein–Maxwell solutions need not solve unrestricted five-dimensional vacuum gravity with constant radion. [[KK 23 Radion and the mass-charge problem]] shows why.

## Worked normalization check

If the coefficient multiplying the squared potential in the metric were rescaled by a factor of two, the induced Maxwell coefficient would be multiplied by four. Restoring canonical normalization would rescale the potential and its matter charge. This illustrates why changing the charge normalization alone cannot repair the later mass–charge problem.

## Self-check

1. What is lost if the circle integral is omitted?
2. Does the absence of a boundary around the circle remove all boundary issues from the gravitational action?

### Answers

1. The relation between the four- and five-dimensional gravitational constants, including the radius factor.
2. No. The four-dimensional region can still have a boundary, and a metric variation needs the appropriate boundary treatment. See [[4.1.3 General relativity]].

## Source and navigation

[Video segment 02:33:10–02:49:03](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=9190s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 13 Why an action is needed]] · Next: [[KK 15 Deriving the curvature split]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu},\;\electric{F}_{\mu\rho},\;\electric{F}_\nu{}^\rho,\;\electric{F}_{\rho\sigma},\;\electric{F}^{\rho\sigma}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\energy{S}_5$ | $1$ | Actions | Actions measured in units of the reduced Planck constant. |
| $\energy{T}_{\mu\nu}^{\mathrm{EM}}$ | $\unit{GeV^4}$ | Electromagnetic stress tensor | Energy, momentum, and stress carried by the electromagnetic field. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $\mechanical{G}_5$ | $\unit{GeV^{-3}}$ | Five-dimensional gravitational constant | Coupling in the higher-dimensional gravitational action. |
| $R_4,\;R_5,\;\mathcal G_{\mu\nu}$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
