---
title: "Common Errors"
---

> [!TLDR]
> Distinguish matrix definitions from calculation methods, and check the assumptions behind determinant and purity claims. SVD factors have phase and basis freedom even though the singular values are unique.

## Error 1 — Treat Gaussian elimination as the definition of rank

Counting the nonzero rows after Gaussian elimination is a calculation method, not the definition. Rank is the dimension of the image: the maximum number of linearly independent columns or rows.

## Error 2 — Assume det(A + B) = det(A) + det(B)

This is false. The determinant is not linear under matrix addition. It is linear in each individual row or column when the other rows or columns remain fixed, not in the whole matrix.

## Error 3 — Treat the purity-to-projector implication as immediate

For a density matrix, $\operatorname{Tr}(\rho^2)=1$ implies that the state is pure and hence $\rho^2=\rho$. But this requires proof; it is not immediate from the trace expression. The property $P^2=P$ is projector idempotence. Among density matrices, it holds for pure states.

> [!note]
> This implication uses the density-matrix conditions: Hermiticity, positivity, and trace one. A statement about the trace of a square alone does not establish idempotence for an arbitrary matrix.

## Error 4 — Assume SVD is unique

In general, it is not. The matrices $U$ and $V$ are not completely unique. Each pair of singular vectors has simultaneous phase freedom. Repeated singular values also allow changes of basis within the corresponding degenerate subspaces. The singular values themselves are unique.

> [!info] Quantum mechanics — Entanglement, density matrices, and channels
> The structures in this chapter appear in central parts of quantum mechanics.
>
> **Schmidt decomposition:** Every bipartite state $|\psi\rangle\in\mathcal{H}_A\otimes\mathcal{H}_B$ can be written as
>
> $$
> |\psi\rangle=\sum_i\signal{\sigma}_i|u_i\rangle_A\otimes|v_i\rangle_B.
> $$
>
> In the source, $|u_i\rangle$ and $|v_i\rangle$ are called the left and right singular vectors of the coefficient matrix $C_{ij}$ in
>
> $$
> |\psi\rangle=\sum_{ij}\signal{c}_{ij}|i\rangle_A\otimes|j\rangle_B,
> $$
>
> and $\signal{\sigma}_i$ are its singular values. The number of nonzero $\signal{\sigma}_i$ is the **Schmidt rank**. If it is $1$, the pure state is separable; if it is greater than $1$, the state is entangled.
>
> **Density matrices:** The density-matrix formalism extends quantum mechanics to mixed states. It is essential for subsystems of entangled states and systems at finite temperature. Observable expectation values are calculated as
>
> $$
> \langle\hat A\rangle=\operatorname{Tr}(\rho\hat A).
> $$
>
> **Quantum channels:** Transformations of mixed states are described by **Kraus operations**:
>
> $$
> \rho\longmapsto\sum_k K_k\rho K_k^\dagger.
> $$
>
> The condition
>
> $$
> \sum_k K_k^\dagger K_k=I
> $$
>
> guarantees trace preservation, so $\operatorname{Tr}(\rho)=1$ remains true. The sum of terms $K\rho K^\dagger$ guarantees complete positivity.

> [!note]
> With the coefficient convention displayed above and $C=U\Sigma V^\dagger$, the second Schmidt ket uses the complex conjugates of the right singular-vector components in the chosen basis: columns of $V^*$, not directly columns of $V$. The source's label $|v_i\rangle_B$ must be interpreted accordingly for complex coefficients.
>
> The Schmidt coefficients are dimensionless for a normalized state, with $\sum_i\lvert\signal{\sigma}_i\rvert^2=1$. Schmidt rank detects entanglement of pure states, but it is not a complete measure of the entanglement amount at a fixed rank.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\sigma}_i$ | $1$ | Schmidt coefficients | The nonnegative amplitudes in the bipartite pure-state decomposition. |
| $\signal{c}_{ij}$ | $1$ | Product-basis amplitudes | The coefficients of the normalized state in a product basis. |
| $\langle\hat A\rangle$ | — | Observable expectation value | The mean value calculated from the density matrix. Its unit depends on the observable. |
