---
title: "Expectation Value of an Observable"
---

> [!TLDR]
> The expectation value is the state-weighted mean of an observable’s possible outcomes. The same value follows from its spectral probabilities or directly from its operator matrix elements.

> [!definition] Definition 15.1 | Expectation value
> For a system in a normalized state $|\psi\rangle$ and an observable $\hat A$,
>
> $$
> \boxed{\langle\hat A\rangle=\langle\psi|\hat A|\psi\rangle.}
> $$
>
> In the position representation,
>
> $$
> \langle\hat A\rangle
> =\int_{-\infty}^{+\infty}\signal{\psi}^*(\mechanical{x})
> \hat A\signal{\psi}(\mechanical{x})\,d\mechanical{x}.
> $$

With the spectral decomposition $\hat A=\sum_n a_n|a_n\rangle\langle a_n|$,

$$
\langle\hat A\rangle
=\sum_n a_n\langle\psi|a_n\rangle\langle a_n|\psi\rangle
=\sum_n a_n|c_n|^2,
\qquad c_n=\langle a_n|\psi\rangle.
$$

The expectation is the mean of the eigenvalues weighted by their measurement probabilities.

These sums use a complete discrete orthonormal eigenbasis. Degenerate outcome probabilities add over the corresponding eigenspace; continuous spectral parts require integrals. The relevant expectations must exist.

## Example — Mean energy of a superposition

Let

$$
|\psi\rangle=\frac1{\sqrt5}|1\rangle+\frac2{\sqrt5}|2\rangle,
\qquad\energy{E_n}=n\mechanical{\hbar}\signal{\omega}.
$$

The amplitudes are $c_1=1/\sqrt5$ and $c_2=2/\sqrt5$, with probabilities $1/5$ and $4/5$. Therefore,

$$
\langle\hat H\rangle
=\mechanical{\hbar}\signal{\omega}\frac15
+2\mechanical{\hbar}\signal{\omega}\frac45
=\mechanical{\hbar}\signal{\omega}\frac{1+8}5
=\frac95\mechanical{\hbar}\signal{\omega}.
$$

**Verify by expanding the operator expression:**

$$
\begin{aligned}
\langle\psi|\hat H|\psi\rangle
=&\frac15\langle1|\hat H|1\rangle
+\frac45\langle2|\hat H|2\rangle\\
&+\frac25\langle1|\hat H|2\rangle
+\frac25\langle2|\hat H|1\rangle.
\end{aligned}
$$

The cross terms vanish because the energy eigenstates are orthogonal:

$$
\langle1|\hat H|2\rangle=\energy{E_2}\langle1|2\rangle=0,
$$

and similarly for its conjugate. The remaining terms give

$$
\frac15\energy{E_1}+\frac45\energy{E_2}
=\frac95\mechanical{\hbar}\signal{\omega}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle\hat A\rangle$ | — | Observable mean | The mean measurement result, with the unit of the observable. |
| $a_n$ | — | Measurement outcome | An eigenvalue with the unit of the observable. |
| $c_n$, $c_1$, $c_2$ | $1$ | Probability amplitude | A coefficient in the normalized eigenbasis. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate in the position representation. |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The one-dimensional position probability amplitude. |
| $\energy{E_n}$, $\energy{E_1}$, $\energy{E_2}$, $\langle\hat H\rangle$ | $\unit{J}$ | Energy | The energy eigenvalues and their mean. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the energy spectrum. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The frequency parameter setting the energy spacing. |
