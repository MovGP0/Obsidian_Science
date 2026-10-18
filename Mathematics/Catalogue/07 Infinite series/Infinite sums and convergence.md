---
title: "Infinite sums and convergence"
catalogue_ids:
  - "7.2"
  - "7.2.1"
  - "7.2.1.1"
  - "7.2.1.2"
---

> [!TLDR]
> A numerical series converges when its finite partial sums approach a finite limit; terms tending to zero are necessary but not sufficient.

## Define an infinite series through finite sums

Begin with [[Sequences and their limits]]. For fixed real numbers $a_1,a_2,\ldots$, define the $N$th **partial sum** by $S_N=\sum_{n=1}^N a_n$. The infinite series $\sum_{n=1}^{\infty}a_n$ **converges** to $S$ if $S_N\to S$. Otherwise it diverges. The terms are called constant terms because they do not depend on a separate input such as $x$; they can still vary with $n$.

The symbol $\infty$ is not a last index. We compute finite sums and then take a limit. A divergent expression need not grow to infinity. For $a_n=(-1)^{n+1}$, the partial sums alternate between $1$ and $0$, so no finite limit exists.

## Geometric series: the model calculation

For $r\ne1$, multiply $1+r+\cdots+r^{N-1}$ by $1-r$. Adjacent powers cancel, leaving $1-r^N$. Therefore

$$
\sum_{n=0}^{N-1} ar^n=a\frac{1-r^N}{1-r}.
$$

If $|r|<1$, then $r^N\to0$, so the infinite sum is $a/(1-r)$. For $a\ne0$ and $|r|\geq1$, the terms fail to approach zero and the series diverges. At $r=1$ the finite sum is $Na$, which needs a separate calculation because the displayed denominator vanishes.

For example, $3-1+1/3-1/9+\cdots$ has $a=3$ and $r=-1/3$. Its sum is $3/(1+1/3)=9/4$. A negative ratio changes signs without preventing convergence.

## Necessary condition and a counterexample

Since $a_N=S_N-S_{N-1}$, convergence implies $a_N\to S-S=0$. This is the **term test**: if $a_N$ does not tend to zero, the series diverges. Its converse is false.

For the harmonic series, group terms in blocks:

$$
1+\frac12+
\left(\frac13+\frac14\right)+
\left(\frac15+\cdots+\frac18\right)+\cdots.
$$

Each complete block after the first contains enough terms to total at least $1/2$. The block from $2^{k-1}+1$ to $2^k$ has $2^{k-1}$ terms, each at least $1/2^k$. Thus partial sums exceed arbitrarily large multiples of $1/2$, although $1/n\to0$. The proof concerns finite complete blocks, so it does not assume permission to rearrange an infinite sum.

## General convergence theorems

Changing, deleting, or adding finitely many terms does not change whether a series converges; it usually changes its sum. If $\sum a_n=A$ and $\sum b_n=B$, then $\sum(\alpha a_n+\beta b_n)=\alpha A+\beta B$ for fixed constants. This follows by applying sequence limit rules to partial sums. It does not justify subtraction of two divergent series.

The **Cauchy criterion** says that a real series converges exactly when, for each $\varepsilon>0$, all sufficiently late finite tails satisfy

$$
\left|\sum_{n=p}^{q}a_n\right|<\varepsilon
\quad\text{for every }q\geq p\geq N.
$$

It measures the difference between two late partial sums. Completeness of the real numbers gives a limit when these differences become small. The condition is stronger than asking one late term to be small.

For nonnegative terms the partial sums are nondecreasing. The monotone convergence theorem therefore says: the series converges exactly when all partial sums have a common finite upper bound. This principle underlies [[Tests for positive series]]. Signs require the separate distinctions in [[Absolute convergence and alternating sums]].

## Worked example: telescoping

Use partial fractions to write $1/[n(n+1)]=1/n-1/(n+1)$. Hence

$$
S_N=\sum_{n=1}^N\left(\frac1n-\frac1{n+1}\right)
=1-\frac1{N+1}.
$$

All middle terms cancel in this finite expression. Its limit is $1$, so $\sum_{n=1}^{\infty}1/[n(n+1)]=1$. The exact remainder is $1/(N+1)$. Never split the original series into $\sum1/n-\sum1/(n+1)$: both separate sums diverge, so that subtraction would be undefined.

## Practice

1. Find $\sum_{n=1}^{\infty}4/3^n$ and the remainder after $N$ terms.
2. Find $\sum_{n=1}^{\infty}1/[n(n+2)]$ by a finite cancellation.

## Worked answers

1. The first term is $4/3$ and the ratio is $1/3$. The sum is $(4/3)/(2/3)=2$. The omitted tail starts with $4/3^{N+1}$, so it sums to $2/3^N$.
2. Since $1/[n(n+2)]=(1/n-1/(n+2))/2$, the partial sum is $(1+1/2-1/(N+1)-1/(N+2))/2$. The last two terms tend to zero. The sum is therefore $3/4$.
