---
title: "Linear maps, functionals, and complexification"
catalogue_ids:
  - "12.1.5"
  - "12.1.5.1"
  - "12.1.5.2"
  - "12.1.5.3"
  - "12.1.6"
---

> [!TLDR]
> Linear maps preserve linear combinations; complexification allows a real vector space and its maps to use complex scalars.

## Mappings and linearity

Read [[10.01 Vector spaces]] and [[10.02 Linear maps]] first. A **mapping** $T:V\to W$ assigns exactly one output in $W$ to each input in $V$. The domain $V$ and codomain $W$ are part of the specification. The image is $T(V)=\{T(v):v\in V\}$, which can be smaller than the codomain.

For vector spaces over the same scalar field $\mathbb F$, a map is **linear** when

$$
T(ax+by)=aT(x)+bT(y)
$$

for all vectors $x,y$ and scalars $a,b$. This combines preservation of addition and scalar multiplication. In particular $T(0)=0$. A rule such as $T(x)=2x+1$ is affine, not linear, because $T(0)=1$. A rule such as $T(x)=x^2$ sends zero to zero but still fails linearity: $T(1+1)=4$ differs from $T(1)+T(1)=2$.

A linear map whose output is a scalar is a **linear functional**. For example, $f(x,y)=2x-y$ is a functional on $\mathbb R^2$. The evaluation map $E_a(p)=p(a)$ is a functional on a polynomial space, because evaluating a sum or scalar multiple respects both operations. See [[18.01 Dual spaces]] for bases of such functionals.

## Homomorphisms and endomorphisms

A vector-space homomorphism is simply a linear map. An **endomorphism** has the same domain and codomain: $T:V\to V$. The derivative maps polynomials of degree at most two into that same space, so it is an endomorphism there, even though its image contains only polynomials of degree at most one.

The **kernel** is $\ker T=\{v:T(v)=0\}$. Both the kernel and image are subspaces. For the kernel, if $T(x)=T(y)=0$, then $T(ax+by)=0$. For the image, write its members as $T(x)$ and $T(y)$ and apply linearity again. A linear map is injective, meaning different inputs have different outputs, exactly when its kernel is $\{0\}$. Indeed, $T(x)=T(y)$ is equivalent to $T(x-y)=0$.

## Isomorphic vector spaces

An **isomorphism** is a bijective linear map. Bijective means both injective and onto the codomain. Its inverse is automatically linear: write $u=T(x)$ and $v=T(y)$; then $T(ax+by)=au+bv$ implies $T^{-1}(au+bv)=ax+by$.

The space $P_2$ of real polynomials of degree at most two is isomorphic to $\mathbb R^3$ by

$$
a+bt+ct^2\longmapsto(a,b,c).
$$

This map preserves operations and has the inverse $(a,b,c)\mapsto a+bt+ct^2$. Equal dimension is sufficient for finite-dimensional vector spaces over the same field to be algebraically isomorphic. Once norms are present, an isomorphism may be required to preserve continuity, or even lengths. An algebraic isomorphism by itself promises neither. Keep the structure being preserved explicit.

## Complexification of a real space

Suppose $V$ is real. Introduce formal pairs $x+iy$ with $x,y\in V$. Equality means equality of both real components. Add pairs componentwise and define multiplication by a complex scalar as

$$
(a+ib)(x+iy)=(ax-by)+i(bx+ay).
$$

The result is a complex vector space $V_{\mathbb C}$. The original space sits inside it as the pairs $x+i0$. If $V=\mathbb R^n$, this construction gives $\mathbb C^n$. A real basis of $V$ becomes a complex basis of $V_{\mathbb C}$; the complex dimension is $n$, whereas its underlying real dimension is $2n$.

Every real-linear $T:V\to W$ extends uniquely to the complex-linear map

$$
T_{\mathbb C}(x+iy)=T(x)+iT(y).
$$

Uniqueness follows because complex linearity forces the output on $iy$ to equal $iT(y)$. Complexification changes the allowed scalars and vectors; it does not assert that the original space already contained multiplication by $i$.

## Worked example: a rotation acquires eigenvectors

Let $J(x,y)=(-y,x)$ on $\mathbb R^2$. It is linear and $J^2=-I$. No nonzero real vector satisfies $Jv=\lambda v$ for real $\lambda$: applying $J$ again would give $-v=\lambda^2v$, which requires $\lambda^2=-1$.

Extend $J$ to $\mathbb C^2$. For $v=(1,-i)$,

$$
J_{\mathbb C}v=(i,1)=i(1,-i)=iv.
$$

Thus $i$ is an eigenvalue after complexification. The vector $(1,i)$ similarly has eigenvalue $-i$. The real matrix has not changed; the scalar field and permitted eigenvectors have changed. This is one reason to study complex spaces even when a problem starts with real coefficients.

## Practice

1. For $T(x,y)=(x+y,2x+2y)$, find the kernel and image. Is $T$ an isomorphism of $\mathbb R^2$?
2. In the complexification of $\mathbb R$, compute $(2+i)(3+4i)$ using the pair rule. Explain the two real coordinates of the answer.

## Worked answers

1. The first output vanishes exactly when $y=-x$; the second is twice the first. Hence $\ker T=\operatorname{span}(1,-1)$ and $T(\mathbb R^2)=\operatorname{span}(1,2)$. The nonzero kernel prevents injectivity, and the one-dimensional image prevents surjectivity. It is not an isomorphism.
2. The real component is $2(3)-1(4)=2$ and the imaginary component is $1(3)+2(4)=11$. Thus the result is $2+11i$, or the real pair $(2,11)$. One complex coordinate contains two real coordinates.
