---
title: "Unitary Matrices"
---

> [!TLDR]
> A unitary matrix preserves inner products and norms, and its inverse equals its adjoint. The Hadamard matrix is a unitary change between two spin bases.

> [!definition] Definition 5.3 — Unitary matrix
> A matrix $U$ is **unitary** if $U^\dagger U=UU^\dagger=I$. Thus, $U^{-1}=U^\dagger$.

Unitary matrices preserve the inner product:

$$
\langle Uu,Uv\rangle
=\langle u,U^\dagger Uv\rangle
=\langle u,v\rangle.
$$

In particular, $\|Uv\|=\|v\|$. Unitary matrices are isometries.

The converse follows by testing basis vectors: if a square matrix preserves all inner products, then $e_i^\dagger(U^\dagger U-I)e_j=0$ for every pair $i,j$, so every entry of $U^\dagger U-I$ is zero. In finite equal dimensions, this also implies invertibility and $UU^\dagger=I$. An isometric embedding into a larger space need not be onto, so it does not have this two-sided inverse.

In quantum calculations, norm preservation keeps normalized state vectors normalized. A unitary matrix can describe either an active operation on a state or a passive coordinate change; the interpretation must be specified.

## Example — The Hadamard matrix

The **Hadamard matrix**, or **Hadamard gate** in quantum computing, is

$$
H=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
$$

### Verification of unitarity

$$
\begin{aligned}
H^\dagger H
&=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}
\begin{pmatrix}1&1\\1&-1\end{pmatrix}\\
&=\frac12\begin{pmatrix}2&0\\0&2\end{pmatrix}
=I.\quad\checkmark
\end{aligned}
$$

Also, $H=H^\dagger$, so it is Hermitian, and $H^2=I$. Applying the Hadamard gate twice returns the initial state.

### Action on the up and down states

$$
H|\uparrow\rangle
=\frac1{\sqrt2}\bigl(|\uparrow\rangle+|\downarrow\rangle\bigr)=|+\rangle,
$$

$$
H|\downarrow\rangle
=\frac1{\sqrt2}\bigl(|\uparrow\rangle-|\downarrow\rangle\bigr)=|-\rangle.
$$

The Hadamard gate transforms the computational basis $\{|\uparrow\rangle,|\downarrow\rangle\}$ into the Fourier basis $\{|+\rangle,|-\rangle\}$.
