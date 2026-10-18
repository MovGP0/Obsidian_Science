---
title: "Special sums and Bernoulli and Euler numbers"
catalogue_ids:
  - "7.2.4"
  - "7.2.4.1"
  - "7.2.4.2"
---

> [!TLDR]
> Special series can be summed by cancellation or power-series identities; Bernoulli and Euler numbers record coefficients with explicitly chosen sign conventions.

## Prerequisites and exact sums

Read [[Infinite sums and convergence]] and [[Absolute convergence and alternating sums]]. The coefficient calculations below also use [[Power series and Taylor approximations]]. A **generating function** stores a sequence as coefficients of a power series. An exponential generating function uses coefficients $a_n/n!$ rather than $a_n$, so factorials must remain in place when coefficients are compared.

Three useful exact identities, with their domains, are

$$
\sum_{n=0}^{\infty}r^n=\frac1{1-r},\quad |r|<1,
\qquad
\sum_{n=0}^{\infty}\frac{x^n}{n!}=e^x,\quad x\in\mathbb R,
$$

$$
\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n}=\log(1+x),
\quad -1<x\leq1.
$$

The first identity follows from finite geometric sums. The second follows from Taylor's theorem with a remainder tending to zero. The third follows by integrating the geometric series inside its convergence interval; at $x=1$, a separate endpoint argument is needed. These derivations are given in [[Power series and Taylor approximations]]. A table entry is a theorem with a domain, not an instruction to substitute any number.

Another exact sum is $\sum_{n=1}^{\infty}1/[n(n+1)]=1$, obtained by finite cancellation. Unlike the geometric series, its ratio is not constant. Recognizing cancellation can be more useful than trying to match a table.

## Bernoulli numbers: a coefficient definition

We use the standard convention $B_1=-1/2$. Define the **Bernoulli numbers** by

$$
\frac{z}{e^z-1}=\sum_{n=0}^{\infty}B_n\frac{z^n}{n!},
\qquad |z|<2\pi.
$$

At $z=0$ the left side means its continuous value $1$. This definition and the Euler convention below follow [NIST DLMF §24.2](https://dlmf.nist.gov/24.2). Some books use a convention with the opposite value of $B_1$; check it before using a formula.

We can calculate the first values by multiplication, without evaluating a limit repeatedly. Since

$$
\frac{e^z-1}{z}=1+\frac z2+\frac{z^2}{6}+\frac{z^3}{24}+\cdots,
$$

its product with $B_0+B_1z+B_2z^2/2+B_3z^3/6+\cdots$ must be $1$. The constant coefficient gives $B_0=1$. The coefficient of $z$ gives $B_1+1/2=0$. The quadratic coefficient gives $B_2/2+B_1/2+1/6=0$, hence $B_2=1/6$. The cubic coefficient then gives $B_3=0$.

More generally, comparing the coefficient of $z^m$ after multiplication by $e^z-1$ yields

$$
\sum_{k=0}^{m-1}\binom mk B_k=0\quad(m\geq2).
$$

Here $\binom mk=m!/[k!(m-k)!]$ counts selections of $k$ items from $m$. With $B_0=1$, the recurrence determines one new number at each step. For $m=5$, it gives $1-5/2+10/6+5B_4=0$, so $B_4=-1/30$.

## Euler numbers and their convention

Define the **Euler numbers** used here by

$$
\frac1{\cosh z}=\sum_{n=0}^{\infty}E_n\frac{z^n}{n!},
\qquad |z|<\pi/2,
\qquad \cosh z=\frac{e^z+e^{-z}}2.
$$

This is equivalent to DLMF's $2e^z/(e^{2z}+1)$. Since $\cosh z$ is even, its reciprocal is even: all odd coefficients vanish. Multiplying by $\cosh z=1+z^2/2!+z^4/4!+\cdots$ gives $E_0=1$, $E_2=-1$, and $E_4=5$. In particular, the coefficient of $z^4$ is $E_4/24+E_2/4+1/24=0$, giving $E_4=5$.

For each $m\geq1$, the recurrence is $\sum_{k=0}^m\binom{2m}{2k}E_{2k}=0$. These signed Euler numbers differ from the positive secant numbers $|E_{2m}|$. Substituting $z=ix$ and using $\cosh(ix)=\cos x$ gives

$$
\frac1{\cos x}=\sum_{m=0}^{\infty}(-1)^mE_{2m}\frac{x^{2m}}{(2m)!},
\qquad |x|<\pi/2.
$$

The coefficient sequences are numerical objects; they are not the values of the exponential function or the Euler constant.

## Worked example: use a coefficient sequence

To approximate $1/\cosh(1/5)$ through degree four, use $E_0=1$, $E_2=-1$, and $E_4=5$:

$$
\frac1{\cosh(1/5)}\approx1-\frac{(1/5)^2}{2}+\frac{5(1/5)^4}{24}
=1-\frac1{50}+\frac1{3000}=\frac{2941}{3000}.
$$

The polynomial is easy to evaluate, but its value alone is not an error guarantee. A Taylor remainder bound or a separate tail bound is required for certified digits. The permitted domain is also essential: the same infinite expansion does not converge at $z=2$.

## Practice

1. Use the Bernoulli recurrence with $m=4$ to verify $B_3=0$.
2. Use the Euler recurrence to calculate $E_6$ and the $x^6$ coefficient of $1/\cos x$.

## Worked answers

1. The equation is $B_0+4B_1+6B_2+4B_3=0$. Substitution gives $1-2+1+4B_3=0$, so $B_3=0$.
2. The equation is $E_0+15E_2+15E_4+E_6=0$. Hence $1-15+75+E_6=0$, giving $E_6=-61$. In the secant expansion, $(-1)^3E_6/6!=61/720$, so the coefficient is positive.
