---
title: "Normalization and position uncertainty of a Gaussian packet"
---

> [!TLDR]
> A normalized Gaussian centered at zero has zero mean position and position uncertainty equal to its width parameter.

Chapter 2: Functions, Derivatives and Integrals · Exercise 4 · Intermediate level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 4|Chapter 2 exercise index]].

## Question

Let

$$
\signal{\psi}(\mechanical{x})
=\signal{A}\mathrm{e}^{-\mechanical{x}^2/(4\mechanical{\sigma}^2)}.
$$

This is a Gaussian wave packet centered at the origin.

**(a)** Find $\signal{A}>0$ from the normalization condition.

**(b)** Calculate

$$
\langle\hat x\rangle=\int\mechanical{x}|\signal{\psi}|^2\,\mathrm{d}\mechanical{x}.
$$

**(c)** Calculate

$$
\langle\hat x^2\rangle=\int\mechanical{x}^2|\signal{\psi}|^2\,\mathrm{d}\mechanical{x}.
$$

**(d)** Define the uncertainty

$$
\mechanical{\Delta x}=\sqrt{\langle\hat x^2\rangle-\langle\hat x\rangle^2}.
$$

What is its value?

## Worked solution

Use $\mechanical{\sigma}>0$. All integrals are over $\mathbb R$.

### (a) Normalize the probability density

Taking the modulus squared doubles the real exponent:

$$
\lvert\signal{\psi}\rvert^2
=\signal{A}^2\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}.
$$

Set $u=\mechanical{x}/(\sqrt2\mechanical{\sigma})$ and use $\int_{\mathbb R}\mathrm{e}^{-u^2}\mathrm{d}u=\sqrt\pi$, derived in [[02 Functions, Derivatives and Integrals/Exercises/02 Exercise 2#(b) Derive and scale the Gaussian integral|Exercise 2(b)]]. Then

$$
\begin{aligned}
1&=\signal{A}^2\int_{\mathbb R}\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}\,\mathrm{d}\mechanical{x}\\
&=\signal{A}^2\sqrt2\mechanical{\sigma}\int_{\mathbb R}\mathrm{e}^{-u^2}\,\mathrm{d}u
=\signal{A}^2\mechanical{\sigma}\sqrt{2\pi}.
\end{aligned}
$$

The specified positive amplitude is therefore

$$
\signal{A}=(2\pi\mechanical{\sigma}^2)^{-1/4}.
$$

### (b) Use the symmetry of the density

The density is even in position. Multiplication by position gives an odd, integrable function. Its negative and positive contributions cancel:

$$
\langle\hat x\rangle
=\signal{A}^2\int_{\mathbb R}\mechanical{x}\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}\,\mathrm{d}\mechanical{x}=0.
$$

### (c) Calculate the second moment

The same substitution gives

$$
\int_{\mathbb R}\mechanical{x}^2\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}\,\mathrm{d}\mechanical{x}
=2\sqrt2\mechanical{\sigma}^3\int_{\mathbb R}u^2\mathrm{e}^{-u^2}\,\mathrm{d}u.
$$

To evaluate the remaining integral, write $u^2\mathrm{e}^{-u^2}=-(u/2)(\mathrm{e}^{-u^2})'$ and integrate by parts:

$$
\begin{aligned}
\int_{\mathbb R}u^2\mathrm{e}^{-u^2}\,\mathrm{d}u
&=\left[-\frac u2\mathrm{e}^{-u^2}\right]_{-\infty}^{\infty}
+\frac12\int_{\mathbb R}\mathrm{e}^{-u^2}\,\mathrm{d}u\\
&=\frac{\sqrt\pi}{2}.
\end{aligned}
$$

Thus,

$$
\langle\hat x^2\rangle
=\signal{A}^2\sqrt{2\pi}\mechanical{\sigma}^3
=\mechanical{\sigma}^2.
$$

### (d) Subtract the squared mean

Uncertainty measures the spread about the mean, so use the variance rather than the second moment alone:

$$
\mechanical{\Delta x}
=\sqrt{\mechanical{\sigma}^2-0^2}=\mechanical{\sigma}.
$$

The final equality uses the positive width assumption.

## Answer

**(a)** $\signal{A}=(2\pi\mechanical{\sigma}^2)^{-1/4}$.

**(b)** $\langle\hat x\rangle=0$.

**(c)** $\langle\hat x^2\rangle=\mechanical{\sigma}^2$.

**(d)** $\mechanical{\Delta x}=\mechanical{\sigma}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate on the whole line. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Gaussian width | The positive width of the position density. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional Gaussian state. |
| $\signal{A}$ | $\unit{m^{-1/2}}$ | Normalization amplitude | The positive prefactor of the state. |
| $\lvert\signal{\psi}\rvert^2$ | $\unit{m^{-1}}$ | Probability density | The position probability per unit length. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The position expectation value. |
| $\langle\hat x^2\rangle$ | $\unit{m^2}$ | Second position moment | The expectation value of squared position. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position. |
