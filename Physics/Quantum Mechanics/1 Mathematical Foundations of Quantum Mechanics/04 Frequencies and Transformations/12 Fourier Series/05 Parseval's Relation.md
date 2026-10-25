---
title: "Parseval’s Relation"
---

> [!TLDR]
> Parseval’s relation equates the mean squared magnitude of a periodic function with the sum of squared complex Fourier coefficients. The factor 2L comes from the coefficient normalization.

> [!theorem] Theorem 12.2 | Parseval’s relation
> With $c_n=\tfrac1{2L}\int_{-L}^L f(x)e^{-in\pi x/L}\,dx$,
>
> $$
> \boxed{\frac1{2L}\int_{-L}^L|f(x)|^2\,dx
> =\sum_{n=-\infty}^{+\infty}|c_n|^2.}
> $$

In Hilbert-space notation, the unscaled squared norm is

$$
\lVert f\rVert^2
=\sum_n|\langle\phi_n,f\rangle|^2
=2L\sum_n|c_n|^2,
$$

because

$$
\phi_n(x)=\frac1{\sqrt{2L}}e^{in\pi x/L},
\qquad\langle\phi_n,f\rangle=\sqrt{2L}\,c_n.
$$

This is the Parseval identity from Chapter 8 applied to the Fourier basis.
