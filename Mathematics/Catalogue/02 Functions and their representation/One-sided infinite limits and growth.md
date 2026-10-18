---
title: "One-sided infinite limits and growth"
catalogue_ids:
  - "2.1.4.4"
  - "2.1.4.5"
  - "2.1.4.6"
  - "2.1.4.9"
---

> [!TLDR]
> One-sided and infinite limits state where inputs approach and how outputs behave; growth symbols compare functions without assigning infinity as a value.

## Distinguish the direction and the result

In $\lim_{x\to a^+}f(x)=L$, inputs approach $a$ through domain values larger than $a$. In $x\to a^-$, they are smaller. Replace the punctured absolute-value condition in [[Finite limits and convergence tests]] by $0<x-a<\delta$ or $0<a-x<\delta$. If the domain approaches from both sides, a finite two-sided limit exists precisely when the two one-sided limits exist and agree. Their average has no role.

At a domain endpoint, only available inputs count. Thus $\sqrt x\to0$ as $x\to0$ through its real domain; this is a right-side approach. We do not demand imaginary values on the other side. A domain can also contain gaps, so “all sufficiently close inputs” always means all sufficiently close **domain** inputs.

## Infinite output near a finite input

The statement $f(x)\to+\infty$ as $x\to a$ means that for each $M>0$ there is $\delta>0$ such that every eligible punctured input gives $f(x)>M$. For $-\infty$, require $f(x)<-M$. These statements describe unbounded behaviour. Infinity is not a real value $f(a)$.

For $1/(x-a)^2$, choose $\delta=1/\sqrt M$. Then $0<|x-a|<\delta$ gives $1/(x-a)^2>M$, on both sides. For $1/(x-a)$, the right limit is $+\infty$ and the left limit is $-\infty$; there is no common signed infinite limit. The vertical line $x=a$ is a vertical asymptote when at least one side has such an infinite limit.

## Input tending to infinity

Assume $D$ is unbounded above. The definition of $\lim_{x\to+\infty}f(x)=L$ is: for every $\varepsilon>0$, there is $R$ such that $x\in D$ and $x>R$ imply $|f(x)-L|<\varepsilon$. For $x\to-\infty$, use $x<-R$ after taking $R>0$. Both input and output can be unbounded, but their conditions must remain separate.

For example, $1/x\to0$ at $+\infty$: choose $R>1/\varepsilon$. Also $x^2\to+\infty$ at both infinite ends, while $x^3$ has different signed behaviour at the two ends. A horizontal asymptote $y=L$ is defined by a finite output limit at an infinite input end. A curve can cross this line; an asymptote does not mean a forbidden intersection.

## Landau symbols and order of growth

Fix the approach, such as $x\to+\infty$, and suppose $g(x)\ne0$ eventually. We write $f=O(g)$ when $|f(x)|\le C|g(x)|$ eventually for some constant $C$. We write $f=o(g)$ when $f(x)/g(x)\to0$. We write $f\sim g$ when $f(x)/g(x)\to1$. The symbol $\Theta(g)$ means both an upper and lower positive multiple bound for $|f|$ eventually. These are comparisons near a stated limit, not identities at every input.

For $x\to+\infty$, $3x^2+2x=\Theta(x^2)$ and $O(x^3)$, but it is not $o(x^2)$ and not asymptotic to $x^2$. It is asymptotic to $3x^2$, since dividing by $3x^2$ leaves $1+2/(3x)\to1$. Near zero, $x^2=o(x)$ instead. The approach changes the comparison.

An important hierarchy as $x\to+\infty$ is $\ln x=o(x^p)$ and $x^p=o(e^{cx})$ for fixed $p,c>0$. Exponential growth eventually exceeds every fixed positive power; this does not specify where it first exceeds it. These comparisons can be proved from the exponential series and logarithm inversion; they are not valid if an exponent or coefficient varies with $x$ without further analysis.

## Exclude indeterminate arithmetic

The symbols $+\infty$ and $-\infty$ cannot be handled as ordinary real numbers in subtraction. A form described as “infinity minus infinity” can have many outcomes: $(x+1)-x\to1$, $2x-x\to+\infty$, and $x-(x+\sqrt x)\to-\infty$ as $x\to+\infty$. Rewrite the actual expressions before applying limit rules. Their separate divergent terms do not determine the limit of their difference.

## Worked example: leading terms and a pole

Let $r(x)=(2x^2+3)/(x^2-1)$. The denominator excludes $\pm1$. At either infinite end, divide numerator and denominator by $x^2$:

$$
r(x)=\frac{2+3/x^2}{1-1/x^2}\longrightarrow2.
$$

In fact $r(x)-2=5/(x^2-1)\sim5/x^2$, so the error is $O(x^{-2})$. Near $x=1$, factor the denominator as $(x-1)(x+1)$. The numerator and $x+1$ are positive nearby. Therefore the right limit is $+\infty$ and the left limit is $-\infty$. The horizontal asymptote and the vertical asymptote describe different limits of the same function.

## Practice

1. Find the two one-sided limits of $|x-2|/(x-2)$ at $2$.
2. At $+\infty$, decide whether $7x+4$ is $O(x)$, $o(x)$, and asymptotic to $7x$.

## Worked answers

1. For $x>2$ the quotient is one; for $x<2$ it is minus one. Thus the right limit is one and the left limit minus one. The two-sided limit fails.
2. For $x\ge1$, $|7x+4|\le11x$, proving $O(x)$. The ratio to $x$ tends to seven, not zero, so it is not $o(x)$. The ratio to $7x$ is $1+4/(7x)$ and tends to one, proving the asymptotic equivalence.
