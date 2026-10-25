---
title: "Time evolution and population transfer in a two-level system"
---

> [!TLDR]
> The coupling transfers population between the basis states, and the population angular frequency is twice the coefficient in the sine.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 6 · Intermediate level.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 6|Back to the chapter exercise index]].

## Question

Calculate $e^{-i\hat H\signal{t}/\mechanical{\hbar}}$ for the Hamiltonian in Exercise 4. Find $|\psi(\signal{t})\rangle$ for the initial state $|\psi(0)\rangle=|\uparrow\rangle$. Calculate the transition probability $P(\uparrow\to\downarrow,\signal{t})$.

## Worked solution

The Hamiltonian from [[07 Eigenvalues and Eigenvectors/Exercises/04 Exercise 4|Exercise 4]] is

$$
\hat H=\energy{E_0}I+\energy{\Delta}\sigma_x,
\qquad
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$

### Calculate the time-evolution operator

The identity commutes with $\sigma_x$, so the exponential factors:

$$
U(\signal{t})=e^{-i\hat H\signal{t}/\mechanical{\hbar}}
=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
e^{-i\energy{\Delta}\signal{t}\sigma_x/\mechanical{\hbar}}.
$$

To evaluate the second factor, use $\sigma_x^2=I$. All even powers are $I$; all odd powers are $\sigma_x$. With the dimensionless helper $u=\energy{\Delta}\signal{t}/\mechanical{\hbar}$, separate the power series into even and odd terms:

$$
\begin{aligned}
e^{-iu\sigma_x}
&=\sum_{k=0}^{\infty}\frac{(-1)^ku^{2k}}{(2k)!}I
-i\sum_{k=0}^{\infty}\frac{(-1)^ku^{2k+1}}{(2k+1)!}\sigma_x\\
&=\cos u\,I-i\sin u\,\sigma_x.
\end{aligned}
$$

Consequently,

$$
U(\signal{t})
=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
\begin{pmatrix}
\cos(\energy{\Delta}\signal{t}/\mechanical{\hbar})&-i\sin(\energy{\Delta}\signal{t}/\mechanical{\hbar})\\
-i\sin(\energy{\Delta}\signal{t}/\mechanical{\hbar})&\cos(\energy{\Delta}\signal{t}/\mechanical{\hbar})
\end{pmatrix}.
$$

The prefactor has modulus one because $\energy{E_0}$ is real. The remaining factor is unitary because $(\cos u I+i\sin u\sigma_x)(\cos u I-i\sin u\sigma_x)=I$.

### Apply the initial condition

Since $\sigma_x|\uparrow\rangle=|\downarrow\rangle$,

$$
|\psi(\signal{t})\rangle
=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
\left[
\cos\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)|\uparrow\rangle
-i\sin\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)|\downarrow\rangle
\right].
$$

At $\signal{t}=0$, this is the required state $|\uparrow\rangle$. Its norm remains one because $\cos^2u+\sin^2u=1$.

### Calculate the transition probability

The projection onto $|\downarrow\rangle$ gives amplitude $-ie^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}\sin u$. Its squared absolute value is

$$
P(\uparrow\to\downarrow,\signal{t})
=\sin^2\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)
=\frac12\left[1-\cos\left(\frac{2\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\right].
$$

The common phase from $\energy{E_0}$ cancels from this probability. The nonnegative population angular frequency and its period, for $\energy{\Delta}\ne0$, are

$$
\signal{\Omega_R}=\frac{2|\energy{\Delta}|}{\mechanical{\hbar}},
\qquad
\signal{T}=\frac{2\pi}{\signal{\Omega_R}}
=\frac{\pi\mechanical{\hbar}}{|\energy{\Delta}|}.
$$

At half this period, the transition probability is one. If $\energy{\Delta}=0$, the state acquires only a common phase and the transition probability stays zero; there is no finite population-oscillation period.

> [!note] Source correction — Rabi frequency
> The source calls $\energy{\Delta}/\mechanical{\hbar}$ the oscillation frequency. It is the coefficient inside the sine. The population oscillation has angular frequency $2|\energy{\Delta}|/\mechanical{\hbar}$, since $\sin^2u=(1-\cos2u)/2$.

## Answer

$$
U(\signal{t})=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
\left[\cos\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)I
-i\sin\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\sigma_x\right].
$$

The evolved state is the superposition above, and $P(\uparrow\to\downarrow,\signal{t})=\sin^2(\energy{\Delta}\signal{t}/\mechanical{\hbar})$. The population angular frequency is $\signal{\Omega_R}=2|\energy{\Delta}|/\mechanical{\hbar}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E_0}$ | $\unit{J}$ | Uncoupled energy | The energy that produces the common phase. |
| $\energy{\Delta}$ | $\unit{J}$ | Coupling energy | The coupling that transfers population. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that relates energy to angular frequency. |
| $\signal{t}$ | $\unit{s}$ | Time | The time from the initial state. |
| $P(\uparrow\to\downarrow,\signal{t})$ | $1$ | Transition probability | The probability of the down state. |
| $\signal{\Omega_R}$ | $\unit{s^{-1}}$ | Population angular frequency | The angular frequency of the population oscillation. |
| $\signal{T}$ | $\unit{s}$ | Population period | The time for one complete population oscillation. |
