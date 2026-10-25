---
title: "Larmor precession of a two-level state"
---

> [!TLDR]
> The relative phase of the two spin amplitudes makes the Bloch vector rotate around the z axis.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 4. Difficulty: **Intermediate level**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 4|Chapter 11 exercise index]].

## Question

Consider the two-level Hamiltonian

$$
\hat H=\frac{\mechanical{\hbar}\signal{\omega_0}}2\sigma_z.
$$

**(a)** Write $\hat U(\signal{t})=e^{-i\hat H\signal{t}/\mechanical{\hbar}}$ explicitly as a $2\times2$ matrix.

**(b)** For the initial state

$$
|\psi(0)\rangle=|+x\rangle=\frac1{\sqrt2}(|\uparrow\rangle+|\downarrow\rangle),
$$

determine $|\psi(\signal{t})\rangle$.

**(c)** Calculate $\langle\sigma_x\rangle(\signal{t})$, $\langle\sigma_y\rangle(\signal{t})$, and $\langle\sigma_z\rangle(\signal{t})$.

**(d)** Describe the motion of the Bloch vector $(\langle\sigma_x\rangle,\langle\sigma_y\rangle,\langle\sigma_z\rangle)$ geometrically.

> [!note]
> This is the Larmor precession of a spin in a magnetic field. In this exercise, $\signal{\omega_0}$ is the spin-precession angular-frequency parameter, rather than the detuning used in the driven-system example.

## Worked solution

### (a) Evolution matrix

In the ordered basis $(|\uparrow\rangle,|\downarrow\rangle)$, $\sigma_z=\operatorname{diag}(1,-1)$. The Hamiltonian is diagonal, so its exponential is obtained by exponentiating the two diagonal entries:

$$
\hat U(\signal{t})
=\begin{pmatrix}e^{-i\signal{\omega_0}\signal{t}/2}&0\\0&e^{i\signal{\omega_0}\signal{t}/2}\end{pmatrix}.
$$

### (b) Evolving state

Multiply this matrix by the initial column $(1,1)^{\mathsf T}/\sqrt2$:

$$
|\psi(\signal{t})\rangle
=\frac1{\sqrt2}\begin{pmatrix}e^{-i\signal{\omega_0}\signal{t}/2}\\e^{i\signal{\omega_0}\signal{t}/2}\end{pmatrix}
=\frac1{\sqrt2}\left(e^{-i\signal{\omega_0}\signal{t}/2}|\uparrow\rangle+e^{i\signal{\omega_0}\signal{t}/2}|\downarrow\rangle\right).
$$

The two populations stay equal, but their relative phase changes by $\signal{\omega_0}\signal{t}$.

### (c) All three Pauli means

Let $a=e^{-i\signal{\omega_0}\signal{t}/2}/\sqrt2$ and $b=e^{i\signal{\omega_0}\signal{t}/2}/\sqrt2$ be temporary amplitude labels. Then $a^*b=e^{i\signal{\omega_0}\signal{t}}/2$ and $b^*a=e^{-i\signal{\omega_0}\signal{t}}/2$. Use the explicit matrices to retain the sign of the y component:

$$
\begin{aligned}
\langle\sigma_x\rangle
&=(a^*,b^*)\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}
=a^*b+b^*a
=\frac{e^{i\signal{\omega_0}\signal{t}}+e^{-i\signal{\omega_0}\signal{t}}}{2}
=\cos(\signal{\omega_0}\signal{t}),\\
\langle\sigma_y\rangle
&=(a^*,b^*)\begin{pmatrix}0&-i\\i&0\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}
=-ia^*b+ib^*a
=\frac{-ie^{i\signal{\omega_0}\signal{t}}+ie^{-i\signal{\omega_0}\signal{t}}}{2}
=\sin(\signal{\omega_0}\signal{t}),\\
\langle\sigma_z\rangle
&=(a^*,b^*)\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}
=|a|^2-|b|^2=0.
\end{aligned}
$$

### (d) Bloch-vector motion

$$
\mathbf r(\signal{t})
=\bigl(\cos(\signal{\omega_0}\signal{t}),\sin(\signal{\omega_0}\signal{t}),0\bigr),
\qquad |\mathbf r|=1.
$$

The vector starts at the positive x axis and stays on the equator of the Bloch sphere. For $\signal{\omega_0}>0$, it turns from positive x toward positive y about the positive z axis. Its period is $\signal{T}=2\pi/|\signal{\omega_0}|$ for nonzero frequency. A negative frequency reverses the direction; zero frequency gives a fixed vector. The Pauli components are dimensionless; the physical spin means are $\mechanical{\hbar}/2$ times these components.

## Answer

**(a)** $\hat U(\signal{t})=\operatorname{diag}(e^{-i\signal{\omega_0}\signal{t}/2},e^{i\signal{\omega_0}\signal{t}/2})$.

**(b)** $|\psi(\signal{t})\rangle=(e^{-i\signal{\omega_0}\signal{t}/2}|\uparrow\rangle+e^{i\signal{\omega_0}\signal{t}/2}|\downarrow\rangle)/\sqrt2$.

**(c)** The means are $\cos(\signal{\omega_0}\signal{t})$, $\sin(\signal{\omega_0}\signal{t})$, and $0$.

**(d)** The Bloch vector rotates on the unit equatorial circle about the z axis with signed angular frequency $\signal{\omega_0}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The scale that converts Pauli components to spin. |
| $\signal{\omega_0}$ | $\unit{s^{-1}}$ | Precession angular frequency | The signed angular-frequency parameter of the Hamiltonian. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed precession time. |
| $\langle\sigma_x\rangle$, $\langle\sigma_y\rangle$, $\langle\sigma_z\rangle$, $\mathbf r$ | $1$ | Bloch components and vector | The dimensionless spin-direction means. |
| $\signal{T}$ | $\unit{s}$ | Precession period | The time for one complete Bloch-vector revolution. |
