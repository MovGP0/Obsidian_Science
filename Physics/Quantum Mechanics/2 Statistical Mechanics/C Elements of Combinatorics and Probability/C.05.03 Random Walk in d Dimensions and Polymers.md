---
title: "Random Walk in d Dimensions and Polymers"
source_chapter: "C"
source_section: "C.5.3"
source_page: 489
---

> [!TLDR]
> An ideal polymer behaves as a random walk, with square-root size growth and an entropic restoring force.

## Step-length conventions

In $d$ dimensions, take $N$ independent isotropic steps of fixed length $\mechanical{\ell}$, with uniformly distributed directions on the unit sphere $S^{d-1}$. Then

$$
\langle\lvert\mechanical{\mathbf r}\rvert^2\rangle
=N\mechanical{\ell}^2,
$$

independent of $d$. The same holds for a walk on a cubic lattice with $2d$ nearest neighbours and one length-$\mechanical{\ell}$ jump per time step.

If every coordinate instead changes independently by $\pm\mechanical{\ell}$ per step, the full step length is $\sqrt d\,\mechanical{\ell}$. Then

$$
\langle\lvert\mechanical{\mathbf r}\rvert^2\rangle
=dN\mechanical{\ell}^2.
$$

In three dimensions, this second convention agrees with $\langle\mechanical{r}^2\rangle=6D\mechanical{t}$ for $D=\mechanical{\ell}^2/(2\mechanical{\tau})$ per component and $\mechanical{t}=N\mechanical{\tau}$. For fixed total step length, the corresponding coefficient is $D=\mechanical{\ell}^2/(2d\mechanical{\tau})$.

## Ideal polymer

A fixed-link-length random walk models an ideal polymer. Its root-mean-square end-to-end distance grows as $\sqrt N$.

For isotropic three-dimensional steps,

$$
\langle\lvert\mechanical{\mathbf r}\rvert^2\rangle=N\mechanical{\ell}^2,
\qquad
\langle\mechanical{x}_i^2\rangle=\frac{N\mechanical{\ell}^2}{3}.
$$

The endpoint distribution is Gaussian in the large-$N$ central regime:

$$
P(\mechanical{\mathbf r})
\propto\exp\left(-\frac{3\mechanical{r}^2}{2N\mechanical{\ell}^2}\right).
$$

Thus the number of configurations with specified endpoints has the same exponential dependence, and

$$
\thermal{S}(\mechanical{r})
=\thermal{S}_0
-\frac{3\thermal{k}_{\mathrm B}\mechanical{r}^2}{2N\mechanical{\ell}^2}.
$$

At fixed temperature, the radial entropic restoring force is

$$
\mechanical{F}
=\thermal{T}\frac{\partial\thermal{S}}{\partial\mechanical{r}}
=-\frac{3\thermal{k}_{\mathrm B}\thermal{T}}{N\mechanical{\ell}^2}
\mechanical{r}
=-\mechanical{\kappa}\mechanical{r},
\qquad
\mechanical{\kappa}
=\frac{3\thermal{k}_{\mathrm B}\thermal{T}}{N\mechanical{\ell}^2}.
$$

> [!note] Source sign convention
> The source writes $F=-T\,\partial S/\partial r$ and obtains a positive value. That is the magnitude of the external force needed to hold the extension. The polymer's restoring force has the negative radial sign shown above.

> [!note] Remark C.2
> Random walks are related to Euclidean quantum mechanics by the Wick rotation $\mechanical{t}\to-i\mechanical{\tau}$. The real-time propagator
>
> $$
> \langle\mechanical{x}|
> e^{-i\energy{H}\mechanical{t}/\signal{\hbar}}
> |\mechanical{x}'\rangle
> $$
>
> becomes the imaginary-time kernel
>
> $$
> \langle\mechanical{x}|
> e^{-\energy{H}\mechanical{\tau}/\signal{\hbar}}
> |\mechanical{x}'\rangle.
> $$
>
> The Feynman path integral becomes a sum over Euclidean-time random paths.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{H}$ | $\unit{J}$ | Quantum Hamiltonian | The energy operator in the real- and imaginary-time propagators. |
| $\mechanical{\kappa}$ | $\unit{N\,m^{-1}}$ | Entropic spring constant | The coefficient relating extension to restoring-force magnitude. |
| $\mechanical{\mathbf r},\mechanical{r},\mechanical{x}_i,\mechanical{\ell}$ | $\unit{m}$ | End-to-end displacement and step length | The displacement vector, its magnitude and components, and the length of one link. |
| $\mechanical{F}$ | $\unit{N}$ | Restoring force | The radial force directed towards the unextended state. |
| $\mechanical{t},\mechanical{\tau}$ | $\unit{s}$ | Time variables | Real time, step interval, or imaginary time, as specified in each context. |
| $\mechanical{x},\mechanical{x}'$ | $\unit{m}$ | Propagator endpoints | The initial and final position coordinates. |
| $\signal{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | The quantum of action divided by two pi. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{S},\thermal{S}_0$ | $\unit{J\,K^{-1}}$ | Polymer entropy | The end-to-end dependent entropy and its reference value. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $D$ | $\unit{m^2\,s^{-1}}$ | Diffusion coefficient | The per-coordinate diffusion constant, whose value depends on the step convention. |
| $N$ | $1$ | Link count | The number of independent steps or polymer links. |
| $P(\mechanical{\mathbf r})$ | $\unit{m^{-3}}$ | End-to-end probability density | The three-dimensional Gaussian distribution of polymer endpoint displacement. |
