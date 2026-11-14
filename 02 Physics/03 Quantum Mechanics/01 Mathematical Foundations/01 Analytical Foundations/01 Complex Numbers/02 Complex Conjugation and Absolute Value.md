---
title: "Complex Conjugation and Absolute Value"
---

> [!TLDR]
> Complex conjugation changes the sign of the imaginary part. Multiplication by the conjugate gives the squared absolute value and makes complex division simpler.

> [!definition] Definition 1.2 — Complex conjugation and absolute value
> For $z=a+\mathrm{i}b$, define
>
> $$
> \begin{aligned}
> z^*&=a-\mathrm{i}b &&\text{(complex conjugate)},\\
> |z|&=\sqrt{a^2+b^2} &&\text{(absolute value of }z\text{)}.
> \end{aligned}
> $$

The basic relation between these quantities is

$$
z\cdot z^*=|z|^2.
$$

*Verification:*

$$
(a+\mathrm{i}b)(a-\mathrm{i}b)
=a^2-\mathrm{i}ab+\mathrm{i}ab-\mathrm{i}^2b^2
=a^2+b^2.\quad\checkmark
$$

This relation is the key to complex division. To calculate $z_1/z_2$, multiply the numerator and denominator by $z_2^*$.

## Example — Division of complex numbers

Calculate

$$
\frac{3+\mathrm{i}}{1+2\mathrm{i}}.
$$

Multiply the numerator and denominator by the conjugate of the denominator, $1-2\mathrm{i}$:

$$
\frac{3+\mathrm{i}}{1+2\mathrm{i}}
=\frac{(3+\mathrm{i})(1-2\mathrm{i})}{(1+2\mathrm{i})(1-2\mathrm{i})}.
$$

The denominator becomes

$$
|1+2\mathrm{i}|^2=1^2+2^2=5.
$$

The numerator is

$$
(3+\mathrm{i})(1-2\mathrm{i})
=3-6\mathrm{i}+\mathrm{i}-2\mathrm{i}^2
=3-5\mathrm{i}+2
=5-5\mathrm{i}.
$$

Thus,

$$
\frac{3+\mathrm{i}}{1+2\mathrm{i}}
=\frac{5-5\mathrm{i}}{5}
=1-\mathrm{i}.
$$

*Verification:*

$$
(1-\mathrm{i})(1+2\mathrm{i})
=1+2\mathrm{i}-\mathrm{i}-2\mathrm{i}^2
=1+\mathrm{i}+2
=3+\mathrm{i}.\quad\checkmark
$$

We will use the following properties of conjugation repeatedly:

$$
\begin{aligned}
(z_1+z_2)^*&=z_1^*+z_2^*,\\
(z_1z_2)^*&=z_1^*z_2^*,\\
(z^*)^*&=z,\\
\operatorname{Re}(z)&=\frac{z+z^*}{2},
&\operatorname{Im}(z)&=\frac{z-z^*}{2\mathrm{i}}.
\end{aligned}
$$

> [!note]
> Complex division requires $z_2\ne0$.

## Why the conjugate is the useful multiplier

For a nonzero denominator $z_2=a+\mathrm{i}b$, the number $a^2+b^2$ is strictly positive. The conjugate therefore converts a division problem into division by a nonzero real number:

$$
\frac1{z_2}=\frac{z_2^*}{|z_2|^2}.
$$

Multiplication by an unrelated complex number would usually leave a complex denominator. The conjugate is chosen because its mixed imaginary terms cancel. At $a=b=0$, this method fails for the correct reason: zero has no multiplicative inverse.

Conjugation also separates phase from magnitude. For a mathematical coefficient $c$ and a real angle $\theta$,

$$
|\mathrm{e}^{\mathrm{i}\theta}c|^2
=\mathrm{e}^{-\mathrm{i}\theta}c^*\mathrm{e}^{\mathrm{i}\theta}c=|c|^2.
$$

Here the coefficient is an abstract complex number. When a normalized quantum-state coefficient represents an amplitude, its squared magnitude supplies a basis probability by the Born rule. The identity explains why an overall phase leaves that probability unchanged. It does not imply that relative phases between different coefficients can be discarded before addition.
