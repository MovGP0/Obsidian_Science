---
title: "Normalization of a sine state in a box"
---

> [!TLDR]
> The squared sine integrates to half the box length, so the stated amplitude gives total probability one.

Chapter 2: Functions, Derivatives and Integrals · Exercise 3 · Basic level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 3|Chapter 2 exercise index]].

## Question

Verify that

$$
\signal{\phi}_1(\mechanical{x})
=\sqrt{\frac{2}{\mechanical{L}}}\sin\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right)
$$

is normalized on $[0,\mechanical{L}]$.

## Worked solution

Use a positive interval length $\mechanical{L}>0$.

Normalization means that the integral of the probability density is one. The wavefunction is real, so its modulus squared is its ordinary square:

$$
\lvert\signal{\phi}_1(\mechanical{x})\rvert^2
=\frac2{\mechanical{L}}\sin^2\left(\frac{\pi\mechanical{x}}{\mechanical{L}}\right).
$$

Use $\sin^2u=(1-\cos2u)/2$. This identity removes the squared trigonometric function:

$$
\begin{aligned}
\int_0^{\mechanical{L}}\lvert\signal{\phi}_1\rvert^2\,\mathrm{d}\mechanical{x}
&=\frac1{\mechanical{L}}\int_0^{\mechanical{L}}
\left[1-\cos\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)\right]\mathrm{d}\mechanical{x}\\
&=\frac1{\mechanical{L}}\left[
\mechanical{x}-\frac{\mechanical{L}}{2\pi}\sin\left(\frac{2\pi\mechanical{x}}{\mechanical{L}}\right)
\right]_0^{\mechanical{L}}\\
&=\frac{\mechanical{L}}{\mechanical{L}}=1.
\end{aligned}
$$

The sine vanishes at both boundaries. The prefactor therefore makes the total probability one.

## Answer

The state is normalized on the specified interval:

$$
\int_0^{\mechanical{L}}\lvert\signal{\phi}_1(\mechanical{x})\rvert^2\,\mathrm{d}\mechanical{x}=1.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate within the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The positive length of the interval. |
| $\signal{\phi}_1$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional sine state. |
| $\lvert\signal{\phi}_1\rvert^2$ | $\unit{m^{-1}}$ | Probability density | The position probability per unit length. |
