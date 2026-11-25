---
title: ℍ Quaternions
---

$$e = (1, i, j, k)$$
## Properties of i, j, k

The products below are quaternion products.

$$i j = k$$
$$i k = -j$$
$$i i = -1$$

$$j j = -1$$
$$j k = i$$
$$j i = -k$$

$$k j = -i$$
$$k k = -1$$
$$k i = j$$

$$i^2 = -1$$
$$j^2 = -1$$
$$k^2 = -1$$
## Pauli Matrices

Pauli matrices are 2x2 Hermitian matrices used in quantum mechanics to represent spin operators.

They square to the identity, $\sigma_a^2 = \sigma_0$, so they cannot replace i, j, k directly. The substitution $i \mapsto -i\sigma_1$, $j \mapsto -i\sigma_2$, $k \mapsto -i\sigma_3$ gives $i^2 = j^2 = k^2 = ijk = -1$.
$$\sigma_0 = \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}$$
$$\sigma_1 = \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}$$
$$\sigma_2 = \begin{pmatrix}
0 & -i \\
i & 0
\end{pmatrix}$$
$$\sigma_3 = \begin{pmatrix}
1 & 0 \\
0 & -1
\end{pmatrix}$$
