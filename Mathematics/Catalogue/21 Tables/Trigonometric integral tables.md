---
title: "Trigonometric integral tables"
catalogue_ids:
  - "21.7.3"
  - "21.7.3.1"
  - "21.7.3.2"
  - "21.7.3.3"
  - "21.7.3.4"
  - "21.7.3.5"
---

> [!TLDR]
> Use parity, trigonometric identities, and a substitution to reduce sine, cosine, tangent, and cotangent integrals to a few checked rows.

## Read a trigonometric table

All angles here are in radians. A derivative formula written for radians acquires a scale factor if the input is in degrees. Review [[04.05 The unit circle]], [[04.06 Trigonometric identities]], and [[08.04 Substitution]]. The constants $a,b$ below are real; require $a\ne0$ for rows that divide by $a$. Each result has an arbitrary additive constant.

| Integrand | Antiderivative, plus $C$ |
| --- | --- |
| $\sin(ax+b)$ | $-\cos(ax+b)/a$ |
| $\cos(ax+b)$ | $\sin(ax+b)/a$ |
| $\sec^2(ax+b)$ | $\tan(ax+b)/a$ |
| $\csc^2(ax+b)$ | $-\cot(ax+b)/a$ |

Here $\sec x=1/\cos x$ and $\csc x=1/\sin x$. Their poles divide the real line into working intervals. A table row is an identity for an antiderivative on each such interval, not permission to integrate through a pole.

## Sine powers

For an odd sine power, reserve one factor $\sin x$ and replace the remaining even power with $1-\cos^2x$. For example,

$$
\int\sin^3x\,dx
=\int(1-\cos^2x)\sin x\,dx
=-\cos x+\frac{\cos^3x}{3}+C.
$$

The substitution is $u=\cos x$, $du=-\sin x\,dx$. For even powers, use $\sin^2x=(1-\cos2x)/2$. Thus $\int\sin^2x\,dx=x/2-\sin2x/4+C$. A reduction formula, obtained by integration by parts, is $S_n=-\sin^{n-1}x\cos x/n+(n-1)S_{n-2}/n$ for $S_n=\int\sin^nx\,dx$ and integer $n\ge2$. Start from $S_0=x$ and $S_1=-\cos x$.

## Cosine powers

For odd cosine powers, reserve $\cos x$ and substitute $u=\sin x$. For even powers, use $\cos^2x=(1+\cos2x)/2$. The representative results are

$$
\int\cos^3x\,dx=\sin x-\frac{\sin^3x}{3}+C,
\qquad
\int\cos^2x\,dx=\frac x2+\frac{\sin2x}{4}+C.
$$

For integer $n\ge2$, the recurrence is $C_n=\sin x\cos^{n-1}x/n+(n-1)C_{n-2}/n$. Do not confuse the symbol $C_n$ for this family with the arbitrary integration constant $C$.

## Products of sine and cosine

For $\int\sin^mx\cos^nx\,dx$ with nonnegative integers $m,n$, reserve a sine factor when $m$ is odd, or a cosine factor when $n$ is odd. If both powers are even, use half-angle identities. For products with different multiples of $x$, use product-to-sum formulas:

$$
\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)],
$$

$$
\cos A\cos B=\frac12[\cos(A-B)+\cos(A+B)].
$$

For example, $\int\sin3x\cos x\,dx=\tfrac12\int(\sin4x+\sin2x)\,dx=-\cos4x/8-\cos2x/4+C$. If $A=B$, one resulting frequency can be zero. Handle that constant term directly instead of dividing by zero in a frequency formula.

## Tangent functions

Since $\tan x=\sin x/\cos x$, substitution in the denominator gives

$$
\int\tan x\,dx=-\ln|\cos x|+C.
$$

Using $\tan^2x=\sec^2x-1$ gives $\int\tan^2x\,dx=\tan x-x+C$. For integer $n\ge2$, write $T_n=\int\tan^nx\,dx$ and use

$$
T_n=\frac{\tan^{n-1}x}{n-1}-T_{n-2}.
$$

This comes from $\tan^{n-2}x(\sec^2x-1)$ and $u=\tan x$. It reduces the power by two. All formulas exclude zeros of $\cos x$.

## Cotangent functions

Cotangent is $\cot x=\cos x/\sin x$. Its first row is $\int\cot x\,dx=\ln|\sin x|+C$. Since $\cot^2x=\csc^2x-1$, the squared row is $-\cot x-x+C$. The recurrence for $Q_n=\int\cot^nx\,dx$ is

$$
Q_n=-\frac{\cot^{n-1}x}{n-1}-Q_{n-2},\qquad n\ge2.
$$

The minus sign comes from $d(\cot x)/dx=-\csc^2x$. Exclude zeros of $\sin x$. The absolute value in the logarithm keeps the real formula valid on intervals where the sine is negative.

## Worked example: choose the short route

Integrate $\sin^3x\cos^2x$. Reserve one sine factor and set $u=\cos x$. Then

$$
\int\sin^3x\cos^2x\,dx
=-\int(1-u^2)u^2\,du
=-\frac{u^3}{3}+\frac{u^5}{5}+C.
$$

The answer is $-\cos^3x/3+\cos^5x/5+C$. Differentiate: the result is $\sin x\cos^2x-\sin x\cos^4x=\sin x\cos^2x(1-\cos^2x)$, as required. Expanding every factor into multiple angles would also work, but would produce more terms.

## Practice

1. Integrate $\cos^3x\sin^2x$.
2. Integrate $\tan^3x$ and specify excluded points.

> [!example]- Worked answers
> 1. With $u=\sin x$, the integral is $\int(1-u^2)u^2\,du=u^3/3-u^5/5+C=\sin^3x/3-\sin^5x/5+C$.
> 2. The recurrence gives $T_3=\tan^2x/2-T_1=\tan^2x/2+\ln|\cos x|+C$. Exclude $x=\pi/2+k\pi$ for integers $k$. Differentiation gives $\tan x\sec^2x-\tan x=\tan^3x$.
