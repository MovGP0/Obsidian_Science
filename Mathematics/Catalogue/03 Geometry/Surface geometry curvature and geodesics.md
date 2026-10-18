---
title: "Surface geometry curvature and geodesics"
catalogue_ids:
  - "3.6.3"
  - "3.6.3.1"
  - "3.6.3.2"
  - "3.6.3.3"
  - "3.6.3.4"
  - "3.6.3.5"
  - "3.6.3.6"
---

> [!TLDR]
> Surface derivatives give tangent directions and a local length rule; changing normals measure curvature, while geodesics turn only normal to the surface.

## Prerequisites and regular surface patches

Read [[Lines planes and intersections in space]], [[Plane curves tangents and curvature]], and [[12.02 Partial derivatives]]. A surface patch is a map $r(u,v)$ from an open planar parameter region into space. A patch is locally regular when $r_u\times r_v\ne0$, with continuous derivatives. The two partial derivatives are its coordinate tangent directions. They must be independent; otherwise the parameters do not supply two local directions.

For the graph $r(u,v)=(u,v,f(u,v))$, these vectors are $(1,0,f_u)$ and $(0,1,f_v)$, so their cross product is $(-f_u,-f_v,1)$ and never vanishes. A regular surface may need more than one patch. The familiar spherical-angle patch fails at its poles because the azimuth direction collapses, although the sphere is smooth there. A parameter failure does not automatically mean a surface singularity.

## Tangent plane and surface normal

At $P=r(u_0,v_0)$ the tangent plane is $P+ar_u+br_v$. Choose the unit normal

$$
n=\frac{r_u\times r_v}{\|r_u\times r_v\|}.
$$

Changing parameter orientation reverses this normal. For a regular implicit level surface $F(x,y,z)=0$, a normal is $\nabla F=(F_x,F_y,F_z)\ne0$, and the tangent plane is $\nabla F(P)\cdot(X-P)=0$. The gradient is perpendicular to all surface-curve tangents by the chain rule. [Tumarkin's tangent-plane notes](https://www.maths.dur.ac.uk/users/pavel.tumarkin/past/fall16/DG/outline_term1_7.pdf) present both constructions.

For example, $z=x^2+y^2$ has normal $(-2x,-2y,1)$. At $P=(1,0,1)$ the tangent plane is $-2(x-1)+(z-1)=0$, or $z=2x-1$. Substituting $P$ checks the constant. The tangent plane generally meets the surface at more than one point; tangency describes local first-order agreement.

## Line element and lengths on a surface

For a small parameter change, the first-order displacement is $dr=r_u\,du+r_v\,dv$. Squaring its Euclidean length gives

$$
ds^2=E\,du^2+2F\,du\,dv+G\,dv^2,
\quad E=r_u\cdot r_u,\ F=r_u\cdot r_v,\ G=r_v\cdot r_v.
$$

This is the **first fundamental form**, or surface metric. Here $E,F,G$ are mathematical coefficient names. Regularity gives $EG-F^2>0$. For a curve $(u(t),v(t))$ on the surface, replace $du,dv$ by $u'dt,v'dt$ and integrate the square root to obtain its length. The formula corrects for scale and angle in the parameter grid, just as a Gram matrix does for a slanted basis.

On a cylinder $r(u,v)=(R\cos u,R\sin u,v)$, $E=R^2$, $F=0$, $G=1$. Thus $ds^2=R^2du^2+dv^2$. Replacing $u$ by $U=Ru$ gives the ordinary planar rule $ds^2=dU^2+dv^2$. This explains why a cylinder can be cut and flattened without local stretching.

## Curvature of a surface

A surface can bend differently in different tangent directions. With a chosen normal, define second-form coefficients $e=n\cdot r_{uu}$, $f=n\cdot r_{uv}$, $g=n\cdot r_{vv}$. For tangent parameters $(a,b)\ne(0,0)$ the **normal curvature** is

$$
k_n=\frac{ea^2+2fab+gb^2}{Ea^2+2Fab+Gb^2}.
$$

Its maximum and minimum values are the principal curvatures $k_1,k_2$. Define Gaussian curvature $K=k_1k_2$ and mean curvature $H=(k_1+k_2)/2$. Reversing $n$ reverses both principal curvatures and $H$, but leaves $K$ unchanged. These definitions agree with the shape operator $-dn$; [Tumarkin's Gauss-map notes](https://www.maths.dur.ac.uk/users/pavel.tumarkin/past/fall16/DG/outline_term2_9.pdf) give the advanced development.

With the upward normal, the paraboloid $z=x^2+y^2$ has at the origin $E=G=1$, $F=0$, $e=g=2$, $f=0$. Every tangent direction therefore has normal curvature $2$, giving $K=4$. For the saddle $z=x^2-y^2$, the same point instead has principal curvatures $2,-2$ and $K=-4$. Positive $K$ means bending with the same sign in all principal directions; negative $K$ means saddle bending. A plane has both curvatures zero.

## Ruled and developable surfaces

A **ruled surface** is swept out by straight lines: $r(u,v)=c(u)+v d(u)$, where $d(u)\ne0$. Fixing $u$ gives one generating line. A plane, cone, cylinder, and hyperbolic paraboloid are ruled examples. A regular ruled patch is **developable** when its tangent plane stays fixed along each generating line. For smooth data this is characterized by the triple-product condition $\det(c',d,d')=0$ on the regular patch. Here the determinant means $c'\cdot(d\times d')$. Such a patch has $K=0$ and can locally flatten without stretching. Cones exclude their singular vertex, and tangent developables exclude their singular edge. See [Bruce and Giblin's differential-geometry text, ruled-surface exercises](https://www.liverpool.ac.uk/~pjgiblin/papers/diff-geom-book.pdf) for the criterion.

Being ruled does not imply developable. For example $r(u,v)=(u,v,uv)$ has a straight line for fixed $u$, but its upward normal is proportional to $(-v,-u,1)$, which changes along that line. Its Gaussian curvature is negative. Straight generating lines and flat intrinsic geometry are different conditions.

## Geodesics and a worked cylinder example

A **geodesic** is a regular surface curve whose unit-speed derivative of the tangent has no component in the surface tangent plane. Equivalently, its curvature vector points normal to the surface. A geodesic is locally a shortest route between sufficiently close points, but need not be shortest between distant endpoints. A sphere's great circles are geodesics; the long arc between two nearby points is not the shortest route. [Tumarkin's geodesic notes](https://www.maths.dur.ac.uk/users/pavel.tumarkin/past/fall16/DG/outline_term2_12.pdf) give the differential-equation formulation.

Flatten a cylinder with $U=Ru$. Straight lines $U=at+b$, $v=ct+d$ become geodesics on it. For $R=2$, take $u=t$, $v=3t$: $r(t)=(2\cos t,2\sin t,3t)$. Its rate is $\sqrt{13}$, so it has length $\sqrt{13}\,T$ for $0\le t\le T$. Its second derivative is $(-2\cos t,-2\sin t,0)$, purely normal to the cylinder. Constant rate makes the derivative of unit tangent with respect to arc length proportional to this second derivative, proving the geodesic condition. Thus a helix can be a geodesic even though it bends in space.

![[catalogue-ch03b-cylinder-unroll.svg|**Fig. C.ch03b.4** In the unrolled cylinder coordinates U = Ru and v, a geodesic is a straight line. The identified vertical edges wrap the rectangle around the cylinder.]]

## Practice

1. Find the tangent plane to $z=x^2+y^2$ at $(0,1,1)$.
2. On a radius-$2$ cylinder find the length of the curve $u=t$, $v=3t$, for $0\le t\le\pi$.

## Worked answers

1. A normal is $(0,-2,1)$. The plane is $-2(y-1)+(z-1)=0$, or $z=2y-1$. Its two graph tangent directions are $(1,0,0)$ and $(0,1,2)$, both perpendicular to the normal.
2. The squared rate from the metric is $4(1)^2+3^2=13$. Integrating the constant rate gives $\pi\sqrt{13}$. This agrees with the straight-line length in coordinates $(U,v)=(2t,3t)$.
