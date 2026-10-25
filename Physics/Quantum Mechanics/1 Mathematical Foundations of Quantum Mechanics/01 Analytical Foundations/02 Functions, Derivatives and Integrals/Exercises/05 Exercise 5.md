---
title: "An exponential cusp and the energy operator domain"
---

> [!TLDR]
> The exponential cusp has finite position moments and finite kinetic-energy form, but its delta term prevents an energy eigenstate for a regular potential.

Chapter 2: Functions, Derivatives and Integrals · Exercise 5 · Intermediate level.

Back to [[02 Functions, Derivatives and Integrals/08 Exercises#Exercise 5|Chapter 2 exercise index]].

## Question

Consider the function

$$
\signal{\psi}(\mechanical{x})
=\signal{A}\mathrm{e}^{-|\mechanical{x}|/\mechanical{a}},
$$

which is not differentiable at $\mechanical{x}=0$.

**(a)** Find $\signal{A}$ from normalization.

**(b)** Calculate $\langle\hat x\rangle$, $\langle\hat x^2\rangle$, and $\mechanical{\Delta x}$.

**(c)** Why is this function unsuitable as a candidate eigenfunction of the energy operator, which contains $\mathrm{d}^2/\mathrm{d}\mechanical{x}^2$?

> [!note]
> For this exercise, use a positive decay length $\mechanical{a}>0$. The question about the energy operator concerns the usual regular-potential setting. Operator domains and singular interactions require separate treatment.

## Worked solution

All integrals are over $\mathbb R$.

### (a) Normalize using the even density

The density has equal contributions from both half-lines. Thus,

$$
\begin{aligned}
1&=\lvert\signal{A}\rvert^2\int_{\mathbb R}\mathrm{e}^{-2\lvert\mechanical{x}\rvert/\mechanical{a}}\,\mathrm{d}\mechanical{x}\\
&=2\lvert\signal{A}\rvert^2\int_0^\infty\mathrm{e}^{-2\mechanical{x}/\mechanical{a}}\,\mathrm{d}\mechanical{x}\\
&=2\lvert\signal{A}\rvert^2\frac{\mechanical{a}}2
=\lvert\signal{A}\rvert^2\mechanical{a}.
\end{aligned}
$$

Hence $\lvert\signal{A}\rvert=1/\sqrt{\mechanical{a}}$. Normalization leaves a constant phase arbitrary. Choose the positive representative $\signal{A}=1/\sqrt{\mechanical{a}}$.

### (b) Calculate the moments and uncertainty

The first-moment integrand is odd, so $\langle\hat x\rangle=0$. The second-moment integrand is even:

$$
\langle\hat x^2\rangle
=\frac2{\mechanical{a}}\int_0^\infty\mechanical{x}^2\mathrm{e}^{-2\mechanical{x}/\mechanical{a}}\,\mathrm{d}\mechanical{x}.
$$

Set $u=2\mechanical{x}/\mechanical{a}$. Then $\mechanical{x}^2\mathrm{d}\mechanical{x}=(\mechanical{a}^3/8)u^2\mathrm{d}u$. Two integrations by parts give

$$
\begin{aligned}
\int_0^\infty u^2\mathrm{e}^{-u}\,\mathrm{d}u
&=\left[-u^2\mathrm{e}^{-u}\right]_0^\infty
+2\int_0^\infty u\mathrm{e}^{-u}\,\mathrm{d}u\\
&=2\left(\left[-u\mathrm{e}^{-u}\right]_0^\infty
+\int_0^\infty\mathrm{e}^{-u}\,\mathrm{d}u\right)=2.
\end{aligned}
$$

Consequently,

$$
\langle\hat x^2\rangle
=\frac2{\mechanical{a}}\frac{\mechanical{a}^3}{8}\,2
=\frac{\mechanical{a}^2}{2},
\qquad
\mechanical{\Delta x}=\sqrt{\frac{\mechanical{a}^2}{2}-0}
=\frac{\mechanical{a}}{\sqrt2}.
$$

### (c) Inspect the derivative at the cusp

On each open half-line,

$$
\signal{\psi}'(\mechanical{x})=
\begin{cases}
\signal{\psi}(\mechanical{x})/\mechanical{a},&\mechanical{x}<0,\\
-\signal{\psi}(\mechanical{x})/\mechanical{a},&\mechanical{x}>0.
\end{cases}
$$

The derivative jumps by $-2\signal{A}/\mechanical{a}$ at zero. The distributional derivative of a function with a jump includes a delta distribution with that jump as its coefficient. Therefore,

$$
\signal{\psi}''
=\frac{\signal{\psi}}{\mechanical{a}^2}
-\frac{2\signal{A}}{\mechanical{a}}\delta(\mechanical{x}).
$$

For a particle of mass $\mechanical{m}>0$, the usual Hamiltonian has the form

$$
\hat H=-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}
\frac{\mathrm{d}^2}{\mathrm{d}\mechanical{x}^2}+\energy{V}(\mechanical{x}).
$$

Its action would contain

$$
\hat H\signal{\psi}
=\left[-\frac{\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{a}^2}
+\energy{V}(\mechanical{x})\right]\signal{\psi}
+\frac{\mechanical{\hbar}^2\signal{A}}{\mechanical{m}\mechanical{a}}\delta(\mechanical{x}).
$$

A regular potential cannot cancel this delta term. The result is not an ordinary square-integrable function proportional to $\signal{\psi}$. Thus the state does not belong to the usual second-derivative operator domain and cannot be an energy eigenfunction in this setting. A suitable singular delta potential can cancel the term, but that is a different Hamiltonian with different domain conditions.

> [!note] Source correction — Cusp and kinetic energy
> A cusp does not by itself make the kinetic-energy form infinite. Here the weak first derivative is square-integrable, and the normalized state gives
>
> $$
> \energy{T}_{\mathrm{form}}
> =\frac{\mechanical{\hbar}^2}{2\mechanical{m}}
> \int_{\mathbb R}\lvert\signal{\psi}'\rvert^2\,\mathrm{d}\mechanical{x}
> =\frac{\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{a}^2}
> \int_{\mathbb R}\lvert\signal{\psi}\rvert^2\,\mathrm{d}\mechanical{x}
> =\frac{\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{a}^2}<\infty.
> $$
>
> This finite quadratic-form value is distinct from membership in the kinetic-energy operator domain. The second derivative has a delta term, so it is not in $L^2(\mathbb R)$. Omitting that term would give an incorrect operator calculation.

## Answer

**(a)** $\lvert\signal{A}\rvert=1/\sqrt{\mechanical{a}}$; choose $\signal{A}=1/\sqrt{\mechanical{a}}$.

**(b)** $\langle\hat x\rangle=0$, $\langle\hat x^2\rangle=\mechanical{a}^2/2$, and $\mechanical{\Delta x}=\mechanical{a}/\sqrt2$.

**(c)** The cusp produces a delta term in the second derivative. It excludes the state from the usual regular-potential energy operator domain, although its kinetic-energy form is finite.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate on the whole line. |
| $\mechanical{a}$ | $\unit{m}$ | Decay length | The positive length of exponential decay. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized exponential state. |
| $\signal{A}$ | $\unit{m^{-1/2}}$ | Normalization amplitude | The constant prefactor of the state. |
| $\lvert\signal{\psi}\rvert^2$ | $\unit{m^{-1}}$ | Probability density | The position probability per unit length. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The position expectation value. |
| $\langle\hat x^2\rangle$ | $\unit{m^2}$ | Second position moment | The expectation value of squared position. |
| $\mechanical{\Delta x}$ | $\unit{m}$ | Position uncertainty | The standard deviation of position. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The positive mass in the kinetic-energy term. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the kinetic-energy term. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The regular potential energy of the Hamiltonian. |
| $\energy{T}_{\mathrm{form}}$ | $\unit{J}$ | Kinetic-energy form | The finite integral of the squared first derivative with its physical prefactor. |
