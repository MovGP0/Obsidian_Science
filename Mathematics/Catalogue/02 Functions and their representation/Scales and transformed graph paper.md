---
title: "Scales and transformed graph paper"
catalogue_ids:
  - "2.17"
  - "2.17.1"
  - "2.17.2"
  - "2.17.2.1"
  - "2.17.2.2"
  - "2.17.2.3"
  - "2.17.2.4"
---

> [!TLDR]
> A scale converts numbers into positions; logarithmic and reciprocal scales make selected nonlinear relations look straight.

## Numbers and positions

An axis is a geometric line. A **scale** tells us where to place each number on that line. These are separate choices. A nonlinear scale can put nonlinear numerical relationships onto straight geometric lines. Start with [[03.02 Graphs]] and [[Logarithms and their bases]].

Let $u$ denote a numerical value and $s$ its position along the page. The rule $s=A\phi(u)+B$ defines a scale, with $A\ne0$. Here $\phi$ is a chosen transformation. $A$ controls size and direction, while $B$ shifts the origin. For unambiguous reading, use an interval on which $\phi$ is continuous and strictly monotone. Otherwise one page position could have multiple numerical labels.

## Build a scale

A uniform scale has $\phi(u)=u$: equal numerical differences have equal page lengths. A logarithmic scale uses $\phi(u)=\log_{10}u$ for $u>0$: equal numerical ratios have equal page lengths. Thus $1,10,100,1000$ are equally spaced. The label $2$ lies about $0.301$ of the distance from $1$ to $10$, since $\log_{10}2\approx0.301$.

A reciprocal scale uses $\phi(u)=1/u$ on an interval that does not include zero. Increasing positive values move toward decreasing transformed positions. That reversal is part of the scale and must be visible in its labels. One cannot continue the scale through zero, because the reciprocal is undefined there.

For example, construct a positive logarithmic scale over $1\le u\le100$ with page positions $0\le s\le10$. Choose $s=5\log_{10}u$. Then $u=1,10,100$ lie at $s=0,5,10$, and $u=4$ lies at approximately $3.010$. Reading halfway between positions $0$ and $5$ gives $u=10^{1/2}=\sqrt{10}$, not $5.5$.

## Two scales make graph paper

Ordinary graph paper uses uniform horizontal and vertical scales. Transformed paper uses page coordinates $X=\phi(x)$ and $Y=\psi(y)$. Numerical labels still display $x,y$. Distinguish a number's label from its transformed position when reading slope. The straight-line equation belongs to $X,Y$, and must be converted back to $x,y$ before interpretation.

## Semilogarithmic paper

Use a uniform horizontal scale and a logarithmic vertical scale. The curve $y=ab^x$ with $a>0,b>0$ becomes

$$
Y=\log_{10}y=\log_{10}a+x\log_{10}b.
$$

The slope is $\log_{10}b$. If a straight line rises from $y=4$ at $x=0$ to $y=400$ at $x=2$, then its transformed rise is $\log_{10}(400/4)=2$. Divide by the horizontal change $2$: the slope is $1$. Therefore $b=10$, and the model is $4\cdot10^x$. Its value at $x=1$ is $40$.

## Double-logarithmic paper

Use $X=\log_{10}x$ and $Y=\log_{10}y$, so both coordinates must be positive. The power model $y=ax^b$ becomes

$$
Y=\log_{10}a+bX.
$$

Its slope is the exponent $b$, using transformed coordinate distances. A line through $(x,y)=(1,3)$ and $(10,300)$ rises by two vertical decades over one horizontal decade. Thus $b=2$, $a=3$, and $y=3x^2$. The original coordinate slope $(300-3)/(10-1)$ is not the exponent.

## Reciprocal graph paper

If $y=a+b/x$, use $X=1/x$ and $Y=y$. Then $Y=a+bX$. For $(x,y)=(1,5),(2,3),(4,2)$, transformed inputs are $1,1/2,1/4$. The transformed slope from the first two pairs is $(5-3)/(1-1/2)=4$. The intercept is $1$, giving $y=1+4/x$. Check the third prediction: $1+4/4=2$.

One may instead transform the output with $Y=1/y$. This serves other families such as $1/y=a+bx$. Transforming the wrong coordinate produces a different model. Always write the transformation next to the chart.

## What a straight plot does and does not prove

A logarithmic axis cannot display zero or negative labels. A plotting program that omits those observations can make an unsuitable model look convincing. Mark the domain and inspect the full table. Changing the logarithm base changes page units but does not change whether points lie on a straight line.

A straight transformed plot suggests a model within the plotted range. It does not establish causation or justify extrapolation. Unequal visual deviations may also represent equal relative errors rather than equal absolute errors. See [[Choosing and rectifying empirical curves]] for residual checks and [[Grid and alignment nomograms]] for scales designed to perform calculations.

For a practical reading check, take the two labelled endpoints around an unknown mark. Convert them into transformed coordinates, interpolate there, then apply the inverse transformation. This procedure reproduces the page geometry. Averaging the printed numerical labels on a logarithmic or reciprocal axis usually gives the wrong midpoint.

## Practice

1. Where is $u=25$ on the scale $s=2\log_{10}u$? What number is at position $s=3$?
2. A log-log line passes through $(2,8)$ and $(8,32)$. Find its power model.

## Worked answers

1. The position is $2\log_{10}25\approx2.79588$. Conversely $3=2\log_{10}u$ gives $u=10^{1.5}\approx31.6228$.
2. The slope is $\ln(32/8)/\ln(8/2)=\ln4/\ln4=1$. Thus $y=ax$, and $a=8/2=4$. The model is $y=4x$.
