---
title: "Fourier, cosine, sine, and exponential transform tables"
catalogue_ids:
  - "21.14"
  - "21.14.1"
  - "21.14.2"
  - "21.14.3"
  - "21.14.4"
---

> [!TLDR]
> Fourier tables use different signs and scale factors; choose a definition first, then connect cosine and sine transforms to the complex exponential transform through parity.

## Fourier transforms and prerequisites

For periodic functions, [[Series and Fourier tables]] gives discrete harmonic coefficients. A Fourier **transform** describes nonperiodic functions by a continuous parameter. Review [[16.10 The nonperiodic extension]], [[06.05 Euler’s formula]], and [[08.07 Improper integrals]]. For an absolutely integrable real or complex function $f$ on the real line, define

$$
\widehat f(\omega)=\int_{-\infty}^{\infty}f(x)e^{-i\omega x}\,dx.
$$

The parameter $\omega$ is a dimensionless mathematical variable here. Our inverse convention is

$$
f(x)=\frac1{2\pi}\int_{-\infty}^{\infty}\widehat f(\omega)e^{i\omega x}\,d\omega
$$

where inversion is valid, for example for a continuous $f$ with both $f$ and $\widehat f$ absolutely integrable. Broader inversion theorems require additional hypotheses. At a jump, a suitable symmetric inversion gives the average of the two side limits. Some tables distribute the scale factor as $1/\sqrt{2\pi}$ on both transforms. DLMF uses its own explicitly stated normalization; compare definitions before transferring rows. [NIST DLMF §1.14](https://dlmf.nist.gov/1.14)

## Fourier cosine transforms

For $f$ defined on $[0,\infty)$, use the unnormalized cosine transform

$$
C(\omega)=\int_0^\infty f(x)\cos(\omega x)\,dx.
$$

Its inverse has factor $2/\pi$: $f(x)=(2/\pi)\int_0^\infty C(\omega)\cos(\omega x)\,d\omega$ under suitable inversion conditions. The cosine transform corresponds to extending $f$ evenly, so the whole-line transform of $f(|x|)$ is $2C(\omega)$. This factor two comes from two equal halves of the real line.

For $a>0$, integration of an exponential times a cosine gives $C\{e^{-ax}\}(\omega)=a/(a^2+\omega^2)$. At $\omega=0$, it reduces to $\int_0^\infty e^{-ax}dx=1/a$, a quick normalization check. A normalized cosine transform often includes $\sqrt{2/\pi}$ in its forward definition; it is a different numerical table.

## Fourier sine transforms

Use

$$
S(\omega)=\int_0^\infty f(x)\sin(\omega x)\,dx,
$$

with inverse factor $2/\pi$ under suitable conditions. The odd extension to the real line has whole-line transform $-2iS(\omega)$. To derive the sign, use $e^{-i\omega x}=\cos\omega x-i\sin\omega x$. For an odd real function, the cosine part integrates to zero, while the sine part is even.

For $a>0$, $S\{e^{-ax}\}(\omega)=\omega/(a^2+\omega^2)$. It vanishes at $\omega=0$, as every sine transform must when the defining integral can be evaluated there. This row differs from the cosine row in its numerator. Symmetry explains that difference more reliably than memory.

## Whole-line Fourier table

| $f(x)$ | $\widehat f(\omega)$ | Conditions |
| --- | --- | --- |
| $e^{-a\lvert x\rvert }$ | $2a/(a^2+\omega^2)$ | $a>0$ |
| $1$ on $[-a,a]$, $0$ elsewhere | $2\sin(a\omega)/\omega$ | $a>0$; value $2a$ at $\omega=0$ by a limit |
| $e^{-ax^2}$ | $\sqrt{\pi/a}\,e^{-\omega^2/(4a)}$ | $a>0$ |
| $e^{-ax}$ on $x\ge0$, $0$ on $x<0$ | $1/(a+i\omega)$ | $a>0$ |

All functions in the table are integrable. A nonzero constant on the entire line is not integrable, so its transform is not an ordinary function defined by this integral. A distributional table would use a Dirac delta and requires a separate theory.

To check the rectangle row, integrate directly from $-a$ to $a$. Oddness cancels the sine part, and the cosine part gives $2\sin(a\omega)/\omega$. At zero, direct integration gives interval width $2a$, agreeing with the limit. For the Gaussian, the transform can be derived by a differential equation in $\omega$: differentiate under the integral, integrate $xf(x)$ by parts, and obtain $\widehat f'=-(\omega/2a)\widehat f$. Its initial value is the Gaussian integral $\sqrt{\pi/a}$.

## Exponential Fourier form and a second frequency convention

The term **exponential Fourier transform** refers here to the complex exponential kernel, rather than a separate transform of exponential functions. Cosine and sine parts are combined through Euler's identity. Another frequent convention uses

$$
\widetilde f(\nu)=\int_{-\infty}^{\infty}f(x)e^{-2\pi i\nu x}dx,
\qquad
f(x)=\int_{-\infty}^{\infty}\widetilde f(\nu)e^{2\pi i\nu x}d\nu.
$$

Then $\widetilde f(\nu)=\widehat f(2\pi\nu)$. The inverse loses its $1/(2\pi)$ factor because $d\omega=2\pi\,d\nu$. Tables that call both variables frequency can hide this distinction. A change of kernel requires a change of scale in the transform argument, not just a renamed letter.

## Worked example: shift and scale a rectangle

Let $f(x)=1$ for $|x-3|<2$ and zero elsewhere. Put $u=x-3$. Then

$$
\widehat f(\omega)=e^{-3i\omega}\int_{-2}^{2}e^{-i\omega u}du
=e^{-3i\omega}\frac{2\sin(2\omega)}{\omega}.
$$

The value at zero is 4. Translation changes the complex phase but leaves the magnitude unchanged. In the $\nu$ convention, replace every $\omega$ by $2\pi\nu$, giving $e^{-6\pi i\nu}\sin(4\pi\nu)/(\pi\nu)$. This example checks the phase sign, interval width, and scale factor at once.

## Practice

1. Find the cosine and sine transforms of $e^{-2x}$ on the positive half-line. Determine the whole-line transform of its even extension.
2. Find the transform of a rectangle equal to 3 on $[-1,1]$ and zero elsewhere. Check its zero-parameter value.

> [!example]- Worked answers
> 1. The half-line transforms are $2/(4+\omega^2)$ and $\omega/(4+\omega^2)$. The even extension is $e^{-2|x|}$ and has transform $4/(4+\omega^2)$.
> 2. Linearity gives $6\sin\omega/\omega$. At zero its limit is 6, the integral of a height-3 rectangle of width 2.
