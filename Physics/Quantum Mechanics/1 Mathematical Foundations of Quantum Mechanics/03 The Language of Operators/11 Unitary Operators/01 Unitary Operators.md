---
title: "Unitary Operators"
---

> [!TLDR]
> A unitary operator has its adjoint as its inverse and preserves norms and inner products. Unitary conjugation also preserves an operator’s eigenvalues.

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
