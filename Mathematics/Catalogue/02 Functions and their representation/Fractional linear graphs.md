---
title: "Fractional linear graphs"
catalogue_ids:
  - "2.4"
  - "2.4.1"
  - "2.4.2"
  - "2.4.6"
---

> [!TLDR]
> A nonconstant fractional linear function is a shifted reciprocal graph; its original denominator determines which input is excluded.

## The basic reciprocal and its powers

A rational function is a polynomial quotient. The simplest nonconstant example is $r(x)=k/x$, with $k\ne0$ and domain $x\ne0$. Its graph satisfies $xy=k$, a rectangular hyperbola. For $k>0$, the two coordinates have the same sign; for $k<0$, they have opposite signs. The axes $x=0$ and $y=0$ are asymptotes. The graph has half-turn symmetry about the origin because $r(-x)=-r(x)$.

For a positive integer $n$, a reciprocal power $k/x^n$ still has domain $x\ne0$. If $n$ is even, both sides have the sign of $k$ and the graph is even. If $n$ is odd, the sides have opposite signs and the graph is odd. All such functions tend to zero at both infinite input ends. Near zero, their magnitude diverges. The parity controls whether the two infinite side limits have equal or opposite signs.

For $k>0$, $k/x^2$ has range $(0,\infty)$; for $k<0$, its range is $(-\infty,0)$. Odd reciprocal powers have every nonzero real output. Zero is an asymptotic value, never an attained output. These facts follow from solving $y=k/x^n$ with the proper real root conditions.

## A special linear fractional form

The family $f(x)=a+b/x$, $b\ne0$, shifts the basic reciprocal vertically. Its asymptotes are $x=0$ and $y=a$, and its range excludes $a$. Its centre is $(0,a)$. More generally, $a+b/(x-h)$ shifts the vertical asymptote to $x=h$ and the centre to $(h,a)$.

On each side of the pole, $b>0$ makes the function decreasing. To see this without a derivative, take $u<v$ on the same side of $h$:

$$
\frac b{v-h}-\frac b{u-h}
=\frac{-b(v-u)}{(v-h)(u-h)}<0.
$$

The same-side condition is essential. Comparing inputs across the pole does not give a decreasing function on the disconnected full domain. A negative $b$ reverses the direction on each branch.

## Reduce the general quotient

Consider

$$
f(x)=\frac{\alpha x+\beta}{\gamma x+\delta},\qquad \gamma\ne0.
$$

Set $\Delta=\alpha\delta-\beta\gamma$. Algebra gives

$$
f(x)=\frac\alpha\gamma
-\frac{\Delta}{\gamma^2}\frac1{x+\delta/\gamma}.
$$

When $\Delta\ne0$, this is a shifted reciprocal with centre $(-\delta/\gamma,\alpha/\gamma)$. The vertical asymptote is $x=-\delta/\gamma$ and the horizontal asymptote is $y=\alpha/\gamma$. Solving $y=f(x)$ gives

$$
x=\frac{\beta-\delta y}{\gamma y-\alpha},
$$

so every output except $\alpha/\gamma$ occurs once. The formula also explains invertibility on the full allowed domain despite its two branches.

If $\Delta=0$, the numerator is proportional to the denominator. The quotient is constant at every allowed input, with a hole at $-\delta/\gamma$ rather than a pole. If $\gamma=0$ and $\delta\ne0$, the expression is linear or constant. If both denominator coefficients vanish, no quotient function is defined. These exceptional cases prevent an automatic “hyperbola” classification.

## Solve a fractional equation with its exclusions intact

For $(2x+3)/(x-1)=7$, first record $x\ne1$. Multiply by $x-1$ only on this allowed domain to get $2x+3=7x-7$. Hence $x=2$, and substitution gives seven, as required. More generally, setting the output equal to the horizontal asymptote two would give $2x+3=2x-2$, a contradiction. Thus the missing output is confirmed algebraically. Multiplying through a denominator does not authorize a previously excluded input, even when a later equation happens to accept it.

## Worked example: expose the geometry

For $f(x)=(2x+3)/(x-1)$, the original denominator excludes one. Divide the numerator as $2x+3=2(x-1)+5$, giving

$$
f(x)=2+\frac5{x-1}.
$$

Thus the centre is $(1,2)$, and the asymptotes are $x=1$ and $y=2$. The graph is above two for $x>1$ and below two for $x<1$. The vertical intercept is $f(0)=-3$. Setting the numerator to zero gives the horizontal intercept $x=-3/2$, which is allowed. As $x\to1^-$ the output tends to $-\infty$; from the right it tends to $+\infty$. Solving the output equation gives $f^{-1}(y)=(y+3)/(y-2)$ for $y\ne2$. The excluded output of $f$ becomes the excluded input of its inverse.

## Practice

1. Find the asymptotes, domain, and range of $g(x)=3-2/(x+4)$.
2. Classify $h(x)=(4x-8)/(2x-4)$ on its natural domain. Is $x=2$ a pole?

## Worked answers

1. Its vertical asymptote is $x=-4$ and its horizontal asymptote is $y=3$. The domain excludes $-4$, and the range excludes three. The negative reciprocal coefficient puts the right branch below three and the left branch above three.
2. Factor to obtain $h(x)=2$ for $x\ne2$. Its natural domain still excludes two, but the nearby limit is finite and equals two. Hence there is a removable hole at $(2,2)$, not a pole. Its range is the singleton $\{2\}$.
