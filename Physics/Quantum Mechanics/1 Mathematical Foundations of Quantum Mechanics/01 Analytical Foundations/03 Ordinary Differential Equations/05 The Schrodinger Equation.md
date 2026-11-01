---
title: "The Schrödinger Equation"
---

> [!TLDR]
> The time-independent Schrödinger equation is an energy eigenvalue problem. Its stationary states form the basis for time evolution, and confinement can produce discrete energy levels.

> [!info] Quantum mechanics — The Schrödinger equation
> The **time-independent Schrödinger equation** is the eigenvalue problem of the Hamiltonian operator:
>
> $$
> \hat H\signal{\psi}_n(\mechanical{x})=\energy{E}_n\signal{\psi}_n(\mechanical{x}).
> $$
>
> For a particle of mass $\mechanical{m}$ in a one-dimensional potential $\energy{V}(\mechanical{x})$,
>
> $$
> \hat H=-\frac{\energy{\hbar}^2}{2\mechanical{m}}
> \frac{\mathrm{d}^2}{\mathrm{d}\mechanical{x}^2}+\energy{V}(\mechanical{x}).
> $$
>
> Thus, the explicit equation is
>
> $$
> -\frac{\energy{\hbar}^2}{2\mechanical{m}}
> \frac{\mathrm{d}^2\signal{\psi}}{\mathrm{d}\mechanical{x}^2}
> +\energy{V}(\mechanical{x})\signal{\psi}(\mechanical{x})
> =\energy{E}\signal{\psi}(\mechanical{x}).
> $$
>
> The allowed energies $\energy{E}_n$ are the **eigenvalues**. Energy quantization follows from the boundary conditions, or from the requirement of normalizability. The eigenfunctions $\signal{\psi}_n$ are the **stationary states**.
>
> A general solution of the time-dependent Schrödinger equation is built from the stationary states:
>
> $$
> \signal{\Psi}(\mechanical{x},\signal{t})
> =\sum_n \signal{c}_n\signal{\psi}_n(\mechanical{x})
> \mathrm{e}^{-\mathrm{i}\energy{E}_n\signal{t}/\energy{\hbar}},
> \qquad \signal{c}_n=\langle\signal{\psi}_n|\signal{\Psi}(\cdot,0)\rangle.
> $$
>
> Solving $\hat H\signal{\psi}=\energy{E}\signal{\psi}$ is the first step in the analysis of a quantum system.

> [!note]
> The displayed sum assumes a time-independent Hamiltonian with a complete orthonormal set of discrete stationary states. A continuous part of the spectrum requires an integral as well. Boundary conditions and normalizability do not imply that every quantum system has only discrete energies.

## Example — Set up the quantum harmonic oscillator

The potential is

$$
\energy{V}(\mechanical{x})=\frac12\mechanical{m}\signal{\omega}^2\mechanical{x}^2.
$$

The Schrödinger equation becomes

$$
-\frac{\energy{\hbar}^2}{2\mechanical{m}}\signal{\psi}''
+\frac12\mechanical{m}\signal{\omega}^2\mechanical{x}^2\signal{\psi}
=\energy{E}\signal{\psi}.
$$

This is a second-order ODE with nonconstant coefficients. The characteristic-equation method does not solve it. It requires more advanced methods, such as a power-series method or ladder operators (Chapter 10).

The substitution

$$
\mechanical{\xi}=\mechanical{x}\sqrt{\frac{\mechanical{m}\signal{\omega}}{\energy{\hbar}}}
$$

makes the equation dimensionless:

$$
-\frac12\signal{\psi}''+\frac12\mechanical{\xi}^2\signal{\psi}
=\frac{\energy{E}}{\energy{\hbar}\signal{\omega}}\signal{\psi}.
$$

The derivatives are now with respect to $\mechanical{\xi}$. Normalizable solutions, which tend to zero as $|\mechanical{\xi}|\to\infty$, exist only for

$$
\energy{E}_n=\energy{\hbar}\signal{\omega}\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
$$

The energy levels have equal spacing.

## What is assumed, and what the eigenvalue problem proves

The nonrelativistic Schrödinger equation is physical input here. For a spinless particle with constant positive mass and the specified real potential, the Hamiltonian includes kinetic energy and potential energy. Its operator domain and boundary conditions must also be supplied. Once that model is chosen, solving the eigenvalue problem is a mathematical task; it does not independently prove that the model applies to a particular experiment.

For a time-independent Hamiltonian, a single energy eigenstate acquires only the displayed phase, so its position density is time independent. A superposition of different energies generally has changing relative phases and can have a time-dependent density. Orthonormality keeps the norm of the complete expansion equal to the sum of the squared coefficient magnitudes. The coefficients must therefore have unit total squared magnitude for a normalized state.

For the oscillator, take positive frequency. The coordinate substitution uses the length scale $\sqrt{\energy{\hbar}/(\mechanical{m}\signal{\omega})}$. It makes the equation dimensionless but does not automatically rescale the wavefunction's normalization measure. If the same function values are written in the new coordinate, the original position measure contributes that length as a Jacobian.

To check the quoted ground-state energy, use the mathematical trial shape $f(\mechanical{\xi})=\mathrm{e}^{-\mechanical{\xi}^2/2}$. Then $f''=(\mechanical{\xi}^2-1)f$, and the dimensionless left side equals $f/2$. The shape is square-integrable and gives $\energy{E}_0=\energy{\hbar}\signal{\omega}/2$. This verifies the lowest candidate; the full integer spectrum quoted above requires the later power-series or ladder-operator argument and is not derived by this one substitution.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}_n$ | $\unit{m^{-1/2}}$ | Stationary wavefunctions | The one-dimensional energy eigenfunctions with position-space normalization. |
| $\signal{\Psi}(\mechanical{x},\signal{t})$ | $\unit{m^{-1/2}}$ | Time-dependent wavefunction | The state expanded in stationary wavefunctions. |
| $\signal{c}_n$ | $1$ | Expansion amplitudes | The state amplitudes in the complete orthonormal stationary basis. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The spatial coordinate of the particle. |
| $\signal{t}$ | $\unit{s}$ | Time | The time variable in the stationary-state expansion. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass in the Hamiltonian. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The spatially dependent potential energy. |
| $\energy{E},\energy{E}_n$ | $\unit{J}$ | Energies | The energy eigenvalue and the oscillator's allowed energy levels. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Oscillator angular frequency | The parameter that sets the oscillator potential and energy spacing. |
| $\mechanical{\xi}$ | $1$ | Dimensionless position | The scaled coordinate in the oscillator equation. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the Hamiltonian, phase evolution, and energy spectrum. |
