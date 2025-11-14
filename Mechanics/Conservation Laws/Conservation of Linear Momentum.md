
Newton's Second Law
$$\mathbf{F} = \frac{\partial \mathbf{P}}{\partial t}$$

Using the Lagrange Equation
$$L = T - V$$
$$\frac{\partial L}{\partial x} = 0$$
----
## Using Newton's laws

> [!note]
> Newton assumes instant forces (not limited by *speed of light* $c$)

A force is defined as a change in momentum:
$$F = \frac{\partial}{\partial t} p$$
**Action–reaction**
Each action has an equal reaction. That is for a given force on particle $i$ by particle $j$, there is an equal force on particle $j$ on by particle $i$ with opposite direction:
$$\vec{F}_{ij}​=−\vec{F}_{ij} \quad ​∀i,j.$$
or in matrix notation:
$$F^α=−(F^α)^T$$
**No self-force**
A particle does not excert a force on itself:
$$\vec{F}_{ii} = 0$$
because of
$$\vec{F}_{{\color{brown} i}i} = -\vec{F}_{i{\color{brown} i}}$$

> [!note]
> The set of all forces build a [[Symmetrization and Antisymmetrization|skew-symmetric matrix]].

If we sum all the forces (the change of momenta) of all the particles, we get

$$\sum_{i=1}^n F_{i} = \sum_{i=1}^n \sum_{j=1}^n F_{ij} = 0$$
since the action/reaction pairs cancel each other.

> [!note]
> The conservation of linear momentum in Newtonian Physics is for each direction of space;
> - 3 conservation laws for each direction of space
> - 1 conservation law for time
>
> Under *Relativity Theory* those become unified into a single conservation law.

> [!note]
> In Newtonian mechanics, for every object in a system, we need both the position of an object $(x, y, z)$, as well as the velocities $(\dot{x}, \dot{y}, \dot{z})$,  at time $t$ to describe a system fully.
