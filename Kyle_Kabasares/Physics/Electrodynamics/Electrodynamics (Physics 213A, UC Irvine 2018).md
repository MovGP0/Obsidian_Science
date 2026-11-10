---
title: "Electrodynamics (Physics 213A, UC Irvine 2018)"
---

> [!TLDR]
> These lecture notes cover electrostatic boundary-value problems, electric and magnetic multipoles, fields in materials, and Maxwell's equations. They develop retarded potentials, electromagnetic waves at interfaces, and dipole and quadrupole radiation.

Source notes by Kyle Kabasares. [[Electrodynamics (Physics 213A, UC Irvine 2018).pdf|Original PDF]].

Transcribed PDF pages 1–104 of 104.

### PDF page 1

#### Electromagnetic theory with Arvind Rajaraman — January 9, 2018

The notes list the instructor's address as arajaram@uci.edu and the course site as the Canvas wiki at canvas.eee.uci.edu/courses/7345/wiki. The course covers Jackson, chapters 0–6, comparable to Griffiths, chapters 1–6. The qualifying exam also includes Jackson, chapters 7 and 9. The notes list chapters 7–14 for Electromagnetic Theory II.

Homework is due on Thursday. The grade is $20\%$ homework, $30\%$ midterm on Thursday of week six, and $50\%$ final. Review sample exams and work additional problems from Jackson. The homework group is Dillon B., Demet K., and Alvin G.

#### Electrostatics and Coulomb's law

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

### PDF page 2

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

### PDF page 3

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

#### Field of a point charge from symmetry

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

### PDF page 4

#### Uniformly charged sphere

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

#### Uniformly charged infinite cylinder

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

### PDF page 5

#### Lecture of January 11, 2018 — planar symmetry and potentials

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

#### Potential of a uniformly charged sphere

First find the field for a sphere of radius $\mechanical{R}$ and constant density $\electric{\rho}$. An exterior Gaussian surface encloses all the charge and gives $\electric{E}_r=\electric{\rho}\mechanical{R}^3/(3\electric{\varepsilon}_0\mechanical{r}^2)$. An interior surface encloses charge only up to $\mechanical{r}$ and gives $\electric{E}_r=\electric{\rho}\mechanical{r}/(3\electric{\varepsilon}_0)$.

![[Kyle Kabasares - Electrodynamics - Exterior Gaussian surface for a charged sphere.png|**Fig. 11** A Gaussian surface outside the shaded sphere encloses the entire charge.]]

![[Kyle Kabasares - Electrodynamics - Interior Gaussian surface for a charged sphere.png|**Fig. 12** A Gaussian surface inside the sphere encloses only the central part of the charge distribution.]]

### PDF page 6

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

#### Capacitance

Two surfaces carry charges $+\electric{Q}$ and $-\electric{Q}$. Their capacitance is $\circuit{C}=\electric{Q}/\Delta\electric{\phi}$, where $\Delta\electric{\phi}$ is the potential of the positive surface relative to the negative surface.

For parallel planes of area $A$ and surface densities $\pm\electric{\sigma}$, the charges are $\pm\electric{\sigma}A$. In the infinite-sheet approximation the fields cancel outside the pair and add between the planes. The potential is constant in each exterior region, and one region can be chosen as the zero reference.

![[Kyle Kabasares - Electrodynamics - Oppositely charged parallel planes.png|**Fig. 13** The two planes carry equal and opposite uniform surface charge densities.]]

![[Kyle Kabasares - Electrodynamics - Superposed fields of two charged planes.png|**Fig. 14** The individual sheet fields point away from positive charge and toward negative charge. Their directions agree in the gap and oppose outside.]]

### PDF page 7

The combined field of the parallel planes is $\electric{E}=\electric{\sigma}/\electric{\varepsilon}_0$ between them and zero outside. For separation $\mechanical{d}$, the potential decreases by $\electric{E}\mechanical{d}$ from the positive to the negative plane. Hence

$$
\circuit{C}=\frac{\electric{Q}}{\lvert\Delta\electric{\phi}\rvert}
=\frac{\electric{\sigma}A}{\electric{E}\mechanical{d}}
=\frac{\electric{\varepsilon}_0 A}{\mechanical{d}}.
$$

![[Kyle Kabasares - Electrodynamics - Net field between parallel plates.png|**Fig. 15** The net electric field is uniform in the gap and vanishes outside in the infinite-plane approximation.]]

#### Spherical capacitor

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

#### Conductors in electrostatic equilibrium

Charges are free to move in a conductor. An internal field exerts a force, so the charges redistribute until their induced field cancels it in the conducting material.

The next example places a charge $\electric{Q}$ at the center of a conducting spherical shell. Use $\electric{\vec E}=0$ in the shell material and Gauss's law to determine the field and the surface charge densities.

![[Kyle Kabasares - Electrodynamics - Central charge in a conducting shell.png|**Fig. 17** A positive central charge induces negative charge on the inner surface and positive charge on the outer surface of a neutral shell.]]

### PDF page 8

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

#### Poisson's equation

For problems with less symmetry, write the curl-free field as $\electric{\vec E}=-\nabla\electric{\phi}$. Inserting this into the divergence equation gives **Poisson's equation**,

$$
\nabla^2\electric{\phi}=-\frac{\electric{\rho}}{\electric{\varepsilon}_0},
\qquad
\nabla^2=\frac{\partial^2}{\partial x^2}
+\frac{\partial^2}{\partial y^2}
+\frac{\partial^2}{\partial z^2}
$$

in Cartesian coordinates. To solve it in free space, begin with a point charge. Its density is represented by a Dirac delta. In one dimension, the delta is supported at $x=0$ and $\int_{-\epsilon}^{+\epsilon}\delta(x)\,dx=1$ for any $\epsilon>0$.

### PDF page 9

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

### PDF page 10

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

#### Discussion of January 12, 2018 — charge density in spherical and cylindrical coordinates

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

### PDF page 11

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

### PDF page 12

The instructor confirms the spherical ring normalization. For a trial density $c\,\delta(\mechanical{r}'-\mechanical{R})\delta(\theta'-\pi/2)$, the volume integral gives $\electric{Q}=2\pi\mechanical{R}^2c$. The notes use primes to distinguish source coordinates from field coordinates. In the Coulomb kernel the squared distance is the sum of the squared differences between the three Cartesian components of the spherical coordinate vectors.

#### Potential of a uniformly charged parabolic rod

The rod follows $y'=x'^2$ in the $xy$ plane from $x'=-L$ to $x'=L$ in the coordinate units of the notes, and carries total charge $\electric{Q}$ uniformly per unit arc length.

![[Kyle Kabasares - Electrodynamics - Parabolic rod and field point.png|**Fig. 22** The rod follows the parabola between the indicated endpoints. The separate dot marks a field point in the plane.]]

#### Continued January 16, 2018

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

### PDF page 13

#### Energy of charge distributions

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

#### Singular potentials

The ordinary Laplacian of $1/\mechanical{r}$ vanishes away from the origin. The gradient is singular at the origin, as seen from $\partial(1/\mechanical{r})/\partial\mechanical{x}=-\mechanical{x}/\mechanical{r}^3$. The full distributional identity is

$$
\nabla^2\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}
=-4\pi\delta^3(\mechanical{\vec x}-\mechanical{\vec x}').
$$

The delta is necessary for the point-charge potential to satisfy Poisson's equation at its source. The next example asks for the charge density that produces $\electric{\phi}(\mechanical{r})=\electric{V}_0e^{-a\mechanical{r}}/\mechanical{r}$. The page starts by applying $-\electric{\varepsilon}_0\nabla^2$ in Cartesian coordinates.

### PDF page 14

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

### PDF page 15

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

#### Chapter 1 recap and conducting boundaries

Use Gauss's law to find the field directly when symmetry makes the flux simple. For general charge distributions in free space, solve Poisson's equation with the Coulomb kernel and take $\electric{\vec E}=-\nabla\electric{\phi}$. The electrostatic energy can be computed from the charge and potential or from the field energy, with care for point-charge singularities.

Conducting boundaries introduce induced surface charges. The starting example is the spherical shell from the earlier lecture.

![[Kyle Kabasares - Electrodynamics - Conducting boundary and induced charges.png|**Fig. 24** A positive point charge in a conducting shell induces opposite charge on the inner wall and positive charge on the outer wall of the neutral shell.]]

### PDF page 16

For a point charge near a conductor without the symmetry of a centered spherical shell, the induced charge distribution is unknown. It must make the field vanish in the conductor.

![[Kyle Kabasares - Electrodynamics - Point charge near a block conductor.png|**Fig. 25** A point charge beside a conducting block illustrates a geometry where the induced surface charge is difficult to determine directly.]]

The notes identify planar, spherical, and cylindrical boundaries as geometries that admit **method of images** solutions in suitable cases. One seeks a fictitious source distribution whose potential has the prescribed boundary value on the conductor.

![[Kyle Kabasares - Electrodynamics - Planar spherical and cylindrical boundaries.png|**Fig. 26** The three boundary geometries listed in the lecture. The planar example places the boundary at $x=0$.]]

For a point charge on the right of a plane held at zero potential, use the potential of two charges on the right-hand side. On the conducting side the potential is zero.

![[Kyle Kabasares - Electrodynamics - Point charge beside a grounded plane.png|**Fig. 27** The real charge $\electric{Q}$ lies on the right of the grounded plane.]]

### PDF page 17

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

#### Dirichlet Green's function

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

### PDF page 18

#### Lecture of January 18, 2018 — force and energy near a grounded plane

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

The notes consider calculating the energy by integrating the field energy density or by integrating the force with respect to position. The instructor recalls the three energy formulas from page 13, including $\energy{W}=\tfrac12\int\electric{\rho}\,\electric{\phi}\,d^3\mechanical{x}$, before applying them to the physical half-space.

### PDF page 19

After subtracting the isolated point charge's self-energy, the energy of the charge in the presence of the grounded plane is

$$
\energy{U}(\mechanical{a})
=-\int_\infty^{\mechanical{a}}\mechanical{F}_x(s)\,ds
=-\frac{\electric{Q}^2}{16\pi\electric{\varepsilon}_0\mechanical{a}},
$$

where $s$ is the distance from the plane during the displacement. The field-energy method gives the same result. The real and image charges produce equal $\lvert\electric{\vec E}\rvert^2$ in the two reflected half-spaces, but only the physical half-space contributes. After the self-energy subtraction, the result is half the free-space pair interaction energy.

#### Induced surface charge on the plane

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

### PDF page 20

At the grounded plane, the induced charge density is

$$
\electric{\sigma}(\mechanical{y},\mechanical{z})
=\electric{\varepsilon}_0\electric{E}_x(0^+,\mechanical{y},\mechanical{z})
=-\frac{\electric{Q}\mechanical{a}}
{2\pi(\mechanical{a}^2+\mechanical{y}^2+\mechanical{z}^2)^{3/2}}.
$$

#### Grounded sphere

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

#### Prescribed potential on a boundary

The notes introduce a plane with a circular patch held at $\electric{V}_0$. One could seek the unknown surface charge $\electric{\sigma}$ from the normal field and then use a surface potential integral. The unknown normal derivative makes this an indirect approach when the given data are the potential on the plane.

![[Kyle Kabasares - Electrodynamics - Prescribed potential on a circular patch.png|**Fig. 35** The shaded patch on the plane is held at prescribed potential $\electric{V}_0$.]]

### PDF page 21

The lecture motivates the boundary-potential contribution by writing the surface charge in terms of the normal derivative of the potential and moving the derivative onto the Green's function. The volume identity behind this step is Green's second identity. It yields the Dirichlet formula from page 17, with a volume term due to charge and a surface term due to prescribed potential. For the domain $x>0$, the outward normal on the plane is $-\hat x$, so $\partial G/\partial n'=-\partial G/\partial\mechanical{x}'$.

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

### PDF page 22

Evaluating the planar Green's function derivative at the source boundary gives $\partial G/\partial\mechanical{x}'=2\mechanical{x}/(\mechanical{x}^2+s^2)^{3/2}$ at $\mechanical{x}'=0$. The potential in the charge-free right half-space is then

$$
\electric{\phi}(\mechanical{x},\mechanical{y},\mechanical{z})
=\frac{1}{2\pi}\int_{x'=0}
\frac{\mechanical{x}\,\electric{\phi}(0,\mechanical{y}',\mechanical{z}')}
{[\mechanical{x}^2+(\mechanical{y}-\mechanical{y}')^2+
(\mechanical{z}-\mechanical{z}')^2]^{3/2}}\,dA'.
$$

The kernel is positive because the derivative is taken with respect to the source position into the half-space, opposite the outward normal. This fixes the sign in the handwritten substitution. For the disk example, the integral need only cover the disk.

A spherical Dirichlet problem can likewise be posed with an angular boundary potential. The notes refer to Jackson, equation 2.18, for the normal derivative of the spherical Green's function.

![[Kyle Kabasares - Electrodynamics - Sphere with an angular boundary potential.png|**Fig. 39** The boundary value on the sphere can be a function of polar and azimuthal angle.]]

In the textbook example one hemisphere is held at $+\electric{V}_0$ for $0<\theta<\pi/2$ and the other at $-\electric{V}_0$ for $\pi/2<\theta<\pi$. The lecture asks students to reproduce Jackson's equation 2.20.

![[Kyle Kabasares - Electrodynamics - Hemispheres held at opposite potentials.png|**Fig. 40** The two hemispheres are separated by the equator and held at opposite potentials.]]

#### Lecture of January 23, 2018 — approximate boundary-value solutions

Three homework problems are due Thursday. The fourth has a different due date. The notes review exact solutions from the Coulomb integral when all charges are known and from the method of images for some boundaries.

![[Kyle Kabasares - Electrodynamics - Grounded plane recap.png|**Fig. 41** The charge by a grounded plane is an example with a simple image solution.]]

The notes introduce approximation methods for cases where a simple exact construction is unavailable, such as two spheres at distinct prescribed potentials. Solve $\nabla^2\electric{\phi}=-\electric{\rho}/\electric{\varepsilon}_0$ with the appropriate boundary conditions.

![[Kyle Kabasares - Electrodynamics - Two spheres at prescribed potentials.png|**Fig. 42** The two conductors are held at potentials $\electric{V}$ and $2\electric{V}$.]]

### PDF page 23

Approximate the potential by a finite sum $\electric{\phi}(\mechanical{\vec x})\simeq\sum_{n=1}^N a_n\electric{\phi}_n(\mechanical{\vec x})$. A complete basis can represent the potential in the limit of a full expansion, and a useful truncation may need only a few terms.

Sines and cosines give a continuous Fourier representation on the line,

$$
\electric{\phi}(x)=\int\frac{dk}{2\pi}\,a(k)\sin(kx)
+\int\frac{dk}{2\pi}\,b(k)\cos(kx).
$$

For a potential periodic in $x$ with period $a$, the wave numbers are discrete, $k_n=2\pi n/a$. If the potential also depends on $y$, the Fourier coefficients can depend on $y$,

$$
\electric{\phi}(x,y)
=\sum_{n=1}^\infty a_n(y)\sin(k_nx)
+\sum_{n=0}^\infty b_n(y)\cos(k_nx).
$$

The case without $y$ dependence uses constant coefficients. The Cartesian Laplacian splits into separate second derivatives, so a Fourier expansion reduces the partial differential equation to ordinary differential equations. In two dimensions, substituting the series into $(\partial_x^2+\partial_y^2)\electric{\phi}=0$ gives

$$
\sum_{n=1}^{\infty}[a_n''(y)-k_n^2a_n(y)]\sin(k_nx)
+\sum_{n=0}^{\infty}[b_n''(y)-k_n^2b_n(y)]\cos(k_nx)=0.
$$

Here each prime on a coefficient is a $y$ derivative. The electrostatic Poisson equation has the negative source sign established earlier, and this example uses its source-free limit.

### PDF page 24

Fourier orthogonality requires each coefficient in the Laplace equation to vanish separately,

$$
a_n''-k_n^2a_n=0,
\qquad
b_n''-k_n^2b_n=0.
$$

The sine modes start at $n=1$ and the cosine modes include $n=0$. For Poisson's equation, expand $\electric{\rho}(x,y)$ in the same basis. If $\electric{\rho}_{a,n}$ and $\electric{\rho}_{b,n}$ are its sine and cosine coefficients, the corresponding ordinary differential equations are

$$
a_n''-k_n^2a_n=-\frac{\electric{\rho}_{a,n}}{\electric{\varepsilon}_0},
\qquad
b_n''-k_n^2b_n=-\frac{\electric{\rho}_{b,n}}{\electric{\varepsilon}_0}.
$$

The source terms use the electrostatic sign convention from the preceding derivation.

#### A cube with prescribed top potential

Take a cube of side $\mechanical{L}$, with $\electric{\phi}=\electric{V}$ at $z=L$ and zero potential on the bottom and four sides. The top face value follows the problem statement and the sketch.

![[Kyle Kabasares - Electrodynamics - Cube with a driven top face.png|**Fig. 43** The top face is held at potential $\electric{V}$. The other five faces are grounded.]]

The notes start from the four sine and cosine combinations in $x$ and $y$, with coefficients depending on $z$. For the zero conditions at $x=0,L$ one can choose sine modes in $x$ and drop the two families with an $x$ cosine. Similarly, sine modes in $y$ enforce the zero conditions at $y=0,L$. The resulting expansion is

$$
\electric{\phi}(x,y,z)=
\sum_{m,n\geq1}a_{mn}(z)
\sin\!\left(\frac{m\pi x}{L}\right)
\sin\!\left(\frac{n\pi y}{L}\right).
$$

### PDF page 25

The sine modes satisfy all four side conditions. Substituting them into $\nabla^2\electric{\phi}=0$ gives

$$
a_{mn}''-\gamma_{mn}^2a_{mn}=0,
\qquad
\gamma_{mn}^2=\left(\frac{m\pi}{L}\right)^2+\left(\frac{n\pi}{L}\right)^2.
$$

Both squared wave numbers enter with the same sign because the second derivative of each sine is negative. The solution is $a_{mn}(z)=A_{mn}e^{\gamma_{mn}z}+B_{mn}e^{-\gamma_{mn}z}$. At $z=0$ the potential vanishes, which requires $B_{mn}=-A_{mn}$. At $z=L$, the sine expansion must equal the prescribed top potential $\electric{V}(x,y)$.

Orthogonality on $[0,L]$ gives $\int_0^L\sin(m\pi x/L)\sin(p\pi x/L)\,dx=(L/2)\delta_{mp}$. Projecting onto both sine factors yields

$$
A_{mn}\left(e^{\gamma_{mn}L}-e^{-\gamma_{mn}L}\right)
=\frac{4}{L^2}\int_0^L\!\!\int_0^L
\electric{V}(x,y)\sin\!\left(\frac{m\pi x}{L}\right)
\sin\!\left(\frac{n\pi y}{L}\right)\,dx\,dy.
$$

The notes ask whether the same cube can be treated by expanding in $x$ and $z$ and leaving the coefficients as functions of $y$. The nonzero condition on the top face needs separate treatment in that expansion.

![[Kyle Kabasares - Electrodynamics - Cube recap with top and bottom potentials.png|**Fig. 44** The top and bottom potentials differ, so the choice of expansion coordinates affects how the boundary data enter.]]

### PDF page 26

The notes try expanding in $x$ and $z$ for the cube. Start with a continuous Fourier expansion and impose the homogeneous $x$ boundary values to retain discrete modes $\sin(m\pi x/L)$. In the trial expansion the $z$ wave number $\beta$ is left continuous,

$$
\electric{\phi}(x,y,z)
=\sum_{m=1}^\infty \int d\beta\,
\sin\!\left(\frac{m\pi x}{L}\right)\sin(\beta z)\,a_{m\beta}(y).
$$

The sine in $z$ enforces zero potential at $z=0$. In a formal substitution into Laplace's equation, each separated coefficient obeys $a_{m\beta}''-\gamma_{m\beta}^2a_{m\beta}=0$, with $\gamma_{m\beta}^2=(m\pi/L)^2+\beta^2$, and has exponential dependence on $y$. The notes identify $y=0,L$ as the remaining grounded faces. This trial is less convenient because it also has to accommodate the prescribed nonzero value at $z=L$.

#### Semi-infinite strip

Take $0<x<L$ and $y>0$, with the sides at zero potential and the base at $\electric{V}$. The problem is to solve $(\partial_x^2+\partial_y^2)\electric{\phi}=0$ with these Dirichlet data. The natural expansion is $\electric{\phi}(x,y)=\sum_{m=1}^\infty a_m(y)\sin(m\pi x/L)$.

![[Kyle Kabasares - Electrodynamics - Semi-infinite strip with prescribed base potential.png|**Fig. 45** The bottom of the strip is held at $\electric{V}$ and both vertical sides at zero potential.]]

### PDF page 27

A separated solution $X(x)Y(y)$ in the strip satisfies $X''/X=-Y''/Y=-\lambda$ with $\lambda>0$. The zero values at $x=0,L$ select $X_m(x)=\sin(m\pi x/L)$, so $\lambda_m=(m\pi/L)^2$. This is the discrete sine series obtained by odd periodic extension of the base profile.

The $y$ equation is $a_m''-(m\pi/L)^2a_m=0$. Its growing exponential is removed by $\electric{\phi}\to0$ as $y\to\infty$. The solution takes the form

$$
\electric{\phi}(x,y)=\sum_{m=1}^\infty B_m
\sin\!\left(\frac{m\pi x}{L}\right)e^{-m\pi y/L},
\qquad
\sum_{m=1}^\infty B_m\sin\!\left(\frac{m\pi x}{L}\right)=\electric{V}
\quad (0<x<L).
$$

The coefficients $B_m$ denote the surviving decaying modes. The handwritten base condition uses the other coefficient label after dropping the growing modes.

#### Lecture of January 25, 2018 — choosing coordinates for Laplace's equation

The lecture recaps the Cartesian separation used for the cube and the strip. An orthogonal basis adapted to the boundary reduces the equation to separate ordinary differential equations.

![[Kyle Kabasares - Electrodynamics - Strip in Cartesian coordinates.png|**Fig. 46** The parallel vertical sides select a discrete sine basis in $x$, with exponential decay in $y$.]]

A finite segment held at $\electric{V}$ on the boundary of a half-plane gives a different set of boundary data, for which the strip expansion is less convenient.

![[Kyle Kabasares - Electrodynamics - Finite driven segment on a planar boundary.png|**Fig. 47** A finite interval of a straight boundary is held at prescribed potential.]]

### PDF page 28

#### Separation in spherical coordinates

The spherical Laplacian separates as

$$
\nabla^2=\frac{1}{\mechanical{r}^2}\frac{\partial}{\partial\mechanical{r}}
\left(\mechanical{r}^2\frac{\partial}{\partial\mechanical{r}}\right)
+\frac{1}{\mechanical{r}^2}\Delta_\Omega,
\qquad
\Delta_\Omega=
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}.
$$

The spherical harmonics $Y_{\ell m}(\theta,\phi)$ supply a complete angular basis, analogous to the sine and cosine modes in Cartesian coordinates. They satisfy $\Delta_\Omega Y_{\ell m}=-\ell(\ell+1)Y_{\ell m}$, so $\ell(\ell+1)$ is the positive separation constant. Expand

$$
\electric{\phi}(\mechanical{r},\theta,\phi)
=\sum_{\ell=0}^{\infty}\sum_{m=-\ell}^{\ell}
R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\phi).
$$

Substitution into Laplace's equation gives one radial equation per harmonic,

$$
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{dR_{\ell m}}{d\mechanical{r}}\right)
-\frac{\ell(\ell+1)}{\mechanical{r}^2}R_{\ell m}=0.
$$

The harmonics may be chosen orthonormal,

$$
\int_0^{2\pi}\!\!\int_0^\pi
Y_{\ell m}(\theta,\phi)Y_{\ell' m'}^*(\theta,\phi)
\sin\theta\,d\theta\,d\phi=\delta_{\ell\ell'}\delta_{mm'}.
$$

### PDF page 29

The azimuthal derivative $\partial_\phi$ commutes with $\Delta_\Omega$. Choose simultaneous eigenfunctions with $\partial_\phi f=imf$. Then $f(\theta,\phi)=e^{im\phi}g(\theta)$, and single-valuedness under $\phi\mapsto\phi+2\pi$ requires integer $m$. The angular eigenvalue equation $\Delta_\Omega f=\lambda f$ reduces to

$$
\frac{1}{\sin\theta}\frac{d}{d\theta}
\left(\sin\theta\frac{dg}{d\theta}\right)
-\frac{m^2}{\sin^2\theta}g=\lambda g.
$$

Regularity at both poles selects the allowed eigenvalues. For $m=0$, substitute a power series in $\cos\theta$. The coefficient recursion gives a regular polynomial when the series terminates, with $\lambda=-\ell(\ell+1)$ and $g$ proportional to the Legendre polynomial $P_\ell(\cos\theta)$. For nonzero $m$, the corresponding angular functions are the associated Legendre functions $P_\ell^m(\cos\theta)$.

$$
Y_{\ell m}(\theta,\phi)
=N_{\ell m}e^{im\phi}P_\ell^m(\cos\theta),
\qquad
\ell=0,1,\ldots,\quad m=-\ell,\ldots,\ell.
$$

See Jackson, equations 3.49 and 3.53, for the associated Legendre functions and normalization factor. The first harmonic is $Y_{00}=1/\sqrt{4\pi}$. The next two degrees have three modes at $\ell=1$ and five at $\ell=2$.

### PDF page 30

The first-degree harmonics in the convention of the notes are

$$
\begin{aligned}
Y_{10}&=\sqrt{\frac{3}{4\pi}}\cos\theta,\\
Y_{11}&=-\sqrt{\frac{3}{8\pi}}\,e^{i\phi}\sin\theta,\\
Y_{1,-1}&=\sqrt{\frac{3}{8\pi}}\,e^{-i\phi}\sin\theta.
\end{aligned}
$$

The exponent for $m=-1$ follows from the $e^{im\phi}$ convention on the preceding page. The recap emphasizes completeness, orthonormality, $\Delta_\Omega Y_{\ell m}=-\ell(\ell+1)Y_{\ell m}$, and $\partial_\phi^2Y_{\ell m}=-m^2Y_{\ell m}$.

#### Sphere held at constant potential

The sphere is held at $\electric{V}_0$ and the exterior is charge free.

![[Kyle Kabasares - Electrodynamics - Sphere held at constant potential.png|**Fig. 48** The spherical boundary has the same prescribed potential at every angle.]]

The radial equation for each mode in a source-free region has the solution

$$
R_{\ell m}(\mechanical{r})
=A_{\ell m}\mechanical{r}^\ell+B_{\ell m}\mechanical{r}^{-\ell-1}.
$$

In the exterior, $\electric{\phi}\to0$ at infinity requires $A_{\ell m}=0$. On the surface $\mechanical{r}=\mechanical{R}$, the remaining coefficients must satisfy

$$
\sum_{\ell,m}\frac{B_{\ell m}}{\mechanical{R}^{\ell+1}}
Y_{\ell m}(\theta,\phi)=\electric{V}_0.
$$

### PDF page 31

For a prescribed boundary potential $\electric{V}(\theta,\phi)$, project onto the orthonormal spherical harmonics,

$$
\frac{B_{\ell m}}{\mechanical{R}^{\ell+1}}
=\int_{S^2}\electric{V}(\theta,\phi)Y_{\ell m}^*(\theta,\phi)\,d\Omega.
$$

A constant boundary value $\electric{V}_0=\electric{V}_0\sqrt{4\pi}\,Y_{00}$ leaves only $B_{00}=\mechanical{R}\electric{V}_0\sqrt{4\pi}$. The exterior potential is $\electric{\phi}=\electric{V}_0\mechanical{R}/\mechanical{r}$.

For $\electric{V}(\theta,\phi)=\electric{V}_0\cos\theta$, the boundary data are $\electric{V}_0\sqrt{4\pi/3}\,Y_{10}$. Only $B_{10}=\mechanical{R}^2\electric{V}_0\sqrt{4\pi/3}$ survives, so

$$
\electric{\phi}(\mechanical{r},\theta,\phi)
=\electric{V}_0\sqrt{\frac{4\pi}{3}}
\frac{\mechanical{R}^2}{\mechanical{r}^2}Y_{10}(\theta,\phi)
=\electric{V}_0\left(\frac{\mechanical{R}}{\mechanical{r}}\right)^2\cos\theta.
$$

The radial power is $-2$ by the $\ell=1$ radial equation and gives the prescribed potential at $\mechanical{r}=\mechanical{R}$.

![[Kyle Kabasares - Electrodynamics - Spherical boundary with cosine potential.png|**Fig. 49** The boundary potential varies as $\cos\theta$ and selects one spherical harmonic.]]

For a boundary value $\electric{V}_0\sin\theta$, use $B_{\ell m}/\mechanical{R}^{\ell+1}=\int_{S^2}\electric{V}_0\sin\theta\,Y_{\ell m}^*\,d\Omega$. The notes leave this example in terms of the mode integrals.

### PDF page 32

#### Late-January discussion — homework 2, problem 3

The notes discuss a cube with a prescribed uniform charge distribution. Three claims about this example are rejected. The surface need not be equipotential, the interior field can be nonzero, and the Coulomb integral applies inside as well as outside whenever all the charge is specified. A conductor in electrostatic equilibrium would instead redistribute its charge until its potential was constant throughout the conducting material.

![[Kyle Kabasares - Electrodynamics - Cube with prescribed charge distribution.png|**Fig. 50** The cube sketch highlights corners while discussing how charge would redistribute on a conductor. The homework example prescribes the distribution.]]

#### Surface charge on a plane with nonuniform potential

The next problem gives a Gaussian boundary profile proportional to $e^{-\alpha(\mechanical{y}^2+\mechanical{z}^2)}$ and shows a point charge $\electric{Q}$ to one side. The surface charge follows from the difference in the signed normal field on the two sides,

$$
\electric{\sigma}
=\electric{\varepsilon}_0\left(\electric{E}_{n,+}-\electric{E}_{n,-}\right),
$$

using the same normal direction on both sides. The signed jump permits a surface charge of either sign. The symmetric uniform sheet is the special case with equal and opposite normal field components.

![[Kyle Kabasares - Electrodynamics - Point charge and nonuniform planar potential.png|**Fig. 51** The plane has a prescribed Gaussian potential and a point charge lies on the right.]]

![[Kyle Kabasares - Electrodynamics - Field jumps for general and symmetric sheets.png|**Fig. 52** The upper sketch shows two independent limiting fields. The lower sketch shows the equal-magnitude fields of an isolated uniform sheet.]]

### PDF page 33

With $\electric{E}_x=-\partial\electric{\phi}/\partial\mechanical{x}$, the jump condition becomes

$$
\electric{\sigma}
=-\electric{\varepsilon}_0\left[
\left.\frac{\partial\electric{\phi}}{\partial\mechanical{x}}\right|_{0^+}
-\left.\frac{\partial\electric{\phi}}{\partial\mechanical{x}}\right|_{0^-}
\right].
$$

The overall minus sign follows from the definition of the electric field and agrees with the earlier grounded-plane derivation. Both sides contribute unless one normal derivative vanishes.

For the boundary data $\electric{\phi}(0,\mechanical{y},\mechanical{z})=\electric{V}_0e^{-\alpha(\mechanical{y}^2+\mechanical{z}^2)}$ with no volume charge, the two half-space solutions are related by reflection. Their normal derivatives with respect to the same $x$ direction are opposite, so the boundary-data contribution to the surface charge is $-2\electric{\varepsilon}_0(\partial\electric{\phi}/\partial\mechanical{x})_{0^+}$.

![[Kyle Kabasares - Electrodynamics - Gaussian boundary data on both sides of a plane.png|**Fig. 53** Nonzero boundary data generate a potential on both sides of the plane.]]

Linearity lets the full problem be split into the contribution from the prescribed potential and the contribution from the point charge.

![[Kyle Kabasares - Electrodynamics - Boundary potential contribution.png|**Fig. 54** Solve the charge-free problem with the prescribed Gaussian potential using the Dirichlet Green's function.]]

![[Kyle Kabasares - Electrodynamics - Grounded-plane point charge contribution.png|**Fig. 55** Solve the point-charge problem with the plane grounded using an image charge.]]

### PDF page 34

#### Electrostatic energy of a conducting shell with a central charge

The homework example has a central point charge $\electric{Q}$ and a conducting shell of net charge $\electric{q}$. The inner surface at radius $\mechanical{a}$ carries $-\electric{Q}$ and the outer surface at radius $\mechanical{b}$ carries $\electric{Q}+\electric{q}$.

![[Kyle Kabasares - Electrodynamics - Charge and potential for the conducting-shell energy.png|**Fig. 56** The sketch identifies the central charge, the two induced surface charges, and the shell radii.]]

In the potential formulation $\tfrac12\int\electric{\rho}\,\electric{\phi}\,d^3\mechanical{x}$, the two conducting surfaces are at the same potential $(\electric{Q}+\electric{q})/(4\pi\electric{\varepsilon}_0\mechanical{b})$. The central charge also has a contribution from the finite potential of the two surfaces. Its own divergent Coulomb potential is removed.

The field-energy calculation has a contribution from the cavity and a contribution from the exterior. The cavity integral diverges at the origin. Subtract the energy of the isolated central charge over all space with the same short-distance cutoff in both integrals. This cancels the cavity integral and leaves

$$
\energy{W}_{\mathrm{ren}}
=\frac{\electric{\varepsilon}_0}{2}
\int_{\mechanical{r}>\mechanical{b}}
\left(\frac{\electric{Q}+\electric{q}}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}\right)^2d^3\mechanical{x}
-\frac{\electric{\varepsilon}_0}{2}
\int_{\mechanical{r}>\mechanical{a}}
\left(\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}\right)^2d^3\mechanical{x}.
$$

The residual second integral has lower limit $\mechanical{a}$ because only the cavity field canceled. Using $d^3\mechanical{x}=4\pi\mechanical{r}^2\,d\mechanical{r}$ for the radial integration gives $\energy{W}_{\mathrm{ren}}=[(\electric{Q}+\electric{q})^2/\mechanical{b}-\electric{Q}^2/\mechanical{a}]/(8\pi\electric{\varepsilon}_0)$.

### PDF page 35

#### Lecture of January 30, 2018 — spherical boundary-value recap

Expand $\electric{\phi}=\sum_{\ell,m}R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\phi)$ in orthonormal spherical harmonics. In a charge-free region the radial coefficients are $A_{\ell m}\mechanical{r}^\ell+B_{\ell m}\mechanical{r}^{-\ell-1}$. Outside a sphere with potential tending to zero at infinity, retain the decaying terms. Matching to the surface data $\electric{V}(\theta,\phi)$ at $\mechanical{r}=\mechanical{R}$ gives

$$
\frac{B_{\ell m}}{\mechanical{R}^{\ell+1}}
=\int_{S^2}\electric{V}(\theta,\phi)Y_{\ell m}^*(\theta,\phi)\,d\Omega.
$$

![[Kyle Kabasares - Electrodynamics - General Dirichlet data on a sphere.png|**Fig. 57** The angular function on the sphere specifies the Dirichlet data.]]

If the boundary data are a linear combination of a few spherical harmonics, orthogonality gives the coefficients directly. The example takes $\electric{V}(\theta,\phi)=\electric{V}_0\cos^2\theta$, so the remaining series at the surface must sum to that function.

![[Kyle Kabasares - Electrodynamics - Spherical boundary with cosine-squared potential.png|**Fig. 58** The imposed angular dependence in the example is proportional to $\cos^2\theta$.]]

### PDF page 36

Since $\cos^2\theta=\alpha Y_{20}+\beta Y_{00}$ for constants $\alpha,\beta$, projection gives $B_{20}/\mechanical{R}^3=\alpha\electric{V}_0$ and $B_{00}/\mechanical{R}=\beta\electric{V}_0$. The exterior solution is therefore

$$
\electric{\phi}(\mechanical{r},\theta,\phi)
=\alpha\electric{V}_0Y_{20}(\theta,\phi)
\left(\frac{\mechanical{R}}{\mechanical{r}}\right)^3
+\beta\electric{V}_0Y_{00}(\theta,\phi)
\frac{\mechanical{R}}{\mechanical{r}}.
$$

The radial factors follow from the two projected coefficients and give the prescribed angular dependence at the surface.

#### Multipole expansion

For general boundary data, the exterior series has terms proportional to $1/\mechanical{r}$, $1/\mechanical{r}^2$, $1/\mechanical{r}^3$, and higher inverse powers. At large distances only the first few nonzero terms are needed. For localized charge, a standard SI normalization of the multipole moments $\electric{q}_{\ell m}$ gives

$$
\electric{\phi}(\mechanical{r},\theta,\phi)
=\frac1{\electric{\varepsilon}_0}\sum_{\ell=0}^\infty\sum_{m=-\ell}^{\ell}
\frac{\electric{q}_{\ell m}Y_{\ell m}(\theta,\phi)}
{(2\ell+1)\mechanical{r}^{\ell+1}},
\qquad
\electric{q}_{\ell m}
=\int \electric{\rho}(\mechanical{\vec x}')\mechanical{r}'^\ell
Y_{\ell m}^*(\theta',\phi')\,d^3\mechanical{x}'.
$$

This convention includes the Coulomb factor $1/(4\pi\electric{\varepsilon}_0)$ multiplying the spherical-harmonic kernel's $4\pi$. For a point charge at the origin only the $\ell=0$ term contributes. Since $Y_{00}=1/\sqrt{4\pi}$, the moment is $\electric{q}_{00}=\electric{Q}/\sqrt{4\pi}$ and the potential reduces to $\electric{Q}/(4\pi\electric{\varepsilon}_0\mechanical{r})$.

### PDF page 37

The monopole $\electric{q}_{00}$ measures total charge. The three $\ell=1$ moments describe the dipole. Consider charges $+\electric{q}$ and $-\electric{q}$ at $z=\mechanical{a}/2$ and $z=-\mechanical{a}/2$. The ideal dipole limit takes $\mechanical{a}\to0$ with $\electric{p}=\electric{q}\mechanical{a}$ held fixed.

![[Kyle Kabasares - Electrodynamics - Opposite charges in an electric dipole.png|**Fig. 59** Two charges of opposite sign are separated by $\mechanical{a}$. The dipole moment points from negative to positive charge.]]

Their potential is
$$
\electric{\phi}
=\frac{\electric{q}}{4\pi\electric{\varepsilon}_0}
\left[
\frac1{\sqrt{x^2+y^2+(z-\mechanical{a}/2)^2}}
-\frac1{\sqrt{x^2+y^2+(z+\mechanical{a}/2)^2}}
\right].
$$

For $\mechanical{a}\ll\mechanical{r}$, the two reciprocal distances are $1/\mechanical{r}\pm\mechanical{a}z/(2\mechanical{r}^3)$ to first order. The constant terms cancel and the two first-order terms add, giving
$$
\electric{\phi}_{\mathrm{dip}}
=\frac{\electric{p}z}{4\pi\electric{\varepsilon}_0\mechanical{r}^3}
=\frac{\electric{p}\cos\theta}{4\pi\electric{\varepsilon}_0\mechanical{r}^2}.
$$

This is the $\ell=1$, $m=0$ mode since $Y_{10}\propto\cos\theta$. With the SI normalization on page 36, $\electric{q}_{10}=\sqrt{3/(4\pi)}\,\electric{p}_z$. A dipole along $x$ instead has angular dependence $\sin\theta\cos\phi$ and involves $Y_{11}$ and $Y_{1,-1}$. With the phases used on page 30, $\electric{p}_x$ is proportional to $\electric{q}_{1,-1}-\electric{q}_{11}$.

### PDF page 38

The three Cartesian dipole components are linear combinations of the three $\ell=1$ moments. The first three orders are the monopole $\electric{q}_{00}$, the dipole moments $\electric{q}_{1m}$, and the quadrupole moments $\electric{q}_{2m}$.

To compute the moments of a specified density, expand the Coulomb kernel at a field point outside the sources. Its first terms are
$$
\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}
=\frac1{\mechanical{r}}+\frac{\mechanical{\vec x}\cdot\mechanical{\vec x}'}{\mechanical{r}^3}+\cdots.
$$

For $\mechanical{r}>\mechanical{r}'$, the full angular expansion is
$$
\frac{1}{\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert}
=\sum_{\ell,m}\frac{4\pi}{2\ell+1}
\frac{\mechanical{r}'^\ell}{\mechanical{r}^{\ell+1}}
Y_{\ell m}(\theta,\phi)Y_{\ell m}^*(\theta',\phi').
$$

Substitute this into $\electric{\phi}=(4\pi\electric{\varepsilon}_0)^{-1}\int\electric{\rho}(\mechanical{\vec x}')/\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert\,d^3\mechanical{x}'$ and match coefficients of $Y_{\ell m}/\mechanical{r}^{\ell+1}$. This gives the moment integral on page 36. The notes use an alternative normalization on this page, with $1/(4\pi)$ inside the moment integral and a compensating $4\pi$ in the potential series. The power of the source radius is $\ell$ in either convention.

### PDF page 39

With the alternative normalization on the preceding page, the monopole moment is proportional to the total charge.

$$
\electric{q}_{00}^{(\mathrm{alt})}
=\frac{1}{4\pi}\frac{1}{\sqrt{4\pi}}
\int \electric{\rho}(\mechanical{\mathbf r}')\,d^3\mechanical{r}'
=\frac{\electric{Q}_{\mathrm{tot}}}{(4\pi)^{3/2}}.
$$

In a charge-free region, the potential can be written as

$$
\electric{\phi}=\sum_{\ell,m}R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\varphi),
\qquad
R_{\ell m}(\mechanical{r})=A_{\ell m}\mechanical{r}^{\ell}
+\frac{B_{\ell m}}{\mechanical{r}^{\ell+1}}.
$$

For a localized source and a potential that vanishes at infinity, keep the inverse powers and use the boundary conditions to find their coefficients. The exterior series applies when $\mechanical{r}>\mechanical{r}'$ for all source points. Far from the source, one can keep just the first nonzero terms.

Consider a spherical shell of radius $\mechanical{R}$ with surface charge density $\electric{\sigma}=\electric{\sigma}_0\cos\theta$.

![[Kyle Kabasares - Electrodynamics - Spherical shell with cosine charge density.png|**Fig. 60** Spherical shell with surface charge density proportional to $\cos\theta$.]]

The corresponding volume charge density is

$$
\electric{\rho}(\mechanical{r},\theta)
=\electric{\sigma}_0\cos\theta\,\delta(\mechanical{r}-\mechanical{R}).
$$

> [!note]
> The handwritten expression divides the radial delta by $\mechanical{R}^2$. When $\electric{\sigma}_0$ is a surface charge density, integrating through the shell in the radial direction gives $\electric{\sigma}_0\cos\theta$ directly. The factor $\mechanical{R}^2$ enters through the area element.

Using the standard moment convention, the radial integral gives

$$
\electric{q}_{\ell m}=\electric{\sigma}_0\mechanical{R}^{\ell+2}
\int \cos\theta'\,Y_{\ell m}^*(\theta',\varphi')\,d\Omega'.
$$

Since $\cos\theta'$ is proportional to $Y_{10}$, orthogonality leaves only $\electric{q}_{10}$.

### PDF page 40

#### Multipole moments from a prescribed potential

A sphere of radius $\mechanical{R}$ is held at the boundary potential $\electric{\phi}(\mechanical{R},\theta,\varphi)=\electric{V}_0\cos\theta$. To find the monopole, dipole, and quadrupole moments, first solve for the exterior potential and then match its coefficients to the multipole expansion.

![[Kyle Kabasares - Electrodynamics - Sphere with cosine boundary potential.png|**Fig. 61** Sphere with prescribed boundary potential $\electric{V}_0\cos\theta$.]]

$$
\electric{\phi}_{\mathrm{out}}=\sum_{\ell,m}
\frac{B_{\ell m}}{\mechanical{r}^{\ell+1}}Y_{\ell m}(\theta,\varphi),
\qquad
\frac{B_{\ell m}}{\mechanical{R}^{\ell+1}}
=\int \electric{V}_0\cos\theta\,Y_{\ell m}^*(\theta,\varphi)\,d\Omega.
$$

Only $B_{10}$ survives, since $Y_{10}\propto\cos\theta$.

$$
B_{10}=\mechanical{R}^2\int\electric{V}_0\cos\theta\,Y_{10}^*\,d\Omega,
\qquad
\electric{\phi}_{\mathrm{out}}=\frac{B_{10}}{\mechanical{r}^2}Y_{10}.
$$

Matching to the expansion in the alternative convention of page 38 gives $B_{\ell m}=4\pi\electric{q}_{\ell m}^{(\mathrm{alt})}/[\electric{\varepsilon}_0(2\ell+1)]$. Thus the only nonzero moment is the axial dipole term.

#### Spherical-coordinate expansion with sources · February 1, 2018

Expand the potential as $\electric{\phi}=\sum_{\ell,m}R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\varphi)$. If $\nabla^2\electric{\phi}=0$, the radial functions are $R_{\ell m}=A_{\ell m}\mechanical{r}^{\ell}+B_{\ell m}/\mechanical{r}^{\ell+1}$. When charges are present, substitute the expansion into Poisson's equation.

$$
\sum_{\ell,m}\left[
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{dR_{\ell m}}{d\mechanical{r}}\right)
-\frac{\ell(\ell+1)}{\mechanical{r}^2}R_{\ell m}
\right]Y_{\ell m}=-\frac{\electric{\rho}}{\electric{\varepsilon}_0}.
$$

Projecting onto $Y_{\ell m}$ gives a radial equation for each pair of indices.

$$
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{dR_{\ell m}}{d\mechanical{r}}\right)
-\frac{\ell(\ell+1)}{\mechanical{r}^2}R_{\ell m}
=-\frac{1}{\electric{\varepsilon}_0}
\int \electric{\rho}Y_{\ell m}^*(\theta,\varphi)\sin\theta\,d\theta\,d\varphi.
$$

### PDF page 41

#### Matching radial solutions across a point charge

A point charge $\electric{Q}$ at $(\mechanical{R},\theta',\varphi')$ has spherical-coordinate density

$$
\electric{\rho}=\frac{\electric{Q}}{\mechanical{R}^2\sin\theta'}\,
\delta(\mechanical{r}-\mechanical{R})\delta(\theta-\theta')\delta(\varphi-\varphi').
$$

After angular projection, the radial equation is

$$
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{dR_{\ell m}}{d\mechanical{r}}\right)
-\frac{\ell(\ell+1)}{\mechanical{r}^2}R_{\ell m}
=-\frac{\electric{Q}}{\electric{\varepsilon}_0\mechanical{R}^2}
Y_{\ell m}^*(\theta',\varphi')\delta(\mechanical{r}-\mechanical{R}).
$$

The angular measure cancels the $\sin\theta'$ in the density. The notes call the solution procedure the “stitching method.” On either side of $\mechanical{R}$ the radial equation is homogeneous. Regularity at the origin selects $A_{\ell m}\mechanical{r}^{\ell}$ inside, and decay at infinity selects $B_{\ell m}/\mechanical{r}^{\ell+1}$ outside.

At $\mechanical{r}=\mechanical{R}$, each $R_{\ell m}$ is continuous and its derivative has a jump. Multiply the radial equation by $\mechanical{r}^2$, integrate from $\mechanical{R}-\epsilon$ to $\mechanical{R}+\epsilon$, and let $\epsilon$ tend to zero. The angular term gives zero in this limit.

$$
\left[\mechanical{r}^2\frac{dR_{\ell m}}{d\mechanical{r}}\right]_{\mechanical{R}^-}^{\mechanical{R}^+}
=-\frac{\electric{Q}}{\electric{\varepsilon}_0}Y_{\ell m}^*(\theta',\varphi').
$$

Use continuity and the jump to solve for the two coefficients. With $\mechanical{r}_{<}=\min(\mechanical{r},\mechanical{R})$ and $\mechanical{r}_{>}=\max(\mechanical{r},\mechanical{R})$, the result is

$$
\begin{aligned}
\electric{\phi}(\mechanical{r},\theta,\varphi)
&=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0}
\sum_{\ell,m}\frac{4\pi}{2\ell+1}
Y_{\ell m}(\theta,\varphi)Y_{\ell m}^*(\theta',\varphi')
\frac{\mechanical{r}_{<}^{\ell}}{\mechanical{r}_{>}^{\ell+1}}\\
&=\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}.
\end{aligned}
$$

The radial ratio is $\mechanical{R}^{\ell}/\mechanical{r}^{\ell+1}$ outside and $\mechanical{r}^{\ell}/\mechanical{R}^{\ell+1}$ inside. The handwritten intermediate lines carry an extra $\sin\theta'$ after projection and an inconsistent power in the interior ratio. The expressions here follow the delta-function measure and the matched radial solutions.

### PDF page 42

#### Potential of a sphere with cosine volume charge density

Inside a sphere of radius $\mechanical{R}$, take $\electric{\rho}=\electric{\rho}_0\cos\theta=\electric{\rho}_0 C Y_{10}(\theta,\varphi)$, where $C=\sqrt{4\pi/3}$. The density vanishes outside.

![[Kyle Kabasares - Electrodynamics - Sphere with cosine volume charge density.png|**Fig. 62** Charged volume extending from the origin to radius $\mechanical{R}$.]]

The Coulomb integral is

$$
\electric{\phi}(\mechanical{\mathbf r})
=\frac{1}{4\pi\electric{\varepsilon}_0}\int
\frac{\electric{\rho}_0 C Y_{10}(\theta',\varphi')}
{\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}\,d^3\mechanical{r}'.
$$

Expand the inverse distance in spherical harmonics. The angular integral of $Y_{10}Y_{\ell m}^*$ selects $\ell=1$, $m=0$, leaving

$$
\electric{\phi}
=\frac{\electric{\rho}_0 C Y_{10}(\theta,\varphi)}{3\electric{\varepsilon}_0}
\int_0^{\mechanical{R}}
\frac{\mechanical{r}_{<}}{\mechanical{r}_{>}^2}(\mechanical{r}')^2\,d\mechanical{r}'.
$$

For $\mechanical{r}>\mechanical{R}$, every source point satisfies $\mechanical{r}'<\mechanical{r}$, so the radial integral is

$$
\int_0^{\mechanical{R}}\frac{\mechanical{r}'}{\mechanical{r}^2}(\mechanical{r}')^2\,d\mechanical{r}'.
$$

For $\mechanical{r}<\mechanical{R}$, the identity of the smaller radius changes at $\mechanical{r}'=\mechanical{r}$. Split the integral there.

$$
\electric{\phi}
=\frac{\electric{\rho}_0 C Y_{10}(\theta,\varphi)}{3\electric{\varepsilon}_0}
\left[
\int_0^{\mechanical{r}}\frac{\mechanical{r}'}{\mechanical{r}^2}(\mechanical{r}')^2\,d\mechanical{r}'
+\int_{\mechanical{r}}^{\mechanical{R}}\frac{\mechanical{r}}{(\mechanical{r}')^2}(\mechanical{r}')^2\,d\mechanical{r}'
\right].
$$

### PDF page 43

#### A point charge and a prescribed spherical boundary

Use linearity to split the problem into a point charge $\electric{Q}$ outside a grounded sphere and a source-free sphere with boundary value $\electric{V}_0\cos\theta$.

![[Kyle Kabasares - Electrodynamics - Superposition for a point charge and sphere.png|**Fig. 63** Decomposition into the grounded-sphere problem and the prescribed-potential problem.]]

With $\mechanical{\mathbf r}'$ the source position and $\mechanical{\mathbf r}_{\mathrm{im}}$ the image position, the exterior and interior potentials are

$$
\begin{aligned}
\electric{\phi}_{\mathrm{out}}&=
\frac{\electric{Q}}{4\pi\electric{\varepsilon}_0\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}'\rvert}
+\frac{\electric{q}'}{4\pi\electric{\varepsilon}_0\lvert\mechanical{\mathbf r}-\mechanical{\mathbf r}_{\mathrm{im}}\rvert}
+\electric{V}_0\cos\theta\frac{\mechanical{R}^2}{\mechanical{r}^2},\\
\electric{\phi}_{\mathrm{in}}&=
0+\electric{V}_0\cos\theta\frac{\mechanical{r}}{\mechanical{R}}.
\end{aligned}
$$

The exterior term from the prescribed boundary uses the dipole radial factor $\mechanical{R}^2/\mechanical{r}^2$ derived on page 40 and written again below the example. It matches the boundary value at $\mechanical{r}=\mechanical{R}$.

One can also solve by expanding the potential in $R_{\ell m}Y_{\ell m}$, projecting the charge source, and imposing the boundary value in each mode. Here $\mechanical{r}'=\lvert\mechanical{\mathbf r}'\rvert$.

$$
\begin{aligned}
\frac{1}{\mechanical{r}^2}\frac{d}{d\mechanical{r}}
\left(\mechanical{r}^2\frac{dR_{\ell m}}{d\mechanical{r}}\right)
-\frac{\ell(\ell+1)}{\mechanical{r}^2}R_{\ell m}
&=-\frac{\electric{Q}}{\electric{\varepsilon}_0(\mechanical{r}')^2}
Y_{\ell m}^*(\theta',\varphi')\delta(\mechanical{r}-\mechanical{r}'),\\
\sum_{\ell,m}R_{\ell m}(\mechanical{R})Y_{\ell m}(\theta,\varphi)
&=\electric{V}_0\cos\theta.
\end{aligned}
$$

#### Finding charge and dipole moment from an exterior potential

The next problem asks for the total charge and dipole moment of a sphere whose hemispheres are held at opposite potentials.

![[Kyle Kabasares - Electrodynamics - Hemispheres at opposite potentials.png|**Fig. 64** Upper and lower hemispheres held at $\electric{V}_0$ and $-\electric{V}_0$.]]

As a simpler case, return to the sphere with boundary value $\electric{V}_0\cos\theta$.

![[Kyle Kabasares - Electrodynamics - Dipole potential boundary on a sphere.png|**Fig. 65** Continuous cosine boundary potential on the sphere.]]

Its exterior potential is $\electric{V}_0\mechanical{R}^2\cos\theta/\mechanical{r}^2$. A monopole would contribute $\electric{Q}/(4\pi\electric{\varepsilon}_0\mechanical{r})$. The absence of a $1/\mechanical{r}$ term implies zero total charge. The $\cos\theta/\mechanical{r}^2$ term still indicates a dipole charge distribution.

### PDF page 44

Compare the far-field expansion (Jackson, Eq. 4.10) with the exterior potential of the sphere with cosine boundary value.

$$
\electric{\phi}(\mechanical{\mathbf r})=\frac{1}{4\pi\electric{\varepsilon}_0}
\left[
\frac{\electric{q}}{\mechanical{r}}
+\frac{\electric{\mathbf p}\cdot\mechanical{\mathbf r}}{\mechanical{r}^3}
+\frac12\sum_{i,j}\electric{Q}_{ij}\frac{\mechanical{x}_i\mechanical{x}_j}{\mechanical{r}^5}
+\cdots
\right].
$$

The quadrupole denominator is $\mechanical{r}^5$, giving a term of order $1/\mechanical{r}^3$. For the cosine boundary,

$$
\electric{\phi}_{\mathrm{out}}=\electric{V}_0\mechanical{R}^2\frac{\mechanical{z}}{\mechanical{r}^3},
\qquad
\electric{p}_z=4\pi\electric{\varepsilon}_0\electric{V}_0\mechanical{R}^2.
$$

For the opposite hemispheres, the sign of the boundary potential is set by the sign of $\mechanical{z}$ on the sphere, equivalently the sign of $\cos\theta$.

![[Kyle Kabasares - Electrodynamics - Split sphere with coordinate axes.png|**Fig. 66** Split sphere of radius $\mechanical{R}$ with the equatorial plane separating the two potentials.]]

Write the boundary value as $\electric{V}(\theta,\varphi)=\electric{V}_0\operatorname{sgn}(\cos\theta)$. Decay at infinity selects the exterior radial functions, so projection at $\mechanical{r}=\mechanical{R}$ gives

$$
\frac{B_{\ell m}}{\mechanical{R}^{\ell+1}}
=\int Y_{\ell m}^*(\theta',\varphi')\electric{V}(\theta',\varphi')\,d\Omega'.
$$

The first terms in the exterior expansion are

$$
\electric{\phi}_{\mathrm{out}}=\frac{B_{00}}{\mechanical{r}}Y_{00}
+\frac{B_{10}Y_{10}+B_{1,-1}Y_{1,-1}+B_{11}Y_{11}}{\mechanical{r}^2}
+\cdots.
$$

Matching the monopole gives

$$
\electric{q}=\frac{4\pi\electric{\varepsilon}_0 B_{00}}{\sqrt{4\pi}}
=\frac{4\pi\electric{\varepsilon}_0\mechanical{R}}{\sqrt{4\pi}}
\int Y_{00}^*(\theta',\varphi')\electric{V}(\theta',\varphi')\,d\Omega'.
$$

Similarly, the axial dipole satisfies

$$
\frac{\electric{p}_z\mechanical{z}}{4\pi\electric{\varepsilon}_0\mechanical{r}^3}
=\frac{B_{10}}{\mechanical{r}^2}Y_{10}.
$$

### PDF page 45

#### Discussion review · February 2, 2018

Two concentric spherical surfaces at radii $\mechanical{a}$ and $\mechanical{b}$ have boundary potentials $\electric{V}_0\sin\theta$ and $\electric{V}_0\sin(2\theta)$. A truncated spherical-harmonic series can approximate the potential when computing the full series is impractical.

![[Kyle Kabasares - Electrodynamics - Concentric spherical boundaries.png|**Fig. 67** The inner and outer spheres have different angular boundary potentials.]]

In each of the three charge-free regions, use the radial solutions of Laplace's equation. Include the monopole when projecting the boundary data.

$$
\electric{\phi}=
\begin{cases}
\displaystyle\sum_{\ell,m}A_{\ell m}\mechanical{r}^{\ell}Y_{\ell m},
&\mechanical{r}<\mechanical{a},\\
\displaystyle\sum_{\ell,m}\left(B_{\ell m}\mechanical{r}^{\ell}
+\frac{C_{\ell m}}{\mechanical{r}^{\ell+1}}\right)Y_{\ell m},
&\mechanical{a}<\mechanical{r}<\mechanical{b},\\
\displaystyle\sum_{\ell,m}\frac{D_{\ell m}}{\mechanical{r}^{\ell+1}}Y_{\ell m},
&\mechanical{r}>\mechanical{b}.
\end{cases}
$$

Match the value of the potential on each side of each surface and project onto the harmonics.

$$
\begin{aligned}
A_{\ell m}\mechanical{a}^{\ell}
&=\int\electric{V}_0\sin\theta\,Y_{\ell m}^*\,d\Omega,\\
B_{\ell m}\mechanical{a}^{\ell}+\frac{C_{\ell m}}{\mechanical{a}^{\ell+1}}
&=\int\electric{V}_0\sin\theta\,Y_{\ell m}^*\,d\Omega,\\
B_{\ell m}\mechanical{b}^{\ell}+\frac{C_{\ell m}}{\mechanical{b}^{\ell+1}}
&=\int\electric{V}_0\sin(2\theta)\,Y_{\ell m}^*\,d\Omega,\\
\frac{D_{\ell m}}{\mechanical{b}^{\ell+1}}
&=\int\electric{V}_0\sin(2\theta)\,Y_{\ell m}^*\,d\Omega.
\end{aligned}
$$

One can also write the boundary data themselves as harmonic series, for example $\electric{V}_0\sin\theta=\sum_{\ell,m}c_{\ell m}Y_{\ell m}$. The surface charge density at $\mechanical{b}$ follows from the jump in the outward radial field.

$$
\begin{aligned}
\electric{\sigma}\big|_{\mechanical{r}=\mechanical{b}}
&=-\electric{\varepsilon}_0\left.\frac{\partial\electric{\phi}}{\partial\mechanical{r}}\right|_{\mechanical{b}^+}
+\electric{\varepsilon}_0\left.\frac{\partial\electric{\phi}}{\partial\mechanical{r}}\right|_{\mechanical{b}^-}\\
&=\electric{\varepsilon}_0\sum_{\ell,m}
\left[
\ell B_{\ell m}\mechanical{b}^{\ell-1}
+\frac{(\ell+1)(D_{\ell m}-C_{\ell m})}{\mechanical{b}^{\ell+2}}
\right]Y_{\ell m}.
\end{aligned}
$$

### PDF page 46

#### Total charge and charge on the inner sphere

Match the exterior monopole term to the potential of the total charge. Using $Y_{00}=1/\sqrt{4\pi}$,

$$
\begin{aligned}
\electric{q}_{\mathrm{tot}}
&=4\pi\electric{\varepsilon}_0 D_{00}Y_{00}\\
&=\frac{4\pi\electric{\varepsilon}_0\mechanical{b}}{\sqrt{4\pi}}
\int\electric{V}_0\sin(2\theta)Y_{00}^*\,d\Omega\\
&=2\pi\electric{\varepsilon}_0\mechanical{b}\electric{V}_0
\left[\frac{2\sin^3\theta}{3}\right]_0^\pi=0.
\end{aligned}
$$

A Gaussian surface between the two spheres instead measures the charge $\electric{Q}_{\mathrm{in}}$ on the inner sphere.

![[Kyle Kabasares - Electrodynamics - Gaussian surface between concentric spheres.png|**Fig. 68** The dashed Gaussian surface encloses the inner sphere.]]

$$
\frac{\electric{Q}_{\mathrm{in}}}{\electric{\varepsilon}_0}
=\int\electric{\mathbf E}\cdot\hat{\mathbf n}\,dA
=\int \electric{E}_r\mechanical{r}^2\,d\Omega.
$$

In the region $\mechanical{a}<\mechanical{r}<\mechanical{b}$, differentiating the potential gives

$$
\electric{E}_r=-\frac{\partial\electric{\phi}}{\partial\mechanical{r}}
=\sum_{\ell,m}
\left[-\ell B_{\ell m}\mechanical{r}^{\ell-1}
+\frac{(\ell+1)C_{\ell m}}{\mechanical{r}^{\ell+2}}\right]Y_{\ell m}.
$$

The angular integral selects the monopole.

$$
\int Y_{\ell m}\,d\Omega=\sqrt{4\pi}\int Y_{\ell m}Y_{00}^*\,d\Omega
=\sqrt{4\pi}\,\delta_{\ell0}\delta_{m0}.
$$

The derivative of the constant $B_{00}$ term vanishes. Thus

$$
\electric{Q}_{\mathrm{in}}=\electric{\varepsilon}_0 C_{00}\sqrt{4\pi}.
$$

> [!note]
> The handwritten final line has a factor of $-2$. The monopole term in the potential is $C_{00}Y_{00}/\mechanical{r}$, so the outward radial field is $+C_{00}Y_{00}/\mechanical{r}^2$.

### PDF page 47

#### Electrostatics in materials · February 6, 2018

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

### PDF page 48

#### Linear dielectrics and tangential boundary conditions

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

### PDF page 49

#### Normal boundary conditions

Integrate $\nabla\cdot\electric{\mathbf D}=\electric{\rho}$ over a thin pillbox crossing the interface. With no free surface charge, the enclosed free charge tends to zero and the two normal fluxes cancel. Thus $\electric{D}_{2,\perp}=\electric{D}_{1,\perp}$.

![[Kyle Kabasares - Electrodynamics - Gaussian pillbox at a dielectric interface.png|**Fig. 73** The outward normals of the two pillbox faces point in opposite directions.]]

Bound surface charge can still produce a jump in the electric field. For $\hat{\mathbf n}$ directed from medium 1 to medium 2, Gauss's law for the electric field gives

$$
(\electric{\mathbf E}_2-\electric{\mathbf E}_1)\cdot\hat{\mathbf n}
=\frac{\electric{\sigma}}{\electric{\varepsilon}_0},
$$

where $\electric{\sigma}$ is the total surface charge density.

#### A point charge in a dielectric shell

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

#### A dielectric sphere inside a prescribed boundary

A dielectric sphere of radius $\mechanical{a}$ and permittivity $\electric{\varepsilon}$ sits inside a concentric spherical boundary at $\mechanical{b}$. Find the potential everywhere with $\electric{\phi}(\mechanical{b},\theta)=\electric{V}_0\cos\theta\propto Y_{10}$. The field is $\electric{\mathbf E}=-\nabla\electric{\phi}$.

![[Kyle Kabasares - Electrodynamics - Dielectric sphere within a prescribed outer boundary.png|**Fig. 75** Dielectric interior and a concentric outer surface with a cosine boundary potential.]]

### PDF page 50

#### Matching the fields at the dielectric sphere

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

### PDF page 51

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

#### A dielectric sphere in a uniform applied field

Apply $\electric{\mathbf E}=-\electric{E}_0\hat{\mathbf z}$ far from the sphere. This is equivalent to requiring $\electric{\phi}\sim\electric{E}_0\mechanical{z}=\electric{E}_0\mechanical{r}\cos\theta$ as $\mechanical{r}\to\infty$.

![[Kyle Kabasares - Electrodynamics - Dielectric sphere in an applied field.png|**Fig. 77** Field lines distort near the dielectric sphere and approach a uniform field far away.]]

The potential again has only the $Y_{10}$ mode, with the same radial forms inside and outside. Replace the condition at $\mechanical{b}$ by $A_{10}Y_{10}=\electric{E}_0\cos\theta$. At $\mechanical{a}$, continuity of the potential and of the normal displacement gives the same two matching equations above.

### PDF page 52

The first three multipole orders are $\ell=0,1,2$.

#### Magnetostatics · February 8, 2018

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

### PDF page 53

#### Integral solution for steady currents

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

#### Circular current loop

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

### PDF page 54

The $\mechanical{y}$ component of the vector potential has the same cylindrical-coordinate integral as $\magnetic{A}_x$, with $\cos\varphi'$ in place of $-\sin\varphi'$.

#### The current loop in spherical coordinates

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

### PDF page 55

#### Magnetic multipole expansion

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

### PDF page 56

#### Field and vector potential of a straight wire

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

#### Forces and energies in electrostatics

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

### PDF page 57

#### Magnetostatics in materials · February 13, 2018

In vacuum, $\nabla\cdot\magnetic{\mathbf B}=0$ and $\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}_0\circuit{\mathbf J}$. Write $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$, with gauge freedom $\magnetic{\mathbf A}'=\magnetic{\mathbf A}+\nabla\chi$. In the gauge $\nabla\cdot\magnetic{\mathbf A}=0$, solve $\nabla^2\magnetic{\mathbf A}=-\magnetic{\mu}_0\circuit{\mathbf J}$ with the free-space integral from page 53.

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

### PDF page 58

#### Hysteresis and two simple material models

The magnetic response can depend on how the field was reached. The notes sketch a hysteresis loop and indicate rate dependence schematically as $\magnetic{\mathbf H}=f(\magnetic{\mathbf B},\partial\magnetic{\mathbf B}/\partial t)$.

![[Kyle Kabasares - Electrodynamics - Magnetic hysteresis loop.png|**Fig. 86** The field traces different branches when swept in opposite directions.]]

The lecture considers two simpler cases.

- A hard magnet has its own magnetization, $\magnetic{\mathbf M}\ne0$ even at zero applied field. The notes represent the zero-field term by $\magnetic{\mathbf H}_0$.
- A linear isotropic medium obeys $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$, analogous to the linear electrostatic constitutive relation.

#### Bound currents in a hard magnet

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

### PDF page 59

#### Magnetic scalar potential for a hard magnet

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

The vector-potential approach uses the bound-current integral from page 58, followed by $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$ and $\magnetic{\mathbf H}=(\nabla\times\magnetic{\mathbf A})/\magnetic{\mu}_0-\magnetic{\mathbf M}$. In the scalar approach the factor $\magnetic{\mu}_0$ multiplies both $-\nabla\magnetic{\phi}_{\mathrm m}$ and $\magnetic{\mathbf M}$ in the expression for $\magnetic{\mathbf B}$.

#### Midterm review

- Study Jackson chapters 0 through §4.2 in detail, leaving out the cylindrical material.
- Review Green's functions for planes and spheres.
- Also review §§4.3, 4.4, and 4.7, with less emphasis on the energy material.
- The main emphasis is multipoles.

### PDF page 60

#### Electrostatics review

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

#### Approximate solutions

- Truncate a separated series, for example terms of the form $\sin(\alpha\mechanical{x})e^{\gamma\mechanical{z}}$ or $R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\varphi)$.
- At large radius, keep the lowest orders in the inverse-radius multipole series.

An exact free-space solution can be expanded to extract its large-radius behavior. In the SI convention used on page 36,

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

### PDF page 61

Even without a closed form for the potential, one can compute the multipole coefficients directly from boundary data. For example, match $\sum_{\ell,m}B_{\ell m}Y_{\ell m}/\mechanical{r}^{\ell+1}$ to $\electric{V}_0\sin\theta$ at $\mechanical{r}=\mechanical{R}$.

![[Kyle Kabasares - Electrodynamics - Sphere with sine boundary potential.png|**Fig. 89** Sphere with prescribed boundary potential $\electric{V}_0\sin\theta$.]]

#### Energy of two separated charge distributions

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

### PDF page 62

Write $\mechanical{\mathbf x}_2=\mechanical{\mathbf r}+\mechanical{\mathbf y}_2$, where $\mechanical{\mathbf r}$ joins the centers and $\lvert\mechanical{\mathbf y}_2\rvert\ll\mechanical{r}$. With the first distribution also small compared with the separation,

$$
\frac{1}{\lvert\mechanical{\mathbf x}_1-\mechanical{\mathbf x}_2\rvert}
=\frac{1}{\lvert\mechanical{\mathbf r}+(\mechanical{\mathbf y}_2-\mechanical{\mathbf x}_1)\rvert}
=\frac{1}{\mechanical{r}}
-\frac{(\mechanical{\mathbf y}_2-\mechanical{\mathbf x}_1)\cdot\mechanical{\mathbf r}}{\mechanical{r}^3}
+\cdots.
$$

#### Magnetostatics review · February 20, 2018

A note at the top of the lecture says that being around the average is fine.

In the Coulomb gauge, $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$ and $\nabla^2\magnetic{\mathbf A}=-\magnetic{\mu}_0\circuit{\mathbf J}$, with solution

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x})
=\frac{\magnetic{\mu}_0}{4\pi}\int\frac{\circuit{\mathbf J}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'.
$$

In a material, $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}_0-\magnetic{\mathbf M}$. The response may be complicated, so the lecture takes two special cases.

- A permanent magnet has prescribed $\magnetic{\mathbf M}=\magnetic{\mathbf M}_0$ independent of $\magnetic{\mathbf B}$.
- In a linear isotropic medium, $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$ and $\magnetic{\mathbf M}$ is also linear in $\magnetic{\mathbf B}$. The handwritten review uses $\magnetic{\mu}_0$ here. The material permeability $\magnetic{\mu}$ follows the definition on page 58.

For the permanent magnet, use $\circuit{\mathbf J}_{\mathrm b}=\nabla\times\magnetic{\mathbf M}$ in the vector-potential integral.

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x})
=\frac{\magnetic{\mu}_0}{4\pi}\int\frac{\nabla'\times\magnetic{\mathbf M}(\mechanical{\mathbf x}')}{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,d^3\mechanical{x}'.
$$

With bound currents alone, $\nabla\times\magnetic{\mathbf H}=0$ and $\nabla\cdot\magnetic{\mathbf B}=0$.

### PDF page 63

#### Magnetic scalar potential at an interface

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

#### Infinitely long magnetized cylinder

Let a cylinder extending along $\mechanical{z}$ have uniform axial magnetization $\magnetic{\mathbf M}_0$.

![[Kyle Kabasares - Electrodynamics - Infinitely long axially magnetized cylinder.png|**Fig. 93** The magnetization runs parallel to the axis of the infinitely long cylinder.]]

The interior divergence is zero, and $\hat{\mathbf n}\cdot\magnetic{\mathbf M}_0=0$ on the cylindrical side. Both terms in $\magnetic{\phi}_{\mathrm m}$ vanish. Thus $\magnetic{\mathbf H}=0$, $\magnetic{\mathbf B}_{\mathrm{in}}=\magnetic{\mu}_0\magnetic{\mathbf M}_0$, and $\magnetic{\mathbf B}_{\mathrm{out}}=0$.

### PDF page 64

#### Transversely magnetized cylinder

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

#### Uniformly magnetized sphere

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

### PDF page 65

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

#### Sphere with radially varying magnetization

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

### PDF page 66

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

#### Linear magnetic media

In a linear material, use $\nabla\times\magnetic{\mathbf H}=\circuit{\mathbf J}$, $\nabla\cdot\magnetic{\mathbf B}=0$, and $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$. In a region of constant permeability these give the vacuum magnetostatic equations with $\magnetic{\mu}$ in place of $\magnetic{\mu}_0$.

$$
\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}\circuit{\mathbf J},
\qquad
\nabla\cdot\magnetic{\mathbf B}=0.
$$

The constitutive relation changes at an interface between media.

![[Kyle Kabasares - Electrodynamics - Interface between two magnetic permeabilities.png|**Fig. 97** Interface separating media with permeabilities $\magnetic{\mu}_1$ and $\magnetic{\mu}_2$.]]

### PDF page 67

At a magnetic interface with no free surface current, $\magnetic{\mathbf H}_{\parallel}$ is continuous. The absence of magnetic monopoles gives continuity of $\magnetic{B}_{\perp}$.

#### A current on the axis of a cylindrical shell

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

#### Magnetostatics in media · February 22, 2018

Consider a linear medium with $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$, for example a sphere placed in an applied magnetic field. The vector potential is available, but the scalar formulation makes the connection to electrostatics more direct.

![[Kyle Kabasares - Electrodynamics - Sphere in a uniform magnetic field.png|**Fig. 99** Sphere of permeability $\magnetic{\mu}$ in an applied field.]]

### PDF page 68

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

### PDF page 69

Match the uniform field at infinity and require regularity at the origin.

$$
C\mechanical{r}Y_{10}=-\frac{\magnetic{B}_0}{\magnetic{\mu}_0}\mechanical{r}\cos\theta,
\qquad B=0.
$$

The continuity of $\magnetic{B}_{\perp}$ at $\mechanical{R}$ gives

$$
\magnetic{\mu}_0\left(C-\frac{2D}{\mechanical{R}^3}\right)
=\magnetic{\mu}\left(A-\frac{2B}{\mechanical{R}^3}\right).
$$

Solving these conditions with the tangential condition on page 68 gives a uniform induced magnetization. In the result, $\magnetic{\mathbf B}_0$ denotes the applied field far from the sphere.

$$
\magnetic{\mathbf M}
=\frac{3}{\magnetic{\mu}_0}\frac{\magnetic{\mu}-\magnetic{\mu}_0}{\magnetic{\mu}+2\magnetic{\mu}_0}\,\magnetic{\mathbf B}_0.
$$

This is the lecture's main magnetostatic boundary-value example.

#### Electrodynamics and Maxwell's equations

The notes mention that midterm solutions were posted. The lecture then introduces time-dependent fields. In vacuum, the differential equations are

$$
\begin{aligned}
\nabla\cdot\electric{\mathbf E}&=\frac{\electric{\rho}}{\electric{\varepsilon}_0},&
\nabla\times\electric{\mathbf E}&=-\frac{\partial\magnetic{\mathbf B}}{\partial t},\\
\nabla\cdot\magnetic{\mathbf B}&=0,&
\nabla\times\magnetic{\mathbf B}&=\magnetic{\mu}_0
\left(\circuit{\mathbf J}+\electric{\varepsilon}_0\frac{\partial\electric{\mathbf E}}{\partial t}\right).
\end{aligned}
$$

Their integral forms use a closed surface $S$ for the flux laws and a contour $C$ for the circulation laws. The fluxes $\magnetic{\Phi}_{\mathrm B}$ and $\electric{\Phi}_{\mathrm E}$ for the circulation laws are taken through a surface spanning $C$.

$$
\begin{aligned}
\oint_S\electric{\mathbf E}\cdot\hat{\mathbf n}\,dA&=\frac{\electric{Q}_{\mathrm{enc}}}{\electric{\varepsilon}_0},&
\oint_C\electric{\mathbf E}\cdot d\mechanical{\mathbf l}&=-\frac{d\magnetic{\Phi}_{\mathrm B}}{dt},\\
\oint_S\magnetic{\mathbf B}\cdot\hat{\mathbf n}\,dA&=0,&
\oint_C\magnetic{\mathbf B}\cdot d\mechanical{\mathbf l}&=\magnetic{\mu}_0
\left(\circuit{I}_{\mathrm{enc}}+\electric{\varepsilon}_0\frac{d\electric{\Phi}_{\mathrm E}}{dt}\right).
\end{aligned}
$$

### PDF page 70

#### Electromagnetic potentials and gauge transformations

The lecture uses differential equations for time-dependent problems, where there is often too little symmetry to solve directly from the integral forms. Start from $\nabla\cdot\magnetic{\mathbf B}=0$ and write $\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}$. Faraday's law then gives $\nabla\times(\electric{\mathbf E}+\partial_t\magnetic{\mathbf A})=0$. Introducing a scalar potential yields

$$
\electric{\mathbf E}=-\nabla\electric{\phi}-\frac{\partial\magnetic{\mathbf A}}{\partial t},
\qquad
\magnetic{\mathbf B}=\nabla\times\magnetic{\mathbf A}.
$$

A gradient added to $\magnetic{\mathbf A}$ has zero curl. Compensate its contribution to the electric field by shifting the scalar potential as well.

$$
\magnetic{\mathbf A}\longmapsto\magnetic{\mathbf A}+\nabla\chi,
\qquad
\electric{\phi}\longmapsto\electric{\phi}-\frac{\partial\chi}{\partial t}.
$$

This gauge transformation yields the same electric and magnetic fields. Substitution into Gauss's law and the Ampère–Maxwell law gives

$$
\begin{aligned}
\nabla\cdot\left(-\nabla\electric{\phi}-\frac{\partial\magnetic{\mathbf A}}{\partial t}\right)
&=\frac{\electric{\rho}}{\electric{\varepsilon}_0},\\
\nabla\times(\nabla\times\magnetic{\mathbf A})
&=\magnetic{\mu}_0\left[
\circuit{\mathbf J}+\electric{\varepsilon}_0\frac{\partial}{\partial t}
\left(-\nabla\electric{\phi}-\frac{\partial\magnetic{\mathbf A}}{\partial t}\right)\right].
\end{aligned}
$$

A gauge condition is needed to select potentials from the equivalent choices.

### PDF page 71

#### Lorenz gauge and the wave operator

The Coulomb gauge would impose $\nabla\cdot\magnetic{\mathbf A}=0$. For time-dependent fields the lecture chooses the **Lorenz gauge**.

$$
\nabla\cdot\magnetic{\mathbf A}
+\magnetic{\mu}_0\electric{\varepsilon}_0\frac{\partial\electric{\phi}}{\partial t}=0.
$$

Gauss's law gives $-\nabla^2\electric{\phi}-\partial_t(\nabla\cdot\magnetic{\mathbf A})=\electric{\rho}/\electric{\varepsilon}_0$. Use the gauge condition to eliminate the divergence. In the Ampère–Maxwell law, the same condition cancels the terms involving the gradient of $\partial_t\electric{\phi}$. Define the d'Alembertian with the sign convention

$$
\Box=\magnetic{\mu}_0\electric{\varepsilon}_0\frac{\partial^2}{\partial t^2}-\nabla^2.
$$

The equations for the two potentials now separate.

$$
\Box\electric{\phi}=\frac{\electric{\rho}}{\electric{\varepsilon}_0},
\qquad
\Box\magnetic{\mathbf A}=\magnetic{\mu}_0\circuit{\mathbf J}.
$$

Together with the Lorenz condition and the field definitions on page 70, these recover the four Maxwell equations. The handwritten page proposes solving first for a Green's function with the normalization

$$
\Box G(x,x')=-4\pi\delta^{(4)}(x-x')
=-4\pi\delta(x^0-x'^0)\delta^{(3)}(\mechanical{\mathbf x}-\mechanical{\mathbf x}').
$$

The overall sign of this Green's function is tied to the source normalization. The sign used in the subsequent retarded solution is tracked separately.

### PDF page 72

#### Retarded Green's function

The time coordinate can be scaled in different ways. Formally setting $t=-i\tau$ changes the time-derivative term in $\Box$ to $-\magnetic{\mu}_0\electric{\varepsilon}_0\partial_\tau^2$. The page considers and rejects a direct inverse-distance guess from the spatial Poisson problem. The time-dependent Green's function must satisfy a causal condition. In space the potentials of a localized source are required to decay far away. In time the effect must follow its cause, so the retarded kernel vanishes for $t<t'$ and in particular as $t\to-\infty$.

Use the Fourier transform in time. With $\Box=c^{-2}\partial_t^2-\nabla^2$ and $x^0=t$, write

$$
G(\mechanical{\mathbf x},t;\mechanical{\mathbf x}',t')
=\int_{-\infty}^{\infty}\frac{d\omega}{2\pi}
e^{-i\omega(t-t')}g_\omega(\mechanical{\mathbf x},\mechanical{\mathbf x}'),
\qquad
c^{-2}=\magnetic{\mu}_0\electric{\varepsilon}_0.
$$

Using the positive source normalization $\Box G=4\pi\delta(t-t')\delta^{(3)}(\mechanical{\mathbf x}-\mechanical{\mathbf x}')$, the Fourier coefficient satisfies

$$
\left(-\nabla^2-\frac{\omega^2}{c^2}\right)g_\omega
=4\pi\delta^{(3)}(\mechanical{\mathbf x}-\mechanical{\mathbf x}').
$$

Here $\partial_t^2$ contributes $-\omega^2$. The positive source normalization makes the outgoing spatial kernel $e^{i\omega s/c}/s$, where $s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert$. Invert the transform to recover the retarded Green's function (Jackson, Eq. 6.44).

$$
G_{\mathrm{ret}}(\mechanical{\mathbf x},t;\mechanical{\mathbf x}',t')
=\frac{\delta(t-t'-s/c)}{s}.
$$

With the negative source normalization written on page 71, the corresponding Green's function is $-G_{\mathrm{ret}}$. The retarded response at a fixed observation point is supported at the specific arrival time $t=t'+s/c$.

![[Kyle Kabasares - Electrodynamics - Spacetime sketch of retarded propagation.png|**Fig. 100** At the observation point, the retarded response vanishes before the signal arrives.]]

### PDF page 73

#### Retarded potentials · February 27, 2018

The review lists Maxwell's equations and the field definitions from pages 69–70. The Lorenz gauge $\nabla\cdot\magnetic{\mathbf A}+c^{-2}\partial_t\electric{\phi}=0$ reduces the source equations to two wave equations, $\Box\electric{\phi}=\electric{\rho}/\electric{\varepsilon}_0$ and $\Box\magnetic{\mathbf A}=\magnetic{\mu}_0\circuit{\mathbf J}$, where $c^2=1/(\magnetic{\mu}_0\electric{\varepsilon}_0)$.

The retarded vector potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
=\frac{\magnetic{\mu}_0}{4\pi}
\int\frac{\delta(t-t'-s/c)\circuit{\mathbf J}(\mechanical{\mathbf x}',t')}{s}\,d^3\mechanical{x}'\,dt',
\qquad s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert.
$$

The scalar potential has the same integral with $\electric{\rho}$ as source and $1/(4\pi\electric{\varepsilon}_0)$ as the prefactor.

![[Kyle Kabasares - Electrodynamics - Light cone reaching a stationary observer.png|**Fig. 101** The light cone of the emission event intersects the stationary observer's world line at the observation time.]]

The diagram relates the observation time to the source time by $t=t'+s/c$.

#### Point source at the origin

The example asks for $\electric{\phi}(\mechanical{\mathbf x},t)$ for a point source of strength $\electric{Q}(t)$ at the origin and an observer at $(\mechanical{\mathbf x},t)$.

![[Kyle Kabasares - Electrodynamics - Source and observer world lines.png|**Fig. 102** The dashed line connects the source event at the origin with the later observation event.]]

### PDF page 74

The observer at radius $\mechanical{r}=\lvert\mechanical{\mathbf x}\rvert$ samples the point source at $t'=t-\mechanical{r}/c$. Its scalar potential is

$$
\electric{\phi}(\mechanical{\mathbf x},t)
=\frac{\electric{Q}(t-\mechanical{r}/c)}{4\pi\electric{\varepsilon}_0\mechanical{r}}.
$$

This is a scalar wave-equation example. A time-varying point charge in Maxwell's equations would need a current consistent with charge continuity.

For a dipole $\electric{\mathbf p}=\electric{p}_z(t)\hat{\mathbf z}$ at the origin, the handwritten expression evaluates the static dipole term at the same retarded time.

$$
\electric{\phi}_{\mathrm{near}}(\mechanical{\mathbf x},t)
=\frac{\electric{p}_z(t-\mechanical{r}/c)\mechanical{z}}
{4\pi\electric{\varepsilon}_0\mechanical{r}^3}.
$$

This term captures the quasistatic part. The full retarded scalar potential of an ideal point dipole also has a term $\dot{\electric{p}}_z(t-\mechanical{r}/c)\cos\theta/(4\pi\electric{\varepsilon}_0 c\mechanical{r})$. For an extended source, different source points contribute at different retarded times.

#### Infinite wire with a switched current

Find the vector potential of an infinite wire whose current is spatially uniform at each time and switches on at $t=0$.

![[Kyle Kabasares - Electrodynamics - Current switched on along an infinite wire.png|**Fig. 103** Positive current direction along the wire.]]

$$
\circuit{I}(t)=
\begin{cases}
0,&t<0,\\
\circuit{I}_0,&t>0.
\end{cases}
$$

An observer is a distance $\mechanical{a}$ from the wire. At $t=0$, the entire retarded current is still zero, so $\magnetic{\mathbf A}=0$.

![[Kyle Kabasares - Electrodynamics - Observer at fixed distance from a wire.png|**Fig. 104** The observer lies a perpendicular distance $\mechanical{a}$ from the wire.]]

At $t=\mechanical{a}/c$ the signal arrives from the nearest point. Signals from more distant parts arrive later, so the retarded current sampled by the observer is spatially nonuniform.

![[Kyle Kabasares - Electrodynamics - Retarded current first visible at the nearest point.png|**Fig. 105** The nearest point reaches the switch-on time before the rest of the wire.]]

### PDF page 75

For $t>\mechanical{a}/c$, the observer samples the switched current over a wire segment of length $2L(t)$, where $L(t)=\sqrt{c^2t^2-\mechanical{a}^2}$.

![[Kyle Kabasares - Electrodynamics - Wire segment inside the observer light cone.png|**Fig. 106** The two ends of the contributing segment are a distance $ct$ from the observer.]]

With the wire along $\hat{\mathbf z}$, the step-current potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
=\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}\hat{\mathbf z}
\int_{-L(t)}^{L(t)}\frac{d\mechanical{z}'}{\sqrt{(\mechanical{z}')^2+\mechanical{a}^2}}.
$$

#### Infinite wire with a linearly increasing current

Now let the current grow linearly after switch-on. The handwritten $\circuit{I}_0$ in this example is a slope with units of current per time.

$$
\circuit{\mathbf J}(\mechanical{\mathbf x},t)
=\begin{cases}
0,&t<0,\\
\circuit{I}_0 t\,\delta(\mechanical{x})\delta(\mechanical{y})\hat{\mathbf z},&t>0.
\end{cases}
$$

Take the observer at $\mechanical{\mathbf x}=(0,\mechanical{a},0)$ and a source point on the wire at $\mechanical{\mathbf x}'=(0,0,\mechanical{z}')$. Their distance is $s=\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}$.

![[Kyle Kabasares - Electrodynamics - Distances from wire to observer.png|**Fig. 107** The observer's distance from each source point follows from the perpendicular offset and the source's axial coordinate.]]

Insert the current density in the retarded vector-potential formula. Integrating the two transverse deltas gives

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
=\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}\hat{\mathbf z}
\int_{-\infty}^{\infty}d\mechanical{z}'\int_0^\infty dt'\,
\frac{t'\,\delta(t-t'-s/c)}{s}.
$$

The time integral selects the zero of the delta argument, $t'=t-s/c$.

### PDF page 76

The retarded time is positive when $\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}<ct$.

![[Kyle Kabasares - Electrodynamics - Wire source coordinate and path length.png|**Fig. 108** The signal travels the hypotenuse from the source point on the wire to the observer.]]

For $t>\mechanical{a}/c$, the ramp-current result is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)=
\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}\hat{\mathbf z}
\int_{-\sqrt{c^2t^2-\mechanical{a}^2}}^{\sqrt{c^2t^2-\mechanical{a}^2}}
\frac{t-\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}/c}{\sqrt{\mechanical{a}^2+(\mechanical{z}')^2}}
\,d\mechanical{z}'.
$$

The handwritten limits have $+\mechanical{a}^2$ under the radical. Subtracting the perpendicular offset squared follows from the travel-time constraint and the step-current example.

#### Point charge moving at constant speed

Let a charge $\electric{q}$ move along $\mechanical{x}$ at speed $\mechanical{v}$, with $\mechanical{\mathbf v}=\mechanical{v}\hat{\mathbf x}$. Its sources are

$$
\electric{\rho}(\mechanical{\mathbf x},t)=
\electric{q}\delta(\mechanical{y})\delta(\mechanical{z})\delta(\mechanical{x}-\mechanical{v}t),
\qquad
\circuit{\mathbf J}(\mechanical{\mathbf x},t)=\mechanical{\mathbf v}\electric{\rho}(\mechanical{\mathbf x},t).
$$

Insert the density in the retarded potential. The transverse deltas set $\mechanical{y}'=\mechanical{z}'=0$, and the longitudinal delta sets $\mechanical{x}'=\mechanical{v}t'$. This leaves

$$
\electric{\phi}(\mechanical{\mathbf x},t)
=\frac{\electric{q}}{4\pi\electric{\varepsilon}_0}
\int_{-\infty}^{\infty}\frac{\delta(t-t'-s(t')/c)}{s(t')}\,dt',
\qquad
s(t')=\sqrt{(\mechanical{x}-\mechanical{v}t')^2+\mechanical{y}^2+\mechanical{z}^2}.
$$

The observer sees the charge at its retarded position $(\mechanical{v}t',0,0)$, where $t'+s(t')/c=t$.

![[Kyle Kabasares - Electrodynamics - Retarded position of a moving point charge.png|**Fig. 109** The light path joins the moving source at its retarded position to the observation point.]]

### PDF page 77

For the moving charge, square the travel-time equation to solve for $t'$.

$$
c^2(t-t')^2=(\mechanical{x}-\mechanical{v}t')^2+\mechanical{y}^2+\mechanical{z}^2.
$$

For subluminal motion, the physical root is the one satisfying the unsquared retarded condition. The source coordinate is $\mechanical{v}t'$, as in the preceding page. Evaluating the time integral gives the **Liénard–Wiechert potential** (Jackson, Eq. 14.8), which the notes flag for review.

#### Local conservation laws

For conserved quantities such as energy and momentum, a local conservation law relates the rate of change of the density in a finite volume to its outward flux. Schematically, it has the form $\partial_t(\text{density})+\nabla\cdot(\text{current})=0$.

The canonical example is charge continuity.

$$
\frac{\partial\electric{\rho}}{\partial t}+\nabla\cdot\circuit{\mathbf J}=0.
$$

Take the divergence of the Ampère–Maxwell law and use Gauss's law for the electric field.

$$
0=\frac{1}{\magnetic{\mu}_0}\nabla\cdot(\nabla\times\magnetic{\mathbf B})
=\nabla\cdot\circuit{\mathbf J}
+\electric{\varepsilon}_0\frac{\partial}{\partial t}(\nabla\cdot\electric{\mathbf E})
=\nabla\cdot\circuit{\mathbf J}+\frac{\partial\electric{\rho}}{\partial t}.
$$

Integrate over all space. With vanishing net current flux at infinity, the divergence integral is zero, and $d\electric{Q}/dt=d(\int\electric{\rho}\,d^3\mechanical{x})/dt=0$.

### PDF page 78

In the absence of sources, the electromagnetic energy density and energy current satisfy

$$
\frac{\partial\energy{u}}{\partial t}+\nabla\cdot\energy{\mathbf S}=0,
\qquad
\energy{u}=\frac{\electric{\varepsilon}_0}{2}\electric{E}^2+\frac{\magnetic{B}^2}{2\magnetic{\mu}_0},
\qquad
\energy{\mathbf S}=\frac{\electric{\mathbf E}\times\magnetic{\mathbf B}}{\magnetic{\mu}_0}.
$$

The energy current $\energy{\mathbf S}$ is the **Poynting vector**. The field also has momentum density $\mechanical{\mathbf g}=c^{-2}\electric{\mathbf E}\times\magnetic{\mathbf H}$. Its momentum transport is described by a tensor related to the Maxwell stress tensor $\mechanical{T}_{ij}$.

#### Conservation laws · March 1, 2018

Charge continuity pairs the charge density $\electric{\rho}$ with the current density $\circuit{\mathbf J}$. In a source-free region, energy continuity similarly pairs $\energy{u}$ with $\energy{\mathbf S}=\electric{\mathbf E}\times\magnetic{\mathbf H}$. The integral $\oint_S\energy{\mathbf S}\cdot\hat{\mathbf n}\,dA$ is the rate of energy flow out of the closed surface.

### PDF page 79

Integrating the source-free energy law over a fixed volume gives

$$
\frac{d}{dt}\int_V\energy{u}\,d^3\mechanical{x}
+\oint_S\energy{\mathbf S}\cdot\hat{\mathbf n}\,dA=0.
$$

For momentum, the conserved density is a vector, $\mechanical{\mathbf g}=c^{-2}\electric{\mathbf E}\times\magnetic{\mathbf H}$. The flux of its $i$th component is itself a vector, with $j$th component $\mechanical{T}_{ji}$. Using the momentum-flux sign convention of the page,

$$
\frac{\partial\mechanical{g}_i}{\partial t}
+\sum_j\frac{\partial\mechanical{T}_{ji}}{\partial\mechanical{x}_j}=0.
$$

For a closed field-and-particle system the conserved energy combines field energy integrated over all space and particle energy. There is a corresponding total momentum. The handwritten energy line lists $\int\energy{u}\,d^3\mechanical{x}+\sum_i\mechanical{m}_i\mechanical{v}_i^2/2+\sum_i\electric{q}_i\electric{\phi}_i$. When $\energy{u}$ includes the full electromagnetic field energy, the separate electrostatic interaction term would double count the energy already in the fields. The usual field-plus-kinetic-energy balance uses the first two terms, with self energies treated separately when using ideal point charges.

#### Electromagnetic waves

Chapter 7 starts with the homogeneous Maxwell equations in vacuum.

$$
\begin{aligned}
\nabla\cdot\electric{\mathbf E}&=0,&
\nabla\times\electric{\mathbf E}&=-\frac{\partial\magnetic{\mathbf B}}{\partial t},\\
\nabla\cdot\magnetic{\mathbf B}&=0,&
\nabla\times\magnetic{\mathbf B}&=\magnetic{\mu}_0\electric{\varepsilon}_0\frac{\partial\electric{\mathbf E}}{\partial t}.
\end{aligned}
$$

The solutions are waves. For harmonic time dependence, use $\electric{\mathbf E}(\mechanical{\mathbf x})e^{-i\omega t}$ and $\magnetic{\mathbf B}(\mechanical{\mathbf x})e^{-i\omega t}$.

### PDF page 80

#### Translation symmetry and plane waves

A homogeneous system is invariant under translations $\mechanical{\mathbf x}\mapsto\mechanical{\mathbf x}+\mechanical{\mathbf a}$. The notes recall Bloch's theorem as a related example for discrete translations. A plane wave $e^{ik\mechanical{x}}$ that is itself periodic with lattice spacing $\mechanical{a}$ has $k=2\pi n/\mechanical{a}$.

![[Kyle Kabasares - Electrodynamics - Lattice translation spacing.png|**Fig. 110** Consecutive lattice sites separated by $\mechanical{a}$.]]

Use plane waves with a common phase.

$$
\electric{\mathbf E}=\electric{\mathbf E}_0e^{i(\mathbf k\cdot\mechanical{\mathbf x}-\omega t)},
\qquad
\magnetic{\mathbf B}=\magnetic{\mathbf B}_0e^{i(\mathbf k\cdot\mechanical{\mathbf x}-\omega t)},
\qquad
\mathbf k=(k_x,k_y,k_z).
$$

Substituting into the four homogeneous equations gives

$$
\begin{aligned}
\mathbf k\cdot\electric{\mathbf E}_0&=0,&
\mathbf k\times\electric{\mathbf E}_0&=\omega\magnetic{\mathbf B}_0,\\
\mathbf k\cdot\magnetic{\mathbf B}_0&=0,&
\mathbf k\times\magnetic{\mathbf B}_0&=-\magnetic{\mu}_0\electric{\varepsilon}_0\omega\electric{\mathbf E}_0.
\end{aligned}
$$

Both fields are transverse. For example, take $\mathbf k=k_0\hat{\mathbf z}$, $\electric{\mathbf E}_0=\electric{E}_0\hat{\mathbf x}$, and $\magnetic{\mathbf B}_0=\magnetic{B}_0\hat{\mathbf y}$. Then $k_0\electric{E}_0=\omega\magnetic{B}_0$ and $k_0\magnetic{B}_0=\magnetic{\mu}_0\electric{\varepsilon}_0\omega\electric{E}_0$. The dispersion relation is

$$
\frac{\omega}{k}=\frac{1}{\sqrt{\magnetic{\mu}_0\electric{\varepsilon}_0}}=c.
$$

### PDF page 81

The wave vector determines $\omega=c\lvert\mathbf k\rvert$. There are two independent transverse polarization directions, and the electric-field amplitude must be specified. For a real plane wave, $\magnetic{B}=\electric{E}/c$, so the electric and magnetic contributions to the instantaneous energy density are equal.

$$
\energy{u}=\frac{\electric{\varepsilon}_0}{2}\electric{E}^2
+\frac{\magnetic{B}^2}{2\magnetic{\mu}_0}
=\electric{\varepsilon}_0\electric{E}^2.
$$

A complex amplitude includes the phase. For a fixed polarization, write the field component as $\lvert\electric{E}_0\rvert e^{i(k\mechanical{x}-\omega t+\alpha)}$. Euler's formula splits this into cosine and imaginary sine terms. The physical field is the real part. Squaring that real field introduces a factor of $\cos^2(k\mechanical{x}-\omega t+\alpha)$, whose cycle average is $1/2$. The resulting averages for peak complex amplitudes are

$$
\langle\energy{u}\rangle=\frac{\electric{\varepsilon}_0}{2}\lvert\electric{\mathbf E}_0\rvert^2,
\qquad
\langle\energy{\mathbf S}\rangle
=\frac12\sqrt{\frac{\electric{\varepsilon}_0}{\magnetic{\mu}_0}}\,
\lvert\electric{\mathbf E}_0\rvert^2\hat{\mathbf k}.
$$

#### Waves at a planar boundary

Place a planar interface normal to $\mechanical{z}$ between vacuum and a medium with $\electric{\varepsilon}$ and $\magnetic{\mu}$.

![[Kyle Kabasares - Electrodynamics - Planar boundary for electromagnetic waves.png|**Fig. 111** Vacuum and a linear medium separated by a plane of constant $\mechanical{z}$.]]

Translation symmetry parallel to the interface allows a common phase factor $e^{i(k_x\mechanical{x}+k_y\mechanical{y}-\omega t)}$ in both fields. The amplitudes $\electric{\mathbf E}_0(\mechanical{z})$ and $\magnetic{\mathbf B}_0(\mechanical{z})$ can vary along the normal. Solve on either side and match at the boundary.

### PDF page 82

Set $\psi=k_x\mechanical{x}+k_y\mechanical{y}-\omega t$. In vacuum on the left, the fields have incident and reflected parts.

$$
\begin{aligned}
\electric{\mathbf E}_{\mathrm L}
&=(\electric{\mathbf E}_0e^{ik_z\mechanical{z}}+\electric{\mathbf E}_0'e^{-ik_z\mechanical{z}})e^{i\psi},\\
\magnetic{\mathbf B}_{\mathrm L}
&=(\magnetic{\mathbf B}_0e^{ik_z\mechanical{z}}+\magnetic{\mathbf B}_0'e^{-ik_z\mechanical{z}})e^{i\psi},\\
\omega^2&=\frac{k_x^2+k_y^2+k_z^2}{\magnetic{\mu}_0\electric{\varepsilon}_0}.
\end{aligned}
$$

On the right, first allow both propagation directions with normal wave number $k_z'$.

$$
\begin{aligned}
\electric{\mathbf E}_{\mathrm R}
&=(\electric{\mathbf E}_0''e^{ik_z'\mechanical{z}}+\electric{\mathbf E}_0'''e^{-ik_z'\mechanical{z}})e^{i\psi},\\
\magnetic{\mathbf B}_{\mathrm R}
&=(\magnetic{\mathbf B}_0''e^{ik_z'\mechanical{z}}+\magnetic{\mathbf B}_0'''e^{-ik_z'\mechanical{z}})e^{i\psi},\\
\omega^2&=\frac{k_x^2+k_y^2+(k_z')^2}{\magnetic{\mu}\electric{\varepsilon}}.
\end{aligned}
$$

For each vacuum wave the amplitudes satisfy $\electric{E}_0=c\magnetic{B}_0$ and $\electric{E}_0'=c\magnetic{B}_0'$. At the interface without free surface charge or free surface current, match $\electric{\mathbf E}_{\parallel}$, $\electric{D}_{\perp}$, $\magnetic{\mathbf H}_{\parallel}$, and $\magnetic{B}_{\perp}$. The handwritten list interchanges the magnetic subscripts. The stated components follow the boundary conditions on pages 48–49 and 67.

For propagating waves on the right, impose the outgoing condition, leaving only the wave moving toward $+\mechanical{z}$. On the left there are waves in both directions, with the incoming amplitudes $\electric{\mathbf E}_0,\magnetic{\mathbf B}_0$ prescribed.

![[Kyle Kabasares - Electrodynamics - Outgoing wave to the right of an interface.png|**Fig. 112** Outgoing wave on the transmitted side.]]

### PDF page 83

The condition at $+\infty$ sets the left-moving amplitudes on the right to zero. There the electric and magnetic fields carry the phase $k_z'\mechanical{z}+\psi$. At $\mechanical{z}=0$ all three waves have the same phase. Equating tangential electric field and normal displacement gives

$$
\begin{aligned}
\electric{\mathbf E}_{0,\parallel}+\electric{\mathbf E}_{0,\parallel}'
&=\electric{\mathbf E}_{0,\parallel}'',\\
\electric{\varepsilon}_0(\electric{E}_{0,\perp}+\electric{E}_{0,\perp}')
&=\electric{\varepsilon}\electric{E}_{0,\perp}''.
\end{aligned}
$$

The transmitted displacement uses the material permittivity, as in the line above the boxed equation in the handwritten notes. Write analogous equations for $\magnetic{B}_{\perp}$ and $\magnetic{\mathbf H}_{\parallel}$.

![[Kyle Kabasares - Electrodynamics - Incident reflected and transmitted waves.png|**Fig. 113** Incident, reflected, and transmitted angles measured from the interface normal.]]

The reflected angle equals the incident angle, $\theta'=\theta$. Matching the tangential wave vector gives Snell's law, with subscripts specifying the two media.

$$
n_{\mathrm L}\sin\theta=n_{\mathrm R}\sin\theta'',
\qquad
\frac{n_{\mathrm R}}{n_{\mathrm L}}=\sqrt{\frac{\magnetic{\mu}\electric{\varepsilon}}{\magnetic{\mu}_0\electric{\varepsilon}_0}}.
$$

The handwritten ratios use opposite orderings for the index labels. Here $n_{\mathrm L}$ denotes the vacuum side and $n_{\mathrm R}$ the material side.

The lecture emphasizes uniform space and planar interfaces as tractable wave problems. The index $n$ can also be complex. With real $k$ and $\omega=ck/n$, an imaginary part of $\omega$ can give decay in time. With real driving frequency the attenuation appears instead in the spatial wave number. In a conducting medium, the oscillating charges absorb energy from the wave.

### PDF page 84

The final exam covers material through Chapter 7. The notes mark the course as nearly finished.

#### Homework review · March 2, 2018

**Problem 1.** For the magnetized block, $\nabla\cdot\magnetic{\mathbf M}=0$ in the volume. Only the surface term contributes to the magnetic scalar potential.

![[Kyle Kabasares - Electrodynamics - Uniformly magnetized block homework sketch.png|**Fig. 114** Magnetized block with a uniform interior magnetization.]]

$$
\magnetic{\phi}_{\mathrm m}(\mechanical{\mathbf x})
=\frac{1}{4\pi}\int_S
\frac{\magnetic{\mathbf M}(\mechanical{\mathbf x}')\cdot\hat{\mathbf n}'}
{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}\,dA'.
$$

**Problem 5-1.** For the rectangular current loop, start with the Biot–Savart or vector-potential integral. The line-current delta functions reduce the volume integral to an integral along the wire. A segment of length $\mechanical{L}$ can be parametrized from $-\mechanical{L}/2$ to $+\mechanical{L}/2$.

![[Kyle Kabasares - Electrodynamics - Rectangular current loop homework sketch.png|**Fig. 115** Directions of the current on the four sides of a rectangular loop.]]

**Problem 6-2.** For radial magnetization $\magnetic{\mathbf M}=\magnetic{M}_0\hat{\mathbf r}$ in a sphere, both the bound volume current $\nabla\times\magnetic{\mathbf M}$ and the surface current $\magnetic{\mathbf M}\times\hat{\mathbf n}$ vanish. The handwritten calculation combines the curl source with a surface dot product and gives $\magnetic{\mathbf H}=0$. The vanishing currents give $\magnetic{\mathbf A}=0$ in the free-space solution and hence $\magnetic{\mathbf B}=0$. Inside, $\magnetic{\mathbf H}=-\magnetic{\mathbf M}$ by the constitutive definition.

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

### PDF page 85

For the polarization example, the handwritten calculation uses $\mechanical{r}^2\cos\theta/\mechanical{R}^2$ as the radial profile and differentiates it directly. For a radial vector, the divergence also includes the spherical area factor. Writing the profile from page 84 as $\electric{P}_r=\electric{P}_0\mechanical{r}^2\cos\theta$ inside, one obtains

$$
\nabla\cdot\electric{\mathbf P}
=\frac{1}{\mechanical{r}^2}\frac{\partial}{\partial\mechanical{r}}\bigl(\mechanical{r}^2\electric{P}_r\bigr)
=4\electric{P}_0\mechanical{r}\cos\theta.
$$

For the profile normalized by $\mechanical{R}^2$, use $\electric{P}_0=1/\mechanical{R}^2$ times the polarization amplitude. In either case the angular source is proportional to $Y_{10}$. Expanding the Coulomb kernel leaves the factor $(4\pi/3)Y_{10}(\theta,\varphi)Y_{10}^*(\theta',\varphi')\mechanical{r}_{<}/\mechanical{r}_{>}^2$ after angular selection. The remaining volume integral has radial factor $(\mechanical{r}')^3\mechanical{r}_{<}/\mechanical{r}_{>}^2$.

![[Kyle Kabasares - Electrodynamics - Observation radius outside a polarized sphere.png|**Fig. 117** For an exterior observation point, every source radius is smaller than the observation radius.]]

For volume sources, $0<\mechanical{r}'<\mechanical{R}$. Outside, $\mechanical{r}_{>}=\mechanical{r}$ and $\mechanical{r}_{<}=\mechanical{r}'$ throughout. Inside, split the radial integral at $\mechanical{r}'=\mechanical{r}$. For $\mechanical{r}'<\mechanical{r}$ the source radius is smaller. For $\mechanical{r}'>\mechanical{r}$ it is larger. In the surface integral $\mechanical{r}'=\mechanical{R}$ is fixed, so $\mechanical{r}_{<}=\min(\mechanical{r},\mechanical{R})$ and $\mechanical{r}_{>}=\max(\mechanical{r},\mechanical{R})$.

#### Problem 6-3

The notes set aside the free-space dipole expression for $\magnetic{\mathbf A}$ and propose representing the central dipole by a delta-function magnetization.

![[Kyle Kabasares - Electrodynamics - Point magnetic dipole inside a sphere.png|**Fig. 118** Point magnetic dipole at the center of a sphere.]]

Take $\magnetic{\mathbf M}=\magnetic{\mathbf m}_0\delta^{(3)}(\mechanical{\mathbf x})$. This magnetization contributes to the volume term of $\magnetic{\phi}_{\mathrm m}$ through its divergence and has no contribution at the outer surface.

### PDF page 86

#### Spherical-harmonic solution for a central magnetic dipole

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

Near the origin, the interior solution must reproduce the dipole's $\cos\theta/\mechanical{r}^2$ behavior. In the convention of the scalar-potential integral on page 63, a prescribed delta-function magnetization alone gives

$$
\magnetic{\phi}_{\mathrm{dip}}
=\frac{\magnetic{\mathbf m}_0\cdot\mechanical{\mathbf x}}{4\pi\lvert\mechanical{\mathbf x}\rvert^3}
=\frac{\magnetic{m}_0\cos\theta}{4\pi\mechanical{r}^2}.
$$

The last handwritten expression leaves the normalization factor implicit.

### PDF page 87

#### Radiation · March 6, 2018

Chapter 9 begins with the retarded solution for time-dependent charge and current densities. With $s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert$,

$$
\begin{aligned}
\electric{\phi}(\mechanical{\mathbf x},t)
&=\frac{1}{4\pi\electric{\varepsilon}_0}\int
\frac{\electric{\rho}(\mechanical{\mathbf x}',t')\delta(t-t'-s/c)}{s}\,d^3\mechanical{x}'\,dt',\\
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
&=\frac{\magnetic{\mu}_0}{4\pi}\int
\frac{\circuit{\mathbf J}(\mechanical{\mathbf x}',t')\delta(t-t'-s/c)}{s}\,d^3\mechanical{x}'\,dt'.
\end{aligned}
$$

Far from a localized source, the amplitude factor approaches $1/\mechanical{r}$, where $\mechanical{r}=\lvert\mechanical{\mathbf x}\rvert$. The lecture makes a first approximation with $s\simeq\mechanical{r}$ also in the delay, giving $\electric{\phi}\simeq(4\pi\electric{\varepsilon}_0\mechanical{r})^{-1}\int\electric{\rho}(\mechanical{\mathbf x}',t-\mechanical{r}/c)\,d^3\mechanical{x}'$. Using a common delay also requires the travel-time variation across the source to be small on the time scale of the source variation.

The outgoing harmonic spherical-wave factor is $e^{ik(\mechanical{r}-ct)}/\mechanical{r}$, compared with $e^{i(\mathbf k\cdot\mechanical{\mathbf x}-\omega t)}$ for a plane wave. Away from the sources, the vector potential satisfies $\Box\magnetic{\mathbf A}=0$. For a spherically symmetric component, or at leading radial order far away, use the radial part of the Laplacian.

$$
\nabla^2\magnetic{\mathbf A}
=\frac{1}{\mechanical{r}}\frac{\partial^2}{\partial\mechanical{r}^2}(\mechanical{r}\magnetic{\mathbf A})
+\text{angular terms},
\qquad
\frac{1}{c^2}\frac{\partial^2}{\partial t^2}(\mechanical{r}\magnetic{\mathbf A})
-\frac{\partial^2}{\partial\mechanical{r}^2}(\mechanical{r}\magnetic{\mathbf A})=0
$$

in the radial approximation. This gives the outgoing radial factor $e^{ik\mechanical{r}}/\mechanical{r}$ at fixed frequency. Time-dependent sources can radiate energy carried outward by electromagnetic waves.

### PDF page 88

#### Radiated power

Power $\energy{P}$ is the rate at which radiation carries energy away. Its angular distribution is $d\energy{P}/d\Omega$. One can also resolve the power by angular frequency, $d^2\energy{P}/(d\Omega\,d\omega)$, which the page labels $\energy{I}$ and calls “fluence.”

![[Kyle Kabasares - Electrodynamics - Poynting flux through a sphere.png|**Fig. 120** Integrate the outward Poynting flux over a sphere surrounding the source.]]

$$
\energy{P}=\int\mechanical{r}^2(\electric{\mathbf E}\times\magnetic{\mathbf H})\cdot\hat{\mathbf r}\,d\Omega,
\qquad
\frac{d\energy{P}}{d\Omega}=\mechanical{r}^2(\electric{\mathbf E}\times\magnetic{\mathbf H})\cdot\hat{\mathbf r}.
$$

Compute the retarded potentials, then use $\electric{\mathbf E}=-\nabla\electric{\phi}-\partial_t\magnetic{\mathbf A}$ and $\magnetic{\mathbf H}=(\nabla\times\magnetic{\mathbf A})/\magnetic{\mu}_0$ in vacuum. Fields falling faster than $1/\mechanical{r}$ make vanishing contributions to the flux at infinity. Keep the leading $1/\mechanical{r}$ terms. In the vector-potential integral, simplify the denominator while retaining the source-dependent delay.

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)\simeq
\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}}\int
\circuit{\mathbf J}(\mechanical{\mathbf x}',t')\delta\!\left(t-t'-\frac{\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert}{c}\right)
\,d^3\mechanical{x}'\,dt'.
$$

Apply the same denominator approximation to the scalar potential.

### PDF page 89

The notes refer to Jackson §§9.5–9.6 for examples of the limits of the approximations in near-field calculations. Resolve the real current density into positive-frequency components by writing it as the real part of $\int_0^\infty\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')e^{-i\omega t'}\,d\omega$. Consider one harmonic component. The time delta in the retarded potential gives

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)\simeq
\frac{\magnetic{\mu}_0}{4\pi\mechanical{r}}
\int\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')\,
e^{-i\omega(t-\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert/c)}
\,d^3\mechanical{x}'.
$$

Expand the path length for a source small compared with the observation distance.

$$
\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert
=\mechanical{r}-\hat{\mathbf r}\cdot\mechanical{\mathbf x}'
+O\!\left(\lvert\mechanical{\mathbf x}'\rvert^2/\mechanical{r}\right).
$$

Then the leading far-field potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)\simeq
\frac{\magnetic{\mu}_0}{4\pi}\frac{e^{-i\omega(t-\mechanical{r}/c)}}{\mechanical{r}}
\int\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')
e^{-ik\hat{\mathbf r}\cdot\mechanical{\mathbf x}'}\,d^3\mechanical{x}',
\qquad k=\frac{\omega}{c}.
$$

The handwritten phase inside the integral omits $1/c$. It follows from dividing the expanded path length by $c$. The page references Jackson, Eq. 9.8.

![[Kyle Kabasares - Electrodynamics - Antenna path difference in the far field.png|**Fig. 121** Contributions from two points on the antenna have different travel distances.]]

Interference can be important when the difference in travel times is comparable to the oscillation period, or when $\omega$ times that delay is appreciable.

### PDF page 90

#### Finite straight antenna

A wire from $\mechanical{x}=0$ to $\mechanical{x}=\mechanical{L}$ carries the harmonic current $\circuit{I}_0 e^{-i\omega t}$ in the positive $\mechanical{x}$ direction.

![[Kyle Kabasares - Electrodynamics - Finite straight antenna with harmonic current.png|**Fig. 122** Uniform harmonic current along a finite straight segment.]]

Use step functions to select the segment and delta functions to confine the current to the axis.

$$
\circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')
=\circuit{I}_0\delta(\mechanical{y}')\delta(\mechanical{z}')
\bigl[\Theta(\mechanical{x}')-\Theta(\mechanical{x}'-\mechanical{L})\bigr]\hat{\mathbf x}.
$$

The transverse integrations give one, and the longitudinal integration is over $0<\mechanical{x}'<\mechanical{L}$. Let $u=\hat{\mathbf r}\cdot\hat{\mathbf x}$ and use the phase convention from page 89.

$$
\begin{aligned}
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
&\simeq\frac{\magnetic{\mu}_0\circuit{I}_0}{4\pi}
\frac{e^{-i\omega(t-\mechanical{r}/c)}}{\mechanical{r}}\hat{\mathbf x}
\int_0^{\mechanical{L}}e^{-iku\mechanical{x}'}\,d\mechanical{x}',\\
\int_0^{\mechanical{L}}e^{-iku\mechanical{x}'}\,d\mechanical{x}'
&=\frac{e^{-iku\mechanical{L}}-1}{-iku}.
\end{aligned}
$$

The integral equals $\mechanical{L}$ when $u=0$.

#### Long-wavelength approximation

If the wavelength is much larger than the source size, then $\lvert k\hat{\mathbf r}\cdot\mechanical{\mathbf x}'\rvert\ll1$. Expand the spatial phase in the far-field integral.

$$
\int \circuit{\mathbf J}_\omega(\mechanical{\mathbf x}')
\left[1-ik\hat{\mathbf r}\cdot\mechanical{\mathbf x}'
+\frac12(-ik\hat{\mathbf r}\cdot\mechanical{\mathbf x}')^2+\cdots\right]d^3\mechanical{x}'.
$$

The first integral to compute is $\int \circuit{\mathbf J}_\omega\,d^3\mechanical{x}'$. The lowest displayed term can vanish, depending on the source.

### PDF page 91

#### Electric dipole radiation

For a localized steady current, the integral of the current density vanishes. For a time-dependent source it can be nonzero. Integrating the charge continuity equation against position gives $\int\circuit{\mathbf J}\,d^3\mechanical{x}'=d\electric{\mathbf p}/dt$ when the boundary term vanishes.

![[Kyle Kabasares - Electrodynamics - Current between opposite electric charges.png|**Fig. 123** Current transfers charge between the two ends of a dipole.]]

For the harmonic convention $e^{-i\omega t}$, the integral of the current amplitude is $-i\omega\electric{\mathbf p}_\omega$, where $\electric{\mathbf p}_\omega$ is the dipole amplitude. The leading far-field vector potential is

$$
\magnetic{\mathbf A}(\mechanical{\mathbf x},t)
\simeq\frac{\magnetic{\mu}_0}{4\pi}
\frac{e^{i(k\mechanical{r}-\omega t)}}{\mechanical{r}}
(-i\omega\electric{\mathbf p}_\omega).
$$

Compute $\magnetic{\mathbf H}=(\nabla\times\magnetic{\mathbf A})/\magnetic{\mu}_0$ (Jackson, Eq. 9.19). In the radiation zone, $\electric{\mathbf E}=\circuit{Z}_0\magnetic{\mathbf H}\times\hat{\mathbf r}$, where $\circuit{Z}_0=\sqrt{\magnetic{\mu}_0/\electric{\varepsilon}_0}$. For a dipole oscillating along a fixed axis, the average power per solid angle varies as $k^4\lvert\electric{\mathbf p}_\omega\rvert^2\sin^2\theta$, where $\theta$ is measured from the dipole axis (Eq. 9.23). The total-power line labeled Eq. 9.24 is left blank.

![[Kyle Kabasares - Electrodynamics - Harmonic current and antenna end charges.png|**Fig. 124** The end charges build up as the harmonic current flows along the segment.]]

For charges $\pm\electric{Q}(t)$ separated by $\mechanical{L}$, $d\electric{Q}/dt=\circuit{I}_0e^{-i\omega t}$. Thus the oscillating charge is $\electric{Q}(t)=\circuit{I}_0e^{-i\omega t}/(-i\omega)$ and the dipole amplitude is $\electric{\mathbf p}_\omega=(\circuit{I}_0\mechanical{L}/(-i\omega))\hat{\mathbf x}$ for a segment along $\hat{\mathbf x}$. The example gives

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{c^2\circuit{Z}_0}{32\pi^2}k^4
\left\lvert\frac{\circuit{I}_0\mechanical{L}}{-i\omega}\right\rvert^2\sin^2\theta.
$$

### PDF page 92

The current in the tapered antenna example (Jackson, Eq. 9.25) is

$$
\circuit{I}(\mechanical{z},t)
=\circuit{I}_0\left(1-\frac{2\lvert\mechanical{z}\rvert}{\mechanical{d}}\right)e^{-i\omega t},
\qquad \lvert\mechanical{z}\rvert\leq\mechanical{d}/2.
$$

![[Kyle Kabasares - Electrodynamics - Tapered antenna current endpoints.png|**Fig. 125** The current is largest at the midpoint and vanishes at both ends.]]

#### Radiation review · March 8, 2018

Time-dependent sources can produce outgoing electromagnetic waves that carry energy away. At large $\mechanical{r}$ the vector potential is given by the current transform from page 89 (Jackson, Eq. 9.8). When $k\lvert\hat{\mathbf r}\cdot\mechanical{\mathbf x}'\rvert$ is small, expand the spatial phase. The leading term is the electric dipole term. Write the dipole moment as $\electric{\mathbf p}(t)=\electric{\mathbf p}_\omega e^{-i\omega t}$ with $\electric{\mathbf p}_\omega=\int\mechanical{\mathbf x}'\electric{\rho}_\omega(\mechanical{\mathbf x}')\,d^3\mechanical{x}'$. Then

$$
\magnetic{\mathbf A}\simeq
\frac{\magnetic{\mu}_0}{4\pi}
\frac{e^{i(k\mechanical{r}-\omega t)}}{\mechanical{r}}(-i\omega\electric{\mathbf p}_\omega).
$$

The power per solid angle is proportional to $k^4\lvert\electric{\mathbf p}_\omega\rvert^2\sin^2\theta$, and the total power is its integral over solid angle (Eq. 9.24). The lecture returns to the tapered antenna on Jackson p. 412.

![[Kyle Kabasares - Electrodynamics - Antenna axis in the radiation example.png|**Fig. 126** The wire extends from $-\mechanical{d}/2$ to $+\mechanical{d}/2$ along its axis.]]

### PDF page 93

#### Charge and dipole moment of the tapered antenna

Use the continuity equation to obtain the charge density from the varying current. Define the support factor $F(\mechanical{z})=\Theta(\mechanical{z}+\mechanical{d}/2)-\Theta(\mechanical{z}-\mechanical{d}/2)$.

$$
\circuit{\mathbf J}=
\circuit{I}_0\left(1-\frac{2\lvert\mechanical{z}\rvert}{\mechanical{d}}\right)e^{-i\omega t}
\delta(\mechanical{x})\delta(\mechanical{y})F(\mechanical{z})\hat{\mathbf z}.
$$

The derivative of the support factor gives no end terms because the current amplitude vanishes at both ends. Differentiating the taper gives $+2/\mechanical{d}$ below the midpoint and $-2/\mechanical{d}$ above it. Since $\partial_t\electric{\rho}=-i\omega\electric{\rho}$, continuity gives

$$
\electric{\rho}=\frac{\nabla\cdot\circuit{\mathbf J}}{i\omega}
=-\frac{2\circuit{I}_0e^{-i\omega t}}{i\omega\mechanical{d}}\,
\operatorname{sgn}(\mechanical{z})\,\delta(\mechanical{x})\delta(\mechanical{y})F(\mechanical{z}).
$$

The axial dipole moment follows by integrating $\mechanical{z}\electric{\rho}$ over the two halves.

$$
\begin{aligned}
\electric{p}_z(t)
&=\frac{2\circuit{I}_0e^{-i\omega t}}{i\omega\mechanical{d}}
\left[\int_{-\mechanical{d}/2}^{0}\mechanical{z}\,d\mechanical{z}
-\int_0^{\mechanical{d}/2}\mechanical{z}\,d\mechanical{z}\right]\\
&=\frac{\mechanical{d}}{2}\frac{\circuit{I}_0e^{-i\omega t}}{-i\omega}.
\end{aligned}
$$

The handwritten dipole integral reverses the signs of the two charge densities calculated just above it. The expression here follows those densities and satisfies $d\electric{p}_z/dt=\int\circuit{J}_z\,d^3\mechanical{x}$. The sign drops out of the power.

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{c^2\circuit{Z}_0}{32\pi^2}k^4
\left(\frac{\mechanical{d}}{2}\right)^2\frac{\lvert\circuit{I}_0\rvert^2}{\omega^2}\sin^2\theta,
\qquad \omega=ck.
$$

### PDF page 94

The tapered antenna dipole moment can also be found from the integrated current, $\int\circuit{\mathbf J}\,d^3\mechanical{x}'=-i\omega\electric{\mathbf p}$ (Jackson, Eq. 9.14). The transverse delta functions integrate to one. The longitudinal integrals are

$$
\int\circuit{J}_z\,d^3\mechanical{x}'
=\circuit{I}_0e^{-i\omega t}\left[
\int_0^{\mechanical{d}/2}\left(1-\frac{2\mechanical{z}'}{\mechanical{d}}\right)d\mechanical{z}'
+\int_{-\mechanical{d}/2}^0\left(1+\frac{2\mechanical{z}'}{\mechanical{d}}\right)d\mechanical{z}'\right]
=\frac{\mechanical{d}}2\circuit{I}_0e^{-i\omega t}.
$$

The second integrand uses the negative-coordinate branch of $\lvert\mechanical{z}'\rvert$. The result gives the same dipole moment as the charge integral.

#### Magnetic dipole radiation from a current loop

Consider a rectangular loop with a uniform harmonic current $\circuit{I}=\circuit{I}_0e^{-i\omega t}$.

![[Kyle Kabasares - Electrodynamics - Rectangular loop with harmonic current.png|**Fig. 127** The same current flows around each side of the closed loop.]]

The incoming and outgoing current balance at every point, so there is no oscillating charge density and no electric dipole radiation. A time-varying magnetic dipole still radiates. Its angular power follows the electric-dipole formula with $\lvert\electric{\mathbf p}_\omega\rvert$ replaced by $\lvert\magnetic{\mathbf m}_\omega\rvert/c$.

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{\circuit{Z}_0}{32\pi^2}k^4\lvert\magnetic{\mathbf m}_\omega\rvert^2\sin^2\theta.
$$

For a planar loop of area $\mechanical{a}$, the magnitude of the moment is current times area, and $\magnetic{\mathbf m}(t)=\circuit{I}_0\mechanical{a}e^{-i\omega t}\hat{\mathbf n}$. Some sources have both electric and magnetic dipole terms vanish.

### PDF page 95

For opposite tapered currents on the two sides of a rectangle, the electric dipoles cancel and the magnetic dipole remains.

![[Kyle Kabasares - Electrodynamics - Opposite tapered currents around a rectangle.png|**Fig. 128** Oppositely directed tapered currents on the two parallel sides.]]

Two opposing collinear segments can cancel both moments. Their electric dipoles are equal and opposite, and the collinear geometry encloses zero area.

![[Kyle Kabasares - Electrodynamics - Two opposing collinear current segments.png|**Fig. 129** Two opposite currents on a common axis.]]

#### Electric quadrupole radiation

When both dipoles vanish, the electric quadrupole can contribute. The example combines charges $-\electric{Q}$ at $\mechanical{z}=\pm\mechanical{d}/2$ with $2\electric{Q}$ at the origin. The oscillating charge gives a time-dependent quadrupole moment.

![[Kyle Kabasares - Electrodynamics - Charge layout of an electric quadrupole.png|**Fig. 130** Two like end charges and two opposite charges combined at the center.]]

This section uses the traceless convention with a factor of $1/3$ in the trace subtraction.

$$
\electric{Q}_{ab}=\int \electric{\rho}(\mechanical{\mathbf x}')
\left[\mechanical{x}_a'\mechanical{x}_b'-\frac13(\mechanical{r}')^2\delta_{ab}\right]d^3\mechanical{x}'.
$$

Replace the integral by a sum over the point charges. The $\mechanical{x}$ coordinates are zero, and the center charge contributes zero. The end charges give

$$
\electric{Q}_{xx}=2(-\electric{Q})\left[-\frac13\left(\frac{\mechanical{d}}2\right)^2\right]
=\frac{2\electric{Q}}3\left(\frac{\mechanical{d}}2\right)^2.
$$

### PDF page 96

By axial symmetry, $\electric{Q}_{yy}=\electric{Q}_{xx}$. Tracelessness gives $\electric{Q}_{zz}=-2\electric{Q}_{xx}$. The page cites Jackson Eq. 9.45 for the angular power. With $\electric{\mathbf Q}_{\mathrm J}=3\electric{\mathbf Q}$ to convert the trace-subtracted tensor on page 95 to the convention with a factor of three, write

$$
\frac{d\langle\energy{P}\rangle}{d\Omega}
=\frac{c^2\circuit{Z}_0 k^6}{1152\pi^2}
\left\lvert
\bigl[\hat{\mathbf r}\times(\electric{\mathbf Q}_{\mathrm J}\hat{\mathbf r})\bigr]\times\hat{\mathbf r}
\right\rvert^2.
$$

Here the tensor is the harmonic amplitude. The handwritten $k^2$ gives the wrong dimensions for a charge quadrupole moment. The $k^6$ combines two powers from the first spatial-phase term in the potential, two from the harmonic source relation, and two from taking the curl and forming the power.

#### Charges from the opposing currents

![[Kyle Kabasares - Electrodynamics - Opposed currents producing quadrupole charges.png|**Fig. 131** The current on each segment points away from the center in the chosen phase convention.]]

The current density can be written as

$$
\circuit{\mathbf J}
=\circuit{I}_0e^{-i\omega t}\delta(\mechanical{x})\delta(\mechanical{y})\hat{\mathbf z}
\bigl[2\Theta(\mechanical{z})-\Theta(\mechanical{z}-\mechanical{d}/2)-\Theta(\mechanical{z}+\mechanical{d}/2)\bigr].
$$

Differentiate the steps and use $\electric{\rho}=(\nabla\cdot\circuit{\mathbf J})/(i\omega)$.

$$
\electric{\rho}
=\frac{\circuit{I}_0e^{-i\omega t}}{i\omega}\delta(\mechanical{x})\delta(\mechanical{y})
\bigl[2\delta(\mechanical{z})-\delta(\mechanical{z}-\mechanical{d}/2)-\delta(\mechanical{z}+\mechanical{d}/2)\bigr].
$$

#### Rotating electric dipole

Find the leading radiation field or radiation pattern of a dipole rotating in the $\mechanical{x}\mechanical{y}$ plane with angular frequency $\omega$.

![[Kyle Kabasares - Electrodynamics - Electric dipole rotating in the xy plane.png|**Fig. 132** The dipole rotates from the positive $\mechanical{y}$ direction toward the positive $\mechanical{x}$ direction.]]

$$
\begin{aligned}
\electric{\mathbf p}(t)
&=\electric{p}_0\cos(\omega t)\hat{\mathbf y}+\electric{p}_0\sin(\omega t)\hat{\mathbf x}
=\operatorname{Re}[\electric{\mathbf p}_\omega e^{-i\omega t}],\\
\electric{\mathbf p}_\omega&=i\electric{p}_0\hat{\mathbf x}+\electric{p}_0\hat{\mathbf y}.
\end{aligned}
$$

### PDF page 97

For the rotating dipole of page 96, the two perpendicular components are in quadrature. The handwritten line multiplies their summed squared amplitudes by a common $\sin^2\theta$. Each component has its own angle to the observation direction. With $\theta$ measured from the rotation axis $\hat{\mathbf z}$,

$$
\lvert\hat{\mathbf r}\times\electric{\mathbf p}_\omega\rvert^2
=\lvert\electric{p}_0\rvert^2\bigl[(1-\hat r_x^2)+(1-\hat r_y^2)\bigr]
=\lvert\electric{p}_0\rvert^2(1+\cos^2\theta).
$$

The angular power is proportional to $k^4$ times this factor.

#### Discussion · March 9, 2018

**Set 6, problem 4.** A straight wire produces $\magnetic{B}=\magnetic{\mu}_0\circuit{I}/(2\pi\mechanical{r})$. A sphere of radius $\mechanical{R}$ sits at distance $\mechanical{a}\gg\mechanical{R}$ from the wire. The field across the sphere is approximately uniform, of magnitude $\magnetic{B}_0=\magnetic{\mu}_0\circuit{I}/(2\pi\mechanical{a})$.

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

**Set 6, problem 5.** Given $\circuit{\mathbf J}=\nabla\times\mathbf K$, Ampère's law gives $\nabla\times\magnetic{\mathbf B}=\magnetic{\mu}_0\nabla\times\mathbf K$. The page proposes $\magnetic{\mathbf B}=\magnetic{\mu}_0\mathbf K$. This satisfies the curl equation directly, and requires $\nabla\cdot\mathbf K=0$ and compatible boundary data to serve as the full solution.

#### Relativity problem

An oscillating dipole $\electric{\mathbf p}(t)=\electric{p}_0\cos(\omega t)\hat{\mathbf z}$ sits at the origin. The notes start from the retarded scalar-potential integral with source $\electric{\rho}(\mechanical{\mathbf x}',t')$.

### PDF page 98

For a static dipole the scalar potential is $\electric{\mathbf p}\cdot\mechanical{\mathbf x}/(4\pi\electric{\varepsilon}_0\mechanical{r}^3)$ (Jackson, Eq. 4.10). In the retarded integral the time delta selects $t'=t-\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert/c$. The boxed calculation substitutes the common delay $t-\mechanical{r}/c$ and gives

$$
\electric{\phi}_{\mathrm{near}}(\mechanical{\mathbf x},t)
=\frac{\electric{\mathbf p}(t-\mechanical{r}/c)\cdot\mechanical{\mathbf x}}{4\pi\electric{\varepsilon}_0\mechanical{r}^3}.
$$

As on page 74, this is the quasistatic dipole term evaluated at retarded time. The notes treat the dipole as ideal and state that the current vanishes. An ideal time-varying dipole is neutral overall, with distributional sources $\electric{\rho}=-\electric{\mathbf p}(t)\cdot\nabla\delta^{(3)}(\mechanical{\mathbf x})$ and $\circuit{\mathbf J}=\dot{\electric{\mathbf p}}(t)\delta^{(3)}(\mechanical{\mathbf x})$ consistent with charge continuity. The spatial derivative of the delta in the scalar source also acts on the delay, giving the additional term described on page 74.

#### Set 7, problem 1

The page sketches a particle trajectory that changes direction at the origin, with the angle $\theta$ shown from the positive $\mechanical{x}$ axis.

![[Kyle Kabasares - Electrodynamics - Particle trajectory turning at the origin.png|**Fig. 135** Spatial sketch of two trajectory branches meeting at the origin.]]

![[Kyle Kabasares - Electrodynamics - Spacetime trajectories and observers.png|**Fig. 136** Spacetime sketch with observer locations and signal paths.]]

For a stationary observer a distance $\mechanical{a}$ away, the light signal from the kink reaches the observer at $t=\mechanical{a}/c$.

![[Kyle Kabasares - Electrodynamics - Observer receives signal from trajectory kink.png|**Fig. 137** The world line at fixed observer position intersects the signal from the origin at $\mechanical{a}/c$.]]

### PDF page 99

#### Retarded potential for the two trajectory branches

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

### PDF page 100

The observer is explicitly placed at $(0,0,\mechanical{a})$ on this page, perpendicular to the plane of motion. This gives the reduced distance used on page 99. For the branch with direction $(\cos\theta,\sin\theta,0)$, the unit vector from the particle to the observer and the normalized velocity are

$$
\hat{\mathbf n}=\frac{(-\mechanical{v}t'\cos\theta,-\mechanical{v}t'\sin\theta,\mechanical{a})}{\mechanical{R}(t')},
\qquad
\boldsymbol\beta=\frac{\mechanical{v}}{c}(\cos\theta,\sin\theta,0).
$$

Use the appropriate velocity and direction on each branch when evaluating $\boldsymbol\beta\cdot\hat{\mathbf n}$. Only the quadratic root with $t'<t$ is physically acceptable.

#### Course review · March 13, 2018

The review begins with the four vacuum Maxwell equations from page 69. For free-space solutions, the lecture lists the electrostatic scalar potential, the magnetostatic vector potential, and the time-dependent retarded scalar potential. With $s=\lvert\mechanical{\mathbf x}-\mechanical{\mathbf x}'\rvert$,

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

### PDF page 101

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

The magnetostatic term uses a cross product as on page 55. For a harmonic source, the radiation potential has a common factor $\magnetic{\mu}_0e^{i(k\mechanical{r}-\omega t)}/(4\pi\mechanical{r})$. Its electric dipole coefficient is $-i\omega\electric{\mathbf p}_\omega$ by continuity in the $e^{-i\omega t}$ convention. The magnetic dipole enters through the next spatial-phase term with coefficient $-ik\magnetic{\mathbf m}_\omega\times\hat{\mathbf r}$. The review line indicates both moments schematically.

#### Normalizing model sources

Given a configuration, identify $\electric{\rho}$ and $\circuit{\mathbf J}$ and keep the delta normalization consistent with the integration measure. The current through a normal cross section is $\circuit{I}=\int\circuit{\mathbf J}\cdot\hat{\mathbf n}\,dA$.

![[Kyle Kabasares - Electrodynamics - Normal cross section for a ring current.png|**Fig. 138** A small cross section through the azimuthal ring current.]]

For a ring at $\mechanical{r}=\mechanical{R}$, $\theta=\pi/2$, the physical area element is $\mechanical{r}\,d\mechanical{r}\,d\theta$. The azimuthal current density is $(\circuit{I}/\mechanical{R})\delta(\mechanical{r}-\mechanical{R})\delta(\theta-\pi/2)$. With the coordinate measure $d\mechanical{r}\,d\theta$, absorb the Jacobian into the integrated density to obtain the same current.

For a spherical surface current with angular profile $\sin\theta\,\hat{\boldsymbol\varphi}$, a physical surface current density $\circuit{\mathbf K}$ gives $\circuit{\mathbf J}=\circuit{\mathbf K}\delta(\mechanical{r}-\mechanical{R})$. If the radial delta is normalized against $\mechanical{r}^2d\mechanical{r}$ instead, write $\delta(\mechanical{r}-\mechanical{R})/\mechanical{R}^2$ and absorb $\mechanical{R}^2$ into the angular coefficient.

### PDF page 102

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

### PDF page 103

For a density with a simple angular dependence, use the spherical-harmonic expansion of the inverse distance with the coefficients $4\pi/(2\ell+1)$ as on page 41. The review points back to Chapter 4.

#### Materials and boundary-value problems

Materials can lead to difficult boundary-value problems. In electrostatic equilibrium $\electric{\mathbf E}=0$ inside a conductor. At an interface with no free surface sources, $\electric{D}_{\perp}$ and $\electric{\mathbf E}_{\parallel}$ are continuous, as are $\magnetic{B}_{\perp}$ and $\magnetic{\mathbf H}_{\parallel}$. Set up the differential equations and boundary conditions using the material laws.

- For a linear dielectric, $\electric{\mathbf D}=\electric{\varepsilon}\electric{\mathbf E}$.
- For a linear magnetic material, $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$.
- For the permanent magnet model, prescribe $\magnetic{\mathbf M}=\magnetic{\mathbf B}/\magnetic{\mu}_0-\magnetic{\mathbf H}$, constant in the example. The handwritten review reverses the sign of this definition relative to page 57.

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

### PDF page 104

#### Final review of the central-dipole boundary conditions

Away from the source at $\mechanical{r}=0$, use $\nabla\times\magnetic{\mathbf H}=0$ and $\nabla\cdot\magnetic{\mathbf B}=0$. The sphere has $\magnetic{\mathbf H}=\magnetic{\mathbf B}/\magnetic{\mu}$ inside. With $\magnetic{\mathbf H}=-\nabla\magnetic{\phi}_{\mathrm m}$, the potential satisfies $\nabla^2\magnetic{\phi}_{\mathrm m}=0$ in both $0<\mechanical{r}<\mechanical{R}$ and $\mechanical{r}>\mechanical{R}$.

- At infinity, $\magnetic{\phi}_{\mathrm m}\to0$.
- At $\mechanical{r}=\mechanical{R}$, continuity of $\magnetic{H}_{\parallel}$ gives continuity of the angular derivative. Continuity of $\magnetic{B}_{\perp}$ gives continuity of $\magnetic{\mu}\partial_{\mechanical{r}}\magnetic{\phi}_{\mathrm m}$ with the local permeability on each side.
- As $\mechanical{r}\to0$, match the singular part of the potential to the central dipole. The homogeneous response to the boundary is regular at the origin. The ideal dipole's own field has the corresponding singularity there.

The final handwritten coverage reminder says “Everything up to 7.2.”

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{q}_i$ | $\unit{C}$ | Electric charge | Signed charge of the point source labeled $i$. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Constant in the SI form of Coulomb's law. |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Mechanical force on the charge. |
| $\electric{\vec E}$ | $\unit{N\,C^{-1}}$ | Electric field | Force per unit positive test charge. |
| $\energy{U}$ | $\unit{J}$ | Electrostatic potential energy | Work required to bring the charges to their separation from infinity. |
| $\mechanical{\vec r}$, $\mechanical{\vec r}_i$ | $\unit{m}$ | Field and source positions | Position vectors of the observation point and source charge. |
| $\electric{\rho}$ | $\unit{C\,m^{-3}}$ | Volume charge density | Charge per unit volume. |
| $\electric{Q}_{\mathrm{enc}}$ | $\unit{C}$ | Enclosed charge | Integral of the volume charge density within the Gaussian surface. |
| $\mechanical{R}$ | $\unit{m}$ | Gaussian sphere radius | Distance from the central charge to the integration surface. |
| $\electric{\rho}_0$ | $\unit{C\,m^{-3}}$ | Uniform volume charge density | Constant density inside the charged sphere or cylinder. |
| $\mechanical{L}$ | $\unit{m}$ | Gaussian cylinder length | Axial extent of the cylinder chosen for the flux integral. |
| $\electric{\sigma}$ | $\unit{C\,m^{-2}}$ | Surface charge density | Charge per unit area of the infinite plane. |
| $\electric{\phi}$ | $\unit{V}$ | Electrostatic potential | Potential energy per unit charge, defined up to a constant. |
| $\circuit{C}$ | $\unit{F}$ | Capacitance | Magnitude of the charge on either conductor divided by their potential difference. |
| $\mechanical{d}$ | $\unit{m}$ | Plate separation | Distance between the two parallel planes. |
| $\mechanical{a}$, $\mechanical{b}$ | $\unit{m}$ | Inner and outer radii | Radial boundaries of the concentric spherical capacitor or conducting shell. |
| $G(\mechanical{\vec x},\mechanical{\vec x}')$ | $\unit{m^{-1}}$ | Electrostatic Green's function | Free-space kernel normalized to a source of $-4\pi$ times the three-dimensional delta. |
| $\mechanical{s}$ | $\unit{m}$ | Cylindrical radius | Perpendicular distance from the symmetry axis. |
| $\electric{\lambda}$ | $\unit{C\,m^{-1}}$ | Linear charge density | Charge per unit arc length of the rod. |
| $\energy{W}$ | $\unit{J}$ | Electrostatic energy | Energy of the charge configuration or of its electric field. |
| $\electric{V}_0$ | $\unit{V\,m}$ | Screened-potential coefficient | Multiplies the exponential divided by radius. |
| $a$ | $\unit{m^{-1}}$ | Screening parameter | Inverse length in the radial exponential. |
| $k_n$ | $\unit{m^{-1}}$ | Fourier wave number | Spatial frequency in radians per unit length for the periodic mode $n$. |
| $\gamma_{mn}$ | $\unit{m^{-1}}$ | Cube mode rate | Magnitude of the two-dimensional wave vector setting the exponential dependence on height. |
| $\alpha$ | $\unit{m^{-2}}$ | Gaussian profile coefficient | Controls the width of the prescribed planar potential. |
| $\electric{q}_{\ell m}$ | $\unit{C\,m^\ell}$ | Electric multipole moment | Charge-density moment weighted by a radial power and a conjugate spherical harmonic. |
| $\electric{V}_0$ | $\unit{V}$ | Prescribed potential amplitude | Voltage scale for the planar and spherical boundary data, distinct from the screened-potential coefficient. |
| $\electric{\vec p}$ | $\unit{C\,m}$ | Electric dipole moment | For a charge pair, the positive charge times the displacement from negative to positive charge. |
| $\electric{\sigma}_0$ | $\unit{C\,m^{-2}}$ | Surface charge density amplitude | Coefficient of $\cos\theta$ on the spherical shell. |
| $\electric{\rho}_0$ | $\unit{C\,m^{-3}}$ | Volume charge density amplitude | Coefficient of $\cos\theta$ in the charged sphere. |
| $\electric{\mathbf P}$ | $\unit{C\,m^{-2}}$ | Electric polarization | Electric dipole moment per unit volume. |
| $\electric{\mathbf D}$ | $\unit{C\,m^{-2}}$ | Electric displacement | Field whose divergence equals the free charge density. |
| $\electric{\rho}_{\mathrm b}$ | $\unit{C\,m^{-3}}$ | Bound volume charge density | Negative divergence of the polarization. |
| $\electric{\varepsilon}$ | $\unit{F\,m^{-1}}$ | Material permittivity | Ratio of electric displacement to electric field in a linear isotropic medium. |
| $\electric{\varepsilon}/\electric{\varepsilon}_0$ | $1$ | Relative permittivity | Material permittivity divided by the vacuum value. |
| $\magnetic{\mathbf B}$ | $\unit{T}$ | Magnetic flux density | Field given by the curl of the magnetic vector potential. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Potential whose curl yields the magnetic flux density. |
| $\magnetic{\mu}_0$ | $\unit{H\,m^{-1}}$ | Vacuum permeability | Constant relating magnetic circulation to enclosed steady current. |
| $\circuit{\mathbf J}$ | $\unit{A\,m^{-2}}$ | Current density | Current per unit area normal to the flow. |
| $\circuit{I}_{\mathrm{enc}}$ | $\unit{A}$ | Enclosed current | Net current through a surface spanning the Ampèrian contour. |
| $\magnetic{\mathbf m}$ | $\unit{A\,m^2}$ | Magnetic dipole moment | First moment of a localized steady current. |
| $\circuit{I}$ | $\unit{A}$ | Electric current | Charge flowing per unit time through a cross section. |
| $\magnetic{\mathbf H}$ | $\unit{A\,m^{-1}}$ | Magnetic field strength | Auxiliary field whose curl equals the free current density in magnetostatics. |
| $\magnetic{\mathbf M}$ | $\unit{A\,m^{-1}}$ | Magnetization | Magnetic dipole moment per unit volume. |
| $\circuit{\mathbf J}_{\mathrm b}$ | $\unit{A\,m^{-2}}$ | Bound current density | Volume current associated with magnetization. |
| $\magnetic{\mu}$ | $\unit{H\,m^{-1}}$ | Material permeability | Ratio of magnetic flux density to field strength in a linear isotropic medium. |
| $\magnetic{\phi}_{\mathrm m}$ | $\unit{A}$ | Magnetic scalar potential | Scalar whose negative gradient gives the magnetic field strength where free current vanishes. |
| $\magnetic{\Phi}_{\mathrm B}$ | $\unit{Wb}$ | Magnetic flux | Integral of magnetic flux density through an oriented surface. |
| $\electric{\Phi}_{\mathrm E}$ | $\unit{V\,m}$ | Electric flux | Integral of electric field through an oriented surface. |
| $\energy{u}$ | $\unit{J\,m^{-3}}$ | Electromagnetic energy density | Energy stored per unit volume in the electric and magnetic fields. |
| $\energy{\mathbf S}$ | $\unit{W\,m^{-2}}$ | Poynting vector | Electromagnetic energy flux density. |
| $\mechanical{\mathbf g}$ | $\unit{kg\,m^{-2}\,s^{-1}}$ | Electromagnetic momentum density | Field momentum per unit volume. |
| $\mechanical{T}_{ij}$ | $\unit{N\,m^{-2}}$ | Maxwell stress tensor | Tensor entering the field momentum balance. |
| $c$ | $\unit{m\,s^{-1}}$ | Vacuum speed of light | Propagation speed of electromagnetic disturbances in vacuum. |
| $\mathbf k$ | $\unit{m^{-1}}$ | Wave vector | Spatial phase gradient of a plane wave. |
| $\omega$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Rate of change of phase in time in magnitude. |
| $n$ | $1$ | Refractive index | Ratio of the vacuum light speed to the phase speed in a lossless medium. |
| $\energy{P}$ | $\unit{W}$ | Radiated power | Rate of outward energy flow through a surface surrounding the source. |
| $\circuit{Z}_0$ | $\unit{\Omega}$ | Vacuum wave impedance | Ratio of transverse electric to magnetic field-strength amplitudes in an outgoing wave. |
| $\circuit{\mathbf K}$ | $\unit{A\,m^{-1}}$ | Surface current density | Current per unit transverse length on a surface. |
