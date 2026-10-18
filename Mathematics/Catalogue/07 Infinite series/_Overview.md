---
title: "Infinite series: learning guide"
catalogue_ids:
  - "7"
---

> [!TLDR]
> Infinite series turn a sequence of finite sums into a limit; convergence and error bounds determine which calculations are valid.

## Entry from school mathematics

This chapter starts with lists of numbers and repeated addition. You need fractions, powers, inequalities, and simple algebra. Use [[Finite sums and series]] and [[Geometric series]] to review finite sums. The symbol $\sum$ means addition over an index: $\sum_{n=1}^3 n=1+2+3=6$. An infinity symbol does not mean that infinitely many arithmetic steps have already been performed. It asks whether the results of finite steps approach a fixed number.

For example, the first $N$ terms of $1/2+1/4+1/8+\cdots$ add to $1-2^{-N}$. The sum is always below $1$, and its error from $1$ tends to zero. We therefore define the infinite sum to be $1$. In contrast, $1+1/2+1/3+\cdots$ grows without bound, although its individual terms approach zero. Learning to separate these two limits is the first goal.

## Route through the chapter

1. [[Sequences and their limits]] defines ordered lists, bounds, monotonicity, and limits.
2. [[Infinite sums and convergence]] defines a series through its partial sums.
3. [[Tests for positive series]] provides comparison, ratio, root, and integral tests.
4. [[Absolute convergence and alternating sums]] explains signs, absolute values, and the effect of rearrangement.
5. [[Special sums and Bernoulli and Euler numbers]] develops exact identities and coefficient sequences.
6. [[Remainder bounds for infinite sums]] turns convergence into a numerical guarantee.
7. [[Uniform convergence and operations on series]] makes the distinction between a limit at one input and one error bound for a whole interval.
8. [[Power series and Taylor approximations]] builds functions from powers and gives controlled polynomial approximations.
9. [[Asymptotic expansions]] explains useful finite approximations even when an infinite expansion diverges.
10. [[Fourier coefficients and convergence]] builds periodic functions from sine and cosine terms.
11. [[Symmetry and numerical Fourier coefficients]] gives shorter coefficient calculations, sampling cautions, and selected expansions.
12. [[From Fourier series to Fourier integrals]] explains the passage from discrete indices to a continuous parameter.

## Add calculus only when it is needed

The early lessons do not need derivatives or integrals. Before the integral test, read [[08.01 Definite integrals]], [[08.03 The fundamental theorem]], and [[08.07 Improper integrals]]. Before Taylor series and differentiation of series, use [[07.01 Limits]], [[07.03 The derivative]], [[07.05 Elementary derivatives]], and [[07.06 Higher derivatives]]. These notes define rates of change and repeated derivatives from elementary functions.

For Fourier series, add [[04.04 Angular measure]], [[04.05 The unit circle]], [[04.06 Trigonometric identities]], and [[08.05 Integration by parts]]. Complex notation is optional until the final Fourier lessons; [[06.01 Complex arithmetic]] and [[06.05 Euler’s formula]] supply that route. The existing [[Sequences and series - Overview]] and [[Fourier analysis - Overview]] give parallel foundation courses if you need another explanation.

## Three questions to ask about an infinite expression

First, identify what varies. In a numerical series, the number of terms $N$ grows while the terms have fixed values. In a power series, there is also an input $x$, which must be held fixed while testing pointwise convergence. In an asymptotic expansion, one first fixes a finite truncation and then moves $x$ toward a specified limit.

Second, identify the error. A remainder is the exact sum minus a partial sum. A convergence test can prove that this error tends to zero without giving its useful size at $N=10$. A remainder estimate gives that extra information.

Third, justify any operation on a limit. Finite sums can always be integrated term by term. Infinite sums require a theorem with stated assumptions. Uniform convergence is useful for finite-interval integration, but differentiating a series needs control of its derivative series. At a jump, Fourier partial sums can approach the midpoint without converging uniformly on a whole period.

## Worked example: choose a stopping point

For $S_N=\sum_{n=1}^N2^{-n}=1-2^{-N}$, require an error less than $0.001$. This means $2^{-N}<0.001$, or $2^N>1000$. Since $2^9=512$ and $2^{10}=1024$, $N=10$ suffices. The computed value is $1023/1024$, and the exact error is $1/1024$. This calculation supplies both a limit and a practical stopping rule.

## Practice

1. Is the sequence $2^{-n}$ the same object as the series $\sum_{n=1}^{\infty}2^{-n}$? State the limit of each relevant sequence.
2. How many terms of the same series ensure error less than $1/100$?

## Worked answers

1. No. The terms $2^{-n}$ approach $0$. The partial sums approach $1$. A series is defined by the second limit, not by the first.
2. The error is $2^{-N}$. Since $2^6=64$ and $2^7=128$, $N=7$ gives $1/128<1/100$; six terms do not suffice.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#7. Infinite series|the detailed catalogue]].

- [[Sequences and their limits|Sequences and their limits]] — 7.1, 7.1.1, 7.1.1.1, 7.1.1.2, 7.1.1.3, 7.1.2.
- [[Infinite sums and convergence|Infinite sums and convergence]] — 7.2, 7.2.1, 7.2.1.1, 7.2.1.2.
- [[Tests for positive series|Tests for positive series]] — 7.2.2, 7.2.2.1, 7.2.2.2, 7.2.2.3, 7.2.2.4.
- [[Absolute convergence and alternating sums|Absolute convergence and alternating sums]] — 7.2.3, 7.2.3.1, 7.2.3.2, 7.2.3.3.
- [[Special sums and Bernoulli and Euler numbers|Special sums and Bernoulli and Euler numbers]] — 7.2.4, 7.2.4.1, 7.2.4.2.
- [[Remainder bounds for infinite sums|Remainder bounds for infinite sums]] — 7.2.5, 7.2.5.1, 7.2.5.2, 7.2.5.3.
- [[Uniform convergence and operations on series|Uniform convergence and operations on series]] — 7.3, 7.3.1, 7.3.2, 7.3.2.1, 7.3.2.2.
- [[Power series and Taylor approximations|Power series and Taylor approximations]] — 7.3.3, 7.3.3.1, 7.3.3.2, 7.3.3.3, 7.3.4.
- [[Asymptotic expansions|Asymptotic expansions]] — 7.3.5, 7.3.5.1, 7.3.5.2.
- [[Fourier coefficients and convergence|Fourier coefficients and convergence]] — 7.4, 7.4.1, 7.4.1.1, 7.4.1.2.
- [[Symmetry and numerical Fourier coefficients|Symmetry and numerical Fourier coefficients]] — 7.4.2, 7.4.2.1, 7.4.2.2, 7.4.3, 7.4.5.
- [[From Fourier series to Fourier integrals|From Fourier series to Fourier integrals]] — 7.4.4.
<!-- catalogue-complete-lesson-index:end -->
