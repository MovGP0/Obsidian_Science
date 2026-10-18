---
title: "Grid and alignment nomograms"
catalogue_ids:
  - "2.19"
  - "2.19.1"
  - "2.19.2"
  - "2.19.3"
  - "2.19.3.1"
  - "2.19.3.2"
  - "2.19.3.3"
  - "2.19.4"
---

> [!TLDR]
> A nomogram encodes an equation in labelled curves or scales so that intersections or a straightedge give an approximate answer.

## Calculation by geometry

A **nomogram** is a diagram designed to calculate with a particular equation. You enter known numbers, follow a stated geometric rule, and read an unknown number. The diagram trades numerical precision for a visible relation between inputs and outputs. Its printed size, line thickness, and scale spacing limit the precision.

This lesson needs school coordinate geometry and [[Scales and transformed graph paper]]. Every construction below includes its equation, so you can check the graphical result by substitution. The historical classification of the three alignment arrangements follows [Bronshtein and coauthors, section 2.19](https://djvu.online/file/GdI2fptBUdLpJ); the examples below use explicit coordinates and elementary line equations.

## What a nomogram does

For a relation $F(u,v,w)=0$, two known values may determine the third. A chart is useful only over its stated ranges. Some equations have several solutions; a diagram showing one branch does not remove the others. Read labels, not page distances, because the scales may be nonlinear. There are two main procedures: find an intersection on a grid, or align three scale points with a straightedge.

## Grid nomograms

For $w=uv$ with positive inputs, draw ordinary $u,v$ axes. Add curves $uv=c$ for selected output labels $c$. These curves are hyperbolas $v=c/u$. Enter $u$ and $v$ on the axes, find their point of intersection, and read the output curve through that point. If the point falls between curves, estimate its label, then report only justified digits.

![[catalogue-ch02c-grid-nomogram.svg|**Fig. C.ch02c.2** In the grid nomogram for w = uv, the point u = 3, v = 2 lies on the output curve labelled 6.]]

The dashed guides select one point, while the curved output lines encode the multiplication rule. Replacing the rule by $w=u+v$ would replace those curves by straight lines $v=c-u$. A grid nomogram can therefore be built by drawing level sets of an already known function.

## Alignment nomograms

An alignment chart has a separate labelled scale for each variable. Each value corresponds to a point, possibly on a curved scale. The design ensures that points representing a solution lie on one straight line. Place a straightedge through two known points and read where it meets the third scale.

The requirement is collinearity, not a particular visual arrangement. You can check it without advanced mathematics: write the line through the first two points, then substitute the coordinates of the third. A useful chart avoids nearly parallel intersections because a small line-placement error can then produce a large reading error.

## Three straight scales through one point

Here all three scale-supporting lines pass through a common point. As an explicit construction, use points $P=(a,0)$, $Q=(0,b)$, and $R=(f,f)$, with $a,b>0$. The scales lie on the horizontal axis, vertical axis, and diagonal, which meet at the origin. The line through $P,Q$ is

$$
\frac{x}{a}+\frac{y}{b}=1.
$$

Putting $R$ on it gives $f/a+f/b=1$, or $1/f=1/a+1/b$. Thus joining $a=3$ and $b=6$ crosses the diagonal scale at $f=2$. The diagonal labels give the coordinate $f$, not its geometric distance $\sqrt2f$ from the origin. The equation supplies that scale calibration.

## Two parallel scales and one inclined scale

Put the first two scales on $x=0$ and $x=1$. Let the first point be $P=(0,u)$ and the second $Q=(1,-v)$, with $u,v>0$. Reverse the second scale's numerical direction as indicated by its negative coordinate. Put the third scale on the horizontal line $y=0$, which crosses both vertical supports.

The line through $P,Q$ is $y=u-(u+v)x$. Its intersection with the third support is $R=(t,0)$ where

$$
t=\frac{u}{u+v}.
$$

This is the required two-parallel-and-one-inclined arrangement. Here inclined means nonparallel to the other two; the third line can be horizontal after a coordinate choice. For $u=3,v=1$, the reading is $t=3/4$. Both inputs can be scaled by a common positive factor without changing the reading, as the formula predicts.

![[catalogue-ch02c-alignment-nomogram.svg|**Fig. C.ch02c.3** Join u = 3 on the left scale to v = 1 on the reversed right scale. The line crosses the horizontal scale at t = 0.75.]]

In this construction $0<t<1$. A line that misses this interval indicates an input or sign outside the stated positive-input design. The two vertical scales must use the specified common coordinate spacing for the derived formula to apply.

## Two parallel scales and one curved scale

A curved third scale can encode a more complex equation. Consider the reduced cubic

$$
z^3+pz+q=0.
$$

Place $q$ at $P=(0,q)$ and $p$ at $Q=(1,p)$. Build the third scale by placing each permitted $z\ne-1$ at

$$
R(z)=\left(\frac{z}{1+z},-\frac{z^3}{1+z}\right).
$$

To verify the design, the line through $P,Q$ has height $(1-X)q+Xp$ at horizontal coordinate $X$. At $X=z/(1+z)$, its height is $(q+pz)/(1+z)$. Equating this to the height of $R(z)$ gives $q+pz=-z^3$, exactly the cubic. Read the label $z$ at the intersection, not the coordinate $X$.

For $p=-1,q=-6$, joining $(0,-6)$ to $(1,-1)$ passes through $R(2)=(2/3,-8/3)$. Substitution confirms $2^3-2-6=0$. A positive-$z$ scale only finds positive roots. The excluded value $z=-1$ must be checked directly in the cubic, not declared impossible. Several intersections can occur for a cubic with several real roots.

## More than three variables

Split an equation into three-variable relations using intermediate values. For

$$
w=\frac{(a+b)c}{d},\qquad d\ne0,
$$

use $s=a+b$, $t=sc$, and $w=t/d$. Each relation involves three variables and can have its own grid chart. Transfer the output $s$ from the first chart into the second, then transfer $t$ into the third. Each intermediate appears in two relations, so no extra independent input is introduced. For $a=2,b=3,c=4,d=5$, the readings are $s=5,t=20,w=4$.

Repeated graphical readings accumulate error. Keep a few extra estimated digits during transfer, and round the final answer to the chart's actual resolution. Always state the sequence of readings; a page containing several grids without a reading route is not a complete calculation tool.

## Practice

1. In the concurrent-scale construction, join $a=4$ and $b=12$. What is $f$?
2. In the parallel-scale ratio chart, $u=2$ and the third-scale reading is $t=0.4$. Find the second input $v$.

## Worked answers

1. The equation gives $1/f=1/4+1/12=1/3$, so $f=3$. Its point is $(3,3)$, and $3/4+3/12=1$ verifies collinearity.
2. From $0.4=2/(2+v)$, multiply to get $0.8+0.4v=2$. Hence $v=3$. The line from $(0,2)$ to $(1,-3)$ has equation $y=2-5x$ and crosses $y=0$ at $x=0.4$ as required.
