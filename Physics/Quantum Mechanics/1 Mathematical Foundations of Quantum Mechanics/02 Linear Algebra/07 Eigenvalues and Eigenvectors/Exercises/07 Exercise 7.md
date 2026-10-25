---
title: "Derive the harmonic-oscillator spectrum with ladder operators"
---

> [!TLDR]
> Positivity forces the lowering sequence to end at zero, which gives integer occupation numbers and a nonzero ground-state energy.

Chapter 7 — Eigenvalues and Eigenvectors · Exercise 7 · Challenge.

[[07 Eigenvalues and Eigenvectors/07 Exercises#Exercise 7|Back to the chapter exercise index]].

## Question

The quantum harmonic oscillator has Hamiltonian

$$
\hat H=\mechanical{\hbar}\signal{\omega}\left(\hat N+\frac12\right),
\qquad\hat N=\hat a^\dagger\hat a,
\qquad[\hat a,\hat a^\dagger]=1.
$$

**(a)** Show that if $\hat N|n\rangle=n|n\rangle$, then

$$
\hat N(\hat a|n\rangle)=(n-1)(\hat a|n\rangle).
$$

**(b)** Deduce that the eigenvalues of $\hat N$ are the nonnegative integers $0,1,2,\ldots$.

**(c)** Write the energies

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}\left(n+\frac12\right).
$$

What does $\mechanical{\hbar}\signal{\omega}/2$ represent?

> [!note]
> Part (b) concerns the usual harmonic-oscillator Hilbert space, normalized states, and the common domain of the ladder operators. The lowering relation in part (a) alone is not a complete argument; the positivity of $\hat N=\hat a^\dagger\hat a$ must also be used.

## Worked solution

Assume the usual oscillator representation, $\signal{\omega}>0$, normalized states, and a common invariant domain for the ladder operators. These conditions permit the operator products and repeated lowering steps below.

### (a) Derive the lowering relation

Start with $[\hat a,\hat a^\dagger]=I$. It gives $\hat a\hat a^\dagger=\hat a^\dagger\hat a+I$. Multiply on the right by $\hat a$:

$$
\hat a\hat a^\dagger\hat a
=\hat a^\dagger\hat a\hat a+\hat a.
$$

Using $\hat N=\hat a^\dagger\hat a$, this becomes $\hat a\hat N=\hat N\hat a+\hat a$, or

$$
[\hat N,\hat a]=\hat N\hat a-\hat a\hat N=-\hat a.
$$

Apply this identity to an eigenstate:

$$
\begin{aligned}
\hat N(\hat a|n\rangle)
&=(\hat a\hat N-\hat a)|n\rangle\\
&=\hat a(n|n\rangle)-\hat a|n\rangle\\
&=(n-1)(\hat a|n\rangle).
\end{aligned}
$$

If $\hat a|n\rangle\ne0$, it is an eigenvector with eigenvalue $n-1$. If it is zero, the equality still holds, but the zero vector is not an eigenvector. This distinction is essential at the bottom of the sequence.

### (b) Prove nonnegative integer eigenvalues

First use positivity. For a normalized eigenstate,

$$
n=\langle n|\hat N|n\rangle
=\langle n|\hat a^\dagger\hat a|n\rangle
=\|\hat a|n\rangle\|^2\ge0.
$$

This also determines when a lowering step can vanish: it vanishes exactly when the current eigenvalue is zero.

Now suppose that an eigenvalue is not an integer. Write $n=k+r$, where $k\ge0$ is an integer and $0<r<1$. Each of the first $k$ lowering steps has a strictly positive squared norm after normalization. Thus it produces a nonzero state, and the final normalized state $|r\rangle$ has eigenvalue $r$.

A further lowering step also has positive norm, since

$$
\|\hat a|r\rangle\|^2=r>0.
$$

Part (a) says that this nonzero state has eigenvalue $r-1<0$. That contradicts positivity. Therefore $r$ cannot occur, and every allowed eigenvalue is an integer $n\ge0$.

For an integer starting value $n$, repeated lowering reaches a normalized state $|0\rangle$, where

$$
\|\hat a|0\rangle\|^2=0,
\qquad
\hat a|0\rangle=0.
$$

To show that every nonnegative integer occurs in the usual oscillator, start with its nonzero vacuum $|0\rangle$ and raise it. The same commutator gives

$$
\hat N\hat a^\dagger
=\hat a^\dagger(\hat N+I),
\qquad
\|\hat a^\dagger|n\rangle\|^2
=\langle n|\hat a\hat a^\dagger|n\rangle=n+1>0.
$$

Thus raising always produces a nonzero eigenvector with eigenvalue $n+1$. The normalized relations are

$$
\hat a|n\rangle=\sqrt n\,|n-1\rangle\quad(n\ge1),
\qquad
\hat a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle,
$$

and one can construct

$$
|n\rangle=\frac{(\hat a^\dagger)^n}{\sqrt{n!}}|0\rangle,
\qquad n=0,1,2,\ldots.
$$

The norm factor follows by applying the raising norm $\sqrt{n+1}$ at each step. In the usual one-dimensional oscillator, each level is nondegenerate. The commutator alone would also allow separate copies of this ladder, so the usual oscillator representation remains part of the assumption.

### (c) Energy levels and zero-point energy

Apply the Hamiltonian to $|n\rangle$:

$$
\hat H|n\rangle
=\mechanical{\hbar}\signal{\omega}
\left(\hat N+\frac12I\right)|n\rangle
=\mechanical{\hbar}\signal{\omega}\left(n+\frac12\right)|n\rangle.
$$

Therefore,

$$
\energy{E_n}=\mechanical{\hbar}\signal{\omega}\left(n+\frac12\right),
\qquad
\energy{E_0}=\frac{\mechanical{\hbar}\signal{\omega}}2.
$$

The second expression is the zero-point energy: the total energy of the ground state. The oscillator cannot have both exactly zero position and exactly zero momentum uncertainty.

To distinguish total energy from kinetic energy, use the usual position and momentum operators:

$$
\hat x=\sqrt{\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}}}
(\hat a+\hat a^\dagger),
\qquad
\hat p=i\sqrt{\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}}2}
(\hat a^\dagger-\hat a).
$$

In the vacuum, $\langle0|\hat a^\dagger\hat a|0\rangle=0$ and $\langle0|\hat a\hat a^\dagger|0\rangle=1$. The terms with two lowering or two raising operators have zero expectation value. It follows that

$$
\mechanical{\langle x^2\rangle}_0
=\frac{\mechanical{\hbar}}{2\mechanical{m}\signal{\omega}},
\qquad
\mechanical{\langle p^2\rangle}_0
=\frac{\mechanical{m}\mechanical{\hbar}\signal{\omega}}2.
$$

Thus the kinetic and potential contributions are

$$
\energy{\langle K\rangle}_0
=\frac{\mechanical{\langle p^2\rangle}_0}{2\mechanical{m}}
=\frac{\mechanical{\hbar}\signal{\omega}}4,
\qquad
\energy{\langle V\rangle}_0
=\frac12\mechanical{m}\signal{\omega}^2\mechanical{\langle x^2\rangle}_0
=\frac{\mechanical{\hbar}\signal{\omega}}4.
$$

Their sum is $\energy{E_0}$. The zero-point energy is therefore the total ground-state energy, with equal kinetic and potential parts.

## Answer

(a) $\hat N(\hat a|n\rangle)=(n-1)\hat a|n\rangle$, with a nonzero lowered state when $n>0$.

(b) Positivity excludes negative and fractional eigenvalues; the oscillator vacuum and raising operator generate $n=0,1,2,\ldots$.

(c) $\energy{E_n}=\mechanical{\hbar}\signal{\omega}(n+1/2)$. The zero-point energy $\mechanical{\hbar}\signal{\omega}/2$ is the total ground-state energy. The ground-state kinetic and potential energies are each $\mechanical{\hbar}\signal{\omega}/4$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $n$ | $1$ | Excitation number | The number eigenvalue of an oscillator state. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action in the oscillator Hamiltonian. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The positive oscillator angular frequency. |
| $\energy{E_n},\energy{E_0}$ | $\unit{J}$ | Oscillator energies | The energy of level n and of the ground state. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The oscillator particle mass. |
| $\mechanical{\langle x^2\rangle}_0$ | $\unit{m^2}$ | Ground-state position second moment | The mean squared position in the vacuum. |
| $\mechanical{\langle p^2\rangle}_0$ | $\unit{kg^2\,m^2\,s^{-2}}$ | Ground-state momentum second moment | The mean squared momentum in the vacuum. |
| $\energy{\langle K\rangle}_0$ | $\unit{J}$ | Ground-state kinetic energy | The mean kinetic part of the vacuum energy. |
| $\energy{\langle V\rangle}_0$ | $\unit{J}$ | Ground-state potential energy | The mean potential part of the vacuum energy. |
