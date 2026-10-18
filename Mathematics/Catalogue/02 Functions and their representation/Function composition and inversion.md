---
title: "Function composition and inversion"
catalogue_ids:
  - "2.1.3.8"
  - "2.2.3"
---

> [!TLDR]
> Composition feeds one function into another; an inverse reverses a one-to-one assignment on its actual range.

## Follow the input through both rules

Given $g:A\to B$ and $f:B\to C$, their composition is $f\circ g:A\to C$, with $(f\circ g)(x)=f(g(x))$. Read the right-hand function first. If formulas are supplied with natural domains rather than compatible specified sets, the domain is

$$
\{x\in\operatorname{dom}g:g(x)\in\operatorname{dom}f\}.
$$

This condition is part of the calculation. With $g(x)=x-2$ and $f(u)=\sqrt u$, the composition is $\sqrt{x-2}$, defined for $x\ge2$. In the reverse order, $(g\circ f)(x)=\sqrt x-2$, defined for $x\ge0$. Composition generally does not commute. Parentheses matter too: $f(g(x))$ is not $f(x)g(x)$.

Composition is associative when the sets match. Indeed, both $(f\circ g)\circ h$ and $f\circ(g\circ h)$ send $x$ to $f(g(h(x)))$. This permits a long rule to be decomposed into simple steps. For $\ln(1+x^2)$, square the input, add one, then take the logarithm. The final logarithm needs a positive input, which $1+x^2$ always provides.

## What an inverse requires

A function is **injective**, or one-to-one, when equal outputs imply equal inputs. It is **surjective** onto its codomain when every codomain element occurs. A bijection has both properties. A bijection $f:A\to B$ has an inverse $f^{-1}:B\to A$ defined by reversing the pairs:

$$
f^{-1}(y)=x\quad\Longleftrightarrow\quad f(x)=y.
$$

The inverse laws are $f^{-1}(f(x))=x$ for $x\in A$ and $f(f^{-1}(y))=y$ for $y\in B$. If $f$ is only injective, it still has an inverse from its range $f(A)$ back to $A$. Changing the codomain to that range makes it a bijection.

An inverse function is not a reciprocal. For $f(x)=2x+3$, the inverse is $(y-3)/2$; the reciprocal is $1/(2x+3)$. The superscript $-1$ has a special meaning in function notation. Solve the defining equation rather than interpreting it as a numerical exponent.

## Restrict before reversing

The rule $x\mapsto x^2$ is not injective on $\mathbb R$, since $2$ and $-2$ both give $4$. Its restriction $f:[0,\infty)\to[0,\infty)$ is bijective and has inverse $f^{-1}(y)=\sqrt y$. The restriction to $(-\infty,0]$ has inverse $-\sqrt y$ instead. These are different functions. The equation $x^2=y$ has two real solutions for $y>0$, but an inverse function on a chosen branch returns one.

On a graph, reversing pairs exchanges $(x,y)$ with $(y,x)$ and reflects the graph in the line $y=x$. The horizontal-line test checks injectivity: no horizontal line can meet an injective graph twice. Strict monotonicity on an interval guarantees injectivity. It is sufficient; a function on a general disconnected set can be injective without being monotonic.

## Invert a chain in reverse order

If $g:A\to B$ and $f:B\to C$ are bijections, then $f\circ g$ is a bijection and its inverse is $g^{-1}\circ f^{-1}$. To see the order, start with an output in $C$. First undo the last step $f$, returning to $B$, and then undo $g$, returning to $A$. Algebra confirms the cancellation:

$$
(g^{-1}\circ f^{-1})(f(g(x)))=g^{-1}(g(x))=x.
$$

For a numerical example, first multiply by three and then add five. The combined rule is $3x+5$. Its reverse first subtracts five and then divides by three, giving $(y-5)/3$. Reversing the individual rules in the original order would give $y/3-5$, which fails the composition check. This method works for longer chains too, but every reversed step must be a bijection between its specified input and output sets.

## Worked example: inverse and its domain

Take $h:[2,\infty)\to[1,\infty)$, $h(x)=\sqrt{x-2}+1$. Its steps are subtract two, take the nonnegative square root, then add one. Each is strictly increasing on the relevant range, so $h$ is injective. Every $y\ge1$ is reached by reversing those steps:

$$
y-1=\sqrt{x-2},\qquad (y-1)^2=x-2,\qquad
h^{-1}(y)=(y-1)^2+2.
$$

The inverse domain must remain $[1,\infty)$. Although its formula can be calculated at smaller real $y$, those inputs are not outputs of $h$. Verify both directions:

$$
h^{-1}(h(x))=(\sqrt{x-2})^2+2=x,
$$

and, for $y\ge1$,

$$
h(h^{-1}(y))=\sqrt{(y-1)^2}+1=|y-1|+1=y.
$$

The absolute value explains why the range restriction cannot be dropped. Extending the inverse formula to $y=0$ would make the last composition equal $2$, not zero.

## Practice

1. For $f(u)=1/u$ and $g(x)=x^2-4$, find both compositions and their natural real domains.
2. Find the inverse of $p:(-\infty,3]\to[0,\infty)$, $p(x)=(x-3)^2$.

## Worked answers

1. We obtain $(f\circ g)(x)=1/(x^2-4)$, with $x\ne\pm2$. In the other order, $(g\circ f)(x)=1/x^2-4$, with $x\ne0$. The inner operation must be defined before the outer operation can be applied.
2. From $y=(x-3)^2$ and $x\le3$, choose $x-3=-\sqrt y$. Thus $p^{-1}(y)=3-\sqrt y$ for $y\ge0$. Squaring confirms $p(p^{-1}(y))=y$; the chosen sign ensures the output lies in the original domain.
