---
title: "Hydrogen, spin, and the structure of the periodic table"
---

> [!TLDR]
> Read orbital and spin quantum numbers, interpret magnetic splitting, and infer atomic term symbols from configurations.

## Worked lecture material

For a normalized wave function $\psi$, the expectation value of the observable $Q$ is

$$
\langle Q\rangle
=\int_{-\infty}^{+\infty}\psi^*(x)\bigl(\hat Q\psi(x)\bigr)\,dx.
$$

The operator $\hat Q$ acts on $\psi$. For energy the operator is the Hamiltonian $\hat H$,

$$
\hat H\psi=-\frac{\hbar^2}{2\mechanical{m}}\frac{\partial^2\psi}{\partial x^2}+\energy{V}\psi
=\energy{E}\psi,
\qquad
\langle\energy{E}\rangle=\int_{-\infty}^{+\infty}\psi^*\hat H\psi\,dx.
$$

##### The hydrogen atom

The three-dimensional Schrödinger equation and the hydrogen atom.

- **Bohr model.** An electron in a circular orbit does not radiate. Its orbital radius and energy are quantized. The model leaves the fixed energy levels unexplained.
- **de Broglie model.** The electron is a standing wave. The standing-wave condition explains the fixed energy levels and gives the same energies.
- **Schrödinger model.** The electron is described by a three-dimensional wave. Boundary conditions produce quantized energy levels, and the model gives the correct energies and angular momenta.

The Schrödinger equation generalizes to atoms with multiple electrons. For hydrogen, put the proton at the origin and describe the electron in spherical coordinates,

$$
x=r\sin\theta\cos\phi,\qquad y=r\sin\theta\sin\phi,\qquad z=r\cos\theta.
$$

Here $r$ is distance from the origin, $\theta$ is the angle from the $z$-axis, and $\phi$ is the angle from the $x$-axis in the $xy$-plane. The angle conventions in Math 23 interchanged $\theta$ and $\phi$.

![[Kyle Kabasares - Modern Physics - Hydrogen spherical coordinates.png|**Fig. 29** Spherical coordinates for the electron relative to the proton.]]

The potential energy is $\energy{V}(r)=-\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$. Its radial dependence permits separation of variables, $\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)$ with $Y(\theta,\phi)=f(\theta)g(\phi)$.

$$
-\frac{\hbar^2}{2\mechanical{m}}\left(
\frac{\partial^2\psi}{\partial x^2}
+\frac{\partial^2\psi}{\partial y^2}
+\frac{\partial^2\psi}{\partial z^2}\right)
+\energy{V}\psi=\energy{E}\psi,
\qquad
-\frac{\hbar^2}{2\mechanical{m}}\nabla^2\psi+\energy{V}\psi=\energy{E}\psi.
$$

Using the reduced mass $\mechanical{\mu}$, the spherical-coordinate equation can be rearranged to place the radial derivative and potential on the left.

$$
-\frac{\hbar^2}{2\mechanical{\mu}r^2}
\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right)
+[\energy{V}(r)-\energy{E}]\psi
=\frac{\hbar^2}{2\mechanical{\mu}r^2}
\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2}
\right].
$$

Substitute $\psi=R(r)f(\theta)g(\phi)$ into the rearranged equation and divide both sides by $Rfg$. The radial and angular factors then separate.

$$
-\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
+\frac{2\mechanical{\mu}r^2}{\hbar^2}[\energy{V}(r)-\energy{E}]
=\frac{1}{f\sin\theta}\frac{d}{d\theta}\left(\sin\theta\frac{df}{d\theta}\right)
+\frac{1}{g\sin^2\theta}\frac{d^2g}{d\phi^2}.
$$

The solutions have the form $\psi_{n\ell m}=R_{n\ell}(r)f_{\ell m}(\theta)g_m(\phi)$.

- $n=1,2,3,\ldots$ is the principal quantum number.
- $\ell=0,1,\ldots,n-1$ is the orbital quantum number.
- $m=-\ell,-\ell+1,\ldots,\ell$ is the magnetic quantum number. It determines the $z$-component of orbital angular momentum.

##### Hydrogen and an expectation-value example

Find the expectation value of position in the harmonic oscillator ground state.

$$
\psi_0=A_0e^{-\alpha x^2/2},\qquad \alpha=\frac{\mechanical{m}\mechanical{\omega}}{\hbar}.
$$

Either normalize first or divide by the norm in the expectation-value calculation.

$$
\langle\mechanical{x}\rangle=
\frac{\int_{-\infty}^{+\infty}\psi_0^*x\psi_0\,dx}
{\int_{-\infty}^{+\infty}\psi_0^*\psi_0\,dx}.
$$

![[Kyle Kabasares - Modern Physics - Harmonic oscillator expectation example.png|**Fig. 30** Symmetric harmonic oscillator potential.]]

Taking $A_0$ real, the normalization condition is

$$
1=A_0^2\int_{-\infty}^{+\infty}e^{-\alpha x^2}\,dx
=2A_0^2\int_0^\infty e^{-\alpha x^2}\,dx
=A_0^2\sqrt{\frac{\pi}{\alpha}}.
$$

The normalized ground state has $A_0=(\alpha/\pi)^{1/4}$.

$$
\begin{aligned}
\langle\mechanical{x}\rangle
&=\int_{-\infty}^{+\infty}\psi_0^*x\psi_0\,dx\\
&=A_0^2\int_{-\infty}^{+\infty}xe^{-\alpha x^2}\,dx=0.
\end{aligned}
$$

The factor $x$ is odd and the Gaussian is even. The resulting odd integrand integrates to zero on the symmetric domain.

![[Kyle Kabasares - Modern Physics - First excited oscillator state.png|**Fig. 31** The first excited oscillator wave function and its symmetric probability density, drawn relative to its energy level.]]

##### Three-dimensional waves

The hydrogen potential is $\energy{V}(r)=-\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$. The separated wave function is $\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)=R(r)f(\theta)g(\phi)$. The quantum numbers are $n=1,2,3,\ldots$, $\ell=0,1,\ldots,n-1$, and $m=-\ell,\ldots,+\ell$.

##### Reviewing the Schrödinger equation — Conditions on wave functions

The one-dimensional time-independent Schrödinger equation is

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi(x)}{dx^2}
+\energy{V}(x)\psi(x)=\energy{E}\psi(x).
$$

The potential may have different forms in adjacent regions, and its slope may be discontinuous. Solve the Schrödinger equation in each region and match the solutions smoothly at finite potential steps. The sketching rule on this page refers to smooth joining of the wave function. Where the potential is infinite, the wave function vanishes.

1. $\psi(x)$ must exist and satisfy the Schrödinger equation.
2. $\psi(x)$ and $d\psi/dx$ must be continuous for the ordinary finite potentials considered here.
3. $\psi(x)$ and $d\psi/dx$ must be finite.
4. $\psi(x)$ and $d\psi/dx$ must be single-valued.
5. For a normalizable bound state, $\psi(x)\to0$ sufficiently fast as $x\to\pm\infty$ for the normalization integral to remain finite.

##### The infinite square well

This system is also called the particle in a box.

The infinite well has $\energy{V}(x)=0$ for $0<x<\mechanical{L}$ and $\energy{V}(x)=\infty$ outside.

![[Kyle Kabasares - Modern Physics - Infinite square well review.png|**Fig. 32** Infinite square well between $x=0$ and $x=L$.]]

With $\mechanical{p}=h/\signal{\lambda}$ and $n\signal{\lambda}/2=\mechanical{L}$, the allowed energies are

$$
\energy{E}_n=\frac{\mechanical{p}^{\,2}}{2\mechanical{m}}
=\frac{n^2h^2}{8\mechanical{m}\mechanical{L}^{\,2}}
=\frac{n^2\pi^2\hbar^2}{2\mechanical{m}\mechanical{L}^{\,2}}
=n^2\energy{E}_1,\qquad n=1,2,3,\ldots.
$$

##### The finite square well

The form of the exterior solution depends on whether $\energy{E}$ is above or below $\energy{V_0}$.

![[Kyle Kabasares - Modern Physics - Finite square well review.png|**Fig. 33** Finite square well with exterior potential $V_0$.]]

Inside, $\energy{V}(x)=0$ and $\psi''=-k^2\psi$ with $k^2=2\mechanical{m}\energy{E}/\hbar^2$. The wave function can be nonzero at the walls and must be continuous there. Outside, for a bound state with $\energy{E}<\energy{V_0}$,

$$
\psi''=\alpha^2\psi,\qquad \alpha^2=\frac{2\mechanical{m}(\energy{V_0}-\energy{E})}{\hbar^2}>0.
$$

Outside the well, $\psi''$ has the same sign as $\psi$. Where $\psi$ is positive, $\psi''$ is positive and the curve bends away from the axis. Inside the well, $0<x<\mechanical{L}$, $\psi''$ and $\psi$ have opposite signs. The curve bends toward the axis like a sine or cosine.

##### Boundary conditions and angular momentum

The bound-state radial wave function $R(r)$ approaches zero as $r\to\infty$. The spherical-coordinate volume element and the radial probability density for a normalized angular factor are

$$
d\tau=dx\,dy\,dz=r^2\sin\theta\,dr\,d\theta\,d\phi,\qquad
P(r)=r^2\lvert R(r)\rvert^2.
$$

In one dimension the probability in $dx$ is $\lvert\psi(x)\rvert^2dx$. Probabilities come from the squared modulus of the wave function. The radial factor $r^2$ makes the radial probability density vanish at the nucleus when $R$ is finite there.

Angular momentum is conserved in the central potential. Classically an orbit can have any nonzero angular momentum, with direction given by the right-hand rule. Quantum mechanically the allowed angular momenta are quantized and $\ell=0$ is possible.

![[Kyle Kabasares - Modern Physics - Classical orbital angular momentum.png|**Fig. 34** Right-hand-rule direction of orbital angular momentum and its projection on the $z$-axis.]]

For a given $\ell$, orbital angular momentum has magnitude $\lvert\mechanical{\vec L}\rvert=\sqrt{\ell(\ell+1)}\,\hbar$, while its $z$-component is $\mechanical{L}_z=m\hbar$ with $m=-\ell,\ldots,\ell$. The example $\ell=2$ requires $n\ge3$.

![[Kyle Kabasares - Modern Physics - Quantized angular momentum.png|**Fig. 35** Vector model of the five angular momentum projections for $\ell=2$.]]

**The hydrogen atom**

In a symmetric potential, stationary states can be chosen to have definite parity. Their probability density is symmetric, and the expectation value of position lies at the center.

Atoms in magnetic fields show consequences of angular momentum quantization, as in the Stern–Gerlach experiment.

The orbitals for $\ell=0,1,2,3,4$ are denoted $s,p,d,f,g$, respectively. For electric dipole transitions, $\Delta n$ is unrestricted by the selection rules, $\Delta\ell=\pm1$, and $\Delta m=0,\pm1$.

$$
\energy{E}_n=-\frac{\mechanical{\mu}}{2}
\left(\frac{\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}\hbar}\right)^2
\frac{1}{n^2},\qquad n=1,2,3,\ldots.
$$

The energy is independent of $\ell$, in agreement with the Bohr model. The quantum number $\ell=0,1,\ldots,n-1$ enters both $R(r)$ and $f(\theta)$ and determines $\lvert\mechanical{\vec L}\rvert=\sqrt{\ell(\ell+1)}\,\hbar$. Bohr's model used $\mechanical{L}=n\hbar$.

##### Magnetic quantum number

There are $2\ell+1$ allowed values of $m=-\ell,\ldots,\ell$, with $\mechanical{L}_z=m\hbar$. For the hydrogen electron,

$$
\psi_{n\ell m}=C_{n\ell m}R_{n\ell}(r)f_{\ell m}(\theta)g_m(\phi),\qquad
P(r)=r^2\lvert R_{n\ell}(r)\rvert^2.
$$

The wave function can be complex. The position–momentum uncertainty relation gives $\Delta x\,\Delta p_x\ge\hbar/2$, while the corresponding lower bound for $\Delta x\,\Delta p_y$ is zero. In a state of definite $\mechanical{L}^{\,2}=\mechanical{L}_x^2+\mechanical{L}_y^2+\mechanical{L}_z^2$ and $\mechanical{L}_z$, the transverse components generally have uncertainties.

##### Normal Zeeman effect

An external field $\magnetic{\vec B}=\magnetic{B}_0\hat z$ splits the $\ell=1$ level into $m=+1,0,-1$. The adjacent levels are separated by $\magnetic{\mu}_B\magnetic{B}_0$, where $\magnetic{\mu}_B$ is the Bohr magneton. A line of transition energy $\energy{E}_0$ splits into lines at $\energy{E}_0$ and $\energy{E}_0\pm\magnetic{\mu}_B\magnetic{B}_0$.

![[Kyle Kabasares - Modern Physics - Normal Zeeman splitting.png|**Fig. 36** The $\ell=1$ level and its allowed transitions to $\ell=0$, with and without a magnetic field.]]

For an electron in a circular orbit with speed $\mechanical{v}$, the current is charge per orbital period. Multiplying it by the orbit area gives the signed magnetic moment along the orbital axis,

$$
\magnetic{\mu}=\circuit{I}\mechanical{A}
=\frac{-\electric{e}}{2\pi r/\mechanical{v}}\pi r^2
=-\frac{\electric{e}r\mechanical{v}}{2},\qquad
\magnetic{\vec\mu}=-\frac{\electric{e}}{2\mechanical{m}}\mechanical{\vec L}.
$$

Orbital angular momentum has magnitude $\mechanical{m}\mechanical{v}r$ and points perpendicular to the orbital plane. Without a field the orientations are random. In a field there is a torque $\mechanical{\vec\tau}=\magnetic{\vec\mu}\times\magnetic{\vec B}$.

##### Hydrogen and orbital angular momentum

For a circular orbit, $\mechanical{L}=\mechanical{m}_e r\mechanical{v}$ and $\magnetic{\mu}=\circuit{I}\mechanical{A}=(-\electric{e})\pi r^2/(2\pi r/\mechanical{v})$. The electron's magnetic moment, its torque, and its potential energy in a field are

$$
\magnetic{\vec\mu}=-\frac{\electric{e}}{2\mechanical{m}_e}\mechanical{\vec L},
\qquad
\mechanical{\vec\tau}=\magnetic{\vec\mu}\times\magnetic{\vec B},
\qquad
\energy{V}_B=-\magnetic{\vec\mu}\cdot\magnetic{\vec B}.
$$

![[Kyle Kabasares - Modern Physics - Classical and quantized dipoles.png|**Fig. 37** A classical dipole in a field and the vector model of quantized orbital angular momentum projections.]]

For a field along $z$, $\mechanical{L}_z=m_\ell\hbar$ while $\lvert\mechanical{\vec L}\rvert=\sqrt{\ell(\ell+1)}\,\hbar$. Therefore

$$
\magnetic{\mu}_z=-\frac{\electric{e}}{2\mechanical{m}_e}\mechanical{L}_z
=-\magnetic{\mu}_B m_\ell,\qquad
\magnetic{\mu}_B=\frac{\electric{e}\hbar}{2\mechanical{m}_e}
=9.27\times10^{-24}\,\unit{J/T}.
$$

The Bohr magneton is also $5.79\times10^{-5}\,\unit{eV/T}$ or $5.79\times10^{-9}\,\unit{eV/G}$. In vector notation $\magnetic{\vec\mu}=-\magnetic{\mu}_B\mechanical{\vec L}/\hbar$. The potential energy is quantized through the allowed $m_\ell$.

$$
\energy{V}_B=-\magnetic{\mu}_z\magnetic{B}=\magnetic{\mu}_Bm_\ell\magnetic{B}.
$$

##### Stern–Gerlach experiment and electron spin

Orbital angular momentum alone gives $2\ell+1$ projections. Why does the beam split into two when the atom has a single valence electron in an $s$ orbital? The electron also has intrinsic angular momentum, or spin, with $s=1/2$ and $m_s=\pm1/2$.

| Property | Orbital angular momentum | Spin angular momentum |
| --- | --- | --- |
| Magnitude | $\sqrt{\ell(\ell+1)}\,\hbar$ | $\sqrt{s(s+1)}\,\hbar=\sqrt{3/4}\,\hbar$ |
| Quantum number | $\ell=0,1,\ldots,n-1$ | $s=1/2$ |
| $z$-component | $\mechanical{L}_z=m_\ell\hbar$ | $\mechanical{S}_z=m_s\hbar$ |
| Projection quantum numbers | $m_\ell=-\ell,\ldots,\ell$ | $m_s=\pm1/2$ |

The orbital moment is $\magnetic{\vec\mu}_\ell=-\magnetic{\mu}_B\mechanical{\vec L}/\hbar$, with magnitude $\magnetic{\mu}_B\sqrt{\ell(\ell+1)}$ and projection $-m_\ell\magnetic{\mu}_B$. The handwritten comparison gives the spin moment the same coefficient as the orbital moment. For the electron spin the coefficient includes the spin $g$ factor, $\magnetic{\vec\mu}_s=-g_s\magnetic{\mu}_B\mechanical{\vec S}/\hbar$, with $g_s\simeq2$.

##### Total angular momentum

$$
\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}.
$$

![[Kyle Kabasares - Modern Physics - Total angular momentum addition.png|**Fig. 38** Vector addition of orbital and spin angular momentum.]]

Classically the magnitude can vary continuously between the difference and sum of the two magnitudes. Quantum mechanically $\lvert\mechanical{\vec J}\rvert=\sqrt{j(j+1)}\,\hbar$. For spin $1/2$, the allowed $j$ values are $\ell+1/2$ and $\lvert\ell-1/2\rvert$.

The total angular momentum may come from orbital motion, spin, or both. Its projection is $\mechanical{J}_z=\mechanical{L}_z+\mechanical{S}_z=m_j\hbar$, where $m_j=m_\ell+m_s$ and $m_j=-j,-j+1,\ldots,j$. The electron's total magnetic moment includes the factor of two from the relativistic spin result,

$$
\magnetic{\vec\mu}_{\mathrm{tot}}=-\frac{\electric{e}}{2\mechanical{m}_e}
(\mechanical{\vec L}+2\mechanical{\vec S}).
$$

##### Hydrogen and atomic physics

How do we define $j$? With $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$, the magnitude is $\mechanical{J}=\sqrt{j(j+1)}\,\hbar$ and the projection is $\mechanical{J}_z=m_j\hbar$. The value of $j$ depends on $\ell$ and $s$.

For $n=3$, $\ell=2$, and $s=1/2$, find the allowed values of $j$, the angular momentum magnitude, and the $z$-component.

| $j$ | $\mechanical{J}$ | $\mechanical{J}_z/\hbar$ |
| --- | --- | --- |
| $3/2$ | $\sqrt{15}\,\hbar/2$ | $-3/2,-1/2,1/2,3/2$ |
| $5/2$ | $\sqrt{35}\,\hbar/2$ | $-5/2,-3/2,-1/2,1/2,3/2,5/2$ |

Hydrogen excited to $\energy{E}=-(13.6/9)\,\unit{eV}$ has $n=3$. Its allowed orbital quantum numbers are $\ell=0,1,2$. For each $\ell$, $m_\ell=-\ell,\ldots,\ell$ and each orbital has $m_s=\pm1/2$. In particular the five $3d$ orbitals have $m_\ell=-2,-1,0,1,2$.

![[Kyle Kabasares - Modern Physics - Hydrogen n3 spin states.png|**Fig. 39** The $3s$, $3p$, and $3d$ orbitals, each with two possible spin states.]]

The spatial wave function is $\psi=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$. Including spin doubles the nine spatial states to eighteen states. The electron is an elementary fermion and obeys the Pauli exclusion principle.

States with opposite spins are orthogonal, while a normalized state has unit overlap with itself.

$$
\int_{\mathrm{all\ space}}\psi_{100\uparrow}^*\psi_{100\downarrow}\,d\tau=0,\qquad
\int_{\mathrm{all\ space}}\psi_{100\uparrow}^*\psi_{100\uparrow}\,d\tau=1.
$$

Similarly, for $n\ne m$, $(2/L)\int_0^L\sin(n\pi x/L)\sin(m\pi x/L)\,dx=0$ in the infinite well.

For electric dipole transitions in a one-electron atom, $\Delta n$ can take any allowed value including zero, $\Delta\ell=\pm1$, and $\Delta m_\ell=0,\pm1$.

##### Atomic physics

The time-independent Schrödinger equation is an eigenvalue equation, $\hat H\psi=\energy{E}\psi$. The Hamiltonian represents kinetic plus potential energy. In one Cartesian dimension,

$$
\hat H=-\frac{\hbar^2}{2\mechanical{m}}\frac{\partial^2}{\partial x^2}+\energy{V}(x).
$$

The hydrogen potential $\energy{V}(r)=-\electric{e}^{\,2}/(4\pi\electric{\varepsilon_0}r)$ allows separation into three ordinary differential equations, giving $R_{n\ell}(r)f_{\ell m}(\theta)g_m(\phi)=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$. For helium,

$$
\energy{V}=-\frac{2\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}r_1}
-\frac{2\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}r_2}
+\frac{\electric{e}^{\,2}}{4\pi\electric{\varepsilon_0}r_{12}}.
$$

The first two terms are electron–nucleus attractions. The last is electron–electron repulsion and couples the coordinates, so the same separation does not yield an analytic solution.

##### More than one electron — LS coupling

The Schrödinger equation still applies, but the interacting many-electron problem generally has no closed-form solution. For two electrons outside a closed shell, combine their orbital and spin angular momenta separately before forming the total.

$$
\mechanical{\vec L}=\mechanical{\vec L}_1+\mechanical{\vec L}_2,\qquad
\mechanical{\vec S}=\mechanical{\vec S}_1+\mechanical{\vec S}_2,\qquad
\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}.
$$

Use capital letters for the dimensionless multi-electron quantum numbers. In unit steps, $L$ ranges from $\lvert\ell_1-\ell_2\rvert$ to $\ell_1+\ell_2$, $S$ from $\lvert s_1-s_2\rvert$ to $s_1+s_2$, and $J$ from $\lvert L-S\rvert$ to $L+S$. Both electrons have $s_i=1/2$, so $S=0$ or $1$. Opposite projections can form the singlet, while the parallel configurations shown are triplet states.

##### Building the periodic table

The spectroscopic notation shown is $n\,{}^{2S+1}L_J$. The one-electron orbital labels for $\ell=0,1,2,\ldots$ are $s,p,d,\ldots$. The multi-electron term labels for $L=0,1,2,\ldots$ are $S,P,D,\ldots$.

Apply the Pauli exclusion principle when choosing terms and use spectroscopic notation to label them. The allowed optical transitions listed here use $\Delta L=\pm1$.

The optical selection rules continue with $\Delta S=0$ and $\Delta J=0,\pm1$. For electric dipole transitions the forbidden zero-to-zero case is $J=0\to J=0$ (the handwritten line gives $J=1\to J=1$).

##### LS coupling example

One electron is in $4p$ ($n_1=4$, $\ell_1=1$) and the other is in $4d$ ($n_2=4$, $\ell_2=2$). Their projections are unspecified. Find the allowed values of $J$.

Orbital addition gives $L=1,2,3$. Spin addition gives $S=0,1$. For each pair, $J$ runs from $\lvert L-S\rvert$ through $L+S$.

| $S$ | $L=1$ | $L=2$ | $L=3$ |
| --- | --- | --- | --- |
| $0$ | $1$ | $2$ | $3$ |
| $1$ | $0,1,2$ | $1,2,3$ | $2,3,4$ |

The combined list is $J=0,1,2,3,4$.

**Atomic physics**

Exam 2 involves sketching wave functions. Choose one of questions 2 and 3 and one of questions 4 and 5. Topics are the Schrödinger equation, the hydrogen atom, and atomic physics. Consider single- and multi-electron atoms, including atoms with one or two electrons outside a closed shell.

A single-electron label $n\ell$ may be $3p$, for example. For a single electron, $\ell=0,1,\ldots,n-1$ and the measurable orbital angular momentum magnitude is $\sqrt{\ell(\ell+1)}\,\hbar$. In a multi-electron atom, $L$ denotes the total orbital quantum number. The total angular momentum magnitude is $\sqrt{J(J+1)}\,\hbar$, where the quantum number $J$ ranges from $\lvert L-S\rvert$ to $L+S$.

##### LS coupling example revisited

For $4p$ and $4d$ electrons, $\ell_1=1$, $\ell_2=2$, and both spins are $1/2$, each with projections $m_s=\pm1/2$. Orbital addition gives $L=1,2,3$ and spin addition gives $S=0,1$. Applying the range for $J$ to each pair gives $J=1,2,3$ for $S=0$ and the combined set $J=0,1,2,3,4$ for $S=1$.

##### Hydrogen example

Find the possible total angular momentum measurements for the hydrogen ground state and first excited level. The ground state is $1s$ with either spin projection. The first excited level contains $2s$ and $2p$ states with either spin projection. For $1s$, $\ell=0$ and $s=1/2$, so both endpoints of the range $\lvert\ell-s\rvert$ to $\ell+s$ equal $1/2$.

For $1s$, the total angular momentum magnitude is $\mechanical{J}=\sqrt{j(j+1)}\,\hbar=\sqrt{3/4}\,\hbar$. The allowed electric dipole excitation from $1s$ goes to $2p$ by $\Delta\ell=1$. For $2p$, $\ell=1$ and $s=1/2$, so $j=1/2$ or $3/2$, giving magnitudes $\sqrt{3/4}\,\hbar$ or $\sqrt{15/4}\,\hbar$.

##### LS coupling example 2 — Spectroscopic notation

For the $4p$ and $4d$ electrons, $L=1,2,3$, $S=0,1$, and the combined list is $J=0,1,2,3,4$. In the notebook's $n\,{}^{2S+1}L_J$ notation, the terms listed on this page are

| Spin $S$ | Orbital $L$ | Total $J$ | Terms |
| --- | --- | --- | --- |
| $0$ | $1,2,3$ | $1,2,3$, respectively | $4\,{}^1P_1$, $4\,{}^1D_2$, $4\,{}^1F_3$ |
| $1$ | $1$ | $0,1,2$ | $4\,{}^3P_0$, $4\,{}^3P_1$, $4\,{}^3P_2$ |
| $1$ | $2$ | $1,2,3$ | $4\,{}^3D_1$, $4\,{}^3D_2$, $4\,{}^3D_3$ |

For the remaining triplet in the $4p\,4d$ example, $S=1$ and $L=3$, so $J=2,3,4$. The terms are $4\,{}^3F_2$, $4\,{}^3F_3$, and $4\,{}^3F_4$.

##### Hund's rules

The topics are multi-electron atoms, Hund's rules, and examples. In the term symbol $\,{}^{2S+1}L_J$, identify the letter $L$, then the spin multiplicity $2S+1$, then the subscript $J$.

1. Maximize total spin $S$ subject to the Pauli exclusion principle.
2. Among terms satisfying the first rule, maximize total orbital angular momentum $L$.
3. For a subshell that is less than half full, select the smallest $J$.

##### Applying Hund's rules

The first five electrons in a $d$ subshell ($\ell=2$) occupy the five distinct orbitals $m_\ell=-2,-1,0,1,2$ with parallel spins. Using spin up for all five is a convention. All spin down gives the other extreme projection.

![[Kyle Kabasares - Modern Physics - Five electrons in a d subshell.png|**Fig. 40** Five singly occupied $d$ orbitals with parallel spins.]]

For two electrons in a $d$ subshell, parallel spins can occupy $m_\ell=-2,-1$ or $+1,+2$. These give the two extreme projections $M_L=-3$ and $+3$.

![[Kyle Kabasares - Modern Physics - Two electrons in a d subshell.png|**Fig. 41** Two parallel-spin configurations with extreme orbital projections.]]

##### Helium excited states

What are the $L$, $S$, and $J$ values for the first few excited states of helium? The ground configuration is $1s^2$. Excite one electron to form $1s\,2p$, consistent with the orbital dipole rule $\Delta\ell=\pm1$. The notes also ask how the $1s\,2s$ configuration can be reached and suggest asking Dr. Menke.

For $1s\,2p$, the first electron has $\ell_1=0$, $m_{\ell_1}=0$, and $s_1=1/2$. The second has $\ell_2=1$, $m_{\ell_2}=-1,0,1$, and $s_2=1/2$. This gives $L=1$ ($P$), $S=0$ or $1$, and $J=1$ for the singlet or $0,1,2$ for the triplet. The ordering predicted by the Hund-rule exercise puts $\,{}^1P_1$ highest and $\,{}^3P_0$ lowest by maximum $S$ and minimum $J$, with $\,{}^3P_1$ and $\,{}^3P_2$ between them.

For helium $1s\,2s$, both electrons have $\ell=0$ and $s=1/2$. Thus $L=0$, and $S=0,1$ gives the terms $\,{}^1S_0$ and $\,{}^3S_1$. In using Hund's rules, prioritize $S$, then $L$, then $J$.

##### Carbon term symbols

Carbon has six electrons in $1s^2\,2s^2\,2p^2$. The closed $1s$ and $2s$ subshells contribute zero net angular momentum. The two $2p$ electrons each have $\ell=1$ and $s=1/2$, giving $L=0,1,2$ and $S=0,1$ before applying the exclusion principle.

| $S$ | $L$ | $J$ | Term | Pauli restriction |
| --- | --- | --- | --- | --- |
| $0$ | $0$ | $0$ | $\,{}^1S_0$ | Allowed |
| $0$ | $1$ | $1$ | $\,{}^1P_1$ | Excluded |
| $0$ | $2$ | $2$ | $\,{}^1D_2$ | Allowed |
| $1$ | $0$ | $1$ | $\,{}^3S_1$ | Excluded |
| $1$ | $1$ | $0,1,2$ | $\,{}^3P_{0,1,2}$ | Allowed |
| $1$ | $2$ | $1,2,3$ | $\,{}^3D_{1,2,3}$ | Excluded |

The sketch argues against the triplet $D$ term by trying to place two parallel spins in the same $m_\ell$ orbital to reach $M_L=2$.

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Magnitude of the electron charge. |
| $\varepsilon$ | $1$ | Emissivity | Ratio of emitted power to that of a blackbody at the same temperature. |
| $h$ | $\unit{J\,s}$ | Planck constant | Relates the energy of one quantum to its frequency. |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\signal{\lambda}$ | $\unit{m}$ | De Broglie wavelength | Wavelength associated with momentum magnitude $\mechanical{p}$ through $h/\mechanical{p}$. |
| $\hat H$ | $\unit{J}$ | Hamiltonian | Operator for the total energy. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $\mechanical{\mu}$ | $\unit{kg}$ | Reduced mass | Effective mass of the relative motion in the two-body problem. |
| $\magnetic{\vec\mu}$ | $\unit{J/T}$ | Magnetic dipole moment | Couples a current loop or particle to an applied magnetic field. |
| $\magnetic{\mu}_B$ | $\unit{J/T}$ | Bohr magneton | Scale of the electron orbital magnetic moment. |
| $\mechanical{\vec S}$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum of a particle. |
| $\mechanical{\vec J}$ | $\unit{J\,s}$ | Total angular momentum | Vector sum of orbital and spin angular momenta. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $\tau$ | $\unit{s}$ | Mean lifetime | Reciprocal of the decay constant. |
