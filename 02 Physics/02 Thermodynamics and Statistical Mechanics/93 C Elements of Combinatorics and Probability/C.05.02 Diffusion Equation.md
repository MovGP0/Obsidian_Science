---
title: "Diffusion Equation"
source_chapter: "C"
source_section: "C.5.2"
source_page: 489
---

> [!TLDR]
> The continuum limit of a symmetric random walk gives the diffusion equation and a spreading Gaussian probability density.

Use a homogeneous, unbounded line with no drift. On the lattice, the probability at a site after one more step is half the probability at each neighbouring site before that step. This is conservation of probability together with independent symmetric jumps. A slowly varying density has the same update law after averaging over lattice cells:

$$
P(\mechanical{x},\mechanical{t}+\mechanical{\tau})
=\frac12\left[P(\mechanical{x}-\mechanical{\ell},\mechanical{t})
+P(\mechanical{x}+\mechanical{\ell},\mechanical{t})\right].
$$

Expand the left side to first order in the time step and the right side to second order in the spatial step. Symmetry cancels the odd spatial terms. The leading balance is $\mechanical{\tau}\,\partial P/\partial\mechanical{t}=(\mechanical{\ell}^2/2)\,\partial^2P/\partial\mechanical{x}^2$. The diffusion limit takes both steps to zero with their squared-length-to-time ratio fixed; at finite steps this is an approximation on larger scales.

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

## Initial and boundary checks

The fundamental solution above is for positive time and the whole real line, with decay at infinity. Its prefactor has inverse-length units. A change of variable to $\mechanical{x}/\sqrt{4D\mechanical{t}}$ reduces its normalization to the Gaussian integral. Its second moment is $2D\mechanical{t}$, which agrees with the lattice result $N\mechanical{\ell}^2$ when $\mechanical{t}=N\mechanical{\tau}$. As time tends to zero, it approaches the delta distribution under integration; it does not approach an ordinary finite-valued function at the origin.

Integrating the diffusion equation over the line leaves only a difference of spatial gradients at infinity. Their vanishing preserves total probability. For a reflecting wall, impose zero normal flux; for an absorbing wall, probability of the surviving walker can decrease. The free-space Gaussian alone satisfies neither arbitrary wall condition.

The three-dimensional relation assumes the same diffusion coefficient in each coordinate. The three independent coordinate variances then add. Short-time inertial motion and correlated steps need a different model before this long-time diffusion approximation applies.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{t},\mechanical{\tau}$ | $\unit{s}$ | Time and step interval | Elapsed time and the duration of one random-walk step. |
| $\mechanical{x},\mechanical{r},\mechanical{\ell}$ | $\unit{m}$ | Position and step length | The one-dimensional displacement, radial displacement, and lattice spacing. |
| $D$ | $\unit{m^2\,s^{-1}}$ | Diffusion coefficient | The coefficient that sets the growth rate of displacement variance. |
| $P(\mechanical{x},\mechanical{t})$ | $\unit{m^{-1}}$ | Probability density | The one-dimensional position density. |
