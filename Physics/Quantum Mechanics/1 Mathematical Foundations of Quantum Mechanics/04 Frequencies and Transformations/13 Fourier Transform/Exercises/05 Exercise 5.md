---
title: "Momentum moments and minimum Gaussian uncertainty"
---

> [!TLDR]
> A Gaussian packet has Gaussian momentum probabilities and reaches the minimum initial uncertainty product.

Chapter 13 · Exercise 5 · Intermediate level

Back to [[13 Fourier Transform/08 Exercises|Chapter 13 exercises]].

## Question

For the initial Gaussian wave packet

$$
\signal{\psi}(\mechanical{x},0)
=(2\pi\mechanical{\sigma}^2)^{-1/4}
e^{-\mechanical{x}^2/(4\mechanical{\sigma}^2)}
e^{i\mechanical{p_0}\mechanical{x}/\mechanical{\hbar}},
$$

**(a)** Calculate $\signal{\widetilde\psi}(\mechanical{p},0)$, the transform with respect to momentum.

**(b)** Calculate $\langle\hat p\rangle$ and $\langle\hat p^2\rangle$ in momentum space, where momentum acts by multiplication by $\mechanical{p}$.

**(c)** Calculate $\mechanical{\Delta p}$ and verify $\mechanical{\Delta x}\mechanical{\Delta p}=\mechanical{\hbar}/2$.

## Worked solution

### (a) Evaluate the momentum transform

The plane-wave factor shifts the center of the momentum distribution. Write $q=\mechanical{p}-\mechanical{p}_0$ as an integration variable. Then

$$
\signal{\widetilde\psi}(\mechanical{p},0)=\frac{(2\pi\mechanical{\sigma}^2)^{-1/4}}{\sqrt{2\pi\mechanical{\hbar}}}
\int_{\mathbb R}\exp\left[-\frac{\mechanical{x}^2}{4\mechanical{\sigma}^2}-\frac{iq\mechanical{x}}{\mechanical{\hbar}}\right]d\mechanical{x}.
$$

Complete the square as in Exercise 3. The integral is $2\mechanical{\sigma}\sqrt\pi\exp[-\mechanical{\sigma}^2q^2/\mechanical{\hbar}^2]$. Thus

$$
\signal{\widetilde\psi}(\mechanical{p},0)=\left(\frac{2\mechanical{\sigma}^2}{\pi\mechanical{\hbar}^2}\right)^{1/4}
\exp\left[-\frac{\mechanical{\sigma}^2(\mechanical{p}-\mechanical{p}_0)^2}{\mechanical{\hbar}^2}\right].
$$

### (b) Integrate the first two moments

Define the positive mathematical coefficient $a=2\mechanical{\sigma}^2/\mechanical{\hbar}^2$. The probability measure is

$$
|\signal{\widetilde\psi}(\mechanical{p},0)|^2d\mechanical{p}=\sqrt{\frac a\pi}e^{-aq^2}dq.
$$

The odd integral $\int_{\mathbb R} q e^{-aq^2}dq$ vanishes. Differentiation of $\int_{\mathbb R} e^{-aq^2}dq=\sqrt{\pi/a}$ gives

$$
\sqrt{\frac a\pi}\int_{\mathbb R}q^2e^{-aq^2}dq=\frac1{2a}=\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^2}.
$$

Expand $\mechanical{p}=q+\mechanical{p}_0$ inside each expectation integral:

$$
\langle\hat p\rangle=\mechanical{p}_0,
\qquad
\langle\hat p^2\rangle=\mechanical{p}_0^2+\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^2}.
$$

The cross term in the second moment vanishes because it is odd in $q$.

### (c) Use probability widths, not amplitude widths

The variance is the second moment minus the squared mean:

$$
\mechanical{\Delta p}^2=\langle\hat p^2\rangle-\langle\hat p\rangle^2
=\frac{\mechanical{\hbar}^2}{4\mechanical{\sigma}^2},\qquad \mechanical{\Delta p}=\frac{\mechanical{\hbar}}{2\mechanical{\sigma}}.
$$

The position density is

$$
|\signal{\psi}(\mechanical{x},0)|^2=\frac1{\sqrt{2\pi}\mechanical{\sigma}}e^{-\mechanical{x}^2/(2\mechanical{\sigma}^2)}.
$$

It has mean zero and standard deviation $\mechanical{\Delta x}=\mechanical{\sigma}$. The exponent in the amplitude contains $4\mechanical{\sigma}^2$, whereas the density exponent contains $2\mechanical{\sigma}^2$. This distinction prevents a factor-of-two error.

## Answer

The momentum distribution is centered at $\mechanical{p}_0$, with $\mechanical{\Delta p}=\mechanical{\hbar}/(2\mechanical{\sigma})$. Initially,

$$
\boxed{\mechanical{\Delta x}\mechanical{\Delta p}=\frac{\mechanical{\hbar}}{2}.}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The particle position coordinate. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | The momentum coordinate. |
| $\mechanical{p}_0$, $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The center of the momentum distribution. |
| $\langle\hat p^2\rangle$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Second momentum moment | The mean squared momentum. |
| $\mechanical{\sigma}$ | $\unit{m}$ | Initial position width | The initial position standard deviation. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The position standard deviation. |
| $\mechanical{\Delta p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum uncertainty | The momentum standard deviation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Position wavefunction | The normalized position probability amplitude. |
| $\signal{\widetilde\psi}$ | $(\unit{kg\,m\,s^{-1}})^{-1/2}$ | Momentum wavefunction | The normalized momentum probability amplitude. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of the Fourier kernel. |
