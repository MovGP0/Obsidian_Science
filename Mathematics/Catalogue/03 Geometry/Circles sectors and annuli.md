---
title: "Circles, sectors, and annuli"
catalogue_ids:
  - "3.1.6"
  - "3.1.6.1"
  - "3.1.6.2"
  - "3.1.6.3"
---

> [!TLDR]
> Circle figures are calculated by dividing a disk into sectors or subtracting simpler regions; radian measure keeps the arc and area formulas consistent.

## The circle and its chords

A circle is the set of points at a fixed positive distance $r$ from a center $O$. The disk includes the interior as well as the circle boundary. A diameter is a chord through $O$ and has length $2r$. The circumference is $2\pi r$ and the disk area is $\pi r^2$. The constant $\pi$ is the circumference-to-diameter ratio for every Euclidean circle.

A perpendicular from the center to a chord bisects the chord. To prove it, join the center to the two endpoints. The two right triangles have equal hypotenuses $r$ and a common perpendicular leg, so their remaining legs are equal. If the chord's distance from $O$ is $d$, its length is $2\sqrt{r^2-d^2}$. This requires $0\le d\le r$. A line farther away than $r$ has no intersection with the circle; at $d=r$ it is tangent.

A tangent is perpendicular to the radius at its contact point. Indeed, the perpendicular foot is the unique nearest point of the line to $O$. A tangent line has just one point at distance $r$, so that point must be the foot. Two tangents from a fixed external point have equal lengths, by the right-triangle argument used in [[Quadrilaterals]].

An inscribed angle is half the central angle that subtends the same arc, provided the central angle uses the arc not containing the inscribed vertex. To obtain the relation, join the center to the vertices and use the equal base angles of the resulting isosceles triangles; subtract cases when the center lies outside the inscribed angle. A useful consequence is Thales' theorem: an angle standing on a diameter is $90^\circ$. Another is equality of angles standing on the same chord on the same side of it.

## Sectors and arcs

Let $\theta$ be a central angle in radians with $0\le\theta\le2\pi$. Its sector is the part of the disk between its two radii and the selected arc. The sector occupies the fraction $\theta/(2\pi)$ of the disk, hence

$$
s=r\theta,\qquad K_{\mathrm{sector}}=\frac12r^2\theta.
$$

The sector perimeter includes two radii as well as the arc: $2r+r\theta$ for a proper sector with distinct bounding radii. At $\theta=2\pi$ the set is the whole disk and the two artificial cut edges are no longer part of its boundary. This boundary case explains why a full-disk perimeter is simply $2\pi r$.

![[catalogue-ch03a-sector-segment.svg|**Fig. C.ch03a.2** A sector contains its center triangle and the circular segment beyond the chord. The annulus is the difference of two concentric disks.]]

For an angle stated in degrees, convert it first, or use $K=\theta_{\mathrm{deg}}\pi r^2/360$. Substitution of $60$ directly into the radian formula produces the wrong result for a $60^\circ$ sector.

## Circular segments

A circular segment is bounded by a chord and one of the two arcs between its endpoints. For a minor arc with $0\le\theta\le\pi$, subtract the isosceles center triangle from the sector:

$$
K_{\mathrm{segment}}=\frac12r^2(\theta-\sin\theta).
$$

The triangle area is $r^2\sin\theta/2$. Bisecting the same triangle gives chord length $c=2r\sin(\theta/2)$ and segment height $h=r(1-\cos(\theta/2))$, measured from chord midpoint to arc midpoint. The latter is also called the sagitta.

For a major segment, use the selected major angle $\pi<\theta<2\pi$. The same area expression works with signed sine, or subtract the complementary minor segment from the full disk. Always say which segment is wanted: the chord alone bounds two regions. At $\theta=\pi$, the segment is a semicircle and the center triangle has zero area.

## Annuli

An annulus is the region between concentric circles with outer radius $R$ and inner radius $r$, where $0\le r<R$. Subtract their disk areas:

$$
K_{\mathrm{annulus}}=\pi(R^2-r^2)=\pi(R-r)(R+r).
$$

For $r>0$, its boundary has two circles with total length $2\pi(R+r)$. Its width is $R-r$, but its area is not $\pi(R-r)^2$; that expression is the area of a different disk. When $r=0$, the region is a disk and its boundary has only the outer circle. An annular sector with selected angle $\theta$ has area $\theta(R^2-r^2)/2$.

## Worked example

Let $r=6$ and $\theta=\pi/3$. The arc length is $2\pi$ and the sector area is $6\pi$. The center triangle has area $18\sin(\pi/3)=9\sqrt3$. Thus the minor segment area is $6\pi-9\sqrt3$. Its chord is $12\sin(\pi/6)=6$, and its height is $6-3\sqrt3$. Each quantity has a different geometric role; a chord is shorter than the corresponding minor arc.

## Practice

1. An annulus has radii $8$ and $5$. Find its area and total boundary length.
2. In a radius-$5$ circle, a chord is distance $3$ from the center. Find its length and the smaller central angle in exact inverse-trigonometric form.

## Worked answers

1. Subtraction gives $K=\pi(64-25)=39\pi$. Both circles contribute to the boundary, so its length is $2\pi(8+5)=26\pi$.
2. Half the chord is $\sqrt{25-9}=4$, so its length is $8$. In the half-triangle, $\cos(\theta/2)=3/5$. Thus $\theta=2\arccos(3/5)$, which lies between $0$ and $\pi$. The inverse cosine chooses the half-angle in $[0,\pi/2]$ as required.
