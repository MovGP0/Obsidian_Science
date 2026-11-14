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

For $f\in L^2([-L,L])$, define $S_Nf=\sum_{|n|\leq N}c_ne^{in\pi x/L}$. Orthogonality gives the finite identity

$$
\frac1{2L}\|f-S_Nf\|^2
=\frac1{2L}\|f\|^2-\sum_{|n|\leq N}|c_n|^2.
$$

The remainder is orthogonal to every retained mode. Consequently, no other choice of coefficients for these same modes gives a smaller squared error. Completeness makes the remainder tend to zero and gives Parseval's infinite identity. Orthogonality alone would give only an inequality for an incomplete family.

As a normalization check, a constant $f=A$ has $c_0=A$ and all other coefficients zero. Both sides of Parseval are then $|A|^2$. The coefficient sum measures the mean squared magnitude in this convention; it is not automatically a sum of quantum probabilities.

This is the Parseval identity from Chapter 8 applied to the Fourier basis.
