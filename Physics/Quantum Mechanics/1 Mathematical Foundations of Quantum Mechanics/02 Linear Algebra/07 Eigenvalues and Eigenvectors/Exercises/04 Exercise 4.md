---
title: "Diagonalize a coupled two-level Hamiltonian"
---

> [!TLDR]
> Symmetric and antisymmetric states diagonalize the coupled Hamiltonian, with an energy gap equal to twice the coupling magnitude.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 4 · Intermediate level.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 4|Back to the chapter exercise index]].

## Question

Diagonalize

$$
H=\begin{pmatrix}\energy{E_0}&\energy{\Delta}\\\energy{\Delta}&\energy{E_0}\end{pmatrix},
\qquad\energy{E_0},\energy{\Delta}\in\mathbb R.
$$

Find the eigenvalues and eigenstates.

**Physical interpretation:** This is the Hamiltonian of a two-level system with coupling $\energy{\Delta}$. It is a standard model for the $\mathrm{NH_3}$ molecule or a double-well potential. See Fig. 7.1 in [[04 Diagonalization Methods]].

## Worked solution

First find the allowed energies from the characteristic equation:

$$
\det(H-\energy{E}I)
=(\energy{E_0}-\energy{E})^2-\energy{\Delta}^2=0.
$$

Factor this expression to obtain

$$
\energy{E_+}=\energy{E_0}+\energy{\Delta},
\qquad
\energy{E_-}=\energy{E_0}-\energy{\Delta}.
$$

For $\energy{\Delta}\ne0$, solve for each state. At $\energy{E_+}$, the first row of the eigenvalue equation is $-\energy{\Delta}v_1+\energy{\Delta}v_2=0$, so $v_2=v_1$. At $\energy{E_-}$, it is $\energy{\Delta}v_1+\energy{\Delta}v_2=0$, so $v_2=-v_1$. Unit normalization gives

$$
|+\rangle=\frac{|\uparrow\rangle+|\downarrow\rangle}{\sqrt2},
\qquad
|-\rangle=\frac{|\uparrow\rangle-|\downarrow\rangle}{\sqrt2}.
$$

Their squared norms are $(1+1)/2=1$, and $\langle+|-\rangle=(1-1)/2=0$. Put these eigenvectors in the columns of $U$:

$$
U=\frac1{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},
\qquad U^\dagger U=I.
$$

Direct multiplication gives

$$
HU=\frac1{\sqrt2}
\begin{pmatrix}
\energy{E_0}+\energy{\Delta}&\energy{E_0}-\energy{\Delta}\\
\energy{E_0}+\energy{\Delta}&-(\energy{E_0}-\energy{\Delta})
\end{pmatrix}
=U\begin{pmatrix}\energy{E_+}&0\\0&\energy{E_-}\end{pmatrix}.
$$

Thus $U^\dagger HU=\operatorname{diag}(\energy{E_+},\energy{E_-})$.

The labels $+$ and $-$ specify the symmetric and antisymmetric states. They do not always specify the higher and lower energy. If $\energy{\Delta}>0$, the symmetric state has the higher energy. If $\energy{\Delta}<0$, it has the lower energy. The positive gap is

$$
|\energy{E_+}-\energy{E_-}|=2|\energy{\Delta}|.
$$

At $\energy{\Delta}=0$, the Hamiltonian is $\energy{E_0}I$. The eigenvalue $\energy{E_0}$ has multiplicity two, and every nonzero vector is an eigenvector. The two states above remain one valid orthonormal eigenbasis. A nonzero coupling removes this degeneracy.

## Answer

The eigenpairs are $(\energy{E_0}+\energy{\Delta},|+\rangle)$ and $(\energy{E_0}-\energy{\Delta},|-\rangle)$. The matrix $U$ above diagonalizes $H$. The gap is $2|\energy{\Delta}|$, and the levels are degenerate only when $\energy{\Delta}=0$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E_0}$ | $\unit{J}$ | Uncoupled energy | The common energy before coupling. |
| $\energy{\Delta}$ | $\unit{J}$ | Coupling energy | The real coupling between the two basis states. |
| $\energy{E},\energy{E_+},\energy{E_-}$ | $\unit{J}$ | Energy | A trial energy and the two energy eigenvalues. |
