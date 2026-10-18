---
title: "Fourier coefficients and convergence"
catalogue_ids:
  - "7.4"
  - "7.4.1"
  - "7.4.1.1"
  - "7.4.1.2"
---

> [!TLDR]
> Fourier coefficients describe a periodic function by orthogonal sine and cosine terms; the meaning of convergence must be specified, especially at jumps.

## Prerequisite route and basic concepts

Start from [[04.04 Angular measure]], [[04.05 The unit circle]], and [[04.06 Trigonometric identities]]. Angles below use radians. For coefficient calculations, read [[08.01 Definite integrals]] and [[08.05 Integration by parts]]. [[Uniform convergence and operations on series]] explains why a series is more than a finite trigonometric polynomial.

A function is **periodic** with period $2L>0$ if $f(x+2L)=f(x)$. A finite trigonometric sum is

$$
S_N(x)=\frac{a_0}{2}+\sum_{n=1}^{N}
\left[a_n\cos\left(\frac{n\pi x}{L}\right)
+b_n\sin\left(\frac{n\pi x}{L}\right)\right].
$$

Every term repeats after $2L$. The index $n$ counts harmonics, meaning integer multiples of the basic parameter $\pi/L$. The limit as $N\to\infty$, when justified in a stated sense, is a Fourier series. Here $a_0/2$ is the mean value; the factor $1/2$ is part of this convention.

## Derive the coefficients from orthogonality

For positive integers $m,n$, the integral of $\cos(m\pi x/L)\cos(n\pi x/L)$ over $[-L,L]$ is zero if $m\ne n$ and $L$ if $m=n$. Sines have the same property, while sine–cosine integrals vanish. Product-to-sum identities prove these statements by integrating whole integer periods. The constant function has squared integral $2L$.

To extract the $m$th cosine coefficient from a finite sum, multiply by $\cos(m\pi x/L)$ and integrate. Every other term vanishes. This motivates the definition, for integrable $f$,

$$
a_n=\frac1L\int_{-L}^{L}f(x)\cos\left(\frac{n\pi x}{L}\right)dx,
\quad n\geq0,
$$

$$
b_n=\frac1L\int_{-L}^{L}f(x)\sin\left(\frac{n\pi x}{L}\right)dx,
\quad n\geq1.
$$

We define these numbers directly even before proving convergence of the resulting infinite series. Writing $f\sim S_\infty$ can indicate this formal association; it does not by itself assert equality at every point.

## Worked example: a periodic ramp

Let $f(x)=x$ for $-\pi<x<\pi$ and repeat it with period $2\pi$. The function is odd, so all cosine coefficients vanish. Integration by parts gives

$$
b_n=\frac2\pi\int_0^\pi x\sin(nx)\,dx
=\frac2\pi\left[-\frac{x\cos(nx)}n+\frac{\sin(nx)}{n^2}\right]_0^\pi
=\frac{2(-1)^{n+1}}n.
$$

Thus its Fourier expansion is $2\sum_{n=1}^{\infty}(-1)^{n+1}\sin(nx)/n$. At $x=\pi/2$, the series becomes $2(1-1/3+1/5-\cdots)$. The convergence theorem below identifies it with $\pi/2$, yielding the arctangent sum $1-1/3+1/5-\cdots=\pi/4$.

At $x=\pi$, however, every sine term is zero. The periodic function has left limit $\pi$ and right limit $-\pi$, so the correct series value is their average $0$. A separately assigned endpoint value cannot alter coefficient integrals.

## Pointwise, uniform, and mean-square convergence

A useful pointwise theorem assumes a finite partition of one period on whose pieces $f$ and $f'$ extend continuously to finite one-sided endpoint values. Then the symmetric Fourier partial sums converge to

$$
\frac{f(x^-)+f(x^+)}2.
$$

At a continuous point this is $f(x)$. At a jump it is the midpoint. At joined period endpoints, take the limits from the periodic extension. This is the piecewise smooth theorem used in [MIT's 18.03 lecture notes, §26](https://math.mit.edu/~poonen/03/notes.pdf); a proof through the Dirichlet kernel is beyond this first lesson.

Pointwise convergence examines a fixed $x$. Uniform convergence requires the largest error over a whole period to tend to zero. A jump prevents uniform convergence because the partial sums are continuous. The nearby oscillatory overshoot is called the Gibbs phenomenon; a narrower oscillation does not imply a vanishing maximum error.

Mean-square convergence instead requires $\int_{-L}^{L}|f-S_N|^2dx\to0$. For every square-integrable $f$, this holds for its Fourier partial sums. The condition is $\int_{-L}^{L}|f|^2dx<\infty$; changing finitely many point values leaves it and the coefficients unchanged. Completeness of trigonometric functions, a separate analysis theorem, establishes this result. See [[16.06 Convergence]] for the distinction and [[16.07 Energy of an expansion]] for the norm identity.

## Main properties and valid operations

Coefficients are linear in $f$. For a continuous periodic $f$, a sufficient condition for absolute uniform convergence is $\sum_{n\geq1}(|a_n|+|b_n|)<\infty$; the M-test bounds each trigonometric term. Orthogonality then identifies the sum with $f$. For a piecewise smooth function the pointwise theorem provides that identification directly at continuous points.

Differentiation introduces factors $n\pi/L$, so convergence of the original series does not suffice. A safe coefficient condition is $\sum n(|a_n|+|b_n|)<\infty$, which makes the derivative series uniformly convergent. Finite-interval integration is justified by uniform convergence; other integrable cases require a separate theorem. These sufficient coefficient tests are explained in Jiří Lebl's [Fourier series section](https://jirilebl.github.io/ra/html/sec_fourier.html). Do not differentiate a ramp expansion termwise across its jumps.

## Practice

1. Find all Fourier coefficients of $f(x)=3+2\cos(2x)-\sin(3x)$ with period $2\pi$.
2. A piecewise smooth periodic function jumps from $-2$ to $6$ at $x_0$ but is defined as $100$ at that point. What is its Fourier-series value there?

## Worked answers

1. Orthogonality gives $a_0=6$, $a_2=2$, and $b_3=-1$; every other coefficient is zero. The constant term is $a_0/2=3$, not $a_0$.
2. The series tends to $(-2+6)/2=2$. The isolated assigned value has no effect on any integral coefficient, so it does not change that limit.
