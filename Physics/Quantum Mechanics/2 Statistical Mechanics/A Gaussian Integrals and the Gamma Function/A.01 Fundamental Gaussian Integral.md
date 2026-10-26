---
title: "Fundamental Gaussian Integral"
source_chapter: "A"
source_section: "A.1"
source_page: 461
---

> [!TLDR]
> Squaring the Gaussian integral and changing to polar coordinates gives its value as the square root of π.

**Definition A.1.** The fundamental Gaussian integral is

$$
I_0=\int_{-\infty}^{+\infty}e^{-x^2}\,dx.
$$

**Theorem A.1.**

$$
I_0=\sqrt\pi.
$$

**Proof.** Square the integral and change to polar coordinates in the plane $\mathbb R^2$:

$$
I_0^2
=\left(\int_{-\infty}^{+\infty}e^{-x^2}\,dx\right)
\left(\int_{-\infty}^{+\infty}e^{-y^2}\,dy\right)
=\iint_{\mathbb R^2}e^{-(x^2+y^2)}\,dx\,dy.
$$

Use $x=r\cos\theta$, $y=r\sin\theta$, with $r\in[0,\infty)$ and $\theta\in[0,2\pi)$. The Jacobian is $dx\,dy=r\,dr\,d\theta$, so

$$
I_0^2
=\int_0^{2\pi}d\theta\int_0^\infty e^{-r^2}r\,dr
=2\pi\left(\frac12\right)=\pi.
$$

Since $I_0>0$, this proves $I_0=\sqrt\pi$.

The form used most often in physics introduces a positive parameter $a$:

$$
\int_{-\infty}^{+\infty}e^{-ax^2}\,dx=\sqrt{\frac\pi a},
\qquad a>0.
\tag{A.1}
$$

It follows by rescaling the integration variable by $1/\sqrt a$. Completing the square gives a linear-source variant, valid for $a>0$ and $b\in\mathbb C$:

$$
\int_{-\infty}^{+\infty}e^{-ax^2+bx}\,dx
=\sqrt{\frac\pi a}\,e^{b^2/(4a)}.
$$
