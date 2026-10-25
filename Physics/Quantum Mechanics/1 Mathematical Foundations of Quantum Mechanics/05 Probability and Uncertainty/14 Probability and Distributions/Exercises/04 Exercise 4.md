---
title: "Normalization and tails of an exponential wavefunction"
---

> [!TLDR]
> The squared wavefunction is an even exponential density, so symmetry and one-sided integrals determine its moments and tail.

Chapter 14 · Exercise 4 · Intermediate level

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

For the bound-electron wavefunction

$$
\signal{\psi}(\mechanical{x})=\signal{A}e^{-|\mechanical{x}|/\mechanical{a}},
\qquad\mechanical{a}>0,
$$

**(a)** Determine $\signal{A}$ from normalization.

**(b)** Calculate $\langle\hat x\rangle$, $\langle\hat x^2\rangle$, and $\mechanical{\Delta x}$.

**(c)** Calculate the probability of finding the particle at $|\mechanical{x}|>\mechanical{a}$, described in the source as outside the classical region.

> [!note]
> The wavefunction alone does not specify classical turning points. The region in part (c) is outside one decay length; identifying it as classically forbidden additionally requires a potential and energy.

## Worked solution

### (a) Normalize the state

The density is the squared magnitude of the wavefunction:

$$
|\signal{\psi}(\mechanical{x})|^2
=|\signal{A}|^2e^{-2|\mechanical{x}|/\mechanical{a}}.
$$

It is even in position. The integral on the full line is twice the integral on the positive half-line:

$$
1=2|\signal{A}|^2\int_0^\infty e^{-2\mechanical{x}/\mechanical{a}}\,d\mechanical{x}
=2|\signal{A}|^2\left[-\frac{\mechanical{a}}2e^{-2\mechanical{x}/\mechanical{a}}\right]_0^\infty
=|\signal{A}|^2\mechanical{a}.
$$

Thus $|\signal{A}|=1/\sqrt{\mechanical{a}}$. Normalization leaves a constant phase free. Choose that phase to make $\signal{A}=1/\sqrt{\mechanical{a}}$ real and positive.

### (b) Position moments

The integrand of the first moment is odd and integrable. Equal positive and negative contributions cancel:

$$
\langle\hat x\rangle
=\frac1{\mechanical{a}}\int_{-\infty}^\infty
\mechanical{x}e^{-2|\mechanical{x}|/\mechanical{a}}\,d\mechanical{x}=0.
$$

For the second moment, use even symmetry again and set $u=2\mechanical{x}/\mechanical{a}$:

$$
\begin{aligned}
\langle\hat x^2\rangle
&=\frac2{\mechanical{a}}\int_0^\infty
\mechanical{x}^2e^{-2\mechanical{x}/\mechanical{a}}\,d\mechanical{x}\\
&=\frac2{\mechanical{a}}\frac{\mechanical{a}^3}{8}
\int_0^\infty u^2e^{-u}\,du.
\end{aligned}
$$

Two integrations by parts give

$$
\int_0^\infty u^2e^{-u}\,du
=2\int_0^\infty ue^{-u}\,du
=2\int_0^\infty e^{-u}\,du=2.
$$

The boundary terms vanish because the exponential decays faster than either polynomial grows. Therefore

$$
\langle\hat x^2\rangle=\frac{\mechanical{a}^2}2,
\qquad \mechanical{\Delta x}
=\sqrt{\langle\hat x^2\rangle-\langle\hat x\rangle^2}
=\frac{\mechanical{a}}{\sqrt2}.
$$

### (c) Probability outside one decay length

There are equal tails to the left and right. Integrate one and double it:

$$
\begin{aligned}
P(|\mechanical{x}|>\mechanical{a})
&=\frac2{\mechanical{a}}\int_{\mechanical{a}}^\infty
e^{-2\mechanical{x}/\mechanical{a}}\,d\mechanical{x}\\
&=\frac2{\mechanical{a}}
\left[-\frac{\mechanical{a}}2e^{-2\mechanical{x}/\mechanical{a}}\right]_{\mechanical{a}}^\infty
=e^{-2}\approx0.1353.
\end{aligned}
$$

This is a statement about the distance from the center. A potential and an energy must be supplied before this distance can be identified with a classical turning point.

## Answer

$$
\boxed{\signal{A}=\frac1{\sqrt{\mechanical{a}}},\quad
\langle\hat x\rangle=0,\quad \langle\hat x^2\rangle=\frac{\mechanical{a}^2}2,\quad
\mechanical{\Delta x}=\frac{\mechanical{a}}{\sqrt2},\quad
P(|\mechanical{x}|>\mechanical{a})=e^{-2}.}
$$

The amplitude uses the real positive phase convention.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$, $\langle\hat x\rangle$ | $\unit{m}$ | Position and mean position | The coordinate and its expectation. |
| $\mechanical{a}$ | $\unit{m}$ | Decay length | The positive length in the wavefunction exponent. |
| $\signal{\psi}$, $\signal{A}$ | $\unit{m^{-1/2}}$ | Wavefunction and amplitude | The normalized position wavefunction and its coefficient. |
| $\lvert\signal{\psi}\rvert^2$ | $\unit{m^{-1}}$ | Position probability density | The probability per unit length. |
| $\langle\hat x^2\rangle$ | $\unit{m^2}$ | Second position moment | The mean squared position. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position. |
