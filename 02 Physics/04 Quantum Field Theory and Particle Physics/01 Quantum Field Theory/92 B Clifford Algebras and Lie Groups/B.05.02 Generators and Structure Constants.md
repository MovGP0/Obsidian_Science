---
title: "Generators and Structure Constants"
---

> [!TLDR]
> Structure constants specify generator commutators. The Jacobi identity imposes a quadratic relation on those constants.

Choose generators $\{T^a\}_{a=1}^{\dim\mathfrak g}$.
The commutation relations are
$$
[T^a,T^b]=if^{abc}T^c.
\tag{B.39}
$$
The structure constants $f^{abc}$ are antisymmetric under $a\leftrightarrow b$.

The Jacobi identity,
$$
[T^a,[T^b,T^c]]
+[T^b,[T^c,T^a]]
+[T^c,[T^a,T^b]]=0,
\tag{B.40}
$$
implies
$$
f^{abe}f^{ecd}
+f^{bce}f^{ead}
+f^{cae}f^{ebd}=0.
\tag{B.41}
$$

## Which convention contains the factor i?

For compact matrix groups, these $T^a$ are Hermitian generators; the real tangent basis is $-iT^a$. Then the real coefficients $f^{abc}$ in (B.39) encode the bracket. In a general basis one usually writes $f^{ab}{}_c$: the third label is an output index, and an invariant metric is needed before it is moved up or down. Full antisymmetry in all three labels is an additional property of an orthonormal compact basis.

To obtain (B.41), expand the inner bracket in each term of (B.40), expand the outer bracket, and equate the coefficient of each independent generator. Each nested bracket supplies two factors of $i$, so all three terms have the same overall minus sign. Linear independence, rather than a trace normalization, closes the proof.

For $T^a=\sigma^a/2$, $[T^1,T^2]=iT^3$, hence $f^{123}=1$. If all generators are rescaled by a common nonzero factor $c$, the structure constants rescale by $c$ as well. Numerical values therefore carry a basis convention even though the algebra is unchanged.
