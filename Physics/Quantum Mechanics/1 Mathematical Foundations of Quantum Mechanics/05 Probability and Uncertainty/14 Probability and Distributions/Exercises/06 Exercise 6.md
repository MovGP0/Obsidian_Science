---
title: "Thermal energy from a geometric partition function"
---

> [!TLDR]
> A geometric series normalizes the energy probabilities, and a partition-function derivative gives the mean energy and its high-temperature limit.

Chapter 14 · Exercise 6 · Intermediate level

Back to [[14 Probability and Distributions/08 Exercises|Chapter 14 exercises]] · [[14 Probability and Distributions/00 Probability and Distributions|Chapter 14 overview]].

## Question

A system has Hamiltonian eigenstates $|n\rangle$ with

$$
\energy{E}_n=n\mechanical{\hbar}\signal{\omega},
\qquad n=0,1,2,\ldots.
$$

Let

$$
|\psi\rangle=\sum_{n=0}^{\infty}c_n|n\rangle,
\qquad
c_n=\frac1{\sqrt{\thermal{Z}}}
e^{-n\thermal{\beta}\mechanical{\hbar}\signal{\omega}/2},
$$

where

$$
\thermal{Z}=\sum_{n=0}^{\infty}e^{-n\thermal{\beta}\mechanical{\hbar}\signal{\omega}},
\qquad\thermal{\beta}=\frac1{\thermal{k}_B\thermal{T}}.
$$

This pure state reproduces the energy probabilities of a thermal state. The actual thermal state is a statistical mixture, so the two states need not agree for other observables.

**(a)** Calculate $\thermal{Z}$ using a geometric series.

**(b)** Calculate $\langle\hat H\rangle$, the mean thermal energy.

**(c)** Show that at high temperature, $\thermal{T}\to\infty$, the leading behavior is $\langle\hat H\rangle\sim\thermal{k}_B\thermal{T}$, the classical result.

## Worked solution

### (a) Sum the partition function

Assume positive temperature and positive level spacing. Define the dimensionless helper $r=e^{-\thermal{\beta}\mechanical{\hbar}\signal{\omega}}$. Then $0<r<1$, which is the condition for convergence of the geometric series:

$$
\thermal{Z}=\sum_{n=0}^\infty r^n=\frac1{1-r}
=\frac1{1-e^{-\thermal{\beta}\mechanical{\hbar}\signal{\omega}}}.
$$

The energy probabilities are

$$
P_n=|c_n|^2=\frac{e^{-\thermal{\beta}\energy{E}_n}}{\thermal{Z}}
=(1-r)r^n.
$$

Their sum is $(1-r)/(1-r)=1$. At infinite temperature the geometric sum itself diverges; the high-temperature result below is a limit through finite positive temperatures.

### (b) Derive the energy from the normalization sum

The Hamiltonian is diagonal in the given basis, so its mean is the weighted sum of its eigenvalues:

$$
\langle\hat H\rangle
=\sum_{n=0}^\infty P_n\energy{E}_n
=\frac1{\thermal{Z}}\sum_{n=0}^\infty
\energy{E}_ne^{-\thermal{\beta}\energy{E}_n}.
$$

Differentiate the convergent partition sum with respect to inverse thermal energy. This brings down the energy factor needed in the numerator:

$$
\frac{\partial\thermal{Z}}{\partial\thermal{\beta}}
=-\sum_{n=0}^\infty\energy{E}_ne^{-\thermal{\beta}\energy{E}_n},
\qquad
\langle\hat H\rangle
=-\frac1{\thermal{Z}}\frac{\partial\thermal{Z}}{\partial\thermal{\beta}}
=-\frac{\partial\ln\thermal{Z}}{\partial\thermal{\beta}}.
$$

For the expression found in part (a),

$$
\ln\thermal{Z}=-\ln\left(1-e^{-\thermal{\beta}\mechanical{\hbar}\signal{\omega}}\right),
$$

$$
\frac{\partial\ln\thermal{Z}}{\partial\thermal{\beta}}
=-\frac{\mechanical{\hbar}\signal{\omega}
e^{-\thermal{\beta}\mechanical{\hbar}\signal{\omega}}}
{1-e^{-\thermal{\beta}\mechanical{\hbar}\signal{\omega}}}.
$$

The extra minus sign in the mean-energy identity gives a positive energy:

$$
\langle\hat H\rangle
=\frac{\mechanical{\hbar}\signal{\omega}}
{e^{\thermal{\beta}\mechanical{\hbar}\signal{\omega}}-1}.
$$

One can also differentiate the geometric series with respect to $r$: $\sum_{n=0}^\infty nr^n=r/(1-r)^2$. Multiplication by $(1-r)\mechanical{\hbar}\signal{\omega}$ gives the same result. The stated spectrum starts at zero; no zero-point energy should be added to this answer.

### (c) High-temperature limit

Set $u=\thermal{\beta}\mechanical{\hbar}\signal{\omega}=
\mechanical{\hbar}\signal{\omega}/(\thermal{k}_B\thermal{T})$. For fixed level spacing, increasing temperature makes $u\to0^+$. The ratio to the proposed classical result is

$$
\frac{\langle\hat H\rangle}{\thermal{k}_B\thermal{T}}
=\frac{u}{e^u-1}.
$$

Use the expansion $e^u-1=u+u^2/2+O(u^3)$:

$$
\frac{u}{e^u-1}=\frac1{1+u/2+O(u^2)}
=1-\frac u2+O(u^2)\longrightarrow1.
$$

Thus

$$
\langle\hat H\rangle
=\thermal{k}_B\thermal{T}-\frac{\mechanical{\hbar}\signal{\omega}}2
+O\left(\frac{(\mechanical{\hbar}\signal{\omega})^2}{\thermal{k}_B\thermal{T}}\right)
\sim\thermal{k}_B\thermal{T}.
$$

The leading term applies when $\thermal{k}_B\thermal{T}\gg\mechanical{\hbar}\signal{\omega}$. The negative constant correction is consistent with the zero-energy ground state used here.

> [!note]
> The pure state and the thermal mixture have the same diagonal energy probabilities. The pure-state density operator also has off-diagonal entries $c_nc_m^*$ for $n\ne m$. The thermal mixture has no such entries in this basis. Thus the energy results agree, but other observables can distinguish the states.

## Answer

$$
\boxed{\thermal{Z}=\frac1{1-e^{-\thermal{\beta}\mechanical{\hbar}\signal{\omega}}},\qquad
\langle\hat H\rangle=\frac{\mechanical{\hbar}\signal{\omega}}
{e^{\thermal{\beta}\mechanical{\hbar}\signal{\omega}}-1}
\sim\thermal{k}_B\thermal{T}.}
$$

The limit assumes fixed positive level spacing and $\thermal{T}\to\infty$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}_n$, $\langle\hat H\rangle$ | $\unit{J}$ | Energy and mean energy | The given energy eigenvalues and their probability-weighted mean. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the level spacing. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The positive frequency that sets the level spacing. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse thermal energy | The reciprocal of Boltzmann constant times temperature. |
| $\thermal{k}_B$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The conversion factor between temperature and energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The positive thermal temperature. |
| $\thermal{Z}$ | $1$ | Partition function | The sum that normalizes the energy probabilities. |
| $c_n$ | $1$ | State amplitude | The coefficient of the nth energy eigenstate. |
| $\vert\psi\rangle$, $\vert n\rangle$ | $1$ | Quantum states | The normalized pure state and the energy basis states. |
