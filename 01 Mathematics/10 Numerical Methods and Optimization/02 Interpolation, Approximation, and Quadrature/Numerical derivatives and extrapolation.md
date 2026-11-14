---
title: "Numerical derivatives and extrapolation"
---

> [!TLDR]
> Taylor expansions identify the error of a finite-difference derivative and show how two step sizes can cancel its leading term.

For a smooth real function $f$, sample at distances $h$ on both sides of $x$. Subtract the Taylor expansions to cancel even derivatives.

$$
D_h=\frac{f(x+h)-f(x-h)}{2h}=f'(x)+\frac{h^2}{6}f^{(3)}(x)+O(h^4).
$$

The remainder holds, for example, with five continuous derivatives near $x$. The extrapolated value $(4D_{h/2}-D_h)/3$ removes the error term proportional to $h^2$. With $f(x)=x^3$ at $x=1$, $D_h=3+h^2$, so the extrapolated value is exactly $3$ in exact arithmetic.

When samples lie at unequal offsets, the equal-step cancellation no longer holds. Interpolate the local samples with a low-degree polynomial, then differentiate that polynomial. See [[Polynomial interpolation algorithms]]. Very small $h$ can amplify noise or rounding because the denominator shrinks while finite precision in the numerator persists. If decreasing the step stops improving the estimate, compare against a known test derivative or account for measurement error before extrapolating further.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Finite differences and Richardson calculations#Approximating derivatives|Math 130]], [[Least-squares and numerical calculus review problems#Numerical differentiation review|Math 130]].
