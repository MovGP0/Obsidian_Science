---
title: "Radical and real-power graphs"
catalogue_ids:
  - "2.5"
  - "2.5.1"
  - "2.5.2"
  - "2.5.3"
---

> [!TLDR]
> A real root graph needs an explicit branch and radicand domain; real powers require separate rules for positive, zero, and negative inputs.

## Square root of a linear expression

The real square root $\sqrt u$ means the unique nonnegative number whose square is $u\ge0$. Thus $y=\sqrt{ax+b}$ requires $ax+b\ge0$ and gives $y\ge0$. For $a>0$, the domain is $[-b/a,\infty)$ and the graph increases from its endpoint. For $a<0$, the domain is $(-\infty,-b/a]$ and the graph decreases toward its endpoint as $x$ increases. If $a=0$, the rule is constant for $b\ge0$ and has no real inputs for $b<0$.

For example, $\sqrt{2x-6}=\sqrt2\sqrt{x-3}$ starts at $(3,0)$. Its value at $x=5$ is two. Reversing the relation gives $x=(y^2+6)/2$ with $y\ge0$, so the graph is one branch of a sideways parabola. The other branch is the negative square root and belongs to a different function. [[Function composition and inversion]] explains why a branch must be chosen before speaking of an inverse.

## Square root of a quadratic

For $f(x)=\sqrt{ax^2+bx+c}$, solve the quadratic inequality $ax^2+bx+c\ge0$ first. The graph is the upper part of the implicit conic $y^2=ax^2+bx+c$. Squaring a rule without retaining $y\ge0$ would add the lower branch.

When $a>0$ and there are two distinct real roots $r_1<r_2$, the allowed inputs lie outside the gap: $x\le r_1$ or $x\ge r_2$. When $a<0$, they lie between the roots. With a repeated root and $a>0$, the rule simplifies to $\sqrt a\,|x-r|$, not $\sqrt a(x-r)$. With no real roots, the sign of $a$ decides whether every real input or none is allowed.

For $f(x)=\sqrt{9-x^2}$, the domain is $[-3,3]$ and the graph is the upper semicircle of radius three. Its range is $[0,3]$. For $g(x)=\sqrt{x^2-9}$, the domain is $(-\infty,-3]\cup[3,\infty)$, giving two upper conic branches. Although both have even rules, their domains and shapes differ.

## General real powers

For positive $x$ and any real exponent $p$, define $x^p=e^{p\ln x}$. This gives a positive value and a continuous rule on $(0,\infty)$. It is increasing for $p>0$, constant for $p=0$, and decreasing for $p<0$. This definition deliberately uses positive inputs.

Some exponents extend to nonpositive inputs. A positive integer power is defined everywhere. A negative integer power excludes zero. If $p=m/n$ is a reduced fraction with positive odd $n$, define $x^{m/n}=(\sqrt[n]{x})^m$ for negative inputs too. With even $n$, require $x\ge0$ for $m>0$ and $x>0$ for $m<0$. Reduction of the fraction matters: $2/6=1/3$ has an odd reduced denominator. For irrational $p$, the usual real exponential-log definition gives no values for negative inputs.

For $p>0$, zero can be added continuously by $0^p=0$. For $p<0$, zero is excluded. The expression $0^0$ needs a separate context and is not assigned by the positive-input logarithm definition. Usual exponent identities are safe for positive bases; with negative bases and noninteger exponents, test definitions before using them. See [[Roots and principal values]].

## Equality after squaring is a weaker test

To solve $\sqrt{x+2}=x$, the right side must be nonnegative, so require $x\ge0$ before squaring. The squared equation $x+2=x^2$ factors as $(x-2)(x+1)=0$. It suggests two candidates, but minus one violates the nonnegative-output requirement. Direct substitution retains only two. A root equation includes both a polynomial relation and a branch condition. Losing the branch condition turns a safe forward implication into a false equivalence.

## Worked example: derive a radical range

Let $f(x)=\sqrt{x^2-4x+3}$. Factor the radicand as $(x-1)(x-3)$. The sign is nonnegative outside the two roots, so the domain is $(-\infty,1]\cup[3,\infty)$. Complete the square:

$$
f(x)=\sqrt{(x-2)^2-1}.
$$

This shows symmetry about $x=2$. The function is nonnegative, attains zero at one and three, and becomes arbitrarily large on either outer branch. Every $y\ge0$ occurs: solve $(x-2)^2=y^2+1$ to get $x=2\pm\sqrt{y^2+1}$, both in the domain. Thus the range is $[0,\infty)$. This last step proves that no nonnegative outputs are missing.

## Practice

1. Find the natural domain and range of $p(x)=\sqrt{4-2x}$.
2. Calculate $(-8)^{2/3}$ and explain why the same real-root method does not define $(-8)^{1/2}$.

## Worked answers

1. The inequality $4-2x\ge0$ gives $x\le2$. The endpoint gives zero, and the radicand grows without bound toward the left. For any $y\ge0$, $x=2-y^2/2$ is allowed and gives output $y$, so the range is $[0,\infty)$.
2. Take the real cube root first: $\sqrt[3]{-8}=-2$. Squaring gives four. A real square cannot be negative, so there is no real square root of minus eight. Complex square roots use a different setting.
