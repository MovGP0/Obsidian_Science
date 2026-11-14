---
title: "Conducting boundaries, image charges, and Green functions"
---

> [!TLDR]
> Uniqueness and Dirichlet Green functions connect the image-charge construction to the potential and induced charge at a conductor.

## Worked lecture material

Near the origin, the screened potential behaves as $\electric{V}_0/\mechanical{r}$. The delta term in its Laplacian is therefore $-4\pi\electric{V}_0\delta^3(\mechanical{\vec x})$, corresponding to a point charge $4\pi\electric{\varepsilon}_0\electric{V}_0$. Together with the smooth contribution away from the origin, Poisson's equation gives

$$
\electric{\rho}(\mechanical{\vec x})
=4\pi\electric{\varepsilon}_0\electric{V}_0\delta^3(\mechanical{\vec x})
-\electric{\varepsilon}_0\electric{V}_0a^2\frac{e^{-a\mechanical{r}}}{\mechanical{r}}.
$$

For $a>0$ the total charge is zero. The radial field is

$$
\electric{E}_r
=\electric{V}_0e^{-a\mechanical{r}}
\left(\frac{1}{\mechanical{r}^2}+\frac{a}{\mechanical{r}}\right).
$$

Multiplying by the area of a large sphere still gives a flux that tends to zero as its radius tends to infinity. By Gauss's law the net charge, including the point charge and its surrounding distribution, therefore vanishes.

##### Chapter 1 recap and conducting boundaries

Use Gauss's law to find the field directly when symmetry makes the flux simple. For general charge distributions in free space, solve Poisson's equation with the Coulomb kernel and take $\electric{\vec E}=-\nabla\electric{\phi}$. The electrostatic energy can be computed from the charge and potential or from the field energy, with care for point-charge singularities.

Conducting boundaries introduce induced surface charges. The starting example is the spherical shell from the earlier lecture.

![[Kyle Kabasares - Electrodynamics - Conducting boundary and induced charges.png|**Fig. 24** A positive point charge in a conducting shell induces opposite charge on the inner wall and positive charge on the outer wall of the neutral shell.]]

For a point charge near a conductor without the symmetry of a centered spherical shell, the induced charge distribution is unknown. It must make the field vanish in the conductor.

![[Kyle Kabasares - Electrodynamics - Point charge near a block conductor.png|**Fig. 25** A point charge beside a conducting block illustrates a geometry where the induced surface charge is difficult to determine directly.]]

The notes identify planar, spherical, and cylindrical boundaries as geometries that admit **method of images** solutions in suitable cases. One seeks a fictitious source distribution whose potential has the prescribed boundary value on the conductor.

![[Kyle Kabasares - Electrodynamics - Planar spherical and cylindrical boundaries.png|**Fig. 26** The three boundary geometries listed in the lecture. The planar example places the boundary at $x=0$.]]

For a point charge on the right of a plane held at zero potential, use the potential of two charges on the right-hand side. On the conducting side the potential is zero.

![[Kyle Kabasares - Electrodynamics - Point charge beside a grounded plane.png|**Fig. 27** The real charge $\electric{Q}$ lies on the right of the grounded plane.]]

For the grounded plane at $x=0$, the real charge $+\electric{Q}$ is at $\mechanical{\vec x}'=(\mechanical{a},0,0)$, and the image charge $-\electric{Q}$ is at $\mechanical{\vec x}''=(-\mechanical{a},0,0)$. On the side containing the real charge,

$$
\electric{\phi}_{\mathrm{right}}(\mechanical{\vec x})
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\left(
\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}
-\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}''\rvert}
\right).
$$

The distances are equal on the plane, so the potential there is zero. For a grounded sphere, the exterior potential is likewise the sum of the real-charge potential and an image potential, with the image strength $\electric{q}$ and location $\mechanical{\vec x}''$ determined by the sphere and the real charge. The interior conductor is at zero potential. See Jackson, equation 2.4. The notes mention a similar construction for cylindrical geometry.

![[Kyle Kabasares - Electrodynamics - Point charge beside a grounded sphere.png|**Fig. 28** A point charge $\electric{Q}$ is outside a sphere held at zero potential.]]

##### Dirichlet Green's function

A **Dirichlet Green's function** obeys $\nabla_{\vec x}^2G=-4\pi\delta^3(\mechanical{\vec x}-\mechanical{\vec x}')$ with $G=0$ at the boundary. For the grounded plane, it is the parenthesized difference of reciprocal distances above. Dirichlet conditions prescribe the potential itself. Neumann conditions prescribe its normal derivative, with zero normal derivative as the homogeneous condition on the potential.

For a charge density in a volume $\mechanical{V}$, the Dirichlet Green's function gives the general solution with prescribed potential on $S=\partial\mechanical{V}$,

$$
\begin{aligned}
\electric{\phi}(\mechanical{\vec x})
={}&\frac{1}{4\pi\electric{\varepsilon}_0}
\int_{\mechanical{V}}\electric{\rho}(\mechanical{\vec x}')
G(\mechanical{\vec x},\mechanical{\vec x}')\,d^3\mechanical{x}'\\
&-\frac{1}{4\pi}\oint_S\electric{\phi}(\mechanical{\vec x}')
\frac{\partial G(\mechanical{\vec x},\mechanical{\vec x}')}{\partial n'}\,dA'.
\end{aligned}
$$

The normal derivative is with respect to the source coordinate and points outward from the solution volume. The second term vanishes for zero boundary potential. The notes point to the derivation of Jackson, equation 1.44.

##### Force and energy near a grounded plane

There is no discussion section the next day. The lecture returns to a prescribed-potential boundary and recaps the exact image solution.

![[Kyle Kabasares - Electrodynamics - Grounded plane at x equals zero.png|**Fig. 29** A conducting plane at $x=0$ is held at zero potential while the real charge lies on the positive side.]]

In Cartesian coordinates the field component perpendicular to the plane follows from the potential,

$$
\electric{E}_x
=-\frac{\partial}{\partial\mechanical{x}}
\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\left[
\frac{1}{\sqrt{(\mechanical{x}-\mechanical{a})^2+\mechanical{y}^2+\mechanical{z}^2}}
-\frac{1}{\sqrt{(\mechanical{x}+\mechanical{a})^2+\mechanical{y}^2+\mechanical{z}^2}}
\right].
$$

At the real charge, use only the induced field, represented by the image. The two positions are separated by $2\mechanical{a}$, so $\mechanical{F}_x=-\electric{Q}^2/[4\pi\electric{\varepsilon}_0(2\mechanical{a})^2]$. The force points toward the plane.

![[Kyle Kabasares - Electrodynamics - Real and image charges across the grounded plane.png|**Fig. 30** The real charge $+\electric{Q}$ and the image $-\electric{Q}$ are each a distance $\mechanical{a}$ from the plane.]]

The notes consider calculating the energy by integrating the field energy density or by integrating the force with respect to position. The instructor recalls the three energy formulas from [[Electrostatic sources, potentials, and field energy#Energy of charge distributions|the section on Energy of charge distributions]], including $\energy{W}=\tfrac12\int\electric{\rho}\,\electric{\phi}\,d^3\mechanical{x}$, before applying them to the physical half-space.

After subtracting the isolated point charge's self-energy, the energy of the charge in the presence of the grounded plane is

$$
\energy{U}(\mechanical{a})
=-\int_\infty^{\mechanical{a}}\mechanical{F}_x(s)\,ds
=-\frac{\electric{Q}^2}{16\pi\electric{\varepsilon}_0\mechanical{a}},
$$

where $s$ is the distance from the plane during the displacement. The field-energy method gives the same result. The real and image charges produce equal $\lvert\electric{\vec E}\rvert^2$ in the two reflected half-spaces, but only the physical half-space contributes. After the self-energy subtraction, the result is half the free-space pair interaction energy.

##### Induced surface charge on the plane

![[Kyle Kabasares - Electrodynamics - Induced negative surface charge.png|**Fig. 31** A positive point charge induces negative surface charge on the grounded conductor.]]

Gauss's law gives the jump in the normal field component across a surface charge, $\electric{E}_x(0^+)-\electric{E}_x(0^-)=\electric{\sigma}/\electric{\varepsilon}_0$. Since the interior field is zero, the charge density is

$$
\electric{\sigma}
=-\electric{\varepsilon}_0\left.\frac{\partial\electric{\phi}}{\partial\mechanical{x}}\right|_{x=0^+}.
$$

The notes cite Jackson, equation 1.22. Differentiating the two reciprocal distances gives, on the charge side,

$$
\electric{E}_x=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\left[
\frac{\mechanical{x}-\mechanical{a}}
{[(\mechanical{x}-\mechanical{a})^2+\mechanical{y}^2+\mechanical{z}^2]^{3/2}}
-\frac{\mechanical{x}+\mechanical{a}}
{[(\mechanical{x}+\mechanical{a})^2+\mechanical{y}^2+\mechanical{z}^2]^{3/2}}
\right].
$$

Evaluate this field at the boundary to obtain the induced surface charge.

![[Kyle Kabasares - Electrodynamics - Normal field jump across a sheet.png|**Fig. 32** The uniform sheet example illustrates a jump of $\electric{\sigma}/\electric{\varepsilon}_0$ in the signed normal field.]]

![[Kyle Kabasares - Electrodynamics - Zero field on the conducting side.png|**Fig. 33** The physical potential and field vanish on the conducting side of the grounded plane.]]

At the grounded plane, the induced charge density is

$$
\electric{\sigma}(\mechanical{y},\mechanical{z})
=\electric{\varepsilon}_0\electric{E}_x(0^+,\mechanical{y},\mechanical{z})
=-\frac{\electric{Q}\mechanical{a}}
{2\pi(\mechanical{a}^2+\mechanical{y}^2+\mechanical{z}^2)^{3/2}}.
$$

##### Grounded sphere

Take the real charge $\electric{Q}$ at $(0,0,\mechanical{a})$ with $\mechanical{a}>\mechanical{R}$ and the image $\electric{q}'=-\electric{Q}\mechanical{R}/\mechanical{a}$ at $(0,0,\mechanical{R}^2/\mechanical{a})$. The Cartesian coordinates here follow the two axial distances in the handwritten potential. With $\theta$ measured from the positive $z$ axis, the exterior potential is

$$
\electric{\phi}_{\mathrm{out}}=
\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\left[
\frac{1}{\sqrt{\mechanical{r}^2+\mechanical{a}^2-2\mechanical{r}\mechanical{a}\cos\theta}}
-\frac{\mechanical{R}/\mechanical{a}}
{\sqrt{\mechanical{r}^2+(\mechanical{R}^2/\mechanical{a})^2
-2\mechanical{r}(\mechanical{R}^2/\mechanical{a})\cos\theta}}
\right].
$$

The conducting interior is at zero potential. The force on the real charge is the Coulomb force from the image, with separation $\mechanical{a}-\mechanical{R}^2/\mechanical{a}$ and inverse-square dependence. The interaction energy follows from minus the integral of that force along the displacement, with the reference at infinity. The surface charge follows from $\electric{\sigma}=-\electric{\varepsilon}_0(\partial\electric{\phi}_{\mathrm{out}}/\partial\mechanical{r})_{\mechanical{r}=\mechanical{R}^+}$.

![[Kyle Kabasares - Electrodynamics - Real and image charges for a grounded sphere.png|**Fig. 34** The real charge lies outside the grounded sphere, and the image lies inside on the same radial axis.]]

##### Prescribed potential on a boundary

The notes introduce a plane with a circular patch held at $\electric{V}_0$. One could seek the unknown surface charge $\electric{\sigma}$ from the normal field and then use a surface potential integral. The unknown normal derivative makes this an indirect approach when the given data are the potential on the plane.

![[Kyle Kabasares - Electrodynamics - Prescribed potential on a circular patch.png|**Fig. 35** The shaded patch on the plane is held at prescribed potential $\electric{V}_0$.]]

The lecture motivates the boundary-potential contribution by writing the surface charge in terms of the normal derivative of the potential and moving the derivative onto the Green's function. The volume identity behind this step is Green's second identity. It yields the Dirichlet formula from [[#Dirichlet Green's function|the section on Dirichlet Green's function]], with a volume term due to charge and a surface term due to prescribed potential. For the domain $x>0$, the outward normal on the plane is $-\hat x$, so $\partial G/\partial n'=-\partial G/\partial\mechanical{x}'$.

![[Kyle Kabasares - Electrodynamics - Outward normal for the right half-space.png|**Fig. 36** The outward normal for the region to the right of the plane points in the negative $x$ direction.]]

In the example, a disk of radius $\mechanical{R}$ on the plane is held at $\electric{V}_0$ and the rest of the plane is grounded. There is no volume charge, so only the boundary term contributes.

![[Kyle Kabasares - Electrodynamics - Circular patch in the planar Dirichlet problem.png|**Fig. 37** The shaded disk supplies the nonzero boundary data for the right half-space.]]

To construct the kernel, first put the source at $(\mechanical{x}',0,0)$ and its image at $(-\mechanical{x}',0,0)$. Translation parallel to the plane gives the general expression. Let $s^2=(\mechanical{y}-\mechanical{y}')^2+(\mechanical{z}-\mechanical{z}')^2$. Then

$$
\begin{aligned}
G&=\frac{1}{\sqrt{(\mechanical{x}-\mechanical{x}')^2+s^2}}
-\frac{1}{\sqrt{(\mechanical{x}+\mechanical{x}')^2+s^2}},\\
\frac{\partial G}{\partial\mechanical{x}'}
&=\frac{\mechanical{x}-\mechanical{x}'}{[(\mechanical{x}-\mechanical{x}')^2+s^2]^{3/2}}
+\frac{\mechanical{x}+\mechanical{x}'}{[(\mechanical{x}+\mechanical{x}')^2+s^2]^{3/2}}.
\end{aligned}
$$

![[Kyle Kabasares - Electrodynamics - Point source for the planar Green function.png|**Fig. 38** A point source on the right defines the Dirichlet Green's function used in the boundary integral.]]

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.
