---
title: "Metric spaces and convergence"
catalogue_ids:
  - "12.2"
  - "12.2.1"
  - "12.2.1.1"
  - "12.2.1.2"
  - "12.2.1.3"
  - "12.2.1.4"
  - "12.2.3"
---

> [!TLDR]
> A metric measures distance, which defines open sets, sequence limits, closure, density, and continuity without requiring coordinates.

## Distance without coordinates

Read [[09.01 Sequences]] for the limit of a real sequence. On the real line, distance is $|x-y|$. On the plane, the usual distance is $\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}$. A **metric** on a set $X$ is a real-valued rule $d(x,y)$ satisfying, for all $x,y,z\in X$:

$$
d(x,y)\ge0,\qquad d(x,y)=0\iff x=y,\qquad
d(x,y)=d(y,x),\qquad d(x,z)\le d(x,y)+d(y,z).
$$

The last condition is the triangle inequality. A set with a chosen metric is a **metric space**. The points can be functions or strings as well as numbers. The discrete metric, equal to $0$ for identical points and $1$ otherwise, works on any set: a route between distinct points always has total distance at least $1$.

Squared Euclidean distance is not a metric. On the line, the proposed rule $d(x,y)=(x-y)^2$ gives $d(0,2)=4$ but $d(0,1)+d(1,2)=2$, violating the triangle inequality. Nonnegative and symmetric are necessary but insufficient conditions.

## Balls, neighborhoods, and open sets

An open ball of radius $r>0$ around $x$ is $B(x,r)=\{y:d(x,y)<r\}$. It excludes its boundary. A set $U$ is **open** when each $x\in U$ has some ball $B(x,r)\subseteq U$. A **neighborhood** of $x$ is any set that contains an open ball around $x$; the neighborhood need not itself be open.

On the real line, $B(2,1)=(1,3)$. The interval $(0,1)$ is open, since for any point $x$ inside it one can choose $r$ smaller than both $x$ and $1-x$. The interval $[0,1]$ is not open in $\mathbb R$: no positive-radius ball around zero stays in it.

Openness is relative to the ambient space. In $X=[0,1]$ with the inherited distance, $B_X(0,1/2)=[0,1/2)$ is open in $X$. Balls use points in $X$ only. Changing the ambient set can therefore change whether a subset is open.

## Sequence limits

A sequence $(x_n)$ converges to $x$ when for every $\varepsilon>0$ there is $N$ such that $n\ge N$ implies $d(x_n,x)<\varepsilon$. The quantifiers have the same order as on the real line. Limits are unique: if $x_n$ approached both $a$ and $b$, the triangle inequality would give $d(a,b)\le d(a,x_n)+d(x_n,b)$, and the right side could be made arbitrarily small. Hence $d(a,b)=0$, so $a=b$.

For the discrete metric, convergence to $x$ means that all sufficiently late terms equal $x$. Choose $\varepsilon=1/2$ to see why. Thus the same list of numerical values can converge under one metric and fail under another.

## Closed sets and closure

A set $F$ is **closed** if its complement is open. In metric spaces this is equivalent to containing the limit of every convergent sequence of its own points, whenever the limit belongs to $X$. The closure $\overline A$ consists of all points whose every open ball meets $A$. It is the smallest closed set containing $A$.

On the line, the closure of $(0,1)$ is $[0,1]$. Each endpoint is approached by points in the interval. The closure does not include $2$, since a sufficiently small ball around $2$ misses the interval. “Closed” does not mean bounded: $\mathbb R$ is closed in itself and is unbounded. A set can be both open and closed, as $X$ and the empty set always are.

## Dense and separable spaces

A subset $D$ is **dense** in $X$ when $\overline D=X$. Equivalently, every nonempty open ball meets $D$. The rationals $\mathbb Q$ are dense in $\mathbb R$: decimal truncations give rational approximations with arbitrarily small error. A metric space is **separable** if it contains a countable dense subset. Countable means finite or listable by natural-number indices. Thus $\mathbb R$ and $\mathbb R^n$ are separable; rational coordinate vectors suffice in the latter case.

A dense set need not contain its limits and need not be complete. In particular, density of $\mathbb Q$ does not make every real number rational. An uncountable discrete metric space is not separable, since density requires every singleton ball to meet the dense set, forcing that set to equal the whole space.

## Continuous operators

A map $T:X\to Y$ between metric spaces is **continuous at $x$** when for every output tolerance $\varepsilon>0$ there is an input tolerance $\delta>0$ such that

$$
d_X(x,y)<\delta\quad\Longrightarrow\quad d_Y(Tx,Ty)<\varepsilon.
$$

It is continuous if this holds at every point. In metric spaces this is equivalent to preserving convergent sequences: $x_n\to x$ implies $Tx_n\to Tx$. If continuity failed, for each $n$ one could select a point within $1/n$ of $x$ whose output stayed at least some fixed $\varepsilon$ away. This sequence would contradict that implication. The word “operator” often means a map between function spaces; it does not imply linearity.

## Worked example and practice

For $T(x)=x^2$, fix $x$ and require $|y-x|<1$. Then $|y|\le|x|+1$, and

$$
|T(y)-T(x)|=|y-x|\,|y+x|\le(2|x|+1)|y-x|.
$$

Choosing $\delta=\min(1,\varepsilon/(2|x|+1))$ proves continuity. The permitted input tolerance depends on $x$; continuity does not require one global tolerance.

1. Find the closure of $\{1/n:n\ge1\}$ in $\mathbb R$.
2. Is every function from a discrete metric space into another metric space continuous?

## Worked answers

1. Add zero to the listed set, since $1/n\to0$. There are no other new points: away from zero, only finitely many terms occur in any fixed bounded interval separated from zero, and a sufficiently small ball avoids those terms unless its center is one of them.
2. Yes. At any point choose $\delta=1/2$. The only input at distance less than $\delta$ is that same point, so the output distance is zero for every requested $\varepsilon$.
