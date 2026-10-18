---
title: "Pseudotensors and reflections"
catalogue_ids:
  - "4.3.5"
  - "4.3.5.1"
  - "4.3.5.2"
---

> [!TLDR]
> A pseudotensor has an extra orientation sign under reflections; a cross product is an axial vector example.

## Reflection tests a transformation rule

Read [[Tensor coordinates and invariants]] and [[05.05 Dot products]]. This lesson uses real three-dimensional Cartesian coordinates and orthogonal changes. An orthogonal matrix $Q$ satisfies $Q^TQ=I$, so it preserves lengths and angles. Its determinant is $+1$ or $-1$. A proper rotation has $+1$; an orientation-reversing orthogonal map has $-1$.

Fix an **active** convention first: the matrix acts on geometric vectors in a fixed right-handed basis. An ordinary, or polar, vector changes by $v'=Qv$. The point reflection through the origin is $Q=-I_3$. It sends $(x,y,z)$ to $(-x,-y,-z)$ and has determinant $(-1)^3=-1$. Every nonzero point moves to the opposite side of the origin. In two dimensions $-I_2$ instead has determinant $+1$ and is a half-turn. The dimension therefore matters.

## The cross product introduces orientation

For $u=(u_1,u_2,u_3)$ and $v=(v_1,v_2,v_3)$, define

$$
u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1).
$$

It is perpendicular to both input vectors. Its magnitude is the area of their parallelogram, and its sign is fixed by the chosen right-handed orientation. In particular $e_1\times e_2=e_3$, but $e_2\times e_1=-e_3$. See [[Cross product]] for the coordinate construction.

The transformation law is

$$
(Qu)\times(Qv)=\det(Q)\,Q(u\times v).
$$

One way to understand the extra sign is to examine signed volume. The scalar triple product $w\cdot(u\times v)$ is a determinant. Acting on all three inputs multiplies it by $\det Q$. Meanwhile dot products themselves are preserved. The displayed cross-product rule is the one that makes both facts agree. For rotations the determinant is $1$ and the distinction is hidden. A reflection exposes it.

An object with this transformation law is called an **axial vector** or **pseudovector**. The prefix does not mean false or approximate. It records the extra orientation factor. A pseudoscalar similarly transforms as $s'=\det(Q)s$. The signed triple product is a pseudoscalar. An unsigned volume is instead unchanged by any orthogonal transformation.

## General pseudotensors

In Cartesian orthonormal coordinates, an ordinary rank-$r$ tensor under an active orthogonal map has one factor $Q$ for each vector index. A pseudotensor has an additional factor $\det Q$. Thus a rank-two pseudotensor satisfies $P'_{ij}=\det(Q)Q_{ia}Q_{jb}P_{ab}$ in this convention. Lower and upper Cartesian indices have the same numerical orthogonal factors here. For general nonorthogonal coordinates they must again be distinguished, and tensor densities may carry other determinant weights. The present definition is deliberately restricted to the orthogonal case.

The alternating symbol $\varepsilon_{ijk}$ equals $+1$ for even permutations of $(1,2,3)$, $-1$ for odd permutations, and $0$ when indices repeat. It expresses the cross product as $(u\times v)_i=\varepsilon_{ijk}u_jv_k$. Its fixed numerical table can be treated as an invariant pseudotensor under the orthogonal group: three $Q$ factors supply a determinant sign, which cancels the pseudotensor's extra sign. A true oriented volume form, by contrast, changes sign under an orientation-reversing active map. State which object is meant rather than treating every use of $\varepsilon$ as identical.

## Worked reflection example

Take $u=e_1$, $v=e_2$, so $w=u\times v=e_3$. Reflect the first coordinate with $Q=\operatorname{diag}(-1,1,1)$. Then $Qu=-e_1$ and $Qv=e_2$, so their cross product is $-e_3$. The pseudovector formula gives $\det(Q)Qw=(-1)e_3=-e_3$, in agreement. The polar-vector formula alone would give $Qw=e_3$ and fail.

Under point reflection $Q=-I_3$, both inputs reverse and $(-u)\times(-v)=u\times v$. The axial output stays fixed. The formula gives $(-1)(-I_3)w=w$. This is the simplest practical distinction between polar and axial vectors.

## Mistakes to avoid

Do not infer parity from an arrow picture alone. Its construction determines the transformation law. Do not switch from active motion to passive relabelling halfway through a calculation. For a passive orthonormal basis change with basis columns $Q$, ordinary components use $Q^T$ and axial components use $\det(Q)Q^T$. The sign conclusion is the same, but the matrix order is specified differently.

## Practice

1. Reflect the second coordinate of $u=(1,0,0)$ and $v=(0,0,1)$. Compare the transformed cross product with the original.
2. Under point reflection in three dimensions, how does $a\cdot(b\times c)$ change if all three inputs are polar vectors?

## Worked answers

1. The original cross product is $-e_2$. The inputs are unchanged by $Q=\operatorname{diag}(1,-1,1)$, so the new cross product is also $-e_2$. The axial rule gives $(-1)Q(-e_2)=-e_2$.
2. The polar input $a$ changes sign, while the cross product stays fixed. Their dot product changes sign. Equivalently, its determinant factor is $\det(-I_3)=-1$.
