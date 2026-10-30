---
title: "Charge Conjugation Matrix"
---

> [!TLDR]
> The unitary charge-conjugation matrix converts the transpose of a gamma matrix into its negative by a similarity transformation.

The charge-conjugation matrix $C$ is defined by
$$
C(\gamma^\mu)^T C^{-1}=-\gamma^\mu,
\qquad
C^\dagger=C^{-1}.
\tag{A.42}
$$

Additional properties are
$$
C^T=-C,
\qquad
C^*=-C^{-1}=-C^\dagger.
\tag{A.43}
$$
In the Dirac–Pauli representation,
$$
C=i\gamma^2\gamma^0
=\begin{pmatrix}
0&0&0&-1\\
0&0&1&0\\
0&-1&0&0\\
1&0&0&0
\end{pmatrix}.
\tag{A.44}
$$
The charge-conjugated spinor is
$$
\signal{\psi}^c\equiv C\bar{\signal{\psi}}^{\,T}
=C(\gamma^0)^T\signal{\psi}^*.
\tag{A.45}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}^c$ | $\unit{GeV^{3/2}}$ | Spinor field and charge conjugate | The original Dirac field and its charge-conjugated field. |
