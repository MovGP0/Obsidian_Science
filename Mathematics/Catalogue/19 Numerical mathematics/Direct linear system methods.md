---
title: "Direct linear system methods"
catalogue_ids:
  - "19.2"
  - "19.2.1"
  - "19.2.1.1"
  - "19.2.1.2"
  - "19.2.1.3"
---

> [!TLDR]
> LU, Cholesky, and orthogonal factorizations replace one linear system by simpler triangular systems.

## Prerequisites and the numerical task

Read [[10.03 Matrices]] and [[10.04 Linear systems]]. A matrix $A$ is a table of coefficients, $x$ is a column of unknowns, and $b$ is the required result. Solving $Ax=b$ means finding values that satisfy every row equation. A direct algorithm uses a finite sequence of arithmetic operations in exact arithmetic. On a computer, rounding still occurs. Direct does not mean error-free.

An upper triangular matrix has zeros below its diagonal. Solve its last row first, then work upwards. For a lower triangular matrix, start with the first row. Each diagonal entry used for division must be nonzero. Factorization is useful because these triangular solves are simple and because one factorization can serve several right-hand sides.

## LU with row permutations

Gaussian elimination subtracts multiples of earlier rows to remove coefficients below the diagonal. Save the multipliers in a lower triangular matrix $L$ with diagonal $1$. The remaining upper triangular matrix is $U$. If rows were exchanged, write

$$
PA=LU,
$$

where $P$ records those row exchanges. Solve $Ly=Pb$ by forward substitution, then $Ux=y$ by back substitution. Never form $A^{-1}$ merely to solve a system: solving with the factors avoids extra work and rounding.

For

$$
A=\begin{pmatrix}2&1\\4&3\end{pmatrix},\qquad b=\begin{pmatrix}1\\3\end{pmatrix},
$$

the multiplier is $4/2=2$, so without a row exchange $L=\begin{pmatrix}1&0\\2&1\end{pmatrix}$ and $U=\begin{pmatrix}2&1\\0&1\end{pmatrix}$. Forward substitution gives $y_1=1$, $y_2=3-2=1$. Back substitution gives $x_2=1$ and $x_1=0$. Direct multiplication checks $A(0,1)^T=(1,3)^T$.

In general, use **partial pivoting**: in the active column, exchange the pivot row with a remaining row whose entry has greatest absolute value. This avoids division by a needlessly small available pivot. A zero pivot after the search signals singularity in exact arithmetic. Pivoting usually controls roundoff well, but growth of intermediate entries remains possible; it is not an unconditional small-forward-error guarantee.

## Cholesky requires positive definiteness

A symmetric matrix satisfies $A^T=A$. Symmetry alone is insufficient for Cholesky. Require also **positive definiteness**: $v^TAv>0$ for every nonzero real vector $v$. Then

$$
A=CC^T
$$

with $C$ lower triangular and positive diagonal. Calculate column by column:

$$
c_{jj}=\sqrt{a_{jj}-\sum_{k<j}c_{jk}^2},\qquad
c_{ij}=\frac{a_{ij}-\sum_{k<j}c_{ik}c_{jk}}{c_{jj}}\quad(i>j).
$$

For $A=\begin{pmatrix}4&2\\2&3\end{pmatrix}$, obtain $C=\begin{pmatrix}2&0\\1&\sqrt2\end{pmatrix}$. The radicands are positive because of positive definiteness. The symmetric matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ fails this requirement and needs a different factorization. Floating-point failure of a Cholesky step can also reveal an almost singular or incorrectly assembled matrix.

## Orthogonalization and QR

An orthogonal matrix satisfies $Q^TQ=I$; multiplying by it preserves Euclidean lengths. A **QR factorization** writes $A=QR$, with $R$ upper triangular and columns of $Q$ orthonormal. For a nonsingular square system solve $Rx=Q^Tb$. For a tall full-column-rank matrix it also solves least squares, as taught in [[Least-squares algorithms]].

One construction is Gram–Schmidt. For columns $a_1,a_2$, set $q_1=a_1/\|a_1\|$, remove its component from $a_2$ by $v_2=a_2-q_1(q_1^Ta_2)$, then normalize $q_2=v_2/\|v_2\|$. The removed components become entries of $R$. For columns $(1,1)^T$ and $(1,-1)^T$, their dot product is zero, so $Q=A/\sqrt2$ and $R=\sqrt2I$. Nearly dependent columns can lose orthogonality in floating point; Householder reflections are generally preferred for robust dense computations.

## Check the answer and the problem

Compute a residual $r=b-A\widehat x$. A scale-aware measure is $\|r\|/(\|A\|\|\widehat x\|+\|b\|)$. This asks whether the computed answer solves a nearby problem. A small residual need not imply a small solution error when $A$ is ill-conditioned. For invertible $A$, the condition number $\kappa(A)=\|A\|\|A^{-1}\|$ measures sensitivity to data perturbations. It is a property of the problem, whereas numerical stability is a property of the algorithm.

## Practice

1. Solve $\begin{pmatrix}3&1\\0&2\end{pmatrix}x=(5,4)^T$ by back substitution.
2. Find the Cholesky factor of $\begin{pmatrix}9&3\\3&2\end{pmatrix}$.

> [!example]- Worked answers
> 1. The last equation gives $x_2=2$. Then $3x_1+2=5$, so $x_1=1$. Substitution checks both rows.
> 2. $c_{11}=3$, $c_{21}=1$, and $c_{22}=\sqrt{2-1}=1$. Thus $C=\begin{pmatrix}3&0\\1&1\end{pmatrix}$ and multiplication verifies $CC^T=A$.

## Further reading

[LAPACK Users' Guide, linear equations](https://www.netlib.org/lapack/lug/node26.html) describes the factorization choices used by numerical software. The small examples above show the operations independently of a software interface.
