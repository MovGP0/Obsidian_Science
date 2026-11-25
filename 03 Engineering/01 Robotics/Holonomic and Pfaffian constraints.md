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
> A **Pfaffian constraint** is only *linear in the velocities*, $A(\theta)\,\dot{\theta} = 0$. It is **holonomic** if it is integrable to a position constraint $g(\theta) = 0$ (Frobenius theorem), and **nonholonomic** if it is not integrable.
> Many Pfaffian constraints in robotics (for example the car) are nonholonomic: you **cannot** turn them into a simple “stay on this surface” rule.

Pfaffian constraints are generally described by the following form:
$$A(\theta)\,\dot{\theta} = 0$$
$$
\begin{bmatrix}
A_{11}(\theta) & \cdots & A_{1n}(\theta) \\
\vdots & \ddots & \vdots \\
A_{k1}(\theta) & \cdots & A_{kn}(\theta)
\end{bmatrix}
\begin{bmatrix}
\dot{\theta}_1 \\
\vdots \\
\dot{\theta}_n
\end{bmatrix}
= 0
$$
where
- $A(\theta) \in \mathbb{R}^{k \times n}$ is the **constraint matrix** with arbitrary entries $A_{ij}(\theta)$,
- $\dot{\theta} \in \mathbb{R}^n$ is the **generalized velocity vector**,
- and the constraints are **linear in velocities but nonlinear in configuration**, which is the defining feature of Pfaffian constraints.

In the holonomic special case, the rows are the Jacobian of position constraints $g(\theta) = 0$, that is $A_{ij}(\theta) = \dfrac{\partial g_i}{\partial \theta_j}(\theta)$. If no such functions $g_i$ exist, the Pfaffian constraint is nonholonomic (non-integrable).

## See also

- [[Unicycle Model]]
- [Wikipedia: Pfaffian constraint](https://en.wikipedia.org/wiki/Pfaffian_constraint)
