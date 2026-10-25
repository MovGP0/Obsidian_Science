---
title: "Orthogonal Projectors"
---

> [!TLDR]
> An orthogonal projector extracts the component in a subspace. It is both idempotent and Hermitian, and its complement projects onto the orthogonal subspace.

> [!definition] Definition 6.1 — Orthogonal projector
> A matrix $P$ is an **orthogonal projector** onto a subspace $W$ if:
>
> 1. $P^2=P$. **Idempotence.**
> 2. $P^\dagger=P$. **Hermiticity.**
> 3. $\operatorname{Im}(P)=W$.

If $\{w_1,\ldots,w_k\}$ is an orthonormal basis of $W$, then

$$
P_W=\sum_{j=1}^{k}w_jw_j^\dagger
=\sum_{j=1}^{k}|w_j\rangle\langle w_j|.
$$

The complement $P_{W^\perp}=I-P_W$ projects onto the subspace orthogonal to $W$.

## Example — Projector onto a vector in ℂ³

Let $v=(1,1,1)^T/\sqrt3$, which is normalized. The projector onto $\operatorname{span}(v)$ is

$$
P=vv^\dagger
=\frac13\begin{pmatrix}1\\1\\1\end{pmatrix}(1,1,1)
=\frac13\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}.
$$

*Verification:*

$$
\begin{aligned}
P^2
&=\frac19\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}^{2}\\
&=\frac19\begin{pmatrix}3&3&3\\3&3&3\\3&3&3\end{pmatrix}
=\frac13\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}=P.\quad\checkmark
\end{aligned}
$$

The projection of $u=(2,0,1)^T$ onto $v$ is

$$
Pu=\frac13(2+0+1)(1,1,1)^T=(1,1,1)^T.
$$

The orthogonal component is

$$
(I-P)u=(2-1,0-1,1-1)^T=(1,-1,0)^T.
$$

Verify orthogonality:

$$
(1,-1,0)\cdot(1,1,1)=1-1+0=0.\quad\checkmark
$$
