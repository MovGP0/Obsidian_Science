---
title: "Continuous functionals and representation"
catalogue_ids:
  - "12.5.4"
  - "12.5.4.1"
  - "12.5.4.2"
  - "12.5.4.3"
---

> [!TLDR]
> A continuous linear functional assigns a stable scalar to a vector or function; representation theorems describe all such assignments.

## Prerequisite route

Read [[18.01 Dual spaces]], [[11.04 Inner products]], and [[Bounded operators and convergence]]. For the function-space part first read [[Measure and Lebesgue integration]] and [[Lp spaces and integral norms]]. The finite-dimensional part can be read without integration. A **Hilbert space** is an inner-product space complete in its induced norm. We use inner products conjugate-linear in the first argument and linear in the second.

## Continuous linear functionals

A **linear functional** on a real or complex normed space $X$ is a linear map $f:X\to\mathbb F$, where $\mathbb F$ is the scalar field. It is continuous precisely when $|f(x)|\le C\|x\|$ for a fixed finite $C$. Its norm is

$$
\|f\|=\sup_{\|x\|\le1}|f(x)|.
$$

The set of these functionals is the **continuous dual** $X^*$. It is a Banach space even when $X$ is incomplete, because its outputs lie in the complete scalar field. The algebraic dual in [[18.01 Dual spaces]] contains all linear functionals. In infinite dimensions some are discontinuous, so the two duals need not agree.

For example, evaluation $f(u)=u(0)$ is bounded on $C[0,1]$ with the uniform norm: $|u(0)|\le\max|u|$, and the constant function $1$ shows $\|f\|=1$. On $L^2[0,1]$, point evaluation is not a well-defined functional: changing one point does not change the $L^2$ element.

## Riesz representation in Hilbert space

The **Riesz representation theorem** states that every bounded linear functional $f$ on a Hilbert space $H$ has a unique vector $v\in H$ with

$$
f(x)=\langle v,x\rangle,
\qquad \|f\|=\|v\|.
$$

For complex spaces the correspondence $v\mapsto f$ is conjugate-linear under our convention. It uses the inner product and is different from the natural evaluation map into the double dual. The theorem requires completeness; a general incomplete inner-product space need not contain the representing vector. [MIT lecture 17](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/c97549663746d6bc4a379077e067c55b_MIT18_102s21_lec17.pdf)

In a real Euclidean space this is familiar. For $f(x,y)=3x-4y$, the representing vector is $v=(3,-4)$. Cauchy–Schwarz gives $|f(x,y)|\le5\sqrt{x^2+y^2}$. At $(3/5,-4/5)$ the value is $5$, so $\|f\|=5$.

Here is the structure behind the theorem. For nonzero $f$, its kernel is a closed subspace. Orthogonal projection gives a nonzero vector $w$ perpendicular to the kernel. Every vector can be written as an element of the kernel plus a scalar multiple of $w$. Choose the multiple of $w$ that makes its inner product reproduce $f(w)$. This yields the formula on every input. If two representing vectors existed, their difference would be perpendicular to every vector, including itself, so it would be zero. The existence of orthogonal projection is the advanced step.

## Continuous functionals in Lp

For this section use real-valued functions on $[0,1]$ with Lebesgue measure. For $1<p<\infty$, let $q=p/(p-1)$, so $1/p+1/q=1$. Every $g\in L^q$ defines

$$
F_g(u)=\int_0^1u(t)g(t)\,dt.
$$

Hölder's inequality gives $|F_g(u)|\le\|u\|_p\|g\|_q$. The $L^p$ duality theorem states that every continuous linear functional has this form, with $g$ unique up to sets of measure zero, and $\|F_g\|=\|g\|_q$. The same description holds at $p=1$ with $q=\infty$ on this finite measure space. On general spaces the $p=1$ statement needs a measure hypothesis such as sigma-finiteness. The continuous dual of $L^\infty[0,1]$ is larger than the functionals represented by $L^1$ densities. [Hunter, section 7.5](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf#page=86)

The norm equality has a constructive reason when $1<p<\infty$ and $g\ne0$. Set

$$
u=\frac{\operatorname{sgn}(g)|g|^{q-1}}{\|g\|_q^{q/p}}.
$$

Here $\operatorname{sgn}(g)$ is $1,-1,$ or $0$ according to the sign. Since $(q-1)p=q$, the integral of $|u|^p$ is $1$. Also $F_g(u)=\|g\|_q$. Thus Hölder's upper bound is attained. This calculation proves the norm formula for represented functionals; the theorem that all functionals are represented needs additional measure theory.

## Worked integral example

For $F(u)=\int_0^1t\,u(t)\,dt$ on real $L^2[0,1]$, the representing function is $g(t)=t$. Its norm is

$$
\|F\|=\left(\int_0^1t^2\,dt\right)^{1/2}=1/\sqrt3.
$$

The unit function $u(t)=\sqrt3t$ attains this norm. By contrast, on $L^1[0,1]$ the same formula has functional norm $\|t\|_\infty=1$. The formula is unchanged, but the input norm changes the error bound.

## Practice

1. On $\mathbb C^2$ use $\langle v,x\rangle=\overline v_1x_1+\overline v_2x_2$. Find the representing vector of $f(x)=x_1+2ix_2$ and its norm.
2. Find the norm of $G(u)=\int_0^1 2u(t)\,dt$ on real $L^2[0,1]$, and provide a unit input that attains it.

> [!example]- Worked answers
> 1. We need $\overline v_1=1$ and $\overline v_2=2i$. Thus $v=(1,-2i)$ and $\|f\|=\|v\|=\sqrt5$. Forgetting conjugation gives the wrong representing vector.
> 2. The representing function is the constant $2$, whose $L^2$ norm is $2$. The constant input $u=1$ has norm $1$ and gives $G(u)=2$, so the bound is sharp.
