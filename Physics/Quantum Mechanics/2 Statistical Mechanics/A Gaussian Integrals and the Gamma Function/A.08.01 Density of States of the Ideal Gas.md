---
title: "Density of States of the Ideal Gas"
source_chapter: "A"
source_section: "A.8.1"
source_page: 469
---

> [!TLDR]
> The ideal-gas density of states follows from the volume enclosed by an energy surface in momentum space.

This is a one-particle, nonrelativistic count for one internal state. The formulas use the bulk continuum approximation at positive energy; an exact finite-box count is a staircase. Periodic boundary conditions give one allowed momentum state per cell of volume $\signal{h}^3/\mechanical{V}$. The volume estimate is useful when many such cells fit inside the energy bound. See [Tong, Statistical Physics §3.1](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S3.html#S3.SS1).

For a free particle in a box with volume $\mechanical{V}=\mechanical{L}^3$, the number of quantum states below energy $\energy{E}$ is proportional to the volume of a momentum-space ball with radius $\mechanical{p}=\sqrt{2\mechanical{m}\energy{E}}$. In three dimensions,

$$
\Phi(\energy{E})
=\frac{\mechanical{V}}{\signal{h}^3}\frac{4\pi}{3}\mechanical{p}^3
=\frac{\mechanical{V}}{\signal{h}^3}\frac{4\pi}{3}
(2\mechanical{m}\energy{E})^{3/2}.
$$

Each point inside the momentum ball satisfies the energy bound. Counting its volume therefore gives the cumulative count $\Phi$, not the density itself. Differentiation converts the volume to an energy shell, including the change of radius with energy. The density of states is

$$
g(\energy{E})
=\frac{d\Phi}{d\energy{E}}
=\frac{2\pi\mechanical{V}}{\signal{h}^3}
(2\mechanical{m})^{3/2}\sqrt{\energy{E}}
=\frac{\mechanical{V}}{4\pi^2}
\left(\frac{2\mechanical{m}}{\signal{\hbar}^2}\right)^{3/2}
\sqrt{\energy{E}}.
$$

The quantity $g(\energy{E})\,d\energy{E}$ is a state count. Thus $g$ has inverse-energy units and is nonnegative. Integrating it from zero to $\energy{E}$ recovers $\Phi(\energy{E})$ and checks the factor $3/2$ from differentiation. An internal degeneracy multiplies both counts; no spin factor is included here. The density of states alone contains no temperature or occupation probabilities.

In $N$ spatial dimensions, the N-ball volume gives

$$
g_N(\energy{E})\propto\energy{E}^{N/2-1}.
$$

Here $N$ denotes spatial dimension, rather than particle count. The exponent follows because the ball volume scales as momentum to power $N$, and momentum scales as the square root of energy. Differentiation reduces the energy power by one. In two dimensions the result is constant; in one dimension it scales as $\energy{E}^{-1/2}$ and still has a finite integral near zero. These are continuum statements, not exact predictions for the first few levels of a finite box. A different dispersion relation requires a new relation between radius and energy.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}$ | $\unit{J}$ | Energy | The system energy or integration energy. |
| $\mechanical{L}$ | $\unit{m}$ | Box length | The side length of the cubic container. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass of one particle. |
| $\mechanical{p}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum magnitude | The radius of the energy ball in momentum space. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The spatial volume of the gas. |
| $\Phi(\energy{E})$ | $1$ | Cumulative state count | The number of one-particle states below the energy bound. |
| $\signal{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by two pi. |
| $\signal{h}$ | $\unit{J\,s}$ | Planck constant | The quantum of action used to count phase-space cells. |
| $g(\energy{E}),\ g_N(\energy{E})$ | $\unit{J^{-1}}$ | Density of states | The one-particle state count per energy interval in three or N dimensions. |
