---
title: "Spin in magnetic fields and atomic Zeeman splitting"
---

> [!TLDR]
> Use the magnetic interaction to calculate spin evolution and atomic level shifts, then review related calculation methods.

## Worked lecture material

Write the spin coupling in terms of ladder operators or in terms of the total spin $\mechanical{\mathbf S}_T=\mechanical{\mathbf S}_1+\mechanical{\mathbf S}_2$:

$$
\begin{aligned}
\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2
&=\tfrac12(\mechanical{S}_{+1}\mechanical{S}_{-2}+\mechanical{S}_{-1}\mechanical{S}_{+2})
+\mechanical{S}_{z1}\mechanical{S}_{z2}\\
&=\tfrac12(\mechanical{\mathbf S}_T^2-\mechanical{\mathbf S}_1^2-\mechanical{\mathbf S}_2^2).
\end{aligned}
$$

The triplet therefore has spin-coupling energy $a=A\hbar^2/4$, and the singlet has $\tilde a=-3A\hbar^2/4$. For fields $\magnetic{B}_i\hat{\mathbf z}$, set $b_i=-\electric{q}\hbar\magnetic{B}_i/(\mechanical{m}\mechanical{c})$. In the ordered basis $\lvert1,1\rangle,\lvert1,0\rangle,\lvert1,-1\rangle,\lvert0,0\rangle$ the Hamiltonian is

$$
H=
\begin{pmatrix}
a+(b_1+b_2)/2&0&0&0\\
0&a&0&(b_1-b_2)/2\\
0&0&a-(b_1+b_2)/2&0\\
0&(b_1-b_2)/2&0&\tilde a
\end{pmatrix}.
$$

This places the field-difference term between the two $m_s=0$ states, using the sign of the singlet on the preceding page. It vanishes for a uniform field.

For the homework, start from the symmetric gauge $\magnetic{\mathbf A}=\tfrac12\magnetic{\mathbf B}\times\mechanical{\mathbf r}$. For $\magnetic{\mathbf B}=\magnetic{B}\hat{\mathbf z}$, use the gauge function $\chi=-\magnetic{B}\mechanical{x}\mechanical{y}/2$ to obtain

$$
\magnetic{\mathbf A}'=\magnetic{\mathbf A}+\nabla\chi
=\frac{\magnetic{B}}{2}(-\mechanical{y},\mechanical{x},0)
+\frac{\magnetic{B}}{2}(-\mechanical{y},-\mechanical{x},0)
=(-\magnetic{B}\mechanical{y},0,0).
$$

Adding the two vectors resolves the factor of two in the handwritten result. The wavefunction transforms as $\psi'=\exp(i\electric{q}\chi/(\hbar\mechanical{c}))\psi$. For an electron, this is $\psi'=\exp(i\electric{e}\magnetic{B}\mechanical{x}\mechanical{y}/(2\hbar\mechanical{c}))\psi$.

##### Spin-$1/2$ particle in a magnetic field

Write the state as a spinor wavefunction with up and down components. A superposition of normalized orthogonal spin states has coefficients $c_1,c_2$ with $\lvert c_1\rvert^2+\lvert c_2\rvert^2=1$. With the coefficients absorbed into the components, the Schrödinger equation is

$$
i\hbar\frac{\partial}{\partial\mechanical{t}}
\begin{pmatrix}\psi_\uparrow\\\psi_\downarrow\end{pmatrix}
=
\left\{
\left[\frac{1}{2\mechanical{m}}\left(-i\hbar\nabla-\frac{\electric{q}}{\mechanical{c}}\magnetic{\mathbf A}\right)^2
+V(\mechanical{\mathbf r},\mechanical{t})\right]I_2
-\frac{g\electric{q}\hbar}{4\mechanical{m}\mechanical{c}}\boldsymbol{\sigma}\cdot\magnetic{\mathbf B}
\right\}
\begin{pmatrix}\psi_\uparrow\\\psi_\downarrow\end{pmatrix}.
$$

The three Pauli matrices give

$$
\boldsymbol{\sigma}\cdot\magnetic{\mathbf B}=
\begin{pmatrix}
\magnetic{B}_z&\magnetic{B}_x-i\magnetic{B}_y\\
\magnetic{B}_x+i\magnetic{B}_y&-\magnetic{B}_z
\end{pmatrix}.
$$

Neglect the orbital motion and retain $H_{\mathrm{sp}}=-g\electric{q}\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}/(2\mechanical{m}\mechanical{c})$. A spin-independent energy eigenvalue $\energy{E}_n$ contributes a common phase $e^{-i\energy{E}_n\mechanical{t}/\hbar}$. The spin operator evolved under $H_{\mathrm{sp}}$ obeys

$$
i\hbar\frac{d\mechanical{S}_i}{d\mechanical{t}}
=[\mechanical{S}_i,H_{\mathrm{sp}}]
=-\frac{g\electric{q}}{2\mechanical{m}\mechanical{c}}
[\mechanical{S}_i,\mechanical{S}_j]\magnetic{B}_j.
$$

Using $[\mechanical{S}_i,\mechanical{S}_j]=i\hbar\epsilon_{ijk}\mechanical{S}_k$ gives

$$
\frac{d\mechanical{S}_i}{d\mechanical{t}}
=-\frac{g\electric{q}}{2\mechanical{m}\mechanical{c}}
\epsilon_{ijk}\magnetic{B}_j\mechanical{S}_k.
$$

The $i\hbar$ from the commutator cancels the $i\hbar$ on the left.

In vector form the spin precession equation is the torque equation:

$$
\frac{d\mechanical{\mathbf S}}{d\mechanical{t}}
=\frac{g\electric{q}}{2\mechanical{m}\mechanical{c}}\mechanical{\mathbf S}\times\magnetic{\mathbf B}
=\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}\times\magnetic{\mathbf B}.
$$

##### Zeeman effect in atoms

For several electrons, sum the orbital and spin angular momenta over all electrons:

$$
\mechanical{\mathbf L}=\sum_i\mechanical{\boldsymbol{\ell}}_i,\qquad
\mechanical{\mathbf S}=\sum_i\mechanical{\mathbf S}_i.
$$

In a uniform field and with $g=2$, expanding the minimal-coupling kinetic energy and adding the spin term gives

$$
H=H_0+
\frac{\magnetic{\mu}_B}{\hbar}\left(\mechanical{\mathbf L}+2\mechanical{\mathbf S}\right)\cdot\magnetic{\mathbf B}
+\frac{\electric{e}^2}{8\mechanical{m}_e\mechanical{c}^2}\sum_i
\lvert\magnetic{\mathbf B}\times\mechanical{\mathbf r}_i\rvert^2.
$$

Here $H_0$ contains the kinetic energy and the field-free interactions. The factors of $1/\hbar$ convert the dimensionful angular momenta into the dimensionless convention implicit in the handwritten Zeeman term. In a weak field along $z$, the linear shift is

$$
\Delta\energy{E}^{(1)}=
\frac{\magnetic{\mu}_B\magnetic{B}}{\hbar}
\left(\langle\mechanical{L}_z\rangle+2\langle\mechanical{S}_z\rangle\right)
=
\frac{\magnetic{\mu}_B\magnetic{B}}{\hbar}
\left(\langle\mechanical{J}_z\rangle+\langle\mechanical{S}_z\rangle\right).
$$

Use simultaneous eigenstates of $\mechanical{\mathbf J}^2,\mechanical{J}_z,\mechanical{\mathbf L}^2,\mechanical{\mathbf S}^2$ for the unperturbed atom with spin–orbit coupling in the angular-momentum coupling scheme considered here. The axial symmetry preserves $\mechanical{J}_z$, so $\langle\mechanical{J}_z\rangle=\hbar m_j$. The remaining task is to calculate $\langle\mechanical{S}_z\rangle$. Within a fixed total-angular-momentum multiplet, the expectation of $\mechanical{\mathbf S}$ is parallel or antiparallel to that of $\mechanical{\mathbf J}$.

Within a fixed $(\ell,s,j)$ multiplet with $j>0$, the projection of the spin operator onto that multiplet is proportional to $\mechanical{\mathbf J}$. Write $\langle\mechanical{S}_z\rangle=\alpha\langle\mechanical{J}_z\rangle=\alpha\hbar m_j$. To determine $\alpha$, use

$$
\mechanical{\mathbf S}\cdot\mechanical{\mathbf J}
=\mechanical{\mathbf S}^2+\mechanical{\mathbf S}\cdot\mechanical{\mathbf L}
=\tfrac12\left(\mechanical{\mathbf J}^2+\mechanical{\mathbf S}^2-\mechanical{\mathbf L}^2\right).
$$

Taking the expectation in the multiplet gives

$$
\alpha\hbar^2j(j+1)
=\frac{\hbar^2}{2}\left[j(j+1)+s(s+1)-\ell(\ell+1)\right].
$$

The linear shift for a field along $z$ is therefore

$$
\Delta\energy{E}^{(1)}=\magnetic{\mu}_B g_J m_j\magnetic{B},
\qquad
g_J=1+\frac{j(j+1)+s(s+1)-\ell(\ell+1)}{2j(j+1)}.
$$

The quantity $g_J$ is the Landé factor for orbital and spin factors $1$ and $2$. Equivalently, the magnetic moment projected onto the multiplet is $-\magnetic{\mu}_B g_J\mechanical{\mathbf J}/\hbar$, so the shift is the expectation of $-\magnetic{\boldsymbol{\mu}}\cdot\magnetic{\mathbf B}$.

##### Final exam topics

The notes distinguish the final exam from the qualifying exam and list these topics for the final:

- Time-dependent perturbation theory.
- Interaction of matter with light.
- Gauge invariance.
- Rotations and addition of spins.
- Spin–spin interactions.
- Spin interactions with electric and magnetic fields.

The exam review advises expecting new problems.

##### Hydrogen radial wavefunction

In SI units, the radial Schrödinger equation is

$$
\left[
-\frac{\hbar^2}{2\mechanical{m}_e\mechanical{r}^2}
\frac{d}{d\mechanical{r}}\left(\mechanical{r}^2\frac{d}{d\mechanical{r}}\right)
+\frac{\ell(\ell+1)\hbar^2}{2\mechanical{m}_e\mechanical{r}^2}
-\frac{\electric{e}^2}{4\pi\electric{\epsilon}_0\mechanical{r}}
\right]R(\mechanical{r})=\energy{E}R(\mechanical{r}).
$$

The first term is the radial kinetic energy. The second is the angular kinetic energy and acts as a centrifugal barrier. The characteristic atomic size is of order $10^{-10}\,\unit{m}$. The $10^{-15}\,\unit{m}$ scale written beside it is the nuclear scale.

The bound-state radial function decays exponentially at large $\mechanical{r}$ and behaves as $B\mechanical{r}^{\ell}$ near the origin. For $\ell=0,1,2$, the respective leading behaviors are $B$, $B\mechanical{r}$, and $B\mechanical{r}^2$. The full radial function is

$$
R_{n\ell}(\mechanical{r})=Ae^{-\signal{k}\mechanical{r}}\mechanical{r}^{\ell}v_n^\ell(\mechanical{r}),
\qquad
j_{\max}=n-\ell-1,
$$

where $v_n^\ell$ is a polynomial of degree $j_{\max}$. The radial normalization is

$$
\int_0^\infty \lvert R_{n\ell}(\mechanical{r})\rvert^2\mechanical{r}^2\,d\mechanical{r}=1.
$$

##### Real gases and phase transitions

At high pressure and low temperature a gas can condense to a liquid. The van der Waals equation is

$$
\left[\mechanical{P}+a\left(\frac{n}{\mechanical{V}}\right)^2\right](\mechanical{V}-nb)=nR\thermal{T}.
$$

The constant $a$ accounts for intermolecular attraction and $b$ for the excluded volume per mole.

The van der Waals pressure correction $\mechanical{P}\mapsto\mechanical{P}+a(n/\mechanical{V})^2$ adds back the reduction in pressure due to attractive intermolecular forces. The available volume is $\mechanical{V}-nb$, with $nb$ representing the volume excluded by finite molecular size.

For hard spheres of radius $\mechanical{r}$, the minimum distance between centers is $2\mechanical{r}$. The sphere excluded to the center of a second particle has eight times the volume of one molecule. In the dilute hard-sphere model each pair is counted once, so the excluded-volume contribution per molecule to the second virial coefficient is four times the molecular volume.

![[Kyle Kabasares - Quantum Mechanics II - Hard-sphere contact.png|**Fig. 24** The centers of two touching hard spheres are separated by one diameter.]]

At low molar density $n/\mechanical{V}\to0$, the equation approaches the ideal gas law. Defining the molar volume $\mechanical{v}=\mechanical{V}/n$ gives

$$
\left(\mechanical{P}+\frac{a}{\mechanical{v}^2}\right)(\mechanical{v}-b)=R\thermal{T}.
$$

##### Boyle temperature and virial expansion

At high temperature the isotherms resemble the rectangular hyperbolae of Boyle's law. Expand the equation of state in the molar density $1/\mechanical{v}$:

$$
\mechanical{P}\mechanical{v}
=R\thermal{T}
\left[1+\frac{A(\thermal{T})}{\mechanical{v}}+
\frac{B(\thermal{T})}{\mechanical{v}^2}+\cdots\right].
$$

This is the virial equation of state. The Boyle temperature is where the leading correction $A(\thermal{T})$ vanishes.

The pressure–volume sketch compares the Boyle-temperature isotherm, the critical isotherm, and a subcritical van der Waals curve. The dotted boundary marks the liquid–vapor coexistence region.

![[Kyle Kabasares - Quantum Mechanics II - Boyle and critical isotherms.png|**Fig. 25** Handwritten pressure–volume sketch with the Boyle and critical isotherms and a subcritical loop.]]

At the Boyle temperature $\thermal{T}_B$, the leading virial correction is zero, $A(\thermal{T}_B)=0$. To find it, rearrange the van der Waals equation and expand for $\mechanical{v}\gg b$:

$$
\begin{aligned}
\mechanical{P}\mechanical{v}
&=R\thermal{T}\left(1-\frac{b}{\mechanical{v}}\right)^{-1}-\frac{a}{\mechanical{v}}\\
&=R\thermal{T}\left[1+\frac{b}{\mechanical{v}}+O(\mechanical{v}^{-2})\right]-\frac{a}{\mechanical{v}}\\
&=R\thermal{T}+\frac{bR\thermal{T}-a}{\mechanical{v}}+O(\mechanical{v}^{-2}).
\end{aligned}
$$

The coefficient of $\mechanical{v}^{-1}$ vanishes when $bR\thermal{T}_B=a$, so

$$
\thermal{T}_B=\frac{a}{Rb}.
$$

At that temperature, the first deviation from the ideal gas law is of order $\mechanical{v}^{-2}$.

## Source

Kyle Kabasares, *Quantum Mechanics II (Physics 215B, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\mechanical{t}$, $\mechanical{t}_0$, $\Delta\mechanical{t}$ | $\unit{s}$ | Time | Observation time, initial or switching time, and elapsed time. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Particle mass. |
| $\mechanical{x}$ | $\unit{m}$ | Position | Displacement along the oscillator axis. |
| $\energy{E}$, $\energy{E}_0$ | $\unit{J}$ | Energy eigenvalue | Energy of an eigenstate, including the common energy of a degenerate subspace. |
| $\mechanical{z}$, $\mechanical{r}$ | $\unit{m}$ | Vertical position and radius | Position along the drive direction and distance from the origin. |
| $E$ | $\unit{N}$ | Linear perturbation coefficient | Electric field strength multiplied by the signed charge, with the sign set by the potential convention. |
| $\Delta\energy{E}$, $\delta\energy{E}$ | $\unit{J}$ | Energy scales | Width over which the continuum factors change and spacing of individual final levels. |
| $\mechanical{L}$ | $\unit{m}$ | Box side length | Periodic normalization length in each coordinate. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Spatial part of the electromagnetic four-potential. |
| $c$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed used in the time coordinate and Maxwell equations. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | Signed charge of the particle, with the value expressed in the unit system used for the potentials. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Particle speed | Speed associated with the continuum wave number. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge magnitude | Positive magnitude of the proton or electron charge. |
| $\thermal{T}$ | $\unit{K}$ | Temperature | Temperature of the equilibrium radiation and atom. |
| $A$, $B$ | $\unit{s^{-1}}$ | Mode emission and absorption coefficients | Spontaneous rate and induced transition rate per photon for a single resonant mode. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
| $\mechanical{\mathbf S}$, $\mechanical{S}_i$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum and its Cartesian components. |
| $\mechanical{\mathbf J}$, $\mechanical{J}_i$ | $\unit{J\,s}$ | Total angular momentum | Sum of orbital and spin angular momentum or of two subsystems' angular momenta. |
| $n,R$ | $\unit{mol}$, $\unit{J\,mol^{-1}\,K^{-1}}$ | Amount of substance and molar gas constant | The factors multiplying absolute temperature on the right-hand side. |
| $a,b$ | $\unit{Pa\,m^6\,mol^{-2}}$, $\unit{m^3\,mol^{-1}}$ | van der Waals parameters | Set the attractive pressure correction and the excluded volume per mole. |
| $\mechanical{v}$ | $\unit{m^3\,mol^{-1}}$ | Molar volume | Container volume per mole in the gas equations. |
| $A(\thermal{T}),B(\thermal{T})$ | $\unit{m^3\,mol^{-1}}$, $\unit{m^6\,mol^{-2}}$ | Virial coefficients | First two corrections to the ideal-gas compressibility factor in powers of molar density. |
| $\thermal{T}_B,\thermal{T}_c$ | $\unit{K}$ | Boyle and critical temperatures | Temperature at which the second virial coefficient vanishes and temperature at the liquid–vapor critical point. |
