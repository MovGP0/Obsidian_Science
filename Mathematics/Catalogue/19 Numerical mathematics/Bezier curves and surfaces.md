---
title: "Bézier curves and surfaces"
catalogue_ids:
  - "19.7.3"
  - "19.7.3.1"
  - "19.7.3.2"
---

> [!TLDR]
> Bernstein polynomials form nonnegative weights that turn control points into Bézier curves and tensor-product surfaces.

## Control points describe a curve

[[Cubic spline algorithms]] fits values at prescribed inputs. A **Bézier curve** instead starts with control points $P_0,\ldots,P_n$ in the plane or a higher-dimensional coordinate space and constructs a parameterized curve $C(t)$, $0\le t\le1$. The interior control points guide its shape; they are usually not points through which the curve passes. Read [[13.05 Parameterized curves and surfaces]] if a vector-valued parameterization is new.

The **Bernstein basis** of degree $n$ is

$$
B_{i,n}(t)=\binom ni t^i(1-t)^{n-i},\qquad i=0,\ldots,n.
$$

Each basis value is nonnegative on $[0,1]$, and the binomial theorem gives $\sum_iB_{i,n}(t)=(t+1-t)^n=1$. Define the Bernstein–Bézier representation

$$
C(t)=\sum_{i=0}^n B_{i,n}(t)P_i.
$$

Thus $C(t)$ is a weighted average of control points. It stays in their convex hull, the smallest convex set containing them. At $t=0$ only the first weight survives, and at $t=1$ only the last survives. Therefore $C(0)=P_0$ and $C(1)=P_n$.

## A quadratic worked example

Take $P_0=(0,0)$, $P_1=(1,2)$, and $P_2=(2,0)$. Then

$$
C(t)=(1-t)^2P_0+2t(1-t)P_1+t^2P_2
=(2t,4t(1-t)).
$$

At $t=1/2$, $C=(1,1)$, not the middle control point $(1,2)$. The curve lies inside the control triangle. In Fig. C.ch19.4 of [[Cubic spline algorithms]], the right panel shows this distinction between control polygon and curve.

Differentiate the Bernstein basis and collect adjacent terms to get

$$
C'(t)=n\sum_{i=0}^{n-1}B_{i,n-1}(t)(P_{i+1}-P_i).
$$

Hence $C'(0)=n(P_1-P_0)$ and $C'(1)=n(P_n-P_{n-1})$. Endpoint tangents follow the first and last polygon edges. Two same-degree curves joined with equal endpoints have positional continuity. Matching their endpoint derivative vectors gives parametric first-derivative continuity; merely parallel tangents gives a weaker geometric smoothness condition. Unequal parameter interval lengths require derivative rescaling.

## De Casteljau evaluation

The explicit power formula is not the only algorithm. Start with $P_i^{(0)}=P_i$ and repeatedly take linear interpolations:

$$
P_i^{(r)}=(1-t)P_i^{(r-1)}+tP_{i+1}^{(r-1)},
\qquad i=0,\ldots,n-r.
$$

After $n$ levels, $P_0^{(n)}=C(t)$. The recurrence follows the Bernstein identity $B_{i,n}=(1-t)B_{i,n-1}+tB_{i-1,n-1}$. It uses convex combinations for $0\le t\le1$, giving a useful geometric and numerical interpretation.

For the quadratic at $t=1/2$, first find $P_0^{(1)}=(1/2,1)$ and $P_1^{(1)}=(3/2,1)$. Their midpoint is $(1,1)$, the same result as direct evaluation. The edges of this triangular construction also provide control points for the two subcurves obtained by splitting at $t$. This permits refinement without changing the curve.

## Bernstein–Bézier surfaces

A tensor-product surface uses a rectangular control net $P_{ij}$:

$$
S(u,v)=\sum_{i=0}^m\sum_{j=0}^n B_{i,m}(u)B_{j,n}(v)P_{ij},
\qquad0\le u,v\le1.
$$

The product weights are nonnegative and sum to $1$, so the surface remains in the control net's convex hull. Its four edges are Bézier curves from the boundary control rows and columns. Evaluate by de Casteljau along one direction to form intermediate points, then along the other direction. The finite sums commute in exact arithmetic.

For a bilinear patch choose $P_{00}=(0,0,0)$, $P_{10}=(1,0,0)$, $P_{01}=(0,1,0)$, and $P_{11}=(1,1,1)$. The formula becomes $S(u,v)=(u,v,uv)$. The centre is $(1/2,1/2,1/4)$. A bicubic Bézier patch uses $4\times4=16$ control points and is cubic separately in $u$ and $v$. It is one polynomial patch; a piecewise spline surface joins several patches with compatibility conditions. See [Shene's Bézier-surface construction notes](https://pages.mtu.edu/~shene/COURSES/cs3621/NOTES/surface/bezier-construct.html) for the control-net construction.

## What the representation does not guarantee

A control polygon can be simple while a high-degree parameterized curve has unwanted bends or self-intersections. A surface can fold or have a zero tangent cross product; a rectangular parameter domain does not guarantee an injective surface. Convex-hull containment does not imply interpolation of interior control points. Raising the degree can preserve a curve through degree elevation, but changing control points generally changes it. These are separate operations.

## Practice

1. For a cubic with $P_0=(0,0)$, $P_1=(1,0)$, $P_2=(1,1)$, $P_3=(2,1)$, calculate endpoint derivatives.
2. Evaluate the quadratic worked example at $t=1/4$ using either formula or de Casteljau.

> [!example]- Worked answers
> 1. $C'(0)=3(P_1-P_0)=(3,0)$ and $C'(1)=3(P_3-P_2)=(3,0)$. Both tangents point horizontally, although the curve bends between them.
> 2. $C(1/4)=(2/4,4(1/4)(3/4))=(1/2,3/4)$. The weights are $9/16,6/16,1/16$ and add to $1$, providing an independent check.
