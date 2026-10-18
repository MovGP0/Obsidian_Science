---
title: "Trigonometric addition and multiple angles"
catalogue_ids:
  - "2.7.2"
  - "2.7.2.1"
  - "2.7.2.2"
  - "2.7.2.3"
  - "2.7.2.4"
---

> [!TLDR]
> Angle-addition identities follow from rotating unit-circle coordinates; repeated addition and rearrangement produce multiple- and half-angle formulas.

## Relations at one angle

Read [[Unit-circle function graphs]] first. The identity $\sin^2x+\cos^2x=1$ relates the circle coordinates. Dividing by $\cos^2x$, where cosine is nonzero, gives $1+\tan^2x=\sec^2x$. Dividing by $\sin^2x$, where sine is nonzero, gives $1+\cot^2x=\csc^2x$. These quotient identities are true only where their terms are defined.

Knowing one squared coordinate does not determine the sign of the other. For example, $\cos x=3/5$ gives $\sin x=\pm4/5$. A quadrant or angle interval must select the sign. Square roots return nonnegative magnitudes; the circle position supplies the sign.

## Derive addition from a rotation

A rotation through $v$ sends a point $(u,w)$ to

$$
(u\cos v-w\sin v,\ u\sin v+w\cos v).
$$

This follows by rotating the two coordinate direction vectors: $(1,0)$ becomes $(\cos v,\sin v)$, and its perpendicular $(0,1)$ becomes $(-\sin v,\cos v)$. Multiplying by $u,w$ and adding gives the rotated point.

Apply that rule to $(\cos u,\sin u)$ on the unit circle. The resulting point lies at angle $u+v$, so

$$
\cos(u+v)=\cos u\cos v-\sin u\sin v,
$$

$$
\sin(u+v)=\sin u\cos v+\cos u\sin v.
$$

Replace $v$ by $-v$ and use oddness of sine and evenness of cosine to obtain the difference identities. This explains the minus sign in cosine's addition rule instead of treating it as an isolated fact to memorize.

Dividing the sine-addition formula by the cosine-addition formula gives

$$
\tan(u+v)=\frac{\tan u+\tan v}{1-\tan u\tan v},
$$

provided both tangents and the resulting quotient are defined. The analogous difference formula has a minus in the numerator and a plus in the denominator. If $u+v=\pi/2$, the tangent of the sum is undefined; this is a domain exception, not an infinite real output.

## Double, triple, and arbitrary integer multiples

Set $u=v=x$ to get

$$
\sin2x=2\sin x\cos x,\qquad
\cos2x=\cos^2x-\sin^2x
=2\cos^2x-1=1-2\sin^2x.
$$

Adding $x$ once more and using the circle identity gives

$$
\sin3x=3\sin x-4\sin^3x,\qquad
\cos3x=4\cos^3x-3\cos x.
$$

For example, $\sin(2x+x)=2\sin x\cos^2x+(1-2\sin^2x)\sin x$. Replacing $\cos^2x$ by $1-\sin^2x$ yields the cubic sine expression. This is a derivation from addition, not a new definition.

For higher integer $n$, repeated multiplication of $\cos x+i\sin x$ gives De Moivre's identity

$$
(\cos x+i\sin x)^n=\cos(nx)+i\sin(nx).
$$

The addition formulas prove it inductively; the complex unit only organizes the algebra. Alternatively, cosine multiples satisfy $\cos((n+1)x)=2\cos x\cos(nx)-\cos((n-1)x)$ for $n\ge1$, giving a real recurrence without complex numbers.

## Half angles and sign choice

Rearrange the double-angle identities:

$$
\sin^2\frac x2=\frac{1-\cos x}2,\qquad
\cos^2\frac x2=\frac{1+\cos x}2.
$$

Taking square roots gives absolute values, not automatically positive sines and cosines. Determine the signs from the quadrant of $x/2$. When their denominators are nonzero, useful alternatives are

$$
\tan\frac x2=\frac{\sin x}{1+\cos x}
=\frac{1-\cos x}{\sin x}.
$$

These forms have different apparent exclusions. The first may work where the second is $0/0$. State which expression is being used at a boundary.

## Half-angle substitution as a rational calculation

Let $t=\tan(x/2)$ where that tangent is defined. Dividing the double-angle formulas by $\cos^2(x/2)$ gives

$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2}.
$$

The denominator is positive for real $t$, so these are rational expressions with no real poles in the parameter. They describe the unit circle except the point $(-1,0)$, which would require an undefined half-angle tangent. The missing point must be considered separately when this substitution is used to solve an equation. Substitution makes the algebra simpler but does not erase the domain of the new parameter. Squaring and adding the two expressions gives one, independently confirming their location on the circle.

## Worked example: an exact nonstandard angle

Calculate $\sin(\pi/12)$ and $\cos(\pi/12)$. Use $\pi/12=\pi/4-\pi/6$. The difference formulas give

$$
\sin\frac\pi{12}=\frac{\sqrt2}{2}\frac{\sqrt3}{2}
-\frac{\sqrt2}{2}\frac12=\frac{\sqrt6-\sqrt2}{4},
$$

$$
\cos\frac\pi{12}=\frac{\sqrt2}{2}\frac{\sqrt3}{2}
+\frac{\sqrt2}{2}\frac12=\frac{\sqrt6+\sqrt2}{4}.
$$

Both are positive, as required in the first quadrant. Squaring and adding gives $[(8-4\sqrt3)+(8+4\sqrt3)]/16=1$, an independent check. Their quotient rationalizes to $2-\sqrt3$, giving the tangent of the same angle.

## Practice

1. If $\sin x=3/5$ and $x\in(\pi/2,\pi)$, calculate $\sin2x$ and $\cos2x$.
2. Find $\sin(3\pi/4)$ by a half-angle formula applied to $x=3\pi/2$, and explain the chosen sign.

## Worked answers

1. Cosine is negative in the second quadrant, so $\cos x=-4/5$. Thus $\sin2x=2(3/5)(-4/5)=-24/25$ and $\cos2x=16/25-9/25=7/25$.
2. Since $\cos(3\pi/2)=0$, the magnitude is $\sqrt{(1-0)/2}=\sqrt2/2$. The half-angle $3\pi/4$ is in the second quadrant, where sine is positive, so the answer is $\sqrt2/2$.
