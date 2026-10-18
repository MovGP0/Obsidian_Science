---
title: "Least-squares algorithms"
catalogue_ids:
  - "19.6.2"
  - "19.6.2.1"
  - "19.6.2.2"
  - "19.6.2.3"
  - "19.6.2.4"
---

> [!TLDR]
> Least squares chooses coefficients that minimize squared residuals; orthogonal factorizations solve the linear problem without squaring its condition number.

## Approximation instead of exact interpolation

Read [[10.04 Linear systems]], [[08.01 Definite integrals]], and [[Direct linear system methods]]. A residual is a model value minus a target value. Least squares minimizes the sum or integral of squared residuals. Squaring prevents positive and negative errors from cancelling and gives smooth algebraic conditions. It also makes a large outlier influential. The method is a mathematical fitting rule, not proof that the fitted model is the correct one.

## Discrete normal equations

For samples $(x_i,y_i)$, choose known basis functions $\phi_j$ and a model $p(x)=\sum_{j=1}^n c_j\phi_j(x)$. Define $A_{ij}=\phi_j(x_i)$ and $y=(y_i)$. Then minimize $S(c)=\|Ac-y\|_2^2$. At a minimizer, differentiating with respect to each coefficient gives

$$
A^T(Ac-y)=0,\qquad A^TAc=A^Ty.
$$

These are the **normal equations**. If the columns of $A$ are independent, $A^TA$ is positive definite and the minimizer is unique. Otherwise several coefficient vectors may describe equally good fits. Geometrically the residual is perpendicular to every allowed model direction.

Fit a line $a+bx$ to $(0,1),(1,2),(2,2)$. Then

$$
\begin{pmatrix}3&3\\3&5\end{pmatrix}\begin{pmatrix}a\\b\end{pmatrix}
=\begin{pmatrix}5\\6\end{pmatrix}.
$$

Subtract the first row from the second to get $2b=1$, so $b=1/2$ and $a=7/6$. Fitted values are $7/6,5/3,13/6$. Residuals are $1/6,-1/3,1/6$; their sum and their $x$-weighted sum are both zero. Their squared sum is $1/6$. These checks independently verify the normal equations.

## Householder QR

Normal equations are useful for derivation, but forming them can lose accuracy: in the Euclidean norm, $\kappa_2(A^TA)=\kappa_2(A)^2$ for full column rank. Instead factor $A=Q R$, where $Q$ has orthonormal columns, and solve $Rc=Q^Ty$. With a full orthogonal transformation, the remaining transformed entries of $y$ are residual components.

A **Householder reflection** removes several entries from a column at once. For a nonzero column segment $a$, set $v=a+\operatorname{sign}(a_1)\|a\|_2e_1$, choosing sign $+1$ when $a_1=0$. Then

$$
H=I-2\frac{vv^T}{v^Tv}
$$

is orthogonal and maps $a$ to a multiple of $e_1$. Choose the sign to avoid subtracting nearly equal leading numbers. Apply the same reflection to the remaining columns and the right side, then repeat on smaller trailing blocks. For $a=(3,4)^T$, $v=(8,4)^T$ and $H=\begin{pmatrix}-3/5&-4/5\\-4/5&3/5\end{pmatrix}$; direct multiplication gives $Ha=(-5,0)^T$. Software applies reflections through vectors rather than forming every dense $H$.

## Continuous mean-square approximation

For a continuous target $f$ on $[a,b]$, minimize

$$
\int_a^b\left[f(x)-\sum_jc_j\phi_j(x)\right]^2w(x)\,dx,
$$

with an integrable positive weight $w$. The continuous normal equations are $\sum_j G_{ij}c_j=d_i$, where $G_{ij}=\int\phi_i\phi_jw$ and $d_i=\int f\phi_iw$. Independence in this weighted integral sense ensures uniqueness. Orthogonal bases make $G$ diagonal. To approximate $x^2$ by a constant on $[-1,1]$ with $w=1$, the equation is $2c=\int_{-1}^1x^2dx=2/3$, so $c=1/3$. It is the average, not the midpoint of the function's range.

## Several inputs and nonlinear parameters

With two independent inputs use, for example, $p(x,z)=a+bx+cz$. A row of the design matrix is $(1,x_i,z_i)$. The same QR method works. A square grid or scattered data changes the matrix rows, not the least-squares principle. Identical or dependent columns mean the coefficients cannot be identified separately; rescaling columns can help conditioning but cannot restore lost rank.

If parameters enter nonlinearly, as in $p(x;a,b)=a e^{bx}$, the objective need not be convex. At a trial parameter vector $c$, linearize the residual $r(c+s)\approx r(c)+Js$ and solve a linear least-squares problem for $s$. This is Gauss–Newton. Damping or a trust region limits unreliable steps. There may be several local minima, flat directions, or no useful fit. [[Iterative system methods]] explains finite-difference Jacobians. No general convergence guarantee follows merely from squaring the residuals.

## Practice

1. Find the least-squares constant for the samples $1,2,6$.
2. For $a=(0,2)^T$, construct the reflection above and check its effect.

> [!example]- Worked answers
> 1. Differentiate $(c-1)^2+(c-2)^2+(c-6)^2$. The equation is $6c-18=0$, so $c=3$. Residuals $2,1,-3$ add to zero.
> 2. Use $v=(2,2)^T$. Then $vv^T/(v^Tv)=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$, so $H=\begin{pmatrix}0&-1\\-1&0\end{pmatrix}$. It maps $(0,2)^T$ to $(-2,0)^T$ and preserves its length.

## Further reading

[LAPACK, linear least squares](https://www.netlib.org/lapack/lug/node27.html) distinguishes full-rank QR solutions from rank-deficient methods. Rank detection and singular-value decomposition are natural next steps after this lesson.
