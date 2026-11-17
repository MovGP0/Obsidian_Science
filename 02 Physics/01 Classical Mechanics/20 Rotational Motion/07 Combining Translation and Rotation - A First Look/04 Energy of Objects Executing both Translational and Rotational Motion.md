---
title: "7.4 Energy of Objects Executing both Translational and Rotational Motion"
---

> [!TLDR]
> For a rolling rigid body, kinetic energy includes translation of the center of mass and rotation about it.

A rigid body that translates and rotates has kinetic energy from both motions. For the planar motion considered here, use the moment of inertia about an axis through the center of mass.

$$
\begin{aligned}
\energy{KE}_{\mathrm{tot}}&=\energy{KE}_{\mathrm{cm}}+\energy{KE}_{\mathrm{rot}}\\
&=\tfrac12\mechanical m\mechanical v_{\mathrm{cm}}^2+\tfrac12\mechanical I\mechanical\omega^2 .
\end{aligned}\tag{7.36}
$$

The work–kinetic energy theorem then includes both translational work and work of the torques about the center of mass. Their sum is the work done at the actual points of application.

$$
\begin{aligned}
&\energy{KE}_{\mathrm{cm},i}+\energy{KE}_{\mathrm{rot},i}+\energy W_{\mathrm{net}}+\energy W_{\mathrm{net,rot}}\\
&\qquad=\energy{KE}_{\mathrm{cm},f}+\energy{KE}_{\mathrm{rot},f}.
\end{aligned}\tag{7.37}
$$

Replace the work associated with conservative forces by the corresponding change of potential energy.

$$
\begin{aligned}
&\energy{KE}_{\mathrm{cm},i}+\energy{KE}_{\mathrm{rot},i}+\energy U_i+\energy W_{\mathrm{NCF}}+\energy W_{\tau_{\mathrm{NCF}}}\\
&\qquad=\energy{KE}_{\mathrm{cm},f}+\energy{KE}_{\mathrm{rot},f}+\energy U_f .
\end{aligned}\tag{7.38}
$$

When the net contribution from nonconservative forces vanishes, mechanical energy is conserved.

$$
\energy{KE}_{\mathrm{cm},i}+\energy{KE}_{\mathrm{rot},i}+\energy U_i
=\energy{KE}_{\mathrm{cm},f}+\energy{KE}_{\mathrm{rot},f}+\energy U_f .
\tag{7.39}
$$

## 7.4.1 Comparison between Translational and Rotational Kinetic Energy of Rolling Objects

An object of mass $\mechanical M$ and radius $\mechanical R$ rolls without slipping. Substitute $\mechanical v_{\mathrm{cm}}=\mechanical\omega\mechanical R$ into the energy ratio.

$$
\frac{\energy{KE}_{\mathrm{cm}}}{\energy{KE}_{\mathrm{rot}}}
=\frac{\tfrac12\mechanical M\mechanical v_{\mathrm{cm}}^2}{\tfrac12\mechanical I\mechanical\omega^2}
=\frac{\mechanical M\mechanical R^2}{\mechanical I}.
\tag{7.40}
$$

The ratio is independent of speed and depends on the geometry and rotation axis. For a uniform cylinder rotating about its long axis, $\mechanical I=\tfrac12\mechanical M\mechanical R^2$.

$$
\frac{\energy{KE}_{\mathrm{cm}}}{\energy{KE}_{\mathrm{rot}}}
=\frac{\mechanical M\mechanical R^2}{\tfrac12\mechanical M\mechanical R^2}=2.
\tag{7.41}
$$

For a uniform ring rotating about the axis through its center perpendicular to its plane, $\mechanical I=\mechanical M\mechanical R^2$.

$$
\frac{\energy{KE}_{\mathrm{cm}}}{\energy{KE}_{\mathrm{rot}}}=1.
\tag{7.42}
$$

For a uniform solid sphere, $\mechanical I=\tfrac25\mechanical M\mechanical R^2$.

$$
\frac{\energy{KE}_{\mathrm{cm}}}{\energy{KE}_{\mathrm{rot}}}=\frac52 .
\tag{7.43}
$$

For a uniform thin spherical shell, $\mechanical I=\tfrac23\mechanical M\mechanical R^2$.

$$
\frac{\energy{KE}_{\mathrm{cm}}}{\energy{KE}_{\mathrm{rot}}}=\frac32 .
\tag{7.44}
$$

Thus a rolling spherical shell has $60\%$ of its kinetic energy in translation and $40\%$ in rotation.

### Example 2. Rolling cylinder

A uniform cylinder of mass $\mechanical M=0.4\,\unit{kg}$ and radius $\mechanical R$ starts at rest on a horizontal surface. A massless, inelastic string is wound around its circumference. At $t_0=0$, pull the free end $A$ with a constant horizontal force $\mechanical F=10\,\unit N$. The cylinder rolls without slipping. Find the speed of its center of mass after it has moved $\Delta\mechanical x_{\mathrm{cm}}=1.5\,\unit m$. Use $\mechanical I=\tfrac12\mechanical M\mechanical R^2$ about the cylinder’s axis through $O$.

![[rotational-motion-fig-7-10.svg|**Fig. 7.10** (a) A horizontal force pulls a string wrapped around the cylinder. (b) Tension at $A'$ and static friction at the ground both point right. Their torques about the center point in opposite directions.|620]]

Apply Equation (7.37) between $t_0$ and $t_1$. The cylinder starts with zero translational and rotational kinetic energy.

$$
\begin{aligned}
&\underbrace{\energy{KE}_{\mathrm{cm},i}}_0
+\underbrace{\energy{KE}_{\mathrm{rot},i}}_0+\energy W_{\mathrm{net}}+\energy W_{\mathrm{net,rot}}\\
&\qquad=\energy{KE}_{\mathrm{cm},f}+\energy{KE}_{\mathrm{rot},f}.
\end{aligned}\tag{7.45}
$$

Write the translational and torque terms for gravity, normal force, tension, and friction.

$$
\begin{aligned}
&\energy W_{F_g}+\energy W_{\tau_{F_g}}+\energy W_n+\energy W_{\tau_n}\\
&\qquad+\energy W_{F_T}+\energy W_{\tau_{F_T}}+\energy W_{f_s}+\energy W_{\tau_{f_s}}
=\energy{KE}_{\mathrm{cm},f}+\energy{KE}_{\mathrm{rot},f}.
\end{aligned}\tag{7.46}
$$

Gravity and the normal force are perpendicular to the displacement of the center. Their lines of action also pass through the axis, so all four of their work terms vanish.

The tension is parallel to the translation,

$$
\energy W_{F_T}=\mechanical F_T\Delta\mechanical x_{\mathrm{cm}}=(10\,\unit N)(1.5\,\unit m)=15\,\unit J .
\tag{7.47}
$$

Its torque points along the angular displacement, with magnitude $\mechanical F_T\mechanical R$.

$$
\energy W_{\tau_{F_T}}=\mechanical{\vec\tau}_{F_T}\cdot\Delta\mechanical{\vec\theta}
=\mechanical F_T\mechanical R\,\Delta\mechanical\theta .
\tag{7.48}
$$

Because the cylinder rolls without slipping, $\mechanical R\,\Delta\mechanical\theta=\Delta\mechanical x_{\mathrm{cm}}$. This gives the same contribution as Equation (7.47).

$$
\energy W_{\tau_{F_T}}=\mechanical F_T\Delta\mechanical x_{\mathrm{cm}}=15\,\unit J .
\tag{7.49}
$$

Static friction points along the translation and its torque opposes the angular displacement.

$$
\energy W_{f_s}=\mechanical f_s\Delta\mechanical x_{\mathrm{cm}},
\tag{7.50}
$$

$$
\energy W_{\tau_{f_s}}=-\mechanical f_s\mechanical R\,\Delta\mechanical\theta
=-\mechanical f_s\Delta\mechanical x_{\mathrm{cm}}.
\tag{7.51}
$$

These two contributions cancel. On a stationary surface, the point of contact in pure rolling is instantaneously at rest, so the static friction at that point does no total work.

With $\mechanical v_{\mathrm{cm}}=\mechanical\omega\mechanical R$, the only remaining terms are

$$
\begin{aligned}
\energy W_{F_T}+\energy W_{\tau_{F_T}}
&=\energy{KE}_{\mathrm{cm},f}+\energy{KE}_{\mathrm{rot},f}\\
&=\tfrac12\mechanical M\mechanical v_{\mathrm{cm}}^2
+\tfrac12(\tfrac12\mechanical M\mechanical R^2)\frac{\mechanical v_{\mathrm{cm}}^2}{\mechanical R^2}\\
&=\tfrac34\mechanical M\mechanical v_{\mathrm{cm}}^2 .
\end{aligned}\tag{7.52}
$$

The final speed is

$$
\mechanical v_{\mathrm{cm}}
=\sqrt{\frac{4(\energy W_{F_T}+\energy W_{\tau_{F_T}})}{3\mechanical M}}
=\sqrt{\frac{4(30\,\unit J)}{3(0.4\,\unit{kg})}}
=10\,\unit{m\,s^{-1}} .
\tag{7.53}
$$

## Exercises

(i) Find the magnitude and direction of the total acceleration of points $A$, $B$, and $D$ of Fig. 7.4 in terms of $\mechanical a_{\mathrm{cm}}$ and $\mechanical a_c$.

(ii) A cue strikes a uniform billiard ball along a line through its center parallel to the table. Its initial speed $\mechanical v_0$, radius $\mechanical R$, mass $\mechanical m$, gravitational acceleration $\mechanical g$, and coefficient of kinetic friction $\mechanical\mu_k$ are known. Initially the ball slips forward as it starts to rotate, then it rolls without slipping. Find (a) the distance traveled until pure rolling begins and (b) the angular velocity at that instant. Use $\mechanical I=\tfrac25\mechanical m\mechanical R^2$.

(iii) A disk of radius $\mechanical R$ is supported at its center by a base free to slide on a smooth horizontal surface. Its plane is vertical. A massless, inelastic rope wraps around a groove of radius $\mechanical r$ and does not slip. A force $\mechanical{\vec F}$ pulls the free end $A$ at angle $\mechanical\phi$ above the horizontal. At time $t$, the disk has angular velocity $\mechanical{\vec\omega}$ and angular acceleration $\mechanical{\vec\alpha}$ about its horizontal axle through $O$. Its center has velocity $\mechanical{\vec v}_{\mathrm{cm}}$ and acceleration $\mechanical{\vec a}_{\mathrm{cm}}$. As in Section 7.2.3, derive (a) the velocity of $A$, (b) its acceleration, (c) its displacement along the rope, and (d) the length of rope unwound during $dt$.

![[rotational-motion-fig-7-11.svg|**Fig. 7.11** The pull turns the disk, and the base can translate along the smooth ground. The disk rotates without making rolling contact with the ground.|370]]

(iv) A disk of mass $\mechanical M$ and radius $\mechanical R$ starts at rest on rough horizontal ground. Starting at $t_0=0$, a horizontal force always acts at point $A$ on the disk’s vertical diameter. Find the location of $A$ relative to $O$ that gives zero static friction. Determine the direction of static friction when the force is applied above or below this point.

![[rotational-motion-fig-7-12.svg|**Fig. 7.12** The height of the point $A$ where the horizontal force acts determines the static friction at the ground.|370]]

(v) A uniform sphere of mass $\mechanical m$ and radius $\mechanical r$ starts from rest at $A$ on the inside of a vertical circular track of radius $\mechanical R$ and center $O$. It rolls without slipping through a quarter circle to the bottom, $B$. Find (a) the kinetic energy at $B$ and (b) its angular momentum there about the axis through $O$ perpendicular to the track. Use gravitational acceleration $\mechanical g$ and $\mechanical I_{\mathrm{cm}}=\tfrac25\mechanical m\mechanical r^2$.

![[rotational-motion-fig-7-13.svg|**Fig. 7.13** The sphere rolls inside the circular track from $A$ to $B$. Its center follows a circle of radius $R-r$.|370]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\energy{KE}_{\mathrm{cm}},\energy{KE}_{\mathrm{rot}}$ | $\unit J$ | Kinetic energies | Energy of translation and rotation about the center of mass. |
| $\energy U$ | $\unit J$ | Potential energy | Energy associated with configuration. |
| $\energy W$ | $\unit J$ | Work | Contributions associated with forces and their torques. |
| $\mechanical M,\mechanical m$ | $\unit{kg}$ | Mass | Mass of the body in the example or exercise. |
| $\mechanical I$ | $\unit{kg\,m^2}$ | Moment of inertia | Rotational inertia about the body’s center of mass. |
| $\mechanical R,\mechanical r$ | $\unit m$ | Radii | Radius of the body, track, or groove as specified. |
| $\Delta\mechanical x_{\mathrm{cm}}$ | $\unit m$ | Translational displacement | Horizontal displacement of the center of mass. |
| $\mechanical v_{\mathrm{cm}}$ | $\unit{m\,s^{-1}}$ | Speed | Speed of the center of mass. |
| $\mechanical\omega,\mechanical\alpha$ | $\unit{rad\,s^{-1}},\unit{rad\,s^{-2}}$ | Angular speed and acceleration | Rotation rate and its rate of change. |
| $\Delta\mechanical\theta,\mechanical\phi$ | $\unit{rad}$ | Angles | Angular displacement and the angle of a pull. |
| $\mechanical{\vec F}_T,\mechanical{\vec n},\mechanical{\vec f}_s$ | $\unit N$ | Forces | Tension, normal force, and static friction. |
| $\mechanical\mu_k$ | $1$ | Kinetic friction coefficient | Ratio of kinetic friction to normal force. |
| $\mechanical g$ | $\unit{m\,s^{-2}}$ | Gravitational acceleration | Local magnitude of gravity. |
| $t$ | $\unit s$ | Time | Time during the motion. |
