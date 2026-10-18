---
title: "Trigonometric integration"
catalogue_ids:
  - "8.1.5"
  - "8.1.5.1"
  - "8.1.5.2"
---

> [!TLDR]
> Use trigonometric identities to simplify powers and products, then choose a substitution which removes the remaining pattern.

## Choose the simplest structure

Start with [[Antiderivatives and integration rules]] and [[08.06 Elementary methods]]. All angles in this lesson are in radians. The identities $\sin^2x+\cos^2x=1$, $1+\tan^2x=\sec^2x$, and $\sin2x=2\sin x\cos x$ convert one pattern into another. The purpose is to expose a derivative factor, not merely to change appearance.

For $\int\sin^m x\cos^n x\,dx$ with nonnegative integers $m,n$, an odd power usually makes substitution easy. If $m$ is odd, keep one factor $\sin x\,dx$ and convert the remaining sine powers to cosines. Set $u=\cos x$, so $du=-\sin x\,dx$. If $n$ is odd, keep $\cos x\,dx$ and use $u=\sin x$. If both powers are even, use half-angle identities such as $\sin^2x=(1-\cos2x)/2$.

## Worked example: an odd power

Integrate $\sin^3x\cos^2x$. Write $\sin^3x=(1-\cos^2x)\sin x$, so

$$
\int\sin^3x\cos^2x\,dx
=-\int(1-u^2)u^2\,du
=-\frac{\cos^3x}{3}+\frac{\cos^5x}{5}+C.
$$

The minus sign comes from differentiating cosine. Differentiation gives $\cos^2x\sin x-\cos^4x\sin x=\sin^3x\cos^2x$. No branch restriction is needed for this final identity on the real line.

For an even-power example, $\sin^2x\cos^2x=\sin^2(2x)/4=(1-\cos4x)/8$. Therefore its integral is $x/8-\sin4x/32+C$. Each doubled angle introduces a scale factor in the antiderivative.

## Products and tangent powers

The product-to-sum formulas reduce products of different frequencies. For example,

$$
\sin3x\cos x=\tfrac12(\sin4x+\sin2x),
$$

so the integral is $-\cos4x/8-\cos2x/4+C$. This method is often shorter than a general substitution.

For $\int\tan^m x\sec^n x\,dx$, an even positive power of secant suggests reserving $\sec^2x\,dx$ and setting $u=\tan x$. An odd tangent power with a secant factor suggests reserving $\sec x\tan x\,dx$ and setting $u=\sec x$. For example,

$$
\int\tan^2x\sec^4x\,dx
=\int u^2(1+u^2)\,du
=\frac{\tan^3x}{3}+\frac{\tan^5x}{5}+C.
$$

These answers hold on intervals without zeros of $\cos x$. Some cases require parts or identities instead. For instance, integration by parts gives the reduction $\int\sec^3x\,dx=\tfrac12\sec x\tan x+\tfrac12\ln|\sec x+\tan x|+C$. To check it, differentiate both terms and use $\tan^2x=\sec^2x-1$.

## The tangent half-angle substitution

For a rational function of $\sin x$ and $\cos x$, a systematic substitution is $t=\tan(x/2)$. Double-angle identities give

$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2},\qquad
dx=\frac{2\,dt}{1+t^2}.
$$

Thus the transformed integrand is rational in $t$ and can be handled by [[Rational integrands and partial fractions]]. It is sometimes longer than the special methods above. It works on intervals that do not cross $x=(2j+1)\pi$, where this parameter becomes infinite. Split a definite integral there if the original integrand is otherwise regular; the parameter's failure is not necessarily an original singularity.

For example,

$$
\int\frac{dx}{2+\cos x}
=\int\frac{2\,dt}{3+t^2}
=\frac2{\sqrt3}\arctan\left(\frac{\tan(x/2)}{\sqrt3}\right)+C.
$$

This is a local antiderivative. It needs additive adjustments between half-angle charts to make a continuous global antiderivative. Directly subtracting the displayed principal inverse-tangent values across a chart boundary can give a wrong result.

## Check a definite integral across a parameter boundary

The integrand $1/(2+\cos x)$ is continuous on the whole real line because its denominator is at least one. Yet the half-angle parameter is infinite at $x=\pi$. To integrate from $0$ to $2\pi$, split at that point. On $(0,\pi)$, $t$ runs from zero to positive infinity. On $(\pi,2\pi)$, $t$ runs from negative infinity to zero. The total is therefore

$$
\int_0^\infty\frac{2\,dt}{3+t^2}
+\int_{-\infty}^0\frac{2\,dt}{3+t^2}
=\frac{2\pi}{\sqrt3}.
$$

Both improper parameter integrals converge. This artificial infinity belongs to the coordinate choice, not to a singularity in the original function. The answer lies between $2\pi/3$ and $2\pi$, as the pointwise bounds $1/3\le1/(2+\cos x)\le1$ require. The sign and size check would reject a zero answer obtained by blindly subtracting equal principal inverse-tangent values at the original endpoints.

## Practice

1. Integrate $\sin^2x$ and evaluate its integral from $0$ to $\pi$.
2. Find $\int\cos^3x\,dx$ without a half-angle substitution.

## Worked answers

1. The identity gives $\int\sin^2x\,dx=x/2-\sin2x/4+C$. Endpoint subtraction gives $\pi/2$. Its average on the interval is $1/2$, which is consistent with the symmetry of sine and cosine squares.
2. Write $\cos^3x=(1-\sin^2x)\cos x$. Set $u=\sin x$ to get $u-u^3/3+C=\sin x-\sin^3x/3+C$. Differentiation gives $\cos x(1-\sin^2x)=\cos^3x$.
