---
title: "Components, conjugate, and modulus of a complex number"
---

> [!TLDR]
> The conjugate changes the sign of the imaginary part, and the modulus is the distance from the origin.

Chapter 1 — Complex Numbers. Exercise 2. **Difficulty: Basic.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 2|the chapter exercise index]].

## Question

For $z=-3+4\mathrm{i}$, calculate $\operatorname{Re}(z)$, $\operatorname{Im}(z)$, $z^*$, $|z|$, $|z|^2$, $z+z^*$, and $z-z^*$.

## Worked solution

Write the number as $z=a+\mathrm{i}b$. Here $a=-3$ and $b=4$, so the imaginary part is the real coefficient $4$, not $4\mathrm{i}$.

Conjugation reverses the sign of the imaginary component:

$$
\operatorname{Re}(z)=-3,\qquad
\operatorname{Im}(z)=4,\qquad z^*=-3-4\mathrm{i}.
$$

The modulus follows from the distance formula:

$$
|z|=\sqrt{(-3)^2+4^2}=\sqrt{9+16}=5,
\qquad |z|^2=25.
$$

The sum with the conjugate removes the imaginary parts. The difference removes the real parts:

$$
\begin{aligned}
z+z^*&=(-3+4\mathrm{i})+(-3-4\mathrm{i})=-6,\\
z-z^*&=(-3+4\mathrm{i})-(-3-4\mathrm{i})=8\mathrm{i}.
\end{aligned}
$$

### Reconstruct the number from the extracted parts

The sum and difference are projections onto the real and imaginary components:

$$
\frac{z+z^*}{2}=-3,\qquad
\frac{z-z^*}{2\mathrm{i}}=4.
$$

The second quotient is real even though its numerator is imaginary. Reconstructing $-3+\mathrm{i}4$ from these two outputs checks that the factor $\mathrm{i}$ has not been counted twice. Also multiply $z$ by $z^*$: the result is $9+16=25$, agreeing with the squared modulus rather than the modulus. When this arithmetic is used for state amplitudes, the distinction determines whether a calculation produces a magnitude or its squared value.

## Answer

$$
\boxed{\operatorname{Re}(z)=-3,\quad\operatorname{Im}(z)=4,\quad
z^*=-3-4\mathrm{i},\quad|z|=5,\quad|z|^2=25,
\quad z+z^*=-6,\quad z-z^*=8\mathrm{i}.}
$$
