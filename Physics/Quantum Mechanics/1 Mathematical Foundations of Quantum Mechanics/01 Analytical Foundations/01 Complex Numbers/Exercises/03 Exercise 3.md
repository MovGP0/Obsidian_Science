---
title: "Exponential forms and arguments"
---

> [!TLDR]
> Find the modulus and the correct quadrant to write each number in exponential form.

Chapter 1 — Complex Numbers. Exercise 3. **Difficulty: Basic.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 3|the chapter exercise index]].

## Question

Write each number in exponential form $r\mathrm{e}^{\mathrm{i}\theta}$, with $r>0$ and $\theta\in[0,2\pi)$.

- **(a)** $z=1$.
- **(b)** $z=-1$.
- **(c)** $z=\mathrm{i}$.
- **(d)** $z=1+\mathrm{i}$.
- **(e)** $z=-\sqrt3+\mathrm{i}$.

## Worked solution

For $z=x+\mathrm{i}y\ne0$, choose

$$
r=\sqrt{x^2+y^2},\qquad
\cos\theta=\frac{x}{r},\qquad
\sin\theta=\frac{y}{r}.
$$

Use both trigonometric relations to select the quadrant. A tangent alone does not distinguish opposite quadrants.

### (a) Positive real axis

For $z=1$, $r=1$ and $\theta=0$. Therefore $1=1\mathrm{e}^{\mathrm{i}0}$.

### (b) Negative real axis

For $z=-1$, $r=1$, $\cos\theta=-1$, and $\sin\theta=0$. The required angle is $\theta=\pi$, so $-1=\mathrm{e}^{\mathrm{i}\pi}$.

### (c) Positive imaginary axis

For $z=\mathrm{i}$, $r=1$, $\cos\theta=0$, and $\sin\theta=1$. Thus $\theta=\pi/2$ and $\mathrm{i}=\mathrm{e}^{\mathrm{i}\pi/2}$.

### (d) First quadrant

For $z=1+\mathrm{i}$, $r=\sqrt{1^2+1^2}=\sqrt2$. Both components are positive and equal, so $\theta=\pi/4$:

$$
1+\mathrm{i}=\sqrt2\,\mathrm{e}^{\mathrm{i}\pi/4}.
$$

### (e) Second quadrant

For $z=-\sqrt3+\mathrm{i}$,

$$
r=\sqrt{3+1}=2,\qquad
\cos\theta=-\frac{\sqrt3}{2},\qquad \sin\theta=\frac12.
$$

The reference angle is $\pi/6$. The real component is negative and the imaginary component is positive, so $\theta=\pi-\pi/6=5\pi/6$.

## Answer

$$
\begin{array}{c|c|c|c}
\text{Part}&r&\theta&z=r\mathrm{e}^{\mathrm{i}\theta}\\\hline
(a)&1&0&\mathrm{e}^{\mathrm{i}0}\\
(b)&1&\pi&\mathrm{e}^{\mathrm{i}\pi}\\
(c)&1&\pi/2&\mathrm{e}^{\mathrm{i}\pi/2}\\
(d)&\sqrt2&\pi/4&\sqrt2\,\mathrm{e}^{\mathrm{i}\pi/4}\\
(e)&2&5\pi/6&2\mathrm{e}^{5\mathrm{i}\pi/6}
\end{array}
$$

Every listed angle belongs to $[0,2\pi)$.
