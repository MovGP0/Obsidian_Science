---
title: "Spin uncertainties in the up state"
---

> [!TLDR]
> The up state has no uncertainty in its vertical spin component and saturates the transverse spin uncertainty bound.

Chapter 10 — Commutators and Operator Algebra · Exercise 3 · Basic level.

Back to [[10 Commutators and Operator Algebra/08 Exercises|Chapter 10 exercises]].

## Question

For $|\psi\rangle=|\uparrow\rangle$, calculate $\mechanical{\Delta S_x}$, $\mechanical{\Delta S_y}$, and $\mechanical{\Delta S_z}$. Verify

$$
\mechanical{\Delta S_x}\,\mechanical{\Delta S_y}
=\frac{\mechanical{\hbar}}2|\langle\hat S_z\rangle|.
$$

## Worked solution

Use the normalized column vector $|\uparrow\rangle=(1,0)^{\mathsf T}$ and the spin operators $\hat S_j=(\mechanical{\hbar}/2)\sigma_j$ for $j=x,y,z$. A standard deviation is the square root of the variance:

$$
(\mechanical{\Delta S_j})^2
=\langle\hat S_j^2\rangle-\langle\hat S_j\rangle^2.
$$

First calculate the three means. Matrix multiplication gives

$$
\sigma_x|\uparrow\rangle=\begin{pmatrix}0\\1\end{pmatrix},
\quad
\sigma_y|\uparrow\rangle=\begin{pmatrix}0\\i\end{pmatrix},
\quad
\sigma_z|\uparrow\rangle=\begin{pmatrix}1\\0\end{pmatrix}.
$$

Multiplication from the left by $\langle\uparrow|=(1,0)$ gives

$$
\langle\sigma_x\rangle=0,\qquad
\langle\sigma_y\rangle=0,\qquad
\langle\sigma_z\rangle=1.
$$

Thus $\langle\hat S_x\rangle=\langle\hat S_y\rangle=0$ and $\langle\hat S_z\rangle=\mechanical{\hbar}/2$.

Each Pauli matrix satisfies $\sigma_j^2=\hat I$. The state is normalized, so every second moment is

$$
\langle\hat S_j^2\rangle
=\frac{\mechanical{\hbar}^2}{4}\langle\uparrow|\hat I|\uparrow\rangle
=\frac{\mechanical{\hbar}^2}{4}.
$$

Substitute the means into the variance formula:

$$
\begin{aligned}
(\mechanical{\Delta S_x})^2&=\frac{\mechanical{\hbar}^2}{4}-0,
& (\mechanical{\Delta S_y})^2&=\frac{\mechanical{\hbar}^2}{4}-0,\\
(\mechanical{\Delta S_z})^2&=\frac{\mechanical{\hbar}^2}{4}
-\left(\frac{\mechanical{\hbar}}2\right)^2=0.
\end{aligned}
$$

Finally compare both sides of the bound:

$$
\mechanical{\Delta S_x}\mechanical{\Delta S_y}
=\frac{\mechanical{\hbar}^2}{4},
\qquad
\frac{\mechanical{\hbar}}2\left|\langle\hat S_z\rangle\right|
=\frac{\mechanical{\hbar}}2\frac{\mechanical{\hbar}}2
=\frac{\mechanical{\hbar}^2}{4}.
$$

The vertical spin component is definite in this state. The transverse components have nonzero uncertainties and attain equality in the bound.

## Answer

$$
\mechanical{\Delta S_x}=\mechanical{\Delta S_y}=\frac{\mechanical{\hbar}}2,
\qquad
\mechanical{\Delta S_z}=0,
\qquad
\mechanical{\Delta S_x}\mechanical{\Delta S_y}
=\frac{\mechanical{\hbar}}2|\langle\hat S_z\rangle|
=\frac{\mechanical{\hbar}^2}{4}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the spin scale. |
| $\langle\hat S_j\rangle$ | $\unit{J\,s}$ | Mean spin component | The mean for axis $j=x,y,z$. |
| $\langle\hat S_j^2\rangle$ | $\unit{J^2\,s^2}$ | Second spin moment | The mean square of a spin component. |
| $\mechanical{\Delta S_j}$ | $\unit{J\,s}$ | Spin uncertainty | The standard deviation for axis $j=x,y,z$. |
