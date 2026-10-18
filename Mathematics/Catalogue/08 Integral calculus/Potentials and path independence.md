---
title: "Potentials and path independence"
catalogue_ids:
  - "8.3.4"
  - "8.3.4.1"
  - "8.3.4.2"
  - "8.3.4.3"
  - "8.3.4.4"
  - "8.3.4.5"
---

> [!TLDR]
> A directed line integral depends only on endpoints when its coefficients are derivatives of one potential; derivative tests also require control of the domain.

## From one variable to several

Read [[Scalar and directed line integrals]] and [[12.02 Partial derivatives]]. For $\phi(x,y)$, a partial derivative $\phi_x$ changes $x$ while holding $y$ fixed. Its gradient is the vector $\nabla\phi=(\phi_x,\phi_y)$; in space include $\phi_z$. A field $\mathbf F$ has a **potential** or **primitive** if $\mathbf F=\nabla\phi$. No physical interpretation is assumed here.

Along a differentiable curve, the chain rule gives

$$
\frac{d}{dt}\phi(\mathbf r(t))=\nabla\phi(\mathbf r(t))\cdot\mathbf r'(t).
$$

Integrate from the initial point $A$ to the final point $B$ to obtain $\int_C\nabla\phi\cdot d\mathbf r=\phi(B)-\phi(A)$. Intermediate details of the path disappear because the integrand is a total derivative along it. The argument also works piecewise through corners, since the intermediate endpoint values cancel.

## Path independence and closed integrals

On an open path-connected domain, with continuous coefficients and piecewise smooth paths, the following statements are equivalent: a potential exists; any two paths with the same endpoints have equal integrals; every closed path has integral zero. To see the closed-path implication, follow one path and then the reverse of another. Their difference is a closed integral.

For the converse construction, fix a base point $A$ and define $\phi(B)$ as the integral from $A$ to $B$. Path independence makes this single-valued. Compare $\phi$ at nearby points by extending the path with a short axis-parallel segment. The one-variable fundamental theorem shows $\phi_x=P$, $\phi_y=Q$, and, in space, $\phi_z=R$. This proves existence rather than guessing a formula.

## Two-dimensional derivative test

If $P,Q$ have continuous first partial derivatives and a potential has continuous second derivatives, then equality of mixed partials gives $P_y=Q_x$. This is a necessary local test. It is sufficient on a **simply connected** open domain: roughly, every closed loop can be contracted to a point without leaving the domain. The precise implication is a theorem; a proof uses local potentials and deformation of paths. A convex domain is a useful easier case because every segment between its points remains in the domain.

Do not omit that domain condition. On the punctured plane $D=\mathbb R^2\setminus\{(0,0)\}$, let

$$
P=-\frac{y}{x^2+y^2},\qquad Q=\frac{x}{x^2+y^2}.
$$

Their cross partials agree wherever defined. Yet the unit-circle parameterization gives $Px'+Qy'=1$, so the counterclockwise closed integral is $2\pi$. Thus no global single-valued potential exists on this domain. Locally the angle is a potential, but an angle increases by $2\pi$ around the hole. [MIT's notes](https://math.mit.edu/~poonen/notes02.pdf) discuss exact fields, path independence, and the domain restriction.

## Calculate a planar primitive

For $P=2xy+3$ and $Q=x^2+2y$, the test gives $P_y=2x=Q_x$ throughout the plane. Integrate the first equation with respect to $x$, keeping the other coordinate fixed:

$$
\phi=x^2y+3x+h(y).
$$

The “constant” may depend on $y$. Differentiate with respect to $y$ and compare with $Q$: $x^2+h'(y)=x^2+2y$. Hence $h=y^2+C$. The potential is $x^2y+3x+y^2+C$. The integral from $(0,0)$ to $(1,2)$ is $2+3+4=9$ along every eligible path. As an independent check, use $(x,y)=(t,2t)$, $0\le t\le1$. The parameter integrand becomes $6t^2+8t+3$, whose integral is $2+4+3=9$.

## The three-dimensional case

For a continuously differentiable field $(P,Q,R)$, the curl-free conditions are $P_y=Q_x$, $P_z=R_x$, and $Q_z=R_y$. They express equality of all mixed second derivatives of a potential. On an open simply connected domain they suffice for a potential. On a domain with holes, inspect closed integrals or give a global potential explicitly.

For $(P,Q,R)=(yz,xz,xy+2z)$, integrate $P$ in $x$ to get $\phi=xyz+h(y,z)$. Comparing $\phi_y$ with $Q$ gives $h_y=0$, so $h=k(z)$. Comparing $\phi_z$ with $R$ gives $k'=2z$. Hence $\phi=xyz+z^2+C$. The integral from $(0,0,0)$ to $(1,2,3)$ is $6+9=15$. This example shows why a multivariable integration constant is initially a function of every variable held fixed.

## Practice

1. Find a potential for $(2x+y,x+4y)$ and integrate from $(0,0)$ to $(2,1)$.
2. Does $(P,Q)=(y,0)$ have a potential on the plane? Compare the two axis-parallel routes from $(0,0)$ to $(1,1)$.

## Worked answers

1. Integrating $P$ gives $x^2+xy+h(y)$. Comparing $Q$ gives $h'=4y$, so $\phi=x^2+xy+2y^2+C$. Endpoint subtraction gives $4+2+2=8$.
2. The necessary test fails: $P_y=1$, $Q_x=0$. Moving right then up gives integral zero. Moving up then right gives $\int_0^1 1\,dx=1$. The routes have different values, so path independence fails.
