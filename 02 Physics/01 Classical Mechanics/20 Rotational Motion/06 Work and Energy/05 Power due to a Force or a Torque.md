---
title: "6.5 Power due to a Force or a Torque"
---

> [!TLDR]
> Power is the rate of work and depends on force and velocity or on torque and angular velocity.

## Power delivered by a force

Instantaneous power $\energy{\mathcal P}$ is the rate at which a force does work, or the rate of energy transfer or transformation by that force.

$$
\energy{\mathcal P}=\frac{d\energy W}{dt}=\frac{\mechanical{\vec F}\cdot d\mechanical{\vec S}}{dt}
=\mechanical{\vec F}\cdot\mechanical{\vec v}.
\tag{6.22}
$$

Here $\mechanical{\vec v}=d\mechanical{\vec S}/dt$ is the velocity of the point where the force acts. The SI unit is the watt, $\unit W=\unit{J\,s^{-1}}$. For a particle acted on by several forces,

$$
\energy{\mathcal P}_{\mathrm{net}}=\left(\sum\mechanical{\vec F}\right)\cdot\mechanical{\vec v}.
\tag{6.23}
$$

The work–kinetic energy theorem gives $\energy W_{\mathrm{net}}=\energy{KE}_f-\energy{KE}_i$. Holding the initial state fixed and varying the final time gives

$$
\energy{\mathcal P}_{\mathrm{net}}=\frac{d\energy W_{\mathrm{net}}}{dt}
=\frac{d(\energy{KE}_f-\energy{KE}_i)}{dt}.
\tag{6.24}
$$

Thus the net power equals the rate of change of kinetic energy.

$$
\energy{\mathcal P}_{\mathrm{net}}=\frac{d\energy{KE}}{dt}
=\left(\sum\mechanical{\vec F}\right)\cdot\mechanical{\vec v}.
\tag{6.25}
$$

## Power delivered by a torque

Use Equation (6.3) and $\mechanical{\vec\omega}=d\mechanical{\vec\theta}/dt$.

$$
\energy{\mathcal P}_{\mathrm{rot}}=\frac{d\energy W}{dt}
=\frac{\mechanical{\vec\tau}\cdot d\mechanical{\vec\theta}}{dt}
=\mechanical{\vec\tau}\cdot\mechanical{\vec\omega}.
\tag{6.26}
$$

This also has the SI unit watt. The power due to the net torque is

$$
\energy{\mathcal P}_{\mathrm{net,rot}}=\left(\sum\mechanical{\vec\tau}\right)\cdot\mechanical{\vec\omega}.
\tag{6.27}
$$

For a rigid body rotating about a fixed axis, the net rotational work is $\energy W_{\mathrm{net,rot}}=\energy{KE}_{\mathrm{rot},f}-\energy{KE}_{\mathrm{rot},i}$. Differentiation gives

$$
\energy{\mathcal P}_{\mathrm{net,rot}}=\frac{d\energy W_{\mathrm{net,rot}}}{dt}
=\frac{d(\energy{KE}_{\mathrm{rot},f}-\energy{KE}_{\mathrm{rot},i})}{dt}.
\tag{6.28}
$$

Together, these results give

$$
\energy{\mathcal P}_{\mathrm{net,rot}}
=\frac{d\energy{KE}_{\mathrm{rot}}}{dt}
=\left(\sum\mechanical{\vec\tau}\right)\cdot\mechanical{\vec\omega}.
\tag{6.29}
$$

Positive power transfers energy into the system. Negative power transfers energy out.

### Example 1. Interlocking gears

Two uniform gears on fixed axles perpendicular to their planes have radii $\mechanical R_1=1.0\,\unit m$ and $\mechanical R_2=0.5\,\unit m$ and moments of inertia $\mechanical I_1=2.0\,\unit{kg\,m^2}$ and $\mechanical I_2=1.0\,\unit{kg\,m^2}$. The gears are initially at rest. A force couple applies a constant torque to gear 2 starting at $t_0=0$. The gears turn without frictional losses or slipping. At $t_1$ gear 1 has angular speed $\mechanical\omega_1=5.0\,\unit{rad\,s^{-1}}$. Find the energy supplied by the couple.

![[rotational-motion-fig-6-3-interlocking-gears.svg|**Fig. 6.3** (a) Two gears mesh. Their pitch radii are $R_1$ and $R_2$. (b) The force couple turns gear 2 counterclockwise. The contact force $\mechanical{\vec n}_{21}$ turns gear 1 clockwise, and $\mechanical{\vec n}_{12}$ is its reaction on gear 2.|545]]

Gear 2 pushes down on gear 1, and gear 1 pushes back up on gear 2. Their contact velocities match, so these equal and opposite forces do equal and opposite work. The pitch-circle speed of the first gear equals that of the second.

$$
\mechanical v_1=\mechanical v_2
\quad\Longrightarrow\quad
\mechanical\omega_1\mechanical R_1=\mechanical\omega_2\mechanical R_2
\quad\Longrightarrow\quad
\mechanical\omega_2=\mechanical\omega_1\frac{\mechanical R_1}{\mechanical R_2}.
\tag{6.30}
$$

At $t_1$,

$$
\mechanical\omega_2=(5.0\,\unit{rad\,s^{-1}})\frac{1.0\,\unit m}{0.5\,\unit m}
=10\,\unit{rad\,s^{-1}}.
\tag{6.31}
$$

The gears are at rest initially. Apply the rotational work–kinetic energy theorem over $t_0$ to $t_1$.

$$
\underbrace{\energy{KE}_{\mathrm{rot},1i}}_0+
\underbrace{\energy{KE}_{\mathrm{rot},2i}}_0
+\energy W_{\mathrm{net,rot}}
=\energy{KE}_{\mathrm{rot},1f}+\energy{KE}_{\mathrm{rot},2f}.
\tag{6.32}
$$

Weight and table reactions contribute no work about the axes. The contact work cancels.

$$
\begin{aligned}
&\underbrace{\energy W_{\tau_{g1}}+\energy W_{\tau_{g2}}+\energy W_{\tau_{N1}}+\energy W_{\tau_{N2}}}_0\\
&\qquad+\energy W_{F_1,F_2}
+\underbrace{\energy W_{n_{12}}+\energy W_{n_{21}}}_0
=\energy{KE}_{\mathrm{rot},1f}+\energy{KE}_{\mathrm{rot},2f}.
\end{aligned}\tag{6.33}
$$

The change in the system’s kinetic energy comes from the applied couple.

$$
\begin{aligned}
\energy W_{F_1,F_2}
&=\tfrac12\mechanical I_1\mechanical\omega_1^2+\tfrac12\mechanical I_2\mechanical\omega_2^2\\
&=25\,\unit J+50\,\unit J=75\,\unit J.
\end{aligned}\tag{6.34}
$$

### Example 2. The simple pendulum

A small mass $\mechanical m$ on a massless, inelastic string of length $\mechanical l$ is released from rest with the string horizontal at height $\mechanical h_i$. The string is attached at $O$. Observe the motion until the string is vertical at height $\mechanical h_f$. Given $\mechanical g$, show that applying the work–kinetic energy theorem with linear or angular quantities gives the same energy balance.

![[rotational-motion-fig-6-4-simple-pendulum.svg|**Fig. 6.4** The simple pendulum starts horizontally at height $h_i$ and swings to height $h_f$. At an intermediate angle $\theta$, tension acts along the string, gravity acts down, and the displacement is tangent to the swing.|500]]

#### Using linear quantities

Choose $+y$ downward. Tension is perpendicular to the mass’s instantaneous displacement, so its work vanishes. Since the mass starts from rest,

$$
\begin{aligned}
\underbrace{\energy{KE}_i}_0+\energy W_{\mathrm{net}}&=\energy{KE}_f,\\
\energy W_{F_g}+\underbrace{\energy W_{F_T}}_0&=\energy{KE}_f,\\
\energy W_{F_g}&=\tfrac12\mechanical m\mechanical v_f^2.
\end{aligned}\tag{6.35}
$$

The angle $\mechanical\theta$ between the string and the horizontal also lies between the downward force and the tangent displacement.

$$
\energy W_{F_g}=\int_{\mechanical h_i}^{\mechanical h_f}\mechanical{\vec F}_g\cdot d\mechanical{\vec S}
=\int_{\mechanical h_i}^{\mechanical h_f}\mechanical F_g\cos\mechanical\theta\,d\mechanical S.
\tag{6.36}
$$

Since $\cos\mechanical\theta=d\mechanical y/d\mechanical S$ and $d\mechanical y=-d\mechanical h$,

$$
\energy W_{F_g}=\int_{\mechanical h_i}^{\mechanical h_f}\mechanical F_g\,d\mechanical y
=-\int_{\mechanical h_i}^{\mechanical h_f}\mechanical F_g\,d\mechanical h.
\tag{6.37}
$$

Inserting this in Equation (6.35) gives the loss of gravitational potential energy.

$$
\mechanical F_g(\mechanical h_i-\mechanical h_f)
=\mechanical m\mechanical g\mechanical h_i-\mechanical m\mechanical g\mechanical h_f
=\tfrac12\mechanical m\mechanical v_f^2.
\tag{6.38}
$$

#### Using angular quantities

The fixed axis passes through $O$ perpendicular to the page. The point mass has moment of inertia $\mechanical I=\mechanical m\mechanical l^2$. Tension points along the radius toward $O$, giving zero torque about it. The rotational work–kinetic energy theorem gives

$$
\begin{aligned}
\underbrace{\energy{KE}_{\mathrm{rot},i}}_0+\energy W_{\mathrm{net,rot}}
&=\energy{KE}_{\mathrm{rot},f},\\
\energy W_{\tau_{F_g}}+\underbrace{\energy W_{\tau_{F_T}}}_0
&=\tfrac12\mechanical I\mechanical\omega_f^2.
\end{aligned}\tag{6.39}
$$

The gravitational torque and the instantaneous angular displacement both point into the page. Therefore

$$
\energy W_{\tau_{F_g}}
=\int_{\mechanical\theta_i}^{\mechanical\theta_f}\mechanical{\vec\tau}_{F_g}\cdot d\mechanical{\vec\theta}
=\int_{\mechanical\theta_i}^{\mechanical\theta_f}\mechanical\tau_{F_g}\,d\mechanical\theta.
\tag{6.40}
$$

The torque magnitude is $\mechanical F_g\mechanical l\sin(\pi/2-\mechanical\theta)=\mechanical F_g\mechanical l\cos\mechanical\theta$. The angle runs from $0$ to $\pi/2$.

$$
\energy W_{\tau_{F_g}}=\int_0^{\pi/2}\mechanical F_g\mechanical l\cos\mechanical\theta\,d\mechanical\theta
=\mechanical F_g\mechanical l[\sin\mechanical\theta]_0^{\pi/2}
=\mechanical F_g(\mechanical h_i-\mechanical h_f).
\tag{6.41}
$$

Combining Equations (6.39) and (6.41) gives

$$
\mechanical F_g(\mechanical h_i-\mechanical h_f)=\tfrac12\mechanical I\mechanical\omega_f^2.
\tag{6.42}
$$

Use $\mechanical I=\mechanical m\mechanical l^2$ and $\mechanical\omega_f=\mechanical v_f/\mechanical l$ to recover Equation (6.38).

$$
\mechanical m\mechanical g\mechanical h_i-\mechanical m\mechanical g\mechanical h_f
=\tfrac12\mechanical m\mechanical l^2\frac{\mechanical v_f^2}{\mechanical l^2}
=\tfrac12\mechanical m\mechanical v_f^2 .
\tag{6.43}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{\mathcal P}$ | $\unit W$ | Power | Instantaneous rate of work. |
| $\energy W$ | $\unit J$ | Work | Energy transferred by a force or torque. |
| $\energy{KE}$ | $\unit J$ | Kinetic energy | Energy due to motion. |
| $\mechanical{\vec F}$ | $\unit N$ | Force | Force on the specified body. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of a force about the specified axis. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Velocity of the specified point. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Angular speed and axis direction. |
| $\mechanical R,\mechanical l,\mechanical h$ | $\unit m$ | Lengths | Radius, string length, and height. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the fixed axis. |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of the pendulum bob. |
| $\mechanical g$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Local magnitude of gravity. |
| $\mechanical\theta$ | $\unit{rad}$ | Angle | Angle of the pendulum string below horizontal. |
| $t$ | $\unit s$ | Time | Time during the motion. |
