---
title: "Integer powers of complex numbers"
catalogue_ids:
  - "1.5.3.5"
---

> [!TLDR]
> To raise a nonzero complex number to an integer power, raise its modulus to that power and multiply its argument by the exponent.

## Powers mean repeated multiplication

For a positive integer $n$, the power $z^n$ means $n$ copies of $z$ multiplied together. For example, $z^3=z\cdot z\cdot z$. The imaginary unit has the short cycle

$$
i^0=1,\quad i^1=i,\quad i^2=-1,\quad i^3=-i,\quad i^4=1.
$$

The last equality follows from $i^4=(i^2)^2=(-1)^2=1$. The same four values then repeat. To find $i^{37}$, write $37=4\cdot9+1$. Thus $i^{37}=(i^4)^9i=i$. This remainder method works for nonnegative integer exponents without a long expansion.

For a general complex number, direct multiplication also works. For example,

$$
(1+i)^2=1+2i+i^2=2i,
\qquad (1+i)^4=(2i)^2=-4.
$$

For large exponents, the polar form from [[Polar form of complex numbers]] is often shorter.

## Derive De Moivre’s formula

Let $z=r(\cos\theta+i\sin\theta)$ with $r>0$. Multiplication combines positive moduli by multiplication and combines arguments by addition. This was derived from the trigonometric addition formulas in [[Exponential form of complex numbers]]. Multiplying two copies gives modulus $r^2$ and argument $2\theta$. Multiplying a third gives modulus $r^3$ and argument $3\theta$. Repeating the same step gives **De Moivre’s formula**:

$$
z^n=r^n\bigl(\cos(n\theta)+i\sin(n\theta)\bigr)
=r^ne^{in\theta},\qquad n\ge1.
$$

This is a rule for integer powers. The modulus is raised to the power; it is not multiplied by $n$. The argument is multiplied by $n$; it is not raised to the power. Angles that differ by full turns describe the same result. Replacing $\theta$ by $\theta+2\pi k$ adds $2\pi nk$ to the final angle, so the integer-power answer does not depend on which argument you start with.

## Worked example: a sixth power

Calculate $(1+i)^6$.

1. Find the modulus: $r=\sqrt{1^2+1^2}=\sqrt2$.
2. Both coordinates are positive and equal, so choose $\theta=\pi/4$.
3. Apply the formula:

$$
(1+i)^6=(\sqrt2)^6e^{i6\pi/4}
=8e^{i3\pi/2}=-8i.
$$

4. Check by a different grouping: $(1+i)^2=2i$, so $(1+i)^6=((1+i)^2)^3=(2i)^3=8i^3=-8i$.

The agreement checks the modulus and the angle. A wrong sign in $i^2$ would fail the direct check.

## Zero and negative exponents

For $z\ne0$, define $z^0=1$. This is consistent with $z^m/z^m=1$ when $m$ is a positive integer. We leave $0^0$ undefined in this lesson. For a positive integer $m$, define a negative power by

$$
z^{-m}=\frac1{z^m},\qquad z\ne0.
$$

Since $z^{-1}=r^{-1}e^{-i\theta}$, De Moivre’s formula also holds for negative integers. For example,

$$
(1+i)^{-2}=(\sqrt2)^{-2}e^{-i\pi/2}
=\frac12(-i)=-\frac i2.
$$

The check is $(1+i)^2(-i/2)=(2i)(-i/2)=-i^2=1$. Zero has positive powers equal to zero, but zero has no negative power because division by zero is undefined. Do not use an angle for zero.

## General exponent rules and their limits

For integer $m,n$, the familiar identities $z^mz^n=z^{m+n}$ and $(z^m)^n=z^{mn}$ hold wherever all expressions are defined. Require $z\ne0$ if a zero or negative exponent occurs under the conventions here. For positive exponents, zero is allowed. Also $(zw)^n=z^nw^n$; require both factors to be nonzero when negative powers occur.

These rules have not yet defined arbitrary fractional or complex powers. A fractional exponent can select a principal value or refer informally to all solutions of a root equation. That distinction matters. For example, $w^2=1$ has two roots, although the ordinary symbol $\sqrt1$ selects the positive real value $1$. Read [[All roots of complex numbers]] before applying root notation to complex inputs.

When $|z|=1$, each integer power stays on the unit circle. Multiplication changes direction but not distance. When $|z|>1$, positive powers increase in modulus. When $0<|z|<1$, positive powers decrease in modulus. These statements compare the real distances, not an order on complex numbers. For rotation applications, see [[06.06 Rotations and products]].

## Practice

1. Calculate $i^{2026}$ and $(\sqrt3+i)^3$.
2. Calculate $(1-i)^{-4}$ and check by multiplying it by $(1-i)^4$.

### Worked answers

1. Since $2026=4\cdot506+2$, the first value is $i^2=-1$. The second base has modulus $2$ and argument $\pi/6$. Its cube is $2^3e^{i\pi/2}=8i$.
2. The base has modulus $\sqrt2$ and argument $-\pi/4$. Its power is $(\sqrt2)^{-4}e^{i\pi}=-1/4$. Directly, $(1-i)^2=-2i$ and $(1-i)^4=(-2i)^2=-4$. Multiplication gives $(-1/4)(-4)=1$.
