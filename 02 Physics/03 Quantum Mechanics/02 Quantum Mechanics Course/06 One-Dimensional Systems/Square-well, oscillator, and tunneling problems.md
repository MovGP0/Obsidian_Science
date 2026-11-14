---
title: "Square-well, oscillator, and tunneling problems"
---

> [!TLDR]
> Match wavefunctions and probability densities across boundaries and compare confined, evanescent, and oscillator solutions.

## Worked lecture material

The classical wave equation has a second time derivative, $\partial_x^2\Psi=\signal{v}^{-2}\partial_t^2\Psi$. The time-dependent Schrödinger equation has a first time derivative.

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{\partial^2\Psi(x,t)}{\partial x^2}
+\energy{V}(x,t)\Psi(x,t)=i\hbar\frac{\partial\Psi(x,t)}{\partial t}.
$$

The terms on the left are the kinetic and potential contributions to the Hamiltonian acting on $\Psi$. When the potential is time independent, the operator is $\hat H=-\hbar^2\partial_x^2/(2\mechanical{m})+\energy{V}(x)$. Separating $\Psi(x,t)=\psi(x)\phi(t)$ gives the time-independent equation,

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dx^2}+\energy{V}(x)\psi=\energy{E}\psi.
$$

Here $\energy{E}$ is the total energy. For a bound state with a regular finite potential, $\psi$ and $\psi'$ are continuous, $\psi\to0$ at either infinity, and $\psi$ satisfies the equation. The curvature satisfies

$$
\frac{d^2\psi}{dx^2}=\frac{2\mechanical{m}}{\hbar^2}(\energy{V}-\energy{E})\psi.
$$

A larger energy difference gives a larger magnitude of curvature at a fixed $\psi$.

![[Kyle Kabasares - Modern Physics - Wave function across a potential barrier.png|**Fig. 17** The sketch shows a wave function across a narrow region of elevated potential energy.]]

##### Square wells

The lecture covers the infinite square well, the finite square well, and wave functions for variations on a square well. To solve a problem with the Schrödinger equation, identify the potential energy and make any necessary simplifying assumptions, identify the boundary conditions, and find the general solution.

The time-independent equation is $\hat H\psi=\energy{E}\psi$, with

$$
\hat H=-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2}{dx^2}+\energy{V}(x).
$$

The first term is the kinetic-energy operator and the second gives the potential energy.

![[Kyle Kabasares - Modern Physics - Infinite square well states.png|**Fig. 18** The infinite well confines the particle between $0$ and $\mechanical{L}$. The $n=1$ state has zero interior nodes and $n=2$ has one, following the rule $n-1$.]]

The potential is infinite in region I ($x<0$) and region III ($x>\mechanical{L}$). It is zero in region II ($0\le x\le\mechanical{L}$). The particle is confined to the well and $\psi=0$ in regions I and III. In region II,

$$
-\frac{\hbar^2}{2\mechanical{m}}\frac{d^2\psi}{dx^2}=\energy{E}\psi.
$$

Inside the well, write $\psi''=-\signal{k}^2\psi$ with $\signal{k}=\sqrt{2\mechanical{m}\energy{E}/\hbar^2}$. The general solution is

$$
\psi_{\mathrm{II}}(x)=A\sin(\signal{k}x)+B\cos(\signal{k}x).
$$

Continuity with the exterior zero solution gives $\psi_{\mathrm I}(0)=\psi_{\mathrm{II}}(0)=0$ and $\psi_{\mathrm{II}}(\mechanical{L})=\psi_{\mathrm{III}}(\mechanical{L})=0$. At $x=0$, the first condition sets $B=0$. At $x=\mechanical{L}$, the second condition requires $A\sin(\signal{k}\mechanical{L})=0$. A nontrivial state therefore has $\signal{k}\mechanical{L}=n\pi$ with $n=1,2,3,\ldots$. The boundary conditions produce quantization.

$$
\frac{2\mechanical{m}\energy{E}}{\hbar^2}\mechanical{L}^2=n^2\pi^2,
\qquad
\energy{E}_n=\frac{\hbar^2\pi^2}{2\mechanical{m}\mechanical{L}^2}n^2.
$$

The handwritten box omits the square on $\hbar$, which appears in the preceding line.

Normalize the infinite-well solution.

$$
\begin{aligned}
1&=\int_{-\infty}^{\infty}\lvert\psi\rvert^2\,dx
=A^2\int_0^{\mechanical{L}}\sin^2(\signal{k}x)\,dx\\
&=A^2\left[\frac x2-\frac{\sin(2\signal{k}x)}{4\signal{k}}\right]_0^{\mechanical{L}}
=A^2\frac{\mechanical{L}}2 .
\end{aligned}
$$

The sine term vanishes at both endpoints because $\signal{k}\mechanical{L}=n\pi$. The handwritten antiderivative lacks the $\signal{k}$ in the denominator. Choose $A=\sqrt{2/\mechanical{L}}$. The wave function and energies are

$$
\psi_{\mathrm{II}}(x)=\sqrt{\frac2{\mechanical{L}}}\sin(\signal{k}x),
\qquad \signal{k}=\frac{\sqrt{2\mechanical{m}\energy{E}}}{\hbar},
\qquad \energy{E}_n=\frac{\hbar^2\pi^2}{2\mechanical{m}\mechanical{L}^2}n^2,\quad n=1,2,\ldots
$$

The position probability density is $P(x)=\lvert\psi(x)\rvert^2$.

##### Infinite square well

Identify the potential first. It vanishes for $0\le x\le\mechanical{L}$ and is infinite elsewhere. There is zero probability of finding the particle outside the well, so $\psi_{\mathrm I}=\psi_{\mathrm{III}}=0$.

![[Kyle Kabasares - Modern Physics - Infinite well regions.png|**Fig. 19** The potential is zero inside region II and rises to infinity at the boundaries with regions I and III.]]

The general solution of the time-independent Schrödinger equation is mathematically valid. The boundary conditions select the quantized solutions, and normalization allows probabilities to be calculated. The notes caution against picturing the trapped particle as following a classical trajectory.

![[Kyle Kabasares - Modern Physics - Infinite well wave function review.png|**Fig. 20** The two lowest infinite-well wave functions are sketched between the boundaries at $0$ and $\mechanical{L}$.]]

![[Kyle Kabasares - Modern Physics - Position measurement and collapse.png|**Fig. 21** The notes illustrate wave-function collapse on position measurement with a narrow peak near $x=\mechanical{L}/4$.]]

The same-axis position and momentum obey $\Delta x\,\Delta\mechanical{p}_x\ge\hbar/2$. For $x$ and the perpendicular momentum component $\mechanical{p}_y$, the bound shown is $\Delta x\,\Delta\mechanical{p}_y\ge0$. The notes link simultaneous measurement in different directions to orthogonality and give $\hat{\mathbf x}\cdot\hat{\mathbf y}=\cos90^\circ=0$.

The roman numeral in $\psi_{\mathrm I}$ denotes region I. A state label such as $\psi_1$ refers to the $n=1$ solution, here considered in region II. Orthogonality of distinct states gives

$$
\int_{-\infty}^{\infty}\psi_n^*(x)\psi_m(x)\,dx=0,\qquad n\ne m.
$$

The asterisk denotes complex conjugation. For the cat-in-a-box example, take

$$
\psi_{\mathrm{cat}}=\frac1{\sqrt2}\psi_{\mathrm{alive}}+\frac1{\sqrt2}\psi_{\mathrm{dead}}.
$$

Integrating $\psi_{\mathrm{cat}}^*\psi_{\mathrm{cat}}$ over all space gives

$$
\begin{aligned}
\int\psi_{\mathrm{cat}}^*\psi_{\mathrm{cat}}\,dx
={}&\frac12\int\psi_{\mathrm{alive}}^*\psi_{\mathrm{alive}}\,dx
+\frac12\int\psi_{\mathrm{alive}}^*\psi_{\mathrm{dead}}\,dx\\
&+\frac12\int\psi_{\mathrm{dead}}^*\psi_{\mathrm{alive}}\,dx
+\frac12\int\psi_{\mathrm{dead}}^*\psi_{\mathrm{dead}}\,dx.
\end{aligned}
$$

The cross terms vanish because the two states are orthogonal. The diagonal terms give one in total for normalized component states.

Each diagonal integral in the cat example is one, so the combined norm is $1/2+1/2=1$.

For a particle in an infinite square well with only three states in the expansion, write $\psi_{\mathrm{particle}}=A(c_1\psi_1+c_2\psi_2+c_3\psi_3)$. The component wave functions can be chosen real, so $\psi_i^*=\psi_i$. Orthogonality removes the cross terms on integration. For real coefficients and normalized components,

$$
\int_0^{\mechanical{L}}\lvert\psi_{\mathrm{particle}}\rvert^2dx
=A^2(c_1^2+c_2^2+c_3^2)=1.
$$

##### Finite square well

Stronger confinement spreads the energy levels farther apart. In the classically forbidden region to the right of the well, the bound-state wave function decays as

$$
\psi(x)=\psi_{\mathrm{edge}}e^{-(x-\mechanical{L})/\eta},
\qquad
\eta=\frac1\alpha=\frac{\hbar}{\sqrt{2\mechanical{m}(\energy{V}-\energy{E})}}.
$$

The handwritten exponent places $\eta$ in the numerator. The displayed definition makes $\eta$ a length and therefore puts it in the denominator. At the finite wall, $\psi_{\mathrm{II}}(\mechanical{L})=\psi_{\mathrm{III}}(\mechanical{L})$ and $\psi'_{\mathrm{II}}(\mechanical{L})=\psi'_{\mathrm{III}}(\mechanical{L})$. At an infinitely high wall, $\psi$ goes to zero at the boundary, and its derivative can jump there.

![[Kyle Kabasares - Modern Physics - Infinite wall matching.png|**Fig. 22** The ground-state wave function vanishes at the infinitely high walls. Its slope at the boundary can differ from the slope of the exterior zero solution.]]

![[Kyle Kabasares - Modern Physics - Finite well second state.png|**Fig. 23** The $n=2$ wave function in a finite square well extends beyond both walls.]]

The time-independent Schrödinger equation gives

$$
-\frac{\hbar^2}{2\mechanical{m}}\psi''+\energy{V}\psi=\energy{E}\psi,
\qquad
\psi''=\frac{2\mechanical{m}}{\hbar^2}(\energy{V}-\energy{E})\psi.
$$

The curvature depends on the difference between potential and total energy. An electron confined in a semiconductor layer is one application of a quantum well. Another model pictures an electron confined between parallel capacitor plates with a uniform electric field.

![[Kyle Kabasares - Modern Physics - Parallel plates.png|**Fig. 24** The electric field between the charged plates is directed from the positive plate to the negative plate.]]

![[Kyle Kabasares - Modern Physics - Tilted infinite well.png|**Fig. 25** The potential rises linearly across the well from $0$ to $\quantity{5}{nm}$. The sketch marks a level with $n=5$.]]

##### Quantum harmonic oscillator

In a symmetric potential $\energy{V}(-x)=\energy{V}(x)$, the eigenfunctions can have even or odd parity, $\psi(-x)=\pm\psi(x)$. Either way $\lvert\psi(-x)\rvert^2=\lvert\psi(x)\rvert^2$. The bound-state wave function decays asymptotically in the forbidden regions with $\energy{V}>\energy{E}$ and oscillates in the allowed regions with $\energy{V}<\energy{E}$.

![[Kyle Kabasares - Modern Physics - Harmonic oscillator turning points.png|**Fig. 26** The quadratic potential $\energy{V}(x)=\tfrac12\mechanical{m}\mechanical{\omega}^2x^2$ is shown with low-lying states and turning points at $-A$ and $+A$ for the marked energy.]]

##### Harmonic oscillator wave functions

The eigenfunctions are Gaussian factors times Hermite polynomials. With $q=x\sqrt{\mechanical{m}\mechanical{\omega}/\hbar}$,

$$
\psi_n=C_n e^{-q^2/2}H_n(q),
\qquad
\psi_0=A_0e^{-q^2/2},\qquad
\psi_1=A_1q e^{-q^2/2},\qquad
\psi_2=A_2(1-2q^2)e^{-q^2/2}.
$$

The scale factors and overall signs can be absorbed into the constants. The lecture of October 20, 2014, repeats the three oscillator functions.

##### Barrier boundary conditions

![[Kyle Kabasares - Modern Physics - Three regions of a finite barrier.png|**Fig. 27** In regions I and III the energy exceeds the potential and the wave number is real. In region II the potential exceeds the total energy, giving an imaginary wave number.]] 

Match the amplitudes and first derivatives across the two interfaces.

$$
\begin{aligned}
\psi_{\mathrm I}(0)&=\psi_{\mathrm{II}}(0),
& \psi_{\mathrm{II}}(\mechanical{L})&=\psi_{\mathrm{III}}(\mechanical{L}),\\
\psi'_{\mathrm I}(0)&=\psi'_{\mathrm{II}}(0),
& \psi'_{\mathrm{II}}(\mechanical{L})&=\psi'_{\mathrm{III}}(\mechanical{L}).
\end{aligned}
$$

The free-particle solution for $x<0$ is $\psi_{\mathrm I}=Ae^{i\signal{k}_1x}+Be^{-i\signal{k}_1x}$. Euler's identity gives $e^{i\theta}=\cos\theta+i\sin\theta$. With the usual time factor, the positive exponent describes a wave traveling right and the negative exponent describes one traveling left. The incident amplitude $A$ is nonzero because a particle was sent toward the barrier. The amplitude $B$ accounts for reflection. The red note says to keep the crossed-out $B$ term.

Rearrange the stationary Schrödinger equation to read $\psi''=2\mechanical{m}(\energy{V}-\energy{E})\psi/\hbar^2$. In regions I and III, $\energy{V}=0$ and the coefficient is negative for $\energy{E}>0$. The wave numbers $\signal{k}_1$ and $\signal{k}_3$ are real and the solutions oscillate. In region II with $\energy{V}>\energy{E}$ the coefficient is positive, and $\signal{k}_2=i\kappa$ is imaginary, with $\kappa=\sqrt{2\mechanical{m}(\energy{V}-\energy{E})}/\hbar$.

The term $Ce^{i\signal{k}_2 x}=Ce^{-\kappa x}$ decays. The source keeps only this term in the barrier. The general solution for matching a barrier of finite width includes both $e^{-\kappa x}$ and $e^{+\kappa x}$. In region III write $\psi_{\mathrm{III}}=De^{i\signal{k}_3 x}+Fe^{-i\signal{k}_3 x}$. Here $F=0$ because no particle is incident from the right.

##### Tunneling and expectation values

The lecture returns to amplitudes and wavelengths at a potential barrier. Regions I and III have zero potential, while region II has potential $\energy{V}_0$. On the incident side $\psi_{\mathrm I}=Ae^{i\signal{k}_1x}+Be^{-i\signal{k}_1x}$, with incident and reflected terms. The $\signal{k}_j$ values are set by the difference between the total energy and the potential in each region.

![[Kyle Kabasares - Modern Physics - Rectangular potential barrier.png|**Fig. 28** The review sketch marks the three regions, the barrier height $\energy{V}_0$, and its width $\mechanical{L}$. The energy line on this sketch is above the barrier.]]

In region III the solution is $\psi_{\mathrm{III}}=Fe^{ik_3x}+Ge^{-ik_3x}$. There is no wave incident from the right, so $G=0$ and the first term is the transmitted wave.

The reflected wave in region I is complex. Its squared modulus is

$$
\lvert\psi_{\mathrm{I,ref}}\rvert^2
=(B^*e^{ik_1x})(Be^{-ik_1x})
=B^*B=\lvert B\rvert^2.
$$

The reflection and transmission coefficients for equal wave numbers in regions I and III are

$$
R=\frac{\lvert\psi_{\mathrm{I,ref}}\rvert^2}{\lvert\psi_{\mathrm{I,inc}}\rvert^2}
=\frac{B^*B}{A^*A},
\qquad
T=\frac{F^*F}{A^*A}.
$$

For a barrier with $\energy{E}<\energy{V_0}$, the equation in region II is

$$
-\frac{\hbar^2}{2\mechanical{m}}\psi_{\mathrm{II}}''
+\energy{V_0}\psi_{\mathrm{II}}
=\energy{E}\psi_{\mathrm{II}}.
$$

Thus $\psi_{\mathrm{II}}''=\kappa^2\psi_{\mathrm{II}}$, where $\kappa=\sqrt{2\mechanical{m}(\energy{V_0}-\energy{E})}/\hbar$. The two terms $Ce^{ik_2x}+De^{-ik_2x}$ are real exponentials in $x$ because $k_2=i\kappa$ and $k_2^2=2\mechanical{m}(\energy{E}-\energy{V_0})/\hbar^2<0$. For a barrier of width $\mechanical{L}$,

$$
T=\left[1+\frac{\energy{V_0}^{\,2}\sinh^2(\kappa\mechanical{L})}
{4\energy{E}(\energy{V_0}-\energy{E})}\right]^{-1}.
$$

##### Expectation values

If you do an experiment to measure some characteristic of a quantum particle, what do you expect to find?

## Source

Kyle Kabasares, *Modern Physics (Physics 10, UC Merced 2014)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{E}_n$ | $\unit{eV}$ | Bound-state energy | Energy of the $n$th level relative to ionization. |
| $\hat H$ | $\unit{J}$ | Hamiltonian | Operator for the total energy. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent multiplication term in the Hamiltonian. |
| $R$ | $\unit{Bq}$ | Activity | Number of radioactive decays per unit time. |
