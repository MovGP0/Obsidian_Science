---
title: "Compatible Operators"
---

> [!TLDR]
> Compatible observables commute and admit a common eigenbasis in the finite-dimensional setting. Noncommuting observables can still share individual eigenstates, but not a complete common eigenbasis.

> [!definition] Definition 10.2 | Compatible operators
> Two observables $\hat A$ and $\hat B$ are **compatible** if $[\hat A,\hat B]=0$.

> [!theorem] Theorem 10.2 | Compatibility and common bases
> For Hermitian matrices, $[\hat A,\hat B]=0$ if and only if there is a common orthonormal eigenbasis. The source states this for discrete spectra; the continuous case requires spectral projections.

In the ideal measurement description, commuting observables can be measured simultaneously with arbitrarily small uncertainty in suitable common eigenstates. If $[\hat A,\hat B]\ne0$, there is no complete common eigenbasis.

Individual common eigenstates may still exist. A necessary condition for such a state is

$$
[\hat A,\hat B]|\psi\rangle=0.
$$

For position and momentum, the commutator is a nonzero multiple of the identity, so no nonzero common eigenstate satisfies this condition.

> [!note]
> The condition that the commutator annihilates a particular state is necessary, not sufficient, for that state to be a common eigenvector. For unbounded self-adjoint operators, vanishing of a formal commutator on a common domain alone need not give compatibility. The appropriate condition is commutation of their spectral projections.

## Example — Energy and momentum commute for a free particle

For $\energy{V}=0$,

$$
\hat H=\frac{\hat p^2}{2\mechanical{m}}.
$$

Thus,

$$
\begin{aligned}
[\hat H,\hat p]
&=\frac1{2\mechanical{m}}[\hat p^2,\hat p]\\
&=\frac1{2\mechanical{m}}\left(\hat p[\hat p,\hat p]+[\hat p,\hat p]\hat p\right)=0.
\end{aligned}
$$

The common generalized eigenstates are plane waves $e^{i\signal{k}\mechanical{x}}$, with

$$
\energy{E}=\frac{\mechanical{\hbar}^2\signal{k}^2}{2\mechanical{m}},
\qquad\mechanical{p}=\mechanical{\hbar}\signal{k}.
$$

A free particle with definite momentum also has definite energy. On the full real line, these plane waves are generalized states, not normalizable vectors in $L^2(\mathbb R)$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential, set to zero for the free particle. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass of the free particle. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the plane wave. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The spatial phase rate of the plane wave. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant relating wavenumber to momentum. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The generalized momentum eigenvalue. |
| $\energy{E}$ | $\unit{J}$ | Energy | The free-particle energy eigenvalue. |
