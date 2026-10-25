---
title: "Rank, Kernel and Image"
---

> [!TLDR]
> The kernel contains vectors mapped to zero, and the image contains all output vectors. Rank is the image dimension, and rank plus nullity equals the input dimension.

> [!definition] Definition 6.2 — Rank, kernel, and image
> For $A\in M_{m\times n}(\mathbb{C})$:
>
> - The **kernel** is $\ker(A)=\{v\in\mathbb{C}^n:Av=0\}$.
> - The **image** is $\operatorname{Im}(A)=\{Av:v\in\mathbb{C}^n\}\subseteq\mathbb{C}^m$.
> - The **rank** is $\operatorname{rk}(A)=\dim(\operatorname{Im}(A))$.

> [!theorem] Theorem 6.3 — Rank–nullity theorem
> $$
> \operatorname{rk}(A)+\dim(\ker(A))=n.
> $$

In quantum mechanics, suppose $\hat A$ is a Hermitian operator on $\mathbb{C}^n$ with some zero eigenvalues. Its eigenvectors for eigenvalue zero, together with the zero vector, form the kernel. Its rank is the number of nonzero eigenvalues, counted with multiplicity.

## Example — Rank of a projector

The projector $P_W$ onto a subspace $W$ of dimension $k$ has rank $k$. Vectors in $W$ are not annihilated. Vectors in $W^\perp$ are mapped to zero and form the kernel. Thus,

$$
\operatorname{rk}(P_W)=k,
\qquad\dim(\ker(P_W))=n-k.
$$

*Verification:* $k+(n-k)=n$. $\checkmark$
