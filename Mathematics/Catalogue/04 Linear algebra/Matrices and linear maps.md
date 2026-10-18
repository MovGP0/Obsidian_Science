---
title: "Matrices and linear maps"
catalogue_ids:
  - "4.1"
  - "4.1.1"
  - "4.1.2"
  - "4.1.3"
  - "4.1.4"
  - "4.1.5"
---

> [!TLDR]
> A matrix records a linear rule, and a matrix product records two rules applied in order.

## From lists to a matrix

A **vector** in $\mathbb R^n$ is an ordered list of $n$ real numbers. We usually write it as a column. Add vectors coordinate by coordinate, and multiply every coordinate by a scalar, which means a single number. For example, $(1,2)^T+(3,-1)^T=(4,1)^T$. These operations also describe geometric arrows. See [[05.02 Vector operations]] for that viewpoint.

A matrix $A=(a_{ij})$ is a rectangular array with $m$ rows and $n$ columns. The first index $i$ selects a row; the second index $j$ selects a column. Its shape is $m\times n$. The rule $y=Ax$ takes an $n$-component input to an $m$-component output:

$$
y_i=\sum_{j=1}^n a_{ij}x_j.
$$

The summation symbol means add one term for every listed value of $j$. For example, the row $(2,-1,3)$ sends $(x_1,x_2,x_3)^T$ to $2x_1-x_2+3x_3$. A map is **linear** if $T(au+bv)=aT(u)+bT(v)$ for every input pair and scalars. Matrix rules satisfy this because multiplication distributes over addition. A rule such as $T(x)=Ax+c$ with $c\ne0$ is affine, not linear: it does not send zero to zero.

## Columns and square matrices

The $j$th column is the output when the input has a $1$ in position $j$ and zeros elsewhere. Therefore $Ax$ is a weighted sum of the columns. If $m=n$, the matrix is **square**. Its diagonal entries are $a_{11},\ldots,a_{nn}$. A diagonal matrix has zero entries off this diagonal; a triangular matrix has zeros on one side of it. The identity $I_n$ has diagonal entries $1$ and sends every input to itself. The zero matrix sends every input to zero.

A square matrix need not have an inverse. For example, $\operatorname{diag}(1,0)$ removes the second coordinate, so no later rule can recover it. A symmetric matrix satisfies $A^T=A$, where transpose interchanges rows and columns: $(A^T)_{ij}=a_{ji}$. These descriptions are properties, not different ways of multiplying.

## Matrix operations and their rules

Addition and scalar multiplication act on entries. Addition requires equal shapes. To form $BA$, the number of columns of $B$ must equal the number of rows of $A$. If $A$ is $m\times n$ and $B$ is $p\times m$, then $BA$ is $p\times n$:

$$
(BA)_{ij}=\sum_{k=1}^m b_{ik}a_{kj}.
$$

This is row-by-column multiplication. It follows by substituting $y=Ax$ into $z=By$. The rightmost map acts first. Matrix multiplication is associative, $(CB)A=C(BA)$, and distributes over addition. It is generally not commutative. The identity has the appropriate shape on each side: $I_mA=A=AI_n$. Transpose reverses the order: $(BA)^T=A^TB^T$.

## Worked example: two operations on a square

Let $S(x,y)=(x+y,y)$ shear the plane, and $D(x,y)=(2x,y)$ stretch its first coordinate. Then

$$
S=\begin{pmatrix}1&1\\0&1\end{pmatrix},\quad
D=\begin{pmatrix}2&0\\0&1\end{pmatrix},\quad
DS=\begin{pmatrix}2&2\\0&1\end{pmatrix},\quad
SD=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
$$

For $(1,1)$, shear then stretch gives $(2,1)$ then $(4,1)$. Stretch then shear gives $(2,1)$ then $(3,1)$. Both intermediate points happen to agree, but the last outputs differ. This proves $DS\ne SD$ without any abstract argument.

![[catalogue-ch04-matrix-columns.svg|**Fig. C.ch04.1** A shear sends the unit square to a parallelogram; its columns are the images of the two basis directions.]]

The arrows in Fig. C.ch04.1 are $(1,0)$ and $(1,1)$, the two columns of $S$. Their sums locate the fourth corner. A linear map is fixed once all basis-vector images are known. This is why the column description is more than a storage convention.

## Coordinate limitations

A matrix describes a map in chosen bases. Changing the basis can change all entries without changing the map. [[10.03 Matrices]] derives that statement. Also, an entrywise product, sometimes called a Hadamard product, differs from matrix multiplication. State which operation you need. Finally, $AB=0$ does not imply $A=0$ or $B=0$: the nonzero matrices $A=\operatorname{diag}(1,0)$ and $B=\operatorname{diag}(0,1)$ have product zero.

## Practice

1. Compute $Ax$ for $A=\begin{pmatrix}1&2&0\\-1&0&3\end{pmatrix}$ and $x=(2,-1,4)^T$.
2. Compute $S^2$ and explain its geometric action. Is $S^2$ the entrywise square of $S$?

## Worked answers

1. The first output is $2+2(-1)+0(4)=0$. The second is $-2+0+12=10$. Thus $Ax=(0,10)^T$. A $2\times3$ matrix produces two outputs.
2. Row-by-column multiplication gives $S^2=\begin{pmatrix}1&2\\0&1\end{pmatrix}$. It sends $(x,y)$ to $(x+2y,y)$, so it applies the shear twice. The entrywise square equals $S$, which is a different operation.
