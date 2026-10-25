---
title: "Chapter Summary"
---

> [!TLDR]
> Probability means and variances describe both classical distributions and quantum measurement outcomes. Born’s rule supplies the quantum probabilities, and zero variance gives a definite observable value.

- **Discrete probability:** $\sum_iP_i=1$, $\langle X\rangle=\sum_i x_iP_i$, and $\sigma^2=\langle X^2\rangle-\langle X\rangle^2$.
- **Continuous probability:** A density satisfies $\rho\ge0$ and $\int\rho\,dx=1$. The mean is $\langle X\rangle=\int x\rho(x)\,dx$ when it exists.
- **Normal distribution:** $\mathcal N(\mu,\sigma^2)$ is symmetric about its mean, maximizes differential entropy at fixed mean and variance, and appears in the central limit theorem.
- **Chebyshev bound:** $P(|X-\mu|\ge k\sigma)\le1/k^2$ for finite $\sigma>0$ and $k>0$, without assuming a particular distribution shape.
- **Quantum probabilities:** $\signal{\rho}(\mechanical{x})=|\signal{\psi}(\mechanical{x})|^2$ by Born’s rule. The uncertainty $\Delta A$ is the standard deviation of measurement outcomes.
- **Definite values:** For a normalized pure state with finite variance, $\Delta A=0$ means that it lies in one eigenspace of the observable. In a discrete eigenbasis, positive variance requires components at different eigenvalues.

> [!note]
> The source’s final bullet equates positive variance with a superposition. That statement assumes a pure state and distinguishes different eigenvalues, not merely different basis vectors within one degenerate eigenspace. Statistical mixtures can also have positive variance.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the position measurement. |
| $\signal{\rho}$ | $\unit{m^{-1}}$ | Position probability density | The probability per unit position. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\Delta A$ | — | Observable uncertainty | The outcome standard deviation, with the unit of the observable. |
