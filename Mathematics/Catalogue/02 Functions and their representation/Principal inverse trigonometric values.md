---
title: "Principal inverse trigonometric values"
catalogue_ids:
  - "2.8"
  - "2.8.1"
  - "2.8.2"
  - "2.8.3"
  - "2.8.4"
  - "2.8.8"
---

> [!TLDR]
> Inverse circular functions return one principal angle; reducing an arbitrary angle to that range can require reflection as well as a full-turn shift.

## Restrict a periodic function before reversing it

Read [[Function composition and inversion]] and [[Unit-circle function graphs]]. Sine is not one-to-one on $\mathbb R$, so it cannot have an inverse on that whole domain. Restrict it to $[-\pi/2,\pi/2]$, where it is strictly increasing and reaches every output in $[-1,1]$. Its inverse is $\arcsin$. Similarly, restrict cosine to $[0,\pi]$ and tangent to $(-\pi/2,\pi/2)$. We use these real principal conventions:

| Function | Real input domain | Principal output range |
| --- | --- | --- |
| $\arcsin x$ | $[-1,1]$ | $[-\pi/2,\pi/2]$ |
| $\arccos x$ | $[-1,1]$ | $[0,\pi]$ |
| $\arctan x$ | $\mathbb R$ | $(-\pi/2,\pi/2)$ |

The notation $\sin^{-1}x$ sometimes means $\arcsin x$; it does not mean $1/\sin x$. Use explicit inverse names to avoid ambiguity. Other inverse circular functions need conventions too. One real convention is $\operatorname{arccot}x\in(0,\pi)$, inverse to cotangent on that interval; under it $\operatorname{arccot}x=\pi/2-\arctan x$. Other texts choose differently. [NIST DLMF](https://dlmf.nist.gov/4.23) gives standard branch conventions; this article specifies the real ones it uses.

## Principal reduction of an arbitrary angle

The easy direction is $\sin(\arcsin x)=x$ for $|x|\le1$. In the reverse order, $\arcsin(\sin t)=t$ only when $t$ belongs to the selected sine interval. To reduce an arbitrary real $t$, first subtract a multiple of $2\pi$ to get $r\in[-\pi,\pi]$. Then

$$
\arcsin(\sin t)=
\begin{cases}
-\pi-r,&-\pi\le r<-\pi/2,\\
r,&-\pi/2\le r\le\pi/2,\\
\pi-r,&\pi/2<r\le\pi.
\end{cases}
$$

The outer pieces reflect the circle point into the principal half of the circle while preserving its height. For cosine, the same reduced angle gives $\arccos(\cos t)=|r|$. For tangent, subtract an integer multiple of $\pi$ to put the angle in $(-\pi/2,\pi/2)$, provided the original tangent is defined. Its poles cannot be reduced into legal values.

## Complement and negative-argument relations

For $x\in[-1,1]$,

$$
\arcsin x+\arccos x=\frac\pi2,\qquad
\arcsin(-x)=-\arcsin x,\qquad
\arccos(-x)=\pi-\arccos x.
$$

To prove the complement relation, put $\alpha=\arcsin x$. Then $\pi/2-\alpha\in[0,\pi]$ and $\cos(\pi/2-\alpha)=\sin\alpha=x$. The selected cosine interval makes that angle the unique $\arccos x$. The other formulas follow from reflection and the stated output ranges. Likewise, $\arctan(-x)=-\arctan x$ for every real input. Cosine's inverse is not odd; its range is not symmetric about zero.

## Useful conversions with domain checks

If $\alpha=\arcsin x$, then $\cos\alpha\ge0$. Hence $\cos(\arcsin x)=\sqrt{1-x^2}$ on $[-1,1]$. If $\beta=\arccos x$, its sine is nonnegative, giving $\sin(\arccos x)=\sqrt{1-x^2}$ on the same domain. For real $t$, the principal tangent angle has positive cosine, so

$$
\sin(\arctan t)=\frac{t}{\sqrt{1+t^2}},\qquad
\cos(\arctan t)=\frac1{\sqrt{1+t^2}}.
$$

These follow by normalizing a right triangle with adjacent side one and signed opposite coordinate $t$.

For $|x|<1$, tangent of the principal sine angle gives

$$
\arcsin x=\arctan\frac{x}{\sqrt{1-x^2}}.
$$

At $x=\pm1$ the right expression is undefined, so use the endpoint inverse-sine values $\pm\pi/2$ separately. For $t>0$, $\arctan t+\arctan(1/t)=\pi/2$. For $t<0$, oddness gives the sum $-\pi/2$. The positive-input condition cannot be omitted from the first version.

## Distinguish an inverse value from all equation solutions

For $\sin t=c$ with $-1\le c\le1$, let $\alpha=\arcsin c$. The complete real solution families are $t=\alpha+2k\pi$ and $t=\pi-\alpha+2k\pi$. At $c=\pm1$, these two lists describe the same solutions, so remove duplicates when listing roots on a finite interval. For $\cos t=c$, use $t=\pm\arccos c+2k\pi$. For $\tan t=c$, use $t=\arctan c+k\pi$. The principal inverse supplies a reference angle; the original periodic function determines the full set of preimages.

## Worked example: fold an angle into range

Find $\arcsin(\sin(5\pi/6))$ and $\arccos(\cos(7\pi/6))$. The first input angle is outside the inverse-sine output range. Since its sine equals the sine of $\pi-5\pi/6=\pi/6$, the principal result is $\pi/6$, not $5\pi/6$.

For the second expression, subtract $2\pi$ to obtain $r=-5\pi/6$. Cosine is even, and its principal inverse lies in $[0,\pi]$, so the result is $|r|=5\pi/6$. A calculator returns these principal values; solving a trigonometric equation requires adding the other angle branches and periods separately, as in [[Trigonometric equations]].

## Practice

1. Find $\arctan(\tan(4\pi/3))$ and $\arccos(-1/2)$.
2. Calculate $\cos(\arcsin(-3/5))$ and explain why the answer is not negative.

## Worked answers

1. Subtract $\pi$ from $4\pi/3$ to obtain $\pi/3$, inside the principal tangent interval, so the first result is $\pi/3$. The cosine angle in $[0,\pi]$ giving minus one-half is $2\pi/3$.
2. The principal sine angle is in the fourth or first quadrant range $[-\pi/2,\pi/2]$, where cosine is nonnegative. The circle identity gives $\sqrt{1-9/25}=4/5$. The input's negative sine does not make its cosine negative.
