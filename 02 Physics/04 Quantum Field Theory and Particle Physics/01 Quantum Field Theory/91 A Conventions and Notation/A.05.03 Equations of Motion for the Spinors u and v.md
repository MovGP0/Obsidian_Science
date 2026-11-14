---
title: "Equations of Motion for the Spinors u and v"
---

> [!TLDR]
> Particle spinors satisfy the Dirac equation with a minus mass term, while antiparticle spinors satisfy the corresponding plus-mass equation.

The particle spinors and their adjoints satisfy
$$
(\not{\mechanical{p}}-\mechanical{m})u^{(s)}(\mechanical{\mathbf p})=0,
\qquad
\bar u^{(s)}(\mechanical{\mathbf p})(\not{\mechanical{p}}-\mechanical{m})=0.
\tag{A.49}
$$
The antiparticle spinors satisfy
$$
(\not{\mechanical{p}}+\mechanical{m})v^{(s)}(\mechanical{\mathbf p})=0,
\qquad
\bar v^{(s)}(\mechanical{\mathbf p})(\not{\mechanical{p}}+\mechanical{m})=0.
\tag{A.50}
$$

Use positive on-shell energy for the four-momentum in both lines. The mass-term sign difference follows from substituting the opposite plane-wave phases of [[A.05.02 The Dirac Equation and Solution Spinors]] into the same field equation. It does not assign a negative mass or negative physical energy to the antiparticle.

Multiplication by the opposite-sign Dirac factor gives the scalar mass-shell operator, because the slash squared is the invariant momentum square. Thus a nonzero solution requires (A.6). In the massive rest frame, (A.49) selects time-gamma eigenvalue plus one and (A.50) selects minus one. In the Dirac–Pauli basis these are the upper and lower two-component subspaces. This is a direct sign check that does not require explicit moving spinors.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p},\mechanical{\mathbf p}$ | $\unit{GeV}$ | On-shell momentum | The four-momentum in the slash and the spatial momentum labeling each spinor. |
| $\mechanical{m}$ | $\unit{GeV}$ | Fermion mass | The mass in the particle and antiparticle equations. |
