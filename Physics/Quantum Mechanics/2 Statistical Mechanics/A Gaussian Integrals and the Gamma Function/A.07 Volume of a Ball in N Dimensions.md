---
title: "Volume of a Ball in N Dimensions"
source_chapter: "A"
source_section: "A.7"
source_page: 467
---

> [!TLDR]
> The volume and surface area of an N-dimensional ball follow from Gaussian integration and the gamma function.

The unit-ball volume combines Gaussian integrals with the gamma function.

**Proposition A.2.** The volume of a ball with radius $R$ in $N$ dimensions is

$$
V_N(R)=\frac{\pi^{N/2}}{\Gamma(N/2+1)}R^N.
$$

## Proof

Start with the product of $N$ Gaussian integrals:

$$
\left(\int_{-\infty}^{+\infty}e^{-x^2}\,dx\right)^N
=\pi^{N/2}.
$$

In hyperspherical coordinates, $r^2=\sum_i x_i^2$. After integration over angles,

$$
d^Nx=S_{N-1}r^{N-1}\,dr,
$$

where $S_{N-1}$ is the area of the unit $(N-1)$-sphere. Thus, using (A.7) with $\nu=N/2$ and $a=1$,

$$
\pi^{N/2}
=S_{N-1}\int_0^\infty r^{N-1}e^{-r^2}\,dr
=S_{N-1}\frac{\Gamma(N/2)}2.
$$

Therefore

$$
S_{N-1}=\frac{2\pi^{N/2}}{\Gamma(N/2)}.
$$

Integrating the radial measure gives

$$
V_N(R)=\frac{S_{N-1}}N R^N.
$$

Since $N\Gamma(N/2)=2\Gamma(N/2+1)$, this becomes the stated formula.

## Example A.3: Special cases

- $N=1$: $V_1(R)=2R$, the length of an interval.
- $N=2$: $\Gamma(2)=1$, so $V_2(R)=\pi R^2$, the area of a disk.
- $N=3$: $\Gamma(5/2)=\frac32\frac12\Gamma(1/2)=3\sqrt\pi/4$, so $V_3(R)=4\pi R^3/3$, the volume of a ball.

## Large dimension

Stirling's formula gives

$$
\Gamma(N/2+1)\approx\sqrt{\pi N}
\left(\frac N{2e}\right)^{N/2}.
$$

Consequently, at fixed radius,

$$
V_N(R)\approx
\frac1{\sqrt{\pi N}}
\left(\frac{2\pi eR^2}{N}\right)^{N/2}
\xrightarrow{N\to\infty}0.
$$

In particular, the unit-ball volume tends to zero as dimension increases. This is a counterintuitive but important result in high-dimensional geometry.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | — | Ball radius | The radial scale in the space considered; its unit is that of each coordinate. |
| $S_{N-1}$ | $1$ | Unit-sphere area factor | The angular measure of the boundary of the unit N-ball. |
| $V_N(R)$ | — | N-dimensional volume | The measure inside the ball, with units of radius to the power N. |
