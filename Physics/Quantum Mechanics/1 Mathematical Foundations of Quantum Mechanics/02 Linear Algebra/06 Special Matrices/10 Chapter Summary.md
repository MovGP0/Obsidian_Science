---
title: "Chapter Summary"
---

> [!TLDR]
> Projectors, SVD, and polar decomposition describe matrix action. Basis invariants and density matrices connect this algebra with quantum states, measurement, and mixed-state expectation values.

- An orthogonal projector satisfies $P^2=P$ and $P^\dagger=P$. It is constructed from an orthonormal basis of its image subspace.
- SVD gives $A=U\Sigma V^\dagger$: two unitary transformations and a diagonal stretch, with singular values $\sigma_i\ge0$.
- For an invertible matrix, polar decomposition gives $A=UP$, with $U$ unitary and $P$ Hermitian positive definite. It is analogous to $z=r\mathrm{e}^{\mathrm{i}\theta}$.
- The rank–nullity theorem gives $\operatorname{rk}(A)+\dim(\ker(A))=n$.
- Trace and determinant are basis invariants. They equal the sum and product of the eigenvalues, counted with multiplicity.
- A density matrix $\rho$ is Hermitian, has $\operatorname{Tr}(\rho)=1$, and satisfies $\rho\ge0$. A pure state has $\operatorname{Tr}(\rho^2)=1$.
- The general expectation-value formula $\langle\hat A\rangle=\operatorname{Tr}(\rho\hat A)$ also applies to mixed states.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\operatorname{Tr}(\rho^2)$ | $1$ | Purity | The state-purity scalar, equal to one for a pure density matrix. |
| $\langle\hat A\rangle$ | — | Observable expectation value | The mean measurement value for a pure or mixed state. Its unit depends on the observable. |
