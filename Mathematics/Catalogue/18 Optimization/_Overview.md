---
title: "Overview"
catalogue_ids:
  - "18"
---

> [!TLDR]
> Optimization selects the best permitted choice for a stated mathematical objective.

## What this chapter asks

An optimization problem contains three parts: choices, restrictions, and a measure of quality. For example, choose real numbers $x,y\geq0$, require $x+y\leq4$, and maximize $3x+2y$. A restriction is a **constraint**. A choice that obeys every constraint is **feasible**. The expression to maximize or minimize is the **objective function**. A solution must be feasible before its objective value matters.

The best value and the choice that gives it are different objects. In the example, the choice is $(4,0)$ and the value is $12$. The inequality $3x+2y\leq3x+3y\leq12$ proves that no permitted choice is better. This is an **optimality certificate**: a checkable mathematical reason, stronger than a report that a search stopped.

## Prerequisite route

Start with [[Linear and quadratic equations]] and [[Solving linear and quadratic inequalities]]. These use school algebra. Then read [[05.03 Components and bases]], [[05.05 Dot products]], [[10.03 Matrices]], and [[10.04 Linear systems]]. A vector is an ordered list of choices; a matrix is a rectangular table of coefficients. The first three linear-optimization lessons explain their use before introducing an algorithm.

For nonlinear methods, continue through [[07.03 The derivative]], [[07.04 Differentiation rules]], [[12.02 Partial derivatives]], [[12.05 Second derivatives]], and [[12.06 Gradients and extrema]]. A derivative measures local change; a gradient collects partial derivatives. These notes explain the tools needed for the later formulas. Read the nonlinear foundations before the quadratic and gradient methods.

Discrete dynamic optimization needs finite tables and substitution, rather than calculus. Read [[Dynamic decisions and Bellman equations]] before [[Purchasing and knapsack policies]]. Here **dynamic** means that decisions occur in stages; it does not mean that a differential equation is required.

## Three main problem families

**Linear optimization** has linear objectives and linear constraints. Its feasible region is an intersection of half-spaces and hyperplanes. Simplex follows edges between vertices. Duality gives bounds on the answer. Transportation, assignment, and continuous allocation have useful special structures. Tours and sequencing additionally need discrete choices; their linear relaxations alone can give invalid answers to the discrete problem.

**Nonlinear optimization** permits curved objectives or constraints. A small gradient is evidence about local change, not a proof of a global minimum. Convexity provides a useful exception: a convex objective over a convex feasible set has no nonglobal local minima. Quadratic methods, direct searches, evolutionary searches, projected gradients, penalties, barriers, and cuts solve different forms of this problem.

**Discrete dynamic optimization** compares decisions through the states they create. Bellman's equation stores the best remaining value at each state. A policy specifies a decision at every relevant state, rather than only a list of decisions for one initial condition.

## Check the model before the method

A feasible set can be empty. An objective can improve without bound. A finite infimum need not be attained: minimizing $x$ over $x>0$ gives infimum zero but no minimizer. Continuity on a nonempty closed bounded set in finite-dimensional Euclidean space guarantees attainment. This useful theorem is not a guarantee for every optimization model.

Units are not needed in these mathematical examples. Costs and values are abstract scores. Before solving a practical model, check whether its variables really can be fractional, whether all restrictions are represented, and whether the objective represents the intended question.

## Practice

1. Minimize $(x-2)^2$ for $0\leq x\leq1$. Give both the optimizer and the best value.
2. Explain why minimizing $-x$ over $x\geq0$ has no finite optimal value.

## Worked answers

1. On this interval, the distance to $2$ is smallest at $x=1$. The minimum value is $(1-2)^2=1$. The unconstrained optimizer $2$ is not feasible.
2. Every permitted $x$ can be replaced by $x+1$, which reduces the objective by one. Values have no finite lower bound, so reporting a very large $x$ as an optimum would be incorrect.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#18. Optimization|the detailed catalogue]].

- [[Linear models and graphical solutions|Linear models and graphical solutions]] — 18.1, 18.1.1, 18.1.1.1, 18.1.1.2.
- [[Bases and simplex tableaux|Bases and simplex tableaux]] — 18.1.2, 18.1.2.1, 18.1.2.2, 18.1.3, 18.1.3.1, 18.1.3.2, 18.1.3.3.
- [[Revised simplex and linear duality|Revised simplex and linear duality]] — 18.1.3.4, 18.1.3.5.
- [[Transport assignment and allocation|Transport assignment and allocation]] — 18.1.4, 18.1.4.1, 18.1.4.2, 18.1.4.3.
- [[Tours and sequencing|Tours and sequencing]] — 18.1.4.4, 18.1.4.5.
- [[Nonlinear optimality and convexity|Nonlinear optimality and convexity]] — 18.2, 18.2.1, 18.2.1.1, 18.2.1.2, 18.2.1.3, 18.2.2, 18.2.2.1.
- [[Quadratic programs and complementarity methods|Quadratic programs and complementarity methods]] — 18.2.2.2, 18.2.3, 18.2.3.1, 18.2.3.2.
- [[Direct search and unconstrained descent|Direct search and unconstrained descent]] — 18.2.4, 18.2.4.1, 18.2.4.2, 18.2.5, 18.2.5.1, 18.2.5.2, 18.2.5.3, 18.2.5.4.
- [[Evolution strategies|Evolution strategies]] — 18.2.6, 18.2.6.1, 18.2.6.2, 18.2.6.3, 18.2.6.4, 18.2.6.5, 18.2.6.6, 18.2.6.7.
- [[Feasible directions and projected gradients|Feasible directions and projected gradients]] — 18.2.7, 18.2.7.1, 18.2.7.2, 18.2.7.3.
- [[Penalties barriers and cutting planes|Penalties barriers and cutting planes]] — 18.2.8, 18.2.8.1, 18.2.8.2, 18.2.9.
- [[Dynamic decisions and Bellman equations|Dynamic decisions and Bellman equations]] — 18.3, 18.3.1, 18.3.1.1, 18.3.1.2, 18.3.3, 18.3.3.1, 18.3.3.2, 18.3.4, 18.3.5, 18.3.5.1, 18.3.5.2.
- [[Purchasing and knapsack policies|Purchasing and knapsack policies]] — 18.3.2, 18.3.2.1, 18.3.2.2, 18.3.6, 18.3.6.1, 18.3.6.2.
<!-- catalogue-complete-lesson-index:end -->
