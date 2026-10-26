---
title: "Corrections to the Laplace Approximation"
source_chapter: "B"
source_section: "B.1.1"
source_page: 474
---

> [!TLDR]
> Higher derivatives at the maximum give systematic corrections in inverse powers of the large parameter.

For a sufficiently smooth function with a nondegenerate maximum, set $u=x-x_0$ and expand:

$$
f(x)=f(x_0)+\frac{f''}{2}u^2
+\frac{f'''}6u^3+\frac{f^{(4)}}{24}u^4+\cdots.
$$

All derivatives on the right are evaluated at $x_0$. For unit prefactor $g=1$, the next correction is

$$
\int e^{Nf(x)}\,dx
=e^{Nf(x_0)}
\sqrt{\frac{2\pi}{N\lvert f''\rvert}}
\left[
1+\frac1N\left(
\frac{f^{(4)}}{8(f'')^2}
-\frac{5(f''')^2}{24(f'')^3}
\right)+O(N^{-2})
\right].
$$

It follows by expanding

$$
\exp\left[
N\left(\frac{f'''}6u^3+\frac{f^{(4)}}{24}u^4+\cdots\right)
\right]
$$

and evaluating the resulting Gaussian moments. The leading relative correction is of order $1/N$.
