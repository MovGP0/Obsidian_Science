---
title: "Linear Operators and Matrices"
---

> [!TLDR]
> A linear operator preserves sums and scalar multiples. In an orthonormal basis, its matrix entries are inner products with the images of the basis vectors.

> [!definition] Definition 5.1 — Linear operator
> A map $\hat A:V\to V$ is **linear** if
>
> $$
> \hat A(\alpha u+\beta v)=\alpha\hat A u+\beta\hat A v
> $$
>
> for every $\alpha,\beta\in\mathbb{C}$ and $u,v\in V$.

With respect to an orthonormal basis $\{e_j\}_{j=1}^{n}$ of $\mathbb{C}^n$, the **representing matrix** of $\hat A$ has entries

$$
A_{ij}=\langle e_i,\hat A e_j\rangle.
$$

The $j$th column of $A$ is the image of the $j$th basis vector, expressed in the coordinates of that basis.

## Example — Matrix of a map

Let $\hat A:\mathbb{C}^2\to\mathbb{C}^2$ be defined by

$$
\hat A(z_1,z_2)^T=(z_1+2z_2,3z_1-z_2)^T.
$$

Apply $\hat A$ to the standard basis:

$$
\hat A e_1=\hat A(1,0)^T=(1,3)^T,
\qquad\hat A e_2=\hat A(0,1)^T=(2,-1)^T.
$$

These images become the columns of the matrix:

$$
A=\begin{pmatrix}1&2\\3&-1\end{pmatrix}.
$$

*Verification:*

$$
A(z_1,z_2)^T=(z_1+2z_2,3z_1-z_2)^T.\quad\checkmark
$$
