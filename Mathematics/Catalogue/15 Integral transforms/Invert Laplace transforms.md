---
title: "Invert Laplace transforms"
catalogue_ids:
  - "15.2.2"
  - "15.2.2.1"
  - "15.2.2.2"
  - "15.2.2.3"
  - "15.2.2.4"
---

> [!TLDR]
> Recover a one-sided Laplace original through transform pairs, partial fractions, justified series, or the complex inversion integral.

## Inverse transformation using tables

First read [[Laplace transform rules and impulses]]. An inverse Laplace problem gives a function $F(s)$ and asks for $f(t)$ on $t\geq0$ whose transform is $F$. Under the usual exponential-growth and piecewise-continuity assumptions, the original is unique apart from isolated values and other changes on sets of measure zero.

Start with transform pairs you can verify by integration. For example, $1/(s+2)$ is the transform of $e^{-2t}$, and $1/(s+2)^2$ is the transform of $te^{-2t}$. The denominator's shift is opposite in sign to the exponent. Complete a square when sine and cosine pairs occur:

$$
\frac{s+1}{(s+1)^2+4}\longleftrightarrow e^{-t}\cos(2t),\qquad
\frac2{(s+1)^2+4}\longleftrightarrow e^{-t}\sin(2t).
$$

A numerator $1$ instead of $2$ in the second fraction gives half the sine term. Check both the denominator and numerator, rather than matching their shape alone.

Before choosing a method, separate any factor $e^{-as}$ that represents a delay. Then inspect the remaining expression: a rational function suggests partial fractions, a completed quadratic suggests a damped sine or cosine, and a convergent expansion can suggest powers of $t$. After inversion, transform the answer again. This checks more than comparing the first few original values: distinct functions can share those values, while a verified transform pair checks the whole allowed interval.

## Partial fraction decomposition

A proper rational function has numerator degree smaller than denominator degree. For distinct linear factors, split it into simple fractions. Repeated factors require every power up to their multiplicity. Irreducible quadratic factors require a linear numerator. Polynomial division is needed first for an improper fraction; its polynomial part can correspond to impulses and their derivatives, rather than an ordinary function.

For example, set

$$
F(s)=\frac{2s+5}{(s+1)(s+2)}=\frac A{s+1}+\frac B{s+2}.
$$

Multiply through: $2s+5=A(s+2)+B(s+1)$. Put $s=-1$ to obtain $A=3$, and put $s=-2$ to obtain $B=-1$. Hence $f(t)=3e^{-t}-e^{-2t}$. The transformed-domain identities are algebraic; the one-sided original has convergence for $\operatorname{Re}s>-1$.

For a repeated pole, $F(s)=1/[s(s+1)^2]$ decomposes as $1/s-1/(s+1)-1/(s+1)^2$. Its original is $1-e^{-t}-te^{-t}$. A useful check is the value at $t=0$: it is zero. The terms cancel, as they should for a transform that decreases like $1/s^3$ on large positive $s$.

## Series expansions

Series can turn a difficult transform into familiar powers of $1/s$. Take real $a>0$ and $F(s)=1/(s+a)$. For $|s|>a$,

$$
F(s)=\frac1s\frac1{1+a/s}
=\sum_{n=0}^{\infty}\frac{(-a)^n}{s^{n+1}}.
$$

Each term suggests the original $(-a)^nt^n/n!$, so their sum is $e^{-at}$. This is not justified merely by writing a formal series. For positive real $s>a$, the integral of the sum of the absolute term values is

$$
\sum_{n=0}^{\infty}\frac{a^n}{n!}\int_0^\infty t^ne^{-st}\,dt
=\sum_{n=0}^{\infty}\frac{a^n}{s^{n+1}}<\infty.
$$

Thus the interchange is justified there, and direct integration verifies the recovered function on its larger domain $\operatorname{Re}s>-a$. An asymptotic expansion alone is different: it need not converge, so it cannot automatically be inverted as an infinite sum. Always give a convergence or error argument.

## Inversion integral

The general complex inversion formula is

$$
f(t)=\frac1{2\pi i}\lim_{R\to\infty}
\int_{c-iR}^{c+iR}e^{st}F(s)\,ds,\qquad t>0.
$$

Choose the real number $c$ strictly inside a right half-plane of convergence, to the right of all singularities relevant to that half-plane. A useful sufficient case is continuous $f$ of exponential order with piecewise continuous derivative on bounded intervals. For piecewise smooth inputs with jumps, the symmetric inversion limit returns the mean of the left and right values at a jump.

This is the **Bromwich integral**. With $s=c+i\omega$, it becomes an inverse Fourier integral of $F(c+i\omega)$, multiplied by $e^{ct}$. That substitution explains both the vertical contour and the factor $1/(2\pi i)$. A contour integral sums complex values along a path; proving this inversion theorem requires more analysis than the elementary table method. It is stated here to specify what inverse transformation means beyond a list of pairs.

## Worked example with a delay

Recover $F(s)=e^{-2s}(s+3)/[(s+1)(s+2)]$. Before the delay, decompose $(s+3)/[(s+1)(s+2)]=2/(s+1)-1/(s+2)$. Thus $g(t)=2e^{-t}-e^{-2t}$. The delay rule gives

$$
f(t)=H(t-2)\left(2e^{-(t-2)}-e^{-2(t-2)}\right).
$$

The expression is zero before $2$. At the start it jumps to $1$; the isolated assigned value at that point does not change its transform. Shifting only the step and leaving $g(t)$ unshifted would give a different original.

## Practice

1. Invert $(s+4)/(s+2)^2$.
2. Invert $1/(s^2+4s+13)$.

> [!example]- Worked answers
> 1. Write $s+4=(s+2)+2$. The fractions are $1/(s+2)+2/(s+2)^2$, so the original is $e^{-2t}+2te^{-2t}$.
> 2. Complete the square: $s^2+4s+13=(s+2)^2+9$. The numerator needs a factor $3$ for the sine pair. Therefore the original is $e^{-2t}\sin(3t)/3$.

## Reference

[NIST DLMF, Laplace inversion](https://dlmf.nist.gov/1.14.E20) gives the complex inversion formula and links to its hypotheses. Finite table manipulations above can also be checked directly by transforming the proposed originals.
