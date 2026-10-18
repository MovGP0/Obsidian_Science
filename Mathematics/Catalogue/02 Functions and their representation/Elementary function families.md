---
title: "Elementary function families"
catalogue_ids:
  - "2.2"
  - "2.2.1"
  - "2.2.1.1"
  - "2.2.1.2"
  - "2.2.1.3"
  - "2.2.2"
  - "2.2.2.1"
  - "2.2.2.2"
  - "2.2.2.3"
  - "2.2.2.4"
  - "2.2.2.5"
  - "2.2.2.6"
---

> [!TLDR]
> Elementary functions are built from a small set of algebraic, exponential, logarithmic, circular, and hyperbolic rules by finitely many operations and compositions.

## Algebraic families

Start with [[Function inputs outputs and representations]] and [[Powers and exponent rules]]. A polynomial is a finite sum $a_nx^n+\cdots+a_1x+a_0$ with nonnegative integer exponents. Its degree is the largest exponent with nonzero coefficient. Its natural real domain is all of $\mathbb R$. The zero polynomial needs a separate degree convention.

A rational function is a quotient $p(x)/q(x)$ of polynomials, with $q$ not the zero polynomial. Exclude all zeros of the original denominator. Polynomial functions are included by taking $q=1$. Cancellation can simplify a rule without restoring a removed input.

An algebraic function satisfies a polynomial equation involving its input and output. For $y=\sqrt{x+1}$, that equation is $y^2-x-1=0$, with the nonnegative branch selected. The older term **irrational function** in this catalogue describes nonrational algebraic expressions, especially root expressions. It does not mean that every output is an irrational number. For instance, $\sqrt{x}$ is such a function, but $\sqrt4=2$ is rational. Not every algebraic function can be expressed by a finite formula using roots; radical examples are an accessible subfamily.

For real roots, even root indices require nonnegative radicands. Odd roots allow negative inputs. Branch choices matter: $y^2=x$ gives two outputs for $x>0$ unless a branch is chosen. [[Radical and real-power graphs]] develops the graph consequences.

## Exponential and logarithmic families

For fixed $a>0$, $a\ne1$, the exponential $a^x$ is positive for every real input. It is increasing for $a>1$ and decreasing for $0<a<1$. Its inverse is $\log_a x$, defined for $x>0$, with all real outputs. The natural exponential $e^x$ and natural logarithm $\ln x$ use the particular base $e$.

These functions are transcendental: they do not satisfy a nonzero polynomial relation in input and output over the real constants on an interval. This classification is stronger than merely saying their formulas include a new symbol. A transcendental function can still take an algebraic value at selected inputs, such as $e^0=1$.

## Circular functions and their inverses

On the unit circle, the angle $x$ in radians selects $(\cos x,\sin x)$. Both coordinates lie in $[-1,1]$ and repeat after $2\pi$. Tangent is $\sin x/\cos x$, so inputs with $\cos x=0$ are excluded. Inverse sine and cosine take inputs in $[-1,1]$, but their outputs are chosen from restricted angle intervals. We use $\arcsin x\in[-\pi/2,\pi/2]$, $\arccos x\in[0,\pi]$, and $\arctan x\in(-\pi/2,\pi/2)$. These restrictions make the inverses functions. [[Principal inverse trigonometric values]] teaches how to reduce other angles to these intervals.

## Hyperbolic functions and real inverses

Hyperbolic functions are exponential combinations:

$$
\sinh x=\frac{e^x-e^{-x}}2,\qquad
\cosh x=\frac{e^x+e^{-x}}2,\qquad
\tanh x=\frac{\sinh x}{\cosh x}.
$$

They satisfy $\cosh^2x-\sinh^2x=1$, the hyperbola counterpart of the unit-circle identity. The outputs of $\sinh$ cover $\mathbb R$, those of $\cosh$ cover $[1,\infty)$, and those of $\tanh$ cover $(-1,1)$. Hyperbolic cosine is even and positive; hyperbolic sine and tangent are odd. They do not repeat periodically along real inputs.

The real inverses are $\operatorname{arsinh}x$ on $\mathbb R$, $\operatorname{arcosh}x$ on $[1,\infty)$ with nonnegative outputs, and $\operatorname{artanh}x$ on $(-1,1)$. They can be calculated with

$$
\operatorname{arsinh}x=\ln(x+\sqrt{x^2+1}),\quad
\operatorname{arcosh}x=\ln(x+\sqrt{x^2-1}),\quad
\operatorname{artanh}x=\tfrac12\ln\frac{1+x}{1-x}.
$$

For example, solving $x=(u-u^{-1})/2$ with $u=e^y>0$ gives $u^2-2xu-1=0$. Its positive root is $u=x+\sqrt{x^2+1}$, giving the first inverse formula. Thus these inverses also belong to the elementary family. [NIST DLMF, hyperbolic definitions](https://dlmf.nist.gov/4.28) and [inverse hyperbolic functions](https://dlmf.nist.gov/4.37) give standard conventions.

## A family name does not supply a domain

For a composite elementary expression, impose the restrictions from every operation. The rule $\sqrt{\ln x}$ needs $x>0$ for its logarithm and $\ln x\ge0$ for its root, so its natural real domain is $[1,\infty)$. The expression $\ln(\sqrt x)$ instead needs $x>0$ and is defined on all of $(0,\infty)$. Both combine the same two families in different orders, but their domains differ. This is why classification and domain calculation are separate tasks.

## Worked example: classify and check the domain

Consider $h(x)=\ln\bigl(\sqrt{x+2}/(x-1)\bigr)$. The square root needs $x\ge-2$, and the denominator excludes one. The logarithm requires the entire quotient to be positive. At $x=-2$ the quotient is zero, so that endpoint fails. For $x>-2$, the numerator is positive; positivity of the quotient therefore requires $x>1$. The full natural domain is $(1,\infty)$, not merely $[-2,\infty)\setminus\{1\}$. This is an elementary composite with an algebraic inner function and a transcendental outer function.

## Practice

1. Classify $p(x)=(x^2+1)/(x-3)$ and find its natural domain.
2. Calculate $\sinh(\ln2)$, $\cosh(\ln2)$, and $\tanh(\ln2)$ directly from the definitions.

## Worked answers

1. It is rational and hence algebraic and elementary. Its denominator vanishes only at three, so its domain is $\mathbb R\setminus\{3\}$.
2. Use $e^{\ln2}=2$ and $e^{-\ln2}=1/2$. The values are $(2-1/2)/2=3/4$, $(2+1/2)/2=5/4$, and $(3/4)/(5/4)=3/5$. The identity $25/16-9/16=1$ checks the first two values.
