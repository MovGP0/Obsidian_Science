---
title: "Iterative system methods"
catalogue_ids:
  - "19.2.1.4"
  - "19.2.2"
  - "19.2.2.1"
  - "19.2.2.2"
  - "19.2.2.3"
---

> [!TLDR]
> System iterations update several unknowns together; convergence depends on the update map and the starting values.

## Entry route

Read [[Direct linear system methods]] and [[Scalar root finding]]. A vector $x=(x_1,\ldots,x_n)^T$ groups several unknowns. A vector equation $F(x)=0$ means that every component $F_i(x)$ is zero. Linear systems have $F(x)=Ax-b$; nonlinear systems can contain products, powers, or other functions of the unknowns.

## Simultaneous and individual linear steps

For $Ax=b$ with nonzero diagonal entries, solve each row for its own unknown. **Jacobi iteration** uses only old values:

$$
x_i^{(k+1)}=\frac{b_i-\sum_{j\ne i}a_{ij}x_j^{(k)}}{a_{ii}}.
$$

These are simultaneous steps. Keep a separate new vector so that old entries are not overwritten. **Gauss–Seidel iteration** uses the newest entries as soon as they are available:

$$
x_i^{(k+1)}=\frac{b_i-\sum_{j<i}a_{ij}x_j^{(k+1)}-\sum_{j>i}a_{ij}x_j^{(k)}}{a_{ii}}.
$$

These are individual steps, and their order matters. Both have the form $x^{(k+1)}=Bx^{(k)}+c$. The error obeys $e^{(k+1)}=Be^{(k)}$. Convergence for every initial vector is equivalent to all eigenvalues of $B$ having modulus less than $1$. A convenient sufficient condition for both methods is strict row diagonal dominance: $|a_{ii}|>\sum_{j\ne i}|a_{ij}|$ for every row. Gauss–Seidel also converges for symmetric positive definite matrices; Jacobi does not have that general guarantee. These distinctions are summarized in [Netlib's solver templates](https://www.netlib.org/templates/templates.html).

For $4x+y=1$ and $x+3y=2$, start at $(0,0)$. Jacobi gives $(1/4,2/3)$, then $(1/12,7/12)$. Gauss–Seidel first gives $x=1/4$, then $y=(2-1/4)/3=7/12$. Its next sweep gives $x=5/48$, then $y=91/144$. The exact answer is $(1/11,7/11)$. Strict diagonal dominance explains why both sequences converge; apparent progress in just two steps would not prove it.

## Ordinary nonlinear iteration

Rewrite $F(x)=0$ as $x=G(x)$. A sufficient global condition on a closed region is that $G$ maps the region into itself and contracts distances: $\|G(x)-G(y)\|\le q\|x-y\|$ with one constant $q<1$. Then successive substitution converges to the unique fixed point in that region. On a convex region a Jacobian norm bound $\|DG\|\le q$ supplies this condition. A Jacobian is the matrix of component slopes, $[DG]_{ij}=\partial G_i/\partial x_j$.

For example, $G(x,y)=((1+y)/4,(2+x)/4)$ contracts in the maximum norm by $1/4$ on all of $\mathbb R^2$. From $(0,0)$ it gives $(1/4,1/2)$ and then $(3/8,9/16)$. Solving the two fixed-point equations gives $(2/5,3/5)$. The contraction bound, rather than the function's linear appearance, controls the iteration.

## Newton for a nonlinear system

Linearize $F(x+s)\approx F(x)+J(x)s$. At each step solve

$$
J(x_k)s_k=-F(x_k),\qquad x_{k+1}=x_k+s_k.
$$

Do not calculate an explicit inverse of $J$. For $F(x,y)=(x^2+y^2-1,x-y)^T$, start at $(1,1)$. Then $F=(1,0)^T$ and $J=\begin{pmatrix}2&2\\1&-1\end{pmatrix}$. Solving gives $s=(-1/4,-1/4)^T$, so the next vector is $(3/4,3/4)$. The next is $(17/24,17/24)$, close to $(1/\sqrt2,1/\sqrt2)$. If the Jacobian is nonsingular at a root and locally Lipschitz continuous, sufficiently close starts have quadratic convergence. Damping a step can improve robustness, but does not remove all failures or prove global convergence.

## Derivative-free Gauss–Newton

For more residuals than unknowns, solve $\min_x\|F(x)\|_2^2$. Approximate the Jacobian without symbolic derivatives:

$$
J_{ij}\approx\frac{F_i(x+h_j e_j)-F_i(x)}{h_j}.
$$

Here $e_j$ changes only coordinate $j$. Solve the linear least-squares problem $\min_s\|J s+F(x)\|_2$, preferably by QR, and update $x$ using a full or damped step. This is a finite-difference, derivative-free Gauss–Newton implementation. “Derivative-free” means that no derivative values are supplied; the method still estimates them numerically. Steps that are too small amplify rounding, and fixed inaccurate differences can prevent high-order convergence. Full column rank, a good start, and a sufficiently small final residual support local convergence; a large residual or poor Jacobian can make it fail. See [Driscoll and Braun, nonlinear least squares](https://fncbook.com/python/nlsq/).

### Residual interpolation without a supplied Jacobian

The catalogue heading does not specify one unique derivative-free implementation. The finite-difference construction above is a simple function-value version. Modern model-based Gauss–Newton methods instead choose $n+1$ nearby points $x,x+d_1,\ldots,x+d_n$ with independent displacement vectors and fit a linear residual model $m(s)=F(x)+As$ by solving

$$
A d_j=F(x+d_j)-F(x),\qquad j=1,\ldots,n.
$$

Coordinate displacements $d_j=h_je_j$ recover the forward-difference columns. More general interpolation sets can reuse earlier function evaluations. Minimize $\|m(s)\|_2^2$ within a trust region $\|s\|\le\Delta$, compare actual and predicted reduction, and accept, reject, or adjust the radius. The interpolation geometry must remain well-conditioned. This is the model-building principle used by [Cartis and Roberts, *A derivative-free Gauss–Newton method*](https://arxiv.org/abs/1710.11005). Their DFO-GN algorithm includes additional geometry and step-acceptance safeguards; its convergence theorem must not be transferred to an unsafeguarded finite-difference update. In optimization, convergence to a stationary point also does not mean finding a zero residual or a global minimum.

## Practice

1. Compute one Jacobi and one Gauss–Seidel sweep for $3x+y=4$, $x+3y=4$, from $(0,0)$.
2. Estimate the derivative of $F(x)=(x^2-2,x-1)^T$ at $x=1$ with a forward difference of $0.1$.

> [!example]- Worked answers
> 1. Jacobi gives $(4/3,4/3)$. Gauss–Seidel gives $x=4/3$ and then $y=(4-4/3)/3=8/9$. Both matrices are strictly diagonally dominant, so repeated sweeps converge to $(1,1)$.
> 2. $F(1)=(-1,0)^T$ and $F(1.1)=(-0.79,0.1)^T$. Subtraction and division by $0.1$ give the column $(2.1,1)^T$. The exact derivative is $(2,1)^T$; the first component shows the finite-difference error.
