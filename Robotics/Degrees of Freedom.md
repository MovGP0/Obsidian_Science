---
title: Degrees of Freedom (DoF)
aliases:
  - DoF
---
- Describes the count of numbers (i.e. angles, lengths) that are required to describe the stationary state of a system.
- Easier to calculate in rigid bodies, since rigid bodies are assumed to not change their configuration (i.e. bending or squishing).

## Joint types

![[Pasted image 20251207110304.png]]

|   Joint type    | DoF | Constraints *c* between<br>two planar rigid bodies | Constraints *c* between<br>two spatial rigid bodies |
| :-------------: | :-: | :------------------------------------------------: | :-------------------------------------------------: |
|  Revolute (R)   |  1  |                         2                          |                          5                          |
|  Prismatic (P)  |  1  |                         2                          |                          5                          |
|   Helical (H)   |  1  |                        N/A                         |                          5                          |
| Cylindrical (C) |  2  |                        N/A                         |                          4                          |
|  Universal (U)  |  2  |                        N/A                         |                          4                          |
|  Spherical (S)  |  3  |                        N/A                         |                          3                          |

## Grübler’s formula

For *independent constraints*, we can use the following formula:
$$
\text{DoF} = m\,(N - 1 - J) + \sum_{i=1}^{J} f_i
$$

| Variable | Meaning                                                         | Typical Values          |
| -------- | --------------------------------------------------------------- | ----------------------- |
| DoF      | Total degrees of freedom (mobility) of the mechanism            | ≥ 0                     |
| m        | Degrees of freedom of a single free rigid body                  | 3 (planar), 6 (spatial) |
| N        | Total number of rigid bodies including the ground (fixed frame) | ≥ 1                     |
| J        | Total number of joints (kinematic pairs)                        | ≥ 0                     |
| fᵢ       | Degrees of freedom of the *i*-th joint                          | 1–3 typically           |
| Σ        | Summation over all joints                                       |                         |
| i        | Joint index in the summation                                    | 1 … J                   |
- The formula **assumes all constraints are independent**.
  If geometric or kinematic dependencies exist (parallel constraints), Grübler’s result **overestimates mobility**.
- For **planar mechanisms**, use:
    - `m = 3` (x, y, rotation)
- For **spatial mechanisms**, use:
    - `m = 6` (x, y, z, roll, pitch, yaw)
- Each joint contributes its own **local mobility `fᵢ`**

### Examples for dependence of constraints

- The **four-bar chain mechanism** has 4 linkages, but only 1 DoF:

![[Pasted image 20251207114915.png]]

- This mechanism has 6 linkages, but also only has 1 DoF

![[Pasted image 20251207115034.png]]

- A [Stewart platform](https://en.wikipedia.org/wiki/Stewart_platform) has 6 DoF

![[Hexapod_general_Anim.gif]]

## See also

- [Wikpedia: Degrees of Freedom (Mechanics)](https://en.wikipedia.org/wiki/Degrees_of_freedom_(mechanics))
