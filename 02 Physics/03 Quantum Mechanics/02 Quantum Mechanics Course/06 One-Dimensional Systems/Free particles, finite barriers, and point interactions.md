---
title: "Free particles, finite barriers, and point interactions"
---

> [!TLDR]
> Match wavefunctions at boundaries, compare probability currents, and account for derivative jumps at delta potentials.

## Worked lecture material

##### ) — One-dimensional potentials

Topics include the free particle ($V=0$), infinite and finite barriers, the Dirac delta, the particle in a box, and the harmonic oscillator. The margin notes quantized energy.

##### Characteristics of acceptable wavefunctions

1. Single valued, meaning one output for each input.
2. Finite over finite ranges in the examples considered.
3. Continuous.
4. Continuous in the first derivative where the potential is finite and regular. Singular potentials and infinite walls can require different matching conditions.

![[Kyle Kabasares - Quantum Mechanics - Wavefunction Admissibility Sketches.png|**Fig. 10** A multivalued curve, a divergence, and a delta-like spike at a specified position.]]

##### Curvature in the time-independent Schrödinger equation

The spatial equation is second order. The second derivative governs the concavity of a graph, just as the second derivative of position with respect to time gives acceleration. For a real wavefunction,

$$
\psi''(x)=\frac{2m}{\hbar^2}(V-E)\psi(x).
$$

The sign of $V-E$ determines whether $\psi''$ has the same sign as $\psi$ or the opposite sign. The magnitude of $\psi''$ is proportional to $\lvert V-E\rvert$ and $\lvert\psi\rvert$.

| Sign of $\psi$ | Forbidden region, $E<V$ | Allowed region, $E>V$ |
| --- | --- | --- |
| Positive | Concave up | Concave down |
| Negative | Concave down | Concave up |

The sketch compares three solutions near a classical turning point, where $V=E$. A and B diverge on the right. C decays in the forbidden region and is the only candidate of the three for a normalizable state.

![[Kyle Kabasares - Quantum Mechanics - Wavefunction at Classical Turning Point.png|**Fig. 11** Potential, energy, and trial solutions through the classical turning point.]]

A potential can support both bound states and scattering states. Below $\energy{E'}$ the bound-state energies are discrete. Above $\energy{E'}$ the scattering energies are unquantized.

![[Kyle Kabasares - Quantum Mechanics - Bound Levels and Scattering Threshold.png|**Fig. 12** Bound levels below the scattering threshold for a potential with different asymptotic values.]]

##### Free particle

For a free particle there is no potential, $\energy{V(x)}=0$. The time-independent Schrödinger equation is

$$
\psi''=-\frac{2m\energy{E}}{\hbar^2}\psi=-\signal{k}^2\psi,
\qquad
\signal{k}=\frac{\sqrt{2m\energy{E}}}{\hbar}.
$$

Its solution is $\psi(x)=Ae^{i\signal{k}x}+Be^{-i\signal{k}x}$, and $\energy{E}$ is continuous. The time-dependent wavefunction is

$$
\Psi(x,t)=\left(Ae^{i\signal{k}x}+Be^{-i\signal{k}x}\right)e^{-i\energy{E}t/\hbar}.
$$

Using $\energy{E}=h\signal{f}$ and $\signal{\omega}=2\pi\signal{f}=\energy{E}/\hbar$ gives

$$
\Psi(x,t)
=Ae^{i\signal{k}(x-(\signal{\omega}/\signal{k})t)}
+Be^{-i\signal{k}(x+(\signal{\omega}/\signal{k})t)}.
$$

The first term moves to the right and the second to the left. The phase speed is

$$
\mechanical{v_{\mathrm{phase}}}
=\frac{\signal{\omega}}{\signal{k}}
=\frac{2\pi\signal{f}}{2\pi/\signal{\lambda}}
=\signal{\lambda}\signal{f}.
$$

For the free particle, $\energy{E}=\hbar^2\signal{k}^2/(2m)$, so the phase speed is

$$
\mechanical{v_{\mathrm{phase}}}
=\frac{\signal{\omega}}{\signal{k}}
=\frac{\energy{E}}{\hbar\signal{k}}
=\frac{\hbar\signal{k}}{2m}.
$$

##### De Broglie wavelength

$$
\mechanical{p}
=\frac{h}{\signal{\lambda}}
=\hbar\signal{k}.
$$

From $\mechanical{p}=m\mechanical{v}$, the particle speed is $\mechanical{v}=\hbar\signal{k}/m$, twice the phase speed.

For the right-moving plane wave $\Psi=Ae^{i\signal{k}(x-(\signal{\omega}/\signal{k})t)}$, the conjugate phases cancel in the probability density. The normalization integral diverges.

$$
\int_{-\infty}^{+\infty}\lvert\Psi\rvert^2\,dx
=\lvert A\rvert^2\int_{-\infty}^{+\infty}1\,dx.
$$

Fourier transforms take us between position space and momentum space, also called $\signal{k}$ space.

![[Kyle Kabasares - Quantum Mechanics - Fourier Transform of a Square Pulse.png|**Fig. 13** A spatial wavefunction of height $A$ on $-a<x<a$ and a sketch of its oscillating Fourier transform in wave-number space.]]

The free-particle spatial solutions satisfy

$$
\frac{d^2\psi}{dx^2}=-\frac{2m\energy{E}}{\hbar^2}\psi=-\signal{k}^2\psi,
\qquad
\psi_k=Ae^{i\signal{k}x}+Be^{-i\signal{k}x}
\quad(\signal{k}>0).
$$

When the position-space description is inconvenient, transform to momentum space. The discrete expansion $\Psi=\sum_n c_n\Psi_n$ has a continuous counterpart with coefficients $\phi(\signal{k})\,d\signal{k}$. Start with $\Psi(x,0)$, find $\phi(\signal{k})$, then reconstruct $\Psi(x,t)$.

$$
\Psi(x,0)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
\phi(\signal{k})e^{i\signal{k}x}\,d\signal{k}.
\tag{1}
$$

$$
\phi(\signal{k})=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
\Psi(x,0)e^{-i\signal{k}x}\,dx.
\tag{2}
$$

$$
\Psi(x,t)=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
\phi(\signal{k})e^{i(\signal{k}x-\hbar\signal{k}^2t/(2m))}\,d\signal{k}.
\tag{3}
$$

The phase in (3) uses $\energy{E}/\hbar$, with $\energy{E}=\hbar^2\signal{k}^2/(2m)$ from $\signal{k}=\sqrt{2m\energy{E}}/\hbar$. The handwritten powers of $\hbar$ and $\signal{k}$ in these lines have been corrected to agree with that dispersion relation.

To convert between complex exponentials and trigonometric functions, use

$$
e^{\pm i\theta}=\cos\theta\pm i\sin\theta,
\qquad
\cos\theta=\frac{e^{-i\theta}+e^{i\theta}}{2},
\qquad
\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}.
$$

$\Psi(x,t)$ gives the position distribution through $\lvert\Psi(x,t)\rvert^2$. In wave-number space, $\lvert\phi(\signal{k})\rvert^2$ gives the corresponding distribution in $\signal{k}=\mechanical{p}/\hbar$. The solution proceeds as $\Psi(x,0)\to\phi(\signal{k})\to\Psi(x,t)$.

For $\energy{V}=0$ the spatial wavefunction can be expressed in either basis.

$$
\psi=Ae^{i\signal{k}x}+Be^{-i\signal{k}x}
=C\cos(\signal{k}x)+D\sin(\signal{k}x),
\qquad
\signal{k}=\frac{\sqrt{2m\energy{E}}}{\hbar}.
$$

The plane waves are momentum eigenfunctions.

$$
\hat p_x(Ae^{i\signal{k}x})=\hbar\signal{k}(Ae^{i\signal{k}x}),
\qquad
\hat p_x(Be^{-i\signal{k}x})=-\hbar\signal{k}(Be^{-i\signal{k}x}).
$$

$$
\hat p_x\!\left[C\cos(\signal{k}x)+D\sin(\signal{k}x)\right]
=\frac{\hbar\signal{k}}{i}
\left[-C\sin(\signal{k}x)+D\cos(\signal{k}x)\right].
$$

A general standing wave has both momentum components. Using Euler's identity, the cosine term gives

$$
\hat p_x C\cos(\signal{k}x)
=-\frac{\hbar\signal{k}}{i}C\sin(\signal{k}x)
=-\frac{\hbar\signal{k}}{i}C
\frac{e^{i\signal{k}x}-e^{-i\signal{k}x}}{2i}.
$$

##### Reflection and transmission

An incident beam has amplitude $Ae^{i\signal{k}x}$ and the rebounding particles have amplitude $Be^{-i\signal{k}x}$.

![[Kyle Kabasares - Quantum Mechanics - Potential Step and Barrier.png|**Fig. 14** An incident and a reflected wave beside a potential step of height $\energy{V_0}$ and a finite barrier between $x_0$ and $x_1$.]]

##### Flux density

$$
J_x=\frac{1}{2m}\left(\psi^*\hat p_x\psi+\psi\hat p_x^*\psi^*\right),
\qquad
\hat p_x=\frac{\hbar}{i}\frac{d}{dx},
\qquad
\hat p_x^*=-\frac{\hbar}{i}\frac{d}{dx}.
$$

For a free particle moving to the right, $\psi=Ae^{i\signal{k}x}$. Substitution gives

$$
\begin{aligned}
J_x
&=\frac{1}{2m}\left[
A^*e^{-i\signal{k}x}\frac{\hbar}{i}\frac{d}{dx}(Ae^{i\signal{k}x})
+Ae^{i\signal{k}x}\frac{-\hbar}{i}\frac{d}{dx}(A^*e^{-i\signal{k}x})
\right]\\
&=\frac{1}{2m}\left(\hbar\signal{k}\lvert A\rvert^2+\hbar\signal{k}\lvert A\rvert^2\right)
=\frac{\hbar\signal{k}}{m}\lvert A\rvert^2.
\end{aligned}
$$

The flux is the velocity times the probability density. The rightward velocity is $\mechanical{v}=\mechanical{p}/m=\hbar\signal{k}/m$. For a free particle moving to the left, the flux magnitude is $\hbar\signal{k}\lvert B\rvert^2/m$ and the signed $J_x$ is negative.

The reflection and transmission coefficients are ratios of flux magnitudes.

$$
R=\frac{J_R}{J_i},
\qquad
T=\frac{J_T}{J_i}.
$$

![[Kyle Kabasares - Quantum Mechanics - Two Regions of a Potential Step.png|**Fig. 15** A potential step at $x=0$ separates the free region from a region of constant potential.]]

The Hamiltonian in the two regions is

$$
\hat H=
\begin{cases}
-\dfrac{\hbar^2}{2m}\dfrac{d^2}{dx^2}, & x<0,\\[4pt]
-\dfrac{\hbar^2}{2m}\dfrac{d^2}{dx^2}+\energy{V}, & x>0.
\end{cases}
$$

The two regions of the potential step have solutions

$$
\begin{aligned}
\psi_{\mathrm I}&=Ae^{i\signal{k}x}+Be^{-i\signal{k}x},
&\hbar\signal{k}&=\sqrt{2m\energy{E}},\\
\psi_{\mathrm{II}}&=A'e^{i\signal{k'}x}+B'e^{-i\signal{k'}x},
&\hbar\signal{k'}&=\sqrt{2m(\energy{E}-\energy{V})}.
\end{aligned}
$$

For $\energy{E}<\energy{V}$, region II is classically forbidden. With $\signal{k'}=i\signal{\kappa}$,

$$
\psi_{\mathrm{II}}=A'e^{-\signal{\kappa}x}+B'e^{+\signal{\kappa}x},
\qquad
\hbar\signal{\kappa}=\sqrt{2m(\energy{V}-\energy{E})}.
$$

For a step extending to $+\infty$, $B'=0$ so the wavefunction remains bounded. The solution oscillates in region I and has real exponentials in region II. The amplitude of the decaying exponential falls to $1/e$ of its starting value after the penetration depth $1/\signal{\kappa}$.

An electron with kinetic energy $\quantity{1}{eV}$ meets a $\quantity{2}{eV}$ potential step. Its amplitude falls to $1/e$ after about $\quantity{0.20}{nm}$.

##### Finite barrier

![[Kyle Kabasares - Quantum Mechanics - Three Regions of a Finite Barrier.png|**Fig. 16** Regions I, II, and III of a rectangular barrier with interfaces at $x=0$ and $x=L$.]]

Consider $\energy{E}<\energy{V}$. The Hamiltonians are

$$
\begin{aligned}
\hat H_{\mathrm I}&=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2},\\
\hat H_{\mathrm{II}}&=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\energy{V},\\
\hat H_{\mathrm{III}}&=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}.
\end{aligned}
$$

##### General wavefunctions

$$
\begin{aligned}
\psi_{\mathrm I}&=Ae^{i\signal{k}x}+Be^{-i\signal{k}x},\\
\psi_{\mathrm{II}}&=Ce^{i\signal{k'}x}+De^{-i\signal{k'}x},\\
\psi_{\mathrm{III}}&=Fe^{i\signal{k}x}+Ge^{-i\signal{k}x},
\end{aligned}
\qquad
\begin{aligned}
\hbar\signal{k}&=\sqrt{2m\energy{E}},\\
\hbar\signal{k'}&=\sqrt{2m(\energy{E}-\energy{V})}.
\end{aligned}
$$

$A$ represents the incoming wave, $B$ the reflected wave, and $F$ the transmitted wave. The initial condition is incidence from the left, so $G=0$.

When $\energy{E}<\energy{V}$, the solution inside the barrier is

$$
\psi_{\mathrm{II}}=Ce^{-\signal{\kappa}x}+De^{+\signal{\kappa}x},
\qquad
\hbar\signal{\kappa}=\sqrt{2m(\energy{V}-\energy{E})}.
$$

The $C$ term decays into the barrier from the left, and the $D$ term decays from the right boundary toward the left.

![[Kyle Kabasares - Quantum Mechanics - Exponentials in the Barrier.png|**Fig. 17** Exponential components inside the barrier, drawn decaying away from opposite interfaces.]]

##### Continuity

Match the wavefunction and its slope at each interface.

$$
\begin{aligned}
\psi_{\mathrm I}(0)&=\psi_{\mathrm{II}}(0),
&\psi_{\mathrm{II}}(L)&=\psi_{\mathrm{III}}(L),\\
\psi_{\mathrm I}'(0)&=\psi_{\mathrm{II}}'(0),
&\psi_{\mathrm{II}}'(L)&=\psi_{\mathrm{III}}'(L).
\end{aligned}
$$

The notes also list the initial state and normalization conditions. The reflected fraction follows from the fluxes of the two components of $\psi_{\mathrm I}$.

$$
J_x=\frac{1}{2m}\left(\psi^*\hat p_x\psi+\psi\hat p_x^*\psi^*\right),
\qquad
R=\frac{J_R}{J_i}
=\frac{J_B}{J_A}
=\frac{(\hbar\signal{k}/m)\lvert B\rvert^2}{(\hbar\signal{k}/m)\lvert A\rvert^2}
=\frac{\lvert B\rvert^2}{\lvert A\rvert^2}.
$$

The transmitted fraction is

$$
T=\frac{J_T}{J_i}=\frac{J_F}{J_A}
=\frac{\lvert F\rvert^2}{\lvert A\rvert^2}.
$$

![[Kyle Kabasares - Quantum Mechanics - Rectangular Barrier Review.png|**Fig. 18** Sketch used to identify the three regions of the finite barrier.]]

1. Sketch the barrier and identify the regions.
2. Write the Schrödinger equation for each region. Regions I and III have $\energy{V}=0$. Region II has $-\hbar^2\psi''/(2m)+\energy{V}\psi=\energy{E}\psi$.
3. Write the general solutions. For incidence from the left they are

$$
\begin{aligned}
\psi_{\mathrm I}&=Ae^{i\signal{k}x}+Be^{-i\signal{k}x},\\
\psi_{\mathrm{II}}&=Ce^{i\signal{k'}x}+De^{-i\signal{k'}x}
=Ce^{-\signal{\kappa}x}+De^{\signal{\kappa}x},\\
\psi_{\mathrm{III}}&=Fe^{i\signal{k}x}.
\end{aligned}
$$

$$
\signal{k}=\frac{\sqrt{2m\energy{E}}}{\hbar},
\qquad
\signal{k'}=\frac{\sqrt{2m(\energy{E}-\energy{V})}}{\hbar},
\qquad
\signal{\kappa}=\frac{\sqrt{2m(\energy{V}-\energy{E})}}{\hbar}.
$$

4. Apply the boundary conditions and simplify.

$$
\begin{aligned}
\psi_{\mathrm I}(0)&=\psi_{\mathrm{II}}(0),
&\psi_{\mathrm{II}}(L)&=\psi_{\mathrm{III}}(L),\\
\psi_{\mathrm I}'(0)&=\psi_{\mathrm{II}}'(0),
&\psi_{\mathrm{II}}'(L)&=\psi_{\mathrm{III}}'(L).
\end{aligned}
$$

$$
R=\frac{J_B}{J_A}=\frac{\lvert B\rvert^2}{\lvert A\rvert^2},
\qquad
T=\frac{J_F}{J_A}=\frac{\lvert F\rvert^2}{\lvert A\rvert^2},
\qquad
R+T=1.
$$

The inverse transmission coefficient follows by algebra and hyperbolic identities.

$$
T^{-1}=1+\frac{(e^{\signal{\kappa}L}-e^{-\signal{\kappa}L})^2}
{16(\energy{E}/\energy{V})(1-\energy{E}/\energy{V})}.
$$

##### Delta well

![[Kyle Kabasares - Quantum Mechanics - Attractive Delta Well.png|**Fig. 19** Sketch of an attractive delta-function well at the origin.]]

For $\energy{V(x)}=-\alpha\delta(x)$, the normalized bound state is

$$
\psi=B e^{-m\alpha\lvert x\rvert/\hbar^2},
\qquad
B=\frac{\sqrt{m\alpha}}{\hbar}.
$$

The normalization and exponent use the decay constant $m\alpha/\hbar^2$. The handwritten line has inconsistent powers of $\hbar$.

For scattering at $\energy{E}>0$,

$$
R=\frac{1}{1+2\hbar^2\energy{E}/(m\alpha^2)},
\qquad
T=\frac{1}{1+m\alpha^2/(2\hbar^2\energy{E})}.
$$

![[Kyle Kabasares - Quantum Mechanics - Delta Well and Adjacent Barrier.png|**Fig. 20** A delta well next to a finite positive barrier of height $\energy{V_0}$.]]

![[Kyle Kabasares - Quantum Mechanics - Finite Square Well Regions.png|**Fig. 21** Square well of depth $\energy{V_0}$ from $-a$ to $a$, with a bound energy between the well floor and zero.]]

For each region,

$$
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+\energy{V}\psi=\energy{E}\psi,
\qquad
\frac{d^2\psi}{dx^2}=-\frac{2m(\energy{E}-\energy{V})}{\hbar^2}\psi.
$$

Outside the well, $\signal{k}=\sqrt{2m\energy{E}}/\hbar$ is imaginary because $\energy{E}<0$. Set $\signal{\kappa}=\sqrt{-2m\energy{E}}/\hbar>0$. In region I the general solution $Ae^{i\signal{k}x}+Be^{-i\signal{k}x}$ becomes $Ae^{-\signal{\kappa}x}+Be^{\signal{\kappa}x}$, and $A=0$ for decay as $x\to-\infty$. In region III the solution is $Fe^{-\signal{\kappa}x}+Ge^{\signal{\kappa}x}$, and $G=0$ for decay as $x\to+\infty$. Both growing terms would prevent normalization.

In region II the bound solutions are standing waves with discrete energies. Here $\energy{E}>\energy{V}$, so the kinetic energy is positive and $\signal{k'}$ is real.

$$
\psi_{\mathrm{II}}=Ce^{i\signal{k'}x}+De^{-i\signal{k'}x},
\qquad
\signal{k'}=\frac{\sqrt{2m(\energy{E}-\energy{V})}}{\hbar}.
$$

The equivalent trigonometric form absorbs the factors of $i$ into new coefficients $C'$ and $D'$.

$$
\psi_{\mathrm{II}}=C'\sin(\signal{k'}x)+D'\cos(\signal{k'}x).
$$

The potential is symmetric about the origin, so we can choose states of definite parity. Sine is odd and cosine is even.

![[Kyle Kabasares - Quantum Mechanics - Sine and Cosine Parity.png|**Fig. 22** The sine crosses zero at the origin, and the cosine has a maximum there.]]

##### Even functions

$$
\psi(x)=
\begin{cases}
Be^{+\signal{\kappa}x},&x<-a,\\
D'\cos(\signal{k'}x),&-a<x<a,\\
Fe^{-\signal{\kappa}x},&x>a.
\end{cases}
$$

![[Kyle Kabasares - Quantum Mechanics - Square Well Parity States.png|**Fig. 23** Sketches of an even and an odd bound-state wavefunction with tails outside the well.]]

OH means office hours.

Match the even solution and its derivative at $x=a$.

$$
D'\cos(\signal{k'}a)=Fe^{-\signal{\kappa}a}.
\tag{1}
$$

$$
-\signal{k'}D'\sin(\signal{k'}a)=-\signal{\kappa}Fe^{-\signal{\kappa}a}.
\tag{2}
$$

Dividing (1) by (2) eliminates the amplitudes.

$$
\frac{1}{-\signal{k'}\tan(\signal{k'}a)}
=\frac{1}{-\signal{\kappa}},
\qquad
\signal{k'}\tan(\signal{k'}a)=\signal{\kappa}.
$$

Both $\signal{k'}$ and $\signal{\kappa}$ depend on $\energy{E}$. For $\energy{V}<\energy{E}<0$,

$$
\signal{\kappa}^2+\signal{k'}^2
=\frac{2m\lvert\energy{E}\rvert}{\hbar^2}
+\frac{2m(\energy{E}-\energy{V})}{\hbar^2}
=\frac{2m\lvert\energy{V}\rvert}{\hbar^2}.
$$

Set $z=\signal{k'}a$ and $z_0^2=2ma^2\lvert\energy{V}\rvert/\hbar^2$. Multiplying by $a^2$ gives $a^2\signal{\kappa}^2+z^2=z_0^2$, so

$$
z\tan z=\sqrt{z_0^2-z^2},
\qquad
\tan z=\sqrt{\frac{z_0^2}{z^2}-1}.
$$

Graph both sides of this transcendental equation. Each intersection corresponds to an allowed even bound state.

The deeper the well, the closer the solutions move to the asymptotes of $\tan z$.

![[Kyle Kabasares - Quantum Mechanics - Graphical Even State Condition.png|**Fig. 24** The square-root curve and marked intersections used to locate even bound states.]]

Problem 3 starts with the time-dependent Schrödinger equation and uses the derivative identity below.

$$
-\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2}
+\energy{V}\Psi=i\hbar\frac{\partial\Psi}{\partial t}.
$$

$$
\frac{\partial}{\partial x}\left(
\Psi_1^*\frac{\partial\Psi_2}{\partial x}
-\frac{\partial\Psi_1^*}{\partial x}\Psi_2\right)
=\Psi_1^*\frac{\partial^2\Psi_2}{\partial x^2}
-\frac{\partial^2\Psi_1^*}{\partial x^2}\Psi_2.
$$

For problem 2, use completing the square as in problem 2.22. The notes give

$$
\begin{aligned}
\Psi(x,t)&=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}
\phi(\signal{k})e^{i(\signal{k}x-\hbar\signal{k}^2t/(2m))}\,d\signal{k},\\
\phi(\signal{k})&=\frac{2N}{\sqrt{\alpha}}\cos(\signal{k}x_0)e^{-\signal{k}^2/(2\alpha)}.
\end{aligned}
$$

1. Sketch $\energy{V(x)}$.
2. Write the time-independent Schrödinger equation.
3. Find the general solution.
4. Apply the boundary and initial conditions.
5. Normalize and find $R$, $T$, or other quantities as needed.

![[Kyle Kabasares - Quantum Mechanics - Infinite Well Origin Choices.png|**Fig. 25** Griffiths places the infinite well between $0$ and $a$. The lecture centers a well of the same width between $-a/2$ and $a/2$.]]

Sines and decaying exponentials have opposite signs under two differentiations.

$$
\frac{d^2}{dx^2}\sin x=-\sin x,
\qquad
\frac{d^2}{dx^2}e^{-x}=e^{-x}.
$$

For the centered well, the outer regions have the potential term in the Schrödinger equation,

$$
-\frac{\hbar^2}{2m}\psi''+\energy{V}\psi=\energy{E}\psi,
$$

and region II has $-\hbar^2\psi''/(2m)=\energy{E}\psi$. The notes revisit the finite-wall solutions $Ae^{i\signal{k}x}+Be^{-i\signal{k}x}$ and $Fe^{i\signal{k}x}+Ge^{-i\signal{k}x}$ outside, and $Ce^{i\signal{k'}x}+De^{-i\signal{k'}x}$ inside. Imaginary $\signal{k}$ gives $Ae^{-\signal{\kappa}x}+Be^{+\signal{\kappa}x}$ in region I. The inner solution can be written $C'\sin(\signal{k'}x)+D'\cos(\signal{k'}x)$.

![[Kyle Kabasares - Quantum Mechanics - Mechanical and Optical Confinement.png|**Fig. 26** Sketches of physical confinement and an optical trap.]]

![[Kyle Kabasares - Quantum Mechanics - Centered Well Boundary Conditions.png|**Fig. 27** The centered infinite well has walls at $\pm a/2$ and zero wavefunction outside.]]

In the infinite-wall limit, $\psi_{\mathrm I}=\psi_{\mathrm{III}}=0$. The interior solution and its slope are

$$
\begin{aligned}
\psi_{\mathrm{II}}&=\alpha\cos(\signal{k}x)+\beta\sin(\signal{k}x),\\
\psi_{\mathrm{II}}'&=-\alpha\signal{k}\sin(\signal{k}x)
+\beta\signal{k}\cos(\signal{k}x).
\end{aligned}
$$

At an infinite wall, impose continuity of $\psi$ and allow its slope to jump. Matching at $x=-a/2$ and $x=a/2$ gives

$$
0=\alpha\cos(-\signal{k}a/2)+\beta\sin(-\signal{k}a/2),
\qquad
0=\alpha\cos(\signal{k}a/2)+\beta\sin(\signal{k}a/2).
$$

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent energy term in the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy eigenvalue | Energy associated with a stationary state. |
| $\Psi$ | $\unit{m^{-3/2}}$ in three dimensions | Position-space wavefunction | Probability amplitude for one particle. Its squared magnitude is a probability density. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Distance through which a sinusoidal wave repeats. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | Spatial phase change per unit distance. |
| $\signal{\omega}$ | $\unit{rad/s}$ | Angular frequency | Temporal phase change per unit time. |
| $J_x$ | $\unit{s^{-1}}$ | Probability flux | Signed one-dimensional probability current. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
| $\signal{\kappa}$ | $\unit{m^{-1}}$ | Decay constant | Reciprocal of the amplitude penetration depth in the forbidden region. |
