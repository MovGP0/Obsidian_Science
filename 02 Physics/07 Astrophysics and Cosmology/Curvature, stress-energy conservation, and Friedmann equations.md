---
title: "Curvature, stress-energy conservation, and Friedmann equations"
---

> [!TLDR]
> Use covariant derivatives and the curvature tensor to relate cosmological geometry to stress-energy and expansion.

## Worked lecture material

For a covector, the covariant derivative is

$$
V_{\mu;\nu}=\frac{\partial V_\mu}{\partial x^\nu}-\Gamma^\alpha_{\mu\nu}V_\alpha
=V_{\mu,\nu}-\Gamma^\alpha_{\mu\nu}V_\alpha.
$$

In the spherical example $\vec V=(5\sin^2\theta)\vec e_\theta+(\sin\theta)\vec e_\phi$, the parenthesized factors are the components $V^\theta$ and $V^\phi$. For the spherical coordinate metric, $\Gamma^\theta_{\phi\phi}=-\cos\theta\sin\theta$ and $\Gamma^\phi_{\phi\phi}=0$. The first value follows from $-\tfrac12g^{\theta\theta}\partial_\theta g_{\phi\phi}$, which fixes the sign and radial factors in the handwritten expression.

![[Kyle Kabasares - Cosmology - Vector in a spherical basis.png|**Fig. 10** A vector attached to a point on the spherical surface.]]

##### Covariant derivatives of tensors

A contravariant rank-two tensor gets a connection term for each upper index.

$$
Z^{\mu\nu}{}_{;\alpha}
=Z^{\mu\nu}{}_{,\alpha}+\Gamma^\mu_{\sigma\alpha}Z^{\sigma\nu}
+\Gamma^\nu_{\sigma\alpha}Z^{\mu\sigma}.
$$

##### Riemann tensor

The change from parallel transport around a small parallelogram spanned by $A^\alpha$ and $B^\beta$ is proportional to the curvature. With the orientation and sign used in the notes, the leading term is

$$
V^\mu_{\parallel}(\mathrm{end})=V^\mu(\mathrm{start})
-R^\mu{}_{\nu\alpha\beta}V^\nu(\mathrm{start})A^\alpha B^\beta.
$$

![[Kyle Kabasares - Cosmology - Curvature and infinitesimal transport loop.png|**Fig. 11** The Christoffel symbols vary along the edges of the parallelogram formed by the two displacements.]]

The margin flags uncertainty in the signs of the Riemann tensor. Using the convention $[\nabla_\alpha,\nabla_\beta]V^\mu=R^\mu{}_{\nu\alpha\beta}V^\nu$, write

$$
R^\mu{}_{\nu\alpha\beta}=
\Gamma^\mu_{\nu\beta,\alpha}-\Gamma^\mu_{\nu\alpha,\beta}
+\Gamma^\mu_{\sigma\alpha}\Gamma^\sigma_{\nu\beta}
-\Gamma^\mu_{\sigma\beta}\Gamma^\sigma_{\nu\alpha}.
$$

The Ricci tensor is $R_{\mu\nu}=R^\alpha{}_{\mu\alpha\nu}$ and the Ricci scalar is $R=g^{\mu\nu}R_{\mu\nu}$. The Einstein equation in natural units is

$$
G_{\mu\nu}=R_{\mu\nu}-\tfrac12g_{\mu\nu}R
=8\pi\mechanical{G}\,\energy{T}_{\mu\nu}.
$$

For the flat FRW metric, the components entering the trace are $R_{00}=-3\ddot a/a$ and $R_{ij}=(2\dot a^2+a\ddot a)\delta_{ij}$. Including the inverse metric in the contraction gives

$$
R=(-1)\left(-3\frac{\ddot a}{a}\right)+\frac{3}{a^2}(2\dot a^2+a\ddot a)
=6\left(\frac{\ddot a}{a}+\frac{\dot a^2}{a^2}\right).
$$

##### Conservation of energy and momentum

In curved spacetime the conservation law uses the covariant divergence $\nabla_\mu\energy{T}^{\mu\nu}=0$. The partial divergence written in the notes applies in inertial Cartesian coordinates in flat spacetime. The Einstein–Hilbert action is $\energy{S}\propto\int\sqrt{-g}\,R\,d^4x$, where $g=\det(g_{\mu\nu})$.

For a homogeneous isotropic perfect fluid in comoving coordinates, the mixed stress-energy tensor is diagonal.

$$
(\energy{T}^\mu{}_\nu)=\operatorname{diag}(-\energy{\rho},\thermal{p},\thermal{p},\thermal{p}),
\qquad
\energy{T}_{\mu\nu}=g_{\mu\alpha}\energy{T}^\alpha{}_\nu.
$$

Lower the upper index of $\energy{T}^\mu{}_\nu$ using the metric $g_{\mu\alpha}=\operatorname{diag}(-1,a^2,a^2,a^2)$.

$$
(\energy{T}_{\mu\nu})=\operatorname{diag}
\bigl(\energy{\rho},a^2\thermal{p},a^2\thermal{p},a^2\thermal{p}\bigr).
$$

In particular, $G_{00}=8\pi\mechanical{G}\energy{\rho}$. The handwritten $\rho^2$ in the matrix and equation is read as $\rho$ since lowering the index only multiplies the time component by $-1$.

To compute the temporal Ricci component from the connection, use

$$
R_{00}=\Gamma^\alpha_{00,\alpha}-\Gamma^\alpha_{0\alpha,0}
+\Gamma^\alpha_{\beta\alpha}\Gamma^\beta_{00}
-\Gamma^\alpha_{\beta0}\Gamma^\beta_{0\alpha}.
$$

The scalar trace starts with $g^{00}R_{00}=-R_{00}$, and the diagonal inverse metric supplies the three spatial terms $a^{-2}R_{ii}$.

The terms containing $\Gamma^\alpha_{00}$ vanish. The spatial trace $\Gamma^\alpha_{0\alpha}$ is $3H$, and the product $\Gamma^\alpha_{\beta0}\Gamma^\beta_{0\alpha}$ is $3H^2$. Restoring the sum over all three spatial directions gives

$$
R_{00}=-3(\dot H+H^2)
=-3\left[\frac{a\ddot a-\dot a^2}{a^2}+\frac{\dot a^2}{a^2}\right]
=-3\frac{\ddot a}{a}.
$$

Use $G_{00}=R_{00}+\tfrac12R$ and the Ricci scalar from [[#Conservation of energy and momentum|the section on Conservation of energy and momentum]] to get $G_{00}=3H^2$. The boxed equation is the first Friedmann equation for the spatially flat case.

$$
\left(\frac{\dot a}{a}\right)^2=\frac{8\pi\mechanical{G}\energy{\rho}}3.
$$

The left side is the square of the fractional expansion rate. Its inverse sets a timescale related to the density sourcing the expansion. The analogous gravitational infall timescale is $t_{\mathrm{ff}}\sim 1/\sqrt{\mechanical{G}\mechanical{\rho}}$ for mass density $\mechanical{\rho}\sim\mechanical{m}/\mechanical{r}^3$. This gives $t_{\mathrm{ff}}\sim\sqrt{\mechanical{r}^3/(\mechanical{G}\mechanical{m})}$, using the infall distance together with the acceleration scale $\mechanical{G}\mechanical{m}/\mechanical{r}^2$.

For the flat universe, $H^2(t)=(\dot a/a)^2=8\pi\mechanical{G}\energy{\rho}/3$ in natural units. With the speed of light explicit, the flat metric in spherical and Cartesian coordinates is

$$
\begin{aligned}
ds^2&=-\mechanical{c}^2dt^2+a^2(t)\left(d\mechanical{r}^2+\mechanical{r}^2d\Omega^2\right),\\
ds^2&=-\mechanical{c}^2dt^2+a^2(t)
\left(d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2\right),
\qquad d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2.
\end{aligned}
$$

The notes use the fixed-radius $2+1$ dimensional example $ds^2=-\mechanical{c}^2dt^2+\mechanical{r}^2d\Omega^2$ to isolate the angular geometry.

A positively curved three-dimensional spatial slice can be represented as a sphere embedded in four Euclidean spatial coordinates.

$$
\begin{aligned}
(x^1)^2+(x^2)^2+(x^3)^2+(x^4)^2&=A^2,\\
ds^2&=-\mechanical{c}^2dt^2+a^2(t)\sum_{i=1}^4(dx^i)^2.
\end{aligned}
$$

The differentials are constrained by $\sum_{i=1}^4 x^i\,dx^i=0$. On a patch with $x^4\ne0$,

$$
(dx^4)^2=\left(\frac{-x^1dx^1-x^2dx^2-x^3dx^3}{x^4}\right)^2.
$$

Substituting this into the interval encodes the spatial curvature in a metric on the three independent coordinates.

Hyperspherical coordinates simplify the induced metric of the positively curved three-sphere. The embedding with radius $R=A$ can be written

$$
\begin{aligned}
x_1&=R\sin\chi\sin\theta\cos\phi,\\
x_2&=R\sin\chi\sin\theta\sin\phi,\\
x_3&=R\sin\chi\cos\theta,\\
x_4&=R\cos\chi.
\end{aligned}
$$

Using the unit-radius normalization in the lecture, the interval is

$$
ds^2=-\mechanical{c}^2dt^2+a^2(t)
\bigl[d\chi^2+\sin^2\chi(d\theta^2+\sin^2\theta\,d\phi^2)\bigr].
$$

If the embedding keeps an explicit comoving radius $R$, the spatial bracket is multiplied by $R^2$. For small $\chi$, $\sin\chi\approx\chi$ and the spatial metric approaches the flat spherical-coordinate expression. To compute the volume element, take the square root of the determinant of the spatial metric, the matrix of inner products of the spatial coordinate basis vectors.

A rank-two contravariant tensor transforms as

$$
T'^{\mu\nu}=\frac{\partial x'^\mu}{\partial x^\alpha}
\frac{\partial x'^\nu}{\partial x^\beta}T^{\alpha\beta}.
$$

This applies, for example, to the stress-energy tensor of photons when relating a spacecraft's frame to the cosmic microwave background (CMB) rest frame. That transformation calls for distinguishing the time coordinates in the two frames.

The general FRW line element is

$$
ds^2=-\mechanical{c}^2dt^2+a^2(t)\left[\frac{dr^2}{1-kr^2}+r^2\left(d\theta^2+\sin^2\theta\,d\phi^2\right)\right].
$$

The spatial geometry is flat when $k=0$, positively curved when $k>0$, and negatively curved when $k<0$. A suitable coordinate normalization gives $k=0,+1,-1$, respectively.

Restricting to a sphere of fixed unit radius and setting $a(t)=1$ gives a $2+1$-dimensional line element $ds^2=-\mechanical{c}^2dt^2+d\Omega^2$, with $d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2$.

For the operational details of extragalactic astronomy, return to the full FRW metric and choose the source location to have coordinates $r=r_1$, $\theta=0$, and $\phi=0$.

In terms of the comoving radial distance $r$, the FRW line element is

$$
ds^2=-\mechanical{c}^2dt^2+a^2(t)\left[dr^2+S_k^2(r)\,d\Omega^2\right],
\qquad d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2,
$$

where the normalized curvature index $k$ determines the function

$$
S_k(r)=
\begin{cases}
R_0\sin(r/R_0), & k=+1,\\
r, & k=0,\\
R_0\sinh(r/R_0), & k=-1.
\end{cases}
$$

To find the volume of a shell spanning redshifts $z$ to $z+dz$, take the spatial part of the metric at a fixed time $t$. In coordinates $(t,r,\theta,\phi)$, the full metric is diagonal with entries $-\mechanical{c}^2$, $a^2$, $a^2S_k^2$, and $a^2S_k^2\sin^2\theta$.

For a spatial metric $\gamma$, the volume integral is $\int\sqrt{\det\gamma}\,d^3x$. For example, ordinary spherical coordinates give $ds^2=dr^2+r^2d\theta^2+r^2\sin^2\theta\,d\phi^2$ and a volume element $r^2\sin\theta\,dr\,d\theta\,d\phi$. For the FRW spatial slice,

$$
\det\gamma=a^6S_k^4(r)\sin^2\theta,
\qquad
\sqrt{\det\gamma}=a^3S_k^2(r)\sin\theta.
$$

For a shell at fixed $t$, the angular integral gives $4\pi$. Its volume is

$$
\begin{aligned}
\int_0^{2\pi}\int_0^\pi\int_r^{r+dr}
a^3(t)S_k^2(r')\sin\theta\,dr'\,d\theta\,d\phi
&=4\pi\int_r^{r+dr}a^3(t)S_k^2(r')\,dr',\\
dV&=4\pi a^3(t)S_k^2(r)\frac{dr}{dz}\,dz.
\end{aligned}
$$

The cosmological model supplies the mapping from redshift $z$ to comoving distance $r$. Light travels on a null geodesic from the source at $(r,\theta,\phi)$ to the observer. For a radial ray, $ds^2=0$ gives $\mechanical{c}\,dt=a(t)|dr|$, so

$$
r=\int_{t_{\mathrm{em}}}^{t_{\mathrm{rec}}}\frac{\mechanical{c}\,dt}{a(t)}.
$$

Thus the distance is tied to the time light spends traveling. With $a(t_{\mathrm{rec}})=1$ and $a(t_{\mathrm{em}})=1/(1+z)$, use $z=1/a-1$, $da/dz=-1/(1+z)^2$, and $H=\dot a/a$ to change variables.

$$
\begin{aligned}
r(z)
&=\int_{a(t_{\mathrm{em}})}^1\frac{\mechanical{c}}{a}\frac{dt}{da}\,da
=\int_{a(t_{\mathrm{em}})}^1\frac{\mechanical{c}}{a^2H}\,da\\
&=\int_z^0\frac{\mechanical{c}}{a^2H}\frac{da}{dz'}\,dz'
=\int_0^z\frac{\mechanical{c}}{a^2 H(z')(1+z')^2}\,dz'
=\int_0^z\frac{\mechanical{c}}{H(z')}\,dz'.
\end{aligned}
$$

Combining the shell volume with $dr/dz=\mechanical{c}/H(z)$ gives the proper volume of a full-sky redshift slice, evaluated at the epoch corresponding to $z$.

$$
dV=\frac{4\pi}{(1+z)^3}S_k^2(r)\frac{\mechanical{c}}{H(z)}\,dz.
$$

An object of transverse length $\ell$ subtends an angle $d\theta$ such that $\ell=a(t)S_k(r)\,d\theta$. The angular diameter distance is therefore

$$
D_{\mathrm{A}}=\frac{\ell}{d\theta}=a(t)S_k(r)=\frac{S_k(r)}{1+z}.
$$

Writing $D_{\mathrm{H}}(z)=\mechanical{c}/H(z)$ gives $dV=4\pi D_{\mathrm{A}}^2D_{\mathrm{H}}(z)\,dz/(1+z)$.

![[Kyle Kabasares - Cosmology - source angular extent and luminosity.png|**Fig. 12** An extended source with luminosity $L$ subtends an angle $\theta$ at the observer.]]

A source luminosity $\energy{L}$ is energy emitted per unit time. The observed flux $\energy{F}$ is energy received per unit time per unit area. In the flat case the photons spread over an area $4\pi r^2$ at reception, with $a(t_{\mathrm{rec}})=1$. The photon energies decrease by $1+z$ and the arrival interval increases by the same factor.

$$
\delta t_{\mathrm{obs}}=(1+z)\,\delta t_{\mathrm{em}},
\qquad
\energy{E}_{\mathrm{obs}}=\frac{\energy{E}_{\mathrm{em}}}{1+z}.
$$

For $dN$ photons,

$$
\energy{F}
=\frac{\energy{E}_{\mathrm{obs}}}{4\pi r^2}\frac{dN}{dt_{\mathrm{obs}}}
=\frac{1}{4\pi r^2(1+z)^2}\energy{E}_{\mathrm{em}}\frac{dN}{dt_{\mathrm{em}}}
=\frac{\energy{L}_{\mathrm{source}}}{4\pi r^2(1+z)^2}.
$$

Bolometric surface brightness falls as $(1+z)^{-4}$. The notes also give $\unit{erg\,cm^{-2}\,s^{-1}\,Hz^{-1}\,sr^{-1}}$, the units of specific surface brightness per unit frequency.

##### Friedmann equations

With $\energy{\rho}$ the energy density, $\thermal{p}$ the pressure, and $k\in\{+1,-1,0\}$, the expansion and acceleration equations are

$$
H^2=\frac{8\pi\mechanical{G}\energy{\rho}}{3\mechanical{c}^2}-\frac{k\mechanical{c}^2}{a^2R_0^2},
\qquad
\frac{\ddot a}{a}=-\frac{4\pi\mechanical{G}}{3\mechanical{c}^2}(\energy{\rho}+3\thermal{p}).
$$

The curvature scale for nonzero $k$ is set by $R_0$. The factors of $\mechanical{c}$ in the density terms convert energy density to mass-equivalent density and may be omitted in units with $\mechanical{c}=1$.

How do density and pressure evolve? Stress–energy conservation requires

$$
\nabla_\mu\energy{T}^\mu{}_0=0,
\qquad
\nabla_\mu\energy{T}^\mu{}_i=0.
\tag{2.55}
$$

The time component can also be derived from thermodynamics. For a comoving volume $V$,

$$
d\thermal{Q}=d\energy{U}+\thermal{p}\,dV,
\qquad
\energy{U}=\energy{\rho}V,
\qquad
d\energy{U}=V\,d\energy{\rho}+\energy{\rho}\,dV.
$$

The change $dV$ is related to the change in $a$. In a homogeneous and isotropic universe the comoving region expands adiabatically, with $d\thermal{Q}=0$.

The proper volume is $V=a^3V_{\mathrm{com}}$, where $V_{\mathrm{com}}$ is the volume measured today if $a(t_0)=1$. Thus

$$
\frac{dV}{V}=\frac{3V_{\mathrm{com}}a^2\,da}{V_{\mathrm{com}}a^3}=3\frac{da}{a}.
$$

Substitution into the first law gives

$$
\begin{aligned}
d\energy{\rho}+\energy{\rho}\frac{dV}{V}&=-\thermal{p}\frac{dV}{V},\\
d\energy{\rho}&=-3(\energy{\rho}+\thermal{p})\frac{da}{a},\\
\frac{d\energy{\rho}}{dt}&=-3(\energy{\rho}+\thermal{p})\frac{1}{a}\frac{da}{dt}.
\end{aligned}
$$

For nonrelativistic matter, $\mechanical{v}\ll\mechanical{c}$ and $\thermal{p}\ll\energy{\rho}$. The density equation reduces to

$$
\frac{d\energy{\rho}}{dt}=-\frac{3\energy{\rho}}{a}\frac{da}{dt},
\qquad
\frac{d\energy{\rho}}{da}=-\frac{3\energy{\rho}}{a},
\qquad
\energy{\rho}(t)=\energy{\rho}(t_0)\left[\frac{a(t_0)}{a(t)}\right]^3.
$$

The radiation case instead has $\thermal{p}=\energy{\rho}/3$.

For radiation, inserting $\thermal{p}=\energy{\rho}/3$ gives

$$
\frac{d\energy{\rho}}{da}=-\frac{3\energy{\rho}}{a}\frac43=-\frac{4\energy{\rho}}{a},
\qquad
\energy{\rho}_{\mathrm{r}}(t)=\energy{\rho}_{\mathrm{r}}(t_0)\left[\frac{a(t_0)}{a(t)}\right]^4.
$$

A component with $\thermal{p}=-\energy{\rho}$ instead satisfies $d\energy{\rho}/da=0$. This is the equation of state associated with the cosmological constant. Including $\Lambda$, the Einstein equation is

$$
\underbrace{R_{\mu\nu}-\tfrac12 g_{\mu\nu}R}_{G_{\mu\nu}}
+\Lambda g_{\mu\nu}
=\frac{8\pi\mechanical{G}}{\mechanical{c}^4}\energy{T}_{\mu\nu}.
$$

The notes write this equation with $\mechanical{c}=1$. Dimensionally, $[\Lambda]=\mathrm{L}^{-2}$. For stress–energy components expressed as energy per volume, the product $\mechanical{G}\energy{T}_{\mu\nu}$ has dimensions

$$
\frac{\mathrm{L}^3}{\mathrm{M}\,\mathrm{T}^2}
\frac{\mathrm{M}(\mathrm{L}/\mathrm{T})^2}{\mathrm{L}^3}
=\frac{(\mathrm{L}/\mathrm{T})^4}{\mathrm{L}^2}.
$$

Dividing by $\mechanical{c}^4$ leaves inverse length squared.

![[Kyle Kabasares - Cosmology - radiation matter and vacuum density.png|**Fig. 13** Log density versus log scale factor. Radiation has slope $-4$, matter has slope $-3$, and vacuum energy has slope zero. The notes indicate radiation domination at early times. The mark $\log a=0$ denotes today.]]

Suppose $\energy{\rho}=\energy{\rho}_{\mathrm{mat}}+\energy{\rho}_{\mathrm{rad}}+\energy{\rho}_x$, with negligible matter pressure, $\thermal{p}_{\mathrm{rad}}=\energy{\rho}_{\mathrm{rad}}/3$, and $\thermal{p}_x=-\energy{\rho}_x$. In units with $\mechanical{c}=1$, the acceleration equation becomes

$$
\frac{\ddot a}{a}
=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})
=-\frac{4\pi\mechanical{G}}{3}
\left(\energy{\rho}_{\mathrm{mat}}+2\energy{\rho}_{\mathrm{rad}}-2\energy{\rho}_x\right).
$$

At fixed comoving radius $r$, the proper radial distance $x=ar$ satisfies $\ddot x=\ddot a\,r$.

For the FRW metric, $G_{\mu\nu}=8\pi\mechanical{G}\energy{T}_{\mu\nu}$ yields

$$
\frac{\ddot a}{a}=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p}),
\qquad
\left(\frac{\dot a}{a}\right)^2
=\frac{8\pi\mechanical{G}\energy{\rho}}{3}-\frac{k}{a^2R_0^2},
\qquad
k\in\{0,\pm1\}.
$$

Stress–energy conservation, $\nabla_\mu\energy{T}^\mu{}_\nu=0$, gives the energy equation

$$
\frac{d\energy{\rho}}{dt}=-3\frac{\dot a}{a}(\energy{\rho}+\thermal{p}).
$$

![[Kyle Kabasares - Cosmology - dark matter and dark photons.png|**Fig. 14** The margin sketch illustrates a possible interaction between dark matter and dark radiation, labeled dark photons.]]

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $z$ | $1$ | Redshift | Dimensionless shift of the observed wavelength relative to its emitted value. |
| $t$ | $\unit{s}$ | Cosmic time | Age measured from the early-universe origin used in the course. |
| $a$ | $1$ | Scale factor | Ratio of a physical separation at cosmic time $t$ to its value today for a pair of comoving points. |
| $H$, $H_0$ | $\unit{s^{-1}}$ | Hubble parameter and its present value | Fractional expansion rate $\dot a/a$, often quoted in $\unit{km\,s^{-1}\,Mpc^{-1}}$. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | Coupling in the Friedmann equation. |
| $\energy{\rho}$, $\energy{\rho}_0$, $\energy{\rho}_{\mathrm{cr}}$ | $\unit{J\,m^{-3}}$ | Cosmic energy densities | Time-dependent, present-day and present-day critical densities. In SI the corresponding mass densities are the energy densities divided by $c^2$. |
| $ds^2$ | $\unit{m^2}$ | Squared spacetime interval | Metric contraction of two coordinate differentials when the line element is expressed in length units. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Converts the time coordinate to length units in the flat interval. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Spatial coordinates | The Cartesian coordinates and the spherical radial coordinate. |
| $\theta$, $\phi$ | $\unit{rad}$ | Spherical angles | Polar angle and azimuth in the spherical line element. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Radial speed | Rate of change of radial position in the chosen inertial frame. It is expressed in units of the speed of light in $\gamma$. |
| $\gamma$ | $1$ | Lorentz factor | Ratio of coordinate time to proper time for inertial motion. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $\energy{E}$ | $\unit{J}$ | Photon energy | Energy measured by a comoving observer, equal to $\mechanical{P}^0$ in natural units. |
| $\energy{T}^\mu{}_\nu$ | $\unit{J\,m^{-3}}$ | Stress-energy tensor | Encodes energy density, momentum density, energy flux and stresses. The unit applies to local orthonormal components. |
| $\thermal{p}$ | $\unit{Pa}$ | Isotropic pressure | Spatial diagonal component of the comoving perfect-fluid stress-energy tensor. |
| $\energy{S}$ | $\unit{J\,s}$ | Gravitational action | Einstein–Hilbert action, proportional to the spacetime integral of the Ricci scalar with the invariant volume element. |
| $t_{\mathrm{ff}}$ | $\unit{s}$ | Gravitational infall time | Characteristic time for collapse under self-gravity. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | Mass per volume in the dimensional estimate of the infall time. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $\chi$ | $\unit{rad}$ | Hyperspherical radial angle | Coordinate with $x_4=R\cos\chi$ in the embedding. |
| $k$ | $\unit{m^{-2}}$ | Spatial curvature parameter | Units apply when $r$ has dimensions of length and $a$ is dimensionless. |
| $R_0$ | $\unit{m}$ | Comoving curvature radius | Used in the positively and negatively curved cases. |
| $S_k(r)$ | $\unit{m}$ | Comoving transverse radius | Determines the area of a sphere at comoving radial distance $r$. |
| $V$ | $\unit{m^3}$ | Proper spatial volume | A shell is evaluated at a fixed cosmic time. |
| $D_{\mathrm{A}}$ | $\unit{m}$ | Angular diameter distance | Transverse proper size divided by observed angular size. |
| $D_{\mathrm{H}}(z)$ | $\unit{m}$ | Hubble length at redshift $z$ | The ratio $\mechanical{c}/H(z)$ used in the shell-volume formula. |
| $\energy{L}$ | $\unit{W}$ | Luminosity | Energy emitted per unit source time. |
| $\energy{F}$ | $\unit{W\,m^{-2}}$ | Radiative flux | Energy received per unit observer time and area. |
| $\thermal{Q}$ | $\unit{J}$ | Heat transferred | Vanishes for the adiabatic expansion considered here. |
| $\energy{U}$ | $\unit{J}$ | Internal energy in a comoving region | The product of energy density and the proper volume of the region. |
| $\Lambda$ | $\unit{m^{-2}}$ | Cosmological constant | Coefficient of the metric term in the Einstein equation. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
| $\ell$, $C_\ell$ | $1$ | Angular multipole and temperature angular power | Here $C_\ell$ is for fractional temperature fluctuations. Higher $\ell$ corresponds to smaller angular scales. |
| $\vec k$, $k$ | $\unit{m^{-1}}$ | Comoving wavevector and wavenumber | The wavevector labels a spatial Fourier mode. The magnitude is distinct from the curvature index $k$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
