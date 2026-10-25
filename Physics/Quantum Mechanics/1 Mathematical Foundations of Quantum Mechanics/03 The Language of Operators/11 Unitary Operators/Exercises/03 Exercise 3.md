---
title: "Energy phases and stationary probabilities"
---

> [!TLDR]
> Energy eigenstates acquire phases, while their probabilities and the mean energy stay constant.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 3. Difficulty: **Basic level**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 3|Chapter 11 exercise index]].

## Question

At $\signal{t}=0$, let

$$
|\psi(0)\rangle=\frac{\sqrt3}2|1\rangle+\frac12|2\rangle,
\qquad\energy{E_n}=n\mechanical{\hbar}\signal{\omega}.
$$

**(a)** Write $|\psi(\signal{t})\rangle$.

**(b)** Calculate $\langle\hat H\rangle(\signal{t})$. Does it depend on time?

**(c)** Calculate $P(\energy{E_1},\signal{t})$ and $P(\energy{E_2},\signal{t})$. Do they depend on time?

## Worked solution

### (a) Evolving state

The Hamiltonian is time independent and the basis states satisfy $\hat H|n\rangle=\energy{E_n}|n\rangle$. Each component therefore evolves by its own energy phase:

$$
\hat U(\signal{t})|n\rangle=e^{-i\energy{E_n}\signal{t}/\mechanical{\hbar}}|n\rangle.
$$

Insert the two stated energies:

$$
|\psi(\signal{t})\rangle
=\frac{\sqrt3}{2}e^{-i\signal{\omega}\signal{t}}|1\rangle
+\frac12e^{-2i\signal{\omega}\signal{t}}|2\rangle.
$$

The squared amplitudes sum to $3/4+1/4=1$. Thus the time evolution preserves normalization.

### (b) Mean energy

Expand the expectation value. Orthonormality makes the cross terms zero, since $\langle1|\hat H|2\rangle=\energy{E_2}\langle1|2\rangle=0$. The phases cancel in each diagonal term:

$$
\begin{aligned}
\langle\hat H\rangle(\signal{t})
&=\frac34\energy{E_1}+\frac14\energy{E_2}\\
&=\frac34\mechanical{\hbar}\signal{\omega}
+\frac14(2\mechanical{\hbar}\signal{\omega})
=\frac54\mechanical{\hbar}\signal{\omega}.
\end{aligned}
$$

There is no time dependence because the Hamiltonian changes only the phases of its own eigenstate amplitudes.

### (c) Energy probabilities

The Born rule gives the squared magnitude of each energy amplitude:

$$
\begin{aligned}
P(\energy{E_1},\signal{t})&=|\langle1|\psi(\signal{t})\rangle|^2
=\left|\frac{\sqrt3}{2}e^{-i\signal{\omega}\signal{t}}\right|^2=\frac34,\\
P(\energy{E_2},\signal{t})&=|\langle2|\psi(\signal{t})\rangle|^2
=\left|\frac12e^{-2i\signal{\omega}\signal{t}}\right|^2=\frac14.
\end{aligned}
$$

Both probabilities stay constant. The relative phase still changes, so the mean of another observable that couples the two levels can depend on time.

## Answer

**(a)** $|\psi(\signal{t})\rangle=\frac{\sqrt3}{2}e^{-i\signal{\omega}\signal{t}}|1\rangle+\frac12e^{-2i\signal{\omega}\signal{t}}|2\rangle$.

**(b)** $\langle\hat H\rangle=5\mechanical{\hbar}\signal{\omega}/4$ is constant.

**(c)** $P(\energy{E_1},\signal{t})=3/4$ and $P(\energy{E_2},\signal{t})=1/4$ are constant.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed evolution time. |
| $\energy{E_n}$, $\energy{E_1}$, $\energy{E_2}$ | $\unit{J}$ | Energy | The energy eigenvalues of the occupied levels. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the energy phases. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The spacing parameter of the energy spectrum. |
| $\energy{\langle\hat H\rangle}$ | $\unit{J}$ | Mean energy | The energy averaged over measurements of this state. |
| $P(\energy{E_1},\signal{t})$, $P(\energy{E_2},\signal{t})$ | $1$ | Energy probability | The probability of each stated energy result. |
