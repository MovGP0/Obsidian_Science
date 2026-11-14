---
title: "Cosmological geodesics and photon redshift"
---

> [!TLDR]
> Solve geodesic equations for matter and light and connect photon energy to cosmological expansion.

## Worked lecture material

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

##### Geodesics and coordinate transformations

A contravariant vector transforms as $V'^\mu=(\partial x'^\mu/\partial x^\alpha)V^\alpha$ under $x\mapsto x'$. The notes call this the usual vector transformation.

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

##### Free particle in flat spacetime

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

##### Energy of light along a geodesic

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

The lecture returns to the connection $\Gamma^\alpha_{\mu\nu}$ and the vector decomposition $\vec V=V^\mu\vec e_\mu$.

![[Kyle Kabasares - Cosmology - Spherical basis direction.png|**Fig. 9** Spherical coordinates tie the radial direction and the tangent direction $\hat\theta$ to the position on the sphere.]]

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

## Source

Kyle Kabasares, *Cosmology (Physics 240B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $z$ | $1$ | Redshift | Dimensionless shift of the observed wavelength relative to its emitted value. |
| $t$ | $\unit{s}$ | Cosmic time | Age measured from the early-universe origin used in the course. |
| $a$ | $1$ | Scale factor | Ratio of a physical separation at cosmic time $t$ to its value today for a pair of comoving points. |
| $ds^2$ | $\unit{m^2}$ | Squared spacetime interval | Metric contraction of two coordinate differentials when the line element is expressed in length units. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Spatial coordinates | The Cartesian coordinates and the spherical radial coordinate. |
| $\theta$, $\phi$ | $\unit{rad}$ | Spherical angles | Polar angle and azimuth in the spherical line element. |
| $\tau$ | $\unit{s}$ | Proper time | Elapsed time measured by a clock moving along the timelike path. |
| $\mechanical{F}$, $\mechanical{m}$, $\mechanical{a}$ | $\unit{N}$, $\unit{kg}$, $\unit{m\,s^{-2}}$ | Force, mass and acceleration | Quantities in Newton's second law. The acceleration here is distinct from the cosmological scale factor $a$. |
| $\mechanical{P}^\mu$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Tangent to the particle trajectory for an appropriate normalization of the affine parameter. Its time component in SI is $\energy{E}/\mechanical{c}$. |
| $\energy{E}$ | $\unit{J}$ | Photon energy | Energy measured by a comoving observer, equal to $\mechanical{P}^0$ in natural units. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Physical spatial momentum | Momentum components measured in a local orthonormal frame. |
| $A$ | $\unit{m}$ | Comoving curvature radius | Radius of the embedded three-sphere before multiplication by the scale factor. |
| $V$ | $\unit{m^3}$ | Proper spatial volume | A shell is evaluated at a fixed cosmic time. |
| $\sigma$ | $\unit{m^2}$ | Reaction cross section | Averaged together with relative speed to obtain the rate coefficient. |
| $\phi$ | $\unit{GeV}$ | Homogeneous scalar field | Field amplitude expressed in energy units with $\hbar=\mechanical{c}=1$. |
| $\mu$ | $1$ | Direction cosine for a photon Fourier mode | Dot product of the photon direction with the wavevector direction. |
| $\delta$ | $1$ | Density contrast | Ratio of a first-order density perturbation to the homogeneous background. For nonrelativistic matter of fixed particle mass, the number and mass density contrasts agree. |
