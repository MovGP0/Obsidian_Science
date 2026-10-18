---
title: "Curvilinear tensor calculations"
catalogue_ids:
  - "4.3.4"
  - "4.3.4.1"
  - "4.3.4.2"
  - "4.3.4.3"
  - "4.3.4.4"
---

> [!TLDR]
> In curvilinear coordinates, a local basis and its reciprocal separate upper and lower tensor components.

## Why a local basis is needed

Read [[Tensor coordinates and invariants]] first. You need the idea of a derivative as a local rate of change; [[07.03 The derivative]] supplies a fuller introduction if needed. For this lesson, the derivative of $(r\cos\theta,r\sin\theta)$ with respect to one variable means differentiate that variable while keeping the other fixed.

A **curvilinear coordinate system** labels points by variables $q^1,\ldots,q^n$ through a smooth map $x(q)$. At a point, define the coordinate basis vectors $g_i=\partial x/\partial q^i$. They describe the local displacement produced by a small coordinate change. They must be independent in the region used. The coordinate map must have a nonsingular Jacobian there. Otherwise these vectors do not form a basis.

In plane polar coordinates,

$$
x(r,\theta)=(r\cos\theta,r\sin\theta),\quad
g_r=(\cos\theta,\sin\theta),\quad
g_\theta=(-r\sin\theta,r\cos\theta).
$$

The angular basis vector has length $r$, not $1$. At $r=0$ it is zero and the basis fails. Angle is also locally restricted to avoid its branch seam; polar coordinates are a chart, not a unique global label of the whole plane.

## Covariant basis and reciprocal basis

The coordinate vectors $g_i$ are often called the **covariant basis vectors**. In a Euclidean space define reciprocal vectors $g^i$ by $g^i\cdot g_j=\delta^i{}_j$. Their dot products act as the dual basis. Thus

$$
v=v^ig_i=v_i g^i,\qquad
v^i=v\cdot g^i,\qquad v_i=v\cdot g_i.
$$

A repeated upper/lower index is summed. The $v^i$ are contravariant components and the $v_i$ are covariant components. The words describe the transformation law, not the position of an arrow in a drawing. Abstract dual basis elements are covectors; reciprocal **vectors** identify them with vectors by means of this Euclidean dot product. Without a metric that identification is not automatic.

Define the metric entries $g_{ij}=g_i\cdot g_j$, and let $g^{ij}$ be the inverse matrix entries. Then $v_i=g_{ij}v^j$ and $v^i=g^{ij}v_j$. In polar coordinates $G=\operatorname{diag}(1,r^2)$, so $g^r=g_r$ and $g^\theta=g_\theta/r^2$. The squared length is $g_{ij}v^iv^j=(v^r)^2+r^2(v^\theta)^2$. Ordinary component squares give the wrong answer unless the basis is orthonormal.

![[catalogue-ch04-polar-basis.svg|**Fig. C.ch04.2** At r = 2 and θ = 0, the coordinate angular basis vector has length 2, while its reciprocal has length 1/2.]]

The two angular arrows in Fig. C.ch04.2 point in the same direction but have reciprocal lengths. Their dot product is $1$. Do not confuse either with the unit angular vector, which has length $1$.

## Second-order components and calculation rules

A second-order tensor can have two upper, two lower, or one of each index. In the Euclidean identification, lowering and raising a slot gives

$$
T_{ij}=g_{ik}g_{j\ell}T^{k\ell},\qquad
T^i{}_j=T^{ik}g_{kj}.
$$

For a bilinear form $B$, $B(u,v)=B_{ij}u^iv^j$. For a linear map, $w^i=A^i{}_jv^j$. Tensor addition requires the same type. Tensor products combine slots; **contraction** sums an upper index against a lower one and removes those slots. For example $A^i{}_i$ is the trace. Its value is independent of the basis. Summing two lower indices directly is not a coordinate-independent contraction without inserting an inverse metric.

Under a coordinate change $q\mapsto p$, use Jacobians just as basis matrices: $v'^a=(\partial p^a/\partial q^i)v^i$ and $\alpha'_a=(\partial q^i/\partial p^a)\alpha_i$. Every tensor slot gets the appropriate factor. These are rules at each point. Ordinary derivatives of components need not obey them, because a local basis also changes from point to point. Covariant differentiation handles that extra change; it is outside the algebraic scope here. [[18.09 Coordinate checks]] shows why the extra terms appear.

## Worked example

At $(r,\theta)=(2,0)$, the basis is $g_r=(1,0)$, $g_\theta=(0,2)$. Let an ordinary Cartesian vector be $v=(3,4)$. The expansion gives $v^r=3$, $v^\theta=2$. Lowering the index gives $v_r=3$, $v_\theta=4(2)=8$. The reciprocal expansion is $3(1,0)+8(0,1/2)=(3,4)$. Its squared length is $3^2+4(2^2)=25$.

For the tensor $v\otimes v$, the upper array is $\begin{pmatrix}9&6\\6&4\end{pmatrix}$. Lower both slots with $G=\operatorname{diag}(1,4)$ to obtain $\begin{pmatrix}9&24\\24&64\end{pmatrix}$. These are different component types of the same metric-identified construction, not different arithmetic answers.

## Practice

1. At $r=3$, a vector has upper polar components $(2,1)$. Find lower components and squared length.
2. A mixed tensor has $A^r{}_r=2$, $A^\theta{}_\theta=-1$, and other entries zero. Find its trace and its output on upper components $(4,5)$.

## Worked answers

1. $G=\operatorname{diag}(1,9)$ gives lower components $(2,9)$. Squared length is $v_iv^i=2(2)+9(1)=13$.
2. The trace is $2+(-1)=1$. Matrix multiplication gives upper output $(8,-5)$. No metric factor is inserted into a mixed tensor's ordinary upper-input/lower-slot contraction.
