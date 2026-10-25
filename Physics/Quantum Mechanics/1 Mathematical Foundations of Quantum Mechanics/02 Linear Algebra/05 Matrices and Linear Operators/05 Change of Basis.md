---
title: "Change of Basis"
---

> [!TLDR]
> A unitary matrix relates two orthonormal bases. The same operator has matrix $A'=U^\dagger AU$ in the new basis, with unchanged trace and determinant.

Let $\{e_j\}$ and $\{f_j\}$ be two orthonormal bases. The columns of the basis-change matrix $U$ are the vectors $f_j$ expressed in the basis $\{e_j\}$:

$$
U_{ij}=\langle e_i,f_j\rangle.
$$

The matrix $U$ is unitary. The matrix of $\hat A$ in the new basis is

$$
A'=U^\dagger AU.
$$

This is a **unitary transformation** of $A$. Trace and determinant are invariant under unitary transformations.

## Example — Matrix of σ_z in the eigenbasis of σ_x

The eigenstates of $\sigma_x$ are

$$
|+\rangle=\frac1{\sqrt2}(1,1)^T,
\qquad|-\rangle=\frac1{\sqrt2}(1,-1)^T.
$$

The basis-change matrix is the Hadamard gate:

$$
U=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}=H.
$$

In the basis $\{|+\rangle,|-\rangle\}$,

$$
\begin{aligned}
\sigma_z'
&=H^\dagger\sigma_zH\\
&=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}\\
&=\begin{pmatrix}0&1\\1&0\end{pmatrix}=\sigma_x.
\end{aligned}
$$

In the eigenbasis of $\sigma_x$, the matrix of $\sigma_z$ has the same form as $\sigma_x$ in the standard basis. This agrees with the Bloch-sphere rotation implemented by $H$, which exchanges the $x$ and $z$ axes.
