---
title: "Position matrix in the harmonic oscillator basis"
---

> [!TLDR]
> The position operator connects adjacent oscillator states. The first three rows and columns give a finite block of its infinite matrix.

Chapter 5 · Exercise 10 · Challenge level.

Back to [[05 Matrices and Linear Operators/08 Exercises#Exercise 10|Chapter 5 exercises]].

## Question

The position operator $\hat x$ acts on $L^2(\mathbb{R})$. In the harmonic oscillator's energy eigenbasis $|n\rangle$, with $n=0,1,2,\ldots$, it can be written as an infinite matrix.

Given

$$
\hat x=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
(\hat a+\hat a^\dagger),
$$

$$
\hat a|n\rangle=\sqrt n\,|n-1\rangle,
\qquad\hat a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle,
$$

write the matrix entries $\langle m|\hat x|n\rangle$ for $m,n=0,1,2$.

> [!note]
> The labels $m,n$ on the states are integer indices. The symbol $\mechanical{m}$ in the prefactor is the particle mass. The requested entries form a finite block of the infinite matrix; the three-state subspace need not be invariant under $\hat x$.
>
> The position operator is unbounded and has a specified domain within $L^2(\mathbb{R})$, rather than acting on every square-integrable function without restriction.

## Worked solution

To distinguish mass from the row label $m$, write the particle mass as $\mechanical{M}$ in the solution. Define the position scale

$$
\mechanical{x_0}=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{M}\signal{\omega}}}.
$$

Apply the given operator to a basis state, then use $\langle m|k\rangle=\delta_{mk}$:

$$
\hat x|n\rangle=\mechanical{x_0}\bigl(\sqrt n\,|n-1\rangle+\sqrt{n+1}\,|n+1\rangle\bigr),
$$

$$
\langle m|\hat x|n\rangle
=\mechanical{x_0}\left(\sqrt n\,\delta_{m,n-1}+\sqrt{n+1}\,\delta_{m,n+1}\right).
$$

The Kronecker deltas show why only adjacent row and column labels can give nonzero entries. At $n=0$, the lowering term is zero; no state with label $-1$ is needed.

Calculate the first three columns from the action on the first three states:

$$
\begin{aligned}
\hat x|0\rangle&=\mechanical{x_0}|1\rangle,\\
\hat x|1\rangle&=\mechanical{x_0}\bigl(|0\rangle+\sqrt2|2\rangle\bigr),\\
\hat x|2\rangle&=\mechanical{x_0}\bigl(\sqrt2|1\rangle+\sqrt3|3\rangle\bigr).
\end{aligned}
$$

Retain rows $m=0,1,2$ from each column. The $|3\rangle$ contribution in the last line lies outside those rows:

$$
\bigl(\langle m|\hat x|n\rangle\bigr)_{m,n=0}^{2}
=\mechanical{x_0}\begin{pmatrix}0&1&0\\1&0&\sqrt2\\0&\sqrt2&0\end{pmatrix}.
$$

The real symmetric block is consistent with the Hermiticity of position. It is the matrix of $P\hat xP$ on the three-state subspace, where $P=\sum_{n=0}^{2}|n\rangle\langle n|$. It does not contain the complete action of $\hat x$: the $|2\rangle$ state also couples to $|3\rangle$. The subspace is therefore not invariant under the full operator.

The oscillator eigenstates used here are in the position operator's domain. The calculation does not require the unbounded operator to act on every element of $L^2(\mathbb R)$.

## Answer

$$
\boxed{\bigl(\langle m|\hat x|n\rangle\bigr)_{m,n=0}^{2}
=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{M}\signal{\omega}}}
\begin{pmatrix}0&1&0\\1&0&\sqrt2\\0&\sqrt2&0\end{pmatrix}}.
$$

Here $\mechanical{M}$ is the particle mass called $\mechanical{m}$ in the question. This is a finite block of the infinite position matrix.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\langle m\vert\hat x\vert n\rangle$ | $\unit{m}$ | Position matrix element | The position entry for row $m$ and column $n$. |
| $\mechanical{x_0}$ | $\unit{m}$ | Position scale | The common factor in the oscillator position matrix. |
| $\mechanical{m},\mechanical{M}$ | $\unit{kg}$ | Particle mass | The same mass, with $M$ used to avoid the row index $m$. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | The oscillator angular frequency. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The constant that sets the oscillator position scale. |
