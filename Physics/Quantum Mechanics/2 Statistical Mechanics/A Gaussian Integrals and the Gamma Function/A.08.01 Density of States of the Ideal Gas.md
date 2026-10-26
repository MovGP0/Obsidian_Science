---
title: "Density of States of the Ideal Gas"
source_chapter: "A"
source_section: "A.8.1"
source_page: 469
---

> [!TLDR]
> The ideal-gas density of states follows from the volume enclosed by an energy surface in momentum space.

For a free particle in a box with volume $\mechanical{V}=\mechanical{L}^3$, the number of quantum states below energy $\energy{E}$ is proportional to the volume of a momentum-space ball with radius $\mechanical{p}=\sqrt{2\mechanical{m}\energy{E}}$. In three dimensions,

$$
\Phi(\energy{E})
=\frac{\mechanical{V}}{\signal{h}^3}\frac{4\pi}{3}\mechanical{p}^3
=\frac{\mechanical{V}}{\signal{h}^3}\frac{4\pi}{3}
(2\mechanical{m}\energy{E})^{3/2}.
$$

The density of states is

$$
g(\energy{E})
=\frac{d\Phi}{d\energy{E}}
=\frac{2\pi\mechanical{V}}{\signal{h}^3}
(2\mechanical{m})^{3/2}\sqrt{\energy{E}}
=\frac{\mechanical{V}}{4\pi^2}
\left(\frac{2\mechanical{m}}{\signal{\hbar}^2}\right)^{3/2}
\sqrt{\energy{E}}.
$$

In $N$ spatial dimensions, the N-ball volume gives

$$
g_N(\energy{E})\propto\energy{E}^{N/2-1}.
$$

Here $N$ denotes spatial dimension, rather than particle count.

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
