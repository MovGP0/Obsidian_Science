---
title: "Faddeev–Popov Ghost Propagators"
---

> [!TLDR]
> Faddeev–Popov ghosts are scalar Grassmann fields. Their Rξ-gauge masses depend on the gauge parameter and match the corresponding Goldstone masses.

Each gauge generator has a scalar Grassmann ghost field.
In $R_\xi$ gauge, the ghost masses depend on $\xi$ and agree with the corresponding Goldstone-boson masses.

A ghost line contracts a ghost with an antighost; keep this orientation when connecting vertices. The scalar denominator does not make a ghost an ordinary scalar particle: Grassmann statistics produce a minus sign for a closed ghost loop. Ghosts compensate unphysical gauge contributions in covariant perturbation theory and are not allowed as physical external states. These distinctions follow from the ghost action; see [Romão and Silva, sections 2.7 and 5.11](https://arxiv.org/html/1209.6213v2#S2.SS7).

The photon ghost in this electroweak list must not be confused with a free ghost in isolated Abelian QED. The full broken electroweak ghost sector can contain interactions even though the photon ghost has a massless propagator.

The photon ghost propagator is
$$
\signal{\Delta}_{c_\gamma}(\mechanical{p})
=\frac{i}{\mechanical{p}^2+i\varepsilon}.
\tag{C.6}
$$
The gluon ghost propagator is
$$
\signal{\Delta}_{c_g}^{ab}(\mechanical{p})
=\frac{i\delta^{ab}}{\mechanical{p}^2+i\varepsilon}.
\tag{C.7}
$$
For the charged weak ghosts,
$$
\signal{\Delta}_{c_W^\pm}(\mechanical{p})
=\frac{i}{\mechanical{p}^2-\xi\mechanical{m}_W^2+i\varepsilon},
\tag{C.8}
$$
and for the neutral Z ghost,
$$
\signal{\Delta}_{c_Z}(\mechanical{p})
=\frac{i}{\mechanical{p}^2-\xi\mechanical{m}_Z^2+i\varepsilon}.
\tag{C.9}
$$

> [!note] Correction to the source
> The source attaches $\delta^{ab}$ and color indices to the photon ghost in (C.6). A single electromagnetic gauge generator has no QCD color index, so these indices are omitted here. They remain in the gluon ghost propagator.

At $\xi=1$, the W and Z ghost poles coincide with their corresponding vector masses; at $\xi=0$, their mass terms vanish. This is a gauge-choice check, not a prediction of observable ghost masses. Each numerator is dimensionless and each denominator has energy-squared units. The absence of a color delta for the photon, and its presence for the gluon, checks which gauge generator space the propagator acts on.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\Delta}_{c_\gamma},\signal{\Delta}_{c_g}^{ab},\signal{\Delta}_{c_W^\pm},\signal{\Delta}_{c_Z}$ | $\unit{GeV^{-2}}$ | Ghost propagators | The photon, gluon, charged weak, and neutral weak ghost Green functions. |
| $\mechanical{p}$ | $\unit{GeV}$ | Ghost line momentum | The four-momentum carried by a ghost propagator. |
| $\mechanical{m}_W,\mechanical{m}_Z$ | $\unit{GeV}$ | Weak-boson masses | The masses that set the corresponding gauge-dependent ghost poles. |
