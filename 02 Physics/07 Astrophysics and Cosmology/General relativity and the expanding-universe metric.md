---
title: "General relativity and the expanding-universe metric"
---

> [!TLDR]
> Use covariance, the equivalence principle, and spacetime metrics to describe an expanding universe.

## Worked lecture material

##### Physics 240B. Modern Cosmology with Manoj Kaplinghat

Kaplinghat trained as a particle physicist and joked about finding it boring. The opening questions include how a black hole could already have a mass of about $10^9\,\mechanical{M}_{\odot}$ at redshift $z=7$. The course will focus on the expansion of the universe. Variability in active galactic nuclei (AGN) may serve as a tool for cosmology. Ryden is recommended as a supplementary text, alongside papers assigned for reading.

The core Big Bang cosmology topics are the basics of the expanding universe, the cosmic microwave background (annotated at an age of about $300{,}000$ years), and nucleosynthesis (annotated with the early timescale of about $\quantity{1}{s}$). Possible additional topics are future cosmological probes such as weak lensing, the Boltzmann equations, inflation as a separate extension to the Big Bang framework, and reionization.

Growth of perturbations and galaxy formation are further possible topics. The main tools are the Boltzmann equation and general relativity. Prerequisites include metrics, four-vectors, and special relativity.

Homework and classwork count for two-thirds of the grade, and the final exam counts for one-third. Homework is due on Tuesdays.

##### Chapter 1 of Dodelson's *Modern Cosmology*

![[Kyle Kabasares - Cosmology - Scale factor through radiation and matter domination.png|**Fig. 1** Cosmic scale factor $a$ and temperature $\thermal{T}$ versus cosmic time $t$. The figure marks the regimes $a\propto t^{1/2}$ during radiation domination and $a\propto t^{2/3}$ during matter domination, with $a=1$ today.]]

The Hubble parameter is $H(t)=\dot a(t)/a(t)$. In the spatially flat, matter-dominated case, $a=kt^{2/3}$ for a constant $k$, and

$$
\dot a=\tfrac23kt^{-1/3},\qquad H(t)=\frac{\tfrac23kt^{-1/3}}{kt^{2/3}}=\frac{2}{3t}.
$$

The Friedmann equation in the notes uses units with $\mechanical{c}=1$ and the normalization $a(t_0)=1$.

$$
H^2(t)=\frac{8\pi\mechanical{G}}3\left[
\energy{\rho}(t)+\frac{\energy{\rho}_{\mathrm{cr}}-\energy{\rho}_0}{a^2(t)}
\right],\qquad
\energy{\rho}_{\mathrm{cr}}=\frac{3H_0^2}{8\pi\mechanical{G}}.
$$

The first term inside the brackets is the energy density of the universe, and the second accounts for spatial curvature. A conserved particle population has number density proportional to $a^{-3}$ because its physical volume grows as $a^3$. The plasma temperature in the simple cooling law is $\thermal{T}(t)=\thermal{T}_0/a(t)$.

The present Hubble parameter is written in terms of the dimensionless $h$ as

$$
H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}
\approx\frac{h}{\quantity{0.98\times10^{10}}{yr}}
\approx\frac{\quantity{2.133\times10^{-33}h}{eV}}{\hbar}.
$$

The lecture notes quote $h=0.72\pm0.08$. They give the critical density in mass-equivalent units as $\energy{\rho}_{\mathrm{cr}}=\quantity{1.88h^2\times10^{-29}}{g\,cm^{-3}}$. If the particle scattering rate exceeds the expansion rate, interactions can keep the particles in equilibrium.

##### General relativity

The lecture introduces the equivalence principle, covariance, vector and tensor transformations, metrics, the scale factor in a smooth expanding universe, and geodesics as the paths of freely moving particles.

The metric determines the line element and raises and lowers indices.

$$
ds^2=g_{\mu\nu}\,dx^\mu dx^\nu,\qquad V^\mu=g^{\mu\nu}V_\nu.
$$

The spacetime indices run from $0$ to $3$, with $1$ through $3$ labeling the spatial coordinates.

Raising both indices of the metric gives $g^{\mu\nu}=g^{\mu\alpha}g^{\nu\beta}g_{\alpha\beta}$. For example,

$$
V^0=g^{00}V_0+g^{01}V_1+g^{02}V_2+g^{03}V_3.
$$

The component $g^{01}$ of the inverse metric and the component $g_{01}$ of the metric can differ. The mixed component $g^0{}_{1}$ is obtained by contracting with the inverse metric and equals $\delta^0{}_{1}$.

The flat spacetime interval is invariant. In Cartesian coordinates it reads

$$
ds^2=-\mechanical{c}^{\,2}dt^2+d\mechanical{x}^{\,2}+d\mechanical{y}^{\,2}+d\mechanical{z}^{\,2}.
$$

In natural units $\hbar=\mechanical{c}=\thermal{k}_{\mathrm B}=1$. In Cartesian coordinates the metric is

$$
(g_{\mu\nu})=
\begin{bmatrix}
-1&0&0&0\\
0&1&0&0\\
0&0&1&0\\
0&0&0&1
\end{bmatrix}.
$$

In spherical coordinates, the flat interval becomes

$$
ds^2=-\mechanical{c}^{\,2}dt^2+d\mechanical{r}^{\,2}
+\mechanical{r}^{\,2}d\theta^2+\mechanical{r}^{\,2}\sin^2\theta\,d\phi^2.
$$

For $\mechanical{c}=1$, the spherical coordinate metric has diagonal entries $(-1,1,\mechanical{r}^{\,2},\mechanical{r}^{\,2}\sin^2\theta)$ and zero off-diagonal entries.

The inverse spherical-coordinate metric has diagonal entries

$$
(g^{\mu\nu})=\operatorname{diag}\!\left(-1,1,\frac1{\mechanical{r}^2},\frac1{\mechanical{r}^2\sin^2\theta}\right).
$$

It obeys $g^{\mu\nu}g_{\nu\alpha}=\delta^\mu{}_\alpha$.

All inertial observers agree on the spacetime interval between two events. For radial timelike motion in flat spacetime and $\mechanical{c}=1$,

$$
-d\tau^2=ds^2=-dt^2+d\mechanical{r}^2,\qquad
dt=\frac{d\tau}{\sqrt{1-\mechanical{v}^2}}=\gamma\,d\tau.
$$

Here $d\tau$ is the elapsed proper time in the instantaneous rest frame, where the spatial displacement vanishes.

##### Equivalence principle and covariance

The notes connect the equivalence principle to $\mechanical{F}=\mechanical{m}\mechanical{a}$. Locally, a uniform gravitational field has the same effect as an acceleration of the reference frame. A local freely falling coordinate system can be chosen in which the metric at the event takes the Minkowski form. Astronauts on the International Space Station are in free fall under Earth's gravity.

Choose local inertial coordinates at an event $p$. The line element is $ds^2=g_{\mu\nu}\,dx^\mu dx^\nu$, and at $p$ the metric and its first derivatives satisfy

$$
g_{\mu\nu}\big|_p=\eta_{\mu\nu},\qquad
(\eta_{\mu\nu})=\operatorname{diag}(-1,1,1,1),\qquad
\left.\frac{\partial g_{\mu\nu}}{\partial x^\alpha}\right|_p=0.
$$

The coordinate expansion near $p$ is

$$
\begin{aligned}
g_{\mu\nu}(x)={}&g_{\mu\nu}(x_p)
+\left.\frac{\partial g_{\mu\nu}}{\partial x^\alpha}\right|_p(x^\alpha-x_p^\alpha)\\
&+\frac12\left.\frac{\partial^2g_{\mu\nu}}{\partial x^\alpha\partial x^\beta}\right|_p
(x^\alpha-x_p^\alpha)(x^\beta-x_p^\beta)+\cdots.
\end{aligned}
$$

The constant term is Minkowski in these coordinates and the linear term vanishes. The notes mark ten quadratic products of coordinate differences, corresponding to the symmetric index pair $\alpha,\beta$. Curvature is encoded in combinations of the second derivatives, so nonzero curvature persists under a change of coordinates.

##### Covariance

In the lecture's wording, the “covariance business” means the equation keeps the same form in every coordinate system. Under $x^\mu\mapsto x'^\mu$, the components of the metric and coordinate differentials transform together in the expression for $ds^2$.

![[Kyle Kabasares - Cosmology - Cartesian polar and rotated coordinates.png|**Fig. 2** The same point can be described in Cartesian or polar coordinates, and the coordinate axes can also be rotated.]]

For example, spherical coordinates give $\mechanical{x}=\mechanical{r}\sin\theta\cos\phi$ and $\mechanical{y}=\mechanical{r}\sin\theta\sin\phi$. The total differential is

$$
d\mechanical{x}=\frac{\partial\mechanical{x}}{\partial\mechanical{r}}d\mechanical{r}
+\frac{\partial\mechanical{x}}{\partial\theta}d\theta
+\frac{\partial\mechanical{x}}{\partial\phi}d\phi.
$$

In general $dx'^\mu=(\partial x'^\mu/\partial x^\alpha)\,dx^\alpha$. The scalar interval can be written in either coordinate system.

$$
ds^2=g_{\alpha\beta}(x)\,dx^\alpha dx^\beta
=g'_{\mu\nu}(x')\,dx'^\mu dx'^\nu,\qquad
g'_{\mu\nu}(x')=g_{\alpha\beta}(x)\frac{\partial x^\alpha}{\partial x'^\mu}
\frac{\partial x^\beta}{\partial x'^\nu}.
$$

Substituting the transformed differentials recovers the unprimed expression because $\frac{\partial x^\alpha}{\partial x'^\mu}\frac{\partial x'^\mu}{\partial x^\delta}=\delta^\alpha{}_\delta$.

##### Metric of the expanding universe

For a smooth, spatially flat model in units with $\mechanical{c}=1$,

$$
ds^2=-dt^2+a^2(t)\bigl(d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2\bigr).
$$

The scale factor multiplies every physical separation between fixed comoving points. The notes contrast this with a spherically symmetric inhomogeneous form $ds^2=-dt^2+A^2(t,\mechanical{r})\,d\mechanical{r}^2+B^2(\mechanical{r},t)\,d\Omega^2$, using $A,B$ for the radial metric coefficients and $d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2$.

![[Kyle Kabasares - Cosmology - Comoving point separation.png|**Fig. 3** Two fixed comoving points. The physical separation projected along the $x$ axis is $a(t)(\mechanical{x}_2-\mechanical{x}_1)$.]]

Practice contractions with the coordinate transformation laws for a covariant rank-two tensor, a contravariant rank-two tensor, and a covector.

$$
\begin{aligned}
T'_{\mu\nu}&=T_{\alpha\beta}\frac{\partial x^\alpha}{\partial x'^\mu}
\frac{\partial x^\beta}{\partial x'^\nu},\\
T'^{\mu\nu}&=T^{\alpha\beta}\frac{\partial x'^\mu}{\partial x^\alpha}
\frac{\partial x'^\nu}{\partial x^\beta},\\
V'_\mu&=V_\alpha\frac{\partial x^\alpha}{\partial x'^\mu}.
\end{aligned}
$$

##### 2.1.2 The geodesic equation

A geodesic is the path followed by a freely moving particle. In flat spacetime and inertial Cartesian coordinates, $d^2 x^i/dt^2=0$. What form does this equation take in polar or spherical coordinates? Start with the chain rule

$$
\frac{dx^i}{dt}=\frac{\partial x^i}{\partial x'^j}\frac{dx'^j}{dt}.
$$

The Jacobian $\partial x^i/\partial x'^j$ gives the coordinate basis transformation. For a two-dimensional Cartesian-to-polar example, $(x^1,x^2)=(\mechanical{x},\mechanical{y})$ and $(x'^1,x'^2)=(\mechanical{r},\theta)$. The unprimed coordinates are

$$
x^1=\mechanical{r}\cos\theta=x'^1\cos x'^2,\qquad
x^2=\mechanical{r}\sin\theta=x'^1\sin x'^2.
$$

Differentiate the Cartesian velocity along the path.

$$
0=\frac{d}{dt}\left(\frac{dx^i}{dt}\right)
=\frac{d}{dt}\left(\frac{\partial x^i}{\partial x'^j}\frac{dx'^j}{dt}\right).
$$

The derivative of the Jacobian along the path is

$$
\frac{d}{dt}\left(\frac{\partial x^i}{\partial x'^j}\right)
=\frac{\partial^2 x^i}{\partial x'^j\partial x'^k}\frac{dx'^k}{dt}.
$$

The product rule now gives the equation of motion in the new coordinates.

The product rule gives

$$
0=\frac{\partial x^i}{\partial x'^j}\frac{d^2x'^j}{dt^2}
+\frac{\partial^2x^i}{\partial x'^j\partial x'^k}
\frac{dx'^j}{dt}\frac{dx'^k}{dt}.
$$

Multiply by the inverse Jacobian $\partial x'^\ell/\partial x^i$ to isolate the new coordinate acceleration.

$$
\frac{d^2x'^\ell}{dt^2}+\Gamma'^\ell_{jk}\frac{dx'^j}{dt}\frac{dx'^k}{dt}=0,\qquad
\Gamma'^\ell_{jk}=\frac{\partial x'^\ell}{\partial x^i}
\frac{\partial^2x^i}{\partial x'^j\partial x'^k}.
$$

The coefficient of the product of the velocities is the **Christoffel symbol**. In the inertial Cartesian coordinates of this example the symbols vanish. In curvilinear coordinates they describe how the coordinate components of velocity change along the same geodesic.

For relativity, the indices range from $0$ to $3$. Use an affine parameter $\lambda$ to describe the particle's trajectory, with the coordinate time included among the coordinates $x^\mu(\lambda)$.

![[Kyle Kabasares - Cosmology - Affine parameter along a trajectory.png|**Fig. 4** A trajectory runs from $x^\mu(\lambda_i)$ to $x^\mu(\lambda_f)$ as its parameter increases.]]

With affine parameter $\lambda$, the spacetime geodesic equation is

$$
\frac{d^2x^\mu}{d\lambda^2}
=-\Gamma^\mu_{\alpha\beta}\frac{dx^\alpha}{d\lambda}\frac{dx^\beta}{d\lambda}.
$$

The connection is determined by the metric and its inverse $g^{\mu\nu}$.

$$
\Gamma^\mu_{\alpha\beta}=\frac{g^{\mu\nu}}2
\left[\frac{\partial g_{\alpha\nu}}{\partial x^\beta}
+\frac{\partial g_{\beta\nu}}{\partial x^\alpha}
-\frac{\partial g_{\alpha\beta}}{\partial x^\nu}\right].
$$

For the Friedmann–Robertson–Walker (FRW) metric in cosmic time, $g_{00}=-1$ and $g_{0i}=0$. It follows that

$$
\begin{aligned}
\Gamma^0_{\alpha\beta}
&=-\frac12\left[\frac{\partial g_{\alpha0}}{\partial x^\beta}
+\frac{\partial g_{\beta0}}{\partial x^\alpha}
-\frac{\partial g_{\alpha\beta}}{\partial x^0}\right]\\
&=\frac12\frac{\partial g_{\alpha\beta}}{\partial x^0}.
\end{aligned}
$$

This can be nonzero only when both lower indices are spatial. In particular, $\Gamma^0_{00}=0$ and $\Gamma^0_{0i}=\Gamma^0_{i0}=0$.

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M}_{\odot}$ | $\unit{kg}$ | Solar mass | Reference mass for the high-redshift black hole. |
| $z$ | $1$ | Redshift | Dimensionless shift of the observed wavelength relative to its emitted value. |
| $t$ | $\unit{s}$ | Cosmic time | Age measured from the early-universe origin used in the course. |
| $a$ | $1$ | Scale factor | Ratio of a physical separation at cosmic time $t$ to its value today for a pair of comoving points. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Cosmic temperature on the right axis of the scale-factor figure. |
| $H$, $H_0$ | $\unit{s^{-1}}$ | Hubble parameter and its present value | Fractional expansion rate $\dot a/a$, often quoted in $\unit{km\,s^{-1}\,Mpc^{-1}}$. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Coupling in the Friedmann equation. |
| $\energy{\rho}$, $\energy{\rho}_0$, $\energy{\rho}_{\mathrm{cr}}$ | $\unit{J\,m^{-3}}$ | Cosmic energy densities | Time-dependent, present-day and present-day critical densities. In SI the corresponding mass densities are the energy densities divided by $c^2$. |
| $\thermal{T}_0$ | $\unit{K}$ | Reference temperature | Temperature at $a=1$ in the scaling law. |
| $h$ | $1$ | Reduced Hubble parameter | $H_0$ in units of $\quantity{100}{km\,s^{-1}\,Mpc^{-1}}$. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Converts energy to angular frequency in the units used for $H_0$. |
| $ds^2$ | $\unit{m^2}$ | Squared spacetime interval | Metric contraction of two coordinate differentials when the line element is expressed in length units. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Converts the time coordinate to length units in the flat interval. |
| $\thermal{k}_{\mathrm B}$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Relates temperature to energy and is set to one in natural units. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Spatial coordinates | The Cartesian coordinates and the spherical radial coordinate. |
| $\theta$, $\phi$ | $\unit{rad}$ | Spherical angles | Polar angle and azimuth in the spherical line element. |
| $\tau$ | $\unit{s}$ | Proper time | Elapsed time measured by a clock moving along the timelike path. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $V$ | $\unit{m^3}$ | Proper spatial volume | A shell is evaluated at a fixed cosmic time. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
| $\eta$ | $\unit{s}$ | Conformal time | Defined by $d\eta=dt/a$. The product $\mechanical{c}\eta$ has units of comoving distance. |
| $\ell$, $C_\ell$ | $1$ | Angular multipole and temperature angular power | Here $C_\ell$ is for fractional temperature fluctuations. Higher $\ell$ corresponds to smaller angular scales. |
| $\vec k$, $k$ | $\unit{m^{-1}}$ | Comoving wavevector and wavenumber | The wavevector labels a spatial Fourier mode. The magnitude is distinct from the curvature index $k$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
