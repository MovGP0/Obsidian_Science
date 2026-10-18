---
title: "First-order solution methods"
catalogue_ids:
  - "9.1.1.2"
---

> [!TLDR]
> Separation, integrating factors, exact differentials, and substitutions solve different first-order equation forms; each transformation needs a domain check.

## Choose a method from the equation

Start with [[First-order initial value problems]], [[08.04 Substitution]], and [[08.05 Integration by parts]]. There is no elementary formula for every first-order equation. First inspect its form, retain solutions that division could remove, and work on an interval where all coefficients are defined. After transformation, substitute the result into the original equation.

## Separate the variables

An equation $y'=a(x)b(y)$ is **separable**. Where $b(y)\ne0$, the chain rule justifies

$$
\int\frac{dy}{b(y)}=\int a(x)\,dx+C.
$$

Before dividing, solve $b(c)=0$: every such constant $y=c$ is an equilibrium solution. For $y'=y(1-y)$, the equilibria are $0$ and $1$. Away from them,

$$
\frac1{y(1-y)}=\frac1y+\frac1{1-y},\qquad
\log\left|\frac y{1-y}\right|=x+C.
$$

Exponentiation, with the sign included in a real parameter $A$, gives $y=Ae^x/(1+Ae^x)$. For $y(0)=1/3$, $A=1/2$ and $y=e^x/(2+e^x)$, defined for every real $x$. Other initial values can give a denominator that vanishes; the answer then needs a smaller interval. The equilibrium $y=1$ is not represented by a finite $A$ and must remain on the solution list.

## Linear equations and integrating factors

A normalized linear equation is $y'+p(x)y=q(x)$, with continuous $p,q$ on an interval. Select

$$
\mu(x)=\exp\left(\int p(x)\,dx\right).
$$

It is nonzero and satisfies $\mu'=p\mu$. The product rule gives $(\mu y)'=\mu q$, so

$$
y=\frac{1}{\mu}\left(C+\int\mu q\,dx\right).
$$

The arbitrary scale of $\mu$ does not change the solution family. For $y'+2y=e^x$, take $\mu=e^{2x}$. Then $(e^{2x}y)'=e^{3x}$, so $y=e^x/3+Ce^{-2x}$. If $y(0)=0$, $C=-1/3$. Differentiate to verify $y'+2y=e^x$. If the original leading coefficient vanishes, do not divide through it and apply this formula across that point without separate analysis.

## Exact equations

Write an equation as $M(x,y)\,dx+N(x,y)\,dy=0$. It is **exact** when there is a potential function $F$ with $F_x=M$ and $F_y=N$. Along a differentiable graph, the chain rule then gives $dF/dx=M+Ny'=0$. Solutions lie on the level curves $F=C$ wherever these curves define valid graphs.

For continuously differentiable $M,N$ on a simply connected open region, the equality $M_y=N_x$ guarantees such a potential. The topological condition matters; on a region with a hole, a closed differential need not have a single-valued global potential. Locally on a rectangle the test is sufficient.

For $(2xy+1)\,dx+x^2\,dy=0$, both cross derivatives equal $2x$. Integrate $F_x=2xy+1$ with respect to $x$, holding $y$ fixed: $F=x^2y+x+g(y)$. Comparing $F_y=x^2+g'(y)$ with $N=x^2$ gives $g'=0$. Thus $x^2y+x=C$. For $x\ne0$, $y=(C-x)/x^2$. At $x=0$ the original graph equation is $1=0$, so no differentiable solution graph can pass through that input.

An integrating factor can sometimes make a nonexact equation exact. If $(M_y-N_x)/N$ depends only on $x$ where $N\ne0$, solving $\mu'/\mu=(M_y-N_x)/N$ gives a factor $\mu(x)$. This is a useful special test, not a guarantee that such a factor exists in this simple form.

## Substitution methods

A **Bernoulli equation** is $y'+p y=q y^n$ for $n\ne0,1$. On a branch where the real power and division are valid, set $v=y^{1-n}$. Since $v'=(1-n)y^{-n}y'$, the new equation is linear:

$$
v'+(1-n)p v=(1-n)q.
$$

For $y'+y=y^2$, use $v=1/y$ on nonzero branches. Then $v'-v=-1$, so $v=1+Ce^x$ and $y=1/(1+Ce^x)$. The lost solution $y=0$ must be added. Exclude every zero of the new denominator.

A different substitution handles $y'=F(y/x)$ on $x\ne0$. Set $y=xv$, so $y'=v+xv'$. This gives $xv'=F(v)-v$, often separable. For $y'=1+y/x$, one obtains $xv'=1$, hence $y=x(\log|x|+C)$. Use a connected interval in either $x>0$ or $x<0$. The word “homogeneous” here means a ratio-based equation; it differs from a linear equation with zero right side.

## Riccati equations with a known solution

A Riccati equation has the form $y'=a(x)y^2+b(x)y+c(x)$. It does not have a general elementary solution method. However, if one particular solution $y_p$ is already known, set $y=y_p+1/v$ on a branch where $v\ne0$. Subtract the equation for $y_p$ and multiply by $v^2$ to obtain

$$
v'+(2a y_p+b)v=-a.
$$

This is linear in $v$. For $y'=y^2-1$, the known solution $y_p=1$ gives $v'+2v=-1$, hence $v=Ce^{-2x}-1/2$. Therefore $y=1+1/(Ce^{-2x}-1/2)$ where the denominator is nonzero. The value $C=0$ gives the other constant solution $y=-1$, while $y=1$ remains a separate solution because the substitution never reaches it. A zero of $v$ creates a pole in $y$, so the transformed linear solution cannot automatically be used on its full interval.

## Practice

1. Solve $y'=2xy$, $y(0)=3$, without losing the zero solution from the general discussion.
2. Solve $y'+y=x$ with $y(0)=2$ by an integrating factor.

## Worked answers

1. For $y\ne0$, integration gives $\log|y|=x^2+C$. Thus $y=Ae^{x^2}$, and the initial value gives $A=3$. The formula is valid on all real $x$. The separate equilibrium $y=0$ is included by $A=0$ in the final expression.
2. Multiply by $e^x$: $(e^xy)'=xe^x$. Integration by parts gives $\int xe^x dx=e^x(x-1)$, so $y=x-1+Ce^{-x}$. At zero, $2=-1+C$, hence $y=x-1+3e^{-x}$.
