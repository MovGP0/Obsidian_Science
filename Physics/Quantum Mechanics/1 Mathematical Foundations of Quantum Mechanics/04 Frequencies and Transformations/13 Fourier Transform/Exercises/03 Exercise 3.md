---
title: "Normalization of the Gaussian momentum amplitude"
---

> [!TLDR]
> The momentum transform preserves probability when its Planck-constant factor is included.

Chapter 13 · Exercise 3 · Basic level

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

Verify

$$
\int_{-\infty}^{+\infty}|\signal{\widetilde\psi}(\mechanical{p})|^2\,d\mechanical{p}=1
$$

for the Gaussian wave packet

$$
\signal{\psi}(\mechanical{x})
=(2\pi\mechanical{\sigma}^2)^{-1/4}
e^{-\mechanical{x}^2/(4\mechanical{\sigma}^2)},
\qquad\mechanical{\sigma}>0.
$$

## Worked solution

### Keep the momentum and wavenumber conventions separate

The momentum amplitude uses

$$
\signal{\widetilde\psi}(\mechanical{p})=\frac1{\sqrt{2\pi\mechanical{\hbar}}}\int_{\mathbb R}\signal{\psi}(\mechanical{x})e^{-i\mechanical{p}\mechanical{x}/\mechanical{\hbar}}\,d\mechanical{x}.
$$

Put $N=(2\pi\mechanical{\sigma}^2)^{-1/4}$. Complete the square in the exponent:

$$
-\frac{\mechanical{x}^2}{4\mechanical{\sigma}^2}-\frac{i\mechanical{p}\mechanical{x}}{\mechanical{\hbar}}
=-\frac{(\mechanical{x}+2i\mechanical{\sigma}^2\mechanical{p}/\mechanical{\hbar})^2}{4\mechanical{\sigma}^2}
-\frac{\mechanical{\sigma}^2\mechanical{p}^2}{\mechanical{\hbar}^2}.
$$

The Gaussian integral $\int_{\mathbb R} e^{-ax^2+bx}dx=\sqrt{\pi/a}\,e^{b^2/(4a)}$, with $\operatorname{Re}a>0$, therefore gives

$$
\signal{\widetilde\psi}(\mechanical{p})=\frac{N\,2\mechanical{\sigma}\sqrt\pi}{\sqrt{2\pi\mechanical{\hbar}}}
e^{-\mechanical{\sigma}^2\mechanical{p}^2/\mechanical{\hbar}^2}
=\left(\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}\right)^{1/4}e^{-\mechanical{\sigma}^2\mechanical{p}^2/\mechanical{\hbar}^2}.
$$

### Integrate the probability density

$$
\begin{aligned}
\int_{\mathbb R}|\signal{\widetilde\psi}(\mechanical{p})|^2\,d\mechanical{p}
&=\sqrt{\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}}
\int_{\mathbb R}e^{-2\mechanical{\sigma}^2\mechanical{p}^2/\mechanical{\hbar}^2}\,d\mechanical{p}\\
&=\sqrt{\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}}
\sqrt{\frac{\pi\mechanical{\hbar}^2}{2\mechanical{\sigma}^2}}=1.
\end{aligned}
$$

For comparison, let $\signal{\hat\psi}(\signal{k})$ use the kernel $e^{-i\signal{k}\mechanical{x}}/\sqrt{2\pi}$. Since $\mechanical{p}=\mechanical{\hbar}\signal{k}$,

$$
\signal{\widetilde\psi}(\mechanical{p})=\mechanical{\hbar}^{-1/2}\signal{\hat\psi}(\mechanical{p}/\mechanical{\hbar}),
\qquad d\mechanical{p}=\mechanical{\hbar}\,d\signal{k}.
$$

The factor $\mechanical{\hbar}^{-1/2}$ cancels the change in measure. It cannot be omitted when a wavenumber transform is written as a momentum amplitude.

## Answer

The momentum amplitude is normalized: $\int|\signal{\widetilde\psi}(\mechanical{p})|^2d\mechanical{p}=1$. This agrees with Parseval's identity and the normalized position density.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle position coordinate. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum coordinate. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Initial position width | The initial position standard deviation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The normalized position probability amplitude. |
| $\signal{\widetilde\psi}$ | $(\unit{kg\,m\,s^{-1}})^{-1/2}$ | Momentum wavefunction | The normalized momentum probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of the Fourier kernel. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wavenumber | The spatial Fourier coordinate equal to momentum divided by ℏ. |
| $\signal{\hat\psi}$ | $\unit{m^{1/2}}$ | Wavenumber amplitude | The wavefunction normalized with respect to wavenumber. |
