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

For the coupling $K\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2$, the triplet therefore has spin-coupling energy $a=K\hbar^2/4$, and the singlet has $\tilde a=-3K\hbar^2/4$. For fields $\magnetic{B}_i\hat{\mathbf z}$, set $b_i=-\electric{q}\hbar\magnetic{B}_i/(\mechanical{m}\mechanical{c})$. In the ordered basis $\lvert1,1\rangle,\lvert1,0\rangle,\lvert1,-1\rangle,\lvert0,0\rangle$ the Hamiltonian is

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
| $\mechanical{t}$ | $\unit{s}$ | Time | Time in the Schrödinger equation and in the spin precession. |
| $\mechanical{m}$, $\mechanical{m}_e$ | $\unit{kg}$ | Mass | Particle mass and electron mass. |
| $\mechanical{x}$, $\mechanical{y}$ | $\unit{m}$ | Cartesian coordinates | Coordinates in the gauge function and in the vector potential. |
| $\mechanical{\mathbf r}$, $\mechanical{r}$ | $\unit{m}$ | Position and radius | Position vector and radial distance. In the hard-sphere model, $\mechanical{r}$ is the sphere radius. |
| $\energy{E}$, $\energy{E}_n$ | $\unit{J}$ | Energy eigenvalue | Energy of a stationary state. |
| $\Delta\energy{E}^{(1)}$ | $\unit{J}$ | First-order Zeeman shift | Linear energy shift of an atomic level in a weak field. |
| $V$ | $\unit{J}$ | Potential energy | Scalar potential energy in the spinor Hamiltonian. |
| $K$ | $\unit{J^{-1}\,s^{-2}}$ | Spin–spin coupling constant | Coefficient of $\mechanical{\mathbf S}_1\cdot\mechanical{\mathbf S}_2$ in the Hamiltonian. |
| $a$, $\tilde a$ | $\unit{J}$ | Spin-coupling energies | Spin–spin energy of the triplet and of the singlet. |
| $b_i$ | $\unit{J}$ | Zeeman energy parameter | Field-dependent energy $-\electric{q}\hbar\magnetic{B}_i/(\mechanical{m}\mechanical{c})$ for spin $i$. |
| $\magnetic{\mathbf B}$, $\magnetic{B}_i$ | $\unit{T}$ | Magnetic flux density | Applied magnetic field and its components. |
| $\magnetic{\mathbf A}$ | $\unit{T\,m}$ | Magnetic vector potential | Vector potential of the uniform field. |
| $\chi$ | $\unit{T\,m^2}$ | Gauge function | Scalar function whose gradient changes the gauge of $\magnetic{\mathbf A}$. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light | Vacuum light speed in the Gaussian-unit coupling terms. |
| $\electric{q}$ | $\unit{C}$ | Electric charge | Signed charge of the particle, with the value expressed in the unit system used for the potentials. |
| $\electric{e}$ | $\unit{C}$ | Elementary charge magnitude | Positive magnitude of the proton or electron charge. |
| $\electric{\epsilon}_0$ | $\unit{F\,m^{-1}}$ | Vacuum permittivity | Constant in the SI Coulomb potential. |
| $g$, $g_J$ | $1$ | g-factor and Landé factor | Spin g-factor and the effective g-factor of a $(\ell,s,j)$ multiplet. |
| $\magnetic{\mu}_B$ | $\unit{J\,T^{-1}}$ | Bohr magneton | Unit of the atomic magnetic moment. |
| $\magnetic{\boldsymbol{\mu}}$, $\magnetic{\boldsymbol{\mu}}_{\mathrm{spin}}$ | $\unit{J\,T^{-1}}$ | Magnetic moment | Magnetic moment of the atom and of the spin. |
| $\mechanical{\mathbf L}$, $\mechanical{L}_z$ | $\unit{J\,s}$ | Orbital angular momentum | Total orbital angular momentum and its projection on the $z$-axis. |
| $\mechanical{\mathbf S}$, $\mechanical{S}_i$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum and its Cartesian components. |
| $\mechanical{\mathbf J}$, $\mechanical{J}_z$ | $\unit{J\,s}$ | Total angular momentum | Sum of orbital and spin angular momentum. |
| $\ell$, $s$, $j$, $m_j$ | $1$ | Angular momentum quantum numbers | Orbital, spin, and total quantum numbers, and the projection quantum number of $\mechanical{J}_z$. |
| $\alpha$ | $1$ | Projection factor | Ratio $\langle\mechanical{S}_z\rangle/\langle\mechanical{J}_z\rangle$ in a fixed multiplet. |
| $R_{n\ell}$ | $\unit{m^{-3/2}}$ | Radial wavefunction | Radial part of the hydrogen wavefunction. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Radial decay constant | Exponential decay rate of the bound radial function. |
| $\mechanical{P}$ | $\unit{Pa}$ | Pressure | Gas pressure. |
| $\mechanical{V}$ | $\unit{m^3}$ | Volume | Container volume. |
| $\mechanical{v}$ | $\unit{m^3\,mol^{-1}}$ | Molar volume | Container volume per mole in the gas equations. |
| $n$ | $\unit{mol}$ | Amount of substance | Number of moles in the van der Waals equation. |
| $R$ | $\unit{J\,mol^{-1}\,K^{-1}}$ | Molar gas constant | Factor that multiplies absolute temperature in the gas equations. |
| $\thermal{T}$, $\thermal{T}_B$ | $\unit{K}$ | Temperature and Boyle temperature | Gas temperature and the temperature at which the second virial coefficient vanishes. |
| $a$, $b$ | $\unit{Pa\,m^6\,mol^{-2}}$, $\unit{m^3\,mol^{-1}}$ | van der Waals parameters | Attractive pressure correction and excluded volume per mole. |
| $A(\thermal{T})$, $B(\thermal{T})$ | $\unit{m^3\,mol^{-1}}$, $\unit{m^6\,mol^{-2}}$ | Virial coefficients | First two corrections to the ideal-gas compressibility factor in powers of molar density. |
