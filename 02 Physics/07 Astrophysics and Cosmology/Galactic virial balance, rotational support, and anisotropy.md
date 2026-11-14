---
title: "Galactic virial balance, rotational support, and anisotropy"
---

> [!TLDR]
> Use spatial moments and virial identities to relate a galaxy’s rotation, shape, and velocity dispersion.

## Worked lecture material

At $\mechanical{r}\lesssim2\mechanical{r}_0$, the King approximation describes the inner density profile,

$$
\mechanical{\rho}(\mechanical{r})\simeq
\frac{\mechanical{\rho}_0}{[1+(\mechanical{r}/\mechanical{r}_0)^2]^{3/2}}.
$$

At $\mechanical{r}\gtrsim10\mechanical{r}_0$, the solution approaches the singular isothermal sphere (SIS),

$$
\mechanical{\rho}(\mechanical{r})\simeq
\frac{\mechanical{\sigma}^2}{2\pi G\mechanical{r}^2}.
$$

At large radii, $\mechanical{M}(<\mechanical{r})\propto\mechanical{r}$. The untruncated isothermal sphere therefore has infinite mass. Modeling a real galaxy with it requires a cutoff. The King approximation is valid in the inner region, and the full isothermal profile requires the numerical solution.

##### The virial equations

See BT, section 4.8.3, and MBW, section 5.4.4.

A spatial moment of the Jeans equations relates the total kinetic and gravitational energies of a collisionless stellar system. Start with the first velocity moment in conservative form. Multiply by $\mechanical{M}\mechanical{x}_k$, where $\mechanical{M}$ is the total mass, and integrate over all space. With $\mechanical{\rho}=\mechanical{M}\nu$, this gives

$$
\begin{aligned}
\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{t}}
\left(\mechanical{\rho}\overline{\mechanical{v}_j}\right)d^3\mechanical{x}
={}&-\sum_i\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{\rho}\overline{\mechanical{v}_i\mechanical{v}_j}\right)d^3\mechanical{x}\\
&-\int\mechanical{\rho}\mechanical{x}_k
\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}\,d^3\mechanical{x}.
\end{aligned}
$$

The last integral is the $kj$ component of the **Chandrasekhar potential-energy tensor**,

$$
\energy{W}_{kj}
=-\int\mechanical{\rho}(\mechanical{\vec x})\mechanical{x}_k
\frac{\partial\mechanical{\Phi}}{\partial\mechanical{x}_j}\,d^3\mechanical{x}.
$$

The handwritten definition uses the transposed component $jk$. All integrals extend over the entire system, usually taken to be all space.

Use the product rule on the first integral on the right of the spatial-moment equation. Since $\partial\mechanical{x}_k/\partial\mechanical{x}_i=\delta_{ki}$,

$$
\begin{aligned}
\sum_i\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{\rho}\overline{\mechanical{v}_i\mechanical{v}_j}\right)d^3\mechanical{x}
={}&\sum_i\int\frac{\partial}{\partial\mechanical{x}_i}
\left(\mechanical{x}_k\mechanical{\rho}\overline{\mechanical{v}_i\mechanical{v}_j}\right)
d^3\mechanical{x}\\
&-\int\mechanical{\rho}\overline{\mechanical{v}_k\mechanical{v}_j}\,d^3\mechanical{x}.
\end{aligned}
$$

The divergence theorem turns the first term into the **surface pressure term**,

$$
\energy{\Sigma}_{kj}=
\sum_i\oint\mechanical{x}_k\mechanical{\rho}
\overline{\mechanical{v}_i\mechanical{v}_j}\,n_i\,dS,
$$

where $n_i$ is the outward unit normal component. The lecture sets $\energy{\Sigma}_{kj}=0$ for the derivation. This applies when the integrand falls off sufficiently quickly for the surface flux at infinity to vanish.

Define the **kinetic-energy tensor** and split it into ordered and random contributions,

$$
\begin{aligned}
\energy{K}_{jk}
&=\frac12\int\mechanical{\rho}
\overline{\mechanical{v}_j\mechanical{v}_k}\,d^3\mechanical{x}
=\energy{T}_{jk}+\frac12\energy{\Pi}_{jk},\\
\energy{T}_{jk}
&=\frac12\int\mechanical{\rho}\,
\overline{\mechanical{v}_j}\,\overline{\mechanical{v}_k}\,d^3\mechanical{x},\\
\energy{\Pi}_{jk}
&=\int\mechanical{\rho}\mechanical{\sigma}_{jk}^2\,d^3\mechanical{x}.
\end{aligned}
$$

Here $\energy{T}_{jk}$ accounts for streaming or ordered motions, and $\energy{\Pi}_{jk}/2$ accounts for random motions. This decomposition uses the velocity covariance.

##### Spatial moment recap

With the surface contribution displayed, the relation from the previous pages becomes

$$
\int\mechanical{x}_k\frac{\partial}{\partial\mechanical{t}}
\left(\mechanical{\rho}\overline{\mechanical{v}_j}\right)d^3\mechanical{x}
=-\energy{\Sigma}_{kj}+2\energy{K}_{kj}+\energy{W}_{kj}.
$$

With the surface term set to zero, the spatial moment becomes $2\energy{K}_{kj}+\energy{W}_{kj}=2\energy{T}_{kj}+\energy{\Pi}_{kj}+\energy{W}_{kj}$. Write the equation again with $j$ and $k$ interchanged and average the two equations. The tensors on the right are symmetric for the self-gravitating system considered here, so

$$
\frac12\frac{d}{d\mechanical{t}}
\int\mechanical{\rho}\left(
\mechanical{x}_k\overline{\mechanical{v}_j}
+\mechanical{x}_j\overline{\mechanical{v}_k}
\right)d^3\mechanical{x}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}.
$$

The time derivative can be moved outside the integral because the integration coordinates and domain are fixed. After spatial integration, only time remains as an independent variable, so the derivative is written as an ordinary derivative.

Define the second spatial moment of mass by

$$
\mechanical{I}_{jk}
=\int\mechanical{\rho}\mechanical{x}_j\mechanical{x}_k\,d^3\mechanical{x}.
$$

Differentiate under the integral and use continuity for $\partial\mechanical{\rho}/\partial\mechanical{t}$. Applying the product rule, then using the divergence theorem to discard the vanishing boundary flux, gives

$$
\begin{aligned}
\frac{d\mechanical{I}_{jk}}{d\mechanical{t}}
&=\int\frac{\partial\mechanical{\rho}}{\partial\mechanical{t}}
\mechanical{x}_j\mechanical{x}_k\,d^3\mechanical{x}\\
&=-\sum_i\int\mechanical{x}_j\mechanical{x}_k
\frac{\partial(\mechanical{\rho}\overline{\mechanical{v}_i})}
{\partial\mechanical{x}_i}\,d^3\mechanical{x}\\
&=\sum_i\int\mechanical{\rho}\overline{\mechanical{v}_i}
(\mechanical{x}_k\delta_{ji}+\mechanical{x}_j\delta_{ki})\,d^3\mechanical{x}\\
&=\int\mechanical{\rho}\left(
\mechanical{x}_k\overline{\mechanical{v}_j}
+\mechanical{x}_j\overline{\mechanical{v}_k}
\right)d^3\mechanical{x}.
\end{aligned}
$$

Substitute this result into the symmetrized spatial-moment equation to obtain the **tensor virial theorem**,

$$
\frac12\frac{d^2\mechanical{I}_{jk}}{d\mechanical{t}^2}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}.
$$

In a time-independent equilibrium, $d^2\mechanical{I}_{jk}/d\mechanical{t}^2=0$. The virial equations relate properties integrated over the entire galaxy. If $\mechanical{\rho}$ is the density of a tracer population in a potential produced wholly or partly by other matter, the integrals need only cover the tracer support. For a single star or dark-matter particle, a surface enclosing the orbit gives zero boundary flux.

The standard form above treats a self-gravitating system with vanishing surface pressure. With external gravity and a boundary stress, the notes add separate terms,

$$
\frac12\frac{d^2\mechanical{I}_{jk}}{d\mechanical{t}^2}
=2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}
+\energy{\Sigma}^{(\mathrm{add})}_{jk}+\energy{V}_{jk}.
$$

Here $\energy{\Sigma}^{(\mathrm{add})}_{jk}$ denotes the signed surface term added in the handwritten equation. The earlier definition on [[#The virial equations|the section on The virial equations]] used the outward flux, whose contribution has the opposite sign, with the symmetric part taken for the tensor equation.

The symmetric contribution from an external potential $\mechanical{\Phi}_{\mathrm{ext}}$ is

$$
\energy{V}_{jk}
=-\frac12\int\mechanical{\rho}
\left(
\mechanical{x}_k\frac{\partial\mechanical{\Phi}_{\mathrm{ext}}}{\partial\mechanical{x}_j}
+\mechanical{x}_j\frac{\partial\mechanical{\Phi}_{\mathrm{ext}}}{\partial\mechanical{x}_k}
\right)d^3\mechanical{x}.
$$

See BT, problem 4.38. External and surface terms are relevant for a galaxy embedded in a cluster or for a region within a galaxy or cluster.

The rigid-body inertia tensor $\mechanical{I}'_{jk}$ is related to the second spatial moment used in the virial equations by

$$
\mechanical{I}'_{jk}
=\int\mechanical{\rho}\left(
\lvert\mechanical{\vec x}\rvert^2\delta_{jk}
-\mechanical{x}_j\mechanical{x}_k
\right)d^3\mechanical{x}
=\operatorname{tr}(\mechanical{I})\delta_{jk}-\mechanical{I}_{jk}.
$$

The prime distinguishes the two tensors. See BT, equation D.41.

##### The scalar virial theorem

Taking the trace of the standard tensor virial theorem gives

$$
\frac12\frac{d^2\mechanical{I}}{d\mechanical{t}^2}
=2\energy{K}+\energy{W},
$$

where $\mechanical{I}$, $\energy{K}$, and $\energy{W}$ are the corresponding tensor traces.

The scalar moments are

$$
\begin{aligned}
\mechanical{I}&=\int\mechanical{\rho}\mechanical{r}^2\,d^3\mechanical{x},\\
\energy{K}&=\frac12\int\mechanical{\rho}\overline{\mechanical{v}^2}\,d^3\mechanical{x},\\
\energy{W}&=-\int\mechanical{\rho}\,\mechanical{\vec x}\cdot
\nabla\mechanical{\Phi}\,d^3\mechanical{x}.
\end{aligned}
$$

Here $\mechanical{r}^2=\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2$ and $\mechanical{v}^2=\mechanical{v}_x^2+\mechanical{v}_y^2+\mechanical{v}_z^2$. For Newtonian self-gravity, $\energy{W}$ is the gravitational potential energy. See BT, equation 2.23. If surface pressure or an external potential is present, include the trace of its corresponding tensor term.

In steady state with the standard isolated-system assumptions, the scalar virial theorem gives $2\energy{K}+\energy{W}=0$. With $\energy{E}=\energy{K}+\energy{W}$, this implies

$$
\energy{E}=-\energy{K}=\frac{\energy{W}}2.
$$

The total kinetic energy is also $\energy{K}=\tfrac12\mechanical{M}\langle\mechanical{v}^2\rangle$, where the average is mass weighted over the system.

The mass-weighted mean-square speed over the system is

$$
\langle\mechanical{v}^2\rangle
=\frac{1}{\mechanical{M}}\int\mechanical{\rho}\overline{\mechanical{v}^2}\,d^3\mechanical{x}.
$$

Define the **gravitational radius** $\mechanical{r}_{\mathrm g}=G\mechanical{M}^2/\lvert\energy{W}\rvert$ (BT, equation 2.42). The scalar virial theorem in steady state then gives

$$
\langle\mechanical{v}^2\rangle=\frac{\lvert\energy{W}\rvert}{\mechanical{M}}
=\frac{G\mechanical{M}}{\mechanical{r}_{\mathrm g}}.
$$

The gravitational radius is of the same order as the half-mass radius $\mechanical{r}_{1/2}$. The lecture attributes this observation for simple stellar systems to Spitzer (1969) and gives the King-model estimate in BT, equation 4.249,

$$
\langle\mechanical{v}^2\rangle\simeq0.45\frac{G\mechanical{M}}{\mechanical{r}_{1/2}}.
$$

For a spherical system, the three global Cartesian second moments are equal. Choosing the line of sight as one axis gives $\langle\mechanical{v}^2\rangle=3\langle\mechanical{v}_{\mathrm{los}}^2\rangle$.

In the nonstreaming spherical model the global line-of-sight second moment is its velocity variance, so $\langle\mechanical{v}^2\rangle=3\mechanical{\sigma}_{\mathrm{los}}^2$. With $\mechanical{M}_{1/2}=\mechanical{M}/2$, the King-model estimate gives

$$
3\mechanical{\sigma}_{\mathrm{los}}^2
\simeq0.45\frac{G(2\mechanical{M}_{1/2})}{\mechanical{r}_{1/2}},
\qquad
\mechanical{M}_{1/2}
\simeq\frac{3\mechanical{\sigma}_{\mathrm{los}}^2\mechanical{r}_{1/2}}{0.9G}.
$$

The factor $G$ is in the denominator when the preceding line is solved for mass. The lecture compares this with the Wolf et al. estimator for a dispersion-supported galaxy, which uses a luminosity-weighted line-of-sight dispersion. The mass inside the three-dimensional half-light radius is approximately $3\langle\mechanical{\sigma}_{\mathrm{los}}^2\rangle\mechanical{r}_{1/2}/G$, or $4\langle\mechanical{\sigma}_{\mathrm{los}}^2\rangle\mechanical{R}_{\mathrm e}/G$ in terms of the projected half-light radius. [Wolf et al. (2010)](https://arxiv.org/abs/0908.2995)

The handwritten reference arXiv:1805.00484 points to a study of systematic effects in such mass estimators. [Errani, Peñarrubia, and Walker (2018)](https://arxiv.org/abs/1805.00484)

##### Rotational support and anisotropy

The lecture next asks how rotation and velocity anisotropy contribute to the shape of elliptical galaxies. It starts with an axisymmetric model. See MBW, section 13.1.7, and BT, pp. 363–365.

Consider a galaxy rotating about its symmetry axis $z$ and viewed edge-on, with the $x$ axis along the line of sight. In steady state the tensor virial theorem gives $2\energy{T}_{jk}+\energy{\Pi}_{jk}+\energy{W}_{jk}=0$. The integrated tensors are diagonal in these coordinates. Streaming is purely azimuthal, so $\energy{T}_{zz}=0$.

##### Axisymmetric virial equations

The lecture repeats the steady-state relation and notes that axisymmetry makes the two equatorial diagonal components equal. The two independent equations are

$$
\begin{aligned}
2\energy{T}_{xx}+\energy{\Pi}_{xx}+\energy{W}_{xx}&=0,\\
\energy{\Pi}_{zz}+\energy{W}_{zz}&=0.
\end{aligned}
$$

The equatorial ordered kinetic-energy components are

$$
\energy{T}_{xx}=\frac12\int\mechanical{\rho}(\overline{\mechanical{v}_x})^2\,d^3\mechanical{x},
\qquad
\energy{T}_{yy}=\frac12\int\mechanical{\rho}(\overline{\mechanical{v}_y})^2\,d^3\mechanical{x}.
$$

Axisymmetry and purely azimuthal streaming give

$$
2\energy{T}_{xx}=\energy{T}_{xx}+\energy{T}_{yy}
=\frac12\int\mechanical{\rho}(\overline{\mechanical{v}_\phi})^2\,d^3\mechanical{x}
=\frac12\mechanical{M}\mechanical{v}_0^2.
$$

The speed $\mechanical{v}_0$ is the mass-weighted root-mean-square azimuthal streaming speed. The random-motion terms can be written as

$$
\energy{\Pi}_{xx}=\mechanical{M}\mechanical{\sigma}_0^2,
\qquad
\energy{\Pi}_{zz}=(1-\delta)\mechanical{M}\mechanical{\sigma}_0^2,
$$

where

$$
\mechanical{\sigma}_0^2=\frac1{\mechanical{M}}\int\mechanical{\rho}\mechanical{\sigma}_{xx}^2\,d^3\mechanical{x},
\qquad
\delta=1-\frac{\energy{\Pi}_{zz}}{\energy{\Pi}_{xx}}.
$$

The variance $\mechanical{\sigma}_0^2$ approximates the mass-weighted line-of-sight dispersion squared for this viewing direction. Projection can add apparent dispersion through changes in streaming velocity along the line of sight. See BT, equations 4.27 and 4.263.

Dividing the equatorial virial equation by the vertical one gives

$$
\begin{aligned}
\frac{\energy{W}_{xx}}{\energy{W}_{zz}}
&=\frac{2\energy{T}_{xx}+\energy{\Pi}_{xx}}{\energy{\Pi}_{zz}}\\
&=\frac{\tfrac12\mechanical{M}\mechanical{v}_0^2+\mechanical{M}\mechanical{\sigma}_0^2}
{(1-\delta)\mechanical{M}\mechanical{\sigma}_0^2}\\
&=\frac{1}{1-\delta}\left(1+\frac12\frac{\mechanical{v}_0^2}{\mechanical{\sigma}_0^2}\right).
\end{aligned}
$$

The denominator uses the vertical component $zz$, as in the final handwritten line and the two virial equations.

For a density stratified on similar ellipsoids, the isodensity surfaces are concentric ellipsoidal shells of constant shape. A **spheroid** is an ellipsoid of revolution about its symmetry axis. In an **oblate spheroid** the symmetry axis is the shortest axis, as in a pancake. In a **prolate spheroid** it is the longest axis, as in an American football.

For density stratified on similar ellipsoids, Roberts showed that the ratio $\energy{W}_{xx}/\energy{W}_{zz}$ depends on the shape, independently of the radial density profile. See BT, pp. 95–96. [Roberts (1962)](https://doi.org/10.1086/147461)

For an oblate spheroid the ratio is

$$
\frac{\energy{W}_{xx}}{\energy{W}_{zz}}
=\frac12
\frac{\arcsin e-e\sqrt{1-e^2}}
{e\sqrt{1-e^2}-(1-e^2)\arcsin e},
$$

where $e=\sqrt{1-q^2}=\sqrt{1-(1-\epsilon)^2}$ is the eccentricity, $q$ is the minor-to-major axis ratio, and $\epsilon=1-q$ is the ellipticity.

The ratio is $1$ in the spherical limit and exceeds $1$ for an oblate spheroid with $\epsilon>0$. By the virial relation on the previous page, the flattening requires rotation, positive global anisotropy, or both. For the assumed density geometry, measuring $\epsilon$, $\mechanical{v}_0$, and $\mechanical{\sigma}_0$ allows one to infer $\delta$.

## Source

Kyle Kabasares, *Extragalactic Astrophysics (Physics 241C, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $V$ | $\unit{m^3}$ | Gas volume | Volume used to convert emissivity to luminosity. |
| $\mechanical{R}$, $\mechanical{R}_{\mathrm e}$ | $\unit{kpc}$ | Projected and effective radius | The profile coordinate is the isophote's semimajor axis. The effective radius encloses half the component's projected light. |
| $n$ | $1$ | Sérsic index | Shape parameter of the profile, with $n=4$ for the de Vaucouleurs law. |
| $\mechanical{r}$ | $\unit{m}$ | Spherical radius | Three-dimensional distance from the center. |
| $\mechanical{M}(<\mechanical{r})$ | $\unit{kg}$ | Enclosed gravitating mass | Total mass within spherical radius $\mechanical{r}$. |
| $\mechanical{\Phi}$ | $\unit{m^2\,s^{-2}}$ | Gravitational potential | Gravitational potential energy per unit mass. |
| $\mechanical{\rho}(\mechanical{r})$ | $\unit{kg\,m^{-3}}$ | Mass density profile | Local gravitating mass per unit volume at spherical radius $\mechanical{r}$. |
| $q$, $\epsilon$, $e$ | $1$ | Axis ratio, ellipticity, and eccentricity | Three measures of apparent ellipse shape. |
| $\mechanical{\rho}_0$ | $\unit{kg\,m^{-3}}$ | Density normalization | Multiplicative scale in the approximate deprojection. |
| $n$ | $\unit{m^{-3}}$ | Stellar number density | Number of stars per unit volume. |
| $\overline{\mechanical{v}_i}$ | $\unit{m\,s^{-1}}$ | Mean velocity component | First moment of the conditional velocity distribution. |
| $\energy{V}$ | $\unit{J}$ | Gravitational potential energy | Product of the stellar mass and the gravitational potential. |
| $\overline{\mechanical{v}_i\mechanical{v}_j}$ | $\unit{m^2\,s^{-2}}$ | Mixed second velocity moment | Mean product of two velocity components at a fixed position. |
| $\mechanical{\sigma}_{\mathrm{los}}$ | $\unit{m\,s^{-1}}$ | Line-of-sight velocity dispersion | Width of the projected velocity distribution along the viewing direction. |
| $\mechanical{\sigma}$ | $\unit{m\,s^{-1}}$ | Isothermal velocity dispersion | Constant one-dimensional velocity dispersion. |
| $\mechanical{r}_0$ | $\unit{m}$ | King radius | Length scale set by the velocity dispersion and central density of the nonsingular isothermal sphere. |
| $\energy{W}_{kj}$ | $\unit{J}$ | Potential-energy tensor component | Spatial moment of the gravitational force density. |
| $\energy{\Sigma}_{kj}$ | $\unit{J}$ | Virial surface pressure term | Boundary flux of the position-weighted momentum transport tensor. |
| $\energy{K}_{jk}$ | $\unit{J}$ | Kinetic-energy tensor component | Half the spatial integral of the mass-weighted second velocity moment. |
| $\energy{T}_{jk}$ | $\unit{J}$ | Ordered kinetic-energy tensor component | Kinetic contribution from bulk stellar motions. |
| $\energy{\Pi}_{jk}$ | $\unit{J}$ | Integrated random-motion stress | Twice the random contribution to the kinetic-energy tensor. |
| $\mechanical{I}_{jk}$ | $\unit{kg\,m^2}$ | Second spatial mass moment | Mass-weighted product of two position coordinates. |
| $\energy{V}_{jk}$ | $\unit{J}$ | External virial term | Symmetric spatial moment of the force density due to an external potential. |
| $\mechanical{I}'_{jk}$ | $\unit{kg\,m^2}$ | Rigid-body inertia tensor component | Standard tensor used to relate angular velocity to angular momentum. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Scalar spatial mass moment | Trace of the second spatial moment tensor. |
| $\energy{K}$, $\energy{W}$ | $\unit{J}$ | Total kinetic and gravitational potential energies | Traces of the kinetic and potential-energy tensors in the isolated self-gravitating system. |
| $\mechanical{r}_{\mathrm g}$ | $\unit{m}$ | Gravitational radius | Radius defined by the total mass and gravitational binding energy. |
| $\mechanical{r}_{1/2}$ | $\unit{m}$ | Half-mass radius | Three-dimensional radius enclosing half the system's mass. |
| $\mechanical{M}_{1/2}$ | $\unit{kg}$ | Enclosed mass at the half-mass or half-light radius | Half the total mass in the King-model example and the mass inside the tracer half-light radius in the Wolf et al. estimator. |
| $\mechanical{v}_0$ | $\unit{m\,s^{-1}}$ | Characteristic rotation speed | Mass-weighted root-mean-square azimuthal streaming speed. |
| $\mechanical{\sigma}_0$ | $\unit{m\,s^{-1}}$ | Characteristic equatorial velocity dispersion | Square root of the mass-weighted local variance along the equatorial line of sight. |
| $\delta$ | $1$ | Global velocity anisotropy | One minus the ratio of integrated vertical to equatorial random-motion stress. |
| $a$, $b$ | $1$ | Fundamental-plane coefficients | Logarithmic slopes with respect to velocity dispersion and effective intensity. |
| $K$ | $\unit{kg\,s^2\,m^{-3}}$ | Virial scaling coefficient | Inverse of $2\pi G K_R K_v^2$ in the effective-radius scaling. |
| $\mechanical{r}_{\mathrm g}$ | $\unit{pc}$ | Gyroradius | Radius of a charged particle's motion around a magnetic field line in this section. |
