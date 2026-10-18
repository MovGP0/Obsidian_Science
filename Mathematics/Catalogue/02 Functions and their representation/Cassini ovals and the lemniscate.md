---
title: "Cassini ovals and the lemniscate"
catalogue_ids:
  - "2.12.5"
  - "2.12.6"
---

> [!TLDR]
> Cassini curves keep a product of distances fixed; the Bernoulli lemniscate is the transition between two loops and one oval.

## Prerequisite route

Read [[03.02 Graphs]] and [[03.03 Polynomial and rational functions]]. Use the distance formula from elementary coordinate geometry: the distance between $(x,y)$ and $(u,v)$ is $\sqrt{(x-u)^2+(y-v)^2}$. Polar coordinates, used later, mean $x=r\cos\theta$, $y=r\sin\theta$. All parameters in this article are mathematical scale factors, with $a,b>0$.

## Cassini curves

Fix two points $F_-=(-a,0)$ and $F_+=(a,0)$, called the **foci**. Let their distances to $P=(x,y)$ be $d_-$ and $d_+$. A **Cassini curve**, also called a Cassini oval, consists of the points for which

$$
d_-d_+=b^2.
$$

The constant is written as a square to make the parameter $b$ have the same scaling role as the coordinate parameter $a$. An ellipse uses a fixed **sum** of distances. A Cassini curve uses a fixed **product**; the two definitions give different curves.

Both distances are nonnegative. Squaring their product introduces no sign ambiguity because $b^2>0$. Hence

$$
[(x+a)^2+y^2][(x-a)^2+y^2]=b^4.
$$

Write $S=x^2+y^2+a^2$. The factors are $S+2ax$ and $S-2ax$. Multiplying them gives the compact quartic equation

$$
(x^2+y^2+a^2)^2-4a^2x^2=b^4.
$$

Only even powers of $x$ and $y$ occur, so both coordinate axes are symmetry axes. This definition and equation appear in J. B. Cooper's university notes, [*Differential Geometry*, section 1](https://www.jku.at/fileadmin/gruppen/194/Lehre/Skripta_Jim/Cooper_Differential_Geometry.pdf). The classification below follows directly from the equation.

### Why the shape changes

On the horizontal axis, $y=0$ and $|x^2-a^2|=b^2$. The outer intersections always exist:

$$
x=\pm\sqrt{a^2+b^2}.
$$

Inner intersections $x=\pm\sqrt{a^2-b^2}$ also exist when $b<a$. On the vertical axis, $x=0$ and $y^2+a^2=b^2$, so vertical intersections exist only when $b\geq a$.

Consequently, when $b<a$, the curve consists of two separate loops, one around each focus. It cannot cross the vertical axis. At $b=a$ the loops meet at the origin. When $b>a$ there is one connected oval crossing both axes. A single oval can still be indented in its middle; connectedness does not imply convexity.

A direct way to draw the curve is to solve for $y^2$:

$$
y=\pm\sqrt{\sqrt{b^4+4a^2x^2}-x^2-a^2}.
$$

Use only values of $x$ for which the outer square root's radicand is nonnegative. If $b<a$, the horizontal domain is the two intervals between the inner and outer intersections. If $b\geq a$, it is the whole interval between the outer intersections. Each plus/minus pair supplies the upper and lower halves. This method is a real graph parametrization with $x$ as parameter, even though the whole oval is not the graph of a single function.

## Bernoulli’s lemniscate

At $b=a$, expand and cancel $a^4$:

$$
(x^2+y^2)^2=2a^2(x^2-y^2).
$$

If $c=\sqrt2a$ denotes the distance from the origin to an outer tip, this becomes

$$
(x^2+y^2)^2=c^2(x^2-y^2),\qquad
r^2=c^2\cos2\theta.
$$

The second formula follows by substituting $x^2+y^2=r^2$ and $x^2-y^2=r^2\cos2\theta$, then dividing by $r^2$ away from the origin. Include the origin separately. Real radii require $\cos2\theta\geq0$. One lobe uses $-\pi/4\leq\theta\leq\pi/4$; the opposite lobe uses $3\pi/4\leq\theta\leq5\pi/4$.

A smooth algebraic parametrization away from its crossing is

$$
x=\frac{c\cos t}{1+\sin^2t},\qquad
y=\frac{c\sin t\cos t}{1+\sin^2t},\qquad 0\leq t\leq2\pi.
$$

Indeed $x^2+y^2=c^2\cos^2t/(1+\sin^2t)$, and $x^2-y^2=c^2\cos^4t/(1+\sin^2t)^2$, so the quartic holds. It reaches the origin at two distinct parameter values, with two crossing directions. The standard name in this catalogue is **Bernoulli's lemniscate**. Other figure-eight curves exist and need not satisfy this equation. The normalization by outer-tip distance is used in [MacTutor's lemniscate entry](https://mathshistory.st-andrews.ac.uk/Curves/Lemniscate/).

![[catalogue-ch02b-cassini.svg|**Fig. C.ch02b.4** With fixed foci at (−1, 0) and (1, 0), increasing b changes two Cassini loops into a lemniscate and then a single oval.]]

## Worked example: identify the case from intersections

Choose $a=3$, $b=4$. The outer horizontal tips are $x=\pm\sqrt{9+16}=\pm5$. There are no inner horizontal tips, since $a^2-b^2=-7$. The vertical crossings are $y=\pm\sqrt{16-9}=\pm\sqrt7$. Thus this is the single-oval case. At $(5,0)$ the distances to the foci are $8$ and $2$, and their product is $16=b^2$. At $(0,\sqrt7)$ both distances are $\sqrt{9+7}=4$, giving the same product.

## Practice

1. For $a=2$, $b=1$, find every horizontal-axis intersection and decide the number of loops.
2. A Bernoulli lemniscate has outer tips $(\pm6,0)$. Find its foci and its nonnegative radius at $\theta=\pi/6$.

## Worked answers

1. The outer tips are $x=\pm\sqrt5$ and the inner tips are $x=\pm\sqrt3$. Since $b<a$, there are two separate loops. The horizontal parameter domain is $[-\sqrt5,-\sqrt3]\cup[\sqrt3,\sqrt5]$.
2. Here $c=6$ and $a=c/\sqrt2=3\sqrt2$, so the foci are $(\pm3\sqrt2,0)$. The polar rule gives $r^2=36\cos(\pi/3)=18$, hence $r=3\sqrt2$. The angle lies in the right-lobe interval, so a real point exists.
