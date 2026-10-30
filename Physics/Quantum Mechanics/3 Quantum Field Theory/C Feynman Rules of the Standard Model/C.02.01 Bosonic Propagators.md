---
title: "Bosonic Propagators"
---

> [!TLDR]
> The Higgs has a scalar propagator, while photon, W, Z, and gluon propagators contain gauge-dependent longitudinal terms.

## Real scalar field — physical Higgs

$$
\signal{\Delta}_h(\mechanical{p})
=\frac{i}{\mechanical{p}^2-\mechanical{m}_h^2+i\varepsilon}.
\tag{C.1}
$$

## Photon in Rξ gauge

$$
\signal{D}_\gamma^{\mu\nu}(\mechanical{p})
=\frac{-i}{\mechanical{p}^2+i\varepsilon}
\left[
g^{\mu\nu}-(1-\xi)\frac{\mechanical{p}^\mu\mechanical{p}^\nu}{\mechanical{p}^2}
\right].
\tag{C.2}
$$

## W± boson in Rξ gauge

$$
\signal{D}_W^{\mu\nu}(\mechanical{p})
=\frac{-i}{\mechanical{p}^2-\mechanical{m}_W^2+i\varepsilon}
\left[
g^{\mu\nu}-(1-\xi)
\frac{\mechanical{p}^\mu\mechanical{p}^\nu}{\mechanical{p}^2-\xi\mechanical{m}_W^2}
\right].
\tag{C.3}
$$

## Z⁰ boson in Rξ gauge

$$
\signal{D}_Z^{\mu\nu}(\mechanical{p})
=\frac{-i}{\mechanical{p}^2-\mechanical{m}_Z^2+i\varepsilon}
\left[
g^{\mu\nu}-(1-\xi)
\frac{\mechanical{p}^\mu\mechanical{p}^\nu}{\mechanical{p}^2-\xi\mechanical{m}_Z^2}
\right].
\tag{C.4}
$$

## Gluon in Rξ gauge

For color indices $a,b=1,\ldots,8$,
$$
\signal{D}_g^{\mu\nu,ab}(\mechanical{p})
=\frac{-i\delta^{ab}}{\mechanical{p}^2+i\varepsilon}
\left[
g^{\mu\nu}-(1-\xi)\frac{\mechanical{p}^\mu\mechanical{p}^\nu}{\mechanical{p}^2}
\right].
\tag{C.5}
$$

> [!note]
> As in the source, the longitudinal denominators suppress their infinitesimal pole prescriptions. Use a consistent Feynman prescription when evaluating loop integrals.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\Delta}_h$ | $\unit{GeV^{-2}}$ | Higgs propagator | The momentum-space Green function for the physical scalar. |
| $\signal{D}_\gamma^{\mu\nu},\signal{D}_W^{\mu\nu},\signal{D}_Z^{\mu\nu},\signal{D}_g^{\mu\nu,ab}$ | $\unit{GeV^{-2}}$ | Vector-boson propagators | The photon, charged weak, neutral weak, and gluon Green functions. |
| $\mechanical{p}$ | $\unit{GeV}$ | Line four-momentum | The momentum in the propagator numerators and denominators. |
| $\mechanical{m}_h,\mechanical{m}_W,\mechanical{m}_Z$ | $\unit{GeV}$ | Boson masses | The physical Higgs and weak-boson masses. |
