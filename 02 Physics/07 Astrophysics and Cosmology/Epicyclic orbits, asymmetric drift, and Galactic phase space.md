---
title: "Epicyclic orbits, asymmetric drift, and Galactic phase space"
---

> [!TLDR]
> Derive the epicycle model and use collisionless phase-space moments to connect stellar orbits with observed Galactic dynamics.

## Worked lecture material

The mean escape kinetic energy is $6k\thermal{T}$, giving

$$
\langle\mechanical{v}_{\mathrm{esc}}^2\rangle^{1/2}
=\sqrt{\frac{12k\thermal{T}}{\mechanical{m}}}.
$$

The fraction of stars above this speed in the model is

$$
\frac{\displaystyle\int_{\sqrt{12k\thermal{T}/\mechanical{m}}}^{\infty}
e^{-\mechanical{m}\mechanical{v}^2/(2k\thermal{T})}\mechanical{v}^2\,d\mechanical{v}}
{\displaystyle\int_{0}^{\infty}
e^{-\mechanical{m}\mechanical{v}^2/(2k\thermal{T})}\mechanical{v}^2\,d\mechanical{v}}
\simeq0.0074\simeq\frac{1}{136}.
$$

A gravitationally bound system has an effective negative specific heat. Removing positive energy raises its temperature after it returns to equilibrium. Mass segregation is observed in both globular and open clusters.

##### Stellar orbits in the Milky Way disk

The lecture asks why $\mechanical{\sigma}_x>\mechanical{\sigma}_y$ in local coordinates $(\mechanical{x},\mechanical{y},\mechanical{z})$.

###### Epicycle model

Stars undergo a small perturbation about a guiding circular orbit.

![[Kyle Kabasares - Intro to Astrophysics - Epicycle on a circular orbit.png|**Fig. 78** The small epicycle is drawn around a guiding point that moves on a larger circular orbit.]]

Use cylindrical coordinates $(\mechanical{R},\mechanical{z},\phi)$ and an axisymmetric potential $\energy{\Phi}(\mechanical{R},\mechanical{z})$. The angular momentum per unit mass about the symmetry axis, $\mechanical{L}_z=\mechanical{R}^2\dot\phi$, is constant.

![[Kyle Kabasares - Intro to Astrophysics - Effective potential and guiding radius.png|**Fig. 79** The effective radial potential has a minimum at the guiding radius $\mechanical{R}_g$. The gravitational potential is shown separately.]]

For planar motion, the Lagrangian and its radial equation are

$$
\mathcal L=\energy{T}-\energy{U}
=\tfrac12\mechanical{m}(\dot{\mechanical{R}}^2+\mechanical{R}^2\dot\phi^2)-\mechanical{m}\energy{\Phi},
\qquad
\frac{d}{dt}\frac{\partial\mathcal L}{\partial\dot{\mechanical{R}}}
-\frac{\partial\mathcal L}{\partial\mechanical{R}}=0.
$$

Define

$$
\energy{\Phi}_{\mathrm{eff}}=\energy{\Phi}+\frac{\mechanical{L}_z^2}{2\mechanical{R}^2},
\qquad
\ddot{\mechanical{R}}=-\frac{\partial\energy{\Phi}_{\mathrm{eff}}}{\partial\mechanical{R}}.
$$

The handwritten definition has a superscript $2$ on $\Phi_{\mathrm{eff}}$. The radial equation uses the effective potential itself. Multiply by $\dot{\mechanical{R}}$ and integrate in time to get

$$
\int\dot{\mechanical{R}}\ddot{\mechanical{R}}\,dt
=-\int\frac{d\mechanical{R}}{dt}\frac{d\energy{\Phi}_{\mathrm{eff}}}{d\mechanical{R}}\,dt,
\qquad
\tfrac12\dot{\mechanical{R}}^2+\energy{\Phi}_{\mathrm{eff}}=\mathrm{constant}.
$$

Define $\mechanical{\Omega}$ as the angular speed of a circular orbit at $\mechanical{R}=\mechanical{R}_g$.

The actual angular speed of the star is $\dot\phi$. Let $\mechanical{R}(t)=\mechanical{R}_g+\mechanical{x}(t)$. Expand the radial force near the guiding radius.

$$
\frac{\partial\energy{\Phi}_{\mathrm{eff}}}{\partial\mechanical{R}}
\simeq\left.\frac{\partial^2\energy{\Phi}_{\mathrm{eff}}}{\partial\mechanical{R}^2}\right|_{\mechanical{R}_g}
(\mechanical{R}-\mechanical{R}_g),\qquad
\ddot{\mechanical{x}}=-\mechanical{\kappa}^2\mechanical{x}.
$$

The epicyclic angular frequency $\mechanical{\kappa}$ follows from

$$
\mechanical{\kappa}^2
=\left.\left[
\frac{\partial}{\partial\mechanical{R}}\left(\frac{\partial\energy{\Phi}}{\partial\mechanical{R}}\right)
+\frac{\partial^2}{\partial\mechanical{R}^2}\left(\frac{\mechanical{L}_z^2}{2\mechanical{R}^2}\right)
\right]\right|_{\mechanical{R}_g}.
$$

For circular orbits, $\dot{\mechanical{R}}=\ddot{\mechanical{R}}=0$ and $\partial\energy{\Phi}/\partial\mechanical{R}=\mechanical{R}\mechanical{\Omega}^2$. The handwritten intermediate line gives $\mechanical{R}^2\mechanical{\Omega}$, which is the specific angular momentum. Using the circular-orbit force and $\mechanical{L}_z=\mechanical{R}_g^2\mechanical{\Omega}$ gives, at the guiding radius,

$$
\begin{aligned}
\mechanical{\kappa}^2(\mechanical{R})
&=\frac{\partial(\mechanical{R}\mechanical{\Omega}^2)}{\partial\mechanical{R}}
+3\mechanical{\Omega}^2\\
&=4\mechanical{\Omega}^2+2\mechanical{\Omega}\mechanical{R}
\frac{\partial\mechanical{\Omega}}{\partial\mechanical{R}}.
\end{aligned}
$$

Factor the expression for the epicyclic frequency.

$$
\mechanical{\kappa}^2
=4\mechanical{\Omega}\left(\mechanical{\Omega}+
\frac{\mechanical{R}}2\frac{\partial\mechanical{\Omega}}{\partial\mechanical{R}}\right)
=\boxed{-4B\mechanical{\Omega}}.
$$

The epicycle is retrograde relative to the guiding orbit. Conservation of angular momentum gives

$$
\dot\phi
=\frac{\mechanical{L}_z}{\mechanical{R}^2}
=\frac{\mechanical{\Omega}(\mechanical{R}_g)}{(1+\mechanical{x}/\mechanical{R}_g)^2}
\simeq\mechanical{\Omega}(\mechanical{R}_g)\left(1-\frac{2\mechanical{x}}{\mechanical{R}_g}\right).
$$

The radial oscillation is $\boxed{\mechanical{x}=\mechanical{X}\cos(\mechanical{\kappa}t+\psi)}$. Substitute it into the angular speed and integrate.

$$
\begin{aligned}
\dot\phi
&\simeq\mechanical{\Omega}(\mechanical{R}_g)
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)\mechanical{X}}{\mechanical{R}_g}
\cos(\mechanical{\kappa}t+\psi),\\
\phi(t)&\simeq\phi_0+\mechanical{\Omega}(\mechanical{R}_g)t
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)\mechanical{X}}{\mechanical{R}_g\mechanical{\kappa}}
\sin(\mechanical{\kappa}t+\psi).
\end{aligned}
$$

Here $\phi_0$ is the integration constant. The handwritten line labels it $\phi(0)$, which requires subtracting $\sin\psi$ from the sine term for a general initial phase. The lecture gives $2\pi/\mechanical{\kappa}\simeq\quantity{170}{Myr}$ at the solar radius $\mechanical{R}_0$.

##### Epicycle geometry

![[Kyle Kabasares - Intro to Astrophysics - Radial and tangential epicycle axes.png|**Fig. 80** The epicycle in local coordinates, with $\mechanical{x}$ directed radially outward from the Galactic center and $\mechanical{y}$ along the guiding orbit.]]

The lecture recalls $\mechanical{\kappa}^2=-4B\mechanical{\Omega}$, where $\mechanical{\Omega}$ is the angular speed of a circular orbit. The radial perturbation is $\mechanical{x}(t)=\mechanical{X}\cos(\mechanical{\kappa}t+\psi)$, with amplitude $\mechanical{X}$. The star’s actual angular speed is

$$
\dot\phi=\mechanical{\Omega}(\mechanical{R}_g)
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g}
\mechanical{X}\cos(\mechanical{\kappa}t+\psi),
$$

to first order. Integrating gives

$$
\phi(t)=\phi_0+\mechanical{\Omega}(\mechanical{R}_g)t
-\frac{2\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g\mechanical{\kappa}}
\mechanical{X}\sin(\mechanical{\kappa}t+\psi).
$$

Multiply the oscillating part of $\phi$ by $\mechanical{R}_g$ to obtain the tangential displacement $\mechanical{y}$. The ellipse has semiaxes $\mechanical{X}$ and $2\mechanical{\Omega}\mechanical{X}/\mechanical{\kappa}$.

Near the Sun, $\mechanical{\kappa}>\mechanical{\Omega}$ and $2\mechanical{\Omega}/\mechanical{\kappa}>1$, so the epicycle is longer in $\mechanical{y}$ than in $\mechanical{x}$. The epicyclic period is about $\quantity{170}{Myr}$, and the guiding circular period is about $\quantity{220}{Myr}$.

Consider a star with guiding radius $\mechanical{R}_g>\mechanical{R}_0$, observed at the solar radius. Its tangential speed relative to the local standard of rest is

$$
\begin{aligned}
\mechanical{v}_y
&=\mechanical{R}_0\dot\phi-\mechanical{R}_0\mechanical{\Omega}(\mechanical{R}_0)\\
&=\mechanical{R}_0\left[\mechanical{\Omega}(\mechanical{R}_g)
-\frac{2\mechanical{x}\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g}
-\mechanical{\Omega}(\mechanical{R}_0)\right]\\
&\simeq\mechanical{R}_0\left.\frac{d\mechanical{\Omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}
(\mechanical{R}_g-\mechanical{R}_0)
-\frac{2\mechanical{x}\mechanical{R}_0\mechanical{\Omega}(\mechanical{R}_g)}{\mechanical{R}_g}.
\end{aligned}
$$

At the crossing, $\mechanical{x}=\mechanical{R}_0-\mechanical{R}_g$, so $\mechanical{R}_0/\mechanical{R}_g=1+O(\mechanical{x}/\mechanical{R}_g)$.

Keeping first-order terms gives

$$
\begin{aligned}
\mechanical{v}_y&\simeq-\mechanical{R}_0\mechanical{x}
\left.\frac{d\mechanical{\Omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}
-2\mechanical{x}\mechanical{\Omega}(\mechanical{R}_0)\\
&=-2\mechanical{x}\left[\mechanical{\Omega}(\mechanical{R}_0)
+\frac{\mechanical{R}_0}{2}\left.\frac{d\mechanical{\Omega}}{d\mechanical{R}}\right|_{\mechanical{R}_0}\right]\\
&=2B\mechanical{x}=-\frac{\mechanical{\kappa}^2}{2\mechanical{\Omega}}\mechanical{x}.
\end{aligned}
$$

The radial and tangential oscillations are coupled. The notes give

$$
\langle\mechanical{v}_y^2\rangle=
\left(\frac{\mechanical{\kappa}^2}{2\mechanical{\Omega}}\right)^2
\langle\mechanical{x}^2\rangle.
$$

The displacement from the guiding center is typically unknown. From the radial oscillation, $\mechanical{v}_x=-\mechanical{X}\mechanical{\kappa}\sin(\mechanical{\kappa}t+\psi)$. Averaging the squared velocities over phase gives

$$
\langle\mechanical{v}_y^2\rangle=\frac{\mechanical{\kappa}^2}{4\mechanical{\Omega}^2}
\langle\mechanical{v}_x^2\rangle,\qquad
\mechanical{\sigma}_y^2=\frac{\mechanical{\kappa}^2}{4\mechanical{\Omega}^2}\mechanical{\sigma}_x^2.
$$

> [!note]
> The source’s last intermediate lines have a sign on the $B$ term inconsistent with $B$ on [[Milky Way populations, clusters, and rotation#Local Galactic rotation|the section on Local Galactic rotation]], omit the minus sign from differentiating the radial cosine, and repeat the $x$ component on both sides of the squared-velocity relation. The final dispersion ratio agrees with the phase average above.

Velocity dispersions describe the spread of random velocities. In terms of the Oort constants,

$$
\mechanical{\sigma}_y^2=\frac{-B}{A-B}\mechanical{\sigma}_x^2.
$$

The lecture refers to the Sparke and Gallagher homework for this result.

##### Asymmetric drift

The collisionless Boltzmann equation and the Jeans equation can be used to derive asymmetric drift. For a rotation-dominated system, $\mechanical{M}\sim\mechanical{R}\mechanical{v}_{\mathrm{circ}}^2/G$. For a dispersion-dominated system, $\mechanical{M}\sim\mechanical{R}\mechanical{\sigma}^2/G$. The notes illustrate the combined scaling as

$$
\mechanical{M}\sim\frac{\mechanical{R}\langle\mechanical{v}_{\mathrm{rot}}\rangle^2}{G}
+\frac{\mechanical{R}\mechanical{\sigma}^2}{G}.
$$

For the Milky Way disk, the lecture gives $\mechanical{v}_{\mathrm{rot}}\sim\quantity{220}{km\cdot s^{-1}}$ and $\mechanical{\sigma}\sim\quantity{20\text{–}30}{km\cdot s^{-1}}$.

![[Kyle Kabasares - Intro to Astrophysics - Rotation curve with an inner peak.png|**Fig. 81** A schematic disk rotation curve rises to an inner peak and then levels off.]]

##### Resonances

![[Kyle Kabasares - Intro to Astrophysics - Bar and spiral pattern.png|**Fig. 82** A central bar and surrounding curved structure in a galactic disk.]]

Let $\mechanical{\Omega}_{\mathrm b}$ be the bar pattern speed and $\mechanical{\Omega}(\mechanical{R})$ the circular orbital speed in angular units. A star receives periodic perturbations as the bar passes. For azimuthal harmonic $m$, a Lindblad resonance occurs when

$$
m(\mechanical{\Omega}-\mechanical{\Omega}_{\mathrm b})=\pm\mechanical{\kappa}.
$$

At the inner Lindblad resonance, $\mechanical{\Omega}-\mechanical{\Omega}_{\mathrm b}=\mechanical{\kappa}/m$.

At the outer Lindblad resonance, $\mechanical{\Omega}-\mechanical{\Omega}_{\mathrm b}=-\mechanical{\kappa}/m$. At corotation, $\mechanical{\Omega}=\mechanical{\Omega}_{\mathrm b}$.

##### Collisionless Boltzmann equation

Treat stars as flowing through phase space with three position and three velocity coordinates. The distribution function is

$$
f=f(\mechanical{x},\mechanical{y},\mechanical{z},
\mechanical{v}_x,\mechanical{v}_y,\mechanical{v}_z,t)
=f(\mechanical{\mathbf x},\mechanical{\mathbf v},t).
$$

Integrate over velocities to get the stellar number density.

$$
n(\mechanical{\mathbf x},t)
=\iiint f(\mechanical{\mathbf x},\mechanical{\mathbf v},t)
\,d\mechanical{v}_x\,d\mechanical{v}_y\,d\mechanical{v}_z.
$$

The mean velocity is

$$
\langle\mechanical{\mathbf v}\rangle(\mechanical{\mathbf x},t)
=\frac{\int f(\mechanical{\mathbf x},\mechanical{\mathbf v},t)\mechanical{\mathbf v}\,
d^3\mechanical{\mathbf v}}{n(\mechanical{\mathbf x},t)},
\qquad n\langle\mechanical{\mathbf v}\rangle=\iiint f\mechanical{\mathbf v}\,d^3\mechanical{\mathbf v}.
$$

The derivation assumes a time-independent potential and conserves the number of stars. Strong encounters are negligible. The stars respond to the large-scale potential $\energy{\Phi}$, so the system is collisionless.

##### Phase-space flow

Consider a phase-space volume element

$$
d\mathcal V=d\mechanical{x}\,d\mechanical{y}\,d\mechanical{z}\,
d\mechanical{v}_x\,d\mechanical{v}_y\,d\mechanical{v}_z.
$$

![[Kyle Kabasares - Intro to Astrophysics - Phase space flow through opposite faces.png|**Fig. 83** Inflow through the face at $\mechanical{x}$ and outflow through the face at $\mechanical{x}+d\mechanical{x}$.]]

At the $\mechanical{x}$ face, the inflow rate is the face area times the flow speed times the phase-space density. It is $f\mechanical{v}_x\,d\mechanical{y}\,d\mechanical{z}\,d\mechanical{v}_x\,d\mechanical{v}_y\,d\mechanical{v}_z$. On the opposite face,

$$
(f\mechanical{v}_x)|_{\mechanical{x}+d\mechanical{x}}
\simeq f\mechanical{v}_x+\frac{\partial(f\mechanical{v}_x)}{\partial\mechanical{x}}\,d\mechanical{x}.
$$

The net inflow through the two $\mechanical{x}$ faces is $-\partial(f\mechanical{v}_x)/\partial\mechanical{x}$ times $d\mathcal V$.

The velocity coordinate $\mechanical{v}_x$ is independent of the spatial coordinate $\mechanical{x}$ in phase space, so the net flow through the $\mechanical{x}$ faces is

$$
-\frac{\partial(f\mechanical{v}_x)}{\partial\mechanical{x}}\,d\mathcal V
=-\mechanical{v}_x\frac{\partial f}{\partial\mechanical{x}}\,d\mathcal V.
$$

Now use the faces at $\mechanical{v}_x$ and $\mechanical{v}_x+d\mechanical{v}_x$. The flow speed in the velocity coordinate is $d\mechanical{v}_x/dt=-\partial\energy{\Phi}/\partial\mechanical{x}$. Multiplying by the face area and phase-space density gives the inflow rate

$$
f\frac{d\mechanical{v}_x}{dt}\,
d\mechanical{x}\,d\mechanical{y}\,d\mechanical{z}\,d\mechanical{v}_y\,d\mechanical{v}_z.
$$

At the opposite face the corresponding factor is

$$
\left[f\frac{d\mechanical{v}_x}{dt}\right]_{\mechanical{v}_x+d\mechanical{v}_x}
\simeq
-f\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
-\frac{\partial}{\partial\mechanical{v}_x}
\left(f\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\right)d\mechanical{v}_x.
$$

Subtract the two face flows to get the net inflow.

Because the potential depends on position, the net flow through the $\mechanical{v}_x$ faces is

$$
\frac{\partial}{\partial\mechanical{v}_x}
\left(f\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\right)d\mathcal V
=\frac{\partial f}{\partial\mechanical{v}_x}
\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\,d\mathcal V.
$$

The rate of change inside the phase-space volume is the sum of the net flows through all opposite pairs of faces. The two pairs for $\mechanical{x}$ and $\mechanical{v}_x$ give

$$
\frac{\partial f}{\partial t}\,d\mathcal V
=\left[-\mechanical{v}_x\frac{\partial f}{\partial\mechanical{x}}
+\frac{\partial f}{\partial\mechanical{v}_x}
\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}\right]d\mathcal V
$$

when the other components are suppressed. The source’s next line repeats $\partial f/\partial t$ in the first term on the right. The preceding line gives the spatial derivative used here.

Adding all directions gives the collisionless Boltzmann equation, a continuity equation in phase space.

$$
\boxed{\frac{\partial f}{\partial t}+\mechanical{\mathbf v}\cdot\nabla_{\mathbf x} f
-\nabla_{\mathbf x}\energy{\Phi}\cdot\nabla_{\mathbf v} f=0}.
$$

![[Kyle Kabasares - Intro to Astrophysics - Stellar trajectory through phase space.png|**Fig. 84** A star follows a trajectory through successive phase-space volume elements.]]

Along an allowed stellar trajectory, the chain rule gives the total derivative

$$
\frac{Df}{Dt}
=\frac{\partial f}{\partial t}
+\mechanical{\mathbf v}\cdot\nabla_{\mathbf x}f
-\nabla_{\mathbf x}\energy{\Phi}\cdot\nabla_{\mathbf v}f
=0.
$$

For the $\mechanical{x}$ and $\mechanical{v}_x$ pair, the two chain-rule terms are $(\partial f/\partial\mechanical{x})(d\mechanical{x}/dt)$ and $(\partial f/\partial\mechanical{v}_x)(d\mechanical{v}_x/dt)$. The other pairs work the same way. The phase-space density is constant along the path.

![[Kyle Kabasares - Intro to Astrophysics - Star orbit in cluster outskirts.png|**Fig. 85** A stellar orbit extends into the outskirts of a globular cluster.]]

For a one-dimensional example, integrate the collisionless Boltzmann equation over $\mechanical{v}_x$.

$$
\int\frac{\partial f}{\partial t}\,d\mechanical{v}_x
+\int\mechanical{v}_x\frac{\partial f}{\partial\mechanical{x}}\,d\mechanical{v}_x
-\int\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\frac{\partial f}{\partial\mechanical{v}_x}\,d\mechanical{v}_x=0.
$$

##### Velocity moments of the collisionless Boltzmann equation

In the one-dimensional notation, $n=\int_{-\infty}^{\infty} f\,d\mechanical{v}$ and $\langle\mechanical{v}\rangle=(\int f\mechanical{v}\,d\mechanical{v})/n$. Integration over velocity gives

$$
\frac{\partial n}{\partial t}+\frac{\partial(n\langle\mechanical{v}\rangle)}{\partial\mechanical{x}}
-\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\left[f\right]_{-\infty}^{\infty}=0.
$$

The boundary term vanishes because $f\to0$ at large speeds. The physical-space continuity equation is

$$
\boxed{\frac{\partial n}{\partial t}
+\frac{\partial(n\langle\mechanical{v}\rangle)}{\partial\mechanical{x}}=0}.
$$

For the next moment, multiply the collisionless Boltzmann equation by $\mechanical{v}$ and integrate.

$$
\int\mechanical{v}\frac{\partial f}{\partial t}\,d\mechanical{v}
+\int\mechanical{v}^2\frac{\partial f}{\partial\mechanical{x}}\,d\mechanical{v}
-\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\int\mechanical{v}\frac{\partial f}{\partial\mechanical{v}}\,d\mechanical{v}=0.
$$

The first two integrals are $\partial(n\langle\mechanical{v}\rangle)/\partial t$ and $\partial(n\langle\mechanical{v}^2\rangle)/\partial\mechanical{x}$. The last integral can be evaluated by integration by parts.

Assume $f\mechanical{v}\to0$ at both limits. Integration by parts gives

$$
\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\int_{-\infty}^{\infty}\mechanical{v}\frac{\partial f}{\partial\mechanical{v}}\,d\mechanical{v}
=\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
\left([f\mechanical{v}]_{-\infty}^{\infty}-\int_{-\infty}^{\infty}f\,d\mechanical{v}\right)
=-n\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}.
$$

The moment equation is

$$
\frac{\partial(n\langle\mechanical{v}\rangle)}{\partial t}
+\frac{\partial(n\langle\mechanical{v}^2\rangle)}{\partial\mechanical{x}}
+n\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}=0.
$$

Substitute $\langle\mechanical{v}^2\rangle=\mechanical{\sigma}^2+\langle\mechanical{v}\rangle^2$ and apply the product rule. The terms $\langle\mechanical{v}\rangle\,\partial n/\partial t$ and $\langle\mechanical{v}\rangle\,\partial(n\langle\mechanical{v}\rangle)/\partial\mechanical{x}$ cancel by the continuity equation. Divide by $n$ to obtain the Jeans equation.

$$
\boxed{\frac{\partial\langle\mechanical{v}\rangle}{\partial t}
+\langle\mechanical{v}\rangle\frac{\partial\langle\mechanical{v}\rangle}{\partial\mechanical{x}}
=-\frac{\partial\energy{\Phi}}{\partial\mechanical{x}}
-\frac{1}{n}\frac{\partial(n\mechanical{\sigma}^2)}{\partial\mechanical{x}}}.
$$

The Jeans equation is used to model stellar systems.

##### Mass density in the Galactic disk

![[Kyle Kabasares - Intro to Astrophysics - Solar location in the Galactic disk.png|**Fig. 86** A side view of the Milky Way disk and bulge with Earth’s location marked. The calculation uses stellar motion perpendicular to the disk.]]

For vertical equilibrium the Jeans equation gives

$$
\frac{\partial(n(\mechanical{z})\mechanical{\sigma}_z^2)}{\partial\mechanical{z}}
=-n(\mechanical{z})\frac{\partial\energy{\Phi}}{\partial\mechanical{z}}.
$$

Connect the potential to the total mass density with Poisson’s equation in cylindrical symmetry.

$$
4\pi G\mechanical{\rho}
=\frac{\partial^2\energy{\Phi}}{\partial\mechanical{z}^2}
+\frac1{\mechanical{R}}\frac{\partial}{\partial\mechanical{R}}
\left(\mechanical{R}\frac{\partial\energy{\Phi}}{\partial\mechanical{R}}\right),
\qquad
\frac{\partial\energy{\Phi}}{\partial\mechanical{R}}=\frac{\mechanical{v}_c^2}{\mechanical{R}}.
$$

For a nearly flat rotation curve, the radial derivative of $\mechanical{v}_c^2$ is nearly zero. Thus

$$
4\pi G\mechanical{\rho}(\mechanical{z})
\simeq-\frac{\partial}{\partial\mechanical{z}}
\left[\frac1n\frac{\partial(n(\mechanical{z})\mechanical{\sigma}_z^2)}{\partial\mechanical{z}}\right].
$$

Integrate over height to find the surface mass density $\mechanical{\Sigma}(<\mechanical{z})=\int_{-\mechanical{z}}^{+\mechanical{z}}\mechanical{\rho}(\mechanical{z}')\,d\mechanical{z}'$.

## Source

Kyle Kabasares, *Intro to Astrophysics (Physics 240A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| — | $\unit{\mathrm{rad}}$ | Plane angle | Angle measured in degrees, arcminutes, arcseconds, or radians. |
| — | $\unit{\mathrm{sr}}$ | Solid angle | Angular extent measured in steradians or square degrees. |
| $k$ | $\unit{erg\cdot K^{-1}}$ | Boltzmann constant | Relates temperature to energy. |
| $\sigma$ | $\unit{erg\cdot s^{-1}\cdot cm^{-2}\cdot K^{-4}}$ | Stefan–Boltzmann constant | Relates blackbody flux to the fourth power of temperature. |
| $m$ | 1 | Apparent magnitude | Logarithmic measure of observed flux relative to a zero point. |
| $b$ | 1 | Softening constant | Sets the low-flux scale of the inverse hyperbolic sine magnitude. |
| $\mechanical{a},\,\mechanical{a}_0$ | $\unit{cm}$ | Atmospheric path lengths | Slant and vertical distances through the atmosphere. |
| $A$ | 1 | Extinction | Increase in apparent magnitude caused by attenuation. |
| $n$ | $\unit{cm^{-3}}$ | Grain number density | Number of dust grains per unit volume. |
| $\mechanical{x}$ | $\unit{cm}$ | Path length | Distance traveled through the dust. |
| $\mechanical{R}_0$ | $\unit{kpc}$ | Solar Galactocentric distance | Distance from the Sun to the Galactic center. |
| $\mechanical{R},\,\mechanical{z}$ | $\unit{kpc}$ | Galactocentric radius and height | Cylindrical radius from the Galactic axis and height from the Galactic plane. |
| $\phi$ | $\unit{rad}$ | Galactocentric azimuth | Azimuthal angle around the Galactic axis. |
| $\mechanical{v}_r,\,\mechanical{v}_t$ | $\unit{km\cdot s^{-1}}$ | Radial and transverse velocity | Components parallel and perpendicular to the line of sight. |
| $\beta,\,\gamma$ | 1 | Speed ratio and Lorentz factor | Radial speed in units of light speed and its associated relativistic factor. |
| $\mechanical{M}_1,\,\mechanical{M}_2$ | $\unit{g}$ | Stellar masses | Masses of the binary components. |
| $\mechanical{r}_1,\,\mechanical{r}_2$ | $\unit{cm}$ | Orbital radii | Distances of the stars from their common center of mass. |
| $\mechanical{v}_1,\,\mechanical{v}_2$ | $\unit{cm\cdot s^{-1}}$ | Orbital speeds | Speeds of the stars about their center of mass. |
| $G$ | $\unit{cm^3\cdot g^{-1}\cdot s^{-2}}$ | Gravitational constant | Constant in Newton’s law of gravitation. |
| $\mechanical{k}_1,\,\mechanical{k}_2$ | $\unit{km\cdot s^{-1}}$ | Radial velocity amplitudes | Peak projected orbital speeds of the two components. |
| $\mechanical{M}$ | $\unit{g}$ | Stellar mass | Mass in the main-sequence scaling relations. |
| $\mechanical{R}$ | $\unit{km}$ | Stellar radius | Radius in the main-sequence scaling relation. |
| $\mechanical{R}_{\odot},\,\mechanical{R}_{\mathrm{Earth}}$ | $\unit{km}$ | Solar and terrestrial radii | Reference radii of the Sun and Earth. |
| $\mechanical{R}_{\mathrm p},\,\mechanical{R}_{\star}$ | $\unit{cm}$ | Planet and stellar radii | Radii that set the projected transit geometry. |
| $e$ | 1 | Orbital eccentricity | Deviation of the orbit from a circle. |
| $X$ | 1 | Airmass | Relative path length through the atmosphere. |
| $\mechanical{m}$ | $\unit{g}$ | Planet mass | Mass of the orbiting planet. |
| $n$ | $\unit{pc^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular area of the selected sky cone. |
| $\nu(\mechanical{\mathbf{x}}),\,\nu(\mechanical{s})$ | — | Spatial distribution factor | Position-dependent part of the separable luminosity function. |
| $\sigma$ | 1 | Absolute-magnitude dispersion | Standard deviation of the Gaussian magnitude distribution. |
| $\mechanical{\sigma}$ | $\unit{km\cdot s^{-1}}$ | Velocity dispersion | Standard deviation of velocities along the chosen direction. |
| $n(\mechanical{R},\mechanical{z},S),\,n_0$ | $\unit{pc^{-3}}$ | Disk stellar number density | Density of the stellar class $S$ at the given position and its central normalization. |
| $\mechanical{h}_R(S),\,\mechanical{h}_z(S)$ | $\unit{kpc}$ | Radial and vertical scale lengths | E-folding distances of the disk density profile. |
| $\mechanical{\sigma}_z$ | $\unit{km\cdot s^{-1}}$ | Vertical velocity dispersion | Spread of stellar velocities perpendicular to the disk. |
| $\mechanical{v}_c,\,\mechanical{v}_{\mathrm{tang}}$ | $\unit{km\cdot s^{-1}}$ | Circular and tangential velocities | Orbital speeds along the direction of rotation. |
| $A$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | First Oort constant | Local rotational shear inferred from the longitude dependence of radial velocities. |
| $B$ | $\unit{km\cdot s^{-1}\cdot kpc^{-1}}$ | Second Oort constant | Offset in the nearby tangential velocity per unit distance. |
| $\energy{\Phi}$ | $\unit{erg\cdot g^{-1}}$ | Gravitational potential | Potential energy per unit test mass. |
| $\mechanical{\rho}$ | $\unit{g\cdot cm^{-3}}$ | Mass density | Mass per unit volume in the continuous gravitational model. |
| $\mechanical{L}_z$ | $\unit{cm^2\cdot s^{-1}}$ | Specific angular momentum | Conserved angular momentum about the symmetry axis per unit mass. |
| $\energy{\Phi}_{\mathrm{eff}}$ | $\unit{erg\cdot g^{-1}}$ | Effective potential | Gravitational potential plus the centrifugal term. |
| $\mechanical{R}_g$ | $\unit{kpc}$ | Guiding radius | Radius of the circular orbit at the minimum of the effective potential. |
| $\mechanical{\Omega}$ | $\unit{rad\cdot s^{-1}}$ | Circular angular speed | Angular speed of the guiding orbit. |
| $\mechanical{\kappa}$ | $\unit{rad\cdot s^{-1}}$ | Epicyclic angular frequency | Frequency of small radial oscillations about the guiding orbit. |
| $\mechanical{X}$ | $\unit{pc}$ | Epicycle amplitude | Maximum radial displacement from the guiding orbit. |
| $\psi$ | $\unit{rad}$ | Epicycle phase | Initial phase of the radial oscillation. |
| $\mechanical{v}_x,\,\mechanical{v}_y$ | $\unit{km\cdot s^{-1}}$ | Local velocity components | Radial and tangential components relative to the local standard of rest. |
| $\mechanical{\sigma}_x,\,\mechanical{\sigma}_y$ | $\unit{km\cdot s^{-1}}$ | In-plane velocity dispersions | Spreads of the radial and tangential components. |
| $\mechanical{v}_{\mathrm{rot}}$ | $\unit{km\cdot s^{-1}}$ | Rotation speed | Ordered azimuthal motion contributing to the dynamical mass estimate. |
| $\mechanical{\Omega}_{\mathrm b}$ | $\unit{rad\cdot s^{-1}}$ | Bar pattern speed | Angular speed of the rotating Galactic bar. |
| $f(\mechanical{\mathbf x},\mechanical{\mathbf v},t)$ | $\unit{pc^{-3}\cdot(km\cdot s^{-1})^{-3}}$ | Stellar phase-space distribution | Number of stars per unit spatial and velocity volume. |
| $\langle\mechanical{\mathbf v}\rangle$ | $\unit{km\cdot s^{-1}}$ | Mean stellar velocity | First velocity moment divided by the local number density. |
| $\mechanical{\Sigma}(<\mechanical{z})$ | $\unit{M_{\odot}\cdot pc^{-2}}$ | Surface mass density | Mass per unit area between the two stated heights about the disk midplane. |
| $\mechanical{M}_{\mathrm g},\,\mechanical{M}_{\mathrm h}$ | $\unit{M_{\odot}}$ | Gas mass and gas-phase heavy-element mass | Total gas mass and the mass of metals contained in that gas. |
