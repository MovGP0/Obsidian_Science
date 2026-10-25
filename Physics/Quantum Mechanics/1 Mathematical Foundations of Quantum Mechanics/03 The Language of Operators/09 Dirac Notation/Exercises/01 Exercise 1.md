---
title: "Bras, complex conjugation, and overlaps"
---

> [!TLDR]
> Take the conjugate transpose to form a bra, then use orthonormality to calculate overlaps.

Chapter 9 — Dirac Notation · Exercise 1 · Basic level

Back to [[09 Dirac Notation/10 Exercises#Exercise 1|Chapter 9 exercise index]].

## Question

Write the bras corresponding to these kets:

**(a)**

$$
|\psi\rangle=\frac1{\sqrt2}(|\uparrow\rangle+i|\downarrow\rangle).
$$

**(b)**

$$
|\phi\rangle=\frac1{\sqrt5}(2|\uparrow\rangle-i|\downarrow\rangle).
$$

**(c)**

$$
|\chi\rangle=\alpha|a\rangle+\beta|b\rangle,
\qquad|\alpha|^2+|\beta|^2=1.
$$

Calculate $\langle\psi|\phi\rangle$ and $\langle\phi|\psi\rangle$. Verify conjugate symmetry.

## Worked solution

### (a) Form the bra of ψ

The adjoint changes each ket into a bra and conjugates each coefficient. In particular, $i^*=-i$. Thus

$$
\langle\psi|=\left[\frac1{\sqrt2}(|\uparrow\rangle+i|\downarrow\rangle)\right]^\dagger
=\frac1{\sqrt2}(\langle\uparrow|-i\langle\downarrow|).
$$

### (b) Form the bra of φ

The coefficient $-i$ becomes $+i$, while the real coefficients remain the same:

$$
\langle\phi|=\frac1{\sqrt5}(2\langle\uparrow|+i\langle\downarrow|).
$$

### (c) Form the general bra and calculate both overlaps

The same adjoint rule gives

$$
\langle\chi|=\alpha^*\langle a|+\beta^*\langle b|.
$$

This rule does not require $|a\rangle$ and $|b\rangle$ to be orthogonal. However, the stated coefficient condition guarantees normalization only if they are orthonormal, or if their cross terms otherwise cancel.

For the overlap, use the common orthonormal arrow basis: $\langle\uparrow|\uparrow\rangle=\langle\downarrow|\downarrow\rangle=1$ and $\langle\uparrow|\downarrow\rangle=\langle\downarrow|\uparrow\rangle=0$. Expanding all four products gives

$$
\begin{aligned}
\langle\psi|\phi\rangle
&=\frac1{\sqrt{10}}(\langle\uparrow|-i\langle\downarrow|)(2|\uparrow\rangle-i|\downarrow\rangle)\\
&=\frac1{\sqrt{10}}\left[2-i(0)-2i(0)+(-i)(-i)\right]\\
&=\frac{2-1}{\sqrt{10}}=\frac1{\sqrt{10}}.
\end{aligned}
$$

Calculate the reverse overlap directly as a check:

$$
\begin{aligned}
\langle\phi|\psi\rangle
&=\frac1{\sqrt{10}}(2\langle\uparrow|+i\langle\downarrow|)(|\uparrow\rangle+i|\downarrow\rangle)\\
&=\frac{2+i^2}{\sqrt{10}}=\frac1{\sqrt{10}}
=\langle\psi|\phi\rangle^*.
\end{aligned}
$$

> [!note] Basis labels
> If numeric labels replace the arrows, first identify $|1\rangle=|\uparrow\rangle$ and $|2\rangle=|\downarrow\rangle$. Coefficients from different bases cannot determine an overlap without the relation between those bases.

## Answer

The bras are $\langle\psi|=(\langle\uparrow|-i\langle\downarrow|)/\sqrt2$, $\langle\phi|=(2\langle\uparrow|+i\langle\downarrow|)/\sqrt5$, and $\langle\chi|=\alpha^*\langle a|+\beta^*\langle b|$. Both overlaps equal $1/\sqrt{10}$ in the common orthonormal arrow basis, so conjugate symmetry holds.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\alpha$, $\beta$ | $1$ | State amplitude | The coefficients of the kets in the general two-state expansion. |
| $\langle\psi\vert\phi\rangle$, $\langle\phi\vert\psi\rangle$ | $1$ | Overlap amplitude | The complex amplitudes for the overlap of the two states. |
