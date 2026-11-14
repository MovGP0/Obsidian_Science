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

Here $N\to+\infty$ is real. A complex exponential can have both rapid growth and rapid oscillation. A useful contour makes its magnitude decay away from the dominant point while keeping its phase constant locally.

For $z\in\mathbb C$, deform the contour through a nondegenerate saddle $z_0$ with $h'(z_0)=0$ and $h''(z_0)\ne0$. Choose a path on which $\operatorname{Re}h$ has a maximum at the saddle and $\operatorname{Im}h$ is constant: a path of **steepest descent**. This deformation requires analyticity of the integrand in the swept region and must not cross singularities. Branches must be fixed consistently. The endpoints must remain fixed, or any connecting pieces at infinity must have vanishing integrals. These global conditions determine which saddles the original contour can reach; solving $h'=0$ alone is insufficient. See [NIST DLMF §2.4(iv)](https://dlmf.nist.gov/2.4#iv).

Write

$$
h''(z_0)=\lvert h''(z_0)\rvert e^{i\phi}.
$$

The local steepest-descent direction satisfies

$$
\arg(z-z_0)=\frac{\pi-\phi}{2}
$$

modulo $\pi$. Along this direction, the quadratic exponential becomes a real decaying Gaussian, so its magnitude follows the Laplace form (B.1).

Indeed, with $z-z_0=e^{i\theta}s$ and real $s$,

$$
h(z)=h(z_0)+\frac12|h''(z_0)|e^{i(\phi+2\theta)}s^2+O(s^3).
$$

The stated choice gives $e^{i(\phi+2\theta)}=-1$. The straight line is the tangent to the descent contour at the saddle; the full contour can curve. For a single dominant accessible saddle with $g(z_0)\ne0$, the local width in $s$ is $[N|h''(z_0)|]^{-1/2}$.

> [!note] Contour phase
> The contour differential also contributes a phase. For $z=z_0+e^{i\theta}s$ with $\theta=(\pi-\phi)/2$ and a chosen contour orientation, the local contribution is $g(z_0)e^{Nh(z_0)}e^{i\theta}\sqrt{2\pi/[N\lvert h''(z_0)\rvert]}$. The source's reference to the real formula leaves this contour-dependent phase implicit.

> [!note] Remark B.1
> The saddle-point and Laplace methods use the same local Gaussian approximation. Complex contour deformation adds the freedom to choose a path through a stationary point of the exponent.

## Check the contour orientation

Take $h(z)=z^2/2$, $g=1$, and let $\gamma$ run up the imaginary axis from $-i\infty$ to $+i\infty$. Then $z=is$, $dz=i\,ds$, and

$$
I=i\int_{-\infty}^{+\infty}e^{-Ns^2/2}\,ds
=i\sqrt{\frac{2\pi}{N}}.
$$

Here $\phi=0$ and $\theta=\pi/2$. The Gaussian is exact, and its factor $i$ checks the contour phase. Reversing the contour changes the sign. Integrating the same integrand along the real line would diverge: a stationary point does not by itself ensure convergence.

If several accessible saddles contribute at the same exponential order, add their oriented complex contributions before taking the magnitude. Interference can cancel leading terms. If saddles merge or meet an endpoint or singularity, the isolated quadratic approximation needs replacement.
