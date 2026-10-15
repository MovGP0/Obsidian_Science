---
title: "B.1 Decays"
---

> [!TLDR]
> Decay rates follow from the invariant amplitude and the final-state phase space.

<!-- PDF page 384; printed page 376 -->

Suppose particle 1 decays into particles $2,3,4,\ldots,n$:

$$
1\to2+3+4+\cdots+n
$$

The decay rate is given by the formula

$$
d\mechanical{\Gamma}=|\signal{\mathcal M}|^2\frac{S}{2\energy{\hbar}\mechanical{m}_1}
\left\{
\left[\frac{\mechanical{c}\,d^3\mechanical{\mathbf p}_2}{(2\pi)^3\,2\energy{E}_2}\right]
\left[\frac{\mechanical{c}\,d^3\mechanical{\mathbf p}_3}{(2\pi)^3\,2\energy{E}_3}\right]\cdots
\left[\frac{\mechanical{c}\,d^3\mechanical{\mathbf p}_n}{(2\pi)^3\,2\energy{E}_n}\right]
\right\}
\times(2\pi)^4\delta^4(\mechanical{p}_1-\mechanical{p}_2-\mechanical{p}_3-\cdots-\mechanical{p}_n)
\tag{B.1}
$$

where $\mechanical{p}_i=(\energy{E}_i/\mechanical{c},\mechanical{\mathbf p}_i)$ is the 4-momentum of the $i$th particle (which carries mass $\mechanical{m}_i$, so that $\energy{E}_i^2-\mechanical{\mathbf p}_i^2\mechanical{c}^2=\mechanical{m}_i^2\mechanical{c}^4$). The decaying particle is presumed to be at rest: $\mechanical{p}_1=(\mechanical{m}_1\mechanical{c},\mathbf0)$. $S$ is a product of statistical factors: $1/j!$ for each group of $j$ identical particles in the final state.

## Two-Body Decays

If there are just two particles in the final state, the integrals can be performed explicitly. The total decay rate is

$$
\mechanical{\Gamma}=\frac{S|\mechanical{\mathbf p}|}{8\pi\energy{\hbar}\mechanical{m}_1^2\mechanical{c}}|\signal{\mathcal M}|^2
\tag{B.2}
$$

Where $|\mechanical{\mathbf p}|$ is the magnitude of either outgoing momentum:

$$
|\mechanical{\mathbf p}|=\frac{\mechanical{c}}{2\mechanical{m}_1}
\sqrt{\mechanical{m}_1^4+\mechanical{m}_2^4+\mechanical{m}_3^4-2\mechanical{m}_1^2\mechanical{m}_2^2-2\mechanical{m}_1^2\mechanical{m}_3^2-2\mechanical{m}_2^2\mechanical{m}_3^2}
\tag{B.3}
$$

In particular, if the outgoing particles are *massless* then $|\mechanical{\mathbf p}|=\mechanical{m}_1\mechanical{c}/2$, and

$$
\mechanical{\Gamma}=\frac{S}{16\pi\energy{\hbar}\mechanical{m}_1}|\signal{\mathcal M}|^2
\tag{B.4}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\Gamma}$ | $\unit{\mathrm{s^{-1}}}$ | Decay rate | The probability of decay per unit time in the particle rest frame. |
| $\signal{\mathcal M}$ | — | Invariant amplitude | The transition amplitude with units that depend on the final particle count. |
| $S$ | $1$ | Statistical factor | The product of factors for identical final particles. |
| $\energy{\hbar}$ | $\unit{\mathrm{erg\,s}}$ | Reduced Planck constant | The quantum constant in the rate formula. |
| $\mechanical{m}_i$ | $\unit{\mathrm{g}}$ | Particle mass | The mass of each initial or final particle. |
| $\energy{E}_i$ | $\unit{\mathrm{erg}}$ | Particle energy | The relativistic energy of each particle. |
| $\mechanical{p}_i,\mechanical{\mathbf p}_i,\mechanical{\mathbf p}$ | $\unit{\mathrm{g\,cm/s}}$ | Momentum | The four-momentum or spatial momentum of a particle. |
| $\mechanical{c}$ | $\unit{\mathrm{cm/s}}$ | Speed of light | The conversion factor between energy and momentum. |
