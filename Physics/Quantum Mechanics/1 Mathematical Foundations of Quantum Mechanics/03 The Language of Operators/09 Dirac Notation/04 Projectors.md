---
title: "Projectors"
---

> [!TLDR]
> The outer product of a normalized ket with its bra is an orthogonal projector. Its expectation value gives the probability of the corresponding projective measurement outcome.

Projection separates a state into a retained component and a rejected component. The normalization assumption on $|n\rangle$ is exactly what makes the retained component unchanged on a second projection. Indeed, for an arbitrary nonzero $|u\rangle$, squaring $|u\rangle\langle u|$ multiplies it by $\langle u|u\rangle$. The orthogonal projector onto that line is therefore $|u\rangle\langle u|/\langle u|u\rangle$.

Idempotence alone does not imply orthogonality. For example, the matrix with rows $(1,1)$ and $(0,0)$ squares to itself but is not Hermitian. The two conditions in (9.4) and (9.5) together identify an orthogonal projector.

For a normalized input, the squared norm of the projected vector equals the projector expectation value. This proves the algebraic equality in the probability formula below. Interpreting that value as the probability of an ideal measurement outcome is the Born postulate, not a consequence of idempotence alone.

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
