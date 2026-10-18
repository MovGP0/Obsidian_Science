---
title: "Third-degree rational curve families"
catalogue_ids:
  - "2.4.3"
  - "2.4.4"
  - "2.4.5"
---

> [!TLDR]
> Three source-specific rational curve families combine reciprocal terms or quadratic denominators; their poles and shapes follow from factoring and completing squares.

## What the three type labels mean

The labels “type I”, “type II”, and “type III” in this catalogue are the conventions of Bronshtein and coauthors' *Handbook of Mathematics*, sections 2.4.3–2.4.5. They are not a universal classification of every cubic curve. The defining families are respectively $a+b/x+c/x^2$, $1/(ax^2+bx+c)$, and $x/(ax^2+bx+c)$. [The handbook](https://www.alnasiry.net/Book-Exa/Handbook%20of%20Mathematics.pdf) identifies these labels. The calculations below use new parameter examples.

Why “third degree” for a function containing $x^2$? Clear the denominator. For type II, for example, $(ax^2+bx+c)y=1$ contains $ax^2y$, of total degree three in the two coordinates. This is different from the degree of a polynomial function $y=p(x)$. The rational rule retains denominator exclusions; multiplying to obtain an implicit equation must not silently add forbidden points.

Use [[Fractional linear graphs]] and [[Polynomial graph shapes]] for reciprocal asymptotes and quadratic signs. Here all coefficients are real, and $a\ne0$ for the genuinely quadratic denominators.

## Type I: two reciprocal powers

Let

$$
f(x)=a+\frac b{x}+\frac c{x^2},\qquad x\ne0.
$$

With $b,c\ne0$, the line $y=a$ is a horizontal asymptote. The $c/x^2$ term dominates near zero, so both sides diverge with the sign of $c$. The graph crosses its horizontal asymptote when $bx+c=0$, or $x=-c/b$. Crossing an asymptote is allowed.

Set $t=1/x$. Then $f=a+bt+ct^2$. Completing the square gives

$$
f=a-\frac{b^2}{4c}+c\left(\frac1x+\frac b{2c}\right)^2.
$$

If $c>0$, this proves a minimum $a-b^2/(4c)$ at $x=-2c/b$; if $c<0$, it proves a maximum there. The assumption $b\ne0$ ensures that this input exists. If $b=0$, the corresponding bound $a$ is approached but not attained. If $c=0$, the family reduces to a shifted reciprocal rather than the full type-I shape.

## Type II: reciprocal quadratic

For $g(x)=1/q(x)$ with $q(x)=ax^2+bx+c$, complete the denominator square:

$$
q(x)=a\left(x+\frac b{2a}\right)^2+d,\qquad
d=c-\frac{b^2}{4a}.
$$

The graph is symmetric about $x=-b/(2a)$, because equal distances on either side give the same denominator. Its horizontal asymptote is zero. Real denominator roots are poles, since the numerator one cannot cancel them. A repeated denominator root gives the same signed infinite behaviour on both sides. Distinct simple roots give opposite signs on the two sides of each root.

For $a>0$ and $d>0$, the denominator is always positive and at least $d$. Thus $0<g(x)\le1/d$, with maximum at the centre. When $d=0$, the centre is an excluded double pole. When $d<0$, there are two simple poles and the denominator is negative between them. For $a<0$, reflect the graph obtained by negating the denominator coefficients. These cases come from quadratic signs, without a memorized picture.

## Type III: linear numerator over a quadratic

For $h(x)=x/q(x)$, the horizontal asymptote is again zero. If $c\ne0$, zero is allowed and $h(0)=0$. If $c=0$, the numerator may cancel a denominator factor at zero, but the original input stays excluded. Thus the often-used statement that this curve passes through the origin requires $c\ne0$.

When $b=0$, the denominator is even, so $h$ is odd. If $b\ne0$, that symmetry generally fails. A useful no-pole example is $h(x)=x/(x^2+1)$. For positive $x$, $x^2+1\ge2x$ gives $h(x)\le1/2$, with equality at one. Oddness gives the minimum $-1/2$ at minus one. This establishes both extrema without differentiation. Pole examples such as $x/(x^2-1)$ instead require splitting the domain at $\pm1$.

## Check whether a denominator zero survives

For type III, a simple denominator zero $r\ne0$ cannot cancel with the numerator $x$, so it remains a pole. If zero is a root, factor $q(x)=x(ax+b)$. When $b\ne0$, one factor cancels and leaves a finite limiting value $1/b$ at zero. If $b=0$ as well, the rule becomes $1/(ax)$ away from zero, and a pole survives. The location of a denominator zero alone does not decide which of these two outcomes occurs; compare its multiplicity with the numerator's multiplicity.

## Worked example: a type-I graph from algebra

Take $f(x)=2-4/x+1/x^2$. Complete the square in $1/x$:

$$
f(x)=\left(\frac1x-2\right)^2-2.
$$

The minimum is $-2$ at $x=1/2$. Both sides tend to $+\infty$ at zero, and $f\to2$ at either infinite end. To find the crossing of $y=2$, solve $-4x+1=0$, obtaining $x=1/4$. Zeros satisfy $2x^2-4x+1=0$, so $x=1\pm\sqrt2/2$, both allowed. This gives the bound, poles, asymptote, its crossing, and axis intersections from the rule itself.

## Practice

1. Find the domain, symmetry line, and maximum of $g(x)=1/(x^2-4x+5)$.
2. Classify zero for $h(x)=x/(x^2+x)$ and find its horizontal asymptote.

## Worked answers

1. The denominator is $(x-2)^2+1>0$, so the domain is all real numbers. The symmetry line is $x=2$. The reciprocal is at most one, with equality at two, so the maximum is one.
2. The original denominator is $x(x+1)$, excluding zero and minus one. For other inputs, $h(x)=1/(x+1)$. Zero is a removable hole with limiting output one, while minus one is a pole. The horizontal asymptote is $y=0$.
