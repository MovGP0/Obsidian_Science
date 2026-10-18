---
title: "Repeated differentiation"
catalogue_ids:
  - "6.1.3"
  - "6.1.3.1"
  - "6.1.3.2"
  - "6.1.3.3"
  - "6.1.3.4"
  - "6.1.3.5"
---

> [!TLDR]
> Higher derivatives are derivatives of earlier derivatives; parameters and inverse functions require the chain rule at every order.

## Why take another derivative

The first derivative describes the local change of a function. Its own derivative describes how that local rule changes. For example, the slope of $x^2$ is $2x$, and the slope of $2x$ is the constant $2$. Start with [[Elementary derivative methods]]. The calculations below use the same rules repeatedly, but the independent variable must remain clear.

## Orders and elementary patterns

Define $f^{(0)}=f$, $f^{(1)}=f'$, and $f^{(n+1)}=(f^{(n)})'$ wherever this derivative exists. The symbols $f''$ and $f^{(3)}$ denote the second and third derivatives. The notation $f^{(n)}$ is an order, not a power. A function is $C^n$ on an interval if its derivatives through order $n$ exist and are continuous there. Existence alone is weaker.

For an integer $m\ge0$, repeated use of the power rule yields

$$
\frac{\mathrm d^n}{\mathrm dx^n}x^m=
\begin{cases}\dfrac{m!}{(m-n)!}x^{m-n},&0\le n\le m,\\0,&n>m.\end{cases}
$$

The factorial $m!$ is $m(m-1)\cdots1$, with $0!=1$. For a real exponent $p$ on $x>0$, the repeated-power coefficient is $p(p-1)\cdots(p-n+1)$. Other useful patterns are

$$
(e^{ax})^{(n)}=a^n e^{ax},\qquad
(\sin x)^{(n)}=\sin(x+n\pi/2),
$$

and, for $n\ge1$ and $x>0$,

$$
(\ln x)^{(n)}=(-1)^{n-1}\frac{(n-1)!}{x^n}.
$$

Check a proposed pattern at small orders before using it at large $n$. The sine derivatives repeat every four orders; the exponential factor acquires one factor $a$ at every step.

## Leibniz rule for a repeated product

If $u$ and $v$ have derivatives through order $n$, then

$$
(uv)^{(n)}=\sum_{k=0}^{n}\binom nk u^{(k)}v^{(n-k)},\qquad
\binom nk=\frac{n!}{k!(n-k)!}.
$$

For $n=2$ this is $u''v+2u'v'+uv''$. The coefficient $2$ occurs because differentiating $u'v$ or $uv'$ produces the same middle term. At each further order, adjacent coefficients add, giving Pascal's triangle and proving the general rule by induction.

For a worked example, take $u=x^2$ and $v=e^x$. Their fourth product derivative has only three nonzero terms, because $u^{(k)}=0$ for $k>2$:

$$
(x^2e^x)^{(4)}=x^2e^x+4(2x)e^x+6(2)e^x
=e^x(x^2+8x+12).
$$

This rule avoids expanding four long intermediate derivatives.

## Curves given by a parameter

Suppose $x=x(t)$ and $y=y(t)$ are twice continuously differentiable, and $x'(t)\ne0$ on the local branch. Locally $x$ can serve as the independent variable. The chain rule gives

$$
\frac{\mathrm dy}{\mathrm dx}=\frac{y'}{x'},\qquad
\frac{\mathrm d^2y}{\mathrm dx^2}
=\frac1{x'}\frac{\mathrm d}{\mathrm dt}\left(\frac{y'}{x'}\right)
=\frac{y''x'-y'x''}{(x')^3}.
$$

Primes on the right mean derivatives with respect to $t$. The second derivative is generally not $y''/x''$. For higher orders apply the operator $(1/x')\,\mathrm d/\mathrm dt$ again to the previous result.

For $x=t^2$ and $y=t^3$ on $t>0$, the first derivative is $3t/2$ and the second is $3/(4t)$. Eliminating $t$ gives $y=x^{3/2}$ on $x>0$, whose second derivative is $3/(4\sqrt{x})$, the same expression. At $t=0$ the division by $x'$ is invalid; this requires a separate analysis.

## Derivatives of an inverse function

Let $y=f(x)$ be $C^n$ near a point, with $f'(x)\ne0$ there. The inverse function theorem supplies a $C^n$ local inverse $x=g(y)$. Differentiate $f(g(y))=y$:

$$
g'(y)=\frac1{f'(x)},\qquad
g''(y)=-\frac{f''(x)}{(f'(x))^3},\quad x=g(y).
$$

To obtain the second formula, differentiate the first with respect to $y$, then multiply the derivative with respect to $x$ by $\mathrm dx/\mathrm dy=1/f'(x)$. The recurrence for higher orders is $\mathrm d/\mathrm dy=(1/f'(x))\,\mathrm d/\mathrm dx$, evaluated on the inverse branch. One more step gives $g^{(3)}=[3(f'')^2-f'f^{(3)}]/(f')^5$, if $n\ge3$.

For $f(x)=x^2$ on $x>0$, $g(y)=\sqrt y$ and $g''=-2/(2x)^3=-1/(4y^{3/2})$. The branch restriction is essential: $x^2$ on the whole real line is not one-to-one. For a more elementary entry to local inversion, see [[07.07 Implicit and inverse differentiation]].

## Practice

1. Find the fifth derivative of $x e^{2x}$.
2. For $x=e^t$, $y=t^2$, find $\mathrm d^2y/\mathrm dx^2$ and check it after eliminating $t$.

## Worked answers

1. Leibniz gives $x(2^5e^{2x})+5(1)(2^4e^{2x})=e^{2x}(32x+80)$. All derivatives of $x$ above order one vanish.
2. The first derivative is $2te^{-t}$. Apply $e^{-t}\,\mathrm d/\mathrm dt$ to get $2(1-t)e^{-2t}$. Eliminating the parameter gives $y=(\ln x)^2$ for $x>0$. Its derivatives are $2\ln x/x$ and $2(1-\ln x)/x^2$, which agree.
