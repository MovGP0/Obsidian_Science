---
title: "Cubic curves"
catalogue_ids:
  - "2.11"
  - "2.11.1"
  - "2.11.2"
  - "2.11.3"
  - "2.11.4"
  - "2.11.5"
---

> [!TLDR]
> A cubic curve is defined by a degree-three polynomial equation and may have cusps, loops, or several branches.

## Prerequisite route

Read [[03.03 Polynomial and rational functions]] and [[03.05 Trigonometric functions]]. A curve can be defined **implicitly** by a relation between $x$ and $y$, or **parametrically** by $x=x(t)$ and $y=y(t)$. In the second case choose a real parameter $t$, calculate both coordinates, and mark the resulting point. A parameter is an extra label, not a third coordinate of the plane.

## What third order means

The total degree of a term $x^my^n$ is $m+n$. A plane **cubic**, or third-order algebraic curve, has a polynomial equation $F(x,y)=0$ of total degree three. For example, $xy^2$ has degree three even though no exponent is three. A cubic curve need not be the graph of a cubic function $y=ax^3+bx^2+cx+d$. It can assign two or more heights to one horizontal coordinate.

The following standard names refer to shapes up to changes of scale, orientation, and position. We fix one equation for each, with $a>0$. The chosen orientation can differ from a handbook drawing. Check the equation rather than comparing only the direction of a sketch.

## Semicubical parabola

Use

$$
y^2=\frac{x^3}{a},\qquad x=at^2,\quad y=at^3,\quad t\in\mathbb R.
$$

Substitution gives $a^2t^6=(a^3t^6)/a$. Thus each parameter value lies on the curve. Conversely, $x\geq0$ because $y^2\geq0$, and the two choices of $t=\pm\sqrt{x/a}$ give both signs of $y$. At zero the two arms meet in a **cusp**, a sharp point with a common tangent direction. Close to zero, $y/x=t$ approaches zero on both arms. Thus the tangent is horizontal, even though the arms turn back together there. The name “semicubical” comes from $y=\pm x^{3/2}/\sqrt a$, not from half of a cubic graph. [MacTutor's Neile curve](https://mathshistory.st-andrews.ac.uk/Curves/Neiles/) uses exchanged coordinate axes.

## Witch of Agnesi

Define

$$
y(x^2+a^2)=a^3,
\qquad y=\frac{a^3}{x^2+a^2}.
$$

There is one height at every real $x$. The graph is even, positive, and has maximum $a$ at zero. As $|x|$ grows, the denominator grows without bound, so $y$ approaches zero. Its range is $(0,a]$. Although the explicit formula is rational, clearing its nonzero denominator gives a cubic equation through the term $x^2y$.

A convenient parametrization is $x=at$, $y=a/(1+t^2)$, with $t\in\mathbb R$. There is also a geometric construction: use the circle with centre $(0,a/2)$ and radius $a/2$, and a line through the origin. If this line meets the circle again at $L$ and the horizontal line $y=a$ at $M$, take the point with the horizontal coordinate of $M$ and the vertical coordinate of $L$. This produces the rational rule above. See [MacTutor's Agnesi construction](https://mathshistory.st-andrews.ac.uk/Curves/Witch/).

## Folium of Descartes

The defining relation and a useful parametrization are

$$
x^3+y^3=3axy,\qquad
x=\frac{3at}{1+t^3},\quad y=\frac{3at^2}{1+t^3},\quad t\ne-1.
$$

To derive them, intersect the curve with the line $y=tx$. Substitution gives $x^3(1+t^3)=3atx^2$. For $x\ne0$ cancel $x^2$ and solve. The origin, lost by cancellation, is recovered at $t=0$. It is also the limit as $t$ tends to either infinity. Positive $t$ traces a loop in the first quadrant. Negative values trace the unbounded arms. The excluded value $-1$ separates these arms.

The symmetry $x\leftrightarrow y$ is visible in the equation. The line $x+y=-a$ is an asymptote: indeed $x+y=3at/(t^2-t+1)$ for $t\ne-1$, which approaches $-a$ as $t\to-1$. See the verified equation in [MacTutor's folium entry](https://mathshistory.st-andrews.ac.uk/Curves/Foliumd/).

## Cissoid of Diocles

Here the unqualified catalogue label “cissoid” means the classical **cissoid of Diocles**:

$$
y^2=\frac{x^3}{2a-x},\qquad
x=\frac{2at^2}{1+t^2},\quad
y=\frac{2at^3}{1+t^2},\quad t\in\mathbb R.
$$

The real horizontal range is $0\leq x<2a$. The origin is a cusp. As $|t|$ grows, $x$ approaches $2a$ while $|y|$ increases without bound, so $x=2a$ is a vertical asymptote. The polynomial form is $(2a-x)y^2=x^3$, whose total degree is three.

Its construction differs from a conchoid. From the origin draw a ray that meets the circle $(x-a)^2+y^2=a^2$ at $Q$ and its tangent line $x=2a$ at $R$. Place $P$ on that ray with distance $OP=QR$. For ray angle $\theta$ with $\cos\theta>0$, the circle distance is $2a\cos\theta$ and the line distance is $2a/\cos\theta$. Their difference is $2a\sin^2\theta/\cos\theta$. Setting $t=\tan\theta$ gives the formulas. See [MacTutor's cissoid entry](https://mathshistory.st-andrews.ac.uk/Curves/Cissoid/).

## Strophoid

The **right strophoid** has equation

$$
y^2=\frac{x^2(a-x)}{a+x}.
$$

Its finite real points have $-a<x\leq a$. Set $y=tx$ as before. Away from the origin, $t^2=(a-x)/(a+x)$, so

$$
x=\frac{a(1-t^2)}{1+t^2},\qquad
y=\frac{at(1-t^2)}{1+t^2},\qquad t\in\mathbb R.
$$

At $t=1$ and $t=-1$ the same origin is reached with different directions. The two branches cross there, forming a **node**, unlike the cusp of the cissoid. The interval $-1<t<1$ traces its loop to the right; the other parameter values give the unbounded arms near $x=-a$.

More generally, a strophoid is constructed from a base curve, a pole, and a second fixed point: along each pole-line meeting the base at $Q$, mark two points whose distances from $Q$ equal the distance from $Q$ to that second fixed point. A line base and a perpendicular choice of fixed point give the right strophoid. Thus the distance used here varies with $Q$; in a conchoid it is constant. See [MacTutor's associated-curve definitions](https://mathshistory.st-andrews.ac.uk/Curves/Definitions2/) and [right strophoid](https://mathshistory.st-andrews.ac.uk/Curves/Right/).

![[catalogue-ch02b-cubics.svg|**Fig. C.ch02b.2** A cusp, a loop with a crossing, and a vertical asymptote occur in different cubic curves. Each panel uses its stated equation with a = 1.]]

## Worked example: follow one point through two representations

Take the cissoid with $a=2$ and $t=1/2$. The parametric denominator is $1+1/4=5/4$, giving $x=4/5$ and $y=2/5$. The implicit check is $y^2=4/25$ and $x^3/(4-x)=(64/125)/(16/5)=4/25$. The point is on the upper arm and has $x<4$, as required. Replacing $t$ by $-1/2$ preserves $x$ and changes only the sign of $y$.

## Practice

1. For the folium with $a=2$, find the point at $t=1$ and check its cubic equation.
2. For the right strophoid with $a=1$, find all heights at $x=1/2$. Explain why a single graph $y=f(x)$ cannot represent the whole curve.

## Worked answers

1. Both coordinates are $6/2=3$. Thus $x^3+y^3=27+27=54$ and $3axy=3(2)(3)(3)=54$. The point lies on the loop and on its symmetry line $y=x$.
2. The equation gives $y^2=(1/4)(1/2)/(3/2)=1/12$, so $y=\pm1/(2\sqrt3)$. These are two different outputs at the same horizontal input. Each sign gives one branch, but their union is an implicit curve rather than one real-valued function of $x$.
