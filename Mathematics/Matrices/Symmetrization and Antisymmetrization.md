- **Symmetrization** can be noted using *round* brackets in the indices of the matrix/tensor. 
- **Skew-symmetrization** or **Antisymmetrization** can be noted using *square* brackets in the indices of the matrix/tensor. 
## Matrix decomposition

Any real square matrix $A_{ii}$ admits a **unique decomposition** into a symmetric and an antisymmetric (skew-symmetric) part:

$$
A = \underbrace{\tfrac{1}{2}(A + A^{T})}_{\text{symmetric } S}
\;+\;
\underbrace{\tfrac{1}{2}(A - A^{T})}_{\text{antisymmetric } K}
$$
$$A_{ii}= A_{(ij)} + A_{[ij]}$$

## Symmetrization

**Rank 2 Tensor**
$$A_{(ij)} = \frac{1}{2} (A_{ij} + A_{ji})$$
**Rank 3 Tensor**
$$A_{(ijk)}=\frac{1}{3!}\left(
A_{ijk}
+A_{jik}
+A_{kij}
+A_{ikj}
+A_{jki}
+A_{kji}
\right)$$

**General Definition**
$$
A_{[i_1 i_2 \dots i_n]}
= \frac{1}{n!}
\sum_{\sigma\in S_n}
A_{i_{\sigma(1)},i_{\sigma(2)}\dots i_{\sigma(n)}}.
$$

## Antisymmetrization

**Rank 2 Tensor**
$$A_{[ij]} = \frac{1}{2} (A_{ij} - A_{ji})$$
> [!note]
> In the case of a matrix, the diagonal is all 0, because $A_{ii} - A_{ii} = 0$, while the opposing entries have a negative sign.

**Rank 3 Tensor**
$$A_{[ijk]} = \frac{1}{3!}\left(A_{ijk} + A_{jki} + A_{kij} - A_{jik} - A_{ikj} - A_{kji} \right)$$
**General Definition**
$$A_{[i_1 i_2 \dots i_n]} \equiv \frac{1}{n!}
\sum_{\sigma\in S_n}
{\color{brown} \operatorname{sgn}(\sigma)}
A_{i_{\sigma(1)}, i_{\sigma(2)}\dots i_{\sigma(n)}}$$
### Definition using the Levi–Civita tensor

Antisymmetrization can be expressed using the Levi–Civita tensor:
$$\omega_{ij} = \epsilon_{ijk},\omega^k.$$
## Example

ℹ️ Let A

$$
A =
\begin{bmatrix}
2 & 5 \\
1 & 3
\end{bmatrix}
\qquad\Rightarrow\qquad
A^T =
\begin{bmatrix}
2 & 1 \\
5 & 3
\end{bmatrix}
$$

🧮 Calculate the **Symmetric Part** $S=A_{(ij)}$

$$
S = \frac{1}{2}(A + A^T)
= \frac{1}{2}
\begin{bmatrix}
4 & 6 \\
6 & 6
\end{bmatrix}
=
\begin{bmatrix}
2 & 3 \\
3 & 3
\end{bmatrix}
$$

☑️ Check:

$$
S^T = S
$$
🧮 Calculate the **Antisymmetric Part** $K=A_{[ij]}$:

$$
K = \frac{1}{2}(A - A^T)
= \frac{1}{2}
\begin{bmatrix}
0 & 4 \\
-4 & 0
\end{bmatrix}
=
\begin{bmatrix}
0 & 2 \\
-2 & 0
\end{bmatrix}
$$

☑️ Check:

$$
K^T = -K
$$

☑️ Recombination Check:

$$
S + K =
\begin{bmatrix}
2 & 3 \\
3 & 3
\end{bmatrix}
+
\begin{bmatrix}
0 & 2 \\
-2 & 0
\end{bmatrix}
=
\begin{bmatrix}
2 & 5 \\
1 & 3
\end{bmatrix}
= A
$$

> [!note]
> The decomposition:
> $$A = S + K,  Sᵀ=S,  Kᵀ=-K$$
> exists for **every** real square matrix and is always **unique**.

> [!note]
> In mechanics,
>- $S$ corresponds to **strain / dilation**
>- $K$ corresponds to **rotation / vorticity**

> [!note]
> In Lie theory, $K ∈ \mathfrak{so}(n)$ is the Lie algebra of the rotation group.

## Code example

```csharp
private static (Matrix4x4 symmetric, Matrix4x4 antisymmetric) Decompose(Matrix4x4 matrix)
{
	const float half = 0.5f;

	// Rows of A
	Vector4 row0 = new Vector4(matrix.M11, matrix.M12, matrix.M13, matrix.M14);
	Vector4 row1 = new Vector4(matrix.M21, matrix.M22, matrix.M23, matrix.M24);
	Vector4 row2 = new Vector4(matrix.M31, matrix.M32, matrix.M33, matrix.M34);
	Vector4 row3 = new Vector4(matrix.M41, matrix.M42, matrix.M43, matrix.M44);

	// Columns of A
	Vector4 col0 = new Vector4(matrix.M11, matrix.M21, matrix.M31, matrix.M41);
	Vector4 col1 = new Vector4(matrix.M12, matrix.M22, matrix.M32, matrix.M42);
	Vector4 col2 = new Vector4(matrix.M13, matrix.M23, matrix.M33, matrix.M43);
	Vector4 col3 = new Vector4(matrix.M14, matrix.M24, matrix.M34, matrix.M44);

	// Symmetric rows: S_row_i = 0.5 * (row_i + col_i)
	Vector4 s0 = half * (row0 + col0);
	Vector4 s1 = half * (row1 + col1);
	Vector4 s2 = half * (row2 + col2);
	Vector4 s3 = half * (row3 + col3);

	// Antisymmetric rows: K_row_i = 0.5 * (row_i - col_i)
	Vector4 k0 = half * (row0 - col0);
	Vector4 k1 = half * (row1 - col1);
	Vector4 k2 = half * (row2 - col2);
	Vector4 k3 = half * (row3 - col3);

	var symmetric = new Matrix4x4(
		s0.X, s0.Y, s0.Z, s0.W,
		s1.X, s1.Y, s1.Z, s1.W,
		s2.X, s2.Y, s2.Z, s2.W,
		s3.X, s3.Y, s3.Z, s3.W
	);

	var antisymmetric = new Matrix4x4(
		k0.X, k0.Y, k0.Z, k0.W,
		k1.X, k1.Y, k1.Z, k1.W,
		k2.X, k2.Y, k2.Z, k2.W,
		k3.X, k3.Y, k3.Z, k3.W
	);

	return (symmetric, antisymmetric);
}
```

## References

* [Wikipedia. skew-symmetric matrix](https://en.wikipedia.org/wiki/Skew-symmetric_matrix)
- [Wikipedia: Penrose Graphical Notation](https://de.wikipedia.org/wiki/Penrosesche_graphische_Notation)
