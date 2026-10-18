---
title: "Partial changes and total differentials"
catalogue_ids:
  - "6.2"
  - "6.2.1"
  - "6.2.1.1"
  - "6.2.1.2"
  - "6.2.1.3"
  - "6.2.1.4"
  - "6.2.1.5"
  - "6.2.2.1"
---

> [!TLDR]
> Partial derivatives measure changes along coordinate directions; the total differential combines them into one local linear rule.

## Several inputs and one output

A function $f(x,y)$ takes an ordered pair of inputs and returns one real number. Think of $x$ and $y$ as independent coordinates. They need not represent physical quantities. For example, $f(x,y)=x^2+xy$ gives $6$ at $(2,1)$ and $3$ at $(1,2)$; order matters. Read [[03.01 Function definitions]] and [[Tangents and the derivative]] first. [[12.01 Functions of several variables]] supplies more domain examples.

We work at an interior point $(a,b)$ of an open domain, so sufficiently small changes in either coordinate are allowed. Boundary derivatives require their own one-sided or relative-domain definitions.

## Change one input at a time

The partial derivative with respect to $x$ is

$$
f_x(a,b)=\frac{\partial f}{\partial x}(a,b)
=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}h.
$$

Keep $y=b$ fixed while taking this ordinary derivative. Similarly,

$$
f_y(a,b)=\lim_{k\to0}\frac{f(a,b+k)-f(a,b)}k.
$$

For $f=x^2+xy$, treating $y$ as constant gives $f_x=2x+y$; treating $x$ as constant gives $f_y=x$. At $(2,1)$ these are $5$ and $2$. Neither number describes every possible direction by itself.

## Slices through a surface

The graph of $f$ is a surface $z=f(x,y)$. Intersect it with the vertical plane $y=b$. The curve in that slice has tangent slope $f_x(a,b)$ in the $x$ direction. The slice $x=a$ instead gives slope $f_y(a,b)$ in the $y$ direction. The two partial derivatives describe two different curve tangents through the same surface point. Holding the other coordinate fixed is part of the definition.

## A differential is a linear rule

The desired approximation for simultaneous changes $(h,k)$ is

$$
f(a+h,b+k)=f(a,b)+Ah+Bk+r(h,k),
$$

where $r(h,k)/\sqrt{h^2+k^2}\to0$ as $(h,k)\to(0,0)$ through every direction and path. If such a linear rule exists, the function is totally differentiable. Setting $k=0$ and then $h=0$ proves that $A=f_x(a,b)$ and $B=f_y(a,b)$. The coefficients are forced by the partial derivatives.

Existence of both partial derivatives at one point is not enough to prove this approximation. A sufficient condition is that the first partial derivatives exist and are continuous in a neighborhood. See [[12.02 Partial derivatives]] for a counterexample and [[12.03 Total derivatives]] for the general definition.

## Partial differentials

Set $\mathrm dx=h$ and $\mathrm dy=k$. The partial differential in the $x$ direction is $\mathrm d_xf=f_x\,\mathrm dx$; in the $y$ direction it is $\mathrm d_yf=f_y\,\mathrm dy$. Each is the linear contribution of one coordinate. It is not the exact finite change caused by changing that coordinate. The finite-change error can contain higher powers and mixed terms.

## The total differential

At a totally differentiable point, the total differential is the sum

$$
\mathrm df=f_x\,\mathrm dx+f_y\,\mathrm dy.
$$

For $n$ inputs it is $\mathrm df=\sum_{i=1}^n f_{x_i}\,\mathrm dx_i$. The symbols $\mathrm dx_i$ specify components of an input displacement. They are not newly introduced independent outputs. The exact change is $\Delta f=\mathrm df+r$, so use an approximation symbol for a finite numerical estimate.

![[catalogue-ch06-differential-components.svg|**Fig. C.ch06.2** At (2, 1), the differential of f(x, y) = x² + xy adds the contributions 5h and 2k from an input displacement (h, k).]]

The diagram separates the input plane from the scalar output rule. Any input vector can be decomposed into an $x$ step and a $y$ step. The differential sends the sum to the sum of two output contributions. The nonlinear function itself need not preserve sums.

## Properties of a differential

At a fixed base point, $\mathrm df$ is linear in the displacement: scaling a displacement scales its predicted change, and adding displacements adds predictions. For differentiable functions and constants $\alpha,\beta$, the function rules are

$$
\mathrm d(\alpha f+\beta g)=\alpha\,\mathrm df+\beta\,\mathrm dg,
\qquad \mathrm d(fg)=g\,\mathrm df+f\,\mathrm dg.
$$

If $g\ne0$, then $\mathrm d(f/g)=(g\,\mathrm df-f\,\mathrm dg)/g^2$. All coefficients use values at the same base point. Linearity in displacement does not mean $f$ itself is globally linear.

## Worked example with an exact remainder

For $f=x^2+xy$ at $(2,1)$, direct expansion gives

$$
f(2+h,1+k)=6+5h+2k+h^2+hk.
$$

The differential is $5h+2k$. The remainder $h^2+hk$ is bounded in absolute value by a constant times $h^2+k^2$, so its ratio to $\sqrt{h^2+k^2}$ tends to zero. This proves total differentiability without relying only on a theorem. At $(h,k)=(0.02,-0.01)$, the predicted change is $0.08$ and the exact change is $0.0802$.

## Practice

1. Find $\mathrm df$ for $f(x,y)=x^2y$ at $(1,3)$ and estimate $f(1.01,2.98)$.
2. For $f(x,y,z)=xy+z^2$, find the partial and total differential contributions at $(2,1,3)$ for displacement $(0.1,-0.2,0.01)$.

## Worked answers

1. The partial derivatives are $2xy$ and $x^2$, giving $\mathrm df=6h+k$. Since $f(1,3)=3$, the estimate is $3+6(0.01)-0.02=3.04$. Direct multiplication gives $1.01^2(2.98)=3.039898$, showing the small omitted remainder.
2. The partial derivatives are $y,x,2z$, giving contributions $0.1,-0.4,0.06$. Their sum is $\mathrm df=-0.24$. The exact change is $-0.2599$, because the omitted terms are $hk+\ell^2=-0.02+0.0001$. The linear contributions are exact evaluations of the differential; only their use as an actual function change is approximate.
