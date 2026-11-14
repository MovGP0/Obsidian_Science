---
title: "Steady currents, vector potentials, and magnetic multipoles"
---

> [!TLDR]
> Build the vector potential from steady currents, then find the field and extract the leading magnetic dipole term.

## Worked lecture material

The first three multipole orders are $\ell=0,1,2$.

##### Magnetostatics

The differential equations for steady currents in vacuum are

$$
\nabla\cdot\magnetic{\mathbf B}=0,\qquad
\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}_0\circuit{\mathbf J}.
$$

The corresponding integral statements are

$$
\oint_S\magnetic{\mathbf B}\cdot\hat{\mathbf n}\,dA=0,\qquad
\oint_C\magnetic{\mathbf B}\cdot d\mechanical{\mathbf l}
=\magnetic{\mu}_0\circuit{I}_{\mathrm{enc}}.
$$

Write $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$ to satisfy the divergence equation. The magnetic vector potentials $\magnetic{\mathbf A}$ and $\magnetic{\mathbf A}+\nabla\chi$ yield the same field. This is a gauge symmetry, analogous to shifting the zero of potential energy.

Substitute into Ampère's law and choose the Coulomb gauge $\nabla\cdot\magnetic{\mathbf A}=0$. A shift preserves this condition only if $\nabla^2\chi=0$.

$$
\nabla\times(\nabla\times\magnetic{\mathbf A})
=\nabla(\nabla\cdot\magnetic{\mathbf A})-\nabla^2\magnetic{\mathbf A}
=\magnetic{\mu}_0\circuit{\mathbf J}.
$$

Thus $\nabla^2\magnetic{\mathbf A}=-\magnetic{\mu}_0\circuit{\mathbf J}$, giving three scalar Poisson equations, one for each Cartesian component. The handwritten boxed equation has the opposite sign to the component equations below it. The curl identity gives the sign used in the component equations.

##### Integral solution for steady currents

The vector Poisson equation can be solved component by component, by analogy with the Coulomb integral for $\nabla^2\electric{\phi}=-\electric{\rho}/\electric{\varepsilon}_0$. For a localized steady current in free space, use

$$
\magnetic{\mathbf A}(\mechanical{\mathbf r})
=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\circuit{\mathbf J}(\mechanical{\mathbf r}')}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}\,d^3\mechanical{r}'.
$$

The curl gives the Biot–Savart integral.

$$
\magnetic{\mathbf B}(\mechanical{\mathbf r})
=\frac{\magnetic{\mu}_0}{4\pi}
\int\circuit{\mathbf J}(\mechanical{\mathbf r}')\times
\frac{\mechanical{\mathbf r}-\mechanical{\mathbf r}'}
{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert^3}\,d^3\mechanical{r}'.
$$

##### Circular current loop

Take a loop of radius $\mechanical{R}$ in the plane $\mechanical{z}=0$ and carrying current $\circuit{I}$ in the positive azimuthal direction.

![[Kyle Kabasares - Electrodynamics - Circular current loop and axis.png|**Fig. 78** The loop lies perpendicular to the $\mechanical{z}$ axis.]]

Current density measures current through an area perpendicular to the flow.

![[Kyle Kabasares - Electrodynamics - Cross section perpendicular to current.png|**Fig. 79** The cross section cuts across the direction of the current.]]

In cylindrical coordinates, the line current has density

$$
\circuit{\mathbf J}=\circuit{I}\delta(\mechanical{\rho}-\mechanical{R})\delta(\mechanical{z})\hat{\boldsymbol\varphi},
\qquad
\int\circuit{J}_{\varphi}\,d\mechanical{\rho}\,d\mechanical{z}=\circuit{I}.
$$

![[Kyle Kabasares - Electrodynamics - Area element normal to loop current.png|**Fig. 80** The cross-sectional area element is $d\mechanical{\rho}\,d\mechanical{z}$ at fixed azimuth.]]

Use $\hat{\boldsymbol\varphi}'=-\sin\varphi'\,\hat{\mathbf x}+\cos\varphi'\,\hat{\mathbf y}$. The negative sine agrees with the Cartesian integral written beneath the sketch.

![[Kyle Kabasares - Electrodynamics - Azimuthal direction along the current loop.png|**Fig. 81** The azimuthal unit vector is tangent to the loop.]]

The Cartesian $\mechanical{x}$ component of the potential is

$$
\magnetic{A}_x=\frac{\magnetic{\mu}_0}{4\pi}
\int
\frac{\circuit{I}\delta(\mechanical{\rho}'-\mechanical{R})\delta(\mechanical{z}')(-\sin\varphi')
\,\mechanical{\rho}'\,d\mechanical{\rho}'\,d\mechanical{z}'\,d\varphi'}
{\sqrt{(\mechanical{x}-\mechanical{\rho}'\cos\varphi')^2+
(\mechanical{y}-\mechanical{\rho}'\sin\varphi')^2+(\mechanical{z}-\mechanical{z}')^2}}.
$$

The $\mechanical{y}$ component of the vector potential has the same cylindrical-coordinate integral as $\magnetic{A}_x$, with $\cos\varphi'$ in place of $-\sin\varphi'$.

##### The current loop in spherical coordinates

In the spherical-coordinate version of the example (Jackson, §5.5), the loop lies at $\mechanical{r}=\mechanical{R}$ and $\theta=\theta_0$.

![[Kyle Kabasares - Electrodynamics - Current loop at fixed spherical polar angle.png|**Fig. 82** A circular loop at fixed radius and polar angle on a sphere.]]

An initial attempt is $\circuit{\mathbf J}=N\circuit{I}\delta(\mechanical{r}-\mechanical{R})\delta(\theta-\theta_0)\hat{\boldsymbol\varphi}$. Integrating the scalar component over volume would give $2\pi\mechanical{R}^2\sin\theta_0\,N\circuit{I}$. For normalization, the relevant integral is through an area perpendicular to the flow, with element $\mechanical{r}\,d\mechanical{r}\,d\theta$. Therefore $N=1/\mechanical{R}$.

![[Kyle Kabasares - Electrodynamics - Spherical area element perpendicular to loop current.png|**Fig. 83** The cross section at fixed azimuth has sides $d\mechanical{r}$ and $\mechanical{r}\,d\theta$.]]

For the equatorial loop, set $\theta_0=\pi/2$. In the vector-potential integral use the spherical volume element and the Cartesian distance between the observation point and the source.

$$
\begin{aligned}
\magnetic{A}_x
&=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{(\circuit{I}/\mechanical{R})\delta(\mechanical{r}'-\mechanical{R})
\delta(\theta'-\pi/2)(-\sin\varphi')}{s}
(\mechanical{r}')^2\sin\theta'\,d\mechanical{r}'\,d\theta'\,d\varphi',\\
s^2&=(\mechanical{x}-\mechanical{r}'\sin\theta'\cos\varphi')^2
+(\mechanical{y}-\mechanical{r}'\sin\theta'\sin\varphi')^2
+(\mechanical{z}-\mechanical{r}'\cos\theta')^2.
\end{aligned}
$$

The observation coordinates $\mechanical{x},\mechanical{y},\mechanical{z}$ can be left in Cartesian form.

##### Magnetic multipole expansion

For large distances compared with the current distribution, expand the kernel of the vector potential.

$$
\frac{1}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}
=\frac{1}{\mechanical{r}}
+\frac{\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}'}{\mechanical{r}^3}
+O(\mechanical{r}^{-3}).
$$

Substituting into the vector-potential integral gives terms of order $1/\mechanical{r}$, $1/\mechanical{r}^2$, and higher inverse powers. The first term vanishes since $\int\circuit{\mathbf J}(\mechanical{\mathbf r}')\,d^3\mechanical{r}'=0$ for a localized steady current (Jackson, p. 185). The leading possible term is the dipole.

$$
\magnetic{\mathbf A}_{\mathrm{dip}}
=\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}^3}
\int \circuit{\mathbf J}(\mechanical{\mathbf r}')
(\mechanical{\mathbf r}\cdot\mechanical{\mathbf r}')\,d^3\mechanical{r}'
=\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}^3}
\magnetic{\mathbf m}\times\mechanical{\mathbf r}.
$$

The magnetic dipole moment is

$$
\magnetic{\mathbf m}
=\frac12\int \mechanical{\mathbf r}'\times\circuit{\mathbf J}(\mechanical{\mathbf r}')\,d^3\mechanical{r}'.
$$

For a planar loop, the magnitude is current times the enclosed area and the direction follows the right-hand rule.

![[Kyle Kabasares - Electrodynamics - Circular loop magnetic dipole example.png|**Fig. 84** A circular current loop of radius $\mechanical{R}$ with moment along its axis.]]

For the circular loop $\magnetic{\mathbf m}=\pi\mechanical{R}^2\circuit{I}\hat{\mathbf z}$, giving $\magnetic{\mathbf A}\simeq\magnetic{\mu}_0\pi\mechanical{R}^2\circuit{I}(\hat{\mathbf z}\times\mechanical{\mathbf r})/(4\pi\mechanical{r}^3)$. Taking the curl gives the dipole field away from the source.

$$
\magnetic{\mathbf B}_{\mathrm{dip}}
=\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}^3}
\left[3\hat{\mathbf r}(\hat{\mathbf r}\cdot\magnetic{\mathbf m})-\magnetic{\mathbf m}\right].
$$

##### Field and vector potential of a straight wire

For an infinite straight wire carrying current $\circuit{I}$ in the $\hat{\mathbf z}$ direction, use a circular Ampèrian contour of cylindrical radius $\mechanical{\rho}$.

![[Kyle Kabasares - Electrodynamics - Amperian circle around a straight wire.png|**Fig. 85** The magnetic field circulates around the wire.]]

$$
\oint\magnetic{\mathbf B}\cdot d\mechanical{\mathbf l}
=\magnetic{\mu}_0\circuit{I}
=2\pi\mechanical{\rho}\magnetic{B}_\varphi,
\qquad
\magnetic{\mathbf B}=\frac{\magnetic{\mu}_0\circuit{I}}{2\pi\mechanical{\rho}}\hat{\boldsymbol\varphi}.
$$

Choose a vector potential along the wire. With $\circuit{\mathbf J}=\circuit{I}\delta(\mechanical{x})\delta(\mechanical{y})\hat{\mathbf z}$, a solution of $\nabla^2\magnetic{\mathbf A}=-\magnetic{\mu}_0\circuit{\mathbf J}$ is

$$
\magnetic{\mathbf A}=-\frac{\magnetic{\mu}_0\circuit{I}}{2\pi}
\ln\!\left(\frac{\mechanical{\rho}}{\mechanical{\rho}_0}\right)\hat{\mathbf z}.
$$

The potential diverges at the ideal wire and at infinity. Its curl yields the field above and is independent of the reference radius $\mechanical{\rho}_0$. The handwritten logarithmic formula omits the sign and permeability required by that curl.

##### Forces and energies in electrostatics

A localized charge configuration generates a potential with monopole and dipole terms.

$$
\electric{\phi}
=\frac{\electric{q}}{4\pi\electric{\varepsilon}_0\mechanical{r}}
+\frac{\electric{\mathbf p}\cdot\mechanical{\mathbf r}}
{4\pi\electric{\varepsilon}_0\mechanical{r}^3}+\cdots.
$$

If a second configuration has total charge $\electric{q}'$ and dipole moment $\electric{\mathbf p}'$, the leading interaction energy at large separation $\mechanical{r}$ is

$$
\energy{U}=\frac{\electric{q}\electric{q}'}{4\pi\electric{\varepsilon}_0\mechanical{r}}+\cdots.
$$

When the second configuration is neutral, its leading interaction can be the dipole energy $\energy{U}\simeq-\electric{\mathbf p}'\cdot\electric{\mathbf E}$ in the field of the first configuration.

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{U}$ | $\unit{J}$ | Electrostatic potential energy | Work required to bring the charges to their separation from infinity. |
| $\circuit{I}_{\mathrm{enc}}$ | $\unit{A}$ | Enclosed current | Net current through a surface spanning the Ampèrian contour. |
| $\magnetic{\mathbf m}$ | $\unit{A\,m^2}$ | Magnetic dipole moment | First moment of a localized steady current. |
