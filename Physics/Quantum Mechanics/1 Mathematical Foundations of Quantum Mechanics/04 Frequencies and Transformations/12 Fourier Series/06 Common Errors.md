---
title: "Common Errors"
---

> [!TLDR]
> Use the negative exponential in the coefficient integral, check parity first, and keep normalization factors consistent. Quantum box-state amplitudes use a normalized sine basis rather than the unnormalized complex exponentials.

## Error 1 — Use the wrong sign in the coefficient exponential

With the expansion $f(x)=\sum_n c_ne^{in\pi x/L}$, the coefficient integral uses $e^{-in\pi x/L}$:

$$
c_n=\frac1{2L}\int_{-L}^L f(x)e^{-in\pi x/L}\,dx.
$$

The minus sign comes from conjugating the basis function in the first argument of the inner product:

$$
\phi_n^*(x)=\frac1{\sqrt{2L}}e^{-in\pi x/L}.
$$

## Error 2 — Ignore symmetry

Calculating both $a_n$ and $b_n$ for an even or odd function doubles the work. Check parity before starting the integrals.

## Error 3 — Use the assigned value at a jump instead of the midpoint limit

At a jump $x_0$, the Fourier series converges to

$$
\frac{f(x_0^-)+f(x_0^+)}2,
$$

not necessarily to the assigned value $f(x_0)$. For the sign function, choosing $\operatorname{sgn}(0)=0$ agrees with the Fourier series, which is zero at $x=0$.

## Error 4 — Mix Parseval normalizations

For the complex coefficients used in this chapter,

$$
\frac1{2L}\int_{-L}^L|f(x)|^2\,dx=\sum_n|c_n|^2.
$$

For the real coefficients of a real-valued function,

$$
\frac1L\int_{-L}^L|f(x)|^2\,dx
=\frac{a_0^2}2+\sum_{n=1}^{\infty}(a_n^2+b_n^2).
$$

The factors depend on the expansion convention.

## Quantum mechanics — Fourier series as an energy expansion

For a particle in the box $[0,\mechanical{L}]$, the normalized sine functions

$$
\phi_n(\mechanical{x})=\sqrt{\frac2{\mechanical{L}}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),
\qquad n=1,2,3,\ldots,
$$

are eigenstates of

$$
\hat H=-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}\partial_{\mechanical{x}}^2,
\qquad\signal{\psi}(0)=\signal{\psi}(\mechanical{L})=0.
$$

The initial-state expansion is

$$
\signal{\psi}(\mechanical{x},0)=\sum_{n=1}^{\infty}c_n\phi_n(\mechanical{x}),
\qquad c_n=\langle\phi_n|\psi(0)\rangle.
$$

Here $c_n$ is a **probability amplitude**. For a normalized initial state, $|c_n|^2$ is the probability of measuring

$$
\energy{E_n}=\frac{n^2\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}.
$$

Time evolution gives

$$
\signal{\psi}(\mechanical{x},\signal{t})
=\sum_{n=1}^{\infty}c_n\phi_n(\mechanical{x})
e^{-i\energy{E_n}\signal{t}/\mechanical{\hbar}}.
$$

> [!note]
> The source reuses $c_n$ here for coefficients in a **normalized sine basis**. These box amplitudes are not the coefficients of the earlier unnormalized complex exponentials. For the latter, the normalized-basis coefficient is $d_n=\sqrt{2L}\,c_n$.

Each mode has its own time frequency, as for a vibrating string. The spatial modes and fixed-end boundary conditions are the same. The temporal laws differ:

$$
\signal{\omega_n}\propto n\quad\text{for the ideal string},
\qquad
\signal{\omega_n}=\frac{\energy{E_n}}{\mechanical{\hbar}}\propto n^2
\quad\text{for the quantum particle}.
$$

Both systems use the same second spatial derivative with the same boundary conditions, but their time-evolution equations differ.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate inside the box. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The distance between the confining boundaries. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the spectrum and evolution. |
| $\signal{\psi}$, $\phi_n$ | $\unit{m^{-1/2}}$ | Wavefunction | The state and normalized one-dimensional box modes. |
| $c_n$ | $1$ | Box-state amplitude | The quantum coefficient in the normalized sine basis. |
| $\energy{E_n}$ | $\unit{J}$ | Energy | The box energy eigenvalue. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed time in the state evolution. |
| $\signal{\omega_n}$ | $\unit{s^{-1}}$ | Mode angular frequency | The temporal frequency of the specified string or quantum mode. |
