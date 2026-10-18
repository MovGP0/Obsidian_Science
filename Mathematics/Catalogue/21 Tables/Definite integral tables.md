---
title: "Definite integral tables and convergence"
catalogue_ids:
  - "21.8"
  - "21.8.1"
  - "21.8.2"
  - "21.8.3"
  - "21.8.4"
---

> [!TLDR]
> A definite-integral table includes its limits and convergence conditions; symmetry, substitution, and endpoint tests explain many of its entries.

## Definite integrals and improper limits

For a continuous function on $[a,b]$, $\int_a^bf(x)\,dx$ is its signed accumulated area. If $F'=f$, the fundamental theorem gives $F(b)-F(a)$. An integral with an infinite endpoint or an unbounded integrand is **improper** and is defined by a limit. Review [[08.03 The fundamental theorem]] and [[08.07 Improper integrals]].

For example, $\int_1^\infty x^{-p}dx$ means $\lim_{R\to\infty}\int_1^R x^{-p}dx$. The limit exists exactly when $p>1$, giving $1/(p-1)$. At $p=1$, the logarithm diverges. At $0<p<1$, the power grows without bound. At a singular endpoint near zero, the criterion reverses: $\int_0^1x^{-p}dx$ converges exactly when $p<1$.

The two sides of an interior pole must converge separately. Symmetric cancellation is a different notion called a principal value. Thus $\int_{-1}^1dx/x$ is not a convergent improper integral, even though symmetric cutoffs cancel. A table of principal values must identify itself explicitly.

## Trigonometric definite integrals

| Integral | Value | Conditions |
| --- | --- | --- |
| $\int_0^\pi\sin x\,dx$ | $2$ | Radians |
| $\int_0^{2\pi}\sin nx\,dx$ | $0$ | Nonzero integer $n$ |
| $\int_0^\pi\sin^2x\,dx$ | $\pi/2$ | Radians |
| $\int_0^\pi\cos mx\cos nx\,dx$ | $0$ | Distinct nonnegative integers $m,n$ |
| $\int_0^\pi\cos^2nx\,dx$ | $\pi/2$ | Positive integer $n$ |

The last row changes to $\pi$ at $n=0$. This exception is why the condition column matters. Product-to-sum identities prove the orthogonality row. Distinct frequencies produce nonzero integer multiples of $x$ inside cosines, whose integrals vanish at both endpoints.

For $I_n=\int_0^{\pi/2}\sin^nx\,dx$ and integer $n\ge2$, integration by parts gives $I_n=(n-1)I_{n-2}/n$, because the boundary product vanishes. Starting with $I_0=\pi/2$ and $I_1=1$, we get $I_2=\pi/4$, $I_3=2/3$, and $I_4=3\pi/16$. The recurrence generates a table without separate integrations.

## Exponential definite integrals

For $a>0$ and a nonnegative integer $n$,

$$
\int_0^\infty e^{-ax}dx=\frac1a,\qquad
\int_0^\infty x^ne^{-ax}dx=\frac{n!}{a^{n+1}}.
$$

Set $u=ax$ to extract $a^{-(n+1)}$, then integrate by parts repeatedly. The endpoint terms vanish because exponential decay dominates any fixed nonnegative integer power. For example, $\int_0^\infty x^2e^{-3x}dx=2!/3^3=2/27$.

The Gaussian row is $\int_{-\infty}^{\infty}e^{-ax^2}dx=\sqrt{\pi/a}$ for $a>0$. At $a=0$, the integral of 1 diverges. A derivation squares the positive integral, integrates over the plane, and uses polar coordinates; see [[Gamma function tables]] for the resulting half-integer gamma value. The whole-line integral is twice the half-line integral because the integrand is even.

## Logarithmic definite integrals

For $p>-1$,

$$
\int_0^1x^p\ln x\,dx=-\frac1{(p+1)^2},
\qquad
\int_0^1x^p(\ln x)^2dx=\frac2{(p+1)^3}.
$$

Substitute $x=e^{-u}$. Then $\ln x=-u$ and $dx=-e^{-u}du$. The first integral becomes $-\int_0^\infty ue^{-(p+1)u}du$, which is an exponential row. The second becomes the corresponding integral of $u^2$. This also proves convergence for the stated parameter range and explains the sign of the first result. A logarithm is negative between zero and one, so a positive result there would be suspect.

## Algebraic definite integrals

For real $p>-1$, $\int_0^1x^pdx=1/(p+1)$. For $a>0$, the circle substitution $x=a\sin\theta$ gives

$$
\int_{-a}^{a}\sqrt{a^2-x^2}\,dx=\frac{\pi a^2}{2},\qquad
\int_0^a\frac{dx}{\sqrt{a^2-x^2}}=\frac\pi2.
$$

The first is a semicircle area. The second has an unbounded endpoint, but converges: after substitution it is the finite integral of 1 from 0 to $\pi/2$. Both limits and differential must change during substitution. Do not insert original limits into an antiderivative still expressed in the new variable.

## Worked example: combine scale and convergence

Evaluate $\int_0^1x(\ln x)^2dx$. It is improper at zero. The logarithmic row uses $p=1$, giving $2/2^3=1/4$. To check without direct matching, put $x=e^{-u}$. Then $x\,dx=-e^{-2u}du$ and the integral becomes $\int_0^\infty u^2e^{-2u}du=2!/2^3=1/4$. Nonnegative integrand and positive answer agree.

## Practice

1. Evaluate $\int_0^{\pi/2}\sin^5x\,dx$ using the recurrence.
2. Evaluate $\int_0^\infty xe^{-4x}dx$ and decide whether the same integral with $e^{4x}$ converges.

> [!example]- Worked answers
> 1. $I_5=(4/5)I_3=(4/5)(2/3)=8/15$.
> 2. The decaying row gives $1!/4^2=1/16$. With $e^{4x}$, the nonnegative integrand increases without bound, so the improper integral diverges; a formal sign replacement in the formula is invalid.
