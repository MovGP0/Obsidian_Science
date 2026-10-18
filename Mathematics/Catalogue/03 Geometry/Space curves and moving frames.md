---
title: "Space curves and moving frames"
catalogue_ids:
  - "3.6.2"
  - "3.6.2.1"
  - "3.6.2.2"
  - "3.6.2.3"
---

> [!TLDR]
> A regular space curve has a tangent; where it bends, a normal and binormal form a moving frame described by curvature and torsion.

## A curve and its local directions

Read [[Plane curves tangents and curvature]] for derivatives and arc length, and [[Vector calculations and geometric products]] for dot and cross products. A three-dimensional curve is $r(t)=(x(t),y(t),z(t))$ on an interval. It is regular when $r'\ne0$. Its parameter need not be arc length. Define $v=\|r'\|$, $ds/dt=v$, and the unit tangent $T=r'/v$.

Because $T\cdot T=1$, differentiation with respect to $s$ gives $2T\cdot(dT/ds)=0$. Thus the tangent's change is perpendicular to the tangent. Define curvature $\kappa=\|dT/ds\|\ge0$. When $\kappa>0$, define the principal normal $N=(dT/ds)/\kappa$, then the binormal $B=T\times N$. These three mutually perpendicular unit vectors are the **moving trihedron**, or Frenet frame.

The tangent and normal span the osculating plane, which approximates how the curve bends. Its normal is $B$. The normal and binormal span the normal plane; its normal is $T$. The tangent and binormal span the rectifying plane; its normal is $N$. Each plane passes through the point on the curve, not necessarily through the origin.

## Curvature and torsion formulas

For a general parameter, the computable formulas are

$$
\kappa=\frac{\|r'\times r''\|}{\|r'\|^3},\qquad
\tau=\frac{(r'\times r'')\cdot r'''}{\|r'\times r''\|^2}.
$$

Curvature requires two derivatives and a nonzero first derivative. The torsion formula requires three derivatives and $r'\times r''\ne0$. Torsion records the rotation of the osculating plane. A planar regular curve with nonzero curvature has zero torsion, since $r',r'',r'''$ remain in its plane and their triple product vanishes. At zero curvature the ordinary Frenet normal and torsion are not defined, even if the curve is smooth.

This article defines torsion by $dB/ds=-\tau N$. Some references use its negative. For example [Tumarkin's space-curve notes](https://www.maths.dur.ac.uk/users/pavel.tumarkin/past/fall16/DG/outline_term1_4.pdf) explicitly use the opposite convention. The convention must change both the torsion formula and the frame equations together.

## Derive the moving-frame equations

The definition gives $T'=\kappa N$, where primes in this paragraph mean $d/ds$. The derivative $B'$ is perpendicular to $B$ because $B$ is unit, and perpendicular to $T$ because differentiating $B\cdot T=0$ gives $B'\cdot T+B\cdot\kappa N=0$. Thus $B'$ is a multiple of $N$; define that multiple as $-\tau$. Next differentiate $N\cdot T=0$ to get $N'\cdot T=-\kappa$, and $N\cdot B=0$ to get $N'\cdot B=\tau$. Hence

$$
\frac{dT}{ds}=\kappa N,\qquad
\frac{dN}{ds}=-\kappa T+\tau B,\qquad
\frac{dB}{ds}=-\tau N.
$$

These are the Frenet–Serret equations. They explain how curvature and torsion determine the changing local directions. A deeper existence theorem says smooth functions $\kappa(s)>0$ and $\tau(s)$ determine a space curve up to an initial position and a positively oriented rigid rotation. The differential-equation existence proof is beyond this introduction; the frame gives its geometric meaning.

## Worked example: a circular helix

Let $r(t)=(a\cos t,a\sin t,bt)$ with $a>0$ and real $b$. Differentiation gives

$$
r'=(-a\sin t,a\cos t,b),\quad
r''=(-a\cos t,-a\sin t,0),\quad
r'''=(a\sin t,-a\cos t,0).
$$

The rate is $v=\sqrt{a^2+b^2}$, and

$$
r'\times r''=(ab\sin t,-ab\cos t,a^2).
$$

Its length is $a\sqrt{a^2+b^2}$. The triple product with $r'''$ is $a^2b$. Therefore

$$
\kappa=\frac{a}{a^2+b^2},\qquad
\tau=\frac{b}{a^2+b^2}.
$$

For $a=2,b=1$, these are $2/5$ and $1/5$. At $t=0$ the point is $(2,0,0)$, the tangent is $(0,2,1)/\sqrt5$, the principal normal is $(-1,0,0)$, and the binormal is $(0,-1,2)/\sqrt5$. Direct dot products are zero and all lengths are one. The osculating plane has equation $-y+2z=0$.

When $b=0$, the helix becomes a circle, its torsion vanishes, and curvature becomes $1/a$. When $a$ tends to zero with $b\ne0$, the trace becomes a line. The frame formula at $a=0$ fails because there is no preferred principal normal. This is a change of geometric type, not a reason to divide by zero.

## Practice

1. Find curvature and torsion for $r(t)=(\cos t,\sin t,0)$.
2. For $r(t)=(t,0,0)$, identify which Frenet quantities exist.

## Worked answers

1. The first derivative has length one and $r'\times r''=(0,0,1)$. Curvature is $1$. The third derivative lies in the $xy$-plane, so the triple product and torsion are zero.
2. The curve is regular and $T=(1,0,0)$. Its tangent is constant, so curvature is zero. The principal normal formula divides by zero, and the standard binormal and torsion are not defined. One can choose auxiliary perpendicular directions, but they are not the Frenet frame.
