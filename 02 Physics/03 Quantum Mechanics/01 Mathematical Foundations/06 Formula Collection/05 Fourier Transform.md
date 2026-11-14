---
title: "Fourier Transform"
---

> [!TLDR]
> The symmetric Fourier convention uses the same normalization factor in both directions. Parseval's relation states that the transform preserves the squared norm.

## Forward transform

Choose this convention when the inverse must be the adjoint transform without an extra normalization factor. The minus sign belongs to the forward kernel and the plus sign to the inverse. The phase $kx$ must be dimensionless.

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

## Checks and use

For $f(x)=e^{-x^2/2}$, the displayed convention gives $\hat f(k)=e^{-k^2/2}$. Both squared norms are $\sqrt\pi$, so this unnormalized Gaussian checks both the scale and the sign-independent norm identity. Multiplying by $\pi^{-1/4}$ makes either norm one. A constant function or a plane wave on the full line is not in $L^2$; its transform requires distributions, and the finite-norm statement cannot be applied directly.

When $f$ is continuously differentiable and both $f$ and $f'$ are integrable, with $f$ tending to zero at both ends, integration by parts gives

$$
\widehat{f'}(k)=ik\hat f(k).
$$

The boundary term is what permits a differential equation in position to become an algebraic multiplication in wave number. If the boundary term does not vanish, this derivation needs additional terms or a distributional interpretation.

In quantum mechanics, Parseval's relation preserves the total probability when a normalized position amplitude is transformed to a wave-number amplitude. A momentum amplitude also requires the change of integration measure from wave number to momentum; relabeling the horizontal axis alone does not preserve probability density. Check both the kernel and the measure before transferring this formula to a momentum convention.
