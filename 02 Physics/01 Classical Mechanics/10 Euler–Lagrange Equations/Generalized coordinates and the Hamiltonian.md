---
title: "Generalized coordinates and the Hamiltonian"
---

> [!TLDR]
> Project forces onto independent coordinates and derive the Lagrangian and Hamiltonian equations of motion.

## Worked lecture material

##### Spring and general Cartesian motion

For the spring,

$$
\energy{\mathcal L}(\mechanical{x},\mechanical{\dot x})
=\tfrac12\mechanical{m}\mechanical{\dot x}^2-\tfrac12\mechanical{k}\mechanical{x}^2.
$$

Its position derivative is $-\mechanical{k}\mechanical{x}$, its velocity derivative is $\mechanical{m}\mechanical{\dot x}$, and the time derivative of the latter is $\mechanical{m}\mechanical{\ddot x}$. Substitution gives $-\mechanical{k}\mechanical{x}-\mechanical{m}\mechanical{\ddot x}=0$. For an arbitrary position potential, the same calculation gives $\mechanical{m}\mechanical{\ddot x}=-\mathrm d\energy{U}/\mathrm d\mechanical{x}$. The handwritten one-dimensional line omits this minus sign, which appears in the three-dimensional equations below it.

In three Cartesian dimensions,

$$
\energy{\mathcal L}
=\frac{\mechanical{m}}2
(\mechanical{\dot x}^2+\mechanical{\dot y}^2+\mechanical{\dot z}^2)
-\energy{U}(\mechanical{x},\mechanical{y},\mechanical{z}).
$$

Apply an Euler–Lagrange equation to each component.

$$
\mechanical{m}\mechanical{\ddot x}=-\frac{\partial\energy{U}}{\partial\mechanical{x}}=\mechanical{F}_x,
\qquad
\mechanical{m}\mechanical{\ddot y}=-\frac{\partial\energy{U}}{\partial\mechanical{y}}=\mechanical{F}_y,
\qquad
\mechanical{m}\mechanical{\ddot z}=-\frac{\partial\energy{U}}{\partial\mechanical{z}}=\mechanical{F}_z.
$$

The bottom sketch introduces a polar position $\mechanical{\vec r}=\mechanical{r}\hat r$. Its velocity is $\mechanical{\vec v}=\mechanical{\dot r}\hat r+\mechanical{r}\,\mathrm d\hat r/\mathrm dt$.

##### Polar basis derivatives

The tangential unit vector is the radial direction rotated by $\pi/2$.

$$
\hat\theta=\cos(\theta+\pi/2)\hat x+\sin(\theta+\pi/2)\hat y
=-\sin\theta\,\hat x+\cos\theta\,\hat y.
$$

Differentiating the unit vectors gives $\mathrm d\hat r/\mathrm dt=\dot\theta\hat\theta$ and $\mathrm d\hat\theta/\mathrm dt=-\dot\theta\hat r$.

##### Elastic pendulum

The sketch defines $\theta$ from the downward vertical. For a fixed length $\mechanical{\ell}$ there is one degree of freedom. With Cartesian horizontal and downward coordinates $\mechanical{x}=\mechanical{\ell}\sin\theta$ and $\mechanical{y}=\mechanical{\ell}\cos\theta$, differentiation gives $\mechanical{v}^2=\mechanical{\ell}^2\dot\theta^2$.

The elastic pendulum also has an independent radial displacement. In its equations, $\mechanical{x}$ denotes extension from the unstretched length $\mechanical{\ell}$, so $\mechanical{r}=\mechanical{\ell}+\mechanical{x}$. The speed squared is $\mechanical{\dot x}^2+(\mechanical{\ell}+\mechanical{x})^2\dot\theta^2$. The energies are

$$
\begin{aligned}
\energy{T}&=\tfrac12\mechanical{m}
[\mechanical{\dot x}^2+(\mechanical{\ell}+\mechanical{x})^2\dot\theta^2],\\
\energy{U}
&=-\mechanical{m}\mechanical{g}(\mechanical{\ell}+\mechanical{x})\cos\theta
+\tfrac12\mechanical{k}\mechanical{x}^2.
\end{aligned}
$$

Using $\energy{\mathcal L}=\energy{T}-\energy{U}$, the two Euler–Lagrange equations give

$$
\begin{aligned}
\mechanical{m}\mechanical{\ddot x}
&=\mechanical{m}(\mechanical{\ell}+\mechanical{x})\dot\theta^2
+\mechanical{m}\mechanical{g}\cos\theta-\mechanical{k}\mechanical{x},\\
\frac{\mathrm d}{\mathrm dt}
[\mechanical{m}(\mechanical{\ell}+\mechanical{x})^2\dot\theta]
&=-\mechanical{m}\mechanical{g}(\mechanical{\ell}+\mechanical{x})\sin\theta.
\end{aligned}
$$

The margin shows a rotating object with a rate of $22.0\,\unit{rev\,min^{-1}}$, radius $0.25\,\unit{m}$, and moment of inertia recorded as $0.015$ without a unit.

##### Generalized coordinates and kinetic energy

Let $q_1,\ldots,q_n$ be independent generalized coordinates for the degrees of freedom. When taking partial derivatives of the Lagrangian, treat the coordinates $q_j$ and generalized velocities $\dot q_j$ as independent arguments. For particles with $\mechanical{\vec r}_i=\mechanical{\vec r}_i(q_1,\ldots,q_n)$,

$$
\mechanical{\dot{\vec r}}_i
=\sum_j\frac{\partial\mechanical{\vec r}_i}{\partial q_j}\dot q_j,
\qquad
\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial\dot q_k}
=\frac{\partial\mechanical{\vec r}_i}{\partial q_k}.
$$

The notes call the second identity “dot cancellation.” Differentiate the kinetic energy $\energy{T}=\tfrac12\sum_i\mechanical{m}_i(\mechanical{\dot{\vec r}}_i\cdot\mechanical{\dot{\vec r}}_i)$ with respect to $\dot q_k$.

$$
\frac{\partial\energy{T}}{\partial\dot q_k}
=\sum_i\mechanical{m}_i\mechanical{\dot{\vec r}}_i\cdot
\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial\dot q_k}
=\sum_i\mechanical{\vec p}_i\cdot
\frac{\partial\mechanical{\vec r}_i}{\partial q_k}.
$$

Take the time derivative and apply the product rule.

$$
\frac{\mathrm d}{\mathrm dt}
\left(\frac{\partial\energy{T}}{\partial\dot q_k}\right)
=\sum_i\left[
\mechanical{\dot{\vec p}}_i\cdot\frac{\partial\mechanical{\vec r}_i}{\partial q_k}
+\mechanical{\vec p}_i\cdot
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\mechanical{\vec r}_i}{\partial q_k}\right)
\right].
$$

Subtract the second sum. The result is $\sum_i\mechanical{\vec F}_i\cdot\partial\mechanical{\vec r}_i/\partial q_k$, the force combination associated with $q_k$.

##### Generalized force and Lagrange’s equation

The lecture identifies the second sum in the product rule on [[#Generalized coordinates and kinetic energy|the section on Generalized coordinates and kinetic energy]]. For the smooth coordinate transformation, differentiation gives

$$
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\mechanical{\vec r}_i}{\partial q_k}\right)
=\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial q_k},
\qquad
\frac{\partial\energy{T}}{\partial q_k}
=\sum_i\mechanical{\vec p}_i\cdot
\frac{\partial\mechanical{\dot{\vec r}}_i}{\partial q_k}.
$$

Writing the projected force as $Q_k$,

$$
\frac{\mathrm d}{\mathrm dt}
\left(\frac{\partial\energy{T}}{\partial\dot q_k}\right)
-\frac{\partial\energy{T}}{\partial q_k}
=Q_k=\sum_i\mechanical{\vec F}_i\cdot
\frac{\partial\mechanical{\vec r}_i}{\partial q_k}.
$$

For a force derived from a position potential $\energy{U}(q_1,\ldots,q_n)$, $Q_k=-\partial\energy{U}/\partial q_k$. Inserting $\energy{\mathcal L}=\energy{T}-\energy{U}$ gives

$$
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\right)
-\frac{\partial\energy{\mathcal L}}{\partial q_k}=0.
$$

##### Cyclic coordinates

A coordinate is ignorable, or cyclic, if $\partial\energy{\mathcal L}/\partial q_k=0$. Then the corresponding generalized momentum $\partial\energy{\mathcal L}/\partial\dot q_k$ is constant.

For motion in a uniform gravitational field with $\mechanical{z}$ increasing upward,

$$
\energy{\mathcal L}
=\tfrac12\mechanical{m}(\mechanical{\dot x}^2+\mechanical{\dot y}^2+\mechanical{\dot z}^2)
-\mechanical{m}\mechanical{g}\mechanical{z}.
$$

The cyclic coordinates are $\mechanical{x}$ and $\mechanical{y}$. Their velocity derivatives of the Lagrangian are $\mechanical{m}\mechanical{\dot x}$ and $\mechanical{m}\mechanical{\dot y}$, respectively.

##### Cyclic coordinates in cylindrical motion

The purely kinetic cylindrical Lagrangian is

$$
\energy{\mathcal L}
=\tfrac12\mechanical{m}(\mechanical{\dot r}^2
+\mechanical{r}^2\dot\theta^2+\mechanical{\dot z}^2).
$$

Neither $\theta$ nor $\mechanical{z}$ occurs explicitly. Their conjugate momenta $\partial\energy{\mathcal L}/\partial\dot\theta=\mechanical{m}\mechanical{r}^2\dot\theta=\mechanical{L}_z$ and $\partial\energy{\mathcal L}/\partial\mechanical{\dot z}=\mechanical{m}\mechanical{\dot z}$ are constants of the motion. The handwriting repeats the $z$ denominator on the angular-momentum line. Its expression identifies the intended angular velocity derivative.

##### Hamiltonian and conservation of energy

Define the canonically conjugate momentum $p_k=\partial\energy{\mathcal L}/\partial\dot q_k$. The Hamiltonian along the motion is

$$
\energy{\mathcal H}=\sum_k\dot q_kp_k-\energy{\mathcal L}.
$$

Use the product rule on $\dot q_kp_k$ and the chain rule on $\energy{\mathcal L}(q,\dot q,t)$. The terms in $\ddot q_k$ cancel by the definition of $p_k$.

$$
\frac{\mathrm d\energy{\mathcal H}}{\mathrm dt}
=\sum_k\dot q_k\left[
\frac{\mathrm d}{\mathrm dt}\left(\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\right)
-\frac{\partial\energy{\mathcal L}}{\partial q_k}
\right]
-\frac{\partial\energy{\mathcal L}}{\partial t}
=-\frac{\partial\energy{\mathcal L}}{\partial t}.
$$

The sum vanishes by the Euler–Lagrange equations. The Hamiltonian is constant when the Lagrangian has no explicit time dependence. For $\energy{\mathcal L}=\energy{T}-\energy{U}$ with velocity-independent $\energy{U}$ and homogeneous quadratic $\energy{T}$ in the generalized velocities, the sum $\sum_k\dot q_kp_k$ is $2\energy{T}$. Then $\energy{\mathcal H}=2\energy{T}-(\energy{T}-\energy{U})=\energy{T}+\energy{U}$.

A margin reminder says to ask Fana for Friday’s notes.

##### Kinetic energy as a quadratic form

For a time-independent coordinate transformation, substitute $\mechanical{\dot{\vec r}}_i=\sum_\ell(\partial\mechanical{\vec r}_i/\partial q_\ell)\dot q_\ell$ into the Cartesian kinetic energy. Then

$$
\energy{T}=\tfrac12\sum_{\ell,m}A_{\ell m}\dot q_\ell\dot q_m,
\qquad
A_{\ell m}=\sum_i\mechanical{m}_i
\frac{\partial\mechanical{\vec r}_i}{\partial q_\ell}\cdot
\frac{\partial\mechanical{\vec r}_i}{\partial q_m}.
$$

The dot product makes $A_{\ell m}=A_{m\ell}$. In the example with three degrees of freedom, differentiation with respect to $\dot q_2$ picks out the four off-diagonal terms involving $\dot q_2$ and the diagonal term proportional to $\dot q_2^2$.

$$
\begin{aligned}
\frac{\partial\energy{T}}{\partial\dot q_2}
&=\tfrac12[(A_{21}+A_{12})\dot q_1+2A_{22}\dot q_2
+(A_{32}+A_{23})\dot q_3]\\
&=A_{12}\dot q_1+A_{22}\dot q_2+A_{23}\dot q_3.
\end{aligned}
$$

In general only terms with $\ell=k$ or $m=k$ survive. The two contributions are equal by symmetry, giving $\partial\energy{T}/\partial\dot q_k=\sum_\ell A_{\ell k}\dot q_\ell$.

##### Time derivative of the Lagrangian

The last line expands the total derivative and begins substituting the Euler–Lagrange equation into the coordinate term.

$$
\frac{\mathrm d\energy{\mathcal L}}{\mathrm dt}
=\sum_k\left(
\frac{\partial\energy{\mathcal L}}{\partial q_k}\dot q_k+
\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\ddot q_k
\right)
+\frac{\partial\energy{\mathcal L}}{\partial t}.
$$

##### Hamilton’s equations

Substitute $p_k=\partial\energy{\mathcal L}/\partial\dot q_k$ and $\dot p_k=\partial\energy{\mathcal L}/\partial q_k$ into the total derivative.

$$
\frac{\mathrm d\energy{\mathcal L}}{\mathrm dt}
=\sum_k(\dot p_k\dot q_k+p_k\ddot q_k)+\frac{\partial\energy{\mathcal L}}{\partial t}.
$$

The sum is the derivative of $\sum_k p_k\dot q_k$. Thus the Hamiltonian $\energy{\mathcal H}=\sum_k p_k\dot q_k-\energy{\mathcal L}$ satisfies $\mathrm d\energy{\mathcal H}/\mathrm dt=-\partial\energy{\mathcal L}/\partial t$. For the quadratic kinetic energy on [[#Kinetic energy as a quadratic form|the section on Kinetic energy as a quadratic form]] and a potential independent of velocity, $p_k=\sum_\ell A_{\ell k}\dot q_\ell$.

To obtain the canonical equations, take the differential of the defining expression. The terms in $\mathrm d\dot q_k$ cancel.

$$
\begin{aligned}
\mathrm d\energy{\mathcal H}
&=\sum_k\left[
\dot q_k\,\mathrm dp_k+p_k\,\mathrm d\dot q_k
-\frac{\partial\energy{\mathcal L}}{\partial q_k}\,\mathrm dq_k
-\frac{\partial\energy{\mathcal L}}{\partial\dot q_k}\,\mathrm d\dot q_k
\right]-\frac{\partial\energy{\mathcal L}}{\partial t}\,\mathrm dt\\
&=\sum_k(\dot q_k\,\mathrm dp_k-\dot p_k\,\mathrm dq_k)
-\frac{\partial\energy{\mathcal L}}{\partial t}\,\mathrm dt.
\end{aligned}
$$

Comparing the coefficients of $\mathrm dp_k$ and $\mathrm dq_k$ with those of $\mathrm d\energy{\mathcal H}(q,p,t)$ gives

$$
\frac{\partial\energy{\mathcal H}}{\partial p_k}=\dot q_k,
\qquad
\frac{\partial\energy{\mathcal H}}{\partial q_k}=-\dot p_k.
$$

##### One-dimensional free particle

For $\energy{\mathcal L}=\tfrac12\mechanical{m}\mechanical{\dot x}^2$, the momentum is $\mechanical{p}_x=\mechanical{m}\mechanical{\dot x}$. Express the Hamiltonian in terms of momentum.

$$
\energy{\mathcal H}
=\mechanical{p}_x\frac{\mechanical{p}_x}{\mechanical{m}}
-\frac{\mechanical{m}}2\left(\frac{\mechanical{p}_x}{\mechanical{m}}\right)^2
=\frac{\mechanical{p}_x^2}{2\mechanical{m}}.
$$

## Source

Kyle Kabasares, *Classical Mechanics (Physics 105, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec r}$, $\mechanical{r}$ | $\unit{m}$ | Position vector and radial distance | The displacement from the origin and its magnitude. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$, $\mechanical{r}_i$ | $\unit{m}$ | Cartesian position components | Projections of position onto the three coordinate axes. |
| $\mechanical{\vec v}$, $\mechanical{v}_i$ | $\unit{m\,s^{-1}}$ | Velocity and components | The directed rate of change of position. |
| $\theta$, $\phi$, $\psi$ | $\unit{rad}$ | Angles | Angles between vectors or angular coordinates. |
| $\mechanical{\vec F}$, $\mechanical{\vec F}_{\mathrm{net}}$ | $\unit{N}$ | Force and net force | Individual forces and their vector sum on the body. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The inertia of the body in Newton’s second law. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | The acceleration that sets the weight of the body. |
| $t$, $\Delta t$ | $\unit{s}$ | Time and elapsed time | The time coordinate and the interval used for the average velocity. |
| $\energy{K}$, $\energy{T}$ | $\unit{J}$ | Kinetic energy | The energy associated with motion. |
| $\energy{U}$ | $\unit{J}$ | Potential energy | Energy defined from the work of a conservative force. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Mass times velocity. |
| $\mechanical{\vec\omega}$, $\mechanical{\omega}$, $\dot\phi$, $\dot\theta$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rate of rotation of the position vector in the plane. |
| $\mechanical{k}$ | $\unit{s^{-1}}$ | Linear drag rate | Linear drag coefficient divided by the projectile mass. |
| $T$ | $\unit{s}$ | Flight time | Positive time when the projectile returns to launch height. |
| $\mechanical{L}$ | $\unit{m}$ | Length | Length of the uniform rod or total length of a candidate path. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Force magnitude per unit extension or compression, or the local curvature of a position potential. |
| $\mechanical{\ell}$ | $\unit{m}$ | Pendulum length | Distance from the pivot to the bob. |
| $T$ | $\unit{s}$ | Travel time | Time along a candidate path in Fermat’s principle or the brachistochrone problem. |
| $\mechanical{k}$ | $\unit{m}$ | Polar length integral constant | Constant from the absence of explicit azimuth dependence in the arc-length integrand. |
| $\energy{\mathcal L}$ | $\unit{J}$ | Lagrangian | Kinetic energy minus potential energy for the systems considered here. |
| $q_k$ | — | Generalized coordinate | Independent coordinate for a degree of freedom. Its unit depends on the coordinate choice. |
| $\dot q_k$ | — | Generalized velocity | Time derivative of a generalized coordinate. Its unit depends on the coordinate choice. |
| $Q_k$ | — | Generalized force | Force projected onto a change of generalized coordinate. Its unit is energy divided by the coordinate unit. |
| $p_k$ | — | Canonically conjugate momentum | Lagrangian derivative with respect to a generalized velocity. Its unit depends on the coordinate choice. |
| $\energy{\mathcal H}$ | $\unit{J}$ | Hamiltonian | Legendre transform of the Lagrangian with respect to the generalized velocities. |
| $A_{\ell m}$ | — | Kinetic-energy matrix coefficient | Coefficient of the product of two generalized velocities. Its unit depends on their coordinate choices. |
