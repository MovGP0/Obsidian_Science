---
title: "Quadratic and reciprocal empirical models"
catalogue_ids:
  - "2.16.2.3"
  - "2.16.2.4"
  - "2.16.2.5"
  - "2.16.2.7"
  - "2.16.2.8"
  - "2.16.2.9"
---

> [!TLDR]
> Squaring or taking a reciprocal can convert several empirical families into a quadratic or a straight line.

## Quadratic polynomials

Start with [[Choosing and rectifying empirical curves]] and [[Linear and quadratic equations]]. A quadratic model is $y=ax^2+bx+c$. Three observations with distinct input coordinates give three linear equations for $a,b,c$. The model is linear in its parameters, although its graph is curved.

For the pairs $(0,1),(1,4),(2,9)$, the equations are $c=1$, $a+b=3$, and $4a+2b=8$. Subtract twice the middle equation from the last: $2a=2$. Hence $a=1$, $b=2$, and $y=(x+1)^2$.

At equally spaced inputs with spacing $h$, the second difference of a quadratic is constant:

$$
y(x+2h)-2y(x+h)+y(x)=2ah^2.
$$

Expansion of the three squares cancels every $x$ term, leaving $2ah^2$. A nearly constant second difference suggests a quadratic over that range. It does not prove a global law.

## Linear fractional functions

A linear fractional model has the form $y=(ax+b)/(cx+d)$ where the denominator is nonzero. Multiplying out gives

$$
cx y+dy=ax+b.
$$

The four coefficients have an arbitrary common scale: multiplying all by a nonzero number leaves the function unchanged. There are normally three independent parameters. If the model can be written

$$
y=L+\frac{K}{x-H},
$$

its horizontal and vertical asymptotes are $y=L$ and $x=H$, provided $K\ne0$. An asymptote describes limiting behavior, not an extra observed point. If $H$ is known, fit $y$ as a line against $1/(x-H)$. If $L$ is known, fit $1/(y-L)$ against $x$.

For example, $y=2+3/(x+1)$ gives $Y=y-2=3X$ with $X=1/(x+1)$. At $x=0,1,2$, the outputs are $5,7/2,3$. The excluded input $-1$ remains excluded after any algebraic rewriting.

## Square roots of quadratics

For $y=\sqrt{ax^2+bx+c}$, define $Y=y^2$. Fit $Y$ as a quadratic, then take the nonnegative square root. The real domain requires $ax^2+bx+c\ge0$. Squaring alone loses the sign: negative observations do not fit this nonnegative-root family.

For outputs $1,\sqrt2,\sqrt5$ at inputs $0,1,2$, squaring gives $1,2,5$. The quadratic equations give $c=1$, $a+b=1$, and $4a+2b=4$, so $a=1$, $b=0$. The model is $\sqrt{x^2+1}$, real for every real input. Substitution into the *unsquared* formula is the final check.

## Third-order curves of type II

The catalogue uses specific historical names; they are not arbitrary cubic polynomials. Type II means

$$
y=\frac1{ax^2+bx+c}.
$$

Take $Y=1/y$ and fit a quadratic. The denominator must not vanish and $y$ cannot be zero. For $(0,1),(1,1/2),(2,1/5)$, the transformed outputs are $1,2,5$. The preceding calculation gives $y=1/(x^2+1)$. The name refers to the implicit algebraic equation $(ax^2+bx+c)y=1$, whose total degree is three when $a\ne0$.

## Third-order curves of type III

Type III means

$$
y=\frac{x}{ax^2+bx+c}.
$$

For nonzero $y$, use $Y=x/y$. This gives the same quadratic denominator. The pair $(0,0)$ may be valid when $c\ne0$, but the transformation is $0/0$ there and cannot be used. Preserve such a point for a direct check. For $(1,1/2),(2,2/5),(3,3/10)$, transformed outputs are $2,5,10$, which fit $x^2+1$. Hence $y=x/(x^2+1)$, also correctly giving zero at $x=0$.

## Third-order curves of type I

Type I means

$$
y=a+\frac b x+\frac c{x^2},\qquad x\ne0.
$$

Take $X=1/x$ to get $y=a+bX+cX^2$. For inputs $1,1/2,1/3$ and outputs $6,11,18$, the transformed inputs are $1,2,3$. The output differences are $5,7$, so $2c=2$ and $c=1$. Then $b+3c=5$ gives $b=2$, and $a+b+c=6$ gives $a=3$. The model is $3+2/x+1/x^2$. At $x=2$, it predicts $17/4$.

The three type labels and their formulas follow [Bronshtein and coauthors, sections 2.16.2.7–9](https://djvu.online/file/GdI2fptBUdLpJ). Transformations simplify algebra, but reciprocal errors can become large near zero. Do not interpret a good transformed fit as a guarantee of small errors in $y$.

A fitted denominator must also be checked between observations. For instance, a type II fit $1/(x^2-1)$ gives finite values at $x=0$ and $x=2$, but it has an excluded input at $x=1$ between them. Connecting those two observations by one smooth interpolating stroke would conceal a pole. Find the real roots of the denominator before drawing the fitted curve. When numerator and denominator share a factor, cancellation may simplify a formula, but the original observation model still excludes the cancelled denominator's zeros unless an extension is explicitly defined.

## Practice

1. Fit a type II model through outputs $1/2,1/4,1/10$ at inputs $0,1,2$. State its real domain.
2. Fit a nonnegative square-root model through outputs $2,\sqrt5,\sqrt8$ at inputs $0,1,2$.

## Worked answers

1. Reciprocals are $2,4,10$. Thus $c=2$, $a+b=2$, and $4a+2b=8$. Solving gives $a=2$, $b=0$. The model is $1/(2x^2+2)$. Its denominator is always positive, so its domain is all real inputs.
2. Squared outputs are $4,5,8$. Thus $c=4$, $a+b=1$, $4a+2b=4$, giving $a=1$, $b=0$. The result is $\sqrt{x^2+4}$, defined for every real input. Both original and squared outputs agree.
