---
title: "Basis and Dimension"
---

> [!TLDR]
> A basis is a linearly independent set that spans the whole vector space. Every vector has unique coordinates in that basis.

> [!definition] Definition 4.5 — Basis
> A set $\mathcal{B}=\{e_1,\ldots,e_n\}$ is a **basis** of $V$ if:
>
> 1. $\mathcal{B}$ is linearly independent.
> 2. $\operatorname{span}(\mathcal{B})=V$: it spans the whole space.
>
> The **dimension** of $V$ is the number of elements in any basis.

A basic theorem, which we do not prove here, states that all bases of a finite-dimensional vector space have the same number of elements. Thus, dimension is well-defined.

Every vector $v\in V$ has a unique expansion in the basis:

$$
v=\sum_{i=1}^{n}c_ie_i.
$$

The coefficients $c_i$ are the **coordinates** of $v$ in the basis $\mathcal{B}$.

## Example — Coordinates in the standard basis of ℂ³

The standard basis is

$$
\{e_1=(1,0,0)^T,\ e_2=(0,1,0)^T,\ e_3=(0,0,1)^T\}.
$$

The vector $v=(3+\mathrm{i},-2,5\mathrm{i})^T$ has coordinates $c_1=3+\mathrm{i}$, $c_2=-2$, and $c_3=5\mathrm{i}$.

In quantum mechanics, if $\{|1\rangle,|2\rangle,|3\rangle\}$ is a basis of eigenstates and

$$
|\psi\rangle=\signal{\alpha}|1\rangle+\signal{\beta}|2\rangle+\signal{\gamma}|3\rangle,
$$

the coordinates are $\signal{\alpha}$, $\signal{\beta}$, and $\signal{\gamma}$. Normalization gives

$$
|\signal{\alpha}|^2+|\signal{\beta}|^2+|\signal{\gamma}|^2=1.
$$

> [!note]
> This sum-of-squares normalization assumes an **orthonormal** eigenbasis. For a general basis, the inner products between the basis vectors also enter the norm.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\alpha},\signal{\beta},\signal{\gamma}$ | $1$ | Probability amplitudes | The state coordinates in the three-state orthonormal eigenbasis. |
