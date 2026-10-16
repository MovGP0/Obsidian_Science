---
title: "Klein-Gordon equation and dispersion"
document_type: "Self-contained study chapter"
---

> [!TLDR]
> The Klein–Gordon equation encodes the relativistic energy–momentum relation; a mass term changes the frequency even when ordinary spatial momentum vanishes.

%% source: "https://www.youtube.com/watch?v=hcL3yJ03jQQ"; video_chapter: "Klein-Gordon Eq., Quick Overview"; video_start: "03:17:01"; video_end: "03:35:56" %%

<!-- visual-source:start -->
## Geometric and field equations

Use natural units: the speed of light and reduced Planck constant are one. Greek indices run from 0 to 3; capital Latin indices run from 0 to 4. For spacetime calculations in this first section, use a mostly-minus metric: one positive time direction and four negative spatial directions. Euclidean distance examples are identified separately. The compact angle is dimensionless and has period two pi. Its physical radius has units of length. The scalar with subscript ang is the physical radius squared; it is not a dimensionless radion. The parameter xi is a dimensionless normalization of the mixed vector.

### Operators and the energy–momentum graph %% Video 03:17:20–03:23:00 %%

For a free relativistic spin-zero field, use the following energy and momentum operators:

$$
\energy{\widehat E}=i\partial_t,
\qquad
\mechanical{\widehat{\mathbf p}}=-i\boldsymbol\nabla,
\qquad
\mechanical{\widehat p}_\mu=i\partial_\mu,
$$

$$
\mechanical{p}^\mu=(\energy{E},\mechanical{p}_x,\mechanical{p}_y,\mechanical{p}_z),
\qquad
\mechanical{p}_\mu=\eta_{\mu\nu}\mechanical{p}^\nu
=(\energy{E},-\mechanical{p}_x,-\mechanical{p}_y,-\mechanical{p}_z),
$$

$$
\partial_\mu=\frac{\partial}{\partial x^\mu}
=(\partial_t,\partial_x,\partial_y,\partial_z),
\qquad
\energy{E}^{\,2}=|\mechanical{\mathbf p}|^2+\mechanical{m}^{\,2}.
$$

The graph plots positive energy against one signed momentum component. Curves labeled mass zero, one, and two show the massless V-shaped relation and massive hyperbolae. At zero momentum, positive energy equals mass. At large momentum the massive curves approach the diagonal massless lines. The marked forty-five-degree line uses natural units; its angle depends on the equal numerical axis scales.

### Substitute the operators %% Video 03:23:20–03:30:00 %%

The invariant mass relation is $\mechanical{p}_\mu\mechanical{p}^\mu=\mechanical{m}^{\,2}$. Applying the corresponding operators to the field gives

$$
-\partial^\mu\partial_\mu\signal{\psi}=\mechanical{m}^{\,2}\signal{\psi}
\quad\Longrightarrow\quad
\left(\partial^\mu\partial_\mu+\mechanical{m}^{\,2}\right)\signal{\psi}=0.
$$

Define the d’Alembert operator and obtain the Klein–Gordon equation:

$$
\Box\equiv\partial^\mu\partial_\mu
=\eta^{\mu\nu}\partial_\mu\partial_\nu
=\partial_t^2-\partial_x^2-\partial_y^2-\partial_z^2,
\qquad
(\Box+\mechanical{m}^{\,2})\signal{\psi}=0.
$$

The nonrelativistic relation $\energy{E}=|\mechanical{\mathbf p}|^2/(2\mechanical{m})$ instead gives the free Schrödinger equation under the same operator substitution. A first-order relativistic equation requires matrices with anticommutation relations that reproduce the relativistic quadratic form; that construction describes spin-one-half matter. The scalar Klein–Gordon field considered here has no such spinor components.

### Relate wavelength and phase fronts %% Video 03:30:20–03:35:40 %%

For definite four-momentum, write the plane wave in either form:

$$
\signal{\psi}(\mechanical{x})=C\exp(-i\mechanical{p}_\mu\mechanical{x}^\mu)
=C\exp\left[i\left(\mechanical{\mathbf p}\cdot\mechanical{\mathbf x}-\energy{E}\mechanical{t}\right)\right].
$$

The repeating color bands are surfaces of equal phase. The arrow is momentum and points normal to the phase fronts. The amplitude is constant across the picture, so this is a delocalized momentum eigenstate. Changing color is phase evolution, not a varying probability density. A general free field can be expanded as a superposition of these eigenstates.

At fixed nonzero momentum, equal-phase fronts are separated by $\signal{\lambda}=2\pi/|\mechanical{\mathbf p}|$ in natural units. This follows by requiring a spatial phase increment of $2\pi$. Larger momentum therefore gives a shorter wavelength.

![[kk-relativistic-dispersion.svg|**Fig. 17.1** The positive-energy dispersion branches have rest energy set by mass and approach the massless lines; p₀ is an arbitrary common energy unit with c = 1.]]

<!-- visual-source:end -->

## Length-coordinate convention for the worked derivation

The following worked derivation uses a length coordinate y with period two pi times the reference radius and the mostly-plus metric. To translate the angular calculation above at fixed radius: set y equal to radius times angle, reverse the sign of the full metric, and reverse the sign of the potential. The length-valued coupling kappa equals radius times xi. The field-strength tensor reverses sign with the potential. The dimensionless radion Phi is the physical radius divided by the reference radius; the earlier squared-radius scalar equals reference radius squared times Phi squared. In this later notation, an index labeled 5 denotes the same compact direction labeled 4 in the first calculation; it does not add another coordinate. The algebra below defines its own variables before using them.

## Fix the sign convention

Use metric signature $(-,+,+,+)$ and natural units. In flat spacetime the wave operator is

$$
\Box=-\partial_{\mechanical{t}}^{\,2}+\nabla^2.
$$

The Klein–Gordon equation for a free scalar field is

$$
\left(\Box-\mechanical{m}^{\,2}\right)\signal{\psi}=0.
\tag{17.1}
$$

With the opposite metric signature, the familiar displayed sign of the mass term changes together with the definition of the wave operator. Compare whole conventions, not isolated signs. [[7.1 The Dirac Equation]] derives the scalar equation alongside its relativistic context.

## Insert a plane wave

Take

$$
\signal{\psi}(\mechanical{t},\mechanical{\mathbf x})
=C\exp\left[i\left(\mechanical{\mathbf p}\cdot\mechanical{\mathbf x}
-\energy{E}\mechanical{t}\right)\right].
\tag{17.2}
$$

The constant $C$ is an arbitrary normalization amplitude with the field’s units. Two time derivatives multiply this wave by minus the energy squared. The spatial Laplacian multiplies it by minus the squared spatial momentum. Substituting into equation (17.1) gives

$$
\energy{E}^{\,2}=|\mechanical{\mathbf p}|^2+\mechanical{m}^{\,2}.
\tag{17.3}
$$

This is the relativistic dispersion relation. The positive-frequency branch has positive energy. In quantum field theory, the complete field also has a negative-frequency sector with the appropriate particle interpretation; the scalar field should not simply be treated as an ordinary single-particle probability amplitude at all energies.

## Restore SI factors

The corresponding dimensional formula is

$$
\energy{E}^{\,2}
=|\mechanical{\mathbf p}|^2\mechanical{c}^{\,2}
+\mechanical{m}^{\,2}\mechanical{c}^{\,4}.
$$

For a plane wave, energy and momentum are related to angular frequency and wave vector by

$$
\energy{E}=\energy{\hbar}\signal{\omega},
\qquad
\mechanical{\mathbf p}=\energy{\hbar}\signal{\mathbf k}.
$$

Thus both a larger spatial wave number and a larger mass increase the temporal oscillation frequency. In natural units these conversion constants are one.

## Interpret the mass term

At zero ordinary spatial momentum, the energy is the rest mass in natural units. The field can still oscillate in time. A massless plane wave instead has energy equal to momentum magnitude.

The group velocity of a positive-energy free wave packet is

$$
\mechanical{\mathbf v}_{\mathrm g}
=\frac{\partial\energy{E}}{\partial\mechanical{\mathbf p}}
=\frac{\mechanical{\mathbf p}}{\energy{E}}.
\tag{17.4}
$$

For a nonzero mass this has magnitude below one. The phase velocity can exceed one without representing a signal speed. Do not identify phase propagation with transport of information.

## Worked energy calculation

Choose a scalar mass of $3\,\unit{GeV}$ and momentum magnitude $4\,\unit{GeV}$. Equation (17.3) gives energy $5\,\unit{GeV}$. The group-speed magnitude is four fifths of the speed of light. The units of mass and momentum are expressed as energy units because this example uses natural units.

In the compactification problem, a momentum component hidden from the four-dimensional observer will add a positive constant to the right-hand side of equation (17.3). That constant is what will look like an additional squared mass.

## Self-check

1. Does a spatially uniform massive mode have zero temporal frequency?
2. Can increasing hidden spatial momentum reduce the effective squared mass in an ordinary spacelike compactification?

### Answers

1. No. Its rest energy gives a nonzero frequency.
2. No. A spacelike momentum component enters the dispersion relation with a positive square. This sign is central to the later mass problem.

## Physical quantities

The units below use the collection's natural-unit convention. Explicit SI formulas restore the required constants.

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf x}$ | $\unit{GeV^{-1}}$ | Coordinates | Length-valued base, embedding, or compact coordinates used in this chapter. |
| $\mechanical{t}$ | $\unit{GeV^{-1}}$ | Time | Time coordinate in natural units. |
| $\signal{\psi}$ | $\unit{GeV}$ | Four-dimensional scalar fields | Canonical field or Fourier-mode amplitude on the base spacetime. |
| $\mechanical{m}$ | $\unit{GeV}$ | Masses | Original mass or effective four-dimensional mode mass in natural units. |
| $\mechanical{\mathbf p}$ | $\unit{GeV}$ | Momenta | Compact-direction or ordinary spatial momentum. |
| $\energy{E}$ | $\unit{GeV}$ | Energies | Excitation scale, wave energy, or first-mode rest energy. |
| $\signal{\omega},\;\signal{\mathbf k}$ | $\unit{GeV}$ | Angular frequency and wave vector | Temporal or spatial phase gradient in natural units. |
| $\mechanical{\mathbf v}_{\mathrm g}$ | $1$ | Group velocity | Wave-packet velocity expressed relative to the speed of light. |
| $\energy{\hbar}$ | $1$ | Reduced Planck constant | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{c}$ | $1$ | Speed of light | Set to one in natural units; restored explicitly in SI formulas. |
| $\mechanical{x}$ | $\unit{GeV^{-1}}$ | Base coordinate | Ordinary length-valued base coordinate; a four-coordinate argument where stated. |
| $\signal{\lambda}$ | $\unit{GeV^{-1}}$ | Wavelength | Distance between equal-phase fronts in the plane-wave calculation. |
| $\mechanical{p}_\mu,\mechanical{p}^\mu,\mechanical{p}_x,\mechanical{p}_y,\mechanical{p}_z$ | $\unit{GeV}$ | Momenta | Four-momentum and ordinary spatial momentum components. |
| $\signal{\psi},\signal{\psi}_n$ | — | Scalar waves | Scalar field and Fourier coefficients in the unnormalized expansion; amplitude units depend on the chosen normalization. |
| $C$ | — | Wave amplitude | Constant amplitude with units set by the chosen wave normalization. |
