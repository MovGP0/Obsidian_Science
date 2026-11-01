---
title: "Corrections to the Laplace Approximation"
source_chapter: "B"
source_section: "B.1.1"
source_page: 474
---

> [!TLDR]
> Higher derivatives at the maximum give systematic corrections in inverse powers of the large parameter.

The leading Gaussian uses only the local curvature. The next term tests how asymmetry and departure from a quadratic shape change the area of the peak. Use the isolated interior maximum and global integrability conditions of [[B.01 Laplace Approximation]]. For the displayed remainder below, take $f$ to be smooth near that maximum, for example $C^\infty$, and keep its derivatives fixed as $N\to\infty$.

Set $u=x-x_0$ and expand:

$$
f(x)=f(x_0)+\frac{f''}{2}u^2
+\frac{f'''}6u^3+\frac{f^{(4)}}{24}u^4+\cdots.
$$

All derivatives on the right are evaluated at $x_0$. For unit prefactor $g=1$ and the same fixed integration interval containing $x_0$, the next correction is

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

To obtain its coefficient, write $a=|f''|=-f''>0$ and $y=\sqrt{Na}\,u$. The cubic term in the exponent is of order $N^{-1/2}$ and the quartic term is of order $N^{-1}$. The cubic term alone integrates to zero because it is odd. Its square contributes at the same order as the quartic term:

$$
\frac1N\left[
\frac{f^{(4)}}{24a^2}\langle y^4\rangle_0
+\frac{(f''')^2}{72a^3}\langle y^6\rangle_0
\right]
=\frac1N\left[
\frac{f^{(4)}}{8a^2}
+\frac{5(f''')^2}{24a^3}
\right],
$$

where $\langle\cdot\rangle_0$ denotes an average with the normalized Gaussian $e^{-y^2/2}/\sqrt{2\pi}$. Its fourth and sixth moments are $3$ and $15$. Since $a^3=-(f'')^3$, this reproduces the signs in the stated formula. Extending the local interval to the full real line is what makes the odd moments vanish at algebraic orders.

For $f(u)=f(0)-au^2/2$ on the real line, all these corrections vanish and the Gaussian result is exact. A useful nonzero check is $f(u)=\ln u-u$ at $u=1$: $f''=-1$, $f'''=2$, and $f^{(4)}=-6$ give $-3/4+5/6=1/12$. This is the first factorial correction in [[B.03 Application - Stirling Formula]].

This is an asymptotic expansion, not a claim that the infinite series converges. With a nonconstant prefactor, derivatives of $g$ also contribute; the displayed coefficient applies only to $g=1$. If the curvature tends to zero while $N$ grows, the scaled higher derivatives need not be small and this expansion is not uniform. See the general framework in [NIST DLMF §2.3(iii)](https://dlmf.nist.gov/2.3#iii).
