---
title: "6.2 Work due to a Torque"
---

> [!TLDR]
> Torque transfers energy through work as the body moves through an angle about its axis.

Figure 6.1 shows an extended rigid body of mass $\mechanical M=\int d\mechanical m$. It can rotate about a fixed axis through $O$ perpendicular to the page. A horizontal external force $\mechanical{\vec F}$ acts at point $P$ in the plane of the page. During an infinitesimal time interval $dt$, the body rotates through $d\mechanical\theta$. Point $P$ travels an arc length $d\mechanical S$, equal in this limit to the magnitude of its displacement $d\mechanical{\vec S}$. The body is rigid, so all of its points rotate through the same angle.

![[rotational-motion-fig-6-1-rigid-body-displacement.svg|**Fig. 6.1** The force at $P$ rotates the body counterclockwise about $O$. The point moves to $P′$ through the infinitesimal displacement $d\mechanical{\vec S}$. The angular displacement vector $d\mechanical{\vec\theta}$ points out of the page.|510]]

Chapter 1 showed that $d\mechanical{\vec S}=d\mechanical{\vec\theta}\times\mechanical{\vec r}$, where $\mechanical{\vec r}$ runs from the axis to the point of application $P$. Equation (6.1) gives the work $d\energy W$ done by $\mechanical{\vec F}$ during $dt$:

$$
d \energy{W} = \mechanical{\vec {F}} \cdot d \mechanical{\vec {S}} = \mechanical{\vec {F}} \cdot ( d \mechanical{\vec {\theta}} \times \mechanical{\vec {r}} ) . \tag{6.2}
$$

Apply the scalar triple-product identity $\vec A\cdot(\vec B\times\vec C)=\vec B\cdot(\vec C\times\vec A)$ to Equation (6.2):

$$
d \energy{W} = d \mechanical{\vec {\theta}} \cdot ( \mechanical{\vec {r}} \times \mechanical{\vec {F}} ) = d \mechanical{\vec {\theta}} \cdot \mechanical{\vec {\tau}} = \mechanical{\vec {\tau}} \cdot d \mechanical{\vec {\theta}} . \tag{6.3}
$$

This gives the infinitesimal work $d\energy W$ done during $dt$ by the torque of the force. Integrate as the object moves from angle $\mechanical{\theta}_i$ to $\mechanical{\theta}_f$ to obtain the total work $\energy W$:

$$
\energy{W}=\int d\energy{W}
=\int_{\mechanical{\theta}_i}^{\mechanical{\theta}_f}\mechanical{\vec\tau}\cdot d\mechanical{\vec\theta}
=\int_{\mechanical{\theta}_i}^{\mechanical{\theta}_f}\mechanical{\tau}\cos\mechanical{\phi}\,d\mechanical{\theta}.
\tag{6.4}
$$

The angle $\mechanical{\phi}$ is between $\mechanical{\vec\tau}$ and $d\mechanical{\vec\theta}$. For constant $\mechanical{\tau}$ and $\cos\mechanical{\phi}$, the work is $\energy W=\mechanical{\tau}\,\Delta\mechanical{\theta}\cos\mechanical{\phi}$. The radian is dimensionless because it is a ratio of two lengths. The dot product takes the torque component along the rotation, so torque in $\unit{N\,m}$ times angular displacement in radians gives work in $\unit J$. Equation (6.4) is the rotational counterpart of Equation (6.1). Positive work transfers energy to the system, and negative work transfers energy from it.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{M},d\mechanical m$ | $\unit{kg}$ | Mass | The total mass of the rigid body or the mass of an infinitesimal element. |
| $\mechanical{\vec F}$ | $\unit{N}$ | Applied force | The external force at point P. |
| $\mechanical{\vec r}$ | $\unit{m}$ | Position relative to the axis | The vector from the rotation axis to point P. |
| $d\mechanical{S},d\mechanical{\vec S}$ | $\unit{m}$ | Arc length and displacement | The path length and displacement of P during the interval. |
| $dt$ | $\unit{s}$ | Time interval | The duration of the infinitesimal motion. |
| $\mechanical{\theta},d\mechanical{\vec\theta}$ | $\unit{rad}$ | Angular position and displacement | The angle of the body and its infinitesimal change. |
| $\mechanical{\phi}$ | $\unit{rad}$ | Angle | The angle between torque and angular displacement. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | The moment about the axis due to the applied force. |
| $\energy{W},d\energy{W}$ | $\unit{J}$ | Work | The energy transferred by the torque. |
