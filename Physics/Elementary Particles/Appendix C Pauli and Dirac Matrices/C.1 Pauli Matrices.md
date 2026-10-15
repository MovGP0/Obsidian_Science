---
title: "C.1 Pauli Matrices"
---

> [!TLDR]
> Pauli matrices obey product, commutator, and exponential identities.

<!-- PDF page 386; printed page 378 -->

These are three Hermitian, unitary, traceless $2\times2$ matrices:

$$
\sigma_x\equiv\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y\equiv\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
\sigma_z\equiv\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\tag{C.1}
$$

(Often we use *numerical* indices: $\sigma_1=\sigma_x$, $\sigma_2=\sigma_y$, $\sigma_3=\sigma_z$; $\boldsymbol{\sigma}$ is not part of a 4-vector, and we do not distinguish upper and lower indices: $\sigma_1=\sigma^1$, $\sigma_2=\sigma^2$, $\sigma_3=\sigma^3$.)

(a) *Product Rules.*

$$
\sigma_i\sigma_j=\delta_{ij}+i\epsilon_{ijk}\sigma_k
\tag{C.2}
$$

(A $2\times2$ unit matrix is implied in the first term, and summation over $k$ in the second). Thus, in particular:

$$
\sigma_x^2=\sigma_y^2=\sigma_z^2=1
\tag{C.3}
$$

$$
\sigma_x\sigma_y=i\sigma_z,\qquad
\sigma_y\sigma_z=i\sigma_x,\qquad
\sigma_z\sigma_x=i\sigma_y
\tag{C.4}
$$

$$
[\sigma_i,\sigma_j]=2i\epsilon_{ijk}\sigma_k
\qquad\text{(commutator)}
\tag{C.5}
$$

$$
\{\sigma_i,\sigma_j\}=2\delta_{ij}
\qquad\text{(anticommutator)}
\tag{C.6}
$$

and for any two vectors $\mathbf a$ and $\mathbf b$,

$$
(\mathbf a\cdot\boldsymbol{\sigma})(\mathbf b\cdot\boldsymbol{\sigma})
=\mathbf a\cdot\mathbf b+i\boldsymbol{\sigma}\cdot(\mathbf a\times\mathbf b)
\tag{C.7}
$$

(b) *Exponentials.*

$$
e^{i\boldsymbol{\theta}\cdot\boldsymbol{\sigma}}
=\cos\theta+i\hat{\boldsymbol{\theta}}\cdot\boldsymbol{\sigma}\sin\theta
\tag{C.8}
$$
