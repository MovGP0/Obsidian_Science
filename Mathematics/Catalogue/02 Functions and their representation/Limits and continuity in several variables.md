---
title: "Limits and continuity in several variables"
catalogue_ids:
  - "2.18.3"
  - "2.18.3.1"
  - "2.18.3.2"
  - "2.18.3.3"
  - "2.18.3.4"
  - "2.18.4"
---

> [!TLDR]
> A multivariable limit must work for every nearby allowed input; testing only coordinate axes cannot establish it.

## Approach a point from all directions

Start with [[Multivariable functions and domains]]. A point in the plane can approach another point along a line, a curve, or a more complicated sequence. A function has a limit only when its output approaches the same number for all sufficiently nearby allowed inputs. A few matching paths are evidence to investigate, not a proof.

No differential calculus is needed. We use distance, inequalities, and the idea that a positive error can be made as small as desired. The [OpenStax lesson on limits and continuity](https://openstax.org/books/calculus-volume-3/pages/4-2-limits-and-continuity) gives the standard definition and path test. The examples and estimates below develop these ideas directly.

## The meaning of a limit

We write $\lim_{(x,y)\to(a,b)}f(x,y)=L$ when outputs become arbitrarily close to $L$ as inputs become sufficiently close to $(a,b)$, excluding that point itself. The value $f(a,b)$ may be different or undefined. For a limit through a restricted domain, only allowed inputs are tested. The target point must be an accumulation point of that domain: there must be other domain points arbitrarily close to it.

The distance from $(x,y)$ to $(a,b)$ is $r=\sqrt{(x-a)^2+(y-b)^2}$. Requiring small $r$ makes both coordinate differences small. It does not prescribe any fixed relation between them.

## The precise definition

For every desired output error $\varepsilon>0$, there must be an input radius $\delta>0$ such that

$$
0<\sqrt{(x-a)^2+(y-b)^2}<\delta
\quad\Longrightarrow\quad |f(x,y)-L|<\varepsilon
$$

for every point in the domain. The order matters: select the required error first, then find one radius that controls *all* allowed points in that disk. Selecting a different radius for each path does not by itself meet the requirement.

For a concrete proof, take $f(x,y)=2x-y$ at $(0,0)$. Because $|x|\le r$ and $|y|\le r$, the triangle inequality gives $|2x-y|\le2|x|+|y|\le3r$. Given $\varepsilon$, choose $\delta=\varepsilon/3$. Then $0<r<\delta$ implies $|f(x,y)|<\varepsilon$. Therefore the limit is zero. This estimate covers every direction at once.

## A worked path test and a worked bound

Consider $f(x,y)=xy/(x^2+y^2)$ outside the origin. Along $y=0$, the value is zero. Along $y=x\ne0$, it is $x^2/(2x^2)=1/2$. The two paths give different limits, so the joint limit does not exist. One conflicting pair of paths is enough to disprove it.

Now consider $g(x,y)=x^2y/(x^2+y^2)$ outside the origin. Since $0\le x^2/(x^2+y^2)\le1$,

$$
|g(x,y)|\le |y|\le\sqrt{x^2+y^2}=r.
$$

Thus $\delta=\varepsilon$ proves that its limit is zero. The extra factor $x$ changes the conclusion. Algebraic resemblance alone is not a reliable path test.

Even agreement along every straight line can fail. For $h(x,y)=x^2y/(x^4+y^2)$, substituting $y=mx$ gives $mx/(x^2+m^2)$, which tends to zero for each fixed nonzero $m$; the axes also give zero. But $y=x^2$ gives $1/2$. A curved approach exposes what the line tests miss.

## More input coordinates

For $n$ inputs, replace the planar distance by

$$
\|\mathbf x-\mathbf a\|=\sqrt{\sum_{i=1}^n(x_i-a_i)^2}.
$$

The same error-radius definition applies. The symbol $\|\cdot\|$ here means Euclidean length. For example, $x_1^2+\cdots+x_n^2=\|\mathbf x\|^2$ tends to zero at the origin: choose $\delta=\sqrt\varepsilon$. Increasing the number of inputs does not change the logic, but it supplies more possible approaches.

## Iterated limits

An **iterated limit** first changes one coordinate while holding the other fixed, then takes the outer limit. These two operations need not commute. For $F(x,y)=x^2/(x^2+y^2)$ outside the origin, holding $x\ne0$ fixed and taking $y\to0$ gives $1$; then taking $x\to0$ still gives $1$. Reversing the order gives $0$.

Even equal iterated limits do not prove the joint limit. The earlier $xy/(x^2+y^2)$ has both iterated limits zero, but its diagonal values are $1/2$. If a joint limit exists and the relevant inner limits exist near the target, the iterated limits agree with it. The existence of those inner limits is an extra condition, not an automatic consequence of writing the notation.

## Continuity

A function is continuous at a point in its domain if its nearby values approach its value there. For an accumulation point this means $\lim f=f(a,b)$. At an isolated domain point, continuity holds directly because there are no other sufficiently near domain inputs to test.

Polynomials in several inputs are continuous everywhere. Quotients of continuous functions are continuous wherever the denominator is nonzero. These rules permit direct substitution after checking the domain. The removable extension $g(0,0)=0$ makes the bounded example $g$ continuous. Assigning any value at the origin cannot repair the first example $f$, since its incompatible paths remain.

## Practice

1. Prove $\lim_{(x,y)\to(0,0)}(x^2+y^2)=0$ with an explicit radius.
2. Can $k(x,y)=(x^2-y^2)/(x^2+y^2)$ be continuously extended at the origin?

## Worked answers

1. With $r=\sqrt{x^2+y^2}$, the output error is $r^2$. Given $\varepsilon>0$, choose $\delta=\sqrt\varepsilon$. Then $0<r<\delta$ gives $r^2<\varepsilon$.
2. No. Along the nonzero $x$ axis it is $1$; along the nonzero $y$ axis it is $-1$. The joint limit does not exist, so no assigned central value can make it continuous.
