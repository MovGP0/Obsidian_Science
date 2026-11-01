---
title: "Recurring Symbols"
---

> [!TLDR]
> This symbol list separates state vectors, operators, distributions, and physical constants. The same letter can have different meanings, so use its mathematical role and context.

## Symbol dictionary

| Symbol | Meaning |
| --- | --- |
| $\mechanical{\hbar}$ | Reduced Planck constant, $\mechanical{h}/(2\pi)$. |
| $i$ | Imaginary unit, with $i^2=-1$. |
| $e$ | Euler's number, the base of the natural logarithm. |
| $\hat A$ | Linear operator; the hat marks an operator. |
| $\hat A^{\dagger}$ | Adjoint operator or conjugate transpose in an orthonormal matrix representation. |
| $\hat I$ | Identity operator. |
| $[\,\cdot\,,\,\cdot\,]$ | Commutator: $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$. |
| $\{\,\cdot\,,\,\cdot\,\}$ | Anticommutator: $\{\hat A,\hat B\}=\hat A\hat B+\hat B\hat A$. |
| $\otimes$ | Tensor product; for matrices, the Kronecker product. |
| $\vert\psi\rangle$ | Ket vector in Hilbert space. |
| $\langle\psi\vert$ | Bra: the linear functional associated with the ket $\vert\psi\rangle$. |
| $\hat P_n$ | Orthogonal projector onto an eigenspace; for a normalized nondegenerate eigenstate, $\hat P_n=\vert n\rangle\langle n\vert$. |
| $\rho$ | Density matrix, also written $\hat\rho$; in a continuous probability context, $\signal{\rho}(\mechanical{x})$ can instead mean a probability density. |
| $\operatorname{Tr}$ | Trace of a matrix or operator, when defined. |
| $\sigma_i$ | Pauli matrices, with $i=x,y,z$. |
| $\delta$, $\delta(x)$ | Delta notation: the indexed form denotes a Kronecker symbol; the argument form denotes a Dirac delta distribution. |
| $\delta_{ij}$ | Kronecker symbol: $1$ when $i=j$, and $0$ otherwise. |
| $\varepsilon_{ijk}$ | Levi-Civita symbol, totally antisymmetric in its indices. |
| $\mathcal H$ | Hilbert space. |
| $L^2(\mathbb R)$ | Space of square-integrable functions on $\mathbb R$, identified up to equality almost everywhere. |
| $\nabla$ | Nabla operator; applied to a scalar field, it gives the gradient. |

> [!note] Symbols with more than one meaning
> The Euler number $e$ in an exponential is not the elementary charge $\electric{e}$. Similarly, a density matrix $\rho$ is an operator, whereas a probability density $\signal{\rho}(\mechanical{x})$ is a nonnegative scalar function. The formula $\hat P_n=|n\rangle\langle n|$ applies to a one-dimensional eigenspace; a degenerate eigenspace requires a sum over an orthonormal basis of that space.

Use the object and its action to resolve notation. The map $|\psi\rangle\mapsto\langle\psi|$ is conjugate-linear, although the resulting bra is a linear functional of the ket on which it acts. Thus $(i|\psi\rangle)^{\dagger}=-i\langle\psi|$. Likewise, the star on a scalar conjugates it; the star on an operator can denote an adjoint. A hat can mark a Fourier transform in a different context, so it does not always mark an operator.

A density operator is positive and has trace one. Its matrix entries require a chosen basis; the operator itself does not. A finite identity matrix has trace equal to its dimension. On a countably infinite orthonormal basis, the formal sum of its diagonal entries is $\sum_n1$, so the identity has no finite trace and is not a density operator. This is one reason that finite matrix formulas require care in infinite dimensions.

**Check the type and normalization:** For a nonzero vector $|u\rangle$, the operator $Q=|u\rangle\langle u|$ satisfies $Q^2=\langle u|u\rangle Q$. It is an orthogonal projector only when $u$ is normalized. For example, $u=(1,1)^T$ gives $Q^2=2Q$; dividing $Q$ by $2$ gives a rank-one projector and a pure-state density operator. Reconstruct this example before using a ket–bra expression as a projector.

Finally, $\delta_{ij}$ belongs in a discrete sum, while $\delta(x-y)$ belongs in an integral with a specified measure. Their roles are analogous: $\sum_j\delta_{ij}v_j=v_i$ and $\int\delta(x-y)f(y)\,dy=f(x)$ for suitable test functions. Their normalization and mathematical type differ. Similarly, $\otimes$ constructs a product space or product operator; it does not denote ordinary composition $AB$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$, $\mechanical{h}$ | $\unit{J\,s}$ | Planck constants | The reduced Planck constant and the Planck constant. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the probability-density notation. |
| $\signal{\rho}(\mechanical{x})$ | $\unit{m^{-1}}$ | Probability density | A one-dimensional probability per unit position. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | The charge symbol distinguished from Euler's number. |
