---
aliases:
  - wedge product
title: Exterior Product a∧b
---
Higher order version of the [[cross product]]. Returns a **bivector**, where the basis represents the planes that are spanned by the basis of the original vector.
$$
c = a \wedge b
$$
$$(a\wedge b)_i = ε_{ijk}\ a_j e_j\ b_k e_k$$

$$ c_i = ε_{ijkl} \, a_j \, b_k \, e_l $$
### Example

$$\begin{align}
(a_x a_y a_z)\wedge (b_x b_y b_z) = &\quad\, yz(a_y b_z - a_z b_y)\\
&+ zx(a_z b_x - a_x b_z)\\
&+ xy(a_x b_y - a_y b_x)
\end{align}$$
### 2D exterior product

Special case of the cross product, where all z-coordinates are 0.

$$a\times b 
= \det\begin{pmatrix} a_x & b_x \\ a_y & b_y \end{pmatrix}
= a_x b_y - a_y b_x$$
