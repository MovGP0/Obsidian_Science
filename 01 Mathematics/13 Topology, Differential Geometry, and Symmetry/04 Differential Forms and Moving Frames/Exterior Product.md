---
aliases:
  - wedge product
title: Exterior Product a∧b
---
Exists in every dimension. In 3D it is dual to the [[cross product]]. Returns a **bivector**, where the basis represents the planes that are spanned by the basis of the original vector.
$$
c = a \wedge b
$$
$$(a\wedge b)_{jk} = a_j b_k - a_k b_j$$

In 3D, the Hodge dual of this bivector is the cross product $(a\times b)_i = ε_{ijk}\, a_j\, b_k$.

$$ c = \tfrac12 (a_j b_k - a_k b_j)\, e_j \wedge e_k $$
### Example

$$\begin{align}
(a_x a_y a_z)\wedge (b_x b_y b_z) = &\quad\, yz(a_y b_z - a_z b_y)\\
&+ zx(a_z b_x - a_x b_z)\\
&+ xy(a_x b_y - a_y b_x)
\end{align}$$
### 2D exterior product

The bivector has one component, a multiple of the unit bivector $e_x\wedge e_y$. Its coefficient equals the z-component of the cross product when all z-coordinates are 0.

$$a\wedge b 
= \det\begin{pmatrix} a_x & b_x \\ a_y & b_y \end{pmatrix} e_x\wedge e_y
= (a_x b_y - a_y b_x)\, e_x\wedge e_y$$
