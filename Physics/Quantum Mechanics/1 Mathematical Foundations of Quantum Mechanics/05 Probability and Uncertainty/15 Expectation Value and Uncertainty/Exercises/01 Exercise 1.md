---
title: "Energy statistics of a superposition"
---

> [!TLDR]
> Energy probabilities give constant energy moments, although the relative phase of the state changes with time.

Chapter 15: [[00 Expectation Value and Uncertainty|Expectation Value, Variance, and Quantum Uncertainty]] · Exercise 1 · **Basic level**

Back to [[15 Expectation Value and Uncertainty/08 Exercises|Chapter 15 exercises]].

## Question

Let

$$
|\psi\rangle=\frac12|1\rangle+\frac{\sqrt3}{2}|2\rangle,
\qquad
\hat H|n\rangle=n\mechanical{\hbar}\signal{\omega}|n\rangle.
$$

(a) Calculate $\langle\hat H\rangle$, $\langle\hat H^2\rangle$, and $\energy{\Delta H}$.

(b) Write the state $|\psi(\signal{t})\rangle$.

(c) Calculate $\langle\hat H\rangle(\signal{t})$. Does it depend on time?

## Worked solution

### (a) Energy moments and uncertainty

The states are orthonormal energy eigenstates. Thus the measurement probabilities are the squared moduli of the coefficients:

$$
P_1=\left|\frac12\right|^2=\frac14,
\qquad P_2=\left|\frac{\sqrt3}{2}\right|^2=\frac34,
\qquad P_1+P_2=1.
$$

For an observable that is diagonal in this basis, its expectation is the probability-weighted sum of its eigenvalues. The cross terms vanish because $\langle1|2\rangle=0$:

$$
\begin{aligned}
\langle\hat H\rangle
&=\frac14\mechanical{\hbar}\signal{\omega}
+\frac34(2\mechanical{\hbar}\signal{\omega})
=\frac74\mechanical{\hbar}\signal{\omega},\\
\langle\hat H^2\rangle
&=\frac14(\mechanical{\hbar}\signal{\omega})^2
+\frac34(2\mechanical{\hbar}\signal{\omega})^2
=\frac{13}{4}\mechanical{\hbar}^2\signal{\omega}^2.
\end{aligned}
$$

Use the variance to obtain the uncertainty. Do not subtract the unsquared mean from the second moment:

$$
\begin{aligned}
(\energy{\Delta H})^2
&=\langle\hat H^2\rangle-\langle\hat H\rangle^2\\
&=\left(\frac{13}{4}-\frac{49}{16}\right)
\mechanical{\hbar}^2\signal{\omega}^2
=\frac3{16}\mechanical{\hbar}^2\signal{\omega}^2.
\end{aligned}
$$

For the positive frequency scale $\signal{\omega}>0$, this gives $\energy{\Delta H}=\sqrt3\mechanical{\hbar}\signal{\omega}/4$. For a signed frequency parameter, its modulus is required in the uncertainty.

### (b) Time evolution

Each stationary energy component acquires its own phase $e^{-i\energy{E_n}\signal{t}/\mechanical{\hbar}}$. Therefore,

$$
|\psi(\signal{t})\rangle
=\frac12e^{-i\signal{\omega}\signal{t}}|1\rangle
+\frac{\sqrt3}{2}e^{-2i\signal{\omega}\signal{t}}|2\rangle.
$$

### (c) Time-dependent mean energy

The phases have modulus one. The probabilities of the energy outcomes remain $1/4$ and $3/4$. Explicitly,

$$
\langle\hat H\rangle(\signal{t})
=\frac14|e^{-i\signal{\omega}\signal{t}}|^2\mechanical{\hbar}\signal{\omega}
+\frac34|e^{-2i\signal{\omega}\signal{t}}|^2(2\mechanical{\hbar}\signal{\omega})
=\frac74\mechanical{\hbar}\signal{\omega}.
$$

Energy is conserved because the Hamiltonian has no explicit time dependence. The state has a changing relative phase, but this does not change its energy probabilities.

## Answer

For $\signal{\omega}>0$,

$$
\boxed{\langle\hat H\rangle=\frac74\mechanical{\hbar}\signal{\omega},\quad
\langle\hat H^2\rangle=\frac{13}{4}\mechanical{\hbar}^2\signal{\omega}^2,\quad
\energy{\Delta H}=\frac{\sqrt3}{4}\mechanical{\hbar}\signal{\omega}.}
$$

The evolved state is $|\psi(\signal{t})\rangle=\tfrac12e^{-i\signal{\omega}\signal{t}}|1\rangle+\tfrac{\sqrt3}{2}e^{-2i\signal{\omega}\signal{t}}|2\rangle$. Its mean energy is constant.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in state evolution. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The positive frequency scale of the spectrum. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed evolution time. |
| $\energy{E_n}$, $\langle\hat H\rangle$, $\energy{\Delta H}$ | $\unit{J}$ | Energy | An energy level, mean energy, and energy uncertainty. |
| $\langle\hat H^2\rangle$, $(\energy{\Delta H})^2$ | $\unit{J^2}$ | Energy second moment and variance | The second moment and squared energy spread. |
| $P_1$, $P_2$ | $\unit{1}$ | Probability | The probabilities of the two energy outcomes. |
