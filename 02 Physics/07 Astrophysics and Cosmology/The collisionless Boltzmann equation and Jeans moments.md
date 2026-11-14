---
title: "The collisionless Boltzmann equation and Jeans moments"
---

> [!TLDR]
> Take velocity moments of collisionless phase-space flow and apply the spherical Jeans equation to equilibrium models.

## Worked lecture material

In a **collisionless system**, particles respond to the gravitational field of the smooth mass distribution. The dynamics on the time scales of interest are well approximated by that field.

##### The collisionless Boltzmann equation

See MBW, section 5.4.2, and BT, section 4.1. Assume a collisionless system of $N$ identical point masses, which may represent stars or dark-matter particles. Treating them as identical simplifies the derivation.

In a system with a large number of particles, such as the stars in an elliptical galaxy, observations usually constrain the distribution of stellar positions and motions. A statistical description in phase space can therefore replace a detailed calculation of each orbit.

Define the phase-space **distribution function** $f$ so that

$$
f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{x}\,d^3\mechanical{v}
$$

is the probability that a randomly chosen star at time $\mechanical{t}$ has a position and velocity in the indicated phase-space volume.

The distribution function gives a full statistical description of the system. Buote follows the BT convention, in which $f$ is normalized as a probability density. The MBW convention uses $f_{\mathrm{MBW}}=Nf_{\mathrm{BT}}$, the number density of particles in phase space.

In the BT convention,

$$
\int f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{v}\,d^3\mechanical{x}=1.
$$

Integrating over velocities gives the probability per unit spatial volume,

$$
\nu(\mechanical{\vec x},\mechanical{t})
=\int f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{v}.
$$

The number density is $n=N\nu$. For identical particles of mass $\mechanical{m}$, the mass density is $\mechanical{\rho}=\mechanical{m}n=\mechanical{M}\nu$, where $\mechanical{M}=N\mechanical{m}$ is the total mass. Thus,

$$
\mechanical{\rho}(\mechanical{\vec x},\mechanical{t})
=\mechanical{M}\int f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})\,d^3\mechanical{v}.
$$

See BT, section 4.1.2, for the relation of $f$ to observables. The time argument is suppressed in the handwritten density formulas.

At a fixed position $\mechanical{\vec x}$, the conditional velocity density is

$$
P_{\mechanical{\vec x}}(\mechanical{\vec v})
=\frac{f(\mechanical{\vec x},\mechanical{\vec v})}{\nu(\mechanical{\vec x})}.
$$

The kinematic observables come from its velocity moments. For the mean velocity,

$$
\overline{\mechanical{\vec v}}(\mechanical{\vec x})
=\int\mechanical{\vec v}P_{\mechanical{\vec x}}(\mechanical{\vec v})\,d^3\mechanical{v}
=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{\vec v}f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}.
$$

In both forms the integral is over velocity at fixed position. A single component, such as the radial component $\mechanical{v}_r$ or the component along the azimuthal angle, is often more convenient. Its first and second moments are

$$
\begin{aligned}
\overline{\mechanical{v}_i}
&=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{v}_i f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v},\\
\overline{\mechanical{v}_i^2}
&=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{v}_i^2 f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}.
\end{aligned}
$$

The principal quantities in this description are $\mechanical{\rho}$, $\overline{\mechanical{v}_i}$, and $\overline{\mechanical{v}_i^2}$.

The total derivative $df/d\mechanical{t}$ describes the evolution of $f$ as one follows a star through phase space. In the smooth gravitational field, the collisionless phase-space flow is incompressible. With no particle sources or sinks, probability is conserved and $f$ stays constant along a trajectory,

$$
\frac{df}{d\mechanical{t}}=0.
$$

This is the **Lagrangian** or **convective** derivative. The lecture separates the rate of change at a fixed phase-space point, the **Eulerian** term $\partial f/\partial\mechanical{t}$, from the change due to motion to a nearby point. The spatial displacement is $d\mechanical{\vec x}=\mechanical{\vec v}\,d\mechanical{t}$. Motion through velocity space also contributes when the star accelerates. See the discussion of convective derivatives in BT, pp. 807–808.

Let $\vec w=(\mechanical{\vec x},\mechanical{\vec v})$ collect the six phase-space coordinates. At fixed time, a phase-space displacement changes $f$ by $\sum_{i=1}^6(\partial f/\partial w_i)\,dw_i$. Along the orbit, $dw_i=(dw_i/d\mechanical{t})\,d\mechanical{t}$. Adding the explicit time dependence gives

$$
\frac{df}{d\mechanical{t}}
=\frac{\partial f}{\partial\mechanical{t}}
+\sum_{i=1}^3\frac{\partial f}{\partial\mechanical{x}_i}
\frac{d\mechanical{x}_i}{d\mechanical{t}}
+\sum_{i=1}^3\frac{\partial f}{\partial\mechanical{v}_i}
\frac{d\mechanical{v}_i}{d\mechanical{t}}
=0.
$$

If $\energy{V}=\mechanical{m}\mechanical{\Phi}$ is the star's gravitational potential energy, the smooth galactic field gives

$$
\frac{d\mechanical{v}_i}{d\mechanical{t}}
=\frac{\mechanical{F}_{\mathrm g,i}}{\mechanical{m}}
=-\frac{1}{\mechanical{m}}\frac{\partial\energy{V}}{\partial\mechanical{x}_i}
=-\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}.
$$

##### The Vlasov equation

Using $d\mechanical{x}_i/d\mechanical{t}=\mechanical{v}_i$ and the acceleration above gives the **collisionless Boltzmann equation**, also called the **Vlasov equation**,

$$
\frac{df}{d\mechanical{t}}
=\frac{\partial f}{\partial\mechanical{t}}
+\sum_{i=1}^3\mechanical{v}_i\frac{\partial f}{\partial\mechanical{x}_i}
-\sum_{i=1}^3\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\frac{\partial f}{\partial\mechanical{v}_i}
=0.
$$

The spatial derivative in the middle term follows from the chain rule and appears explicitly in the May 14 recap.

##### Jeans equations

See MBW, section 5.4.5, and BT, section 4.8. Observations typically constrain quantities such as $\nu$, $\mechanical{\rho}$, $\overline{\mechanical{v}_i}$, and $\overline{\mechanical{v}_i^2}$ more directly than the full distribution function. The velocity moments of the collisionless Boltzmann equation give equations for such quantities. To form the moment of order $n$, multiply by $\mechanical{v}_i^n$ and integrate over all velocities.

For the zeroth moment, $n=0$, integrate the equation directly to obtain the continuity equation. Its three terms are

$$
\begin{aligned}
0={}&\int\frac{\partial f}{\partial\mechanical{t}}\,d^3\mechanical{v}
+\int\sum_i\mechanical{v}_i\frac{\partial f}{\partial\mechanical{x}_i}\,d^3\mechanical{v}\\
&-\int\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}.
\end{aligned}
$$

For the first term the domain of velocity integration is independent of time. Hence

$$
\int\frac{\partial f}{\partial\mechanical{t}}\,d^3\mechanical{v}
=\frac{\partial}{\partial\mechanical{t}}\int f\,d^3\mechanical{v}
=\frac{\partial\nu}{\partial\mechanical{t}}.
$$

The second term is

$$
\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\int\mechanical{v}_i f\,d^3\mechanical{v}
=\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right).
$$

For the third term, introduce the velocity-space gradient $\nabla_v=\sum_i\hat e_i\,\partial/\partial\mechanical{v}_i$. By the product rule, $\nabla_v\cdot(f\vec A)=f\nabla_v\cdot\vec A+\vec A\cdot\nabla_v f$. The vector $\nabla_x\mechanical{\Phi}$ is independent of velocity, so

$$
\begin{aligned}
\int\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}
&=\int\nabla_v\cdot\left(f\nabla_x\mechanical{\Phi}\right)\,d^3\mechanical{v}\\
&=\oint \left(f\nabla_x\mechanical{\Phi}\right)\cdot\hat n\,dS_v
=0.
\end{aligned}
$$

The divergence theorem gives the surface integral. Its boundary can be taken at sufficiently high speeds where the distribution vanishes, as assumed in the lecture.

The zeroth moment therefore gives continuity for $\nu$. Multiplying by the constant $\mechanical{M}=N\mechanical{m}$ and using $\mechanical{\rho}=\mechanical{M}\nu$ gives mass continuity,

$$
\begin{aligned}
\frac{\partial\nu}{\partial\mechanical{t}}
+\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right)&=0,\\
\frac{\partial\mechanical{\rho}}{\partial\mechanical{t}}
+\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{\rho}\overline{\mechanical{v}_i}\right)&=0.
\end{aligned}
$$

The spatial term in mass continuity can also be written as $\nabla_x\cdot(\mechanical{\rho}\overline{\mechanical{\vec v}})$.

For the first moment, fix a component $j$, multiply the collisionless Boltzmann equation by $\mechanical{v}_j$, and integrate over velocities,

$$
\begin{aligned}
0={}&\frac{\partial}{\partial\mechanical{t}}
\int\mechanical{v}_j f\,d^3\mechanical{v}
+\sum_i\int\mechanical{v}_i\mechanical{v}_j
\frac{\partial f}{\partial\mechanical{x}_i}\,d^3\mechanical{v}\\
&-\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\int\mechanical{v}_j\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}.
\end{aligned}
$$

The first term is $\partial(\nu\overline{\mechanical{v}_j})/\partial\mechanical{t}$. Because positions and velocities are independent coordinates in phase space, the spatial derivative in the second term can be taken outside the integral,

$$
\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\int\mechanical{v}_i\mechanical{v}_j f\,d^3\mechanical{v}
=\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i\mechanical{v}_j}\right).
$$

For the third term, the product rule gives

$$
\begin{aligned}
\int\mechanical{v}_j\frac{\partial f}{\partial\mechanical{v}_i}\,d^3\mechanical{v}
={}&\int\frac{\partial(\mechanical{v}_j f)}{\partial\mechanical{v}_i}\,d^3\mechanical{v}\\
&-\int\frac{\partial\mechanical{v}_j}{\partial\mechanical{v}_i}f\,d^3\mechanical{v}.
\end{aligned}
$$

The velocity derivative is with respect to the summed index $i$, as in the collisionless equation and in the product-rule calculation on the handwritten page.

After restoring the potential gradient, the first integral from the product rule is a velocity-space divergence. By the divergence theorem,

$$
\int\nabla_v\cdot\left(\mechanical{v}_j f\nabla_x\mechanical{\Phi}\right)\,d^3\mechanical{v}
=\oint\left(\mechanical{v}_j f\nabla_x\mechanical{\Phi}\right)\cdot\hat n\,dS_v=0.
$$

The boundary flux vanishes if the distribution has finite velocity support or decays sufficiently fast at large velocities. The other integral uses $\partial\mechanical{v}_j/\partial\mechanical{v}_i=\delta_{ij}$, the Kronecker delta, because the velocity components are independent coordinates. Its contribution to the first moment is

$$
-\sum_i\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_i}
\int(-\delta_{ij})f\,d^3\mechanical{v}
=\nu\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}.
$$

Combining all three terms gives

$$
\frac{\partial}{\partial\mechanical{t}}\left(\nu\overline{\mechanical{v}_j}\right)
+\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i\mechanical{v}_j}\right)
+\nu\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}=0.
$$

The standard Jeans form follows by subtracting $\overline{\mechanical{v}_j}$ times the continuity equation.

Multiplying the continuity equation by $\overline{\mechanical{v}_j}$ gives

$$
\overline{\mechanical{v}_j}\frac{\partial\nu}{\partial\mechanical{t}}
+\overline{\mechanical{v}_j}\sum_i
\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right)=0.
$$

Subtracting this equation from the first moment replaces its time derivative with $\nu\,\partial\overline{\mechanical{v}_j}/\partial\mechanical{t}$. Define the **velocity dispersion tensor** by

$$
\mechanical{\sigma}_{ij}^2
=\overline{\mechanical{v}_i\mechanical{v}_j}
-\overline{\mechanical{v}_i}\,\overline{\mechanical{v}_j}.
$$

Using this identity and expanding the derivative of the product of mean velocities gives

$$
\begin{aligned}
\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i\mechanical{v}_j}\right)
={}&\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\mechanical{\sigma}_{ij}^2\right)
+\overline{\mechanical{v}_j}\sum_i
\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\overline{\mechanical{v}_i}\right)\\
&+\sum_i\nu\overline{\mechanical{v}_i}
\frac{\partial\overline{\mechanical{v}_j}}{\partial\mechanical{x}_i}.
\end{aligned}
$$

The middle term cancels the spatial term from continuity. The **Jeans equations**, analogous to Euler's equations, are therefore

$$
\nu\frac{\partial\overline{\mechanical{v}_j}}{\partial\mechanical{t}}
+\sum_i\nu\overline{\mechanical{v}_i}
\frac{\partial\overline{\mechanical{v}_j}}{\partial\mechanical{x}_i}
=-\nu\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}
-\sum_i\frac{\partial}{\partial\mechanical{x}_i}
\left(\nu\mechanical{\sigma}_{ij}^2\right).
$$

The indices and spatial derivatives follow from the product-rule expansion above. Multiplying through by $N\mechanical{m}$ converts each factor of $\nu$ to $\mechanical{\rho}$.

The Jeans equations are the collisionless analogue of the Euler equations for a fluid.

1. The probability density $\nu$ corresponds, after multiplication by the total mass, to the fluid mass density.
2. The mean stellar velocity corresponds to the bulk fluid velocity.
3. The divergence of the velocity dispersion term corresponds to the pressure gradient $\nabla\mechanical{P}$ in the fluid equations.

The lecture calls $\nu\mechanical{\sigma}_{ij}^2$ the stress tensor in the probability-normalized equations. In mass units the stress is $\mechanical{\rho}\mechanical{\sigma}_{ij}^2$. It can describe anisotropic pressure, whereas the local pressure of an ideal fluid is isotropic.

Continuity and the Jeans equations relate observable quantities to the gravitational potential. Even if the potential and tracer density are specified, the three components of the mean velocity and the six independent components of the symmetric dispersion tensor leave nine kinematic unknowns. The four equations consist of one scalar continuity equation and three Jeans equations. Further assumptions are needed to close the system.

Solving the Jeans equations usually requires a prescription for $\mechanical{\sigma}_{ij}^2$ that plays a role analogous to an equation of state. A prescribed tensor can lead to moment solutions that fail to correspond to a physical distribution $f\geq0$ everywhere in phase space. The notes also caution against assuming that the tensor is diagonal in the chosen coordinates.

In terms of the distribution function, the full definition is

$$
\begin{aligned}
\mechanical{\sigma}_{ij}^2
&=\frac{1}{\nu(\mechanical{\vec x})}\int
\left(\mechanical{v}_i-\overline{\mechanical{v}_i}\right)
\left(\mechanical{v}_j-\overline{\mechanical{v}_j}\right)
f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}\\
&=\overline{\mechanical{v}_i\mechanical{v}_j}
-\overline{\mechanical{v}_i}\,\overline{\mechanical{v}_j}.
\end{aligned}
$$

The tensor is symmetric, so at each point $\mechanical{\vec x}$ an orthogonal basis $\hat e_i(\mechanical{\vec x})$ diagonalizes it. In that basis $\mechanical{\sigma}_{ij}^2=\mechanical{\sigma}_{ii}^2\delta_{ij}$ with no sum over $i$. The ellipsoid with principal semiaxes $\mechanical{\sigma}_{11}$, $\mechanical{\sigma}_{22}$, and $\mechanical{\sigma}_{33}$ is called the **velocity ellipsoid** at $\mechanical{\vec x}$.

Observers usually measure the line-of-sight velocity dispersion. A model specifying the dispersion tensor, mean velocity, tracer density, and gravitational potential can predict the line-of-sight quantities $\mechanical{\sigma}_{\mathrm{los}}$ and $\overline{\mechanical{v}_{\mathrm{los}}}$ for comparison with data.

##### The spherical Jeans equation

After recapping the Jeans equations in Cartesian coordinates, the lecture quotes the result for a steady spherical system. See BT, p. 350, and MBW, p. 241. The radial equation is

$$
\frac{d}{d\mechanical{r}}\left(\nu\overline{\mechanical{v}_r^2}\right)
+\frac{2\beta}{\mechanical{r}}\nu\overline{\mechanical{v}_r^2}
=-\nu\frac{d\mechanical{\Phi}}{d\mechanical{r}},
$$

where $\beta$ measures the anisotropy of the stellar velocities.

In the steady spherical model the mean velocities vanish. The radial second moment at position $\mechanical{\vec x}$ is

$$
\overline{\mechanical{v}_r^2}(\mechanical{\vec x})
=\frac{1}{\nu(\mechanical{\vec x})}
\int\mechanical{v}_r^2 f(\mechanical{\vec x},\mechanical{\vec v})\,d^3\mechanical{v}.
$$

The **anisotropy parameter** compares radial and tangential motions,

$$
\begin{aligned}
\beta(\mechanical{r})
&=1-\frac{\overline{\mechanical{v}_\theta^2}+\overline{\mechanical{v}_\phi^2}}
{2\overline{\mechanical{v}_r^2}}\\
&=1-\frac{\overline{\mechanical{v}_t^2}}{\overline{\mechanical{v}_r^2}}
=1-\frac{\mechanical{\sigma}_t^2}{\mechanical{\sigma}_r^2}.
\end{aligned}
$$

Spherical symmetry gives equal second moments in the two tangential directions, so $\mechanical{v}_t$ denotes one component along any direction tangent to the sphere. The last equality uses the vanishing mean velocities, which make the second moments equal to the corresponding variances. Here $\beta$ is a function of radius in the spherical model.

The case $\beta=0$ has isotropic second moments. In this case the spherical Jeans equation is formally equivalent to hydrostatic equilibrium.

For purely radial orbits $\beta=1$. Purely tangential orbits give the limit $\beta\to-\infty$. Radially biased systems have $0<\beta\leq1$, while tangentially biased systems have $\beta<0$.

To express the spherical Jeans equation in terms of the mass profile, expand the derivative of $\nu\overline{\mechanical{v}_r^2}$ and use

$$
\frac{d\mechanical{\Phi}}{d\mechanical{r}}
=\frac{G\mechanical{M}(<\mechanical{r})}{\mechanical{r}^2}.
$$

Dividing by $\nu\overline{\mechanical{v}_r^2}$ and writing the two derivatives as logarithmic slopes gives

$$
\mechanical{M}(<\mechanical{r})
=-\frac{\mechanical{r}\overline{\mechanical{v}_r^2}}{G}
\left[
\frac{d\ln\nu}{d\ln\mechanical{r}}
+\frac{d\ln\overline{\mechanical{v}_r^2}}{d\ln\mechanical{r}}
+2\beta
\right].
$$

For $\beta=0$, the fluid counterpart follows by replacing $\nu$ with the gas mass density $\mechanical{\rho}_{\mathrm{gas}}$ and $\overline{\mechanical{v}_r^2}$ with $k_{\mathrm B}\thermal{T}/(\mu\mechanical{m}_{\mathrm u})$. Their product plays the role of the ideal-gas pressure in hydrostatic equilibrium. Here $\mu\mechanical{m}_{\mathrm u}$ is the mean particle mass and $\mechanical{m}_{\mathrm u}$ is the atomic mass unit.

For elliptical galaxies and galaxy clusters, the anisotropy profile $\beta(\mechanical{r})$ is constrained indirectly, using assumptions about the stellar orbits. Uncertainty in that profile carries through to $\mechanical{M}(<\mechanical{r})$ inferred from the spherical Jeans equation. The ambiguous handwritten profile symbol is read here as $\beta$, the unmeasured term in the preceding equation.

##### The isothermal sphere

The lecture introduces a spherical model specified by its distribution function. See BT, pp. 302–307, and MBW, p. 242. In the number-density convention, the notes give the form

$$
f(\energy{\xi})
=\frac{\mechanical{\rho}_0/\mechanical{m}}{(2\pi\mechanical{\sigma}^2)^{3/2}}
\exp\!\left(\frac{\energy{\xi}}{\mechanical{\sigma}^2}\right),
$$

where $\mechanical{m}$ is the particle mass, $\mechanical{\rho}_0$ is the density scale, and $\mechanical{\sigma}^2=\langle\mechanical{v}^2\rangle/3$ is constant. The energy variable $\energy{\xi}$ is expressed per unit mass. Its sign convention is the one that gives a decaying Gaussian in speed. At fixed position the velocity dependence is Maxwellian, as in a collisional isothermal gas with $\mechanical{\sigma}^2=k_{\mathrm B}\thermal{T}/\mechanical{m}$.

Define the relative gravitational potential and relative specific energy by

$$
\mechanical{\Psi}=\mechanical{\Phi}_0-\mechanical{\Phi},
\qquad
\energy{\xi}=\mechanical{\Phi}_0-\energy{E}
=\mechanical{\Psi}-\frac{\mechanical{v}^2}{2},
$$

where $\mechanical{\Phi}_0$ is constant and $\energy{E}=\mechanical{\Phi}+\mechanical{v}^2/2$ is the total energy per unit mass. Integrating the Gaussian in the distribution function over velocity yields

$$
\mechanical{\rho}(\mechanical{r})=\mechanical{\rho}_0
\exp\!\left(\frac{\mechanical{\Psi}(\mechanical{r})}{\mechanical{\sigma}^2}\right).
$$

The density is $\mechanical{m}\int f\,d^3\mechanical{v}$ in the number-density convention used for the preceding distribution. It is $N\mechanical{m}\int f\,d^3\mechanical{v}$ in the probability convention written on this page. The exponential denominator is the velocity variance $\mechanical{\sigma}^2$, as in the following handwritten Poisson equation.

Since $\nabla^2\mechanical{\Psi}=-4\pi G\mechanical{\rho}$, spherical symmetry gives

$$
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{d\mechanical{\Psi}}{d\mechanical{r}}\right)
=-4\pi G\mechanical{\rho}_0
\exp\!\left(\frac{\mechanical{\Psi}}{\mechanical{\sigma}^2}\right).
$$

This can be solved numerically with $\mechanical{\rho}(0)=\mechanical{\rho}_0$ and $(d\mechanical{\Psi}/d\mechanical{r})_{\mechanical{r}=0}=0$. The scale used to discuss the solution is the **King radius**,

$$
\mechanical{r}_0=\frac{3\mechanical{\sigma}}{\sqrt{4\pi G\mechanical{\rho}_0}}.
$$

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $V$ | $\unit{m^3}$ | Gas volume | Volume used to convert emissivity to luminosity. |
| $\thermal{T}$ | $\unit{K}$ | Gas temperature | Determines the thermal energy and affects the cooling function. |
| $\mu$ | $\unit{mag\,arcsec^{-2}}$ | Surface brightness in magnitudes | Logarithmic measure of intensity per angular area with a specified zero point. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $\mechanical{M}(<\mechanical{r})$ | $\unit{kg}$ | Enclosed gravitating mass | Total mass within spherical radius $\mechanical{r}$. |
| $\mechanical{\Phi}$ | $\unit{m^2\,s^{-2}}$ | Gravitational potential | Gravitational potential energy per unit mass. |
| $\mechanical{\rho}(\mechanical{r})$ | $\unit{kg\,m^{-3}}$ | Mass density profile | Local gravitating mass per unit volume at spherical radius $\mechanical{r}$. |
| $q$, $\epsilon$, $e$ | $1$ | Axis ratio, ellipticity, and eccentricity | Three measures of apparent ellipse shape. |
| $\mechanical{\rho}_0$ | $\unit{kg\,m^{-3}}$ | Density normalization | Multiplicative scale in the approximate deprojection. |
| $p$ | $1$ | Inner deprojection slope | Exponent of the prefactor in the approximate spatial density. |
| $N$ | $1$ | Number of stars | Total stellar population of the model galaxy. |
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $f(\mechanical{\vec x},\mechanical{\vec v},\mechanical{t})$ | $\unit{s^3\,m^{-6}}$ | Phase-space distribution function | Probability density with respect to the product of position volume and velocity volume. |
| $\nu(\mechanical{\vec x},\mechanical{t})$ | $\unit{m^{-3}}$ | Spatial probability density | Velocity integral of the normalized phase-space distribution. |
| $n(\mechanical{\vec x},\mechanical{t})$ | $\unit{m^{-3}}$ | Spatial number density | Number of particles per unit physical volume. |
| $P_{\mechanical{\vec x}}(\mechanical{\vec v})$ | $\unit{s^3\,m^{-3}}$ | Conditional velocity density | Probability density over velocity at a specified position. |
| $\overline{\mechanical{v}_i}$ | $\unit{m\,s^{-1}}$ | Mean velocity component | First moment of the conditional velocity distribution. |
| $\overline{\mechanical{v}_i^2}$ | $\unit{m^2\,s^{-2}}$ | Mean-square velocity component | Second raw moment of the conditional velocity distribution. |
| $\energy{V}$ | $\unit{J}$ | Gravitational potential energy | Product of the stellar mass and the gravitational potential. |
| $\overline{\mechanical{v}_i\mechanical{v}_j}$ | $\unit{m^2\,s^{-2}}$ | Mixed second velocity moment | Mean product of two velocity components at a fixed position. |
| $\mechanical{\sigma}_{ij}^2$ | $\unit{m^2\,s^{-2}}$ | Velocity dispersion tensor component | Covariance of two velocity components at a fixed position. |
| $\mechanical{\rho}\mechanical{\sigma}_{ij}^2$ | $\unit{Pa}$ | Stellar stress component | Mass-weighted velocity covariance that acts as an anisotropic pressure. |
| $\mechanical{\sigma}_{\mathrm{los}}$ | $\unit{m\,s^{-1}}$ | Line-of-sight velocity dispersion | Width of the projected velocity distribution along the viewing direction. |
| $\overline{\mechanical{v}_{\mathrm{los}}}$ | $\unit{m\,s^{-1}}$ | Mean line-of-sight velocity | First moment of the projected velocity distribution. |
| $\beta(\mechanical{r})$ | $1$ | Velocity anisotropy parameter | One minus the ratio of a single tangential velocity variance to the radial velocity variance. |
| $\mechanical{\sigma}_r$, $\mechanical{\sigma}_t$ | $\unit{m\,s^{-1}}$ | Radial and tangential velocity dispersions | Standard deviations in the radial direction and in one tangential direction. |
| $\mu$ | $1$ | Mean particle mass in atomic mass units | Dimensionless factor converting the atomic mass unit to the average gas particle mass. |
| $\mechanical{m}_{\mathrm u}$ | $\unit{kg}$ | Atomic mass unit | Mass unit used to specify the mean gas particle mass. |
| $\energy{\xi}$ | $\unit{J\,kg^{-1}}$ | Specific binding-energy variable | Energy variable in the exponential of the isothermal distribution. |
| $\mechanical{\sigma}$ | $\unit{m\,s^{-1}}$ | Isothermal velocity dispersion | Constant one-dimensional velocity dispersion. |
| $\mechanical{\Psi}$ | $\unit{m^2\,s^{-2}}$ | Relative gravitational potential | Difference between the chosen reference potential and the ordinary potential. |
| $\mechanical{r}_0$ | $\unit{m}$ | King radius | Length scale set by the velocity dispersion and central density of the nonsingular isothermal sphere. |
| $\delta$ | $1$ | Global velocity anisotropy | One minus the ratio of integrated vertical to equatorial random-motion stress. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
| $\beta$ | $1$ | Isothermal beta-model exponent | Ratio of the stellar velocity variance to the gas thermal energy per unit mass in this section. |
