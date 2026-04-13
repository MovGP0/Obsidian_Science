---
title: Hamiltonian formulation
---
The Hamiltonian method describes the same physics as the Lagrangian method, but it focuses more directly on energies and momenta.

## Canonical variables

In this picture we work with pairs of variables:

$$
(\mathbf{R}, \mathbf{P}), \quad (\boldsymbol{\theta}, \mathbf{L})
$$

Their meaning is:

- $\mathbf{R}$ is position and $\mathbf{P}$ is linear momentum
- $\boldsymbol{\theta}$ describes orientation and $\mathbf{L}$ is angular momentum

So the Hamiltonian picture places linear motion and rotational motion next to each other from the start.

The total energy is described by the Hamiltonian

$$
H = \tfrac{1}{2M}\mathbf{P}^2 + \tfrac12 \mathbf{L}^T \mathbf{I}^{-1} \mathbf{L} + V(\mathbf{R}, \boldsymbol{\theta})
$$

This formula contains:

- translational kinetic energy
- rotational kinetic energy
- potential energy

## Poisson brackets

Poisson brackets tell us how different physical quantities are connected in the Hamiltonian formalism.

The basic relations are

$$
\{P_i, P_j\} = 0
$$

Different components of linear momentum do not generate each other.

$$
\{L_i, L_j\} = \epsilon_{ijk} L_k
$$

The components of angular momentum are connected because rotations around different axes are related to each other.

$$
\{L_i, P_j\} = \epsilon_{ijk} P_k
$$

This is the important mixed relation. It says that angular momentum acts on linear momentum by rotating it.

## Critical observation

Because

$$
\{L_i, P_j\} \neq 0
$$

linear momentum and angular momentum are not completely separate. A rotation changes the direction of momentum, so the two concepts are linked mathematically.

> [!note]
> Angular momentum is the generator of rotations, and those rotations act on linear momentum.

## How change happens over time

In the Hamiltonian picture, time evolution is given by

$$
\dot{P}_i = \{P_i, H\}
$$

and

$$
\dot{L}_i = \{L_i, H\}
$$

This means:

- the Hamiltonian tells us how linear momentum changes
- the Hamiltonian also tells us how angular momentum changes

If the potential $V$ breaks a symmetry, then coupling appears. Typical examples are:

- a non-uniform potential, which creates a force
- a non-central force, which creates a torque

Then a change in $\mathbf{P}$ can lead to a change in $\mathbf{L}$, and a change in $\mathbf{L}$ can influence the motion described by $\mathbf{P}$.

In ordinary words: if the environment pushes the body in an uneven or off-center way, straight-line motion and rotational motion affect each other.

## Bigger picture

The quantities $(\mathbf{P}, \mathbf{L})$ belong to one common mathematical structure, called the Euclidean Lie algebra $\mathfrak{se}(3)$.

At a simple level, this just means:

- translations and rotations belong to one unified description of motion in space
- the Hamiltonian can mix them when forces and potentials allow it

So in the Hamiltonian formulation, "conversion" between linear and angular momentum is not mysterious. It is the natural result of how translations and rotations are connected in the equations.
