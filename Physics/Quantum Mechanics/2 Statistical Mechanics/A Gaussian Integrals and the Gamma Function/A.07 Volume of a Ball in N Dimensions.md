---
title: "Volume of a Ball in N Dimensions"
source_chapter: "A"
source_section: "A.7"
source_page: 467
---

> [!TLDR]
> The volume and surface area of an N-dimensional ball follow from Gaussian integration and the gamma function.

How can a radial energy bound be converted into a state-space volume without computing every angle? Evaluate the same rotationally invariant Gaussian in Cartesian and radial coordinates. The Cartesian product is known; comparison determines the unknown angular factor. Here $N\geq1$ is an integer and $R\geq0$. All coordinates use the same radial metric and scale.

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

where $S_{N-1}$ is the area of the unit $(N-1)$-sphere. The factor $r^{N-1}$ comes from the radial Jacobian: a shell's volume per unit radial interval scales as radius to power $N-1$. This is the measure after angle integration, not the full unintegrated coordinate differential. Thus, using (A.7) with $\nu=N/2$ and $a=1$,

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

The boundary area at radius $R>0$ is $dV_N/dR=S_{N-1}R^{N-1}$, while $V_N$ is the enclosed volume. Confusing these quantities loses a factor of radius and changes the units. For momentum coordinates, the volume has momentum units to power $N$; a phase-space state count still needs the appropriate position measure and quantum cell factor, as in [[A.08.01 Density of States of the Ideal Gas]].

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

In particular, the unit-ball volume tends to zero as dimension increases. This is a counterintuitive but important result in high-dimensional geometry. The comparison uses a fixed numerical radius in fixed coordinate units. It is not a claim that physical volumes with different dimensions have the same unit.

The fixed-radius condition is essential. If the radius grows with dimension, its $R^N$ factor competes with the gamma function and the displayed limit need not apply. As a reconstruction check, derive the fraction of a ball inside radius $cR$, with $R>0$ and $0<c<1$. It is $c^N$, so the fraction inside that smaller ball tends to zero even while the fixed unit-ball volume tends to zero.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | — | Ball radius | The radial scale in the space considered; its unit is that of each coordinate. |
| $S_{N-1}$ | $1$ | Unit-sphere area factor | The angular measure of the boundary of the unit N-ball. |
| $V_N(R)$ | — | N-dimensional volume | The measure inside the ball, with units of radius to the power N. |
