---
title: "Implicit equations and singular solutions"
catalogue_ids:
  - "9.1.1.3"
  - "9.1.1.4"
---

> [!TLDR]
> An implicit ODE can allow several derivative branches; its singular solutions and singular points need separate tests in the original equation.

## Do not assume that the slope is a function

Read [[07.07 Implicit and inverse differentiation]] and [[First-order solution methods]]. A first-order implicit ODE has the form $F(x,y,p)=0$, where $p=y'$. Unlike $y'=f(x,y)$, it may assign several possible slopes to the same point, or no real slope. For example, $p^2=y$ allows $p=\sqrt y$ and $p=-\sqrt y$ when $y>0$, but no real slope when $y<0$.

If $F$ has continuous first derivatives and $F_p\ne0$ at a solution point, the implicit function theorem solves the relation locally for one smooth slope branch $p=f(x,y)$. This statement is local: it does not select a global branch for the whole equation. When $F_p=0$, the test fails and the point needs direct analysis. Failure of this test alone does not prove that a solution is impossible.

For $p^2=y$, the equation $F_p=2p=0$ gives $p=0$, and the original equation then gives $y=0$. Nonzero arcs can reach this locus. Both the zero function and $y=(x-a)^2/4$ satisfy $p^2=y$. The latter has $p=(x-a)/2$, whose sign changes at $a$. A solution of the implicit equation need not stay on a single global square-root branch.

## A singular integral is an exceptional solution

Older terminology calls a solution an **integral** of an ODE. A **singular integral**, or singular solution, is a solution not obtained by choosing a constant in a stated general family, often the envelope of that family. This does not mean an infinite answer or a divergent definite integral. It also differs from a point where a coefficient is undefined.

Consider the **Clairaut equation**

$$
y=xp+p^2,\qquad p=y'.
$$

For sufficiently smooth curves, differentiate: $p=p+xp'+2pp'$, so $(x+2p)p'=0$. One possibility is $p'=0$, giving the straight-line family $y=Cx+C^2$. Another is $p=-x/2$, which gives

$$
y=-\frac{x^2}{4}.
$$

Check it directly: $y'=-x/2$, and $xy'+(y')^2=-x^2/2+x^2/4=-x^2/4=y$. It is a solution, but it is not a single straight line from the family.

The **envelope** construction eliminates $C$ between $y=Cx+C^2$ and $0=x+2C$, the derivative of this family relation with respect to $C$. It produces the same parabola. The line with parameter $C$ touches the parabola at $x=-2C$: both have the value $-C^2$ and slope $C$ there. This explains why an initial point on the envelope can lie on more than one solution curve.

Differentiating the ODE introduced $y''$ temporarily. It cannot by itself classify every merely differentiable solution. In particular, one can sometimes join a family member to the envelope at a tangency point and keep a continuously differentiable solution. Always state the regularity class and verify joined candidates in the original first-order equation.

## Parametric treatment of an implicit equation

Some equations are simpler when the slope becomes a parameter. For the same Clairaut example, the singular branch is represented by $x=-2p$, $y=-p^2$. When $dx/dp\ne0$, the chain rule gives $dy/dx=(dy/dp)/(dx/dp)=p$, as required. If a parametrization has $dx/dp=0$, this quotient is not available. The curve may have a vertical tangent or fail to be the graph of a differentiable $y(x)$ there.

More generally, for a Lagrange form $y=x\phi(p)+\psi(p)$, differentiation gives

$$
p=\phi(p)+[x\phi'(p)+\psi'(p)]\frac{dp}{dx}.
$$

Where $p-\phi(p)\ne0$ and $p$ can serve as a local parameter, this becomes a linear equation for $x(p)$:

$$
\frac{dx}{dp}-\frac{\phi'(p)}{p-\phi(p)}x
=\frac{\psi'(p)}{p-\phi(p)}.
$$

Constant slopes satisfying $p=\phi(p)$ must be checked separately because division removed them. The Clairaut case has $\phi(p)=p$ everywhere, so this divided formula does not apply to it.

## Singular points of the equation

A **singular point** can mean a point where the equation cannot be put into the regular form needed by a theorem. State the meaning in each problem. For $xy'=y$, the leading coefficient vanishes at $x=0$. Away from zero, separation gives $y=Cx$. These functions still solve the undivided equation at zero. But the data $y(0)=0$ admit every slope $C$, whereas $y(0)=1$ admit no solution because the original equation would read $0=1$.

Thus a singular point need not destroy all solutions, and a smooth solution can pass through it. Dividing by $x$ and then claiming a uniqueness theorem at zero would be invalid. Three different issues must stay separate: a singular coefficient, a failed slope-branch test, and a singular solution outside a selected family.

## Practice

1. Find the straight-line family and singular solution of $y=xy'-(y')^2$.
2. For $xy'=2y$, test $y=Cx^2$ at zero. What happens with initial data $y(0)=1$?

## Worked answers

1. Put $p=y'$ and differentiate to get $(x-2p)p'=0$. Constant $p=C$ gives $y=Cx-C^2$. The other branch has $p=x/2$ and $y=x^2/4$. Its derivative is $x/2$, and $x(x/2)-(x/2)^2=x^2/4$, so it is a genuine singular solution.
2. The derivative is $2Cx$, so $xy'=2Cx^2=2y$ even at zero. Every $C$ satisfies $y(0)=0$. Data $y(0)=1$ give $0=2$ in the original equation, so no differentiable solution exists.
