---
title: "Light–matter coupling, absorption, and induced emission"
---

> [!TLDR]
> Use the electromagnetic interaction Hamiltonian to relate matrix elements to absorption and emission rates.

## Worked lecture material

Completing the second-order time integral with exponential switch-on gives
$$
c_n^{(2)}
=\frac{e^{(2\eta+i\signal{\omega}_{ni})\mechanical{t}}}{\energy{E}_i-\energy{E}_n+2i\hbar\eta}
\sum_m\frac{\energy{V}_{nm}\energy{V}_{mi}}{\energy{E}_i-\energy{E}_m+i\hbar\eta}.
$$
For the rate, the squared outer factor yields the energy delta in the slow-switching limit. The intermediate denominator keeps the $+i0$ prescription:
$$
\Gamma_{i\to n}
=\frac{2\pi}{\hbar}
\left|\sum_m\frac{\energy{V}_{nm}\energy{V}_{mi}}{\energy{E}_i-\energy{E}_m+i0}\right|^2
\delta(\energy{E}_i-\energy{E}_n).
$$
When the intermediate sum becomes an energy integral, the pole as a function of $\energy{E}_m$ is at $\energy{E}_i+i\hbar\eta$. The positive imaginary displacement specifies which side of the pole the real-axis integral passes.

![[Kyle Kabasares - Quantum Mechanics II - Pole in intermediate energy.png|**Fig. 14** The contour sketch marks the pole prescription for the intermediate energy integral.]]

##### Interaction of matter with light

Use the scalar potential $\electric{\phi}$ and vector potential $\magnetic{\mathbf A}$. In four-dimensional notation,
$$
A^\mu=(\electric{\phi}/c,\magnetic{\mathbf A}),\qquad
J^\mu=(c\electric{\rho}_q,\electric{\mathbf J}),\qquad
x^0=c\mechanical{t}.
$$
With metric $g=\operatorname{diag}(1,-1,-1,-1)$, lower indices by $A_\mu=g_{\mu\nu}A^\nu$. The field tensor is $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$, for $\mu,\nu=0,1,2,3$. With this metric and definition, its contravariant components in SI are $F^{0i}=-\electric{E}^i/c$ and $F^{ij}=-\varepsilon^{ijk}\magnetic{B}^k$ with $\varepsilon^{123}=1$. The handwritten component signs use a different convention.

The sourced Maxwell equations are $\partial_\mu F^{\mu\nu}=\magnetic{\mu}_0 J^\nu$. In terms of the potentials they give
$$
\begin{aligned}
\nabla^2\electric{\phi}+\partial_{\mechanical{t}}(\nabla\cdot\magnetic{\mathbf A})
&=-\electric{\rho}_q/\electric{\varepsilon}_0,\\
\Box\magnetic{\mathbf A}
+\nabla\left(\nabla\cdot\magnetic{\mathbf A}
+\frac{1}{c^2}\partial_{\mechanical{t}}\electric{\phi}\right)&=\magnetic{\mu}_0\electric{\mathbf J},
\qquad
\Box=c^{-2}\partial_{\mechanical{t}}^2-\nabla^2.
\end{aligned}
$$
For four-vectors $C^\mu$ and $D^\mu$, the contraction $C_\mu D^\mu=g_{\mu\nu}C^\mu D^\nu=C^\mu D_\mu$ is invariant. A gauge transformation $A_\mu\mapsto A_\mu-\partial_\mu\alpha$ for a smooth scalar $\alpha$ also leaves $F_{\mu\nu}$ invariant. The extra terms are $-\partial_\mu\partial_\nu\alpha+\partial_\nu\partial_\mu\alpha=0$.

The particle Hamiltonian on this page uses the Gaussian-unit coupling, with $\electric{q}$ the signed charge (written $e$ in the notes):
$$
H=\frac{1}{2\mechanical{m}}\left(\mechanical{\widehat{\mathbf p}}-\frac{\electric{q}}{c}\magnetic{\mathbf A}\right)^2
+\electric{q}\electric{\phi}+V(\mechanical{\mathbf r}).
$$
Here $V$ is any additional potential and $\mechanical{\widehat{\mathbf p}}=-i\hbar\nabla$. In this convention the four-potential components are $(\electric{\phi},\magnetic{\mathbf A})$. The SI normalization of the preceding page instead uses $\electric{\phi}/c$ in its time component and omits $1/c$ in the momentum coupling.

Under $A_\mu'=A_\mu-\partial_\mu\alpha$, the Gaussian-unit potentials and the state transform as
$$
\magnetic{\mathbf A}'=\magnetic{\mathbf A}+\nabla\alpha,\qquad
\electric{\phi}'=\electric{\phi}-c^{-1}\partial_{\mechanical{t}}\alpha,\qquad
\psi'=e^{i\electric{q}\alpha/(\hbar c)}\psi.
$$
In the transformed Schrödinger equation, the gradient acting on the phase generates $(\electric{q}/c)\nabla\alpha$, which cancels the extra term from $\magnetic{\mathbf A}'$ in the kinetic momentum. The time derivative of the phase gives $-(\electric{q}/c)\partial_{\mechanical{t}}\alpha$, which matches the shift of $\electric{q}\electric{\phi}$.

The ordinary spatial gradient of $\electric{\phi}$ has components $\partial\electric{\phi}/\partial x^i$ along the Cartesian basis vectors. Lowering the spatial coordinates with the metric $(+,-,-,-)$ gives $\partial/\partial x_i=-\partial/\partial x^i$. The canonical momentum by itself is gauge-dependent, because
$$
e^{-i\electric{q}\alpha/(\hbar c)}\mechanical{\widehat{\mathbf p}}\,
e^{i\electric{q}\alpha/(\hbar c)}
=\mechanical{\widehat{\mathbf p}}+\frac{\electric{q}}{c}\nabla\alpha.
$$
The kinetic momentum includes the vector potential, and its matrix elements are invariant under the simultaneous transformations.

##### Electromagnetic interactions

The gauge transformation of the wavefunction changes the canonical momentum matrix element because the derivative acts on the phase as well as on the state. With $\psi'_j=e^{i\electric{q}\alpha/(\hbar c)}\psi_j$, the matrix elements change by
$$
\begin{aligned}
\langle f'\vert\mechanical{\widehat{\mathbf p}}\vert i'\rangle
&=\langle f\vert\mechanical{\widehat{\mathbf p}}\vert i\rangle
+\frac{\electric{q}}c\langle f\vert\nabla\alpha\vert i\rangle,\\
\langle f'\vert\magnetic{\mathbf A}'\vert i'\rangle
&=\langle f\vert\magnetic{\mathbf A}\vert i\rangle+\langle f\vert\nabla\alpha\vert i\rangle.
\end{aligned}
$$
The extra terms cancel in the matrix element of the kinetic momentum $\mechanical{\boldsymbol\pi}=\mechanical{\widehat{\mathbf p}}-(\electric{q}/c)\magnetic{\mathbf A}$. This combination represents $\mechanical{m}\,d\mechanical{\mathbf r}/d\mechanical{t}$.

To see the relation in the Heisenberg picture, compute $d\mechanical{\mathbf r}_H/d\mechanical{t}=(1/i\hbar)[\mechanical{\mathbf r}_H,H_H]$. The terms $\electric{q}\electric{\phi}$ and $V$ are functions of position and commute with it. In the kinetic term, $[\mechanical{r}_j,\mechanical{\pi}_k]=i\hbar\delta_{jk}$, so $[\mechanical{r}_j,\mechanical{\boldsymbol\pi}^2/(2\mechanical{m})]=i\hbar\mechanical{\pi}_j/\mechanical{m}$. Transforming the operators to the Heisenberg picture gives the velocity relation.

The momentum obtained from the velocity is $\langle\mechanical{m}\dot{\mechanical{\mathbf r}}\rangle=\langle\mechanical{\widehat{\mathbf p}}-(\electric{q}/c)\magnetic{\mathbf A}\rangle$. Split the one-particle Hamiltonian into $H_0=\mechanical{\widehat{\mathbf p}}^2/(2\mechanical{m})+V$ and
$$
H_{\mathrm{int}}
=-\frac{\electric{q}}{2\mechanical{m}c}
\bigl(\mechanical{\widehat{\mathbf p}}\cdot\magnetic{\mathbf A}+\magnetic{\mathbf A}\cdot\mechanical{\widehat{\mathbf p}}\bigr)
+\frac{\electric{q}^2}{2\mechanical{m}c^2}\magnetic{\mathbf A}^2+\electric{q}\electric{\phi}.
$$
The product rule gives $\mechanical{\widehat{\mathbf p}}\cdot\magnetic{\mathbf A}=\magnetic{\mathbf A}\cdot\mechanical{\widehat{\mathbf p}}-i\hbar\nabla\cdot\magnetic{\mathbf A}$. For the transverse radiation field, choose a gauge with $\nabla\cdot\magnetic{\mathbf A}'=0$ and $\electric{\phi}'=0$.

##### Hamiltonian for multiple particles

For particles at $\mechanical{\mathbf r}_j$ with masses $\mechanical{m}_j$ and charges $\electric{q}_j$, use
$$
H=\sum_j \frac{\left[\mechanical{\widehat{\mathbf p}}_j-(\electric{q}_j/c)\magnetic{\mathbf A}(\mechanical{\mathbf r}_j,\mechanical{t})\right]^2}{2\mechanical{m}_j}
+\sum_j\electric{q}_j\electric{\phi}(\mechanical{\mathbf r}_j,\mechanical{t})
+V(\{\mechanical{\mathbf r}_j\}).
$$
The unperturbed terms are the sum of the ordinary kinetic energies and $V$. A plane-wave dependence for an external potential has the form $e^{-i(\signal{\omega}\mechanical{t}-\signal{\mathbf k}\cdot\mechanical{\mathbf r})}$.

To express the coupling in terms of densities, introduce the charge-density operator
$$
\electric{\rho}_q(\mechanical{\mathbf r})=\sum_j\electric{q}_j\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_j).
$$
Its integral is the total charge $\sum_j\electric{q}_j$. The number of particles would result from the corresponding unweighted sum. The scalar part of the interaction becomes
$$
\sum_j\electric{q}_j\electric{\phi}(\mechanical{\mathbf r}_j,\mechanical{t})
=\int d^3\mechanical{\mathbf r}\,\electric{\rho}_q(\mechanical{\mathbf r})\electric{\phi}(\mechanical{\mathbf r},\mechanical{t}).
$$
The vector part linear in $\magnetic{\mathbf A}$ is the sum of the symmetrized momentum couplings. It will be written in terms of a current density.

For identical particles of mass $\mechanical{m}$ and charge $\electric{q}$, define the symmetrized canonical number current
$$
\mathbf j(\mechanical{\mathbf r})
=\frac{1}{2\mechanical{m}}\sum_i
\bigl[\mechanical{\widehat{\mathbf p}}_i\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_i)
+\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_i)\mechanical{\widehat{\mathbf p}}_i\bigr].
$$
With number density $n(\mechanical{\mathbf r})=\sum_i\delta^{(3)}(\mechanical{\mathbf r}-\mechanical{\mathbf r}_i)$, the kinetic number current is $\mathbf j-(\electric{q}/\mechanical{m}c)n\magnetic{\mathbf A}$. Multiplication by the charge gives the electric current. The part of the Hamiltonian linear in the potentials is
$$
H_{\mathrm{int}}^{(1)}=\int d^3\mechanical{\mathbf r}\,
\left[\electric{\rho}_q\electric{\phi}-\frac{\electric{q}}c\mathbf j\cdot\magnetic{\mathbf A}\right].
$$
Here the densities are operators on the particle coordinates. For the transverse field, $\electric{\phi}=0$. The term quadratic in $\magnetic{\mathbf A}$ is separate from the linear interaction used below.

##### Absorption of light

Expand the vector potential in Fourier modes of polarization $\boldsymbol\epsilon_s$:
$$
\magnetic{\mathbf A}(\mechanical{\mathbf r},\mechanical{t})
=\int d^3\signal{\mathbf k}\sum_s
\left[A(\signal{\mathbf k},s)\boldsymbol\epsilon_s
e^{i(\signal{\mathbf k}\cdot\mechanical{\mathbf r}-\signal{\omega}\mechanical{t})}
+\mathrm{h.c.}\right].
$$
The Hermitian conjugate supplies the negative-frequency partner. Fourier transformation of the current yields
$$
\begin{aligned}
\mathbf j(\signal{\mathbf k})
&=\int d^3\mechanical{\mathbf r}\,e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}\mathbf j(\mechanical{\mathbf r})\\
&=\frac1{2\mechanical{m}}\sum_i
\left[\mechanical{\widehat{\mathbf p}}_i e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}_i}
+e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}_i}\mechanical{\widehat{\mathbf p}}_i\right].
\end{aligned}
$$
In the product of the Fourier representations, the position integral sets the two wave vectors to opposite values. Thus
$$
H_{\mathrm{int}}^{(1)}
=-\frac{\electric{q}}c\int d^3\signal{\mathbf k}\sum_s
\left[A(\signal{\mathbf k},s)\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})
e^{-i\signal{\omega}\mechanical{t}}+\mathrm{h.c.}\right].
$$

For the midterm, review the interaction of matter and light in Sakurai chapter 5 or Baym chapter 12. Be prepared to write the Hamiltonian and derive gauge invariance.

For Baym problem 12.1, find the ground-state wavefunction and the excited or continuum wavefunctions, then calculate the perturbation matrix elements. The binding potential is a spherical well of radius $\mechanical{R}$ and depth $\energy{V}_0$.

![[Kyle Kabasares - Quantum Mechanics II - Finite radial well.png|**Fig. 15** The radial well has potential $-\energy{V}_0$ inside $\mechanical{R}$ and zero outside.]]

A uniform oscillating electric field can be taken along the $z$-axis because the unperturbed well is spherically symmetric. With signed charge $\electric{q}$ and field amplitude $\electric{\mathcal E}$, the force is $\electric{q}\electric{\mathcal E}\cos(\signal{\omega}\mechanical{t})$ along that axis. The perturbing potential energy is
$$
-\electric{q}\electric{\mathcal E}\mechanical{z}\cos(\signal{\omega}\mechanical{t})
=-\electric{q}\electric{\mathcal E}\mechanical{r}\cos\theta\cos(\signal{\omega}\mechanical{t}).
$$
The angular factor is proportional to $Y_{10}=\sqrt{3/(4\pi)}\cos\theta$.

The ground state is radial, with an angular factor constant over the sphere. Its energy satisfies $-\energy{V}_0<\energy{E}_0<0$ and its radial function obeys
$$
-\frac{\hbar^2}{2\mechanical{m}\mechanical{r}^2}
\frac{d}{d\mechanical{r}}\left(\mechanical{r}^2\frac{dR_0}{d\mechanical{r}}\right)
+\energy{V}(\mechanical{r})R_0=\energy{E}_0 R_0.
$$
Match both the wavefunction and its first radial derivative at the finite wall. A continuum spherical wave has the form $R_{k\ell}(\mechanical{r})Y_{\ell m}(\theta,\phi)$. Outside the well the radial solutions are spherical Bessel combinations and have a sinusoidal large-radius behavior divided by $\mechanical{r}$, with a phase that depends on the partial wave. The continuum energy is $\hbar^2\signal{k}^2/(2\mechanical{m})$. Angular momentum adds a centrifugal term to the radial equation. The continuum can be labeled by $\signal{k},\ell,m$ or by Cartesian wave-vector components.

![[Kyle Kabasares - Quantum Mechanics II - Wave vector shell.png|**Fig. 16** Continuum states in a thin shell have wave numbers from $\signal{k}$ to $\signal{k}+d\signal{k}$.]]

A plane wave can be expanded in spherical waves:
$$
e^{i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}
=4\pi\sum_{\ell,m} i^\ell j_\ell(\signal{k}\mechanical{r})
Y_{\ell m}^*(\theta_k,\phi_k)Y_{\ell m}(\theta,\phi).
$$
Here $(\theta_k,\phi_k)$ are the wave-vector angles and $(\theta,\phi)$ are the position angles.

With initial angular factor $Y_{00}=1/\sqrt{4\pi}$, the angular integral for the dipole perturbation is
$$
\int d\Omega\,Y_{\ell m}^*(\theta,\phi)\cos\theta\,Y_{00}
=\frac{1}{\sqrt3}\delta_{\ell1}\delta_{m0}.
$$
The radial factor is $\int_0^\infty \mechanical{r}^3 R_{k\ell}^*(\mechanical{r})R_0(\mechanical{r})\,d\mechanical{r}$. It is multiplied by the field and charge factors. Only the partial wave $\ell=1,m=0$ contributes.

The absorption rate to a continuum state contains
$$
\frac{2\pi}{\hbar}|\energy{V}_{k,0}^{(-)}|^2
\delta\!\left(\energy{E}(\signal{k})-\energy{E}_0-\hbar\signal{\omega}\right),
$$
where $\energy{V}_{k,0}^{(-)}$ is the coefficient of $e^{-i\signal{\omega}\mechanical{t}}$. In a radial basis normalized with respect to $d\signal{k}$, integrate this expression over $\signal{k}$. The delta contributes $1/|d\energy{E}/d\signal{k}|$ at $\energy{E}=\energy{E}_0+\hbar\signal{\omega}$ when this energy is in the continuum. The speed is $\mechanical{v}=\hbar\signal{k}/\mechanical{m}$. A region of size $\mechanical{\ell}$ has crossing time $\mechanical{\ell}/\mechanical{v}=\mechanical{m}\mechanical{\ell}/(\hbar\signal{k})$.

For a two-body hydrogen model, the Gaussian-unit Hamiltonian includes the proton and electron kinetic energies and the Coulomb attraction $-\electric{e}^2/\lVert\mechanical{\mathbf r}_e-\mechanical{\mathbf r}_p\rVert$, where $\electric{e}$ is the positive charge magnitude. In a uniform field the external term is $-\electric{q}_e\electric{\mathcal E}(\mechanical{z}_e-\mechanical{z}_p)\cos(\signal{\omega}\mechanical{t})$ for signed electron charge $\electric{q}_e$. The projection $\mechanical{z}_e-\mechanical{z}_p=\mechanical{r}\cos\theta$ uses the relative vector from proton to electron. Reversing the relative vector reverses the projection.

Let the relative coordinate be $\mechanical{\mathbf r}=\mechanical{\mathbf r}_e-\mechanical{\mathbf r}_p$. Its vertical component is $\mechanical{\mathbf r}\cdot\widehat{\mathbf z}=\mechanical{r}\cos\theta$. The center-of-mass transformation separates the Hamiltonian as
$$
H=\frac{\mechanical{\mathbf p}_{\mathrm{rel}}^2}{2\mechanical{\mu}}
+\frac{\mechanical{\mathbf P}^2}{2\mechanical{M}}
-\frac{\electric{e}^2}{\mechanical{r}}
-\electric{q}_e\electric{\mathcal E}\cos(\signal{\omega}\mechanical{t})\,\mechanical{r}\cos\theta,
$$
where $\mechanical{M}=\mechanical{m}_e+\mechanical{m}_p$ and $\mechanical{\mu}=\mechanical{m}_e\mechanical{m}_p/\mechanical{M}$.

![[Kyle Kabasares - Quantum Mechanics II - Electron proton relative position.png|**Fig. 17** The displacement from the proton to the electron is the difference of their position vectors.]]

The wave number $\signal{k}$ labels the effective particle of reduced mass. In the center-of-mass frame, $\mechanical{\mathbf p}_e=-\mechanical{\mathbf p}_p$, and the momentum conjugate to $\mechanical{\mathbf r}$ is $\mechanical{\mathbf p}_{\mathrm{rel}}=\mechanical{\mathbf p}_e=\hbar\signal{\mathbf k}$. The momentum difference $\mechanical{\mathbf p}_e-\mechanical{\mathbf p}_p$ is twice this value in that frame. The corresponding relative kinetic energy satisfies
$$
\frac{\hbar^2\signal{k}^2}{2\mechanical{\mu}}
=\frac{\hbar^2\signal{k}^2}{2\mechanical{m}_e}
+\frac{\hbar^2\signal{k}^2}{2\mechanical{m}_p}.
$$

For absorption of light, the linear coupling is $-(\electric{q}/c)\int d^3\mechanical{\mathbf r}\,\mathbf j\cdot\magnetic{\mathbf A}$. The symmetrized current contains both orders of the momentum operator and the position delta function. Its Fourier coefficient has the same two orders with each delta replaced by $e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}_i}$. The real vector potential is expanded in polarized plane waves and their Hermitian conjugates. The Fourier coefficients and the polarization vectors can be complex even when the field is real.

Multiplying the current and field expansions and integrating over position gives a delta proportional to $\delta^{(3)}(\signal{\mathbf k}+\signal{\mathbf k}')$. After evaluating one wave-vector integral, the absorption term is proportional to
$$
-\frac{\electric{q}}c\int d^3\signal{\mathbf k}\sum_s
A(\signal{\mathbf k},s)\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})
e^{-i\signal{\omega}\mechanical{t}},
$$
with its Hermitian conjugate completing the Hamiltonian. The matrix element of this term determines the transition from state $i$ to state $n$ with absorption at wave vector $\signal{\mathbf k}$.

For one incident mode, the absorption rate from $\lvert i\rangle$ to $\lvert n\rangle$ is proportional to
$$
\frac{2\pi}{\hbar}\,
\delta(\energy{E}_n-\energy{E}_i-\hbar\signal{\omega})\,
\frac{\electric{q}^2}{c^2}
|A(\signal{\mathbf k},s)|^2
|\langle n\vert\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})\vert i\rangle|^2.
$$
For a wave packet, integrate over $d^3\signal{\mathbf k}/(2\pi)^3$ in the notes' Fourier convention and sum over polarizations. Since $\signal{k}=\signal{\omega}/c$, the measure is
$$
d^3\signal{\mathbf k}=\signal{k}^2\,d\signal{k}\,d\Omega
=\frac{\signal{\omega}^2}{c^3}\,d\signal{\omega}\,d\Omega.
$$
The delta evaluates the integrand at $\signal{\omega}=(\energy{E}_n-\energy{E}_i)/\hbar$ and adds a factor $1/\hbar$. The time-averaged energy density and Poynting magnitude of a Gaussian-unit plane wave with vector potential amplitude $A$ and its conjugate are $\energy{u}=\signal{\omega}^2|A|^2/(2\pi c^2)$ and $\energy{S}=c\energy{u}$.

Expressing the mode strength in terms of the spectral intensity $\energy{I}(\signal{\omega})$, the notes give the absorption rate for the specified direction and polarization as
$$
\Gamma_{i\to n}^{\mathrm{abs}}
=\frac{4\pi^2\electric{q}^2}{\hbar^2 c\signal{\omega}^2}
\energy{I}(\signal{\omega})
|\langle n\vert\boldsymbol\epsilon_s\cdot\mathbf j(-\signal{\mathbf k})\vert i\rangle|^2.
$$

##### Induced emission

For the reverse transition, the matrix element is $\langle i\vert\boldsymbol\epsilon_s^*\cdot\mathbf j(\signal{\mathbf k})\vert n\rangle$. It is the complex conjugate of the absorption matrix element because $\mathbf j(\signal{\mathbf k})^\dagger=\mathbf j(-\signal{\mathbf k})$. Hence the induced emission and absorption rates are equal for the same incident field and the same pair of states.

In a box at fixed temperature, a photon mode has mean occupation
$$
\overline N(\signal{k})
=\frac{\sum_{N=0}^\infty N e^{-N\hbar c\signal{k}/(k_B\thermal{T})}}
{\sum_{N=0}^\infty e^{-N\hbar c\signal{k}/(k_B\thermal{T})}}
=\frac1{e^{\hbar c\signal{k}/(k_B\thermal{T})}-1}.
$$
For two individual atomic states, their equilibrium probability ratio is $P_n/P_i=e^{-(\energy{E}_n-\energy{E}_i)/(k_B\thermal{T})}$.

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\signal{\omega}$, $\signal{\omega}_j$ | $\unit{rad\,s^{-1}}$ | Angular frequencies | Common unperturbed frequency and frequencies of the new oscillator modes. |
| $\mechanical{t}$, $\mechanical{t}_0$, $\Delta\mechanical{t}$ | $\unit{s}$ | Time | Observation time, initial or switching time, and elapsed time. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Particle mass. |
| $\energy{E}$, $\energy{E}_0$ | $\unit{J}$ | Energy eigenvalue | Energy of an eigenstate, including the common energy of a degenerate subspace. |
| $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Vertical position and radius | Position along the drive direction and distance from the origin. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\Gamma$ | $\unit{s^{-1}}$ | Transition rate | Leading probability per unit time for transition into the continuum. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular measure for the direction of a final momentum. |
| $\signal{\mathbf k}$, $\signal{k}_j$ | $\unit{m^{-1}}$ | Wave vector and components | Spatial frequencies of the momentum eigenfunction. |
| $\mechanical{\mathbf p}$, $\mechanical{\mathbf p}'$ | $\unit{kg\,m\,s^{-1}}$ | Momentum vectors | Momentum before and after scattering. |
| $N$ | 1 | Number of states | Count of momentum states in the box. |
| $\mathcal E$ | $\unit{N}$ | Electric driving coefficient | Charge-weighted field strength with the sign convention used in the ionization example. |
| $\eta$ | $\unit{s^{-1}}$ | Switching rate | Parameter setting the speed of the smooth switch-on. |
| $\electric{\phi}$ | $\unit{V}$ | Scalar electric potential | Time component of the four-potential multiplied by the speed of light. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Spatial part of the electromagnetic four-potential. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\electric{\rho}_q$ | $\unit{C\,m^{-3}}$ | Charge density | Charge per unit volume. |
| $\electric{\mathbf J}$ | $\unit{A\,m^{-2}}$ | Current density | Charge flow per unit area. |
| $\electric{E}^i$ | $\unit{V\,m^{-1}}$ | Electric field component | Component of the electric field in the field tensor. |
| $\magnetic{B}^k$ | $\unit{T}$ | Magnetic field component | Component of the magnetic flux density in the field tensor. |
| $\electric{\varepsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Constant relating charge density to the divergence of the electric field. |
| $\magnetic{\mu}_0$ | $\unit{H\,m^{-1}}$ | Vacuum permeability | Constant multiplying the four-current in the sourced field equations. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | Signed charge of the particle, with the value expressed in the unit system used for the potentials. |
| $\mechanical{\widehat{\mathbf p}}$ | $\unit{kg\,m\,s^{-1}}$ | Canonical momentum | Generator of spatial translations in the position representation. |
| $\mechanical{\boldsymbol\pi}$ | $\unit{kg\,m\,s^{-1}}$ | Kinetic momentum | Mass times velocity, with gauge-invariant matrix elements. |
| $n(\mechanical{\mathbf r})$ | $\unit{m^{-3}}$ | Number density | Particle count per unit volume. |
| $\mathbf j(\mechanical{\mathbf r})$ | $\unit{m^{-2}\,s^{-1}}$ | Canonical number current | Symmetrized momentum density divided by mass. |
| $\boldsymbol\epsilon_s$ | 1 | Polarization vector | Unit vector specifying the polarization of a transverse wave mode. |
| $\mechanical{R}$ | $\unit{m}$ | Well radius | Radius at which the finite binding potential changes. |
| $\energy{V}_0$, $\energy{V}$ | $\unit{J}$ | Well depth and potential energy | Positive depth and the signed binding potential as a function of radius. |
| $\electric{\mathcal E}$ | $\unit{V\,m^{-1}}$ | Electric field amplitude | Amplitude of the uniform oscillating field. |
| $R_0$, $R_{k\ell}$ | — | Radial wavefunctions | Radial factors for the ground state and partial-wave continuum states. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Particle speed | Speed associated with the continuum wave number. |
| $\mechanical{\ell}$ | $\unit{m}$ | Crossing length | Size of the region used to estimate a transit time. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge magnitude | Positive magnitude of the proton or electron charge. |
| $\mechanical{\mu}$, $\mechanical{M}$ | $\unit{kg}$ | Reduced and total mass | Mass in the relative-motion and center-of-mass kinetic terms. |
| $\mechanical{\mathbf p}_{\mathrm{rel}}$, $\mechanical{\mathbf P}$ | $\unit{kg\,m\,s^{-1}}$ | Relative and total momentum | Momenta conjugate to the relative and center-of-mass coordinates. |
| $\energy{u}$ | $\unit{J\,m^{-3}}$ | Radiation energy density | Time-averaged energy per unit volume. |
| $\energy{S}$ | $\unit{W\,m^{-2}}$ | Poynting magnitude | Time-averaged energy flux of the plane wave. |
| $\energy{I}(\signal{\omega})$ | $\unit{W\,m^{-2}\,(\mathrm{rad\,s^{-1}})^{-1}}$ | Spectral intensity | Radiation intensity per unit angular frequency. |
| $\overline N(\signal{k})$ | 1 | Mean mode occupation | Thermal average of the photon number in one mode. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Temperature of the equilibrium radiation and atom. |
| $k_B$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Converts temperature to the thermal energy scale. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mechanical{v}$ | $\unit{m^3\,mol^{-1}}$ | Molar volume | Container volume per mole in the gas equations. |
