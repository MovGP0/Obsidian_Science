---
title: "Quantum states, eigenfunctions, and time evolution problems"
---

> [!TLDR]
> Use eigenfunction expansions and normalization to relate measurable probabilities to wavefunctions and their time dependence.

## Worked lecture material

##### Introduction

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

##### Experiments that led to quantum mechanics

- The Stern–Gerlach experiment showed quantized spin projections.
- The photoelectric effect demonstrated the particle-like behavior of light.
- Young's double-slit experiment illustrates wave–particle duality.

The margin below the Stern–Gerlach heading mentions Rayleigh–Jeans and the ultraviolet catastrophe.

![[Kyle Kabasares - Quantum Mechanics - Introductory Intensity Spectrum.png|**Fig. 2** Intensity versus frequency sketch beside the reference to Rayleigh–Jeans.]]

##### Postulates of quantum mechanics

An observable is a measurable quantity and is represented by an operator. In the one-dimensional time-independent Schrödinger equation, the Hamiltonian acts on the wavefunction:

$$
\hat H=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}+\energy{V}(x),
\qquad
\hat H\psi=\energy{E}\psi.
$$

##### Postulate 1

The wavefunction $\Psi(\vec q,t)$ fully describes the pure state of a system, such as a particle in a box or in an optical trap. The spatial coordinates are collected into $\vec q$. For one particle in one dimension, $\vec q$ consists of $x$. For two particles in one dimension, it contains $x_1,x_2$.

For a separable state, $\Psi(\vec q,t)=\psi(\vec q)\phi(t)$. The capital $\Psi$ denotes the time-dependent wavefunction, while the lowercase $\psi$ denotes its time-independent spatial part.

##### Postulate 4 — Born interpretation

The probability of finding the particle in a volume element $\mathrm{d}\tau$ at $\vec r$ is proportional to $\lvert\psi(\vec r)\rvert^2\,\mathrm{d}\tau$. For a normalized wavefunction this expression gives the probability directly. The wavefunction is the probability amplitude.

##### Probability density and normalization

The amplitude $\psi(\vec r)$ can be negative or complex. Its squared magnitude $\lvert\psi(\vec r)\rvert^2=\psi^*(\vec r)\psi(\vec r)$ is real and nonnegative, and it gives the probability density for a normalized state. A normalizable wavefunction satisfies

$$
\int_{\text{all space}}\lvert\psi(\vec r)\rvert^2\,\mathrm{d}\tau<\infty.
$$

For the localized one-dimensional states under discussion, $\psi(x)\to0$ as $x\to\pm\infty$. A wavefunction is normalized when this integral equals one. Multiplying by a suitable constant, which may be complex, achieves normalization.

For a particle in a box, the notes give a spatial eigenfunction $A\sin(nkx)$ at level $n$. The handwritten prefactor reads $\sqrt{\pi/L}$. For a box on $0<x<L$ with $k=\pi/L$, unit normalization gives $A=\sqrt{2/L}$.

![[Kyle Kabasares - Quantum Mechanics - Real and Imaginary Wavefunction.png|**Fig. 3** Example sketches of the real and imaginary parts of a one-dimensional wavefunction.]]

##### Dirac delta function

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

##### ) — Operators and eigenfunctions

A linear operator distributes over sums, $\hat\Omega(a+b)=\hat\Omega a+\hat\Omega b$, and scalar factors pass through it. Multiplication or division by a fixed nonzero scalar, differentiation, and integration are linear. The natural logarithm is nonlinear.

An eigenfunction $a$ of $\hat\Omega$ satisfies $\hat\Omega a=ca$, with eigenvalue $c$. The discussion mentions three fundamental modes of water as examples of three eigenfunctions. A general wavefunction can be expanded in a complete basis of eigenfunctions, $\psi=\sum_n c_n f_n$, even when it is not itself an eigenfunction of $\hat\Omega$. The kinetic energy is $K=\tfrac12mv^2=p^2/(2m)$.

##### ) — Representations

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

##### Hamiltonian and commutators

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

##### Hermiticity

$$
\int f_m^*\hat\Omega f_n\,\mathrm{d}x
=\left(\int f_n^*\hat\Omega f_m\,\mathrm{d}x\right)^*.
$$

For an expansion $g=\sum_n c_n f_n$, the page begins applying the operator as $\hat\Omega g=\hat\Omega\sum_n c_n f_n$.

The expansion $g=c_1f_1+c_2f_2+c_3f_3+\cdots$ uses eigenfunctions satisfying equations of the form $\hat\Omega f=af$. The overlap integral $S=\int f_m^* f_n\,\mathrm{d}x$ measures the overlap of two functions, like a dot product.

##### ) — Orthogonality

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

Eigenfunctions belonging to distinct eigenvalues of a Hermitian operator are orthogonal.

##### ) — Postulate 2

Observables are represented by Hermitian operators. The Cartesian position and momentum operators obey

$$
[\hat q,\hat p_{q'}]=i\hbar\delta_{qq'},\qquad
[\hat q,\hat q']=0,\qquad
[\hat p_q,\hat p_{q'}]=0.
$$

Here $q,q'$ run over $x,y,z$, and the Kronecker delta is one for equal indices and zero otherwise. Hermitian operators have real eigenvalues and orthogonal eigenfunctions for distinct eigenvalues.

![[Kyle Kabasares - Quantum Mechanics - Cartesian Commutation Relations Sketch.png|**Fig. 5** Diagram linking the Cartesian position and momentum components.]]

##### Postulate 3 — Outcome of measurement

For a system in state $\psi$, the mean value of an observable over repeated measurements on identically prepared systems is the expectation value of the corresponding operator.

$$
\langle\hat\Omega\rangle
=\frac{\int \psi^*\hat\Omega\psi\,\mathrm{d}\tau}{\int\psi^*\psi\,\mathrm{d}\tau}.
$$

The denominator accounts for the normalization of the wavefunction.

##### Position measurement and expectation values

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

##### Expectation value in an eigenbasis

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

##### Postulate 3′ — Single measurement

In the normalized expansion, the probability of measuring a nondegenerate eigenvalue $\omega_n$ is $\lvert c_n\rvert^2$. If $\psi$ is already an eigenfunction with eigenvalue $\omega$, the measurement yields $\omega$ with certainty.

The example begins with a normalized state $\psi$ and an operator $\hat A$ with eigenfunctions $f_1,f_2,f_3,\ldots$ and corresponding eigenvalues $a_1,a_2,a_3,\ldots$.

##### Measurement example

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

##### Time evolution

The wavefunction evolves according to the time-dependent Schrödinger equation. In one dimension,

$$
i\hbar\frac{\partial\Psi}{\partial t}=\hat H\Psi,
\qquad
\hat H=-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2}
+\energy{V}(x,t).
$$

The potential can depend on both time and position.

##### Separating the Schrödinger equation

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

##### )

The lecture recalls the separation for $V=V(x)$ and labels the spatial equation the standing-wave equation. Separating the time equation gives $\int\mathrm{d}\phi/\phi=-(iE/\hbar)\int\mathrm{d}t$.

##### Time dependence of a stationary state

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

##### Standard deviation and probability density

Quantum mechanics is fundamentally probabilistic. The standard deviation is the root mean square deviation from the mean:

$$
\sigma_x=\sqrt{\langle x^2\rangle-\langle x\rangle^2}
=\sqrt{\langle(\Delta x)^2\rangle},\qquad
\Delta x=x-\langle x\rangle.
$$

For a discrete distribution with probabilities $P_i$, $\langle x\rangle=\sum_i x_iP_i$. In the continuous limit, $P_i$ corresponds to $p(x_i)\,\mathrm{d}x$, and $\langle x\rangle=\int_{-\infty}^{\infty}xp(x)\,\mathrm{d}x$.

For a normalized position-space wavefunction, $p(x)=\lvert\psi(x)\rvert^2$ and $\langle f(x)\rangle=\int_{-\infty}^{\infty}f(x)\lvert\psi(x)\rvert^2\,\mathrm{d}x$.

##### Probability distribution for a falling rock

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

##### Falling rock

Since $x=\tfrac12gt^2$ and $h=\tfrac12gT^2$, $t=\sqrt{2x/g}$ and $T=\sqrt{2h/g}$. Thus

$$
p(x)=\frac1{\sqrt{2h/g}}\frac1{g\sqrt{2x/g}}
=\frac1{2\sqrt{hx}}\quad(0<x<h).
$$

Recall $\mathrm{d}x/\mathrm{d}t=\lim_{\Delta t\to0}\Delta x/\Delta t$.

##### Waves

The page recalls the time-independent Schrödinger equation, $-\hbar^2\psi''/(2m)+V(x)\psi=E\psi$. A wave is a self-propagating disturbance, often in a medium. An initial profile $y=f(x)$ propagating to the right at speed $v$ is $y(x,t)=f(x-vt)$.

![[Kyle Kabasares - Quantum Mechanics - Rightward Traveling Wave Profile.png|**Fig. 9** A pulse initially centered near zero and later displaced to the right.]]

A Gaussian pulse has $f(x)=Ae^{-x^2/(2\sigma^2)}$. It is symmetric, tends to zero at both infinities, and its width is set by $\sigma$.

##### Traveling Gaussian pulse

The profile $y(x,t)=Ae^{-(x-vt)^2/(2\sigma^2)}$ is a traveling wave packet. Such localized packets can be normalized.

##### Sinusoidal wave

The initial profile $f(x)=A\sin(2\pi x/\lambda)$ repeats every wavelength. A right-moving profile is

$$
y(x,t)=f(x-vt)=A\sin\left[\frac{2\pi}{\lambda}(x-vt)\right]
=A\sin(kx-\omega t).
$$

Here $k=2\pi/\lambda$ is the wave number and $\omega=2\pi/T$. The phase velocity is $v=\lambda/T=\omega/k$.

**)**

Topics listed are Schrödinger's cat, wave–particle duality, tunneling, and review of homework 4.

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mathcal L}$ | $\unit{J}$ | Lagrangian | Function of position and velocity entering the Euler–Lagrange equation. |
| $\energy{H}$ | $\unit{J}$ | Hamiltonian | Energy function in the classical review and energy operator in quantum mechanics. |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent energy term in the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy eigenvalue | Energy associated with a stationary state. |
| $\Psi$ | $\unit{m^{-3/2}}$ in three dimensions | Position-space wavefunction | Probability amplitude for one particle. Its squared magnitude is a probability density. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
| $\mechanical{p}_x$ | $\unit{kg\,m/s}$ | Momentum along x | Canonical momentum in the classical Hamiltonian equations. |
