---
title: "Trigonometric equations"
catalogue_ids:
  - "1.6.4.4"
---

> [!TLDR]
> Reduce the equation to a familiar sine, cosine, or tangent value, then include every allowed angle and every required full turn.

## Angles and function values

This lesson uses **radians**: one full turn is $2\pi$, and $\pi$ radians equals $180^\circ$. On the unit circle, the point at angle $x$ is $(\cos x,\sin x)$. Thus sine and cosine are real numbers between $-1$ and $1$. Their squares satisfy $\sin^2x+\cos^2x=1$, where $\sin^2x$ means $(\sin x)^2$.

Define $\tan x=\sin x/\cos x$ when $\cos x\ne0$. Tangent is undefined at $x=\pi/2+k\pi$, where $k$ is any integer. An **integer** includes zero, positive whole numbers, and negative whole numbers. The notation $k\in\mathbb Z$ means that $k$ ranges over them.

Sine and cosine repeat after $2\pi$; tangent repeats after $\pi$. A trigonometric equation can therefore have infinitely many real solutions. If the problem specifies an interval, report only solutions inside it. For the circle definitions and exact values, see [[04.05 The unit circle]].

## Inverse functions select one angle

The equation $\sin x=c$ has no real solution if $|c|>1$. Otherwise let $\alpha=\arcsin c$, the selected angle in $[-\pi/2,\pi/2]$ whose sine is $c$. Reflection on the circle gives two families:

$$
x=\alpha+2k\pi\quad\text{or}\quad x=\pi-\alpha+2k\pi,
\qquad k\in\mathbb Z.
$$

At $c=1$ or $c=-1$, the families describe the same set, so do not count them twice. For $\cos x=c$ with $|c|\le1$, define $\beta=\arccos c$ in $[0,\pi]$. All solutions are

$$
x=\beta+2k\pi\quad\text{or}\quad x=-\beta+2k\pi.
$$

For tangent, $\gamma=\arctan c$ is the selected angle in $(-\pi/2,\pi/2)$. All solutions are $x=\gamma+k\pi$. Inverse sine is not $1/\sin x$: an inverse function undoes the input-output relation, while a reciprocal divides one by a value. Set a calculator to radians when evaluating these formulas.

## Worked example: a polynomial in sine

Solve $2\sin^2x-3\sin x+1=0$ for all real $x$.

1. Set $u=\sin x$ and record $-1\le u\le1$.
2. Factor $2u^2-3u+1=(2u-1)(u-1)$. Thus $u=1/2$ or $u=1$.
3. Both values lie in the allowed range.
4. For $\sin x=1/2$, the two circle angles in $[0,2\pi)$ are $\pi/6$ and $5\pi/6$.
5. For $\sin x=1$, the angle is $\pi/2$.
6. All real solutions are $x=\pi/6+2k\pi$, $x=5\pi/6+2k\pi$, or $x=\pi/2+2k\pi$, with $k\in\mathbb Z$.

Substitute the sine values into the original expression: $2(1/4)-3/2+1=0$ and $2-3+1=0$. This checks the entire families because full turns preserve sine.

## Identities can reveal a polynomial

If an equation mixes sine and cosine squares, use $\cos^2x=1-\sin^2x$ or the reverse to leave one function. Preserve the signs of unsquared functions: $\cos x$ is not always $\sqrt{1-\sin^2x}$, because that square root is nonnegative.

For $\sin2x=\sin x$, the double-angle identity $\sin2x=2\sin x\cos x$ gives

$$
\sin x(2\cos x-1)=0.
$$

The first factor gives $x=k\pi$. The second gives $x=\pm\pi/3+2k\pi$. Dividing by $\sin x$ would lose the first family. Factoring keeps it. [[04.06 Trigonometric identities]] develops the addition and double-angle identities.

## A more general algebraic substitution

For an equation made from rational expressions in sine and cosine, the **tangent half-angle substitution** can turn it into a rational equation. Set $t=\tan(x/2)$ wherever this is defined. The double-angle identities and $1+\tan^2(x/2)=1/\cos^2(x/2)$ give

$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2}.
$$

Substitute these expressions and clear denominators with care. For real $t$, $1+t^2>0$. Any other original denominator can still vanish and must retain its restriction. Recover $x=2\arctan t+2k\pi$. This substitution omits $x=\pi+2k\pi$, where $\tan(x/2)$ is undefined; test those angles separately in the original equation.

For example, $\sin x=1-\cos x$ becomes $2t=2t^2$, so $t=0$ or $1$. They give $x=2k\pi$ or $\pi/2+2k\pi$. The omitted angle $\pi$ fails the original equation because $0\ne2$. Thus no solution family is missing here.

## Practice

1. Solve $\tan(2x)=1$ for all real $x$.
2. Solve $\cos^2x=1/4$ on $0\le x<2\pi$.

## Worked answers

1. Since $\tan(\pi/4)=1$, $2x=\pi/4+k\pi$. Divide the whole expression by two: $x=\pi/8+k\pi/2$. At these inputs $2x$ is never a tangent pole, so every listed value is allowed.
2. Taking both signs gives $\cos x=1/2$ or $-1/2$. The first yields $\pi/3$ and $5\pi/3$; the second yields $2\pi/3$ and $4\pi/3$. These are four distinct angles in the stated half-open interval. The endpoint $2\pi$ is excluded and would not satisfy the equation anyway.
