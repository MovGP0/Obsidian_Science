### Holonomic constraints

**Holonomic constraints** are position-based restrictions depend only on the **location**.

> [!example]
> - A train must stay **on the track**.
> - A door must rotate **around its hinge**.

### Nonholonomic constraints

- **First-order nonholonomic constraints** are constraints on velocities.
- **Second-order nonholonomic constraints** are constraints on accelerations.
- **Third-order nonholonomic constraints** are constraints on jerks.
- etc.

### Pfaffian constraints

A **Pfaffian constraint** is a motion-based restriction that describes how something is allowed to move right now, based on its **current velocity and direction**, not just where it is.

> [!Example]
> A car:
> - ✅ Can drive forward and backward
> - ✅ Can turn
 >- ❌ Cannot slide sideways like a shopping cart
 >
 >  Even if the road is empty, the car’s wheels forbid sideways motion. This is a *Pfaffian constraint*.
 
 > [!note]
> **Pfaffian constraints** are usually **non-holonomic**, meaning: you **cannot** turn them into a simple “stay on this surface” rule.
> This broader class is called nonholonomic constraint.

Pfaffian constraints are generally described by the following form:
$$A(\theta)\,\dot{\theta} = 0$$
$$
\begin{bmatrix}
\dfrac{\partial g_1}{\partial \theta_1}(\theta) & \cdots & \dfrac{\partial g_1}{\partial \theta_n}(\theta) \\
\vdots & \ddots & \vdots \\
\dfrac{\partial g_k}{\partial \theta_1}(\theta) & \cdots & \dfrac{\partial g_k}{\partial \theta_n}(\theta)
\end{bmatrix}
\begin{bmatrix}
\dot{\theta}_1 \\
\vdots \\
\dot{\theta}_n
\end{bmatrix}
= 0
$$
where
- $A(\theta) \in \mathbb{R}^{k \times n}$ is the **constraint Jacobian**,
- $\dot{\theta} \in \mathbb{R}^n$ is the **generalized velocity vector**,
- and the constraints are **linear in velocities but nonlinear in configuration**, which is the defining feature of Pfaffian (non-integrable) constraints.

## See also

- [[Unicycle Model]]
- [Wikipedia: Pfaffian constraint](https://en.wikipedia.org/wiki/Pfaffian_constraint)
