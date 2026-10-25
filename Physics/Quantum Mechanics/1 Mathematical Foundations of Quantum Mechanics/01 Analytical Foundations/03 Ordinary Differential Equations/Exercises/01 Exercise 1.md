---
title: "Separable initial-value equations"
---

> [!TLDR]
> Separation gives three initial-value solutions; one diverges at a finite value of the independent variable.

Chapter 3 — Ordinary Differential Equations · Exercise 1 · Basic level

[[03 Ordinary Differential Equations/08 Exercises|Chapter 3 exercise index]]

## Question

Solve by separation of variables and apply the initial conditions.

**(a)** $y'=-3y$, $y(0)=5$.

**(b)** $y'=y^2$, $y(0)=1$. Caution: the solution diverges in finite time.

**(c)** $y'=x/y$, $y(0)=1$.

## Worked solution

### (a) Exponential decay

Separation puts each variable on its own side. Since the initial value is nonzero, divide by $y$ near the initial point:

$$
\frac{\mathrm{d}y}{y}=-3\,\mathrm{d}x,
\qquad \ln|y|=-3x+C.
$$

Exponentiation gives $y=A\mathrm{e}^{-3x}$. The signed constant $A$ includes both possible signs of $y$. Use $y(0)=5$ to get $A=5$. This solution exists for every real $x$. Substitution gives $y'=-15\mathrm{e}^{-3x}=-3y$.

### (b) Finite-time divergence

The initial value is nonzero, so separation gives

$$
\frac{\mathrm{d}y}{y^2}=\mathrm{d}x,
\qquad -\frac1y=x+C.
$$

At $x=0$, $y=1$, so $C=-1$. Thus

$$
y=\frac1{1-x},\qquad y'=\frac1{(1-x)^2}=y^2.
$$

The maximal interval containing the initial point is $(-\infty,1)$. As $x\to1^-$, $y\to+\infty$. The expression also defines a separate solution for $x>1$, but that branch cannot continue the initial-value solution across the singularity. Separation also omits the equilibrium $y=0$; it does not satisfy the given initial condition.

### (c) Branch selected by the initial condition

The differential equation is defined only for $y\ne0$. Multiply by $y$ and integrate:

$$
y\,\mathrm{d}y=x\,\mathrm{d}x,
\qquad \frac{y^2}{2}=\frac{x^2}{2}+C.
$$

The condition $y(0)=1$ gives $C=1/2$. Therefore $y^2=x^2+1$. Since $y$ starts positive and cannot pass through zero, choose

$$
y=\sqrt{1+x^2}.
$$

It exists for every real $x$, and $y'=x/\sqrt{1+x^2}=x/y$.

> [!note]
> The question uses $x$ in part (c) and leaves the independent variable implicit in parts (a) and (b). This solution uses $x$ throughout. The source key uses $t$ in parts (a) and (b); a change of variable name gives the same result.

## Answer

**(a)** $y=5\mathrm{e}^{-3x}$ for $x\in\mathbb R$.

**(b)** $y=(1-x)^{-1}$ on the maximal interval $x<1$; it diverges at $x=1$.

**(c)** $y=\sqrt{1+x^2}$ for $x\in\mathbb R$.
