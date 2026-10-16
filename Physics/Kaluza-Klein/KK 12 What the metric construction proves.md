---
title: "What the metric construction proves"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The metric calculation establishes a geometric gauge structure; an action and a matter equation are still needed to identify the full physical theory.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Part 1 Conclusion"; video_start: "02:20:31"; video_end: "02:24:12" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### The exact conclusion of Part 1 %% Video 02:20:40–02:24:00 %%

Assume a symmetric five-dimensional metric independent of the circular coordinate, with a fixed nonzero circular component. It can then be written using a four-dimensional base tensor and a vector potential:

$$
\widetilde g_{AB}
=\begin{pmatrix}
g_{\mu\nu}-\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}^{\,2}\electric{A}_\mu\electric{A}_\nu
&\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\mu\\
\mechanical{\Phi}_{\mathrm{ang}}\mechanical{\xi}\electric{A}_\nu&-\mechanical{\Phi}_{\mathrm{ang}}
\end{pmatrix}.
$$

The two identified fields respond differently to a circular-coordinate change:

$$
\mechanical{\theta}'=\mechanical{\theta}+\mechanical{\xi}\varepsilon(\mechanical{x})
\quad\Longrightarrow\quad
g'_{\mu\nu}=g_{\mu\nu},
\qquad
\electric{A}'_\mu=\electric{A}_\mu+\partial_\mu\varepsilon.
$$

The base metric and potential have exactly the transformation behavior required by electromagnetic gauge symmetry. Both arise from one higher-dimensional metric. This is a statement about fields and their transformations. Deriving the Maxwell kinetic term requires the action calculation.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Reconstruct the argument without looking back

Begin with a symmetric five-dimensional metric and a spacelike circular direction. Complete the square. This gives a base metric, a scalar radius factor, and a mixed vector potential. Under a local change in the circle’s origin,

$$
\electric{A}_\mu'=\electric{A}_\mu-\partial_\mu\lambda,
\qquad
g'_{\mu\nu}=g_{\mu\nu},
\qquad
\mechanical{\Phi}'=\mechanical{\Phi}.
$$

The antisymmetric derivative of the potential is gauge invariant. The vector is therefore a good candidate for an Abelian gauge connection.

This chain contains an algebraic step and a transformation step. Neither has used the equations governing how the fields evolve.

## Separate what is proved from what is assumed

| Statement | Status at this stage |
| --- | --- |
| The fifth coordinate is periodic | An assumption about global geometry |
| The retained metric has no fifth-coordinate dependence | The cylinder condition |
| A metric–vector–scalar decomposition exists locally | An algebraic result when the circular coefficient is nonzero |
| The vector shifts by a gradient | A result of the circular-coordinate transformation |
| The radion is constant | An extra restriction when imposed |
| The vector obeys Maxwell’s equations | Not yet derived |
| Matter has the observed charges and masses | Not established |

Writing these categories explicitly prevents a common error: treating an assumption used to simplify the mathematics as a successful prediction.

## Why a gauge law does not fix all dynamics

The ordinary Maxwell kinetic expression contains

$$
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
$$

It is gauge invariant. But its square is gauge invariant too. Terms with additional derivatives can also be gauge invariant. Different choices give different equations of motion while preserving the same transformation law.

The identification of the correct low-energy electromagnetic dynamics therefore requires the action and its normalization. The five-dimensional Einstein–Hilbert action will supply a particular term and fix the scale factor between the mixed metric vector and the normalized potential.

## A useful geometric interpretation

The base metric measures the horizontal part of a displacement. The potential specifies how a displacement along the base is accompanied by a shift around the circle. The radion specifies the length scale of that circular direction.

This picture prepares a deeper result: transporting the circular origin around a small loop can fail to return it to its original value. That failure is measured locally by field strength, just as curvature measures a failure of ordinary parallel transport. The detailed calculation appears in [[KK 15 Deriving the curvature split]].

## Worked counterexample to overinterpretation

The flat-tube coordinate change in [[KK 10 Gauge freedom on a tube]] gives a nonzero mixed potential but zero field strength. Therefore a mixed metric entry alone is not evidence of a physical electromagnetic field. Conversely, a connection with nonzero curvature cannot be removed from an entire neighborhood by a single smooth choice of circular origin.

## Self-check

1. Name the missing step between the gauge transformation and Maxwell’s equations.
2. Does the decomposition explain why particles have the masses found in the Standard Model?
3. What information would be lost by keeping only the upper-left block of the five-dimensional metric?

### Answers

1. Specify and vary an action, then check its normalization and omitted-field equations.
2. No. Matter modes and their spectrum have not yet been studied; the simplest spectrum later fails the observed mass–charge relation.
3. You would lose the distinction between the base metric and the vector-dependent contribution to that block, as well as the separate circular radius information.

Review [[3.5 Phase Invariance in Field Theory]] for the distinction between a symmetry and a chosen field Lagrangian.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\electric{A}_\mu$ | $\unit{GeV}$ | Potential components | Canonically normalized electromagnetic potential components. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\mechanical{\theta}$ | $1$ | Circular angle | Compact circular angle; the spherical-coordinate inset identifies its separate polar-angle use. |
| $\mechanical{\Phi}_{\mathrm{ang}}$ | $\unit{GeV^{-2}}$ | Angular squared radius | Squared physical radius; distinct from the dimensionless radius ratio in the length-coordinate formulation. |
| $\mechanical{\xi}$ | $1$ | Angular normalization | Dimensionless factor relating the mixed vector to the four-potential. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $g_{\mu\nu},g_{ab}$ | $1$ | Angular base metric | Four-dimensional metric or positive spatial example, as identified beside the equation. |
