---
title: "Conjugation preserves modulus and reverses argument"
---

> [!TLDR]
> Complex conjugation reflects a point in the real axis, so it preserves distance and reverses the angle.

Chapter 1 — Complex Numbers. Exercise 4. **Difficulty: Basic.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 4|the chapter exercise index]].

## Question

Show that $|z^*|=|z|$ and $\arg(z^*)=-\arg(z)$.

> [!note]
> The argument relation is understood modulo $2\pi$, with $z\ne0$. For a chosen principal argument, a branch-boundary adjustment can be required.

## Worked solution

Let $z=x+\mathrm{i}y$, where $x,y\in\mathbb R$. Then $z^*=x-\mathrm{i}y$, and

$$
|z^*|=\sqrt{x^2+(-y)^2}=\sqrt{x^2+y^2}=|z|.
$$

Equivalently, the conjugate product gives

$$
|z^*|^2=z^*(z^*)^*=z^*z=|z|^2.
$$

The moduli are nonnegative, so equality of their squares gives equality of the moduli, including at $z=0$.

For the argument, require $z\ne0$. Write $z=r\mathrm{e}^{\mathrm{i}\theta}$ with $r>0$. Conjugation changes $\mathrm{i}$ to $-\mathrm{i}$:

$$
z^*=r\mathrm{e}^{-\mathrm{i}\theta}.
$$

The new angle is therefore $-\theta$, with multiples of $2\pi$ allowed. Geometrically, conjugation reflects the complex plane across the real axis.

> [!note]
> The argument of zero is undefined. A principal argument must also remain in its selected interval. For example, if the interval is $[0,2\pi)$, the conjugate of a number with angle $\pi/3$ has principal angle $5\pi/3$, which equals $-\pi/3$ modulo $2\pi$.

## Answer

$$
\boxed{|z^*|=|z|\quad\text{for all }z\in\mathbb C,}
$$

$$
\boxed{\arg(z^*)\equiv-\arg(z)\pmod{2\pi}\quad\text{for }z\ne0.}
$$
