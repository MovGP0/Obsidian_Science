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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $c_n$ | $1$ | Probability amplitude | The coefficient of a normalized state in a discrete orthonormal basis. |
| $\mechanical{x}$, $\mechanical{x}'$ | $\unit{m}$ | Position | The particle coordinates in the generalized position basis. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The spatial phase rate of the plane wave. |
