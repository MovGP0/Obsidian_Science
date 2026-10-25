---
title: "Antiunitary time reversal and Kramers pairs"
---

> [!TLDR]
> Time reversal conjugates complex coefficients, reverses momentum, and gives Kramers pairs when its square is minus the identity.

Chapter: [[11 Unitary Operators/00 Unitary Operators|Chapter 11 — Unitary Operators]]. Exercise 7. Difficulty: **Challenge**.

Back to [[11 Unitary Operators/08 Exercises#Exercise 7|Chapter 11 exercise index]].

## Question

Wigner’s theorem states that a quantum symmetry preserving transition probabilities is represented on the Hilbert space by a unitary or antiunitary operator. An antiunitary operator is antilinear:

$$
\hat A(\alpha|\psi\rangle)=\alpha^*\hat A|\psi\rangle.
$$

**(a)** The time-reversal operator $\hat T$ satisfies

$$
\hat T\,i\,\hat T^{-1}=-i.
$$

Why can it not be unitary?

**(b)** For a spin-zero particle, time reversal acts as

$$
\hat T\signal{\psi}(\mechanical{x},\signal{t})
=\signal{\psi}^*(\mechanical{x},-\signal{t}).
$$

Verify that it reverses momentum:

$$
\hat T\hat p\hat T^{-1}=-\hat p.
$$

**(c)** For spin one half, use $\hat T=i\sigma_yK$, where $K$ is complex conjugation. Calculate $\hat T^2$ and discuss the result for fermions.

> [!note]
> The symbol $\hat T$ in this exercise denotes time reversal. Earlier in the chapter, $\hat T(\mechanical{a})$ denotes a spatial translation. These are different transformations. Antilinearity alone does not define antiunitarity; transition-probability preservation is also part of the theorem’s setting.

## Worked solution

### (a) Why time reversal is antiunitary

A unitary operator is linear. If $\hat T$ were unitary, then for every state

$$
\hat T\bigl(i\hat T^{-1}|\psi\rangle\bigr)=i\hat T\hat T^{-1}|\psi\rangle=i|\psi\rangle.
$$

Thus $\hat T i\hat T^{-1}=i\hat I$, in contradiction with the required minus sign. An antiunitary operator is antilinear and obeys

$$
\langle\hat T\phi|\hat T\psi\rangle=\langle\psi|\phi\rangle.
$$

This identity preserves norms and the magnitudes of overlaps. Antilinearity makes $i$ change to $i^*=-i$, so it gives the required sign. Wigner's theorem and the transition-probability assumption select antiunitarity once the unitary option is excluded. Antilinearity by itself is not sufficient: an antilinear map need not preserve norms or transition probabilities.

### (b) Momentum reversal for spin zero

For spin zero, $\hat T^{-1}=\hat T$ and $\hat T^2=\hat I$. Let $f(\mechanical{x},\signal{t})$ be an arbitrary differentiable test wavefunction. Use the full stated time action:

$$
\begin{aligned}
(\hat T\hat p\hat T^{-1}f)(\mechanical{x},\signal{t})
&=\left[-i\mechanical{\hbar}\partial_{\mechanical{x}}f^*(\mechanical{x},\signal{t})\right]^*\\
&=+i\mechanical{\hbar}\partial_{\mechanical{x}}f(\mechanical{x},\signal{t})\\
&=-\hat p f(\mechanical{x},\signal{t}).
\end{aligned}
$$

In the first line, the second reversal of time restores the original argument. The spatial derivative is real and is unchanged by conjugation, whereas $-i$ becomes $+i$. Since the result holds on arbitrary test states in the momentum domain, $\hat T\hat p\hat T^{-1}=-\hat p$. Position is unchanged; time reversal does not reflect space.

### (c) Square for spin one half and the degeneracy condition

Write $\hat T=UK$ with

$$
U=i\sigma_y=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.
$$

For every matrix $M$, $KM=M^*K$, and $K^2=\hat I$. Therefore

$$
\hat T^2=UKUK=UU^*=(i\sigma_y)(i\sigma_y)^*=U^2=-\hat I.
$$

The matrix $U$ is real, so $U^*=U$; one must conjugate the complete product $i\sigma_y$. Directly, $\hat T(a,b)^{\mathsf T}=(b^*,-a^*)^{\mathsf T}$, and a second application gives $(-a,-b)^{\mathsf T}$. Two reversals give a minus sign on a spinor. This is a global phase for a single ray, but it has a measurable implication for allowed symmetry representations. Multiplying $\hat T$ by an arbitrary phase does not remove this sign, since antiunitarity gives $(e^{i\chi}\hat T)^2=e^{i\chi}e^{-i\chi}\hat T^2$.

For Kramers degeneracy, assume a self-adjoint, time-reversal-invariant Hamiltonian and a normalizable energy eigenstate:

$$
\hat T\hat H\hat T^{-1}=\hat H,
\qquad
\hat H|\psi\rangle=\energy{E}|\psi\rangle.
$$

The energy is real. Antilinearity therefore gives

$$
\hat H\hat T|\psi\rangle=\hat T\hat H|\psi\rangle
=\energy{E}\hat T|\psi\rangle.
$$

The partner has the same energy. To show that it is a different orthogonal state, insert $\phi=\psi$ and the second state $\hat T\psi$ into the antiunitary inner-product identity:

$$
\langle\hat T\psi|\hat T^2\psi\rangle
=\langle\hat T\psi|\psi\rangle.
$$

Since $\hat T^2=-\hat I$, the left side is $-\langle\hat T\psi|\psi\rangle$. Hence this overlap is zero. Every discrete energy eigenspace is at least two dimensional under these assumptions.

For a system of $N$ spin-one-half particles with the usual time-reversal action, $\hat T^2=(-1)^N\hat I$. An odd number gives the Kramers condition; an even number does not guarantee a pair by this argument. More generally, the condition belongs to the full system's time-reversal operator. The presence of one half-integer-spin constituent alone does not prove degeneracy. A fixed external magnetic field generally breaks time-reversal invariance, so the square $-\hat I$ alone does not guarantee energy degeneracy.

## Answer

**(a)** A unitary operator leaves the scalar $i$ unchanged. The required sign change, together with Wigner's assumptions, requires antiunitarity.

**(b)** $\hat T\hat p\hat T^{-1}=+i\mechanical{\hbar}\partial_{\mechanical{x}}=-\hat p$.

**(c)** For $\hat T=i\sigma_yK$, $\hat T^2=-\hat I$. If the full Hamiltonian is time-reversal invariant and its full time-reversal operator has this square, each normalizable discrete energy level has an orthogonal equal-energy partner.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}$ | $\unit{m^{-1/2}}$ | Wavefunction | The spin-zero position amplitude in one spatial dimension. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The spatial coordinate left unchanged by time reversal. |
| $\signal{t}$ | $\unit{s}$ | Time | The argument whose sign is reversed. |
| $\mechanical{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action scale in the momentum operator. |
| $\energy{E}$ | $\unit{J}$ | Energy | The common energy of a Kramers pair. |
