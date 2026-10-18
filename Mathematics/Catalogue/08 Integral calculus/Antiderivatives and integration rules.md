---
title: "Antiderivatives and integration rules"
catalogue_ids:
  - "8.1.1"
  - "8.1.1.1"
  - "8.1.1.2"
  - "8.1.2"
---

> [!TLDR]
> An antiderivative reverses differentiation on an interval; substitution reverses the chain rule and integration by parts reverses the product rule.

## Antiderivatives and elementary functions

Read [[07.03 The derivative]] first. An **antiderivative** of $f$ on an interval $I$ is a differentiable function $F$ with $F'(x)=f(x)$ for every $x\in I$. The **indefinite integral** $\int f(x)\,dx$ means the family $F(x)+C$, where $C$ is any real constant. It does not yet specify endpoints or produce a unique number.

Why is one constant sufficient on an interval? If $F'=G'=f$, the mean value theorem applied to $F-G$ shows that its difference between any two points is zero. Thus $F-G$ is constant. On a disconnected domain, different components may have different constants. For $1/x$, the intervals $x<0$ and $x>0$ need not use the same one.

An elementary function is built from finitely many algebraic operations, powers, exponentials, logarithms, trigonometric functions and their inverses. An elementary integrand need not have an elementary antiderivative. A continuous $f$ still has an antiderivative defined by $F(x)=\int_a^x f(t)\,dt$, even when no finite elementary expression exists.

The following formulas follow by differentiation:

$$
\begin{aligned}
\int x^p\,dx&=\frac{x^{p+1}}{p+1}+C &&(p\ne-1),\\
\int\frac{dx}{x}&=\ln|x|+C &&(x\ne0),\\
\int e^x\,dx&=e^x+C,\\
\int\cos x\,dx&=\sin x+C,\\
\int\sin x\,dx&=-\cos x+C,\\
\int\frac{dx}{1+x^2}&=\arctan x+C.
\end{aligned}
$$

For arbitrary real $p$, use $x>0$ unless another real differentiable branch is specified. The exponent $p=-1$ needs its own logarithmic formula. Trigonometric derivatives here use radians.

## Linearity and substitution

For constants $a,b$, differentiation gives $(aF+bG)'=af+bg$. Therefore integration is linear over sums. It is not multiplicative: the integral of $fg$ is generally not the product of the integrals.

If $F'=f$ and $u=g(x)$, the chain rule gives

$$
\int f(g(x))g'(x)\,dx=F(g(x))+C.
$$

For example, integrate $6x(1+3x^2)^4$. Set $u=1+3x^2$, so $du=6x\,dx$. The result is $u^5/5+C=(1+3x^2)^5/5+C$. Differentiating introduces both the outer factor $5$ and the inner factor $6x$, which checks the calculation. The notation $du=g'(x)\,dx$ is a convenient way to record the chain rule, not permission to cancel unrelated expressions.

## Integration by parts

The product rule $(uv)'=u'v+uv'$ gives

$$
\int u\,v'\,dx=uv-\int u'v\,dx.
$$

Choose $u$ so that differentiation simplifies it, and $v'$ so that integration is possible. To integrate $xe^x$, let $u=x$ and $v'=e^x$. Then $u'=1$, $v=e^x$, and

$$
\int xe^x\,dx=xe^x-\int e^x\,dx=(x-1)e^x+C.
$$

Differentiate the answer: $e^x+(x-1)e^x=xe^x$. Sometimes one application makes the remaining integral harder; that is a reason to change the choice, not a failure of the identity. See [[08.04 Substitution]] and [[08.05 Integration by parts]] for additional foundation examples.

## Worked example: simplify first

For $x\ne0$, rewrite $(2x^3+3x-4)/x$ as $2x^2+3-4/x$. Integrate term by term:

$$
\int\frac{2x^3+3x-4}{x}\,dx
=\frac{2x^3}{3}+3x-4\ln|x|+C.
$$

Keep the original exclusion $x=0$. Simplifying an expression does not change the problem's domain automatically. Use the answer on either connected interval. Differentiating the three terms reconstructs the simplified fraction.

## How to select a method

Begin by asking whether expansion, division, or a trigonometric identity will reveal a sum of familiar patterns. If a composite expression comes with the derivative of its inside, try substitution. For a polynomial times an exponential, logarithm, or trigonometric function, test integration by parts. The choice is based on the remaining integral: a valid step is useful when it makes that integral easier.

For instance, $\int2x e^{x^2}\,dx$ has the inner derivative $2x$ and is one substitution. The similar-looking $\int2x e^x\,dx$ has a polynomial factor which parts will remove. By contrast, $\int e^{x^2}\,dx$ lacks that inner derivative. Inserting $2x$ and then ignoring the extra factor changes the problem. Method selection requires reading the entire product, including its differential. When a plausible answer is found, differentiation is a decisive check on an open interval, even if the route to that answer was unusual.

## Mistakes to avoid

Keep the integration variable visible. In $\int ax^2\,dx$, $a$ is constant only when it is independent of $x$. Do not apply a power rule to $x^{-1}$, forget a chain-rule scale factor, or discard an excluded point. An additive constant is required for a full indefinite family, but separate constants in intermediate terms can be combined into one final constant.

## Practice

1. Find $\int(4x^3-2\cos x+3/x)\,dx$ and state its domain.
2. Find $\int x\cos(x^2)\,dx$ and $\int x\cos x\,dx$.

## Worked answers

1. The answer is $x^4-2\sin x+3\ln|x|+C$, on each interval excluding zero. Its derivative is the given integrand.
2. In the first integral put $u=x^2$ and $du=2x\,dx$, giving $\tfrac12\sin(x^2)+C$. In the second use parts with $u=x$ and $v'=\cos x$: the answer is $x\sin x+\cos x+C$. Differentiation gives $\sin x+x\cos x-\sin x=x\cos x$.
