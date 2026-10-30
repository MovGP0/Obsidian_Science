---
title: "Coupling Constants and Numerical Values"
---

> [!TLDR]
> The source lists 2024-era Standard Model input values. Electromagnetic and strong coupling values must be used at their stated momentum scales.

The following values are quoted by the source from the *Review of Particle Physics 2024* and are used throughout Chapters 8, 10, and 13.

The two fine-structure-constant values refer to different scales: the Thomson regime, $\mechanical{q}^2=0$, and the Z-pole scale, $\mechanical{m}_Z$.

## Reference values

| Quantity | Source value | Comment |
| --- | --- | --- |
| $\electric{\alpha}^{-1}(0)$ | $137.036$ | Fine-structure constant in the Thomson limit |
| $\electric{\alpha}^{-1}(\mechanical{m}_Z)$ | $127.95$ | Electromagnetic coupling evolved to the electroweak scale |
| $\signal{\alpha}_s(\mechanical{m}_Z)$ | $0.1179$ | QCD coupling in the modified minimal-subtraction scheme |
| $\signal{G}_F$ | $1.1664\times10^{-5}\,\unit{GeV^{-2}}$ | Fermi constant |
| $\signal{v}$ | $246.22\,\unit{GeV}$ | Higgs vacuum scale |
| $\sin^2\signal{\theta}_W(\mechanical{m}_Z)$ | $0.2312$ | Modified minimal-subtraction scheme |
| $\mechanical{m}_W$ | $80.369\,\unit{GeV}$ | Charged weak boson |
| $\mechanical{m}_Z$ | $91.188\,\unit{GeV}$ | Neutral weak boson |
| $\mechanical{m}_h$ | $125.20\,\unit{GeV}$ | Physical Higgs boson |
| $\mechanical{m}_t$ | $172.57\,\unit{GeV}$ | Top-quark pole mass |
| $\mechanical{m}_b$ | $4.18\,\unit{GeV}$ | Bottom-quark mass in the modified minimal-subtraction scheme |
| $\mechanical{m}_c$ | $1.27\,\unit{GeV}$ | Charm-quark mass in the modified minimal-subtraction scheme |
| $\mechanical{m}_\tau$ | $1.77686\,\unit{GeV}$ | Tau-lepton mass |
| $\mechanical{m}_\mu$ | $0.1056584\,\unit{GeV}$ | Muon mass |
| $\mechanical{m}_e$ | $0.51099895\,\unit{MeV}$ | Electron mass |

## Electroweak parameter relations

The fundamental coupling relations and tree-level mass relation are
$$
\electric{e}=\signal{g}\sin\signal{\theta}_W
=\signal{g}'\cos\signal{\theta}_W,
\qquad
\cos\signal{\theta}_W=\frac{\mechanical{m}_W}{\mechanical{m}_Z}.
\tag{C.37}
$$
The vacuum and Higgs-mass relations are
$$
\signal{v}=\frac{2\mechanical{m}_W}{\signal{g}}
=(\sqrt2\,\signal{G}_F)^{-1/2},
\qquad
\mechanical{m}_h^2=2\signal{\lambda}\signal{v}^2.
\tag{C.38}
$$
See Chapter 13 for the derivation.

> [!note]
> The table mixes explicitly stated pole and running-parameter conventions, as in the source. Its modified minimal-subtraction value of $\sin^2\signal{\theta}_W$ is not the on-shell value $1-\mechanical{m}_W^2/\mechanical{m}_Z^2$. Use radiative corrections and a consistent input scheme for precision calculations. The bottom- and charm-mass rows retain the source's scheme label without adding an unstated scale.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{q}$ | $\unit{GeV}$ | Momentum-transfer scale | The four-momentum whose squared value vanishes in the Thomson limit. |
| $\mechanical{m}_Z$ | $\unit{GeV}$ | Z-boson mass scale | The reference mass used for a running electromagnetic coupling. |
| $\electric{\alpha},\electric{e}$ | $1$ | Electromagnetic couplings | The fine-structure constant and positive electric coupling at the stated scales. |
| $\signal{\alpha}_s$ | $1$ | Strong coupling strength | The QCD coupling quoted at the Z-boson mass. |
| $\signal{G}_F$ | $\unit{GeV^{-2}}$ | Fermi constant | The weak low-energy coefficient used to determine the vacuum scale. |
| $\signal{v}$ | $\unit{GeV}$ | Higgs vacuum scale | The reference vacuum magnitude in the electroweak relations. |
| $\signal{\theta}_W$ | $1$ | Weak mixing angle | The scale- and scheme-dependent angle in the electroweak couplings. |
| $\signal{g},\signal{g}'$ | $1$ | Electroweak gauge couplings | The weak and hypercharge interaction coefficients. |
| $\signal{\lambda}$ | $1$ | Higgs self-coupling | The scalar quartic coefficient in the Higgs-mass relation. |
| $\mechanical{m}_W,\mechanical{m}_h$ | $\unit{GeV}$ | Charged weak-boson and Higgs masses | The source's W and Higgs benchmark masses. |
| $\mechanical{m}_t,\mechanical{m}_b,\mechanical{m}_c$ | $\unit{GeV}$ | Heavy-quark masses | The pole or running masses identified in the source table. |
| $\mechanical{m}_\tau,\mechanical{m}_\mu$ | $\unit{GeV}$ | Tau and muon masses | The charged-lepton masses quoted in GeV. |
| $\mechanical{m}_e$ | $\unit{MeV}$ | Electron mass | The electron mass quoted in MeV. |
