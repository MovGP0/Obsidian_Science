---
title: "Ordinary Differential Equations"
---

> [!TLDR]
> A differential equation asks for a function whose derivatives satisfy a relation. Initial and boundary conditions select the solutions that describe a physical system.

An algebraic equation such as $x^2-4=0$ asks: Which number $x$ satisfies this relation? The answer is a number, or a finite set of numbers: $x=\pm2$.

A differential equation asks a different question: Which **function** $y(x)$ satisfies a relation between $y$, its derivatives, and the independent variable? The answer is a function, or a family of functions with arbitrary constants as parameters.

The search for functions instead of numbers lets us describe change with time. Newton's law $\mechanical{F}=\mechanical{m}\mechanical{a}$ is a differential equation. Given the force, we seek the trajectory. The Schrödinger equation is also a differential equation. Given the Hamiltonian operator, we seek the wavefunction.

## Which unknown does the equation determine?

Begin by identifying the independent variable. A classical trajectory evolves in time. A stationary wavefunction in a one-dimensional potential solves a second-order equation in position. A finite-dimensional quantum state instead evolves through coupled first-order equations in time. The full position-space time-dependent Schrödinger equation contains both position and time derivatives and is a partial differential equation; the ODE methods here apply after the appropriate reduction.

Study first-order equations to see how one initial value selects a local solution. Next use constant-coefficient second-order equations to distinguish oscillation from exponential growth or decay. Matrix systems then show how several amplitudes evolve together. Finally, add spatial boundary conditions to see why a nonzero stationary solution exists only at selected energies in the box example.

For every worked solution, check three things: substitution into the equation, satisfaction of the given conditions, and the interval on which it exists. A formula that passes only the first check need not solve the stated physical problem.

## Chapter sections

- [[01 First-Order Equations|First-order equations]]
- [[02 Second-Order Linear Equations|Second-order linear equations]]
- [[03 Systems of Linear Differential Equations|Systems of linear differential equations]]
- [[04 Eigenvalues of Differential Operators|Eigenvalues of differential operators]]
- [[05 The Schrodinger Equation|The Schrödinger equation]]
- [[03 Ordinary Differential Equations/06 Common Errors|Common errors]]
- [[03 Ordinary Differential Equations/07 Chapter Summary|Chapter summary]]
- [[03 Ordinary Differential Equations/08 Exercises|Exercises]]

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{F}$ | $\unit{N}$ | Force | The force that determines the particle's motion. |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | The particle mass in Newton's law. |
| $\mechanical{a}$ | $\unit{m\,s^{-2}}$ | Acceleration | The second time derivative of position. |
