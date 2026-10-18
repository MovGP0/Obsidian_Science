---
title: "Integral theorems and boundary identities"
catalogue_ids:
  - "13.3.3"
  - "13.3.3.1"
  - "13.3.3.2"
  - "13.3.3.3"
---

> [!TLDR]
> Integral theorems relate local derivatives inside a region to integrals over its correctly oriented boundary.

## Prerequisites and the common idea

Read [[Line integrals and scalar potentials]], [[Surface integrals and oriented flux]], and [[Nabla identities and curvilinear coordinates]]. All theorems here extend the fundamental theorem of calculus: an integral of a derivative inside a region equals data on its boundary. When small pieces are joined, contributions along shared internal boundaries cancel because their orientations oppose. The outside boundary remains. This explains the structure, although a full proof also controls limits and parameterizations.

State regularity before applying a theorem. A standard sufficient setting below is a bounded solid with piecewise smooth boundary, or a compact orientable piecewise smooth surface with piecewise smooth boundary, and fields continuously differentiable on an open neighborhood of the entire relevant set. Corners and edges are allowed with these hypotheses. A field undefined at one interior point does not satisfy them.

## Gauss's integral theorem and integral formula

For a solid $V$ with outward boundary normal $\mathbf n$,

$$
\iiint_V\nabla\cdot\mathbf F\,dV
=\iint_{\partial V}\mathbf F\cdot\mathbf n\,dS.
$$

This is the divergence theorem, also called Gauss's integral theorem. The surface must be closed. If the solid has a cavity, its inner boundary is included, with normal into the cavity. The theorem adds outward excess over the solid and matches it to net outward boundary flux.

Useful companion Gauss integral formulas follow by applying the scalar theorem componentwise:

$$
\iiint_V\nabla f\,dV=\iint_{\partial V}f\mathbf n\,dS,
\qquad
\iiint_V\nabla\times\mathbf F\,dV
=\iint_{\partial V}\mathbf n\times\mathbf F\,dS.
$$

For the first formula, use $\mathbf F=f\mathbf e_i$ to obtain each component. For the second, expand each component and use the same scalar argument. These prove the volume-derivative limits in [[Directional derivatives and gradients]] by division by volume and continuity. They also fix the order of the cross product.

## Stokes's integral theorem

For an oriented surface $S$ and its induced boundary orientation,

$$
\iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS
=\oint_{\partial S}\mathbf F\cdot d\mathbf r.
$$

Use the right-hand rule between $\mathbf n$ and the positive boundary tangent. On an upward horizontal surface, the outer boundary is counterclockwise as viewed from above; the inner boundary of a hole is clockwise. Stokes relates circulation around the full boundary to curl through the surface, not to divergence. Two spanning surfaces with the same oriented boundary give the same curl flux if both lie in a region where the same smooth field is defined.

![[catalogue-ch13-oriented-boundaries.svg|**Fig. C.ch13.4** For an upward-oriented annulus, the outer boundary runs counterclockwise and the inner boundary clockwise. The missing hole is outside the surface.]]

These hypotheses and orientation conventions are developed in [Hunt's integral-theorem notes, §§6.1–6.3](https://www.damtp.cam.ac.uk/user/reh10/vc/vcchapter6.pdf). They prevent filling a hole with a surface on which the field is undefined.

## Green's plane theorem

For a planar region $D$, positively oriented boundary, and $C^1$ functions $P,Q$ near its closure,

$$
\oint_{\partial D}P\,dx+Q\,dy
=\iint_D(Q_x-P_y)\,dx\,dy.
$$

This is Stokes's theorem in the $xy$-plane with normal $\mathbf e_z$. A related outward-flux form is $\oint_{\partial D}P\,dy-Q\,dx=\iint_D(P_x+Q_y)dx\,dy$. For a counterclockwise unit circle, $P=x$, $Q=y$ gives $\oint(x\,dy-y\,dx)=2\pi$, twice its enclosed area.

## Green's first and second identities

Let $u,v$ be $C^2$ near the closure of $V$. Write $\partial_n v=\nabla v\cdot\mathbf n$ for the outward normal derivative. Apply the divergence theorem to $u\nabla v$ and expand its divergence:

$$
\iiint_V(u\Delta v+\nabla u\cdot\nabla v)dV
=\iint_{\partial V}u\partial_n v\,dS.
$$

This is Green's first identity. Exchange $u,v$ and subtract to obtain Green's second identity:

$$
\iiint_V(u\Delta v-v\Delta u)dV
=\iint_{\partial V}(u\partial_n v-v\partial_n u)dS.
$$

The first identity converts a second derivative into squared first derivatives when $u=v$. This gives uniqueness arguments for boundary problems. The second exchanges the Laplacian between two functions. [NIST DLMF §1.6, equations 1.6.59–60](https://dlmf.nist.gov/1.6#v) states these identities with the same outward-normal convention. These three-dimensional identities are distinct from Green's planar circulation theorem despite the shared name.

## Worked examples: choose the easier side

On the outward sphere of radius $a$, take $\mathbf F=(x,y,z)$. Since divergence is three, Gauss gives flux $3(4\pi a^3/3)=4\pi a^3$, without parameterizing the surface.

For $\mathbf G=(-y/2,x/2,z)$, curl is $(0,0,1)$. Around the unit circle in $z=0$, Stokes gives circulation equal to the disk area $\pi$. Directly the tangent dot product is $1/2$, so the integral from zero to $2\pi$ is also $\pi$. Reversing the circle gives $-\pi$ and requires the downward disk normal.

## Limitations and singularities

The field $\mathbf r/r^3$ has divergence zero for $r>0$ but flux $4\pi$ on a sphere. Gauss cannot be applied to the filled ball because the field is singular at zero. Apply it to a shell instead: the outer flux is $4\pi$, the inner outward-from-shell flux is $-4\pi$, and their sum is zero. Omitting the inner boundary creates a false contradiction.

## Practice and worked answers

1. Find the outward flux of $(x^3,y^3,z^3)$ through the unit cube. **Answer:** divergence is $3x^2+3y^2+3z^2$. Each term integrates to one over the cube, so total flux is three.
2. Use Green's first identity to show that a harmonic $u$ with zero boundary values on a bounded connected smooth domain must vanish. **Answer:** set $v=u$ and use $\Delta u=0$, $u=0$ on the boundary. Then $\int_V\|\nabla u\|^2dV=0$. Continuity makes $\nabla u=0$ everywhere; connectedness makes $u$ constant, and its boundary value makes that constant zero.
