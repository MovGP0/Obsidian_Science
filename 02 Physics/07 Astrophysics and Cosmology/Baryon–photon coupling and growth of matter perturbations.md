---
title: "Baryon–photon coupling and growth of matter perturbations"
---

> [!TLDR]
> Derive fluid moments and tight-coupling limits, then compare linear growth in radiation- and matter-dominated epochs.

## Worked lecture material

##### Momentum evolution in the perturbed metric

Since $g^{0i}=0$, the connection contraction simplifies to

$$
\begin{aligned}
\Gamma^0_{\mu\nu}\frac{\mechanical{P}^\mu\mechanical{P}^\nu}{\mechanical{P}^0}
&=\frac12g^{00}\left[
2(\partial_\nu g_{0\mu})
\frac{\mechanical{P}^\mu\mechanical{P}^\nu}{\mechanical{P}^0}
-(\partial_t g_{\mu\nu})
\frac{\mechanical{P}^\mu\mechanical{P}^\nu}{\mechanical{P}^0}
\right]\\
&=\frac12g^{00}\left[
(\partial_t g_{00})\mechanical{P}^0
+2(\partial_i g_{00})\mechanical{P}^i
-(\partial_t g_{ij})
\frac{\mechanical{P}^i\mechanical{P}^j}{\mechanical{P}^0}
\right].
\end{aligned}
$$

Substituting $g^{00}=-(1+2\Psi)^{-1}$ and the metric and momentum components gives, to first order,

$$
\Gamma^0_{\mu\nu}\frac{\mechanical{P}^\mu\mechanical{P}^\nu}{\mechanical{P}^0}
\simeq
\energy{E}\,\partial_t\Psi
+2\frac{\mechanical{p}\hat p^i}{a}\partial_i\Psi
+\frac{\mechanical{p}^2}{\energy{E}}\bigl[H(1-\Psi)+\partial_t\Phi\bigr].
$$

Using $d\Psi/dt=\partial_t\Psi+(dx^i/dt)\partial_i\Psi$ in the geodesic equation, the $\partial_t\Psi$ terms cancel and the energy evolution becomes

$$
\frac{d\energy{E}}{dt}
=-\frac{\mechanical{p}\hat p^i}{a}\frac{\partial\Psi}{\partial x^i}
-\frac{H\mechanical{p}^2}{\energy{E}}
-\frac{\mechanical{p}^2}{\energy{E}}\frac{\partial\Phi}{\partial t}.
$$

The background result is $d\energy{E}/dt=-H\mechanical{p}^2/\energy{E}$. For a particle of fixed mass,

$$
\frac{d\energy{E}}{dt}=\frac{d\energy{E}}{d\mechanical{p}}\frac{d\mechanical{p}}{dt}
=\frac{\mechanical{p}}{\energy{E}}\frac{d\mechanical{p}}{dt},
$$

so $d\mechanical{p}/dt=-H\mechanical{p}$ in the background and $\mechanical{p}\propto a^{-1}$.

Equating $(\mechanical{p}/\energy{E})\,d\mechanical{p}/dt$ to $-H\mechanical{p}^2/\energy{E}$ again gives $d\mechanical{p}/dt=-H\mechanical{p}$ for the unperturbed trajectory.

Take $f=f(\vec x,t,\hat p^i,\energy{E})$. For a single internal state, the number density per unit proper volume is $n=\int f\,d^3\mechanical{\vec p}/(2\pi)^3$ in natural units. The distribution obeys $df/dt=C[f]$. After decoupling the collision term vanishes and the phase-space density is conserved along the trajectory.

$$
\frac{df}{dt}
=\frac{\partial f}{\partial t}
+\frac{dx^i}{dt}\frac{\partial f}{\partial x^i}
+\frac{d\hat p^i}{dt}\frac{\partial f}{\partial\hat p^i}
+\frac{d\energy{E}}{dt}\frac{\partial f}{\partial\energy{E}}
=0.
$$

The deflection $d\hat p^i/dt$ is first order in the metric perturbations. Angular dependence of $f$ is also first order about the isotropic background. Their product is second order and is dropped in the linear Boltzmann equation. The streaming velocity is

$$
\frac{dx^i}{dt}=\frac{\mechanical{P}^i}{\mechanical{P}^0}
\simeq\frac{\mechanical{p}\hat p^i}{a\energy{E}}(1-\Phi+\Psi).
$$

##### Continuity and velocity moments

Integrate the collisionless Boltzmann equation over momentum. To the order retained, the integrated time term is $\partial_t n$, and the streaming term is the spatial divergence of the particle flux. Define the physical bulk velocity by

$$
\mechanical{v}^i=
\frac{\displaystyle\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}
f\frac{\mechanical{p}}{\energy{E}}\hat p^i}
{\displaystyle\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}f}.
$$

The term proportional to $H+\partial_t\Phi$ contains the momentum integral

$$
\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}
\frac{\mechanical{p}^2}{\energy{E}}
\frac{\partial f}{\partial\energy{E}}
=\frac{4\pi}{(2\pi)^3}\int_0^\infty
\mechanical{p}^3\frac{\partial \bar f}{\partial\mechanical{p}}\,d\mechanical{p}
=-3n.
$$

Here $\bar f$ denotes the angular average. The first equality uses $\partial f/\partial\energy{E}=(\energy{E}/\mechanical{p})\partial f/\partial\mechanical{p}$. The second uses integration by parts with vanishing endpoint contributions. The potential gradient in the energy term integrates to zero at first order because it is odd in direction when multiplied by the isotropic background. Thus

$$
\frac{\partial n}{\partial t}
+\frac1a\partial_i(n\mechanical{v}^i)
+3n(H+\partial_t\Phi)=0.
$$

With perturbations set to zero, $\partial_t n^{(0)}+3Hn^{(0)}=0$, so $n^{(0)}\propto a^{-3}$. Writing $n=n^{(0)}+n^{(1)}$, the linear equation is

$$
\partial_t n^{(1)}+\frac1a\partial_i(n^{(0)}\mechanical{v}^i)
+3Hn^{(1)}+3n^{(0)}\partial_t\Phi=0.
$$

For the number-density contrast $\delta=n^{(1)}/n^{(0)}$, the background equation cancels the $3Hn^{(1)}$ term.

$$
\frac{\partial\delta}{\partial t}+\frac1a\nabla\cdot\mechanical{\vec v}
+3\frac{\partial\Phi}{\partial t}=0.
$$

The notes mark $\delta\sim1$ as the onset of nonlinear growth associated with galaxy formation.

Use the perturbed FRW metric and expand $f=f^{(0)}(\mechanical{p},t)+f^{(1)}(\hat p^i,\vec x,t,\mechanical{p})$. Integrating the collisionless Boltzmann equation over $d^3\mechanical{\vec p}/(2\pi)^3$ gives

$$
\frac{d}{dt}(a^3 n^{(0)})=0,
\qquad
\frac{\partial\delta}{\partial t}
+\frac1a\nabla\cdot\mechanical{\vec v}
+3\frac{\partial\Phi}{\partial t}=0
$$

at zeroth and first order, respectively. The potential $\Phi$ is still to be determined. The density variables are

$$
\begin{aligned}
1+\delta(t,\vec x)&=\frac{n(t,\vec x)}{n^{(0)}(t)},\\
n^{(0)}&=\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}f^{(0)},\\
\energy{\rho}^{(0)}&=\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\energy{E}(\mechanical{p})f^{(0)}.
\end{aligned}
$$

The numerator in the ratio for $1+\delta$ is the total density. The handwritten $n^{(1)}$ instead gives $\delta$ alone when divided by $n^{(0)}$.

The geodesic equation $d\mechanical{P}^\mu/d\lambda+\Gamma^\mu_{\alpha\beta}\mechanical{P}^\alpha\mechanical{P}^\beta=0$ determines the energy derivative in $df/dt=\partial_t f+(dx^i/dt)\partial_i f+(d\energy{E}/dt)\partial_{\energy{E}}f=0$ at linear order. The margin also marks the moment with weight $(\mechanical{p}/\energy{E})\hat p^j$, used to obtain the velocity equation.

With the same Fourier convention as for $\Theta$,

$$
\delta(t,\vec x)=
\int\frac{d^3k}{(2\pi)^3}e^{i\vec k\cdot\vec x}\widetilde\delta(t,\vec k).
$$

The factor $(2\pi)^{-3}$ is set by the transform convention. For the longitudinal velocity amplitude $\widetilde{\mechanical{v}}$,

$$
\frac{\partial\widetilde\delta}{\partial t}
+\frac{ik}{a}\widetilde{\mechanical{v}}
+3\frac{\partial\widetilde\Phi}{\partial t}=0.
$$

For irrotational flow, $\widetilde{\mechanical{\vec v}}=\widetilde{\mechanical{v}}\,\vec k/k$. The fluid velocity follows from the first velocity moment of the distribution. In the following formulas write $d\Pi=d^3\mechanical{\vec p}/(2\pi)^3$ and $u^i=(\mechanical{p}/\energy{E})\hat p^i$ for the velocity of a single particle in units with $\mechanical{c}=1$. At first order,

$$
n^{(0)}\mechanical{v}^j(\vec x,t)=\int d\Pi\,u^j f.
$$

Multiplying the collisionless Boltzmann equation by $u^j$ and integrating gives

$$
0=\partial_t\int d\Pi\,u^j f
+\partial_i\int d\Pi\,\frac{dx^i}{dt}u^j f
+\int d\Pi\,\frac{d\energy{E}}{dt}u^j\frac{\partial f}{\partial\energy{E}}
$$

to the order considered. The streaming term couples angular moments of order $\ell$ to neighboring moments, in particular to $\ell+1$.

The notes then use the relativistic streaming velocity $dx^i/dt\simeq\hat p^i(1-\Phi+\cdots)/a$ to display the second angular moment.

$$
q^{ij}=\int\frac{\mechanical{p}^2d\mechanical{p}\,d(\cos\theta_p)\,d\phi_p}{(2\pi)^3}
\,\hat p^i\hat p^j f\frac{\mechanical{p}}{\energy{E}}.
$$

For the diagonal component along the first Cartesian axis, $\hat p^1\hat p^1=(\sin\theta_p\cos\phi_p)^2$. For a massive species, using $dx^i/dt\simeq u^i/a$ in the streaming term instead gives a second velocity moment with weight $(\mechanical{p}/\energy{E})^2$.

The velocity moment comes entirely from the anisotropic part $f^{(1)}$. In the notation of [[#Continuity and velocity moments|the section on Continuity and velocity moments]],

$$
\int d\Pi\,\frac{\mechanical{p}}{\energy{E}}\hat p^j f^{(0)}(\energy{E},t)=0
$$

by angular symmetry. The second direction moment of the background is

$$
\int d\Pi\,\hat p^i\hat p^j f^{(0)}=\frac{\delta^{ij}}{3}n^{(0)}.
$$

For example, along the polar axis, integrating $\cos^2\theta_p$ over direction gives $4\pi/3$, so the diagonal component is $\tfrac13\int d\Pi\,f^{(0)}=n^{(0)}/3$.

For pressureless nonrelativistic matter, neglecting the velocity-dispersion term, the velocity moment equation is

$$
\partial_t(n^{(0)}\mechanical{v}^i)
+4Hn^{(0)}\mechanical{v}^i
+\frac{n^{(0)}}a\partial_i\Psi=0.
$$

The first term expands to $(\partial_t n^{(0)})\mechanical{v}^i+n^{(0)}\partial_t\mechanical{v}^i$. Substituting $\partial_t n^{(0)}=-3Hn^{(0)}$ leaves one power of $H$ in the velocity equation.

##### Drag and photon–baryon tight coupling

The pressureless velocity equation in real space is

$$
\frac{\partial\mechanical{v}^i}{\partial t}
+H\mechanical{v}^i
+\frac1a\frac{\partial\Psi}{\partial x^i}=0.
$$

The fields depend on space and time. In the absence of a potential gradient, the peculiar velocity decays as $\mechanical{v}^i\propto a^{-1}$.

The background density scales inversely with the comoving cell's proper volume, $n^{(0)}\propto a^{-3}$. In the perturbed spatial metric, the local volume element is proportional to $a^3(1+3\Phi)$ at first order. A fixed number of particles in such a cell gives $n\propto[a^3(1+3\Phi)]^{-1}$. The Einstein equations link the two potentials, and the notes mention Asantha Cooray in connection with gravitational slip, a departure from the zero-slip relation $\Phi=-\Psi$ in this sign convention.

For baryons, number conservation gives

$$
\frac{\partial\delta_{\mathrm b}}{\partial t}
+\frac1a\nabla\cdot\mechanical{\vec v}_{\mathrm b}
+3\frac{\partial\Phi}{\partial t}=0.
$$

The longitudinal mode $\widetilde{\mechanical{v}}^i=\widetilde{\mechanical{v}}k^i/k$ obeys $\partial_t\widetilde{\mechanical{v}}+H\widetilde{\mechanical{v}}+ik\widetilde\Psi/a=0$ in the pressureless collisionless case. For the baryons, momentum exchange with photons gives

$$
\frac{\partial\widetilde{\mechanical{v}}_{\mathrm b}}{\partial t}
+H\widetilde{\mechanical{v}}_{\mathrm b}+\frac{ik}{a}\widetilde\Psi
=n_e\sigma_{\mathrm T}\frac{4\energy{\rho}_\gamma}{3\energy{\rho}_{\mathrm b}}
\left(\widetilde{\mechanical{v}}_\gamma-\widetilde{\mechanical{v}}_{\mathrm b}\right).
$$

With the convention $\widetilde\Theta(\mu)=\sum_{\ell}(-i)^\ell(2\ell+1)\widetilde\Theta_\ell P_\ell(\mu)$, the photon bulk velocity is $\widetilde{\mechanical{v}}_\gamma=-3i\widetilde\Theta_1$. The handwritten bracket reads $3i\widetilde\Theta_1+\widetilde{\mechanical{v}}_{\mathrm b}$. The drag term above uses the sign that drives the baryon velocity toward the photon velocity.

For $n_e\sigma_{\mathrm T}/H\gg1$ in natural units, the photon and baryon bulk velocities agree to leading order.

The background scale factor is related to the component densities and pressures through $G_{\mu\nu}=8\pi\mechanical{G}\energy{T}_{\mu\nu}$ and, for a flat background, $H^2=(8\pi\mechanical{G}/3)\sum_i\energy{\rho}_i$. The perturbations $\Phi$ and $\Psi$ depend on density, pressure, momentum flow, and shear. These enter through $\delta\energy{T}^0{}_0$, the spatial trace, $\delta\energy{T}^i{}_0$, and the traceless spatial stress, respectively. The notes compare the shear contribution with the stress in a nonideal fluid.

The book uses derivatives with respect to conformal time $\eta$. Write primes for these derivatives and suppress tildes on Fourier amplitudes. The photon, density, and pressureless velocity equations are

$$
\begin{aligned}
\Theta'+ik\mu\Theta+\Phi'+ik\mu\Psi
&=a n_e\sigma_{\mathrm T}
\left(\Theta_0-\Theta+\mu\mechanical{v}_{\mathrm b}\right),\\
\delta'+ik\mechanical{v}+3\Phi'&=0,\\
\mechanical{v}'+\mathcal H\mechanical{v}+ik\Psi&=0,
\qquad
\mathcal H=\frac{a'}a=aH.
\end{aligned}
$$

The photon collision term uses the sign from [[Perturbed metrics and the cosmological Boltzmann equation#Baryon–photon fluid|the section on Baryon–photon fluid]]. The notes also apply the first equation to collisionless relativistic neutrinos with zero right-hand side. The density equation applies to baryons, while their velocity equation acquires the drag term from [[#Drag and photon–baryon tight coupling|the section on Drag and photon–baryon tight coupling]].

The system requires the perturbed Einstein equations. The notes list the time-time, spatial shear, and time-space momentum equations,

$$
\delta G^0{}_0=8\pi\mechanical{G}\,\delta\energy{T}^0{}_0,
\qquad
(\delta G^i{}_j)_{\mathrm{TF}}=8\pi\mechanical{G}\,(\delta\energy{T}^i{}_j)_{\mathrm{TF}},
\qquad
\delta G^0{}_j=8\pi\mechanical{G}\,\delta\energy{T}^0{}_j.
$$

They mark two as independent once the conservation equations are used and refer back to Ma and Bertschinger and to TASI lecture notes.

The Fourier transform sends $\nabla\Theta$ to $i\vec k\widetilde\Theta$. Since $d\eta=dt/a$, it also gives $dx/d\eta=a\,dx/dt$ and $\mathcal H=a'/a=aH$. The inverse $\mathcal H^{-1}$ sets the comoving Hubble scale in natural units.

For the mixed time component of stress–energy, $\delta\energy{T}^0{}_0=-\delta\energy{\rho}$. The fractional density contrast is $\delta=(\energy{\rho}-\energy{\rho}^{(0)})/\energy{\rho}^{(0)}$. With the Fourier notation of [[#Drag and photon–baryon tight coupling|the section on Drag and photon–baryon tight coupling]], the time-time Einstein equation is

$$
\begin{aligned}
k^2\Phi+3\mathcal H(\Phi'-\mathcal H\Psi)
&=4\pi\mechanical{G}a^2\delta\energy{\rho},\\
\delta\energy{\rho}
&=\energy{\rho}_{\mathrm d}\delta_{\mathrm d}
+\energy{\rho}_{\mathrm b}\delta_{\mathrm b}
+4\energy{\rho}_\gamma\Theta_0
+4\energy{\rho}_\nu N_0.
\end{aligned}
$$

Here $\mathrm d$ denotes dark matter and $N_\ell$ denotes the relativistic neutrino multipoles, normalized like the photon temperature multipoles. The first term on the left alone gives the Poisson limit $\nabla^2\Phi/a^2=-4\pi\mechanical{G}\delta\energy{\rho}$ in real space. The terms with $\mathcal H$ supply the relativistic correction.

The traceless spatial equation is

$$
k^2(\Phi+\Psi)
=-32\pi\mechanical{G}a^2(\energy{\rho}_\gamma\Theta_2+\energy{\rho}_\nu N_2).
$$

When the radiation shear on the right is small, $\Psi\simeq-\Phi$. The margin gives “to within $10\%$” as a rough estimate. The factor of four in the photon density perturbation follows from $\energy{\rho}_\gamma\propto\thermal{T}^4$ and

$$
(\thermal{T}^{(0)}+\delta\thermal{T})^4
=(\thermal{T}^{(0)})^4(1+\Theta)^4
\simeq(\thermal{T}^{(0)})^4(1+4\Theta).
$$

Averaging over angles gives $\delta\energy{\rho}_\gamma=4\energy{\rho}_\gamma\Theta_0$.

The notes finish by distinguishing the scalar line element from a spatial tensor perturbation. In the same scalar-potential convention as the earlier pages, a tensor term $h_{ij}$ adds $a^2h_{ij}\,dx^i dx^j$ and represents the gravitational-wave part.

##### Horizon entry and perturbation growth

##### Early universe

Fix a comoving Fourier mode, for example $k=1/(\quantity{10}{Mpc})=\quantity{0.1}{Mpc^{-1}}$, and follow it back in time. In a flat background with matter, radiation, and a cosmological constant, conformal time is

$$
\begin{aligned}
\eta(a)
&=\int_0^t\frac{dt'}{a(t')}
=\int_0^a\frac{da'}{a'^2 H(a')}\\
&=\frac{1}{H_0\sqrt{\Omega_{\mathrm m}}}
\int_0^a\frac{da'}{\sqrt{a'+a_{\mathrm{eq}}+(\Omega_\Lambda/\Omega_{\mathrm m})a'^4}},
\qquad
a_{\mathrm{eq}}=\frac{\Omega_{\mathrm r}}{\Omega_{\mathrm m}}.
\end{aligned}
$$

At early times the $\Omega_\Lambda$ term is negligible, so

$$
\begin{aligned}
\eta(a)
&\simeq\frac{2}{H_0\sqrt{\Omega_{\mathrm m}}}
\left(\sqrt{a+a_{\mathrm{eq}}}-\sqrt{a_{\mathrm{eq}}}\right)\\
&=\frac{2\sqrt{a_{\mathrm{eq}}}}{H_0\sqrt{\Omega_{\mathrm m}}}
\left(\sqrt{1+a/a_{\mathrm{eq}}}-1\right).
\end{aligned}
$$

In the radiation era $a/a_{\mathrm{eq}}\ll1$. Expanding the square root gives $\eta\simeq a/(H_0\sqrt{\Omega_{\mathrm r}})$ and $\mathcal H=aH=1/\eta$. In the matter era $a_{\mathrm{eq}}/a\ll1$ with vacuum energy still negligible, $\eta$ grows as $\sqrt a$. With $\mechanical{c}=1$, $k\eta$ and $k/\mathcal H$ coincide in the radiation era and are small at sufficiently early times for a fixed $k$.

For a fixed comoving mode scale $k^{-1}$, going sufficiently far back in the radiation era puts that scale outside the comoving particle horizon.

![[Kyle Kabasares - Cosmology - comoving horizon and mode crossing.png|**Fig. 23** The horizontal dashed line marks the scale $k^{-1}$. The rising solid curve represents the comoving particle horizon in units with $c=1$. The blue dashed curve sketches an early decreasing scale that could let the mode begin inside and then exit the horizon. The horizontal axis marks nucleosynthesis, matter–radiation equality, photon last scattering, and today.]]

In the far future of the flat $\Lambda$CDM model, neglecting radiation in the integral from today gives

$$
\eta(a)\simeq\eta_0+\frac1{H_0}\int_1^a
\frac{da'}{\sqrt{\Omega_\Lambda a'^4+\Omega_{\mathrm m}a'}}.
$$

At $a\gg1$, the expansion approaches $H=H_0\sqrt{\Omega_\Lambda}$. This motivates the question posed in connection with inflation. How can the relevant comoving Hubble scale decrease as $a$ grows? The notes cite Alan Guth's 1981 paper. [Inflationary universe](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.23.347).

For an early phase with constant $H$ beginning at $a_{\mathrm{start}}$, the elapsed conformal time is

$$
\Delta\eta=\int_{a_{\mathrm{start}}}^a\frac{da'}{a'^2H}
=\frac1{a_{\mathrm{start}}H}-\frac1{aH}.
$$

Elapsed conformal time increases toward a finite limit. The comoving Hubble length $(aH)^{-1}$ decreases, as does the conformal time remaining until that limit.

A constant Hubble parameter satisfies $\dot a/a=H$, so $\dot a=Ha$ and $a\propto e^{Ht}$, with the dot in this expression denoting a cosmic-time derivative.

Return to a superhorizon mode $k\eta\ll1$ during the radiation era, $a/a_{\mathrm{eq}}\ll1$ and $\mathcal H=1/\eta$. Multiplying the conformal-time photon equation by $\eta$ makes the factors $k\eta$ explicit. Taking the monopole and dropping the suppressed spatial-gradient terms gives

$$
\Theta_0'+\Phi'=0,\qquad
\delta_{\mathrm m}'+3\Phi'=0,\qquad
N_0'+\Phi'=0,
$$

where primes denote conformal-time derivatives. The monopole of the Thomson collision term vanishes because scattering conserves photon number in this approximation.

Neglecting anisotropic stress so that $\Psi\simeq-\Phi$, the large-scale time-time Einstein equation is

$$
\frac3\eta\left(\Phi'+\frac{\Phi}{\eta}\right)
=4\pi\mechanical{G}a^2\left(
\energy{\rho}_{\mathrm m}\delta_{\mathrm m}
+4\energy{\rho}_\gamma\Theta_0
+4\energy{\rho}_\nu N_0\right).
$$

The notes differentiate both sides to obtain an evolution equation for $\Phi$. The left-hand derivative is $(3/\eta)\Phi''-6\Phi/\eta^3$. For the right-hand derivative, use $(a^2)'=2\mathcal H a^2$, $\energy{\rho}_{\mathrm m}'=-3\mathcal H\energy{\rho}_{\mathrm m}$, and $\energy{\rho}_\gamma'=-4\mathcal H\energy{\rho}_\gamma$, with the same radiation law for relativistic neutrinos. The derivative of the density combination in parentheses is

$$
-3\mathcal H\energy{\rho}_{\mathrm m}\delta_{\mathrm m}
-4\mathcal H(4\energy{\rho}_\gamma\Theta_0+4\energy{\rho}_\nu N_0)
-(3\energy{\rho}_{\mathrm m}+4\energy{\rho}_\gamma+4\energy{\rho}_\nu)\Phi'.
$$

##### Gravitational potentials across matter–radiation equality

Differentiating $\energy{\rho}_\gamma\propto a^{-4}$ gives $\energy{\rho}_\gamma'=-4(a'/a)\energy{\rho}_\gamma$. Deep in radiation domination, neglect $\energy{\rho}_{\mathrm m}$ in the differentiated equation on [[#Early universe|the section on Early universe]] and use $8\pi\mechanical{G}a^2(\energy{\rho}_\gamma+\energy{\rho}_\nu)=3/\eta^2$. The boxed equation is

$$
\boxed{\eta\Phi''+4\Phi'=0.}
$$

For $\Phi\propto\eta^\alpha$, the indicial equation is $\alpha(\alpha-1)+4\alpha=0$. The two behaviors are constant and $\eta^{-3}$.

On superhorizon scales $k\eta\ll1$, the monopole and matter density obey $\Theta_0'=-\Phi'$ and $\delta_{\mathrm m}'=-3\Phi'$. With negligible shear, the notes revisit the time-time equation

$$
k^2\Phi+3\mathcal H(\Phi'+\mathcal H\Phi)
=4\pi\mechanical{G}a^2
(\energy{\rho}_{\mathrm m}\delta_{\mathrm m}
+4\energy{\rho}_\gamma\Theta_0+4\energy{\rho}_\nu N_0).
$$

The conformal time is $\eta=\int dt/a$, and $\vec k$ labels the spatial Fourier transform with respect to $\vec x$. The notes use $k\eta=1$ to mark particle-horizon crossing. They also give $k/(aH)=1$ to mark crossing of the comoving Hubble scale $(aH)^{-1}$. In the radiation era the two conditions agree in units with $\mechanical{c}=1$.

The comoving wavelength satisfies $k=2\pi/\lambda_{\mathrm{com}}$. In units with $\mechanical{c}=1$,

$$
\frac{k}{aH}=\frac{2\pi H^{-1}}{a\lambda_{\mathrm{com}}}.
$$

During radiation domination $a\ll a_{\mathrm{eq}}=\Omega_{\mathrm r}/\Omega_{\mathrm m}$. The superhorizon solution of $\eta\Phi''+4\Phi'=0$ is $\Phi=A+B/\eta^3$, with constant $A$ and $B$.

Now consider $k\eta\ll1$ while both matter and radiation contribute to the background. The notes retain $\Theta_0'=-\Phi'$ and $\delta_{\mathrm m}'=-3\Phi'$ and use the large-scale constraint

$$
3\mathcal H(\Phi'+\mathcal H\Phi)
=4\pi\mechanical{G}a^2
(\energy{\rho}_{\mathrm m}\delta_{\mathrm m}+4\energy{\rho}_\gamma\Theta_0+4\energy{\rho}_\nu N_0).
$$

Set $y=a/a_{\mathrm{eq}}$. The notes refer to equation 7.27 and give the regular adiabatic solution across equality, neglecting anisotropic stress.

$$
\Phi(a)=\frac{\Phi(a=0)}{10y^3}
\left[16\sqrt{1+y}+9y^3+2y^2-8y-16\right].
$$

The coefficient $16$ in front of the square root is fixed by the stated initial normalization. The numerator then starts at $10y^3$ as $y\to0$. The notes mark this result as limited to the regime used in its derivation.

When $a\gg a_{\mathrm{eq}}$ and matter dominates, the large-scale solution from [[#Gravitational potentials across matter–radiation equality|the section on Gravitational potentials across matter–radiation equality]] approaches $\Phi(a)/\Phi(0)=9/10$.

![[Kyle Kabasares - Cosmology - potential across matter radiation equality.png|**Fig. 24** The normalized potential drops from $1$ to $9/10$ across matter–radiation equality for the sketched mode. The diagram marks horizon crossing later, during matter domination.]]

For a mode deep inside the horizon, $k\eta\gg1$, and well into matter domination, $a/a_{\mathrm{eq}}\gg1$, neglect the radiation density terms. Multiplication of the time-time constraint by $\eta^2$ highlights the factor $(k\eta)^2$ in the gradient term. The dominant balance is the Poisson limit,

$$
k^2\Phi\simeq 4\pi\mechanical{G}a^2\energy{\rho}_{\mathrm m}\delta_{\mathrm m}
=\frac{4\pi\mechanical{G}\energy{\rho}_{\mathrm m,0}}a\,\delta_{\mathrm m}.
$$

Thus $\Phi\simeq(4\pi\mechanical{G}\energy{\rho}_{\mathrm m,0}/k^2)\,\delta_{\mathrm m}/a$. The matter continuity equation is $\delta_{\mathrm m}'+ik\mechanical{v}_{\mathrm m}=-3\Phi'$ in conformal time.

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
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Converts the time coordinate to length units in the flat interval. |
| $\theta$, $\phi$ | $\unit{rad}$ | Spherical angles | Polar angle and azimuth in the spherical line element. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{P}^\mu$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Tangent to the particle trajectory for an appropriate normalization of the affine parameter. Its time component in SI is $\energy{E}/\mechanical{c}$. |
| $\energy{E}$ | $\unit{J}$ | Photon energy | Energy measured by a comoving observer, equal to $\mechanical{P}^0$ in natural units. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $\Lambda$ | $\unit{m^{-2}}$ | Cosmological constant | Coefficient of the metric term in the Einstein equation. |
| $n$ | $\unit{m^{-3}}$ | Particle number density | For a heavy nonrelativistic species, rest energy times number density gives the leading energy density. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
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
