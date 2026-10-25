---
title: "Pauli Matrices and Spin Operators"
---

> [!TLDR]
> The Pauli matrices give the algebra and eigenstates of a spin-½ system. Their squares equal the identity, which makes their exponentials simple to calculate.

## Pauli matrices

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},
\qquad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

For spin $\tfrac12$, the corresponding spin operators are $\hat S_i=\mechanical{\hbar}\sigma_i/2$.

## Algebra

$$
\sigma_i^2=\hat I,
\qquad
\sigma_x\sigma_y=i\sigma_z
\quad\text{and cyclic permutations}.
$$

$$
[\sigma_i,\sigma_j]
=2i\sum_k\varepsilon_{ijk}\sigma_k,
\qquad
\{\sigma_i,\sigma_j\}=2\delta_{ij}\hat I.
$$

Here, $i,j,k\in\{x,y,z\}$, $\varepsilon_{ijk}$ is the Levi-Civita symbol, and braces denote the anticommutator.

## Exponentials

$$
\begin{aligned}
e^{i\signal{\theta}\sigma_z/2}
&=\cos(\signal{\theta}/2)\hat I
+i\sin(\signal{\theta}/2)\sigma_z\\
&=\begin{pmatrix}
e^{i\signal{\theta}/2}&0\\
0&e^{-i\signal{\theta}/2}
\end{pmatrix}.
\end{aligned}
$$

$$
e^{i\signal{\theta}\sigma_x/2}
=\begin{pmatrix}
\cos(\signal{\theta}/2)&i\sin(\signal{\theta}/2)\\
i\sin(\signal{\theta}/2)&\cos(\signal{\theta}/2)
\end{pmatrix}.
$$

These formulas use the source's positive sign in the exponent. In the active-rotation convention $\hat R_i(\signal{\theta})=e^{-i\signal{\theta}\hat S_i/\mechanical{\hbar}}$, the displayed exponentials correspond to angle $-\signal{\theta}$.

## Eigenstates

For $\sigma_z$,

$$
|\uparrow\rangle=\begin{pmatrix}1\\0\end{pmatrix},
\qquad
|\downarrow\rangle=\begin{pmatrix}0\\1\end{pmatrix}.
$$

For $\sigma_x$,

$$
|+x\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},
\qquad
|-x\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}.
$$

For $\sigma_y$,

$$
|+y\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix},
\qquad
|-y\rangle=\frac1{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}.
$$

In each pair, the first state has Pauli eigenvalue $+1$ and the second has eigenvalue $-1$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The scale relating spin operators to Pauli matrices. |
| $\signal{\theta}$ | $\unit{rad}$ | Rotation parameter | The angle parameter in the unitary exponentials. |
