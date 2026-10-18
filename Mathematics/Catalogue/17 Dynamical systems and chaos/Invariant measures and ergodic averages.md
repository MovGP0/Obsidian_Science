---
title: "Invariant measures and ergodic averages"
catalogue_ids:
  - "17.2"
  - "17.2.1"
  - "17.2.1.1"
  - "17.2.1.2"
---

> [!TLDR]
> An invariant probability measure is unchanged by evolution; ergodicity makes integrable time averages equal space averages for almost every initial state.

## Geometry and statistics of attractors

An attracting set tells us where an orbit can settle. It does not tell us how often different parts are visited. A cycle with three points visits each point equally often. A complicated invariant set can support several different long-term distributions. We therefore distinguish the set, the evolution rule, and a probability measure on the set.

Start with [[Iteration and invariant sets]]. You need only fractions for the finite examples. An integral later replaces a weighted sum when the set is continuous; [[08.01 Definite integrals]] supplies that background. No assertion in this lesson requires random forcing of the underlying map.

## A probability measure

A probability measure $\mu$ assigns weights to measurable subsets of a state space $X$. The whole space has weight one, weights are nonnegative, and disjoint countable unions have weights equal to the sum of their weights. On a finite set, specify point weights $p_i\ge0$ with $\sum_i p_i=1$. Then $\mu(A)$ is the sum of the weights of points in $A$.

For a continuous interval, ordinary length on $[0,1]$ is a probability measure. A single point has length zero even though it exists. Thus “almost every” means “except for a set of measure zero,” not “without any exceptions.” The Dirac measure $\delta_p$ gives weight one to a single point $p$. It is useful for equilibrium distributions.

## Invariance

A measure is invariant for $f$ if

$$
\mu(f^{-1}(A))=\mu(A)
$$

for every measurable $A$. Here $f^{-1}(A)$ means all points whose next state is in $A$; an inverse function is not required. If an ensemble of initial states has distribution $\mu$, its distribution after applying $f$ is still $\mu$.

Take the doubling map $f(x)=2x$ modulo one on $[0,1)$. For an interval $A=[a,b)$, its preimage has two intervals, $[a/2,b/2)$ and $[(a+1)/2,(b+1)/2)$. Their lengths add to $b-a$. This calculation extends to measurable sets, so length is invariant. The argument uses preimages; the image of an interval can have a different length.

If $p$ is fixed, $\delta_p$ is invariant. If $p_0,\ldots,p_{k-1}$ form a cycle, the equal-weight measure $k^{-1}\sum_j\delta_{p_j}$ is invariant because the map permutes the weights. An arbitrary set of unequal weights around a single cycle is not invariant: a weight would arrive at the wrong point.

## Ergodicity and time averages

An invariant probability measure is **ergodic** if every measurable set invariant up to measure zero has measure zero or one. It cannot split into two invariant pieces of positive weight. Ergodicity belongs to a map together with a measure. It is not a statement about the map alone, and it does not say that every orbit visits every point.

For an observable $a:X\to\mathbb R$, define its finite time average

$$
\overline a_N(x)=\frac1N\sum_{n=0}^{N-1}a(f^n(x)).
$$

The Birkhoff ergodic theorem says that for a measure-preserving map and an integrable observable, this average has a limit for almost every $x$. If the measure is also ergodic, the limit equals the space average $\int_X a\,d\mu$ for almost every $x$. Integrable means $\int |a|\,d\mu<\infty$. Without ergodicity, the limits can depend on the invariant component containing $x$. These hypotheses and the exceptional-set qualification are essential; see [Fiedler's development of ergodic theory](https://math.uchicago.edu/~may/REU2019/REUPapers/Fiedler.pdf), especially its Birkhoff section.

## Worked example: a cycle versus a mixture

Let $X=\{A,B,C\}$ with $A\mapsto B\mapsto C\mapsto A$. The uniform measure has point weights $1/3$. The only subsets unchanged by a whole inverse step are empty and all of $X$, so it is ergodic. Give the observable values $a(A)=2$, $a(B)=5$, $a(C)=8$. Every block of three steps has sum $15$, hence the time average tends to $5$, which equals $(2+5+8)/3$.

Now let $X=\{0,1\}$ and $f$ fix both points. The measure with weight $1/2$ at each is invariant but not ergodic: $\{0\}$ is invariant and has weight $1/2$. For $a(x)=x$, the space average is $1/2$, while the two possible time averages are zero and one. Neither equals $1/2$. The issue is not too short a run; it is the invariant split.

## What a histogram can and cannot show

For a finite orbit, a histogram counts visits to selected bins. A long transient can distort it. Different initial states can sample different invariant components. An invariant measure need not be the one approached by typical initial conditions measured by ordinary length. Such basin questions require additional assumptions. Do not turn a visually smooth histogram into a proof of invariance or ergodicity.

## Practice

1. A four-cycle has observable values $1,1,3,7$. Find its invariant equal-weight average.
2. The identity map acts on $[0,1]$ with length measure. Is the measure invariant? Is it ergodic?

## Worked answers

1. Each point has weight $1/4$. One full cycle sums to $12$, so the time and space averages are both $12/4=3$. A partial last cycle changes the finite average but its effect tends to zero.
2. Every preimage is the same set, so length is invariant. But $[0,1/2]$ is invariant and has measure $1/2$. Thus the measure is not ergodic. Every orbit is constant, so there is no averaging across the interval.
