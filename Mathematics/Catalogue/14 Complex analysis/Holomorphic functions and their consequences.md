---
title: "Holomorphic functions and their consequences"
catalogue_ids:
  - "14.1.2"
  - "14.1.2.1"
  - "14.1.2.2"
  - "14.1.2.3"
  - "14.1.2.4"
---

> [!TLDR]
> A function that is complex differentiable throughout an open set has a local power series and strong uniqueness properties; its domain and singular points remain essential.

## Definition of an analytic function

Start with [[Complex limits and derivatives]]. A function is **holomorphic on an open set** if it has a complex derivative at every point of that set. It is **analytic at $a$** if, in some disk about $a$, it equals a convergent power series $\sum_{n=0}^{\infty}c_n(z-a)^n$. In one complex variable these two conditions are equivalent locally. This is a major theorem, rather than part of the elementary derivative definition.

In this chapter, “analytic on a domain” means holomorphic there. **Entire** means holomorphic on all of $\mathbb C$. The real function that equals $e^{-1/x^2}$ for $x\ne0$ and zero at zero is smooth but fails to equal its Taylor series there. Complex holomorphic functions do not have that freedom. [[Complex series and analytic continuation]] explains their series in detail.

## Examples of analytic functions

Polynomials are entire. The usual product, quotient, and chain rules follow from difference quotients, as in real calculus. A rational function $P(z)/Q(z)$ is holomorphic wherever $Q\ne0$. A common factor may permit an extension at a canceled zero, but cancellation must not silently change the original domain.

Define $e^z=\sum_{n=0}^{\infty}z^n/n!$. Its series converges everywhere, and termwise differentiation gives $(e^z)'=e^z$. Define

$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},\qquad
\cos z=\frac{e^{iz}+e^{-iz}}2.
$$

Both functions are entire. Their quotient $\tan z$ is holomorphic except where $\cos z=0$. The principal logarithm is holomorphic on the plane with the nonpositive real axis removed, with derivative $1/z$. It is not a holomorphic logarithm on the whole punctured plane. See [[Complex branches and elementary functions]] for the obstruction.

## Properties of analytic functions

The following theorems have stronger conclusions than ordinary real differentiability. A full proof uses Cauchy's integral formula, introduced in [[Cauchy theorems and integral formulas]].

- Every holomorphic function has derivatives of all orders, and each derivative is holomorphic.
- On a connected domain, two holomorphic functions that agree on a set with an accumulation point inside the domain agree everywhere there. This is the **identity theorem**. An accumulation point is approached by infinitely many distinct points of that set.
- A nonconstant holomorphic function cannot attain a local maximum of its modulus at an interior point. On a closed bounded region where it is holomorphic inside and continuous up to the boundary, its largest modulus is on the boundary.
- A bounded entire function is constant. This is **Liouville's theorem**. “Bounded” requires one finite bound on the whole complex plane.

For an accessible consequence, consider zeros. At a zero $a$, a nonzero local power series has a first nonzero coefficient, say $c_m$. Factor

$$
f(z)=(z-a)^m g(z),\qquad g(a)=c_m\ne0.
$$

Continuity makes $g$ nonzero in a small disk. Thus $a$ is isolated from all other zeros, unless the function vanishes identically on its connected domain. The integer $m$ is the **multiplicity** or order of the zero. For $(z-2)^3(z+1)$, the zero $2$ has multiplicity three.

## Singular points

A **singular point** is a point where a function does not have the holomorphic behavior required for the proposed domain. It need not be a place where values become infinite. An **isolated singularity** at $a$ means the function is holomorphic throughout some punctured disk $0<|z-a|<r$. Later we distinguish removable singularities, poles, and essential singularities.

For $(e^z-1)/z$, the missing point zero is removable because its limit is one. For $1/z$, zero is a pole. For $e^{1/z}$, zero is essential. A branch point such as zero for a square root is different: no single-valued square-root branch exists on a whole punctured disk. It cannot be treated as an isolated singularity of such a branch there.

## Worked example: a boundary maximum

For $f(z)=z^2+1$ on $|z|\le2$, the triangle inequality gives $|f(z)|\le|z|^2+1\le5$. At $z=2$ and $z=-2$, the value is exactly $5$. Thus the maximum modulus is $5$ and is attained on the boundary, as the theorem predicts. An interior value such as $f(0)=1$ cannot be a local maximum of the modulus of this nonconstant polynomial. The estimate also supplies the answer without optimizing two real variables.

## Practice

1. If an entire function satisfies $|f(z)|\le7$ everywhere, what follows? Does $|\sin x|\le1$ for real $x$ make complex sine an example?
2. A holomorphic function on $|z|<2$ vanishes at $1/n$ for every positive integer $n$. What is it?

### Worked answers

1. Liouville's theorem makes $f$ constant. Complex sine is not bounded on the whole plane: $\sin(iy)=i\sinh y$, whose modulus grows without bound. A bound on the real axis does not meet the hypothesis.
2. The zero points are distinct and accumulate at zero, which is inside the connected disk. The identity theorem, applied against the zero function, gives $f=0$ on the entire disk.
