---
title: "Fluctuation–Dissipation Theorem"
source_chapter: "C"
source_section: "C.5.4"
source_page: 490
---

> [!TLDR]
> The Einstein–Smoluchowski relation connects a Brownian particle's diffusion with its response to an applied force.

Consider a Brownian particle in a homogeneous bath at fixed positive temperature. Use times long compared with momentum relaxation and a weak applied force, so a steady drift velocity is proportional to that force. Mobility refers to this linear, low-frequency response; diffusion is measured from positional variance when no force is applied. The relation below concerns the same particle and bath in both measurements.

The diffusion coefficient $D$ and mechanical mobility $\mechanical{\mu}_{\mathrm m}$ of a Brownian particle obey the Einstein–Smoluchowski relation:

$$
D=\mechanical{\mu}_{\mathrm m}
\thermal{k}_{\mathrm B}\thermal{T}.
$$

Mobility is the drift velocity per applied force. This relation is a special case of the fluctuation–dissipation theorem: it connects an equilibrium system's response to a force with its spontaneous fluctuations.

## Why equilibrium fixes the ratio

Introduce a smooth confining potential energy $\energy{U}(\mechanical{x})$ with force $\mechanical{F}=-\partial\energy{U}/\partial\mechanical{x}$. With constant mobility and diffusion coefficient, the one-dimensional probability current is the sum of drift and diffusive currents:

$$
j=\mechanical{\mu}_{\mathrm m}\mechanical{F}P
-D\frac{\partial P}{\partial\mechanical{x}}.
$$

Equilibrium has zero current and the Boltzmann density $P\propto\exp[-\energy{U}/(\thermal{k}_{\mathrm B}\thermal{T})]$. Its derivative is $\partial P/\partial\mechanical{x}=\mechanical{F}P/(\thermal{k}_{\mathrm B}\thermal{T})$. Substitution into the current therefore requires the displayed Einstein relation wherever the force is nonzero. The weak confining potential is a way to compare drift with diffusion in equilibrium. [Einstein's original Brownian-motion paper, Section 3](https://www.damtp.cam.ac.uk/user/gold/pdfs/teaching/old_literature/Einstein1905.pdf#page=6) uses this balance of opposite transport processes.

The units provide an independent check: mobility times thermal energy has units $\unit{m^2\,s^{-1}}$, as a diffusion coefficient must. A proposed test is to infer diffusion from the slope of the unforced positional variance, then measure the drift per weak force in the same bath. Compare their ratio with thermal energy. No measured result is assumed here.

This static Einstein relation is one limit of fluctuation–dissipation theory. A strong force, an active bath, short-time inertia, or frequency-dependent response needs further analysis. In particular, an effective spreading rate in a driven system does not automatically obey the equilibrium formula.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mu}_{\mathrm m}$ | $\unit{m\,N^{-1}\,s^{-1}}$ | Mechanical mobility | The drift speed per applied force. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $D$ | $\unit{m^2\,s^{-1}}$ | Diffusion coefficient | The rate coefficient of spontaneous positional spreading. |
| $\mechanical{x}$ | $\unit{m}$ | Position | The coordinate along the weak applied force. |
| $\mechanical{F}$ | $\unit{N}$ | Applied force | The force from the confining potential. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | The position-dependent energy that fixes equilibrium weights. |
| $P$ | $\unit{m^{-1}}$ | Position density | The normalized one-dimensional probability density. |
| $j$ | $\unit{s^{-1}}$ | Probability current | The probability transported per unit time across a point. |
