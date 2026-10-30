---
title: "Quartic Gauge Vertices (QGC)"
---

> [!TLDR]
> Quartic electroweak gauge vertices combine a coupling coefficient with metric tensors whose index order follows the assigned external legs.

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $1$ | Electromagnetic coupling | The coefficient in the photon-containing quartic vertices. |
| $\signal{g}$ | $1$ | Weak gauge coupling | The coefficient in the weak quartic vertices. |
| $\signal{\theta}_W$ | $1$ | Weak mixing angle | The angle in the neutral-boson coupling factors. |
