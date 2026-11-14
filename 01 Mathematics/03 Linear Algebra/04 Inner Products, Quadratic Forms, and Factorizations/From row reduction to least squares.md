---
title: "From row reduction to least squares"
---

> [!TLDR]
> Elimination identifies which outputs a matrix can produce, and orthogonal projection gives the closest output when the data are inconsistent.

## What row reduction reveals

Write $Ax=b$ for a real $m\times n$ matrix. Row operations act on both sides of the equation. A row of zeros to the left of a nonzero entry in the reduced augmented matrix certifies inconsistency. If the system is consistent, write its solution as $x=x_0+z$, with $Az=0$. The free variables describe the null space. For a basis of the column space, take the columns of the **original** matrix whose indices are pivot columns in the reduction. The row operations generally change the column space.

For a square matrix with nonzero pivots and no row swaps, elimination gives $A=LU$, where $L$ stores the elimination multipliers and $U$ is upper triangular. Solve $Ly=b$ and then $Ux=y$. If row swaps are required, track their permutation and use $PA=LU$ for the accumulated permutation $P$. A single factorization can then serve many right-hand sides.

## What to do with inconsistent measurements

If $A$ has independent columns, the closest vector to $b$ in the column space is $A\hat x$ with $A^{\mathsf T}(b-A\hat x)=0$. This follows by decomposing a candidate residual into the perpendicular residual and a part in the column space, then applying Pythagoras. A thin factorization $A=QR$ gives the triangular system $R\hat x=Q^{\mathsf T}b$.

For the line $c_0+c_1t$ through the data $(0,1),(1,2),(2,2)$ in the least-squares sense, the two columns are $(1,1,1)^{\mathsf T}$ and $(0,1,2)^{\mathsf T}$. The normal equations give $c_0=7/6$ and $c_1=1/2$. The residual $(-1/6,1/3,-1/6)^{\mathsf T}$ has zero dot product with each column, which checks both coefficients. See [[Least-squares algorithms#A rectangular QR factorization by hand|the QR calculation]] for the corresponding factorization steps.

Use [[10.04 Linear systems|linear systems]] for elimination and [[10.08 Diagonalization|diagonalization]] when the question is about the action or powers of a square map on its eigenvectors.

## Sources

Source material from Kyle Kabasares’s UC Merced notes. [[Row reduction and the four fundamental subspaces|Math 141]], [[Coordinate matrices and diagonalization#Two coordinate systems|Math 141]], [[Subspaces, eigenvectors, and orthogonal projections#Dot product|Math 141]], [[Chebyshev nodes and least-squares approximation#Least-squares approximations|Math 130]].
