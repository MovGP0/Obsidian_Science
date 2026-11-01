---
title: "Commutators of powers by induction"
---

> [!TLDR]
> Induction converts the canonical commutator into derivative rules for powers of position and momentum.

Chapter 10 — Commutators and Operator Algebra · Exercise 4 · Intermediate level.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

Use $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$ to prove:

**(a)** $[\hat x,f(\hat p)]=i\mechanical{\hbar}f'(\hat p)$ for $f(\mechanical{p})=\mechanical{p}^n$, by induction on $n$.

**(b)** $[\hat p,g(\hat x)]=-i\mechanical{\hbar}g'(\hat x)$ for $g(\mechanical{x})=\mechanical{x}^n$.

## Worked solution

We prove both formulas for nonnegative integer powers. The product rule keeps all operator factors in their correct order.

### (a) Powers of momentum

For $n=0$, $f(\hat p)=\hat I$ and its derivative is zero, so both sides vanish. For $n=1$, the required formula is exactly the given relation:

$$
[\hat x,\hat p]=i\mechanical{\hbar}\hat I.
$$

Assume the claim holds for one integer $n\geq1$:

$$
[\hat x,\hat p^n]=i\mechanical{\hbar}n\hat p^{n-1}.
$$

Factor the next power as $\hat p^{n+1}=\hat p^n\hat p$. The product rule gives

$$
\begin{aligned}
[\hat x,\hat p^{n+1}]
&=[\hat x,\hat p^n]\hat p+\hat p^n[\hat x,\hat p]\\
&=(i\mechanical{\hbar}n\hat p^{n-1})\hat p
+\hat p^n(i\mechanical{\hbar}\hat I)\\
&=i\mechanical{\hbar}n\hat p^n+i\mechanical{\hbar}\hat p^n\\
&=i\mechanical{\hbar}(n+1)\hat p^n.
\end{aligned}
$$

This is the claim for $n+1$. Mathematical induction therefore proves it for every required power. Since $f'(\mechanical{p})=n\mechanical{p}^{n-1}$, evaluation at $\hat p$ yields $[\hat x,f(\hat p)]=i\mechanical{\hbar}f'(\hat p)$.

### (b) Powers of position

Reverse the canonical commutator first:

$$
[\hat p,\hat x]=-[\hat x,\hat p]=-i\mechanical{\hbar}\hat I.
$$

Again $n=0$ gives zero on both sides, and $n=1$ is the displayed relation. Assume

$$
[\hat p,\hat x^n]=-i\mechanical{\hbar}n\hat x^{n-1}.
$$

Then

$$
\begin{aligned}
[\hat p,\hat x^{n+1}]
&=[\hat p,\hat x^n]\hat x+\hat x^n[\hat p,\hat x]\\
&=(-i\mechanical{\hbar}n\hat x^{n-1})\hat x
+\hat x^n(-i\mechanical{\hbar}\hat I)\\
&=-i\mechanical{\hbar}(n+1)\hat x^n.
\end{aligned}
$$

This proves the second formula, because $g'(\mechanical{x})=n\mechanical{x}^{n-1}$.

> [!note]
> The proof concerns nonnegative integer powers on a common invariant operator domain. Linearity also proves the formulas for polynomials. Extension to a general function requires additional regularity and domain conditions.

Induction is effective because the product rule turns the next power into the previous power plus one canonical commutator. The proof uses a special feature: the basic commutator is a scalar identity and therefore commutes with every remaining factor.

For general operators this simplification can fail. The product rule gives a sum with the basic commutator in different positions; those terms need not be equal. Thus one cannot replace that sum by a derivative-like multiple without checking commutation. The base case of the zeroth power is also separate: it gives the zero commutator with the identity and does not require an inverse operator. These two checks explain both the power rule and its boundary of use.

## Answer

For every nonnegative integer $n$,

$$
[\hat x,\hat p^n]=i\mechanical{\hbar}n\hat p^{n-1},
\qquad
[\hat p,\hat x^n]=-i\mechanical{\hbar}n\hat x^{n-1}.
$$

For $n=0$, interpret the right sides as zero, without a negative power. These are $i\mechanical{\hbar}f'(\hat p)$ and $-i\mechanical{\hbar}g'(\hat x)$ for the stated monomials.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The argument of the position monomial. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The argument of the momentum monomial. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the canonical commutator. |
