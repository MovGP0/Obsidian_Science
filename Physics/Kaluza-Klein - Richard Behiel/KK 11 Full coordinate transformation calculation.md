---
title: "Full coordinate transformation calculation"
source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"
video_chapter: "\"Part 1.5\", Optional Rigorous Transformation Calculations"
video_start: "01:54:04"
video_end: "02:20:31"
document_type: "Original self-study chapter with added derivations and exercises"
---

> [!TLDR]
> Applying the tensor transformation law shows that the vector shifts by a gradient while the base metric and radius field remain unchanged.

## Set up the coordinate map and its inverse

Use a cylinder-independent metric and the change

$$
\mechanical{x}^{\mu'}=\mechanical{x}^\mu,
\qquad
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}).
$$

The inverse is the old circular coordinate equal to the new one minus the same shift. The Jacobian of old coordinates with respect to new coordinates is

$$
J^A{}_{B'}=
\begin{pmatrix}
\delta^\mu{}_{\nu'}&0\\
-\mechanical{\kappa}\partial_{\nu'}\lambda&1
\end{pmatrix}.
\tag{11.1}
$$

The tensor transformation law is

$$
\widetilde g'_{A'B'}
=J^C{}_{A'}J^D{}_{B'}\widetilde g_{CD}.
\tag{11.2}
$$

It is the same rule as the matrix product $J^{\mathsf T}\widetilde gJ$. The field values are evaluated at corresponding events. Cylinder independence ensures that the transformed coefficients remain functions of the four base coordinates alone.

## Transform the fifth and mixed components

Only the circular derivative survives for the fifth diagonal entry, so

$$
\widetilde g'_{55}=\widetilde g_{55}=\mechanical{\Phi}^{\,2}.
$$

For a mixed entry,

$$
\begin{aligned}
\widetilde g'_{\mu5}
&=\widetilde g_{\mu5}
-\mechanical{\kappa}\widetilde g_{55}\partial_\mu\lambda\\
&=\mechanical{\kappa}\mechanical{\Phi}^{\,2}
\left(\electric{A}_\mu-\partial_\mu\lambda\right).
\end{aligned}
\tag{11.3}
$$

The radius field is unchanged and the potential has the expected gauge transformation.

## Transform the upper-left block

There are four contributions:

$$
\begin{aligned}
\widetilde g'_{\mu\nu}
={}&\widetilde g_{\mu\nu}
-\mechanical{\kappa}\widetilde g_{\mu5}\partial_\nu\lambda
-\mechanical{\kappa}\widetilde g_{\nu5}\partial_\mu\lambda\\
&+\mechanical{\kappa}^{\,2}\widetilde g_{55}
\partial_\mu\lambda\partial_\nu\lambda.
\end{aligned}
\tag{11.4}
$$

Substitute the decomposed entries. The three vector-dependent contributions combine into a product:

$$
\widetilde g'_{\mu\nu}
=g_{\mu\nu}
+\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}
\left(\electric{A}_\mu-\partial_\mu\lambda\right)
\left(\electric{A}_\nu-\partial_\nu\lambda\right).
\tag{11.5}
$$

Now extract the base metric using the Schur complement:

$$
g'_{\mu\nu}
=\widetilde g'_{\mu\nu}
-\frac{\widetilde g'_{\mu5}\widetilde g'_{\nu5}}{\widetilde g'_{55}}
=g_{\mu\nu}.
\tag{11.6}
$$

The vector product cancels exactly. The unprimed and primed base metrics are equal because the base coordinates themselves were not changed.

## Interpret the result

The full metric components do change. The extracted four-dimensional geometry and the physical circle size do not. The vector potential changes only by a gauge term, so its field strength is unchanged.

This is stronger than component counting. It proves that the three extracted fields separate in a useful way under the relevant subgroup of coordinate transformations.

It is also narrower than a statement about every five-dimensional coordinate transformation. A transformation that mixes the base coordinates with the circle in a more general way need not preserve this same four-dimensional field ansatz. See [[KK 20 General covariance and gauge symmetry]].

## Self-check

1. Why must the inverse-coordinate Jacobian be used in equation (11.2)?
2. Which term would be missed if you kept only the first-order gradient terms in equation (11.4)?
3. Does the calculation require a fixed radion?

### Answers

1. Covariant metric components multiply coordinate differentials. Each old differential is expanded in new differentials using derivatives of old coordinates with respect to new ones.
2. The quadratic gradient term. It is needed for the exact finite transformation and for the cancellation in equation (11.6).
3. No. A positive, cylinder-independent radius field can vary on the base and remains unchanged under this circular-origin shift.

For the general tensor rule, see [[1.1 Vectors, dual vectors, and tensors]].

## Source and navigation

[Video segment 01:54:04–02:20:31](https://www.youtube.com/watch?v=hcL3yJ03jQQ&t=6844s). These are original study notes for the segment topic, with added calculations and exercises. They are not a transcript or a line-by-line reconstruction of the segment.

[[Kaluza-Klein - Study Guide#Notation and units|Notation, units, and sources]] · Previous: [[KK 10 Gauge freedom on a tube]] · Next: [[KK 12 What the metric construction proves]]

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}^\mu,\;\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
