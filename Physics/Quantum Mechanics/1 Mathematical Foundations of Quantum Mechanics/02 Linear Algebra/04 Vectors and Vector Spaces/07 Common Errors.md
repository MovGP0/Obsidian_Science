---
title: "Common Errors"
---

> [!TLDR]
> Distinguish vectors from scalars, and remember conjugation in the first inner-product argument. A basis is not unique, and linear independence does not imply orthogonality.

## Error 1 — Confuse vectors and scalars in αv = 0

If $\alpha v=0$ in a vector space, then $\alpha=0$ or $v=0$, or both. You cannot divide by $v$: vector division is not defined.

## Error 2 — Forget antilinearity in the first argument

The inner product is **antilinear** in the first argument:

$$
\langle\alpha u+\beta v,w\rangle
=\alpha^*\langle u,w\rangle+\beta^*\langle v,w\rangle.
$$

It is incorrect to write $\langle\alpha u,v\rangle=\alpha\langle u,v\rangle$. The coefficient must be conjugated.

## Error 3 — Treat the zero vector as an eigenvector

The definition of an eigenvector explicitly requires $v\ne0$. The zero vector satisfies $Av=\lambda v$ for every $\lambda$, so it has no meaning as an eigenvector.

## Error 4 — Assume a basis is unique

The space $\mathbb{C}^2$ has infinitely many bases. The standard basis is only the most convenient one. A change of basis does not change the vectors, only their coordinates. In quantum mechanics, this corresponds to a change of representation, such as from position space to momentum space.

## Error 5 — Assume linear independence implies orthogonality

The vectors $(1,0)^T$ and $(1,1)^T$ are linearly independent, but their inner product is $1\ne0$. They are not orthogonal. Gram–Schmidt constructs an orthonormal basis from an independent basis.

> [!info] Quantum mechanics — States and probability amplitudes
> In quantum mechanics, **physical states** are vectors in a Hilbert space $\mathcal{H}$. The vector-space structure has a direct physical meaning.
>
> The **superposition principle** states that if $|\psi_1\rangle$ and $|\psi_2\rangle$ are possible physical states, then a normalized combination $\signal{\alpha}|\psi_1\rangle+\signal{\beta}|\psi_2\rangle$ is also a possible physical state.
>
> The **measurement principle** uses coordinates. Suppose $\{|n\rangle\}$ is a basis of eigenstates of the observable $\hat A$, with eigenvalues $\lambda_n$, and the state is
>
> $$
> |\psi\rangle=\sum_n\signal{c}_n|n\rangle,
> \qquad\signal{c}_n=\langle n|\psi\rangle.
> $$
>
> The probability of obtaining $\lambda_n$ in a measurement is $|\signal{c}_n|^2$. The normalization condition
>
> $$
> \|\psi\|^2=\sum_n|\signal{c}_n|^2=1
> $$
>
> states that the probabilities add to $1$.
>
> The coordinates $\signal{c}_n$ in the quantum formalism are exactly the **probability amplitudes**.
>
> Quantum mechanics differs from the finite-dimensional linear algebra discussed so far. Its spaces are generally infinite-dimensional. Their bases can be countable, or even continuous in a generalized sense. The chapter on Hilbert spaces will make this precise. The space $L^2(\mathbb{R})$ is infinite-dimensional. Chapter 8 develops the required tools: completeness, convergence, and distributions.

> [!note]
> Here, states means **pure states**, represented by normalized vectors. Vectors that differ only by an overall phase represent the same physical state. A superposition must be nonzero before it can be normalized.
>
> The coordinate and probability formulas assume an orthonormal eigenbasis. For a degenerate measurement value, add the squared amplitudes of all orthonormal eigenstates with that value. A continuous spectrum uses the corresponding integral formulation; its generalized eigenstates are not ordinary normalizable basis vectors.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\alpha},\signal{\beta}$ | $1$ | Superposition amplitudes | The complex coefficients of the two state vectors. |
| $\signal{c}_n$ | $1$ | Probability amplitudes | The coordinates in an orthonormal measurement basis. |
| $\lvert\signal{c}_n\rvert^2$ | $1$ | Basis-state probabilities | The probabilities associated with the individual orthonormal basis states. |
| $\lambda_n$ | — | Observable eigenvalues | The possible measurement values. Their units depend on the observable. |
