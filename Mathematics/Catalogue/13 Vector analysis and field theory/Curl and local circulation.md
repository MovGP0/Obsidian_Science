---
title: "Curl and local circulation"
catalogue_ids:
  - "13.2.5"
  - "13.2.5.1"
  - "13.2.5.2"
  - "13.2.5.3"
  - "13.2.5.4"
---

> [!TLDR]
> Curl measures oriented circulation per unit area; a potential field has zero curl where its second derivatives are continuous.

## Definition and orientation

Read [[Vector functions and curves]], [[Directional derivatives and gradients]], and [[Cross product]]. We work in right-handed Cartesian coordinates, where $\mathbf e_x\times\mathbf e_y=\mathbf e_z$. For a $C^1$ field $\mathbf F=(P,Q,R)$ define

$$
\nabla\times\mathbf F=(R_y-Q_z,\ P_z-R_x,\ Q_x-P_y).
$$

A field with zero curl throughout its domain is called irrotational. It can still vary in magnitude and direction from point to point. Curl is a vector. Its component along a unit normal $\mathbf n$ measures circulation per unit area in the plane perpendicular to $\mathbf n$. Orient the boundary by the right-hand rule: with the right thumb along $\mathbf n$, curled fingers give the positive path direction. For $\mathbf n=\mathbf e_z$, that direction is counterclockwise viewed from positive $z$.

Around a small rectangle in the $xy$-plane, horizontal-edge contributions differ by approximately $-P_y\,dx\,dy$, while vertical-edge contributions differ by $Q_x\,dx\,dy$. Divide their sum by area to get $Q_x-P_y$. The other two components follow by cyclic exchange of coordinates. This argument also explains why reversing boundary orientation reverses the measured circulation.

For $\mathbf F=(-y,x,0)$, curl is $(0,0,2)$. On a circle of radius $a$, the field magnitude is $a$ and it points along the positive tangent. Circulation is $a(2\pi a)=2\pi a^2$, twice the disk area. The factor two is therefore meaningful: curl is not just the angular parameter rate of the circles.

## Calculation rules

Curl is linear. For a scalar $f$ and a vector field $\mathbf F$, the product rule is

$$
\nabla\times(f\mathbf F)=\nabla f\times\mathbf F+f(\nabla\times\mathbf F).
$$

For $C^1$ fields $\mathbf F,\mathbf G$, another useful identity is

$$
\nabla\times(\mathbf F\times\mathbf G)
=\mathbf F(\nabla\cdot\mathbf G)-\mathbf G(\nabla\cdot\mathbf F)
+(\mathbf G\cdot\nabla)\mathbf F-(\mathbf F\cdot\nabla)\mathbf G.
$$

Here $(\mathbf G\cdot\nabla)\mathbf F$ means $G_x\partial_x\mathbf F+G_y\partial_y\mathbf F+G_z\partial_z\mathbf F$. The operator differentiates what follows it. These expressions are verified by component product rules; treating nabla as an ordinary constant vector would lose derivative terms.

## Curl in cylindrical and spherical coordinates

Use cylindrical $(\rho,\phi,z)$ and unit-vector components. For $\rho>0$,

$$
\nabla\times\mathbf F=
\left(\frac1\rho\partial_\phi F_z-\partial_zF_\phi\right)\mathbf e_\rho
+\left(\partial_zF_\rho-\partial_\rho F_z\right)\mathbf e_\phi
+\frac{\partial_\rho(\rho F_\phi)-\partial_\phi F_\rho}{\rho}\mathbf e_z.
$$

In spherical $(r,\theta,\phi)$, $\theta$ is polar angle from positive $z$. For $r>0$ and $0<\theta<\pi$ the components are

$$
(\nabla\times\mathbf F)_r=
\frac{\partial_\theta(\sin\theta F_\phi)-\partial_\phi F_\theta}{r\sin\theta},
$$
$$
(\nabla\times\mathbf F)_\theta=
\frac{(\partial_\phi F_r)/\sin\theta-\partial_r(rF_\phi)}r,
\quad
(\nabla\times\mathbf F)_\phi=
\frac{\partial_r(rF_\theta)-\partial_\theta F_r}r.
$$

[[Nabla identities and curvilinear coordinates]] derives the general scale-factor rule. It supplies these formulas because length and basis directions change with position. [Hunt's coordinate notes, §3.4](https://www.damtp.cam.ac.uk/user/reh10/vc/vcchapter3.pdf) use the same unit-component and spherical-angle conventions.

## Curl of a potential field

A potential field is $\mathbf F=\nabla f$; some physical conventions instead use $-\nabla f$. If $f$ is $C^2$, then

$$
\nabla\times\nabla f=(f_{zy}-f_{yz},f_{xz}-f_{zx},f_{yx}-f_{xy})=\mathbf0.
$$

Equality of continuous mixed derivatives proves the identity. The converse requires a domain condition. On a simply connected open domain, a $C^1$ curl-free field has a scalar potential. Simply connected means that every loop can contract to a point within the domain. A hole can prevent this.

For example, $\mathbf H=(-y,x,0)/(x^2+y^2)$ on space with the $z$-axis removed has zero curl there, but circulation $2\pi$ around every unit circle about the axis. It has no single-valued global potential. An angular coordinate can serve as a potential on a suitable cut region, but it jumps after a full turn. A local derivative test alone cannot detect this global obstruction.

## Worked example: a cylindrical field

Let $\mathbf F=\rho^2\mathbf e_\phi$. Only the $z$ curl component survives:

$$
(\nabla\times\mathbf F)_z=\frac1\rho\frac{d}{d\rho}(\rho^3)=3\rho.
$$

On a circle of radius $a$, circulation is $a^2(2\pi a)=2\pi a^3$. Integrating the curl through the disk gives $\int_0^{2\pi}\int_0^a3\rho\,\rho\,d\rho\,d\phi=2\pi a^3$. The extra $\rho$ in the area element is essential. Although the coordinate formula is used for $\rho>0$, this particular Cartesian field $\sqrt{x^2+y^2}(-y,x,0)$ extends as a $C^1$ field at the origin, so the filled-disk check is valid.

## Practice and worked answers

1. Compute curl for $\mathbf F=(yz,xz,xy)$. **Answer:** all three differences are zero: for example $R_y=x=Q_z$. A potential is $f=xyz$, since its three first derivatives recover the field.
2. Find curl of $\mathbf F=f\mathbf e_z$ for $f=x^2+y^2$. **Answer:** $\nabla f\times\mathbf e_z=(2x,2y,0)\times(0,0,1)=(2y,-2x,0)$. Direct differentiation gives the same result.
