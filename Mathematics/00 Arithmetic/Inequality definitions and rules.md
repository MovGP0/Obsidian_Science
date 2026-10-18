---
title: "Inequality definitions and rules"
catalogue_ids:
  - "1.4"
  - "1.4.1"
  - "1.4.1.1"
  - "1.4.1.2"
---

> [!TLDR]
> Inequalities compare real numbers; operations preserve their meaning only when their sign and domain conditions are respected.

## Definitions

An **inequality** compares two real expressions. The statement $a<b$ means that $a$ is less than $b$. On a number line, $a$ is to the left of $b$. The statements $a>b$ and $b<a$ say the same thing. The comparisons $<$ and $>$ are **strict**: they exclude equality. The comparisons $\le$ and $\ge$ include equality and are **non-strict**. The symbol $\ne$ only excludes equality; it does not specify an order.

A **domain** gives the allowed inputs. For example, $1/x$ requires $x\ne0$. An inequality can hold for every input in its domain, for some inputs, or for none. For instance, $x^2\ge0$ holds for every real $x$, $x>2$ restricts the inputs, and $x^2<0$ has no real solution. A **pure inequality** is studied as an order relation or a bound, without requiring a particular unknown to be found. The same expression can also become a problem about a solution set.

An **identical inequality** holds for every allowed input. Two inequalities are **equivalent** on a stated domain if exactly the same inputs satisfy both. A step that gives a weaker statement can be useful in a proof, but it does not necessarily give an equivalent problem. For example, $x=2$ implies $x^2=4$, but $x^2=4$ also allows $x=-2$.

## Source-specific type I and type II labels

The [Handbook of Mathematics, §1.4.1.1](https://djvu.online/file/GdI2fptBUdLpJ) uses **type I** for $>$ and **type II** for $<$. These labels distinguish the direction of strict comparisons. They do not mean strict and non-strict. Two inequalities have the same sense when both use $<$ or both use $>$; they have opposite senses when their signs point in opposite directions. These articles normally use the signs themselves because type labels are not universal.

## Rules and their reasons

For real $a,b,c$, if $a<b$, then $a+c<b+c$. Adding $c$ shifts both points by the same amount. Also, $a<b$ and $b<c$ imply $a<c$; this is **transitivity**. These rules hold for non-strict comparisons too.

Multiplication depends on the sign of the factor:

$$
a<b\quad\Longrightarrow\quad
\begin{cases}
ac<bc,&c>0,\\
ac>bc,&c<0.
\end{cases}
$$

The second rule reverses the order. For example, $2<5$, but $-2>-5$. Algebraically, $b-a>0$ and $c<0$ give $c(b-a)<0$, hence $bc<ac$. Division has the same sign rule and requires a nonzero divisor. Multiplication by zero gives equality and loses the original information.

You can add same-sense inequalities: $a<b$ and $c<d$ give $a+c<b+d$. You can multiply them directly when all four numbers are positive: $0<a<b$ and $0<c<d$ give $ac<bc<bd$. Without the positivity conditions this rule fails. For example, $-3<2$ and $-4<1$ do not give $12<2$.

If $0<a<b$, taking reciprocals reverses the order: $1/a>1/b$. This follows by dividing $a<b$ by the positive product $ab$. The same reversal holds for two negative nonzero numbers. It fails across zero: $-1<2$ but $-1<1/2$. Never use the reciprocal rule without checking signs.

Squaring preserves order for nonnegative inputs. It does not preserve order for arbitrary real inputs: $-5<2$, but $25>4$. Nonnegative square roots preserve order. These restrictions matter when you transform an inequality with roots or squares.

## Worked example

Suppose $-2<x<3$. Find a bound on $5-2x$.

1. Multiply all three parts by $-2$. Reverse both comparison signs: $4>-2x>-6$.
2. Put the smaller endpoint first: $-6<-2x<4$.
3. Add $5$ to all parts: $-1<5-2x<9$.

The endpoints remain excluded. At $x=0$, the expression is $5$, which lies inside the result. Bounds describe every allowed input; one test checks an example, not the entire proof.

## Practice

1. From $2\le x<7$, find bounds on $3x-4$.
2. Explain why dividing $x^2>x$ by $x$ without a sign case is invalid. Give the actual solution.

## Worked answers

1. Multiply by positive $3$ to get $6\le3x<21$. Subtract $4$ to obtain $2\le3x-4<17$.
2. At $x=0$ division is undefined; at $x<0$ it must reverse the sign. Factor instead: $x(x-1)>0$. Both factors have the same sign for $x<0$ or $x>1$. Neither endpoint is allowed. See [[02.04 Equations and inequalities]] for solution-set notation and [[Solving linear and quadratic inequalities]] for a complete sign method.
