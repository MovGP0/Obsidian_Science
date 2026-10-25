---
title: "Common Errors"
---

> [!TLDR]
> Count one factor ik per derivative, keep product and convolution formulas distinct, and interpret delta states distributionally. Every L² function has an L² Fourier transform, even when its ordinary integral formula needs interpretation.

## Error 1 — Count derivative factors incorrectly

One derivative gives $\mathcal F[f'](k)=ik\hat f(k)$, not $(ik)^2\hat f(k)$. Two derivatives give $(ik)^2\hat f(k)=-k^2\hat f(k)$.

## Error 2 — Multiply transforms instead of convolving

In general, $\mathcal F[fg]\ne\hat f\hat g$. In this normalization,

$$
\mathcal F[fg]=\frac1{\sqrt{2\pi}}(\hat f*\hat g),
\qquad
\mathcal F[f*g]=\sqrt{2\pi}\,\hat f\hat g.
$$

## Error 3 — Normalize the delta as an ordinary wavefunction

The distributional identity $\int\delta(x)\,dx=1$ does not make the delta square integrable. The integral $\int|\delta(x)|^2\,dx$ is not defined in ordinary distribution theory. Generalized position eigenstates cannot be normalized as Hilbert-space vectors.

## Error 4 — Confuse L² existence with an ordinary integral formula

The source heading says that the Fourier transform does not exist for every function in $L^2$. That statement is incorrect: the Plancherel extension defines a Fourier transform for **every** $L^2$ function, with the same norm.

Not every function lies in $L^2$, and an ordinary Fourier integral need not exist for every function. For example, a plane wave is not square integrable, but it has a distributional transform:

$$
\mathcal F[e^{i\signal{k_0}\mechanical{x}}](\signal{k})
=\sqrt{2\pi}\,\delta(\signal{k}-\signal{k_0}).
$$

This is the distinction illustrated by the source example.

## Quantum mechanics — Position–momentum duality

The Fourier transform provides the mathematics of position–momentum duality. The Fourier uncertainty relation gives

$$
\mechanical{\Delta x}\,\signal{\Delta k}\ge\frac12,
\qquad\mechanical{\Delta x}\,\mechanical{\Delta p}\ge\frac{\mechanical{\hbar}}2.
$$

A normalized state cannot be arbitrarily concentrated in both position and its conjugate coordinate $\signal{k}=\mechanical{p}/\mechanical{\hbar}$.

In the momentum representation, $\hat p$ is multiplication by $\mechanical{p}$ and $\hat x=i\mechanical{\hbar}\partial_{\mechanical{p}}$.

The free-particle stationary Schrödinger equation,

$$
-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\partial_{\mechanical{x}}^2\signal{\psi}
=\energy{E}\signal{\psi},
$$

becomes

$$
\frac{\mechanical{p}^2}{2\mechanical{m}}\signal{\widetilde\psi}(\mechanical{p})
=\energy{E}\signal{\widetilde\psi}(\mechanical{p}).
$$

For $\energy{E}>0$, the generalized solutions are supported at

$$
\mechanical{p}=\pm\sqrt{2\mechanical{m}\energy{E}}.
$$

They can be written as

$$
\signal{\widetilde\psi}(\mechanical{p})
=C_+\delta\left(\mechanical{p}-\sqrt{2\mechanical{m}\energy{E}}\right)
+C_-\delta\left(\mechanical{p}+\sqrt{2\mechanical{m}\energy{E}}\right).
$$

These are generalized energy eigenstates, not normalizable momentum wavefunctions. The two branches have the classical relation between free-particle energy and momentum; an energy eigenstate can be a superposition of the two momentum directions.

The transform is a change between the generalized position basis $\{|x\rangle\}$ and momentum basis $\{|p\rangle\}$. Its algebraic role is the same as a basis change between other eigenstate representations.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the plane wave and position equation. |
| $\signal{k}$, $\signal{k_0}$ | $\unit{m^{-1}}$ | Wavenumber | The spectral coordinate and plane-wave wavenumber. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum-space coordinate. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in operators and uncertainty. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The free-particle mass. |
| $\energy{E}$ | $\unit{J}$ | Energy | The positive free-particle energy eigenvalue. |
| $\signal{\psi}$, $\signal{\widetilde\psi}$ | — | State representation | Position or momentum amplitudes; ordinary normalized states have representation-dependent units, while the displayed eigenstates are generalized. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation in position. |
| $\signal{\Delta k}$ | $\unit{m^{-1}}$ | Wavenumber uncertainty | The standard deviation in wavenumber. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The standard deviation in momentum. |
