---
title: "Common Errors"
---

> [!TLDR]
> Reverse the order when taking the adjoint of a product, and distinguish cyclic trace rearrangement from arbitrary permutation. Complex symmetry differs from Hermiticity, and matrix-entry formulas depend on the basis convention.

## Error 1 — Assume (AB)† = A†B†

This is false. The order is reversed:

$$
(AB)^\dagger=B^\dagger A^\dagger.
$$

Compare $(AB)^{-1}=B^{-1}A^{-1}$. Remember to reverse the order when applying these product-reversing operations.

## Error 2 — Assume Tr(ABC) = Tr(BAC)

This is false in general. The trace is invariant under **cyclic** permutations:

$$
\operatorname{Tr}(ABC)=\operatorname{Tr}(CAB)=\operatorname{Tr}(BCA).
$$

It is not invariant under arbitrary permutations.

## Error 3 — Treat symmetric and Hermitian matrices as the same

A real symmetric matrix, with $A^T=A$, is Hermitian. Since $A^*=A$, it satisfies $A^\dagger=(A^*)^T=A^T=A$.

But a complex symmetric matrix, with $A^T=A$, is generally not Hermitian. You must also conjugate its entries.

For example,

$$
A=\begin{pmatrix}1&\mathrm{i}\\\mathrm{i}&1\end{pmatrix}
$$

is symmetric, but

$$
A^\dagger=\begin{pmatrix}1&-\mathrm{i}\\-\mathrm{i}&1\end{pmatrix}\ne A.
$$

## Error 4 — Forget that the matrix-entry formula requires an orthonormal basis

The formula

$$
A_{ij}=\langle e_i,\hat A e_j\rangle
$$

requires an orthonormal basis. In a nonorthonormal basis, the matrix-entry formula is different and uses the Gram matrix. Quantum mechanics almost always uses orthonormal bases, but you must understand why.

> [!info] Quantum mechanics — Observables are Hermitian operators
> Every physically measurable quantity, such as position, momentum, energy, spin, or angular momentum, is represented by a Hermitian operator. Measurement results must be real numbers, and the eigenvalues of a Hermitian operator are real (Chapter 7).
>
> For a particle in one dimension, three fundamental operators are
>
> $$
> \hat x\signal{\psi}(\mechanical{x})=\mechanical{x}\signal{\psi}(\mechanical{x})
> \qquad\text{(multiplication by position)},
> $$
>
> $$
> \hat p\signal{\psi}(\mechanical{x})
> =-\mathrm{i}\energy{\hbar}\frac{\mathrm{d}\signal{\psi}}{\mathrm{d}\mechanical{x}}
> \qquad\text{(differentiation with a factor)},
> $$
>
> $$
> \hat H=\frac{\hat p^2}{2\mechanical{m}}+\energy{V}(\hat x)
> =-\frac{\energy{\hbar}^2}{2\mechanical{m}}
> \frac{\mathrm{d}^2}{\mathrm{d}\mechanical{x}^2}+\energy{V}(\mechanical{x}).
> $$
>
> They are Hermitian with respect to the inner product $\langle f,g\rangle=\int f^*g\,\mathrm{d}\mechanical{x}$. The momentum calculation was checked in Chapter 2.
>
> Unitary matrices represent system symmetries and transformations between representations. Time evolution,
>
> $$
> |\psi(\signal{t})\rangle
> =\mathrm{e}^{-\mathrm{i}\hat H\signal{t}/\energy{\hbar}}|\psi(0)\rangle,
> $$
>
> is unitary. It preserves the norm, and thus the total probability of $1$, with time.

> [!note]
> For unbounded operators in infinite-dimensional spaces, an observable requires self-adjointness on a specified domain. Formal Hermiticity alone is not sufficient. The differential operators above require suitable domains, boundary conditions, and a real potential.
>
> The displayed exponential assumes a time-independent Hamiltonian. A time-dependent Hamiltonian generally needs a time-ordered propagator. This chapter treats unitary symmetries; some symmetries, such as time reversal, are antiunitary.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}(\mechanical{x})$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional position-space state used in the operator formulas. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate acted on by the position and differential operators. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass in the Hamiltonian. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential-energy term in the Hamiltonian. |
| $\signal{t}$ | $\unit{s}$ | Time | The evolution time in the unitary propagator. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the momentum operator, Hamiltonian, and evolution phase. |
| — | $1$ | Total probability | The value one preserved for a normalized state by unitary evolution. |
