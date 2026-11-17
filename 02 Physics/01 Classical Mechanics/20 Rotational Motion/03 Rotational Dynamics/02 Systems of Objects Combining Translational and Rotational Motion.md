---
title: "3.2 Systems of Objects Combining Translational and Rotational Motion"
---

> [!TLDR]
> Link the translational and rotational equations with the constraints of the system.

When a system contains objects that can move independently, analyze them separately and identify the constraints connecting them. The relations $\mechanical v=\mechanical\omega\mechanical r$ and $\mechanical a_t=\mechanical\alpha\mechanical r$ connect tangential motion at a given radius with rotation.

**Example 4. Mass–pulley system.** A uniform pulley has radius $\mechanical r$, mass $\mechanical M$, and moment of inertia $\mechanical I$. It rotates without friction about a horizontal axle through its center $O$, perpendicular to the pulley. An inelastic, massless rope is wound around the rim and suspends a mass $\mechanical m$ from its free end. The system starts from rest at $t_0$. Find (a) the pulley’s angular acceleration, (b) the hanging mass’s linear acceleration, (c) the rope tension, (d) the force $\mechanical{\vec R}$ exerted by the axle on the pulley, (e) the centripetal acceleration of a point on the rim at time $t$, and (f) the displacement of the mass from $t_0$ to $t$. The rope does not slip and $\mechanical g$ is given.

Draw and label the forces and axes as in Fig. 3.6. The forces on the pulley are its weight $\mechanical{\vec F}_g$, the axle reaction $\mechanical{\vec R}$, and the rope’s force $\mechanical{\vec F}_T$. The hanging mass experiences its weight $\mechanical{\vec F}_{gm}$ and the rope’s force $\mechanical{\vec F}'_T$.

![[rotational-motion-fig-3-6.svg|**Fig. 3.6** A uniform pulley is free to rotate about a horizontal axle that goes through its center O and is perpendicular to the plane of the pulley. A massless and inelastic rope is wound around the pulley at its circumference and a mass is hanging from the rope’s free end.|370]]

**For the pulley $\mechanical M$.** There are no horizontal forces. The axle fixes the vertical position of the pulley’s center, so the net vertical force is zero.

$$
\Sigma \mechanical{\vec {F}}_{y} = 0 \Rightarrow \mechanical{R} - \mechanical{F}_{g} - \mechanical{F}_{T} = 0 \Rightarrow \mechanical{R} = \mechanical{F}_{g} + \mechanical{F}_{T} . \tag{3.33}
$$

The pulley rotates as $\mechanical m$ descends. Apply Newton’s second law for rotational motion about the axis through $O$ perpendicular to the page.

$$
\begin{aligned}
\sum\mechanical{\vec\tau}_O &= \mechanical I\mechanical{\vec\alpha},\\
\underbrace{\mechanical{\tau}_R}_0+\underbrace{\mechanical{\tau}_{F_g}}_0
+\mechanical{\tau}_{F_T} &= \mechanical I\mechanical\alpha,\\
\mechanical F_T\mechanical r\sin(\pi/2) &= \mechanical I\mechanical\alpha,\\
\mechanical\alpha &= \frac{\mechanical F_T\mechanical r}{\mechanical I}.
\end{aligned}
\tag{3.34}
$$

The weight $\mechanical{\vec F}_g$ and axle force $\mechanical{\vec R}$ act at the axis and produce zero torque about it. The rope’s tension supplies the net torque. The force is constant and the rotation axis is fixed, so the angular acceleration $\mechanical{\vec\alpha}$ is constant. The pulley starts from rest, with $\mechanical\omega_0=0$.

$$
\Delta \mechanical{\theta} = \underbrace {\mechanical{\omega}_{0}}_{0} \Delta t + \frac {1} {2} \mechanical{\alpha} \Delta t^{2} = \frac {1} {2} \mechanical{\alpha} \Delta t^{2} , \tag{3.35}
$$

$$
\mechanical{\omega} = \underbrace {\mechanical{\omega}_{0}}_{0} + \mechanical{\alpha} \Delta t = \mechanical{\alpha} \Delta t . \tag{3.36}
$$

The tension rotates the pulley counterclockwise in Fig. 3.6, which sets the positive direction used here. The tension $\mechanical F_T$ is still unknown, so analyze the mass next.

**For the hanging mass $\mechanical m$.** There are no horizontal forces. Apply Newton’s second law along the vertical axis with $+y$ upward and $\mechanical a$ the magnitude of the downward acceleration.

$$
\begin{aligned}
\sum\mechanical{\vec F}_y &= \mechanical m\mechanical{\vec a},\\
\mechanical F_T'-\mechanical F_{gm} &= -\mechanical m\mechanical a,\\
\mechanical a &=\frac{\mechanical m\mechanical g-\mechanical F_T'}{\mechanical m}.
\end{aligned}
\tag{3.37}
$$

The net vertical force is constant, so the hanging mass moves with constant acceleration from rest. With $\mechanical v_0=0$, the vertical displacement and velocity are

$$
\Delta \mechanical{y} = \underbrace {\mechanical{v}_{0}}_{0} \Delta t - \frac {1} {2} \mechanical{a} \Delta t^{2} = - \frac {1} {2} \mechanical{a} \Delta t^{2} , \tag{3.38}
$$

$$
\mechanical{v}_{y} = \underbrace {\mechanical{v}_{0}}_{0} - \mechanical{a} \Delta t = - \mechanical{a} \Delta t . \tag{3.39}
$$

Connect the motion of the pulley and the hanging mass using the rope.

(i) The massless free segment of rope has equal tensions at its two ends. The force-object and rope-object interaction pairs give $\mechanical F_T=\mechanical F'_T$ in magnitude.

(ii) The rope is inelastic, so the straight segment has the same speed and acceleration at the pulley contact $B$ and at the hanging mass $A$. With no slipping, the pulley’s tangential speed and tangential acceleration at $B$ match those of the rope.

$$
\mechanical{v}_{A} = \mechanical{v}_{B} = \mechanical{\omega} \mechanical{r} \tag{3.40}
$$

$$
\mechanical{a}_{A} = \mechanical{a}_{B,t} = \mechanical{\alpha} \mechanical{r} . \tag{3.41}
$$

Substitute Equations (3.34) and (3.37) into $\mechanical a=\mechanical\alpha\mechanical r$ and use $\mechanical F_T=\mechanical F_T'$.

$$
\begin{aligned}
\mechanical{a} & = \mechanical{\alpha} \mechanical{r} \\ & \Rightarrow \frac {\mechanical{m} \mechanical{g} - \mechanical{F}_{T}^{\prime}} {\mechanical{m}} = \frac {\mechanical{F}_{T} \mechanical{r}} {\mechanical{I}} \mechanical{r} \\ & \Rightarrow \mechanical{m} \mechanical{g} - \mechanical{F}_{T} = \frac {\mechanical{m} \mechanical{F}_{T} \mechanical{r}^{2}} {\mechanical{I}} \\ & \Rightarrow \mechanical{m} \mechanical{g} = \mechanical{F}_{T} \left ( \frac {\mechanical{m} \mechanical{r}^{2}} {\mechanical{I}} + 1 \right ) \\ & \Rightarrow \mechanical{F}_{T} = \frac {\mechanical{m} \mechanical{g}} {\frac {\mechanical{m} \mechanical{r}^{2}} {\mechanical{I}} + 1} .
\end{aligned} \tag{3.42}
$$

This is the answer to part (c).

(a) Now, we can plug this result into Equation (3.34)

$$
\mechanical{\alpha} = \frac {\mechanical{F}_{T} \mechanical{r}} {\mechanical{I}} = \frac {\mechanical{m} \mechanical{g}} {\frac {\mechanical{m} \mechanical{r}^{2}} {\mechanical{I}} + 1} \cdot \frac {\mechanical{r}} {\mechanical{I}} = \frac {\mechanical{m} \mechanical{g} \mechanical{r}} {\mechanical{m} \mechanical{r}^{2} + \mechanical{I}} , \tag{3.43}
$$

This is the pulley’s angular acceleration.

(b) Use $\mechanical a=\mechanical\alpha\mechanical r$ to obtain the magnitude of the hanging mass’s acceleration.

$$
\mechanical{a} = \mechanical{\alpha} \mechanical{r} = \frac {\mechanical{m} \mechanical{g} \mechanical{r}^{2}} {\mechanical{m} \mechanical{r}^{2} + \mechanical{I}} \tag{3.44}
$$

(d) Now we can plug the result of part (c) in Equation (3.33) to find $\mechanical R$.

$$
\mechanical{R} = \mechanical{F}_{g} + \mechanical{F}_{T} = \mechanical{M} \mechanical{g} + \mechanical{F}_{T} = \mechanical{g} \left ( \mechanical{M} + \frac {\mechanical{m}} {\frac {\mechanical{m} \mechanical{r}^{2}} {\mechanical{I}} + 1} \right ) . \tag{3.45}
$$

(e) At time $t$, Equation (3.39) gives

$$
\mechanical{v}_{y} = - \mechanical{a} \Delta t = - \frac {\mechanical{m} \mechanical{g} \mechanical{r}^{2} \Delta t} {\mechanical{m} \mechanical{r}^{2} + \mechanical{I}} . \tag{3.46}
$$

The rim’s linear speed matches the speed of the mass, $\mechanical v=|\mechanical v_y|$. Use this speed to find the magnitude of the centripetal acceleration.

$$
\mechanical{a}_{c} = \frac {\mechanical{v}^{2}} {\mechanical{r}} = \left ( \frac {\mechanical{m} \mechanical{g} \mechanical{r}^{2} \Delta t} {\mechanical{m} \mechanical{r}^{2} + \mechanical{I}} \right )^{2} \frac {1} {\mechanical{r}} = \left ( \frac {\mechanical{m} \mechanical{g} \Delta t} {\mechanical{m} \mechanical{r}^{2} + \mechanical{I}} \right )^{2} \mechanical{r}^{3} , \tag{3.47}
$$

where $\Delta t=t-t_0$.

(f) From Equation (3.38), if we use our result from part (b), we get:

$$
\Delta \mechanical{y} = - \frac {1} {2} \mechanical{a} \Delta t^{2} = - \frac {1} {2} \frac {\mechanical{m} \mechanical{g} \mechanical{r}^{2}} {\mechanical{m} \mechanical{r}^{2} + \mechanical{I}} \Delta t^{2} . \tag{3.48}
$$

### Exercises

(i) Derive Newton’s second law for rotational motion, Equation (3.5), from $\sum\mechanical{\vec F}=\mechanical m\mechanical{\vec a}$. Take the cross product $\mechanical{\vec r}\times\sum\mechanical{\vec F}$ and use $\mechanical{\vec a}_t=\mechanical{\vec\alpha}\times\mechanical{\vec r}$ from Exercise 5 of Chapter 1. You may need the identity

$$
\vec A\times(\vec B\times\vec C)=\vec B(\vec A\cdot\vec C)-\vec C(\vec A\cdot\vec B).
$$

(ii) Four point masses are fixed to the rim of the vertical disk in Fig. 3.7. The system can turn about an axis through its center $O$ perpendicular to the page. It starts from rest at $t_0=0$. Find its angular acceleration immediately after release. Use $\mechanical g=10\,\unit{m\,s^{-2}}$, a disk radius $\mechanical R=2.5\,\unit m$, and a moment of inertia $\mechanical I=422\,\unit{kg\,m^2}$ about the rotation axis.

![[rotational-motion-fig-3-7.svg|**Fig. 3.7** Four point masses are stuck on the surface of a vertical disk at the rim. Once released from rest, the system will rotate about an axis that goes through its center O and is perpendicular to the plane of the page.|370]]

(iii) The pulley in Fig. 3.8 comprises two attached, concentric nonuniform disks of radii $\mechanical R=1.0\,\unit m$ and $\mechanical r=0.5\,\unit m$. The fixed axis passes through their center and is perpendicular to the page. Two separate, massless, inelastic strings wrap around the rims and connect to masses $\mechanical m_1=3.0\,\unit{kg}$ and $\mechanical m_2=5.0\,\unit{kg}$ on a smooth horizontal surface. The system is initially at rest. At $t_0=0$, a horizontal force of magnitude $\mechanical F=50\,\unit N$ acts to the right on $\mechanical m_1$. Once it moves, its string exerts a tension of magnitude $\mechanical F_{T1}=15\,\unit N$. Use $\mechanical g=10\,\unit{m\,s^{-2}}$ and assume the strings do not slip. Find (a) the angular acceleration of the pulley, (b) its moment of inertia about the axle, and (c) the magnitude of the torque exerted by the string attached to $\mechanical m_2$.

![[rotational-motion-fig-3-8.svg|**Fig. 3.8** A pulley consists of two concentric disks and is free to rotate about an axis that goes through its center and is perpendicular to the plane of the page. Massless and inelastic strings are wound around the pulley at its inner and outer disks, and each string is attached to a mass. When a force $\mechanical{\vec F}$ is exerted on mass $\mechanical{m}_{1}$, the masses slide on the smooth horizontal surface and the pulley rotates.|536]]

(iv) A uniform pulley of radius $\mechanical R=0.06\,\unit m$ and mass $\mechanical M=2.0\,\unit{kg}$ is mounted on an axle through its center $O$. A massless, inelastic cord wrapped around the rim holds masses $\mechanical m_1=2.0\,\unit{kg}$ and $\mechanical m_2=4.0\,\unit{kg}$ at its ends, as shown in Fig. 3.9. The cord does not slip. As the pulley rotates, axle friction exerts a torque of magnitude $\mechanical\tau_f=0.5\,\unit{N\,m}$. Use $\mechanical I=0.0036\,\unit{kg\,m^2}$ and $\mechanical g=10\,\unit{m\,s^{-2}}$. From rest, find (a) the linear acceleration of the hanging masses and (b) the time for $\mechanical m_1$ to rise $1\,\unit m$. (c) Explain why the two cord tensions differ.

![[rotational-motion-fig-3-9.svg|**Fig. 3.9** A uniform pulley of radius $\mechanical R$ and mass $\mechanical M$ is mounted on an axle that goes through its center O and is perpendicular to the plane of the page. A massless and inelastic cord is wrapped around its rim, with a mass attached to each end of the cord.|370]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec {\alpha}}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical{\theta}$ | $\unit{rad}$ | Angular position | Angle measured from the reference direction. |
| $\mechanical{\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity or speed | Rate of rotation about the indicated axis. |
| $\mechanical{\vec {F}}$ | $\unit{N}$ | Force | Force acting on the indicated body. |
| $\mechanical{g}$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Acceleration due to gravity. |
| $\mechanical{\vec{a}}$ | $\unit{m\,s^{-2}}$ | Linear acceleration | Rate of change of linear velocity. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Linear velocity or speed | Velocity or speed of the indicated point. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the indicated particle or body. |
| $\mechanical{M}$ | $\unit{kg}$ | Mass | Mass of the body or system. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the specified axis. |
| $\mechanical{y}$ | $\unit{m}$ | Position coordinate | Position along the indicated axis. |
| $\mechanical{\vec R}$ | $\unit N$ | Axle reaction force | Force exerted by the fixed axle on the pulley. |
| $\mechanical R$ | $\unit m$ | Outer pulley radius | Distance from the axis to the rim of the larger pulley. |
| $\mechanical{r}$ | $\unit{m}$ | Radius or position | Distance or position relative to the reference point or axis. |
| $t$ | $\unit{s}$ | Time | Time of the motion. |
| $\mechanical{\vec {\tau}}$ | $\unit{N\,m}$ | Torque | Moment of force about the indicated point or axis. |
