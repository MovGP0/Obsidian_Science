---
title: "Lines circles and conic sections"
catalogue_ids:
  - "3.5.2.6"
  - "3.5.2.7"
  - "3.5.2.8"
  - "3.5.2.9"
  - "3.5.2.10"
  - "3.5.2.11"
---

> [!TLDR]
> Lines have linear equations; conic sections have quadratic equations whose shape follows from their distances and squared terms.

## Straight lines and circles

Use [[Plane coordinates and point constructions]] for coordinate conventions. A line has equation $ax+by+c=0$, where $(a,b)\ne(0,0)$ is a normal vector, perpendicular to the line. A direction is $(-b,a)$, since their dot product is zero. If $b\ne0$, rearrangement gives $y=-ax/b-c/b$. The implicit form also includes vertical lines, which have no finite slope. A line through $P$ in direction $\mathbf d\ne0$ is $X=P+t\mathbf d$.

A circle with center $(h,k)$ and radius $R>0$ is defined by distance:

$$
(x-h)^2+(y-k)^2=R^2.
$$

For example, $x^2+y^2-4x+6y-12=0$ becomes $(x-2)^2+(y+3)^2=25$ after completing squares. Its center is $(2,-3)$ and radius $5$. A negative squared radius gives no real circle; zero gives a single point. To intersect a line and circle, substitute the line equation and solve the resulting quadratic. Two roots, one repeated root, or no real roots correspond to a secant, tangent, or no intersection.

## Ellipse from two foci

An ellipse is the locus of points whose sum of distances from two fixed foci is $2a$. With foci $(\pm c,0)$ and $a>c\ge0$, its standard equation is

$$
\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\qquad b^2=a^2-c^2.
$$

To see the role of $b$, take $x=0$. Both focal distances are $\sqrt{c^2+y^2}$, so $2\sqrt{c^2+y^2}=2a$ and $y^2=a^2-c^2$. Repeated squaring of the distance-sum equation gives the full standard equation. The assumptions ensure the original distances have the correct signs. The endpoints $(\pm a,0)$ and $(0,\pm b)$ are its axis vertices. Its eccentricity is $e=c/a<1$. At $c=0$ it is a circle. A useful parametrization is $(a\cos t,b\sin t)$.

## Hyperbola and parabola

A hyperbola has constant absolute difference $2a$ of distances from foci $(\pm c,0)$, with $c>a>0$. Its equation and asymptotes are

$$
\frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\qquad b^2=c^2-a^2,
\qquad y=\pm\frac ba x.
$$

Its two branches satisfy $|x|\ge a$. Far from the origin the constant $1$ has small effect compared with the squared terms, which explains the asymptote slopes. Unlike an ellipse, it is unbounded. Its eccentricity $c/a$ exceeds one. Interchanging $x$ and $y$ turns the opening direction through a right angle.

A parabola consists of points equally distant from a focus and a line called the directrix. Take focus $(p,0)$ and directrix $x=-p$, with $p\ne0$. Equality of squared distances gives

$$
(x-p)^2+y^2=(x+p)^2\quad\Longrightarrow\quad y^2=4px.
$$

The vertex is the origin. Positive $p$ opens right; negative $p$ opens left. Its eccentricity is one. Unlike the ellipse and hyperbola, it has one focus and no center of symmetry. Translating the coordinates moves these standard shapes without changing their lengths or angles.

## General second-order equation

The equation $Ax^2+Bxy+Cy^2+Dx+Ey+F=0$ is quadratic when at least one of $A,B,C$ is nonzero. A rotation removes the mixed term. With the convention $x=X\cos\alpha-Y\sin\alpha$, $y=X\sin\alpha+Y\cos\alpha$, the required relation is

$$
(C-A)\sin(2\alpha)+B\cos(2\alpha)=0.
$$

If $A\ne C$, this is $\tan(2\alpha)=B/(A-C)$, with the quadrant chosen consistently. Then complete squares in the new coordinates. The discriminant $B^2-4AC$ identifies the quadratic type: negative for elliptic, positive for hyperbolic, and zero for parabolic type. It does not alone prove that a real nondegenerate curve exists. For example, $x^2+y^2=-1$ has no real points, $x^2+y^2=0$ is one point, and $x^2-y^2=0$ is two intersecting lines.

## Worked example: classify and locate

For $4x^2+y^2-8x+4y+4=0$, complete squares:

$$
4(x-1)^2+(y+2)^2=4,
\qquad (x-1)^2+\frac{(y+2)^2}{4}=1.
$$

This is an ellipse centered at $(1,-2)$ with vertical major semiaxis $a=2$ and horizontal semiaxis $b=1$. Its focal distance is $c=\sqrt{4-1}=\sqrt3$. The foci are $(1,-2\pm\sqrt3)$, and eccentricity is $\sqrt3/2$. Its intersections with the horizontal center line are $(0,-2)$ and $(2,-2)$. Substitution into the original equation checks both points.

## Practice

1. Find the foci and asymptotes of $x^2/9-y^2/16=1$.
2. Find the focus and directrix of $y^2=8x$, and check the point $(2,4)$ by distances.

## Worked answers

1. Here $a=3$, $b=4$, so $c=\sqrt{9+16}=5$. The foci are $(\pm5,0)$ and asymptotes $y=\pm4x/3$.
2. Compare with $y^2=4px$ to obtain $p=2$. The focus is $(2,0)$ and directrix $x=-2$. The distance from $(2,4)$ to the focus is $4$; its perpendicular distance to the directrix is also $4$.
