---
title: "The Matrix γ⁵"
---

> [!TLDR]
> The chirality matrix is Hermitian, squares to the identity, anticommutes with every gamma matrix, and is diagonal in the Weyl representation.

Define
$$
\gamma^5\equiv i\gamma^0\gamma^1\gamma^2\gamma^3
=-\frac{i}{4!}\epsilon_{\mu\nu\rho\sigma}
\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma.
\tag{A.16}
$$
The convention is $\epsilon^{0123}=+1$ and $\epsilon_{0123}=-1$; see [[A.06 Levi-Civita Tensor]].

In the Dirac–Pauli representation,
$$
\gamma^5=
\begin{pmatrix}
0&\mathbf1_2\\
\mathbf1_2&0
\end{pmatrix}.
\tag{A.17}
$$
In the Weyl representation,
$$
\gamma^5=
\begin{pmatrix}
-\mathbf1_2&0\\
0&\mathbf1_2
\end{pmatrix}.
\tag{A.18}
$$
The basic properties are
$$
(\gamma^5)^2=\mathbf1_4,
\tag{A.19}
$$
$$
(\gamma^5)^\dagger=\gamma^5,
\tag{A.20}
$$
$$
\{\gamma^5,\gamma^\mu\}=0,
\tag{A.21}
$$
$$
[\gamma^5,\sigma^{\mu\nu}]=0.
\tag{A.22}
$$

The superscript five is a name, not a fifth spacetime component or a fifth power. The definition fixes its sign only after the gamma-matrix order and Levi-Civita convention are fixed. It allows [[A.05.06 Chiral Projectors]] to separate the two chirality eigenspaces.

To reconstruct (A.21), move one gamma matrix through the product defining the chirality matrix and use the Clifford algebra. The minus sign implies that the chirality matrix commutes with a product of two gamma matrices, which explains (A.22). In either displayed representation, squaring its block matrix gives the identity and its trace is zero, so the two eigenspaces each have dimension two. These statements use four spacetime dimensions; they must not be imposed unchanged on all dimensionally continued gamma algebra.
