---
title: "Proper time and spacetime interval review problems"
---

> [!TLDR]
> Compute proper time and classify event separations using four-position, boosts, and invariants.

## Worked lecture material

##### Four-position and proper time

Set $\mechanical{x}_0=\mechanical{c}t$ so that all four coordinates of the spacetime position have units of length.

$$
\mechanical{X}_{\mu}=(\mechanical{x}_0,\mechanical{x}_1,\mechanical{x}_2,\mechanical{x}_3)
=(\mechanical{c}t,\mechanical{x},\mechanical{y},\mechanical{z}).
$$

For a boost with $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$ along $\mechanical{x}_1$,

$$
\mechanical{x}_1'=\frac{\mechanical{x}_1-\mechanical{\beta}\mechanical{x}_0}{\sqrt{1-\mechanical{\beta}^2}},
\qquad
\mechanical{x}_0'=\frac{\mechanical{x}_0-\mechanical{\beta}\mechanical{x}_1}{\sqrt{1-\mechanical{\beta}^2}}.
$$

Using the time-positive sign convention, the interval in one space dimension is invariant.

$$
\begin{aligned}
(\mechanical{x}_0')^2-(\mechanical{x}_1')^2
&=\frac{(\mechanical{x}_0-\mechanical{\beta}\mechanical{x}_1)^2
-(\mechanical{x}_1-\mechanical{\beta}\mechanical{x}_0)^2}{1-\mechanical{\beta}^2}\\
&=\frac{\mechanical{x}_0^2(1-\mechanical{\beta}^2)
-\mechanical{x}_1^2(1-\mechanical{\beta}^2)}{1-\mechanical{\beta}^2}
=\mechanical{x}_0^2-\mechanical{x}_1^2.
\end{aligned}
$$

For a particle moving at constant speed $\mechanical{v}$ along $\mechanical{x}_1$ from the origin, $\mechanical{x}_1=\mechanical{v}t$. Taking a positive elapsed time $t$ gives

$$
\mechanical{s}^2=\mechanical{c}^2t^2\left(1-\frac{\mechanical{v}^2}{\mechanical{c}^2}\right),
\qquad
\tau=\frac{\mechanical{s}}{\mechanical{c}}=t\sqrt{1-\frac{\mechanical{v}^2}{\mechanical{c}^2}}.
$$

The proper time $\tau$ is recorded on the clock traveling with the particle.

### Chapter 9 sample problems

##### 1. Diagram of the Lorentz transformation

The notebook reproduces textbook Fig. 9.1, in which a point $P$ in two-dimensional space has coordinates $(\mechanical{x},\mechanical{y})$ in one system and $(\mechanical{x}',\mechanical{y}')$ in a system rotated through angle $\mechanical{\theta}$. The diagram illustrates equations 9.3.

![[Kyle Kabasares - Special Relativity - Ordinary rotated coordinates.png|**Fig. 16** One point is projected onto two sets of axes that differ by an ordinary spatial rotation.]]

For the axes as drawn, $\mechanical{x}'=\mechanical{x}\cos\mechanical{\theta}+\mechanical{y}\sin\mechanical{\theta}$ and $\mechanical{y}'=-\mechanical{x}\sin\mechanical{\theta}+\mechanical{y}\cos\mechanical{\theta}$. The handwritten label on the $\mechanical{y}'$ axis appears to omit the minus sign.

Construct the analogous diagram for the Lorentz transformation in equations 9.4. Use $\mechanical{c}t$ so both axes have units of length. The horizontal axis is the set of points with $\mechanical{c}t=0$. The vertical axis is the set with $\mechanical{x}=0$. The dashed light ray from the origin has $\mechanical{x}=\mechanical{c}t$, making a $45^\circ$ angle with both axes on equal scales. To locate the primed axes, write the transformation as

$$
\mechanical{x}'=\mechanical{\gamma}(\mechanical{x}-\mechanical{\beta}\mechanical{c}t), \tag{1}
$$

$$
\mechanical{c}t'=\mechanical{\gamma}(\mechanical{c}t-\mechanical{\beta}\mechanical{x}). \tag{2}
$$

Set $\mechanical{c}t'=0$ in (2) to draw the $\mechanical{x}'$ axis in the unprimed diagram. Its equation is $\mechanical{c}t=\mechanical{\beta}\mechanical{x}$. Since $0<\mechanical{\beta}<1$, its angle from the positive $\mechanical{x}$ axis is less than $45^\circ$. Set $\mechanical{x}'=0$ in (1) to draw the $\mechanical{c}t'$ axis. Its equation is $\mechanical{x}=\mechanical{\beta}\mechanical{c}t$, with the same tilt relative to the $\mechanical{c}t$ axis. The handwritten discussion ends mid-sentence after introducing this second angle.

### Additional problems

**Problem 8-1**

A clock moves right at $\mechanical{v}=\mechanical{c}/2$ and measures $t'=10\;\unit{s}$ from the common origin. The Lorentz factor is $(1-1/4)^{-1/2}=2/\sqrt3$. For the event at the moving clock's position $\mechanical{x}'=0$, the inverse transformation reduces to

$$
t=\mechanical{\gamma}t'=\frac{2}{\sqrt3}(10\;\unit{s})\approx11.5\;\unit{s}.
$$

**Problem 8-3**

The primed frame moves right at $\mechanical{v}=(4/5)\mechanical{c}$, giving $\mechanical{\gamma}=5/3$. The sketch marks $\mechanical{x}'=-2\;\unit{m}$ to the left of the primed origin.

(a) At $t=0$ the marked event has

$$
\mechanical{x}=\frac{\mechanical{x}'}{\mechanical{\gamma}}=\frac35(-2\;\unit{m})=-1.2\;\unit{m}.
$$

(b) Its primed time is

$$
t'=\mechanical{\gamma}\left(0-\frac{\mechanical{v}\mechanical{x}}{\mechanical{c}^2}\right)
=\frac53\frac45\frac{1.2\;\unit{m}}{\mechanical{c}}
=\frac{1.6\;\unit{m}}{\mechanical{c}}.
$$

**Problem 8-5**

A ship moves right at $\mechanical{v}=(3/5)\mechanical{c}$ relative to a lab observer. A person at its rear fires a bullet forward at $\mechanical{V}_x'=(3/5)\mechanical{c}$ in the ship's frame. The ship has rest length $100\;\unit{m}$.

(a) The lab velocity of the bullet is

$$
\mechanical{V}_x
=\frac{\mechanical{V}_x'+\mechanical{v}}{1+\mechanical{v}\mechanical{V}_x'/\mechanical{c}^2}
=\frac{(6/5)\mechanical{c}}{1+9/25}
=\frac{15}{17}\mechanical{c}.
$$

(b) In the lab frame, the ship's length is $(100\;\unit{m})/\mechanical{\gamma}=(4/5)(100\;\unit{m})=80\;\unit{m}$. In its own frame it is $100\;\unit{m}$. In the bullet's frame, the ship moves backward at $(3/5)\mechanical{c}$, so it again has length $80\;\unit{m}$.

(c) The travel time from the rear to the nose in the ship frame is

$$
\Delta t'=\frac{100\;\unit{m}}{(3/5)\mechanical{c}}
=\frac{500}{3}\frac{\unit{m}}{\mechanical{c}}.
$$

In the lab, the bullet closes on the moving nose at the difference of their lab velocities, $(15/17-3/5)\mechanical{c}=(24/85)\mechanical{c}$. The initial lab separation is $80\;\unit{m}$, so

$$
\Delta t=\frac{80\;\unit{m}}{(24/85)\mechanical{c}}
\approx283.3\frac{\unit{m}}{\mechanical{c}}.
$$

**Problem 10-3**

The sketch shows an initially stationary system separating into two bodies with opposite momenta. The calculation uses a $10^3\;\unit{kg}$ body moving at $(3/5)\mechanical{c}$ and finds the recoil speed of the $10^6\;\unit{kg}$ body. The page first writes the classical momentum balance. It then applies the Lorentz factor to the fast body while treating the heavy body's recoil as nonrelativistic.

$$
\begin{aligned}
\mechanical{\gamma}
&=\frac{1}{\sqrt{1-(3/5)^2}}=\frac54,\\
\mechanical{V}_{\mathrm f}
&\approx\frac{\mechanical{\gamma}\mechanical{m}_0\mechanical{V}_0}{\mechanical{m}_{\mathrm f}}
=\frac{(5/4)(10^3\;\unit{kg})(3/5)\mechanical{c}}{10^6\;\unit{kg}}
=225{,}000\;\unit{m\,s^{-1}}.
\end{aligned}
$$

This speed is small compared with $\mechanical{c}$, consistent with the approximation for the heavy body.

**Problem 10-7**

The sketch shows masses $\mechanical{m}$ and $\mechanical{M}$ moving toward one another. The total momentum is zero. For $\mechanical{V}_1=(3/5)\mechanical{c}$ and $\mechanical{V}_2=-(4/5)\mechanical{c}$ the Lorentz factors are $\mechanical{\gamma}_1=5/4$ and $\mechanical{\gamma}_2=5/3$.

$$
\begin{aligned}
\mechanical{\gamma}_1\mechanical{m}\mechanical{V}_1+
\mechanical{\gamma}_2\mechanical{M}\mechanical{V}_2&=0,\\
\frac34\mechanical{m}\mechanical{c}&=\frac43\mechanical{M}\mechanical{c},\\
\frac{\mechanical{M}}{\mechanical{m}}&=\frac9{16}.
\end{aligned}
$$

The energy–momentum relation is marked with a star.

$$
\energy{E}^2=\mechanical{p}^2\mechanical{c}^2+\mechanical{m}^2\mechanical{c}^4.
$$

**Problem 10-9**

At what speed is the relativistic momentum $1\%$ greater than the classical value? Since $\mechanical{p}=\mechanical{\gamma}\mechanical{m}\mechanical{v}$, the condition is $\mechanical{\gamma}=1.01$. Squaring the defining relation for $\mechanical{\gamma}$ gives

$$
1-\frac{\mechanical{v}^2}{\mechanical{c}^2}=\frac{1}{(1.01)^2},
\qquad
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac{1}{(1.01)^2}}\approx0.14.
$$

The speed is about $14\%$ of the speed of light.

**Problem 11-7**

A particle has proper lifetime $\tau=10^{-10}\;\unit{s}$ and lab energy $\energy{E}=1000\mechanical{m}\mechanical{c}^2$. The energy gives $\mechanical{\gamma}=1000$, so

$$
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac{1}{1000^2}}\approx0.9999995.
$$

Its lab lifetime is $t=\mechanical{\gamma}\tau=10^{-7}\;\unit{s}$. The distance traveled is

$$
\mechanical{d}=\mechanical{v}t
\approx(0.9999995)\mechanical{c}(10^{-7}\;\unit{s})\approx30\;\unit{m}.
$$

**Problem 11-3**

A spaceship has rest mass $\mechanical{m}=1.0\times10^8\;\unit{kg}$ and its elapsed time is $0.10$ times the elapsed time measured in Earth's frame. Thus $\mechanical{\gamma}=10$, and

$$
\energy{E}=10\mechanical{m}\mechanical{c}^2,\qquad
\energy{K}=(\mechanical{\gamma}-1)\mechanical{m}\mechanical{c}^2=9\mechanical{m}\mechanical{c}^2.
$$

Solving for the speed gives

$$
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac{1}{100}}\approx0.995.
$$

**Problem 11-11**

A particle with rest energy $1116\;\unit{MeV}$ has kinetic energy $1116\;\unit{MeV}$ in the lab and travels $13.7\;\unit{cm}$ before decaying. Since $\energy{K}=(\mechanical{\gamma}-1)\mechanical{m}_0\mechanical{c}^2$ equals the rest energy, $\mechanical{\gamma}=2$. Then

$$
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac14}=\frac{\sqrt3}{2}\approx0.87.
$$

The production and decay locations are separated by $0.137\;\unit{m}$ in the lab. In the particle's frame the lab moves, and its distance between these locations measured at a common particle-frame time is $0.137\;\unit{m}/2=0.0685\;\unit{m}$. The particle's proper lifetime is this contracted distance divided by the relative speed.

$$
\tau\approx\frac{0.0685\;\unit{m}}{0.87\mechanical{c}}
\approx2.62\times10^{-10}\;\unit{s}.
$$

**Problem 11-13**

A note in the margin points to page 121. The calculation uses an incident photon of energy $\energy{E}_{\gamma}=5000\;\unit{MeV}$, a target initially at rest, and a single final particle moving at $(5/13)\mechanical{c}$.

(a) The photon momentum magnitude, which is also the final momentum magnitude, is $\mechanical{p}=\energy{E}_{\gamma}/\mechanical{c}=5000\;\unit{MeV}/\mechanical{c}$.

(b) The final particle's Lorentz factor is $1/\sqrt{1-(5/13)^2}=13/12$. Its mass is

$$
\mechanical{M}
=\frac{\mechanical{p}}{\mechanical{\gamma}\mechanical{v}}
=\left(\frac{5000\;\unit{MeV}}{\mechanical{c}}\right)\left(\frac{12}{5\mechanical{c}}\right)
=\frac{12{,}000\;\unit{MeV}}{\mechanical{c}^2}.
$$

(c) Energy conservation gives $\energy{E}_{\gamma}+\mechanical{M}_0\mechanical{c}^2=\mechanical{\gamma}\mechanical{M}\mechanical{c}^2$. Therefore the target mass is

$$
\mechanical{M}_0=\frac{\mechanical{\gamma}\mechanical{M}\mechanical{c}^2-\energy{E}_{\gamma}}{\mechanical{c}^2}
=\frac{13{,}000\;\unit{MeV}-5000\;\unit{MeV}}{\mechanical{c}^2}
=\frac{8000\;\unit{MeV}}{\mechanical{c}^2}.
$$

##### Chapter 9 review of spacelike and timelike intervals

The final review uses the sign convention of equation 9.11.

$$
(\Delta\mechanical{s})^2=-(\mechanical{c}\Delta t)^2+
(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2.
$$

If $(\Delta\mechanical{s})^2>0$, the spatial separation $\sqrt{(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2}$ exceeds $\mechanical{c}|\Delta t|$. This interval is **spacelike**. If $(\Delta\mechanical{s})^2<0$, the interval is **timelike**.

## Source

Kyle Kabasares, *Special Relativity (Physics 126, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed of one inertial frame relative to another. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ and primed forms | $\unit{m}$ | Spatial coordinates | Location of an event in an inertial frame. |
| $t$, $t'$ | $\unit{s}$ | Coordinate times | Time assigned to an event in the two frames. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of the particle. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | The light propagation speed. |
| $\mechanical{\beta}$ | 1 | Speed ratio | Relative speed divided by the speed of light. |
| $\Delta t$, $\Delta t'$ | $\unit{s}$ | Time interval | Difference between event times or clock readings, including the interferometer travel-time difference. |
| $\Delta t_{\mathrm{rest}}$, $\Delta t_0$, $\tau$ | $\unit{s}$ | Proper time interval | Time recorded by the clock present at both events. |
| $\mechanical{\gamma}$ | 1 | Lorentz factor | Factor relating the coordinate interval to the proper interval for inertial motion. |
| $\tau_0$, $\tau$ | $\unit{s}$ | Rest and laboratory lifetimes | Muon lifetime measured in its rest frame and in the laboratory. |
| $\mechanical{d}$, $\mechanical{L}$ | $\unit{m}$ | Distance | Distance traveled in the laboratory or separation of the departure and arrival points. |
| $\mechanical{V}_x$, $\mechanical{V}_y$, $\mechanical{V}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Object velocity components | Velocity of an object along the coordinate axes. |
| $\mechanical{\theta}$, $\mechanical{\theta}'$ | $\unit{rad}$ | Angle | Tilt of a rod or coordinate axis, or angle of a ray relative to the reference axis. |
| $\mechanical{s}^2$ | $\unit{m^2}$ | Squared spacetime interval | Invariant quadratic expression in coordinate separations. |
| $\mechanical{X}_{\mu}$ | $\unit{m}$ | Four-position | Spacetime position with the time coordinate scaled by the speed of light. |
| $\energy{E}$, $\energy{E}'$, $\energy{E}_{\mathrm{tot}}$ | $\unit{J}$ or $\unit{eV}$ | Energy | Time component of four-momentum multiplied by the speed of light. |
| $\mechanical{m}_0$ | $\unit{kg}$ | Rest mass | Invariant mass measured in the rest frame. |
| $\energy{K}$ | $\unit{J}$ or $\unit{eV}$ | Kinetic energy | Difference between total energy and rest energy. |
| $\mechanical{M}_0$, $\mechanical{M}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Initial and final masses | Invariant masses before and after photon absorption or rocket acceleration. |
