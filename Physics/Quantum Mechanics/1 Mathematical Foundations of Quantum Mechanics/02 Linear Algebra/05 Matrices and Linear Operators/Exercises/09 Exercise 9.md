---
title: "Matrix exponential when A² is a scalar matrix"
---

> [!TLDR]
> Separate even and odd powers to calculate the exponential. The formula also applies at zero scalar parameter by a continuous limit.

Chapter 5 · Exercise 9 · Challenge level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 9|Chapter 5 exercises]].

## Question

Let $A$ be a matrix with $A^2=\alpha I$ for some $\alpha\in\mathbb{C}$. Prove that

$$
\mathrm{e}^{tA}
=\cosh(t\sqrt\alpha)\,I
+\frac{\sinh(t\sqrt\alpha)}{\sqrt\alpha}A.
$$

Apply this to $A=\mathrm{i}\signal{\theta}\sigma_x$, with $\alpha=-\signal{\theta}^2$, to derive a closed form for $\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_x}$.

> [!note]
> The source permits $\alpha=0$, although the displayed quotient then has a zero denominator. Interpret the quotient by its continuous limit in that case. For nonzero $\alpha$, choose a square root consistently.

## Worked solution

### Separate the matrix powers

The relation $A^2=\alpha I$ reduces every power to a scalar times either $I$ or $A$:

$$
A^{2k}=(A^2)^k=\alpha^kI,
\qquad A^{2k+1}=A(A^2)^k=\alpha^kA.
$$

Insert these expressions in the exponential series. The scalar $t$ here is a mathematical parameter; no physical time is specified.

$$
\begin{aligned}
\mathrm{e}^{tA}
&=\sum_{n=0}^{\infty}\frac{t^nA^n}{n!}\\
&=I\sum_{k=0}^{\infty}\frac{\alpha^kt^{2k}}{(2k)!}
+A\sum_{k=0}^{\infty}\frac{\alpha^kt^{2k+1}}{(2k+1)!}.
\end{aligned}
$$

For $\alpha\ne0$, choose $r$ with $r^2=\alpha$. The two scalar sums are

$$
\sum_{k=0}^{\infty}\frac{r^{2k}t^{2k}}{(2k)!}=\cosh(tr),
\qquad
\sum_{k=0}^{\infty}\frac{r^{2k}t^{2k+1}}{(2k+1)!}=\frac{\sinh(tr)}r.
$$

Consequently,

$$
\mathrm{e}^{tA}=\cosh(t\sqrt\alpha)I
+\frac{\sinh(t\sqrt\alpha)}{\sqrt\alpha}A.
$$

Changing $r$ to $-r$ does not change either coefficient: hyperbolic cosine is even, and both numerator and denominator of the second coefficient change sign. Thus the result does not depend on the selected square root.

### Include the case α = 0

The second coefficient has the convergent series

$$
\frac{\sinh(t\sqrt\alpha)}{\sqrt\alpha}
=t+\frac{\alpha t^3}{3!}+\frac{\alpha^2t^5}{5!}+\cdots,
$$

so its limit at $\alpha=0$ is $t$. Also $\cosh(t\sqrt\alpha)\to1$. Since $A^2=0$ in this case, every exponential term after the linear term is zero. Both arguments give $\mathrm{e}^{tA}=I+tA$, including nonzero nilpotent $A$.

### Apply the result to the Pauli x matrix

For $A=\mathrm{i}\signal{\theta}\sigma_x$, use $\sigma_x^2=I$ to obtain

$$
A^2=(\mathrm{i}\signal{\theta})^2\sigma_x^2=-\signal{\theta}^2I.
$$

For real $\signal{\theta}\ne0$, choose $r=\mathrm{i}\signal{\theta}$ and set $t=1$. Use $\cosh(\mathrm{i}\signal{\theta})=\cos\signal{\theta}$ and $\sinh(\mathrm{i}\signal{\theta})=\mathrm{i}\sin\signal{\theta}$:

$$
\begin{aligned}
\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_x}
&=\cos\signal{\theta}\,I
+\frac{\mathrm{i}\sin\signal{\theta}}{\mathrm{i}\signal{\theta}}
(\mathrm{i}\signal{\theta}\sigma_x)\\
&=\cos\signal{\theta}\,I+\mathrm{i}\sin\signal{\theta}\,\sigma_x.
\end{aligned}
$$

At $\signal{\theta}=0$, the zero-parameter limit gives $I$, which is also the value of the final expression.

## Answer

$$
\boxed{\mathrm{e}^{tA}=\cosh(t\sqrt\alpha)I+
\frac{\sinh(t\sqrt\alpha)}{\sqrt\alpha}A},
\qquad
\boxed{\mathrm{e}^{tA}=I+tA\quad(\alpha=0)}.
$$

For the Pauli example,

$$
\boxed{\mathrm{e}^{\mathrm{i}\signal{\theta}\sigma_x}
=\begin{pmatrix}\cos\signal{\theta}&\mathrm{i}\sin\signal{\theta}\\\mathrm{i}\sin\signal{\theta}&\cos\signal{\theta}\end{pmatrix}}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $\unit{rad}$ | Phase parameter | The real parameter in the Pauli exponential. |
