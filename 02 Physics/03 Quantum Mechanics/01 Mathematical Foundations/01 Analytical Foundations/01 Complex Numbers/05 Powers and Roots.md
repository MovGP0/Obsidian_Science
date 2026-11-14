---
title: "Powers and Roots"
---

> [!TLDR]
> In exponential form, integer powers multiply the argument. The nth roots of a nonzero complex number have equal absolute values and are equally spaced on a circle.

In exponential form, powers are simple:

$$
z^n=r^n\mathrm{e}^{\mathrm{i}n\theta}
=r^n\bigl(\cos(n\theta)+\mathrm{i}\sin(n\theta)\bigr).
$$

This result is **de Moivre's theorem** (1730).

The $n$th roots of $z=r\mathrm{e}^{\mathrm{i}\theta}$ are

$$
z_k=r^{1/n}\mathrm{e}^{\mathrm{i}(\theta+2k\pi)/n},
\qquad k=0,1,\ldots,n-1.
$$

There are exactly $n$ distinct $n$th roots. They are equally spaced on a circle of radius $r^{1/n}$.

> [!note]
> The statement about $n$ distinct roots assumes $z\ne0$ and a positive integer $n$. For $z=0$, the only distinct root is $0$.

## Example — The cube roots of −8

Write $-8=8\mathrm{e}^{\mathrm{i}\pi}$. Its absolute value is $8$, and its argument is $\pi$. The three cube roots are

$$
\begin{aligned}
z_0&=2\mathrm{e}^{\mathrm{i}\pi/3}
=2\left(\frac12+\mathrm{i}\frac{\sqrt3}{2}\right)
=1+\mathrm{i}\sqrt3,\\
z_1&=2\mathrm{e}^{\mathrm{i}\pi}
=2(-1+\mathrm{i}\cdot0)=-2,\\
z_2&=2\mathrm{e}^{5\mathrm{i}\pi/3}
=2\left(\frac12-\mathrm{i}\frac{\sqrt3}{2}\right)
=1-\mathrm{i}\sqrt3.
\end{aligned}
$$

*Verification of $z_1$:*

$$
(-2)^3=-8.\quad\checkmark
$$

*Verification of $z_0$:* calculate $(1+\mathrm{i}\sqrt3)^3$ in steps:

$$
(1+\mathrm{i}\sqrt3)^2=1+2\mathrm{i}\sqrt3-3=-2+2\mathrm{i}\sqrt3.
$$

$$
\begin{aligned}
(-2+2\mathrm{i}\sqrt3)(1+\mathrm{i}\sqrt3)
&=-2-2\mathrm{i}\sqrt3+2\mathrm{i}\sqrt3+2\mathrm{i}^2\cdot3\\
&=-2-6=-8.\quad\checkmark
\end{aligned}
$$

In the complex plane, these roots form an equilateral triangle inscribed in a circle of radius $2$.

## Why these are all the roots

Take $z\ne0$ and a positive integer $n$. If $w^n=z$, write $w=s\mathrm{e}^{\mathrm{i}\varphi}$ with $s>0$. Equality requires $s^n=r$ and $n\varphi=\theta+2\pi k$. The positive real root fixes $s=r^{1/n}$, and the angle condition gives precisely the listed values. Two values repeat exactly when their indices differ by a multiple of $n$. This proves both that the formula gives roots and that none are missing.

The power formula holds for nonnegative integers without division. For negative integers, require $z\ne0$. General noninteger powers need a logarithm branch; they cannot be used with integer power rules without further checks. For example, using principal square roots, $\sqrt{(-1)(-1)}=1$ while $\sqrt{-1}\sqrt{-1}=-1$.

As a transfer check, replace the argument $\pi$ of $-8$ with $3\pi$ in the cube-root example. The roots are permuted, not changed. This is useful when phase representatives are changed in quantum calculations: the complex values, rather than the written angle representatives, determine the result.
