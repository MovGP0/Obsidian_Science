---
title: "Summary of the Main Formulas"
source_chapter: "A"
source_section: "A.9"
source_page: 470
---

> [!TLDR]
> The main Gaussian, gamma, and beta identities provide a compact reference for statistical-mechanics calculations.

The formulas used most often are collected here.

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

## Stirling approximation

$$
\ln n!\approx n\ln n-n+\frac12\ln(2\pi n).
$$

## N-dimensional sphere and ball

$$
S_{N-1}=\frac{2\pi^{N/2}}{\Gamma(N/2)},
\qquad
V_N(R)=\frac{\pi^{N/2}}{\Gamma(N/2+1)}R^N.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $R$ | — | Ball radius | The radius in the coordinate space considered. |
| $S_{N-1}$ | $1$ | Unit-sphere area factor | The angular measure of the unit sphere in N dimensions. |
| $V_N(R)$ | — | N-dimensional volume | The enclosed measure, with units of radius to the power N. |
