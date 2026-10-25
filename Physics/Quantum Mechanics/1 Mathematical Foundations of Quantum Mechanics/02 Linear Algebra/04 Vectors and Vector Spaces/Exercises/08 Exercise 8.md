---
title: "Pauli-z expectation for a general spin state"
---

> [!TLDR]
> The dimensionless Pauli-z mean is the up-state probability minus the down-state probability.

Chapter 4 — Vectors and Vector Spaces · Exercise 8 · Intermediate level

Back to [[04 Vectors and Vector Spaces/09 Exercises|Chapter 4 exercise index]].

## Question

Let

$$
|\psi\rangle=\signal{\alpha}|\uparrow\rangle+\signal{\beta}|\downarrow\rangle,
\qquad|\signal{\alpha}|^2+|\signal{\beta}|^2=1.
$$

Calculate explicitly

$$
\langle\sigma_z\rangle=\langle\psi|\sigma_z|\psi\rangle
$$

as a function of $\signal{\alpha}$ and $\signal{\beta}$, where

$$
\sigma_z|\uparrow\rangle=+|\uparrow\rangle,
\qquad\sigma_z|\downarrow\rangle=-|\downarrow\rangle.
$$

> [!note]
> The source uses $\sigma_z$ for the Pauli matrix in this exercise. Its eigenvalues are $+1$ and $-1$, so the displayed expectation value is dimensionless.

## Worked solution

First apply the specified operator to the ket. Its linearity and the two given eigenvalue equations give

$$
\sigma_z|\psi\rangle
=\signal{\alpha}|\uparrow\rangle
-\signal{\beta}|\downarrow\rangle.
$$

Form the bra by conjugating the amplitudes:

$$
\langle\psi|
=\overline{\signal{\alpha}}\langle\uparrow|
+\overline{\signal{\beta}}\langle\downarrow|.
$$

Multiply this bra by the transformed ket before using orthogonality:

$$
\begin{aligned}
\langle\sigma_z\rangle
&=\overline{\signal{\alpha}}\signal{\alpha}
\langle\uparrow|\uparrow\rangle
-\overline{\signal{\alpha}}\signal{\beta}
\langle\uparrow|\downarrow\rangle\\
&\quad+\overline{\signal{\beta}}\signal{\alpha}
\langle\downarrow|\uparrow\rangle
-\overline{\signal{\beta}}\signal{\beta}
\langle\downarrow|\downarrow\rangle.
\end{aligned}
$$

The basis states have unit norm and zero mutual inner product. The middle terms therefore vanish, while the diagonal products become squared magnitudes:

$$
\langle\sigma_z\rangle
=|\signal{\alpha}|^2-|\signal{\beta}|^2.
$$

The same result follows as a probability-weighted mean: the up outcome has value $+1$ and probability $|\signal{\alpha}|^2$; the down outcome has value $-1$ and probability $|\signal{\beta}|^2$. Normalization gives equivalent forms and a useful bound:

$$
\langle\sigma_z\rangle
=2|\signal{\alpha}|^2-1
=1-2|\signal{\beta}|^2,
\qquad -1\le\langle\sigma_z\rangle\le1.
$$

The observable here is the Pauli operator with dimensionless eigenvalues. No angular-momentum factor is part of the specified calculation.

## Answer

$\langle\sigma_z\rangle=|\signal{\alpha}|^2-|\signal{\beta}|^2$, a dimensionless number between $-1$ and $1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\vert\psi\rangle$ | $1$ | Spin state | The normalized vector expanded in the up and down basis. |
| $\signal{\alpha},\signal{\beta}$ | $1$ | Probability amplitudes | The complex coefficients whose squared magnitudes give spin probabilities. |
| $\langle\sigma_z\rangle$ | $1$ | Pauli-z expectation | The mean of the specified dimensionless observable. |
