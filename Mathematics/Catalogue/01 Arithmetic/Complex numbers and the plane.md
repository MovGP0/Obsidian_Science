---
title: "Complex numbers and the plane"
catalogue_ids:
  - "1.5"
  - "1.5.1"
  - "1.5.1.1"
  - "1.5.1.2"
  - "1.5.2"
  - "1.5.2.1"
  - "1.5.2.2"
---

> [!TLDR]
> A complex number has two real coordinates; the rule i² = −1 extends ordinary arithmetic and gives a useful picture in a plane.

## Why introduce another kind of number?

In real arithmetic, a square cannot be negative. Positive and negative numbers both have nonnegative squares, and zero has square zero. Thus the equation $x^2=-1$ has no real solution. We extend the number system by introducing the **imaginary unit** $i$, with the defining rule

$$
i^2=-1.
$$

The name imaginary is historical. It does not mean that calculations with $i$ are invalid. It tells us that $i$ is outside the real number line. This extension is similar in purpose to introducing negative numbers so that an equation such as $x+3=1$ has a solution.

A **complex number** is a number of the form

$$
z=a+bi,\qquad a,b\in\mathbb R.
$$

The symbol $\mathbb R$ means the set of real numbers. The symbol $\mathbb C$ means the set of complex numbers. In $a+bi$, the real part is $a$ and the imaginary part is $b$. Both parts are real numbers. For example, $z=4-3i$ has real part $4$ and imaginary part $-3$, rather than $-3i$.

Every real number is also complex: $5=5+0i$. A purely imaginary number has zero real part, such as $-2i=0-2i$. Zero has both parts zero. We normally select $i$ as the principal square root of $-1$, but the equation $x^2=-1$ has two solutions, $i$ and $-i$, because $(-i)^2=-1$ too.

## Equality means that both parts agree

Two complex numbers are equal exactly when their real parts agree and their imaginary parts agree:

$$
a+bi=c+di\quad\Longleftrightarrow\quad a=c\ \text{and}\ b=d.
$$

The double arrow means that each statement implies the other. Do not add the two coordinates before comparing them. For example, $2+3i$ differs from $3+2i$, even though $2+3=3+2$.

Equality is useful for finding unknown real coefficients. If $p+(q-1)i=3+4i$ and $p,q$ are real, comparison gives $p=3$ and $q-1=4$, hence $q=5$. The requirement that $p,q$ are real matters because it makes them the actual coordinate coefficients.

## The complex plane and vector representation

Draw two perpendicular axes with the same scale. Use the horizontal axis for the real coordinate and the vertical axis for the imaginary coordinate. The number $a+bi$ corresponds to the point $(a,b)$. This picture is called the **complex plane**.

The arrow from the origin $(0,0)$ to $(a,b)$ gives a second interpretation: a displacement, or **vector**, with horizontal component $a$ and vertical component $b$. Here a vector simply means an arrow with a size and direction. You do not need vector-space theory. A point describes a position; an arrow describes the move from the origin to that position.

The length of this arrow is the **modulus**:

$$
|a+bi|=\sqrt{a^2+b^2}.
$$

This formula follows from the Pythagorean theorem. The two perpendicular sides have lengths $|a|$ and $|b|$. Their squares are $a^2$ and $b^2$. A modulus is always a nonnegative real number, and it is zero only at the origin.

![[arithmetic-complex-plane-conjugation.svg|**Fig. A.complex.1** The number 3 + 2i is an arrow to (3, 2). Its conjugate 3 − 2i is its reflection in the real axis.]]

Fig. A.complex.1 shows the two coordinate signs separately. The reflected point has the same horizontal coordinate and the opposite vertical coordinate. Conjugation and its use in division are taught in [[Complex arithmetic and conjugates]].

## Worked example: equation and location

Find real $x,y$ from $(x-2)+(2y+1)i=-3+5i$. Locate the result and calculate its modulus.

1. Compare real parts: $x-2=-3$, so $x=-1$.
2. Compare imaginary parts: $2y+1=5$, so $2y=4$ and $y=2$.
3. The complex number on each side is $-3+5i$. Its point is $(-3,5)$: three steps left and five steps up.
4. Its modulus is $\sqrt{(-3)^2+5^2}=\sqrt{34}$, approximately $5.83$.

Substitution checks the answer: $(-1-2)+(2\cdot2+1)i=-3+5i$.

## What the picture does not imply

The plane does not give complex numbers the usual order of the real line. Statements such as $2+i>1+2i$ have no standard arithmetic meaning. You can compare their moduli, which are real lengths. In this example both moduli are $\sqrt5$, although the complex numbers are different.

For more geometric examples, including the distance between two complex points, see [[06.02 The complex plane]]. Continue with the four operations in [[Complex arithmetic and conjugates]].

## Practice

1. State the real part, imaginary part, point coordinates, and modulus of $-4-3i$.
2. Find real $u,v$ if $(2u+1)+(3-v)i=7-2i$.

### Worked answers

1. The real part is $-4$, the imaginary part is $-3$, and the point is $(-4,-3)$. The modulus is $\sqrt{16+9}=5$. Both coordinates are negative, so the point is left of and below the origin.
2. Compare real parts: $2u+1=7$, so $2u=6$ and $u=3$. Compare imaginary parts: $3-v=-2$, so $-v=-5$ and $v=5$. Substitution gives $7-2i$ as required.
