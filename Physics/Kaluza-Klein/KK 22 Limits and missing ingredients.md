---
title: "Limits and missing ingredients"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The simplest circle model unifies a metric and an Abelian gauge field mathematically, but it does not supply a realistic radius mechanism, matter spectrum, or full Standard Model.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Summary of the Flaws"; video_start: "04:39:16"; video_end: "04:52:30" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Limits of the elementary model %% Video 04:39:20–04:52:20 %%

The elementary circle model has the following limitations:

1. **No nuclear forces.** The circle construction supplies an Abelian $U(1)$ field. It does not supply the complete Standard Model gauge group. A larger compact space can have a non-Abelian isometry group, but the single-circle model has only one Abelian circle isometry.
2. **The radion.** The simple model does not explain the chosen radius or why it is constant. The potential-energy sketch shows a possible minimum in a proposed stabilizing potential. A field near such a minimum can still fluctuate. Electromagnetic energy depends on the radius and therefore drives the radion, so an unconditional fixed-radius assumption is inconsistent with general electromagnetic configurations.
3. **The mass–charge problem.** Quantized circular momentum gives a mass tower with the lowest charged mode near the gravitational scale, about twenty-one orders of magnitude above the electron mass. Those modes do not reproduce the known charged particles.
4. **No chiral Standard Model fermion sector in this construction.** Additional structure is needed beyond the unmodified circle model treated here.
5. **Matter was inserted.** The scalar field was introduced by hand to study its modes. The geometric origin of the potential has not itself explained what matter is or produced the observed matter content.
6. **Further assumptions and stability.** The model does not explain why the metric should be independent of the angle or why all nonzero angular metric modes can be neglected. Some compact vacua also admit a bubble-like decay in which the circle closes off. That decay requires specific topology and boundary conditions; it is not a consequence established for every compactification here. %% Witten 1982: optional bibliography in the collection guide. %%

A proposed stabilization potential can have a minimum at an equilibrium radius. Small displacements about that minimum are radion excitations; a minimum does not remove the field. Electromagnetic energy depends on the radius and can displace that equilibrium. Fixing the radius without its equation of motion misses this response.

The geometric construction remains useful even when its simplest mass and charge spectrum fails to describe observed particles. A failure of this particular model is not a proof that every compactification is excluded.

<!-- visual-source:end -->

## Keep successful results and failed identifications separate

The metric decomposition and its gauge law remain valid mathematical results. The restricted action contains Einstein–Maxwell terms, and periodic scalar modes form a discrete tower. None of these statements ensures that the tower describes electrons, quarks, or other known particles.

A useful evaluation asks two questions separately: is the derivation correct under its assumptions, and are those assumptions and predictions compatible with the physical system being modeled?

## The radius field cannot simply be forgotten

The physical circle radius is $\mechanical{r}\mechanical{\Phi}$. If the scalar is dynamical, its value can change and it has its own field equation. Setting it to a constant in an action before variation can remove a required equation.

In the simplest vacuum reduction, the scalar equation includes the electromagnetic invariant $\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}$. A nonzero constant radion therefore restricts the allowed electromagnetic configurations. Generic Einstein–Maxwell solutions are not automatically unrestricted five-dimensional vacuum solutions with that constant scalar.

A stabilization mechanism would need additional dynamics. It must explain a stable radius and the properties of its fluctuations. “Set the radius to a constant” is not that explanation. [[KK 23 Radion and the mass-charge problem]] develops the constraint explicitly.

## The mass–charge relation is too restrictive

For the simple periodic scalar construction,

$$
\mechanical{m}_n^{\,2}
=\mechanical{m}_5^{\,2}+\frac{n^2}{\mechanical{r}^{\,2}},
\qquad
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}}.
$$

The action fixes the coupling scale through the four-dimensional gravitational constant. Thus the mass spacing and charge unit are linked. Once the first charge is identified with an observed charge, the radius and tower mass scale are no longer independently adjustable.

For a nonzero massless-parent mode, the charge-to-mass magnitude is kappa. Normalizing the action fixes $\mechanical{\kappa}=\sqrt{16\pi\mechanical{G}_4}$. Setting the first charge magnitude to the elementary charge therefore gives

$$
\mechanical{m}_1=\frac{\electric{e}}{\sqrt{16\pi\mechanical{G}_4}}
\simeq5.2\times10^{17}\,\unit{GeV}.
$$

The electron mass is about $5.11\times10^{-4}\,\unit{GeV}$, so the ratio is about $10^{21}$. This comparison fixes the scale of the failure without requiring a numerical calculation elsewhere.

This is a failure of the simple geometric identification for known matter. It is not just an absence of direct detection of very heavy states. The model was meant to explain the relation between charge and mass, and that relation does not match the charged particles we know.

## Matter was added as an extra ingredient

The scalar wave equation begins by supplying a matter field. The construction does not derive that field’s existence, its spin, or the number of species from the gravitational metric alone.

The scalar example is deliberately simple. It demonstrates how compact momentum can appear as mass and charge. It cannot reproduce fermion properties by relabeling the scalar modes. A theory of known matter must introduce and analyze appropriate fermionic fields as well.

## Chirality needs more structure

The weak interaction distinguishes left- and right-handed fermions. A simple smooth circle reduction of a five-dimensional Dirac field does not by itself give the chiral four-dimensional fermion content of the [[Standard Model]]. Typically it gives paired left- and right-handed zero-mode content.

This is a statement about the simple reduction, not a universal theorem that all extra-dimensional models lack chirality. Orbifolds, boundaries, different internal spaces, and additional ingredients can change the analysis. Such additions are different models and need their own consistency checks.

## The cylinder condition is an approximation to justify

Keeping only gravitational zero modes can be reasonable at low energy if nonzero modes are heavy. The approximation must still respect the retained equations and interactions. Nonzero matter modes can excite additional gravitational fields when their backreaction is included. Treating them as test fields avoids that full problem rather than solving it.

## Why one circle gives an Abelian field

The continuous circle translation is generated by a single vector field, the derivative with respect to the angle. Its commutator with itself is zero. Consequently its Lie algebra has one generator and zero structure constants: this is the Abelian group U(1). Non-Abelian gauge fields require several generators with nonzero commutators. Counting four components of a spacetime vector does not provide these missing internal generators.

## Why the simplest fermion zero mode is not chiral

A four-dimensional Dirac spinor contains left and right components. Define the chirality projectors using a matrix whose square is the identity:

$$
P_{\mathrm L}=\frac{1-\gamma^5}{2},\qquad
P_{\mathrm R}=\frac{1+\gamma^5}{2},\qquad
P_{\mathrm L}+P_{\mathrm R}=1.
$$

The gamma matrices and projectors are algebraic operators, not physical quantities. Expand a periodic five-dimensional Dirac field in integer circular modes. For the zero mode, its circular derivative vanishes. The remaining free four-dimensional Dirac equation allows both projected components. Ordinary periodicity has not removed either one. A chiral spectrum needs an additional projection, boundary condition, background, or internal geometry; the scalar mode calculation supplies none of them.

## A concrete meaning of the vacuum-decay warning

A vacuum can pass tests of small oscillations yet admit a finite change of geometry. A compact-circle example uses the Euclidean metric

$$
\begin{aligned}
\mathrm d\mechanical{s}_{\mathrm E}^{\,2}
&=\frac{\mathrm d\mechanical{\rho}^{\,2}}{f(\mechanical{\rho})}
+\mechanical{\rho}^{\,2}\mathrm d\Omega_3^2
+f(\mechanical{\rho})\,\mathrm d\mechanical{y}^{\,2},\\
f(\mechanical{\rho})&=1-\frac{\mechanical{r}^{\,2}}{\mechanical{\rho}^{\,2}},
\qquad \mechanical{\rho}\ge\mechanical{r},\quad
\mechanical{y}\sim\mechanical{y}+2\pi\mechanical{r}.
\end{aligned}
$$

Here the three-sphere has unit radius before multiplication by rho. At large rho this approaches flat four-dimensional Euclidean space times a circle. At rho equal to r, the circle closes smoothly. To check smoothness, set $\mechanical{\rho}=\mechanical{r}+\mechanical{u}^{\,2}/(2\mechanical{r})$. The radial-circle part becomes, to lowest order,

$$
\mathrm d\mechanical{u}^{\,2}
+\mechanical{u}^{\,2}\mathrm d(\mechanical{y}/\mechanical{r})^2.
$$

This is an ordinary polar plane because the angular period is two pi. Lorentzian continuation gives an expanding region where the circle caps off. Allowing this decay depends on topology and boundary conditions. In the elementary spin setting, periodic fermions exclude this cap, whereas the compatible bounding spin structure is antiperiodic. It is therefore not an instability established for every compactification.

%% Verification references: Witten 1982, doi:10.1016/0550-3213(82)90007-4; Draper, Garcia Garcia and Lillard, Bubble of nothing decays of unstable theories, Phys. Rev. D 104 L121701 (2021), eq. 6, doi:10.1103/PhysRevD.104.L121701. %%

## Self-check

1. Would observing no low-energy radion automatically prove that no radius stabilization is possible?
2. Does a correct Fourier spectrum alone establish a correct particle model?
3. Which result survives even when the simple particle identification fails?

### Answers

1. No. A stabilization mechanism could make the scalar heavy or otherwise change its observable effects. Its dynamics would have to be supplied and tested.
2. No. Charges, masses, spin, chirality, couplings, and consistency all matter.
3. The geometric relation between circular coordinate freedom and an Abelian gauge connection remains a useful mathematical construction.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\mechanical{m}_5,\;\mechanical{m}_n$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\electric{q}_n$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
| $\mechanical{\rho},\mechanical{u},\mechanical{y},\mechanical{s}_{\mathrm E}$ | $\unit{GeV^{-1}}$ | Decay-geometry lengths | Radial coordinate, local polar radius, compact length coordinate, and Euclidean interval. |
| $\mechanical{m}_1$ | $\unit{GeV}$ | First charged mode mass | Predicted mass when its charge is matched to the elementary charge. |
| $\electric{e}$ | $1$ | Elementary charge | First charge unit in Heaviside–Lorentz natural units. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Newton coupling | Four-dimensional gravitational constant. |
