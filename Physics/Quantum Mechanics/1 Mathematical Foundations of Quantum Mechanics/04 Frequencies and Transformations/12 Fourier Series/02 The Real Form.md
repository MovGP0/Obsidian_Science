---
title: "The Real Form"
---

> [!TLDR]
> Real-valued functions have conjugate-symmetric complex Fourier coefficients. Their series can be written with real sine and cosine coefficients, and parity removes half the work.

For real-valued $f$, the relation $c_{-n}=c_n^*$ gives the real form

$$
f(x)=\frac{a_0}2+\sum_{n=1}^{\infty}
\left[a_n\cos\left(\frac{n\pi x}{L}\right)
+b_n\sin\left(\frac{n\pi x}{L}\right)\right],
$$

where

$$
a_n=\frac1L\int_{-L}^L f(x)\cos\left(\frac{n\pi x}{L}\right)\,dx,
\qquad n=0,1,2,\ldots,
$$

and

$$
b_n=\frac1L\int_{-L}^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx,
\qquad n=1,2,\ldots.
$$

## Symmetry and coefficient calculations

- If $f$ is **even**, $f(-x)=f(x)$, then every $b_n=0$. Only cosine terms and the constant term remain.
- If $f$ is **odd**, $f(-x)=-f(x)$, then every $a_n=0$, including $a_0$. Only sine terms remain.

Check symmetry before calculating the coefficients. It can reduce the work by half.
