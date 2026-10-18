---
title: "Laplace transform rules and impulses"
catalogue_ids:
  - "15.2"
  - "15.2.1"
  - "15.2.1.1"
  - "15.2.1.2"
  - "15.2.1.3"
  - "15.2.1.4"
---

> [!TLDR]
> The one-sided Laplace transform uses exponential weights on the nonnegative real line and converts derivatives into expressions with initial values.

## Original and transform domains

Read [[Integral kernels and inverse transforms]] first. Write $s=\sigma+i\omega$, where $i^2=-1$. The **one-sided Laplace transform** is

$$
F(s)=\mathcal L[f](s)=\int_0^\infty f(t)e^{-st}\,dt.
$$

The original domain is $t\geq0$. The transform domain is a set of complex $s$. Since $|e^{-st}|=e^{-\sigma t}$, a sufficiently positive real part suppresses growth. If $f$ is piecewise continuous on every bounded interval and $|f(t)|\leq Me^{at}$ for large $t$, then the transform converges absolutely for $\sigma>a$. This is a useful sufficient condition, not a necessary one.

For $f(t)=e^{bt}$ with real $b$, direct integration gives $F(s)=1/(s-b)$ for $\operatorname{Re}s>b$. The fraction exists at other complex numbers, but its existence there does not make the defining integral converge there. Distinguish a formula's analytic continuation from the transform's convergence domain.

## Rules from the definition

Linearity follows from integration. Replacing $s$ with $s-b$ in the kernel proves the exponential-shift rule. Differentiation under an absolutely dominated integral proves multiplication by $t$:

$$
\mathcal L[e^{bt}f(t)](s)=F(s-b),\qquad
\mathcal L[tf(t)](s)=-F'(s).
$$

Under integration-by-parts assumptions, including vanishing of $e^{-st}f(t)$ at infinity,

$$
\mathcal L[f'](s)=sF(s)-f(0+),\qquad
\mathcal L[f''](s)=s^2F(s)-sf(0+)-f'(0+).
$$

For example, $\int_0^\infty e^{-st}f'(t)dt=[e^{-st}f(t)]_0^\infty+sF(s)$. The lower boundary gives the initial-value term. Dropping it changes the problem. The symbol $0+$ means the limit from positive $t$.

Define $H(t-a)$ as $0$ when $t<a$ and $1$ when $t>a$; its isolated value at $a$ does not affect an ordinary integral. For $a>0$, substitution $u=t-a$ proves

$$
\mathcal L[H(t-a)f(t-a)](s)=e^{-as}F(s).
$$

The input inside the delayed function must also be shifted. In general, $H(t-a)f(t)$ has a different transform.

Another useful rule integrates the original. If $g(t)=\int_0^tf(v)dv$, then $g(0)=0$ and $g'=f$. Applying the derivative rule gives $sG(s)=F(s)$, so $G(s)=F(s)/s$ on a suitable common half-plane. For example, integrate $\cos(bt)$ from zero to $t$: the result is $\sin(bt)/b$ when $b\ne0$. Its transform is $1/(s^2+b^2)$, exactly the cosine transform divided by $s$. This supplies a quick consistency check between two table entries.

## Transforms of special functions

For $n=0,1,2,\ldots$ and real $b>0$, common pairs are

| Original on $t\geq0$ | Transform | Sufficient domain |
| --- | --- | --- |
| $1$ | $1/s$ | $\operatorname{Re}s>0$ |
| $t^n$ | $n!/s^{n+1}$ | $\operatorname{Re}s>0$ |
| $\cos(bt)$ | $s/(s^2+b^2)$ | $\operatorname{Re}s>0$ |
| $\sin(bt)$ | $b/(s^2+b^2)$ | $\operatorname{Re}s>0$ |

Integration by parts gives the recurrence $\mathcal L[t^n]=(n/s)\mathcal L[t^{n-1}]$, which proves the polynomial row. Euler's identity expresses sine and cosine as sums of exponentials and proves their rows. A table is therefore a collection of reusable calculations, not a separate definition.

## Dirac delta and distributions

An ordinary function supported at a single point has integral zero. The **Dirac delta** is instead a distribution: a linear rule acting on smooth test functions. For a point $a$, it is defined by $\delta_a[\varphi]=\varphi(a)$. A test function is smooth and zero outside some bounded interval. In informal integral notation,

$$
\int_{\mathbb R}\varphi(t)\delta(t-a)\,dt=\varphi(a).
$$

For $a>0$, its one-sided Laplace transform is $e^{-as}$. This follows by evaluating the kernel at $a$. A narrow rectangle of height $1/\varepsilon$ and width $\varepsilon$, centred at $a$, approaches this evaluation rule when integrated against a continuous function. Its height diverges, so it has no ordinary-function limit. At the lower endpoint $a=0$, one must state a convention; the causal distribution convention assigns transform $1$ to an impulse at zero. It must not be mixed with a half-weight symmetric endpoint convention.

## Worked example: a delayed ramp

Let $f(t)=H(t-2)(t-2)$. For $t<2$ it is zero; after $2$ it is a ramp starting from zero. Its transform is $e^{-2s}/s^2$ for $\operatorname{Re}s>0$. Differentiate piecewise in the distribution sense: $f'=H(t-2)$ because the ramp's value at the joining point is zero. Thus $sF(s)=e^{-2s}/s$, which agrees with the step's direct transform. The second derivative is $\delta(t-2)$, and $s^2F(s)=e^{-2s}$ confirms it.

## Practice

1. Find $\mathcal L[t e^{3t}]$ and its convergence domain.
2. Find the transform of $H(t-1)(t-1)^2+2\delta(t-3)$.

> [!example]- Worked answers
> 1. Starting from $\mathcal L[t]=1/s^2$, replace $s$ by $s-3$. The result is $1/(s-3)^2$, with $\operatorname{Re}s>3$.
> 2. The polynomial pair and delay give $2e^{-s}/s^3$. Evaluation at the impulse gives $2e^{-3s}$. Add them by linearity. A sufficient domain is $\operatorname{Re}s>0$.

## Reference

[NIST DLMF, Laplace transforms](https://dlmf.nist.gov/1.14#iii) states analytic and inversion properties with their growth assumptions. The impulse convention is stated explicitly above because ordinary integral tables can hide endpoint choices.
