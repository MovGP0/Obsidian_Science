---
title: "Entropy and Lyapunov exponents"
catalogue_ids:
  - "17.2.2"
  - "17.2.2.1"
  - "17.2.2.2"
  - "17.2.3"
---

> [!TLDR]
> Entropy measures growth of distinguishable orbit histories; Lyapunov exponents measure average growth of infinitesimal displacements.

## Two kinds of entropy

An orbit can be hard to predict for different reasons. One question counts possible histories at a chosen resolution. Another weights those histories by how often they occur. **Topological entropy** answers the first; **metric**, or measure-theoretic, entropy answers the second. Both are rates per iteration here, and both use natural logarithms unless stated otherwise. A rate $\log2$ in natural units is one bit per step after division by $\log2$.

Read [[Invariant measures and ergodic averages]] before the measure-based parts. A useful model is an infinite binary sequence $b_0b_1b_2\ldots$, where each $b_i$ is zero or one. The shift map deletes the first symbol. This is deterministic when the entire initial sequence is specified. Introducing a probability distribution on initial sequences is an additional choice.

## Topological entropy

For a continuous map $f$ on a compact metric space with distance $d$, define the orbit distance over $N$ steps by

$$
d_N(x,y)=\max_{0\le j<N}d(f^j(x),f^j(y)).
$$

Two states are distinguishable at resolution $\varepsilon$ if this distance exceeds $\varepsilon$. Let $s_N(\varepsilon)$ be the largest number of states mutually distinguishable in this way. Then

$$
h_{\rm top}(f)=\lim_{\varepsilon\downarrow0}
\limsup_{N\to\infty}\frac{\log s_N(\varepsilon)}{N}.
$$

The order of limits matters: first measure long histories at a fixed resolution, then refine the resolution. A limsup gives the upper limiting rate when an ordinary limit has not been proved. This construction and its invariance under homeomorphic coordinate changes appear in [Smillie's lecture notes](https://warwick.ac.uk/fac/sci/maths/people/staff/john_smillie/maths_4240/ma424_notes_2013.pdf), in the topological entropy section.

For the binary shift, take distance $2^{-k}$ when the first differing digit is at position $k$. There are $2^N$ possible initial words of length $N$. At any fixed fine resolution, adding a fixed number of extra digits changes the count only by a constant factor. Thus the exponential rate is $N^{-1}\log 2^N=\log2$. For a finite periodic orbit, the number of possible histories stays bounded by the period, so entropy is zero.

## Metric entropy

Let $\mu$ be invariant, and divide the state space into a finite measurable partition $\mathcal P$. A history of $N$ partition labels has some probability $p_w$. Its Shannon entropy is

$$
H_N(\mathcal P)=-\sum_w p_w\log p_w,
\qquad 0\log0=0.
$$

The partition's entropy rate is $\lim_{N\to\infty}H_N/N$. The full metric entropy $h_\mu(f)$ is the supremum over all finite measurable partitions. A selected partition can miss information, so its rate need not equal the full entropy. It does equal the full rate for a generating partition, which distinguishes complete histories up to negligible exceptions.

For the binary shift with independent symbols of probabilities $p$ and $1-p$, the first-symbol partition generates the histories. Independence makes the entropy of $N$ symbols equal to $N[-p\log p-(1-p)\log(1-p)]$. Thus the metric entropy is this one-symbol value. At $p=1/2$ it is $\log2$; if all weight lies on the all-zero fixed sequence, it is zero. The topological map has not changed, but its measure has. [Fiedler's entropy section](https://math.uchicago.edu/~may/REU2019/REUPapers/Fiedler.pdf) explains the generating-partition step.

## Lyapunov exponents

For a differentiable interval map and an orbit $x_j=f^j(x_0)$ that avoids zero derivatives, the chain rule gives

$$
(f^N)'(x_0)=\prod_{j=0}^{N-1}f'(x_j),\qquad
\lambda(x_0)=\lim_{N\to\infty}\frac1N
\sum_{j=0}^{N-1}\log|f'(x_j)|
$$

when the limit exists. It measures growth of an infinitesimal displacement. A positive value means local exponential stretching on average, before finite displacements saturate at the size of a bounded state space. In several coordinates, derivative matrices act on displacement vectors and can give several exponents. For flows, replace $N$ by the continuous parameter and use the derivative of the flow.

## Worked example and a limitation

For $f(x)=x/3$, the derivative is always $1/3$, so $\lambda=-\log3$. Every infinitesimal displacement contracts. For the tent map, each branch has derivative of absolute value two, so an orbit that never meets the corner has $\lambda=\log2$. The derivative at the corner does not exist and needs separate treatment.

A positive exponent alone is not a complete definition of chaos. For $f(x)=2x$ on $\mathbb R$, the exponent is $\log2$, but nonzero orbits escape instead of recurrently mixing within a compact set. Likewise, entropy is not universally equal to the sum of positive exponents. Such equalities require additional smoothness and measure assumptions.

## Practice

1. Find the exponent of $f(x)=-x/4$. Does the sign of the derivative cause growth?
2. For independent binary symbols with $p=1/4$, find the entropy per step and compare it with $\log2$.

## Worked answers

1. The absolute derivative is $1/4$, so the exponent is $-\log4$. The minus sign reverses orientation each step but does not cause expansion.
2. The value is $-\tfrac14\log(1/4)-\tfrac34\log(3/4)\approx0.56234$. This is less than $\log2\approx0.69315$, because unequal probabilities make histories less uncertain than equal probabilities.
