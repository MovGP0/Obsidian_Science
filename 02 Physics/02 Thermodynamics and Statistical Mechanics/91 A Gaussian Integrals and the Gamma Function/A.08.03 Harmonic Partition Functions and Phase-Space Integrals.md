---
title: "Harmonic Partition Functions and Phase-Space Integrals"
source_chapter: "A"
source_section: "A.8.3"
source_page: 470
---

> [!TLDR]
> Independent quadratic degrees of freedom turn classical phase-space integrals into products of Gaussian factors.

Take one classical oscillator in canonical equilibrium, with $\mechanical{m}>0$, $\signal{\omega}>0$, and $\thermal{\beta}=1/(\thermal{k}_{\mathrm B}\thermal{T})>0$. The displacement and its conjugate momentum range over the real line. The quadratic potential is either the exact model or a local approximation near a stable equilibrium. There is no coupling to another mode in this Hamiltonian.

For a harmonic oscillator with Hamiltonian

$$
\energy{H}
=\frac{\mechanical{p}^2}{2\mechanical{m}}
+\frac12\mechanical{m}\signal{\omega}^2\mechanical{q}^2,
$$

the classical partition function is

$$
\begin{aligned}
Z
&=\frac1{\signal{h}}\int_{-\infty}^{+\infty}
\int_{-\infty}^{+\infty}
e^{-\thermal{\beta}\energy{H}}\,d\mechanical{p}\,d\mechanical{q}\\
&=\frac1{\signal{h}}
\sqrt{\frac{2\pi\mechanical{m}}{\thermal{\beta}}}
\sqrt{\frac{2\pi}{\thermal{\beta}\mechanical{m}\signal{\omega}^2}}
=\frac{\thermal{k}_{\mathrm B}\thermal{T}}{\signal{\hbar}\signal{\omega}}.
\end{aligned}
$$

The exponential separates because the kinetic term depends only on momentum and the potential term only on displacement. Both Gaussian coefficients must be positive. The mass factors cancel between the two widths, leaving only the frequency and temperature. The factor $1/\signal{h}$ is the standard normalization of classical phase-space measure; the product $d\mechanical{p}\,d\mechanical{q}$ has action units, so $Z$ is dimensionless.

For $N$ independent oscillators of the same frequency, (A.4) gives

$$
Z_N=\left(\frac{\thermal{k}_{\mathrm B}\thermal{T}}
{\signal{\hbar}\signal{\omega}}\right)^N.
$$

These oscillators are labelled independent modes; there is no division by $N!$. By contrast, the ideal-gas exercise below counts identical particles in the classical dilute regime, which requires that factor.

The mean oscillator energy is $-\partial\ln Z/\partial\thermal{\beta}=1/\thermal{\beta}=\thermal{k}_{\mathrm B}\thermal{T}$. This checks the two quadratic contributions, each of which gives half the thermal energy. If $\signal{\omega}$ tends to zero, the position integral diverges: an unconfined coordinate cannot be integrated over the whole line with this normalization.

The classical result is the high-temperature limit when $\thermal{k}_{\mathrm B}\thermal{T}\gg\signal{\hbar}\signal{\omega}$. It does not describe discrete levels or zero-point energy at low temperature. See [Tong, Statistical Physics §3.4](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S3.html#S3.SS4). If the oscillator describes a real anharmonic potential, the thermal motion must also remain in the region where its quadratic approximation is valid.

## Exercise A.1

Calculate the partition function of $N$ ideal monatomic particles in volume $\mechanical{V}$, and show that

$$
Z_N=\frac{\mechanical{V}^N}{N!}
\left(\frac{2\pi\mechanical{m}\thermal{k}_{\mathrm B}\thermal{T}}
{\signal{h}^2}\right)^{3N/2}.
$$

Use the volume of a $3N$-dimensional ball. Compare this result with direct calculation from a product of Gaussian integrals.

### Solution sketch

Use fixed particle count, no interactions, and one internal state per particle. The position integral is $\mechanical{V}^N$. In momentum space, the kinetic energy depends only on the radius $\mechanical{r}$ defined by $\mechanical{r}^2=\sum_{j=1}^{3N}\mechanical{p}_j^2$. The ball method gives

$$
Z_N=\frac{\mechanical{V}^N}{N!\signal{h}^{3N}}
S_{3N-1}\int_0^\infty
\mechanical{r}^{3N-1}
e^{-\thermal{\beta}\mechanical{r}^2/(2\mechanical{m})}\,d\mechanical{r}.
$$

Here $S_{3N-1}$ is the dimensionless unit-sphere area factor from [[A.07 Volume of a Ball in N Dimensions]]. Apply (A.7) with $\nu=3N/2$. The radial integral contributes $\Gamma(3N/2)(2\mechanical{m}/\thermal{\beta})^{3N/2}/2$, and the sphere factor cancels the gamma function and the factor $2$. The remaining momentum factor is $(2\pi\mechanical{m}/\thermal{\beta})^{3N/2}$, which gives the requested expression.

The Cartesian method instead uses $3N$ copies of the one-dimensional momentum Gaussian. Their product gives exactly the same factor. This agreement checks the radial Jacobian and the phase-space normalization. It does not test the dilute-gas assumption; quantum statistics require a different many-particle count when that assumption fails.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{H}$ | $\unit{J}$ | Hamiltonian | The total energy of the harmonic oscillator. |
| $\mechanical{m}$ | $\unit{kg}$ | Particle mass | The mass of one particle. |
| $\mechanical{p},\mechanical{p}_j$ | $\unit{kg\,m\,s^{-1}}$ | Momentum component | One Cartesian momentum component of an oscillator or particle. |
| $\mechanical{r}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum-space radius | The norm of all 3N particle momentum components. |
| $\mechanical{q}$ | $\unit{m}$ | Oscillator displacement | The oscillator position relative to equilibrium. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | The spatial volume of the gas. |
| $\signal{\hbar}$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by two pi. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | The oscillator's natural angular frequency. |
| $\signal{h}$ | $\unit{J\,s}$ | Planck constant | The quantum of action used to count phase-space cells. |
| $\thermal{\beta}$ | $\unit{J^{-1}}$ | Inverse temperature | One divided by the thermal energy. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | The constant that converts temperature to energy. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | The absolute temperature. |
| $N$ | $1$ | Mode or particle count | The number of labelled oscillator modes or identical gas particles. |
| $Z,Z_N$ | $1$ | Partition function | The thermal normalization for one oscillator, N modes, or N gas particles. |
