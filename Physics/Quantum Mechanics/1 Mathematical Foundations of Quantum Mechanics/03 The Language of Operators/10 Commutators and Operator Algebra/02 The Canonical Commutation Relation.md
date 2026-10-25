---
title: "The Canonical Commutation Relation"
---

> [!TLDR]
> Position and momentum satisfy the canonical commutation relation. The product rules extend it to powers and suitable functions of these operators, and recover the mean position–momentum relation.

> [!theorem] Theorem 10.1 | Canonical commutation relation
> For the position operator, multiplication by $\mechanical{x}$, and the momentum operator $\hat p=-i\mechanical{\hbar}\partial_{\mechanical{x}}$,
>
> $$
> \boxed{[\hat x,\hat p]=i\mechanical{\hbar}\hat I.}
> $$

**Proof.** Apply the commutator to a suitable test function:

$$
\begin{aligned}
[\hat x,\hat p]\signal{\psi}
&=\hat x(\hat p\signal{\psi})-\hat p(\hat x\signal{\psi})\\
&=\mechanical{x}\left(-i\mechanical{\hbar}\frac{d\signal{\psi}}{d\mechanical{x}}\right)
-\left(-i\mechanical{\hbar}\frac{d}{d\mechanical{x}}(\mechanical{x}\signal{\psi})\right)\\
&=-i\mechanical{\hbar}\mechanical{x}\signal{\psi}'
+i\mechanical{\hbar}(\signal{\psi}+\mechanical{x}\signal{\psi}')\\
&=i\mechanical{\hbar}\signal{\psi}.
\end{aligned}
$$

The key step is the product rule: $d(\mechanical{x}\signal{\psi})/d\mechanical{x}=\signal{\psi}+\mechanical{x}\signal{\psi}'$. The additional derivative term makes position and differentiation fail to commute. $\square$

## Derived relations

The Leibniz rules give

$$
[\hat x^n,\hat p]=i\mechanical{\hbar}n\hat x^{n-1}.
\tag{10.7}
$$

$$
[\hat x,\hat p^n]=i\mechanical{\hbar}n\hat p^{n-1}.
\tag{10.8}
$$

$$
[\hat x,f(\hat p)]=i\mechanical{\hbar}f'(\hat p).
\tag{10.9}
$$

$$
[\hat p,g(\hat x)]=-i\mechanical{\hbar}g'(\hat x).
\tag{10.10}
$$

The power identities hold for nonnegative integer powers on a suitable common domain. The function identities require differentiability and operator-domain conditions; they do not apply to arbitrary functions without qualification.

## Example — Prove [x̂², p̂] = 2iℏx̂

Use (10.4) with $\hat A=\hat B=\hat x$ and $\hat C=\hat p$:

$$
\begin{aligned}
[\hat x^2,\hat p]
&=\hat x[\hat x,\hat p]+[\hat x,\hat p]\hat x\\
&=\hat x(i\mechanical{\hbar})+(i\mechanical{\hbar})\hat x
=2i\mechanical{\hbar}\hat x.
\end{aligned}
$$

Induction gives (10.7), in direct analogy with the derivative of $x^n$.

## Example — Calculate [Ĥ, x̂] for a particle in a potential

Let

$$
\hat H=\frac{\hat p^2}{2\mechanical{m}}+\energy{V}(\hat x).
$$

Then

$$
\begin{aligned}
[\hat H,\hat x]
&=\left[\frac{\hat p^2}{2\mechanical{m}},\hat x\right]+[\energy{V}(\hat x),\hat x]\\
&=\frac1{2\mechanical{m}}[\hat p^2,\hat x]+0\\
&=\frac1{2\mechanical{m}}(-2i\mechanical{\hbar}\hat p)
=-\frac{i\mechanical{\hbar}}{\mechanical{m}}\hat p.
\end{aligned}
$$

Functions of $\hat x$ commute with $\hat x$. For an observable without explicit time dependence, the Ehrenfest theorem gives

$$
\frac{d\langle\hat A\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\langle[\hat H,\hat A]\rangle.
$$

Therefore,

$$
\frac{d\langle\hat x\rangle}{d\signal{t}}
=\frac{i}{\mechanical{\hbar}}\left(-\frac{i\mechanical{\hbar}}{\mechanical{m}}\right)\langle\hat p\rangle
=\frac{\langle\hat p\rangle}{\mechanical{m}}.
$$

The kinematic relation $\mechanical{m}\,d\langle\hat x\rangle/d\signal{t}=\langle\hat p\rangle$ follows from the commutator at the level of expectation values.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\langle\hat x\rangle$ | $\unit{m}$ | Position | The position coordinate and its mean. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The momentum expectation value. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the canonical commutator. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The position-space test state in one dimension. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The mass of the particle. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential-energy function evaluated at the position operator. |
| $\signal{t}$ | $\unit{s}$ | Time | The time parameter in the Ehrenfest relation. |
| $\langle\hat A\rangle$ | — | Observable mean | The expectation value, with the unit of its observable. |
