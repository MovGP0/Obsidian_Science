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

The rank–nullity proof counts independent information. Choose a basis of $\ker A$ and extend it to a basis of the input space. The images of the added vectors span $\operatorname{Im}A$. They are independent: a relation among those images would put their input combination in the kernel, contradicting independence of the extended input basis. The number of added vectors is therefore the rank.

For $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, the kernel and image both equal the span of $(1,0)^T$, so rank plus nullity is $1+1=2$. Its two eigenvalues are zero. Thus the later eigenvalue counting rule uses Hermiticity, or more generally diagonalizability; it is not valid for every matrix.

## Example — Rank of a projector

The projector $P_W$ onto a subspace $W$ of dimension $k$ has rank $k$. Vectors in $W$ are not annihilated. Vectors in $W^\perp$ are mapped to zero and form the kernel. Thus,

$$
\operatorname{rk}(P_W)=k,
\qquad\dim(\ker(P_W))=n-k.
$$

*Verification:* $k+(n-k)=n$. $\checkmark$
