---
title: "6.3 Work–Kinetic Energy Theorem for Rotational Motion"
---

> [!TLDR]
> Net rotational work changes the rotational kinetic energy of a body.

## Translation

Equation (6.1) gives the net work along the path of a mass $\mechanical m$.

$$
\energy W_{\mathrm{net}}=\int_{\mechanical S_i}^{\mechanical S_f}\sum\mechanical{\vec F}\cdot d\mechanical{\vec S}.
\tag{6.5}
$$

For constant mass, substitute $\sum\mechanical{\vec F}=\mechanical m\mechanical{\vec a}$, $\mechanical{\vec a}=d\mechanical{\vec v}/dt$, and $\mechanical{\vec v}=d\mechanical{\vec S}/dt$.

$$
\begin{aligned}
\energy W_{\mathrm{net}}&=\int_{\mechanical S_i}^{\mechanical S_f}\mechanical m\mechanical{\vec a}\cdot d\mechanical{\vec S}
=\int_{\mechanical S_i}^{\mechanical S_f}\mechanical m\frac{d\mechanical{\vec v}}{dt}\cdot d\mechanical{\vec S}\\
&=\int_{\mechanical S_i}^{\mechanical S_f}\mechanical m\,d\mechanical{\vec v}\cdot\frac{d\mechanical{\vec S}}{dt}
=\int_{\mechanical v_i}^{\mechanical v_f}\mechanical m\,d\mechanical{\vec v}\cdot\mechanical{\vec v}.
\end{aligned}\tag{6.6}
$$

The last integral follows the velocity from its initial to its final value. Since $d(\mechanical v^2)=d(\mechanical{\vec v}\cdot\mechanical{\vec v})=2\,d\mechanical{\vec v}\cdot\mechanical{\vec v}$, the result depends only on the endpoint speeds.

$$
\energy W_{\mathrm{net}}=\frac{\mechanical m}{2}\int_{\mechanical v_i}^{\mechanical v_f}d(\mechanical v^2)
=\frac12\mechanical m\mechanical v_f^2-\frac12\mechanical m\mechanical v_i^2 .
\tag{6.7}
$$

The kinetic energy, measured in $\unit J=\unit{kg\,m^2\,s^{-2}}$, is

$$
\energy{KE}=\frac12\mechanical m\mechanical v^2 .
\tag{6.8}
$$

The work–kinetic energy theorem states that the work done by all the forces equals the change in kinetic energy.

$$
\energy W_{\mathrm{net}}=\energy{KE}_f-\energy{KE}_i
\quad\Longrightarrow\quad
\energy{KE}_i+\energy W_{\mathrm{net}}=\energy{KE}_f .
\tag{6.9}
$$

## Fixed-axis rotation

Equation (6.4) gives the net rotational work.

$$
\energy W_{\mathrm{net,rot}}=\int_{\mechanical\theta_i}^{\mechanical\theta_f}\sum\mechanical{\vec\tau}\cdot d\mechanical{\vec\theta}.
\tag{6.10}
$$

The dot product selects torque about the rotation axis. For a rigid body with constant moment of inertia $\mechanical I$, the axial torque satisfies $\sum\mechanical\tau_z=\mechanical I\mechanical\alpha_z$. Substitute $\mechanical\alpha_z=d\mechanical\omega_z/dt$ and $\mechanical\omega_z=d\mechanical\theta/dt$.

$$
\begin{aligned}
\energy W_{\mathrm{net,rot}}
&=\int_{\mechanical\theta_i}^{\mechanical\theta_f}\mechanical I\mechanical\alpha_z\,d\mechanical\theta
=\int_{\mechanical\theta_i}^{\mechanical\theta_f}\mechanical I\frac{d\mechanical\omega_z}{dt}\,d\mechanical\theta\\
&=\int_{\mechanical\theta_i}^{\mechanical\theta_f}\mechanical I\,d\mechanical\omega_z\,\frac{d\mechanical\theta}{dt}
=\int_{\mechanical\omega_{z,i}}^{\mechanical\omega_{z,f}}\mechanical I\mechanical\omega_z\,d\mechanical\omega_z .
\end{aligned}\tag{6.11}
$$

Using $d(\mechanical\omega_z^2)=2\mechanical\omega_z\,d\mechanical\omega_z$ gives

$$
\energy W_{\mathrm{net,rot}}=\frac{\mechanical I}{2}\int_{\mechanical\omega_{z,i}}^{\mechanical\omega_{z,f}}d(\mechanical\omega_z^2)
=\frac12\mechanical I\mechanical\omega_{z,f}^2-\frac12\mechanical I\mechanical\omega_{z,i}^2.
\tag{6.12}
$$

The rotational kinetic energy is

$$
\energy{KE}_{\mathrm{rot}}=\frac12\mechanical I\mechanical\omega^2 .
\tag{6.13}
$$

It has the same SI unit as translational kinetic energy. With this definition, the rotational work–kinetic energy theorem becomes

$$
\begin{aligned}
\energy W_{\mathrm{net,rot}}&=\energy{KE}_{\mathrm{rot},f}-\energy{KE}_{\mathrm{rot},i},\\
\energy{KE}_{\mathrm{rot},i}+\energy W_{\mathrm{net,rot}}&=\energy{KE}_{\mathrm{rot},f}.
\end{aligned}\tag{6.14}
$$

A force can change both translation and rotation. For a body whose motion is decomposed into translation of the center of mass and rotation about it, the combined balance is

$$
\begin{aligned}
&\energy{KE}_i+\energy{KE}_{\mathrm{rot},i}
+\left(\energy W_{\mathrm{net,force}}+\energy W_{\mathrm{net,rot}}\right)\\
&\qquad=\energy{KE}_f+\energy{KE}_{\mathrm{rot},f}.
\end{aligned}\tag{6.15}
$$

## 6.3.1 WKET for a System of Objects

The total rotational kinetic energy is the sum of the rotational kinetic energies of the individual bodies.

$$
\energy{KE}_{\mathrm{rot,tot}}=
\energy{KE}_{\mathrm{rot},1}+\energy{KE}_{\mathrm{rot},2}+\cdots+\energy{KE}_{\mathrm{rot},n}.
\tag{6.16}
$$

Sum the work of the torques on the bodies, keeping the sign of each contribution.

$$
\energy W_{\mathrm{net,rot}}=
\energy W_{\mathrm{torque},1}+\energy W_{\mathrm{torque},2}+\cdots .
\tag{6.17}
$$

The source limits this sum to external torques. That simplification applies when the internal torques do no net rotational work. Equal and opposite internal torques can do a nonzero total amount of work if the bodies rotate through different angles. The translational work of an internal force pair likewise depends on the displacements of the two points of application. Kinetic energy is nonnegative, and each work term can have either sign.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy W$ | $\unit J$ | Work | Energy transferred by a force or torque. |
| $\energy{KE}$ | $\unit J$ | Kinetic energy | Energy of translational or rotational motion as indicated. |
| $\mechanical{\vec F}$ | $\unit N$ | Force | Force on the body. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of force. |
| $d\mechanical{\vec S}$ | $\unit m$ | Displacement | Infinitesimal linear displacement. |
| $d\mechanical{\vec\theta}$ | $\unit{rad}$ | Angular displacement | Infinitesimal rotation about the axis. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of position. |
| $\mechanical{\vec a}$ | $\unit{m\,s^{-2}}$ | Acceleration | Rate of change of velocity. |
| $\mechanical\omega_z$ | $\unit{rad\,s^{-1}}$ | Angular velocity component | Signed rotation rate about the axis. |
| $\mechanical\alpha_z$ | $\unit{rad\,s^{-2}}$ | Angular acceleration component | Rate of change of axial angular velocity. |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of the body. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the chosen axis. |
| $t$ | $\unit s$ | Time | Time during the motion. |
