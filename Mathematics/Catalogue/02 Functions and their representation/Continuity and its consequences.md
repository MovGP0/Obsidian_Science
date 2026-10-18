---
title: "Continuity and its consequences"
catalogue_ids:
  - "2.1.5"
  - "2.1.5.1"
  - "2.1.5.2"
  - "2.1.5.3"
  - "2.1.5.4"
  - "2.1.5.5"
---

> [!TLDR]
> Continuity connects nearby outputs to the assigned point value; on a closed interval it also guarantees intermediate values and attained extrema.

## A local definition

Use [[Finite limits and convergence tests]] first. A function $f:D\to\mathbb R$ is continuous at $a\in D$ when, for every $\varepsilon>0$, some $\delta>0$ gives

$$
x\in D,\quad |x-a|<\delta
\quad\Longrightarrow\quad |f(x)-f(a)|<\varepsilon.
$$

Here the point value $f(a)$ must exist. At an accumulation point of $D$, the condition says $\lim_{x\to a}f(x)=f(a)$ through the domain. At an isolated domain point the condition holds automatically: choose a neighbourhood with no other domain inputs. At an included endpoint of an interval, continuity uses the available one-sided approach.

“Draw without lifting a pencil” can help with a first graph, but it does not define continuity on a domain with gaps or isolated points. The tolerance condition is the definition. Continuity on a set means continuity at every point in that set, relative to the domain in use.

## Classify a failure

At an interior point, a **removable discontinuity** has a finite common nearby limit but a missing or wrong assigned value. For example, $(x^2-1)/(x-1)$ has limit two at one. On its original domain, one is excluded, so one can extend the function there by assigning two. If a piecewise function assigns seven at one instead, it is discontinuous at a domain point and changing that value repairs it.

A **jump discontinuity** has two finite unequal one-sided limits. The sign function has limits $-1$ and $1$ at zero. No choice of its value at zero repairs that gap. An **infinite discontinuity** has an unbounded side, as $1/x^2$ does at zero. An **oscillatory discontinuity** can remain bounded, as $\sin(1/x)$ does near zero. [[Finite limits and convergence tests]] gives two sequences that prove this last limit fails. Terminology varies: some sources call infinite and oscillatory failures discontinuities of the second kind.

A hole in the graph is not a discontinuity at an input of the original function if that input is outside its domain. It is still useful to call the omitted location a removable singularity. State the domain before using the shorter informal phrase.

## Elementary functions on their domains

Polynomials are continuous on $\mathbb R$. Rational functions are continuous wherever their denominators are nonzero. A real square root is continuous on $[0,\infty)$, including its endpoint. Exponentials are continuous on $\mathbb R$, and real logarithms are continuous on $(0,\infty)$. Sine and cosine are continuous on $\mathbb R$; tangent is continuous on each interval between its excluded poles.

Sums and products of continuous functions remain continuous. A quotient is continuous where its denominator is nonzero. A composition is continuous where the inner output lies in the outer domain. These rules explain why $\sqrt{x+1}/(x-3)$ is continuous on $[-1,3)\cup(3,\infty)$. They do not create a value at three.

## Theorems that need an interval

The **intermediate value theorem** states that a continuous real function on $[a,b]$ takes every value between $f(a)$ and $f(b)$. In particular, opposite nonzero signs at the endpoints guarantee a zero in $(a,b)$. This gives existence, not uniqueness.

The **extreme value theorem** states that a continuous real function on a closed bounded interval $[a,b]$ attains a finite minimum and maximum. It is therefore bounded there. Neither an open interval nor continuity alone is enough: $1/x$ on $(0,1)$ is continuous but unbounded. Even a bounded example, $f(x)=x$ on $(0,1)$, attains neither endpoint bound. On $\mathbb R$, $x^2$ is continuous but has no maximum.

Continuity does not require smoothness. The function $|x|$ is continuous at zero but has a corner there. A derivative, introduced in [[07.03 The derivative]], is a stronger local property.

## Worked example: a unique zero without solving a cubic

Consider $p(x)=x^3+x-2$. It is continuous. Since $p(0)=-2$ and $p(2)=8$, the intermediate value theorem gives a zero between zero and two. To prove uniqueness, take $v>u$ and calculate

$$
p(v)-p(u)=(v-u)(v^2+uv+u^2+1)>0.
$$

The first factor is positive, while the second equals $(v+u/2)^2+3u^2/4+1$ and is strictly positive. Thus $p$ is strictly increasing and has at most one zero. Checking $p(1)=0$ identifies it. The sign change supplied existence; increasing behaviour supplied uniqueness; direct substitution identified the root. These are three different steps.

## Practice

1. Set $f(x)=(x^2-4)/(x-2)$ for $x\ne2$ and $f(2)=k$. Find $k$ for continuity.
2. Does the intermediate value theorem force $1/x$ to have a zero between $-1$ and $1$ because its endpoint values have opposite signs?

## Worked answers

1. For $x\ne2$, factor and cancel to get $x+2$. The nearby limit at two is four, so continuity requires and is obtained by $k=4$.
2. No. The formula is undefined at zero and is not continuous on the whole closed interval. In fact $1/x$ is never zero. Endpoint signs alone do not replace the continuity hypothesis.
