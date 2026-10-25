---
title: "Trigonometric identities from Euler’s formula"
---

> [!TLDR]
> Euler’s formula converts products and powers of trigonometric functions into exponential algebra.

Chapter 1 — Complex Numbers. Exercise 7. **Difficulty: Intermediate.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 7|the chapter exercise index]].

## Question

Use [[04 Euler's Formula|equations (1.3) and (1.4)]] to prove:

**(a)**

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta.
$$

**(b)**

$$
\sin^3\theta=\frac{3\sin\theta-\sin(3\theta)}{4}.
$$

## Worked solution

### (a) Cosine addition formula

Euler’s formula gives $\mathrm{e}^{\mathrm{i}\gamma}=\cos\gamma+\mathrm{i}\sin\gamma$. Apply it to both sides of the exponential product law:

$$
\mathrm{e}^{\mathrm{i}(\alpha+\beta)}
=\mathrm{e}^{\mathrm{i}\alpha}\mathrm{e}^{\mathrm{i}\beta}.
$$

Expand the product and collect the real and imaginary parts:

$$
\begin{aligned}
\cos(\alpha+\beta)+\mathrm{i}\sin(\alpha+\beta)
&=(\cos\alpha+\mathrm{i}\sin\alpha)(\cos\beta+\mathrm{i}\sin\beta)\\
&=\cos\alpha\cos\beta-\sin\alpha\sin\beta\\
&\quad+\mathrm{i}(\cos\alpha\sin\beta+\sin\alpha\cos\beta).
\end{aligned}
$$

Two complex numbers are equal only if their real parts and imaginary parts are equal. Their real parts give the requested formula.

### (b) Cube of a sine

Use the exponential form of sine and expand the cube:

$$
\begin{aligned}
\sin^3\theta
&=\left(\frac{\mathrm{e}^{\mathrm{i}\theta}-\mathrm{e}^{-\mathrm{i}\theta}}{2\mathrm{i}}\right)^3\\
&=\frac{\mathrm{e}^{3\mathrm{i}\theta}-3\mathrm{e}^{\mathrm{i}\theta}
+3\mathrm{e}^{-\mathrm{i}\theta}-\mathrm{e}^{-3\mathrm{i}\theta}}{-8\mathrm{i}}\\
&=\frac{(\mathrm{e}^{3\mathrm{i}\theta}-\mathrm{e}^{-3\mathrm{i}\theta})
-3(\mathrm{e}^{\mathrm{i}\theta}-\mathrm{e}^{-\mathrm{i}\theta})}{-8\mathrm{i}}.
\end{aligned}
$$

The denominator is $-8\mathrm{i}$ because $(2\mathrm{i})^3=8\mathrm{i}^3=-8\mathrm{i}$. Each exponential difference is twice $\mathrm{i}$ times a sine:

$$
\sin^3\theta
=\frac{2\mathrm{i}\sin(3\theta)-6\mathrm{i}\sin\theta}{-8\mathrm{i}}
=\frac{3\sin\theta-\sin(3\theta)}4.
$$

## Answer

$$
\boxed{\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta,}
$$

$$
\boxed{\sin^3\theta=\frac{3\sin\theta-\sin(3\theta)}4.}
$$
