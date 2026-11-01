---
title: "Fermionic Propagators"
---

> [!TLDR]
> A free fermion propagator has a slashed-momentum numerator and a mass-shell denominator. Quark propagators also preserve the color index.

This is the inverse free Dirac operator, with spinor indices to be contracted with the neighboring vertices. For a Dirac line, route the momentum in the fermion-number arrow direction when using the numerator below. If the assigned momentum runs against that arrow, reverse its sign in the slashed term. Crossing an external antiparticle instead changes the external spinor assignment; it does not supply a new internal propagator rule.

For quarks, charged leptons, and massive Dirac neutrinos, use
$\not{\mechanical{p}}=\gamma^\mu\mechanical{p}_\mu$:
$$
\signal{S}_F(\mechanical{p})
=\frac{i(\not{\mechanical{p}}+\mechanical{m}_f)}
{\mechanical{p}^2-\mechanical{m}_f^2+i\varepsilon}
\equiv\frac{i}{\not{\mechanical{p}}-\mechanical{m}_f+i0}.
\tag{C.12}
$$
The inverse-operator form is shorthand for the same Feynman boundary prescription.
For a massless Dirac neutrino, take $\mechanical{m}_f\to0$.
A quark propagator also carries $\delta_{ij}$, with $i,j=1,2,3$ the fundamental $SU(3)$ color indices.

> [!note] Majorana mass
> The source also directs $\mechanical{m}_f\to0$ for a neutrino treated as Majorana. A Majorana condition does not require zero mass. The usual spinor propagator has the same momentum denominator with the actual Majorana mass; Majorana amplitudes also require consistent fermion-flow and contraction rules.

Away from the poles, multiplying the numerator by $\not{\mechanical{p}}-\mechanical{m}_f$ gives $\mechanical{p}^2-\mechanical{m}_f^2$ times the spinor identity. This follows from the Clifford algebra and checks the relative mass sign. The numerator has one power of energy and the denominator has two, giving $\unit{GeV^{-1}}$. The massless limit retains the slashed momentum and the pole at zero invariant mass.

No gauge parameter occurs in this free fermion propagator; interacting fermion self-energies can still depend on gauge conventions. Massive Dirac neutrinos require a neutrino-mass extension of the minimal Standard Model. The Majorana note above sets a separate boundary: the free denominator alone is not a complete prescription for amplitudes with Majorana fields.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{S}_F$ | $\unit{GeV^{-1}}$ | Fermion propagator | The momentum-space spinor Green function. |
| $\mechanical{p}$ | $\unit{GeV}$ | Fermion four-momentum | The momentum in the slashed numerator and mass-shell denominator. |
| $\mechanical{m}_f$ | $\unit{GeV}$ | Fermion mass | The Dirac or Majorana mass retained in the propagator. |
