---
title: "Triangles and symmetry"
catalogue_ids:
  - "3.1.3"
  - "3.1.3.1"
  - "3.1.3.2"
---

> [!TLDR]
> Triangle angle sums, congruence, similarity, and symmetry reduce shape problems to a small number of exact relations.

## A triangle and its necessary conditions

Three noncollinear points $A,B,C$ and their joining segments form a nondegenerate Euclidean triangle. Write $a=BC$, $b=CA$, and $c=AB$. Use $A,B,C$ also for the interior angles at the corresponding vertices when they occur in angle equations. Each angle lies between $0$ and $180^\circ$.

Draw a line through $C$ parallel to $AB$. The two angles that $CA$ and $CB$ make with this parallel equal $A$ and $B$ by alternate interior angles. Together with $C$, they form a straight angle. Hence

$$
A+B+C=180^\circ=\pi\text{ radians}.
$$

The proof depends on the Euclidean parallel property. It is not valid on a sphere. Extending one side at a vertex gives an exterior angle equal to the sum of the two remote interior angles, because it is $180^\circ$ minus the adjacent interior angle.

The side lengths satisfy strict triangle inequalities: $a<b+c$, $b<c+a$, and $c<a+b$. A path through the third vertex is longer than the direct segment between two vertices. Conversely, positive lengths satisfying these inequalities can form a triangle. Equality gives a flattened, degenerate figure. The largest angle is opposite the largest side; equal sides are opposite equal angles.

## Congruence and similarity

Congruent triangles have the same shape and size. SSS, SAS, and ASA give standard congruence tests: three corresponding sides; two sides and their included angle; or two angles and the included side. A reflection may be required to put one triangle on the other. For right triangles, equality of the hypotenuse and one corresponding leg also suffices, since Pythagoras fixes the other leg.

Similar triangles have the same angles and a common ratio $k>0$ of corresponding sides. Two equal angle pairs suffice, because the angle sum fixes the third. Areas scale by $k^2$: take a base and its perpendicular height, both scaled by $k$, in $K=bh/2$. Equal angles alone do not determine size.

SSA is not a general congruence test. A segment of given length from one point can meet a ray at two possible points. Both resulting triangles may have the given side-side-angle data. [[Solve plane triangles]] calculates this ambiguity explicitly.

## Symmetry, centers, and special triangles

An isosceles triangle has two equal sides. The line from their common vertex to the midpoint of the base divides it into congruent SSS triangles. It is therefore both an angle bisector and a perpendicular to the base. Reflection in this line exchanges the two halves. Conversely, the equal base angles force equal opposite sides.

An equilateral triangle has three such reflection axes and rotational symmetry through $120^\circ$ and $240^\circ$. Each angle is $60^\circ$. A scalene triangle has no reflection axis. A general isosceles triangle has one; an equilateral triangle is a special isosceles triangle and has three. These statements concern a triangle as an unlabelled shape: a symmetry may exchange vertex names.

A **median** joins a vertex to the opposite side's midpoint. The three medians meet at the centroid, which divides each median in the ratio $2:1$ from the vertex. In coordinates its position is the average of the three vertex positions: $(A+B+C)/3$. For example, the point $\tfrac13A+\tfrac23(B+C)/2$ lies two-thirds along the median from $A$, and is that same average. This proves concurrence without assuming symmetry.

The perpendicular bisectors of the sides meet at the circumcenter: each bisector consists of points equidistant from its two endpoints, so their intersection is equidistant from all three vertices. Angle bisectors meet at the incenter, equidistant from the sides. The altitudes meet at the orthocenter. These four centers need not coincide; they do coincide in an equilateral triangle. In an obtuse triangle some altitudes meet extended sides and the circumcenter can lie outside the triangle.

## Area and a worked example

For base length $b$ and perpendicular height $h$, $K=bh/2$. A parallelogram made from two congruent copies has base $b$, height $h$, and area $bh$, which proves the factor $1/2$. Heron's formula is an alternative when all sides are known:

$$
K=\sqrt{s(s-a)(s-b)(s-c)},\qquad s=\frac{a+b+c}{2}.
$$

Consider sides $10$, $10$, and $12$. The reflection axis bisects the base. Pythagoras gives $h=\sqrt{10^2-6^2}=8$, so $K=12\cdot8/2=48$. Independently, $s=16$ gives $K=\sqrt{16\cdot6\cdot6\cdot4}=48$. The side inequalities hold. A similar triangle with base $18$ has scale $3/2$, so its area is $48(3/2)^2=108$.

## Practice

1. An isosceles triangle has vertex angle $44^\circ$. Find its base angles and a base exterior angle.
2. For vertices $(0,0)$, $(6,0)$, and $(0,9)$, find the centroid and the area. Is the triangle equilateral?

## Worked answers

1. The base angles are equal, so each is $(180^\circ-44^\circ)/2=68^\circ$. A base exterior angle is $180^\circ-68^\circ=112^\circ$, also $44^\circ+68^\circ$.
2. Average the coordinates to obtain the centroid $(2,3)$. The perpendicular sides have lengths $6$ and $9$, so $K=27$. The sides are unequal; the third has length $\sqrt{117}=3\sqrt{13}$. The triangle is scalene and right, not equilateral.
