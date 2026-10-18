---
title: "Affine transformations and homogeneous coordinates"
catalogue_ids:
  - "3.5.4"
  - "3.5.4.1"
  - "3.5.4.2"
  - "3.5.4.3"
  - "3.5.4.4"
  - "3.5.4.5"
  - "3.5.4.6"
---

> [!TLDR]
> Matrices describe rotations, scaling, shears, and their composition; an extra homogeneous coordinate also includes translations.

## Transform a point by a rule

Start with [[Plane coordinates and point constructions]]. A geometric transformation maps each input point to an output point. In two dimensions, an **affine transformation** has the form $x'=Ax+t$, where $x=(x,y)^{\mathsf T}$ is a coordinate column, $A$ is a $2\times2$ matrix, and $t$ is a translation column. Multiply each matrix row by the input column and add the two products. This gives one output coordinate per row.

Examples make the meaning concrete. The matrix $\operatorname{diag}(2,3)$ multiplies horizontal lengths by $2$ and vertical lengths by $3$. Reflection in the horizontal axis is $\operatorname{diag}(1,-1)$. The shear matrix $\begin{pmatrix}1&k\\0&1\end{pmatrix}$ gives $x'=x+ky$, $y'=y$. Horizontal rows slide by an amount proportional to height. A counterclockwise rotation is $\begin{pmatrix}\cos\alpha&-\sin\alpha\\\sin\alpha&\cos\alpha\end{pmatrix}$. Adding $t$ moves the result by a fixed displacement.

An affine transformation preserves straight lines and affine point combinations. If $P=(1-s)A+sB$, substitution gives $P'=(1-s)A'+sB'$. In particular, midpoints remain midpoints. An invertible affine transformation preserves parallelism, but need not preserve lengths, angles, or circles. Scaling differently in the two directions can change a circle into an ellipse.

## Homogeneous coordinates

Translation cannot be represented by a $2\times2$ linear matrix because a linear matrix fixes the zero vector. Add a final coordinate equal to one:

$$
\begin{pmatrix}x'\\y'\\1\end{pmatrix}
=\underbrace{\begin{pmatrix}a&b&t_x\\c&d&t_y\\0&0&1\end{pmatrix}}_H
\begin{pmatrix}x\\y\\1\end{pmatrix}.
$$

The final coordinate stays one and the first two rows include the translation. These are **homogeneous coordinates**. More generally $(X,Y,W)$ with $W\ne0$ represents Cartesian point $(X/W,Y/W)$. Multiplying all three coordinates by the same nonzero number gives the same point. For affine transformations a displacement is represented by $(d_x,d_y,0)$: the last zero ensures that translations do not change a displacement. Do not confuse this vector use with the projective interpretation of $W=0$ as a direction at infinity.

## Compose transformations in the correct order

If $H_1$ acts first and $H_2$ second, the total matrix is $H_2H_1$. Matrix products are usually not commutative. For affine pairs $(A_1,t_1)$ and $(A_2,t_2)$, substitution gives

$$
x''=A_2(A_1x+t_1)+t_2
=(A_2A_1)x+(A_2t_1+t_2).
$$

The first translation is also transformed by the second linear part. To rotate about a point $C$ rather than the origin, first subtract $C$, rotate, and add $C$: $x'=C+R(x-C)$. Its translation term is $C-RC$. This derivation prevents a frequent error of rotating about the wrong center.

## Active motion and coordinate change

An active map changes the point in a fixed coordinate system. A passive coordinate change changes the numbers used for a fixed point. Suppose a new origin is $o$ and the new basis columns form an invertible matrix $B$. Then $x=o+BX$, so the new coordinates are $X=B^{-1}(x-o)$. The inverse appears because the basis construction expresses new directions in old coordinates. This distinction also applies to rotations and is developed in [[Space coordinates and rotation conventions]].

The determinant of a planar linear part is $ad-bc$. Its absolute value is the area scale factor. A negative determinant reverses orientation; zero collapses the plane to a line or point and prevents an inverse.

## Transformations in three dimensions

In space, use a $3\times3$ linear matrix $A$ and translation $t=(t_x,t_y,t_z)^{\mathsf T}$. The homogeneous matrix has block form $\begin{pmatrix}A&t\\0\ 0\ 0&1\end{pmatrix}$ and acts on $(x,y,z,1)^{\mathsf T}$. Rotations about the three axes are in [[Space coordinates and rotation conventions]]. Reflection in the plane $z=0$ has linear matrix $\operatorname{diag}(1,1,-1)$; scaling by $2,3,4$ along the axes has matrix $\operatorname{diag}(2,3,4)$.

For example, that scaling followed by translation $(1,0,-1)$ maps $(1,1,1)$ to $(3,3,3)$. It multiplies volumes by $2\cdot3\cdot4=24$, the absolute determinant of its linear part. Translation does not change that factor. To invert the whole operation, first subtract $(1,0,-1)$ and then divide coordinates by $2,3,4$. As in the plane, nonzero determinant is necessary and sufficient for an affine inverse. A projection onto a plane has determinant zero because one spatial direction is lost.

## Deformation transformations

A deformation is a more general map $F(x,y)$ whose scale and shear can vary from point to point. Near a differentiable point its derivative matrix $J$ gives the local first-order transformation. The entries are partial derivatives: differentiate one output coordinate with respect to one input while holding the other input fixed. See [[12.02 Partial derivatives]] and [[12.03 Total derivatives]].

For $F(x,y)=(x,y+x^2)$,

$$
J=\begin{pmatrix}1&0\\2x&1\end{pmatrix},\qquad \det J=1.
$$

It bends horizontal lines into parabolas, though each small neighborhood has area factor one. The inverse is $(X,Y)\mapsto(X,Y-X^2)$. In contrast, $F(x,y)=(x^2,y)$ is not one-to-one across $x=0$ and has zero derivative determinant there. Local linear behavior does not establish global invertibility.

## Worked example

Rotate $(2,1)$ counterclockwise through $\pi/2$, then translate by $(3,0)$. Rotation gives $(-1,2)$, then translation gives $(2,2)$. The homogeneous matrices combine as

$$
\begin{pmatrix}1&0&3\\0&1&0\\0&0&1\end{pmatrix}
\begin{pmatrix}0&-1&0\\1&0&0\\0&0&1\end{pmatrix}
=\begin{pmatrix}0&-1&3\\1&0&0\\0&0&1\end{pmatrix}.
$$

Reverse the operations: $(2,1)$ translates to $(5,1)$, then rotates to $(-1,5)$. The unequal results show why the order must be recorded.

## Practice

1. Apply the shear $x'=x+2y$, $y'=y$ to $(1,3)$. Find its inverse.
2. Rotate $(3,1)$ through $\pi$ about $C=(1,1)$.

## Worked answers

1. The image is $(7,3)$. Since $Y=y$, recover $x=X-2Y$, $y=Y$. Its determinant is one, so the shear preserves area.
2. Subtract the center to obtain $(2,0)$, rotate to $(-2,0)$, then add $C$. The result is $(-1,1)$. The center is the midpoint of the original and image points.
