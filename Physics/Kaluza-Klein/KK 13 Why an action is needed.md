---
title: "Why an action is needed"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> An action specifies dynamics; reducing the five-dimensional gravitational action can show whether the geometric vector has the Maxwell kinetic term.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Introduction to \"The Miracle\""; video_start: "02:24:12"; video_end: "02:33:10" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### The precise action statement %% Video 02:24:20–02:29:00 %%

The dynamical claim is an equality between the restricted five-dimensional action and a four-dimensional gravitational action plus a Maxwell action:

$$
\begin{aligned}
\energy{\widetilde S}&=-\frac1{16\pi\mechanical{\widetilde G}}
\int\mathrm d^5\mechanical{x}\sqrt{|\det\widetilde g|}\,\widetilde R\\
&=-\frac1{16\pi\mechanical{G}}
\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,R\\
&\quad-\frac14\int\mathrm d^4\mechanical{x}\sqrt{|\det g|}\,
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\end{aligned}
$$

Three colored brackets identify the five-dimensional Einstein–Hilbert action, the four-dimensional Einstein–Hilbert action, and the four-dimensional Maxwell action. The five-dimensional gravitational constant differs from the four-dimensional constant. Their relation depends on the circle size.

### Assumptions and reference correction %% Video 02:29:20–02:33:00 %%

The displayed equality assumes the cylinder condition, a frozen radius, and the potential normalization that will be fixed in the next chapter. It is not an identity for an arbitrary five-dimensional metric without those restrictions.

The curved-space measure must include $\sqrt{|\det g|}$. In flat Cartesian coordinates it equals one, but omitting it in a general coordinate chart destroys coordinate invariance of the action. The square-root determinant compensates the coordinate Jacobian of the volume element. %% Provenance: the speaker flags a missing determinant factor in Bailin–Love 1.18, compared with 2.20; this paragraph states the required measure directly. %%

The Maxwell term shown is the free photon-field action. The matter chapters later identify charge; the presence of the free kinetic term alone does not yet establish how a charged field transforms.

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## From a field arrangement to a physical law

A metric ansatz tells us what field configurations we allow. It does not tell us which configurations solve the theory. An action supplies that information through stationary variation.

For a schematic field collection, write the action as the integral of a Lagrangian density. A variation that vanishes suitably on the boundary gives Euler–Lagrange equations. The same procedure applies to a metric, although its curvature contains second derivatives and boundary terms need care. See [[2.1 Hamilton's Principle]] and [[4.1.3 General relativity]].

The five-dimensional bulk gravitational action is

$$
\energy{S}_5
=\frac{1}{16\pi\mechanical{G}_5}
\int\mathrm d^4\mechanical{x}\,\mathrm d\mechanical{y}
\sqrt{-\widetilde g}\,R_5.
\tag{13.1}
$$

The determinant factor makes the coordinate volume into a geometric volume. The Ricci scalar is a scalar, so the product defines an invariant bulk integral. Appropriate boundary terms are understood rather than displayed in this chapter.

## What a successful reduction must show

After integrating around the circle, the action should contain a four-dimensional curvature term and an electromagnetic kinetic term. In the chosen signature and electromagnetic normalization, the target is

$$
\energy{S}_4
=\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left[
\frac{R_4}{16\pi\mechanical{G}_4}
-\frac14\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right].
\tag{13.2}
$$

The relative coefficient matters. Rescaling the vector field changes its kinetic coefficient and also changes the numerical charge assigned to matter. The convention must be kept consistent through both calculations.

For signature $(-,+,+,+)$, the Maxwell term written here has the conventional positive field energy. A sign error in the reduction could instead indicate a wrong-sign kinetic field, which would not be ordinary electromagnetism.

## Check dimensions before coefficients

Natural-unit action is dimensionless. A coordinate has units of inverse energy, so a five-dimensional volume has units of inverse energy to the fifth power. Scalar curvature has units of energy squared. It follows that the five-dimensional gravitational constant has units of inverse energy cubed.

In four dimensions, the gravitational constant instead has units of inverse energy squared. Dividing the five-dimensional constant by a circle circumference has exactly the required dimension:

$$
\mechanical{G}_4=\frac{\mechanical{G}_5}{2\pi\mechanical{r}}.
$$

Dimensional analysis cannot prove the numerical factor or the curvature split, but it can reject many incorrect formulas before a long calculation begins.

## Why this is a substantive unification

The electromagnetic term will not be inserted separately into equation (13.1). It arises when the higher-dimensional curvature is expressed in terms of the metric’s lower-dimensional components. This is the specific sense in which geometry supplies the gauge dynamics.

It does not mean that no assumptions were introduced. Compactification, the cylinder condition, a spacelike circle, a choice of action, and a fixed-radius simplification are all ingredients. The full scalar sector must be checked when comparing the result with the unrestricted five-dimensional equations.

## Derive the stationary-action equation

Let f be a field and let the Lagrangian density depend on f and its first derivatives. In this paragraph these are mathematical placeholders, not additional matter fields. Vary f while fixing its boundary value:

$$
\begin{aligned}
\delta S
&=\int\mathrm d^d x\left[
\frac{\partial\mathcal L}{\partial f}\delta f
+\frac{\partial\mathcal L}{\partial(\partial_\mu f)}\partial_\mu\delta f\right]\\
&=\int\mathrm d^d x\left[
\frac{\partial\mathcal L}{\partial f}
-\partial_\mu\frac{\partial\mathcal L}{\partial(\partial_\mu f)}\right]\delta f
+\int_{\partial M}\mathrm d\Sigma_\mu
\frac{\partial\mathcal L}{\partial(\partial_\mu f)}\delta f.
\end{aligned}
$$

The last integral vanishes when the variation is zero on the boundary or has compact support. Arbitrary variations inside the region then require

$$
\frac{\partial\mathcal L}{\partial f}
-\partial_\mu\frac{\partial\mathcal L}{\partial(\partial_\mu f)}=0.
$$

This is the Euler–Lagrange equation. It explains why a transformation law alone does not determine dynamics: distinct invariant Lagrangians can have different stationary configurations. For example, adding a higher power of the gauge-invariant field-strength contraction preserves gauge symmetry but changes the field equation.

The gravitational action contains second metric derivatives through curvature. Integrating its variation by parts leaves a surface term involving a derivative of the metric variation. For the local bulk equations one can use variations with compact support, which makes that term vanish. For a finite region with a fixed induced boundary metric, an extrinsic-curvature boundary term must instead be included. The circle has no boundary, but the base region can have one.

## Self-check

1. Why is the invariant volume factor needed?
2. Why cannot the vector normalization be ignored until after calculating charges?
3. Which restriction is most likely to hide a missing field equation?

### Answers

1. Coordinate volumes change under coordinate transformations; the determinant factor compensates for that change.
2. The same field rescaling changes both the kinetic term and the coefficient in the matter covariant derivative.
3. Fixing the radion before variation. Its omitted equation must still be satisfied or replaced by a justified stabilization mechanism.

Continue with the full coefficient calculation in [[KK 14 Reducing the Einstein-Hilbert action]].

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x},\;\mechanical{y}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\energy{S}_4,\;\energy{S}_5$ | $1$ | Actions | Actions measured in units of the reduced Planck constant. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $\mechanical{G}_5$ | $\unit{GeV^{-3}}$ | Five-dimensional gravitational constant | Coupling in the higher-dimensional gravitational action. |
| $R_4,\;R_5$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
| $\mechanical{\widetilde G}$ | $\unit{GeV^{-3}}$ | Gravitational constant | Five-dimensional Newton coupling before the circle integral. |
| $\widetilde g_{AB}$ | — | Five-dimensional metric | Component units depend on the length-valued base coordinates and dimensionless angular coordinate. |
| $R,\widetilde R$ | $\unit{GeV^2}$ | Scalar curvature | Four- and five-dimensional scalar curvatures in the angular convention. |
| $\energy{\widetilde S}$ | $1$ | Actions | Four- and five-dimensional actions in units of the reduced Planck constant. |
