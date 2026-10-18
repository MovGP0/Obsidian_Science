---
title: "Laplace and Poisson boundary problems"
catalogue_ids:
  - "13.5"
  - "13.5.1"
  - "13.5.2"
---

> [!TLDR]
> Laplace and Poisson equations determine a scalar field only when combined with suitable boundary data and a stated source convention.

## Differential equations of field theory

Read [[Nabla identities and curvilinear coordinates]], [[Integral theorems and boundary identities]], [[08.03 The fundamental theorem]], and [[15.03 Initial and boundary data]]. A partial differential equation relates a function's partial derivatives. This lesson works with real scalar functions on ordinary Euclidean regions. It uses the positive-sum Laplacian $\Delta u=u_{xx}+u_{yy}+u_{zz}$. Our sign convention for Poisson's equation is

$$
-\Delta u=s.
$$

Some sources write $\Delta u=f$ instead; then $f=-s$. The convention determines the Green-function sign. Laplace's equation is $\Delta u=0$ and a $C^2$ solution is called **harmonic**. These are equations for spatial dependence. An initial value alone is not the natural data for this static problem.

## Begin in one dimension

On $0<x<L$, the Laplace equation is $u''=0$. Integrate twice: $u(x)=A+Bx$. Boundary values $u(0)=a$ and $u(L)=b$ select $u=a+(b-a)x/L$. Without both constraints, two constants remain. For constant source $s$, Poisson becomes $-u''=s$, so $u=-sx^2/2+Bx+A$. This elementary case explains why an equation alone is insufficient and why a source changes the curvature.

In more dimensions, boundary values at every boundary point replace the two endpoint values. A **Dirichlet condition** prescribes $u$ on the boundary. A **Neumann condition** prescribes its outward normal derivative $\partial_nu$. Mixed problems prescribe one type on one portion and another type on another portion. Boundary geometry is part of the problem.

## Harmonic functions and uniqueness

The polynomial $u=x^2-y^2$ is harmonic because $u_{xx}=2$, $u_{yy}=-2$, and $u_{zz}=0$. Its separate second derivatives are not zero. Harmonic does not mean constant or linear. On a ball entirely inside the domain, a harmonic function's central value equals its average over the surrounding sphere. This mean-value property implies the maximum principle: a nonconstant harmonic function cannot attain its maximum in the interior of a connected domain.

For bounded smooth domains, two classical solutions with the same Dirichlet data and same source must agree. To see this, subtract them: $w=u_1-u_2$ satisfies $\Delta w=0$ and $w=0$ on the boundary. Green's first identity gives $\int\|\nabla w\|^2=0$, forcing $w=0$. This proves uniqueness when solutions exist; it does not by itself prove existence for arbitrary rough domains or boundary data. [Stanford's Laplace notes, §§3.1–3.3](https://web.stanford.edu/class/math220b/handouts/laplace.pdf) develop the fundamental solution and harmonic-function properties.

For Neumann data $\partial_nu=g$, integrate the PDE and apply Gauss:

$$
-\iint_{\partial V}g\,dS=\iiint_Vs\,dV.
$$

This compatibility condition is necessary. A solution, when it exists on a connected domain, is determined only up to an added constant. For Laplace with outward derivative $g=1$ on the whole boundary of a bounded solid, compatibility fails: the surface integral is positive while the source integral is zero.

## Worked example: a constant source in a ball

Solve $-\Delta u=s_0$ in the radius-$a$ ball, with $u=0$ on its boundary, and constant $s_0$. Symmetry suggests $u=u(r)$. The radial Laplacian gives

$$
-(r^2u')'=s_0r^2.
$$

Integrate: $r^2u'=-s_0r^3/3+C$. Regularity at the center excludes $C/r^2$ in $u'$, so $C=0$. Integrate again to get $u=-s_0r^2/6+D$. The boundary value yields $D=s_0a^2/6$. Therefore

$$
u(r)=\frac{s_0}{6}(a^2-r^2).
$$

Check: $\Delta(r^2)=6$, so $-\Delta u=s_0$, and $u(a)=0$. The outward derivative is $g=u'(a)=-s_0a/3$. Its surface integral is $-4\pi s_0a^3/3$, the negative of the total source, as required. For positive $s_0$, the interior value is positive, consistent with the chosen minus-Laplacian convention.

## Fundamental solution and Green functions

In three dimensions, $\Gamma(\mathbf x)=1/(4\pi\|\mathbf x\|)$ satisfies $\Delta\Gamma=0$ away from zero. Its radial outward derivative on radius $\epsilon$ is $-1/(4\pi\epsilon^2)$, with integral $-1$. Thus the generalized equation is $-\Delta\Gamma=\delta_0$, not $\Delta\Gamma=\delta_0$. For smooth compactly supported source $s$ in all of space, a solution decaying at infinity is

$$
u(\mathbf x)=\iiint_{\mathbb R^3}\Gamma(\mathbf x-\mathbf y)s(\mathbf y)\,dV_{\mathbf y}.
$$

The kernel is singular but locally integrable. The delta equation is understood through integration against smooth test functions, not by differentiating at the undefined origin. In two dimensions the corresponding kernel is $-(1/(2\pi))\log r$, so the three-dimensional $1/r$ formula must not be reused unchanged.

A **Dirichlet Green function** $G(\mathbf x,\mathbf y)$ for a bounded domain satisfies $-\Delta_{\mathbf y}G=\delta_{\mathbf x}$ and $G=0$ on the boundary in the source variable. Green's second identity then gives

$$
u(\mathbf x)=\iiint_VG(\mathbf x,\mathbf y)s(\mathbf y)dV_{\mathbf y}
-\iint_{\partial V}u(\mathbf y)\partial_{n_{\mathbf y}}G(\mathbf x,\mathbf y)dS_{\mathbf y}.
$$

The normal points outward from $V$. [Skinner's Green-function notes, §10.3.3](https://www.damtp.cam.ac.uk/user/dbs26/1BMethods/GreensPDE.pdf) derive the boundary representation using the opposite sign for the Green kernel; the formula here uses $-\Delta G=\delta$. This formula separates the contribution of the source from that of boundary values. Constructing $G$ for a general shape is a further problem, not supplied by the free-space kernel alone. One can instead add a harmonic correction to the free-space solution to match the boundary.

## Practice and worked answers

1. Solve $-u''=2$ on $0<x<1$ with $u(0)=u(1)=0$. **Answer:** integration gives $u=-x^2+Bx+A$. The endpoint data give $A=0$, $B=1$, so $u=x(1-x)$.
2. Find all radial harmonic functions in a three-dimensional spherical shell $a<r<b$. Which stay bounded if the inner radius is allowed to tend to zero? **Answer:** $(r^2u')'=0$ gives $u'=C/r^2$ and $u=A+B/r$. Boundedness near zero requires $B=0$.
