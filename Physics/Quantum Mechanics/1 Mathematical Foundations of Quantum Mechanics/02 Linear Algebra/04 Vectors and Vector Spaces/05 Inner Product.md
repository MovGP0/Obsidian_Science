---
title: "Inner Product"
---

> [!TLDR]
> An inner product adds geometry to a vector space. Over the complex numbers, it has Hermitian symmetry, is linear in its second argument, and defines a norm.

A vector space is an algebraic structure. To describe geometry, including angles, lengths, and projections, we must add an **inner product**.

> [!definition] Definition 4.6 — Inner-product space
> An **inner-product space over $\mathbb{C}$** is a vector space $V$ with a map $\langle\cdot,\cdot\rangle:V\times V\to\mathbb{C}$ that satisfies:
>
> 1. $\langle u,v\rangle=\langle v,u\rangle^*$. **Hermitian symmetry.**
> 2. $\langle u,\alpha v+\beta w\rangle=\alpha\langle u,v\rangle+\beta\langle u,w\rangle$. **Linearity in the second argument.**
> 3. $\langle v,v\rangle\ge0$, with $\langle v,v\rangle=0\Longleftrightarrow v=0$. **Positive definiteness.**
>
> The norm is $\|v\|=\sqrt{\langle v,v\rangle}$.

On $\mathbb{C}^n$,

$$
\langle u,v\rangle=\sum_{i=1}^{n}u_i^*v_i=u^\dagger v.
$$

On $L^2(\mathbb{R})$,

$$
\langle f,g\rangle=\int_{-\infty}^{+\infty}f^*(x)g(x)\,\mathrm{d}x.
$$

The conjugation is required for a positive length. For $v=(\mathrm{i},0)^T$, the standard product gives $\langle v,v\rangle=(-\mathrm{i})\mathrm{i}=1$; omitting conjugation would give $-1$. Hermitian symmetry also implies $\langle \alpha u,v\rangle=\alpha^*\langle u,v\rangle$. Thus the two arguments have different scalar rules.

For normalized quantum state vectors, this inner product gives an overlap amplitude. Normalization and probability interpretation are additional physical requirements; the inner-product axioms alone are mathematical statements. On $L^2$, functions are identified when they agree almost everywhere, so positive definiteness refers to those equivalence classes.

## Example — Inner product in ℂ²

Let $u=(1+\mathrm{i},2)^T$ and $v=(3,\mathrm{i})^T$.

$$
\begin{aligned}
\langle u,v\rangle
&=(1+\mathrm{i})^*\cdot3+2^*\cdot\mathrm{i}\\
&=(1-\mathrm{i})\cdot3+2\mathrm{i}\\
&=3-3\mathrm{i}+2\mathrm{i}=3-\mathrm{i}.
\end{aligned}
$$

$$
\begin{aligned}
\langle v,u\rangle
&=3^*(1+\mathrm{i})+\mathrm{i}^*\cdot2\\
&=3(1+\mathrm{i})+(-\mathrm{i})\cdot2\\
&=3+3\mathrm{i}-2\mathrm{i}=3+\mathrm{i}.
\end{aligned}
$$

Verify Hermitian symmetry:

$$
\langle v,u\rangle^*=(3+\mathrm{i})^*=3-\mathrm{i}=\langle u,v\rangle.\quad\checkmark
$$
