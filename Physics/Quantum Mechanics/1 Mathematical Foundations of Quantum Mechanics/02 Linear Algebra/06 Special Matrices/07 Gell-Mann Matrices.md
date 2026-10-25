---
title: "Gell-Mann Matrices"
---

> [!TLDR]
> The eight Gell-Mann matrices generate SU(3) in the physics convention. They are Hermitian and traceless, with fixed trace normalization and commutation relations.

The Pauli matrices $\{\sigma_i\}$ are generators of $SU(2)$. For $SU(3)$, the symmetry group of quantum chromodynamics, the generators are the **eight Gell-Mann matrices** $\{\lambda_a\}_{a=1}^{8}$.

The properties of the $SU(N)$ generators in the physics convention, here for $N=3$, are:

- **Hermiticity:** $\lambda_a^\dagger=\lambda_a$.
- **Zero trace:** $\operatorname{Tr}(\lambda_a)=0$.
- **Normalization:** $\operatorname{Tr}(\lambda_a\lambda_b)=2\delta_{ab}$.
- **Algebra:**

  $$
  [\lambda_a,\lambda_b]=2\mathrm{i}\sum_c f_{abc}\lambda_c,
  $$

  where $f_{abc}$ are the **structure constants**.

For $SU(2)$, $f_{abc}=\varepsilon_{abc}$, the Levi-Civita symbol. The relation

$$
[\sigma_i,\sigma_j]=2\mathrm{i}\varepsilon_{ijk}\sigma_k
$$

encodes the Lie algebra of $SU(2)$. The spin quantum numbers follow from this algebra.

> [!note]
> The final expression uses summation over the repeated index $k$. All $\lambda_a$, $\sigma_i$, and structure constants here are mathematical matrix or algebra symbols; they are not wavelengths or physical spin-component values.
