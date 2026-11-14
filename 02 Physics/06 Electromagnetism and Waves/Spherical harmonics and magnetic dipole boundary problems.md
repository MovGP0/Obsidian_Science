---
title: "Spherical harmonics and magnetic dipole boundary problems"
---

> [!TLDR]
> Match spherical-harmonic solutions to a centered magnetic source and its prescribed boundary conditions.

## Worked lecture material

The final exam covers material through Chapter 7. The notes mark the course as nearly finished.

##### Magnetic potential of a uniformly magnetized block

**Problem 1.** For the magnetized block, $\nabla\cdot\magnetic{\mathbf M}=0$ in the volume. Only the surface term contributes to the magnetic scalar potential.

![[Kyle Kabasares - Electrodynamics - Uniformly magnetized block homework sketch.png|**Fig. 114** Magnetized block with a uniform interior magnetization.]]

$$
\magnetic{\phi}_{\mathrm m}(\mechanical{\mathbf x})
=\frac{1}{4\pi}\int_S
\frac{\magnetic{\mathbf M}(\mechanical{\mathbf x}')\cdot\hat{\mathbf n}'}
{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,dA'.
$$

##### Problem 5-1

For the rectangular current loop, start with the Biot–Savart or vector-potential integral. The line-current delta functions reduce the volume integral to an integral along the wire. A segment of length $\mechanical{L}$ can be parametrized from $-\mechanical{L}/2$ to $+\mechanical{L}/2$.

![[Kyle Kabasares - Electrodynamics - Rectangular current loop homework sketch.png|**Fig. 115** Directions of the current on the four sides of a rectangular loop.]]

##### Problem 6-2

For radial magnetization $\magnetic{\mathbf M}=\magnetic{M}_0\hat{\mathbf r}$ in a sphere, both the bound volume current $\nabla\times\magnetic{\mathbf M}$ and the surface current $\magnetic{\mathbf M}\times\hat{\mathbf n}$ vanish. The handwritten calculation combines the curl source with a surface dot product and gives $\magnetic{\mathbf H}=0$. The vanishing currents give $\magnetic{\mathbf A}=0$ in the free-space solution and hence $\magnetic{\mathbf B}=0$. Inside, $\magnetic{\mathbf H}=-\magnetic{\mathbf M}$ by the constitutive definition.

The polarization sketch shows a radial polarization that vanishes outside a sphere.

![[Kyle Kabasares - Electrodynamics - Polarization discontinuity at a sphere.png|**Fig. 116** Polarization inside the sphere and zero polarization outside.]]

Read the profile as $\electric{\mathbf P}=\electric{P}_0\mechanical{r}^2\cos\theta\,\hat{\mathbf r}\,\Theta(\mechanical{R}-\mechanical{r})$. The sketch places the nonzero polarization inside, fixing the order of the step-function argument. The volume and surface terms in SI are

$$
\electric{\phi}(\mechanical{\mathbf x})
=-\frac{1}{4\pi\electric{\varepsilon}_0}\int_V
\frac{\nabla'\cdot\electric{\mathbf P}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'
+\frac{1}{4\pi\electric{\varepsilon}_0}\int_S
\frac{\electric{\mathbf P}(\mechanical{\mathbf x}')\cdot\hat{\mathbf n}'}
{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,dA'.
$$

For the polarization example, the handwritten calculation uses $\mechanical{r}^2\cos\theta/\mechanical{R}^2$ as the radial profile and differentiates it directly. For a radial vector, the divergence also includes the spherical area factor. Writing the profile from [[#Magnetic potential of a uniformly magnetized block|the section on Homework review ·]] as $\electric{P}_r=\electric{P}_0\mechanical{r}^2\cos\theta$ inside, one obtains

$$
\nabla\cdot\electric{\mathbf P}
=\frac{1}{\mechanical{r}^2}\frac{\partial}{\partial\mechanical{r}}\bigl(\mechanical{r}^2\electric{P}_r\bigr)
=4\electric{P}_0\mechanical{r}\cos\theta.
$$

For the profile normalized by $\mechanical{R}^2$, use $\electric{P}_0=1/\mechanical{R}^2$ times the polarization amplitude. In either case the angular source is proportional to $Y_{10}$. Expanding the Coulomb kernel leaves the factor $(4\pi/3)Y_{10}(\theta,\varphi)Y_{10}^*(\theta',\varphi')\mechanical{r}_{<}/\mechanical{r}_{>}^2$ after angular selection. The remaining volume integral has radial factor $(\mechanical{r}')^3\mechanical{r}_{<}/\mechanical{r}_{>}^2$.

![[Kyle Kabasares - Electrodynamics - Observation radius outside a polarized sphere.png|**Fig. 117** For an exterior observation point, every source radius is smaller than the observation radius.]]

For volume sources, $0<\mechanical{r}'<\mechanical{R}$. Outside, $\mechanical{r}_{>}=\mechanical{r}$ and $\mechanical{r}_{<}=\mechanical{r}'$ throughout. Inside, split the radial integral at $\mechanical{r}'=\mechanical{r}$. For $\mechanical{r}'<\mechanical{r}$ the source radius is smaller. For $\mechanical{r}'>\mechanical{r}$ it is larger. In the surface integral $\mechanical{r}'=\mechanical{R}$ is fixed, so $\mechanical{r}_{<}=\min(\mechanical{r},\mechanical{R})$ and $\mechanical{r}_{>}=\max(\mechanical{r},\mechanical{R})$.

**Problem 6-3**

The notes set aside the free-space dipole expression for $\magnetic{\mathbf A}$ and propose representing the central dipole by a delta-function magnetization.

![[Kyle Kabasares - Electrodynamics - Point magnetic dipole inside a sphere.png|**Fig. 118** Point magnetic dipole at the center of a sphere.]]

Take $\magnetic{\mathbf M}=\magnetic{\mathbf m}_0\delta^{(3)}(\mechanical{\mathbf x})$. This magnetization contributes to the volume term of $\magnetic{\phi}_{\mathrm m}$ through its divergence and has no contribution at the outer surface.

##### Spherical-harmonic solution for a central magnetic dipole

Away from the origin and the interface, $\nabla^2\magnetic{\phi}_{\mathrm m}=0$. Treat the source at the origin as a condition on the singular part of the solution. The general radial factors are $\mechanical{r}^{\ell}$ and $\mechanical{r}^{-\ell-1}$. A dipole has $\ell=1$. Choose the polar axis along the dipole, so that only $Y_{10}$ contributes.

$$
\begin{aligned}
\magnetic{\phi}_{\mathrm m,\mathrm{out}}&=(A\mechanical{r}+B/\mechanical{r}^2)Y_{10},\\
\magnetic{\phi}_{\mathrm m,\mathrm{in}}&=(C\mechanical{r}+D/\mechanical{r}^2)Y_{10}.
\end{aligned}
$$

Decay at infinity gives $A=0$. At $\mechanical{r}=\mechanical{R}$, continuity of $\magnetic{H}_{\parallel}$ matches the angular derivatives, while continuity of $\magnetic{B}_{\perp}$ matches the permeability-weighted radial derivatives.

$$
\begin{aligned}
A\mechanical{R}+\frac{B}{\mechanical{R}^2}&=C\mechanical{R}+\frac{D}{\mechanical{R}^2},\\
\left.\magnetic{\mu}\frac{\partial\magnetic{\phi}_{\mathrm m,\mathrm{in}}}{\partial\mechanical{r}}\right|_{\mechanical{R}}
&=\left.\magnetic{\mu}_0\frac{\partial\magnetic{\phi}_{\mathrm m,\mathrm{out}}}{\partial\mechanical{r}}\right|_{\mechanical{R}}.
\end{aligned}
$$

![[Kyle Kabasares - Electrodynamics - Centered dipole source boundary condition.png|**Fig. 119** The dipole at the center sets the singular part of the interior potential.]]

Near the origin, the interior solution must reproduce the dipole's $\cos\theta/\mechanical{r}^2$ behavior. In the convention of the scalar-potential integral on [[Magnetic materials, bound currents, and interface problems#Magnetic scalar potential at an interface|the section on Magnetic scalar potential at an interface]], a prescribed delta-function magnetization alone gives

$$
\magnetic{\phi}_{\mathrm{dip}}
=\frac{\magnetic{\mathbf m}_0\cdot\mechanical{\mathbf x}}{4\pi\lvert\mechanical{\mathbf x}\rvert^3}
=\frac{\magnetic{m}_0\cos\theta}{4\pi\mechanical{r}^2}.
$$

The last handwritten expression leaves the normalization factor implicit.

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.
