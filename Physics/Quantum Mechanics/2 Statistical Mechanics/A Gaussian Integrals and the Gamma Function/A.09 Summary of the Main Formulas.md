---
title: "Summary of the Main Formulas"
source_chapter: "A"
source_section: "A.9"
source_page: 470
---

> [!TLDR]
> The main Gaussian, gamma, and beta identities provide a compact reference for statistical-mechanics calculations.

The formulas used most often are collected here. Use the integration domain and the measure to select a formula. On the full line, odd powers vanish for a centred Gaussian; on the half-line, they do not. In a radial problem, include the radial Jacobian before identifying the moment power. The proofs and boundary conditions are given in [[A.01 Fundamental Gaussian Integral]] through [[A.07 Volume of a Ball in N Dimensions]].

## Gaussian integrals

For $a>0$,

$$
\int_{-\infty}^{+\infty}e^{-ax^2}\,dx=\sqrt{\frac\pi a},
\qquad
\int_0^{+\infty}e^{-ax^2}\,dx=\frac12\sqrt{\frac\pi a}.
$$

For $n=0,1,2,\ldots$,

$$
\int_0^\infty x^{2n}e^{-ax^2}\,dx
=\frac{(2n-1)!!}{2^{n+1}}
\sqrt{\frac{\pi}{a^{2n+1}}},
$$

$$
\int_0^\infty x^{2n+1}e^{-ax^2}\,dx
=\frac{n!}{2a^{n+1}}.
$$

For example, a half-line integrand $x^3e^{-ax^2}$ uses the odd-power formula with $n=1$, giving $1/(2a^2)$. The same integrand on the full line integrates to zero. This domain check prevents a common error when changing a Cartesian integral into a speed or radial integral.

## Gamma and beta functions

$$
\Gamma(n)=(n-1)!,
\qquad n=1,2,\ldots,
$$

$$
\Gamma\left(n+\frac12\right)
=\frac{(2n-1)!!}{2^n}\sqrt\pi,
\qquad n=0,1,2,\ldots,
$$

$$
B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)},
\qquad \operatorname{Re}p,\operatorname{Re}q>0.
$$

All displayed integer arguments have the stated domains. The factorial relation is shifted by one: $\Gamma(n)$ is $(n-1)!$, not $n!$. For beta integrals, check both endpoint conditions before using the gamma ratio. Analytic continuation of a function does not establish convergence of the original integral.

## Stirling approximation

$$
\ln n!\approx n\ln n-n+\frac12\ln(2\pi n).
$$

This is a large-positive-integer approximation. The first omitted logarithmic correction is of order $1/n$. Retain the logarithmic term when finite-size accuracy matters; discard it per particle only after comparing its size with the leading terms. See [[A.05 Stirling Formula]] for the asymptotic meaning.

## N-dimensional sphere and ball

$$
S_{N-1}=\frac{2\pi^{N/2}}{\Gamma(N/2)},
\qquad
V_N(R)=\frac{\pi^{N/2}}{\Gamma(N/2+1)}R^N.
$$

Here $N\geq1$ is an integer and $R\geq0$. The factor $S_{N-1}$ belongs to the unit sphere; the boundary area at radius $R>0$ is $S_{N-1}R^{N-1}$, while the ball volume contains $R^N$. At $N=3$, the volume formula gives $4\pi R^3/3$, which checks the distinction.

For statistical mechanics, these identities evaluate a model after its energy, measure, and state-counting convention have been chosen. They supply neither a probability normalization automatically nor a justification for replacing a quantum sum by a continuum integral. See [[A.08 Applications in Statistical Mechanics]] for those choices.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | — | Ball radius | The radius in the coordinate space considered. |
| $S_{N-1}$ | $1$ | Unit-sphere area factor | The angular measure of the unit sphere in N dimensions. |
| $V_N(R)$ | — | N-dimensional volume | The enclosed measure, with units of radius to the power N. |
