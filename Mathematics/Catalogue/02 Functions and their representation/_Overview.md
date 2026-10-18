---
title: "Functions and their representation"
catalogue_ids:
  - "2"
---

> [!TLDR]
> This chapter builds function language, limits, graph families, and representations, then extends those ideas to curves, data fitting, and several variables.

## A route from secondary-school algebra

A function connects an input to exactly one output. A graph displays that assignment; a formula is one way to define it. This chapter develops both views, with the domain kept explicit at every step. It starts with real numbers, powers, roots, and basic equations. No calculus is needed for the first graph families.

If those algebra tools need review, begin with [[Number sets and the real line]], [[Powers and exponent rules]], [[Roots and principal values]], [[Polynomials and identities]], and [[Linear and quadratic equations]]. The established foundation course [[Functions - Overview]] supplies a shorter companion route. The catalogue lessons here give more worked examples and explain the source's named families and conventions.

Start with [[Function inputs outputs and representations]]. Learn to distinguish a domain, codomain, and actual range before finding a formula's zeros or inverse. Then study [[Function order bounds and symmetry]] and [[Function composition and inversion]]. These concepts explain why the same formula can have different properties on different domains.

## Nearby behaviour and whole graphs

[[Finite limits and convergence tests]] introduces precise control of nearby values, including a short explanation of the sequence and Cauchy criteria. [[One-sided infinite limits and growth]] separates approach directions, infinite outputs, and asymptotic comparisons. [[Continuity and its consequences]] connects these limits to assigned values and to existence theorems on closed intervals.

Next use [[Elementary function families]] as a map of the main types. Work through [[Polynomial graph shapes]], [[Fractional linear graphs]], [[Third-degree rational curve families]], and [[Radical and real-power graphs]]. For each one, identify the allowed inputs before simplifying. Then find zeros, signs, bounds, symmetry, and limiting behaviour. Those questions produce a reliable graph description even before derivatives are introduced.

[[Exponential and logarithmic graphs]], [[Gaussian bell shapes]], and [[Exponential sums and power products]] develop nonalgebraic graph families. [[Unit-circle function graphs]] starts the circular functions from geometric coordinates. The addition, product, and oscillation lessons explain how their formulas connect. Finish the first part with [[Principal inverse trigonometric values]] and [[Inverse trigonometric sum identities]], where output ranges are part of every formula.

Later lessons in this chapter extend these ideas to hyperbolic functions, named curves, empirical models, transformed scales, several-variable domains, and nomograms. The complete lesson index below links those topics in their catalogue order. Some later topics introduce additional tools at the point of use; a new symbol should always have a stated meaning before it is used in a theorem.

## A repeatable study method

For each lesson, read the definitions first, calculate the worked example without a calculator where possible, and then answer the practice questions before opening their worked answers. Use a sketch as a check on signs and scale. A graph can suggest a theorem or a root, but exact algebra and the stated hypotheses justify the conclusion.

For example, the quotient $(x^2-1)/(x-1)$ agrees with $x+1$ for every $x\ne1$. It does not agree as a specified function on all real inputs: the original quotient omits one. Its graph has a hole, its limit at one is two, and its continuous extension assigns that value. This single example connects domain, algebra, graph, limit, and continuity.

## Practice

1. Which should be checked first for $\ln(\sqrt{x-2})$: the graph's scale or the natural real domain? Find that domain.
2. Why do $x^2$ on $\mathbb R$ and $x^2$ on $[0,\infty)$ have different inverse behaviour?

## Worked answers

1. Check the domain first. The root requires $x\ge2$, but the logarithm requires its argument to be strictly positive. Therefore $x>2$. There is no real graph at or below two whose scale could be adjusted.
2. On $\mathbb R$, opposite nonzero inputs have equal squares, so the function is not injective. On $[0,\infty)$ it is strictly increasing and has inverse $\sqrt y$ for $y\ge0$. Restriction changes the assignment's domain and makes reversal single-valued.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#2. Functions and their representation|the detailed catalogue]].

- [[Function inputs outputs and representations|Function inputs outputs and representations]] — 2.1, 2.1.1, 2.1.1.1, 2.1.1.2, 2.1.1.3, 2.1.1.4, 2.1.1.5, 2.1.1.6, 2.1.1.7, 2.1.2, 2.1.2.1, 2.1.2.2.
- [[Function order bounds and symmetry|Function order bounds and symmetry]] — 2.1.3, 2.1.3.1, 2.1.3.2, 2.1.3.3, 2.1.3.4, 2.1.3.5, 2.1.3.6, 2.1.3.7.
- [[Function composition and inversion|Function composition and inversion]] — 2.1.3.8, 2.2.3.
- [[Finite limits and convergence tests|Finite limits and convergence tests]] — 2.1.4, 2.1.4.1, 2.1.4.2, 2.1.4.3, 2.1.4.7, 2.1.4.8.
- [[One-sided infinite limits and growth|One-sided infinite limits and growth]] — 2.1.4.4, 2.1.4.5, 2.1.4.6, 2.1.4.9.
- [[Continuity and its consequences|Continuity and its consequences]] — 2.1.5, 2.1.5.1, 2.1.5.2, 2.1.5.3, 2.1.5.4, 2.1.5.5.
- [[Elementary function families|Elementary function families]] — 2.2, 2.2.1, 2.2.1.1, 2.2.1.2, 2.2.1.3, 2.2.2, 2.2.2.1, 2.2.2.2, 2.2.2.3, 2.2.2.4, 2.2.2.5, 2.2.2.6.
- [[Polynomial graph shapes|Polynomial graph shapes]] — 2.3, 2.3.1, 2.3.2, 2.3.3, 2.3.4, 2.3.5.
- [[Fractional linear graphs|Fractional linear graphs]] — 2.4, 2.4.1, 2.4.2, 2.4.6.
- [[Third-degree rational curve families|Third-degree rational curve families]] — 2.4.3, 2.4.4, 2.4.5.
- [[Radical and real-power graphs|Radical and real-power graphs]] — 2.5, 2.5.1, 2.5.2, 2.5.3.
- [[Exponential and logarithmic graphs|Exponential and logarithmic graphs]] — 2.6, 2.6.1, 2.6.2.
- [[Gaussian bell shapes|Gaussian bell shapes]] — 2.6.3, 2.6.5.
- [[Exponential sums and power products|Exponential sums and power products]] — 2.6.4, 2.6.6.
- [[Unit-circle function graphs|Unit-circle function graphs]] — 2.7, 2.7.1, 2.7.1.1, 2.7.1.2.
- [[Trigonometric addition and multiple angles|Trigonometric addition and multiple angles]] — 2.7.2, 2.7.2.1, 2.7.2.2, 2.7.2.3, 2.7.2.4.
- [[Trigonometric products sums and powers|Trigonometric products sums and powers]] — 2.7.2.5, 2.7.2.6, 2.7.2.7.
- [[Sinusoidal sums and envelopes|Sinusoidal sums and envelopes]] — 2.7.3, 2.7.3.1, 2.7.3.2, 2.7.3.3, 2.7.3.4.
- [[Principal inverse trigonometric values|Principal inverse trigonometric values]] — 2.8, 2.8.1, 2.8.2, 2.8.3, 2.8.4, 2.8.8.
- [[Inverse trigonometric sum identities|Inverse trigonometric sum identities]] — 2.8.5, 2.8.6, 2.8.7.
- [[Hyperbolic functions|Hyperbolic functions]] — 2.9, 2.9.1, 2.9.2, 2.9.2.1, 2.9.2.2, 2.9.2.3, 2.9.2.4.
- [[Hyperbolic identities|Hyperbolic identities]] — 2.9.3, 2.9.3.1, 2.9.3.2, 2.9.3.3, 2.9.3.4, 2.9.3.5, 2.9.3.6, 2.9.3.7, 2.9.3.8, 2.9.3.9.
- [[Inverse hyperbolic functions|Inverse hyperbolic functions]] — 2.10, 2.10.1, 2.10.1.1, 2.10.1.2, 2.10.1.3, 2.10.1.4, 2.10.2, 2.10.3, 2.10.4, 2.10.5.
- [[Cubic curves|Cubic curves]] — 2.11, 2.11.1, 2.11.2, 2.11.3, 2.11.4, 2.11.5.
- [[Conchoids and limacons|Conchoids and limacons]] — 2.12, 2.12.1, 2.12.2, 2.12.3, 2.12.4.
- [[Cassini ovals and the lemniscate|Cassini ovals and the lemniscate]] — 2.12.5, 2.12.6.
- [[Cycloids and trochoids|Cycloids and trochoids]] — 2.13, 2.13.1, 2.13.2.
- [[Epicycloids and hypocycloids|Epicycloids and hypocycloids]] — 2.13.3, 2.13.4, 2.13.5.
- [[Spirals and involutes|Spirals and involutes]] — 2.14, 2.14.1, 2.14.2, 2.14.3, 2.14.4, 2.14.5.
- [[Catenary and tractrix|Catenary and tractrix]] — 2.15, 2.15.1, 2.15.2.
- [[Choosing and rectifying empirical curves|Choosing and rectifying empirical curves]] — 2.16, 2.16.1, 2.16.1.1, 2.16.1.2, 2.16.1.3.
- [[Empirical powers and exponential models|Empirical powers and exponential models]] — 2.16.2, 2.16.2.1, 2.16.2.2, 2.16.2.6.
- [[Quadratic and reciprocal empirical models|Quadratic and reciprocal empirical models]] — 2.16.2.3, 2.16.2.4, 2.16.2.5, 2.16.2.7, 2.16.2.8, 2.16.2.9.
- [[Fitting combined exponential models|Fitting combined exponential models]] — 2.16.2.10, 2.16.2.11, 2.16.2.12.
- [[Scales and transformed graph paper|Scales and transformed graph paper]] — 2.17, 2.17.1, 2.17.2, 2.17.2.1, 2.17.2.2, 2.17.2.3, 2.17.2.4.
- [[Multivariable functions and domains|Multivariable functions and domains]] — 2.18, 2.18.1, 2.18.1.1, 2.18.1.2, 2.18.2, 2.18.2.1, 2.18.2.2, 2.18.2.3, 2.18.2.4, 2.18.2.5, 2.18.2.6.
- [[Limits and continuity in several variables|Limits and continuity in several variables]] — 2.18.3, 2.18.3.1, 2.18.3.2, 2.18.3.3, 2.18.3.4, 2.18.4.
- [[Continuous functions on regions|Continuous functions on regions]] — 2.18.5, 2.18.5.1, 2.18.5.2, 2.18.5.3, 2.18.5.4.
- [[Grid and alignment nomograms|Grid and alignment nomograms]] — 2.19, 2.19.1, 2.19.2, 2.19.3, 2.19.3.1, 2.19.3.2, 2.19.3.3, 2.19.4.
<!-- catalogue-complete-lesson-index:end -->
