---
title: "Common Errors"
---

> [!TLDR]
> Keep norm convergence separate from pointwise convergence, and completeness separate from orthonormality. Generalized states and unbounded operators require care even though the Hilbert space itself is well defined.

## Error 1 — Confuse pointwise convergence with norm convergence

A series of functions can converge in the $L^2$ norm without converging pointwise at every point. When we write $f=\sum_n c_n\phi_n$ in $L^2$, we mean convergence in norm. We do not assert that the series converges for each individual value of $x$.

## Error 2 — Treat the Dirac delta as an ordinary function

The Dirac delta $\delta(x-x_0)$ does not belong to $L^2(\mathbb R)$. Writing $|\delta|^2=\delta^2$ and integrating it as an ordinary function is not defined in the usual distribution calculus. A distribution acts on test functions; it need not be an ordinary function.

## Error 3 — Confuse orthonormality with completeness

A set of functions can be orthonormal without being complete. Remove one vector from an orthonormal basis to obtain an example. Completeness, which requires every vector to have an expansion in the basis, is the additional condition that makes an orthonormal system a basis.

## Error 4 — Assume that infinite dimension itself causes problems

The space $L^2(\mathbb R)$ is a well-defined, complete Hilbert space. Difficulties arise when we use **unbounded operators**, such as $\hat x$ and $\hat p$. Their domains must be specified carefully. The geometry of the space remains as consistent as the geometry of $\mathbb C^n$.

## Quantum mechanics — Choose the Hilbert space for the system

The quantum Hilbert space depends on the physical system.

| System | Hilbert space |
| --- | --- |
| Particle in one spatial dimension | $L^2(\mathbb R)$ |
| Particle in three spatial dimensions | $L^2(\mathbb R^3)$ |
| Spin one half | $\mathbb C^2$ |
| Particle in three dimensions with spin one half | $L^2(\mathbb R^3)\otimes\mathbb C^2$ |
| $N$ particles without spin degrees of freedom | $L^2(\mathbb R^{3N})$, with the required exchange symmetry for identical particles. |

> [!note]
> The source labels the fourth row only as a particle “with spin”; the factor $\mathbb C^2$ specifies spin one half. More general spin requires the corresponding spin space. The last row must also be extended when spin degrees of freedom are included.

Completeness has a physical consequence: norm-convergent limits of states remain in the state space. The source illustrates this with the time-evolution operator

$$
\hat U(\signal{t})=e^{-i\hat H\signal{t}/\mechanical{\hbar}}.
$$

It describes evolution as an operator on the Hilbert space, with the evolved state remaining in that space.

> [!note]
> Completeness alone is not sufficient to define a physical time evolution. This exponential assumes a time-independent **self-adjoint** Hamiltonian. The spectral theorem then defines a unitary operator on the whole Hilbert space, even when the Hamiltonian itself is unbounded. Its domain and self-adjointness are essential.

The completeness relation

$$
\sum_n|n\rangle\langle n|=\hat I
$$

is a powerful tool. Inserting it into an expression permits changes of basis, projection calculations, and operator decompositions. It expresses the fact that each vector can be expanded into components.

If $\hat H$ has a complete orthonormal basis of energy eigenstates $|n\rangle$ with energies $\energy{E_n}$, the evolution of an arbitrary initial state follows by expansion:

$$
|\psi(\signal{t})\rangle
=\sum_n e^{-i\energy{E_n}\signal{t}/\mechanical{\hbar}}
\langle n|\psi(0)\rangle|n\rangle.
$$

Completeness makes this expansion exact in norm. If the spectrum has a continuous part, the spectral expansion also requires integrals; a sum over normalizable eigenstates alone is then insufficient.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The time elapsed from the initial state. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the evolution phase. |
| $\energy{E_n}$ | $\unit{J}$ | Energy | The energy eigenvalue of the stationary state labelled $n$. |
