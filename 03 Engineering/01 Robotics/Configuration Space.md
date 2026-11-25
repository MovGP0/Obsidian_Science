- The configuration space (C-space) is the set (manifold) of all possible configurations of a system.
- The dimension of the configuration space is equal to the [[Degrees of Freedom]] of the system.

## Configuration Space Topology

The set of numbers that describe the system create a topology.

| Example                                    | Topology                  | Intuitive Meaning                                  |
| ------------------------------------------ | ------------------------- | -------------------------------------------------- |
| $x ∈ ℝ$                                    | Line                      | 1D unbounded translation                           |
| $φ ∈ S^1$                                  | Circle (S¹)               | 1D periodic rotation                               |
| $(x, y) ∈ ℝ²$                              | Plane                     | 2D translation                                     |
| $(x, y, z) ∈ ℝ³$                           | 3D Space                  | 3D translation                                     |
| $θ ∈ [0,π],\ φ ∈ S^1$ (poles singular)     | Sphere (S²)               | Orientation of a direction vector                  |
| $x ∈ ℝ, φ ∈ S^1$                           | Cylinder (ℝ × S¹)         | Translation + rotation (prismatic + revolute)      |
| $(φ₁, φ₂) ∈ S^1 × S^1$                     | Torus (T² = S¹ × S¹)      | Two independent rotations                          |
| $(x, y, φ) ∈ ℝ² × S^1$                     | 3D Configuration Tube     | Planar position + heading (mobile robot)           |
| $(φ₁, φ₂, φ₃) ∈ S^1 × S^1 × S^1$           | 3-Torus (T³ = S¹ × S¹ × S¹) | Three independent shaft rotations                |
| $SO(2)$                                    | Rotation Group 2D         | All planar rotations                               |
| $SO(3)$                                    | Rotation Group 3D         | All 3D rigid body orientations                     |
| $ℝ³ × SO(3)$                               | Rigid Body Pose (SE3)     | Full 6-DOF spatial motion                          |
| $(x, y)$ with $x² + y² ≤ r²$               | Disk                      | Constrained planar workspace                       |
| $(x, y, z)$ with $x² + y² + z² = r²$       | Sphere Surface (S²)       | Point on a sphere of constant radius (implicit S²) |
| $(x, y, z, φ) ∈ ℝ³ × S^1$                  | ℝ³ × S¹                   | 3D translation + rotation about one axis           |

> [!note]
> The circle $S^1$ describes a full rotation:
> $S^1 = [0,2π]$ with the end points $0$ and $2π$ identified (they are the same angle). In degrees, $0°$ and $360°$ are identified.

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
