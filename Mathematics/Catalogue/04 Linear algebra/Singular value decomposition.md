---
title: "Singular value decomposition"
catalogue_ids:
  - "4.6.3"
---

> [!TLDR]
> The singular value decomposition expresses any real rectangular matrix as orthogonal coordinate changes and nonnegative stretches.

## A decomposition for every matrix shape

Read [[Eigenvalues and principal axes]], [[Vector and matrix norms]], and [[Least squares and numerical stability]]. A rectangular $m\times n$ matrix maps $n$ input coordinates to $m$ output coordinates, so an equation $Av=\lambda v$ usually does not even have matching dimensions. Singular values avoid that restriction.

The **singular value decomposition**, abbreviated SVD, states that every real matrix can be written

$$
A=U\Sigma V^T.
$$

Here $U$ is an $m\times m$ orthogonal matrix, $V$ is an $n\times n$ orthogonal matrix, and $\Sigma$ is an $m\times n$ rectangular diagonal matrix. Its diagonal entries are $\sigma_1\ge\sigma_2\ge\cdots\ge0$, called singular values. First $V^T$ changes the input to perpendicular singular directions, then $\Sigma$ stretches those coordinates, then $U$ changes the output directions. Orthogonal changes may include reflections; they are not necessarily proper rotations.

## Why singular values exist

The square matrix $A^TA$ is symmetric and nonnegative: $x^TA^TAx=\|Ax\|_2^2\ge0$. By the real spectral theorem it has an orthonormal eigenbasis $v_i$ with nonnegative eigenvalues $\sigma_i^2$. For each positive $\sigma_i$, define $u_i=Av_i/\sigma_i$. Then

$$
u_i^Tu_j=\frac{v_i^TA^TAv_j}{\sigma_i\sigma_j}=\delta_{ij}.
$$

Thus these output directions are orthonormal. Complete them to an orthonormal output basis if necessary. If $\sigma_i=0$, then $\|Av_i\|^2=0$ and $Av_i=0$. This construction supplies the SVD, including the directions the matrix kills. Its rank is the number of positive singular values. Repeated singular values allow different choices of bases inside the associated subspaces, so the factors need not be unique.

![[catalogue-ch04-svd-stretches.svg|**Fig. C.ch04.4** A diagonal map with singular values 2 and 1 sends a unit circle to an ellipse with corresponding semiaxes.]]

Fig. C.ch04.4 shows the middle step for a full-rank plane example. For rank one the ellipse would collapse to a line segment. For a rectangular matrix, an output basis can include directions never reached by any input.

## Worked rank-deficient example

Consider

$$
A=\begin{pmatrix}1&1\\1&1\\0&0\end{pmatrix},\qquad
A^TA=\begin{pmatrix}2&2\\2&2\end{pmatrix}.
$$

The eigenvalues of $A^TA$ are $4$ and $0$. Choose $v_1=(1,1)^T/\sqrt2$ and $v_2=(1,-1)^T/\sqrt2$. Thus $\sigma_1=2$, $\sigma_2=0$, and $u_1=(1,1,0)^T/\sqrt2$. Complete with $u_2=(1,-1,0)^T/\sqrt2$ and $u_3=(0,0,1)^T$. Then

$$
U=(u_1\ u_2\ u_3),\quad
V=(v_1\ v_2),\quad
\Sigma=\begin{pmatrix}2&0\\0&0\\0&0\end{pmatrix}.
$$

The reconstruction is $A=2u_1v_1^T$: multiplying the normalized outer product by $2$ gives the original four entries $1$ and the last row $0$. The nullspace is the line spanned by $v_2$ and the output span is the line spanned by $u_1$. The induced Euclidean norm is $\sigma_1=2$, because no unit input can be stretched more than the largest diagonal factor. In general $\|A\|_F^2=\sum_i\sigma_i^2$.

## Pseudoinverse and minimum-norm least squares

Replace each positive singular value by its reciprocal and leave zeros at zero, transposing the rectangular shape. This defines $\Sigma^+$ and the Moore–Penrose pseudoinverse $A^+=V\Sigma^+U^T$. It does not invent inverses for zero stretches. The coefficient vector $x=A^+b$ minimizes $\|Ax-b\|_2$, and among all minimizers it has the smallest Euclidean norm. This follows by using orthogonal coordinates: each attainable output coordinate can be fitted separately by division by $\sigma_i$, while choosing zero in every nullspace coordinate minimizes coefficient length.

For the example,

$$
A^+=\begin{pmatrix}1/4&1/4&0\\1/4&1/4&0\end{pmatrix}.
$$

With $b=(2,0,3)^T$, obtain $x=(1/2,1/2)^T$ and fitted output $(1,1,0)^T$. The residual is $(1,-1,3)^T$, perpendicular to $(1,1,0)^T$, with squared norm $11$. Every coefficient vector with sum $1$ gives the same fit, but $x=(1/2,1/2)$ has the smallest length: writing the coefficients as $(1/2+s,1/2-s)$ gives squared length $1/2+2s^2$.

## Truncation and computation

The expansion $A=\sum_i\sigma_i u_iv_i^T$ permits a rank-$k$ approximation using its first $k$ terms. This truncated SVD is best among rank-at-most-$k$ matrices in both the Euclidean operator norm and the Frobenius norm. Its errors are respectively $\sigma_{k+1}$ and $\sqrt{\sum_{i>k}\sigma_i^2}$. The optimality theorem is stated here without its full proof; its meaning is that discarding smaller perpendicular stretches loses the least matrix information under those norms. It is not a claim that every application should discard the same number of terms.

Although $A^TA$ proves existence and works for small exact examples, stable numerical SVD algorithms avoid explicitly forming it when possible, because doing so squares the condition number. A small singular value may reflect genuine detail or uncertain data. Setting it to zero is a modelling decision with a scale-dependent tolerance. For a full-column-rank matrix the condition number is $\sigma_1/\sigma_n$; if column rank is lost, exact coefficient recovery is nonunique.

## Practice

1. Find the singular values, rank, and Euclidean operator norm of $B=\operatorname{diag}(-3,1)$.
2. For $C=\operatorname{diag}(4,1/10)$, give its best rank-one truncation and the operator-norm error.

## Worked answers

1. $B^TB=\operatorname{diag}(9,1)$, so the singular values are $3,1$. Both are positive, hence rank is $2$, and $\|B\|_2=3$. The negative sign is absorbed into an orthogonal factor, not a negative singular value.
2. Keep the stretch $4$ and discard $1/10$: $C_1=\operatorname{diag}(4,0)$. The error matrix has only the stretch $1/10$, so its operator norm is $1/10$. The Frobenius error is the same in this two-term example.
