---
title: "Normalization and the second energy level"
---

> [!TLDR]
> Three equal amplitudes give a normalized state and a probability of one third for the second energy level.

Chapter 8 — Hilbert Space · Exercise 3 · Basic level

Back to [[08 Hilbert Space/09 Exercises|Chapter 8 exercises]].

## Question

Is the state

$$
|\psi\rangle=\frac1{\sqrt3}|1\rangle+\frac1{\sqrt3}|2\rangle+\frac1{\sqrt3}|3\rangle
$$

normalized? Calculate the probability of measuring the system in the second energy level.

## Worked solution

Assume that the energy-level kets form an orthonormal set:

$$
\langle m|n\rangle=\delta_{mn}.
$$

Write the state as $|\psi\rangle=\sum_{n=1}^3c_n|n\rangle$, with $c_n=1/\sqrt3$. The bra contains the complex conjugates of the coefficients. Thus

$$
\begin{aligned}
\langle\psi|\psi\rangle
&=\sum_{m=1}^3\sum_{n=1}^3c_m^*c_n\langle m|n\rangle\\
&=\sum_{n=1}^3|c_n|^2
=3\left|\frac1{\sqrt3}\right|^2=1.
\end{aligned}
$$

Orthogonality removes all cross terms. A state with squared norm one is normalized.

Project onto the second basis state to get its amplitude:

$$
\langle2|\psi\rangle
=\frac1{\sqrt3}\langle2|1\rangle
+\frac1{\sqrt3}\langle2|2\rangle
+\frac1{\sqrt3}\langle2|3\rangle
=\frac1{\sqrt3}.
$$

The Born rule uses the squared magnitude of this amplitude:

$$
P_2=|\langle2|\psi\rangle|^2=\frac13.
$$

The three outcomes have equal probabilities, and their sum is one. The level labels $1$, $2$, and $3$ are indices, not numerical energy values.

## Answer

The state is normalized because $\langle\psi|\psi\rangle=1$. The probability of the second energy level is $P_2=1/3$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\vert\psi\rangle$ | $1$ | State vector | The normalized state in the energy basis. |
| $c_n$ | $1$ | Probability amplitude | The coefficient of energy basis state $n$. |
| $P_2$ | $1$ | Probability | The probability of the second energy level. |
