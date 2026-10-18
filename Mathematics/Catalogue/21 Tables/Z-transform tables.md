---
title: "Z-transform tables and convergence regions"
catalogue_ids:
  - "21.15"
---

> [!TLDR]
> A Z-transform turns a sequence into a power series in z⁻¹; its region of convergence is needed to identify the sequence and use table rows correctly.

## From a list to a transform

A sequence assigns a number to each integer index. Review [[09.01 Sequences]] and [[Geometric series]]. Let $x_n$ be a two-sided sequence indexed by all integers. Its bilateral Z-transform is

$$
X(z)=\sum_{n=-\infty}^{\infty}x_nz^{-n},
$$

where $z$ is a nonzero complex number for which the series converges. The **region of convergence** (ROC) is part of the answer. For a sequence supported on $n\ge0$, the bilateral series reduces to the one-sided series $\sum_{n=0}^{\infty}x_nz^{-n}$. In this lesson, a right-sided table row is explicitly marked. No physical sampling interval is assumed.

Let $u_n=1$ for $n\ge0$ and 0 for $n<0$. Let $\delta_n=1$ at $n=0$ and 0 elsewhere. These are sequences, not the continuous Dirac delta. For $x_n=a^nu_n$, the geometric-series ratio is $a/z$. Thus

$$
X(z)=\sum_{n=0}^{\infty}(a/z)^n=\frac1{1-a/z}=\frac z{z-a},\qquad |z|>|a|.
$$

The inequality comes from geometric convergence and must not be dropped after the sum becomes a rational expression.

## A representative right-sided table

| Sequence | Transform | ROC |
| --- | --- | --- |
| $\delta_n$ | $1$ | All nonzero $z$ |
| $\delta_{n-k}$, integer $k\ge0$ | $z^{-k}$ | All nonzero $z$ |
| $u_n$ | $z/(z-1)$ | $\lvert z\rvert >1$ |
| $a^nu_n$ | $z/(z-a)$ | $\lvert z\rvert >\lvert a\rvert $ |
| $na^nu_n$ | $az/(z-a)^2$ | $\lvert z\rvert >\lvert a\rvert $, for $a\ne0$ |
| $\cos(n\theta)u_n$ | $z(z-\cos\theta)/(z^2-2z\cos\theta+1)$ | $\lvert z\rvert >1$ sufficient |
| $\sin(n\theta)u_n$ | $z\sin\theta/(z^2-2z\cos\theta+1)$ | $\lvert z\rvert >1$ sufficient |

The last two rows follow by writing sine and cosine in terms of $e^{in\theta}$ and $e^{-in\theta}$, then summing geometric series. At degenerate values such as $\theta=0$, cancellations or a zero sequence can enlarge the ROC. The table states a sufficient common region rather than claiming maximality in those cases.

Differentiate $X(z)$ term by term inside its convergence region: $-zX'(z)=\sum n x_nz^{-n}$. Applying it to $z/(z-a)$ gives $az/(z-a)^2$. For $a=0$, specify the sequence directly, including its value at $n=0$, rather than relying on an ambiguous $0^0$.

## Same rational function, different sequence

For $a\ne0$, consider the left-sided sequence $x_n=-a^n$ for $n\le-1$, and 0 otherwise. With $m=-n\ge1$,

$$
X(z)=-\sum_{m=1}^{\infty}(z/a)^m
=-\frac{z/a}{1-z/a}=\frac z{z-a},\qquad |z|<|a|.
$$

This is the same rational expression as the right-sided row, but a different ROC and a different sequence. The table cannot be inverted correctly from the rational formula alone. In more complicated rational functions, convergence regions are annuli bounded by pole magnitudes.

## Worked example: a recurrence

Let $x_0=1$, $x_n=0$ for $n<0$, and $x_n=\tfrac12x_{n-1}$ for $n\ge1$. The recurrence produces $1,1/2,1/4,\ldots$, so the answer should be $x_n=2^{-n}u_n$. Write the whole-line relation as

$$
x_n-\tfrac12x_{n-1}=\delta_n.
$$

The bilateral shift rule gives $X(z)-\tfrac12z^{-1}X(z)=1$. Therefore $X=z/(z-1/2)$ with $|z|>1/2$, and the right-sided table recovers the sequence. Check $n=0$ separately: the shifted term is zero and the equation gives 1. Starting a recurrence transform at $n=1$ without its initial term would lose this information.

For a one-sided transform of an arbitrary sequence, shifts require explicit initial-value terms. The clean bilateral shift rule used above works because the zero extension and the impulse are stated. Mixing unilateral and bilateral shift formulas is a common error.

## Practice

1. Transform $x_n=3(1/4)^nu_n-2(1/2)^nu_n$, and state a common ROC.
2. If $X(z)=z/(z-2)$ with $|z|<2$, identify the sequence and calculate $x_{-1}$.

> [!example]- Worked answers
> 1. Linearity gives $3z/(z-1/4)-2z/(z-1/2)$. Both sums converge for $|z|>1/2$.
> 2. The inner ROC selects $x_n=-2^n$ for $n\le-1$ and 0 otherwise. Thus $x_{-1}=-1/2$. Choosing the right-sided table would contradict the specified ROC.

## Reference

[MIT OpenCourseWare, Lecture 22: the Z-transform](https://live.ocw.mit.edu/courses/res-6-007-signals-and-systems-spring-2011/resources/lecture-22-the-z-transform/) gives the bilateral convention, convergence regions, and inversion. The geometric examples above provide a direct check independent of a software table.
