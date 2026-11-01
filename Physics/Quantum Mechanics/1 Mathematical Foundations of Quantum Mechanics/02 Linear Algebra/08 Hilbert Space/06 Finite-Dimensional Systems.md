---
title: "Finite-Dimensional Systems"
---

> [!TLDR]
> Every finite-dimensional complex inner-product space is a Hilbert space. Its dimension gives the number of independent basis states needed to describe the system.

The space $\mathbb C^n$, with the standard inner product, is a Hilbert space of dimension $n$. Completeness is automatic: all norms on a finite-dimensional space are equivalent, and every finite-dimensional normed space is complete.

In quantum mechanics, $\mathbb C^n$ describes a system with $n$ independent basis states. Examples include:

- Spin one half: $\mathcal H=\mathbb C^2$.
- A qubit in quantum computing: $\mathcal H=\mathbb C^2$.
- An $n$-level system, such as an atom restricted to $n$ energy states: $\mathcal H=\mathbb C^n$.
- Photon polarization in a fixed propagation mode: $\mathcal H=\mathbb C^2$.

A direct completeness proof uses coordinates. A Cauchy sequence in $\mathbb C^n$ is Cauchy in each complex coordinate, so each coordinate converges. There are only finitely many coordinates, so the sum of their squared differences also tends to zero. The limiting vector remains in $\mathbb C^n$. This proves the Hilbert property without an infinite-series argument.

A finite-level restriction is exact for dynamics only when the chosen subspace is invariant under the Hamiltonian. If the Hamiltonian couples a retained level to an omitted level, evolution can leave that subspace. The finite matrix is then a model reduction whose accuracy needs checking. This condition matters when treating an atom as an $n$-level system; completeness of $\mathbb C^n$ does not itself justify the physical truncation.

> [!note]
> The source describes $\mathbb C^n$ as a system with “exactly $n$ accessible states.” Here $n$ counts independent basis states, or perfectly distinguishable pure states. Their superpositions give infinitely many possible pure states.
