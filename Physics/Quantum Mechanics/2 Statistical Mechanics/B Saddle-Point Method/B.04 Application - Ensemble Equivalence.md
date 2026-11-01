---
title: "Application: Ensemble Equivalence"
source_chapter: "B"
source_section: "B.4"
source_page: 476
---

> [!TLDR]
> For a stable single phase under the stated equivalence conditions, a particle-number saddle explains agreement of leading bulk thermodynamics in the thermodynamic limit.

At fixed density in the thermodynamic limit, $N\to\infty$, canonical and grand-canonical ensembles give the same intensive thermodynamic quantities under the usual equivalence conditions. The saddle-point method shows how this occurs.

The canonical system exchanges energy with a reservoir but has fixed particle count. The grand-canonical system also exchanges particles, at fixed $\thermal{T}$, $\mechanical{V}$, and $\energy{\mu}$. Compare it with a canonical system whose particle count matches the grand-canonical mean. The calculation below assumes an extensive, stable single phase, a smooth dependence on particle count near the peak, and a finite positive particle-number response per unit volume. It is a local Gaussian argument for this regime, not a general proof for all systems or phase transitions.

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

Here $N$ in the remainder denotes the large typical particle count. The sum is approximated by an integral only when the peak is far from $N=0$ and its width is much larger than the spacing of one particle. Keep $\mechanical{V}$ fixed when differentiating with respect to $N$; the fixed-density limit is taken afterwards by increasing both the typical count and volume. A thermodynamic sequence at fixed density does not mean that density is held fixed in this derivative.

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

The exponent is $-\thermal{\beta}[\energy{F}(N)-\energy{\mu}N]$. Its maximum therefore minimizes the free energy after subtracting the energy supplied by the particle reservoir. Positive curvature of $\energy{F}$ with respect to $N$ gives a stable maximum of the exponent. At leading order, $\bar N$ denotes both this saddle and the ensemble mean; they can differ at finite size. In the exact fluctuation identity below, $\bar N$ denotes the mean.

The logarithmic correction is $O(\ln N)$ compared with the extensive leading logarithm $O(N)$. Thus, to leading thermodynamic order,

$$
\energy{\Omega}
=-\thermal{k}_{\mathrm B}\thermal{T}\ln\mathcal Z
=\energy{F}(\bar N)-\energy{\mu}\bar N
=-\mechanical{p}\mechanical{V},
$$

where $\energy{F}=-\thermal{k}_{\mathrm B}\thermal{T}\ln Z_{\bar N}$. The saddle correction to the energy potential is of order $\thermal{k}_{\mathrm B}\thermal{T}\ln N$ and vanishes per particle as $\ln N/N$. This is ensemble equivalence.

> [!note] Thermodynamic order of the equalities
> The relation between $\energy{\Omega}$ and the finite-system canonical $\energy{F}(\bar N)-\energy{\mu}\bar N$ in this display is at leading extensive order; the preceding logarithmic correction is omitted. The relation $\energy{\Omega}=-\mechanical{p}\mechanical{V}$ also uses bulk extensivity and neglects boundary contributions. Neither relation removes finite-size corrections from the partition functions.

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

The derivative identity follows by differentiating the normalized weights: each derivative with respect to $\thermal{\beta}\energy{\mu}$ brings down a particle count, and the second derivative of the logarithm subtracts the squared mean. It is exact whenever the sum and its derivatives converge. The replacement of that variance by the inverse saddle curvature is approximate:

$$
\langle(\Delta N)^2\rangle
\simeq\left[-\left.\frac{\partial^2\ln Z_N}{\partial N^2}\right|_{N=\bar N}\right]^{-1}.
$$

Thus a flatter peak gives larger number fluctuations and a larger response to chemical potential. The exact response relation is also derived in [Tong, Statistical Physics §1.4.1](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html#S1.SS4.SSS1).

For an ordinary stable thermodynamic state, the root-mean-square relative fluctuation scales as

$$
\frac{\sqrt{\langle(\Delta N)^2\rangle}}{\bar N}
\sim\frac1{\sqrt{\bar N}}\longrightarrow0.
$$

The negligible relative fluctuations support equivalence of the ensembles.

For the classical ideal gas, [[B.05 Worked Example - Ideal-Gas Partition Function]] gives $\langle(\Delta N)^2\rangle=\bar N$ exactly, which checks the scaling. The variance itself remains nonzero in the grand-canonical ensemble and is zero for fixed $N$ in the canonical ensemble. Equivalence concerns the leading bulk thermodynamics and suitably normalized observables, not identical finite-system probability distributions.

If two peaks compete, retain both contributions. If the response grows without bound near a critical point, the stated width scaling and the single Gaussian estimate need a new analysis. Failure of this argument is not, by itself, proof of ensemble inequivalence.

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
