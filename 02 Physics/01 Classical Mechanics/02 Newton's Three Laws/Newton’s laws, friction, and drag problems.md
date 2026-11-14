---
title: "Newton’s laws, friction, and drag problems"
---

> [!TLDR]
> Draw force balances for inclines, ropes, contact friction, drag, and circular motion.

## Worked lecture material

##### Force and Newton's laws

A net force causes an object to accelerate. Constant velocity implies zero net force, which is translational equilibrium. Forces are vectors and follow vector arithmetic.

Newton's laws give a systematic way to calculate the effects of forces on objects.

1. **Inertia.** An object at rest stays at rest, and an object moving at constant velocity continues at that velocity unless a net external force acts.
2. **Force and acceleration.** $\mechanical{\vec F}_{\mathrm{net}}=\mechanical{m}\mechanical{\vec a}$. Acceleration is directly proportional to net force and inversely proportional to mass.
3. **Interaction pairs.** The force of body 1 on body 2 and the force of body 2 on body 1 have equal magnitudes and opposite directions, $\mechanical{\vec F}_{1\mathrm{\ on\ }2}=-\mechanical{\vec F}_{2\mathrm{\ on\ }1}$.

One newton is one $\unit{kg\,m/s^2}$. Mass is independent of the object's location. Weight is the gravitational force on the object, $\mechanical{\vec W}=\mechanical{m}\mechanical{\vec g}$.

Weight $\mechanical{\vec W}=\mechanical{m}\mechanical{\vec g}$ is a vector because it is a force. Force has units $\unit{N}=\unit{kg\,m/s^2}$.

A $1000\,\unit{kg}$ car with a driving force of $10{,}000\,\unit{N}$ through the tires accelerates at $10\,\unit{m/s^2}$ when that is the net force.

A $0.3\,\unit{kg}$ hockey puck has net force components $10\,\unit{N}$ in $x$ and $5\,\unit{N}$ in $y$. The force magnitude is $\sqrt{10^2+5^2}=\sqrt{125}\simeq11.2\,\unit{N}$, giving acceleration magnitude $37.3\,\unit{m/s^2}$. Its components are $10/0.3=33.3\,\unit{m/s^2}$ and $5/0.3=16.67\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Forces on a hockey puck.png|**Fig. 37** Perpendicular forces and their resultant on the puck.]]

A Moon rock weighs $200\,\unit{N}$ on the Moon, where $g_{\mathrm{Moon}}\simeq g_{\mathrm{Earth}}/6\simeq1.63\,\unit{m/s^2}$. Its mass is $200/1.63\simeq122.7\,\unit{kg}$. Using Earth's gravity gives about $1.20\times10^3\,\unit{N}$, written as $1202.5\,\unit{N}$.

For a $400\,\unit{N}$ box at rest on a table, $\sum F_y=\mechanical{N}-\mechanical{W}=\mechanical{m}a_y=0$, so the normal force equals the weight in magnitude.

![[Kyle Kabasares - Newtonian Mechanics - Normal force and weight.png|**Fig. 38** Normal force upward and weight downward on a box at rest.]]

##### (b) Apex

With $v_{0y}=26\,\unit{m/s}$ and $a_y=-9.8\,\unit{m/s^2}$, the vertical velocity reaches zero at $t=-v_{0y}/a_y=2.65\,\unit{s}$. The height is $-v_{0y}^2/(2a_y)=34.48\,\unit{m}$. The time from the apex to the cliff is $3.6-2.65=0.95\,\unit{s}$.

##### (a) Cliff height

At $t=3.6\,\unit{s}$, $y_f=y_0+v_{0y}t+\tfrac12a_yt^2=(26)(3.6)-(4.9)(3.6)^2=30.096\,\unit{m}$.

##### (c) Velocity at the cliff

From the apex, the vertical velocity becomes $a_y(0.95\,\unit{s})\simeq-9.4\,\unit{m/s}$. The horizontal component is still $15\,\unit{m/s}$. The speed is $\sqrt{(-9.4)^2+15^2}\,\unit{m/s}\simeq17.7\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity at the cliff.png|**Fig. 39** Horizontal and vertical velocity components on arrival at the cliff.]]

**4.45.** Launch at $17\,\unit{m/s}$ and $4.7^\circ$ from height $2\,\unit{m}$. An obstacle $7\,\unit{m}$ away has height $1\,\unit{m}$. The initial components are $v_{0x}=17\cos4.7^\circ\simeq16.9\,\unit{m/s}$ and $v_{0y}=17\sin4.7^\circ\simeq1.4\,\unit{m/s}$. The horizontal travel takes $7/16.9\simeq0.41\,\unit{s}$. The height is $2+(1.4)(0.41)-(4.9)(0.41)^2\simeq1.75\,\unit{m}$, a clearance of $0.75\,\unit{m}$. The handwritten vertical speed calculation squares $1.4$. The velocity equation gives $v_{fy}=1.4-(9.8)(0.41)\simeq-2.62\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile obstacle clearance.png|**Fig. 40** Launch geometry for the obstacle-clearance problem.]]

**4.49.** Launch at $6\,\unit{m/s}$ and $15^\circ$ below horizontal from $2.8\,\unit{m}$ above the landing level. Use $v_{0x}=6\cos15^\circ\simeq5.8\,\unit{m/s}$ and $v_{0y}=-6\sin15^\circ\simeq-1.55\,\unit{m/s}$. The positive root of $0=2.8-1.55t-4.9t^2$ is $t\simeq0.61\,\unit{s}$. The horizontal range is $(5.8)(0.61)\simeq3.538\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Downward launch.png|**Fig. 41** Downward launch and its $2.8\,\unit{m}$ change in height.]]

**4.50(a).** The projectile launches at $20\,\unit{m/s}$ and $20^\circ$ from a cliff $28\,\unit{m}$ high. Its components are $v_{0x}=20\cos20^\circ\simeq18.8\,\unit{m/s}$ and $v_{0y}=20\sin20^\circ\simeq6.8\,\unit{m/s}$. Solve $0=28+6.8t-4.9t^2$ for the positive root $t\simeq3.2\,\unit{s}$. The horizontal distance is $(18.8)(3.2)\,\unit{m}\simeq60.2\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Launch from a cliff.png|**Fig. 42** Projectile launched at $20^\circ$ from a $28\,\unit{m}$ cliff.]]

**4.50(b).** From $v_{fy}^2=v_{0y}^2+2a_y(y_f-y_0)$, the vertical impact speed is $24.4\,\unit{m/s}$ downward. Combining with the constant horizontal component gives $\sqrt{24.4^2+18.8^2}\,\unit{m/s}\simeq30.8\,\unit{m/s}$.

**4.57.** The centripetal acceleration is $a_c=v^2/r$. The handwritten expression $mv^2/r$ gives the corresponding force. At fixed speed, halving $r$ doubles the acceleration. At fixed radius, doubling $v$ multiplies it by four.

**4.60.** For a speed of $20\,\unit{m/s}$ and centripetal acceleration $1.5g=14.7\,\unit{m/s^2}$, the radius is $r=v^2/a_c=20^2/14.7\simeq27.2\,\unit{m}$.

**4.62.** Add Earth's radius to the satellite altitude to obtain the orbital radius $r=6.37\times10^6+3.58\times10^7=4.217\times10^7\,\unit{m}$. For period $T=86{,}400\,\unit{s}$, the speed is $v=2\pi r/T\simeq3066.7\,\unit{m/s}$. The centripetal acceleration is $v^2/r\simeq0.223\,\unit{m/s^2}$.

##### 4.79

The object leaves horizontally and lands $52\,\unit{m}$ away, with its velocity directed $3^\circ$ below the horizontal at impact. Take the ground as $y_f=0$. The horizontal acceleration and initial vertical velocity are both zero. The vertical acceleration is $-9.8\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal Launch at Three Degrees.png|**Fig. 43** Horizontal launch and the velocity components at impact.]]

The kinematics equations are $v_f=v_0+at$, $v_f^2=v_0^2+2a(x_f-x_0)$, and $x_f=x_0+v_0t+\frac12at^2$. From the impact velocity triangle,

$$
\lvert v_{fy}\rvert=gt=v_x\tan 3^\circ,
\qquad
t=\frac{52\,\unit{m}}{v_x}.
$$

$$
v_x^2\tan 3^\circ=(52\,\unit{m})g,
\qquad
\mechanical{v_x}=\sqrt{\frac{(52\,\unit{m})g}{\tan 3^\circ}}=98.6\,\unit{m/s}.
$$

##### 5.7

(a) $2F=2.8m$, so multiplying both sides by two gives $4F=5.6m$. Part (b) begins with $2F$.

##### 6.13

(c) $w=mg=(55\,\unit{kg})(1.62\,\unit{m/s^2})$.

##### )

The notes label this an example of the third law. A $3\,\unit{kg}$ block on a frictionless surface has a $20\,\unit{N}$ force to the right and a $5\,\unit{N}$ force to the left.

![[Kyle Kabasares - Newtonian Mechanics - Frictionless Block with Opposing Forces.png|**Fig. 44** Applied forces, normal force, and weight on the block.]]

$$
\sum \mechanical{F}_x=(20-5)\,\unit{N}=15\,\unit{N},
\qquad
\sum \mechanical{F}_y=\mechanical{F}_N-\mechanical{m}\mechanical{g}=0.
$$

Thus $F_N=mg$, $a_y=0$, and $a_x=(15\,\unit{N})/(3\,\unit{kg})=5\,\unit{m/s^2}$ in the $+x$ direction.

##### Statics example

Tension $T$ is a force in a rope, chain, or similar connection. Find $T$ for a hanging $5\,\unit{kg}$ block.

![[Kyle Kabasares - Newtonian Mechanics - One Hanging Block at Rest.png|**Fig. 45** Upward tension and downward weight.]]

Since the block has zero acceleration, $\sum F_y=T-mg=0$ and $\mechanical{T}=\mechanical{m}\mechanical{g}$.

##### Statics example 2

Find $T_1$ in the top rope and $T_2$ in the rope connecting the two masses.

![[Kyle Kabasares - Newtonian Mechanics - Two Hanging Blocks at Rest.png|**Fig. 46** The system of both blocks and the free-body diagram of the lower block.]]

For both blocks together,

$$
\sum F_y=T_1-(m_1g+m_2g)=0,
\qquad
\mechanical{T}_1=(\mechanical{m}_1+\mechanical{m}_2)\mechanical{g}.
$$

For $T_2$, isolate $m_2$ as if it were hanging directly from the ceiling.

$$
\sum F_y=T_2-m_2g=0,
\qquad
\mechanical{T}_2=\mechanical{m}_2\mechanical{g}.
$$

##### Statics example 3

The two vertical ropes supporting the same block have equal tension $T$.

![[Kyle Kabasares - Newtonian Mechanics - Two Vertical Support Ropes.png|**Fig. 47** Both ropes pull upward on the block.]]

$$
\sum F_y=T+T-mg=0,
\qquad
\mechanical{T}=\frac{\mechanical{m}\mechanical{g}}{2}.
$$

**Example 4**

Two ropes support a mass $m$ and make equal angles $\theta$ with the horizontal. Break each vector into components and sum the components.

![[Kyle Kabasares - Newtonian Mechanics - Symmetric Angled Support Ropes.png|**Fig. 48** Tension vectors and components for the two angled ropes.]]

$$
\begin{aligned}
T_{1x}&=-T_1\cos\theta, & T_{1y}&=T_1\sin\theta,\\
T_{2x}&=T_2\cos\theta, & T_{2y}&=T_2\sin\theta.
\end{aligned}
$$

$$
\sum F_x=T_2\cos\theta-T_1\cos\theta=0
\quad\Longrightarrow\quad T_2=T_1=T.
$$

$$
\sum F_y=T_2\sin\theta+T_1\sin\theta-mg=0
\quad\Longrightarrow\quad
\mechanical{T}=\frac{\mechanical{m}\mechanical{g}}{2\sin\theta}.
$$

**Example 5**

A rope holds a mass on a frictionless incline. Rotate the coordinate system so that $+x$ is down the incline and $+y$ is perpendicular to and away from it. Draw the free-body diagram and resolve the forces into components to find the tension and normal force.

![[Kyle Kabasares - Newtonian Mechanics - Tension on a Frictionless Incline.png|**Fig. 49** The block, its free-body diagram, and the components of its weight.]]

$$
\begin{aligned}
\sum F_x&=mg\sin\theta-T=0, & \mechanical{T}&=\mechanical{m}\mechanical{g}\sin\theta,\\
\sum F_y&=F_N-mg\cos\theta=0, & \mechanical{F}_N&=\mechanical{m}\mechanical{g}\cos\theta.
\end{aligned}
$$

**Example 6**

A $5\,\unit{kg}$ mass hangs from two ropes at $\theta_1=60^\circ$ on the right and $\theta_2=45^\circ$ on the left, measured from the horizontal.

![[Kyle Kabasares - Newtonian Mechanics - Asymmetric Angled Support Ropes.png|**Fig. 50** Geometry and force components for the two unequal rope angles.]]

$$
\sum F_x=T_1\cos\theta_1-T_2\cos\theta_2=0
\quad\Longrightarrow\quad
T_1=T_2\frac{\cos\theta_2}{\cos\theta_1}.
$$

$$
\sum F_y=T_1\sin\theta_1+T_2\sin\theta_2-mg=0.
$$

Substitute for $T_1$ in the vertical equation:

$$
\begin{aligned}
\frac{T_2\cos\theta_2}{\cos\theta_1}\sin\theta_1+T_2\sin\theta_2&=mg,\\
T_2(\cos\theta_2\tan\theta_1+\sin\theta_2)&=mg,\\
\mechanical{T}_2&=\frac{\mechanical{m}\mechanical{g}}{\cos\theta_2\tan\theta_1+\sin\theta_2},\\
\mechanical{T}_1&=\mechanical{T}_2\frac{\cos\theta_2}{\cos\theta_1}.
\end{aligned}
$$

##### ) — Week 4 worksheet 1

1(a). A projectile leaves horizontally from $24\,\unit{m}$ above the ground and lands $18\,\unit{m}$ away. Take $x_0=0$, $y_f=0$, $v_{0y}=0$, and $a_y=-9.8\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Twenty Four Meter Horizontal Launch.png|**Fig. 51** Horizontal launch from a ledge and the landing point.]]

$$
0=y_0+\tfrac12a_yt^2
\quad\Longrightarrow\quad
t=\sqrt{\frac{-2y_0}{a_y}}=2.2\,\unit{s},
\qquad
\mechanical{v}_x=\frac{18\,\unit{m}}{2.2\,\unit{s}}=8.2\,\unit{m/s}.
$$

1(b). The horizontal velocity is constant, so $v_{fx}=8.2\,\unit{m/s}$. The vertical component at impact is $v_{fy}=v_{0y}+a_yt=(-9.8)(2.2)\,\unit{m/s}=-21.6\,\unit{m/s}$.

2(a). Launch at $23\,\unit{m/s}$ at $37^\circ$ above horizontal from a height of $2\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Thirty Seven Degree Launch Components.png|**Fig. 52** Launch velocity and its horizontal and vertical components.]]

$$
v_x=23\cos37^\circ\,\unit{m/s}=18.4\,\unit{m/s},
\qquad
v_{0y}=23\sin37^\circ\,\unit{m/s}=13.8\,\unit{m/s}.
$$

At impact, $y_f=0$, and with numerical values in SI units,

$$
0=y_0+v_{0y}t+\tfrac12 a_y t^2=2+13.8t-4.9t^2.
$$

$$
t=\frac{-13.8\pm\sqrt{13.8^2-4(-4.9)(2)}}{2(-4.9)}
\quad\Longrightarrow\quad
t\approx -0.13\,\unit{s}\ \text{or}\ 2.95\,\unit{s}.
$$

The flight time is about $2.9\,\unit{s}$.

2(b). The range is $x=v_xt=(18.4\,\unit{m/s})(2.9\,\unit{s})=53.4\,\unit{m}$.

2(c). At maximum height, $v_{fy}=0$. Starting at $y_0=2\,\unit{m}$ with $v_{0y}=13.8\,\unit{m/s}$ and $a_y=-9.8\,\unit{m/s^2}$ gives

$$
0=v_{0y}+a_yt,
\qquad
t=-\frac{v_{0y}}{a_y}=1.4\,\unit{s}.
$$

$$
y_f=y_0+v_{0y}t+\tfrac12a_yt^2
=[2+(13.8)(1.4)-(4.9)(1.4)^2]\,\unit{m}=11.7\,\unit{m}.
$$

2(d). At impact, $v_x=18.4\,\unit{m/s}$ and $v_{fy}=v_{0y}+a_yt=[13.8+(-9.8)(2.9)]\,\unit{m/s}=-14.6\,\unit{m/s}$.

3. Newton's laws

1. An object in motion stays in motion, and an object at rest stays at rest, unless acted on by a net external force.
2. The sum of the forces on an object equals its mass times its acceleration.
3. When one object exerts a force on a second object, the second object exerts an equal-magnitude force in the opposite direction on the first.

4(a). Gravity is the only force on the ball after release.

![[Kyle Kabasares - Newtonian Mechanics - Ball in Free Fall.png|**Fig. 53** A thrown ball and the downward force on it after release.]]

4(b–d). The acceleration stays at $9.8\,\unit{m/s^2}$ downward because gravity is the only force. The force points downward throughout the motion and is constant.

5. The forces on the person are the upward normal force $F_N$ and the downward weight $mg$.

![[Kyle Kabasares - Newtonian Mechanics - Person in Elevator.png|**Fig. 54** Normal force and weight on a person standing in an elevator.]]

##### Projectile launched at 45°

Find the launch speed for a projectile that passes through a point $20\,\unit{m}$ away and $4\,\unit{m}$ above its starting point. The launch angle is $45^\circ$, $x_0=y_0=0$, and $a_y=-9.8\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile Reaching Four Meter Wall.png|**Fig. 55** Launch from ground level toward the top of the wall.]]

Use $v_x=v_0\cos45^\circ$, $v_{0y}=v_0\sin45^\circ$, and $t=(20\,\unit{m})/(v_0\cos45^\circ)$. The handwritten calculation combines $v_{fy}=v_{0y}+a_yt$ and $v_{fy}^2=v_{0y}^2+2a_y(y_f-y_0)$. It drops the cross term on squaring and boxes $v_0=\sqrt{980}\,\unit{m/s}=31.3\,\unit{m/s}$. Using vertical displacement with the same time of flight gives

$$
y_f=(20\,\unit{m})\tan45^\circ-\frac{g(20\,\unit{m})^2}{2v_0^2\cos^2 45^\circ},
\qquad
\mechanical{v}_0\approx 15.7\,\unit{m/s}.
$$

##### ) — Block released from rest

Find the acceleration and the speed at the bottom of the incline.

![[Kyle Kabasares - Newtonian Mechanics - Block Released on an Incline.png|**Fig. 56** Incline and force diagram for a released block.]]

$$
\begin{aligned}
\sum F_x&=mg\sin\theta=ma, & \mechanical{a}&=\mechanical{g}\sin\theta,\\
\sum F_y&=F_N-mg\cos\theta=0, & \mechanical{F}_N&=\mechanical{m}\mechanical{g}\cos\theta.
\end{aligned}
$$

Using $v^2=v_0^2+2a(x-x_0)$, the page gives $v^2=2(g\sin\theta)(5-0)\,\unit{m}$ and $v=7\,\unit{m/s}$.

##### Dynamics example

Two masses hang from the ends of a rope passing over an ideal pulley. If $m_1>m_2$, $m_1$ goes down. The two masses have equal acceleration magnitudes.

![[Kyle Kabasares - Newtonian Mechanics - Ideal Atwood Machine.png|**Fig. 57** Pulley setup and individual force diagrams.]]

$$
\sum F_{1y}=T_1-m_1g=-m_1a,
\qquad
\sum F_{2y}=T_2-m_2g=m_2a.
$$

For the massless pulley, $T_1=T_2=T$. Substitute $T=m_1g-m_1a$ in the second equation:

$$
\begin{aligned}
m_1g-m_1a-m_2g&=m_2a,\\
(m_1-m_2)g&=(m_1+m_2)a,\\
\mechanical{a}&=\frac{\mechanical{m}_1-\mechanical{m}_2}{\mechanical{m}_1+\mechanical{m}_2}\mechanical{g},\\
\mechanical{T}&=\mechanical{m}_1\mechanical{g}
-\mechanical{m}_1\frac{\mechanical{m}_1-\mechanical{m}_2}{\mechanical{m}_1+\mechanical{m}_2}\mechanical{g}.
\end{aligned}
$$

##### Incline and hanging mass

Assume a frictionless incline and a massless pulley, with $m_2$ falling and $m_1$ moving up the incline.

![[Kyle Kabasares - Newtonian Mechanics - Incline Pulley Dynamics.png|**Fig. 58** Incline and pulley setup with the force diagrams of both masses.]]

For $m_1$, take $+x$ up the incline and $+y$ perpendicular to the surface. For $m_2$, take upward as positive.

$$
\begin{aligned}
T-m_1g\sin\theta&=m_1a,\\
F_N-m_1g\cos\theta&=0,\\
T-m_2g&=-m_2a.
\end{aligned}
$$

Substitute $T=m_2g-m_2a$ in the first equation to obtain $m_2g-m_1g\sin\theta=(m_1+m_2)a$. Then

$$
\mechanical{a}=\frac{(\mechanical{m}_2-\mechanical{m}_1\sin\theta)\mechanical{g}}{\mechanical{m}_1+\mechanical{m}_2},
\qquad
\mechanical{T}=\mechanical{m}_2\mechanical{g}-\mechanical{m}_2\mechanical{a}.
$$

##### Three blocks in contact

A force of $6\,\unit{N}$ pushes three blocks of masses $1$, $2$, and $3\,\unit{kg}$ in contact. Find each acceleration and net force.

![[Kyle Kabasares - Newtonian Mechanics - Pushing Three Blocks.png|**Fig. 59** The applied force pushes on the smallest block.]]

$$
F=(m_1+m_2+m_3)a,
\qquad
a=\frac{6\,\unit{N}}{(1+2+3)\,\unit{kg}}=1\,\unit{m/s^2}.
$$

The net force on each block is $m_i a$, giving $F_{1,\mathrm{net}}=1\,\unit{N}$, $F_{2,\mathrm{net}}=2\,\unit{N}$, and $F_{3,\mathrm{net}}=3\,\unit{N}$.

##### Forces between the blocks

Take rightward as positive. Block 1 accelerates blocks 2 and 3 as a group, while block 2 accelerates block 3.

![[Kyle Kabasares - Newtonian Mechanics - Contact Forces between Three Blocks.png|**Fig. 60** Contacts and group of blocks used to calculate the forces.]]

$$
\begin{aligned}
F_{12}&=(m_2+m_3)a=(2+3)(1)\,\unit{N}=5\,\unit{N}, & F_{21}&=-5\,\unit{N},\\
F_{23}&=m_3a=(3)(1)\,\unit{N}=3\,\unit{N}, & F_{32}&=-3\,\unit{N}.
\end{aligned}
$$

##### Apparent weight in an elevator

A $70\,\unit{kg}$ man stands on a scale in an elevator that starts at rest and then accelerates. Find the apparent weight at $+3\,\unit{m/s^2}$ and $-3\,\unit{m/s^2}$. Take upward as positive.

![[Kyle Kabasares - Newtonian Mechanics - Elevator Scale and Apparent Weight.png|**Fig. 61** A person standing on the elevator scale.]]

$$
\sum F_y=N-mg=ma_y.
$$

1. Stationary ($a_y=0$). $N=mg=686\,\unit{N}$, equal to the actual weight.
2. Accelerating upward ($a_y=3\,\unit{m/s^2}$). $N=m(g+a_y)=(70)(9.8+3)\,\unit{N}=896\,\unit{N}$.
3. Accelerating downward ($a_y=-3\,\unit{m/s^2}$). $N=m(g+a_y)=(70)(9.8-3)\,\unit{N}=476\,\unit{N}$.

##### Friction

Friction opposes relative sliding or the tendency to slide. The notes list static, kinetic, and rolling friction. It is often harder to start a box sliding than to keep it sliding, because maximum static friction is generally at least as large as kinetic friction. The experimentally determined coefficients depend on the materials. The page gives a range from about $0.001$ to $3$–$4$.

$$
\mechanical{f}_{\mathrm{s}}\leq\mechanical{\mu}_{\mathrm{s}}\mechanical{F}_N,
\qquad
\mechanical{f}_{\mathrm{k}}=\mechanical{\mu}_{\mathrm{k}}\mechanical{F}_N.
$$

##### Block pulled by a rope with friction

Find the acceleration of a $5\,\unit{kg}$ block when the horizontal rope tension is $30\,\unit{N}$. The coefficients are $\mu_{\mathrm{k}}=0.5$ and $\mu_{\mathrm{s}}=0.7$.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal Rope and Kinetic Friction.png|**Fig. 62** Rope tension, kinetic friction, weight, and normal force.]]

For the sliding case,

$$
\sum F_y=F_N-mg=0,
\qquad
\sum F_x=T-f_{\mathrm{k}}=ma.
$$

$$
\mechanical{a}=\frac{T-\mu_{\mathrm{k}}mg}{m}
=\frac{30\,\unit{N}-(0.5)(5\,\unit{kg})(9.8\,\unit{m/s^2})}{5\,\unit{kg}}
=1.1\,\unit{m/s^2}.
$$

If the block starts at rest, the maximum static friction is $(0.7)(5\,\unit{kg})(9.8\,\unit{m/s^2})=34.3\,\unit{N}$, so the given tension leaves it at rest.

##### Friction force versus applied force

![[Kyle Kabasares - Newtonian Mechanics - Static to Kinetic Friction.png|**Fig. 63** Static friction grows with applied force up to the onset of sliding. Kinetic friction is lower.]]

For the preceding example, the friction to overcome before the block slides is $f_{\mathrm{s,max}}=\mu_{\mathrm{s}}F_N=(0.7)(5)(9.8)\,\unit{N}=34.3\,\unit{N}$.

##### Block sliding down an incline with friction

![[Kyle Kabasares - Newtonian Mechanics - Sliding Block and Weight Components.png|**Fig. 64** Incline, normal force, and components of weight.]]

Take $+x$ down the incline and $+y$ perpendicular to and away from the incline.

$$
\sum F_y=F_N-mg\cos\theta=0,
\qquad
F_N=mg\cos\theta.
$$

$$
\sum F_x=mg\sin\theta-f_{\mathrm{k}}
=mg\sin\theta-\mu_{\mathrm{k}}mg\cos\theta=ma_x,
\qquad
\mechanical{a}_x=\mechanical{g}(\sin\theta-\mu_{\mathrm{k}}\cos\theta).
$$

##### Box dragged horizontally at constant speed

A force $F$ acts at an angle $\theta$ above the horizontal. Find $\mu_{\mathrm{k}}$.

![[Kyle Kabasares - Newtonian Mechanics - Constant Speed Angled Pull.png|**Fig. 65** Forces on the box and the components of the applied force.]]

$$
\begin{aligned}
\sum F_x&=F\cos\theta-f_{\mathrm{k}}=0,\\
\sum F_y&=F_N+F\sin\theta-mg=0.
\end{aligned}
$$

Using $f_{\mathrm{k}}=\mu_{\mathrm{k}}F_N$ gives

$$
\mechanical{\mu}_{\mathrm{k}}=\frac{\mechanical{F}\cos\theta}{\mechanical{m}\mechanical{g}-\mechanical{F}\sin\theta}.
$$

##### Pulley with friction on the incline

Assume that $m_1$ slides up the incline and $m_2$ descends. The kinetic friction on $m_1$ points down the incline.

![[Kyle Kabasares - Newtonian Mechanics - Incline Pulley with Friction.png|**Fig. 66** The pulley setup and the free-body diagrams of the two masses.]]

$$
\begin{aligned}
\sum F_{1x}&=T-f_{\mathrm{k}}-m_1g\sin\theta=m_1a,\\
\sum F_{1y}&=N-m_1g\cos\theta=0,\\
\sum F_{2y}&=T-m_2g=-m_2a.
\end{aligned}
$$

Since $f_{\mathrm{k}}=\mu_{\mathrm{k}}N=\mu_{\mathrm{k}}m_1g\cos\theta$, eliminate $T$ using $T=m_2g-m_2a$.

$$
\mu_{\mathrm{k}}m_1g\cos\theta+m_1g\sin\theta+m_1a=m_2g-m_2a.
$$

$$
\mechanical{a}=
\frac{(\mechanical{m}_2-\mu_{\mathrm{k}}\mechanical{m}_1\cos\theta-\mechanical{m}_1\sin\theta)\mechanical{g}}
{\mechanical{m}_2+\mechanical{m}_1}.
$$

Find the tension by substituting $a$ back into $T=m_2g-m_2a$.

##### Static friction between horizontally accelerated blocks

A horizontal force $F$ pushes $m_1$ against $m_2$ on a frictionless floor. Find the minimum force for which $m_2$ stays in place vertically. $F_{12}$ is the normal force that $m_1$ exerts on $m_2$.

![[Kyle Kabasares - Newtonian Mechanics - Block Held by Vertical Static Friction.png|**Fig. 67** The applied force, the contact between the blocks, and the forces on the smaller block.]]

For vertical equilibrium, $\sum F_y=f_{\mathrm{s}}-m_2g=0$. At the threshold of slipping, $\mu_{\mathrm{s}}F_N=m_2g$.

The system accelerates at $a=F/(m_1+m_2)$. The normal force is the only horizontal force on $m_2$, so

$$
F_{12}=F_N=m_2a=\frac{m_2F}{m_1+m_2}.
$$

Equating $\mu_{\mathrm{s}}m_2F/(m_1+m_2)$ to $m_2g$ gives

$$
\mechanical{F}_{\min}=\frac{\mechanical{g}(\mechanical{m}_1+\mechanical{m}_2)}{\mu_{\mathrm{s}}}.
$$

##### Friction related to rolling and walking

When walking, the foot pushes backward on the ground. By Newton's third law, the ground exerts a forward static friction force on the foot.

![[Kyle Kabasares - Newtonian Mechanics - Static Friction in Walking.png|**Fig. 68** The backward push of the foot and forward static friction from the ground.]]

##### Tires rolling and sliding motion

A driven tire pushes backward on the ground. By Newton's third law, static friction from the ground acts forward on the tire. For a box sliding to the right, friction acts to the left.

![[Kyle Kabasares - Newtonian Mechanics - Tire Traction and Sliding Block.png|**Fig. 69** Force directions for a driven tire and a sliding block.]]

##### Rolling friction

Model the rolling resistance as $\mechanical{f}_{\mathrm{r}}=\mechanical{\mu}_{\mathrm{r}}\mechanical{N}$. Look up $\mu_{\mathrm{r}}$ for the surfaces. The sketch shows deformation at the contact, likening the tire to a wheel always rolling uphill.

![[Kyle Kabasares - Newtonian Mechanics - Deformation under a Rolling Tire.png|**Fig. 70** Sketch of the tire and ground deformation at contact.]]

##### Drag

Drag is friction from a fluid, such as air or water, interacting with an object. For large objects moving through air, the notes use $D\approx \tfrac14 Av^2$ with $D$ in newtons, $A$ in square meters, and $v$ in meters per second. In this numerical rule, the factor $\tfrac14$ includes the units of density. The notes also give a linear drag law for a liquid, $\mechanical{D}=\mechanical{b}\mechanical{v}$, with the drag coefficient $b$ depending on the object.

##### Skydiving and terminal velocity

Use the quadratic air drag rule $D=\tfrac14 Av^2$, where $A$ is the person's cross-sectional area. With upward positive,

$$
\sum F_y=D-mg=ma_y,
\qquad
a_y=\frac{D}{m}-g=\frac{Av^2}{4m}-g.
$$

![[Kyle Kabasares - Newtonian Mechanics - Skydiver Drag and Cross Section.png|**Fig. 71** Drag, weight, and cross-sectional area for the falling person.]]

At terminal velocity, upward drag balances downward weight, so the net force and acceleration vanish. The terminal speed in the page's model is $v_{\mathrm{term}}=\sqrt{4mg/A}$, with the same units implicit in the coefficient as on the preceding page.

**)**

1(a–b). A horizontal tension $T$ and a rope force $F_{\mathrm{r}}$ directed $70^\circ$ above the leftward horizontal hold a mass in equilibrium.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal and Angled Rope Equilibrium.png|**Fig. 72** Applied tensions and weight for the hanging object.]]

$$
T-F_{\mathrm{r}}\cos70^\circ=0,
\qquad
F_{\mathrm{r}}\sin70^\circ-mg=0.
$$

The notes record $F_{\mathrm{r}}\approx114\,\unit{N}$ and $T=72.2\,\unit{N}$. Using the written inputs $m=9\,\unit{kg}$ and $70^\circ$ gives $F_{\mathrm{r}}=mg/\sin70^\circ\approx93.9\,\unit{N}$ and $T=F_{\mathrm{r}}\cos70^\circ\approx32.1\,\unit{N}$.

4(a). For a $50\,\unit{kg}$ person falling at $20\,\unit{m/s}$, use quadratic air drag $F_{\mathrm{air}}=bv^2$ with $b=0.3\,\unit{kg/m}$. Take upward as positive.

![[Kyle Kabasares - Newtonian Mechanics - Quadratic Air Drag Force Diagram.png|**Fig. 73** Upward air resistance and downward weight.]]

$$
a_y=\frac{bv^2-mg}{m}
=\frac{(0.3)(20)^2-(50)(9.8)}{50}\,\unit{m/s^2}
=-7.4\,\unit{m/s^2}.
$$

4(b). At terminal speed, $bv^2-mg=0$, so $v_{\mathrm{term}}=\sqrt{mg/b}=40.4\,\unit{m/s}$.

4(c). The net force is zero because the acceleration is zero.

4(d). The sketches show the speed leveling off near $40\,\unit{m/s}$ and the magnitude of the acceleration tending to zero.

![[Kyle Kabasares - Newtonian Mechanics - Approach to Terminal Speed.png|**Fig. 74** Qualitative speed and acceleration sketches for a falling body with drag.]]

4(e). Solve the terminal-speed condition for $b$. The page records $b=mg/v^2=13.6\,\unit{kg/m}$.

5. A block $M$ on an incline is attached over a pulley to a hanging mass $m$. For $M$, the component equations are $T-Mg\sin\theta=Ma$ along the incline and $N-Mg\cos\theta=0$ perpendicular to it. The hanging mass has upward tension and downward weight.

![[Kyle Kabasares - Newtonian Mechanics - Discussion Incline Pulley.png|**Fig. 75** The pulley setup and force diagram for the block on the incline.]]
![[Kyle Kabasares - Newtonian Mechanics - Discussion Hanging Mass.png|**Fig. 76** Forces on the hanging mass.]]

8(a–b). The diagram labels an upward normal force, downward weight, and a downward arrow marked $F_{\mathrm{leg}}$. The calculation uses $\sum F_y=N-mg=ma_y$ and gives $N=mg+ma_y=1{,}157\,\unit{N}$.

![[Kyle Kabasares - Newtonian Mechanics - Discussion Normal Force.png|**Fig. 77** The force sketch for problem 8.]]

9(a). Masses $m_3,m_2,m_1,M$ are connected in a line, with tensions $T_2,T_1,T$ between successive blocks. The notes write $\sum F=(m_3+m_2+m_1+M)a$ and put $T$ in the numerator of the expression for $a$. For the entire four-block system, the numerator is the net external force. The diagram labels $T$ at an internal connection.

![[Kyle Kabasares - Newtonian Mechanics - Four Connected Masses.png|**Fig. 78** Arrangement of the four masses and three connecting tensions.]]

9(b). The equations for $m_1$, $m_2$, and $m_3$ are

$$
T-T_1=m_1a,
\qquad
T_1-T_2=m_2a,
\qquad
T_2=m_3a.
$$

Thus $T_2=m_3a$ and $T_1=m_2a+T_2=(m_2+m_3)a$.

![[Kyle Kabasares - Newtonian Mechanics - Force Diagrams for Three Connected Masses.png|**Fig. 79** Tensions on each of the three trailing masses.]]

##### ) — Drag force

The page also records Euler's identity, $e^{i\pi}=-1$.

$$
\mechanical{D}=\tfrac12 C\mechanical{\rho}\mechanical{A}\mechanical{v}^{\,2}.
$$

$C$ depends on the object and $\rho$ is the fluid density, about $1.2\,\unit{kg/m^3}$ for air. Equating drag to weight gives $v_{\mathrm{term}}=\sqrt{2mg/(C\rho A)}$.

##### Object moving horizontally through a liquid

For linear drag, $\sum F_x=-bv_x=m\,\mathrm{d}v_x/\mathrm{d}t$. Separate the variables and integrate from the initial speed $v_0$:

$$
-\frac{b}{m}\int_0^t\mathrm{d}t'
=\int_{v_0}^{v_x}\frac{\mathrm{d}v}{v},
\qquad
-\frac{bt}{m}=\ln\left\lvert\frac{v_x}{v_0}\right\rvert,
\qquad
\mechanical{v}_x(t)=\mechanical{v}_0e^{-bt/m}.
$$

##### Car coasting uphill

Calculate the acceleration including rolling resistance and drag. Take uphill as positive.

![[Kyle Kabasares - Newtonian Mechanics - Car Coasting Uphill.png|**Fig. 80** The car and the directions of drag, rolling resistance, and weight components.]]

$$
\begin{aligned}
\sum F_y&=N-mg\cos\theta=0,\\
\sum F_x&=-D-f_{\mathrm{r}}-mg\sin\theta=ma.
\end{aligned}
$$

Use the numerical rule $D=\tfrac14 Av^2$ and $f_{\mathrm{r}}=\mu_{\mathrm{r}}N$. The acceleration points downhill:

$$
\mechanical{a}=-\frac{Av^2}{4m}-\mu_{\mathrm{r}}g\cos\theta-g\sin\theta.
$$

##### Circular motion revisited

A ball swings in a vertical circle on a string. If the string is cut at the point shown, the ball initially follows direction B, tangent to the circle.

![[Kyle Kabasares - Newtonian Mechanics - String Cut during Circular Motion.png|**Fig. 81** Candidate directions A–D immediately after the string is cut.]]

The centripetal force is the inward component of the net force. It results from the forces acting on the object and produces centripetal acceleration $a_{\mathrm{c}}$.

$$
\mechanical{F}_{\mathrm{c}}=\mechanical{m}\mechanical{a}_{\mathrm{c}}
=\frac{\mechanical{m}\mechanical{v}^{\,2}}{\mechanical{r}}.
$$

##### Car on a flat circular track

A $1{,}000\,\unit{kg}$ car travels at $20\,\unit{m/s}$ around a flat track of radius $150\,\unit{m}$. Road friction on the tires supplies the centripetal force. Find the minimum $\mu_{\mathrm{s}}$.

![[Kyle Kabasares - Newtonian Mechanics - Normal Force on Flat Circular Track.png|**Fig. 82** Vertical force balance on the flat track.]]

At the threshold of slipping,

$$
\frac{mv^2}{r}=f_{\mathrm{s,max}}=\mu_{\mathrm{s}}N=\mu_{\mathrm{s}}mg,
\qquad
\mu_{\mathrm{s,min}}=\frac{v^2}{gr}.
$$

##### Car over hills and valleys

Find the normal force on a car of mass $m$ and speed $v$. At the top of a hill, the centripetal force is downward, so $N-mg=-F_{\mathrm{c}}$ and the car feels lighter. At the bottom of a valley, $N-mg=F_{\mathrm{c}}$ and the car feels heavier.

![[Kyle Kabasares - Newtonian Mechanics - Hill and Valley Normal Forces.png|**Fig. 83** Normal force and weight at the crest and the bottom of the valley.]]

For a crest with radius of curvature $r$,

$$
N=mg-\frac{mv^2}{r}=m\left(g-\frac{v^2}{r}\right).
$$

At the speed for loss of contact, $N=0$, so $v=\sqrt{gr}$.

##### Ball on a string moving in a horizontal circle

Find the tension and speed given the angle $\theta$ between the string and vertical. The string length is $L$ and the horizontal circle has radius $r=L\sin\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Conical Pendulum.png|**Fig. 84** The string, circle radius, and components of the tension.]]

$$
\sum F_y=T\cos\theta-mg=0,
\qquad
\sum F_x=T\sin\theta=\frac{mv^2}{r}.
$$

$$
\mechanical{T}=\frac{\mechanical{m}\mechanical{g}}{\cos\theta},
\qquad
\lvert\mechanical{v}\rvert=\sqrt{\mechanical{g}\mechanical{r}\tan\theta}.
$$

##### Car on a frictionless banked curve

Find the speed needed to follow the curve without sliding. Keep the axes horizontal and vertical, with $+x$ directed inward. For bank angle $\theta$, $N_x=N\sin\theta$ and $N_y=N\cos\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Frictionless Banked Curve.png|**Fig. 85** Banked track and the normal force resolved into radial and vertical components.]]

$$
\sum F_y=N\cos\theta-mg=0,
\qquad
\sum F_x=N\sin\theta=\frac{mv^2}{r}.
$$

From $N=mg/\cos\theta$, the radial equation gives $g\tan\theta=v^2/r$. The required speed is

$$
\mechanical{v}=\sqrt{\mechanical{g}\mechanical{r}\tan\theta}.
$$

##### ) — Dot product

The dot product, or scalar product, is one way to multiply vectors:

$$
\vec A\cdot\vec B=AB\cos\theta.
$$

$A$ and $B$ denote magnitudes and $\theta$ is the angle between the vectors when placed tail to tail. The geometric interpretation is the magnitude of $\vec A$ times the signed component of $\vec B$ along $\vec A$, which is $B\cos\theta$. The result is a scalar.

![[Kyle Kabasares - Newtonian Mechanics - Dot Product Projection.png|**Fig. 86** Projection of vector B onto the direction of vector A.]]

For $\vec A=3\hat{\imath}+7\hat{\jmath}-5\hat{k}$ and $\vec B=-2\hat{\imath}-3\hat{\jmath}+4\hat{k}$, products of different basis vectors vanish. Each basis vector dotted with itself gives one. The surviving terms give

$$
\vec A\cdot\vec B=(3)(-2)+(7)(-3)+(-5)(4)=-6-21-20=-47.
$$

The magnitudes are $A=\sqrt{3^2+7^2+(-5)^2}=\sqrt{83}$ and $B=\sqrt{(-2)^2+(-3)^2+4^2}=\sqrt{29}$. Find the angle from

$$
\theta=\arccos\left(\frac{\vec A\cdot\vec B}{AB}\right).
$$

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Force | Interaction that changes momentum. |
| $\mechanical{a}$ | $\unit{m/s^2}$ | Acceleration | Rate of change of velocity. |
| $\mechanical{v}$ | $\unit{m/s}$ | Velocity | Rate of change of position. |
| $\mechanical{g}$ | $\unit{m/s^2}$ | Gravitational acceleration | Local acceleration of free fall. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Mass per unit volume. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Proportionality between net force and acceleration. |
| $\mechanical{\vec W}$ | $\unit{N}$ | Weight | Gravitational force on an object. |
| $\mechanical{N}$ | $\unit{N}$ | Normal force | Contact force perpendicular to the supporting surface. |
| $\mechanical{f}_{\mathrm{r}}$ | $\unit{N}$ | Rolling resistance | Effective force opposing rolling. |
| $\mechanical{\mu}_{\mathrm{r}}$ | $1$ | Rolling resistance coefficient | Ratio of rolling resistance to normal force in the model used here. |
| $\mechanical{D}$ | $\unit{N}$ | Drag force magnitude | Fluid resistance at speed $v$ relative to the fluid. |
| $\mechanical{b}$ | $\unit{kg/s}$ | Linear drag coefficient | Proportionality factor in $D=bv$. |
| $\mechanical{b}$ | $\unit{kg/m}$ | Quadratic drag coefficient | Proportionality factor in $D=bv^2$. |
| $C$ | $1$ | Drag coefficient | Dimensionless factor in the quadratic drag law. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Fluid density | Mass per volume of the surrounding fluid. |
| $\mechanical{A}$ | $\unit{m^2}$ | Cross-sectional area | Area presented to the flow in the drag model. |
