---
title: "Harmonic oscillator wavefunctions and ladder calculations"
---

> [!TLDR]
> Use asymptotics or ladder operators to find oscillator states and compare their boundary behavior with square-well states.

## Worked lecture material

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

##### Harmonic oscillator

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

The harmonic-oscillator solutions of the time-independent equation are stationary states. The full state is $\Psi(x,t)=\psi(x)e^{-i\energy{E}t/\hbar}$. The spatial function should decay in the two outer regions. The lecture considers three approaches.

##### Approach 1 — Large $\lvert x\rvert$

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

##### Algebraic approach with ladder operators

$$
\hat H=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12m\signal{\omega}^2x^2
=\frac{1}{2m}\left[\hat p_x^2+(m\signal{\omega}\hat x)^2\right].
$$

For commuting numbers, $a^2-b^2=(a+b)(a-b)$ and $a^2+b^2=(a+ib)(a-ib)$. For operators, the commutator is $[a,b]=ab-ba$.

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

##### Curvature

$$
\frac{d^2\psi}{dx^2}=-\frac{2m}{\hbar^2}(\energy{E}-\energy{V})\psi
=-\signal{k}^2\psi,
\qquad
\signal{k}=\frac{\sqrt{2m(\energy{E}-\energy{V})}}{\hbar}.
$$

In the oscillatory region, larger $\energy{E}-\energy{V}$ gives greater curvature relative to $\psi$ and more rapid oscillations.

**Homework problem 4**

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

##### Expectation values

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

For the infinite well on $0<x<a$, $\langle x\rangle=a/2$ and $\energy{E_n}=\energy{E_0}n^2$, where $\energy{E_0}$ here is the constant multiplying $n^2$.

![[Kyle Kabasares - Quantum Mechanics - Well Wavefunctions and Densities.png|**Fig. 30** Wavefunctions in gray and probability densities in blue for $n=1$ and $n=2$.]]

**Harmonic oscillator**

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

Use $\int_{-\infty}^{+\infty}e^{-ax^2}\,dx=\sqrt{\pi/a}$ for $a>0$. With $\hbar=h/(2\pi)$,

$$
1=\int_{-\infty}^{+\infty}\lvert\psi_0\rvert^2\,dx
=A_0^2\int_{-\infty}^{+\infty}e^{-m\signal{\omega}x^2/\hbar}\,dx
=A_0^2\sqrt{\frac{\hbar\pi}{m\signal{\omega}}},
\qquad
A_0=\left(\frac{m\signal{\omega}}{\hbar\pi}\right)^{1/4}.
$$

##### Ground-state energy

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

##### Power series

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

Iterating the recurrence for $y''+y=0$ gives

$$
\begin{aligned}
a_2&=-\frac{a_0}{2\cdot1},&
a_4&=-\frac{a_2}{4\cdot3}=\frac{(-1)^2a_0}{4!},\\
a_3&=-\frac{a_1}{3\cdot2},&
a_5&=-\frac{a_3}{5\cdot4}=\frac{(-1)^2a_1}{5!}.
\end{aligned}
$$

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

##### Harmonic-oscillator asymptotics

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

Substituting $\psi=e^{-y^2/2}f(y)$ into $\psi''-y^2\psi=-\lambda\psi$ gives

$$
f''-2yf'+(\lambda-1)f=0.
$$

For $f(y)=\sum_{n=0}^{\infty}a_ny^n$, the coefficients satisfy

$$
(n+2)(n+1)a_{n+2}-a_n(2n-\lambda+1)=0.
$$

##### Harmonic oscillator and infinite well

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

##### Midterm topics

- Raising and lowering operators
- Wavefunctions
- Finite and infinite wells
- Reflection and transmission coefficients
- Chapters 1, 2, and 3
- Hamiltonian expressed in raising and lowering operators

##### Finite and infinite wells

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

##### Strategy for wavefunctions

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

A scattering particle incident on a finite well with zero potential outside has $\energy{E}>0$.

![[Kyle Kabasares - Quantum Mechanics - Scattering Energy Above a Square Well.png|**Fig. 34** The scattering energy is above the exterior potential of a centered finite well.]]

For symmetric wells, choose even or odd solutions. An even function obeys $f(-a)=f(a)$, as for cosine. An odd function obeys $f(-a)=-f(a)$, as for sine or $x$.

![[Kyle Kabasares - Quantum Mechanics - Symmetric Double Well.png|**Fig. 35** Two narrow attractive wells placed symmetrically at $-a$ and $+a$.]]

Practice sketching the potentials of different systems. In a symmetric region, the even and odd combinations are

$$
\psi_{\mathrm{even}}=B(e^{i\signal{k}x}+e^{-i\signal{k}x}),
\qquad
\psi_{\mathrm{odd}}=B(e^{i\signal{k}x}-e^{-i\signal{k}x}).
$$

![[Kyle Kabasares - Quantum Mechanics - Double Well Even and Odd States.png|**Fig. 36** Even and odd wavefunctions sketched for wells centered at $-a$ and $a$.]]

##### Boundary conditions

$\psi$ is continuous. Its derivative is continuous across a finite step, with separate rules at delta potentials and infinite walls. For symmetric potentials, parity lets us impose the interface conditions on one side.

##### Delta-function discontinuity

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

## Source

Kyle Kabasares, *Quantum Mechanics (Physics 137, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\hbar$ | $\unit{J\,s}$ | Reduced Planck constant | Planck constant divided by $2\pi$. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent energy term in the Hamiltonian. |
| $\energy{E}$ | $\unit{J}$ | Energy eigenvalue | Energy associated with a stationary state. |
| $\Psi$ | $\unit{m^{-3/2}}$ in three dimensions | Position-space wavefunction | Probability amplitude for one particle. Its squared magnitude is a probability density. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | Spatial phase change per unit distance. |
| $\signal{\omega}$ | $\unit{rad/s}$ | Angular frequency | Temporal phase change per unit time. |
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
| $\signal{\kappa}$ | $\unit{m^{-1}}$ | Decay constant | Reciprocal of the amplitude penetration depth in the forbidden region. |
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Proportionality between restoring force and displacement. |
| $a_0$ | $\unit{m}$ | Bohr radius | Characteristic length in the hydrogen radial wavefunctions. |
