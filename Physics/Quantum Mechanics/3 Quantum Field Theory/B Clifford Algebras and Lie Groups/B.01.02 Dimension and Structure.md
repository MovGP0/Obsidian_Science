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
