---
title: "Systems of Linear Differential Equations"
---

> [!TLDR]
> A matrix exponential solves a linear system with constant coefficients. A coupled two-level quantum system gives oscillating state amplitudes and Rabi oscillations.

Quantum mechanics often uses systems of coupled equations. The Schrödinger equation for a two-level system is an example.

A system of two first-order linear ODEs with constant coefficients has the form

$$
\frac{\mathrm{d}}{\mathrm{d}t}\begin{pmatrix}u\\v\end{pmatrix}
=A\begin{pmatrix}u\\v\end{pmatrix},
\qquad A\in M_2(\mathbb{C}).
$$

The formal solution is

$$
\begin{pmatrix}u\\v\end{pmatrix}(t)
=\mathrm{e}^{At}\begin{pmatrix}u\\v\end{pmatrix}(0),
$$

where $\mathrm{e}^{At}$ is the matrix exponential. If $A$ is diagonalizable, with $A=U\Lambda U^{-1}$, then

$$
\mathrm{e}^{At}=U\mathrm{e}^{\Lambda t}U^{-1}
=U\begin{pmatrix}\mathrm{e}^{\lambda_1t}&0\\0&\mathrm{e}^{\lambda_2t}\end{pmatrix}U^{-1}.
$$

## Example — Coupled two-level system

For

$$
|\psi\rangle=\signal{\alpha}|\uparrow\rangle+\signal{\beta}|\downarrow\rangle,
\qquad\hat H=\frac{\energy{\hbar}\signal{\omega}}{2}\hat\sigma_x,
$$

the Schrödinger equation is

$$
\mathrm{i}\energy{\hbar}\frac{\mathrm{d}}{\mathrm{d}\signal{t}}
\begin{pmatrix}\signal{\alpha}\\\signal{\beta}\end{pmatrix}
=\frac{\energy{\hbar}\signal{\omega}}{2}
\begin{pmatrix}0&1\\1&0\end{pmatrix}
\begin{pmatrix}\signal{\alpha}\\\signal{\beta}\end{pmatrix}.
$$

Thus,

$$
\dot{\signal{\alpha}}=-\mathrm{i}\frac{\signal{\omega}}2\signal{\beta},
\qquad
\dot{\signal{\beta}}=-\mathrm{i}\frac{\signal{\omega}}2\signal{\alpha}.
$$

The eigenvalues of $(\signal{\omega}/2)\hat\sigma_x$ are $\pm\signal{\omega}/2$. We will calculate them in Chapter 7. The solution is

$$
\begin{aligned}
\signal{\alpha}(\signal{t})
&=\cos\left(\frac{\signal{\omega}\signal{t}}2\right)\signal{\alpha}_0
-\mathrm{i}\sin\left(\frac{\signal{\omega}\signal{t}}2\right)\signal{\beta}_0,\\
\signal{\beta}(\signal{t})
&=-\mathrm{i}\sin\left(\frac{\signal{\omega}\signal{t}}2\right)\signal{\alpha}_0
+\cos\left(\frac{\signal{\omega}\signal{t}}2\right)\signal{\beta}_0.
\end{aligned}
$$

Starting with $\signal{\alpha}_0=1$ and $\signal{\beta}_0=0$ gives

$$
P(\downarrow,\signal{t})=|\signal{\beta}(\signal{t})|^2
=\sin^2\left(\frac{\signal{\omega}\signal{t}}2\right).
$$

These are **Rabi oscillations**.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The time variable of the two-level system. |
| $\signal{\alpha},\signal{\beta},\signal{\alpha}_0,\signal{\beta}_0$ | $1$ | State amplitudes | The evolving and initial amplitudes of the two basis states. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Coupling angular frequency | The frequency parameter in the two-level Hamiltonian and transition probability. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the Hamiltonian and Schrödinger equation. |
| $P(\downarrow,\signal{t})$ | $1$ | Transition probability | The probability of the down state for the specified initial state. |
