---
title: "Electromagnetic plane waves and planar interfaces"
---

> [!TLDR]
> Use translation symmetry and boundary conditions to match electromagnetic plane waves at a planar surface.

## Worked lecture material

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

##### Electromagnetic waves

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

##### Translation symmetry and plane waves

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

##### Waves at a planar boundary

Place a planar interface normal to $\mechanical{z}$ between vacuum and a medium with $\electric{\varepsilon}$ and $\magnetic{\mu}$.

![[Kyle Kabasares - Electrodynamics - Planar boundary for electromagnetic waves.png|**Fig. 111** Vacuum and a linear medium separated by a plane of constant $\mechanical{z}$.]]

Translation symmetry parallel to the interface allows a common phase factor $e^{i(k_x\mechanical{x}+k_y\mechanical{y}-\omega t)}$ in both fields. The amplitudes $\electric{\mathbf E}_0(\mechanical{z})$ and $\magnetic{\mathbf B}_0(\mechanical{z})$ can vary along the normal. Solve on either side and match at the boundary.

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

For each vacuum wave the amplitudes satisfy $\electric{E}_0=c\magnetic{B}_0$ and $\electric{E}_0'=c\magnetic{B}_0'$. At the interface without free surface charge or free surface current, match $\electric{\mathbf E}_{\parallel}$, $\electric{D}_{\perp}$, $\magnetic{\mathbf H}_{\parallel}$, and $\magnetic{B}_{\perp}$. The handwritten list interchanges the magnetic subscripts. The stated components follow the boundary conditions on [[Polarization and dielectric boundary-value problems#Linear dielectrics and tangential boundary conditions|the section on Linear dielectrics and tangential boundary conditions]] and 67.

For propagating waves on the right, impose the outgoing condition, leaving only the wave moving toward $+\mechanical{z}$. On the left there are waves in both directions, with the incoming amplitudes $\electric{\mathbf E}_0,\magnetic{\mathbf B}_0$ prescribed.

![[Kyle Kabasares - Electrodynamics - Outgoing wave to the right of an interface.png|**Fig. 112** Outgoing wave on the transmitted side.]]

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

## Source

Kyle Kabasares, *Electrodynamics (Physics 213A, UC Irvine 2018)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{u}$ | $\unit{J\,m^{-3}}$ | Electromagnetic energy density | Energy stored per unit volume in the electric and magnetic fields. |
| $\mathbf k$ | $\unit{m^{-1}}$ | Wave vector | Spatial phase gradient of a plane wave. |
