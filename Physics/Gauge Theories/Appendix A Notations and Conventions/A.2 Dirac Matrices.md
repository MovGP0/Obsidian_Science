---
title: "A.2 Dirac Matrices"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "434"
pdf_page: 448
bead: "Obsidian_Electronics-l4vx.101"
---

> [!TLDR]
> The source defines Dirac and Pauli matrices, their algebra, the spin tensor, the chirality matrix, and slash notation.

<!-- PDF page 448; printed page 434 -->

The Dirac $\gamma$-matrices satisfy the anticommutation relations

$$
\{\gamma^\mu,\gamma^\nu\}\equiv
\gamma^\mu\gamma^\nu+\gamma^\nu\gamma^\mu=2g^{\mu\nu}, \tag{A.2.1}
$$

so that

$$
\gamma^\mu\gamma_\mu=4\cdot\mathbb{I}, \tag{A.2.2}
$$

where $\mathbb{I}$ is the $4\times4$ identity matrix. In contexts in which the matrix character of $\mathbb{I}$ is obvious, it will be convenient simply to write 1. Other useful identities follow at once from the commutation relations:

$$
[\gamma^\mu\gamma^\nu,\gamma^\rho]
\equiv\gamma^\mu\gamma^\nu\gamma^\rho-\gamma^\rho\gamma^\mu\gamma^\nu
=2(\gamma^\mu g^{\nu\rho}-\gamma^\nu g^{\mu\rho}); \tag{A.2.3}
$$

$$
\gamma^\mu\gamma_\nu\gamma_\mu=-2\gamma_\nu; \tag{A.2.4}
$$

$$
\gamma^\mu\gamma_\nu\gamma_\rho\gamma_\mu=4g_{\nu\rho}; \tag{A.2.5}
$$

$$
\gamma^\mu\gamma_\nu\gamma_\rho\gamma_\sigma\gamma_\mu
=-2\gamma_\sigma\gamma_\rho\gamma_\nu; \tag{A.2.6}
$$

$$
\gamma^\mu\gamma_\nu\gamma_\rho\gamma_\sigma\gamma_\tau\gamma_\mu
=2(\gamma_\tau\gamma_\nu\gamma_\rho\gamma_\sigma+
\gamma_\sigma\gamma_\rho\gamma_\nu\gamma_\tau). \tag{A.2.7}
$$

When an explicit representation is required, we shall adopt

$$
\gamma^0=\begin{pmatrix}I&0\\0&-I\end{pmatrix},
\quad
\boldsymbol{\gamma}=\begin{pmatrix}0&\boldsymbol{\sigma}\\-\boldsymbol{\sigma}&0\end{pmatrix},
\tag{A.2.8}
$$

where $I$ is the $2\times2$ identity matrix and the $2\times2$ Pauli matrices are given by

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix};
\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix};
\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}. \tag{A.2.9}
$$

<!-- PDF page 449; printed page 435 -->

The Pauli matrices satisfy commutation and anticommutation relations,

$$
[\sigma_i,\sigma_j]=2i\varepsilon^{ijk}\sigma_k, \tag{A.2.10}
$$

$$
\{\sigma_i,\sigma_j\}=2\delta_{ij}I, \tag{A.2.11}
$$

where the antisymmetric three-index symbol takes the values

$$
\varepsilon^{ijk}=
\begin{cases}
+1,&\text{for even permutations of 123,}\\
-1,&\text{for odd permutations,}\\
0,&\text{otherwise.}
\end{cases} \tag{A.2.12}
$$

Summing (A.2.10) and (A.2.11) leads to the useful identity,

$$
\boldsymbol{\sigma}\cdot\mathbf{a}\,
\boldsymbol{\sigma}\cdot\mathbf{b}
=\mathbf{a}\cdot\mathbf{b}
+i\boldsymbol{\sigma}\cdot\mathbf{a}\times\mathbf{b}, \tag{A.2.13}
$$

The spin tensor is

$$
\sigma^{\mu\nu}=(i/2)[\gamma^\mu,\gamma^\nu]
\equiv i(\gamma^\mu\gamma^\nu-g^{\mu\nu}), \tag{A.2.14}
$$

for which

$$
[\sigma^{\mu\nu},\gamma^\rho]
=2i(\gamma^\mu g^{\nu\rho}-\gamma^\nu g^{\mu\rho}). \tag{A.2.15}
$$

In the standard representation, the spin tensor has components (Latin indices run over 1, 2, 3)

$$
\sigma^{ij}=\varepsilon^{ijk}
\begin{pmatrix}\sigma^k&0\\0&\sigma^k\end{pmatrix}, \tag{A.2.16}
$$

with

$$
\sigma^{0j}=\begin{pmatrix}0&i\sigma^j\\i\sigma^j&0\end{pmatrix}. \tag{A.2.17}
$$

The remaining important combination is

$$
\begin{aligned}
\gamma^5&\equiv i\gamma^0\gamma^1\gamma^2\gamma^3
=-i\gamma_0\gamma_1\gamma_2\gamma_3\equiv\gamma_5\\
&=(i/4!)\varepsilon_{\mu\nu\rho\sigma}
\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma\\
&=(i/4!)\varepsilon^{\mu\nu\rho\sigma}
\gamma_\mu\gamma_\nu\gamma_\rho\gamma_\sigma,
\end{aligned} \tag{A.2.18}
$$

where the Levi-Cività tensor is defined as

$$
\varepsilon_{\mu\nu\rho\sigma}=
\begin{cases}
+1,&\text{for even permutations of 0123,}\\
-1,&\text{for odd permutations,}\\
0,&\text{otherwise,}
\end{cases} \tag{A.2.19}
$$

<!-- PDF page 450; printed page 436 -->

and $\varepsilon^{\mu\nu\rho\sigma}=-\varepsilon_{\mu\nu\rho\sigma}$. Evidently

$$
(\gamma^5)^2=\mathbb{I} \tag{A.2.20}
$$

and

$$
\{\gamma^5,\gamma^\mu\}=0. \tag{A.2.21}
$$

It follows from the definition (A.2.18) that

$$
\gamma^5\gamma^\sigma=(i/3!)\varepsilon^{\mu\nu\rho\sigma}
\gamma_\mu\gamma_\nu\gamma_\rho. \tag{A.2.22}
$$

In the standard representation,

$$
\gamma_5=\begin{pmatrix}0&I\\I&0\end{pmatrix}. \tag{A.2.23}
$$

The frequently encountered scalar product of a four-vector and a $\gamma$-matrix is denoted by

$$
\gamma\cdot a\equiv\gamma_\mu a^\mu
\equiv\not{a}=\gamma^0a^0-\boldsymbol{\gamma}\cdot\mathbf{a}, \tag{A.2.24}
$$

so that, in particular,

$$
\gamma\cdot\mathsf{p}\equiv i\gamma\cdot\partial
=i\gamma_\mu\partial^\mu=i\not{\partial}. \tag{A.2.25}
$$
