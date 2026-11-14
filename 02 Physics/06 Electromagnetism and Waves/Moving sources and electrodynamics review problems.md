---
title: "Moving sources and electrodynamics review problems"
---

> [!TLDR]
> Use retarded times for moving charges and revisit normalization, material boundaries, and central-dipole conditions.

## Worked lecture material

For the rotating dipole of [[Radiation from antennas and electromagnetic multipoles#Charges from the opposing currents|the section on Charges from the opposing currents]], the two perpendicular components are in quadrature. The handwritten line multiplies their summed squared amplitudes by a common $\sin^2\theta$. Each component has its own angle to the observation direction. With $\theta$ measured from the rotation axis $\hat{\mathbf z}$,

$$
\lvert\hat{\mathbf r}\times\electric{\mathbf p}_\omega\rvert^2
=\lvert\electric{p}_0\rvert^2\bigl[(1-\hat r_x^2)+(1-\hat r_y^2)\bigr]
=\lvert\electric{p}_0\rvert^2(1+\cos^2\theta).
$$

The angular power is proportional to $k^4$ times this factor.

##### Set 6, problem 4

A straight wire produces $\magnetic{B}=\magnetic{\mu}_0\circuit{I}/(2\pi\mechanical{r})$. A sphere of radius $\mechanical{R}$ sits at distance $\mechanical{a}\gg\mechanical{R}$ from the wire. The field across the sphere is approximately uniform, of magnitude $\magnetic{B}_0=\magnetic{\mu}_0\circuit{I}/(2\pi\mechanical{a})$.

![[Kyle Kabasares - Electrodynamics - Magnetizable sphere beside a long wire.png|**Fig. 133** The wire's field at the nearby sphere points into the page.]]

![[Kyle Kabasares - Electrodynamics - Coordinate axes for the sphere and wire.png|**Fig. 134** The coordinate axes drawn for the wire and sphere problem.]]

Use the uniform-field sphere solution discussed in the text. With $\theta$ measured from the applied field, the induced exterior magnetic scalar potential is

$$
\magnetic{\phi}_{\mathrm m,\mathrm{ind}}=\frac{\magnetic{M}_0\mechanical{R}^3\cos\theta}{3\mechanical{r}^2},
\qquad
\magnetic{M}_0=\frac{3}{\magnetic{\mu}_0}
\frac{\magnetic{\mu}-\magnetic{\mu}_0}{\magnetic{\mu}+2\magnetic{\mu}_0}
\frac{\magnetic{\mu}_0\circuit{I}}{2\pi\mechanical{a}}.
$$

The notes cite §5.10 and Eq. 5.115. The handwritten potential has a factor of $1/2$ where the uniformly magnetized sphere result on page 65 gives $1/3$.

##### Set 6, problem 5

Given $\circuit{\mathbf J}=\nabla\times\mathbf K$, Ampère's law gives $\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}_0\nabla\times\mathbf K$. The page proposes $\magnetic{\mathbf B}=\magnetic{\mu}_0\mathbf K$. This satisfies the curl equation directly, and requires $\nabla\cdot\mathbf K=0$ and compatible boundary data to serve as the full solution.

##### Relativity problem

An oscillating dipole $\electric{\mathbf p}(t)=\electric{p}_0\cos(\omega t)\hat{\mathbf z}$ sits at the origin. The notes start from the retarded scalar-potential integral with source $\electric{\rho}(\mechanical{\mathbf x}',t')$.

For a static dipole the scalar potential is $\electric{\mathbf p}\cdot\mechanical{\mathbf x}/(4\pi\electric{\varepsilon}_0\mechanical{r}^3)$ (Jackson, Eq. 4.10). In the retarded integral the time delta selects $t'=t-\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert/c$. The boxed calculation substitutes the common delay $t-\mechanical{r}/c$ and gives

$$
\electric{\phi}_{\mathrm{near}}(\mechanical{\mathbf x},t)
=\frac{\electric{\mathbf p}(t-\mechanical{r}/c)\cdot\mechanical{\mathbf x}}{4\pi\electric{\varepsilon}_0\mechanical{r}^3}.
$$

As on [[Maxwell equations, retarded potentials, and conservation#Infinite wire with a switched current|the section on Infinite wire with a switched current]], this is the quasistatic dipole term evaluated at retarded time. The notes treat the dipole as ideal and state that the current vanishes. An ideal time-varying dipole is neutral overall, with distributional sources $\electric{\rho}=-\electric{\mathbf p}(t)\cdot\nabla\delta^{(3)}(\mechanical{\mathbf x})$ and $\circuit{\mathbf J}=\dot{\electric{\mathbf p}}(t)\delta^{(3)}(\mechanical{\mathbf x})$ consistent with charge continuity. The spatial derivative of the delta in the scalar source also acts on the delay, giving the additional term described on [[Maxwell equations, retarded potentials, and conservation#Infinite wire with a switched current|the section on Infinite wire with a switched current]].

##### Set 7, problem 1

The page sketches a particle trajectory that changes direction at the origin, with the angle $\theta$ shown from the positive $\mechanical{x}$ axis.

![[Kyle Kabasares - Electrodynamics - Particle trajectory turning at the origin.png|**Fig. 135** Spatial sketch of two trajectory branches meeting at the origin.]]

![[Kyle Kabasares - Electrodynamics - Spacetime trajectories and observers.png|**Fig. 136** Spacetime sketch with observer locations and signal paths.]]

For a stationary observer a distance $\mechanical{a}$ away, the light signal from the kink reaches the observer at $t=\mechanical{a}/c$.

![[Kyle Kabasares - Electrodynamics - Observer receives signal from trajectory kink.png|**Fig. 137** The world line at fixed observer position intersects the signal from the origin at $\mechanical{a}/c$.]]

##### Retarded potential for the two trajectory branches

The notes refer to Jackson Chapter 14. For each branch, use the Liénard–Wiechert scalar potential. In SI, with $\mechanical{R}$ the source-to-observer distance and $\hat{\mathbf n}$ its direction at the retarded event,

$$
\electric{\phi}(\mechanical{\mathbf x},t)=\frac{\electric{q}}{4\pi\electric{\varepsilon}_0}
\left.\frac{1}{(1-\boldsymbol\beta\cdot\hat{\mathbf n})\mechanical{R}}\right|_{\mathrm{ret}},
\qquad
\boldsymbol\beta=\frac{\mechanical{\mathbf v}}{c}.
$$

The handwritten line also gives the form proportional to $1/\mechanical{R}$, which applies when $\boldsymbol\beta\cdot\hat{\mathbf n}=0$ at the retarded event.

For $t>\mechanical{a}/c$, the observer sees the branch after the kink. At source time $t'$, the particle has planar coordinates $(\mechanical{v}t'\cos\theta,\mechanical{v}t'\sin\theta)$ on the line of slope $\tan\theta$. The handwritten work initially uses an in-plane observer at $(\mechanical{a},0)$, with distance

$$
\mechanical{R}(t')=
\sqrt{(\mechanical{a}-\mechanical{v}t'\cos\theta)^2+(\mechanical{v}t'\sin\theta)^2}.
$$

It then crosses out that expression and proceeds with $\mechanical{R}(t')=\sqrt{\mechanical{a}^2+\mechanical{v}^2(t')^2}$, which corresponds to an observer displaced perpendicular to the trajectory branch. This reduced distance yields the quadratic shown on the page.

$$
t=t'+\frac{\sqrt{\mechanical{a}^2+\mechanical{v}^2(t')^2}}{c},
\qquad
(c^2-\mechanical{v}^2)(t')^2-2c^2tt'=\mechanical{a}^2-c^2t^2.
$$

The retarded root satisfies $t'\leq t$. For the in-plane observer at $(\mechanical{a},0)$, the cross term $-2\mechanical{a}\mechanical{v}t'\cos\theta$ remains in the squared distance.

The observer is explicitly placed at $(0,0,\mechanical{a})$ on this page, perpendicular to the plane of motion. This gives the reduced distance used on [[#Retarded potential for the two trajectory branches|the section on Retarded potential for the two trajectory branches]]. For the branch with direction $(\cos\theta,\sin\theta,0)$, the unit vector from the particle to the observer and the normalized velocity are

$$
\hat{\mathbf n}=\frac{(-\mechanical{v}t'\cos\theta,-\mechanical{v}t'\sin\theta,\mechanical{a})}{\mechanical{R}(t')},
\qquad
\boldsymbol\beta=\frac{\mechanical{v}}{c}(\cos\theta,\sin\theta,0).
$$

Use the appropriate velocity and direction on each branch when evaluating $\boldsymbol\beta\cdot\hat{\mathbf n}$. Only the quadratic root with $t'<t$ is physically acceptable.

##### Maxwell equations and free-space potentials

The review begins with the four vacuum Maxwell equations from [[Maxwell equations, retarded potentials, and conservation#Electrodynamics and Maxwell's equations|the section on Electrodynamics and Maxwell's equations]]. For free-space solutions, the lecture lists the electrostatic scalar potential, the magnetostatic vector potential, and the time-dependent retarded scalar potential. With $s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert$,

$$
\begin{aligned}
\electric{\phi}_{\mathrm{static}}(\mechanical{\mathbf x})
&=\frac{1}{4\pi\electric{\varepsilon}_0}\int
\frac{\electric{\rho}(\mechanical{\mathbf x}')}{s}\,d^3\mechanical{x}',\\
\magnetic{\mathbf A}_{\mathrm{static}}(\mechanical{\mathbf x})
&=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\circuit{\mathbf J}(\mechanical{\mathbf x}')}{s}\,d^3\mechanical{x}',\\
\electric{\phi}(\mechanical{\mathbf x},t)
&=\frac{1}{4\pi\electric{\varepsilon}_0}\int
\frac{\electric{\rho}(\mechanical{\mathbf x}',t')\delta[t'-(t-s/c)]}{s}
\,d^3\mechanical{x}'\,dt'.
\end{aligned}
$$

The corresponding retarded vector potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\circuit{\mathbf J}(\mechanical{\mathbf x}',t')\delta[t'-(t-s/c)]}{s}
\,d^3\mechanical{x}'\,dt',
\qquad
s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert.
$$

If the full integrals are difficult, expand in inverse distance. In the static case the electric potential begins with a monopole and dipole, while the magnetic vector potential starts at dipole order.

$$
\begin{aligned}
\electric{\phi}&=\frac{1}{4\pi\electric{\varepsilon}_0}
\left[\frac{\electric{Q}}{\mechanical{r}}+
\frac{\electric{\mathbf p}\cdot\mechanical{\mathbf x}}{\mechanical{r}^3}+\cdots\right],\\
\magnetic{\mathbf A}&=\frac{\magnetic{\mu}_0}{4\pi}
\left[0+\frac{\magnetic{\mathbf m}\times\mechanical{\mathbf x}}{\mechanical{r}^3}+\cdots\right].
\end{aligned}
$$

The magnetostatic term uses a cross product as on [[Steady currents, vector potentials, and magnetic multipoles#Magnetic multipole expansion|the section on Magnetic multipole expansion]]. For a harmonic source, the radiation potential has a common factor $\magnetic{\mu}_0e^{i(k\mechanical{r}-\omega t)}/(4\pi\mechanical{r})$. Its electric dipole coefficient is $-i\omega\electric{\mathbf p}_\omega$ by continuity in the $e^{-i\omega t}$ convention. The magnetic dipole enters through the next spatial-phase term with coefficient $-ik\magnetic{\mathbf m}_\omega\times\hat{\mathbf r}$. The review line indicates both moments schematically.

##### Normalizing model sources

Given a configuration, identify $\electric{\rho}$ and $\circuit{\mathbf J}$ and keep the delta normalization consistent with the integration measure. The current through a normal cross section is $\circuit{I}=\int\circuit{\mathbf J}\cdot\hat{\mathbf n}\,dA$.

![[Kyle Kabasares - Electrodynamics - Normal cross section for a ring current.png|**Fig. 138** A small cross section through the azimuthal ring current.]]

For a ring at $\mechanical{r}=\mechanical{R}$, $\theta=\pi/2$, the physical area element is $\mechanical{r}\,d\mechanical{r}\,d\theta$. The azimuthal current density is $(\circuit{I}/\mechanical{R})\delta(\mechanical{r}-\mechanical{R})\delta(\theta-\pi/2)$. With the coordinate measure $d\mechanical{r}\,d\theta$, absorb the Jacobian into the integrated density to obtain the same current.

For a spherical surface current with angular profile $\sin\theta\,\hat{\boldsymbol\varphi}$, a physical surface current density $\circuit{\mathbf K}$ gives $\circuit{\mathbf J}=\circuit{\mathbf K}\delta(\mechanical{r}-\mechanical{R})$. If the radial delta is normalized against $\mechanical{r}^2d\mechanical{r}$ instead, write $\delta(\mechanical{r}-\mechanical{R})/\mechanical{R}^2$ and absorb $\mechanical{R}^2$ into the angular coefficient.

The physical spherical area element is $\mechanical{R}^2d\Omega$. With $\widetilde{\mathbf K}=\mechanical{R}^2\circuit{\mathbf K}$ defined per unit solid angle, the same integrated source can be written in either form.

$$
\int \circuit{\mathbf J}\,d^3\mechanical{x}'
=\int_S\circuit{\mathbf K}\,dA
=\int\widetilde{\mathbf K}\,d\Omega.
$$

The review lists three tasks.

1. For a given configuration, find $\electric{\rho}$ and $\circuit{\mathbf J}$.
2. Set up the potential integral with the inverse-distance kernel and the appropriate integration measure.
3. Calculate the moments, including $\electric{Q}=\int\electric{\rho}\,d^3\mechanical{x}'$, $\electric{\mathbf p}=\int\electric{\rho}\mechanical{\mathbf x}'\,d^3\mechanical{x}'$, and $\electric{q}_{10}=\int\electric{\rho}Y_{10}^*\mechanical{r}'\,d^3\mechanical{x}'$. For a volume density in spherical coordinates the last measure includes $(\mechanical{r}')^2\sin\theta'$.

The integrals can sometimes be done exactly, for example with point charges or with a density whose angular dependence is a finite spherical-harmonic combination. Polynomials in $\cos\theta$ have this property. The constant uses $Y_{00}$, $\cos\theta$ uses $Y_{10}$, $\cos^2\theta$ uses $Y_{20}$ and $Y_{00}$, and $\cos^3\theta$ uses $Y_{30}$ and $Y_{10}$.

For a density with a simple angular dependence, use the spherical-harmonic expansion of the inverse distance with the coefficients $4\pi/(2\ell+1)$ as on [[Electrostatic multipoles and matching at charge sources#Matching radial solutions across a point charge|the section on Matching radial solutions across a point charge]]. The review points back to Chapter 4.

##### Materials and boundary-value problems

Materials can lead to difficult boundary-value problems. In electrostatic equilibrium $\electric{\mathbf E}=0$ inside a conductor. At an interface with no free surface sources, $\electric{D}_{\perp}$ and $\electric{\mathbf E}_{\parallel}$ are continuous, as are $\magnetic{B}_{\perp}$ and $\magnetic{\mathbf H}_{\parallel}$. Set up the differential equations and boundary conditions using the material laws.

- For a linear dielectric, $\electric{\mathbf D}=\electric{\varepsilon}\electric{\mathbf E}$.
- For a linear magnetic material, $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$.
- For the permanent magnet model, prescribe $\magnetic{\mathbf M}=\magnetic{\mathbf B}/\magnetic{\mu}_0-\magnetic{\mathbf H}$, constant in the example. The handwritten review reverses the sign of this definition relative to [[Magnetic materials, bound currents, and interface problems#Magnetostatics in materials|the section on Magnetostatics in materials ·]].

Use the static source equations

$$
\begin{aligned}
\nabla\cdot\electric{\mathbf D}&=\electric{\rho}_{\mathrm{free}},&
\nabla\times\electric{\mathbf E}&=0,\\
\nabla\cdot\magnetic{\mathbf B}&=0,&
\nabla\times\magnetic{\mathbf H}&=\circuit{\mathbf J}_{\mathrm{free}}.
\end{aligned}
$$

![[Kyle Kabasares - Electrodynamics - Field response around a singular free source.png|**Fig. 139** Fields around a localized free source.]]

A singular source can be treated as a condition at its location. Solve the homogeneous equation in the regions away from the source and impose the required behavior at the origin.

##### Final review of the central-dipole boundary conditions

Away from the source at $\mechanical{r}=0$, use $\nabla\times\magnetic{\mathbf H}=0$ and $\nabla\cdot\magnetic{\mathbf B}=0$. The sphere has $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$ inside. With $\magnetic{\mathbf H}=-\nabla\magnetic{\phi}_{\mathrm m}$, the potential satisfies $\nabla^2\magnetic{\phi}_{\mathrm m}=0$ in both $0<\mechanical{r}<\mechanical{R}$ and $\mechanical{r}>\mechanical{R}$.

- At infinity, $\magnetic{\phi}_{\mathrm m}\to0$.
- At $\mechanical{r}=\mechanical{R}$, continuity of $\magnetic{H}_{\parallel}$ gives continuity of the angular derivative. Continuity of $\magnetic{B}_{\perp}$ gives continuity of $\magnetic{\mu}\partial_{\mechanical{r}}\magnetic{\phi}_{\mathrm m}$ with the local permeability on each side.
- As $\mechanical{r}\to0$, match the singular part of the potential to the central dipole. The homogeneous response to the boundary is regular at the origin. The ideal dipole's own field has the corresponding singularity there.

The final handwritten coverage reminder says “Everything up to 7.2.”

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\circuit{\mathbf K}$ | $\unit{A\,m^{-1}}$ | Surface current density | Current per unit transverse length on a surface. |
