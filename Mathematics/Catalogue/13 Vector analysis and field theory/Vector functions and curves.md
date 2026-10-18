---
title: "Vector functions and curves"
catalogue_ids:
  - "13.1.1"
  - "13.1.1.1"
  - "13.1.1.2"
  - "13.1.1.3"
  - "13.1.1.4"
---

> [!TLDR]
> A vector function assigns a vector to each parameter value; differentiation and Taylor approximation act on its components.

## Start with a parameter

Read [[05.03 Components and bases]], [[07.03 The derivative]], and [[07.04 Differentiation rules]] first. This lesson uses a real parameter $t$; it need not represent time. A vector function is a rule $\mathbf r:I\to\mathbb R^3$, where $I$ is an interval of allowed inputs. In a fixed Cartesian basis,

$$
\mathbf r(t)=x(t)\mathbf e_x+y(t)\mathbf e_y+z(t)\mathbf e_z.
$$

For example, $(\cos t,\sin t,t)$ describes a helix. Its first two components run around the unit circle; its third component increases. A function and its traced curve are different objects. The functions $(\cos t,\sin t,0)$ and $(\cos 2t,\sin 2t,0)$ trace the same circle with different parameter speeds. Limits and continuity of a vector function mean limits and continuity of all its Cartesian components. The norm $\|\mathbf r\|$ is its Euclidean length.

## Derivative of a vector function

The derivative is the limit

$$
\mathbf r'(t)=\lim_{h\to0}\frac{\mathbf r(t+h)-\mathbf r(t)}h
=(x'(t),y'(t),z'(t)).
$$

The difference vector points along a chord of the curve. At a regular point, where $\mathbf r'(t)\ne0$, its limiting direction gives a tangent. The unit tangent is $\mathbf T=\mathbf r'/\|\mathbf r'\|$. The speed $\|\mathbf r'\|$ measures distance along the curve per unit change of parameter. Reparameterizing by $t=t(s)$ gives $d\mathbf r/ds=\mathbf r'(t(s))t'(s)$ by the componentwise chain rule. A negative $t'(s)$ reverses the tangent direction.

If $\mathbf r'(t)=0$, the formula for $\mathbf T$ fails. This does not alone prove that the traced set has no tangent. For example, $(t^3,0,0)$ has zero derivative at $t=0$ but its image lies on a straight line. One must inspect the curve or choose a regular parameter.

## Differentiation rules for vectors

For differentiable vectors $\mathbf a,\mathbf b$ and a differentiable scalar $f$, linearity gives $(\mathbf a+\mathbf b)'=\mathbf a'+\mathbf b'$ and $(f\mathbf a)'=f'\mathbf a+f\mathbf a'$. Products obey

$$
\frac{d}{dt}(\mathbf a\cdot\mathbf b)
=\mathbf a'\cdot\mathbf b+\mathbf a\cdot\mathbf b',
\qquad
\frac{d}{dt}(\mathbf a\times\mathbf b)
=\mathbf a'\times\mathbf b+\mathbf a\times\mathbf b'.
$$

The order in the cross products must remain as written. Reversing it changes a sign. These rules follow by applying the ordinary product rule to each Cartesian component. In particular, $(\|\mathbf a\|^2)'=2\mathbf a\cdot\mathbf a'$. If $\mathbf a$ has constant length, its derivative is perpendicular to it. This explains why the tangent to a circle is perpendicular to its radius.

A derivative changes with the parameter convention, even when the drawn curve stays the same. For a circle traced twice as fast, the tangent vector doubles while its normalized direction remains unchanged. The assumption of a fixed basis matters. If $\mathbf a(t)=a_1(t)\mathbf e_1(t)+a_2(t)\mathbf e_2(t)$ uses rotating unit vectors, derivatives also act on those unit vectors. Differentiating only the written coefficients would omit part of the vector change. See [[Scalar and vector fields]] for a concrete rotating basis.

## Taylor expansion for vector functions

If every component has continuous derivatives through order $n+1$ near $t_0$, ordinary Taylor's theorem gives

$$
\mathbf r(t_0+h)=\sum_{k=0}^{n}\frac{h^k}{k!}\mathbf r^{(k)}(t_0)
+O(|h|^{n+1}).
$$

The remainder notation means that its norm is bounded by $C|h|^{n+1}$ for sufficiently small $h$ and some fixed $C$. A finite Taylor approximation does not require an infinite power series to converge. It is a local estimate. With only two derivatives, the second-order remainder is generally $o(h^2)$, not automatically $O(h^3)$.

## Worked example: approximate a helix

For $\mathbf r(t)=(\cos t,\sin t,t)$, differentiation gives

$$
\mathbf r'(t)=(-\sin t,\cos t,1),\qquad
\mathbf r''(t)=(-\cos t,-\sin t,0).
$$

At zero these are $(0,1,1)$ and $(-1,0,0)$. Thus the quadratic approximation is $(1-h^2/2,h,h)$. At $h=0.1$, it gives $(0.995,0.1,0.1)$. Direct values are approximately $(0.99500417,0.09983342,0.1)$. The leading error in the second component is $-h^3/6$; its size agrees with the third-order remainder bound. The speed is $\sqrt{\sin^2t+\cos^2t+1}=\sqrt2$. A unit tangent is therefore $(-\sin t,\cos t,1)/\sqrt2$.

## Practice

1. Find the derivative and tangent direction of $\mathbf a(t)=(t^2,2t,1)$ at $t=1$. Verify that the direction has unit length after normalization.
2. Find the second-order Taylor approximation of $\mathbf b(t)=(e^t,\cos t)$ at zero. Use it to approximate $\mathbf b(-0.1)$.

## Worked answers

1. The derivative is $(2t,2,0)$, so at one it is $(2,2,0)$. Its length is $2\sqrt2$. The unit tangent is $(1/\sqrt2,1/\sqrt2,0)$; the sum of its squared components is $1$.
2. Values at zero are $\mathbf b=(1,1)$, $\mathbf b'=(1,0)$, and $\mathbf b''=(1,-1)$. Hence $\mathbf b(h)\approx(1+h+h^2/2,1-h^2/2)$ and $\mathbf b(-0.1)\approx(0.905,0.995)$.
