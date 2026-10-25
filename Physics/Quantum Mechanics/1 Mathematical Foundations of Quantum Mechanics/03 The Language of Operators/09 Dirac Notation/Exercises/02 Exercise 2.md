---
title: "Spin projection and measurement probability"
---

> [!TLDR]
> A projector selects one component, and its expectation value gives the probability of that outcome.

Chapter 9 — Dirac Notation · Exercise 2 · Basic level

Back to [[09 Dirac Notation/10 Exercises#Exercise 2|Chapter 9 exercise index]].

## Question

For $\hat P_\uparrow=|\uparrow\rangle\langle\uparrow|$:

**(a)** Calculate $\hat P_\uparrow|\psi\rangle$ for

$$
|\psi\rangle=\frac35|\uparrow\rangle+\frac45|\downarrow\rangle.
$$

**(b)** Calculate $\langle\psi|\hat P_\uparrow|\psi\rangle$. Interpret the result as a probability.

**(c)** Verify $\hat P_\uparrow^2=\hat P_\uparrow$ explicitly.

## Worked solution

### (a) Apply the projector

Use orthonormality to remove the down component:

$$
\begin{aligned}
\hat P_\uparrow|\psi\rangle
&=|\uparrow\rangle\langle\uparrow|\left(\frac35|\uparrow\rangle+\frac45|\downarrow\rangle\right)\\
&=|\uparrow\rangle\left(\frac35\cdot1+\frac45\cdot0\right)
=\frac35|\uparrow\rangle.
\end{aligned}
$$

The projected vector is not normalized. Its norm retains the amplitude for the selected result.

### (b) Calculate the probability

The initial state is normalized because $9/25+16/25=1$. Its projector expectation is

$$
\begin{aligned}
\langle\psi|\hat P_\uparrow|\psi\rangle
&=\left(\frac35\langle\uparrow|+\frac45\langle\downarrow|\right)\frac35|\uparrow\rangle\\
&=\frac9{25}\cdot1+\frac{12}{25}\cdot0=\frac9{25}.
\end{aligned}
$$

By the Born rule this is the probability of spin up. Equivalently, it is the squared norm of the vector found in part (a). If that result is selected, divide by its norm $3/5$ to obtain the normalized post-measurement state $|\uparrow\rangle$.

### (c) Apply the projector twice

Keep the middle inner product visible:

$$
\begin{aligned}
\hat P_\uparrow^2
&=(|\uparrow\rangle\langle\uparrow|)(|\uparrow\rangle\langle\uparrow|)\\
&=|\uparrow\rangle\underbrace{\langle\uparrow|\uparrow\rangle}_{1}\langle\uparrow|
=|\uparrow\rangle\langle\uparrow|=\hat P_\uparrow.
\end{aligned}
$$

Once the vector lies in the spin-up subspace, another projection does not change it.

## Answer

(a) $\hat P_\uparrow|\psi\rangle=(3/5)|\uparrow\rangle$. (b) The spin-up probability is $9/25$. (c) $\hat P_\uparrow^2=\hat P_\uparrow$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle\psi\vert\hat P_\uparrow\vert\psi\rangle$ | $1$ | Spin-up probability | The probability of the selected spin-up outcome. |
