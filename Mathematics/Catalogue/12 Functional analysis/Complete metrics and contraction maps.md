---
title: "Complete metrics and contraction maps"
catalogue_ids:
  - "12.2.2"
  - "12.2.2.1"
  - "12.2.2.2"
  - "12.2.2.3"
  - "12.2.2.4"
  - "12.2.2.5"
---

> [!TLDR]
> Completeness keeps Cauchy limits inside a space, and a contraction uses this property to produce a unique fixed point with an error bound.

## Cauchy sequences and missing limits

Begin with [[Metric spaces and convergence]]. A sequence $(x_n)$ is **Cauchy** when for every $\varepsilon>0$ there is $N$ such that $m,n\ge N$ implies $d(x_m,x_n)<\varepsilon$. This condition compares terms with one another. It does not name a proposed limit. Every convergent sequence is Cauchy: each late term is within $\varepsilon/2$ of the limit, so two late terms are within $\varepsilon$ of each other.

A metric space is **complete** when every Cauchy sequence converges to one of its points. The real line is complete in its usual distance. The rationals are not: rational decimal truncations of $\sqrt2$ are Cauchy but have no rational limit. Likewise, $1/n$ is Cauchy in $(0,1]$, but its only possible real limit is zero, which is missing from that space.

In a complete metric space, a closed subset is complete with the restricted metric. A Cauchy sequence in the subset first acquires a limit in the full space, and closedness keeps the limit in the subset. Conversely, a complete subset of any metric space is closed. A point in its closure is the limit of a sequence from that subset; completeness and uniqueness of limits put that point back in the subset.

## Two consequences of completeness

The **nested closed-set theorem** states: if $F_1\supseteq F_2\supseteq\cdots$ are nonempty closed subsets of a complete metric space and their diameters tend to zero, then their intersection has exactly one point. The diameter is $\sup\{d(x,y):x,y\in F_n\}$. Choose $x_n\in F_n$. All late choices lie in one small-diameter set, so they are Cauchy. Their limit lies in every $F_n$ by closedness; vanishing diameters give uniqueness.

The **Baire category theorem** states that a countable intersection of open dense subsets of a complete metric space is dense. Equivalently, a nonempty complete metric space cannot be a countable union of closed sets each with empty interior. “Empty interior” means containing no nonempty open ball. This is a statement about open sets, not probabilities or area. Its proof builds nested closed balls of shrinking radii inside successive open dense sets; completeness provides a common point. The hypotheses and the nested-ball argument are presented in [Michael Hill's UCLA notes, Lecture 4](https://www.math.ucla.edu/~mikehill/Teaching/Math121/Lecture04.pdf).

## The contraction principle

Let $X$ be a nonempty complete metric space. Suppose $T:X\to X$ satisfies

$$
d(Tx,Ty)\le q\,d(x,y)\qquad(x,y\in X),\qquad0\le q<1.
$$

Then $T$ is a **contraction**. It has exactly one fixed point $p$, meaning $Tp=p$. Starting at any $x_0\in X$, the recurrence $x_{n+1}=Tx_n$ converges to $p$.

Indeed, successive gaps obey $d(x_{n+1},x_n)\le q^n d(x_1,x_0)$. The triangle inequality and a geometric sum give, for $m>n$,

$$
d(x_m,x_n)\le\frac{q^n}{1-q}d(x_1,x_0).
$$

This tends to zero, so completeness supplies a limit $p$. The Lipschitz bound makes $T$ continuous, giving $Tp=p$. Two fixed points would satisfy $d(p,r)\le qd(p,r)$, forcing equality of the points. Letting $m$ tend to infinity gives the useful error bound

$$
d(x_n,p)\le\frac{q^n}{1-q}d(x_1,x_0).
$$

The self-map condition and completeness cannot be omitted. The rule $T(x)=x/2$ on $(0,1]$ is a contraction into that space but has no fixed point there. Its iterates approach the missing endpoint.

## Worked example: solve an equation by iteration

Consider $x=(x+2)/3$ on the complete interval $X=[0,1]$. The rule $T(x)=(x+2)/3$ maps this interval into $[2/3,1]$ and has $q=1/3$. From $x_0=0$, the first values are $2/3,8/9,26/27$. The theorem proves convergence before the equation is solved. The fixed-point equation gives $p=1$.

The error bound is $|x_n-1|\le(1/3)^n$, since $|x_1-x_0|/(1-q)=1$. Thus $n=7$ gives an error below $0.001$, because $3^{-7}=1/2187<0.001$. A numerical pattern alone would not guarantee this bound for all later iterates.

## A nonlinear application

The equation $x=\cos x$ has no elementary algebraic solution, but the same method applies on $[0,1]$, with angles in radians. Cosine maps this complete interval into $[\cos1,1]\subseteq[0,1]$. By the mean value theorem from elementary calculus,

$$
|\cos x-\cos y|\le(\sin1)|x-y|\qquad(x,y\in[0,1]).
$$

Since $0<\sin1<1$, this is a contraction. Starting at $x_0=1$ gives $x_1\approx0.5403$, $x_2\approx0.8576$, and convergence to the unique fixed point $p\approx0.7391$. The iterates need not be monotone: the contraction proof uses decreasing error bounds. Before using an iterative rule, find an invariant complete set and a single contraction constant valid throughout that set.

## Completion of a metric space

Every metric space $X$ can be placed isometrically inside a complete space $\widehat X$ in which it is dense. “Isometrically” means that all original distances are preserved. Construct points of $\widehat X$ from Cauchy sequences in $X$. Treat two sequences $(x_n)$ and $(y_n)$ as the same point when $d(x_n,y_n)\to0$. Their distance is $\lim_n d(x_n,y_n)$; the triangle inequality proves that this limit exists and does not depend on the chosen representatives.

Original points enter as constant sequences. The resulting space is complete, and its completion is unique up to an isometry fixing $X$. For example, completing $\mathbb Q$ in ordinary distance gives $\mathbb R$, and completing $(0,1)$ gives $[0,1]$. This construction supplies missing limits without changing the old distances.

## Practice

1. On $\mathbb R$, apply the contraction theorem to $T(x)=1+x/4$, starting at zero. Give the fixed point and an error bound after four steps.
2. Why does a sequence with $d(x_{n+1},x_n)\to0$ not automatically satisfy the Cauchy condition?

## Worked answers

1. The line is complete and $q=1/4$. The fixed point solves $3p/4=1$, hence $p=4/3$. The initial gap is $1$, so $|x_4-p|\le(1/4)^4/(1-1/4)=1/192$.
2. Small successive gaps need not have a small total. For $x_n=\sqrt n$, successive gaps equal $1/(\sqrt{n+1}+\sqrt n)$ and tend to zero, but $x_n$ is unbounded. Cauchy sequences are bounded, so this sequence cannot be Cauchy.
