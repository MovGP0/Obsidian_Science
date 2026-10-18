---
title: "Complex series and analytic continuation"
catalogue_ids:
  - "14.3"
  - "14.3.1"
  - "14.3.1.1"
  - "14.3.1.2"
  - "14.3.1.3"
  - "14.3.2"
  - "14.3.3"
---

> [!TLDR]
> A complex power series converges in a disk and represents a holomorphic function there; compatible local functions can extend one another beyond one disk.

## Convergence of a sequence with complex terms

Read [[09.01 Sequences]], [[09.02 Infinite series]], and [[Cauchy theorems and integral formulas]]. A sequence $z_n=x_n+iy_n$ converges to $z=x+iy$ when $|z_n-z|\to0$. This is equivalent to $x_n\to x$ and $y_n\to y$. The inequalities $|x_n-x|,|y_n-y|\le|z_n-z|$ prove one direction. The inequality $|z_n-z|\le|x_n-x|+|y_n-y|$ proves the other.

For example, $(1+i)/n\to0$, but $i^n$ does not converge, because it repeatedly takes the four distinct values $i,-1,-i,1$. Boundedness alone does not imply convergence. A complex **Cauchy sequence** has $|z_m-z_n|$ arbitrarily small for all sufficiently large $m,n$. Completeness of the real numbers, applied to both coordinates, shows that every such complex sequence converges.

## Convergence of an infinite series with complex terms

The series $\sum_{n=0}^{\infty}a_n$ means the limit of the partial sums $S_N=\sum_{n=0}^Na_n$. It converges exactly when its real and imaginary series both converge. **Absolute convergence** means $\sum|a_n|<\infty$ and guarantees convergence. It also permits rearrangement without changing the sum. Terms tending to zero are necessary but not sufficient, as the real harmonic series demonstrates.

For a geometric series,

$$
\sum_{n=0}^N w^n=\frac{1-w^{N+1}}{1-w}
\quad(w\ne1).
$$

When $|w|<1$, the last power tends to zero, so the sum is $1/(1-w)$. If $|w|\ge1$, its terms fail to tend to zero. This finite identity supplies both the complex infinite formula and its domain.

## Complex power series

A power series centered at $a$ has form $\sum c_n(z-a)^n$. It has a **radius of convergence** $R$ such that it converges absolutely for $|z-a|<R$ and diverges for $|z-a|>R$. Each boundary point needs a separate check. If the ratio limit exists with $0<L<\infty$, then

$$
L=\lim_{n\to\infty}\left|\frac{c_{n+1}}{c_n}\right|,
\qquad R=\frac1L.
$$

The general formula is $1/R=\limsup |c_n|^{1/n}$, with $R=\infty$ when this upper limiting value is zero. The symbol $\limsup$ means the limiting upper bound of the tail values; the ratio method is usually simpler in first examples. Inside a strictly smaller closed disk, convergence is uniform: one error bound controls all points of that disk. This justifies differentiation and integration term by term there.

## Taylor series

If $f$ is holomorphic in $|z-a|<R$, then

$$
f(z)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(z-a)^n
\qquad (|z-a|<R).
$$

This is a theorem of complex analysis. Cauchy's formula on a circle of radius $r<R$, together with the geometric expansion of $1/(\zeta-z)$, produces these coefficients. The series converges at least as far as any disk about $a$ on which $f$ is holomorphic. A genuine singularity limits its radius. Unlike a polynomial approximation, the infinite Taylor series equals the function throughout that open disk.

## Worked example: the nearest complex singularities

For $f(z)=1/(1+z^2)$ at zero, use the geometric ratio $w=-z^2$:

$$
f(z)=1-z^2+z^4-z^6+\cdots,\qquad |z|<1.
$$

The radius is $1$, because the denominator has zeros at $i$ and $-i$. On the real line the function is smooth at every real input, but its Taylor series still cannot converge beyond those complex obstacles. At $z=1/2$, the first three terms give $1-1/4+1/16=13/16$. The exact value is $4/5$, so the error is $1/80$. More generally, the omitted geometric tail after the term $(-z^2)^N$ has modulus at most $|z|^{2N+2}/(1-|z|^2)$.

## Principle of analytic continuation

Suppose two holomorphic functions are defined on overlapping domains and agree on an open part of the overlap. They are compatible descriptions of one function on their union, provided they agree on the whole overlap. The identity theorem ensures agreement on each connected overlap component that contains such an open part. Extending by a chain of overlapping disks is **analytic continuation**.

For $1/(1-z)$, the series at zero has radius $1$. At $a=1/2$ write

$$
\frac1{1-z}=\frac2{1-2(z-1/2)}
=2\sum_{n=0}^{\infty}2^n(z-1/2)^n,
\quad |z-1/2|<1/2.
$$

Both series describe the same rational function on their overlap. To reach points beyond the first disk, use centers away from the singularity at $1$, for example $a=-1$, whose disk has radius $2$. Uniqueness does not mean that every attempted extension exists, or that continuation around a hole returns a single branch. A continued logarithm gains $2\pi i$ after one positive circuit of zero. Branch choices are developed in [[Complex branches and elementary functions]].

## Practice

1. Find the sum and convergence domain of $\sum_{n=0}^{\infty}(iz/2)^n$.
2. Expand $1/z$ about $a=2$ and state its radius.

### Worked answers

1. Its ratio is $iz/2$, so it converges for $|z|<2$ to $1/(1-iz/2)$. At every boundary point the terms have modulus one and do not approach zero.
2. Write $1/z=\tfrac12[1+(z-2)/2]^{-1}$. Thus it is $\sum_{n=0}^{\infty}(-1)^n(z-2)^n/2^{n+1}$ for $|z-2|<2$. The missing point zero is at distance two from the center.
