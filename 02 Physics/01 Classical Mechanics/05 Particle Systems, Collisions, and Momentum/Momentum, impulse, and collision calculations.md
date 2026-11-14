---
title: "Momentum, impulse, and collision calculations"
---

> [!TLDR]
> Use momentum conservation, kinetic energy in elastic collisions, and the center of mass to describe systems of particles.

## Worked lecture material

##### Chapter 10

69. A pendulum of length $L$ is released from rest at angle $\theta$ to the vertical. A peg shortens the radius of the loop to $r=L/3$. Measure height from the bottom of the swing, so $h_i=L-L\cos\theta$ and the top of the smaller loop is at $h_f=2L/3$.

![[Kyle Kabasares - Newtonian Mechanics - Pendulum Loop around a Peg.png|**Fig. 128** The initial pendulum position and the smaller loop around the peg.]]

At the threshold for completing the smaller loop, the tension at the top is zero, so $mg=mv_f^2/r$ and $v_f=\sqrt{gL/3}$. Conservation of energy gives

$$
mg(L-L\cos\theta)=mg\frac{2L}{3}+\tfrac12m\frac{gL}{3},
\qquad
1-\cos\theta=\tfrac23+\tfrac16.
$$

Thus $\cos\theta=1/6$ and $\theta=\arccos(1/6)\approx80^\circ$.

53(a). A block starts at rest at height $h$ and reaches a hill crest at height $R$ with radius of curvature $R$. At the threshold of losing contact, $N=0$ at the crest, so $mg=mv^2/R$ and $v=\sqrt{gR}$.

![[Kyle Kabasares - Newtonian Mechanics - Block Leaving Contact at Hill Crest.png|**Fig. 129** The starting height and the forces at the crest.]]

$$
mgh=mgR+\tfrac12m(gR),\qquad h=\tfrac32R.
$$

53(b). With $R=10\,\unit{m}$, $h=\tfrac32(10\,\unit{m})=15\,\unit{m}$.

##### Sled at constant speed

A $60\,\unit{kg}$ sled is pulled at constant speed by a $120\,\unit{N}$ force at $40^\circ$ above horizontal. Find the coefficient of kinetic friction.

![[Kyle Kabasares - Newtonian Mechanics - Sled Pulled at Forty Degrees.png|**Fig. 130** The sled, rope tension components, friction, normal force, and weight.]]

$$
\begin{aligned}
\sum F_y&=N+T\sin40^\circ-mg=0,\\
\sum F_x&=T\cos40^\circ-F_{\mathrm{k}}=0.
\end{aligned}
$$

Since $F_{\mathrm{k}}=\mu_{\mathrm{k}}N$ and $N=mg-T\sin40^\circ$,

$$
\mu_{\mathrm{k}}=\frac{T\cos40^\circ}{mg-T\sin40^\circ}=0.179\approx0.18.
$$

##### Energy

A compressed spring with $k=300\,\unit{N/m}$ launches a $3\,\unit{kg}$ block toward a vertical loop of radius $R=2\,\unit{m}$. Assume no friction. Find the compression $\Delta x$ needed to complete the loop.

![[Kyle Kabasares - Newtonian Mechanics - Spring and Vertical Loop Setup.png|**Fig. 131** Compressed spring, block, and vertical loop.]]

At the top of the loop, $F_N+mg=mv_f^2/R$. At the threshold $F_N=0$ and $v_f=\sqrt{gR}\approx4.4\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Radial Force at Top of Loop.png|**Fig. 132** At the top, the inward radial direction is downward.]]

Taking $y_f=2R$ at the top,

$$
\tfrac12k(\Delta x)^2=mgy_f+\tfrac12mv_f^2,\qquad
\Delta x=\sqrt{\frac{2(mgy_f+\tfrac12mv_f^2)}{k}}.
$$

The page records $0.96\,\unit{m}$. With $k=300\,\unit{N/m}$, $m=3\,\unit{kg}$, and $R=2\,\unit{m}$, the expression gives about $0.99\,\unit{m}$.

##### Conserved quantities and linear momentum

A conserved quantity is a property of an isolated system that remains constant as the system changes. Linear momentum is $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$. For a mass of $0.2\,\unit{kg}$ at $20\,\unit{m/s}$, $p=4\,\unit{kg\,m/s}$. The product in the handwriting appears to show $80$ in place of $20$.

With zero net external force, $\vec p_i=\vec p_f$ for one object and $\vec p_{1i}+\vec p_{2i}=\vec p_{1f}+\vec p_{2f}$ for two.

##### Impulse–momentum theorem

$$
\mechanical{\vec F}_{\mathrm{net}}=\frac{\mathrm{d}\mechanical{\vec p}}{\mathrm{d}t},
\qquad
\Delta\mechanical{\vec p}=\vec p_f-\vec p_i
=\int_{t_0}^{t_f}\vec F_{\mathrm{net}}\,\mathrm{d}t.
$$

For a constant force, $\Delta\vec p=\vec F_{\mathrm{net}}\Delta t$. In general the same formula uses the average force, $\vec F_{\mathrm{avg}}=\Delta\vec p/\Delta t$.

##### Impulse

Impulse is a vector. For a varying force $\mechanical{\vec J}=\Delta\mechanical{\vec p}=\int\vec F\,\mathrm{d}t$. For a constant force, $\vec J=\vec F\Delta t$.

##### Inelastic collision

Two hook-and-loop balls are thrown toward each other, with $m_1=0.5\,\unit{kg}$, $v_1=10\,\unit{m/s}$, $m_2=0.2\,\unit{kg}$, and $v_2=-15\,\unit{m/s}$. They stick together. Find the direction and velocity of the combined object.

![[Kyle Kabasares - Newtonian Mechanics - Two Balls Stick after Collision.png|**Fig. 133** The balls approach in opposite directions and leave as one object.]]

$$
m_1v_1+m_2v_2=(m_1+m_2)v_T,\qquad
v_T=\frac{(0.5)(10)+(0.2)(-15)}{0.7}\,\unit{m/s}
=+2.86\,\unit{m/s}.
$$

The positive sign gives motion in the direction of the first ball's initial velocity.

##### Stunt performer landing on an airbag

An $80\,\unit{kg}$ stunt performer is moving downward at $10\,\unit{m/s}$ just before landing. The airbag brings him to rest in $0.2\,\unit{s}$. Find the impulse and average net force.

$$
J_y=\Delta p_y=m(v_f-v_i)=(80)[0-(-10)]\,\unit{kg\,m/s}
=800\,\unit{kg\,m/s},
\qquad
F_{\mathrm{avg},y}=\frac{\Delta p_y}{\Delta t}=4{,}000\,\unit{N}.
$$

Both point upward.

##### Collisions and decays in one dimension

Momentum conservation can be used to study collisions and their counterparts, decays.

##### Rockets

The notes assume a constant engine force and point out that both the mass $m$ and velocity $v$ depend on time. The product rule gives

$$
\frac{\mathrm{d}(mv)}{\mathrm{d}t}
=m\frac{\mathrm{d}v}{\mathrm{d}t}+v\frac{\mathrm{d}m}{\mathrm{d}t}.
$$

The page labels this derivative thrust. For the rocket alone, momentum also leaves with the exhaust, so identifying thrust requires accounting for that flux.

![[Kyle Kabasares - Newtonian Mechanics - Rocket Sketch.png|**Fig. 134** Rocket and exhaust sketched in the notes.]]

##### Types of collisions

- In a perfectly inelastic collision, the objects stick together. The total momentum is conserved for an isolated system and the kinetic energy changes.
- In an elastic collision, the objects bounce apart and both total momentum and kinetic energy are conserved.

##### ) — Separation of a popcorn kernel

A $2\,\unit{g}$ popcorn kernel initially at rest pops into two pieces. The $0.5\,\unit{g}$ piece moves at $5\,\unit{m/s}$. Find the velocity of the $1.5\,\unit{g}$ piece.

$$
p_i=p_f,\qquad
0=m_1v_{1f}+m_2v_{2f},\qquad
v_{2f}=-\frac{m_1v_{1f}}{m_2}
=-\frac{(0.0005)(5)}{0.0015}\,\unit{m/s}\approx-1.7\,\unit{m/s}.
$$

The second piece moves opposite the first.

##### Inelastic collisions in one dimension

The lecture repeats the example of two balls that stick after colliding. With $m_1=0.5\,\unit{kg}$, $v_{1i}=10\,\unit{m/s}$, $m_2=0.2\,\unit{kg}$, and $v_{2i}=-15\,\unit{m/s}$, the common velocity is

$$
v_f=\frac{m_1v_{1i}+m_2v_{2i}}{m_1+m_2}=+2.86\,\unit{m/s}.
$$

##### Elastic collisions in one dimension

Start with conservation of momentum and conservation of kinetic energy:

$$
p_{1i}+p_{2i}=p_{1f}+p_{2f},\qquad
K_{1i}+K_{2i}=K_{1f}+K_{2f}.
$$

##### Final velocities for elastic collisions

![[Kyle Kabasares - Newtonian Mechanics - One Dimensional Elastic Collision.png|**Fig. 135** Two masses approaching and then moving apart in one dimension.]]

$$
\begin{aligned}
v_{1f}
&=\frac{m_1-m_2}{m_1+m_2}v_{1i}
+\frac{2m_2}{m_1+m_2}v_{2i},\\
v_{2f}
&=\frac{2m_1}{m_1+m_2}v_{1i}
+\frac{m_2-m_1}{m_1+m_2}v_{2i}.
\end{aligned}
$$

##### Limiting cases

If $m_2$ starts at rest, $v_{2i}=0$ and the equations reduce to

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i},
\qquad
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}.
$$

- For $m_1\ll m_2$, $v_{1f}\approx-v_{1i}$ and $v_{2f}\approx0$. The lighter object bounces back as it would off a wall.
- For $m_1\gg m_2$, $v_{1f}\approx v_{1i}$ and $v_{2f}\approx2v_{1i}$. The heavy object slows very little and the light object leaves at about twice the incident speed.

##### Elastic collision with a stationary ball

A $1\,\unit{kg}$ ball moving at $5\,\unit{m/s}$ strikes a $2\,\unit{kg}$ ball at rest. For an elastic collision,

$$
v_{1f}=\frac{1-2}{1+2}(5\,\unit{m/s})=-\tfrac53\,\unit{m/s},
\qquad
v_{2f}=\frac{2(1)}{1+2}(5\,\unit{m/s})=\tfrac{10}{3}\,\unit{m/s}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Elastic Collision with Stationary Ball.png|**Fig. 136** The incoming ball reverses direction and the target ball moves forward at about 3.33 m/s.]]

##### Conservation of momentum in two dimensions

Both elastic and inelastic collisions can occur at an angle. Resolve momentum into components. In this example, $m_1$ approaches rightward and $m_2$ approaches downward and leftward at angle $\theta$ below the leftward horizontal. The masses stick together.

![[Kyle Kabasares - Newtonian Mechanics - Oblique Inelastic Collision.png|**Fig. 137** Incoming directions, components for the second ball, and the common final velocity.]]

The momentum balances are $p_{1ix}+p_{2ix}=p_{Tx}$ and $p_{1iy}+p_{2iy}=p_{Ty}$. Thus

$$
v_{Tx}=\frac{m_1v_{1i}-m_2v_{2i}\cos\theta}{m_1+m_2},
\qquad
v_{Ty}=\frac{-m_2v_{2i}\sin\theta}{m_1+m_2}.
$$

Find the final speed and direction for $m_1=3\,\unit{kg}$, $m_2=2\,\unit{kg}$, $v_{1i}=5\,\unit{m/s}$, $v_{2i}=3\,\unit{m/s}$, and $\theta=30^\circ$.

##### Two-dimensional collision

The common velocity has components $v_{Tx}=1.96\,\unit{m/s}$ and $v_{Ty}=-0.6\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Oblique Collision Final Velocity.png|**Fig. 138** The final velocity points down and to the right.]]

$$
\phi=\arctan\left(\frac{0.6}{1.96}\right)\approx17^\circ
\quad\text{below the positive }x\text{ axis},
\qquad
v_T=\sqrt{1.96^2+(-0.6)^2}\,\unit{m/s}=2.05\,\unit{m/s}.
$$

A homework sketch asks for the velocity of the recoiling nucleus. It marks an electron moving up, a gamma ray moving right, and a recoil directed down and left. The nucleus label appears to read carbon-14.

![[Kyle Kabasares - Newtonian Mechanics - Homework Recoil Sketch.png|**Fig. 139** Perpendicular outgoing momenta and the direction of recoil.]]

##### Two-dimensional impulse and momentum

Find the components of the average force of a wall on a ball. The ball strikes and leaves at equal angles $\theta$ relative to the horizontal normal. Assume equal incident and outgoing speeds, $\lvert v_i\rvert=\lvert v_f\rvert=v$.

![[Kyle Kabasares - Newtonian Mechanics - Ball Rebounding from Vertical Wall.png|**Fig. 140** The ball approaches from the upper left and rebounds toward the lower left.]]

Use $\Delta\vec p=\vec J=\vec F_{\mathrm{avg}}\Delta t$. Its component equations are $p_{fx}-p_{ix}=F_{\mathrm{avg},x}\Delta t$ and $p_{fy}-p_{iy}=F_{\mathrm{avg},y}\Delta t$. For the horizontal component,

$$
F_{\mathrm{avg},x}
=\frac{m(-v\cos\theta)-m(v\cos\theta)}{\Delta t}
=-\frac{2mv\cos\theta}{\Delta t}.
$$

##### Ball rebounding from a wall

The incoming and outgoing vertical components are both $-v\sin\theta$ because the speed and angle are unchanged. Therefore

$$
F_{\mathrm{avg},y}\Delta t=m(-v_f\sin\theta)-m(-v_i\sin\theta)=0.
$$

##### Rotational kinematics

For a fixed radius $r$, arc length and angle in radians are related by $s=r\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Arc Length and Angle.png|**Fig. 141** An infinitesimal angle and its corresponding arc length.]]

$$
\mechanical{v}=\frac{\mathrm{d}s}{\mathrm{d}t}=r\omega,\qquad
\omega=\frac{\mathrm{d}\theta}{\mathrm{d}t},\qquad
\mechanical{a}_{\mathrm{t}}=\frac{\mathrm{d}v}{\mathrm{d}t}=r\alpha,\qquad
\alpha=\frac{\mathrm{d}\omega}{\mathrm{d}t}.
$$

Angular velocity has units of $\unit{rad/s}$ or $\unit{s^{-1}}$, and angular acceleration has units of $\unit{rad/s^2}$ or $\unit{s^{-2}}$. Convert revolutions per minute before using equations in radians. Use the right-hand rule for the direction of $\vec\omega$.

![[Kyle Kabasares - Newtonian Mechanics - Angular Velocity Right Hand Rule.png|**Fig. 142** Tangential motion and the direction of the angular velocity vector.]]

For constant linear or angular acceleration, the corresponding equations are

$$
\begin{aligned}
v_f&=v_0+at, & \omega_f&=\omega_0+\alpha t,\\
x_f&=x_0+v_0t+\tfrac12at^2, & \theta_f&=\theta_0+\omega_0t+\tfrac12\alpha t^2,\\
v_f^2&=v_0^2+2a(x_f-x_0), & \omega_f^2&=\omega_0^2+2\alpha(\theta_f-\theta_0).
\end{aligned}
$$

##### Rotational kinematics examples

Points A and B on a rigid disk sweep through the same angle in the same time, so $\omega_A=\omega_B$. Point B is farther from the axis, so $s_A<s_B$ and $v_A<v_B$.

![[Kyle Kabasares - Newtonian Mechanics - Rotating Disk Two Radii.png|**Fig. 143** Two points sweep out different arcs through the same angle.]]

A CD player starts at $33\,\unit{rev/min}$ and takes $20\,\unit{s}$ to stop. Convert the initial speed:

$$
\omega_0=33\,\unit{rev/min}\,
\frac{2\pi\,\unit{rad}}{1\,\unit{rev}}\,
\frac{1\,\unit{min}}{60\,\unit{s}}
\approx3.46\,\unit{rad/s}.
$$

From $\omega_f=\omega_0+\alpha t$ with $\omega_f=0$, $\alpha=-\omega_0/t=-0.173\,\unit{rad/s^2}$.

A bicycle wheel rotates through $3\pi\,\unit{rad}$ from rest with $\alpha=30\,\unit{rad/s^2}$. Since $\omega_f^2=\omega_0^2+2\alpha(\theta_f-\theta_0)$, $\omega_f=\sqrt{2\alpha\Delta\theta}=23.78\,\unit{rad/s}$.

##### Center of mass

The center of mass and center of gravity coincide under conditions such as a uniform gravitational field. For particle $i$, Newton's second law gives $F_i=m_i a_i$. Summing over particles and using $a_i=\mathrm{d}^2 x_i/\mathrm{d}t^2$,

$$
F_T=\sum_i F_i=\sum_i m_i a_i
=\sum_i m_i\frac{\mathrm{d}^2 x_i}{\mathrm{d}t^2}
=\frac{\mathrm{d}^2}{\mathrm{d}t^2}\left(\sum_i m_i x_i\right)
=m_T a_T.
$$

Equate the total force to $m_T a_T$ for a total mass $m_T=\sum_i m_i=M$. Define the representative position by $m_Tx_T=\sum_i m_ix_i$. For point masses,

$$
x_T=x_{\mathrm{CM}}=\frac{\sum_i m_i x_i}{M},
\qquad
y_{\mathrm{CM}}=\frac{\sum_i m_i y_i}{M}.
$$

The center of mass is the mass-weighted average position. The net force accelerates it as though the system's mass were concentrated there. The center of mass may lie outside the material of the object.

##### Three masses at the corners of a right triangle

The masses $m_1=1\,\unit{kg}$, $m_2=2\,\unit{kg}$, and $m_3=3\,\unit{kg}$ are at $(0,0)$, $(4,0)$, and $(4,3)$.

![[Kyle Kabasares - Newtonian Mechanics - Three Masses on a Right Triangle.png|**Fig. 144** Positions of the point masses relative to the origin at the lower left.]]

$$
x_{\mathrm{CM}}=\frac{(1)(0)+(2)(4)+(3)(4)}{1+2+3}=\frac{10}{3},
\qquad
y_{\mathrm{CM}}=\frac{(1)(0)+(2)(0)+(3)(3)}{1+2+3}=\frac32.
$$

For the assembly of squares, treat each square as a point mass at its center and use the same formulas.

![[Kyle Kabasares - Newtonian Mechanics - Assembly of Squares for Center of Mass.png|**Fig. 145** Equal square masses in an arrangement with the coordinate origin at the lower left.]]

##### Center of mass of an extended object

Divide the object into small pieces of mass $\Delta m_i$ at positions $x_i$. The sum approaches an integral as the pieces become infinitesimal.

![[Kyle Kabasares - Newtonian Mechanics - Extended Object Mass Elements.png|**Fig. 146** A rigid body divided into small mass elements.]]

$$
x_{\mathrm{CM}}=\lim_{\Delta m_i\to0}\frac{\sum_i x_i\Delta m_i}{M}
=\frac{1}{M}\int x\,\mathrm{d}m.
$$

Use the corresponding expressions for $y_{\mathrm{CM}}$ and $z_{\mathrm{CM}}$.

##### Uniform rigid rod

Find the center of mass of a rod of length $L$ and mass $M$. Its uniform linear density is $\lambda=M/L=\mathrm{d}m/\mathrm{d}x$, so $\mathrm{d}m=\lambda\,\mathrm{d}x$.

![[Kyle Kabasares - Newtonian Mechanics - Mass Element of Uniform Rod.png|**Fig. 147** Rod with an element at distance x from the left end.]]

$$
x_{\mathrm{CM}}=\frac{1}{M}\int x\,\mathrm{d}m
=\frac{\lambda}{M}\int_0^L x\,\mathrm{d}x
=\frac{\lambda L^2}{2M}=\frac L2.
$$

##### Rod with linearly varying density

Find the center of mass of a rod of length $L$ and mass $M$ with linear density $\lambda=bx=\mathrm{d}m/\mathrm{d}x$, where $b$ is constant.

$$
x_{\mathrm{CM}}=\frac{1}{M}\int x\,\mathrm{d}m
=\frac bM\int_0^L x^2\,\mathrm{d}x
=\frac{bL^3}{3M}.
$$

Since $M=\int_0^L bx\,\mathrm{d}x=bL^2/2$, the center of mass is at $x_{\mathrm{CM}}=2L/3$.

##### Uniform triangular lamina

The triangle has base $a$, height $b$, and uniform surface density $\sigma=M/A$. A vertical strip of width $\mathrm{d}x$ and height $y$ has mass $\mathrm{d}m=\sigma\,\mathrm{d}A=\sigma y\,\mathrm{d}x$.

![[Kyle Kabasares - Newtonian Mechanics - Triangular Lamina Mass Elements.png|**Fig. 148** The triangular lamina, the similar triangles, and a vertical strip used for integration.]]

By similar triangles, $x/y=a/b$ and $y=(b/a)x$. Therefore

$$
x_{\mathrm{CM}}=\frac{\sigma b}{Ma}\int_0^a x^2\,\mathrm{d}x
=\frac{\sigma a^2b}{3M}.
$$

Using $\sigma=2M/(ab)$ gives $x_{\mathrm{CM}}=2a/3$. Similarly, $y_{\mathrm{CM}}=b/3$.

##### Center-of-mass motion

Knowing the positions, velocities, and accelerations of the particles at an instant determines those of the center of mass. For constant masses, differentiate $x_{\mathrm{CM}}=\sum_i m_ix_i/M_T$:

$$
v_{\mathrm{CM},x}=\frac{\mathrm{d}x_{\mathrm{CM}}}{\mathrm{d}t}
=\frac{\sum_i m_i v_{ix}}{M_T},
\qquad
a_{\mathrm{CM},x}=\frac{\sum_i m_i a_{ix}}{M_T}.
$$

##### Moment of inertia

Moment of inertia $I$, also called rotational inertia, measures how difficult it is to give an object angular acceleration $\alpha$. It plays a role in rotational dynamics analogous to that of mass for linear acceleration. It depends on both the amount of mass and how the mass is arranged relative to the rotation axis.

For three objects of equal mass and radius, the mass is concentrated increasingly toward the center from left to right. The first has the largest moment of inertia.

![[Kyle Kabasares - Newtonian Mechanics - Comparing Three Moments of Inertia.png|**Fig. 149** Three mass distributions with the same outer radius and total mass.]]

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{a}$ | $\unit{m/s^2}$ | Acceleration | Rate of change of velocity. |
| $\mechanical{v}$ | $\unit{m/s}$ | Velocity | Rate of change of position. |
| $\Delta t$ | $\unit{s}$ | Elapsed time | Duration of the motion being measured. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Proportionality between net force and acceleration. |
| $\mechanical{\vec p}$ | $\unit{kg\,m/s}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec J}$ | $\unit{N\,s}$ | Impulse | Time integral of the net force, equal to the momentum change. |
