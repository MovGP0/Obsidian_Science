---
title: "5.1 Review: Linear Momentum (p⃗)"
---

> [!TLDR]
> Linear momentum is the product of mass and velocity, and net external force changes it.

Our discussion so far has focused on Newton's Laws of motion and their extension to rotational motion. However, in our first course in mechanics when studying linear motion, we also learned about momentum, work, and energy. But why did we need to learn about these concepts? Aren't Newton's Laws enough for studying all mechanics?

While it is true that Newton's laws describe the resulting motion when we know the forces that are being exerted on a system, the concepts of momentum, work, and energy (a) allow us to study phenomena where forces are difficult to find and quantify (e.g., in collisions) and (b) due to symmetries we see in nature, lead to conservation laws that are very powerful and useful to have in our toolkit. Therefore, we will follow the same trajectory here and define the rotational analogs of these quantities, starting with the concept of angular momentum.

Linear momentum $\mechanical{\vec p}$ is the product of an object’s mass $\mechanical m$ and its velocity $\mechanical{\vec v}$, so $\mechanical{\vec p}=\mechanical m\mechanical{\vec v}$. Its SI unit is $\unit{kg\,m\,s^{-1}}$. Newton’s second law gives the relationship between the net force on an object and its rate of change of momentum.

$$
\Sigma \mechanical{\vec {F}} = \frac {d \mechanical{\vec {p}}} {d t} . \tag{5.1}
$$

From Equation (5.1) we see that if the net force is constant, then the rate of change of the momentum is constant. If there is no net force, then the momentum does not change (so its rate of change is zero). The momentum of an object changes only when a net force is exerted on it by another object.

For example, if we throw a ball toward a window, the window will exert a force on the ball when it hits the window, and so the ball's momentum will change. Because of Newton's Third Law, there is a force equal in magnitude but opposite in direction exerted by the ball on the window. If we want to predict how much force the ball will exert on the window, and thus whether or not the window will break, we can perform a calculation to predict the ball's change in momentum rather than actually throw the ball at the window.

It is possible to speak in a similar way about bodies in rotational motion and the effect they have on objects with which they come into contact. For example, imagine we want to quantify the change in a tennis ball's spin as it is hit by a racket. The quantity that describes this effect for rotational motion is called angular momentum, $\mechanical{\vec L}$. But how do we define angular momentum?

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical m$ | $\unit{kg}$ | Mass | Mass of the body or particle. |
| $\mechanical{\vec v}$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of the position vector. |
| $\mechanical{\vec p}$ | $\unit{kg\,m\,s^{-1}}$ | Linear momentum | Product of mass and velocity. |
| $\mechanical{\vec F}$ | $\unit{N}$ | Force | Force acting on the specified object. |
| $\mechanical{\vec L}$ | $\unit{kg\,m^2\,s^{-1}}$ | Angular momentum | Rotational momentum about the specified point or axis. |
| $t$ | $\unit{s}$ | Time | Time measured from the reference instant. |
