---
title: "Complex branches and elementary functions"
catalogue_ids:
  - "14.5"
  - "14.5.1"
  - "14.5.2"
  - "14.5.3"
---

> [!TLDR]
> Complex roots and logarithms require explicit branch domains; exponential formulas extend trigonometric functions, while parameter intervals specify directed complex curves.

## Algebraic functions and branches

Read [[06.07 Roots]], [[Complex limits and derivatives]], and [[06.05 Euler’s formula]]. An **algebraic function** is locally a solution $w=f(z)$ of a polynomial equation $P(z,w)=0$. For $w^2=z$, each nonzero input has two possible outputs. A **branch** selects one output continuously, and where possible holomorphically, on a stated domain. A list of all roots is not a single-valued function.

If $P(a,b)=0$ and $\partial P/\partial w(a,b)\ne0$, the complex implicit-function theorem gives one holomorphic branch through $(a,b)$ near $a$. For $P=w^2-z$, this partial derivative is $2b$, so each nonzero square root has a local branch. At zero the condition fails. Following a square root continuously once around zero changes its sign, preventing a global continuous square-root branch on the whole punctured plane.

On the **principal cut domain** $D=\mathbb C\setminus(-\infty,0]$, choose $-\pi<\operatorname{Arg}z<\pi$ and set

$$
\sqrt z=\sqrt{|z|}\,e^{i\operatorname{Arg}z/2}.
$$

This branch has positive real part and is holomorphic on $D$. It extends continuously to zero if desired, but zero is not an interior holomorphic point of that branch domain. From above the negative axis, $\sqrt{-r}$ approaches $i\sqrt r$; from below, it approaches $-i\sqrt r$. The discontinuity is in the branch choice. A different ray can be used as a cut.

![[catalogue-ch14-log-branch.svg|**Fig. C.ch14.3** The principal logarithm removes the nonpositive real axis. Its limiting imaginary parts on opposite sides of the cut differ by 2π.]]

## Elementary transcendental functions

The complex exponential satisfies $e^{x+iy}=e^x(\cos y+i\sin y)$. It is entire, never zero, and has period $2\pi i$. Thus the equation $e^w=z$ for $z\ne0$ has infinitely many solutions

$$
w=\ln|z|+i(\arg z+2\pi n),\qquad n\in\mathbb Z.
$$

Here $\arg z$ represents any one argument. On the principal cut domain define the **principal logarithm** $\operatorname{Log}z=\ln|z|+i\operatorname{Arg}z$. It is holomorphic with derivative $1/z$. A convention that assigns the negative axis an endpoint argument may define numerical principal values there, but does not make the logarithm holomorphic across that axis. Always distinguish a branch on an open set from a value convention on its boundary.

For a fixed complex exponent $\alpha$, define a chosen power by $z^\alpha=\exp(\alpha\operatorname{Log}z)$ on the cut domain. Its derivative is $\alpha z^{\alpha-1}$ with that same branch. Usual real logarithm rules can fail without a branch check: $\operatorname{Log}(zw)$ may differ from $\operatorname{Log}z+\operatorname{Log}w$ by a multiple of $2\pi i$. For example, $z=w=e^{3\pi i/4}$ are in the cut domain, but their sum of principal arguments is $3\pi/2$, whereas the product's principal argument is $-\pi/2$.

The definitions $\sin z=(e^{iz}-e^{-iz})/(2i)$ and $\cos z=(e^{iz}+e^{-iz})/2$ are single-valued entire functions. Hyperbolic functions are $\sinh z=(e^z-e^{-z})/2$ and $\cosh z=(e^z+e^{-z})/2$. Hence $\sin(iy)=i\sinh y$ and $\cos(iy)=\cosh y$. Their inverses require branches because the forward functions are not globally one-to-one. For instance, a local inverse sine can be written $-i\log(iz+\sqrt{1-z^2})$, but both root and logarithm choices must be compatible near its base point. This formula is not a license to combine arbitrary principal choices over the whole plane.

## Worked example: a complex power

Find the principal value of $i^i$. In the principal branch, $\operatorname{Log}i=i\pi/2$, so

$$
i^i=\exp(i\operatorname{Log}i)=e^{-\pi/2}.
$$

It is real and positive, even though both base and exponent involve $i$. If all logarithms are allowed, the values are $e^{-\pi/2-2\pi n}$ for integers $n$. A branch statement is therefore part of the answer. At a negative real base, the principal cut-domain expression is not defined; one must first specify a boundary value or a different branch domain.

## Description of curves in complex form

A parameterized curve is $z(t)=x(t)+iy(t)$ on a stated interval. A segment from $a$ to $b$ is $z(t)=a+t(b-a)$, $0\le t\le1$. A circle of center $c$ and radius $r>0$ is $z(t)=c+re^{it}$, $0\le t\le2\pi$. Increasing $t$ gives counterclockwise orientation. A circle can also be described by $|z-c|=r$, and a line through $a$ with direction $b\ne0$ by $\operatorname{Im}((z-a)/b)=0$.

The equation of a curve does not specify its direction or number of traversals. For $z(t)=e^{2it}$ on $[0,2\pi]$, the unit circle is traversed twice. Under a complex map, compose: $w(t)=f(z(t))$. For $z(t)=1+it$ under $f(z)=z^2$, one gets $w=1-t^2+2it$, a parabola in the output plane. This parameter method requires no hidden inversion of a multivalued relation.

## Practice

1. Find $\operatorname{Log}(1+i)$ and the principal square root of $1+i$ in polar form.
2. Give a clockwise semicircle from $2$ to $-2$ in the lower half-plane, and state the image under $w=z^2$.

### Worked answers

1. The modulus is $\sqrt2$ and the principal argument is $\pi/4$. Thus $\operatorname{Log}(1+i)=\tfrac12\ln2+i\pi/4$ and $\sqrt{1+i}=2^{1/4}e^{i\pi/8}$. Both use inputs away from the cut.
2. Use $z(t)=2e^{-it}$ for $0\le t\le\pi$. Its image is $w(t)=4e^{-2it}$: one full clockwise circle of radius four, starting and ending at $4$. Distinct source endpoints have the same image, which is allowed for a noninjective map.
