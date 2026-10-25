---
title: "Hermitian and Unitary Operators"
---

> [!TLDR]
> Exponentiating a Hermitian generator gives a unitary family. Pauli-matrix exponentials reduce to sine and cosine and describe spin rotations with a consistent sign convention.

> [!theorem] Theorem 11.1 | Hermitian generators and unitary operators
> If $\hat G^\dagger=\hat G$, then, for every real parameter $\theta$,
>
> $$
> \hat U(\theta)=e^{i\theta\hat G}
> $$
>
> is unitary. Conversely, a differentiable one-parameter unitary group has a Hermitian generator in finite dimensions.

**Proof of unitarity:**

$$
\hat U^\dagger
=\left(e^{i\theta\hat G}\right)^\dagger
=e^{-i\theta\hat G^\dagger}
=e^{-i\theta\hat G}
=\hat U^{-1}.
\quad\square
$$

The exponential is defined by the power series in the bounded-operator or finite-matrix setting:

$$
e^{i\theta\hat G}
=\sum_{n=0}^{\infty}\frac{(i\theta)^n\hat G^n}{n!}
=\hat I+i\theta\hat G-\frac{\theta^2\hat G^2}{2!}
-\frac{i\theta^3\hat G^3}{3!}+\cdots.
$$

For a Hermitian matrix, diagonalization reduces this calculation to exponentiating the eigenvalues.

> [!note]
> The source’s converse refers to the generator of a unitary family, not to every possible logarithm of one fixed unitary. In infinite dimensions, a strongly continuous one-parameter unitary group has a self-adjoint generator. Its exponential is defined by spectral calculus; a power series need not converge on every Hilbert-space vector. A self-adjoint operator with continuous spectrum also need not have a discrete eigenbasis.

## Example — Exponential of a Pauli matrix

Consider $e^{i\signal{\theta}\sigma_z/2}$. The source uses a plus sign in this example. Relative to the symmetry-table convention $e^{-i\signal{\theta}\hat S_z/\mechanical{\hbar}}$, it describes a rotation by $-\signal{\theta}$.

Since $\sigma_z$ has eigenvalues $\pm1$ and eigenstates $|\uparrow\rangle$, $|\downarrow\rangle$,

$$
\sigma_z=|\uparrow\rangle\langle\uparrow|-|\downarrow\rangle\langle\downarrow|.
$$

Therefore,

$$
e^{i\signal{\theta}\sigma_z/2}
=e^{i\signal{\theta}/2}|\uparrow\rangle\langle\uparrow|
+e^{-i\signal{\theta}/2}|\downarrow\rangle\langle\downarrow|
=\begin{pmatrix}e^{i\signal{\theta}/2}&0\\0&e^{-i\signal{\theta}/2}\end{pmatrix}.
$$

Alternatively, use $\sigma_z^2=\hat I$ and separate the even and odd terms:

$$
\begin{aligned}
e^{i\signal{\theta}\sigma_z/2}
&=\sum_{k=0}^{\infty}\frac{(i\signal{\theta}/2)^{2k}}{(2k)!}\sigma_z^{2k}
+\sum_{k=0}^{\infty}\frac{(i\signal{\theta}/2)^{2k+1}}{(2k+1)!}\sigma_z^{2k+1}\\
&=\hat I\sum_{k=0}^{\infty}\frac{(-1)^k(\signal{\theta}/2)^{2k}}{(2k)!}
+i\sigma_z\sum_{k=0}^{\infty}\frac{(-1)^k(\signal{\theta}/2)^{2k+1}}{(2k+1)!}\\
&=\cos(\signal{\theta}/2)\hat I+i\sin(\signal{\theta}/2)\sigma_z.
\end{aligned}
$$

This gives the same diagonal matrix.

## Example — Rotation about the x axis

Use $\sigma_x^2=\hat I$ in the same way:

$$
\begin{aligned}
e^{i\signal{\theta}\sigma_x/2}
&=\cos(\signal{\theta}/2)\hat I+i\sin(\signal{\theta}/2)\sigma_x\\
&=\begin{pmatrix}\cos(\signal{\theta}/2)&i\sin(\signal{\theta}/2)\\
i\sin(\signal{\theta}/2)&\cos(\signal{\theta}/2)\end{pmatrix}.
\end{aligned}
$$

For $\signal{\theta}=\pi$,

$$
e^{i\pi\sigma_x/2}=i\sigma_x=\begin{pmatrix}0&i\\i&0\end{pmatrix}.
$$

A half-turn exchanges $|\uparrow\rangle$ and $|\downarrow\rangle$, up to a phase.

For $\signal{\theta}=2\pi$,

$$
e^{i\pi\sigma_x}=\cos\pi\,\hat I+i\sin\pi\,\sigma_x=-\hat I.
$$

The spin-one-half state vector returns with the opposite sign after a full turn. This spinor behavior has no counterpart for an ordinary classical vector.

> [!note]
> A global minus sign leaves the isolated pure physical state unchanged. The vector itself returns exactly after a $4\pi$ rotation. A relative sign between differently transformed paths can affect interference. The example establishes the spin-one-half rotation property; half-integer-spin representations share the $2\pi$ sign change.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $1$ | Rotation angle | The angle parameter in the spin rotations, in radians. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the physical spin-rotation convention. |
