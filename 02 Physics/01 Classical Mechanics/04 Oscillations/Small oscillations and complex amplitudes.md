---
title: "Small oscillations and complex amplitudes"
---

> [!TLDR]
> Linearize oscillatory motion near equilibrium and use complex exponentials to organize the real solutions.

## Worked lecture material

##### Gradient and coordinate increments

The handwritten date appears to end in 2014, although it falls between the March 2015 lectures. For a scalar function $f$, its Cartesian differential and gradient are

$$
\begin{aligned}
\mathrm df&=\nabla f\cdot\mathrm d\mechanical{\vec r}
=\frac{\partial f}{\partial\mechanical{x}}\,\mathrm d\mechanical{x}
+\frac{\partial f}{\partial\mechanical{y}}\,\mathrm d\mechanical{y}
+\frac{\partial f}{\partial\mechanical{z}}\,\mathrm d\mechanical{z},\\
\nabla f&=\hat x\frac{\partial f}{\partial\mechanical{x}}
+\hat y\frac{\partial f}{\partial\mechanical{y}}
+\hat z\frac{\partial f}{\partial\mechanical{z}}.
\end{aligned}
$$

The notes box the displacement in cylindrical and spherical coordinates. In the cylindrical formula $\theta$ is azimuth. In the spherical formula $\theta$ is polar angle and $\phi$ is azimuth.

$$
\begin{aligned}
\mathrm d\mechanical{\vec r}
&=\mathrm d\mechanical{r}\,\hat r+\mechanical{r}\,\mathrm d\theta\,\hat\theta
+\mathrm d\mechanical{z}\,\hat z
&&\text{(cylindrical)},\\
\mathrm d\mechanical{\vec r}
&=\mathrm d\mechanical{r}\,\hat r+\mechanical{r}\,\mathrm d\theta\,\hat\theta
+\mechanical{r}\sin\theta\,\mathrm d\phi\,\hat\phi
&&\text{(spherical)}.
\end{aligned}
$$

##### Simple pendulum and energy

For $N$ masses subject to $k$ independent position constraints, the notes give $3N-k$ degrees of freedom. A single pendulum constrained to a plane and to a fixed distance from its pivot has $3(1)-2=1$. The sketch uses angle $\phi$ from the downward vertical and length $\mechanical{\ell}$. Choose $\energy{U}(0)=0$. The speed is $\mechanical{\ell}\lvert\dot\phi\rvert$, giving

$$
\energy{E}=\energy{T}+\energy{U}
=\tfrac12\mechanical{m}\mechanical{\ell}^2\dot\phi^2
+\mechanical{m}\mechanical{g}\mechanical{\ell}(1-\cos\phi)
=\text{constant}.
$$

The page begins differentiating the energy with respect to time and notes that $\mathrm d(\dot\phi^2)/\mathrm dt=2\dot\phi\ddot\phi$.

##### Pendulum equation and small oscillations

Differentiate the conserved energy.

$$
0=\frac{\mathrm d\energy{E}}{\mathrm dt}
=\mechanical{m}\mechanical{\ell}^2\dot\phi\ddot\phi
+\mechanical{m}\mechanical{g}\mechanical{\ell}\sin\phi\,\dot\phi.
$$

On a moving segment, cancel $\dot\phi$. The torque equation $\mechanical{I}\ddot\phi=\mechanical{F}_{\mathrm{tan}}\mechanical{\ell}$, with $\mechanical{I}=\mechanical{m}\mechanical{\ell}^2$ and $\mechanical{F}_{\mathrm{tan}}=-\mechanical{m}\mechanical{g}\sin\phi$, gives the same result and also applies at the turning points.

$$
\ddot\phi=-\frac{\mechanical{g}}{\mechanical{\ell}}\sin\phi.
$$

For small angles, with about $10^\circ$ given as a practical scale in the notes, $\sin\phi\simeq\phi$. The resulting motion is

$$
\ddot\phi\simeq-\signal{\omega}^2\phi,
\qquad
\phi(t)=A\cos(\signal{\omega}t)+B\sin(\signal{\omega}t),
\qquad
\signal{T}=\frac{2\pi}{\signal{\omega}}
=2\pi\sqrt{\frac{\mechanical{\ell}}{\mechanical{g}}}.
$$

The boxed period fixes $\signal{\omega}=\sqrt{\mechanical{g}/\mechanical{\ell}}$. The line above it appears to omit the square root.

##### Cube rolling on a fixed cylinder

A cube of side $2\mechanical{b}$ and center $C$ is placed on a fixed horizontal cylinder of radius $\mechanical{r}$ and center $O$. Initially $C$ is directly above $O$. Contact and rolling without slipping restrict the motion in the plane to one degree of freedom, represented by $\theta$. The no-slip condition equates the rolled length along the face to the arc length $\mechanical{r}\theta$.

![[Kyle Kabasares - Classical Mechanics - Cube rolling on a cylinder.png|**Fig. 5** The cube rolls without slipping. The geometry gives the height of its center above the cylinder center.]]

The notes give the potential energy from the height of $C$, then differentiate it twice.

$$
\begin{aligned}
\energy{U}(\theta)
&=\mechanical{m}\mechanical{g}[(\mechanical{r}+\mechanical{b})\cos\theta+
\mechanical{r}\theta\sin\theta],\\
\energy{U}'(\theta)
&=\mechanical{m}\mechanical{g}(\mechanical{r}\theta\cos\theta-\mechanical{b}\sin\theta),\\
\energy{U}''(\theta)
&=\mechanical{m}\mechanical{g}[(\mechanical{r}-\mechanical{b})\cos\theta-
\mechanical{r}\theta\sin\theta].
\end{aligned}
$$

A rough sketch beside the calculation illustrates extrema of a potential as a function of angle.

##### Curl in cylindrical coordinates

The page sets up a curl calculation for $\electric{\vec E}=\electric{E}_\rho\hat\rho+\electric{E}_\phi\hat\phi+\electric{E}_z\hat z$. The first row of the proposed determinant contains the cylindrical basis vectors. The second row labels the three directions of differentiation. Unlike the fixed Cartesian basis, the cylindrical basis depends on $\phi$.

$$
\hat\rho=\hat x\cos\phi+\hat y\sin\phi,
\qquad
\hat\phi=-\hat x\sin\phi+\hat y\cos\phi,
\qquad
\frac{\partial\hat\rho}{\partial\phi}=\hat\phi.
$$

The page begins the basis derivative at the last expression. The $\phi$ derivative of a vector field must act on the basis vectors as well as on the components.

##### Electric circulation and induced emf

The rectangular-loop sketch marks two points $A$ and $B$ at the gap and indicates electric field directions around the loop. The page records both the zero circulation of an electrostatic field and the relation between circulation and curl.

$$
\oint_{\partial S}\electric{\vec E}\cdot\mathrm d\mechanical{\vec\ell}
=\int_S(\nabla\times\electric{\vec E})\cdot\mathrm d\mechanical{\vec A}.
$$

The integral is zero in electrostatics. For a changing magnetic flux through a fixed loop, the emf magnitude is $\lvert\electric{\mathcal E}\rvert=\lvert\mathrm d\magnetic{\Phi}/\mathrm dt\rvert$. For consistent orientation of the loop and surface, the signed relation is

$$
\oint_{\partial S}\electric{\vec E}\cdot\mathrm d\mechanical{\vec\ell}
=-\frac{\mathrm d\magnetic{\Phi}}{\mathrm dt},
\qquad
\magnetic{\Phi}=\int_S\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec A}.
$$

The last handwritten line drops the minus sign. The page also records Ampère’s law for a steady current, $\oint_{\partial S}\magnetic{\vec B}\cdot\mathrm d\mechanical{\vec\ell}=\magnetic{\mu}_0\electric{I}_{\mathrm{enc}}$.

##### Circular loop and changing flux

The sketches show a coil and a straight conductor with a circular field line. In the calculation alongside them, the flux is $\magnetic{\Phi}=\pi\mechanical{r}^2\magnetic{B}$, corresponding to a uniform changing field normal to a circular loop. With cylindrical symmetry the tangential electric field has constant magnitude around the loop.

$$
2\pi\mechanical{r}\lvert\electric{E}_\phi\rvert
=\pi\mechanical{r}^2\left\lvert\frac{\mathrm d\magnetic{B}}{\mathrm dt}\right\rvert,
\qquad
\lvert\electric{E}_\phi\rvert
=\frac{\mechanical{r}}2\left\lvert\frac{\mathrm d\magnetic{B}}{\mathrm dt}\right\rvert.
$$

The notes give the azimuthal field with a positive sign. For $\hat\phi$ oriented by the right-hand rule about the positive flux normal, the signed component has the minus sign of Faraday’s law.

##### Expanding the cylindrical basis

For $\vec A=A_\rho\hat\rho+A_\phi\hat\phi+A_z\hat z$, the scratch work rewrites the directional derivative operators in $\nabla\times\vec A$ by substituting $\hat\rho=\hat x\cos\phi+\hat y\sin\phi$ and $\hat\phi=-\hat x\sin\phi+\hat y\cos\phi$. Here the gradient’s directional operators are $\partial_\rho$, $\rho^{-1}\partial_\phi$, and $\partial_z$.

##### Virtual work and the shortest path

Under the heading “Principle of Virtual Work (D’Alembert’s Principle),” the lecture first reviews Newton’s equations in Cartesian and polar coordinates. The Cartesian components are $\mechanical{F}_x=\mechanical{m}\mechanical{\ddot x}$, $\mechanical{F}_y=\mechanical{m}\mechanical{\ddot y}$, and $\mechanical{F}_z=\mechanical{m}\mechanical{\ddot z}$. The planar polar components are

$$
\mechanical{\vec F}
=\mechanical{m}(\mechanical{\ddot r}-\mechanical{r}\dot\phi^2)\hat r
+\mechanical{m}(\mechanical{r}\ddot\phi+2\mechanical{\dot r}\dot\phi)\hat\phi.
$$

The next example asks why the shortest path between two points is a straight line. The sketch shows a general curve $\mechanical{y}(\mechanical{x})$ between the fixed endpoints. With $\mechanical{y}'=\mathrm d\mechanical{y}/\mathrm d\mechanical{x}$ and increasing $\mechanical{x}$, the length to minimize is

$$
\begin{aligned}
\mathrm d\mechanical{s}&=\sqrt{(\mathrm d\mechanical{x})^2+(\mathrm d\mechanical{y})^2}
=\sqrt{1+(\mechanical{y}')^2}\,\mathrm d\mechanical{x},\\
\mechanical{L}&=\int_1^2\mathrm d\mechanical{s}
=\int_{\mechanical{x}_1}^{\mechanical{x}_2}\sqrt{1+(\mechanical{y}')^2}\,\mathrm d\mechanical{x}.
\end{aligned}
$$

##### Differentiating a vector field in cylindrical coordinates

The notes write the curl as

$$
\nabla\times\vec A
=\hat\rho\times\partial_\rho\vec A
+\frac{\hat\phi}{\rho}\times\partial_\phi\vec A
+\hat z\times\partial_z\vec A.
$$

For derivatives with respect to $\rho$ or $z$, the derivatives of all three basis vectors vanish. Only the components need to be differentiated. The azimuthal basis derivatives are $\partial_\phi\hat\rho=\hat\phi$, $\partial_\phi\hat\phi=-\hat\rho$, and $\partial_\phi\hat z=0$. Hence

$$
\begin{aligned}
\partial_\rho\vec A&=(\partial_\rho A_\rho)\hat\rho
+(\partial_\rho A_\phi)\hat\phi+(\partial_\rho A_z)\hat z,\\
\partial_\phi\vec A&=(\partial_\phi A_\rho-A_\phi)\hat\rho
+(\partial_\phi A_\phi+A_\rho)\hat\phi+(\partial_\phi A_z)\hat z,\\
\partial_z\vec A&=(\partial_z A_\rho)\hat\rho
+(\partial_z A_\phi)\hat\phi+(\partial_z A_z)\hat z.
\end{aligned}
$$

The page stops at the point of taking the cross products. The displayed basis derivatives fix the cosine in the $y$ component of $\hat\phi$, which is written as a sine in one handwritten line.

##### Hooke’s law

The spring sketch shows compression, equilibrium, and extension. With $\mechanical{x}$ measured from equilibrium, the restoring force $\mechanical{F}_x(\mechanical{x})=-\mechanical{k}\mechanical{x}$ vanishes at $\mechanical{x}=0$.

$$
\energy{U}(\mechanical{x})
=-\int_0^{\mechanical{x}}\mechanical{F}_x(u)\,\mathrm du
=-\int_0^{\mechanical{x}}(-\mechanical{k}u)\,\mathrm du
=\frac12\mechanical{k}\mechanical{x}^2.
$$

##### Stability and the quadratic approximation

For the spring, the force is zero at $\mechanical{x}=0$, negative for $\mechanical{x}>0$, and positive for $\mechanical{x}<0$. Its potential has slope $\mechanical{k}\mechanical{x}$ and positive curvature $\mechanical{k}$, so the origin is a stable equilibrium. The two sketches compare the exact spring parabola with a general smooth potential that has a minimum at the origin.

For a general one-dimensional potential, expand about the equilibrium $\mechanical{x}_0$.

$$
\begin{aligned}
\energy{U}(\mechanical{x})
={}&\energy{U}(\mechanical{x}_0)+
\energy{U}'(\mechanical{x}_0)(\mechanical{x}-\mechanical{x}_0)\\
&+\tfrac12\energy{U}''(\mechanical{x}_0)(\mechanical{x}-\mechanical{x}_0)^2+\cdots.
\end{aligned}
$$

The linear term vanishes at equilibrium. Taking $\mechanical{x}_0=0$ and choosing $\energy{U}(0)=0$ gives $\energy{U}(\mechanical{x})\simeq\tfrac12\mechanical{k}\mechanical{x}^2$ with $\mechanical{k}=\energy{U}''(0)$, provided the curvature is positive.

##### Small tilt of the cube

The notes return to the cube on the fixed cylinder. For small $\theta$, use $\cos\theta=1-\theta^2/2+\theta^4/4!-\cdots\simeq1-\theta^2/2$ and $\sin\theta=\theta-\theta^3/3!+\cdots\simeq\theta$. Substitution in the potential gives, through second order,

$$
\begin{aligned}
\energy{U}(\theta)
&\simeq \mechanical{m}\mechanical{g}
\left[(\mechanical{r}+\mechanical{b})(1-\theta^2/2)+\mechanical{r}\theta^2\right]\\
&=\mechanical{m}\mechanical{g}(\mechanical{r}+\mechanical{b})
+\tfrac12\mechanical{m}\mechanical{g}(\mechanical{r}-\mechanical{b})\theta^2.
\end{aligned}
$$

##### Simple harmonic motion

The cube potential from [[#Stability and the quadratic approximation|the section on Stability and the quadratic approximation]] is a constant plus $\tfrac12\mechanical{k}_{\theta}\theta^2$ to second order, with $\mechanical{k}_{\theta}=\mechanical{m}\mechanical{g}(\mechanical{r}-\mechanical{b})$. The notes then turn to the translational spring with $\mechanical{F}_x=-\mechanical{k}\mechanical{x}$. Its second-order equation is

$$
\mechanical{\ddot x}=-\frac{\mechanical{k}}{\mechanical{m}}\mechanical{x}
=-\signal{\omega}^2\mechanical{x},
\qquad
\signal{\omega}=\sqrt{\frac{\mechanical{k}}{\mechanical{m}}}.
$$

Differentiating each of $\exp(i\signal{\omega}t)$ and $\exp(-i\signal{\omega}t)$ twice multiplies it by $-\signal{\omega}^2$. The general solution is therefore

$$
\mechanical{x}(t)=C_1\exp(i\signal{\omega}t)+C_2\exp(-i\signal{\omega}t).
$$

The notes separate the even and odd terms of $\exp(i\theta)$ into cosine and $i$ times sine. Using $\theta=\signal{\omega}t$ gives the real form

$$
\mechanical{x}(t)=B_1\cos(\signal{\omega}t)+B_2\sin(\signal{\omega}t),
\qquad
B_1=C_1+C_2,
\qquad
B_2=i(C_1-C_2).
$$

At $t=0$, $\mechanical{x}_0=B_1$. Differentiating introduces a factor of $\signal{\omega}$ in both terms, so $\mechanical{v}_0=\signal{\omega}B_2$. The derivative line in the handwriting omits these factors, but the final boxed initial-velocity equation includes the required one.

##### Initial conditions for the oscillator

The upper sketches compare two choices. Starting from rest at displacement $\mechanical{x}_0$ gives a cosine. Starting at equilibrium with a kick of velocity $\mechanical{v}_0$ gives a sine.

$$
\begin{aligned}
\mechanical{x}(t)&=\mechanical{x}_0\cos(\signal{\omega}t)
&&(\mechanical{\dot x}(0)=0),\\
\mechanical{x}(t)&=\frac{\mechanical{v}_0}{\signal{\omega}}\sin(\signal{\omega}t)
&&(\mechanical{x}(0)=0).
\end{aligned}
$$

The shadow of a rotating arm illustrates sinusoidal motion as a projection of uniform circular motion. In one revolution a point on a circle of radius $\mechanical{R}$ travels $2\pi\mechanical{R}$ at speed $\mechanical{R}\signal{\omega}$, so $\signal{\omega}\signal{T}=2\pi$. For the spring, $\signal{T}=2\pi/\signal{\omega}=2\pi\sqrt{\mechanical{m}/\mechanical{k}}$.

##### Amplitude and phase form

The right triangle in the notes has legs $B_1,B_2$, hypotenuse $\signal{A}$, and angle $\signal{\delta}$. Define $\signal{A}=\sqrt{B_1^2+B_2^2}$, with $\cos\signal{\delta}=B_1/\signal{A}$ and $\sin\signal{\delta}=B_2/\signal{A}$ for nonzero amplitude.

$$
\begin{aligned}
\mechanical{x}(t)
&=B_1\cos(\signal{\omega}t)+B_2\sin(\signal{\omega}t)\\
&=\signal{A}[\cos\signal{\delta}\cos(\signal{\omega}t)
+\sin\signal{\delta}\sin(\signal{\omega}t)]\\
&=\signal{A}\cos(\signal{\omega}t-\signal{\delta}).
\end{aligned}
$$

##### Complex amplitudes

Invert the relations $B_1=C_1+C_2$ and $B_2=i(C_1-C_2)$. Adding and subtracting $iB_1$ gives $B_2+iB_1=2iC_1$ and $B_2-iB_1=-2iC_2$. Thus

$$
C_1=\tfrac12(B_1-iB_2),
\qquad
C_2=\tfrac12(B_1+iB_2).
$$

For real $B_1,B_2$ these coefficients are complex conjugates. For a general $z=x+iy$, $z^*=x-iy$ and $z+z^*=2\operatorname{Re}z$. The handwritten product $zz^*$ is the squared magnitude $\lvert z\rvert^2$.

In the oscillator, the two exponential terms are conjugates, so the displacement is twice the real part of one. Define $C=2C_1=B_1-iB_2=\signal{A}\exp(-i\signal{\delta})$ using the amplitude triangle from [[#Initial conditions for the oscillator|the section on Initial conditions for the oscillator]].

$$
\begin{aligned}
\mechanical{x}(t)
&=C_1\exp(i\signal{\omega}t)+C_1^*\exp(-i\signal{\omega}t)\\
&=2\operatorname{Re}[C_1\exp(i\signal{\omega}t)]
=\operatorname{Re}[C\exp(i\signal{\omega}t)]\\
&=\operatorname{Re}\left[\signal{A}\exp(i(\signal{\omega}t-\signal{\delta}))\right]
=\signal{A}\cos(\signal{\omega}t-\signal{\delta}).
\end{aligned}
$$

##### Oscillator representations and energy

On the complex plane, $\exp(i\theta)=\cos\theta+i\sin\theta$ lies on the unit circle. Its product with its conjugate is $1$. The second circle sketch scales the radius to $\signal{A}$ and shows that the horizontal projection is $\mechanical{x}(t)=\signal{A}\cos(\signal{\omega}t-\signal{\delta})$. The notes collect the equivalent forms

$$
\begin{aligned}
\mechanical{x}(t)
&=C_1\exp(i\signal{\omega}t)+C_2\exp(-i\signal{\omega}t)\\
&=B_1\cos(\signal{\omega}t)+B_2\sin(\signal{\omega}t)\\
&=\signal{A}\cos(\signal{\omega}t-\signal{\delta})
=\operatorname{Re}[C\exp(i\signal{\omega}t)].
\end{aligned}
$$

The amplitude triangle on this page interchanges the labels $B_1$ and $B_2$ relative to the adjacent formula. The cosine and sine coefficients follow the definitions on [[#Initial conditions for the oscillator|the section on Initial conditions for the oscillator]].

$$
\begin{aligned}
\energy{U}&=\tfrac12\mechanical{k}\signal{A}^2\cos^2(\signal{\omega}t-\signal{\delta}),\\
\mechanical{v}(t)&=-\signal{A}\signal{\omega}\sin(\signal{\omega}t-\signal{\delta}),\\
\energy{T}&=\tfrac12\mechanical{m}\signal{A}^2\signal{\omega}^2
\sin^2(\signal{\omega}t-\signal{\delta}),\\
\energy{T}+\energy{U}&=\tfrac12\mechanical{k}\signal{A}^2.
\end{aligned}
$$

The last line uses $\mechanical{m}\signal{\omega}^2=\mechanical{k}$.

##### Small oscillations in a radial potential

The example gives $\energy{U}(\mechanical{r})=\energy{U}_0(\mechanical{r}/\mechanical{R}+\lambda^2\mechanical{R}/\mechanical{r})$. For positive parameters, the equilibrium and local stiffness follow from the first two derivatives.

$$
\begin{aligned}
\energy{U}'(\mechanical{r})
&=\energy{U}_0\left(\frac1{\mechanical{R}}-\frac{\lambda^2\mechanical{R}}{\mechanical{r}^2}\right),&
\mechanical{r}_0&=\lambda\mechanical{R},\\
\energy{U}''(\mechanical{r})
&=\frac{2\energy{U}_0\lambda^2\mechanical{R}}{\mechanical{r}^3},&
\energy{U}''(\mechanical{r}_0)&=\frac{2\energy{U}_0}{\lambda\mechanical{R}^2}.
\end{aligned}
$$

Measured from the equilibrium energy, the quadratic term is $\tfrac12\energy{U}''(\mechanical{r}_0)(\mechanical{r}-\mechanical{r}_0)^2$. The handwritten quadratic uses $\mechanical{r}^2$ as shorthand for the squared displacement from equilibrium.

## Source

Kyle Kabasares, *Classical Mechanics (Physics 105, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec r}$, $\mechanical{r}$ | $\unit{m}$ | Position vector and radial distance | The displacement from the origin and its magnitude. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}_i$ | $\unit{m}$ | Cartesian position components | Projections of position onto the three coordinate axes. |
| $\theta$, $\phi$, $\psi$ | $\unit{rad}$ | Angles | Angles between vectors or angular coordinates. |
| $\mechanical{\vec F}$, $\mechanical{\vec F}_{\mathrm{net}}$ | $\unit{N}$ | Force and net force | Individual forces and their vector sum on the body. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The inertia of the body in Newton’s second law. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\mechanical{s}$ | $\unit{m}$ | Path length | Distance measured along the trajectory. |
| $\energy{K}$, $\energy{T}$ | $\unit{J}$ | Kinetic energy | The energy associated with motion. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | Energy defined from the work of a conservative force. |
| $\energy{E}$, $\energy{E}_{\mathrm T}$ | $\unit{J}$ | Total mechanical energy | The sum of kinetic and potential energy. |
| $\mechanical{\vec\omega}$, $\mechanical{\omega}$, $\dot\phi$, $\dot\theta$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rate of rotation of the position vector in the plane. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular frequency | Frequency in radians per second for the small oscillation. |
| $\mechanical{b}$ | $\unit{N\,s\,m^{-1}}$ | Linear drag coefficient | Multiplier of speed in the linear drag term. |
| $\mechanical{R}$, $\mechanical{R}'$ | $\unit{m}$ | Horizontal range | Horizontal distance to the landing point, with a prime used for the weak-drag result. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the uniform rod or total length of a candidate path. |
| $\mechanical{A}$, $\mathrm d\mechanical{\vec A}$ | $\unit{m^2}$ | Area and directed area element | Area of a region, orbital sector, or section, and the normal area element in surface integrals. |
| $\mechanical{R}$ | $\unit{m}$ | Radius | Radius of a wire arc or cone, or the perpendicular distance to a rotation axis. |
| $\mechanical{\vec\ell}$, $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Moment of the linear momentum about the chosen origin. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Sum or integral of mass weighted by squared distance from the rotation axis. |
| $\mechanical{\alpha}$, $\ddot\phi$, $\ddot\theta$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity about the rotation axis. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\mechanical{\ell}$ | $\unit{m}$ | Pendulum length | Distance from the pivot to the bob. |
| $\signal{T}$ | $\unit{s}$ | Oscillation period | Time for one complete cycle of the pendulum. |
| $\mechanical{b}$ | $\unit{m}$ | Cube half-width | Half the length of an edge of the cube. |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | Field whose circulation gives the signed emf. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | Field integrated over the loop surface to find the magnetic flux. |
| $\magnetic{\Phi}$ | $\unit{Wb}$ | Magnetic flux | Integral of the normal magnetic field over a surface. |
| $\magnetic{\mu}_0$ | $\unit{N\,A^{-2}}$ | Vacuum permeability | Coefficient in Ampère’s law. |
| $\electric{I}_{\mathrm{enc}}$ | $\unit{A}$ | Enclosed current | Net steady current through the surface. |
| $\mechanical{k}_{\theta}$ | $\unit{J\,rad^{-2}}$ | Angular potential curvature | Second derivative of the cube’s potential energy at zero tilt. |
| $\signal{A}$ | $\unit{m}$ | Oscillation amplitude | Peak displacement of the harmonic oscillator. |
| $B_1$, $B_2$ | $\unit{m}$ | Quadrature coefficients | Coefficients of the cosine and sine components of the harmonic oscillator. |
| $\signal{\delta}$ | $\unit{rad}$ | Oscillation phase constant | Phase offset determined by the two coefficients. |
| $C$, $C_1$, $C_2$ | $\unit{m}$ | Complex displacement coefficients | Coefficients of the complex exponentials used to represent a real oscillation. |
| $\energy{U}_0$ | $\unit{J}$ | Potential energy scale | Multiplier of the dimensionless radial potential. |
| $\mechanical{R}$ | $\unit{m}$ | Radial scale | Reference length in the radial potential. |
| $\lambda$ | 1 | Radial potential parameter | Sets the equilibrium radius in multiples of the radial scale. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
| $\electric{\mathcal E}$ | $\unit{V}$ | Induced emf | Electric-field circulation around the closed loop. |
