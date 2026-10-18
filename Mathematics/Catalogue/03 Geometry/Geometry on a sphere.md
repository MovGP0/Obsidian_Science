---
title: "Geometry on a sphere"
catalogue_ids:
  - "3.4"
  - "3.4.1"
  - "3.4.1.1"
  - "3.4.1.2"
  - "3.4.1.3"
  - "3.4.1.4"
  - "3.4.1.5"
  - "3.4.1.6"
  - "3.4.1.7"
---

> [!TLDR]
> Great-circle arcs replace straight segments on a sphere; their central angles, vertex angles, and chosen interiors must be distinguished.

## Great circles, arcs, and angles

A sphere of radius $R>0$ is the set $x^2+y^2+z^2=R^2$. A plane through the center cuts it in a **great circle** of radius $R$. Any other cutting plane produces a smaller circle. A great-circle arc is a shortest surface path between its endpoints if its central angle is at most $\pi$. For distinct, non-antipodal endpoints the shorter such arc is unique. Antipodal endpoints lie at opposite ends of a diameter and have infinitely many semicircle paths between them.

An angular side $a$ is the central angle subtended by an arc, measured in radians. The corresponding surface length is $Ra$. The chord between the endpoints goes through the sphere's interior and has length $2R\sin(a/2)$. These are three different quantities. A drawing on the page is a projection and generally preserves none of them exactly.

The angle between two crossing arcs is measured between their tangent directions at the crossing point. For great circles it also equals the appropriate dihedral angle between the planes of the circles. A plane angle at the center measures a side; a tangent angle on the surface measures a triangle angle.

## Coordinates adapted to a sphere

Choose a polar axis and an equatorial reference direction. Colatitude $\theta$ is measured from the positive polar axis, with $0\le\theta\le\pi$. Longitude $\lambda$ is measured around that axis modulo $2\pi$. Then

$$
(x,y,z)=R(\sin\theta\cos\lambda,\sin\theta\sin\lambda,\cos\theta).
$$

Latitude is $\varphi=\pi/2-\theta$, giving $(x,y,z)=R(\cos\varphi\cos\lambda,\cos\varphi\sin\lambda,\sin\varphi)$. Meridians use constant longitude and are great semicircles. A parallel of constant latitude is a small circle unless $\varphi=0$. Its planar radius is $R\cos\varphi$. Longitude is undefined at the poles; two coordinate descriptions there can name the same point.

The polar axis need not be vertical in a drawing. One can place it through a chosen vertex to simplify a problem. This changes coordinates, while preserving the sphere and all intrinsic distances. Local azimuth-elevation coordinates instead use a tangent plane and its outward normal at a chosen point; specify that origin and orientation before using them.

## Lunes and trihedral angles

Two great semicircles joining antipodal poles bound a **lune**. If its interior angle is $\alpha$ radians with $0<\alpha<2\pi$, its area is

$$
K_{\mathrm{lune}}=2R^2\alpha.
$$

To see this, rotate the lune around its polar axis. It occupies the fraction $\alpha/(2\pi)$ of the full sphere area $4\pi R^2$. A right-angle lune therefore has area $\pi R^2$. Lunes have two vertices, unlike ordinary plane polygons. Their edges are semicircles, not straight chords.

Three rays from a common point bound a **trihedral angle** when they are not coplanar. Place a sphere at that point. The three rays meet it in three vertices and the three face planes cut great-circle edges between them. Face angles of the trihedral angle become angular sides of the spherical triangle. Its internal dihedral angles become triangle angles. The solid angle is the triangle area divided by $R^2$.

## Spherical triangles and Eulerian convention

In these lessons, an ordinary or **Eulerian spherical triangle** is the convex region made by three appropriate hemispheres, bounded by the shorter great-circle arcs joining three noncollinear vertices. No pair of vertices is antipodal. Its sides $a,b,c$ and its interior angles $A,B,C$ all lie strictly between $0$ and $\pi$. The opposite-side convention is the same as in [[Solve plane triangles]], but the sides are now angular quantities.

More broadly, choosing major arcs or the outside of the same boundary gives non-Eulerian triangle regions. For example, the complement of a small spherical triangle has the same boundary but reflex interior angles. It does not obey the ordinary interior-angle domain. Do not apply formulas with principal inverse functions before identifying the selected arcs and region. “Non-Eulerian” here is a spherical-triangle convention; it does not mean a failure of Euclid's parallel rule by itself.

![[catalogue-ch03a-spherical-octant.svg|**Fig. C.ch03a.3** The three coordinate great circles bound an octant. Its three sides and three surface angles are each 90°, so its angle sum is 270°.]]

The octant in Fig. C.ch03a.3 makes the distinction concrete. Its three central side angles are $\pi/2$, and its three vertex angles are also $\pi/2$. Its area is one-eighth of $4\pi R^2$, namely $\pi R^2/2$. A plane right triangle cannot have these data.

## The polar triangle

Every great circle has two poles, the endpoints of its normal diameter. For triangle $ABC$, choose $A'$ as the pole of side $BC$ that lies in the same hemisphere as $A$. Choose $B',C'$ cyclically. The resulting Eulerian triangle is the **polar triangle**. Its side $a'$ and opposite angle $A'$ obey

$$
a'=\pi-A,\qquad A'=\pi-a,
$$

with cyclic versions for the other letters. In these equations $A'$ in an angle expression means the polar angle; as a point it names the vertex. The supplement appears because inward normals to two side planes have an angle supplementary to the internal dihedral angle between those planes. Taking the polar again returns the original triangle. This swaps side problems with angle problems.

## Worked example

A spherical triangle has angular sides $a=70^\circ$, $b=80^\circ$, $c=90^\circ$. Its polar triangle therefore has angles $110^\circ$, $100^\circ$, and $90^\circ$. This does not determine the original angles by subtracting original sides at the same vertices; those supplements are the angles of a different triangle. On a radius-$2$ sphere the original side $a$ has length $2(70\pi/180)=7\pi/9$. Its chord has length $4\sin35^\circ$, which is smaller.

## Practice

1. On a radius-$3$ sphere, find the area of a $60^\circ$ lune and the arc length of one of its semicircle edges.
2. A triangle has angles $80^\circ$, $90^\circ$, $110^\circ$. Find the polar triangle's angular sides. What additional choice would be needed if an original side were specified as a major arc?

## Worked answers

1. Convert $60^\circ$ to $\pi/3$. The lune area is $2(9)(\pi/3)=6\pi$. Each edge is a semicircle, so its length is $R\pi=3\pi$, independent of the opening angle.
2. The polar sides are $100^\circ$, $90^\circ$, and $70^\circ$. A major arc would leave the Eulerian convention; the chosen region and directed/interior angle conventions would have to be specified before using supplement and inverse-function formulas.

## References

[TU Berlin, Geometry I, section 2.3](https://www3.math.tu-berlin.de/geometrie/Lehre/WS18/GeometryI/GeometryI_W18.pdf) treats hemisphere definitions and polar triangles. [M. Kuhar, University of Ljubljana, section 6.2.1](https://fgg-web.fgg.uni-lj.si/~/mkuhar/pouk/geod/gradivo/trigonometrija.pdf) states the Eulerian side-and-angle convention.
