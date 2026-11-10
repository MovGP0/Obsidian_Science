---
title: "Newtonian Mechanics (Physics 8, UC Merced 2013)"
---

> [!TLDR]
> These Physics 8 notes develop vector kinematics, Newton’s laws, work and energy, and momentum through worked examples. Later lectures cover rigid-body rotation, equilibrium, oscillations, waves, buoyancy, and fluid flow.

Source notes by Kyle Kabasares. [[Newtonian Mechanics (Physics 8, UC Merced 2013).pdf|Original PDF]].

Transcribed PDF pages 1–127 of 127.

### PDF page 1

#### August 30, 2013 — Course information

Mario Badal, mbadal@ucmerced.edu. Mastering Physics. Quizzes are multiple choice. The course has two midterms and a final. The grading entries written are homework 10, quizzes 10, labs with no number given, Mid 1 at 22, Mid 2 at 22, Mid 3 at 23, and paper 8.

Force is measured in newtons, $\unit{N}=\unit{kg\,m/s^2}$. Acceleration has units $\unit{m/s^2}$, and velocity has units $\unit{m/s}$. The handwritten list repeats the acceleration unit on the velocity line.

$$
\frac{5.32\times10^4}{3.7\times10^{-4}}=\frac{5.32}{3.7}\times10^8,\qquad
\frac{1.6\times10^{-19}}{5.2\times10^7}=\frac{1.6}{5.2}\times10^{-26},\qquad
(1.6\times10^{-19})(2\times10^5)=3.2\times10^{-14}.
$$

### PDF page 2

#### Converting units

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

#### One-dimensional kinematics

Kinematics describes the motion of objects without considering its cause. Average speed is total distance divided by elapsed time. Average velocity is displacement divided by elapsed time, with $\Delta\mechanical{x}=\mechanical{x}_f-\mechanical{x}_i$ and $\mechanical{v}_{\mathrm{avg}}=\Delta\mechanical{x}/\Delta t$.

For the trip $0\to5\to3\,\unit{km}$ in $0.8\,\unit{h}$, the total distance is $7\,\unit{km}$ and the displacement is $+3\,\unit{km}$. The average speed is $8.75\,\unit{km/h}$ and the average velocity is $+3.75\,\unit{km/h}$. A vector has magnitude and direction. A scalar has magnitude.

### PDF page 3

#### September 4, 2013 — Instantaneous velocity and acceleration

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

### PDF page 4

A runner starting from rest with constant acceleration has $\mechanical{x}=\tfrac32t^2$, $\mechanical{v}=3t$, and $\mechanical{a}=3$, with SI units understood.

![[Kyle Kabasares - Newtonian Mechanics - Runner starting from rest.png|**Fig. 2** Parabolic position, linear velocity, and constant acceleration for a runner starting a race.]]

#### Describing motion from graphs

- The first object starts at the origin, moves with constant positive velocity, stops for a while, then returns to the origin at a faster constant negative velocity.
- The second object coasts with positive velocity, switches to a smaller positive velocity, then passes through zero and coasts in the negative direction.
- The third object accelerates in the positive direction, travels at constant velocity, then accelerates in the negative direction to slow down.

![[Kyle Kabasares - Newtonian Mechanics - Reading motion graphs.png|**Fig. 3** One position–time graph and two velocity–time graphs.]]

When velocity and acceleration point in the same direction, the object speeds up. When they point in opposite directions, it slows down.

### PDF page 5

#### Kinematics equations for constant acceleration

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

### PDF page 6

**4(a).** The student accelerates during the interval from $0$ to $3\,\unit{s}$.

#### Lecture, September 6, 2013 — Example 1

An object starts from rest and reaches $300\,\unit{mi/h}$ over $400\,\unit{m}$. Convert its final velocity using $1\,\unit{mi}=1.609\,\unit{km}$ and $1\,\unit{h}=3600\,\unit{s}$. This gives $300(1.609)(1000)/3600\simeq134\,\unit{m/s}$.

$$
\mechanical{a}=\frac{\mechanical{v}_f^2-\mechanical{v}_0^2}{2\Delta\mechanical{x}}
=\frac{(134\,\unit{m/s})^2}{2(400\,\unit{m})}
\simeq22.4\,\unit{m/s^2}.
$$

From $\mechanical{v}_f=\mechanical{v}_0+\mechanical{a}t$, the time is $t=134/22.4\,\unit{s}\simeq5.98\,\unit{s}\simeq6\,\unit{s}$.

### PDF page 7

**Example 2.** An object falls from rest through $100\,\unit{m}$. With upward positive, $\Delta\mechanical{y}=-100\,\unit{m}$ and $\mechanical{a}=-9.8\,\unit{m/s^2}$. From $\Delta\mechanical{y}=\tfrac12\mechanical{a}t^2$, $t^2\simeq20.4\,\unit{s^2}$ and $t\simeq4.5\,\unit{s}$. Then $\mechanical{v}_f=\mechanical{v}_0+\mechanical{a}t\simeq-44.1\,\unit{m/s}$ using the rounded time.

![[Kyle Kabasares - Newtonian Mechanics - Drop from a height.png|**Fig. 4** Object dropped from a height of $100\,\unit{m}$.]]

**Example 3.** An object is thrown upward at $15\,\unit{m/s}$. At the top $\mechanical{v}_f=0$, so $\Delta\mechanical{y}=-\mechanical{v}_0^2/(2\mechanical{a})=11.5\,\unit{m}$. Solving $0=15-9.8t$ gives $1.53\,\unit{s}$ to the top. The total time back to the launch height is twice that, $3.06\,\unit{s}$.

**Example 4.** For $\mechanical{a}=3+2t$ with acceleration in $\unit{\mu m/s^2}$ and time in seconds, $\int_0^t(3+2t')\,dt'=3t+t^2$ gives the change in velocity.

### PDF page 8

**Example 5.** A man rises at $\mechanical{v}_m=4\,\unit{m/s}$ and releases a ball whose initial upward velocity in the calculation is $\mechanical{v}_{0b}=12\,\unit{m/s}$. With the common starting height as the origin, $\mechanical{y}_m=\mechanical{v}_mt$ and $\mechanical{y}_b=\mechanical{v}_{0b}t+\tfrac12\mechanical{a}t^2$, with $\mechanical{a}=-9.8\,\unit{m/s^2}$. Equating the heights gives

$$
t\left(\mechanical{v}_{0b}-\mechanical{v}_m+\tfrac12\mechanical{a}t\right)=0.
$$

Besides the release time $t=0$, the ball meets the man at $t=2(\mechanical{v}_m-\mechanical{v}_{0b})/\mechanical{a}\simeq1.6\,\unit{s}$. In the homework version the ball's speed is given relative to the man.

![[Kyle Kabasares - Newtonian Mechanics - Ball from a rising balloon.png|**Fig. 5** A person in a rising balloon and the initial velocity of the ball.]]

#### Vectors

A vector has magnitude and direction and can be represented by an arrow. To add vectors, put the tail of $\vec B$ at the tip of $\vec A$. The resultant $\vec R$ extends from the original tail to the final tip.

![[Kyle Kabasares - Newtonian Mechanics - Tail to tip vector addition.png|**Fig. 6** Graphical addition of vectors by the tail-to-tip method.]]

### PDF page 9

#### Homework 1 — Kyle Kabasares

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

### PDF page 10

**1.54(b).** $0.81\,\unit{g/cm^3}\times(1\,\unit{kg}/1000\,\unit{g})\times(1\,\unit{cm^3}/10^{-6}\,\unit{m^3})=810\,\unit{kg/m^3}$.

**2.2(a).** The first interval gives $-400\,\unit{yd}/(4\,\unit{min})=-100\,\unit{yd/min}$. The second gives $1000\,\unit{yd}/(5\,\unit{min})=200\,\unit{yd/min}$.

**2.2(b).** The combined displacement is $600\,\unit{yd}$ in $9\,\unit{min}$, giving $66.67\,\unit{yd/min}$.

**2.3(a).** Cover the first $50\,\unit{mi}$ at $39\,\unit{mi/h}$ and the second $50\,\unit{mi}$ at $61\,\unit{mi/h}$. The times are $1.28\,\unit{h}$ and $0.82\,\unit{h}$, giving $100\,\unit{mi}/(2.10\,\unit{h})\simeq47.6\,\unit{mi/h}$.

**2.3(b).** Cover $100\,\unit{mi}$ while spending half the time at each speed. In miles and hours, $39=x/(t/2)$ and $61=(100-x)/(t/2)$. Substituting $x=39t/2$ gives $61=200/t-39$, so $t=2\,\unit{h}$ and the average speed is $50\,\unit{mi/h}$.

### PDF page 11

**2.12.** The initial position is $1.2\,\unit{m}$. At $t=1\,\unit{s}$, the graph gives displacement $4\,\unit{m}$, position $5.2\,\unit{m}$, velocity $4\,\unit{m/s}$, and acceleration zero. At $t=3\,\unit{s}$, the area gives displacement $(4+4+1+2)\,\unit{m}$, hence position $12.2\,\unit{m}$. The velocity is $2\,\unit{m/s}$ and the slope is $-2\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity area and slope.png|**Fig. 7** Displacement from the area under the velocity graph and acceleration from the slope.]]

**2.16.** The Porsche and Honda start from rest and travel $100\,\unit{m}$ with accelerations $3.5$ and $3.0\,\unit{m/s^2}$, respectively. The handwritten calculation uses $\sqrt{d/(2a)}$, obtaining $3.77\,\unit{s}$ for the Porsche and $4.08\,\unit{s}$ for the Honda before subtracting a one-second head start. Solving the written equation $d=\tfrac12at^2$ gives $\sqrt{2d/a}$, so the corrected times from each start are $7.56\,\unit{s}$ and $8.16\,\unit{s}$.

**2.17(a).** For a drop from rest lasting $4.1\,\unit{s}$, $\Delta\mechanical{y}=\tfrac12(-9.8)(4.1)^2=-82.4\,\unit{m}$. The final speed is $\sqrt{2(-9.8)(-82.4)}=40.2\,\unit{m/s}$ downward.

![[Kyle Kabasares - Newtonian Mechanics - Free fall sign convention.png|**Fig. 8** Upward is positive in the free-fall example.]]

### PDF page 12

**2.20(a).** Launch upward at $20\,\unit{m/s}$, with the landing point $10\,\unit{m}$ below the launch point. At the apex the velocity is zero, so $\Delta\mechanical{y}=-20^2/[2(-9.8)]\,\unit{m}=20.41\,\unit{m}$. The descent from the apex covers $\Delta\mechanical{y}\simeq-30.4\,\unit{m}$. Using $\mechanical{v}_f^2=2\mechanical{a}\Delta\mechanical{y}$ and choosing the downward sign gives $\mechanical{v}_f=-24.41\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Upward throw into a pit.png|**Fig. 9** Launch, apex, and landing point for an upward throw above a pit.]]

**2.20(b).** From $\mechanical{v}_f=\mechanical{v}_0+\mechanical{a}t$, the time up is $-20/(-9.8)\,\unit{s}=2.04\,\unit{s}$, and the time down is $-24.41/(-9.8)\,\unit{s}\simeq2.50\,\unit{s}$. The notebook totals them as $4.54\,\unit{s}$.

**2.23.** With SI units, $\mechanical{x}(t)=1.00t^3-5.00t+2$. The derivatives are $\mechanical{v}(t)=3t^2-5$ and $\mechanical{a}(t)=6t$. At $t=3\,\unit{s}$, the position is $27-15+2=14\,\unit{m}$, the velocity is $27-5=22\,\unit{m/s}$, and the acceleration is $18\,\unit{m/s^2}$.

### PDF page 13

**2.24.** Given $\mechanical{v}_x(t)=2t^2$ and $\mechanical{x}_0=2.9\,\unit{m}$, integrate to get $\mechanical{x}(t)=\tfrac23t^3+2.9$. At $1.9\,\unit{s}$, $\mechanical{x}=7.47\,\unit{m}$ and $\mechanical{v}_x=2(1.9)^2=7.22\,\unit{m/s}$. Since $\mechanical{a}_x=4t$, the acceleration then is $7.6\,\unit{m/s^2}$.

**2.31.** For $\mechanical{x}(t)=2t^3-9t^2+12$, velocity is $\mechanical{v}=6t^2-18t=6t(t-3)$. It vanishes at $t=0$ and $t=3\,\unit{s}$. The position at $3\,\unit{s}$ is $54-81+12=-15\,\unit{m}$. The acceleration is $\mechanical{a}=12t-18$, giving $-18\,\unit{m/s^2}$ at $0$ and $+18\,\unit{m/s^2}$ at $3\,\unit{s}$.

**2.42.** As a Newtonian extrapolation, start from rest and set $\mechanical{v}_f=3.0\times10^8\,\unit{m/s}$ with $\mechanical{a}=9.8\,\unit{m/s^2}$. The equation $\mechanical{v}_f=\mechanical{a}t$ gives $t\simeq3.0612\times10^7\,\unit{s}=354.3$ days. The distance formula $\Delta\mechanical{x}=\tfrac12\mechanical{a}t^2$ gives $4.6\times10^{15}\,\unit{m}$.

### PDF page 14

**2.42(c).** Using 365 days per year gives $31{,}536{,}000\,\unit{s}$ in a year. Light travels $(3.0\times10^8\,\unit{m/s})(31{,}536{,}000\,\unit{s})=9.46\times10^{15}\,\unit{m}$ in that time. The Newtonian distance from part (b) is $4.59\times10^{15}/(9.46\times10^{15})\simeq0.48$ light-years.

**2.43.** At $20\,\unit{m/s}$ the object travels $10\,\unit{m}$ in the $0.5\,\unit{s}$ reaction interval, leaving $110-10=100\,\unit{m}$ to stop. With $\mechanical{v}_f=0$, $\mechanical{a}=-\mechanical{v}_0^2/(2d)=-2\,\unit{m/s^2}$. Braking takes $t=-\mechanical{v}_0/\mechanical{a}=10\,\unit{s}$.

**2.49(a).** A rocket starting from rest accelerates at $34\,\unit{m/s^2}$ for $35\,\unit{s}$. The powered part covers $\tfrac12(34)(35)^2=20{,}825\,\unit{m}$ and ends at $(34)(35)=1190\,\unit{m/s}$. Coasting to zero vertical speed under gravity adds about $1190^2/[2(9.8)]\simeq72{,}250\,\unit{m}$, so the total height is about $93\,\unit{km}$.

![[Kyle Kabasares - Newtonian Mechanics - Rocket height sketch.png|**Fig. 10** Margin sketch for the rocket's ascent and the end of the powered phase.]]

### PDF page 15

**2.49(b).** From engine cutoff to the maximum altitude, the rocket slows from $1190\,\unit{m/s}$ to zero at $-9.8\,\unit{m/s^2}$. This takes $121.4\,\unit{s}$. From the apex it falls $93{,}075\,\unit{m}$ from rest, taking $\sqrt{2(-93{,}075)/(-9.8)}\,\unit{s}=137.8\,\unit{s}$. Including the initial $35\,\unit{s}$ of powered motion, the flight takes $294.2\,\unit{s}$.

**2.51.** An object falls from rest through $5.5\,\unit{m}$ to the surface. Its entry speed is $\sqrt{2(9.8)(5.5)}\simeq10.4\,\unit{m/s}$ downward and the fall takes $1.06\,\unit{s}$. In the second part the calculation assumes no acceleration and uses $2.54\,\unit{s}$ at $10.4\,\unit{m/s}$ to obtain a depth of $26.4\,\unit{m}$. The sketch also has a time label that appears to read $1.6\,\unit{s}$.

![[Kyle Kabasares - Newtonian Mechanics - Fall into water.png|**Fig. 11** Drop to a water surface and continued motion to an unknown depth.]]

### PDF page 16

**2.65.** Tina starts from rest with $\mechanical{a}=2.7\,\unit{m/s^2}$, so $\mechanical{v}=2.7t$ and $\mechanical{x}=1.35t^2$ in SI units. The other object has $\mechanical{x}=24t$. For the meeting after $t=0$, $1.35t^2=24t$ gives $t=17.78\,\unit{s}$ and a position of $426.67\,\unit{m}$. Tina's velocity then is $48\,\unit{m/s}$.

**3.3.** The vector $\vec E$ points into the second quadrant. With $\theta$ measured from negative $x$ and $\phi$ from positive $y$,

$$
E_x=-E\cos\theta=-E\sin\phi,\qquad
E_y=E\sin\theta=E\cos\phi.
$$

The last box in the source repeats $x$ where the vertical projection gives $y$.

![[Kyle Kabasares - Newtonian Mechanics - Vector in the second quadrant.png|**Fig. 12** Components of a second-quadrant vector using either reference angle.]]

### PDF page 17

**3.4.** A velocity points $36^\circ$ below the positive $x$-axis and has downward component of magnitude $35\,\unit{m/s}$. Its magnitude is $35/\sin36^\circ\simeq59.5\,\unit{m/s}$. Its horizontal component is $59.5\cos36^\circ=48.13\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity component triangle.png|**Fig. 13** A velocity at $36^\circ$ below the horizontal with downward component of magnitude $35\,\unit{m/s}$.]]

**3.9.** The magnetic field is $\magnetic{\vec B}=(2.5\hat{\imath}-2.0\hat{\jmath})\,\unit{T}$. Its magnitude is $\sqrt{2.5^2+(-2.0)^2}\,\unit{T}=3.2\,\unit{T}$. From $\tan\theta=-2.0/2.5$ and the fourth-quadrant sketch, the direction is about $39^\circ$ below positive $x$.

![[Kyle Kabasares - Newtonian Mechanics - Fourth quadrant field vector.png|**Fig. 14** Field vector with components $2.5\,\unit{T}$ and $-2.0\,\unit{T}$.]]

### PDF page 18

**3.20.** Let $\vec E=3\hat{\imath}+3\hat{\jmath}$ and $\vec F=\hat{\imath}-\hat{\jmath}$.

- (a) $\lvert\vec E\rvert=\sqrt{3^2+3^2}\simeq4.2$.
- (b) $\lvert\vec F\rvert=\sqrt{1^2+(-1)^2}=\sqrt2$. Its $y$-component is negative from the given vector, though the magnitude sketch uses a positive leg.
- (c) $\vec E+\vec F=4\hat{\imath}+2\hat{\jmath}$, with magnitude $\sqrt{20}$.
- (e) $-\vec E-2\vec F=-5\hat{\imath}-\hat{\jmath}$, with magnitude $\sqrt{26}$.

![[Kyle Kabasares - Newtonian Mechanics - Vector arithmetic sketches.png|**Fig. 15** Component sketches for vectors and their combinations in problem 3.20.]]

### PDF page 19

**3.23.** The diagram shows $\vec A$ pointing along positive $x$ with component 4, and $\vec B$ with components $(-5.3,2)$. The horizontal sum is $4+(-5.3)=-1.30$. The notebook obtains

$$
\lvert\vec B\rvert=\sqrt{(-5.3)^2+2^2}\simeq5.6,\qquad
\theta=\arctan(2/5.3)\simeq20.67^\circ
$$

above the negative $x$-axis.

![[Kyle Kabasares - Newtonian Mechanics - Vector component solution.png|**Fig. 16** Vector $\vec B$ lies above the negative $x$-axis and $\vec A$ points along positive $x$.]]

### PDF page 20

#### Lecture, September 9, 2013 — Vectors

Vectors have magnitude (length) and direction. They can be moved when adding or subtracting as long as both properties stay the same.

For tail-to-tip addition, place the tail of $\vec B$ at the tip of $\vec A$. For subtraction, use $\vec A-\vec B=\vec A+(-\vec B)$, reversing $\vec B$ first. In the parallelogram method the vectors start at a common tail and the diagonal is the resultant.

![[Kyle Kabasares - Newtonian Mechanics - Vector addition and subtraction methods.png|**Fig. 17** Tail-to-tip addition and subtraction and the parallelogram construction.]]

Find $\vec A+\vec B$ for $A=10$ at $60^\circ$ and $B=8$ at $45^\circ$, both measured above positive $x$.

![[Kyle Kabasares - Newtonian Mechanics - Vectors and trigonometry example.png|**Fig. 18** The two vectors for the component addition example.]]

### PDF page 21

Resolve $\vec A$ and $\vec B$ into components using cosine for the horizontal legs and sine for the vertical legs. Add like components to obtain the resultant.

$$
\begin{aligned}
R_x&=A\cos\theta+B\cos\phi=10(1/2)+8/\sqrt2\simeq10.66,\\
R_y&=A\sin\theta+B\sin\phi=10(\sqrt3/2)+8/\sqrt2\simeq14.32.
\end{aligned}
$$

![[Kyle Kabasares - Newtonian Mechanics - Resolving and combining vector components.png|**Fig. 19** Component triangles and resultant with horizontal component 10.66 and vertical component 14.32.]]

The magnitude is $R=\sqrt{10.66^2+14.32^2}\simeq\sqrt{318.6}=17.85$. The direction is $\alpha=\arctan(14.32/10.66)=53.3^\circ$ above positive $x$.

### PDF page 22

#### Vector notation and two-dimensional kinematics

Write $\vec A=A_x\hat{\imath}+A_y\hat{\jmath}$. The unit vectors $\hat{\imath}$ and $\hat{\jmath}$ have length one and point along the positive $x$- and $y$-axes. In the preceding example,

$$
\vec A=5\hat{\imath}+8.66\hat{\jmath},\qquad
\vec B=5.66\hat{\imath}+5.66\hat{\jmath},\qquad
\vec R=10.66\hat{\imath}+14.32\hat{\jmath}.
$$

The magnitude of $\vec R$ is $\sqrt{10.66^2+14.32^2}$. Apply the same kinematics equations independently to horizontal and vertical motion. Neglecting air resistance, gravity acts vertically and the horizontal velocity is constant, so $\Delta\mechanical{x}=\mechanical{v}_{0x}t$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile launch components.png|**Fig. 20** Horizontal and vertical components of an angled launch.]]

#### Lecture, September 11, 2013 — Horizontal launch

A projectile leaves a $20\,\unit{m}$ high platform horizontally at $10\,\unit{m/s}$. Horizontally $\mechanical{a}_x=0$ and $\mechanical{v}_x=10\,\unit{m/s}$. Vertically $\mechanical{v}_{0y}=0$, $\mechanical{a}_y=-9.8\,\unit{m/s^2}$, and $\Delta\mechanical{y}=-20\,\unit{m}$. The final vertical velocity is $-\sqrt{2(-9.8)(-20)}\,\unit{m/s}=-19.8\,\unit{m/s}$. The total impact speed is $\sqrt{10^2+19.8^2}\,\unit{m/s}=22.2\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal launch from a platform.png|**Fig. 21** Horizontal launch from a $20\,\unit{m}$ platform.]]

### PDF page 23

For the horizontal launch, $-19.8=-9.8t$ gives $t=2.02\,\unit{s}$. Its range is $(10\,\unit{m/s})(2.02\,\unit{s})=20.2\,\unit{m}$.

A thrown ball follows a parabola under uniform gravity. If it returns to its starting height, the path is symmetric and the initial and final vertical velocity components have equal magnitude and opposite signs.

![[Kyle Kabasares - Newtonian Mechanics - Symmetric parabolic trajectory.png|**Fig. 22** Projectile velocity components along a symmetric parabolic trajectory.]]

**Example 1.** Launch at $20\,\unit{m/s}$ and $30^\circ$ above horizontal. The components are $\mechanical{v}_{0x}=20\cos30^\circ=17.3\,\unit{m/s}$ and $\mechanical{v}_{0y}=20\sin30^\circ=10\,\unit{m/s}$. Horizontal acceleration is zero, and vertical acceleration is $-9.8\,\unit{m/s^2}$. At the apex the vertical velocity is zero, so the height is $-10^2/[2(-9.8)]=5.1\,\unit{m}$ and the time up is $10/9.8=1.02\,\unit{s}$. The horizontal distance to the apex is $17.6\,\unit{m}$ and the range at the launch height is $35.2\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Thirty degree launch.png|**Fig. 23** Component triangles for the $30^\circ$ launch.]]

### PDF page 24

#### Projectile reaching a window

Launch at $20\,\unit{m/s}$ and $60^\circ$ above the horizontal. The window is $5\,\unit{m}$ above the launch point. The velocity components are $\mechanical{v}_{0x}=20\cos60^\circ=10\,\unit{m/s}$ and $\mechanical{v}_{0y}=20\sin60^\circ=17.3\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile aimed at a window.png|**Fig. 24** The window is $5\,\unit{m}$ above the point of launch.]]

With $\mechanical{a}_x=0$, $t=\Delta x/v_{0x}$. Substituting into the vertical displacement equation gives

$$
\Delta y=\tan\theta\,\Delta x+
\frac{a_y}{2v_0^2\cos^2\theta}(\Delta x)^2.
$$

For $a_y=-9.8\,\unit{m/s^2}$, the numerical equation is $0=-5+\sqrt3\,\Delta x-0.049(\Delta x)^2$ in SI units. Apply the quadratic formula $(-b\pm\sqrt{b^2-4ac})/(2a)$. The two horizontal distances are approximately $3.1\,\unit{m}$ on the ascent and $32.1\,\unit{m}$ on the descent.

### PDF page 25

For the equal-height projectile sketch, the flight time is $t=\Delta x/v_{0x}$ using the constant horizontal component.

![[Kyle Kabasares - Newtonian Mechanics - Equal height projectile range.png|**Fig. 25** Horizontal range and velocity components at the reference height.]]

#### General two-dimensional kinematics

The position vector $\mechanical{\vec r}(t)$ locates the car on the track at time $t$. The velocity $\mechanical{\vec v}(t)$ is tangent to the path.

![[Kyle Kabasares - Newtonian Mechanics - Position and tangent velocity.png|**Fig. 26** Position and tangent velocity for a car on a curved track.]]

In SI units, let $\mechanical{\vec r}=(3t^2-4t^3)\hat{\imath}+(2t^2-7t^3)\hat{\jmath}$. Differentiating gives $\mechanical{\vec v}=(6t-12t^2)\hat{\imath}+(4t-21t^2)\hat{\jmath}$. At $t=1\,\unit{s}$ this is $(-6\hat{\imath}-17\hat{\jmath})\,\unit{m/s}$. Its direction is $\arctan(17/6)\simeq70.5^\circ$ below the negative $x$-axis.

![[Kyle Kabasares - Newtonian Mechanics - Tangent velocity angle.png|**Fig. 27** Velocity components at one second and the angle measured from negative $x$.]]

### PDF page 26

#### Lecture, September 13, 2013 — Circular motion

Acceleration is a vector, with magnitude and direction. The average acceleration is

$$
\mechanical{\vec a}_{\mathrm{avg}}=\frac{\Delta\mechanical{\vec v}}{\Delta t}
=\frac{\mechanical{\vec v}_f-\mechanical{\vec v}_i}{\Delta t}.
$$

Even at constant speed, velocity changes direction around a circle. The difference is $\Delta\mechanical{\vec v}=\mechanical{\vec v}_f+(-\mechanical{\vec v}_i)$. In the instantaneous limit the change points toward the center, so the acceleration is centripetal, meaning center-seeking.

![[Kyle Kabasares - Newtonian Mechanics - Circular velocity difference.png|**Fig. 28** Tangential initial and final velocities and the vectors used to form their difference.]]

### PDF page 27

#### Homework 2

**3.34.** A projectile launched at $100\,\unit{m/s}$ and $36^\circ$ has vertical component $100\sin36^\circ$ and horizontal component $100\cos36^\circ=80.9\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Homework launch components.png|**Fig. 29** Launch diagram and components for the $36^\circ$ projectile.]]

**4.8.** In SI units, $\mechanical{x}=\tfrac12t^3-2t^2$ and $\mechanical{y}=\tfrac12t^2-2t$. The derivatives are $\mechanical{v}_x=\tfrac32t^2-4t$ and $\mechanical{v}_y=t-2$.

- At $t=0$ the speed is $2\,\unit{m/s}$ and the direction is $-90^\circ$ from positive $x$.
- At $t=3\,\unit{s}$, $\mechanical{\vec v}=(\tfrac32\hat{\imath}+\hat{\jmath})\,\unit{m/s}$. The speed is $\sqrt{(3/2)^2+1}\,\unit{m/s}\simeq1.8\,\unit{m/s}$ and the direction is $\arctan(2/3)\simeq33.6^\circ$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity direction at three seconds.png|**Fig. 30** Velocity components and the angle from positive $x$ at three seconds.]]

### PDF page 28

**4.12.** A projectile leaves a ledge horizontally at $25\,\unit{m/s}$ and lands $55\,\unit{m}$ away. Horizontal motion gives $t=55/25=2.2\,\unit{s}$. With the ground at $y_f=0$, $v_{0y}=0$, and $a_y=-9.8\,\unit{m/s^2}$, the launch height is $y_0=-\tfrac12a_yt^2=23.7\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Finding a ledge height.png|**Fig. 31** Horizontal launch and landing distance used to infer the ledge height.]]

**4.13.** The sketch shows horizontal motion over $46\,\unit{m}$ with a drop of $0.016\,\unit{m}$. From $v_{fy}^2=2a_y(y_f-y_0)$ with $v_{0y}=0$, the final vertical component is $-0.56\,\unit{m/s}$. Then $t=v_{fy}/a_y\simeq0.057\,\unit{s}$ and $v_x=46/0.057\simeq807\,\unit{m/s}$ using the rounded time.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal motion with a small drop.png|**Fig. 32** Schematic of the $46\,\unit{m}$ horizontal displacement in problem 4.13.]]

### PDF page 29

**4.14.** An aircraft travels horizontally at $150\,\unit{m/s}$ at altitude $180\,\unit{m}$. An object released from it has zero initial vertical velocity. From $0=y_0+\tfrac12a_yt^2$ with $a_y=-9.8\,\unit{m/s^2}$, the fall takes $\sqrt{-2(180)/(-9.8)}\,\unit{s}=6.06\,\unit{s}$. The object moves $(150)(6.06)\,\unit{m}=909\,\unit{m}$ horizontally.

![[Kyle Kabasares - Newtonian Mechanics - Drop from an aircraft.png|**Fig. 33** Aircraft altitude, horizontal speed, and horizontal displacement to the landing point.]]

**4.38.** For a projectile returning to its launch height, $\mechanical{R}=\mechanical{v}_0^2\sin(2\theta)/\mechanical{g}$. The maximum occurs at $\sin(2\theta)=1$, so $\theta=45^\circ$. Half the maximum requires $\sin(2\theta)=1/2$, giving $\theta=15^\circ$ or $75^\circ$. For $\mechanical{v}_0=10\,\unit{m/s}$, the ranges at $45^\circ$ and $15^\circ$ are about $10.2\,\unit{m}$ and $5.1\,\unit{m}$, respectively.

### PDF page 30

**4.40(a).** The projectile returns to the launch height after traveling $8.7\,\unit{m}$, with launch angle $27^\circ$. The constant-acceleration equations are $v_f=v_0+at$, $v_f^2=v_0^2+2a(x_f-x_0)$, and $x_f=x_0+v_0t+\tfrac12at^2$. Use the horizontal result $t=8.7/(v_0\cos27^\circ)$ and the vertical result $t=-2v_0\sin27^\circ/a_y$. With $a_y=-9.8\,\unit{m/s^2}$ this gives $v_0^2\simeq105.4\,\unit{m^2/s^2}$ and $v_0\simeq10.3\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Launch speed from range.png|**Fig. 34** A projectile launched at $27^\circ$ with a range of $8.7\,\unit{m}$.]]

**4.40(b).** The vertical launch component is $4.7\,\unit{m/s}$. The apex occurs after about $0.5\,\unit{s}$, when $v_y=0$. The height from $y_f=y_0+v_{0y}t+\tfrac12a_yt^2$ is about $1.125\,\unit{m}$ using the written rounding.

**4.44.** A projectile leaves at $30\,\unit{m/s}$ and $60^\circ$ toward a structure of height $h$. The initial components are $v_{0x}=30\cos60^\circ=15\,\unit{m/s}$ and $v_{0y}=30\sin60^\circ\simeq26\,\unit{m/s}$. The table gives $t=3.6\,\unit{s}$ and $a_y=-9.8\,\unit{m/s^2}$, with $y_0=0$ and $y_f$ to find.

![[Kyle Kabasares - Newtonian Mechanics - Projectile and structure height.png|**Fig. 35** Angled launch and the unknown height in problem 4.44.]]

### PDF page 31

#### Lecture, September 16, 2013 — Tangential and centripetal acceleration

The total acceleration is $\mechanical{\vec a}=\mechanical{\vec a}_t+\mechanical{\vec a}_c$. The tangential component comes from the change in speed, $a_t=(v_f-v_i)/\Delta t$ over an interval of uniform tangential acceleration. The centripetal component comes from the change in velocity direction around the circle, with magnitude $a_c=v^2/r$. The components are perpendicular, so $a=\sqrt{a_t^2+a_c^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Tangential and centripetal components.png|**Fig. 36** Tangential and inward acceleration components on a circle.]]

**Example 1.** A car on a curve of radius $150\,\unit{m}$ initially travels at $20\,\unit{m/s}$, giving $a_c=20^2/150=2.67\,\unit{m/s^2}$. It speeds up uniformly to $30\,\unit{m/s}$ in $2\,\unit{s}$, so $a_t=(30-20)/2=5\,\unit{m/s^2}$. At the beginning the total acceleration magnitude is $\sqrt{2.67^2+5^2}=5.67\,\unit{m/s^2}$. At the end $a_c=30^2/150=6\,\unit{m/s^2}$ and the total is $\sqrt{6^2+5^2}=\sqrt{61}\simeq7.8\,\unit{m/s^2}$.

### PDF page 32

#### Force and Newton's laws

A net force causes an object to accelerate. Constant velocity implies zero net force, which is translational equilibrium. Forces are vectors and follow vector arithmetic.

Newton's laws give a systematic way to calculate the effects of forces on objects.

1. **Inertia.** An object at rest stays at rest, and an object moving at constant velocity continues at that velocity unless a net external force acts.
2. **Force and acceleration.** $\mechanical{\vec F}_{\mathrm{net}}=\mechanical{m}\mechanical{\vec a}$. Acceleration is directly proportional to net force and inversely proportional to mass.
3. **Interaction pairs.** The force of body 1 on body 2 and the force of body 2 on body 1 have equal magnitudes and opposite directions, $\mechanical{\vec F}_{1\mathrm{\ on\ }2}=-\mechanical{\vec F}_{2\mathrm{\ on\ }1}$.

One newton is one $\unit{kg\,m/s^2}$. Mass is independent of the object's location. Weight is the gravitational force on the object, $\mechanical{\vec W}=\mechanical{m}\mechanical{\vec g}$.

### PDF page 33

Weight $\mechanical{\vec W}=\mechanical{m}\mechanical{\vec g}$ is a vector because it is a force. Force has units $\unit{N}=\unit{kg\,m/s^2}$.

A $1000\,\unit{kg}$ car with a driving force of $10{,}000\,\unit{N}$ through the tires accelerates at $10\,\unit{m/s^2}$ when that is the net force.

A $0.3\,\unit{kg}$ hockey puck has net force components $10\,\unit{N}$ in $x$ and $5\,\unit{N}$ in $y$. The force magnitude is $\sqrt{10^2+5^2}=\sqrt{125}\simeq11.2\,\unit{N}$, giving acceleration magnitude $37.3\,\unit{m/s^2}$. Its components are $10/0.3=33.3\,\unit{m/s^2}$ and $5/0.3=16.67\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Forces on a hockey puck.png|**Fig. 37** Perpendicular forces and their resultant on the puck.]]

A Moon rock weighs $200\,\unit{N}$ on the Moon, where $g_{\mathrm{Moon}}\simeq g_{\mathrm{Earth}}/6\simeq1.63\,\unit{m/s^2}$. Its mass is $200/1.63\simeq122.7\,\unit{kg}$. Using Earth's gravity gives about $1.20\times10^3\,\unit{N}$, written as $1202.5\,\unit{N}$.

For a $400\,\unit{N}$ box at rest on a table, $\sum F_y=\mechanical{N}-\mechanical{W}=\mechanical{m}a_y=0$, so the normal force equals the weight in magnitude.

![[Kyle Kabasares - Newtonian Mechanics - Normal force and weight.png|**Fig. 38** Normal force upward and weight downward on a box at rest.]]

### PDF page 34

#### Problem 4.44, continued

**(b) Apex.** With $v_{0y}=26\,\unit{m/s}$ and $a_y=-9.8\,\unit{m/s^2}$, the vertical velocity reaches zero at $t=-v_{0y}/a_y=2.65\,\unit{s}$. The height is $-v_{0y}^2/(2a_y)=34.48\,\unit{m}$. The time from the apex to the cliff is $3.6-2.65=0.95\,\unit{s}$.

**(a) Cliff height.** At $t=3.6\,\unit{s}$, $y_f=y_0+v_{0y}t+\tfrac12a_yt^2=(26)(3.6)-(4.9)(3.6)^2=30.096\,\unit{m}$.

**(c) Velocity at the cliff.** From the apex, the vertical velocity becomes $a_y(0.95\,\unit{s})\simeq-9.4\,\unit{m/s}$. The horizontal component is still $15\,\unit{m/s}$. The speed is $\sqrt{(-9.4)^2+15^2}\,\unit{m/s}\simeq17.7\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Velocity at the cliff.png|**Fig. 39** Horizontal and vertical velocity components on arrival at the cliff.]]

### PDF page 35

**4.45.** Launch at $17\,\unit{m/s}$ and $4.7^\circ$ from height $2\,\unit{m}$. An obstacle $7\,\unit{m}$ away has height $1\,\unit{m}$. The initial components are $v_{0x}=17\cos4.7^\circ\simeq16.9\,\unit{m/s}$ and $v_{0y}=17\sin4.7^\circ\simeq1.4\,\unit{m/s}$. The horizontal travel takes $7/16.9\simeq0.41\,\unit{s}$. The height is $2+(1.4)(0.41)-(4.9)(0.41)^2\simeq1.75\,\unit{m}$, a clearance of $0.75\,\unit{m}$. The handwritten vertical speed calculation squares $1.4$. The velocity equation gives $v_{fy}=1.4-(9.8)(0.41)\simeq-2.62\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile obstacle clearance.png|**Fig. 40** Launch geometry for the obstacle-clearance problem.]]

**4.49.** Launch at $6\,\unit{m/s}$ and $15^\circ$ below horizontal from $2.8\,\unit{m}$ above the landing level. Use $v_{0x}=6\cos15^\circ\simeq5.8\,\unit{m/s}$ and $v_{0y}=-6\sin15^\circ\simeq-1.55\,\unit{m/s}$. The positive root of $0=2.8-1.55t-4.9t^2$ is $t\simeq0.61\,\unit{s}$. The horizontal range is $(5.8)(0.61)\simeq3.538\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Downward launch.png|**Fig. 41** Downward launch and its $2.8\,\unit{m}$ change in height.]]

### PDF page 36

**4.50(a).** The projectile launches at $20\,\unit{m/s}$ and $20^\circ$ from a cliff $28\,\unit{m}$ high. Its components are $v_{0x}=20\cos20^\circ\simeq18.8\,\unit{m/s}$ and $v_{0y}=20\sin20^\circ\simeq6.8\,\unit{m/s}$. Solve $0=28+6.8t-4.9t^2$ for the positive root $t\simeq3.2\,\unit{s}$. The horizontal distance is $(18.8)(3.2)\,\unit{m}\simeq60.2\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Launch from a cliff.png|**Fig. 42** Projectile launched at $20^\circ$ from a $28\,\unit{m}$ cliff.]]

**4.50(b).** From $v_{fy}^2=v_{0y}^2+2a_y(y_f-y_0)$, the vertical impact speed is $24.4\,\unit{m/s}$ downward. Combining with the constant horizontal component gives $\sqrt{24.4^2+18.8^2}\,\unit{m/s}\simeq30.8\,\unit{m/s}$.

**4.57.** The centripetal acceleration is $a_c=v^2/r$. The handwritten expression $mv^2/r$ gives the corresponding force. At fixed speed, halving $r$ doubles the acceleration. At fixed radius, doubling $v$ multiplies it by four.

### PDF page 37

**4.60.** For a speed of $20\,\unit{m/s}$ and centripetal acceleration $1.5g=14.7\,\unit{m/s^2}$, the radius is $r=v^2/a_c=20^2/14.7\simeq27.2\,\unit{m}$.

**4.62.** Add Earth's radius to the satellite altitude to obtain the orbital radius $r=6.37\times10^6+3.58\times10^7=4.217\times10^7\,\unit{m}$. For period $T=86{,}400\,\unit{s}$, the speed is $v=2\pi r/T\simeq3066.7\,\unit{m/s}$. The centripetal acceleration is $v^2/r\simeq0.223\,\unit{m/s^2}$.

### PDF page 38

#### 4.79

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

#### 5.7

(a) $2F=2.8m$, so multiplying both sides by two gives $4F=5.6m$. Part (b) begins with $2F$.

#### 6.13

(c) $w=mg=(55\,\unit{kg})(1.62\,\unit{m/s^2})$.

### PDF page 39

#### Lecture (September 18, 2013)

The notes label this an example of the third law. A $3\,\unit{kg}$ block on a frictionless surface has a $20\,\unit{N}$ force to the right and a $5\,\unit{N}$ force to the left.

![[Kyle Kabasares - Newtonian Mechanics - Frictionless Block with Opposing Forces.png|**Fig. 44** Applied forces, normal force, and weight on the block.]]

$$
\sum \mechanical{F}_x=(20-5)\,\unit{N}=15\,\unit{N},
\qquad
\sum \mechanical{F}_y=\mechanical{F}_N-\mechanical{m}\mechanical{g}=0.
$$

Thus $F_N=mg$, $a_y=0$, and $a_x=(15\,\unit{N})/(3\,\unit{kg})=5\,\unit{m/s^2}$ in the $+x$ direction.

#### Statics example

Tension $T$ is a force in a rope, chain, or similar connection. Find $T$ for a hanging $5\,\unit{kg}$ block.

![[Kyle Kabasares - Newtonian Mechanics - One Hanging Block at Rest.png|**Fig. 45** Upward tension and downward weight.]]

Since the block has zero acceleration, $\sum F_y=T-mg=0$ and $\mechanical{T}=\mechanical{m}\mechanical{g}$.

#### Statics example 2

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

### PDF page 40

#### Statics example 3

The two vertical ropes supporting the same block have equal tension $T$.

![[Kyle Kabasares - Newtonian Mechanics - Two Vertical Support Ropes.png|**Fig. 47** Both ropes pull upward on the block.]]

$$
\sum F_y=T+T-mg=0,
\qquad
\mechanical{T}=\frac{\mechanical{m}\mechanical{g}}{2}.
$$

#### Example 4

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

### PDF page 41

#### Example 5

A rope holds a mass on a frictionless incline. Rotate the coordinate system so that $+x$ is down the incline and $+y$ is perpendicular to and away from it. Draw the free-body diagram and resolve the forces into components to find the tension and normal force.

![[Kyle Kabasares - Newtonian Mechanics - Tension on a Frictionless Incline.png|**Fig. 49** The block, its free-body diagram, and the components of its weight.]]

$$
\begin{aligned}
\sum F_x&=mg\sin\theta-T=0, & \mechanical{T}&=\mechanical{m}\mechanical{g}\sin\theta,\\
\sum F_y&=F_N-mg\cos\theta=0, & \mechanical{F}_N&=\mechanical{m}\mechanical{g}\cos\theta.
\end{aligned}
$$

#### Example 6

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

### PDF page 42

#### Discussion (September 20, 2013) — Week 4 worksheet 1

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

### PDF page 43

#### Week 4 worksheet 1 (continued)

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

### PDF page 44

#### Week 4 worksheet 1 (continued)

4(a). Gravity is the only force on the ball after release.

![[Kyle Kabasares - Newtonian Mechanics - Ball in Free Fall.png|**Fig. 53** A thrown ball and the downward force on it after release.]]

4(b–d). The acceleration stays at $9.8\,\unit{m/s^2}$ downward because gravity is the only force. The force points downward throughout the motion and is constant.

5. The forces on the person are the upward normal force $F_N$ and the downward weight $mg$.

![[Kyle Kabasares - Newtonian Mechanics - Person in Elevator.png|**Fig. 54** Normal force and weight on a person standing in an elevator.]]

#### Projectile launched at 45°

Find the launch speed for a projectile that passes through a point $20\,\unit{m}$ away and $4\,\unit{m}$ above its starting point. The launch angle is $45^\circ$, $x_0=y_0=0$, and $a_y=-9.8\,\unit{m/s^2}$.

![[Kyle Kabasares - Newtonian Mechanics - Projectile Reaching Four Meter Wall.png|**Fig. 55** Launch from ground level toward the top of the wall.]]

Use $v_x=v_0\cos45^\circ$, $v_{0y}=v_0\sin45^\circ$, and $t=(20\,\unit{m})/(v_0\cos45^\circ)$. The handwritten calculation combines $v_{fy}=v_{0y}+a_yt$ and $v_{fy}^2=v_{0y}^2+2a_y(y_f-y_0)$. It drops the cross term on squaring and boxes $v_0=\sqrt{980}\,\unit{m/s}=31.3\,\unit{m/s}$. Using vertical displacement with the same time of flight gives

$$
y_f=(20\,\unit{m})\tan45^\circ-\frac{g(20\,\unit{m})^2}{2v_0^2\cos^2 45^\circ},
\qquad
\mechanical{v}_0\approx 15.7\,\unit{m/s}.
$$

### PDF page 45

#### Lecture (September 20, 2013) — Block released from rest

Find the acceleration and the speed at the bottom of the incline.

![[Kyle Kabasares - Newtonian Mechanics - Block Released on an Incline.png|**Fig. 56** Incline and force diagram for a released block.]]

$$
\begin{aligned}
\sum F_x&=mg\sin\theta=ma, & \mechanical{a}&=\mechanical{g}\sin\theta,\\
\sum F_y&=F_N-mg\cos\theta=0, & \mechanical{F}_N&=\mechanical{m}\mechanical{g}\cos\theta.
\end{aligned}
$$

Using $v^2=v_0^2+2a(x-x_0)$, the page gives $v^2=2(g\sin\theta)(5-0)\,\unit{m}$ and $v=7\,\unit{m/s}$.

#### Dynamics example

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

### PDF page 46

#### Incline and hanging mass

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

#### Three blocks in contact

A force of $6\,\unit{N}$ pushes three blocks of masses $1$, $2$, and $3\,\unit{kg}$ in contact. Find each acceleration and net force.

![[Kyle Kabasares - Newtonian Mechanics - Pushing Three Blocks.png|**Fig. 59** The applied force pushes on the smallest block.]]

$$
F=(m_1+m_2+m_3)a,
\qquad
a=\frac{6\,\unit{N}}{(1+2+3)\,\unit{kg}}=1\,\unit{m/s^2}.
$$

The net force on each block is $m_i a$, giving $F_{1,\mathrm{net}}=1\,\unit{N}$, $F_{2,\mathrm{net}}=2\,\unit{N}$, and $F_{3,\mathrm{net}}=3\,\unit{N}$.

### PDF page 47

#### Forces between the blocks

Take rightward as positive. Block 1 accelerates blocks 2 and 3 as a group, while block 2 accelerates block 3.

![[Kyle Kabasares - Newtonian Mechanics - Contact Forces between Three Blocks.png|**Fig. 60** Contacts and group of blocks used to calculate the forces.]]

$$
\begin{aligned}
F_{12}&=(m_2+m_3)a=(2+3)(1)\,\unit{N}=5\,\unit{N}, & F_{21}&=-5\,\unit{N},\\
F_{23}&=m_3a=(3)(1)\,\unit{N}=3\,\unit{N}, & F_{32}&=-3\,\unit{N}.
\end{aligned}
$$

#### Apparent weight in an elevator

A $70\,\unit{kg}$ man stands on a scale in an elevator that starts at rest and then accelerates. Find the apparent weight at $+3\,\unit{m/s^2}$ and $-3\,\unit{m/s^2}$. Take upward as positive.

![[Kyle Kabasares - Newtonian Mechanics - Elevator Scale and Apparent Weight.png|**Fig. 61** A person standing on the elevator scale.]]

$$
\sum F_y=N-mg=ma_y.
$$

1. Stationary ($a_y=0$). $N=mg=686\,\unit{N}$, equal to the actual weight.
2. Accelerating upward ($a_y=3\,\unit{m/s^2}$). $N=m(g+a_y)=(70)(9.8+3)\,\unit{N}=896\,\unit{N}$.
3. Accelerating downward ($a_y=-3\,\unit{m/s^2}$). $N=m(g+a_y)=(70)(9.8-3)\,\unit{N}=476\,\unit{N}$.

### PDF page 48

#### Friction

Friction opposes relative sliding or the tendency to slide. The notes list static, kinetic, and rolling friction. It is often harder to start a box sliding than to keep it sliding, because maximum static friction is generally at least as large as kinetic friction. The experimentally determined coefficients depend on the materials. The page gives a range from about $0.001$ to $3$–$4$.

$$
\mechanical{f}_{\mathrm{s}}\leq\mechanical{\mu}_{\mathrm{s}}\mechanical{F}_N,
\qquad
\mechanical{f}_{\mathrm{k}}=\mechanical{\mu}_{\mathrm{k}}\mechanical{F}_N.
$$

#### Block pulled by a rope with friction

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

### PDF page 49

#### Friction force versus applied force

![[Kyle Kabasares - Newtonian Mechanics - Static to Kinetic Friction.png|**Fig. 63** Static friction grows with applied force up to the onset of sliding. Kinetic friction is lower.]]

For the preceding example, the friction to overcome before the block slides is $f_{\mathrm{s,max}}=\mu_{\mathrm{s}}F_N=(0.7)(5)(9.8)\,\unit{N}=34.3\,\unit{N}$.

#### Block sliding down an incline with friction

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

#### Box dragged horizontally at constant speed

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

### PDF page 50

#### Pulley with friction on the incline

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

### PDF page 51

#### Static friction between horizontally accelerated blocks

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

#### Friction related to rolling and walking

When walking, the foot pushes backward on the ground. By Newton's third law, the ground exerts a forward static friction force on the foot.

![[Kyle Kabasares - Newtonian Mechanics - Static Friction in Walking.png|**Fig. 68** The backward push of the foot and forward static friction from the ground.]]

### PDF page 52

#### Tires rolling and sliding motion

A driven tire pushes backward on the ground. By Newton's third law, static friction from the ground acts forward on the tire. For a box sliding to the right, friction acts to the left.

![[Kyle Kabasares - Newtonian Mechanics - Tire Traction and Sliding Block.png|**Fig. 69** Force directions for a driven tire and a sliding block.]]

#### Rolling friction

Model the rolling resistance as $\mechanical{f}_{\mathrm{r}}=\mechanical{\mu}_{\mathrm{r}}\mechanical{N}$. Look up $\mu_{\mathrm{r}}$ for the surfaces. The sketch shows deformation at the contact, likening the tire to a wheel always rolling uphill.

![[Kyle Kabasares - Newtonian Mechanics - Deformation under a Rolling Tire.png|**Fig. 70** Sketch of the tire and ground deformation at contact.]]

#### Drag

Drag is friction from a fluid, such as air or water, interacting with an object. For large objects moving through air, the notes use $D\approx \tfrac14 Av^2$ with $D$ in newtons, $A$ in square meters, and $v$ in meters per second. In this numerical rule, the factor $\tfrac14$ includes the units of density. The notes also give a linear drag law for a liquid, $\mechanical{D}=\mechanical{b}\mechanical{v}$, with the drag coefficient $b$ depending on the object.

### PDF page 53

#### Skydiving and terminal velocity

Use the quadratic air drag rule $D=\tfrac14 Av^2$, where $A$ is the person's cross-sectional area. With upward positive,

$$
\sum F_y=D-mg=ma_y,
\qquad
a_y=\frac{D}{m}-g=\frac{Av^2}{4m}-g.
$$

![[Kyle Kabasares - Newtonian Mechanics - Skydiver Drag and Cross Section.png|**Fig. 71** Drag, weight, and cross-sectional area for the falling person.]]

At terminal velocity, upward drag balances downward weight, so the net force and acceleration vanish. The terminal speed in the page's model is $v_{\mathrm{term}}=\sqrt{4mg/A}$, with the same units implicit in the coefficient as on the preceding page.

#### Discussion (September 27, 2013)

1(a–b). A horizontal tension $T$ and a rope force $F_{\mathrm{r}}$ directed $70^\circ$ above the leftward horizontal hold a mass in equilibrium.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal and Angled Rope Equilibrium.png|**Fig. 72** Applied tensions and weight for the hanging object.]]

$$
T-F_{\mathrm{r}}\cos70^\circ=0,
\qquad
F_{\mathrm{r}}\sin70^\circ-mg=0.
$$

The notes record $F_{\mathrm{r}}\approx114\,\unit{N}$ and $T=72.2\,\unit{N}$. Using the written inputs $m=9\,\unit{kg}$ and $70^\circ$ gives $F_{\mathrm{r}}=mg/\sin70^\circ\approx93.9\,\unit{N}$ and $T=F_{\mathrm{r}}\cos70^\circ\approx32.1\,\unit{N}$.

### PDF page 54

#### Discussion (September 27, 2013), continued

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

### PDF page 55

#### Discussion (September 27, 2013), continued

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

### PDF page 56

#### Lecture (September 27, 2013) — Drag force

The page also records Euler's identity, $e^{i\pi}=-1$.

$$
\mechanical{D}=\tfrac12 C\mechanical{\rho}\mechanical{A}\mechanical{v}^{\,2}.
$$

$C$ depends on the object and $\rho$ is the fluid density, about $1.2\,\unit{kg/m^3}$ for air. Equating drag to weight gives $v_{\mathrm{term}}=\sqrt{2mg/(C\rho A)}$.

#### Object moving horizontally through a liquid

For linear drag, $\sum F_x=-bv_x=m\,\mathrm{d}v_x/\mathrm{d}t$. Separate the variables and integrate from the initial speed $v_0$:

$$
-\frac{b}{m}\int_0^t\mathrm{d}t'
=\int_{v_0}^{v_x}\frac{\mathrm{d}v}{v},
\qquad
-\frac{bt}{m}=\ln\left\lvert\frac{v_x}{v_0}\right\rvert,
\qquad
\mechanical{v}_x(t)=\mechanical{v}_0e^{-bt/m}.
$$

#### Car coasting uphill

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

### PDF page 57

#### Circular motion revisited

A ball swings in a vertical circle on a string. If the string is cut at the point shown, the ball initially follows direction B, tangent to the circle.

![[Kyle Kabasares - Newtonian Mechanics - String Cut during Circular Motion.png|**Fig. 81** Candidate directions A–D immediately after the string is cut.]]

The centripetal force is the inward component of the net force. It results from the forces acting on the object and produces centripetal acceleration $a_{\mathrm{c}}$.

$$
\mechanical{F}_{\mathrm{c}}=\mechanical{m}\mechanical{a}_{\mathrm{c}}
=\frac{\mechanical{m}\mechanical{v}^{\,2}}{\mechanical{r}}.
$$

#### Car on a flat circular track

A $1{,}000\,\unit{kg}$ car travels at $20\,\unit{m/s}$ around a flat track of radius $150\,\unit{m}$. Road friction on the tires supplies the centripetal force. Find the minimum $\mu_{\mathrm{s}}$.

![[Kyle Kabasares - Newtonian Mechanics - Normal Force on Flat Circular Track.png|**Fig. 82** Vertical force balance on the flat track.]]

At the threshold of slipping,

$$
\frac{mv^2}{r}=f_{\mathrm{s,max}}=\mu_{\mathrm{s}}N=\mu_{\mathrm{s}}mg,
\qquad
\mu_{\mathrm{s,min}}=\frac{v^2}{gr}.
$$

### PDF page 58

#### Car over hills and valleys

Find the normal force on a car of mass $m$ and speed $v$. At the top of a hill, the centripetal force is downward, so $N-mg=-F_{\mathrm{c}}$ and the car feels lighter. At the bottom of a valley, $N-mg=F_{\mathrm{c}}$ and the car feels heavier.

![[Kyle Kabasares - Newtonian Mechanics - Hill and Valley Normal Forces.png|**Fig. 83** Normal force and weight at the crest and the bottom of the valley.]]

For a crest with radius of curvature $r$,

$$
N=mg-\frac{mv^2}{r}=m\left(g-\frac{v^2}{r}\right).
$$

At the speed for loss of contact, $N=0$, so $v=\sqrt{gr}$.

#### Ball on a string moving in a horizontal circle

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

### PDF page 59

#### Car on a frictionless banked curve

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

### PDF page 60

#### Lecture (October 2, 2013) — Dot product

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

### PDF page 61

#### Concept of work

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

### PDF page 62

#### Work by a constant force

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

#### Work by a varying force

In one dimension, $\energy{W}=\int \mechanical{F}_x\,\mathrm{d}\mechanical{x}$. Work is the signed area under the force-versus-position graph. One may also represent the force by a function $F(x)$, as for a spring.

![[Kyle Kabasares - Newtonian Mechanics - Work as Area under Force Curve.png|**Fig. 91** Shaded area representing the work done.]]

### PDF page 63

#### Discussion (October 4, 2013)

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

### PDF page 64

#### Discussion (October 4, 2013), continued

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

### PDF page 65

#### Discussion (October 4, 2013), continued

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

### PDF page 66

#### Lecture (October 4, 2013) — Hooke's law

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

### PDF page 67

#### Spring work and spring constant

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

#### Kinetic energy

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

### PDF page 68

#### Work–energy theorem

Kinetic energy is a scalar. The net work equals the change in kinetic energy:

$$
\energy{W}_{\mathrm{net}}=\energy{K}_f-\energy{K}_i=\Delta\energy{K}.
$$

For a constant net force, $W_{\mathrm{net}}=\vec F_{\mathrm{net}}\cdot\Delta\vec s$.

#### Block pulled on a frictionless surface

A $12\,\unit{N}$ force pulls a $6\,\unit{kg}$ block through $3\,\unit{m}$ from rest. Since the force and displacement are parallel, $F\Delta x=\tfrac12mv_f^2$ and

$$
v_f=\sqrt{\frac{2F\Delta x}{m}}
=\sqrt{\frac{2(12\,\unit{N})(3\,\unit{m})}{6\,\unit{kg}}}
=3.46\,\unit{m/s}.
$$

#### Same block with friction

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

### PDF page 69

#### Power

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

#### Elevator motor

An elevator of mass $1{,}000\,\unit{kg}$ moves upward at a constant $2\,\unit{m/s}$. Find the power delivered by the motor.

![[Kyle Kabasares - Newtonian Mechanics - Motor Lifting an Elevator.png|**Fig. 101** Tension and weight on the elevator.]]

$$
\sum F_y=T-mg=0,\qquad T=mg,
\qquad
\energy{P}=Tv=(1{,}000)(9.8)(2)\,\unit{W}=19{,}600\,\unit{W}.
$$

The handwritten result labels the unit as newtons. Force times speed gives watts.

### PDF page 70

#### Motion down a frictionless 10° slope

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

### PDF page 71

#### Notes from a missed lecture — Box moving up an incline

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

#### Work done by gravity during lifting

![[Kyle Kabasares - Newtonian Mechanics - Lifting against Gravity.png|**Fig. 104** An object lifted from its initial height to a higher final position.]]

$$
\energy{W}_g=mg(y_f-y_i)\cos180^\circ=-mgy_f+mgy_i.
$$

When $y_f>y_i$, gravity does negative work. Define gravitational potential energy $\energy{U}_g=mgy$. Potential energy is energy associated with position in the gravitational field. Potential energy, kinetic energy, and work all have units of joules.

### PDF page 72

#### Conservative and nonconservative forces

The work by a conservative force depends only on the endpoints. Gravity is an example. The work by a nonconservative force can depend on the path, as with friction. The page recalls the spring potential energy $\tfrac12kx^2$ and the gravitational potential energy $mgh$.

#### Conservation of energy

Energy can transform between different forms. The total energy of an isolated system is conserved. When mechanical energy is conserved,

$$
\energy{E}_{\mathrm{mech}}=\energy{K}+\energy{U}=\mathrm{constant},
\qquad
K_i+U_i=K_f+U_f.
$$

#### Dropped ball

A $1\,\unit{kg}$ ball is dropped from rest at $y_i=5\,\unit{m}$. Find the velocity at $y_f=2\,\unit{m}$.

$$
\tfrac12mv_i^2+mgy_i=\tfrac12mv_f^2+mgy_f,
\qquad
\tfrac12v_f^2=g(y_i-y_f).
$$

With upward positive, $v_f=-\sqrt{2g(y_i-y_f)}=-7.67\,\unit{m/s}$.

### PDF page 73

#### Pendulum speed at the bottom

A $0.5\,\unit{kg}$ pendulum of length $L$ swings from an initial angle of $20^\circ$. Set $y_f=0$ at the bottom and take $v_i=0$ at the turning point. The starting height is $y_i=L-L\cos\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Pendulum Height and Swing.png|**Fig. 105** The vertical distance from the release point to the bottom of the swing.]]

$$
K_i+U_i=K_f+U_f,
\qquad
mg(L-L\cos\theta)=\tfrac12mv_f^2,
\qquad
v_f=\sqrt{2g(L-L\cos\theta)}.
$$

#### Lecture (October 9, 2013) — Frictionless incline

A block of mass $m$ starts from rest and slides down a frictionless incline. Its initial and final heights are $y_i$ and $y_f$, with an arbitrary height origin.

![[Kyle Kabasares - Newtonian Mechanics - Energy on a Frictionless Incline.png|**Fig. 106** Heights used to find the speed at the bottom.]]

$$
mgy_i=\tfrac12mv_f^2+mgy_f
\quad\Longrightarrow\quad v_f=\sqrt{2g(y_i-y_f)}.
$$

#### Work by a nonconservative force

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

### PDF page 74

#### Spring compression on a rough surface, continued

Since $N=mg$, the energy equation is $-\tfrac12mv_0^2+\tfrac12k(\Delta x)^2=-\mu_{\mathrm{k}}mg\Delta x$. It gives the speed at first contact:

$$
v_0=\sqrt{\frac{2[\tfrac12k(\Delta x)^2+\mu_{\mathrm{k}}mg\Delta x]}{m}}.
$$

The handwritten final line labels this speed $v_f$. The preceding page defines $v_f=0$ at maximum compression.

#### Force and potential energy

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

### PDF page 75

#### Block launched vertically by a spring

Find the maximum height using conservation of energy. The block starts from rest with the spring compressed by $x$ and has zero speed again at its highest point. Measuring $h$ from the initial position gives

$$
U_i+K_i=U_f+K_f,\qquad
\tfrac12kx^2=mgh,\qquad
h=\frac{kx^2}{2mg}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Spring Launch Maximum Height.png|**Fig. 109** Block on the compressed spring and at maximum height.]]

#### Lecture (October 11, 2013) — Pulley with the incline mass sliding downhill

Take positive directions downhill for $m_1$ and upward for the hanging mass $m_2$. Kinetic friction on $m_1$ points uphill.

![[Kyle Kabasares - Newtonian Mechanics - Downhill Pulley and Friction.png|**Fig. 110** The pulley and individual force diagrams.]]

$$
T-m_2g=m_2a,\qquad
N-m_1g\cos\theta=0,
\qquad
m_1g\sin\theta-T-\mu_{\mathrm{k}}m_1g\cos\theta=m_1a.
$$

#### Conservation of energy and nonconservative work

Use $K_i+U_i=K_f+U_f$ when nonconservative work is zero. Otherwise use $W_{\mathrm{nc}}=\Delta K+\Delta U$, as for a block compressing a spring while moving on a rough surface.

![[Kyle Kabasares - Newtonian Mechanics - Spring Block Nonconservative Work.png|**Fig. 111** Before and after compression on the rough surface.]]

A block starts at rest at the top of a rough incline. Set $y_f=0$, with $y_i=\Delta s\sin\theta$. To find the final speed, first use $N-mg\cos\theta=0$, then apply the energy equation.

![[Kyle Kabasares - Newtonian Mechanics - Rough Incline Energy Geometry.png|**Fig. 112** Vertical drop and distance along the rough slope.]]

$$
W_{\mathrm{nc}}=F_{\mathrm{k}}\Delta s\cos180^\circ
=-\mu_{\mathrm{k}}mg\cos\theta\,\Delta s
=\tfrac12mv_f^2-mg\Delta s\sin\theta.
$$

### PDF page 76

#### Exam 1 review — Email problem

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

### PDF page 77

#### Week 2 worksheet

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

### PDF page 78

#### Week 2 worksheet, continued

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

### PDF page 79

#### Chapter 4

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

### PDF page 80

#### Chapter 4 problems, continued

79. In this version, a horizontal projectile travels $60\,\unit{m}$ and strikes the ground at $3.0^\circ$ below the horizontal. The launch velocity has zero vertical component. Write the impact speed as $v_f$.

![[Kyle Kabasares - Newtonian Mechanics - Sixty Meter Horizontal Launch.png|**Fig. 119** Launch, impact direction, and impact velocity components.]]

$$
v_x=v_f\cos3^\circ,\qquad
\lvert v_{fy}\rvert=v_f\sin3^\circ,\qquad
t=\frac{60\,\unit{m}}{v_f\cos3^\circ}=\frac{v_f\sin3^\circ}{g}.
$$

Therefore $v_f^2\sin3^\circ\cos3^\circ=(60\,\unit{m})g=588\,\unit{m^2/s^2}$. Using $\sin3^\circ\cos3^\circ\approx0.052$ gives $v_f\approx106\,\unit{m/s}$ and $v_x\approx106\,\unit{m/s}$.

25. The speed of a point rotating at radius $r$ with period $T$ is $v=2\pi r/T$. Compare radii $6.4\times10^6\,\unit{m}$ and $6.4\times10^6\,\unit{m}+300\,\unit{m}$ for $T=86{,}400\,\unit{s}$. The notes subtract $465.421\,\unit{m/s}$ from $465.442\,\unit{m/s}$, giving a difference of about $0.021\,\unit{m/s}$.

### PDF page 81

#### Chapter 6

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

### PDF page 82

#### Chapter 6, continued

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

### PDF page 83

#### Chapter 6, continued

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

### PDF page 84

#### Chapter 8

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

### PDF page 85

#### Chapter 10

69. A pendulum of length $L$ is released from rest at angle $\theta$ to the vertical. A peg shortens the radius of the loop to $r=L/3$. Measure height from the bottom of the swing, so $h_i=L-L\cos\theta$ and the top of the smaller loop is at $h_f=2L/3$.

![[Kyle Kabasares - Newtonian Mechanics - Pendulum Loop around a Peg.png|**Fig. 128** The initial pendulum position and the smaller loop around the peg.]]

At the threshold for completing the smaller loop, the tension at the top is zero, so $mg=mv_f^2/r$ and $v_f=\sqrt{gL/3}$. Conservation of energy gives

$$
mg(L-L\cos\theta)=mg\frac{2L}{3}+\tfrac12m\frac{gL}{3},
\qquad
1-\cos\theta=\tfrac23+\tfrac16.
$$

Thus $\cos\theta=1/6$ and $\theta=\arccos(1/6)\approx80^\circ$.

53(a). A block starts at rest at height $h$ and reaches a hill crest at height $R$ with radius of curvature $R$. At the threshold of losing contact, $N=0$ at the crest, so $mg=mv^2/R$ and $v=\sqrt{gR}$.

![[Kyle Kabasares - Newtonian Mechanics - Block Leaving Contact at Hill Crest.png|**Fig. 129** The starting height and the forces at the crest.]]

$$
mgh=mgR+\tfrac12m(gR),\qquad h=\tfrac32R.
$$

53(b). With $R=10\,\unit{m}$, $h=\tfrac32(10\,\unit{m})=15\,\unit{m}$.

### PDF page 86

#### Problem 1 — Sled at constant speed

A $60\,\unit{kg}$ sled is pulled at constant speed by a $120\,\unit{N}$ force at $40^\circ$ above horizontal. Find the coefficient of kinetic friction.

![[Kyle Kabasares - Newtonian Mechanics - Sled Pulled at Forty Degrees.png|**Fig. 130** The sled, rope tension components, friction, normal force, and weight.]]

$$
\begin{aligned}
\sum F_y&=N+T\sin40^\circ-mg=0,\\
\sum F_x&=T\cos40^\circ-F_{\mathrm{k}}=0.
\end{aligned}
$$

Since $F_{\mathrm{k}}=\mu_{\mathrm{k}}N$ and $N=mg-T\sin40^\circ$,

$$
\mu_{\mathrm{k}}=\frac{T\cos40^\circ}{mg-T\sin40^\circ}=0.179\approx0.18.
$$

#### Problem 2 — Energy

A compressed spring with $k=300\,\unit{N/m}$ launches a $3\,\unit{kg}$ block toward a vertical loop of radius $R=2\,\unit{m}$. Assume no friction. Find the compression $\Delta x$ needed to complete the loop.

![[Kyle Kabasares - Newtonian Mechanics - Spring and Vertical Loop Setup.png|**Fig. 131** Compressed spring, block, and vertical loop.]]

### PDF page 87

#### Problem 2 — Energy, continued

At the top of the loop, $F_N+mg=mv_f^2/R$. At the threshold $F_N=0$ and $v_f=\sqrt{gR}\approx4.4\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Radial Force at Top of Loop.png|**Fig. 132** At the top, the inward radial direction is downward.]]

Taking $y_f=2R$ at the top,

$$
\tfrac12k(\Delta x)^2=mgy_f+\tfrac12mv_f^2,\qquad
\Delta x=\sqrt{\frac{2(mgy_f+\tfrac12mv_f^2)}{k}}.
$$

The page records $0.96\,\unit{m}$. With $k=300\,\unit{N/m}$, $m=3\,\unit{kg}$, and $R=2\,\unit{m}$, the expression gives about $0.99\,\unit{m}$.

#### Conserved quantities and linear momentum

A conserved quantity is a property of an isolated system that remains constant as the system changes. Linear momentum is $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$. For a mass of $0.2\,\unit{kg}$ at $20\,\unit{m/s}$, $p=4\,\unit{kg\,m/s}$. The product in the handwriting appears to show $80$ in place of $20$.

With zero net external force, $\vec p_i=\vec p_f$ for one object and $\vec p_{1i}+\vec p_{2i}=\vec p_{1f}+\vec p_{2f}$ for two.

#### Impulse–momentum theorem

$$
\mechanical{\vec F}_{\mathrm{net}}=\frac{\mathrm{d}\mechanical{\vec p}}{\mathrm{d}t},
\qquad
\Delta\mechanical{\vec p}=\vec p_f-\vec p_i
=\int_{t_0}^{t_f}\vec F_{\mathrm{net}}\,\mathrm{d}t.
$$

For a constant force, $\Delta\vec p=\vec F_{\mathrm{net}}\Delta t$. In general the same formula uses the average force, $\vec F_{\mathrm{avg}}=\Delta\vec p/\Delta t$.

### PDF page 88

#### Impulse

Impulse is a vector. For a varying force $\mechanical{\vec J}=\Delta\mechanical{\vec p}=\int\vec F\,\mathrm{d}t$. For a constant force, $\vec J=\vec F\Delta t$.

#### Inelastic collision

Two hook-and-loop balls are thrown toward each other, with $m_1=0.5\,\unit{kg}$, $v_1=10\,\unit{m/s}$, $m_2=0.2\,\unit{kg}$, and $v_2=-15\,\unit{m/s}$. They stick together. Find the direction and velocity of the combined object.

![[Kyle Kabasares - Newtonian Mechanics - Two Balls Stick after Collision.png|**Fig. 133** The balls approach in opposite directions and leave as one object.]]

$$
m_1v_1+m_2v_2=(m_1+m_2)v_T,\qquad
v_T=\frac{(0.5)(10)+(0.2)(-15)}{0.7}\,\unit{m/s}
=+2.86\,\unit{m/s}.
$$

The positive sign gives motion in the direction of the first ball's initial velocity.

#### Stunt performer landing on an airbag

An $80\,\unit{kg}$ stunt performer is moving downward at $10\,\unit{m/s}$ just before landing. The airbag brings him to rest in $0.2\,\unit{s}$. Find the impulse and average net force.

$$
J_y=\Delta p_y=m(v_f-v_i)=(80)[0-(-10)]\,\unit{kg\,m/s}
=800\,\unit{kg\,m/s},
\qquad
F_{\mathrm{avg},y}=\frac{\Delta p_y}{\Delta t}=4{,}000\,\unit{N}.
$$

Both point upward.

### PDF page 89

#### Collisions and decays in one dimension

Momentum conservation can be used to study collisions and their counterparts, decays.

#### Rockets

The notes assume a constant engine force and point out that both the mass $m$ and velocity $v$ depend on time. The product rule gives

$$
\frac{\mathrm{d}(mv)}{\mathrm{d}t}
=m\frac{\mathrm{d}v}{\mathrm{d}t}+v\frac{\mathrm{d}m}{\mathrm{d}t}.
$$

The page labels this derivative thrust. For the rocket alone, momentum also leaves with the exhaust, so identifying thrust requires accounting for that flux.

![[Kyle Kabasares - Newtonian Mechanics - Rocket Sketch.png|**Fig. 134** Rocket and exhaust sketched in the notes.]]

#### Types of collisions

- In a perfectly inelastic collision, the objects stick together. The total momentum is conserved for an isolated system and the kinetic energy changes.
- In an elastic collision, the objects bounce apart and both total momentum and kinetic energy are conserved.

### PDF page 90

#### Lecture (October 18, 2013) — Separation of a popcorn kernel

A $2\,\unit{g}$ popcorn kernel initially at rest pops into two pieces. The $0.5\,\unit{g}$ piece moves at $5\,\unit{m/s}$. Find the velocity of the $1.5\,\unit{g}$ piece.

$$
p_i=p_f,\qquad
0=m_1v_{1f}+m_2v_{2f},\qquad
v_{2f}=-\frac{m_1v_{1f}}{m_2}
=-\frac{(0.0005)(5)}{0.0015}\,\unit{m/s}\approx-1.7\,\unit{m/s}.
$$

The second piece moves opposite the first.

#### Inelastic collisions in one dimension

The lecture repeats the example of two balls that stick after colliding. With $m_1=0.5\,\unit{kg}$, $v_{1i}=10\,\unit{m/s}$, $m_2=0.2\,\unit{kg}$, and $v_{2i}=-15\,\unit{m/s}$, the common velocity is

$$
v_f=\frac{m_1v_{1i}+m_2v_{2i}}{m_1+m_2}=+2.86\,\unit{m/s}.
$$

#### Elastic collisions in one dimension

Start with conservation of momentum and conservation of kinetic energy:

$$
p_{1i}+p_{2i}=p_{1f}+p_{2f},\qquad
K_{1i}+K_{2i}=K_{1f}+K_{2f}.
$$

### PDF page 91

#### Final velocities for elastic collisions

![[Kyle Kabasares - Newtonian Mechanics - One Dimensional Elastic Collision.png|**Fig. 135** Two masses approaching and then moving apart in one dimension.]]

$$
\begin{aligned}
v_{1f}
&=\frac{m_1-m_2}{m_1+m_2}v_{1i}
+\frac{2m_2}{m_1+m_2}v_{2i},\\
v_{2f}
&=\frac{2m_1}{m_1+m_2}v_{1i}
+\frac{m_2-m_1}{m_1+m_2}v_{2i}.
\end{aligned}
$$

#### Limiting cases

If $m_2$ starts at rest, $v_{2i}=0$ and the equations reduce to

$$
v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i},
\qquad
v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}.
$$

- For $m_1\ll m_2$, $v_{1f}\approx-v_{1i}$ and $v_{2f}\approx0$. The lighter object bounces back as it would off a wall.
- For $m_1\gg m_2$, $v_{1f}\approx v_{1i}$ and $v_{2f}\approx2v_{1i}$. The heavy object slows very little and the light object leaves at about twice the incident speed.

### PDF page 92

#### Elastic collision with a stationary ball

A $1\,\unit{kg}$ ball moving at $5\,\unit{m/s}$ strikes a $2\,\unit{kg}$ ball at rest. For an elastic collision,

$$
v_{1f}=\frac{1-2}{1+2}(5\,\unit{m/s})=-\tfrac53\,\unit{m/s},
\qquad
v_{2f}=\frac{2(1)}{1+2}(5\,\unit{m/s})=\tfrac{10}{3}\,\unit{m/s}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Elastic Collision with Stationary Ball.png|**Fig. 136** The incoming ball reverses direction and the target ball moves forward at about 3.33 m/s.]]

#### Conservation of momentum in two dimensions

Both elastic and inelastic collisions can occur at an angle. Resolve momentum into components. In this example, $m_1$ approaches rightward and $m_2$ approaches downward and leftward at angle $\theta$ below the leftward horizontal. The masses stick together.

![[Kyle Kabasares - Newtonian Mechanics - Oblique Inelastic Collision.png|**Fig. 137** Incoming directions, components for the second ball, and the common final velocity.]]

The momentum balances are $p_{1ix}+p_{2ix}=p_{Tx}$ and $p_{1iy}+p_{2iy}=p_{Ty}$. Thus

$$
v_{Tx}=\frac{m_1v_{1i}-m_2v_{2i}\cos\theta}{m_1+m_2},
\qquad
v_{Ty}=\frac{-m_2v_{2i}\sin\theta}{m_1+m_2}.
$$

Find the final speed and direction for $m_1=3\,\unit{kg}$, $m_2=2\,\unit{kg}$, $v_{1i}=5\,\unit{m/s}$, $v_{2i}=3\,\unit{m/s}$, and $\theta=30^\circ$.

### PDF page 93

#### Two-dimensional collision, continued

The common velocity has components $v_{Tx}=1.96\,\unit{m/s}$ and $v_{Ty}=-0.6\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Oblique Collision Final Velocity.png|**Fig. 138** The final velocity points down and to the right.]]

$$
\phi=\arctan\left(\frac{0.6}{1.96}\right)\approx17^\circ
\quad\text{below the positive }x\text{ axis},
\qquad
v_T=\sqrt{1.96^2+(-0.6)^2}\,\unit{m/s}=2.05\,\unit{m/s}.
$$

A homework sketch asks for the velocity of the recoiling nucleus. It marks an electron moving up, a gamma ray moving right, and a recoil directed down and left. The nucleus label appears to read carbon-14.

![[Kyle Kabasares - Newtonian Mechanics - Homework Recoil Sketch.png|**Fig. 139** Perpendicular outgoing momenta and the direction of recoil.]]

#### Two-dimensional impulse and momentum (continued October 21, 2013)

Find the components of the average force of a wall on a ball. The ball strikes and leaves at equal angles $\theta$ relative to the horizontal normal. Assume equal incident and outgoing speeds, $\lvert v_i\rvert=\lvert v_f\rvert=v$.

![[Kyle Kabasares - Newtonian Mechanics - Ball Rebounding from Vertical Wall.png|**Fig. 140** The ball approaches from the upper left and rebounds toward the lower left.]]

Use $\Delta\vec p=\vec J=\vec F_{\mathrm{avg}}\Delta t$. Its component equations are $p_{fx}-p_{ix}=F_{\mathrm{avg},x}\Delta t$ and $p_{fy}-p_{iy}=F_{\mathrm{avg},y}\Delta t$. For the horizontal component,

$$
F_{\mathrm{avg},x}
=\frac{m(-v\cos\theta)-m(v\cos\theta)}{\Delta t}
=-\frac{2mv\cos\theta}{\Delta t}.
$$

### PDF page 94

#### Ball rebounding from a wall, continued

The incoming and outgoing vertical components are both $-v\sin\theta$ because the speed and angle are unchanged. Therefore

$$
F_{\mathrm{avg},y}\Delta t=m(-v_f\sin\theta)-m(-v_i\sin\theta)=0.
$$

#### Rotational kinematics

For a fixed radius $r$, arc length and angle in radians are related by $s=r\theta$.

![[Kyle Kabasares - Newtonian Mechanics - Arc Length and Angle.png|**Fig. 141** An infinitesimal angle and its corresponding arc length.]]

$$
\mechanical{v}=\frac{\mathrm{d}s}{\mathrm{d}t}=r\omega,\qquad
\omega=\frac{\mathrm{d}\theta}{\mathrm{d}t},\qquad
\mechanical{a}_{\mathrm{t}}=\frac{\mathrm{d}v}{\mathrm{d}t}=r\alpha,\qquad
\alpha=\frac{\mathrm{d}\omega}{\mathrm{d}t}.
$$

Angular velocity has units of $\unit{rad/s}$ or $\unit{s^{-1}}$, and angular acceleration has units of $\unit{rad/s^2}$ or $\unit{s^{-2}}$. Convert revolutions per minute before using equations in radians. Use the right-hand rule for the direction of $\vec\omega$.

![[Kyle Kabasares - Newtonian Mechanics - Angular Velocity Right Hand Rule.png|**Fig. 142** Tangential motion and the direction of the angular velocity vector.]]

For constant linear or angular acceleration, the corresponding equations are

$$
\begin{aligned}
v_f&=v_0+at, & \omega_f&=\omega_0+\alpha t,\\
x_f&=x_0+v_0t+\tfrac12at^2, & \theta_f&=\theta_0+\omega_0t+\tfrac12\alpha t^2,\\
v_f^2&=v_0^2+2a(x_f-x_0), & \omega_f^2&=\omega_0^2+2\alpha(\theta_f-\theta_0).
\end{aligned}
$$

### PDF page 95

#### Rotational kinematics examples

Points A and B on a rigid disk sweep through the same angle in the same time, so $\omega_A=\omega_B$. Point B is farther from the axis, so $s_A<s_B$ and $v_A<v_B$.

![[Kyle Kabasares - Newtonian Mechanics - Rotating Disk Two Radii.png|**Fig. 143** Two points sweep out different arcs through the same angle.]]

A CD player starts at $33\,\unit{rev/min}$ and takes $20\,\unit{s}$ to stop. Convert the initial speed:

$$
\omega_0=33\,\unit{rev/min}\,
\frac{2\pi\,\unit{rad}}{1\,\unit{rev}}\,
\frac{1\,\unit{min}}{60\,\unit{s}}
\approx3.46\,\unit{rad/s}.
$$

From $\omega_f=\omega_0+\alpha t$ with $\omega_f=0$, $\alpha=-\omega_0/t=-0.173\,\unit{rad/s^2}$.

A bicycle wheel rotates through $3\pi\,\unit{rad}$ from rest with $\alpha=30\,\unit{rad/s^2}$. Since $\omega_f^2=\omega_0^2+2\alpha(\theta_f-\theta_0)$, $\omega_f=\sqrt{2\alpha\Delta\theta}=23.78\,\unit{rad/s}$.

#### October 23, 2013 — Center of mass

The center of mass and center of gravity coincide under conditions such as a uniform gravitational field. For particle $i$, Newton's second law gives $F_i=m_i a_i$. Summing over particles and using $a_i=\mathrm{d}^2 x_i/\mathrm{d}t^2$,

$$
F_T=\sum_i F_i=\sum_i m_i a_i
=\sum_i m_i\frac{\mathrm{d}^2 x_i}{\mathrm{d}t^2}
=\frac{\mathrm{d}^2}{\mathrm{d}t^2}\left(\sum_i m_i x_i\right)
=m_T a_T.
$$

### PDF page 96

#### Center of mass, continued

Equate the total force to $m_T a_T$ for a total mass $m_T=\sum_i m_i=M$. Define the representative position by $m_Tx_T=\sum_i m_ix_i$. For point masses,

$$
x_T=x_{\mathrm{CM}}=\frac{\sum_i m_i x_i}{M},
\qquad
y_{\mathrm{CM}}=\frac{\sum_i m_i y_i}{M}.
$$

The center of mass is the mass-weighted average position. The net force accelerates it as though the system's mass were concentrated there. The center of mass may lie outside the material of the object.

#### Three masses at the corners of a right triangle

The masses $m_1=1\,\unit{kg}$, $m_2=2\,\unit{kg}$, and $m_3=3\,\unit{kg}$ are at $(0,0)$, $(4,0)$, and $(4,3)$.

![[Kyle Kabasares - Newtonian Mechanics - Three Masses on a Right Triangle.png|**Fig. 144** Positions of the point masses relative to the origin at the lower left.]]

$$
x_{\mathrm{CM}}=\frac{(1)(0)+(2)(4)+(3)(4)}{1+2+3}=\frac{10}{3},
\qquad
y_{\mathrm{CM}}=\frac{(1)(0)+(2)(0)+(3)(3)}{1+2+3}=\frac32.
$$

For the assembly of squares, treat each square as a point mass at its center and use the same formulas.

![[Kyle Kabasares - Newtonian Mechanics - Assembly of Squares for Center of Mass.png|**Fig. 145** Equal square masses in an arrangement with the coordinate origin at the lower left.]]

### PDF page 97

#### Center of mass of an extended object

Divide the object into small pieces of mass $\Delta m_i$ at positions $x_i$. The sum approaches an integral as the pieces become infinitesimal.

![[Kyle Kabasares - Newtonian Mechanics - Extended Object Mass Elements.png|**Fig. 146** A rigid body divided into small mass elements.]]

$$
x_{\mathrm{CM}}=\lim_{\Delta m_i\to0}\frac{\sum_i x_i\Delta m_i}{M}
=\frac{1}{M}\int x\,\mathrm{d}m.
$$

Use the corresponding expressions for $y_{\mathrm{CM}}$ and $z_{\mathrm{CM}}$.

#### Uniform rigid rod

Find the center of mass of a rod of length $L$ and mass $M$. Its uniform linear density is $\lambda=M/L=\mathrm{d}m/\mathrm{d}x$, so $\mathrm{d}m=\lambda\,\mathrm{d}x$.

![[Kyle Kabasares - Newtonian Mechanics - Mass Element of Uniform Rod.png|**Fig. 147** Rod with an element at distance x from the left end.]]

$$
x_{\mathrm{CM}}=\frac{1}{M}\int x\,\mathrm{d}m
=\frac{\lambda}{M}\int_0^L x\,\mathrm{d}x
=\frac{\lambda L^2}{2M}=\frac L2.
$$

### PDF page 98

#### Rod with linearly varying density

Find the center of mass of a rod of length $L$ and mass $M$ with linear density $\lambda=bx=\mathrm{d}m/\mathrm{d}x$, where $b$ is constant.

$$
x_{\mathrm{CM}}=\frac{1}{M}\int x\,\mathrm{d}m
=\frac bM\int_0^L x^2\,\mathrm{d}x
=\frac{bL^3}{3M}.
$$

Since $M=\int_0^L bx\,\mathrm{d}x=bL^2/2$, the center of mass is at $x_{\mathrm{CM}}=2L/3$.

#### October 25, 2013 — Uniform triangular lamina

The triangle has base $a$, height $b$, and uniform surface density $\sigma=M/A$. A vertical strip of width $\mathrm{d}x$ and height $y$ has mass $\mathrm{d}m=\sigma\,\mathrm{d}A=\sigma y\,\mathrm{d}x$.

![[Kyle Kabasares - Newtonian Mechanics - Triangular Lamina Mass Elements.png|**Fig. 148** The triangular lamina, the similar triangles, and a vertical strip used for integration.]]

By similar triangles, $x/y=a/b$ and $y=(b/a)x$. Therefore

$$
x_{\mathrm{CM}}=\frac{\sigma b}{Ma}\int_0^a x^2\,\mathrm{d}x
=\frac{\sigma a^2b}{3M}.
$$

Using $\sigma=2M/(ab)$ gives $x_{\mathrm{CM}}=2a/3$. Similarly, $y_{\mathrm{CM}}=b/3$.

### PDF page 99

#### Center-of-mass motion

Knowing the positions, velocities, and accelerations of the particles at an instant determines those of the center of mass. For constant masses, differentiate $x_{\mathrm{CM}}=\sum_i m_ix_i/M_T$:

$$
v_{\mathrm{CM},x}=\frac{\mathrm{d}x_{\mathrm{CM}}}{\mathrm{d}t}
=\frac{\sum_i m_i v_{ix}}{M_T},
\qquad
a_{\mathrm{CM},x}=\frac{\sum_i m_i a_{ix}}{M_T}.
$$

#### Moment of inertia

Moment of inertia $I$, also called rotational inertia, measures how difficult it is to give an object angular acceleration $\alpha$. It plays a role in rotational dynamics analogous to that of mass for linear acceleration. It depends on both the amount of mass and how the mass is arranged relative to the rotation axis.

For three objects of equal mass and radius, the mass is concentrated increasingly toward the center from left to right. The first has the largest moment of inertia.

![[Kyle Kabasares - Newtonian Mechanics - Comparing Three Moments of Inertia.png|**Fig. 149** Three mass distributions with the same outer radius and total mass.]]

### PDF page 100

#### Derivation of moment of inertia

A point particle of mass $m$ rotates about an axis at radius $r$. With $v=r\omega$,

$$
K=\tfrac12mv^2=\tfrac12m(r\omega)^2=\tfrac12I\omega^2,
\qquad \mechanical{I}=\mechanical{m}\mechanical{r}^{\,2}.
$$

![[Kyle Kabasares - Newtonian Mechanics - Point Particle about a Rotation Axis.png|**Fig. 150** Radius and tangent velocity for a point mass.]]

In the equal-mass and equal-outer-radius example, $I_{\mathrm{disc}}<I_{\mathrm{donut}}<I_{\mathrm{wheel}}$. Placing more of the mass farther from the axis increases $I$.

![[Kyle Kabasares - Newtonian Mechanics - Mass Elements of Disk and Ring.png|**Fig. 151** Mass elements at different radii in a disk and a ring.]]

#### Moment of inertia of four point masses

The diagram places two $1\,\unit{kg}$ masses and two $2\,\unit{kg}$ masses at the corners of a rectangle centered at the origin. Its half-height is $a=1\,\unit{m}$ and its half-width is $b=2\,\unit{m}$. For point masses, $I=\sum_i m_i r_i^2$, with $r_i$ measured perpendicular to the chosen axis.

![[Kyle Kabasares - Newtonian Mechanics - Four Point Masses on a Rectangle.png|**Fig. 152** Four masses at horizontal distances b and vertical distances a from the origin.]]

1. For an axis perpendicular to the plane through the origin, all $r_i=\sqrt{a^2+b^2}=\sqrt5\,\unit{m}$. Then $I=(5+5+10+10)\,\unit{kg\,m^2}=30\,\unit{kg\,m^2}$.
2. For the $y$ axis, all $r_i=b$. Then $I=(4+4+8+8)\,\unit{kg\,m^2}=24\,\unit{kg\,m^2}$.

### PDF page 101

#### Lecture (October 28, 2013) — Moment of inertia of extended objects

Divide the object into small adjacent mass elements $\Delta m_i$. In the limit,

$$
\mechanical{I}=\lim_{\Delta m_i\to0}\sum_i r_i^2\Delta m_i
=\int r^2\,\mathrm{d}m.
$$

As for center of mass, use linear density $\lambda=\mathrm{d}m/\mathrm{d}x$, surface density $\sigma=\mathrm{d}m/\mathrm{d}A$, or volume density $\rho=\mathrm{d}m/\mathrm{d}V$ as appropriate.

#### Uniform rod rotating about one end

The $y$ axis is perpendicular to the rod and passes through one end. The rod extends from $x=0$ to $x=L$ and has uniform $\lambda=M/L$, so $\mathrm{d}m=\lambda\,\mathrm{d}x$.

![[Kyle Kabasares - Newtonian Mechanics - Rod Rotating about One End.png|**Fig. 153** The rotation axis and a mass element at distance x.]]

$$
I=\int_0^L x^2\lambda\,\mathrm{d}x
=\lambda\left[\tfrac13x^3\right]_0^L=\tfrac13 ML^2.
$$

#### Uniform rod rotating about its midpoint

The same axis direction now passes through the center of the rod.

![[Kyle Kabasares - Newtonian Mechanics - Rod Rotating about Its Midpoint.png|**Fig. 154** The centered rod extends from −L/2 to L/2.]]

$$
I=\lambda\int_{-L/2}^{L/2}x^2\,\mathrm{d}x
=\frac{\lambda}{3}\left[\left(\frac L2\right)^3-\left(-\frac L2\right)^3\right]
=\tfrac1{12}ML^2.
$$

The moment of inertia is smaller about the midpoint, making the rod easier to accelerate for a given torque. For a thin hoop and a solid cylinder about their central symmetry axes, $I_{\mathrm{hoop}}=MR^2$ and $I_{\mathrm{cylinder}}=\tfrac12MR^2$.

![[Kyle Kabasares - Newtonian Mechanics - Hoop and Solid Cylinder.png|**Fig. 155** Thin hoop and solid cylinder of radius R.]]

### PDF page 102

#### Spherical moments of inertia

About an axis through the center, a solid sphere has $I=\tfrac25 MR^2$ and a thin spherical shell has $I=\tfrac23 MR^2$. At equal mass and radius the shell has the larger moment of inertia.

![[Kyle Kabasares - Newtonian Mechanics - Solid Sphere and Spherical Shell.png|**Fig. 156** A solid sphere and a hollow spherical shell.]]

#### Parallel-axis theorem

For an axis parallel to a known axis through the center of mass and separated from it by distance $d$,

$$
\mechanical{I}_{\mathrm{new}}=\mechanical{I}_{\mathrm{CM}}+\mechanical{M}\mechanical{d}^{\,2}.
$$

For a uniform rod, the shift from midpoint to end gives $I_{\mathrm{end}}=\tfrac1{12}ML^2+M(L/2)^2=\tfrac13 ML^2$. For an axis at $x=L/4$ from the end, the sketch places the new axis a distance $L/4$ from the center of mass.

![[Kyle Kabasares - Newtonian Mechanics - Rod Axis One Quarter of Length from End.png|**Fig. 157** The rod's center of mass and the shifted parallel axis.]]

For a solid sphere rotating about a tangent axis at distance $R$ from its center, $I_{\mathrm{new}}=\tfrac25MR^2+MR^2=\tfrac75MR^2$.

![[Kyle Kabasares - Newtonian Mechanics - Sphere Rotating about a Tangent Axis.png|**Fig. 158** The shifted axis is one radius from the center.]]

#### Rolling motion

The rotational kinetic energy is $K_{\mathrm{rot}}=\tfrac12I\omega^2$. An object that rolls also has the translational kinetic energy of its center of mass:

$$
\energy{K}_{\mathrm{tot}}=\energy{K}_{\mathrm{trans}}+\energy{K}_{\mathrm{rot}},
\qquad
v_{\mathrm{CM}}=r\omega\quad\text{for rolling without slipping}.
$$

### PDF page 103

#### Lecture (October 30, 2013) — Rolling and energy

For a wheel rolling to the right without slipping, $v_{\mathrm{CM}}=r\omega$. Its kinetic energy is the sum of rotation about the center of mass and translation of that center.

![[Kyle Kabasares - Newtonian Mechanics - Wheel Rotation and Translation.png|**Fig. 159** Tangential motion around the axle and rightward motion of the wheel's center.]]

The work–energy theorem applies to rotation, $W=\Delta K_{\mathrm{rot}}=K_{\mathrm{rot},f}-K_{\mathrm{rot},i}$ for rotational work. Conservation of energy can include rotational kinetic energy.

#### Solid ball rolling down an incline

A solid ball of mass $2\,\unit{kg}$ and radius $0.5\,\unit{m}$ rolls from rest down a vertical drop of $h=1\,\unit{m}$. Find the speed of its center at the bottom.

![[Kyle Kabasares - Newtonian Mechanics - Solid Ball Rolling down an Incline.png|**Fig. 160** Ball at the start of the incline and its vertical drop.]]

Take the final gravitational potential energy as zero. With $I=\tfrac25mr^2$ and $\omega_f=v_f/r$,

$$
mgh=\tfrac12mv_f^2+\tfrac12I\omega_f^2
=\tfrac12mv_f^2+\tfrac15mv_f^2
=\tfrac7{10}mv_f^2.
$$

Hence $v_f=\sqrt{\tfrac{10}{7}gh}$.

### PDF page 104

#### Pivoted rod released from rest

A uniform rod of length $L$ pivots at one end. Released from horizontal, its center of mass drops by $L/2$ at the bottom of the swing.

![[Kyle Kabasares - Newtonian Mechanics - Pivoted Rod Falling from Horizontal.png|**Fig. 161** Initial and final orientations and the drop of the center of mass.]]

Using $I=\tfrac13mL^2$ about the pivot,

$$
mg\frac L2=\tfrac12I\omega^2,\qquad
\omega=\sqrt{\frac{3g}{L}},\qquad
v_{\mathrm{end}}=L\omega=\sqrt{3gL}.
$$

#### Atwood's machine revisited

A hanging mass $m$ falls through $h$ from rest while unwinding a cord from a pulley of mass $M$ and radius $R$. Model the pulley as a solid disk, $I=\tfrac12MR^2$.

![[Kyle Kabasares - Newtonian Mechanics - Falling Mass Turns Massive Pulley.png|**Fig. 162** The hanging mass before and after a drop of height h.]]

Conservation of energy with $\omega_f=v_f/R$ gives

$$
mgh=\tfrac12mv_f^2+\tfrac12I\omega_f^2
=\left(\tfrac12m+\tfrac14M\right)v_f^2,
\qquad
v_f=\sqrt{\frac{mgh}{\tfrac12m+\tfrac14M}}.
$$

#### Practice problem

Find the speed after mass $m_2$ falls through $y=\Delta s$, drawing $m_1$ along a rough table with coefficient $\mu_{\mathrm{k}}$. The solid disk pulley has $I=\tfrac12m_3R^2$. Start with $W_{\mathrm{nc}}=\Delta K+\Delta U$ and $W_{\mathrm{nc}}=F_{\mathrm{k}}\Delta s\cos180^\circ$, where friction acts on $m_1$.

![[Kyle Kabasares - Newtonian Mechanics - Massive Pulley and Rough Table.png|**Fig. 163** Two blocks attached by a rope over a massive pulley.]]

### PDF page 105

#### Moment of inertia of a disk

Use $I=\int r^2\,\mathrm{d}m$ and $\sigma=\mathrm{d}m/\mathrm{d}A$. A thin ring of radius $r$ and width $\mathrm{d}r$ has area $\mathrm{d}A=2\pi r\,\mathrm{d}r$, so $\mathrm{d}m=\sigma(2\pi r\,\mathrm{d}r)$.

![[Kyle Kabasares - Newtonian Mechanics - Annular Element of a Disk.png|**Fig. 164** The ring unwrapped into a strip of length 2πr and width dr.]]

#### November 1, 2013 — Cross product

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

### PDF page 106

#### Right-hand rule for cross products

In a right-handed coordinate system, $\hat{\imath}\times\hat{\jmath}=\hat{k}$, $\hat{k}\times\hat{\jmath}=-\hat{\imath}$, and $\hat{\jmath}\times\hat{k}=\hat{\imath}$. A basis vector crossed with itself gives zero. The page gives Wolfram Alpha input notation as two angle-bracketed component triples separated by the word “cross.”

#### Torque

Torque measures the tendency of a force to rotate an object about an axis. It is the rotational counterpart of force.

$$
\mechanical{\vec\tau}=\mechanical{\vec r}\times\mechanical{\vec F},
\qquad
\tau=rF_\perp=rF\sin\theta.
$$

Here $\vec r$ points from the pivot to the point where the force is applied, $\theta$ is the angle between $\vec r$ and $\vec F$, and only the perpendicular force component $F_\perp$ contributes. Express torque in $\unit{N\,m}$. The right-hand rule gives the direction. With positive torque out of the page, clockwise is negative and counterclockwise is positive.

![[Kyle Kabasares - Newtonian Mechanics - Torque Right Hand Rule.png|**Fig. 166** Direction of torque for perpendicular force and position vectors.]]

#### Net torque on a wrench

A downward force $F_1$, due to gravity, acts at distance $r_1$ from the pivot. An angled force $F_2$ acts at distance $r_2$. Their torques are clockwise and counterclockwise, respectively.

![[Kyle Kabasares - Newtonian Mechanics - Two Torques on a Wrench.png|**Fig. 167** Pivot and the two applied forces.]]

$$
\tau_{\mathrm{net}}=-r_1F_1\sin90^\circ+r_2F_2\sin\theta
=-r_1F_1+r_2F_2\sin\theta.
$$

### PDF page 107

#### Net torque on a cylinder

The forces $F_1$ and $F_2$ are tangent to surfaces of radii $r_1$ and $r_2$. By the right-hand rule, $\tau_1$ points into the page and $\tau_2$ points out.

![[Kyle Kabasares - Newtonian Mechanics - Tangential Forces on Two Radii.png|**Fig. 168** Two tangential forces produce opposing torques.]]

$$
\tau_{\mathrm{net}}=\tau_1+\tau_2=-r_1F_1\sin90^\circ+r_2F_2\sin90^\circ=-r_1F_1+r_2F_2.
$$

In the angled rod example, the perpendicular magnitudes are $mg\cos\theta$ for gravity and $F\cos\theta$ for the applied force. The sine or cosine depends on how the angle is defined.

![[Kyle Kabasares - Newtonian Mechanics - Perpendicular Force Components on a Rod.png|**Fig. 169** Force components perpendicular to the pivoted rod.]]

#### Relationship between torque and angular acceleration

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

### PDF page 108

#### Hanging mass turning a solid disk

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

#### November 6, 2013 — Two masses and a massive pulley

Mass $m_2$ moves on a frictionless table and mass $m_1$ hangs from a cord. The pulley has inertia $I$ and radius $r$. The two tensions act in opposite rotational senses.

![[Kyle Kabasares - Newtonian Mechanics - Frictionless Table Massive Pulley Forces.png|**Fig. 172** Table setup and the forces on the pulley and the sliding mass.]]

For the pulley, $rT_2-rT_1=-I\alpha$. For $m_2$, $T_2=m_2a$ and $N=m_2g$. The margin gives the axle reaction components for a pulley of mass $m_{\mathrm{p}}$ with stationary center:

$$
R_x-T_2=0,\qquad R_y-m_{\mathrm{p}}g-T_1=0.
$$

### PDF page 109

#### Two masses and a massive pulley, continued

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

#### Equilibrium

An object in equilibrium has zero linear and angular acceleration. The conditions are $\sum\vec F=0$ and $\sum\vec\tau=0$.

#### Seesaw

A uniform board of mass $m_b=4.1\,\unit{kg}$ supports two children of masses $m_1=51\,\unit{kg}$ and $m_2=35.7\,\unit{kg}$. The first child is $1.5\,\unit{m}$ from the pivot. Find the second child's distance and the normal force at the pivot.

![[Kyle Kabasares - Newtonian Mechanics - Seesaw with Two Children.png|**Fig. 174** The pivot, weights, and distances along the board.]]

$$
N-m_bg-m_1g-m_2g=0,\qquad
N=(m_b+m_1+m_2)g\approx890\,\unit{N}.
$$

Take torques about the pivot. The weight of the board acts through the pivot and has zero torque, so $\tau_1+\tau_2=0$.

### PDF page 110

#### Seesaw, continued

The two weights produce opposing torques, so $r_1m_1g=r_2m_2g$. The second child sits at $r_2=r_1m_1/m_2=(1.5\,\unit{m})(51/35.7)=2.14\,\unit{m}$.

#### Biceps force holding a ball

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

#### November 8, 2013 — Ladder

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

### PDF page 111

#### Ladder, continued

The wall normal equals the floor friction, $N_1=f_{\mathrm{s}}$. At impending slip, $f_{\mathrm{s}}=\mu_{\mathrm{s}}N_2$, with $N_2=(m_1+m_2)g$.

![[Kyle Kabasares - Newtonian Mechanics - Ladder Force Projections.png|**Fig. 177** Components perpendicular to the ladder for calculating torques.]]

$$
\mu_{\mathrm{s,min}}=\frac{N_1}{N_2}
=\frac{(r_{\mathrm{CM}}m_1+r_m m_2)g\cos\theta}
{r_{N_1}\sin\theta\,(m_1+m_2)g}.
$$

For the uniform ladder, $r_{\mathrm{CM}}=L/2$, $r_m=d$, and $r_{N_1}=L$.

#### Angular momentum

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

### PDF page 112

The net torque changes angular momentum according to $\mechanical{\vec\tau}_{\mathrm{net}}=\mathrm{d}\mechanical{\vec L}/\mathrm{d}t$, with $\vec L=\vec r\times\vec p$. This parallels $\vec F_{\mathrm{net}}=\mathrm{d}\vec p/\mathrm{d}t$.

#### Lecture (November 13, 2013) — Angular momentum and rotation

For a point mass in a circle, $L=mvr\sin90^\circ=m(r\omega)r=mr^2\omega=I\omega$. The same expression for the axial component applies to many particles rotating together about a fixed axis, with $I=\sum_i m_i r_i^2$.

![[Kyle Kabasares - Newtonian Mechanics - Tangential Momentum of Rotating Particle.png|**Fig. 180** The particle's velocity is perpendicular to its radius.]]

#### Conservation of angular momentum

With zero net external torque about the axis, $L_i=L_f$, so $I_i\omega_i=I_f\omega_f$.

For a solid sphere of mass $M=1\,\unit{kg}$ and radius $R=0.5\,\unit{m}$ spinning at $10\,\unit{rad/s}$,

$$
L=I\omega=\tfrac25 MR^2\omega
=\tfrac25(1)(0.5)^2(10)\,\unit{kg\,m^2/s}
=1\,\unit{kg\,m^2/s}.
$$

#### Clay dropped onto a potter's wheel

The wheel is a solid disk of mass $M$ and radius $R$, spinning at $10\,\unit{rad/s}$ with $I=\tfrac12MR^2$. A small lump of clay sticks to the wheel at radius $R$. Treat it as a point mass. Its initial angular momentum component about the wheel axis is zero because it falls parallel to that axis. Find the new angular speed.

![[Kyle Kabasares - Newtonian Mechanics - Clay Sticking to Potter Wheel.png|**Fig. 181** The disk before and after a point mass sticks at its rim.]]

### PDF page 113

#### Potter's wheel, continued

Let $I_d$ denote the disk inertia and $I_b$ the clay's inertia. The clay contributes zero initial angular momentum about the axis. Therefore

$$
L_i=L_f,\qquad I_d\omega_i=(I_d+I_b)\omega_f,
\qquad
\omega_f=\frac{I_d\omega_i}{I_d+I_b}.
$$

#### Clay hits an upright rod

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

### PDF page 114

#### Clay and pivoted rod, continued

Initially only the clay is moving. In terms of $v_f=v_i/2$ and $\omega_f=v_f/d$,

$$
\begin{aligned}
K_i&=\tfrac12(M/3)v_i^2=\tfrac23Mv_f^2,\\
K_f&=\tfrac12(M/3)v_f^2+\tfrac12(\tfrac13Md^2)(v_f/d)^2
=\tfrac13Mv_f^2.
\end{aligned}
$$

The kinetic energy after impact is half its initial value.

#### Derivation of the torque relation

Differentiate $\vec L=\vec r\times\vec p$. Since $\vec v\times m\vec v=0$,

$$
\frac{\mathrm{d}\vec L}{\mathrm{d}t}
=\frac{\mathrm{d}\vec r}{\mathrm{d}t}\times\vec p+
\vec r\times\frac{\mathrm{d}\vec p}{\mathrm{d}t}
=\vec r\times\vec F=\vec\tau.
$$

The handwritten expansion reverses the factors in the force term.

#### Lecture (November 15, 2013) — Review

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

### PDF page 115

#### Review, continued

2. For the solid disk pulley, $\tau_{\mathrm{net}}=RT_1-RT_2=-I\alpha$. Since $I=\tfrac12MR^2$ and $\alpha=a/R$,

$$
RT_1-RT_2=-\left(\tfrac12MR^2\right)\frac aR.
$$

![[Kyle Kabasares - Newtonian Mechanics - Exam Review Pulley Torque.png|**Fig. 185** The tensions, weight, and reaction on the pulley.]]

3. Find the center of mass of a rod with $\lambda=\mathrm{d}m/\mathrm{d}x=bx^2$ from $0$ to $L$. The page also recalls $I=\int r^2\,\mathrm{d}m$, which becomes $\int x^2\,\mathrm{d}m$ for this rod about its end.

![[Kyle Kabasares - Newtonian Mechanics - Rod with Quadratic Density.png|**Fig. 186** A mass element at distance x from the end.]]

$$
x_{\mathrm{CM}}=\frac bM\int_0^L x^3\,\mathrm{d}x=\frac{bL^4}{4M},
\qquad
M=b\int_0^L x^2\,\mathrm{d}x=\frac{bL^3}{3}.
$$

Substitute the mass to get $x_{\mathrm{CM}}=3L/4$.

#### Lecture (November 20, 2013) — Oscillatory motion

Periodic motion repeats its features. The waveform can have a shape other than a sine or cosine. The period $T$ is the time for one oscillation and the frequency $f=1/T$ is the number of oscillations per second. Frequency is measured in hertz, $\unit{Hz}=\unit{s^{-1}}$. The amplitude $A$ measures the maximum deviation of the plotted quantity from its central value. The plotted quantity may be position, velocity, or acceleration.

![[Kyle Kabasares - Newtonian Mechanics - Period and Amplitude of an Oscillation.png|**Fig. 187** A repeating waveform marked with amplitude and period.]]

For the stated hearing range $20$–$20{,}000\,\unit{Hz}$, the periods at the low and high ends are $5\times10^{-2}\,\unit{s}$ and $5\times10^{-5}\,\unit{s}$, respectively. The handwritten periods have hertz labels and the minimum and maximum period labels are exchanged.

#### Simple harmonic motion

A restoring force proportional to displacement from equilibrium gives simple harmonic motion. Hooke's law, $F=-kx$, is an example.

### PDF page 116

#### Mass–spring differential equation

Attach a spring to a block on a frictionless surface and let it oscillate.

![[Kyle Kabasares - Newtonian Mechanics - Horizontal Mass Spring Oscillator.png|**Fig. 188** A block oscillates horizontally on a spring.]]

Hooke's law gives $F=-kx$ and Newton's second law gives $F=ma$. Since $a=\mathrm{d}v/\mathrm{d}t=\mathrm{d}^2x/\mathrm{d}t^2$,

$$
m\frac{\mathrm{d}^2x}{\mathrm{d}t^2}+kx=0.
$$

An algebraic equation such as $x^2-x=0$ has the numbers $0$ and $1$ as solutions. The differential equation instead determines a function $x(t)$ giving the block's displacement from equilibrium at any time. Try $x=A\cos(\omega t)$, with amplitude $A$ and angular frequency $\omega$. Then

$$
\frac{\mathrm{d}x}{\mathrm{d}t}=-\omega A\sin(\omega t),
\qquad
\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=-\omega^2 A\cos(\omega t).
$$

Substitution gives $(k-m\omega^2)A\cos(\omega t)=0$. The cosine vanishes at some times, such as $\omega t=\pi/2$ and $3\pi/2$. For a nonzero-amplitude solution at all times, set $k-m\omega^2=0$.

$$
\omega=\sqrt{\frac km},\qquad
T=\frac{2\pi}{\omega}=\frac1f=2\pi\sqrt{\frac mk}.
$$

The ideal linear spring's period is independent of amplitude. Many systems obey $F=-kx$ only approximately at small amplitudes. Sine and cosine with any phase also solve the equation.

### PDF page 117

#### Phase of simple harmonic motion

The expression $x=A\cos(\omega t\pm\phi)$ also solves the oscillator equation. The phase constant is measured in radians. A negative phase in the cosine argument shifts the graph to the right.

![[Kyle Kabasares - Newtonian Mechanics - Phase Shift of a Cosine.png|**Fig. 189** Two cosine curves with different phase constants.]]

#### November 22, 2013 — Velocity and acceleration

For $x=A\cos(\omega t)$,

$$
v=\frac{\mathrm{d}x}{\mathrm{d}t}=-\omega A\sin(\omega t),
\qquad
a=\frac{\mathrm{d}^2x}{\mathrm{d}t^2}=-\omega^2 A\cos(\omega t).
$$

At equilibrium $a=0$ and the speed is $\omega A$. At either turning point $v=0$ and the acceleration magnitude is $\omega^2A$. A phase-shifted position graph with positive initial slope has positive initial velocity.

![[Kyle Kabasares - Newtonian Mechanics - Position Velocity and Acceleration of Oscillator.png|**Fig. 190** Time traces for displacement, velocity, and acceleration.]]

#### Torsional oscillation

The rotational counterpart of Hooke's law is $\tau=-k\theta$, with $k$ here the torsion constant. Since $\tau=I\alpha$,

$$
I\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}=-k\theta,
\qquad
\omega=\sqrt{\frac{k}{I}},
\qquad
\theta=A\cos(\omega t).
$$

![[Kyle Kabasares - Newtonian Mechanics - Torsional Oscillator Sketch.png|**Fig. 191** Angular displacement of a suspended disk.]]

### PDF page 118

#### Physical pendulum

Any rigid body that swings about a pivot can act as a physical pendulum. Let $L$ be the distance from the pivot to the center of mass. The pivot force has zero moment arm and gravity provides the restoring torque.

![[Kyle Kabasares - Newtonian Mechanics - Physical Pendulum and Gravity Torque.png|**Fig. 192** Pivot, center of mass, and the component of weight that contributes torque.]]

$$
\tau=-mgL\sin\theta=I\alpha,
\qquad
I\frac{\mathrm{d}^2\theta}{\mathrm{d}t^2}=-mgL\sin\theta.
$$

The Taylor expansion is $\sin\theta=\theta-\theta^3/3!+\cdots$. For small angles in radians, $\sin\theta\approx\theta\approx\tan\theta$. The approximate equation is $I\ddot\theta=-mgL\theta$, so $\theta=A\cos(\omega t)$ for release from rest, with $\omega=\sqrt{mgL/I}$ and $I$ taken about the pivot.

#### Solid sphere as a pendulum

A sphere of mass $M$ and radius $R$ swings with its center at distance $L$ from the pivot. Assume $R=L/2$.

![[Kyle Kabasares - Newtonian Mechanics - Solid Sphere on a Pendulum Arm.png|**Fig. 193** The sphere's center lies a distance L from the pivot.]]

$$
I=I_{\mathrm{CM}}+ML^2=\tfrac25M(L/2)^2+ML^2=\tfrac{11}{10}ML^2.
$$

$$
\omega=\sqrt{\frac{10g}{11L}},\qquad
T_{\mathrm{sphere}}=2\pi\sqrt{\frac{11L}{10g}},
\qquad
T_{\mathrm{point}}=2\pi\sqrt{\frac Lg}.
$$

### PDF page 119

#### Lecture (November 25, 2013) — Energy of a mass–spring oscillator

Use $x=A\cos(\omega t)$, $v=-\omega A\sin(\omega t)$, and $\omega^2=k/m$.

$$
\begin{aligned}
U&=\tfrac12kx^2=\tfrac12kA^2\cos^2(\omega t),\\
K&=\tfrac12mv^2=\tfrac12m\omega^2A^2\sin^2(\omega t)=\tfrac12kA^2\sin^2(\omega t),\\
E_{\mathrm{tot}}&=K+U=\tfrac12kA^2=\mathrm{constant}.
\end{aligned}
$$

At displacement $x$, $\tfrac12mv^2+\tfrac12kx^2=\tfrac12kA^2$. The signed velocity is

$$
v=\pm\sqrt{\frac{k}{m}(A^2-x^2)}
=\pm\omega\sqrt{A^2-x^2}.
$$

The last handwritten expression uses $\omega$ instead of $\omega^2$ inside the root.

#### Homework — Initial velocity at equilibrium

Give the block initial velocity $v_i$ at the spring's equilibrium position and find the amplitude. The initial energy is entirely kinetic, $E_{\mathrm{tot}}=\tfrac12mv_i^2$, and at the turning point it is $\tfrac12kA^2$.

![[Kyle Kabasares - Newtonian Mechanics - Initial Velocity at Spring Equilibrium.png|**Fig. 194** The block receives a rightward initial velocity at equilibrium.]]

#### Vertical simple harmonic oscillator

Gently lower a mass onto a hanging spring. The equilibrium shifts downward by $d$. The vertical system has the same frequency as the horizontal system with the same mass and spring constant.

![[Kyle Kabasares - Newtonian Mechanics - Shifted Equilibrium of Vertical Spring.png|**Fig. 195** Unloaded spring and loaded spring with equilibrium shifted downward.]]

### PDF page 120

#### Damped harmonic motion

Include a resistive force proportional to velocity, $F_d=-bv$, where $b$ is the damping coefficient and the minus sign indicates opposition to motion.

$$
m\ddot x=-kx\quad\text{without damping},
\qquad
m\ddot x=-kx-b\dot x\quad\text{with damping}.
$$

For an underdamped oscillator, one solution is $x=Ae^{-bt/(2m)}\cos(\omega_d t)$. The exponential is the envelope factor, and $A$ is the envelope amplitude at $t=0$.

![[Kyle Kabasares - Newtonian Mechanics - Three Damping Regimes.png|**Fig. 196** Underdamped (a), critically damped (b), and overdamped (c) responses.]]

For weak damping, the damped angular frequency, frequency, and period are close to the undamped values, and the amplitude decreases exponentially. The notes describe critical and overdamping by comparing the damping and spring forces. The regime boundaries in this model instead follow from $b^2-4mk$, with negative, zero, and positive values corresponding to underdamping, critical damping, and overdamping.

#### Time for the amplitude to reach 37 percent

Use the envelope to find when the amplitude is $1/e\approx0.37$ of its original value:

$$
Ae^{-bt/(2m)}=\frac A e,\qquad
\frac{bt}{2m}=1,\qquad t=\frac{2m}{b}.
$$

### PDF page 121

#### Lecture (December 2, 2013) — Wave motion

The amplitude is $A$, the wavelength $\lambda$ is the distance between successive points in the same phase, and $v$ is the propagation speed. Water, sound, and light are examples of traveling waves.

![[Kyle Kabasares - Newtonian Mechanics - Wavelength and Amplitude.png|**Fig. 197** One full wavelength marked on the waveform.]]

Transverse waves include light and waves on a string. Longitudinal waves include sound and compression waves on a spring. Their maxima and minima in density are compressions and rarefactions. Water surface waves exhibit both transverse and longitudinal motion. The sketch uses “node” for a zero crossing and “antinodes” for extrema. These terms describe fixed locations in a standing wave.

![[Kyle Kabasares - Newtonian Mechanics - Transverse and Longitudinal Waves.png|**Fig. 198** Transverse wave profile and longitudinal compressions and rarefactions.]]

#### One-dimensional traveling waves

At constant speed $v$, a pulse moves a distance $vt$ in time $t$.

![[Kyle Kabasares - Newtonian Mechanics - Traveling Pulse at Two Times.png|**Fig. 199** The pulse at zero time and after moving to the right.]]

$$
\frac{\partial^2 y}{\partial x^2}=\frac1{v^2}\frac{\partial^2 y}{\partial t^2}.
$$

The right-moving and left-moving forms are $y=f(x-vt)$ and $y=f(x+vt)$, respectively. A sum of one wave of each form is also a solution.

#### Speed of a wave on a string

For tension $F$ and linear mass density $\mu$, $v=\sqrt{F/\mu}$. A $10\,\unit{kg}$ mass hangs from a $1\,\unit{m}$ rope of mass $0.2\,\unit{kg}$. Pluck the rope. Using $\mu=0.2\,\unit{kg/m}$ and approximating $F$ by the weight of the hanging mass gives $v=\sqrt{mg/\mu}\approx22\,\unit{m/s}$.

### PDF page 122

#### Traveling waves, continued

The speed is $v=f\lambda$. Wavelength is measured in meters and frequency in hertz. For a sinusoidal wave,

$$
y(x,t)=A\cos(kx\pm\omega t),\qquad
k=\frac{2\pi}{\lambda},\qquad v=\frac{\omega}{k}.
$$

Here $k$ is the wave number in $\unit{m^{-1}}$ and $\omega$ is angular frequency.

Three ocean wave crests span $17\,\unit{s}$ from first to third, and the distance between crests is about $20\,\unit{m}$. Two periods fit in the interval, so $T=8.5\,\unit{s}$, $f\approx0.118\,\unit{Hz}$, and $v=f\lambda\approx2.35\,\unit{m/s}$.

![[Kyle Kabasares - Newtonian Mechanics - Three Ocean Wave Crests.png|**Fig. 200** The time between the first and third crests spans two periods.]]

For $A=0.75\,\unit{m}$, $k=2\pi/(20\,\unit{m})\approx0.314\,\unit{m^{-1}}$ and $\omega=2\pi f\approx0.74\,\unit{s^{-1}}$. For rightward propagation, $y=0.75\cos(0.314x-0.74t)$ with values in SI units.

#### Intensity of spherical waves

A source that radiates sound or light uniformly in all directions gives

$$
\signal{I}=\frac{\energy{P}}{4\pi r^2}.
$$

Intensity decreases with distance $r$ and is measured in watts per square meter.

#### Doppler shift

A moving sound source such as a fire truck can be heard at a shifted frequency. The emitted frequency is $f$ and the observed frequency is $f'$.

$$
f'=f\frac{v\pm v_o}{v\mp v_s}.
$$

Here $v$ is the sound speed, taken as $343\,\unit{m/s}$, and $v_o,v_s$ are observer and source speeds relative to the medium. Choose the numerator plus sign when the observer moves toward the source and the denominator minus sign when the source moves toward the observer.

![[Kyle Kabasares - Newtonian Mechanics - Stationary and Moving Sound Source.png|**Fig. 201** Waves arriving at an observer from stationary and approaching sources.]]

### PDF page 123

#### Lecture (December 6, 2013) — Archimedes' principle

The buoyant force equals the weight of the displaced fluid. For a submerged cube of side $h$, take the top pressure as $P_0$. The bottom pressure is $P_0+\rho gh$ and each horizontal face has area $A=h^2$. Pressure is force per unit area.

![[Kyle Kabasares - Newtonian Mechanics - Buoyancy from Pressure Difference.png|**Fig. 202** The cube, fluid pressure at the top and bottom, and forces on the two faces.]]

$$
F_B=F_{\mathrm{bottom}}-F_{\mathrm{top}}
=(P_0+\rho gh)A-P_0A
=\rho gh^3.
$$

In general, $\mechanical{F}_B=\mechanical{\rho}_f\mechanical{V}_f\mechanical{g}$, with $V_f$ the displaced fluid volume and $\rho_f$ its density.

#### Floating steel ship

A ship contains air, and the displaced water provides the upward force that balances its weight. Use a ship of mass $m=2\times10^5\,\unit{kg}$ with rectangular footprint $w=15\,\unit{m}$ by $L=25\,\unit{m}$.

![[Kyle Kabasares - Newtonian Mechanics - Floating Ship and Displaced Volume.png|**Fig. 203** The waterline, buoyant force, and weight of the ship.]]

$$
F_B-mg=0,\qquad
mg=1.96\times10^6\,\unit{N},\qquad
F_B=\rho_wghwL.
$$

With $\rho_w=1{,}000\,\unit{kg/m^3}$, the ship floats with $h\approx0.53\,\unit{m}$ submerged.

### PDF page 124

#### Displacement and buoyancy

If a dense metal chunk is dropped from a ship and sinks, the water level goes down. On the ship it accounts for displacement equal to its weight in water. Once submerged it displaces only its own volume, and the lighter ship also floats higher.

#### Balloon carrying cargo

The example is titled “hot air balloon” and uses helium as the lifting gas. Find the maximum cargo mass $m_c$ for a spherical balloon of radius $r$ and envelope mass $m_b$.

![[Kyle Kabasares - Newtonian Mechanics - Balloon Carrying Cargo.png|**Fig. 204** Helium-filled balloon, payload, and upward buoyant force.]]

With displaced air volume equal to helium volume, $V=\tfrac43\pi r^3$,

$$
\sum F_y=\rho_{\mathrm{air}}Vg-\rho_{\mathrm{He}}Vg-m_bg-m_cg=0.
$$

Solve this equation for $m_c$.

#### Fluid dynamics

The simplifying assumptions are inviscid flow, steady flow with velocity at each point constant in time, incompressibility with constant density, and irrotational flow.

For steady incompressible flow in a pipe, mass conservation gives $A_1v_1=A_2v_2$. The volume flow rate is $R=Av$ in $\unit{m^3/s}$. A larger cross section means a smaller flow speed at fixed flow rate.

![[Kyle Kabasares - Newtonian Mechanics - Continuity in a Widening Pipe.png|**Fig. 205** Flow from a narrow to a wider section.]]

#### Bernoulli's equation (continued December 9, 2013)

The quantity $P+\tfrac12\rho v^2+\rho gy$ is constant along a streamline for steady incompressible inviscid flow.

![[Kyle Kabasares - Newtonian Mechanics - Bernoulli Pipe at Two Heights.png|**Fig. 206** Two cross sections with different pressures, speeds, and elevations.]]

$$
P_1+\tfrac12\rho v_1^2+\rho gy_1=P_2+\tfrac12\rho v_2^2+\rho gy_2.
$$

The page labels the densities $\rho_1$ and $\rho_2$ and states that they are equal in the usual case considered here.

### PDF page 125

#### December 9, 2013 — Flow through a rising pipe

Find the exit speed $v_2$ for the pipe on the preceding page. The pipe rises by $1\,\unit{m}$ and $A_1=A_2/2$. Take $y_1=0$, $P_1=P_2$ because both ends are open to air, and $\rho_1=\rho_2=\rho$.

Bernoulli's equation reduces to $\tfrac12v_1^2=\tfrac12v_2^2+gy_2$. Continuity gives $v_1=(A_2/A_1)v_2=2v_2$. Therefore

$$
\tfrac12(2v_2)^2-\tfrac12v_2^2=gy_2,\qquad
v_2=\sqrt{\tfrac23gy_2}.
$$

#### Torricelli's law

Find the initial efflux speed from a small hole of area $A_1$ at height $y_1$. The tank is open, with free surface at $y_2$ and surface area $A_2$.

![[Kyle Kabasares - Newtonian Mechanics - Torricelli Efflux from a Tank.png|**Fig. 207** Open tank, free surface, and outlet.]]

Both points are at atmospheric pressure $P_0$. Since $A_2\gg A_1$, continuity gives $v_2\approx0$. Bernoulli's equation reduces to

$$
\tfrac12\rho v_1^2+\rho gy_1=\rho gy_2,\qquad
v_1=\sqrt{2g(y_2-y_1)}.
$$

Continuity and Bernoulli's equation imply that, at the same elevation, pressure falls where flow speed increases.

### PDF page 126

#### Pressure in a narrowing pipe

The two sections are at the same height, so Bernoulli's height terms cancel. Continuity gives $A_1v_1=A_2v_2$, and $A_2<A_1$ implies $v_2>v_1$.

![[Kyle Kabasares - Newtonian Mechanics - Pressure Drop in a Narrowing Pipe.png|**Fig. 208** The pipe narrows from cross section A₁ to A₂.]]

$$
P_1+\tfrac12\rho v_1^2=P_2+\tfrac12\rho v_2^2,\qquad
P_2-P_1=\tfrac12\rho(v_1^2-v_2^2)<0.
$$

The notes call this the Bernoulli effect. In the wing sketch, the air moves faster above the wing, so lower pressure there contributes an upward force. In the chimney sketch, faster flow over the opening reduces pressure there and helps draw the smoke out.

![[Kyle Kabasares - Newtonian Mechanics - Pressure Above and Below a Wing.png|**Fig. 209** Wing section and airflow above and below it.]]
![[Kyle Kabasares - Newtonian Mechanics - Wind across a Chimney.png|**Fig. 210** Wind passing across the chimney opening.]]

#### Newton's law of universal gravitation

Every pair of particles attracts with a force proportional to the product of their masses and inversely proportional to the square of their separation.

$$
\mechanical{F}=\frac{\mechanical{G}\mechanical{m}_1\mechanical{m}_2}{\mechanical{r}^{\,2}}.
$$

### PDF page 127

#### Notes from the December 4, 2013 lecture — Doppler effect

Use $+v_o$ and $-v_s$ for observer and source motion toward each other, and $-v_o$ and $+v_s$ for motion away. Set the corresponding speed to zero for a stationary observer or source.

A fire truck emits a $400\,\unit{Hz}$ tone and drives at $33.5\,\unit{m/s}$. An oncoming car drives at $24.6\,\unit{m/s}$. With sound speed $343\,\unit{m/s}$, the observed frequencies are

$$
\begin{aligned}
f'_{\mathrm{approach}}&=400\frac{343+24.6}{343-33.5}\,\unit{Hz}\approx475\,\unit{Hz},\\
f'_{\mathrm{recede}}&=400\frac{343-24.6}{343+33.5}\,\unit{Hz}\approx338\,\unit{Hz}.
\end{aligned}
$$

If the car is moving away while the truck moves toward it,

$$
f'=400\frac{343-24.6}{343-33.5}\,\unit{Hz}\approx412\,\unit{Hz}.
$$

#### Fluid statics

Pressure is force per unit area. For uniform pressure, $P=F/A$. Locally, $P=\mathrm{d}F_\perp/\mathrm{d}A$. A pascal is $\unit{N/m^2}$, and $1\,\unit{atm}\approx1.013\times10^5\,\unit{Pa}$. Density is $\rho=m/V$ in $\unit{kg/m^3}$, so $m=\rho V$.

A hammer exerts $500\,\unit{N}$ on a nail with tip area $1\,\unit{mm^2}=10^{-6}\,\unit{m^2}$. The pressure at the tip is

$$
P=\frac{500\,\unit{N}}{10^{-6}\,\unit{m^2}}
=5\times10^8\,\unit{Pa}\approx5{,}000\,\unit{atm}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Force | Interaction that changes momentum. |
| $\mechanical{a}$ | $\unit{m/s^2}$ | Acceleration | Rate of change of velocity. |
| $\mechanical{v}$ | $\unit{m/s}$ | Velocity | Rate of change of position. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Displacement | Final position minus initial position. |
| $\Delta t$ | $\unit{s}$ | Elapsed time | Duration of the motion being measured. |
| $\mechanical{g}$ | $\unit{m/s^2}$ | Gravitational acceleration | Local acceleration of free fall. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Mass per unit volume. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic flux density | Vector used in the component exercise. |
| $\mechanical{a}_t$ | $\unit{m/s^2}$ | Tangential acceleration | Component along the path that changes speed. |
| $\mechanical{a}_c$ | $\unit{m/s^2}$ | Centripetal acceleration | Inward component that changes the direction of velocity. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Proportionality between net force and acceleration. |
| $\mechanical{\vec W}$ | $\unit{N}$ | Weight | Gravitational force on an object. |
| $\mechanical{N}$ | $\unit{N}$ | Normal force | Contact force perpendicular to the supporting surface. |
| $\mechanical{f}_{\mathrm{s}},\mechanical{f}_{\mathrm{k}}$ | $\unit{N}$ | Static and kinetic friction | Contact force parallel to the surfaces. |
| $\mechanical{\mu}_{\mathrm{s}},\mechanical{\mu}_{\mathrm{k}}$ | $1$ | Friction coefficients | Material-dependent ratios for maximum static and kinetic friction. |
| $\mechanical{f}_{\mathrm{r}}$ | $\unit{N}$ | Rolling resistance | Effective force opposing rolling. |
| $\mechanical{\mu}_{\mathrm{r}}$ | $1$ | Rolling resistance coefficient | Ratio of rolling resistance to normal force in the model used here. |
| $\mechanical{D}$ | $\unit{N}$ | Drag force magnitude | Fluid resistance at speed $v$ relative to the fluid. |
| $\mechanical{b}$ | $\unit{kg/s}$ | Linear drag coefficient | Proportionality factor in $D=bv$. |
| $\mechanical{b}$ | $\unit{kg/m}$ | Quadratic drag coefficient | Proportionality factor in $D=bv^2$. |
| $C$ | $1$ | Drag coefficient | Dimensionless factor in the quadratic drag law. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Fluid density | Mass per volume of the surrounding fluid. |
| $\mechanical{A}$ | $\unit{m^2}$ | Cross-sectional area | Area presented to the flow in the drag model. |
| $\energy{W}$ | $\unit{J}$ | Work | Line integral of force along the path of displacement. |
| $\mechanical{k}$ | $\unit{N/m}$ | Spring constant | Force per unit displacement from equilibrium in Hooke's law. |
| $\energy{U}_{\mathrm{s}}$ | $\unit{J}$ | Elastic potential energy | Energy stored in the spring at displacement $x$. |
| $\energy{K}$ | $\unit{J}$ | Kinetic energy | Energy of motion, $\tfrac12mv^2$ for a point mass. |
| $\energy{P}$ | $\unit{W}$ | Power | Work done per unit time. |
| $\energy{U}_g$ | $\unit{J}$ | Gravitational potential energy | Energy associated with height in the uniform field, $mgy$. |
| $\energy{E}_{\mathrm{mech}}$ | $\unit{J}$ | Mechanical energy | Sum of kinetic and potential energies. |
| $\mechanical{\vec p}$ | $\unit{kg\,m/s}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec J}$ | $\unit{N\,s}$ | Impulse | Time integral of the net force, equal to the momentum change. |
| $\mechanical{\vec r}_{\mathrm{CM}}$ | $\unit{m}$ | Center-of-mass position | Mass-weighted average position of the system. |
| $\mechanical{\lambda}$ | $\unit{kg/m}$ | Linear mass density | Mass per unit length. |
| $\mechanical{\sigma}$ | $\unit{kg/m^2}$ | Surface mass density | Mass per unit area. |
| $\mechanical{I}$ | $\unit{kg\,m^2}$ | Moment of inertia | Measure of resistance to angular acceleration about the specified axis. |
| $\mechanical{\vec\tau}$ | $\unit{N\,m}$ | Torque | Cross product of position from the pivot and applied force. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2/s}$ | Angular momentum | Moment of linear momentum about the specified origin. |
| $\mechanical{k}$ | $\unit{N\,m/rad}$ | Torsion constant | Restoring torque magnitude per unit angular displacement. |
| $\signal{k}$ | $\unit{m^{-1}}$ | Wave number | Spatial phase change per unit distance, $2\pi/\lambda$. |
| $\signal{I}$ | $\unit{W/m^2}$ | Wave intensity | Power transmitted per unit area. |
| $\mechanical{F}_B$ | $\unit{N}$ | Buoyant force | Upward force equal to the displaced fluid's weight. |
| $\mechanical{P}$ | $\unit{Pa}$ | Pressure | Normal force per unit area. |
| $\mechanical{R}$ | $\unit{m^3/s}$ | Volume flow rate | Volume passing through a cross section per unit time. |
| $\mechanical{G}$ | $\unit{N\,m^2/kg^2}$ | Gravitational constant | Proportionality constant in Newton's law of gravitation. |
