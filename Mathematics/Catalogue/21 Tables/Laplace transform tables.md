---
title: "Laplace transform tables and inverse calculations"
catalogue_ids:
  - "21.13"
---

> [!TLDR]
> A Laplace-transform row must include a convergence half-plane; linearity, scaling, and partial fractions turn the table into a method for solving initial-value equations.

## Definition and entry route

Begin with [[08.07 Improper integrals]], [[03.04 Exponential and logarithmic functions]], and [[07.03 The derivative]]. A Laplace transform converts a function of a nonnegative variable into a function of a parameter. It can turn a differential equation into an algebraic equation. All variables here are mathematical; no physical time or unit is assumed.

We use the **one-sided** definition

$$
F(s)=\mathcal L\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt.
$$

For a complex parameter $s$, convergence depends on its real part, denoted $\operatorname{Re}s$. A region of convergence belongs to the transform. This sign and one-sided interval agree with [NIST DLMF §1.14(iii)](https://dlmf.nist.gov/1.14#iii). A two-sided transform is a different definition. Do not borrow its rows without checking the integration limits.

## A representative table

| $f(t)$ for $t\ge0$ | $F(s)$ | Convergence |
| --- | --- | --- |
| $1$ | $1/s$ | $\operatorname{Re}s>0$ |
| $t^n$, integer $n\ge0$ | $n!/s^{n+1}$ | $\operatorname{Re}s>0$ |
| $e^{at}$, real $a$ | $1/(s-a)$ | $\operatorname{Re}s>a$ |
| $\cos bt$, real $b$ | $s/(s^2+b^2)$ | $\operatorname{Re}s>0$ |
| $\sin bt$, real $b$ | $b/(s^2+b^2)$ | $\operatorname{Re}s>0$ |
| $e^{at}\cos bt$ | $(s-a)/[(s-a)^2+b^2]$ | $\operatorname{Re}s>a$ |

The first row follows by integrating $e^{-st}$. The power row follows from [[Gamma function tables]]. The trigonometric rows can be derived from the exponential forms of sine and cosine or by two integrations by parts. To see the exponential shift directly, combine factors: $e^{-st}e^{at}=e^{-(s-a)t}$. Hence $\mathcal L\{e^{at}f(t)\}(s)=F(s-a)$ wherever the corresponding integral converges.

Linearity gives $\mathcal L\{af+bg\}=aF+bG$ on a common convergence region. For $c>0$, substituting $u=ct$ gives $\mathcal L\{f(ct)\}(s)=F(s/c)/c$. The prefactor comes from $dt=du/c$. It cannot be omitted.

## Derivative and initial value

If $f$ is continuously differentiable, of suitable exponential growth, and the boundary term at infinity vanishes in the convergence half-plane, integration by parts gives

$$
\mathcal L\{f'\}(s)=sF(s)-f(0).
$$

This identity explains the value of the method for an initial-value problem. It also shows why the initial value is not optional. With a second derivative, apply it again to obtain $s^2F-sf(0)-f'(0)$. For discontinuous functions, use a formulation that explicitly accounts for jumps; do not silently apply a smooth derivative rule.

## Worked example: solve an initial-value equation

Solve $y'+2y=1$ on $t\ge0$, with $y(0)=0$. Write $Y=\mathcal L\{y\}$. The derivative row gives

$$
sY+2Y=\frac1s,\qquad
Y=\frac1{s(s+2)}=\frac12\left(\frac1s-\frac1{s+2}\right).
$$

The inverse table gives $y(t)=\tfrac12(1-e^{-2t})$. Check both parts of the problem: $y(0)=0$, and $y'=e^{-2t}$, so $y'+2y=e^{-2t}+1-e^{-2t}=1$. The transform exists for $\operatorname{Re}s>0$. Partial fractions reduced the inverse calculation to two known rows. If the numerator or denominator is more complicated, first divide polynomials and identify repeated factors; see [[Rational integral tables]].

## Delays and limits of table matching

Let $u(t-a)$ be the step function, equal to 0 for $t<a$ and 1 for $t>a$, with $a>0$. Then $\mathcal L\{u(t-a)f(t-a)\}=e^{-as}F(s)$. Substituting $v=t-a$ after the lower limit moves to $a$ proves the formula. This is a delay of the whole function argument. It is different from multiplying $f(t)$ by a step without shifting its argument.

A formula for $F(s)$ alone need not identify a unique two-sided original function without a convergence region. This lesson stays one-sided and uses locally integrable functions with appropriate exponential growth. Values at isolated points do not alter the integral transform, so an inverse is interpreted with suitable continuity information.

## Practice

1. Find the transform of $3t^2-2e^{-t}$ and a common convergence half-plane.
2. Invert $F(s)=2/(s+3)-1/s$ and verify its transform directly from the table.

> [!example]- Worked answers
> 1. By linearity, $F(s)=6/s^3-2/(s+1)$, with $\operatorname{Re}s>0$ sufficient for both terms.
> 2. The inverse is $f(t)=2e^{-3t}-1$. Its transform is $2/(s+3)-1/s$ on $\operatorname{Re}s>0$. The negative constant does not invalidate a transform; positivity is not required.
