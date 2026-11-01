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

Charge conjugation needs both complex conjugation of the field and the matrix which restores the spinor transformation law. The transpose in (A.42) is not a Hermitian conjugate. In the displayed representation, the real matrix has $C^2=-\mathbf1_4$ and $C^T=-C$, hence $C^{-1}=-C$ and $C^\dagger C=\mathbf1_4$. These are direct checks of (A.43)–(A.44).

A common overall phase of $C$ is a convention and leaves (A.42) unchanged. Use that phase consistently when comparing charge-conjugated spinors. Applying (A.45) twice gives the original field with these conventions; it does not produce a new independent field on the second application. For a charged field, charge conjugation also reverses its electromagnetic coupling in the equation of motion; it is not just a relabeling of matrix components.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}^c$ | $\unit{GeV^{3/2}}$ | Spinor field and charge conjugate | The original Dirac field and its charge-conjugated field. |
