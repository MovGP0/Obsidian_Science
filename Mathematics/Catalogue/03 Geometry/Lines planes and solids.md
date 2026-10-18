---
title: "Lines, planes, and solids"
catalogue_ids:
  - "3.3"
  - "3.3.1"
  - "3.3.2"
  - "3.3.3"
  - "3.3.4"
---

> [!TLDR]
> Spatial geometry uses perpendicular distances and cross-sections to describe lines, planes, polyhedra, and curved solids.

## Lines and planes in space

Work in three-dimensional Euclidean space. Three noncollinear points determine one plane. Two distinct planes either are parallel or meet in a line. A line can lie in a plane, meet it once, or be parallel without meeting it. Two distinct lines can intersect, be parallel, or be **skew**: not parallel and not contained in one plane. Edges on different levels of a box provide examples of skew lines.

A line is perpendicular to a plane if its direction is perpendicular to every direction within the plane. It is enough to test two intersecting independent directions in that plane. Being perpendicular to just one line in a plane is insufficient. The distance from a point to a plane is measured along a perpendicular, since a sloping segment forms a right triangle with that shorter perpendicular leg.

The angle between a line and a plane is the acute angle or right angle between the line and its orthogonal projection into the plane. If the line is perpendicular to the plane, its projection is a point and the angle is defined to be $90^\circ$. Equivalently the line-plane angle is the complement of the angle in $[0,90^\circ]$ to a normal, a direction perpendicular to the plane. The angle between two intersecting planes can be measured by cutting them with a plane perpendicular to their intersection line. This gives their **dihedral angle**. Adjacent internal faces of a convex solid can use the supplementary angle to the acute angle between their planes; state which angle is wanted.

## Vertices, edges, and solid angles

A polyhedron has flat polygonal faces. Their boundaries meet along edges, and edges end at vertices. A **solid angle** measures a set of directions from a vertex. Intersect those rays with a sphere of radius $r$ centered there. If the resulting patch has area $K$, define the solid angle by $\Omega=K/r^2$. Similarity makes this independent of $r$. The entire sphere gives $4\pi$ steradians and a hemisphere gives $2\pi$ steradians. A solid angle is not a sum of ordinary face angles.

Three perpendicular coordinate planes bound one octant of a sphere. Its solid angle is $4\pi/8=\pi/2$ steradians. This is the corner angle of a rectangular box. An arbitrary trihedral corner uses the spherical triangle formed by its three edge rays; see [[Geometry on a sphere]].

## Polyhedra and volume

For a convex polyhedron, Euler's relation is $V-E+F=2$, where these letters count vertices, edges, and faces. One way to see it is to project the boundary to a plane after removing one face. The remaining connected planar graph has $V-E+F_{\mathrm{bounded}}=1$, proved by removing edges of cycles and then tree end-edges. Restoring the missing face gives $2$. The relation also holds for many nonconvex polyhedra whose boundary has no handles, but not for arbitrary surfaces with holes.

A prism has two parallel congruent polygonal bases. Its volume is $Bh$, with base area $B$ and perpendicular base separation $h$. A pyramid has one polygonal base and a vertex outside its plane; its volume is $Bh/3$. This factor can be established by dividing a triangular prism into three equal-volume pyramids and then triangulating a general base. An oblique solid uses perpendicular height, not its sloping edge.

There are five convex regular polyhedra: tetrahedron, cube, octahedron, dodecahedron, and icosahedron. Their faces are congruent regular polygons with the same number meeting at each vertex. If a face has $p$ sides and $q$ faces meet at a vertex, convexity requires $q(p-2)180^\circ/p<360^\circ$, or $1/p+1/q>1/2$. With integers $p,q\ge3$, this leaves $(3,3),(4,3),(3,4),(5,3),(3,5)$, which are realized by those five solids. Equality would make a flat tiling rather than a convex corner.

## Solids with curved boundaries

A right circular cylinder of radius $r$ and height $h$ has $V=\pi r^2h$. Unroll its side surface into a rectangle of width $2\pi r$ and height $h$ to obtain lateral area $2\pi rh$. The total area adds two bases: $2\pi rh+2\pi r^2$.

A right circular cone has $V=\pi r^2h/3$. Its slant height is $l=\sqrt{r^2+h^2}$. Unroll its side into a sector of radius $l$ with arc length $2\pi r$. Sector area is half radius times arc length, so lateral area is $\pi rl$. Add $\pi r^2$ for the base. For a frustum formed by a cut parallel to the base, with radii $R,r$ and height $h$, similar triangles and subtraction of two cone volumes give

$$
V=\frac{\pi h}{3}(R^2+Rr+r^2).
$$

A sphere of radius $r$ has surface area $4\pi r^2$ and volume $4\pi r^3/3$. A spherical cap of height $h$, with $0\le h\le2r$, has area $2\pi rh$ and volume $\pi h^2(r-h/3)$. These formulas can be derived by slicing: at coordinate $z$ the sphere cross-section is a disk of area $\pi(r^2-z^2)$. Summing thin disks from $z=r-h$ to $r$ gives the cap volume; a full proof of the thin-slice limit belongs to [[08.01 Definite integrals]]. The cap surface area follows by the equal-area correspondence between spherical strips and strips on the surrounding cylinder.

## Worked example

A cone has radius $3$ and height $4$. Its slant height is $5$, volume is $12\pi$, and total area is $15\pi+9\pi=24\pi$. A parallel cut halfway up the height leaves a small similar cone of radius $3/2$ and height $2$. Its volume is $\pi(3/2)^2(2)/3=3\pi/2$. The lower frustum has volume $12\pi-3\pi/2=21\pi/2$, agreeing with the frustum formula using $R=3,r=3/2,h=2$.

## Practice

1. A triangular prism has triangular base area $15$ and height $7$. Compare its volume with a pyramid using that same base and height.
2. Verify Euler's relation for a cube. Then find the cap volume for a radius-$3$ sphere cut into two hemispheres.

## Worked answers

1. The prism volume is $15\cdot7=105$. The pyramid volume is $105/3=35$. The factor $1/3$ concerns volume for equal base and height; it does not imply their total surface areas have the same ratio.
2. A cube has $V=8,E=12,F=6$, so $8-12+6=2$. A hemisphere has cap height $h=r=3$, giving $\pi9(3-1)=18\pi$, half the full volume $4\pi27/3=36\pi$.
