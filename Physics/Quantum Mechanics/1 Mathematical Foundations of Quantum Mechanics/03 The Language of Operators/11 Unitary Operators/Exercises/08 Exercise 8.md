---
title: "Spin-one-half generators of SU(2)"
---

> [!TLDR]
> Pauli matrices give the angular-momentum commutators, ladder operators, and total spin for spin one half.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 8. Difficulty: **Challenge**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 8|Chapter 11 exercise index]].

## Question

For spin one half, the generators are

$$
\hat J_i=\frac{\mechanical{\hbar}}2\sigma_i.
$$

**(a)** Verify

$$
[\hat J_i,\hat J_j]=i\mechanical{\hbar}\sum_k\epsilon_{ijk}\hat J_k.
$$

**(b)** Construct $\hat J_\pm=\hat J_x\pm i\hat J_y$. Calculate $[\hat J_+,\hat J_-]$ and $[\hat J_z,\hat J_\pm]$.

**(c)** Show that

$$
\hat J^2=\hat J_x^2+\hat J_y^2+\hat J_z^2
=\frac{3\mechanical{\hbar}^2}4\hat I.
$$

## Worked solution

### (a) Angular-momentum commutators

Use the explicit Pauli matrices

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\qquad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Matrix multiplication gives $\sigma_x\sigma_y=i\sigma_z$ and $\sigma_y\sigma_x=-i\sigma_z$, so $[\sigma_x,\sigma_y]=2i\sigma_z$. The cyclic products give $[\sigma_y,\sigma_z]=2i\sigma_x$ and $[\sigma_z,\sigma_x]=2i\sigma_y$. The reversed products have opposite signs and identical indices give zero. These cases combine as

$$
[\sigma_i,\sigma_j]=2i\sum_k\epsilon_{ijk}\sigma_k.
$$

Multiply by the two factors from the generators:

$$
\begin{aligned}
[\hat J_i,\hat J_j]
&=\frac{\mechanical{\hbar}^2}{4}[\sigma_i,\sigma_j]\\
&=\frac{i\mechanical{\hbar}^2}{2}\sum_k\epsilon_{ijk}\sigma_k
=i\mechanical{\hbar}\sum_k\epsilon_{ijk}\hat J_k.
\end{aligned}
$$

### (b) Ladder matrices and their commutators

Construct the matrices before calculating the commutators:

$$
\begin{aligned}
\hat J_+&=\frac{\mechanical{\hbar}}2(\sigma_x+i\sigma_y)
=\mechanical{\hbar}\begin{pmatrix}0&1\\0&0\end{pmatrix},\\
\hat J_-&=\frac{\mechanical{\hbar}}2(\sigma_x-i\sigma_y)
=\mechanical{\hbar}\begin{pmatrix}0&0\\1&0\end{pmatrix}.
\end{aligned}
$$

Thus $\hat J_+|\downarrow\rangle=\mechanical{\hbar}|\uparrow\rangle$, $\hat J_-|\uparrow\rangle=\mechanical{\hbar}|\downarrow\rangle$, and the other two ladder actions vanish. The products are

$$
\hat J_+\hat J_-=\mechanical{\hbar}^2\begin{pmatrix}1&0\\0&0\end{pmatrix},
\qquad
\hat J_-\hat J_+=\mechanical{\hbar}^2\begin{pmatrix}0&0\\0&1\end{pmatrix}.
$$

Subtract them:

$$
[\hat J_+,\hat J_-]=\mechanical{\hbar}^2\begin{pmatrix}1&0\\0&-1\end{pmatrix}
=2\mechanical{\hbar}\hat J_z.
$$

For the remaining commutators, linearity and part (a) give

$$
\begin{aligned}
[\hat J_z,\hat J_+]
&=[\hat J_z,\hat J_x]+i[\hat J_z,\hat J_y]
=i\mechanical{\hbar}\hat J_y+i(-i\mechanical{\hbar}\hat J_x)
=\mechanical{\hbar}\hat J_+,\\
[\hat J_z,\hat J_-]
&=[\hat J_z,\hat J_x]-i[\hat J_z,\hat J_y]
=i\mechanical{\hbar}\hat J_y-i(-i\mechanical{\hbar}\hat J_x)
=-\mechanical{\hbar}\hat J_-.
\end{aligned}
$$

These relations explain the names: a nonzero ladder action raises or lowers the z-component eigenvalue by one reduced Planck constant.

### (c) Total angular momentum

Each Pauli matrix squares to the identity. Therefore

$$
\begin{aligned}
\hat J^2
&=\frac{\mechanical{\hbar}^2}{4}(\sigma_x^2+\sigma_y^2+\sigma_z^2)\\
&=\frac{\mechanical{\hbar}^2}{4}(\hat I+\hat I+\hat I)
=\frac{3\mechanical{\hbar}^2}{4}\hat I.
\end{aligned}
$$

The value agrees with the general eigenvalue $j(j+1)\mechanical{\hbar}^2$ for $j=1/2$. The same total-spin value holds for both z-basis states and every superposition of them. The generators do not commute, in contrast with the spatial translations in Exercise 2.

## Answer

**(a)** $[\hat J_i,\hat J_j]=i\mechanical{\hbar}\sum_k\epsilon_{ijk}\hat J_k$.

**(b)** $\hat J_+=\mechanical{\hbar}\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $\hat J_-=\mechanical{\hbar}\begin{pmatrix}0&0\\1&0\end{pmatrix}$, $[\hat J_+,\hat J_-]=2\mechanical{\hbar}\hat J_z$, and $[\hat J_z,\hat J_\pm]=\pm\mechanical{\hbar}\hat J_\pm$.

**(c)** $\hat J^2=3\mechanical{\hbar}^2\hat I/4$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of spin and angular-momentum eigenvalues. |
