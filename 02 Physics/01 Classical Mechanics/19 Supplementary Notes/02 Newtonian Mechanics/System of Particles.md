---
aliases:
  - Particle System
tags:
  - ClassicalMechanics
---
We use the notation $i$ and $j$ to represent different particles. $F_{ij}$ reads *the force on $i$ due to $j$*, while $F_{ji}$ reads *the force on $j$ due to $i$*.

For particles $i$ and $j$ [[Newton’s 3rd Law]] can be stated as

$$
\vec{F}_{ij} = -\vec{F}_{ji}
$$

The force on particle $i$ due to particle $j$ is equal yet opposite, hence the negative sign, to the force on $j$ due to $i$.

While forces are always balanced in pairs acting in opposite directions, we get resultant forces on bodies because they act on different particles, so each individual particle experiences a resultant force.

### Internal forces and external forces

If we consider a gas in a box as our system of $N$ particles then an **external force** acts on the entire system (i.e. the entire box), whilst **internal forces** occur within the system (i.e. molecular collisions or interactions).

#### Internal Forces

The total internal force on a particle is the sum of all the forces acting on it due to all the other particles it is influenced by:

$$
\vec{F}_i = \sum_j \vec{F}_{ij}
$$

where $\vec{F}_i$ is the total internal force on particle $i$ and $\vec{F}_{ij}$ is the force on $i$ due to particle $j$.

The summation is over all $j \neq i$, which just means over every other particle that acts on $i$ except for the particle itself, as you can’t consider a particle’s collision with itself.

> [!note]
> Because $F_{ii} = -F_{ii}$, follows $F_{ii} = 0$

The total rate of change of momentum for all particles is given by the sum over $i$ of the change of momentum of the $i$th particle $\vec{p}_i$ and is equal to the sum of all the internal forces due to all of the particle collisions:

$$
\sum_i \dot{\vec{p}}_i = \sum_{i,j} \vec{F}_{ij}
$$

Since we are now counting over $i$ as well, we are including all the reactive forces as well (i.e. the force on $j$ due to $i$).

Using Newton’s third law, the sum over both of these will be zero, since every force is counted twice, but one is $+$ and the other $-$.

This leaves us with the **conservation of momentum**: the total momentum of an isolated system never changes:

$$
\frac{d}{dt} \sum_i \vec{p}_i = 0
$$

The [[Conservation Laws]] state that the system retains information about the value of a quantity as the dynamics plays out.

We can test to see if a given quantity is a conserved quantity by taking its time derivative: if it is zero, then the quantity does not change with time and will have the same value over a time interval $\forall t \in [t_0, t_1]$ as over $\forall t \in [t_2, t_3]$.

#### External forces

We now also consider external forces. The second law for such a system is written as

$$
\sum_j \vec{F}_{ij} + \vec{F}_i^{(e)} = \dot{\vec{p}}_i
$$

This is the sum of internal and external forces, where $\vec{F}_i^{(e)}$ is the external force acting on particle $i$, and $\sum_j \vec{F}_{ij}$ is the total internal force.

Using the third law and summing over all $i$ particles we can write an expression for the total rate of change of momentum of the system as follows:

The left-hand side is written in equation above, but note that $F_{ii}=0$:

$$
\sum_i \sum_{j} \vec{F}_{ij} + \sum_i \vec{F}_i^{(e)} = \vec{F}_{\text{total}}^{(e)}
$$

Since we know by the third law that

$$
\sum_i \sum_{j} \vec{F}_{ij} = 0
$$

and assuming the mass is constant, we can sum over the right-hand side:

$$
\sum_i \dot{\vec{p}}_i
= \sum_i \frac{d\vec{p}_i}{dt}
= \sum_i m_i \frac{d\vec{v}_i}{dt}
= \sum_i m_i \frac{d}{dt}\left(\frac{d\vec{r}_i}{dt}\right)
= \frac{d^2}{dt^2} \left( \sum_i m_i \vec{r}_i \right)
$$

For a system with a distribution of mass we can define a point where the *weighted position of the mass all added up is equal to zero*; it is a sort of mass balance point if you like.

For $N$ identical particles with coordinates $\vec{r}_i$ where the center of mass relative to the origin of the coordinate system is given by $\vec{R}$:

$$
\vec{R} = \frac{\sum_i m_i \vec{r}_i}{\sum_i m_i} = \frac{\sum_i m_i \vec{r}_i}{M}
$$

where $M$ is total mass, the sum of all the particles of the system.

This coordinate is defined from mass balance theory or **moments**.

The coordinates are defined by solving for $\vec{R}$ in the following relation:

$$
\sum_i m_i (\vec{r}_i - \vec{R}) = 0
$$

The vector $\vec{R}$ is a mass-weighted average of the positions.

We now substitute this into the previous expression to obtain an expression for the total external force acting on the system in terms of the coordinates of the center of mass and the total mass of the particles.

$$
\vec{F}_{\text{total}}^{(e)} = \frac{d^2}{dt^2} \left( \sum_i m_i \vec{r}_i \right) = M \frac{d^2 \vec{R}}{dt^2}
$$

This result tells us that the center of mass moves like a point particle with a mass equal to the sum of all the particles and with all the external forces acting directly on it.

This is very useful for a system with a large number of degrees of freedom where we wish to characterize the dynamics of the overall system without all the computational cost.

We come back to the conservation of linear momentum using the expression for the total momentum and sum the right-hand side over $N$ particles to give the total rate of change of momentum of the system:

$$
\vec{p}_{\text{total}} = \sum_i \vec{p}_i = \sum_i m_i \frac{d\vec{r}_i}{dt} = \frac{d}{dt} \sum_i m_i \vec{r}_i = M \frac{d\vec{R}}{dt}
$$

If the total external force on a system is zero then the total linear momentum is conserved (since the time derivative is zero) which can be seen by simple integration of the equation below, it is a constant:

$$
\vec{F}_{\text{total}}^{(e)} = \dot{\vec{p}}_{\text{total}}
$$

When we attempt to solve problems in Newtonian mechanics, we start by solving the second law for the trajectory and once we have the equation of motion it is simply a mathematical exercise to find a solution.

The general problem is written below for the $i$th particle.

The sum over all particles cancels the first term by the third law:

$$
\sum_j \vec{F}_{ij} + \vec{F}_i^{(e)} = m_i \ddot{\vec{r}}_i
$$

In general, when **constraints** are present we may not fully understand the form of the external forces.

> [!note]
> There is no other way in Newtonian mechanics to find conservation laws than brute calculations.
> This is not the case in **Lagrangian mechanics**.
