---
title: "Perturbed metrics and the cosmological Boltzmann equation"
---

> [!TLDR]
> Use gravitational perturbations in the Boltzmann equation and derive the first-order terms that govern radiation and matter.

## Worked lecture material

##### Photon momentum in a perturbed metric

A characteristic galactic potential has magnitude $|\Phi|\sim\mechanical{G}\mechanical{M}/R\sim(\quantity{200}{km\,s^{-1}})^2\ll\mechanical{c}^2$.

For a small perturbation of Minkowski space, write $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$. More generally, write $g_{\mu\nu}=g_{\mu\nu}^{(0)}+h_{\mu\nu}$ with $h_{\mu\nu}$ small relative to the background scale of the metric. In the conformal Newtonian gauge of [[Expansion histories and primordial element abundances#Hydrogen recombination|the section on Hydrogen recombination]], with $\mechanical{c}=1$,

$$
h_{00}=-2\Psi,\qquad h_{0i}=0,\qquad h_{ij}=2a^2\Phi\delta_{ij}.
$$

The notes compare this coordinate choice with synchronous gauge, which sets $h_{00}=h_{i0}=0$ so that coordinate time is proper time along worldlines at fixed spatial coordinates. They use the freedom to shift an electromagnetic potential by a constant, $A_\mu\to A_\mu+C_\mu$, as an analogy for gauge freedom.

The Einstein equation to first order is

$$
G_{\mu\nu}^{(0)}+G_{\mu\nu}^{(1)}
=8\pi\mechanical{G}\left(\energy{T}_{\mu\nu}^{(0)}+\energy{T}_{\mu\nu}^{(1)}\right),
$$

where $\energy{T}_{\mu\nu}^{(1)}$ describes perturbations in matter and energy. For a massless particle, $\mechanical{P}^\mu\mechanical{P}_\mu=0$, giving

$$
-(1+2\Psi)(\mechanical{P}^0)^2+a^2(1+2\Phi)\delta_{ij}\mechanical{P}^i\mechanical{P}^j=0.
$$

Define the squared physical spatial momentum by $\mechanical{p}^2=a^2(1+2\Phi)\delta_{ij}\mechanical{P}^i\mechanical{P}^j$. Then, expanding $(1+x)^\alpha\simeq 1+\alpha x$,

$$
(\mechanical{P}^0)^2=\frac{\mechanical{p}^2}{1+2\Psi}
\simeq\mechanical{p}^2(1-2\Psi).
$$

Taking the positive root and retaining first-order terms gives $\mechanical{P}^0=\mechanical{p}(1-\Psi)$. Indeed,

$$
(1+2\Psi)(\mechanical{P}^0)^2
=\mechanical{p}^2(1+2\Psi)(1-\Psi)^2
=\mechanical{p}^2[1+O(\Psi^2)].
$$

With $x^0=t$ and $\mechanical{P}^\mu=dx^\mu/d\lambda$, the coordinate velocity is

$$
\frac{dx^i}{dt}=\frac{d\lambda}{dt}\frac{dx^i}{d\lambda}
=\frac{\mechanical{P}^i}{\mechanical{P}^0}.
$$

Let $\hat p^i$ be the unit direction of photon propagation, $\delta_{ij}\hat p^i\hat p^j=1$. The spatial momentum components are $\mechanical{P}^i=(1-\Phi)\mechanical{p}\hat p^i/a$. In an unperturbed universe $\mechanical{p}\propto a^{-1}$. The first-order expression for $\mechanical{P}^i$ gives the correct physical momentum magnitude because

$$
a^2(1+2\Phi)\delta_{ij}\mechanical{P}^i\mechanical{P}^j
=\mechanical{p}^2(1+2\Phi)(1-\Phi)^2\delta_{ij}\hat p^i\hat p^j
=\mechanical{p}^2[1+O(\Phi^2)].
$$

The photon coordinate velocity is

$$
\frac{dx^i}{dt}
=\frac{\mechanical{P}^i}{\mechanical{P}^0}
=\frac{1-\Phi}{1-\Psi}\frac{\hat p^i}{a}
\simeq\frac{\hat p^i}{a}(1-\Phi+\Psi).
$$

Here $(1-\Phi)/(1-\Psi)\simeq(1-\Phi)(1+\Psi)$, and the product $\Phi\Psi$ is second order and is dropped.

The time component of the geodesic equation is

$$
\frac{d\mechanical{P}^0}{d\lambda}
+\Gamma^0_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu=0.
$$

Use $\mechanical{P}^0=\mechanical{p}(1-\Psi)$, $\mechanical{P}^i=\mechanical{p}(1-\Phi)\hat p^i/a$, and $\mechanical{p}^2=a^2(1+2\Phi)\delta_{ij}\mechanical{P}^i\mechanical{P}^j$. Then the time derivative term is

$$
\frac{dt}{d\lambda}\frac{d[\mechanical{p}(1-\Psi)]}{dt}
=\mechanical{P}^0\frac{d[\mechanical{p}(1-\Psi)]}{dt}.
$$

The total derivative follows the photon trajectory, so

$$
\frac{d\Psi}{dt}=\frac{\partial\Psi}{\partial t}
+\frac{dx^i}{dt}\frac{\partial\Psi}{\partial x^i}.
$$

The boxed first-order result is

$$
\boxed{\frac{1}{\mechanical{p}}\frac{d\mechanical{p}}{dt}
=-H-\frac{\partial\Phi}{\partial t}
-\frac{\hat p^i}{a}\frac{\partial\Psi}{\partial x^i}.}
$$

The last term gives a blueshift for a photon falling into a static potential well. The margin also gives $dn/dt=-3Hn$, or $n\propto a^{-3}$, for a conserved number of particles in a comoving volume.

The term $-\hat{\vec p}\cdot\nabla\Psi/a$ comes from the spatial gradient of the gravitational potential. A photon blueshifts as it travels down the potential.

For a local experiment over a short time, treat $a$ as constant and absorb it into the spatial coordinates. With $\Psi$ and $\Phi$ in velocity-squared units, the proper time obeys

$$
\begin{aligned}
\mechanical{c}^2d\tau^2=-ds^2
&=\mechanical{c}^2dt^2\left(1+\frac{2\Psi}{\mechanical{c}^2}\right)
-\left(1+\frac{2\Phi}{\mechanical{c}^2}\right)d\vec x^{\,2}\\
&=\mechanical{c}^2dt^2\left[
1+\frac{2}{\mechanical{c}^2}\left(\Psi-\frac{\mechanical{v}^2}{2}\right)
-\frac{2\Phi\mechanical{v}^2}{\mechanical{c}^4}\right],
\end{aligned}
$$

where $\mechanical{v}^2=d\vec x^{\,2}/dt^2$. For weak fields and slow motion, the geodesic equation reduces to $d^2\vec x/dt^2=-\nabla\Psi$, the Newtonian force per unit mass.

![[Kyle Kabasares - Cosmology - gravitational blueshift in a potential well.png|**Fig. 21** A photon falling toward the center of the potential well is gravitationally blueshifted.]]

The notes absorb the normalization of the momentum measure into the distribution when writing $\energy{\rho}=\int d^3\mechanical{\vec p}\,f(\mechanical{\vec p})\energy{E}$. Splitting the distribution into an isotropic background and a first-order perturbation gives

$$
f(\mechanical{\vec p})
=f^{(0)}(\mechanical{p})+f^{(1)}(\mechanical{p},\hat p^i),
\qquad
\energy{\rho}=\energy{\rho}^{(0)}+\energy{\rho}^{(1)}.
$$

The directional perturbation in the photon distribution gives the CMB anisotropy.

##### Ionization and the Boltzmann equation

The opening question is how to determine when the free-electron density $n_e$ departs from its equilibrium value $n_e^{(0)}$ during freeze-out.

Including spatial curvature and working with $\mechanical{c}=1$, the perturbed line element in the sign convention of the previous pages is

$$
ds^2=-(1+2\Psi)dt^2+a^2(t)(1+2\Phi)
\left[\frac{dr^2}{1-kr^2}+r^2(d\theta^2+\sin^2\theta\,d\phi^2)\right].
$$

In the spatially flat Cartesian case, the two photon equations are

$$
\frac{dx^i}{dt}\simeq\frac{\hat p^i}{a}(1+\Psi-\Phi),
\qquad
\frac{1}{\mechanical{p}}\frac{d\mechanical{p}}{dt}
=-H-\frac{\partial\Phi}{\partial t}
-\frac{\hat p^i}{a}\frac{\partial\Psi}{\partial x^i}.
$$

The notes label $\hat p^i$ as the $i$th component of the direction unit vector, with $\delta_{ij}\hat p^i\hat p^j=1$. The factor $1/a$ converts the comoving gradient to a physical gradient. The sign of $\Psi$ in the coordinate velocity follows the derivation on [[#Photon momentum in a perturbed metric|the section on Photon momentum in a perturbed metric]].

This page also uses a different momentum variable. Let $\mechanical{q}=a\sqrt{\delta_{ij}\mechanical{P}^i\mechanical{P}^j}$, which this page writes as $p$. It excludes the spatial perturbation factor included in the physical momentum $\mechanical{p}$ on [[#Photon momentum in a perturbed metric|the section on Photon momentum in a perturbed metric]]. From $g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu=0$,

$$
(\mechanical{P}^0)^2=\frac{1+2\Phi}{1+2\Psi}\mechanical{q}^2
\simeq(1+2\Phi-2\Psi)\mechanical{q}^2,
\qquad
\mechanical{P}^0\simeq(1+\Phi-\Psi)\mechanical{q}.
$$

The notes refer to Ma and Bertschinger's calculation in the two gauges, with a handwritten date of 1996. The cited paper is dated 1995. The next remark appears to refer to the line-of-sight method of Seljak and Zaldarriaga, which reduces the number of differential equations needed in the CMB calculation. [Ma and Bertschinger](https://arxiv.org/abs/astro-ph/9506072), [Seljak and Zaldarriaga](https://arxiv.org/abs/astro-ph/9603033).

The Boltzmann equation equates the change of the distribution $f(\mechanical{\vec p},\vec x,t)$ along a phase-space trajectory to the collision term $C[f]$. The distribution describes the number of particles of a species per phase-space volume with the chosen normalization. For a process $1+2\rightleftharpoons3+4$ in equilibrium, the collision term vanishes. In coordinate momentum variables,

$$
\frac{df}{dt}
=\frac{\partial f}{\partial t}
+\frac{d\mechanical{P}^i}{dt}\frac{\partial f}{\partial\mechanical{P}^i}
+\frac{dx^i}{dt}\frac{\partial f}{\partial x^i}
=C[f].
$$

For photons, $\mechanical{P}^i=\mechanical{p}\hat p^i(1-\Phi)/a$. Spatial variation of $f$ is already first order because the background is homogeneous, so only the zeroth-order streaming velocity $\hat p^i/a$ is needed in its product with $\partial f/\partial x^i$. Similarly, the background distribution is isotropic, so the first-order change in propagation direction multiplies a vanishing background angular derivative. Using the physical momentum magnitude gives

$$
\frac{\partial f}{\partial t}
+\frac{d\mechanical{p}}{dt}\frac{\partial f}{\partial\mechanical{p}}
+\frac{\hat p^i}{a}\frac{\partial f}{\partial x^i}
=C[f]
$$

to first order. With perturbations set to zero, the distribution is spatially uniform and

$$
\frac{\partial f}{\partial t}
+\frac{d\mechanical{p}}{dt}\frac{\partial f}{\partial\mechanical{p}}
=C[f].
$$

In equilibrium the right-hand side is zero.

Write $f^{(0)}$, $f^{(1)}$, and $f^{(2)}$ for the zeroth-, first-, and second-order terms in the distribution. In equilibrium the background obeys

$$
\frac{\partial f^{(0)}}{\partial t}
-H\mechanical{p}\frac{\partial f^{(0)}}{\partial\mechanical{p}}=0.
$$

For the photon distribution $f^{(0)}=[e^{\mechanical{p}/\thermal{T}^{(0)}}-1]^{-1}$ in natural units, the solution has $\thermal{T}^{(0)}\propto a^{-1}$. The ratio $\mechanical{p}/\thermal{T}^{(0)}$ stays constant along the background trajectory.

Parameterize the perturbed distribution as a blackbody with temperature $\thermal{T}=\thermal{T}^{(0)}[1+\Theta(\vec x,\mechanical{p},\hat p^i,t)]$. Since the blackbody distribution is a function of $\mechanical{p}/\thermal{T}$,

$$
f^{(1)}
=\left.\thermal{T}^{(0)}\frac{\partial f}{\partial\thermal{T}}\right|_{\thermal{T}=\thermal{T}^{(0)}}\Theta
=-\mechanical{p}\frac{\partial f^{(0)}}{\partial\mechanical{p}}\,\Theta.
$$

The zeroth-order Boltzmann equation is $\partial_t f^{(0)}-H\mechanical{p}\,\partial_{\mechanical{p}}f^{(0)}=C^{(0)}$, with $C^{(0)}=0$ for the equilibrium photon background considered here. Substituting the perturbed geodesic into the first-order equation gives

$$
\begin{aligned}
\frac{\partial f^{(1)}}{\partial t}
-H\mechanical{p}\frac{\partial f^{(1)}}{\partial\mechanical{p}}
+\frac{\hat p^i}{a}\frac{\partial f^{(1)}}{\partial x^i}
-\mechanical{p}\left(\frac{\partial\Phi}{\partial t}
+\frac{\hat p^i}{a}\frac{\partial\Psi}{\partial x^i}\right)
\frac{\partial f^{(0)}}{\partial\mechanical{p}}
=C^{(1)}.
\end{aligned}
$$

##### Thomson scattering in the baryon–photon fluid

##### Baryon–photon fluid

Photons scatter from electrons through Compton scattering in the Thomson limit, $\gamma+e^-\rightleftharpoons\gamma+e^-$. Coulomb interactions couple electrons to protons through $e^-+p^+\rightleftharpoons e^-+p^+$. Recombination proceeds through $e^-+p^+\rightleftharpoons\mathrm{H}+\gamma$. The notes sketch a scattering integral of the form $\int|\mathcal M|^2 f_e^{(0)}f_\gamma^{(0)}\,d^3\mechanical{\vec p}_\gamma\,d^3\mechanical{\vec p}_e$, with $\mathcal M$ the scattering amplitude.

For the photon temperature perturbation, omitting polarization and the quadrupole correction to the collision term, the equation in cosmic time is

$$
\frac{\partial\Theta}{\partial t}
+\frac{\hat p^i}{a}\frac{\partial\Theta}{\partial x^i}
+\frac{\partial\Phi}{\partial t}
+\frac{\hat p^i}{a}\frac{\partial\Psi}{\partial x^i}
=\Gamma_{\mathrm T}(\Theta_0-\Theta+\hat{\vec p}\cdot\mechanical{\vec v}_{\mathrm b}),
\qquad
\Gamma_{\mathrm T}=\mechanical{c}n_e\sigma_{\mathrm T}.
$$

The velocity in the bracket is in units of $\mechanical{c}$. It is the bulk velocity of the electrons, shared with the baryons in the tightly coupled plasma. The handwritten collision rate includes a factor $a$, which is used with conformal-time derivatives. The Thomson cross section is $\sigma_{\mathrm T}\simeq\quantity{6.6\times10^{-25}}{cm^2}$, proportional to $\alpha^2/\mechanical{m}_e^2$ in natural units.

The monopole is the angular average at fixed position and time.

$$
\Theta_0(\vec x,t)=\frac1{4\pi}\int\Theta(\hat{\vec p},\vec x,t)\,d\Omega.
$$

When $\Theta=\Theta_0$, the perturbation is isotropic. For $\Gamma_{\mathrm T}\gg H$ in the tight-coupling approximation, the notes retain the monopole and dipole.

![[Kyle Kabasares - Cosmology - acoustic peaks and diffusion damping.png|**Fig. 22** The sketch plots $\ell^2C_\ell$ against multipole $\ell$. It marks the first peak near $\ell=200$, the decline around $\ell=2000$, and the associated angular scales of about half a degree and a few arcminutes. The margin asks about the low-multipole plateau and the small-scale decline.]]

The notes suggest inspecting the Planck CMB map and paying attention to the angular scale of its fluctuations. After recombination, photon scattering is rare. Before recombination, diffusion can smooth fluctuations on the distances photons travel by repeated scattering. Baryons falling into dark-matter potential wells compete with the pressure of the coupled photon–baryon fluid.

The photon geodesic supplies $d\mechanical{p}/dt$ and $dx^i/dt$ for the temperature perturbation equation. In units with $\mechanical{c}=1$,

$$
\frac{\partial\Theta}{\partial t}
+\frac{\hat{\vec p}}{a}\cdot\nabla\Theta
+\frac{\partial\Phi}{\partial t}
+\frac{\hat{\vec p}}{a}\cdot\nabla\Psi
=n_e\sigma_{\mathrm T}(\Theta_0-\Theta+\hat{\vec p}\cdot\mechanical{\vec v}_{\mathrm b}).
$$

Here $\Theta=\delta\thermal{T}/\thermal{T}^{(0)}$ can depend on position, time, momentum magnitude, and direction. The photon distribution is written in the Bose–Einstein form

$$
f_\gamma=f^{(0)}+f^{(1)}
\simeq\frac{1}{\exp\!\left[\mechanical{p}/\bigl(\thermal{T}^{(0)}(1+\Theta)\bigr)\right]-1}
$$

to first order. The first Legendre polynomials evaluated at $\cos\theta$ are $P_0=1$, $P_1=\cos\theta$, and $P_2=(3\cos^2\theta-1)/2$.

In the tight-coupling limit $n_e\sigma_{\mathrm T}/H\gg1$, the bracket in the collision term tends to zero. With the sign used in the displayed collision term, $\Theta\simeq\Theta_0+\hat{\vec p}\cdot\mechanical{\vec v}_{\mathrm b}$, a monopole plus a dipole. The handwritten line at the bottom uses the opposite sign for the dipole.

##### Photon multipoles and fluid moments

The monopole of the fractional temperature perturbation is $\Theta_0=\int\Theta\,d\Omega/(4\pi)$. Multiplying by $\thermal{T}^{(0)}$ gives the monopole in temperature units. Expand $\Theta$ in spatial Fourier modes,

$$
\Theta(\vec x,t,\mechanical{p},\hat{\vec p})
=\int\frac{d^3k}{(2\pi)^3}e^{i\vec k\cdot\vec x}
\widetilde\Theta(\vec k,t,\mechanical{p},\hat{\vec p}).
$$

Each spatial gradient becomes multiplication by $i\vec k$, leaving the equation for a Fourier mode with time derivatives. In the scalar sector the flow is irrotational, $\nabla\times\mechanical{\vec v}_{\mathrm b}=0$. Thus $\vec k\times\widetilde{\mechanical{\vec v}}_{\mathrm b}=0$, and the velocity perturbation for each mode is parallel to $\vec k$. Define $k=|\vec k|$, $\mu=\hat{\vec p}\cdot\hat{\vec k}$, and $\widetilde{\mechanical{\vec v}}_{\mathrm b}=\hat{\vec k}\,\widetilde{\mechanical{v}}_{\mathrm b}$. The mode equation is

$$
\frac{\partial\widetilde\Theta}{\partial t}
+\frac{ik\mu}{a}\widetilde\Theta
+\frac{\partial\widetilde\Phi}{\partial t}
+\frac{ik\mu}{a}\widetilde\Psi
=n_e\sigma_{\mathrm T}
(\widetilde\Theta_0-\widetilde\Theta+\mu\,\widetilde{\mechanical{v}}_{\mathrm b}).
$$

The metric and momentum components used in the calculation are, to first order with $\mechanical{c}=1$,

$$
g_{00}=-(1+2\Psi),\qquad
g_{ij}=a^2(1+2\Phi)\delta_{ij},\qquad
\mechanical{P}^\mu=
\left[\energy{E}(1-\Psi),\,\frac{\mechanical{p}\hat p^i}{a}(1-\Phi)\right].
$$

Using the momentum components from [[#Photon multipoles and fluid moments|the section on Photon multipoles and fluid moments]], the temporal and spatial contractions reduce at first order to

$$
\begin{aligned}
g_{00}(\mechanical{P}^0)^2
&=-(1+2\Psi)\energy{E}^2(1-\Psi)^2\simeq-\energy{E}^2,\\
g_{ij}\mechanical{P}^i\mechanical{P}^j
&=(1+2\Phi)\mechanical{p}^2(1-\Phi)^2\delta_{ij}\hat p^i\hat p^j
\simeq\mechanical{p}^2.
\end{aligned}
$$

The mass-shell condition $g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu=-\mechanical{m}^2$ gives $\energy{E}^2=\mechanical{p}^2+\mechanical{m}^2$ in units with $\mechanical{c}=1$. The coordinate velocity is

$$
\frac{dx^i}{dt}
=\frac{d\lambda}{dt}\frac{dx^i}{d\lambda}
=\frac{\mechanical{P}^i}{\mechanical{P}^0}
=\frac{\mechanical{p}\hat p^i(1-\Phi)}{a\energy{E}(1-\Psi)}
\simeq\frac{\mechanical{p}\hat p^i}{a\energy{E}}(1-\Phi+\Psi).
$$

The time component of the geodesic equation gives, with the connection term moved to the right-hand side,

$$
(1-\Psi)\frac{d\energy{E}}{dt}-\energy{E}\frac{d\Psi}{dt}
=\frac{d\mechanical{P}^0}{dt}
=-\Gamma^0_{\mu\nu}\frac{\mechanical{P}^\mu\mechanical{P}^\nu}{\mechanical{P}^0}.
$$

The required connection coefficients follow from

$$
\Gamma^0_{\mu\nu}
=\frac12g^{0\alpha}
\left(\partial_\nu g_{\alpha\mu}+\partial_\mu g_{\alpha\nu}
-\partial_\alpha g_{\mu\nu}\right).
$$

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $t$ | $\unit{s}$ | Cosmic time | Age measured from the early-universe origin used in the course. |
| $a$ | $1$ | Scale factor | Ratio of a physical separation at cosmic time $t$ to its value today for a pair of comoving points. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Cosmic temperature on the right axis of the scale-factor figure. |
| $H$, $H_0$ | $\unit{s^{-1}}$ | Hubble parameter and its present value | Fractional expansion rate $\dot a/a$, often quoted in $\unit{km\,s^{-1}\,Mpc^{-1}}$. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Coupling in the Friedmann equation. |
| $\energy{\rho}$, $\energy{\rho}_0$, $\energy{\rho}_{\mathrm{cr}}$ | $\unit{J\,m^{-3}}$ | Cosmic energy densities | Time-dependent, present-day and present-day critical densities. In SI the corresponding mass densities are the energy densities divided by $c^2$. |
| $h$ | $1$ | Reduced Hubble parameter | $H_0$ in units of $\quantity{100}{km\,s^{-1}\,Mpc^{-1}}$. |
| $ds^2$ | $\unit{m^2}$ | Squared spacetime interval | Metric contraction of two coordinate differentials when the line element is expressed in length units. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Converts the time coordinate to length units in the flat interval. |
| $\theta$, $\phi$ | $\unit{rad}$ | Spherical angles | Polar angle and azimuth in the spherical line element. |
| $\tau$ | $\unit{s}$ | Proper time | Elapsed time measured by a clock moving along the timelike path. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $\mechanical{P}^\mu$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Tangent to the particle trajectory for an appropriate normalization of the affine parameter. Its time component in SI is $\energy{E}/\mechanical{c}$. |
| $\energy{E}$ | $\unit{J}$ | Photon energy | Energy measured by a comoving observer, equal to $\mechanical{P}^0$ in natural units. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $n$ | $\unit{m^{-3}}$ | Particle number density | For a heavy nonrelativistic species, rest energy times number density gives the leading energy density. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
| $\eta$ | $\unit{s}$ | Conformal time | Defined by $d\eta=dt/a$. The product $\mechanical{c}\eta$ has units of comoving distance. |
| $\Psi$, $\Phi$ | $\unit{m^2\,s^{-2}}$ | Scalar metric perturbation potentials | The time and space perturbations in the sign convention above. |
| $\Theta$ | $1$ | Fractional photon temperature perturbation | Defined by $\thermal{T}=\thermal{T}^{(0)}(1+\Theta)$. |
| $\sigma_{\mathrm T}$ | $\unit{m^2}$ | Thomson cross section | Low-energy cross section for photon scattering by an electron. |
| $\Gamma_{\mathrm T}$ | $\unit{s^{-1}}$ | Thomson scattering rate | Rate per photon in cosmic time for physical free-electron density $n_e$. |
| $\Theta_0$ | $1$ | Temperature monopole | Angular average of $\Theta$ at a point. |
| $\ell$, $C_\ell$ | $1$ | Angular multipole and temperature angular power | Here $C_\ell$ is for fractional temperature fluctuations. Higher $\ell$ corresponds to smaller angular scales. |
| $\vec k$, $k$ | $\unit{m^{-1}}$ | Comoving wavevector and wavenumber | The wavevector labels a spatial Fourier mode. The magnitude is distinct from the curvature index $k$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
