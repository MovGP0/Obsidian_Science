---
title: "Linear systems and pivot exchange"
catalogue_ids:
  - "4.5"
  - "4.5.1"
  - "4.5.1.1"
  - "4.5.1.2"
  - "4.5.1.3"
  - "4.5.1.4"
  - "4.5.2"
  - "4.5.2.1"
  - "4.5.2.2"
  - "4.5.2.3"
  - "4.5.2.4"
---

> [!TLDR]
> Elimination and pivot exchange solve linear equations by reversible substitutions and expose inconsistency or free variables.

## Express a set of constraints

Read [[Matrices and linear maps]] and [[Determinants and oriented area]]. A **system of linear equations** in unknowns $x_1,\ldots,x_n$ has the form $Ax=b$, where $A$ is an $m\times n$ coefficient matrix and $b$ is a known $m$-component column. Each equation is a linear combination of the unknowns. No squared unknown or product of unknowns is allowed. If $b=0$, the system is homogeneous; otherwise it is inhomogeneous.

The columns of $A$ span the set of attainable outputs. Their span consists of all their linear combinations. The system is solvable precisely when $b$ lies in that span. The **rank** is the number of independent column directions, equal to the number of independent rows. Independence means that no nontrivial linear combination vanishes. Elimination gives a practical way to find this number.

## Gaussian elimination

Write the augmented array $[A\mid b]$. You may swap rows, multiply a row by a nonzero number, and add a multiple of one row to another. These operations are reversible and preserve exactly the same solution set. Use a nonzero **pivot** to remove coefficients below it, producing echelon form. Solve the last nonzero equation first, then substitute upwards. This is back substitution.

For

$$
\begin{aligned}x+y+z&=6,\\2x+3y+z&=11,\\x+2y+3z&=14,\end{aligned}
$$

subtract twice row $1$ from row $2$, and subtract row $1$ from row $3$. The last two equations become $y-z=-1$ and $y+2z=8$. Subtract the former from the latter to get $3z=9$. Then $z=3$, $y=2$, and $x=1$. Check the original equations: $1+2+3=6$, $2+6+3=11$, and $1+4+9=14$.

## Rank and all solvability cases

The rank of the augmented array $[A\mid b]$ may exceed that of $A$. If it does, elimination produces a row $0=c$ with $c\ne0$, so there is no solution. If their ranks agree at $r$, the system is consistent. There are $n-r$ free unknowns: choose them and solve for pivot unknowns. A unique solution occurs exactly when $r=n$. These statements apply to rectangular systems too.

For example, $x+y=2$, $2x+2y=4$ reduces to one equation. Its solutions are $(x,y)=(2-t,t)$ for any real $t$. Changing the second right side to $5$ produces $0=1$ and no solution. A homogeneous system always has the zero solution; it has a nonzero solution exactly when $r<n$. The difference between any two solutions of $Ax=b$ lies in the nullspace $\{z:Az=0\}$.

## Exchange method: solve for a new variable

The **exchange method** here means pivot exchange between input variables and output variables, sometimes presented as a tableau. It is not the Steinitz basis-exchange theorem or an approximation algorithm with the same name. Keep the outputs symbolic in $y=Ax$. In a pivot row

$$
y_p=a_{pj}x_j+\sum_{k\ne j}a_{pk}x_k,
$$

solve for $x_j$ when $a_{pj}\ne0$:

$$
x_j=\frac{y_p}{a_{pj}}-\sum_{k\ne j}\frac{a_{pk}}{a_{pj}}x_k.
$$

Now substitute this expression into every other row. In those rows the coefficient of $y_p$ becomes $a_{ij}/a_{pj}$ and each remaining coefficient becomes $a_{ik}-a_{ij}a_{pk}/a_{pj}$. This exchanges the role of one input $x_j$ and one output $y_p$. The arithmetic is substitution, arranged so the variables and their roles remain visible. Gaussian elimination performs the same elimination but normally keeps only the given numerical right side.

## Worked exchange and matrix inverse

Take $y_1=x_1+x_2$ and $y_2=x_1-x_2$. Exchange $y_1$ with $x_1$: $x_1=y_1-x_2$ and $y_2=y_1-2x_2$. Next solve the latter for $x_2=(y_1-y_2)/2$. Substitute upwards to obtain $x_1=(y_1+y_2)/2$. Thus

$$
\begin{pmatrix}1&1\\1&-1\end{pmatrix}^{-1}
=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
$$

Set $y=(5,1)^T$ to solve a numerical system: $x=(3,2)^T$. The symbolic calculation solves all right sides simultaneously. Equivalently, reduce $[A\mid I]$ by row operations to $[I\mid A^{-1}]$, the Gauss–Jordan method. If a pivot cannot be found in every column, a square matrix is singular and no inverse exists. Multiplying $AA^{-1}$ back to $I$ is an essential check.

## Cramer's rule and numerical cautions

For a square system with $\det A\ne0$, let $A_j$ replace column $j$ by $b$. Then $x_j=\det A_j/\det A$. To see why, substitute $b=\sum_kx_k A_{:k}$ into that column. Determinant linearity leaves only the $k=j$ term; all others repeat another column. For the previous system, $\det A=-2$, $\det A_1=-6$, and $\det A_2=-4$, so $x_1=3$, $x_2=2$.

Cramer's rule is a useful exact identity for small systems, but not a preferred large-system algorithm. In floating-point elimination, choose reasonably large pivots, often by swapping the largest available absolute entry in a column into the pivot row. Dividing by a tiny pivot can amplify roundoff. A zero pivot in the current position is a reason to search for a row swap, not proof that the system has no solution.

## Practice

1. Solve $x+2y=5$, $3x+4y=11$ by elimination.
2. Classify $x+y+z=1$, $2x+2y+2z=2$ and give every solution.

## Worked answers

1. Subtract three times the first equation from the second: $-2y=-4$, so $y=2$ and $x=1$. Substitution gives $1+4=5$ and $3+8=11$.
2. The second equation is redundant. Both ranks are $1$, with $n=3$, so two unknowns are free. Choose $y=s$, $z=t$; then $x=1-s-t$. There are infinitely many solutions, not a unique inverse-based answer.

## Source

[University of Bielefeld, Operations Research, section 2.4](https://www.math.uni-bielefeld.de/~juhing/2025_WS/OR/WS2425_OR_Skript.pdf) presents the exchange viewpoint through equivalent linear systems. The symbolic example above derives the steps directly.
