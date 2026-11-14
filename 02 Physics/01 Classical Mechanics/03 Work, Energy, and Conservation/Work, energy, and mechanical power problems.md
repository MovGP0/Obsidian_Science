---
title: "Work, energy, and mechanical power problems"
---

> [!TLDR]
> Integrate forces over displacements and use energy balances to solve motion on ramps and in systems with friction.

## Worked lecture material

##### Concept of work

Pushing on a stationary brick wall does zero mechanical work on the wall because its displacement is zero. In general, work is

$$
\energy{W}=\int_{\vec s_i}^{\vec s_f}\mechanical{\vec F}\cdot\mathrm{d}\mechanical{\vec s},
$$

where $\vec F$ is the force and $\mathrm{d}\vec s$ is an infinitesimal displacement. For a constant force vector,

$$
\energy{W}=\mechanical{\vec F}\cdot\int_{\vec s_i}^{\vec s_f}\mathrm{d}\mechanical{\vec s}
=\mechanical{\vec F}\cdot\Delta\mechanical{\vec s}
=F\Delta s\cos\theta=\Delta s(F\cos\theta).
$$

Work is measured in joules, with $1\,\unit{J}=1\,\unit{N\,m}$. The component $F\cos\theta$ along the motion contributes to the work.

![[Kyle Kabasares - Newtonian Mechanics - Force Component Doing Work.png|**Fig. 87** An angled applied force and its component along the displacement.]]

For a force perpendicular to the path, $\cos90^\circ=0$ and $W=0\,\unit{J}$.

![[Kyle Kabasares - Newtonian Mechanics - Perpendicular Force Does Zero Work.png|**Fig. 88** A vertical force on a block moving horizontally at constant velocity.]]

##### Work by a constant force

The same block travels $5\,\unit{m}$ horizontally with a $10\,\unit{N}$ force applied in the direction of motion.

$$
W=F\Delta s\cos\theta=(10)(5)\cos0^\circ\,\unit{J}=50\,\unit{J}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Horizontal Force Doing Work.png|**Fig. 89** The force and displacement point in the same direction.]]

If the $10\,\unit{N}$ force is instead applied at $30^\circ$ above horizontal,

$$
W=(10)(5)\cos30^\circ\,\unit{J}=25\sqrt{3}\,\unit{J}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Thirty Degree Force Doing Work.png|**Fig. 90** The applied force makes a 30° angle with the displacement.]]

##### Work by a varying force

In one dimension, $\energy{W}=\int \mechanical{F}_x\,\mathrm{d}\mechanical{x}$. Work is the signed area under the force-versus-position graph. One may also represent the force by a function $F(x)$, as for a spring.

![[Kyle Kabasares - Newtonian Mechanics - Work as Area under Force Curve.png|**Fig. 91** Shaded area representing the work done.]]

##### )

1(a–b). An applied force $F$ pulls a $1.5\,\unit{kg}$ block at $30^\circ$ above horizontal. The vertical acceleration is $0\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Discussion Angled Pull.png|**Fig. 92** The applied force components, normal force, weight, and friction.]]

1(c). Use $\sum F_y=F_N+F\sin30^\circ-mg=0$, so $F_N=mg-F\sin30^\circ=[(1.5)(9.8)-(3.8)\sin30^\circ]\,\unit{N}=12.8\,\unit{N}$.

1(d). The kinetic friction is $F_{\mathrm{k}}=\mu_{\mathrm{k}}F_N=1.28\,\unit{N}$. Horizontally,

$$
F\cos30^\circ-F_{\mathrm{k}}=ma_x,
\qquad
a_x=\frac{3.8\cos30^\circ-1.28}{1.5}\,\unit{m/s^2}
\approx1.3\,\unit{m/s^2}.
$$

2. The block starts to slide down the incline when $mg\sin\theta$ exceeds the maximum static friction $\mu_{\mathrm{s}}F_N$.

![[Kyle Kabasares - Newtonian Mechanics - Threshold of Sliding on Incline.png|**Fig. 93** The normal force, uphill static friction, and weight resolved along the incline.]]

$$
\sum F_x=mg\sin\theta-F_{\mathrm{s}}=ma_x,
\qquad
\sum F_y=F_N-mg\cos\theta=0.
$$

Using the limiting value $F_{\mathrm{s}}=\mu_{\mathrm{s}}mg\cos\theta$, the page rearranges to $a_x/g=\sin\theta-\mu_{\mathrm{s}}\cos\theta$ and $\sin\theta=a_x/g+\mu_{\mathrm{s}}\cos\theta$. At the threshold, $a_x=0$ and $\tan\theta=\mu_{\mathrm{s}}$. The margin records $\sin^2\theta+\cos^2\theta=1$.

3. A block of mass $M$ slides down an incline and is connected by a rope over a pulley to a hanging mass $m$. Take positive directions up the incline for $M$ and down for $m$. The friction force $f$ on $M$ points uphill.

![[Kyle Kabasares - Newtonian Mechanics - Discussion Pulley with Uphill Friction.png|**Fig. 94** Incline and pulley with the force diagrams for both masses.]]

$$
\begin{aligned}
\sum F_{x,M}&=T+f-Mg\sin\theta=Ma,\\
\sum F_{y,M}&=N-Mg\cos\theta=0,\\
\sum F_{y,m}&=mg-T=ma.
\end{aligned}
$$

4(a). A force $F$ angled $\theta$ from vertical presses a block against a wall. The sketch has upward friction and an upward component $F\cos\theta$. For downward sliding at constant speed,

![[Kyle Kabasares - Newtonian Mechanics - Block Pressed against a Vertical Wall.png|**Fig. 95** The applied force and its components, the wall's normal force, friction, and weight.]]

$$
\begin{aligned}
\sum F_x&=N-F\sin\theta=0,\\
\sum F_y&=F_{\mathrm{k}}+F\cos\theta-mg=0.
\end{aligned}
$$

Using $F_{\mathrm{k}}=\mu_{\mathrm{k}}N=\mu_{\mathrm{k}}F\sin\theta$ yields

$$
F=\frac{mg}{\mu_{\mathrm{k}}\sin\theta+\cos\theta}.
$$

The boxed denominator uses $\mu_{\mathrm{s}}$, which applies if the problem is evaluated at the threshold of downward slipping.

4(b). For upward sliding at constant speed, kinetic friction acts downward.

$$
F\cos\theta-(F_{\mathrm{k}}+mg)=0,\qquad
N-F\sin\theta=0,\qquad
F_{\mathrm{k}}=\mu_{\mathrm{k}}F\sin\theta.
$$

Thus $F(\cos\theta-\mu_{\mathrm{k}}\sin\theta)=mg$. For impending upward motion, use the maximum static friction instead, giving the boxed result

$$
F=\frac{mg}{\cos\theta-\mu_{\mathrm{s}}\sin\theta}.
$$

4(c). If $\mu_{\mathrm{s}}\geq\cot\theta=\cos\theta/\sin\theta$, the denominator is zero or negative and a finite positive force at this angle cannot start upward sliding. The page uses $N=F\sin\theta$ and $F_{\mathrm{s,max}}=\mu_{\mathrm{s}}F\sin\theta$.

5(a). Where the centripetal acceleration points upward, the normal force and weight satisfy

$$
F_{\mathrm{c}}=F_N-mg=\frac{mv^2}{r},
\qquad
F_N=\frac{mv^2}{r}+mg.
$$

![[Kyle Kabasares - Newtonian Mechanics - Discussion Upward Centripetal Force.png|**Fig. 96** Upward normal force and downward weight.]]

##### ) — Hooke's law

Exam date recorded as October 14, 2013. The change in force exerted by a spring is

$$
\Delta\mechanical{F}=-\mechanical{k}\Delta\mechanical{x}.
$$

Choose $x_0=0$ at equilibrium, where $F_0=0$, to obtain $F_{\mathrm{spring}}=-kx$. Stretching or compressing the spring farther takes more force. The spring constant $k$ has units of $\unit{N/m}$. A large $k$ gives a stiff spring and a small $k$ gives a soft spring. The negative sign indicates a restoring force opposing the displacement.

To balance the spring force, apply $F_{\mathrm{applied}}=-F_{\mathrm{spring}}=kx$.

![[Kyle Kabasares - Newtonian Mechanics - Applied and Restoring Spring Forces.png|**Fig. 97** The applied force stretches the spring and the spring pulls in the opposite direction.]]

The work we do on the spring is

$$
\energy{W}_{\mathrm{s}}=\int_{x_i}^{x_f}F_{\mathrm{applied}}\,\mathrm{d}x
=\int_{x_i}^{x_f}kx\,\mathrm{d}x
=k\left[\frac{x_f^2}{2}-\frac{x_i^2}{2}\right]
=\tfrac12kx_f^2-\tfrac12kx_i^2.
$$

The spring constant $k$ stays fixed, while $F_{\mathrm{applied}}=kx$ varies with $x$.

##### Spring work and spring constant

To stretch a spring of stiffness $k=500\,\unit{N/m}$ by $3\,\unit{cm}$ from equilibrium, the required work is

$$
W=\tfrac12kx_f^2-\tfrac12kx_0^2
=\tfrac12(500)(0.03)^2\,\unit{J}=0.225\,\unit{J}.
$$

The spring potential energy is $U_{\mathrm{s}}=\tfrac12kx^2$. The book uses the symbol $U$.

A $5\,\unit{kg}$ mass attached to a vertical spring slowly stretches it by $\Delta y=0.2\,\unit{m}$. At equilibrium, $\lvert F_{\mathrm{s}}\rvert=k\Delta y$ balances $mg$.

![[Kyle Kabasares - Newtonian Mechanics - Spring Stretched by Five Kilograms.png|**Fig. 98** Unloaded spring and spring extended by the hanging mass.]]

$$
\mechanical{k}=\frac{mg}{\Delta y}=\frac{(5)(9.8)}{0.2}\,\unit{N/m}=245\,\unit{N/m}.
$$

##### Kinetic energy

Kinetic energy is the energy of motion. To obtain its expression, calculate the work done in accelerating an object from $v_0$ to $v_f$ by a constant net force along the displacement.

![[Kyle Kabasares - Newtonian Mechanics - Work Accelerating a Block.png|**Fig. 99** Initial and final speeds and the displacement under a constant force.]]

$$
W=F\Delta x=ma\Delta x,\qquad
v_f^2=v_0^2+2a\Delta x.
$$

$$
\energy{W}_{\mathrm{net}}=\Delta\energy{K}
=m\frac{v_f^2-v_0^2}{2\Delta x}\Delta x
=\tfrac12mv_f^2-\tfrac12mv_0^2.
$$

##### Work–energy theorem

Kinetic energy is a scalar. The net work equals the change in kinetic energy:

$$
\energy{W}_{\mathrm{net}}=\energy{K}_f-\energy{K}_i=\Delta\energy{K}.
$$

For a constant net force, $W_{\mathrm{net}}=\vec F_{\mathrm{net}}\cdot\Delta\vec s$.

##### Block pulled on a frictionless surface

A $12\,\unit{N}$ force pulls a $6\,\unit{kg}$ block through $3\,\unit{m}$ from rest. Since the force and displacement are parallel, $F\Delta x=\tfrac12mv_f^2$ and

$$
v_f=\sqrt{\frac{2F\Delta x}{m}}
=\sqrt{\frac{2(12\,\unit{N})(3\,\unit{m})}{6\,\unit{kg}}}
=3.46\,\unit{m/s}.
$$

##### Same block with friction

Let $\mu_{\mathrm{k}}=0.15$. Find the work done by the pull and kinetic friction, and the final speed.

![[Kyle Kabasares - Newtonian Mechanics - Friction Doing Negative Work.png|**Fig. 100** Kinetic friction acts opposite the block's displacement.]]

$$
\begin{aligned}
W_F&=F\Delta x\cos0^\circ=36\,\unit{J},\\
W_{f_{\mathrm{k}}}&=\mu_{\mathrm{k}}mg\Delta x\cos180^\circ
=-(0.15)(6)(9.8)(3)\,\unit{J}=-26.46\,\unit{J},\\
W_{\mathrm{net}}&=36\,\unit{J}-26.46\,\unit{J}=9.54\,\unit{J}
=\tfrac12mv_f^2.
\end{aligned}
$$

The final speed is $v_f=1.78\,\unit{m/s}$. Friction reduces the final kinetic energy by converting some of the mechanical energy into thermal energy and other forms.

##### Power

Power is the rate of doing work or expending energy. The average over an interval and the instantaneous value are

$$
\energy{P}_{\mathrm{avg}}=\frac{\energy{W}}{\Delta t},
\qquad
\energy{P}=\lim_{\Delta t\to0}\frac{\energy{W}}{\Delta t}
=\frac{\mathrm{d}\energy{W}}{\mathrm{d}t}.
$$

Dividing $W=F\Delta s\cos\theta$ by the time interval and taking the instantaneous limit gives

$$
\energy{P}=\mechanical{\vec F}\cdot\mechanical{\vec v}
=Fv\cos\theta.
$$

##### Elevator motor

An elevator of mass $1{,}000\,\unit{kg}$ moves upward at a constant $2\,\unit{m/s}$. Find the power delivered by the motor.

![[Kyle Kabasares - Newtonian Mechanics - Motor Lifting an Elevator.png|**Fig. 101** Tension and weight on the elevator.]]

$$
\sum F_y=T-mg=0,\qquad T=mg,
\qquad
\energy{P}=Tv=(1{,}000)(9.8)(2)\,\unit{W}=19{,}600\,\unit{W}.
$$

The handwritten result labels the unit as newtons. Force times speed gives watts.

##### Motion down a frictionless 10° slope

The drawing shows a person moving at $2.1\,\unit{m/s}$ on a horizontal surface before reaching a frictionless $10^\circ$ slope. The final speed shown is $20\,\unit{m/s}$ along the slope. In horizontal and downward vertical components,

$$
v_{fx}=20\cos10^\circ\,\unit{m/s}\approx19.7\,\unit{m/s},
\qquad
v_{fy}=20\sin10^\circ\,\unit{m/s}\approx3.47\,\unit{m/s}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Frictionless Ten Degree Slope.png|**Fig. 102** The initial motion, forces on the slope, and final velocity components.]]

In the force calculation the $x$ axis lies along the slope. Then $\sum F_x=mg\sin\theta=ma_x$, so $a_x=g\sin10^\circ\approx1.7\,\unit{m/s^2}$. The notes record a tentative time of $10.4\,\unit{s}$ in the component table. For distances along the slope, the page gives

$$
v_f^2=v_0^2+2a(x_f-x_0),\qquad
x_f=\frac{v_f^2-v_0^2}{2a}\quad(x_0=0).
$$

Use speeds and acceleration measured along the same axis in this last equation.

A $3\,\unit{kg}$ box is given an initial velocity up a $30^\circ$ incline, where $\mu_{\mathrm{k}}=0.15$. Find the distance it travels before coming to rest.

![[Kyle Kabasares - Newtonian Mechanics - Work Stopping a Box on an Incline.png|**Fig. 103** Kinetic friction and the component of weight along the incline oppose the uphill motion.]]

Only force components along the displacement do work. Gravity contributes through $mg\sin\theta$ and kinetic friction through $\mu_{\mathrm{k}}mg\cos\theta$. Both point at $180^\circ$ to the displacement.

$$
W_{\mathrm{net}}=W_g+W_{f_{\mathrm{k}}}
=-mg\sin\theta\,\Delta x-\mu_{\mathrm{k}}mg\cos\theta\,\Delta x
=K_f-K_i=-\tfrac12mv_0^2.
$$

$$
\Delta x=\frac{v_0^2}{2g(\sin\theta+\mu_{\mathrm{k}}\cos\theta)}.
$$

The page records $2.03\,\unit{m}$ and drops $\mu_{\mathrm{k}}$ from the last written denominator. The preceding line retains it.

##### Work done by gravity during lifting

![[Kyle Kabasares - Newtonian Mechanics - Lifting against Gravity.png|**Fig. 104** An object lifted from its initial height to a higher final position.]]

$$
\energy{W}_g=mg(y_f-y_i)\cos180^\circ=-mgy_f+mgy_i.
$$

When $y_f>y_i$, gravity does negative work. Define gravitational potential energy $\energy{U}_g=mgy$. Potential energy is energy associated with position in the gravitational field. Potential energy, kinetic energy, and work all have units of joules.

##### Conservative and nonconservative forces

The work by a conservative force depends only on the endpoints. Gravity is an example. The work by a nonconservative force can depend on the path, as with friction. The page recalls the spring potential energy $\tfrac12kx^2$ and the gravitational potential energy $mgh$.

##### Conservation of energy

Energy can transform between different forms. The total energy of an isolated system is conserved. When mechanical energy is conserved,

$$
\energy{E}_{\mathrm{mech}}=\energy{K}+\energy{U}=\mathrm{constant},
\qquad
K_i+U_i=K_f+U_f.
$$

##### Dropped ball

A $1\,\unit{kg}$ ball is dropped from rest at $y_i=5\,\unit{m}$. Find the velocity at $y_f=2\,\unit{m}$.

$$
\tfrac12mv_i^2+mgy_i=\tfrac12mv_f^2+mgy_f,
\qquad
\tfrac12v_f^2=g(y_i-y_f).
$$

With upward positive, $v_f=-\sqrt{2g(y_i-y_f)}=-7.67\,\unit{m/s}$.

##### Pendulum speed at the bottom

A $0.5\,\unit{kg}$ pendulum of length $L$ swings from an initial angle of $20^\circ$. Set $y_f=0$ at the bottom and take $v_i=0$ at the turning point. The starting height is $y_i=L-L\cos\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Pendulum Height and Swing.png|**Fig. 105** The vertical distance from the release point to the bottom of the swing.]]

$$
K_i+U_i=K_f+U_f,
\qquad
mg(L-L\cos\theta)=\tfrac12mv_f^2,
\qquad
v_f=\sqrt{2g(L-L\cos\theta)}.
$$

##### ) — Frictionless incline

A block of mass $m$ starts from rest and slides down a frictionless incline. Its initial and final heights are $y_i$ and $y_f$, with an arbitrary height origin.

![[Kyle Kabasares - Newtonian Mechanics - Energy on a Frictionless Incline.png|**Fig. 106** Heights used to find the speed at the bottom.]]

$$
mgy_i=\tfrac12mv_f^2+mgy_f
\quad\Longrightarrow\quad v_f=\sqrt{2g(y_i-y_f)}.
$$

##### Work by a nonconservative force

For friction or other nonconservative forces, use $W_{\mathrm{nc}}=\Delta K+\Delta U=E_f-E_i$, with changes measured as final minus initial. One handwritten line reverses $E_i$ and $E_f$.

A block slides on a rough surface and hits a spring. Given $\Delta x,k,m,\mu_{\mathrm{k}}$, find the initial speed $v_0$ when the spring reaches maximum compression $\Delta x$ at $v_f=0$.

![[Kyle Kabasares - Newtonian Mechanics - Spring Compression on a Rough Surface.png|**Fig. 107** The block just before contact and at maximum spring compression.]]

$$
(K_f-K_i)+(U_f-U_i)=W_{\mathrm{nc}},
\qquad
-\tfrac12mv_0^2+\tfrac12k(\Delta x)^2
=f_{\mathrm{k}}\Delta x\cos180^\circ
=-f_{\mathrm{k}}\Delta x.
$$

##### Spring compression on a rough surface

Since $N=mg$, the energy equation is $-\tfrac12mv_0^2+\tfrac12k(\Delta x)^2=-\mu_{\mathrm{k}}mg\Delta x$. It gives the speed at first contact:

$$
v_0=\sqrt{\frac{2[\tfrac12k(\Delta x)^2+\mu_{\mathrm{k}}mg\Delta x]}{m}}.
$$

The handwritten final line labels this speed $v_f$. The preceding page defines $v_f=0$ at maximum compression.

##### Force and potential energy

The work by a conservative force is $\energy{W}_{\mathrm{c}}=-\Delta\energy{U}=-(U_f-U_i)$. If a falling ball goes from $5\,\unit{J}$ to $2\,\unit{J}$ of potential energy, $\Delta U=-3\,\unit{J}$ and gravity does $+3\,\unit{J}$ of work. The inequality in the handwritten falling example is reversed relative to these values. For a ball moving upward from $2\,\unit{J}$ to $5\,\unit{J}$, gravity does $-3\,\unit{J}$ of work.

From $W_{\mathrm{c}}=\int\vec F\cdot\mathrm{d}\vec s=-\Delta U$, the differential relation in one dimension is

$$
\mechanical{F}_x\,\mathrm{d}x=-\mathrm{d}\energy{U},
\qquad
\mechanical{F}_x=-\frac{\mathrm{d}\energy{U}}{\mathrm{d}x}
\approx-\frac{\Delta U}{\Delta x}
$$

for a small finite interval. At $a$, the slope is negative and the force pushes right. At $b$, the slope is positive and the force pushes left.

![[Kyle Kabasares - Newtonian Mechanics - Force from Potential Energy Slope.png|**Fig. 108** Slopes on opposite sides of a potential-energy minimum.]]

##### Block launched vertically by a spring

Find the maximum height using conservation of energy. The block starts from rest with the spring compressed by $x$ and has zero speed again at its highest point. Measuring $h$ from the initial position gives

$$
U_i+K_i=U_f+K_f,\qquad
\tfrac12kx^2=mgh,\qquad
h=\frac{kx^2}{2mg}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Spring Launch Maximum Height.png|**Fig. 109** Block on the compressed spring and at maximum height.]]

##### ) — Pulley with the incline mass sliding downhill

Take positive directions downhill for $m_1$ and upward for the hanging mass $m_2$. Kinetic friction on $m_1$ points uphill.

![[Kyle Kabasares - Newtonian Mechanics - Downhill Pulley and Friction.png|**Fig. 110** The pulley and individual force diagrams.]]

$$
T-m_2g=m_2a,\qquad
N-m_1g\cos\theta=0,
\qquad
m_1g\sin\theta-T-\mu_{\mathrm{k}}m_1g\cos\theta=m_1a.
$$

##### Conservation of energy and nonconservative work

Use $K_i+U_i=K_f+U_f$ when nonconservative work is zero. Otherwise use $W_{\mathrm{nc}}=\Delta K+\Delta U$, as for a block compressing a spring while moving on a rough surface.

![[Kyle Kabasares - Newtonian Mechanics - Spring Block Nonconservative Work.png|**Fig. 111** Before and after compression on the rough surface.]]

A block starts at rest at the top of a rough incline. Set $y_f=0$, with $y_i=\Delta s\sin\theta$. To find the final speed, first use $N-mg\cos\theta=0$, then apply the energy equation.

![[Kyle Kabasares - Newtonian Mechanics - Rough Incline Energy Geometry.png|**Fig. 112** Vertical drop and distance along the rough slope.]]

$$
W_{\mathrm{nc}}=F_{\mathrm{k}}\Delta s\cos180^\circ
=-\mu_{\mathrm{k}}mg\cos\theta\,\Delta s
=\tfrac12mv_f^2-mg\Delta s\sin\theta.
$$

##### Email problem

Find the final speed as mass $m_2$ slides a distance $\Delta s$ down an incline of angle $\theta$, raising the hanging mass $m_1$. Assume both start from rest.

![[Kyle Kabasares - Newtonian Mechanics - Exam Review Rough Pulley.png|**Fig. 113** The incline and rope, the hanging mass, and the forces on the sliding mass.]]

With downhill positive on the slope and upward positive for the hanging mass,

$$
\begin{aligned}
\sum F_{m_1,y}&=T-m_1g,\\
\sum F_{m_2,y}&=F_N-m_2g\cos\theta=0,\\
\sum F_{m_2,x}&=m_2g\sin\theta-T-F_{\mathrm{k}}=m_2a_x.
\end{aligned}
$$

The third line in the handwriting leaves off the $\sin\theta$ factor shown in the diagram. The perpendicular distance is resolved using the triangle with hypotenuse $\Delta s$, vertical side $\Delta s\sin\theta$, and horizontal side $\Delta s\cos\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Exam Review Displacement Triangle.png|**Fig. 114** Vertical and horizontal components of the distance along the slope.]]

The energy calculation uses $W_{\mathrm{nc}}=\Delta K+\Delta U$. Set the zero of height at the initial position of $m_1$ and the final position of $m_2$:

$$
W_{\mathrm{nc}}=\tfrac12(m_1+m_2)v_f^2+m_1gy_{1f}-m_2gy_{2i}.
$$

The page puts $\Delta s\sin\theta$ into both height terms. The hanging mass rises by the full rope displacement $\Delta s$, while the incline mass drops by $\Delta s\sin\theta$. With these distances the equation is

$$
-\mu_{\mathrm{k}}m_2g\cos\theta\,\Delta s
=\tfrac12(m_1+m_2)v_f^2+m_1g\Delta s-m_2g\Delta s\sin\theta.
$$

##### Week 2 worksheet

1. A projectile leaves horizontally from $y_0=24\,\unit{m}$ and travels $18\,\unit{m}$ horizontally before hitting the ground. Use $v_{0y}=0$, $y_f=0$, $a_x=0$, and $a_y=-9.8\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Worksheet Horizontal Launch.png|**Fig. 115** Launch from a 24 m height and landing 18 m away.]]

$$
v_{fy}^2=v_{0y}^2+2a_y(y_f-y_0)=-2a_yy_0,
\qquad
\lvert v_{fy}\rvert=21.7\,\unit{m/s}\approx22\,\unit{m/s}.
$$

The vertical velocity points downward. From $0=y_0+\tfrac12a_yt^2$, obtain $t=\sqrt{-2y_0/a_y}=2.2\,\unit{s}$. The horizontal speed is constant, $v_x=(18\,\unit{m})/(2.2\,\unit{s})=8.2\,\unit{m/s}$.

2(b). A rider leaves a $10^\circ$ ramp and lands at the same height. The sketch labels the gap $7\,\unit{m}$ and the calculation uses a target distance of $8.5\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Rider Jumping a Gap.png|**Fig. 116** Ramp, gap, and equal-height landing platform.]]

$$
v_{0x}=v_0\cos10^\circ,\qquad
v_{0y}=v_0\sin10^\circ,\qquad
t=\frac{8.5\,\unit{m}}{v_0\cos10^\circ}.
$$

Since $y_f-y_0=0$, $v_{fy}^2=v_{0y}^2+2a_y(y_f-y_0)=v_{0y}^2$. The landing vertical component has magnitude $v_0\sin10^\circ$ and points downward.

2(b). Substituting the time from the horizontal motion into the vertical displacement gives, with numerical values in SI units,

$$
0=v_0\sin10^\circ\frac{8.5}{v_0\cos10^\circ}
-4.9\left(\frac{8.5}{v_0\cos10^\circ}\right)^2.
$$

The next handwritten line retains an extra $v_0$ in the first term, leading to $v_0^3=243.3$ and a boxed $v_0=6.2\,\unit{m/s}$. Cancelling $v_0$ in that term instead gives

$$
v_0^2=\frac{4.9(8.5)^2}{(8.5\tan10^\circ)\cos^2 10^\circ},
\qquad
v_0\approx15.6\,\unit{m/s}.
$$

4. A projectile leaves a $200\,\unit{m}$ cliff with a speed of $60\,\unit{m/s}$. The sketch labels the angle $60^\circ$, while the calculation uses $v_{0x}=52\,\unit{m/s}$ and $v_{0y}=30\,\unit{m/s}$, which correspond to $30^\circ$ above horizontal.

![[Kyle Kabasares - Newtonian Mechanics - Worksheet Projectile from a Cliff.png|**Fig. 117** Launch point on a 200 m cliff and the horizontal distance to the impact point.]]

Using the component values and taking upward as positive,

$$
v_{fy}=-\sqrt{v_{0y}^2+2a_y(y_f-y_0)}
\approx-69.4\,\unit{m/s},
\qquad
t=\frac{v_{fy}-v_{0y}}{a_y}\approx10.1\,\unit{s}.
$$

The recorded range is $d\approx527\,\unit{m}$, using $d=v_{0x}t$.

##### Chapter 4

7. An object starts from rest at the origin and accelerates with $a_x=1.50\,\unit{m/s^2}$ and $a_y=6.00\,\unit{m/s^2}$. After $6\,\unit{s}$,

$$
x_f=\tfrac12a_xt^2=27\,\unit{m},
\qquad
y_f=\tfrac12a_yt^2=108\,\unit{m}.
$$

The magnitude of the displacement is $\sqrt{108^2+27^2}\,\unit{m}=111.3\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Two Dimensional Acceleration Displacement Triangle.png|**Fig. 118** The displacement components and their resultant.]]

13. For the horizontal projectile example, the drop over a horizontal distance of $50\,\unit{m}$ is $0.02\,\unit{m}$. Use $v_{0y}=0$ and $a_y=-9.8\,\unit{m/s^2}$.

$$
v_{fy}=-\sqrt{2a_y(y_f-y_0)}=-0.626\,\unit{m/s},
\qquad
t=\frac{v_{fy}}{a_y}=0.064\,\unit{s}.
$$

The horizontal speed is $v_x=(50\,\unit{m})/(0.064\,\unit{s})\approx780\,\unit{m/s}$.

##### Chapter 4 problems

79. In this version, a horizontal projectile travels $60\,\unit{m}$ and strikes the ground at $3.0^\circ$ below the horizontal. The launch velocity has zero vertical component. Write the impact speed as $v_f$.

![[Kyle Kabasares - Newtonian Mechanics - Sixty Meter Horizontal Launch.png|**Fig. 119** Launch, impact direction, and impact velocity components.]]

$$
v_x=v_f\cos3^\circ,\qquad
\lvert v_{fy}\rvert=v_f\sin3^\circ,\qquad
t=\frac{60\,\unit{m}}{v_f\cos3^\circ}=\frac{v_f\sin3^\circ}{g}.
$$

Therefore $v_f^2\sin3^\circ\cos3^\circ=(60\,\unit{m})g=588\,\unit{m^2/s^2}$. Using $\sin3^\circ\cos3^\circ\approx0.052$ gives $v_f\approx106\,\unit{m/s}$ and $v_x\approx106\,\unit{m/s}$.

25. The speed of a point rotating at radius $r$ with period $T$ is $v=2\pi r/T$. Compare radii $6.4\times10^6\,\unit{m}$ and $6.4\times10^6\,\unit{m}+300\,\unit{m}$ for $T=86{,}400\,\unit{s}$. The notes subtract $465.421\,\unit{m/s}$ from $465.442\,\unit{m/s}$, giving a difference of about $0.021\,\unit{m/s}$.

##### Chapter 6

17. A $300\,\unit{kg}$ box is pushed with $385\,\unit{N}$ and pulled with $350\,\unit{N}$, both horizontally to the right. Its acceleration is zero.

![[Kyle Kabasares - Newtonian Mechanics - Push and Pull with Constant Speed.png|**Fig. 120** Both applied forces point right and kinetic friction points left.]]

$$
N=mg,\qquad
F_{\mathrm{k}}=385\,\unit{N}+350\,\unit{N}=735\,\unit{N},
\qquad
\mu_{\mathrm{k}}=\frac{735}{(300)(9.8)}=0.25.
$$

21. A $1{,}500\,\unit{kg}$ vehicle stops over $65\,\unit{m}$ with $\mu_{\mathrm{k}}=0.50$. Find its initial speed.

![[Kyle Kabasares - Newtonian Mechanics - Vehicle Stopping over Sixty Five Meters.png|**Fig. 121** The stopping distance and the forces during the slide.]]

Take forward as positive. Then $N=mg$ and $-F_{\mathrm{k}}=ma_x$, giving $a_x=-\mu_{\mathrm{k}}g=-4.9\,\unit{m/s^2}$. With $v_f=0$,

$$
v_f^2=v_0^2+2a_x(x_f-x_0),
\qquad
v_0=\sqrt{-2a_x\Delta x}\approx25\,\unit{m/s}.
$$

23. An object moving at $10\,\unit{m/s}$ slows due to rolling resistance with $\mu_{\mathrm{r}}=0.002$. The acceleration along its direction of motion is $a_x=-\mu_{\mathrm{r}}g=-0.0196\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Rolling Resistance Force Diagram.png|**Fig. 122** Rolling resistance acts opposite the motion.]]

$$
t=-\frac{v_0}{a_x}\approx510\,\unit{s},
\qquad
x_f=v_0t+\tfrac12a_xt^2\approx2{,}551\,\unit{m}\quad(x_0=0).
$$

29. Two ropes hold a $1{,}000\,\unit{kg}$ mass. Tension $T_1$ points $70^\circ$ above the leftward horizontal and $T_2$ points $60^\circ$ above the rightward horizontal.

![[Kyle Kabasares - Newtonian Mechanics - Thousand Kilogram Load on Two Ropes.png|**Fig. 123** The rope angles and the forces on the load.]]

$$
T_1\sin70^\circ+T_2\sin60^\circ-mg=0,\qquad
T_2\cos60^\circ-T_1\cos70^\circ=0.
$$

Substitute $T_1=T_2\cos60^\circ/\cos70^\circ$ into the vertical balance:

$$
T_2=\frac{mg}{\tan70^\circ\cos60^\circ+\sin60^\circ}
\approx4{,}375\,\unit{N},
\qquad
T_1\approx6{,}396\,\unit{N}.
$$

39(a). A $20{,}000\,\unit{kg}$ object has an upward force of $3.0\times10^5\,\unit{N}$. The net force is $F-mg$.

![[Kyle Kabasares - Newtonian Mechanics - Upward Force on Twenty Tonne Mass.png|**Fig. 124** Upward applied force and downward weight.]]

$$
a=\frac{F-mg}{m}
=\frac{3.0\times10^5-(20{,}000)(9.8)}{20{,}000}\,\unit{m/s^2}
=5.2\,\unit{m/s^2}.
$$

39(b). From $F_{\mathrm{thrust}}-mg=ma$, the remaining mass is $m=F_{\mathrm{thrust}}/(a+g)$. The page records $18{,}987.3\,\unit{kg}$ remaining and approximately $1{,}012.6\,\unit{kg}$ of fuel burned.

47. A sled is pulled at constant speed by a rope angled $30^\circ$ above horizontal.

![[Kyle Kabasares - Newtonian Mechanics - Sled Pulled at Thirty Degrees.png|**Fig. 125** The sled and its free-body diagram.]]

$$
N+T\sin30^\circ-mg=0,\qquad
T\cos30^\circ-F_{\mathrm{k}}=0.
$$

With $F_{\mathrm{k}}=\mu_{\mathrm{k}}N$,

$$
\mu_{\mathrm{k}}=\frac{T\cos30^\circ}{mg-T\sin30^\circ}=0.117\approx0.12.
$$

51. A $2\,\unit{kg}$ block slides downward at constant speed against a wall, with $\mu_{\mathrm{k}}=0.20$. An applied force $F$ points upward and toward the wall at $45^\circ$.

![[Kyle Kabasares - Newtonian Mechanics - Forty Five Degree Push against Wall.png|**Fig. 126** The horizontal and vertical components of the applied force and the wall contact forces.]]

$$
N-F\cos45^\circ=0,\qquad
F_{\mathrm{k}}+F\sin45^\circ-mg=0.
$$

$$
F=\frac{mg}{\mu_{\mathrm{k}}\cos45^\circ+\sin45^\circ}=23.1\,\unit{N}.
$$

##### Chapter 8

35(a). A $0.5\,\unit{kg}$ mass swings in a horizontal circle of radius $r=0.2\,\unit{m}$ on a string of length $L=1\,\unit{m}$. The string makes an angle $\theta$ above horizontal. The vertical side of the geometry triangle is $\sqrt{L^2-r^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Chapter Eight Conical Pendulum.png|**Fig. 127** The circular trajectory, the string geometry, and the tension components.]]

$$
T\sin\theta-mg=0,\qquad
T=\frac{mg}{\sin\theta}
=\frac{mgL}{\sqrt{L^2-r^2}}\approx5\,\unit{N}.
$$

35(b). The inward force is $T\cos\theta=mv^2/r=m\omega^2r$. Since $\cos\theta=r/L$, this gives

$$
\omega=\sqrt{\frac{T}{Lm}}=3.16\,\unit{rad/s}.
$$

Convert by multiplying by $60\,\unit{s/min}$ and by $1\,\unit{rev}/(2\pi\,\unit{rad})$, giving $30.2\,\unit{rpm}$.

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Force | Interaction that changes momentum. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Displacement | Final position minus initial position. |
| $\Delta t$ | $\unit{s}$ | Elapsed time | Duration of the motion being measured. |
| $\energy{W}$ | $\unit{J}$ | Work | Line integral of force along the path of displacement. |
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Force per unit displacement from equilibrium in Hooke's law. |
| $\energy{K}$ | $\unit{J}$ | Kinetic energy | Energy of motion, $\tfrac12mv^2$ for a point mass. |
| $\energy{P}$ | $\unit{W}$ | Power | Work done per unit time. |
| $\energy{U}_g$ | $\unit{J}$ | Gravitational potential energy | Energy associated with height in the uniform field, $mgy$. |
| $\energy{E}_{\mathrm{mech}}$ | $\unit{J}$ | Mechanical energy | Sum of kinetic and potential energies. |
| $\mechanical{k}$ | $\unit{N\,m/rad}$ | Torsion constant | Restoring torque magnitude per unit angular displacement. |
