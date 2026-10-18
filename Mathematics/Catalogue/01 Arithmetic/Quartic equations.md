---
title: "Quartic equations"
catalogue_ids:
  - "1.6.2.4"
---

> [!TLDR]
> Remove the cubic term, then solve a quadratic in x² or use an auxiliary cubic to factor the quartic into two quadratics.

## Choose a simple method first

A **quartic equation** has degree four: $Ax^4+Bx^3+Cx^2+Dx+E=0$, with $A\ne0$. Search first for a common factor or an evident root. If $r$ is a root, divide by $x-r$ and solve the resulting cubic using [[Cubic equations]]. The degree counts roots with repetition over the complex numbers; a quartic can have zero, two, or four distinct real roots, and repeated roots allow other counts.

An equation with only fourth, second, and constant terms is **biquadratic**. Set $z=x^2$, solve a quadratic for $z$, and then solve $x^2=z$ for every resulting value. For real roots, retain only $z\ge0$. For instance,

$$
x^4-5x^2+4=0
\iff z^2-5z+4=(z-1)(z-4)=0.
$$

Thus $x=\pm1$ or $x=\pm2$. Remember both square-root signs. For complex roots, a negative $z$ also contributes roots: $x^2=-4$ gives $x=\pm2i$, with $i^2=-1$.

## Remove the cubic term

Divide the original equation by $A$ to obtain $x^4+ax^3+bx^2+cx+d=0$. Set $x=y-a/4$. Expansion cancels the $y^3$ terms and gives

$$
y^4+py^2+qy+r=0,
$$

where

$$
\begin{aligned}
p&=b-\frac{3a^2}{8},\\
q&=c-\frac{ab}{2}+\frac{a^3}{8},\\
r&=d-\frac{ac}{4}+\frac{a^2b}{16}-\frac{3a^4}{256}.
\end{aligned}
$$

This is the **depressed quartic**. After finding each $y$, return to $x=y-a/4$. If $q=0$, it is biquadratic in $y$ and needs no cubic method. In particular, take this simpler branch before using a formula that divides by $q$ or by an auxiliary square root.

## Ferrari’s method: create a difference of squares

For $q\ne0$, seek numbers $m,s,t$ such that

$$
y^4+py^2+qy+r=(y^2+m)^2-(sy+t)^2.
$$

Expand the right side: it is $y^4+(2m-s^2)y^2-2sty+(m^2-t^2)$. Equating coefficients requires

$$
s^2=2m-p,\qquad t=-\frac{q}{2s},\qquad m^2-t^2=r.
$$

Insert $t^2=q^2/[4(2m-p)]$ into the last condition. This gives an **auxiliary**, or **resolvent**, cubic for $m$:

$$
(2m-p)(m^2-r)=\frac{q^2}{4}.
$$

It can also be written $2m^3-pm^2-2rm+pr-q^2/4=0$. Solve it by a factor when possible, or with the cubic lesson. For real coefficients choose a real solution with $2m-p>0$. Such a choice exists: after subtracting $q^2/4$, the left side is negative at $m=p/2$ and positive for sufficiently large positive $m$. A polynomial is continuous, so it must pass through zero between these inputs. No choice can have $2m-p=0$ when $q\ne0$.

Now take $s=\sqrt{2m-p}>0$ and $t=-q/(2s)$. Use $U^2-V^2=(U-V)(U+V)$ to obtain two quadratics:

$$
\bigl(y^2-sy+m-t\bigr)\bigl(y^2+sy+m+t\bigr)=0.
$$

Solve both with the quadratic formula, including complex roots if requested. This is a full procedure for a general quartic with real coefficients. The arithmetic can be long, but each stage uses a method already introduced. Do not round the auxiliary root early: a small error can spoil the exact factorization.

## Worked example: a quartic with a linear term

Solve $x^4-4x+3=0$. It is already depressed, so $y=x$, $p=0$, $q=-4$, $r=3$.

1. The resolvent is $2m(m^2-3)=4$, or $m^3-3m-2=0$.
2. Factor: $(m-2)(m+1)^2=0$. Choose $m=2$, since $2m-p=4>0$.
3. Then $s=2$ and $t=-(-4)/(2\cdot2)=1$.
4. The quadratic factors are $x^2-2x+1$ and $x^2+2x+3$.
5. The first gives $x=1$, twice. The second gives $(x+1)^2=-2$, so $x=-1\pm i\sqrt2$.

Check the factorization directly:

$$
(x-1)^2\bigl((x+1)^2+2\bigr)=x^4-4x+3.
$$

The second factor is positive for real $x$, so $1$ is the only real root value. The multiplicities still total four: two from $1$ and one from each complex root.

## Practice

1. Solve $x^4+3x^2-4=0$ over the real numbers and then over the complex numbers.
2. For $x^4-7x^2-6x=0$, verify that $m=1$ solves the resolvent. Use Ferrari’s factors to find all four roots.

## Worked answers

1. Set $z=x^2$. Then $z^2+3z-4=(z+4)(z-1)=0$. The real roots are $\pm1$. The value $z=-4$ contributes $\pm2i$ over the complex numbers. These four roots also follow from $(x^2+4)(x^2-1)=0$.
2. Here $p=-7$, $q=-6$, $r=0$. At $m=1$, $(2+7)(1)=9=q^2/4$. Thus $s=3$ and $t=1$. The factors are $(x^2-3x)(x^2+3x+2)=x(x-3)(x+1)(x+2)$. Hence the roots are $0,3,-1,-2$.

## Reference

[NIST DLMF §1.11(iii)](https://dlmf.nist.gov/1.11#iii) gives the classical quartic reduction. The coefficient comparison above derives the particular resolvent used in this lesson; different parameter choices produce different-looking equivalent resolvents.
