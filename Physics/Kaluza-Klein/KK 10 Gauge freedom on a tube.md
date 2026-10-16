---
title: "Gauge freedom on a tube"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> A position-dependent choice of circular origin creates a gradient potential on a flat tube, without creating electromagnetic field strength.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "\"The Tube\" Demonstration that A_mu is a U(1) Gauge Field"; video_start: "01:41:13"; video_end: "01:54:04" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Change the circular origin %% Video 01:41:20–01:45:20 %%

The tube has ordinary axial coordinate $\mechanical{x}$ and circular coordinate $\mechanical{\theta}$. Rings carry circular labels zero, half pi, pi, and three-halves pi. In the first coordinates, the zero-angle seam is straight. In the second coordinates, the locations called zero angle trace a curved line along the same tube.

The labels change; the tube has no physical seam that must move. This distinguishes a coordinate change from bending the space or creating an electromagnetic field. Write the coordinate shift first without the potential-normalization factor:

$$
\mechanical{\theta}'=\mechanical{\theta}+\varepsilon(\mechanical{x}),
\qquad
\mathrm d\mechanical{\theta}=\mathrm d\mechanical{\theta}'-\partial_x\varepsilon\,\mathrm d\mechanical{x}.
$$

### Calculate the transformed tube metric %% Video 01:45:40–01:50:20 %%

Suppress time and two ordinary spatial directions. In the mostly-minus convention, both remaining directions are spacelike and have negative signs:

$$
\mathrm d\mechanical{\widetilde s}^{\,2}=-(\mathrm d\mechanical{x})^2
-\mechanical{\Phi}_{\mathrm{ang}}(\mathrm d\mechanical{\theta})^2.
$$

Substitution gives

$$
\begin{aligned}
\mathrm d\mechanical{\widetilde s}^{\,2}
={}&-\left[1+\mechanical{\Phi}_{\mathrm{ang}}(\partial_x\varepsilon)^2\right](\mathrm d\mechanical{x})^2\\
&+2\mechanical{\Phi}_{\mathrm{ang}}\partial_x\varepsilon\,\mathrm d\mechanical{x}\mathrm d\mechanical{\theta}'
-\mechanical{\Phi}_{\mathrm{ang}}(\mathrm d\mechanical{\theta}')^2.
\end{aligned}
$$

The initial and final matrices are

$$
\widetilde g_{ab}=\begin{pmatrix}-1&0\\0&-\mechanical{\Phi}_{\mathrm{ang}}\end{pmatrix},
\qquad
\widetilde g'_{ab}=\begin{pmatrix}
-1-\mechanical{\Phi}_{\mathrm{ang}}(\partial_x\varepsilon)^2&\mechanical{\Phi}_{\mathrm{ang}}\partial_x\varepsilon\\
\mechanical{\Phi}_{\mathrm{ang}}\partial_x\varepsilon&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}.
$$

The new mixed component is $\widetilde g'_{x\theta}=\widetilde g_{x\theta}+\mechanical{\Phi}_{\mathrm{ang}}\partial_x\varepsilon$ for the illustrated zero-mixed starting metric. The radion entry remains unchanged.

### Restore the normalization %% Video 01:50:40–01:54:00 %%

Restore the normalization that relates the mixed metric entry to the electromagnetic potential:

$$
\electric{A}_\mu=\frac{\electric{B}_\mu}{\mechanical{\xi}}
=\frac{\widetilde g_{\mu4}}{\mechanical{\xi}\mechanical{\Phi}_{\mathrm{ang}}},
\qquad
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon,
\qquad
\electric{A}'_\mu=\electric{A}_\mu+\partial_\mu\varepsilon.
$$

A pure gradient is a gauge change. In this flat-tube example the initial potential is zero, so the transformed potential can be nonzero while its antisymmetric derivative remains zero. The general transformation below also applies when the initial potential is nonzero and the shift depends on all four ordinary coordinates.

![[kk-tube-gauge-seam.svg|**Fig. 10.1** Straight and curved zero-angle lines are coordinate choices on the same cylindrical geometry.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Begin with a flat tube

Keep one spatial base coordinate and one circular coordinate. At a fixed time and fixed values of the other coordinates,

$$
\mathrm d\mechanical{\ell}^{\,2}
=\mathrm d\mechanical{x}^{\,2}+\mathrm d\mechanical{y}^{\,2},
\qquad
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
$$

The tube is intrinsically flat. Its circular direction is periodic, but a small region can be unrolled into a plane.

Change the circular label according to

$$
\mechanical{y}'=\mechanical{y}+\mechanical{\kappa}\lambda(\mechanical{x}),
\qquad
\mechanical{x}'=\mechanical{x}.
$$

The zero mark around the circle is now different at different base positions. The underlying points and distances have not changed.

## Compute the new metric

Use $\mathrm d\mechanical{y}=\mathrm d\mechanical{y}'-\mechanical{\kappa}\lambda'\mathrm d\mechanical{x}$, where the prime on $\lambda$ means its derivative with respect to the base coordinate. Then

$$
\mathrm d\mechanical{\ell}^{\,2}
=\left(1+\mechanical{\kappa}^{\,2}(\lambda')^2\right)\mathrm d\mechanical{x}^{\,2}
-2\mechanical{\kappa}\lambda'\mathrm d\mechanical{x}\mathrm d\mechanical{y}'
+\mathrm d\mechanical{y}'^{\,2}.
\tag{10.1}
$$

The new matrix has a nonzero mixed entry. Nevertheless, the completed-square form gives

$$
g_{xx}=1,
\qquad
\electric{A}_x'=-\lambda'.
\tag{10.2}
$$

The reduced base metric is still one. Its recovery requires the subtraction from [[KK 06 Algebraic decomposition of the metric]]. Reading only the upper-left entry of equation (10.1) would give the wrong base metric.

## Work an explicit smooth relabeling

Choose

$$
\lambda(\mechanical{x})=\frac{\mechanical{x}^{\,2}}{2\mechanical{L}^{\,2}}.
$$

The length $\mechanical{L}$ makes the gauge parameter dimensionless. The transformed potential is

$$
\electric{A}_x'=-\frac{\mechanical{x}}{\mechanical{L}^{\,2}}.
$$

It varies with position and is nonzero except at the origin. Yet it is a pure gradient. On a single spatial base direction, an antisymmetric spatial field-strength tensor has no nonzero component. When the same transformation is included in full spacetime, the complete gradient still has vanishing field strength because its mixed derivatives commute.

This example separates three ideas: a nonzero potential, a position-dependent potential, and a nonzero field strength. The first two do not imply the third.

## What the new coordinate curves look like

A curve of fixed new circular coordinate obeys

$$
\mathrm d\mechanical{y}
=-\mechanical{\kappa}\lambda'\,\mathrm d\mechanical{x}.
$$

It winds around the tube as the base coordinate changes. Coordinate grid lines can therefore be tilted or curved while the tube’s intrinsic geometry remains the same.

The finite-radius circular topology is preserved: adding one circumference to the old coordinate also adds one circumference to the new coordinate. The shift is assumed smooth and well-defined on the coordinate patch.

## Self-check

1. Calculate the determinant of the matrix in equation (10.1).
2. If the initial potential is already nonzero, what is the transformed potential?
3. What would indicate a genuine electromagnetic field instead of this pure-coordinate example?

### Answers

1. It is one: the squared gradient contribution cancels the square of the mixed entry.
2. It is the initial potential minus the gradient of the gauge parameter.
3. A nonzero gauge-invariant field-strength tensor. In the geometric description this obstructs removing the connection on a whole neighborhood.

Compare [[3.2 Gauge Invariance in Classical Electrodynamics]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{L}$ | $\unit{GeV^{-1}}$ | Example length | Length scale used in the worked coordinate example. |
| $\mechanical{\ell}$ | $\unit{GeV^{-1}}$ | Interval or spatial length | Separation specified by the relevant line element. |
| $g_{xx}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{A}_x$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\mechanical{\widetilde s}$ | $\unit{GeV^{-1}}$ | Five-dimensional interval | Five-dimensional interval in the mostly-minus convention. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\electric{B}_\mu$ | $\unit{GeV}$ | Angular metric shift | Mixed angular-coordinate vector before potential normalization; not magnetic flux density. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Angular-convention potential | Electromagnetic potential with the angular formulation’s positive-gradient gauge law. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
