---
title: "C.2 Dirac Matrices"
---

> [!TLDR]
> Dirac matrices obey Clifford-algebra product rules and trace identities.

<!-- PDF page 387; printed page 379 -->

These are four unitary traceless $4\times4$ matrices:

$$
\gamma^0\equiv\begin{pmatrix}1&0\\0&1\end{pmatrix};\qquad
\gamma^i\equiv\begin{pmatrix}0&\sigma^i\\-\sigma^i&0\end{pmatrix}
\tag{C.9}
$$

(Here 1 is the $2\times2$ unit matrix, and 0 is the $2\times2$ matrix of zeros; $\sigma^i$ are the Pauli matrices. Lowering indices changes the sign of the “spatial” components: $\gamma_0=\gamma^0$, $\gamma_i=-\gamma^i$.) We introduce as well the auxiliary matrices

$$
\gamma^5\equiv i\gamma^0\gamma^1\gamma^2\gamma^3
\tag{C.10}
$$

$$
\boldsymbol{\Sigma}\equiv\begin{pmatrix}\boldsymbol{\sigma}&0\\0&\boldsymbol{\sigma}\end{pmatrix}
\tag{C.11}
$$

$$
\sigma^{\mu\nu}\equiv\frac{i}{2}(\gamma^\mu\gamma^\nu-\gamma^\nu\gamma^\mu)
\tag{C.12}
$$

For any 4-vector $a^\mu$, we define the $4\times4$ matrix $\not a$ as follows:

$$
\not a\equiv a_\mu\gamma^\mu
\tag{C.13}
$$

(a) *Product Rules.* In terms of the metric

$$
g^{\mu\nu}\equiv\begin{pmatrix}
1&0&0&0\\
0&-1&0&0\\
0&0&-1&0\\
0&0&0&-1
\end{pmatrix}
\tag{C.14}
$$

(note that $g^{\mu\nu}g_{\mu\nu}=4$), we have:

$$
\gamma^\mu\gamma^\nu+\gamma^\nu\gamma^\mu=2g^{\mu\nu},\qquad
\not a\not b+\not b\not a=2a\cdot b
\tag{C.15}
$$

$$
\gamma_\mu\gamma^\mu=4
\tag{C.16}
$$

$$
\gamma_\mu\gamma^\nu\gamma^\mu=-2\gamma^\nu,\qquad
\gamma_\mu\not a\gamma^\mu=-2\not a
\tag{C.17}
$$

$$
\gamma_\mu\gamma^\nu\gamma^\lambda\gamma^\mu=4g^{\nu\lambda},\qquad
\gamma_\mu\not a\not b\gamma^\mu=4a\cdot b
\tag{C.18}
$$

$$
\gamma_\mu\gamma^\nu\gamma^\lambda\gamma^\sigma\gamma^\mu=-2\gamma^\sigma\gamma^\lambda\gamma^\nu,\qquad
\gamma_\mu\not a\not b\not c\gamma^\mu=-2\not c\not b\not a
\tag{C.19}
$$

(b) *Trace Theorems.* The trace of the product of an *odd* number of gamma matrices is *zero*.

$$
\operatorname{Tr}(1)=4
\tag{C.20}
$$

$$
\operatorname{Tr}(\gamma^\mu\gamma^\nu)=4g^{\mu\nu},\qquad
\operatorname{Tr}(\not a\not b)=4a\cdot b
\tag{C.21}
$$

$$
\begin{aligned}
\operatorname{Tr}(\gamma^\mu\gamma^\nu\gamma^\lambda\gamma^\sigma)
&=4(g^{\mu\nu}g^{\lambda\sigma}-g^{\mu\lambda}g^{\nu\sigma}+g^{\mu\sigma}g^{\nu\lambda}),\\
\operatorname{Tr}(\not a\not b\not c\not d)
&=4(a\cdot b\,c\cdot d-a\cdot c\,b\cdot d+a\cdot d\,b\cdot c)
\end{aligned}
\tag{C.22}
$$

Since $\gamma^5$ is the product of an *even* number of $\gamma$ matrices, it follows that $\operatorname{Tr}(\gamma^5\gamma^\mu)=0$ and $\operatorname{Tr}(\gamma^5\gamma^\mu\gamma^\nu\gamma^\lambda)=0$. When $\gamma^5$ is multiplied by an *even* number of $\gamma$'s, we find

$$
\operatorname{Tr}(\gamma^5)=0
\tag{C.23}
$$

$$
\operatorname{Tr}(\gamma^5\gamma^\mu\gamma^\nu)=0,\qquad
\operatorname{Tr}(\gamma^5\not a\not b)=0
\tag{C.24}
$$

$$
\operatorname{Tr}(\gamma^5\gamma^\mu\gamma^\nu\gamma^\lambda\gamma^\sigma)=4i\epsilon^{\mu\nu\lambda\sigma},\qquad
\operatorname{Tr}(\gamma^5\not a\not b\not c\not d)=4i\epsilon^{\mu\nu\lambda\sigma}a_\mu b_\nu c_\lambda d_\sigma
\tag{C.25}
$$

where $\epsilon^{\mu\nu\lambda\sigma}=-1$, if $\mu\nu\lambda\sigma$ is an even permutation of 0123, $+1$ for an odd permutation, and 0 if any two indices are the same. Note that

$$
\epsilon^{\mu\nu\lambda\sigma}\epsilon_{\mu\nu\kappa\tau}
=-2(\delta_\kappa^\lambda\delta_\tau^\sigma-\delta_\tau^\lambda\delta_\kappa^\sigma)
\tag{C.26}
$$
