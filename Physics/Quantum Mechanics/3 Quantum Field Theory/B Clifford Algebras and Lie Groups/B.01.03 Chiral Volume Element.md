---
title: "Chiral Volume Element"
---

> [!TLDR]
> In even dimensions, a phase-adjusted product of all Clifford generators defines a chirality element that squares to the identity.

In four-dimensional Minkowski space, define
$$
\gamma^5\equiv i\gamma^0\gamma^1\gamma^2\gamma^3
=-\frac{i}{4!}\epsilon_{\mu\nu\rho\sigma}
\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma.
\tag{B.4}
$$
It satisfies
$$
(\gamma^5)^2=\mathbf1,
\tag{B.5}
$$
$$
\{\gamma^5,\gamma^\mu\}=0,
\tag{B.6}
$$
$$
(\gamma^5)^\dagger=\gamma^5.
\tag{B.7}
$$

> [!note] Correction to the source
> The source prints a plus sign before the Levi-Civita expression in (B.4). With $\epsilon^{0123}=+1$ and $\epsilon_{0123}=-1$, that sign must be negative. The expression here agrees with (A.16).

In even dimension $d$, the chiral volume element is
$$
\Gamma=i^{d/2+q}\gamma^1\gamma^2\cdots\gamma^d,
\tag{B.8}
$$
where $q$ is the number of negative-signature directions.
It satisfies $\Gamma^2=\mathbf1$.

## Phase, orientation, and a check

The general phase in (B.8) is a complex-algebra convention in an oriented orthonormal basis, with $p$ positive and $q$ negative squares. Reversing the order of the $d$ generators gives $d(d-1)/2$ interchanges. Consequently, for $\omega=\gamma^1\cdots\gamma^d$,
$$
\omega^2=(-1)^{d(d-1)/2+q}\mathbf1.
$$
For even $d$, multiplication by $i^{d/2+q}$ makes the total square $+\mathbf1$. This is the reason for the phase, rather than a separate postulate. Moving one generator through the other $d-1$ factors also gives $\Gamma\gamma^\mu=-\gamma^\mu\Gamma$.

For $d=4$, $q=3$, (B.8) gives the phase $i^5=i$, consistent with (B.4) after labeling the generators $0,1,2,3$. Reversal of orientation changes the sign of the volume element and exchanges the names of its eigenspaces. The four-dimensional Hermiticity statement further uses $(\gamma^0)^\dagger=\gamma^0$ and $(\gamma^i)^\dagger=-\gamma^i$; it does not follow from the abstract Clifford relation alone.

In odd dimension the volume product instead commutes with all generators. It cannot supply the same anticommuting chirality operator within one irreducible module. This distinction limits the Weyl construction used later.
