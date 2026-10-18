---
title: "Z-transform rules and inversion"
catalogue_ids:
  - "15.4"
  - "15.4.1"
  - "15.4.1.1"
  - "15.4.1.2"
  - "15.4.1.3"
  - "15.4.1.4"
  - "15.4.1.5"
---

> [!TLDR]
> The Z-transform turns a sequence into a power series in inverse powers of a complex variable; its convergence region is essential for inversion.

## Discrete functions

A sequence $x[n]$ assigns a number to each integer index $n$. The brackets emphasize a discrete input: $x[2.5]$ is not part of an ordinary sequence. A **right-sided** sequence is zero for $n<0$. Read [[09.01 Sequences]], [[09.02 Infinite series]], and [[06.01 Complex arithmetic]] first.

The unit impulse sequence has value $\delta[0]=1$ and $\delta[n]=0$ for $n\ne0$. Unlike the continuous Dirac delta, this is an ordinary function on the integers. The unit step sequence $u[n]$ is $1$ for $n\geq0$ and $0$ for $n<0$. Any sequence can be assembled from shifted impulses: $x[n]=\sum_m x[m]\delta[n-m]$, since exactly one term contributes at each $n$.

## Definition of the Z-transform

The **bilateral Z-transform** is

$$
X(z)=\sum_{n=-\infty}^{\infty}x[n]z^{-n},\qquad z\in\mathbb C.
$$

Its **region of convergence**, or ROC, is where the series converges absolutely. Away from special endpoint cases at zero and infinity, it is an annulus $r_1<|z|<r_2$, possibly with $r_1=0$ or $r_2=\infty$. Boundary points require separate checks. The **unilateral** transform is $X_+(z)=\sum_{n=0}^{\infty}x[n]z^{-n}$. It ignores negative-index values and is useful for initial-value recurrences. These transforms coincide for a right-sided sequence.

For real $a>0$, the geometric-series formula gives

$$
x[n]=a^nu[n]\quad\Longrightarrow\quad
X(z)=\frac1{1-az^{-1}}=\frac z{z-a},\qquad |z|>a.
$$

However, $x[n]=-a^n$ for $n\leq-1$, zero otherwise, has the same rational expression with $|z|<a$. To see this, put $m=-n\geq1$ and sum $-\sum_{m=1}^\infty(z/a)^m$. Thus the rational expression without its ROC does not determine a bilateral original.

## Calculation rules

Linearity holds on the common convergence domain. For the bilateral transform, substituting a shifted index gives $x[n-m]\leftrightarrow z^{-m}X(z)$. Multiplication by $a^n$ gives $X(z/a)$ for nonzero $a$, with the correspondingly scaled ROC. Differentiating the series gives

$$
nx[n]\longleftrightarrow-zX'(z).
$$

For absolutely convergent sequence transforms, convolution $(x*y)[n]=\sum_mx[m]y[n-m]$ transforms to $XY$. A product formula must still retain the appropriate common ROC; cancellation of a rational factor can enlarge it, so algebra alone does not specify the final ROC.

For the unilateral transform, a forward shift produces initial-value terms:

$$
\mathcal Z_+\{x[n+1]\}=z(X_+-x[0]),
$$
$$
\mathcal Z_+\{x[n+2]\}=z^2X_+-z^2x[0]-zx[1].
$$

For the first rule, substitute $m=n+1$: the sum starts at $m=1$, so its missing $m=0$ term must be removed. This is the discrete counterpart of the initial-value term in a Laplace derivative rule.

## Relation to the Laplace transform

Let $h>0$ be a mathematical spacing and form the impulse distribution $q(t)=\sum_{n\in\mathbb Z}x[n]\delta(t-nh)$. Wherever the sums converge, its bilateral Laplace transform is

$$
Q(s)=\sum_nx[n]e^{-snh}=X(e^{sh}).
$$

Thus $z=e^{sh}$ relates the exponential weights. A vertical strip in $s$ becomes an annulus in $z$. It is a many-to-one mapping because imaginary parts differing by $2\pi/h$ give the same $z$. This identity concerns an impulse distribution. The Laplace transform of an arbitrary continuous interpolating function is generally different; sampling values alone does not make the two transforms equal.

## Inversion of the Z-transform

If the unit circle $|z|=1$ lies inside the ROC, set $z=e^{i\theta}$ to obtain the absolutely convergent discrete Fourier series $X(e^{i\theta})=\sum_nx[n]e^{-in\theta}$. It is periodic in $\theta$ with period $2\pi$. This connects the Z-transform to Fourier analysis of sequences. A pole-free rational formula on the unit circle is not enough when that circle lies outside the specified ROC. For $x[n]=2^nu[n]$, the defining series diverges there even though $z/(z-2)$ has no pole on that circle.

For a right-sided original, expand $X$ in powers of $z^{-1}$ and read the coefficients. For rational functions, partial fractions often reduce the calculation to geometric pairs and their derivatives. For bilateral originals, choose expansions consistent with the specified annulus.

A general coefficient formula is

$$
x[n]=\frac1{2\pi i}\oint_{|z|=r}X(z)z^{n-1}\,dz,
$$

where the circle is counterclockwise and entirely inside an ROC. To understand it, insert the convergent Laurent series. The integral of $z^{n-m-1}$ around the circle is $2\pi i$ if $n=m$ and zero otherwise. It extracts the required coefficient. Contour integration is not needed for the elementary examples, but states the inverse precisely.

## Worked example

Find the right-sided original of $X(z)=z/(z-1/2)^2$. Start from $a^nu[n]\leftrightarrow z/(z-a)$. The rule for $n$ gives $na^nu[n]\leftrightarrow az/(z-a)^2$. At $a=1/2$, multiply by $2$: $x[n]=2n(1/2)^nu[n]$. The first terms are $0,1,1,3/4,1/2$. The ROC is $|z|>1/2$, not merely $z\ne1/2$.

## Practice

1. Find the transform of $\delta[n-3]$ and its finite-plane ROC.
2. Invert $z/(z-2)$ when the ROC is $|z|<2$.

> [!example]- Worked answers
> 1. Only $n=3$ survives in the sum, so the answer is $z^{-3}$, defined for $z\ne0$. The excluded origin comes from the negative power.
> 2. The interior expansion is $-\sum_{m=1}^\infty z^m/2^m$. Thus $x[n]=-2^n$ for $n\leq-1$ and $0$ otherwise. Choosing $2^nu[n]$ would contradict the stated ROC.
