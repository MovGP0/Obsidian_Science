---
title: "Triple Gauge Vertices (TGC)"
---

> [!TLDR]
> The WWγ and WWZ vertices share a Yang–Mills momentum tensor and differ by their gauge coupling coefficients.

These derivative interactions come from the non-Abelian weak gauge kinetic term after rotation to charged W, photon, and Z fields. They permit a neutral vector to couple to a charged W pair. The leg labels below fix the order of both the Lorentz indices and the momenta; the tensor cannot be copied with only the particle names changed.

All momenta enter the vertex.
Label the legs
$$
W_\mu^+(\mechanical{p}_+),\qquad
W_\nu^-(\mechanical{p}_-),\qquad
V_\rho(\mechanical{q}),
\qquad V=\gamma,Z.
$$
The source rules are retained below; the convention correction after (C.21) states which signs to use with this appendix's matter vertices.

Then
$$
W_\mu^+W_\nu^-\gamma_\rho:\qquad
+i\electric{e}\,\Gamma^{\mu\nu\rho}(\mechanical{p}_+,\mechanical{p}_-,\mechanical{q}),
\tag{C.19}
$$
$$
W_\mu^+W_\nu^-Z_\rho:\qquad
+i\signal{g}\cos\signal{\theta}_W\,
\Gamma^{\mu\nu\rho}(\mechanical{p}_+,\mechanical{p}_-,\mechanical{q}),
\tag{C.20}
$$
with the kinematic Yang–Mills tensor
$$
\Gamma^{\mu\nu\rho}(\mechanical{p}_+,\mechanical{p}_-,\mechanical{q})
=g^{\mu\nu}(\mechanical{p}_+-\mechanical{p}_-)^\rho
+g^{\nu\rho}(\mechanical{p}_--\mechanical{q})^\mu
+g^{\rho\mu}(\mechanical{q}-\mechanical{p}_+)^\nu.
\tag{C.21}
$$

For an outgoing W or neutral vector, insert the negative of its physical four-momentum into the all-incoming tensor. Contract each Lorentz index with the corresponding external polarization or internal propagator. Charge conservation requires one positive and one negative W; this rule does not describe three neutral gauge bosons.

Every term in the tensor has one momentum factor, so the three-vector vertex has one energy dimension. Exchanging the two W legs, including their indices and momenta, reverses the sign of the displayed tensor. This checks its ordered form; it does not by itself impose identical-particle symmetry on two distinct charged fields. The photon vertex vanishes with the electromagnetic coupling. In W-pair production or vector-boson scattering, test a full sum of diagrams: a single triple vertex cannot demonstrate the gauge cancellations needed for physical high-energy behavior.

> [!note] Convention correction to the source rules
> Equations (C.19) and (C.20) above retain the source forms. Their plus signs do not match the matter-vertex convention in (C.13)–(C.16) for the ordered tensor (C.21). With those matter rules, use the following coefficients instead:
> $$
> W_\mu^+W_\nu^-\gamma_\rho:\qquad
> -i\electric{e}\,\Gamma^{\mu\nu\rho}(\mechanical{p}_+,\mechanical{p}_-,\mechanical{q}),
> $$
> $$
> W_\mu^+W_\nu^-Z_\rho:\qquad
> -i\signal{g}\cos\signal{\theta}_W\,
> \Gamma^{\mu\nu\rho}(\mechanical{p}_+,\mechanical{p}_-,\mechanical{q}).
> $$
> This sign is fixed by the gauge kinetic term once the matter convention and leg order are fixed. In [Romão and Silva, Eqs. (58)–(59) and (64)–(69)](https://arxiv.org/html/1209.6213v2#S5.SS2), matching the matter rules selects their convention signs $\eta_e=\eta=-1$ and $\eta_Z=+1$. Their tensor, ordered as negative W, positive W, neutral vector, becomes minus (C.21) after relabeling to this article's leg order. Do not combine the retained source plus signs with the matter rules in the same amplitude.

The relative sign can also be checked directly. Expand the canonical weak gauge kinetic term with the covariant-derivative sign selected by the positive imaginary matter vertex. For a neutral vector equal to the third weak field, choose both charged-vector Lorentz indices to be $0$ and the neutral index to be $1$. Let the incoming spatial momentum components be $\mechanical{p}_+^1=1\,\unit{GeV}$, $\mechanical{p}_-^1=0$, and $\mechanical{q}^1=-1\,\unit{GeV}$, with other components zero. Then $\Gamma^{001}=1\,\unit{GeV}$ and the kinetic expansion gives the negative imaginary coupling times that value. This is an off-shell component check of the rule, not a physical three-particle process. A rephasing of both charged fields cannot change a vertex containing one field of each charge.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{p}_+,\mechanical{p}_-,\mechanical{q}$ | $\unit{GeV}$ | Incoming gauge-boson momenta | The momenta of the positive W, negative W, and neutral vector leg. |
| $\electric{e}$ | $1$ | Electromagnetic coupling | The coefficient of the WWγ vertex. |
| $\signal{g}$ | $1$ | Weak gauge coupling | The gauge coefficient of the WWZ vertex. |
| $\signal{\theta}_W$ | $1$ | Weak mixing angle | The angle in the neutral weak-boson coefficient. |
