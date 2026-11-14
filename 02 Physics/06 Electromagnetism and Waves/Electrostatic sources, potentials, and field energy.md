---
title: "Electrostatic sources, potentials, and field energy"
---

> [!TLDR]
> Coulomb’s law, Poisson’s equation, and electrostatic energy connect a charge distribution to its field and potential.

## Worked lecture material

##### Electromagnetic theory with Arvind Rajaraman

The notes list the instructor's address as arajaram@uci.edu and the course site as the Canvas wiki at canvas.eee.uci.edu/courses/7345/wiki. The course covers Jackson, chapters 0–6, comparable to Griffiths, chapters 1–6. The qualifying exam also includes Jackson, chapters 7 and 9. The notes list chapters 7–14 for Electromagnetic Theory II.

Homework is due on Thursday. The grade is $20\%$ homework, $30\%$ midterm on Thursday of week six, and $50\%$ final. Review sample exams and work additional problems from Jackson. The homework group is Dillon B., Demet K., and Alvin G.

##### Electrostatics and Coulomb's law

Charges of the same sign repel and charges of opposite signs attract. The force on a charge $\electric{q}_2$ a distance $\mechanical{r}$ from $\electric{q}_1$ is

$$
\mechanical{\vec F}
=\frac{\electric{q}_1\electric{q}_2}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}\hat r,
$$

where $\hat r$ points from the source to the charge on which the force acts. With the potential energy set to zero at infinity,

$$
\energy{U}(\mechanical{r})=-\int_\infty^{\mechanical{r}}
\mechanical{\vec F}\cdot d\mechanical{\vec r}'
=\frac{\electric{q}_1\electric{q}_2}{4\pi\electric{\varepsilon}_0\mechanical{r}}.
$$

The reference at infinity is consistent with the displayed Coulomb energy. The force law relates the force at one point to charge at another. Introducing the electric field gives a local force rule, $\mechanical{\vec F}=\electric{q}\,\electric{\vec E}$. For multiple point charges the field itself is still expressed in terms of the remote sources,

$$
\electric{\vec E}(\mechanical{\vec r})
=\frac{1}{4\pi\electric{\varepsilon}_0}
\sum_i\electric{q}_i
\frac{\mechanical{\vec r}-\mechanical{\vec r}_i}
{\lvert\mechanical{\vec r}-\mechanical{\vec r}_i\rvert^3}.
$$

The displacement in the numerator supplies the direction of each inverse-square contribution.

The local electrostatic equations are

$$
\nabla\cdot\electric{\vec E}=\frac{\electric{\rho}}{\electric{\varepsilon}_0},
\qquad
\nabla\times\electric{\vec E}=0.
$$

The divergence theorem generalizes $\int_a^b(df/dx)\,dx=f(b)-f(a)$ to a volume $\mechanical{V}$ bounded by a closed surface $S$. Applying it to the first equation gives Gauss's law in integral form,

$$
\int_{\mechanical{V}}\nabla\cdot\electric{\vec E}\,d^3\mechanical{x}
=\oint_S\electric{\vec E}\cdot\hat n\,dA
=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},
\qquad
\electric{Q}_{\mathrm{enc}}=\int_{\mechanical{V}}\electric{\rho}\,d^3\mechanical{x}.
$$

![[Kyle Kabasares - Electrodynamics - Electric flux through a closed surface.png|**Fig. 1** The normal $\hat n$ points outward from the closed surface $S$. The normal component of the electric field contributes to the flux.]]

For a charge $\electric{Q}$ at the center of a sphere of radius $\mechanical{R}$, the electric field at the surface is radial, with $\electric{\vec E}=\electric{Q}\hat r/(4\pi\electric{\varepsilon}_0\mechanical{R}^2)$. Since $\hat n=\hat r$ and $dA=\mechanical{R}^2\sin\theta\,d\theta\,d\phi$,

$$
\oint_S\electric{\vec E}\cdot\hat n\,dA
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\int_0^{2\pi}\!\int_0^\pi\sin\theta\,d\theta\,d\phi
=\frac{\electric{Q}}{\electric{\varepsilon}_0}.
$$

![[Kyle Kabasares - Electrodynamics - Point charge in a sphere.png|**Fig. 2** A point charge $\electric{Q}$ at the center of the spherical Gaussian surface.]]

Stokes's theorem converts the curl equation into $\oint_C\electric{\vec E}\cdot d\mechanical{\vec\ell}=0$ for a closed loop $C$.

![[Kyle Kabasares - Electrodynamics - Electrostatic circulation loop.png|**Fig. 3** The tangent line element $d\mechanical{\vec\ell}$ follows the oriented loop. Electrostatic circulation integrates the tangential field along the whole loop.]]

The lecture collects three formulations of electrostatics.

1. Sum the pairwise Coulomb forces from the other charges.
2. Use $\mechanical{\vec F}=\electric{q}\,\electric{\vec E}$ and the differential equations $\nabla\cdot\electric{\vec E}=\electric{\rho}/\electric{\varepsilon}_0$ and $\nabla\times\electric{\vec E}=0$.
3. Use the same force rule with the integral equations $\oint_S\electric{\vec E}\cdot\hat n\,dA=\electric{Q}_{\mathrm{enc}}/\electric{\varepsilon}_0$ and $\oint_C\electric{\vec E}\cdot d\mechanical{\vec\ell}=0$.

For a fixed charge $\electric{q}_j$, the first formulation gives

$$
\mechanical{\vec F}_j=
\sum_{i\ne j}
\frac{\electric{q}_i\electric{q}_j}{4\pi\electric{\varepsilon}_0
\lvert\mechanical{\vec r}_j-\mechanical{\vec r}_i\rvert^2}\hat r_{ij},
$$

where $\hat r_{ij}$ points from $i$ to $j$. The integral formulation is particularly useful for symmetric charge distributions.

##### Field of a point charge from symmetry

Place a charge $\electric{q}$ at the origin. The field must respect rotational symmetry. The notes sketch a radial pattern and a circulating pattern in a plane. A nonzero circulation around a circle would violate the integral curl equation. Full spherical symmetry also requires the field at a point to be radial. Thus $\electric{\vec E}=f(\mechanical{r})\hat r$.

![[Kyle Kabasares - Electrodynamics - Radial and circulating field patterns.png|**Fig. 4** The lecture contrasts the radial field with a circulating pattern that would have a nonzero electrostatic line integral.]]

On a sphere of radius $\mechanical{r}$ centered on the charge, $f(\mechanical{r})$ is constant, and $\hat n=\hat r$. Gauss's law gives

$$
4\pi\mechanical{r}^2f(\mechanical{r})
=\frac{\electric{q}}{\electric{\varepsilon}_0},
\qquad
f(\mechanical{r})=\frac{\electric{q}}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}.
$$

![[Kyle Kabasares - Electrodynamics - Spherical Gaussian surface at radius r.png|**Fig. 5** The Gaussian surface is a sphere centered on the point charge, with radius $\mechanical{r}$.]]

##### Uniformly charged sphere

Let a sphere of radius $\mechanical{R}$ have constant volume charge density $\electric{\rho}_0$ inside and zero charge density outside. Spherical symmetry gives $\electric{\vec E}=f(\mechanical{r})\hat r$. A concentric Gaussian sphere yields

$$
4\pi\mechanical{r}^2 f(\mechanical{r})
=\frac{4\pi\electric{\rho}_0}{\electric{\varepsilon}_0}
\int_0^{\min(\mechanical{r},\mechanical{R})}\mechanical{r}'^2\,d\mechanical{r}'.
$$

Thus the radial field component is

$$
f(\mechanical{r})=
\begin{cases}
\electric{\rho}_0\mechanical{r}/(3\electric{\varepsilon}_0), & \mechanical{r}\leq\mechanical{R},\\
\electric{\rho}_0\mechanical{R}^3/(3\electric{\varepsilon}_0\mechanical{r}^2), & \mechanical{r}>\mechanical{R}.
\end{cases}
$$

![[Kyle Kabasares - Electrodynamics - Uniform sphere with Gaussian surface.png|**Fig. 6** The dotted Gaussian sphere lies inside the uniformly charged sphere and encloses only the charge within radius $\mechanical{r}$.]]

##### Uniformly charged infinite cylinder

For an infinite cylinder of radius $\mechanical{R}$ with volume charge density $\electric{\rho}_0$, the symmetries give a radial field $\electric{\vec E}=f(\mechanical{r})\hat r$, with $\mechanical{r}$ measured from the axis.

![[Kyle Kabasares - Electrodynamics - Infinite cylinder radial field.png|**Fig. 7** The radial field of the uniformly charged infinite cylinder is shown in a side view.]]

A coaxial Gaussian cylinder of length $\mechanical{L}$ has flux only through its curved wall, so Gauss's law gives

$$
2\pi\mechanical{r}\mechanical{L}f(\mechanical{r})=
\frac{\electric{\rho}_0\pi\min(\mechanical{r},\mechanical{R})^2\mechanical{L}}{\electric{\varepsilon}_0}.
$$

The radial field component is therefore

$$
f(\mechanical{r})=
\begin{cases}
\electric{\rho}_0\mechanical{r}/(2\electric{\varepsilon}_0), & \mechanical{r}\leq\mechanical{R},\\
\electric{\rho}_0\mechanical{R}^2/(2\electric{\varepsilon}_0\mechanical{r}), & \mechanical{r}>\mechanical{R}.
\end{cases}
$$

![[Kyle Kabasares - Electrodynamics - Coaxial Gaussian cylinder.png|**Fig. 8** The dotted coaxial Gaussian cylinder encloses part of the uniformly charged cylinder.]]

##### Planar symmetry and potentials

The notes begin with a reminder to set up Overleaf with the homework group. Gauss's law was used for spherical and cylindrical charge distributions and also applies to a uniformly charged infinite plane.

![[Kyle Kabasares - Electrodynamics - Uniform charged plane.png|**Fig. 9** The field of a positively charged plane points away from it on both sides. The dotted Gaussian box crosses the plane.]]

For surface charge density $\electric{\sigma}$, take a Gaussian box whose end faces have area $A$ and are parallel to the plane. Planar symmetry makes the field perpendicular to the plane, so the sides contribute no flux. Reflection symmetry of the isolated sheet makes the magnitudes equal on the two sides. Gauss's law gives

$$
2\electric{E}A=\frac{\electric{\sigma}A}{\electric{\varepsilon}_0},
\qquad
\electric{E}=\frac{\electric{\sigma}}{2\electric{\varepsilon}_0}.
$$

![[Kyle Kabasares - Electrodynamics - Gaussian box across a charged plane.png|**Fig. 10** Both outward end faces contribute equally to the flux in the isolated-sheet example.]]

The electrostatic potential difference between points $A$ and $B$ is

$$
\electric{\phi}_B-\electric{\phi}_A=-\int_A^B\electric{\vec E}\cdot d\mechanical{\vec\ell}.
$$

The field determines potential differences. The lecture often sets the reference value $\electric{\phi}(\infty)=0$ when the integral from infinity converges.

##### Potential of a uniformly charged sphere

First find the field for a sphere of radius $\mechanical{R}$ and constant density $\electric{\rho}$. An exterior Gaussian surface encloses all the charge and gives $\electric{E}_r=\electric{\rho}\mechanical{R}^3/(3\electric{\varepsilon}_0\mechanical{r}^2)$. An interior surface encloses charge only up to $\mechanical{r}$ and gives $\electric{E}_r=\electric{\rho}\mechanical{r}/(3\electric{\varepsilon}_0)$.

![[Kyle Kabasares - Electrodynamics - Exterior Gaussian surface for a charged sphere.png|**Fig. 11** A Gaussian surface outside the shaded sphere encloses the entire charge.]]

![[Kyle Kabasares - Electrodynamics - Interior Gaussian surface for a charged sphere.png|**Fig. 12** A Gaussian surface inside the sphere encloses only the central part of the charge distribution.]]

With zero potential at infinity, integrate radially inward. For $\mechanical{r}\geq\mechanical{R}$,

$$
\electric{\phi}(\mechanical{r})
=-\int_\infty^{\mechanical{r}}
\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}'^2}\,d\mechanical{r}'
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}},
\qquad
\electric{Q}=\frac43\pi\mechanical{R}^3\electric{\rho}_0.
$$

For $\mechanical{r}\leq\mechanical{R}$, split the integral at the surface. The exterior segment gives the potential at $\mechanical{R}$ and the interior segment adds the potential difference,

$$
\begin{aligned}
\electric{\phi}(\mechanical{r})
&=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{R}}
-\int_{\mechanical{R}}^{\mechanical{r}}
\frac{\electric{\rho}_0\mechanical{r}'}{3\electric{\varepsilon}_0}\,d\mechanical{r}'\\
&=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{R}}
+\frac{\electric{\rho}_0}{6\electric{\varepsilon}_0}
\left(\mechanical{R}^2-\mechanical{r}^2\right).
\end{aligned}
$$

The red margin note refers to the signs of the two contributions. Both are positive inside a positively charged sphere because the second integral runs inward.

##### Capacitance

Two surfaces carry charges $+\electric{Q}$ and $-\electric{Q}$. Their capacitance is $\circuit{C}=\electric{Q}/\Delta\electric{\phi}$, where $\Delta\electric{\phi}$ is the potential of the positive surface relative to the negative surface.

For parallel planes of area $A$ and surface densities $\pm\electric{\sigma}$, the charges are $\pm\electric{\sigma}A$. In the infinite-sheet approximation the fields cancel outside the pair and add between the planes. The potential is constant in each exterior region, and one region can be chosen as the zero reference.

![[Kyle Kabasares - Electrodynamics - Oppositely charged parallel planes.png|**Fig. 13** The two planes carry equal and opposite uniform surface charge densities.]]

![[Kyle Kabasares - Electrodynamics - Superposed fields of two charged planes.png|**Fig. 14** The individual sheet fields point away from positive charge and toward negative charge. Their directions agree in the gap and oppose outside.]]

The combined field of the parallel planes is $\electric{E}=\electric{\sigma}/\electric{\varepsilon}_0$ between them and zero outside. For separation $\mechanical{d}$, the potential decreases by $\electric{E}\mechanical{d}$ from the positive to the negative plane. Hence

$$
\circuit{C}=\frac{\electric{Q}}{\lvert\Delta\electric{\phi}\rvert}
=\frac{\electric{\sigma}A}{\electric{E}\mechanical{d}}
=\frac{\electric{\varepsilon}_0 A}{\mechanical{d}}.
$$

![[Kyle Kabasares - Electrodynamics - Net field between parallel plates.png|**Fig. 15** The net electric field is uniform in the gap and vanishes outside in the infinite-plane approximation.]]

##### Spherical capacitor

Concentric spheres of radii $\mechanical{a}$ and $\mechanical{b}$ with $\mechanical{a}<\mechanical{b}$ carry charges $+\electric{Q}$ and $-\electric{Q}$. Gauss's law gives $\electric{E}_r=\electric{Q}/(4\pi\electric{\varepsilon}_0\mechanical{r}^2)$ in the gap. The potential difference and capacitance are

$$
\begin{aligned}
\electric{\phi}(\mechanical{b})-\electric{\phi}(\mechanical{a})
&=-\int_{\mechanical{a}}^{\mechanical{b}}\electric{E}_r\,d\mechanical{r}
=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\left(\frac1{\mechanical{b}}-\frac1{\mechanical{a}}\right),\\
\circuit{C}&=\frac{4\pi\electric{\varepsilon}_0}
{1/\mechanical{a}-1/\mechanical{b}}.
\end{aligned}
$$

![[Kyle Kabasares - Electrodynamics - Spherical capacitor.png|**Fig. 16** A dotted Gaussian sphere lies between the concentric conductors at radii $\mechanical{a}$ and $\mechanical{b}$.]]

##### Conductors in electrostatic equilibrium

Charges are free to move in a conductor. An internal field exerts a force, so the charges redistribute until their induced field cancels it in the conducting material.

The next example places a charge $\electric{Q}$ at the center of a conducting spherical shell. Use $\electric{\vec E}=0$ in the shell material and Gauss's law to determine the field and the surface charge densities.

![[Kyle Kabasares - Electrodynamics - Central charge in a conducting shell.png|**Fig. 17** A positive central charge induces negative charge on the inner surface and positive charge on the outer surface of a neutral shell.]]

For the spherical shell of inner radius $\mechanical{a}$ and outer radius $\mechanical{b}$, a Gaussian sphere inside the cavity encloses the central charge $\electric{Q}$. A Gaussian sphere in the conducting material has zero flux, so the inner surface must carry $-\electric{Q}$. If the shell is neutral, the outer surface carries $+\electric{Q}$ and the exterior field is the same as for the central charge alone. Spherical symmetry makes each surface charge distribution uniform.

![[Kyle Kabasares - Electrodynamics - Gaussian surfaces around a conducting shell.png|**Fig. 18** Concentric Gaussian spheres lie in the cavity, in the conductor, and outside the shell.]]

If the shell carries a net charge $\electric{q}$, the outer surface instead carries $\electric{Q}+\electric{q}$. The field away from the surfaces and the point charge is

$$
\electric{\vec E}=
\begin{cases}
\dfrac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}\hat r,
&0<\mechanical{r}<\mechanical{a},\\
0,&\mechanical{a}<\mechanical{r}<\mechanical{b},\\
\dfrac{\electric{Q}+\electric{q}}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}\hat r,
&\mechanical{r}>\mechanical{b}.
\end{cases}
$$

##### Poisson's equation

For problems with less symmetry, write the curl-free field as $\electric{\vec E}=-\nabla\electric{\phi}$. Inserting this into the divergence equation gives **Poisson's equation**,

$$
\nabla^2\electric{\phi}=-\frac{\electric{\rho}}{\electric{\varepsilon}_0},
\qquad
\nabla^2=\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
+\frac{\partial^2}{\partial z^2}
$$

in Cartesian coordinates. To solve it in free space, begin with a point charge. Its density is represented by a Dirac delta. In one dimension, the delta is supported at $x=0$ and $\int_{-\epsilon}^{+\epsilon}\delta(x)\,dx=1$ for any $\epsilon>0$.

The Dirac delta can be obtained as the limit of ordinary functions, for example a rectangle of width $a$ and height $1/a$. Its area stays equal to one while $a\to0$.

![[Kyle Kabasares - Electrodynamics - Smooth and rectangular delta approximations.png|**Fig. 19** A narrow smooth peak and a rectangle on $[-a/2,a/2]$ illustrate two ways to concentrate a unit integral at the origin.]]

The change of variable $u=f(x)$ gives the delta of a function. For a simple zero $x_0$, its contribution is $\delta(x-x_0)/\lvert f'(x_0)\rvert$. Sum the contributions if there are several simple zeros. The absolute value accounts for orientation under the change of variables, and gives $\delta(\alpha x)=\delta(x)/\lvert\alpha\rvert$ for $\alpha\ne0$. The delta also has the sifting property $\int f(x)\delta(x)\,dx=f(0)$.

In Cartesian coordinates, $\delta^3(\vec x)=\delta(x)\delta(y)\delta(z)$ and $\int\delta^3(\vec x)\,d^3x=1$. A point charge $\electric{Q}$ at $\mechanical{\vec x}_0$ has density

$$
\electric{\rho}(\mechanical{\vec x})
=\electric{Q}\,\delta^3(\mechanical{\vec x}-\mechanical{\vec x}_0).
$$

Its Poisson equation is $\nabla^2\electric{\phi}=-(\electric{Q}/\electric{\varepsilon}_0)\delta^3(\mechanical{\vec x}-\mechanical{\vec x}_0)$. The **Green's function** is normalized by

$$
\nabla_{\vec x}^2G(\mechanical{\vec x},\mechanical{\vec x}')
=-4\pi\delta^3(\mechanical{\vec x}-\mechanical{\vec x}').
$$

In free space the Coulomb potential supplies the kernel after factoring out $\electric{Q}/(4\pi\electric{\varepsilon}_0)$. Thus

$$
G(\mechanical{\vec x},\mechanical{\vec x}')=
\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}.
$$

The displayed Green's equation is the distributional Laplacian of this kernel.

Poisson's equation is linear. Superposing the free-space Green's function over a continuous charge distribution gives

$$
\electric{\phi}(\mechanical{\vec x})
=\frac{1}{4\pi\electric{\varepsilon}_0}
\int G(\mechanical{\vec x},\mechanical{\vec x}')\electric{\rho}(\mechanical{\vec x}')\,d^3\mechanical{x}'
=\frac{1}{4\pi\electric{\varepsilon}_0}
\int\frac{\electric{\rho}(\mechanical{\vec x}')\,d^3\mechanical{x}'}
{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}.
$$

This determines the free-space potential with the reference at infinity when the charge density is known everywhere and the integral converges.

##### Charge density in spherical and cylindrical coordinates

Inside a sphere of radius $\mechanical{R}$, take $\electric{\rho}(\mechanical{\vec x}')=\electric{\rho}_0\sqrt{\sin\theta'}$. With $\hat r(\theta,\phi)=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$, the field and source positions are $\mechanical{\vec x}=\mechanical{r}\hat r(\theta,\phi)$ and $\mechanical{\vec x}'=\mechanical{r}'\hat r(\theta',\phi')$. The denominator is the Euclidean norm of the difference of these three components. Substituting the spherical volume element gives

$$
\electric{\phi}(\mechanical{\vec x})
=\frac{\electric{\rho}_0}{4\pi\electric{\varepsilon}_0}
\int_0^{2\pi}d\phi'\int_0^\pi\sin\theta'\,d\theta'
\int_0^{\mechanical{R}}
\frac{\sqrt{\sin\theta'}\,\mechanical{r}'^2\,d\mechanical{r}'}
{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}.
$$

The discussion leaves the result as a definite integral.

For a ring of radius $\mechanical{R}$ in the $xy$ plane with uniformly distributed total charge $\electric{Q}$, use cylindrical coordinates $(\mechanical{s},\phi,\mechanical{z})$, writing $s$ for the cylindrical radius to distinguish it from charge density. Then $\mechanical{\vec x}=(\mechanical{s}\cos\phi,\mechanical{s}\sin\phi,\mechanical{z})$, with the same formula in primed coordinates for the source, and $d^3\mechanical{x}'=\mechanical{s}'\,d\mechanical{s}'\,d\phi'\,d\mechanical{z}'$. The density must be supported on $\mechanical{s}'=\mechanical{R}$ and $\mechanical{z}'=0$.

![[Kyle Kabasares - Electrodynamics - Circular ring of charge.png|**Fig. 20** The ring lies in the $xy$ plane and carries uniformly distributed charge.]]

In cylindrical coordinates, write the ring density as a multiple of $\delta(\mechanical{s}'-\mechanical{R})\delta(\mechanical{z}')$. The volume element contributes $\mechanical{R}$ at the radial delta, and the azimuthal integral contributes $2\pi$. Normalizing the integral to $\electric{Q}$ gives

$$
\electric{\rho}(\mechanical{\vec x}')
=\frac{\electric{Q}}{2\pi\mechanical{R}}
\delta(\mechanical{s}'-\mechanical{R})\delta(\mechanical{z}').
$$

Use this density in the free-space potential integral with $\mechanical{z}'\in\mathbb R$, $\mechanical{s}'\geq0$, and $0\leq\phi'<2\pi$. Both delta factors localize the integral, leaving the ring azimuth as the only integration variable.

The same ring is at $\mechanical{r}'=\mechanical{R}$ and $\theta'=\pi/2$ in spherical coordinates. The source position on the ring is $\mechanical{\vec x}'=(\mechanical{R}\cos\phi',\mechanical{R}\sin\phi',0)$.

![[Kyle Kabasares - Electrodynamics - Charged ring and symmetry axis.png|**Fig. 21** The ring lies in the equatorial plane. The dashed line marks its symmetry axis.]]

The spherical volume element contributes $\mechanical{R}^2\sin(\pi/2)=\mechanical{R}^2$ at the delta support. The normalization check in the notes therefore gives

$$
\electric{\rho}(\mechanical{\vec x}')
=\frac{\electric{Q}}{2\pi\mechanical{R}^2}
\delta(\mechanical{r}'-\mechanical{R})\delta(\theta'-\pi/2).
$$

Taking the radial integration domain to contain the ring in its interior, the two coordinate systems give the same potential,

$$
\electric{\phi}(\mechanical{\vec x})
=\frac{\electric{Q}}{8\pi^2\electric{\varepsilon}_0}
\int_0^{2\pi}
\frac{d\phi'}{\sqrt{
\mechanical{r}^2+\mechanical{R}^2
-2\mechanical{r}\mechanical{R}\sin\theta\cos(\phi-\phi')}}.
$$

The denominator is the distance from the field point $(\mechanical{r},\theta,\phi)$ to the source point on the ring.

The instructor confirms the spherical ring normalization. For a trial density $c\,\delta(\mechanical{r}'-\mechanical{R})\delta(\theta'-\pi/2)$, the volume integral gives $\electric{Q}=2\pi\mechanical{R}^2c$. The notes use primes to distinguish source coordinates from field coordinates. In the Coulomb kernel the squared distance is the sum of the squared differences between the three Cartesian components of the spherical coordinate vectors.

##### Potential of a uniformly charged parabolic rod

The rod follows $y'=x'^2$ in the $xy$ plane from $x'=-L$ to $x'=L$ in the coordinate units of the notes, and carries total charge $\electric{Q}$ uniformly per unit arc length.

![[Kyle Kabasares - Electrodynamics - Parabolic rod and field point.png|**Fig. 22** The rod follows the parabola between the indicated endpoints. The separate dot marks a field point in the plane.]]

##### Continued

The Coulomb integral reduces to a line integral because the charge is supported on the rod. With constant linear charge density $\electric{\lambda}$, the charge element is $\electric{\lambda}\,d\mechanical{\ell}$. Along the curve,

$$
d\mechanical{\ell}=\sqrt{1+\left(\frac{dy'}{dx'}\right)^2}\,dx'
=\sqrt{1+4x'^2}\,dx'.
$$

![[Kyle Kabasares - Electrodynamics - Arc length along the parabolic rod.png|**Fig. 23** The highlighted arc spans the interval from $x'$ to $x'+dx'$. Its length gives the weight in the charge integral.]]

At the field point $(x,y,z)$, the notes leave the result as the definite integral

$$
\electric{\phi}(x,y,z)
=\frac{\electric{\lambda}}{4\pi\electric{\varepsilon}_0}
\int_{-L}^L
\frac{\sqrt{1+4x'^2}\,dx'}
{\sqrt{(x-x')^2+(y-x'^2)^2+z^2}}.
$$

The density satisfies $\electric{\lambda}\int_{-L}^L d\mechanical{\ell}=\electric{Q}$. The notes mark setting up this integral as a homework skill.

##### Energy of charge distributions

For discrete charges, the pairwise interaction energy is

$$
\energy{W}_{\mathrm{int}}=\frac12\sum_{i\ne j}
\frac{\electric{q}_i\electric{q}_j}
{4\pi\electric{\varepsilon}_0\lvert\mechanical{\vec x}_i-\mechanical{\vec x}_j\rvert}.
$$

For a smooth localized density, the energy can be written in three equivalent forms,

$$
\begin{aligned}
\energy{W}
&=\frac12\iint
\frac{\electric{\rho}(\mechanical{\vec x})\electric{\rho}(\mechanical{\vec x}')}
{4\pi\electric{\varepsilon}_0\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}
\,d^3\mechanical{x}\,d^3\mechanical{x}'\\
&=\frac12\int\electric{\rho}\,\electric{\phi}\,d^3\mechanical{x}
=\frac12\int\electric{\varepsilon}_0\lvert\electric{\vec E}\rvert^2\,d^3\mechanical{x}.
\end{aligned}
$$

These continuum formulas include self-energy. To recover the point-charge interaction energy, subtract the isolated self-energy of each charge under the same regularization.

##### Singular potentials

The ordinary Laplacian of $1/\mechanical{r}$ vanishes away from the origin. The gradient is singular at the origin, as seen from $\partial(1/\mechanical{r})/\partial\mechanical{x}=-\mechanical{x}/\mechanical{r}^3$. The full distributional identity is

$$
\nabla^2\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}
=-4\pi\delta^3(\mechanical{\vec x}-\mechanical{\vec x}').
$$

The delta is necessary for the point-charge potential to satisfy Poisson's equation at its source. The next example asks for the charge density that produces $\electric{\phi}(\mechanical{r})=\electric{V}_0e^{-a\mechanical{r}}/\mechanical{r}$. The page starts by applying $-\electric{\varepsilon}_0\nabla^2$ in Cartesian coordinates.

The Cartesian attempt starts with $\partial\mechanical{r}/\partial\mechanical{x}=\mechanical{x}/\mechanical{r}$. The instructor switches to spherical coordinates, where the Laplacian is

$$
\nabla^2=
\frac{1}{\mechanical{r}^2}\frac{\partial}{\partial\mechanical{r}}
\left(\mechanical{r}^2\frac{\partial}{\partial\mechanical{r}}\right)
+\frac{1}{\mechanical{r}^2\sin\theta}
\frac{\partial}{\partial\theta}\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\mechanical{r}^2\sin^2\theta}\frac{\partial^2}{\partial\phi^2}.
$$

The angular derivatives vanish on a radial potential. At $\mechanical{r}>0$, the radial operator gives

$$
\nabla^2\electric{\phi}
=\frac{1}{\mechanical{r}}
\frac{d^2}{d\mechanical{r}^2}\bigl(\mechanical{r}\electric{\phi}\bigr)
=\electric{V}_0 a^2\frac{e^{-a\mechanical{r}}}{\mechanical{r}}.
$$

Equivalently, differentiating $\mechanical{r}^2d(e^{-a\mechanical{r}}/\mechanical{r})/d\mechanical{r}=-(a\mechanical{r}+1)e^{-a\mechanical{r}}$ gives $a^2\mechanical{r}e^{-a\mechanical{r}}$. This product-rule step resolves the discrepancy between the two handwritten calculations. The instructor's expression for the charge density away from the origin is $-\electric{\varepsilon}_0\electric{V}_0a^2e^{-a\mechanical{r}}/\mechanical{r}$. A delta term is also needed because the potential has a $1/\mechanical{r}$ singularity.

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{q}_i$ | $\unit{C}$ | Electric charge | Signed charge of the point source labeled $i$. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Constant in the SI form of Coulomb's law. |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Mechanical force on the charge. |
| $\electric{\vec E}$ | $\unit{N\,C^{-1}}$ | Electric field | Force per unit positive test charge. |
| $\mechanical{\vec r}$, $\mechanical{\vec r}_i$ | $\unit{m}$ | Field and source positions | Position vectors of the observation point and source charge. |
| $\electric{\rho}$ | $\unit{C\,m^{-3}}$ | Volume charge density | Charge per unit volume. |
| $\electric{Q}_{\mathrm{enc}}$ | $\unit{C}$ | Enclosed charge | Integral of the volume charge density within the Gaussian surface. |
| $\electric{\rho}_0$ | $\unit{C\,m^{-3}}$ | Uniform volume charge density | Constant density inside the charged sphere or cylinder. |
| $\electric{\sigma}$ | $\unit{C\,m^{-2}}$ | Surface charge density | Charge per unit area of the infinite plane. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | Magnitude of the charge on either conductor divided by their potential difference. |
| $G(\mechanical{\vec x},\mechanical{\vec x}')$ | $\unit{m^{-1}}$ | Electrostatic Green's function | Free-space kernel normalized to a source of $-4\pi$ times the three-dimensional delta. |
| $\mechanical{s}$ | $\unit{m}$ | Cylindrical radius | Perpendicular distance from the symmetry axis. |
| $\electric{\lambda}$ | $\unit{C\,m^{-1}}$ | Linear charge density | Charge per unit arc length of the rod. |
| $a$ | $\unit{m^{-1}}$ | Screening parameter | Inverse length in the radial exponential. |
| $\electric{\vec p}$ | $\unit{C\,m}$ | Electric dipole moment | For a charge pair, the positive charge times the displacement from negative to positive charge. |
| $\electric{\rho}_0$ | $\unit{C\,m^{-3}}$ | Volume charge density amplitude | Coefficient of $\cos\theta$ in the charged sphere. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Material permittivity | Ratio of electric displacement to electric field in a linear isotropic medium. |
| $c$ | $\unit{m\,s^{-1}}$ | Vacuum speed of light | Propagation speed of electromagnetic disturbances in vacuum. |
| $n$ | $1$ | Refractive index | Ratio of the vacuum light speed to the phase speed in a lossless medium. |
