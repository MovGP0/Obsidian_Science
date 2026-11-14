---
tags:
  - ClassicalMechanics
---
Looking at a system of $N$ particles that have a central force $\vec{F}$ acting between them.

The force has constant coefficients $\kappa_{ij}$ such that

$$
\vec{F}_{ji} = -\kappa_{ij} \frac{\vec{r}_i - \vec{r}_j}{\left|\vec{r}_i - \vec{r}_j\right|^n}, \quad j \neq i
$$

The equations of motion are formed from [[Newton’s 2nd Law]] and can be written as a system of $N$-coupled equations with $i \neq k$:

$$
m_i \ddot{\vec{r}}_i =
- \sum_{j \neq i}^{N} \kappa_{ij} \frac{\vec{r}_i}{r_{ij}^n}
+ \sum_{j \neq i, k}^{N} \kappa_{ij} \frac{\vec{r}_j}{r_{ij}^n}
+ \kappa_{ik} \frac{\vec{r}_k}{r_{ik}^n}
$$

This is known as the **N-body problem** for a set of initial positions and velocities.

> [!info]
> Motivated by Newton’s [Principia Mathematica](https://en.wikipedia.org/wiki/Principia_Mathematica), the solution to the problem was the subject of a prize in honor of the 60th birthday of [King Oscar II of Sweden](https://en.wikipedia.org/wiki/Oscar_II) in 1889.
> Although never solved in the general case even to this day, the prize was awarded to [Henri Poincaré](https://en.wikipedia.org/wiki/Henri_Poincar%C3%A9).
> This system has $6N$ variables $(x_i, y_i, z_i, \dot{x}_i, \dot{y}_i, \dot{z}_i)$ for each particle, and using the [Cauchy-Lipschitz theorem](https://en.wikipedia.org/wiki/Picard%E2%80%93Lindel%C3%B6f_theorem), it is known that there does exist a unique solution.

There are certain quantities of a dynamical system called **first integrals** of the motion that allow us to reduce the dimensionality of the system.

For the N-body system there are
- 3 integrals for the center of [[Inertia and Mass|Mass]]
- 3 integrals for the [[Linear momentum]]
- 3 integrals for the [[Angular momentum]]
- 1 integral for the [[Energy]]

These integrals reduce the problem to a dimension of $6N - 10$.

A further two integrals can be found, as shown by [Jacobi](https://en.wikipedia.org/wiki/Jacobi_integral).

- In the case that $N = 1, 2$ the N-body problem can be solved analytically as we have enough integrals of motion to reduce the system sufficiently.
- In the case that $N = 3$ there is still a six-dimensional system of equations.

Poincaré proved that the system contains no further integrals of the motion other than those above. This means that the system cannot be solved using the method of first integrals.

> [!note]
> Due to this problem new analytical methods were developed, most notably [perturbation theory](https://en.wikipedia.org/wiki/Perturbation_theory), while the [KAM theory](https://en.wikipedia.org/wiki/Kolmogorov%E2%80%93Arnold%E2%80%93Moser_theorem) is about the stability of perturbative solutions.

> [!note]
> There are also distribution functions like the [Liouville theorem](https://en.wikipedia.org/wiki/Liouville%27s_theorem) $\rho(r, p, t)$ in phase space.

> [!note]
> Numerical methods have been developed to brute force a solution, such as the [Runge-Kutta methods](https://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods).

> [!note]
> The **N-body problem** is still an open unsolved problem in mechanics and, although much headway has been made in the case that $N = 3$, solutions are usually restrictive, without collisions, or fixed inter-particle distances.
