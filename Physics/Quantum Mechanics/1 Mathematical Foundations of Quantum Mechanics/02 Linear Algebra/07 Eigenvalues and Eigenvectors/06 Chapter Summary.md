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

## Reconstruct a spectral calculation

For $A=\sigma_x$, write its two orthogonal projectors as $P_+$ and $P_-$. Completeness gives $P_++P_-=I$, while the operator is $P_+-P_-$. Squaring removes the sign and gives $A^2=I$ because $P_+P_-=0$. This one example joins the spectral theorem, projectors, and matrix functions.

A normalized equal superposition of the two eigenvectors has equal outcome probabilities and mean zero, although zero is not an eigenvalue. Explain why the mean can lie between the allowed outcomes. These statements use a finite discrete spectrum; they do not supply a sum of ordinary eigenvectors for a continuous-spectrum operator.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $a_n$ | — | Measurement outcome | An eigenvalue of the observable; its unit depends on that observable. |
| $\lvert\langle a_n\vert\psi\rangle\rvert^2$ | $1$ | Measurement probability | The probability of a nondegenerate outcome in a normalized state. |
