---
title: "Fundamental Conversion Factors"
---

> [!TLDR]
> Conversion factors connect natural-unit calculations with SI quantities.

The following reference relations give the conversion between natural units and SI units.

**Table A.1** Fundamental constants and conversion factors. The values are those quoted in the source.

| Constant or quantity | Value with explicit units | Value in natural units |
| --- | --- | --- |
| $\energy{\hbar}$ | $1.054\,571\,817\times10^{-34}\,\unit{J\,s}$ | $1$ |
| $\mechanical{c}$ | $2.997\,924\,58\times10^8\,\unit{m\,s^{-1}}$ | $1$ |
| $\energy{\hbar}\mechanical{c}$ | $197.326\,980\,\unit{MeV\,fm}$ | $1$ |
| $(\energy{\hbar}\mechanical{c})^2$ | $0.389\,379\,\unit{GeV^2\,mb}$ | $1$ |
| $1\,\unit{GeV^{-1}}$ | $0.197\,327\,\unit{fm}$ | — |
| $1\,\unit{GeV^{-2}}$ | $0.389\,379\,\unit{mb}$ | — |
| $1\,\unit{fm}$ | $10^{-15}\,\unit{m}$ | $5.068\,\unit{GeV^{-1}}$ |
| Proton mass $\mechanical{m}_p$ | $938.272\,\unit{MeV}/\mechanical{c}^2$ | $938.272\,\unit{MeV}$ |
| Electron mass $\mechanical{m}_e$ | $0.510\,999\,\unit{MeV}/\mechanical{c}^2$ | $0.510\,999\,\unit{MeV}$ |
| Fine-structure constant $\electric{\alpha}$ | $1/137.035\,999\,084$ | $\electric{e}^2/(4\pi)$ |

> [!note]
> The source labels the middle column “SI value”, but it also uses high-energy units such as $\unit{MeV}$, $\unit{fm}$, and $\unit{mb}$. The heading here states that the units are explicit. The factors containing $\energy{\hbar}\mechanical{c}$ relate dimensions before the natural-unit convention is applied.

Choose the conversion factor from the dimension of the calculated result. An inverse-energy length uses one power of the tabulated product of constants; a cross section uses its square. Thus a cross section calculated as $2\,\unit{GeV^{-2}}$ is $0.778\,758\,\unit{mb}$ with the quoted factors. Do not multiply an area by the length factor only once.

The length entries give a reciprocal check: $0.197\,327\times5.068\simeq1$ at the displayed precision. Also, $1\,\unit{mb}=0.1\,\unit{fm^2}$, so squaring the inverse-energy length conversion reproduces the area conversion. The charge formula assumes rationalized electromagnetic units; the fine-structure constant is dimensionless, but a charge in coulombs is not obtained by assigning the same number to the natural-unit charge. These checks retain the source values rather than update their precision.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The action conversion in Table A.1. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | The conversion between mass-energy and length-time units. |
| $\mechanical{m}_p,\mechanical{m}_e$ | $\unit{MeV}$ | Particle masses | The proton and electron masses after setting the speed of light to one. |
| $\electric{\alpha},\electric{e}$ | $1$ | Electromagnetic couplings | The fine-structure constant and elementary charge in natural units. |
| — | $\unit{mb}$ | Cross section | The worked area conversion from inverse squared energy units. |
