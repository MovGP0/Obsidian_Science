---
title: "Chapter Summary"
---

> [!TLDR]
> Hilbert-space completeness supports convergent basis expansions and quantum time evolution. Discrete orthonormal bases and generalized continuous bases give complementary forms of the identity operator.

- **The space $L^2(\mathbb R)$:** Square-integrable functions satisfy $\int|f|^2\,dx<\infty$. The inner product is $\langle f,g\rangle=\int f^*g\,dx$. Functions equal almost everywhere represent the same vector.
- **Hilbert space:** An inner-product space that is complete. Every Cauchy sequence converges to an element of the space.
- **Orthonormal basis:** $\langle\phi_m,\phi_n\rangle=\delta_{mn}$, and every vector has an expansion $f=\sum_n c_n\phi_n$ with $c_n=\langle\phi_n,f\rangle$. The series converges in norm.
- **Parseval identity:** $\lVert f\rVert^2=\sum_n|c_n|^2$. For a normalized quantum state, $\sum_n|c_n|^2=1$.
- **Completeness relation:** $\sum_n|\phi_n\rangle\langle\phi_n|=\hat I$.
- **Generalized continuous position basis:** $\langle\mechanical{x}|\mechanical{x}'\rangle=\delta(\mechanical{x}-\mechanical{x}')$. The wavefunction is $\signal{\psi}(\mechanical{x})=\langle\mechanical{x}|\psi\rangle$.
- **Plane waves:** $e^{i\signal{k}\mechanical{x}}$ does not belong to $L^2(\mathbb R)$ and cannot be normalized on the full real line. It remains useful as a generalized eigenfunction in distribution theory.

## Keep two meanings of completeness separate

A complete Hilbert space contains limits of its Cauchy sequences. A complete orthonormal system spans that space after norm limits are allowed. The first property concerns the space; the second concerns a selected family inside it. Removing a basis vector preserves the Hilbert space but makes that selected family incomplete.

To reconstruct an expansion, calculate its coefficients, show their squared sum is finite, and examine the norm of the omitted tail. If the basis is complete, that tail tends to zero. A continuous position ket has no such finite Hilbert norm; its role is an integral kernel. This distinction prevents reading a delta-normalized expression as an ordinary orthonormal-vector sum.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $c_n$ | $1$ | Probability amplitude | The coefficient of a normalized state in a discrete orthonormal basis. |
| $\mechanical{x}$, $\mechanical{x}'$ | $\unit{m}$ | Position | The particle coordinates in the generalized position basis. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The spatial phase rate of the plane wave. |
