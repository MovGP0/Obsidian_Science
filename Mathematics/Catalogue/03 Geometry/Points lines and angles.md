---
title: "Points, lines, and angles"
catalogue_ids:
  - "3.1"
  - "3.1.1"
  - "3.1.1.1"
  - "3.1.1.2"
  - "3.1.1.3"
  - "3.1.1.4"
  - "3.1.1.5"
---

> [!TLDR]
> Plane geometry starts with points and straight lines; angle relations let you calculate unknown turns without measuring a drawing.

## Points, lines, rays, and segments

Work in a Euclidean plane. A **point** specifies a location. Two distinct points $A$ and $B$ determine a unique **line**, which continues without end in both directions. A **ray** starts at $A$, passes through $B$, and continues in that direction. A **segment** $AB$ contains its two endpoints and the points between them. Its length, also written $AB$ when the meaning is clear, is nonnegative.

Three points are **collinear** if one line contains all three. Two different lines in a plane either intersect in exactly one point or are parallel. Parallel lines do not meet. This last statement concerns coplanar lines: lines in three-dimensional space can also be skew, as [[Lines planes and solids]] explains.

Geometry uses exact conditions. A segment that looks horizontal need not be horizontal in its specified coordinates. If $A=(1,2)$ and $B=(5,5)$, its horizontal and vertical changes are $4$ and $3$. Pythagoras gives $AB=\sqrt{4^2+3^2}=5$. Coordinates convert the question into arithmetic; they do not alter the segment.

## Angles and their measures

Two rays with the same starting point form an **angle**. Their starting point is the vertex. Unless a problem says otherwise, an interior angle means the smaller, nonnegative turn, between $0$ and $180^\circ$. A directed angle records a turn with a sign: counterclockwise is positive and clockwise is negative in the usual plane convention. A reflex angle is greater than $180^\circ$ and less than $360^\circ$.

A full turn is $360^\circ$. A right angle is $90^\circ$ and a straight angle is $180^\circ$. Acute angles lie strictly between $0$ and $90^\circ$; obtuse angles lie strictly between $90^\circ$ and $180^\circ$. Complementary angles sum to $90^\circ$. Supplementary angles sum to $180^\circ$.

Radians measure a turn by arc length divided by radius:

$$
\theta=\frac{s}{r},\qquad r>0.
$$

The circumference $2\pi r$ therefore corresponds to $2\pi$ radians, regardless of the circle's radius. It follows that

$$
180^\circ=\pi\text{ radians},
\qquad \theta_{\mathrm{rad}}=\frac\pi{180}\theta_{\mathrm{deg}}.
$$

For example, $135^\circ=3\pi/4$ radians, and $5\pi/6$ radians is $150^\circ$. The degree symbol distinguishes a degree measure from a bare real number used as a radian input.

## Intersecting lines

When two lines cross, adjacent angles form a straight angle. If one angle is $\alpha$, each adjacent angle is $180^\circ-\alpha$. The angle opposite the first is again $\alpha$, because subtracting the same adjacent angle from $180^\circ$ gives the same result. These opposite pairs are called **vertically opposite angles**.

This is a proof from angle addition. It does not depend on how symmetric the drawing appears. With an angle of $38^\circ$, the four angles around the intersection are $38^\circ$, $142^\circ$, $38^\circ$, and $142^\circ$. Their sum is $360^\circ$, as required for one complete turn.

## Parallel lines and a transversal

A **transversal** is a line that cuts two other lines. If the two cut lines are parallel, the corresponding angles are equal. Alternate interior angles are equal, and interior angles on the same side of the transversal are supplementary.

Corresponding angles occupy matching positions at the two crossings. Alternate interior angles lie between the parallels and on opposite sides of the transversal. Same-side interior angles lie between the parallels and on the same side of the transversal. These descriptions identify the pairs before any equation is used. In Euclidean geometry the corresponding-angle equality is equivalent to the parallel-line property. The other two relations then follow from vertically opposite and straight angles.

Conversely, if a transversal makes equal alternate interior angles with two lines, the lines are parallel. An equality at arbitrary positions is insufficient: the angle pair must be one of the specified pairs.

## Worked example: establish an angle equation

Two parallel lines meet a transversal. A pair of alternate interior angles is labeled $(3x+10)^\circ$ and $(5x-30)^\circ$. Equal angles give $3x+10=5x-30$. Subtract $3x$ and add $30$ to obtain $40=2x$, so $x=20$. Each labeled angle is $70^\circ$. Its adjacent angle is $110^\circ$. In radians these are $7\pi/18$ and $11\pi/18$, whose sum is $\pi$.

If the lines had not been stated or proved parallel, the first equality would not be justified. Always record the geometric reason for an equation.

## Practice

1. Two lines intersect. One angle is $(2x+5)^\circ$ and an adjacent angle is $(5x-14)^\circ$. Find all four angles.
2. A circular arc has length $7\pi/3$ on a circle of radius $4$. Find its central angle in radians and degrees.

## Worked answers

1. Adjacent angles sum to $180^\circ$, so $2x+5+5x-14=180$. Thus $7x=189$ and $x=27$. The angles are $59^\circ$ and $121^\circ$, repeated in vertically opposite pairs. The four sum to $360^\circ$.
2. Divide arc length by radius: $\theta=(7\pi/3)/4=7\pi/12$. Multiply by $180/\pi$ to obtain $105^\circ$. Multiplying radians by the radius returns the given arc length.
