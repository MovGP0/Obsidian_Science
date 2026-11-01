---
title: "Quartic Gauge Vertices (QGC)"
---

> [!TLDR]
> Quartic electroweak gauge vertices combine a coupling coefficient with metric tensors whose index order follows the assigned external legs.

These contact interactions are the four-field terms of the gauge kinetic energy. They occur together with exchange diagrams built from triple vertices, for example in W-pair and vector-boson scattering. Their coefficients are fixed by the gauge theory; they are not separate adjustable strengths at tree level.

The four-gauge-boson vertices follow from the same $SU(2)_L\times U(1)_Y$ gauge structure.
The source defines the tensor
$$
T^{\mu\nu\rho\sigma}
=2g^{\mu\nu}g^{\rho\sigma}
-g^{\mu\rho}g^{\nu\sigma}
-g^{\mu\sigma}g^{\nu\rho}.
\tag{C.22}
$$
Use the Lorentz-index ordering associated with each set of external legs.

Multiply the Lorentz tensor by the appropriate coupling.
For the leg order $W_\mu^+,W_\nu^-,V_\rho,V'_\sigma$,
$$
W^+W^-\gamma\gamma:\qquad
-i\electric{e}^2T^{\mu\nu\rho\sigma},
\tag{C.23}
$$
$$
W^+W^-\gamma Z:\qquad
-i\electric{e}\signal{g}\cos\signal{\theta}_W\,T^{\mu\nu\rho\sigma},
\tag{C.24}
$$
$$
W^+W^-ZZ:\qquad
-i\signal{g}^2\cos^2\signal{\theta}_W\,T^{\mu\nu\rho\sigma}.
\tag{C.25}
$$
For the leg order $W_\mu^+,W_\nu^-,W_\rho^+,W_\sigma^-$,
$$
W^+W^-W^+W^-:\qquad
+i\signal{g}^2
\left(
2g^{\mu\rho}g^{\nu\sigma}
-g^{\mu\nu}g^{\rho\sigma}
-g^{\mu\sigma}g^{\nu\rho}
\right).
\tag{C.26}
$$

> [!note] Correction to the source
> The source prints $-i\signal{g}^2$ in (C.26). With the canonical Yang–Mills kinetic sign and this ordering of the two positive and two negative W legs, the coefficient is $+i\signal{g}^2$. Expanding the quartic interaction in charged W fields and differentiating with respect to those four legs gives the sign shown here.

The Lorentz tensors contain no momenta, and the gauge couplings are dimensionless. Thus each four-vector rule is dimensionless, in contrast to a derivative three-vector rule. Contract the indices in the stated leg order; for the four-W rule, the two positive legs are the first and third legs.

The vertex already includes the permutations of identical photons, Z bosons, or equal-charge W fields. Do not add a factor of two or a factorial when using it. A separate symmetry factor can still belong to a complete graph. As an index check, the neutral-pair tensor is symmetric under exchange of its last two Lorentz indices. The four-W expression is symmetric under exchange of its two positive legs and under exchange of its two negative legs.

Setting the electromagnetic coupling to zero removes photon-containing contact rules. Gauge consistency and longitudinal-vector high-energy behavior require the contact and exchange contributions together. The sign correction in (C.26) is retained; [Romão and Silva, section 5.3, equation (63)](https://arxiv.org/html/1209.6213v2#S5.SS3) gives the same positive imaginary coefficient for the four-W interaction after matching leg order.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $1$ | Electromagnetic coupling | The coefficient in the photon-containing quartic vertices. |
| $\signal{g}$ | $1$ | Weak gauge coupling | The coefficient in the weak quartic vertices. |
| $\signal{\theta}_W$ | $1$ | Weak mixing angle | The angle in the neutral-boson coupling factors. |
