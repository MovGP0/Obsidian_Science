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

Pairing the $n$ and $-n$ terms gives the conversion rules

$$
c_0=\frac{a_0}{2},\qquad
c_n=\frac{a_n-ib_n}{2},\qquad
c_{-n}=\frac{a_n+ib_n}{2}\quad(n\geq1).
$$

The constant mode is counted once; the positive and negative nonzero modes are paired. This is why the constant term has a factor of one half. For the check $f(x)=1$, the integral gives $a_0=2$ and every other coefficient zero, so the reconstructed constant is one.

Real-valuedness is needed for conjugate symmetry and real coefficients. Even or odd parity alone also makes the corresponding integrals vanish for complex-valued functions, but it does not make the remaining coefficients real. The convergence conditions are the same as for the complex form.

## Symmetry and coefficient calculations

- If $f$ is **even**, $f(-x)=f(x)$, then every $b_n=0$. Only cosine terms and the constant term remain.
- If $f$ is **odd**, $f(-x)=-f(x)$, then every $a_n=0$, including $a_0$. Only sine terms remain.

Check symmetry before calculating the coefficients. It can reduce the work by half.
