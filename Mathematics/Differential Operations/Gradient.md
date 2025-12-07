---
title: Gradient ∇F
---
Measures the *change of density* of a vector field.

| Property/Operator        | $\text{grad}$ (Gradient)                                                                                                                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Symbol**               | $\nabla f$                                                                                                                                                                                                         |
| **Definition**           | For a scalar field $f$ in $\mathbb{R}^3$, its gradient is defined as: $$ \text{grad}(f) = \nabla f = \left( \frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z} \right) $$ |
| **Output**               | Vector field                                                                                                                                                                                                       |
| **Geometric Meaning**    | Points in the direction of the maximum rate of increase of the scalar field and its magnitude is the maximum rate of change at that point.                                                                         |
| **Physical Examples**    | 1. Gradient of a temperature field gives the direction and rate of fastest temperature increase. 2. Electric field as the gradient of voltage in electrostatics.                                                   |
| **Invariants**           | The gradient is not invariant; its expression changes under coordinate transformations. However, its magnitude and direction (as a vector) remain invariant.                                                       |
| **Fundamental Theorems** | Gradient Theorem: For a scalar field $f$ and a curve $C$ from point A to point B, $$ \int_A^B \nabla f \cdot d\mathbf{r} = f(B) - f(A) $$                                                                          |
