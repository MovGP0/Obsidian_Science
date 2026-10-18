---
title: "Partial differential equation algorithms"
catalogue_ids:
  - "19.5"
  - "19.5.1"
  - "19.5.2"
  - "19.5.3"
---

> [!TLDR]
> Finite differences replace derivatives by grid relations; trial functions and finite elements replace the unknown function by finitely many coefficients.

## Entry route

Read [[15.01 Basic language]], [[15.03 Initial and boundary data]], [[Boundary value algorithms]], and [[Direct linear system methods]]. A partial differential equation, or PDE, involves derivatives with respect to more than one variable. A numerical PDE problem also needs a domain and boundary or initial data. This lesson uses real variables with no physical units.

Different PDE types need different algorithms. An elliptic equation such as $-u_{xx}-u_{yy}=f$ gives a boundary problem. A parabolic equation such as $u_t=u_{xx}$ advances initial data. A discretization that is appropriate for one is not automatically stable for another.

## Finite differences on a square

For $-u_{xx}-u_{yy}=f(x,y)$, use a square grid with width $h$. Apply the centred second difference separately in each direction:

$$
4U_{i,j}-U_{i-1,j}-U_{i+1,j}-U_{i,j-1}-U_{i,j+1}=h^2f_{i,j}.
$$

The five positions form a **five-point stencil**. Boundary values are known and move to the right side of rows beside the boundary. For a smooth solution with bounded fourth partial derivatives, the local approximation of the differential operator has error $O(h^2)$. On a square with compatible Dirichlet data, the stability of this operator yields corresponding grid convergence under the usual smoothness assumptions. Irregular corners or nonsmooth data can reduce the order.

For a complete tiny example, take the unit square, zero values on its boundary, $f=1$, and $h=1/2$. There is one interior node. Its four neighbours are boundary zeros, so $4U=(1/2)^2$ and $U=1/16$. This is a numerical result, not the exact centre value of the continuum problem. A finer grid is required to study its discretization error.

![[catalogue-ch19-grid-and-hat.svg|**Fig. C.ch19.3** A difference stencil uses neighbouring node values; a finite-element basis uses a function supported near a node.]]

Fig. C.ch19.3 compares two kinds of local structure. A difference equation relates samples. A finite-element basis describes a function between nodes as well.

## A step-size restriction for an evolution equation

For $u_t=u_{xx}$ on $0<x<1$ with fixed zero endpoint values, combine forward Euler in $t$ with a centred spatial difference:

$$
U_i^{n+1}=U_i^n+r(U_{i-1}^n-2U_i^n+U_{i+1}^n),\qquad r=\Delta t/h^2.
$$

If $0\le r\le1/2$, the next value is a weighted average with nonnegative weights $r,1-2r,r$. This gives a maximum-norm stability argument: perturbations cannot gain a larger maximum in one step. With appropriate smoothness and consistent initial and boundary data, the method converges with error $O(\Delta t+h^2)$ on a fixed interval. If $r>1/2$, high-frequency errors can grow, and refining $h$ while holding $\Delta t$ fixed can make matters worse.

For old interior values $(0,1,0)$ and zero outside neighbours, a step with $r=1/4$ gives $(1/4,1/2,1/4)$. With $r=1$, the same pattern gives $(1,-1,1)$: an alternating error is introduced. Backward Euler uses new values in the spatial difference and requires a linear solve; its larger stability range does not remove the need for an accuracy study. See [Driscoll and Braun, absolute stability for diffusion](https://fncbook.com/julia/absstab-diffusion/).

## Trial functions on the whole domain

For a boundary problem choose functions $\phi_j$ that satisfy homogeneous boundary conditions and set $U=\sum_{j=1}^m c_j\phi_j$. A collocation method enforces the PDE at $m$ points. A Galerkin method tests an integrated equation against the same basis. For $-\Delta u=f$ with zero Dirichlet data, integration by parts gives

$$
\int_\Omega\nabla U\cdot\nabla\phi_i\,dA=\int_\Omega f\phi_i\,dA.
$$

This is the **weak form**: the trial function needs first derivatives in the integral, rather than pointwise second derivatives everywhere. With one square-domain trial function $\phi=x(1-x)y(1-y)$ and $f=1$, the right integral is $1/36$. The left coefficient is $\int|\nabla\phi|^2=2(1/3)(1/30)=1/45$. Thus $U=(5/4)\phi$ and its centre value is $5/64$. Different trial spaces give different approximations; agreement is not automatic.

## Finite elements and assembly

The **finite element method** chooses piecewise polynomials on small cells, often triangles. For continuous piecewise linear functions, a nodal basis function is $1$ at its own vertex and $0$ at all other vertices. On each triangle it is a plane. Its gradient is constant there. Assemble

$$
K_{ij}=\sum_{\text{triangles }T}\int_T\nabla\phi_i\cdot\nabla\phi_j\,dA,
\qquad b_i=\sum_T\int_Tf\phi_i\,dA.
$$

Then solve $Kc=b$ after imposing boundary values. Most entries are zero because distant basis supports do not overlap. On the reference triangle with vertices $(0,0),(1,0),(0,1)$, the basis is $1-x-y,x,y$. Its local stiffness matrix is $\frac12\begin{pmatrix}2&-1&-1\\-1&1&0\\-1&0&1\end{pmatrix}$, found by multiplying constant gradients and the area $1/2$. This local matrix is singular until boundary constraints or neighbouring cells supply the global structure.

For a coercive Dirichlet weak problem, Galerkin error in the energy norm is controlled by the best approximation available in the trial space. Convergence therefore needs suitable mesh refinement, approximation properties, and a well-posed problem. It is not a claim for every PDE or distorted mesh. [MIT's finite-element introduction](https://math.mit.edu/~stoopn/18.086/FEintro.pdf) develops this construction further.

## Practice

1. With $h=0.1$, what largest $\Delta t$ satisfies the explicit averaging condition above?
2. Compute the local load vector for $f=1$ on the reference triangle.

> [!example]- Worked answers
> 1. Require $\Delta t\le h^2/2=0.005$. This is a stability restriction; it does not certify the requested accuracy.
> 2. The three linear basis functions have equal integrals by symmetry, and their sum is $1$. Their integrals therefore add to the area $1/2$ and each equals $1/6$. The vector is $(1/6,1/6,1/6)^T$.
