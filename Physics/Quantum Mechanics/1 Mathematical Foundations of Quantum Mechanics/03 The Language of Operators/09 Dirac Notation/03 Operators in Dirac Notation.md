---
title: "Operators in Dirac Notation"
---

> [!TLDR]
> Operators map kets to kets, while matrix elements and expectation values are complex numbers. The adjoint reverses the order of the states and conjugates the matrix element.

An operator $\hat A$ acts on a ket from the left. The result $\hat A|\psi\rangle$ is another ket, provided the state is in the operator’s domain.

The matrix element between two states is

$$
\langle\phi|\hat A|\psi\rangle\in\mathbb C.
$$

In an orthonormal basis $\{|n\rangle\}$,

$$
A_{mn}=\langle m|\hat A|n\rangle
$$

is the $(m,n)$ entry of the matrix that represents $\hat A$.

The **adjoint operator** $\hat A^\dagger$ satisfies

$$
\langle\phi|\hat A^\dagger|\psi\rangle
=\langle\psi|\hat A|\phi\rangle^*.
$$

Thus $\hat A$ is Hermitian when $\hat A^\dagger=\hat A$, so that

$$
\langle\phi|\hat A|\psi\rangle
=\langle\psi|\hat A|\phi\rangle^*.
$$

For a normalized state, the **expectation value** of an observable is

$$
\boxed{\langle\hat A\rangle_\psi=\langle\psi|\hat A|\psi\rangle.}
$$

## Example — Expectation value of σ_z in a general spin state

Let

$$
|\psi\rangle
=\cos(\signal{\theta}/2)|\uparrow\rangle
+e^{i\signal{\phi}}\sin(\signal{\theta}/2)|\downarrow\rangle.
$$

This is the usual Bloch-sphere parametrization. We want to calculate $\langle\sigma_z\rangle=\langle\psi|\sigma_z|\psi\rangle$.

Since $\sigma_z|\uparrow\rangle=|\uparrow\rangle$ and $\sigma_z|\downarrow\rangle=-|\downarrow\rangle$,

$$
\sigma_z|\psi\rangle
=\cos(\signal{\theta}/2)|\uparrow\rangle
-e^{i\signal{\phi}}\sin(\signal{\theta}/2)|\downarrow\rangle.
$$

Therefore,

$$
\begin{aligned}
\langle\psi|\sigma_z|\psi\rangle
&=\left(\cos\frac{\signal{\theta}}2\langle\uparrow|
+e^{-i\signal{\phi}}\sin\frac{\signal{\theta}}2\langle\downarrow|\right)\\
&\quad\cdot\left(\cos\frac{\signal{\theta}}2|\uparrow\rangle
-e^{i\signal{\phi}}\sin\frac{\signal{\theta}}2|\downarrow\rangle\right)\\
&=\cos^2\frac{\signal{\theta}}2-\sin^2\frac{\signal{\theta}}2
=\cos\signal{\theta}.
\end{aligned}
$$

- For $\signal{\theta}=0$, the state is $|\uparrow\rangle$ and $\langle\sigma_z\rangle=1$.
- For $\signal{\theta}=\pi/2$, the two basis states have equal weights and $\langle\sigma_z\rangle=0$.
- For $\signal{\theta}=\pi$, the state is $|\downarrow\rangle$ up to a global phase, and $\langle\sigma_z\rangle=-1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle\hat A\rangle_\psi$ | — | Expectation value | The mean result of an observable; its unit depends on that observable. |
| $\signal{\theta}$ | $1$ | Polar angle | The angle that sets the relative spin-state weights. |
| $\signal{\phi}$ | $1$ | Relative phase | The phase between the two spin components. |
| $\langle\sigma_z\rangle$ | $1$ | Pauli expectation value | The dimensionless mean of a measurement of the Pauli $z$ observable. |
