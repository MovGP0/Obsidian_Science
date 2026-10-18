---
title: "Polynomial graph shapes"
catalogue_ids:
  - "2.3"
  - "2.3.1"
  - "2.3.2"
  - "2.3.3"
  - "2.3.4"
  - "2.3.5"
---

> [!TLDR]
> Degree, leading coefficient, factors, and translations explain the main shape of a polynomial graph before calculus is needed.

## Lines and quadratic parabolas

Read [[Polynomials and identities]] for the algebra of coefficients. A linear polynomial $y=mx+b$, $m\ne0$, gives a straight line. Its slope is the change in output divided by the change in input: $[f(v)-f(u)]/(v-u)=m$. Its vertical intercept is $b$ and its zero is $-b/m$. The case $m=0$ is constant, rather than degree one.

A quadratic has $p(x)=ax^2+bx+c$, $a\ne0$. Completing the square gives

$$
p(x)=a(x-h)^2+k,\qquad h=-\frac b{2a},\qquad
k=c-\frac{b^2}{4a}.
$$

Its axis is $x=h$ and its vertex is $(h,k)$. If $a>0$, $k$ is the minimum; if $a<0$, it is the maximum. Larger $|a|$ changes the vertical scale. Roots solve $a(x-h)^2=-k$, so the sign of $-k/a$ decides whether there are two, one, or no real intercepts. No root formula is required for this graph reasoning.

## Cubic shape and a useful normal form

A cubic $ax^3+bx^2+cx+d$, $a\ne0$, has opposite end behaviours. If $a>0$, it goes toward negative outputs at the left infinite end and positive outputs at the right. It has at least one real zero by continuity. It may have one, two distinct with a repeated zero, or three distinct real zeros.

Shift $x=u-b/(3a)$ to remove its quadratic term. The result has form $a(u^3+pu+q)$. Subtracting the centre output $aq$ leaves $a(u^3+pu)$, an odd function of $u$. Thus every cubic graph has half-turn symmetry about an appropriate centre. The basic $x^3$ is strictly increasing, but $x^3-3x$ rises, then falls, then rises. A degree alone does not specify every turning feature.

For the latter example, compare values near $x=1$:

$$
p(1+h)-p(1)=h^2(3+h).
$$

For small nonzero $h$, this is positive, proving a local minimum at $(1,-2)$. Similarly $p(-1+h)-p(-1)=h^2(h-3)<0$ for small nonzero $h$, proving a local maximum at $(-1,2)$. This establishes the turns with elementary algebra.

## General degree and leading behaviour

For degree $n\ge1$, write

$$
p(x)=a_nx^n\left(1+\frac{a_{n-1}}{a_nx}+\cdots+\frac{a_0}{a_nx^n}\right).
$$

At either infinite input end, the parentheses tend to one. The leading term therefore determines end behaviour. For positive $a_n$, even degree gives positive outputs at both ends, while odd degree gives opposite signs. A negative leading coefficient reverses these signs. A nonzero degree-$n$ polynomial has at most $n$ distinct real zeros. Factoring out one linear factor per distinct root proves this degree bound.

Near a zero $r$ of multiplicity $m$, write $p(x)=(x-r)^m q(x)$ with $q(r)\ne0$. Odd $m$ gives an axis crossing; even $m$ gives touching without a sign change. Additional factors can create very different graphs with the same degree.

## Parabolas of nth order

The catalogue's “parabola of nth order” is the monomial family $y=ax^n$ for positive integer $n$, and its translated and scaled graphs. This older use of “parabola” is broader than the conic parabola, which has degree two. With even $n$, $x^n$ is even and has minimum zero. With odd $n$, it is odd and strictly increasing. On $0<|x|<1$, larger $n$ gives a smaller absolute output. For $|x|>1$, it gives a larger one. This explains the flatter centre and steeper outer portions without suggesting that all polynomials of degree $n$ have this shape.

## A degree bound is not an exact root count

A degree-four polynomial can have no real roots, as $x^4+1$ shows, or four distinct ones, as $(x-1)(x-2)(x-3)(x-4)$ shows. Counting roots without their multiplicities can also hide degree: $(x-1)^4$ has one distinct root but four repetitions of its linear factor. Complex roots complete the degree count over the complex numbers; a real graph displays only the real roots. [[Polynomial roots and higher degrees]] develops that distinction without equating a graph's visible intersections with all its algebraic roots.

## Worked example: roots, sign, and ends

For $f(x)=-(x+2)^2(x-1)$, the degree is three and the leading coefficient is $-1$. Thus outputs go to $+\infty$ on the left and $-\infty$ on the right. At $-2$ the double factor gives a touch; at one the simple factor gives a crossing. Except at $-2$, the squared factor is positive, so the sign is opposite that of $x-1$. Hence $f>0$ for $x<1$, with the zero at $-2$ removed, and $f<0$ for $x>1$. Finally $f(0)=4$ fixes a useful vertical intercept. These facts guide a sketch but do not assert exact turning-point coordinates.

## Practice

1. Find the vertex, range, and zeros of $q(x)=2x^2-8x+6$.
2. Compare $x^2$ and $x^6$ at $x=1/2$, $x=1$, and $x=2$. State their symmetry.

## Worked answers

1. Complete the square: $q(x)=2(x-2)^2-2$. The vertex is $(2,-2)$ and the range $[-2,\infty)$. Setting the square equal to one gives $x=1$ and $x=3$.
2. The values are $(1/4,1/64)$ at $1/2$, $(1,1)$ at one, and $(4,64)$ at two. Both functions are even. Increasing the degree flattens the central part within $|x|<1$ but raises the outer parts beyond $|x|>1$.
