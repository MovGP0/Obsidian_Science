---
title: "Integrals over the Maxwell–Boltzmann Distribution"
source_chapter: "A"
source_section: "A.8.2"
source_page: 469
---

> [!TLDR]
> Gaussian moments give the mean speed, mean squared speed, and kinetic energy of a Maxwell–Boltzmann gas.

In three dimensions, the Maxwell–Boltzmann speed distribution is

$$
f(\mechanical{v})
=4\pi n
\left(\frac{\mechanical{m}}{2\pi\thermal{k}_{\mathrm B}\thermal{T}}\right)^{3/2}
\mechanical{v}^2
e^{-\mechanical{m}\mechanical{v}^2/(2\thermal{k}_{\mathrm B}\thermal{T})}.
\tag{A.10}
$$

The source includes number density $n$, so $\int_0^\infty f(\mechanical{v})\,d\mechanical{v}=n$. Use $f/n$ when calculating a single-particle mean.

The Gaussian moments give

$$
\begin{aligned}
\langle\mechanical{v}^2\rangle
&=\frac{4\pi}{(2\pi\thermal{k}_{\mathrm B}\thermal{T}/\mechanical{m})^{3/2}}
\int_0^\infty
\mechanical{v}^4e^{-\mechanical{m}\mechanical{v}^2/(2\thermal{k}_{\mathrm B}\thermal{T})}
\,d\mechanical{v}\\
&=\frac{3\thermal{k}_{\mathrm B}\thermal{T}}{\mechanical{m}},\\
\langle\mechanical{v}\rangle
&=\sqrt{\frac{8\thermal{k}_{\mathrm B}\thermal{T}}{\pi\mechanical{m}}},\\
\mechanical{v}_{\mathrm{mp}}
&=\sqrt{\frac{2\thermal{k}_{\mathrm B}\thermal{T}}{\mechanical{m}}}.
\end{aligned}
$$

The most probable speed is the location of the maximum of $f$. The mean kinetic energy is

$$
\langle\energy{E}_k\rangle
=\frac{\mechanical{m}}2\langle\mechanical{v}^2\rangle
=\frac32\thermal{k}_{\mathrm B}\thermal{T},
$$

in agreement with equipartition.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}_k$ | $\unit{J}$ | Kinetic energy | The translational kinetic energy of one molecule. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass of one particle. |
| $\mechanical{v},\mechanical{v}_{\mathrm{mp}}$ | $\unit{m\,s^{-1}}$ | Molecular speed | The speed and the most probable speed. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $f(\mechanical{v})$ | $\unit{s\,m^{-4}}$ | Speed number-density distribution | The number density per speed interval; f divided by n is a probability density. |
| $n$ | $\unit{m^{-3}}$ | Number density | The particle count per volume. |
