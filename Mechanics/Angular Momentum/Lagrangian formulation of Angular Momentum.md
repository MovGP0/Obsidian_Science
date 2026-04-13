---
title: Lagrangian formulation
---
The Lagrangian method describes motion by comparing kinetic energy and potential energy.

We choose two kinds of coordinates:

- $\mathbf{R}(t)$ for the position of the center of mass
- $\boldsymbol{\theta}(t)$ for the orientation of the body, for example Euler angles

The basic Lagrangian is

$$
L = T - V
$$

This means:

- $T$ is the kinetic energy, the energy of motion
- $V$ is the potential energy, for example from gravity or some external field

For a rigid body, the kinetic energy has two parts:

$$
T = \tfrac12 M \dot{\mathbf{R}}^2 + \tfrac12 \boldsymbol{\omega}^T \mathbf{I} \boldsymbol{\omega}
$$

The meaning is:

- $\tfrac12 M \dot{\mathbf{R}}^2$ is the kinetic energy of the whole body moving through space
- $\tfrac12 \boldsymbol{\omega}^T \mathbf{I} \boldsymbol{\omega}$ is the kinetic energy of the body spinning around its center of mass

So already at this stage we see that linear motion and rotation are treated side by side.

## Connection to momentum

From the Lagrangian we can define the corresponding momenta.

Linear momentum is

$$
\mathbf{P} = \frac{\partial L}{\partial \dot{\mathbf{R}}} = M \dot{\mathbf{R}}
$$

This is the usual formula mass times velocity.

Angular momentum is

$$
\mathbf{L} = \frac{\partial L}{\partial \boldsymbol{\omega}} = \mathbf{I}\boldsymbol{\omega}
$$

This says that angular momentum plays for rotation the same role that ordinary momentum plays for straight-line motion.

Using Noether's theorem:

- translational symmetry leads to conservation of linear momentum
- rotational symmetry leads to conservation of angular momentum

In simple words:

- if the laws of physics do not change from place to place, linear momentum is conserved
- if the laws of physics do not change when we rotate the system, angular momentum is conserved

## Where conversion happens

For a free rigid body, the translational part and the rotational part are cleanly separated in the kinetic energy. The conversion between linear and angular motion appears when external influences connect them.

### External potential

If the potential depends on both position and orientation,

$$
V(\mathbf{R}, \boldsymbol{\theta})
$$

then moving the body can affect how it turns, and turning the body can affect how it moves.

That means:

- the equations for translation and rotation become coupled
- a force can create a torque

The torque is

$$
\boldsymbol{\tau} = \mathbf{r} \times \mathbf{F}
$$

This formula says:

- $\mathbf{F}$ is the applied force
- $\mathbf{r}$ is the distance from the center of mass to the point where the force acts
- the cross product tells us how strongly the force tries to make the body rotate

### Non-central forces

If a force does not act exactly through the center of mass, it changes the angular momentum:

$$
\frac{d\mathbf{L}}{dt} = \mathbf{r} \times \mathbf{F}
$$

This is the main place where linear effects can turn into rotational effects. A force that pushes "off-center" does not only move the object, it also makes it spin.

## Structural insight

Angular momentum is linked to rotations. A very small rotation changes a position vector according to

$$
\delta \mathbf{r} = \boldsymbol{\epsilon} \times \mathbf{r}
$$

This tells us that rotations naturally involve a cross product. That is why angular momentum is built from the idea of

$$
\text{position} \times \text{linear momentum}
$$

So from the Lagrangian point of view, angular momentum is not something completely separate from ordinary momentum. It appears when momentum is combined with the geometry of rotation.
