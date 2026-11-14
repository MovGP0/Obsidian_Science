---
title: "Inertial frames, light clocks, and simultaneity problems"
---

> [!TLDR]
> Compare Galilean and Lorentz ideas and use light travel, synchronization, and clock readings to distinguish the time and length effects of a boost.

## Worked lecture material

##### Overview

Einstein introduced special relativity in 1905, the same year he wrote about Brownian motion and the photoelectric effect. The lecture notes emphasize the importance of special relativity to twentieth-century physics.

##### Galilean relativity

The handwritten heading gives the date 1672. The principle states that the laws of mechanics have the same form in all inertial frames. The notes connect this idea to Newton’s first law.

The sketch shows a person in a vehicle moving rapidly at constant velocity $\mechanical{v}$ relative to an observer outside. A pen dropped by the person retains the same horizontal velocity as the vehicle, so it falls back into the person’s hand. A frame moving at constant velocity relative to an inertial frame is also inertial.

##### Galilean transformation

Newtonian mechanics relates inertial frames by a Galilean transformation. The sketches label one frame $S$ and the frame moving relative to it $S'$. A single event, such as the start of class, has coordinates $(\mechanical{x},\mechanical{y},\mechanical{z},t)$ in $S$ and $(\mechanical{x}',\mechanical{y}',\mechanical{z}',t')$ for an observer on the train in $S'$.

For aligned axes and origins that coincide at $t=0$, let $S'$ move with velocity $\mechanical{v}$ along the positive $x$ axis. Then

$$
\mechanical{x}'=\mechanical{x}-\mechanical{v}t,\qquad
\mechanical{y}'=\mechanical{y},\qquad
\mechanical{z}'=\mechanical{z},\qquad
t'=t.
$$

The position shift is along the direction of the relative velocity. Galilean relativity assigns the same time to the event in all inertial frames. The notes identify low relative speeds as the regime where this works as an approximation.

##### Newton’s second law in both frames

The acceleration along the direction of motion is the same in both frames. Using $t'=t$ and constant $\mechanical{v}$,

$$
\mechanical{a}'_x
=\frac{\mathrm d^2\mechanical{x}'}{\mathrm dt'^2}
=\frac{\mathrm d}{\mathrm dt}
\left(\frac{\mathrm d\mechanical{x}}{\mathrm dt}-\mechanical{v}\right)
=\frac{\mathrm d^2\mechanical{x}}{\mathrm dt^2}
=\mechanical{a}_x.
$$

The transverse coordinates are unchanged, so $\mechanical{\vec a}'=\mechanical{\vec a}$. For the same mass, Newton’s second law $\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$ gives the same force.

##### Galilean transformation of velocity

Use the same frames as on [[#Galilean transformation|the section on Galilean transformation]]. A point mass has velocity components $(\mechanical{v}_x,\mechanical{v}_y,\mechanical{v}_z)$ in $S$. Differentiate the position transformation with respect to $t'=t$.

$$
\begin{aligned}
\mechanical{v}_x'&=\frac{\mathrm d\mechanical{x}'}{\mathrm dt'}
=\frac{\mathrm d(\mechanical{x}-\mechanical{v}t)}{\mathrm dt}
=\mechanical{v}_x-\mechanical{v},\\
\mechanical{v}_y'&=\frac{\mathrm d\mechanical{y}'}{\mathrm dt'}
=\frac{\mathrm d\mechanical{y}}{\mathrm dt}=\mechanical{v}_y,\qquad
\mechanical{v}_z'=\frac{\mathrm d\mechanical{z}'}{\mathrm dt'}
=\frac{\mathrm d\mechanical{z}}{\mathrm dt}=\mechanical{v}_z.
\end{aligned}
$$

##### Electromagnetic example

In $S$, the first sketch shows positive charges moving along a wire. For fixed cross section, the current $\electric{I}$ is proportional to $\electric{\rho}\mechanical{v}$, where $\electric{\rho}$ is charge per volume. The magnetic field $\magnetic{\vec B}$ circles the wire and exerts a torque on a nearby magnet tending to align it with the field.

In $S'$, the observer moves with the depicted charges, which are stationary relative to that observer. The second sketch shows the electric field $\electric{\vec E}$ pointing away from the charge distribution. The notes present this as a paradox if the Galilean transformation is applied to electromagnetism. Describing the same interaction in the two frames requires transforming the electric and magnetic fields as well as the motion of the magnet.

##### Light and the ether hypothesis

Maxwell’s equations give a speed of light $\mechanical{c}\simeq3\times10^8\,\unit{m\,s^{-1}}$. The ether hypothesis treated light as a wave propagating through a medium. The notes analyze the 1887 Michelson–Morley experiment under that hypothesis.

![[Kyle Kabasares - Special Relativity - Michelson–Morley interferometer.png|**Fig. 1** Light splits at A and travels along two perpendicular arms to mirrors B and C. The returning beams combine and reach detector D.]]

Let each arm have length $\mechanical{\ell}$ and let $\mechanical{v}$ be the hypothesized ether wind speed relative to the laboratory. Define $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$.

##### Arm parallel to the ether wind

The outward and return times for the horizontal arm are $t_{AC}=\mechanical{\ell}/(\mechanical{c}-\mechanical{v})$ and $t_{CA}=\mechanical{\ell}/(\mechanical{c}+\mechanical{v})$. Their sum is

$$
t_{ACA}
=\frac{\mechanical{\ell}}{\mechanical{c}-\mechanical{v}}
+\frac{\mechanical{\ell}}{\mechanical{c}+\mechanical{v}}
=\frac{2\mechanical{c}\mechanical{\ell}}{\mechanical{c}^2-\mechanical{v}^2}
=\frac{2\mechanical{\ell}}{\mechanical{c}}\frac1{1-\mechanical{\beta}^2}.
$$

##### Arm perpendicular to the ether wind

In the ether frame the transverse light path is diagonal. Over the outward time $t_{AB}$ the instrument shifts horizontally by $\mechanical{v}t_{AB}$. The Pythagorean relation is

$$
(\mechanical{c}t_{AB})^2=\mechanical{\ell}^2+(\mechanical{v}t_{AB})^2,
\qquad
t_{AB}=\frac{\mechanical{\ell}}{\sqrt{\mechanical{c}^2-\mechanical{v}^2}}
=\frac{\mechanical{\ell}}{\mechanical{c}\sqrt{1-\mechanical{\beta}^2}}.
$$

The return leg satisfies the same relation, with $t_{BA}$ in place of $t_{AB}$.

##### Predicted interference shift

In the ether model, $t_{ACA}=2\mechanical{\ell}/[\mechanical{c}(1-\mechanical{\beta}^2)]$ differs from $t_{ABA}=2\mechanical{\ell}/[\mechanical{c}\sqrt{1-\mechanical{\beta}^2}]$. For $\mechanical{\beta}\ll1$, use the Taylor expansions

$$
\sqrt{1-\mechanical{\beta}^2}\simeq1-\tfrac12\mechanical{\beta}^2,\qquad
\frac1{\sqrt{1-\mechanical{\beta}^2}}\simeq1+\tfrac12\mechanical{\beta}^2,\qquad
\frac1{1-\mechanical{\beta}^2}\simeq1+\mechanical{\beta}^2.
$$

The resulting difference is $\Delta t=t_{ACA}-t_{ABA}\simeq\mechanical{\ell}\mechanical{\beta}^2/\mechanical{c}$. The wave period is $\signal{T}=\signal{\lambda}/\mechanical{c}$. An integer $\Delta t/\signal{T}$ gives constructive interference, and a half-integer gives destructive interference when the two beams start in phase.

$$
\frac{\Delta t}{\signal{T}}\simeq
\frac{\mechanical{\ell}}{\signal{\lambda}}\mechanical{\beta}^2.
$$

With $\mechanical{\beta}=10^{-4}$, $\signal{\lambda}=10^{-6}\,\unit{m}$, and $\mechanical{\ell}=10\,\unit{m}$, the example gives $10^{-1}$ of a period.

##### Einstein’s postulates

1. The laws of nature have the same form in all inertial reference frames.
2. The speed of light in vacuum, $\mechanical{c}=2.99792458\times10^8\,\unit{m\,s^{-1}}$, is the same for all inertial observers.

In the laboratory frame, the two equal arms each give a round-trip time $2\mechanical{\ell}/\mechanical{c}$ and hence $\Delta t=0$.

##### Time dilation

In the train frame, a light pulse travels from mirror $A$ to mirror $B$ and back. The mirrors are separated by the transverse distance $\mechanical{D}$, so the train observer measures $\Delta t_{\mathrm{rest}}=2\mechanical{D}/\mechanical{c}$.

For the platform observer, the train moves at $\mechanical{v}$ and the light traces two diagonal segments. During half the platform round-trip time, $\Delta t/2$, the train moves horizontally by $\mechanical{v}\Delta t/2$ and the light travels a distance $\mechanical{c}\Delta t/2$.

$$
\mechanical{D}^2+\left(\frac{\mechanical{v}\Delta t}{2}\right)^2
=\left(\frac{\mechanical{c}\Delta t}{2}\right)^2,
\qquad
\Delta t=\frac{2\mechanical{D}}{\sqrt{\mechanical{c}^2-\mechanical{v}^2}}
=\frac{\Delta t_{\mathrm{rest}}}{\sqrt{1-\mechanical{\beta}^2}}.
$$

For nonzero relative speed the platform interval exceeds the interval measured on the train.

##### Lorentz factor

The recap distinguishes the clock’s rest frame, in which it measures $\Delta t_{\mathrm{rest}}$, from the frame in which the clock moves, which assigns the interval $\Delta t$ to the same two ticks.

$$
\Delta t=\mechanical{\gamma}\Delta t_{\mathrm{rest}},
\qquad
\mechanical{\gamma}=\frac1{\sqrt{1-\mechanical{\beta}^2}},
\qquad
\mechanical{\beta}=\frac{\mechanical{v}}{\mechanical{c}}.
$$

##### Examples of time dilation

1. **Walking person.** For $\mechanical{v}=1\,\unit{m\,s^{-1}}$, the notes round $\mechanical{\beta}$ to $3\times10^{-9}$. The expansion $\mechanical{\gamma}\simeq1+\tfrac12\mechanical{\beta}^2$ then gives $\mechanical{\gamma}\simeq1+4.5\times10^{-18}$.
2. **Airplane.** For $\mechanical{v}=100\,\unit{m\,s^{-1}}$, the notes take $\mechanical{\beta}\simeq3\times10^{-7}$. In a one-hour flight, $\Delta t-\Delta t_{\mathrm{rest}}=(\mechanical{\gamma}-1)\Delta t_{\mathrm{rest}}\simeq(4.5\times10^{-14})(3600\,\unit{s})$, or roughly $150\,\unit{ps}$ with the rounding used in the notes. A margin annotation refers to an experiment in 1971.
3. **Muon.** For $\mechanical{v}=0.9950\mechanical{c}$, $\mechanical{\gamma}\simeq10$. A rest lifetime $\tau_0=2.2\,\unit{\mu s}$ becomes $\tau=\mechanical{\gamma}\tau_0\simeq22\,\unit{\mu s}$ in the laboratory. The corresponding distance is $\mechanical{d}=\mechanical{v}\tau\simeq6.6\,\unit{km}$, about four miles.
4. **Spaceship.** Take the Earth-to-Alpha Centauri distance to be $\mechanical{L}\simeq4$ light-years, or the distance light covers in $4\times365\times24\times3600$ seconds. With $\mechanical{v}=0.9999\mechanical{c}$, the Lorentz factor is about $71$. The Earth-frame travel time is $\mechanical{L}/\mechanical{v}\simeq4$ years, and the ship clock records about $4/71$ years.

##### Apparent contradiction in reciprocal time dilation

Take $\mechanical{\gamma}=2$, or $\mechanical{\beta}\simeq0.87$. In the first diagram, $A$ is at rest and $B$ moves past. An interval $\tau_0$ on $B$’s clock corresponds to $2\tau_0$ in $A$’s frame. In the second diagram $B$ is at rest and $A$ moves. If $2\tau_0$ is an interval on $A$’s own clock, $B$ assigns $4\tau_0$ to those ticks. The apparent contradiction comes from applying the two comparisons to different pairs of events. Each proper interval belongs to the clock present at both events of its own pair.

##### Transverse length

Two people carry identical upright sticks of rest length $\mechanical{L}_0$ and pass one another with motion along $x$. The sketch equips them with blades so that, under the proposed rule in the notes, the person with the shorter stick would cut the other. The page compares three cases in each rest frame.

| Assumed effect of transverse motion | Prediction in A’s frame | Prediction in B’s frame |
| --- | --- | --- |
| Moving stick is shorter | B cuts A. | A cuts B. |
| Moving stick is longer | A cuts B. | B cuts A. |
| Moving stick keeps its length | Both lengths equal the rest length. | Both lengths equal the rest length. |

The two frames must agree on any cut. The transverse lengths are unchanged.

##### Longitudinal length

A stick at rest in frame 1 extends from $0$ to $\mechanical{D}$. A clock moving at $\mechanical{v}$ passes both ends in coordinate time $t=\mechanical{D}/\mechanical{v}$. Its proper interval is $\tau=t/\mechanical{\gamma}$. In the clock frame the stick moves past at the same relative speed, giving its moving length

$$
\mechanical{L}=\mechanical{v}\tau
=\frac{\mechanical{D}}{\mechanical{\gamma}}<\mechanical{D}
\qquad(\mechanical{v}\ne0).
$$

##### Length contraction for a spaceship trip

The longitudinal length is $\mechanical{L}=\mechanical{D}\sqrt{1-\mechanical{\beta}^2}$. The astronaut in the example measures the Earth-to-star separation as $\mechanical{D}/\mechanical{\gamma}$, with $\mechanical{D}\simeq4$ light-years in the Earth frame and $\mechanical{\gamma}\simeq71$ for $\mechanical{v}=0.9999\mechanical{c}$. The handwritten “20 day light year” is read as about 20 light-days.

##### Simultaneity in the symmetric frame

In frame $C$, ships $A$ and $B$ approach with velocities $+\mechanical{v}$ and $-\mechanical{v}$. Each has rest length $\mechanical{D}$ and length $\mechanical{D}/\mechanical{\gamma}$ in $C$.

![[Kyle Kabasares - Special Relativity - Spaceships passing in the symmetric frame.png|**Fig. 2** The ships pass from front alignment through full overlap to rear alignment in the symmetric frame.]]

The timeline labels four events.

| Event | Alignment | Time in C |
| --- | --- | --- |
| $a$ | Front of $A$ with front of $B$ | $0$ |
| $b$ | Front of $A$ with rear of $B$ | $\mechanical{D}/(2\mechanical{\gamma}\mechanical{v})$ |
| $c$ | Front of $B$ with rear of $A$ | $\mechanical{D}/(2\mechanical{\gamma}\mechanical{v})$ |
| $d$ | Rear of $A$ with rear of $B$ | $\mechanical{D}/(\mechanical{\gamma}\mechanical{v})$ |

The timeline groups $b$ and $c$ at the same time. The time alongside the bottom ship sketch appears to repeat the middle time. Rear alignment requires the ships to close two contracted lengths at closing speed $2\mechanical{v}$, which gives the final time on the timeline.

##### Simultaneity in the ship frames

In frame $A$, ship $A$ has rest length $\mechanical{D}$ and ship $B$ has contracted length $\mechanical{L}_1(\mechanical{v}_1)$ at relative speed $\mechanical{v}_1$. From the first front alignment at $t=0$, the rear of $B$ takes $\mechanical{L}_1/\mechanical{v}_1$ to reach the front of $A$, while the front of $B$ takes $\mechanical{D}/\mechanical{v}_1$ to reach the rear of $A$.

$$
t_b=\frac{\mechanical{L}_1}{\mechanical{v}_1},
\qquad
t_c=\frac{\mechanical{D}}{\mechanical{v}_1}.
$$

The timeline in frame $A$ reads $a,b,c,d$. In frame $B$, the opposite ship is contracted and the timeline reads $a,c,b,d$. Events $b$ and $c$, simultaneous in $C$, have opposite time orders in the two ship frames.

##### Clock synchronization

All clocks to be synchronized are initially considered in one common frame. The notes sketch four protocols.

1. Set clocks together, then transport one to a distant location. The sketch labels Hawaii and Boston and marks this protocol as unsuccessful. Motion changes the transported clock’s elapsed time.
2. Start the first clock at $t=0$. The sketch shows a second clock at a distance, with no signal or further instruction specified.
3. Send a light pulse from clock $A$ at its zero reading. If $B$ is at rest a distance $\mechanical{D}$ away, set $B$ to $\tau=\mechanical{D}/\mechanical{c}$ when the pulse arrives.
4. Send pulses in opposite directions from the midpoint between $A$ and $B$. Each travels $\mechanical{D}/2$, so the corresponding arrival readings in their common frame are $\tau'_A=\tau'_B=\mechanical{D}/(2\mechanical{c})$.

##### Midpoint synchronization in the laboratory frame

The assembly containing clocks $A$ and $B$ moves right at speed $\mechanical{v}$. In the laboratory, their initial separation is $\mechanical{D}/\mechanical{\gamma}$. At $t=0$ a midpoint flash sends light toward both clocks. Clock $A$ moves toward the leftward pulse and clock $B$ moves away from the rightward pulse.

$$
t_a=\frac{\mechanical{D}}{2\mechanical{\gamma}(\mechanical{c}+\mechanical{v})},
\qquad
t_b=\frac{\mechanical{D}}{2\mechanical{\gamma}(\mechanical{c}-\mechanical{v})}.
$$

Thus $t_b>t_a$ for motion to the right, and

$$
t_b-t_a
=\frac{\mechanical{D}}{2\mechanical{\gamma}}
\left(\frac1{\mechanical{c}-\mechanical{v}}-\frac1{\mechanical{c}+\mechanical{v}}\right)
=\frac{\mechanical{D}\mechanical{\gamma}\mechanical{v}}{\mechanical{c}^2}.
$$

The arrival events are simultaneous in the assembly’s rest frame. If both clocks are set to zero at their respective arrivals, then at laboratory time $t_b$ the reading at $B$ is zero and clock $A$ has already advanced by

$$
t_A=\frac{t_b-t_a}{\mechanical{\gamma}}
=\frac{\mechanical{D}\mechanical{v}}{\mechanical{c}^2}.
$$

The time-dilation step here concerns two events on the worldline of clock $A$. The clock readings at equal laboratory time differ, so synchronization depends on the frame.

##### Clock offset and reciprocal time dilation

Spatially separated events simultaneous in one frame can have different times in another. The notes collect the time dilation factor $\mechanical{\gamma}$, the longitudinal contraction factor $1/\mechanical{\gamma}$, and the offset $\mechanical{D}\mechanical{v}/\mechanical{c}^2$ between the readings of synchronized moving clocks compared at equal observer time. The sign of the offset depends on which clock is subtracted.

In frame $A$, synchronized clocks $A_1$ and $A_2$ are at rest a distance $\mechanical{D}$ apart. Clock $B$ moves from $A_1$ to $A_2$ at speed $\mechanical{v}$. Event $a$ is the meeting of $B$ and $A_1$, with both reading zero. Event $b$ is the meeting of $B$ and $A_2$. Frame $A$ assigns the interval $\Delta t=\mechanical{D}/\mechanical{v}$, while the moving clock $B$ records $\Delta t'=\mechanical{D}/(\mechanical{v}\mechanical{\gamma})$.

In frame $B$, clock $A_2$ reads $\mechanical{D}\mechanical{v}/\mechanical{c}^2$ at the time of event $a$ according to $B$’s simultaneity convention. The moving pair is separated by $\mechanical{D}/\mechanical{\gamma}$ in this frame, so the interval to event $b$ on $B$’s clock is $t_B=\mechanical{D}/(\mechanical{v}\mechanical{\gamma})$. The clock $A_2$ advances by $t_B/\mechanical{\gamma}$ over this interval, giving its reading at the meeting.

$$
t_{A_2}
=\frac{\mechanical{D}\mechanical{v}}{\mechanical{c}^2}
+\frac{\mechanical{D}}{\mechanical{v}\mechanical{\gamma}^2}
=\frac{\mechanical{D}}{\mechanical{v}}
\left(\mechanical{\beta}^2+1-\mechanical{\beta}^2\right)
=\frac{\mechanical{D}}{\mechanical{v}}.
$$

Both frames thus predict the same readings when $A_2$ and $B$ meet.

##### Length contraction and clock readings

The handwritten date reads April 6, 2014, between the April 2015 lectures. The page concludes Chapter 7 by using time dilation, length contraction, and the synchronization offset together.

Stick $A$ is at rest in frame $A$, with synchronized end clocks $A_1$ and $A_2$. Stick $B$ moves to the right and carries clocks $B_1$ and $B_2$ synchronized in its own rest frame. The sticks have the same rest length $\mechanical{D}$, so frame $A$ assigns length $\mechanical{D}/\mechanical{\gamma}$ to $B$.

At event $a$, $B_1$ meets $A_1$. Set $t_{A_1}=t_{A_2}=t_{B_1}=0$ at this frame-$A$ time. The clock $B_2$, at the front of the moving stick, reads $-\mechanical{D}\mechanical{v}/\mechanical{c}^2$ at that same frame-$A$ time.

At event $b$, $B_1$ meets $A_2$. Both $A$ clocks have advanced by $\Delta t_A=\mechanical{D}/\mechanical{v}$ as compared at equal frame-$A$ times. Each $B$ clock has advanced by $\Delta t_B=\Delta t_A/\mechanical{\gamma}$ between those coordinate times. Their readings on that slice are

$$
t_{B_1}=\frac{\mechanical{D}}{\mechanical{v}\mechanical{\gamma}},
\qquad
t_{B_2}=-\frac{\mechanical{D}\mechanical{v}}{\mechanical{c}^2}
+\frac{\mechanical{D}}{\mechanical{v}\mechanical{\gamma}}.
$$

##### Positions and readings in both frames

At the frame-$A$ time of event $b$, the reading of $B_2$ from the preceding page is $\mechanical{D}(\mechanical{\gamma}^{-1}-\mechanical{\beta}^2)/\mechanical{v}$. The notes list the frame-$A$ positions as follows.

| Frame-A time | $A_1$ | $A_2$ | $B_1$ | $B_2$ |
| --- | --- | --- | --- | --- |
| Event $a$ | $0$ | $\mechanical{D}$ | $0$ | $\mechanical{D}/\mechanical{\gamma}$ |
| Event $b$ | $0$ | $\mechanical{D}$ | $\mechanical{D}$ | $\mechanical{D}+\mechanical{D}/\mechanical{\gamma}$ |

In frame $B$ at the time of event $a$, $B_1$ and $B_2$ are at $0$ and $\mechanical{D}$ and both read zero. The moving clocks $A_1$ and $A_2$ are at $0$ and $\mechanical{D}/\mechanical{\gamma}$. Their readings on this slice are zero and $\mechanical{D}\mechanical{v}/\mechanical{c}^2$, respectively.

At event $b$, the two stationary $B$ clocks read $\Delta t_B=\mechanical{D}/(\mechanical{\gamma}\mechanical{v})$. The first handwritten expression for $\Delta t_B$ omits the speed, which appears in the readings immediately below it. Both $A$ clocks advance by $\Delta t_B/\mechanical{\gamma}$. Hence at the frame-$B$ time of event $b$,

$$
t_{A_1}=\frac{\mechanical{D}}{\mechanical{\gamma}^2\mechanical{v}},
\qquad
t_{A_2}
=\frac{\mechanical{D}\mechanical{v}}{\mechanical{c}^2}
+\frac{\mechanical{D}}{\mechanical{\gamma}^2\mechanical{v}}
=\frac{\mechanical{D}}{\mechanical{v}}.
$$

The readings of the clocks that meet at event $b$, $A_2$ and $B_1$, agree with the frame-$A$ calculation.

##### Magician’s assistant paradox

Two knives, $A$ and $B$, are at rest in the magician’s frame $M$ and are separated by $3\,\unit{ft}$. The assistant’s rest length is $5\,\unit{ft}$. The relative speed is $\mechanical{v}=4\mechanical{c}/5$, giving $\mechanical{\gamma}=5/3$. The assistant has length $3\,\unit{ft}$ in $M$, while the knife spacing is $1.8\,\unit{ft}$ in the assistant’s frame $AT$.

Event $a$ is the alignment of the feet with knife $A$. Event $b$ is the alignment of the head with knife $B$. In $M$ the two alignments occur at the same time because the contracted assistant spans the knife spacing. Set the knife clocks to zero on that slice. The notes give zero for the clock at the assistant’s feet and a head-clock advance of $(5\,\unit{ft})\mechanical{v}/\mechanical{c}^2$. The advance corresponds to the assistant moving toward the feet in the orientation of the calculation.

In $AT$, the feet and head clocks both read zero on the simultaneity slice through event $a$. The moving knife clocks have readings $t_{KA}=0$ and

$$
t_{KB}=-\frac{(3\,\unit{ft})\mechanical{v}}{\mechanical{c}^2}
=-\frac{2.4\,\unit{ft}}{\mechanical{c}}.
$$

Knife $B$ must travel $5\,\unit{ft}-1.8\,\unit{ft}=3.2\,\unit{ft}$ to reach the head. This takes $\Delta t=(3.2\,\unit{ft})/(0.8\mechanical{c})=4\,\unit{ft}/\mechanical{c}$ in $AT$. Each moving knife clock advances by $\Delta t/\mechanical{\gamma}=2.4\,\unit{ft}/\mechanical{c}$. At the slice through event $b$ the assistant’s clocks read $4\,\unit{ft}/\mechanical{c}$, the clock at $A$ reads $2.4\,\unit{ft}/\mechanical{c}$, and the clock at $B$ reads zero.

##### Doc Shuster. Special relativity

The supplemental notes emphasize Einstein’s three 1905 papers. Under “Equivalence” they use $\sum\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$ to recall the equivalence of inertial frames for Newtonian mechanics. The laws are the same in those frames even though coordinate measurements can differ.

A merry-go-round is a non-inertial reference frame because its points accelerate as it rotates. A parenthetical annotation refers ahead to general relativity. Accelerated motion can also be described within special relativity when spacetime is flat.

##### Ball and light examples

A train moves at $17\,\unit{m\,s^{-1}}$ and a passenger throws a ball forward at $17\,\unit{m\,s^{-1}}$ relative to the train. The outside observer measures about $34\,\unit{m\,s^{-1}}$ under the Galilean rule appropriate at these speeds.

The second pair of sketches shows a flashlight beam and a spaceship moving at $0.9\mechanical{c}$. The ground observer and the people in the spaceship both measure the light moving at $\mechanical{c}$. This is the light-speed postulate for inertial frames.

##### Light-clock derivation revisited

In the clock’s rest frame, the source and detector are a distance $\mechanical{d}$ from the mirror, so the round trip takes $\Delta t_0=2\mechanical{d}/\mechanical{c}$. For the Earth observer the clock aboard the spaceship moves by $\mechanical{v}\Delta t$ during a full tick.

![[Kyle Kabasares - Special Relativity - Light clock on a moving spaceship.png|**Fig. 3** From Earth, the two light paths are diagonal because the spaceship moves during the tick.]]

For each half of the tick, the diagonal has length $\mechanical{c}\Delta t/2$, the horizontal side is $\mechanical{v}\Delta t/2$, and the vertical side is $\mechanical{d}$. Thus

$$
\begin{aligned}
\mechanical{d}^2+\frac{\mechanical{v}^2\Delta t^2}{4}
&=\frac{\mechanical{c}^2\Delta t^2}{4},\\
\Delta t^2&=\frac{4\mechanical{d}^2}{\mechanical{c}^2-\mechanical{v}^2},\\
\Delta t&=\frac{2\mechanical{d}}{\mechanical{c}\sqrt{1-\mechanical{\beta}^2}}
=\mechanical{\gamma}\Delta t_0.
\end{aligned}
$$

The sketch of $\mechanical{\gamma}=(1-\mechanical{\beta}^2)^{-1/2}$ is nearly flat at small $\mechanical{\beta}$ and rises sharply as $\mechanical{\beta}\to1$ from below. The range for $0\le\mechanical{\beta}<1$ is $\mechanical{\gamma}\ge1$, with no finite upper bound. For $\mechanical{\beta}=0.1$, the example gives $\mechanical{\gamma}\simeq1.005$.

##### Twin paradox and examples

Zach stays on Earth while Cody travels at $0.87\mechanical{c}$. The sketch gives five Earth-frame years outbound and five years back. At this speed $\mechanical{\gamma}\simeq2$, so Cody records about five years in total while Zach records ten, if the time spent turning is negligible. Cody changes direction to return, so the two worldlines between departure and reunion differ.

For a space shuttle at $7700\,\unit{m\,s^{-1}}$, use $(1+u)^n\simeq1+nu$ with $u=-\mechanical{\beta}^2$ and $n=-1/2$. Then

$$
\mechanical{\gamma}\simeq1+\tfrac12\frac{\mechanical{v}^2}{\mechanical{c}^2}
\simeq1+3.3\times10^{-10}.
$$

Another sketch shows two pops ten seconds apart for an observer at their location. A spacecraft moving at $0.87\mechanical{c}$ assigns about twenty seconds between the same events after correcting for signal travel time. The ten seconds is the proper interval, measured by the clock present at both pops.

The final sketch shows unstable muons above Earth at an altitude of about $5\,\unit{km}$. Their speed is about $0.995\mechanical{c}$, and their mean lifetime in their own frame is $2.20\times10^{-6}\,\unit{s}$. The next page recalls the time dilation formula.

The notes restate $\Delta t=\mechanical{\gamma}\Delta t_0$ and $\mechanical{\gamma}=(1-\mechanical{\beta}^2)^{-1/2}$. The muon’s large $\mechanical{\gamma}$ makes the difference between the proper lifetime and the Earth-frame lifetime significant.

##### Proper length and proper time in the Alpha Centauri trip

Benny stays on Earth while Alice travels toward Alpha Centauri at $0.87\mechanical{c}$. The Earth-frame separation is taken as $\mechanical{L}_0=4.4$ light-years. With $\mechanical{\gamma}\simeq2$, the notes calculate

$$
\Delta t=\frac{\mechanical{L}_0}{\mechanical{v}}\simeq5.06\,\unit{yr},
\qquad
\Delta t_0=\frac{\Delta t}{\mechanical{\gamma}}\simeq2.53\,\unit{yr}.
$$

The rocket sketch shows Earth and Alpha Centauri moving relative to Alice. Alice assigns the trip distance about $2.2$ light-years. Benny measures the proper length because the endpoints are at rest relative to him. Alice measures the proper time because she is present at both departure and arrival. This proper interval is the smallest coordinate time difference among inertial frames for those two events.

Both descriptions use the same relative speed.

$$
\frac{\mechanical{L}_0}{\Delta t}
=\frac{\mechanical{L}}{\Delta t_0}
=\mechanical{v},
\qquad
\mechanical{L}=\frac{\mechanical{L}_0}{\mechanical{\gamma}}.
$$

## Source

Kyle Kabasares, *Special Relativity (Physics 126, UC Merced 2015)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Relative speed | Speed of one inertial frame relative to another. |
| $\mechanical{x}$, $\mechanical{y}$, $\mechanical{z}$ and primed forms | $\unit{m}$ | Spatial coordinates | Location of an event in an inertial frame. |
| $t$, $t'$ | $\unit{s}$ | Coordinate times | Time assigned to an event in the two frames. |
| $\mechanical{\vec a}$, $\mechanical{\vec a}'$ | $\unit{m\,s^{-2}}$ | Acceleration | Rate of change of velocity in either frame. |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Net force on a particle in Newton’s second law. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Inertial mass of the particle. |
| $\mechanical{v}_x$, $\mechanical{v}_y$, $\mechanical{v}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Particle velocity components | Coordinate rates of change in the two frames. |
| $\electric{I}$ | $\unit{A}$ | Electric current | Rate of charge flow through the wire. |
| $\electric{\rho}$ | $\unit{C\,m^{-3}}$ | Charge density | Electric charge per unit volume. |
| $\magnetic{\vec B}$ | $\unit{T}$ | Magnetic field | Field that circles the current in the first sketch. |
| $\electric{\vec E}$ | $\unit{V\,m^{-1}}$ | Electric field | Field directed away from the positive line of charge. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Speed of light in vacuum | The light propagation speed. |
| $\mechanical{\ell}$ | $\unit{m}$ | Interferometer arm length | Distance from the beam splitter to either mirror. |
| $\mechanical{\beta}$ | 1 | Speed ratio | Relative speed divided by the speed of light. |
| $\Delta t$, $\Delta t'$ | $\unit{s}$ | Time interval | Difference between event times or clock readings, including the interferometer travel-time difference. |
| $\signal{T}$ | $\unit{s}$ | Wave period | Time for one cycle of the light wave. |
| $\signal{\lambda}$ | $\unit{m}$ | Wavelength | Distance traveled by light in one wave period. |
| $\mechanical{D}$ | $\unit{m}$ | Rest separation | Distance between the ends of a stick, synchronized clocks, or a flashbulb and mirror in their common rest frame. |
| $\Delta t_{\mathrm{rest}}$, $\Delta t_0$, $\tau$ | $\unit{s}$ | Proper time interval | Time recorded by the clock present at both events. |
| $\mechanical{\gamma}$ | 1 | Lorentz factor | Factor relating the coordinate interval to the proper interval for inertial motion. |
| $\tau_0$, $\tau$ | $\unit{s}$ | Rest and laboratory lifetimes | Muon lifetime measured in its rest frame and in the laboratory. |
| $\mechanical{d}$, $\mechanical{L}$ | $\unit{m}$ | Distance | Distance traveled in the laboratory or separation of the departure and arrival points. |
| $\mechanical{L}_0$ | $\unit{m}$ | Rest length | Length measured with the object at rest. |
| $\mechanical{V}_A,\mechanical{V}_B,\mechanical{V}_C$ | $\unit{m\,s^{-1}}$ | Ship speeds | Speed magnitudes in the frame of the problem. |
| $\energy{\mathrm{BE}}/A$ | $\unit{MeV}$ per nucleon | Binding energy per nucleon | Nuclear binding energy divided by the mass number. |
