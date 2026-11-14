The **Unicycle Model** is illustrating the non-holonomic (Pfaffian) constraint, which governs the motion of an idealized car.

## Configuration and Kinematics

The configuration of the car is

$$q = (\phi, x, y)$$

- $(x, y)$: position of a reference point (usually the rear axle midpoint)
- $\phi$: heading angle of the car body

The velocity is constrained to lie **along the car’s body axis**:

$$\dot{x} = v \cos \phi, \qquad  
\dot{y} = v \sin \phi$$

This already encodes the key physical restriction:
- The car can only move in the direction it is pointing.  
- Sideways velocity is forbidden.

## Eliminating the Speed (v)

From the two equations:

$$v = \frac{\dot{x}}{\cos \phi} = \frac{\dot{y}}{\sin \phi}$$

Equating:

$$\frac{\dot{x}}{\cos \phi} = \frac{\dot{y}}{\sin \phi}$$

Multiply through:

$$\dot{x} \sin \phi - \dot{y} \cos \phi = 0$$

This is the **Pfaffian constraint**.

## Pfaffian Form ($A(q)\dot{q} = 0$)

Write the generalized velocity:

$$\dot{q} =  
\begin{bmatrix}  
\dot{\phi} \  
\dot{x} \  
\dot{y}  
\end{bmatrix}$$

The constraint is written compactly as:

$$A(q)\dot{q} = 0$$

with

$$A(q) =  
\begin{bmatrix}  
0 & \sin \phi & -\cos \phi  
\end{bmatrix}  
\in \mathbb{R}^{1 \times 3}$$

so that:

$$A(q)\dot{q}
0\cdot \dot{\phi}
- \sin \phi , \dot{x}
- \cos \phi , \dot{y}  
= 0$$

### Interpretation

- This equation **eliminates all sideways motion**
- The velocity vector $(\dot{x}, \dot{y})$ must always be collinear with $(\cos\phi, \sin\phi)$
- This is a **velocity-level constraint**, not a position constraint

## Why This Is a Non-Holonomic Constraint

A constraint is **holonomic** if it can be integrated to:

$$f(x, y, \phi) = \text{constant}$$

This one **cannot** be integrated into a pure position-level restriction. That is why:

- You can reach the same position with different orientations  
- The allowed paths depend on the full **history of steering**

This is exactly why:
- You cannot move a car sideways directly
- You must perform maneuvers (forward/backward arcs)

## Relation to the Steering Angle and the Paths on the Right

The velocity direction is always aligned with (\phi).  
The **steering angle** controls the curvature of the path:

- Straight steering → $\phi$ constant → straight line
- Constant steering angle → constant curvature → circular arc
- Time-varying steering → clothoids / complex curves

Thus the constraint does **not** say where the car goes — it strictly says:

> “At every instant, your velocity must lie along your current heading.”

That is what produces the family of feasible paths drawn on the right.

## Geometric Meaning (Coordinate-Free)

Define:

- Heading direction:  
    $$\mathbf{t} = (\cos\phi, \sin\phi)$$
- Normal direction:  
    $$\mathbf{n} = (\sin\phi, -\cos\phi)$$

Then the constraint is simply:

$$\mathbf{n} \cdot (\dot{x}, \dot{y}) = 0$$

So the velocity has **zero projection onto the lateral direction**.

## What This Means for Motion Planning and Control

This single Pfaffian constraint causes:

- Nonlinear reachability
- Lie-bracket motion (parallel parking)
- Need for **nonlinear control methods**
- In robotics: this is the canonical example of a **driftless, control-affine, non-holonomic system**

## Bottom Line

The equation

$$A(q)\dot{q} = 0$$

is nothing more and nothing less than the **mathematical expression of the fact that a car cannot move sideways**.

The steering angle rotates the constraint direction, which bends the admissible paths into the curved trajectories shown on the right side of the slide.
