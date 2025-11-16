From the **Lagrangian**:
$$\begin{align*} \mathcal{L} &= {\color{brown}T} - V \\ 
&= {\color{brown}E_{kin}} - E_{pot} \\ 
& = {\color{brown}\frac{1}{2} m v^2} - V(x)
\end{align*}$$

where
- $m$ is the mass of an object (at position $x$)
- $v = \frac{d}{dt} x = \dot{x}$ is the velocity of the object
- $V(x)$ is the potential at position $x$ <br>(i.e. $m\,g\,h$ of a mass in gravity)

**Action** $S$ is the integration of the Lagrangian over time:
$$S = \int_{t} \left( { {\color{brown}E_{kin}} - E_{pot} } \right) dt$$
> [!note]
> Dependent on the literature, the symbols $A$ or $I$ may be used for Action.

> [!note]
> The **Principle of Least Action** is related to the **Principle of Least Time** for the propagation of light in Optics and the **Principle of Least Distance**

> [!example] Examples
> Examples for minimizing action:
> - Running on a beach vs. swimming in water to reach a goal.
> - The *Catenary line* minimizes the energy of a chain or rope.
> - Refaction of light with a medium where the speed of light is reduced.

> [!note]
> - the **Kinetic Energy** $T$ is a function of **velocities**
> - the **Potential Energy** $V$ is a function of **positions**

----

Assuming we have the function of the path $g$ over time $t$ as the sum of the path of least action $\hat{g}$ and an added (error) function $f$ and a scaling factor $α$:

$$g = \hat{g} + {\color{brown}α} f$$
![350](PrincipleOfLeastAction1.svg)
> [!note]
> in Physics, the time axis of a plot is usually the vertical one, while in Mathematics the independent variable is usually the horizontal axis.

When we differentiate by $α$, the only part that changes is the function $f$: 

$$\frac{d}{d {\color{brown}α}} g = \frac{d}{d{\color{brown}α}} (\hat{g} + {\color{brown}α} f) = f$$
When we differentiate by time, we get
$$\dot{g} = \dot{\hat{g}} + {\color{brown}α} \dot{f}$$
----

To get the least action we need to satisfy
$$\frac{∂ S(α)}{∂ α} = 0$$
which happens when $α = 0$.

----

Assuming we have the Action of an Lagrangian that depends on the path $g$ and it's derivative $\dot{g}$:

$$S = \int_{t} dt\, \mathcal{L} (g, \dot{g})$$
