---
title: "Iteration and invariant sets"
catalogue_ids:
  - "17.1"
  - "17.1.1"
  - "17.1.1.1"
  - "17.1.1.2"
  - "17.1.3"
  - "17.1.3.1"
---

> [!TLDR]
> Iteration applies one map repeatedly; invariant sets retain orbits and limit sets describe their long-term accumulation.

## States and orbits

A **state space** $X$ contains all allowed states. A **map** $f:X\to X$ gives the next state. With an initial state $x_0$, define

$$
x_{n+1}=f(x_n),\qquad x_n=f^n(x_0),\qquad n=0,1,2,\ldots.
$$

The superscript $n$ means repeated composition, not an ordinary power: $f^2(x)=f(f(x))$. Set $f^0(x)=x$. The sequence is a forward **orbit**. The identity $f^{m+n}=f^m\circ f^n$ says that advancing $n$ steps and then $m$ steps is the same as advancing $m+n$ steps.

Specify $X$ before calculating. The formula $f(x)=1/x$ is not a map from all of $\mathbb R$ to itself because zero is forbidden. On $X=\mathbb R\setminus\{0\}$ it is a valid map and has $f^2(x)=x$. See [[03.07 Composition and inverse functions]] for the domain check.

## Discrete evolution

Discrete means that the index advances in whole steps. It does not mean that the states are whole numbers. For example, $x_{n+1}=x_n/2$ acts on the continuous state space $[0,1]$. Conversely, a finite state space forces eventual repetition: once an orbit visits a previous state, determinism makes the subsequent sequence repeat. An infinite state space need not do so.

A map need not have an inverse. Under $f(x)=x^2$ on $\mathbb R$, both $2$ and $-2$ give $4$. A future can be unique while its possible pasts are not. We use negative iterates only when an inverse exists.

## Maps and continuous rules

A continuous-time system uses maps $\phi_t$ with $\phi_0$ the identity and $\phi_{t+s}=\phi_t\circ\phi_s$. A differential equation such as $x'=-x$ produces $\phi_t(x)=e^{-t}x$. Taking one fixed increment $T>0$ gives the discrete map $f=\phi_T$. The reverse operation, finding a differential equation for an arbitrary map, is not always possible. For instance, invertible smooth flow maps cannot merge two distinct trajectories at a regular finite time.

[[Flows and linear stability]] gives conditions for a differential equation to produce a local flow. Both forms share the orbit idea, but one must not use a discrete stability test for a differential equation.

## Invariant sets

A set $A\subseteq X$ is **forward invariant** if $f(A)\subseteq A$. Every orbit started there stays there. It is **strictly invariant** if $f(A)=A$. We use these explicit terms because different books use “invariant” for different choices.

For $f(x)=x/2$, the interval $[0,1]$ is forward invariant, but $f([0,1])=[0,1/2]$, so equality fails. The set $\{0\}$ is strictly invariant. For $g(x)=1-x$, the set $\{1/4,3/4\}$ is strictly invariant because the two points exchange places.

A **basin of attraction** is the set of initial states whose forward orbits approach a specified attracting set. “Approach a set” means that the distance to that set tends to zero; it does not require the orbit to approach one point of the set. A periodic attractor is a basic example of this distinction.

## Fixed points, periods, and limit sets

A fixed point solves $f(p)=p$. A point has **least period** $k$ if $f^k(p)=p$ and no smaller positive integer has this property. Every fixed point solves $f^k(p)=p$, so remove lower periods when finding a genuine $k$-cycle.

The **omega-limit set** $\omega(x_0)$ contains all limits of subsequences $f^{n_j}(x_0)$ with $n_j\to\infty$. It records accumulation after arbitrarily many steps. For a continuous map on a compact state space, the set is nonempty and compact. Compact means, in this setting, that sequences cannot escape without a convergent subsequence. On an unbounded state space an orbit can escape and have an empty omega-limit set.

## Worked example: a contraction and a cycle

Take $f(x)=(x+2)/3$ on $[0,1]$. Solving $p=(p+2)/3$ gives $p=1$. Subtract this equation from the iteration:

$$
x_{n+1}-1=\frac{x_n-1}{3},\qquad
x_n=1+\frac{x_0-1}{3^n}.
$$

Since $3^{-n}\to0$, every allowed state approaches one. Thus $\omega(x_0)=\{1\}$ and the entire interval is its basin within $X$. The interval is forward invariant since $f([0,1])=[2/3,1]$.

For comparison, $g(x)=1-x$ has $g^2(x)=x$. Its only fixed point is $1/2$. Every other point in $[0,1]$ belongs to a two-cycle and its omega-limit set is $\{x_0,1-x_0\}$. Repeated composition settled both problems exactly, without a long numerical run.

## Practice

1. For $f(x)=x^2$ on $[0,1]$, find all fixed points and the omega-limit set for $0<x_0<1$.
2. For $f(x)=x+1$ on $\mathbb R$, find $f^n(x_0)$ and its omega-limit set in $\mathbb R$.

## Worked answers

1. The equation $p^2=p$ gives $p=0$ or $1$. Induction gives $x_n=x_0^{2^n}$. For $0<x_0<1$, this tends to zero, so the limit set is $\{0\}$. At the endpoint $x_0=1$, it is instead $\{1\}$.
2. Each iteration adds one, so $f^n(x_0)=x_0+n$. Every subsequence with indices tending to infinity also tends to positive infinity. There is no finite accumulation point, so the omega-limit set in $\mathbb R$ is empty.
