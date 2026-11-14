---
title: "Galactic potential models, virial balance, and relaxation"
---

> [!TLDR]
> Use potential–density pairs and virial arguments to model a stellar system and estimate its encounter and relaxation times.

## Worked lecture material

##### The tangent-point method

![[Kyle Kabasares - Intro to Astrophysics - Schematic Milky Way rotation curve.png|**Fig. 70** Circular speed rises at small Galactocentric radii and is approximately constant at large radii.]]

For gas in a circular orbit, the line-of-sight velocity is $\mechanical{v}_r=\mechanical{v}\cos\alpha-\mechanical{v}_0\sin\ell$. At the tangent point, the line of sight is tangent to the circular orbit and the circular velocity lies along the line of sight. This geometry makes it possible to use terminal velocities to infer the inner rotation curve.

![[Kyle Kabasares - Intro to Astrophysics - Tangent point geometry.png|**Fig. 71** The Galactocentric radius to the tangent point meets the line of sight at a right angle. The circular velocity at that point is parallel to the line of sight.]]

![[Kyle Kabasares - Intro to Astrophysics - Tangent point in longitude plot.png|**Fig. 72** The tangent point is marked on a schematic longitude plot.]]

##### Stellar dynamics

Stellar dynamics studies many-particle systems under gravity. In this treatment, stars act as point particles.

The distances between stars are usually much larger than their radii. Stellar dynamics estimates interaction and collision rates and can model the effect of a black hole on stellar evolution. Examples include binary hardening and hypervelocity stars.

| System | Approximate number of stars |
| --- | --- |
| Open cluster | $100$–$1000$ |
| Globular cluster | $10^5$–$10^6$ |
| Large galaxy | $10^{11}$ |

The methods resemble treatments in statistical mechanics and plasma physics, including the idea of a relaxation time. Sparke and Gallagher provide an introduction. The lecture points to Binney and Tremaine for a more extensive treatment. The starting point is the gravitational potential.

##### Gravitational potential

For a particle of mass $\mechanical{m}$ at displacement $\mechanical{\mathbf r}$ from mass $\mechanical{M}$,

$$
\frac{d(\mechanical{m}\mechanical{\mathbf v})}{dt}
=-\frac{G\mechanical{M}\mechanical{m}}{\mechanical{r}^3}\mechanical{\mathbf r}.
$$

For many particles the equation of motion for particle $\alpha$ is

$$
\frac{d(\mechanical{m}_{\alpha}\mechanical{\mathbf v}_{\alpha})}{dt}
=-\sum_{\beta\ne\alpha}\frac{G\mechanical{m}_{\alpha}\mechanical{m}_{\beta}}
{|\mechanical{\mathbf x}_{\alpha}-\mechanical{\mathbf x}_{\beta}|^3}
(\mechanical{\mathbf x}_{\alpha}-\mechanical{\mathbf x}_{\beta}).
$$

At a position away from the point masses, the gravitational potential and force on a test particle are

$$
\energy{\Phi}(\mechanical{\mathbf x})
=-\sum_{\alpha}\frac{G\mechanical{m}_{\alpha}}{|\mechanical{\mathbf x}-\mechanical{\mathbf x}_{\alpha}|},
\qquad
\frac{d(\mechanical{m}\mechanical{\mathbf v})}{dt}
=-\mechanical{m}\nabla\energy{\Phi}(\mechanical{\mathbf x}).
$$

> [!note]
> The handwritten discrete potential omits its minus sign. The force equation and the continuous potential on this page give the sign convention used here.

For a continuous mass distribution,

$$
\energy{\Phi}(\mechanical{\mathbf x})
=-\int\frac{G\mechanical{\rho}(\mechanical{\mathbf x}')}{|\mechanical{\mathbf x}-\mechanical{\mathbf x}'|}
\,d^3\mechanical{\mathbf x}'.
$$

Poisson’s equation is $\nabla^2\energy{\Phi}=4\pi G\mechanical{\rho}$. A test particle inside a uniform spherical shell feels zero net gravitational force from the shell.

![[Kyle Kabasares - Intro to Astrophysics - Uniform spherical shell.png|**Fig. 73** A uniform spherical shell with interior and exterior points marked.]]

For a spherically symmetric potential, the circular speed is $\mechanical{v}_{\mathrm{circ}}=\sqrt{G\mechanical{M}(\mechanical{R})/\mechanical{R}}$, where $\mechanical{M}(\mechanical{R})$ is the enclosed mass. Sparke and Gallagher use $\mechanical{\mathbf F}=-\nabla\energy{\Phi}$ for force per unit mass. The force on a particle of mass $\mechanical{m}$ is $-\mechanical{m}\nabla\energy{\Phi}$.

##### Potential–density pairs

###### Plummer potential

$$
\energy{\Phi}_{\mathrm p}(\mechanical{r})
=-\frac{G\mechanical{M}}{\sqrt{\mechanical{r}^2+\mechanical{a}_{\mathrm p}^2}}.
$$

The parameter $\mechanical{a}_{\mathrm p}$ is constant, and $\mechanical{M}$ is the total mass of the system. The Plummer model is a useful approximation for star clusters. Its core radius $\mechanical{r}_c$, where the projected surface density falls to half its central value, is about $0.64\mechanical{a}_{\mathrm p}$.

###### Isothermal sphere

The logarithmic potential is proportional to $\ln(\mechanical{r}/\mechanical{r}_0)$.

###### Navarro–Frenk–White halo

The Navarro–Frenk–White density profile is

$$
\mechanical{\rho}(\mechanical{r})
=\frac{\mechanical{\rho}_{\mathrm{NFW}}}{(\mechanical{r}/\mechanical{a}_{\mathrm N})
(1+\mechanical{r}/\mechanical{a}_{\mathrm N})^2}.
$$

##### A particle in a static potential

Dot the equation of motion with $\mechanical{\mathbf v}$.

$$
\mechanical{\mathbf v}\cdot\frac{d(\mechanical{m}\mechanical{\mathbf v})}{dt}
=-\mechanical{m}\nabla\energy{\Phi}(\mechanical{\mathbf x})\cdot\mechanical{\mathbf v}.
$$

Along the path, the chain rule gives

$$
\frac{d\energy{\Phi}}{dt}
=\mechanical{\mathbf v}\cdot\nabla\energy{\Phi}
=\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\frac{d\mechanical{x}}{dt}
+\frac{\partial\energy{\Phi}}{\partial\mechanical{y}}\frac{d\mechanical{y}}{dt}
+\frac{\partial\energy{\Phi}}{\partial\mechanical{z}}\frac{d\mechanical{z}}{dt}.
$$

Thus

$$
\mechanical{m}\mechanical{\mathbf v}\cdot\frac{d\mechanical{\mathbf v}}{dt}
+\mechanical{m}\frac{d\energy{\Phi}}{dt}
=\frac{\mechanical{m}}{2}\frac{d(\mechanical{v}^2)}{dt}
+\mechanical{m}\frac{d\energy{\Phi}}{dt}=0.
$$

For a potential that tends to zero at infinity, the orbit is bound if the total energy $\energy{E}=\energy{E}_{\mathrm k}+\energy{E}_{\mathrm p}<0$. Escape is possible when $\energy{E}>0$, or $\mechanical{m}\mechanical{v}^2/2>-\mechanical{m}\energy{\Phi}$. The escape speed and angular momentum are

$$
\mechanical{v}_{\mathrm{escape}}(\mechanical{\mathbf x})
=\sqrt{-2\energy{\Phi}(\mechanical{\mathbf x})},
\qquad
\mechanical{\mathbf L}=\mechanical{\mathbf x}\times\mechanical{m}\mechanical{\mathbf v}.
$$

Differentiate the angular momentum using the product rule.

$$
\begin{aligned}
\frac{d\mechanical{\mathbf L}}{dt}
&=\frac{d\mechanical{\mathbf x}}{dt}\times\mechanical{m}\mechanical{\mathbf v}
+\mechanical{\mathbf x}\times\mechanical{m}\frac{d\mechanical{\mathbf v}}{dt}\\
&=-\mechanical{\mathbf x}\times\mechanical{m}\nabla\energy{\Phi}(\mechanical{\mathbf x}).
\end{aligned}
$$

The first term vanishes because $d\mechanical{\mathbf x}/dt=\mechanical{\mathbf v}$. The remaining term is torque. In a spherically symmetric potential the gradient is radial, so the torque vanishes and angular momentum is constant.

> [!note]
> The handwritten torque equation omits the minus sign from the gravitational force law.

##### Deriving the scalar virial theorem

Consider a self-gravitating system. Dot the equation of motion for each particle with its position and sum over particles.

$$
\sum_\alpha \mechanical{\mathbf x}_\alpha\cdot
\frac{d(\mechanical{m}_\alpha\mechanical{\mathbf v}_\alpha)}{dt}
=\sum_\alpha\mechanical{\mathbf x}_\alpha\cdot\left[
-\sum_{\beta\ne\alpha}\frac{G\mechanical{m}_\alpha\mechanical{m}_\beta
(\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta)}
{|\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta|^3}
+\mechanical{\mathbf F}_{\mathrm{ext},\alpha}\right].
$$

The contribution from the first term before the sum is symmetrized changes when $\alpha$ and $\beta$ are exchanged.

> [!note]
> The source omits the cube on the force denominator here. The many-particle force law on [[#Gravitational potential|the section on Gravitational potential]] supplies it.

In one dimension,

$$
\frac{d^2(\mechanical{m}\mechanical{x}^2)}{dt^2}
=\mechanical{m}\frac{d}{dt}\left(2\mechanical{x}\frac{d\mechanical{x}}{dt}\right)
=2\mechanical{m}\left(\frac{d\mechanical{x}}{dt}\right)^2
+2\mechanical{m}\mechanical{x}\frac{d^2\mechanical{x}}{dt^2}
=2\mechanical{m}\mechanical{v}^2+2\mechanical{m}\mechanical{x}\frac{d\mechanical{v}}{dt}.
$$

The next step generalizes this identity to three dimensions.

In one dimension, rearranging gives

$$
\mechanical{m}\mechanical{x}\frac{d\mechanical{v}}{dt}
=\frac12\frac{d^2(\mechanical{m}\mechanical{x}^2)}{dt^2}
-\mechanical{m}\mechanical{v}^2.
$$

In three dimensions,

$$
\begin{aligned}
\sum_\alpha\frac{d(\mechanical{m}_\alpha\mechanical{\mathbf v}_\alpha)}{dt}
\cdot\mechanical{\mathbf x}_\alpha
&=\frac12\frac{d^2}{dt^2}
\sum_\alpha\mechanical{m}_\alpha|\mechanical{\mathbf x}_\alpha|^2
-\sum_\alpha\mechanical{m}_\alpha|\mechanical{\mathbf v}_\alpha|^2\\
&=\frac12\frac{d^2\mechanical{I}}{dt^2}-2\energy{K}.
\end{aligned}
$$

Here $\mechanical{I}$ is the scalar moment of inertia and $\energy{K}$ is the total kinetic energy.

Exchange $\alpha$ and $\beta$ in the internal gravitational term, then average the two versions. The dot products in the numerator combine as

$$
\begin{aligned}
&(\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta)\cdot\mechanical{\mathbf x}_\alpha
+(\mechanical{\mathbf x}_\beta-\mechanical{\mathbf x}_\alpha)\cdot\mechanical{\mathbf x}_\beta\\
&=|\mechanical{\mathbf x}_\alpha|^2+|\mechanical{\mathbf x}_\beta|^2
-2\mechanical{\mathbf x}_\alpha\cdot\mechanical{\mathbf x}_\beta
=|\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta|^2.
\end{aligned}
$$

This cancels two of the three distance factors in the denominator. The result is the total gravitational potential energy,

$$
\energy{U}=-\frac12\sum_{\alpha\ne\beta}
\frac{G\mechanical{m}_\alpha\mechanical{m}_\beta}
{|\mechanical{\mathbf x}_\alpha-\mechanical{\mathbf x}_\beta|}.
$$

The factor of $1/2$ in $\energy{U}$ accounts for counting each pair twice. Combining the terms gives

$$
\frac12\frac{d^2\mechanical{I}}{dt^2}-2\energy{K}
=\energy{U}+\sum_\alpha\mechanical{\mathbf F}_{\mathrm{ext},\alpha}\cdot\mechanical{\mathbf x}_\alpha.
$$

For an isolated system the external term vanishes. Average over a time interval $\tau$.

$$
\frac{1}{2\tau}\int_0^\tau\frac{d^2\mechanical{I}}{dt^2}\,dt
-\frac{2}{\tau}\int_0^\tau\energy{K}\,dt
=\frac{1}{\tau}\int_0^\tau\energy{U}\,dt.
$$

The first term is $[\dot{\mechanical{I}}(\tau)-\dot{\mechanical{I}}(0)]/(2\tau)$. For a bounded system it vanishes in the long-time limit. The scalar virial theorem is

$$
\boxed{2\langle\energy{K}\rangle+\langle\energy{U}\rangle=0}.
$$

For $N$ equal-mass stars of mass $\mechanical{m}$ in the cluster rest frame, the mean velocity vanishes. With $\mechanical{\sigma}^2=\langle\mechanical{v}^2\rangle=N^{-1}\sum_\alpha\mechanical{v}_\alpha^2$ for the three-dimensional velocity variance,

$$
2\energy{K}=\mechanical{m}\sum_\alpha\mechanical{v}_\alpha^2
=\mechanical{m}N\mechanical{\sigma}^2=\mechanical{M}\mechanical{\sigma}^2.
$$

> [!note]
> The handwritten substitution drops the factor of two on kinetic energy and includes an extra $N$ in the variance equality. The sums on the page give the factors used above.

Approximate the potential energy using a typical separation $\mechanical{R}$ between stars. With $\mechanical{M}=N\mechanical{m}$,

$$
\energy{U}\sim-\frac{G(N\mechanical{m})^2}{2\mechanical{R}},
\qquad
\mechanical{M}\mechanical{\sigma}^2\simeq\frac{G\mechanical{M}^2}{2\mechanical{R}},
\qquad
\boxed{\mechanical{\sigma}^2\sim\frac{G\mechanical{M}}{2\mechanical{R}}}.
$$

In practice use an observable core radius $\mechanical{r}_c$ and a line-of-sight velocity dispersion $\mechanical{\sigma}_r$. For isotropic velocities,

$$
\mechanical{\sigma}^2
=\mechanical{\sigma}_x^2+\mechanical{\sigma}_y^2+\mechanical{\sigma}_z^2
=3\mechanical{\sigma}_r^2,\qquad
\energy{K}=\frac32\mechanical{M}\mechanical{\sigma}_r^2.
$$

Write $\energy{U}=-G\mechanical{M}^2/(2\eta\mechanical{r}_c)$, with a structural parameter $\eta=2.6$ for the Plummer model. The virial theorem gives

$$
3\mechanical{M}\mechanical{\sigma}_r^2=\frac{G\mechanical{M}^2}{2\eta\mechanical{r}_c},
\qquad
\boxed{\mechanical{M}=\frac{6\eta\mechanical{\sigma}_r^2\mechanical{r}_c}{G}}.
$$

##### Galactic units

The lecture emphasizes a convenient unit system for Galactic dynamics. Use one solar mass for mass, one parsec for distance, and $\quantity{1}{km\cdot s^{-1}}$ for velocity. One kilometer per second is approximately one parsec per million years, within about 2%. The exact time unit for this choice is about $\quantity{0.978}{Myr}$.

The numerical value of the gravitational constant in these units is $G\simeq1/233\simeq4.3\times10^{-3}$, with units $\unit{pc\cdot(km\cdot s^{-1})^2\cdot M_{\odot}^{-1}}$.

##### Plummer sphere example

For $\mechanical{\sigma}_r=\quantity{10}{km\cdot s^{-1}}$ and $\mechanical{r}_c=\quantity{1}{pc}$,

$$
\mechanical{M}=\frac{15.6\mechanical{\sigma}_r^2\mechanical{r}_c}{G}
\simeq15.6\times10^2\times1\times233\,\mechanical{M}_{\odot}
\simeq360{,}000\,\mechanical{M}_{\odot}.
$$

For a galaxy cluster, the lecture gives $\mechanical{\sigma}_r\sim\quantity{1000}{km\cdot s^{-1}}$ and $\mechanical{r}_c\sim\quantity{0.5}{Mpc}$.

##### Encounters and relaxation

Treat stellar encounters as gravitational scattering. A strong encounter significantly changes the trajectories when the change in potential energy is at least comparable to the initial kinetic energy. For two equal masses $\mechanical{m}$, the notes estimate the closest-approach scale by

$$
\frac{G\mechanical{m}^2}{\mechanical{r}_s}=\frac12\mechanical{m}\mechanical{v}^2,
\qquad
\mechanical{r}_s=\frac{2G\mechanical{m}}{\mechanical{v}^2}.
$$

This is the strong-encounter radius. For one solar mass and $\mechanical{v}\sim\quantity{30}{km\cdot s^{-1}}$ in the Galaxy, $\mechanical{r}_s\sim\quantity{2}{AU}$. The lecture uses the survival of the Solar System to argue against a past stellar encounter of this strength.

##### Frequency of strong encounters

![[Kyle Kabasares - Intro to Astrophysics - Strong encounter tube.png|**Fig. 74** In time $t_s$, a moving star sweeps a tube of radius $\mechanical{r}_s$ and length $\mechanical{v}t_s$.]]

For stellar number density $n$, the volume that contains one star on average is $1/n$. Equate this to the swept volume.

$$
\pi\mechanical{r}_s^2\mechanical{v}t_s=\frac1n,\qquad
t_s=\frac{1}{n\pi\mechanical{r}_s^2\mechanical{v}}
=\frac{\mechanical{v}^3}{4\pi G^2\mechanical{m}^2n}.
$$

Taking $n=\quantity{10^{-1}}{pc^{-3}}$, one solar mass, and $\mechanical{v}\sim\quantity{30}{km\cdot s^{-1}}$ gives $t_s\sim\quantity{10^9}{Myr}=\quantity{10^{15}}{yr}$, much longer than the age of the universe.

> [!note]
> The handwritten numerical substitution appears to show $300^3$ and $233^2$ in the numerator, with an additional gravitational-constant factor in the denominator. Using the speed on [[#Encounters and relaxation|the section on Encounters and relaxation]] and the Galactic-unit value of $G$ on [[#Galactic units|the section on Galactic units]] gives the stated timescale.

For comparison, the Earth’s orbital speed is $\mechanical{v}_{\mathrm{Earth}}=\sqrt{G\mechanical{M}_{\odot}/\mechanical{r}}$. With $\mechanical{r}=\quantity{1}{AU}\simeq (1/206{,}265)\,\unit{pc}$, this gives about $\quantity{30}{km\cdot s^{-1}}$.

##### Weak encounters

![[Kyle Kabasares - Intro to Astrophysics - Weak encounter geometry.png|**Fig. 75** A moving star of mass $\mechanical{M}$ passes a star of mass $\mechanical{m}$ with impact parameter $\mechanical{b}$. It acquires a small transverse velocity.]]

In the straight-line approximation, $\mechanical{r}(t)=\sqrt{\mechanical{b}^2+\mechanical{v}^2t^2}$. The transverse force is

$$
\mechanical{F}_{\perp}
=\frac{G\mechanical{M}\mechanical{m}}{\mechanical{r}^2}\cos\theta
=\frac{G\mechanical{M}\mechanical{m}\mechanical{b}}
{(\mechanical{b}^2+\mechanical{v}^2t^2)^{3/2}}
=\mechanical{M}\frac{d\mechanical{v}_{\perp}}{dt}.
$$

Integrating over the full encounter,

$$
\mechanical{v}_{\perp}=\frac{1}{\mechanical{M}}\int_{-\infty}^{\infty}\mechanical{F}_{\perp}\,dt
=G\mechanical{m}\mechanical{b}\int_{-\infty}^{\infty}
\frac{dt}{(\mechanical{b}^2+\mechanical{v}^2t^2)^{3/2}}
=\frac{2G\mechanical{m}}{\mechanical{b}\mechanical{v}}.
$$

> [!note]
> The source draws $t=0$ at closest approach. The stated factor of two uses the complete encounter, including the incoming and outgoing halves.

For a small deflection, $\alpha\simeq\mechanical{v}_{\perp}/\mechanical{v}=2G\mechanical{m}/(\mechanical{b}\mechanical{v}^2)$. When $\alpha\ll1$ in radians, $\mechanical{v}_\perp\ll\mechanical{v}$.

The weak-scattering condition is $2G\mechanical{m}/(\mechanical{b}\mechanical{v}^2)\ll1$, or $\mechanical{b}\gg2G\mechanical{m}/\mechanical{v}^2$. Over many encounters the transverse velocity follows a random walk, $\langle\mechanical{v}_{\perp}^2\rangle\propto t$.

![[Kyle Kabasares - Intro to Astrophysics - Weak encounter annular tube.png|**Fig. 76** Encounters between impact parameters $\mechanical{b}$ and $\mechanical{b}+d\mechanical{b}$ lie in an annular tube swept out by the moving star.]]

The annular tube has volume $\mechanical{v}t\,2\pi\mechanical{b}\,d\mechanical{b}$ and contains $2\pi n\mechanical{v}t\,\mechanical{b}\,d\mechanical{b}$ stars on average. Sum the squared kicks over impact parameters.

$$
\begin{aligned}
\langle\mechanical{v}_{\perp}^2(t)\rangle
&=\int_{\mechanical{b}_{\min}}^{\mechanical{b}_{\max}}
\left(\frac{2G\mechanical{m}}{\mechanical{b}\mechanical{v}}\right)^2
2\pi n\mechanical{v}t\,\mechanical{b}\,d\mechanical{b}\\
&=\frac{8\pi G^2\mechanical{m}^2nt}{\mechanical{v}}
\ln\left(\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}\right).
\end{aligned}
$$

The second line retains the density $n$ from the integrand. The source drops it in that line and restores it in the relaxation-time equation.

The relaxation time is the time at which $\langle\mechanical{v}_{\perp}^2\rangle^{1/2}=\mechanical{v}$. At $t=t_{\mathrm{relax}}$,

$$
\mechanical{v}^2
=\frac{8\pi G^2\mechanical{m}^2n t_{\mathrm{relax}}}{\mechanical{v}}
\ln\left(\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}\right).
$$

Solving for the relaxation time gives

$$
\boxed{t_r=\frac{\mechanical{v}^3}{8\pi G^2\mechanical{m}^2n\ln\Lambda}},
\qquad \Lambda=\frac{\mechanical{b}_{\max}}{\mechanical{b}_{\min}}.
$$

The lecture uses the strong-encounter radius for $\mechanical{b}_{\min}$ and the system size $\mechanical{R}$ for $\mechanical{b}_{\max}$. Compared with the time $t_s$ for a strong encounter,

$$
t_r=\frac{t_s}{2\ln\Lambda}.
$$

For a globular cluster example with $\mechanical{r}_s\sim\quantity{2}{AU}$ and $\mechanical{R}=\quantity{1}{pc}$, the notes estimate $\ln\Lambda$ from $\ln[1/(2\times10^{-5})]=\ln(5\times10^4)$. Relaxation is too slow to change the Galactic disk significantly in the solar neighborhood.

For an idealized spherical system with $N$ stars of mass $\mechanical{m}$,

$$
\energy{K}=\tfrac12 N\mechanical{m}\mechanical{v}^2,\qquad
\energy{U}\sim-\frac{G(N\mechanical{m})^2}{\mechanical{R}}.
$$

For a virialized sphere, $\mechanical{R}\sim G\mechanical{M}/\mechanical{v}^2$. With $\mechanical{r}_s=2G\mechanical{m}/\mechanical{v}^2$ and $\mechanical{M}=N\mechanical{m}$,

$$
\Lambda=\frac{\mechanical{R}}{\mechanical{r}_s}\sim\frac N2,\qquad
t_c=t_{\mathrm{cross}}=\frac{\mechanical{R}}{\mechanical{v}}.
$$

Using $n=N/(4\pi\mechanical{R}^3/3)$, the ratio becomes

$$
\frac{t_r}{t_c}
=\frac{\mechanical{v}^3}{8\pi G^2\mechanical{m}^2n\ln(N/2)}
\frac{\mechanical{v}}{\mechanical{R}}
\sim\frac{N}{6\ln(N/2)}.
$$

The source gives the following rounded examples.

| Object | $N$ | $t_r/t_c$ | Speed | Radius | Crossing time | Relaxation time |
| --- | --- | --- | --- | --- | --- | --- |
| Open cluster | $10^3$ | 26 | $\quantity{1}{km\cdot s^{-1}}$ | $\quantity{1}{pc}$ | $\quantity{1}{Myr}$ | $\quantity{26}{Myr}$ |
| Globular cluster | $10^6$ | $10^4$ | $\quantity{5}{km\cdot s^{-1}}$ | $\quantity{1}{pc}$ | $\quantity{0.2}{Myr}$ | $\quantity{2}{Gyr}$ |
| Elliptical galaxy | $10^{11}$ | $10^9$ | $\quantity{200}{km\cdot s^{-1}}$ | $\quantity{10}{kpc}$ | $\quantity{50}{Myr}$ | $\quantity{5\times10^{16}}{yr}$ |

##### Dynamical relaxation

The lecture uses a Boltzmann factor $f(\energy{E})\propto e^{-\energy{E}/(k\thermal{T})}$, with $\energy{E}=\tfrac12\mechanical{m}\mechanical{v}^2+\mechanical{m}\energy{\Phi}(\mechanical{\mathbf x})$. At fixed position the speed distribution has the form

$$
f(\mechanical{v})\propto\mechanical{v}^2e^{-\mechanical{m}\mechanical{v}^2/(2k\thermal{T})}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Speed distribution and escape tail.png|**Fig. 77** The high-speed tail beyond the escape speed is shaded. Stars in that tail can escape the cluster.]]

The mean kinetic energy needed to escape is

$$
\left\langle\tfrac12\mechanical{m}\mechanical{v}_{\mathrm{esc}}^2\right\rangle
=-\frac1N\sum_\alpha\mechanical{m}_\alpha\energy{\Phi}(\mechanical{\mathbf x}_\alpha).
$$

The mean potential energy per star is $\langle\energy{U}\rangle=(2N)^{-1}\sum_\alpha\mechanical{m}_\alpha\energy{\Phi}(\mechanical{\mathbf x}_\alpha)$ because each pair is counted twice. Thus the mean escape kinetic energy is $-2\langle\energy{U}\rangle$. For a virialized system, $2\langle\energy{K}\rangle=-\langle\energy{U}\rangle$ per star, so

$$
\left\langle\tfrac12\mechanical{m}\mechanical{v}_{\mathrm{esc}}^2\right\rangle
=4\langle\energy{K}\rangle,\qquad
\langle\energy{K}\rangle=\tfrac32 k\thermal{T}.
$$

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{\mathrm{g}}$ | Solar mass | Mass of the Sun. |
| $k$ | $\unit{erg\cdot K^{-1}}$ | Boltzmann constant | Relates temperature to energy. |
| $\sigma$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}$ | Stefan–Boltzmann constant | Relates blackbody flux to the fourth power of temperature. |
| $\mechanical{r}$ | $\unit{cm}$ | Emitter radius | Radius of the spherical emitter. |
| $m$ | 1 | Apparent magnitude | Logarithmic measure of observed flux relative to a zero point. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\mechanical{x}$ | $\unit{cm}$ | Path length | Distance traveled through the dust. |
| $\tau$ | 1 | Optical depth | Attenuation exponent along the path. |
| $\mechanical{r}$ | — | Profile radius | Radial coordinate in the surface brightness sketch. |
| $\theta$ | $\unit{rad}$ | Position angle | Orientation on the sky measured from north toward east. |
| $\theta$ | $\unit{rad}$ | Angular resolution | Minimum angular separation in the Rayleigh criterion. |
| $\alpha$ | $\unit{h}$ | Right ascension | Celestial coordinate measured eastward along the celestial equator. |
| $\alpha$ | $\unit{arcsec}$ | Parallax angle | Angular shift due to a one-AU observing baseline. |
| $\mechanical{a}$ | $\unit{cm}$ | Binary separation | Distance between the two stars in a circular orbit. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\mechanical{R}$ | $\unit{km}$ | Stellar radius | Radius in the main-sequence scaling relation. |
| $e$ | 1 | Orbital eccentricity | Deviation of the orbit from a circle. |
| $\mechanical{m}$ | $\unit{g}$ | Planet mass | Mass of the orbiting planet. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\sigma$ | 1 | Absolute-magnitude dispersion | Standard deviation of the Gaussian magnitude distribution. |
| $t_0$ | $\unit{yr}$ | Star formation decay time | E-folding time of the exponential star formation history. |
| $\mechanical{\sigma}$ | $\unit{km\cdot s^{-1}}$ | Velocity dispersion | Standard deviation of velocities along the chosen direction. |
| $\mechanical{\sigma}_z$ | $\unit{km\cdot s^{-1}}$ | Vertical velocity dispersion | Spread of stellar velocities perpendicular to the disk. |
| $\mechanical{M}(\mechanical{R})$ | $\unit{M_{\odot}}$ | Enclosed mass | Mass inside radius $\mechanical{R}$. |
| $\mechanical{v}_0$ | $\unit{km\cdot s^{-1}}$ | Solar circular speed | Circular rotation speed at the Sun’s Galactocentric radius. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $\energy{\Phi}$ | $\unit{erg\cdot g^{-1}}$ | Gravitational potential | Potential energy per unit test mass. |
| $\mechanical{\rho}$ | $\unit{g\cdot cm^{-3}}$ | Mass density | Mass per unit volume in the continuous gravitational model. |
| $\mechanical{a}_{\mathrm p}$ | $\unit{pc}$ | Plummer scale radius | Length parameter of the Plummer potential. |
| $\mechanical{r}_c$ | $\unit{pc}$ | Plummer core radius | Projected radius at half the central surface density. |
| $\mechanical{r}_0$ | $\unit{pc}$ | Potential reference radius | Radius at which the logarithmic potential is set to zero. |
| $\mechanical{\rho}_{\mathrm{NFW}}$ | $\unit{g\cdot cm^{-3}}$ | Halo density scale | Normalization of the Navarro–Frenk–White profile. |
| $\mechanical{a}_{\mathrm N}$ | $\unit{kpc}$ | Halo scale radius | Radius parameter of the Navarro–Frenk–White profile. |
| $\energy{E},\,\energy{E}_{\mathrm k},\,\energy{E}_{\mathrm p}$ | $\unit{erg}$ | Total, kinetic, and potential energies | Energies of the particle in the static gravitational potential. |
| $\mechanical{v}_{\mathrm{escape}}$ | $\unit{cm\cdot s^{-1}}$ | Escape speed | Speed that gives zero total energy when the potential vanishes at infinity. |
| $\mechanical{\mathbf L}$ | $\unit{g\cdot cm^2\cdot s^{-1}}$ | Angular momentum | Cross product of position and momentum. |
| $\mechanical{\mathbf F}_{\mathrm{ext},\alpha}$ | $\unit{dyn}$ | External force | Force on particle $\alpha$ from outside the self-gravitating system. |
| $\mechanical{I}$ | $\unit{g\cdot cm^2}$ | Scalar moment of inertia | Sum of particle masses times squared distances from the origin. |
| $\energy{K},\,\energy{U}$ | $\unit{erg}$ | System kinetic and potential energies | Total kinetic energy and gravitational pair potential energy. |
| $\mechanical{\sigma}_r$ | $\unit{km\cdot s^{-1}}$ | Line-of-sight velocity dispersion | One measured component of the cluster velocity dispersion. |
| $\eta$ | 1 | Cluster structure parameter | Relates the core radius to the gravitational potential energy in the virial estimate. |
| $\mechanical{r}_s$ | $\unit{AU}$ | Strong-encounter radius | Separation where the gravitational interaction energy is comparable to the initial kinetic energy. |
| $t_s$ | $\unit{yr}$ | Time between strong encounters | Time for the moving star to sweep a volume containing one stellar encounter on average. |
| $\mechanical{b}$ | $\unit{pc}$ | Impact parameter | Closest distance along the unperturbed straight-line path. |
| $\mechanical{v}_\perp$ | $\unit{km\cdot s^{-1}}$ | Transverse velocity change | Velocity acquired perpendicular to the incoming path. |
| $\mechanical{F}_{\perp}$ | $\unit{dyn}$ | Transverse gravitational force | Force component perpendicular to the incoming path. |
| $\alpha$ | $\unit{rad}$ | Scattering angle | Small change in the direction of the moving star. |
| $t_{\mathrm{relax}}$ | $\unit{yr}$ | Relaxation time | Time for accumulated weak encounters to change the velocity by order its initial magnitude. |
| $\Lambda$ | 1 | Impact-parameter ratio | Largest divided by smallest impact parameter in the weak-encounter estimate. |
| $p$ | 1 | Metal yield | Newly synthesized metal mass returned to the gas per unit mass locked into stars and remnants. |
