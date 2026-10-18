---
title: "Epicycloids and hypocycloids"
catalogue_ids:
  - "2.13.3"
  - "2.13.4"
  - "2.13.5"
---

> [!TLDR]
> Outside and inside circle rolling give epicycloids and hypocycloids; moving the marked point off the rim gives trochoids.

## Prerequisite route

Begin with [[Cycloids and trochoids]] for the centre-plus-offset method. This article uses circle geometry, radians, and trigonometric identities from [[04.06 Trigonometric identities]]. Let $R>0$ be the fixed-circle radius and $r>0$ the rolling-circle radius. The marked point is a distance $d\geq0$ from the rolling centre. The angle $t$ labels the direction from the fixed centre to the rolling centre.

## Epicycloid

For outside rolling, the centre travels on a circle of radius $R+r$, so its position is $((R+r)\cos t,(R+r)\sin t)$. Without slipping, the marked offset turns through $(R+r)t/r$ in the fixed coordinate frame. This includes the change of orientation of the line of centres. Counting only the circumference ratio $R/r$ would omit one full turn per centre revolution.

With the rim point initially at the contact between the two circles, $d=r$. Adding its rotating offset gives

$$
x=(R+r)\cos t-r\cos\left(\frac{R+r}{r}t\right),
$$

$$
y=(R+r)\sin t-r\sin\left(\frac{R+r}{r}t\right).
$$

These formulas define an **epicycloid** for all real $t$. At $t=0$ the point is $(R,0)$, as the initial contact requires. If $R/r=n$ is a positive integer, the closed trace has $n$ cusps and is traced over $0\leq t\leq2\pi$. The cases $n=1$ and $n=2$ are a cardioid and nephroid, respectively. See the standard equations in [MacTutor's epicycloid entry](https://mathshistory.st-andrews.ac.uk/Curves/Epicycloid/).

There is a simple reason for the closure condition. Both angular terms must return to their initial values modulo $2\pi$. If $R/r=p/q$ in lowest positive integer terms, $t=2\pi q$ makes both rotations integral. The curve closes after at most that interval. If $R/r$ is irrational and $d>0$, the two rotations never return together after a nonzero whole centre revolution, so the full curve is not periodic. A finite plot of such a curve is only a finite segment.

## Hypocycloid and astroid

For inside rolling require $0<r<R$. The centre is now on a circle of radius $R-r$. Its offset rotates in the opposite sense. The **hypocycloid** is

$$
x=(R-r)\cos t+r\cos\left(\frac{R-r}{r}t\right),
$$

$$
y=(R-r)\sin t-r\sin\left(\frac{R-r}{r}t\right).
$$

At zero the two horizontal contributions add to $R$. Their vertical contributions have opposite signs. If $R/r=n\geq3$ is an integer, there are $n$ cusps. The case $R=2r$ is a special degeneration: $x=2r\cos t$ and $y=0$, so the trace is a line segment traversed back and forth. It is not a two-loop oval. [MacTutor's hypocycloid entry](https://mathshistory.st-andrews.ac.uk/Curves/Hypocycloid/) gives the same inside-rolling convention.

For $R=4r$, the frequency is three. Using $\cos3t=4\cos^3t-3\cos t$ and $\sin3t=3\sin t-4\sin^3t$ gives

$$
x=R\cos^3t,\qquad y=R\sin^3t.
$$

This four-cusp curve is the **astroid**. Raising each absolute coordinate to the power $2/3$ yields

$$
|x|^{2/3}+|y|^{2/3}=R^{2/3}.
$$

The absolute values keep the meaning clear for negative coordinates. The cusps are $(\pm R,0)$ and $(0,\pm R)$. The shape resembles a diamond with inward-curved sides, but the sides are not straight segments.

## Prolate and curtate circular trochoids

To let the marked point lie off the rim, replace the coefficient $r$ of the rotating offset by $d$. Do not replace $r$ in the frequency, since the rolling radius remains $r$. The outside trace is an **epitrochoid**:

$$
x=(R+r)\cos t-d\cos\left(\frac{R+r}{r}t\right),\quad
y=(R+r)\sin t-d\sin\left(\frac{R+r}{r}t\right).
$$

The inside trace is a **hypotrochoid**:

$$
x=(R-r)\cos t+d\cos\left(\frac{R-r}{r}t\right),\quad
y=(R-r)\sin t-d\sin\left(\frac{R-r}{r}t\right).
$$

The catalogue calls these prolate and curtate epicycloids or hypocycloids. The more precise family names are epitrochoid and hypotrochoid. In each case $0<d<r$ is **curtate**, $d=r$ gives the corresponding cycloid, and $d>r$ is **prolate**. The first choice rounds the contact cusps; the last can produce loops. The exact pattern also depends on $R/r$, so do not infer the family solely from the number of loops in a drawing. If $d=0$, only the centre circle remains. Compare [MacTutor's epitrochoid](https://mathshistory.st-andrews.ac.uk/Curves/Epitrochoid/) and [hypotrochoid](https://mathshistory.st-andrews.ac.uk/Curves/Hypotrochoid/) equations.

![[catalogue-ch02b-circular-rolling.svg|**Fig. C.ch02b.8** Outside rolling with equal radii produces a cardioid. Inside rolling with R = 4r produces an astroid. Dashed circles show the fixed circle, and pale circles show one rolling-circle position.]]

## Worked example: derive an astroid point

Take $R=4$ and $r=1$. At $t=\pi/3$, the hypocycloid formula gives $x=3(1/2)+\cos\pi=1/2$ and $y=3(\sqrt3/2)-\sin\pi=3\sqrt3/2$. The reduced form gives the same values: $4(1/2)^3=1/2$ and $4(\sqrt3/2)^3=3\sqrt3/2$. For the implicit check, $|x|^{2/3}=4^{2/3}/4$ and $|y|^{2/3}=3\cdot4^{2/3}/4$, whose sum is $4^{2/3}$. All three representations describe the same point.

## Practice

1. Write the parametric equations of the outside curve for $R=2$, $r=1$, $d=1/2$. Classify it and calculate its initial point.
2. For an inside rim trace with $R=6$, $r=3$, simplify the equations and identify the complete trace.

## Worked answers

1. The centre radius is $3$ and the frequency is $3$. Thus $x=3\cos t-\tfrac12\cos3t$ and $y=3\sin t-\tfrac12\sin3t$. It is a curtate epitrochoid because $d<r$. At zero it is $(5/2,0)$. The frequency still uses $r=1$, not $d=1/2$.
2. The centre radius and marked offset are both $3$, and the frequency is one. Thus $x=3\cos t+3\cos t=6\cos t$ and $y=3\sin t-3\sin t=0$. As cosine ranges from $-1$ to $1$, the trace is the segment $-6\leq x\leq6$ on the horizontal axis.
