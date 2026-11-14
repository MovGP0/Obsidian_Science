---
title: "Kinematics, projectiles, and circular motion problems"
---

> [!TLDR]
> Work from signed displacement and acceleration to one- and two-dimensional trajectories, including projectile and circular motion.

## Worked lecture material

Mario Badal, mbadal@ucmerced.edu. Mastering Physics. Quizzes are multiple choice. The course has two midterms and a final. The grading entries written are homework 10, quizzes 10, labs with no number given, Mid 1 at 22, Mid 2 at 22, Mid 3 at 23, and paper 8.

Force is measured in newtons, $\unit{N}=\unit{kg\,m/s^2}$. Acceleration has units $\unit{m/s^2}$, and velocity has units $\unit{m/s}$. The handwritten list repeats the acceleration unit on the velocity line.

$$
\frac{5.32\times10^4}{3.7\times10^{-4}}=\frac{5.32}{3.7}\times10^8,\qquad
\frac{1.6\times10^{-19}}{5.2\times10^7}=\frac{1.6}{5.2}\times10^{-26},\qquad
(1.6\times10^{-19})(2\times10^5)=3.2\times10^{-14}.
$$

##### Converting units

There are 12 inches in a foot and 5,280 feet in a mile.

$$
1\,\unit{mi}\times\frac{5280\,\unit{ft}}{1\,\unit{mi}}\times\frac{12\,\unit{in}}{1\,\unit{ft}}
=63{,}360\,\unit{in}.
$$

Using $2.54\,\unit{cm}=1\,\unit{in}$,

$$
63{,}360\,\unit{in}\times\frac{2.54\,\unit{cm}}{1\,\unit{in}}
\times\frac{1\,\unit{m}}{100\,\unit{cm}}\times\frac{1\,\unit{km}}{1000\,\unit{m}}
=1.609\,\unit{km}\simeq1.61\,\unit{km}.
$$

##### One-dimensional kinematics

Kinematics describes the motion of objects without considering its cause. Average speed is total distance divided by elapsed time. Average velocity is displacement divided by elapsed time, with $\Delta\mechanical{x}=\mechanical{x}_f-\mechanical{x}_i$ and $\mechanical{v}_{\mathrm{avg}}=\Delta\mechanical{x}/\Delta t$.

For the trip $0\to5\to3\,\unit{km}$ in $0.8\,\unit{h}$, the total distance is $7\,\unit{km}$ and the displacement is $+3\,\unit{km}$. The average speed is $8.75\,\unit{km/h}$ and the average velocity is $+3.75\,\unit{km/h}$. A vector has magnitude and direction. A scalar has magnitude.

##### Instantaneous velocity and acceleration

Instantaneous velocity is the slope of the position graph at a point,

$$
\mechanical{v}=\lim_{\Delta t\to0}\frac{\Delta\mechanical{x}}{\Delta t}
=\frac{d\mechanical{x}}{dt}.
$$

The secant slope gives average velocity from the endpoints. If $\mechanical{x}=bt^2$ for constant $b$, differentiating gives $\mechanical{v}=2bt$.

For a person moving at $2\,\unit{m/s}$ from the origin, the position–time graph is a line with slope $2\,\unit{m/s}$, and the velocity–time graph is horizontal, with slope zero.

![[Kyle Kabasares - Newtonian Mechanics - Constant velocity graphs.png|**Fig. 1** Position and velocity as functions of time for constant velocity.]]

Instantaneous acceleration is

$$
\mechanical{a}=\lim_{\Delta t\to0}\frac{\Delta\mechanical{v}}{\Delta t}
=\frac{d\mechanical{v}}{dt}=\frac{d^2\mechanical{x}}{dt^2}.
$$

For $\mechanical{v}=2bt$, the acceleration is $2b$. Differentiate position to get velocity and then acceleration. Integrate in the reverse direction.

A runner starting from rest with constant acceleration has $\mechanical{x}=\tfrac32t^2$, $\mechanical{v}=3t$, and $\mechanical{a}=3$, with SI units understood.

![[Kyle Kabasares - Newtonian Mechanics - Runner starting from rest.png|**Fig. 2** Parabolic position, linear velocity, and constant acceleration for a runner starting a race.]]

##### Describing motion from graphs

- The first object starts at the origin, moves with constant positive velocity, stops for a while, then returns to the origin at a faster constant negative velocity.
- The second object coasts with positive velocity, switches to a smaller positive velocity, then passes through zero and coasts in the negative direction.
- The third object accelerates in the positive direction, travels at constant velocity, then accelerates in the negative direction to slow down.

![[Kyle Kabasares - Newtonian Mechanics - Reading motion graphs.png|**Fig. 3** One position–time graph and two velocity–time graphs.]]

When velocity and acceleration point in the same direction, the object speeds up. When they point in opposite directions, it slows down.

##### Kinematics equations for constant acceleration

Starting with $\mechanical{a}=d\mechanical{v}/dt$, integrate from initial velocity $\mechanical{v}_0$ at $t=0$ to velocity $\mechanical{v}$ at time $t$.

$$
\int_{v_0}^{v}dv'=\int_0^t a\,dt',\qquad
\mechanical{v}=\mechanical{v}_0+\mechanical{a}t.
$$

Integrate $d\mechanical{x}/dt=\mechanical{v}_0+\mechanical{a}t$ to find

$$
\mechanical{x}_f-\mechanical{x}_0=\mechanical{v}_0t+\tfrac12\mechanical{a}t^2.
$$

For nonzero acceleration, substitute $t=(v-v_0)/a$. Expand $(v-v_0)^2=v^2-2v_0v+v_0^2$ to obtain

$$
\Delta\mechanical{x}=\frac{\mechanical{v}_0(\mechanical{v}-\mechanical{v}_0)}{\mechanical{a}}
+\frac{(\mechanical{v}-\mechanical{v}_0)^2}{2\mechanical{a}}
=\frac{\mechanical{v}^{\,2}-\mechanical{v}_0^2}{2\mechanical{a}}.
$$

The resulting relation is $\mechanical{v}_f^2=\mechanical{v}_0^2+2\mechanical{a}\Delta\mechanical{x}$. The magnitude of gravitational acceleration near Earth's surface is $\mechanical{g}=9.8\,\unit{m/s^2}$.

**4(a).** The student accelerates during the interval from $0$ to $3\,\unit{s}$.

An object starts from rest and reaches $300\,\unit{mi/h}$ over $400\,\unit{m}$. Convert its final velocity using $1\,\unit{mi}=1.609\,\unit{km}$ and $1\,\unit{h}=3600\,\unit{s}$. This gives $300(1.609)(1000)/3600\simeq134\,\unit{m/s}$.

$$
\mechanical{a}=\frac{\mechanical{v}_f^2-\mechanical{v}_0^2}{2\Delta\mechanical{x}}
=\frac{(134\,\unit{m/s})^2}{2(400\,\unit{m})}
\simeq22.4\,\unit{m/s^2}.
$$

From $\mechanical{v}_f=\mechanical{v}_0+\mechanical{a}t$, the time is $t=134/22.4\,\unit{s}\simeq5.98\,\unit{s}\simeq6\,\unit{s}$.

**Example 2.** An object falls from rest through $100\,\unit{m}$. With upward positive, $\Delta\mechanical{y}=-100\,\unit{m}$ and $\mechanical{a}=-9.8\,\unit{m/s^2}$. From $\Delta\mechanical{y}=\tfrac12\mechanical{a}t^2$, $t^2\simeq20.4\,\unit{s^2}$ and $t\simeq4.5\,\unit{s}$. Then $\mechanical{v}_f=\mechanical{v}_0+\mechanical{a}t\simeq-44.1\,\unit{m/s}$ using the rounded time.

![[Kyle Kabasares - Newtonian Mechanics - Drop from a height.png|**Fig. 4** Object dropped from a height of $100\,\unit{m}$.]]

**Example 3.** An object is thrown upward at $15\,\unit{m/s}$. At the top $\mechanical{v}_f=0$, so $\Delta\mechanical{y}=-\mechanical{v}_0^2/(2\mechanical{a})=11.5\,\unit{m}$. Solving $0=15-9.8t$ gives $1.53\,\unit{s}$ to the top. The total time back to the launch height is twice that, $3.06\,\unit{s}$.

**Example 4.** For $\mechanical{a}=3+2t$ with acceleration in $\unit{\mu m/s^2}$ and time in seconds, $\int_0^t(3+2t')\,dt'=3t+t^2$ gives the change in velocity.

**Example 5.** A man rises at $\mechanical{v}_m=4\,\unit{m/s}$ and releases a ball whose initial upward velocity in the calculation is $\mechanical{v}_{0b}=12\,\unit{m/s}$. With the common starting height as the origin, $\mechanical{y}_m=\mechanical{v}_mt$ and $\mechanical{y}_b=\mechanical{v}_{0b}t+\tfrac12\mechanical{a}t^2$, with $\mechanical{a}=-9.8\,\unit{m/s^2}$. Equating the heights gives

$$
t\left(\mechanical{v}_{0b}-\mechanical{v}_m+\tfrac12\mechanical{a}t\right)=0.
$$

Besides the release time $t=0$, the ball meets the man at $t=2(\mechanical{v}_m-\mechanical{v}_{0b})/\mechanical{a}\simeq1.6\,\unit{s}$. In the homework version the ball's speed is given relative to the man.

![[Kyle Kabasares - Newtonian Mechanics - Ball from a rising balloon.png|**Fig. 5** A person in a rising balloon and the initial velocity of the ball.]]

##### Vectors

A vector has magnitude and direction and can be represented by an arrow. To add vectors, put the tail of $\vec B$ at the tip of $\vec A$. The resultant $\vec R$ extends from the original tail to the final tip.

![[Kyle Kabasares - Newtonian Mechanics - Tail to tip vector addition.png|**Fig. 6** Graphical addition of vectors by the tail-to-tip method.]]

**Homework 1 — Kyle Kabasares**

**1.23.** Convert to SI units.

- (a) $5.8\,\unit{ms}\times(1\,\unit{s}/1000\,\unit{ms})=0.0058\,\unit{s}$. The handwritten result labels this time in $\unit{m/s}$.
- (b) $139\,\unit{km/h}\times(1000\,\unit{m}/1\,\unit{km})\times(1\,\unit{h}/3600\,\unit{s})=38.61\,\unit{m/s}$.
- (c) $20.3\,\unit{km}=20{,}300\,\unit{m}$.
- (d) $42\,\unit{\mu m/ms}\times(1\,\unit{m}/10^6\,\unit{\mu m})\times(10^3\,\unit{ms}/1\,\unit{s})=0.042\,\unit{m/s}$.

**1.24.**

- (a) $9.0\,\unit{in}\times(2.54\,\unit{cm}/1\,\unit{in})\times(1\,\unit{m}/100\,\unit{cm})\simeq0.23\,\unit{m}$.
- (b) $81\,\unit{ft/s}\times(1\,\unit{m}/3.28\,\unit{ft})=24.69\,\unit{m/s}$.
- (c) $90\,\unit{mi/h}\times(1609\,\unit{m}/1\,\unit{mi})\times(1\,\unit{h}/3600\,\unit{s})=40.23\,\unit{m/s}$.
- (d) $14\,\unit{in^2}\times(1\,\unit{m^2}/1550\,\unit{in^2})\simeq9\times10^{-3}\,\unit{m^2}$.

**1.54(a).** $10.5\times10^{-3}\,\unit{kg/cm^3}\times(1\,\unit{cm^3}/10^{-6}\,\unit{m^3})=1.05\times10^4\,\unit{kg/m^3}$.

**1.54(b).** $0.81\,\unit{g/cm^3}\times(1\,\unit{kg}/1000\,\unit{g})\times(1\,\unit{cm^3}/10^{-6}\,\unit{m^3})=810\,\unit{kg/m^3}$.

**2.2(a).** The first interval gives $-400\,\unit{yd}/(4\,\unit{min})=-100\,\unit{yd/min}$. The second gives $1000\,\unit{yd}/(5\,\unit{min})=200\,\unit{yd/min}$.

**2.2(b).** The combined displacement is $600\,\unit{yd}$ in $9\,\unit{min}$, giving $66.67\,\unit{yd/min}$.

**2.3(a).** Cover the first $50\,\unit{mi}$ at $39\,\unit{mi/h}$ and the second $50\,\unit{mi}$ at $61\,\unit{mi/h}$. The times are $1.28\,\unit{h}$ and $0.82\,\unit{h}$, giving $100\,\unit{mi}/(2.10\,\unit{h})\simeq47.6\,\unit{mi/h}$.

**2.3(b).** Cover $100\,\unit{mi}$ while spending half the time at each speed. In miles and hours, $39=x/(t/2)$ and $61=(100-x)/(t/2)$. Substituting $x=39t/2$ gives $61=200/t-39$, so $t=2\,\unit{h}$ and the average speed is $50\,\unit{mi/h}$.

**2.12.** The initial position is $1.2\,\unit{m}$. At $t=1\,\unit{s}$, the graph gives displacement $4\,\unit{m}$, position $5.2\,\unit{m}$, velocity $4\,\unit{m/s}$, and acceleration zero. At $t=3\,\unit{s}$, the area gives displacement $(4+4+1+2)\,\unit{m}$, hence position $12.2\,\unit{m}$. The velocity is $2\,\unit{m/s}$ and the slope is $-2\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity area and slope.png|**Fig. 7** Displacement from the area under the velocity graph and acceleration from the slope.]]

**2.16.** The Porsche and Honda start from rest and travel $100\,\unit{m}$ with accelerations $3.5$ and $3.0\,\unit{m/s^2}$, respectively. The handwritten calculation uses $\sqrt{d/(2a)}$, obtaining $3.77\,\unit{s}$ for the Porsche and $4.08\,\unit{s}$ for the Honda before subtracting a one-second head start. Solving the written equation $d=\tfrac12at^2$ gives $\sqrt{2d/a}$, so the corrected times from each start are $7.56\,\unit{s}$ and $8.16\,\unit{s}$.

**2.17(a).** For a drop from rest lasting $4.1\,\unit{s}$, $\Delta\mechanical{y}=\tfrac12(-9.8)(4.1)^2=-82.4\,\unit{m}$. The final speed is $\sqrt{2(-9.8)(-82.4)}=40.2\,\unit{m/s}$ downward.

![[Kyle Kabasares - Newtonian Mechanics - Free fall sign convention.png|**Fig. 8** Upward is positive in the free-fall example.]]

**2.20(a).** Launch upward at $20\,\unit{m/s}$, with the landing point $10\,\unit{m}$ below the launch point. At the apex the velocity is zero, so $\Delta\mechanical{y}=-20^2/[2(-9.8)]\,\unit{m}=20.41\,\unit{m}$. The descent from the apex covers $\Delta\mechanical{y}\simeq-30.4\,\unit{m}$. Using $\mechanical{v}_f^2=2\mechanical{a}\Delta\mechanical{y}$ and choosing the downward sign gives $\mechanical{v}_f=-24.41\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Upward throw into a pit.png|**Fig. 9** Launch, apex, and landing point for an upward throw above a pit.]]

**2.20(b).** From $\mechanical{v}_f=\mechanical{v}_0+\mechanical{a}t$, the time up is $-20/(-9.8)\,\unit{s}=2.04\,\unit{s}$, and the time down is $-24.41/(-9.8)\,\unit{s}\simeq2.50\,\unit{s}$. The notebook totals them as $4.54\,\unit{s}$.

**2.23.** With SI units, $\mechanical{x}(t)=1.00t^3-5.00t+2$. The derivatives are $\mechanical{v}(t)=3t^2-5$ and $\mechanical{a}(t)=6t$. At $t=3\,\unit{s}$, the position is $27-15+2=14\,\unit{m}$, the velocity is $27-5=22\,\unit{m/s}$, and the acceleration is $18\,\unit{m/s^2}$.

**2.24.** Given $\mechanical{v}_x(t)=2t^2$ and $\mechanical{x}_0=2.9\,\unit{m}$, integrate to get $\mechanical{x}(t)=\tfrac23t^3+2.9$. At $1.9\,\unit{s}$, $\mechanical{x}=7.47\,\unit{m}$ and $\mechanical{v}_x=2(1.9)^2=7.22\,\unit{m/s}$. Since $\mechanical{a}_x=4t$, the acceleration then is $7.6\,\unit{m/s^2}$.

**2.31.** For $\mechanical{x}(t)=2t^3-9t^2+12$, velocity is $\mechanical{v}=6t^2-18t=6t(t-3)$. It vanishes at $t=0$ and $t=3\,\unit{s}$. The position at $3\,\unit{s}$ is $54-81+12=-15\,\unit{m}$. The acceleration is $\mechanical{a}=12t-18$, giving $-18\,\unit{m/s^2}$ at $0$ and $+18\,\unit{m/s^2}$ at $3\,\unit{s}$.

**2.42.** As a Newtonian extrapolation, start from rest and set $\mechanical{v}_f=3.0\times10^8\,\unit{m/s}$ with $\mechanical{a}=9.8\,\unit{m/s^2}$. The equation $\mechanical{v}_f=\mechanical{a}t$ gives $t\simeq3.0612\times10^7\,\unit{s}=354.3$ days. The distance formula $\Delta\mechanical{x}=\tfrac12\mechanical{a}t^2$ gives $4.6\times10^{15}\,\unit{m}$.

**2.42(c).** Using 365 days per year gives $31{,}536{,}000\,\unit{s}$ in a year. Light travels $(3.0\times10^8\,\unit{m/s})(31{,}536{,}000\,\unit{s})=9.46\times10^{15}\,\unit{m}$ in that time. The Newtonian distance from part (b) is $4.59\times10^{15}/(9.46\times10^{15})\simeq0.48$ light-years.

**2.43.** At $20\,\unit{m/s}$ the object travels $10\,\unit{m}$ in the $0.5\,\unit{s}$ reaction interval, leaving $110-10=100\,\unit{m}$ to stop. With $\mechanical{v}_f=0$, $\mechanical{a}=-\mechanical{v}_0^2/(2d)=-2\,\unit{m/s^2}$. Braking takes $t=-\mechanical{v}_0/\mechanical{a}=10\,\unit{s}$.

**2.49(a).** A rocket starting from rest accelerates at $34\,\unit{m/s^2}$ for $35\,\unit{s}$. The powered part covers $\tfrac12(34)(35)^2=20{,}825\,\unit{m}$ and ends at $(34)(35)=1190\,\unit{m/s}$. Coasting to zero vertical speed under gravity adds about $1190^2/[2(9.8)]\simeq72{,}250\,\unit{m}$, so the total height is about $93\,\unit{km}$.

![[Kyle Kabasares - Newtonian Mechanics - Rocket height sketch.png|**Fig. 10** Margin sketch for the rocket's ascent and the end of the powered phase.]]

**2.49(b).** From engine cutoff to the maximum altitude, the rocket slows from $1190\,\unit{m/s}$ to zero at $-9.8\,\unit{m/s^2}$. This takes $121.4\,\unit{s}$. From the apex it falls $93{,}075\,\unit{m}$ from rest, taking $\sqrt{2(-93{,}075)/(-9.8)}\,\unit{s}=137.8\,\unit{s}$. Including the initial $35\,\unit{s}$ of powered motion, the flight takes $294.2\,\unit{s}$.

**2.51.** An object falls from rest through $5.5\,\unit{m}$ to the surface. Its entry speed is $\sqrt{2(9.8)(5.5)}\simeq10.4\,\unit{m/s}$ downward and the fall takes $1.06\,\unit{s}$. In the second part the calculation assumes no acceleration and uses $2.54\,\unit{s}$ at $10.4\,\unit{m/s}$ to obtain a depth of $26.4\,\unit{m}$. The sketch also has a time label that appears to read $1.6\,\unit{s}$.

![[Kyle Kabasares - Newtonian Mechanics - Fall into water.png|**Fig. 11** Drop to a water surface and continued motion to an unknown depth.]]

**2.65.** Tina starts from rest with $\mechanical{a}=2.7\,\unit{m/s^2}$, so $\mechanical{v}=2.7t$ and $\mechanical{x}=1.35t^2$ in SI units. The other object has $\mechanical{x}=24t$. For the meeting after $t=0$, $1.35t^2=24t$ gives $t=17.78\,\unit{s}$ and a position of $426.67\,\unit{m}$. Tina's velocity then is $48\,\unit{m/s}$.

**3.3.** The vector $\vec E$ points into the second quadrant. With $\theta$ measured from negative $x$ and $\phi$ from positive $y$,

$$
E_x=-E\cos\theta=-E\sin\phi,\qquad
E_y=E\sin\theta=E\cos\phi.
$$

The last box in the source repeats $x$ where the vertical projection gives $y$.

![[Kyle Kabasares - Newtonian Mechanics - Vector in the second quadrant.png|**Fig. 12** Components of a second-quadrant vector using either reference angle.]]

**3.4.** A velocity points $36^\circ$ below the positive $x$-axis and has downward component of magnitude $35\,\unit{m/s}$. Its magnitude is $35/\sin36^\circ\simeq59.5\,\unit{m/s}$. Its horizontal component is $59.5\cos36^\circ=48.13\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity component triangle.png|**Fig. 13** A velocity at $36^\circ$ below the horizontal with downward component of magnitude $35\,\unit{m/s}$.]]

**3.9.** The magnetic field is $\magnetic{\vec B}=(2.5\hat{\imath}-2.0\hat{\jmath})\,\unit{T}$. Its magnitude is $\sqrt{2.5^2+(-2.0)^2}\,\unit{T}=3.2\,\unit{T}$. From $\tan\theta=-2.0/2.5$ and the fourth-quadrant sketch, the direction is about $39^\circ$ below positive $x$.

![[Kyle Kabasares - Newtonian Mechanics - Fourth quadrant field vector.png|**Fig. 14** Field vector with components $2.5\,\unit{T}$ and $-2.0\,\unit{T}$.]]

**3.20.** Let $\vec E=3\hat{\imath}+3\hat{\jmath}$ and $\vec F=\hat{\imath}-\hat{\jmath}$.

- (a) $\lvert\vec E\rvert=\sqrt{3^2+3^2}\simeq4.2$.
- (b) $\lvert\vec F\rvert=\sqrt{1^2+(-1)^2}=\sqrt2$. Its $y$-component is negative from the given vector, though the magnitude sketch uses a positive leg.
- (c) $\vec E+\vec F=4\hat{\imath}+2\hat{\jmath}$, with magnitude $\sqrt{20}$.
- (e) $-\vec E-2\vec F=-5\hat{\imath}-\hat{\jmath}$, with magnitude $\sqrt{26}$.

![[Kyle Kabasares - Newtonian Mechanics - Vector arithmetic sketches.png|**Fig. 15** Component sketches for vectors and their combinations in problem 3.20.]]

**3.23.** The diagram shows $\vec A$ pointing along positive $x$ with component 4, and $\vec B$ with components $(-5.3,2)$. The horizontal sum is $4+(-5.3)=-1.30$. The notebook obtains

$$
\lvert\vec B\rvert=\sqrt{(-5.3)^2+2^2}\simeq5.6,\qquad
\theta=\arctan(2/5.3)\simeq20.67^\circ
$$

above the negative $x$-axis.

![[Kyle Kabasares - Newtonian Mechanics - Vector component solution.png|**Fig. 16** Vector $\vec B$ lies above the negative $x$-axis and $\vec A$ points along positive $x$.]]

**Vectors**

Vectors have magnitude (length) and direction. They can be moved when adding or subtracting as long as both properties stay the same.

For tail-to-tip addition, place the tail of $\vec B$ at the tip of $\vec A$. For subtraction, use $\vec A-\vec B=\vec A+(-\vec B)$, reversing $\vec B$ first. In the parallelogram method the vectors start at a common tail and the diagonal is the resultant.

![[Kyle Kabasares - Newtonian Mechanics - Vector addition and subtraction methods.png|**Fig. 17** Tail-to-tip addition and subtraction and the parallelogram construction.]]

Find $\vec A+\vec B$ for $A=10$ at $60^\circ$ and $B=8$ at $45^\circ$, both measured above positive $x$.

![[Kyle Kabasares - Newtonian Mechanics - Vectors and trigonometry example.png|**Fig. 18** The two vectors for the component addition example.]]

Resolve $\vec A$ and $\vec B$ into components using cosine for the horizontal legs and sine for the vertical legs. Add like components to obtain the resultant.

$$
\begin{aligned}
R_x&=A\cos\theta+B\cos\phi=10(1/2)+8/\sqrt2\simeq10.66,\\
R_y&=A\sin\theta+B\sin\phi=10(\sqrt3/2)+8/\sqrt2\simeq14.32.
\end{aligned}
$$

![[Kyle Kabasares - Newtonian Mechanics - Resolving and combining vector components.png|**Fig. 19** Component triangles and resultant with horizontal component 10.66 and vertical component 14.32.]]

The magnitude is $R=\sqrt{10.66^2+14.32^2}\simeq\sqrt{318.6}=17.85$. The direction is $\alpha=\arctan(14.32/10.66)=53.3^\circ$ above positive $x$.

##### Vector notation and two-dimensional kinematics

Write $\vec A=A_x\hat{\imath}+A_y\hat{\jmath}$. The unit vectors $\hat{\imath}$ and $\hat{\jmath}$ have length one and point along the positive $x$- and $y$-axes. In the preceding example,

$$
\vec A=5\hat{\imath}+8.66\hat{\jmath},\qquad
\vec B=5.66\hat{\imath}+5.66\hat{\jmath},\qquad
\vec R=10.66\hat{\imath}+14.32\hat{\jmath}.
$$

The magnitude of $\vec R$ is $\sqrt{10.66^2+14.32^2}$. Apply the same kinematics equations independently to horizontal and vertical motion. Neglecting air resistance, gravity acts vertically and the horizontal velocity is constant, so $\Delta\mechanical{x}=\mechanical{v}_{0x}t$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile launch components.png|**Fig. 20** Horizontal and vertical components of an angled launch.]]

##### Horizontal launch

A projectile leaves a $20\,\unit{m}$ high platform horizontally at $10\,\unit{m/s}$. Horizontally $\mechanical{a}_x=0$ and $\mechanical{v}_x=10\,\unit{m/s}$. Vertically $\mechanical{v}_{0y}=0$, $\mechanical{a}_y=-9.8\,\unit{m/s^2}$, and $\Delta\mechanical{y}=-20\,\unit{m}$. The final vertical velocity is $-\sqrt{2(-9.8)(-20)}\,\unit{m/s}=-19.8\,\unit{m/s}$. The total impact speed is $\sqrt{10^2+19.8^2}\,\unit{m/s}=22.2\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal launch from a platform.png|**Fig. 21** Horizontal launch from a $20\,\unit{m}$ platform.]]

For the horizontal launch, $-19.8=-9.8t$ gives $t=2.02\,\unit{s}$. Its range is $(10\,\unit{m/s})(2.02\,\unit{s})=20.2\,\unit{m}$.

A thrown ball follows a parabola under uniform gravity. If it returns to its starting height, the path is symmetric and the initial and final vertical velocity components have equal magnitude and opposite signs.

![[Kyle Kabasares - Newtonian Mechanics - Symmetric parabolic trajectory.png|**Fig. 22** Projectile velocity components along a symmetric parabolic trajectory.]]

**Example 1.** Launch at $20\,\unit{m/s}$ and $30^\circ$ above horizontal. The components are $\mechanical{v}_{0x}=20\cos30^\circ=17.3\,\unit{m/s}$ and $\mechanical{v}_{0y}=20\sin30^\circ=10\,\unit{m/s}$. Horizontal acceleration is zero, and vertical acceleration is $-9.8\,\unit{m/s^2}$. At the apex the vertical velocity is zero, so the height is $-10^2/[2(-9.8)]=5.1\,\unit{m}$ and the time up is $10/9.8=1.02\,\unit{s}$. The horizontal distance to the apex is $17.6\,\unit{m}$ and the range at the launch height is $35.2\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Thirty degree launch.png|**Fig. 23** Component triangles for the $30^\circ$ launch.]]

##### Projectile reaching a window

Launch at $20\,\unit{m/s}$ and $60^\circ$ above the horizontal. The window is $5\,\unit{m}$ above the launch point. The velocity components are $\mechanical{v}_{0x}=20\cos60^\circ=10\,\unit{m/s}$ and $\mechanical{v}_{0y}=20\sin60^\circ=17.3\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile aimed at a window.png|**Fig. 24** The window is $5\,\unit{m}$ above the point of launch.]]

With $\mechanical{a}_x=0$, $t=\Delta x/v_{0x}$. Substituting into the vertical displacement equation gives

$$
\Delta y=\tan\theta\,\Delta x+
\frac{a_y}{2v_0^2\cos^2\theta}(\Delta x)^2.
$$

For $a_y=-9.8\,\unit{m/s^2}$, the numerical equation is $0=-5+\sqrt3\,\Delta x-0.049(\Delta x)^2$ in SI units. Apply the quadratic formula $(-b\pm\sqrt{b^2-4ac})/(2a)$. The two horizontal distances are approximately $3.1\,\unit{m}$ on the ascent and $32.1\,\unit{m}$ on the descent.

For the equal-height projectile sketch, the flight time is $t=\Delta x/v_{0x}$ using the constant horizontal component.

![[Kyle Kabasares - Newtonian Mechanics - Equal height projectile range.png|**Fig. 25** Horizontal range and velocity components at the reference height.]]

##### General two-dimensional kinematics

The position vector $\mechanical{\vec r}(t)$ locates the car on the track at time $t$. The velocity $\mechanical{\vec v}(t)$ is tangent to the path.

![[Kyle Kabasares - Newtonian Mechanics - Position and tangent velocity.png|**Fig. 26** Position and tangent velocity for a car on a curved track.]]

In SI units, let $\mechanical{\vec r}=(3t^2-4t^3)\hat{\imath}+(2t^2-7t^3)\hat{\jmath}$. Differentiating gives $\mechanical{\vec v}=(6t-12t^2)\hat{\imath}+(4t-21t^2)\hat{\jmath}$. At $t=1\,\unit{s}$ this is $(-6\hat{\imath}-17\hat{\jmath})\,\unit{m/s}$. Its direction is $\arctan(17/6)\simeq70.5^\circ$ below the negative $x$-axis.

![[Kyle Kabasares - Newtonian Mechanics - Tangent velocity angle.png|**Fig. 27** Velocity components at one second and the angle measured from negative $x$.]]

##### Circular motion

Acceleration is a vector, with magnitude and direction. The average acceleration is

$$
\mechanical{\vec a}_{\mathrm{avg}}=\frac{\Delta\mechanical{\vec v}}{\Delta t}
=\frac{\mechanical{\vec v}_f-\mechanical{\vec v}_i}{\Delta t}.
$$

Even at constant speed, velocity changes direction around a circle. The difference is $\Delta\mechanical{\vec v}=\mechanical{\vec v}_f+(-\mechanical{\vec v}_i)$. In the instantaneous limit the change points toward the center, so the acceleration is centripetal, meaning center-seeking.

![[Kyle Kabasares - Newtonian Mechanics - Circular velocity difference.png|**Fig. 28** Tangential initial and final velocities and the vectors used to form their difference.]]

**Homework 2**

**3.34.** A projectile launched at $100\,\unit{m/s}$ and $36^\circ$ has vertical component $100\sin36^\circ$ and horizontal component $100\cos36^\circ=80.9\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Homework launch components.png|**Fig. 29** Launch diagram and components for the $36^\circ$ projectile.]]

**4.8.** In SI units, $\mechanical{x}=\tfrac12t^3-2t^2$ and $\mechanical{y}=\tfrac12t^2-2t$. The derivatives are $\mechanical{v}_x=\tfrac32t^2-4t$ and $\mechanical{v}_y=t-2$.

- At $t=0$ the speed is $2\,\unit{m/s}$ and the direction is $-90^\circ$ from positive $x$.
- At $t=3\,\unit{s}$, $\mechanical{\vec v}=(\tfrac32\hat{\imath}+\hat{\jmath})\,\unit{m/s}$. The speed is $\sqrt{(3/2)^2+1}\,\unit{m/s}\simeq1.8\,\unit{m/s}$ and the direction is $\arctan(2/3)\simeq33.6^\circ$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity direction at three seconds.png|**Fig. 30** Velocity components and the angle from positive $x$ at three seconds.]]

**4.12.** A projectile leaves a ledge horizontally at $25\,\unit{m/s}$ and lands $55\,\unit{m}$ away. Horizontal motion gives $t=55/25=2.2\,\unit{s}$. With the ground at $y_f=0$, $v_{0y}=0$, and $a_y=-9.8\,\unit{m/s^2}$, the launch height is $y_0=-\tfrac12a_yt^2=23.7\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Finding a ledge height.png|**Fig. 31** Horizontal launch and landing distance used to infer the ledge height.]]

**4.13.** The sketch shows horizontal motion over $46\,\unit{m}$ with a drop of $0.016\,\unit{m}$. From $v_{fy}^2=2a_y(y_f-y_0)$ with $v_{0y}=0$, the final vertical component is $-0.56\,\unit{m/s}$. Then $t=v_{fy}/a_y\simeq0.057\,\unit{s}$ and $v_x=46/0.057\simeq807\,\unit{m/s}$ using the rounded time.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal motion with a small drop.png|**Fig. 32** Schematic of the $46\,\unit{m}$ horizontal displacement in problem 4.13.]]

**4.14.** An aircraft travels horizontally at $150\,\unit{m/s}$ at altitude $180\,\unit{m}$. An object released from it has zero initial vertical velocity. From $0=y_0+\tfrac12a_yt^2$ with $a_y=-9.8\,\unit{m/s^2}$, the fall takes $\sqrt{-2(180)/(-9.8)}\,\unit{s}=6.06\,\unit{s}$. The object moves $(150)(6.06)\,\unit{m}=909\,\unit{m}$ horizontally.

![[Kyle Kabasares - Newtonian Mechanics - Drop from an aircraft.png|**Fig. 33** Aircraft altitude, horizontal speed, and horizontal displacement to the landing point.]]

**4.38.** For a projectile returning to its launch height, $\mechanical{R}=\mechanical{v}_0^2\sin(2\theta)/\mechanical{g}$. The maximum occurs at $\sin(2\theta)=1$, so $\theta=45^\circ$. Half the maximum requires $\sin(2\theta)=1/2$, giving $\theta=15^\circ$ or $75^\circ$. For $\mechanical{v}_0=10\,\unit{m/s}$, the ranges at $45^\circ$ and $15^\circ$ are about $10.2\,\unit{m}$ and $5.1\,\unit{m}$, respectively.

**4.40(a).** The projectile returns to the launch height after traveling $8.7\,\unit{m}$, with launch angle $27^\circ$. The constant-acceleration equations are $v_f=v_0+at$, $v_f^2=v_0^2+2a(x_f-x_0)$, and $x_f=x_0+v_0t+\tfrac12at^2$. Use the horizontal result $t=8.7/(v_0\cos27^\circ)$ and the vertical result $t=-2v_0\sin27^\circ/a_y$. With $a_y=-9.8\,\unit{m/s^2}$ this gives $v_0^2\simeq105.4\,\unit{m^2/s^2}$ and $v_0\simeq10.3\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Launch speed from range.png|**Fig. 34** A projectile launched at $27^\circ$ with a range of $8.7\,\unit{m}$.]]

**4.40(b).** The vertical launch component is $4.7\,\unit{m/s}$. The apex occurs after about $0.5\,\unit{s}$, when $v_y=0$. The height from $y_f=y_0+v_{0y}t+\tfrac12a_yt^2$ is about $1.125\,\unit{m}$ using the written rounding.

**4.44.** A projectile leaves at $30\,\unit{m/s}$ and $60^\circ$ toward a structure of height $h$. The initial components are $v_{0x}=30\cos60^\circ=15\,\unit{m/s}$ and $v_{0y}=30\sin60^\circ\simeq26\,\unit{m/s}$. The table gives $t=3.6\,\unit{s}$ and $a_y=-9.8\,\unit{m/s^2}$, with $y_0=0$ and $y_f$ to find.

![[Kyle Kabasares - Newtonian Mechanics - Projectile and structure height.png|**Fig. 35** Angled launch and the unknown height in problem 4.44.]]

##### Tangential and centripetal acceleration

The total acceleration is $\mechanical{\vec a}=\mechanical{\vec a}_t+\mechanical{\vec a}_c$. The tangential component comes from the change in speed, $a_t=(v_f-v_i)/\Delta t$ over an interval of uniform tangential acceleration. The centripetal component comes from the change in velocity direction around the circle, with magnitude $a_c=v^2/r$. The components are perpendicular, so $a=\sqrt{a_t^2+a_c^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Tangential and centripetal components.png|**Fig. 36** Tangential and inward acceleration components on a circle.]]

**Example 1.** A car on a curve of radius $150\,\unit{m}$ initially travels at $20\,\unit{m/s}$, giving $a_c=20^2/150=2.67\,\unit{m/s^2}$. It speeds up uniformly to $30\,\unit{m/s}$ in $2\,\unit{s}$, so $a_t=(30-20)/2=5\,\unit{m/s^2}$. At the beginning the total acceleration magnitude is $\sqrt{2.67^2+5^2}=5.67\,\unit{m/s^2}$. At the end $a_c=30^2/150=6\,\unit{m/s^2}$ and the total is $\sqrt{6^2+5^2}=\sqrt{61}\simeq7.8\,\unit{m/s^2}$.

## Source

Kyle Kabasares, *Newtonian Mechanics (Physics 8, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{a}$ | $\unit{m/s^2}$ | Acceleration | Rate of change of velocity. |
| $\mechanical{v}$ | $\unit{m/s}$ | Velocity | Rate of change of position. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Displacement | Final position minus initial position. |
| $\Delta t$ | $\unit{s}$ | Elapsed time | Duration of the motion being measured. |
| $\mechanical{g}$ | $\unit{m/s^2}$ | Gravitational acceleration | Local acceleration of free fall. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | Vector used in the component exercise. |
| $\mechanical{R}$ | $\unit{m^3/s}$ | Volume flow rate | Volume passing through a cross section per unit time. |
| $\mechanical{a}_t$ | $\unit{m/s^2}$ | Tangential acceleration | Component along the path that changes speed. |
| $\mechanical{a}_c$ | $\unit{m/s^2}$ | Centripetal acceleration | Inward component that changes the direction of velocity. |
| $\mechanical{f}_{\mathrm{s}},\mechanical{f}_{\mathrm{k}}$ | $\unit{N}$ | Static and kinetic friction | Contact force parallel to the surfaces. |
| $\mechanical{\mu}_{\mathrm{s}},\mechanical{\mu}_{\mathrm{k}}$ | $1$ | Friction coefficients | Material-dependent ratios for maximum static and kinetic friction. |
| $\energy{U}_{\mathrm{s}}$ | $\unit{J}$ | Elastic potential energy | Energy stored in the spring at displacement $x$. |
| $\mechanical{\vec r}_{\mathrm{CM}}$ | $\unit{m}$ | Center-of-mass position | Mass-weighted average position of the system. |
| $\mechanical{\lambda}$ | $\unit{kg/m}$ | Linear mass density | Mass per unit length. |
| $\mechanical{\sigma}$ | $\unit{kg/m^2}$ | Surface mass density | Mass per unit area. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | Spatial phase change per unit distance, $2\pi/\lambda$. |
| $\mechanical{P}$ | $\unit{Pa}$ | Pressure | Normal force per unit area. |
