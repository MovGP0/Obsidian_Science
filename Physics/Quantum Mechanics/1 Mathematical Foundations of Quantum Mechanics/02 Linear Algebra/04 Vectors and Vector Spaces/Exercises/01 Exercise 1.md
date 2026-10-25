---
title: "Subspace tests in ℂ³"
---

> [!TLDR]
> A subspace contains zero and is closed under every linear combination; these tests accept sets (a) and (d).

Chapter 4 — Vectors and Vector Spaces · Exercise 1 · Basic level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Which of the following sets are subspaces of $\mathbb{C}^3$?

**(a)** $W=\{(z_1,z_2,z_3):z_1+z_2=0\}$.

**(b)** $W=\{(z_1,z_2,z_3):z_1z_2=0\}$.

**(c)** $W=\{(z_1,z_2,z_3):|z_1|^2+|z_2|^2+|z_3|^2=1\}$.

**(d)** $W=\{(z,z,z):z\in\mathbb{C}\}$.

Give a proof or a counterexample for each answer.

## Worked solution

A subset is a subspace if it contains zero and is closed under linear combinations with complex scalars. Use this test for each set.

### (a) A homogeneous linear condition

The zero vector satisfies $0+0=0$. Let $x,y\in W$ and let $a,b\in\mathbb C$. Their first two components satisfy $x_1+x_2=0$ and $y_1+y_2=0$. Thus

$$
(ax_1+by_1)+(ax_2+by_2)
=a(x_1+x_2)+b(y_1+y_2)=0.
$$

The third component has no restriction. Therefore $ax+by\in W$, so this set is a subspace. Equivalently, it is the kernel of the linear map $(z_1,z_2,z_3)\mapsto z_1+z_2$.

### (b) A product condition

Choose $x=(1,0,0)$ and $y=(0,1,0)$. Both satisfy $z_1z_2=0$. Their sum is $(1,1,0)$, for which $z_1z_2=1$. The set is not closed under addition. This one counterexample is sufficient to reject the subspace claim.

### (c) Unit-length vectors

The zero vector gives $|0|^2+|0|^2+|0|^2=0$, not $1$. Every subspace must contain zero, so this set is not a subspace. Scalar closure also fails: multiplying $(1,0,0)$ by $2$ produces a vector outside the set.

### (d) Equal components

The choice $z=0$ includes zero. For arbitrary $z,w,a,b\in\mathbb C$,

$$
a(z,z,z)+b(w,w,w)=(az+bw,az+bw,az+bw).
$$

All three components still agree. The result belongs to the set, so the set is a subspace. It is the span of $(1,1,1)$.

## Answer

**(a)** Yes. **(b)** No. **(c)** No. **(d)** Yes.
