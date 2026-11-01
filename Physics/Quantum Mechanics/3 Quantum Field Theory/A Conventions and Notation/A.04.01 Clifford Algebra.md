---
title: "Clifford Algebra"
---

> [!TLDR]
> The Clifford anticommutator fixes the relation between gamma matrices and the spacetime metric. Feynman slash notation contracts a four-vector with a gamma matrix.

The gamma matrices $\gamma^\mu$, $\mu=0,1,2,3$, satisfy
$$
\{\gamma^\mu,\gamma^\nu\}=2g^{\mu\nu}\mathbf1_4.
\tag{A.10}
$$
Here $\mathbf1_4$ is the $4\times4$ identity matrix.
For a four-vector $a^\mu$, the compact **Feynman slash** notation is
$$
\not{a}\equiv\gamma^\mu a_\mu
=\gamma^\mu a^\nu g_{\mu\nu}.
\tag{A.11}
$$

The anticommutator is the algebraic requirement which lets a first-order Dirac operator reproduce a second-order relativistic wave operator. For any ordinary commuting four-vector components, the antisymmetric part of the gamma product drops out of $\not{a}\not{a}$, so
$$
\not{a}^{\,2}=a^2\mathbf1_4.
$$
This is a direct consequence of (A.10), not a separate assumption about the particle.

Check a time-only vector: its slash squares to the positive component square. A space-only vector gives a negative square. In these conventions the explicit slash is $\not{a}=\gamma^0a^0-\sum_{i=1}^3\gamma^ia^i$. The lower index in (A.11) supplies the spatial signs; adding those signs again after already lowering the vector would give the wrong result.
