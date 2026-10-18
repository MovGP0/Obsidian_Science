---
title: "First-order initial value problems"
catalogue_ids:
  - "9.1.1"
  - "9.1.1.1"
---

> [!TLDR]
> An initial value selects a solution curve from a direction field; continuity gives local existence, while a local Lipschitz condition gives uniqueness.

## The unknown curve and its slope

Read [[07.03 The derivative]] and [[08.03 The fundamental theorem]] first. A first-order explicit ODE has the form

$$
y'=f(x,y),\qquad y(x_0)=y_0.
$$

The function $f$ is given. The unknown function $y$ must be continuously differentiable on an interval containing $x_0$, pass through $(x_0,y_0)$, and satisfy the equation at every point of that interval. This is an **initial-value problem**. A point where a formula is undefined cannot lie inside its solution interval.

A **direction field** puts a short line segment of slope $f(x,y)$ at each sampled point $(x,y)$. A solution graph must have the indicated slope wherever it passes. For $y'=x-y$, the slope is zero on $y=x$, positive below this line, and negative above it. At $(0,1)$ the slope is $-1$; at $(1,0)$ it is $1$. The field is a guide to local behavior, not a collection of exact solutions joined together.

## Existence is different from uniqueness

The local existence theorem says: if $f$ is continuous on an open neighborhood of $(x_0,y_0)$, then at least one local solution exists. It does not by itself say there is only one. A standard stronger theorem adds a **local Lipschitz condition in $y$**: on a small surrounding rectangle there is a finite $L$ with

$$
|f(x,v)-f(x,w)|\le L|v-w|.
$$

Then a unique local solution exists. A continuous partial derivative $f_y$ on a surrounding rectangle is a convenient sufficient test, since the mean value theorem bounds the change in $f$ by a bound for $|f_y|$. The condition concerns changes in the dependent output, not just changes in $x$.

The theorem does not promise a solution for all real $x$. For $y'=y^2$, $y(0)=1$, the formula $y=1/(1-x)$ solves the problem only on the maximal interval $(-\infty,1)$ containing zero. The output grows without bound as $x$ approaches $1$ from below. The formula on $(1,\infty)$ is a different branch, not an extension through the pole.

For a continuity-without-uniqueness example, use $y'=2\sqrt{|y|}$, $y(0)=0$. For any $a\ge0$, set $y=0$ for $x\le a$ and $y=(x-a)^2$ for $x>a$. The derivatives on both sides tend to zero at $a$, so the joined function is differentiable and solves the equation. The zero solution also works. The right side is continuous, but its square-root change near zero cannot satisfy a finite local Lipschitz bound.

## Integral form and successive approximation

Integrate the differential equation from $x_0$ to $x$:

$$
y(x)=y_0+\int_{x_0}^{x}f(s,y(s))\,ds.
$$

Conversely, the fundamental theorem shows that a continuous function satisfying this identity solves the ODE when $f$ is continuous. This form motivates **Picard iteration**. Start from $y_0(x)=y_0$ and define

$$
y_{n+1}(x)=y_0+\int_{x_0}^{x}f(s,y_n(s))\,ds.
$$

For $y'=y$, $y(0)=1$, the first functions are $1$, $1+x$, $1+x+x^2/2$, and $1+x+x^2/2+x^3/6$. Their pattern is the exponential series. Under the local Lipschitz assumptions the iteration converges on a sufficiently small interval. The integral step allows one candidate to improve the next; it is not permission to assume arbitrary iterations always converge.

## Worked example: an affine direction field

Solve $y'=x-y$ with $y(0)=1$. Rewriting as $y'+y=x$ suggests a particular solution of the form $ax+b$. Substitution gives $a+ax+b=x$. Thus $a=1$ and $b=-1$. The homogeneous equation $h'+h=0$ has $h=Ce^{-x}$. Add the two pieces:

$$
y=x-1+Ce^{-x}.
$$

The initial value gives $1=-1+C$, so $C=2$. Directly, $y'=1-2e^{-x}$ and $x-y=1-2e^{-x}$. The formula and the data agree. The right side has $f_y=-1$ everywhere, and the formula has no finite singularity. It is the unique solution on all of $\mathbb R$.

## What the picture cannot prove

A finite direction-field sample can miss behavior between sampled points. Two curves can appear to cross because of drawing resolution, although uniqueness forbids distinct solution graphs from meeting where its hypotheses hold. At points where the equation is not defined, or where the Lipschitz test fails, that argument is unavailable. Failure of a sufficient test alone is not proof of nonuniqueness; the branching example above establishes it by constructing different solutions.

## Practice

1. Find the zero-slope line and the slope at $(2,1)$ for $y'=2x-y$. Apply the uniqueness test near that point.
2. Solve $y'=y^2$, $y(0)=2$, and explain why local uniqueness does not imply global existence.

## Worked answers

1. Zero slope means $2x-y=0$, so the line is $y=2x$. At $(2,1)$ the slope is $4-1=3$. The right side and its partial derivative $f_y=-1$ are continuous everywhere, so a unique local solution passes through the point.
2. Separation gives $-1/y=x+C$, with $C=-1/2$. Thus $y=2/(1-2x)$. The maximal interval containing zero is $(-\infty,1/2)$. The local uniqueness hypotheses hold at $(0,2)$, but the solution becomes unbounded at a finite input.

## Further reading

The elementary existence and uniqueness framework is developed in Jiří Lebl’s [Notes on Diffy Qs](https://www.jirka.org/diffyqs/html/).
