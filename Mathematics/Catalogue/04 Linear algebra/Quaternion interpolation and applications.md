---
title: "Quaternion interpolation and applications"
catalogue_ids:
  - "4.4.3"
  - "4.4.3.1"
  - "4.4.3.2"
  - "4.4.3.3"
  - "4.4.3.4"
  - "4.4.3.5"
---

> [!TLDR]
> Quaternion methods provide valid intermediate orientations, coordinate-frame transformations, and compact vector identities.

## Orientations in graphics

Read [[Rotation conventions and quaternions]] first. A graphics object can be represented by vertices $v_i$ in its own coordinate frame. With rotation quaternion $q$ and translation column $t$, a vertex appears in a reference frame as $qv_i\bar q+t$. The same rotation is applied to every vertex, so lengths and angles are preserved. This is a geometric map of points; it does not describe deformation.

To animate an orientation, we need a continuous path from $R_0$ to $R_1$ through rotation matrices. Entrywise linear interpolation usually fails. For example, average the identity with a $180^\circ$ rotation about $z$:

$$
\tfrac12\left[I+\operatorname{diag}(-1,-1,1)\right]
=\operatorname{diag}(0,0,1).
$$

This flattens the $xy$-plane, so it is not a rotation. A valid matrix path is $R(t)=R_0R_{\rm rel}(t)$, where $R_{\rm rel}=R_0^TR_1$ and $R_{\rm rel}(t)$ rotates about the relative rotation's axis by fraction $t$ of its angle. This follows from the axis-angle formula rather than ordinary entrywise interpolation.

## Spherical linear interpolation

Represent the endpoints by unit quaternions $q_0,q_1$. Their dot product here is the ordinary dot product of their four real component columns. Since $q$ and $-q$ give the same rotation, replace $q_1$ by $-q_1$ if their dot product is negative. This chooses a short arc on the unit sphere. Set $\Omega=\arccos(q_0\cdot q_1)$. For $\sin\Omega\ne0$,

$$
\operatorname{slerp}(q_0,q_1;t)=
\frac{\sin((1-t)\Omega)}{\sin\Omega}q_0+
\frac{\sin(t\Omega)}{\sin\Omega}q_1,\qquad 0\le t\le1.
$$

To understand the weights, write $q_1=q_0\cos\Omega+u\sin\Omega$ with $u$ a unit four-vector perpendicular to $q_0$. The formula reduces to $q(t)=q_0\cos(t\Omega)+u\sin(t\Omega)$. Thus its norm is $1$ and its angular parameter advances uniformly. The actual relative rotation angle is $2\Omega$.

For nearly identical endpoints, the sine division is numerically sensitive. A normalized linear blend is a useful small-angle approximation, although it does not give exactly uniform angular progress. If endpoints become equal after the sign choice, use the constant path. At a relative half-turn, two equally short rotation paths can occur; a consistent choice is required for an animation. [Shoemake's original paper](https://doi.org/10.1145/325334.325242) introduced quaternion curves for this graphics problem.

## Worked midpoint

Let $q_0=1$ and $q_1=k$, representing zero and $180^\circ$ rotations about $z$. Then $\Omega=\pi/2$. At $t=1/2$, both coefficients are $1/\sqrt2$, so the midpoint is $(1+k)/\sqrt2$. It represents a $90^\circ$ rotation. It sends $e_1$ to $e_2$, whereas the entrywise matrix midpoint above sends $e_1$ to zero. The quaternion path preserves the object at every stage.

## Stereographic projection of unit quaternions

Unit quaternions lie on $S^3$, the set $w^2+|v|^2=1$ in four real coordinates. This is a three-dimensional curved set, not ordinary three-dimensional space. Stereographic projection gives a chart by projecting from the point $(1,0)$ onto the hyperplane $w=0$:

$$
p=\frac{v}{1-w},\qquad
w=\frac{|p|^2-1}{|p|^2+1},\qquad
v=\frac{2p}{|p|^2+1}.
$$

To derive the inverse, substitute $v=(1-w)p$ into $w^2+|v|^2=1$, and discard the excluded solution $w=1$. For $q=(0,0,0,1)=k$, the chart gives $p=(0,0,1)$. For the midpoint quaternion, $p=(0,0,1+\sqrt2)$. The excluded pole has no finite chart coordinate. A second chart is needed there. Also, projection does not identify $q$ with $-q$ automatically; it is a chart of unit quaternions, not a unique global orientation coordinate system.

## Satellite navigation and coordinate frames

The geometric role of quaternions in navigation is **attitude**, the orientation of one coordinate frame relative to another. It is distinct from determining position. Suppose $q$ maps components from a body frame to a reference frame. A body direction $b$ becomes $qb\bar q$; the inverse conversion uses $\bar q b q$. As a simple frame calculation, a quarter-turn about $z$ maps a body first-axis direction to the reference second-axis direction. To combine a body-to-local orientation $q_1$ and a local-to-reference orientation $q_2$, use $q_2q_1$. This geometric bookkeeping applies to a satellite frame as it does to a camera frame. It is not a satellite-position solution, and no orbit or range equations are assumed here.

The inverse task is to **estimate an unknown attitude** from observed directions. Let $a_i$ be known unit directions in the reference frame, such as directions to identified fixed stars, and let $b_i$ be their measured body-frame directions. Keeping the previous body-to-reference convention, choose a unit quaternion to minimize

$$
\sum_i\|a_i-qb_i\bar q\|_2^2,\qquad |q|=1.
$$

For an exact example, suppose measured body directions are $b_1=e_1$, $b_2=e_2$, while the corresponding known reference directions are $a_1=e_2$, $a_2=-e_1$. The quarter-turn $q=(1+k)/\sqrt2$ maps each measured direction to its reference direction, so both residuals vanish. The two perpendicular directions also determine the third through their cross product. One matched direction alone leaves an arbitrary rotation about that direction unresolved. With noisy measurements an exact fit need not exist, and the unit constraint must be preserved. This is a constrained least-squares orientation problem; [[Least squares and numerical stability]] explains residual minimization, and [[Singular value decomposition]] supplies tools for matrix-based solutions. A full numerical attitude estimator is beyond this introductory example.

This is an equal-weight form of [Wahba's least-squares attitude problem](https://epubs.siam.org/doi/10.1137/1007077). [Markley's NASA paper on two vector measurements](https://ntrs.nasa.gov/search.jsp?R=19990052720) discusses the fixed-star observation setting and the two-observation case.

## Vector analysis through quaternion multiplication

For pure quaternions, $uv=-u\cdot v+u\times v$. This packages familiar vector operations. With differentiable scalar functions of $(x,y,z)$, define the operator $D=i\partial_x+j\partial_y+k\partial_z$, where each derivative acts on the expression to its right. On a scalar $f$, $Df$ is its gradient. On a vector field $v$,

$$
Dv=-\operatorname{div}v+\operatorname{curl}v.
$$

Here divergence is $\partial_xv_x+\partial_yv_y+\partial_zv_z$, and curl has components $(\partial_yv_z-\partial_zv_y,\partial_zv_x-\partial_xv_z,\partial_xv_y-\partial_yv_x)$. For $v=(-y,x,0)$ the divergence is $0$ and curl is $(0,0,2)$, so $Dv=2k$. This is an algebraic identity with a differentiation operator, not permission to commute functions and operators. [[13.03 Divergence]] and [[13.04 Curl]] develop the vector concepts.

## Practice

1. Find the halfway orientation from $q_0=1$ to $q_1=(1+k)/\sqrt2$ by the short-arc rule.
2. Invert the stereographic coordinate $p=(1,0,0)$, and check its quaternion norm.

## Worked answers

1. The endpoint represents a $90^\circ$ rotation, so the midpoint is $q=\cos(\pi/8)+k\sin(\pi/8)$, a $45^\circ$ rotation. The quaternion arc angle is half the rotation angle.
2. $|p|^2=1$, so $w=0$ and $v=(1,0,0)$. This gives $q=i$, whose norm is $1$. It represents a half-turn about the first axis.
