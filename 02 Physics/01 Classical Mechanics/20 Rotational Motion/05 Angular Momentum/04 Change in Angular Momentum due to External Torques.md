---
title: "5.4 Change in Angular Momentum due to External Torques"
---

> [!TLDR]
> The net external torque about a reference point gives the rate of change of angular momentum about that point.

Classify the forces on a system by whether their sources are inside or outside the system. The sum of the internal forces vanishes by Newton’s third law.

$$
\sum\mechanical{\vec F}=\sum\mechanical{\vec F}_{\mathrm{int}}+\sum\mechanical{\vec F}_{\mathrm{ext}}=\sum\mechanical{\vec F}_{\mathrm{ext}}. \tag{5.15}
$$

For torque, the point of application also matters. Take moments about a common fixed point in an inertial frame. For an internal pair, write $\mechanical{\vec F}_{ij}$ for the force on particle $i$ from particle $j$. Its partner is $\mechanical{\vec F}_{ji}=-\mechanical{\vec F}_{ij}$. If the pair acts along the line joining the particles, their combined torque is zero.

$$
\begin{aligned}
\mechanical{\vec r}_i\times\mechanical{\vec F}_{ij}+\mechanical{\vec r}_j\times\mechanical{\vec F}_{ji}
&=(\mechanical{\vec r}_i-\mechanical{\vec r}_j)\times\mechanical{\vec F}_{ij}=\vec0.
\end{aligned} \tag{5.16}
$$

Internal contact forces that act at a common point also have zero combined torque. When the internal torques cancel, the net external torque gives the rate of change of the system’s total angular momentum.

$$
\sum\mechanical{\vec\tau}=\sum\mechanical{\vec\tau}_{\mathrm{ext}}=\frac{d\mechanical{\vec L}_{\mathrm{tot}}}{dt}. \tag{5.17}
$$

This relation will give the conservation of angular momentum when the net external torque vanishes.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Force acting on the specified object. |
| $\mechanical{\vec r}$ | $\unit m$ | Position vector | Displacement from the specified reference point. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Moment of a force about the chosen point. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the specified point or axis. |
| $t$ | $\unit{s}$ | Time | Time measured from the reference instant. |
