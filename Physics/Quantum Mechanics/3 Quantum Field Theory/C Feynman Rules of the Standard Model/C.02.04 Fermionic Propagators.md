---
title: "Fermionic Propagators"
---

> [!TLDR]
> A free fermion propagator has a slashed-momentum numerator and a mass-shell denominator. Quark propagators also preserve the color index.

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{S}_F$ | $\unit{GeV^{-1}}$ | Fermion propagator | The momentum-space spinor Green function. |
| $\mechanical{p}$ | $\unit{GeV}$ | Fermion four-momentum | The momentum in the slashed numerator and mass-shell denominator. |
| $\mechanical{m}_f$ | $\unit{GeV}$ | Fermion mass | The Dirac or Majorana mass retained in the propagator. |
