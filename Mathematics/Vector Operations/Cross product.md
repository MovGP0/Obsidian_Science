---
title: Cross product a×b
---
Determinant of two 3D vectors. Returns a **pseudo-vector**.

$$ c_i = ε_{ijk} \, a_i \, b_j $$

Alternative syntax:

$$ a\times b =
\begin{bmatrix}
a_y b_z - a_z b_y \\
a_z b_x - a_x b_z \\
a_x b_y - a_y b_x
\end{bmatrix}$$
The operation $a \times b$ can also be described as $(a \times) b = [a]b$ where $[a]$ is
$$a \times b = [a]b = \begin{bmatrix}
0 & -a_{3} & a_{2} \\
a_{3} & 0 & -a_{1} \\
-a_{2} & a_{1} & 0
\end{bmatrix}
\begin{bmatrix}
b_{1} \\ b_{2} \\ b_{3}
\end{bmatrix}$$

> [!note]
> The [[Exterior Product]] (wedge product) is the higher order version of the cross product.
