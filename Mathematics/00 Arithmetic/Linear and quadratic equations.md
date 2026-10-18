---
title: "Linear and quadratic equations"
catalogue_ids:
  - "1.6.2"
  - "1.6.2.1"
  - "1.6.2.2"
---

> [!TLDR]
> A linear equation isolates one power of the unknown; factoring or completing the square solves a quadratic equation.

## Equations of first to fourth degree

Put a polynomial equation in normal form before selecting a method. A nonzero polynomial has **degree** equal to its largest power with nonzero coefficient. Degrees one, two, three, and four are called linear, quadratic, cubic, and quartic. Every such equation can be solved by arithmetic and a finite number of root operations, with complex numbers when needed. This lesson develops the first two cases. Continue with [[Cubic equations]] and [[Quartic equations]] for the other two.

An equation can look quadratic before terms cancel. For example, $x^2+2x=x^2+6$ reduces to $2x-6=0$, which has degree one. Always simplify first. Preserve any domain restriction from the original problem, as in [[Equation forms and safe transformations]]. Unless stated otherwise, seek real solutions.

## First-degree equations and exceptional cases

The normal form is $ax+b=0$ with fixed coefficients. If $a\ne0$, subtract $b$ and divide by $a$:

$$
x=-\frac ba.
$$

There is exactly one solution. If $a=0$, there is no first-degree term: $b=0$ makes every allowed input a solution, while $b\ne0$ makes the equation impossible. These cases matter when a coefficient contains a parameter, which is a fixed but unspecified number.

For example, $k x=6$ gives $x=6/k$ only when $k\ne0$. When $k=0$, it reads $0=6$ and has no solution. Do not use a formula that divides by a coefficient before checking that coefficient.

To solve $4(2x-3)=3x+8$, expand to $8x-12=3x+8$. Subtract $3x$ and add $12$ to get $5x=20$. Thus $x=4$. The original sides are $4(8-3)=20$ and $12+8=20$.

## Factor a quadratic

A quadratic has normal form $ax^2+bx+c=0$, where $a\ne0$. If it factors as a product, the **zero-product rule** says at least one factor must be zero. For example,

$$
x^2+x-6=(x+3)(x-2).
$$

Therefore $x^2+x-6=0$ has roots $-3$ and $2$. A **root** is an input at which a polynomial is zero. Use the zero-product rule only when one side is zero. From $(x+3)(x-2)=6$, neither factor must be zero.

## Derive the quadratic formula

When factors are not clear, complete the square. Start with $ax^2+bx+c=0$ and divide by $a$:

$$
x^2+\frac ba x=-\frac ca.
$$

Add $b^2/(4a^2)$ to both sides. The left side becomes a square:

$$
\left(x+\frac b{2a}\right)^2=\frac{b^2-4ac}{4a^2}.
$$

Equivalently, $(2ax+b)^2=b^2-4ac$. Taking both square-root signs gives

$$
x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}.
$$

The symbol $\pm$ means calculate once with plus and once with minus. It does not mean that the solutions are always opposites. The number $D=b^2-4ac$ is the **discriminant**. For real coefficients, $D>0$ gives two distinct real roots, $D=0$ gives one root repeated twice, and $D<0$ gives no real root.

A repeated root occurs because the polynomial contains a squared factor. For example, $x^2-6x+9=(x-3)^2$, so the root $3$ has **multiplicity two**. It is one solution value counted twice in the factorization.

## Worked example: all terms and both signs

Solve $2x^2-4x-3=0$. Here $a=2$, $b=-4$, and $c=-3$.

1. Calculate $D=(-4)^2-4(2)(-3)=16+24=40$.
2. Substitute: $x=(4\pm\sqrt{40})/4$.
3. Simplify $\sqrt{40}=2\sqrt{10}$ to obtain $x=1\pm\sqrt{10}/2$.
4. Check by rewriting the polynomial as $2(x-1)^2-5$. Either root has $(x-1)^2=10/4$, which gives $2(10/4)-5=0$.

Completing the square also shows the real cases directly. A square cannot be negative. If complex solutions are requested, define $i$ by $i^2=-1$ and write $\sqrt{-d}=i\sqrt d$ for $d>0$. Thus $x^2+2x+5=0$ gives $x=-1\pm2i$. [[06.01 Complex arithmetic]] explains calculations with these numbers. No imaginary unit is needed when only real solutions are requested.

## Practice

1. Solve $(k-2)x=k-2$ for each real parameter $k$.
2. Solve $3x^2+6x-2=0$ by completing the square.

## Worked answers

1. If $k\ne2$, divide by $k-2$ and obtain $x=1$. If $k=2$, the equation becomes $0=0$, and every real $x$ is a solution.
2. Divide by three: $x^2+2x=2/3$. Add one: $(x+1)^2=5/3$. Thus $x=-1\pm\sqrt{5/3}=-1\pm\sqrt{15}/3$. Substitution into $3(x+1)^2-5$ gives zero for both values.
