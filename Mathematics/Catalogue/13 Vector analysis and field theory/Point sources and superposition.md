---
title: "Point sources and superposition"
catalogue_ids:
  - "13.4.3"
  - "13.4.3.1"
  - "13.4.3.2"
  - "13.4.4"
  - "13.4.4.1"
  - "13.4.4.2"
  - "13.4.4.3"
---

> [!TLDR]
> Point-source fields use an inverse-square kernel; superposition adds discrete contributions or integrates a continuous source distribution.

## Mathematical point sources first

Read [[Divergence and local expansion]], [[Surface integrals and oriented flux]], and [[08.07 Improper integrals]]. Let a source of strength $a$ lie at $\mathbf y_0$. At an observation point $\mathbf x\ne\mathbf y_0$, define

$$
\mathbf K(\mathbf x)=\frac{a}{4\pi}
\frac{\mathbf x-\mathbf y_0}{\|\mathbf x-\mathbf y_0\|^3}.
$$

Its magnitude is $|a|/(4\pi R^2)$, where $R=\|\mathbf x-\mathbf y_0\|$. The numerator is a displacement vector of length $R$, so the denominator's third power still gives an inverse-square magnitude. For positive $a$ the field points away from the source; for negative $a$ it points toward it. Its outward flux through a centered radius-$R$ sphere is $a$, independent of radius.

Away from the source its divergence and curl vanish. The generalized equation $\nabla\cdot\mathbf K=a\delta_{\mathbf y_0}$ expresses its concentrated source. The delta is not an ordinary function with a finite value at the source: its integral over a region containing that point is one. More precisely, against a smooth compactly supported test function $\psi$, the source acts as $a\psi(\mathbf y_0)$. Integrating by parts on a punctured region and shrinking the hole gives this rule. The ordinary smooth divergence theorem must not be applied across the missing point.

## Discrete and continuous source distributions

For finitely many strengths $a_j$ at distinct positions $\mathbf y_j$, linearity gives

$$
\mathbf F(\mathbf x)=\frac1{4\pi}\sum_j
a_j\frac{\mathbf x-\mathbf y_j}{\|\mathbf x-\mathbf y_j\|^3}.
$$

Add vectors, not magnitudes. Opposite directional contributions may cancel. A potential with convention $\mathbf F=-\nabla\phi$ is $\phi=\sum_j a_j/(4\pi\|\mathbf x-\mathbf y_j\|)$. There is no arbitrary source value at $\mathbf x=\mathbf y_j$; these points are excluded.

If a smooth density $s(\mathbf y)$ replaces separate sources, a small volume contributes strength $s(\mathbf y)dV_{\mathbf y}$. The limit of small-volume sums is

$$
\mathbf F(\mathbf x)=\frac1{4\pi}\iiint
s(\mathbf y)\frac{\mathbf x-\mathbf y}{\|\mathbf x-\mathbf y\|^3}\,dV_{\mathbf y}.
$$

Smooth compactly supported densities give a useful sufficient setting. The field integral is locally integrable at the observation point: in a radius-$\epsilon$ ball, the bound behaves as $\int_0^\epsilon R^{-2}R^2dR=\epsilon$. This does not justify unrestricted differentiation under the integral. Surface and line distributions instead require their own area or length densities, integration elements, and singularity analysis.

## Coulomb field of a point charge

In vacuum electrostatics, a stationary point charge $\electric{q}$ at position $\mechanical{\mathbf y}_0$ produces

$$
\electric{\mathbf E}(\mechanical{\mathbf x})=
\frac{\electric{q}}{4\pi\electric{\varepsilon_0}}
\frac{\mechanical{\mathbf x}-\mechanical{\mathbf y}_0}
{\|\mechanical{\mathbf x}-\mechanical{\mathbf y}_0\|^3}.
$$

The electric potential is $\electric{V}=\electric{q}/(4\pi\electric{\varepsilon_0}\|\mechanical{\mathbf x}-\mechanical{\mathbf y}_0\|)$ with zero at infinity, and $\electric{\mathbf E}=-\nabla\electric{V}$. A positive charge gives outward field; a negative charge gives inward field. A test charge would experience force equal to its own charge times this field. This formula assumes vacuum and stationary sources; material boundaries and time variation require additional physics.

For a continuous vacuum charge density $\electric{\rho_q}$, replace $\electric{q}$ in the sum by $\electric{\rho_q}(\mechanical{\mathbf y})dV_{\mathbf y}$. The source density of the electric field is $\electric{\rho_q}/\electric{\varepsilon_0}$. [Feynman's electrostatics lecture](https://www.feynmanlectures.caltech.edu/II_04.html) explains this superposition from Coulomb's law.

## Gravitational field of a point mass

In Newtonian gravitation a positive source mass $\mechanical{M}$ produces acceleration field

$$
\mechanical{\mathbf g}(\mechanical{\mathbf x})=
-\mechanical{G}\mechanical{M}
\frac{\mechanical{\mathbf x}-\mechanical{\mathbf y}_0}
{\|\mechanical{\mathbf x}-\mechanical{\mathbf y}_0\|^3}.
$$

The minus sign gives attraction. The potential per unit test mass is $\energy{\Phi}=-\mechanical{G}\mechanical{M}/\|\mechanical{\mathbf x}-\mechanical{\mathbf y}_0\|$, with $\mechanical{\mathbf g}=-\nabla\energy{\Phi}$. Field acceleration and force are different: multiply this acceleration by the test mass to get force. Newtonian linear superposition applies to this model, not to arbitrary nonlinear gravitational equations. [Hunt's field-equation notes, §7.5](https://www.damtp.cam.ac.uk/user/reh10/vc/vcchapter7.pdf) compare electrostatic and gravitational potentials.

## Worked example: cancellation and direction

Use the mathematical kernel and place equal strengths $a$ at $(-b,0,0)$ and $(b,0,0)$, with $b>0$. At $(0,y,0)$, both distances are $R=\sqrt{b^2+y^2}$. Their displacement vectors are $(b,y,0)$ and $(-b,y,0)$. The horizontal components cancel, leaving

$$
\mathbf F(0,y,0)=\left(0,\frac{ay}{2\pi(b^2+y^2)^{3/2}},0\right).
$$

For $a=4\pi$, $b=1$, and $y=1$, the result is $(0,1/\sqrt2,0)$. At the origin the two contributions cancel completely, though each is nonzero. If the second strength is instead $-a$, the vertical components cancel and the horizontal components add. The new field at $(0,y,0)$ points along positive $x$ for $a>0$.

## Summary and checks

Specify source locations, source strengths or density, and the observation domain. Form each displacement from source to observation. Add signed vectors or integrate the density kernel. Then check symmetry, far-distance decay, and singular locations. A source formula can provide a particular solution; boundaries can require an additional source-free field, as explained in [[Laplace and Poisson boundary problems]].

## Practice and worked answers

1. For a centered point strength $a=-3$, find flux through any centered sphere. **Answer:** the radial field has constant normal component $-3/(4\pi R^2)$, so multiplying by $4\pi R^2$ gives $-3$.
2. Double every distance from a single point source while leaving its strength fixed. How does the field magnitude change? **Answer:** the inverse-square law gives a factor $1/2^2=1/4$. The potential magnitude changes by $1/2$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\mathbf x},\mechanical{\mathbf y}_0,\mechanical{\mathbf y}$ | $\unit{m}$ | Position | The observation and source positions in the physical examples. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | The stationary point-source charge. |
| $\electric{\varepsilon_0}$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | The coefficient in the vacuum Coulomb law. |
| $\electric{\mathbf E}$ | $\unit{N\,C^{-1}}$ | Electric field | The electrostatic force per unit test charge. |
| $\electric{V}$ | $\unit{V}$ | Electric potential | The electrostatic potential with zero at infinity. |
| $\electric{\rho_q}$ | $\unit{C\,m^{-3}}$ | Charge density | The charge per unit source volume. |
| $\mechanical{M}$ | $\unit{kg}$ | Source mass | The positive mass producing the Newtonian field. |
| $\mechanical{G}$ | $\unit{m^3\,kg^{-1}\,s^{-2}}$ | Gravitational constant | The coefficient in Newtonian gravitation. |
| $\mechanical{\mathbf g}$ | $\unit{m\,s^{-2}}$ | Gravitational field | The acceleration of a test mass. |
| $\energy{\Phi}$ | $\unit{J\,kg^{-1}}$ | Gravitational potential | The potential energy per unit test mass. |
