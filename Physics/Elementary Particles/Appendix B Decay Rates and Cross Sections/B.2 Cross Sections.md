---
title: "B.2 Cross Sections"
---

> [!TLDR]
> Cross sections follow from the invariant amplitude, incoming flux, and final-state phase space.

<!-- PDF page 385; printed page 377 -->

Suppose particles 1 and 2 collide, producing particles $3,4,\ldots,n$:

$$
1+2\to3+4+\cdots+n
$$

The cross section is given by the formula

$$
d\mechanical{\sigma}=|\signal{\mathcal M}|^2
\frac{\energy{\hbar}^2S}{4\sqrt{(\mechanical{p}_1\cdot\mechanical{p}_2)^2-(\mechanical{m}_1\mechanical{m}_2\mechanical{c}^2)^2}}
\left\{
\left[\frac{\mechanical{c}\,d^3\mechanical{\mathbf p}_3}{(2\pi)^3\,2\energy{E}_3}\right]
\left[\frac{\mechanical{c}\,d^3\mechanical{\mathbf p}_4}{(2\pi)^3\,2\energy{E}_4}\right]\cdots
\left[\frac{\mechanical{c}\,d^3\mechanical{\mathbf p}_n}{(2\pi)^3\,2\energy{E}_n}\right]
\right\}
\times(2\pi)^4\delta^4(\mechanical{p}_1+\mechanical{p}_2-\mechanical{p}_3-\mechanical{p}_4-\cdots-\mechanical{p}_n)
\tag{B.5}
$$

where (as before) $\mechanical{p}_i=(\energy{E}_i/\mechanical{c},\mechanical{\mathbf p}_i)$ is the 4-momentum of particle $i$ (mass $\mechanical{m}_i$), $\energy{E}_i=\mechanical{c}\sqrt{\mechanical{m}_i^2\mechanical{c}^2+\mechanical{\mathbf p}_i^2}$, and $S$ is a statistical factor ($1/j!$ for each group of $j$ identical particles in the final state).

## Two-Body Scattering

If there are just two particles in the final state, the integrals can be performed explicitly.

(a) *In the center-of-momentum frame.* Here

$$
\sqrt{(\mechanical{p}_1\cdot\mechanical{p}_2)^2-(\mechanical{m}_1\mechanical{m}_2\mechanical{c}^2)^2}
=(\energy{E}_1+\energy{E}_2)|\mechanical{\mathbf p}_1|/\mechanical{c}
\tag{B.6}
$$

and

$$
\frac{d\mechanical{\sigma}}{d\mechanical{\Omega}}
=\left(\frac{\energy{\hbar}\mechanical{c}}{8\pi}\right)^2
\frac{S|\signal{\mathcal M}|^2}{(\energy{E}_1+\energy{E}_2)^2}
\frac{|\mechanical{\mathbf p}_f|}{|\mechanical{\mathbf p}_i|}
\tag{B.7}
$$

where $|\mechanical{\mathbf p}_i|$ is the magnitude of either incoming momentum, and $|\mechanical{\mathbf p}_f|$ is the magnitude of either outgoing momentum. In particular, for *elastic* scattering $(A+B\to A+B)$, $|\mechanical{\mathbf p}_i|=|\mechanical{\mathbf p}_f|$, so [letting $\energy{E}=(\energy{E}_1+\energy{E}_2)/2$]:

$$
\frac{d\mechanical{\sigma}}{d\mechanical{\Omega}}
=\left(\frac{\energy{\hbar}\mechanical{c}}{16\pi}\right)^2
\frac{S|\signal{\mathcal M}|^2}{\energy{E}^2}
\tag{B.8}
$$

(b) *In the lab frame (particle 2 at rest).* Here

$$
\sqrt{(\mechanical{p}_1\cdot\mechanical{p}_2)^2-(\mechanical{m}_1\mechanical{m}_2\mechanical{c}^2)^2}
=\mechanical{m}_2\mechanical{c}|\mechanical{\mathbf p}_1|
\tag{B.9}
$$

In the case of elastic scattering $(A+B\to A+B)$, the differential cross section is

$$
\frac{d\mechanical{\sigma}}{d\mechanical{\Omega}}
=\left(\frac{\energy{\hbar}}{8\pi}\right)^2
\frac{\mechanical{\mathbf p}_3^2S|\signal{\mathcal M}|^2}
{\mechanical{m}_2|\mechanical{\mathbf p}_1|
\left||\mechanical{\mathbf p}_3|(\energy{E}_1+\mechanical{m}_2\mechanical{c}^2)
-|\mechanical{\mathbf p}_1|\energy{E}_3\cos\mechanical{\theta}\right|}
\tag{B.10}
$$

If, in particular, the incident particle is *massless* $(\mechanical{m}_1=0)$, this reduces to

$$
\frac{d\mechanical{\sigma}}{d\mechanical{\Omega}}
=\left(\frac{\energy{\hbar}\energy{E}_3}{8\pi\mechanical{m}_2\mechanical{c}\energy{E}_1}\right)^2S|\signal{\mathcal M}|^2
\tag{B.11}
$$

If the target recoil is negligible $(\mechanical{m}_2\mechanical{c}^2\gg\energy{E}_1)$, then (B.10) reduces to

$$
\frac{d\mechanical{\sigma}}{d\mechanical{\Omega}}
=\left(\frac{\energy{\hbar}}{8\pi\mechanical{m}_2\mechanical{c}}\right)^2|\signal{\mathcal M}|^2
\tag{B.12}
$$

If the outgoing particles are massless $(\mechanical{m}_3=\mechanical{m}_4=0)$, (B.5) yields

$$
\frac{d\mechanical{\sigma}}{d\mechanical{\Omega}}
=\left(\frac{\energy{\hbar}}{8\pi}\right)^2
\frac{S|\signal{\mathcal M}|^2|\mechanical{\mathbf p}_3|}
{\mechanical{m}_2|\mechanical{\mathbf p}_1|(\energy{E}_1+\mechanical{m}_2\mechanical{c}^2-|\mechanical{\mathbf p}_1|\mechanical{c}\cos\mechanical{\theta})}
\tag{B.13}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\sigma}$ | $\unit{\mathrm{cm^2}}$ | Cross section | The effective area for the scattering process. |
| $\mechanical{\Omega}$ | $\unit{\mathrm{sr}}$ | Solid angle | The angular region for the differential cross section. |
| $\signal{\mathcal M}$ | — | Invariant amplitude | The transition amplitude with units that depend on the final particle count. |
| $S$ | $1$ | Statistical factor | The product of factors for identical final particles. |
| $\energy{\hbar}$ | $\unit{\mathrm{erg\,s}}$ | Reduced Planck constant | The quantum constant in the cross-section formula. |
| $\mechanical{m}_i$ | $\unit{\mathrm{g}}$ | Particle mass | The mass of each initial or final particle. |
| $\energy{E}_i,\energy{E}$ | $\unit{\mathrm{erg}}$ | Particle energy | A particle energy or the mean initial energy in the center-of-momentum frame. |
| $\mechanical{p}_i,\mechanical{\mathbf p}_i,\mechanical{\mathbf p}_f$ | $\unit{\mathrm{g\,cm/s}}$ | Momentum | The four-momentum or spatial momentum of an initial or final particle. |
| $\mechanical{c}$ | $\unit{\mathrm{cm/s}}$ | Speed of light | The conversion factor between energy and momentum. |
| $\mechanical{\theta}$ | $\unit{\mathrm{rad}}$ | Scattering angle | The angle of the outgoing particle in the lab frame. |
