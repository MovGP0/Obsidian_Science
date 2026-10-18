---
title: "Wavelets and local transforms"
catalogue_ids:
  - "15.5"
  - "15.5.1"
  - "15.5.2"
  - "15.5.3"
  - "15.5.5"
---

> [!TLDR]
> Wavelets compare a function with shifted and stretched zero-mean shapes; Gabor transforms compare it with oscillations inside a fixed window.

## Signals as mathematical functions

A **signal** here means a numerical function $f(t)$ on the real line, or a sequence of sampled numbers. No physical units are assumed. A global Fourier transform measures oscillating content, but its coefficient alone does not say where that content occurs. Local transforms retain a location parameter as well as a scale or oscillation parameter.

Use [[Fourier integrals and transform rules]] first. The notation $f\in L^2(\mathbb R)$ means $\int_{\mathbb R}|f(t)|^2dt<\infty$. We call this finite squared norm and write it as $\|f\|_2^2$. An $L^2$ statement treats functions that agree except on sets of measure zero as equivalent. A mean-square limit means that the squared norm of the error tends to zero. This does not by itself imply pointwise convergence at every input.

## Wavelets

A **mother wavelet** is a chosen shape from which scaled and shifted shapes are made. The elementary Haar shape is

$$
\psi(t)=\begin{cases}
1,&0\leq t<1/2,\\
-1,&1/2\leq t<1,\\
0,&\text{otherwise}.
\end{cases}
$$

Its integral is zero because its two rectangular areas cancel. Its squared norm is one. Its support, the closure of the set where it is nonzero, is $[0,1]$. A constant on this interval has zero inner product with the shape, while a difference between the two halves gives a nonzero value. Zero mean is central: wavelets respond to change rather than to a constant level. More general wavelets can be smooth or complex and can have unbounded support with decay. Zero mean by itself is not every condition needed for reconstruction.

For scale $a>0$ and shift $b\in\mathbb R$, define

$$
\psi_{a,b}(t)=a^{-1/2}\psi\left(\frac{t-b}{a}\right).
$$

Substitution $u=(t-b)/a$ shows $\|\psi_{a,b}\|_2=\|\psi\|_2$. The factor $a^{-1/2}$ keeps the squared norm unchanged. For Haar, the support becomes $[b,b+a]$. Smaller $a$ gives a narrower shape with larger height. The shift $b$ marks its left endpoint for this mother wavelet, not its centre.

![[catalogue-ch15-wavelet-location-scale.svg|**Fig. C.ch15.2** A Haar shape keeps zero mean when translated or scaled; its height changes to preserve squared norm.]]

## Continuous wavelet transform

The continuous wavelet transform with this normalization is

$$
W_\psi f(a,b)=\int_{\mathbb R} f(t)\overline{\psi_{a,b}(t)}\,dt,
\qquad a>0.
$$

The bar is complex conjugation. This is an inner product with a local pattern; its kernel depends on two output parameters. Cauchy–Schwarz guarantees the integral for $f,\psi\in L^2$. A large coefficient means a strong match with that particular normalized shape. A negative real coefficient means the opposite sign pattern matches better. It is not simply the function's value at $b$.

For a real wavelet, fix the Fourier convention $\widehat\psi(k)=\int\psi(t)e^{-ikt}dt$. A useful admissibility constant for **positive scales only** is

$$
C_\psi=\int_0^\infty\frac{|\widehat\psi(k)|^2}{k}\,dk,
\qquad 0<C_\psi<\infty.
$$

For real $\psi$, the negative half contributes the same amount. Under this condition the reconstruction theorem is

$$
f(t)=\frac1{C_\psi}\int_0^\infty\int_{\mathbb R}
W_\psi f(a,b)\psi_{a,b}(t)\,db\,\frac{da}{a^2}.
$$

The general $L^2$ version is interpreted through mean-square or weak limits, not as an absolutely convergent pointwise integral for every $f$. The double integral needs both the shift measure $db$ and scale weight $da/a^2$. Using a constant defined over both positive and negative frequencies would introduce a factor of two with this positive-scale convention. For complex wavelets, the positive and negative frequency conditions need separate care; the real-wavelet statement above avoids that extra issue. A full proof is beyond this lesson.

Why is zero mean expected? An integrable wavelet has $\widehat\psi(0)=\int\psi$. A nonzero continuous value there makes the $1/k$ weighted admissibility integral diverge near zero. For Haar, zero mean plus its finite support gives $\widehat\psi(k)=O(k)$ near zero, while direct integration gives $O(1/|k|)$ at infinity. Both ends of the displayed admissibility integral therefore converge.

## Worked example: detect a boundary

Take $f(t)=1$ on $[0,1)$ and zero elsewhere. At $a=1,b=0$, the positive and negative Haar halves lie entirely in the constant part, so $W_\psi f(1,0)=1/2-1/2=0$. At $a=1,b=1/2$, the positive half lies on $[1/2,1)$ and the negative half lies on $[1,3/2)$. The function is zero on the negative half, so $W_\psi f(1,1/2)=1/2$. Shifting the same shape has exposed the boundary at $1$.

The continuous transform uses many overlapping measurements and is redundant. The discrete transform in [[Haar wavelets and fast discrete transforms]] selects an organized set of scales and shifts and supplies an exact finite algorithm.

## Gabor transform

A windowed Fourier transform uses a fixed nonzero window $g$ instead of scaling a zero-mean shape:

$$
V_gf(b,k)=\int_{\mathbb R}f(t)\overline{g(t-b)}e^{-ikt}\,dt.
$$

It is also called a short-time Fourier transform. In this article, **Gabor transform** means this transform with a Gaussian window. Some texts use that name more broadly for sampled windowed Fourier systems. The parameters $b$ and $k$ give location and oscillation. For each $b$, transform the function after multiplication by the shifted window.

For $f,g\in L^2$ and $g\ne0$, reconstruction in the mean-square sense is

$$
f(t)=\frac1{2\pi\|g\|_2^2}
\int_{\mathbb R}\int_{\mathbb R}V_gf(b,k)g(t-b)e^{ikt}\,dk\,db.
$$

To see the normalization, inverse Fourier transformation in $k$ first gives $f(t)\overline{g(t-b)}$. Multiplication by $g(t-b)$ and integration over $b$ then gives $f(t)\|g\|_2^2$. The argument is directly valid for sufficiently well-behaved functions and motivates the $L^2$ theorem.

For $g(t)=\pi^{-1/4}e^{-t^2/2}$, the squared norm is one. If $f(t)=e^{-t^2/2}$, then at $b=0$ the product is $\pi^{-1/4}e^{-t^2}$, and $V_gf(0,k)=\pi^{1/4}e^{-k^2/4}$. A wider window gives finer separation of nearby oscillations but poorer localization of abrupt changes. Wavelets change their window width with scale; a Gabor transform keeps it fixed. Neither can locate every feature with arbitrarily fine precision in both variables.

## Practice

1. For Haar at scale $a=4$ and shift $b=2$, find its support, heights, and sign-change point.
2. Compute $W_\psi f(1,0)$ when $f=3$ on $[0,1/2)$, $f=1$ on $[1/2,1)$, and $f=0$ elsewhere.

> [!example]- Worked answers
> 1. Its support is $[2,6]$, the positive height is $1/2$, the negative height is $-1/2$, and the sign changes at $2+4/2=4$. The squared norm is $4(1/2)^2=1$.
> 2. Integrate each half: $3(1/2)-1(1/2)=1$. The coefficient measures the half-interval difference, rather than their common average.

## References

[Benedetto, introduction to wavelet theory](https://www.math.umd.edu/~jjb/benedetto_0.pdf) supplies the Haar starting point and historical context. [MathWorks, inverse continuous wavelet transform](https://www.mathworks.com/help/wavelet/gs/inverse-continuous-wavelet-transform.html) discusses admissibility and warns that its implementation uses a different normalization. [Strohmer, local Fourier analysis](https://www.math.ucdavis.edu/~strohmer/research/gabor/gaborintro/node3.html) develops windowed Fourier reconstruction and its resolution trade-off; its exponential uses $2\pi$ times the frequency parameter, whereas this article uses $k$ directly.
