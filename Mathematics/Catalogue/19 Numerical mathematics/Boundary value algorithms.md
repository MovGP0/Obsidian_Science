---
title: "Boundary value algorithms"
catalogue_ids:
  - "19.4.2"
  - "19.4.2.1"
  - "19.4.2.2"
  - "19.4.2.3"
---

> [!TLDR]
> Boundary value methods enforce data at separate endpoints by differences, trial functions, or a search over initial slopes.

## A problem with data at both ends

An initial value problem gives all starting data at one coordinate. A **boundary value problem** gives conditions at different points. Read [[14.02 Solutions and data]] and [[08.05 Integration by parts]], then consider

$$
-u''(x)=1\quad(0<x<1),\qquad u(0)=u(1)=0.
$$

Integrating twice gives $u(x)=x(1-x)/2$. We will approximate it by three methods. Having an exact answer makes it possible to check every step, but practical methods do not need that answer. Boundary value problems can have one solution, several, or none, so an algorithm must not silently assume uniqueness for an arbitrary equation.

## Finite differences

Divide $[0,1]$ into $N$ intervals of width $h=1/N$. Let $U_i$ estimate $u(ih)$. Taylor expansion at $x_i$ gives

$$
u''(x_i)=\frac{u(x_i-h)-2u(x_i)+u(x_i+h)}{h^2}+O(h^2)
$$

when the fourth derivative is bounded. Replace the derivative in the equation and impose $U_0=U_N=0$:

$$
-U_{i-1}+2U_i-U_{i+1}=h^2,\qquad i=1,\ldots,N-1.
$$

For $N=4$, multiply the right side by $h^2=1/16$. The system is

$$
\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}
\begin{pmatrix}U_1\\U_2\\U_3\end{pmatrix}
=\frac1{16}\begin{pmatrix}1\\1\\1\end{pmatrix}.
$$

Symmetry gives $U_1=U_3$. The first and middle rows then give $2U_1-U_2=1/16$ and $2U_2-2U_1=1/16$. Hence $U_1=U_3=3/32$ and $U_2=1/8$. These equal the exact quadratic at the nodes because the centred second difference differentiates quadratics exactly. For a general smooth right side, truncation error is not zero; stability of this Dirichlet discrete operator leads to a maximum-norm error of order $h^2$ when the solution has a bounded fourth derivative.

## Trial functions and a weak equation

A trial-function method selects a finite family and searches among its combinations. It must specify how the remaining equation error is measured. Use $U(x)=c\phi(x)$ with $\phi(x)=x(1-x)$, so both boundary conditions hold automatically.

Multiply the original equation by a test function $v$ that is zero at both ends and integrate. Integration by parts removes one derivative:

$$
\int_0^1u'v'\,dx=\int_0^1v\,dx.
$$

The endpoint term vanishes because $v(0)=v(1)=0$. A Galerkin method takes test functions from the same family as the trial correction. Choose $v=\phi$. Since $\phi'=1-2x$,

$$
c\int_0^1(1-2x)^2\,dx=\int_0^1x(1-x)\,dx,
\qquad c/3=1/6.
$$

Thus $c=1/2$ and the exact solution belongs to this one-dimensional trial space. In other problems the approximation is only as rich as the chosen family. A collocation method instead requires the differential equation at selected points; it is a different way to choose coefficients. Piecewise polynomial Galerkin spaces lead to finite elements, introduced in [[Partial differential equation algorithms]].

## Shooting

Treat the missing initial slope as a parameter $s$. Solve the initial value system

$$
u'=v,\quad v'=-1,\quad u(0)=0,\quad v(0)=s.
$$

The endpoint miss is $F(s)=u(1;s)-0$. Here $u(x;s)=sx-x^2/2$, so $F(s)=s-1/2$. Trial slopes $s=0$ and $s=1$ produce misses $-1/2$ and $1/2$. One secant step gives $s=1/2$. In a problem without an exact IVP solution, use an [[Initial value algorithms|initial value algorithm]] and a [[Scalar root finding|root solver]] on the miss.

Shooting separates two error sources: integration error in $u(1;s)$ and root error in the chosen $s$. Tight root tolerances cannot compensate for inaccurate IVP integration. If endpoint values are extremely sensitive to the initial slope, shooting is ill-conditioned; multiple shooting or a direct boundary discretization can be preferable. Nonlinear endpoint equations can have several roots, and Newton shooting can fail from a poor start.

## How to verify a computation

Check the boundary values exactly as supplied, evaluate a residual, refine the grid or trial space, and compare at shared coordinates. A small algebraic-system residual only proves that the discretized equations were solved accurately; it does not measure discretization error. Plotting alone cannot establish convergence. For the simple Dirichlet problem above, uniqueness follows directly: the difference of two solutions has zero second derivative and zero endpoint values, so it is the zero linear function.

## Practice

1. Solve $-u''=2$, $u(0)=u(1)=0$, with $N=2$ centred differences.
2. For $u''=0$, $u(0)=1$, $u(1)=3$, write the shooting miss as a function of $s=u'(0)$.

> [!example]- Worked answers
> 1. The only interior equation is $2U_1=2h^2=1/2$, since $h=1/2$. Thus $U_1=1/4$. The exact $u=x(1-x)$ gives the same midpoint.
> 2. The IVP solution is $u(x)=1+sx$. The miss is $F(s)=1+s-3=s-2$, so the correct slope is $2$ and the solution is $1+2x$.

## Further reading

[Gilbert Strang, MIT 18.085, Lecture 18 (2008; accessed 18 October 2026)](https://ocw.mit.edu/courses/18-085-computational-science-and-engineering-i-fall-2008/676ba0a00eef45a6cb3823c4da61ee11_18-085F08-L18.pdf) gives the route from boundary equations to Galerkin methods. This lesson uses a complete one-function example before the general finite-element construction.
