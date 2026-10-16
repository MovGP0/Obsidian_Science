---
title: "Phase-Space Formulas: Decay Rates and Cross Sections"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "447"
pdf_page: 461
---

> [!TLDR]
> Lorentz-invariant phase space connects transition amplitudes to decay rates and cross sections, with statistical weights for identical particles.

<!-- PDF page 461; printed page 447 -->

In this volume, Feynman rules will be given for the evaluation of the invariant amplitude $\mathcal{M}$, the specific form of which depends on the dynamics of a process. The connection between invariant amplitude and observables is then entirely kinematic. This appendix summarizes the rules for writing down the invariant amplitude, some methods for evaluating integrals over undetermined loop momenta, and the computation of the simplest measurable quantities.

It is straightforward to derive the following useful relations between amplitudes and observables.

For a general decay process $\alpha\to(1,2,\ldots,n)\equiv\beta$, the differential decay rate is

$$
d\energy{\Gamma}_{\beta\alpha}
=\frac{(2\pi)^4\delta^{(4)}(\mechanical{p}_\beta-\mechanical{p}_\alpha)
\lvert\mathcal{M}_{\beta\alpha}\rvert^2}{2\mechanical{p}_\alpha^0}
\prod_{i=1}^n\frac{\widetilde{d}\mechanical{p}_i}{(2\pi)^3}\cdot S, \tag{B.1.1}
$$

where

$$
\widetilde{d}\mechanical{p}_i=
\frac{d^3\mechanical{\mathbf p}_i}
{2\sqrt{\mechanical{\mathbf p}_i^{\,2}+\mechanical{m}_i^{\,2}}} \tag{B.1.2}
$$

is the Lorentz-invariant phase-space volume element and the statistical weight $S$ contains a factor $1/n!$ if there are $n$ identical particles in the final state:

$$
S=\prod_{k=\mathrm{species}}\frac{1}{n_k!}. \tag{B.1.3}
$$

For the important special case $\alpha\to(1,2)\equiv\beta$ of the two-body decay of a particle at rest, the differential decay rate is

$$
\frac{d\energy{\Gamma}_{\beta\alpha}}{d\mechanical{\Omega}_{\mathrm{cm}}}
=\frac{\lvert\mathcal{M}_{\beta\alpha}\rvert^2}{64\pi^2}
\frac{\mechanical{S}_{12}}{\mechanical{m}_\alpha^{\,2}}\cdot S. \tag{B.1.4}
$$

<!-- PDF page 462; printed page 448 -->

Here the quantity

$$
\mechanical{S}_{12}=
\left[\mechanical{m}_\alpha^{\,2}-(\mechanical{m}_1+\mechanical{m}_2)^2\right]^{1/2}
\left[\mechanical{m}_\alpha^{\,2}-(\mechanical{m}_1-\mechanical{m}_2)^2\right]^{1/2} \tag{B.1.5}
$$

is equal to $2\mechanical{m}_\alpha$ times the three-momentum of the products.

The cross section for a general two-body collision $\alpha\equiv(1,2)\to(3,4,\ldots,n)\equiv\beta$ is written as

$$
d\mechanical{\sigma}_{\beta\alpha}=
\frac{(2\pi)^4\delta^{(4)}(\mechanical{p}_\beta-\mechanical{p}_\alpha)
\lvert\mathcal{M}_{\beta\alpha}\rvert^2}{2\mechanical{S}_{12}}
\prod_{i=3}^n\frac{\widetilde{d}\mechanical{p}_i}{(2\pi)^3}\cdot S. \tag{B.1.6}
$$

Again it is the case of a two-body final state $\alpha\equiv(1,2)\to(3,4)\equiv\beta$ that is of particular interest. The differential cross section is

$$
\frac{d\mechanical{\sigma}_{\beta\alpha}}{d\mechanical{\Omega}_{\mathrm{cm}}}
=\frac{\lvert\mathcal{M}_{\beta\alpha}\rvert^2}{64\pi^2\energy{s}}
\frac{\mechanical{S}_{34}}{\mechanical{S}_{12}}\cdot S, \tag{B.1.7}
$$

or, in terms of the invariant momentum transfer $\mechanical{t}=(\mechanical{p}_1-\mechanical{p}_3)^2=(\mechanical{p}_2-\mechanical{p}_4)^2$,

$$
\frac{d\mechanical{\sigma}_{\beta\alpha}}{d\mechanical{t}}=
\frac{\lvert\mathcal{M}_{\beta\alpha}\rvert^2}{16\pi\mechanical{S}_{12}^{\,2}}\cdot S. \tag{B.1.8}
$$

In all the preceding expressions, an optional summation over final spins and average over initial spins is implicit.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mathcal{M},\mathcal{M}_{\beta\alpha}$ | — | Invariant amplitude | The transition amplitude; its mass dimension depends on the process. |
| $\energy{\Gamma}_{\beta\alpha}$ | $\unit{\mathrm{GeV}}$ | Decay rate | The rate for a decay into the final state, in natural units. |
| $\mechanical{p}_\alpha,\mechanical{p}_\beta,\mechanical{p}_i,\mechanical{\mathbf p}_i$ | $\unit{\mathrm{GeV}}$ | Momentum | The initial, final, and individual particle momenta. |
| $\mechanical{m}_\alpha,\mechanical{m}_i$ | $\unit{\mathrm{GeV}}$ | Particle mass | The parent and product masses in the phase-space formulas. |
| $\widetilde{d}\mechanical{p}_i$ | $\unit{\mathrm{GeV}^{2}}$ | Phase-space element | The Lorentz-invariant momentum-space volume for one particle. |
| $S$ | $1$ | Statistical weight | The factorial weight for identical final particles. |
| $n,n_k$ | $1$ | Particle count | The number of particles and the count of each identical species. |
| $\mechanical{\Omega}_{\mathrm{cm}}$ | $\unit{\mathrm{sr}}$ | Solid angle | The final direction in the center-of-mass frame. |
| $\mechanical{S}_{12},\mechanical{S}_{34}$ | $\unit{\mathrm{GeV}^{2}}$ | Two-particle kinematic factor | The mass and momentum factor for an initial or final particle pair. |
| $\mechanical{\sigma}_{\beta\alpha}$ | $\unit{\mathrm{GeV}^{-2}}$ | Cross section | The interaction cross section, in natural units. |
| $\energy{s}$ | $\unit{\mathrm{GeV}^{2}}$ | Center-of-mass energy squared | The invariant energy squared of the initial collision. |
| $\mechanical{t}$ | $\unit{\mathrm{GeV}^{2}}$ | Momentum transfer squared | The invariant squared momentum transfer between initial and final particles. |
