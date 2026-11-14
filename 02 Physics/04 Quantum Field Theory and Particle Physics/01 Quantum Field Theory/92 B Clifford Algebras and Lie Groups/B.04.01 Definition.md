---
title: "Definition"
---

> [!TLDR]
> A Lie group has smooth multiplication and inversion. Its dimension counts manifold coordinates, while its rank counts independent commuting directions in the compact-group setting.

A **Lie group** $G$ is a group with a $C^\infty$ manifold structure compatible with its group operations.
Equivalently, the map
$$
G\times G\longrightarrow G,
\qquad
(g,h)\longmapsto gh^{-1}
$$
is smooth.

The manifold dimension is the **dimension of the Lie group**.
The **rank** is the dimension of a Cartan subalgebra. For the compact Lie groups used here, it counts the independent commuting generators, or the dimension of a maximal torus.

> [!note]
> The source identifies a Cartan subalgebra with a maximal Abelian subalgebra without a scope restriction. That description fits the compact setting here; general Lie algebras require the more precise Cartan-subalgebra definition.

## Local coordinates do not fix the whole group

Here the manifold is finite dimensional over the real numbers unless a complex dimension is stated. For example, $U(1)$ is a circle with real dimension one. A phase angle is a local coordinate, but angles differing by $2\pi$ specify the same group element. One coordinate does not mean that the whole group is the real line.

The single smooth map in the definition gives inversion by fixing $g=e$ and gives multiplication by composing with inversion in the second slot. Conversely, smooth multiplication and inversion make this map smooth. This proves the stated equivalence.

For compact connected matrix groups, a maximal torus supplies the commuting directions used to define rank. In $SU(2)$, the traceless diagonal Hermitian generator gives rank one, although two additional generators are needed for the full tangent space. For noncompact groups, real rank and complex rank can differ. Thus the compact qualification on the rank description is needed when passing from internal symmetry groups to Lorentz symmetry.
