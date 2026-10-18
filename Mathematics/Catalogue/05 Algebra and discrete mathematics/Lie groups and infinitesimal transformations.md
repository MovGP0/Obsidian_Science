---
title: "Lie groups and infinitesimal transformations"
catalogue_ids:
  - "5.3.6"
  - "5.3.6.1"
  - "5.3.6.2"
  - "5.3.6.3"
  - "5.3.6.4"
  - "5.3.6.5"
---

> [!TLDR]
> Lie groups describe smooth families of reversible transformations; Lie algebras describe their local directions near the identity.

## From finite rotations to continuous rotations

Read [[Operations semigroups and groups]] and [[10.03 Matrices]]. A square permits only certain rotations if it must return to the same set of vertices. The whole plane permits a rotation through any real angle. The corresponding matrices are

$$
R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
$$

Matrix multiplication and the angle-addition formulas give $R(\alpha)R(\beta)=R(\alpha+\beta)$. The identity is $R(0)$ and the inverse $R(-\theta)$. Angles differing by $2\pi$ give the same matrix. Locally one angle describes the group, but no single angle coordinate is unique everywhere.

A **Lie group** is a group with a smooth geometric structure for which multiplication and inversion are smooth. “Smooth” means that local coordinate formulas have derivatives of all orders. A full definition uses manifolds; the concrete matrix examples here can be understood before [[19.01 Local models]]. The manifold dimension counts local independent real parameters, not matrix entries or the dimension of the space being transformed.

## Matrix Lie groups

The general linear group $GL(n,\mathbb R)$ contains invertible real $n\times n$ matrices. It has $n^2$ independent local real entries. The orthogonal group $O(n)$ satisfies $R^TR=I$ and preserves the usual dot product. Its determinant is $1$ or $-1$. The special orthogonal group $SO(n)$ adds $\det R=1$ and describes rotations in Euclidean geometry.

For complex matrices, $U(n)$ satisfies $U^*U=I$, and $SU(n)$ adds determinant one. A complex entry has two real components, but the constraints remove freedom. These group names do not count spacetime coordinates. $SO(3)$ acts on three-component vectors while having three local parameters. $SU(2)$ acts on two-component complex vectors while also having three real local parameters. It is a different group.

## Tangent directions and the Lie algebra

A derivative is a local rate of change. For a differentiable matrix path $A(t)$ with $A(0)=I$, define its tangent matrix $X=A'(0)$ by differentiating each entry. Collecting all such tangent matrices gives the **Lie algebra**. For the plane rotations,

$$
J=R'(0)=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
$$

Near zero, $R(t)=I+tJ+O(t^2)$, where the last term has entries bounded by a constant times $t^2$ for small $t$. The exact rotation is not $I+tJ$: that truncation fails to preserve lengths exactly. The matrix exponential $e^{tJ}=I+tJ+t^2J^2/2!+\cdots$ restores all terms. Because $J^2=-I$, collecting even and odd powers gives $e^{tJ}=I\cos t+J\sin t=R(t)$.

For $SO(n)$, differentiate $A(t)^TA(t)=I$ at zero. The product rule gives $X^T+X=0$. Thus its tangent matrices are skew-symmetric. Their entries above the diagonal can be chosen freely, with the lower entries fixed as negatives and the diagonal zero. There are $n(n-1)/2$ parameters. For $SU(n)$, the tangent conditions are $X^*=-X$ and $\operatorname{tr}X=0$; their real dimension is $n^2-1$.

## Brackets and noncommuting directions

The Lie algebra has a second operation, the **bracket** $[X,Y]=XY-YX$. It measures the first nonzero effect of changing the order of small motions. Expand four exponentials to second order:

$$
e^{tX}e^{tY}e^{-tX}e^{-tY}=I+t^2[X,Y]+O(t^3).
$$

In the plane all rotation directions are multiples of $J$, so their brackets vanish. Three-dimensional rotations have different axis directions, and their brackets need not vanish. The bracket is bilinear, antisymmetric, and satisfies the Jacobi identity $[X,[Y,Z]]+[Y,[Z,X]]+[Z,[X,Y]]=0$. These properties follow by expanding products and canceling equal terms. A Lie algebra is a vector space with such an operation; it is not generally a group under the bracket.

## Worked example: rigid transformations and robotics

Represent a planar position by $(x,y,1)^T$. A rotation followed by translation is one matrix:

$$
T=\begin{pmatrix}R&p\\0&1\end{pmatrix},\qquad
T_1T_2=\begin{pmatrix}R_1R_2&R_1p_2+p_1\\0&1\end{pmatrix}.
$$

Here $p$ is a two-component column and the bottom zero is a row. Take $R_1=R(\pi/2)$, $p_1=(1,0)^T$, and $T_2$ a translation by $(2,0)^T$. Then $R_1p_2+p_1=(1,2)^T$. Reversing the order gives $(3,0)^T$ instead. This calculation explains why composing a rotation and a translation depends on order.

These matrices form $SE(2)$. Its tangent matrices have upper-left block $\omega J$, an arbitrary two-component translation column, and a zero bottom row. There are three parameters. In three dimensions $SE(3)$ has six parameters: three rotational and three translational. Robotics uses these matrices to express configurations and concatenate joint transformations. Exponentials map tangent descriptions to finite rigid transformations; they do not make the order irrelevant. See [Lynch and Park's exact exponential-map lesson](https://modernrobotics.northwestern.edu/nu-gm-book-resource/3-3-3-exponential-coordinates-of-rigid-body-motion/).

## Applications and limits

Continuous symmetries of geometry, matrix equations, and differential equations are important applications. Their tangent descriptions turn smooth local questions into linear algebra. However, the Lie algebra alone does not determine all global features: the circle and the real line have isomorphic one-dimensional abelian Lie algebras but different global groups. The exponential need not be globally one-to-one or onto for every Lie group. Use [[25.07 Exponential maps]] for the next step.

## Practice

1. Find the Lie algebra dimension of $SO(4)$. Does it equal four?
2. Compute $e^{\pi J/2}(1,0)^T$ and compare it with $(I+\pi J/2)(1,0)^T$.

### Worked answers

1. A skew-symmetric $4\times4$ matrix has $4\cdot3/2=6$ free entries. Thus the dimension is six; four is the dimension of the defining real vector space, not the group.
2. The exponential is $R(\pi/2)$, so the result is $(0,1)^T$. The linear truncation gives $(1,\pi/2)^T$, which does not even have unit length. A local first-order approximation is unreliable for a finite quarter-turn.
