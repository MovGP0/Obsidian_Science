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

These matrices use the ordered basis $(|\uparrow\rangle,|\downarrow\rangle)$ of eigenstates along the positive $z$ direction. Each matrix is Hermitian and dimensionless; the factor of reduced Planck constant supplies the units of spin. A general two-level system can use the same matrix algebra, but its two levels need not represent physical angular momentum.

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

With a right-handed axis order, $\sigma_x\sigma_y=i\sigma_z$ and $\sigma_y\sigma_x=-i\sigma_z$. Thus the ordered product matters even though each square is the identity. Use the commutator for rotation generators and the anticommutator to simplify squared spin components.

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

The exponential splits into even and odd powers. Since $\sigma_i^2=I$, the even powers give cosine and the odd powers give sine; no matrix diagonalization is needed. At $\signal{\theta}=0$ the result is $I$, and at $\signal{\theta}=2\pi$ it is $-I$. The latter changes the overall sign of an isolated spinor but leaves its measurement probabilities unchanged. A relative phase between separate coherent paths can still matter.

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

The corresponding spin measurement values are $+\mechanical{\hbar}/2$ and $-\mechanical{\hbar}/2$. As a basis check, $|+x\rangle=(|\uparrow\rangle+|\downarrow\rangle)/\sqrt2$ is normalized and gives probability $1/2$ for either $z$ outcome, while an $x$ measurement gives the positive outcome with probability one. This distinguishes a state vector from a list of outcomes independent of the measurement axis.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The scale relating spin operators to Pauli matrices. |
| $\signal{\theta}$ | $\unit{rad}$ | Rotation parameter | The angle parameter in the unitary exponentials. |
