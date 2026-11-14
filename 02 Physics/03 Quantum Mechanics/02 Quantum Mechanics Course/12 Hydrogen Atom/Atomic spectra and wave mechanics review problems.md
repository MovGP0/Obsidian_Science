---
title: "Atomic spectra and wave mechanics review problems"
---

> [!TLDR]
> Practice matching wavefunctions, interpreting angular momentum, and constructing atomic terms from permitted spin and orbital states.

## Worked lecture material

##### Wave functions — Dr. Physics A

A traveling wave can be written as $\psi=e^{i(kx-\omega t)}$, where $i=\sqrt{-1}$. Euler's formula gives $e^{i\alpha x}=\cos(\alpha x)+i\sin(\alpha x)$. The real part is sinusoidal, $\cos(kx-\omega t)$, with wave number $k=2\pi/\signal{\lambda}$.

![[Kyle Kabasares - Modern Physics - Sinusoidal wavelength.png|**Fig. 42** One wavelength of a sinusoidal wave.]]

##### Sketching wave functions

1. Choose a trial energy $\energy{E}$. The turning points at $\energy{E}=\energy{U}(x)$ separate classically allowed and forbidden regions.
2. The local kinetic energy $\energy{E}-\energy{U}(x)$ varies with position. In the allowed region the local wave number is $k=\sqrt{2\mechanical{m}[\energy{E}-\energy{U}(x)]}/\hbar$.
3. In the allowed region, $\psi''=-k^2\psi$, so the curvature points toward the axis. It sharpens as $\energy{E}-\energy{U}(x)$ and $k$ increase.
4. In the forbidden region, $\psi''=\kappa^2\psi$ with $\kappa^2=2\mechanical{m}[\energy{U}(x)-\energy{E}]/\hbar^2$. The curvature points away from the axis, and a bound-state tail decays as $x\to\pm\infty$.
5. The ground state $n=1$ has no nodes. State $n$ has $n-1$ interior nodes.

![[Kyle Kabasares - Modern Physics - Turning points and kinetic energy.png|**Fig. 43** The trial energy intersects the potential at the turning points. The vertical gap inside gives the local kinetic energy.]]

6. The wave amplitude depends on $\energy{E}-\energy{U}(x)$. In the step-potential sketch the particle slows in region II and the probability $\int_{\mathrm{II}}\lvert\psi(x)\rvert^2\,dx$ increases with the amplitude. To see the role of the wave number, take $\psi=A\sin(kx)$, so $\psi'=kA\cos(kx)$ and $\psi^2+(\psi')^2/k^2=A^2$. Both $\psi$ and $\psi'$ are continuous at a finite step, but $k=\sqrt{2\mechanical{m}(\energy{E}-\energy{U})}/\hbar$ changes.
7. For $\energy{U}(x)=\energy{U}(-x)$ the definite-parity solutions have $\lvert\psi(x)\rvert^2=\lvert\psi(-x)\rvert^2$. An even wave function obeys $\psi(x)=+\psi(-x)$ and an odd one obeys $\psi(x)=-\psi(-x)$.

![[Kyle Kabasares - Modern Physics - Step potential amplitude.png|**Fig. 44** A stepped potential changes the wave number and amplitude between regions I and II.]]

##### Book study

With zero potential in the well, $k^2=(\mechanical{p}/\hbar)^2=2\mechanical{m}\energy{E}/\hbar^2$. In the forbidden region outside a finite well the wave function curves away from the axis.

##### Finite well with two interior potentials

Take $\energy{V}_2>\energy{E}>\energy{V}_1>0$. In region I, $\energy{V}=0$ and the kinetic energy is constant and maximal, so the de Broglie wavelength is constant there. The sketch shows a smaller amplitude in this region, where the particle moves faster. In region II, $\energy{V}=\energy{V}_1$, the kinetic energy decreases, the wavelength increases, and the sketch shows a larger amplitude. Outside both regions, $\energy{V}_2>\energy{E}$ and the bound-state wave function decays exponentially.

![[Kyle Kabasares - Modern Physics - Stepped finite well problem.png|**Fig. 45** Wave function in a stepped finite well with two oscillatory regions and evanescent tails.]]

##### Electron in an infinite well

For $\mechanical{L}=0.100\,\unit{nm}$, use $\energy{E}_n=n^2h^2/(8\mechanical{m}_e\mechanical{L}^{\,2})$. Substituting $h=6.626\times10^{-34}\,\unit{J\,s}$ and $\mechanical{m}_e=9.11\times10^{-31}\,\unit{kg}$ gives

$$
\energy{E}_1=6.02\times10^{-18}\,\unit{J}=37.7\,\unit{eV}.
$$

Using that rounded ground-state energy gives $\energy{E}_2=150.8\,\unit{eV}$, $\energy{E}_3=339.3\,\unit{eV}$, and $\energy{E}_4=603.2\,\unit{eV}$.

##### Reviewing hydrogen

- The Bohr model describes the electron as a point particle moving in a circle. Its postulated fixed energy levels give the correct energies and leave the origin of the quantization unexplained.
- The de Broglie model gives the same energies and explains quantization by treating the electron as a standing wave on a ring. The ring gives an effectively one-dimensional model.
- Both models give incorrect orbital angular momenta and lack a generalization to multi-electron atoms.
- The Schrödinger equation describes the electron as a three-dimensional wave. Boundary conditions give the quantized energies. The equation also gives the correct orbital angular momenta and generalizes to multi-electron atoms.

![[Kyle Kabasares - Modern Physics - Bohr orbit review.png|**Fig. 46** Circular Bohr orbits around a positive nucleus.]]

![[Kyle Kabasares - Modern Physics - De Broglie ring review.png|**Fig. 47** Standing matter wave around a ring.]]

##### Three-dimensional wave functions

For hydrogen, $\psi_{n\ell m}(r,\theta,\phi)=R_{n\ell}(r)Y_{\ell m}(\theta,\phi)$, or $\psi=R(r)f(\theta)g(\phi)$. The probability in $d\tau$ is $P(r,\theta,\phi)\,d\tau=\psi_{n\ell m}^*\psi_{n\ell m}\,d\tau$.

![[Kyle Kabasares - Modern Physics - Three-dimensional wave function coordinates.png|**Fig. 48** Spherical position coordinates $r$, $\theta$, and $\phi$.]]

For a bound electron the radial function tends to zero at infinity, consistent with normalizability and vanishing probability density far from the nucleus. The azimuthal factor must match at $\phi=0$ and $2\pi$. In general $g(\phi+2\pi)=g(\phi)$.

##### Total angular momentum example

An electron has $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$. For hydrogen in $3d$, $n=3$, $\ell=2$, and $s=1/2$. Find the possible $j$, $\mechanical{J}$, and $\mechanical{J}_z$. From $\lvert\ell-s\rvert$ through $\ell+s$, the values of $j$ are $3/2$ and $5/2$. The magnitude $\sqrt{j(j+1)}\,\hbar$ is respectively $\sqrt{15/4}\,\hbar$ and $\sqrt{35/4}\,\hbar$.

For the $3d$ example, $\mechanical{J}_z=m_j\hbar$ and $m_j=-j,-j+1,\ldots,j$. When $j=3/2$, $m_j=\pm1/2,\pm3/2$. When $j=5/2$, $m_j=\pm1/2,\pm3/2,\pm5/2$. The combined list of projections is $\mechanical{J}_z=\pm\hbar/2,\pm3\hbar/2,\pm5\hbar/2$.

##### LS coupling review

For two electrons outside a closed shell, $\mechanical{\vec L}=\mechanical{\vec L}_1+\mechanical{\vec L}_2$, $\mechanical{\vec S}=\mechanical{\vec S}_1+\mechanical{\vec S}_2$, and $\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S}$. The quantum numbers run from difference to sum for each addition, giving the label $n\,{}^{2S+1}L_J$.

The optical rules listed are $\Delta L=\pm1$, $\Delta S=0$, and $\Delta J=0,\pm1$. The handwritten exception again says $1\to1$. The electric dipole exception is $J=0\to J=0$.

For $4p$ and $4d$ electrons, $\ell_1=1$, $\ell_2=2$, and $s_1=s_2=1/2$. Thus $L=1,2,3$ and $S=0,1$. The boxed list on this page gives $J=1,2,3,4$. The $L=1$, $S=1$ case also gives $J=0$, as found on [[Hydrogen, spin, and the structure of the periodic table#LS coupling example|the section on LS coupling example]].

**Homework 8.3 — Differentiating an oscillator state**

The oscillator ground state and potential are

$$
\psi_0(x)=Ae^{-x^2/(2L^2)},\qquad
\energy{V}(x)=\tfrac12\mechanical{k}x^2=\frac{\hbar^2x^2}{2\mechanical{m}\mechanical{L}^{\,4}}.
$$

Define $\psi_{\mathrm{new}}(x)=L\,d\psi_0/dx$, so that $\psi_{\mathrm{new}}'=L\psi_0''$. Differentiating the Gaussian gives $\psi_0'=-(x/L^2)Ae^{-x^2/(2L^2)}$ and therefore $\psi_{\mathrm{new}}=-(Ax/L)e^{-x^2/(2L^2)}$. The product rule gives

$$
\psi_{\mathrm{new}}'=-\frac{A}{L}\left(1-\frac{x^2}{L^2}\right)e^{-x^2/(2L^2)}.
$$

For the second derivative, apply the product rule to $f=x^2$ and $g=e^{-x^2/(2L^2)}/L^2$. Then $f'=2x$ and $g'=-xe^{-x^2/(2L^2)}/L^4$, giving

$$
\psi_{\mathrm{new}}''=-\frac{A}{L}
\left(-\frac{x}{L^2}-\frac{2x}{L^2}+\frac{x^3}{L^4}\right)e^{-x^2/(2L^2)}.
$$

Substitute into $-\hbar^2\psi_{\mathrm{new}}''/(2\mechanical{m})+\energy{V}\psi_{\mathrm{new}}=\energy{E}\psi_{\mathrm{new}}$.

Homework 8.3 continues expanding the second derivative and restates the time-independent equation. The consistent Gaussian exponent throughout is $-x^2/(2L^2)$, and the last power in the derivative is $x^3$, as follows from differentiating $x^2e^{-x^2/(2L^2)}$. Equivalently, $\psi_{\mathrm{new}}''=(x^2/L^4-3/L^2)\psi_{\mathrm{new}}$. Inserting this into the equation cancels the $x^2$ term against the oscillator potential and gives $\energy{E}=3\hbar^2/(2\mechanical{m}L^2)$.

##### Penetration depth

Write the penetration depth as $\mechanical{\eta}=1/\alpha$.

$$
\mechanical{\eta}=\frac{\hbar}{\sqrt{2\mechanical{m}(\energy{V_0}-\energy{E})}},
\qquad
\energy{V_0}-\energy{E}=\frac{\hbar^2}{2\mechanical{m}\mechanical{\eta}^{\,2}}.
$$

For an electron and $\mechanical{\eta}=1.0\times10^{-9}\,\unit{m}$, use $\hbar=1.05\times10^{-34}\,\unit{J\,s}$ and $\mechanical{m}_e=9.11\times10^{-31}\,\unit{kg}$. The energy difference is $0.038\,\unit{eV}$.

**Homework set 11**

**11.1.** For $j=3/2$, the projections are $m_j=-3/2,-1/2,1/2,3/2$. The magnetic field defines the $z$-axis in the Stern–Gerlach experiment, giving four lines. For zero total spin and $\ell=1$, there are $2\ell+1=3$ lines from the orbital projections.

**11.2.** Hydrogen in $3d$ has $\ell=2$ and $s=1/2$. The range $\lvert\ell-s\rvert$ to $\ell+s$ gives $j=3/2,5/2$. The magnitudes are $\sqrt{15/4}\,\hbar$ and $\sqrt{35/4}\,\hbar$. The combined projections are $\mechanical{J}_z/\hbar=-5/2,-3/2,-1/2,1/2,3/2,5/2$.

**11.3(a).** For a $p$ electron, $\ell=1$ and $s=1/2$, so the possible $j$ values are $1/2$ and $3/2$. The $p\to s$ transition changes $\ell$ by $-1$.

**11.4(a).** Test the transitions using the order $(n,\ell,m_\ell,m_s)$.

1. $(5,2,1,1/2)\to(5,2,1,-1/2)$ fails the $\Delta\ell=\pm1$ condition.
2. $(4,3,0,1/2)\to(4,2,1,-1/2)$ changes the spin projection. The handwritten reason was $\Delta n\ne0$, although the earlier rule allows $\Delta n=0$.
3. $(5,2,-2,-1/2)\to(1,0,0,-1/2)$ fails both the $\Delta\ell$ and $\Delta m_\ell$ conditions.
4. The fourth transition is marked allowed. The calculation gives $\Delta\energy{E}=\energy{E}_f-\energy{E}_i=-(13.6\,\unit{eV})(1/n_f^2-1/n_i^2)=2.55\,\unit{eV}$.

##### Angle of orbital angular momentum

In the vector model,

$$
\cos\theta=\frac{\mechanical{L}_z}{\lvert\mechanical{\vec L}\rvert}
=\frac{m_\ell}{\sqrt{\ell(\ell+1)}}.
$$

![[Kyle Kabasares - Modern Physics - Orbital angular momentum angle.png|**Fig. 49** Projection of orbital angular momentum and the angle to the $z$-axis.]]

For $\ell=4$, $m_\ell$ ranges from $-4$ to $4$. The smallest angle corresponds to the largest cosine, at $m_\ell=4$, so $\theta_{\min}=\arccos(4/\sqrt{20})=26.6^\circ$. For $\ell=2$, the largest projection is $m_\ell=2$, giving $\theta_{\min}=\arccos(2/\sqrt6)=35.3^\circ$.

##### Transverse angular momentum

With $\ell=2$,

$$
\mechanical{L}_x^2+\mechanical{L}_y^2
=\mechanical{L}^{\,2}-\mechanical{L}_z^2
=[\ell(\ell+1)-m_\ell^2]\hbar^2.
$$

For $m_\ell=2$ the result is $(6-4)\hbar^2=2\hbar^2$.

**10.4(b–d).** For $\ell=2$, the largest value of $\mechanical{L}_x^2+\mechanical{L}_y^2$ is $6\hbar^2$ at $m_\ell=0$. At $m_\ell=1$ the sum is $6\hbar^2-\hbar^2=5\hbar^2$. The individual transverse components are indeterminate in this state. The smallest principal quantum number for $\ell=2$ is $n=3$, since $\ell\le n-1$.

##### Momentum expectation in an infinite well

For $n=3$ in a well of width $L$, $\psi_3(x)=\sqrt{2/L}\sin(3\pi x/L)$ inside the well and zero outside. Apply the momentum operator $\hat p_x=(\hbar/i)d/dx$.

$$
\begin{aligned}
\langle\mechanical{p}_x\rangle
&=\int_0^L\psi_3^*\frac{\hbar}{i}\frac{d\psi_3}{dx}\,dx\\
&=\frac{6\pi\hbar}{iL^2}\int_0^L
\sin(3\pi x/L)\cos(3\pi x/L)\,dx\\
&=\frac{3\pi\hbar}{iL^2}\left[-\frac{L}{6\pi}\cos(6\pi x/L)\right]_0^L=0.
\end{aligned}
$$

The two endpoint cosines are equal.

##### Problems from the book

**6-23(a).** For $\energy{E}_4<\energy{V}_0$, the fourth bound state in a finite well has $n-1=3$ interior nodes.

![[Kyle Kabasares - Modern Physics - Fourth state of a finite well.png|**Fig. 50** Fourth bound-state sketch in a finite square well.]]

**6-26.** Sketch a wave function for a stepped well with $\energy{V}_1<\energy{E}<\energy{V}_2$.

![[Kyle Kabasares - Modern Physics - Stepped well book problem.png|**Fig. 51** A wave function with two oscillatory regions and tails in the exterior potential $V_2$.]]

**6-3.** Given $\psi(x)=Ae^{-x^2/(2L^2)}$ and $\energy{E}=\hbar^2/(2\mechanical{m}L^2)$, use the time-independent Schrödinger equation. The first derivative is $\psi'=-(Ax/L^2)e^{-x^2/(2L^2)}$. The product rule gives

$$
\psi''(x)=\frac{A}{L^2}\frac{d}{dx}\left[-xe^{-x^2/(2L^2)}\right]
=\frac{A}{L^2}\left[\frac{x^2}{L^2}-1\right]e^{-x^2/(2L^2)}.
$$

**6-3, continued.** Solve for $\energy{V}(x)$ and substitute the Gaussian and its second derivative.

$$
\begin{aligned}
\energy{V}(x)
&=\energy{E}+\frac{\hbar^2}{2\mechanical{m}}\frac{\psi''(x)}{\psi(x)}\\
&=\frac{\hbar^2}{2\mechanical{m}L^2}+\frac{\hbar^2}{2\mechanical{m}}
\left(\frac{x^2}{L^4}-\frac{1}{L^2}\right)
=\frac{\hbar^2x^2}{2\mechanical{m}L^4}.
\end{aligned}
$$

This is $\energy{V}(x)=\tfrac12\mechanical{k}x^2$ with $\mechanical{k}=\hbar^2/(\mechanical{m}L^4)$.

**6-4(a).** The classical kinetic energy at position $x$ is

$$
\energy{K}(x)=\energy{E}-\energy{V}(x)=
\frac{\hbar^2}{2\mechanical{m}L^2}-\frac{\hbar^2x^2}{2\mechanical{m}L^4}
=\frac{\hbar^2(L^2-x^2)}{2\mechanical{m}L^4}.
$$

**6-4(b).** A classical turning point has $\energy{K}=0$, or $\energy{E}=\energy{V}(x)$. Here $L^2-x^2=0$, so $x=\pm L$.

**6-4(c).** Equate the coefficients in $\energy{V}(x)=\tfrac12\mechanical{m}\mechanical{\omega}^{\,2}x^2=\hbar^2x^2/(2\mechanical{m}L^4)$. This gives $\mechanical{\omega}=\hbar/(\mechanical{m}L^2)$. The handwritten intermediate step cancels both factors of mass when solving for $\omega^2$. Retaining them gives

$$
\energy{E}=\energy{V}(x)+\energy{K}(x)=\tfrac12\mechanical{m}\mechanical{\omega}^{\,2}L^2
=\frac{\hbar^2}{2\mechanical{m}L^2}=\tfrac12\hbar\mechanical{\omega}.
$$

Also $\hbar=h/(2\pi)$, so $\hbar^2=h^2/(4\pi^2)$.

The de Broglie wavelength satisfies $\signal{\lambda}=h/\mechanical{p}=h/(\mechanical{m}\mechanical{v})$, where $\mechanical{p}=\sqrt{2\mechanical{m}\energy{K}}$ in the nonrelativistic case.

##### 6-6(a), crossed-out work

The wave function is $\psi(x)=A\sin(kx)$ with $k=2.5\times10^{10}\,\unit{m^{-1}}$. The work sets up the expectation integral with $\hat p=(\hbar/i)\partial/\partial x$ and notes that $\psi''=-k^2\psi$ for the zero-potential equation.

**6-16.** The infinite-well $n=2$ to $n=1$ separation corresponds to a photon with $\signal{\lambda}=694.3\,\unit{nm}$.

$$
\Delta\energy{E}=\energy{E}_2-\energy{E}_1=\frac{3\pi^2\hbar^2}{2\mechanical{m}_eL^2}
=\frac{hc}{\signal{\lambda}},\qquad
L=\sqrt{\frac{3\pi^2\hbar^2\signal{\lambda}}{2\mechanical{m}_ehc}}
=0.791\,\unit{nm}.
$$

**10.6(a).** Model the electron as a classical uniform sphere of radius $r$. Its angular momentum is $\mechanical{L}=\mechanical{I}\mechanical{\omega}=(2/5)\mechanical{m}_e r^2\mechanical{\omega}=(2/5)\mechanical{m}_er\mechanical{v}$. Equating this to $\sqrt{s(s+1)}\,\hbar=\sqrt{3/4}\,\hbar$ gives a surface speed of $2.51\times10^{11}\,\unit{m/s}$, about $837c$. The result exposes the failure of the classical spinning-sphere model.

##### Understanding the Stern–Gerlach experiment

A charge moving around a circular orbit has a magnetic moment proportional to its angular momentum. By the right-hand rule, $\mechanical{\vec L}=\mechanical{m}(\mechanical{\vec r}\times\mechanical{\vec v})$. For positive charge the vectors are parallel. For negative charge they are antiparallel.

$$
\magnetic{\mu}=\circuit{I}\mechanical{A}
=\electric{q}\frac{\mechanical{v}}{2\pi r}\pi r^2
=\frac{\electric{q}}{2\mechanical{m}}\mechanical{L}.
$$

![[Kyle Kabasares - Modern Physics - Angular momentum of circular current.png|**Fig. 52** Angular momentum of a particle following a circular orbit.]]

For the hydrogen electron, the orbital moment has magnitude $\magnetic{\mu}_B\sqrt{\ell(\ell+1)}$ and $\magnetic{\mu}_z=-m_\ell\magnetic{\mu}_B$, with $\magnetic{\mu}_B=\electric{e}\hbar/(2\mechanical{m}_e)$.

Atoms from an oven are collimated and sent through a magnet whose pole shape produces a gradient in $\magnetic{B}_z$ along $z$. The description treats the transverse components as constant along the beam. Classical dipoles could have a continuum of orientations.

![[Kyle Kabasares - Modern Physics - Stern Gerlach apparatus.png|**Fig. 53** Oven, collimator, shaped magnet poles, and detector in the Stern–Gerlach apparatus.]]

With orbital angular momentum alone, there are $2\ell+1$ possible values of $\magnetic{\mu}_z$ and thus $2\ell+1$ beam positions, counting the undeflected one. This gives one position for $\ell=0$ and three for $\ell=1$, corresponding to $m_\ell=-1,0,1$.

The silver ground configuration is $[\mathrm{Kr}]\,4d^{10}5s^1$. The $s$ valence electron has $\ell=0$, so the orbital-only argument predicts one beam position. The experiment gave two deflections.

The total angular momentum and its projection satisfy

$$
\mechanical{\vec J}=\mechanical{\vec L}+\mechanical{\vec S},\qquad
\lvert\mechanical{\vec J}\rvert=\sqrt{j(j+1)}\,\hbar,\qquad
\mechanical{J}_z=m_j\hbar.
$$

For one electron, $j=\ell+s$ or $\lvert\ell-s\rvert$, and the $2j+1$ projections are $m_j=-j,-j+1,\ldots,j$. For $\ell=0$, $j=s=1/2$, so the two projections are from spin. For $\ell=1$, $j=3/2$ or $1/2$. The vector model describes these as parallel and antiparallel coupling, respectively.

##### Example problems

Two electrons have $\ell_1=2$ and $\ell_2=3$. The possible total orbital angular momentum quantum numbers range from $\lvert2-3\rvert=1$ to $2+3=5$, giving $L=1,2,3,4,5$.

**11.4.** The rules used here allow any $\Delta n$, require $\Delta L=\pm1$ and $\Delta S=0$, and allow $\Delta J=0,\pm1$ except $J=0\to0$.

| Transition | Classification |
| --- | --- |
| $4S_{1/2}\to3S_{1/2}$ | Forbidden, $\Delta L=0$. |
| $4S_{1/2}\to3P_{3/2}$ | Allowed, $\Delta L=+1$ and $\Delta J=+1$. |
| $4P_{3/2}\to3S_{1/2}$ | Allowed, $\Delta L=-1$ and $\Delta J=-1$. |
| $4D_{5/2}\to3P_{1/2}$ | Forbidden, $\lvert\Delta J\rvert=2$. |
| $4D_{3/2}\to3P_{1/2}$ | Allowed, $\Delta L=-1$ and $\Delta J=-1$. |
| $4D_{3/2}\to3S_{1/2}$ | Forbidden, $\lvert\Delta L\rvert=2$. |
| $5D_{3/2}\to4S_{1/2}$ | Forbidden, $\lvert\Delta L\rvert=2$. |
| $5P_{1/2}\to3S_{1/2}$ | Allowed. |

**6-23.** Sketch $\psi(x)$ and $P(x)=\lvert\psi(x)\rvert^2$ for the $n=4$ state of a finite square well. The wave function has three nodes, giving four lobes in the probability density. The small potential sketch is drawn as an upward step within $0<x<L$, while the wave function and problem label describe a well.

![[Kyle Kabasares - Modern Physics - Finite well wave function and density.png|**Fig. 54** The notebook's potential, fourth-state wave function, and squared modulus sketches.]]

**6-26.** For $\energy{V}_1<\energy{E}<\energy{V}_2$, sketch the stepped well and its wave function separately.

![[Kyle Kabasares - Modern Physics - Stepped well and separate wave function.png|**Fig. 55** Stepped potential and wave function with the interior step at $x_1$ and the right boundary at $x_2$.]]

For the last sketch, as the kinetic energy decreases, momentum decreases and $\signal{\lambda}=h/\mechanical{p}$ increases.

![[Kyle Kabasares - Modern Physics - Variable wavelength in a well.png|**Fig. 56** Two wave functions in a varying potential between infinite walls, at the indicated energies of $2\,\unit{eV}$ and $0.5\,\unit{eV}$.]]

##### Possible energy states of atomic carbon

Carbon has six electrons, $1s^2\,2s^2\,2p^2$. The closed subshell contributions cancel. Each remaining electron has $n=2$, $\ell=1$, and $s=1/2$. Coupling gives $L=0,1,2$ and $S=0,1$, with $J$ running from $\lvert L-S\rvert$ to $L+S$. Before the Pauli restriction, the union of $J$ values is $0,1,2,3$.

| $S$ | $L$ | $J$ | Spectroscopic notation on this page | Pauli restriction |
| --- | --- | --- | --- | --- |
| $0$ | $0$ | $0$ | $2\,{}^1S_0$ | Allowed |
| $0$ | $1$ | $1$ | $2\,{}^1P_1$ | Excluded, as marked on [[Hydrogen, spin, and the structure of the periodic table#Carbon term symbols\|the section on Carbon term symbols]] |
| $0$ | $2$ | $2$ | $2\,{}^1D_2$ | Allowed |
| $1$ | $0$ | $1$ | $2\,{}^3S_1$ | Excluded |
| $1$ | $1$ | $0,1,2$ | $2\,{}^3P_{0,1,2}$ | Allowed |
| $1$ | $2$ | $1,2,3$ | $2\,{}^3D_{1,2,3}$ | Excluded |

The handwritten explanation for the excluded triplet $S$ term sketches two parallel spins occupying one orbital. The $S$ in that term symbol means total orbital quantum number $L=0$, while each electron in this configuration remains a $p$ electron.

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\electric{e}$ | $\unit{C}$ | Elementary charge | Magnitude of the electron charge. |
| $h$ | $\unit{J\,s}$ | Planck constant | Relates the energy of one quantum to its frequency. |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\signal{\lambda}$ | $\unit{m}$ | De Broglie wavelength | Wavelength associated with momentum magnitude $\mechanical{p}$ through $h/\mechanical{p}$. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $\magnetic{\mu}_B$ | $\unit{J/T}$ | Bohr magneton | Scale of the electron orbital magnetic moment. |
| $\mechanical{\vec S}$ | $\unit{J\,s}$ | Spin angular momentum | Intrinsic angular momentum of a particle. |
| $\mechanical{\vec J}$ | $\unit{J\,s}$ | Total angular momentum | Vector sum of orbital and spin angular momenta. |
| $\lambda$ | $\unit{s^{-1}}$ | Decay constant | Probability rate for the decay of an individual nucleus. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
| $\tau$ | $\unit{s}$ | Mean lifetime | Reciprocal of the decay constant. |
