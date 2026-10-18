---
title: "Cauchy theorems and integral formulas"
catalogue_ids:
  - "14.2.2"
  - "14.2.2.1"
  - "14.2.2.2"
  - "14.2.3"
  - "14.2.3.1"
  - "14.2.3.2"
---

> [!TLDR]
> Cauchy's theorem controls closed integrals in a holomorphic region; Cauchy's formulas recover interior values and derivatives from boundary data.

## Cauchy's theorem for simply connected domains

Read [[Contour integrals and primitives]]. A **simply connected domain** is an open connected region in which every closed curve can be continuously contracted to a point while staying in the region. A disk is simply connected; an annulus $1<|z|<3$ is not, because a curve surrounding the hole cannot contract there.

**Cauchy's integral theorem** states that if $f$ is holomorphic on a simply connected domain $D$, then $\oint_\gamma f(z)dz=0$ for every closed piecewise smooth contour in $D$. It follows that $f$ has a primitive on $D$. The full theorem does not require an extra assumption that $f'$ is continuous. An elementary proof under stronger smoothness assumptions uses the real Green theorem and the Cauchy–Riemann equations; the general proof needs more analysis.

This is a complex integration theorem, not the fundamental theorem of algebra. The fundamental theorem for line integrals is the endpoint rule for a known primitive. Cauchy's theorem supplies conditions that ensure a primitive exists.

## Cauchy's theorem for multiply connected domains

Suppose a bounded region has one outer simple boundary and finitely many disjoint inner boundaries. If $f$ is holomorphic on an open neighborhood of the entire closed region, including each boundary, then its integral over the **positively oriented total boundary** is zero. Positive orientation keeps the region on the left: the outer boundary is counterclockwise and each hole boundary is clockwise. Consequently,

$$
\oint_{C_{\mathrm{outer}}}^{\mathrm{CCW}} f\,dz
=\sum_j\oint_{C_j}^{\mathrm{CCW}}f\,dz.
$$

There need not be a zero integral along a single boundary component. For $f=1/z$ on a neighborhood of the closed annulus $1\le|z|\le2$, the outer counterclockwise integral and the inner counterclockwise integral both equal $2\pi i$. Reversing the inner orientation cancels them in the total boundary.

![[catalogue-ch14-annulus-orientation.svg|**Fig. C.ch14.2** A positively oriented annulus has a counterclockwise outer boundary and a clockwise inner boundary, so the region remains on the left.]]

This figure explains why treating both boundary curves as counterclockwise in a total-boundary formula gives a wrong sign.

## Analytic function inside a domain

Let $C$ be a positively oriented simple closed piecewise smooth curve, and suppose $f$ is holomorphic on an open neighborhood of $C$ and its entire interior. For $a$ strictly inside,

$$
f(a)=\frac1{2\pi i}\oint_C\frac{f(z)}{z-a}\,dz,
\qquad
f^{(n)}(a)=\frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z-a)^{n+1}}\,dz.
$$

For the first formula, write $f(z)=f(a)+(f(z)-f(a))$. The quotient $(f(z)-f(a))/(z-a)$ has a removable singularity at $a$, so its integral vanishes. The remaining part is $f(a)\oint dz/(z-a)=2\pi i f(a)$. This argument uses the removable-singularity theorem for the quotient; a complete proof of the theorem and all derivative formulas belongs to a longer course. The formulas explain why one complex derivative forces derivatives of all orders.

## Worked example: a second derivative

Take $C:|z|=2$ counterclockwise. Evaluate

$$
I=\oint_C\frac{e^z}{(z-1)^3}\,dz.
$$

The point $1$ is inside $C$, and $e^z$ is holomorphic on the whole disk. The denominator power $3$ corresponds to $n=2$, so $I=(2\pi i/2!)e^1=\pi i e$. If the same contour is traversed clockwise, the answer changes sign. If a problem adds a second singularity inside, it cannot be hidden in the supposedly holomorphic numerator.

## Analytic function outside a domain

There is also an exterior formula with a sign change and a condition at infinity. Let $C$ be counterclockwise and let $f$ be holomorphic on a neighborhood of $C$ and throughout its unbounded exterior. Suppose $f(z)\to L$ as $|z|\to\infty$. For $a$ strictly outside $C$,

$$
f(a)=L-\frac1{2\pi i}\oint_C\frac{f(z)}{z-a}\,dz.
$$

Apply the interior formula to the region between $C$ and a large outer circle, with a small puncture at $a$. The inner boundary orientation supplies the minus sign. On the large circle, the integral tends to $2\pi iL$: the part involving $f-L$ is bounded by a constant times its maximum modulus there, which tends to zero. This also shows why the condition at infinity is needed.

For $C:|z|=1$, $f(z)=1/z$, and $|a|>1$, take $L=0$. The boundary integrand $1/[z(z-a)]$ has integral $-2\pi i/a$, so the exterior formula gives $1/a$. Applying the interior formula to $f$ in that disk would be invalid because $f$ has a singularity at zero.

## Practice

1. Evaluate $\oint_{|z|=3} (z^2+1)/(z-2)^2\,dz$ counterclockwise.
2. On $1\le|z|\le4$, calculate the total positively oriented boundary integral of $1/z$.

### Worked answers

1. Use $n=1$ and $f(z)=z^2+1$. Since $f'(2)=4$, the integral is $2\pi i(4)=8\pi i$.
2. The outer counterclockwise circle contributes $2\pi i$. The inner clockwise circle contributes $-2\pi i$. Their sum is zero, as required for a function holomorphic on a neighborhood of this closed annulus.
