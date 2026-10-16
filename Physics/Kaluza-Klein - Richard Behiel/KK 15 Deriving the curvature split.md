---
title: "Deriving the curvature split"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "A Miraculous Curvature Formula"
video_start: "02:49:03"
video_end: "03:11:47"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> The nonclosure of the shifted circular one-form generates field strength, and its contribution to higher-dimensional scalar curvature is the Maxwell quadratic term.

## Why the calculation is not a coincidence

The mixed metric sector describes a rule for moving around the circle while moving along the base. If that rule cannot be removed on a neighborhood by changing the circular origin, it has curvature. The electromagnetic field strength measures this failure.

For a fixed radius, take an orthonormal base coframe $e^a$ and define the fifth one-form

$$
e^5=\mathrm d\mechanical{y}+\mechanical{\kappa}\electric{A},
\qquad
\electric{A}=\electric{A}_\mu\,\mathrm d\mechanical{x}^\mu.
$$

The four-dimensional one-form $\electric{A}$ is dimensionless in the natural-unit convention. Each orthonormal coframe element has units of length. Lowercase Latin indices label an orthonormal frame, including one timelike base direction.

## Differentiate the circular one-form

The exterior derivative satisfies the product rule and gives

$$
\mathrm de^5=\mechanical{\kappa}\,\mathrm d\electric{A}
=\frac{\mechanical{\kappa}}2\electric{F}_{ab}e^a\wedge e^b.
\tag{15.1}
$$

The wedge product is antisymmetric. This is why only the antisymmetric derivative of the potential appears. A pure gauge has vanishing exterior derivative and does not create this contribution.

## Solve the torsion-free connection equations

Let $\overline\omega^a{}_b$ be the base connection. The full connection obeys Cartan’s first equation,

$$
\mathrm de^A+\omega^A{}_B\wedge e^B=0.
$$

For constant radius, a compatible solution is

$$
\begin{aligned}
\omega^a{}_b&=\overline\omega^a{}_b
-\frac{\mechanical{\kappa}}2\electric{F}^a{}_be^5,\\
\omega^5{}_a&=\frac{\mechanical{\kappa}}2\electric{F}_{ab}e^b,\\
\omega^a{}_5&=-\frac{\mechanical{\kappa}}2\electric{F}^a{}_be^b.
\end{aligned}
\tag{15.2}
$$

You can check the fifth equation directly: the second connection term cancels equation (15.1). In the base equations, the two new terms containing a fifth one-form cancel each other. The remaining terms are exactly the base torsion-free equations.

These are orthonormal-frame connection one-forms. Their matrix indices are not new physical coordinates. For the coordinate version of a connection, see [[1.2 Covariant differentiation]].

## Contract the curvature

Cartan’s second equation is

$$
\Omega^A{}_B=\mathrm d\omega^A{}_B
+\omega^A{}_C\wedge\omega^C{}_B.
$$

Substituting equation (15.2), collecting the base-curvature and field-strength products, and contracting gives

$$
\widetilde R_{ab}
=R_{ab}-\frac{\mechanical{\kappa}^{\,2}}2
\electric{F}_{ac}\electric{F}_b{}^c,
\qquad
\widetilde R_{55}
=\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{ab}\electric{F}^{ab}.
\tag{15.3}
$$

Here the fifth frame direction is spacelike. Contract the first expression with the base frame metric and add the fifth component. The two quadratic coefficients combine as minus one half plus one quarter:

$$
R_5=R_4-\frac{\mechanical{\kappa}^{\,2}}4
\electric{F}_{ab}\electric{F}^{ab}.
\tag{15.4}
$$

This uses the Riemann-sign convention compatible with the action in [[KK 14 Reducing the Einstein-Hilbert action]]. Reversing the definition of the Riemann tensor reverses the curvature conventions too; signs must be compared as a whole.

## A complementary loop interpretation

A horizontal lift of a base path satisfies

$$
\mathrm d\mechanical{y}=-\mechanical{\kappa}\electric{A}.
$$

Around a small closed base loop, the net circular shift is

$$
\Delta\mechanical{y}
=-\mechanical{\kappa}\oint\electric{A}
=-\mechanical{\kappa}\int\mathrm d\electric{A}.
\tag{15.5}
$$

Stokes’ theorem relates the loop integral to field strength over the enclosed surface. The shift is defined modulo the circumference. The effect is the geometric counterpart of gauge holonomy. It is not a claim that every nonzero gauge field curves the base metric in the same way.

## Self-check

1. Why does a pure gradient not contribute to equation (15.1)?
2. Check the scalar coefficient by contracting equation (15.3).
3. Why was a fixed radius important?

### Answers

1. The exterior derivative of an exact one-form vanishes: mixed derivatives cancel.
2. The base contraction contributes minus one half of the quadratic field strength and the fifth component contributes plus one quarter, leaving minus one quarter.
3. A varying radion adds derivatives of the radius field to both the connection and the scalar curvature. Those terms cannot be dropped in the unrestricted theory.

For curvature and its contractions, see [[1.9 Curvature]].

## Source and navigation

[Video segment 02:49:03–03:11:47](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=10143s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 14 Reducing the Einstein-Hilbert action]] · Next: [[KK 16 Fourier modes and periodicity]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{A}$ | $1$ | Potential one-form | Potential components contracted with coordinate differentials. |
| $\electric{F}_{ab},\;\electric{F}^a{}_b,\;\electric{F}_{ac},\;\electric{F}_b{}^c$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $R_4,\;R_5,\;R_{ab},\;\widetilde R_{ab},\;\widetilde R_{55}$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
| $e^a,\;e^5,\;e^A$ | $\unit{GeV^{-1}}$ | Orthonormal coframe | Length-valued one-forms used to express the metric and connection. |
| $\omega^A{}_B,\;\overline\omega^a{}_b,\;\omega^a{}_b,\;\omega^5{}_a,\;\omega^a{}_5$ | $1$ | Connection one-forms | Torsion-free frame connection forms. |
| $\Omega^A{}_B$ | $1$ | Curvature two-form | Frame curvature form before contraction into curvature components. |
