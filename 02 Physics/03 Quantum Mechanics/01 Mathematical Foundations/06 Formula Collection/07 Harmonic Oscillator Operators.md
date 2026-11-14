---
title: "Harmonic Oscillator Operators"
---

> [!TLDR]
> Ladder operators express position, momentum, and the oscillator Hamiltonian algebraically. Their commutator gives the equally spaced energy spectrum and the ground-state energy.

## Ladder operators

Use these operators for the one-dimensional nonrelativistic oscillator with positive mass $\mechanical{m}$, positive angular frequency $\signal{\omega}$, and canonical position and momentum on the full real line. The Hamiltonian contains only the kinetic term and the quadratic potential about equilibrium. Near a stable minimum of a more general potential, this is an approximation whose accuracy depends on the occupied amplitudes.

$$
\hat a
=\sqrt{\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}}\hat x
+\frac{i}{\sqrt{2\mechanical{m}\mechanical{\hbar}\signal{\omega}}}\hat p,
$$

$$
\hat a^{\dagger}
=\sqrt{\frac{\mechanical{m}\signal{\omega}}{2\mechanical{\hbar}}}\hat x
-\frac{i}{\sqrt{2\mechanical{m}\mechanical{\hbar}\signal{\omega}}}\hat p.
$$

> [!note] Source correction — Imaginary factors
> The source formula collection prints $1$ in both momentum coefficients. The coefficients must be $+i$ and $-i$ for these operators to be adjoints and to give the stated commutator. The corrected definitions also agree with the position and momentum formulas below.

## Commutator and Hamiltonian

$$
[\hat a,\hat a^{\dagger}]=\hat I,
\qquad
\hat H=\mechanical{\hbar}\signal{\omega}
\left(\hat a^{\dagger}\hat a+\frac12\hat I\right).
$$

The ladder operators are dimensionless. Multiplying their definitions gives $\hat a^\dagger\hat a$ as the quadratic position and momentum terms minus $\hat I/2$; the canonical commutator supplies this last term. Thus operator ordering explains the energy offset. This algebra is useful because it gives energies and matrix elements without solving a differential equation for each state.

## Action on number states

$$
\hat a|n\rangle=\sqrt n\,|n-1\rangle,
\qquad
\hat a^{\dagger}|n\rangle=\sqrt{n+1}\,|n+1\rangle.
$$

The number states are orthonormal eigenstates of $\hat a^\dagger\hat a$ with nonnegative integer eigenvalue $n$. At the lower boundary, $\hat a|0\rangle=0$: the zero vector is produced, not a physical state with number $-1$. The square-root coefficients follow by taking the squared norm of each ladder action.

## Energy levels

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}
\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
$$

Adjacent levels differ by $\mechanical{\hbar}\signal{\omega}$ and the lowest energy is $\mechanical{\hbar}\signal{\omega}/2$. Setting both position and momentum sharply to zero would contradict their canonical commutator, so the classical zero-energy equilibrium is not a quantum number state. The equal spacing is specific to a quadratic Hamiltonian; anharmonic terms generally change it.

## Position and momentum

$$
\hat x=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
(\hat a+\hat a^{\dagger}),
$$

$$
\hat p=i\sqrt{\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2}
(\hat a^{\dagger}-\hat a).
$$

The position coefficient has units of length and the momentum coefficient has units of momentum. Their product is $\mechanical{\hbar}/2$; together with $[\hat a,\hat a^\dagger]=I$, the inverse formulas recover $[\hat x,\hat p]=i\mechanical{\hbar}I$. This checks the factors of two and the momentum sign. The limit $\signal{\omega}\to0$ makes the ladder definitions singular, so it cannot be taken by simply setting the frequency to zero in this basis.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The oscillator particle mass. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator's classical angular frequency. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the spectrum and ladder definitions. |
| $\energy{E_n}$ | $\unit{J}$ | Energy level | The energy of the number state $\vert n\rangle$. |
