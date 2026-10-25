---
title: "The Fourier Transform"
---

> [!TLDR]
> Fourier conventions differ in normalization and in the frequency variable. These choices change factors such as 2π in differentiation formulas.

## Three common conventions

All integrals in the table extend over the complete real axis.

| Convention | Forward transform | Inverse transform |
| --- | --- | --- |
| Symmetric convention used in this book | $\hat f(k)=\frac1{\sqrt{2\pi}}\int f(x)e^{-ikx}\,dx$ | $f(x)=\frac1{\sqrt{2\pi}}\int\hat f(k)e^{ikx}\,dk$ |
| Engineering convention, frequency $\signal{\nu}$ | $\hat f(\signal{\nu})=\int f(\signal{t})e^{-2\pi i\signal{\nu}\signal{t}}\,d\signal{t}$ | $f(\signal{t})=\int\hat f(\signal{\nu})e^{2\pi i\signal{\nu}\signal{t}}\,d\signal{\nu}$ |
| Common pure-mathematics convention | $\hat f(\xi)=\int f(x)e^{-2\pi i\xi x}\,dx$ | $f(x)=\int\hat f(\xi)e^{2\pi i\xi x}\,d\xi$ |

The third row has the same normalization and phase convention as the engineering row. It changes the variable names. Here, $x$, $k$, and $\xi$ are generic mathematical variables; their physical interpretation depends on the application.

## Effect on derivatives

In the symmetric convention,

$$
\mathcal F[f'](k)=ik\hat f(k).
$$

For the engineering time–frequency convention,

$$
\mathcal F[f'](\signal{\nu})
=2\pi i\signal{\nu}\hat f(\signal{\nu}).
$$

These identities require the appropriate differentiability and boundary conditions, or their corresponding distributional interpretation. Always check which convention an author uses before transferring a formula.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The independent variable in the engineering convention. |
| $\signal{\nu}$ | $\unit{Hz}$ | Frequency | The number of cycles per second in the engineering convention. |
