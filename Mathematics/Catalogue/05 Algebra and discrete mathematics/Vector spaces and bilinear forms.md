---
title: "Vector spaces and bilinear forms"
catalogue_ids:
  - "5.3.8"
  - "5.3.8.1"
  - "5.3.8.2"
  - "5.3.8.3"
  - "5.3.8.4"
  - "5.3.8.5"
  - "5.3.8.6"
---

> [!TLDR]
> Vector spaces support linear combinations; linear maps preserve them, and bilinear forms compare pairs of vectors.

## Vectors and their scalar field

After [[Rings ideals and finite fields]], a field is a set of allowed scalars with the usual arithmetic and inverses for nonzero values. A **vector space** over a field $F$ is an abelian group under vector addition, together with scalar multiplication satisfying $a(bv)=(ab)v$, $1v=v$, $a(u+v)=au+av$, and $(a+b)v=av+bv$. Both operations stay in the space.

In $\mathbb R^2$, add and multiply coordinates separately. But vectors can also be polynomials: the real polynomials of degree at most two form a vector space with basis $1,x,x^2$. The scalar field matters. Complex numbers have dimension one over $\mathbb C$, but dimension two over $\mathbb R$, with basis $1,i$.

## Linear dependence and bases

A linear combination of $v_1,\ldots,v_k$ is $a_1v_1+\cdots+a_kv_k$. Their **span** contains all such combinations. The vectors are independent when the only combination equal to zero has all coefficients zero. A basis is an independent spanning list. Spanning gives coordinates for each vector; independence makes those coordinates unique. The finite dimension is the number of basis vectors.

For $(1,2)$ and $(2,4)$, the relation $2(1,2)-(2,4)=0$ proves dependence. Their span is only a line. The pair $(1,2),(0,1)$ is independent: the first coordinate in $a(1,2)+b(0,1)=0$ gives $a=0$, then the second gives $b=0$. It spans the plane because $(x,y)=x(1,2)+(y-2x)(0,1)$.

## Linear operators and a worked example

A map $T:V\to W$ is linear if $T(au+bv)=aT(u)+bT(v)$. When $V=W$, it is a **linear operator**. In coordinates it has a matrix whose columns are the images of basis vectors. A map with a nonzero constant offset is generally affine, not linear: it fails $T(0)=0$.

Take $T(x,y)=(x+y,2y)$, whose matrix is $\begin{pmatrix}1&1\\0&2\end{pmatrix}$. The input $(3,-1)$ maps to $(2,-2)$. Solving $T(x,y)=0$ gives $y=0$ then $x=0$, so the kernel is zero. Given $(u,v)$, choose $y=v/2$ and $x=u-v/2$; every output is reached. Thus this map is invertible, with inverse $T^{-1}(u,v)=(u-v/2,v/2)$.

For any linear map from a finite-dimensional space, the rank-nullity formula is $\dim V=\dim\ker T+\dim\operatorname{im}T$. One proof takes a basis for the kernel, extends it to a basis of $V$, then observes that the images of the added basis vectors form a basis of the image. This explains why independent input directions can be lost only through the kernel.

## Subspaces and the dimension formula

A **subspace** contains zero and is closed under all linear combinations. A homogeneous linear equation gives a subspace, while $x+y=1$ does not. For subspaces $U,W$, their sum $U+W$ consists of all $u+w$. It is a subspace; the ordinary union usually is not.

For finite dimensions,

$$
\dim(U+W)=\dim U+\dim W-\dim(U\cap W).
$$

To justify the subtraction, take a basis of the intersection, extend it separately to bases of $U$ and $W$, then combine the extensions with just one copy of the shared basis. The resulting list spans the sum and is independent. For the coordinate planes $U=\{(x,y,0)\}$ and $W=\{(0,y,z)\}$, each dimension is two. Their intersection is the $y$-axis, of dimension one, and their sum is all of $\mathbb R^3$, of dimension $2+2-1=3$.

## Euclidean inner products and norms

A real **inner product** $\langle u,v\rangle$ is bilinear, symmetric, and positive definite: $\langle v,v\rangle>0$ for nonzero $v$. A finite-dimensional real vector space with such a product is Euclidean. Its norm is $\|v\|=\sqrt{\langle v,v\rangle}$. In ordinary coordinates, $\langle u,v\rangle=\sum_i u_i v_i$, so $(3,4)$ has norm $5$.

Orthogonal vectors have zero inner product. Cauchy–Schwarz, $|\langle u,v\rangle|\le\|u\|\|v\|$, follows by expanding $\|u-tv\|^2\ge0$ and minimizing over real $t$ when $v\ne0$. It implies the triangle inequality after expanding $\|u+v\|^2$. Thus the length rules follow from the inner-product assumptions, not from an arbitrary formula called a product.

## Bilinear mappings and forms

A map $B:V\times W\to Z$ is bilinear if it is linear in either input with the other fixed. A **bilinear form** has scalar outputs, usually with $V=W$. In finite coordinates it is $B(u,v)=u^TMv$ for a matrix $M$. It need not be symmetric or positive. For $M=\operatorname{diag}(1,-1)$, $B(v,v)=x^2-y^2$ can be negative or zero for nonzero $v$, so it cannot define a Euclidean norm by a square root.

For a less familiar example, $B((x,y),(s,t))=xt-ys$ is bilinear and antisymmetric. It measures oriented area and gives zero when both inputs are equal. Therefore bilinear does not mean inner product. On complex spaces, a positive inner product uses conjugation in one input and is sesquilinear rather than complex-bilinear. See [[11.01 Bilinear maps]] and [[11.09 Complex inner products]] for these distinctions.

## Practice

1. Find the dimension of the span of $(1,0,1),(0,1,1),(1,1,2)$.
2. Is $B((x,y),(s,t))=2xs+3yt$ a real inner product? Compute the resulting norm of $(1,2)$.

### Worked answers

1. The third vector is the sum of the first two. The first two are independent because their first two coordinates force both coefficients to vanish. They form a basis of the span, whose dimension is two.
2. The expression is bilinear and symmetric. Also $B(v,v)=2x^2+3y^2>0$ for every nonzero real vector. Thus it is an inner product. The norm of $(1,2)$ is $\sqrt{2+12}=\sqrt{14}$, not the ordinary Euclidean coordinate norm $\sqrt5$.
