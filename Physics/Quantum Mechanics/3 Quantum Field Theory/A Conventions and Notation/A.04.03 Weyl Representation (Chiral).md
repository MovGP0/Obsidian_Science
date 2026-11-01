---
title: "Weyl Representation (Chiral)"
---

> [!TLDR]
> In the Weyl representation, the chirality matrix is diagonal and the gamma matrices have off-diagonal two-component blocks.

In this representation, $\gamma^5$ is diagonal:
$$
\gamma^0=
\begin{pmatrix}
0&\mathbf1_2\\
\mathbf1_2&0
\end{pmatrix},
\qquad
\gamma^i=
\begin{pmatrix}
0&\sigma^i\\
-\sigma^i&0
\end{pmatrix}.
\tag{A.14}
$$
With
$$
\sigma^\mu=(\mathbf1_2,\boldsymbol\sigma),
\qquad
\bar\sigma^\mu=(\mathbf1_2,-\boldsymbol\sigma),
$$
the same matrices are
$$
\gamma^\mu=
\begin{pmatrix}
0&\sigma^\mu\\
\bar\sigma^\mu&0
\end{pmatrix}.
\tag{A.15}
$$

The bar on $\bar\sigma^\mu$ is part of this matrix notation; it is not a Dirac adjoint of a spinor. When contracting with a lower-index vector, include the metric signs as usual. The off-diagonal form makes the two coupled two-component equations visible, which is useful for studying massless fields and chiral interactions.

Multiplication of the four gamma matrices in the stated order gives the diagonal chirality matrix in [[A.04.04 The Matrix γ⁵]]. Its upper two entries have eigenvalue minus one and its lower two entries have eigenvalue plus one. Thus the upper two components are left-chiral in this convention. Do not transfer a component ordering from another representation without also transforming the spinor and projectors.
