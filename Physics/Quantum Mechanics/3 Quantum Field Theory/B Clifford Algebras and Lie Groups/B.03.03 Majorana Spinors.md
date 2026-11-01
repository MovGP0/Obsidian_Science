---
title: "Majorana Spinors"
---

> [!TLDR]
> A Majorana spinor equals its charge conjugate. In four-dimensional Lorentzian spacetime, this reality condition reduces a Dirac spinor to four real components.

A **Majorana spinor** satisfies the reality condition
$$
\signal{\psi}^c\equiv C\bar{\signal{\psi}}^{\,T}=\signal{\psi}.
\tag{B.32}
$$
Here $C$ is the charge-conjugation matrix. In the stated matrix convention,
$$
C\gamma^\mu C^{-1}=-(\gamma^\mu)^T,
\qquad
C^T=-C.
\tag{B.33}
$$
For $d=4$ with signature $(3,1)$, the Majorana condition is compatible with Lorentz invariance and leaves four real spinor components.

> [!note]
> The source uses $(3,1)$ here. Ordinary four-dimensional Lorentzian Majorana spinors can also be formulated with the appendix's mostly-minus convention, with the corresponding gamma- and charge-conjugation conventions.

## The consistency test for a reality condition

In the mostly-minus convention, write (B.32) as $\signal{\psi}^c=B\signal{\psi}^*$, with $B=C(\gamma^0)^T$. Applying it twice gives $BB^*\signal{\psi}$. A nonzero ordinary Majorana spinor therefore requires $BB^*=\mathbf1$ and compatibility of this conjugation with the Lorentz action. If instead $BB^*=-\mathbf1$, a single spinor cannot be fixed by it. This is the algebraic reason why a reality label depends on signature and dimension; see [Van Proeyen, §3.2, Eqs. (3.19)–(3.21)](https://arxiv.org/pdf/hep-th/9910030#page=20).

For a matrix check in the Dirac basis, choose $C=i\gamma^2\gamma^0$. Then $B=i\gamma^2$, which is real in that basis and squares to $\mathbf1$. The condition relates pairs of complex components and leaves four independent real components. It does not require each displayed component to be real in every basis.

An arbitrary phase multiplication does not preserve this fixed-point condition: conjugation reverses the phase. Thus the free choice of a complex Dirac field and that of a Majorana field have different internal phase symmetries, even before dynamics is specified.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}^c,\bar{\signal{\psi}}$ | — | Majorana spinor and charge conjugate | The spinor, its charge conjugate, and its Dirac adjoint; the reality condition equates the first two. |
