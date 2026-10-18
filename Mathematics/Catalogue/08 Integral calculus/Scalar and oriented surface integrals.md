---
title: "Scalar and oriented surface integrals"
catalogue_ids:
  - "8.5.1"
  - "8.5.1.1"
  - "8.5.1.2"
  - "8.5.1.3"
  - "8.5.2"
  - "8.5.2.1"
  - "8.5.2.2"
  - "8.5.3"
  - "8.5.3.1"
  - "8.5.3.2"
---

> [!TLDR]
> A scalar surface integral weights true area; an oriented surface integral weights signed projected area and depends on the selected normal.

## Parameterize a patch

Read [[Double and triple integrals]], [[12.02 Partial derivatives]], and [[13.05 Parameterized curves and surfaces]]. A surface patch is $\mathbf r(u,v)=(x(u,v),y(u,v),z(u,v))$ over a plane domain $D$. Its partial derivatives $\mathbf r_u,\mathbf r_v$ are tangent vectors. Their cross product is perpendicular to both, with length equal to the area of their parallelogram. For vectors $\mathbf a,\mathbf b$, the cross product is

$$
\mathbf a\times\mathbf b=(a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1).
$$

We assume a continuously differentiable patch, one-to-one in its interior, with $\mathbf r_u\times\mathbf r_v\ne0$ except for negligible boundary or coordinate exceptions. Surfaces needing several patches are split without counting overlap twice. A small parameter rectangle maps approximately to a tangent parallelogram, so

$$
dS=\|\mathbf r_u\times\mathbf r_v\|\,du\,dv.
$$

## First kind: scalar area weighting

For continuous scalar $f$ on a compact piecewise smooth surface, the **first-kind** surface integral exists and is calculated as

$$
\iint_Sf\,dS=\iint_D f(\mathbf r(u,v))\|\mathbf r_u\times\mathbf r_v\|\,du\,dv.
$$

It comes from sums of function values times actual small surface areas. Setting $f=1$ gives surface area. Dividing by that area gives a surface-weighted average. For example, the average of the $z$ coordinate over a curved surface is $\iint_Sz\,dS/\iint_S1\,dS$. It is a geometric average, distinct from averaging over the flat projection.

For a graph $z=g(x,y)$ use $\mathbf r(u,v)=(u,v,g(u,v))$. The cross product is $(-g_x,-g_y,1)$, so $dS=\sqrt{1+g_x^2+g_y^2}\,dx\,dy$. For the plane $z=2x-y$ above the unit square, this factor is $\sqrt6$. Hence the area is $\sqrt6$, and

$$
\iint_Sz\,dS=\sqrt6\int_0^1\int_0^1(2x-y)\,dy\,dx=\frac{\sqrt6}{2}.
$$

The mean height is $1/2$. Swapping the parameter order changes the cross product's sign but leaves its norm, the area, and this scalar integral unchanged.

## Orientation and second-kind projections

An **orientation** selects a continuous unit normal $\mathbf n$ on each connected smooth part, consistently across shared edges. For a patch, one choice is $(\mathbf r_u\times\mathbf r_v)/\|\mathbf r_u\times\mathbf r_v\|$. A closed surface conventionally uses the outward normal; an open surface needs a stated choice. A nonorientable surface such as a Möbius strip has no consistent global normal, although scalar area integrals still make sense.

The catalogue's **second-kind** building block uses signed projection onto a coordinate plane, for example

$$
\iint_S R\,dx\,dy=\iint_S R n_z\,dS.
$$

Here $dx\,dy$ denotes oriented projected area, not automatically the positive area of the surface. Similarly, $dy\,dz=n_x\,dS$ and $dz\,dx=n_y\,dS$. The cyclic order fixes signs. For a graph with upward normal, $n_z\,dS=dx\,dy$ on the flat domain; downward orientation changes the sign. This terminology follows the coordinate-projection organization in [Handbook of Mathematics, §§8.5.2–8.5.3](https://www.alnasiry.net/Book-Exa/Handbook%20of%20Mathematics.pdf).

![[catalogue-ch08-surface-normal.svg|**Fig. C.08.4** True area and projected area differ by the normal's vertical component; reversing the normal reverses signed projection.]]

Figure C.08.4 shows why a tilted patch's area is larger than its horizontal projection. Its positive area does not reverse with the normal, but its signed projection does. An absolute value would remove orientation and produce a different integral.

## General type: combine all projected components

The **surface integral of general type** combines the three second-kind components:

$$
\iint_S(P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy)
=\iint_S\mathbf F\cdot\mathbf n\,dS
=\iint_D\mathbf F(\mathbf r)\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv,
$$

where $\mathbf F=(P,Q,R)$ and the parameter cross product must match the specified orientation. Modern texts often call the whole expression a second-kind integral or **flux integral**. Flux here is simply this mathematical normal-component integral; no physical field is assumed. [MIT's surface-integral notes](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/2c1720a794622fa3dbec65e82e1f2503_MIT18_02SC_MNotes_v9.1.pdf) derive the parameter formula.

For $\mathbf F=(x,y,z)$ on the upward plane $z=2x-y$ above the unit square, dotting with $(-2,1,1)$ gives $-2x+y+(2x-y)=0$. Thus the general integral is zero. Its three projected integrals are respectively $-1$, $1/2$, and $1/2$, which cancel. In contrast, the first-kind integral of the constant $1$ is $\sqrt6$. The field lies tangent to this particular plane through the origin, so the zero normal contribution also has a geometric explanation.

## Properties and a curved example

General-type integrals are linear in the coefficients and additive over consistently oriented surface pieces. Reversing the normal changes the sign. Smooth changes of parameter preserve the value when their orientation is accounted for. Adjacent pieces of a closed boundary have their own outward normals; no single constant normal works for all faces.

For the sphere $x^2+y^2+z^2=R_0^2$, $R_0>0$, with outward normal and $\mathbf F=(x,y,z)$, we have $\mathbf n=(x,y,z)/R_0$. Thus $\mathbf F\cdot\mathbf n=R_0$. Spherical parameterization gives area element $R_0^2\sin\phi\,d\phi\,d\theta$, so the general surface integral is $R_0^3\int_0^{2\pi}\int_0^\pi\sin\phi\,d\phi\,d\theta=4\pi R_0^3$. The scalar area integral instead equals $4\pi R_0^2$. Radius, orientation, and type of integral all affect the formula.

Do not normalize the cross product in the parameter formula and then omit its norm. That loses area. Either use a unit normal with $dS$, or use the full cross product with $du\,dv$.

## Practice

1. Find the area of $z=x+y$ over $0\le x,y\le1$.
2. On that same patch, find the general integral for $\mathbf F=(0,0,2)$ with upward and downward orientation.

## Worked answers

1. The upward cross product is $(-1,-1,1)$, with norm $\sqrt3$. Thus area is $\sqrt3\int_0^1\int_0^1dx\,dy=\sqrt3$.
2. The dot product with the upward cross product is $2$, so the integral is $2$ times the unit projection area, or $2$. Downward orientation gives $-2$. In unit-normal form, $\mathbf F\cdot\mathbf n=2/\sqrt3$ and $dS=\sqrt3\,dx\,dy$, producing the same upward value.
