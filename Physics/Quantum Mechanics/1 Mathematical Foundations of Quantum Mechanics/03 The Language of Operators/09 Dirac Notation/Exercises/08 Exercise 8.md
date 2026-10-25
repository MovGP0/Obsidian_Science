---
title: "Two-level energies and coherent transitions"
---

> [!TLDR]
> The two energy eigenstates give a time-evolution operator that transfers population between spin states.

Chapter 9 — Dirac Notation · Exercise 8 · Challenge

Back to [[09 Dirac Notation/10 Exercises#Exercise 8|Chapter 9 exercise index]].

## Question

Let

$$
\hat H=\energy{E_0}\hat I+\energy{\Delta}\sigma_x,
\qquad\energy{E_0},\energy{\Delta}\in\mathbb R.
$$

**(a)** Find the eigenvalues and eigenstates of $\hat H$.

**(b)** Write the spectral decomposition

$$
\hat H=\sum_n\energy{E_n}|E_n\rangle\langle E_n|.
$$

**(c)** Calculate $e^{-i\hat H\signal{t}/\mechanical{\hbar}}$ and the state $|\psi(\signal{t})\rangle$ for the initial condition $|\psi(0)\rangle=|\uparrow\rangle$.

**(d)** Determine the transition probability

$$
P(\uparrow\to\downarrow,\signal{t})
=|\langle\downarrow|\psi(\signal{t})\rangle|^2.
$$

## Worked solution

### (a) Find the energy eigenstates

In the ordered basis $(|\uparrow\rangle,|\downarrow\rangle)$,

$$
\hat H=\begin{pmatrix}\energy{E_0}&\energy{\Delta}\\\energy{\Delta}&\energy{E_0}\end{pmatrix}.
$$

The characteristic equation is

$$
\det(\hat H-\energy{E}\hat I)
=(\energy{E_0}-\energy{E})^2-\energy{\Delta}^2=0,
$$

so $\energy{E_\pm}=\energy{E_0}\pm\energy{\Delta}$. The symmetric and antisymmetric normalized kets satisfy $\sigma_x|\pm x\rangle=\pm|\pm x\rangle$:

$$
|+x\rangle=\frac{|\uparrow\rangle+|\downarrow\rangle}{\sqrt2},
\qquad
|-x\rangle=\frac{|\uparrow\rangle-|\downarrow\rangle}{\sqrt2}.
$$

Applying $\hat H$ gives $(\energy{E_0}\pm\energy{\Delta})|\pm x\rangle$, which verifies the eigenpairs. The labels $+$ and $-$ refer to the eigenvalue of $\sigma_x$; they do not order the energies when $\energy{\Delta}<0$. If $\energy{\Delta}=0$, both energies are $\energy{E_0}$ and any orthonormal basis is an energy eigenbasis.

### (b) Form the spectral decomposition

The two normalized eigenstates are orthogonal and complete. Therefore

$$
\hat H
=\energy{E_+}|+x\rangle\langle+x|
+\energy{E_-}|-x\rangle\langle-x|.
$$

To check this expression, use

$$
|+x\rangle\langle+x|+|-x\rangle\langle-x|=\hat I,
\qquad
|+x\rangle\langle+x|-|-x\rangle\langle-x|=\sigma_x.
$$

Substitution recovers $\energy{E_0}\hat I+\energy{\Delta}\sigma_x$.

### (c) Calculate time evolution

The identity commutes with $\sigma_x$, so the exponential separates:

$$
e^{-i\hat H\signal{t}/\mechanical{\hbar}}
=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
e^{-i\energy{\Delta}\signal{t}\sigma_x/\mechanical{\hbar}}.
$$

Since $\sigma_x^2=\hat I$, its even powers equal $\hat I$ and its odd powers equal $\sigma_x$. Separate the exponential series into those powers:

$$
\begin{aligned}
e^{-i\energy{\Delta}\signal{t}\sigma_x/\mechanical{\hbar}}
&=\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k)!}
\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)^{2k}\hat I\\
&\quad-i\sum_{k=0}^{\infty}\frac{(-1)^k}{(2k+1)!}
\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)^{2k+1}\sigma_x\\
&=\cos\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\hat I
-i\sin\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\sigma_x.
\end{aligned}
$$

Thus the full evolution operator is

$$
e^{-i\hat H\signal{t}/\mechanical{\hbar}}
=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
\left[\cos\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\hat I
-i\sin\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\sigma_x\right].
$$

Apply it to the initial ket and use $\sigma_x|\uparrow\rangle=|\downarrow\rangle$:

$$
|\psi(\signal{t})\rangle
=e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
\left[\cos\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)|\uparrow\rangle
-i\sin\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)|\downarrow\rangle\right].
$$

At zero time this gives $|\uparrow\rangle$. At any time the squared norm is $\cos^2(\energy{\Delta}\signal{t}/\mechanical{\hbar})+\sin^2(\energy{\Delta}\signal{t}/\mechanical{\hbar})=1$.

### (d) Calculate the transition probability and frequency

Take the down component:

$$
\langle\downarrow|\psi(\signal{t})\rangle
=-i e^{-i\energy{E_0}\signal{t}/\mechanical{\hbar}}
\sin\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right).
$$

Both $-i$ and the common phase have unit magnitude. They disappear on taking the squared magnitude:

$$
\begin{aligned}
P(\uparrow\to\downarrow,\signal{t})
&=\sin^2\left(\frac{\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\\
&=\frac12\left[1-\cos\left(\frac{2\energy{\Delta}\signal{t}}{\mechanical{\hbar}}\right)\right].
\end{aligned}
$$

For nonzero coupling, the population angular frequency and its period are

$$
\signal{\Omega}=\frac{2|\energy{\Delta}|}{\mechanical{\hbar}},
\qquad
\signal{T}=\frac{2\pi}{\signal{\Omega}}=\frac{\pi\mechanical{\hbar}}{|\energy{\Delta}|}.
$$

The factor of two follows from the squared sine. The argument frequency $|\energy{\Delta}|/\mechanical{\hbar}$ in the amplitude is half the population angular frequency. If $\energy{\Delta}=0$, the transition probability is always zero and there is no finite oscillation period.

## Answer

(a) $\energy{E_\pm}=\energy{E_0}\pm\energy{\Delta}$ with eigenstates $|\pm x\rangle$. (b) The spectral sum is $\energy{E_+}|+x\rangle\langle+x|+\energy{E_-}|-x\rangle\langle-x|$. (c) The evolution operator and normalized time-dependent state are given above. (d) $P(\uparrow\to\downarrow,\signal{t})=\sin^2(\energy{\Delta}\signal{t}/\mechanical{\hbar})$, with population angular frequency $2|\energy{\Delta}|/\mechanical{\hbar}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E_0}$ | $\unit{J}$ | Common energy offset | The energy added to both levels. |
| $\energy{\Delta}$ | $\unit{J}$ | Coupling energy | The coefficient that couples the arrow-basis states. |
| $\energy{E}$, $\energy{E_n}$, $\energy{E_\pm}$ | $\unit{J}$ | Energy eigenvalue | The trial and resulting eigenvalues of the Hamiltonian. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action constant in time evolution. |
| $\signal{t}$ | $\unit{s}$ | Time | The elapsed evolution time. |
| $P(\uparrow\to\downarrow,\signal{t})$ | $1$ | Transition probability | The probability to find the initial up state down. |
| $\signal{\Omega}$ | $\unit{s^{-1}}$ | Population angular frequency | The angular frequency of the probability oscillation. |
| $\signal{T}$ | $\unit{s}$ | Population period | The repeat time of the transition probability. |
