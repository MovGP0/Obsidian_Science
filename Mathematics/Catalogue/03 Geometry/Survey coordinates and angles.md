---
title: "Survey coordinates and angles"
catalogue_ids:
  - "3.2.2"
  - "3.2.2.1"
  - "3.2.2.2"
  - "3.2.2.3"
---

> [!TLDR]
> Survey calculations convert directed angles and distances into coordinates; a plane grid, a sphere, and an ellipsoid use different definitions.

## Choose a coordinate model

A local plane grid uses two perpendicular axes, here east coordinate $E$ and north coordinate $N$. The origin and axis directions must be fixed. A coordinate pair is an address in this grid, not a distance and an angle. Coordinate differences give the joining segment: for $P,Q$, write $\Delta E=E_Q-E_P$ and $\Delta N=N_Q-N_P$.

A spherical model instead locates a point by latitude $\varphi$ and longitude $\lambda$. Latitude is the angle above the equatorial plane, in $[-90^\circ,90^\circ]$. Longitude is an angle about the polar axis, taken modulo $360^\circ$ from a stated reference meridian. On a sphere of radius $R$,

$$
(x,y,z)=(R\cos\varphi\cos\lambda,
R\cos\varphi\sin\lambda,R\sin\varphi).
$$

Thus latitude is not the same as colatitude, which is $90^\circ-\varphi$. Longitude is undefined at a pole because all meridians meet there. [[Geometry on a sphere]] develops this model without assuming a real planetary surface.

In geodesy an ellipsoid is often used rather than a sphere. On an ellipsoid, **geodetic latitude** is the angle its surface normal makes with the equatorial plane. **Geocentric latitude** uses the radius from the center. They generally differ. Geodetic height is measured along that ellipsoid normal from the reference surface. A datum specifies the ellipsoid and its placement; coordinates from different datums cannot be compared as if they were one grid. This article calculates only the stated ideal plane and sphere cases.

## Directed horizontal and vertical angles

Define **azimuth** $\alpha$ clockwise from north, modulo $360^\circ$. In contrast, a standard mathematical polar angle is counterclockwise from the positive horizontal axis. They are related by $\theta=90^\circ-\alpha$ modulo $360^\circ$ when the horizontal axis points east. Never mix these conventions in the same coordinate equation.

With horizontal distance $d\ge0$ and azimuth $\alpha$,

$$
\Delta E=d\sin\alpha,\qquad \Delta N=d\cos\alpha.
$$

North therefore gives $(0,d)$, east gives $(d,0)$, and southwest gives two negative increments. For the inverse problem, $d=\sqrt{\Delta E^2+\Delta N^2}$. Use the two-argument inverse tangent $\alpha=\operatorname{atan2}(\Delta E,\Delta N)$ and reduce it to $[0,360^\circ)$. Here $\operatorname{atan2}(y,x)$ means the angle whose sine and cosine have the signs of $y,x$. It chooses the quadrant; a single $\arctan(\Delta E/\Delta N)$ does not. Coincident points have $d=0$ and no joining azimuth.

Define elevation $\varepsilon$ positive above the local horizontal, between $-90^\circ$ and $90^\circ$. The zenith angle is $z=90^\circ-\varepsilon$, measured downward from the upward vertical. For a sloping segment of length $s$, its horizontal projection is $d=s\cos\varepsilon=s\sin z$, and vertical increment is $\Delta H=s\sin\varepsilon=s\cos z$. These formulas describe Euclidean right triangles, without corrections for instruments or atmosphere.

Angles may be written in degrees, minutes, and seconds, where $1^\circ=60'$ and $1'=60''$. Thus $24^\circ30'36''=24+30/60+36/3600=24.51^\circ$. The whole sexagesimal magnitude receives the sign for a negative angle. A full turn is also $400$ gon, so $1$ gon is $0.9^\circ$.

## Worked example: a coordinate traverse

Start at $P=(100,200)$ in $(E,N)$ order. Move distance $20$ at azimuth $30^\circ$. The increment is $(10,10\sqrt3)$, so

$$
Q=(110,200+10\sqrt3).
$$

Then move distance $10$ at azimuth $120^\circ$. Its increment is $(5\sqrt3,-5)$, giving $S=(110+5\sqrt3,195+10\sqrt3)$. Every step has its own direction and must be resolved before adding. Adding the distances $20+10$ gives path length, not the direct distance $PS$.

For a closed polygonal traverse, the east increments and north increments must each sum to zero. A nonzero closure residual reveals inconsistent data or numerical rounding. It does not identify which observation is wrong. Any adjustment requires an error model; it is not obtained by declaring the final endpoint correct.

## Triangulation and distance on a sphere

To locate an inaccessible point $T$ from a measured baseline $PQ=L$, measure interior base angles $P=\beta$ and $Q=\gamma$. If they are positive with $\beta+\gamma<180^\circ$, the sine rule gives $PT=L\sin\gamma/\sin(\beta+\gamma)$. A nearly zero third angle makes this calculation sensitive to small angular errors. For a spherical surface, use a central angular separation $\sigma$ from spherical trigonometry and arc length $R\sigma$, not a plane-grid distance between latitude-longitude numbers.

## Practice

1. A displacement has $\Delta E=-3$, $\Delta N=-4$. Find its distance and azimuth.
2. A sloping segment has length $10$ and elevation $30^\circ$. Find its horizontal and vertical projections. A separate baseline has length $12$ with two base angles $45^\circ$; find either equal joining side.

## Worked answers

1. The distance is $\sqrt{9+16}=5$. The direction is southwest. The acute departure west of south is $\arctan(3/4)\approx36.8699^\circ$, so azimuth is $216.8699^\circ$. The negative increments confirm the quadrant.
2. The projections are $10\cos30^\circ=5\sqrt3$ and $10\sin30^\circ=5$. In the separate triangle the third angle is $90^\circ$; each equal side is $12\sin45^\circ/\sin90^\circ=6\sqrt2$.

## References

[MIT, Modern Navigation lecture 4](https://ocw.mit.edu/courses/12-215-modern-navigation-fall-2006/resources/12_215_lec04/) develops spherical angle and bearing calculations. The conventions above are stated explicitly so the plane examples require no geodesy background.

[NOAA, Coordinate Systems Used in Geodesy: Basic Definitions](https://geodesy.noaa.gov/CORS/Articles/SolerHothemJSE.pdf) defines geodetic latitude and ellipsoidal coordinates.
