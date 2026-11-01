---
title: "Properties of Gamma Matrices"
---

> [!TLDR]
> Gamma-matrix conjugation, traces, and contractions reduce relativistic spinor expressions to simpler matrix forms.

The Hermitian-conjugation relations are
$$
(\gamma^0)^\dagger=\gamma^0,
\qquad
(\gamma^i)^\dagger=-\gamma^i,
\qquad
(\gamma^\mu)^\dagger=\gamma^0\gamma^\mu\gamma^0.
\tag{A.24}
$$
Their squares are
$$
(\gamma^0)^2=\mathbf1_4,
\qquad
(\gamma^i)^2=-\mathbf1_4,
\tag{A.25}
$$
with no sum on $i$.

The single-matrix traces vanish:
$$
\operatorname{Tr}[\gamma^\mu]=0,
\qquad
\operatorname{Tr}[\gamma^5]=0.
\tag{A.26}
$$
Useful contractions in four dimensions are
$$
\gamma^\mu\gamma_\mu=4\mathbf1_4,
\tag{A.27}
$$
$$
\gamma^\mu\not{a}\gamma_\mu=-2\not{a}.
\tag{A.28}
$$

Additional four-dimensional contractions are
$$
\gamma^\mu\not{a}\not{b}\gamma_\mu
=4(a\cdot b)\mathbf1_4,
\tag{A.29}
$$
$$
\gamma^\mu\not{a}\not{b}\not{c}\gamma_\mu
=-2\not{c}\not{b}\not{a}.
\tag{A.30}
$$

## Contractions in d dimensions

For dimensional regularization,
$$
\gamma^\mu\gamma_\mu=d\,\mathbf1,
\tag{A.31}
$$
$$
\gamma^\mu\not{a}\gamma_\mu=(2-d)\not{a},
\tag{A.32}
$$
$$
\gamma^\mu\not{a}\not{b}\gamma_\mu
=4(a\cdot b)\mathbf1-(4-d)\not{a}\not{b},
\tag{A.33}
$$
$$
\gamma^\mu\not{a}\not{b}\not{c}\gamma_\mu
=-2\not{c}\not{b}\not{a}
+(4-d)\not{a}\not{b}\not{c}.
\tag{A.34}
$$

Use (A.24) for the standard Dirac–Pauli or Weyl matrices and spinor bases with the same Hermitian-conjugation convention. An arbitrary nonunitary similarity transformation need not preserve these component adjoint relations. In (A.27), lowering the spatial gamma index supplies a minus sign, which cancels its negative square; all four terms therefore contribute plus the identity.

To reconstruct (A.32), anticommute the leftmost contracted gamma matrix through the slash. The metric term contributes twice the slash, while the remaining contracted pair contributes minus $d$ times the slash. This also explains why replacing $d$ by four early can lose regulator terms. Equations (A.31)–(A.34) use formal continued Clifford algebra, not literal noninteger-size matrices; they do not prescribe traces containing a chirality matrix. Setting $d=4$ recovers (A.27)–(A.30).
