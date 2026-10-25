---
title: "Integration by parts and a real mean momentum"
---

> [!TLDR]
> A vanishing boundary product makes the derivative integral purely imaginary and the momentum expectation value real.

Chapter 2: Functions, Derivatives and Integrals · Exercise 6 · Intermediate level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 6|Chapter 2 exercise index]].

## Question

Use integration by parts to prove

$$
\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})
\frac{\mathrm{d}\signal{\psi}}{\mathrm{d}\mechanical{x}}\,\mathrm{d}\mechanical{x}
=-\int_{-\infty}^{+\infty}
\frac{\mathrm{d}\signal{\psi}^*}{\mathrm{d}\mechanical{x}}
\signal{\psi}(\mechanical{x})\,\mathrm{d}\mechanical{x},
$$

assuming $\signal{\psi}\to0$ as $\mechanical{x}\to\pm\infty$. Deduce that $\langle\hat p\rangle\in\mathbb{R}$.

## Worked solution

> [!note]
> Assume sufficient regularity and integrability for both integrals and the integration-by-parts limit to exist. Use a normalized one-dimensional wavefunction and $\hat p=-\mathrm{i}\mechanical{\hbar}\,\mathrm{d}/\mathrm{d}\mechanical{x}$.

### Establish the boundary identity

First work on a finite interval. Choose the conjugate wavefunction as the undifferentiated factor:

$$
\int_{-R}^{R}\signal{\psi}^*\signal{\psi}'\,\mathrm{d}\mechanical{x}
=\left[\signal{\psi}^*\signal{\psi}\right]_{-R}^{R}
-\int_{-R}^{R}(\signal{\psi}^*)'\signal{\psi}\,\mathrm{d}\mechanical{x}.
$$

Here $R$ is an auxiliary integration bound. The boundary product is $\lvert\signal{\psi}\rvert^2$. It tends to zero at both ends by the given decay assumption. Take $R\to\infty$ to obtain

$$
\int_{\mathbb R}\signal{\psi}^*\signal{\psi}'\,\mathrm{d}\mechanical{x}
=-\int_{\mathbb R}(\signal{\psi}^*)'\signal{\psi}\,\mathrm{d}\mechanical{x}.
$$

### Conjugate the momentum expectation value

The expectation value is

$$
\langle\hat p\rangle
=-\mathrm{i}\mechanical{\hbar}\int_{\mathbb R}\signal{\psi}^*\signal{\psi}'\,\mathrm{d}\mechanical{x}.
$$

Complex conjugation changes $-\mathrm{i}$ to $+\mathrm{i}$, exchanges the conjugated factors, and commutes with differentiation under the stated regularity assumptions. Thus,

$$
\begin{aligned}
\langle\hat p\rangle^*
&=\mathrm{i}\mechanical{\hbar}\int_{\mathbb R}\signal{\psi}(\signal{\psi}^*)'\,\mathrm{d}\mechanical{x}\\
&=-\mathrm{i}\mechanical{\hbar}\int_{\mathbb R}\signal{\psi}^*\signal{\psi}'\,\mathrm{d}\mechanical{x}\\
&=\langle\hat p\rangle.
\end{aligned}
$$

The second line uses the boundary identity. A complex number equal to its conjugate has zero imaginary part, so the mean momentum is real.

> [!note]
> This calculation establishes the required identity and real expectation value for the stated functions and boundary behavior. A full proof that a momentum operator is self-adjoint also requires its operator domain.

## Answer

The boundary term vanishes, giving the requested negative-sign identity. Consequently,

$$
\langle\hat p\rangle^*=\langle\hat p\rangle,
\qquad \langle\hat p\rangle\in\mathbb R.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate on the whole line. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional state. |
| $\lvert\signal{\psi}\rvert^2$ | $\unit{m^{-1}}$ | Probability density | The boundary product in integration by parts. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the momentum operator. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The real momentum expectation value. |
