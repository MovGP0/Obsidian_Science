---
title: "Spin probabilities, moments, and maximum uncertainty"
---

> [!TLDR]
> The spin measurement probabilities give the mean and variance; equal probabilities give the maximum uncertainty.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 5 · Intermediate level.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 5|Back to the chapter exercise index]].

## Question

Let

$$
|\psi\rangle
=\cos(\signal{\theta}/2)|\uparrow\rangle
+\sin(\signal{\theta}/2)|\downarrow\rangle.
$$

**(a)** Calculate the probabilities of obtaining $+\mechanical{\hbar}/2$ and $-\mechanical{\hbar}/2$ in a measurement of $\hat S_z$.

**(b)** Calculate $\langle\hat S_z\rangle$ and $\langle\hat S_z^2\rangle$.

**(c)** For which value of $\signal{\theta}$ is the uncertainty $\mechanical{\Delta S_z}$ maximal?

## Worked solution

The basis states $|\uparrow\rangle$ and $|\downarrow\rangle$ are orthonormal. For real $\signal{\theta}$, the given state has squared norm $\cos^2(\signal{\theta}/2)+\sin^2(\signal{\theta}/2)=1$. Thus its amplitudes can be used directly in the Born rule.

### (a) Measurement probabilities

The spin operator has spectral form

$$
\hat S_z=\frac{\mechanical{\hbar}}2
\left(|\uparrow\rangle\langle\uparrow|-|\downarrow\rangle\langle\downarrow|\right).
$$

Projection onto each basis state selects its amplitude. The probabilities are the squared absolute values:

$$
\begin{aligned}
P_+&=P(+\mechanical{\hbar}/2)=|\langle\uparrow|\psi\rangle|^2
=\cos^2(\signal{\theta}/2),\\
P_-&=P(-\mechanical{\hbar}/2)=|\langle\downarrow|\psi\rangle|^2
=\sin^2(\signal{\theta}/2).
\end{aligned}
$$

Their sum is one, as required for these two possible outcomes.

### (b) First and second moments

Weight each outcome by its probability:

$$
\begin{aligned}
\mechanical{\langle S_z\rangle}
&=\langle\hat S_z\rangle
=\frac{\mechanical{\hbar}}2P_+-\frac{\mechanical{\hbar}}2P_-\\
&=\frac{\mechanical{\hbar}}2\left(\cos^2(\signal{\theta}/2)-\sin^2(\signal{\theta}/2)\right)
=\frac{\mechanical{\hbar}}2\cos\signal{\theta}.
\end{aligned}
$$

Both squared outcomes are $\mechanical{\hbar}^2/4$. Equivalently, $\hat S_z^2=(\mechanical{\hbar}^2/4)I$. Therefore,

$$
\mechanical{\langle S_z^2\rangle}
=\langle\hat S_z^2\rangle
=\frac{\mechanical{\hbar}^2}4(P_++P_-)
=\frac{\mechanical{\hbar}^2}4.
$$

### (c) Maximum uncertainty

Use the variance definition before taking its positive square root:

$$
\begin{aligned}
(\mechanical{\Delta S_z})^2
&=\mechanical{\langle S_z^2\rangle}-(\mechanical{\langle S_z\rangle})^2\\
&=\frac{\mechanical{\hbar}^2}4(1-\cos^2\signal{\theta})
=\frac{\mechanical{\hbar}^2}4\sin^2\signal{\theta},\\
\mechanical{\Delta S_z}&=\frac{\mechanical{\hbar}}2|\sin\signal{\theta}|.
\end{aligned}
$$

The absolute value is necessary because a standard deviation cannot be negative. The largest value of $|\sin\signal{\theta}|$ is one. For unrestricted real angles, the maximum occurs at $\signal{\theta}=\pi/2+k\pi$, where $k\in\mathbb Z$. In the usual polar-angle range $0\le\signal{\theta}\le\pi$, the answer is $\signal{\theta}=\pi/2$.

At that angle, $P_+=P_-=1/2$ and $|\psi\rangle=|+x\rangle$. The mean is zero, but each individual outcome has magnitude $\mechanical{\hbar}/2$. This explains the nonzero maximum uncertainty. At $\signal{\theta}=0$ or $\pi$, the state is an $\hat S_z$ eigenstate, and the uncertainty is zero.

## Answer

$P_+=\cos^2(\signal{\theta}/2)$ and $P_-=\sin^2(\signal{\theta}/2)$.

$$
\langle\hat S_z\rangle=\frac{\mechanical{\hbar}}2\cos\signal{\theta},
\qquad
\langle\hat S_z^2\rangle=\frac{\mechanical{\hbar}^2}4.
$$

The maximum uncertainty is $\mechanical{\hbar}/2$. It occurs at $\signal{\theta}=\pi/2$ on $[0,\pi]$, or at $\signal{\theta}=\pi/2+k\pi$ for real angles.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\theta}$ | $1$ | State angle | The real angle that sets the spin amplitudes. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the spin scale. |
| $P_+,P_-$ | $1$ | Measurement probabilities | The probabilities of the two spin outcomes. |
| $\mechanical{\langle S_z\rangle}$ | $\unit{J\,s}$ | Mean spin component | The expectation value along the z axis. |
| $\mechanical{\langle S_z^2\rangle}$ | $\unit{J^2\,s^2}$ | Second spin moment | The mean of the squared spin component. |
| $\mechanical{\Delta S_z}$ | $\unit{J\,s}$ | Spin uncertainty | The standard deviation of the spin outcomes. |
