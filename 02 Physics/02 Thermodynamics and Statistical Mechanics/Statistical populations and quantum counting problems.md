---
title: "Statistical populations and quantum counting problems"
---

> [!TLDR]
> Count microstates and calculate classical and quantum occupation probabilities and speed distributions.

## Worked lecture material

##### Statistical physics

Topics are the classical Maxwell–Boltzmann distribution, Bose–Einstein and Fermi–Dirac statistics, and applications of quantum statistics.

How can two particles be arranged among three states? If the particles are distinguishable, label them $x$ and $o$. Each can occupy any state, so Maxwell–Boltzmann counting gives $3^2=9$ arrangements. The two particles occupy the same state in three of the nine arrangements.

For identical bosons, the particles are indistinguishable and can share a state. Bose–Einstein counting gives six arrangements. Three put both in one state and three put them in different states, so half are grouped together.

![[Kyle Kabasares - Modern Physics - Two particles in three states.png|**Fig. 60** Classical arrangements for two distinguishable particles and Bose–Einstein occupations for two indistinguishable particles.]]

For two identical fermions in three states, exclusion permits only the three distinct pairs of occupied states. The particles cannot share a single quantum state. Fermions have half-integer spin and a wave function antisymmetric under exchange.

![[Kyle Kabasares - Modern Physics - Two fermions in three states.png|**Fig. 61** Three Fermi–Dirac occupations of two particles in three states.]]

| Distribution | Examples | Occupation function |
| --- | --- | --- |
| Maxwell–Boltzmann | Classical ideal gas | $f_{\mathrm{MB}}=Ae^{-\energy{E}/(k_B\thermal{T})}$ |
| Bose–Einstein | Liquid helium-4, photons | $f_{\mathrm{BE}}=[B_{\mathrm{BE}}e^{\energy{E}/(k_B\thermal{T})}-1]^{-1}$ |
| Fermi–Dirac | Electron gas in a conductor | $f_{\mathrm{FD}}=[B_{\mathrm{FD}}e^{\energy{E}/(k_B\thermal{T})}+1]^{-1}$ |

The quantum forms above use the positive exponent and the Fermi–Dirac plus sign. These correct the signs written in this table.

The radial probability density $P(r)$ gives probability $P(r)\,dr$ between $r$ and $r+dr$. In the energy distribution, $n(E)\,dE$ counts particles with energies between $E$ and $E+dE$. For Maxwell–Boltzmann statistics, $n(E)=g(E)f_{\mathrm{MB}}(E)$, where $g(E)$ is the density of states.

##### Maxwell–Boltzmann population example

Find $n(E_2)/n(E_1)$ for hydrogen. The $1s$ ground level has two spin configurations, so $g(E_1)=2$. The first excited level contains $2s$ and the three $2p$ orbitals with two spin configurations each, so $g(E_2)=8$.

$$
\frac{n(E_2)}{n(E_1)}
=\frac{g(E_2)f_{\mathrm{MB}}(E_2)}{g(E_1)f_{\mathrm{MB}}(E_1)}
=4e^{-(\energy{E}_2-\energy{E}_1)/(k_B\thermal{T})}.
$$

The written estimates are $10^{-175}$ at $293\,\unit{K}$, $2\times10^{-10}$ at $5000\,\unit{K}$, and $3.55$ at $10^6\,\unit{K}$.

##### Distributions and microstates

The number distribution $n(E)=g(E)f(E)$ combines the density of states or degeneracy $g$ with the occupation factor $f$. The number of particles in the energy interval $[E,E+dE]$ is $n(E)\,dE$. A probability for that interval uses the normalized energy distribution. The handwritten line labels that probability $f(E)\,dE$.

A microstate describes the system by specifying the state of each individual particle.

In an ideal gas, $\energy{E}=\energy{K}=\tfrac12\mechanical{m}(v_x^2+v_y^2+v_z^2)$. Substituting into the Maxwell–Boltzmann factor and normalizing over velocity space gives

$$
f(v_x,v_y,v_z)=f(v_x)f(v_y)f(v_z)
=\left(\frac{\mechanical{m}}{2\pi k_B\thermal{T}}\right)^{3/2}
e^{-\mechanical{m}(v_x^2+v_y^2+v_z^2)/(2k_B\thermal{T})}.
$$

The normalization is $\iiint f\,dv_x\,dv_y\,dv_z=1$. The mean velocity component is $\langle\mechanical{v}_x\rangle=\int_{-\infty}^{\infty}v_xf(v_x)\,dv_x$. Compare the quantum expectation $\langle Q\rangle=\int\psi^*\hat Q\psi\,dx$ with $\int\psi^*\psi\,dx=1$. For position, $\hat Q$ is multiplication by $x$.

Bosons have integer spin and can occupy the same state. Fermions have half-integer spin and obey exclusion. For two particles in different orthonormal one-particle states $n,m$, the labeled products are $\psi_n(1)\psi_m(2)$ and $\psi_n(2)\psi_m(1)$. The normalized exchange combinations are

$$
\psi_{\mathrm{S,A}}(1,2)=\frac1{\sqrt2}
[\psi_n(1)\psi_m(2)\pm\psi_n(2)\psi_m(1)].
$$

The plus sign is symmetric for bosons and the minus sign is antisymmetric for fermions. What is the probability density $\psi^*\psi$ if the indistinguishable bosons are both in state $n$?

Substituting $m=n$ into the symmetric expression from the preceding page gives $(2/\sqrt2)\psi_n(1)\psi_n(2)$ and a squared modulus twice that of the simple product. The handwritten argument uses this to illustrate bosonic bunching. The factor $1/\sqrt2$ there assumes different orthogonal orbitals. If both particles occupy the same normalized orbital, the normalized joint state is $\psi_n(1)\psi_n(2)$. In the three-state counting example, the same-state fractions are $1/2$ for bosons and $1/3$ for distinguishable particles.

Putting two fermions in the same state gives zero in the antisymmetric combination, expressing Pauli exclusion.

##### Quantum statistics

The total particle number is $N=\int n(E)\,dE$. In the Fermi–Dirac distribution write the temperature-dependent factor $B_{\mathrm{FD}}=e^{-\energy{E}_F/(k_B\thermal{T})}$. The final expression on the page is

$$
f_{\mathrm{FD}}(E)=\frac{1}{e^{(\energy{E}-\energy{E}_F)/(k_B\thermal{T})}+1}.
$$

What is the Fermi energy $\energy{E}_F$?

At absolute zero the fermions fill the lowest available levels. The energy at the upper edge of the occupied levels is $\energy{E}_F$.

$$
f_{\mathrm{FD}}(E)=
\begin{cases}
1,& E<E_F,\\
0,& E>E_F.
\end{cases}
$$

![[Kyle Kabasares - Modern Physics - Fermi level occupations.png|**Fig. 62** Filled low-energy levels and empty higher levels at zero temperature.]]

Model the particles in a three-dimensional infinite well of side $L$. In one dimension, $\energy{E}_n=\energy{E}_1n^2$ with $\energy{E}_1=h^2/(8\mechanical{m}L^2)$. In three dimensions,

$$
\energy{E}_{n_xn_yn_z}=\energy{E}_1(n_x^2+n_y^2+n_z^2),\qquad n_x,n_y,n_z=1,2,3,\ldots.
$$

![[Kyle Kabasares - Modern Physics - Cubical infinite well.png|**Fig. 63** Three-dimensional box of side $L$.]]

In the space of quantum numbers, define $r^2=n_x^2+n_y^2+n_z^2$. Positive integers occupy the first octant. Approximating the count by the volume of that octant and including two spin states per point gives

$$
N_r\simeq2\cdot\frac18\cdot\frac{4\pi r^3}{3}.
$$

![[Kyle Kabasares - Modern Physics - Fermi sphere octant.png|**Fig. 64** Quantum numbers in the positive octant of a sphere of radius $r$.]]

Since $\energy{E}=\energy{E}_1r^2$, the cumulative state count is $N_r=(\pi/3)(\energy{E}/\energy{E}_1)^{3/2}$. At $\thermal{T}=0$, substitute $\energy{E}_F$ and set the count equal to the total number of fermions $N$.

$$
\energy{E}_F=\energy{E}_1\left(\frac{3N}{\pi}\right)^{2/3}
=\frac{h^2}{8\mechanical{m}}\left(\frac{3N}{\pi L^3}\right)^{2/3}.
$$

Here $N/L^3$ is the number density of free electrons for the conductor being modeled. The density of states is $g(E)=dN_r/dE$ and $n(E)=g(E)f_{\mathrm{FD}}(E)$. At absolute zero $n(E)=g(E)$ below $E_F$ and $0$ above it. At finite temperature the distribution in the notation of the lecture is

$$
n_{\mathrm{FD}}(E)=\frac{\pi}{2}\left(\frac{8\mechanical{m}}{h^2}\right)^{3/2}
\frac{L^3\sqrt{\energy{E}}}{e^{(\energy{E}-\energy{E}_F)/(k_B\thermal{T})}+1}.
$$

The volume is $L^3$, and the mean energy is $\langle\energy{E}\rangle=N^{-1}\int_0^\infty E\,n(E)\,dE$.

Heat capacity at constant volume is $\thermal{C}_V=(\partial\energy{E}/\partial\thermal{T})_V$ for the total energy.

Final exam topics include expectation values, sketching wave functions, angular momentum, nuclear physics, statistical physics, the Schrödinger equation, and experiments from the lab or foundational to quantum mechanics.

Only certain levels are allowed for a bound particle. What gives quantization? Start from

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dx^2}
+\energy{V}(x)\psi=\energy{E}\psi.
$$

Applying the boundary conditions selects the allowed solutions. An infinite well imposes $\psi(0)=\psi(L)=0$. A lone potential step does not confine the particle on both sides and gives no discrete bound levels.

![[Kyle Kabasares - Modern Physics - Final lecture infinite well.png|**Fig. 65** Infinite well with walls at $0$ and $L$.]]

![[Kyle Kabasares - Modern Physics - Final lecture potential step.png|**Fig. 66** A potential step of height $V_0$.]]

The normalization integral is the area under $\psi^*\psi$, $\int_{-\infty}^{+\infty}\psi^*\psi\,dx=1$. For one particle the wave function may be $\psi_n(x)$. A product state for two labeled particles has $\psi_{\mathrm{tot}}=\psi_n(1)\psi_m(2)$.

##### Probability and expectation values

In one dimension, $\psi^*\psi$ is the probability density and $\psi^*\psi\,dx$ is the probability of finding the particle between $x$ and $x+dx$. The wave function also determines the expectation of an observable. For energy, integrate $\psi^*(\hat H\psi)$ over all positions.

![[Kyle Kabasares - Modern Physics - First two well states and probabilities.png|**Fig. 67** First two infinite-well wave functions and their probability densities. Both densities are symmetric about $L/2$.]]

The particle is equally likely to be found on either side of the center for either state shown.

In statistical physics, integrating a quantity times the probability density over all possible values gives the expectation value. The handwritten line calls it the most likely value. The most likely value is given by a peak of the probability density. The probability density can include the Maxwell–Boltzmann, Fermi–Dirac, or Bose–Einstein occupation factor along with other factors such as the density of states.

##### Speed distribution and average energy

The notes write $F(v)=Av^3e^{-mv^2/(2k_BT)}$ and require $\int_0^\infty F(v)\,dv=1$, with $A$ a normalization constant. For the three-dimensional Maxwell speed distribution the shell measure is $4\pi v^2\,dv$, so the speed-density factor is $v^2$. The $v^3$ factor gives the speed weighting used in Homework 13.1 on [[Nuclear and quantum statistics review calculations#Maxwell–Boltzmann population example|the section on Maxwell–Boltzmann example — Lecture 35, slide 10]].

For any speed density $F$, the statistical average of the kinetic energy is

$$
\langle\energy{E}\rangle=
\frac{\displaystyle\int_0^\infty \tfrac12\mechanical{m}v^2F(v)\,dv}
{\displaystyle\int_0^\infty F(v)\,dv}.
$$

The denominator is one if $F$ is normalized. The notebook uses the handwritten $Av^3$ weighting in both integrals and compares the average with a peak of the ground-state probability density.

##### Studying for the final — Problem 6-28

For the infinite well, $\psi_n(x)=\sqrt{2/L}\sin(n\pi x/L)$ between $0$ and $L$. For $n=3$, apply $\hat p_x=(\hbar/i)d/dx$ to the ket's wave function.

$$
\langle\mechanical{p}_x\rangle=\int_0^L\psi_3^*\frac{\hbar}{i}\psi_3'\,dx
=\frac{2\hbar}{iL}\int_0^L
\sin\left(\frac{3\pi x}{L}\right)
\cos\left(\frac{3\pi x}{L}\right)\frac{3\pi}{L}\,dx.
$$

With $u=\sin(3\pi x/L)$, the integral is the change in $u^2/2$ from $x=0$ to $x=L$. Both endpoint values are zero, so $\langle\mechanical{p}_x\rangle=0$.

How can the mean momentum vanish while the kinetic energy at $n=3$ is $9\pi^2\hbar^2/(2\mechanical{m}L^2)$? Contributions with opposite momentum cancel in the mean. They add in the mean squared momentum, which determines the kinetic energy.

##### Problem 6-30 — Position moments for a uniform density

**(a)** If $P(x)$ is constant on $0<x<L$, normalization gives $\int_0^L P(x)\,dx=PL=1$ and $P=1/L$. The page also lists $\psi_n(x)=\sqrt{2/L}\sin(n\pi x/L)$. That stationary wave function gives an oscillatory density whose spatial average is $1/L$.

**(b)** Using the uniform density,

$$
\langle\mechanical{x}\rangle=\frac1L\int_0^Lx\,dx=\frac L2,\qquad
\langle\mechanical{x}^{\,2}\rangle=\frac1L\int_0^Lx^2\,dx=\frac{L^2}{3}.
$$

##### Problem 6-31 — Squared momentum

In one dimension, $\hat p_x^2=(\hbar/i)^2d^2/dx^2=-\hbar^2d^2/dx^2$. For a stationary state the Schrödinger equation gives $\hat p_x^2\psi=2\mechanical{m}[\energy{E}-\energy{V}(x)]\psi$. Therefore for a normalized state,

$$
\langle\mechanical{p}_x^2\rangle
=\int_{-\infty}^{+\infty}\psi^*\hat p_x^2\psi\,dx
=2\mechanical{m}\bigl(\energy{E}-\langle\energy{V}\rangle\bigr).
$$

The handwritten expression $2\mechanical{m}[\energy{E}-\energy{V}(x)]$ is the pointwise ratio where $\psi\ne0$. For constant potential it also gives the expectation.

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\thermal{T}$ | $\unit{K}$ | Absolute temperature | Determines the blackbody spectrum. |
| $h$ | $\unit{J\,s}$ | Planck constant | Relates the energy of one quantum to its frequency. |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\hat H$ | $\unit{J}$ | Hamiltonian | Operator for the total energy. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $\energy{E}_F$ | $\unit{eV}$ | Fermi energy | Energy of the highest occupied level at absolute zero. |
| $\thermal{C}_V$ | $\unit{J/K}$ | Heat capacity at constant volume | Temperature derivative of internal energy at fixed volume. |
