---
title: "General Conventions"
---

> [!TLDR]
> The Standard Model Feynman-rule reference uses the Appendix A conventions and keeps the Rξ gauge parameter explicit unless another gauge is stated.

## Appendix introduction

This appendix collects Standard Model Feynman rules as a reference.
The metric, Clifford algebra, chiral projectors, Feynman notation, and spinor conventions are those in Appendix A.
For gamma matrices and trace identities, see [[A.04 Gamma Matrices and Clifford Algebra]].
For the Levi-Civita tensor, see [[A.06 Levi-Civita Tensor]].

Dimensional regularization, Feynman parametrization, and loop integrals are collected in [[A.08 Dimensional Regularization]] and its subsections, so they are not repeated here.

The source states that its physical-constant values agree with those used in Chapters 8, 10, and 13 and with PDG 2024. These are the source's reference values.

## How to use the reference

These are momentum-space perturbation rules, not probabilities. Choose a process and perturbative order, draw every allowed diagram, and combine their amplitudes before taking an absolute square. An internal line carries the momentum fixed by the vertices; it need not satisfy the physical mass-shell condition. External lines instead require the appropriate spinor or polarization vector and the state normalization from Appendix A.

Natural units are used. Masses and four-momentum components have units of GeV. The rule's overall sign is meaningful only with the same field, metric, and interaction conventions throughout a calculation. See the convention comparison in [Romão and Silva, section 3](https://arxiv.org/html/1209.6213v2#S3).

## Gauge convention

Unless another choice is stated, the rules use the $R_\xi$ gauge.
Keep $\xi$ arbitrary to permit gauge-independence checks.

- $\xi=1$: Feynman–'t Hooft gauge.
- $\xi\to0$: Landau gauge.
- $\xi\to\infty$: unitary-gauge limit.

## Lines and arrows

Each external or internal fermion line has an arrow.
The arrow shows lepton-number or baryon-number flow.
An arrow in the same direction as the physical momentum denotes a fermion; an arrow opposite to it denotes an antifermion.

Scalar, vector, gluon, and ghost line styles do not use this physical fermion-number arrow. Charged lines can have an auxiliary arrow for charge flow, as for W bosons, charged Goldstone fields, or W ghosts.

> [!note]
> The source groups ghosts with bosonic line styles. Faddeev–Popov ghosts are nevertheless Grassmann-odd fields, and their oriented lines distinguish ghost from antighost. Their arrow is not a physical fermion-number arrow.

## Momenta

Unless another convention is stated, all momenta enter a vertex.
Momentum conservation requires
$$
\sum_i\mechanical{p}_i=0
$$
at each vertex.

For a scattering process, reverse the sign of the momentum of each outgoing leg before inserting it into an all-incoming rule. This changes the momentum argument, not the particle's electric charge or the direction of fermion-number flow. Check both momentum and charge conservation independently.

## Symmetry factor

Associate a factor $1/S$ with each diagram.
Here $S$ is the order of the graph's automorphism group: the permutations of vertices and lines that preserve the diagram, including its external labels.

The vertex factors already include the permutations of identical fields in a single interaction term. Do not multiply a four-field rule by another factorial. The diagram symmetry factor counts remaining equivalent contractions of the complete graph.

## Closed fermion loops

Each closed fermion loop contributes a factor $-1$ from Fermi–Dirac statistics.
Each closed Faddeev–Popov ghost loop has the same minus factor.

## Fermion traces

For a closed fermion loop, take the trace over spinor indices in the order selected by the arrow.

## Loop momentum

For each independent loop momentum not fixed by momentum conservation, integrate with
$$
\int\frac{d^d\mechanical{k}}{(2\pi)^d},
\qquad
d=4-2\varepsilon.
$$
See [[A.08.01 Gaussian Integrals in d Euclidean Dimensions]] for the master integral formulas.

## Factors of i

Each propagator includes its factor of $i$, with the appropriate sign and numerator.
Obtain each vertex from $i$ times the corresponding interaction term in the Lagrangian density, including field combinatorial factors and any momentum factors from derivatives.

A useful final check is to set one interaction coupling to zero. Every diagram that requires that interaction must vanish. Gauge-parameter cancellation is a check on a complete physical amplitude at a consistent order; an isolated propagator or diagram can depend on the gauge parameter. The list below is a reference subset: a calculation that contains Goldstone or electroweak ghost interactions also needs their vertices.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p}_i$ | $\unit{GeV}$ | Incoming vertex momenta | The four-momenta constrained by momentum conservation. |
| $\mechanical{k}$ | $\unit{GeV}$ | Independent loop momentum | The integration momentum in dimensional regularization. |
