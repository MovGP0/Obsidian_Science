---
title: "Polarization and dielectric boundary-value problems"
---

> [!TLDR]
> Use polarization, electric displacement, and interface conditions to solve shell and dielectric-sphere problems.

## Worked lecture material

##### Electrostatics in materials

In a conductor, mobile charges rearrange until the electric field inside vanishes. Charges in an insulator are bound, but their displacement in an applied field can partially cancel the field in the material.

![[Kyle Kabasares - Electrodynamics - Electric fields in conductors and insulators.png|**Fig. 69** Charge redistribution cancels the interior field in the conductor. Polarization reduces the interior field in the insulator.]]

The polarization $\electric{\mathbf P}$ describes the dipole moment per unit volume. Define the electric displacement and the bound volume charge density by

$$
\electric{\mathbf D}=\electric{\varepsilon}_0\electric{\mathbf E}+\electric{\mathbf P},
\qquad
\electric{\rho}_{\mathrm b}=-\nabla\cdot\electric{\mathbf P}.
$$

The total charge density is the sum of the free or externally supplied density $\electric{\rho}$ and the induced bound density $\electric{\rho}_{\mathrm b}$. The divergence of the displacement isolates the free charge.

$$
\nabla\cdot\electric{\mathbf D}
=\electric{\varepsilon}_0\nabla\cdot\electric{\mathbf E}+\nabla\cdot\electric{\mathbf P}
=(\electric{\rho}+\electric{\rho}_{\mathrm b})-\electric{\rho}_{\mathrm b}
=\electric{\rho},
\qquad
\nabla\times\electric{\mathbf E}=0.
$$

These equations need a material relation between $\electric{\mathbf D}$ and $\electric{\mathbf E}$. In general, expand each component of the displacement in powers of the field components.

$$
\electric{D}_i=(\electric{D}_0)_i
+\sum_j a_{ij}\electric{E}_j
+\sum_{j,k}b_{ijk}\electric{E}_j\electric{E}_k+\cdots.
$$

Typically the zero-field displacement vanishes and the higher-order terms are small.

##### Linear dielectrics and tangential boundary conditions

For a linear isotropic material, $\electric{\mathbf D}=\electric{\varepsilon}\electric{\mathbf E}$. The material permittivity is $\electric{\varepsilon}$ and its dielectric constant is $\electric{\varepsilon}/\electric{\varepsilon}_0$. The electrostatic equations are

$$
\nabla\cdot\electric{\mathbf D}=\electric{\rho},
\qquad
\nabla\times\electric{\mathbf E}=0,
\qquad
\electric{\mathbf D}=\electric{\varepsilon}\electric{\mathbf E}.
$$

In a homogeneous material these give the vacuum equations with $\electric{\varepsilon}_0$ replaced by $\electric{\varepsilon}$. At an interface the permittivity changes, so the two solutions need boundary conditions.

![[Kyle Kabasares - Electrodynamics - Interface between two permittivities.png|**Fig. 70** Interface separating media with permittivities $\electric{\varepsilon}_1$ and $\electric{\varepsilon}_2$.]]

![[Kyle Kabasares - Electrodynamics - Fields on either side of a dielectric interface.png|**Fig. 71** Constitutive relation on each side of the interface.]]

Take a narrow rectangular loop crossing the interface, with the long sides parallel to it. Stokes' theorem gives

$$
\oint\electric{\mathbf E}\cdot d\mechanical{\mathbf l}
=\int(\nabla\times\electric{\mathbf E})\cdot d\mechanical{\mathbf A}=0.
$$

![[Kyle Kabasares - Electrodynamics - Stokes loop across a dielectric interface.png|**Fig. 72** Rectangular contour with opposite orientations along the two long sides.]]

As the loop narrows, the short sides give vanishing contributions. The two long sides have equal length and opposite orientations. Therefore $\electric{\mathbf E}_{1,\parallel}=\electric{\mathbf E}_{2,\parallel}$.

##### Normal boundary conditions

Integrate $\nabla\cdot\electric{\mathbf D}=\electric{\rho}$ over a thin pillbox crossing the interface. With no free surface charge, the enclosed free charge tends to zero and the two normal fluxes cancel. Thus $\electric{D}_{2,\perp}=\electric{D}_{1,\perp}$.

![[Kyle Kabasares - Electrodynamics - Gaussian pillbox at a dielectric interface.png|**Fig. 73** The outward normals of the two pillbox faces point in opposite directions.]]

Bound surface charge can still produce a jump in the electric field. For $\hat{\mathbf n}$ directed from medium 1 to medium 2, Gauss's law for the electric field gives

$$
(\electric{\mathbf E}_2-\electric{\mathbf E}_1)\cdot\hat{\mathbf n}
=\frac{\electric{\sigma}}{\electric{\varepsilon}_0},
$$

where $\electric{\sigma}$ is the total surface charge density.

##### A point charge in a dielectric shell

Place a point charge $\electric{Q}$ at the center of an uncharged dielectric shell with permittivity $\electric{\varepsilon}$ and radii $\mechanical{a}<\mechanical{b}$. The cavity and the exterior are vacuum.

![[Kyle Kabasares - Electrodynamics - Point charge centered in a dielectric shell.png|**Fig. 74** The charge, vacuum cavity, and dielectric shell share a center.]]

Inside the cavity, $\oint\electric{\mathbf E}\cdot\hat{\mathbf n}\,dA=\electric{Q}/\electric{\varepsilon}_0$, and spherical symmetry makes the radial field constant on the Gaussian surface. More generally, Gauss's law for displacement gives the same flux $\electric{Q}$ at any radius around the center.

$$
\electric{\mathbf D}=\frac{\electric{Q}}{4\pi\mechanical{r}^2}\hat{\mathbf r},
\qquad
\electric{\mathbf E}=\frac{\electric{Q}}{4\pi\mechanical{r}^2}\hat{\mathbf r}
\begin{cases}
1/\electric{\varepsilon}_0,&0<\mechanical{r}<\mechanical{a}\ \text{or}\ \mechanical{r}>\mechanical{b},\\
1/\electric{\varepsilon},&\mechanical{a}<\mechanical{r}<\mechanical{b}.
\end{cases}
$$

##### A dielectric sphere inside a prescribed boundary

A dielectric sphere of radius $\mechanical{a}$ and permittivity $\electric{\varepsilon}$ sits inside a concentric spherical boundary at $\mechanical{b}$. Find the potential everywhere with $\electric{\phi}(\mechanical{b},\theta)=\electric{V}_0\cos\theta\propto Y_{10}$. The field is $\electric{\mathbf E}=-\nabla\electric{\phi}$.

![[Kyle Kabasares - Electrodynamics - Dielectric sphere within a prescribed outer boundary.png|**Fig. 75** Dielectric interior and a concentric outer surface with a cosine boundary potential.]]

##### Matching the fields at the dielectric sphere

Use the general radial solutions in the gap and the solutions regular at the origin inside the dielectric.

$$
\begin{aligned}
\electric{\phi}_{\mathrm{out}}
&=\sum_{\ell,m}\left(A_{\ell m}\mechanical{r}^{\ell}
+\frac{B_{\ell m}}{\mechanical{r}^{\ell+1}}\right)Y_{\ell m},
&&\mechanical{a}<\mechanical{r}<\mechanical{b},\\
\electric{\phi}_{\mathrm{in}}
&=\sum_{\ell,m} C_{\ell m}\mechanical{r}^{\ell}Y_{\ell m},
&&\mechanical{r}<\mechanical{a}.
\end{aligned}
$$

At the outer boundary,

$$
\electric{V}_0\cos\theta
=\sum_{\ell,m}\left(A_{\ell m}\mechanical{b}^{\ell}
+\frac{B_{\ell m}}{\mechanical{b}^{\ell+1}}\right)Y_{\ell m}.
$$

At the dielectric interface $\mechanical{r}=\mechanical{a}$, the normal displacement $\electric{D}_r$ and both tangential components of $\electric{\mathbf E}$ are continuous.

$$
\begin{aligned}
\electric{\varepsilon}_0\frac{\partial\electric{\phi}_{\mathrm{out}}}{\partial\mechanical{r}}
&=\electric{\varepsilon}\frac{\partial\electric{\phi}_{\mathrm{in}}}{\partial\mechanical{r}},\\
\frac{\partial\electric{\phi}_{\mathrm{in}}}{\partial\theta}
&=\frac{\partial\electric{\phi}_{\mathrm{out}}}{\partial\theta},\\
\frac{\partial\electric{\phi}_{\mathrm{in}}}{\partial\varphi}
&=\frac{\partial\electric{\phi}_{\mathrm{out}}}{\partial\varphi}.
\end{aligned}
$$

For example, the $\theta$ condition equates the two expansions in $\partial_\theta Y_{\ell m}$. Matching the continuous potential at the interface gives

$$
C_{\ell m}\mechanical{a}^{\ell}
=A_{\ell m}\mechanical{a}^{\ell}+\frac{B_{\ell m}}{\mechanical{a}^{\ell+1}}.
$$

The boundary value is proportional to $Y_{10}$, so only that mode contributes.

For the cosine boundary, the angular dependence of the potential is $Y_{10}$ in both regions.

![[Kyle Kabasares - Electrodynamics - Dipole mode in both dielectric regions.png|**Fig. 76** The single dipole mode appears inside the dielectric and in the surrounding gap.]]

$$
\electric{\phi}_{\mathrm{out}}=\left(A_{10}\mechanical{r}+\frac{B_{10}}{\mechanical{r}^2}\right)Y_{10},
\qquad
\electric{\phi}_{\mathrm{in}}=C_{10}\mechanical{r}Y_{10}.
$$

The three conditions for the coefficients are

$$
\begin{aligned}
\left(A_{10}\mechanical{b}+\frac{B_{10}}{\mechanical{b}^2}\right)Y_{10}
&=\electric{V}_0\cos\theta,\\
A_{10}\mechanical{a}+\frac{B_{10}}{\mechanical{a}^2}&=C_{10}\mechanical{a},\\
\electric{\varepsilon}_0\left(A_{10}-\frac{2B_{10}}{\mechanical{a}^3}\right)
&=\electric{\varepsilon}C_{10}.
\end{aligned}
$$

##### A dielectric sphere in a uniform applied field

Apply $\electric{\mathbf E}=-\electric{E}_0\hat{\mathbf z}$ far from the sphere. This is equivalent to requiring $\electric{\phi}\sim\electric{E}_0\mechanical{z}=\electric{E}_0\mechanical{r}\cos\theta$ as $\mechanical{r}\to\infty$.

![[Kyle Kabasares - Electrodynamics - Dielectric sphere in an applied field.png|**Fig. 77** Field lines distort near the dielectric sphere and approach a uniform field far away.]]

The potential again has only the $Y_{10}$ mode, with the same radial forms inside and outside. Replace the condition at $\mechanical{b}$ by $A_{10}Y_{10}=\electric{E}_0\cos\theta$. At $\mechanical{a}$, continuity of the potential and of the normal displacement gives the same two matching equations above.

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{\mathbf P}$ | $\unit{C\,m^{-2}}$ | Electric polarization | Electric dipole moment per unit volume. |
| $\electric{\mathbf D}$ | $\unit{C\,m^{-2}}$ | Electric displacement | Field whose divergence equals the free charge density. |
| $\electric{\rho}_{\mathrm b}$ | $\unit{C\,m^{-3}}$ | Bound volume charge density | Negative divergence of the polarization. |
| $\electric{\varepsilon}/\electric{\varepsilon}_0$ | $1$ | Relative permittivity | Material permittivity divided by the vacuum value. |
