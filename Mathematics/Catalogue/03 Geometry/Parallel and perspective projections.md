---
title: "Parallel and perspective projections"
catalogue_ids:
  - "3.5.5"
  - "3.5.5.1"
  - "3.5.5.2"
  - "3.5.5.3"
  - "3.5.5.4"
  - "3.5.5.5"
  - "3.5.5.6"
  - "3.5.5.7"
---

> [!TLDR]
> A projection maps space to a plane along parallel rays or rays through one center; its formula depends on the view coordinates.

## What a projection discards

Read [[Space coordinates and rotation conventions]] and [[Affine transformations and homogeneous coordinates]]. A projection uses a rule to replace a point in three dimensions by a point on a plane. It cannot retain every spatial distinction: many points on one projection ray have the same image. This differs from a change of three-dimensional coordinates, which is invertible.

For a plane $n\cdot X=d$ and fixed ray direction $v$ with $n\cdot v\ne0$, the **parallel projection** of $P$ is

$$
P'=P+\frac{d-n\cdot P}{n\cdot v}v.
$$

Derive it by substituting the ray $P+tv$ into the plane equation. If $v$ is parallel to the plane, this construction fails: rays miss the plane or lie in it. If $v$ is perpendicular to the plane, the projection is orthogonal. Otherwise it is oblique. Parallel projection preserves parallel lines unless a line collapses to a point; it need not preserve their lengths or angles.

## View coordinates and plane coordinates

Select an eye reference point $O$, a unit right direction $r$, a unit up direction $u$, and a forward direction $f$ perpendicular to both. For point $P$, its view coordinates are $x_v=r\cdot(P-O)$, $y_v=u\cdot(P-O)$, $z_v=f\cdot(P-O)$. The orientation choice for $f$ must be explicit. This article uses a positive forward distance $z_v$.

To represent an image plane geometrically, choose a plane point $Q$ and independent in-plane directions $a,b$. Every image point is $Q+\xi a+\eta b$. If $a,b$ are orthonormal, the two displayed coordinates are $\xi=a\cdot(P'-Q)$ and $\eta=b\cdot(P'-Q)$. Thus a plane representation requires both a three-dimensional projection and a two-dimensional coordinate choice. A displayed picture alone does not determine either uniquely.

## Axonometric and isometric projection

An **axonometric** drawing displays the three coordinate-axis directions in one parallel projection. In common orthogonal axonometry, rotate the object relative to the view and project orthogonally. The three axis scale factors are their projected lengths. Equal factors define isometric projection; two equal factors define dimetric projection; three unequal factors define trimetric projection. Some technical drawing terminology also uses axonometry more broadly, so state the actual ray direction and matrix.

For an isometric view along $(1,1,1)$, choose plane basis

$$
a=\frac{(1,-1,0)}{\sqrt2},\qquad
b=\frac{(1,1,-2)}{\sqrt6}.
$$

Both are unit vectors perpendicular to the viewing direction and to each other. The image is

$$
(\xi,\eta)=\left(\frac{x-y}{\sqrt2},\frac{x+y-2z}{\sqrt6}\right).
$$

Each unit axis projects to length $\sqrt{2/3}$, with pairwise image angles $120^\circ$. An isometric drawing often enlarges everything by $\sqrt{3/2}$ to show unit axis lengths; that additional scale differs from the true orthogonal projection.

## Oblique parallel projection

To project onto $z=0$ along $v=(p,q,1)$, the parallel formula gives $(x',y')=(x-pz,y-qz)$. It keeps the front face unchanged while depth contributes a slanted displacement. A common drawing form is $(x+kz\cos\alpha,y+kz\sin\alpha)$, equivalent to choosing $p=-k\cos\alpha$, $q=-k\sin\alpha$. Cavalier drawing uses $k=1$; cabinet drawing often uses $k=1/2$. These conventions change apparent depth rather than recovering hidden geometric information.

## Perspective projection

With center at the view origin and image plane $z_v=f_0>0$, intersect the ray $t(x_v,y_v,z_v)$ with that plane. Since $tz_v=f_0$,

$$
(x',y')=\left(\frac{f_0x_v}{z_v},\frac{f_0y_v}{z_v}\right),\qquad z_v\ne0.
$$

Only points with $z_v>0$ are in front of this chosen view. Points on $z_v=0$ have no finite image. In homogeneous image coordinates write $(f_0x_v,f_0y_v,z_v)$, then divide by its last coordinate. Depth-dependent division is why equal distant objects appear smaller. Parallel lines can meet at a vanishing point when their direction has nonzero forward component. Directions parallel to the image plane keep parallel images.

![[catalogue-ch03b-perspective.svg|**Fig. C.ch03b.2** In a side view, rays from one center meet the image plane. Doubling depth at the same height halves the projected height.]]

## Worked example

Let $f_0=2$. The view points $P=(3,1,4)$ and $Q=(3,1,8)$ project to $(3/2,1/2)$ and $(3/4,1/4)$. They have equal lateral coordinates, but the farther point appears halfway toward the image origin. Orthogonal projection onto a plane parallel to the view's $xy$-plane would instead give $(3,1)$ for both. Neither image alone determines depth.

For the isometric formula, $(1,0,0)$ maps to $(1/\sqrt2,1/\sqrt6)$, whose squared length is $1/2+1/6=2/3$. The same computation for the other two unit axes confirms equal foreshortening.

## Practice

1. Under oblique projection $(x',y')=(x+z/2,y+z/2)$, find the image of $(2,1,4)$.
2. With $f_0=3$, project $(2,-1,6)$. Explain why $(2,-1,0)$ has no finite image.

## Worked answers

1. Insert $z/2=2$ to obtain $(4,3)$. Points differing by a multiple of $(-1/2,-1/2,1)$ have the same image.
2. Divide the first two coordinates by depth and multiply by $3$, giving $(1,-1/2)$. For zero depth the ray remains in $z_v=0$ and cannot meet $z_v=3$.
