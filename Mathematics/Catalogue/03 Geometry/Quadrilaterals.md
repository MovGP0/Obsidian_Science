---
title: "Quadrilaterals"
catalogue_ids:
  - "3.1.4"
  - "3.1.4.1"
  - "3.1.4.2"
  - "3.1.4.3"
  - "3.1.4.4"
  - "3.1.4.5"
  - "3.1.4.6"
  - "3.1.4.7"
---

> [!TLDR]
> Quadrilaterals are classified by parallel sides, equal lengths, angles, and circles; each extra condition permits additional deductions.

## General quadrilaterals

A simple quadrilateral has four distinct vertices joined in order, with no crossings of nonadjacent sides. Here we first consider convex quadrilaterals: each interior angle is less than $180^\circ$, and each diagonal lies inside the figure. A diagonal divides one into two triangles, proving that its four interior angles sum to $360^\circ$.

The diagonal also gives an area method for an irregular shape. If diagonal $AC$ has length $d$ and the perpendicular distances from $B,D$ to its line are $h_1,h_2$ on opposite sides, then $K=d(h_1+h_2)/2$. The two distances must be perpendicular heights. Side lengths that happen to look vertical in a sketch cannot replace them. Concave simple quadrilaterals still have angle sum $360^\circ$, but one angle is reflex. For them use a nonoverlapping triangulation or signed coordinate areas with care.

## Parallelograms, rectangles, squares, and rhombi

A **parallelogram** has both pairs of opposite sides parallel. A diagonal produces congruent triangles by alternate interior angles and the common diagonal. Hence opposite sides and opposite angles are equal, and adjacent angles sum to $180^\circ$. Its diagonals bisect each other: the triangles made by their intersection have equal alternate angles and equal opposite sides, which gives equal half-diagonals.

Its area is base times perpendicular height, $K=bh$. Cutting off a triangular end and moving it to the other end produces a rectangle with that base and height. The sloping side usually has a different length from the height.

A **rectangle** is a parallelogram with a right angle, hence four right angles. With adjacent sides $a,b$, its area is $ab$ and its diagonal is $\sqrt{a^2+b^2}$. Its diagonals are equal as well as bisected. A **square** is a rectangle with $a=b$, so $K=a^2$ and its diagonal is $a\sqrt2$.

A **rhombus** is a parallelogram with all four sides equal. The triangles on either side of one diagonal are congruent by SSS, so the diagonal bisects the vertex angles. Apply this to both diagonals. Since the diagonals also bisect each other, the angles around their crossing are equal adjacent angles and thus right angles. If their lengths are $p,q$, four right triangles yield $K=pq/2$. A rhombus need not have right vertex angles. A square is both a rectangle and a rhombus.

## Trapezoids

Use the inclusive convention: a **trapezoid** has at least one pair of parallel opposite sides. A parallelogram is therefore a special case. Some books require exactly one pair; state which convention you use. If the parallel bases have lengths $a,b$ and separation $h$, two congruent copies form a parallelogram with base $a+b$ and height $h$. Thus

$$
K=\frac{a+b}{2}h.
$$

The segment joining the nonparallel sides' midpoints is parallel to the bases and has length $(a+b)/2$. One proof divides the trapezoid by a diagonal and uses the triangle midpoint theorem in the two triangles. With the inclusive convention, define an **isosceles trapezoid** by equal angles at each base, or equivalently by a reflection axis perpendicular to the bases. Equal legs and equal diagonals then follow; rectangles are included. Equal legs alone do not define this class under the inclusive convention, because every parallelogram has equal legs, including oblique ones.

## Cyclic quadrilaterals

A convex quadrilateral is **cyclic** if all four vertices lie on one circle. An inscribed angle is half the measure of the intercepted arc that does not contain its vertex. Opposite angles intercept arcs that together cover the circle. Therefore

$$
A+C=180^\circ,\qquad B+D=180^\circ.
$$

Conversely, supplementary opposite angles characterize a convex cyclic quadrilateral. Every rectangle is cyclic, but a general parallelogram is not. In a cyclic quadrilateral with consecutive side lengths $a,b,c,d$, Brahmagupta's formula is

$$
K=\sqrt{(s-a)(s-b)(s-c)(s-d)},\qquad s=\frac{a+b+c+d}{2}.
$$

The cyclic hypothesis is essential; four side lengths alone do not determine the area of a general quadrilateral. This formula follows by splitting at a diagonal, applying the cosine rule in both triangles, and using the supplementary opposite angles. It is a useful derived theorem rather than a definition.

## Tangential quadrilaterals

A convex quadrilateral is **tangential** if one circle touches all four sides. Tangent segments drawn from one external vertex to a circle have equal length: each forms a right triangle with the common radius and the common center-to-vertex segment, so Pythagoras gives equal tangent lengths. Label the successive pairs $x,y,z,w$. The four side lengths are $x+y,y+z,z+w,w+x$, proving Pitot's necessary relation $a+c=b+d$.

This length equality alone is not used here as an existence test for an arbitrary supplied quadrilateral. If an incircle of radius $r$ exists, join its center to all vertices. The four triangles each have height $r$, giving $K=rs$, where $s$ is the semiperimeter. A square is both cyclic and tangential. These two words describe different circle relationships.

## Worked example

A rhombus has diagonals $12$ and $16$. Their half-lengths are $6$ and $8$, so each side is $\sqrt{6^2+8^2}=10$. Its area is $12\cdot16/2=96$ and its semiperimeter is $20$. A rhombus has an incircle at the intersection of its angle bisectors, so $r=96/20=24/5$. It is not cyclic: a cyclic parallelogram must have equal supplementary opposite angles, making all angles right, whereas these unequal diagonals exclude a square.

## Practice

1. A trapezoid has bases $7,13$ and height $4$. Find its area and midpoint-segment length.
2. A cyclic quadrilateral has angles $A=72^\circ$ and $B=105^\circ$. Find $C,D$. Can it be a parallelogram?

## Worked answers

1. The mean base is $(7+13)/2=10$. The area is $10\cdot4=40$, and the midpoint-segment length is $10$.
2. Opposite angles are supplementary: $C=108^\circ$ and $D=75^\circ$. A parallelogram would have $A=C$ and $B=D$. Neither equality holds, so this quadrilateral cannot be a parallelogram.
