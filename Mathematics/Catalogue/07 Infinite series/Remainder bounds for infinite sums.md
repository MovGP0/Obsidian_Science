---
title: "Remainder bounds for infinite sums"
catalogue_ids:
  - "7.2.5"
  - "7.2.5.1"
  - "7.2.5.2"
  - "7.2.5.3"
---

> [!TLDR]
> A remainder bound gives a certified error after finitely many terms; geometric, integral, and alternating bounds apply under different assumptions.

## Define the remainder before estimating it

Let $S=\sum_{n=1}^{\infty}a_n$ be a convergent series and $S_N=\sum_{n=1}^Na_n$. Its **remainder** is $R_N=S-S_N$. An estimate $|R_N|\leq\delta$ places the unknown exact sum in $[S_N-\delta,S_N+\delta]$. This is an absolute error statement. A relative error bound also needs information about $|S|$.

Read [[Tests for positive series]] and [[Absolute convergence and alternating sums]]. A convergence proof says that some sufficiently large $N$ works for every chosen tolerance. A practical estimate finds such an $N$. Always state whether a truncation includes the index $N$; the first omitted index here is $N+1$.

## Estimation using a majorant

A **majorant** is a nonnegative summable upper bound for term magnitudes. If $|a_n|\leq b_n$ for all $n>N$, then

$$
|R_N|\leq\sum_{n=N+1}^{\infty}|a_n|
\leq\sum_{n=N+1}^{\infty}b_n.
$$

Choose a majorant with an accessible tail. If $|a_{n+1}|\leq q|a_n|$ for all $n\geq N+1$, where $0<q<1$, then the tail starting with $a_{N+1}$ satisfies

$$
|R_N|\leq\frac{|a_{N+1}|}{1-q}.
$$

The ratio limit alone is not an error bound at a particular index. Prove that the chosen $q$ bounds every later ratio. For $a_n=1/n!$ and $n\geq N+1$, the ratio is $1/(n+1)\leq1/(N+2)$. This makes $q=1/(N+2)$ a valid choice.

## Integral bounds for positive decreasing terms

If $a_n=f(n)$ and $f$ is positive, continuous, decreasing, and integrable on $[N,\infty)$, rectangle comparisons give

$$
\int_{N+1}^{\infty}f(x)\,dx\leq R_N
\leq\int_N^{\infty}f(x)\,dx.
$$

For $a_n=1/n^2$, this becomes $1/(N+1)\leq R_N\leq1/N$. Thus $N=1000$ ensures error at most $0.001$, while a strictly smaller error is guaranteed by $N=1001$. Although individual omitted terms are of size about $N^{-2}$, the whole tail is of size about $N^{-1}$.

These lower and upper bounds also improve an estimate. If $L\leq R_N\leq U$, then $S_N+(L+U)/2$ has error at most $(U-L)/2$. For the squared reciprocal series this is $1/[2N(N+1)]$, much smaller than $1/N$. The improved approximation is a midpoint of a proven interval, not a claim that the exact tail equals the integral.

## Convergent alternating series

If $a_n=(-1)^{n+1}b_n$ with $b_n$ decreasing to zero, the alternating-series theorem gives $|R_N|\leq b_{N+1}$. It also locates the sum between $S_N$ and $S_{N+1}$. Consequently the midpoint $(S_N+S_{N+1})/2$ has error at most $b_{N+1}/2$. This does not require absolute convergence.

![[catalogue-ch07-remainder-enclosure.svg|**Fig. C.ch07.1** For the alternating harmonic series, the exact sum lies between an even partial sum and the next odd partial sum. Their midpoint reduces the guaranteed error.]]

In Fig. C.ch07.1, $S_4=7/12$ and $S_5=47/60$. The interval length is $1/5$, the first omitted magnitude. The diagram shows an enclosure, not the unknown exact location within it.

## Worked example: a factorial tail

Approximate $e=\sum_{n=0}^{\infty}1/n!$ by the terms from $n=0$ through $6$. Their sum is

$$
S_6=1+1+\frac12+\frac16+\frac1{24}+\frac1{120}+\frac1{720}
=\frac{1957}{720}.
$$

The first omitted term is $1/7!=1/5040$. Every subsequent ratio is at most $1/8$. Therefore

$$
0<e-S_6\leq\frac{1/5040}{1-1/8}=\frac1{4410}<0.000227.
$$

Positivity gives a one-sided enclosure: $1957/720<e\leq1957/720+1/4410$. This is more informative than a decimal rounded without a bound. The identification of the factorial sum with $e$ follows from [[Power series and Taylor approximations]].

## Special-series cautions

A telescoping series can have an exact remainder, such as $1/(N+1)$ for $\sum1/[n(n+1)]$. Use that rather than a weaker general estimate. For geometric series the exact tail is $ar^N/(1-r)$ when the included terms have indices $0$ through $N-1$. With negative $r$, bound its magnitude using $|1-r|$, not by ignoring the sign.

An alternating estimate applies to a proven decreasing tail, not to any signed series. A small last included term is never a general guarantee that the omitted sum is small. Decide the required tolerance before rounding; the rounded value adds a further rounding error.

## Practice

1. Bound the remainder after $N=20$ terms of $\sum_{n=1}^{\infty}(-1)^{n+1}/n^2$. Give its sign.
2. Give an approximation and a two-sided error bound using $S_{10}=\sum_{n=1}^{10}1/n^2$ and integral bounds.

## Worked answers

1. The magnitudes decrease to zero. Term $21$ is positive, so $0\leq R_{20}\leq1/441$. The sum lies between $S_{20}$ and $S_{20}+1/441$.
2. The remainder lies in $[1/11,1/10]$. Its midpoint is $21/220$, and half its interval width is $1/220$. Thus $S_{10}+21/220$ approximates the sum with absolute error at most $1/220$.
