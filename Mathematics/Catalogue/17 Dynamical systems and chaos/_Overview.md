---
title: "Dynamical systems and chaos"
catalogue_ids:
  - "17"
---

> [!TLDR]
> A repeated rule can produce convergence, cycles, or deterministic chaos; study the rule before drawing conclusions from a plot.

## What this chapter studies

Start with a number, apply a rule, and use the result as the next input. For example, $x_{n+1}=x_n/2$ gives $1,1/2,1/4,\ldots$. A **dynamical system** studies how such states change as an index or a continuous parameter advances. The states can also be ordered pairs, vectors, or points on a circle. A deterministic rule gives one future from each exact starting state. It need not give a simple-looking future.

This chapter connects three questions. First, what long-term behavior can occur? Second, how can we measure that behavior? Third, how does it change when a parameter changes? A fixed point, a repeating cycle, and a chaotic invariant set are different answers. A figure can suggest an answer, but the equation and its domain determine whether that answer is correct.

## A route from school mathematics

Begin with [[03.01 Function definitions]], [[03.07 Composition and inverse functions]], and [[09.01 Sequences]]. These explain input, output, repeated composition, and limits. Then read [[Iteration and invariant sets]]. That lesson starts with arithmetic rather than a theorem about abstract spaces.

For continuous evolution, read [[07.03 The derivative]], [[07.08 Linear approximation]], [[14.02 Solutions and data]], and [[14.06 Linear systems]] before [[Flows and linear stability]]. A derivative is an instantaneous rate of change. A differential equation specifies that rate instead of giving the next value directly. [[10.07 Eigenvalues and eigenvectors]] supplies the matrix language needed for several coordinates. The lessons below repeat the parts needed to interpret stability.

For distances and curved state spaces, use [[19.01 Local models]] and [[27.01 Topological language]] if their terms are new. The working examples use lines, planes, and circles, so the abstract language can follow the concrete calculations. For averages, use [[08.01 Definite integrals]]. In this chapter an integral against a probability measure is a weighted mean; a finite sum is its simplest example.

## Read in this order

1. [[Iteration and invariant sets]] introduces states, orbits, fixed points, cycles, and invariant sets.
2. [[Flows and linear stability]] builds continuous evolution and tests local behavior.
3. [[Manifolds and return maps]] reduces continuous recurrence to a map on a section.
4. [[Conjugacy and structural stability]] distinguishes a change of coordinates from a change in behavior.
5. [[Invariant measures and ergodic averages]] counts how often orbits visit regions.
6. [[Entropy and Lyapunov exponents]] separates information growth from displacement growth.
7. [[Dimensions of attractors]] measures the geometry and probability distribution of an invariant set.
8. [[Chaos in interval maps]] proves irregular behavior for a specific repeated rule.
9. [[Reconstructing dynamics from observations]] explains what delayed observations can recover.
10. [[Local and global bifurcations]] studies changes in equilibria and cycles.
11. [[Routes to chaos]] compares several mechanisms that can produce complicated motion.

## Worked comparison: the same state space, different rules

Consider $[0,1]$, the interval of all real numbers between zero and one. Under $f(x)=x/2$, an initial value $x_0$ gives $x_n=x_0/2^n$, so every orbit approaches zero. Under $g(x)=1-x$, the same initial value gives $x_0,1-x_0,x_0,\ldots$. Except at $x_0=1/2$, it has period two. Finally, the tent map stretches each half of the interval onto the whole interval. Its branch choices can encode any infinite sequence of two symbols, as [[Chaos in interval maps]] explains.

Thus the interval's ordinary geometric dimension does not decide whether the dynamics are simple. A one-dimensional map can be chaotic. Conversely, a map on a very large vector space can send every point directly to zero. Geometry and dynamics answer different questions.

## What calculations can establish

An exact formula such as $x_n=2^{-n}x_0$ proves convergence. A finite list of computed values does not prove a limit, an invariant density, or a positive infinite-time exponent. Rounding can send an apparently irregular orbit into a cycle. Use computations to test a claim, then state which part is proved and which part remains evidence.

The word **chaos** has several precise definitions. The interval-map lesson specifies the definition it uses. A strange geometric shape, a positive finite-time estimate, and a random input are not interchangeable definitions. In particular, deterministic chaos does not require a random choice at each step.

## Practice

1. Find the first four terms, starting at $x_0=1/4$, for $x_{n+1}=1-x_n$. Is the orbit fixed or periodic?
2. A program reports 1,000 decreasing terms of an unknown sequence. Does this prove convergence? What extra information would make a convergence proof possible?

## Worked answers

1. The terms are $1/4,3/4,1/4,3/4$. The two distinct values repeat, so the least period is two. Starting at $1/2$ would instead give a fixed point.
2. No. Later terms can change, and a decreasing sequence can also tend to negative infinity. A proof that every term is bounded below and the entire sequence is decreasing establishes convergence. An explicit formula with a known limit can also establish it.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#17. Dynamical systems and chaos|the detailed catalogue]].

- [[Iteration and invariant sets|Iteration and invariant sets]] — 17.1, 17.1.1, 17.1.1.1, 17.1.1.2, 17.1.3, 17.1.3.1.
- [[Flows and linear stability|Flows and linear stability]] — 17.1.2, 17.1.2.1, 17.1.2.2, 17.1.2.3.
- [[Manifolds and return maps|Manifolds and return maps]] — 17.1.2.4, 17.1.2.5, 17.1.3.2.
- [[Conjugacy and structural stability|Conjugacy and structural stability]] — 17.1.2.6, 17.1.3.3, 17.1.4, 17.1.4.1, 17.1.4.2, 17.1.4.3.
- [[Invariant measures and ergodic averages|Invariant measures and ergodic averages]] — 17.2, 17.2.1, 17.2.1.1, 17.2.1.2.
- [[Entropy and Lyapunov exponents|Entropy and Lyapunov exponents]] — 17.2.2, 17.2.2.1, 17.2.2.2, 17.2.3.
- [[Dimensions of attractors|Dimensions of attractors]] — 17.2.4, 17.2.4.1, 17.2.4.2, 17.2.4.3, 17.2.4.4.
- [[Chaos in interval maps|Chaos in interval maps]] — 17.2.5, 17.2.6.
- [[Reconstructing dynamics from observations|Reconstructing dynamics from observations]] — 17.2.7, 17.2.7.1, 17.2.7.2.
- [[Local and global bifurcations|Local and global bifurcations]] — 17.3, 17.3.1, 17.3.1.1, 17.3.1.2, 17.3.1.3.
- [[Routes to chaos|Routes to chaos]] — 17.3.2, 17.3.2.1, 17.3.2.2, 17.3.2.3, 17.3.2.4.
<!-- catalogue-complete-lesson-index:end -->
