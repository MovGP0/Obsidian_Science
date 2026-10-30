---
title: "Basic Examples"
---

> [!TLDR]
> General linear, special linear, orthogonal, and unitary matrix groups are basic examples of Lie groups, with dimensions set by their constraints.

## General linear group

$GL(n,\mathbb F)$ is the group of invertible $n\times n$ matrices over $\mathbb F=\mathbb R$ or $\mathbb C$.

- $GL(n,\mathbb R)$ has real dimension $n^2$.
- $GL(n,\mathbb C)$ has complex dimension $n^2$ and real dimension $2n^2$.

## Special linear group

$SL(n,\mathbb F)$ is the subgroup with determinant one.

- $SL(n,\mathbb R)$ has real dimension $n^2-1$.
- $SL(n,\mathbb C)$ has complex dimension $n^2-1$ and real dimension $2(n^2-1)$.

> [!note] Correction to the source
> The source gives $n^2$ and $n^2-1$ for both fields without consistently distinguishing real and complex dimension. Each free complex parameter counts as two real parameters.

## Orthogonal groups

$O(n)$ and $SO(n)$ are the orthogonal and special orthogonal groups.
Their dimension is
$$
\dim O(n)=\dim SO(n)=\frac{n(n-1)}2.
$$
$O(p,q)$ and $SO(p,q)$ generalize them to indefinite signature.
The Lorentz group in the stated convention is $SO(1,3)$.

## Unitary groups

$U(n)$ and $SU(n)$ are the unitary and special unitary groups:
$$
\dim_{\mathbb R}U(n)=n^2,
\qquad
\dim_{\mathbb R}SU(n)=n^2-1.
$$

## Symplectic group

The source writes the compact symplectic group as $Sp(2n)$, with
$$
\dim Sp(2n)=n(2n+1).
$$
In this compact-group notation, it is also written $USp(2n)$ or $Sp(n)$.

## Compact simple Lie algebras

**Table B.2** Compact simple Lie algebras in the Cartan classification.

| Series | Algebra | Compact group | Dimension | Rank |
| --- | --- | --- | --- | --- |
| $A_n$ | $\mathfrak{su}(n+1)$ | $SU(n+1)$ | $n(n+2)$ | $n$ |
| $B_n$ | $\mathfrak{so}(2n+1)$ | $SO(2n+1)$ | $n(2n+1)$ | $n$ |
| $C_n$ | $\mathfrak{sp}(2n)$ | $Sp(2n)$ | $n(2n+1)$ | $n$ |
| $D_n$ | $\mathfrak{so}(2n)$ | $SO(2n)$ | $n(2n-1)$ | $n$ |
| $G_2$ | $\mathfrak g_2$ | $G_2$ | $14$ | $2$ |
| $F_4$ | $\mathfrak f_4$ | $F_4$ | $52$ | $4$ |
| $E_6$ | $\mathfrak e_6$ | $E_6$ | $78$ | $6$ |
| $E_7$ | $\mathfrak e_7$ | $E_7$ | $133$ | $7$ |
| $E_8$ | $\mathfrak e_8$ | $E_8$ | $248$ | $8$ |

> [!note]
> The classical series require the usual rank restrictions and have low-rank isomorphisms. A standard nonredundant listing uses $A_n$ for $n\ge1$, $B_n$ for $n\ge2$, $C_n$ for $n\ge3$, and $D_n$ for $n\ge4$, with $B_2\cong C_2$. In particular, $\mathfrak{so}(4)$ is not simple. The symbol $Sp(2n)$ in this table denotes the compact form.
