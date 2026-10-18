---
title: "Conformal maps and harmonic functions"
catalogue_ids:
  - "14.1.3"
  - "14.1.3.1"
  - "14.1.3.2"
  - "14.1.3.3"
  - "14.1.3.4"
  - "14.1.3.5"
  - "14.1.3.6"
---

> [!TLDR]
> A holomorphic map with nonzero derivative preserves local angles; its real and imaginary parts are harmonic and can form a complex potential.

## Concept and properties of conformal mapping

Read [[Complex limits and derivatives]]. A **conformal map** preserves angles and their orientation locally. If $f$ is holomorphic near $a$ and $f'(a)\ne0$, its approximation $f(a+h)-f(a)\approx f'(a)h$ is multiplication by a fixed nonzero complex number. Write $f'(a)=re^{i\theta}$. This multiplies all small lengths by $r>0$ and turns all small directions by the same angle $\theta$. Differences of directions, and therefore angles, stay the same.

The condition is local. A map can preserve angles and still send different distant points to one output. For example, $z^2$ has nonzero derivative away from zero but sends $z$ and $-z$ to the same value. A conformal bijection between domains must also be one-to-one and onto those domains. At zero, $z^2$ has derivative zero and doubles the angle between rays, so that point is excluded from the conformal claim.

## Simplest conformal mappings

An affine map $w=az+b$, with $a\ne0$, scales, rotates, and translates. The map $w=1/z$ is conformal for $z\ne0$ and exchanges small and large moduli. A **Möbius map** is

$$
w=\frac{az+b}{cz+d},\qquad ad-bc\ne0.
$$

Its derivative is $(ad-bc)/(cz+d)^2$. It is conformal wherever the denominator is nonzero and maps circles or lines to circles or lines, with a line understood as a circle through the added point at infinity. The map $(z-i)/(z+i)$ sends the upper half-plane to the unit disk: if $z=x+iy$ and $y>0$, then $x^2+(y-1)^2<x^2+(y+1)^2$, hence its modulus is less than one. Real boundary inputs have modulus one.

## Arbitrary mapping of the complex plane

A general real differentiable map $w=u(x,y)+iv(x,y)$ has matrix of partial derivatives

$$
J=\begin{pmatrix}u_x&u_y\\v_x&v_y\end{pmatrix}.
$$

For a holomorphic map, the Cauchy–Riemann equations force $J=\begin{pmatrix}p&-q\\q&p\end{pmatrix}$, which represents multiplication by $p+iq=f'(z)$. A general real matrix may shear, reflect, or stretch different directions by different factors. Thus an arbitrary map of the plane is not automatically conformal. Conjugation preserves angle magnitudes but reverses orientation; it is called **anticonformal** here. The real map $(x,y)\mapsto(x,2y)$ does not even preserve all angle magnitudes.

## Schwarz reflection principle

Suppose $f$ is holomorphic in an upper half-disk, continuous on that half-disk together with its straight real boundary segment, and takes real values on that segment. It extends holomorphically to the reflected lower half-disk by

$$
F(z)=\overline{f(\overline z)}\quad\text{below the real axis},
$$

while $F=f$ above and on the segment. The boundary conditions matter: they join the formulas continuously and allow the extension theorem. For $f(z)=z^2+2$, reflection recovers the same polynomial below. A function with arbitrary nonreal boundary values cannot be extended by this formula without first meeting the required boundary symmetry. This is an extension theorem; its full proof is beyond the elementary derivative test.

## Complex potentials and harmonic components

A twice continuously differentiable real function $u$ is **harmonic** when $u_{xx}+u_{yy}=0$. If $F=u+iv$ is holomorphic, differentiation of the Cauchy–Riemann equations gives $u_{xx}+u_{yy}=v_{yx}-v_{xy}=0$, and likewise for $v$. We call $v$ a **harmonic conjugate** of $u$ and $F$ a **complex potential**. These are mathematical functions; no physical interpretation is required here.

Given harmonic $u$, seek $v$ by $v_y=u_x$, $v_x=-u_y$. The construction works locally; on a simply connected domain it gives a single-valued conjugate. Holes can obstruct a global answer, as $u=\ln|z|$ on the punctured plane shows: its local conjugate is an angle that changes by $2\pi$ around zero.

## Worked example and superposition

Take $u=x^2-y^2+x$. Then $u_{xx}+u_{yy}=2-2=0$. From $v_y=2x+1$, integrate in $y$ to get $v=(2x+1)y+A(x)$. The other equation requires $v_x=2y+A'(x)=2y$, so $A$ is constant. Thus

$$
F(z)=z^2+z+iC
$$

has the required real part. The real functions $x^2-y^2$ and $x$ were combined by addition. This illustrates **superposition**: real linear combinations of harmonic functions are harmonic, and complex linear combinations of holomorphic potentials remain holomorphic. Products of harmonic functions need not be harmonic; for example $x^2$ is the product of two harmonic copies of $x$ but has Laplacian $2$.

![[catalogue-ch14-conformal-grid.svg|**Fig. C.ch14.1** The map z² sends the vertical line x = 1 and horizontal line y = 1 to curves that cross at a right angle at the image of 1 + i.]]

The two tangents at $z=1+i$ initially point in the directions $1$ and $i$. Multiplication by $2+2i$ turns them to $2+2i$ and $-2+2i$, which are perpendicular. The curves bend, but their crossing angle stays fixed.

## Practice

1. Where is $z^3$ conformal, and what is its local length factor at $z=1+i$?
2. Find a harmonic conjugate of $u=3x-2y$ on the whole plane.

### Worked answers

1. Its derivative is $3z^2$, which is nonzero for $z\ne0$. At $1+i$ its modulus is $3|1+i|^2=6$. Global injectivity is not implied.
2. The equations give $v_y=3$ and $v_x=2$, so $v=2x+3y+C$. The complex potential is $(3+2i)z+iC$. Direct expansion confirms both components.

## Further reference

[Peter Topping's University of Warwick complex-analysis notes](https://warwick.ac.uk/fac/sci/maths/people/staff/peter_topping/teaching/ma3b8_cplxanal_24_07_29.pdf) state the Schwarz reflection theorem with its domain and boundary conditions.
