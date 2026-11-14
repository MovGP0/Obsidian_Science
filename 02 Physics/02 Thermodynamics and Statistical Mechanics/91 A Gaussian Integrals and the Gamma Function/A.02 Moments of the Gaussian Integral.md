---
title: "Moments of the Gaussian Integral"
source_chapter: "A"
source_section: "A.2"
source_page: 462
---

> [!TLDR]
> Differentiation with respect to the Gaussian width gives even moments, while symmetry makes odd moments vanish.

Moments measure the spread of a distribution. Use $a>0$ and a nonnegative integer $n$. Differentiation of the normalization is useful because each derivative brings down $-x^2$; it generates the required powers without a new integration method for each moment.

On a closed interval of positive $a$ values, every derivative is bounded by a polynomial times a fixed decaying Gaussian. This integrable bound justifies differentiation under the integral sign. Repeated differentiation of (A.1) with respect to $a$ gives the Gaussian moments:

$$
I_{2n}(a)
\equiv\int_{-\infty}^{+\infty}x^{2n}e^{-ax^2}\,dx
=\left(-\frac{\partial}{\partial a}\right)^n\sqrt{\frac\pi a}
=\frac{(2n-1)!!}{2^n}\frac{\sqrt\pi}{a^{n+1/2}}.
$$

Here $(2n-1)!!=1\cdot3\cdot5\cdots(2n-1)$ is the double factorial. For $n=0$, use $(-1)!!=1$.

The formula is an unnormalized integral. Dividing by $I_0(a)$ gives a mean for the normalized weight proportional to $e^{-ax^2}$; for example, the second moment is $1/(2a)$. As $a$ increases, the distribution narrows, so this mean must decrease.

Odd moments vanish by symmetry:

$$
\int_{-\infty}^{+\infty}x^{2n+1}e^{-ax^2}\,dx=0,
\qquad n=0,1,2,\ldots.
$$

The cancellation requires the full symmetric domain. On the half-line, an odd power does not have a negative partner. For an even power, the half-line integral is exactly half the full-line integral. Substitute $t=ax^2$ to obtain the gamma-function form:

$$
\int_0^{+\infty}x^{2n}e^{-ax^2}\,dx
=\frac{(2n-1)!!}{2^{n+1}}\frac{\sqrt\pi}{a^{n+1/2}}
=\frac12\frac{\Gamma(n+\tfrac12)}{a^{n+1/2}}.
\tag{A.2}
$$

The gamma function in (A.2) is introduced in [[A.04 Gamma Function]].

## Example A.1: Ideal-gas momentum integral

Take a particle in classical canonical equilibrium at $\thermal{T}>0$, with $\mechanical{m}>0$ and $\thermal{\beta}=1/(\thermal{k}_{\mathrm B}\thermal{T})$. Its kinetic energy is quadratic in each Cartesian momentum component. There is no drift in the chosen rest frame. Thus the classical monatomic ideal-gas partition function requires

$$
\int_{-\infty}^{+\infty}
e^{-\thermal{\beta}\mechanical{p}^2/(2\mechanical{m})}\,d\mechanical{p}
=\sqrt{\frac{2\pi\mechanical{m}}{\thermal{\beta}}}
=\sqrt{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}.
$$

The mean kinetic energy of one component is

$$
\left\langle\frac{\mechanical{p}^2}{2\mechanical{m}}\right\rangle
=\frac{\displaystyle\int_{-\infty}^{+\infty}
\frac{\mechanical{p}^2}{2\mechanical{m}}
e^{-\thermal{\beta}\mechanical{p}^2/(2\mechanical{m})}\,d\mechanical{p}}
{\displaystyle\int_{-\infty}^{+\infty}
e^{-\thermal{\beta}\mechanical{p}^2/(2\mechanical{m})}\,d\mechanical{p}}
=\frac12\thermal{k}_{\mathrm B}\thermal{T}.
$$

This agrees with equipartition. The numerator is the second Gaussian moment and the denominator is the zeroth; their ratio removes the normalization. The exponent is dimensionless, and the integral of the momentum weight has momentum units, as does its square-root result. The final mean has energy units and is independent of the particle mass.

As a transfer check, ask what happens to the fourth normalized moment when $a$ doubles. The moment formula gives a factor $1/4$, not $1/2$. The classical gas application fails when quantum occupation effects are significant; the Gaussian identity itself remains exact.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass of one particle. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum component | One Cartesian component of particle momentum. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
