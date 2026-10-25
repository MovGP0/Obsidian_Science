---
title: "Harmonic Oscillator Operators"
---

> [!TLDR]
> Ladder operators express position, momentum, and the oscillator Hamiltonian algebraically. Their commutator gives the equally spaced energy spectrum and the ground-state energy.

## Ladder operators

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

## Action on number states

$$
\hat a|n\rangle=\sqrt n\,|n-1\rangle,
\qquad
\hat a^{\dagger}|n\rangle=\sqrt{n+1}\,|n+1\rangle.
$$

## Energy levels

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}
\left(n+\frac12\right),
\qquad n=0,1,2,\ldots.
$$

## Position and momentum

$$
\hat x=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
(\hat a+\hat a^{\dagger}),
$$

$$
\hat p=i\sqrt{\frac{\mechanical{m}\signal{\omega}\mechanical{\hbar}}2}
(\hat a^{\dagger}-\hat a).
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The oscillator particle mass. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator's classical angular frequency. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the spectrum and ladder definitions. |
| $\energy{E_n}$ | $\unit{J}$ | Energy level | The energy of the number state $\vert n\rangle$. |
