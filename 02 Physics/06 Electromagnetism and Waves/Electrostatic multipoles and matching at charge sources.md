---
title: "Electrostatic multipoles and matching at charge sources"
---

> [!TLDR]
> Compute moments from a source or exterior potential and match interior and exterior solutions across prescribed charges.

## Worked lecture material

Since $\cos^2\theta=\alpha Y_{20}+\beta Y_{00}$ for constants $\alpha,\beta$, projection gives $B_{20}/\mechanical{R}^3=\alpha\electric{V}_0$ and $B_{00}/\mechanical{R}=\beta\electric{V}_0$. The exterior solution is therefore

$$
\electric{\phi}(\mechanical{r},\theta,\phi)
=\alpha\electric{V}_0Y_{20}(\theta,\phi)
\left(\frac{\mechanical{R}}{\mechanical{r}}\right)^3
+\beta\electric{V}_0Y_{00}(\theta,\phi)
\frac{\mechanical{R}}{\mechanical{r}}.
$$

The radial factors follow from the two projected coefficients and give the prescribed angular dependence at the surface.

##### Multipole expansion

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

This is the $\ell=1$, $m=0$ mode since $Y_{10}\propto\cos\theta$. With the SI normalization on [[#Multipole expansion|the section on Multipole expansion]], $\electric{q}_{10}=\sqrt{3/(4\pi)}\,\electric{p}_z$. A dipole along $x$ instead has angular dependence $\sin\theta\cos\phi$ and involves $Y_{11}$ and $Y_{1,-1}$. With the phases used on [[Laplace equation in Cartesian and spherical geometries#Sphere held at constant potential|the section on Sphere held at constant potential]], $\electric{p}_x$ is proportional to $\electric{q}_{1,-1}-\electric{q}_{11}$.

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

Substitute this into $\electric{\phi}=(4\pi\electric{\varepsilon}_0)^{-1}\int\electric{\rho}(\mechanical{\vec x}')/\lvert\mechanical{\vec x}-\mechanical{\vec x}'\rvert\,d^3\mechanical{x}'$ and match coefficients of $Y_{\ell m}/\mechanical{r}^{\ell+1}$. This gives the moment integral on [[#Multipole expansion|the section on Multipole expansion]]. The notes use an alternative normalization on this page, with $1/(4\pi)$ inside the moment integral and a compensating $4\pi$ in the potential series. The power of the source radius is $\ell$ in either convention.

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

##### Multipole moments from a prescribed potential

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

Matching to the expansion in the alternative convention of [[#Multipole expansion|the section on Multipole expansion]] gives $B_{\ell m}=4\pi\electric{q}_{\ell m}^{(\mathrm{alt})}/[\electric{\varepsilon}_0(2\ell+1)]$. Thus the only nonzero moment is the axial dipole term.

##### Spherical-coordinate expansion with sources

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

##### Matching radial solutions across a point charge

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

##### Potential of a sphere with cosine volume charge density

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

##### A point charge and a prescribed spherical boundary

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

The exterior term from the prescribed boundary uses the dipole radial factor $\mechanical{R}^2/\mechanical{r}^2$ derived on [[#Multipole moments from a prescribed potential|the section on Multipole moments from a prescribed potential]] and written again below the example. It matches the boundary value at $\mechanical{r}=\mechanical{R}$.

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

##### Finding charge and dipole moment from an exterior potential

The next problem asks for the total charge and dipole moment of a sphere whose hemispheres are held at opposite potentials.

![[Kyle Kabasares - Electrodynamics - Hemispheres at opposite potentials.png|**Fig. 64** Upper and lower hemispheres held at $\electric{V}_0$ and $-\electric{V}_0$.]]

As a simpler case, return to the sphere with boundary value $\electric{V}_0\cos\theta$.

![[Kyle Kabasares - Electrodynamics - Dipole potential boundary on a sphere.png|**Fig. 65** Continuous cosine boundary potential on the sphere.]]

Its exterior potential is $\electric{V}_0\mechanical{R}^2\cos\theta/\mechanical{r}^2$. A monopole would contribute $\electric{Q}/(4\pi\electric{\varepsilon}_0\mechanical{r})$. The absence of a $1/\mechanical{r}$ term implies zero total charge. The $\cos\theta/\mechanical{r}^2$ term still indicates a dipole charge distribution.

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

##### Total charge and charge on the inner sphere

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

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{R}$ | $\unit{m}$ | Gaussian sphere radius | Distance from the central charge to the integration surface. |
| $\mechanical{a}$, $\mechanical{b}$ | $\unit{m}$ | Inner and outer radii | Radial boundaries of the concentric spherical capacitor or conducting shell. |
| $\electric{V}_0$ | $\unit{V\,m}$ | Screened-potential coefficient | Multiplies the exponential divided by radius. |
| $\alpha$ | $\unit{m^{-2}}$ | Gaussian profile coefficient | Controls the width of the prescribed planar potential. |
| $\electric{q}_{\ell m}$ | $\unit{C\,m^\ell}$ | Electric multipole moment | Charge-density moment weighted by a radial power and a conjugate spherical harmonic. |
| $\electric{V}_0$ | $\unit{V}$ | Prescribed potential amplitude | Voltage scale for the planar and spherical boundary data, distinct from the screened-potential coefficient. |
| $\electric{\sigma}_0$ | $\unit{C\,m^{-2}}$ | Surface charge density amplitude | Coefficient of $\cos\theta$ on the spherical shell. |
