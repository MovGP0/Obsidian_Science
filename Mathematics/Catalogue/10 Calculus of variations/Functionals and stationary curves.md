---
title: "Functionals and stationary curves"
catalogue_ids:
  - "10.3"
  - "10.3.1"
  - "10.3.2"
---

> [!TLDR]
> Change a candidate curve by a small test function, differentiate its functional, and use integration by parts to obtain the Euler–Lagrange equation.

## One unknown function and its allowed changes

Read [[10 Calculus of variations/_Overview]] for the meaning of a functional and the prerequisite route. We now consider

$$
J[y]=\int_a^bF(x,y,y')\,dx,
\qquad y(a)=A,\quad y(b)=B.
$$

The interval $[a,b]$ and the two values $A,B$ are fixed. Assume $F(x,z,p)$ has continuous second partial derivatives in an open neighborhood of the curves under consideration. We seek a twice continuously differentiable candidate $y$. These assumptions allow the classical differentiations below. They do not cover every useful nonsmooth minimizer.

A **test function** $\eta$ is a smooth change of shape, with $\eta(a)=\eta(b)=0$. The family $y_\varepsilon=y+\varepsilon\eta$ keeps the endpoints fixed for every small positive or negative real $\varepsilon$. The variation is a change of the function while the coordinate $x$ stays fixed. The unknown function is allowed infinitely many directions of change: testing just a few polynomial curves cannot prove stationarity against all possible shapes.

![[catalogue-ch10-admissible-curves.svg|**Fig. C.ch10.1** Several admissible curves share the same endpoints. A variation changes their interior shape.]]

The shared endpoints in Fig. C.ch10.1 explain why the test function must vanish there. They do not require its slope to vanish there.

## First variation and the differential equation

For one fixed direction $\eta$, define the ordinary real function $j(\varepsilon)=J[y+\varepsilon\eta]$. The **first variation** is $\delta J[y;\eta]=j'(0)$. Use $F_z$ and $F_p$ for derivatives with respect to the second and third slots of $F$. Differentiation under the integral, followed by the chain rule, gives

$$
\delta J[y;\eta]
=\int_a^b(F_z\eta+F_p\eta')\,dx.
$$

Every derivative of $F$ in this expression is evaluated at $(x,y(x),y'(x))$. Integration by parts transfers the derivative from $\eta$:

$$
\delta J[y;\eta]
=[F_p\eta]_a^b+
\int_a^b\left(F_z-\frac{d}{dx}F_p\right)\eta\,dx.
$$

The bracket vanishes for the fixed endpoints. At a smooth local minimum or maximum, $j'(0)=0$ for every allowed two-sided direction. The remaining integral therefore vanishes for all such $\eta$.

Why does that force its coefficient to vanish? If a continuous coefficient were positive at an interior point, it would stay positive on a small interval around that point. Choose a nonnegative smooth test function supported in that interval, positive somewhere inside it. Its integral against the coefficient would be positive, a contradiction. The same argument excludes negative values. This is the fundamental lemma of calculus of variations.

We obtain the **Euler–Lagrange equation**,

$$
\boxed{F_z-\frac{d}{dx}F_p=0.}
$$

A classical solution is called an **extremal**. Despite the name, it need not be a minimum or maximum. It is a stationary candidate. The derivative $d/dx$ includes all dependence along the curve. For example, if $F_p=xy+2y'$, then $dF_p/dx=y+xy'+2y''$. It is not just the partial derivative of the displayed $x$.

## Worked example: a nonzero source term

Minimize

$$
J[y]=\int_0^1\left(\frac12y'^2+2y\right)dx,
\qquad y(0)=y(1)=0.
$$

Here $F_z=2$, $F_p=y'$, so the equation is $2-y''=0$. Integrate twice: $y=x^2+cx+d$. The first endpoint gives $d=0$ and the second gives $c=-1$. Thus $y_*=x^2-x$.

The candidate has $y_*'=2x-1$ and $J[y_*]=-1/6$. Check its status, rather than assuming it. For $h(0)=h(1)=0$,

$$
J[y_*+h]-J[y_*]
=\int_0^1(y_*'h'+2h)dx+\frac12\int_0^1h'^2dx.
$$

The linear integral equals $[y_*'h]_0^1+\int_0^1(2-y_*'')h\,dx=0$. The remaining square integral is nonnegative and is zero only when $h=0$. This proves a unique global minimum for the stated class. It also checks the sign of the Euler–Lagrange equation independently.

## Two useful shortcuts

If $F$ does not depend on $z$, the equation reduces to $dF_p/dx=0$. Hence $F_p$ is constant along the candidate. If $F$ does not explicitly depend on $x$, the **Beltrami identity** is

$$
F-y'F_p=C.
$$

To verify it, differentiate its left side. The chain rule gives

$$
\frac{d}{dx}(F-y'F_p)
=F_x+y'\left(F_z-\frac{dF_p}{dx}\right).
$$

Both terms vanish under the stated assumptions. These shortcuts reduce the order of the equation; they do not prove that the candidate is optimal. They also fail if the omitted dependence is actually present.

## Practice

1. Find and classify the stationary curve for $\int_0^2y'^2\,dx$ with $y(0)=1$, $y(2)=5$.
2. For $F=z^2+p^2$, derive the equation and solve it with $y(0)=0$, $y(1)=1$.

### Worked answers

1. $F_z=0$, $F_p=2y'$, so $y''=0$. The endpoints give $y=1+2x$. For every zero-endpoint $h$, expansion gives the difference $\int_0^2h'^2\,dx\geq0$. It is the unique global minimum, with value $8$.
2. The equation is $2y-2y''=0$, or $y''=y$. Write $y=ce^x+de^{-x}$. The initial condition gives $d=-c$, and the final one gives $c=1/(e-e^{-1})$. Thus $y=(e^x-e^{-x})/(e-e^{-1})$. Expansion around this curve leaves $\int_0^1(h'^2+h^2)dx$, so it is the unique minimum.

## Further reading

[UCL, MATH0043 lecture notes](https://www.homepages.ucl.ac.uk/~ucahmto/latex_html/latexml.html) give the classical equation and its fundamental-lemma argument. The derivation and examples above can be checked directly with differentiation and integration by parts.
