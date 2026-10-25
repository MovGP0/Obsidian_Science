---
title: "Subspaces"
---

> [!TLDR]
> A subspace contains the zero vector and is closed under addition and scalar multiplication. It inherits the vector-space operations of its parent space.

> [!definition] Definition 4.2 — Subspace
> A subset $W\subseteq V$ is a **subspace** of $V$ if:
>
> 1. $0\in W$.
> 2. $u,v\in W\Longrightarrow u+v\in W$.
> 3. $v\in W$, $\alpha\in\mathbb{C}\Longrightarrow\alpha v\in W$.

A subspace is itself a vector space with the operations inherited from $V$.

## Example — Subspaces of ℂ³

- $W_1=\{(z_1,z_2,0):z_1,z_2\in\mathbb{C}\}$, the plane $z_3=0$, is a subspace. The sum of two vectors with zero third component also has zero third component. The same holds for a scalar multiple, and the zero vector belongs to $W_1$.
- $W_2=\{(1,z,0):z\in\mathbb{C}\}$ is **not** a subspace. It does not contain the zero vector $0=(0,0,0)$.
- The eigenvectors of a matrix for one fixed eigenvalue, together with the origin, form a subspace. It is called an **eigenspace**.
