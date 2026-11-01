---
title: "Dirac–Pauli Representation"
---

> [!TLDR]
> In the Dirac–Pauli representation, the time gamma matrix is block diagonal and the spatial gamma matrices contain Pauli-matrix blocks.

In this representation, $\gamma^0$ is block diagonal:
$$
\gamma^0=
\begin{pmatrix}
\mathbf1_2&0\\
0&-\mathbf1_2
\end{pmatrix},
\qquad
\gamma^i=
\begin{pmatrix}
0&\sigma^i\\
-\sigma^i&0
\end{pmatrix},
\qquad i=1,2,3.
\tag{A.12}
$$
The Pauli matrices are
$$
\sigma^1=
\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\sigma^2=
\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\qquad
\sigma^3=
\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\tag{A.13}
$$
They satisfy
$$
\sigma^i\sigma^j
=\delta^{ij}\mathbf1_2+i\epsilon^{ijk}\sigma^k.
$$

The block form is useful near the rest frame because the eigenvalues of the time gamma matrix separate the upper and lower two-component subspaces. The Pauli matrices act inside these two-component blocks; they are not the same objects as the four-component spin tensor with two Lorentz indices.

As a matrix check, each Pauli matrix squares to the two-dimensional identity. Squaring a spatial gamma matrix therefore gives minus the four-dimensional identity, while squaring the time gamma matrix gives plus the identity. Multiplying a temporal and a spatial gamma matrix in both orders gives opposite results. These checks recover the diagonal metric signs and the mixed anticommutators in [[A.04.01 Clifford Algebra]] without assuming a particular spin state.
