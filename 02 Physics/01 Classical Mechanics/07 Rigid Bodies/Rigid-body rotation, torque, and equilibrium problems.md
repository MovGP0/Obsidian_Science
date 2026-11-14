---
title: "Rigid-body rotation, torque, and equilibrium problems"
---

> [!TLDR]
> Compute moments of inertia and apply torque and angular momentum balances to rolling bodies and static systems.

## Worked lecture material

##### Derivation of moment of inertia

A point particle of mass $m$ rotates about an axis at radius $r$. With $v=r\omega$,

$$
K=\tfrac12mv^2=\tfrac12m(r\omega)^2=\tfrac12I\omega^2,
\qquad \mechanical{I}=\mechanical{m}\mechanical{r}^{\,2}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Point Particle about a Rotation Axis.png|**Fig. 150** Radius and tangent velocity for a point mass.]]

In the equal-mass and equal-outer-radius example, $I_{\mathrm{disc}}<I_{\mathrm{donut}}<I_{\mathrm{wheel}}$. Placing more of the mass farther from the axis increases $I$.

![[Kyle Kabasares - Newtonian Mechanics - Mass Elements of Disk and Ring.png|**Fig. 151** Mass elements at different radii in a disk and a ring.]]

##### Moment of inertia of four point masses

The diagram places two $1\,\unit{kg}$ masses and two $2\,\unit{kg}$ masses at the corners of a rectangle centered at the origin. Its half-height is $a=1\,\unit{m}$ and its half-width is $b=2\,\unit{m}$. For point masses, $I=\sum_i m_i r_i^2$, with $r_i$ measured perpendicular to the chosen axis.

![[Kyle Kabasares - Newtonian Mechanics - Four Point Masses on a Rectangle.png|**Fig. 152** Four masses at horizontal distances b and vertical distances a from the origin.]]

1. For an axis perpendicular to the plane through the origin, all $r_i=\sqrt{a^2+b^2}=\sqrt5\,\unit{m}$. Then $I=(5+5+10+10)\,\unit{kg\,m^2}=30\,\unit{kg\,m^2}$.
2. For the $y$ axis, all $r_i=b$. Then $I=(4+4+8+8)\,\unit{kg\,m^2}=24\,\unit{kg\,m^2}$.

##### ) — Moment of inertia of extended objects

Divide the object into small adjacent mass elements $\Delta m_i$. In the limit,

$$
\mechanical{I}=\lim_{\Delta m_i\to0}\sum_i r_i^2\Delta m_i
=\int r^2\,\mathrm{d}m.
$$

As for center of mass, use linear density $\lambda=\mathrm{d}m/\mathrm{d}x$, surface density $\sigma=\mathrm{d}m/\mathrm{d}A$, or volume density $\rho=\mathrm{d}m/\mathrm{d}V$ as appropriate.

##### Uniform rod rotating about one end

The $y$ axis is perpendicular to the rod and passes through one end. The rod extends from $x=0$ to $x=L$ and has uniform $\lambda=M/L$, so $\mathrm{d}m=\lambda\,\mathrm{d}x$.

![[Kyle Kabasares - Newtonian Mechanics - Rod Rotating about One End.png|**Fig. 153** The rotation axis and a mass element at distance x.]]

$$
I=\int_0^L x^2\lambda\,\mathrm{d}x
=\lambda\left[\tfrac13x^3\right]_0^L=\tfrac13 ML^2.
$$

##### Uniform rod rotating about its midpoint

The same axis direction now passes through the center of the rod.

![[Kyle Kabasares - Newtonian Mechanics - Rod Rotating about Its Midpoint.png|**Fig. 154** The centered rod extends from −L/2 to L/2.]]

$$
I=\lambda\int_{-L/2}^{L/2}x^2\,\mathrm{d}x
=\frac{\lambda}{3}\left[\left(\frac L2\right)^3-\left(-\frac L2\right)^3\right]
=\tfrac1{12}ML^2.
$$

The moment of inertia is smaller about the midpoint, making the rod easier to accelerate for a given torque. For a thin hoop and a solid cylinder about their central symmetry axes, $I_{\mathrm{hoop}}=MR^2$ and $I_{\mathrm{cylinder}}=\tfrac12MR^2$.

![[Kyle Kabasares - Newtonian Mechanics - Hoop and Solid Cylinder.png|**Fig. 155** Thin hoop and solid cylinder of radius R.]]

##### Spherical moments of inertia

About an axis through the center, a solid sphere has $I=\tfrac25 MR^2$ and a thin spherical shell has $I=\tfrac23 MR^2$. At equal mass and radius the shell has the larger moment of inertia.

![[Kyle Kabasares - Newtonian Mechanics - Solid Sphere and Spherical Shell.png|**Fig. 156** A solid sphere and a hollow spherical shell.]]

##### Parallel-axis theorem

For an axis parallel to a known axis through the center of mass and separated from it by distance $d$,

$$
\mechanical{I}_{\mathrm{new}}=\mechanical{I}_{\mathrm{CM}}+\mechanical{M}\mechanical{d}^{\,2}.
$$

For a uniform rod, the shift from midpoint to end gives $I_{\mathrm{end}}=\tfrac1{12}ML^2+M(L/2)^2=\tfrac13 ML^2$. For an axis at $x=L/4$ from the end, the sketch places the new axis a distance $L/4$ from the center of mass.

![[Kyle Kabasares - Newtonian Mechanics - Rod Axis One Quarter of Length from End.png|**Fig. 157** The rod's center of mass and the shifted parallel axis.]]

For a solid sphere rotating about a tangent axis at distance $R$ from its center, $I_{\mathrm{new}}=\tfrac25MR^2+MR^2=\tfrac75MR^2$.

![[Kyle Kabasares - Newtonian Mechanics - Sphere Rotating about a Tangent Axis.png|**Fig. 158** The shifted axis is one radius from the center.]]

##### Rolling motion

The rotational kinetic energy is $K_{\mathrm{rot}}=\tfrac12I\omega^2$. An object that rolls also has the translational kinetic energy of its center of mass:

$$
\energy{K}_{\mathrm{tot}}=\energy{K}_{\mathrm{trans}}+\energy{K}_{\mathrm{rot}},
\qquad
v_{\mathrm{CM}}=r\omega\quad\text{for rolling without slipping}.
$$

##### ) — Rolling and energy

For a wheel rolling to the right without slipping, $v_{\mathrm{CM}}=r\omega$. Its kinetic energy is the sum of rotation about the center of mass and translation of that center.

![[Kyle Kabasares - Newtonian Mechanics - Wheel Rotation and Translation.png|**Fig. 159** Tangential motion around the axle and rightward motion of the wheel's center.]]

The work–energy theorem applies to rotation, $W=\Delta K_{\mathrm{rot}}=K_{\mathrm{rot},f}-K_{\mathrm{rot},i}$ for rotational work. Conservation of energy can include rotational kinetic energy.

##### Solid ball rolling down an incline

A solid ball of mass $2\,\unit{kg}$ and radius $0.5\,\unit{m}$ rolls from rest down a vertical drop of $h=1\,\unit{m}$. Find the speed of its center at the bottom.

![[Kyle Kabasares - Newtonian Mechanics - Solid Ball Rolling down an Incline.png|**Fig. 160** Ball at the start of the incline and its vertical drop.]]

Take the final gravitational potential energy as zero. With $I=\tfrac25mr^2$ and $\omega_f=v_f/r$,

$$
mgh=\tfrac12mv_f^2+\tfrac12I\omega_f^2
=\tfrac12mv_f^2+\tfrac15mv_f^2
=\tfrac7{10}mv_f^2.
$$

Hence $v_f=\sqrt{\tfrac{10}{7}gh}$.

##### Pivoted rod released from rest

A uniform rod of length $L$ pivots at one end. Released from horizontal, its center of mass drops by $L/2$ at the bottom of the swing.

![[Kyle Kabasares - Newtonian Mechanics - Pivoted Rod Falling from Horizontal.png|**Fig. 161** Initial and final orientations and the drop of the center of mass.]]

Using $I=\tfrac13mL^2$ about the pivot,

$$
mg\frac L2=\tfrac12I\omega^2,\qquad
\omega=\sqrt{\frac{3g}{L}},\qquad
v_{\mathrm{end}}=L\omega=\sqrt{3gL}.
$$

##### Atwood's machine revisited

A hanging mass $m$ falls through $h$ from rest while unwinding a cord from a pulley of mass $M$ and radius $R$. Model the pulley as a solid disk, $I=\tfrac12MR^2$.

![[Kyle Kabasares - Newtonian Mechanics - Falling Mass Turns Massive Pulley.png|**Fig. 162** The hanging mass before and after a drop of height h.]]

Conservation of energy with $\omega_f=v_f/R$ gives

$$
mgh=\tfrac12mv_f^2+\tfrac12I\omega_f^2
=\left(\tfrac12m+\tfrac14M\right)v_f^2,
\qquad
v_f=\sqrt{\frac{mgh}{\tfrac12m+\tfrac14M}}.
$$

##### Practice problem

Find the speed after mass $m_2$ falls through $y=\Delta s$, drawing $m_1$ along a rough table with coefficient $\mu_{\mathrm{k}}$. The solid disk pulley has $I=\tfrac12m_3R^2$. Start with $W_{\mathrm{nc}}=\Delta K+\Delta U$ and $W_{\mathrm{nc}}=F_{\mathrm{k}}\Delta s\cos180^\circ$, where friction acts on $m_1$.

![[Kyle Kabasares - Newtonian Mechanics - Massive Pulley and Rough Table.png|**Fig. 163** Two blocks attached by a rope over a massive pulley.]]

##### Moment of inertia of a disk

Use $I=\int r^2\,\mathrm{d}m$ and $\sigma=\mathrm{d}m/\mathrm{d}A$. A thin ring of radius $r$ and width $\mathrm{d}r$ has area $\mathrm{d}A=2\pi r\,\mathrm{d}r$, so $\mathrm{d}m=\sigma(2\pi r\,\mathrm{d}r)$.

![[Kyle Kabasares - Newtonian Mechanics - Annular Element of a Disk.png|**Fig. 164** The ring unwrapped into a strip of length 2πr and width dr.]]

##### Cross product

The vector product $\vec A\times\vec B$ is perpendicular to both input vectors. Its magnitude is $\lvert\vec A\times\vec B\rvert=AB\sin\theta$, the area of the parallelogram spanned by the two vectors.

![[Kyle Kabasares - Newtonian Mechanics - Cross Product Parallelogram.png|**Fig. 165** The shaded area and the direction normal to the parallelogram.]]

A two-by-two determinant gives $\begin{vmatrix}a&b\\c&d\end{vmatrix}=ad-bc$. For $\vec A=2\hat{\imath}+3\hat{\jmath}-\hat k$ and $\vec B=3\hat{\imath}+4\hat{\jmath}+2\hat k$, expand along the first row with signs $+,-,+$:

$$
\begin{aligned}
\vec A\times\vec B
&=\begin{vmatrix}
\hat{\imath}&\hat{\jmath}&\hat{k}\\
2&3&-1\\
3&4&2
\end{vmatrix}\\
&=\hat{\imath}(6+4)-\hat{\jmath}(4+3)+\hat{k}(8-9)
=10\hat{\imath}-7\hat{\jmath}-\hat{k}.
\end{aligned}
$$

The full cofactor sign pattern is $\begin{pmatrix}+&-&+\\-&+&-\\+&-&+\end{pmatrix}$.

##### Right-hand rule for cross products

In a right-handed coordinate system, $\hat{\imath}\times\hat{\jmath}=\hat{k}$, $\hat{k}\times\hat{\jmath}=-\hat{\imath}$, and $\hat{\jmath}\times\hat{k}=\hat{\imath}$. A basis vector crossed with itself gives zero. The page gives Wolfram Alpha input notation as two angle-bracketed component triples separated by the word “cross.”

##### Torque

Torque measures the tendency of a force to rotate an object about an axis. It is the rotational counterpart of force.

$$
\mechanical{\vec\tau}=\mechanical{\vec r}\times\mechanical{\vec F},
\qquad
\tau=rF_\perp=rF\sin\theta.
$$

Here $\vec r$ points from the pivot to the point where the force is applied, $\theta$ is the angle between $\vec r$ and $\vec F$, and only the perpendicular force component $F_\perp$ contributes. Express torque in $\unit{N\,m}$. The right-hand rule gives the direction. With positive torque out of the page, clockwise is negative and counterclockwise is positive.

![[Kyle Kabasares - Newtonian Mechanics - Torque Right Hand Rule.png|**Fig. 166** Direction of torque for perpendicular force and position vectors.]]

##### Net torque on a wrench

A downward force $F_1$, due to gravity, acts at distance $r_1$ from the pivot. An angled force $F_2$ acts at distance $r_2$. Their torques are clockwise and counterclockwise, respectively.

![[Kyle Kabasares - Newtonian Mechanics - Two Torques on a Wrench.png|**Fig. 167** Pivot and the two applied forces.]]

$$
\tau_{\mathrm{net}}=-r_1F_1\sin90^\circ+r_2F_2\sin\theta
=-r_1F_1+r_2F_2\sin\theta.
$$

##### Net torque on a cylinder

The forces $F_1$ and $F_2$ are tangent to surfaces of radii $r_1$ and $r_2$. By the right-hand rule, $\tau_1$ points into the page and $\tau_2$ points out.

![[Kyle Kabasares - Newtonian Mechanics - Tangential Forces on Two Radii.png|**Fig. 168** Two tangential forces produce opposing torques.]]

$$
\tau_{\mathrm{net}}=\tau_1+\tau_2=-r_1F_1\sin90^\circ+r_2F_2\sin90^\circ=-r_1F_1+r_2F_2.
$$

In the angled rod example, the perpendicular magnitudes are $mg\cos\theta$ for gravity and $F\cos\theta$ for the applied force. The sine or cosine depends on how the angle is defined.

![[Kyle Kabasares - Newtonian Mechanics - Perpendicular Force Components on a Rod.png|**Fig. 169** Force components perpendicular to the pivoted rod.]]

##### Relationship between torque and angular acceleration

For a tangential force on a particle, $\tau=rF_\perp=rF$. Use $F=ma_{\mathrm{t}}$ and $a_{\mathrm{t}}=r\alpha$:

$$
\tau=rma_{\mathrm{t}}=mr^2\alpha=I\alpha.
$$

For a fixed axis, apply this to multiple particles or an extended object:

$$
\mechanical{\tau}_{\mathrm{net}}=\mechanical{I}\mechanical{\alpha},
\qquad
I=\sum_i m_i r_i^2\quad\text{or}\quad I=\int r^2\,\mathrm{d}m.
$$

##### Hanging mass turning a solid disk

The disk and the hanging block each have mass $m$. The disk has radius $r$ and moment of inertia $I=\tfrac12mr^2$. Find the acceleration, angular acceleration, and tension.

![[Kyle Kabasares - Newtonian Mechanics - Torque of Cord on Solid Disk.png|**Fig. 170** Cord winding, tangent force, and downward motion of the block.]]
![[Kyle Kabasares - Newtonian Mechanics - Hanging Mass for Disk Dynamics.png|**Fig. 171** Tension and weight on the hanging mass.]]

The tension produces clockwise torque $-rT$. With $a$ and $\alpha$ denoting the magnitudes of downward and clockwise acceleration, respectively,

$$
I\alpha=rT,\qquad
T-mg=-ma,\qquad
\alpha=\frac ar.
$$

Thus $T=Ia/r^2$ and $(I/r^2+m)a=mg$. With the given disk,

$$
a=\tfrac23 g,\qquad
\alpha=\frac{2g}{3r},\qquad
T=mg-ma=\tfrac13mg.
$$

##### Two masses and a massive pulley

Mass $m_2$ moves on a frictionless table and mass $m_1$ hangs from a cord. The pulley has inertia $I$ and radius $r$. The two tensions act in opposite rotational senses.

![[Kyle Kabasares - Newtonian Mechanics - Frictionless Table Massive Pulley Forces.png|**Fig. 172** Table setup and the forces on the pulley and the sliding mass.]]

For the pulley, $rT_2-rT_1=-I\alpha$. For $m_2$, $T_2=m_2a$ and $N=m_2g$. The margin gives the axle reaction components for a pulley of mass $m_{\mathrm{p}}$ with stationary center:

$$
R_x-T_2=0,\qquad R_y-m_{\mathrm{p}}g-T_1=0.
$$

For the hanging mass $m_1$, take upward as positive and let $a$ be the downward acceleration. Thus $T_1-m_1g=-m_1a$ and $T_1=m_1g-m_1a$. The boxed force equation in the notes drops the minus sign, which is retained when solving for $T_1$.

![[Kyle Kabasares - Newtonian Mechanics - Force Diagram for Massive Pulley Hanging Block.png|**Fig. 173** The hanging mass with upward tension and downward weight.]]

Using $T_2=m_2a$ and $\alpha=a/r$ in the pulley equation,

$$
r(m_2a)-r(m_1g-m_1a)=-I\frac ar,\qquad
\left(m_1+m_2+\frac I{r^2}\right)a=m_1g.
$$

For a solid disk pulley of mass $M$, $I=\tfrac12Mr^2$ and

$$
a=\frac{m_1g}{m_1+m_2+\tfrac12M}.
$$

Substitute into $T_2=m_2a$ and $T_1=m_1g-m_1a$. The tensions differ when the pulley has rotational inertia and angular acceleration.

##### Equilibrium

An object in equilibrium has zero linear and angular acceleration. The conditions are $\sum\vec F=0$ and $\sum\vec\tau=0$.

##### Seesaw

A uniform board of mass $m_b=4.1\,\unit{kg}$ supports two children of masses $m_1=51\,\unit{kg}$ and $m_2=35.7\,\unit{kg}$. The first child is $1.5\,\unit{m}$ from the pivot. Find the second child's distance and the normal force at the pivot.

![[Kyle Kabasares - Newtonian Mechanics - Seesaw with Two Children.png|**Fig. 174** The pivot, weights, and distances along the board.]]

$$
N-m_bg-m_1g-m_2g=0,\qquad
N=(m_b+m_1+m_2)g\approx890\,\unit{N}.
$$

Take torques about the pivot. The weight of the board acts through the pivot and has zero torque, so $\tau_1+\tau_2=0$.

The two weights produce opposing torques, so $r_1m_1g=r_2m_2g$. The second child sits at $r_2=r_1m_1/m_2=(1.5\,\unit{m})(51/35.7)=2.14\,\unit{m}$.

##### Biceps force holding a ball

A person holds a ball of mass $m_b$ with their forearm horizontal. Include the forearm mass $m_a$, acting at its center of mass. The biceps force is $F_m$ and the downward elbow reaction is $R$ as drawn.

![[Kyle Kabasares - Newtonian Mechanics - Biceps and Forearm Equilibrium.png|**Fig. 175** The elbow pivot, biceps force, forearm weight, and ball weight.]]

Let $r_m,r_a,r_b$ be the respective distances from the elbow. The elbow force has zero moment arm. Equilibrium gives

$$
\begin{aligned}
F_m-R-m_ag-m_bg&=0,\\
r_mF_m-r_am_ag-r_bm_bg&=0,\\
F_m&=\frac{r_am_ag+r_bm_bg}{r_m},\\
R&=F_m-m_ag-m_bg.
\end{aligned}
$$

##### Ladder

For a ladder inclined at $\theta$ against a frictionless wall, find the floor's static friction force. The floor normal is $N_2$ and the wall normal is $N_1$. The ladder has mass $m_1$ and the worker has mass $m_2$.

![[Kyle Kabasares - Newtonian Mechanics - Ladder with Worker and Frictionless Wall.png|**Fig. 176** Ladder, worker, and contact forces.]]

$$
\sum F_x=f_{\mathrm{s}}-N_1=0,\qquad
\sum F_y=N_2-m_1g-m_2g=0.
$$

Taking torques about the foot eliminates $N_2$ and $f_{\mathrm{s}}$. Let $r_{\mathrm{CM}}$ and $r_m$ be the distances along the ladder to its center of mass and to the worker, and $r_{N_1}$ the distance to the wall contact.

$$
-r_{\mathrm{CM}}m_1g\cos\theta-r_m m_2g\cos\theta
+r_{N_1}N_1\sin\theta=0,\qquad
f_{\mathrm{s}}=N_1=
\frac{(r_{\mathrm{CM}}m_1+r_m m_2)g\cos\theta}{r_{N_1}\sin\theta}.
$$

The wall normal equals the floor friction, $N_1=f_{\mathrm{s}}$. At impending slip, $f_{\mathrm{s}}=\mu_{\mathrm{s}}N_2$, with $N_2=(m_1+m_2)g$.

![[Kyle Kabasares - Newtonian Mechanics - Ladder Force Projections.png|**Fig. 177** Components perpendicular to the ladder for calculating torques.]]

$$
\mu_{\mathrm{s,min}}=\frac{N_1}{N_2}
=\frac{(r_{\mathrm{CM}}m_1+r_m m_2)g\cos\theta}
{r_{N_1}\sin\theta\,(m_1+m_2)g}.
$$

For the uniform ladder, $r_{\mathrm{CM}}=L/2$, $r_m=d$, and $r_{N_1}=L$.

##### Angular momentum

For a point particle with $\vec p=m\vec v$, the angular momentum relative to an origin is

$$
\mechanical{\vec L}=\mechanical{\vec r}\times\mechanical{\vec p},
\qquad
L=rp\sin\theta=mvr\sin\theta.
$$

Here $\theta$ is the angle between $\vec r$ and $\vec p$. Angular momentum is a vector with units $\unit{kg\,m^2/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Angular Momentum about an Origin.png|**Fig. 178** Position relative to the origin and the velocity of a point mass.]]

A particle moving in a straight line can still have angular momentum about a chosen origin. For circular motion about that origin, $\vec v$ is perpendicular to $\vec r$, so $L=mvr$.

![[Kyle Kabasares - Newtonian Mechanics - Angular Momentum in Circular Motion.png|**Fig. 179** The tangent velocity is perpendicular to the radius.]]

The net torque changes angular momentum according to $\mechanical{\vec\tau}_{\mathrm{net}}=\mathrm{d}\mechanical{\vec L}/\mathrm{d}t$, with $\vec L=\vec r\times\vec p$. This parallels $\vec F_{\mathrm{net}}=\mathrm{d}\vec p/\mathrm{d}t$.

##### ) — Angular momentum and rotation

For a point mass in a circle, $L=mvr\sin90^\circ=m(r\omega)r=mr^2\omega=I\omega$. The same expression for the axial component applies to many particles rotating together about a fixed axis, with $I=\sum_i m_i r_i^2$.

![[Kyle Kabasares - Newtonian Mechanics - Tangential Momentum of Rotating Particle.png|**Fig. 180** The particle's velocity is perpendicular to its radius.]]

##### Conservation of angular momentum

With zero net external torque about the axis, $L_i=L_f$, so $I_i\omega_i=I_f\omega_f$.

For a solid sphere of mass $M=1\,\unit{kg}$ and radius $R=0.5\,\unit{m}$ spinning at $10\,\unit{rad/s}$,

$$
L=I\omega=\tfrac25 MR^2\omega
=\tfrac25(1)(0.5)^2(10)\,\unit{kg\,m^2/s}
=1\,\unit{kg\,m^2/s}.
$$

##### Clay dropped onto a potter's wheel

The wheel is a solid disk of mass $M$ and radius $R$, spinning at $10\,\unit{rad/s}$ with $I=\tfrac12MR^2$. A small lump of clay sticks to the wheel at radius $R$. Treat it as a point mass. Its initial angular momentum component about the wheel axis is zero because it falls parallel to that axis. Find the new angular speed.

![[Kyle Kabasares - Newtonian Mechanics - Clay Sticking to Potter Wheel.png|**Fig. 181** The disk before and after a point mass sticks at its rim.]]

##### Potter's wheel

Let $I_d$ denote the disk inertia and $I_b$ the clay's inertia. The clay contributes zero initial angular momentum about the axis. Therefore

$$
L_i=L_f,\qquad I_d\omega_i=(I_d+I_b)\omega_f,
\qquad
\omega_f=\frac{I_d\omega_i}{I_d+I_b}.
$$

##### Clay hits an upright rod

A clay ball of mass $M/3$ strikes and sticks to the tip of a stationary rod of mass $M$ and length $d$, hinged at the bottom. The ball approaches horizontally with speed $v_i$. Angular momentum about the pivot is conserved over the impact. The pivot supplies an external impulse, so the system's linear momentum changes. The collision also changes its kinetic energy.

![[Kyle Kabasares - Newtonian Mechanics - Clay Hitting a Pivoted Rod.png|**Fig. 182** Incoming clay at the top of the rod and reaction at the pivot.]]

$$
\tfrac13 Mv_i d
=(I_{\mathrm{rod}}+I_{\mathrm{clay}})\omega_f
=\left(\tfrac13Md^2+\tfrac13Md^2\right)\omega_f,
\qquad
\omega_f=\frac{v_i}{2d}.
$$

For the pivoted case the tip speed is $v_f=d\omega_f=v_i/2$. Without a pivot and with negligible external impulse and torque, both linear and angular momentum are conserved. Calculate the initial and final kinetic energies to show how much changes.

##### Clay and pivoted rod

Initially only the clay is moving. In terms of $v_f=v_i/2$ and $\omega_f=v_f/d$,

$$
\begin{aligned}
K_i&=\tfrac12(M/3)v_i^2=\tfrac23Mv_f^2,\\
K_f&=\tfrac12(M/3)v_f^2+\tfrac12(\tfrac13Md^2)(v_f/d)^2
=\tfrac13Mv_f^2.
\end{aligned}
$$

The kinetic energy after impact is half its initial value.

##### Derivation of the torque relation

Differentiate $\vec L=\vec r\times\vec p$. Since $\vec v\times m\vec v=0$,

$$
\frac{\mathrm{d}\vec L}{\mathrm{d}t}
=\frac{\mathrm{d}\vec r}{\mathrm{d}t}\times\vec p+
\vec r\times\frac{\mathrm{d}\vec p}{\mathrm{d}t}
=\vec r\times\vec F=\vec\tau.
$$

The handwritten expansion reverses the factors in the force term.

##### Tipping and static equilibrium

1. A person stands a distance $x$ beyond the second support of a uniform board. At the tipping threshold, $N_1=0$. Take the second support as the pivot, so $N_2$ has zero moment arm. The board's center is at distance $d-L/2$ from the pivot.

![[Kyle Kabasares - Newtonian Mechanics - Board Tipping on a Support.png|**Fig. 183** Board with two supports and a person on the overhanging end.]]

$$
(d-L/2)m_b g-xmg=0,\qquad x=\frac{(d-L/2)m_b}{m}.
$$

2. Find the acceleration when $m_2$ slides downhill, raising $m_1$ over a pulley with radius $R$ and mass $M$.

![[Kyle Kabasares - Newtonian Mechanics - Exam Review Massive Incline Pulley.png|**Fig. 184** Incline and hanging mass with their free-body diagrams.]]

$$
T_1-m_1g=m_1a,\qquad
m_2g\sin\theta-T_2=m_2a,\qquad
N-m_2g\cos\theta=0.
$$

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Proportionality between net force and acceleration. |
| $\energy{K}$ | $\unit{J}$ | Kinetic energy | Energy of motion, $\tfrac12mv^2$ for a point mass. |
| $\mechanical{\vec p}$ | $\unit{kg\,m/s}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Measure of resistance to angular acceleration about the specified axis. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Cross product of position from the pivot and applied force. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2/s}$ | Angular momentum | Moment of linear momentum about the specified origin. |
