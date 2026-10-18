---
title: "Exponential and logarithmic graphs"
catalogue_ids:
  - "2.6"
  - "2.6.1"
  - "2.6.2"
---

> [!TLDR]
> An exponential turns input addition into output multiplication; its logarithmic inverse turns positive multiplication into addition.

## Extend repeated multiplication

For a fixed base $a>0$, integer powers mean repeated multiplication and reciprocal multiplication. Rational powers use roots. Extending these values continuously gives $a^x$ for every real $x$. When $a=1$, the result is the constant one. To obtain an invertible exponential family, require $a\ne1$.

The law $a^{x+y}=a^xa^y$ means that an equal input increment gives an equal output factor. For $a>1$, the function is strictly increasing, has domain $\mathbb R$, and has range $(0,\infty)$. It passes through $(0,1)$ and $(1,a)$. It tends to zero at the negative infinite end and grows without bound at the positive end. For $0<a<1$, these directions reverse. The identity $a^x=(1/a)^{-x}$ explains the reflection.

This makes exponential growth different from a linear rule. For $f(x)=3\cdot2^x$, increasing the input by one multiplies the output by two. For $g(x)=3+2x$, increasing the input by one adds two. Comparing equal increments is a useful way to distinguish their data patterns.

## The logarithm reverses the assignment

Define $\log_a y=x$ exactly when $a^x=y$, for $y>0$. Therefore

$$
\log_a(a^x)=x\quad(x\in\mathbb R),\qquad
a^{\log_a y}=y\quad(y>0).
$$

Its graph is the exponential graph reflected in $y=x$. Its domain is $(0,\infty)$ and range $\mathbb R$. It passes through $(1,0)$ and $(a,1)$. The vertical axis is an asymptote. The logarithm is increasing when $a>1$ and decreasing when $0<a<1$; inverse functions retain the corresponding ordering direction.

To derive the product rule, let $u=a^r$ and $v=a^s$, with $u,v>0$. Then $uv=a^{r+s}$, so

$$
\log_a(uv)=\log_a u+\log_a v.
$$

Division gives a difference and a positive power gives $\log_a(u^p)=p\log_a u$ for $u>0$ and real $p$. There is no corresponding sum rule: $\log_a(u+v)$ does not split into two logarithms. [[Logarithms and their bases]] gives additional arithmetic practice.

## Natural base and graph transformations

The natural exponential uses a specific base $e\approx2.71828$, definable as the limit of $(1+1/n)^n$. Write its inverse as $\ln x$. Every positive base can be expressed as $a=e^{\ln a}$, so

$$
a^x=e^{x\ln a},\qquad \log_a x=\frac{\ln x}{\ln a}.
$$

The nonzero denominator is the reason to exclude base one. No positive base zero is allowed, because zero powers do not give positive outputs for every real input.

For $f(x)=A e^{k(x-h)}+D$ with $A,k\ne0$, the horizontal asymptote is $y=D$. Positive $A$ puts all outputs above it; negative $A$ puts them below it. The input shift is $h$, and $|k|$ controls the input scale. For $g(x)=A\ln(k(x-h))+D$, require $k(x-h)>0$ before drawing any curve. The boundary $x=h$ is a vertical asymptote. Reversing the sign of $k$ changes which side of that boundary contains the domain.

## Read constant multiplicative change from a logarithmic scale

For a positive exponential $f(x)=A e^{kx}$, taking natural logarithms gives $\ln f(x)=\ln A+kx$. Thus the logarithm of the output lies on a straight line against the original input. Equal input steps add a constant to the logged output and multiply the original output by a fixed factor. This is useful when identifying an exponential pattern from data, but it requires positive outputs. A vertical offset, $A e^{kx}+D$, must first be removed before this simple linear relation applies. Otherwise a plot of $\ln f(x)$ generally curves.

The logarithmic graph also shows why the exponential can never reach zero at a finite input. Every finite exponent gives a positive value, while approaching zero requires the logarithm to decrease without bound. A horizontal asymptote at zero therefore remains a limit statement, not an additional point on the exponential graph.

## Worked example: recover a rule from two values

Suppose $f(x)=A b^x$, with $A>0$, $b>0$, and data $f(1)=6$, $f(3)=24$. Divide the equations:

$$
\frac{A b^3}{A b}=b^2=\frac{24}{6}=4.
$$

The base is positive, so $b=2$, not minus two. Then $A b=6$ gives $A=3$, and $f(x)=3\cdot2^x$. To find the input giving output fifteen, solve $3\cdot2^x=15$, or $2^x=5$. Thus $x=\log_2 5=\ln5/\ln2\approx2.322$. Checking $2<x<3$ is consistent with $f(2)=12$ and $f(3)=24$. These two data points determine this two-parameter family, but do not prove an arbitrary unknown function is exponential.

## Practice

1. Find the natural domain, asymptote, and zero of $g(x)=\ln(3-x)$.
2. Solve $e^{2x-1}=7$ and check whether there can be a second real solution.

## Worked answers

1. The logarithm requires $3-x>0$, so $x<3$. Its vertical asymptote is $x=3$. A logarithm is zero when its argument is one; thus $3-x=1$ gives $x=2$.
2. Apply $\ln$ to both positive sides: $2x-1=\ln7$, giving $x=(1+\ln7)/2$. The function $e^{2x-1}$ is strictly increasing, so distinct inputs cannot give the same output. The solution is unique.
