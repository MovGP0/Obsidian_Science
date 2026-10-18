---
title: "Numerical variational methods"
catalogue_ids:
  - "10.5"
---

> [!TLDR]
> A direct numerical method restricts the unknown function to a finite family and then minimizes the resulting function of its coefficients.

## Replace a function by finitely many coefficients

Read [[Functionals and stationary curves]] before this lesson. A **direct method of numerical approximation** minimizes the functional after choosing a finite trial space. This is different from first deriving a differential equation and then discretizing that equation. For suitable problems the two routes lead to the same algebra, but they start from different statements.

Choose a function $y_0$ that satisfies the prescribed endpoint values. Select known **basis functions** $\phi_1,\ldots,\phi_N$ that vanish at those endpoints. The trial family is

$$
y_N(x)=y_0(x)+\sum_{j=1}^N c_j\phi_j(x).
$$

The unknowns are now the real numbers $c_1,\ldots,c_N$. Substitute into $J$ to obtain an ordinary multivariable function $Q(\mathbf c)=J[y_N]$. Solve $\partial Q/\partial c_j=0$ and then check that the point is a minimum. This is the **Ritz method**. Its connection to eigenvalue approximations is often called the Rayleigh–Ritz method.

For the quadratic problem

$$
J[y]=\int_0^1\left(\frac12y'^2-f(x)y\right)dx,
\qquad y(0)=y(1)=0,
$$

take $y_0=0$. Expanding and differentiating gives the linear system

$$
\sum_j A_{ij}c_j=b_i,
\qquad A_{ij}=\int_0^1\phi_i'\phi_j'\,dx,
\qquad b_i=\int_0^1f\phi_i\,dx.
$$

The matrix $A$ is symmetric. If the basis functions are linearly independent, $\mathbf c^TA\mathbf c=\int(\sum c_i\phi_i')^2dx>0$ for nonzero $\mathbf c$. The zero boundary conditions exclude a nonzero constant. Thus the matrix is positive definite and the discrete minimizer is unique. This is a concrete reason for using an independent basis, rather than merely counting coefficients.

## Worked example: one polynomial trial function

Let $f(x)=x$ and $\phi(x)=x(1-x)$. A single coefficient gives $y_c=cx(1-x)$. Compute

$$
\int_0^1\phi'^2dx=\int_0^1(1-2x)^2dx=\frac13,
\qquad
\int_0^1x\phi\,dx=\frac1{12}.
$$

Therefore $Q(c)=c^2/6-c/12$. Its derivative is $c/3-1/12$, giving $c=1/4$. The second derivative is $1/3>0$, and the trial minimum is $Q(1/4)=-1/96$.

We can check the approximation against an exact solution. The Euler–Lagrange equation is $-y''=x$. Integrating and applying the endpoints yields $y_*=(x-x^3)/6$. Its cost is $-1/90$, which is smaller than $-1/96$ as expected. The trial family cannot contain this cubic. In fact, for any boundary-zero approximation $y_N$,

$$
J[y_N]-J[y_*]=\frac12\int_0^1(y_N'-y_*')^2dx.
$$

For the one-term answer the difference is $1/1440$. This exact identity identifies the error measured by the functional. A visually close graph need not give a small derivative error, so the chosen measure matters.

## Piecewise linear trial functions

Global polynomials are not the only choice. Divide $[0,1]$ into a mesh $0=x_0<x_1<\cdots<x_n=1$. At each interior node define a **hat function** that is $1$ there, is $0$ at the neighboring nodes, and is linear on each intervening interval. It is zero elsewhere. The coefficient at the node is then the value of the approximation there.

![[catalogue-ch10-hat-functions.svg|**Fig. C.ch10.3** Neighboring hat functions overlap on one interval. Their coefficients set the node values of a piecewise linear approximation.]]

Fig. C.ch10.3 shows why these basis functions lead to sparse systems: functions with disjoint support have $A_{ij}=0$. For uniform spacing $h$, the diagonal entries are $2/h$ and neighboring entries are $-1/h$. Each follows by integrating the products of the constant slopes $1/h$ and $-1/h$ on the relevant intervals. This is the simplest **finite element method** in one dimension.

The hat functions are continuous but their derivatives jump at nodes. Use the functional on continuous piecewise $C^1$ functions with square-integrable derivatives; the displayed integrals remain defined by summing over elements. Do not claim these functions are globally $C^1$, or apply a pointwise second derivative at their corners. The integral stationarity equations use only first derivatives and remain meaningful.

## What refinement does and does not prove

If the trial spaces are nested and integration and minimization are exact, adding basis functions cannot increase the computed minimum. The old minimizer remains an allowed candidate. This gives an upper bound on the true minimum, provided the trial functions belong to the continuous admissible class.

Convergence of the values alone does not prove convergence of the curves. Suitable approximation properties, coercivity, and control of the numerical algebra are also needed. Coercivity means that large changes in the selected norm cannot have arbitrarily small cost. Numerical quadrature can change a functional, and a loose optimization tolerance can hide the benefit of refinement. Compare values, equation residuals, and a meaningful error norm when checking a computation. A small residual is useful evidence, not an automatic theorem of correctness.

## Practice

1. Use the one-term family $y=cx(1-x)$ for the same functional with $f(x)=1$. Find $c$ and compare with the exact curve.
2. On a uniform mesh of spacing $h=1/2$ there is one interior hat $\phi$. For $f=1$, compute $A_{11}$, $b_1$, and the midpoint coefficient.

### Worked answers

1. $Q(c)=c^2/6-c/6$, so $Q'(c)=c/3-1/6=0$ gives $c=1/2$. The exact equation is $-y''=1$ with zero endpoints, giving $y=x(1-x)/2$. This time the trial family contains the exact solution.
2. Each half interval has slope magnitude $2$. Thus $A_{11}=4(1/2+1/2)=4$. The hat has triangular area $1/2$, so $b_1=1/2$. Hence $c=b_1/A_{11}=1/8$, agreeing with the exact midpoint value in answer 1. The piecewise linear graph is still not the exact quadratic between nodes.
