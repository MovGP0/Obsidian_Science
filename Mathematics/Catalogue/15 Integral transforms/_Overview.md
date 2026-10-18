---
title: "Integral transforms: learning route"
catalogue_ids:
  - "15"
---

> [!TLDR]
> A transform expresses a function or sequence through weighted measurements that can make an equation easier to solve.

## Start from familiar operations

A list such as $(2,4,6,8)$ has several useful descriptions. Its four entries are one description. Its mean, pair differences, and difference between the two halves give another. A transform makes this change of description systematic. Integral transforms do the same for functions. They form weighted integrals, then organize the results into a new function.

This chapter begins with concrete integrals. It then teaches five families: Laplace, Fourier, Z, wavelet, and Walsh transforms. The Z-transform is a sum over a sequence, rather than an integral over a continuous variable. It belongs here because it uses the same method: transform a problem, solve the simpler problem, then recover the original object.

No physical interpretation is assumed. The variable $t$ is a real number, $n$ is an integer index, and a signal means a numerical function or list. These mathematical objects do not require physical units.

## Prerequisite route

Start with [[06.01 Complex arithmetic]], [[06.05 Euler’s formula]], [[07.03 The derivative]], and [[08.01 Definite integrals]]. Continue with [[08.05 Integration by parts]] and [[08.07 Improper integrals]]. These notes supply the meaning of $i$, complex exponentials, derivatives, and integrals with an infinite bound. For the discrete lessons, use [[09.01 Sequences]] and [[09.02 Infinite series]].

You can read the first worked examples with school algebra and these short prerequisite routes. Differential-equation applications also use [[14.02 Solutions and data]] and [[14.04 Constant-coefficient equations]]. For equations with several variables, first read [[12.02 Partial derivatives]] and [[15.01 Basic language]]. Proofs of advanced inversion theorems are outside this introductory chapter; their usable hypotheses are stated where needed.

## How to study the chapter

Read [[Integral kernels and inverse transforms]] first. Follow it with [[Laplace transform rules and impulses]] and [[Invert Laplace transforms]]. These lessons teach exponential weights on $t\geq0$. [[Solve equations with Laplace transforms]] explains how initial values enter the transformed equation.

Next read [[Fourier integrals and transform rules]] and [[Solve equations with Fourier transforms]]. Fourier methods use oscillating weights over the entire real line. They connect to [[16.10 The nonperiodic extension]], which develops their relation to Fourier series.

For sequences, use [[Z-transform rules and inversion]] before [[Solve difference equations with Z-transforms]]. Finally, [[Wavelets and local transforms]] examines the location and scale of changes, while [[Walsh functions and step expansions]] uses patterns made from $+1$ and $-1$.

## A first transform you can reverse

For two numbers $x_0,x_1$, define

$$
a=\frac{x_0+x_1}{\sqrt2},\qquad d=\frac{x_0-x_1}{\sqrt2}.
$$

Adding the equations gives $x_0=(a+d)/\sqrt2$. Subtracting them gives $x_1=(a-d)/\sqrt2$. Thus neither number is lost. The coefficient $a$ measures their common part; $d$ measures their difference. For $(x_0,x_1)=(3,1)$, the coefficients are $(2\sqrt2,\sqrt2)$ and reconstruction gives $(3,1)$.

This is a two-entry Haar transform. Its inverse is elementary. Continuous transforms need extra conditions because they involve infinitely many values and limiting operations. An algebraic-looking transform formula can therefore need a convergence domain and an inversion theorem.

## Checks that matter

Write the forward definition before using a transform table. Check the integration bounds, exponential sign, scale factors, and convergence region. Distinguish a one-sided transform from a two-sided transform. Recover the original function and substitute it into the original equation. This last check can detect a missing initial value even when every algebraic step in the transformed domain looks correct.

## Practice

1. Find the two-entry coefficients of $(5,5)$ and recover the input.
2. A transform gives the same data for two different allowed inputs. Can it have a unique inverse on that class?

> [!example]- Worked answers
> 1. The common coefficient is $10/\sqrt2=5\sqrt2$ and the difference is $0$. Each inverse expression is $5\sqrt2/\sqrt2=5$.
> 2. No. An inverse would have to send the same output to both inputs. Restrict the allowed inputs or retain more measurements before claiming unique recovery.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#15. Integral transforms|the detailed catalogue]].

- [[Integral kernels and inverse transforms|Integral kernels and inverse transforms]] — 15.1, 15.1.1, 15.1.2, 15.1.3, 15.1.4, 15.1.5, 15.1.6.
- [[Laplace transform rules and impulses|Laplace transform rules and impulses]] — 15.2, 15.2.1, 15.2.1.1, 15.2.1.2, 15.2.1.3, 15.2.1.4.
- [[Invert Laplace transforms|Invert Laplace transforms]] — 15.2.2, 15.2.2.1, 15.2.2.2, 15.2.2.3, 15.2.2.4.
- [[Solve equations with Laplace transforms|Solve equations with Laplace transforms]] — 15.2.3, 15.2.3.1, 15.2.3.2, 15.2.3.3.
- [[Fourier integrals and transform rules|Fourier integrals and transform rules]] — 15.3, 15.3.1, 15.3.1.1, 15.3.1.2, 15.3.1.3, 15.3.1.4.
- [[Solve equations with Fourier transforms|Solve equations with Fourier transforms]] — 15.3.2, 15.3.2.1, 15.3.2.2.
- [[Z-transform rules and inversion|Z-transform rules and inversion]] — 15.4, 15.4.1, 15.4.1.1, 15.4.1.2, 15.4.1.3, 15.4.1.4, 15.4.1.5.
- [[Solve difference equations with Z-transforms|Solve difference equations with Z-transforms]] — 15.4.2, 15.4.2.1, 15.4.2.2, 15.4.2.3.
- [[Wavelets and local transforms|Wavelets and local transforms]] — 15.5, 15.5.1, 15.5.2, 15.5.3, 15.5.5.
- [[Haar wavelets and fast discrete transforms|Haar wavelets and fast discrete transforms]] — 15.5.4, 15.5.4.1, 15.5.4.2.
- [[Walsh functions and step expansions|Walsh functions and step expansions]] — 15.6, 15.6.1, 15.6.2.
<!-- catalogue-complete-lesson-index:end -->
