---
title: "Normalization and spin measurement probabilities"
---

> [!TLDR]
> The squared magnitudes of the two spin amplitudes are 4/5 and 1/5, so the state is normalized.

Chapter 4 — Vectors and Vector Spaces · Exercise 4 · Basic level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

A spin state is

$$
|\psi\rangle=\frac1{\sqrt5}\bigl(2|\uparrow\rangle+\mathrm{i}|\downarrow\rangle\bigr).
$$

Verify normalization and calculate the probabilities $P(\uparrow)$ and $P(\downarrow)$.

## Worked solution

The spin basis is orthonormal:

$$
\langle\uparrow|\uparrow\rangle
=\langle\downarrow|\downarrow\rangle=1,
\qquad
\langle\uparrow|\downarrow\rangle
=\langle\downarrow|\uparrow\rangle=0.
$$

Read the amplitudes from the state:

$$
\signal{\alpha}=\frac2{\sqrt5},
\qquad
\signal{\beta}=\frac{\mathrm i}{\sqrt5}.
$$

The bra contains the conjugate amplitudes, so

$$
\langle\psi|=\frac1{\sqrt5}
\bigl(2\langle\uparrow|-\mathrm i\langle\downarrow|\bigr).
$$

Multiply the bra and ket. The cross terms vanish because the basis states are orthogonal:

$$
\begin{aligned}
\langle\psi|\psi\rangle
&=\frac15\left(
4\langle\uparrow|\uparrow\rangle
+2\mathrm i\langle\uparrow|\downarrow\rangle
-2\mathrm i\langle\downarrow|\uparrow\rangle
+(-\mathrm i)(\mathrm i)\langle\downarrow|\downarrow\rangle
\right)\\
&=\frac15(4+0+0+1)=1.
\end{aligned}
$$

The last term is positive because $(-\mathrm i)(\mathrm i)=-\mathrm i^2=1$. By the Born rule, each probability is the squared magnitude of its amplitude:

$$
P(\uparrow)=\left|\frac2{\sqrt5}\right|^2=\frac45,
\qquad
P(\downarrow)=\left|\frac{\mathrm i}{\sqrt5}\right|^2
=\frac{\overline{\mathrm i}\,\mathrm i}{5}=\frac15.
$$

Both probabilities are nonnegative and their sum is one. The factor $\mathrm i$ changes the relative phase, but not this measurement probability.

## Answer

$\langle\psi|\psi\rangle=1$, $P(\uparrow)=4/5$, and $P(\downarrow)=1/5$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\vert\psi\rangle$ | $1$ | Spin state | The normalized vector in the two-state spin space. |
| $\signal{\alpha},\signal{\beta}$ | $1$ | Probability amplitudes | The coefficients of the up and down basis states. |
| $P(\uparrow),P(\downarrow)$ | $1$ | Spin probabilities | The probabilities for the two stated measurement outcomes. |
