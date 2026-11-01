---
title: "Lorentz Algebra"
---

> [!TLDR]
> Three rotations and three boosts generate the Lorentz algebra. Boost commutators have the opposite sign to rotation commutators.

The Lorentz algebra $\mathfrak{so}(1,3)$ has six generators: three rotations $J^i$ and three boosts $K^i$.
They satisfy
$$
[J^i,J^j]=i\epsilon^{ijk}J^k,
\tag{B.82}
$$
$$
[J^i,K^j]=i\epsilon^{ijk}K^k,
\tag{B.83}
$$
$$
[K^i,K^j]=-i\epsilon^{ijk}J^k.
\tag{B.84}
$$

The covariant generators obey $M^{\mu\nu}=-M^{\nu\mu}$ and
$$
[M^{\mu\nu},M^{\rho\sigma}]
=i\bigl(
g^{\nu\rho}M^{\mu\sigma}
-g^{\mu\rho}M^{\nu\sigma}
-g^{\nu\sigma}M^{\mu\rho}
+g^{\mu\sigma}M^{\nu\rho}
\bigr).
\tag{B.85}
$$
The correspondence is
$$
J^i=\frac12\epsilon^{ijk}M^{jk},
\qquad
K^i=M^{0i}.
$$

> [!note] Correction to the source
> The source gives the opposite overall sign in (B.85). With the mostly-minus metric and the displayed definitions of $J^i$ and $K^i$, that sign contradicts (B.82)–(B.84). The sign here is consistent with those relations; for example, $[M^{12},M^{23}]=iM^{31}$.

## Reading the boost sign as an infinitesimal effect

All labels in (B.82)–(B.85) refer to generators, with the factor $i$ in the physicists' convention. For a matrix group, linearizing $\Lambda^Tg\Lambda=g$ gives $X^Tg+gX=0$. It leaves six independent tangent matrices. The three time-space planes give boosts; the three spatial planes give rotations.

The sign in (B.84) can be checked without computing all commutators. Let $E_{ab}$ be the real matrix with its only nonzero entry at row $a$, column $b$, using indices $0,1,2,3$. Take $b_1=E_{01}+E_{10}$, $b_2=E_{02}+E_{20}$, and $r_3=E_{21}-E_{12}$. Matrix multiplication gives $[b_1,b_2]=-r_3$. With $K_i=ib_i$ and $J_3=ir_3$, this becomes $[K_1,K_2]=-iJ_3$.

Thus two small boosts in different directions leave a rotation at the first noncommuting order. Parallel boosts commute; changing their order gives no such term. The brackets describe that local geometry exactly and do not invoke a small-velocity approximation to the full group.
