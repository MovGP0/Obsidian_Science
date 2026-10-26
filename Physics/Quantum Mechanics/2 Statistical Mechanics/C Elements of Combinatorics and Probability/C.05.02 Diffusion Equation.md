---
title: "Diffusion Equation"
source_chapter: "C"
source_section: "C.5.2"
source_page: 489
---

> [!TLDR]
> The continuum limit of a symmetric random walk gives the diffusion equation and a spreading Gaussian probability density.

In the continuum limit of a symmetric walk with time step $\mechanical{\tau}$ and spatial step $\mechanical{\ell}$, the position density obeys the diffusion equation:

$$
\frac{\partial P}{\partial\mechanical{t}}
=D\frac{\partial^2P}{\partial\mechanical{x}^2},
\qquad
D=\frac{\mechanical{\ell}^2}{2\mechanical{\tau}}.
$$

For the initial condition $P(\mechanical{x},0)=\delta(\mechanical{x})$, the fundamental solution is

$$
P(\mechanical{x},\mechanical{t})
=\frac1{\sqrt{4\pi D\mechanical{t}}}
\exp\left(-\frac{\mechanical{x}^2}{4D\mechanical{t}}\right),
\qquad
\langle\mechanical{x}^2\rangle=2D\mechanical{t}.
$$

The Gaussian broadens with time. For isotropic diffusion in three dimensions,

$$
\langle\mechanical{r}^2\rangle=6D\mechanical{t}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{t},\mechanical{\tau}$ | $\unit{s}$ | Time and step interval | Elapsed time and the duration of one random-walk step. |
| $\mechanical{x},\mechanical{r},\mechanical{\ell}$ | $\unit{m}$ | Position and step length | The one-dimensional displacement, radial displacement, and lattice spacing. |
| $D$ | $\unit{m^2\,s^{-1}}$ | Diffusion coefficient | The coefficient that sets the growth rate of displacement variance. |
| $P(\mechanical{x},\mechanical{t})$ | $\unit{m^{-1}}$ | Probability density | The one-dimensional position density. |
