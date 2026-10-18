---
title: "Circular and hyperbolic geometry"
catalogue_ids:
  - "3.1.2"
  - "3.1.2.1"
  - "3.1.2.2"
---

> [!TLDR]
> Circular functions give coordinates on a unit circle; hyperbolic functions give coordinates on a unit hyperbola with an area-based parameter.

## Coordinates on a circle

The unit circle is the set $x^2+y^2=1$. Start at $(1,0)$ and turn counterclockwise through $t$ radians. Define the coordinates of the resulting point to be $(\cos t,\sin t)$. This definition works beyond acute angles and beyond a single turn. The equation of the circle immediately gives

$$
\cos^2t+\sin^2t=1.
$$

For an acute angle in a right triangle, divide all lengths by the hypotenuse. The endpoint of the scaled hypotenuse lies on the unit circle. Hence cosine is adjacent leg divided by hypotenuse, and sine is opposite leg divided by hypotenuse. Similar triangles show why these ratios depend on the angle rather than the size of the triangle.

Define $\tan t=\sin t/\cos t$ where $\cos t\ne0$. It is the slope of the radius line. The reciprocal functions are $\sec t=1/\cos t$, $\csc t=1/\sin t$, and $\cot t=\cos t/\sin t$ where their denominators are nonzero. Their excluded points are part of the definition, not exceptions to ignore during calculation.

The circle repeats after $2\pi$ radians, so sine and cosine are periodic. Reflection in the horizontal axis shows that cosine is even and sine is odd. Their ranges are $[-1,1]$. [[03.05 Trigonometric functions]] develops these properties as properties of functions.

## The sector-area viewpoint

A circular sector of unit radius and angle $t$, for $0\le t\le2\pi$, occupies the fraction $t/(2\pi)$ of a disk. Its area is therefore $t/2$. Thus the same parameter can be described either as an angle, as arc length on the unit circle, or as twice a sector area. Signed sector area extends this interpretation to clockwise motion. For multiple turns, count the area with repetition rather than taking the area of the final set alone.

The area interpretation suggests an analogous definition on a different curve. The right branch of the **unit hyperbola** satisfies

$$
x^2-y^2=1,\qquad x>0.
$$

It passes through $(1,0)$ and does not close up. Take the region bounded by the segment from the origin to $(1,0)$, the hyperbola arc to a point $P$, and the segment from $P$ back to the origin. Define $u$ to be twice its signed area. The area is positive above the horizontal axis and negative below it. Define $P=(\cosh u,\sinh u)$.

![[catalogue-ch03a-circle-hyperbola.svg|**Fig. C.ch03a.1** A circle and a hyperbola use twice the shaded sector area as a parameter. On the hyperbola this parameter is not the ordinary angle of the ray.]]

The two shaded regions in the figure serve the same defining role, but the curves obey different equations. In particular,

$$
\cosh^2u-\sinh^2u=1.
$$

The minus sign follows from the hyperbola. It is not a change in the Pythagorean theorem for ordinary triangles.

## Calculation and geometric meaning

The geometric functions have the algebraic forms

$$
\cosh u=\frac{e^u+e^{-u}}2,
\qquad \sinh u=\frac{e^u-e^{-u}}2,
\qquad \tanh u=\frac{\sinh u}{\cosh u}.
$$

Here $e^u$ is the exponential function, and $\ln$ is its inverse; see [[03.04 Exponential and logarithmic functions]]. These formulas parameterize the right branch because subtracting the two squared expressions gives $1$ and $\cosh u>0$. They also agree with the sector-area definition. A calculus check uses $x=\cosh u$, $y=\sinh u$ and $dA=(x\,dy-y\,dx)/2$: the derivatives give $dA=du/2$, and both areas are zero at $u=0$. This check can be deferred until you learn differentiation; the geometric area is the definition used above.

Unlike sine and cosine, these functions are not periodic. The function $\cosh u$ is even with range $[1,\infty)$, and $\sinh u$ is odd with range all real numbers. Since $x>|y|$ on this branch, $-1<\tanh u<1$. The ordinary ray angle $\theta$ instead satisfies $\tan\theta=\tanh u$, so it is generally different from $u$.

## Worked example

Put $u=\ln2$. Then $e^u=2$ and $e^{-u}=1/2$, giving

$$
\cosh u=\frac54,\qquad \sinh u=\frac34,\qquad \tanh u=\frac35.
$$

Check the curve: $(5/4)^2-(3/4)^2=1$. The signed sector area is $(\ln2)/2$. The ray has ordinary angle $\arctan(3/5)$, approximately $0.5404$ radians, whereas $u\approx0.6931$. This makes the distinction numerical as well as geometric.

## Practice

1. At $t=5\pi/6$, find $\cos t$, $\sin t$, and $\tan t$. State the circle quadrant.
2. For $u=\ln3$, find the hyperbola coordinates and verify its equation. Find the sector area.

## Worked answers

1. The reference angle is $\pi/6$ and the point lies in quadrant II. Thus $\cos t=-\sqrt3/2$, $\sin t=1/2$, and $\tan t=-1/\sqrt3$. The squared coordinates sum to $1$.
2. The exponential values are $3$ and $1/3$. Hence $x=5/3$, $y=4/3$, and $x^2-y^2=(25-16)/9=1$. Twice the area is the parameter, so the sector area is $(\ln3)/2$.

## Reference

[Ohio State Ximera, unit hyperbola](https://ximera.osu.edu/csccmathematics/precalculus2/precalculus2/hyperbolicFunctions/unitHyperbola) explains the area parameter used in the geometric definition.
