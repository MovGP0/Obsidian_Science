---
title: "Cauchy integrals and boundary jumps"
catalogue_ids:
  - "11.5.2"
  - "11.5.2.1"
  - "11.5.2.2"
  - "11.5.2.3"
---

> [!TLDR]
> A Cauchy principal value cancels a simple pole symmetrically; its associated complex integral has boundary values whose difference recovers the density.

## Singular equations with Cauchy kernels

Begin with [[08.07 Improper integrals]], [[06.01 Complex arithmetic]], and [[06.02 The complex plane]]. A simple pole such as $1/(t-x)$ differs from the integrable square-root endpoint in [[Abel equations and weak singularities]]. Its two ordinary improper integrals generally diverge. A singular equation must therefore specify its integration convention before any algebra is done.

## Formulation of the problem

For $a<x<b$, the **Cauchy principal value** is

$$
\operatorname{pv}\int_a^b\frac{u(t)}{t-x}\,dt
=\lim_{\varepsilon\downarrow0}\left[
\int_a^{x-\varepsilon}\frac{u(t)}{t-x}\,dt+
\int_{x+\varepsilon}^b\frac{u(t)}{t-x}\,dt\right].
$$

The same removed distance occurs on both sides. Two separate limits would not express the required cancellation. On a smooth curve, the corresponding local symmetric exclusion is taken along the curve. Endpoints require separate conditions.

Suppose $u$ satisfies a **Hölder condition**: $|u(t)-u(x)|\leq C|t-x|^\alpha$ for some $\alpha>0$ near each point. Add and subtract $u(x)$ to obtain

$$
\operatorname{pv}\int_a^b\frac{u(t)}{t-x}\,dt
=\int_a^b\frac{u(t)-u(x)}{t-x}\,dt
+u(x)\log\frac{b-x}{x-a}.
$$

The first integrand has size at most $C|t-x|^{\alpha-1}$ near $x$ and is integrable. The logarithm is the principal value for constant density. This proves existence of the integral for this function class, not existence of a solution to every equation containing it.

### Worked example on an interval

For $u(t)=t$ on $[-1,1]$, subtraction gives $(t-x)/(t-x)=1$. Thus

$$
\operatorname{pv}\int_{-1}^{1}\frac{t}{t-x}\,dt
=2+x\log\frac{1-x}{1+x},\qquad -1<x<1.
$$

At $x=0$, the integral is $2$, not zero: the pole cancels from the original integrand and leaves $1$. The answer diverges near some endpoints, although it exists at every interior point. Endpoint behavior and interior existence are different questions.

## Properties of the Cauchy integral

An oriented contour $\Gamma$ is a directed curve in the complex plane. For a smooth simple closed contour, use counterclockwise orientation. Its **plus side** is the interior, on the left as one moves along it; its minus side is the exterior. For a Hölder density $\phi$, define

$$
(C\phi)(z)=\frac{1}{2\pi i}\int_\Gamma\frac{\phi(t)}{t-z}\,dt,
\qquad z\notin\Gamma.
$$

The contour integral means a parametrized integral: with $t=\gamma(s)$, replace $dt$ by $\gamma'(s)ds$. Here $i^2=-1$. The function $C\phi$ is analytic away from the curve, meaning complex differentiable there. For a bounded closed curve it tends to zero at infinity. Approaching the curve from opposite sides gives boundary values $C_+\phi$ and $C_-\phi$.

Write $S\phi=(1/\pi i)\operatorname{pv}\int_\Gamma\phi(t)/(t-x)\,dt$. The **Sokhotski–Plemelj formulas**, at a smooth interior point of the contour, are

$$
C_+\phi=\frac12\phi+\frac12S\phi,
\qquad
C_-\phi=-\frac12\phi+\frac12S\phi.
$$

Hence $C_+\phi-C_-\phi=\phi$ and $C_+\phi+C_-\phi=S\phi$. This is a theorem about boundary limits, not permission to substitute $z=x$ into the off-curve integral. Its proof uses local contour limits and belongs to complex analysis. The smoothness, Hölder, and orientation hypotheses matter. The conventions agree with [Cambridge's notes on scalar boundary problems, section 3.1](https://www.damtp.cam.ac.uk/user/examples/D17L.pdf).

![[catalogue-ch11-boundary-sides.svg|**Fig. C.11.3** A counterclockwise contour has its plus side inside and its minus side outside; the Cauchy integral can have different limits on the two sides.]]

### Worked example on the unit circle

Let $\Gamma$ be $|t|=1$ and $\phi(t)=1$. For $|z|<1$, expand $(t-z)^{-1}=\sum_{n\geq0}z^nt^{-n-1}$. Parametrize $t=e^{i\theta}$. The integral of $t^kdt$ over the circle is zero except when $k=-1$, where it is $2\pi i$. Thus $C\phi=1$ inside. For $|z|>1$, expand $(t-z)^{-1}=-\sum_{n\geq0}t^nz^{-n-1}$; every term integrates to zero, so $C\phi=0$ outside. These geometric series converge uniformly on the circle for each fixed off-circle $z$.

Therefore $C_+1=1$, $C_-1=0$, and the boundary formulas give $S1=1$. The jump is exactly the original density. No principal value needs to be guessed from an off-curve expression.

## Existence of a solution

A typical **characteristic singular equation** is $a(x)\phi(x)+b(x)S\phi(x)=f(x)$. Specifying $a,b,f$, the curve, and the allowed densities is part of the problem. For constant coefficients on a smooth closed contour, $S^2=I$ on Hölder densities. One way to see this is to separate each density into an inside analytic part and a decaying outside analytic part; $S$ has value $+1$ on the first part and $-1$ on the second.

Thus, if constants satisfy $a^2-b^2\ne0$, multiplication by $aI-bS$ gives the unique solution

$$
\phi=\frac{af-bSf}{a^2-b^2}.
$$

If $a=b$ or $a=-b$, one of the two parts is lost, and data need a compatibility condition. Variable coefficients do not commute with $S$, so this formula generally fails for $a(x),b(x)$. The full boundary formulation and an explicit variable-coefficient criterion are in [[Hilbert boundary problems and characteristic equations]]. Also, $S^2=I$ here is a closed-contour identity; a finite-interval Hilbert transform has different endpoint and nullspace behavior.

## Practice

1. Find $\operatorname{pv}\int_{-1}^1dt/(t-x)$ and evaluate it at $x=0$.
2. On the unit circle, find the inside and outside Cauchy integrals for $\phi(t)=t$, then find $S\phi$.

## Worked answers

1. The subtraction formula with constant density gives $\log[(1-x)/(1+x)]$. At zero it is $\log1=0$. The two improper pieces diverge, so this zero is a principal value only.
2. The same geometric expansions give $C\phi(z)=z$ inside and zero outside: the inside $t^{-1}$ coefficient is $z$. Hence $C_+\phi=t$, $C_-\phi=0$, and $S\phi=t$. Its jump is also $t$, which checks the sign convention.
