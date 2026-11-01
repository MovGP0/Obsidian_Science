---
title: "Free evolution and spreading of a Gaussian packet"
---

> [!TLDR]
> Free evolution moves the Gaussian center and increases its position width while its momentum width stays fixed.

Chapter 13 · Exercise 6 · Intermediate level

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

Free-particle evolution is simple in momentum space:

$$
\signal{\widetilde\psi}(\mechanical{p},\signal{t})
=\signal{\widetilde\psi}(\mechanical{p},0)
e^{-i\mechanical{p}^2\signal{t}/(2\mechanical{m}\mechanical{\hbar})}.
$$

Use the inverse transform to calculate $\signal{\psi}(\mechanical{x},\signal{t})$ for the Gaussian packet. What happens to its width $\mechanical{\Delta x}(\signal{t})$ over time?

## Worked solution

Use the packet from Exercise 5, including its mean momentum $\mechanical{p}_0$. The packet in Exercise 3 is the special case $\mechanical{p}_0=0$.

### Evaluate the inverse transform

Insert the initial momentum amplitude into the inverse momentum transform:

$$
\signal{\psi}(\mechanical{x},\signal{t})=\frac{C}{\sqrt{2\pi\mechanical{\hbar}}}
\int_{\mathbb R}\exp\left[-\frac{\mechanical{\sigma}^2(\mechanical{p}-\mechanical{p}_0)^2}{\mechanical{\hbar}^2}
-\frac{i\mechanical{p}^2\signal{t}}{2\mechanical{m}\mechanical{\hbar}}+\frac{i\mechanical{p}\mechanical{x}}{\mechanical{\hbar}}\right]d\mechanical{p},
\quad C=\left(\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}\right)^{1/4}.
$$

The energy-dependent phase changes the shape in position space even though it leaves the momentum probability density fixed. Set

$$
q=\mechanical{p}-\mechanical{p}_0,\qquad
\tau=\frac{\mechanical{\hbar}\signal{t}}{2\mechanical{m}\mechanical{\sigma}^2},\qquad
\xi=\mechanical{x}-\frac{\mechanical{p}_0\signal{t}}{\mechanical{m}}.
$$

Here $q$, $\tau$, and $\xi$ are integration or algebraic helper variables. The physical center is $\mechanical{p}_0\signal{t}/\mechanical{m}$. Expansion of the exponent gives

$$
\signal{\psi}=\frac{C}{\sqrt{2\pi\mechanical{\hbar}}}
e^{i\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}-i\mechanical{p}_0^2\signal{t}/(2\mechanical{m}\mechanical{\hbar})}
\int_{\mathbb R}e^{-Aq^2+Bq}dq,
\quad A=\frac{\mechanical{\sigma}^2}{\mechanical{\hbar}^2}(1+i\tau),\quad B=\frac{i\xi}{\mechanical{\hbar}}.
$$

Since $\operatorname{Re}A>0$, complete the square:

$$
-Aq^2+Bq=-A\left(q-\frac{B}{2A}\right)^2+\frac{B^2}{4A},
\qquad
\int_{\mathbb R} e^{-Aq^2+Bq}dq=\sqrt{\frac\pi A}e^{B^2/(4A)}.
$$

Choose the square root continuously from $\signal{t}=0$. Since $B^2/(4A)=-\xi^2/[4\mechanical{\sigma}^2(1+i\tau)]$, the complete wavefunction is

$$
\boxed{\signal{\psi}(\mechanical{x},\signal{t})=
\frac{(2\pi\mechanical{\sigma}^2)^{-1/4}}{\sqrt{1+i\tau}}
\exp\left[-\frac{(\mechanical{x}-\mechanical{p}_0\signal{t}/\mechanical{m})^2}{4\mechanical{\sigma}^2(1+i\tau)}
+\frac{i\mechanical{p}_0\mechanical{x}}{\mechanical{\hbar}}-\frac{i\mechanical{p}_0^2\signal{t}}{2\mechanical{m}\mechanical{\hbar}}\right].}
$$

### Extract the density and its width

Use $\operatorname{Re}(1+i\tau)^{-1}=1/(1+\tau^2)$ and $|\sqrt{1+i\tau}|^2=\sqrt{1+\tau^2}$:

$$
|\signal{\psi}(\mechanical{x},\signal{t})|^2=
\frac1{\sqrt{2\pi}\mechanical{\sigma}\sqrt{1+\tau^2}}
\exp\left[-\frac{(\mechanical{x}-\mechanical{p}_0\signal{t}/\mechanical{m})^2}{2\mechanical{\sigma}^2(1+\tau^2)}\right].
$$

This density integrates to one. Its mean is $\langle\hat x\rangle=\mechanical{p}_0\signal{t}/\mechanical{m}$, and

$$
\mechanical{\Delta x}(\signal{t})=\mechanical{\sigma}\sqrt{1+\left(\frac{\mechanical{\hbar}\signal{t}}{2\mechanical{m}\mechanical{\sigma}^2}\right)^2}.
$$

The momentum density does not change, so $\mechanical{\Delta p}=\mechanical{\hbar}/(2\mechanical{\sigma})$. Therefore

$$
\mechanical{\Delta x}(\signal{t})\mechanical{\Delta p}=\frac{\mechanical{\hbar}}{2}\sqrt{1+\tau^2}.
$$

Equality in the usual position–momentum uncertainty bound holds at the initial time. The later state has a quadratic position-dependent phase and nonzero position–momentum covariance. It remains a pure Gaussian but has a larger product of marginal standard deviations.

## Interpret the spreading scale

The dimensionless parameter $\tau$ compares elapsed time with $2\mechanical{m}\mechanical{\sigma}^2/\mechanical{\hbar}$. At $|\tau|=1$, the position standard deviation has grown by $\sqrt2$. Larger mass or a wider initial packet delays substantial spreading; changing only the mean momentum changes the center motion without changing the width law.

An independent check comes from free Heisenberg evolution, $\hat x(\signal{t})=\hat x(0)+\hat p(0)\signal{t}/\mechanical{m}$. The initial unchirped Gaussian has zero symmetrized position–momentum covariance, so its variance is the initial position variance plus $(\signal{t}/\mechanical{m})^2$ times the momentum variance. This reproduces the displayed width. A packet with nonzero initial covariance would also have a term linear in time and can initially contract; monotonic growth from time zero is a property of the specified initial packet.

## Answer

The packet center moves with velocity $\mechanical{p}_0/\mechanical{m}$. Its standard deviation grows from $\mechanical{\sigma}$ to $\mechanical{\sigma}\sqrt{1+\tau^2}$, with $\tau=\mechanical{\hbar}\signal{t}/(2\mechanical{m}\mechanical{\sigma}^2)$. At large positive times, $\mechanical{\Delta x}(\signal{t})\sim\mechanical{\hbar}\signal{t}/(2\mechanical{m}\mechanical{\sigma})$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle position coordinate. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The moving center of the position distribution. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum coordinate. |
| $\mechanical{p}_0$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The center of the momentum distribution. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Initial position width | The initial position standard deviation. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The position standard deviation. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum standard deviation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The normalized position probability amplitude. |
| $\signal{\widetilde\psi}$ | $(\unit{kg\,m\,s^{-1}})^{-1/2}$ | Momentum wavefunction | The normalized momentum probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of the Fourier kernel. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed time of free propagation. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The positive particle mass. |
| $\mechanical{p}_0/\mechanical{m}$ | $\unit{m\,s^{-1}}$ | Center velocity | The constant velocity of the packet center. |
