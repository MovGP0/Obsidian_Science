---
title: "Exponential, hyperbolic, and nonelementary integrals"
catalogue_ids:
  - "8.1.6"
  - "8.1.6.1"
  - "8.1.6.2"
  - "8.1.6.3"
  - "8.1.6.4"
---

> [!TLDR]
> Exponential substitutions and integration by parts handle many transcendental integrands; definite integrals define the remaining special functions.

## Exponentials and a rational substitution

Read [[Antiderivatives and integration rules]]. For a nonzero constant $a$, $\int e^{ax}\,dx=e^{ax}/a+C$. For a positive base $b\ne1$, $b^x=e^{x\ln b}$, so $\int b^x\,dx=b^x/\ln b+C$. The excluded value $b=1$ gives the separate integrand $1$, whose integral is $x+C$.

A rational expression in $e^{ax}$ often becomes rational after $t=e^{ax}$. The differential is $dx=dt/(at)$ and the real range is $t>0$. For example,

$$
\int\frac{e^x}{1+e^{2x}}\,dx
=\int\frac{dt}{1+t^2}=\arctan(e^x)+C.
$$

Do not substitute for the exponential without also changing $dx$. In $\int dx/(1+e^x)$ the extra $1/t$ gives $\int dt/[t(1+t)]=\ln t-\ln(1+t)+C=x-\ln(1+e^x)+C$.

## Hyperbolic functions

Define $\sinh x=(e^x-e^{-x})/2$ and $\cosh x=(e^x+e^{-x})/2$. Their derivatives are $\cosh x$ and $\sinh x$, and $\cosh^2x-\sinh^2x=1$. Also define $\tanh x=\sinh x/\cosh x$ and $\operatorname{sech}x=1/\cosh x$. Since $\cosh x>0$ on the real line, these latter two have no real poles.

Thus $\int\sinh x\,dx=\cosh x+C$, $\int\operatorname{sech}^2x\,dx=\tanh x+C$, and $\int\tanh x\,dx=\ln\cosh x+C$. For a worked power example, write $\sinh^3x=\sinh x(\cosh^2x-1)$ and set $u=\cosh x$. This gives $\cosh^3x/3-\cosh x+C$.

Hyperbolic substitutions are useful for roots. Put $x=\sinh t$ in $\int dx/\sqrt{1+x^2}$. Since $dx=\cosh t\,dt$ and the positive root is $\cosh t$, the integral is $t+C$. Solving for $t$ yields

$$
\operatorname{arsinh}x=\ln\left(x+\sqrt{1+x^2}\right).
$$

The logarithm's argument is positive for all real $x$, including negative $x$, because $\sqrt{1+x^2}>|x|$.

## Integration by parts for logarithms and inverse functions

Parts can integrate a function even when it appears alone. For $x>0$, set $u=\ln x$, $dv=dx$ to obtain $\int\ln x\,dx=x\ln x-x+C$. Likewise, for $u=\arctan x$, $dv=dx$,

$$
\int\arctan x\,dx=x\arctan x-\frac12\ln(1+x^2)+C.
$$

The derivative of an inverse function is often simpler than the function. For products of a polynomial and an exponential, repeated parts reduces the polynomial degree. It gives $\int x^2e^x\,dx=e^x(x^2-2x+2)+C$. Differentiate once to check that the lower-degree terms cancel.

For $\int e^{ax}\cos bx\,dx$, two applications of parts return the original integral. Solve the resulting algebraic equation, rather than continuing indefinitely. For $a^2+b^2>0$ the answer is $e^{ax}(a\cos bx+b\sin bx)/(a^2+b^2)+C$. If $a=b=0$, use $\int1\,dx=x+C$ separately.

## Transcendental integrands without elementary primitives

The continuous function $e^{-x^2}$ has no elementary antiderivative. Define instead

$$
\operatorname{erf}x=\frac2{\sqrt\pi}\int_0^x e^{-t^2}\,dt.
$$

Likewise, define the sine integral by $\operatorname{Si}(x)=\int_0^x(\sin t)/t\,dt$, using its removable value $1$ at $t=0$. Then the derivatives are the defining integrands, with the normalization factor for the error function. [NIST DLMF §7.2](https://dlmf.nist.gov/7.2) and [§6.2](https://dlmf.nist.gov/6.2) specify these conventions. “Not elementary” does not mean “not computable”: series, quadrature, and dedicated algorithms give controlled values. [[Parameter integrals and series]] shows one series method. A proof of nonelementarity belongs to differential algebra and is beyond this lesson.

## Derive the returning-integral calculation

To see how the repeated-parts method closes, let $I=\int e^x\cos x\,dx$ and $J=\int e^x\sin x\,dx$. Parts with the trigonometric function as $u$ gives $I=e^x\cos x+J$. Applying parts to $J$ gives $J=e^x\sin x-I$. Substitution into the first relation gives $2I=e^x(\cos x+\sin x)$, up to an additive constant. Thus $I=e^x(\cos x+\sin x)/2+C$.

The return of $I$ is helpful because its coefficient can be moved to the other side of an algebraic equation. It is not a circular argument: both relations follow from the product rule, and solving them fixes an antiderivative which can be differentiated independently. The same two-equation strategy works for general exponential and sine/cosine frequencies. Keep additive constants in the final family rather than treating their arbitrary intermediate names as fixed numerical data.

## Practice

1. Integrate $e^{2x}/(1+e^{2x})$.
2. Find $\int\sinh x\cosh^2x\,dx$ and $\int e^{-x^2}\,dx$.

## Worked answers

1. Put $u=1+e^{2x}$, so $du=2e^{2x}\,dx$. The answer is $\tfrac12\ln(1+e^{2x})+C$. The logarithm argument is positive.
2. Put $u=\cosh x$ for the first integral to obtain $\cosh^3x/3+C$. For the second, the error-function definition gives $\sqrt\pi\operatorname{erf}(x)/2+C$. Its derivative is $e^{-x^2}$; the factor $\sqrt\pi/2$ cancels the conventional normalization.
