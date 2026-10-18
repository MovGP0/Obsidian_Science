---
title: "Polygons and regular figures"
catalogue_ids:
  - "3.1.5"
  - "3.1.5.1"
  - "3.1.5.2"
  - "3.1.5.3"
---

> [!TLDR]
> Triangulation gives polygon angle sums and areas; regular polygons reduce to repeated congruent triangles around one center.

## General polygons and triangulation

A **polygon** is a closed chain of finitely many straight segments. Its endpoints are vertices and its segments are sides. Here a simple polygon has no self-crossings and has $n\ge3$ vertices. It is convex if every joining segment between two of its points remains inside or on the polygon. A concave polygon has at least one reflex interior angle.

In a convex $n$-gon, draw diagonals from one vertex to all nonadjacent vertices. This partitions it into $n-2$ triangles without overlapping interiors. Each triangle contributes $180^\circ$, so the interior-angle sum is $(n-2)180^\circ$. A simple concave polygon also admits a triangulation into $n-2$ triangles, but arbitrary diagonals from one vertex may leave its interior. Do not use the convex fan drawing unchanged in that case.

At a vertex of a convex polygon, an exterior turning angle is $180^\circ$ minus the interior angle. After one trip around the boundary, the heading has made one full turn. Equivalently, subtract the interior sum from $n\cdot180^\circ$ to get the exterior sum $360^\circ$. Signed turns give the corresponding statement for simple concave boundaries traversed consistently. Star polygons require a separate winding count and are outside these formulas' stated scope.

From each vertex there are $n-3$ diagonals, since the vertex itself and its two neighbors are excluded. Counting every diagonal from both ends gives $n(n-3)/2$ distinct diagonals. This count includes diagonals that intersect; it counts segments, not the regions they create.

## Regular convex polygons

A regular polygon has equal sides and equal angles. Equal sides alone produce an equilateral polygon, which need not be regular when $n\ge4$. Equal angles alone likewise need not produce equal sides. A regular convex $n$-gon has a center $O$, circumradius $R$ from center to vertex, and apothem $r$ perpendicular from center to a side. Join $O$ to every vertex. The resulting $n$ triangles are congruent and have central angle $2\pi/n$.

Bisect one of those triangles. Its hypotenuse is $R$, half-base is $s/2$, and adjacent leg is $r$. Its center angle is $\pi/n$. The right-triangle definitions give

$$
s=2R\sin\frac\pi n,\qquad
r=R\cos\frac\pi n,\qquad
s=2r\tan\frac\pi n.
$$

Here $s$ denotes side length, not semiperimeter. Write the perimeter as $P=ns$. Each of the $n$ triangles has area $sr/2$. Therefore

$$
K=\frac12Pr=\frac{ns^2}{4\tan(\pi/n)}.
$$

This proof explains which radius belongs in which formula. Replacing the apothem by the circumradius in $Pr/2$ gives an incorrect area.

The interior angle at each vertex is the total interior sum divided by $n$:

$$
\alpha=\frac{n-2}{n}180^\circ.
$$

![[catalogue-ch03a-regular-hexagon.svg|**Fig. C.ch03a.4** A regular hexagon splits into six congruent center triangles. The radius R reaches a vertex, while the apothem r meets a side at a right angle.]]

The highlighted half-triangle in Fig. C.ch03a.4 has angle $\pi/n$ at the center. It is the right triangle used to derive the side, radius, and area formulas.

Every rotation by $360^\circ/n$ carries the polygon onto itself. There are $n$ such rotations including the identity, and $n$ reflection axes. For odd $n$ an axis joins a vertex to the opposite side's midpoint. For even $n$ half pass through opposite vertices and half through opposite side midpoints.

## Particular regular figures

For an equilateral triangle, $n=3$ and $\tan60^\circ=\sqrt3$. Hence $K=\sqrt3s^2/4$. Its altitude is $\sqrt3s/2$, its circumradius is $s/\sqrt3$, and its apothem is half that circumradius. These lengths also follow directly by splitting the triangle into two right triangles.

For a square, $n=4$: the diagonal is $s\sqrt2$, so $R=s/\sqrt2$ and $r=s/2$. The formula returns $K=s^2$. For a regular hexagon, $n=6$: its center triangles have three $60^\circ$ angles, so they are equilateral. Thus $R=s$, $r=\sqrt3s/2$, and $K=3\sqrt3s^2/2$.

For a regular pentagon, the interior angle is $108^\circ$ and the exterior turn is $72^\circ$. Its diagonal-to-side ratio is the golden ratio $(1+\sqrt5)/2$. To see the associated equation, intersect two diagonals in a regular pentagon. Equal angles give similar triangles whose corresponding lengths imply $d/s=s/(d-s)$. Put $q=d/s>1$: then $q=1/(q-1)$, so $q^2-q-1=0$. The positive root gives the stated ratio.

## Worked example

A regular hexagon has side $4$. Its perimeter is $24$, its circumradius is $4$, and its apothem is $2\sqrt3$. Its area is $24(2\sqrt3)/2=24\sqrt3$. It has $6(6-3)/2=9$ diagonals. Its six $120^\circ$ interior angles sum to $720^\circ$, equal to $(6-2)180^\circ$.

## Practice

1. A convex polygon has interior-angle sum $1260^\circ$. Find its number of vertices and diagonals.
2. A regular octagon has apothem $3$. Express its side length and area exactly using $\tan(\pi/8)=\sqrt2-1$.

## Worked answers

1. Solve $(n-2)180=1260$ to get $n-2=7$, so $n=9$. There are $9\cdot6/2=27$ diagonals.
2. The side is $s=2r\tan(\pi/8)=6(\sqrt2-1)$. The perimeter is $48(\sqrt2-1)$. Multiply by $r/2=3/2$ to obtain $K=72(\sqrt2-1)$. The apothem is the distance to a side, so no further radius conversion is needed.
