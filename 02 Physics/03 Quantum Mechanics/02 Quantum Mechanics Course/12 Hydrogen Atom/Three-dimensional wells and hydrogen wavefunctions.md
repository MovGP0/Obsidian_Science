---
title: "Three-dimensional wells and hydrogen wavefunctions"
---

> [!TLDR]
> Separate the Schrödinger equation in Cartesian and spherical coordinates and use the resulting radial and angular equations.

## Worked lecture material

##### The Schrödinger equation in three dimensions

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

The time equation gives $dT/dt=-i\energy{E}T/\hbar$, so $T(t)=e^{-i\energy{E}t/\hbar}$ with the constant absorbed into the spatial wavefunction.

##### Three-dimensional time-independent equation

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

##### Separation in Cartesian coordinates

Put $\psi(x,y,z)=X(x)Y(y)Z(z)$. In the Laplacian, each derivative acts on its matching factor, yielding $YZX''+XZY''+XYZ''$. Divide the equation by $XYZ$ to obtain

$$
-\frac{\hbar^2}{2m}\left(\frac{X''}{X}+\frac{Y''}{Y}+\frac{Z''}{Z}\right)
+\energy{V(x,y,z)}=\energy{E}.
$$

Separation requires a suitable potential. In a region of constant potential each derivative ratio depends on just one independent coordinate and must be constant. Thus $-(\hbar^2/2m)X''/X$ is a separation constant, giving an ordinary differential equation for $X$, and likewise for $Y$ and $Z$.

##### Separation of variables in spherical coordinates

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

##### Angular equation

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

##### Azimuthal equation

$$
\frac{1}{\Phi}\frac{d^2\Phi}{d\phi^2}=-m^2,
\qquad
\Phi(\phi)=e^{im\phi}.
$$

The condition $\Phi(2\pi)=\Phi(0)$ implies $e^{2\pi im}=1$, so $m=0,\pm1,\pm2,\ldots$.

##### Polar equation

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

The third derivative of $x^4-2x^2+1$ is $24x$. Thus in the notes' associated Legendre convention,

$$
P_2^1(x)=\frac{\sqrt{1-x^2}}{8}\,(24x)=3x\sqrt{1-x^2},
\qquad
P_2^1(\cos\theta)=3\sin\theta\cos\theta.
$$

The angular function for $\ell=2,m=1$ is proportional to $3e^{i\phi}\sin\theta\cos\theta$.

##### Spherical harmonics

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

##### Radial behavior

For $\psi=R(r)Y_\ell^m(\theta,\phi)$, the radial equation is

$$
\frac{d}{dr}\left(r^2\frac{dR}{dr}\right)
-\frac{2mr^2}{\hbar^2}\big[\energy{V(r)}-\energy{E}\big]R
=\ell(\ell+1)R.
$$

Simplify with $u(r)=rR(r)$, so $R=u/r$ and $dR/dr=u'/r-u/r^2$.

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

##### Infinite spherical well

$$
\energy{V(r)}=\begin{cases}0,&r\le a,\\ \infty,&r>a.\end{cases}
$$

Outside, $\psi=u=0$. At the wall $\psi(a)=0$ and $u(a)=0$. Inside, with $\signal{k}^2=2m\energy{E}/\hbar^2$,

$$
u''=\left[\frac{\ell(\ell+1)}{r^2}-\signal{k}^2\right]u.
$$

For $\ell=0$, $u''=-\signal{k}^2u$, so $u=A\sin(\signal{k}r)+B\cos(\signal{k}r)$ and $R=u/r$. The handwritten second sine is a cosine, as required by the two independent solutions. The cosine divided by $r$ diverges at the origin, so $B=0$.

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

##### Hydrogen atom wavefunctions

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

**Problem 7.** Find $\phi(\signal{k})$ from the given $\Psi(x,0)$.

$$
\phi(\signal{k})=\frac1{\sqrt{2\pi}}\int_{-\infty}^{+\infty}\Psi(x,0)e^{-i\signal{k}x}\,dx.
$$

Substitute the supplied wavefunction and integrate. The notes suggest integral tables, trigonometric identities, and Euler's formula.

##### Problem 15(a)

For the harmonic oscillator, raising and lowering operators produce new solutions of the Schrödinger equation at discrete energies above or below the starting state. They provide an algebraic way to find excited states of the oscillator potential.

**Problem 37.** The wavefunction is written using a radial part and spherical harmonics. Its two coefficients are $1/\sqrt3$ and $\sqrt2/\sqrt3$. Their squared moduli sum to $1/3+2/3=1$. The factor $R_{21}$ identifies $n=2,\ell=1$, which helps determine angular momentum. The notes ask how to interpret $Y_1^0$, $Y_1^1$, and recall the action of the relevant operators.

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
| $R$, $T$ | $1$ | Reflection and transmission coefficients | Ratios of reflected and transmitted flux magnitudes to the incident flux magnitude. |
| $a_0$ | $\unit{m}$ | Bohr radius | Characteristic length in the hydrogen radial wavefunctions. |
| $Z$ | $1$ | Atomic number | Nuclear charge in units of the elementary charge. |
