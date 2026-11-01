---
title: "QCD Vertices"
---

> [!TLDR]
> QCD vertices use SU(3) generators in the fundamental representation, with trace normalization one half and commutators fixed by the structure constants.

The color matrices act on a quark's three-component color state. Gluons instead carry an adjoint label with eight possible values. The structure constants describe the noncommuting color rotations and determine gluon self-interactions. This is why QCD needs more than the photon-like fermion vertex.

For the fundamental representation of $SU(3)_c$, use
$$
T^a=\frac{\lambda^a}{2},
\qquad
\operatorname{tr}(T^aT^b)=\frac12\delta^{ab},
\qquad
[T^a,T^b]=if^{abc}T^c.
$$
The generators and structure constants are dimensionless mathematical data, not additional measured coupling constants. The trace normalization below fixes how the strong coupling is defined; rescaling the generators without changing that coupling would change the vertex.

Use [[C.05.01 Quark–Gluon Vertex]] for a quark color line, [[C.05.02 Three-Gluon Vertex]] and [[C.05.03 Four-Gluon Vertex]] for gluon self-interactions, and [[C.05.04 Ghost–Gluon Vertex]] for covariant-gauge ghost loops. Keep each gluon's color, Lorentz index, and momentum together under a leg permutation. As a structural check, setting all commutators to zero removes the gluon self-interactions and the ghost–gluon interaction, leaving an Abelian-type matter coupling. This is a comparison of algebraic structures, not a continuous deformation of the eight-generator color group.

Perturbative amplitudes with quark and gluon lines describe short-distance parton interactions. Physical hadronic predictions also require the appropriate treatment of hadron structure and long-distance QCD; these vertex tables do not make isolated colored external particles observable.

The $f^{abc}$ are the $SU(3)$ structure constants.
See [[B.06.02 SU(3) - Gell-Mann Matrices and Casimir Operators]] for the explicit matrices and invariant tensors.
