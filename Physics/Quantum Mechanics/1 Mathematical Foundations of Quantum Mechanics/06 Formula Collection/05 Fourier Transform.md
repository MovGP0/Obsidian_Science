---
title: "Fourier Transform"
---

> [!TLDR]
> The symmetric Fourier convention uses the same normalization factor in both directions. Parseval's relation states that the transform preserves the squared norm.

## Forward transform

$$
\hat f(k)=\frac1{\sqrt{2\pi}}
\int_{-\infty}^{+\infty}f(x)e^{-ikx}\,dx.
$$

## Inverse transform

$$
f(x)=\frac1{\sqrt{2\pi}}
\int_{-\infty}^{+\infty}\hat f(k)e^{ikx}\,dk.
$$

## Parseval's relation

$$
\int_{-\infty}^{+\infty}|\hat f(k)|^2\,dk
=\int_{-\infty}^{+\infty}|f(x)|^2\,dx.
$$

For $L^2$ functions, the transform and inverse are understood through their norm limits when the displayed integrals do not converge in the ordinary sense. The variables are generic here; physical units depend on the application.

Compare the normalization and frequency variables in [[03 The Fourier Transform|the transform-convention table]].
