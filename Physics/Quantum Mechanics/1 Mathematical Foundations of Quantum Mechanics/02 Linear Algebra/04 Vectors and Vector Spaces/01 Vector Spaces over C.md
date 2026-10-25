---
title: "Vector Spaces over ℂ"
---

> [!TLDR]
> A complex vector space is closed under addition and complex scalar multiplication. Eight axioms specify the rules of these operations.

> [!definition] Definition 4.1 — Vector space
> A **vector space over $\mathbb{C}$** is a set $V$ with two operations:
>
> - **Addition:** $V\times V\to V$, $(u,v)\mapsto u+v$.
> - **Scalar multiplication:** $\mathbb{C}\times V\to V$, $(\alpha,v)\mapsto\alpha v$.
>
> For every $u,v,w\in V$ and $\alpha,\beta\in\mathbb{C}$, the operations satisfy eight axioms:
>
> 1. $u+v=v+u$. **Commutativity of addition.**
> 2. $(u+v)+w=u+(v+w)$. **Associativity.**
> 3. There is $0\in V$ such that $v+0=v$ for every $v\in V$. **Neutral element.**
> 4. For every $v\in V$, there is $-v\in V$ such that $v+(-v)=0$. **Inverse element.**
> 5. $1\cdot v=v$. **Scalar identity.**
> 6. $\alpha(\beta v)=(\alpha\beta)v$. **Compatibility.**
> 7. $\alpha(u+v)=\alpha u+\alpha v$. **Distributivity over vector addition.**
> 8. $(\alpha+\beta)v=\alpha v+\beta v$. **Distributivity over scalar addition.**

An explicit list of the axioms helps us see which rules are assumed. For example, $\alpha\beta v=\beta\alpha v$ is not a separate axiom. It follows from commutativity in $\mathbb{C}$ and compatibility of scalar multiplication.

## Basic examples

- $\mathbb{C}^n$: the $n$-tuples $(z_1,\ldots,z_n)$ with $z_i\in\mathbb{C}$. Addition and scalar multiplication act component by component.
- $L^2(\mathbb{R})$: functions $f:\mathbb{R}\to\mathbb{C}$ with $\int|f|^2<\infty$. Addition is pointwise: $(f+g)(x)=f(x)+g(x)$.
- $\mathcal{P}_n(\mathbb{C})$: polynomials of degree at most $n$ with complex coefficients.
- $M_{n\times n}(\mathbb{C})$: $n\times n$ matrices with complex entries.

> [!note]
> More precisely, $L^2(\mathbb{R})$ consists of equivalence classes of measurable square-integrable functions. Functions that agree almost everywhere represent the same vector. The abbreviated integral above is over the real line with respect to $x$.

> [!note]
> Quantum mechanics works almost exclusively over $\mathbb{C}$ rather than $\mathbb{R}$. Wavefunctions are complex, so complex vector spaces provide the required structure. The corresponding vector-space statements in this chapter also apply over $\mathbb{R}$ when the scalar field is changed consistently.
