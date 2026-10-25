---
title: "Properties of Hermitian Operators"
---

> [!TLDR]
> A Hermitian operator has real eigenvalues. Eigenvectors with distinct eigenvalues are orthogonal; within a degenerate eigenspace, you can choose an orthonormal basis.

> [!theorem] Theorem 7.1 | Real eigenvalues
> If $\hat A$ is Hermitian, so that $\hat A^\dagger=\hat A$, all its eigenvalues are real.

**Proof.** Let $\hat A v=\lambda v$ with $v\ne0$. Calculate $\langle v,\hat A v\rangle$ in two ways.

First, use linearity in the second argument:

$$
\langle v,\hat A v\rangle
=\langle v,\lambda v\rangle
=\lambda\langle v,v\rangle.
$$

Second, use Hermiticity and antilinearity in the first argument:

$$
\langle v,\hat A v\rangle
=\langle\hat A v,v\rangle
=\langle\lambda v,v\rangle
=\lambda^*\langle v,v\rangle.
$$

Since $\langle v,v\rangle>0$, we have $\lambda=\lambda^*$. Thus $\lambda\in\mathbb R$. $\square$

> [!theorem] Theorem 7.2 | Orthogonality of eigenvectors
> Eigenvectors of a Hermitian operator with **distinct eigenvalues** are orthogonal.

**Proof.** Let $\hat A u=\lambda u$ and $\hat A v=\mu v$, where $\lambda\ne\mu$. Then

$$
\lambda^*\langle u,v\rangle
=\langle\hat A u,v\rangle
=\langle u,\hat A v\rangle
=\mu\langle u,v\rangle.
$$

Hermiticity gives the middle equality. Theorem 7.1 gives $\lambda^*=\lambda$. Since $\lambda\ne\mu$, it follows that $\langle u,v\rangle=0$. $\square$

> [!note]
> An eigenvalue is **degenerate** if its eigenspace has more than one independent eigenvector. These eigenvectors are not automatically orthogonal. Apply Gram–Schmidt within the eigenspace to obtain an orthonormal basis of eigenvectors. Each linear combination remains in the same eigenspace.
