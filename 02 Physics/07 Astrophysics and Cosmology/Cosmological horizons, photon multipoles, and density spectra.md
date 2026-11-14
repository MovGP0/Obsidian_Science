---
title: "Cosmological horizons, photon multipoles, and density spectra"
---

> [!TLDR]
> Distinguish relevant horizon scales, project the photon distribution onto multipoles, and characterize density fluctuations with a power spectrum.

## Worked lecture material

##### Euler equation and potential evolution

With negligible anisotropic stress, $\Psi\simeq-\Phi$, and the conformal-time Euler equation becomes $\mechanical{v}'+\mathcal H\mechanical{v}=ik\Phi$. In the subhorizon approximation, neglecting radiation density perturbations while retaining radiation in the background expansion, the matter density contrast obeys the Mészáros equation. With $y=a/a_{\mathrm{eq}}$,

$$
\frac{d^2\delta_{\mathrm m}}{dy^2}
+\frac{2+3y}{2y(1+y)}\frac{d\delta_{\mathrm m}}{dy}
-\frac{3}{2y(1+y)}\delta_{\mathrm m}=0.
$$

The notes check the solution $\delta_{\mathrm m}=y+2/3$. Its first derivative is one and its second derivative vanishes. Substitution leaves

$$
\frac{2+3y}{2y(1+y)}-\frac{3(y+2/3)}{2y(1+y)}=0.
$$

Matter fluctuations grow with $\delta_{\mathrm m}$ during matter domination. The notes indicate that this growth slows and approaches a constant as a cosmological constant takes over. In a $\Lambda$CDM model with scale-independent late-time growth, separate the dependence on scale and time as

$$
\Phi(k,a)=\frac9{10}\Phi_{\mathrm{primordial}}(k)\,T(k)\frac{D(a)}a.
$$

The transfer function $T(k)$ accounts for scale-dependent evolution up to matter domination. The linear growth factor $D(a)$ is proportional to $a$ during matter domination and follows the later evolution of the matter contrast.

The margin labels $\Phi_{\mathrm{primordial}}$ as the starting condition and $9/10$ as the change through matter–radiation equality. In natural units, the curved-background Friedmann equation gives

$$
H^2=\frac{8\pi\mechanical{G}\energy{\rho}}3
+\frac{H_0^2(1-\Omega_0)}{a^2},
\qquad
1=\Omega(t)+\frac{H_0^2(1-\Omega_0)}{a^2H^2},
$$

where $\Omega(t)=8\pi\mechanical{G}\energy{\rho}(t)/(3H^2)$ and $\Omega_0$ is its present value. Approximating $H^2\simeq H_0^2(\Omega_{\mathrm m}a^{-3}+\Omega_{\mathrm r}a^{-4})$ at early times gives

$$
1-\Omega(t)
\simeq\frac{(1-\Omega_0)a^2}{\Omega_{\mathrm m}a+\Omega_{\mathrm r}}
\simeq\frac{(1-\Omega_0)a^2}{\Omega_{\mathrm r}}
\qquad (a\ll a_{\mathrm{eq}}).
$$

The last-scattering example takes $a\simeq10^{-3}$ and the flat-model angular diameter distance $D_{\mathrm A}=\chi/(1+z)\simeq\quantity{13}{Mpc}$, where $\chi$ is the comoving radial distance. A proper length of $\quantity{1}{Mpc}$ then subtends $\theta\simeq(1/13)\,\unit{rad}\simeq4.4^\circ$, rounded to about $5^\circ$ in the notes.

![[Kyle Kabasares - Cosmology - angular scale at last scattering.png|**Fig. 25** An observer views a transverse segment of proper length 1 Mpc on the last-scattering surface. The handwritten estimate gives the angular diameter distance as 13 Mpc.]]

##### Photon scattering and energy transfer

At $a=10^{-3}$ the expansion rate in the matter-plus-radiation approximation is

$$
H=H_0\sqrt{\Omega_{\mathrm m}a^{-3}+\Omega_{\mathrm r}a^{-4}}
\simeq H_0\sqrt{0.3\times10^9}
=H_0\sqrt3\times10^4,
$$

where the last estimate keeps only matter. The notes use $H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}$ and $h\simeq0.7$. The corresponding physical Hubble length in this approximation is $\mechanical{c}/H\simeq(\mechanical{c}/H_0)\,10^{-4}/\sqrt3\simeq\quantity{0.25}{Mpc}$. The handwritten conversion to megaparsecs uses a different numerical factor from the preceding expression for $H/H_0$.

In natural units, the conformal-time photon temperature equation is

$$
\widetilde\Theta'+ik\mu\widetilde\Theta+\widetilde\Phi'
+ik\mu\widetilde\Psi
=a n_e\sigma_{\mathrm T}
\bigl(\widetilde\Theta_0-\widetilde\Theta+\mu\widetilde{\mechanical{v}}_{\mathrm b}\bigr).
$$

Here $\mu=\hat{\vec k}\cdot\hat{\vec p}$, and the baryon velocity is assumed irrotational. The notes cross out momentum magnitude as an argument of $\Theta$, leaving $\Theta(\eta,\vec x,\hat{\vec p})$ in real space and $\widetilde\Theta(k,\eta,\mu)$ for scalar Fourier modes.

![[Kyle Kabasares - Cosmology - photon electron scattering momenta.png|**Fig. 26** Incoming photon and electron momenta are labeled $p$ and $q$, with primes denoting the outgoing momenta.]]

Momentum conservation gives $\mechanical{\vec p}'+\mechanical{\vec q}'=\mechanical{\vec p}+\mechanical{\vec q}$. For a nonrelativistic electron, the rest energy cancels between the two sides of energy conservation.

$$
\begin{aligned}
\mechanical{p}+\frac{\mechanical{q}^2}{2\mechanical{m}_e}
&=\mechanical{p}'+\frac{\lvert\mechanical{\vec p}-\mechanical{\vec p}'+\mechanical{\vec q}\rvert^2}{2\mechanical{m}_e}\\
&=\mechanical{p}'+\frac{\mechanical{q}^2}{2\mechanical{m}_e}
+\frac{\lvert\mechanical{\vec p}-\mechanical{\vec p}'\rvert^2}{2\mechanical{m}_e}
+\frac{\mechanical{\vec q}\cdot(\mechanical{\vec p}-\mechanical{\vec p}')}{\mechanical{m}_e}.
\end{aligned}
$$

The energy transfer per scattering is

$$
\mechanical{p}-\mechanical{p}'=
\frac{\lvert\mechanical{\vec p}-\mechanical{\vec p}'\rvert^2}{2\mechanical{m}_e}
+\frac{\mechanical{q}}{\mechanical{m}_e}
\lvert\mechanical{\vec p}-\mechanical{\vec p}'\rvert\,\mu',
$$

where $\mu'$ is the cosine of the angle between the incident electron momentum and the photon momentum change $\mechanical{\vec p}-\mechanical{\vec p}'$. At $z=1100$, the CMB temperature in energy units is $(1+z)(\quantity{0.235\times10^{-3}}{eV})\simeq\quantity{0.3}{eV}$. For $\thermal{T}_e\simeq\thermal{T}_\gamma$, the characteristic electron speed in natural units is $\mechanical{q}/\mechanical{m}_e\sim\sqrt{\thermal{T}_\gamma/\mechanical{m}_e}$, up to a factor of order unity.

Expand the temperature perturbation of a scalar Fourier mode as

$$
\widetilde\Theta(\eta,k,\mu)
=\sum_{\ell=0}^{\infty}(2\ell+1)(-i)^\ell P_\ell(\mu)
\,\widetilde\Theta_\ell(\eta,k).
$$

The inversion follows from Legendre orthogonality,

$$
\int_{-1}^{1}P_\ell(\mu)P_{\ell'}(\mu)\,\frac{d\mu}{2}
=\frac{\delta_{\ell\ell'}}{2\ell+1},
\qquad
\widetilde\Theta_\ell(\eta,k)
=\frac1{(-i)^\ell}\int_{-1}^{1}
P_\ell(\mu)\widetilde\Theta(\eta,k,\mu)\,\frac{d\mu}{2}.
$$

The notes use a local momentum-density moment to relate the photon distribution to the velocity. With $g=2$ for photons, this moment is

$$
g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\,
\mechanical{p}\hat p^i f
=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\,
\mechanical{p}\hat p^i(f^{(0)}+f^{(1)}).
$$

The background and perturbed pieces are evaluated separately on the next page.

##### Photon moments and the Boltzmann hierarchy

The isotropic part $f^{(0)}(\mechanical{p})$ has zero momentum-density moment because the angular integral of $\hat p^i$ vanishes. Insert $f^{(1)}=-\mechanical{p}(\partial f^{(0)}/\partial\mechanical{p})\widetilde\Theta$ in the perturbed moment. Choose the $z$ axis along $\vec k$, so $\hat p^z=\mu$ and azimuthal integration gives $2\pi$. The longitudinal component in the local frame is

$$
\begin{aligned}
g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\mechanical{p}\mu f^{(1)}
&=-\frac{g}{(2\pi)^2}
\int_0^\infty \mechanical{p}^4\frac{\partial f^{(0)}}{\partial\mechanical{p}}\,d\mechanical{p}
\int_{-1}^1\widetilde\Theta\,\mu\,d\mu\\
&=4\energy{\rho}_\gamma\int_{-1}^1
\widetilde\Theta P_1(\mu)\,\frac{d\mu}{2}.
\end{aligned}
$$

Integration by parts gives the second line since $\mechanical{p}^4 f^{(0)}$ vanishes at both endpoints. By Legendre orthogonality, only the dipole contributes and the local momentum density is $-4i\energy{\rho}_\gamma\widetilde\Theta_1$ along $\hat{\vec k}$. In the local orthonormal frame, the mixed time index gives $\delta\energy{T}^{\hat z}{}_{\hat 0}=+4i\energy{\rho}_\gamma\widetilde\Theta_1$ and $\delta\energy{T}^{\hat 0}{}_{\hat z}=-4i\energy{\rho}_\gamma\widetilde\Theta_1$. Using the photon enthalpy density $4\energy{\rho}_\gamma/3$ gives the bulk velocity $\widetilde{\mechanical{v}}_\gamma=-3i\widetilde\Theta_1$. The notes apply this relation at last scattering.

To obtain a photon equation at a given multipole $\ell$, multiply the conformal-time Boltzmann equation by $P_\ell(\mu)/(-i)^\ell$ and integrate with $d\mu/2$. The isotropic term $\Phi'$ multiplies $P_0=1$, while the terms linear in $\mu$ contain $P_1=\mu$. Also $P_2=(3\mu^2-1)/2$. The notes refer to equations 7.11–7.14.

For $\ell=0$, the collision integral and the term proportional to $ik\mu\Psi$ average to zero. With $\int_{-1}^1 \widetilde\Theta\mu\,d\mu/2=-i\widetilde\Theta_1$, the monopole equation is

$$
\widetilde\Theta_0'+k\widetilde\Theta_1+\widetilde\Phi'=0.
$$

For dark matter the Fourier continuity equation is $\delta'+ik\mechanical{v}+3\Phi'=0$. The spatial part of the perturbed metric is $a^2(1+2\Phi)d\vec x^{\,2}\simeq a_{\mathrm{eff}}^2d\vec x^{\,2}$, with $a_{\mathrm{eff}}=a(1+\Phi)$. Thus a comoving cell of unit coordinate volume has effective proper volume $V_{\mathrm{eff}}=a_{\mathrm{eff}}^3$.

The perturbed Einstein equation is $\delta G_{\mu\nu}=8\pi\mechanical{G}\,\delta\energy{T}_{\mu\nu}$ in natural units. Using the sign convention of [[Baryon–photon coupling and growth of matter perturbations#Drag and photon–baryon tight coupling|the section on Drag and photon–baryon tight coupling]], the density constraint is

$$
k^2\Phi+3\mathcal H(\Phi'-\mathcal H\Psi)
=4\pi\mechanical{G}a^2\delta\energy{\rho}.
$$

On scales outside the horizon, $k\eta\ll1$, drop the terms explicitly suppressed by $k\eta$ in the initial-condition equations. For the homework initial conditions the notes refer to equation 7.12.

##### Particle horizon and Hubble scale

The two dimensionless scale comparisons in natural units are $k\eta$ for the particle horizon and $k/(aH)$ for the comoving Hubble length. In the flat perturbed line element,

$$
ds^2=-\mechanical{c}^2(1+2\Psi)dt^2
+a^2(1+2\Phi)(dx^2+dy^2+dz^2),
$$

with the potentials expressed here in units of $\mechanical{c}^2$. The coordinate separation $dx$ between comoving points is fixed. Its background proper length is $a\,dx$.

##### Mode crossing at equality

Use $k_{\mathrm{eq}}=a_{\mathrm{eq}}H(a_{\mathrm{eq}})/\mechanical{c}$ and the quoted $a_{\mathrm{eq}}=4.15\times10^{-5}/(\Omega_{\mathrm m}h^2)$. At equality the matter and radiation contributions are equal, so

$$
\begin{aligned}
H^2(a_{\mathrm{eq}})&\simeq2H_0^2\Omega_{\mathrm m}a_{\mathrm{eq}}^{-3},\\
k_{\mathrm{eq}}&\simeq\frac{H_0}{\mechanical{c}}
\sqrt{\frac{2\Omega_{\mathrm m}}{a_{\mathrm{eq}}}}
\simeq\quantity{0.073\,\Omega_{\mathrm m}h^2}{Mpc^{-1}}.
\end{aligned}
$$

This uses $\mechanical{c}/H_0\simeq(\quantity{3000}{Mpc})/h$. For the notes' $\Omega_{\mathrm m}=0.3$ and $h=0.7$, it gives $k_{\mathrm{eq}}\simeq\quantity{0.011}{Mpc^{-1}}$. The handwritten substitutions mix the length $(aH/\mechanical{c})^{-1}$ with its inverse wavenumber expression. The equality calculation above uses the horizon-crossing criterion from [[Baryon–photon coupling and growth of matter perturbations#Gravitational potentials across matter–radiation equality|the section on Gravitational potentials across matter–radiation equality]].

The scratch work continues the equality-scale exercise. The first line carries over $\quantity{124.5}{Mpc}/150$ and boxes the rounded result $\quantity{5/6}{Mpc}$ with a question mark.

A note attributed to Manoj gives the photon density parameter $\Omega_\gamma=2.5\times10^{-5}/h^2\simeq5\times10^{-5}$, consistent with $h\simeq0.7$. The side calculation converts $\mechanical{c}/H_0$ to approximately $\quantity{4.3\times10^3}{Mpc}$ for this $h$. The notes use $a_{\mathrm{eq}}\sim3\times10^{-4}$. The next scratch calculation combines powers of $a_{\mathrm{eq}}$ and quotes $10^{-5.5}$ with units of megaparsecs before replacing it with a line labeled “True answer,” $\quantity{0.01}{Mpc}$ as written.

The final number agrees with the scale derived on [[#Mode crossing at equality|the section on Mode crossing at equality]] when given in inverse megaparsecs. The photon density in the margin is one part of the total radiation density used to find equality.

The notes compare the proper length of a fixed comoving mode with the physical Hubble length.

![[Kyle Kabasares - Cosmology - physical Hubble length and horizon crossing.png|**Fig. 27** The red line represents a proper separation of 100 Mpc today, scaled by $a$ at earlier times. The black curve represents the physical Hubble length. The sketch marks horizon exit during exponential expansion, reentry near equality, and recombination near $a=10^{-3}$. The handwritten negative powers on the black curve correspond to density scalings.]]

In a flat matter, radiation, and cosmological-constant model,

$$
\begin{aligned}
D_{\mathrm H}(a)&=\frac{\mechanical{c}}{H(a)}
=\frac{\mechanical{c}/H_0}{\sqrt{\Omega_{\mathrm m}a^{-3}+\Omega_{\mathrm r}a^{-4}+\Omega_\Lambda}}\\
&\simeq\frac{\quantity{3000}{Mpc}}
{\sqrt{\Omega_{\mathrm m}h^2}\sqrt{a^{-3}+a_{\mathrm{eq}}a^{-4}+\Omega_\Lambda/\Omega_{\mathrm m}}},
\qquad
a_{\mathrm{eq}}=\frac{\Omega_{\mathrm r}}{\Omega_{\mathrm m}}.
\end{aligned}
$$

The notes use $h\simeq0.7$, $\Omega_{\mathrm m}h^2\simeq0.14$, $\Omega_{\mathrm b}h^2\simeq0.022$, and $\Omega_\Lambda/\Omega_{\mathrm m}\sim2$. They round the prefactor $\quantity{3000}{Mpc}/\sqrt{\Omega_{\mathrm m}h^2}$ to $\quantity{10}{Gpc}$ for the sketch. At equality the two density terms in the second square root each equal $a_{\mathrm{eq}}^{-3}$, so

$$
D_{\mathrm H}(a_{\mathrm{eq}})
\simeq\frac{(\quantity{10}{Gpc})a_{\mathrm{eq}}^{3/2}}{\sqrt2}
$$

with that rounding.

Deep in the radiation era, $a\ll a_{\mathrm{eq}}$, the physical Hubble length in the approximation of [[#Mode crossing at equality|the section on Mode crossing at equality]] is

$$
D_{\mathrm H}(a)\simeq
\frac{\quantity{10}{Gpc}}{\sqrt{a_{\mathrm{eq}}}}a^2.
$$

For an illustrative $a_{\mathrm{eq}}=10^{-4}$ this is about $(\quantity{10^3}{Gpc})a^2$. The notes ask about the physical scale associated with $\quantity{10^2}{Mpc}$ and mark a factor $1/a_{\mathrm{eq}}=10^4$. A separation that is $\quantity{10^2}{Mpc}$ today has physical length $a_{\mathrm{eq}}(\quantity{10^2}{Mpc})=\quantity{10^{-2}}{Mpc}$ in this example. The inverse factor converts a physical length at equality to a comoving length.

![[Kyle Kabasares - Cosmology - matter power spectrum blank axes.png|**Fig. 28** The manuscript sets up axes for the matter density power spectrum $P_\delta$ versus comoving wavenumber $k$.]]

At equality,

$$
k_{\mathrm{eq}}^{-1}
=\frac{D_{\mathrm H}(a_{\mathrm{eq}})}{a_{\mathrm{eq}}},
\qquad
k_{\mathrm{eq}}=\frac{a_{\mathrm{eq}}H(a_{\mathrm{eq}})}{\mechanical{c}}
\sim\frac{1}{\quantity{100}{Mpc}}.
$$

This is the comoving wavenumber of a mode entering the Hubble scale near matter–radiation equality.

Consider a galaxy whose present separation from us is $\quantity{100}{Mpc}$. For an example mode with $k^{-1}=\quantity{100}{Mpc}$, the proper mode scale is $ak^{-1}$. It equals the physical Hubble length when

$$
ak^{-1}=D_{\mathrm H}(a)=\frac{\mechanical{c}}{H(a)},
\qquad
k=\frac{aH(a)}{\mechanical{c}}.
$$

During an approximately constant-$H$ phase of inflation, $a\propto e^{Ht}$.

![[Kyle Kabasares - Cosmology - galaxy at 100 megaparsecs.png|**Fig. 29** The sketch marks a present separation of 100 Mpc between the observer and a galaxy.]]

For a one-dimensional Gaussian density contrast of comoving width $R$,

$$
\delta(x)=A e^{-x^2/(2R^2)}.
$$

![[Kyle Kabasares - Cosmology - Gaussian density perturbation.png|**Fig. 30** A localized density perturbation with characteristic comoving width $R$ and a peak amplitude of order $10^{-5}$.]]

With $\widetilde\delta(k)=\int_{-\infty}^{\infty}dx\,e^{-ikx}\delta(x)$, the Fourier transform is

$$
\widetilde\delta(k)
=A\sqrt{2\pi R^2}\,e^{-(kR)^2/2}.
$$

The notes emphasize that $k$ and $R$ are both comoving quantities. Wavenumbers $k\gg R^{-1}$ are exponentially suppressed.

![[Kyle Kabasares - Cosmology - potential for three horizon entry scales.png|**Fig. 31** The sketch shows $k^{3/2}\Phi$ versus scale factor for $k\ll k_{\mathrm{eq}}$, $k\sim k_{\mathrm{eq}}$, and $k\gg k_{\mathrm{eq}}$. The initial curves are offset for readability, and the handwritten note indicates they should coincide initially. The high-$k$ mode enters the horizon at $a_{\mathrm H}<a_{\mathrm{eq}}$ and its potential falls before settling at a smaller amplitude.]]

The regular mode is approximately frozen outside the horizon in the early radiation era. A mode can evolve once it is inside the horizon. For subhorizon matter perturbations during matter domination, $\delta_{\mathrm m}\propto a$ and $\energy{\rho}_{\mathrm m}\propto a^{-3}$. Then the Poisson equation

$$
k^2\Phi=4\pi\mechanical{G}\energy{\rho}_{\mathrm m}a^2\delta_{\mathrm m}
$$

gives an approximately constant potential.

For a mode inside the horizon during radiation domination, the relevant inequality is $k\gg k_{\mathrm{eq}}$, as marked on the plot. In the radiation-dominated Poisson estimate,

$$
k^2\Phi\simeq4\pi\mechanical{G}\energy{\rho}_{\mathrm r}a^2\delta_{\mathrm{rad}}.
$$

Radiation pressure opposes gravitational compression. Since $\energy{\rho}_{\mathrm r}\propto a^{-4}$, the notes infer a potential envelope proportional to $a^{-2}$ for a radiation contrast that oscillates with roughly fixed amplitude.

##### Density perturbations and the matter power spectrum

The mean density perturbation vanishes, $\langle\widetilde\delta(\vec k,a)\rangle=0$. The notes describe underdensities and overdensities as balancing in this average. The two-point function defines the matter power spectrum,

$$
\left\langle
\widetilde\delta(\vec k,a)\widetilde\delta^*(\vec k',a)
\right\rangle
=(2\pi)^3\delta^{(3)}(\vec k-\vec k')P_\delta(k,a).
$$

The Dirac delta indicates that distinct wavevectors are uncorrelated at the two-point level in a statistically homogeneous model. Isotropy makes the spectrum a function of $k=|\vec k|$. The same definition applies to the potential spectrum $P_\Phi$. After the angular integral, the variance per logarithmic wavenumber interval is

$$
\frac{4\pi k^2dk}{(2\pi)^3}P_\Phi(k)
=\frac{dk}{k}\frac{k^3P_\Phi(k)}{2\pi^2}
=d\ln k\,\Delta_\Phi(k),
\qquad
\Delta_\Phi(k)=\frac{k^3P_\Phi(k)}{2\pi^2}.
$$

At late times inside the horizon, the Poisson limit in natural units gives

$$
k^2\Phi(\vec k,a)
=4\pi\mechanical{G}\energy{\rho}_{\mathrm m}(a)a^2\delta_{\mathrm m}(\vec k,a)
=\frac32H_0^2\Omega_{\mathrm m}a^{-1}\delta_{\mathrm m}(\vec k,a).
$$

It follows that $\delta_{\mathrm m}(\vec k,a)=2k^2 a\,\Phi(\vec k,a)/(3\Omega_{\mathrm m}H_0^2)$, and its variance has the corresponding squared factor,

$$
\bigl\langle|\delta_{\mathrm m}(\vec k,a)|^2\bigr\rangle
=\frac{4k^4a^2}{9(\Omega_{\mathrm m}H_0^2)^2}
\bigl\langle|\Phi(\vec k,a)|^2\bigr\rangle.
$$

For a mode entering during radiation domination, let $a_{\mathrm H}$ be the scale factor at entry. The crossing condition becomes

$$
k=\frac{a_{\mathrm H}H(a_{\mathrm H})}{\mechanical{c}}
=\frac{a_{\mathrm H}H_0}{\mechanical{c}}
\sqrt{\Omega_{\mathrm r}a_{\mathrm H}^{-4}}
=\frac{H_0\sqrt{\Omega_{\mathrm r}}}{\mechanical{c}\,a_{\mathrm H}}.
$$

The notes use $\mechanical{c}=1$ in this calculation. A larger comoving wavenumber enters at a smaller scale factor in the radiation era.

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $z$ | $1$ | Redshift | Dimensionless shift of the observed wavelength relative to its emitted value. |
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
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $\chi$ | $\unit{rad}$ | Hyperspherical radial angle | Coordinate with $x_4=R\cos\chi$ in the embedding. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $V$ | $\unit{m^3}$ | Proper spatial volume | A shell is evaluated at a fixed cosmic time. |
| $\Lambda$ | $\unit{m^{-2}}$ | Cosmological constant | Coefficient of the metric term in the Einstein equation. |
| $n$ | $\unit{m^{-3}}$ | Particle number density | For a heavy nonrelativistic species, rest energy times number density gives the leading energy density. |
| $\thermal{T}_\gamma$, $\thermal{T}_\nu$ | $\unit{K}$ | Photon and neutrino temperatures | After decoupling, the two distributions have separate temperature scales. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\eta$ | $\unit{s}$ | Conformal time | Defined by $d\eta=dt/a$. The product $\mechanical{c}\eta$ has units of comoving distance. |
| $\Omega_\Lambda$ | $1$ | Present vacuum density parameter | Vacuum energy density divided by today's critical density. |
| $\Psi$, $\Phi$ | $\unit{m^2\,s^{-2}}$ | Scalar metric perturbation potentials | The time and space perturbations in the sign convention above. |
| $\Theta$ | $1$ | Fractional photon temperature perturbation | Defined by $\thermal{T}=\thermal{T}^{(0)}(1+\Theta)$. |
| $\sigma_{\mathrm T}$ | $\unit{m^2}$ | Thomson cross section | Low-energy cross section for photon scattering by an electron. |
| $\Theta_0$ | $1$ | Temperature monopole | Angular average of $\Theta$ at a point. |
| $\ell$, $C_\ell$ | $1$ | Angular multipole and temperature angular power | Here $C_\ell$ is for fractional temperature fluctuations. Higher $\ell$ corresponds to smaller angular scales. |
| $\vec k$, $k$ | $\unit{m^{-1}}$ | Comoving wavevector and wavenumber | The wavevector labels a spatial Fourier mode. The magnitude is distinct from the curvature index $k$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
| $\mathcal H$ | $\unit{s^{-1}}$ | Conformal Hubble parameter | Logarithmic derivative of the scale factor with respect to conformal time. |
| $a_{\mathrm{eq}}$ | $1$ | Scale factor at matter–radiation equality | Obtained by equating $\Omega_{\mathrm m}a^{-3}$ and $\Omega_{\mathrm r}a^{-4}$. |
| $T(k)$ | $1$ | Matter transfer function | Encodes the scale dependence acquired before matter domination. |
| $D(a)$ | $1$ | Linear growth factor | Tracks the amplitude of matter density perturbations during and after matter domination. |
| $k_{\mathrm{eq}}$ | $\unit{Mpc^{-1}}$ | Equality wavenumber | Comoving wavenumber for which the inverse wavenumber equals the comoving Hubble length at equality. |
| $\Omega_\gamma$ | $1$ | Present photon density parameter | Photon energy density divided by today's critical density. |
| $P_\delta(k,a)$, $P_\Phi(k,a)$ | $\unit{m^3}$ | Matter and potential power spectra | Defined by their Fourier covariances for dimensionless $\delta$ and $\Phi$ and comoving coordinates in metres. |
| $\Delta_\Phi(k)$ | $1$ | Dimensionless potential power | Potential variance per logarithmic interval of comoving wavenumber. |
| $a_{\mathrm H}$ | $1$ | Scale factor at Hubble crossing | The scale factor at which $k=aH/\mechanical{c}$ for the mode. |
