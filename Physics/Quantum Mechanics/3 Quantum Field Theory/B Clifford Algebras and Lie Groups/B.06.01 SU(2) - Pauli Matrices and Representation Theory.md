---
title: "SU(2) — Pauli Matrices and Representation Theory"
---

> [!TLDR]
> The fundamental SU(2) generators are half the Pauli matrices. Its irreducible representations are labeled by j and have dimension 2j + 1.

In the fundamental representation $\mathbf2$,
$$
T^a=\frac{\sigma^a}{2}.
$$
The Pauli matrices are
$$
\sigma^1=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\qquad
\sigma^3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\tag{B.52}
$$

## Pauli-matrix identities

$$
[\sigma^a,\sigma^b]=2i\epsilon^{abc}\sigma^c,
\tag{B.53}
$$
$$
\{\sigma^a,\sigma^b\}=2\delta^{ab}\mathbf1,
\tag{B.54}
$$
$$
\sigma^a\sigma^b
=\delta^{ab}\mathbf1+i\epsilon^{abc}\sigma^c,
\tag{B.55}
$$
$$
\operatorname{tr}(\sigma^a\sigma^b)=2\delta^{ab},
\tag{B.56}
$$
$$
\sigma^a\sigma^b\sigma^a=-\sigma^b.
\tag{B.57}
$$
The repeated index $a$ in (B.57) is summed.
The $\mathfrak{su}(2)$ structure constants are $f^{abc}=\epsilon^{abc}$.

## Representation theory

The irreducible representations of $SU(2)$ have labels
$$
j=0,\frac12,1,\frac32,\ldots
$$
and dimensions $d_j=2j+1$.
Their basic eigenvalue relations are
$$
J^2\lvert j,m\rangle=j(j+1)\lvert j,m\rangle,
\tag{B.58}
$$
$$
J^3\lvert j,m\rangle=m\lvert j,m\rangle,
\qquad
m=-j,-j+1,\ldots,j.
\tag{B.59}
$$

The ladder operators act as
$$
J^\pm\lvert j,m\rangle
=\sqrt{j(j+1)-m(m\pm1)}\,\lvert j,m\pm1\rangle,
\tag{B.60}
$$
where $J^\pm=J^1\pm iJ^2$.

The tensor-product composition rule is
$$
j_1\otimes j_2
=\lvert j_1-j_2\rvert
\oplus(\lvert j_1-j_2\rvert+1)
\oplus\cdots\oplus(j_1+j_2).
\tag{B.61}
$$
The Clebsch–Gordan coefficients define the coupled basis:
$$
\lvert j,m\rangle
=\sum_{m_1,m_2}
\langle j_1m_1;j_2m_2\mid j,m\rangle
\,\lvert j_1,m_1\rangle\otimes\lvert j_2,m_2\rangle.
\tag{B.62}
$$

## Normalization and the end of a ladder

The $J^i$ in (B.58)–(B.60) are dimensionless representation generators. If they describe physical spin, the angular momentum operators are $\hbar J^i$ and the squared angular momentum is $\hbar^2j(j+1)$. No factor of $\hbar$ belongs in the Pauli commutator as written here.

The ladder coefficient follows from $J^-J^+=J^2-(J^3)^2-J^3$ and the norm of $J^+|j,m\rangle$. A finite-dimensional unitary representation has a highest and a lowest weight. Their vanishing ladder norms fix the endpoint labels and force $2j$ to be a nonnegative integer. This supplies the logic behind the allowed values rather than treating the list as arbitrary.

For $\tfrac12\otimes\tfrac12=0\oplus1$, the dimension check is $2\cdot2=1+3$. The spin-zero state is the antisymmetric combination of the two weight-zero product states; the spin-one sector is symmetric. Finally, (B.57) needs the sum over $a$: for fixed $a=b$, the product is $\sigma^b$, whereas summing gives $-\sigma^b$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | The scale that converts dimensionless rotation generators to physical angular momentum. |
