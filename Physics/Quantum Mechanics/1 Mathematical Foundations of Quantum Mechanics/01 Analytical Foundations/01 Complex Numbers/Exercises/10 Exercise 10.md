---
title: "Normalization and mean momentum of an exponential wavefunction"
---

> [!TLDR]
> Normalization fixes the amplitude at 1/√a, and the spatial phase sets the mean momentum without changing the position density.

Chapter 1 — Complex Numbers. Exercise 10. **Difficulty: Challenge.**

Back to [[01 Complex Numbers/09 Exercises#Exercise 10|the chapter exercise index]].

## Question

Let

$$
\signal{\psi}(\mechanical{x})
=\signal{A}\mathrm{e}^{-|\mechanical{x}|/\mechanical{a}}
\mathrm{e}^{\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}},
\qquad\signal{A},\mechanical{a},\mechanical{p}_0\in\mathbb{R},\quad\mechanical{a}>0.
$$

**(a)** Find $\signal{A}>0$ such that

$$
\int_{-\infty}^{+\infty}|\signal{\psi}|^2\,\mathrm{d}\mechanical{x}=1.
$$

**(b)** Calculate $\rho(\mechanical{x})=|\signal{\psi}(\mechanical{x})|^2$. Verify that it is independent of $\mechanical{p}_0$.

**(c)** What does $\mechanical{p}_0$ represent physically?

## Worked solution

### (a) Normalize the wavefunction

The phase exponent is purely imaginary because all its parameters are real. Thus its modulus is one. Multiply the wavefunction by its conjugate:

$$
\begin{aligned}
|\signal{\psi}(\mechanical{x})|^2
&=\signal{A}^2\mathrm{e}^{-2|\mechanical{x}|/\mechanical{a}}
\mathrm{e}^{\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}}
\mathrm{e}^{-\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}}\\
&=\signal{A}^2\mathrm{e}^{-2|\mechanical{x}|/\mechanical{a}}.
\end{aligned}
$$

The density is even in position. Integrate over the positive half-line and multiply by two:

$$
\begin{aligned}
1
&=\int_{-\infty}^{\infty}|\signal{\psi}(\mechanical{x})|^2\,\mathrm{d}\mechanical{x}\\
&=2\signal{A}^2\int_0^\infty\mathrm{e}^{-2\mechanical{x}/\mechanical{a}}\,\mathrm{d}\mechanical{x}\\
&=2\signal{A}^2\left[-\frac{\mechanical{a}}2\mathrm{e}^{-2\mechanical{x}/\mechanical{a}}\right]_0^\infty\\
&=2\signal{A}^2\left(0+\frac{\mechanical{a}}2\right)
=\signal{A}^2\mechanical{a}.
\end{aligned}
$$

The upper boundary is zero because $\mechanical{a}>0$. Hence $\signal{A}^2=1/\mechanical{a}$. The required positive amplitude is $\signal{A}=1/\sqrt{\mechanical{a}}$.

> [!note]
> The original exercise image uses the envelope $\mathrm{e}^{-|\mechanical{x}|/\mechanical{a}}$, where $\mechanical{a}$ is a length. This question repairs the earlier Markdown transcription, which put the parameter in the numerator of the exponent. The normalization below agrees with the original image and answer key.

### (b) Calculate the position probability density

Insert the normalized amplitude:

$$
\rho(\mechanical{x})
=|\signal{\psi}(\mechanical{x})|^2
=\frac1{\mechanical{a}}\mathrm{e}^{-2|\mechanical{x}|/\mechanical{a}}.
$$

There is no $\mechanical{p}_0$ in this expression. The conjugate phase cancels the original phase point by point, so a change of $\mechanical{p}_0$ cannot change the position probability density.

### (c) Identify the momentum parameter

The position representation of the momentum operator is

$$
\hat p=-\mathrm{i}\mechanical{\hbar}\frac{\mathrm{d}}{\mathrm{d}\mechanical{x}}.
$$

Let $f(\mechanical{x})=\frac1{\sqrt{\mechanical{a}}}\mathrm{e}^{-|\mechanical{x}|/\mechanical{a}}$ denote the real envelope. This $f$ is only a helper function. Then

$$
\signal{\psi}(\mechanical{x})
=f(\mechanical{x})\mathrm{e}^{\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}}.
$$

Use the product rule, away from $\mechanical{x}=0$:

$$
\hat p\signal{\psi}
=\left[-\mathrm{i}\mechanical{\hbar}f'(\mechanical{x})
+\mechanical{p}_0f(\mechanical{x})\right]
\mathrm{e}^{\mathrm{i}\mechanical{p}_0\mechanical{x}/\mechanical{\hbar}}.
$$

Multiply by $\signal{\psi}^*$ and integrate. The normalized envelope obeys $\int f^2\,\mathrm{d}\mechanical{x}=1$:

$$
\begin{aligned}
\langle\mechanical{p}\rangle
&=\int_{-\infty}^{\infty}\signal{\psi}^*\hat p\signal{\psi}\,\mathrm{d}\mechanical{x}\\
&=\mechanical{p}_0\int_{-\infty}^{\infty}f^2\,\mathrm{d}\mechanical{x}
-\mathrm{i}\mechanical{\hbar}\int_{-\infty}^{\infty}ff'\,\mathrm{d}\mechanical{x}\\
&=\mechanical{p}_0
-\frac{\mathrm{i}\mechanical{\hbar}}2[f^2]_{-\infty}^{\infty}
=\mechanical{p}_0.
\end{aligned}
$$

The boundary term is zero because the envelope decays at both ends. At the cusp, use the two integrals on $(-\infty,0)$ and $(0,\infty)$. Their boundary terms at zero cancel because $f$ is continuous. A value of the derivative at one point does not change the integral.

Thus $\mechanical{p}_0$ is the mean momentum. It is not a definite momentum eigenvalue: the derivative also acts on the nonconstant envelope. Multiplication by the plane-wave phase shifts the momentum distribution by $\mechanical{p}_0$ while leaving the position density fixed.

## Answer

**(a)**

$$
\boxed{\signal{A}=1/\sqrt{\mechanical{a}}.}
$$

**(b)**

$$
\boxed{\rho(\mechanical{x})=\frac1{\mechanical{a}}\mathrm{e}^{-2|\mechanical{x}|/\mechanical{a}},}
$$

independent of $\mechanical{p}_0$.

**(c)** $\boxed{\langle\mechanical{p}\rangle=\mechanical{p}_0}$. The phase parameter sets the mean of the momentum distribution.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}(\mechanical{x})$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized one-dimensional position state. |
| $\signal{A}$ | $\unit{m^{-1/2}}$ | Normalization amplitude | The positive factor that makes the total probability one. |
| $\mechanical{a}$ | $\unit{m}$ | Spatial decay length | The positive length in the exponential envelope. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The one-dimensional position coordinate. |
| $\mechanical{p}_0$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum parameter | The shift of the momentum distribution set by the phase. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The physical observable whose expectation is calculated. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action constant in the phase and momentum operator. |
| $\rho(\mechanical{x})$ | $\unit{m^{-1}}$ | Position probability density | The probability per unit position after normalization. |
