---
title: "Surface integrals and oriented flux"
catalogue_ids:
  - "13.3.2"
  - "13.3.2.1"
  - "13.3.2.2"
  - "13.3.2.3"
  - "13.3.2.4"
---

> [!TLDR]
> A surface integral adds values over area; a flux integral also includes a chosen normal direction.

## A plane surface element

Read [[Cross product]], [[Vector functions and curves]], and [[08.01 Definite integrals]]. A small parallelogram spanned by vectors $\mathbf a$ and $\mathbf b$ has area $\|\mathbf a\times\mathbf b\|$. The vector $\mathbf a\times\mathbf b$ also records a perpendicular direction. Reversing the order reverses that direction but leaves its length unchanged. This is the **oriented area vector**.

For a smooth parameterized surface $\mathbf X(u,v)$, its local tangent vectors are $\mathbf X_u$ and $\mathbf X_v$. Require $\mathbf X_u\times\mathbf X_v\ne0$ on the patch. Then

$$
dS=\|\mathbf X_u\times\mathbf X_v\|\,du\,dv,\qquad
\mathbf n\,dS=(\mathbf X_u\times\mathbf X_v)\,du\,dv.
$$

The second formula chooses one of the two possible normal directions. A surface is orientable when these local choices can fit into a continuous global choice. Patches must cover the surface once, apart from harmless shared edges; an overlapping parameterization can count an area more than once.

## Scalar area integrals and flux

For a scalar $f$, define $\iint_S f\,dS$ by substituting the scalar area factor. This integral has no orientation sign. For a vector field $\mathbf F$, its flux through the oriented surface is

$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=\iint_D\mathbf F(\mathbf X(u,v))\cdot(\mathbf X_u\times\mathbf X_v)\,du\,dv.
$$

Here $D$ is the parameter region. A positive dot product counts the field component along the chosen normal, and a negative one counts the opposite direction. Tangential components contribute zero. The word flux in this mathematical definition does not require a physical flow model.

To calculate, choose a parameterization, differentiate it, form the cross product, check its direction against the requested normal, substitute the field, and integrate. Reversing the normal reverses the flux. A closed surface has a natural outward normal: it points out of the enclosed solid. On an inner cavity boundary, outward from the solid points into the cavity.

## Cartesian graphs and integrals of the second kind

For a graph $z=g(x,y)$ with upward normal, use $\mathbf X=(x,y,g(x,y))$. The cross product is $(-g_x,-g_y,1)$, whose positive last component confirms upward orientation. Thus

$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=\iint_D[-Pg_x-Qg_y+R]_{z=g(x,y)}\,dx\,dy.
$$

No additional square-root factor is needed: the cross product already includes both normal direction and area. The scalar area integral, by contrast, uses $\sqrt{1+g_x^2+g_y^2}$.

The classical Cartesian notation for an oriented surface integral of the **second kind** is

$$
\iint_S P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy.
$$

The paired differentials are signed projected areas. For example, under a parameterization,

$$
dy\,dz=(y_u z_v-y_v z_u)\,du\,dv.
$$

The other two components follow cyclically. This gives exactly the flux formula, not an integral over three separate surfaces. A graph is convenient but not necessary. A sphere needs multiple graph patches or one angular parameterization whose coordinate failures occur on negligible seams and poles.

## Worked example: a sloping triangle

Take the part of $z=2-x-y$ above $D=\{x\ge0,y\ge0,x+y\le1\}$, with upward normal, and let $\mathbf F=(x,y,z)$. Since $g_x=g_y=-1$, the oriented area vector is $(1,1,1)dx\,dy$. On the surface the dot product is $x+y+2-x-y=2$. Hence

$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=\int_0^1\int_0^{1-x}2\,dy\,dx
=\int_0^1 2(1-x)\,dx=1.
$$

The actual surface area is $\sqrt3\operatorname{area}(D)=\sqrt3/2$, while its upward unit normal is $(1,1,1)/\sqrt3$. The field's normal component is $2/\sqrt3$ everywhere on this plane. Multiplying these values gives one, an independent check. A downward normal would give minus one.

## Worked example: a sphere

On a radius-$a$ sphere centered at zero, the field $\mathbf F=\mathbf r=(x,y,z)$ equals $a\mathbf n$. Therefore its outward flux is $a(4\pi a^2)=4\pi a^3$. Parameterization confirms it: $\mathbf X=(a\sin\theta\cos\phi,a\sin\theta\sin\phi,a\cos\theta)$ has $\mathbf X_\theta\times\mathbf X_\phi=a^2\sin\theta\,\mathbf e_r$, which points outward for $0<\theta<\pi$.

## Common errors

Do not use a unit normal without the area factor, or use a cross-product normal and multiply by area a second time. Check parameter order before integrating. An open surface has no automatic outward direction; specify upward, downward, or another continuous normal. A result's sign only has meaning relative to that choice.

## Practice

1. Find upward flux of $\mathbf F=(0,0,1)$ through $z=x^2+y^2$ above the unit disk.
2. For $\mathbf X(u,v)=(u,v,u+2v)$, $0\le u,v\le1$, find both its area and upward flux of $\mathbf F=(1,0,0)$.

## Worked answers

1. The graph formula has $P=Q=0$, $R=1$. The flux equals the projected disk area, $\pi$, regardless of the graph's slope.
2. The cross product is $(-1,-2,1)$, with length $\sqrt6$. The parameter square has area one, so the surface area is $\sqrt6$. Its dot product with the field is $-1$, so the upward flux is $-1$.
