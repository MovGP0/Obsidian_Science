---
title: "Gaussian Integrals"
---

> [!TLDR]
> These Gaussian integrals give the normalization, second moment, and shifted integral used in wave-packet calculations.

For real $a>0$ and real $b$,

$$
\int_{-\infty}^{+\infty}e^{-ax^2}\,dx
=\sqrt{\frac\pi a},
$$

$$
\int_{-\infty}^{+\infty}x^2e^{-ax^2}\,dx
=\frac12\sqrt{\frac\pi{a^3}},
$$

$$
\int_{-\infty}^{+\infty}e^{-ax^2+bx}\,dx
=\sqrt{\frac\pi a}\,e^{b^2/(4a)}.
$$

The condition $a>0$ ensures convergence. Here, $x$, $a$, and $b$ are mathematical variables and parameters; their physical units depend on the application.

Use the first integral for normalization, the second for the mean square about the Gaussian center, and the third when the exponent contains a linear term. Complete the square to select the shift:

$$
-ax^2+bx=-a\left(x-\frac{b}{2a}\right)^2+\frac{b^2}{4a}.
$$

The shift is real under the stated assumptions, so a change of integration variable leaves the full real line unchanged. Setting $b=0$ recovers the first formula. At $a=0$, the first integral diverges, so its normalization formula cannot be continued to a flat distribution.

The ratio of the second integral to the first is $1/(2a)$. Thus the normalized Gaussian density $\sqrt{a/\pi}\,e^{-ax^2}$ has zero mean and variance $1/(2a)$: a larger positive $a$ gives a narrower distribution. In a quantum calculation, apply this test to the squared modulus of the wavefunction. If its real amplitude contains $e^{-ax^2}$, its density contains $e^{-2ax^2}$ and the variance is $1/(4a)$, not $1/(2a)$.

The second formula can also be recovered by differentiating the first with respect to $a$ and changing the sign. This is valid for $a>0$, where the Gaussian decay controls the differentiated integrand. For a complex quadratic coefficient or an oscillatory integral, the real assumptions on this page are insufficient; convergence and the square-root branch must be specified separately.
