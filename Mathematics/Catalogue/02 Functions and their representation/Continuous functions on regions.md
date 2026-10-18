---
title: "Continuous functions on regions"
catalogue_ids:
  - "2.18.5"
  - "2.18.5.1"
  - "2.18.5.2"
  - "2.18.5.3"
  - "2.18.5.4"
---

> [!TLDR]
> Continuity gives intermediate values on connected regions and guarantees attained bounds on closed bounded regions.

## Local continuity and global conclusions

Use [[Multivariable functions and domains]] and [[Limits and continuity in several variables]] first. Continuity means that small changes in the input produce small changes in the output near each point. Global conclusions also need information about the entire input set. A continuous function can grow without bound on an unbounded set, or fail to attain its bounds on an open set.

We use real-valued functions on subsets of $\mathbb R^n$. A connected set cannot be split into two disjoint nonempty relatively open parts. For common geometric regions, the easier condition is **path connectedness**: any two points can be joined by a continuous path inside the region. Path connectedness implies connectedness. Every convex set, such as a disk or rectangle, is path connected because it contains each straight segment between its points.

## Bolzano zero theorem

Let $f$ be continuous on a connected set $D$. If $f(P)<0$ and $f(Q)>0$ at two points of $D$, then some point $R$ in $D$ satisfies $f(R)=0$. This is the multivariable form of the familiar sign-change theorem.

For a path-connected set, the reason is accessible. Choose a path $\gamma(t)$ from $P$ to $Q$, with $0\le t\le1$. The one-variable function $g(t)=f(\gamma(t))$ is continuous. It starts negative and ends positive, so it must pass through zero. It cannot jump across zero while staying continuous.

For example, let $f(x,y)=x^2+y-1$ on the square $0\le x,y\le1$. At $(0,0)$ its value is $-1$; at $(1,1)$ it is $1$. On the diagonal path $(x,y)=(t,t)$, the zero equation becomes $t^2+t-1=0$. The root $t=(\sqrt5-1)/2$ is between zero and one, so it gives a zero in the square.

## Intermediate value theorem

Replace zero by any number $c$ between $f(P)$ and $f(Q)$. Apply the zero theorem to $f-c$. It follows that $f$ takes every intermediate value on a connected region. Equivalently, its image is an interval, possibly open, closed, unbounded, or just one point.

Connectedness matters. On the two separated disks centered at $(-2,0)$ and $(2,0)$ with radius $1/2$, define $f=-1$ on the first and $f=1$ on the second. This is continuous on its domain, but never zero. There is no allowed path crossing the gap. The theorem requires an appropriate input set, not simply opposite signs somewhere on a page.

## Boundedness theorem

A function is bounded on $D$ if some finite number $M$ satisfies $|f(\mathbf x)|\le M$ for every $\mathbf x\in D$. A continuous real function on a closed bounded subset of $\mathbb R^n$ is bounded. Such input sets are called **compact** in finite-dimensional Euclidean space.

One explanation uses convergent subsequences. If outputs were unbounded, we could select inputs $\mathbf x_k$ with $|f(\mathbf x_k)|>k$. A sequence in a closed bounded set has a convergent subsequence whose limit remains in the set. Continuity would make its outputs converge to the finite output at that point, contradicting their unbounded size. The subsequence theorem is a deeper real-analysis result; this argument explains its role without assuming its proof.

Neither closedness nor boundedness can simply be omitted. The continuous function $1/x$ is unbounded on $(0,1)$, a bounded but nonclosed set. The function $x$ is unbounded on $\mathbb R$, a closed but unbounded set.

## Weierstrass maximum and minimum theorem

On a nonempty compact set, a continuous real function attains a smallest and a largest value. **Attains** means that actual allowed inputs produce these values. Boundedness alone is weaker. For $f(x)=x$ on $(0,1)$, the greatest lower bound is $0$ and least upper bound is $1$, but neither is attained.

To see the mechanism, let $M$ be the least upper bound of the outputs. Choose inputs whose outputs approach $M$. Compactness supplies a convergent subsequence, and continuity transfers its output limit to an input in the domain. That input has value $M$. Apply the same argument to $-f$ for a minimum.

## Worked example without derivatives

Find the range of $f(x,y)=x^2+y^2$ on the rectangle $-1\le x\le2$, $-2\le y\le1$. The rectangle is nonempty, closed, bounded, and connected. Continuity guarantees attained extrema. Since squares are nonnegative, the minimum is $0$ at $(0,0)$. Also $x^2\le4$ and $y^2\le4$, so $f\le8$, attained at $(2,-2)$. The intermediate value theorem then fills every value between these extremes. Thus the image is exactly $[0,8]$.

The theorems guarantee existence; they do not locate the points in every problem. Derivative methods in [[12.06 Gradients and extrema]] provide later tools, with boundary checks still required.

## Practice

1. Find the range of $x+y$ on the closed unit disk $x^2+y^2\le1$ without derivatives.
2. Explain why $f(x,y)=x$ has no maximum on the open square $0<x<1$, $0<y<1$.

## Worked answers

1. Since $(x+y)^2\le2(x^2+y^2)\le2$, the output lies between $-\sqrt2$ and $\sqrt2$. Equality occurs at $x=y=\pm1/\sqrt2$. Continuity and connectedness fill the interval $[-\sqrt2,\sqrt2]$.
2. Each allowed $x$ is below $1$. The larger input $x'=(x+1)/2$ is also below $1$ and gives a larger output. The supremum is $1$, but it is not attained because the domain excludes its boundary.
