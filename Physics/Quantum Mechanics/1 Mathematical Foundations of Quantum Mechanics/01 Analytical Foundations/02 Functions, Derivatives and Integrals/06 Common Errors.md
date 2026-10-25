---
title: "Common Errors"
---

> [!TLDR]
> Keep integration variables, conjugation conventions, operator notation, and regularity conditions explicit. These details are essential for quantum expectation values.

## Error 1 — Omit dx from an integral

The expression $\int f$ has no meaning as written. Integration must specify a variable, as in $\int f(x)\,\mathrm{d}x$. Omission of $\mathrm{d}x$ can be tolerated in informal discussion, but it is an error in a written calculation.

## Error 2 — Differentiate under the integral sign without a check

The formula

$$
\frac{\mathrm{d}}{\mathrm{d}a}\int f(x,a)\,\mathrm{d}x
=\int\frac{\partial f}{\partial a}\,\mathrm{d}x
$$

is a form of Leibniz's rule. It requires regularity conditions, which are often satisfied in quantum mechanics. We used it freely in [[03 Definite Integrals|equation (2.1)]] because the Gaussian function is regular in every relevant respect. For discontinuous or singular functions, you must check the conditions.

## Error 3 — Change which argument is conjugated in the inner product

The convention in this book is

$$
\langle f,g\rangle=\int f^*g\,\mathrm{d}x,
$$

not $\int fg^*\,\mathrm{d}x$. The conjugate belongs to the **first** factor. The source states that a change of side destroys Hermitian symmetry, $\langle f,g\rangle\ne\langle g,f\rangle^*$, and makes the formalism fail.

> [!note]
> A consistent choice of the opposite convention also gives a valid Hermitian inner product. It changes which argument is linear. The error is to mix conventions within a calculation. The source's claim about loss of Hermitian symmetry is incorrect if it is read as a claim about the opposite convention itself. See [[05 The Inner Product as an Integral|the convention note]].

## Error 4 — Confuse ⟨Â⟩ with ⟨A⟩

In quantum mechanics, $\langle\hat A\rangle$ denotes the expectation value of the operator $\hat A$. The hat is part of the notation, not decoration. If you write $\langle A\rangle$, it is unclear whether $A$ is an operator or a number. This book always uses the hat.

## Error 5 — Assume partial derivatives always commute

For sufficiently regular functions, Schwarz's theorem gives

$$
\frac{\partial^2f}{\partial x\partial t}
=\frac{\partial^2f}{\partial t\partial x}.
$$

All functions used in this course are sufficiently regular. But this equality is not automatic for every function.

> [!info] Quantum mechanics — The expectation value
> In a normalized state $\signal{\psi}(\mechanical{x})$, with $\int|\signal{\psi}|^2\,\mathrm{d}\mechanical{x}=1$, the expectation value of the observable $\hat A$ is
>
> $$
> \langle\hat A\rangle
> =\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})\,
> \hat A\signal{\psi}(\mechanical{x})\,\mathrm{d}\mechanical{x}.
> $$
>
> The position operator $\hat x$ acts by multiplication by $\mechanical{x}$. Thus,
>
> $$
> \langle\hat x\rangle
> =\int_{-\infty}^{+\infty}\mechanical{x}|\signal{\psi}(\mechanical{x})|^2\,\mathrm{d}\mechanical{x}.
> $$
>
> This is the expectation value of position with respect to the probability distribution $|\signal{\psi}|^2$. It connects the formalism with probability.
>
> For the momentum operator $\hat p=-\mathrm{i}\energy{\hbar}\,\mathrm{d}/\mathrm{d}\mechanical{x}$,
>
> $$
> \langle\hat p\rangle
> =\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})
> \left(-\mathrm{i}\energy{\hbar}\frac{\partial\signal{\psi}}{\partial\mechanical{x}}\right)\mathrm{d}\mechanical{x}.
> $$
>
> This integral is real because $\hat p$ is Hermitian, but that is not immediately clear from the expression. Use integration by parts to show it.
>
> The **Ehrenfest equations** have Newtonian form:
>
> $$
> \frac{\mathrm{d}\langle\hat x\rangle}{\mathrm{d}\signal{t}}
> =\frac{\langle\hat p\rangle}{\mechanical{m}},
> \qquad
> \frac{\mathrm{d}\langle\hat p\rangle}{\mathrm{d}\signal{t}}
> =-\left\langle\frac{\mathrm{d}\energy{V}}{\mathrm{d}\mechanical{x}}\right\rangle.
> $$
>
> The mean force $-\langle\energy{V}'(\hat x)\rangle$ appears in place of the force at the mean position, $-\energy{V}'(\langle\hat x\rangle)$. Both displayed equations are exact identities. They agree with Newton's equations for $\langle\hat x\rangle$ only when $\langle\energy{V}'(\hat x)\rangle\approx\energy{V}'(\langle\hat x\rangle)$. This holds, for example, for potentials that are at most quadratic, or approximately for narrow wave packets.

> [!note]
> The claims about real momentum expectation values require the regularity, boundary, and operator-domain conditions discussed in [[04 Integration by Parts]]. A normalized state must also lie in a suitable domain for the stated expectation value to exist.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}(\mechanical{x})$ | $\unit{m^{-1/2}}$ | Wavefunction | The normalized state in one-dimensional position space. |
| $\lvert\signal{\psi}\rvert^2$ | $\unit{m^{-1}}$ | Probability density | The position probability per unit length. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the expectation-value integrals. |
| $\langle\hat x\rangle$ | $\unit{m}$ | Mean position | The expectation value of the position operator. |
| $\langle\hat p\rangle$ | $\unit{kg\,m\,s^{-1}}$ | Mean momentum | The expectation value of the momentum operator. |
| $\langle\hat A\rangle$ | — | Observable expectation value | The mean value of a general observable. Its unit depends on that observable. |
| $\signal{t}$ | $\unit{s}$ | Time | The time variable in the Ehrenfest equations. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass in the mean-velocity relation. |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the momentum operator. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | The potential whose derivative gives the force. |
| $-\langle\energy{V}'(\hat x)\rangle$ | $\unit{N}$ | Mean force | The force expectation value in the Ehrenfest equation. |
| $-\energy{V}'(\langle\hat x\rangle)$ | $\unit{N}$ | Force at the mean position | The force evaluated at the position expectation value. |
