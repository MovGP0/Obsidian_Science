---
title: "Exponential, logarithmic, and hyperbolic integral tables"
catalogue_ids:
  - "21.7.4"
  - "21.7.4.1"
  - "21.7.4.2"
  - "21.7.4.3"
  - "21.7.4.4"
  - "21.7.4.5"
---

> [!TLDR]
> Match derivative pairs for exponentials and hyperbolic functions, and use integration by parts to integrate logarithms and inverse functions.

## Other transcendental functions

A transcendental function is not an algebraic function of its input. Familiar examples include the exponential, logarithm, and sine. This lesson collects representative antiderivatives and explains their derivation. Read [[03.04 Exponential and logarithmic functions]], [[08.04 Substitution]], and [[08.05 Integration by parts]] first if necessary. All table rows include an arbitrary additive constant $C$.

The integration-by-parts identity is $\int u\,dv=uv-\int v\,du$. It follows from the derivative of a product, $(uv)'=u'v+uv'$. Choose a factor whose derivative is simpler. For an inverse function or logarithm, take that factor as $u$ and use $dv=dx$.

## Hyperbolic functions

Define $\sinh x=(e^x-e^{-x})/2$ and $\cosh x=(e^x+e^{-x})/2$. Direct differentiation gives $(\sinh x)'=\cosh x$ and $(\cosh x)'=\sinh x$. Their identity is $\cosh^2x-\sinh^2x=1$. This minus sign differs from the circular identity.

| Integral | Antiderivative, plus $C$ | Domain |
| --- | --- | --- |
| $\int\sinh(ax+b)\,dx$ | $\cosh(ax+b)/a$ | $a\ne0$ |
| $\int\cosh(ax+b)\,dx$ | $\sinh(ax+b)/a$ | $a\ne0$ |
| $\int\tanh x\,dx$ | $\ln\cosh x$ | All real $x$ |
| $\int\coth x\,dx$ | $\ln\lvert \sinh x\rvert $ | $x\ne0$ |
| $\int\operatorname{sech}^2x\,dx$ | $\tanh x$ | All real $x$ |
| $\int\operatorname{csch}^2x\,dx$ | $-\coth x$ | $x\ne0$ |

The abbreviations mean $\tanh=\sinh/\cosh$, $\coth=\cosh/\sinh$, and the reciprocal functions $\operatorname{sech}=1/\cosh$, $\operatorname{csch}=1/\sinh$. For powers, use identities such as $\cosh^2x=(1+\cosh2x)/2$. Thus $\int\cosh^2x\,dx=x/2+\sinh2x/4+C$.

## Exponential functions

For $a\ne0$, $\int e^{ax+b}\,dx=e^{ax+b}/a+C$. For $q>0$, $q\ne1$, the change $q^x=e^{x\ln q}$ gives $\int q^x\,dx=q^x/\ln q+C$. A polynomial times an exponential is handled by repeated integration by parts. For example,

$$
\int xe^{2x}\,dx=\frac{xe^{2x}}2-\frac12\int e^{2x}\,dx
=e^{2x}\left(\frac x2-\frac14\right)+C.
$$

A useful mixed row is

$$
\int e^{ax}\cos bx\,dx
=\frac{e^{ax}(a\cos bx+b\sin bx)}{a^2+b^2}+C,
$$

for real $a,b$ not both zero. It follows by two integrations by parts, then solving for the original integral. With sine, the numerator is $a\sin bx-b\cos bx$. Differentiate either numerator and the product exponential to check cancellation of the cross terms.

## Logarithmic functions

For $x>0$, integration by parts with $u=\ln x$ and $dv=dx$ gives

$$
\int\ln x\,dx=x\ln x-x+C.
$$

Likewise $\int(\ln x)^2dx=x[(\ln x)^2-2\ln x+2]+C$. For $p\ne-1$,

$$
\int x^p\ln x\,dx
=\frac{x^{p+1}\ln x}{p+1}-\frac{x^{p+1}}{(p+1)^2}+C.
$$

The exceptional case is $\int(\ln x)/x\,dx=(\ln x)^2/2+C$. For $\ln|x|$, analogous formulas hold separately on intervals with $x\ne0$. Do not put a negative real argument into an unqualified real logarithm.

## Inverse trigonometric functions

Use principal real branches: $\arcsin x$ lies in $[-\pi/2,\pi/2]$, $\arccos x$ in $[0,\pi]$, and $\arctan x$ in $(-\pi/2,\pi/2)$. The representative rows are

| Integral | Antiderivative, plus $C$ | Real open domain |
| --- | --- | --- |
| $\int\arcsin x\,dx$ | $x\arcsin x+\sqrt{1-x^2}$ | $-1<x<1$ |
| $\int\arccos x\,dx$ | $x\arccos x-\sqrt{1-x^2}$ | $-1<x<1$ |
| $\int\arctan x\,dx$ | $x\arctan x-\tfrac12\ln(1+x^2)$ | All real $x$ |

To derive the first row, integrate by parts. The remaining integral is $\int x/\sqrt{1-x^2}\,dx=-\sqrt{1-x^2}$. Subtracting this remainder gives the plus sign in the row. These inverse functions are not reciprocals: $\arcsin x\ne1/\sin x$.

## Inverse hyperbolic functions

The real inverse functions have logarithmic forms: $\operatorname{arsinh}x=\ln(x+\sqrt{x^2+1})$ for all real $x$; $\operatorname{arcosh}x=\ln(x+\sqrt{x^2-1})$ for $x\ge1$; and $\operatorname{artanh}x=\tfrac12\ln[(1+x)/(1-x)]$ for $|x|<1$. Their derivatives lead to

| Integral | Antiderivative, plus $C$ | Real open domain |
| --- | --- | --- |
| $\int\operatorname{arsinh}x\,dx$ | $x\operatorname{arsinh}x-\sqrt{x^2+1}$ | All real $x$ |
| $\int\operatorname{arcosh}x\,dx$ | $x\operatorname{arcosh}x-\sqrt{x^2-1}$ | $x>1$ |
| $\int\operatorname{artanh}x\,dx$ | $x\operatorname{artanh}x+\tfrac12\ln(1-x^2)$ | $\lvert x\rvert <1$ |

Each is another integration-by-parts result. For $\operatorname{artanh}$, the remainder is $\int x/(1-x^2)\,dx=-\tfrac12\ln(1-x^2)$, which explains the final plus sign.

## Limits of an elementary table

Some simple-looking functions, including $e^{-x^2}$, have no elementary antiderivative. A definite integral or a special function is then a normal answer. The absence of a row is not evidence of divergence. Convergence concerns a limit of integrals; elementary integrability concerns the allowed form of an antiderivative.

## Practice

1. Integrate $x\ln x$ on $x>0$ and verify the derivative.
2. Integrate $\cosh(3x)$ and $\arctan x$.

> [!example]- Worked answers
> 1. The logarithmic row with $p=1$ gives $x^2\ln x/2-x^2/4+C$. Differentiation gives $x\ln x+x/2-x/2=x\ln x$.
> 2. The first answer is $\sinh(3x)/3+C$. For the second, integration by parts gives $x\arctan x-\int x/(1+x^2)\,dx=x\arctan x-\tfrac12\ln(1+x^2)+C$.
