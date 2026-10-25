---
title: "A Gaussian packet at the uncertainty bound"
---

> [!TLDR]
> A Gaussian packet has mean momentum set by its phase and a position–momentum uncertainty product equal to ℏ/2.

Chapter 2: Functions, Derivatives and Integrals · Exercise 7 · Challenge level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 7 — The Gaussian wave packet and the uncertainty relation|Chapter 2 exercise index]].

## Question

Let

$$
\signal{\psi}(\mechanical{x})
=\signal{A}\mathrm{e}^{-\mechanical{x}^2/(4\mechanical{\sigma}^2)}
\mathrm{e}^{\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}},
\qquad\signal{A}=(2\pi\mechanical{\sigma}^2)^{-1/4}.
$$

**(a)** Calculate $\langle\hat x\rangle$ and $\langle\hat x^2\rangle$. *Hint:* the phase $\mathrm{e}^{\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}}$ cancels from $|\signal{\psi}|^2$.

**(b)** Calculate $\langle\hat p\rangle$ with $\hat p=-\mathrm{i}\mechanical{\hbar}\partial_x$.

**(c)** Calculate $\langle\hat p^2\rangle$ by applying $\hat p$ twice.

**(d)** Find $\mechanical{\Delta x}$ and $\mechanical{\Delta p}$. Verify that

$$
\mechanical{\Delta x}\cdot\mechanical{\Delta p}=\frac{\mechanical{\hbar}}{2}.
$$

The Gaussian wave packet is the state that minimizes the Heisenberg uncertainty relation.

> [!note]
> Use $\mechanical{\sigma}>0$ and $\mechanical{L}>0$ where these parameters occur. Integrals with omitted limits in the whole-line wave-packet exercises are over $\mathbb{R}$. The integration-by-parts exercise also assumes enough regularity and integrability for both sides to exist.

## Worked solution

Use real $\mechanical{p}_0$. The stated width is positive, and all wave-packet integrals are over $\mathbb R$.

### (a) Remove the phase and calculate position moments

The phase has modulus one. Thus the density equals the centered Gaussian density from [[02 Functions, Derivatives and Integrals/Exercises/04 Exercise 4|Exercise 4]]:

$$
\lvert\signal{\psi}\rvert^2
=\frac{1}{\sqrt{2\pi}\mechanical{\sigma}}
\mathrm{e}^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}.
$$

It is even, so $\langle\hat x\rangle=0$. To show the second moment explicitly, use $u=\mechanical{x}/(\sqrt2\mechanical{\sigma})$ and the Gaussian integrals from Exercises 2 and 4:

$$
\begin{aligned}
\langle\hat x^2\rangle
&=\frac{2\sqrt2\mechanical{\sigma}^3}{\sqrt{2\pi}\mechanical{\sigma}}
\int_{\mathbb R}u^2\mathrm{e}^{-u^2}\,\mathrm{d}u\\
&=\frac{2\mechanical{\sigma}^2}{\sqrt\pi}\frac{\sqrt\pi}{2}
=\mechanical{\sigma}^2.
\end{aligned}
$$

### (b) Apply the momentum operator once

Differentiate both exponentials. The real exponent describes the envelope, while the imaginary exponent describes the phase:

$$
\signal{\psi}'
=\left(-\frac{\mechanical{x}}{2\mechanical{\sigma}^2}
+\frac{\mathrm{i}\mechanical{p}_0}{\mechanical{\hbar}}\right)\signal{\psi}.
$$

Multiplication by $-\mathrm{i}\mechanical{\hbar}$ gives

$$
\hat p\signal{\psi}
=\left(\mechanical{p}_0+
\frac{\mathrm{i}\mechanical{\hbar}\mechanical{x}}{2\mechanical{\sigma}^2}\right)\signal{\psi}.
$$

Integrate against the conjugate state and use normalization and the zero position mean:

$$
\langle\hat p\rangle
=\mechanical{p}_0\int_{\mathbb R}\lvert\signal{\psi}\rvert^2\,\mathrm{d}\mechanical{x}
+\frac{\mathrm{i}\mechanical{\hbar}}{2\mechanical{\sigma}^2}\langle\hat x\rangle
=\mechanical{p}_0.
$$

### (c) Apply the momentum operator a second time

The coefficient in $\hat p\signal{\psi}$ also depends on position. The product rule must differentiate it as well as the state:

$$
\begin{aligned}
\hat p^2\signal{\psi}
&=-\mathrm{i}\mechanical{\hbar}\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}
\left[\left(\mechanical{p}_0+
\frac{\mathrm{i}\mechanical{\hbar}\mechanical{x}}{2\mechanical{\sigma}^2}\right)\signal{\psi}\right]\\
&=\left[\frac{\mechanical{\hbar}^2}{2\mechanical{\sigma}^2}
+\left(\mechanical{p}_0+
\frac{\mathrm{i}\mechanical{\hbar}\mechanical{x}}{2\mechanical{\sigma}^2}\right)^2\right]\signal{\psi}\\
&=\left[\mechanical{p}_0^2
+\frac{\mechanical{\hbar}^2}{2\mechanical{\sigma}^2}
+\frac{\mathrm{i}\mechanical{\hbar}\mechanical{p}_0\mechanical{x}}{\mechanical{\sigma}^2}
-\frac{\mechanical{\hbar}^2\mechanical{x}^2}{4\mechanical{\sigma}^4}\right]\signal{\psi}.
\end{aligned}
$$

Now replace each position term by its expectation value:

$$
\begin{aligned}
\langle\hat p^2\rangle
&=\mechanical{p}_0^2+\frac{\mechanical{\hbar}^2}{2\mechanical{\sigma}^2}
+\frac{\mathrm{i}\mechanical{\hbar}\mechanical{p}_0}{\mechanical{\sigma}^2}\langle\hat x\rangle
-\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^4}\langle\hat x^2\rangle\\
&=\mechanical{p}_0^2+\frac{\mechanical{\hbar}^2}{2\mechanical{\sigma}^2}
-\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^2}\\
&=\mechanical{p}_0^2+\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^2}.
\end{aligned}
$$

The odd term vanishes. Keeping the derivative of the coefficient in the first line is essential for the positive final variance.

### (d) Calculate both standard deviations

Subtract the squared means before taking square roots:

$$
\begin{aligned}
\mechanical{\Delta x}
&=\sqrt{\langle\hat x^2\rangle-\langle\hat x\rangle^2}
=\mechanical{\sigma},\\
\mechanical{\Delta p}
&=\sqrt{\langle\hat p^2\rangle-\langle\hat p\rangle^2}
=\sqrt{\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^2}}
=\frac{\mechanical{\hbar}}{2\mechanical{\sigma}}.
\end{aligned}
$$

Both $\mechanical{\sigma}$ and $\mechanical{\hbar}$ are positive. Their product therefore is

$$
\mechanical{\Delta x}\mechanical{\Delta p}
=\mechanical{\sigma}\frac{\mechanical{\hbar}}{2\mechanical{\sigma}}
=\frac{\mechanical{\hbar}}2.
$$

The Heisenberg lower bound is attained. The phase shifts the mean momentum without changing either uncertainty.

## Answer

**(a)** $\langle\hat x\rangle=0$ and $\langle\hat x^2\rangle=\mechanical{\sigma}^2$.

**(b)** $\langle\hat p\rangle=\mechanical{p}_0$.

**(c)** $\langle\hat p^2\rangle=\mechanical{p}_0^2+\mechanical{\hbar}^2/(4\mechanical{\sigma}^2)$.

**(d)** $\mechanical{\Delta x}=\mechanical{\sigma}$, $\mechanical{\Delta p}=\mechanical{\hbar}/(2\mechanical{\sigma})$, and $\mechanical{\Delta x}\mechanical{\Delta p}=\mechanical{\hbar}/2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate on the whole line. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Gaussian width | The positive width of the position density. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized Gaussian packet. |
| $\signal{A}$ | $\unit{m^{-1/2}}$ | Normalization amplitude | The positive prefactor of the packet. |
| $\lvert\signal{\psi}\rvert^2$ | $\unit{m^{-1}}$ | Probability density | The position probability per unit length. |
| $\mechanical{p}_0$ | $\unit{kg\,m\,s^{-1}}$ | Momentum parameter | The mean momentum set by the phase. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the momentum operator and bound. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The position expectation value. |
| $\langle\hat x^2\rangle$ | $\unit{m^2}$ | Second position moment | The expectation value of squared position. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The momentum expectation value. |
| $\langle\hat p^2\rangle$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Second momentum moment | The expectation value of squared momentum. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The standard deviation of momentum. |
