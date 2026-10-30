---
title: "Faddeev–Popov Ghost Propagators"
---

> [!TLDR]
> Faddeev–Popov ghosts are scalar Grassmann fields. Their Rξ-gauge masses depend on the gauge parameter and match the corresponding Goldstone masses.

Each gauge generator has a scalar Grassmann ghost field.
In $R_\xi$ gauge, the ghost masses depend on $\xi$ and agree with the corresponding Goldstone-boson masses.

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

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\Delta}_{c_\gamma},\signal{\Delta}_{c_g}^{ab},\signal{\Delta}_{c_W^\pm},\signal{\Delta}_{c_Z}$ | $\unit{GeV^{-2}}$ | Ghost propagators | The photon, gluon, charged weak, and neutral weak ghost Green functions. |
| $\mechanical{p}$ | $\unit{GeV}$ | Ghost line momentum | The four-momentum carried by a ghost propagator. |
| $\mechanical{m}_W,\mechanical{m}_Z$ | $\unit{GeV}$ | Weak-boson masses | The masses that set the corresponding gauge-dependent ghost poles. |
