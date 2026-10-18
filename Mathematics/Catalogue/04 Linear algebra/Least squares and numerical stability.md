---
title: "Least squares and numerical stability"
catalogue_ids:
  - "4.5.3"
  - "4.5.3.1"
  - "4.5.3.2"
---

> [!TLDR]
> Least squares finds the attainable output nearest to the target; QR or SVD methods avoid unnecessary numerical error.

## When equations disagree

Read [[Linear systems and pivot exchange]] and [[Vector and matrix norms]]. An **overdetermined** system has more equations than unknowns. It may still be exactly solvable when some equations are redundant, but often its right side $b$ is outside the column span of $A$. Then no $x$ satisfies $Ax=b$. We instead minimize

$$
\|Ax-b\|_2^2=\sum_i((Ax)_i-b_i)^2.
$$

This is a linear least-squares problem. The word linear describes the dependence of $Ax$ on $x$, although the objective function is quadratic. The residual $r=b-Ax$ records the remaining discrepancy. Squaring prevents positive and negative errors from cancelling; the Euclidean norm also gives a geometric nearest-point interpretation.

## Derive the normal equations

At a best fit $\hat x$, change one coefficient in a direction $h$ by an amount $s$. Then the new residual is $r-sAh$, and

$$
\|r-sAh\|_2^2=\|r\|_2^2-2s(Ah)^Tr+s^2\|Ah\|_2^2.
$$

If the linear coefficient were nonzero, a sufficiently small choice of sign for $s$ would decrease the objective. Thus $(Ah)^Tr=0$ for every $h$, or $A^Tr=0$. Substituting $r=b-A\hat x$ yields the **normal equations**

$$
A^TA\hat x=A^Tb.
$$

Conversely, if $r$ is perpendicular to the column span, the cross term above vanishes and every change adds the nonnegative term $s^2\|Ah\|_2^2$. Thus the normal equations really characterize all minima. Full column rank makes $A^TA$ positive definite, because $x^TA^TAx=\|Ax\|_2^2>0$ for nonzero $x$. Then $\hat x$ is unique. If columns are dependent, a closest output still exists, but several coefficient columns may produce it.

![[catalogue-ch04-least-squares-projection.svg|**Fig. C.ch04.3** Least squares projects the target onto the column span; the residual is perpendicular to every attainable output direction.]]

Fig. C.ch04.3 draws a one-dimensional column span in a two-dimensional output space. Adding another independent column would enlarge the attainable space. This output space need not have the same dimension as the unknown vector.

## Worked example: fit a straight line

Fit $y=a+bt$ to the three mathematical data pairs $(0,1)$, $(1,2)$, $(2,2)$. The equations are inconsistent, since the first two suggest $b=1$ while the last two suggest $b=0$. Here

$$
A=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix},\quad
b_{\rm data}=\begin{pmatrix}1\\2\\2\end{pmatrix}.
$$

The coefficient unknown is $(a,b)^T$; the subscript on the data column prevents confusion with the slope. Compute

$$
A^TA=\begin{pmatrix}3&3\\3&5\end{pmatrix},\qquad
A^Tb_{\rm data}=\begin{pmatrix}5\\6\end{pmatrix}.
$$

Subtract the two normal equations to get $2b=1$, so $b=1/2$, and then $a=7/6$. Predicted values are $(7/6,5/3,13/6)^T$. The residual is $(-1/6,1/3,-1/6)^T$. Its dot products with the two columns of $A$ are $0$ and $1/3-2/6=0$, independently checking optimality. Its squared norm is $1/6$.

## Why QR is often a better algorithm

The normal equations are an excellent derivation but need not be the best computational route. A **thin QR factorization** writes a full-column-rank $m\times n$ matrix as $A=QR$, where $Q$ has $n$ orthonormal columns and $R$ is invertible upper triangular. Then the normal equations reduce to $R\hat x=Q^Tb$. Solve this by back substitution. The perpendicular part of $b$ cannot be fitted and contributes a constant to the objective.

For the simpler problem $A=(1,1)^T$, $b=(1,3)^T$, take $Q=(1,1)^T/\sqrt2$ and $R=\sqrt2$. Then $Q^Tb=2\sqrt2$, so $\hat x=2$. The fitted output is $(2,2)^T$, leaving residual $(-1,1)^T$. This also illustrates a QR calculation without introducing a large algorithm. Householder reflections are a standard stable way to compute QR; a full implementation is beyond this lesson.

## Conditioning, roundoff, and rank

For an invertible square $A$, the Euclidean condition number is $\kappa_2(A)=\|A\|_2\|A^{-1}\|_2$. For a full-column-rank rectangular matrix, it is the ratio of largest to smallest singular value. It measures the unequal stretching that can make coefficient recovery sensitive. The normal-equation matrix satisfies $\kappa_2(A^TA)=\kappa_2(A)^2$. Forming it can therefore make an already sensitive problem harder to solve accurately.

A small residual does not guarantee accurate coefficients when columns are nearly dependent. For example, the exact system with $A=\begin{pmatrix}1&1\\1&1+\delta\end{pmatrix}$ distinguishes the two coefficients using their small difference $\delta$. Perturbing the second right side by $\eta$ changes the second coefficient by $\eta/\delta$. At $\delta=0$ rank is lost entirely. QR with pivoting or [[Singular value decomposition]] can diagnose such cases. Numerical rank requires a tolerance related to scale and data accuracy; it is not an exact universal decimal cutoff.

## Practice

1. Find the least-squares constant fitting the numbers $2,4,9$.
2. For $A=\begin{pmatrix}1&1\\2&2\end{pmatrix}$ and $b=(3,6)^T$, is the least-squares coefficient vector unique?

## Worked answers

1. Minimize $(c-2)^2+(c-4)^2+(c-9)^2$. The normal equation is $3c=15$, so $c=5$. The residuals $(-3,-1,4)$ sum to zero and are perpendicular to the constant-output column.
2. The columns coincide, so only $x_1+x_2$ matters. Every pair with $x_1+x_2=3$ gives zero residual. The output is unique but its coefficients are not.
