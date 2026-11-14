---
title: "Chiral Projectors"
---

> [!TLDR]
> Right- and left-chiral projectors split a Dirac spinor into two complementary components.

The projectors onto right and left chirality are
$$
P_R=\frac{1+\gamma^5}{2},
\qquad
P_L=\frac{1-\gamma^5}{2}.
\tag{A.56}
$$
They satisfy
$$
P_R^2=P_R,
\qquad
P_L^2=P_L,
\qquad
P_RP_L=0,
\qquad
P_R+P_L=\mathbf1_4.
$$
The chiral spinors are
$$
\signal{\psi}_R=P_R\signal{\psi},
\qquad
\signal{\psi}_L=P_L\signal{\psi}.
$$

Idempotence follows from the chirality matrix squaring to the identity. Orthogonality follows from multiplying the two opposite factors. In the Weyl basis these operations simply select the lower or upper two components, respectively, which checks the right/left assignment without solving an equation of motion.

Anticommutation with each gamma matrix gives $P_L\gamma^\mu=\gamma^\mu P_R$ and $P_R\gamma^\mu=\gamma^\mu P_L$. This is useful when moving projectors through a vertex or a Dirac operator; a projector changes side and chirality label together. The free mass term couples the two chiral components, whereas the massless free equations separate them. Chirality is not generally helicity for a massive state. Compare the massless discussion in [Tong, section 4.4](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html#S4.SS4), which uses the opposite sign for the chirality matrix; use this appendix's definitions when assigning its eigenvalue labels.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi},\signal{\psi}_R,\signal{\psi}_L$ | $\unit{GeV^{3/2}}$ | Dirac field and chiral components | The full spinor field and its right- and left-chiral parts. |
