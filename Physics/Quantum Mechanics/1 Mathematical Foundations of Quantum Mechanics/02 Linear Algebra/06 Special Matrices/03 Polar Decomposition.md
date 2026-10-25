---
title: "Polar Decomposition"
---

> [!TLDR]
> Polar decomposition separates an invertible matrix into a unitary factor and a positive-definite factor. A unitary quantum propagator has no positive stretching factor beyond the identity.

> [!theorem] Theorem 6.2 — Polar decomposition
> Every invertible matrix $A\in M_n(\mathbb{C})$ has a unique decomposition
>
> $$
> A=UP,
> $$
>
> where $U$ is unitary and $P=\sqrt{A^\dagger A}$ is Hermitian and positive definite.

The analogy with complex numbers is exact. In the polar form $z=r\mathrm{e}^{\mathrm{i}\theta}$, the factor $\mathrm{e}^{\mathrm{i}\theta}$ is unitary, with absolute value $1$, and $r$ is positive and real. For matrices, $U$ is the rotation factor and $P$ is the stretching factor.

In general, $U$ and $P$ do not commute. The order matters: $A=UP$ and the left polar form give different factorizations.

> [!note]
> The left polar form is $A=QU$, where $Q=UPU^\dagger$. In general, $Q$ differs from $P$; do not move the same two factors past each other. The theorem above assumes invertibility, as the source states.

## Application in quantum mechanics

The time-evolution operator

$$
\hat U(\signal{t})=\mathrm{e}^{-\mathrm{i}\hat H\signal{t}/\energy{\hbar}}
$$

is unitary. It is the unitary factor in the polar decomposition of the propagator. There is no stretching factor beyond $P=I$. This expresses conservation of the norm.

> [!note]
> The displayed exponential assumes a time-independent self-adjoint Hamiltonian. For a time-dependent Hamiltonian, use the appropriate unitary propagator rather than this simple exponential in general.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The evolution time in the propagator. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the evolution phase. |
