---
title: "7.3 The Dynamics of Rolling Motion"
---

> [!TLDR]
> The force and torque equations, together with the rolling constraint, determine the acceleration and friction.

Chapters 2 and 3 applied Newton’s laws to equilibrium and rotation. For straight-line rolling, apply those laws to the translation of the center of mass and to rotation about it. For a rigid body with constant moment of inertia about the relevant axis, the five cases discussed in the source are:

| Net force | Net torque about the center | Motion |
| --- | --- | --- |
| Zero | Zero | The center-of-mass velocity and angular velocity stay constant. With both zero the body is stationary. |
| Constant and nonzero | Zero | The center accelerates uniformly and the angular velocity stays constant. |
| Zero | Constant and nonzero | The center-of-mass velocity stays constant and the angular acceleration is constant. |
| Constant and nonzero | Constant and nonzero | The center-of-mass acceleration and angular acceleration are both constant. |
| Variable | Variable | Use Newton’s laws to find instantaneous accelerations. Constant-acceleration kinematics do not apply. |

Pure rolling constrains the translational and angular accelerations through Equation (7.5). The force and torque must satisfy that constraint.

## 7.3.1 Direction of the Static Friction in Rolling Motion

![[rotational-motion-fig-7-7.svg|**Fig. 7.7** A disk rolls without slipping down (a) and up (b) an incline. The static friction points up the slope in both cases and produces clockwise angular acceleration about the center.|540]]

Consider a uniform disk rolling down an incline. Its weight acts at the center and the normal force passes through the center, so neither has a torque about that point. There is no kinetic friction in rolling without slipping. Static friction is the only force that supplies a torque about the center.

In Fig. 7.7(a), the disk rotates clockwise and speeds up on the way down. The change $\Delta\mechanical{\vec\omega}$ and the angular acceleration $\mechanical{\vec\alpha}$ both point into the page. Static friction at the point of contact must point uphill to produce a torque into the page.

In Fig. 7.7(b), the disk rotates counterclockwise and slows down on the way up. The angular velocity points out of the page, and its change again points into the page. Static friction again points uphill and supplies the required clockwise torque.

## 7.3.2 Dynamics of a Spool of Thread

Use the spool of Fig. 7.6. It is modeled as a uniform disk of mass $\mechanical M$, outer radius $\mechanical R$, groove radius $\mechanical r$, and moment of inertia $\mechanical I$ about its axis through $O$. A force $\mechanical{\vec F}$ pulls the free end $A$ at angle $\mechanical\phi$ above the horizontal. Its line of action passes through $A'$, the point of tangency with the groove. The rope does not slip on the groove, and the spool rolls without slipping. While the spool rolls to the right, the rope winds up onto the groove, as Equation (7.15) shows.

![[rotational-motion-fig-7-8-spool-forces.svg|**Fig. 7.8** A pull at the free end $A$ is transmitted along the rope to $A'$. The normal force and static friction act at the ground contact $B$, and weight acts at $O$. The illustrated pull accelerates the spool to the right.|480]]

Take $+x$ to the right, $+y$ up, and $+z$ out of the page. Look first at the torque about the ground contact $B$. Weight passes through $B$, and the normal force and friction act at $B$. If the pull’s line of action meets the ground to the left of $B$, it drives clockwise angular acceleration and the spool accelerates to the right. If it meets the ground to the right of $B$, the torque drives counterclockwise angular acceleration and the spool accelerates to the left. The transition is where the line passes through $B$.

Now take torques about the center $O$. The pull gives a counterclockwise torque. To produce the clockwise angular acceleration shown, friction must point left and give a clockwise torque. Let $\mechanical f_s$ be its leftward component and let $\mechanical a_{\mathrm{cm}}$ and $\mechanical\alpha$ be positive for rightward and clockwise acceleration, respectively.

### Translation

Vertical equilibrium gives

$$
\sum\mechanical F_y=\mechanical n+\mechanical F\sin\mechanical\phi-\mechanical M\mechanical g=0 .
\tag{7.16}
$$

Newton’s second law along the ground gives

$$
\begin{aligned}
\sum\mechanical F_x&=\mechanical F\cos\mechanical\phi-\mechanical f_s=\mechanical M\mechanical a_{\mathrm{cm}},\\
\mechanical f_s&=\mechanical F\cos\mechanical\phi-\mechanical M\mechanical a_{\mathrm{cm}} .
\end{aligned}\tag{7.17}
$$

The available static friction satisfies $|\mechanical f_s|\le\mechanical\mu_s\mechanical n$. Equality holds at the threshold of slipping.

### Rotation

The normal force and weight have zero torque about $O$. The radius to the contact is perpendicular to the friction force. The pull is tangent to the groove, perpendicular to the radius at $A'$.

$$
\sum\mechanical\tau_{O,z}=-\mechanical f_s\mechanical R+\mechanical F\mechanical r=-\mechanical I\mechanical\alpha
\quad\Longrightarrow\quad
\mechanical f_s\mechanical R-\mechanical F\mechanical r=\mechanical I\mechanical\alpha .
\tag{7.18}
$$

Use $\mechanical a_{\mathrm{cm}}=\mechanical\alpha\mechanical R$ and Equation (7.17).

$$
\begin{aligned}
\mechanical f_s\mechanical R-\mechanical F\mechanical r&=\mechanical I\frac{\mechanical a_{\mathrm{cm}}}{\mechanical R},\\
(\mechanical F\cos\mechanical\phi-\mechanical M\mechanical a_{\mathrm{cm}})\mechanical R-\mechanical F\mechanical r
&=\mechanical I\frac{\mechanical a_{\mathrm{cm}}}{\mechanical R}.
\end{aligned}\tag{7.19}
$$

Solving gives

$$
\mechanical a_{\mathrm{cm}}
=\frac{\mechanical F(\cos\mechanical\phi-\mechanical r/\mechanical R)}
{\mechanical M+\mechanical I/\mechanical R^2}.
\tag{7.20}
$$

The sign switches when $\cos\mechanical\phi=\mechanical r/\mechanical R$. For a steeper pull, the acceleration is leftward. Since $\mechanical F\cos\mechanical\phi$ still points right for an acute pull angle, friction then points left and has the greater horizontal magnitude.

### Example 1. Sphere rolling down a ramp

A uniform solid sphere of mass $\mechanical M=7.0\,\unit{kg}$ and radius $\mechanical R$ starts at rest on a ramp inclined at $\mechanical\phi=30^\circ$. It rolls without slipping from $t_0=0$. Find (a) the acceleration of its center, (b) the vertical distance it descends in $1.4\,\unit s$, (c) the reaction force from the ramp, and (d) the minimum coefficient of static friction. Use $\mechanical g=10\,\unit{m\,s^{-2}}$ and $\mechanical I_{\mathrm{cm}}=\tfrac25\mechanical M\mechanical R^2$.

![[rotational-motion-fig-7-9-sphere-on-incline.svg|**Fig. 7.9** (a) The sphere starts at rest on the incline. (b) Weight acts at the center and the contact reaction is the vector sum of the normal force and uphill static friction.|620]]

The total reaction from the ramp is

$$
\mechanical{\vec A}=\mechanical{\vec n}+\mechanical{\vec f}_s.
\tag{7.21}
$$

Resolve the motion into translation with $+x$ downhill and $+y$ perpendicular to the ramp, and rotation with clockwise torque positive. There is no acceleration perpendicular to the ramp, so

$$
\begin{aligned}
\sum\mechanical F_y&=\mechanical n-\mechanical M\mechanical g\cos\mechanical\phi=0,\\
\mechanical n&=(7.0\,\unit{kg})(10\,\unit{m\,s^{-2}})\cos30^\circ=60.6\,\unit N.
\end{aligned}\tag{7.22}
$$

Along the incline,

$$
\sum\mechanical F_x=\mechanical M\mechanical g\sin\mechanical\phi-\mechanical f_s
=\mechanical M\mechanical a_{\mathrm{cm}} .
\tag{7.23}
$$

Only friction contributes torque about the center. Hence

$$
\mechanical f_s\mechanical R=\mechanical I_{\mathrm{cm}}\mechanical\alpha
=\tfrac25\mechanical M\mechanical R^2\mechanical\alpha
\quad\Longrightarrow\quad
\mechanical f_s=\tfrac25\mechanical M\mechanical R\mechanical\alpha .
\tag{7.24}
$$

Use the no-slip acceleration constraint.

$$
\mechanical f_s=\tfrac25\mechanical M\mechanical a_{\mathrm{cm}} .
\tag{7.25}
$$

**(a) Center-of-mass acceleration.** Substitute Equation (7.25) into Equation (7.23).

$$
\begin{aligned}
\mechanical g\sin\mechanical\phi&=\tfrac75\mechanical a_{\mathrm{cm}},\\
\mechanical a_{\mathrm{cm}}&=\tfrac57\mechanical g\sin\mechanical\phi
=\tfrac{25}{7}\,\unit{m\,s^{-2}} .
\end{aligned}\tag{7.26}
$$

**(b) Vertical distance.** The acceleration is constant and the sphere starts from rest. The downhill kinematics give

$$
\mechanical v=\underbrace{\mechanical v_0}_0+\mechanical a_{\mathrm{cm}}\Delta t
=\mechanical a_{\mathrm{cm}}\Delta t
\tag{7.27}
$$

and

$$
\Delta\mechanical x=\underbrace{\mechanical v_0}_0\Delta t+\tfrac12\mechanical a_{\mathrm{cm}}(\Delta t)^2
=\tfrac12\mechanical a_{\mathrm{cm}}(\Delta t)^2 .
\tag{7.28}
$$

At $\Delta t=1.4\,\unit s$,

$$
\Delta\mechanical x=\tfrac12\left(\tfrac{25}{7}\,\unit{m\,s^{-2}}\right)(1.4\,\unit s)^2
=\tfrac72\,\unit m .
\tag{7.29}
$$

The corresponding vertical drop is

$$
\mechanical h=\Delta\mechanical x\sin\mechanical\phi
=(\tfrac72\,\unit m)\sin30^\circ=\tfrac74\,\unit m .
\tag{7.30}
$$

**(c) Reaction force.** The static friction magnitude is

$$
\mechanical f_s=\tfrac25(7.0\,\unit{kg})(\tfrac{25}{7}\,\unit{m\,s^{-2}})=10\,\unit N .
\tag{7.31}
$$

The contact forces are perpendicular, so the reaction magnitude is

$$
\mechanical A=\sqrt{\mechanical f_s^2+\mechanical n^2}
=\sqrt{(10\,\unit N)^2+(60.6\,\unit N)^2}=61.4\,\unit N .
\tag{7.32}
$$

The angle above the uphill direction is

$$
\tan\mechanical\theta=\frac{\mechanical n}{\mechanical f_s}=\frac{60.6\,\unit N}{10\,\unit N}
\quad\Longrightarrow\quad \mechanical\theta\approx1.4\,\unit{rad}.
\tag{7.33}
$$

**(d) Static friction coefficient.** The magnitude of static friction cannot exceed $\mechanical\mu_s\mechanical n$.

$$
\mechanical f_s\le\mechanical f_{s,\max}=\mechanical\mu_s\mechanical n
\quad\Longrightarrow\quad
\mechanical\mu_s\ge\frac{\mechanical f_s}{\mechanical n}.
\tag{7.34}
$$

At the threshold,

$$
\mechanical\mu_{s,\min}=\frac{\mechanical f_s}{\mechanical n}
=\frac{10\,\unit N}{60.6\,\unit N}\approx0.165 .
\tag{7.35}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical M$ | $\unit{kg}$ | Mass | Mass of the disk or sphere. |
| $\mechanical{\vec v}_{\mathrm{cm}}$ | $\unit{m\,s^{-1}}$ | Center-of-mass velocity | Velocity of the center of mass. |
| $\mechanical{\vec a}_{\mathrm{cm}}$ | $\unit{m\,s^{-2}}$ | Center-of-mass acceleration | Acceleration of the center of mass. |
| $\mechanical{\vec\omega},\Delta\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity and its change | Rotation rate and direction and the change over an interval. |
| $\mechanical{\vec\alpha}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of force about the specified axis. |
| $\mechanical{\vec F},\mechanical{\vec n},\mechanical{\vec f}_s,\mechanical{\vec A}$ | $\unit N$ | Forces | Pull, normal force, static friction, and total contact reaction. |
| $\mechanical\mu_s$ | $1$ | Static friction coefficient | Ratio of maximum static friction to normal force. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the axis through the center. |
| $\mechanical r,\mechanical R,\mechanical h$ | $\unit m$ | Lengths | Groove radius, outer radius, and vertical drop. |
| $\mechanical\phi,\mechanical\theta$ | $\unit{rad}$ | Angles | Pull or slope angle, and direction of the contact reaction. |
| $\mechanical g$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Local magnitude of gravity. |
| $t$ | $\unit s$ | Time | Time during the motion. |
