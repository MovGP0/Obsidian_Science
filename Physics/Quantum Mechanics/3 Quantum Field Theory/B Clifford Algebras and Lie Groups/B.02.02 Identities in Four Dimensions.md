---
title: "Identities in Four Dimensions"
---

> [!TLDR]
> In four dimensions, contracted gamma products reduce to simple scalar products and reversed spinor-matrix products.

For $d=4$, the contraction identities specialize to
$$
\gamma^\mu\gamma_\mu=4\mathbf1,
\tag{B.18}
$$
$$
\gamma^\mu\not{a}\gamma_\mu=-2\not{a},
\tag{B.19}
$$
$$
\gamma^\mu\not{a}\not{b}\gamma_\mu
=4(a\cdot b)\mathbf1.
\tag{B.20}
$$

The three-slash contraction is
$$
\gamma^\mu\not{a}\not{b}\not{c}\gamma_\mu
=-2\not{c}\not{b}\not{a},
\tag{B.21}
$$
with $\not{a}=a_\mu\gamma^\mu$.

The traces with $\gamma^5$ are
$$
\operatorname{tr}(\gamma^5)=0,
\tag{B.22}
$$
$$
\operatorname{tr}(\gamma^5\gamma^\mu\gamma^\nu)=0,
\tag{B.23}
$$
$$
\operatorname{tr}(\gamma^5\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma)
=-4i\epsilon^{\mu\nu\rho\sigma},
\tag{B.24}
$$
with $\epsilon^{0123}=+1$.

## A sign check before using the traces

These formulas use a four-component complex Dirac representation, the mostly-minus metric, and $\gamma^5=i\gamma^0\gamma^1\gamma^2\gamma^3$. They are algebraic identities; $a,b,c$ can be any commuting four-vectors with the slash convention stated above. Their units depend on what those vectors represent.

For (B.20), set $b=a$. The Clifford relation gives $\not a\not a=a^2\mathbf1$, so both sides become $4a^2\mathbf1$. This includes a null vector, whose slash can be nonzero even though its square vanishes.

Check the sign of (B.24) with the ordered indices $0123$. Write $P=\gamma^0\gamma^1\gamma^2\gamma^3$. Its square is $-\mathbf1$, so $\operatorname{tr}(\gamma^5P)=i\operatorname{tr}(P^2)=-4i$. Permuting the four distinct indices changes the sign. Repeated indices give zero after antisymmetrization. This fixes the sign relative to the stated orientation; a different $\gamma^5$ definition requires a corresponding change.
