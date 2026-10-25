---
title: "Projectors"
---

> [!TLDR]
> The outer product of a normalized ket with its bra is an orthogonal projector. Its expectation value gives the probability of the corresponding projective measurement outcome.

> [!definition] Definition 9.3 | Projector
> For a normalized ket $|n\rangle$, the projector onto its direction is
>
> $$
> \hat P_n=|n\rangle\langle n|.
> $$

The **outer product** $|n\rangle\langle n|$ is an operator. Applied to a ket $|\psi\rangle$, it gives

$$
\hat P_n|\psi\rangle
=|n\rangle\langle n|\psi\rangle
=\langle n|\psi\rangle|n\rangle.
$$

The result is $|n\rangle$ multiplied by the scalar $\langle n|\psi\rangle$. This is the projection of $|\psi\rangle$ onto the direction $|n\rangle$.

The projector is Hermitian:

$$
\hat P_n^\dagger=\hat P_n.
\tag{9.4}
$$

It is also idempotent:

$$
\hat P_n^2=\hat P_n.
\tag{9.5}
$$

**Proof of (9.5):**

$$
\begin{aligned}
\hat P_n^2
&=(|n\rangle\langle n|)(|n\rangle\langle n|)\\
&=|n\rangle\langle n|n\rangle\langle n|\\
&=|n\rangle\cdot1\cdot\langle n|=\hat P_n.
\end{aligned}
$$

## Example — Spin-one-half projectors

The projectors onto the eigenstates of $\sigma_z$ are

$$
\hat P_\uparrow
=|\uparrow\rangle\langle\uparrow|
=\begin{pmatrix}1\\0\end{pmatrix}(1,0)
=\begin{pmatrix}1&0\\0&0\end{pmatrix},
\qquad
\hat P_\downarrow=\begin{pmatrix}0&0\\0&1\end{pmatrix}.
$$

The relation $\hat P_\uparrow+\hat P_\downarrow=I$ is completeness expressed through projectors.

For a normalized state $|\psi\rangle$, the probability of measuring spin up is

$$
P(\uparrow)=\langle\psi|\hat P_\uparrow|\psi\rangle
=|\langle\uparrow|\psi\rangle|^2.
$$

This is **Born’s rule** in projector form.

> [!note]
> The source calls this the most general form of Born’s postulate. Here the formula concerns a pure state and a projective measurement. For a mixed state it becomes $P=\operatorname{Tr}(\rho\hat P)$; generalized measurements use positive measurement effects in place of projectors.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $P(\uparrow)$, $P$ | $1$ | Measurement probability | The probability of the outcome selected by the projector. |
