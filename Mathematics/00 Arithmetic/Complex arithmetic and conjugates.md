---
title: "Complex arithmetic and conjugates"
catalogue_ids:
  - "1.5.2.5"
  - "1.5.3"
  - "1.5.3.1"
  - "1.5.3.2"
  - "1.5.3.3"
  - "1.5.3.4"
---

> [!TLDR]
> Collect matching parts for addition, distribute for multiplication, and use the conjugate to make a division denominator real.

## Starting rules

Read [[Complex numbers and the plane]] first if $a+bi$ is new to you. Here $a,b,c,d$ are real numbers and $i^2=-1$. The usual rules for brackets, signs, fractions, and real coefficients still apply. The extra task is to reduce each $i^2$ to $-1$ and then collect the real and imaginary terms.

## Addition and subtraction

Add matching components:

$$
(a+bi)+(c+di)=(a+c)+(b+d)i.
$$

For example, $(3-2i)+(-1+5i)=(3-1)+(-2+5)i=2+3i$. In the plane, these are two successive displacements: move three right and two down, then one left and five up. The combined move is two right and three up.

Subtraction removes the whole second number. Apply the minus sign to both of its components:

$$
\begin{aligned}
(3-2i)-(-1+5i)
&=3-2i+1-5i\\
&=4-7i.
\end{aligned}
$$

The additive inverse of $a+bi$ is $-a-bi$. Their sum is zero. This is different from the conjugate introduced below.

## Multiplication

Use the distributive rule to form all four products:

$$
\begin{aligned}
(a+bi)(c+di)
&=ac+adi+bci+bdi^2\\
&=(ac-bd)+(ad+bc)i.
\end{aligned}
$$

For instance,

$$
(2+3i)(1-4i)=2-8i+3i-12i^2=14-5i.
$$

The last real contribution is $+12$, because $-12i^2=-12(-1)=12$. A product does not multiply corresponding coordinates separately. Doing that would omit the cross terms and the contribution from $i^2$.

## Complex conjugates

The **conjugate** of $z=a+bi$ is written $\overline z=a-bi$. It reverses the sign of the imaginary coordinate, as shown in Fig. A.complex.1 in [[Complex numbers and the plane]]. Thus the conjugate of $2-3i$ is $2+3i$. Conjugation twice restores the original number.

Two important calculations are

$$
z+\overline z=2a,\qquad
z\overline z=(a+bi)(a-bi)=a^2+b^2=|z|^2.
$$

Both results are real. In the product the imaginary cross terms cancel. The final value is positive when $z\ne0$. The conjugate is not the negative: for $z=2+3i$, these are $2-3i$ and $-2-3i$, respectively. See [[06.03 Conjugation and modulus]] for further identities and proofs.

## Division

Division by zero is undefined, including complex zero $0+0i$. For a nonzero denominator $c+di$, multiply numerator and denominator by $c-di$:

$$
\begin{aligned}
\frac{a+bi}{c+di}
&=\frac{(a+bi)(c-di)}{(c+di)(c-di)}\\
&=\frac{(ac+bd)+(bc-ad)i}{c^2+d^2}.
\end{aligned}
$$

The denominator is nonzero because $c,d$ cannot both vanish. Multiplication by the same nonzero number in the numerator and denominator leaves the fraction unchanged. This explains the method; it is not a rule for dividing each component independently.

## Worked example: combine a product and a quotient

Calculate

$$
A=\frac{(2+i)(1-2i)}{1-i}.
$$

First expand the numerator:

$$
(2+i)(1-2i)=2-4i+i-2i^2=4-3i.
$$

The conjugate of $1-i$ is $1+i$. Therefore

$$
\begin{aligned}
A&=\frac{(4-3i)(1+i)}{(1-i)(1+i)}\\
&=\frac{4+4i-3i-3i^2}{1-i^2}\\
&=\frac{7+i}{2}=\frac72+\frac12i.
\end{aligned}
$$

Check the division by multiplying the answer by its denominator:

$$
\left(\frac72+\frac12i\right)(1-i)
=\frac72+\frac12+\left(-\frac72+\frac12\right)i
=4-3i.
$$

This recovers the numerator, so both components pass the check.

## General rules for the four operations

Addition and multiplication are commutative: $z+w=w+z$ and $zw=wz$. They are associative, so $(z+w)+u=z+(w+u)$ and $(zw)u=z(wu)$. Multiplication distributes: $z(w+u)=zw+zu$. The identities are $z+0=z$ and $z\cdot1=z$. Each number has an additive inverse; each nonzero number has a multiplicative inverse, namely $\overline z/|z|^2$.

Subtraction and division are generally neither commutative nor associative. Keep brackets when their position affects the result. Cancel only a common factor, not individual terms within sums. For example, $(z+w)/z=1+w/z$ when $z\ne0$; it is not generally $w$.

The square-root product rule also needs care: $\sqrt{(-1)(-1)}=1$ but $\sqrt{-1}\sqrt{-1}=i^2=-1$ when the principal square roots are used. Do not transfer a real rule beyond its stated conditions. [[06.01 Complex arithmetic]] develops these arithmetic restrictions further.

## Practice

1. For $z=-1+2i$ and $w=3-i$, calculate $z+w$, $z-w$, $zw$, and $\overline z$.
2. Calculate $(3+i)/(2-i)$ and check by multiplication.

### Worked answers

1. Addition gives $2+i$. Subtraction gives $-1+2i-3+i=-4+3i$. Multiplication gives $-3+i+6i-2i^2=-1+7i$. The conjugate is $-1-2i$.
2. Multiply both parts of the fraction by $2+i$. The numerator is $6+3i+2i+i^2=5+5i$ and the denominator is $4-i^2=5$. The quotient is $1+i$. Check: $(1+i)(2-i)=2-i+2i-i^2=3+i$.
