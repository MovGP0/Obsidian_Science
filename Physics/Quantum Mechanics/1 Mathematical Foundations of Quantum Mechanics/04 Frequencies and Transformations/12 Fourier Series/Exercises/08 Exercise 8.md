---
title: "Mean-square convergence and the Gibbs phenomenon"
---

> [!TLDR]
> The sign-function series converges in mean square and pointwise at fixed continuity points, while uniform convergence fails across a jump.

**Chapter 12 · Exercise 8 · Challenge**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

Consider the approximation to the sign function

$$
f_N(x)=\frac4\pi\sum_{k=0}^{N}\frac{\sin((2k+1)x)}{2k+1}.
$$

**(a)** Use Parseval’s relation to calculate

$$
\lVert f_N-\operatorname{sgn}\rVert^2
=\frac1\pi\int_{-\pi}^{\pi}|f_N(x)-\operatorname{sgn}(x)|^2\,dx
$$

as a function of $N$.

**(b)** Show that this squared norm tends to zero as $N\to\infty$.

**(c)** The source asks why “pointwise convergence fails near $x=0$” and refers to the Gibbs phenomenon. Explain which convergence property fails there.

> [!note]
> The source wording in part (c) is inaccurate: the failure is **uniform convergence** across a neighborhood containing the jump. Pointwise convergence holds at every fixed continuity point, and at zero the series converges to the midpoint value. Also, this exercise uses a norm scaled by $1/\pi$, unlike the earlier unscaled $L^2$ norm. Finally, $N$ here indexes the last odd term, so there are $N+1$ terms and highest harmonic $2N+1$; it is a different cutoff convention from Fig. 12.1.

## Worked solution

### (a) Express the error as an omitted-coefficient tail

Use exactly the norm defined in the question:

$$
\|h\|^2=\frac1\pi\int_{-\pi}^{\pi}|h(x)|^2dx.
$$

In this convention each sine mode has squared norm one. The sign function has coefficients $b_{2k+1}=4/[\pi(2k+1)]$ and all other coefficients zero. **Why use Parseval on the error?** The first $N+1$ coefficients cancel exactly, so only the omitted coefficients remain:

$$
\|f_N-\operatorname{sgn}\|^2
=\frac{16}{\pi^2}\sum_{k=N+1}^{\infty}\frac1{(2k+1)^2}.
$$

The total squared norm of the sign function is two, since it has magnitude one except at isolated points. Thus an equivalent explicit finite-sum formula is

$$
\|f_N-\operatorname{sgn}\|^2
=2-\frac{16}{\pi^2}\sum_{k=0}^{N}\frac1{(2k+1)^2}.
$$

For the unscaled integral norm the answer is multiplied by $\pi$. This question counts $N+1$ terms and has highest harmonic $2N+1$.

### (b) Bound the tail

The function $(2s+1)^{-2}$ is positive and decreasing. The integral comparison gives

$$
\frac1{2(2N+3)}
\leq\sum_{k=N+1}^{\infty}\frac1{(2k+1)^2}
\leq\frac1{2(2N+1)}.
$$

Multiplication by $16/\pi^2$ yields

$$
\frac8{\pi^2(2N+3)}
\leq\|f_N-\operatorname{sgn}\|^2
\leq\frac8{\pi^2(2N+1)}\longrightarrow0.
$$

Thus the squared error is of order $N^{-1}$, and the norm is of order $N^{-1/2}$. This proves mean-square convergence.

### (c) Separate pointwise and uniform convergence

At every fixed point with $0<|x|<\pi$, the series converges to $\operatorname{sgn}(x)$. At $x=0$ every partial sum is zero, so the limit is the midpoint value zero; this agrees with the convention $\operatorname{sgn}(0)=0$. The periodic endpoints also have midpoint value zero. Isolated endpoint assignments do not affect the norm.

**Why can uniform convergence still fail?** Every $f_N$ is continuous, but a uniform limit of continuous functions is continuous. The periodic sign function has a jump, so uniform convergence on a neighborhood containing the jump is impossible. More directly, for each fixed $N$, continuity and $f_N(0)=0$ imply that the error tends to one as $x\to0^+$; hence its supremum over any interval $(0,\varepsilon)$ is at least one.

The Gibbs overshoot explains a second visible effect. Differentiate the finite sum and use a trigonometric sum identity:

$$
f_N'(x)=\frac4\pi\sum_{k=0}^{N}\cos((2k+1)x)
=\frac2\pi\frac{\sin(2(N+1)x)}{\sin x}.
$$

The first positive maximum occurs at $x_N=\pi/[2(N+1)]$. Since $f_N(0)=0$, integration and the change of variable $z=2(N+1)x$ give

$$
\begin{aligned}
f_N(x_N)
&=\frac2\pi\int_0^\pi
\frac{\sin z}{2(N+1)\sin(z/[2(N+1)])}\,dz\\
&\longrightarrow\frac2\pi\int_0^\pi\frac{\sin z}{z}\,dz
\approx1.17898.
\end{aligned}
$$

The limit uses $\sin w/w\to1$; the integrands are bounded on this fixed integration interval, so the limit can pass under the integral. The excess $0.17898$ is about $8.949\%$ of the jump height two. Its location tends to zero and its width shrinks. The persistent height prevents uniform convergence, while the shrinking region is consistent with vanishing integrated squared error. The points $x_N$ move with $N$, so this does not contradict pointwise convergence at each fixed nonzero point.

## Answer

**(a)** In the specified scaled norm,

$$
\|f_N-\operatorname{sgn}\|^2
=\frac{16}{\pi^2}\sum_{k=N+1}^{\infty}\frac1{(2k+1)^2}
=2-\frac{16}{\pi^2}\sum_{k=0}^{N}\frac1{(2k+1)^2}.
$$

**(b)** This squared norm tends to zero, with order $N^{-1}$.

**(c)** Uniform convergence fails across the jump. Pointwise convergence holds at fixed continuity points and gives zero at the jump. The Gibbs excess tends to about $8.949\%$ of the jump while its position approaches the jump.
