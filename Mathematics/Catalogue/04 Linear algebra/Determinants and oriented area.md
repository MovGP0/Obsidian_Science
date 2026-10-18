---
title: "Determinants and oriented area"
catalogue_ids:
  - "4.2"
  - "4.2.1"
  - "4.2.2"
  - "4.2.3"
---

> [!TLDR]
> The determinant is a signed area or volume factor that vanishes when a square map loses an independent direction.

## An area question

Read [[Matrices and linear maps]] first. In the plane, place two column vectors $u=(a,c)^T$ and $v=(b,d)^T$ at the origin. They form a parallelogram. Its signed area is

$$
\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc.
$$

The magnitude is ordinary area. The sign distinguishes the order of the directions: a counterclockwise turn from the first to the second gives positive sign in a right-handed coordinate plane. Swapping the columns reverses the sign. If the columns lie on one line, the parallelogram is flat and the determinant is zero. For a $3\times3$ matrix the corresponding interpretation is signed volume; in dimension $n$ it is an $n$-dimensional signed volume factor.

## Definition in any size

One definition fixes three properties: the determinant is linear in each column while the others are fixed; it changes sign when two columns are interchanged; and $\det I_n=1$. These determine a unique scalar function on square matrices. They imply that repeated columns give zero: interchanging them changes the sign but not the array, so $d=-d$ and $d=0$ over the reals.

An explicit version is

$$
\det A=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)
a_{1,\sigma(1)}\cdots a_{n,\sigma(n)}.
$$

Here $S_n$ is the list of all permutations, or reorderings, of $1,\ldots,n$. A permutation has sign $+1$ if it uses an even number of pair swaps and $-1$ otherwise. The formula selects one entry from every row and every column. It is a definition useful for proofs; its $n!$ terms make it a poor large-matrix algorithm.

## Rules that simplify a calculation

The same rules apply to rows because $\det A^T=\det A$. Swapping two rows changes the sign. Multiplying one row by $c$ multiplies the determinant by $c$. Adding a multiple of one row to a different row leaves it unchanged: columnwise or rowwise linearity splits off a term with repeated rows, which is zero. A triangular matrix has determinant equal to its diagonal product. In the permutation formula, all terms that select an entry on the zero side disappear.

For square matrices of equal size, $\det(AB)=\det A\det B$. This matches successive volume scaling. Therefore an invertible matrix has $\det A^{-1}=1/\det A$. Conversely, $\det A\ne0$ implies invertibility. These equivalences can also be seen by elimination: there must be a pivot in every column. Do not infer $\det(A+B)=\det A+\det B$; linearity holds in one row or column at a time, not in the whole array. Also $\det(cA)=c^n\det A$, since all $n$ rows are scaled.

## Worked example by elimination

Calculate

$$
A=\begin{pmatrix}1&2&0\\2&5&1\\0&3&4\end{pmatrix}.
$$

Replace row $2$ by row $2-2$ row $1$. Then replace row $3$ by row $3-3$ row $2$, using the updated second row:

$$
\begin{pmatrix}1&2&0\\0&1&1\\0&3&4\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&2&0\\0&1&1\\0&0&1\end{pmatrix}.
$$

Neither operation changes the determinant. The triangular product is $1$, so $\det A=1$. As an independent check, expand along the first row: $1(5\cdot4-1\cdot3)-2(2\cdot4-1\cdot0)=17-16=1$.

This last calculation is **cofactor expansion**. Delete row $i$ and column $j$ to obtain a smaller matrix $A_{ij}$. Its signed minor is $C_{ij}=(-1)^{i+j}\det A_{ij}$. Expansion along row $i$ gives $\det A=\sum_j a_{ij}C_{ij}$. Choose a row or column with many zeros for a short hand calculation.

## Degeneracy and numerical limits

For $B=\begin{pmatrix}1&2\\2&4\end{pmatrix}$, the second column is twice the first. Its determinant is zero, its image is a line, and an inverse cannot exist. However, determinant magnitude alone is not a reliable numerical conditioning test. The matrix $0.01I_{10}$ has a tiny determinant but treats all directions equally. Conversely, very large and very small stretches can have product $1$. Use singular values and a condition number for numerical sensitivity.

## Practice

1. Find the determinant of $\begin{pmatrix}0&2\\3&1\end{pmatrix}$, and explain its sign.
2. If a $3\times3$ matrix has determinant $5$, what happens after one row swap and then scaling every entry by $2$?

## Worked answers

1. The determinant is $0(1)-2(3)=-6$. Its area factor is $6$, and it reverses orientation. A negative determinant does not mean a negative ordinary area.
2. The swap gives $-5$. Scaling the entire matrix scales three rows, so the final determinant is $2^3(-5)=-40$.
