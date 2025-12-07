---
title: Divergence ∇•F
---
Measures the *source* or *drain* in the flow of a vector field.

| Property/Operator        | $\text{div}$                                                                                                                                                                                                               |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Symbol**               | $\nabla \cdot \mathbf{F}$                                                                                                                                                                                                  |
| **Definition**           | For a vector field $\mathbf{F} = (F_x, F_y, F_z)$ in $\mathbb{R}^3$, its divergence is: $$ \text{div}(\mathbf{F}) = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} $$ |
| **Output**               | Scalar field                                                                                                                                                                                                               |
| **Geometric Meaning**    | Measures the rate at which "density" exits a given region (how much a field is "spreading out"). Positive divergence indicates a source, and negative indicates a sink.                                                    |
| **Physical Examples**    | 1. Divergence of a fluid velocity field gives the rate of volume expansion or contraction. 2. Electric charge density in relation to electric field in Gauss's law.                                                        |
| **Invariants**           | Divergence is coordinate invariant, meaning it remains unchanged under coordinate transformations.                                                                                                                         |
| **Fundamental Theorems** | Divergence Theorem (or Gauss's Theorem): For a vector field $\mathbf{F}$ and a volume $V$ bounded by a closed surface $S$, $$ \int_V \nabla \cdot \mathbf{F} \, dV = \oint_S \mathbf{F} \cdot d\mathbf{S} $$               |
