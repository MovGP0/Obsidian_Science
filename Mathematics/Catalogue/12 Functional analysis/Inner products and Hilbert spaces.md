---
title: "Inner products and Hilbert spaces"
catalogue_ids:
  - "12.4"
  - "12.4.1"
  - "12.4.1.1"
  - "12.4.1.2"
  - "12.4.1.3"
---

> [!TLDR]
> An inner product defines lengths and orthogonality; completeness in its induced norm turns the space into a Hilbert space.

## Start with the dot product

Read [[05.05 Dot products]], [[11.04 Inner products]], and [[Norms Banach spaces and series]]. In $\mathbb R^n$, the dot product is $\langle x,y\rangle=\sum_jx_jy_j$. Its diagonal value is $\langle x,x\rangle=\sum_jx_j^2$, so it supplies the Euclidean length $\sqrt{\langle x,x\rangle}$. For example, $(1,2)$ and $(2,-1)$ are orthogonal because their dot product is zero.

An abstract inner product preserves these algebraic properties without requiring a finite coordinate list. Over the complex numbers we use the convention of [[11.09 Complex inner products]]: the first input is conjugate-linear, and the second is linear. Thus

$$
\langle ax+by,z\rangle=\overline a\langle x,z\rangle+\overline b\langle y,z\rangle,
\qquad
\langle z,ax+by\rangle=a\langle z,x\rangle+b\langle z,y\rangle.
$$

Also require Hermitian symmetry $\langle y,x\rangle=\overline{\langle x,y\rangle}$ and positive definiteness: $\langle x,x\rangle>0$ for nonzero $x$. Its diagonal value is therefore a nonnegative real number. Over $\mathbb R$, conjugation changes nothing and the form is bilinear and symmetric.

## Complex and unitary spaces

A complex inner-product space is sometimes called a **unitary space**. This terminology does not, by itself, assert completeness. A real inner-product space is also called a Euclidean space in some texts, although that name can be restricted to finite dimension. We use “inner-product space” for the general concept and “Hilbert space” when completeness is known.

For complex coordinate vectors the standard product is $\langle x,y\rangle=\sum_j\overline{x_j}y_j$. Conjugation is essential: for $x=(1,i)$ it gives squared norm $2$, whereas the bilinear expression $1^2+i^2$ is zero despite $x\ne0$.

## Cauchy–Schwarz and the induced norm

For $y\ne0$, put $c=\langle y,x\rangle/\langle y,y\rangle$. Expanding the nonnegative quantity $\langle x-cy,x-cy\rangle$ gives

$$
0\le\|x\|^2-\frac{|\langle y,x\rangle|^2}{\|y\|^2}.
$$

Here $\|x\|=\sqrt{\langle x,x\rangle}$. Rearrangement proves the **Cauchy–Schwarz inequality**

$$
|\langle x,y\rangle|\le\|x\|\|y\|.
$$

It is also true when $y=0$. Equality holds exactly when $x,y$ are linearly dependent, including the zero-vector cases. Expanding $\|x+y\|^2$ and using Cauchy–Schwarz yields $\|x+y\|\le\|x\|+\|y\|$. Positive definiteness and homogeneity follow directly from the inner-product axioms. Hence an inner product does induce a norm.

The inner product is continuous in this norm. For example,

$$
|\langle x_n,y_n\rangle-\langle x,y\rangle|
\le\|x_n-x\|\|y_n\|+\|x\|\|y_n-y\|,
$$

which tends to zero when both sequences converge. A convergent sequence $(y_n)$ is bounded, so the first term also vanishes.

## Which norms can come from inner products?

Every inner-product norm satisfies the **parallelogram identity**

$$
\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2.
$$

Expand the two squared norms; the mixed terms cancel. Conversely, a norm satisfying this identity comes from an inner product by a polarization formula. For a real space the formula is $(\|x+y\|^2-\|x-y\|^2)/4$. The complex version, with the convention used here, is in [[11.09 Complex inner products]].

For the $1$-norm on $\mathbb R^2$, choose $x=(1,0)$ and $y=(0,1)$. The left side of the identity is $2^2+2^2=8$, while the right side is $4$. Thus that norm cannot come from an inner product. The space is Banach but is not Hilbert with that norm.

## Hilbert spaces and examples

A **Hilbert space** is an inner-product space complete in its induced norm. The finite-dimensional spaces $\mathbb R^n$ and $\mathbb C^n$ are examples. An infinite example is

$$
\ell^2=\{x=(x_j):\sum_{j=1}^{\infty}|x_j|^2<\infty\},\qquad
\langle x,y\rangle=\sum_{j=1}^{\infty}\overline{x_j}y_j.
$$

Cauchy–Schwarz applied to partial sums ensures that this pairing converges. Completeness of $\ell^2$ makes it Hilbert. The finitely supported sequences with the same pairing are not Hilbert, since truncations of $(2^{-j})$ converge outside that smaller space.

Another example is $L^2(0,1)$ with $\langle f,g\rangle=\int_0^1\overline{f(t)}g(t)\,dt$. Elements are functions identified when equal almost everywhere, as introduced in [[Sobolev spaces and weak derivatives]]. This identification is essential for positive definiteness. The integral is Lebesgue's; for continuous examples it equals the usual integral. The Hilbert-space examples and parallelogram criterion are developed in [MIT Lecture 14](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/resources/lecture-14-basic-hilbert-space-theory/), which uses the opposite complex convention.

## Worked example: a complex coefficient

Let $u=(1,i)$ and $x=(i,0)$ in $\mathbb C^2$. Since $\langle u,u\rangle=2$ and $\langle u,x\rangle=i$, the orthogonal component along $u$ is $p=(i/2)u=(i/2,-1/2)$. The residual is $r=x-p=(i/2,1/2)$, and

$$
\langle u,r\rangle=i/2+(-i)(1/2)=0.
$$

Also $\|p\|^2=1/2$, $\|r\|^2=1/2$, and $\|x\|^2=1$. Reversing the numerator pairing would conjugate $i$ and produce the wrong projection. Check a genuinely complex coefficient when checking conventions.

## Practice

1. In $\mathbb C^2$, calculate $\langle(1+i,1),(1,i)\rangle$ and both squared norms.
2. Can $\|x\|_\infty$ on $\mathbb R^2$ arise from an inner product?

## Worked answers

1. Conjugate the first vector: the pairing is $(1-i)1+1i=1$. The squared norms are $|1+i|^2+1=3$ and $1+|i|^2=2$. The inequality $1\le\sqrt6$ verifies Cauchy–Schwarz here.
2. No. For $x=(1,0),y=(0,1)$, both $x+y$ and $x-y$ have infinity norm one. The parallelogram left side is $2$, but the right side is $4$. The necessary identity fails.
