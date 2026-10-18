---
title: "Hyperbolic functions"
catalogue_ids:
  - "2.9"
  - "2.9.1"
  - "2.9.2"
  - "2.9.2.1"
  - "2.9.2.2"
  - "2.9.2.3"
  - "2.9.2.4"
---

> [!TLDR]
> Hyperbolic sine and cosine combine two exponentials and describe a hyperbola rather than a circle.

## Prerequisite route

Read [[03.04 Exponential and logarithmic functions]] for $e^x$ and [[03.02 Graphs]] for domains, ranges, and asymptotes. All inputs in this article are real numbers. No knowledge of calculus is needed. The word **hyperbolic** refers to the hyperbola that appears below. It does not mean that these functions are ordinary trigonometric functions with different names.

## Definitions from exponentials

Define the hyperbolic cosine and sine by

$$
\cosh x=\frac{e^x+e^{-x}}2,
\qquad
\sinh x=\frac{e^x-e^{-x}}2.
$$

The letters are read “cosh” and “sinh”, or “hyperbolic cosine” and “hyperbolic sine”. The exponential is always positive, so both definitions work for every real input. Adding and subtracting the equations gives a useful reverse conversion:

$$
e^x=\cosh x+\sinh x,
\qquad e^{-x}=\cosh x-\sinh x.
$$

The square difference has a simple value. Put $u=e^x$ and $v=e^{-x}$, so $uv=1$. Then

$$
\cosh^2x-\sinh^2x
=\frac{(u+v)^2-(u-v)^2}{4}=uv=1.
$$

Thus the point $(X,Y)=(\cosh x,\sinh x)$ lies on $X^2-Y^2=1$, on its right branch. In contrast, $(\cos\theta,\sin\theta)$ lies on $X^2+Y^2=1$. The minus sign changes both the geometry and many identities. A hyperbolic input is not an ordinary circular angle.

Define the two quotients

$$
\tanh x=\frac{\sinh x}{\cosh x},
\qquad
\coth x=\frac{\cosh x}{\sinh x}.
$$

Cosine's denominator never vanishes. Sine's denominator vanishes at $x=0$, so cotangent excludes zero. The reciprocal functions $\operatorname{sech}x=1/\cosh x$ and $\operatorname{csch}x=1/\sinh x$ are also common. The definitions agree with [NIST DLMF §4.28](https://dlmf.nist.gov/4.28).

## Graphs and their domains

![[catalogue-ch02b-hyperbolic.svg|**Fig. C.ch02b.1** Hyperbolic sine and cosine are unbounded. Hyperbolic tangent approaches two horizontal asymptotes.]]

### Hyperbolic sine

The graph of $y=\sinh x$ passes through $(0,0)$ and is strictly increasing. To see the increase without derivatives, increase $x$: $e^x$ increases while $e^{-x}$ decreases, so their difference increases. Its domain and range are both $\mathbb R$. Replacing $x$ by $-x$ gives $\sinh(-x)=-\sinh x$. This is an **odd** function, so its graph has half-turn symmetry about the origin. At large positive inputs it is close to $e^x/2$; at large negative inputs it is close to $-e^{-x}/2$.

### Hyperbolic cosine

The graph of $y=\cosh x$ is even: $\cosh(-x)=\cosh x$. Also

$$
\cosh x-1=\frac{(e^{x/2}-e^{-x/2})^2}{2}\geq0.
$$

Equality occurs only at zero. Hence the domain is $\mathbb R$ and the range is $[1,\infty)$. It decreases up to zero and increases after zero. It has a rounded minimum $(0,1)$, and grows on both sides. It resembles a parabola near its minimum, but its eventual exponential growth is much faster. A graph's visual similarity is not an equation identity.

### Hyperbolic tangent

Multiply numerator and denominator by $e^x$:

$$
\tanh x=\frac{e^{2x}-1}{e^{2x}+1}.
$$

The denominator exceeds the absolute value of the numerator. Thus $-1<\tanh x<1$ for all real $x$. The range is exactly $(-1,1)$, and the function is odd and strictly increasing. As $x$ increases without bound, divide numerator and denominator by $e^{2x}$ to obtain the limiting value $1$. At the other end it approaches $-1$. Neither endpoint is attained.

### Hyperbolic cotangent

For $x\ne0$, $\coth x=1/\tanh x$. Its domain is $\mathbb R\setminus\{0\}$ and range is $(-\infty,-1)\cup(1,\infty)$. It is odd and has a vertical asymptote $x=0$. Each branch decreases. The right branch falls from arbitrarily large values towards $1$; the left branch falls from values near $-1$ towards arbitrarily negative values. Its horizontal asymptotes are again $y=\pm1$. A plotting program must not connect the two branches across zero.

## Worked example: exact values from one exponential

Take $x=\ln3$. Then $e^x=3$ and $e^{-x}=1/3$, so

$$
\sinh(\ln3)=\frac43,\qquad
\cosh(\ln3)=\frac53,\qquad
\tanh(\ln3)=\frac45,\qquad
\coth(\ln3)=\frac54.
$$

Check the hyperbola identity: $(5/3)^2-(4/3)^2=1$. The tangent value is inside $(-1,1)$, while cotangent is greater than $1$. Domain and range checks can expose an inverted quotient or wrong sign before a calculator is used.

## Practice

1. Calculate all four functions at $x=\ln2$. Which functions change sign if the input is $-\ln2$?
2. A real number $x$ satisfies $\cosh x=13/5$. Find the possible values of $\sinh x$ and $\tanh x$. Explain why the sign is not determined.

## Worked answers

1. The two exponentials are $2$ and $1/2$. Thus $\sinh x=3/4$, $\cosh x=5/4$, $\tanh x=3/5$, and $\coth x=5/3$. Sine, tangent, and cotangent change sign. Cosine stays $5/4$ because it is even.
2. The square difference gives $\sinh^2x=(13/5)^2-1=144/25$. Thus $\sinh x=\pm12/5$, and $\tanh x=\pm12/13$ with the same sign. Cosine has equal values at $x$ and $-x$. An additional condition such as $x\geq0$ would select the positive sign.
