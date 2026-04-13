---
tags:
  - ClassicalMechanics
---
We can imagine a scenario of a constant applied force, $F_x$, for a particle free to move in one dimension.

> [!note]
> We aim to arrive at a formula for the motion of a particle as a function of time.

We rearrange [Newton’s second law](Newton’s Second Law)
$$F_{x} = ma_{x} = m\frac{dv_x}{dt}$$
to get acceleration in terms of the applied force:

$$
\frac{dv_x}{dt} = \frac{F_x}{m}
$$

We now integrate both sides with respect to time, between the limits of $t$ and $0$:

$$
\int_0^t \frac{dv_x}{dt} \, dt = \int_0^t \frac{F_x}{m} \, dt
$$

$$
v_x \Big|_0^t = \left(\frac{F_x}{m} t + c \right)\Big|_0^t
$$

Evaluation of the limits gives us an expression we can rearrange to equal the velocity at time $t$:

$$
v_x(t) - v_x(0) = \left(\frac{F_x}{m} t + c \right) - \left(\frac{F_x}{m} 0 + c \right)
$$

Another integration with respect to $t$ and subsequent solving for $r_x(t)$ gives us,

$$
\int_0^t v_x(t)\, dt = \int_0^t \left(v_x(0) + \frac{F_x}{m} t \right) dt
$$

$$
r_x(t) = r_x(0) + v_x(0)t + \frac{F_x}{2m} t^2
$$

Remembering $F_x = m a_x$ we can substitute this into our equation to give,

$$
r_x(t) = r_x(0) + \dot{r}_x(0)t + \frac{1}{2} \ddot{r}_x t^2
$$

This result is the [Verlet Integration Algorithm](https://en.wikipedia.org/wiki/Verlet_integration), which is the basic way to integrate an equation of motion.

Under Newton’s formalism, we get — in principle — full predictability: by knowing the parameters of our system, we can predict exactly what will happen under a known applied force. 

> [!note]
> Some equations of motion may have more than one solution: it is the choice of the **initial conditions** which provide the specific solution.
