---
title: "5.5 Newton’s Second Law for Rotational Motion with Constant Moment of Inertia"
---

> [!TLDR]
> For a constant moment of inertia, the angular momentum law gives the fixed-axis equation of motion.

When mass is constant, $\sum\mechanical{\vec F}=d\mechanical{\vec p}/dt$ reduces to $\sum\mechanical{\vec F}=\mechanical m\mechanical{\vec a}$. For rotation about a fixed $z$ axis, the analogous starting point is the axial component of the angular momentum law. Substitute $\mechanical L_z=\mechanical I_z\mechanical\omega_z$ from Equation (5.14).

$$
\sum\mechanical\tau_{z,\mathrm{ext}}=\frac{d\mechanical L_z}{dt}=\frac{d(\mechanical I_z\mechanical\omega_z)}{dt}=\frac{d\mechanical I_z}{dt}\mechanical\omega_z+\mechanical I_z\frac{d\mechanical\omega_z}{dt}. \tag{5.18}
$$

For constant $\mechanical I_z$, its time derivative vanishes. Since $\mechanical\alpha_z=d\mechanical\omega_z/dt$,

$$
\sum\mechanical\tau_{z,\mathrm{ext}}=\mechanical I_z\mechanical\alpha_z. \tag{5.19}
$$

This is the fixed-axis rotational law used in Chapter 3. The vector form applies when angular momentum and net torque are along the rotation axis.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of a force about the chosen point. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the specified point or axis. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the chosen axis. |
| $\mechanical{\vec\omega}$ | $\unit{rad\,s^{-1}}$ | Angular velocity | Rotation rate and axial direction. |
| $\mechanical{\vec\alpha}$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $t$ | $\unit{s}$ | Time | Time measured from the reference instant. |
