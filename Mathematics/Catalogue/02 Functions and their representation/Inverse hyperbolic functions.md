---
title: "Inverse hyperbolic functions"
catalogue_ids:
  - "2.10"
  - "2.10.1"
  - "2.10.1.1"
  - "2.10.1.2"
  - "2.10.1.3"
  - "2.10.1.4"
  - "2.10.2"
  - "2.10.3"
  - "2.10.4"
  - "2.10.5"
---

> [!TLDR]
> Real inverse hyperbolic functions undo specified one-to-one branches and can be calculated with logarithms.

## Prerequisite route

Use [[Hyperbolic functions]], [[Hyperbolic identities]], and [[03.07 Composition and inverse functions]]. The natural logarithm $\ln$ is defined for positive real inputs. This article uses real inverse functions throughout. Their complex extensions have additional branch choices, so a calculator's complex output must not be used to change the real domains silently.

## Definitions and branches

An inverse exchanges input and output: if $x=\sinh u$, then $u=\operatorname{arsinh}x$. An inverse exists as a function only after the original function is one-to-one. The notation $\sinh^{-1}x$ sometimes denotes an inverse, but it is easy to confuse with the reciprocal $1/\sinh x$. We use explicit inverse names instead. NIST writes these names as arcsinh, arccosh, arctanh, and arccoth; the functions are the same on the real domains used here. See [DLMF §4.37](https://dlmf.nist.gov/4.37).

### Inverse hyperbolic sine

Sine is strictly increasing on all of $\mathbb R$ and takes every real value. Define $\operatorname{arsinh}:\mathbb R\to\mathbb R$ as its inverse. Thus $\sinh(\operatorname{arsinh}x)=x$ for every real $x$, and $\operatorname{arsinh}(\sinh u)=u$ for every real $u$.

### Inverse hyperbolic cosine

Cosine is even, so it cannot have an inverse on its full domain. Restrict its input to $u\geq0$, where it increases from $1$ to infinity. Then $\operatorname{arcosh}:[1,\infty)\to[0,\infty)$. In particular $\operatorname{arcosh}(\cosh u)=|u|$, not always $u$. Solving $\cosh u=x>1$ without a nonnegative restriction gives two solutions $u=\pm\operatorname{arcosh}x$.

### Inverse hyperbolic tangent

Tangent is strictly increasing with range $(-1,1)$. Its inverse is $\operatorname{artanh}:(-1,1)\to\mathbb R$. The endpoints are excluded: no finite real input of tangent produces $1$ or $-1$.

### Inverse hyperbolic cotangent

Cotangent maps nonzero real inputs onto $(-\infty,-1)\cup(1,\infty)$, with no repeated outputs between the branches. Its real inverse is $\operatorname{arcoth}$ on this disconnected set, with range $\mathbb R\setminus\{0\}$. A positive output argument greater than one gives a positive inverse value. An argument less than minus one gives a negative inverse value. It has no real value at zero or on $[-1,1]$.

## Derive the logarithmic forms

To solve $x=\sinh u$, set $v=e^u>0$. Then $2x=v-v^{-1}$, so $v^2-2xv-1=0$. The quadratic formula gives $v=x\pm\sqrt{x^2+1}$. Only the plus choice is positive because $\sqrt{x^2+1}>|x|$. Hence

$$
\operatorname{arsinh}x=\ln\left(x+\sqrt{x^2+1}\right),\qquad x\in\mathbb R.
$$

For cosine, $v^2-2xv+1=0$. Its two roots are $x\pm\sqrt{x^2-1}$, reciprocal to each other. The nonnegative branch $u\geq0$ requires $v\geq1$, so select the plus root:

$$
\operatorname{arcosh}x=\ln\left(x+\sqrt{x^2-1}\right),\qquad x\geq1.
$$

From $x=(e^{2u}-1)/(e^{2u}+1)$, isolate $e^{2u}=(1+x)/(1-x)$. For $|x|<1$ both numerator and denominator are positive, giving

$$
\operatorname{artanh}x=\frac12\ln\frac{1+x}{1-x}.
$$

For cotangent the same rearrangement gives

$$
\operatorname{arcoth}x=\frac12\ln\frac{x+1}{x-1},\qquad |x|>1.
$$

When $x<-1$, both ratio terms are negative but their quotient is positive. Do not split this logarithm into two real logarithms of negative numbers.

## Relations between inverses

Put $u=\operatorname{arsinh}x$. Then $\sinh u=x$, $\cosh u=\sqrt{1+x^2}$, and $\tanh u=x/\sqrt{1+x^2}$. Therefore

$$
\operatorname{arsinh}x=\operatorname{artanh}\frac{x}{\sqrt{1+x^2}}.
$$

The tangent argument has absolute value less than one, so the formula respects its domain. Conversely, for $|t|<1$,

$$
\operatorname{artanh}t=\operatorname{arsinh}\frac{t}{\sqrt{1-t^2}}.
$$

Also $\operatorname{arcoth}x=\operatorname{artanh}(1/x)$ for $|x|>1$, and $\operatorname{arcosh}x=\operatorname{arsinh}\sqrt{x^2-1}$ for $x\geq1$. The latter inverse sine is nonnegative, as the chosen cosine branch requires.

## Sums and differences

To combine two inverse sines, put $u=\operatorname{arsinh}a$, $v=\operatorname{arsinh}b$, apply the sine addition formula, then invert. Since sine is one-to-one on the whole real line,

$$
\operatorname{arsinh}a\pm\operatorname{arsinh}b
=\operatorname{arsinh}\left(a\sqrt{1+b^2}\pm b\sqrt{1+a^2}\right).
$$

For $a,b\in(-1,1)$, the corresponding tangent result is

$$
\operatorname{artanh}a\pm\operatorname{artanh}b
=\operatorname{artanh}\frac{a\pm b}{1\pm ab}.
$$

The new argument remains inside $(-1,1)$; this follows, for example, from $1-[(a+b)/(1+ab)]^2=(1-a^2)(1-b^2)/(1+ab)^2>0$.

For $a,b\geq1$, cosine addition gives

$$
\operatorname{arcosh}a+\operatorname{arcosh}b
=\operatorname{arcosh}\left(ab+\sqrt{a^2-1}\sqrt{b^2-1}\right).
$$

For a difference, the analogous minus expression on the right gives the **absolute value** of the difference, because inverse cosine returns a nonnegative value. Recover the sign by comparing $a$ with $b$. Other combinations can be handled by these rules after conversion between inverses.

## Negative arguments

The odd functions have odd inverses:

$$
\operatorname{arsinh}(-x)=-\operatorname{arsinh}x,\quad
\operatorname{artanh}(-x)=-\operatorname{artanh}x,\quad
\operatorname{arcoth}(-x)=-\operatorname{arcoth}x,
$$

on their respective real domains. There is no real reflection rule $\operatorname{arcosh}(-x)$ for $x\geq1$, since $-x$ lies outside its domain.

## Worked example

Solve $\cosh u=5/3$ over the reals. The logarithmic expression gives $\operatorname{arcosh}(5/3)=\ln(5/3+4/3)=\ln3$. Because the original cosine is even, both $u=\ln3$ and $u=-\ln3$ solve the equation. Direct substitution gives $(3+1/3)/2=5/3$. If the question had asked for the inverse function value alone, its answer would be $\ln3$.

## Practice

1. Evaluate $\operatorname{arsinh}(3/4)$ and $\operatorname{arcoth}(5/3)$ exactly.
2. Simplify $\operatorname{artanh}(1/2)+\operatorname{artanh}(1/3)$, and check that the combined argument is allowed.

## Worked answers

1. The square root for sine is $5/4$, so the first value is $\ln(3/4+5/4)=\ln2$. The second value is $\tfrac12\ln[(8/3)/(2/3)]=\tfrac12\ln4=\ln2$. This is consistent with $\coth(\ln2)=5/3$.
2. The combined argument is $(1/2+1/3)/(1+1/6)=(5/6)/(7/6)=5/7$, which is inside $(-1,1)$. The sum equals $\operatorname{artanh}(5/7)=\tfrac12\ln6$. Separately the two logarithms are $\tfrac12\ln3$ and $\tfrac12\ln2$, whose sum agrees.
