---
title: "Polynomial commutators and the Hamiltonian"
---

> [!TLDR]
> The commutator product rule reduces powers to the canonical relation and gives the potential-energy gradient in the Hamiltonian commutator.

Chapter 10 — Commutators and Operator Algebra · Exercise 1 · Basic level.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

Calculate these commutators algebraically, without applying them to test functions:

**(a)** $[\hat x^3,\hat p]$.

**(b)** $[\hat x,\hat p^3]$.

**(c)** $[\hat x^2,\hat p^2]$.

**Hint:** Use the Leibniz rule and the results from parts (a) and (b).

**(d)** $[\hat H,\hat p]$, where $\hat H=\hat p^2/(2\mechanical{m})+\energy{V}(\hat x)$.

## Worked solution

Use the canonical relation $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$ and the product rules

$$
[\hat A\hat B,\hat C]=\hat A[\hat B,\hat C]+[\hat A,\hat C]\hat B,
\qquad
[\hat A,\hat B\hat C]=[\hat A,\hat B]\hat C+\hat B[\hat A,\hat C].
$$

The identity commutes with every operator. Thus the order of the remaining factors is retained until the commutator has been evaluated.

### (a) Position cubed

First reduce the square:

$$
[\hat x^2,\hat p]
=\hat x(i\mechanical{\hbar}\hat I)+(i\mechanical{\hbar}\hat I)\hat x
=2i\mechanical{\hbar}\hat x.
$$

Apply the rule once more:

$$
\begin{aligned}
[\hat x^3,\hat p]
&=\hat x^2[\hat x,\hat p]+[\hat x^2,\hat p]\hat x\\
&=i\mechanical{\hbar}\hat x^2+2i\mechanical{\hbar}\hat x^2
=3i\mechanical{\hbar}\hat x^2.
\end{aligned}
$$

### (b) Momentum cubed

The same rule gives $[\hat x,\hat p^2]=2i\mechanical{\hbar}\hat p$. Therefore,

$$
\begin{aligned}
[\hat x,\hat p^3]
&=[\hat x,\hat p^2]\hat p+\hat p^2[\hat x,\hat p]\\
&=2i\mechanical{\hbar}\hat p^2+i\mechanical{\hbar}\hat p^2
=3i\mechanical{\hbar}\hat p^2.
\end{aligned}
$$

### (c) The two squares

Expand the momentum square first:

$$
\begin{aligned}
[\hat x^2,\hat p^2]
&=[\hat x^2,\hat p]\hat p+\hat p[\hat x^2,\hat p]\\
&=2i\mechanical{\hbar}\hat x\hat p+2i\mechanical{\hbar}\hat p\hat x\\
&=2i\mechanical{\hbar}(\hat x\hat p+\hat p\hat x).
\end{aligned}
$$

Do not combine the last two products into $2\hat x\hat p$: the two operators do not commute.

### (d) The Hamiltonian

The kinetic term is a polynomial in $\hat p$, so its commutator with $\hat p$ is zero:

$$
[\hat H,\hat p]
=\frac{1}{2\mechanical{m}}[\hat p^2,\hat p]
+[\energy{V}(\hat x),\hat p]
=[\energy{V}(\hat x),\hat p].
$$

For a polynomial potential, linearity and the power rule give

$$
\left[\sum_{n=0}^{N}v_n\hat x^n,\hat p\right]
=i\mechanical{\hbar}\sum_{n=1}^{N}n v_n\hat x^{n-1}
=i\mechanical{\hbar}\energy{V}'(\hat x).
$$

Here $v_n$ are expansion coefficients. The same identity applies to a sufficiently regular potential on a common domain where the derivative and commutator exist.

> [!note]
> Position and momentum are unbounded operators. These algebraic identities are statements on a common invariant domain, such as suitable smooth, rapidly decreasing wavefunctions. They do not assert equality of unrestricted operator products.

## Answer

$$
\begin{aligned}
\text{(a)}\quad[\hat x^3,\hat p]&=3i\mechanical{\hbar}\hat x^2,\\
\text{(b)}\quad[\hat x,\hat p^3]&=3i\mechanical{\hbar}\hat p^2,\\
\text{(c)}\quad[\hat x^2,\hat p^2]&=2i\mechanical{\hbar}(\hat x\hat p+\hat p\hat x),\\
\text{(d)}\quad[\hat H,\hat p]&=i\mechanical{\hbar}\energy{V}'(\hat x).
\end{aligned}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass in the Hamiltonian. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The position-dependent part of the Hamiltonian. |
| $\energy{V}'$ | $\unit{J\,m^{-1}}$ | Potential-energy gradient | The spatial derivative of the potential energy. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the canonical commutator. |
