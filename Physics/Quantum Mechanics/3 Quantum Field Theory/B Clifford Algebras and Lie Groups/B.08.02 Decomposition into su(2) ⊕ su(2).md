---
title: "Decomposition into su(2) ⊕ su(2)"
---

> [!TLDR]
> Complex combinations of rotations and boosts form two commuting angular-momentum algebras, which label finite-dimensional Lorentz representations.

Define
$$
A^i=\frac12(J^i+iK^i),
\qquad
B^i=\frac12(J^i-iK^i).
\tag{B.86}
$$
The Lorentz commutators become
$$
[A^i,A^j]=i\epsilon^{ijk}A^k,
\tag{B.87}
$$
$$
[B^i,B^j]=i\epsilon^{ijk}B^k.
\tag{B.88}
$$

> [!note]
> The source describes this as a decomposition into $\mathfrak{su}(2)\oplus\mathfrak{su}(2)$. The combinations involve $iK^i$, so the splitting applies after complexification:
> $\mathfrak{so}(1,3)_{\mathbb C}\cong\mathfrak{sl}(2,\mathbb C)\oplus\mathfrak{sl}(2,\mathbb C)$.
> The real noncompact Lorentz algebra is not the compact real algebra $\mathfrak{su}(2)\oplus\mathfrak{su}(2)$.

The two sets commute:
$$
[A^i,B^j]=0.
\tag{B.89}
$$
Finite-dimensional irreducible representations of the complexified Lorentz algebra are labeled by
$$
(j_L,j_R),
\qquad
j_L,j_R\in\left\{0,\frac12,1,\ldots\right\}.
$$

**Table B.5** Common finite-dimensional Lorentz representations and their rotation content.

| $(j_L,j_R)$ | Dimension | Rotation spin | Description |
| --- | --- | --- | --- |
| $(0,0)$ | $1$ | $0$ | Scalar |
| $(\tfrac12,0)$ | $2$ | $\tfrac12$ | Left Weyl spinor $\psi_\alpha$ |
| $(0,\tfrac12)$ | $2$ | $\tfrac12$ | Right Weyl spinor $\bar\chi^{\dot\alpha}$ |
| $(\tfrac12,\tfrac12)$ | $4$ | $0,1$ | Four-vector $A^\mu$ |
| $(1,0)$ | $3$ | $1$ | Self-dual tensor $F_{\mu\nu}^+$ |
| $(0,1)$ | $3$ | $1$ | Anti-self-dual tensor $F_{\mu\nu}^-$ |
| $(1,0)\oplus(0,1)$ | $6$ | $1$ | Antisymmetric tensor $F_{\mu\nu}$ |
| $(\tfrac12,0)\oplus(0,\tfrac12)$ | $4$ | $\tfrac12$ | Dirac spinor |
| $(1,\tfrac12)\oplus(\tfrac12,1)$ | $12$ | $\tfrac12,\tfrac32$ | Gamma-traceless vector-spinor sector associated with the Rarita–Schwinger field |

> [!note] Spin content in the last row
> The source lists only spin $3/2$ for the twelve-component representation. Under spatial rotations, it also contains spin-$1/2$ components before additional field constraints are imposed. A full four-vector times Dirac spinor has sixteen components; the twelve-component sector is obtained after removing its gamma trace. The table describes representation content, not by itself the on-shell particle states.

## Recovering dimensions and rotation content

Insert (B.82)–(B.84) into the definitions of $A^i,B^i$. The minus sign of the boost bracket cancels the $i^2$ from the two boost terms, while the mixed terms cancel in $[A^i,B^j]$. This is the step that makes the two commuting complex algebras appear.

A representation $(j_L,j_R)$ is the tensor product of the two modules, so its complex dimension is $(2j_L+1)(2j_R+1)$. Under spatial rotations $J^i=A^i+B^i$, use ordinary angular-momentum addition: the spins range from $|j_L-j_R|$ to $j_L+j_R$ in unit steps. For a four-vector, $\tfrac12\otimes\tfrac12=0\oplus1$, giving $1+3=4$. For $(1,\tfrac12)$ the spins are $\tfrac12,\tfrac32$, giving $2+4=6$.

These checks explain the entries without counting particles. For a massive field, field equations and constraints may select a particular on-shell spin. For a massless field, helicity and gauge redundancy require a further analysis. Also, the labels “self-dual” and “anti-self-dual” for Lorentzian two-forms refer to complex eigenspaces; their assignment depends on the orientation and Hodge-star convention.

Use the rotation rule to reconstruct the Dirac row without a gamma matrix. Each summand has one spin-$1/2$ rotation multiplet, so the direct sum has two such multiplets and dimension four. Explain why this calculation alone cannot decide which particle and antiparticle states a field equation will retain.
