---
title: "Dimensions of attractors"
catalogue_ids:
  - "17.2.4"
  - "17.2.4.1"
  - "17.2.4.2"
  - "17.2.4.3"
  - "17.2.4.4"
---

> [!TLDR]
> A dimension can describe a set or its probability distribution; derivative-based dimension estimates are bounds, not automatic equalities.

## What dimension measures

A point has dimension zero, a smooth curve has dimension one, and a region of a plane has dimension two. More generally, dimension records how a covering count or a weighted count changes as resolution improves. It does not count the number of coordinates in the surrounding state space. A circle in a plane uses two ambient coordinates but has one local coordinate along itself.

Read [[Invariant measures and ergodic averages]] for probability weights, and [[Entropy and Lyapunov exponents]] for stretching. The logarithm rule $\log(a^n)=n\log a$ is enough for the first example. Later derivative matrices require [[10.03 Matrices]] and [[10.07 Eigenvalues and eigenvectors]].

## Metric dimensions

Let $N(\varepsilon)$ be the number of boxes of side length $\varepsilon$ needed to cover a bounded set. Its **box dimension**, when the limit exists, is

$$
D_B=\lim_{\varepsilon\downarrow0}
\frac{\log N(\varepsilon)}{\log(1/\varepsilon)}.
$$

If no limit exists, lower and upper limits define lower and upper box dimensions. The distance rule, or metric, controls which boxes or balls are small. Changing to an equivalent coordinate system with bounded stretching in both directions preserves this dimension, but a general homeomorphism need not.

**Hausdorff dimension** allows covering sets with different small diameters. For $s\ge0$, sum their diameter powers $\sum_i(\operatorname{diam} U_i)^s$, minimize over covers with diameters below $\delta$, and let $\delta\downarrow0$. The threshold between an infinite and a zero Hausdorff measure is the Hausdorff dimension $D_H$. This more flexible covering can give a value smaller than upper box dimension. The two should not be silently identified.

## Worked example: the middle-third Cantor set

Start with $[0,1]$ and delete its open middle third. Repeat within each remaining interval. After $n$ stages there are $2^n$ intervals of length $3^{-n}$. The limiting **Cantor set** $C$ has box dimension

$$
D_B=\frac{\log 2^n}{\log 3^n}
=\frac{\log2}{\log3}\approx0.63093.
$$

The construction gives the required upper bound on covering number. For a matching lower bound at these scales, choose one point in each level-$n$ interval: the gaps keep distinct intervals separated at comparable scale, so a small box covers only a bounded number of them. Constant factors vanish in the logarithmic ratio. The Hausdorff dimension equals this value too. A full lower-bound proof uses a probability measure with interval mass at most a constant times length to that power; the box-count calculation alone does not prove that equality.

![[catalogue-ch17-cantor-covering.svg|**Fig. C.ch17.2** Each Cantor construction step doubles the surviving intervals and divides their length by three.]]

The illustration shows why “between a point and a line” is a scaling statement. The set contains infinitely many points, yet its ordinary total length is zero: the total length after $n$ stages is $(2/3)^n$.

## Dimensions of a measure

Divide space into boxes of side $\varepsilon$, and let $p_i$ be their probability weights. The **information dimension**, if the limit exists, is

$$
D_1=\lim_{\varepsilon\downarrow0}
\frac{-\sum_i p_i\log p_i}{\log(1/\varepsilon)}.
$$

The **correlation dimension** can be defined by the small-distance scaling of $C(\varepsilon)=\int\mu(B(x,\varepsilon))\,d\mu(x)$: $D_2=\lim \log C(\varepsilon)/\log\varepsilon$, when that limit exists. It weights close pairs of independently sampled points. A related local dimension is $\lim_{r\downarrow0}\log\mu(B(x,r))/\log r$. Local values can depend on $x$, so do not replace them automatically by a single global dimension.

For a Cantor measure that puts fractions $p$ and $1-p$ on the left and right intervals at every stage, the level-$n$ information is $nH(p)$, with $H(p)=-p\log p-(1-p)\log(1-p)$. Consequently $D_1=H(p)/\log3$. Equal weights give $\log2/\log3$; unequal weights give less. The support remains the whole Cantor set for $0<p<1$. This shows how one set can carry different measure dimensions. At construction scales the sum of squared box weights is $(p^2+(1-p)^2)^n$, giving $D_2=-\log(p^2+(1-p)^2)/\log3$.

## The Douady–Oesterlé local bound

For a $C^1$ map $F$ near a compact strictly invariant set $K\subset\mathbb R^m$, let $\sigma_1(x)\ge\cdots\ge\sigma_m(x)$ be the singular values of $DF(x)$. They are the nonnegative stretching factors of its linear action, obtained as square roots of the eigenvalues of $DF(x)^TDF(x)$. For $d=j+s$, $j$ an integer and $0\le s<1$, define

$$
\omega_d(DF(x))=\sigma_1\cdots\sigma_j\sigma_{j+1}^{s}.
$$

At integer $d$, use the product of the first $d$ singular values; set $\omega_0=1$. The Douady–Oesterlé theorem gives $D_H(K)\le d$ if $\sup_{x\in K}\omega_d(DF(x))<1$. A local threshold $d_{DO}(x)=\inf\{d\in[0,m]:\omega_d(DF(x))<1\}$, with value $m$ for an empty set, leads to a uniform bound through its supremum on $K$. Despite the catalogue's historical name “local Hausdorff dimension,” this threshold is a derivative-based bound, not the Hausdorff dimension of a single point. See [Kuznetsov, equations (8)–(14)](https://arxiv.org/pdf/1602.05410).

For $DF=\operatorname{diag}(2,1/4)$, one direction stretches while area shrinks. Between dimensions one and two, solve $2(1/4)^s=1$. Taking logarithms gives $s=1/2$, so the threshold is $1.5$. This is an upper-bound mechanism, not proof that an attractor has dimension $1.5$. For the linear map itself the compact strictly invariant set $\{0\}$ has actual dimension zero. A computed threshold along one sampled orbit also does not establish the required supremum over a whole invariant set.

## Examples of attracting sets

A contraction to a fixed point has a zero-dimensional attractor. A transversely attracting periodic orbit of a smooth flow is a one-dimensional curve, as in [[Manifolds and return maps]]. The logistic map at parameter four has the invariant interval as its natural bounded state space, with a nonuniform invariant density discussed in [[Chaos in interval maps]]. Its chaotic dynamics do not give the interval a noninteger geometric dimension. Fractal geometry and chaotic orbit behavior are separate properties.

The Cantor construction above is also the attractor of the two contracting maps $x\mapsto x/3$ and $x\mapsto(x+2)/3$ acting together as an iterated function system. That is a set construction with two branches; it is not a demonstration that one autonomous interval map attracts every nearby point to $C$.

## Practice

1. A separated self-similar construction keeps three intervals of length one fifth at each step. Find the box dimension.
2. Compute the local singular-value threshold for $\operatorname{diag}(3,1/9)$, and explain what it does not establish.

## Worked answers

1. At level $n$ the count is $3^n$ and the scale is $5^{-n}$. The ratio is $\log3/\log5\approx0.68261$, using separation to control covering counts.
2. Solve $3(1/9)^s=1$, giving $s=\log3/\log9=1/2$. The threshold is $1.5$. It does not establish an invariant set, attraction, or equality of that set's Hausdorff dimension with the threshold. The theorem needs a compact invariant set and uniform control there.
