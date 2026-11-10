---
title: "Quantum Mechanics (Physics 137, UC Merced 2015)"
---

> [!TLDR]
> These Physics 137 notes develop quantum measurement and time evolution through one-dimensional potentials, tunneling, and the harmonic oscillator. Later lectures use bra-ket notation, Fourier transforms, and angular momentum to work through uncertainty, the hydrogen atom, and spin coupling.

Source notes by Kyle Kabasares. [[Quantum Mechanics (Physics 137, UC Merced 2015).pdf|Original PDF]].

Transcribed PDF pages 1–137 of 137.

### PDF page 1

#### August 27, 2015 — Introduction

Quantum mechanics videos are due December 7. The sketch organizes mechanics by inverse size and speed, from zero to the speed of light $c$. The four regions are nonrelativistic classical mechanics, relativistic classical mechanics, nonrelativistic quantum mechanics, and relativistic quantum mechanics.

![[Kyle Kabasares - Quantum Mechanics - Size and Speed Regimes.png|**Fig. 1** The mechanics regimes for different sizes and speeds.]]

The course begins with postulates and examples. The classical review lists Newton's laws, Lagrangian and Hamiltonian mechanics, Maxwell's equations, and the Lorentz force law. In one coordinate, the Euler–Lagrange equation is

$$
\frac{\mathrm{d}}{\mathrm{d}t}\frac{\partial\energy{\mathcal L}}{\partial\dot x}
-\frac{\partial\energy{\mathcal L}}{\partial x}=0.
$$

Hamilton's equations are

$$
\frac{\partial\energy{H}}{\partial x}=-\dot p_x,
\qquad
\frac{\partial\energy{H}}{\partial p_x}=\dot x.
$$

The dots on the right-hand sides of Hamilton's equations are supplied from the standard form.

#### Experiments that led to quantum mechanics

- The Stern–Gerlach experiment showed quantized spin projections.
- The photoelectric effect demonstrated the particle-like behavior of light.
- Young's double-slit experiment illustrates wave–particle duality.

The margin below the Stern–Gerlach heading mentions Rayleigh–Jeans and the ultraviolet catastrophe.

![[Kyle Kabasares - Quantum Mechanics - Introductory Intensity Spectrum.png|**Fig. 2** Intensity versus frequency sketch beside the reference to Rayleigh–Jeans.]]

### PDF page 2

#### Postulates of quantum mechanics

An observable is a measurable quantity and is represented by an operator. In the one-dimensional time-independent Schrödinger equation, the Hamiltonian acts on the wavefunction:

$$
\hat H=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+\energy{V}(x),
\qquad
\hat H\psi=\energy{E}\psi.
$$

**Postulate 1.** The wavefunction $\Psi(\vec q,t)$ fully describes the pure state of a system, such as a particle in a box or in an optical trap. The spatial coordinates are collected into $\vec q$. For one particle in one dimension, $\vec q$ consists of $x$. For two particles in one dimension, it contains $x_1,x_2$.

For a separable state, $\Psi(\vec q,t)=\psi(\vec q)\phi(t)$. The capital $\Psi$ denotes the time-dependent wavefunction, while the lowercase $\psi$ denotes its time-independent spatial part.

**Postulate 4 — Born interpretation.** The probability of finding the particle in a volume element $\mathrm{d}\tau$ at $\vec r$ is proportional to $\lvert\psi(\vec r)\rvert^2\,\mathrm{d}\tau$. For a normalized wavefunction this expression gives the probability directly. The wavefunction is the probability amplitude.

### PDF page 3

#### Probability density and normalization

The amplitude $\psi(\vec r)$ can be negative or complex. Its squared magnitude $\lvert\psi(\vec r)\rvert^2=\psi^*(\vec r)\psi(\vec r)$ is real and nonnegative, and it gives the probability density for a normalized state. A normalizable wavefunction satisfies

$$
\int_{\text{all space}}\lvert\psi(\vec r)\rvert^2\,\mathrm{d}\tau<\infty.
$$

For the localized one-dimensional states under discussion, $\psi(x)\to0$ as $x\to\pm\infty$. A wavefunction is normalized when this integral equals one. Multiplying by a suitable constant, which may be complex, achieves normalization.

For a particle in a box, the notes give a spatial eigenfunction $A\sin(nkx)$ at level $n$. The handwritten prefactor reads $\sqrt{\pi/L}$. For a box on $0<x<L$ with $k=\pi/L$, unit normalization gives $A=\sqrt{2/L}$.

![[Kyle Kabasares - Quantum Mechanics - Real and Imaginary Wavefunction.png|**Fig. 3** Example sketches of the real and imaginary parts of a one-dimensional wavefunction.]]

### PDF page 4

#### Dirac delta function

Integrating against $\delta(x)$ selects the value at zero. Shifting the delta to $x=5$ selects the value there, provided the interval contains $5$.

$$
\int_{-\infty}^{\infty}f(x)\delta(x)\,\mathrm{d}x=f(0),\qquad
\int_{-\infty}^{\infty}f(x)\delta(x-5)\,\mathrm{d}x=f(5),\qquad
\int_7^9 f(x)\delta(x-5)\,\mathrm{d}x=0.
$$

![[Kyle Kabasares - Quantum Mechanics - Delta Function Samples at Zero.png|**Fig. 4** A delta distribution at zero samples the marked value of the test function.]]

$$
\begin{aligned}
\int x^2\delta(x)\,\mathrm{d}x&=0^2=0,\\
\int x^2\delta(x-5)\,\mathrm{d}x&=5^2=25,\\
\int \frac{\sin x}{x^2}\delta(x-1)\,\mathrm{d}x&=\sin 1,\\
\int (x-2)^3 e^{x/2}\delta(x-4)\,\mathrm{d}x&=(4-2)^3e^{4/2}=8e^2.
\end{aligned}
$$

The delta is supported at $x=0$ and has unit integral over the real line. Away from the endpoints of an interval,

$$
\int_a^b f(x)\delta(x-k)\,\mathrm{d}x=
\begin{cases}
f(k),&a<k<b,\\
0,&k<a\ \text{or}\ k>b.
\end{cases}
$$

### PDF page 5

#### Discussion (August 31, 2015) — Operators and eigenfunctions

A linear operator distributes over sums, $\hat\Omega(a+b)=\hat\Omega a+\hat\Omega b$, and scalar factors pass through it. Multiplication or division by a fixed nonzero scalar, differentiation, and integration are linear. The natural logarithm is nonlinear.

An eigenfunction $a$ of $\hat\Omega$ satisfies $\hat\Omega a=ca$, with eigenvalue $c$. The discussion mentions three fundamental modes of water as examples of three eigenfunctions. A general wavefunction can be expanded in a complete basis of eigenfunctions, $\psi=\sum_n c_n f_n$, even when it is not itself an eigenfunction of $\hat\Omega$. The kinetic energy is $K=\tfrac12mv^2=p^2/(2m)$.

#### Lecture (September 1, 2015) — Representations

The page considers $g=af_1+af_2$, a linear combination of eigenfunctions with different eigenvalues, and gives $\hat\Omega=\mathrm{d}^2/\mathrm{d}x^2$ as an example operator.

$$
\begin{array}{c|cc}
&\hat x&\hat p_x\\ \hline
\text{Position representation}
&x&(\hbar/i)\,\partial/\partial x\\
\text{Momentum representation}
&-(\hbar/i)\,\partial/\partial p_x&p_x
\end{array}
$$

The entries $x$ and $p_x$ indicate multiplication by the corresponding variable.

### PDF page 6

#### Hamiltonian and commutators

The Hamiltonian is kinetic plus potential energy, $H=K+V=T+V$. For a stationary state,

$$
\hat H\psi=-\frac{\hbar^2}{2m}\frac{\partial^2\psi}{\partial x^2}
+V(x)\psi=E\psi.
$$

For the oscillator, $V(x)=\tfrac12kx^2$.

The commutator of matrices or operators is $[A,B]=AB-BA$. Acting on $f$, this is $A(Bf)-B(Af)$. For multiplication by $x$ and differentiation, the product rule gives

$$
[x,\partial_x]f=x\partial_xf-\partial_x(xf)=-f.
$$

With $\hat p_x=(\hbar/i)\partial_x$,

$$
[\hat x,\hat p_x]f=x\left(\frac{\hbar}{i}\partial_x f\right)
-\frac{\hbar}{i}\partial_x(xf)
=-\frac{\hbar}{i}f=i\hbar f.
$$

Thus $[\hat x,\hat p_x]=i\hbar\,\mathbf 1$. The notes relate noncommuting observables to the inability to assign simultaneously sharp values in general.

#### Hermiticity

$$
\int f_m^*\hat\Omega f_n\,\mathrm{d}x
=\left(\int f_n^*\hat\Omega f_m\,\mathrm{d}x\right)^*.
$$

For an expansion $g=\sum_n c_n f_n$, the page begins applying the operator as $\hat\Omega g=\hat\Omega\sum_n c_n f_n$.

### PDF page 7

The expansion $g=c_1f_1+c_2f_2+c_3f_3+\cdots$ uses eigenfunctions satisfying equations of the form $\hat\Omega f=af$. The overlap integral $S=\int f_m^* f_n\,\mathrm{d}x$ measures the overlap of two functions, like a dot product.

#### Lecture (September 3, 2015) — Orthogonality

For a Hermitian operator,

$$
I=\int f_m^*(\hat\Omega f_n)\,\mathrm{d}x
=\left(\int f_n^*(\hat\Omega f_m)\,\mathrm{d}x\right)^*.
$$

Conjugation of a product in an integral gives, for example, $\int A^*BC^*\,\mathrm{d}x=(\int B^*AC\,\mathrm{d}x)^*$.

Let $\hat\Omega f=qf$ and $\hat\Omega g=q'g$ with real, distinct eigenvalues $q$ and $q'$. By Hermiticity,

$$
q'\int f^*g\,\mathrm{d}x
=q^*\left(\int g^*f\,\mathrm{d}x\right)^*
=q\int f^*g\,\mathrm{d}x.
$$

Since $q'\ne q$, the overlap $S=\int f^*g\,\mathrm{d}x$ must vanish.

### PDF page 8

Eigenfunctions belonging to distinct eigenvalues of a Hermitian operator are orthogonal.

#### Lecture (September 8, 2015) — Postulate 2

Observables are represented by Hermitian operators. The Cartesian position and momentum operators obey

$$
[\hat q,\hat p_{q'}]=i\hbar\delta_{qq'},\qquad
[\hat q,\hat q']=0,\qquad
[\hat p_q,\hat p_{q'}]=0.
$$

Here $q,q'$ run over $x,y,z$, and the Kronecker delta is one for equal indices and zero otherwise. Hermitian operators have real eigenvalues and orthogonal eigenfunctions for distinct eigenvalues.

![[Kyle Kabasares - Quantum Mechanics - Cartesian Commutation Relations Sketch.png|**Fig. 5** Diagram linking the Cartesian position and momentum components.]]

#### Postulate 3 — Outcome of measurement

For a system in state $\psi$, the mean value of an observable over repeated measurements on identically prepared systems is the expectation value of the corresponding operator.

$$
\langle\hat\Omega\rangle
=\frac{\int \psi^*\hat\Omega\psi\,\mathrm{d}\tau}{\int\psi^*\psi\,\mathrm{d}\tau}.
$$

The denominator accounts for the normalization of the wavefunction.

### PDF page 9

#### Position measurement and expectation values

The first sketch shows the position probability density before measurement. The second is strongly localized near a measured value $x_0$, like a Dirac delta in the limit of ideal resolution.

![[Kyle Kabasares - Quantum Mechanics - Position Measurement and Localization.png|**Fig. 6** Extended position density and a narrow peak at the measured position.]]

If $\hat\Omega\psi=\omega\psi$, the expectation value becomes

$$
\langle\hat\Omega\rangle
=\frac{\int\psi^*\omega\psi\,\mathrm{d}\tau}{\int\psi^*\psi\,\mathrm{d}\tau}
=\omega.
$$

The eigenvalue is then the expectation value.

Recall $H=T+V$ and $\hat H=-\tfrac{\hbar^2}{2m}\partial_x^2+V(x)$. A state satisfying $\hat H\psi=E\psi$ may fail to be an eigenfunction of another operator $\hat\Omega$. In a complete eigenbasis of $\hat\Omega$, expand the full wavefunction as $\psi=\sum_n c_n\psi_n$, where the $\psi_n$ are the individual eigenfunctions of $\hat\Omega$.

### PDF page 10

#### Expectation value in an eigenbasis

The coefficients $c_n$ specify how much each eigenfunction contributes to $\psi=\sum_n c_n\psi_n$. With $\hat\Omega\psi_n=\omega_n\psi_n$, substitute the expansion into the expectation value:

$$
\langle\hat\Omega\rangle
=\frac{\sum_{m,n}c_m^*c_n\omega_n\int\psi_m^*\psi_n\,\mathrm{d}\tau}
{\sum_{m,n}c_m^*c_n\int\psi_m^*\psi_n\,\mathrm{d}\tau}.
$$

The first handwritten denominator includes an extra $\hat\Omega$. The denominator is the norm squared of the state. For an orthonormal eigenbasis, the overlap is $\int\psi_m^*\psi_n\,\mathrm{d}\tau=\delta_{mn}$. Only terms with $m=n$ contribute. For normalized $\psi$ this gives the weighted average

$$
\langle\hat\Omega\rangle=\sum_n c_n^*c_n\omega_n
=\sum_n\lvert c_n\rvert^2\omega_n.
$$

**Postulate 3′ — Single measurement.** In the normalized expansion, the probability of measuring a nondegenerate eigenvalue $\omega_n$ is $\lvert c_n\rvert^2$. If $\psi$ is already an eigenfunction with eigenvalue $\omega$, the measurement yields $\omega$ with certainty.

The example begins with a normalized state $\psi$ and an operator $\hat A$ with eigenfunctions $f_1,f_2,f_3,\ldots$ and corresponding eigenvalues $a_1,a_2,a_3,\ldots$.

### PDF page 11

#### Measurement example, continued

$$
\psi=\tfrac12 f_1+\left(\tfrac38\right)^{1/2}f_2
+\left(\tfrac38 i\right)^{1/2}f_3.
$$

Applying $\hat A$ multiplies each term by its eigenvalue:

$$
\hat A\psi=\tfrac12a_1 f_1+\left(\tfrac38\right)^{1/2}a_2f_2
+\left(\tfrac38 i\right)^{1/2}a_3f_3.
$$

The state is an eigenfunction only if all three contributing eigenvalues are equal. For distinct eigenvalues, the probabilities of $a_1,a_2,a_3$ are $25\%$, $37.5\%$, and $37.5\%$. The expectation value is

$$
\langle\hat A\rangle=\sum_n\lvert c_n\rvert^2a_n
=\tfrac14a_1+\tfrac38a_2+\tfrac38a_3.
$$

#### Time evolution

The wavefunction evolves according to the time-dependent Schrödinger equation. In one dimension,

$$
i\hbar\frac{\partial\Psi}{\partial t}=\hat H\Psi,
\qquad
\hat H=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}
+\energy{V}(x,t).
$$

The potential can depend on both time and position.

### PDF page 12

#### Separating the Schrödinger equation

If $V$ depends only on $x$, let $\Psi(x,t)=\psi(x)\phi(t)$. Substitution into the time-dependent equation gives

$$
-\frac{\hbar^2}{2m}\psi''(x)\phi(t)+V(x)\psi(x)\phi(t)
=i\hbar\psi(x)\phi'(t).
$$

Divide by $\psi(x)\phi(t)$. One side depends only on $x$ and the other only on $t$, so each must equal a constant, the energy $E$:

$$
-\frac{\hbar^2}{2m}\frac{\psi''(x)}{\psi(x)}+V(x)
=i\hbar\frac{\phi'(t)}{\phi(t)}=E.
$$

In three dimensions the spatial expression uses $\nabla^2\psi(\vec r)/\psi(\vec r)$ and $V(\vec r)$. Returning to one dimension, the two equations and their time factor are

$$
-\frac{\hbar^2}{2m}\psi''+V\psi=E\psi,\qquad
i\hbar\phi'=E\phi,\qquad
\phi\propto e^{-iEt/\hbar}.
$$

Hence $\Psi(x,t)=\psi(x)e^{-iEt/\hbar}$. The phase is time dependent.

#### Lecture (September 10, 2015)

The lecture recalls the separation for $V=V(x)$ and labels the spatial equation the standing-wave equation. Separating the time equation gives $\int\mathrm{d}\phi/\phi=-(iE/\hbar)\int\mathrm{d}t$.

### PDF page 13

#### Time dependence of a stationary state

Integrating gives $\ln\phi=-iEt/\hbar+\mathrm{constant}$. Absorb the resulting multiplicative constant into the normalization of $\psi$.

$$
\Psi(x,t)=\psi(x)e^{-iEt/\hbar},\qquad
\Psi^*\Psi=\psi^*\psi\,e^{iEt/\hbar-iEt/\hbar}=\psi^*\psi.
$$

The probability density remains constant. By Euler's formula,

$$
e^{-iEt/\hbar}=\cos(Et/\hbar)-i\sin(Et/\hbar).
$$

The notes visualize the time-dependent phase as a rotation of the complex amplitude around the spatial axis.

![[Kyle Kabasares - Quantum Mechanics - Stationary State Phase Rotation.png|**Fig. 7** The real and imaginary parts rotate in the plane perpendicular to the x axis.]]

#### Standard deviation and probability density

Quantum mechanics is fundamentally probabilistic. The standard deviation is the root mean square deviation from the mean:

$$
\sigma_x=\sqrt{\langle x^2\rangle-\langle x\rangle^2}
=\sqrt{\langle(\Delta x)^2\rangle},\qquad
\Delta x=x-\langle x\rangle.
$$

For a discrete distribution with probabilities $P_i$, $\langle x\rangle=\sum_i x_iP_i$. In the continuous limit, $P_i$ corresponds to $p(x_i)\,\mathrm{d}x$, and $\langle x\rangle=\int_{-\infty}^{\infty}xp(x)\,\mathrm{d}x$.

### PDF page 14

For a normalized position-space wavefunction, $p(x)=\lvert\psi(x)\rvert^2$ and $\langle f(x)\rangle=\int_{-\infty}^{\infty}f(x)\lvert\psi(x)\rvert^2\,\mathrm{d}x$.

#### Probability distribution for a falling rock

A rock starts from rest at $t=0$ and falls a distance $h$ in time $T$. Take $x$ positive downward, with $x=\tfrac12gt^2$ and $h=\tfrac12gT^2$. The source omits the square on $T$ in its first line. A movie records the motion at 60 frames per second. Equal time steps correspond to displacements that grow as the rock gains speed.

![[Kyle Kabasares - Quantum Mechanics - Falling Rock Time and Position Intervals.png|**Fig. 8** Equal time intervals map to unequal position intervals.]]

A randomly selected frame is uniform in time. Its time density is $\tau(t)=1/T$ on $0\leq t\leq T$, with $\int_0^T\tau(t)\,\mathrm{d}t=1$. Matching the probability in corresponding intervals gives

$$
p(x)\,\mathrm{d}x=\tau(t)\,\mathrm{d}t,
\qquad
p(x)=\tau(t)\frac{\mathrm{d}t}{\mathrm{d}x}
=\frac1T\left(\frac{\mathrm{d}x}{\mathrm{d}t}\right)^{-1}
=\frac1{Tgt}.
$$

### PDF page 15

#### Falling rock, continued

Since $x=\tfrac12gt^2$ and $h=\tfrac12gT^2$, $t=\sqrt{2x/g}$ and $T=\sqrt{2h/g}$. Thus

$$
p(x)=\frac1{\sqrt{2h/g}}\frac1{g\sqrt{2x/g}}
=\frac1{2\sqrt{hx}}\quad(0<x<h).
$$

Recall $\mathrm{d}x/\mathrm{d}t=\lim_{\Delta t\to0}\Delta x/\Delta t$.

#### Waves

The page recalls the time-independent Schrödinger equation, $-\hbar^2\psi''/(2m)+V(x)\psi=E\psi$. A wave is a self-propagating disturbance, often in a medium. An initial profile $y=f(x)$ propagating to the right at speed $v$ is $y(x,t)=f(x-vt)$.

![[Kyle Kabasares - Quantum Mechanics - Rightward Traveling Wave Profile.png|**Fig. 9** A pulse initially centered near zero and later displaced to the right.]]

A Gaussian pulse has $f(x)=Ae^{-x^2/(2\sigma^2)}$. It is symmetric, tends to zero at both infinities, and its width is set by $\sigma$.

### PDF page 16

#### Traveling Gaussian pulse

The profile $y(x,t)=Ae^{-(x-vt)^2/(2\sigma^2)}$ is a traveling wave packet. Such localized packets can be normalized.

#### Sinusoidal wave

The initial profile $f(x)=A\sin(2\pi x/\lambda)$ repeats every wavelength. A right-moving profile is

$$
y(x,t)=f(x-vt)=A\sin\left[\frac{2\pi}{\lambda}(x-vt)\right]
=A\sin(kx-\omega t).
$$

Here $k=2\pi/\lambda$ is the wave number and $\omega=2\pi/T$. The phase velocity is $v=\lambda/T=\omega/k$.

#### Discussion (September 14, 2015)

Topics listed are Schrödinger's cat, wave–particle duality, tunneling, and review of homework 4.

### PDF page 17

#### Lecture (September 17, 2015) — One-dimensional potentials

Topics include the free particle ($V=0$), infinite and finite barriers, the Dirac delta, the particle in a box, and the harmonic oscillator. The margin notes quantized energy.

#### Characteristics of acceptable wavefunctions

1. Single valued, meaning one output for each input.
2. Finite over finite ranges in the examples considered.
3. Continuous.
4. Continuous in the first derivative where the potential is finite and regular. Singular potentials and infinite walls can require different matching conditions.

![[Kyle Kabasares - Quantum Mechanics - Wavefunction Admissibility Sketches.png|**Fig. 10** A multivalued curve, a divergence, and a delta-like spike at a specified position.]]

### PDF page 18

#### Curvature in the time-independent Schrödinger equation

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

### PDF page 19

A potential can support both bound states and scattering states. Below $\energy{E'}$ the bound-state energies are discrete. Above $\energy{E'}$ the scattering energies are unquantized.

![[Kyle Kabasares - Quantum Mechanics - Bound Levels and Scattering Threshold.png|**Fig. 12** Bound levels below the scattering threshold for a potential with different asymptotic values.]]

#### Free particle

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

### PDF page 20

For the free particle, $\energy{E}=\hbar^2\signal{k}^2/(2m)$, so the phase speed is

$$
\mechanical{v_{\mathrm{phase}}}
=\frac{\signal{\omega}}{\signal{k}}
=\frac{\energy{E}}{\hbar\signal{k}}
=\frac{\hbar\signal{k}}{2m}.
$$

#### De Broglie wavelength

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

#### Lecture 9/21/2015

Fourier transforms take us between position space and momentum space, also called $\signal{k}$ space.

![[Kyle Kabasares - Quantum Mechanics - Fourier Transform of a Square Pulse.png|**Fig. 13** A spatial wavefunction of height $A$ on $-a<x<a$ and a sketch of its oscillating Fourier transform in wave-number space.]]

### PDF page 21

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

### PDF page 22

#### Lecture 9/22/2015

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

#### Reflection and transmission

An incident beam has amplitude $Ae^{i\signal{k}x}$ and the rebounding particles have amplitude $Be^{-i\signal{k}x}$.

![[Kyle Kabasares - Quantum Mechanics - Potential Step and Barrier.png|**Fig. 14** An incident and a reflected wave beside a potential step of height $\energy{V_0}$ and a finite barrier between $x_0$ and $x_1$.]]

### PDF page 23

#### Flux density

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

### PDF page 24

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

#### Finite barrier

![[Kyle Kabasares - Quantum Mechanics - Three Regions of a Finite Barrier.png|**Fig. 16** Regions I, II, and III of a rectangular barrier with interfaces at $x=0$ and $x=L$.]]

Consider $\energy{E}<\energy{V}$. The Hamiltonians are

$$
\begin{aligned}
\hat H_{\mathrm I}&=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2},\\
\hat H_{\mathrm{II}}&=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\energy{V},\\
\hat H_{\mathrm{III}}&=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}.
\end{aligned}
$$

### PDF page 25

#### General wavefunctions

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

#### Continuity

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

### PDF page 26

The transmitted fraction is

$$
T=\frac{J_T}{J_i}=\frac{J_F}{J_A}
=\frac{\lvert F\rvert^2}{\lvert A\rvert^2}.
$$

#### Lecture 9/28/2015

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

### PDF page 27

#### Delta well

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

#### Discussion 9/28/2015

![[Kyle Kabasares - Quantum Mechanics - Finite Square Well Regions.png|**Fig. 21** Square well of depth $\energy{V_0}$ from $-a$ to $a$, with a bound energy between the well floor and zero.]]

For each region,

$$
-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2}+\energy{V}\psi=\energy{E}\psi,
\qquad
\frac{d^2\psi}{dx^2}=-\frac{2m(\energy{E}-\energy{V})}{\hbar^2}\psi.
$$

Outside the well, $\signal{k}=\sqrt{2m\energy{E}}/\hbar$ is imaginary because $\energy{E}<0$. Set $\signal{\kappa}=\sqrt{-2m\energy{E}}/\hbar>0$. In region I the general solution $Ae^{i\signal{k}x}+Be^{-i\signal{k}x}$ becomes $Ae^{-\signal{\kappa}x}+Be^{\signal{\kappa}x}$, and $A=0$ for decay as $x\to-\infty$. In region III the solution is $Fe^{-\signal{\kappa}x}+Ge^{\signal{\kappa}x}$, and $G=0$ for decay as $x\to+\infty$. Both growing terms would prevent normalization.

### PDF page 28

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

#### Even functions

$$
\psi(x)=
\begin{cases}
Be^{+\signal{\kappa}x},&x<-a,\\
D'\cos(\signal{k'}x),&-a<x<a,\\
Fe^{-\signal{\kappa}x},&x>a.
\end{cases}
$$

![[Kyle Kabasares - Quantum Mechanics - Square Well Parity States.png|**Fig. 23** Sketches of an even and an odd bound-state wavefunction with tails outside the well.]]

### PDF page 29

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

### PDF page 30

The deeper the well, the closer the solutions move to the asymptotes of $\tan z$.

![[Kyle Kabasares - Quantum Mechanics - Graphical Even State Condition.png|**Fig. 24** The square-root curve and marked intersections used to locate even bound states.]]

#### Homework hints

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

#### Lecture 9/29/2015

1. Sketch $\energy{V(x)}$.
2. Write the time-independent Schrödinger equation.
3. Find the general solution.
4. Apply the boundary and initial conditions.
5. Normalize and find $R$, $T$, or other quantities as needed.

![[Kyle Kabasares - Quantum Mechanics - Infinite Well Origin Choices.png|**Fig. 25** Griffiths places the infinite well between $0$ and $a$. The lecture centers a well of the same width between $-a/2$ and $a/2$.]]

### PDF page 31

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

### PDF page 32

In the centered infinite well, $\psi_{\mathrm I}=\psi_{\mathrm{III}}=0$ and $\psi_{\mathrm{II}}=A\sin(\signal{k}x)+B\cos(\signal{k}x)$. At the left wall,

$$
\psi_{\mathrm{II}}(-a/2)
=-A\sin(\signal{k}a/2)+B\cos(\signal{k}a/2)=0.
$$

For even states, set $A=0$. The cosine vanishes at the walls for $\signal{k}a/2=\pi/2,3\pi/2,5\pi/2,\ldots$. For odd states, set $B=0$. The sine vanishes when $\signal{k}a/2=n\pi$.

For the even sequence,

$$
\signal{k}=\frac{(2n+1)\pi}{a}
=\frac{\sqrt{2m\energy{E}}}{\hbar},
\qquad
\frac{(2n+1)^2\pi^2}{a^2}=\frac{2m\energy{E}}{\hbar^2}.
$$

The energy is quantized. The handwritten line for $\energy{E_n}$ is left open after the equals sign.

![[Kyle Kabasares - Quantum Mechanics - Lowest States of the Centered Well.png|**Fig. 28** The even ground state and the odd first excited state drawn at different energies in the centered infinite well.]]

#### Lecture 10/1/2015 — Harmonic oscillator

![[Kyle Kabasares - Quantum Mechanics - Harmonic Oscillator Ground State.png|**Fig. 29** Parabolic potential and a sketch of the ground state spanning the two classical turning points.]]

The restoring force is $\mechanical{F}=-\mechanical{k}x$, giving $\energy{V(x)}=\frac12\mechanical{k}x^2$. Classically,

$$
x(t)=A\sin(\signal{\omega}t)+B\cos(\signal{\omega}t),
\qquad
\signal{\omega}=\sqrt{\frac{\mechanical{k}}{m}},
\qquad
\energy{V}=\frac12m\signal{\omega}^2x^2.
$$

Quantum mechanically, $\hat H\psi=\energy{E}\psi$ with

$$
\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\energy{V(x)}
=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12m\signal{\omega}^2x^2.
$$

### PDF page 33

The harmonic-oscillator solutions of the time-independent equation are stationary states. The full state is $\Psi(x,t)=\psi(x)e^{-i\energy{E}t/\hbar}$. The spatial function should decay in the two outer regions. The lecture considers three approaches.

#### Approach 1 — Large $\lvert x\rvert$

Far from the origin the quadratic potential dominates $\energy{E}$.

$$
-\frac{\hbar^2}{2m}\psi''
=\left(\energy{E}-\frac12m\signal{\omega}^2x^2\right)\psi
\approx -\frac12m\signal{\omega}^2x^2\psi,
\qquad
\psi''\approx \frac{m^2\signal{\omega}^2}{\hbar^2}x^2\psi.
$$

The leading exponential factors are $e^{\pm m\signal{\omega}x^2/(2\hbar)}$. The growing one must have zero coefficient. The exponent here has one power of $\hbar$ in the denominator, as required by the preceding differential equation. Factor out the decaying Gaussian to handle the behavior at smaller $\lvert x\rvert$.

$$
\psi(x)=f(x)e^{-m\signal{\omega}x^2/(2\hbar)}.
$$

Try the Frobenius method with $f(x)=a_0+a_1x+a_2x^2+\cdots$ and substitute into the equation. For a normalizable solution the series must terminate in a polynomial of finite order $n$. This occurs at

$$
\energy{E_n}=\left(n+\frac12\right)\hbar\signal{\omega},
\qquad n=0,1,2,\ldots.
$$

### PDF page 34

Check the $n=0$ trial function $\psi=Ne^{-Kx^2}$ in the time-independent Schrödinger equation.

$$
-\frac{\hbar^2}{2m}\psi''+\frac12m\signal{\omega}^2x^2\psi=\energy{E}\psi.
$$

The handwritten trial differentiation stalls. Applying the chain rule gives $\psi''=(4K^2x^2-2K)\psi$. The $x^2$ terms cancel for $K=m\signal{\omega}/(2\hbar)$, yielding $\energy{E_0}=\hbar\signal{\omega}/2$ and

$$
\psi_0(x)=\left(\frac{m\signal{\omega}}{\pi\hbar}\right)^{1/4}
e^{-m\signal{\omega}x^2/(2\hbar)}.
$$

Classically the total energy is $\energy{E_{\mathrm{tot}}}=\mechanical{p}^2/(2m)+\frac12\mechanical{k}x^2$. The quantum Hamiltonian is $\hat H=-\hbar^2(d^2/dx^2)/(2m)+\frac12\mechanical{k}x^2$.

#### Algebraic approach with ladder operators

$$
\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12m\signal{\omega}^2x^2
=\frac{1}{2m}\left[\hat p_x^2+(m\signal{\omega}\hat x)^2\right].
$$

For commuting numbers, $a^2-b^2=(a+b)(a-b)$ and $a^2+b^2=(a+ib)(a-ib)$. For operators, the commutator is $[a,b]=ab-ba$.

### PDF page 35

Define the raising and lowering operators.

$$
a_\pm=\frac{m\signal{\omega}\hat x\mp i\hat p_x}{\sqrt{2m\signal{\omega}\hbar}}.
$$

In $a_+a_-$, $a_-$ acts first. Expanding the product gives

$$
\begin{aligned}
a_+a_-
&=\frac{(m\signal{\omega}\hat x-i\hat p_x)(m\signal{\omega}\hat x+i\hat p_x)}
{2m\signal{\omega}\hbar}\\
&=\frac{m^2\signal{\omega}^2\hat x^2+im\signal{\omega}[\hat x,\hat p_x]+\hat p_x^2}
{2m\signal{\omega}\hbar}\\
&=\frac{m^2\signal{\omega}^2\hat x^2-m\signal{\omega}\hbar+\hat p_x^2}
{2m\signal{\omega}\hbar}\\
&=\frac{\hat H}{\hbar\signal{\omega}}-\frac12,
\end{aligned}
$$

where $[\hat x,\hat p_x]=i\hbar$. The reversed product is $a_-a_+=\hat H/(\hbar\signal{\omega})+\frac12$. Thus

$$
\hat H=\hbar\signal{\omega}\left(a_+a_-+\frac12\right)
=\hbar\signal{\omega}\left(a_-a_+-\frac12\right)
=\hbar\signal{\omega}\left(a_\mp a_\pm\mp\frac12\right).
$$

Claim. If $\hat H\psi=\energy{E}\psi$, then the nonzero functions $a_+\psi$ and $a_-\psi$ satisfy the time-independent Schrödinger equation with energies $\energy{E}+\hbar\signal{\omega}$ and $\energy{E}-\hbar\signal{\omega}$, respectively.

### PDF page 36

Recall the factorization $a^2+b^2=(a+ib)(a-ib)$ for numbers. The oscillator ladder operators have commutator

$$
[a_-,a_+]=a_-a_+-a_+a_-
=\left(\frac{\hat H}{\hbar\signal{\omega}}+\frac12\right)
-\left(\frac{\hat H}{\hbar\signal{\omega}}-\frac12\right)=1.
$$

To prove the raising property, start with $\hat H\psi=\energy{E}\psi$ and use $a_-a_+=a_+a_-+1$.

$$
\begin{aligned}
\hat H(a_+\psi)
&=\hbar\signal{\omega}\left(a_+a_-+\frac12\right)a_+\psi\\
&=\hbar\signal{\omega}a_+\left(a_-a_++\frac12\right)\psi\\
&=\hbar\signal{\omega}a_+\left(a_+a_-+1+\frac12\right)\psi\\
&=a_+(\hat H+\hbar\signal{\omega})\psi\\
&=(\energy{E}+\hbar\signal{\omega})(a_+\psi).
\end{aligned}
$$

Exercise. Prove that $\hat H(a_-\psi)=(\energy{E}-\hbar\signal{\omega})(a_-\psi)$.

#### Lecture 10/5/2015 — Curvature

$$
\frac{d^2\psi}{dx^2}=-\frac{2m}{\hbar^2}(\energy{E}-\energy{V})\psi
=-\signal{k}^2\psi,
\qquad
\signal{k}=\frac{\sqrt{2m(\energy{E}-\energy{V})}}{\hbar}.
$$

In the oscillatory region, larger $\energy{E}-\energy{V}$ gives greater curvature relative to $\psi$ and more rapid oscillations.

### PDF page 37

#### Homework problem 4

The initial state is $\Psi(x,0)=A(\psi_2+\psi_3)$. Orthonormality gives

$$
\int_{-\infty}^{+\infty}\psi_m^*(x)\psi_n(x)\,dx=\delta_{mn},
\qquad
\int_{-\infty}^{+\infty}\psi_2^*(x)\psi_3(x)\,dx=0.
$$

To evolve $\Psi(x,0)$ into $\Psi(x,t)$, attach the phase $e^{-i\energy{E_n}t/\hbar}$ to each stationary state. For the infinite well on $0<x<a$,

$$
\Psi_2(x,t)=\sqrt{\frac{2}{a}}\sin\left(\frac{2\pi x}{a}\right)e^{-i\energy{E_2}t/\hbar}.
$$

The energy eigenvalue equation is $\hat H\psi=\energy{E}\psi$. The notes use hypothetical color and size operators as analogies, $\hat c\psi=c\psi$ and $\hat s\psi=s\psi$. For squared angular momentum the dimensionful eigenvalue equation is $\hat L^2\psi=\hbar^2\ell(\ell+1)\psi$, restoring $\hbar^2$ to the handwritten $\ell(\ell+1)$.

#### Problem 3b — Expectation values

Calculate $\langle x\rangle$, $\langle x^2\rangle$, $\langle\mechanical{p}\rangle$, and $\langle\mechanical{p}^2\rangle$. For $\langle x\rangle$, use $\sin^2 u=(1-\cos 2u)/2$ and set $\alpha=n\pi/a$.

$$
\langle x\rangle
=\frac{2}{a}\int_0^a x\sin^2(\alpha x)\,dx
=\frac{1}{a}\int_0^a x\,dx-\frac{1}{a}\int_0^a x\cos(2\alpha x)\,dx.
$$

Integrate the second term by parts with $u=x$ and $v=\sin(2\alpha x)/(2\alpha)$. The endpoint sine vanishes and the endpoint cosines agree.

$$
\langle x\rangle
=\frac{a}{2}-\frac{1}{a}
\left[\frac{x\sin(2\alpha x)}{2\alpha}+\frac{\cos(2\alpha x)}{4\alpha^2}\right]_0^a
=\frac{a}{2}.
$$

### PDF page 38

For the infinite well on $0<x<a$, $\langle x\rangle=a/2$ and $\energy{E_n}=\energy{E_0}n^2$, where $\energy{E_0}$ here is the constant multiplying $n^2$.

![[Kyle Kabasares - Quantum Mechanics - Well Wavefunctions and Densities.png|**Fig. 30** Wavefunctions in gray and probability densities in blue for $n=1$ and $n=2$.]]

#### Lecture 10/6/2015 — Harmonic oscillator

The lecture finishes the raising and lowering operators and turns to the power-series method. Recall

$$
\hat H=\hbar\signal{\omega}(a_+a_-+\tfrac12)
=\hbar\signal{\omega}(a_-a_+-\tfrac12),
\qquad
\hat H(a_+\psi)=(\energy{E}+\hbar\signal{\omega})(a_+\psi)
$$

when $\hat H\psi=\energy{E}\psi$. For lowering, use $[a_-,a_+]=1$, or $a_+a_-=a_-a_+-1$.

$$
\begin{aligned}
\hat H(a_-\psi)
&=\hbar\signal{\omega}(a_-a_+-\tfrac12)a_-\psi\\
&=\hbar\signal{\omega}a_-(a_+a_--\tfrac12)\psi\\
&=\hbar\signal{\omega}a_-(a_-a_+-\tfrac12-1)\psi\\
&=a_-(\hat H-\hbar\signal{\omega})\psi.
\end{aligned}
$$

### PDF page 39

The lowering calculation ends with

$$
\hat H(a_-\psi)
=a_-\hat H\psi-a_-(\hbar\signal{\omega}\psi)
=(\energy{E}-\hbar\signal{\omega})(a_-\psi).
$$

Since $\psi_0$ already has the lowest energy, $a_-\psi_0=0$. Use the differential form of the ladder operators to solve for $\psi_0$.

$$
a_\pm=\frac{1}{\sqrt{2\hbar m\signal{\omega}}}
\left(m\signal{\omega}x\mp\hbar\frac{d}{dx}\right),
\qquad
\left(\hbar\frac{d}{dx}+m\signal{\omega}x\right)\psi_0=0.
$$

The nonzero prefactor drops out. Separate variables and integrate.

$$
\frac{d\psi_0}{dx}=-\frac{m\signal{\omega}}{\hbar}x\psi_0,
\qquad
\int\frac{d\psi_0}{\psi_0}=-\frac{m\signal{\omega}}{\hbar}\int x\,dx.
$$

For a real positive choice of phase, $\ln\psi_0=-m\signal{\omega}x^2/(2\hbar)+\text{constant}$. Using $e^{a+b}=e^ae^b$ gives $\psi_0=Ae^{-m\signal{\omega}x^2/(2\hbar)}$. Normalize this function to find $A$.

The new office hours are Monday after 3:30, open door, and Friday from about 2:30 to 4:30.

### PDF page 40

Use $\int_{-\infty}^{+\infty}e^{-ax^2}\,dx=\sqrt{\pi/a}$ for $a>0$. With $\hbar=h/(2\pi)$,

$$
1=\int_{-\infty}^{+\infty}\lvert\psi_0\rvert^2\,dx
=A_0^2\int_{-\infty}^{+\infty}e^{-m\signal{\omega}x^2/\hbar}\,dx
=A_0^2\sqrt{\frac{\hbar\pi}{m\signal{\omega}}},
\qquad
A_0=\left(\frac{m\signal{\omega}}{\hbar\pi}\right)^{1/4}.
$$

#### Ground-state energy

Since $a_-\psi_0=0$,

$$
\hat H\psi_0=\hbar\signal{\omega}(a_+a_-+\tfrac12)\psi_0
=\tfrac12\hbar\signal{\omega}\psi_0
=\energy{E_0}\psi_0,
\qquad
\energy{E_0}=\frac12\hbar\signal{\omega}.
$$

The equality $\energy{U}=\frac12\mechanical{k}x^2=\frac12m\signal{\omega}^2x^2$ gives $\signal{\omega}=\sqrt{\mechanical{k}/m}$.

Generate excited states with $\psi_n=A_n(a_+)^n\psi_0$, with constants chosen for normalization. In particular,

$$
\begin{aligned}
\psi_1
&=a_+\psi_0
=\frac{A_0}{\sqrt{2m\signal{\omega}\hbar}}
\left(-\hbar\frac{d}{dx}+m\signal{\omega}x\right)
e^{-m\signal{\omega}x^2/(2\hbar)}\\
&=A_0\frac{2m\signal{\omega}}{\sqrt{2m\signal{\omega}\hbar}}\,
x e^{-m\signal{\omega}x^2/(2\hbar)}.
\end{aligned}
$$

### PDF page 41

The first excited state is $\psi_1=A_1xe^{-m\signal{\omega}x^2/(2\hbar)}$, and $\energy{E_n}=(n+\frac12)\hbar\signal{\omega}$. The general spatial state is

$$
\psi_n(x)=A_n H_n(\alpha x)e^{-\alpha^2x^2/2},
\qquad
\alpha=\sqrt{\frac{m\signal{\omega}}{\hbar}}
=\left(\frac{m\mechanical{k}}{\hbar^2}\right)^{1/4},
\qquad
A_n=\sqrt{\frac{\alpha}{2^n n!\sqrt{\pi}}}.
$$

Here $H_n$ is the Hermite polynomial of order $n$. The powers in $\alpha$ and $A_n$ are set by the Gaussian and its normalization. The handwritten expressions give $\alpha^2$ and $A_n^2$ in those places.

| $n$ | $H_n(z)$ |
| --- | --- |
| $0$ | $1$ |
| $1$ | $2z$ |
| $2$ | $4z^2-2$ |
| $3$ | $8z^3-12z$ |
| $4$ | $16z^4-48z^2+12$ |

#### Power series

Power series can be used to solve ordinary differential equations. Examples are

$$
\begin{aligned}
e^x&=1+x+\frac{x^2}{2!}+\cdots=\sum_{n=0}^{\infty}\frac{x^n}{n!},\\
\sin x&=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots
=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!},\\
\cos x&=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots
=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}.
\end{aligned}
$$

For example, $y''+y=0$ has solution $c_1\cos x+c_2\sin x$. To recover it by the series method, assume $y=\sum_{n=0}^{\infty}a_nx^n$.

### PDF page 42

To find the recurrence for the $a_n$, differentiate the series term by term.

$$
\begin{aligned}
y&=a_0+a_1x+a_2x^2+\cdots=\sum_{n=0}^{\infty}a_nx^n,\\
y'&=a_1+2a_2x+3a_3x^2+4a_4x^3+\cdots
=\sum_{n=1}^{\infty}na_nx^{n-1},\\
y''&=2a_2+3\cdot2a_3x+4\cdot3a_4x^2+\cdots
=\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}.
\end{aligned}
$$

In $y''+y=0$, use $n=k+2$ in the first sum and then rename $k$ to $n$.

$$
\sum_{n=2}^{\infty}n(n-1)a_nx^{n-2}+\sum_{n=0}^{\infty}a_nx^n
=\sum_{n=0}^{\infty}\big[(n+2)(n+1)a_{n+2}+a_n\big]x^n=0.
$$

Each coefficient vanishes, so $a_{n+2}=-a_n/[(n+2)(n+1)]$ for $n\ge 0$.

#### Lecture 10/8/2015

Iterating the recurrence for $y''+y=0$ gives

$$
\begin{aligned}
a_2&=-\frac{a_0}{2\cdot1},&
a_4&=-\frac{a_2}{4\cdot3}=\frac{(-1)^2a_0}{4!},\\
a_3&=-\frac{a_1}{3\cdot2},&
a_5&=-\frac{a_3}{5\cdot4}=\frac{(-1)^2a_1}{5!}.
\end{aligned}
$$

### PDF page 43

The even and odd coefficients are

$$
a_{2n}=\frac{(-1)^na_0}{(2n)!},
\qquad
a_{2n+1}=\frac{(-1)^na_1}{(2n+1)!}.
$$

Substitute into the series to recover the cosine and sine.

$$
y=a_0\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n}}{(2n)!}
+a_1\sum_{n=0}^{\infty}\frac{(-1)^nx^{2n+1}}{(2n+1)!}
=a_0\cos x+a_1\sin x.
$$

#### Harmonic-oscillator asymptotics

Write the Schrödinger equation in the dimensionless coordinate $y=\sqrt{m\signal{\omega}/\hbar}\,x$. With $\signal{\omega}=\sqrt{\mechanical{k}/m}$ and $\lambda=2\energy{E}/(\hbar\signal{\omega})$,

$$
\frac{d^2\psi}{dy^2}-y^2\psi=-\lambda\psi.
$$

For large $\lvert y\rvert$, the $y^2$ term dominates. The leading exponential factors are $Ae^{-y^2/2}$ and $Be^{+y^2/2}$. For their sum,

$$
\psi'=-Ay e^{-y^2/2}+By e^{y^2/2},
\qquad
\psi''=(y^2-1)Ae^{-y^2/2}+(y^2+1)Be^{y^2/2}.
$$

Thus $\psi''\approx y^2\psi$ at large $\lvert y\rvert$. Normalizability requires eliminating the growing solution. Factor out $e^{-y^2/2}$ and take the remaining factor to be $f(y)=\sum_{n=0}^{\infty}a_ny^n$.

### PDF page 44

Substituting $\psi=e^{-y^2/2}f(y)$ into $\psi''-y^2\psi=-\lambda\psi$ gives

$$
f''-2yf'+(\lambda-1)f=0.
$$

For $f(y)=\sum_{n=0}^{\infty}a_ny^n$, the coefficients satisfy

$$
(n+2)(n+1)a_{n+2}-a_n(2n-\lambda+1)=0.
$$

#### Harmonic oscillator and infinite well

| Property | Harmonic oscillator | Infinite well on $0<x<L$ |
| --- | --- | --- |
| Ground-state index | $n=0$ | $n=1$ |
| Symmetry | Even and odd states about $x=0$ | Even and odd states about $x=L/2$ |
| Classically forbidden region | Wavefunction penetrates beyond the turning points | $\psi=0$ outside the well |
| Mean position | $\langle x\rangle=0$ | $\langle x\rangle=L/2$ |
| Mean momentum | $\langle\mechanical{p_x}\rangle=0$ | $\langle\mechanical{p_x}\rangle=0$ |
| Stationary states | Orthonormal, with a polynomial times a decaying Gaussian | Orthonormal sinusoidal functions |
| Energies | $\energy{E_n}=(n+\frac12)\hbar\signal{\omega}$ | $\energy{E_n}=\energy{E_1}n^2=\pi^2\hbar^2n^2/(2mL^2)$ |

The oscillator sketch emphasizes greater amplitudes near the turning points in excited states. The energy gaps in the infinite well increase with $n$.

#### Midterm topics

- Raising and lowering operators
- Wavefunctions
- Finite and infinite wells
- Reflection and transmission coefficients
- Chapters 1, 2, and 3
- Hamiltonian expressed in raising and lowering operators

### PDF page 45

#### Finite and infinite wells

For the same width and well floor, the infinite well has higher energies than the corresponding finite-well bound states.

![[Kyle Kabasares - Quantum Mechanics - Well with Positive Outer Potential.png|**Fig. 31** A finite well with its floor at zero and a bound energy $\energy{E}<\energy{V_0}$.]]

Even and odd states satisfy separate transcendental equations. With $a$ the half-width, $z=\signal{k}a$, $\signal{k}=\sqrt{2m\energy{E}}/\hbar$, and $z_0=a\sqrt{2m\energy{V_0}}/\hbar$,

$$
\begin{aligned}
\tan z&=\sqrt{(z_0/z)^2-1} &&\text{even},\\
-\cot z&=\sqrt{(z_0/z)^2-1} &&\text{odd}.
\end{aligned}
$$

A finite square well always has at least one even bound state. An odd state exists if $z_0$ is large enough. Greater depth or width increases $z_0$. The handwritten comment says “skinnier and deeper.” Narrowing alone decreases $z_0$.

![[Kyle Kabasares - Quantum Mechanics - Bound State Intersection.png|**Fig. 32** The intersection of the left and right sides of the transcendental equation marks a bound state.]]

$$
\Delta x\,\Delta\mechanical{p}\ge\frac{\hbar}{2}.
$$

Greater confinement makes quantization more apparent.

![[Kyle Kabasares - Quantum Mechanics - Confinement in Finite and Infinite Wells.png|**Fig. 33** Ground-state sketches compare the spread $\Delta x$ and the energy above the well floor in finite and infinite wells.]]

### PDF page 46

#### Strategy for wavefunctions

Sketch the potential and identify the regions. Write $\hat H$ and its general solution in each region, then apply boundary conditions and the conditions specific to the problem. Normalize bound states and compute energies, reflection and transmission coefficients, or expectation values as appropriate.

$$
\begin{aligned}
\psi_{\mathrm I}&=Ae^{i\signal{k}x}+Be^{-i\signal{k}x},\\
\psi_{\mathrm{II}}&=Ce^{i\signal{k'}x}+De^{-i\signal{k'}x},\\
\psi_{\mathrm{III}}&=Fe^{i\signal{k''}x}+Ge^{-i\signal{k''}x}.
\end{aligned}
$$

For incidence from the left, $R=\lvert B\rvert^2/\lvert A\rvert^2$ and $R+T=1$. For the rectangular barrier with $\energy{E}<\energy{V}$,

$$
T=\left[1+\frac{(e^{\signal{\kappa}L}-e^{-\signal{\kappa}L})^2}
{16(\energy{E}/\energy{V})(1-\energy{E}/\energy{V})}\right]^{-1},
\qquad
\signal{\kappa}=\frac{\sqrt{2m(\energy{V}-\energy{E})}}{\hbar}.
$$

#### Lecture 10/12/2015

A scattering particle incident on a finite well with zero potential outside has $\energy{E}>0$.

![[Kyle Kabasares - Quantum Mechanics - Scattering Energy Above a Square Well.png|**Fig. 34** The scattering energy is above the exterior potential of a centered finite well.]]

For symmetric wells, choose even or odd solutions. An even function obeys $f(-a)=f(a)$, as for cosine. An odd function obeys $f(-a)=-f(a)$, as for sine or $x$.

![[Kyle Kabasares - Quantum Mechanics - Symmetric Double Well.png|**Fig. 35** Two narrow attractive wells placed symmetrically at $-a$ and $+a$.]]

### PDF page 47

Practice sketching the potentials of different systems. In a symmetric region, the even and odd combinations are

$$
\psi_{\mathrm{even}}=B(e^{i\signal{k}x}+e^{-i\signal{k}x}),
\qquad
\psi_{\mathrm{odd}}=B(e^{i\signal{k}x}-e^{-i\signal{k}x}).
$$

![[Kyle Kabasares - Quantum Mechanics - Double Well Even and Odd States.png|**Fig. 36** Even and odd wavefunctions sketched for wells centered at $-a$ and $a$.]]

#### Boundary conditions

$\psi$ is continuous. Its derivative is continuous across a finite step, with separate rules at delta potentials and infinite walls. For symmetric potentials, parity lets us impose the interface conditions on one side.

#### Delta-function discontinuity

![[Kyle Kabasares - Quantum Mechanics - Positive Delta Potential.png|**Fig. 37** Sketch of a positive delta potential separating regions I and II at $x=0$.]]

For $\energy{V(x)}=+\alpha\delta(x)$, $\psi_{\mathrm I}(0)=\psi_{\mathrm{II}}(0)$. Integrate the Schrödinger equation from $-\epsilon$ to $\epsilon$ and take the limit.

$$
\lim_{\epsilon\to0^+}\left[
-\frac{\hbar^2}{2m}\int_{-\epsilon}^{\epsilon}\psi''\,dx
+\int_{-\epsilon}^{\epsilon}\energy{V(x)}\psi\,dx
\right]=\lim_{\epsilon\to0^+}\int_{-\epsilon}^{\epsilon}\energy{E}\psi\,dx=0.
$$

The potential integral tends to $\alpha\psi(0)$. Restoring the coefficient $\alpha$ omitted in the handwritten boxed formula gives

$$
\psi_{\mathrm{II}}'(0)-\psi_{\mathrm I}'(0)=\frac{2m\alpha}{\hbar^2}\psi(0).
$$

![[Kyle Kabasares - Quantum Mechanics - Wavefunction with a Cusp.png|**Fig. 38** A finite, continuous wavefunction with a jump in its slope at the origin.]]

For the left-hand general solution,

$$
\begin{aligned}
\psi_{\mathrm I}&=Ae^{i\signal{k}x}+Be^{-i\signal{k}x},\\
\psi_{\mathrm I}'&=i\signal{k}Ae^{i\signal{k}x}-i\signal{k}Be^{-i\signal{k}x},\\
\psi_{\mathrm I}'(0)&=i\signal{k}(A-B).
\end{aligned}
$$

### PDF page 48

For particles incident from the left, $\psi_{\mathrm{II}}=Fe^{i\signal{k}x}+Ge^{-i\signal{k}x}$ with $G=0$, so $\psi_{\mathrm{II}}'(0)=i\signal{k}F$. The positive delta potential gives the matching equation

$$
i\signal{k}F-i\signal{k}(A-B)=\frac{2m\alpha}{\hbar^2}\psi(0).
$$

For real $\signal{k}$, $e^{\pm\signal{k}x}$ are real and $e^{i\signal{k}x}$ is generally complex. If the wave number is imaginary, write $\signal{k}=i\signal{\kappa}$ with real $\signal{\kappa}$, so $i\signal{k}=-\signal{\kappa}$.

![[Kyle Kabasares - Quantum Mechanics - Finite Well Energy Reference Choices.png|**Fig. 39** Two energy conventions for a finite well. The first sets the exterior potential to zero, and the second sets the well floor to zero.]]

In either convention, the interior solution is $Ce^{i\signal{k}x}+De^{-i\signal{k}x}$ with $\signal{k}=\sqrt{2m(\energy{E}-\energy{V})}/\hbar$ real. For the first well, $\energy{V}=0$ outside and the bound energy is negative. There $\signal{k'}=i\sqrt{2m\lvert\energy{E}\rvert}/\hbar$ and the exterior solution is $Ae^{-\signal{\kappa}x}+Be^{+\signal{\kappa}x}$. For the second well, the exterior potential exceeds $\energy{E}$ and the exterior wave number is

$$
\frac{\sqrt{2m(\energy{E}-\energy{V})}}{\hbar}
=i\frac{\sqrt{2m(\energy{V}-\energy{E})}}{\hbar}
=i\signal{\kappa}.
$$

### PDF page 49

#### Bra-ket notation — Matrix transpose

The transpose switches rows and columns, sending $m_{ij}$ to $m_{ji}$ and preserving the diagonal entries.

$$
M^{\mathsf T}=
\begin{pmatrix}
m_{11}&m_{21}&m_{31}\\
m_{12}&m_{22}&m_{32}\\
m_{13}&m_{23}&m_{33}
\end{pmatrix}.
$$

#### Hermitian conjugate

$M^\dagger$, read “$M$ dagger,” is the complex conjugate of the transpose, also called the Hermitian conjugate or adjoint matrix. It sends $m_{ij}$ to $m_{ji}^*$.

$$
M^\dagger=
\begin{pmatrix}
m_{11}^*&m_{21}^*&m_{31}^*\\
m_{12}^*&m_{22}^*&m_{32}^*\\
m_{13}^*&m_{23}^*&m_{33}^*
\end{pmatrix}.
$$

A matrix is Hermitian when $M=M^\dagger$. For example,

$$
M=\begin{pmatrix}1&1+i\\1-i&3\end{pmatrix}
=M^\dagger.
$$

Applying a $2\times2$ matrix to a $2\times1$ ket gives another ket.

$$
M\lvert a\rangle
=\begin{pmatrix}m_{11}&m_{12}\\m_{21}&m_{22}\end{pmatrix}
\begin{pmatrix}a_1\\a_2\end{pmatrix}
=\begin{pmatrix}m_{11}a_1+m_{12}a_2\\m_{21}a_1+m_{22}a_2\end{pmatrix}
=\lvert c\rangle.
$$

### PDF page 50

#### Identity and unitary matrices

$$
I=\begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix},
\qquad
UU^\dagger=I\quad\text{for a unitary matrix }U.
$$

#### Determinant and trace

For $M=\begin{pmatrix}a&b\\c&d\end{pmatrix}$,

$$
\det M=\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc,
\qquad
\operatorname{Tr}M=a+d.
$$

The trace is the sum of the diagonal entries. For the $2\times2$ identity, $\det I=(1)(1)-(0)(0)=1$. The handwritten boxed zero has been corrected.

#### Hermitian matrix eigenvectors

For a Hermitian matrix $H=H^\dagger$, an eigenvector is a ket that the matrix maps to a scalar multiple of itself. The scalar is the eigenvalue.

$$
H\lvert a\rangle=\lambda_a\lvert a\rangle,
\qquad
H\lvert b\rangle=\lambda_b\lvert b\rangle.
$$

### PDF page 51

#### Kets and bras

A ket is a column vector with possibly complex entries. Its corresponding bra is the conjugate row vector.

$$
\lvert a\rangle=\begin{pmatrix}a_1\\a_2\\a_3\\\vdots\\a_n\end{pmatrix},
\qquad
\langle a\rvert=\begin{pmatrix}a_1^*&a_2^*&a_3^*&\cdots&a_n^*\end{pmatrix}.
$$

A complex number has form $z=x+iy$, with $i^2=-1$. Its conjugate is $z^*=x-iy$ and $(z^*)^*=z$.

![[Kyle Kabasares - Quantum Mechanics - Conjugation in the Complex Plane.png|**Fig. 40** Complex conjugation reflects $z=x+iy$ across the real axis.]]

The modulus is the length of the vector. Its square is

$$
\lvert z^*\rvert^2=\lvert z\rvert^2=zz^*=(x+iy)(x-iy)=x^2+y^2.
$$

A real number such as $z=2$ equals its own conjugate.

To add two kets of the same dimension, add the corresponding entries. For example,

$$
\lvert a\rangle+\lvert b\rangle
=\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
+\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
=\begin{pmatrix}a_1+b_1\\a_2+b_2\\a_3+b_3\end{pmatrix}
=\lvert c\rangle.
$$

### PDF page 52

#### Multiplication and inner products

Multiplying a ket by a scalar $\alpha$, which may be complex, multiplies each component.

$$
\lvert c\rangle=\alpha\lvert a\rangle
=\alpha\begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}
=\begin{pmatrix}\alpha a_1\\\alpha a_2\\\alpha a_3\end{pmatrix}.
$$

The product of a bra and a ket is a scalar called the inner product.

$$
\begin{aligned}
\langle a\mid b\rangle
&=\begin{pmatrix}a_1^*&a_2^*&a_3^*\end{pmatrix}
\begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}
=a_1^*b_1+a_2^*b_2+a_3^*b_3,\\
\langle b\mid a\rangle&=b_1^*a_1+b_2^*a_2+b_3^*a_3,\\
\langle b\mid a\rangle^*&=b_1a_1^*+b_2a_2^*+b_3a_3^*
=\langle a\mid b\rangle.
\end{aligned}
$$

#### Matrices

In $M$, $m_{ij}$ labels the entry in row $i$ and column $j$. Each entry can be complex. Entrywise conjugation sends $m_{ij}$ to $m_{ij}^*$.

$$
M=\begin{pmatrix}m_{11}&m_{12}&m_{13}\\m_{21}&m_{22}&m_{23}\\m_{31}&m_{32}&m_{33}\end{pmatrix},
\qquad
M^*=\begin{pmatrix}m_{11}^*&m_{12}^*&m_{13}^*\\m_{21}^*&m_{22}^*&m_{23}^*\\m_{31}^*&m_{32}^*&m_{33}^*\end{pmatrix}.
$$

### PDF page 53

#### Lecture 10/15/2015 — Heisenberg uncertainty principle

The standard deviations of position and momentum in the same state obey

$$
\sigma_{p_x}\sigma_x\ge\frac{\hbar}{2}.
$$

The canonical commutator is $[\hat x,\hat p_x]=i\hbar$. The handwritten line reverses the order without reversing the sign.

#### Discrete spectrum

A measurement of an observable $Q$ gives an eigenvalue of its Hermitian operator $\hat Q$. Let $f_n$ be its orthonormal eigenfunctions, $\hat Q f_n=\lambda_n f_n$. A state $\Psi$ can be a superposition of these functions.

$$
\Psi=\sum_n c_nf_n,
\qquad
\Psi=c_1f_1+c_2f_2+c_3f_3
\quad\text{for the three-term example}.
$$

Applying the operator gives $\hat Q\lvert\Psi\rangle$. The expectation value is

$$
\langle\Psi\mid\hat Q\mid\Psi\rangle
=\int_{-\infty}^{+\infty}\Psi^*\hat Q\Psi\,dx.
$$

The expansion coefficient is $c_1=\langle f_1\mid\Psi\rangle$. The probability of the corresponding nondegenerate outcome $\lambda_1$ is $\lvert c_1\rvert^2=\lvert\langle f_1\mid\Psi\rangle\rvert^2$. The handwritten line conflates the coefficient and its squared modulus.

### PDF page 54

#### Continuous spectrum

The eigenvalues are labeled $\lambda(z)$ and the generalized eigenfunctions are $f_z$, where $z$ may be a label other than position. The expansion coefficient is $c(z)=\langle f_z\mid\Psi\rangle$. The probability density is $\lvert c(z)\rvert^2$, so the probability in an interval $dz$ is $\lvert c(z)\rvert^2\,dz$. In a discrete spectrum the corresponding probability is the squared modulus $\lvert c_n\rvert^2$.

#### Expectation values and Dirac notation

For a state expanded as $\Psi=\sum_n c_nf_n$,

$$
\langle Q\rangle
=\int_{-\infty}^{+\infty}\Psi^*\hat Q\Psi\,dx
=\langle\Psi\mid\hat Q\mid\Psi\rangle.
$$

In position space, the bra $\langle\Psi\rvert$ supplies the conjugate $\Psi^*$, the ket $\lvert\Psi\rangle$ represents $\Psi$, and $\hat Q\lvert\Psi\rangle$ represents the result of applying $\hat Q$ to $\Psi$. A normalized state satisfies $\langle\Psi\mid\Psi\rangle=1$. The discrete eigenfunctions satisfy

$$
\langle f_m\mid f_n\rangle=\delta_{mn}
=\begin{cases}1,&m=n,\\0,&m\ne n.\end{cases}
$$

$\delta_{mn}$ is the Kronecker delta.

### PDF page 55

In $\Psi=\sum_n c_nf_n$, the coefficient $c_n$ gives the amplitude of the eigenfunction $f_n$. Expanding the expectation value and using orthonormality gives

$$
\begin{aligned}
\langle Q\rangle
&=\left\langle\sum_{n'}c_{n'}f_{n'}\;\middle|\;\hat Q\sum_nc_nf_n\right\rangle\\
&=\sum_{n',n}c_{n'}^*c_n\lambda_n\langle f_{n'}\mid f_n\rangle\\
&=\sum_n\lvert c_n\rvert^2\lambda_n.
\end{aligned}
$$

Here $c_n=\langle f_n\mid\Psi\rangle$ and the probability weight is $\lvert c_n\rvert^2$.

#### Momentum space

Write the momentum-space coefficients as $\Phi(\mechanical{p},t)$. The de Broglie relation is $\mechanical{p}=h/\signal{\lambda}=\hbar\signal{k}$, since $\signal{k}=2\pi/\signal{\lambda}$. The handwritten quotient $\hbar/\signal{k}$ has been corrected.

$$
\begin{aligned}
\Phi(\mechanical{p},t)
&=\langle f_p\mid\Psi\rangle
=\frac{1}{\sqrt{2\pi\hbar}}
\int_{-\infty}^{+\infty}e^{-i\mechanical{p}x/\hbar}\Psi(x,t)\,dx,\\
\Psi(x,t)
&=\frac{1}{\sqrt{2\pi\hbar}}
\int_{-\infty}^{+\infty}e^{i\mechanical{p}x/\hbar}\Phi(\mechanical{p},t)\,d\mechanical{p}.
\end{aligned}
$$

The probability of measuring a momentum in the interval of width $d\mechanical{p}$ is $\lvert\Phi(\mechanical{p},t)\rvert^2\,d\mechanical{p}$.

### PDF page 56

#### Standard deviation and the uncertainty principle

$$
\sigma_Q=\sqrt{\sigma_Q^2}=\sqrt{\langle Q^2\rangle-\langle Q\rangle^2}.
$$

In the classical example, $\langle x\rangle$ is the mean and $x-\langle x\rangle$ is the deviation. The mean deviation is zero. The mean squared deviation is generally positive.

![[Kyle Kabasares - Quantum Mechanics - Standard Deviation on a Bell Curve.png|**Fig. 41** The mean and a distance of one standard deviation marked on a bell curve.]]

The generalized uncertainty principle is

$$
\sigma_A\sigma_B\ge\frac12\left\lvert\left\langle[\hat A,\hat B]\right\rangle\right\rvert.
$$

The modulus makes the bound independent of the order of $A$ and $B$. With $[\hat x,\hat p_x]=i\hbar$, it gives $\sigma_x\sigma_{p_x}\ge\hbar/2$.

#### Lecture 10/21/2015 — Generalized uncertainty principle

For observables $A$ and $B$, define $f=(\hat A-\langle A\rangle)\psi$ and $g=(\hat B-\langle B\rangle)\psi$. Then

$$
\sigma_A^2=\langle f\mid f\rangle,
\qquad
\sigma_B^2=\langle g\mid g\rangle.
$$

Quantum observables are represented by Hermitian operators and have real eigenvalues.

### PDF page 57

A Hermitian operator obeys $\hat A^\dagger=\hat A$ and its eigenvectors for distinct eigenvalues are orthogonal. The bra $\langle g\rvert$ is the conjugate transpose of $\lvert g\rangle$. A row times a column gives $(a\ b\ c)(1,2,3)^{\mathsf T}=a+2b+3c$.

#### Schwarz inequality

$$
\left\lvert\int_a^b f(x)^*g(x)\,dx\right\rvert
\le
\sqrt{\int_a^b\lvert f(x)\rvert^2\,dx\ \int_a^b\lvert g(x)\rvert^2\,dx}.
$$

For real vectors, $0\le\cos^2\theta\le1$ implies

$$
\lvert\mathbf C\cdot\mathbf D\rvert^2
=\lvert\mathbf C\rvert^2\lvert\mathbf D\rvert^2\cos^2\theta
\le\lvert\mathbf C\rvert^2\lvert\mathbf D\rvert^2.
$$

The inner product $z=\langle f\mid g\rangle=\int_a^b f(x)^*g(x)\,dx$ can be complex. If $z=x+iy$, then

$$
\lvert z\rvert^2=(x+iy)(x-iy)=x^2+y^2
\ge y^2
=\left(\frac{z-z^*}{2i}\right)^2.
$$

Since $\langle g\mid f\rangle=\langle f\mid g\rangle^*$,

$$
\lvert\langle f\mid g\rangle\rvert^2
\ge\left(\frac{\langle f\mid g\rangle-\langle g\mid f\rangle}{2i}\right)^2.
$$

Take $\lvert f\rangle=(\hat A-\langle A\rangle)\lvert\psi\rangle$ and $\lvert g\rangle=(\hat B-\langle B\rangle)\lvert\psi\rangle$. The product of the two separate expectation values is $\langle A\rangle\langle B\rangle=\langle\psi\mid\hat A\mid\psi\rangle\langle\psi\mid\hat B\mid\psi\rangle$. The product operator has expectation $\langle\psi\mid\hat A\hat B\mid\psi\rangle$. The state is normalized, $\langle\psi\mid\psi\rangle=1$.

### PDF page 58

The matrix element $\langle\psi\mid\hat A\mid\psi\rangle$ is the inner product of $\psi$ with $\hat A\psi$. If $\psi$ is an eigenstate of $\hat A$, the latter is a real scalar times $\psi$.

Expand $\lvert\psi\rangle=\sum_n c_n\lvert\psi_n\rangle$ in orthonormal eigenstates of $\hat B$ with eigenvalues $b_n$.

$$
\langle B\rangle
=\left\langle\psi\;\middle|\;\sum_n b_nc_n\psi_n\right\rangle
=\sum_n b_n\lvert c_n\rvert^2.
$$

For the product of the operators,

$$
\langle\hat A\hat B\rangle
=\langle\psi\mid\hat A\hat B\mid\psi\rangle
=\left\langle\psi\;\middle|\;\sum_n b_nc_n\hat A\psi_n\right\rangle.
$$

The additional replacement $\hat A\psi_n=a_n\psi_n$ in the notes applies if the chosen basis is also an eigenbasis of $\hat A$.

For the centered vectors $f$ and $g$,

$$
\langle f\mid g\rangle=\langle\hat A\hat B\rangle-\langle A\rangle\langle B\rangle,
\qquad
\langle g\mid f\rangle=\langle\hat B\hat A\rangle-\langle B\rangle\langle A\rangle.
$$

The products of scalar expectations cancel in the difference. Apply Schwarz and the bound by the imaginary part of the inner product.

$$
\begin{aligned}
\sigma_A^2\sigma_B^2
&\ge\lvert\langle f\mid g\rangle\rvert^2\\
&\ge\left[\frac{\langle f\mid g\rangle-\langle g\mid f\rangle}{2i}\right]^2\\
&=\left[\frac{\langle\hat A\hat B\rangle-\langle\hat B\hat A\rangle}{2i}\right]^2
=\left[\frac{\langle[\hat A,\hat B]\rangle}{2i}\right]^2.
\end{aligned}
$$

### PDF page 59

Taking the square root of the variance inequality gives

$$
\sigma_A\sigma_B\ge\frac12\left\lvert\left\langle[\hat A,\hat B]\right\rangle\right\rvert,
\qquad
\sigma_x\sigma_{p_x}\ge\frac12\lvert i\hbar\rvert=\frac{\hbar}{2}.
$$

#### Lecture 10/22/2015 — Discrete states

![[Kyle Kabasares - Quantum Mechanics - Discrete and Continuous Spectra.png|**Fig. 42** The infinite well and harmonic oscillator have discrete levels. The barrier has a continuum, and the well below the outer potential adds discrete bound levels.]] 

A vector can be expressed as a linear combination, such as $\mathbf C=a\mathbf A+b\mathbf B$. The Cartesian unit vectors satisfy $\hat{\mathbf x}\cdot\hat{\mathbf x}=1$ and $\hat{\mathbf y}\cdot\hat{\mathbf x}=0$. For $\mathbf v=v_x\hat{\mathbf x}+v_y\hat{\mathbf y}+v_z\hat{\mathbf z}$, the dot product $\hat{\mathbf x}\cdot\mathbf v=v_x$ selects its $x$ component. For real vectors,

$$
\mathbf A\cdot\mathbf B=\sum_{i=x,y,z}A_iB_i.
$$

The corresponding wavefunction expansion and coefficient extraction are

$$
\Psi=\sum_n c_n\Psi_n,
\qquad
\int\Psi_m^*\Psi_n\,dx=\delta_{mn},
\qquad
c_1=\int\Psi_1^*\Psi\,dx.
$$

The last integral projects the full wavefunction onto the specific basis function $\Psi_1$.

### PDF page 60

For $\Psi=\sum_n c_n\psi_n$ and $\Phi=\sum_m d_m\psi_m$ in an orthonormal basis,

$$
\int\Psi^*\Phi\,dx
=\sum_{m,n}c_n^*d_m\int\psi_n^*\psi_m\,dx
=\sum_{m,n}c_n^*d_m\delta_{nm}
=\sum_n c_n^*d_n.
$$

Only equal indices contribute. The ket $\lvert\Psi\rangle$ is independent of the basis. Its coordinates require a choice of basis.

#### Linear algebra

A ket is a column, its entrywise conjugate is another column, and the corresponding bra is the conjugate transpose.

$$
\lvert a\rangle=\begin{pmatrix}a_1\\a_2\\\vdots\\a_n\end{pmatrix},
\qquad
\lvert a^*\rangle=\begin{pmatrix}a_1^*\\a_2^*\\\vdots\\a_n^*\end{pmatrix},
\qquad
\langle a\rvert=(a_1^*\ a_2^*\ \cdots\ a_n^*).
$$

For a matrix, $(T^\dagger)_{ij}=T_{ji}^*$. A square matrix is Hermitian, or self-adjoint, if $T=T^\dagger$. It is skew-Hermitian, or anti-Hermitian, if $T=-T^\dagger$.

$$
[\hat x,\hat p_x]f=x(\hat p_x f)-\hat p_x(xf),
\qquad
[S,T]=ST-TS.
$$

$$
(ST)^{\mathsf T}=T^{\mathsf T}S^{\mathsf T},
\qquad
(ST)^\dagger=T^\dagger S^\dagger,
\qquad
T^{-1}=\frac{C^{\mathsf T}}{\det T},
$$

where $C$ is the matrix of cofactors and the last expression requires $\det T\ne0$.

### PDF page 61

#### Matrix exercise

$$
A=\begin{pmatrix}-1&1&i\\2&0&3\\2i&-2i&2\end{pmatrix},
\qquad
B=\begin{pmatrix}2&0&-i\\0&1&0\\i&3&2\end{pmatrix}.
$$

Determine $[A,B]$, $A^{\mathsf T}$, and $B^{-1}$, and check $BB^{-1}=I$. For the commutator, multiply rows by columns in each order.

$$
AB=\begin{pmatrix}
-3&1+3i&3i\\
4+3i&9&6-2i\\
6i&6-2i&6
\end{pmatrix},
\qquad
BA=\begin{pmatrix}
0&0&0\\
2&0&3\\
6+3i&-3i&12
\end{pmatrix}.
$$

$$
[A,B]=AB-BA
=\begin{pmatrix}
-3&1+3i&3i\\
2+3i&9&3-2i\\
-6+3i&6+i&-6
\end{pmatrix}.
$$

The handwritten $(AB)_{11}$ includes a spurious $1\cdot1$ where the first column of $B$ has zero. This entry and the final subtraction in the last row have been corrected.

### PDF page 62

The determinant of $B$ is $3$. The notes start the first column of its cofactor matrix:

$$
\begin{pmatrix}
(-1)^{1+1}\begin{vmatrix}1&0\\3&2\end{vmatrix}\\
(-1)^{2+1}\begin{vmatrix}0&-i\\3&2\end{vmatrix}\\
(-1)^{3+1}\begin{vmatrix}0&-i\\1&0\end{vmatrix}
\end{pmatrix}.
$$

The eigenvalue equation $\hat H\psi=\energy{E}\psi$ has a matrix, a vector, and a scalar in a basis representation. The identity leaves a vector unchanged, as in $I(\psi_1,\psi_2,\psi_3)^{\mathsf T}=(\psi_1,\psi_2,\psi_3)^{\mathsf T}$. If $\hat H$ is invertible, multiplying the eigenvalue equation by $\hat H^{-1}$ gives $I\psi=\hat H^{-1}\energy{E}\psi$. For coordinates $c_j$, the bra is $\langle\Psi\rvert=(c_1^*,c_2^*,\ldots,c_n^*)$.

#### More on Dirac notation

$$
\int_{-\infty}^{+\infty}\psi^*\psi\,dx=1,
\qquad
\langle A\rangle=\int_{-\infty}^{+\infty}\psi^*\hat A\psi\,dx.
$$

Normalization sets the first integral to one. For an arbitrary $\hat A$, the second integral gives the expectation value. In $\langle u\mid\hat A\mid u\rangle$, the bra supplies $u^*$ and the ket supplies $u$, which can be complex. The result is real for Hermitian $\hat A$.

An operator can be moved across an inner product by taking its adjoint.

$$
\langle\hat A^\dagger u\mid u\rangle=\langle u\mid\hat A u\rangle.
$$

In the cofactor formula for an inverse, the transpose of the cofactor matrix is the adjugate, historically also called the classical adjoint.

### PDF page 63

For normalized $u$, $\langle u\mid u\rangle=\int_{-\infty}^{+\infty}u^*u\,dx=1$. In an orthonormal set, $\langle u_n\mid u_{n+1}\rangle=0$ and $\langle u_n\mid u_m\rangle=\delta_{mn}$, which is one for $m=n$ and zero otherwise. Linearity gives

$$
\langle u\mid\hat A\pm\hat B\mid u\rangle
=\langle u\mid\hat A\mid u\rangle\pm\langle u\mid\hat B\mid u\rangle.
$$

#### Discussion 10/26/2015

Find the eigenvalues of

$$
M=\begin{pmatrix}2&0&-2\\-2i&i&2i\\1&0&-1\end{pmatrix}
$$

by setting $\det(M-\lambda I)=0$. Expand along the first row.

$$
\begin{aligned}
\det(M-\lambda I)
&=(2-\lambda)\begin{vmatrix}i-\lambda&2i\\0&-1-\lambda\end{vmatrix}
-2\begin{vmatrix}-2i&i-\lambda\\1&0\end{vmatrix}\\
&=(2-\lambda)(i-\lambda)(-1-\lambda)+2(i-\lambda)\\
&=(i-\lambda)\big[(2-\lambda)(-1-\lambda)+2\big]\\
&=(i-\lambda)(\lambda^2-\lambda)
=(i-\lambda)\lambda(\lambda-1).
\end{aligned}
$$

The eigenvalues are $\lambda=i,0,1$.

### PDF page 64

For $\lambda=0$, solve $M\mathbf v=0$.

$$
\begin{aligned}
2v_1-2v_3&=0,\\
-2iv_1+iv_2+2iv_3&=0,\\
v_1-v_3&=0.
\end{aligned}
$$

Thus $v_1=v_3$ and $v_2=0$, so $\mathbf v=v_1(1,0,1)^{\mathsf T}$.

For $\lambda=1$,

$$
(M-I)\mathbf v
=\begin{pmatrix}1&0&-2\\-2i&i-1&2i\\1&0&-2\end{pmatrix}
\begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix}
=0.
$$

The first and third rows give $v_1=2v_3$. The second row gives $-2i(2v_3)+(i-1)v_2+2iv_3=0$, hence $(i-1)v_2=2iv_3$. The resulting eigenvector is proportional to $(2,1-i,1)^{\mathsf T}$.

#### Lecture 10/27/2015 — Particle on a ring or sphere

The lecture lists a particle on a ring, a particle on a sphere, and motion in a Coulomb field. Take $\energy{V}=0$ on the ring. The kinetic operator in the plane before restricting the radius is

$$
\hat H=-\frac{\hbar^2}{2m}\left(\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}\right).
$$

### PDF page 65

In polar coordinates, $x=r\cos\phi$, $y=r\sin\phi$, and $0\le\phi\le2\pi$. The Laplacian is

$$
\nabla^2=\frac{\partial^2}{\partial r^2}+\frac1r\frac{\partial}{\partial r}
+\frac{1}{r^2}\frac{\partial^2}{\partial\phi^2}.
$$

On a ring of fixed radius the wavefunction depends only on $\phi$. The third term remains, and the moment of inertia is $\mechanical{I}=mr^2$.

$$
\hat H=-\frac{\hbar^2}{2\mechanical{I}}\frac{d^2}{d\phi^2},
\qquad
\frac{d^2\Phi}{d\phi^2}
=-\frac{2\mechanical{I}\energy{E}}{\hbar^2}\Phi
=-m_\ell^2\Phi.
$$

The dimensionless parameter has magnitude $\lvert m_\ell\rvert=\sqrt{2\mechanical{I}\energy{E}}/\hbar$. For nonzero $m_\ell$, the general solution is $\Phi=Ae^{im_\ell\phi}+Be^{-im_\ell\phi}$.

#### Periodic boundary condition

$$
\Phi(\phi+2\pi)=\Phi(\phi).
$$

The factors $e^{\pm i2\pi m_\ell}=\cos(2\pi m_\ell)\pm i\sin(2\pi m_\ell)$ must equal one. Thus $m_\ell=0,\pm1,\pm2,\ldots$, with the $m_\ell=0$ periodic solution constant.

Classically, $\mechanical{\mathbf L}=\mathbf r\times\mechanical{\mathbf p}$. The lecture uses $\mechanical{\boldsymbol\ell}$ for orbital angular momentum to distinguish it from a later convention.

### PDF page 66

The orbital angular momentum is

$$
\mechanical{\boldsymbol\ell}=\mathbf r\times\mechanical{\mathbf p}
=\begin{vmatrix}
\hat{\mathbf i}&\hat{\mathbf j}&\hat{\mathbf k}\\
x&y&z\\
\mechanical{p_x}&\mechanical{p_y}&\mechanical{p_z}
\end{vmatrix},
\qquad
\mechanical{\ell_z}=x\mechanical{p_y}-y\mechanical{p_x}.
$$

Using the momentum operators gives the corresponding angular operator in Cartesian and polar forms.

$$
\hat\ell_z=x\frac{\hbar}{i}\frac{\partial}{\partial y}
-y\frac{\hbar}{i}\frac{\partial}{\partial x}
=\frac{\hbar}{i}\frac{\partial}{\partial\phi}.
$$

Compare a plane-wave momentum eigenstate, for which $\hat p_x\psi=\hbar\signal{k}\psi$. For the ring choose $B=0$ and apply $\hat\ell_z$.

$$
\hat\ell_z(Ae^{im_\ell\phi})
=\frac{\hbar}{i}\frac{d}{d\phi}(Ae^{im_\ell\phi})
=m_\ell\hbar Ae^{im_\ell\phi}.
$$

Positive and negative integers $m_\ell$ give the two signs of angular momentum. Zero gives zero angular momentum. The periodic boundary condition quantizes $m_\ell$ and, by $\lvert m_\ell\rvert=\sqrt{2\mechanical{I}\energy{E}}/\hbar$, quantizes the energy.

Normalize $\Phi=Ae^{im_\ell\phi}$ by integrating around the ring.

$$
1=\int_0^{2\pi}\Phi^*\Phi\,d\phi
=\lvert A\rvert^2\int_0^{2\pi}1\,d\phi
=2\pi\lvert A\rvert^2.
$$

The amplitude can have a complex phase. Choosing it real and positive gives $A=1/\sqrt{2\pi}$.

### PDF page 67

The normalized angular state is

$$
\Phi_{m_\ell}(\phi)=\frac{e^{im_\ell\phi}}{\sqrt{2\pi}}
=\frac{\cos(m_\ell\phi)+i\sin(m_\ell\phi)}{\sqrt{2\pi}}.
$$

It is complex for $m_\ell\ne0$. For every nonzero $\lvert m_\ell\rvert$ the two eigenfunctions with opposite $m_\ell$ have the same energy, so the level is doubly degenerate. The $m_\ell=0$ level is singly degenerate.

For periodic variables, the uncertainty relation can be written

$$
\Delta\mechanical{\ell_z}\,\Delta(\sin\phi)
\ge\frac{\hbar}{2}\lvert\langle\cos\phi\rangle\rvert.
$$

![[Kyle Kabasares - Quantum Mechanics - Real and Imaginary Parts on a Ring.png|**Fig. 43** A sketch of the real part on the ring and one period of the real and imaginary parts for $m_\ell=+1$.]]

#### Particle on a sphere

![[Kyle Kabasares - Quantum Mechanics - Particle on a Sphere.png|**Fig. 44** Spherical surface on which the particle is constrained to move.]]

With $\energy{V}=0$, start from $\hat H=-\hbar^2\nabla^2/(2m)$. In spherical coordinates the Laplacian has radial and angular parts.

$$
\nabla^2=\frac{1}{r}\frac{\partial^2}{\partial r^2}(r\,\cdot)
+\frac{1}{r^2}\Lambda^2
=\frac{1}{r^2}\frac{\partial}{\partial r}
\left(r^2\frac{\partial}{\partial r}\right)
+\frac{1}{r^2}\Lambda^2.
$$

$$
\Lambda^2
=\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}
+\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right).
$$

### PDF page 68

For fixed $r$ on the sphere, only the angular Laplacian contributes.

$$
\hat H=-\frac{\hbar^2}{2mr^2}\Lambda^2
=-\frac{\hbar^2}{2\mechanical{I}}\Lambda^2,
\qquad
\mechanical{I}=mr^2.
$$

The notes list three approaches.

1. Treat the sphere as a stack of rings and separate variables, $\psi(\theta,\phi)=\Phi(\phi)\Theta(\theta)$.
2. Use the angular momentum operators.
3. Recognize the known eigenvalue problem $\Lambda^2\psi=-(2\mechanical{I}\energy{E}/\hbar^2)\psi$.

Using the third approach gives the spherical harmonics $\psi=Y_{\ell m_\ell}(\theta,\phi)$.

$$
\Lambda^2Y_{\ell m_\ell}=-\ell(\ell+1)Y_{\ell m_\ell},
\qquad
\frac{2\mechanical{I}\energy{E}}{\hbar^2}=\ell(\ell+1).
$$

#### Notes from a missed lecture

$\ell=0,1,2,\ldots$ and $m_\ell=-\ell,-\ell+1,\ldots,\ell$ are integers. The separated equation for $\theta$ gives associated Legendre functions. The free-particle equation $-\hbar^2\nabla^2\psi/(2m)=\energy{E}\psi$ on the sphere reduces to the angular eigenvalue equation above.

### PDF page 69

The separated spatial function has form $\psi=P(r)Y_{\ell m_\ell}$. For fixed radius,

$$
\energy{E_\ell}=\frac{\ell(\ell+1)\hbar^2}{2\mechanical{I}}.
$$

There are $2\ell+1$ choices of $m_\ell$ for each $\ell$, all at the same energy.

For $\ell=1$, $m_\ell=0$, write $Y_{10}=\frac12\sqrt{3/\pi}\cos\theta=N\cos\theta$. The azimuthal derivative vanishes, so

$$
\Lambda^2Y_{10}
=\frac{1}{\sin\theta}\frac{d}{d\theta}[-N\sin^2\theta]
=-2N\cos\theta=-2Y_{10}.
$$

The eigenvalue is $-\ell(\ell+1)=-2$. For $\ell=2$, $m_\ell=1$, take $Y_{21}=N\cos\theta\sin\theta\,e^{i\phi}$ with the phase absorbed into $N$. The polar derivative of $\cos\theta\sin\theta$ is $1-2\sin^2\theta$. The azimuthal second derivative gives $-e^{i\phi}$.

$$
\begin{aligned}
\Lambda^2Y_{21}
&=\frac{Ne^{i\phi}}{\sin\theta}
\frac{d}{d\theta}(\sin\theta-2\sin^3\theta)
-\frac{N\cos\theta\sin\theta}{\sin^2\theta}e^{i\phi}\\
&=\frac{Ne^{i\phi}}{\sin\theta}
(\cos\theta-6\sin^2\theta\cos\theta-\cos\theta)\\
&=-6Y_{21}.
\end{aligned}
$$

This agrees with $-\ell(\ell+1)=-2(3)=-6$.

### PDF page 70

#### Rotational kinetic energy and space quantization

Classically, $\mechanical{L}=\lvert\mathbf r\times\mechanical{\mathbf p}\rvert=\mechanical{I}\signal{\omega}$ for the rotor, so

$$
\energy{E}=\frac12\mechanical{I}\signal{\omega}^2
=\frac{\mechanical{L}^2}{2\mechanical{I}}.
$$

Comparing with the stationary energies on the sphere gives

$$
\mechanical{L}^2=\ell(\ell+1)\hbar^2,
\qquad
\mechanical{L}=\hbar\sqrt{\ell(\ell+1)}.
$$

The spherical-harmonic equation quantizes the magnitude through the orbital angular momentum quantum number $\ell=0,1,2,\ldots$.

The Cartesian component is $\mechanical{L_z}=x\mechanical{p_y}-y\mechanical{p_x}$. In angular coordinates, $\hat\ell_z=(\hbar/i)\partial/\partial\phi$. Using a signed $m_\ell$,

$$
\hat\ell_zY_{\ell m_\ell}
=\frac{\hbar}{i}\frac{\partial}{\partial\phi}
\left[N\Theta(\theta)e^{im_\ell\phi}\right]
=m_\ell\hbar Y_{\ell m_\ell}.
$$

The magnetic quantum number $m_\ell$ sets the $z$ projection in units of $\hbar$. For $\ell=2$, there are five allowed projections and the angular momentum magnitude is $\sqrt6\,\hbar$.

![[Kyle Kabasares - Quantum Mechanics - Five Angular Momentum Projections.png|**Fig. 45** Vector model of space quantization for $\ell=2$, with projections $-2\hbar$ through $2\hbar$ in steps of $\hbar$.]]

### PDF page 71

A ket describes the state of a system such as an atom, molecule, or superconductor. Its label gives the quantities characterizing the state. An oscillator with precisely three vibrational quanta is $\lvert3\rangle$. For the state $\lvert S\rangle$,

$$
\lvert S\rangle=\sum_{j=1}^{j_{\max}}c_j\lvert q_j\rangle,
$$

where $\lvert q_j\rangle$ is a state with the $j$th eigenvalue of an operator $\hat Q$. The overlap can be written in terms of wavefunctions or in bra-ket notation.

$$
\int\psi_A^*(x)\psi_B(x)\,d\tau
=\langle A\mid B\rangle
=\langle B\mid A\rangle^*.
$$

#### Discussion 11/9/2015

Consider the initial hydrogen wavefunction

$$
\psi(r,\theta,\phi)=\frac{A}{a_0^{3/2}}
\left(\frac{e^{-r/a_0}}{\sqrt{\pi}}
-\frac{1}{\sqrt{8\pi}}\frac{r}{a_0}e^{-r/(2a_0)}\cos\theta\right).
$$

1. Rewrite $\psi$ using radial functions and spherical harmonics. Determine $A$ and find $\Psi(r,\theta,\phi,t)$ given $\psi$ at $t=0$.
2. At $t=0$, find the possible outcomes, probabilities, and post-measurement states for measurements of energy, squared angular momentum, and its $z$ component.
3. At $t=0$, find the radial probability density $P(r)$ irrespective of $\theta$ and $\phi$.

Use $\psi_{n\ell m_\ell}=R_{n\ell}Y_{\ell m_\ell}$ and identify $n$ from $e^{-r/(na_0)}$. The first term has $n=1$, for which $\ell=m_\ell=0$. The second has $n=2$, $\ell=1$ from the first power of $\cos\theta$, and $m_\ell=0$ from the absence of azimuthal dependence.

$$
\psi=A(c_1R_{10}Y_{00}-c_2R_{21}Y_{10}),
\qquad
R_{10}Y_{00}=\frac{2}{a_0^{3/2}}e^{-r/a_0}
\frac{1}{\sqrt{4\pi}}
=\frac{e^{-r/a_0}}{a_0^{3/2}\sqrt{\pi}}.
$$

Matching the first term gives $c_1=1$.

### PDF page 72

For the second term,

$$
R_{21}Y_{10}
=\left(\frac{1}{2\sqrt{6a_0^3}}\frac{r}{a_0}e^{-r/(2a_0)}\right)
\sqrt{\frac{3}{4\pi}}\cos\theta
=\frac{1}{2\sqrt{8\pi a_0^3}}\frac{r}{a_0}e^{-r/(2a_0)}\cos\theta.
$$

Matching coefficients gives $c_2=2$, so $\psi=A(R_{10}Y_{00}-2R_{21}Y_{10})$. The cross term integrates to zero by orthogonality. Normalization requires $\lvert A\rvert^2(1+4)=1$, so choose $A=1/\sqrt5$.

$$
\Psi(r,\theta,\phi,t)
=\frac{1}{\sqrt5}\left(
R_{10}Y_{00}e^{-i\energy{E_1}t/\hbar}
-2R_{21}Y_{10}e^{-i\energy{E_2}t/\hbar}\right).
$$

The angular momentum operators give the eigenvalues $\hbar\sqrt{\ell(\ell+1)}$ for the magnitude, $\hbar^2\ell(\ell+1)$ for its square, and $m_\ell\hbar$ for the $z$ component. In particular,

$$
\hat L^2=-\hbar^2\left[
\frac{1}{\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial}{\partial\theta}\right)
+\frac{1}{\sin^2\theta}\frac{\partial^2}{\partial\phi^2}\right].
$$

$\hat L^2\psi_{100}=0$ and $\hat L^2(2\psi_{210})=4\hbar^2\psi_{210}$. The eigenvalue in the latter expression is $2\hbar^2$, with the additional factor of two coming from the coefficient.

| Observable | Result | Probability | State after measurement at $t=0$ |
| --- | --- | --- | --- |
| Energy | $\energy{E_1}$ | $1/5$ | $\psi_{100}=R_{10}Y_{00}$ |
| Energy | $\energy{E_2}=\energy{E_1}/4$ | $4/5$ | $\psi_{210}=R_{21}Y_{10}$ |
| Squared angular momentum | $0$ | $1/5$ | $\psi_{100}$ |
| Squared angular momentum | $2\hbar^2$ | $4/5$ | $\psi_{210}$ |
| $z$ component of angular momentum | $0$ | $1$ | $(\psi_{100}-2\psi_{210})/\sqrt5$ |

The notes leave the $z$-component collapse as a question. Both components lie in the same zero-eigenvalue subspace, so an ideal measurement of that component alone projects onto the entire initial state.

### PDF page 73

For part (c), the notes try to form a radial-only amplitude $(R_{10}-2R_{21})/\sqrt5$. Its square gives $(R_{10}^2-4R_{10}R_{21}+4R_{21}^2)/5$, marked with a question. For the requested radial density, integrate the original $\lvert\psi\rvert^2$ over solid angle. Orthogonality of $Y_{00}$ and $Y_{10}$ removes the cross term, and the volume element contributes $r^2$.

$$
P(r)=r^2\int\lvert\psi(r,\theta,\phi)\rvert^2\,d\Omega
=\frac{r^2}{5}\left(\lvert R_{10}\rvert^2+4\lvert R_{21}\rvert^2\right).
$$

#### Lecture 11/10/2015 — Bra-ket review

$$
\begin{aligned}
\langle\energy{E}\rangle&=\langle\psi\mid\hat H\mid\psi\rangle
=\int_{-\infty}^{+\infty}\psi^*\hat H\psi\,dx,\\
\langle x\rangle&=\langle\psi\mid x\mid\psi\rangle
=\int_{-\infty}^{+\infty}\psi^*x\psi\,dx.
\end{aligned}
$$

The ket is the column vector, or the wavefunction in position representation. The bra is its conjugate row vector. Their overlap is an integral. In an orthonormal basis, $\langle\psi_n\mid\psi_m\rangle=\int\psi_n^*\psi_m\,dx=\delta_{mn}$. A constant $a$ between a bra and ket factors out as $a\langle\psi_m\mid\psi_n\rangle$. A matrix adjoint is $T^\dagger=(T^{\mathsf T})^*$.

Operators can be represented as matrices or by operations such as multiplication and differentiation. Bras and kets are vectors. If $\hat H\lvert\psi\rangle=\energy{E}\lvert\psi\rangle$, then

$$
\langle\psi\mid\hat H\mid\psi\rangle
=\energy{E}\langle\psi\mid\psi\rangle=\energy{E}
$$

for normalized $\psi$. In general, $T\lvert\psi\rangle=\lvert\phi\rangle$ produces a new vector. The special case $T\lvert\psi\rangle=a\lvert\psi\rangle$ is the eigenvector equation.

### PDF page 74

The previous state is $\lvert\psi\rangle=A(\lvert\psi_{100}\rangle-2\lvert\psi_{210}\rangle)$. In a hydrogenic atom,

$$
\energy{E_n}
=-\frac{Z^2\mu\electric{e}^4}{32\pi^2\electric{\epsilon_0}^2\hbar^2n^2},
\qquad
\mu=\frac{m_e m_{\mathrm{nucleus}}}{m_e+m_{\mathrm{nucleus}}}.
$$

$Z$ is the nuclear charge number and $\mu$ the reduced mass. The notes distinguish $\mu$ from the vacuum permeability $\magnetic{\mu_0}$ and the Bohr magneton $\magnetic{\mu_B}$.

Measuring $\mechanical{L}^2$ gives $0$ with probability $1/5$ and state $\psi_{100}$, or $2\hbar^2$ with probability $4/5$ and state $\psi_{210}$. For any normalized $\psi_{n\ell m_\ell}$,

$$
\langle\psi_{n\ell m_\ell}\mid\hat L_z\mid\psi_{n\ell m_\ell}\rangle=m_\ell\hbar.
$$

Both components of this example have $m_\ell=0$, so the outcome is zero with certainty and the superposition is preserved. Likewise, $\psi=A(\psi_{311}+4i\psi_{210})$ has the same $\ell=1$ in both components, so a measurement of angular momentum magnitude preserves that superposition. Components sharing the quantum number relevant to the observable give the same outcome.

#### Hydrogen atom quantum numbers

The eigenfunctions separate as $\psi_{n\ell m_\ell}=R_{n\ell}Y_{\ell m_\ell}$. The radial function can be chosen real, and the spherical harmonics can be complex.

- The principal quantum number $n$ determines $\energy{E_n}$ and allows $\ell=0,\ldots,n-1$. There are $n^2$ orbitals for a given $n$. The radial and angular node counts sum to $n-1$.
- The orbital angular momentum quantum number $\ell$ gives $2\ell+1$ orbitals for fixed $n,\ell$. There are $\ell$ angular nodes and $n-\ell-1$ radial nodes.
- The magnetic quantum number $m_\ell$ determines $\mechanical{L_z}=m_\ell\hbar$ and specifies an individual orbital within a given $n,\ell$.

### PDF page 75

#### Probabilities and the radial wavefunction

The spherical volume element is $d\tau=r^2\sin\theta\,dr\,d\theta\,d\phi$. The probability of finding the electron in it is $\lvert\psi_{n\ell m_\ell}\rvert^2\,d\tau=\psi_{n\ell m_\ell}^*\psi_{n\ell m_\ell}\,d\tau$. Integrate over all angles to obtain the probability at radius $r$.

$$
d\Omega=\sin\theta\,d\theta\,d\phi,
\qquad
\int\lvert Y_{\ell m_\ell}(\theta,\phi)\rvert^2\,d\Omega=1.
$$

For a single orbital, the radial probability is $P(r)\,dr=r^2\lvert R_{n\ell}(r)\rvert^2\,dr$. The radial function is a polynomial factor times $e^{-r/(na_0)}$. For example, $R_{10}(r)\propto e^{-r/a_0}$.

#### Angular momentum operators

Quantize $\mechanical{\mathbf L}=\mathbf r\times\mechanical{\mathbf p}$ by replacing coordinates and momenta with operators. With $q$ and $q'$ denoting Cartesian coordinates,

$$
[\hat q,\hat p_{q'}]=i\hbar\delta_{qq'},
\qquad
[\hat x,\hat p_x]=i\hbar,
\qquad
[\hat y,\hat p_x]=0.
$$

Matrix products commute when $AB=BA$. The product rule for commutators is $[AB,C]=A[B,C]+[A,C]B$. The handwritten line has an equals sign between the two terms.

#### Lecture 11/12/2015 — Angular momentum operators

Expanding the cross product gives

$$
\begin{aligned}
\mechanical{\mathbf L}={}&
(y\mechanical{p_z}-z\mechanical{p_y})\hat{\mathbf i}
+(z\mechanical{p_x}-x\mechanical{p_z})\hat{\mathbf j}\\
&+(x\mechanical{p_y}-y\mechanical{p_x})\hat{\mathbf k}.
\end{aligned}
$$

Compare $\energy{E_{\mathrm{rot}}}=\mechanical{L}^2/(2\mechanical{I})$ with $\energy{E_{\mathrm{k}}}=\mechanical{p}^2/(2m)$.

### PDF page 76

A component satisfies $\lvert\mechanical{L_a}\rvert\le\mechanical{L}$. In position representation, $\hat p_x=(\hbar/i)\partial/\partial x$, and

$$
\hat L_x=\frac{\hbar}{i}
\left(y\frac{\partial}{\partial z}-z\frac{\partial}{\partial y}\right).
$$

The other two components follow by cyclic permutation. To form the commutators, use the canonical position–momentum relations.

$$
\begin{aligned}
[\hat L_x,\hat L_y]
&=[\hat y\hat p_z-\hat z\hat p_y,\hat z\hat p_x-\hat x\hat p_z]\\
&=[\hat y\hat p_z,\hat z\hat p_x]+[\hat z\hat p_y,\hat x\hat p_z]\\
&=\hat y\hat p_x[\hat p_z,\hat z]+\hat x\hat p_y[\hat z,\hat p_z]\\
&=i\hbar(\hat x\hat p_y-\hat y\hat p_x)
=i\hbar\hat L_z.
\end{aligned}
$$

The other two expanded terms vanish because their factors commute.

$$
[\hat L_y,\hat L_z]=i\hbar\hat L_x,
\qquad
[\hat L_z,\hat L_x]=i\hbar\hat L_y.
$$

For $\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2$, start with

$$
[\hat L^2,\hat L_z]=[\hat L_x^2,\hat L_z]+[\hat L_y^2,\hat L_z]+[\hat L_z^2,\hat L_z].
$$

The last term vanishes. Use $[AB,C]=A[B,C]+[A,C]B$ on the first two terms.

$$
\begin{aligned}
[\hat L^2,\hat L_z]={}&
\hat L_x[\hat L_x,\hat L_z]+[\hat L_x,\hat L_z]\hat L_x\\
&+\hat L_y[\hat L_y,\hat L_z]+[\hat L_y,\hat L_z]\hat L_y.
\end{aligned}
$$

### PDF page 77

Substituting $[\hat L_x,\hat L_z]=-i\hbar\hat L_y$ and $[\hat L_y,\hat L_z]=i\hbar\hat L_x$ gives

$$
[\hat L^2,\hat L_z]
=-i\hbar(\hat L_x\hat L_y+\hat L_y\hat L_x)
+i\hbar(\hat L_y\hat L_x+\hat L_x\hat L_y)=0.
$$

By cyclic symmetry $[\hat L^2,\hat L_q]=0$ for each component $q$.

![[Kyle Kabasares - Quantum Mechanics - Angular Momentum Cone.png|**Fig. 46** The vector model depicts fixed angular momentum magnitude and fixed $z$ projection on a cone.]]

Classically the cross product of a vector with itself vanishes. For operator components, the corresponding cross product gives $\hat{\mathbf L}\times\hat{\mathbf L}=i\hbar\hat{\mathbf L}$ because the components do not commute.

#### Angular momentum ladder operators

$$
\hat L_\pm=\hat L_x\pm i\hat L_y,
\qquad
\hat L_x=\frac{\hat L_++\hat L_-}{2},
\qquad
\hat L_y=\frac{\hat L_+-\hat L_-}{2i}.
$$

$$
\begin{aligned}
[\hat L_z,\hat L_\pm]
&=[\hat L_z,\hat L_x]\pm i[\hat L_z,\hat L_y]\\
&=i\hbar\hat L_y\pm i(-i\hbar\hat L_x)
=\pm\hbar\hat L_\pm.
\end{aligned}
$$

Also $[\hat L^2,\hat L_\pm]=0$. Expanding the commutator between the ladder operators, the two same-component terms vanish.

$$
[\hat L_+,\hat L_-]
=[\hat L_x+i\hat L_y,\hat L_x-i\hat L_y]
=-i[\hat L_x,\hat L_y]+i[\hat L_y,\hat L_x]
=2\hbar\hat L_z.
$$

### PDF page 78

For an orbital angular momentum eigenstate,

$$
\hat L_z\psi=m_\ell\hbar\psi,
\qquad
\hat L\psi=\hbar\sqrt{\ell(\ell+1)}\psi,
$$

where $\hat L$ here denotes the magnitude operator.

#### Lecture 11/16/2015 — General angular momentum

The lecture reviews $\hat L^2=\hat L_x^2+\hat L_y^2+\hat L_z^2$, $\hat L_\pm=\hat L_x\pm i\hat L_y$, $[\hat L^2,\hat L_k]=0$ for $k=x,y,z$, and the cyclic relations beginning with $[\hat L_x,\hat L_y]=i\hbar\hat L_z$. Equivalently, $\hat{\mathbf L}\times\hat{\mathbf L}=i\hbar\hat{\mathbf L}$.

$\mechanical{\mathbf L}$ denotes orbital angular momentum, $\mechanical{\mathbf S}$ intrinsic spin, and $\mechanical{\mathbf J}$ generalized angular momentum, which can represent either or their combination. Commuting operators admit simultaneous eigenstates. To prepare for half-integer spin, start with general labels $\lvert\lambda,m\rangle$. As an example of ket notation, $\psi_{100}$ corresponds to $\lvert1,0,0\rangle=\lvert100\rangle$.

$$
\hat L_z\lvert\lambda,m\rangle=m\hbar\lvert\lambda,m\rangle,
\qquad
\hat L^2\lvert\lambda,m\rangle=\hbar^2 f(\lambda,m)\lvert\lambda,m\rangle.
$$

The units of $\hbar$ are $\unit{J\,s}=\unit{kg\,m^2/s}$. The orbital eigenvalue will turn out to have $f=\ell(\ell+1)$. For now, apply the identity

$$
(\hat L^2-\hat L_z^2)\lvert\lambda,m\rangle
=(\hat L_x^2+\hat L_y^2)\lvert\lambda,m\rangle
=\hbar^2[f(\lambda,m)-m^2]\lvert\lambda,m\rangle.
$$

The sum of squares of Hermitian operators has nonnegative expectation, so $f(\lambda,m)-m^2\ge0$.

### PDF page 79

The bound $f(\lambda,m)\ge m^2$ restricts the possible $m$ values. The raising operator $\hat L_+=\hat L_x+i\hat L_y$ is non-Hermitian and generates a new state. The component $\hat L_z$ does not commute with $\hat L_x$ or $\hat L_y$. Its eigenstates generally mix when acted on by those operators.

Since $\hat L^2$ commutes with $\hat L_+$,

$$
\hat L^2\hat L_+\lvert\lambda,m\rangle
=\hat L_+\hat L^2\lvert\lambda,m\rangle
=\hbar^2 f(\lambda,m)\hat L_+\lvert\lambda,m\rangle.
$$

For the $z$ projection,

$$
\begin{aligned}
\hat L_z\hat L_+\lvert\lambda,m\rangle
&=(\hat L_+\hat L_z+[\hat L_z,\hat L_+])\lvert\lambda,m\rangle\\
&=(\hat L_+\hat L_z+\hbar\hat L_+)\lvert\lambda,m\rangle\\
&=(m+1)\hbar\hat L_+\lvert\lambda,m\rangle.
\end{aligned}
$$

The new state, if nonzero, therefore has the same squared magnitude and the same projection as $\lvert\lambda,m+1\rangle$. In the ladder basis,

$$
\hat L_+\lvert\lambda,m\rangle=C^+_{\lambda m}\lvert\lambda,m+1\rangle,
\qquad
\hat L_-\lvert\lambda,m\rangle=C^-_{\lambda m}\lvert\lambda,m-1\rangle.
$$

At the top of the ladder $m=\ell$, since the allowed projections run from $-\ell$ to $\ell$. Hence $\hat L_+\lvert\lambda,\ell\rangle=0$ and $\hat L_-\hat L_+\lvert\lambda,\ell\rangle=0$.

### PDF page 80

Expand the product that annihilates the highest state.

$$
\begin{aligned}
\hat L_-\hat L_+
&=(\hat L_x-i\hat L_y)(\hat L_x+i\hat L_y)\\
&=\hat L_x^2+\hat L_y^2+i[\hat L_x,\hat L_y]\\
&=\hat L^2-\hat L_z^2-\hbar\hat L_z.
\end{aligned}
$$

Since $\hat L_+\lvert\lambda,\ell\rangle=0$ and $\hat L_z\lvert\lambda,\ell\rangle=\ell\hbar\lvert\lambda,\ell\rangle$,

$$
\hat L^2\lvert\lambda,\ell\rangle
=(\hat L_z^2+\hbar\hat L_z)\lvert\lambda,\ell\rangle
=\ell(\ell+1)\hbar^2\lvert\lambda,\ell\rangle.
$$

#### Lecture 11/17/2015

With $[\hat L^2,\hat L_z]=0$, choose simultaneous eigenstates $\lvert\ell,m\rangle$.

$$
\begin{aligned}
\hat L^2\lvert\ell,m\rangle&=\ell(\ell+1)\hbar^2\lvert\ell,m\rangle,\\
\hat L_z\lvert\ell,m\rangle&=m\hbar\lvert\ell,m\rangle,\\
\hat L_\pm\lvert\ell,m\rangle&=C^\pm_{\ell m}\lvert\ell,m\pm1\rangle,\\
\langle\ell,m\mid\ell',m'\rangle&=\delta_{\ell\ell'}\delta_{mm'}.
\end{aligned}
$$

The ladder equations map between states with different $m$. Recall $\hat L_\pm=\hat L_x\pm i\hat L_y$ and $[\hat L_x,\hat L_y]=i\hbar\hat L_z$ with cyclic permutations. In the hydrogen state $\lvert n,\ell,m_\ell\rangle$, the function is $R_{n\ell}Y_{\ell m_\ell}$. For angular calculations keep $\lvert\ell,m\rangle$, so the angular part of $\lvert100\rangle$ is $\lvert00\rangle$.

The highest state satisfies $\hat L_-\hat L_+\lvert\ell,\ell\rangle=0$. Applying the lowering operator preserves $\ell$. The ladder also has a lower bound.

### PDF page 81

At the bottom of the ladder, $\hat L_-\lvert\lambda,k\rangle=0$ and $\hat L_+\hat L_-\lvert\lambda,k\rangle=0$. Expand the product.

$$
\begin{aligned}
\hat L_+\hat L_-
&=(\hat L_x+i\hat L_y)(\hat L_x-i\hat L_y)\\
&=\hat L_x^2+\hat L_y^2-i[\hat L_x,\hat L_y]\\
&=\hat L^2-\hat L_z^2+\hbar\hat L_z.
\end{aligned}
$$

Therefore $\hat L^2\lvert\lambda,k\rangle=(\hat L_z^2-\hbar\hat L_z)\lvert\lambda,k\rangle=k(k-1)\hbar^2\lvert\lambda,k\rangle$. The squared magnitude stays fixed along the ladder, so

$$
\ell(\ell+1)=k(k-1),
\qquad
(k+\ell)(k-\ell-1)=0.
$$

The roots are $k=-\ell$ and $k=\ell+1$. The lower bound must be at or below $\ell$, so $k=-\ell$. Hence $f(\lambda,m)=\ell(\ell+1)$ for $m=-\ell,-\ell+1,\ldots,+\ell$.

![[Kyle Kabasares - Quantum Mechanics - Integer and Half-Integer Projections.png|**Fig. 47** Integer and half-integer ladders on a number line, each symmetric about zero.]]

The ladder algebra admits half-integer values as well. Use general angular momentum notation to include spin. For orbital angular momentum, $\ell$ is a nonnegative integer and $m$ increases from $-\ell$ to $+\ell$ in integer steps.

$$
\begin{aligned}
\hat J^2&=\hat J_x^2+\hat J_y^2+\hat J_z^2,\\
\hat J^2\lvert j,m_j\rangle&=j(j+1)\hbar^2\lvert j,m_j\rangle,\\
[\hat J_x,\hat J_y]&=i\hbar\hat J_z \quad\text{and cyclic permutations},\\
[\hat J^2,\hat J_z]&=0,\\
\langle j,m_j\mid j',m_j'\rangle&=\delta_{jj'}\delta_{m_jm_j'}.
\end{aligned}
$$

### PDF page 82

#### Lecture 11/19/2015 — Matrix representation

In the basis $\lvert j,m_j\rangle$, the entry with row $m_j$ and column $m_j'$ is

$$
T_{m_jm_j'}=\langle j,m_j\mid\hat T\mid j,m_j'\rangle.
$$

If $\hat T$ acts by multiplication on each basis ket, its matrix is diagonal. For the ladder operators, the potentially nonzero entries connect adjacent $m_j$. The first sketch orders the basis as $-1,0,1$, placing the raising entries immediately below the diagonal and the lowering entries above it.

$$
J_+=\begin{pmatrix}
0&0&0\\
(J_+)_{0,-1}&0&0\\
0&(J_+)_{1,0}&0
\end{pmatrix}
\quad(j=1,\ \text{ascending }m_j).
$$

For instance, $\langle1,1\mid\hat J_+\mid1,-1\rangle=C^+_{1,-1}\langle1,1\mid1,0\rangle=0$. Raising the highest $j=1$ ket also gives zero.

The dimension is $2j+1$. For $j=1$ the matrix is $3\times3$, and for spin $j=1/2$ it is $2\times2$.

$$
\langle j,m_j\mid\hat J^2\mid j,m_j\rangle=j(j+1)\hbar^2,
\qquad
\hat J_z\lvert j,m_j\rangle=m_j\hbar\lvert j,m_j\rangle.
$$

#### Discussion 11/23/2015 — Constructing the matrices

For fixed $j$, use bras for rows and kets for columns. Here the discussion uses descending order $+j,+j-1,\ldots,-j$. The first row starts with $\langle j,+j\mid\hat J_z\mid j,+j\rangle$ and $\langle j,+j\mid\hat J_z\mid j,+j-1\rangle$. The bottom-left entry is $\langle j,-j\mid\hat J_z\mid j,+j\rangle$.

### PDF page 83

#### Orbital angular momentum in spherical coordinates

In the position representation,

$$
\begin{aligned}
\hat L_x&=-\frac{\hbar}{i}\left(
\sin\phi\,\frac{\partial}{\partial\theta}
+\cot\theta\cos\phi\,\frac{\partial}{\partial\phi}\right),\\
\hat L_y&=\frac{\hbar}{i}\left(
\cos\phi\,\frac{\partial}{\partial\theta}
-\cot\theta\sin\phi\,\frac{\partial}{\partial\phi}\right),\\
\hat L_z&=\frac{\hbar}{i}\frac{\partial}{\partial\phi}.
\end{aligned}
$$

Using $\cos\phi\pm i\sin\phi=e^{\pm i\phi}$ in $\hat L_x\pm i\hat L_y$ gives

$$
\hat L_\pm=\pm\hbar e^{\pm i\phi}
\left(\frac{\partial}{\partial\theta}
\pm i\cot\theta\frac{\partial}{\partial\phi}\right).
$$

These signs and the absence of a factor $1/2$ agree with the earlier definition of $\hat L_\pm$. The handwritten intermediate lines use inconsistent signs and factors.

For the highest state, $\hat L_+\lvert\ell,\ell\rangle=0$. Separate $Y_{\ell\ell}(\theta,\phi)=\Theta(\theta)\Phi(\phi)$.

$$
\Theta'\Phi+i\cot\theta\,\Phi'\Theta=0,
\qquad
\tan\theta\frac{\Theta'}{\Theta}=-i\frac{\Phi'}{\Phi}=c.
$$

Thus $\Phi\propto e^{ic\phi}$ and $\Theta\propto\sin^c\theta$. Since $\hat L_z\lvert\ell,\ell\rangle=\ell\hbar\lvert\ell,\ell\rangle$, the separation constant is $c=\ell$. This gives $Y_{\ell\ell}=N\sin^\ell\theta\,e^{i\ell\phi}$.

![[Kyle Kabasares - Quantum Mechanics - Projections for Orbital Quantum Number Two.png|**Fig. 48** The five $z$ projections for $\ell=2$, with angular momentum magnitude $\sqrt6\,\hbar$.]]

### PDF page 84

Applying $\hat L_z$ to the separated highest state gives

$$
\hat L_z\left(Ne^{ic\phi}\sin^c\theta\right)
=\frac{\hbar}{i}(ic)Y_{\ell\ell}
=c\hbar Y_{\ell\ell}
=\ell\hbar Y_{\ell\ell},
$$

so $c=\ell$.

#### Lecture 11/24/2015 — Commutators and measurements

The commutator is $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$. For example $[\hat x,\hat p_x]=i\hbar$. Commuting observables admit simultaneous eigenstates and compatible measurements.

$$
\langle x\rangle=\langle\psi\mid\hat x\mid\psi\rangle=\int\psi^*x\psi\,dx,
\qquad
\sigma_A\sigma_B\ge\frac12\lvert\langle[\hat A,\hat B]\rangle\rvert.
$$

The angular momentum component commutators are cyclic, starting with $[\hat L_x,\hat L_y]=i\hbar\hat L_z$. A definite $z$ projection generally leaves the transverse components uncertain. The squared magnitude commutes with each component, $[\hat L^2,\hat L_q]=0$.

![[Kyle Kabasares - Quantum Mechanics - Angular Momentum Measurement Sketch.png|**Fig. 49** A vector-model sketch of angular momentum directions and projections.]]

#### Wavefunction methods

The analytical approach solves differential equations. The algebraic approach uses operators such as $\hat L_\pm$ and $a_\pm$, linear algebra, and commutation relations. The spatial Schrödinger equation gives the orbital wavefunction, while spin requires additional degrees of freedom. Bound-state energies become quantized upon imposing boundary conditions.

Solutions can involve Hermite, Laguerre, or Legendre polynomials, or simple exponential functions for piecewise-constant potentials.

![[Kyle Kabasares - Quantum Mechanics - Model Potentials Review.png|**Fig. 50** Sketches of a ramp, barrier, wells, step, and box geometries discussed in the review.]]

#### Energies from quantum dots

For the transition $n=2\to n=1$, the photon energy is $\Delta\energy{E}=hc/\signal{\lambda}$. What size quantum dot would give photons with energies of about $\quantity{20}{eV}$ or more? An electron can tunnel through a finite confining barrier. Infinite walls impose zero amplitude outside.

![[Kyle Kabasares - Quantum Mechanics - Quantum Dot Transition and Confinement.png|**Fig. 51** Transition between two levels and the finite and infinite confinement sketches for a quantum dot.]]

### PDF page 85

For a qualitative answer, approximate the quantum dot by an infinite well of width $L$.

$$
\energy{E_n}=n^2\frac{\pi^2\hbar^2}{2m_eL^2}.
$$

The first few values of $n^2$ are $1,4,9,16,25,36,\ldots$. For $n=2\to1$, decreasing $L$ increases $\Delta\energy{E}$ and decreases the photon wavelength. Stronger confinement spaces the energy levels farther apart.

![[Kyle Kabasares - Quantum Mechanics - Quantum Dot Concentration.png|**Fig. 52** Closely spaced wells at high concentration and more widely spaced wells at low concentration.]]

#### Atkins problems 3.29 and 3.30

For 3.29, use the tables to find $\psi=R_{41}Y_{11}$, with $n=4$, $\ell=1$, and $m_\ell=1$. The energies are $\energy{E_n}=\energy{E_0}/n^2$, where $\energy{E_0}$ accounts for the helium nucleus with $Z=2$. The orbital and spin magnitudes are $\hbar\sqrt{\ell(\ell+1)}$ and $\hbar\sqrt{s(s+1)}$, with $s=1/2$. The total is $\mechanical{\mathbf J}=\mechanical{\mathbf L}+\mechanical{\mathbf S}$.

![[Kyle Kabasares - Quantum Mechanics - Adding Orbital and Spin Angular Momentum.png|**Fig. 53** Vector-model sketch of orbital, spin, and total angular momentum.]]

For 3.30 the initial expression is $\psi=N(\psi_++\tfrac34\psi_-)$.

#### Discussion 11/30/2015 — Oscillator probability

The quantum probability density is $\psi^*\psi$. For the classical oscillator of amplitude $A$, $x(t)=A\sin(\signal{\omega}t\pm\phi)$ and $\energy{U}=\frac12\mechanical{k}x^2$. The classical probability density $P(x)$ satisfies $\int P(x)\,dx=1$. The notes sketch the interval from $x$ to $x+dx$ within $[-A,A]$ and ask about the density at the center.

![[Kyle Kabasares - Quantum Mechanics - Classical Oscillator Probability Sketches.png|**Fig. 54** A spring–mass oscillator and sketches of its position interval and classical density, which rises toward the turning points.]]

The quantum oscillator has discrete levels and tails in classically forbidden regions. The classical behavior emerges in the large-$n$ limit.

![[Kyle Kabasares - Quantum Mechanics - Oscillator Levels and Forbidden Regions.png|**Fig. 55** Three levels in the quadratic potential and the regions beyond the turning points.]]

### PDF page 86

For the classical spring–mass system, $x(t)$ ranges from $-A$ to $A$. If we look at a random time, how likely is it to be near a specified $x_0$? The notes use the endpoint $x_0=A$ as an example of comparing the time spent near a position with the whole motion.

![[Kyle Kabasares - Quantum Mechanics - Spring Mass at its Turning Point.png|**Fig. 56** The spring–mass system drawn near $x=A$, with the origin and opposite turning point marked.]]

#### Problem 11 — Double delta well

$$
\energy{V(x)}=-\alpha[\delta(x+a)+\delta(x-a)].
$$

![[Kyle Kabasares - Quantum Mechanics - Two Attractive Delta Potentials.png|**Fig. 57** Two attractive delta wells at $x=-a$ and $x=a$.]]

Questions to consider include the number of bound states, the wavefunctions in the three regions, scattering versus bound solutions, reflection and transmission, allowed energies, even and odd solutions, and the transcendental equations. Bound states have $\energy{E}<0$ and scattering states have $\energy{E}>0$. The bound energies take discrete values.

A symmetric potential admits even and odd states. The infinite-well examples illustrate the two parities.

![[Kyle Kabasares - Quantum Mechanics - Parity Review in a Symmetric Well.png|**Fig. 58** The $n=1$ state is even and the $n=2$ state is odd about the midpoint.]]

### PDF page 87

#### Physics 137 — Midterm 2 review

The Hilbert space for the specified interval consists of square-integrable functions, with functions that agree almost everywhere identified. Its inner product is

$$
\int_a^b\lvert f(x)\rvert^2\,dx<\infty,
\qquad
\langle f\mid g\rangle=\int_a^b f(x)^*g(x)\,dx.
$$

The integral exists for $f$ and $g$ in this Hilbert space. Conjugate symmetry follows from

$$
\langle g\mid f\rangle
=\int_a^b g(x)^*f(x)\,dx
=\left(\int_a^b f(x)^*g(x)\,dx\right)^*.
$$

Also $\langle f\mid f\rangle=\int_a^b\lvert f(x)\rvert^2\,dx$ is real and nonnegative.

- $f$ is normalized if $\langle f\mid f\rangle=1$.
- $f$ and $g$ are orthogonal if $\langle g\mid f\rangle=0$.
- A set $\{f_n\}$ is orthonormal if its elements are normalized and mutually orthogonal.
- An orthonormal set is complete if every function in the Hilbert space can be expanded as $f(x)=\sum_{n=1}^{\infty}c_nf_n(x)$, with convergence in the Hilbert-space norm.

#### Problem 3.1

1. Show that the set of square-integrable functions is a vector space.
2. Show that $\int_a^b f(x)^*g(x)\,dx$ satisfies the conditions for an inner product.

For part (a), start by checking closure under addition and scalar multiplication.

### PDF page 88

Let $a(x)$ and $b(x)$ be square-integrable on the interval and set $c(x)=a(x)+b(x)$. Expanding the norm of the sum gives

$$
\int\lvert c(x)\rvert^2\,dx
=\int\lvert a(x)\rvert^2\,dx+\int\lvert b(x)\rvert^2\,dx
+2\operatorname{Re}\int a(x)^*b(x)\,dx.
$$

The square terms converge by assumption. The cross term converges by the Schwarz inequality,

$$
\left\lvert\int_a^b f(x)^*g(x)\,dx\right\rvert
\le\sqrt{\int_a^b\lvert f(x)\rvert^2\,dx\ \int_a^b\lvert g(x)\rvert^2\,dx}.
$$

Thus the sum is square-integrable. Multiplication by a scalar multiplies the squared norm by its squared modulus, so that norm remains finite. The normalized functions alone lack the zero vector.

For part (b), the conjugate symmetry check is

$$
\langle g\mid f\rangle
=\int_a^b g(x)^*f(x)\,dx
=\left(\int_a^b f(x)^*g(x)\,dx\right)^*
=\langle f\mid g\rangle^*.
$$

#### Hermitian operators

The notes characterize a Hermitian operator $\hat Q$ by $\langle f\mid\hat Q f\rangle=\langle\hat Q f\mid f\rangle$ for every $f$ in its domain. The inner-product relation also lets $\hat Q$ act on either member, $\langle f\mid\hat Qg\rangle=\langle\hat Q f\mid g\rangle$. Check this for the momentum operator.

### PDF page 89

For $\hat p=(\hbar/i)d/dx$, test whether $\langle f\mid\hat p g\rangle=\langle\hat p f\mid g\rangle$. Integrate by parts with $u=f^*$ and $dv=g'\,dx$.

$$
\begin{aligned}
\langle f\mid\hat p g\rangle
&=\frac{\hbar}{i}\int_{-\infty}^{+\infty}f^*g'\,dx\\
&=\frac{\hbar}{i}\left([f^*g]_{-\infty}^{+\infty}
-\int_{-\infty}^{+\infty}(f^*)'g\,dx\right)\\
&=\int_{-\infty}^{+\infty}
\left(\frac{\hbar}{i}f'\right)^*g\,dx
=\langle\hat p f\mid g\rangle.
\end{aligned}
$$

The last step assumes a domain for which the boundary term vanishes.

#### Determinate states

A determinate state for $\hat Q$ satisfies $\hat Q\Psi=q\Psi$. Here $\Psi$ is the eigenfunction and $q$ is the corresponding eigenvalue. The notes call the collection of eigenvalues the spectrum. An eigenvalue is degenerate if at least two linearly independent eigenfunctions share it.

#### Example 3.1

Is $\hat Q=i\,d/d\phi$ Hermitian? Find its eigenvalues and eigenfunctions.

### PDF page 90

Use functions on $0\le\phi\le2\pi$ with periodic boundary condition $f(\phi+2\pi)=f(\phi)$. The Hermiticity check is $\langle f\mid\hat Qf\rangle=\langle\hat Qf\mid f\rangle$.

$$
\begin{aligned}
\langle f\mid\hat Q f\rangle
&=i\int_0^{2\pi}f^*(\phi)f'(\phi)\,d\phi\\
&=i[f^*f]_0^{2\pi}-i\int_0^{2\pi}f(\phi)(f^*)'(\phi)\,d\phi\\
&=\int_0^{2\pi}\big(if'(\phi)\big)^*f(\phi)\,d\phi
=\langle\hat Q f\mid f\rangle.
\end{aligned}
$$

The endpoints cancel because the function is periodic. Thus $\hat Q$ is Hermitian on the periodic domain.

For an eigenfunction,

$$
\hat Q f=qf,
\qquad
if'(\phi)=qf(\phi),
\qquad
f(\phi)=Ae^{-iq\phi}.
$$

Periodicity gives $e^{-2\pi iq}=1$, so $q=0,\pm1,\pm2,\ldots$.

### PDF page 91

#### Properties of Hermitian operators

**Theorem 1.** The eigenvalues of a Hermitian operator are real. If $\hat Qf=qf$ with $f\ne0$, Hermiticity gives

$$
\langle\hat Qf\mid f\rangle=\langle f\mid\hat Qf\rangle,
\qquad
q^*\langle f\mid f\rangle=q\langle f\mid f\rangle.
$$

The norm is positive, hence $q^*=q$ and $q$ is real.

**Theorem 2.** Eigenfunctions belonging to distinct eigenvalues are orthogonal. Let $\hat Qf=qf$ and $\hat Qg=q'g$. Then

$$
\langle\hat Qf\mid g\rangle=\langle f\mid\hat Qg\rangle,
\qquad
q^*\langle f\mid g\rangle=q'\langle f\mid g\rangle.
$$

Since $q^*=q$ and $q\ne q'$, $\langle f\mid g\rangle=0$.

#### Problem 3.12

1. Suppose $f$ and $g$ are eigenfunctions of $\hat Q$ with the same eigenvalue $q$. Show that every nonzero linear combination is an eigenfunction with eigenvalue $q$.
2. Check that $f(x)=e^x$ and $g(x)=e^{-x}$ are eigenfunctions of $d^2/dx^2$ with the same eigenvalue. Construct two orthogonal eigenfunctions on $(-1,1)$ as linear combinations of $f$ and $g$.

For part (a), linearity gives

$$
\hat Q(af+bg)=a\hat Q f+b\hat Qg=aqf+bqg=q(af+bg).
$$

### PDF page 92

For part (b), differentiating twice gives $(e^x)''=e^x$ and $(e^{-x})''=e^{-x}$. Both functions have eigenvalue $1$.

To build an orthogonal pair on $(-1,1)$, take $f=ae^x+be^{-x}$ and $g=ce^x+de^{-x}$ for real $a,b,c,d$. Expand the inner product.

$$
\langle f\mid g\rangle
=\int_{-1}^{1}(ac\,e^{2x}+ad+bc+bd\,e^{-2x})\,dx.
$$

The constant terms integrate to $2ad+2bc$, and the exponential integrals are equal.

$$
\int_{-1}^1e^{2x}\,dx
=\int_{-1}^1e^{-2x}\,dx
=\frac{e^2-e^{-2}}{2}.
$$

The handwritten choice $(a,b,c,d)=(2,1,2,4)$ yields $2e^x+e^{-x}$ and $2e^x+4e^{-x}$, whose inner product is positive. Setting $(a,b,c,d)=(1,1,1,-1)$ instead makes both $ac+bd$ and $ad+bc$ vanish. This gives the orthogonal pair $e^x+e^{-x}$ and $e^x-e^{-x}$.

### PDF page 93

#### Generalized statistical interpretation

A measurement of $Q(x,\mechanical{p})$ on a particle in state $\Psi(x,t)$ gives a spectral value of the Hermitian operator $\hat Q(x,-i\hbar\,d/dx)$. For a discrete nondegenerate eigenvalue $q_n$ with normalized eigenfunction $f_n$, the probability is $\lvert c_n\rvert^2$. Orthonormality gives the coefficient by Fourier's trick.

$$
c_n=\langle f_n\mid\Psi\rangle=\int f_n(x)^*\Psi(x,t)\,dx.
$$

The coefficient is the amplitude of the component $f_n$ in $\Psi$.

#### Proof of the generalized uncertainty principle

Let $q=\langle Q\rangle$. The variance is

$$
\sigma_Q^2
=\langle\Psi\mid(\hat Q-q)^2\Psi\rangle
=\langle(\hat Q-q)\Psi\mid(\hat Q-q)\Psi\rangle\ge0.
$$

The handwritten line ends in zero. Equality holds for a determinate state. For two observables let $f=(\hat A-\langle A\rangle)\Psi$ and $g=(\hat B-\langle B\rangle)\Psi$. Schwarz gives

$$
\sigma_A^2\sigma_B^2=\langle f\mid f\rangle\langle g\mid g\rangle
\ge\lvert\langle f\mid g\rangle\rvert^2.
$$

For a complex number $z$,

$$
\lvert z\rvert^2=(\operatorname{Re}z)^2+(\operatorname{Im}z)^2
\ge(\operatorname{Im}z)^2
=\left(\frac{z-z^*}{2i}\right)^2.
$$

Now take $z=\langle f\mid g\rangle$.

### PDF page 94

The preceding inequalities give

$$
\sigma_A^2\sigma_B^2\ge
\left[\frac{\langle f\mid g\rangle-\langle g\mid f\rangle}{2i}\right]^2.
$$

Hermiticity lets the centered operator on the bra move to the ket side. With $\Psi$ normalized,

$$
\begin{aligned}
\langle f\mid g\rangle
&=\langle(\hat A-\langle A\rangle)\Psi
\mid(\hat B-\langle B\rangle)\Psi\rangle\\
&=\langle\Psi\mid(\hat A-\langle A\rangle)(\hat B-\langle B\rangle)\Psi\rangle\\
&=\langle\hat A\hat B\rangle-\langle B\rangle\langle A\rangle
-\langle A\rangle\langle B\rangle+\langle A\rangle\langle B\rangle\\
&=\langle\hat A\hat B\rangle-\langle A\rangle\langle B\rangle.
\end{aligned}
$$

Interchanging $A$ and $B$ and subtracting leaves $\langle[\hat A,\hat B]\rangle$, where $[\hat A,\hat B]=\hat A\hat B-\hat B\hat A$.

$$
\sigma_A^2\sigma_B^2\ge
\left[\frac{\langle[\hat A,\hat B]\rangle}{2i}\right]^2.
$$

### PDF page 95

#### The Schrödinger equation in three dimensions

In one dimension the stationary state is $\Psi(x,t)=\psi(x)e^{-i\energy{E}t/\hbar}$, with operators $\hat x,\hat p$. In three dimensions it is $\Psi(x,y,z,t)=\psi(x,y,z)e^{-i\energy{E}t/\hbar}$, with coordinate operators $(\hat x,\hat y,\hat z)$ and

$$
\hat{\mathbf p}=(\hat p_x,\hat p_y,\hat p_z)
=-i\hbar\nabla=-i\hbar\left(\frac{\partial}{\partial x},
\frac{\partial}{\partial y},\frac{\partial}{\partial z}\right).
$$

The normalization $\langle\psi\mid\psi\rangle=1$ integrates $\lvert\psi\rvert^2$ over the real line in one dimension and all space in three dimensions.

$$
\begin{aligned}
i\hbar\frac{\partial\Psi}{\partial t}
&=\hat H\Psi=\frac{\hat{\mathbf p}\cdot\hat{\mathbf p}}{2m}\Psi+\energy{V(x,y,z)}\Psi\\
&=-\frac{\hbar^2}{2m}\left(
\frac{\partial^2\Psi}{\partial x^2}+\frac{\partial^2\Psi}{\partial y^2}
+\frac{\partial^2\Psi}{\partial z^2}\right)+\energy{V}\Psi\\
&=-\frac{\hbar^2}{2m}\nabla^2\Psi+\energy{V}\Psi.
\end{aligned}
$$

For time-independent $\energy{V}$, put $\Psi(x,y,z,t)=R(x,y,z)T(t)$. Substitution gives $Ri\hbar\,dT/dt=-T\hbar^2\nabla^2R/(2m)+\energy{V}RT$. Divide by $RT$.

$$
\frac{i\hbar}{T}\frac{dT}{dt}
=\frac1R\left(-\frac{\hbar^2}{2m}\nabla^2R+\energy{V}R\right)
=\energy{E}.
$$

The two sides depend on different variables, so both equal the separation constant $\energy{E}$.

### PDF page 96

The time equation gives $dT/dt=-i\energy{E}T/\hbar$, so $T(t)=e^{-i\energy{E}t/\hbar}$ with the constant absorbed into the spatial wavefunction.

#### Three-dimensional time-independent equation

$$
\hat H\psi=-\frac{\hbar^2}{2m}\nabla^2\psi+\energy{V}\psi=\energy{E}\psi.
$$

In Cartesian coordinates, $\nabla^2\psi=\partial_x^2\psi+\partial_y^2\psi+\partial_z^2\psi$. In spherical coordinates,

$$
\nabla^2\psi
=\frac1{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial\psi}{\partial r}\right)
+\frac1{r^2\sin\theta}\frac{\partial}{\partial\theta}
\left(\sin\theta\frac{\partial\psi}{\partial\theta}\right)
+\frac1{r^2\sin^2\theta}\frac{\partial^2\psi}{\partial\phi^2}.
$$

![[Kyle Kabasares - Quantum Mechanics - Cartesian and Spherical Coordinates.png|**Fig. 59** Cartesian axes and the spherical coordinates $r,\theta,\phi$.]]

#### Separation in Cartesian coordinates

Put $\psi(x,y,z)=X(x)Y(y)Z(z)$. In the Laplacian, each derivative acts on its matching factor, yielding $YZX''+XZY''+XYZ''$. Divide the equation by $XYZ$ to obtain

$$
-\frac{\hbar^2}{2m}\left(\frac{X''}{X}+\frac{Y''}{Y}+\frac{Z''}{Z}\right)
+\energy{V(x,y,z)}=\energy{E}.
$$

Separation requires a suitable potential. In a region of constant potential each derivative ratio depends on just one independent coordinate and must be constant. Thus $-(\hbar^2/2m)X''/X$ is a separation constant, giving an ordinary differential equation for $X$, and likewise for $Y$ and $Z$.

### PDF page 97

#### Separation of variables in spherical coordinates

Use $\partial_\phi=\partial/\partial\phi$, $\partial_{\phi\phi}=\partial^2/\partial\phi^2$, and $\partial_r=\partial/\partial r$. For a central potential $\energy{V(r)}$, substitute $\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)$ into $-\hbar^2\nabla^2\psi/(2m)+\energy{V}\psi=\energy{E}\psi$. Divide by $-\hbar^2RY/(2mr^2)$ and group radial and angular terms.

$$
\left[\frac{1}{R}\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
-\frac{2mr^2}{\hbar^2}(\energy{V(r)}-\energy{E})\right]
+\frac{1}{Y}\left[
\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta Y)
+\frac1{\sin^2\theta}\partial_{\phi\phi}Y
\right]=0.
$$

The division cancels the $r^{-2}$ in the radial derivative term. The radial bracket equals $\ell(\ell+1)$ and the angular bracket divided by $Y$ equals $-\ell(\ell+1)$.

#### Angular equation

Multiply the angular equation by $\sin^2\theta\,Y$.

$$
\sin\theta\,\partial_\theta(\sin\theta\,\partial_\theta Y)+\partial_{\phi\phi}Y
=-\ell(\ell+1)\sin^2\theta\,Y.
$$

Substitute $Y(\theta,\phi)=\Theta(\theta)\Phi(\phi)$ and divide by $\Theta\Phi$.

$$
\left[
\frac{\sin\theta}{\Theta}\frac{d}{d\theta}
\left(\sin\theta\frac{d\Theta}{d\theta}\right)
+\ell(\ell+1)\sin^2\theta\right]
+\frac{1}{\Phi}\frac{d^2\Phi}{d\phi^2}=0.
$$

The polar bracket is the separation constant $m^2$ and the azimuthal term is $-m^2$.

### PDF page 98

#### Azimuthal equation

$$
\frac{1}{\Phi}\frac{d^2\Phi}{d\phi^2}=-m^2,
\qquad
\Phi(\phi)=e^{im\phi}.
$$

The condition $\Phi(2\pi)=\Phi(0)$ implies $e^{2\pi im}=1$, so $m=0,\pm1,\pm2,\ldots$.

#### Polar equation

Multiplying the polar equation by $\Theta$ gives

$$
\sin\theta\frac{d}{d\theta}\left(\sin\theta\frac{d\Theta}{d\theta}\right)
+\big[\ell(\ell+1)\sin^2\theta-m^2\big]\Theta=0.
$$

The regular solutions are proportional to associated Legendre functions evaluated at $x=\cos\theta$. In the phase convention used on this page,

$$
\Theta(\theta)=AP_\ell^m(\cos\theta),
\qquad
P_\ell^m(x)=(1-x^2)^{\lvert m\rvert/2}\frac{d^{\lvert m\rvert}}{dx^{\lvert m\rvert}}P_\ell(x),
\qquad
P_\ell(x)=\frac{1}{2^\ell\ell!}\frac{d^\ell}{dx^\ell}(x^2-1)^\ell.
$$

The superscript labels the order. As $\theta$ runs from $0$ to $\pi$, $x$ runs from $1$ to $-1$. A derivative of order $\lvert m\rvert>\ell$ vanishes, so $m=-\ell,\ldots,\ell$. For $\ell=2$, the possibilities are $m=0,\pm1,\pm2$.

For $P_2^1(\cos\theta)$, start with

$$
P_2^1(x)=\sqrt{1-x^2}\,\frac{dP_2}{dx},
\qquad
P_2(x)=\frac{1}{2^2\,2!}\frac{d^2}{dx^2}(x^2-1)^2,
\qquad
(x^2-1)^2=x^4-2x^2+1.
$$

### PDF page 99

The third derivative of $x^4-2x^2+1$ is $24x$. Thus in the notes' associated Legendre convention,

$$
P_2^1(x)=\frac{\sqrt{1-x^2}}{8}\,(24x)=3x\sqrt{1-x^2},
\qquad
P_2^1(\cos\theta)=3\sin\theta\cos\theta.
$$

The angular function for $\ell=2,m=1$ is proportional to $3e^{i\phi}\sin\theta\cos\theta$.

#### Spherical harmonics

$$
Y_\ell^m(\theta,\phi)=\epsilon
\sqrt{\frac{(2\ell+1)(\ell-\lvert m\rvert)!}{4\pi(\ell+\lvert m\rvert)!}}\,
e^{im\phi}P_\ell^m(\cos\theta),
\qquad
\epsilon=\begin{cases}(-1)^m,&m\ge0,\\1,&m<0.\end{cases}
$$

Here $\ell=0,1,2,\ldots$ and $m=-\ell,\ldots,\ell$. The harmonics are orthonormal with the solid-angle measure inherited from the volume integral.

$$
\int_0^{2\pi}d\phi\int_0^\pi d\theta\,\sin\theta\,
[Y_\ell^m(\theta,\phi)]^*Y_{\ell'}^{m'}(\theta,\phi)
=\delta_{\ell\ell'}\delta_{mm'}.
$$

#### Radial behavior

For $\psi=R(r)Y_\ell^m(\theta,\phi)$, the radial equation is

$$
\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
-\frac{2mr^2}{\hbar^2}\big[\energy{V(r)}-\energy{E}\big]R
=\ell(\ell+1)R.
$$

Simplify with $u(r)=rR(r)$, so $R=u/r$ and $dR/dr=u'/r-u/r^2$.

### PDF page 100

With $R=u/r$, the radial derivative reduces to

$$
\frac{d}{dr}\left[r^2\left(\frac{u'}{r}-\frac{u}{r^2}\right)\right]
=\frac{d}{dr}(ru'-u)=ru''.
$$

The radial Schrödinger equation becomes

$$
-\frac{\hbar^2}{2m}u''
+\left[\energy{V(r)}+\frac{\hbar^2\ell(\ell+1)}{2mr^2}\right]u=\energy{E}u.
$$

The bracket is the effective potential. The centrifugal term is positive, as in the sketch and the subsequent inside-well equation. It diverges as $r\to0$ for $\ell>0$.

![[Kyle Kabasares - Quantum Mechanics - Centrifugal Term near the Origin.png|**Fig. 60** The centrifugal term decreases with increasing radius and diverges at the origin.]]

#### Infinite spherical well

$$
\energy{V(r)}=\begin{cases}0,&r\le a,\\ \infty,&r>a.\end{cases}
$$

Outside, $\psi=u=0$. At the wall $\psi(a)=0$ and $u(a)=0$. Inside, with $\signal{k}^2=2m\energy{E}/\hbar^2$,

$$
u''=\left[\frac{\ell(\ell+1)}{r^2}-\signal{k}^2\right]u.
$$

For $\ell=0$, $u''=-\signal{k}^2u$, so $u=A\sin(\signal{k}r)+B\cos(\signal{k}r)$ and $R=u/r$. The handwritten second sine is a cosine, as required by the two independent solutions. The cosine divided by $r$ diverges at the origin, so $B=0$.

### PDF page 101

For $\ell=0$, $\psi(r,\theta,\phi)=A\sin(\signal{k}r)Y_0^0/r$, with constant $Y_0^0$. The boundary condition $u(a)=0$ gives $\sin(\signal{k}a)=0$, so $\signal{k}a=n\pi$ and

$$
\energy{E_n}=\frac{n^2\pi^2\hbar^2}{2ma^2},
\qquad n=1,2,\ldots\quad(\ell=0).
$$

For $\ell\ne0$, the equation $u''=[\ell(\ell+1)/r^2-\signal{k}^2]u$ gives spherical Bessel and Neumann functions.

$$
u(r)=Arj_\ell(\signal{k}r)+Brn_\ell(\signal{k}r).
$$

$$
j_\ell(x)=(-x)^\ell\left(\frac1x\frac{d}{dx}\right)^\ell\frac{\sin x}{x},
\qquad
n_\ell(x)=-(-x)^\ell\left(\frac1x\frac{d}{dx}\right)^\ell\frac{\cos x}{x}.
$$

The derivative operator is applied repeatedly, including to its $1/x$ factor. This corrects the handwritten shorthand $x^{-\ell}d^\ell/dx^\ell$. The Neumann term diverges at the origin, so $B=0$.

At the wall, $u(a)=0$ implies $j_\ell(\signal{k}a)=0$. Let $\beta_{n\ell}$ be the $n$th positive zero. Then

$$
\energy{E_{n\ell}}=\frac{\hbar^2\beta_{n\ell}^2}{2ma^2},
\qquad
\psi_{n\ell m}(r,\theta,\phi)=A\,j_\ell(\beta_{n\ell}r/a)Y_\ell^m(\theta,\phi).
$$

The indices are $n=1,2,\ldots$, $\ell=0,1,2,\ldots$, and $m=-\ell,\ldots,\ell$.

### PDF page 102

#### Hydrogen atom wavefunctions

Separate $\psi(r,\theta,\phi)=R(r)Y(\theta,\phi)$. With Bohr radius $a_0$ and $\rho=r/(na_0)$, the radial solution has the form $R_{n\ell}(r)\propto r^{-1}\rho^{\ell+1}e^{-\rho}v(\rho)$. The polynomial factor comes from associated Laguerre polynomials. With the convention $L_{n-\ell-1}^{2\ell+1}(2\rho)$,

$$
\psi_{n\ell m}(r,\theta,\phi)
=\sqrt{\left(\frac{2}{na_0}\right)^3\frac{(n-\ell-1)!}{2n(n+\ell)!}}\,
e^{-r/(na_0)}
\left(\frac{2r}{na_0}\right)^\ell
L_{n-\ell-1}^{2\ell+1}\left(\frac{2r}{na_0}\right)
Y_\ell^m(\theta,\phi).
$$

The prefactor here uses the usual normalized radial functions for the indicated Laguerre indexing. The handwritten powers in the prefactor are ambiguous.

The visualizations depict surfaces of the probability distribution. The ground state $(n,\ell,m)=(1,0,0)$ is spherically symmetric. Its radial function decreases with $r$. States with $\ell=m=0$ have no angular variation.

![[Kyle Kabasares - Quantum Mechanics - Hydrogen Ground State Symmetry.png|**Fig. 61** A spherical surface and a sketch of the decaying radial function $R(r)$ for $(1,0,0)$.]]

### PDF page 103

#### Preparation for lecture 12/1/2015

**Problem 7.** Find $\phi(\signal{k})$ from the given $\Psi(x,0)$.

$$
\phi(\signal{k})=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}\Psi(x,0)e^{-i\signal{k}x}\,dx.
$$

Substitute the supplied wavefunction and integrate. The notes suggest integral tables, trigonometric identities, and Euler's formula.

**Problem 15(a).** For the harmonic oscillator, raising and lowering operators produce new solutions of the Schrödinger equation at discrete energies above or below the starting state. They provide an algebraic way to find excited states of the oscillator potential.

**Problem 37.** The wavefunction is written using a radial part and spherical harmonics. Its two coefficients are $1/\sqrt3$ and $\sqrt2/\sqrt3$. Their squared moduli sum to $1/3+2/3=1$. The factor $R_{21}$ identifies $n=2,\ell=1$, which helps determine angular momentum. The notes ask how to interpret $Y_1^0$, $Y_1^1$, and recall the action of the relevant operators.

### PDF page 104

#### Other potentials

![[Kyle Kabasares - Quantum Mechanics - Five Potential Sketches.png|**Fig. 62** An upward parabola, a symmetric finite well, a well with unequal outer heights, an inverted parabola marked with a question, and a ramp joining constant regions.]]

#### Spin up

Use $\hat{\mathbf L}$ for orbital angular momentum, $\hat{\mathbf J}$ for general angular momentum, and $\hat{\mathbf S}$ for spin. The spin ladder operators are $\hat S_\pm=\hat S_x\pm i\hat S_y$.

The spin-up vector in the $z$ basis is $\chi_+=(1,0)^{\mathsf T}$, also denoted $\lvert\uparrow\rangle$.

$$
\hat S_z\chi_+
=\frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\begin{pmatrix}1\\0\end{pmatrix}
=\frac{\hbar}{2}\begin{pmatrix}1\\0\end{pmatrix}.
$$

Thus $\chi_+$ is an eigenvector of $\hat S_z$ with eigenvalue $+\hbar/2$.

### PDF page 105

For the spin-up state, $\hat S_z\lvert\chi_+\rangle=(\hbar/2)\lvert\chi_+\rangle$. Applying squared spin afterward gives

$$
\hat S^2\hat S_z\lvert\chi_+\rangle
=\frac{\hbar}{2}s(s+1)\hbar^2\lvert\chi_+\rangle
=\frac{3\hbar^3}{8}\lvert\chi_+\rangle.
$$

#### Spin angular momentum

Fermions have half-integer spin, with electrons and protons as $s=1/2$ examples. Bosons have integer spin, with the photon as a spin-one example. The notes also list phonons as bosonic excitations.

For spin one-half, the simultaneous eigenvectors of $\hat S^2$ and $\hat S_z$ can be written

$$
\begin{aligned}
\lvert\tfrac12,+\tfrac12\rangle
&=\lvert\uparrow\rangle=\chi_+=\alpha=\begin{pmatrix}1\\0\end{pmatrix},\\
\lvert\tfrac12,-\tfrac12\rangle
&=\lvert\downarrow\rangle=\chi_-=\beta=\begin{pmatrix}0\\1\end{pmatrix}.
\end{aligned}
$$

In this basis, $\hat S_z=(\hbar/2)\operatorname{diag}(1,-1)$ and $\hat S^2\lvert s,m_s\rangle=\frac34\hbar^2\lvert s,m_s\rangle$. Write $\hat S^2$ as a matrix with entries $a,b,c,d$. Applying it to the up vector determines the first column.

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix}
=\frac{3\hbar^2}{4}\begin{pmatrix}1\\0\end{pmatrix},
\qquad
a=\frac{3\hbar^2}{4},
\quad c=0.
$$

### PDF page 106

Apply squared spin to the down vector to determine the second column.

$$
\hat S^2\chi_-=\hat S^2\beta
=\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}0\\1\end{pmatrix}
=\frac{3\hbar^2}{4}\begin{pmatrix}0\\1\end{pmatrix}.
$$

Thus $b=0$ and $d=3\hbar^2/4$. Both columns together give

$$
\hat S^2=\frac{3\hbar^2}{4}\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$

The last handwritten line displays the identity matrix with the common prefactor omitted.

### PDF page 107

#### Spin-$1/2$ particles — 12/3/2015

In the $z$ basis,

$$
\hat S^2=\frac34\hbar^2\begin{pmatrix}1&0\\0&1\end{pmatrix},
\qquad
\hat S_z=\frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix},
\qquad
\hat S_x=\frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\hat S_y=\frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix}.
$$

For $\hat S_x$, set $\det(\hat S_x-\lambda I)=0$.

$$
\begin{vmatrix}-\lambda&\hbar/2\\\hbar/2&-\lambda\end{vmatrix}
=\lambda^2-\left(\frac{\hbar}{2}\right)^2=0,
\qquad
\lambda=\pm\frac{\hbar}{2}.
$$

The $z$-basis vectors are $\chi_+=\alpha=(1,0)^{\mathsf T}$ and $\chi_-=\beta=(0,1)^{\mathsf T}$. For the positive $x$ eigenvalue, the matrix equation on $(a,b)^{\mathsf T}$ gives $(b,a)^{\mathsf T}=(a,b)^{\mathsf T}$. Set $a=b=1$ before normalization. Then

$$
\lvert\chi_+^{(x)}\rangle=A\begin{pmatrix}1\\1\end{pmatrix},
\qquad
\langle\chi_+^{(x)}\mid\chi_+^{(x)}\rangle=2\lvert A\rvert^2=1.
$$

Choose the positive real amplitude $A=1/\sqrt2$.

### PDF page 108

#### Pauli spin matrices

With $\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)$, the spin operator is $\hat{\mathbf S}=(\hbar/2)\boldsymbol\sigma$. To verify the commutator, multiply in both orders.

$$
\begin{aligned}
[\sigma_x,\sigma_y]
&=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}0&-i\\i&0\end{pmatrix}
-\begin{pmatrix}0&-i\\i&0\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}\\
&=\begin{pmatrix}i&0\\0&-i\end{pmatrix}
-\begin{pmatrix}-i&0\\0&i\end{pmatrix}
=2i\begin{pmatrix}1&0\\0&-1\end{pmatrix}
=2i\sigma_z.
\end{aligned}
$$

#### Two spins

The two-particle $z$ basis has the four possible up/down combinations. The notes give $\chi_1=\chi_2=(1,1)^{\mathsf T}/\sqrt2$ and ask for the spin of the combined system.

$$
\hat{\mathbf S}=\hat{\mathbf S}^{(1)}+\hat{\mathbf S}^{(2)},
\qquad
\hat S_z=\hat S_z^{(1)}+\hat S_z^{(2)}.
$$

Each one-particle operator acts on its own factor in the product state.

$$
\hat S_z(\chi_1\otimes\chi_2)
=(\hat S_z\chi_1)\otimes\chi_2
+\chi_1\otimes(\hat S_z\chi_2).
$$

### PDF page 109

If $\chi_1,\chi_2$ are one-particle $z$ eigenstates, their projections add.

$$
\hat S_z\lvert\chi_1,\chi_2\rangle
=(m_1+m_2)\hbar\lvert\chi_1,\chi_2\rangle.
$$

For $\lvert\uparrow\uparrow\rangle$, $m_1+m_2=\frac12+\frac12=1$. This is the highest state of the $s_{\mathrm{tot}}=1$ multiplet, $\lvert1,1\rangle$. Lower it using the sum of the two one-particle lowering operators.

$$
\begin{aligned}
\hat S_-\lvert\uparrow\uparrow\rangle
&=(\hat S_-^{(1)}+\hat S_-^{(2)})\lvert\uparrow\uparrow\rangle\\
&=\hbar\big(\lvert\downarrow\uparrow\rangle+\lvert\uparrow\downarrow\rangle\big).
\end{aligned}
$$

The sum of the two orthogonal product kets has norm $\sqrt2$. The normalized state is

$$
\lvert1,0\rangle=\frac{\lvert\uparrow\downarrow\rangle+\lvert\downarrow\uparrow\rangle}{\sqrt2}.
$$

Thus $\hat S_-\lvert1,1\rangle=\sqrt2\hbar\lvert1,0\rangle$. The notes also write the normalized combination separately. Each term of $\lvert1,0\rangle$ has net projection $\frac12-\frac12=0$, so $\hat S_z\lvert1,0\rangle=0$. Lowering again gives a multiple of $\lvert1,-1\rangle$, in accord with the general rule $\hat J_-\lvert j,m_j\rangle=C^-_{j m_j}\lvert j,m_j-1\rangle$.

### PDF page 110

Lowering $\lvert1,0\rangle$ gives a multiple of $\lvert\downarrow\downarrow\rangle=\lvert1,-1\rangle$. Together the states with $s_{\mathrm{tot}}=1$ and $m_{\mathrm{tot}}=1,0,-1$ form the triplet. The singlet has $s_{\mathrm{tot}}=0$, $m_{\mathrm{tot}}=0$.

$$
\lvert0,0\rangle=\frac{\lvert\uparrow\downarrow\rangle-\lvert\downarrow\uparrow\rangle}{\sqrt2}.
$$

#### 12/7/2015 — Coupled and uncoupled spin bases

$\lvert\uparrow\uparrow\rangle$ denotes the product ket $\lvert s_1,m_{s_1};s_2,m_{s_2}\rangle$ with both spins and both projections equal to $1/2$. The coupled ket $\lvert s,m_s\rangle$ labels total spin and total projection.

Acting on $\lvert\uparrow\downarrow\rangle$, the lowering operator on particle 1 produces $\hbar\lvert\downarrow\downarrow\rangle$ and that on particle 2 gives zero. The two mixed product kets are orthonormal, so the unnormalized difference has squared norm $1+1=2$.

The projection quantum numbers $m_s$, $m_\ell$, and $m_j$ range from minus to plus their respective spin or angular momentum quantum number in unit steps.

$$
\hat{\mathbf S}_{\mathrm{tot}}=\hat{\mathbf S}^{(1)}+\hat{\mathbf S}^{(2)},
\qquad
\hat{\mathbf J}_{\mathrm{tot}}=\hat{\mathbf J}^{(1)}+\hat{\mathbf J}^{(2)},
\qquad
\hat J_{\mathrm{tot},x}=\hat J_x^{(1)}+\hat J_x^{(2)}.
$$

The coupled basis expands in product kets with Clebsch–Gordan coefficients.

$$
\lvert j,m_j\rangle=\sum_{m_1,m_2}C^{j_1j_2j}_{m_1m_2m_j}
\lvert j_1,m_1\rangle\lvert j_2,m_2\rangle.
$$

The example expands the product state in the coupled basis.

$$
\lvert1,0\rangle\lvert\tfrac32,\tfrac12\rangle
=\sqrt{\frac35}\lvert\tfrac52,\tfrac12\rangle
+\sqrt{\frac1{15}}\lvert\tfrac32,\tfrac12\rangle
-\sqrt{\frac13}\lvert\tfrac12,\tfrac12\rangle.
$$

The probability of measuring $j=5/2,m_j=1/2$ is the first coefficient's squared modulus, $3/5$.

### PDF page 111

#### 12/10/2015 — Reading Clebsch–Gordan tables

Choose the table for the constituent angular momenta $j_1,j_2$. The rows correspond to product states and the columns to combined states. Use a row to expand a product state in the combined basis, and a column to expand a combined state in the product basis.

![[Kyle Kabasares - Quantum Mechanics - Clebsch Gordan Table Layout.png|**Fig. 63** The table layout marks the coefficients down the selected combined-state column.]]

The column in the example gives three products with amplitudes $\sqrt A$, $\sqrt B$, and $-\sqrt C$.

$$
\begin{aligned}
\lvert j_{\mathrm{tot}},m_{\mathrm{tot}}\rangle={}&
\sqrt A\,\lvert j_1,m_{1A}\rangle\lvert j_2,m_{2A}\rangle\\
&+\sqrt B\,\lvert j_1,m_{1B}\rangle\lvert j_2,m_{2B}\rangle\\
&-\sqrt C\,\lvert j_1,m_{1C}\rangle\lvert j_2,m_{2C}\rangle.
\end{aligned}
$$

The state is already normalized because $(\sqrt A)^2+(\sqrt B)^2+(\sqrt C)^2=1$.

### PDF page 112

#### Shankar quantum mechanics — Discussion of postulates

The position-basis resolution of a momentum ket is

$$
\lvert p\rangle=\int\lvert x\rangle\langle x\mid p\rangle\,dx.
$$

After measuring $\Omega$ and obtaining $w$, the normalized post-measurement state is

$$
\frac{P_w\lvert\psi\rangle}{\sqrt{\langle P_w\psi\mid P_w\psi\rangle}},
$$

where $P_w$ projects onto the eigenspace $V_w$. For orthonormal kets $\lvert w,1\rangle,\lvert w,2\rangle,\lvert w_3\rangle$, the first two share eigenvalue $w$. If

$$
\lvert\psi\rangle=\frac12\lvert w,1\rangle+\frac12\lvert w,2\rangle
+\frac1{\sqrt2}\lvert w_3\rangle,
$$

then outcome $w$ leaves $(\lvert w,1\rangle+\lvert w,2\rangle)/\sqrt2$. With the initial state unknown, the notes write the normalized state in that subspace as $(\alpha\lvert w,1\rangle+\beta\lvert w,2\rangle)/\sqrt{\alpha^2+\beta^2}$ for real $\alpha,\beta$.

#### Exercise 4.2.1

In units of $\hbar$, the three angular momentum matrices are

$$
L_x=\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},
\quad
L_y=\frac1{\sqrt2}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix},
\quad
L_z=\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}.
$$

To obtain the probability of an observable, determine its eigenbasis and project the state onto the eigenkets. In the $\Omega$ basis, $\lvert\psi\rangle=\sum_j\lvert w_j\rangle\langle w_j\mid\psi\rangle$ and a nondegenerate outcome $w_j$ has probability $\lvert\langle w_j\mid\psi\rangle\rvert^2$.

For a different observable $\Lambda$, form the matrix $\Lambda_{ij}=\langle w_i\mid\Lambda\mid w_j\rangle$. Find the eigenvectors $\lvert\lambda_i\rangle$ with components $\langle w_j\mid\lambda_i\rangle$, then compute

$$
\langle\lambda_i\mid\psi\rangle=\sum_j\langle\lambda_i\mid w_j\rangle\langle w_j\mid\psi\rangle.
$$

### PDF page 113

#### Exercise 4.2.1 continued

For part (a), consider $L_z\lvert\psi\rangle=w\lvert\psi\rangle$ with $L_z=\operatorname{diag}(1,0,-1)$. The notes list the $+1$ and $-1$ outcomes for the state in the exercise. The matrix also has a zero eigenvalue.

For part (b), find $\langle L_x\rangle$, $\langle L_x^2\rangle$, and $\Delta L_x$. In the three-dimensional complex Hilbert space, $\lvert\psi\rangle=a\lvert w_1\rangle+b\lvert w_2\rangle+c\lvert w_3\rangle$. The state with $L_z=1$ has coordinates $(1,0,0)^{\mathsf T}$. Then

$$
\langle L_x\rangle
=\begin{pmatrix}1&0&0\end{pmatrix}
\frac1{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}
\begin{pmatrix}1\\0\\0\end{pmatrix}
=\begin{pmatrix}1&0&0\end{pmatrix}
\begin{pmatrix}0\\1/\sqrt2\\0\end{pmatrix}=0.
$$

Applying the same matrix twice,

$$
L_x^2\begin{pmatrix}1\\0\\0\end{pmatrix}
=\frac12\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}
\begin{pmatrix}0\\1\\0\end{pmatrix}
=\frac12\begin{pmatrix}1\\0\\1\end{pmatrix},
\qquad
\langle L_x^2\rangle=\frac12.
$$

### PDF page 114

The spread in the same units is

$$
\Delta L_x=\sqrt{\langle(L_x-\langle L_x\rangle)^2\rangle}
=\sqrt{\langle L_x^2\rangle}=\frac1{\sqrt2}.
$$

Part (c) asks for the normalized eigenstates and eigenvalues of $L_x$ in the $L_z$ basis. First identify that basis by solving $(L_z-\lambda I)\mathbf v=0$ for $L_z=\operatorname{diag}(1,0,-1)$.

| $\lambda$ | Diagonal of $L_z-\lambda I$ | Normalized eigenvector |
| --- | --- | --- |
| $1$ | $(0,-1,-2)$ | $(1,0,0)^{\mathsf T}$ |
| $0$ | $(1,0,-1)$ | $(0,1,0)^{\mathsf T}$ |
| $-1$ | $(2,1,0)$ | $(0,0,1)^{\mathsf T}$ |

For each eigenvalue, the zero diagonal entry leaves its corresponding component free and the other two equations set their components to zero.

### PDF page 115

Label the $L_z$ eigenbasis $\lvert1\rangle,\lvert2\rangle,\lvert3\rangle$ and compute $\langle i\mid L_x\mid j\rangle$. The columns of the basis matrix are the coordinate unit vectors, so the representation of $L_x$ is already the one displayed.

$$
L_x-\lambda I=\begin{pmatrix}
-\lambda&1/\sqrt2&0\\
1/\sqrt2&-\lambda&1/\sqrt2\\
0&1/\sqrt2&-\lambda
\end{pmatrix}.
$$

$$
\det(L_x-\lambda I)
=-\lambda(\lambda^2-\tfrac12)+\frac{\lambda}{2}
=-\lambda^3+\lambda.
$$

The roots are $\lambda=-1,0,1$. For $\lambda=-1$, solve $(L_x+I)\mathbf v=0$.

$$
v_1+\frac{v_2}{\sqrt2}=0,
\qquad
\frac{v_1}{\sqrt2}+v_2+\frac{v_3}{\sqrt2}=0,
\qquad
\frac{v_2}{\sqrt2}+v_3=0.
$$

For $\lambda=1$, solve $(L_x-I)\mathbf v=0$. The notes suggest using Mathematica and record the unnormalized eigenvector $(1,\sqrt2,1)^{\mathsf T}$.

### PDF page 116

For $\lambda=0$, $L_x\mathbf v=0$ gives $v_2=0$ and $v_1=-v_3$. An eigenvector is $(1,0,-1)^{\mathsf T}$, or its negative. For $\lambda=-1$, the notes use Mathematica and obtain $(1,-\sqrt2,1)^{\mathsf T}$.

Divide the three eigenvectors by their lengths $2,\sqrt2,2$. In the $L_z$ basis, the normalized $L_x$ eigenvectors in order $+1,0,-1$ are

$$
\lvert x+\rangle=\begin{pmatrix}1/2\\1/\sqrt2\\1/2\end{pmatrix},
\qquad
\lvert x0\rangle=\begin{pmatrix}1/\sqrt2\\0\\-1/\sqrt2\end{pmatrix},
\qquad
\lvert x-\rangle=\begin{pmatrix}1/2\\-1/\sqrt2\\1/2\end{pmatrix}.
$$

Part (d) asks for the possible outcomes and probabilities of measuring $L_x$ when the particle starts in the state $L_z=-1$. In the $L_z$ basis that state is $(0,0,1)^{\mathsf T}$. Expand it as a linear combination of the three $L_x$ basis states.

### PDF page 117

The $L_z=-1$ state expands as $a\lvert x+\rangle+b\lvert x0\rangle+c\lvert x-\rangle$. Comparing the three coordinates gives

$$
\frac a2+\frac b{\sqrt2}+\frac c2=0,
\qquad
\frac{a-c}{\sqrt2}=0,
\qquad
\frac a2-\frac b{\sqrt2}+\frac c2=1.
$$

The notes suggest Mathematica to solve the system. The result is $a=1/2$, $b=-1/\sqrt2$, and $c=1/2$, so the probabilities for $L_x=1,0,-1$ are $1/4,1/2,1/4$.

For part (e), the initial state is $\lvert\psi\rangle=(1/2,1/2,1/\sqrt2)^{\mathsf T}$ in the $L_z$ basis. The squared matrix is

$$
L_z^2=\operatorname{diag}(1,0,-1)\operatorname{diag}(1,0,-1)
=\operatorname{diag}(1,0,1).
$$

Shankar's projection rule for a known initial state and a degenerate outcome gives $P_w\lvert\psi\rangle$ up to normalization. The eigenspace for $L_z^2=1$ is the span of $\lvert1\rangle=(1,0,0)^{\mathsf T}$ and $\lvert3\rangle=(0,0,1)^{\mathsf T}$. The projected state is a linear combination of those two vectors.

### PDF page 118

The projector onto an eigenspace is the sum of outer products of its orthonormal basis kets. For the outcome $L_z^2=1$, the two basis vectors are those with $L_z=+1$ and $-1$.

$$
P_1=\lvert1\rangle\langle1\rvert+\lvert3\rangle\langle3\rvert
=\begin{pmatrix}1&0&0\\0&0&0\\0&0&1\end{pmatrix},
\qquad
P_1\lvert\psi\rangle=\begin{pmatrix}1/2\\0\\1/\sqrt2\end{pmatrix}.
$$

The projected vector has norm $\sqrt{1/4+1/2}=\sqrt3/2$. Therefore

$$
\lvert\psi_{\mathrm{after}}\rangle
=\frac{P_1\lvert\psi\rangle}{\sqrt{\langle P_1\psi\mid P_1\psi\rangle}}
=\frac2{\sqrt3}\begin{pmatrix}1/2\\0\\1/\sqrt2\end{pmatrix}.
$$

A subsequent $L_z$ measurement yields $+1$ with probability $\lvert\langle1\mid\psi_{\mathrm{after}}\rangle\rvert^2=1/3$ and $-1$ with probability $\lvert\langle3\mid\psi_{\mathrm{after}}\rangle\rvert^2=2/3$. The probability of the preceding $L_z^2=1$ outcome is the squared norm of the projection, $3/4$. The notes use $P(w_i)=\lvert\langle w_i\mid\psi\rangle\rvert^2/\langle\psi\mid\psi\rangle$ for a single eigenket.

### PDF page 119

For part (f), suppose

$$
P(L_z=1)=\frac14,
\qquad
P(L_z=0)=\frac12,
\qquad
P(L_z=-1)=\frac14.
$$

The most general normalized pure state with these probabilities has arbitrary phases $\delta_1,\delta_2,\delta_3$.

$$
\lvert\psi\rangle
=\frac{e^{i\delta_1}}{2}\lvert L_z=1\rangle
+\frac{e^{i\delta_2}}{\sqrt2}\lvert L_z=0\rangle
+\frac{e^{i\delta_3}}{2}\lvert L_z=-1\rangle.
$$

### PDF page 120

#### Shankar, Mathematical Introduction §1.9 — Functions of operators

Scalars are called $c$-numbers and operators $q$-numbers. Given $f(x)=\sum_{n=0}^\infty a_nx^n$ for a scalar $x$, the corresponding operator series defines $f(\Omega)=\sum_{n=0}^\infty a_n\Omega^n$ wherever it converges. For example,

$$
e^\Omega=\sum_{n=0}^\infty\frac{\Omega^n}{n!}.
$$

For a Hermitian matrix $\Omega$, work in its eigenbasis. If $\Omega=\operatorname{diag}(w_1,w_2,\ldots,w_N)$, then $\Omega^m=\operatorname{diag}(w_1^m,w_2^m,\ldots,w_N^m)$. The exponential is diagonal with entries $\sum_{m=0}^\infty w_i^m/m!=e^{w_i}$.

#### Exercise 1.9.1

For $f(\Omega)=\sum_{n=0}^\infty\Omega^n$, ask when the series represents $(I-\Omega)^{-1}$. In the eigenbasis, write the partial sum as the identity plus diagonal terms with entries $w_i,w_i^2,\ldots,w_i^n$. Each diagonal entry is a scalar geometric series.

### PDF page 121

For the matrix geometric series, each diagonal series $\sum_{n=0}^{\infty}w_i^n$ must converge. This holds exactly when $\lvert w_i\rvert<1$ for every $i$.

#### Exercise 1.9.2

If $H=H^\dagger$, show that $U=e^{iH}$ is unitary. Taking the adjoint term by term in the exponential gives

$$
U^\dagger=(e^{iH})^\dagger=e^{-iH^\dagger}=e^{-iH}.
$$

The exponents commute, so $UU^\dagger=e^{iH}e^{-iH}=e^0=I$.

#### Exercise 1.9.3

Show that $\det U=e^{i\operatorname{Tr}H}$. In the eigenbasis of $H$, write $H=\operatorname{diag}(h_1,\ldots,h_N)$, so $U=\operatorname{diag}(e^{ih_1},\ldots,e^{ih_N})$. The determinant of a diagonal matrix is the product of its diagonal entries.

$$
\det U=\prod_{k=1}^Ne^{ih_k}
=e^{i\sum_{k=1}^N h_k}
=e^{i\operatorname{Tr}H}.
$$

The handwritten intermediate product is labeled $\operatorname{Tr}(e^{iH})$. It is $\det(e^{iH})$.

### PDF page 122

#### Derivatives of operators with respect to parameters

For an operator $\Theta(\lambda)$, define

$$
\frac{d\Theta}{d\lambda}
=\lim_{\Delta\lambda\to0}\frac{\Theta(\lambda+\Delta\lambda)-\Theta(\lambda)}{\Delta\lambda}.
$$

In a fixed matrix basis, differentiate the entries. For $\Theta(\lambda)=e^{\lambda\Omega}$ with Hermitian $\Omega$, use the eigenbasis to get $\Theta'=\Omega e^{\lambda\Omega}=e^{\lambda\Omega}\Omega$. The series gives the same result for a non-Hermitian matrix.

$$
\frac{d}{d\lambda}\sum_{n=0}^{\infty}\frac{\lambda^n\Omega^n}{n!}
=\Omega\sum_{n=1}^{\infty}\frac{\lambda^{n-1}\Omega^{n-1}}{(n-1)!}
=\Omega e^{\lambda\Omega}.
$$

With constant $\Omega$, the first-order operator equation $\Theta'-\Theta\Omega=0$ has solution

$$
\Theta(\lambda)=C\exp\left(\int_0^\lambda\Omega\,d\lambda'\right)
=Ce^{\lambda\Omega},
$$

where $C=\Theta(0)$ is the constant operator of integration. The notes suggest an integrating factor. Operator order matters because $q$-numbers need not commute.

### PDF page 123

Functions of a single operator commute, so $e^{\alpha\Omega}e^{\beta\Omega}=e^{(\alpha+\beta)\Omega}$. For two operators the following identities hold when $[\Omega,\Theta]=0$ and can fail otherwise.

$$
e^{\alpha\Omega}e^{\beta\Theta}=e^{\alpha\Omega+\beta\Theta},
\qquad
e^{\alpha\Omega}e^{\beta\Theta}e^{-\alpha\Omega}=e^{\beta\Theta}.
$$

The product rule preserves operator order.

$$
\frac{d}{d\lambda}\big(e^{\lambda\Omega}e^{\lambda\Theta}\big)
=\Omega e^{\lambda\Omega}e^{\lambda\Theta}
+e^{\lambda\Omega}e^{\lambda\Theta}\Theta.
$$

#### Generalization to infinite dimensions — §1.10

For real-valued functions on $[0,L]$, $\langle f\mid g\rangle=\int_0^L f(x)g(x)\,dx$ and $\langle f\mid f\rangle=\int_0^L f(x)^2\,dx$. For complex functions on $[a,b]$,

$$
\langle f\mid g\rangle=\int_a^b f(x)^*g(x)\,dx.
$$

Each point $x$ has a generalized basis ket $\lvert x\rangle$. Distinct points are orthogonal in the sense that $\langle x\mid x'\rangle$ vanishes away from $x=x'$. The resolution of the identity is

$$
\int_a^b\lvert x'\rangle\langle x'\rvert\,dx'=I.
$$

Multiply by $\langle x\rvert$ on the left and $\lvert f\rangle$ on the right to obtain

$$
\int_a^b\langle x\mid x'\rangle\langle x'\mid f\rangle\,dx'
=\langle x\mid I\mid f\rangle=\langle x\mid f\rangle.
$$

The coordinates in this basis are $\langle x\mid f\rangle=f(x)$ and $\langle x'\mid f\rangle=f(x')$.

### PDF page 124

Write $\langle x\mid x'\rangle=\delta(x-x')$. The delta distribution is supported at $x'=x$. For $\epsilon>0$ and $x$ in the interior,

$$
\int_{x-\epsilon}^{x+\epsilon}\delta(x-x')f(x')\,dx'=f(x),
\qquad
\int_{x-\epsilon}^{x+\epsilon}\delta(x-x')\,dx'=1.
$$

The notes motivate this by replacing $f(x')$ in the shrinking region by $f(x)$ and pulling it outside the integral. Over $[a,b]$, the same normalization holds for $a<x<b$. The delta is real and even.

$$
\delta(x-x')=\langle x\mid x'\rangle
=\langle x'\mid x\rangle^*
=\delta(x'-x)^*=\delta(x'-x).
$$

For its derivative,

$$
\delta'(x-x')=\frac{d}{dx}\delta(x-x')=-\frac{d}{dx'}\delta(x-x').
$$

The centered difference $[f(x+\epsilon)-f(x-\epsilon)]/(2\epsilon)$ motivates the derivative integral. To verify it, differentiate the sifting integral with respect to $x$, or use integration by parts in $x'$ with the boundary term zero.

$$
\int\delta'(x-x')f(x')\,dx'
=\frac{d}{dx}\int\delta(x-x')f(x')\,dx'
=\frac{df(x)}{dx}.
$$

### PDF page 125

The derivative $\delta'$ is odd. More generally, differentiating the sifting relation $n$ times with respect to $x$ transfers the derivative to the sampled function.

$$
\int \frac{\partial^n}{\partial x^n}\delta(x-x')\,f(x')\,dx'
=\int\delta(x-x')\frac{d^n f(x')}{dx'^n}\,dx'
=f^{(n)}(x).
$$

#### Fourier representation of the delta function

$$
\tilde f(k)=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{-ikx}f(x)\,dx,
\qquad
f(x')=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{ikx'}\tilde f(k)\,dk.
$$

Substituting the first equation into the second gives

$$
f(x')=\int_{-\infty}^{+\infty}\left[
\frac1{2\pi}\int_{-\infty}^{+\infty}e^{ik(x'-x)}\,dk\right]f(x)\,dx.
$$

Compare with $f(x')=\int\delta(x'-x)f(x)\,dx$. The bracket is the Fourier representation of the delta distribution.

$$
\delta(x'-x)=\frac1{2\pi}\int_{-\infty}^{+\infty}e^{ik(x'-x)}\,dk.
$$

#### Operators in infinite dimensions

An operator $\Omega$ maps $\lvert f\rangle$ to $\lvert\tilde f\rangle$. For differentiation, $D\lvert f\rangle=\lvert df/dx\rangle$. To find the matrix elements of $D$ in the position basis, multiply the equation by $\langle x\rvert$.

### PDF page 126

Insert the resolution of the identity between $D$ and $\lvert f\rangle$.

$$
\langle x\mid D\mid f\rangle
=\int\langle x\mid D\mid x'\rangle\langle x'\mid f\rangle\,dx'
=f'(x).
$$

Comparing with the differentiated sifting relation gives the kernel $D_{xx'}=\langle x\mid D\mid x'\rangle=\delta'(x-x')$. The continuous matrix multiplies the components $f_{x'}=f(x')$ by integration over the second index and returns the derivative at the first index. Equivalently its action can be written

$$
\int\delta(x-x')\frac{d}{dx'}f(x')\,dx'=f'(x).
$$

The real, odd derivative of the delta satisfies

$$
D_{x'x}^*=\delta'(x'-x)=-\delta'(x-x')=-D_{xx'}.
$$

Multiplication by $-i$ gives the formally Hermitian kernel $K=-iD$, since $K_{x'x}^*=i\delta'(x'-x)=-i\delta'(x-x')=K_{xx'}$. The notes then check the operator inner product, which requires a suitable domain and boundary conditions.

$$
\langle g\mid K\mid f\rangle
=\langle g\mid Kf\rangle
=\langle Kf\mid g\rangle^*
=\langle f\mid K^\dagger\mid g\rangle^*
=\langle f\mid K\mid g\rangle^*
$$

when $K^\dagger=K$.

### PDF page 127

Writing both inner products in the position basis and evaluating the kernels reduces the Hermiticity test to an integration by parts.

$$
\langle g\mid Kf\rangle
=-i\int_a^b g^*(x)f'(x)\,dx
=-i[g^*f]_a^b+i\int_a^b(g^*)'(x)f(x)\,dx.
$$

The remaining integral is $\langle Kg\mid f\rangle$. The symmetry condition is that the boundary term vanish for functions in the domain.

On the full real line the notes discuss both decaying functions and generalized plane waves $e^{ikx}$. For plane waves the boundary term involves $e^{i(k-k')x}$. The notes use an average over a long interval, which tends to zero for $k\ne k'$ even though the exponential continues to oscillate.

$$
\lim_{\Delta\to\infty}\frac{1}{\Delta}
\int_L^{L+\Delta}e^{i(k-k')x}\,dx=0
\quad(k\ne k').
$$

#### Eigenvalue problem of $K$

Set $K\lvert k\rangle=k\lvert k\rangle$ and $\psi_k(x)=\langle x\mid k\rangle$. Insert the identity in the position basis.

$$
k\psi_k(x)=\langle x\mid K\mid k\rangle
=\int\langle x\mid K\mid x'\rangle\langle x'\mid k\rangle\,dx'
=-i\int\delta'(x-x')\psi_k(x')\,dx'
=-i\frac{d\psi_k}{dx}.
$$

### PDF page 128

The position-space eigenfunction of $K=-iD$ is $\psi_k(x)=\langle x\mid k\rangle$. Apply the derivative kernel to the eigenvalue equation.

$$
-i\int_{-\infty}^{\infty}\langle x\mid D\mid x'\rangle\langle x'\mid k\rangle\,dx'
=-i\psi_k'(x)=k\psi_k(x).
$$

The equation $\psi_k'=ik\psi_k$ has characteristic root $ik$ and solution $Ae^{ikx}$. Choose $A=1/\sqrt{2\pi}$ so that the generalized eigenfunctions are delta-normalized.

$$
\langle k\mid k'\rangle
=\int_{-\infty}^{\infty}\psi_k^*(x)\psi_{k'}(x)\,dx
=\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i(k'-k)x}\,dx
=\delta(k-k').
$$

The plane waves with real $k$ form a generalized basis for expanding normalizable wave packets. Write $f(x)=\langle x\mid f\rangle$ and $f(k)=\langle k\mid f\rangle$. Inserting the identity in each basis gives the Fourier transform pair.

$$
f(k)=\int_{-\infty}^{\infty}\langle k\mid x\rangle\langle x\mid f\rangle\,dx
=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{-ikx}f(x)\,dx.
$$

$$
f(x)=\int_{-\infty}^{\infty}\langle x\mid k\rangle\langle k\mid f\rangle\,dk
=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{\infty}e^{ikx}f(k)\,dk.
$$

The expanded integrals include the normalization factors implied by the eigenfunctions above.

### PDF page 129

#### Position in the position and wave-number bases

In the $k$ basis, $\langle k\mid K\mid k'\rangle=k'\delta(k-k')$. Likewise, in the position basis,

$$
X\lvert x\rangle=x\lvert x\rangle,\qquad
\langle x'\mid X\mid x\rangle=x\delta(x'-x).
$$

Inserting the position identity gives the action of $X$ on $f(x)=\langle x\mid f\rangle$.

$$
\begin{aligned}
\langle x\mid X\mid f\rangle
&=\int_{-\infty}^{\infty}\langle x\mid X\mid x'\rangle\langle x'\mid f\rangle\,dx'\\
&=x\int_{-\infty}^{\infty}\delta(x'-x)f(x')\,dx'=xf(x).
\end{aligned}
$$

In the $k$ basis, the same operator has the kernel

$$
\begin{aligned}
\langle k\mid X\mid k'\rangle
&=\int_{-\infty}^{\infty}\langle k\mid X\mid x\rangle\langle x\mid k'\rangle\,dx\\
&=\frac{1}{2\pi}\int_{-\infty}^{\infty}x e^{i(k'-k)x}\,dx\\
&=i\frac{\partial}{\partial k}
\left(\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i(k'-k)x}\,dx\right)
=i\frac{\partial}{\partial k}\delta(k-k').
\end{aligned}
$$

Thus if $g(k)=\langle k\mid g\rangle$, then $\langle k\mid X\mid g\rangle=i\,dg(k)/dk$. The plane-wave overlaps supply the single factor of $1/(2\pi)$ in the expanded integral.

### PDF page 130

#### Commutator of position and wave number

In the position representation, $Xf=xf(x)$ and $Kf=-i\,df/dx$. The two products give

$$
(XKf)(x)=-ix\frac{df}{dx},\qquad
(KXf)(x)=-i\frac{d}{dx}\bigl(xf(x)\bigr).
$$

Subtracting and applying the product rule gives

$$
([X,K]f)(x)=-ixf'(x)+ixf'(x)+if(x)=if(x),
\qquad [X,K]=iI.
$$

### PDF page 131

#### Shankar §1.8. The eigenvalue problem

An operator $\Omega$ sends $\lvert V\rangle$ to $\lvert V'\rangle$. When $\Omega\lvert V\rangle=\omega\lvert V\rangle$ for a nonzero $\lvert V\rangle$, the ket is an eigenket and $\omega$ is its eigenvalue.

**Example 1.8.1.** Every nonzero ket is an eigenket of the identity, with eigenvalue $1$.

**Example 1.8.2.** For a normalized ket $\lvert V\rangle$, let $P_V=\lvert V\rangle\langle V\rvert$. Every nonzero ket parallel to $\lvert V\rangle$ has eigenvalue $1$. Any nonzero perpendicular ket has eigenvalue $0$.

$$
P_V\lvert V_\perp\rangle
=\lvert V\rangle\langle V\mid V_\perp\rangle
=0\lvert V_\perp\rangle.
$$

A ket $\alpha\lvert V\rangle+\beta\lvert V_\perp\rangle$ with both components nonzero has no single eigenvalue under $P_V$.

**Example 1.8.3.** A rotation through $\pi/2$ about the $x$ axis leaves the basis vector $\lvert 1\rangle$ fixed, so $R(\pi/2,\hat{\mathbf i})\lvert 1\rangle=\lvert 1\rangle$. The rotation has two additional eigendirections in $V^3(\mathbb C)$ with complex eigenvalues.

#### Characteristic equation

Rewrite the eigenvalue equation as $(\Omega-\omega I)\lvert V\rangle=\lvert 0\rangle$. Suppose $(\Omega-\omega I)^{-1}$ exists and apply it to both sides.

### PDF page 132

If the inverse existed, then $\lvert V\rangle=(\Omega-\omega I)^{-1}\lvert 0\rangle=\lvert 0\rangle$, contradicting the nonzero eigenket requirement. Recall that $M^{-1}=\operatorname{adj}(M)/\det M$ when the determinant is nonzero. Here $\operatorname{adj}(M)$ denotes the transpose of the cofactor matrix. Thus nonzero eigenvectors require $\det(\Omega-\omega I)=0$.

Project onto $\langle i\rvert$ and insert the identity $I=\sum_{j=1}^n\lvert j\rangle\langle j\rvert=\sum_{j=1}^n P_j$ before $\lvert V\rangle$.

$$
\sum_{j=1}^n\langle i\mid\Omega-\omega I\mid j\rangle\langle j\mid V\rangle
=\sum_{j=1}^n(\Omega_{ij}-\omega\delta_{ij})V_j=0.
$$

The determinant gives the characteristic polynomial $P^n(\omega)=\sum_{m=0}^n c_m\omega^m$. Its roots solve the characteristic equation $P^n(\omega)=0$.

#### Diagonalization of Hermitian matrices

Consider a Hermitian operator $\Omega$ on $V^n(\mathbb C)$ with orthonormal basis $\lvert 1\rangle,\ldots,\lvert n\rangle$. In an orthonormal basis of its eigenkets $\lvert\omega_1\rangle,\ldots,\lvert\omega_n\rangle$, the matrix is diagonal. The operator $U$ that maps $\lvert i\rangle$ to $\lvert\omega_i\rangle$ is unitary because it maps one orthonormal basis to another. Its columns contain the eigenvector components in the original basis. Every Hermitian matrix in $V^n(\mathbb C)$ can be diagonalized by such a unitary change of basis.

### PDF page 133

In a passive change of basis, the unitary matrix $U$ built from the orthonormal eigenvectors of a Hermitian $\Omega$ makes $U^\dagger\Omega U$ diagonal.

#### Exercise 1.8.1. Eigenvalues and normalized eigenvectors

Find the eigenvalues and normalized eigenvectors of

$$
\Omega=\begin{bmatrix}1&3&1\\0&2&0\\0&1&4\end{bmatrix},
\qquad
\Omega^\dagger=\begin{bmatrix}1&0&0\\3&2&1\\1&0&4\end{bmatrix}.
$$

The two matrices differ, so $\Omega$ is non-Hermitian. Subtracting $\omega I$ and expanding the determinant gives

$$
\Omega-\omega I=\begin{bmatrix}1-\omega&3&1\\0&2-\omega&0\\0&1&4-\omega\end{bmatrix},
\qquad
\det(\Omega-\omega I)=(1-\omega)(2-\omega)(4-\omega).
$$

The roots are $\omega_1=1$, $\omega_2=2$, and $\omega_3=4$. For $\omega_1=1$, the eigenvector equation is

$$
\begin{bmatrix}0&3&1\\0&1&0\\0&1&3\end{bmatrix}
\begin{bmatrix}v_1\\v_2\\v_3\end{bmatrix}
=\begin{bmatrix}0\\0\\0\end{bmatrix}.
$$

The equations $3v_2+v_3=0$, $v_2=0$, and $v_2+3v_3=0$ leave $v_1$ free. A normalized choice is $(1,0,0)^{\mathsf T}$. Repeat for the other eigenvalues using Mathematica. For $\omega_2=2$, the vector $(-5,-2,1)^{\mathsf T}$ becomes $(-5,-2,1)^{\mathsf T}/\sqrt{30}$ upon normalization.

### PDF page 134

For the eigenvalue $\omega_3=4$, the vector $(1,0,3)^{\mathsf T}$ gives the normalized eigenvector

$$
\mathbf V_3=\frac{1}{\sqrt{10}}\begin{bmatrix}1\\0\\3\end{bmatrix}.
$$

### PDF page 135

#### Sakurai 1.2. Expansion in Pauli matrices

**(a)** Write $X=a_0I+\boldsymbol\sigma\cdot\mathbf a$, where $\mathbf a=(a_1,a_2,a_3)$ and $\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)$ consists of the Pauli matrices.

$$
\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.
$$

Expanding the sum gives

$$
X=\begin{pmatrix}a_0+a_3&a_1-ia_2\\a_1+ia_2&a_0-a_3\end{pmatrix},
\qquad
\operatorname{Tr}X=2a_0.
$$

The notes use Mathematica to compute the traces of the Pauli products. Evaluating $\operatorname{Tr}(\sigma_k X)$ component by component gives $2a_1$, $2a_2$, and $2a_3$, respectively. Thus $a_k=\operatorname{Tr}(\sigma_k X)/2$ for $k=1,2,3$, with $\sigma_1=\sigma_x$, $\sigma_2=\sigma_y$, and $\sigma_3=\sigma_z$.

**(b)** Solve for the coefficients from the four entries of $X$.

$$
a_0=\frac{X_{11}+X_{22}}{2},\qquad
a_1=\frac{X_{12}+X_{21}}{2},\qquad
a_2=\frac{X_{21}-X_{12}}{2i},\qquad
a_3=\frac{X_{11}-X_{22}}{2}.
$$

### PDF page 136

#### Shankar example 4.2.4. Gaussian wave packet

Expand the ket in the position basis and assume a Gaussian profile centered at $a$ with width parameter $\Delta>0$.

$$
\lvert\psi\rangle=\int_{-\infty}^{\infty}\lvert x\rangle\langle x\mid\psi\rangle\,dx
=\int_{-\infty}^{\infty}\lvert x\rangle\psi(x)\,dx,
\qquad
\psi(x)=Ae^{-(x-a)^2/(2\Delta^2)}.
$$

![[Kyle Kabasares - Quantum Mechanics - Gaussian wave packet in position and momentum.png|**Fig. 64** The position-space amplitude is centered at $a$, and the momentum-space amplitude is centered at zero.]]

Normalize the state.

$$
1=\langle\psi\mid\psi\rangle
=\int_{-\infty}^{\infty}\langle\psi\mid x\rangle\langle x\mid\psi\rangle\,dx
=\int_{-\infty}^{\infty}\lvert\psi(x)\rvert^2\,dx
=\lvert A\rvert^2\sqrt{\pi\Delta^2}.
$$

Choose $A=(\pi\Delta^2)^{-1/4}$, so $\psi(x)=(\pi\Delta^2)^{-1/4}e^{-(x-a)^2/(2\Delta^2)}$. The position operator multiplies this wavefunction by $x$.

$$
\langle x\mid X\mid\psi\rangle
=\int_{-\infty}^{\infty}\langle x\mid X\mid x'\rangle\langle x'\mid\psi\rangle\,dx'
=\int_{-\infty}^{\infty}x\delta(x-x')\psi(x')\,dx'=x\psi(x).
$$

The expectation value follows by inserting the position identity between the bra and $X$. With $y=x-a$,

$$
\begin{aligned}
\langle X\rangle
&=\langle\psi\mid X\mid\psi\rangle
=\int_{-\infty}^{\infty}\psi^*(x)x\psi(x)\,dx\\
&=\frac{1}{\sqrt{\pi\Delta^2}}\int_{-\infty}^{\infty}(y+a)e^{-y^2/\Delta^2}\,dy=a.
\end{aligned}
$$

The odd part integrates to zero. The expectation integral uses the squared normalization factor, since it contains both $\psi^*$ and $\psi$.

### PDF page 137

Calculate the position uncertainty about the mean $\langle X\rangle=a$.

$$
\begin{aligned}
\Delta X
&=\left[\langle\psi\mid(X-\langle X\rangle I)^2\mid\psi\rangle\right]^{1/2}\\
&=\left[\langle X^2\rangle-2\langle X\rangle\langle\psi\mid X\mid\psi\rangle+\langle X\rangle^2\right]^{1/2}\\
&=\left[\langle X^2\rangle-a^2\right]^{1/2}.
\end{aligned}
$$

For the normalized Gaussian,

$$
\langle X^2\rangle
=\frac{1}{\sqrt{\pi\Delta^2}}\int_{-\infty}^{\infty}
e^{-(x-a)^2/(2\Delta^2)}x^2e^{-(x-a)^2/(2\Delta^2)}\,dx
=\frac{\Delta^2}{2}+a^2.
$$

Hence $\Delta X=\Delta/\sqrt{2}$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mathcal L}$ | $\unit{J}$ | Lagrangian | Function of position and velocity entering the Euler–Lagrange equation. |
| $\energy{H}$ | $\unit{J}$ | Hamiltonian | Energy function in the classical review and energy operator in quantum mechanics. |
| $\mechanical{p}_x$ | $\unit{kg\,m/s}$ | Momentum along x | Canonical momentum in the classical Hamiltonian equations. |
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
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Proportionality between restoring force and displacement. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Equals $mr^2$ for the particle on a ring. |
| $\mechanical{\mathbf L}$, $\mechanical{\boldsymbol\ell}$ | $\unit{J\,s}$ | Angular momentum | Classical orbital value $\mathbf r\times\mechanical{\mathbf p}$. |
| $a_0$ | $\unit{m}$ | Bohr radius | Characteristic length in the hydrogen radial wavefunctions. |
| $\mu$ | $\unit{kg}$ | Reduced mass | Effective mass in the two-body hydrogenic problem. |
| $Z$ | $1$ | Atomic number | Nuclear charge in units of the elementary charge. |
