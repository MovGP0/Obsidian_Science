---
title: "Quadrature and collocation"
catalogue_ids:
  - "11.2.4"
  - "11.2.4.1"
  - "11.2.4.2"
  - "11.2.4.3"
---

> [!TLDR]
> Quadrature replaces integrals by weighted sums, kernel approximation reduces rank, and collocation enforces an approximate equation at selected points.

## Numerical methods for second-kind equations

An exact formula is useful when the kernel has a simple form. For a general continuous kernel, a finite approximation is usually required. Read [[Finite-rank kernels and successive approximation]], [[10.04 Linear systems]], and [[08.08 Checks and approximations]]. We use $u-\lambda Tu=f$ on $[0,1]$.

There are three different choices: approximate the integral, approximate the kernel, or choose a finite form for the unknown. These may be combined, but their errors have different causes. Always state which choice was made and check the final function in the original equation.

## Approximation of the integral

A **quadrature rule** replaces $\int_0^1g(t)\,dt$ by $\sum_{j=1}^nw_jg(t_j)$, where $t_j$ are sample points and $w_j$ are weights. Applying the rule to the integral and evaluating at $x=t_i$ gives the **Nyström system**

$$
U_i-\lambda\sum_{j=1}^nw_jK(t_i,t_j)U_j=f(t_i),
\qquad i=1,\ldots,n.
$$

The unknown $U_j$ approximates $u(t_j)$. Solve the system, then define a function between nodes by

$$
u_n(x)=f(x)+\lambda\sum_{j=1}^nw_jK(x,t_j)U_j.
$$

This extension uses the equation rather than an arbitrary interpolation. At a node it returns $U_i$ if the linear system is solved exactly. The weights are essential: omitting them changes the operator.

For a composite midpoint rule, divide the interval into equal subintervals, put one node at the centre of each, and use its width as the weight. Increasing the number of intervals reduces the quadrature error when the integrand is sufficiently regular. Continuity guarantees convergence of these sums for each fixed continuous integrand; an error rate needs stronger derivative bounds.

After a calculation, repeat it with twice as many intervals and compare the reconstructed functions on an independent grid. The difference is a useful convergence check, but it is not a proof that either function is close to the exact answer. In particular, a sensitive inverse can turn small quadrature errors into large solution errors. A residual bound with an inverse estimate, as below, supplies stronger evidence. Also inspect the matrix solve: a poorly conditioned matrix can lose accuracy before quadrature error becomes the main limitation.

### Worked example with one midpoint

Take $K(x,t)=xt$, $\lambda=1/2$, and $f=1$. With the single midpoint $t_1=1/2$ and weight $w_1=1$, the equation is $U-(1/2)(1/4)U=1$. Hence $U=8/7$ and

$$
u_1(x)=1+\frac12x\frac12\frac87=1+\frac27x.
$$

The exact solution is $u=1+3x/10$. Thus the maximum error on $[0,1]$ is $3/10-2/7=1/70$. It is not zero merely because the numerical equation is satisfied at its node.

Compute the **residual** in the original continuous equation:

$$
r(x)=u_1(x)-1-\frac12x\int_0^1tu_1(t)\,dt
=\frac27x-\frac12x\left(\frac12+\frac2{21}\right)
=-\frac{x}{84}.
$$

Since the operator norm in the maximum norm is at most $\max_x\int_0^1xt\,dt=1/2$, we have $\|\lambda T\|\leq1/4$. The inverse geometric-series bound gives $\|u-u_1\|\leq\|r\|/(1-1/4)=1/63$. This correctly bounds $1/70$.

## Kernel approximation

Replace $K$ by a sum $K_m(x,t)=\sum_{j=1}^ma_j(x)b_j(t)$ and use the exact finite-rank method. For example,

$$
e^{xt}\approx\sum_{j=0}^{m}\frac{x^jt^j}{j!},
\qquad 0\leq x,t\leq1.
$$

The Taylor remainder is at most $e/(m+1)!$ on this square. Therefore $\|(T-T_m)v\|_\infty\leq e\|v\|_\infty/(m+1)!$. The function approximation and the operator approximation are now explicitly related.

Suppose the exact equation has $\|\lambda T\|\leq q<1$, and the approximated equation is solved exactly for $u_m$. Subtracting equations gives

$$
(I-\lambda T)(u-u_m)=\lambda(T-T_m)u_m,
\qquad
\|u-u_m\|\leq\frac{|\lambda|\|T-T_m\|}{1-q}\|u_m\|.
$$

This estimate requires that $u_m$ exists. A small kernel error by itself is not a stability theorem near an exceptional parameter. The factor $1/(1-q)$ explains why inverse sensitivity matters.

## Collocation method

Choose trial functions $\phi_1,\ldots,\phi_m$, write $u_m(x)=\sum_jc_j\phi_j(x)$, and require the residual to vanish at selected **collocation points** $x_i$. This gives

$$
\sum_jc_j\left(\phi_j(x_i)-\lambda\int_0^1K(x_i,t)\phi_j(t)\,dt\right)=f(x_i).
$$

Quadrature is optional here: the displayed integrals can sometimes be computed exactly. Collocation controls the residual at the chosen points only; a poor trial space or a nearly singular system can still give a poor function.

For the worked kernel, use $u_2=A+Bx$ and points $0,1$. The equation at $0$ gives $A=1$. The one at $1$ gives

$$
A+B-\frac12\left(\frac A2+\frac B3\right)=1.
$$

Thus $5B/6=1/4$ and $B=3/10$. Here collocation is exact because the exact solution belongs to the chosen trial space. This is a special success, not a general property of two points.

## Practice

1. Apply a single-midpoint Nyström rule to $u(x)=1+\tfrac12\int_0^1u(t)\,dt$. Reconstruct $u$.
2. For the main worked problem, choose only constant trial functions and collocate at $x=0$. Find the approximation and its maximum residual.

## Worked answers

1. The one-node equation is $U-U/2=1$, so $U=2$. Reconstruction gives $u(x)=1+U/2=2$. It is exact because the solution and integrand are constant.
2. Write $u_c=A$. At $x=0$, $A=1$. The continuous residual is $1-1-(x/2)\int_0^1t\,dt=-x/4$, whose maximum absolute value is $1/4$. Zero residual at one point did not imply zero residual on the interval.
