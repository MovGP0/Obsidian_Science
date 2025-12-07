---
title: Vector product ab
---

$$ab = a\cdot b + a\wedge b$$

Assuming the basis vectors have a length of 1 and are orthorgonal to each other, then
- 1D vector multiplication returns a scalar
- 2D vector multiplication returns a complex number
- 3D vector multiplication returns a quaternion

### Example

$$(a_x e_x + a_y e_y + a_z e_z) (b_x e_x + b_y e_y + b_z e_z) = \\
a_x b_x e_x e_x + a_x b_y e_x e_y + a_x b_z e_x e_z + \\
a_y b_x e_y e_x + a_y b_y e_y e_y + a_y b_z e_y e_z + \\
a_z b_x e_z e_x + a_z b_y e_z e_y + a_z b_z e_z e_z $$

with $xy = -xy$ and $xx = 1$ follows:

$$\overbrace{
    a_xb_x + a_yb_y + a_zb_z
}^{\text{dot product}} +
\overbrace{
    e_ye_z (a_y b_z - a_z b_y) +
    e_ze_x (a_z b_x - a_x b_z) +
    e_xe_y (a_x b_y - a_y b_x)
}^{\text{cross product}}$$

using the following bivector basis

$$e_x e_y = -(e_y e_x) = i$$
$$e_z e_x = -(e_z e_x) = j$$
$$e_y e_z = -(e_y e_z) = k$$

we get an quaternion:

$$(a_xb_x + a_yb_y + a_zb_z) +\\
(a_x b_y - a_y b_x)i +\\
(a_z b_x - a_x b_z)j +\\
(a_y b_z - a_z b_y)k$$

### 2D VGA Multivector
$$(1, x, y, xy)$$

Mapping:
- 2D Vector (x,y) $\Leftrightarrow$ (x,y) 2D Vector
- Pseudoscalar (1) $\Leftrightarrow$ (xy) 2d Bivector
- Complex Number (1,i) $\Leftrightarrow$ (1,xy) 2d Rotor

### 3D VGA Multivector
$$(\underbrace{1}_\text{scalar}, \underbrace{x, y, z}_\text{vector}, \underbrace{yz, zx, xy}_{bivector}, \underbrace{xyz}_\text{trivector})$$

Mapping:
- 3D Vector (x, y, z) $\Leftrightarrow$ (x, y, z) 3D Vector
- Pseudovector (x, y, z) $\Leftrightarrow$ (yz, zx, xy) 3D Bivector
- Qaternion (1, i, j, k) $\Leftrightarrow$ (1, yz, zx, xy) 3D Rotor
- Pseudoscalar (1) $\Leftrightarrow$ (xyz) 3D Trivector

## Sources

- [Freya Holmér, Why can't you multiply vectors?](https://www.youtube.com/watch?v=htYh-Tq7ZBI)
