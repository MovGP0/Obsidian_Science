---
title: "Elementary derivative methods"
catalogue_ids:
  - "6.1.2"
  - "6.1.2.1"
  - "6.1.2.2"
---

> [!TLDR]
> Differentiate an expression by combining elementary derivatives with rules for sums, products, quotients, and compositions.

## Build a derivative from simpler parts

Read [[Tangents and the derivative]] first. Calculating a new limit for every formula would be slow. Differentiation rules reuse derivatives that have already been proved. First identify the expression's structure. The expressions $x^2+\sin x$, $x^2\sin x$, and $\sin(x^2)$ use a sum, a product, and a composition. They require different rules.

Record the original domain. Cancellation can simplify an answer, but it cannot define the derivative at an input where the original function did not exist. Angles in the formulas below are in radians; [[03.05 Trigonometric functions]] explains this convention.

## Elementary functions and their domains

For a constant $c$, the difference quotient is zero, so $c'=0$. For a positive integer $n$, the binomial expansion gives $(x^n)'=nx^{n-1}$. In the quotient, the term $nx^{n-1}h$ survives division by $h$; higher powers of $h$ tend to zero. The same power rule holds for real exponents on $x>0$, where $x^p=\exp(p\ln x)$.

| Function | Derivative | Region for the stated formula |
| --- | --- | --- |
| $x^p$ | $px^{p-1}$ | $x>0$ for general real $p$ |
| $e^x$ | $e^x$ | All real $x$ |
| $a^x$ | $a^x\ln a$ | $a>0$ |
| $\ln x$ | $1/x$ | $x>0$ |
| $\ln\lvert x\rvert$ | $1/x$ | $x\ne0$ |
| $\sin x$ | $\cos x$ | All real $x$ |
| $\cos x$ | $-\sin x$ | All real $x$ |
| $\tan x$ | $1/\cos^2x$ | $\cos x\ne0$ |
| $\arcsin x$ | $1/\sqrt{1-x^2}$ | $-1<x<1$ |
| $\arccos x$ | $-1/\sqrt{1-x^2}$ | $-1<x<1$ |
| $\arctan x$ | $1/(1+x^2)$ | All real $x$ |

Integer powers and particular roots can have larger domains than the first row. For instance, $x^3$ is differentiable on all real inputs, but $\sqrt{x}$ has its displayed finite derivative only for $x>0$. The identities $(\sinh x)'=\cosh x$ and $(\cosh x)'=\sinh x$ follow by writing those functions as $(e^x-e^{-x})/2$ and $(e^x+e^{-x})/2$.

The exponential derivative fixes the useful base $e$: its relative change at zero has limit $1$. The sine derivative uses $\lim_{h\to0}\sin h/h=1$. These are limit theorems, not evaluations of an undefined quotient at zero. See [[07.05 Elementary derivatives]] for a further foundation route.

## Sum product quotient and chain rules

If $u$ and $v$ are differentiable at the relevant inputs, then

$$
(au+bv)'=au'+bv',\qquad (uv)'=u'v+uv'.
$$

The constants $a,b$ stay fixed. To see the product rule, add and subtract $u(x+h)v(x)$ in the product difference. The quotient becomes a difference quotient for $u$ times $v(x)$, plus a difference quotient for $v$ times $u(x+h)$. Continuity of $u$ then gives the result. In general $(uv)'$ is not $u'v'$.

For $v\ne0$ and a differentiable outer function $g$,

$$
\left(\frac uv\right)'=\frac{u'v-uv'}{v^2},\qquad
\frac{\mathrm d}{\mathrm dx}g(u(x))=g'(u(x))u'(x).
$$

The chain rule reflects two linear changes: an input change first changes $u$, then changes $g$. Their local factors multiply. For example, $(\sin(x^2))'=2x\cos(x^2)$, not $\cos(2x)$ and not merely $\cos(x^2)$.

## Worked example with nested operations

Differentiate $f(x)=x^2\ln(1+x)$, with domain $x>-1$. This is a product. The second factor contains a composition, so

$$
f'(x)=2x\ln(1+x)+x^2\frac1{1+x}.
$$

At $x=1$, this is $2\ln2+1/2$. Each term represents the change of one factor while the other contributes its current value.

For a variable exponent such as $y=x^x$ on $x>0$, take logarithms: $\ln y=x\ln x$. Differentiate to get $y'/y=\ln x+1$. Multiplication by $y$ gives $y'=x^x(\ln x+1)$. Treating the exponent as fixed would miss the $1$ term. This logarithmic method requires the stated positivity.

## Practice

1. Differentiate $q(x)=(x+1)/(x-2)$ and state its domain.
2. Differentiate $r(x)=e^{3x}\cos(x^2)$ and $s(x)=\arctan(2x)$.

## Worked answers

1. For $x\ne2$, the quotient rule gives $q'=[(x-2)-(x+1)]/(x-2)^2=-3/(x-2)^2$. The negative sign is consistent with a decreasing graph on each domain interval. It does not connect the two intervals across the missing point.
2. Product and chain rules give $r'=3e^{3x}\cos(x^2)-2xe^{3x}\sin(x^2)$. For $s$, the outer derivative is $1/(1+u^2)$ and the inner derivative is $2$, so $s'=2/(1+4x^2)$. Both functions and derivative formulas are defined for all real $x$.
