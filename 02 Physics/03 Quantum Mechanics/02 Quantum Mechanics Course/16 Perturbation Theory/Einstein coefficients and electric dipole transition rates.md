---
title: "Einstein coefficients and electric dipole transition rates"
---

> [!TLDR]
> Use photon balance and dipole matrix elements to relate spontaneous and induced emission and interpret transition strengths.

## Worked lecture material

At thermal equilibrium the mean photon occupation is constant. For a pair of atomic levels $i,n$ and one resonant mode, absorption removes photons at rate $B\overline N P_i$, induced emission adds them at rate $B\overline N P_n$, and spontaneous emission adds them at rate $AP_n$. Here $B$ is the induced transition rate per photon in that mode. The balance condition is
$$
-B\overline N P_i+B\overline N P_n+AP_n=0,
\qquad
A=B\overline N\left(\frac{P_i}{P_n}-1\right).
$$
At resonance, $\energy{E}_n-\energy{E}_i=\hbar\signal{\omega}$. The equilibrium ratio $P_i/P_n=e^{\hbar\signal{\omega}/(k_B\thermal{T})}$ and the mean occupation $\overline N=[e^{\hbar\signal{\omega}/(k_B\thermal{T})}-1]^{-1}$ give $A=B$ in this per-mode normalization.

For the midterm, evaluate the time integrals. Matrix elements may be left in integral form. The emphasis is on the treatment of time-dependent perturbations.

For the thermal photon occupation, $\hbar\signal{\omega}=\hbar c\signal{k}$ and the notes set $k_B=1$. With $\alpha=\hbar c\signal{k}/(k_B\thermal{T})$, the denominator is the geometric series $\sum_{N\geq0}e^{-N\alpha}=1/(1-e^{-\alpha})$. The numerator follows from $Ne^{-N\alpha}=-d(e^{-N\alpha})/d\alpha$. Taking the ratio gives $\overline N=1/(e^\alpha-1)$.

The February 12 lecture revisits the photon balance for a lower atomic state $0$ and an upper state $n$. Their occupation probabilities satisfy $P_n/P_0=\exp[-(\energy{E}_n-\energy{E}_0)/(k_B\thermal{T})]$. For a field with $N(\signal{k})$ photons, the three contributions to the photon-number derivative are
$$
\left.\frac{dN}{d\mechanical{t}}\right|_{\mathrm{abs}}=-BN(\signal{k})P_0,\qquad
\left.\frac{dN}{d\mechanical{t}}\right|_{\mathrm{ind}}=BN(\signal{k})P_n,\qquad
\left.\frac{dN}{d\mechanical{t}}\right|_{\mathrm{sp}}=AP_n.
$$
The rates linear in the photon number can be averaged using $\overline N(\signal{k})$. Setting their sum to zero gives
$$
(A+B\overline N)P_n=B\overline N P_0,\qquad
A=B\frac{\exp[(\energy{E}_n-\energy{E}_0)/(k_B\thermal{T})]-1}
{\exp[\hbar c\signal{k}/(k_B\thermal{T})]-1}.
$$
At resonance the two exponential factors match. The induced emission rate is proportional to the spectral intensity $\energy{I}(\signal{\omega})$ times $|\langle 0\vert\mathbf j(\signal{\mathbf k})\cdot\boldsymbol\epsilon_s^*\vert n\rangle|^2$, with the same prefactor as for absorption on [[Light–matter coupling, absorption, and induced emission#Induced emission|the section on Induced emission]]. At fixed frequency, the intensity is proportional to the squared magnitude of the radiation amplitude.

Equating the Gaussian-unit energy of a mode to $N\hbar\signal{\omega}$ gives the notes' continuum mode-strength normalization
$$
|A(\signal{\mathbf k},s)|^2
=\frac{2\pi\hbar c^2}{\signal{\omega}}N(\signal{\mathbf k},s).
$$
For a single discrete plane wave with one-photon energy distributed over a box, the squared field amplitude has an additional inverse-volume factor. In the continuum convention the induced emission rate is
$$
\Gamma_{n\to i}^{\mathrm{ind}}
=\frac{2\pi\electric{q}^2\signal{\omega}^2}{\hbar^2 c^2(2\pi c)^3}
\int d\Omega\sum_s |A(\signal{\mathbf k},s)|^2
|\langle i\vert\mathbf j(\signal{\mathbf k})\cdot\boldsymbol\epsilon_s^*\vert n\rangle|^2,
$$
evaluated at $\energy{E}_n-\energy{E}_i=\hbar c\signal{k}$. This suggests treating the electromagnetic field as a collection of harmonic oscillators and quantizing its modes.

A scalar-field analogy starts with a Lagrangian density proportional to $(\partial_{\mechanical{t}}\varphi)^2-(\nabla\varphi)^2$ in units with $c=1$. Discretize space into sites. With spacing absorbed into the units, the expression becomes a sum of $\dot\varphi_i^2-(\varphi_{i+1}-\varphi_i)^2$. The squared differences couple neighboring sites, and a normal-mode transformation gives independent oscillators.

##### Electric dipole radiation

Put the origin at the atom's center. If the wavelength is much larger than the atom, then $|\signal{\mathbf k}\cdot\mechanical{\mathbf r}|\ll1$ where the current matrix element is appreciable. Expand
$$
e^{-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}}
=1-i\signal{\mathbf k}\cdot\mechanical{\mathbf r}
+O((\signal{\mathbf k}\cdot\mechanical{\mathbf r})^2).
$$
The leading term in $\langle0\vert\mathbf j(\signal{\mathbf k})\vert n\rangle$ is the spatial integral of $\langle0\vert\mathbf j(\mechanical{\mathbf r})\vert n\rangle$. For identical particles, the integrated number current is
$$
\mathbf j_0=\sum_i\frac{\mechanical{\widehat{\mathbf p}}_i}{\mechanical{m}}
=\frac1{i\hbar}[\mechanical{\mathbf R},H_0],
\qquad
\mechanical{\mathbf R}=\sum_i\mechanical{\mathbf r}_i.
$$
The terms with additional powers of $\signal{\mathbf k}\cdot\mechanical{\mathbf r}$ are dropped in the electric dipole approximation.

For $H_0\lvert n\rangle=\energy{E}_n\lvert n\rangle$,
$$
\langle0\vert\mathbf j_0\vert n\rangle
=\frac{\energy{E}_n-\energy{E}_0}{i\hbar}\langle0\vert\mechanical{\mathbf R}\vert n\rangle
=-i\signal{\omega}\,\mathbf d_{0n},
\qquad
\mathbf d_{0n}=\langle0\vert\mechanical{\mathbf R}\vert n\rangle.
$$
The notes factor out the charge from $\mathbf d_{0n}$, so the electric transition dipole is $\electric{q}\mathbf d_{0n}$. The diagonal matrix element $\electric{q}\langle n\vert\mechanical{\mathbf R}\vert n\rangle$ is the expectation value of the electric dipole in state $n$. The off-diagonal matrix element governs radiation. The Gaussian-unit power into a polarization and direction is
$$
\frac{d\energy{P}_{\mathrm{rad}}}{d\Omega}
=\frac{\signal{\omega}^4\electric{q}^2}{2\pi c^3}
|\mathbf d_{0n}\cdot\boldsymbol\epsilon_s^*|^2.
$$
Write $\mathbf d_{0n}=\mathbf d_{0n,\perp}+(\mathbf d_{0n}\cdot\widehat{\mathbf k})\widehat{\mathbf k}$. Only the transverse part enters the dot product with $\boldsymbol\epsilon_s$.

For a rotationally invariant $H_0$, the initial and final atomic states can be chosen as eigenstates of $\mechanical{\mathbf L}^2$ and $\mechanical{L}_z$, with labels $n,\ell,m$. The orbital angular momentum is $\mechanical{\mathbf L}=\sum_i\mechanical{\mathbf r}_i\times\mechanical{\widehat{\mathbf p}}_i$. Its $z$ component commutes with the $z$ components of position and momentum. The perturbation can change the angular momentum quantum numbers subject to selection rules.

For the dipole matrix element $\langle n'\ell'm'\vert\mechanical{\mathbf R}\vert n\ell m\rangle$, the $z$ component obeys a selection rule. Since $[\mechanical{L}_z,\mechanical{R}_z]=0$, take its matrix element between angular momentum eigenstates:
$$
0=\langle n'\ell'm'\vert[\mechanical{L}_z,\mechanical{R}_z]\vert n\ell m\rangle
=\hbar(m'-m)\langle n'\ell'm'\vert\mechanical{R}_z\vert n\ell m\rangle.
$$
Thus the $z$-component matrix element is zero when $m'\ne m$. If $m'=m$, this commutator gives no constraint on its magnitude.

The notes remark that Yuri chooses exam problems to teach something. The lecture reviews the electric dipole power and the transverse projection. With $\widehat{\mathbf k}\cdot\boldsymbol\epsilon_s=0$,
$$
\mathbf d_{0n,\perp}=\mathbf d_{0n}-(\mathbf d_{0n}\cdot\widehat{\mathbf k})\widehat{\mathbf k},
\qquad
\mathbf d_{0n,\perp}\cdot\boldsymbol\epsilon_s
=\mathbf d_{0n}\cdot\boldsymbol\epsilon_s.
$$
The angular power is proportional to $\signal{\omega}^4|\mathbf d_{0n}\cdot\boldsymbol\epsilon_s^*|^2$. The notes repeat the derivation of $[\mechanical{L}_z,\mechanical{R}_z]=0$ using $\mechanical{\mathbf L}=\mechanical{\mathbf r}\times\mechanical{\mathbf p}$, and then consider a dipole along the $z$-axis to study its radiation pattern.

For $m'=m$, the dipole lies along the $z$ direction if it is nonzero. Viewed in a direction $\widehat{\mathbf k}$ at angle $\theta$ from that axis, its squared transverse projection is $|\mathbf d_{0n}|^2\sin^2\theta$.

![[Kyle Kabasares - Quantum Mechanics II - Dipole observation angle.png|**Fig. 18** The angle between the dipole axis and the observation direction sets the transverse projection.]]

For the transverse components, use
$$
[\mechanical{L}_z,\mechanical{R}_x]=i\hbar\mechanical{R}_y,\qquad
[\mechanical{L}_z,\mechanical{R}_y]=-i\hbar\mechanical{R}_x.
$$
Write $X=\langle\ell'm'\vert\mechanical{R}_x\vert\ell m\rangle$ and $Y=\langle\ell'm'\vert\mechanical{R}_y\vert\ell m\rangle$. Acting with $\mechanical{L}_z$ on the bra and ket gives $(m'-m)X=iY$ and $(m'-m)Y=-iX$. Therefore $[(m'-m)^2-1]X=0$, so a nonzero transverse matrix element requires $m'-m=\pm1$. Its components are proportional to $(1,\mp i,0)$ for $m'-m=\pm1$.

For propagation along the positive $z$ direction, the two signs couple to opposite circular polarizations. The lecture calls the photon right circular for emission with $m'=m-1$ and left circular for $m'=m+1$. The decrease of the atomic $z$ projection in the first case is one unit of $\hbar$.

![[Kyle Kabasares - Quantum Mechanics II - Circular polarization geometry.png|**Fig. 19** The sketch relates the wave direction and circular polarization to the change of the atomic magnetic quantum number.]]

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
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\Gamma$ | $\unit{s^{-1}}$ | Transition rate | Leading probability per unit time for transition into the continuum. |
| $\Omega$ | $\unit{sr}$ | Solid angle | Angular measure for the direction of a final momentum. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $\signal{\mathbf k}$, $\signal{k}_j$ | $\unit{m^{-1}}$ | Wave vector and components | Spatial frequencies of the momentum eigenfunction. |
| $\mechanical{\mathbf p}$, $\mechanical{\mathbf p}'$ | $\unit{kg\,m\,s^{-1}}$ | Momentum vectors | Momentum before and after scattering. |
| $N$ | 1 | Number of states | Count of momentum states in the box. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | Signed charge of the particle, with the value expressed in the unit system used for the potentials. |
| $\mechanical{\widehat{\mathbf p}}$ | $\unit{kg\,m\,s^{-1}}$ | Canonical momentum | Generator of spatial translations in the position representation. |
| $\mathbf j(\mechanical{\mathbf r})$ | $\unit{m^{-2}\,s^{-1}}$ | Canonical number current | Symmetrized momentum density divided by mass. |
| $\boldsymbol\epsilon_s$ | 1 | Polarization vector | Unit vector specifying the polarization of a transverse wave mode. |
| $\mechanical{R}$ | $\unit{m}$ | Well radius | Radius at which the finite binding potential changes. |
| $\energy{I}(\signal{\omega})$ | $\unit{W\,m^{-2}\,(\mathrm{rad\,s^{-1}})^{-1}}$ | Spectral intensity | Radiation intensity per unit angular frequency. |
| $\overline N(\signal{k})$ | 1 | Mean mode occupation | Thermal average of the photon number in one mode. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Temperature of the equilibrium radiation and atom. |
| $k_B$ | $\unit{J\,K^{-1}}$ | Boltzmann constant | Converts temperature to the thermal energy scale. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mechanical{\mathbf R}$ | $\unit{m}$ | Sum of position vectors | Coordinate sum proportional to the dipole moment for equal charges. |
| $\mathbf j_0$ | $\unit{m\,s^{-1}}$ | Integrated number current | Sum of velocities when the vector potential is absent. |
| $\mathbf d_{0n}$ | $\unit{m}$ | Transition position matrix element | Electric dipole matrix element with the common charge factored out. |
| $\electric{q}\mathbf d_{0n}$ | $\unit{C\,m}$ | Transition electric dipole moment | Off-diagonal matrix element of the electric dipole. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
