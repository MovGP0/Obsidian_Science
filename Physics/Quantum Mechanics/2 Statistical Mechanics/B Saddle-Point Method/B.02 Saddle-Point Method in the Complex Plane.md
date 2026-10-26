---
title: "Saddle-Point Method in the Complex Plane"
source_chapter: "B"
source_section: "B.2"
source_page: 474
---

> [!TLDR]
> A complex saddle-point integral is evaluated by deforming its contour along a direction of steepest descent.

Consider an integral of the form

$$
I=\int_\gamma g(z)e^{Nh(z)}\,dz.
$$

For $z\in\mathbb C$, deform the contour through a saddle $z_0$ with $h'(z_0)=0$. Choose a path on which $\operatorname{Re}h$ has a maximum at the saddle: a path of **steepest descent**. This deformation requires analyticity in the swept region and must not cross singularities.

Write

$$
h''(z_0)=\lvert h''(z_0)\rvert e^{i\phi}.
$$

The local steepest-descent direction satisfies

$$
\arg(z-z_0)=\frac{\pi-\phi}{2}
$$

modulo $\pi$. Along this direction, the quadratic exponential becomes a real decaying Gaussian, so its magnitude follows the Laplace form (B.1).

> [!note] Contour phase
> The contour differential also contributes a phase. For $z=z_0+e^{i\theta}s$ with $\theta=(\pi-\phi)/2$ and a chosen contour orientation, the local contribution is $g(z_0)e^{Nh(z_0)}e^{i\theta}\sqrt{2\pi/[N\lvert h''(z_0)\rvert]}$. The source's reference to the real formula leaves this contour-dependent phase implicit.

> [!note] Remark B.1
> The saddle-point and Laplace methods use the same local Gaussian approximation. Complex contour deformation adds the freedom to choose a path through a stationary point of the exponent.
