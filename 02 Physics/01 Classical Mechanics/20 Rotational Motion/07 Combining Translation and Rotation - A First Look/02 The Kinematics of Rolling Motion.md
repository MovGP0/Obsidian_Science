---
title: "7.2 The Kinematics of Rolling Motion"
---

> [!TLDR]
> Rolling without slipping ties the motion of the center to the rotation of the body.

A uniform wheel rolling to the right translates with its center of mass and rotates about an axis through that center, perpendicular to the wheel’s plane. These two motions combine to give the velocity of every point on the wheel.

![[rotational-motion-fig-7-2-rolling-velocity-components.svg|**Fig. 7.2** (a) Pure translation gives every point the same velocity as the center of mass. (b) Pure rotation gives a tangential velocity of magnitude $\mechanical\omega\mechanical r$. (c) In rolling without slipping, the vectors add to give zero velocity at $B$ and twice the center-of-mass velocity at $A$.|620]]

- **Translation.** Every point shares the velocity $\mechanical{\vec v}_{\mathrm{cm}}$ and displacement of the center of mass. The translational motion is described by one-dimensional kinematics.
- **Rotation.** The velocity relative to the center is tangent to a circle and has magnitude $\mechanical v=\mechanical\omega\mechanical r$. The center stays at rest in this description. Every rim point has relative speed $\mechanical\omega\mechanical R$.
- **Rolling.** Add the translational velocity to the tangential velocity of rotation. The position of a point follows from the center-of-mass position, the rotation angle, and the point’s initial position relative to the center.

When the wheel rolls without slipping, the instantaneous velocity of the point of contact $B$ is zero. At that instant the velocity field is also that of a pure rotation about an axis through $B$.

## 7.2.1 Rolling without Slipping

At time $t$, point $A$ touches the ground. At $t+\Delta t$, point $B$ touches it. The arc length swept out from $A$ to $B$ equals the displacement of the center of mass.

![[rotational-motion-fig-7-3.svg|**Fig. 7.3** As the wheel rolls without slipping, each successive point of the arc $AB$ touches the ground once. The second snapshot is offset vertically to show the matching distances.|370]]

$$
\Delta\mechanical S=\Delta\mechanical x_{\mathrm{cm}}.
\tag{7.1}
$$

In the infinitesimal limit,

$$
d\mechanical S=d\mechanical x_{\mathrm{cm}}.
\tag{7.2}
$$

Imagine coating the rim with paint. The rolling wheel leaves a streak on the ground whose length equals the arc length that lost its paint. Slipping breaks the correspondence between points on the arc and points on the ground.

Divide by $dt$ to obtain the equality of the rim’s speed relative to the center and the speed of the center.

$$
\frac{d\mechanical S}{dt}=\frac{d\mechanical x_{\mathrm{cm}}}{dt}
\quad\Longrightarrow\quad
\mechanical v_{\mathrm{rim,rel}}=\mechanical v_{\mathrm{cm}}.
\tag{7.3}
$$

Since the wheel’s radius is $\mechanical R$,

$$
\mechanical v_{\mathrm{cm}}=\mechanical\omega\mechanical R=\mechanical v_{\mathrm{rim,rel}}.
\tag{7.4}
$$

Differentiate for a rigid wheel of constant radius. Here clockwise angular motion and rightward translation are taken as positive.

$$
\frac{d\mechanical v_{\mathrm{cm}}}{dt}=\frac{d(\mechanical\omega\mechanical R)}{dt}
\quad\Longrightarrow\quad
\mechanical a_{\mathrm{cm}}=\mechanical R\frac{d\mechanical\omega}{dt}=\mechanical\alpha\mechanical R .
\tag{7.5}
$$

At the bottom point $B$ of Fig. 7.2(c), translation and tangential rotation have equal and opposite velocities, so $\mechanical{\vec v}_B=0$. At the top point $A$ they point in the same direction, so $\mechanical{\vec v}_A=2\mechanical{\vec v}_{\mathrm{cm}}$. At $C$ and $D$, the two components are perpendicular. Their resultant velocities make angles of $45^\circ$ with the horizontal and have magnitudes $\mechanical v_C=\mechanical v_D=\sqrt2\,\mechanical v_{\mathrm{cm}}$. At an interior point $\mechanical r<\mechanical R$, the rotational contribution $\mechanical\omega\mechanical r$ is smaller than the translation speed.

### Acceleration

![[rotational-motion-fig-7-4.svg|**Fig. 7.4** The acceleration at each point combines the center-of-mass acceleration and the tangential and inward accelerations due to rotation.|370]]

All points share the translational acceleration $\mechanical{\vec a}_{\mathrm{cm}}=d\mechanical{\vec v}_{\mathrm{cm}}/dt$. The tangential acceleration due to rotation is the rate of change of tangential speed along the circular path.

$$
\frac{d\mechanical v}{dt}=\frac{d(\mechanical\omega\mechanical r)}{dt}
\quad\Longrightarrow\quad
\mechanical a_t=\mechanical r\frac{d\mechanical\omega}{dt}=\mechanical\alpha\mechanical r.
\tag{7.6}
$$

At the rim, for rolling without slipping, its signed magnitude satisfies

$$
\mechanical a_t=\mechanical a_{\mathrm{cm}}=\mechanical\alpha\mechanical R.
\tag{7.7}
$$

The centripetal component changes the direction of the relative velocity and always points toward the axis.

$$
\mechanical a_c=\frac{\mechanical v^2}{\mechanical r}
=\frac{\mechanical\omega^2\mechanical r^2}{\mechanical r}
=\mechanical\omega^2\mechanical r .
\tag{7.8}
$$

Add the three acceleration vectors. At the contact point the tangential and translational components cancel, while the centripetal component points upward.

$$
\mechanical{\vec a}_{\mathrm{tot}}
=\underbrace{\mechanical{\vec a}_{\mathrm{cm}}}_{\text{translation}}
+\underbrace{\mechanical{\vec a}_t+\mechanical{\vec a}_c}_{\text{rotation}} .
\tag{7.9}
$$

## 7.2.2 What Happens if the Wheel Is Slipping While Rolling?

![[rotational-motion-fig-7-5.svg|**Fig. 7.5** A clockwise-rolling wheel can slip forward (a) or backward (b), depending on the velocity of the rim at the point of contact.|407]]

When the wheel slips, $\mechanical v_{\mathrm{cm}}\ne\mechanical\omega\mechanical R$ and point $B$ moves relative to the ground. For a wheel translating to the right and turning clockwise, the translational component there is to the right and the tangential component is to the left.

If $\mechanical v_{\mathrm{cm}}>\mechanical\omega\mechanical R$, $B$ slips forward with speed

$$
\mechanical v_B=\mechanical v_{\mathrm{cm}}-\mechanical\omega\mechanical R .
\tag{7.10}
$$

If $\mechanical v_{\mathrm{cm}}<\mechanical\omega\mechanical R$, $B$ slips backward with speed

$$
\mechanical v_B=\left|\mechanical v_{\mathrm{cm}}-\mechanical\omega\mechanical R\right|
=\mechanical\omega\mechanical R-\mechanical v_{\mathrm{cm}} .
\tag{7.11}
$$

## 7.2.3 Kinematics of a Spool of Thread

A uniform disk of mass $\mechanical M$ and radius $\mechanical R$ models a spool. A massless, inelastic rope wraps around a groove of radius $\mechanical r$. A force $\mechanical{\vec F}$ pulls its free end $A$ at angle $\mechanical\phi$ to the horizontal. Tension transmits the pull along the rope to the point of tangency $A'$. The rope does not slip along the groove, and the spool rolls without slipping on the ground. Here the spool moves right and rotates clockwise. Section 7.3.2 discusses how the direction of motion depends on the angle of the pull.

![[rotational-motion-fig-7-6.svg|**Fig. 7.6** A rope unwinds from the groove of a spool. The translation of the center of mass contributes a velocity component along the rope, and rotation supplies a tangential contribution at $A'$.|409]]

Take the $x$ axis along the rope. The axial velocity at $A$ equals the component at $A'$ along the rope. The translational contribution is $\mechanical v_{\mathrm{cm}}\cos\mechanical\phi$, and the rotational contribution is $\mechanical\omega\mechanical r$. Since $\mechanical\omega=\mechanical v_{\mathrm{cm}}/\mechanical R$,

$$
\begin{aligned}
\mechanical v_A=\mechanical v_{A',x}
&=\mechanical v_{\mathrm{cm}}\cos\mechanical\phi+\mechanical\omega\mechanical r\\
&=\mechanical v_{\mathrm{cm}}\left(\cos\mechanical\phi+\frac{\mechanical r}{\mechanical R}\right).
\end{aligned}\tag{7.12}
$$

At constant $\mechanical\phi$, differentiation gives the acceleration along the rope.

$$
\mechanical a_A=\frac{d\mechanical v_A}{dt}
=\mechanical a_{\mathrm{cm}}\left(\cos\mechanical\phi+\frac{\mechanical r}{\mechanical R}\right).
\tag{7.13}
$$

Multiplying Equation (7.12) by $dt$ gives the displacement of $A$ along the rope.

$$
d\mechanical x_A
=\mechanical v_A\,dt
=d\mechanical S_{\mathrm{cm}}\left(\cos\mechanical\phi+\frac{\mechanical r}{\mechanical R}\right).
\tag{7.14}
$$

Here $d\mechanical S_{\mathrm{cm}}=\mechanical v_{\mathrm{cm}}\,dt$ is the horizontal displacement of the spool. At the groove, an angular displacement $d\mechanical\theta$ unwinds the length

$$
d\mechanical l=\mechanical r\,d\mechanical\theta
=\frac{\mechanical r}{\mechanical R}\,d\mechanical S_{\mathrm{cm}}.
\tag{7.15}
$$

The displacement of the free end therefore includes both the unwound length and the component of the spool’s displacement along the rope, $d\mechanical x_A=d\mechanical l+d\mechanical S_{\mathrm{cm}}\cos\mechanical\phi$.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec v}_{\mathrm{cm}}$ | $\unit{m\,s^{-1}}$ | Center-of-mass velocity | Common translational velocity of all points. |
| $\mechanical{\vec a}_{\mathrm{cm}}$ | $\unit{m\,s^{-2}}$ | Center-of-mass acceleration | Common translational acceleration of all points. |
| $\mechanical{\vec a}_t,\mechanical{\vec a}_c$ | $\unit{m\,s^{-2}}$ | Rotational contributions to linear acceleration | Tangential and centripetal components about the center. |
| $\mechanical\omega$ | $\unit{rad\,s^{-1}}$ | Angular speed | Rate of rotation about the center. |
| $\mechanical\alpha$ | $\unit{rad\,s^{-2}}$ | Angular acceleration | Rate of change of angular velocity. |
| $\mechanical R,\mechanical r$ | $\unit m$ | Radii | Outer radius and radius of a point or the spool groove. |
| $\Delta\mechanical S,\Delta\mechanical x_{\mathrm{cm}}$ | $\unit m$ | Arc length and displacement | Equal distances when there is no slip at the ground. |
| $\mechanical{\vec F}$ | $\unit N$ | Applied force | Pull along the rope at its free end. |
| $\mechanical\phi$ | $\unit{rad}$ | Rope angle | Angle between the rope and the horizontal. |
| $\mechanical l$ | $\unit m$ | Unwound rope length | Length released from the groove. |
| $\mechanical M$ | $\unit{kg}$ | Mass | Mass of the spool. |
| $t$ | $\unit s$ | Time | Time during the motion. |
