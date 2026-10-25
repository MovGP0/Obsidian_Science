---
title: "Schrödinger’s cat: coherence and measurement"
---

> [!TLDR]
> A coherent two-state superposition gives distinct measurement outcomes and retains phase information.

Chapter 9 — Dirac Notation · Exercise 7 · Challenge

Back to [[09 Dirac Notation/10 Exercises#Exercise 7|Chapter 9 exercise index]].

## Question

A quantum system is in the superposition

$$
|\psi\rangle=\frac1{\sqrt2}(|\mathrm{alive}\rangle+|\mathrm{dead}\rangle).
$$

Treat $|\mathrm{alive}\rangle$ and $|\mathrm{dead}\rangle$ as orthonormal states of this two-state model.

**(a)** Calculate $P(\mathrm{alive})$ and $P(\mathrm{dead})$.

**(b)** What is the expectation value of

$$
\hat O=|\mathrm{alive}\rangle\langle\mathrm{alive}|
-|\mathrm{dead}\rangle\langle\mathrm{dead}|?
$$

**(c)** After a measurement finds the cat alive, what is the state? What is the probability that an immediate second measurement finds it dead?

**(d)** Why does $|\psi\rangle$ not mean that the cat is “half alive and half dead”?

## Worked solution

### (a) Calculate the two probabilities

Orthonormality gives

$$
\langle\mathrm{alive}|\psi\rangle=\frac{1+0}{\sqrt2}=\frac1{\sqrt2},
\qquad
\langle\mathrm{dead}|\psi\rangle=\frac{0+1}{\sqrt2}=\frac1{\sqrt2}.
$$

The Born rule then gives $P(\mathrm{alive})=P(\mathrm{dead})=1/2$.

### (b) Calculate the observable expectation

The two states are eigenstates of $\hat O$ with eigenvalues $+1$ and $-1$. Thus

$$
\hat O|\psi\rangle
=\frac{|\mathrm{alive}\rangle-|\mathrm{dead}\rangle}{\sqrt2},
$$

and

$$
\langle\hat O\rangle
=\frac12(\langle\mathrm{alive}|+\langle\mathrm{dead}|)(|\mathrm{alive}\rangle-|\mathrm{dead}\rangle)
=\frac12(1-0+0-1)=0.
$$

Zero is an ensemble mean. It is not an eigenvalue of this observable and is not an individual measurement result.

### (c) Apply the measurement update

The alive projector selects the vector $|\mathrm{alive}\rangle/\sqrt2$. Divide by the square root of its probability to normalize it:

$$
|\psi'\rangle
=\frac{|\mathrm{alive}\rangle\langle\mathrm{alive}|\psi\rangle}{\sqrt{P(\mathrm{alive})}}
=\frac{|\mathrm{alive}\rangle/\sqrt2}{1/\sqrt2}
=|\mathrm{alive}\rangle.
$$

For an immediate ideal repeat measurement, with no intervening evolution,

$$
P(\mathrm{dead}\mid\mathrm{alive})
=|\langle\mathrm{dead}|\mathrm{alive}\rangle|^2=0.
$$

### (d) Distinguish superposition from a mixture

The coefficients are probability amplitudes. They do not divide either physical outcome into fractions. Every measurement of $\hat O$ gives one of the two complete outcomes.

The coherent state has density operator

$$
\begin{aligned}
\rho_{\mathrm{pure}}=|\psi\rangle\langle\psi|
=\frac12\big(&|\mathrm{alive}\rangle\langle\mathrm{alive}|+|\mathrm{dead}\rangle\langle\mathrm{dead}|\\
&+|\mathrm{alive}\rangle\langle\mathrm{dead}|+|\mathrm{dead}\rangle\langle\mathrm{alive}|\big).
\end{aligned}
$$

A classical equal-probability mixture has only the two diagonal terms:

$$
\rho_{\mathrm{mix}}
=\frac12|\mathrm{alive}\rangle\langle\mathrm{alive}|
+\frac12|\mathrm{dead}\rangle\langle\mathrm{dead}|.
$$

Both give the same alive/dead probabilities, but only the pure state has the off-diagonal coherence terms. In this ideal two-state model, the observable $\hat X=|\mathrm{alive}\rangle\langle\mathrm{dead}|+|\mathrm{dead}\rangle\langle\mathrm{alive}|$ exchanges the two kets. Hence $\hat X|\psi\rangle=|\psi\rangle$ and its pure-state expectation is $1$. Each diagonal state has zero expectation of $\hat X$, so the mixture gives $0$. This identifies a measurement that distinguishes the states in the model.

As a further check, $\rho_{\mathrm{pure}}^2=\rho_{\mathrm{pure}}$ gives purity $\operatorname{Tr}(\rho_{\mathrm{pure}}^2)=1$. Orthogonality gives $\rho_{\mathrm{mix}}^2=(|\mathrm{alive}\rangle\langle\mathrm{alive}|+|\mathrm{dead}\rangle\langle\mathrm{dead}|)/4$, with purity $1/2$.

## Answer

(a) Both initial outcome probabilities are $1/2$. (b) $\langle\hat O\rangle=0$. (c) The alive result leaves $|\mathrm{alive}\rangle$, and an immediate dead result has probability zero. (d) The state is a coherent superposition with off-diagonal terms, rather than a literal fractional outcome or a classical mixture.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $P(\mathrm{alive})$, $P(\mathrm{dead})$ | $1$ | Initial outcome probability | The probability of either cat-model result. |
| $P(\mathrm{dead}\mid\mathrm{alive})$ | $1$ | Conditional dead probability | The probability of dead after the alive result. |
| $\langle\hat O\rangle$ | $1$ | Cat-model expectation | The mean of the outcomes $+1$ and $-1$. |
