---
title: "Cycloids and trochoids"
catalogue_ids:
  - "2.13"
  - "2.13.1"
  - "2.13.2"
---

> [!TLDR]
> A cycloid combines the forward displacement of a rolling circle with the rotation of a marked point on its rim.

## Prerequisite route

Use [[03.05 Trigonometric functions]] for radians, sine, and cosine. A parametric curve assigns two coordinates to each parameter: $(x(t),y(t))$. Here $t$ is an angle label. The construction is purely geometric; no assumptions about forces or speed are needed. Set a circle radius $a>0$ and draw a horizontal baseline $y=0$.

## Rolling-circle curves

A circle rolls **without slipping** along a straight line if the distance travelled by its centre along the line equals the length of the circular arc that has turned past the contact point. A rotation by $t$ radians has arc length $at$. Thus the circle's centre is

$$
C(t)=(at,a).
$$

At $t=0$, place a marked point directly below the centre. Let its distance from the centre be $d\geq0$. Clockwise rotation by $t$ turns the initial offset $(0,-d)$ into $(-d\sin t,-d\cos t)$. Adding the centre coordinate gives the **trochoid** family

$$
x(t)=at-d\sin t,\qquad y(t)=a-d\cos t,
\qquad t\in\mathbb R.
$$

The same parameter controls translation and rotation. If those were independent, the point could trace a different curve. These definitions and parameter conventions agree with [MacTutor's cycloid entry](https://mathshistory.st-andrews.ac.uk/Curves/Cycloid/).

## Ordinary cycloid

When the point is on the rim, $d=a$, and

$$
x=a(t-\sin t),\qquad y=a(1-\cos t).
$$

The interval $0\leq t\leq2\pi$ traces one arch. It starts at $(0,0)$, reaches $(\pi a,2a)$ at $t=\pi$, and ends at $(2\pi a,0)$. The width is $2\pi a$, exactly one circumference of the rolling circle. Every later arch is a horizontal translation: $x(t+2\pi)=x(t)+2\pi a$ and $y(t+2\pi)=y(t)$.

At the baseline contacts the curve has cusps. There the forward movement of the centre and the backward part of the point's rotation cancel to first order. Away from the contacts, the point moves forward, and one arch has a single height at each horizontal position. One can check this using the derivative $dx/dt=a(1-\cos t)\geq0$, but the geometric rolling construction can be used before learning derivatives. The curve is not a circular arc; its height and horizontal coordinate use different expressions.

## Curtate and prolate trochoids

If $0<d<a$, the point lies inside the rim and the trochoid is **curtate**. Its height remains between $a-d>0$ and $a+d$. It therefore never reaches the baseline. It has smooth low points instead of cusps. Moreover $dx/dt=a-d\cos t\geq a-d>0$, so it never reverses horizontally.

If $d>a$, the point lies outside the rim and the trochoid is **prolate**. Its lowest height is $a-d<0$. Near $t=0$ its horizontal derivative is $a-d<0$, while at $t=\pi$ it is $a+d>0$. The change in horizontal direction produces loops near the baseline. Saying only that a curve goes below the axis is not a definition of prolate: the condition is the marked-point distance $d>a$ in the rolling construction.

The degenerate case $d=0$ is the straight centre-line $y=a$, not a wavy trochoid. For any $d$, the vertical range is $[a-d,a+d]$. The horizontal displacement per full revolution remains $2\pi a$ because the sine term repeats. Changing $d$ changes the trace, but it does not change the rolling circle's circumference.

![[catalogue-ch02b-trochoids.svg|**Fig. C.ch02b.5** The same circle radius a = 1 gives rounded curtate arches, cusped ordinary arches, or prolate loops as the marked-point distance d changes.]]

The separate panels in Fig. C.ch02b.5 use the same horizontal scale. Compare their repeating width rather than treating the width of a single visible loop as one revolution. A plot must retain the order of increasing $t$: sorting points by $x$ would destroy the prolate loop.

## Worked example: obtain a point from its two parts

For $a=2$, $d=1$, and $t=\pi/2$, the centre is $(\pi,2)$. The rotated offset is $(-1,0)$. Thus the marked point is $(\pi-1,2)$. This is a curtate trochoid since $1<2$. Its vertical range is $[1,3]$ and its repetition width is $4\pi$. At $t=5\pi/2$ it has coordinates $(5\pi-1,2)$, which differ from the first point by exactly $(4\pi,0)$.

For the ordinary cycloid with the same $a=2$, replace $d$ by $2$. The point at $\pi/2$ becomes $(\pi-2,2)$. This change affects the rotation offset, while the centre stays in the same place. Separating the centre and offset is a reliable way to derive or check every formula.

## Common mistakes

Use radians in the formula $at$. Replacing $t$ by a degree value without conversion gives a wrong translation. Keep $a$ as the rolling radius and $d$ as the point distance; they coincide only for the ordinary cycloid. Do not confuse an ordinary cycloid with an epicycloid, whose circle rolls around a fixed circle rather than along a straight line. That construction is taught in [[Epicycloids and hypocycloids]].

## Practice

1. A trochoid has $a=3$ and $d=5$. Find its vertical range, classify it, and calculate its point at $t=\pi$.
2. An ordinary cycloid has one-arch width $10\pi$. Find its radius and the top of the first arch.

## Worked answers

1. Its range is $[3-5,3+5]=[-2,8]$. Since $d>a$, it is prolate. At $t=\pi$, sine is zero and cosine is $-1$, so the point is $(3\pi,8)$.
2. The width equation is $2\pi a=10\pi$, so $a=5$. The top occurs at $t=\pi$ and is $(5\pi,10)$. The arch begins at $(0,0)$ and ends at $(10\pi,0)$, which checks the width.
