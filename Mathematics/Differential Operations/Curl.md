---
title: Curl ∇⨯F
---
Measures the "rotation" of a vector field.

| Property/Operator        | $\text{rot}$ or $\text{curl}$ |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Symbol**               | $\nabla \times \mathbf{F}$                                                                                                                                                                                                                                                                |
| **Definition**           | For a vector field $\mathbf{F}$, its curl is: $$ \text{curl}(\mathbf{F}) = \nabla \times \mathbf{F} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ F_x & F_y & F_z \end{vmatrix} $$ |
| **Output**               | Vector field                                                                                                                                                                                                                                                                              |
| **Geometric Meaning**    | Measures the tendency of the field to rotate around a point. Non-zero curl indicates a vortical behavior.                                                                                                                                                                                 |
| **Physical Examples**    | 1. Circulation in a fluid flow. 2. Magnetic fields around electric currents according to Ampère's circuital law.                                                                                                                                                                          |
| **Invariants**           | Magnitude of the curl is invariant under coordinate transformations.                                                                                                                                                                                                                      |
| **Fundamental Theorems** | Stokes' Theorem: For a vector field $\mathbf{F}$ and a surface $S$ bounded by a closed curve $C$, $$ \oint_C \mathbf{F} \cdot d\mathbf{r} = \int_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S} $$                                                                                        |
