---
title: "Measure and Lebesgue integration"
catalogue_ids:
  - "12.9"
  - "12.9.1"
  - "12.9.2"
  - "12.9.2.1"
  - "12.9.2.2"
  - "12.9.3"
  - "12.9.3.1"
  - "12.9.3.2"
  - "12.9.3.3"
---

> [!TLDR]
> A measure assigns size to sets, and the Lebesgue integral adds function values according to the sizes of the sets where they occur.

## Prerequisite route

Start with [[01.01 Numbers and sets]], [[03.01 Function definitions]], [[08.01 Definite integrals]], and [[09.01 Sequences]]. A countable collection can be listed using positive integer indices; finite collections are included. A supremum is the least upper bound. No prior probability theory is required. This lesson builds a new integral from sizes of sets instead of assuming that every function has a Riemann integral.

## Sigma-algebras and measures

A **sigma-algebra** $\mathcal A$ on a set $X$ is a collection of subsets that contains $X$, is closed under complements relative to $X$, and is closed under countable unions. These rules also give closure under countable intersections. Its members are the **measurable sets**.

A **measure** $\mu:\mathcal A\to[0,\infty]$ satisfies $\mu(\varnothing)=0$ and countable additivity: for pairwise disjoint measurable sets $E_n$,

$$
\mu\!\left(\bigcup_{n=1}^{\infty}E_n\right)=\sum_{n=1}^{\infty}\mu(E_n).
$$

The triple $(X,\mathcal A,\mu)$ is a **measure space**. Counting measure gives a finite set its number of elements. Lebesgue measure on the real line assigns an interval its length. Borel sets form the smallest sigma-algebra containing all open sets. Lebesgue measurable sets include Borel sets and every subset of a Borel set of measure zero. Constructing Lebesgue measure on all these sets requires an outer-measure argument; we use that established construction here.

A set of measure zero is a **null set**. A property holds **almost everywhere** if it fails only on a null set. Every singleton has length zero, so countable additivity makes the rational numbers a null set. This does not imply that every union of null sets is null: the real line is an uncountable union of singletons. Countability is essential.

## Measurable functions

A real-valued function $f:X\to\mathbb R$ is **measurable** when $\{x:f(x)>a\}$ is measurable for every real $a$. This tests sets of inputs through output thresholds. Equivalent definitions use inverse images of open sets. Continuous functions on a real interval are Borel measurable because inverse images of open sets are open relative to the interval.

The **indicator** $\mathbf1_E$ is $1$ on $E$ and $0$ outside it; it is measurable exactly when $E$ is. Sums, products, maxima, and absolute values of finite real-valued measurable functions are measurable. Quotients are measurable where the denominator is nonzero. Pointwise limits of measurable functions are measurable; extended values $\pm\infty$ are permitted if the codomain is extended accordingly. Countable suprema and infima are also measurable. These closure properties let us build complex examples from simple ones. [Hunter, chapters 1–3](https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf)

## Definition of the integral

A nonnegative **simple function** takes finitely many values and can be written $s=\sum_{j=1}^m a_j\mathbf1_{E_j}$ with disjoint measurable $E_j$ and $a_j\ge0$. Define

$$
\int_Xs\,d\mu=\sum_{j=1}^m a_j\mu(E_j).
$$

Zero times infinite measure is interpreted as zero in this definition. For any nonnegative measurable $f$, define

$$
\int_X f\,d\mu
=\sup\left\{\int_Xs\,d\mu:0\le s\le f,\ s\text{ simple}\right\}.
$$

The result can be infinite. This is a definition, not a claim that a particular sequence of approximations has already been proved to converge.

For a signed real function, set $f^+=\max(f,0)$ and $f^-=\max(-f,0)$. Thus $f=f^+-f^-$ and $|f|=f^++f^-$. The function is **Lebesgue integrable** when $\int|f|\,d\mu<\infty$; then define $\int f=\int f^+-\int f^-$. Never subtract $\infty-\infty$. Complex integrals are defined through the real and imaginary parts when the absolute value is integrable.

## Worked simple-function example

On $[0,1]$, let $s=2$ on $[0,1/4)$ and $s=1$ on $[1/4,1]$. Its integral is

$$
\int_0^1s(t)\,dt=2\left(\frac14\right)+1\left(\frac34\right)=\frac54.
$$

The value at $1/4$ can be changed without changing the integral, because that singleton has measure zero.

![[catalogue-ch12b-simple-integral.svg|**Fig. C.ch12b.3** A simple function is integrated by multiplying each value by the length of the set where that value occurs.]]

Now consider $r=\mathbf1_{\mathbb Q\cap[0,1]}$. Its Lebesgue integral is zero. It is not Riemann integrable: every interval contains both rational and irrational points, so every lower sum is zero and every upper sum is one. When a bounded function is Riemann integrable on a closed finite interval, the two integrals agree. Lebesgue integration extends the useful class of functions.

## Properties of the integral

For integrable $f,g$ and scalars $a,b$, linearity gives $\int(af+bg)=a\int f+b\int g$. If $f\le g$ almost everywhere, then $\int f\le\int g$. Also $|\int f|\le\int|f|$. Changes on null sets leave the integral unchanged. For nonnegative measurable functions the corresponding additive and order properties hold with infinite values allowed, provided undefined arithmetic is avoided.

For a nonnegative $f$, $\int f=0$ implies $f=0$ almost everywhere. To see why, if $E_n=\{f\ge1/n\}$, then $\int f\ge\mu(E_n)/n$, so every $E_n$ is null. Their countable union is $\{f>0\}$. This is stronger than the statement that a few sampled values vanish.

## Convergence theorems

The following are Lebesgue theorems on a measure space. Their hypotheses decide whether a limit can move through an integral.

- **Monotone convergence:** if $0\le f_n\uparrow f$ almost everywhere and all $f_n$ are measurable, then $\int f_n\to\int f$, allowing infinity.
- **Fatou's lemma:** for nonnegative measurable $f_n$, $\int\liminf f_n\le\liminf\int f_n$. No monotonicity is needed.
- **Dominated convergence:** if measurable $f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for one integrable $g$, then $f$ is integrable and $\int|f_n-f|\to0$, hence $\int f_n\to\int f$.

These are existence theorems, whose general proofs are beyond this first lesson. [MIT lectures 11–12](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/resources/lecture-notes/index.html)

For example, $f_n(t)=t^n$ on $[0,1]$ tends to zero almost everywhere and is dominated by $g=1$. Its integrals $1/(n+1)$ tend to zero. In contrast, $h_n=n\mathbf1_{(0,1/n)}$ tends to zero at every point of $[0,1]$, but every integral is $1$. There is no common integrable dominating function: such a function would force the integrals to tend to zero. Pointwise convergence by itself is insufficient.

## Practice

1. Compute the integral of $s=3\mathbf1_{[0,1/2)}+2\mathbf1_{[1/2,1]}$. What if $s(1/2)$ is changed to $100$?
2. Use an appropriate theorem to find $\lim_n\int_0^1 (1-t^n)\,dt$.

> [!example]- Worked answers
> 1. The disjoint intervals have length $1/2$, so the integral is $3/2+1=5/2$. Changing one point leaves this value unchanged because a singleton is null.
> 2. The functions $1-t^n$ increase and are nonnegative on $[0,1]$. They tend to $1$ except at $t=1$, a null set. Monotone convergence gives the limit $\int_0^1 1\,dt=1$. Direct integration gives $1-1/(n+1)$ and confirms it.
