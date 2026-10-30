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
