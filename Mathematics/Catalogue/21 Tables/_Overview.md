---
title: "Tables: a learning and reference guide"
catalogue_ids:
  - "21"
---

> [!TLDR]
> A mathematical table is a compact set of results whose definitions, assumptions, and accuracy must travel with its entries.

## What this chapter teaches

A table saves calculation after you understand the calculation. It does not remove the need to choose the correct object. For example, the number 1.96 can be a normal quantile, an input to a function, or a rounded measurement. Its meaning comes from the column heading and the definition above the table. This chapter explains how to select, check, and use representative tables. It is a learning route as well as a reference.

Start with [[Numerical constants and rounding]]. Then read [[Physical constants and SI units]] if your calculation has units. The remaining articles form three routes: series and integration, special functions and transforms, and probability. You do not need to read the routes in a single sequence.

## Prerequisites from secondary education

You can begin with fractions, powers, equations, and graph coordinates. For these skills, use [[Powers and exponent rules]] and [[03.01 Function definitions]]. A function assigns one output to each permitted input. Its **domain** is the set of permitted inputs. A table of function values samples that domain; it does not define every intermediate value unless a rule is also supplied.

For calculus tables, first study [[07.03 The derivative]], [[08.02 Antiderivatives]], [[08.04 Substitution]], and [[08.05 Integration by parts]]. These explain the notation used in the integral lessons. For infinite sums, use [[09.02 Infinite series]] and [[09.07 Remainders and error]]. For Fourier tables, use [[16.01 Periodic functions]] and [[16.04 Fourier coefficients]]. Each lesson below recalls its essential definitions so that you can return to it after a break.

## Read a table in five steps

1. Read the definition. Is a transform based on an exponential with a plus sign or a minus sign? Is an elliptic-integral input a modulus or its square?
2. Check the domain. A denominator cannot vanish. A real square root needs a nonnegative argument. An improper integral needs a convergence test.
3. Match the complete expression. A factor from a change of variable belongs in the answer.
4. Record the precision. An exact expression such as $\sqrt2$ differs from its rounded decimal 1.4142.
5. Check the result independently. Differentiate an antiderivative, sum probabilities, or substitute a simple limiting value.

![[catalogue-ch21-integral-methods.svg|**Fig. C.ch21.1** The integrand structure suggests a first method; differentiation checks each candidate result.]]

The branches in Fig. C.ch21.1 are starting choices, not guarantees of an elementary answer. Some radicals lead to elliptic integrals, and some exponentials require named special functions.

## Worked example: two similar-looking rows

Suppose a table contains $\int e^{ax}\,dx=e^{ax}/a+C$ for $a\ne0$. To integrate $e^{3x+2}$, set $u=3x+2$. Then $du=3\,dx$, so

$$
\int e^{3x+2}\,dx=\frac13\int e^u\,du=\frac13e^{3x+2}+C.
$$

Differentiate the answer: the derivative is $(1/3)3e^{3x+2}=e^{3x+2}$. The factor $1/3$ is essential. If the task instead asks for $\int_0^1 e^{3x+2}\,dx$, evaluate the same antiderivative at the two endpoints to obtain $(e^5-e^2)/3$. The constant cancels. A table entry becomes a method only when its notation is interpreted.

## Interpolation and independent checks

Interpolation estimates values between rows. For a smooth function, a straight-line estimate between $x_0$ and $x_1$ is

$$
f(x)\approx f(x_0)+\frac{x-x_0}{x_1-x_0}[f(x_1)-f(x_0)].
$$

This is an approximation, not an identity. It can be poor near a singularity or a rapidly changing endpoint. Do not interpolate across a jump or pole. Numerical software also needs these checks: a calculator cannot know which convention you intended.

## Practice

1. A table gives $\ln2\approx0.693147$. Estimate $\ln8$ and explain why the answer is not exact.
2. A table gives $f(1)=2$ and $f(2)=5$. Use linear interpolation at 1.4. Does this determine the true value of an unspecified function?

> [!example]- Worked answers
> 1. Since $8=2^3$, $\ln8=3\ln2\approx2.079441$. The logarithm identity is exact, but the tabulated decimal is rounded.
> 2. The estimate is $2+0.4(5-2)=3.2$. Many curved functions pass through the two endpoints. The estimate is exact only with additional information, such as linearity on this interval.

<!-- catalogue-complete-lesson-index:start -->
## Complete lesson index

Read the prerequisite route above before the advanced lessons. The source topic links are in [[Planned Topics#21. Tables|the detailed catalogue]].

- [[Numerical constants and rounding|Numerical constants and rounding]] — 21.1.
- [[Physical constants and SI units|Physical constants, decimal prefixes, and SI units]] — 21.2, 21.3, 21.4.
- [[Series and Fourier tables|Power-series and Fourier-series tables]] — 21.5, 21.6.
- [[Rational integral tables|Rational integral tables and partial fractions]] — 21.7, 21.7.1, 21.7.1.1, 21.7.1.2, 21.7.1.3, 21.7.1.4, 21.7.1.5, 21.7.1.6, 21.7.1.7.
- [[Radical substitutions|Integral tables for radicals and binomial differentials]] — 21.7.2, 21.7.2.1, 21.7.2.2, 21.7.2.3, 21.7.2.4, 21.7.2.5, 21.7.2.6, 21.7.2.7, 21.7.2.8, 21.7.2.9, 21.7.2.10.
- [[Trigonometric integral tables|Trigonometric integral tables]] — 21.7.3, 21.7.3.1, 21.7.3.2, 21.7.3.3, 21.7.3.4, 21.7.3.5.
- [[Transcendental integral tables|Exponential, logarithmic, and hyperbolic integral tables]] — 21.7.4, 21.7.4.1, 21.7.4.2, 21.7.4.3, 21.7.4.4, 21.7.4.5.
- [[Definite integral tables|Definite integral tables and convergence]] — 21.8, 21.8.1, 21.8.2, 21.8.3, 21.8.4.
- [[Elliptic integral tables|Elliptic integral tables: modulus, amplitude, and complete values]] — 21.9, 21.9.1, 21.9.2, 21.9.3.
- [[Gamma function tables|Gamma function tables and factorials]] — 21.10.
- [[Bessel and Legendre tables|Bessel functions and Legendre polynomial tables]] — 21.11, 21.12.
- [[Laplace transform tables|Laplace transform tables and inverse calculations]] — 21.13.
- [[Fourier transform tables|Fourier, cosine, sine, and exponential transform tables]] — 21.14, 21.14.1, 21.14.2, 21.14.3, 21.14.4.
- [[Z-transform tables|Z-transform tables and convergence regions]] — 21.15.
- [[Poisson probability tables|Poisson probability tables]] — 21.16.
- [[Normal probability tables|Standard normal tables and quantiles]] — 21.17.
- [[Chi-squared F and Student tables|Chi-squared, F, and Student t quantile tables]] — 21.18, 21.19, 21.20.
- [[Random-number tables|Random-number tables and reproducible sampling]] — 21.21.
<!-- catalogue-complete-lesson-index:end -->
