---
title: "Radion and the mass-charge problem"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The radion supplies a missing scalar equation, while matching the first geometric charge to the elementary charge forces a tower mass about a billion trillion times too large for the electron.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "The Two Main Flaws"; video_start: "04:52:30"; video_end: "05:05:26" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Radius as a dynamical field %% Video 04:52:40–04:55:00 %%

The construction does not determine the reference radius $\mechanical{r}$. Treating it as a universal constant leaves its value unexplained. A varying radius is a scalar field and needs an equation of motion. A stable equilibrium requires an additional mechanism absent from the elementary fixed-radius calculation.

Let $V(\mechanical{r})$ denote a possible stabilization potential. At an equilibrium radius its first derivative vanishes. Positive second derivative makes small radial displacements oscillate rather than grow. The radion remains dynamical unless an energy-scale approximation justifies neglecting its excitations. The SVG potential is an illustrative quadratic, not a potential derived from the elementary action.

### The ladder and the constant charge-to-mass ratio %% Video 04:55:20–04:58:00 %%

The mode masses and charges obey

$$
\mechanical{m}_n=\frac{|n|}{\mechanical{r}},
\qquad
|\electric{q}_n|=\frac{|n|\mechanical{\kappa}}{\mechanical{r}}
=\mechanical{\kappa}\mechanical{m}_n.
$$

The ladder marks absolute mode labels zero, one, two, and three. Every step increases both mass and charge magnitude. Opposite winding has the opposite charge, but the same location on the mass ladder. For nonzero modes the charge-to-mass magnitude is the same constant. The zero mode has zero mass and charge in the massless starting model, so its ratio is not defined.

The normalized Maxwell action fixes

$$
\mechanical{\kappa}=\left|\frac{\electric{q}_n}{\mechanical{m}_n}\right|
=\sqrt{16\pi\mechanical{G}},
\qquad
\electric{e}=\sqrt{4\pi\electric{\alpha}},
\qquad
\mechanical{\ell}_{\mathrm P}=\sqrt{\mechanical{G}}.
$$

Identifying the first charge magnitude with the elementary charge then gives

$$
\begin{aligned}
\mechanical{r}&=\frac{\mechanical{\kappa}}{\electric{e}}
=\frac{\sqrt{16\pi\mechanical{G}}}{\sqrt{4\pi\electric{\alpha}}}\\
&=\frac{2}{\sqrt{\electric{\alpha}}}\mechanical{\ell}_{\mathrm P}
\approx23\mechanical{\ell}_{\mathrm P}\\
&\approx3.8\times10^{-34}\,\unit{m}.
\end{aligned}
$$

These are natural-unit relations. The Planck-length expression in SI needs the reduced Planck constant and the speed of light, as in the independent calculation below.

### The first charged mass and the observed-particle problem %% Video 04:58:20–05:05:20 %%

The first nonzero mass has the following approximate equivalent forms:

$$
\begin{aligned}
\mechanical{m}_1&=\frac1{\mechanical{r}}
=\frac{\sqrt{\electric{\alpha}}}{2}\mechanical{m}_{\mathrm P}\\
&\approx5.2\times10^{17}\,\unit{GeV}
\approx10^{21}\mechanical{m}_{\mathrm e}.
\end{aligned}
$$

The first charged mode is about a billion trillion electron masses. For scale, it is about forty trillion times a collider energy of fourteen TeV. This comparison explains why it cannot be identified with an electron; it is not a direct experimental exclusion of every heavier state.

The important failure is not merely that additional heavy modes might be difficult to observe. The simple construction was intended to explain known charged matter, but an electron has nonzero charge and a mass far below the predicted first charged mode. The zero mode cannot fix that mismatch because it is neutral in the same construction.

The Higgs mechanism gives masses through field couplings in the Standard Model. Those couplings are additional dynamical input. Calling the circular modes Higgs-generated would not change their derived geometric mass–charge relation.

![[kk-mode-ladder.svg|**Fig. 23.1** Both winding directions have the same mass and opposite charge; every nonzero mode has the same charge-to-mass magnitude.]]

![[kk-radion-potential.svg|**Fig. 23.2** An illustrative stabilizing potential has a minimum, but a minimum alone does not remove radius fluctuations.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Restore the radius field

Use the metric with a positive radius factor and retain its ordinary-spacetime dependence. The determinant and curvature become

$$
\sqrt{-\widetilde g}=\mechanical{\Phi}\sqrt{-g},
$$

$$
R_5=R_4
-\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
-2\mechanical{\Phi}^{-1}\Box\mechanical{\Phi}.
\tag{23.1}
$$

The last term contains derivatives of the radius. The wave operator here is built from the base metric. Integrating around the reference circle and discarding the resulting total-derivative bulk contribution gives the Jordan-frame action

$$
\energy{S}_4
=\frac1{16\pi\mechanical{G}_4}
\int\mathrm d^4\mechanical{x}\sqrt{-g}
\left[
\mechanical{\Phi}R_4
-\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,3}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}
\right].
\tag{23.2}
$$

Boundary treatment is understood. The absence of an explicit standalone scalar kinetic term in this frame does not make the scalar nondynamical: it is coupled to curvature. A conformal change of the base metric rearranges these terms. It does not eliminate the physical scalar degree of freedom.

## Obtain the missing constraint

Varying the scalar in equation (23.2) gives

$$
R_4-\frac{3\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,2}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}=0.
$$

Varying the inverse base metric gives the equation

$$
\begin{aligned}
\mechanical{\Phi}\mathcal G_{\mu\nu}
+\left(g_{\mu\nu}\Box-\nabla_\mu\nabla_\nu\right)\mechanical{\Phi}
={}&\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,3}}2\\
&\times\left(\electric{F}_{\mu\rho}\electric{F}_\nu{}^\rho
-\frac14g_{\mu\nu}\electric{F}_{\rho\sigma}\electric{F}^{\rho\sigma}\right).
\end{aligned}
$$

Here the Einstein tensor is Ricci curvature minus one half the metric times scalar curvature. The two derivatives of the radion arise when integration by parts moves derivatives from the metric variation onto the coefficient multiplying curvature. Contract with the inverse base metric. The electromagnetic bracket has zero trace, because its two terms give the same field-strength contraction. The gravitational terms give

$$
-\mechanical{\Phi}R_4+3\Box\mechanical{\Phi}=0,
\qquad
R_4=3\mechanical{\Phi}^{-1}\Box\mechanical{\Phi}.
$$

Insert this expression for scalar curvature into the scalar variation equation, and divide by three. The result is

$$
\Box\mechanical{\Phi}
=\frac{\mechanical{\kappa}^{\,2}\mechanical{\Phi}^{\,3}}4
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}.
\tag{23.3}
$$

For a nonzero constant radius factor in five-dimensional vacuum, the left-hand side vanishes. Therefore

$$
\electric{F}_{\mu\nu}\electric{F}^{\mu\nu}=0.
\tag{23.4}
$$

The condition does not require the whole electromagnetic field to vanish. In the stated signature, the invariant is twice magnetic-field magnitude squared minus electric-field magnitude squared. A plane electromagnetic wave can satisfy it; a generic purely electrostatic field does not.

This is why restricting the action first and varying it afterward can admit more configurations than the full vacuum theory. Additional stabilization physics changes the scalar equation and must be included explicitly. %% Verification reference: Overduin and Wesson, section 3.4, https://arxiv.org/html/gr-qc/9805018. %%

## Derive the charged-mode scale

Return to the fixed-radius spectrum for a massless five-dimensional matter field:

$$
\mechanical{m}_n=\frac{|n|}{\mechanical{r}},
\qquad
\electric{q}_n=\frac{n\mechanical{\kappa}}{\mechanical{r}},
\qquad
\mechanical{\kappa}^{\,2}=16\pi\mechanical{G}_4.
\tag{23.5}
$$

Identify the first nonzero charge magnitude with the elementary charge. In Heaviside–Lorentz natural units,

$$
\electric{e}^{\,2}=4\pi\electric{\alpha},
\qquad
\mechanical{\ell}_P=\sqrt{\mechanical{G}_4}.
$$

The first-charge condition then fixes the radius:

$$
\mechanical{r}=\frac{\mechanical{\kappa}}{\electric{e}}
=\frac{\sqrt{16\pi\mechanical{G}_4}}{\sqrt{4\pi\electric{\alpha}}}
=\frac{2\mechanical{\ell}_P}{\sqrt{\electric{\alpha}}}.
\tag{23.6}
$$

With the low-energy fine-structure constant, this is approximately twenty-three Planck lengths, or $3.8\times10^{-34}\,\unit{m}$. The corresponding first-mode rest energy, restoring conversion factors for the numerical evaluation, is

$$
\energy{E}_1=\mechanical{m}_1\mechanical{c}^{\,2}
=\frac{\energy{\hbar}\mechanical{c}}{\mechanical{r}}
\approx5.2\times10^{17}\,\unit{GeV}.
\tag{23.7}
$$

The electron rest energy is about $5.11\times10^{-4}\,\unit{GeV}$. Their ratio is approximately $10^{21}$. The result is therefore not a small correction to the electron mass.

## Test possible simple repairs

**Increase the radius.** This lowers the mass spacing, but also lowers the charge unit because both are inversely proportional to the radius. Once gravity and the potential normalization are fixed, the two adjustments cannot be separated in this model.

**Add an ordinary five-dimensional mass.** The mode relation becomes the sum of two nonnegative squared-mass terms. It raises the mode mass rather than canceling the excessive compact contribution.

**Use the zero mode.** This can keep the compact contribution to mass zero, but its geometric charge is also zero. A separate origin of charge would abandon the proposed identification being tested.

**Use the Higgs mechanism.** A mechanism for additional small masses does not supply the missing geometric charge of a zero mode. [[11.9 The Higgs Mechanism]] addresses a different part of the problem.

These arguments apply to the simple spectrum and coupling assumptions stated here. More elaborate compactifications can change them, but must be evaluated as new models.

## Why stabilization does not remove the radion

Near an equilibrium, describe the radius by a canonically normalized scalar $\mechanical{\sigma}$. Its relation to the radius can be nonlinear. Let its potential energy density be $\energy{U}(\mechanical{\sigma})$. At a stable equilibrium value,

$$
\energy{U}'(\mechanical{\sigma}_0)=0,
\qquad
\mechanical{m}_{\sigma}^{\,2}=\energy{U}''(\mechanical{\sigma}_0)>0.
$$

Expanding about that value gives

$$
\energy{U}(\mechanical{\sigma}_0+\delta\mechanical{\sigma})
=\energy{U}(\mechanical{\sigma}_0)
+\frac12\mechanical{m}_{\sigma}^{\,2}(\delta\mechanical{\sigma})^2
+O((\delta\mechanical{\sigma})^3).
$$

The linear term vanishes at equilibrium. The canonical kinetic term and this quadratic term give

$$
\left(\Box-\mechanical{m}_{\sigma}^{\,2}\right)\delta\mechanical{\sigma}=0
$$

in the mostly-plus convention, before including external driving. A potential minimum therefore makes a massive field; it does not delete its fluctuations. Neglecting that field requires energies and driving effects small compared with the stabilization scale. The elementary circle action has not supplied this potential, so its shape cannot be inferred from the illustrative SVG alone.

## Self-check

1. Explain why the constant-radion constraint does not force every electromagnetic field to be zero.
2. Show that changing the radius cannot change the charge-to-mass ratio for nonzero modes of a massless starting field.
3. Why is a sign convention unable to repair the mass problem?

### Answers

1. The constraint is on one quadratic invariant, not every component. Null electromagnetic configurations can have nonzero field strength and zero invariant.
2. Divide the charge magnitude by the mode mass in equation (23.5). The mode index and radius cancel, leaving the metric coupling scale.
3. Reversing the circle orientation changes charge signs, while masses depend on the absolute mode index. The excessive mass magnitude is unchanged.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{r}$ | $\unit{GeV^{-1}}$ | Reference circle radius | Radius encoded in the periodic coordinate identification. |
| $g_{\mu\nu}$ | $1$ | Metric fields | Metric coefficients for length-valued coordinates; an angular coefficient instead carries the required length factors. |
| $\mechanical{\Phi}$ | $1$ | Radion | Ratio of the physical circular radius to the reference radius. |
| $\mechanical{\kappa}$ | $\unit{GeV^{-1}}$ | Metric coupling scale | Scale between the canonical electromagnetic potential and the metric shift. |
| $\electric{F}_{\mu\nu},\;\electric{F}^{\mu\nu}$ | $\unit{GeV^2}$ | Electromagnetic field strength | Antisymmetric derivative of the gauge potential, in coordinate or frame components. |
| $\energy{S}_4$ | $1$ | Actions | Actions measured in units of the reduced Planck constant. |
| $\mechanical{G}_4$ | $\unit{GeV^{-2}}$ | Four-dimensional gravitational constant | Coupling in the reduced gravitational action. |
| $R_4,\;R_5$ | $\unit{GeV^2}$ | Curvature fields | Ricci scalar, Ricci tensor, or Einstein tensor as indicated by the symbol. |
| $\mechanical{m}_n,\;\mechanical{m}_1$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\energy{E}_1$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\electric{q}_n,\;\electric{e}$ | $1$ | Electric charges | Mode charge or elementary charge in Heaviside-Lorentz natural units. |
| $\electric{\alpha}$ | $1$ | Fine-structure constant | Dimensionless electromagnetic coupling. |
| $\mechanical{\ell}_P$ | $\unit{GeV^{-1}}$ | Planck length | Four-dimensional gravitational length scale. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{m}_{\mathrm e}$ | $\unit{GeV}$ | Electron mass | Observed-particle comparison scale in the angular formulation’s mass estimate. |
| $\mechanical{m}_{\mathrm P}$ | $\unit{GeV}$ | Planck mass | Unreduced gravitational mass scale in the angular comparison. |
| $\mechanical{\ell}_{\mathrm P}$ | $\unit{GeV^{-1}}$ | Planck length | Gravitational length used in the radius estimate. |
| $V(\mechanical{r})$ | — | Stabilization potential | Schematic potential; the illustrative plot does not specify a physical normalization or vertical-axis unit. |
| $\mathcal G_{\mu\nu}$ | $\unit{GeV^2}$ | Einstein tensor | Ricci tensor minus one half the metric times scalar curvature. |
| $\mechanical{\sigma},\mechanical{\sigma}_0$ | $\unit{GeV}$ | Canonical radion field | Radius degree of freedom expressed with a canonical kinetic term; subscript zero marks equilibrium. |
| $\energy{U}$ | $\unit{GeV^4}$ | Radion potential density | Additional stabilizing potential, not supplied by the elementary action. |
| $\mechanical{m}_{\sigma}$ | $\unit{GeV}$ | Radion fluctuation mass | Square root of the potential’s second derivative with respect to the canonical field. |
