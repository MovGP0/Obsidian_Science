---
title: "Kernels and classification"
catalogue_ids:
  - "11.1"
---

> [!TLDR]
> A kernel specifies how each input value contributes to an integral; integration limits and the location of the unknown classify the equation.

## Functions as unknowns

For a function $u$, the notation $u(t)$ means its value at input $t$. The equation $u(x)=x^2$ gives a rule for all inputs. An **integral equation** instead specifies a relation that contains an integral of the unknown function. The goal is still to find a rule for all its values.

The prerequisites are [[08.01 Definite integrals]] and elementary algebra. In this lesson, $a<b$ are fixed real bounds and all functions are continuous unless stated otherwise. A **kernel** is a known function $K(x,t)$ of two variables. The input $t$ is integrated; the output variable $x$ remains free:

$$
(Tu)(x)=\int_a^b K(x,t)u(t)\,dt.
$$

The symbol $T$ names the operation on functions. Such an operation is an **operator**. The letter inside the integral is a dummy variable: changing $t$ to $s$ throughout that integral changes nothing. Changing $x$ usually changes the output.

For $K(x,t)=xt$ on $[0,1]$, the function $u(t)=1$ gives $(Tu)(x)=x/2$. The function $u(t)=t$ gives $x/3$. A kernel acts like a table of matrix entries: for each output $x$, it selects weights for all input values $u(t)$.

## Linearity and kinds

Integration satisfies $T(\alpha u+\beta v)=\alpha Tu+\beta Tv$ for constants $\alpha,\beta$. This is **linearity**. Squaring $u(t)$ inside the integral would generally destroy it. The prescribed data $f(x)$ need not be a linear function of $x$; “linear equation” refers to dependence on the unknown.

The basic **first-kind equation** is

$$
Tu=f.
$$

The basic **second-kind equation** is

$$
u-\lambda Tu=f,
$$

where $\lambda$ is a specified number called a parameter. Here the unknown also appears outside the integral with coefficient $1$. A more general expression $a(x)u(x)-\lambda Tu=f$ is sometimes called third-kind when $a$ vanishes at points; division by $a(x)$ at those points is not allowed.

An equation is **homogeneous** when its prescribed right-hand side $f$ is zero. This does not mean its kernel is zero. A homogeneous equation always has the zero function as a solution, but the important question is whether other solutions exist.

## Fredholm and Volterra limits

A **Fredholm equation** uses fixed integration bounds, such as $a$ and $b$. A **Volterra equation** has a variable limit, usually

$$
u(x)-\lambda\int_a^xK(x,t)u(t)\,dt=f(x).
$$

The Volterra integral at $x$ uses only inputs at or below $x$. A Fredholm integral generally uses the whole interval. Figure C.11.1 compares their integration regions. A vertical slice through either region gives the permitted inputs $t$ for one fixed output $x$.

![[catalogue-ch11-regions.svg|**Fig. C.11.1** Fixed limits use the full square; a variable upper limit uses the triangle below t = x.]]

Limits and kind are separate choices: there are first- and second-kind equations of both types. An unbounded kernel, an infinite interval, or a specially defined integral makes the problem **singular**. The weak singularity $1/\sqrt{x-t}$ is integrable near $t=x$; $1/(t-x)$ generally needs a principal-value convention. Their unboundedness alone does not tell us how to integrate them.

## Worked example: classification and solution

Consider $u(x)-2\int_0^1xtu(t)\,dt=1$. It is linear, inhomogeneous, Fredholm, and second-kind, with $K(x,t)=xt$ and $\lambda=2$. Define $c=\int_0^1tu(t)\,dt$. Then $u(x)=1+2cx$. Multiply by $x$ and integrate:

$$
c=\int_0^1x\,dx+2c\int_0^1x^2\,dx
=\frac12+\frac{2c}{3}.
$$

Thus $c=3/2$ and $u(x)=1+3x$. Check: $\int_0^1t(1+3t)\,dt=3/2$, so the left-hand side is $1+3x-3x=1$. Notice that the integral of $u$ alone would be the wrong auxiliary number: the kernel contains the weight $t$.

Replacing $2$ by $3$ gives $c=1/2+c$, which is impossible. The same smooth kernel can therefore produce either a unique answer or no answer, depending on the parameter and right-hand side. Smoothness is not a substitute for an existence check.

## Practice

1. Classify $\int_0^x u(t)\,dt=x^2$ and find its continuous solution.
2. Classify $u(x)=\int_0^1u(t)^2\,dt$. Is it linear? Find its constant solutions.

## Worked answers

1. It is an inhomogeneous Volterra equation of the first kind. The fundamental theorem gives $u(x)=2x$. Substitution gives $\int_0^x2t\,dt=x^2$, including the required value zero at $x=0$.
2. It has fixed limits but is nonlinear because $u$ is squared. Its right-hand side is independent of $x$, so any solution is a constant $c$. Then $c=c^2$, giving $c=0$ or $c=1$. A definition of linear Fredholm theory cannot be applied to this equation.
