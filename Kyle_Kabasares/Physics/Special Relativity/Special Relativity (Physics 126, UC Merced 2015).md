---
title: "Special Relativity (Physics 126, UC Merced 2015)"
---

> [!TLDR]
> These lecture notes develop special relativity from inertial frames and the invariant speed of light. They use Lorentz transformations to compare clocks, lengths, and velocities, then use spacetime intervals and four-momentum to analyze scattering, particle decay, and reaction thresholds.

Source notes by Kyle Kabasares. [[Special Relativity (Physics 126, UC Merced 2015).pdf|Original PDF]].

Transcribed PDF pages 1–71 of 71.

### PDF page 1

#### March 16, 2015. Overview

Einstein introduced special relativity in 1905, the same year he wrote about Brownian motion and the photoelectric effect. The lecture notes emphasize the importance of special relativity to twentieth-century physics.

#### Galilean relativity

The handwritten heading gives the date 1672. The principle states that the laws of mechanics have the same form in all inertial frames. The notes connect this idea to Newton’s first law.

The sketch shows a person in a vehicle moving rapidly at constant velocity $\mechanical{v}$ relative to an observer outside. A pen dropped by the person retains the same horizontal velocity as the vehicle, so it falls back into the person’s hand. A frame moving at constant velocity relative to an inertial frame is also inertial.

### PDF page 2

#### Galilean transformation

Newtonian mechanics relates inertial frames by a Galilean transformation. The sketches label one frame $S$ and the frame moving relative to it $S'$. A single event, such as the start of class, has coordinates $(\mechanical{x},\mechanical{y},\mechanical{z},t)$ in $S$ and $(\mechanical{x}',\mechanical{y}',\mechanical{z}',t')$ for an observer on the train in $S'$.

For aligned axes and origins that coincide at $t=0$, let $S'$ move with velocity $\mechanical{v}$ along the positive $x$ axis. Then

$$
\mechanical{x}'=\mechanical{x}-\mechanical{v}t,\qquad
\mechanical{y}'=\mechanical{y},\qquad
\mechanical{z}'=\mechanical{z},\qquad
t'=t.
$$

The position shift is along the direction of the relative velocity. Galilean relativity assigns the same time to the event in all inertial frames. The notes identify low relative speeds as the regime where this works as an approximation.

#### Newton’s second law in both frames

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

### PDF page 3

#### Galilean transformation of velocity

Use the same frames as on page 2. A point mass has velocity components $(\mechanical{v}_x,\mechanical{v}_y,\mechanical{v}_z)$ in $S$. Differentiate the position transformation with respect to $t'=t$.

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

#### Electromagnetic example

In $S$, the first sketch shows positive charges moving along a wire. For fixed cross section, the current $\electric{I}$ is proportional to $\electric{\rho}\mechanical{v}$, where $\electric{\rho}$ is charge per volume. The magnetic field $\magnetic{\vec B}$ circles the wire and exerts a torque on a nearby magnet tending to align it with the field.

In $S'$, the observer moves with the depicted charges, which are stationary relative to that observer. The second sketch shows the electric field $\electric{\vec E}$ pointing away from the charge distribution. The notes present this as a paradox if the Galilean transformation is applied to electromagnetism. Describing the same interaction in the two frames requires transforming the electric and magnetic fields as well as the motion of the magnet.

### PDF page 4

#### March 18, 2015. Light and the ether hypothesis

Maxwell’s equations give a speed of light $\mechanical{c}\simeq3\times10^8\,\unit{m\,s^{-1}}$. The ether hypothesis treated light as a wave propagating through a medium. The notes analyze the 1887 Michelson–Morley experiment under that hypothesis.

![[Kyle Kabasares - Special Relativity - Michelson–Morley interferometer.png|**Fig. 1** Light splits at A and travels along two perpendicular arms to mirrors B and C. The returning beams combine and reach detector D.]]

Let each arm have length $\mechanical{\ell}$ and let $\mechanical{v}$ be the hypothesized ether wind speed relative to the laboratory. Define $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$.

#### Arm parallel to the ether wind

The outward and return times for the horizontal arm are $t_{AC}=\mechanical{\ell}/(\mechanical{c}-\mechanical{v})$ and $t_{CA}=\mechanical{\ell}/(\mechanical{c}+\mechanical{v})$. Their sum is

$$
t_{ACA}
=\frac{\mechanical{\ell}}{\mechanical{c}-\mechanical{v}}
+\frac{\mechanical{\ell}}{\mechanical{c}+\mechanical{v}}
=\frac{2\mechanical{c}\mechanical{\ell}}{\mechanical{c}^2-\mechanical{v}^2}
=\frac{2\mechanical{\ell}}{\mechanical{c}}\frac1{1-\mechanical{\beta}^2}.
$$

#### Arm perpendicular to the ether wind

In the ether frame the transverse light path is diagonal. Over the outward time $t_{AB}$ the instrument shifts horizontally by $\mechanical{v}t_{AB}$. The Pythagorean relation is

$$
(\mechanical{c}t_{AB})^2=\mechanical{\ell}^2+(\mechanical{v}t_{AB})^2,
\qquad
t_{AB}=\frac{\mechanical{\ell}}{\sqrt{\mechanical{c}^2-\mechanical{v}^2}}
=\frac{\mechanical{\ell}}{\mechanical{c}\sqrt{1-\mechanical{\beta}^2}}.
$$

The return leg satisfies the same relation, with $t_{BA}$ in place of $t_{AB}$.

### PDF page 5

#### Predicted interference shift

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

#### Chapter 3. Einstein’s postulates

1. The laws of nature have the same form in all inertial reference frames.
2. The speed of light in vacuum, $\mechanical{c}=2.99792458\times10^8\,\unit{m\,s^{-1}}$, is the same for all inertial observers.

In the laboratory frame, the two equal arms each give a round-trip time $2\mechanical{\ell}/\mechanical{c}$ and hence $\Delta t=0$.

### PDF page 6

#### Chapter 4. Time dilation

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

#### March 30, 2015. Lorentz factor

The recap distinguishes the clock’s rest frame, in which it measures $\Delta t_{\mathrm{rest}}$, from the frame in which the clock moves, which assigns the interval $\Delta t$ to the same two ticks.

$$
\Delta t=\mechanical{\gamma}\Delta t_{\mathrm{rest}},
\qquad
\mechanical{\gamma}=\frac1{\sqrt{1-\mechanical{\beta}^2}},
\qquad
\mechanical{\beta}=\frac{\mechanical{v}}{\mechanical{c}}.
$$

### PDF page 7

#### Examples of time dilation

1. **Walking person.** For $\mechanical{v}=1\,\unit{m\,s^{-1}}$, the notes round $\mechanical{\beta}$ to $3\times10^{-9}$. The expansion $\mechanical{\gamma}\simeq1+\tfrac12\mechanical{\beta}^2$ then gives $\mechanical{\gamma}\simeq1+4.5\times10^{-18}$.
2. **Airplane.** For $\mechanical{v}=100\,\unit{m\,s^{-1}}$, the notes take $\mechanical{\beta}\simeq3\times10^{-7}$. In a one-hour flight, $\Delta t-\Delta t_{\mathrm{rest}}=(\mechanical{\gamma}-1)\Delta t_{\mathrm{rest}}\simeq(4.5\times10^{-14})(3600\,\unit{s})$, or roughly $150\,\unit{ps}$ with the rounding used in the notes. A margin annotation refers to an experiment in 1971.
3. **Muon.** For $\mechanical{v}=0.9950\mechanical{c}$, $\mechanical{\gamma}\simeq10$. A rest lifetime $\tau_0=2.2\,\unit{\mu s}$ becomes $\tau=\mechanical{\gamma}\tau_0\simeq22\,\unit{\mu s}$ in the laboratory. The corresponding distance is $\mechanical{d}=\mechanical{v}\tau\simeq6.6\,\unit{km}$, about four miles.
4. **Spaceship.** Take the Earth-to-Alpha Centauri distance to be $\mechanical{L}\simeq4$ light-years, or the distance light covers in $4\times365\times24\times3600$ seconds. With $\mechanical{v}=0.9999\mechanical{c}$, the Lorentz factor is about $71$. The Earth-frame travel time is $\mechanical{L}/\mechanical{v}\simeq4$ years, and the ship clock records about $4/71$ years.

### PDF page 8

#### Apparent contradiction in reciprocal time dilation

Take $\mechanical{\gamma}=2$, or $\mechanical{\beta}\simeq0.87$. In the first diagram, $A$ is at rest and $B$ moves past. An interval $\tau_0$ on $B$’s clock corresponds to $2\tau_0$ in $A$’s frame. In the second diagram $B$ is at rest and $A$ moves. If $2\tau_0$ is an interval on $A$’s own clock, $B$ assigns $4\tau_0$ to those ticks. The apparent contradiction comes from applying the two comparisons to different pairs of events. Each proper interval belongs to the clock present at both events of its own pair.

#### Transverse length

Two people carry identical upright sticks of rest length $\mechanical{L}_0$ and pass one another with motion along $x$. The sketch equips them with blades so that, under the proposed rule in the notes, the person with the shorter stick would cut the other. The page compares three cases in each rest frame.

| Assumed effect of transverse motion | Prediction in A’s frame | Prediction in B’s frame |
| --- | --- | --- |
| Moving stick is shorter | B cuts A. | A cuts B. |
| Moving stick is longer | A cuts B. | B cuts A. |
| Moving stick keeps its length | Both lengths equal the rest length. | Both lengths equal the rest length. |

The two frames must agree on any cut. The transverse lengths are unchanged.

#### Longitudinal length

A stick at rest in frame 1 extends from $0$ to $\mechanical{D}$. A clock moving at $\mechanical{v}$ passes both ends in coordinate time $t=\mechanical{D}/\mechanical{v}$. Its proper interval is $\tau=t/\mechanical{\gamma}$. In the clock frame the stick moves past at the same relative speed, giving its moving length

$$
\mechanical{L}=\mechanical{v}\tau
=\frac{\mechanical{D}}{\mechanical{\gamma}}<\mechanical{D}
\qquad(\mechanical{v}\ne0).
$$

### PDF page 9

#### Length contraction for a spaceship trip

The longitudinal length is $\mechanical{L}=\mechanical{D}\sqrt{1-\mechanical{\beta}^2}$. The astronaut in the example measures the Earth-to-star separation as $\mechanical{D}/\mechanical{\gamma}$, with $\mechanical{D}\simeq4$ light-years in the Earth frame and $\mechanical{\gamma}\simeq71$ for $\mechanical{v}=0.9999\mechanical{c}$. The handwritten “20 day light year” is read as about 20 light-days.

#### Simultaneity in the symmetric frame

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

### PDF page 10

#### Simultaneity in the ship frames

In frame $A$, ship $A$ has rest length $\mechanical{D}$ and ship $B$ has contracted length $\mechanical{L}_1(\mechanical{v}_1)$ at relative speed $\mechanical{v}_1$. From the first front alignment at $t=0$, the rear of $B$ takes $\mechanical{L}_1/\mechanical{v}_1$ to reach the front of $A$, while the front of $B$ takes $\mechanical{D}/\mechanical{v}_1$ to reach the rear of $A$.

$$
t_b=\frac{\mechanical{L}_1}{\mechanical{v}_1},
\qquad
t_c=\frac{\mechanical{D}}{\mechanical{v}_1}.
$$

The timeline in frame $A$ reads $a,b,c,d$. In frame $B$, the opposite ship is contracted and the timeline reads $a,c,b,d$. Events $b$ and $c$, simultaneous in $C$, have opposite time orders in the two ship frames.

#### April 1, 2015. Clock synchronization

All clocks to be synchronized are initially considered in one common frame. The notes sketch four protocols.

1. Set clocks together, then transport one to a distant location. The sketch labels Hawaii and Boston and marks this protocol as unsuccessful. Motion changes the transported clock’s elapsed time.
2. Start the first clock at $t=0$. The sketch shows a second clock at a distance, with no signal or further instruction specified.
3. Send a light pulse from clock $A$ at its zero reading. If $B$ is at rest a distance $\mechanical{D}$ away, set $B$ to $\tau=\mechanical{D}/\mechanical{c}$ when the pulse arrives.
4. Send pulses in opposite directions from the midpoint between $A$ and $B$. Each travels $\mechanical{D}/2$, so the corresponding arrival readings in their common frame are $\tau'_A=\tau'_B=\mechanical{D}/(2\mechanical{c})$.

### PDF page 11

#### Midpoint synchronization in the laboratory frame

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

### PDF page 12

#### Clock offset and reciprocal time dilation

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

### PDF page 13

#### April 6 lecture. Length contraction and clock readings

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

### PDF page 14

#### Positions and readings in both frames

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

### PDF page 15

#### Magician’s assistant paradox

Two knives, $A$ and $B$, are at rest in the magician’s frame $M$ and are separated by $3\,\unit{ft}$. The assistant’s rest length is $5\,\unit{ft}$. The relative speed is $\mechanical{v}=4\mechanical{c}/5$, giving $\mechanical{\gamma}=5/3$. The assistant has length $3\,\unit{ft}$ in $M$, while the knife spacing is $1.8\,\unit{ft}$ in the assistant’s frame $AT$.

Event $a$ is the alignment of the feet with knife $A$. Event $b$ is the alignment of the head with knife $B$. In $M$ the two alignments occur at the same time because the contracted assistant spans the knife spacing. Set the knife clocks to zero on that slice. The notes give zero for the clock at the assistant’s feet and a head-clock advance of $(5\,\unit{ft})\mechanical{v}/\mechanical{c}^2$. The advance corresponds to the assistant moving toward the feet in the orientation of the calculation.

In $AT$, the feet and head clocks both read zero on the simultaneity slice through event $a$. The moving knife clocks have readings $t_{KA}=0$ and

$$
t_{KB}=-\frac{(3\,\unit{ft})\mechanical{v}}{\mechanical{c}^2}
=-\frac{2.4\,\unit{ft}}{\mechanical{c}}.
$$

Knife $B$ must travel $5\,\unit{ft}-1.8\,\unit{ft}=3.2\,\unit{ft}$ to reach the head. This takes $\Delta t=(3.2\,\unit{ft})/(0.8\mechanical{c})=4\,\unit{ft}/\mechanical{c}$ in $AT$. Each moving knife clock advances by $\Delta t/\mechanical{\gamma}=2.4\,\unit{ft}/\mechanical{c}$. At the slice through event $b$ the assistant’s clocks read $4\,\unit{ft}/\mechanical{c}$, the clock at $A$ reads $2.4\,\unit{ft}/\mechanical{c}$, and the clock at $B$ reads zero.

### PDF page 16

#### Doc Shuster. Special relativity

The supplemental notes emphasize Einstein’s three 1905 papers. Under “Equivalence” they use $\sum\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$ to recall the equivalence of inertial frames for Newtonian mechanics. The laws are the same in those frames even though coordinate measurements can differ.

A merry-go-round is a non-inertial reference frame because its points accelerate as it rotates. A parenthetical annotation refers ahead to general relativity. Accelerated motion can also be described within special relativity when spacetime is flat.

#### Ball and light examples

A train moves at $17\,\unit{m\,s^{-1}}$ and a passenger throws a ball forward at $17\,\unit{m\,s^{-1}}$ relative to the train. The outside observer measures about $34\,\unit{m\,s^{-1}}$ under the Galilean rule appropriate at these speeds.

The second pair of sketches shows a flashlight beam and a spaceship moving at $0.9\mechanical{c}$. The ground observer and the people in the spaceship both measure the light moving at $\mechanical{c}$. This is the light-speed postulate for inertial frames.

### PDF page 17

#### Light-clock derivation revisited

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

### PDF page 18

#### Twin paradox and examples

Zach stays on Earth while Cody travels at $0.87\mechanical{c}$. The sketch gives five Earth-frame years outbound and five years back. At this speed $\mechanical{\gamma}\simeq2$, so Cody records about five years in total while Zach records ten, if the time spent turning is negligible. Cody changes direction to return, so the two worldlines between departure and reunion differ.

For a space shuttle at $7700\,\unit{m\,s^{-1}}$, use $(1+u)^n\simeq1+nu$ with $u=-\mechanical{\beta}^2$ and $n=-1/2$. Then

$$
\mechanical{\gamma}\simeq1+\tfrac12\frac{\mechanical{v}^2}{\mechanical{c}^2}
\simeq1+3.3\times10^{-10}.
$$

Another sketch shows two pops ten seconds apart for an observer at their location. A spacecraft moving at $0.87\mechanical{c}$ assigns about twenty seconds between the same events after correcting for signal travel time. The ten seconds is the proper interval, measured by the clock present at both pops.

The final sketch shows unstable muons above Earth at an altitude of about $5\,\unit{km}$. Their speed is about $0.995\mechanical{c}$, and their mean lifetime in their own frame is $2.20\times10^{-6}\,\unit{s}$. The next page recalls the time dilation formula.

### PDF page 19

The notes restate $\Delta t=\mechanical{\gamma}\Delta t_0$ and $\mechanical{\gamma}=(1-\mechanical{\beta}^2)^{-1/2}$. The muon’s large $\mechanical{\gamma}$ makes the difference between the proper lifetime and the Earth-frame lifetime significant.

#### Proper length and proper time in the Alpha Centauri trip

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

### PDF page 20

#### A Buick in a closet

A Buick has rest length $7\,\unit{m}$. Find the speed at which its measured length in the closet frame equals the closet depth, $2\,\unit{m}$. The contraction formula gives $\mechanical{\gamma}=\mechanical{L}_0/\mechanical{L}=7/2$. Inverting the Lorentz factor yields

$$
\mechanical{v}
=\mechanical{c}\sqrt{1-\frac1{\mechanical{\gamma}^2}}
=\mechanical{c}\sqrt{1-\left(\frac27\right)^2}
\simeq0.96\mechanical{c}.
$$

In the driver’s frame the Buick is $7\,\unit{m}$ long and the moving closet is $2\,\unit{m}/(7/2)\simeq0.571\,\unit{m}$ deep. Thus the driver never assigns simultaneous positions with both ends of the car inside the closet. The two descriptions use different simultaneity slices.

#### April 13, 2015. Lorentz transformations

The lecture starts by recalling the Galilean equations for $S'$ moving to the right relative to $S$.

$$
\mechanical{x}'=\mechanical{x}-\mechanical{v}t,\qquad
\mechanical{y}'=\mechanical{y},\qquad
\mechanical{z}'=\mechanical{z},\qquad
t'=t.
$$

### PDF page 21

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

#### Time dilation revisited

A clock at rest at $\mechanical{x}'=0$ passes the common origin at $t=t'=0$. In $S$, it reaches $\mechanical{x}=\mechanical{L}$ at $t=\mechanical{L}/\mechanical{v}$. Transform that event to the clock's frame.

$$
\begin{aligned}
\mechanical{x}' &= \mechanical{\gamma}\left(\mechanical{L}-\mechanical{v}\frac{\mechanical{L}}{\mechanical{v}}\right)=0,\\
t' &= \mechanical{\gamma}\left(\frac{\mechanical{L}}{\mechanical{v}}
-\frac{\mechanical{v}\mechanical{L}}{\mechanical{c}^2}\right)
=\frac{\mechanical{L}}{\mechanical{\gamma}\mechanical{v}}.
\end{aligned}
$$

### PDF page 22

In the clock example, the elapsed time in its rest frame is $t'=t_1/\mechanical{\gamma}$, where $t_1=\mechanical{L}/\mechanical{v}$ is the elapsed time in $S$.

#### Length contraction

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

#### Clock lag revisited

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

### PDF page 23

#### Velocity transformations

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

### PDF page 24

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

### PDF page 25

#### Relativity of simultaneity

Two events that are simultaneous in one frame can occur at different times in another. In the sketch, an observer on Earth looks toward two supernovae, $S_1$ and $S_2$, in different galaxies. The example supposes that in Earth's frame we deduce that $S_1$ occurred before $S_2$.

**Thought experiment.** From our spaceship, we see two identical ships approach from opposite directions at equal speeds. When the nose of each reaches the tail of the other, we set off two flashes between the ships, one at $\mechanical{x}_1$ and one at $\mechanical{x}_2$. They occur simultaneously in our frame. Do the passengers also find the flashes simultaneous?

![[Kyle Kabasares - Special Relativity - Simultaneous flashes between passing spaceships.png|**Fig. 4** The two flash locations lie at opposite ends of the overlapping spaceships.]]

Observer $A$ moves toward $\mechanical{x}_2$, so the light from there reaches $A$ first. Observer $B$ moves toward $\mechanical{x}_1$ and receives its light first. In each ship's own frame, its observer is at rest midway between its nose and tail, so equal light travel times from its endpoints imply opposite orders of emission for the two ships.

### PDF page 26

In $B$'s rest frame, ship $A$ is length-contracted. The tail of $A$ passes the nose of $B$ and triggers the flash at $\mechanical{x}_1$. Only later does the nose of $A$ pass the tail of $B$ and trigger the flash at $\mechanical{x}_2$.

![[Kyle Kabasares - Special Relativity - Passing spaceships in the frame of B.png|**Fig. 5** The shorter ship A passes the two ends of ship B in succession as viewed from B's rest frame.]]

#### Spaceship travel time

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

### PDF page 27

#### A clock passing a stick

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

#### Transverse light clock review

The source is a distance $\mechanical{D}$ below a mirror. In the clock's rest frame a pulse travels vertically up and back, giving $\Delta t_0=2\mechanical{D}/\mechanical{c}$. In a frame where the clock moves horizontally, the outgoing and return paths form an isosceles triangle. On the outgoing leg the clock moves horizontally through $\mechanical{v}\Delta t/2$, while the light travels $\mechanical{c}\Delta t/2$.

$$
\mechanical{D}^2+\left(\frac{\mechanical{v}\Delta t}{2}\right)^2
=\left(\frac{\mechanical{c}\Delta t}{2}\right)^2,
\qquad
\Delta t=\frac{2\mechanical{D}}{\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}.
$$

### PDF page 28

The transverse light clock calculation can be rearranged as

$$
\mechanical{D}^2
=\frac{\Delta t^2}{4}(\mechanical{c}^2-\mechanical{v}^2),\qquad
\Delta t^2
=\frac{4\mechanical{D}^2}{\mechanical{c}^2(1-\mechanical{v}^2/\mechanical{c}^2)}.
$$

Taking the positive square root gives $\Delta t=2\mechanical{D}/(\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2})$.

#### Longitudinal light clock

A light clock passes us from left to right at $\mechanical{v}=(3/5)\mechanical{c}$. In its rest frame the flashbulb is $\mechanical{D}=\mechanical{L}_0=10.0\;\unit{m}$ behind the mirror, along the line of motion. In our frame its length is

$$
\mechanical{\gamma}
=\frac{1}{\sqrt{1-9/25}}=\frac54,\qquad
\mechanical{L}=\frac{\mechanical{L}_0}{\mechanical{\gamma}}=8.0\;\unit{m}.
$$

The sketches show the rest arrangement, then three snapshots in our frame. At emission the separation is $\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$. By the time the light reflects, both the bulb and mirror have moved right by $\mechanical{v}\Delta t_{\mathrm f}$. When the returning light reaches the bulb, their total displacement from emission is $\mechanical{v}(\Delta t_{\mathrm f}+\Delta t_{\mathrm b})$.

### PDF page 29

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

#### Problem 4-11

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

### PDF page 30

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

### PDF page 31

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

### PDF page 32

#### Problem 6-13

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

### PDF page 33

The pursuit sketch adds a ship $C$ traveling left at speed $\mechanical{V}_C=(4/5)\mechanical{c}$. It starts $192\;\text{light-hours}$ behind $B$, which travels left at $\mechanical{V}_B=(3/5)\mechanical{c}$. The written calculation equates the distance traveled by $C$ to the initial separation plus the distance traveled by $B$.

$$
\begin{aligned}
\mechanical{V}_Ct&=\mechanical{V}_Bt+(320\;\unit{h})\frac35\mechanical{c},\\
\left(\frac45\mechanical{c}-\frac35\mechanical{c}\right)t
&=192\;\text{light-hours},\\
\frac15\mechanical{c}\,t&=192\;\text{light-hours}.
\end{aligned}
$$

#### H2. A rod with clocks at both ends

A rod of rest length $\mechanical{D}$ lies along the $x'$ axis of $S'$, which moves rightward with speed $\mechanical{v}$ relative to the lab $S$. Two clocks, $A$ at the rear and $B$ at the front, are synchronized in $S'$ and attached to the rod's ends.

(a) Why does the rod tilt? In $S$, its initial horizontal length is $\mechanical{D}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$. At a common lab time, the forward clock $B$ reads earlier than the rear clock $A$ by $\Delta t=\mechanical{v}\mechanical{D}/\mechanical{c}^2$. If each end begins its vertical motion at the same reading on its own clock, the lab finds that end $A$ begins first. The difference $\mechanical{v}\mechanical{D}/\mechanical{c}^2$ is expressed in units of the onboard clock readings.

### PDF page 34

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

## April 20, 2015 · Minkowski spacetime

An event in four-dimensional spacetime has coordinates $(\mechanical{c}t,\mechanical{x},\mechanical{y},\mechanical{z})$. The notes quote Minkowski.

> Space by itself, and time by itself, are doomed to fade away into mere shadows, and only a kind of union of the two will survive.

The introductory diagram puts $\mechanical{c}t$ on the vertical axis and the first spatial coordinate, $\mechanical{x}=\mechanical{x}_1$, on the horizontal axis. With the sign convention on this page, the squared spacetime interval from the origin is

$$
\mechanical{s}^2=\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2-\mechanical{c}^2t^2.
$$

### PDF page 35

#### Light rays and light cones

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

### PDF page 36

A particle's path in spacetime is its **worldline**. Consider the event at which the particle passes through the origin.

![[Kyle Kabasares - Special Relativity - Worldline and causal regions.png|**Fig. 8** The particle's worldline passes through the vertex and lies inside the light cone on each side.]]

- The **absolute past** contains events on or inside the lower light cone.
- The **absolute future** contains events on or inside the upper light cone.
- Outside both cones lies the **relative past and future**. An event there can have positive time in some inertial frames and negative time in others, relative to the event at the origin.

**Example 1.** Suppose the Sun explodes ten minutes before the reference event on Earth, according to Earth's frame. The Sun is about eight light-minutes away, so the signal has already reached Earth by the reference event. The explosion is in the absolute past. Observers in every inertial frame agree that it happened before the reference event.

**Example 2.** Take the reference event to be the start of lunch on Earth at $t=0$. Suppose that in Earth's frame the Sun explodes four minutes before lunch. Four minutes is shorter than the light travel time from the Sun. The explosion is outside the past light cone of the lunch event, even though it is earlier in Earth's frame.

### PDF page 37

## April 22, 2015 · Chapter 10, Momentum

#### Review of Lorentz axes

In $(\mechanical{x},\mechanical{c}t)$ coordinates, the Lorentz transformation and its inverse are

$$
\begin{aligned}
\mechanical{x}'&=\mechanical{\gamma}(\mechanical{x}-\mechanical{\beta}\mechanical{c}t),&
\mechanical{c}t'&=\mechanical{\gamma}(\mechanical{c}t-\mechanical{\beta}\mechanical{x}),\\
\mechanical{x}&=\mechanical{\gamma}(\mechanical{x}'+\mechanical{\beta}\mechanical{c}t'),&
\mechanical{c}t&=\mechanical{\gamma}(\mechanical{c}t'+\mechanical{\beta}\mechanical{x}').
\end{aligned}
$$

The axes have a common origin. The $\mechanical{x}'$ axis consists of events with $t'=0$, so its slope in the unprimed diagram is $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$. The $\mechanical{c}t'$ axis consists of events with $\mechanical{x}'=0$, so it tilts toward the $\mechanical{x}$ axis by the same angle $\mechanical{\theta}$, where $\tan\mechanical{\theta}=\mechanical{\beta}$. In the primed diagram the tilt of the unprimed axes has the opposite sign, with signed tangent $-\mechanical{v}/\mechanical{c}$.

![[Kyle Kabasares - Special Relativity - Lorentz axes and length contraction.png|**Fig. 9** Tilted axes for the two frames, with projections of the event on the primed space axis and the worldline of the stick's endpoint.]]

An event $(\mechanical{c}t',\mechanical{x}')=(0,\mechanical{x}_a')$ has coordinates $(\mechanical{\beta}\mechanical{\gamma}\mechanical{x}_a',\mechanical{\gamma}\mechanical{x}_a')$ in $S$. An event $(\mechanical{c}t_a',0)$ on the primed time axis has $\mechanical{c}t=\mechanical{\gamma}\mechanical{c}t_a'$ and $\mechanical{x}=\mechanical{\beta}\mechanical{\gamma}\mechanical{c}t_a'$.

Take a stick at rest in $S'$ with one end at $\mechanical{x}'=0$ and the other at $\mechanical{x}'=\mechanical{x}_a'$. In $S$, its endpoint worldline is parallel to the $\mechanical{c}t'$ axis. To locate the endpoint at $t=0$, follow this worldline back from the event with $t'=0$ and subtract the horizontal shift $\Delta$.

$$
\begin{aligned}
\Delta&=\tan\mechanical{\theta}\,(\mechanical{\beta}\mechanical{\gamma}\mechanical{x}_a')
=\mechanical{\beta}^2\mechanical{\gamma}\mechanical{x}_a',\\
\mechanical{L}
&=\mechanical{\gamma}\mechanical{x}_a'-\Delta
=\mechanical{\gamma}\mechanical{x}_a'(1-\mechanical{\beta}^2)
=\frac{\mechanical{x}_a'}{\mechanical{\gamma}}.
\end{aligned}
$$

### PDF page 38

#### Relativistic dynamics

The classical momentum of a particle is $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$. For multiple particles the total is $\sum_i\mechanical{\vec p}_i$. The following example tests the classical formula using the relativistic velocity transformation.

In $S$, a body of mass $3\mechanical{m}$ initially at rest splits into a fragment of mass $\mechanical{m}$ moving left at speed $2\mechanical{v}$ and a fragment of mass $2\mechanical{m}$ moving right at speed $\mechanical{v}$. The sum of their classical momenta is zero, equal to the initial value.

In $S'$, which moves right at speed $\mechanical{v}$, the initial body moves at $-\mechanical{v}$, giving classical momentum $-3\mechanical{m}\mechanical{v}$. The transformed fragment velocities follow from the longitudinal rule.

$$
\begin{aligned}
\mechanical{V}_1' &=\frac{-2\mechanical{v}-\mechanical{v}}{1-(-2\mechanical{v})\mechanical{v}/\mechanical{c}^2}
=\frac{-3\mechanical{v}}{1+2\mechanical{v}^2/\mechanical{c}^2},\\
\mechanical{V}_2' &=\frac{\mechanical{v}-\mechanical{v}}{1-\mechanical{v}^2/\mechanical{c}^2}=0.
\end{aligned}
$$

Using the same classical formula after the split in $S'$ gives

$$
\mechanical{p}_{\mathrm{tot}}'
=\mechanical{m}\mechanical{V}_1'+2\mechanical{m}\mechanical{V}_2'
=\frac{-3\mechanical{m}\mechanical{v}}{1+2\mechanical{v}^2/\mechanical{c}^2}.
$$

The classical momentum sum changes across the split in $S'$. The side equations on this page also list the transverse velocity transformations. Those components vanish in this example, and their general form, with the factor $\mechanical{\gamma}$ in the denominator, is on PDF page 23.

#### Four-scalars and four-vectors

A four-scalar is invariant under a change of inertial frame. The notes point to the speed of light and the squared spacetime interval,

$$
(\Delta\mechanical{s})^2=-\mechanical{c}^2(\Delta t)^2+
(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2.
$$

A four-vector has components $(A_0,A_1,A_2,A_3)$ in $S$ and $(A_0',A_1',A_2',A_3')$ in $S'$. The components must obey the Lorentz transformation.

### PDF page 39

For a boost along $x$, the components of a generic four-vector transform as

$$
\begin{aligned}
A_0'&=\mechanical{\gamma}(A_0-\mechanical{\beta}A_1),&
A_1'&=\mechanical{\gamma}(A_1-\mechanical{\beta}A_0),\\
A_2'&=A_2,& A_3'&=A_3.
\end{aligned}
$$

The handwritten $A_1'$ line has $A_2$ in the second term. The boost mixes the time and longitudinal components, as on PDF page 37. The squared Minkowski norm $d^2=-A_0^2+A_1^2+A_2^2+A_3^2$ is a four-scalar. Applying it to the difference of two spacetime positions gives their squared interval.

#### Four-velocity

The ordinary velocity uses the coordinate time of the frame, for example $\mechanical{V}_x=d\mechanical{x}/dt$ in $S$ and $\mechanical{V}_x'=d\mechanical{x}'/dt'$ in $S'$. Write the spacetime position as

$$
\mechanical{X}_{\mu}(t)=(\mechanical{c}t,\mechanical{x},\mechanical{y},\mechanical{z}).
$$

For inertial motion from the origin at speed $\mechanical{v}$, its squared interval is

$$
\mechanical{s}^2
=-\mechanical{c}^2t^2+\mechanical{x}^2+\mechanical{y}^2+\mechanical{z}^2
=(\mechanical{v}^2-\mechanical{c}^2)t^2
=-\frac{\mechanical{c}^2t^2}{\mechanical{\gamma}^2}.
$$

For this timelike path, the proper time satisfies $\mechanical{c}^2\tau^2=-\mechanical{s}^2$, so $|\tau|=|t|/\mechanical{\gamma}$. The notes use the interval to motivate normalizing the four-position, with the intermediate square root written without the sign and factor of $\mechanical{c}$ needed for a real time in seconds.

Dividing the spacetime displacement by the elapsed proper time, or differentiating with respect to proper time, gives the four-velocity.

$$
\mechanical{U}_{\mu}
=\mechanical{\gamma}\left(\mechanical{c},\frac{\mechanical{x}}{t},\frac{\mechanical{y}}{t},\frac{\mechanical{z}}{t}\right)
=\mechanical{\gamma}(\mechanical{c},\mechanical{V}_x,\mechanical{V}_y,\mechanical{V}_z).
$$

### PDF page 40

#### Four-momentum

Multiply the four-velocity by the mass.

$$
\mechanical{p}_{\mu}
=\mechanical{m}\mechanical{U}_{\mu}
=(\mechanical{\gamma}\mechanical{m}\mechanical{c},
\mechanical{\gamma}\mechanical{m}\mechanical{V}_x,
\mechanical{\gamma}\mechanical{m}\mechanical{V}_y,
\mechanical{\gamma}\mechanical{m}\mechanical{V}_z).
$$

The first spatial component is $\mechanical{p}_1=\mechanical{\gamma}\mechanical{m}\mechanical{V}_x=\mechanical{m}\mechanical{V}_x/\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$. At low speeds it approaches $\mechanical{m}\mechanical{V}_x$. For motion along $x$ with speed approaching $\mechanical{c}$, it grows without bound.

![[Kyle Kabasares - Special Relativity - Momentum versus speed.png|**Fig. 10** The classical line and the relativistic momentum curve agree at low speed. The relativistic curve rises steeply near the speed of light.]]

The time component is $\mechanical{p}_0=\mechanical{\gamma}\mechanical{m}\mechanical{c}$, so $\mechanical{p}_0\mechanical{c}=\mechanical{\gamma}\mechanical{m}\mechanical{c}^2$. A sketch shows two particles moving apart, the first left at $(4/5)\mechanical{c}$ and the second right at $(3/5)\mechanical{c}$. The first momentum is written $\mechanical{p}_1=\mechanical{\gamma}_1\mechanical{m}_1\mechanical{v}_1$, with $\mechanical{v}_1$ signed along the axis.

The notebook marks a space for the April 27 lecture.

## April 29, 2015 · Compton scattering

An incident photon has energy $\energy{h}\signal{\nu}$ and momentum magnitude $\energy{h}\signal{\nu}/\mechanical{c}$. It scatters from an electron initially at rest. The photon leaves at angle $\mechanical{\theta}$ above the incident direction with energy $\energy{h}\signal{\nu}'$ and momentum magnitude $\energy{h}\signal{\nu}'/\mechanical{c}$. The electron recoils below that direction at angle $\mechanical{\phi}$, with energy $\energy{E}_e$ and momentum magnitude $\mechanical{p}_e$.

The aim is to find $\signal{\nu}'$ in terms of $\signal{\nu}$ and $\mechanical{\theta}$. The recoil electron obeys the energy–momentum relation, and the collision conserves energy.

$$
\energy{E}_e^2=\mechanical{m}_e^2\mechanical{c}^4+\mechanical{p}_e^2\mechanical{c}^2, \tag{1}
$$

$$
\energy{h}\signal{\nu}+\mechanical{m}_e\mechanical{c}^2
=\energy{h}\signal{\nu}'+\energy{E}_e. \tag{2}
$$

### PDF page 41

The incident photon momentum equals the vector sum of the scattered photon momentum and the electron momentum.

![[Kyle Kabasares - Special Relativity - Compton scattering momentum triangle.png|**Fig. 11** The scattered photon and recoil electron momenta add head to tail to give the incident photon momentum.]]

The law of cosines gives

$$
\mechanical{p}_e^2
=\left(\frac{\energy{h}\signal{\nu}'}{\mechanical{c}}\right)^2
+\left(\frac{\energy{h}\signal{\nu}}{\mechanical{c}}\right)^2
-2\left(\frac{\energy{h}\signal{\nu}'}{\mechanical{c}}\right)
\left(\frac{\energy{h}\signal{\nu}}{\mechanical{c}}\right)\cos\mechanical{\theta}. \tag{3}
$$

Eliminate $\mechanical{p}_e$ with (1), then use (2) to express $\energy{E}_e$ in terms of the photon frequencies. The common factor after substituting (3) is $\energy{h}^2$, which the first handwritten elimination line appears to write as $\energy{h}^4$.

$$
\begin{aligned}
\frac{\energy{E}_e^2-\mechanical{m}_e^2\mechanical{c}^4}{\energy{h}^2}
&=\signal{\nu}'^{\,2}+\signal{\nu}^2-2\signal{\nu}\signal{\nu}'\cos\mechanical{\theta},\\
\frac{\left[\energy{h}(\signal{\nu}-\signal{\nu}')+\mechanical{m}_e\mechanical{c}^2\right]^2
-\mechanical{m}_e^2\mechanical{c}^4}{\energy{h}^2}
&=(\signal{\nu}-\signal{\nu}')^2+
\frac{2\mechanical{m}_e\mechanical{c}^2}{\energy{h}}(\signal{\nu}-\signal{\nu}').
\end{aligned}
$$

Equating these results and canceling the squared frequency terms yields

$$
\signal{\nu}-\signal{\nu}'=\frac{\energy{h}}{\mechanical{m}_e\mechanical{c}^2}
\signal{\nu}\signal{\nu}'(1-\cos\mechanical{\theta}).
$$

With $\signal{\lambda}=\mechanical{c}/\signal{\nu}$ and $\signal{\lambda}'=\mechanical{c}/\signal{\nu}'$, the wavelength shift is independent of the initial photon energy.

$$
\boxed{\signal{\lambda}'-\signal{\lambda}
=\frac{\energy{h}}{\mechanical{m}_e\mechanical{c}}(1-\cos\mechanical{\theta})
=\signal{\lambda}_{\mathrm C}(1-\cos\mechanical{\theta}).}
$$

The electron's Compton wavelength is $\signal{\lambda}_{\mathrm C}=\energy{h}/(\mechanical{m}_e\mechanical{c})=2.43\times10^{-12}\;\unit{m}$. The shift is nonnegative. A positive shift increases the wavelength and decreases the photon energy and momentum, giving a redshift. The maximum shift is $2\signal{\lambda}_{\mathrm C}$ at $\mechanical{\theta}=\pi$, for a backscattered photon. From the stated Compton wavelength this is $4.86\times10^{-12}\;\unit{m}$. The source writes approximately $4\times10^{-12}\;\unit{m}$.

### PDF page 42

For comparison, the photon at the hydrogen ionization threshold has $\energy{E}=13.6\;\unit{eV}$ and $\signal{\lambda}=\energy{h}\mechanical{c}/\energy{E}\approx91\;\unit{nm}$. The notes use $\energy{h}\mechanical{c}\approx1.24\times10^{-6}\;\unit{eV\,m}$.

#### Relativistic Doppler effect

The energy–momentum four-vector for light is

$$
\mechanical{p}_{\mu}
=\left(\frac{\energy{E}}{\mechanical{c}},\mechanical{\vec p}\right)
=\frac{\energy{h}\signal{\nu}}{\mechanical{c}}(1,\signal{\hat k}),
$$

where $\signal{\hat k}$ is the unit vector in the propagation direction. Suppose it lies in the $xy$ plane. In the observer frame $S$ the wave makes angle $\mechanical{\theta}$ with the positive $x$ axis. In the source frame $S'$, moving at speed $\mechanical{v}$ along $x$, the corresponding angle is $\mechanical{\theta}'$. The sketches label the wave in each frame and separately show a receding source sending light back to the observer.

$$
\begin{aligned}
\mechanical{p}_{\mu}
&=\frac{\energy{h}\signal{\nu}}{\mechanical{c}}(1,\cos\mechanical{\theta},\sin\mechanical{\theta},0),\\
\mechanical{p}_{\mu}'
&=\frac{\energy{h}\signal{\nu}'}{\mechanical{c}}(1,\cos\mechanical{\theta}',\sin\mechanical{\theta}',0).
\end{aligned}
$$

To find the observed $\signal{\nu}$ and $\mechanical{\theta}$ from $\signal{\nu}'$ and $\mechanical{\theta}'$, use the inverse boost with $\mechanical{\beta}=\mechanical{v}/\mechanical{c}$.

$$
\begin{aligned}
\mechanical{p}_0 &= \mechanical{\gamma}(\mechanical{p}_0'+\mechanical{\beta}\mechanical{p}_1'),\\
\mechanical{p}_1 &= \mechanical{\gamma}(\mechanical{p}_1'+\mechanical{\beta}\mechanical{p}_0'),\\
\mechanical{p}_2 &= \mechanical{p}_2'.
\end{aligned}
$$

Substituting the photon components and canceling $\energy{h}/\mechanical{c}$ gives

$$
\begin{aligned}
\signal{\nu}&=\mechanical{\gamma}\signal{\nu}'(1+\mechanical{\beta}\cos\mechanical{\theta}'),\\
\signal{\nu}\cos\mechanical{\theta}
&=\mechanical{\gamma}\signal{\nu}'(\cos\mechanical{\theta}'+\mechanical{\beta}),\\
\signal{\nu}\sin\mechanical{\theta}&=\signal{\nu}'\sin\mechanical{\theta}'.
\end{aligned}
$$

### PDF page 43

Divide the longitudinal component equation by the frequency equation to obtain the change in the propagation angle. Solving for the primed angle gives the inverse.

$$
\cos\mechanical{\theta}
=\frac{\cos\mechanical{\theta}'+\mechanical{\beta}}{1+\mechanical{\beta}\cos\mechanical{\theta}'},
\qquad
\cos\mechanical{\theta}'
=\frac{\cos\mechanical{\theta}-\mechanical{\beta}}{1-\mechanical{\beta}\cos\mechanical{\theta}}.
$$

Use the inverse angle relation to write the observed frequency in terms of the observed angle.

$$
\begin{aligned}
\signal{\nu}
&=\mechanical{\gamma}\signal{\nu}'\left(1+\mechanical{\beta}
\frac{\cos\mechanical{\theta}-\mechanical{\beta}}{1-\mechanical{\beta}\cos\mechanical{\theta}}\right)\\
&=\mechanical{\gamma}\signal{\nu}'\frac{1-\mechanical{\beta}^2}{1-\mechanical{\beta}\cos\mechanical{\theta}}
=\signal{\nu}'\frac{\sqrt{1-\mechanical{\beta}^2}}{1-\mechanical{\beta}\cos\mechanical{\theta}}.
\end{aligned}
$$

For a given geometry, the shift for light depends on the relative velocity of the source and observer. For sound, the velocities relative to the medium also enter.

**(i) Receding source.** The photon travels in the negative $x$ direction, so $\mechanical{\theta}=\mechanical{\theta}'=\pi$. Then

$$
\signal{\nu}=\signal{\nu}'\frac{\sqrt{1-\mechanical{\beta}^2}}{1+\mechanical{\beta}}
=\signal{\nu}'\sqrt{\frac{1-\mechanical{\beta}}{1+\mechanical{\beta}}}
<\signal{\nu}'.
$$

The observer sees redshifted light, with lower frequency.

**(ii) Approaching source.** The photon travels in the positive $x$ direction, so $\mechanical{\theta}=\mechanical{\theta}'=0$. Then

$$
\signal{\nu}=\signal{\nu}'\frac{\sqrt{1-\mechanical{\beta}^2}}{1-\mechanical{\beta}}
=\signal{\nu}'\sqrt{\frac{1+\mechanical{\beta}}{1-\mechanical{\beta}}}
>\signal{\nu}'.
$$

The observer sees blueshifted light, with higher frequency.

### PDF page 44

**(iii) Transverse Doppler shift.** For $\mechanical{\theta}=\pi/2$ in the observer frame, the angle relation gives $\cos\mechanical{\theta}'=-\mechanical{\beta}$ and the frequency is

$$
\signal{\nu}=\signal{\nu}'\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}.
$$

The notes contrast this with the classical Doppler effect for sound, where transverse motion relative to the medium gives no shift when the source and observer velocity components along the ray both vanish.

**Can $\signal{\nu}=\signal{\nu}'$?** Yes. The sketch shows the observed frequency decreasing as the angle increases from $0$ to $\pi$, crossing the emitted frequency between the forward and transverse directions. The sketch places the crossing near $\pi/2$. The frequency equation from the previous page gives the crossing condition $1-\mechanical{\beta}\cos\mechanical{\theta}=\sqrt{1-\mechanical{\beta}^2}$.

#### Particle dynamics in the lab frame

A neutral kaon $K^0$ moves in the lab at $\mechanical{v}=(3/5)\mechanical{c}$ and decays into two neutral pions,

$$
K^0\longrightarrow\pi^0+\pi^0.
$$

Both pions move along the line of the original kaon's motion. What are their energies in the lab? Start in the rest frame $S'$ of the kaon. The initial total momentum is zero, so this is the **center-of-momentum frame**. The sketch shows the two pions moving in opposite directions in $S'$.

### PDF page 45

Work first in the center-of-momentum frame $S'$, then transform back to the lab. Let $\mechanical{m}_{K^0}$ and $\mechanical{m}_{\pi^0}$ be the kaon and neutral-pion masses. The pions have equal energies and opposite signed momenta, $\mechanical{p}_1'=-\mechanical{p}'$ and $\mechanical{p}_2'=+\mechanical{p}'$. If their common speed is $\mechanical{v}'$, then

$$
\begin{aligned}
\energy{E}_1'=\energy{E}_2'
&=\frac12\mechanical{m}_{K^0}\mechanical{c}^2
=\mechanical{\gamma}'\mechanical{m}_{\pi^0}\mechanical{c}^2,\\
\mechanical{\gamma}' &= \frac{\mechanical{m}_{K^0}}{2\mechanical{m}_{\pi^0}},\\
\frac{\mechanical{v}'}{\mechanical{c}}
&=\sqrt{1-\left(\frac{2\mechanical{m}_{\pi^0}}{\mechanical{m}_{K^0}}\right)^2}
\approx0.84,\\
\mechanical{p}'&=\mechanical{\gamma}'\mechanical{m}_{\pi^0}\mechanical{v}'
=\frac12\mechanical{m}_{K^0}\mechanical{v}'.
\end{aligned}
$$

The page then writes the energy and longitudinal momentum transformation from $S$ to $S'$ for $\mechanical{p}_{\mu}=(\energy{E}/\mechanical{c},\mechanical{p}_1,\mechanical{p}_2,\mechanical{p}_3)$.

$$
\begin{aligned}
\frac{\energy{E}'}{\mechanical{c}}
&=\mechanical{\gamma}\left(\frac{\energy{E}}{\mechanical{c}}-
\frac{\mechanical{v}}{\mechanical{c}}\mechanical{p}_1\right),\\
\mechanical{p}_1'
&=\mechanical{\gamma}\left(\mechanical{p}_1-
\frac{\mechanical{v}}{\mechanical{c}^2}\energy{E}\right),\\
\mechanical{\gamma} &= \frac{1}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}=\frac54.
\end{aligned}
$$

For the return to $S$, use the inverse boost, $\energy{E}=\mechanical{\gamma}(\energy{E}'+\mechanical{v}\mechanical{p}_x')$, with $\mechanical{p}_x'=-\mechanical{p}'$ for the first pion and $+\mechanical{p}'$ for the second. The handwritten page stops at the boost factor.

#### Homework and exam review

Homework 6 lists problems 12-17, 12-20, 12-22, 13-1, 13-2, 13-7, 13-9, and 13-17. Problem 12-17 is underlined separately.

Topics for the Wednesday exam include Lorentz transformations, spacetime, momentum, energy, applications, and transforming energy and momentum.

### PDF page 46

#### Special relativity review

**Time dilation.** The ratio of coordinate time to proper time is

$$
\frac{\Delta t}{\Delta t_0}=\mechanical{\gamma}
=\frac{1}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
=\frac{1}{\sqrt{1-\mechanical{\beta}^2}}.
$$

The ratio starts at $1$ for $\mechanical{\beta}=0$, reaches $2$ at $\mechanical{\beta}\approx0.87$, and grows without bound as $\mechanical{\beta}\to1$.

**Length contraction.** A meter stick has length $\mechanical{L}=(1\;\unit{m})\sqrt{1-\mechanical{\beta}^2}$. It contracts to $0.5\;\unit{m}$ at $\mechanical{\beta}\approx0.87$. The classical length is constant.

![[Kyle Kabasares - Special Relativity - Time dilation and length contraction curves.png|**Fig. 12** Time dilation increases and the measured length of the meter stick decreases as the speed ratio approaches one.]]

**Velocity addition and momentum.** The speed sketch compares classical $\mechanical{V}_{\mathrm f}=\mechanical{a}\Delta t$ with the relativistic curve, which approaches $\mechanical{c}$ from below as acceleration continues. The momentum sketch contrasts the classical line $\mechanical{\vec p}=\mechanical{m}\mechanical{\vec v}$ with the relativistic momentum, which continues to grow without bound.

![[Kyle Kabasares - Special Relativity - Speed and momentum summary curves.png|**Fig. 13** Continued acceleration brings the speed closer to the speed of light while the momentum continues to grow.]]

### PDF page 47

The opening sketch plots momentum against time spent speeding up. It shows a single straight line labeled “classical and relativistic agree.” For example, when a constant force acts along the motion, both give a constant rate of change of momentum with time, even though the relations between momentum and speed differ.

The relativistic momentum is $\mechanical{\vec p}=\mechanical{\gamma}\mechanical{m}_0\mechanical{\vec v}$. This section also uses the historical convention of writing a speed-dependent **relativistic mass**, $\mechanical{m}_{\mathrm{rel}}=\mechanical{\gamma}\mechanical{m}_0$, where $\mechanical{m}_0$ is the invariant rest mass. In that convention $\mechanical{\vec p}=\mechanical{m}_{\mathrm{rel}}\mechanical{\vec v}$.

#### Relativistic energy

The total energy and rest energy are

$$
\energy{E}_{\mathrm{tot}}=\mechanical{m}_{\mathrm{rel}}\mechanical{c}^2
=\mechanical{\gamma}\mechanical{m}_0\mechanical{c}^2,\qquad
\energy{E}_0=\mechanical{m}_0\mechanical{c}^2.
$$

For a massive object, $\mechanical{\gamma}$ starts at $1$ and grows without bound as its speed approaches $\mechanical{c}$. A sketch shows an electron and a positron moving toward each other and asks about annihilation.

**Rest-energy example.** An apple of mass $\mechanical{m}_0=0.12\;\unit{kg}$ has rest energy

$$
\energy{E}_0=(0.12\;\unit{kg})(3.0\times10^8\;\unit{m\,s^{-1}})^2
\approx1.1\times10^{16}\;\unit{J}.
$$

The kinetic energy is the total energy minus the rest energy.

$$
\energy{K}=\energy{E}_{\mathrm{tot}}-\energy{E}_0
=\mechanical{\gamma}\mechanical{m}_0\mechanical{c}^2-\mechanical{m}_0\mechanical{c}^2
=(\mechanical{\gamma}-1)\energy{E}_0.
$$

### PDF page 48

For low speeds, expand the Lorentz factor in the kinetic energy using the binomial series.

$$
\begin{aligned}
\energy{K}
&=\frac{\mechanical{m}_0\mechanical{c}^2}{\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}}
-\mechanical{m}_0\mechanical{c}^2\\
&=\mechanical{m}_0\mechanical{c}^2
\left[1+\frac12\frac{\mechanical{v}^2}{\mechanical{c}^2}
+\frac38\frac{\mechanical{v}^4}{\mechanical{c}^4}+\cdots\right]
-\mechanical{m}_0\mechanical{c}^2.
\end{aligned}
$$

The constant terms cancel. The leading term is the classical kinetic energy, $\energy{K}\approx\tfrac12\mechanical{m}_0\mechanical{v}^2$.

#### Understanding spacetime

The first sketch adds time to the three spatial axes. The next sketches reduce the picture to one spatial coordinate $\mechanical{x}$ and a vertical time axis. Future-directed worldlines point toward increasing time. With the time axis scaled as $\mechanical{c}t$, a light ray from the origin makes a $45^\circ$ angle with the spatial axis.

The wedge between the positive spatial axis and the future light ray would require travel faster than light from the origin. The final sketch labels the origin “now,” with the future above and the past below. A marked point outside the future cone cannot be reached from now, and a point outside the past cone could not have sent a signal to arrive here by now.

### PDF page 49

#### Invariance of the spacetime interval

In the diagram, event $P$ is separated from the origin by $\Delta\mechanical{x}$ and $\Delta t$. An observer moving at speed $\mechanical{v}$ along $x$ measures the separations

$$
\Delta\mechanical{x}'=\mechanical{\gamma}(\Delta\mechanical{x}-\mechanical{v}\Delta t),\qquad
\Delta t'=\mechanical{\gamma}\left(\Delta t-\frac{\mechanical{v}}{\mechanical{c}^2}\Delta\mechanical{x}\right).
$$

This page defines $\mechanical{s}^2$ with a positive time term, the opposite overall sign from the convention on PDF page 34. Substitute the transformed separations.

$$
\begin{aligned}
(\mechanical{c}\Delta t')^2-(\Delta\mechanical{x}')^2
&=\mechanical{\gamma}^2\left[
\mechanical{c}^2\left(\Delta t-\frac{\mechanical{v}}{\mechanical{c}^2}\Delta\mechanical{x}\right)^2
-(\Delta\mechanical{x}-\mechanical{v}\Delta t)^2\right]\\
&=\mechanical{\gamma}^2\left[(\mechanical{c}^2-\mechanical{v}^2)(\Delta t)^2+
\left(\frac{\mechanical{v}^2}{\mechanical{c}^2}-1\right)(\Delta\mechanical{x})^2\right]\\
&=\mechanical{\gamma}^2\left(1-\frac{\mechanical{v}^2}{\mechanical{c}^2}\right)
\left[(\mechanical{c}\Delta t)^2-(\Delta\mechanical{x})^2\right]\\
&=(\mechanical{c}\Delta t)^2-(\Delta\mechanical{x})^2.
\end{aligned}
$$

The two cross terms cancel and the remaining factor multiplying the interval is $1$. All inertial observers agree on this $\mechanical{s}^2$.

### PDF page 50

With the time-positive convention $\mechanical{s}^2=(\mechanical{c}t)^2-\mechanical{x}^2$, a positive fixed value of $\mechanical{s}^2$ gives a hyperbola in the spacetime diagram. The sketch shows its upper branch. The $45^\circ$ light rays are its asymptotes.

![[Kyle Kabasares - Special Relativity - Constant interval hyperbola.png|**Fig. 14** Events on the upper branch have the same positive squared interval from the origin.]]

The slope information for the segment from the origin to $P$ gives $\mechanical{v}=\Delta\mechanical{x}/\Delta t$ in one frame and $\mechanical{v}'=\Delta\mechanical{x}'/\Delta t'$ in another. The coordinate separations can differ while the squared interval agrees.

**Time dilation from the interval.** The sketch shows me riding in a vehicle at $10\;\unit{mph}$ and you standing on the ground. For two events on my worldline, I measure elapsed time $t$ and zero displacement in my rest frame. You measure $t'$ and displacement $\mechanical{v}'t'$. Equating our expressions for the invariant interval,

$$
\begin{aligned}
(\mechanical{c}t)^2&=(\mechanical{c}t')^2-(\mechanical{v}'t')^2,\\
t^2&=t'^2\left(1-\frac{\mechanical{v}'^{\,2}}{\mechanical{c}^2}\right),\\
t&=t'\sqrt{1-\frac{\mechanical{v}'^{\,2}}{\mechanical{c}^2}}.
\end{aligned}
$$

Here the prime labels the ground observer's coordinates, following the notebook's choice for this example.

### PDF page 51

## Chapter 8 sample problems

#### 1. Laser pulse in two frames

A primed frame moves at $\mechanical{v}=(3/5)\mechanical{c}$ along the common $x$ axis. The origins coincide when the clocks at the two origins read zero. In our frame, a laser emits a pulse at $(\mechanical{x},\mechanical{y},\mechanical{z})=(40.0\;\unit{m},0,0)$ at $t=2.0\times10^{-7}\;\unit{s}$. Find the place and time of emission in the primed frame.

The transverse coordinates stay zero and $\mechanical{\gamma}=5/4$. Using $\mechanical{c}\approx3.0\times10^8\;\unit{m\,s^{-1}}$,

$$
\begin{aligned}
\mechanical{x}'
&=\mechanical{\gamma}(\mechanical{x}-\mechanical{v}t)
=\frac54(40.0\;\unit{m}-36.0\;\unit{m})
=5\;\unit{m},\\
t'
&=\mechanical{\gamma}\left(t-\frac{\mechanical{v}\mechanical{x}}{\mechanical{c}^2}\right)
=\frac54\left(2.0\times10^{-7}\;\unit{s}-\frac35\frac{40.0\;\unit{m}}{\mechanical{c}}\right)
=1.5\times10^{-7}\;\unit{s}.
\end{aligned}
$$

### PDF page 52

#### 2. Bus and patrol cars

A bus of rest length $15.0\;\unit{m}$ drives along the interstate at $\mechanical{v}=(4/5)\mechanical{c}$. The driver's watch at the front and a passenger's watch at the rear are synchronized in the bus frame. Parked highway patrol cars have clocks synchronized in the road frame. When the rear of the bus passes the first patrol car, both the passenger's watch and that car's clock read noon.

At noon on its own clock, a second patrol car is adjacent to the front of the bus. (a) How far apart are the two patrol cars? (b) What does the driver’s watch read at the encounter with the second car?

![[Kyle Kabasares - Special Relativity - Bus and synchronized patrol clocks.png|**Fig. 15** The bus endpoints line up with the patrol cars at the same time in the road frame.]]

(a) Take the encounter at the rear to be the common origin with $t=t'=0$. At the front encounter $t=0$ in the road frame and $\mechanical{x}'=15.0\;\unit{m}$ in the bus frame. Then $\mechanical{\gamma}=5/3$ and

$$
\mechanical{x}'=\mechanical{\gamma}(\mechanical{x}-\mechanical{v}t)
=\mechanical{\gamma}\mechanical{x},\qquad
\mechanical{x}=\frac{15.0\;\unit{m}}{5/3}=9.0\;\unit{m}.
$$

(b) The leading watch reads earlier at simultaneous road-frame events. The inverse time transformation at the front encounter gives

$$
0=t=\mechanical{\gamma}\left(t'+\frac{\mechanical{v}\mechanical{x}'}{\mechanical{c}^2}\right)
=\frac53\left(t'+\frac{(4/5)\mechanical{c}(15.0\;\unit{m})}{\mechanical{c}^2}\right).
$$

### PDF page 53

Solving for the driver's watch reading in part (b),

$$
t'=-\frac{\mechanical{v}\mechanical{x}'}{\mechanical{c}^2}
=-\frac{12\;\unit{m}}{\mechanical{c}}
\approx-4.0\times10^{-8}\;\unit{s}.
$$

The watch reads $4.0\times10^{-8}\;\unit{s}$ before noon.

#### 3. Running passenger

The passenger at the back of the bus starts running forward at $(3/5)\mechanical{c}$ relative to the bus. How fast does the passenger move in the frame of the parked patrol cars? Use the inverse velocity transformation from the bus frame to the road frame.

$$
\mechanical{V}_x
=\frac{\mechanical{V}_x'+\mechanical{v}}{1+\mechanical{v}\mechanical{V}_x'/\mechanical{c}^2}
=\frac{(3/5)\mechanical{c}+(4/5)\mechanical{c}}{1+12/25}
=\frac{35}{37}\mechanical{c}.
$$

## Chapter 10 sample problems

#### 1. Momentum at fixed speed

A particle of mass $\mechanical{m}$ moves at speed $(3/5)\mechanical{c}$. Find the momentum for motion (a) along $x$ and (b) at $45^\circ$ to both the $x$ and $y$ axes.

(a) For motion along $x$, $\mechanical{\gamma}=5/4$ gives

$$
\mechanical{\vec p}
=(\mechanical{\gamma}\mechanical{m}\mechanical{v}_x,0,0)
=\left(\frac34\mechanical{m}\mechanical{c},0,0\right).
$$

This is $5/4$ times the classical momentum $\mechanical{m}\mechanical{\vec v}$.

(b) For motion at $45^\circ$ to the two axes, the Lorentz factor is unchanged and $\mechanical{v}_x=\mechanical{v}_y=\mechanical{v}/\sqrt2$.

### PDF page 54

For part (b) of the momentum problem,

$$
\mechanical{\vec p}
=\left(\frac54\mechanical{m}\frac{3\mechanical{c}}{5\sqrt2},
\frac54\mechanical{m}\frac{3\mechanical{c}}{5\sqrt2},0\right)
=\left(\frac{3\mechanical{m}\mechanical{c}}{4\sqrt2},
\frac{3\mechanical{m}\mechanical{c}}{4\sqrt2},0\right).
$$

#### 2. Mass ratio from a decay at rest

A particle at rest decays into a particle of mass $\mechanical{m}$ moving at $(12/13)\mechanical{c}$ and a particle of mass $\mechanical{M}$ moving at $(5/13)\mechanical{c}$. Find $\mechanical{m}/\mechanical{M}$.

The total momentum initially vanishes, so the fragments move in opposite directions with equal momentum magnitudes. The sketch puts $\mechanical{M}$ on the left and $\mechanical{m}$ on the right.

$$
\begin{aligned}
\mechanical{p}_m
&=\frac{\mechanical{m}(12/13)\mechanical{c}}{\sqrt{1-(12/13)^2}}
=\frac{12}{5}\mechanical{m}\mechanical{c},\\
\mechanical{p}_M
&=\frac{\mechanical{M}(5/13)\mechanical{c}}{\sqrt{1-(5/13)^2}}
=\frac{5}{12}\mechanical{M}\mechanical{c}.
\end{aligned}
$$

Equating the magnitudes gives $\mechanical{m}/\mechanical{M}=25/144$.

#### 3. Torpedo approaching HMS Pinafore

An alien ship approaches HMS Pinafore at $(3/5)\mechanical{c}$ in Pinafore's frame. The aliens launch a torpedo of mass $1000\;\unit{kg}$ toward Pinafore at $(3/5)\mechanical{c}$ relative to their own ship. Pinafore's shield stops a projectile only if its momentum magnitude is below $6.0\times10^{11}\;\unit{kg\,m\,s^{-1}}$ in its frame.

Find (a) the torpedo four-momentum in the alien ship's rest frame, (b) the four-momentum in Pinafore's frame, (c) whether the shield stops it, and (d) the torpedo velocity relative to Pinafore.

### PDF page 55

(a) Take positive $x$ to point from the alien ship toward Pinafore. The alien ship's frame is $S'$ and Pinafore's frame is $S$. In $S'$ the torpedo moves along $x$ at $(3/5)\mechanical{c}$, giving its four-momentum

$$
\mechanical{p}_{\mu}'
=\left(\frac54\mechanical{m}\mechanical{c},\frac34\mechanical{m}\mechanical{c},0,0\right),
\qquad
\mechanical{m}\mechanical{c}=3.0\times10^{11}\;\unit{kg\,m\,s^{-1}}.
$$

(b) The alien ship moves at $\mechanical{v}=(3/5)\mechanical{c}$ in $S$, so the inverse boost has $\mechanical{\gamma}=5/4$.

$$
\begin{aligned}
\mechanical{p}_0&=\mechanical{\gamma}\left(\mechanical{p}_0'
+\frac{\mechanical{v}}{\mechanical{c}}\mechanical{p}_x'\right)
=\frac{17}{8}\mechanical{m}\mechanical{c},\\
\mechanical{p}_x&=\mechanical{\gamma}\left(\mechanical{p}_x'
+\frac{\mechanical{v}}{\mechanical{c}}\mechanical{p}_0'\right)
=\frac{15}{8}\mechanical{m}\mechanical{c},\\
\mechanical{p}_y&=\mechanical{p}_y'=0,\qquad
\mechanical{p}_z=\mechanical{p}_z'=0.
\end{aligned}
$$

Altogether $\mechanical{p}_{\mu}=(17\mechanical{m}\mechanical{c}/8,15\mechanical{m}\mechanical{c}/8,0,0)$.

(c) The torpedo has momentum magnitude $(15/8)\mechanical{m}\mechanical{c}\approx5.6\times10^{11}\;\unit{kg\,m\,s^{-1}}$, below the threshold. The shield stops it.

(d) Let $\mechanical{u}$ be the torpedo's velocity in $S$. Dividing its momentum by its rest mass gives

$$
\frac{\mechanical{u}}{\sqrt{1-\mechanical{u}^2/\mechanical{c}^2}}
=\frac{15}{8}\mechanical{c}.
$$

Squaring and rearranging,

$$
8^2\frac{\mechanical{u}^2}{\mechanical{c}^2}
=15^2\left(1-\frac{\mechanical{u}^2}{\mechanical{c}^2}\right),\qquad
\frac{\mechanical{u}^2}{\mechanical{c}^2}=\frac{15^2}{15^2+8^2}=\frac{15^2}{17^2}.
$$

### PDF page 56

## Chapter 11 sample problems

#### 1. Mass increase of a heated kettle

A sealed kettle of mass $1.0\;\unit{kg}$ contains two liters of water of mass $2.0\;\unit{kg}$. Heating the water from $20\;\unit{^\circ C}$ to $100\;\unit{^\circ C}$ requires $\Delta\energy{E}=6.7\times10^5\;\unit{J}$. Find the fractional mass increase of the kettle and water together.

$$
\begin{aligned}
\Delta\mechanical{m}
&=\frac{\Delta\energy{E}}{\mechanical{c}^2}
=\frac{6.7\times10^5\;\unit{J}}{(3.0\times10^8\;\unit{m\,s^{-1}})^2}
\approx7.44\times10^{-12}\;\unit{kg},\\
\frac{\Delta\mechanical{m}}{\mechanical{m}}
&=\frac{7.44\times10^{-12}\;\unit{kg}}{3.0\;\unit{kg}}\approx2.5\times10^{-12}.
\end{aligned}
$$

The first handwritten substitution places the speed factor next to the energy. The formula and numerical result use it as a denominator.

#### 2. Distance traveled by a tau lepton

A tau lepton of mass $1777\;\unit{MeV}/\mechanical{c}^2$ decays after a rest-frame time $\tau=3.0\times10^{-13}\;\unit{s}$. Its lab energy is $100\mechanical{m}\mechanical{c}^2$. Since $\energy{E}=\mechanical{\gamma}\mechanical{m}\mechanical{c}^2$, its Lorentz factor is $100$, and the lab time to decay is $t=\mechanical{\gamma}\tau=3.0\times10^{-11}\;\unit{s}$. Its speed is close to $\mechanical{c}$, so the lab distance is

$$
\mechanical{d}=\mechanical{v}t\approx\mechanical{c}t
=(3.0\times10^8\;\unit{m\,s^{-1}})(3.0\times10^{-11}\;\unit{s})
=9.0\;\unit{mm}.
$$

#### 3. Photon absorbed by a stationary particle

A photon of energy $12.0\;\unit{TeV}$ strikes a stationary particle of mass $\mechanical{M}_0$. The only final particle has mass $\mechanical{M}$ and moves at $(12/13)\mechanical{c}$ in the incident photon's direction, as shown in the sketch. Using MeV-based units, find (a) the final momentum, (b) $\mechanical{M}$, and (c) $\mechanical{M}_0$. The notes give $1\;\unit{TeV}=10^{12}\;\unit{eV}$.

### PDF page 57

Conserve energy and momentum in the photon absorption problem. The target is initially at rest, so its initial momentum is zero.

$$
\energy{E}_{\gamma}+\mechanical{M}_0\mechanical{c}^2=\energy{E}_{\mathrm f},\qquad
\mechanical{p}_{\gamma}=\mechanical{p}_{\mathrm f},\qquad
\mechanical{\gamma}=\frac{1}{\sqrt{1-(12/13)^2}}=\frac{13}{5}.
$$

(a) The final momentum equals the incident photon momentum.

$$
\mechanical{p}_{\mathrm f}=\frac{\energy{E}_\gamma}{\mechanical{c}}
=\frac{12.0\;\unit{TeV}}{\mechanical{c}}
=\frac{1.20\times10^7\;\unit{MeV}}{\mechanical{c}}.
$$

(b) With $\mechanical{p}_{\mathrm f}=\mechanical{\gamma}\mechanical{M}\mechanical{v}$,

$$
\mechanical{M}
=\frac{12.0\;\unit{TeV}/\mechanical{c}}{(13/5)(12/13)\mechanical{c}}
=\frac{5.0\;\unit{TeV}}{\mechanical{c}^2}
=\frac{5.0\times10^6\;\unit{MeV}}{\mechanical{c}^2}.
$$

(c) Energy conservation gives

$$
\mechanical{M}_0\mechanical{c}^2
=\mechanical{\gamma}\mechanical{M}\mechanical{c}^2-\energy{E}_\gamma
=\frac{13}{5}(5.0\;\unit{TeV})-12.0\;\unit{TeV}=1.0\;\unit{TeV}.
$$

Thus $\mechanical{M}_0=1.0\;\unit{TeV}/\mechanical{c}^2=1.0\times10^6\;\unit{MeV}/\mechanical{c}^2$. The handwritten solutions give their final values in TeV-based units.

#### 4. Proton beam and a fleeing ship

Ship $A$ fires a forward proton beam at speed $\mechanical{v}=(4/5)\mechanical{c}$ in its own frame. Ship $B$ flees in the same direction at speed $\mechanical{V}=(3/5)\mechanical{c}$ relative to $A$. Find the beam velocity $\mechanical{v}'$ in $B$'s frame by transforming the energy–momentum four-vector using equations 11.15.

Choose $A$ at rest in $S$ and $B$ at rest in $S'$. This method distinguishes three Lorentz factors, one for each beam speed and one for the relative speed of the frames.

### PDF page 58

For a proton of mass $\mechanical{m}$, the two frames assign

$$
\begin{aligned}
\energy{E}&=\mechanical{\gamma}_m\mechanical{m}\mechanical{c}^2,&
\mechanical{p}_x&=\mechanical{\gamma}_m\mechanical{m}\mechanical{v},\\
\energy{E}'&=\mechanical{\gamma}_m'\mechanical{m}\mechanical{c}^2,&
\mechanical{p}_x'&=\mechanical{\gamma}_m'\mechanical{m}\mechanical{v}'.
\end{aligned}
$$

Here $\mechanical{\gamma}_m=(1-\mechanical{v}^2/\mechanical{c}^2)^{-1/2}$ and $\mechanical{\gamma}_m'=(1-\mechanical{v}'^{\,2}/\mechanical{c}^2)^{-1/2}$ refer to the particle. The boost uses $\mechanical{\gamma}=(1-\mechanical{V}^2/\mechanical{c}^2)^{-1/2}$. In $S$, $\mechanical{\gamma}_m=5/3$, so $\mechanical{p}_0=\energy{E}/\mechanical{c}=(5/3)\mechanical{m}\mechanical{c}$ and $\mechanical{p}_x=(4/3)\mechanical{m}\mechanical{c}$. Boost with $\mechanical{\gamma}=5/4$.

$$
\mechanical{p}_0'
=\mechanical{\gamma}\left(\mechanical{p}_0-\frac{\mechanical{V}}{\mechanical{c}}\mechanical{p}_x\right)
=\frac54\left(\frac53-\frac35\frac43\right)\mechanical{m}\mechanical{c}
=\frac{13}{12}\mechanical{m}\mechanical{c}.
$$

Since $\mechanical{p}_0'=\mechanical{\gamma}_m'\mechanical{m}\mechanical{c}$, the particle's Lorentz factor in $S'$ is $13/12$. The beam still moves forward because it overtakes $B$. Its velocity is $\mechanical{v}'=(5/13)\mechanical{c}$.

## Chapter 12 sample problems

#### 1. Symmetric fission of uranium-238

Suppose a uranium-238 nucleus at the far right of the binding-energy curve spontaneously splits into two identical nuclei. Use the curve in Fig. 12.2 to estimate the kinetic energy released. Each fragment contains $92/2=46$ protons and $238/2=119$ nucleons, so it is palladium-119. The curve gives a binding energy per nucleon of about $7.5\;\unit{MeV}$ for uranium-238 and $8.5\;\unit{MeV}$ for palladium-119.

### PDF page 59

For symmetric uranium fission, the binding energy increases by about $1\;\unit{MeV}$ per nucleon. The combined rest energy of the fragments is therefore lower by about $(238)(1\;\unit{MeV})$, giving roughly $200\;\unit{MeV}$ of kinetic energy per fission at the precision of the estimate. The handwritten solution calls this a reduction in binding energy. Its values on the previous page correspond to an increase in the positive binding energy and a decrease in rest energy.

#### 2. Sigma-minus decay

The problem gives a half-life of $1.5\times10^{-10}\;\unit{s}$ for the decay $\Sigma^-\longrightarrow n+\pi^-$. Find the ratio $\energy{K}_{\pi^-}/\energy{K}_n$ in the rest frame of $\Sigma^-$. The stated rest energies are $1197.4\;\unit{MeV}$ for $\Sigma^-$, $939.6\;\unit{MeV}$ for the neutron, and $139.6\;\unit{MeV}$ for $\pi^-$. The neutron and pion move in opposite directions in this frame.

Equation 12.13 gives the total pion energy. Subtract the pion rest energy to get its kinetic energy.

$$
\begin{aligned}
\energy{E}_{\pi^-}
&=\frac{\mechanical{m}_{\Sigma^-}^2+\mechanical{m}_{\pi^-}^2-\mechanical{m}_n^2}
{2\mechanical{m}_{\Sigma^-}}\mechanical{c}^2,\\
\energy{K}_{\pi^-}
&=\energy{E}_{\pi^-}-\mechanical{m}_{\pi^-}\mechanical{c}^2
=\frac{(\mechanical{m}_{\Sigma^-}-\mechanical{m}_{\pi^-})^2-\mechanical{m}_n^2}
{2\mechanical{m}_{\Sigma^-}}\mechanical{c}^2.
\end{aligned}
$$

Exchange the neutron and pion labels for $\energy{K}_n$. The common factors cancel, so the rest energies in MeV can be used directly in the numerical ratio.

$$
\frac{\energy{K}_{\pi^-}}{\energy{K}_n}
=\frac{(\mechanical{m}_{\Sigma^-}-\mechanical{m}_{\pi^-})^2-\mechanical{m}_n^2}
{(\mechanical{m}_{\Sigma^-}-\mechanical{m}_n)^2-\mechanical{m}_{\pi^-}^2}
=\frac{(1197.4-139.6)^2-939.6^2}{(1197.4-939.6)^2-139.6^2}
\approx5.026.
$$

### PDF page 60

#### 3. Pion photoproduction

A photon strikes a stationary proton in the reaction $\gamma+p\longrightarrow p+\pi^0$. Can the proton remain at rest? The sketch tests a final state in which only the pion carries momentum.

If the proton is at rest before and after the reaction, its rest energy cancels from energy conservation. Then $\energy{E}_{\gamma}=\energy{E}_{\pi^0}$. Squaring and applying the energy–momentum relation to the photon and pion gives

$$
\mechanical{p}_{\gamma}^2\mechanical{c}^2
=\mechanical{p}_{\pi^0}^2\mechanical{c}^2+\mechanical{m}_{\pi^0}^2\mechanical{c}^4.
$$

Momentum conservation under the same assumption gives $\mechanical{p}_{\gamma}=\mechanical{p}_{\pi^0}$. This would require $\mechanical{m}_{\pi^0}^2\mechanical{c}^4=0$. The pion is massive, so the proton must recoil.

#### 4. Photon rocket to Arcturus

Arcturus is $36\;\unit{ly}$ from the Sun in the rest frame used in the problem. At its final speed, the photon rocket measures the Sun–Arcturus distance as $12\;\unit{ly}$. What fraction of its initial mass remains?

The distance contracts by a factor $1/3$, so $\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}=1/3$ and $\mechanical{\gamma}=3$. Equation 12.32 gives

$$
1+\left(\frac{\mechanical{M}}{\mechanical{M}_0}\right)^2
=6\frac{\mechanical{M}}{\mechanical{M}_0}.
$$

Solving the quadratic gives $\mechanical{M}/\mechanical{M}_0=(6\pm\sqrt{36-4})/2=3\pm\sqrt8$. The rocket loses mass, so take the root below one.

$$
\frac{\mechanical{M}}{\mechanical{M}_0}=3-\sqrt8=3-2\sqrt2\approx0.1716.
$$

About $17\%$ of the initial mass remains.

### PDF page 61

## Chapter 13 sample problems

#### 1. Photon torpedo

The starship Endeavor has one photon torpedo after a surprise attack. The torpedo carries $1\;\unit{GJ}$ of energy as $1\;\unit{MeV}$ photons in Endeavor's frame. The alien ship approaches head-on at $(12/13)\mechanical{c}$. It is disabled if the torpedo strikes with at least $4\;\unit{GJ}$ in the aliens' frame. Find (a) the photon count, (b) the photon frequency in each frame, and (c) whether the strike disables the alien ship.

(a) The notes use $1\;\unit{eV}=1.60\times10^{-19}\;\unit{J}$. Each photon carries $1.60\times10^{-13}\;\unit{J}$ in Endeavor's frame, so the count is

$$
N=\frac{10^9\;\unit{J}}{1.60\times10^{-13}\;\unit{J}}
=6.25\times10^{21}.
$$

(b) The aliens move to the left in our frame, so choose their frame as $S$ and ours as $S'$. The frequency on Endeavor is

$$
\signal{\nu}'=\frac{\energy{E}'}{\energy{h}}
=\frac{1.60\times10^{-13}\;\unit{J}}{6.63\times10^{-34}\;\unit{J\,s}}
\approx2.41\times10^{20}\;\unit{Hz}.
$$

The approaching geometry gives the blueshift

$$
\signal{\nu}
=\signal{\nu}'\sqrt{\frac{1+\mechanical{v}/\mechanical{c}}{1-\mechanical{v}/\mechanical{c}}}
=\signal{\nu}'\sqrt{\frac{1+12/13}{1-12/13}}
=5\signal{\nu}'.
$$

### PDF page 62

(c) The photon count is the same in both frames. In the aliens' frame each photon has five times the energy it has in Endeavor's frame, so the total is $5\;\unit{GJ}$. This exceeds the required $4\;\unit{GJ}$ and disables the ship.

The same result follows by transforming the torpedo's total energy and momentum. In Endeavor's frame $\energy{E}'=10^9\;\unit{J}$ and $\mechanical{p}_x'=\energy{E}'/\mechanical{c}$. In the alien frame,

$$
\energy{E}=\mechanical{\gamma}(\energy{E}'+\mechanical{v}\mechanical{p}_x')
=\frac{13}{5}\left(1+\frac{12}{13}\right)10^9\;\unit{J}
=5\times10^9\;\unit{J}.
$$

#### 2. Threshold for neutral pion production

A synchrotron accelerates protons and directs them at stationary protons in liquid hydrogen. Find the threshold incident proton energy for $p+p\longrightarrow p+p+\pi^0$. Use $\mechanical{m}_p\mechanical{c}^2=938.3\;\unit{MeV}$ and $\mechanical{m}_{\pi^0}\mechanical{c}^2=135.0\;\unit{MeV}$.

Equation 13.25 gives the threshold total energy of incident particle $1$ against stationary particle $2$.

$$
(\energy{E}_1)_{\mathrm{th}}
=\frac{\left(\sum_{i\,\mathrm{final}}\mechanical{m}_i\mechanical{c}^2\right)^2
-(\mechanical{m}_1^2+\mechanical{m}_2^2)\mechanical{c}^4}
{2\mechanical{m}_2\mechanical{c}^2}.
$$

For the proton beam,

$$
\begin{aligned}
(\energy{E}_1)_{\mathrm{th}}
&=\frac{[(2\mechanical{m}_p+\mechanical{m}_{\pi^0})\mechanical{c}^2]^2
-2\mechanical{m}_p^2\mechanical{c}^4}{2\mechanical{m}_p\mechanical{c}^2}\\
&=\frac{(2\cdot938.3+135.0)^2-2(938.3)^2}{2\cdot938.3}\;\unit{MeV}
\approx1218\;\unit{MeV}.
\end{aligned}
$$

Subtract the incident proton's rest energy to get the threshold kinetic energy. With the rounded total energy in the notebook, this is $(1218.0-938.3)\;\unit{MeV}=279.7\;\unit{MeV}$.

### PDF page 63

For a center-of-momentum frame $S'$ moving right at speed $\mechanical{V}$ relative to the lab $S$, the boost is

$$
\energy{E}'=\mechanical{\gamma}(\energy{E}-\mechanical{V}\mechanical{p}_x),\qquad
\mechanical{p}_x'=\mechanical{\gamma}\left(\mechanical{p}_x-\frac{\mechanical{V}\energy{E}}{\mechanical{c}^2}\right).
$$

#### Problem 13-1

(a) An electron with rest energy $0.511\;\unit{MeV}$ moves right at $\mechanical{v}=(3/5)\mechanical{c}$ in $S$. Its Lorentz factor is $5/4$, so

$$
\energy{E}=\frac54(0.511\;\unit{MeV})\approx0.639\;\unit{MeV},
\qquad
\mechanical{p}_x=\frac54\frac35\frac{0.511\;\unit{MeV}}{\mechanical{c}}
\approx\frac{0.383\;\unit{MeV}}{\mechanical{c}}.
$$

(b) Boost to $S'$ moving at $\mechanical{V}=(4/5)\mechanical{c}$. The boost factor is $5/3$.

$$
\begin{aligned}
\energy{E}'&\approx\frac53\left[0.639-\frac45(0.383)\right]\unit{MeV}
\approx0.554\;\unit{MeV},\\
\mechanical{p}_x'&\approx\frac53\left[0.383-\frac45(0.639)\right]\frac{\unit{MeV}}{\mechanical{c}}
\approx-\frac{0.214\;\unit{MeV}}{\mechanical{c}}.
\end{aligned}
$$

The boxed energy in the notebook is labeled in momentum units. Here the equation for $\energy{E}'$ gives MeV.

#### Problem 13-3

(a) A neutron of mass $939.6\;\unit{MeV}/\mechanical{c}^2$ moves along positive $y$ at $(3/5)\mechanical{c}$. Its Lorentz factor is $5/4$, so $\mechanical{p}_x=0$, $\mechanical{p}_y=704.7\;\unit{MeV}/\mechanical{c}$, and $\energy{E}=1174.5\;\unit{MeV}$.

(b) Boost along positive $x$ with $\mechanical{V}=(3/5)\mechanical{c}$. The transverse component is unchanged.

$$
\begin{aligned}
\mechanical{p}_x'
&=-\frac54\frac35\frac{1174.5\;\unit{MeV}}{\mechanical{c}}
\approx-\frac{880.9\;\unit{MeV}}{\mechanical{c}},\\
\mechanical{p}_y'&=\mechanical{p}_y=\frac{704.7\;\unit{MeV}}{\mechanical{c}},\\
\energy{E}'&=\frac54(1174.5\;\unit{MeV})\approx1468\;\unit{MeV}.
\end{aligned}
$$

The notebook rounds the longitudinal momentum to $-880.8\;\unit{MeV}/\mechanical{c}$.

### PDF page 64

#### Four-position and proper time

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

### PDF page 65

## Chapter 9 sample problems

#### 1. Diagram of the Lorentz transformation

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

### PDF page 66

Set $\mechanical{c}t'=0$ in (2) to draw the $\mechanical{x}'$ axis in the unprimed diagram. Its equation is $\mechanical{c}t=\mechanical{\beta}\mechanical{x}$. Since $0<\mechanical{\beta}<1$, its angle from the positive $\mechanical{x}$ axis is less than $45^\circ$. Set $\mechanical{x}'=0$ in (1) to draw the $\mechanical{c}t'$ axis. Its equation is $\mechanical{x}=\mechanical{\beta}\mechanical{c}t$, with the same tilt relative to the $\mechanical{c}t$ axis. The handwritten discussion ends mid-sentence after introducing this second angle.

## Additional problems

#### Problem 8-1

A clock moves right at $\mechanical{v}=\mechanical{c}/2$ and measures $t'=10\;\unit{s}$ from the common origin. The Lorentz factor is $(1-1/4)^{-1/2}=2/\sqrt3$. For the event at the moving clock's position $\mechanical{x}'=0$, the inverse transformation reduces to

$$
t=\mechanical{\gamma}t'=\frac{2}{\sqrt3}(10\;\unit{s})\approx11.5\;\unit{s}.
$$

#### Problem 8-3

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

### PDF page 67

#### Problem 8-5

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

### PDF page 68

#### Problem 10-3

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

#### Problem 10-7

The sketch shows masses $\mechanical{m}$ and $\mechanical{M}$ moving toward one another. The total momentum is zero. For $\mechanical{V}_1=(3/5)\mechanical{c}$ and $\mechanical{V}_2=-(4/5)\mechanical{c}$ the Lorentz factors are $\mechanical{\gamma}_1=5/4$ and $\mechanical{\gamma}_2=5/3$.

$$
\begin{aligned}
\mechanical{\gamma}_1\mechanical{m}\mechanical{V}_1+
\mechanical{\gamma}_2\mechanical{M}\mechanical{V}_2&=0,\\
\frac34\mechanical{m}\mechanical{c}&=\frac43\mechanical{M}\mechanical{c},\\
\frac{\mechanical{M}}{\mechanical{m}}&=\frac9{16}.
\end{aligned}
$$

### PDF page 69

The energy–momentum relation is marked with a star.

$$
\energy{E}^2=\mechanical{p}^2\mechanical{c}^2+\mechanical{m}^2\mechanical{c}^4.
$$

#### Problem 10-9

At what speed is the relativistic momentum $1\%$ greater than the classical value? Since $\mechanical{p}=\mechanical{\gamma}\mechanical{m}\mechanical{v}$, the condition is $\mechanical{\gamma}=1.01$. Squaring the defining relation for $\mechanical{\gamma}$ gives

$$
1-\frac{\mechanical{v}^2}{\mechanical{c}^2}=\frac{1}{(1.01)^2},
\qquad
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac{1}{(1.01)^2}}\approx0.14.
$$

The speed is about $14\%$ of the speed of light.

#### Problem 11-7

A particle has proper lifetime $\tau=10^{-10}\;\unit{s}$ and lab energy $\energy{E}=1000\mechanical{m}\mechanical{c}^2$. The energy gives $\mechanical{\gamma}=1000$, so

$$
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac{1}{1000^2}}\approx0.9999995.
$$

Its lab lifetime is $t=\mechanical{\gamma}\tau=10^{-7}\;\unit{s}$. The distance traveled is

$$
\mechanical{d}=\mechanical{v}t
\approx(0.9999995)\mechanical{c}(10^{-7}\;\unit{s})\approx30\;\unit{m}.
$$

### PDF page 70

#### Problem 11-3

A spaceship has rest mass $\mechanical{m}=1.0\times10^8\;\unit{kg}$ and its elapsed time is $0.10$ times the elapsed time measured in Earth's frame. Thus $\mechanical{\gamma}=10$, and

$$
\energy{E}=10\mechanical{m}\mechanical{c}^2,\qquad
\energy{K}=(\mechanical{\gamma}-1)\mechanical{m}\mechanical{c}^2=9\mechanical{m}\mechanical{c}^2.
$$

Solving for the speed gives

$$
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac{1}{100}}\approx0.995.
$$

#### Problem 11-11

A particle with rest energy $1116\;\unit{MeV}$ has kinetic energy $1116\;\unit{MeV}$ in the lab and travels $13.7\;\unit{cm}$ before decaying. Since $\energy{K}=(\mechanical{\gamma}-1)\mechanical{m}_0\mechanical{c}^2$ equals the rest energy, $\mechanical{\gamma}=2$. Then

$$
\frac{\mechanical{v}}{\mechanical{c}}=\sqrt{1-\frac14}=\frac{\sqrt3}{2}\approx0.87.
$$

The production and decay locations are separated by $0.137\;\unit{m}$ in the lab. In the particle's frame the lab moves, and its distance between these locations measured at a common particle-frame time is $0.137\;\unit{m}/2=0.0685\;\unit{m}$. The particle's proper lifetime is this contracted distance divided by the relative speed.

$$
\tau\approx\frac{0.0685\;\unit{m}}{0.87\mechanical{c}}
\approx2.62\times10^{-10}\;\unit{s}.
$$

### PDF page 71

#### Problem 11-13

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

#### Chapter 9 review of spacelike and timelike intervals

The final review uses the sign convention of equation 9.11.

$$
(\Delta\mechanical{s})^2=-(\mechanical{c}\Delta t)^2+
(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2.
$$

If $(\Delta\mechanical{s})^2>0$, the spatial separation $\sqrt{(\Delta\mechanical{x})^2+(\Delta\mechanical{y})^2+(\Delta\mechanical{z})^2}$ exceeds $\mechanical{c}|\Delta t|$. This interval is **spacelike**. If $(\Delta\mechanical{s})^2<0$, the interval is **timelike**.

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
| $\mechanical{V}_x$, $\mechanical{V}_y$, $\mechanical{V}_z$ and primed forms | $\unit{m\,s^{-1}}$ | Object velocity components | Velocity of an object along the coordinate axes. |
| $\Delta t_{\mathrm f}$, $\Delta t_{\mathrm b}$ | $\unit{s}$ | Outbound and return times | Light travel times on the two legs of the longitudinal light clock. |
| $\mechanical{V}_A,\mechanical{V}_B,\mechanical{V}_C$ | $\unit{m\,s^{-1}}$ | Ship speeds | Speed magnitudes in the frame of the problem. |
| $\mechanical{\theta}$, $\mechanical{\theta}'$ | $\unit{rad}$ | Angle | Tilt of a rod or coordinate axis, or angle of a ray relative to the reference axis. |
| $\mechanical{s}^2$ | $\unit{m^2}$ | Squared spacetime interval | Invariant quadratic expression in coordinate separations. |
| $\mechanical{\vec p}$, $\mechanical{p}_{\mathrm{tot}}$ | $\unit{kg\,m\,s^{-1}}$ | Momentum | Momentum of a particle and the sum over particles. |
| $\mechanical{X}_{\mu}$ | $\unit{m}$ | Four-position | Spacetime position with the time coordinate scaled by the speed of light. |
| $\mechanical{U}_{\mu}$ | $\unit{m\,s^{-1}}$ | Four-velocity | Rate of change of four-position with respect to proper time. |
| $\mechanical{p}_{\mu}$ | $\unit{kg\,m\,s^{-1}}$ | Four-momentum | Product of the mass and four-velocity. |
| $\energy{h}$ | $\unit{J\,s}$ | Planck constant | Relates photon energy to frequency. |
| $\signal{\nu}$, $\signal{\nu}'$ | $\unit{Hz}$ | Photon frequencies | Frequencies before and after scattering. |
| $\mechanical{m}_e$ | $\unit{kg}$ | Electron mass | Rest mass of the electron. |
| $\energy{E}_e$ | $\unit{J}$ | Electron energy | Total relativistic energy of the recoiling electron. |
| $\mechanical{p}_e$ | $\unit{kg\,m\,s^{-1}}$ | Electron momentum magnitude | Magnitude of the recoiling electron's spatial momentum. |
| $\mechanical{\phi}$ | $\unit{rad}$ | Electron recoil angle | Angle of the electron's path below the incident photon direction. |
| $\signal{\lambda}_{\mathrm C}$ | $\unit{m}$ | Electron Compton wavelength | Characteristic wavelength that sets the scale of the scattering shift. |
| $\signal{\hat k}$ | 1 | Propagation direction | Unit vector along the photon momentum. |
| $\mechanical{m}_{K^0}$, $\mechanical{m}_{\pi^0}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Particle masses | Rest masses of the neutral kaon and neutral pion. |
| $\energy{E}$, $\energy{E}'$, $\energy{E}_{\mathrm{tot}}$ | $\unit{J}$ or $\unit{eV}$ | Energy | Time component of four-momentum multiplied by the speed of light. |
| $\mechanical{m}_0$ | $\unit{kg}$ | Rest mass | Invariant mass measured in the rest frame. |
| $\mechanical{m}_{\mathrm{rel}}$ | $\unit{kg}$ | Relativistic mass | Frame-dependent shorthand for the total energy divided by the speed of light squared. |
| $\energy{E}_0$ | $\unit{J}$ or $\unit{eV}$ | Rest energy | Energy of an object at rest. |
| $\energy{K}$ | $\unit{J}$ or $\unit{eV}$ | Kinetic energy | Difference between total energy and rest energy. |
| $\energy{\mathrm{BE}}/A$ | $\unit{MeV}$ per nucleon | Binding energy per nucleon | Nuclear binding energy divided by the mass number. |
| $\mechanical{m}_p$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Proton mass | Rest mass of the proton. |
| $\mechanical{m}_n$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Neutron mass | Rest mass of the neutron. |
| $\mechanical{m}_{\Sigma^-}$, $\mechanical{m}_{\pi^-}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Decay particle masses | Rest masses of the sigma-minus particle and negative pion. |
| $\mechanical{M}_0$, $\mechanical{M}$ | $\unit{kg}$ or $\unit{MeV}/\mechanical{c}^2$ | Initial and final masses | Invariant masses before and after photon absorption or rocket acceleration. |
| $N$ | 1 | Photon count | Number of photons carried by the photon torpedo. |
