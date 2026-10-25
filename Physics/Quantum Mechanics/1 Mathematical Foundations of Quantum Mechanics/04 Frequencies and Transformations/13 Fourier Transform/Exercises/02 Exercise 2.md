---
title: "Translation as a Fourier phase"
---

> [!TLDR]
> A displacement of the input changes the phase of its Fourier transform.

Chapter 13 · Exercise 2 · Basic level

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

Use the translation property to calculate $\mathcal F[f(x-3)]$ when $\hat f(k)=e^{-k^2/2}$.

## Worked solution

The symmetric Fourier transform uses the kernel $e^{-ikx}$. Set $u=x-3$, so that $x=u+3$ and $dx=du$. The limits remain the whole real line:

$$
\begin{aligned}
\mathcal F[f(x-3)](k)
&=\frac1{\sqrt{2\pi}}\int_{\mathbb R}f(x-3)e^{-ikx}\,dx\\
&=\frac1{\sqrt{2\pi}}\int_{\mathbb R}f(u)e^{-ik(u+3)}\,du\\
&=e^{-3ik}\hat f(k)=e^{-3ik}e^{-k^2/2}.
\end{aligned}
$$

The negative sign follows from the forward-transform kernel. A translation changes phase but does not change $|\hat f(k)|^2$. These coordinates are mathematical variables with no assigned physical units.

## Answer

$$
\boxed{\mathcal F[f(x-3)](k)=e^{-3ik-k^2/2}.}
$$
