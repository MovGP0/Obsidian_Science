---
title: "6.6 Conservation of Energy and Conservation of Mechanical Energy"
---

> [!TLDR]
> Track transfers and transformations of energy to determine when mechanical energy stays constant.

## Translational motion

The net work due to all forces is the sum of the work due to conservative forces (CF) and nonconservative forces (NCF).

$$
\energy W_{\mathrm{net}}=\energy W_{\mathrm{CF}}+\energy W_{\mathrm{NCF}}.
\tag{6.44}
$$

Use the work–kinetic energy theorem.

$$
\energy{KE}_i+\energy W_{\mathrm{CF}}+\energy W_{\mathrm{NCF}}=\energy{KE}_f .
\tag{6.45}
$$

The work done by conservative forces is independent of the path and equals the negative change of the corresponding potential energy.

$$
\energy W_{\mathrm{CF}}=-\Delta\energy U
=-(\energy U_f-\energy U_i)=\energy U_i-\energy U_f .
\tag{6.46}
$$

Substitution gives the mechanical energy balance.

$$
\begin{aligned}
\energy{KE}_i+(\energy U_i-\energy U_f)+\energy W_{\mathrm{NCF}}&=\energy{KE}_f,\\
\energy{KE}_i+\energy U_i+\energy W_{\mathrm{NCF}}&=\energy{KE}_f+\energy U_f .
\end{aligned}\tag{6.47}
$$

Equations (6.45) and (6.47) describe the same transfers of energy. Choose the form whose terms are easiest to evaluate. When $\energy W_{\mathrm{NCF}}=0$, mechanical energy is conserved. This includes cases with zero nonconservative force, with equal and opposite work from different forces, or with a force perpendicular to its displacement.

$$
\energy{KE}_i+\energy U_i=\energy{KE}_f+\energy U_f .
\tag{6.48}
$$

## Fixed-axis rotation

The same reasoning applies to rotational work. Separate the contributions due to the torques of conservative and nonconservative forces.

$$
\energy W_{\mathrm{net,rot}}=\energy W_{\tau_{\mathrm{CF}}}+\energy W_{\tau_{\mathrm{NCF}}}.
\tag{6.49}
$$

The rotational work–kinetic energy theorem gives

$$
\energy{KE}_{\mathrm{rot},i}+\energy W_{\tau_{\mathrm{CF}}}+\energy W_{\tau_{\mathrm{NCF}}}=\energy{KE}_{\mathrm{rot},f}.
\tag{6.50}
$$

As in the pendulum example, write the work due to conservative forces as $\energy U_i-\energy U_f$.

$$
\begin{aligned}
\energy{KE}_{\mathrm{rot},i}+(\energy U_i-\energy U_f)+\energy W_{\tau_{\mathrm{NCF}}}
&=\energy{KE}_{\mathrm{rot},f},\\
\energy{KE}_{\mathrm{rot},i}+\energy U_i+\energy W_{\tau_{\mathrm{NCF}}}
&=\energy{KE}_{\mathrm{rot},f}+\energy U_f .
\end{aligned}\tag{6.51}
$$

Mechanical energy is conserved if the torques due to nonconservative forces do zero net work about the axis.

$$
\energy{KE}_{\mathrm{rot},i}+\energy U_i=\energy{KE}_{\mathrm{rot},f}+\energy U_f .
\tag{6.52}
$$

Potential energy depends on the system’s configuration, which can be described using linear or angular coordinates. The pendulum lost the same gravitational potential energy in either calculation. When a body both translates and rotates, account for both contributions to kinetic energy. Chapter 7 treats that case.

### Example 3. Two masses and a pulley

A uniform pulley of mass $\mechanical M=4.0\,\unit{kg}$ and radius $\mechanical r=1.0\,\unit m$ turns without friction about the fixed horizontal axle through $O$. A massless, inelastic string runs around its rim. A mass $\mechanical m_1=2.0\,\unit{kg}$ hangs from one end and a heavier mass $\mechanical m_2=4.0\,\unit{kg}$ hangs from the other. Release the system from rest at $t_i=0$ with the masses at the same height. Find the pulley’s angular speed when the masses are separated vertically by $\mechanical h=2.0\,\unit m$. Assume no slipping, $\mechanical g=10\,\unit{m\,s^{-2}}$, and $\mechanical I=\tfrac12\mechanical M\mechanical r^2$.

![[rotational-motion-fig-6-5-pulley-energy.svg|**Fig. 6.5** (a) The hanging masses start at a common height. (b) The heavier mass descends, the lighter mass rises, and the pulley turns clockwise. The forces shown are tension, weight, and the reaction at the axle.|690]]

Each hanging mass is acted on by its weight and an upward tension. The pulley is acted on by its weight and two downward tensions, balanced by an upward axle reaction. As $\mechanical m_2$ descends, $\mechanical m_1$ rises by the same amount because the string is inelastic. The displacement magnitudes equal the arc length traveled by the rim since the string does not slip. Thus $\Delta\mechanical y_1=\Delta\mechanical y_2=\mechanical r\,\Delta\mechanical\theta=\mechanical h/2=1.0\,\unit m$.

The speed and tangential acceleration also match at the string and rim.

$$
\begin{aligned}
\mechanical a_1=\mechanical a_2=\mechanical a_{\mathrm{rim,t}}&=\mechanical\alpha\mechanical r=\mechanical a,\\
\mechanical v_1=\mechanical v_2=\mechanical v_{\mathrm{rim}}&=\mechanical\omega\mechanical r=\mechanical v .
\end{aligned}\tag{6.53}
$$

The problem can also be solved by applying Newton’s second law to each body. Here we use work and energy, taking the initial height of the masses as the zero of gravitational potential energy.

#### For the lighter mass

Gravity is conservative. The upward tension does positive work as $\mechanical m_1$ rises through $\mechanical h/2$.

$$
\begin{aligned}
\underbrace{\energy{KE}_{1i}}_0+\underbrace{\energy U_{1i}}_0+\energy W_{F_{T1}}&=\energy{KE}_{1f}+\energy U_{1f},\\
\mechanical F_{T1}\frac{\mechanical h}{2}
&=\tfrac12\mechanical m_1\mechanical v^2+\mechanical m_1\mechanical g\frac{\mechanical h}{2}.
\end{aligned}\tag{6.54}
$$

#### For the heavier mass

The upward tension does negative work as $\mechanical m_2$ descends through $\mechanical h/2$. The gravitational potential energy also decreases.

$$
\begin{aligned}
\underbrace{\energy{KE}_{2i}}_0+\underbrace{\energy U_{2i}}_0+\energy W_{F_{T2}}&=\energy{KE}_{2f}+\energy U_{2f},\\
-\mechanical F_{T2}\frac{\mechanical h}{2}
&=\tfrac12\mechanical m_2\mechanical v^2-\mechanical m_2\mechanical g\frac{\mechanical h}{2}.
\end{aligned}\tag{6.55}
$$

#### For the pulley

The pulley’s center stays fixed and its gravitational potential energy stays constant. Weight and the axle reaction act through the axis, so neither does rotational work. The torque work of the tensions supplies the kinetic energy.

$$
\energy W_{\tau_{F'_{T1}}}+\energy W_{\tau_{F'_{T2}}}
=\tfrac12\mechanical I\mechanical\omega^2
=\tfrac12\left(\tfrac12\mechanical M\mechanical r^2\right)\frac{\mechanical v^2}{\mechanical r^2}
=\tfrac14\mechanical M\mechanical v^2 .
\tag{6.56}
$$

The torque due to the left tension points out of the page, opposite the clockwise angular displacement. The torque due to the right tension points into the page, along the angular displacement. Each tension is perpendicular to its radius.

$$
\begin{aligned}
\energy W_{\tau_{F'_{T1}}}&=-\mechanical F'_{T1}\mechanical r\,\Delta\mechanical\theta=-\mechanical F'_{T1}\frac{\mechanical h}{2},\\
\energy W_{\tau_{F'_{T2}}}&=\phantom{-}\mechanical F'_{T2}\mechanical r\,\Delta\mechanical\theta=\phantom{-}\mechanical F'_{T2}\frac{\mechanical h}{2}.
\end{aligned}\tag{6.57}
$$

The pulley’s energy balance is therefore

$$
-\mechanical F'_{T1}\frac{\mechanical h}{2}+\mechanical F'_{T2}\frac{\mechanical h}{2}
=\tfrac14\mechanical M\mechanical v^2 .
\tag{6.58}
$$

Equal tensions would give zero net work on the pulley and leave it at rest. Its rotational inertia requires a tension difference.

#### For the system

Add Equations (6.54), (6.55), and (6.58). The tensions at the ends of an ideal string segment have equal magnitudes, $\mechanical F_{T1}=\mechanical F'_{T1}$ and $\mechanical F_{T2}=\mechanical F'_{T2}$. The non-slip constraint gives the same displacement magnitude $\mechanical h/2$ for each matching pair of work terms. Thus the internal tension work cancels in the system balance.

$$
\begin{aligned}
(\mechanical F_{T1}-\mechanical F_{T2}-\mechanical F'_{T1}+\mechanical F'_{T2})\frac{\mechanical h}{2}
&=\frac{\mechanical g\mechanical h}{2}(\mechanical m_1-\mechanical m_2)
+\frac{\mechanical v^2}{2}\left(\mechanical m_1+\mechanical m_2+\frac{\mechanical M}{2}\right),\\
0&=\frac{\mechanical g\mechanical h}{2}(\mechanical m_1-\mechanical m_2)
+\frac{\mechanical v^2}{2}\left(\mechanical m_1+\mechanical m_2+\frac{\mechanical M}{2}\right).
\end{aligned}\tag{6.59}
$$

Solving for $\mechanical v^2$ gives

$$
\mechanical v^2=\frac{\mechanical g\mechanical h(\mechanical m_2-\mechanical m_1)}
{\mechanical m_1+\mechanical m_2+\tfrac12\mechanical M}.
\tag{6.60}
$$

With the given values,

$$
\begin{aligned}
\mechanical v^2&=\frac{(10\,\unit{m\,s^{-2}})(2.0\,\unit m)(4.0-2.0)\,\unit{kg}}
{(2.0+4.0+\tfrac12(4.0))\,\unit{kg}}
=5.0\,\unit{m^2\,s^{-2}},\\
\mechanical v&=\sqrt{5.0}\,\unit{m\,s^{-1}}.
\end{aligned}\tag{6.61}
$$

The pulley’s angular speed at $t_f$ is $\mechanical\omega=\mechanical v/\mechanical r=\sqrt{5.0}\,\unit{rad\,s^{-1}}$.

## Exercises

(i) Two uniform horizontal disks $D_1$ and $D_2$ with moments of inertia $\mechanical I_1$ and $\mechanical I_2$ rotate in opposite directions about the same vertical axis through their centers. Their angular speeds are $\mechanical\omega_1$ and $\mechanical\omega_2$. The disks start a small distance apart. Move $D_2$ upward until it contacts and sticks to $D_1$. Find the kinetic energy of the system before and after they stick together.

(ii) A uniform cylindrical drum of radius $\mechanical R=0.2\,\unit m$ and moment of inertia $1.0\,\unit{kg\,m^2}$ can turn about the vertical axis through its center $O$. A rigid massless rod $AB$ of length $1.0\,\unit m$ is fixed to the drum at its midpoint, with a point mass $\mechanical m=3.0\,\unit{kg}$ attached to each end. The system starts at rest on a table. At $t_0=0$, a constant force $\mechanical{\vec F}$ pulls a massless, inelastic cord wrapped around the rim. At $t_1=10\,\unit s$, the angular speed is $\mechanical\omega_1=4\pi\,\unit{rad\,s^{-1}}$. Neglect friction. Find (a) the number of revolutions during the first $10\,\unit s$, (b) the radial and tangential components of acceleration of one mass at $t_1$, (c) the system’s kinetic energy at $t_1$, (d) the force magnitude, and (e) the power delivered at $t_1$.

![[rotational-motion-fig-6-6.svg|**Fig. 6.6** Top view of the drum, rod, and two masses. The force acts through a rope wrapped around the drum.|370]]

(iii) A uniform thin rod of mass $\mechanical M=3.0\,\unit{kg}$ and length $\mechanical L=1.0\,\unit m$ hangs vertically from a ceiling hinge. It can rotate about the horizontal axis through the hinge. At $t_0=0$, a force of constant magnitude $\mechanical F=30\,\unit N$ is applied at the free end, perpendicular to the rod throughout the motion. At $t_1$ the rod is horizontal and its angular speed is $\mechanical\omega=2.0\,\unit{rad\,s^{-1}}$. Find the work done by hinge friction between $t_0$ and $t_1$. Use $\mechanical I=\tfrac13\mechanical M\mechanical L^2$ and $\mechanical g=10\,\unit{m\,s^{-2}}$.

(iv) A uniform pulley of radius $\mechanical R$ and mass $\mechanical M=4.0\,\unit{kg}$ turns without friction about a horizontal axis through $O$. An inelastic massless rope wound around the rim has a mass $\mechanical m=2.0\,\unit{kg}$ hanging from one end. Its other end is tied to an ideal vertical spring anchored to the ground, with spring constant $\mechanical k=100\,\unit{N\,m^{-1}}$. The rope is taut and the spring is at its natural length $\mechanical l_0$ when released from rest at $t_0=0$. Find (a) the spring extension when the hanging mass reaches its maximum speed, (b) that speed, and (c) the maximum magnitude of the force exerted by the spring on the ground. Assume no slipping, $\mechanical g=10\,\unit{m\,s^{-2}}$, and $\mechanical I=\tfrac12\mechanical M\mechanical R^2$.

![[rotational-motion-fig-6-7.svg|**Fig. 6.7** The hanging mass and vertical spring are connected by a rope wound around the pulley. The spring starts at its natural length $l_0$ and stretches as the mass falls.|370]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy W$ | $\unit J$ | Work | Energy transferred by a force or torque. |
| $\energy{KE}$ | $\unit J$ | Kinetic energy | Translational or rotational energy of motion. |
| $\energy U$ | $\unit J$ | Potential energy | Energy associated with the system’s configuration. |
| $\energy{\mathcal P}$ | $\unit W$ | Power | Instantaneous rate of work. |
| $\mechanical F_T$ | $\unit N$ | Tension magnitude | Force exerted by the string. |
| $\mechanical{\vec R}$ | $\unit N$ | Reaction force | Force exerted by the pulley’s axle. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the specified axis. |
| $\mechanical m,\mechanical M$ | $\unit{kg}$ | Mass | Mass of a system component. |
| $\mechanical r,\mechanical R$ | $\unit m$ | Radius | Radius of the pulley or drum. |
| $\mechanical h,\Delta\mechanical y$ | $\unit m$ | Vertical distances | Separation or individual displacement magnitude. |
| $\mechanical v$ | $\unit{m\,s^{-1}}$ | Speed | Speed of the mass, string, or pulley rim. |
| $\mechanical\omega$ | $\unit{rad\,s^{-1}}$ | Angular speed | Magnitude of angular velocity. |
| $\mechanical\alpha$ | $\unit{rad\,s^{-2}}$ | Angular acceleration magnitude | Rate of change of angular speed in the example. |
| $\Delta\mechanical\theta$ | $\unit{rad}$ | Angular displacement magnitude | Angle swept by the pulley. |
| $\mechanical a,\mechanical g$ | $\unit{m\,s^{-2}}$ | Acceleration magnitudes | Tangential or linear acceleration, and gravitational acceleration. |
| $\mechanical k$ | $\unit{N\,m^{-1}}$ | Spring constant | Force per unit extension of the spring. |
| $\mechanical l_0,\mechanical L$ | $\unit m$ | Lengths | Spring’s natural length and the rod’s length. |
| $t$ | $\unit s$ | Time | Time during the motion. |
