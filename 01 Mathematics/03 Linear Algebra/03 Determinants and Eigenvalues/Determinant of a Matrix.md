
The **Determinant** describes the type of scaling of a vector field when the matrix is applied.

> [!note]
> The determinant gives only the signed volume factor of the map.
> $\det{A} = 1$ indicates that the area or volume and the orientation do not change. Examples are **rotations**, **shears**, and $\operatorname{diag}(2, 1/2)$.
> $\det{A} = -1$ indicates that the area or volume does not change, but the orientation is reversed. An example is a **reflection**.
> $\det{A} \notin \{0, 1, -1\}$ indicates that the area or volume changes by the factor $|\det A|$
> $\det{A} = 0$ indicates a collapse in dimension/volume

> [!note]
> For orthogonal matrices $R$ we find that 
> - $\det R = +1$ indicates proper rotations (orientation-preserving). $R∈SO(n)$
> - $\det R = -1$ indicates reflections or rotoreflections (orientation-reversing). $R∈O(n)$
> - $\det R \notin \{ 1, -1 \}$ indicates that the matrix is not a rotation matrix.

## Determinant of an 2x2 Matrix

$$\det(A) = \det\begin{bmatrix}
a&b \\
c&d
\end{bmatrix} = \left(a\cdot d - b\cdot c\right)$$


## Determinant of an 3x3 Matrix

$$\det(A) = \det\begin{bmatrix}
a&b&c \\
d&e&f \\
g&h&i
\end{bmatrix} = aei + bfg + cdh - ceg - bdi - afh$$

## Determinants of larger matrices

For larger matrices, you use the Laplace expansion by minors.

The determinant is calculated using (expansion along the first row):

$$\det(A) = \sum_{j=1}^{n} (-1)^{1+j}\, a_{1j}\, \det(M_{1j})$$

where $M_{ij}$ is the minor of $A_{ij}$ (obtained by deleting row $i$ and column $j$).

## Volume of a Vector Space

The volume that is spanned by $n$ **linearly independent** vectors $a,b,c,\dots\inℝ^n$ is given by the absolute value of the determinant of the $n\times n$ matrix of their components:

$$V = \left|\det\begin{bmatrix}
a_1 & a_2 & a_3 & \dots & a_{n} \\
b_1 & b_2 & b_3 & \dots & b_{n} \\
c_1 & c_2 & c_3 & \dots & c_{n} \\
\vdots & \vdots & \vdots & \ddots & \vdots
\end{bmatrix}\right|$$
- A **nonzero determinant** indicates that vectors **form a volume** (for volumes of paralleloged) or an orientation of space (for orientations).
- The **absolute value** of the determinant determines the **magnitude** of the property. The sign can be used to compare the **orientation of vector spaces**.

### Orientation of a Vector Space

The **orientation** of a basis $(\mathbf{v}_1, \dots, \mathbf{v}_n)$ of an n-dimensional vector space is the sign of the determinant of the $n \times n$ matrix of its components relative to a reference basis $(\mathbf{e}_1, \dots, \mathbf{e}_n)$:

$$\text{Orientation} = \operatorname{sgn}\det\begin{bmatrix}
\mathbf{v}_1 & \mathbf{v}_2 & \cdots & \mathbf{v}_n
\end{bmatrix}$$

A positive sign means the same orientation as the reference basis. A negative sign means the opposite orientation.
