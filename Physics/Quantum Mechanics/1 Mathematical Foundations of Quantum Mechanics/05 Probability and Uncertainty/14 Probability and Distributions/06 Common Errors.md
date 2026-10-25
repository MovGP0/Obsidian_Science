---
title: "Common Errors"
---

> [!TLDR]
> Variance measures spread around the mean, and an expectation need not be a possible single outcome. Born’s rule uses the squared magnitude of a complex wavefunction to produce a nonnegative probability density.

## Error 1 — Use the second moment as the variance

The variance is $\sigma^2=\langle X^2\rangle-\langle X\rangle^2$, not simply $\langle X^2\rangle$. The mean-square term vanishes only when $\langle X\rangle=0$.

## Error 2 — Allow fluctuations when the standard deviation is zero

The condition $\sigma=0$ means that $X=\mu$ with probability one. For a normalized pure quantum state with the required finite moments, $\Delta A=0$ means that the state is an eigenvector of $\hat A$. The measurement then gives the corresponding eigenvalue with certainty.

## Error 3 — Assume that an expectation is always an eigenvalue

The mean of a fair die is $3.5$, although no face has that value. Likewise, for spin one half,

$$
-\frac{\mechanical{\hbar}}2\le\langle\hat S_z\rangle
\le\frac{\mechanical{\hbar}}2.
$$

The expectation can take any value in this interval, whereas an individual spin-component measurement gives one of the two eigenvalues.

## Error 4 — Replace squared magnitude with a square for complex states

For a real function, $|\psi|^2=\psi^2$. Quantum wavefunctions are generally complex, so the correct expression is

$$
|\signal{\psi}|^2=\signal{\psi}^*\signal{\psi},
$$

which need not equal $\signal{\psi}^2$.

## Quantum mechanics — Born’s rule

**Born’s rule**, introduced by Max Born in 1926, gives the position probability density:

$$
\signal{\rho}(\mechanical{x})
=|\signal{\psi}(\mechanical{x})|^2
=\signal{\psi}^*(\mechanical{x})\signal{\psi}(\mechanical{x}).
$$

This is an independent quantum postulate, not a consequence of defining a mathematical density. It corresponds to P4 in Chapter 9. The density is nonnegative, and for a normalized state,

$$
\int_{-\infty}^{+\infty}\signal{\rho}(\mechanical{x})\,d\mechanical{x}=1.
$$

For a position function $f$,

$$
\langle f(\hat x)\rangle
=\int_{-\infty}^{+\infty}f(\mechanical{x})
|\signal{\psi}(\mechanical{x})|^2\,d\mechanical{x}.
$$

The momentum expectation is

$$
\langle\hat p\rangle
=\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})
\left(-i\mechanical{\hbar}\frac{\partial}{\partial\mechanical{x}}\right)
\signal{\psi}(\mechanical{x})\,d\mechanical{x}.
$$

The energy expectation is

$$
\langle\hat H\rangle
=\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})
\hat H\signal{\psi}(\mechanical{x})\,d\mechanical{x}.
$$

All three have the same abstract form:

$$
\langle\hat O\rangle=\langle\psi|\hat O|\psi\rangle.
$$

The structure is common to all observables. What changes is the operator action: multiplication, differentiation, or a combination.

The quantum uncertainty is

$$
\Delta A=\sqrt{\langle\hat A^2\rangle-\langle\hat A\rangle^2}.
$$

It measures the statistical spread of outcomes around the mean. It is a standard deviation of the outcome distribution, rather than an instrument error. The displayed operator expectations require the appropriate domains and finite moments.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle coordinate in the probability density. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional position amplitude. |
| $\signal{\rho}$ | $\unit{m^{-1}}$ | Probability density | The probability per unit position. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in spin and momentum. |
| $\langle\hat S_z\rangle$ | $\unit{J\,s}$ | Mean spin component | The expectation of spin along the z axis. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The expectation of the momentum operator. |
| $\langle\hat H\rangle$ | $\unit{J}$ | Mean energy | The expectation of the Hamiltonian. |
| $\langle f(\hat x)\rangle$, $\langle\hat O\rangle$, $\langle\hat A\rangle$ | — | Observable mean | An expectation with the unit of its observable. |
| $\langle\hat A^2\rangle$ | — | Second observable moment | The squared-outcome mean, with the squared observable unit. |
| $\Delta A$ | — | Observable uncertainty | The outcome standard deviation, with the unit of the observable. |
