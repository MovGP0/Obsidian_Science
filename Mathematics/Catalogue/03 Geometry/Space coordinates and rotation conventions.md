---
title: "Space coordinates and rotation conventions"
catalogue_ids:
  - "3.5.3"
  - "3.5.3.1"
  - "3.5.3.2"
  - "3.5.3.3"
  - "3.5.3.4"
  - "3.5.3.5"
  - "3.5.3.6"
  - "3.5.3.7"
---

> [!TLDR]
> Space coordinates locate points with three numbers; rotation matrices preserve lengths, while angle conventions specify their order.

## Coordinate systems in three dimensions

Start with [[04.01 Coordinates]] and [[Vector calculations and geometric products]]. Cartesian coordinates $(x,y,z)$ use three perpendicular unit directions. Distance from the origin is $\sqrt{x^2+y^2+z^2}$. A right-handed basis obeys $\mathbf e_x\times\mathbf e_y=\mathbf e_z$. Changing that orientation changes cross-product signs.

Cylindrical coordinates $(r,\theta,z)$ use $x=r\cos\theta$, $y=r\sin\theta$, with $r\ge0$. Spherical coordinates here are $(\rho,\theta,\phi)$, where $\rho\ge0$, $\theta$ is azimuth about the $z$-axis, and $\phi\in[0,\pi]$ is angle down from the positive $z$-axis:

$$
x=\rho\sin\phi\cos\theta,\quad
y=\rho\sin\phi\sin\theta,\quad z=\rho\cos\phi.
$$

For $(1,1,\sqrt2)$, $\rho=2$, $\theta=\pi/4$, $\phi=\pi/4$. On the $z$-axis azimuth is undetermined; at the origin neither angle is determined. Some books exchange the letters or use latitude instead of colatitude. Always state definitions before inserting values.

Special points are built with the same affine averages as in the plane. The midpoint of $A,B$ is $(A+B)/2$. A tetrahedron with vertices $A,B,C,D$ has centroid $(A+B+C+D)/4$. Its circumsphere center, when the vertices are not coplanar, follows by subtracting its four equal squared-distance equations to get three independent linear equations.

## Direction cosines and rotation matrices

A matrix is a rectangular array that acts on a column by row-by-column multiplication. A three-dimensional rotation is represented by a $3\times3$ matrix $R$ satisfying $R^{\mathsf T}R=I$ and $\det R=1$. The first condition says its columns are perpendicular unit vectors; the second excludes reflections. Its inverse is its transpose.

If the columns are new basis directions measured in an old basis, then $x_{\mathrm{old}}=R x_{\mathrm{new}}$ for a fixed vector. The entry $R_{ij}$ is the cosine of the angle between old direction $i$ and new direction $j$, hence “direction-cosine matrix.” Inverting the coordinate change gives $x_{\mathrm{new}}=R^{\mathsf T}x_{\mathrm{old}}$. An active rotation instead moves a vector by $x'=Rx$ in one fixed basis. These are different uses of the same matrix.

## Elementary active rotations

Use column vectors and positive right-hand rotations. Write $c=\cos\alpha$, $s=\sin\alpha$. The elementary matrices are

$$
R_x(\alpha)=\begin{pmatrix}1&0&0\\0&c&-s\\0&s&c\end{pmatrix},\quad
R_y(\alpha)=\begin{pmatrix}c&0&s\\0&1&0\\-s&0&c\end{pmatrix},\quad
R_z(\alpha)=\begin{pmatrix}c&-s&0\\s&c&0\\0&0&1\end{pmatrix}.
$$

Each leaves its named axis fixed and rotates the perpendicular plane. For example, $R_z(\pi/2)(1,0,0)^{\mathsf T}=(0,1,0)^{\mathsf T}$. The columns therefore also provide a quick orientation check.

## Cardan angles and Euler angles

**Cardan angles**, also called Tait–Bryan angles, use three different axes. Specify, for example, active rotations about the fixed axes $x$, then $y$, then $z$. The result is

$$
R=R_z(\gamma)R_y(\beta)R_x(\alpha).
$$

The rightmost operation acts first. A proper **Euler-angle** convention repeats the first axis. For fixed-axis rotations about $z$, then $x$, then $z$, one possible definition is $R=R_z(\gamma)R_x(\beta)R_z(\alpha)$. Many references instead use successive moving axes and reverse how angles are named. The names alone do not specify a matrix. David Eberly's [Euler Angle Formulas](https://www.geometrictools.com/Documentation/EulerAngles.pdf) lists the twelve axis patterns and their exceptional cases.

For Cardan $xyz$, at $\beta=\pm\pi/2$ two angle effects become dependent. The matrix still describes a valid rotation, but the three-angle representation loses uniqueness. For proper Euler $zxz$, analogous dependence occurs at $\beta=0$ or $\pi$. This is a coordinate singularity called gimbal lock; no length or point becomes undefined. A full derivation follows by substituting those middle angles into the elementary matrices.

## Worked example: order changes the answer

Start from $v=(0,1,0)$. First rotate by $\pi/2$ about fixed $x$: $R_xv=(0,0,1)$. Then rotate by $\pi/2$ about fixed $y$: $R_yR_xv=(1,0,0)$. Reverse the order. Since $R_yv=v$, the result is $R_xR_yv=(0,0,1)$. Thus rotations about different axes do not generally commute. Both outputs retain length one, so a length check alone cannot detect an order error.

As a point construction, the tetrahedron $(0,0,0),(2,0,0),(0,2,0),(0,0,2)$ has centroid $(1/2,1/2,1/2)$ and circumsphere center $(1,1,1)$. Equidistance to the origin and each nonzero vertex gives $x=y=z=1$. These are distinct centers even in this symmetric example.

## Practice

1. Convert $(\rho,\theta,\phi)=(2,\pi/2,\pi/2)$ to Cartesian coordinates.
2. Rotate $(1,2,3)$ through $\pi$ about $z$, then recover the original vector with the inverse.

## Worked answers

1. The sine of $\phi$ is one and its cosine is zero. With $\cos\theta=0$, $\sin\theta=1$, the point is $(0,2,0)$.
2. The matrix is $\operatorname{diag}(-1,-1,1)$, giving $(-1,-2,3)$. Its transpose equals itself, so a second application gives $(1,2,3)$. The squared length remains $14$.
