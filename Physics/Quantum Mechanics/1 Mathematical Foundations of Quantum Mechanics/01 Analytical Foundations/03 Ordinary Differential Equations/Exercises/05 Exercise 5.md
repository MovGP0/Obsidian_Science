---
title: "Square-box eigenstates and degeneracy"
---

> [!TLDR]
> Separation gives square-box states whose energies depend on the sum of two integer squares; distinct states can share one energy.

Chapter 3 — Ordinary Differential Equations · Exercise 5 · Intermediate level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

For a particle in a two-dimensional box $[0,\mechanical{L}]\times[0,\mechanical{L}]$,

$$
\hat H=-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}
\left(\frac{\partial^2}{\partial\mechanical{x}^2}
+\frac{\partial^2}{\partial\mechanical{y}^2}\right),
$$

with

$$
\signal{\psi}(0,\mechanical{y})
=\signal{\psi}(\mechanical{L},\mechanical{y})
=\signal{\psi}(\mechanical{x},0)
=\signal{\psi}(\mechanical{x},\mechanical{L})=0.
$$

**(a)** Use the separation ansatz $\signal{\psi}(\mechanical{x},\mechanical{y})=X(\mechanical{x})Y(\mechanical{y})$ to show that the eigenfunctions are

$$
\signal{\psi}_{n,m}
=\frac2{\mechanical{L}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{m\pi\mechanical{y}}{\mechanical{L}}\right),
$$

with energies

$$
\energy{E}_{n,m}
=\frac{\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}(n^2+m^2).
$$

**(b)** List the first six energy levels in ascending order. Which are degenerate?

> [!note]
> In the box-state labels, $n$ and $m$ are positive integer indices. The symbol $\mechanical{m}$ in the Hamiltonian's denominator is the particle mass. The source does not specify whether “first six energy levels” counts distinct energy values or individual states; state your counting convention.

## Worked solution

### (a) Separate the two coordinates

Inside the square, $\hat H\signal{\psi}=\energy{E}\signal{\psi}$. Insert $\signal{\psi}=XY$ and divide by $XY$ where it is nonzero:

$$
-\frac{\mechanical{\hbar}^2}{2\mechanical{m}}
\left(\frac{X''}{X}+\frac{Y''}{Y}\right)=\energy{E}.
$$

The first ratio depends only on $\mechanical{x}$; the second depends only on $\mechanical{y}$. Their sum is constant for all interior coordinates, so each ratio must be constant. Set

$$
X''+\signal{k}_x^2X=0,\qquad
Y''+\signal{k}_y^2Y=0,\qquad
\energy{E}=\frac{\mechanical{\hbar}^2}{2\mechanical{m}}
(\signal{k}_x^2+\signal{k}_y^2).
$$

The zero boundary conditions at the lower edges remove the cosine terms. The conditions at the upper edges require

$$
\signal{k}_x=\frac{n\pi}{\mechanical{L}},\qquad
\signal{k}_y=\frac{m\pi}{\mechanical{L}},\qquad n,m=1,2,3,\ldots.
$$

Zero or negative separation constants would give only the zero solution under both endpoint conditions. Normalize each one-dimensional factor, using $\int_0^{\mechanical{L}}\sin^2(n\pi\mechanical{x}/\mechanical{L})\,\mathrm{d}\mechanical{x}=\mechanical{L}/2$:

$$
X_n=\sqrt{\frac2{\mechanical{L}}}\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right),\qquad
Y_m=\sqrt{\frac2{\mechanical{L}}}\sin\left(\frac{m\pi\mechanical{y}}{\mechanical{L}}\right).
$$

Their product gives the question's normalized state:

$$
\signal{\psi}_{n,m}=\frac2{\mechanical{L}}
\sin\left(\frac{n\pi\mechanical{x}}{\mechanical{L}}\right)
\sin\left(\frac{m\pi\mechanical{y}}{\mechanical{L}}\right),
\qquad
\energy{E}_{n,m}=\frac{\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}(n^2+m^2).
$$

The double integral of $|\signal{\psi}_{n,m}|^2$ is the product of the two one-dimensional normalization integrals, hence equals one. Division by $XY$ was only a way to obtain the equations away from nodes; the resulting smooth functions satisfy the original equation at the nodes as well.

### (b) Order the levels and count the states

Count **distinct energy values** as levels. Define the common energy unit

$$
\energy{E}_*=\frac{\pi^2\mechanical{\hbar}^2}{2\mechanical{m}\mechanical{L}^2}.
$$

Order the possible sums of two positive integer squares. The first six are:

| Level | $\energy{E}/\energy{E}_*$ | State labels $(n,m)$ | Degeneracy |
| --- | --- | --- | --- |
| 1 | $2$ | $(1,1)$ | $1$ |
| 2 | $5$ | $(1,2),(2,1)$ | $2$ |
| 3 | $8$ | $(2,2)$ | $1$ |
| 4 | $10$ | $(1,3),(3,1)$ | $2$ |
| 5 | $13$ | $(2,3),(3,2)$ | $2$ |
| 6 | $17$ | $(1,4),(4,1)$ | $2$ |

For this range it is enough to check indices $1$ through $4$: any index $5$ gives a sum of at least $26$. Direct enumeration then gives no other sum below $17$.

For $n\ne m$, exchange of the two indices leaves the energy unchanged but gives a different spatial state. The two states are orthogonal, since at least one separated sine integral has unequal integer indices and is zero. They are therefore independent states at the same energy, not two names for one state. Any normalized linear combination in the same eigenspace also has that energy.

If “first six” instead means the first six **individual states**, with multiplicity, the energy list is $2,5,5,8,10,10$ in units of $\energy{E}_*$. This alternative stops after the two states at the fourth distinct level. Higher sums can have degeneracies beyond simple index exchange; none is needed in the first six distinct levels.

## Answer

The normalized eigenfunctions and energies are the expressions in part (a). With distinct energy values counted as levels, the first six energies are

$$
\energy{E}=\energy{E}_*\{2,5,8,10,13,17\}.
$$

Their degeneracies are $1,2,1,2,2,2$. If states are counted separately, the first six energies are $\energy{E}_*\{2,5,5,8,10,10\}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}_{n,m}$ | $\unit{m^{-1}}$ | Two-dimensional wavefunction | The normalized state in the square box. |
| $X,X_n,Y,Y_m$ | $\unit{m^{-1/2}}$ | Separated wavefunction factors | The normalized one-dimensional factors. |
| $\mechanical{x},\mechanical{y},\mechanical{L}$ | $\unit{m}$ | Coordinates and box length | The position coordinates and side length. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass, distinct from the integer state label m. |
| $\energy{E},\energy{E}_{n,m},\energy{E}_*$ | $\unit{J}$ | State energies and energy unit | The eigenenergies and their common scale. |
| $\signal{k}_x,\signal{k}_y$ | $\unit{m^{-1}}$ | Wave-number components | The oscillation rates along the two coordinates. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant in the kinetic energy. |
