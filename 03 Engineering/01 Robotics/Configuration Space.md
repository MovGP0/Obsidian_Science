- Defines the number of possible configurations of a system.
- Also defined by the [[Degrees of Freedom]] of the system.

## Configuration Space Topology

The set of numbers that describe the system create a topology.

| Example                              | Topology              | Intuitive Meaning                             |
| ------------------------------------ | --------------------- | --------------------------------------------- |
| $x ∈ ℝ$                              | Line                  | 1D unbounded translation                      |
| $φ ∈ S$                              | Circle (S)            | 1D periodic rotation                          |
| $(x, y) ∈ ℝ²$                        | Plane                 | 2D translation                                |
| $(x, y, z) ∈ ℝ³$                     | 3D Space              | 3D translation                                |
| $(θ, φ) ∈ [0,π)×S$                   | Sphere (S²)           | Orientation of a direction vector             |
| $x ∈ ℝ, φ ∈ S$                       | Cylinder (ℝ × S)      | Translation + rotation (prismatic + revolute) |
| $(φ₁, φ₂) ∈ S²$                      | Torus (S × S)         | Two independent rotations                     |
| $(x, y, φ) ∈ ℝ² × S$                 | 3D Configuration Tube | Planar position + heading (mobile robot)      |
| $(φ₁, φ₂, φ₃) ∈ S³$                  | 3-Torus (T³)          | Three independent shaft rotations             |
| $SO(2)$                              | Rotation Group 2D     | All planar rotations                          |
| $SO(3)$                              | Rotation Group 3D     | All 3D rigid body orientations                |
| $ℝ³ × SO(3)$                         | Rigid Body Pose (SE3) | Full 6-DOF spatial motion                     |
| $(x, y)$ with $x² + y² ≤ r²$         | Disk                  | Constrained planar workspace                  |
| $(x, y, z)$ with $x² + y² + z² = r²$ | Sphere Surface        | Constant-radius orientation manifold          |
| $(x, y, z, φ)$                       | Helical Space         | Screw motion parameter space                  |

> [!note]
> The set $S$ describes a full rotation:
> $S = [0,2π) = [0,360°)$

> [!note]
> Two topologies are equivalent, when one can be transformed into the other **without cutting or gluing**.

## Configuration Space Representation

The **Configuration Space** can be described using **explicit** or **implicit** representations.
- The **Explicit Representation** minimizes the count of numbers used to describe the configuration space
- The **Implicit Representation** embeds the space/topology into a higher-dimensional space/topology

> [!example] Position on a sphere
> **Explicit Representation** using $(θ, φ)$ (i.e. Longitude, Latitude) coordinates 
> - easy to work with
> - might have representation issues at poles (i.e. [Gimbal Lock](https://en.wikipedia.org/wiki/Gimbal_lock))
> 
> **Implicit Representation** using $(x, y, z)$ coordinates with $x²+y²+z²=1$
> - can be more complex to work with
> - no issues at the poles
