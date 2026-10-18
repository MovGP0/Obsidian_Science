---
title: "Fields of several variables"
catalogue_ids:
  - "10.4"
  - "10.4.1"
  - "10.4.2"
---

> [!TLDR]
> Varying a function of several coordinates and integrating by parts in each coordinate produces a partial differential equation and boundary conditions.

## From a curve to a scalar field

A graph $y(x)$ assigns one value to a point on an interval. A scalar field $u(x_1,x_2)$ assigns one value to each point of a plane region $\Omega$. This is a mathematical field; no physical interpretation is assumed. Before this lesson, read [[Functionals and stationary curves]], [[12.02 Partial derivatives]], [[13.02 Gradient]], and [[13.07 Integral theorems]]. The gradient is $\nabla u=(u_{x_1},u_{x_2})$. A double integral adds contributions across area, as a one-variable integral adds them across an interval.

For a smooth bounded region, consider

$$
J[u]=\int_\Omega F(\mathbf x,u,\nabla u)\,d\mathbf x.
$$

The symbol $d\mathbf x$ means area in two dimensions and volume in three. Its role is integration, not a vector factor. Fix $u$ on the boundary $\partial\Omega$ and vary it as $u+\varepsilon\eta$, with $\eta=0$ there. We first assume $u$ is $C^2$, $F$ is $C^2$, and all quantities extend smoothly enough to the boundary for integration by parts. These are classical assumptions, not a theorem that every minimizing field has that regularity.

## Simple variational problem and its equation

Write $p_i$ for the slot occupied by $u_{x_i}$ and $z$ for the slot occupied by $u$. The chain rule gives

$$
\delta J[u;\eta]=\int_\Omega\left(F_z\eta+\sum_{i=1}^nF_{p_i}\,\partial_{x_i}\eta\right)d\mathbf x.
$$

Integration by parts in each coordinate, combined with the divergence theorem, produces

$$
\delta J=
\int_\Omega\left(F_z-\sum_{i=1}^n\partial_{x_i}F_{p_i}\right)\eta\,d\mathbf x
+\int_{\partial\Omega}(F_p\cdot\mathbf n)\eta\,dS.
$$

Here $F_p=(F_{p_1},\ldots,F_{p_n})$, $\mathbf n$ is the outward unit normal, and $dS$ is boundary length in the plane or boundary area in space. Boundary-fixed variations remove the last integral. Local test functions then give

$$
F_z-\sum_i\partial_{x_i}F_{p_i}=0.
$$

For $F=\tfrac12|\nabla u|^2-fu$, where $f$ is a prescribed function, the equation is $-\Delta u=f$. The **Laplacian** is $\Delta u=\sum_i u_{x_ix_i}$. Thus one scalar variational equation becomes a partial differential equation. For $f=0$, it is Laplace's equation. If a boundary portion has free values rather than prescribed ones, its natural condition is $F_p\cdot\mathbf n=0$ there. For this example it is $\nabla u\cdot\mathbf n=0$.

## Worked example on the unit square

Let $\Omega=(0,1)\times(0,1)$ and prescribe the boundary values of $u_*(x_1,x_2)=x_1^2-x_2^2$. Minimize

$$
J[u]=\frac12\int_\Omega(u_{x_1}^2+u_{x_2}^2)\,dx_1dx_2.
$$

The second derivatives are $u_{*x_1x_1}=2$ and $u_{*x_2x_2}=-2$. Hence $\Delta u_*=0$. This establishes stationarity. To establish minimality, let $h$ be any smooth competitor change that vanishes on the square boundary. Expansion gives

$$
J[u_*+h]-J[u_*]
=\int_\Omega\nabla u_*\cdot\nabla h\,d\mathbf x
+\frac12\int_\Omega|\nabla h|^2\,d\mathbf x.
$$

Integration by parts makes the first integral $-\int_\Omega h\Delta u_*\,d\mathbf x+\int_{\partial\Omega}h\,\partial_nu_*\,dS=0$. The remaining square is nonnegative. Equality makes $h$ constant on the connected square, and its zero boundary values make that constant zero. Thus $u_*$ is the unique minimizer. Its cost is $\tfrac12(4/3+4/3)=4/3$. The polygonal boundary causes no problem here: the divergence theorem is applied edge by edge, and isolated corners contribute no boundary-length integral.

## More general variational problems

Several unknown fields $u_1,\ldots,u_m$ yield one equation per field:

$$
F_{u_\alpha}-\sum_i\partial_{x_i}F_{u_{\alpha,x_i}}=0,
\qquad \alpha=1,\ldots,m.
$$

An integral constraint, such as $\int_\Omega u^2\,d\mathbf x=1$, adds a constant multiplier. For the squared-gradient integral with zero boundary values, its equation takes the form $-\Delta u=\lambda u$ after choosing the multiplier's sign and normalization. The constraint fixes the scale of $u$. It does not guarantee a solution for an arbitrary $\lambda$: these are eigenvalue problems, introduced in [[15.05 Eigenvalue problems]]. Pointwise constraints can instead introduce multiplier fields.

A geometric example is the area of a graph over a fixed plane region:

$$
A[u]=\int_\Omega\sqrt{1+|\nabla u|^2}\,d\mathbf x.
$$

Its equation is $\operatorname{div}(\nabla u/\sqrt{1+|\nabla u|^2})=0$. Expanding in two variables gives

$$
(1+u_{x_2}^2)u_{x_1x_1}
-2u_{x_1}u_{x_2}u_{x_1x_2}
+(1+u_{x_1}^2)u_{x_2x_2}=0.
$$

For an affine function $u=ax_1+bx_2+c$, all second derivatives vanish, so the equation holds. The equation is nonlinear for general $u$; replacing it by $\Delta u=0$ is only a small-slope approximation, not an identity.

The formal calculation can also be retained as an integral identity when second derivatives do not exist classically. Such a **weak formulation** asks for $\int_\Omega\nabla u\cdot\nabla\eta=\int_\Omega f\eta$ for all boundary-zero test functions. Defining the full function space and proving existence needs additional analysis. This lesson establishes the classical formula and explains the integral identity, without assuming that deeper theory.

## Practice

1. For $J[u]=\int_\Omega\tfrac12(|\nabla u|^2+u^2)d\mathbf x$ with fixed boundary values, derive the equation.
2. On the unit square, fix $u=x_1+x_2$ on the boundary. Give the minimizer and minimum of $\tfrac12\int_\Omega|\nabla u|^2$.

### Worked answers

1. $F_z=u$, $F_{p_i}=u_{x_i}$, so $u-\Delta u=0$. The positive $u^2$ term gives a plus sign before $u$ in this form. For zero boundary data, direct nonnegativity shows that $u=0$ is the unique minimizer.
2. The affine field $u_*=x_1+x_2$ has zero Laplacian and matches the boundary values. The difference calculation in the worked example proves uniqueness. Its gradient is $(1,1)$, so the integrand is $\tfrac12(1+1)=1$ and the unit-square integral is $1$.
