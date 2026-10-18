---
title: "Cubic equations"
catalogue_ids:
  - "1.6.2.3"
---

> [!TLDR]
> Reduce a cubic to a simpler form, then use a known factor, Cardano’s construction, or a trigonometric substitution to find its roots.

## Start with factors

A **cubic equation** is $Ax^3+Bx^2+Cx+D=0$, with $A\ne0$. A cubic has at least one real root when its coefficients are real. It can have three distinct real roots, repeated roots, or one real root and two nonreal complex roots.

First test simple factors. If $r$ is a root, polynomial division removes the factor $x-r$ and leaves a quadratic. For example,

$$
x^3-2x^2-x+2=(x-2)(x^2-1)=(x-2)(x-1)(x+1).
$$

This gives $2,1,-1$. Testing integers is useful, but a cubic need not have a rational root. The method below also works when guessing fails. Review [[Linear and quadratic equations]] if completing the square or the quadratic formula is unfamiliar.

## Remove the square term

Divide by $A$ to write $x^3+ax^2+bx+c=0$. Set $x=t-a/3$, expand, and collect powers of $t$. The $t^2$ terms cancel, leaving the **depressed cubic**

$$
t^3+pt+q=0,\qquad
p=b-\frac{a^2}{3},\qquad
q=\frac{2a^3}{27}-\frac{ab}{3}+c.
$$

“Depressed” means the next-to-highest power has been removed. The substitution is reversible: recover each original root with $x=t-a/3$. For example, $x^3-6x^2+12x-8=0$ has $a=-6$, so $x=t+2$ reduces it to $t^3=0$. Its only root value is $2$, repeated three times.

## Derive Cardano’s construction

Write $t=u+v$. Expanding gives

$$
t^3+pt+q=u^3+v^3+(3uv+p)(u+v)+q.
$$

Choose $uv=-p/3$ and $u^3+v^3=-q$. Then the expression is zero. The two numbers $u^3$ and $v^3$ have sum $-q$ and product $-p^3/27$. They therefore solve the quadratic $z^2+qz-p^3/27=0$. Define

$$
\Delta=\left(\frac q2\right)^2+\left(\frac p3\right)^3.
$$

The quadratic formula gives $u^3=-q/2+\sqrt\Delta$ and $v^3=-q/2-\sqrt\Delta$. For $\Delta\ge0$, use **real cube roots**. A real cube root preserves the sign: $\sqrt[3]{-8}=-2$. Their sum gives a real root

$$
t=\sqrt[3]{-q/2+\sqrt\Delta}+\sqrt[3]{-q/2-\sqrt\Delta}.
$$

Our $\Delta$ is Cardano’s radicand; some books use a polynomial discriminant with a different sign and scale. For real coefficients, $\Delta>0$ means one real root, $\Delta<0$ means three distinct real roots, and $\Delta=0$ means a repeated root. In the last case put $s=\sqrt[3]{-q/2}$: the roots are $2s,-s,-s$. If $p=q=0$, all three are zero.

## Worked example: find every root

Solve $x^3-6x-9=0$. No shift is needed: $p=-6$, $q=-9$.

1. Calculate $\Delta=81/4-8=49/4$.
2. Then $u=\sqrt[3]{9/2+7/2}=2$ and $v=\sqrt[3]{9/2-7/2}=1$.
3. The real root is $x=3$. Check $27-18-9=0$.
4. Divide by $x-3$: $x^3-6x-9=(x-3)(x^2+3x+3)$.
5. The quadratic has discriminant $9-12=-3$. Its roots are $(-3+i\sqrt3)/2$ and $(-3-i\sqrt3)/2$, where $i^2=-1$.

If the problem requests only real roots, report $3$. If it requests all complex roots, include the pair. [[06.01 Complex arithmetic]] supplies the arithmetic used in the last step.

## Three real roots without complex intermediate steps

When $\Delta<0$, necessarily $p<0$. Let $R=\sqrt{-p/3}$ and set $t=2R\cos\theta$. Here cosine is the horizontal coordinate on the unit circle; angles are in radians. The identity $4\cos^3\theta-3\cos\theta=\cos3\theta$ turns the cubic into

$$
\cos3\theta=-\frac{q}{2R^3}.
$$

The right side lies strictly between $-1$ and $1$. Let $\alpha=\arccos(-q/(2R^3))$, the selected angle in $[0,\pi]$ with that cosine. The three roots are

$$
t_k=2R\cos\left(\frac{\alpha+2k\pi}{3}\right),\qquad k=0,1,2.
$$

For $t^3-3t+1=0$, $R=1$, $\alpha=2\pi/3$, and the three roots are $2\cos(2\pi/9+2k\pi/3)$. [[Trigonometric equations]] explains inverse cosine and full-turn branches.

For a uniform complex method instead, choose cube roots as a **paired** choice. Choose a nonzero cube root $u$ of either $-q/2+\sqrt\Delta$ or $-q/2-\sqrt\Delta$, then set $v=-p/(3u)$. With $\omega=(-1+i\sqrt3)/2$, the three roots are $u+v$, $\omega u+\omega^2v$, and $\omega^2u+\omega v$. The exceptional case where both choices vanish is $p=q=0$. Independent arbitrary cube-root choices can violate $uv=-p/3$ and give a false result.

## Practice

1. Solve $x^3+3x-4=0$, and find its two remaining complex roots after finding a real one.
2. Solve $x^3-3x=0$ over the reals. Check the three-root case using $\Delta$.

## Worked answers

1. Here $\Delta=4+1=5$. The real-root expression is $\sqrt[3]{2+\sqrt5}+\sqrt[3]{2-\sqrt5}=1$, as can also be checked directly. Division gives $(x-1)(x^2+x+4)$, so the other roots are $(-1\pm i\sqrt{15})/2$.
2. Factor $x(x^2-3)=0$ to get $0,\sqrt3,-\sqrt3$. Here $p=-3$, $q=0$, so $\Delta=-1<0$, consistent with three distinct real roots.

## Reference

[NIST DLMF §1.11(iii)](https://dlmf.nist.gov/1.11#iii) records the classical cubic construction. [NIST DLMF §4.43](https://dlmf.nist.gov/4.43) gives trigonometric forms for cubic roots. The derivation above uses the paired product condition to explain the root choices.
