---
title: "Mean value theorems and monotonicity"
catalogue_ids:
  - "6.1.4"
  - "6.1.4.1"
  - "6.1.4.2"
  - "6.1.4.3"
  - "6.1.4.4"
  - "6.1.4.6"
---

> [!TLDR]
> Mean value theorems connect a change across an interval to a derivative at some interior point, provided their hypotheses hold.

## From pointwise slopes to interval conclusions

A derivative is defined at a point, but many questions concern an interval. If every derivative is positive, must the graph increase? If a function returns to its starting value, must it have a horizontal tangent somewhere? These theorems answer such questions. Read [[Tangents and the derivative]] and [[Elementary derivative methods]] first.

An interval $[a,b]$ includes its endpoints, whereas $(a,b)$ excludes them. Assume $a<b$. Continuity on the closed interval and differentiability on its interior are different requirements. The endpoints do not need two-sided derivatives.

## Fermat theorem at an interior extremum

If $f$ has a local maximum or minimum at an interior point $c$ and is differentiable there, then $f'(c)=0$. For a local maximum, $f(c+h)-f(c)\le0$ for small $h$. Dividing by positive $h$ gives a nonpositive right quotient. Dividing by negative $h$ gives a nonnegative left quotient. If a common derivative exists, it must be both nonpositive and nonnegative, hence zero. Reverse the inequalities for a minimum.

This is a necessary condition, not a sufficient one. The function $x^3$ has derivative zero at zero but increases through the point. The theorem also excludes a corner such as $|x|$ at zero and an endpoint minimum such as $x$ at zero on $[0,1]$.

## Rolle theorem

Suppose $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$. Then there is $c\in(a,b)$ with $f'(c)=0$. Continuity on a closed bounded interval ensures that a maximum and minimum are attained. If $f$ is constant, every interior derivative is zero. Otherwise at least one of these extrema differs from the common endpoint value and occurs inside. Fermat's theorem applies there.

For $f(x)=x^2-3x+2$ on $[1,2]$, both endpoints have value zero. The derivative $2x-3$ vanishes at $c=3/2$, which lies inside. For $|x|$ on $[-1,1]$, equal endpoint values do not allow Rolle's conclusion because differentiability fails at zero.

## The mean value theorem

Under the same continuity and differentiability conditions, but without equal endpoint values, there is some $c\in(a,b)$ such that

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

To prove it, subtract the secant line: set $H(x)=f(x)-f(a)-m(x-a)$, where $m=[f(b)-f(a)]/(b-a)$. Then $H(a)=H(b)=0$. Rolle gives $H'(c)=f'(c)-m=0$. Thus at some interior point the tangent slope matches the average slope. The theorem asserts existence, not uniqueness or a method for locating every such point. Its hypotheses and the Rolle reduction are discussed in [UBC CLP-1, the mean value theorem](https://personal.math.ubc.ca/~CLP/CLP1/clp_1_dc/sec_mvt.html).

For a worked example, let $f(x)=x^2$ on $[1,3]$. The average slope is $(9-1)/(3-1)=4$. Solving $2c=4$ gives $c=2$. This particular $c$ is the midpoint, but a different function need not have that property.

## Conditions for monotonicity

Suppose $f$ is differentiable on an open interval. If $f'\ge0$ everywhere there, then $f$ is nondecreasing: $x_1<x_2$ implies $f(x_1)\le f(x_2)$. Apply the mean value theorem to any closed subinterval $[x_1,x_2]$ to see that $f(x_2)-f(x_1)=f'(c)(x_2-x_1)\ge0$. Differentiability supplies continuity. The stronger condition $f'>0$ implies strictly increasing. Reversed signs give decreasing conclusions.

Conversely, a differentiable nondecreasing function has $f'\ge0$, by the signs of its difference quotients. A strictly increasing function need not have $f'>0$ at every point: $x^3$ has derivative zero at zero. If $f'=0$ throughout an interval, the same theorem proves that $f$ is constant there. Conclusions apply on each interval of a disconnected domain separately.

## Cauchy generalized mean value theorem

Let $f,g$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Then for some $c$ inside,

$$
[f(b)-f(a)]g'(c)=[g(b)-g(a)]f'(c).
$$

No division is needed for this form. Form the auxiliary function $H(x)=[f(b)-f(a)](g(x)-g(a))-[g(b)-g(a)](f(x)-f(a))$, and apply Rolle. If $g'$ is nowhere zero on the interior, Rolle also implies $g(b)\ne g(a)$, and division gives the ratio of average changes equal to $f'(c)/g'(c)$. Taking $g(x)=x$ recovers the ordinary theorem. This is Cauchy's generalization, not a claim that every vector-valued curve has one common scalar mean-value point.

## Practice

1. Find a mean-value point for $f(x)=x^3$ on $[0,2]$.
2. Apply Cauchy's theorem to $f(x)=x^2$, $g(x)=x^3$ on $[1,2]$, using its ratio form.

## Worked answers

1. The secant slope is $8/2=4$. Thus $3c^2=4$ gives the interior solution $c=2/\sqrt3$. The negative root is outside the interval.
2. The ratio of changes is $(4-1)/(8-1)=3/7$. The derivative ratio is $2c/(3c^2)=2/(3c)$. Equating them gives $c=14/9$, which lies between $1$ and $2$. Here $g'=3x^2$ is nowhere zero, so the divisions are justified.
