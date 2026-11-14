---
title: "Laplace equation in Cartesian and spherical geometries"
---

> [!TLDR]
> Separation of variables and approximate boundary data determine electrostatic potentials in strips, boxes, and spheres.

## Worked lecture material

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

##### Approximate boundary-value solutions

Three homework problems are due Thursday. The fourth has a different due date. The notes review exact solutions from the Coulomb integral when all charges are known and from the method of images for some boundaries.

![[Kyle Kabasares - Electrodynamics - Grounded plane recap.png|**Fig. 41** The charge by a grounded plane is an example with a simple image solution.]]

The notes introduce approximation methods for cases where a simple exact construction is unavailable, such as two spheres at distinct prescribed potentials. Solve $\nabla^2\electric{\phi}=-\electric{\rho}/\electric{\varepsilon}_0$ with the appropriate boundary conditions.

![[Kyle Kabasares - Electrodynamics - Two spheres at prescribed potentials.png|**Fig. 42** The two conductors are held at potentials $\electric{V}$ and $2\electric{V}$.]]

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

##### A cube with prescribed top potential

Take a cube of side $\mechanical{L}$, with $\electric{\phi}=\electric{V}$ at $z=L$ and zero potential on the bottom and four sides. The top face value follows the problem statement and the sketch.

![[Kyle Kabasares - Electrodynamics - Cube with a driven top face.png|**Fig. 43** The top face is held at potential $\electric{V}$. The other five faces are grounded.]]

The notes start from the four sine and cosine combinations in $x$ and $y$, with coefficients depending on $z$. For the zero conditions at $x=0,L$ one can choose sine modes in $x$ and drop the two families with an $x$ cosine. Similarly, sine modes in $y$ enforce the zero conditions at $y=0,L$. The resulting expansion is

$$
\electric{\phi}(x,y,z)=
\sum_{m,n\geq1}a_{mn}(z)
\sin\!\left(\frac{m\pi x}{L}\right)
\sin\!\left(\frac{n\pi y}{L}\right).
$$

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

The notes try expanding in $x$ and $z$ for the cube. Start with a continuous Fourier expansion and impose the homogeneous $x$ boundary values to retain discrete modes $\sin(m\pi x/L)$. In the trial expansion the $z$ wave number $\beta$ is left continuous,

$$
\electric{\phi}(x,y,z)
=\sum_{m=1}^\infty \int d\beta\,
\sin\!\left(\frac{m\pi x}{L}\right)\sin(\beta z)\,a_{m\beta}(y).
$$

The sine in $z$ enforces zero potential at $z=0$. In a formal substitution into Laplace's equation, each separated coefficient obeys $a_{m\beta}''-\gamma_{m\beta}^2a_{m\beta}=0$, with $\gamma_{m\beta}^2=(m\pi/L)^2+\beta^2$, and has exponential dependence on $y$. The notes identify $y=0,L$ as the remaining grounded faces. This trial is less convenient because it also has to accommodate the prescribed nonzero value at $z=L$.

##### Semi-infinite strip

Take $0<x<L$ and $y>0$, with the sides at zero potential and the base at $\electric{V}$. The problem is to solve $(\partial_x^2+\partial_y^2)\electric{\phi}=0$ with these Dirichlet data. The natural expansion is $\electric{\phi}(x,y)=\sum_{m=1}^\infty a_m(y)\sin(m\pi x/L)$.

![[Kyle Kabasares - Electrodynamics - Semi-infinite strip with prescribed base potential.png|**Fig. 45** The bottom of the strip is held at $\electric{V}$ and both vertical sides at zero potential.]]

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

##### Choosing coordinates for Laplace's equation

The lecture recaps the Cartesian separation used for the cube and the strip. An orthogonal basis adapted to the boundary reduces the equation to separate ordinary differential equations.

![[Kyle Kabasares - Electrodynamics - Strip in Cartesian coordinates.png|**Fig. 46** The parallel vertical sides select a discrete sine basis in $x$, with exponential decay in $y$.]]

A finite segment held at $\electric{V}$ on the boundary of a half-plane gives a different set of boundary data, for which the strip expansion is less convenient.

![[Kyle Kabasares - Electrodynamics - Finite driven segment on a planar boundary.png|**Fig. 47** A finite interval of a straight boundary is held at prescribed potential.]]

##### Separation in spherical coordinates

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

The first-degree harmonics in the convention of the notes are

$$
\begin{aligned}
Y_{10}&=\sqrt{\frac{3}{4\pi}}\cos\theta,\\
Y_{11}&=-\sqrt{\frac{3}{8\pi}}\,e^{i\phi}\sin\theta,\\
Y_{1,-1}&=\sqrt{\frac{3}{8\pi}}\,e^{-i\phi}\sin\theta.
\end{aligned}
$$

The exponent for $m=-1$ follows from the $e^{im\phi}$ convention on the preceding page. The recap emphasizes completeness, orthonormality, $\Delta_\Omega Y_{\ell m}=-\ell(\ell+1)Y_{\ell m}$, and $\partial_\phi^2Y_{\ell m}=-m^2Y_{\ell m}$.

##### Sphere held at constant potential

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

##### Field of a uniformly charged cube

The notes discuss a cube with a prescribed uniform charge distribution. Three claims about this example are rejected. The surface need not be equipotential, the interior field can be nonzero, and the Coulomb integral applies inside as well as outside whenever all the charge is specified. A conductor in electrostatic equilibrium would instead redistribute its charge until its potential was constant throughout the conducting material.

![[Kyle Kabasares - Electrodynamics - Cube with prescribed charge distribution.png|**Fig. 50** The cube sketch highlights corners while discussing how charge would redistribute on a conductor. The homework example prescribes the distribution.]]

##### Surface charge on a plane with nonuniform potential

The next problem gives a Gaussian boundary profile proportional to $e^{-\alpha(\mechanical{y}^2+\mechanical{z}^2)}$ and shows a point charge $\electric{Q}$ to one side. The surface charge follows from the difference in the signed normal field on the two sides,

$$
\electric{\sigma}
=\electric{\varepsilon}_0\left(\electric{E}_{n,+}-\electric{E}_{n,-}\right),
$$

using the same normal direction on both sides. The signed jump permits a surface charge of either sign. The symmetric uniform sheet is the special case with equal and opposite normal field components.

![[Kyle Kabasares - Electrodynamics - Point charge and nonuniform planar potential.png|**Fig. 51** The plane has a prescribed Gaussian potential and a point charge lies on the right.]]

![[Kyle Kabasares - Electrodynamics - Field jumps for general and symmetric sheets.png|**Fig. 52** The upper sketch shows two independent limiting fields. The lower sketch shows the equal-magnitude fields of an isolated uniform sheet.]]

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

##### Electrostatic energy of a conducting shell with a central charge

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

##### Spherical boundary-value recap

Expand $\electric{\phi}=\sum_{\ell,m}R_{\ell m}(\mechanical{r})Y_{\ell m}(\theta,\phi)$ in orthonormal spherical harmonics. In a charge-free region the radial coefficients are $A_{\ell m}\mechanical{r}^\ell+B_{\ell m}\mechanical{r}^{-\ell-1}$. Outside a sphere with potential tending to zero at infinity, retain the decaying terms. Matching to the surface data $\electric{V}(\theta,\phi)$ at $\mechanical{r}=\mechanical{R}$ gives

$$
\frac{B_{\ell m}}{\mechanical{R}^{\ell+1}}
=\int_{S^2}\electric{V}(\theta,\phi)Y_{\ell m}^*(\theta,\phi)\,d\Omega.
$$

![[Kyle Kabasares - Electrodynamics - General Dirichlet data on a sphere.png|**Fig. 57** The angular function on the sphere specifies the Dirichlet data.]]

If the boundary data are a linear combination of a few spherical harmonics, orthogonality gives the coefficients directly. The example takes $\electric{V}(\theta,\phi)=\electric{V}_0\cos^2\theta$, so the remaining series at the surface must sum to that function.

![[Kyle Kabasares - Electrodynamics - Spherical boundary with cosine-squared potential.png|**Fig. 58** The imposed angular dependence in the example is proportional to $\cos^2\theta$.]]

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{\phi}$ | $\unit{V}$ | Electrostatic potential | Potential energy per unit charge, defined up to a constant. |
| $k_n$ | $\unit{m^{-1}}$ | Fourier wave number | Spatial frequency in radians per unit length for the periodic mode $n$. |
| $\gamma_{mn}$ | $\unit{m^{-1}}$ | Cube mode rate | Magnitude of the two-dimensional wave vector setting the exponential dependence on height. |
