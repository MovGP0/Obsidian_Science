---
title: "Chapter Summary"
---

> [!TLDR]
> Hermitian matrices have real eigenvalues and orthonormal eigenbases. Diagonalization gives spectral decompositions, matrix functions, and the probabilities for quantum measurements.

- **Eigenvector and eigenvalue:** $\hat A v=\lambda v$, with $v\ne0$. In finite dimensions, calculate eigenvalues from $\det(A-\lambda I)=0$.
- **Hermitian operators:** Their eigenvalues are real. Eigenvectors with distinct eigenvalues are orthogonal.
- **Spectral theorem:** Every Hermitian matrix is unitarily diagonalizable. There is an orthonormal basis of eigenvectors.
- **Spectral decomposition:** $\hat A=\sum_n a_n|a_n\rangle\langle a_n|$.
- **Matrix functions:** $f(A)=Uf(D)U^\dagger$. Evaluate the function on the eigenvalues.
- **Quantum measurement:** For a nondegenerate discrete spectrum, measurement of $\hat A$ gives $a_n$ with probability $|\langle a_n|\psi\rangle|^2$. An ideal projective measurement then leaves the corresponding eigenstate. For degeneracy, use the projector onto the full eigenspace, as explained in [[07 Eigenvalues and Eigenvectors/05 Common Errors|Common Errors]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$ | — | Measurement outcome | An eigenvalue of the observable; its unit depends on that observable. |
| $\lvert\langle a_n\vert\psi\rangle\rvert^2$ | $1$ | Measurement probability | The probability of a nondegenerate outcome in a normalized state. |
