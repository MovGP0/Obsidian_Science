---
title: "Integrals over the Maxwell–Boltzmann Distribution"
source_chapter: "A"
source_section: "A.8.2"
source_page: 469
---

> [!TLDR]
> Gaussian moments give the mean speed, mean squared speed, and kinetic energy of a Maxwell–Boltzmann gas.

Consider particles of mass $\mechanical{m}>0$ in classical thermal equilibrium at $\thermal{T}>0$. Speeds are measured relative to the gas rest frame. The kinetic energy is nonrelativistic and quadratic, and quantum occupation effects are negligible. The distribution is over speed magnitudes, not signed velocity components. In three dimensions, the Maxwell–Boltzmann speed distribution is

$$
f(\mechanical{v})
=4\pi n
\left(\frac{\mechanical{m}}{2\pi\thermal{k}_{\mathrm B}\thermal{T}}\right)^{3/2}
\mechanical{v}^2
e^{-\mechanical{m}\mechanical{v}^2/(2\thermal{k}_{\mathrm B}\thermal{T})}.
\tag{A.10}
$$

The source includes number density $n$, so $\int_0^\infty f(\mechanical{v})\,d\mechanical{v}=n$. Use $f/n$ when calculating a single-particle mean.

The factor $4\pi\mechanical{v}^2$ counts the velocity-space shell at a given speed. Without it, the Gaussian describes a different measure. In particular, the speed density vanishes at zero although the velocity-vector density is largest there. The shell construction and moments are discussed in [Tong, Statistical Physics §2.3](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S2.html#S2.SS3).

To normalize (A.10), use the half-line moment with power $2$. For the mean squared speed, multiplication by $\mechanical{v}^2$ changes the radial power to $4$. For the mean speed, the power is $3$, so use the gamma integral rather than an even full-line moment.

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

For positive speed, differentiating $\ln f$ gives $2/\mechanical{v}-\mechanical{m}\mechanical{v}/(\thermal{k}_{\mathrm B}\thermal{T})$. Its zero gives the most probable speed. The endpoint at zero is not the maximum because the radial measure makes $f(0)=0$.

The most probable speed is the location of the maximum of $f$. The mean kinetic energy is

$$
\langle\energy{E}_k\rangle
=\frac{\mechanical{m}}2\langle\mechanical{v}^2\rangle
=\frac32\thermal{k}_{\mathrm B}\thermal{T},
$$

in agreement with equipartition.

As a check, the three speed scales satisfy $\mechanical{v}_{\mathrm{mp}}<\langle\mechanical{v}\rangle<\sqrt{\langle\mechanical{v}^2\rangle}$. They all grow as the square root of temperature and decrease as the inverse square root of mass. Multiplying the number density changes $f$ but none of these normalized speeds. Their units are speed because $\thermal{k}_{\mathrm B}\thermal{T}/\mechanical{m}$ has units of speed squared.

A proposed test is to compare a normalized speed histogram at two equilibrium temperatures for the same species. The model predicts the same shape after speeds are scaled by the square root of temperature. No measured histogram is supplied here. A drifting gas must first be referred to its rest frame, and a quantum-degenerate or relativistic gas requires a different distribution.

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
