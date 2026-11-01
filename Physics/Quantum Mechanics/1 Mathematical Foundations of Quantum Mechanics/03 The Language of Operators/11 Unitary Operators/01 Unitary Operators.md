---
title: "Unitary Operators"
---

> [!TLDR]
> A unitary operator has its adjoint as its inverse and preserves norms and inner products. Unitary conjugation also preserves an operator’s eigenvalues.

Both inverse identities in the definition matter in an infinite-dimensional space. Consider the shift on square-summable sequences that sends $(c_0,c_1,\ldots)$ to $(0,c_0,c_1,\ldots)$. It preserves norms and satisfies the left inverse identity, but it is not onto: no input can produce a nonzero first component. The reverse product is therefore a proper projector rather than the identity. This is an isometry, not a unitary operator.

In finite dimensions a square norm-preserving matrix is automatically onto, so this distinction can be hidden. A unitary operator on a nonzero Hilbert space is bounded, acts on the whole space, and has operator norm one. If an unbounded observable is conjugated as in property 3, its domain is carried to the unitary image of the original domain. This domain transformation is part of the conjugated operator.

> [!definition] Definition 11.1 | Unitary operator
> An operator $\hat U:\mathcal H\to\mathcal H$ is **unitary** if
>
> $$
> \hat U^\dagger\hat U=\hat U\hat U^\dagger=\hat I,
> \qquad\text{equivalently }\hat U^{-1}=\hat U^\dagger.
> $$

Unitary operators have the following properties:

1. **Norm preservation:** $\lVert\hat U|\psi\rangle\rVert=\lVert|\psi\rangle\rVert$ for every ket.
2. **Inner-product preservation:** $\langle\hat U\phi|\hat U\psi\rangle=\langle\phi|\psi\rangle$.
3. **Eigenvalue preservation under conjugation:** If $\hat A|a\rangle=a|a\rangle$, then

   $$
   (\hat U\hat A\hat U^\dagger)(\hat U|a\rangle)=a(\hat U|a\rangle).
   $$

4. **Unit-modulus eigenvalues:** If $\hat U|u\rangle=\lambda|u\rangle$ for $|u\rangle\ne0$, then $|\lambda|=1$. Thus $\lambda=e^{i\signal{\phi}}$ for a real phase $\signal{\phi}$.

**Proof of property 1:**

$$
\lVert\hat U|\psi\rangle\rVert^2
=\langle\psi|\hat U^\dagger\hat U|\psi\rangle
=\langle\psi|\hat I|\psi\rangle
=\langle\psi|\psi\rangle.
$$

**Proof of property 4:** If $\hat U|u\rangle=\lambda|u\rangle$, then

$$
|\lambda|^2\langle u|u\rangle
=\langle\hat Uu|\hat Uu\rangle
=\langle u|u\rangle.
$$

Since the vector is nonzero, $|\lambda|^2=1$.

> [!note]
> Property 3 concerns transforming both the operator and its eigenvector. Applying an arbitrary unitary to a state need not preserve its definite measurement value or its measurement probabilities for a fixed observable. In infinite dimensions, a unitary operator can have continuous spectrum without a basis of ordinary eigenvectors; property 4 applies when an eigenvector exists.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\phi}$ | $1$ | Eigenphase | The phase of a unitary eigenvalue. |
