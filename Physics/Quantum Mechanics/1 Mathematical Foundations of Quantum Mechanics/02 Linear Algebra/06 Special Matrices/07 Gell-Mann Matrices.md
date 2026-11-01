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

## Check the normalization and representation

A traceless Hermitian $3\times3$ matrix has eight real degrees of freedom: two independent real diagonal entries and three complex off-diagonal pairs. This explains why eight independent matrices are needed. In the common convention $T_a=\lambda_a/2$, the trace normalization becomes $\operatorname{Tr}(T_aT_b)=\delta_{ab}/2$ and the commutator is $[T_a,T_b]=\mathrm{i}f_{abc}T_c$. Keep the convention fixed when comparing formulas. See [Schwinn, section 4.1.1, pp. 52–54](https://www.tep.physik.uni-freiburg.de/lectures/archive/QCD-WS-14/qcd#page=53).

For a direct test, $\lambda_3=\operatorname{diag}(1,-1,0)$ is Hermitian and traceless, and $\operatorname{Tr}(\lambda_3^2)=2$. It does not square to the three-dimensional identity. Thus the Pauli rule $\sigma_i^2=I$ must not be transferred to all Gell-Mann matrices. These matrices give the fundamental three-dimensional representation; choosing their algebra does not by itself derive a quantum dynamics.

> [!note]
> The final expression uses summation over the repeated index $k$. All $\lambda_a$, $\sigma_i$, and structure constants here are mathematical matrix or algebra symbols; they are not wavelengths or physical spin-component values.
