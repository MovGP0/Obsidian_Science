---
title: "Energy moments and measurement collapse"
---

> [!TLDR]
> Energy probabilities determine the first two moments and the normalized state after measurement.

Chapter 9 — Dirac Notation · Exercise 4 · Intermediate level

Back to [[09 Dirac Notation/10 Exercises#Exercise 4|Chapter 9 exercise index]].

## Question

Let

$$
|\psi\rangle=\frac12|1\rangle+\frac{\sqrt3}2|2\rangle,
\qquad
\hat H|n\rangle=n\mechanical{\hbar}\signal{\omega}|n\rangle.
$$

**(a)** Calculate $\langle\hat H\rangle$, $\langle\hat H^2\rangle$, and the energy uncertainty $\energy{\Delta H}$.

**(b)** What is the probability of obtaining $\mechanical{\hbar}\signal{\omega}$ in a measurement of $\hat H$? What is the probability of obtaining $2\mechanical{\hbar}\signal{\omega}$?

**(c)** After obtaining $2\mechanical{\hbar}\signal{\omega}$, what is the new state?

## Worked solution

### (a) Calculate the energy moments and uncertainty

The orthonormal energy basis makes cross terms vanish. The squared coefficients are $1/4$ and $3/4$, and their sum is $1$. Weight each eigenvalue by its probability:

$$
\begin{aligned}
\langle\hat H\rangle
&=\frac14(\mechanical{\hbar}\signal{\omega})+\frac34(2\mechanical{\hbar}\signal{\omega})\\
&=\left(\frac14+\frac64\right)\mechanical{\hbar}\signal{\omega}
=\frac74\mechanical{\hbar}\signal{\omega}.
\end{aligned}
$$

Applying the Hamiltonian twice squares the energy eigenvalue: $\hat H^2|n\rangle=n^2\mechanical{\hbar}^2\signal{\omega}^2|n\rangle$. Thus

$$
\begin{aligned}
\langle\hat H^2\rangle
&=\frac14(\mechanical{\hbar}\signal{\omega})^2+\frac34(2\mechanical{\hbar}\signal{\omega})^2\\
&=\left(\frac14+3\right)\mechanical{\hbar}^2\signal{\omega}^2
=\frac{13}4\mechanical{\hbar}^2\signal{\omega}^2.
\end{aligned}
$$

The energy uncertainty is the standard deviation, not the second moment itself:

$$
\begin{aligned}
(\energy{\Delta H})^2
&=\langle\hat H^2\rangle-\langle\hat H\rangle^2\\
&=\left(\frac{13}4-\frac{49}{16}\right)\mechanical{\hbar}^2\signal{\omega}^2
=\frac3{16}\mechanical{\hbar}^2\signal{\omega}^2,\\
\energy{\Delta H}&=\frac{\sqrt3}{4}|\mechanical{\hbar}\signal{\omega}|.
\end{aligned}
$$

For the usual positive angular frequency, this is $\energy{\Delta H}=\sqrt3\mechanical{\hbar}\signal{\omega}/4$. The absolute value keeps the uncertainty nonnegative if the frequency parameter is allowed to be negative.

### (b) Read the measurement probabilities

The Born rule gives

$$
P(\mechanical{\hbar}\signal{\omega})=|\langle1|\psi\rangle|^2=\left|\frac12\right|^2=\frac14,
\qquad
P(2\mechanical{\hbar}\signal{\omega})=|\langle2|\psi\rangle|^2=\left|\frac{\sqrt3}2\right|^2=\frac34.
$$

These are distinct energy outcomes when $\signal{\omega}\ne0$.

### (c) Normalize the selected component

For the nondegenerate result $2\mechanical{\hbar}\signal{\omega}$, the projector is $|2\rangle\langle2|$. The conditional state is

$$
|\psi'\rangle
=\frac{|2\rangle\langle2|\psi\rangle}{\sqrt{P(2\mechanical{\hbar}\signal{\omega})}}
=\frac{(\sqrt3/2)|2\rangle}{\sqrt{3/4}}
=|2\rangle.
$$

If $\signal{\omega}=0$, the two energy values coincide. An energy measurement alone then cannot distinguish the two basis states; its outcome is zero with probability $1$, and the ideal energy projection preserves the original state.

## Answer

(a) $\langle\hat H\rangle=7\mechanical{\hbar}\signal{\omega}/4$, $\langle\hat H^2\rangle=13\mechanical{\hbar}^2\signal{\omega}^2/4$, and $\energy{\Delta H}=\sqrt3|\mechanical{\hbar}\signal{\omega}|/4$. (b) The probabilities are $1/4$ and $3/4$. (c) For distinct energies the selected normalized state is $|2\rangle$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action constant in the energy eigenvalues. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The frequency parameter of the energy spectrum. |
| $\langle\hat H\rangle$ | $\unit{J}$ | Mean energy | The mean result of an energy measurement. |
| $\langle\hat H^2\rangle$ | $\unit{J^2}$ | Second energy moment | The mean squared energy result. |
| $\energy{\Delta H}$ | $\unit{J}$ | Energy uncertainty | The standard deviation of the energy results. |
| $P(\mechanical{\hbar}\signal{\omega})$, $P(2\mechanical{\hbar}\signal{\omega})$ | $1$ | Energy-outcome probability | The probability of either distinct energy result. |
