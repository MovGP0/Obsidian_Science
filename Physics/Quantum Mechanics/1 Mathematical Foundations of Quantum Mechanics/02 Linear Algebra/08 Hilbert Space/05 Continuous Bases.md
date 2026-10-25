---
title: "Continuous Bases"
---

> [!TLDR]
> Generalized position states form a formal continuous basis with delta normalization. They are distributions rather than vectors in L²(ℝ), while their coefficients give the physical wavefunction.

The position operator $\hat x$ has generalized eigenvalues $\mechanical{x}\in\mathbb R$, a continuum rather than a discrete set. Its generalized eigenstates satisfy

$$
\hat x|\mechanical{x_0}\rangle=\mechanical{x_0}|\mechanical{x_0}\rangle.
$$

They do not belong to $L^2(\mathbb R)$. In the position representation, $|\mechanical{x_0}\rangle$ corresponds to $\delta(\mechanical{x}-\mechanical{x_0})$, which is not an $L^2$ function.

Nevertheless, they behave as a continuous basis in the formal relations

$$
\int_{-\infty}^{+\infty}|\mechanical{x}\rangle\langle\mechanical{x}|\,d\mechanical{x}=\hat I,
\qquad
\langle\mechanical{x}|\mechanical{x}'\rangle
=\delta(\mechanical{x}-\mechanical{x}').
$$

The wavefunction is the component of $|\psi\rangle$ in this generalized position basis:

$$
\signal{\psi}(\mechanical{x})=\langle\mechanical{x}|\psi\rangle.
$$

Normalization becomes

$$
\begin{aligned}
\langle\psi|\psi\rangle
&=\int_{-\infty}^{+\infty}\langle\psi|\mechanical{x}\rangle
\langle\mechanical{x}|\psi\rangle\,d\mechanical{x}\\
&=\int_{-\infty}^{+\infty}|\signal{\psi}(\mechanical{x})|^2\,d\mechanical{x}=1.
\end{aligned}
$$

> [!note]
> The generalized states $|\mechanical{x}\rangle$ are distributional objects, not vectors in $L^2(\mathbb R)$. A rigorous setting for them is a **rigged Hilbert space**, also called a **Gelfand triple**. For these notes, the formal continuous-basis notation is sufficient, with the understanding that its operations require this mathematical justification.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\mechanical{x}'$, $\mechanical{x_0}$ | $\unit{m}$ | Position | Position coordinates and a generalized position eigenvalue. |
| $\signal{\psi}(\mechanical{x})$ | $\unit{m^{-1/2}}$ | Wavefunction | The position probability amplitude for a normalized one-dimensional state. |
