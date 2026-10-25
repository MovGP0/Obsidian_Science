---
title: "Tensor product and the two-spin Ising coupling"
---

> [!TLDR]
> The Pauli tensor product assigns opposite signs to parallel and antiparallel spin pairs.

Chapter 6: Special Matrices · Exercise 8 · Intermediate level

Back to [[06 Special Matrices/11 Exercises|Chapter 6 exercises]].

## Question

The **tensor product**, or **Kronecker product**, of $A\in M_m$ and $B\in M_n$ is the matrix $A\otimes B\in M_{mn}$ with blocks $(A\otimes B)_{ij}=A_{ij}B$.

Calculate $\sigma_z\otimes\sigma_z$. Interpret it as the Hamiltonian operator of two spins coupled along the $z$ direction.

> [!note]
> The Pauli tensor product is dimensionless. A physical Hamiltonian interpretation also needs an energy scale, which the source does not specify.

## Worked solution

Use $\sigma_z=\operatorname{diag}(1,-1)$. The Kronecker product replaces each entry in the first matrix with that entry times the second matrix:

$$
\sigma_z\otimes\sigma_z
=\begin{pmatrix}
1\sigma_z&0\sigma_z\\
0\sigma_z&-1\sigma_z
\end{pmatrix}
=\begin{pmatrix}
1&0&0&0\\
0&-1&0&0\\
0&0&-1&0\\
0&0&0&1
\end{pmatrix}.
$$

Use the ordered basis

$$
\{|\uparrow\uparrow\rangle,
|\uparrow\downarrow\rangle,
|\downarrow\uparrow\rangle,
|\downarrow\downarrow\rangle\}.
$$

Each single-spin Pauli-z eigenvalue is $+1$ or $-1$. The tensor-product eigenvalue is their product. Parallel pairs therefore have eigenvalue $+1$, and antiparallel pairs have eigenvalue $-1$.

The matrix is dimensionless. Introduce a real coupling energy $\energy{J}$ to obtain a physical Hamiltonian:

$$
H=\energy{J}(\sigma_z\otimes\sigma_z).
$$

This is an Ising coupling along $z$. For the stated sign convention, the two parallel states have energy $\energy{E}_{\parallel}=\energy{J}$ and the two antiparallel states have energy $\energy{E}_{\mathrm{anti}}=-\energy{J}$. Thus $\energy{J}>0$ favors antiparallel alignment, while $\energy{J}<0$ favors parallel alignment. No numerical energy can be assigned without a value of $\energy{J}$.

## Answer

$$
\boxed{\sigma_z\otimes\sigma_z=\operatorname{diag}(1,-1,-1,1).}
$$

The physical Hamiltonian $H=\energy{J}\sigma_z\otimes\sigma_z$ describes a two-spin interaction along $z$, with energies $+\energy{J}$ for parallel pairs and $-\energy{J}$ for antiparallel pairs.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{J}$ | $\unit{J}$ | Coupling energy | The energy scale of the Ising interaction. |
| $\energy{E}_{\parallel}$, $\energy{E}_{\mathrm{anti}}$ | $\unit{J}$ | Pair energy | The energies of parallel and antiparallel spin pairs. |
