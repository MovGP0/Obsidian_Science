---
title: "Higgs Field Self-Interactions"
---

> [!TLDR]
> The Higgs potential fixes its cubic and quartic self-interactions in terms of the Higgs mass and vacuum scale.

These rules specify how the physical Higgs fluctuation interacts with itself in the renormalizable single-doublet model. The potential is an input to that model; the cubic and quartic coefficients follow from expansion about its symmetry-breaking minimum, rather than being separately chosen parameters at tree level.

Start from the scalar potential
$$
\energy{V}(\signal{H})
=-\energy{\mu}^2\signal{H}^\dagger\signal{H}
+\signal{\lambda}(\signal{H}^\dagger\signal{H})^2,
\qquad
\mechanical{m}_h^2=2\signal{\lambda}\signal{v}^2.
$$
The cubic and quartic Higgs rules are
$$
hhh:\qquad-\frac{3i\mechanical{m}_h^2}{\signal{v}},
\tag{C.31}
$$
$$
hhhh:\qquad-\frac{3i\mechanical{m}_h^2}{\signal{v}^2}.
\tag{C.32}
$$

To recover the factors, set the doublet along its vacuum direction and retain the physical real fluctuation. In this direction its norm squared is $(\signal{v}+\signal{h})^2/2$. The potential then contains a cubic coefficient $\mechanical{m}_h^2/(2\signal{v})$ and a quartic coefficient $\mechanical{m}_h^2/(8\signal{v}^2)$. The interaction Lagrangian is minus the potential. Multiplying by $i$ and by the respective $3!$ and $4!$ identical-field factors gives (C.31) and (C.32). No further factorial belongs at the vertex.

The cubic rule has one energy dimension and the quartic rule is dimensionless. At fixed vacuum scale, both vanish when the quartic coupling tends to zero through the stated mass relation. This is a formal parameter limit: the potential minimum also becomes flat, so it does not preserve the observed massive-Higgs spectrum. These contact rules contribute to Higgs scattering and production with virtual Higgs exchange; a cubic rule does not permit one on-shell Higgs to decay into two identical on-shell Higgs bosons of the same mass.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{V}$ | $\unit{GeV^4}$ | Higgs potential density | The scalar potential that determines the self-interactions. |
| $\signal{h}$ | $\unit{GeV}$ | Physical Higgs field | The real fluctuation about the vacuum used in the expansion. |
| $\signal{H}$ | $\unit{GeV}$ | Higgs doublet | The scalar multiplet before expansion about the vacuum. |
| $\energy{\mu}$ | $\unit{GeV}$ | Potential mass scale | The scale in the quadratic symmetry-breaking term. |
| $\signal{\lambda}$ | $1$ | Higgs self-coupling | The quartic coefficient of the scalar potential. |
| $\mechanical{m}_h$ | $\unit{GeV}$ | Physical Higgs mass | The mass entering the cubic and quartic Higgs rules. |
| $\signal{v}$ | $\unit{GeV}$ | Higgs vacuum scale | The vacuum magnitude in the Higgs self-coupling coefficients. |
