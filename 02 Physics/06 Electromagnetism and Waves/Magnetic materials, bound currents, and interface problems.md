---
title: "Magnetic materials, bound currents, and interface problems"
---

> [!TLDR]
> Use magnetization and boundary conditions to find fields in and around magnetized spheres, cylinders, and shells.

## Worked lecture material

##### Magnetostatics in materials

In vacuum, $\nabla\cdot\magnetic{\mathbf B}=0$ and $\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}_0\circuit{\mathbf J}$. Write $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$, with gauge freedom $\magnetic{\mathbf A}'=\magnetic{\mathbf A}+\nabla\chi$. In the gauge $\nabla\cdot\magnetic{\mathbf A}=0$, solve $\nabla^2\magnetic{\mathbf A}=-\magnetic{\mu}_0\circuit{\mathbf J}$ with the free-space integral from [[Steady currents, vector potentials, and magnetic multipoles#Integral solution for steady currents|the section on Integral solution for steady currents]].

A material can respond to a magnetic field through magnetization $\magnetic{\mathbf M}$, the magnetic dipole moment per unit volume. Define the auxiliary field

$$
\magnetic{\mathbf H}=\frac{\magnetic{\mathbf B}}{\magnetic{\mu}_0}-\magnetic{\mathbf M}.
$$

As polarization in electrostatics is associated with bound charges, magnetization is associated with bound currents. The total current density is the sum of the supplied free current $\circuit{\mathbf J}$ and the bound current $\circuit{\mathbf J}_{\mathrm b}$. The two curl equations distinguish these sources.

$$
\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}_0\circuit{\mathbf J}_{\mathrm{tot}},
\qquad
\nabla\times\magnetic{\mathbf H}=\circuit{\mathbf J},
\qquad
\nabla\cdot\magnetic{\mathbf B}=0.
$$

A material relation between $\magnetic{\mathbf B}$ and $\magnetic{\mathbf H}$ is needed. One can write a constant term $\magnetic{\mathbf H}_0$, a term linear in the components of $\magnetic{\mathbf B}$, quadratic terms, and higher orders. Whereas $\electric{\mathbf D}\propto\electric{\mathbf E}$ is a common electrostatic approximation, higher terms in the magnetic response can be important. The notes write a general constitutive relation $\magnetic{\mathbf H}=\magnetic{\mathbf H}(\magnetic{\mathbf B})$.

##### Hysteresis and two simple material models

The magnetic response can depend on how the field was reached. The notes sketch a hysteresis loop and indicate rate dependence schematically as $\magnetic{\mathbf H}=f(\magnetic{\mathbf B},\partial\magnetic{\mathbf B}/\partial t)$.

![[Kyle Kabasares - Electrodynamics - Magnetic hysteresis loop.png|**Fig. 86** The field traces different branches when swept in opposite directions.]]

The lecture considers two simpler cases.

- A hard magnet has its own magnetization, $\magnetic{\mathbf M}\ne0$ even at zero applied field. The notes represent the zero-field term by $\magnetic{\mathbf H}_0$.
- A linear isotropic medium obeys $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$, analogous to the linear electrostatic constitutive relation.

##### Bound currents in a hard magnet

Aligned microscopic magnetic moments contribute to a macroscopic magnetization. Their equivalent bound currents produce the magnetic field.

![[Kyle Kabasares - Electrodynamics - Aligned magnetic dipoles in a hard magnet.png|**Fig. 87** Microscopic moments drawn with a common direction in a hard magnet.]]

$$
\circuit{\mathbf J}_{\mathrm b}=\nabla\times\magnetic{\mathbf M},
\qquad
\magnetic{\mathbf A}(\mechanical{\mathbf r})
=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\circuit{\mathbf J}_{\mathrm b}(\mechanical{\mathbf r}')}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}\,d^3\mechanical{r}'
=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\nabla'\times\magnetic{\mathbf M}(\mechanical{\mathbf r}')}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}\,d^3\mechanical{r}'.
$$

An alternative starts from the equations with zero free current. Then $\nabla\cdot\magnetic{\mathbf B}=0$ and $\nabla\times\magnetic{\mathbf H}=0$, while the magnetization still contributes to the field.

##### Magnetic scalar potential for a hard magnet

With zero free current, set $\magnetic{\mathbf H}=-\nabla\magnetic{\phi}_{\mathrm m}$ in a simply connected region. Then $\magnetic{\mathbf B}=\magnetic{\mu}_0(-\nabla\magnetic{\phi}_{\mathrm m}+\magnetic{\mathbf M})$. Taking the divergence gives

$$
\nabla^2\magnetic{\phi}_{\mathrm m}=\nabla\cdot\magnetic{\mathbf M}.
$$

This is a Poisson equation with effective source $-\nabla\cdot\magnetic{\mathbf M}$ in the Coulomb integral. For a localized magnet,

$$
\magnetic{\phi}_{\mathrm m}(\mechanical{\mathbf r})
=-\frac{1}{4\pi}\int
\frac{\nabla'\cdot\magnetic{\mathbf M}(\mechanical{\mathbf r}')}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}
\,d^3\mechanical{r}'.
$$

The vector-potential approach uses the bound-current integral from [[#Hysteresis and two simple material models|the section on Hysteresis and two simple material models]], followed by $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$ and $\magnetic{\mathbf H}=(\nabla\times\magnetic{\mathbf A})/\magnetic{\mu}_0-\magnetic{\mathbf M}$. In the scalar approach the factor $\magnetic{\mu}_0$ multiplies both $-\nabla\magnetic{\phi}_{\mathrm m}$ and $\magnetic{\mathbf M}$ in the expression for $\magnetic{\mathbf B}$.

- Study Jackson chapters 0 through §4.2 in detail, leaving out the cylindrical material.
- Review Green's functions for planes and spheres.
- Also review §§4.3, 4.4, and 4.7, with less emphasis on the energy material.
- The main emphasis is multipoles.

##### Electrostatics review

For a Dirichlet Green's function normalized by $\nabla'^2G=-4\pi\delta^3(\mechanical{\mathbf r}-\mechanical{\mathbf r}')$, the potential is given by a volume integral over the charge and a surface integral over the prescribed boundary potential (Jackson, Eq. 1.44).

$$
\electric{\phi}(\mechanical{\mathbf r})
=\frac{1}{4\pi\electric{\varepsilon}_0}\int_V
\electric{\rho}(\mechanical{\mathbf r}')G(\mechanical{\mathbf r},\mechanical{\mathbf r}')\,d^3\mechanical{r}'
-\frac{1}{4\pi}\int_{\partial V}\electric{\phi}(\mechanical{\mathbf r}')
\frac{\partial G(\mechanical{\mathbf r},\mechanical{\mathbf r}')}{\partial n'}\,dA'.
$$

The normal derivative points outward from the domain. With no boundary other than infinity, the solution for a localized charge is the ordinary Coulomb integral. For a plane or sphere, the method of images gives $G$.

![[Kyle Kabasares - Electrodynamics - Plane with prescribed boundary potential.png|**Fig. 88** Prescribed potential on a planar boundary.]]

For a charge-free half-space with a prescribed planar boundary potential, the volume integral vanishes. The planar kernel is the difference of the source and reflected-source terms.

$$
G(\mechanical{\mathbf r},\mechanical{\mathbf r}')
=\frac{1}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}
-\frac{1}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}''\rvert}.
$$

##### Approximate solutions

- Truncate a separated series, for example terms of the form $\sin(\alpha\mechanical{x})e^{\gamma\mechanical{z}}$ or $R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\varphi)$.
- At large radius, keep the lowest orders in the inverse-radius multipole series.

An exact free-space solution can be expanded to extract its large-radius behavior. In the SI convention used on [[Electrostatic multipoles and matching at charge sources#Multipole expansion|the section on Multipole expansion]],

$$
\begin{aligned}
\electric{\phi}(\mechanical{\mathbf r})
&=\frac{1}{4\pi\electric{\varepsilon}_0}\int
\frac{\electric{\rho}(\mechanical{\mathbf r}')}{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}\,d^3\mechanical{r}'
=\frac{1}{\electric{\varepsilon}_0}\sum_{\ell,m}
\frac{\electric{q}_{\ell m}}{2\ell+1}
\frac{Y_{\ell m}(\theta,\varphi)}{\mechanical{r}^{\ell+1}},\\
\electric{q}_{\ell m}
&=\int\electric{\rho}(\mechanical{\mathbf r}')(\mechanical{r}')^\ell
Y_{\ell m}^*(\theta',\varphi')\,d^3\mechanical{r}'.
\end{aligned}
$$

The handwritten last Coulomb integral uses $\magnetic{\mu}_0/(4\pi)$. The electrostatic source $\electric{\rho}$ requires the reciprocal vacuum permittivity used in the first example on the page.

Even without a closed form for the potential, one can compute the multipole coefficients directly from boundary data. For example, match $\sum_{\ell,m}B_{\ell m}Y_{\ell m}/\mechanical{r}^{\ell+1}$ to $\electric{V}_0\sin\theta$ at $\mechanical{r}=\mechanical{R}$.

![[Kyle Kabasares - Electrodynamics - Sphere with sine boundary potential.png|**Fig. 89** Sphere with prescribed boundary potential $\electric{V}_0\sin\theta$.]]

##### Energy of two separated charge distributions

The notes return to two charge distributions $\electric{\rho}_1$ and $\electric{\rho}_2$ supported in volumes $V_1$ and $V_2$, with center-to-center distance $\mechanical{R}$.

![[Kyle Kabasares - Electrodynamics - Separated charge distributions.png|**Fig. 90** Two localized charge distributions at separation $\mechanical{R}$.]]

The total electrostatic energy is $\energy{W}=\frac12\int\electric{\rho}\electric{\phi}\,d^3\mechanical{r}$. Discard the two self energies to isolate the interaction.

$$
\energy{W}_{\mathrm{int}}
=\frac12\left(
\int_{V_1}\electric{\rho}_1(\mechanical{\mathbf r})\electric{\phi}_2(\mechanical{\mathbf r})\,d^3\mechanical{r}
+\int_{V_2}\electric{\rho}_2(\mechanical{\mathbf r})\electric{\phi}_1(\mechanical{\mathbf r})\,d^3\mechanical{r}
\right).
$$

The factor of $1/2$ applies to the sum of both cross terms. At large separation, one can expand $\electric{\phi}_2$ in monopole, dipole, and higher terms of orders $\mechanical{R}^{-1}$, $\mechanical{R}^{-2}$, $\mechanical{R}^{-3}$, and so on, then integrate against $\electric{\rho}_1$.

Equivalently, the two cross integrals are equal by symmetry of the Coulomb kernel, giving

$$
\energy{W}_{\mathrm{int}}
=\frac{1}{4\pi\electric{\varepsilon}_0}\int_{V_1}d^3\mechanical{r}_1
\int_{V_2}d^3\mechanical{r}_2\,
\frac{\electric{\rho}_1(\mechanical{\mathbf r}_1)\electric{\rho}_2(\mechanical{\mathbf r}_2)}
{\lvert\mechanical{\mathbf r}_1-\mechanical{\mathbf r}_2\rvert}.
$$

Place the origin at the first distribution and resolve the position in the second distribution into the center-to-center displacement and a local coordinate. This prepares the inverse-distance expansion for large $\mechanical{R}$.

![[Kyle Kabasares - Electrodynamics - Local coordinates for two charge distributions.png|**Fig. 91** The separation vector is decomposed using coordinates local to the two distributions.]]

Write $\mechanical{\mathbf x}_2=\mechanical{\mathbf r}+\mechanical{\mathbf y}_2$, where $\mechanical{\mathbf r}$ joins the centers and $\lvert\mechanical{\mathbf y}_2\rvert\ll\mechanical{r}$. With the first distribution also small compared with the separation,

$$
\frac{1}{\lvert\mechanical{\mathbf x}_1-\mechanical{\mathbf x}_2\rvert}
=\frac{1}{\lvert\mechanical{\mathbf r}+(\mechanical{\mathbf y}_2-\mechanical{\mathbf x}_1)\rvert}
=\frac{1}{\mechanical{r}}
-\frac{(\mechanical{\mathbf y}_2-\mechanical{\mathbf x}_1)\cdot\mechanical{\mathbf r}}{\mechanical{r}^3}
+\cdots.
$$

##### Magnetostatics review

A note at the top of the lecture says that being around the average is fine.

In the Coulomb gauge, $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$ and $\nabla^2\magnetic{\mathbf A}=-\magnetic{\mu}_0\circuit{\mathbf J}$, with solution

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x})
=\frac{\magnetic{\mu}_0}{4\pi}\int\frac{\circuit{\mathbf J}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'.
$$

In a material, $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}_0-\magnetic{\mathbf M}$. The response may be complicated, so the lecture takes two special cases.

- A permanent magnet has prescribed $\magnetic{\mathbf M}=\magnetic{\mathbf M}_0$ independent of $\magnetic{\mathbf B}$.
- In a linear isotropic medium, $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$ and $\magnetic{\mathbf M}$ is also linear in $\magnetic{\mathbf B}$. The handwritten review uses $\magnetic{\mu}_0$ here. The material permeability $\magnetic{\mu}$ follows the definition on [[#Hysteresis and two simple material models|the section on Hysteresis and two simple material models]].

For the permanent magnet, use $\circuit{\mathbf J}_{\mathrm b}=\nabla\times\magnetic{\mathbf M}$ in the vector-potential integral.

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x})
=\frac{\magnetic{\mu}_0}{4\pi}\int\frac{\nabla'\times\magnetic{\mathbf M}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'.
$$

With bound currents alone, $\nabla\times\magnetic{\mathbf H}=0$ and $\nabla\cdot\magnetic{\mathbf B}=0$.

##### Magnetic scalar potential at an interface

With only bound currents, set $\magnetic{\mathbf H}=-\nabla\magnetic{\phi}_{\mathrm m}$. Then $\magnetic{\mathbf B}=\magnetic{\mu}_0(-\nabla\magnetic{\phi}_{\mathrm m}+\magnetic{\mathbf M})$ and $\nabla^2\magnetic{\phi}_{\mathrm m}=\nabla\cdot\magnetic{\mathbf M}$. For a magnetization that drops to zero across the surface, the divergence has a singular contribution there.

![[Kyle Kabasares - Electrodynamics - Magnetization ending at a boundary.png|**Fig. 92** A magnetization that ends at the surface has a boundary contribution to its divergence.]]

Separate the scalar-potential integral into volume and surface sources, with $\hat{\mathbf n}'$ the outward normal of the material.

$$
\magnetic{\phi}_{\mathrm m}(\mechanical{\mathbf x})
=-\frac{1}{4\pi}\int_V
\frac{\nabla'\cdot\magnetic{\mathbf M}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'
+\frac{1}{4\pi}\int_S
\frac{\hat{\mathbf n}'\cdot\magnetic{\mathbf M}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,dA'.
$$

The first term keeps the minus sign of the boxed formula above it in the handwriting. The vector potential admits a similar separation into volume and surface currents.

##### Infinitely long magnetized cylinder

Let a cylinder extending along $\mechanical{z}$ have uniform axial magnetization $\magnetic{\mathbf M}_0$.

![[Kyle Kabasares - Electrodynamics - Infinitely long axially magnetized cylinder.png|**Fig. 93** The magnetization runs parallel to the axis of the infinitely long cylinder.]]

The interior divergence is zero, and $\hat{\mathbf n}\cdot\magnetic{\mathbf M}_0=0$ on the cylindrical side. Both terms in $\magnetic{\phi}_{\mathrm m}$ vanish. Thus $\magnetic{\mathbf H}=0$, $\magnetic{\mathbf B}_{\mathrm{in}}=\magnetic{\mu}_0\magnetic{\mathbf M}_0$, and $\magnetic{\mathbf B}_{\mathrm{out}}=0$.

##### Transversely magnetized cylinder

Turn the uniform magnetization to $\magnetic{\mathbf M}=\magnetic{M}_0\hat{\mathbf x}$, perpendicular to the cylinder axis. The volume divergence still vanishes, but the side surface contributes.

![[Kyle Kabasares - Electrodynamics - Transversely magnetized cylinder axes.png|**Fig. 94** The cylinder axis is along $\mechanical{z}$ and the magnetization is along $\mechanical{x}$.]]

![[Kyle Kabasares - Electrodynamics - Top view of transverse magnetization.png|**Fig. 95** The outward normal makes an angle $\theta'$ with the magnetization.]]

On the cylindrical wall, $\hat{\mathbf n}'\cdot\magnetic{\mathbf M}=\magnetic{M}_0\cos\theta'$ and $dA'=\mechanical{R}\,d\theta'\,d\mechanical{z}'$. The resulting scalar potential is

$$
\magnetic{\phi}_{\mathrm m}
=\frac{1}{4\pi}\int
\frac{\magnetic{M}_0\cos\theta'\,\mechanical{R}\,d\theta'\,d\mechanical{z}'}
{\sqrt{(\mechanical{x}-\mechanical{R}\cos\theta')^2+(\mechanical{y}-\mechanical{R}\sin\theta')^2+(\mechanical{z}-\mechanical{z}')^2}}.
$$

##### Uniformly magnetized sphere

For a sphere with $\magnetic{\mathbf M}=\magnetic{M}_0\hat{\mathbf z}$, the volume divergence again vanishes. On the sphere, $\hat{\mathbf r}'\cdot\hat{\mathbf z}=\cos\theta'$.

![[Kyle Kabasares - Electrodynamics - Uniformly magnetized sphere.png|**Fig. 96** Spherical volume with uniform magnetization along $\mechanical{z}$.]]

The surface element is $\mechanical{R}^2\sin\theta'\,d\theta'\,d\varphi'$, as written in the corrected line in red.

$$
\magnetic{\phi}_{\mathrm m}(\mechanical{\mathbf x})
=\frac{1}{4\pi}\int
\frac{\magnetic{M}_0\cos\theta'\,\mechanical{R}^2}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d\Omega',
\qquad
\mechanical{\mathbf x}'=\mechanical{R}(\sin\theta'\cos\varphi',\sin\theta'\sin\varphi',\cos\theta').
$$

Use the spherical-harmonic expansion of the inverse distance. Orthogonality leaves only the term proportional to

$$
\frac{4\pi}{3}Y_{10}(\theta,\varphi)Y_{10}^*(\theta',\varphi')\,
\frac{\mechanical{r}_{<}}{\mechanical{r}_{>}^2}.
$$

Substitute $\cos\theta'=\sqrt{4\pi/3}\,Y_{10}(\theta',\varphi')$ into the surface integral. The angular integral of $Y_{10}Y_{10}^*$ is one, giving

$$
\magnetic{\phi}_{\mathrm m}
=\frac{\magnetic{M}_0\mechanical{R}^2\cos\theta}{3}
\frac{\mechanical{r}_{<}}{\mechanical{r}_{>}^2}
=\begin{cases}
\magnetic{M}_0\mechanical{z}/3,&\mechanical{r}<\mechanical{R},\\
\magnetic{M}_0\mechanical{R}^3\cos\theta/(3\mechanical{r}^2),&\mechanical{r}>\mechanical{R}.
\end{cases}
$$

Inside, $\magnetic{\mathbf H}_{\mathrm{in}}=-\magnetic{M}_0\hat{\mathbf z}/3$ and $\magnetic{\mathbf B}_{\mathrm{in}}=(2/3)\magnetic{\mu}_0\magnetic{M}_0\hat{\mathbf z}$. Outside, the negative gradient gives $\magnetic{\mathbf H}_{\mathrm{out}}$, and vacuum contributes the factor $\magnetic{\mu}_0$ to $\magnetic{\mathbf B}_{\mathrm{out}}$.

$$
\magnetic{\mathbf B}_{\mathrm{out}}
=-\magnetic{\mu}_0\left(
\frac{\partial\magnetic{\phi}_{\mathrm m}}{\partial\mechanical{r}}\hat{\mathbf r}
+\frac{1}{\mechanical{r}}\frac{\partial\magnetic{\phi}_{\mathrm m}}{\partial\theta}\hat{\boldsymbol\theta}
\right).
$$

##### Sphere with radially varying magnetization

Now take $\magnetic{\mathbf M}=\magnetic{M}_0\mechanical{r}^2\hat{\mathbf z}$. Find $\magnetic{\mathbf H}$ and $\magnetic{\mathbf B}$ using both terms of the scalar-potential integral. The divergence is easiest in Cartesian coordinates because the magnetization has only a $\mechanical{z}$ component.

$$
\nabla\cdot\magnetic{\mathbf M}
=\frac{\partial}{\partial\mechanical{z}}\left[\magnetic{M}_0(\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2)\right]
=2\magnetic{M}_0\mechanical{z},
\qquad
\hat{\mathbf n}\cdot\magnetic{\mathbf M}\big|_{\mechanical{R}}
=\magnetic{M}_0\mechanical{R}^2\cos\theta.
$$

$$
\magnetic{\phi}_{\mathrm m}
=-\frac{1}{4\pi}\int_V\frac{2\magnetic{M}_0\mechanical{r}'\cos\theta'}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'
+\frac{1}{4\pi}\int_S\frac{\magnetic{M}_0\mechanical{R}^2\cos\theta'}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,dA'.
$$

Expand the inverse distance in spherical harmonics again. Both sources have the angular dependence of $Y_{10}$.

For the sphere with $\magnetic{\mathbf M}=\magnetic{M}_0\mechanical{r}^2\hat{\mathbf z}$, project the volume source onto $Y_{10}$. The volume part of the potential is

$$
\magnetic{\phi}_{\mathrm m}^{(V)}
=-\frac{2\magnetic{M}_0\cos\theta}{3}
\int_0^{\mechanical{R}}(\mechanical{r}')^3
\frac{\mechanical{r}_{<}}{\mechanical{r}_{>}^2}\,d\mechanical{r}'.
$$

Outside, the integral is $\int_0^{\mechanical{R}}(\mechanical{r}')^4\,d\mechanical{r}'/\mechanical{r}^2=\mechanical{R}^5/(5\mechanical{r}^2)$. Inside, split the integral at $\mechanical{r}'=\mechanical{r}$.

$$
\int_0^{\mechanical{r}}\frac{(\mechanical{r}')^4}{\mechanical{r}^2}\,d\mechanical{r}'
+\int_{\mechanical{r}}^{\mechanical{R}}\mechanical{r}\mechanical{r}'\,d\mechanical{r}'
=\frac{\mechanical{r}^3}{5}+\frac{\mechanical{r}}{2}(\mechanical{R}^2-\mechanical{r}^2).
$$

Thus the two volume contributions are

$$
\begin{aligned}
\magnetic{\phi}_{\mathrm m,\mathrm{out}}^{(V)}
&=-\frac{2\magnetic{M}_0\cos\theta}{3}\frac{\mechanical{R}^5}{5\mechanical{r}^2},\\
\magnetic{\phi}_{\mathrm m,\mathrm{in}}^{(V)}
&=-\frac{2\magnetic{M}_0\cos\theta}{3}
\left[\frac{\mechanical{r}^3}{5}+\frac{\mechanical{r}}{2}(\mechanical{R}^2-\mechanical{r}^2)\right].
\end{aligned}
$$

The radial powers and the second interior limit here follow the dipole kernel and the antiderivatives on the handwritten page.

##### Linear magnetic media

In a linear material, use $\nabla\times\magnetic{\mathbf H}=\circuit{\mathbf J}$, $\nabla\cdot\magnetic{\mathbf B}=0$, and $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$. In a region of constant permeability these give the vacuum magnetostatic equations with $\magnetic{\mu}$ in place of $\magnetic{\mu}_0$.

$$
\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}\circuit{\mathbf J},
\qquad
\nabla\cdot\magnetic{\mathbf B}=0.
$$

The constitutive relation changes at an interface between media.

![[Kyle Kabasares - Electrodynamics - Interface between two magnetic permeabilities.png|**Fig. 97** Interface separating media with permeabilities $\magnetic{\mu}_1$ and $\magnetic{\mu}_2$.]]

At a magnetic interface with no free surface current, $\magnetic{\mathbf H}_{\parallel}$ is continuous. The absence of magnetic monopoles gives continuity of $\magnetic{B}_{\perp}$.

##### A current on the axis of a cylindrical shell

Find $\magnetic{\mathbf B}$ and $\magnetic{\mathbf H}$ for a straight current $\circuit{I}$ on the axis of a cylindrical shell with permeability $\magnetic{\mu}$. The cavity and exterior have permeability $\magnetic{\mu}_0$.

![[Kyle Kabasares - Electrodynamics - Axial current through a magnetic shell.png|**Fig. 98** A straight current through the axis of the shell produces a circulating magnetic field.]]

In the cavity, Ampère's law gives $2\pi\mechanical{r}\magnetic{B}_{\varphi}=\magnetic{\mu}_0\circuit{I}$. Within the shell, use $\nabla\times\magnetic{\mathbf H}=\circuit{\mathbf J}$, so $\oint\magnetic{\mathbf H}\cdot d\mechanical{\mathbf l}=\circuit{I}_{\mathrm{enc}}$. The same free current is enclosed in all three regions.

$$
\magnetic{H}_\varphi=\frac{\circuit{I}}{2\pi\mechanical{r}},
\qquad
\magnetic{B}_\varphi=
\begin{cases}
\magnetic{\mu}_0\circuit{I}/(2\pi\mechanical{r}),&\text{cavity and exterior},\\
\magnetic{\mu}\circuit{I}/(2\pi\mechanical{r}),&\text{shell}.
\end{cases}
$$

The shell expression uses $\magnetic{\mu}$ as a multiplier by $\magnetic{\mathbf B}=\magnetic{\mu}\magnetic{\mathbf H}$, although the handwritten line places it in the denominator.

##### Magnetostatics in media

Consider a linear medium with $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$, for example a sphere placed in an applied magnetic field. The vector potential is available, but the scalar formulation makes the connection to electrostatics more direct.

![[Kyle Kabasares - Electrodynamics - Sphere in a uniform magnetic field.png|**Fig. 99** Sphere of permeability $\magnetic{\mu}$ in an applied field.]]

With zero free current, write $\magnetic{\mathbf H}=-\nabla\magnetic{\phi}_{\mathrm m}$. Far from the sphere, $\magnetic{\mathbf H}\to(\magnetic{B}_0/\magnetic{\mu}_0)\hat{\mathbf z}$ and

$$
\magnetic{\phi}_{\mathrm m}\sim-\frac{\magnetic{B}_0}{\magnetic{\mu}_0}\mechanical{z}
=-\frac{\magnetic{B}_0}{\magnetic{\mu}_0}\mechanical{r}\cos\theta.
$$

At the spherical surface, $\magnetic{\mathbf H}_{\parallel}$ and $\magnetic{B}_{\perp}$ are continuous. In each homogeneous region, $\nabla\cdot\magnetic{\mathbf B}=0$ with $\magnetic{\mathbf B}=-\magnetic{\mu}\nabla\magnetic{\phi}_{\mathrm m}$ or $-\magnetic{\mu}_0\nabla\magnetic{\phi}_{\mathrm m}$ gives Laplace's equation. Since the far boundary data are proportional to $Y_{10}$ and the interface is spherical, the solution uses only this harmonic.

$$
\begin{aligned}
\magnetic{\phi}_{\mathrm m,\mathrm{in}}&=(A\mechanical{r}+B/\mechanical{r}^2)Y_{10},\\
\magnetic{\phi}_{\mathrm m,\mathrm{out}}&=(C\mechanical{r}+D/\mechanical{r}^2)Y_{10}.
\end{aligned}
$$

Continuity of $\magnetic{\mathbf H}_{\parallel}$ implies continuity of $\partial_\theta\magnetic{\phi}_{\mathrm m}$. If the azimuthal component is present, $\partial_\varphi\magnetic{\phi}_{\mathrm m}$ is continuous as well. At radius $\mechanical{R}$, matching the coefficient of the angular derivative gives

$$
A\mechanical{R}+\frac{B}{\mechanical{R}^2}
=C\mechanical{R}+\frac{D}{\mechanical{R}^2}.
$$

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{W}$ | $\unit{J}$ | Electrostatic energy | Energy of the charge configuration or of its electric field. |
| $\magnetic{\mathbf B}$ | $\unit{T}$ | Magnetic flux density | Field given by the curl of the magnetic vector potential. |
| $\magnetic{\mu}_0$ | $\unit{H\,m^{-1}}$ | Vacuum permeability | Constant relating magnetic circulation to enclosed steady current. |
| $\circuit{\mathbf J}$ | $\unit{A\,m^{-2}}$ | Current density | Current per unit area normal to the flow. |
| $\magnetic{\mathbf H}$ | $\unit{A\,m^{-1}}$ | Magnetic field strength | Auxiliary field whose curl equals the free current density in magnetostatics. |
| $\magnetic{\mathbf M}$ | $\unit{A\,m^{-1}}$ | Magnetization | Magnetic dipole moment per unit volume. |
| $\circuit{\mathbf J}_{\mathrm b}$ | $\unit{A\,m^{-2}}$ | Bound current density | Volume current associated with magnetization. |
| $\magnetic{\mu}$ | $\unit{H\,m^{-1}}$ | Material permeability | Ratio of magnetic flux density to field strength in a linear isotropic medium. |
| $\magnetic{\phi}_{\mathrm m}$ | $\unit{A}$ | Magnetic scalar potential | Scalar whose negative gradient gives the magnetic field strength where free current vanishes. |
