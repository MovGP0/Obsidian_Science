---
title: "Cosmology (Physics 240B, UC Irvine 2018)"
---

> [!TLDR]
> Lecture notes on the expanding universe, primordial nucleosynthesis, the cosmic microwave background, and the growth of structure. They derive the Friedmann equations from the spacetime metric and use the Boltzmann and Einstein equations to track perturbations across matter–radiation equality.

Source notes by Kyle Kabasares. [[Cosmology (Physics 240B, UC Irvine 2018).pdf|Original PDF]].

Transcribed PDF pages 1–100 of 100.

### PDF page 1

#### Physics 240B. Modern Cosmology with Manoj Kaplinghat

Kaplinghat trained as a particle physicist and joked about finding it boring. The opening questions include how a black hole could already have a mass of about $10^9\,\mechanical{M}_{\odot}$ at redshift $z=7$. The course will focus on the expansion of the universe. Variability in active galactic nuclei (AGN) may serve as a tool for cosmology. Ryden is recommended as a supplementary text, alongside papers assigned for reading.

The core Big Bang cosmology topics are the basics of the expanding universe, the cosmic microwave background (annotated at an age of about $300{,}000$ years), and nucleosynthesis (annotated with the early timescale of about $\quantity{1}{s}$). Possible additional topics are future cosmological probes such as weak lensing, the Boltzmann equations, inflation as a separate extension to the Big Bang framework, and reionization.

### PDF page 2

Growth of perturbations and galaxy formation are further possible topics. The main tools are the Boltzmann equation and general relativity. Prerequisites include metrics, four-vectors, and special relativity.

Homework and classwork count for two-thirds of the grade, and the final exam counts for one-third. Homework is due on Tuesdays.

#### Chapter 1 of Dodelson's *Modern Cosmology*

![[Kyle Kabasares - Cosmology - Scale factor through radiation and matter domination.png|**Fig. 1** Cosmic scale factor $a$ and temperature $\thermal{T}$ versus cosmic time $t$. The figure marks the regimes $a\propto t^{1/2}$ during radiation domination and $a\propto t^{2/3}$ during matter domination, with $a=1$ today.]]

### PDF page 3

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

### PDF page 4

The present Hubble parameter is written in terms of the dimensionless $h$ as

$$
H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}
\approx\frac{h}{\quantity{0.98\times10^{10}}{yr}}
\approx\frac{\quantity{2.133\times10^{-33}h}{eV}}{\hbar}.
$$

The lecture notes quote $h=0.72\pm0.08$. They give the critical density in mass-equivalent units as $\energy{\rho}_{\mathrm{cr}}=\quantity{1.88h^2\times10^{-29}}{g\,cm^{-3}}$. If the particle scattering rate exceeds the expansion rate, interactions can keep the particles in equilibrium.

#### October 2, 2018 lecture. General relativity

The lecture introduces the equivalence principle, covariance, vector and tensor transformations, metrics, the scale factor in a smooth expanding universe, and geodesics as the paths of freely moving particles.

The metric determines the line element and raises and lowers indices.

$$
ds^2=g_{\mu\nu}\,dx^\mu dx^\nu,\qquad V^\mu=g^{\mu\nu}V_\nu.
$$

The spacetime indices run from $0$ to $3$, with $1$ through $3$ labeling the spatial coordinates.

### PDF page 5

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

### PDF page 6

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

#### Equivalence principle and covariance

The notes connect the equivalence principle to $\mechanical{F}=\mechanical{m}\mechanical{a}$. Locally, a uniform gravitational field has the same effect as an acceleration of the reference frame. A local freely falling coordinate system can be chosen in which the metric at the event takes the Minkowski form. Astronauts on the International Space Station are in free fall under Earth's gravity.

### PDF page 7

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

#### Covariance

In the lecture's wording, the “covariance business” means the equation keeps the same form in every coordinate system. Under $x^\mu\mapsto x'^\mu$, the components of the metric and coordinate differentials transform together in the expression for $ds^2$.

![[Kyle Kabasares - Cosmology - Cartesian polar and rotated coordinates.png|**Fig. 2** The same point can be described in Cartesian or polar coordinates, and the coordinate axes can also be rotated.]]

### PDF page 8

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

#### Metric of the expanding universe

For a smooth, spatially flat model in units with $\mechanical{c}=1$,

$$
ds^2=-dt^2+a^2(t)\bigl(d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2\bigr).
$$

The scale factor multiplies every physical separation between fixed comoving points. The notes contrast this with a spherically symmetric inhomogeneous form $ds^2=-dt^2+A^2(t,\mechanical{r})\,d\mechanical{r}^2+B^2(\mechanical{r},t)\,d\Omega^2$, using $A,B$ for the radial metric coefficients and $d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2$.

![[Kyle Kabasares - Cosmology - Comoving point separation.png|**Fig. 3** Two fixed comoving points. The physical separation projected along the $x$ axis is $a(t)(\mechanical{x}_2-\mechanical{x}_1)$.]]

### PDF page 9

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

#### 2.1.2 The geodesic equation

A geodesic is the path followed by a freely moving particle. In flat spacetime and inertial Cartesian coordinates, $d^2 x^i/dt^2=0$. What form does this equation take in polar or spherical coordinates? Start with the chain rule

$$
\frac{dx^i}{dt}=\frac{\partial x^i}{\partial x'^j}\frac{dx'^j}{dt}.
$$

### PDF page 10

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

### PDF page 11

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

### PDF page 12

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

### PDF page 13

For the spatially flat FRW metric in comoving Cartesian coordinates, $g_{ij}=a^2\delta_{ij}$. The nonzero Christoffel symbols are

$$
\Gamma^0_{ij}=a\dot a\,\delta_{ij},\qquad
\Gamma^i_{0j}=\Gamma^i_{j0}=\frac{\dot a}{a}\delta^i{}_j.
$$

For a photon, normalize the affine parameter so that $\mechanical{P}^\alpha=dx^\alpha/d\lambda$. With $x^0=t$ and $\mechanical{P}^0=\energy{E}$ in natural units, $d/d\lambda=\energy{E}\,d/dt$ along the trajectory. The time component of the geodesic equation and the null condition give

$$
\begin{aligned}
\energy{E}\frac{d\energy{E}}{dt}&=-\Gamma^0_{ij}\mechanical{P}^i\mechanical{P}^j,\\
g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu
&=-\energy{E}^2+a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j=0.
\end{aligned}
$$

Thus $d\energy{E}/dt+(\dot a/a)\energy{E}=0$. The product $a\energy{E}$ is constant, so the photon energy scales as $a^{-1}$.

#### October 4, 2018 lecture. Geodesics and coordinate transformations

A contravariant vector transforms as $V'^\mu=(\partial x'^\mu/\partial x^\alpha)V^\alpha$ under $x\mapsto x'$. The notes call this the usual vector transformation.

### PDF page 14

The covector transformation is $V'_\mu=(\partial x^\alpha/\partial x'^\mu)V_\alpha$. For example, the gradient of a scalar has covector components $W_\mu=\partial S(x)/\partial x^\mu$, with $S'(x')=S(x)$ for the same event.

A vector can be expanded in a basis as $\vec V=V^\mu\vec e_\mu$. In a Cartesian spatial basis this reads $\vec V=V^x\hat x+V^y\hat y+V^z\hat z$.

A simple example of a rank-two contravariant tensor is $T^{\mu\nu}=A^\mu B^\nu$. In component form,

$$
\begin{pmatrix}
T^{00}&T^{01}&\cdots\\
T^{10}&T^{11}&\cdots\\
\vdots&\vdots&\ddots
\end{pmatrix}
=
\begin{pmatrix}
A^0B^0&A^0B^1&\cdots\\
A^1B^0&A^1B^1&\cdots\\
\vdots&\vdots&\ddots
\end{pmatrix}.
$$

Each upper index transforms as a vector index. A mixed tensor $T^\mu{}_\nu$ has rows labeled by the upper index and columns by the lower index. Its lower index transforms with the inverse Jacobian.

$$
\begin{aligned}
T'^{\mu\nu}&=\frac{\partial x'^\mu}{\partial x^\alpha}
\frac{\partial x'^\nu}{\partial x^\beta}T^{\alpha\beta},\\
T'^\mu{}_\nu&=\frac{\partial x'^\mu}{\partial x^\alpha}
\frac{\partial x^\beta}{\partial x'^\nu}T^\alpha{}_\beta.
\end{aligned}
$$

### PDF page 15

#### Free particle in flat spacetime

In inertial Cartesian coordinates, $d(dx^i/dt)/dt=0$. Under $x^\mu\mapsto x'^\mu$, the chain rule gives

$$
\frac{dx'^\mu}{dt}=\frac{\partial x'^\mu}{\partial x^\alpha}\frac{dx^\alpha}{dt},
\qquad
\frac{dx^\alpha}{dt}=\frac{\partial x^\alpha}{\partial x'^\mu}\frac{dx'^\mu}{dt}.
$$

Apply the product rule to the second formula with $\alpha=i$.

$$
0=\frac{d}{dt}\left(\frac{\partial x^i}{\partial x'^\mu}\frac{dx'^\mu}{dt}\right)
=\frac{\partial x^i}{\partial x'^\mu}\frac{d^2x'^\mu}{dt^2}
+\frac{\partial^2x^i}{\partial x'^\beta\partial x'^\mu}
\frac{dx'^\beta}{dt}\frac{dx'^\mu}{dt}.
$$

Here $t=x^0$ parametrizes the Cartesian trajectory, and the spatial coordinates $x^1,x^2,x^3$ vary along the path.

### PDF page 16

Multiplying the transformed equation by the inverse Jacobian produces the Christoffel term. In the flat-spacetime example, write the initial Cartesian equation with spacetime indices, including $d^2x^0/dt^2=0$ since $x^0=t$. Then

$$
\frac{d^2x'^\mu}{dt^2}
+\Gamma'^\mu_{\alpha\beta}\frac{dx'^\alpha}{dt}\frac{dx'^\beta}{dt}=0,\qquad
\Gamma'^\mu_{\alpha\beta}=\frac{\partial x'^\mu}{\partial x^\sigma}
\frac{\partial^2x^\sigma}{\partial x'^\alpha\partial x'^\beta}.
$$

The Christoffel symbols of the metric connection can also be written using commas for ordinary partial derivatives, as in $V_{\mu,\sigma}=\partial V_\mu/\partial x^\sigma$.

$$
\Gamma^\mu_{\alpha\beta}=\tfrac12g^{\mu\sigma}
\bigl(g_{\sigma\alpha,\beta}+g_{\sigma\beta,\alpha}-g_{\alpha\beta,\sigma}\bigr).
$$

![[Kyle Kabasares - Cosmology - Parallel transport on a plane.png|**Fig. 5** A vector translated parallel to itself on a flat plane retains its direction.]]

![[Kyle Kabasares - Cosmology - Parallel transport on a sphere.png|**Fig. 6** Parallel transport around a closed loop on a curved sphere can return the vector with a different orientation.]]

### PDF page 17

The connection describes how coordinate basis vectors change from point to point. In the two-dimensional example, the change of the second basis vector per unit coordinate step along the first is

$$
\nabla_{\vec e_1}\vec e_2=\Gamma^1_{21}\vec e_1+\Gamma^2_{21}\vec e_2.
$$

Here the connection is symmetric in the lower indices.

![[Kyle Kabasares - Cosmology - Connection and changing basis.png|**Fig. 7** A small displacement in direction 1 can change the basis vector labeled 2.]]


For the flat FRW line element $ds^2=-dt^2+a^2(t)(d\mechanical{x}^2+d\mechanical{y}^2+d\mechanical{z}^2)$, the metric is diagonal with entries $(-1,a^2,a^2,a^2)$. Compute $\Gamma^0_{\alpha\beta}$ and $\Gamma^i_{\alpha\beta}$ separately from

$$
\Gamma^\mu_{\alpha\beta}=\frac12g^{\mu\nu}
\bigl(g_{\alpha\nu,\beta}+g_{\beta\nu,\alpha}-g_{\alpha\beta,\nu}\bigr).
$$

For $\mu=i$, the inverse metric $g^{i\nu}$ selects spatial $\nu$. The last derivative $g_{\alpha\beta,\nu}$ then vanishes because the flat FRW metric in these coordinates depends only on time.

### PDF page 18

The inverse metric is $\operatorname{diag}(-1,a^{-2},a^{-2},a^{-2})$. For a fixed spatial $i$, the sum over $\nu$ in $g^{i\nu}$ reduces to the single term $\nu=i$. Therefore

$$
\Gamma^i_{\alpha\beta}
=\frac{g^{ii}}2\left(\frac{\partial g_{\alpha i}}{\partial x^\beta}
+\frac{\partial g_{\beta i}}{\partial x^\alpha}\right)
$$

with no sum over $i$ here. The first term can contribute for $\alpha=i,\ \beta=0$, and the second for $\beta=i,\ \alpha=0$. In both cases $\partial_t g_{ii}=\partial_t(a^2)=2a\dot a$. Collecting the temporal and spatial results gives

$$
\Gamma^0_{ij}=a\dot a\,\delta_{ij},\qquad
\Gamma^i_{0j}=\Gamma^i_{j0}=\frac{\dot a}{a}\delta^i{}_j.
$$

### PDF page 19

#### Energy of light along a geodesic

Write the four-momentum in natural units as $\mechanical{P}^\mu=dx^\mu/d\lambda=(\energy{E},\mechanical{\vec P})$, where $\mechanical{\vec P}$ here collects the spatial coordinate components. For a massive particle a clock in the instantaneous rest frame measures proper time, with $-d\tau^2=g_{\mu\nu}\,dx^\mu dx^\nu$. A light ray is null and is described using the affine parameter $\lambda$.

![[Kyle Kabasares - Cosmology - Trajectory described by an affine parameter.png|**Fig. 8** The coordinate functions $x^\mu(\lambda)$ describe the particle path.]]


For $\mu=0$, the geodesic equation becomes

$$
\frac{d\energy{E}}{d\lambda}+\Gamma^0_{ij}\frac{dx^i}{d\lambda}\frac{dx^j}{d\lambda}=0.
$$

Since $d\energy{E}/d\lambda=(dx^0/d\lambda)(d\energy{E}/dx^0)=\energy{E}\,d\energy{E}/dt$, this reduces in flat FRW to

$$
\energy{E}\frac{d\energy{E}}{dt}+a\dot a\,\delta_{ij}\mechanical{P}^i\mechanical{P}^j=0.
$$

The invariant mass-shell relation is $\mechanical{P}^\mu\mechanical{P}_\mu=g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu=-\mechanical{m}^2$. In a local orthonormal frame it reads $-\energy{E}^2+|\mechanical{\vec p}|^2=-\mechanical{m}^2$.

### PDF page 20

The mass-shell relation gives $\energy{E}^2=|\mechanical{\vec p}|^2+\mechanical{m}^2$ in a local orthonormal frame. For light, the four-momentum is null. In flat FRW coordinates,

$$
0=g_{00}\energy{E}^2+g_{ij}\mechanical{P}^i\mechanical{P}^j
=-\energy{E}^2+a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j.
$$

Substitute $\delta_{ij}\mechanical{P}^i\mechanical{P}^j=\energy{E}^2/a^2$ into the temporal geodesic equation.

$$
\energy{E}\frac{d\energy{E}}{dt}
+a\dot a\frac{\energy{E}^2}{a^2}=0,\qquad
\frac{d\energy{E}}{dt}+\frac{\dot a}{a}\energy{E}=0.
$$

For reference energy $\energy{E}_0$ at scale factor $a_0$, integration gives $\energy{E}=\energy{E}_0a_0/a$. The handwritten plus sign in the last line is read as multiplication, consistent with the differential equation and the stated reference value.

#### October 9, 2018 lecture

The lecture returns to the connection $\Gamma^\alpha_{\mu\nu}$ and the vector decomposition $\vec V=V^\mu\vec e_\mu$.

![[Kyle Kabasares - Cosmology - Spherical basis direction.png|**Fig. 9** Spherical coordinates tie the radial direction and the tangent direction $\hat\theta$ to the position on the sphere.]]

### PDF page 21

For the spatial position vector $\mechanical{\vec s}$ in spherical coordinates, the coordinate basis vectors are

$$
\vec e_\theta=\frac{\partial\mechanical{\vec s}}{\partial\theta}=\mechanical{r}\,\hat\theta,\qquad
\vec e_r=\hat r,\qquad
\vec e_\phi=\mechanical{r}\sin\theta\,\hat\phi.
$$

The inner products of the basis vectors are $g_{\mu\nu}=\vec e_\mu\cdot\vec e_\nu$, with the spacetime inner product understood when the time direction is included. The reciprocal basis is $\vec e^{\,\mu}=g^{\mu\nu}\vec e_\nu$.

When differentiating $\vec V=V^\mu\vec e_\mu$, both the components and the basis can change.

$$
\nabla_\nu\vec V
=\frac{\partial V^\mu}{\partial x^\nu}\vec e_\mu
+V^\mu\Gamma^\alpha_{\mu\nu}\vec e_\alpha.
$$

The first lower index in $\Gamma^\alpha_{\mu\nu}$ labels the basis vector and the second labels the direction of differentiation. For example, the $\theta$ and $\phi$ components of the change of $\vec e_\theta$ along $\phi$ are represented by $\Gamma^\theta_{\theta\phi}\vec e_\theta+\Gamma^\phi_{\theta\phi}\vec e_\phi$. The dual basis differentiates with the opposite sign, $\nabla_\nu\vec e^{\,\mu}=-\Gamma^\mu_{\alpha\nu}\vec e^{\,\alpha}$.

The covariant derivative of the components is

$$
V^\mu{}_{;\nu}
=\frac{\partial V^\mu}{\partial x^\nu}+\Gamma^\mu_{\alpha\nu}V^\alpha.
$$

A parallel vector has zero covariant derivative along the direction of transport. The margin points ahead to the Riemann tensor, which describes the change from transporting around an infinitesimal loop.

### PDF page 22

For a covector, the covariant derivative is

$$
V_{\mu;\nu}=\frac{\partial V_\mu}{\partial x^\nu}-\Gamma^\alpha_{\mu\nu}V_\alpha
=V_{\mu,\nu}-\Gamma^\alpha_{\mu\nu}V_\alpha.
$$

In the spherical example $\vec V=(5\sin^2\theta)\vec e_\theta+(\sin\theta)\vec e_\phi$, the parenthesized factors are the components $V^\theta$ and $V^\phi$. For the spherical coordinate metric, $\Gamma^\theta_{\phi\phi}=-\cos\theta\sin\theta$ and $\Gamma^\phi_{\phi\phi}=0$. The first value follows from $-\tfrac12g^{\theta\theta}\partial_\theta g_{\phi\phi}$, which fixes the sign and radial factors in the handwritten expression.

![[Kyle Kabasares - Cosmology - Vector in a spherical basis.png|**Fig. 10** A vector attached to a point on the spherical surface.]]


#### Covariant derivatives of tensors

A contravariant rank-two tensor gets a connection term for each upper index.

$$
Z^{\mu\nu}{}_{;\alpha}
=Z^{\mu\nu}{}_{,\alpha}+\Gamma^\mu_{\sigma\alpha}Z^{\sigma\nu}
+\Gamma^\nu_{\sigma\alpha}Z^{\mu\sigma}.
$$

#### Riemann tensor

The change from parallel transport around a small parallelogram spanned by $A^\alpha$ and $B^\beta$ is proportional to the curvature. With the orientation and sign used in the notes, the leading term is

$$
V^\mu_{\parallel}(\mathrm{end})=V^\mu(\mathrm{start})
-R^\mu{}_{\nu\alpha\beta}V^\nu(\mathrm{start})A^\alpha B^\beta.
$$

![[Kyle Kabasares - Cosmology - Curvature and infinitesimal transport loop.png|**Fig. 11** The Christoffel symbols vary along the edges of the parallelogram formed by the two displacements.]]

### PDF page 23

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

#### Conservation of energy and momentum

In curved spacetime the conservation law uses the covariant divergence $\nabla_\mu\energy{T}^{\mu\nu}=0$. The partial divergence written in the notes applies in inertial Cartesian coordinates in flat spacetime. The Einstein–Hilbert action is $\energy{S}\propto\int\sqrt{-g}\,R\,d^4x$, where $g=\det(g_{\mu\nu})$.

For a homogeneous isotropic perfect fluid in comoving coordinates, the mixed stress-energy tensor is diagonal.

$$
(\energy{T}^\mu{}_\nu)=\operatorname{diag}(-\energy{\rho},\thermal{p},\thermal{p},\thermal{p}),
\qquad
\energy{T}_{\mu\nu}=g_{\mu\alpha}\energy{T}^\alpha{}_\nu.
$$

### PDF page 24

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

### PDF page 25

The terms containing $\Gamma^\alpha_{00}$ vanish. The spatial trace $\Gamma^\alpha_{0\alpha}$ is $3H$, and the product $\Gamma^\alpha_{\beta0}\Gamma^\beta_{0\alpha}$ is $3H^2$. Restoring the sum over all three spatial directions gives

$$
R_{00}=-3(\dot H+H^2)
=-3\left[\frac{a\ddot a-\dot a^2}{a^2}+\frac{\dot a^2}{a^2}\right]
=-3\frac{\ddot a}{a}.
$$

Use $G_{00}=R_{00}+\tfrac12R$ and the Ricci scalar from page 23 to get $G_{00}=3H^2$. The boxed equation is the first Friedmann equation for the spatially flat case.

$$
\left(\frac{\dot a}{a}\right)^2=\frac{8\pi\mechanical{G}\energy{\rho}}3.
$$

The left side is the square of the fractional expansion rate. Its inverse sets a timescale related to the density sourcing the expansion. The analogous gravitational infall timescale is $t_{\mathrm{ff}}\sim 1/\sqrt{\mechanical{G}\mechanical{\rho}}$ for mass density $\mechanical{\rho}\sim\mechanical{m}/\mechanical{r}^3$. This gives $t_{\mathrm{ff}}\sim\sqrt{\mechanical{r}^3/(\mechanical{G}\mechanical{m})}$, using the infall distance together with the acceleration scale $\mechanical{G}\mechanical{m}/\mechanical{r}^2$.

### PDF page 26

#### October 11, 2018 class notes

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

### PDF page 27

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

### PDF page 28

The general FRW line element is

$$
ds^2=-\mechanical{c}^2dt^2+a^2(t)\left[\frac{dr^2}{1-kr^2}+r^2\left(d\theta^2+\sin^2\theta\,d\phi^2\right)\right].
$$

The spatial geometry is flat when $k=0$, positively curved when $k>0$, and negatively curved when $k<0$. A suitable coordinate normalization gives $k=0,+1,-1$, respectively.

Restricting to a sphere of fixed unit radius and setting $a(t)=1$ gives a $2+1$-dimensional line element $ds^2=-\mechanical{c}^2dt^2+d\Omega^2$, with $d\Omega^2=d\theta^2+\sin^2\theta\,d\phi^2$.

For the operational details of extragalactic astronomy, return to the full FRW metric and choose the source location to have coordinates $r=r_1$, $\theta=0$, and $\phi=0$.

### PDF page 29

**Lecture, October 16, 2018.** In terms of the comoving radial distance $r$, the FRW line element is

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

### PDF page 30

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

### PDF page 31

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

### PDF page 32

Bolometric surface brightness falls as $(1+z)^{-4}$. The notes also give $\unit{erg\,cm^{-2}\,s^{-1}\,Hz^{-1}\,sr^{-1}}$, the units of specific surface brightness per unit frequency.

**Friedmann equations.** With $\energy{\rho}$ the energy density, $\thermal{p}$ the pressure, and $k\in\{+1,-1,0\}$, the expansion and acceleration equations are

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

### PDF page 33

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

### PDF page 34

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

### PDF page 35

Suppose $\energy{\rho}=\energy{\rho}_{\mathrm{mat}}+\energy{\rho}_{\mathrm{rad}}+\energy{\rho}_x$, with negligible matter pressure, $\thermal{p}_{\mathrm{rad}}=\energy{\rho}_{\mathrm{rad}}/3$, and $\thermal{p}_x=-\energy{\rho}_x$. In units with $\mechanical{c}=1$, the acceleration equation becomes

$$
\frac{\ddot a}{a}
=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})
=-\frac{4\pi\mechanical{G}}{3}
\left(\energy{\rho}_{\mathrm{mat}}+2\energy{\rho}_{\mathrm{rad}}-2\energy{\rho}_x\right).
$$

At fixed comoving radius $r$, the proper radial distance $x=ar$ satisfies $\ddot x=\ddot a\,r$.

**Lecture, October 18, 2018.** For the FRW metric, $G_{\mu\nu}=8\pi\mechanical{G}\energy{T}_{\mu\nu}$ yields

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

### PDF page 36

If dark matter exchanges energy with dark radiation, the notes cross out a separate adiabatic equation for dark matter. The dark sector as a whole can be treated as adiabatic if it exchanges no energy with other sectors. With $V\propto a^3$ and $\energy{U}_x=\energy{\rho}_x V$,

$$
\energy{\rho}_x=\energy{\rho}_{\mathrm{DM}}+\energy{\rho}_{\mathrm{DR}},
\qquad
\frac{d\energy{\rho}_x}{dt}
=-3\frac{\dot a}{a}(\energy{\rho}_x+\thermal{p}_x).
$$

The Einstein tensor satisfies the contracted Bianchi identity,

$$
\nabla_\mu G^\mu{}_\nu=0,
\qquad
G_{\mu\nu}=R_{\mu\nu}-\tfrac12g_{\mu\nu}g^{\alpha\beta}R_{\alpha\beta}.
$$

In units with $\mechanical{c}=1$, the acceleration equation can be written as

$$
\ddot a=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})\frac{a^3}{a^2}.
$$

The notes associate the three pressure contributions with motion along the three spatial directions. For comparison, a point at fixed comoving coordinate $(r,0,0)$ is at proper radius $x=ar$. In the pressureless Newtonian calculation, its acceleration is $\ddot x=r\ddot a=-\mechanical{G}\mechanical{M}/x^2$, with enclosed mass $\mechanical{M}=(4\pi/3)x^3\mechanical{\rho}$. This gives $\ddot a=-4\pi\mechanical{G}\mechanical{\rho}a/3$.

![[Kyle Kabasares - Cosmology - proper radius and Newtonian acceleration.png|**Fig. 15** A point at comoving radius $r$ is separated from the origin by a proper distance $x=ar$. The sketch compares its acceleration with the Newtonian inverse-square expression.]]

To integrate the general acceleration equation, multiply both sides by $\dot a$.

$$
\frac12\frac{d}{dt}(\dot a^2)=\dot a\,\ddot a
=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})a\dot a.
$$

### PDF page 37

Separate the total energy density into radiation, matter, neutrinos, and a component $x$.

$$
\energy{\rho}=\energy{\rho}_{\mathrm{rad}}+\energy{\rho}_{\mathrm{matter}}+\energy{\rho}_{\nu}+\energy{\rho}_x.
$$

A species behaves as radiation when its rest energy is small compared with its characteristic thermal energy. Examples in the notes are photons, possible dark radiation, and neutrinos at early times. There are three neutrino flavors, $\nu_e$, $\nu_\mu$, and $\nu_\tau$. The 2018 lecture quotes an approximate upper-limit range of $\quantity{0.2\text{–}1}{eV}$ for $\sum_{i=1}^3\mechanical{m}_{\nu_i}\mechanical{c}^2$, where the sum runs over the neutrino mass eigenstates.

The present CMB temperature is $\thermal{T}_{\mathrm{CMB},0}=\quantity{2.726}{K}$, or $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm{CMB},0}=\quantity{2.35\times10^{-4}}{eV}=\quantity{0.235}{meV}$. The temperature scales as

$$
\thermal{T}(a)=\frac{\thermal{T}_{\mathrm{CMB},0}}{a}.
$$

At $a\simeq 0.001$, around the time the CMB was released, $\thermal{k}_{\mathrm B}\thermal{T}\simeq\quantity{0.235}{eV}$. For a characteristic Big Bang nucleosynthesis temperature with $\thermal{k}_{\mathrm B}\thermal{T}_{\mathrm{BBN}}\simeq\quantity{1}{MeV}$, the notes estimate

$$
a_{\mathrm{BBN}}\simeq
\frac{\thermal{T}_{\mathrm{CMB},0}}{\thermal{T}_{\mathrm{BBN}}}
=\frac{\quantity{0.235}{meV}}{\quantity{10^6}{eV}}
=2.35\times10^{-10}.
$$

The notes estimate that the material of the Milky Way occupied a region roughly $\quantity{20}{AU}$ across at that epoch.

### PDF page 38

**When does the CMB temperature scale as $a^{-1}$?** If photon number is conserved, the number density falls as $a^{-3}$. The geodesic equation gives $\energy{E}\propto a^{-1}$ for a free, noninteracting massless particle. Together these scalings give

$$
\energy{\rho}_{\mathrm{CMB}}\propto a^{-3}a^{-1}=a^{-4}.
$$

For blackbody radiation, $\energy{\rho}_{\mathrm{CMB}}\propto\thermal{T}^4$. The temperature tracks the mean photon energy and therefore falls as $a^{-1}$ under these assumptions. The lecture mentions electron–positron annihilation and reionization as examples of processes that create photons. Energy transferred to the radiation bath by particle–antiparticle annihilation slows its cooling.

The matter density includes baryonic material such as protons and helium-4 nuclei. Early on, relativistic neutrinos can be counted with radiation. Here their density is kept separate so that its scale-factor dependence can change.

$$
\energy{\rho}(a)
=\frac{\energy{\rho}_{\mathrm{rad},0}}{a^4}
+\frac{\energy{\rho}_{\mathrm{matter},0}}{a^3}
+\energy{\rho}_\nu(a)+\energy{\rho}_x(a).
$$

The Friedmann equation with explicit powers of $\mechanical{c}$ is

$$
H^2=\frac{8\pi\mechanical{G}}{3\mechanical{c}^2}\sum_i\energy{\rho}_i
-\frac{k\mechanical{c}^2}{a^2R_0^2}.
$$

### PDF page 39

Define the critical energy density at scale factor $a$ and its present value by

$$
\energy{\rho}_{\mathrm{cr}}(a)=\frac{3\mechanical{c}^2H^2(a)}{8\pi\mechanical{G}},
\qquad
\energy{\rho}_{\mathrm{cr},0}=\frac{3\mechanical{c}^2H_0^2}{8\pi\mechanical{G}}.
$$

Normalizing the Friedmann equation by $H^2(a)$ gives

$$
1=\sum_i\Omega_i(a)-\frac{k\mechanical{c}^2}{a^2H^2(a)R_0^2},
\qquad
\Omega_i(a)=\frac{\energy{\rho}_i(a)}{\energy{\rho}_{\mathrm{cr}}(a)}.
$$

The sum over physical components exceeds one for $k=+1$ and is below one for $k=-1$. A convention often used in papers is to normalize by the present Hubble parameter instead.

$$
\frac{H^2(a)}{H_0^2}
=\frac{\energy{\rho}(a)}{\energy{\rho}_{\mathrm{cr},0}}
-\frac{k\mechanical{c}^2}{R_0^2H_0^2}\,a^{-2}.
$$

For the rest of this expression, let $\Omega_i$ denote the present ratio $\energy{\rho}_{i,0}/\energy{\rho}_{\mathrm{cr},0}$. Evaluating at $a=1$ then gives

$$
-\frac{k\mechanical{c}^2}{R_0^2H_0^2}=1-\Omega,
\qquad
\Omega=\Omega_{\mathrm{m}}+\Omega_{\mathrm{r}}+\Omega_\nu+\Omega_x.
$$

Hence

$$
\begin{aligned}
\frac{H^2(a)}{H_0^2}
={}&\Omega_{\mathrm{m}}a^{-3}+\Omega_{\mathrm{r}}a^{-4}
+\Omega_\nu\frac{\energy{\rho}_\nu(a)}{\energy{\rho}_{\nu,0}}
+\Omega_x\frac{\energy{\rho}_x(a)}{\energy{\rho}_{x,0}}\\
&+\left(1-\Omega_{\mathrm{m}}-\Omega_{\mathrm{r}}-\Omega_\nu-\Omega_x\right)a^{-2}.
\end{aligned}
$$

The handwritten estimates are $\Omega_{\mathrm{m}}\simeq0.3$ and $\Omega_{\mathrm{r}}\sim10^{-4}$. The annotations $0.7$ and $<10^{-2}$ appear under the neutrino and $x$ terms, respectively, but appear to have been swapped given the separate dark-energy and neutrino components.

### PDF page 40

**Matter and curvature only.** In this model,

$$
\frac{H^2}{H_0^2}=\Omega_{\mathrm{m}}a^{-3}+(1-\Omega_{\mathrm{m}})a^{-2}.
$$

If $\Omega_{\mathrm{m}}>1$, the universe has positive spatial curvature, $k=+1$. The expansion reaches $H=0$ at

$$
\boxed{a_{\mathrm{tr}}=\frac{\Omega_{\mathrm{m}}}{\Omega_{\mathrm{m}}-1}.}
$$

The notes connect this turnaround to a simple picture of halo collapse and galaxy formation.

**Momentum in the flat FRW metric.** For an appropriately normalized affine parameter $\lambda$, the contravariant spatial momentum $\mechanical{P}^i=dx^i/d\lambda$ scales as $a^{-2}$. In units with $\mechanical{c}=1$ the mass-shell relation is

$$
g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu
=-\energy{E}^2+a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j
=-\mechanical{m}^2.
$$

The squared physical momentum is $\mechanical{p}^2=a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j\propto a^{-2}$, so $\mechanical{p}\propto a^{-1}$. Lowering the spatial index gives the conserved covariant component

$$
\mechanical{P}_i=g_{i\alpha}\mechanical{P}^\alpha=a^2\delta_{ij}\mechanical{P}^j=\text{constant}.
$$

### PDF page 41

For a species $i$ with $g_i$ internal states and phase-space distribution $f(\mechanical{\vec p},\vec x)$, the energy density and isotropic pressure in units with $\mechanical{c}=\hbar=1$ are

$$
\begin{aligned}
\energy{\rho}
&=g_i\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\,
f(\mechanical{\vec p},\vec x)\,\energy{E},\\
\thermal{p}
&=g_i\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}\,
f(\mechanical{\vec p},\vec x)\,\frac{\mechanical{p}^2}{3\energy{E}}.
\end{aligned}
$$

### PDF page 42

**Lecture, October 23, 2018. Beyond equilibrium.** The lecture introduces Big Bang nucleosynthesis, the CMB, and thermal dark matter. It lists the following characteristic energies, with temperature expressed as $\thermal{k}_{\mathrm B}\thermal{T}$.

- Thermal dark matter freeze-out at roughly $\mechanical{m}\mechanical{c}^2/20$. For $\mechanical{m}\mechanical{c}^2=\quantity{100}{GeV}$, the example gives $\thermal{k}_{\mathrm B}\thermal{T}\simeq\quantity{5}{GeV}$.
- Big Bang nucleosynthesis at $\quantity{1\text{–}10}{MeV}$ in the notes' rough ordering.
- Release of the CMB at roughly $\quantity{0.2}{eV}$ and $z\sim1100$.
- The margin also mentions QCD phase transitions and an “electronic phase transition” followed by $10$, with no unit given there.

For an equilibrium fluid with negligible chemical potentials, the entropy density is

$$
\thermal{s}=\frac{\energy{\rho}+\thermal{p}}{\thermal{T}}.
\tag{2.65}
$$

In units with $\thermal{k}_{\mathrm B}=1$, the equilibrium distribution depends on $\energy{E}/\thermal{T}$. The entropy $\thermal{S}=\thermal{s}V$ of a comoving volume is proportional to $\thermal{s}a^3$. For reversible evolution $d\thermal{S}=d\thermal{Q}/\thermal{T}$, so $\thermal{s}a^3$ is conserved during adiabatic expansion. For radiation,

$$
\thermal{p}=\frac{\energy{\rho}}{3},
\qquad
\thermal{s}=\frac{4\energy{\rho}}{3\thermal{T}}\propto\thermal{T}^3,
$$

since $\energy{\rho}\propto\thermal{T}^4$.

### PDF page 43

For radiation, $\thermal{s}a^3\propto(a\thermal{T})^3$. If the comoving entropy is conserved and the relativistic species content stays fixed, $\thermal{T}\propto a^{-1}$.

The energy density is $\energy{\rho}=g\int d^3\mechanical{\vec p}\,f(\mechanical{p})\energy{E}(\mechanical{p})/(2\pi)^3$, with $g$ counting the internal states, including spin. The notes use $\hbar=\thermal{k}_{\mathrm B}=\mechanical{c}=1$. In this convention the thermal distribution is

$$
f(\mechanical{p})=\frac{1}{e^{(\energy{E}-\thermal{\mu})/\thermal{T}}\pm1},
$$

with $+$ for fermions and $-$ for bosons. The mean energy is proportional to $\thermal{k}_{\mathrm B}\thermal{T}$, written as $\thermal{T}$ in these units.

The relation $\energy{E}=\hbar\omega$ becomes $\energy{E}=\omega$. With $\hbar=(\quantity{6.626\times10^{-34}}{J\,s})/(2\pi)$ set to one, the unit of time is the reciprocal of the chosen energy unit. For example, an energy unit of $\quantity{1}{GeV}$ corresponds to a time unit of $\unit{GeV^{-1}}$.

For equilibrium with negligible chemical potential and $\mechanical{m}\ll\thermal{T}$,

$$
\begin{aligned}
\energy{\rho}
&=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}
\frac{\sqrt{\mechanical{p}^2+\mechanical{m}^2}}{e^{(\energy{E}-\thermal{\mu})/\thermal{T}}\pm1}\\
&\simeq
\begin{cases}
\dfrac{\pi^2}{30}g\thermal{T}^4, & \text{bosons},\\[4pt]
\dfrac78\dfrac{\pi^2}{30}g\thermal{T}^4, & \text{fermions}.
\end{cases}
\end{aligned}
$$

In the opposite limit $\mechanical{m}\gg\thermal{T}$, a species in equilibrium with the bath has

$$
n\simeq g\left(\frac{\mechanical{m}\thermal{T}}{2\pi}\right)^{3/2}e^{-\mechanical{m}/\thermal{T}},
\qquad
\energy{\rho}\simeq\mechanical{m}n.
$$

The notes flag the dimensional distinction in red. The expression for $n$ has dimensions of energy cubed in natural units, whereas $\energy{\rho}$ has dimensions of energy to the fourth power.

### PDF page 44

For relativistic particles in equilibrium with negligible chemical potential and $\mechanical{m}\ll\thermal{T}$, the number density and mean energy in natural units are

$$
n=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}f(\mechanical{p})
\propto\thermal{T}^3,
\qquad
\langle\energy{E}\rangle=\frac{\energy{\rho}}{n}
\simeq
\begin{cases}
2.701\,\thermal{T}, & \text{bosons},\\
3.151\,\thermal{T}, & \text{fermions}.
\end{cases}
$$

Suppose species $x$ decouples from the thermal bath at temperature $\thermal{T}_1$ and scale factor $a_1$. What happens to its number density and mean kinetic energy? If it is nonrelativistic at decoupling, its equilibrium number density just before decoupling is

$$
n(\thermal{T}_1)\simeq
g\left(\frac{\mechanical{m}\thermal{T}_1}{2\pi}\right)^{3/2}
e^{-\mechanical{m}/\thermal{T}_1}.
$$

Once particle number is conserved, $n(\thermal{T}_1)a_1^3=n(a)a^3$. The physical momentum satisfies $\mechanical{p}^2=a^2\delta_{ij}\mechanical{P}^i\mechanical{P}^j$ and $\mechanical{p}\propto a^{-1}$. Therefore

$$
\langle\energy{E}_{\mathrm{kin}}\rangle
\simeq
\begin{cases}
\langle\mechanical{p}^2\rangle/(2\mechanical{m})\propto a^{-2},
& \text{nonrelativistic},\\
\langle\mechanical{p}\rangle\propto a^{-1},
& \text{ultrarelativistic}.
\end{cases}
$$

The decoupled species can be assigned its own temperature scale from its momentum distribution.

### PDF page 45

**Estimate the present neutrino temperature.** The sketch compares the relativistic species before and after electron–positron annihilation. The electron rest energy is $\mechanical{m}_e\mechanical{c}^2=\quantity{0.511}{MeV}$. Neutrinos decouple from the electromagnetic plasma via the weakening of weak-interaction rates around $\quantity{1}{MeV}$.

![[Kyle Kabasares - Cosmology - species before and after electron positron annihilation.png|**Fig. 16** The upper box includes electrons, positrons, photons, and all three neutrino and antineutrino flavors. The lower box omits electron–positron pairs. Protons and neutrons are marked with question marks.]]

For a relativistic species, $\energy{\rho}+\thermal{p}=\tfrac43\energy{\rho}$. There are two photon polarizations, four electron and positron spin states combined, and six neutrino and antineutrino states combined. The latter count takes one helicity per neutrino or antineutrino flavor. Taking the relativistic approximation on either side of annihilation and setting $C=2\pi^2/45$ gives

$$
\begin{aligned}
\thermal{s}_{\mathrm{before}}
&=C\left[\left(2+\tfrac78\cdot4\right)\thermal{T}_\gamma^3
+\tfrac78\cdot6\,\thermal{T}_\nu^3\right]_{\mathrm{before}},\\
\thermal{s}_{\mathrm{after}}
&=C\left[2\thermal{T}_\gamma^3+\tfrac78\cdot6\,\thermal{T}_\nu^3\right]_{\mathrm{after}}.
\end{aligned}
$$

The comoving entropy satisfies $\thermal{s}_{\mathrm{before}}a_{\mathrm{before}}^3=\thermal{s}_{\mathrm{after}}a_{\mathrm{after}}^3$. To compare the temperatures, the notes factor the neutrino contribution to the temperature scale out of each side.

$$
\begin{aligned}
&(a_{\mathrm{before}}\thermal{T}_{\nu,\mathrm{before}})^3
\left[\left(2+\tfrac72\right)
\left(\frac{\thermal{T}_\gamma}{\thermal{T}_\nu}\right)^3
+\tfrac78\cdot6\right]_{\mathrm{before}}\\
&\quad=(a_{\mathrm{after}}\thermal{T}_{\nu,\mathrm{after}})^3
\left[2\left(\frac{\thermal{T}_\gamma}{\thermal{T}_\nu}\right)^3
+\tfrac78\cdot6\right]_{\mathrm{after}}.
\end{aligned}
$$

### PDF page 46

The decoupled neutrinos have $a\thermal{T}_\nu=\text{constant}$, and before annihilation $\thermal{T}_\nu=\thermal{T}_\gamma$. The entropy equation then reduces to

$$
\frac{11}{2}+\frac{21}{4}
=2\left(\frac{\thermal{T}_\gamma}{\thermal{T}_\nu}\right)^3+\frac{21}{4},
\qquad
\frac{\thermal{T}_\nu}{\thermal{T}_\gamma}=\left(\frac4{11}\right)^{1/3}.
$$

![[Kyle Kabasares - Cosmology - photon and neutrino temperatures after annihilation.png|**Fig. 17** Schematic cooling curves. The photon temperature falls more slowly during annihilation, leaving the neutrino temperature lower by the indicated factor.]]

**Lecture, October 25, 2018.** The notes list the midterm for October 30. In a flat FRW metric $ds^2=-\mechanical{c}^2dt^2+a^2(dx^2+dy^2+dz^2)$, a box of comoving volume $V_0$ contains $a^3V_0n_1$ particles of species $1$. Consider a two-body reaction $1+2\rightleftharpoons3+4$, such as $n+p\rightleftharpoons D+\gamma$.

Let $n_i^{(0)}$ be the equilibrium densities. The rate equation per unit proper volume is

$$
\frac{1}{V_0a^3}\frac{d(V_0a^3n_1)}{dt}
=n_1^{(0)}n_2^{(0)}
\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle
\left(
\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}-
\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}
\right).
$$

The first term in parentheses describes production of species $1$ by the reverse reaction. The second describes destruction by the forward reaction. Multiplying either rate density by $V_0a^3$ gives the corresponding rate for the whole box. Here $\sigma$ is the cross section and $\mechanical{v}_{\mathrm{rel}}$ is the relative speed of particles $1$ and $2$. The brackets denote an average over the momentum distributions. In particular, $n_2\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle$ is the inverse destruction time per particle of species $1$.

### PDF page 47

![[Kyle Kabasares - Cosmology - incident particles and target cross section.png|**Fig. 18** The incoming trajectories and shaded target illustrate the use of a cross section in the reaction rate.]]

The dimensions of number density, cross section, and speed are $\mathrm{L}^{-3}$, $\mathrm{L}^2$, and $\mathrm{L}/\mathrm{T}$. Their product is an inverse time.

In the reverse reaction, the source term for species $1$ equals the number $(V_0a^3)n_3$ of species-$3$ particles in the box times the destruction rate per particle of species $3$, $\Gamma_3=n_4\langle\sigma'\mechanical{v}_{\mathrm{rel}}\rangle$. Here $\sigma'$ is the reverse cross section and the speed is relative to species $4$. Detailed balance in equilibrium gives

$$
n_3^{(0)}n_4^{(0)}\langle\sigma'\mechanical{v}_{\mathrm{rel}}\rangle
=n_1^{(0)}n_2^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle.
$$

Consequently,

$$
\langle\sigma'\mechanical{v}_{\mathrm{rel}}\rangle
=\frac{n_1^{(0)}n_2^{(0)}}{n_3^{(0)}n_4^{(0)}}
\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle.
$$

To evaluate the rate coefficient, average the cross section times relative speed over the particle distributions. Apply the rate equation to the equilibrium abundance of deuterons in $n+p\rightleftharpoons D+\gamma$ at $\thermal{k}_{\mathrm B}\thermal{T}\lesssim\quantity{1}{MeV}$.

$$
\frac{d(a^3V_0n_1)}{dt}
=(V_0a^3)n_1^{(0)}n_2^{(0)}
\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle
\underbrace{\left(
\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}-
\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}
\right)}_{\text{zero in equilibrium}}.
$$

### PDF page 48

In reaction equilibrium,

$$
\frac{n_Dn_\gamma}{n_D^{(0)}n_\gamma^{(0)}}
=\frac{n_nn_p}{n_n^{(0)}n_p^{(0)}}.
$$

Since photons are taken to remain in equilibrium, $n_\gamma=n_\gamma^{(0)}$, so

$$
\frac{n_D}{n_pn_n}=\frac{n_D^{(0)}}{n_p^{(0)}n_n^{(0)}}.
$$

The nonrelativistic equilibrium density for spin-$\tfrac12$ nucleons is $2(\mechanical{m}\thermal{T}/2\pi)^{3/2}e^{-\mechanical{m}/\thermal{T}}$ in natural units. The margin lists the relativistic scaling $n^{(0)}\propto\thermal{T}^3$. With three spin states for the deuteron,

$$
\frac{n_D^{(0)}}{n_p^{(0)}n_n^{(0)}}
=
\frac{3(\mechanical{m}_D\thermal{T}/2\pi)^{3/2}e^{-\mechanical{m}_D/\thermal{T}}}
{4(\mechanical{m}_p\thermal{T}/2\pi)^{3/2}
(\mechanical{m}_n\thermal{T}/2\pi)^{3/2}
e^{-(\mechanical{m}_p+\mechanical{m}_n)/\thermal{T}}}.
$$

Taking $\mechanical{m}_n\simeq\mechanical{m}_p$ and $\mechanical{m}_D\simeq2\mechanical{m}_p$ in the prefactor and retaining the mass difference in the exponent gives

$$
\boxed{\frac{n_D}{n_pn_n}
\simeq\frac{3\cdot2^{3/2}}4
\left(\frac{\mechanical{m}_p\thermal{T}}{2\pi}\right)^{-3/2}
e^{(\mechanical{m}_p+\mechanical{m}_n-\mechanical{m}_D)/\thermal{T}}.}
$$

Multiply this ratio by $n_pn_n$ to get the deuteron density. The notes point to the approximate particle-physics symmetry between protons and neutrons and quote a neutron lifetime of order $\quantity{1000}{s}$.

### PDF page 49

The notes estimate the age of the universe at $\thermal{k}_{\mathrm B}\thermal{T}\sim\quantity{1}{MeV}$ as about $\quantity{1}{s}$. The deuteron binding energy is $\energy{B}_D=(\mechanical{m}_p+\mechanical{m}_n-\mechanical{m}_D)\mechanical{c}^2\simeq\quantity{2.2}{MeV}$. Approximating $n_p\simeq n_B/2$, the equilibrium result becomes, in natural units,

$$
\frac{n_D}{n_n}\simeq\frac{n_B}{2}\frac34
\left(\frac{4\pi}{\mechanical{m}_p\thermal{T}}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Write $n_B=\eta_B n_\gamma$. The baryon-to-photon ratio $\eta_B$ can be inferred from the CMB and is of order $10^{-10}$ to $10^{-9}$ in the notes. Substituting $n_\gamma\propto\thermal{T}^3$ makes the abundance scale as

$$
\frac{n_D}{n_n}\propto
\eta_B\left(\frac{\thermal{T}}{\mechanical{m}_p}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Using a characteristic photon energy of $3\thermal{T}$ and baryon rest energy of about $\quantity{1}{GeV}$ gives

$$
\frac{\energy{\rho}_\gamma}{\energy{\rho}_B}
\simeq\frac{(3\thermal{T})n_\gamma}{(\quantity{1}{GeV})n_B}
=\frac{3\thermal{T}}{\quantity{1}{GeV}}\,\eta_B^{-1}.
$$

Photons therefore dominate over baryons in energy density during nucleosynthesis. The manuscript separately lists $\energy{B}_{{}^4\mathrm{He}}=\quantity{22}{MeV}$ without specifying the reaction or threshold. The neutron number fraction among free nucleons is $X_n=n_n/(n_n+n_p)$.

**Lecture, November 1, 2018. Midterm review.** In units with $\mechanical{c}=1$, the spatial contraction of the Ricci tensor is

$$
g^{ij}R_{ij}
=3\left[\frac{\ddot a}{a}
+2\left(\frac{\dot a}{a}\right)^2
-\frac{2\Omega_kH_0^2}{a^2}\right].
$$

The circled curvature term is equivalent to $2k/(a^2R_0^2)$ when written with its sign as a contribution inside the brackets.

### PDF page 50

In the flat case, $\Omega_k=0$. If the spatial Ricci contraction from page 49 is also set to zero, then

$$
\frac{\ddot a}{a}+2\left(\frac{\dot a}{a}\right)^2=0.
$$

A constant $a$ solves this equation. For a nonconstant power law $a\propto t^\alpha$, the equation becomes

$$
\frac{\alpha(\alpha-1)+2\alpha^2}{t^2}=0,
\qquad
\alpha=\frac13.
$$

To interpret the result, use a fluid equation of state $\thermal{p}=w\energy{\rho}$ with constant $w$. Energy conservation gives

$$
\frac{d\energy{\rho}}{dt}+3H(\energy{\rho}+\thermal{p})=0
\quad\Longrightarrow\quad
\frac{d\energy{\rho}}{dt}+\frac{3}{a}\frac{da}{dt}(1+w)\energy{\rho}=0,
$$

so

$$
\boxed{\energy{\rho}\propto a^{-3(1+w)}.}
$$

Matter has $w=0$ and radiation has $w=1/3$. For a flat universe dominated by one such fluid, substituting the density into $H^2=8\pi\mechanical{G}\energy{\rho}/3$ in units with $\mechanical{c}=1$ gives $a\propto t^{2/[3(1+w)]}$ for $w>-1$ with the time origin at $a=0$. In particular, $a\propto t^{1/3}$ corresponds to $w=1$.

### PDF page 51

A flat universe dominated by a $w=1$ component has $g^{ij}R_{ij}=0$. The notes compare this case with pressureless matter ($w=0$) and massless radiation ($w=1/3$). A homogeneous scalar field $\phi$ has $w\simeq1$ when its kinetic energy dominates.

The energy density of the scalar field is the sum of its kinetic and potential contributions. The pressure is their difference.

$$
\energy{\rho}=\frac12\dot\phi^2+\energy{V}(\phi),
\qquad
\thermal{p}=\frac12\dot\phi^2-\energy{V}(\phi).
$$

The equation-of-state ratio

$$
w=\frac{\tfrac12\dot\phi^2-\energy{V}(\phi)}
{\tfrac12\dot\phi^2+\energy{V}(\phi)}
$$

generally varies as the field evolves. In the kinetic limit $w=1$, the energy density scales as $\energy{\rho}\propto a^{-6}$. For a quadratic potential $\energy{V}(\phi)\sim\mechanical{m}^2\phi^2$, the notes estimate $\energy{V}\sim\mechanical{m}^2\mechanical{M}_{\mathrm{Pl}}^2$ when $\phi$ is of order the reduced Planck mass.

In natural units, define the reduced Planck mass by $\mechanical{M}_{\mathrm{Pl}}^2=1/(8\pi\mechanical{G})$. The flat Friedmann equation at the present epoch gives

$$
H_0^2=\frac{8\pi\mechanical{G}}{3}\energy{\rho}_0,
\qquad
\energy{\rho}_0=3H_0^2\mechanical{M}_{\mathrm{Pl}}^2.
$$

### PDF page 52

If the scalar potential accounts for about $70\%$ of the present density in a flat model, $\energy{V}\sim0.7\energy{\rho}_0\sim2\mechanical{M}_{\mathrm{Pl}}^2H_0^2$. In natural units the notes estimate

$$
H_0\sim\quantity{10^{-33}}{eV},
\qquad
\energy{\rho}_0\sim\left(\quantity{10^{-3}}{eV}\right)^4.
$$

The first scale is very small on particle-physics scales. For an early-universe black hole with size of order the Hubble length, the notes write $R_{\mathrm{s}}\sim H^{-1}$ in units with $\mechanical{c}=1$.

The notes associate $w=-2/3$ with domain walls, $w=-1/3$ with cosmic strings, and $w=-1$ with a cosmological constant. They question the viability of the first two as the dominant late-time component. They label $w=-1$ the phantom divide and mention modified gravity in connection with $w<-1$.

**Cosmological constant problem.** The lecture dates the discussion to the 1960s and contrasts the success of quantum theory in Minkowski spacetime with its difficulty in accounting for the small cosmological constant. The margin asks about anthropic reasoning, neutrino rest masses, and what appears to be a reference to mass-varying neutrinos. It closes by remarking on fine-tuning.

### PDF page 53

**The horizon of the universe.** The Hubble length $\mechanical{c}/H_0$ is a characteristic distance scale. The comoving particle horizon instead comes from integrating the null trajectory. With the time origin at the Big Bang, the present conformal time is

$$
\eta_0=\int_0^{t_0}\frac{dt}{a(t)}
=\int_0^1\frac{da}{a^2H(a)}.
$$

The corresponding comoving distance is $\mechanical{c}\eta_0$. Going forward in cosmic time means decreasing $z$. The page also asks about the entropy of the universe and about the value of the conformal-time integral if the upper limit is extended indefinitely.

In the flat matter-plus-$\Lambda$ model, $H(a)=H_0\sqrt{\Omega_{\mathrm{m}}a^{-3}+\Omega_\Lambda}$, so the conformal time at infinite future cosmic time is

$$
\eta_{\mathrm{future}}
=\int_0^\infty\frac{da}{a^2H(a)}
=\int_0^\infty\frac{da}{H_0\sqrt{\Omega_{\mathrm{m}}a+\Omega_\Lambda a^4}}
\sim4H_0^{-1}.
$$

The notes give $\eta_0\sim3H_0^{-1}$. Even an infinite wait adds a finite comoving distance to the particle horizon. The lecture connects this accelerated-expansion model with inflation.

One can also use the acceleration equation directly, with $\mechanical{c}=1$ and $\thermal{p}=w\energy{\rho}$.

$$
\frac{\ddot a}{a}
=-\frac{4\pi\mechanical{G}}{3}(\energy{\rho}+3\thermal{p})
=-\frac{4\pi\mechanical{G}}{3}\energy{\rho}(1+3w).
$$

### PDF page 54

**Galaxy counts in a redshift shell.** For a flat universe,

$$
r(z)=\mechanical{c}\int_{1/(1+z)}^1\frac{da}{a^2H(a)},
\qquad
V_{\mathrm{com}}(z)=\frac{4\pi}{3}r^3(z).
$$

The exercise takes the comoving volume between $z=0.4$ and $z=0.5$ to be $\Delta V_{\mathrm{com}}=V_{\mathrm{com}}(0.5)-V_{\mathrm{com}}(0.4)\simeq\quantity{15}{Gpc^3}$. How many Milky Way-like galaxies per square arcminute does this imply if their comoving number density is one per $(\quantity{100}{Mpc})^3$?

With $\quantity{100}{Mpc}=\quantity{0.1}{Gpc}$, the assumed volume and number density give

$$
N\simeq\frac{\quantity{15}{Gpc^3}}{(\quantity{0.1}{Gpc})^3}=1.5\times10^4.
$$

The full sky covers roughly $4.0\times10^4$ square degrees, or $1.44\times10^8$ square arcminutes. Thus the stated inputs give

$$
\frac{N}{A_{\mathrm{sky}}}
\simeq\frac{1.5\times10^4}{1.44\times10^8}\,\unit{arcmin^{-2}}
\simeq\quantity{1.0\times10^{-4}}{arcmin^{-2}}.
$$

The handwritten intermediate count $1.5\times10^3$ and final estimate of one per square arcminute are inconsistent with the volume and number density stated at the top of the page.

### PDF page 55

**Lecture, November 6, 2018.** For $1+2\rightleftharpoons3+4$, write the rate equation as

$$
\frac{1}{a^3}\frac{d(a^3n_1)}{dt}
=n_1^{(0)}n_2^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{12\to34}
\left[
\underbrace{\frac{n_3n_4}{n_3^{(0)}n_4^{(0)}}}_{\text{production}}
-\underbrace{\frac{n_1n_2}{n_1^{(0)}n_2^{(0)}}}_{\text{destruction}}
\right].
$$

In equilibrium the two rate densities are equal.

$$
n_3^{(0)}n_4^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{34\to12}
=n_1^{(0)}n_2^{(0)}\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{12\to34}.
$$

The units on both sides are $\unit{m^{-3}\,s^{-1}}$. This detailed-balance relation connects the thermally averaged forward and reverse coefficients. The notes compare it informally with Le Châtelier's principle and assume Maxwell–Boltzmann distributions for the thermal averages.

The reading reminder says “Recombination of primeval plasma” (1968). Apply the detailed-balance equation to neutrons and protons through $n+p\rightleftharpoons D+\gamma$.

### PDF page 56

If the reaction rate per particle times the age of the universe is much greater than one, the process occurs rapidly on cosmological timescales. To compare it with expansion, use $H(t)=d\ln a/dt=\dot a/a$ to rewrite the time derivative as

$$
\frac{1}{a^3}\frac{d(a^3n_1)}{dt}
=\frac{H(t)}{a^3}\frac{d(a^3n_1)}{d\ln a}.
$$

Dividing the rate equation by $H$ expresses the reaction term per interval in $\ln a$. When the relevant rate per particle is large compared with $H$, deuterium tracks equilibrium and its abundance can be obtained algebraically.

$$
\frac{n_Dn_\gamma}{n_D^{(0)}n_\gamma^{(0)}}
=\frac{n_nn_p}{n_n^{(0)}n_p^{(0)}},
\qquad
n_D=\frac{n_nn_p}{n_n^{(0)}n_p^{(0)}}n_D^{(0)},
$$

where the second expression uses $n_\gamma=n_\gamma^{(0)}$. In the nonrelativistic limit, the equilibrium density is

$$
n^{(0)}=g\int\frac{d^3\mechanical{\vec p}}{(2\pi)^3}f(\mechanical{p})
\simeq g\,e^{-\mechanical{m}/\thermal{T}}
\left(\frac{\mechanical{m}\thermal{T}}{2\pi}\right)^{3/2}
$$

in natural units. Once the equilibrium approximation fails, the abundance follows from numerical integration of the rate equation. Include neutron decay $n\to p+e^-+\bar\nu_e$ and the weak reaction $p+e^-\rightleftharpoons n+\nu_e$.

### PDF page 57

The equilibrium abundance of deuterium can be written using the deuteron binding energy $\energy{B}_D=\quantity{2.2}{MeV}$. In natural units,

$$
n_D=
\frac{n_nn_p}{\thermal{T}^3}\frac{g_D}{g_pg_n}
\left(\frac{2\pi\mechanical{m}_D\thermal{T}}{\mechanical{m}_n\mechanical{m}_p}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Let $n_{\mathrm{N}}=n_n+n_p$ denote the free-nucleon density. Approximating $\mechanical{m}_n\simeq\mechanical{m}_p$ and $\mechanical{m}_D\simeq2\mechanical{m}_p$ in the prefactor gives

$$
\frac{n_D}{n_{\mathrm{N}}}
\simeq\frac{n_nn_p}{n_{\mathrm{N}}^2}
\frac{n_{\mathrm{N}}}{\thermal{T}^3}
\frac{g_D}{g_pg_n}
\left(\frac{4\pi\thermal{T}}{\mechanical{m}_p}\right)^{3/2}
e^{\energy{B}_D/\thermal{T}}.
$$

Before much deuterium forms, $n_{\mathrm{N}}\simeq n_B$. Since $n_\gamma\propto\thermal{T}^3$, the second factor scales as the baryon-to-photon ratio, of order $10^{-9}$. The spin and nucleon fraction factors introduce no large or small scale here. The mass ratio supplies another small factor of order $(\unit{MeV}/\unit{GeV})^{3/2}$. For the deuteron fraction to approach order unity, the exponential must offset these suppressions. The notes estimate this happens around $\thermal{T}\sim\quantity{0.07}{MeV}$.

The next reaction considered is $D+p\rightleftharpoons{}^3\mathrm{He}+\gamma$, with the reaction rate per particle large compared with $H$. Helium-4 is tightly bound and the absence of a stable nucleus with mass number $A=5$ impedes further reactions. In the simplified picture, two neutrons and two protons end up in each helium-4 nucleus.

### PDF page 58

During radiation domination, $a\propto t^{1/2}$, so

$$
H=\frac{d\ln a}{dt}=\frac{1}{2t},
\qquad t=\frac{1}{2H}.
$$

The notes use the rough estimate $H\simeq(\quantity{1}{s^{-1}})(\thermal{k}_{\mathrm B}\thermal{T}/\quantity{1}{MeV})^2$. At $\thermal{k}_{\mathrm B}\thermal{T}=\quantity{0.07}{MeV}$ it gives $t\simeq\quantity{100}{s}$. The notes remark on the ability to estimate the scale factor at this epoch. They also quote Dodelson's estimate

$$
t\simeq(\quantity{132}{s})
\left(\frac{\quantity{0.1}{MeV}}{\thermal{k}_{\mathrm B}\thermal{T}}\right)^2
$$

and use $X_n=n_n/(n_n+n_p)=0.11$ at $\thermal{k}_{\mathrm B}\thermal{T}=\quantity{0.07}{MeV}$, with a reference to Dodelson's equation 3.30.

**Exercise.** Find the primordial helium-4 mass fraction $Y_{\mathrm p}$ given this neutron fraction. Let $n_n+n_p$ count nucleons before assembly and take the final products to be hydrogen and helium-4. Comparing number densities at a common scale factor gives $n_n+n_p=4n_{{}^4\mathrm{He}}+n_{\mathrm H}$. Approximating nuclear masses by their nucleon counts,

$$
Y_{\mathrm p}
\simeq\frac{4n_{{}^4\mathrm{He}}}{n_n+n_p}
=\frac{n_n+n_p-n_{\mathrm H}}{n_n+n_p}
=1-\frac{n_{\mathrm H}}{n_n+n_p}.
$$

### PDF page 59

If essentially all remaining neutrons are captured into surviving helium-4, two neutrons are needed per helium nucleus. Hence

$$
\left.\frac{4n_{{}^4\mathrm{He}}}{n_B}\right|_{\mathrm{today}}
\simeq
\left.\frac{2n_n}{n_n+n_p}\right|_{\thermal{k}_{\mathrm B}\thermal{T}\simeq\quantity{0.07}{MeV}}
=2(0.11)=0.22.
$$

The notes thus estimate that helium accounts for about $22\%$ of the baryonic mass in this simple calculation. At the time of nucleosynthesis, the plasma is ionized, with free electrons, protons, and helium nuclei. The neutron–proton rest-energy difference is $(\mechanical{m}_n-\mechanical{m}_p)\mechanical{c}^2\simeq\quantity{1.3}{MeV}$, about one part in a thousand of a nucleon rest energy.

The notes refer to Figure 3.2 for deuterium and remark that much of the calculation is performed numerically. They give approximate number abundances

$$
\frac{n_D}{n_B}\simeq 2\times10^{-5},
\qquad
\frac{n_{{}^7\mathrm{Li}}}{n_B}\sim10^{-10}.
$$

For lithium, the notes mention the Spite plateau and propose plotting abundance against metallicity.

![[Kyle Kabasares - Cosmology - lithium abundance versus metallicity axes.png|**Fig. 19** The manuscript sets up a lithium abundance plot against metallicity $[\mathrm{Fe}/\mathrm{H}]$ and leaves the axes empty.]]

### PDF page 60

For hydrogen recombination, consider $p+e^-\rightleftharpoons\mathrm{H}+\gamma$ and the forward rate coefficient $\langle\sigma\mechanical{v}_{\mathrm{rel}}\rangle_{p+e^-\to\mathrm{H}+\gamma}$. The hydrogen ground-state binding energy is $\quantity{13.6}{eV}$. The notes ask how likely it is that a photon produced by direct recombination ionizes another atom, and direct attention to recombination through the $n=2$ level.

![[Kyle Kabasares - Cosmology - hydrogen recombination and photoionization.png|**Fig. 20** An electron recombines with a proton and emits a photon. The second sketch shows an electron escaping a hydrogen atom.]]

**Lecture, November 8, 2018.** The class leaves Chapter 3 midway through. Exercise 8 treats recombination. The notes emphasize natural units and turn to Chapter 4, on Boltzmann equations and perturbations.

In the unperturbed flat model, the line element is $ds^2=-\mechanical{c}^2dt^2+a^2(t)\delta_{ij}dx^i dx^j$. The Einstein equation relates this geometry to the stress–energy placed in the universe. With the connection computed from the metric, free particles obey

$$
\frac{d^2x^\mu}{d\lambda^2}+\Gamma^\mu_{\nu\alpha}
\frac{dx^\nu}{d\lambda}\frac{dx^\alpha}{d\lambda}=0.
$$

Galaxies demonstrate the presence of inhomogeneity. The notes introduce scalar perturbations $\Psi$ and $\Phi$ in conformal Newtonian gauge, with the sign convention

$$
ds^2=-\mechanical{c}^2\left(1+\frac{2\Psi(x^\mu)}{\mechanical{c}^2}\right)dt^2
+a^2(t)\left(1+\frac{2\Phi(x^\mu)}{\mechanical{c}^2}\right)\delta_{ij}dx^i dx^j.
$$

The potentials are functions of spacetime and satisfy $|\Psi|/\mechanical{c}^2,\ |\Phi|/\mechanical{c}^2\ll1$ in the weak-field regime considered here, far from black holes.

### PDF page 61

A characteristic galactic potential has magnitude $|\Phi|\sim\mechanical{G}\mechanical{M}/R\sim(\quantity{200}{km\,s^{-1}})^2\ll\mechanical{c}^2$.

For a small perturbation of Minkowski space, write $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$. More generally, write $g_{\mu\nu}=g_{\mu\nu}^{(0)}+h_{\mu\nu}$ with $h_{\mu\nu}$ small relative to the background scale of the metric. In the conformal Newtonian gauge of page 60, with $\mechanical{c}=1$,

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

### PDF page 62

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

### PDF page 63

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

### PDF page 64

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

### PDF page 65

**Lecture, November 13, 2018.** The opening question is how to determine when the free-electron density $n_e$ departs from its equilibrium value $n_e^{(0)}$ during freeze-out.

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

The notes label $\hat p^i$ as the $i$th component of the direction unit vector, with $\delta_{ij}\hat p^i\hat p^j=1$. The factor $1/a$ converts the comoving gradient to a physical gradient. The sign of $\Psi$ in the coordinate velocity follows the derivation on page 63.

This page also uses a different momentum variable. Let $\mechanical{q}=a\sqrt{\delta_{ij}\mechanical{P}^i\mechanical{P}^j}$, which this page writes as $p$. It excludes the spatial perturbation factor included in the physical momentum $\mechanical{p}$ on pages 61–64. From $g_{\mu\nu}\mechanical{P}^\mu\mechanical{P}^\nu=0$,

$$
(\mechanical{P}^0)^2=\frac{1+2\Phi}{1+2\Psi}\mechanical{q}^2
\simeq(1+2\Phi-2\Psi)\mechanical{q}^2,
\qquad
\mechanical{P}^0\simeq(1+\Phi-\Psi)\mechanical{q}.
$$

The notes refer to Ma and Bertschinger's calculation in the two gauges, with a handwritten date of 1996. The cited paper is dated 1995. The next remark appears to refer to the line-of-sight method of Seljak and Zaldarriaga, which reduces the number of differential equations needed in the CMB calculation. [Ma and Bertschinger](https://arxiv.org/abs/astro-ph/9506072), [Seljak and Zaldarriaga](https://arxiv.org/abs/astro-ph/9603033).

### PDF page 66

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

### PDF page 67

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

### PDF page 68

**Baryon–photon fluid.** Photons scatter from electrons through Compton scattering in the Thomson limit, $\gamma+e^-\rightleftharpoons\gamma+e^-$. Coulomb interactions couple electrons to protons through $e^-+p^+\rightleftharpoons e^-+p^+$. Recombination proceeds through $e^-+p^+\rightleftharpoons\mathrm{H}+\gamma$. The notes sketch a scattering integral of the form $\int|\mathcal M|^2 f_e^{(0)}f_\gamma^{(0)}\,d^3\mechanical{\vec p}_\gamma\,d^3\mechanical{\vec p}_e$, with $\mathcal M$ the scattering amplitude.

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

### PDF page 69

The notes suggest inspecting the Planck CMB map and paying attention to the angular scale of its fluctuations. After recombination, photon scattering is rare. Before recombination, diffusion can smooth fluctuations on the distances photons travel by repeated scattering. Baryons falling into dark-matter potential wells compete with the pressure of the coupled photon–baryon fluid.

**Lecture, November 15, 2018.** The photon geodesic supplies $d\mechanical{p}/dt$ and $dx^i/dt$ for the temperature perturbation equation. In units with $\mechanical{c}=1$,

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

### PDF page 70

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

### PDF page 71

Using the momentum components from page 70, the temporal and spatial contractions reduce at first order to

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

### PDF page 72

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

### PDF page 73

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

### PDF page 74

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

### PDF page 75

The notes mark $\delta\sim1$ as the onset of nonlinear growth associated with galaxy formation.

**Lecture, November 20, 2018.** Use the perturbed FRW metric and expand $f=f^{(0)}(\mechanical{p},t)+f^{(1)}(\hat p^i,\vec x,t,\mechanical{p})$. Integrating the collisionless Boltzmann equation over $d^3\mechanical{\vec p}/(2\pi)^3$ gives

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

### PDF page 76

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

### PDF page 77

The velocity moment comes entirely from the anisotropic part $f^{(1)}$. In the notation of page 76,

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

### PDF page 78

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

### PDF page 79

For $n_e\sigma_{\mathrm T}/H\gg1$ in natural units, the photon and baryon bulk velocities agree to leading order.

The background scale factor is related to the component densities and pressures through $G_{\mu\nu}=8\pi\mechanical{G}\energy{T}_{\mu\nu}$ and, for a flat background, $H^2=(8\pi\mechanical{G}/3)\sum_i\energy{\rho}_i$. The perturbations $\Phi$ and $\Psi$ depend on density, pressure, momentum flow, and shear. These enter through $\delta\energy{T}^0{}_0$, the spatial trace, $\delta\energy{T}^i{}_0$, and the traceless spatial stress, respectively. The notes compare the shear contribution with the stress in a nonideal fluid.

**Lecture, November 27, 2018.** The book uses derivatives with respect to conformal time $\eta$. Write primes for these derivatives and suppress tildes on Fourier amplitudes. The photon, density, and pressureless velocity equations are

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

The photon collision term uses the sign from page 69. The notes also apply the first equation to collisionless relativistic neutrinos with zero right-hand side. The density equation applies to baryons, while their velocity equation acquires the drag term from page 78.

The system requires the perturbed Einstein equations. The notes list the time-time, spatial shear, and time-space momentum equations,

$$
\delta G^0{}_0=8\pi\mechanical{G}\,\delta\energy{T}^0{}_0,
\qquad
(\delta G^i{}_j)_{\mathrm{TF}}=8\pi\mechanical{G}\,(\delta\energy{T}^i{}_j)_{\mathrm{TF}},
\qquad
\delta G^0{}_j=8\pi\mechanical{G}\,\delta\energy{T}^0{}_j.
$$

They mark two as independent once the conservation equations are used and refer back to Ma and Bertschinger and to TASI lecture notes.

### PDF page 80

The Fourier transform sends $\nabla\Theta$ to $i\vec k\widetilde\Theta$. Since $d\eta=dt/a$, it also gives $dx/d\eta=a\,dx/dt$ and $\mathcal H=a'/a=aH$. The inverse $\mathcal H^{-1}$ sets the comoving Hubble scale in natural units.

For the mixed time component of stress–energy, $\delta\energy{T}^0{}_0=-\delta\energy{\rho}$. The fractional density contrast is $\delta=(\energy{\rho}-\energy{\rho}^{(0)})/\energy{\rho}^{(0)}$. With the Fourier notation of page 79, the time-time Einstein equation is

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

### PDF page 81

**Early universe.** Fix a comoving Fourier mode, for example $k=1/(\quantity{10}{Mpc})=\quantity{0.1}{Mpc^{-1}}$, and follow it back in time. In a flat background with matter, radiation, and a cosmological constant, conformal time is

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

### PDF page 82

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

### PDF page 83

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

### PDF page 84

Differentiating $\energy{\rho}_\gamma\propto a^{-4}$ gives $\energy{\rho}_\gamma'=-4(a'/a)\energy{\rho}_\gamma$. Deep in radiation domination, neglect $\energy{\rho}_{\mathrm m}$ in the differentiated equation on page 83 and use $8\pi\mechanical{G}a^2(\energy{\rho}_\gamma+\energy{\rho}_\nu)=3/\eta^2$. The boxed equation is

$$
\boxed{\eta\Phi''+4\Phi'=0.}
$$

For $\Phi\propto\eta^\alpha$, the indicial equation is $\alpha(\alpha-1)+4\alpha=0$. The two behaviors are constant and $\eta^{-3}$.

**Lecture, November 29, 2018.** On superhorizon scales $k\eta\ll1$, the monopole and matter density obey $\Theta_0'=-\Phi'$ and $\delta_{\mathrm m}'=-3\Phi'$. With negligible shear, the notes revisit the time-time equation

$$
k^2\Phi+3\mathcal H(\Phi'+\mathcal H\Phi)
=4\pi\mechanical{G}a^2
(\energy{\rho}_{\mathrm m}\delta_{\mathrm m}
+4\energy{\rho}_\gamma\Theta_0+4\energy{\rho}_\nu N_0).
$$

The conformal time is $\eta=\int dt/a$, and $\vec k$ labels the spatial Fourier transform with respect to $\vec x$. The notes use $k\eta=1$ to mark particle-horizon crossing. They also give $k/(aH)=1$ to mark crossing of the comoving Hubble scale $(aH)^{-1}$. In the radiation era the two conditions agree in units with $\mechanical{c}=1$.

### PDF page 85

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

### PDF page 86

When $a\gg a_{\mathrm{eq}}$ and matter dominates, the large-scale solution from page 85 approaches $\Phi(a)/\Phi(0)=9/10$.

![[Kyle Kabasares - Cosmology - potential across matter radiation equality.png|**Fig. 24** The normalized potential drops from $1$ to $9/10$ across matter–radiation equality for the sketched mode. The diagram marks horizon crossing later, during matter domination.]]

For a mode deep inside the horizon, $k\eta\gg1$, and well into matter domination, $a/a_{\mathrm{eq}}\gg1$, neglect the radiation density terms. Multiplication of the time-time constraint by $\eta^2$ highlights the factor $(k\eta)^2$ in the gradient term. The dominant balance is the Poisson limit,

$$
k^2\Phi\simeq 4\pi\mechanical{G}a^2\energy{\rho}_{\mathrm m}\delta_{\mathrm m}
=\frac{4\pi\mechanical{G}\energy{\rho}_{\mathrm m,0}}a\,\delta_{\mathrm m}.
$$

Thus $\Phi\simeq(4\pi\mechanical{G}\energy{\rho}_{\mathrm m,0}/k^2)\,\delta_{\mathrm m}/a$. The matter continuity equation is $\delta_{\mathrm m}'+ik\mechanical{v}_{\mathrm m}=-3\Phi'$ in conformal time.

### PDF page 87

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

### PDF page 88

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

### PDF page 89

At $a=10^{-3}$ the expansion rate in the matter-plus-radiation approximation is

$$
H=H_0\sqrt{\Omega_{\mathrm m}a^{-3}+\Omega_{\mathrm r}a^{-4}}
\simeq H_0\sqrt{0.3\times10^9}
=H_0\sqrt3\times10^4,
$$

where the last estimate keeps only matter. The notes use $H_0=\quantity{100h}{km\,s^{-1}\,Mpc^{-1}}$ and $h\simeq0.7$. The corresponding physical Hubble length in this approximation is $\mechanical{c}/H\simeq(\mechanical{c}/H_0)\,10^{-4}/\sqrt3\simeq\quantity{0.25}{Mpc}$. The handwritten conversion to megaparsecs uses a different numerical factor from the preceding expression for $H/H_0$.

**Lecture, December 4, 2018.** In natural units, the conformal-time photon temperature equation is

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

### PDF page 90

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

### PDF page 91

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

### PDF page 92

To obtain a photon equation at a given multipole $\ell$, multiply the conformal-time Boltzmann equation by $P_\ell(\mu)/(-i)^\ell$ and integrate with $d\mu/2$. The isotropic term $\Phi'$ multiplies $P_0=1$, while the terms linear in $\mu$ contain $P_1=\mu$. Also $P_2=(3\mu^2-1)/2$. The notes refer to equations 7.11–7.14.

For $\ell=0$, the collision integral and the term proportional to $ik\mu\Psi$ average to zero. With $\int_{-1}^1 \widetilde\Theta\mu\,d\mu/2=-i\widetilde\Theta_1$, the monopole equation is

$$
\widetilde\Theta_0'+k\widetilde\Theta_1+\widetilde\Phi'=0.
$$

For dark matter the Fourier continuity equation is $\delta'+ik\mechanical{v}+3\Phi'=0$. The spatial part of the perturbed metric is $a^2(1+2\Phi)d\vec x^{\,2}\simeq a_{\mathrm{eff}}^2d\vec x^{\,2}$, with $a_{\mathrm{eff}}=a(1+\Phi)$. Thus a comoving cell of unit coordinate volume has effective proper volume $V_{\mathrm{eff}}=a_{\mathrm{eff}}^3$.

The perturbed Einstein equation is $\delta G_{\mu\nu}=8\pi\mechanical{G}\,\delta\energy{T}_{\mu\nu}$ in natural units. Using the sign convention of page 80, the density constraint is

$$
k^2\Phi+3\mathcal H(\Phi'-\mathcal H\Psi)
=4\pi\mechanical{G}a^2\delta\energy{\rho}.
$$

On scales outside the horizon, $k\eta\ll1$, drop the terms explicitly suppressed by $k\eta$ in the initial-condition equations. For the homework initial conditions the notes refer to equation 7.12.

### PDF page 93

The two dimensionless scale comparisons in natural units are $k\eta$ for the particle horizon and $k/(aH)$ for the comoving Hubble length. In the flat perturbed line element,

$$
ds^2=-\mechanical{c}^2(1+2\Psi)dt^2
+a^2(1+2\Phi)(dx^2+dy^2+dz^2),
$$

with the potentials expressed here in units of $\mechanical{c}^2$. The coordinate separation $dx$ between comoving points is fixed. Its background proper length is $a\,dx$.

**Mode crossing at equality.** Use $k_{\mathrm{eq}}=a_{\mathrm{eq}}H(a_{\mathrm{eq}})/\mechanical{c}$ and the quoted $a_{\mathrm{eq}}=4.15\times10^{-5}/(\Omega_{\mathrm m}h^2)$. At equality the matter and radiation contributions are equal, so

$$
\begin{aligned}
H^2(a_{\mathrm{eq}})&\simeq2H_0^2\Omega_{\mathrm m}a_{\mathrm{eq}}^{-3},\\
k_{\mathrm{eq}}&\simeq\frac{H_0}{\mechanical{c}}
\sqrt{\frac{2\Omega_{\mathrm m}}{a_{\mathrm{eq}}}}
\simeq\quantity{0.073\,\Omega_{\mathrm m}h^2}{Mpc^{-1}}.
\end{aligned}
$$

This uses $\mechanical{c}/H_0\simeq(\quantity{3000}{Mpc})/h$. For the notes' $\Omega_{\mathrm m}=0.3$ and $h=0.7$, it gives $k_{\mathrm{eq}}\simeq\quantity{0.011}{Mpc^{-1}}$. The handwritten substitutions mix the length $(aH/\mechanical{c})^{-1}$ with its inverse wavenumber expression. The equality calculation above uses the horizon-crossing criterion from pages 84–85.

### PDF page 94

The scratch work continues the equality-scale exercise. The first line carries over $\quantity{124.5}{Mpc}/150$ and boxes the rounded result $\quantity{5/6}{Mpc}$ with a question mark.

A note attributed to Manoj gives the photon density parameter $\Omega_\gamma=2.5\times10^{-5}/h^2\simeq5\times10^{-5}$, consistent with $h\simeq0.7$. The side calculation converts $\mechanical{c}/H_0$ to approximately $\quantity{4.3\times10^3}{Mpc}$ for this $h$. The notes use $a_{\mathrm{eq}}\sim3\times10^{-4}$. The next scratch calculation combines powers of $a_{\mathrm{eq}}$ and quotes $10^{-5.5}$ with units of megaparsecs before replacing it with a line labeled “True answer,” $\quantity{0.01}{Mpc}$ as written.

The final number agrees with the scale derived on page 93 when given in inverse megaparsecs. The photon density in the margin is one part of the total radiation density used to find equality.

### PDF page 95

**Final lecture, December 6, 2018.** The notes compare the proper length of a fixed comoving mode with the physical Hubble length.

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

### PDF page 96

Deep in the radiation era, $a\ll a_{\mathrm{eq}}$, the physical Hubble length in the approximation of page 95 is

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

### PDF page 97

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

### PDF page 98

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

### PDF page 99

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

### PDF page 100

For a mode entering during radiation domination, let $a_{\mathrm H}$ be the scale factor at entry. The crossing condition becomes

$$
k=\frac{a_{\mathrm H}H(a_{\mathrm H})}{\mechanical{c}}
=\frac{a_{\mathrm H}H_0}{\mechanical{c}}
\sqrt{\Omega_{\mathrm r}a_{\mathrm H}^{-4}}
=\frac{H_0\sqrt{\Omega_{\mathrm r}}}{\mechanical{c}\,a_{\mathrm H}}.
$$

The notes use $\mechanical{c}=1$ in this calculation. A larger comoving wavenumber enters at a smaller scale factor in the radiation era.

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
| $\mechanical{P}^\mu$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Tangent to the particle trajectory for an appropriate normalization of the affine parameter. Its time component in SI is $\energy{E}/\mechanical{c}$. |
| $\energy{E}$ | $\unit{J}$ | Photon energy | Energy measured by a comoving observer, equal to $\mechanical{P}^0$ in natural units. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
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
| $\mechanical{m}_{\nu_i}$ | $\unit{kg}$ | Neutrino mass eigenvalue | Its rest energy is often given in electronvolts. |
| $\thermal{T}_{\mathrm{CMB},0}$, $\thermal{T}_{\mathrm{BBN}}$ | $\unit{K}$ | Present CMB and characteristic nucleosynthesis temperatures | Used to estimate the scale factor during nucleosynthesis. |
| $\Omega_i(a)$, $\Omega_i$ | $1$ | Density parameters | The time-dependent form is normalized by the critical density at $a$. An index without an argument here denotes the present value. |
| $g_i$ | $1$ | Internal degeneracy | Number of internal states of particle species $i$. |
| $f(\mechanical{\vec p},\vec x)$ | $1$ | Phase-space occupation | Distribution per internal state with the momentum measure used above. |
| $\thermal{S}$ | $\unit{J\,K^{-1}}$ | Entropy | For a homogeneous region, entropy density times proper volume. |
| $\thermal{s}$ | $\unit{J\,K^{-1}\,m^{-3}}$ | Entropy density | For negligible chemical potentials, enthalpy per volume divided by temperature. |
| $\thermal{\mu}$ | $\unit{J}$ | Chemical potential | Enters the thermal distribution through $\energy{E}-\thermal{\mu}$. |
| $n$ | $\unit{m^{-3}}$ | Particle number density | For a heavy nonrelativistic species, rest energy times number density gives the leading energy density. |
| $\thermal{T}_\gamma$, $\thermal{T}_\nu$ | $\unit{K}$ | Photon and neutrino temperatures | After decoupling, the two distributions have separate temperature scales. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\mechanical{v}_{\mathrm{rel}}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed entering the forward two-body reaction rate. |
| $\Gamma_3$ | $\unit{s^{-1}}$ | Destruction rate per particle of species $3$ | The reverse two-body rate coefficient times the density of species $4$. |
| $\mechanical{m}_p$, $\mechanical{m}_n$, $\mechanical{m}_D$ | $\unit{kg}$ | Proton, neutron, and deuteron masses | Their rest-energy difference sets the deuteron binding energy. |
| $\energy{B}_D$ | $\unit{MeV}$ | Deuteron binding energy | Energy required to dissociate a deuteron into a proton and a neutron. |
| $\eta_B$ | $1$ | Baryon-to-photon ratio | Baryon number density divided by photon number density. |
| $X_n$ | $1$ | Neutron number fraction | Fraction of the free nucleons that are neutrons. |
| $\Omega_k$ | $1$ | Curvature density parameter | Equals $-k\mechanical{c}^2/(R_0^2H_0^2)$ at the present epoch. |
| $w$ | $1$ | Equation-of-state parameter | Ratio of isotropic pressure to energy density. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
| $\energy{V}(\phi)$ | $\unit{J\,m^{-3}}$ | Scalar-field potential energy density | Potential term in the scalar-field stress–energy. |
| $\mechanical{M}_{\mathrm{Pl}}$ | $\unit{kg}$ | Reduced Planck mass | Its square is $\hbar\mechanical{c}/(8\pi\mechanical{G})$ in SI. |
| $R_{\mathrm{s}}$ | $\unit{m}$ | Schwarzschild radius | Used to estimate the event-horizon size of a black hole. |
| $\eta$ | $\unit{s}$ | Conformal time | Defined by $d\eta=dt/a$. The product $\mechanical{c}\eta$ has units of comoving distance. |
| $\Omega_\Lambda$ | $1$ | Present vacuum density parameter | Vacuum energy density divided by today's critical density. |
| $Y_{\mathrm p}$ | $1$ | Primordial helium-4 mass fraction | Approximated by the fraction of baryons bound into helium-4 nuclei. |
| $\Psi$, $\Phi$ | $\unit{m^2\,s^{-2}}$ | Scalar metric perturbation potentials | The time and space perturbations in the sign convention above. |
| $\Theta$ | $1$ | Fractional photon temperature perturbation | Defined by $\thermal{T}=\thermal{T}^{(0)}(1+\Theta)$. |
| $\sigma_{\mathrm T}$ | $\unit{m^2}$ | Thomson cross section | Low-energy cross section for photon scattering by an electron. |
| $\Gamma_{\mathrm T}$ | $\unit{s^{-1}}$ | Thomson scattering rate | Rate per photon in cosmic time for physical free-electron density $n_e$. |
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
