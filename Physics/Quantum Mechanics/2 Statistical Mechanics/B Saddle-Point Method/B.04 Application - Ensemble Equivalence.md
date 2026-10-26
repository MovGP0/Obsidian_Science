---
title: "Application: Ensemble Equivalence"
source_chapter: "B"
source_section: "B.4"
source_page: 476
---

> [!TLDR]
> In the thermodynamic limit, a saddle selects the particle number or energy that makes different ensemble descriptions agree.

At fixed density in the thermodynamic limit, $N\to\infty$, canonical and grand-canonical ensembles give the same intensive thermodynamic quantities under the usual equivalence conditions. The saddle-point method shows how this occurs.

## From the grand-canonical to the canonical ensemble

The grand partition function is

$$
\mathcal Z(\thermal{\beta},\energy{\mu})
=\sum_{N=0}^\infty
e^{\thermal{\beta}\energy{\mu}N}Z_N(\thermal{\beta}),
$$

where $Z_N$ is the canonical partition function for $N$ particles. In an extensive system, write $Z_N=e^{Nf(\thermal{\beta},N/\mechanical{V})}$, with a slowly varying intensive function $f$. The dominant term is at $N=\bar N$, where the exponent is maximal:

$$
\ln\mathcal Z
=\max_N\left[\thermal{\beta}\energy{\mu}N+\ln Z_N\right]
+\frac12\ln\left[
\frac{2\pi}
{\left\lvert
\frac{\partial^2}{\partial N^2}
(\thermal{\beta}\energy{\mu}N+\ln Z_N)
\right\rvert_{N=\bar N}}
\right]
+O(1/N).
$$

> [!note] Source correction
> The source writes $Z_N\propto N$ before introducing $Z_N=e^{Nf}$. Extensivity applies to $\ln Z_N$, which is of order $N$, rather than to the partition function itself.

The saddle particle count obeys

$$
\left.
\frac{\partial}{\partial N}
(\thermal{\beta}\energy{\mu}N+\ln Z_N)
\right|_{N=\bar N}=0,
$$

so

$$
\energy{\mu}
=-\thermal{k}_{\mathrm B}\thermal{T}
\left.\frac{\partial\ln Z_N}{\partial N}\right|_{N=\bar N}.
$$

This is the canonical relation for chemical potential.

The logarithmic correction is $O(\ln N)$ compared with the extensive leading logarithm $O(N)$. Thus, to leading thermodynamic order,

$$
\energy{\Omega}
=-\thermal{k}_{\mathrm B}\thermal{T}\ln\mathcal Z
=\energy{F}(\bar N)-\energy{\mu}\bar N
=-\mechanical{p}\mechanical{V},
$$

where $\energy{F}=-\thermal{k}_{\mathrm B}\thermal{T}\ln Z_{\bar N}$. The saddle correction to the energy potential is of order $\thermal{k}_{\mathrm B}\thermal{T}\ln N$ and vanishes per particle as $\ln N/N$. This is ensemble equivalence.

## Particle-number fluctuations

The Gaussian width gives the particle-number variance:

$$
\langle(\Delta N)^2\rangle
=\frac{\partial^2\ln\mathcal Z}
{\partial(\thermal{\beta}\energy{\mu})^2}
=\thermal{k}_{\mathrm B}\thermal{T}
\left.\frac{\partial\bar N}{\partial\energy{\mu}}
\right|_{\thermal{T},\mechanical{V}}.
$$

For an ordinary stable thermodynamic state, the root-mean-square relative fluctuation scales as

$$
\frac{\sqrt{\langle(\Delta N)^2\rangle}}{\bar N}
\sim\frac1{\sqrt{\bar N}}\longrightarrow0.
$$

The negligible relative fluctuations support equivalence of the ensembles.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\Delta N$ | $1$ | Particle-number fluctuation | The deviation from the mean particle count; its root-mean-square size sets the saddle width. |
| $\energy{\mu}$ | $\unit{J}$ | Chemical potential | The thermodynamic energy conjugate to particle number. |
| $\energy{\Omega}$ | $\unit{J}$ | Grand potential | The thermodynamic potential equal to minus thermal energy times the log grand partition function. |
| $\energy{F}$ | $\unit{J}$ | Helmholtz free energy | The canonical free energy of the system. |
| $\mathcal Z$ | $1$ | Grand partition function | The statistical sum over particle numbers and canonical states. |
| $\mechanical{p}$ | $\unit{Pa}$ | Pressure | The thermodynamic pressure. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The spatial volume of the gas. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $N$ | $1$ | Particle count | The number of particles in the system. |
| $Z$ | $1$ | Partition function | The sum or integral of thermal statistical weights. |
