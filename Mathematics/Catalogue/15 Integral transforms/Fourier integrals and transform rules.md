---
title: "Fourier integrals and transform rules"
catalogue_ids:
  - "15.3"
  - "15.3.1"
  - "15.3.1.1"
  - "15.3.1.2"
  - "15.3.1.3"
  - "15.3.1.4"
---

> [!TLDR]
> The Fourier transform measures oscillating components over the whole real line, with a fixed sign and normalization convention.

## From a Fourier series to a Fourier integral

Read [[06.05 Euler’s formula]], [[08.07 Improper integrals]], and [[16.04 Fourier coefficients]] first. A Fourier series uses discrete oscillations $e^{2\pi int/T}$ for a periodic function with period $T$. Their parameter spacing is $2\pi/T$. As the interval length grows, that spacing decreases. A continuous integral over all real parameters replaces the sum. [[16.10 The nonperiodic extension]] explains this limiting motivation.

Fix this convention throughout the lesson:

$$
\widehat f(k)=\int_{-\infty}^{\infty}f(t)e^{-ikt}\,dt,
\qquad
f(t)=\frac1{2\pi}\int_{-\infty}^{\infty}\widehat f(k)e^{ikt}\,dk.
$$

The forward sign is negative. The inverse sign is positive and has the factor $1/(2\pi)$. The variable $k$ is a real mathematical parameter. Both integrals run over the full real line. If $f$ is absolutely integrable, its forward transform exists for every $k$. A sufficient condition for the displayed inverse to hold at continuous points is that both $f$ and $\widehat f$ are absolutely integrable. For an integrable function of bounded variation near a point, symmetric inverse limits recover the mean of the left and right limits there. These are different sufficient forms of inversion, not permission to invert every divergent integral.

For even real $f$, the sine part cancels, so $\widehat f(k)=2\int_0^\infty f(t)\cos(kt)dt$. For odd real $f$, the cosine part cancels and the transform is purely imaginary. Real-valued inputs obey $\widehat f(-k)=\overline{\widehat f(k)}$, where the bar is complex conjugation.

## Calculation rules

Linearity holds wherever the transforms exist. Substitution and integration by parts give the following rules. Assume sufficient decay and integrability for each operation; the derivative rule requires the boundary term $f(t)e^{-ikt}$ to vanish at both infinities.

| Change in the original | Change in its transform |
| --- | --- |
| $f(t-a)$ | $e^{-ika}\widehat f(k)$ |
| $e^{ibt}f(t)$ | $\widehat f(k-b)$ |
| $f(at)$, real $a\ne0$ | $\widehat f(k/a)/|a|$ |
| $f'(t)$ | $ik\widehat f(k)$ |
| $tf(t)$ | $i\widehat f'(k)$ |

For instance, differentiate the kernel with respect to $k$: $\widehat f'(k)=\int(-it)f(t)e^{-ikt}dt$. Multiply by $i$ to obtain the last row. A negative scale reverses integration bounds, which is why the scale rule uses $|a|$.

Define convolution over the full line by $(f*g)(t)=\int_{\mathbb R}f(t-v)g(v)dv$. If both inputs are absolutely integrable, changing the integration order and substituting $u=t-v$ gives $\widehat{f*g}=\widehat f\widehat g$. Conversely, multiplication in the original domain introduces a factor $1/(2\pi)$ in the transform convolution when the necessary integrals exist. Do not transfer a one-sided convolution formula without changing its support assumptions.

## Worked example: an exponential on both sides

Let $f(t)=e^{-a|t|}$ with real $a>0$. Split the integral at zero and substitute $u=-t$ in the negative part:

$$
\widehat f(k)=\int_0^\infty e^{-(a+ik)t}dt+
\int_0^\infty e^{-(a-ik)u}du
=\frac1{a+ik}+\frac1{a-ik}
=\frac{2a}{a^2+k^2}.
$$

Both sides are absolutely integrable, and $f$ is continuous. Inversion therefore gives an ordinary inverse integral. This pair is useful later for a whole-line boundary-value problem.

## Special functions and distributional cases

Let $r_A(t)=1$ for $|t|<A$ and zero for $|t|>A$, with $A>0$. Direct integration gives $\widehat r_A(k)=2\sin(Ak)/k$, assigned the continuous value $2A$ at $k=0$. The inverse integral is not absolutely integrable, but symmetric inversion gives $1$ inside the interval, $0$ outside, and $1/2$ at its endpoints. Its slow transform decay comes from the jumps.

For the Gaussian $f(t)=e^{-at^2}$, $a>0$, the transform is

$$
\widehat f(k)=\sqrt{\frac\pi a}\,e^{-k^2/(4a)}.
$$

One accessible check avoids a complex shift of the integration path. Since $f'=-2atf$, the rules imply $ik\widehat f=-2ai\widehat f'$. Thus $\widehat f'=-(k/2a)\widehat f$. Solving gives a constant times $e^{-k^2/(4a)}$. The Gaussian integral at $k=0$ supplies $\sqrt{\pi/a}$.

A constant function is not integrable on the real line. It does not have an ordinary Fourier integral of this kind. In distribution notation, $1$ transforms to $2\pi\delta(k)$ and $\delta(t-a)$ transforms to $e^{-ika}$. Use these only with distributional interpretation, as introduced in [[Laplace transform rules and impulses]].

## Practice

1. Find the transform of $e^{-|t-3|}$.
2. If $\widehat f(k)=\sqrt\pi e^{-k^2/4}$ for $f(t)=e^{-t^2}$, find the transform of $te^{-t^2}$.

> [!example]- Worked answers
> 1. Translation by $3$ multiplies the transform of $e^{-|t|}$ by $e^{-3ik}$. The result is $2e^{-3ik}/(1+k^2)$.
> 2. Differentiate the given transform and multiply by $i$. The result is $-ik\sqrt\pi e^{-k^2/4}/2$. It is imaginary and odd, consistent with an odd real input.

## Reference

[NIST DLMF, Fourier transforms](https://dlmf.nist.gov/1.14#i) provides inversion and calculus identities. Its symmetric normalization and sign choices differ from this lesson; the formulas above all use the convention stated here.
