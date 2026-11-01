---
title: "Dimension and Structure"
---

> [!TLDR]
> A Clifford algebra in d dimensions has 2ᵈ independent basis elements, formed from antisymmetrized products of its generators.

As a vector space, $\operatorname{Cl}(p,q)$ has dimension $2^d$.
A basis is given by antisymmetrized generator products:
$$
\mathbf1,\quad
\gamma^\mu,\quad
\gamma^{\mu\nu}\equiv\gamma^{[\mu}\gamma^{\nu]},
\quad
\gamma^{\mu\nu\rho},\quad
\ldots,\quad
\gamma^{\mu_1\cdots\mu_d}.
\tag{B.2}
$$
The number of basis elements is
$$
\sum_{k=0}^d\binom dk=2^d.
$$
The normalized antisymmetrized product is
$$
\gamma^{\mu_1\cdots\mu_k}
\equiv\gamma^{[\mu_1}\cdots\gamma^{\mu_k]}
=\frac1{k!}\sum_{\sigma\in S_k}
(-1)^{|\sigma|}
\gamma^{\mu_{\sigma(1)}}\cdots\gamma^{\mu_{\sigma(k)}}.
\tag{B.3}
$$
Here $S_k$ is the permutation group, and $|\sigma|$ denotes the parity of the permutation.

## Why the counting is a theorem

Work over $\mathbb R$ or $\mathbb C$ with a nondegenerate form. In an orthogonal basis, the Clifford relation moves generators into increasing index order and removes repeated indices using their squares. This proves that the ordered products span. Counting these products alone does not prove independence.

For the missing step, act on the exterior algebra $\Lambda V$. Represent a vector by exterior multiplication plus contraction with the bilinear form. These operators obey the same Clifford relation. An ordered product acting on $1\in\Lambda^0V$ has as its highest-degree part the corresponding exterior basis vector. In a putative linear relation, the highest-degree terms therefore vanish separately; descending through the degrees proves independence. This establishes the $2^d$ result without assuming it.

For $d=2$, the four elements are $\mathbf1,\gamma^1,\gamma^2,\gamma^{12}$. For complex $d=4$, their sixteen counterparts can fill the space of $4\times4$ matrices. In odd dimension an irreducible matrix representation need not be faithful on the whole Clifford algebra. Do not infer abstract algebra dimension from the number of independent matrices in one such representation.

Reconstruct the argument for $d=3$: count grades $0,1,2,3$ separately to obtain $1+3+3+1=8$. Then compare with the four-dimensional space of complex $2\times2$ matrices. Which conclusion must fail for a Pauli-matrix realization? It is faithfulness on the full algebra, not the abstract basis theorem.
