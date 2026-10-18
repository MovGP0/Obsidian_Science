---
title: "Scalar and directed line integrals"
catalogue_ids:
  - "8.3.1"
  - "8.3.1.1"
  - "8.3.1.2"
  - "8.3.1.3"
  - "8.3.1.4"
  - "8.3.2"
  - "8.3.2.1"
  - "8.3.2.2"
  - "8.3.2.3"
  - "8.3.3"
  - "8.3.3.1"
  - "8.3.3.2"
  - "8.3.3.3"
---

> [!TLDR]
> A scalar line integral weights arc length; a directed line integral weights coordinate displacements and changes sign when the path reverses.

## Describe a curve

Read [[Definite integrals and accumulation]], [[05.03 Components and bases]], and [[05.05 Dot products]]. A parameterized curve is a function $\mathbf r(t)=(x(t),y(t),z(t))$ on $a\le t\le b$. In the plane omit $z$. The same parameter selects every coordinate. Increasing $t$ specifies direction. We assume finitely many continuously differentiable pieces, with nonzero derivative in each piece's interior. Corners are allowed by splitting the pieces.

The derivative $\mathbf r'(t)$ points along the curve. Its length is $\|\mathbf r'(t)\|=\sqrt{x'(t)^2+y'(t)^2+z'(t)^2}$. Small segments have length approximately $\|\mathbf r'(t)\|\Delta t$. This gives $ds=\|\mathbf r'(t)\|\,dt$ for increasing $t$. The element $ds$ is nonnegative. In contrast, $dx=x'(t)\,dt$ can have either sign.

## First kind: scalar length weighting

For a scalar function $f$ on the curve, define

$$
\int_C f\,ds=\int_a^b f(\mathbf r(t))\|\mathbf r'(t)\|\,dt.
$$

This is a **line integral of the first kind**. Continuity of $f$ on the compact traced curve and piecewise continuous differentiability of the parameterization are sufficient for existence. More generally the displayed parameter integrand must be integrable; mere continuity at isolated points is not enough to handle an unbounded singularity.

Setting $f=1$ gives length. Dividing $\int_C f\,ds$ by that length gives a length-weighted average. Coordinates may be averaged too, to find a curve's geometric center. These applications require no vector field or orientation.

For the segment $\mathbf r(t)=(t,2t)$, $0\le t\le1$, and $f(x,y)=x+y$, the speed is $\sqrt5$ and $f(\mathbf r(t))=3t$. Therefore $\int_C f\,ds=\sqrt5\int_0^1 3t\,dt=3\sqrt5/2$. Its average is $3/2$ because the length is $\sqrt5$. Reversing the tracing leaves the scalar integral unchanged.

## Second kind: a coordinate displacement

A coordinate-directed integral such as $\int_C P\,dx$ is defined by

$$
\int_C P\,dx=\int_a^b P(\mathbf r(t))x'(t)\,dt.
$$

This is the catalogue's **second-kind** building block: a function is weighted by signed projection onto a coordinate axis. The same definition applies to $Q\,dy$ or $R\,dz$. Continuous coefficients and a piecewise continuously differentiable curve again ensure existence. A curve does not have to be the graph of a single function $y(x)$; parameterization handles vertical sections and reversals without dividing by $x'$.

For the same segment with $P=y$, $\int_C y\,dx=\int_0^1 2t\,dt=1$. It differs from $\int_C y\,ds=\sqrt5$. The first uses horizontal displacement, and the second uses full length. Reversing direction changes the first sign but leaves the second value unchanged.

## General type: add the coordinate contributions

The catalogue's **line integral of general type** is

$$
\int_C(P\,dx+Q\,dy+R\,dz)
=\int_a^b\left(Px'+Qy'+Rz'\right)dt,
$$

with each coefficient evaluated on $\mathbf r(t)$. In modern vector notation it is $\int_C\mathbf F\cdot d\mathbf r$, where $\mathbf F=(P,Q,R)$. Many modern courses call this whole expression a second-kind integral. The distinction here preserves the component-then-sum organization in [Handbook of Mathematics, §§8.3.2–8.3.3](https://www.alnasiry.net/Book-Exa/Handbook%20of%20Mathematics.pdf). The standard parameter formulas are developed in [MIT's multivariable calculus notes](https://math.mit.edu/~poonen/notes02.pdf).

A smooth increasing change of parameter leaves both kinds unchanged. A decreasing change leaves the scalar integral unchanged and reverses the general directed integral. Tracing the same curve twice counts twice. Linearity in the coefficients and additivity along joined oriented paths follow from the corresponding one-variable properties.

![[catalogue-ch08-line-orientation.svg|**Fig. C.08.2** Arc length is unchanged by reversal, while both coordinate displacements reverse.]]

In Fig. C.08.2, a small vector displacement and its reverse have equal length but opposite direction. This is the local reason for the different orientation rules.

## Closed paths and a complete calculation

The symbol $\oint_C$ indicates that the final point equals the initial point. It does not imply that a directed integral is zero. Take the unit circle $\mathbf r(t)=(\cos t,\sin t)$, $0\le t\le2\pi$, counterclockwise, with $P=-y/2$ and $Q=x/2$. Then

$$
P x'+Q y'=\frac{\sin^2t+\cos^2t}{2}=\frac12,
\qquad \oint_C(P\,dx+Q\,dy)=\pi.
$$

Clockwise orientation gives $-\pi$. Meanwhile the scalar integral $\oint_C1\,ds$ is $2\pi$ in either direction. Closedness and path independence are different concepts; see [[Potentials and path independence]].

## Practice

1. For $\mathbf r(t)=(t,t^2)$, $0\le t\le1$, compute $\int_C x\,dy$.
2. On the upper unit semicircle, compute $\int_C y\,ds$ with either orientation.

## Worked answers

1. Since $x=t$ and $dy=2t\,dt$, the answer is $\int_0^1 2t^2\,dt=2/3$. Using $dy=dt$ would discard the curve's actual vertical change.
2. Use $\mathbf r(t)=(\cos t,\sin t)$ for $0\le t\le\pi$. Its speed is $1$, so the integral is $\int_0^\pi\sin t\,dt=2$. Reversing the path preserves this value because $ds$ measures positive length.
