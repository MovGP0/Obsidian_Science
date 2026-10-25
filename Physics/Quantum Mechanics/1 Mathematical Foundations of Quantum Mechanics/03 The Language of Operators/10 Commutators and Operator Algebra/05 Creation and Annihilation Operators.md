---
title: "Creation and Annihilation Operators"
---

> [!TLDR]
> Ladder operators turn the harmonic-oscillator problem into operator algebra. Their canonical commutator, together with the oscillator Hamiltonian and physical state conditions, gives equally spaced energy levels.

A powerful application of commutators is the algebraic solution of the quantum harmonic oscillator, without solving a differential equation.

Define the **ladder operators**:

$$
\hat a=\sqrt{\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}}\hat x
+\frac{i}{\sqrt{2\mechanical{m}\mechanical{\hbar}\signal{\omega}}}\hat p,
$$

$$
\hat a^\dagger=\sqrt{\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}}\hat x
-\frac{i}{\sqrt{2\mechanical{m}\mechanical{\hbar}\signal{\omega}}}\hat p.
$$

## Example — The commutator [â, â†]

Using the definitions and the canonical relation,

$$
\begin{aligned}
[\hat a,\hat a^\dagger]
&=\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}[\hat x,\hat x]
-\frac{i}{2\mechanical{\hbar}}[\hat x,\hat p]
+\frac{i}{2\mechanical{\hbar}}[\hat p,\hat x]
+\frac1{2\mechanical{m}\mechanical{\hbar}\signal{\omega}}[\hat p,\hat p]\\
&=0-\frac{i}{2\mechanical{\hbar}}(i\mechanical{\hbar})
+\frac{i}{2\mechanical{\hbar}}(-i\mechanical{\hbar})+0\\
&=\frac12+\frac12=1.
\end{aligned}
$$

The scalar $1$ here denotes the identity operator.

> [!note]
> The source’s intermediate calculation omits factors of $i$ and has inconsistent signs. The calculation above retains the stated ladder-operator definitions and corrects those intermediate terms. Its final result, $[\hat a,\hat a^\dagger]=\hat I$, agrees with the source.

The Hamiltonian becomes

$$
\hat H=\mechanical{\hbar}\signal{\omega}
\left(\hat a^\dagger\hat a+\frac12\hat I\right).
$$

Its energy eigenvalues follow algebraically:

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
$$

The spectrum contains infinitely many equally spaced levels and the zero-point energy $\mechanical{\hbar}\signal{\omega}/2$.

> [!note]
> The source attributes this entire spectral structure to the single commutator. The derivation also uses the displayed form of the Hamiltonian, positivity of $\hat a^\dagger\hat a$, and the normalizable oscillator-state representation with a lowest state. The commutator alone, without these conditions, is not a complete specification of the physical spectrum.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The oscillator mass. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator angular frequency. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the energy spacing. |
| $\energy{E_n}$ | $\unit{J}$ | Energy | The energy of the oscillator level labelled $n$. |
