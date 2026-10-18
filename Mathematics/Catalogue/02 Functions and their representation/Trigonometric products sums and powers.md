---
title: "Trigonometric products sums and powers"
catalogue_ids:
  - "2.7.2.5"
  - "2.7.2.6"
  - "2.7.2.7"
---

> [!TLDR]
> Addition identities let us exchange trigonometric sums and products and reduce powers to multiple-angle terms.

## Derive product-to-sum rules

Use [[Trigonometric addition and multiple angles]]. Write the cosine addition and difference identities side by side:

$$
\cos(u-v)=\cos u\cos v+\sin u\sin v,
$$

$$
\cos(u+v)=\cos u\cos v-\sin u\sin v.
$$

Adding isolates the cosine product; subtracting isolates the sine product. The results are

$$
\cos u\cos v=\tfrac12[\cos(u-v)+\cos(u+v)],
$$

$$
\sin u\sin v=\tfrac12[\cos(u-v)-\cos(u+v)].
$$

Similarly, add the sine identities to obtain

$$
\sin u\cos v=\tfrac12[\sin(u+v)+\sin(u-v)].
$$

To handle $\cos u\sin v$, exchange the roles of $u$ and $v$ carefully. Sine of a difference changes sign when the order reverses; cosine does not. These derivations explain both the factor one-half and the relative signs.

## Reverse the process: sum to product

Let $m=(u+v)/2$ and $d=(u-v)/2$. Then $u=m+d$ and $v=m-d$. Add or subtract their addition formulas to find

$$
\sin u+\sin v=2\sin m\cos d,\qquad
\sin u-\sin v=2\cos m\sin d,
$$

$$
\cos u+\cos v=2\cos m\cos d,\qquad
\cos u-\cos v=-2\sin m\sin d.
$$

The mean angle and half-difference are useful substitutions, not additional independent angles. A sum may become easier to evaluate, factor, or solve after this change. A product can be zero only if at least one factor is zero, which gives a complete equation-solving route.

Do not divide by a sine or cosine factor before checking its zeros. Division could discard entire solution families. Factoring is safer when the goal is to find all zeros.

## Reduce squares and higher powers

From the double-angle identity,

$$
\sin^2x=\frac{1-\cos2x}2,\qquad
\cos^2x=\frac{1+\cos2x}2.
$$

Thus a nonnegative square becomes a constant plus a doubled-angle term. Cubic powers follow by rearranging the triple-angle rules:

$$
\sin^3x=\frac{3\sin x-\sin3x}4,\qquad
\cos^3x=\frac{3\cos x+\cos3x}4.
$$

For a fourth power, square the square-reduction formula and reduce again. For example,

$$
\cos^4x=\frac{1+2\cos2x+\cos^22x}{4}
=\frac{3+4\cos2x+\cos4x}{8}.
$$

This repeated method handles any positive integer power. Even powers reduce to constants and cosines of even multiples; odd powers of sine or cosine reduce to corresponding odd multiples. The formulas are exact identities for real inputs, not approximations for small angles. Their usefulness includes algebraic simplification and later integration in [[Integral calculus - Overview]]; no integration is required here.

## Why both transformations are useful

For exact evaluation, sum-to-product can expose a known factor. For example, $\cos(\pi/12)+\cos(7\pi/12)$ has mean angle $\pi/3$ and half-difference $-\pi/4$. It equals $2\cos(\pi/3)\cos(-\pi/4)=\sqrt2/2$. Product-to-sum is useful in the opposite direction when the arguments are multiples of one input: it separates their combined variation into simpler angle terms. The transformation should serve the calculation being attempted; changing every sum into a product indiscriminately does not necessarily simplify a problem.

Another useful check comes from a full-period average. Over a complete cosine cycle, positive and negative portions cancel. Thus the identity $\cos^2x=(1+\cos2x)/2$ suggests the average squared value is one-half. This is an interpretation of the exact identity; a later integral definition of average value makes the statement precise.

## Worked example: factor an equation without losing roots

Solve $\sin3x+\sin x=0$ for $0\le x<2\pi$. Set $u=3x$ and $v=x$ in the sum identity:

$$
\sin3x+\sin x=2\sin2x\cos x.
$$

The equation holds when $\sin2x=0$ or $\cos x=0$. The first gives $2x=k\pi$, so the allowed inputs are $0,\pi/2,\pi,3\pi/2$. The second gives $\pi/2,3\pi/2$, already on the list. Hence these four distinct inputs are the complete answer. Dividing the original equation by $\cos x$ would have removed two of them unless checked separately.

As a separate exact calculation, $\sin5x\sin x=\tfrac12(\cos4x-\cos6x)$. The difference frequency comes first for a sine-sine product. Checking $x=0$ gives zero on both sides; checking $x=\pi/2$ gives one on both sides. These checks do not prove the identity, but they catch a common swapped-sign error.

## Practice

1. Express $\cos3x\cos2x$ as a sum, and express $\sin7x-\sin3x$ as a product.
2. Derive a multiple-angle expression for $\sin^4x$ and check it at $x=0$.

## Worked answers

1. The product rule gives $\tfrac12(\cos x+\cos5x)$. For the difference, the mean angle is $5x$ and the half-difference is $2x$, so the product is $2\cos5x\sin2x$.
2. Square $\sin^2x=(1-\cos2x)/2$, then replace $\cos^22x$ by $(1+\cos4x)/2$. The result is $(3-4\cos2x+\cos4x)/8$. At zero it gives $(3-4+1)/8=0$, agreeing with $\sin^40$.
