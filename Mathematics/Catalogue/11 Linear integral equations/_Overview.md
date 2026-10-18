---
title: "Linear integral equations"
catalogue_ids:
  - "11"
---

> [!TLDR]
> Integral equations determine a function from weighted integrals of its values; the type of equation controls existence, stability, and the solution method.

## Start from a weighted sum

In the equation $2v_1+3v_2=7$, the unknowns are two numbers. In an integral equation, the unknown can be a whole function $u(t)$. An integral combines its values with weights. For example,

$$
u(x)=1+x\int_0^1u(t)\,dt
$$

asks for every value of $u$, although the integral itself is only one number. Call that number $c$. Then $u(x)=1+cx$. Integrate this expression from $0$ to $1$: $c=1+c/2$. Thus $c=2$ and $u(x)=1+2x$. Substitution gives $\int_0^1(1+2t)\,dt=2$, which checks the entire equation. The function is not a number, but one carefully chosen number can sometimes determine it.

This chapter develops that idea before it introduces general operators or complex boundary values. The examples use ordinary real or complex functions, not physical models. A school-level reader can start here, but should follow the prerequisite route instead of treating the last lessons as elementary algebra.

## Prerequisite route

Start with [[03.01 Function definitions]] if function notation is unfamiliar. Read [[08.01 Definite integrals]], [[08.02 Antiderivatives]], and [[08.03 The fundamental theorem]] to understand integration and its relation to differentiation. They supply the new operation that replaces a finite sum.

Next use [[10.03 Matrices]] and [[10.04 Linear systems]] for finite-rank examples and numerical approximation. [[09.02 Infinite series#Geometric series]] explains why repeated correction can give a solution. [[10.07 Eigenvalues and eigenvectors]] helps with the two orthonormal systems in first-kind equations. Each required function-space idea is defined where it first occurs.

For the last two lessons, read [[06.01 Complex arithmetic]], [[06.02 The complex plane]], and [[06.08 Complex-valued functions]]. A complex contour is a directed curve in the plane. An analytic function is complex differentiable in a region. The boundary-jump lesson introduces these ideas locally; full proofs of its boundary-limit theorem require later complex analysis. The text states that limit rather than hiding it inside a calculation.

## Choose a path through the equations

Read [[Kernels and classification]] first. It distinguishes fixed integration limits from a variable upper limit, and first-kind equations from second-kind equations. This classification is a decision tool: the same formula can need a very different method when the unknown outside the integral is removed.

For a fixed interval, use [[Finite-rank kernels and successive approximation]] for exact reduction and convergent iteration. Continue to [[Fredholm determinants and alternatives]] for exceptional parameter values and compatibility conditions. Then use [[Quadrature and collocation]] to construct a finite numerical problem and check its error.

[[First-kind equations and singular systems]] explains why recovering an unknown from its average can lose information. Existence, uniqueness, and sensitivity are three separate questions. Its concrete two-mode example comes before its general singular-system criterion.

[[Volterra equations and convolution]] uses the triangular integration region $0\leq t\leq x$. This ordering makes repeated integrations smaller by factorial factors. [[Abel equations and weak singularities]] treats an unbounded weight whose integral still exists. Its inversion formula is derived from two ordinary integrations.

[[Cauchy integrals and boundary jumps]] defines a principal value before using a kernel with a pole. [[Hilbert boundary problems and characteristic equations]] then changes such an equation into a relation between two complex boundary values. The word “Hilbert” here refers to a boundary problem, not simply to a vector space with an inner product.

## Three questions to ask about every answer

First ask whether an answer exists for the specified data. An average cannot equal two different prescribed constants at once. Next ask whether the answer is unique. Knowing only an average leaves many functions possible. Finally ask whether small changes in the data cause small changes in the answer. A formula that differentiates noisy data can give large errors even when the exact answer is unique.

Always state the interval, the permitted functions, the integration convention, and any boundary or normalization condition. For example, “all continuous functions on $[0,1]$” and “all integrable functions on $(0,1)$” are different answer classes. An endpoint singularity can belong to one and not the other.

## Practice

1. Solve $u(x)=2+x\int_0^1u(t)\,dt$ by introducing a single number.
2. Does $\int_0^1u(t)\,dt=0$ determine $u$ uniquely? Give two solutions.

## Worked answers

1. Put $c=\int_0^1u$. Then $u(x)=2+cx$, so $c=2+c/2$, $c=4$, and $u(x)=2+4x$. Its integral is $4$, as required.
2. No. Both $u(t)=0$ and $u(t)=t-1/2$ have zero integral. The second function integrates to $1/2-1/2=0$. One integral supplies only one constraint on a function.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#11. Linear integral equations|the detailed catalogue]].

- [[Kernels and classification|Kernels and classification]] — 11.1.
- [[Finite-rank kernels and successive approximation|Finite-rank kernels and successive approximation]] — 11.2, 11.2.1, 11.2.2.
- [[Fredholm determinants and alternatives|Fredholm determinants and alternatives]] — 11.2.3, 11.2.3.1, 11.2.3.2.
- [[Quadrature and collocation|Quadrature and collocation]] — 11.2.4, 11.2.4.1, 11.2.4.2, 11.2.4.3.
- [[First-kind equations and singular systems|First-kind equations and singular systems]] — 11.3, 11.3.1, 11.3.2, 11.3.3, 11.3.4, 11.3.5, 11.3.6.
- [[Volterra equations and convolution|Volterra equations and convolution]] — 11.4, 11.4.1, 11.4.2, 11.4.3, 11.4.4, 11.4.5.
- [[Abel equations and weak singularities|Abel equations and weak singularities]] — 11.5, 11.5.1.
- [[Cauchy integrals and boundary jumps|Cauchy integrals and boundary jumps]] — 11.5.2, 11.5.2.1, 11.5.2.2, 11.5.2.3.
- [[Hilbert boundary problems and characteristic equations|Hilbert boundary problems and characteristic equations]] — 11.5.2.4, 11.5.2.5, 11.5.2.6.
<!-- catalogue-complete-lesson-index:end -->
