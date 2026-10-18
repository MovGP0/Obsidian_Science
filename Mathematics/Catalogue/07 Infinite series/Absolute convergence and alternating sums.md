---
title: "Absolute convergence and alternating sums"
catalogue_ids:
  - "7.2.3"
  - "7.2.3.1"
  - "7.2.3.2"
  - "7.2.3.3"
---

> [!TLDR]
> Absolute convergence controls the magnitudes of all terms; an alternating series can converge through cancellation even when its magnitudes have an infinite sum.

## Definitions

After [[Infinite sums and convergence]] and [[Tests for positive series]], consider a real series $\sum a_n$ whose terms can have either sign. It is **absolutely convergent** if $\sum |a_n|$ converges. It is **conditionally convergent** if $\sum a_n$ converges but $\sum |a_n|$ diverges. A divergent series belongs to neither class.

For example, $\sum(-1)^n/n^2$ converges absolutely because $\sum1/n^2$ converges. The series $\sum(-1)^{n+1}/n$ converges conditionally, as proved below. Absolute values remove cancellation and therefore pose a stronger test.

Absolute convergence implies convergence. To prove it, bound every late finite tail by

$$
\left|\sum_{n=p}^q a_n\right|\leq\sum_{n=p}^q|a_n|.
$$

The right side becomes small by the Cauchy criterion for the convergent magnitude series. The left side therefore satisfies the same criterion. This argument also works for complex terms with their modulus.

## Properties of absolutely convergent series

Every rearrangement of an absolutely convergent series has the same sum. A rearrangement uses each original term exactly once but in a different order. The reason is tail control: choose a finite initial set whose omitted absolute sum is below $\varepsilon$. Eventually the rearrangement has included that whole set. Any extra terms alter the result by at most the small omitted magnitude sum.

For two absolutely convergent series starting at index zero, their **Cauchy product** has coefficients

$$
c_n=\sum_{k=0}^n a_k b_{n-k},\qquad
\sum_{n=0}^{\infty}c_n=
\left(\sum_{n=0}^{\infty}a_n\right)
\left(\sum_{n=0}^{\infty}b_n\right).
$$

The coefficient groups all products whose indices add to $n$. The estimate $\sum_{j,k}|a_jb_k|=(\sum|a_j|)(\sum|b_k|)<\infty$ provides the required absolute control. For finite sums this is ordinary multiplication; for infinite sums the convergence assumptions justify the limiting grouping.

For a concrete example, multiply two geometric series $\sum_{n=0}^{\infty}r^n=1/(1-r)$, with $|r|<1$. Each coefficient is $(n+1)r^n$, because there are $n+1$ products of that degree. Hence $\sum_{n=0}^{\infty}(n+1)r^n=1/(1-r)^2$.

## Alternating series theorem

Let $b_n\geq0$, assume $b_{n+1}\leq b_n$, and suppose $b_n\to0$. Then

$$
\sum_{n=1}^{\infty}(-1)^{n+1}b_n
$$

converges. Its even partial sums increase, its odd partial sums decrease, and each even sum lies below each later odd bound. The gap between adjacent even and odd sums is a term $b_n\to0$, so the two limiting bounds agree. Eventual monotonicity suffices after a finite initial part.

The same enclosure proves that the error after $N$ terms has magnitude at most $b_{N+1}$ and has the sign of the first omitted term, unless it is zero. Alternating signs alone are insufficient: the magnitudes must decrease eventually and tend to zero for this theorem to apply. Failure of its assumptions does not automatically imply divergence; it means a different proof is needed.

## Worked example: conditional convergence and changed order

The alternating harmonic series $1-1/2+1/3-1/4+\cdots$ meets the theorem, but its absolute-value series is harmonic and divergent. Denote its sum by $A$; later, [[Power series and Taylor approximations]] identifies $A=\log2$.

Now rearrange the terms in groups of two positive terms and one negative term. After $m$ groups the finite sum is

$$
T_m=\sum_{k=1}^{2m}\frac1{2k-1}-\frac12\sum_{k=1}^m\frac1k
=H_{4m}-\frac12H_{2m}-\frac12H_m,
$$

where $H_n=\sum_{k=1}^n1/k$. This equals $(H_{4m}-H_{2m})+(H_{2m}-H_m)/2$. Each bracket tends to $A$, because the even alternating partial sum is $H_{2m}-H_m\to A$. Therefore $T_m\to3A/2$. Individual terms inside each group tend to zero, so all intermediate partial sums have the same limit. The new order gives $3\log2/2$, not $\log2$.

## Practice

1. Classify $\sum_{n=1}^{\infty}(-1)^{n+1}/\sqrt n$ and bound the error after $100$ terms.
2. Evaluate $\sum_{n=0}^{\infty}(n+1)/3^n$ using a Cauchy product.

## Worked answers

1. The magnitudes decrease to zero, so the alternating theorem proves convergence. Their sum diverges by the $p$-series test with $p=1/2$. The convergence is conditional. The error is at most $1/\sqrt{101}$ and is positive because term $101$ is positive.
2. Two absolutely convergent geometric series with $r=1/3$ have product $(1-1/3)^{-2}=9/4$. Their degree-$n$ coefficient is $(n+1)/3^n$, so the required sum is $9/4$.
