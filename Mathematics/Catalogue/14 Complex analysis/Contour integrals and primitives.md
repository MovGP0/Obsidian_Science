---
title: "Contour integrals and primitives"
catalogue_ids:
  - "14.2"
  - "14.2.1"
  - "14.2.1.1"
  - "14.2.1.2"
---

> [!TLDR]
> Integrate a complex function along a curve by substituting a real parameter; a primitive converts the result to endpoint values when it exists on the whole domain.

## Definition of the complex integral

Read [[08.01 Definite integrals]], [[08.04 Substitution]], and [[06.05 Euler’s formula]]. A **contour** is a directed curve $\gamma:[a,b]\to\mathbb C$ that is continuously differentiable on finitely many pieces. Write $\gamma(t)=x(t)+iy(t)$. It starts at $\gamma(a)$ and ends at $\gamma(b)$. A closed contour has equal endpoints; a simple closed contour has no other repeated points.

For a continuous function $f$ on the curve, define

$$
\int_\gamma f(z)\,dz
=\int_a^b f(\gamma(t))\gamma'(t)\,dt.
$$

The integral on the right means integrate its real and imaginary parts separately. The factor $\gamma'(t)$ carries the direction and the speed of travel. Omitting it is a common error. The notation $\oint$ emphasizes that a contour is closed. It does not by itself say that its integral is zero.

If $f=u+iv$, multiply $(u+iv)(dx+i\,dy)$ to get

$$
\int_\gamma f\,dz
=\int_\gamma (u\,dx-v\,dy)
+i\int_\gamma(v\,dx+u\,dy).
$$

This connects complex integration with real line integrals. A complex integral is generally a complex number, not the area of a drawn region. Even if the curve encloses an area, the integral also depends on the function and orientation.

## Properties and calculation

The integral is linear in $f$. Traversing two curves in succession adds their integrals. Reversing a curve changes the sign. A piecewise smooth change of parameter that keeps direction leaves the integral unchanged; traversing a closed curve twice doubles its integral. If $|f|\le M$ on a curve of length $L$, then

$$
\left|\int_\gamma f(z)\,dz\right|\le ML.
$$

This estimate follows by applying the triangle inequality to the parameter integral and using $L=\int_a^b|\gamma'(t)|dt$. It is often more useful than an exact antiderivative, especially for proving that an added circular arc makes a contribution that tends to zero.

## Worked example: a straight segment

Integrate $f(z)=z$ from $0$ to $1+i$ along the straight segment. Set $z(t)=(1+i)t$ for $0\le t\le1$, so $dz=(1+i)dt$. Then

$$
\int_\gamma z\,dz
=\int_0^1(1+i)^2t\,dt
=\int_0^1 2it\,dt=i.
$$

As a check, $F(z)=z^2/2$ has derivative $z$, and $F(1+i)-F(0)=i$. The method must state both the path and the parameter interval. The same endpoints alone do not determine a complex integral for every possible integrand.

## Definite and indefinite integral

A **primitive**, or complex antiderivative, of $f$ on a domain $D$ is a holomorphic function $F$ on $D$ with $F'=f$. The chain rule along each smooth piece gives

$$
\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a)).
$$

Thus a primitive makes the definite integral depend only on endpoints. All primitives on a connected domain differ by a complex constant. The indefinite-integral notation $\int f(z)\,dz=F(z)+C$ refers to this family. A derivative formula valid only near a point does not ensure that a single primitive exists throughout a larger domain.

Conversely, if a continuous $f$ has path-independent integrals on a domain, define $F(z)$ by integrating from a fixed base point to $z$. A short final line segment shows $F'(z)=f(z)$. Path independence is equivalent to vanishing integrals around all closed piecewise smooth curves in the domain. The domain condition cannot be replaced by “the integrand looks differentiable.”

## A circle detects the missing point

For $\gamma(t)=e^{it}$ with $0\le t\le2\pi$,

$$
\oint_{|z|=1}\frac{dz}{z}
=\int_0^{2\pi}\frac{ie^{it}}{e^{it}}dt=2\pi i.
$$

The function $1/z$ has no primitive on the whole punctured plane, despite being holomorphic there. Otherwise this closed integral would be zero. A branch of $\log z$ does give a primitive on a cut domain that excludes a ray from zero; the circle is not entirely inside that cut domain.

## Practice

1. Calculate $\int_\gamma \overline z\,dz$ on the counterclockwise circle $z=2e^{it}$, $0\le t\le2\pi$. What happens for clockwise traversal?
2. Bound the modulus of the integral of $e^z$ on the segment from $0$ to $1+i$ without calculating it exactly.

### Worked answers

1. The product is $(2e^{-it})(2ie^{it})dt=4i\,dt$. The result is $8\pi i$. Clockwise traversal reverses its sign to $-8\pi i$. The nonzero value is consistent with conjugation not being holomorphic.
2. On $z=(1+i)t$, $|e^z|=e^t\le e$, and the segment length is $\sqrt2$. Hence the estimate is $e\sqrt2$. A bound need not equal the exact modulus.
