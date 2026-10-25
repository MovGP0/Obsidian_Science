---
title: "Fourier Series and Notable Values"
---

> [!TLDR]
> Fourier series connect periodic functions to useful infinite sums. These formulas collect four standard sums and the sine expansions of the sawtooth and sign functions.

## Infinite sums

$$
\sum_{n=1}^{\infty}\frac1{n^2}=\frac{\pi^2}6,
\qquad
\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n=\ln2,
$$

$$
\sum_{k=0}^{\infty}\frac{(-1)^k}{2k+1}=\frac\pi4,
\qquad
\sum_{n=1}^{\infty}\frac1{n^4}=\frac{\pi^4}{90}.
$$

## Sawtooth function

$$
x=2\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}n\sin(nx),
\qquad x\in(-\pi,\pi).
$$

## Sign function

$$
\operatorname{sgn}(x)
=\frac4\pi\sum_{k=0}^{\infty}
\frac{\sin((2k+1)x)}{2k+1},
\qquad x\in(-\pi,\pi).
$$

At $x=0$, the series is $0$, consistent with $\operatorname{sgn}(0)=0$. At jumps of the periodic extensions, the series converges to the mean of the one-sided limits.
