---
title: "Geometry: a learning route"
catalogue_ids:
  - "3"
---

> [!TLDR]
> Geometry connects shapes with lengths, angles, areas, and volumes; the rules depend on whether the space is flat or curved.

## Start with a model

A drawing suggests a shape. A mathematical model states which properties the shape must have. A point has position but no size. A straight line extends in both directions. A plane is a flat surface with no boundary. These are ideal objects. A thick pencil line can represent a line, but its thickness is not part of the model.

This chapter begins with Euclidean geometry. We assume that through a point outside a line in a plane there is exactly one parallel line. From this assumption we obtain the familiar angle sum of a triangle. We later change the surface to a sphere. On a sphere, the relevant straightest paths are great circles. Two distinct great circles always meet. A spherical triangle can therefore have three right angles without any contradiction: it belongs to a different model.

Do not try to learn every formula at once. First identify the object, the known data, and the quantity required. Then select a theorem whose assumptions match the object. Finally check the answer against the diagram and the allowable range of values.

## Prerequisites and reading order

You need arithmetic with fractions, square roots, and simple equations. [[04.01 Coordinates]] explains how ordered pairs locate points. [[04.04 Angular measure]] and [[04.05 The unit circle]] provide additional practice with radians and trigonometric functions. The lessons here also introduce the specific definitions that they use.

Start with [[Points lines and angles]]. Continue with [[Triangles and symmetry]], [[Quadrilaterals]], [[Polygons and regular figures]], and [[Circles sectors and annuli]]. This route develops a flat-geometry vocabulary and gives elementary proofs based on parallel lines, congruent triangles, and area.

Next read [[Circular and hyperbolic geometry]] and [[Solve plane triangles]]. These articles explain why coordinates on a circle lead to sine and cosine, and how to calculate an unknown triangle. [[Survey coordinates and angles]] then uses coordinate differences and directed angles. It treats a survey as a geometric calculation on an ideal plane or sphere. It does not assume knowledge of instruments or map software.

[[Lines planes and solids]] moves into three-dimensional Euclidean space. [[Geometry on a sphere]], [[Spherical triangle identities]], and [[Solve spherical triangles]] form a separate sequence. Finish the plane-triangle lessons before this sequence. The sphere lessons define their angular sides explicitly; they do not use a plane formula on a curved surface.

The other part of the geometry chapter develops vectors, coordinate equations, transformations, and differential geometry. The existing [[Vectors - Overview]] provides a further route into vector notation. A reader can study the elementary shapes here before taking that route.

## A reusable problem-solving method

Suppose a triangle has sides $5$, $5$, and $6$. The equal sides show that it is isosceles. Draw the perpendicular from their shared vertex to the base. Congruent right triangles divide the base into lengths $3$ and $3$. If $h$ is the height, Pythagoras gives

$$
h^2+3^2=5^2,
\qquad h=4.
$$

The area is half the base times the perpendicular height:

$$
K=\frac12\cdot6\cdot4=12.
$$

This solution uses structure before calculation. It also supplies checks. The height is positive and less than the sloping side. The result would be impossible if the sides were $2$, $2$, and $6$, because the two short sides cannot reach across the base.

Definitions, constructions, and theorems have different roles. A **definition** fixes a meaning, such as a circle being the set of points at a fixed distance from a center. A **construction** produces an object from given data. A **theorem** states a consequence of assumptions. An accurate-looking sketch is useful evidence for a conjecture, but it is not a proof.

## Practice

1. A solution uses $A+B+C=180^\circ$ for three points joined on a sphere. What must be checked before accepting the solution?
2. A triangle has sides $13$, $13$, and $10$. Find its height to the side of length $10$ and its area.

## Worked answers

1. Check the model. The equation is the Euclidean plane angle sum. If the sides are great-circle arcs, the angle sum is greater than $180^\circ$ for an ordinary nondegenerate spherical triangle. A sufficiently small spherical triangle may be approximated by a plane triangle, but the approximation must be stated.
2. The height bisects the base into two lengths of $5$. Thus $h^2=13^2-5^2=169-25=144$, so $h=12$. The area is $K=10\cdot12/2=60$. Both answers follow from a right triangle with sides $5$, $12$, and $13$.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#3. Geometry|the detailed catalogue]].

- [[Points lines and angles|Points, lines, and angles]] — 3.1, 3.1.1, 3.1.1.1, 3.1.1.2, 3.1.1.3, 3.1.1.4, 3.1.1.5.
- [[Circular and hyperbolic geometry|Circular and hyperbolic geometry]] — 3.1.2, 3.1.2.1, 3.1.2.2.
- [[Triangles and symmetry|Triangles and symmetry]] — 3.1.3, 3.1.3.1, 3.1.3.2.
- [[Quadrilaterals|Quadrilaterals]] — 3.1.4, 3.1.4.1, 3.1.4.2, 3.1.4.3, 3.1.4.4, 3.1.4.5, 3.1.4.6, 3.1.4.7.
- [[Polygons and regular figures|Polygons and regular figures]] — 3.1.5, 3.1.5.1, 3.1.5.2, 3.1.5.3.
- [[Circles sectors and annuli|Circles, sectors, and annuli]] — 3.1.6, 3.1.6.1, 3.1.6.2, 3.1.6.3.
- [[Solve plane triangles|Solve plane triangles]] — 3.2, 3.2.1, 3.2.1.1, 3.2.1.2.
- [[Survey coordinates and angles|Survey coordinates and angles]] — 3.2.2, 3.2.2.1, 3.2.2.2, 3.2.2.3.
- [[Lines planes and solids|Lines, planes, and solids]] — 3.3, 3.3.1, 3.3.2, 3.3.3, 3.3.4.
- [[Geometry on a sphere|Geometry on a sphere]] — 3.4, 3.4.1, 3.4.1.1, 3.4.1.2, 3.4.1.3, 3.4.1.4, 3.4.1.5, 3.4.1.6, 3.4.1.7.
- [[Spherical triangle identities|Spherical triangle identities]] — 3.4.2, 3.4.2.1, 3.4.2.2, 3.4.2.3.
- [[Solve spherical triangles|Solve spherical triangles]] — 3.4.3, 3.4.3.1, 3.4.3.2, 3.4.3.3, 3.4.3.4.
- [[Vector calculations and geometric products|Vector calculations and geometric products]] — 3.5, 3.5.1, 3.5.1.1, 3.5.1.2, 3.5.1.3, 3.5.1.4, 3.5.1.5, 3.5.1.8.
- [[Oblique bases and vector equations|Oblique bases and vector equations]] — 3.5.1.6, 3.5.1.7.
- [[Plane coordinates and point constructions|Plane coordinates and point constructions]] — 3.5.2, 3.5.2.1, 3.5.2.2, 3.5.2.3, 3.5.2.4, 3.5.2.5.
- [[Lines circles and conic sections|Lines circles and conic sections]] — 3.5.2.6, 3.5.2.7, 3.5.2.8, 3.5.2.9, 3.5.2.10, 3.5.2.11.
- [[Space coordinates and rotation conventions|Space coordinates and rotation conventions]] — 3.5.3, 3.5.3.1, 3.5.3.2, 3.5.3.3, 3.5.3.4, 3.5.3.5, 3.5.3.6, 3.5.3.7.
- [[Lines planes and intersections in space|Lines planes and intersections in space]] — 3.5.3.8, 3.5.3.9, 3.5.3.10, 3.5.3.11, 3.5.3.12.
- [[Quadric surfaces and their classification|Quadric surfaces and their classification]] — 3.5.3.13, 3.5.3.14.
- [[Affine transformations and homogeneous coordinates|Affine transformations and homogeneous coordinates]] — 3.5.4, 3.5.4.1, 3.5.4.2, 3.5.4.3, 3.5.4.4, 3.5.4.5, 3.5.4.6.
- [[Parallel and perspective projections|Parallel and perspective projections]] — 3.5.5, 3.5.5.1, 3.5.5.2, 3.5.5.3, 3.5.5.4, 3.5.5.5, 3.5.5.6, 3.5.5.7.
- [[Plane curves tangents and curvature|Plane curves tangents and curvature]] — 3.6, 3.6.1, 3.6.1.1, 3.6.1.2, 3.6.1.3, 3.6.1.4.
- [[Evolutes involutes and envelopes|Evolutes involutes and envelopes]] — 3.6.1.5, 3.6.1.6.
- [[Space curves and moving frames|Space curves and moving frames]] — 3.6.2, 3.6.2.1, 3.6.2.2, 3.6.2.3.
- [[Surface geometry curvature and geodesics|Surface geometry curvature and geodesics]] — 3.6.3, 3.6.3.1, 3.6.3.2, 3.6.3.3, 3.6.3.4, 3.6.3.5, 3.6.3.6.
<!-- catalogue-complete-lesson-index:end -->
