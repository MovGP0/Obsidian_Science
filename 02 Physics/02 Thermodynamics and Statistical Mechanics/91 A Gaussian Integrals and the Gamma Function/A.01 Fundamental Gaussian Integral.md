---
title: "Fundamental Gaussian Integral"
source_chapter: "A"
source_section: "A.1"
source_page: 461
---

> [!TLDR]
> Squaring the Gaussian integral and changing to polar coordinates gives its value as the square root of π.

A Boltzmann weight for a stable quadratic energy has a Gaussian shape. Its integral fixes the normalization. Here $x$ is a real mathematical variable; no physical unit is assigned. Direct integration has no elementary antiderivative. Squaring the integral instead makes rotational symmetry available.

**Definition A.1.** The fundamental Gaussian integral is

$$
I_0=\int_{-\infty}^{+\infty}e^{-x^2}\,dx.
$$

**Theorem A.1.**

$$
I_0=\sqrt\pi.
$$

**Proof.** The integral converges: on each tail with $|x|\geq1$, $e^{-x^2}\leq e^{-|x|}$. The nonnegative, integrable product permits the iterated integral to be written as a plane integral. Square the integral and change to polar coordinates in the plane $\mathbb R^2$:

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

The factor $r$ in the measure is essential: it turns $r e^{-r^2}$ into a derivative. The angular integral counts all directions once; the coordinate ambiguity at the origin has zero area. Since $I_0>0$, this proves $I_0=\sqrt\pi$.

The form used most often in physics introduces a positive parameter $a$:

$$
\int_{-\infty}^{+\infty}e^{-ax^2}\,dx=\sqrt{\frac\pi a},
\qquad a>0.
\tag{A.1}
$$

Set $u=\sqrt a\,x$, so $dx=du/\sqrt a$. Thus a larger positive $a$ narrows the Gaussian and reduces its integral. At $a=0$ the integral diverges, and for real $a<0$ its tails grow. Positivity is a convergence condition, not a convention.

Completing the square gives a linear-source variant, valid for $a>0$ and $b\in\mathbb C$:

$$
\int_{-\infty}^{+\infty}e^{-ax^2+bx}\,dx
=\sqrt{\frac\pi a}\,e^{b^2/(4a)}.
$$

For real $b$, write $-ax^2+bx=-a(x-b/(2a))^2+b^2/(4a)$ and shift the real variable. For complex $b$, a real-variable shift alone is not a proof. Instead, differentiate the convergent integral $J(b)$ under the integral sign. Integration by parts in $x$ gives $2aJ'(b)=bJ(b)$; the boundary term vanishes because the quadratic decay dominates the linear term. With $J(0)=\sqrt{\pi/a}$ this differential equation gives the stated formula for every complex $b$.

As a check, $b=0$ recovers (A.1). Replacing $a$ by $4a$ must halve the integral; this tests the width factor without repeating the polar-coordinate proof.
