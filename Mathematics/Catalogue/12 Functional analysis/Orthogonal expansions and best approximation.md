---
title: "Orthogonal expansions and best approximation"
catalogue_ids:
  - "12.4.2"
  - "12.4.2.1"
  - "12.4.2.2"
  - "12.4.3"
  - "12.4.3.1"
  - "12.4.3.2"
  - "12.4.4"
---

> [!TLDR]
> Orthogonal projection gives the closest approximation in a closed subspace, while complete orthonormal systems give convergent Fourier expansions and Parseval’s identity.

## Orthogonality and orthogonal systems

Begin with [[Inner products and Hilbert spaces]]. We keep its complex convention: conjugate-linear first input and linear second input. Vectors $u,v$ are **orthogonal**, written $u\perp v$, when $\langle u,v\rangle=0$. Symmetry of this condition follows from Hermitian symmetry. If $u\perp v$, expansion gives the Pythagorean identity $\|u+v\|^2=\|u\|^2+\|v\|^2$.

An **orthogonal system** is a family of nonzero pairwise orthogonal vectors. It is **orthonormal** if each also has norm one. Orthogonal systems are linearly independent: pair a finite relation $\sum_jc_je_j=0$ with $e_k$ to obtain $c_k\|e_k\|^2=0$. Nonzero norms force all coefficients to vanish.

One can turn a finite independent list $v_1,\ldots,v_n$ into an orthonormal list by Gram–Schmidt. Normalize $v_1$ to get $e_1$. Subtract $\sum_{j<k}e_j\langle e_j,v_k\rangle$ from $v_k$ and normalize the nonzero residual. The residual is nonzero because otherwise $v_k$ would lie in the earlier span. See [[11.05 Orthonormal bases]] for the finite-coordinate method.

## Best approximation by projection

Let $e_1,\ldots,e_N$ be orthonormal, and let $M$ be their span. Define

$$
p_N=\sum_{j=1}^N e_j\langle e_j,x\rangle.
$$

Pairing $x-p_N$ with each $e_k$ gives zero, so the residual is orthogonal to $M$. For any other $q\in M$, the two parts of $x-q=(x-p_N)+(p_N-q)$ are orthogonal. Hence

$$
\|x-q\|^2=\|x-p_N\|^2+\|p_N-q\|^2\ge\|x-p_N\|^2.
$$

Equality requires $q=p_N$. Thus $p_N$ is the unique closest approximation from $M$.

![[catalogue-ch12a-orthogonal-projection.svg|**Fig. C.ch12a.2** The residual from x to its projection p is perpendicular to the subspace. Every other candidate q adds a nonnegative squared error.]]

The **projection theorem** extends this statement to every closed linear subspace $M$ of a Hilbert space: each $x$ has a unique $p\in M$ with $x-p\perp M$. Completeness and closedness supply existence of the minimizing limit. Without closedness, an infimum distance can fail to be attained. For instance, in $\ell^2$, finitely supported sequences approximate $(2^{-j})$ arbitrarily well but never equal it.

## Fourier coefficients and Bessel's inequality

For an orthonormal sequence $(e_j)$, the coefficients $c_j=\langle e_j,x\rangle$ are called **Fourier coefficients**, even when the vectors are not trigonometric functions. Pythagoras applied to $x=p_N+(x-p_N)$ gives

$$
\sum_{j=1}^N|c_j|^2\le\|x\|^2.
$$

This is **Bessel's inequality**. Letting $N$ increase shows that the coefficient sequence is square summable. The partial expansions form a Cauchy sequence, because $\|p_m-p_n\|^2=\sum_{j=n+1}^m|c_j|^2$. Completeness supplies a limit $p$ in the closed span of the system. This is the projection of $x$ onto that closed span, which need not be the whole space.

## Parseval and Riesz–Fischer

An orthonormal sequence is **complete** if its finite linear span is dense in the Hilbert space. This is unrelated to the completeness of the metric space itself. For a complete orthonormal system, the preceding projection equals $x$, so

$$
x=\sum_{j=1}^{\infty}e_j\langle e_j,x\rangle,
\qquad
\|x\|^2=\sum_{j=1}^{\infty}|\langle e_j,x\rangle|^2.
$$

The second equality is **Parseval's identity**. Convergence here is in norm. For functions in $L^2$, norm convergence does not automatically mean pointwise convergence at every input.

The coefficient form of the **Riesz–Fischer theorem** is the converse construction: given an orthonormal sequence $(e_j)$ in a Hilbert space and any square-summable scalars $(c_j)$, the partial sums $\sum_{j\le N}c_je_j$ converge in norm to a vector in their closed span with those coefficients. The same Pythagorean tail estimate proves the result. If the system is complete, every vector arises in this way. The name is also used for the completeness theorem for $L^2$; in that setting it justifies the same construction for Fourier series. See [MIT Lecture 15](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/resources/lecture-15-orthonormal-bases-and-fourier-series/) for orthonormal expansions and coefficient classification.

## Existence of bases and isomorphic Hilbert spaces

Every Hilbert space has an orthonormal basis, where “basis” means a complete orthonormal family. In a separable Hilbert space, start from a countable dense list and apply Gram–Schmidt, skipping dependent vectors. The resulting finite or countable orthonormal family has dense span. In the general case, existence uses a maximal-family argument, usually Zorn's lemma; its proof requires set theory beyond this lesson.

This is not a Hamel basis: infinite norm-convergent sums are allowed. A Hamel basis uses finite linear combinations only. Every separable infinite-dimensional Hilbert space over the same scalar field is linearly isometric to $\ell^2$ by $x\mapsto(\langle e_j,x\rangle)_j$. Parseval proves length preservation and Riesz–Fischer proves surjectivity. For nonseparable spaces, an orthonormal basis may have an uncountable index set; equal Hilbert dimensions mean equal cardinalities of orthonormal bases, and characterize isometric isomorphism over the same field.

## Worked example: approximate a quadratic by a line

In real $L^2(0,1)$, use $e_0(t)=1$ and $e_1(t)=\sqrt{12}(t-1/2)$. Their norms are one and their inner product is zero, as direct integration shows. For $f(t)=t^2$,

$$
c_0=\int_0^1t^2\,dt=\frac13,\qquad
c_1=\sqrt{12}\int_0^1(t-1/2)t^2\,dt=\frac1{\sqrt{12}}.
$$

Thus the best linear approximation in squared-integral error is $p(t)=c_0e_0+c_1e_1=t-1/6$. Its squared error is $\|f\|^2-c_0^2-c_1^2=1/5-1/9-1/12=1/180$. This criterion minimizes integrated squared error, not the largest pointwise error.

## Practice

1. Project $x=(3,1)$ onto the line spanned by $u=(1,1)$ and find the squared error.
2. In $\ell^2$, let $x=(2^{-j})_{j\ge1}$. Find the squared error of its first $N$ standard-coordinate terms.

## Worked answers

1. For a nonunit vector, $p=u\langle u,x\rangle/\langle u,u\rangle=(1,1)(4/2)=(2,2)$. The residual $(1,-1)$ is orthogonal to $u$, and its squared norm is $2$.
2. The squared error is the geometric tail $\sum_{j>N}4^{-j}=4^{-(N+1)}/(1-1/4)=4^{-N}/3$. The norm error is therefore $2^{-N}/\sqrt3$. It tends to zero, proving convergence in $\ell^2$.
