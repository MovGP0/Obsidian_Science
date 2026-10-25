---
title: "The box completeness kernel and its diagonal"
---

> [!TLDR]
> The sine completeness kernel represents the identity as a distribution; its diagonal partial sums grow without bound at interior points.

Chapter 8 — Hilbert Space · Exercise 7 · Challenge

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

Accept that $\{\phi_n(x)=\sqrt{2/L}\sin(n\pi x/L)\}_{n=1}^{\infty}$ is a basis of $L^2([0,L])$. Use the completeness relation

$$
\sum_n\phi_n(x)\phi_n^*(x')=\delta(x-x')
$$

to calculate formally

$$
\frac2L\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)
\sin\left(\frac{n\pi x'}{L}\right).
$$

Verify that at $x=x'$ the partial sums show the expected “divergence” associated with the Dirac delta.

> [!note]
> Interpret the identity distributionally, not as an ordinary pointwise sum. The diagonal statement concerns interior points $0<x<L$. At the endpoints, every sine term is zero. The delta is not a function with an ordinary value at zero.

## Worked solution

Define the finite partial-sum kernel

$$
K_N(x,x')=\sum_{n=1}^N\phi_n(x)\phi_n^*(x')
=\frac2L\sum_{n=1}^N\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{n\pi x'}{L}\right).
$$

Finite sums can be integrated term by term without a convergence question. For any $f\in L^2([0,L])$,

$$
\begin{aligned}
\int_0^L K_N(x,x')f(x')\,dx'
&=\sum_{n=1}^N\phi_n(x)\int_0^L\phi_n^*(x')f(x')\,dx'\\
&=\sum_{n=1}^N\langle\phi_n,f\rangle\phi_n(x).
\end{aligned}
$$

This is the orthogonal projection onto the first $N$ basis vectors. Completeness says that these projections converge to $f$ in L² norm. Thus the limit kernel acts as the identity, which is the defining role of the delta kernel:

$$
\boxed{\frac2L\sum_{n=1}^{\infty}\sin\left(\frac{n\pi x}{L}\right)\sin\left(\frac{n\pi x'}{L}\right)=\delta(x-x').}
$$

This equality is a distributional statement on the interior, or an identity for the projection operators in their strong limit. It does not assert convergence as an ordinary function at every pair of points.

### An explicit finite kernel

The product-to-sum identity gives

$$
K_N(x,x')=\frac1L\sum_{n=1}^N\left[
\cos\left(\frac{n\pi(x-x')}{L}\right)
-\cos\left(\frac{n\pi(x+x')}{L}\right)\right].
$$

Use the Dirichlet kernel, with its removable singularities interpreted by limits:

$$
D_N(u)=1+2\sum_{n=1}^N\cos(nu)
=\frac{\sin((N+1/2)u)}{\sin(u/2)}.
$$

Therefore,

$$
K_N(x,x')=\frac1{2L}\left[
D_N\left(\frac{\pi(x-x')}{L}\right)
-D_N\left(\frac{\pi(x+x')}{L}\right)\right].
$$

The difference contains the reflected contribution required by the sine basis. For smooth test functions with compact support in $(0,L)$, its integrated limit selects $f(x)$. For a general L² function, the projection limit is understood in norm and does not require pointwise values.

### Check the diagonal partial sums

Let $\theta=\pi x/L$ for a fixed interior point $0<x<L$. Then $\sin\theta\ne0$, and

$$
\begin{aligned}
K_N(x,x)
&=\frac2L\sum_{n=1}^N\sin^2(n\theta)\\
&=\frac NL-\frac1L\sum_{n=1}^N\cos(2n\theta)\\
&=\frac NL-\frac{\sin(N\theta)\cos((N+1)\theta)}{L\sin\theta}.
\end{aligned}
$$

The cosine sum follows from the real part of the finite geometric series $\sum_{n=1}^N e^{2in\theta}$. The correction is bounded in magnitude by $1/(L|\sin\theta|)$, independently of $N$. Hence

$$
K_N(x,x)=\frac NL+O(1)\longrightarrow+\infty
\qquad(0<x<L).
$$

For a direct example, at $x=L/2$, only odd sine squares equal one:

$$
K_N(L/2,L/2)=\frac2L\left\lceil\frac N2\right\rceil.
$$

This grows without bound. At $x=0$ and $x=L$, every sine is zero, so $K_N(x,x)=0$ for every $N$. These endpoint values do not change the L² identity because sets of measure zero do not change an L² class.

The diagonal divergence describes the growth of the finite kernels. It does not assign a numerical value to $\delta(0)$. The symbols $x$, $x'$, and $L$ are mathematical coordinates and interval parameters in this question; no physical units are assigned.

## Answer

The formal sum equals $\delta(x-x')$ as the identity kernel in the distributional sense. At every fixed interior point, $K_N(x,x)=N/L+O(1)\to+\infty$. At either endpoint, every partial sum is zero.
