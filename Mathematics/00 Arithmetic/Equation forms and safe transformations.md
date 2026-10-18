---
title: "Equation forms and safe transformations"
catalogue_ids:
  - "1.6"
  - "1.6.1"
  - "1.6.1.1"
  - "1.6.1.2"
  - "1.6.1.3"
---

> [!TLDR]
> State the allowed inputs, transform the equation with care, and check each candidate in every original condition.

## Algebraic and transcendental equations

An **equation** states that two expressions have the same value. An **unknown** is a value to find. A **solution** makes the equation true and keeps every expression defined. The **solution set** contains all solutions in the stated domain. Unless stated otherwise, this lesson seeks real solutions.

An algebraic equation uses a finite number of additions, subtractions, multiplications, divisions, and root operations on the unknowns. For example, $x^2-3x=4$, $1/(x-2)=3$, and $\sqrt{x+1}=x-1$ are algebraic. A **polynomial equation** is the important special case with only nonnegative integer powers of each unknown. Its coefficients are fixed numbers. Exponential, logarithmic, and trigonometric functions of the unknown lead to **transcendental equations**, such as $2^x=5$ and $\sin x=x/2$.

This distinction concerns the expressions, not the kind of solution. An algebraic equation can have an irrational solution, and a transcendental equation can have the integer solution zero. See [[Exponential and logarithmic equations]] for methods that sometimes convert transcendental equations into polynomial ones.

## Normal form and domain

To put a polynomial equation into **normal form**, expand products, collect equal powers, move all terms to one side, and arrange powers in descending order:

$$
a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0=0,\qquad a_n\ne0.
$$

The highest exponent $n$ is its **degree**. The numbers $a_j$ are its coefficients; $a_n$ is the leading coefficient. Dividing by the nonzero constant $a_n$ gives a **monic** polynomial, whose leading coefficient is one. There is no single normal-form convention for every algebraic equation. Here it means this polynomial form together with any restrictions inherited from the original equation.

For example, $2x(x+1)=x^2+5$ becomes $x^2+2x-5=0$. Both expressions are defined for all real $x$. By contrast, an equation with denominator $x-2$ requires $x\ne2$, and $\sqrt{x+1}$ requires $x\ge-1$. Write those restrictions before clearing denominators or roots. The zero polynomial $0=0$ has every allowed input as a solution; its degree is not zero. A nonzero constant equation, such as $5=0$, has no solution.

## Equivalent steps and extraneous roots

Two equations are **equivalent** on a domain when they have the same solution set there. The symbol $\iff$ means implication in both directions. Addition of the same defined expression and multiplication by a nonzero constant are reversible steps. Dividing by an expression that can be zero can lose solutions: dividing $x(x-3)=0$ by $x$ loses $x=0$.

Squaring gives a one-way implication: $A=B$ implies $A^2=B^2$, but equal squares also allow $A=-B$. An **extraneous root** satisfies a transformed equation but fails the original one. Multiplication by an expression that can be zero can also add candidates. Keep the original domain throughout the calculation.

![[arithmetic-equations-safe-transformations.svg|**Fig. A.equations.1** Reversible steps keep the solution set. Squaring can add a candidate, so the original equation supplies the final check.]]

The lower path in Fig. A.equations.1 shows why a correct polynomial calculation can still produce a false answer to the original problem.

## Worked example: remove a square root

Solve $\sqrt{x+1}=x-1$.

1. The square root requires $x\ge-1$. Its value is nonnegative, so equality also requires $x-1\ge0$. Thus any solution has $x\ge1$.
2. Square both sides: $x+1=(x-1)^2=x^2-2x+1$.
3. Collect terms: $x^2-3x=x(x-3)=0$. The polynomial candidates are $0$ and $3$.
4. Reject $0$: it violates $x\ge1$, and the original equation would read $1=-1$.
5. Check $3$: $\sqrt4=2=3-1$. The solution set is $\{3\}$.

## Systems of n algebraic equations

A **system** requires several equations to hold at once. A solution of $n$ equations in $m$ unknowns is an ordered list $(x_1,\ldots,x_m)$ that satisfies every equation. Equal numbers of equations and unknowns do not guarantee a unique solution. Repeated conditions can leave infinitely many solutions, contradictory conditions give none, and nonlinear equations can give several.

For a small nonlinear example, solve $x+y=3$ and $xy=2$. Substitute $y=3-x$ into the second equation. Then $x(3-x)=2$, so $x^2-3x+2=0$. The roots are $1$ and $2$. Recover $y$ separately for each: the solutions are $(1,2)$ and $(2,1)$.

For larger linear systems, eliminate one unknown at a time, retain the remaining conditions, and work backwards to recover all unknowns. Never keep only the sum of two equations and discard both originals: their sum generally contains less information. [[02.05 Simultaneous equations]] gives a complete three-unknown elimination example and explains contradictions and free parameters.

## Practice

1. Solve $(x^2-1)/(x-1)=3$ with its original domain.
2. Solve $x+y=4$ and $x^2+y^2=10$.

## Worked answers

1. Require $x\ne1$. Multiplying by $x-1$ gives $x^2-1=3x-3$, or $(x-1)(x-2)=0$. Reject the candidate $1$, where the original quotient is undefined. At $2$, $(4-1)/(2-1)=3$. Thus $x=2$.
2. Substitute $y=4-x$. Then $x^2+(4-x)^2=10$, so $2x^2-8x+6=0$. Divide by two and factor: $(x-1)(x-3)=0$. Recover $y$ to get $(1,3)$ and $(3,1)$. Each pair has sum $4$ and squared sum $10$.
