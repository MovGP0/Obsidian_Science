---
title: "Determinant, Trace and Invariants"
---

> [!TLDR]
> Trace, determinant, and the characteristic polynomial are unchanged by a change of basis. The trace also gives quantum expectation values for mixed states.

Let $A\in M_n(\mathbb{C})$ have eigenvalues $\lambda_1,\ldots,\lambda_n$. Write its characteristic polynomial as $p_A(\lambda)$. Then

$$
\operatorname{Tr}(A)=\sum_{i=1}^{n}A_{ii}=\sum_{i=1}^{n}\lambda_i. \tag{6.1}
$$

$$
\det(A)=\prod_{i=1}^{n}\lambda_i. \tag{6.2}
$$

$$
p_A(\lambda)=\det(\lambda I-A)=\prod_{i=1}^{n}(\lambda-\lambda_i). \tag{6.3}
$$

These quantities are **invariant under a change of basis**. If $B=UAU^\dagger$ with unitary $U$, then $\operatorname{Tr}(B)=\operatorname{Tr}(A)$ and $\det(B)=\det(A)$. Their values do not depend on the representation.

> [!note]
> Count eigenvalues with algebraic multiplicity in these formulas. The identities do not require diagonalizability. A basis invariant can describe a representation-independent physical quantity, but invariance alone does not make every matrix expression an observable.

## Example — Trace as the expectation value of an energy distribution

For a thermal state

$$
\rho=Z^{-1}\sum_n\mathrm{e}^{-\thermal{\beta}\energy{E}_n}|n\rangle\langle n|,
$$

which is a density matrix discussed later, the expected energy is

$$
\langle\hat H\rangle=\operatorname{Tr}(\rho\hat H).
$$

The trace generalizes expectation values to mixed states, which are statistical mixtures of pure states. Its invariance under a change of basis ensures that the physical expectation value does not depend on the computational basis.

> [!note]
> Here $Z$ is the partition function that normalizes the state. The parameter $\thermal{\beta}$ has inverse-energy units, so that the exponent is dimensionless. The source uses these symbols without defining them explicitly.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}_n$ | $\unit{J}$ | Energy levels | The energies in the thermal-state weights. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal-energy parameter | The parameter controlling the thermal weights. |
| $Z$ | $1$ | Partition function | The normalization factor of the thermal density matrix. |
| $\langle\hat H\rangle$ | $\unit{J}$ | Mean energy | The energy expectation value calculated with the trace. |
