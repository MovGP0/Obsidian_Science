---
title: "Lorentz transformations and clock comparisons"
---

> [!TLDR]
> Compare event pairs in two inertial frames to distinguish proper time, length contraction, and clock synchronization.

## Start with two events

Let the primed frame move at speed $\mechanical{v}$ along the positive $x$ axis of the unprimed frame. Use identical spatial orientations and synchronize clocks within each frame. The Lorentz transformation of event separations is

$$
\mechanical{\Delta x}'=\gamma(\mechanical{\Delta x}-\mechanical{v}\Delta t),\qquad
\Delta t'=\gamma(\Delta t-\mechanical{v}\mechanical{\Delta x}/\signal{c}^2),
\qquad \gamma=\frac1{\sqrt{1-(\mechanical{v}/\signal{c})^2}}.
$$

The interval $\signal{c}^2\Delta t^2-\mechanical{\Delta x}^2$ is invariant. For two ticks at the same primed position, $\mechanical{\Delta x}'=0$, which gives $\Delta t=\gamma\Delta t'$. Here the primed clock itself records the proper time $\Delta t'$. Measuring a moving rod instead requires two simultaneous endpoint events in the measuring frame. With $\Delta t=0$ and the rod at rest in the primed frame, its rest length is $\mechanical{\Delta x}'=\gamma\mechanical{\Delta x}$.

## Clock offset in a worked comparison

Set the two events at the ends of a rod separated by $\mechanical{\Delta x}=\quantity{300}{m}$ in the unprimed frame, with $\Delta t=0$. For $\mechanical{v}=0.6\signal{c}$, $\gamma=1.25$. The spatial separation is $\quantity{375}{m}$ in primed coordinates and the primed time difference is approximately $\quantity{-0.75}{\mu s}$. The end at greater unprimed position has the earlier primed time. The interval is negative, so changing the order of these spacelike-separated readings is consistent with the invariant. For a light signal the interval is zero, and the transformation gives the same speed of light in both frames. In the low-speed limit the position equation tends to its Galilean form.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Inertial frames, light clocks, and simultaneity problems#Light and the ether hypothesis|Physics 126]], [[Lorentz transformations and spacetime diagram problems#Minkowski spacetime|Physics 126]], [[Proper time and spacetime interval review problems#Four-position and proper time|Physics 126]].

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\Delta x},\mechanical{\Delta x}'$ | $\unit{m}$ | Position separations | Signed displacement between events in each frame. |
| $\Delta t,\Delta t'$ | $\unit{s}$ | Time separations | Signed coordinate time differences. |
| $\mechanical{v},\signal{c}$ | $\unit{m\,s^{-1}}$ | Speeds | Relative frame speed and invariant speed of light. |
| $\gamma$ | 1 | Lorentz factor | Factor that depends on relative speed. |
| $\signal{c}^2\Delta t^2-\mechanical{\Delta x}^2$ | $\unit{m^2}$ | Spacetime interval | Squared invariant separation in the stated sign convention. |
