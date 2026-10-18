---
title: "Function order bounds and symmetry"
catalogue_ids:
  - "2.1.3"
  - "2.1.3.1"
  - "2.1.3.2"
  - "2.1.3.3"
  - "2.1.3.4"
  - "2.1.3.5"
  - "2.1.3.6"
  - "2.1.3.7"
---

> [!TLDR]
> Order, bounds, extrema, symmetry, and periodicity describe different features of a function and must be checked on a stated domain.

## Compare two inputs

Start with [[Function inputs outputs and representations]]. A real function is **nondecreasing** on an interval if $u<v$ implies $f(u)\le f(v)$. It is **strictly increasing** if the final inequality is strict. Nonincreasing and strictly decreasing reverse the output inequality. “Monotonic” permits either one consistent increasing direction or one consistent decreasing direction. Check the convention when a source says only “increasing”.

For $f(x)=x^2$, inputs $-3<-1$ give $9>1$, while $1<3$ gives $1<9$. Thus $f$ is not monotonic on all of $\mathbb R$. It is decreasing on $(-\infty,0]$ and increasing on $[0,\infty)$. A property of a formula can change when its domain changes.

For a direct test, factor the difference. If $f(x)=x^3$, then for $v>u$,

$$
f(v)-f(u)=(v-u)(v^2+uv+u^2)>0.
$$

The second factor is positive for distinct $u,v$, because it equals $(v+u/2)^2+3u^2/4$ and cannot be zero unless $u=v=0$. No derivative is needed.

## Bounds and attained extremes

An upper bound is a number $M$ such that $f(x)\le M$ for every input. A lower bound $m$ satisfies $m\le f(x)$. A bounded function has both, equivalently $|f(x)|\le C$ for some finite $C$. A maximum is an upper bound that is attained: $f(a)=M$ for an allowed input $a$. A minimum is defined in the same way with a lower bound.

For $f(x)=x$ on $(0,1)$, zero and one are bounds, but neither is an attained extreme. Its supremum is $1$, the least upper bound, and its infimum is $0$, the greatest lower bound. On $[0,1]$, the same formula attains both. A local maximum compares $f(a)$ only with values in a sufficiently small domain neighbourhood; a global maximum compares it with every value in the domain. The largest output is a number; an input where it occurs is a location.

## Even and odd parts

Suppose the domain is symmetric: $x$ is allowed exactly when $-x$ is allowed. An even function satisfies $f(-x)=f(x)$ and has mirror symmetry across the vertical axis. An odd function satisfies $f(-x)=-f(x)$ and has symmetry under a half-turn about the origin. Examples are $x^2$ and $x^3$. If an odd function is defined at zero, then $f(0)=-f(0)$, so $f(0)=0$.

Every real-valued function on a symmetric domain has a unique decomposition

$$
f(x)=f_e(x)+f_o(x),\qquad
f_e(x)=\frac{f(x)+f(-x)}2,\qquad
f_o(x)=\frac{f(x)-f(-x)}2.
$$

Substituting $-x$ verifies the parity of both parts. Adding the formulas gives $f$ back. Uniqueness follows because these same sum and difference equations recover the two parts from any proposed decomposition. A function need not be even or odd itself to have these parts.

## Periodicity and domain

A period $T>0$ satisfies $f(x+T)=f(x)$ for all inputs, with the domain also unchanged by this translation. Sine has fundamental period $2\pi$; tangent has fundamental period $\pi$ on its domain with its poles removed. The fundamental period is the smallest positive period when one exists. A constant function has every positive period and therefore no smallest positive period. A bounded function need not be periodic: $x/(1+|x|)$ remains between $-1$ and $1$ but never repeats in this way.

## Combine properties carefully

An even function cannot be strictly increasing on a nontrivial symmetric interval: opposite inputs would have equal outputs. An odd bounded function can exist, such as sine. Adding a nonzero constant to an odd function generally destroys oddness, while it preserves evenness of an even function. These statements follow directly by substituting $-x$; visual appearance is a useful check, but substitution proves the property.

## Worked example: several properties together

For $p(x)=x^2+3x+2$ on $[-2,2]$, compute

$$
p(-x)=x^2-3x+2,\qquad p_e(x)=x^2+2,\qquad p_o(x)=3x.
$$

Complete the square: $p(x)=(x+3/2)^2-1/4$. The minimum $-1/4$ occurs at $x=-3/2$, which belongs to the domain. At the endpoints, $p(-2)=0$ and $p(2)=12$. Since the square is largest at the endpoint farthest from $-3/2$, the maximum is $12$. Hence $-1/4\le p(x)\le12$. This function is not increasing over the whole interval: it decreases to the minimum and then increases. Neither a bound nor a symmetry test alone determines monotonicity.

## Practice

1. Split $f(x)=x^4-2x^3+5$ into even and odd parts on $\mathbb R$.
2. Find bounds and attained extremes of $g(x)=1/(1+x^2)$ on $\mathbb R$. Decide whether it is increasing everywhere.

## Worked answers

1. Substitution gives $f(-x)=x^4+2x^3+5$. Therefore $f_e=x^4+5$ and $f_o=-2x^3$. Their sum recovers $f$.
2. Since $1+x^2\ge1$, the range lies in $(0,1]$. The maximum $1$ is attained at zero. Values approach zero as $|x|$ grows but never equal zero, so there is no minimum and the infimum is zero. The function increases toward zero from negative inputs and decreases after zero, so it is not increasing on all of $\mathbb R$.
