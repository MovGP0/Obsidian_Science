---
title: "Exponential conjugation and the momentum shift"
---

> [!TLDR]
> A scalar commutator makes exponential conjugation terminate after one correction and gives the corrected momentum-shift sign.

Chapter 10 — Commutators and Operator Algebra · Exercise 8 · Challenge.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

Suppose $[\hat A,\hat B]=c\hat I$, where $c\in\mathbb C$ is constant.

**(a)** Prove $[\hat A,\hat B^n]=nc\hat B^{n-1}$.

**(b)** Deduce $e^{\hat A}\hat B e^{-\hat A}=\hat B+c\hat I$.

**(c)** Apply this to $\hat A=i\signal{k}\hat x$ and $\hat B=\hat p$. The source asks you to show

$$
e^{i\signal{k}\hat x}\hat p e^{-i\signal{k}\hat x}
=\hat p+\mechanical{\hbar}\signal{k}\hat I.
$$

> [!note]
> Part (c) has a sign error as printed. With $[\hat x,\hat p]=i\mechanical{\hbar}\hat I$ and this order of the exponentials, the shift has a **minus** sign. Reversing the exponentials gives a plus sign. Parts (a) and (b) are consistent with the stated commutator. For unbounded operators, interpret the exponential identities on suitable domains.

## Worked solution

### (a) The power commutator

For $n=1$, the formula is the assumed $[\hat A,\hat B]=c\hat I$. Suppose it holds for an integer $n\geq1$. Then

$$
\begin{aligned}
[\hat A,\hat B^{n+1}]
&=[\hat A,\hat B^n]\hat B+\hat B^n[\hat A,\hat B]\\
&=nc\hat B^{n-1}\hat B+\hat B^n c\hat I\\
&=(n+1)c\hat B^n.
\end{aligned}
$$

The scalar $c$ commutes with every operator, so the two terms can be combined. Induction proves the formula for all $n\geq1$. For $n=0$, the commutator with $\hat I$ is zero.

### (b) Exponential conjugation

To connect the power identity with the required exponential, interchange the operators in part (a). Since $[\hat B,\hat A]=-c\hat I$,

$$
[\hat B,\hat A^n]=-nc\hat A^{n-1},
\qquad
[\hat A^n,\hat B]=nc\hat A^{n-1}.
$$

Expand the exponential and commute each power:

$$
\begin{aligned}
[e^{\hat A},\hat B]
&=\sum_{n=1}^{\infty}\frac{[\hat A^n,\hat B]}{n!}\\
&=c\sum_{n=1}^{\infty}\frac{\hat A^{n-1}}{(n-1)!}
=c e^{\hat A}.
\end{aligned}
$$

Thus $e^{\hat A}\hat B-\hat B e^{\hat A}=c e^{\hat A}$. Multiply on the right by $e^{-\hat A}$:

$$
e^{\hat A}\hat B e^{-\hat A}-\hat B=c\hat I,
\qquad
e^{\hat A}\hat B e^{-\hat A}=\hat B+c\hat I.
$$

Equivalently, the nested-commutator series stops after the first term, because $[\hat A,c\hat I]=0$.

### (c) Correct sign of the momentum shift

Use the canonical relation without changing the order of the exponentials:

$$
[i\signal{k}\hat x,\hat p]
=i\signal{k}[\hat x,\hat p]
=i\signal{k}(i\mechanical{\hbar}\hat I)
=-\mechanical{\hbar}\signal{k}\hat I.
$$

Hence $c=-\mechanical{\hbar}\signal{k}$, and part (b) gives

$$
e^{i\signal{k}\hat x}\hat p e^{-i\signal{k}\hat x}
=\hat p-\mechanical{\hbar}\signal{k}\hat I.
$$

As a separate check, use $\hat p=-i\mechanical{\hbar}\,d/d\mechanical{x}$ on a suitable wavefunction:

$$
\begin{aligned}
e^{i\signal{k}\mechanical{x}}\left(-i\mechanical{\hbar}\frac{d}{d\mechanical{x}}\right)
\left(e^{-i\signal{k}\mechanical{x}}\psi(\mechanical{x})\right)
&=e^{i\signal{k}\mechanical{x}}(-i\mechanical{\hbar})e^{-i\signal{k}\mechanical{x}}
\left(-i\signal{k}\psi+\frac{d\psi}{d\mechanical{x}}\right)\\
&=-\mechanical{\hbar}\signal{k}\psi-i\mechanical{\hbar}\frac{d\psi}{d\mechanical{x}}.
\end{aligned}
$$

The scalar product $(-i)(-i)=-1$ confirms the minus sign. Reversing the exponentials instead gives $e^{-i\signal{k}\hat x}\hat p e^{i\signal{k}\hat x}=\hat p+\mechanical{\hbar}\signal{k}\hat I$.

> [!note] Operator domains
> The series proof is immediate for bounded operators. For unbounded operators, it is a formal algebraic proof unless convergence and common domains are specified. In the position representation, real $\signal{k}$ preserves the Schwartz domain, where the direct momentum calculation is valid.

## Answer

$$
[\hat A,\hat B^n]=nc\hat B^{n-1}\quad(n\geq1),
\qquad
e^{\hat A}\hat B e^{-\hat A}=\hat B+c\hat I.
$$

With $\hat A=i\signal{k}\hat x$ and $\hat B=\hat p$,

$$
\boxed{e^{i\signal{k}\hat x}\hat p e^{-i\signal{k}\hat x}
=\hat p-\mechanical{\hbar}\signal{k}\hat I}.
$$

This corrects the printed plus sign while retaining the stated canonical commutator and exponential order.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The inverse-length parameter of the exponential. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the direct derivative check. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that converts wavenumber to momentum. |
| $\psi(\mechanical{x})$ | $\unit{m^{-1/2}}$ | Position wavefunction | A normalized one-dimensional state used for the sign check. |
