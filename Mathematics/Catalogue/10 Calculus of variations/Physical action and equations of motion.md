---
title: "Physical action and equations of motion"
catalogue_ids:
  - "10.6.2"
---

> [!TLDR]
> The stationary-action principle turns a difference of kinetic and potential energy into equations of motion; stationarity does not always mean least action.

## A mathematical method applied to a physical model

Read [[Functionals and stationary curves]] and [[Tests with first and second variations]] first. They define functionals and distinguish a stationary function from a minimum. Here the independent variable is physical time, written $\signal{t}$, and the unknown $\mechanical{q}(\signal{t})$ is position on a line. A dot denotes differentiation with respect to time. The velocity is $\dot{\mechanical{q}}$ and acceleration is $\ddot{\mechanical{q}}$.

For a particle of constant positive mass $\mechanical{m}$, define kinetic energy $\energy{T}=\tfrac12\mechanical{m}\dot{\mechanical{q}}^{\,2}$ and a differentiable potential-energy function $\energy{V}(\mechanical{q})$. The force in this conservative model is $\mechanical{F}=-d\energy{V}/d\mechanical{q}$. Conservative means that the force is described by this position-dependent potential; friction is not included in this elementary model.

The **Lagrangian** is $\energy{\mathcal L}=\energy{T}-\energy{V}$. The **action** of a candidate path is

$$
\energy{S}[\mechanical{q}]
=\int_{\signal{t}_0}^{\signal{t}_1}
\left(\frac12\mechanical{m}\dot{\mechanical{q}}^{\,2}
-\energy{V}(\mechanical{q})\right)d\signal{t}.
$$

Action has the unit energy multiplied by time. It is not the total energy and not a length. The principle states that a physical path is stationary under smooth path changes that hold position fixed at the two fixed endpoint times. It is a way to express the equations of this physical model, not an assertion that the particle searches possible futures. An initial-value problem still uses initial position and velocity; fixed endpoints are the mathematical comparison used in the variational derivation.

## Derive the equation of motion

Vary the path as $\mechanical{q}+\varepsilon\mechanical{\eta}$, where $\varepsilon\mechanical{\eta}$ has the dimension of position and vanishes at the endpoint times. Differentiate with respect to the dimensionless parameter $\varepsilon$:

$$
\delta\energy{S}
=\int\left(\mechanical{m}\dot{\mechanical{q}}\dot{\mechanical{\eta}}
-\energy{V}'(\mechanical{q})\mechanical{\eta}\right)d\signal{t}.
$$

The prime on the potential means its derivative with respect to position, not time. Integration by parts gives

$$
\delta\energy{S}
=\left[\mechanical{m}\dot{\mechanical{q}}\mechanical{\eta}\right]_{\signal{t}_0}^{\signal{t}_1}
-\int\left(\mechanical{m}\ddot{\mechanical{q}}+\energy{V}'(\mechanical{q})\right)\mechanical{\eta}\,d\signal{t}.
$$

The endpoint term vanishes. Since interior shape changes are arbitrary, the equation is

$$
\mechanical{m}\ddot{\mechanical{q}}
=-\energy{V}'(\mechanical{q})=\mechanical{F}.
$$

Thus the Euler–Lagrange equation recovers Newton's equation in this conservative setting. For several position coordinates, there is one equation per coordinate. The framework also permits non-Cartesian coordinates, but the kinetic-energy formula must then match those coordinates. [David Tong, The Lagrangian Formalism](https://www.damtp.cam.ac.uk/user/tong/dynamics/dynhtml/S2.html) gives the derivation and its coordinate interpretation.

## Worked example: a restoring force

Take $\energy{V}=\tfrac12\mechanical{k}\mechanical{q}^{\,2}$ with $\mechanical{k}>0$. The parameter $\mechanical{k}$ measures restoring force per displacement. Define $\signal{\omega}=\sqrt{\mechanical{k}/\mechanical{m}}$. The equation becomes

$$
\ddot{\mechanical{q}}+\signal{\omega}^{\,2}\mechanical{q}=0.
$$

The solution with initial position $\mechanical{q}_0$ and velocity $\mechanical{v}_0$ at time zero is

$$
\mechanical{q}(\signal{t})
=\mechanical{q}_0\cos(\signal{\omega}\signal{t})
+\frac{\mechanical{v}_0}{\signal{\omega}}\sin(\signal{\omega}\signal{t}).
$$

Differentiate twice to check the equation. At zero, cosine is $1$ and sine is $0$, giving the correct initial position. The derivative at zero is $\mechanical{v}_0$, giving the correct initial velocity. For $\mechanical{m}=2\,\unit{kg}$ and $\mechanical{k}=8\,\unit{N/m}$, the angular frequency is $2\,\unit{s^{-1}}$. With $\mechanical{q}_0=0.1\,\unit{m}$ and $\mechanical{v}_0=0$, the position is $(0.1\,\unit{m})\cos((2\,\unit{s^{-1}})\signal{t})$.

Energy conservation provides an independent check. The total energy is

$$
\energy{E}=\frac12\mechanical{m}\dot{\mechanical{q}}^{\,2}
+\frac12\mechanical{k}\mechanical{q}^{\,2}.
$$

Its time derivative is $\dot{\mechanical{q}}(\mechanical{m}\ddot{\mechanical{q}}+\mechanical{k}\mechanical{q})=0$ along a solution. In the numeric example it is $0.04\,\unit{J}$. Notice that this conserved sum differs from the difference used in the action integrand.

## Why stationary action need not be least action

For the oscillator, the second action variation about any solution is

$$
\delta^2\energy{S}[\mechanical{q};\mechanical{\eta}]
=\int_0^{\signal{\tau}}
\left(\mechanical{m}\dot{\mechanical{\eta}}^2-\mechanical{k}\mechanical{\eta}^2\right)d\signal{t},
$$

where $\signal{\tau}>0$ is the fixed duration and $\mechanical{\eta}$ vanishes at both ends. Test $\mechanical{\eta}=\mechanical{a}\sin(n\pi\signal{t}/\signal{\tau})$ for a displacement amplitude $\mechanical{a}\ne0$ and integer $n\geq1$. Integration gives

$$
\delta^2\energy{S}
=\frac{\mechanical{a}^{\,2}\signal{\tau}}{2}
\left[\mechanical{m}\left(\frac{n\pi}{\signal{\tau}}\right)^2-\mechanical{k}\right].
$$

If $\signal{\tau}>\pi/\signal{\omega}$, the direction $n=1$ has negative second variation. Large enough $n$ gives positive second variation. The stationary path is then a saddle for fixed endpoints. This calculation directly disproves the general claim that action is always minimized. At the threshold the first direction is zero; a zero second variation alone is inconclusive. The physical equation remains valid.

## Practice

1. Set the potential to zero. Derive the path between fixed positions $\mechanical{q}_0,\mechanical{q}_1$ in duration $\signal{\tau}$ and show that this action is minimized.
2. In the numeric oscillator above, test whether duration $\signal{\tau}=2\,\unit{s}$ permits a negative second-variation direction.

### Worked answers

1. The equation is $\ddot{\mechanical{q}}=0$, so $\mechanical{q}=\mechanical{q}_0+(\mechanical{q}_1-\mechanical{q}_0)\signal{t}/\signal{\tau}$. For a zero-endpoint change $\mechanical{\eta}$, the action difference is exactly $\tfrac12\mechanical{m}\int\dot{\mechanical{\eta}}^2d\signal{t}\geq0$ after the linear boundary term cancels. Equality requires the zero change, so this is the unique minimizer in the smooth class.
2. Here $\signal{\omega}=2\,\unit{s^{-1}}$ and $\pi/\signal{\omega}\approx1.571\,\unit{s}$. Since $2>1.571$, the $n=1$ sine direction makes the bracket negative. The $n=2$ bracket is positive, so a stationary solution on this interval is a saddle, with both increasing and decreasing nearby action values.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{t},\signal{t}_0,\signal{t}_1$ | $\unit{s}$ | Time | Time coordinate and fixed endpoint times. |
| $\signal{\tau}$ | $\unit{s}$ | Duration | Length of the comparison time interval. |
| $\mechanical{q},\mechanical{q}_0,\mechanical{q}_1$ | $\unit{m}$ | Position | Particle position and prescribed positions. |
| $\dot{\mechanical{q}},\mechanical{v}_0$ | $\unit{m/s}$ | Velocity | Position derivative and initial velocity. |
| $\ddot{\mechanical{q}}$ | $\unit{m/s^2}$ | Acceleration | Second time derivative of position. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Positive constant particle mass. |
| $\mechanical{F}$ | $\unit{N}$ | Force | Negative derivative of potential energy. |
| $\mechanical{k}$ | $\unit{N/m}$ | Restoring coefficient | Force per displacement in the oscillator model. |
| $\energy{T}$ | $\unit{J}$ | Kinetic energy | Energy associated with velocity. |
| $\energy{V}$ | $\unit{J}$ | Potential energy | Position-dependent energy function. |
| $\energy{E}$ | $\unit{J}$ | Total energy | Sum of kinetic and potential energy. |
| $\energy{\mathcal L}$ | $\unit{J}$ | Lagrangian | Kinetic energy minus potential energy. |
| $\energy{S}$ | $\unit{J\,s}$ | Action | Time integral of the Lagrangian. |
| $\signal{\omega}$ | $\unit{s^{-1}}$ | Angular frequency | Square root of restoring coefficient divided by mass. |
| $\mechanical{\eta},\mechanical{a}$ | $\unit{m}$ | Displacement variation | Test displacement and its amplitude. |
