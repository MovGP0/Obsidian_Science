---
title: "Spin probabilities and angular uncertainty"
---

> [!TLDR]
> Spin measurement probabilities give an angular dependence of the mean and standard deviation.

Chapter 14 · Exercise 3 · Basic level

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

For the spin state

$$
|\psi\rangle=\cos(\signal{\theta}/2)|\uparrow\rangle
+\sin(\signal{\theta}/2)|\downarrow\rangle,
$$

**(a)** Write the probability distribution of $\hat S_z$ explicitly.

**(b)** Calculate $\langle\hat S_z\rangle$ and $\mechanical{\Delta S}_z$ as functions of $\signal{\theta}$.

**(c)** For which $\signal{\theta}$ is $\mechanical{\Delta S}_z$ maximal?

## Worked solution

### (a) The spin measurement distribution

The two basis states are normalized eigenstates of $\hat S_z$ with eigenvalues $+\mechanical{\hbar}/2$ and $-\mechanical{\hbar}/2$. The Born rule gives the squared magnitude of each coefficient:

$$
P\left(S_z=+\frac{\mechanical{\hbar}}2\right)
=\cos^2\left(\frac{\signal{\theta}}2\right),\qquad
P\left(S_z=-\frac{\mechanical{\hbar}}2\right)
=\sin^2\left(\frac{\signal{\theta}}2\right).
$$

Their sum is one by the identity $\cos^2u+\sin^2u=1$.

### (b) Mean and standard deviation

Weight each measurement result by its probability:

$$
\langle\hat S_z\rangle
=\frac{\mechanical{\hbar}}2\cos^2\left(\frac{\signal{\theta}}2\right)
-\frac{\mechanical{\hbar}}2\sin^2\left(\frac{\signal{\theta}}2\right)
=\frac{\mechanical{\hbar}}2\cos\signal{\theta}.
$$

Both possible results have the same square. This makes the second moment independent of the angle:

$$
\langle\hat S_z^2\rangle
=\frac{\mechanical{\hbar}^2}4
\left[\cos^2\left(\frac{\signal{\theta}}2\right)
+\sin^2\left(\frac{\signal{\theta}}2\right)\right]
=\frac{\mechanical{\hbar}^2}4.
$$

Subtract the square of the mean and take the nonnegative square root:

$$
(\mechanical{\Delta S}_z)^2
=\langle\hat S_z^2\rangle-\langle\hat S_z\rangle^2
=\frac{\mechanical{\hbar}^2}4(1-\cos^2\signal{\theta})
=\frac{\mechanical{\hbar}^2}4\sin^2\signal{\theta},
$$

$$
\mechanical{\Delta S}_z=\frac{\mechanical{\hbar}}2|\sin\signal{\theta}|.
$$

The absolute value is necessary because a standard deviation cannot be negative.

### (c) Maximum uncertainty

The bound $|\sin\signal{\theta}|\leq1$ gives the maximum $\mechanical{\hbar}/2$. Equality holds when

$$
\signal{\theta}=\frac\pi2+j\pi,\qquad j\in\mathbb Z.
$$

If the state angle is restricted to $0\leq\signal{\theta}\leq\pi$, the only maximum is at $\signal{\theta}=\pi/2$. The two measurement probabilities are then equal to $1/2$. At the interval endpoints, a single result has probability one and the uncertainty is zero.

## Answer

$$
\boxed{P_+=\cos^2(\signal{\theta}/2),\quad P_-=\sin^2(\signal{\theta}/2),
\quad \langle\hat S_z\rangle=\frac{\mechanical{\hbar}}2\cos\signal{\theta},
\quad \mechanical{\Delta S}_z=\frac{\mechanical{\hbar}}2|\sin\signal{\theta}|.}
$$

The maximum is $\mechanical{\hbar}/2$ at $\signal{\theta}=\pi/2+j\pi$; on $[0,\pi]$, it is at $\signal{\theta}=\pi/2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $1$ | State angle | The angle that sets the two spin amplitudes. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale of the spin eigenvalues. |
| $S_z$, $\langle\hat S_z\rangle$, $\mechanical{\Delta S}_z$ | $\unit{J\,s}$ | Spin component and its statistics | The measured z component, mean, and standard deviation. |
| $\langle\hat S_z^2\rangle$, $(\mechanical{\Delta S}_z)^2$ | $\unit{J^2\,s^2}$ | Second spin moment and variance | The squared-spin expectation and its centered moment. |
| $\vert\psi\rangle$ | $1$ | Spin state | The normalized vector that sets the measurement probabilities. |
