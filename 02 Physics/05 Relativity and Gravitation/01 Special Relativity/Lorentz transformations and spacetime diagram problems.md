---
title: "Lorentz transformations and spacetime diagram problems"
---

> [!TLDR]
> Transform differences between events and interpret contracted lengths, coordinate velocities, and light cones.

## Worked lecture material

##### A Buick in a closet

A Buick has rest length $7\,\unit{m}$. Find the speed at which its measured length in the closet frame equals the closet depth, $2\,\unit{m}$. The contraction formula gives $\mechanical{\gamma}=\mechanical{L}_0/\mechanical{L}=7/2$. Inverting the Lorentz factor yields

$$
\mechanical{v}
=\mechanical{c}\sqrt{1-\frac1{\mechanical{\gamma}^2}}
=\mechanical{c}\sqrt{1-\left(\frac27\right)^2}
\simeq0.96\mechanical{c}.
$$

In the driver’s frame the Buick is $7\,\unit{m}$ long and the moving closet is $2\,\unit{m}/(7/2)\simeq0.571\,\unit{m}$ deep. Thus the driver never assigns simultaneous positions with both ends of the car inside the closet. The two descriptions use different simultaneity slices.

##### Lorentz transformations

The lecture starts by recalling the Galilean equations for $S'$ moving to the right relative to $S$.

$$
\mechanical{x}'=\mechanical{x}-\mechanical{v}t,\qquad
\mechanical{y}'=\mechanical{y},\qquad
\mechanical{z}'=\mechanical{z},\qquad
t'=t.
$$

The Lorentz transformation from $S$ to $S'$ is

$$
\begin{aligned}
\mechanical{x}' &= \mechanical{\gamma}(\mechanical{x}-\mechanical{v}t),&
\mechanical{y}' &= \mechanical{y},&
\mechanical{z}' &= \mechanical{z},\\
t' &= \mechanical{\gamma}\left(t-\frac{\mechanical{v}\mechanical{x}}{\mechanical{c}^2}\right).
\end{aligned}
$$

Both the longitudinal position and the time coordinate change. When $\mechanical{v}/\mechanical{c}\ll 1$,

$$
\mechanical{\gamma}
=\left(1-\frac{\mechanical{v}^2}{\mechanical{c}^2}\right)^{-1/2}
\approx 1+\frac12\frac{\mechanical{v}^2}{\mechanical{c}^2}
\approx 1.
$$

In matrix form, with the time coordinate written as $t$,

$$
\begin{pmatrix}\mechanical{x}'\\\mechanical{y}'\\\mechanical{z}'\\t'\end{pmatrix}
=
\begin{pmatrix}
\mechanical{\gamma} & 0 & 0 & -\mechanical{\gamma}\mechanical{v}\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
-\mechanical{\gamma}\mechanical{v}/\mechanical{c}^2 & 0 & 0 & \mechanical{\gamma}
\end{pmatrix}
\begin{pmatrix}\mechanical{x}\\\mechanical{y}\\\mechanical{z}\\t\end{pmatrix}.
$$

The handwritten matrix appears under the heading “Inverse Lorentz Transformation.” Its signs correspond to the forward transformation above, and the time row uses the coefficient from the scalar equation. Interchange the primed and unprimed coordinates and replace $\mechanical{v}$ by $-\mechanical{v}$ to obtain the inverse.

$$
\begin{aligned}
\mechanical{x} &= \mechanical{\gamma}(\mechanical{x}'+\mechanical{v}t'),&
\mechanical{y} &= \mechanical{y}',&
\mechanical{z} &= \mechanical{z}',\\
t &= \mechanical{\gamma}\left(t'+\frac{\mechanical{v}\mechanical{x}'}{\mechanical{c}^2}\right).
\end{aligned}
$$

##### Time dilation revisited

A clock at rest at $\mechanical{x}'=0$ passes the common origin at $t=t'=0$. In $S$, it reaches $\mechanical{x}=\mechanical{L}$ at $t=\mechanical{L}/\mechanical{v}$. Transform that event to the clock's frame.

$$
\begin{aligned}
\mechanical{x}' &= \mechanical{\gamma}\left(\mechanical{L}-\mechanical{v}\frac{\mechanical{L}}{\mechanical{v}}\right)=0,\\
t' &= \mechanical{\gamma}\left(\frac{\mechanical{L}}{\mechanical{v}}
-\frac{\mechanical{v}\mechanical{L}}{\mechanical{c}^2}\right)
=\frac{\mechanical{L}}{\mechanical{\gamma}\mechanical{v}}.
\end{aligned}
$$

In the clock example, the elapsed time in its rest frame is $t'=t_1/\mechanical{\gamma}$, where $t_1=\mechanical{L}/\mechanical{v}$ is the elapsed time in $S$.

##### Length contraction

A stick has rest length $\mechanical{D}$ and moves rightward at speed $\mechanical{v}$ in $S$. The sketch shows the two endpoints being marked with a knife at the same time $t_1=t_2$ in $S$. Transform their positions to the stick frame.

$$
\begin{aligned}
\mechanical{D}
&=\mechanical{x}_2'-\mechanical{x}_1'\\
&=\mechanical{\gamma}(\mechanical{x}_2-\mechanical{v}t_2)
-\mechanical{\gamma}(\mechanical{x}_1-\mechanical{v}t_1)\\
&=\mechanical{\gamma}(\mechanical{x}_2-\mechanical{x}_1).
\end{aligned}
$$

Thus the length measured in $S$ is $\mechanical{x}_2-\mechanical{x}_1=\mechanical{D}/\mechanical{\gamma}$.

##### Clock lag revisited

Two synchronized clocks move to the right. Label the front clock $1$ and the back clock $2$. Compare their readings at simultaneous events in $S$, so that $t_1=t_2$ and $\mechanical{x}_1-\mechanical{x}_2=\mechanical{D}/\mechanical{\gamma}$, where $\mechanical{D}$ is their rest separation. The front clock reads earlier by

$$
\begin{aligned}
t_2'-t_1'
&=\mechanical{\gamma}\left(t_2-\frac{\mechanical{v}\mechanical{x}_2}{\mechanical{c}^2}\right)
-\mechanical{\gamma}\left(t_1-\frac{\mechanical{v}\mechanical{x}_1}{\mechanical{c}^2}\right)\\
&=\mechanical{\gamma}\frac{\mechanical{v}}{\mechanical{c}^2}
(\mechanical{x}_1-\mechanical{x}_2)
=\mechanical{\gamma}\frac{\mechanical{v}}{\mechanical{c}^2}\frac{\mechanical{D}}{\mechanical{\gamma}}.
\end{aligned}
$$

##### Velocity transformations

For the Galilean transformation $\mechanical{x}'=\mechanical{x}-\mechanical{v}t$ with $t'=t$, differentiation gives $\mechanical{V}_x'=\mechanical{V}_x-\mechanical{v}$. Here $\mechanical{V}_x,\mechanical{V}_y,\mechanical{V}_z$ are the velocity components of an object and $\mechanical{v}$ is the speed of $S'$ along the positive $x$ axis of $S$.

For the Lorentz transformation, differentiate both $\mechanical{x}'$ and $t'$ with respect to $t$.

$$
\begin{aligned}
\frac{d\mechanical{x}'}{dt}
&=\mechanical{\gamma}\frac{d}{dt}(\mechanical{x}-\mechanical{v}t)
=\mechanical{\gamma}(\mechanical{V}_x-\mechanical{v}),\\
\frac{dt'}{dt}
&=\mechanical{\gamma}\frac{d}{dt}\left(t-\frac{\mechanical{v}\mechanical{x}}{\mechanical{c}^2}\right)
=\mechanical{\gamma}\left(1-\frac{\mechanical{v}\mechanical{V}_x}{\mechanical{c}^2}\right).
\end{aligned}
$$

Divide each coordinate derivative by $dt'/dt$. The transverse coordinates satisfy $\mechanical{y}'=\mechanical{y}$ and $\mechanical{z}'=\mechanical{z}$.

$$
\begin{aligned}
\mechanical{V}_x' &=\frac{d\mechanical{x}'}{dt'}
=\frac{d\mechanical{x}'/dt}{dt'/dt}
=\frac{\mechanical{V}_x-\mechanical{v}}{1-\mechanical{v}\mechanical{V}_x/\mechanical{c}^2},\\
\mechanical{V}_y' &=\frac{d\mechanical{y}'}{dt'}
=\frac{\mechanical{V}_y}{\mechanical{\gamma}(1-\mechanical{v}\mechanical{V}_x/\mechanical{c}^2)},\\
\mechanical{V}_z' &=\frac{d\mechanical{z}'}{dt'}
=\frac{\mechanical{V}_z}{\mechanical{\gamma}(1-\mechanical{v}\mechanical{V}_x/\mechanical{c}^2)}.
\end{aligned}
$$

Squaring the components and adding gives

$$
\mechanical{V}_x'^{\,2}+\mechanical{V}_y'^{\,2}+\mechanical{V}_z'^{\,2}
=\frac{(\mechanical{V}_x-\mechanical{v})^2+
(\mechanical{V}_y^2+\mechanical{V}_z^2)/\mechanical{\gamma}^2}
{(1-\mechanical{v}\mechanical{V}_x/\mechanical{c}^2)^2}.
$$

The component equations give $\mechanical{\gamma}^2$ in the transverse terms, where the handwritten last line has $\mechanical{\gamma}$.

For light, $\mechanical{V}_y^2+\mechanical{V}_z^2=\mechanical{c}^2-\mechanical{V}_x^2$ in $S$. The velocity transformation gives

$$
\begin{aligned}
\mechanical{V}_x'^{\,2}+\mechanical{V}_y'^{\,2}+\mechanical{V}_z'^{\,2}
&=\frac{(\mechanical{V}_x-\mechanical{v})^2+
(1-\mechanical{v}^2/\mechanical{c}^2)(\mechanical{c}^2-\mechanical{V}_x^2)}
{(1-\mechanical{V}_x\mechanical{v}/\mechanical{c}^2)^2}\\
&=\frac{\mechanical{c}^2+\mechanical{v}^2\mechanical{V}_x^2/\mechanical{c}^2-2\mechanical{V}_x\mechanical{v}}
{(1-\mechanical{V}_x\mechanical{v}/\mechanical{c}^2)^2}\\
&=\frac{(\mechanical{c}-\mechanical{V}_x\mechanical{v}/\mechanical{c})^2}
{(1-\mechanical{V}_x\mechanical{v}/\mechanical{c}^2)^2}
=\mechanical{c}^2.
\end{aligned}
$$

For an object at rest in $S$, $\mechanical{V}_x=\mechanical{V}_y=\mechanical{V}_z=0$. In $S'$ it has $\mechanical{V}_x'=-\mechanical{v}$ and $\mechanical{V}_y'=\mechanical{V}_z'=0$.

**Example.** In $S$, platform $A$ moves right and platform $B$ moves left, each with speed $\mechanical{v}=0.9\mechanical{c}$. An observer on $A$ measures the velocity of $B$ by taking $\mechanical{V}_x=-\mechanical{v}$ in the velocity transformation.

$$
\mechanical{V}_x'
=\frac{\mechanical{V}_x-\mechanical{v}}{1-\mechanical{V}_x\mechanical{v}/\mechanical{c}^2}
=\frac{-2\mechanical{v}}{1+\mechanical{v}^2/\mechanical{c}^2}
=-\frac{1.8}{1.81}\mechanical{c}.
$$

##### Relativity of simultaneity

Two events that are simultaneous in one frame can occur at different times in another. In the sketch, an observer on Earth looks toward two supernovae, $S_1$ and $S_2$, in different galaxies. The example supposes that in Earth's frame we deduce that $S_1$ occurred before $S_2$.

##### Thought experiment

From our spaceship, we see two identical ships approach from opposite directions at equal speeds. When the nose of each reaches the tail of the other, we set off two flashes between the ships, one at $\mechanical{x}_1$ and one at $\mechanical{x}_2$. They occur simultaneously in our frame. Do the passengers also find the flashes simultaneous?

![[Kyle Kabasares - Special Relativity - Simultaneous flashes between passing spaceships.png|**Fig. 4** The two flash locations lie at opposite ends of the overlapping spaceships.]]

Observer $A$ moves toward $\mechanical{x}_2$, so the light from there reaches $A$ first. Observer $B$ moves toward $\mechanical{x}_1$ and receives its light first. In each ship's own frame, its observer is at rest midway between its nose and tail, so equal light travel times from its endpoints imply opposite orders of emission for the two ships.

In $B$'s rest frame, ship $A$ is length-contracted. The tail of $A$ passes the nose of $B$ and triggers the flash at $\mechanical{x}_1$. Only later does the nose of $A$ pass the tail of $B$ and trigger the flash at $\mechanical{x}_2$.

![[Kyle Kabasares - Special Relativity - Passing spaceships in the frame of B.png|**Fig. 5** The shorter ship A passes the two ends of ship B in succession as viewed from B's rest frame.]]

##### Spaceship travel time

A ship travels toward a star at $\mechanical{v}=(4/5)\mechanical{c}$. At departure the separation in the star's rest frame is $\mechanical{L}_0=6\;\unit{ly}$. The Lorentz factor is

$$
\mechanical{\gamma}=\frac{1}{\sqrt{1-(4/5)^2}}=\frac53\approx1.67.
$$

In the ship's frame, the initial separation is $\mechanical{L}=\mechanical{L}_0/\mechanical{\gamma}=3.6\;\unit{ly}$. In this frame, the star moves toward the ship. Taking the ship's clock to read zero at departure, it reads

$$
t=\frac{\mechanical{L}}{\mechanical{v}}
=\frac{3.6\;\unit{ly}}{(4/5)\mechanical{c}}=4.5\;\unit{yr}
$$

when the ship and star meet.

##### A clock passing a stick

A stick of length $\mechanical{D}$ is at rest in our frame. A clock moves to the right at speed $\mechanical{v}$, reading zero as it passes the left end of the stick. Our stationary clocks measure an interval $t=\mechanical{D}/\mechanical{v}$ between the two crossings. The traveling clock runs slow in our frame by a factor of $\mechanical{\gamma}$. When it reaches the right end, it reads

$$
\tau=\frac{\mechanical{D}}{\mechanical{v}}\sqrt{1-\frac{\mechanical{v}^2}{\mechanical{c}^2}}.
$$

In the clock's frame the stick moves left at speed $\mechanical{v}$, and its right end reaches the stationary clock after the same proper interval $\tau$. The stick's length in this frame is

$$
\mechanical{d}=\mechanical{v}\tau=\mechanical{D}\sqrt{1-\frac{\mechanical{v}^2}{\mechanical{c}^2}}
=\frac{\mechanical{D}}{\mechanical{\gamma}}.
$$

The two sketches compare the clock moving along the full rest length in our frame and the shorter stick moving past the clock in its frame. This contraction applies to length along the direction of relative motion.

##### Transverse light clock review

The source is a distance $\mechanical{D}$ below a mirror. In the clock's rest frame a pulse travels vertically up and back, giving $\Delta t_0=2\mechanical{D}/\mechanical{c}$. In a frame where the clock moves horizontally, the outgoing and return paths form an isosceles triangle. On the outgoing leg the clock moves horizontally through $\mechanical{v}\Delta t/2$, while the light travels $\mechanical{c}\Delta t/2$.

$$
\mechanical{D}^2+\left(\frac{\mechanical{v}\Delta t}{2}\right)^2
=\left(\frac{\mechanical{c}\Delta t}{2}\right)^2,
\qquad
\Delta t=\frac{2\mechanical{D}}{\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}.
$$

The transverse light clock calculation can be rearranged as

$$
\mechanical{D}^2
=\frac{\Delta t^2}{4}(\mechanical{c}^2-\mechanical{v}^2),\qquad
\Delta t^2
=\frac{4\mechanical{D}^2}{\mechanical{c}^2(1-\mechanical{v}^2/\mechanical{c}^2)}.
$$

Taking the positive square root gives $\Delta t=2\mechanical{D}/(\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2})$.

##### Longitudinal light clock

A light clock passes us from left to right at $\mechanical{v}=(3/5)\mechanical{c}$. In its rest frame the flashbulb is $\mechanical{D}=\mechanical{L}_0=10.0\;\unit{m}$ behind the mirror, along the line of motion. In our frame its length is

$$
\mechanical{\gamma}
=\frac{1}{\sqrt{1-9/25}}=\frac54,\qquad
\mechanical{L}=\frac{\mechanical{L}_0}{\mechanical{\gamma}}=8.0\;\unit{m}.
$$

The sketches show the rest arrangement, then three snapshots in our frame. At emission the separation is $\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$. By the time the light reflects, both the bulb and mirror have moved right by $\mechanical{v}\Delta t_{\mathrm f}$. When the returning light reaches the bulb, their total displacement from emission is $\mechanical{v}(\Delta t_{\mathrm f}+\Delta t_{\mathrm b})$.

On the outgoing leg of the longitudinal light clock, the mirror recedes from the light. The light travels the initial contracted separation plus the distance the mirror moves during $\Delta t_{\mathrm f}$.

$$
\mechanical{c}\Delta t_{\mathrm f}
=\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}+\mechanical{v}\Delta t_{\mathrm f},
\qquad
\Delta t_{\mathrm f}=\frac{\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
{\mechanical{c}-\mechanical{v}}.
$$

On the return leg the bulb moves toward the light, reducing the distance it travels.

$$
\mechanical{c}\Delta t_{\mathrm b}
=\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}-\mechanical{v}\Delta t_{\mathrm b},
\qquad
\Delta t_{\mathrm b}=\frac{\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
{\mechanical{c}+\mechanical{v}}.
$$

The round-trip time is

$$
\Delta t=\Delta t_{\mathrm f}+\Delta t_{\mathrm b}
=\frac{(2\mechanical{D}/\mechanical{c})\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
{1-\mechanical{v}^2/\mechanical{c}^2}
=\frac{2\mechanical{D}/\mechanical{c}}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}.
$$

**Problem 4-11**

(a) In Earth's frame, ship $A$ departs at $t=0$ at speed $(3/5)\mechanical{c}$. Ship $B$ departs later at $t=t_1$ at speed $(4/5)\mechanical{c}$. At their meeting $A$'s clock reads $16\;\unit{d}$.

(b) The time of the meeting in Earth's frame follows from time dilation.

$$
16\;\unit{d}=t_{\mathrm f}\sqrt{1-(3/5)^2},\qquad
t_{\mathrm f}=\frac54(16\;\unit{d})=20\;\unit{d}.
$$

(c) In Earth's frame the distance to the meeting point is

$$
\mechanical{d}=\mechanical{v}t_{\mathrm f}
=\frac35\mechanical{c}(20\;\unit{d})
=12\;\text{light-days}.
$$

(d) In Earth's frame, $B$ travels for $12\;\text{light-days}/[(4/5)\mechanical{c}]=15\;\unit{d}$. Since the meeting takes place at $t_{\mathrm f}=20\;\unit{d}$, $B$ leaves at $t_1=5\;\unit{d}$.

(e) Including the five-day wait on Earth before $B$ departs, the elapsed time on $B$'s clock is

$$
5\;\unit{d}+(15\;\unit{d})\sqrt{1-(4/5)^2}=14\;\unit{d}.
$$

A separate clock-lag sketch shows two clocks on a platform moving to the right. The front clock is labeled $t=0$ and the rear clock $t=\mechanical{v}\mechanical{D}/\mechanical{c}^2$, with $\mechanical{D}$ the rest separation.

The problem is then redrawn in three panels. At $t=0$, $A$ is leaving Earth. At $t=t_1$, $B$ leaves while $A$ is already ahead. At $t=t_{\mathrm f}$, the ships meet with $16\;\unit{d}$ elapsed on $A$'s clock. Earth measures the longer interval,

$$
t_{\mathrm f}=t_A\mechanical{\gamma}
=\frac{16\;\unit{d}}{\sqrt{1-(3/5)^2}}
=\frac{16\;\unit{d}}{4/5}
=20\;\unit{d}.
$$

The sketch shows Earth and the two ships at their common distance $\mechanical{L}$ at the meeting. Part (c) again finds that distance by multiplying $\mechanical{V}_A=(3/5)\mechanical{c}$ by $t_{\mathrm f}=20\;\unit{d}$ to get $12\;\text{light-days}$.

For part (d), an alternative calculation equates the distances the two ships travel from Earth.

$$
\begin{aligned}
\mechanical{V}_B(t_{\mathrm f}-t_1)&=\mechanical{V}_At_{\mathrm f},\\
\frac45\mechanical{c}(t_{\mathrm f}-t_1)&=\frac35\mechanical{c}t_{\mathrm f},\\
t_1&=\frac14t_{\mathrm f}=5\;\unit{d}.
\end{aligned}
$$

In part (e), $B$'s clock reads $5\;\unit{d}$ at departure. The departure and the meeting occur at the same position in $B$'s frame. Therefore the interval $\Delta t_0$ on $B$'s clock is the proper time, and $\Delta t=t_{\mathrm f}-t_1=15\;\unit{d}$ is the elapsed coordinate time in Earth's frame.

$$
t_B=(5\;\unit{d})+\Delta t_0
=(5\;\unit{d})+\frac{\Delta t}{\mechanical{\gamma}}
=(5\;\unit{d})+(15\;\unit{d})\sqrt{1-\frac{16}{25}}.
$$

**Problem 6-13**

Two ships pass the origin at $t=0$ and move apart, $A$ to the right and $B$ to the left, each at speed $(3/5)\mechanical{c}$ in the frame of the sketch. Ship $B$ explodes and the signal reaches $A$ at the event labeled $320\;\unit{h}$. In the calculation on this page, $320\;\unit{h}$ is the reception time in the frame where the ships have equal speeds. At that time $A$ is $(3/5)\mechanical{c}(320\;\unit{h})=192\;\text{light-hours}$ to the right of the origin.

![[Kyle Kabasares - Special Relativity - Signal from ship B to ship A.png|**Fig. 6** The light travels from B's explosion position to the later position where A receives the signal.]]

Let $t_0$ be the explosion time in that frame. At emission $B$ is a distance $\mechanical{V}_B t_0$ to the left of the origin. Add this to $A$'s distance to the right at reception.

$$
\begin{aligned}
\mechanical{c}(320\;\unit{h}-t_0)
&=\mechanical{V}_B t_0+\mechanical{V}_A(320\;\unit{h}),\\
t_0
&=\frac{(\mechanical{c}-\mechanical{V}_A)(320\;\unit{h})}{\mechanical{V}_B+\mechanical{c}}
=\frac{(2/5)\mechanical{c}(320\;\unit{h})}{(8/5)\mechanical{c}}
=80\;\unit{h}.
\end{aligned}
$$

The handwritten question asks for the explosion time in $A$'s frame. The calculation here first determines it in the frame of the diagram.

The pursuit sketch adds a ship $C$ traveling left at speed $\mechanical{V}_C=(4/5)\mechanical{c}$. It starts $192\;\text{light-hours}$ behind $B$, which travels left at $\mechanical{V}_B=(3/5)\mechanical{c}$. The written calculation equates the distance traveled by $C$ to the initial separation plus the distance traveled by $B$.

$$
\begin{aligned}
\mechanical{V}_Ct&=\mechanical{V}_Bt+(320\;\unit{h})\frac35\mechanical{c},\\
\left(\frac45\mechanical{c}-\frac35\mechanical{c}\right)t
&=192\;\text{light-hours},\\
\frac15\mechanical{c}\,t&=192\;\text{light-hours}.
\end{aligned}
$$

##### H2. A rod with clocks at both ends

A rod of rest length $\mechanical{D}$ lies along the $x'$ axis of $S'$, which moves rightward with speed $\mechanical{v}$ relative to the lab $S$. Two clocks, $A$ at the rear and $B$ at the front, are synchronized in $S'$ and attached to the rod's ends.

(a) Why does the rod tilt? In $S$, its initial horizontal length is $\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$. At a common lab time, the forward clock $B$ reads earlier than the rear clock $A$ by $\Delta t=\mechanical{v}\mechanical{D}/\mechanical{c}^2$. If each end begins its vertical motion at the same reading on its own clock, the lab finds that end $A$ begins first. The difference $\mechanical{v}\mechanical{D}/\mechanical{c}^2$ is expressed in units of the onboard clock readings.

At the lab time when $B$ starts rising, $A$ has already moved upward. The vertical coordinate is unchanged by the boost along $x$. If $\mechanical{v}'$ is the upward speed in $S'$, the vertical separation is

$$
\Delta\mechanical{y}=\Delta\mechanical{y}'
=\mechanical{v}'\Delta t'
=\frac{\mechanical{v}'\mechanical{v}\mechanical{D}}{\mechanical{c}^2}.
$$

The horizontal separation is $\Delta\mechanical{x}'=\mechanical{D}$ in $S'$. At a common time in $S$ it becomes

$$
\Delta\mechanical{x}=\mechanical{D}\sqrt{1-\left(\frac{\mechanical{v}}{\mechanical{c}}\right)^2}.
$$

The sketch is a right triangle with $A$ elevated on the left and $B$ on the right, with the rod making an acute angle $\mechanical{\theta}$ with the horizontal. The notes give the Pythagorean expression for the length, then leave the tangent line unfinished. From the sketch,

$$
\mechanical{L}^2=(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2,\qquad
\tan\mechanical{\theta}=\frac{\Delta\mechanical{y}}{\Delta\mechanical{x}}.
$$

The handwritten expression for $\mechanical{L}^2$ drops the vertical term in its final equality.

### Minkowski spacetime

An event in four-dimensional spacetime has coordinates $(\mechanical{c}t,\mechanical{x},\mechanical{y},\mechanical{z})$. The notes quote Minkowski.

> Space by itself, and time by itself, are doomed to fade away into mere shadows, and only a kind of union of the two will survive.

The introductory diagram puts $\mechanical{c}t$ on the vertical axis and the first spatial coordinate, $\mechanical{x}=\mechanical{x}_1$, on the horizontal axis. With the sign convention on this page, the squared spacetime interval from the origin is

$$
\mechanical{s}^2=\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2-\mechanical{c}^2t^2.
$$

##### Light rays and light cones

In a spacetime diagram with one space dimension and one time dimension, two light rays leaving the origin in opposite directions trace $\mechanical{x}=\mechanical{c}t$ and $\mechanical{x}=-\mechanical{c}t$. The first ray goes up and to the right on the $(\mechanical{x},\mechanical{c}t)$ diagram, and the second goes up and to the left.

Add the $y$ axis projecting out of the page. The locus of all light rays passing through the origin in this $(1+2)$-dimensional spacetime is a double cone. The worldline of a particle moving more slowly than light and passing through the vertex stays inside the light cone.

![[Kyle Kabasares - Special Relativity - Light cone in two spatial dimensions.png|**Fig. 7** The past and future light cones meet at the origin of the two-space, one-time diagram.]]

Space and time mix under the Lorentz transformation.

$$
\begin{aligned}
\mechanical{x}' &=\mechanical{\gamma}(\mechanical{x}-\mechanical{v}t),&
\mechanical{y}' &=\mechanical{y},&
\mechanical{z}' &=\mechanical{z},\\
t' &=\mechanical{\gamma}\left(t-\frac{\mechanical{v}\mechanical{x}}{\mechanical{c}^2}\right).
\end{aligned}
$$

Along the trajectory of the primed origin, $\mechanical{x}=\mechanical{v}t$. The time transformation gives

$$
t'=\mechanical{\gamma}t\left(1-\frac{\mechanical{v}^2}{\mechanical{c}^2}\right)
=\frac{\mechanical{\gamma}t}{\mechanical{\gamma}^2}=\frac{t}{\mechanical{\gamma}}.
$$

The factor in parentheses follows by substituting the trajectory, consistent with the boxed result. The handwritten intermediate line puts it under a square root.

A particle's path in spacetime is its **worldline**. Consider the event at which the particle passes through the origin.

![[Kyle Kabasares - Special Relativity - Worldline and causal regions.png|**Fig. 8** The particle's worldline passes through the vertex and lies inside the light cone on each side.]]

- The **absolute past** contains events on or inside the lower light cone.
- The **absolute future** contains events on or inside the upper light cone.
- Outside both cones lies the **relative past and future**. An event there can have positive time in some inertial frames and negative time in others, relative to the event at the origin.

**Example 1.** Suppose the Sun explodes ten minutes before the reference event on Earth, according to Earth's frame. The Sun is about eight light-minutes away, so the signal has already reached Earth by the reference event. The explosion is in the absolute past. Observers in every inertial frame agree that it happened before the reference event.

**Example 2.** Take the reference event to be the start of lunch on Earth at $t=0$. Suppose that in Earth's frame the Sun explodes four minutes before lunch. Four minutes is shorter than the light travel time from the Sun. The explosion is outside the past light cone of the lunch event, even though it is earlier in Earth's frame.

## Source

Kyle Kabasares, *Special Relativity (Physics 126, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed of one inertial frame relative to another. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ and primed forms | $\unit{m}$ | Spatial coordinates | Location of an event in an inertial frame. |
| $t$, $t'$ | $\unit{s}$ | Coordinate times | Time assigned to an event in the two frames. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | The light propagation speed. |
| $\Delta t$, $\Delta t'$ | $\unit{s}$ | Time interval | Difference between event times or clock readings, including the interferometer travel-time difference. |
| $\mechanical{D}$ | $\unit{m}$ | Rest separation | Distance between the ends of a stick, synchronized clocks, or a flashbulb and mirror in their common rest frame. |
| $\Delta t_{\mathrm{rest}}$, $\Delta t_0$, $\tau$ | $\unit{s}$ | Proper time interval | Time recorded by the clock present at both events. |
| $\mechanical{\gamma}$ | 1 | Lorentz factor | Factor relating the coordinate interval to the proper interval for inertial motion. |
| $\tau_0$, $\tau$ | $\unit{s}$ | Rest and laboratory lifetimes | Muon lifetime measured in its rest frame and in the laboratory. |
| $\mechanical{d}$, $\mechanical{L}$ | $\unit{m}$ | Distance | Distance traveled in the laboratory or separation of the departure and arrival points. |
| $\mechanical{L}_0$ | $\unit{m}$ | Rest length | Length measured with the object at rest. |
| $\mechanical{V}_x$, $\mechanical{V}_y$, $\mechanical{V}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Object velocity components | Velocity of an object along the coordinate axes. |
| $\Delta t_{\mathrm f}$, $\Delta t_{\mathrm b}$ | $\unit{s}$ | Outbound and return times | Light travel times on the two legs of the longitudinal light clock. |
| $\mechanical{\theta}$, $\mechanical{\theta}'$ | $\unit{rad}$ | Angle | Tilt of a rod or coordinate axis, or angle of a ray relative to the reference axis. |
| $\mechanical{s}^2$ | $\unit{m^2}$ | Squared spacetime interval | Invariant quadratic expression in coordinate separations. |
