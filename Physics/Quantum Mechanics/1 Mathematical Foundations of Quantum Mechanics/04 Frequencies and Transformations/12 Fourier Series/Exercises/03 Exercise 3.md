---
title: "Orthogonality of complex Fourier modes"
---

> [!TLDR]
> Distinct integer Fourier modes have zero overlap on one complete period.

**Chapter 12 · Exercise 3 · Basic level**

[[12 Fourier Series/08 Exercises|Chapter 12 exercises]]

## Question

Verify the orthogonality relation directly:

$$
\int_{-L}^L e^{im\pi x/L}e^{-in\pi x/L}\,dx=2L\delta_{mn}.
$$

## Worked solution

Assume $L>0$ and integer mode labels $m,n$. Combine the exponentials before integration:

$$
I_{mn}=\int_{-L}^Le^{i(m-n)\pi x/L}\,dx.
$$

**Why separate equal and unequal labels?** The antiderivative for unequal labels contains $m-n$ in its denominator. For $m=n$ the integrand is one, so $I_{nn}=2L$ directly.

For $m\ne n$, put $r=m-n$, a nonzero integer. Then

$$
\begin{aligned}
I_{mn}
&=\frac{L}{ir\pi}[e^{ir\pi}-e^{-ir\pi}]\\
&=\frac{2L}{r\pi}\sin(r\pi)=0.
\end{aligned}
$$

The zero follows because the phase makes an integer number of cycles over the interval. Both cases combine as $I_{mn}=2L\delta_{mn}$. Division of each mode by $\sqrt{2L}$ would give an orthonormal basis under the unscaled integral inner product. Here $x$ and $L$ are mathematical interval coordinates; no physical length unit is specified.

## Answer

$$
\int_{-L}^{L}e^{im\pi x/L}e^{-in\pi x/L}\,dx
=\begin{cases}2L,&m=n,\\0,&m\ne n,\end{cases}
=2L\delta_{mn}.
$$
