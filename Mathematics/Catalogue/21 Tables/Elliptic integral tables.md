---
title: "Elliptic integral tables: modulus, amplitude, and complete values"
catalogue_ids:
  - "21.9"
  - "21.9.1"
  - "21.9.2"
  - "21.9.3"
---

> [!TLDR]
> Elliptic-integral tables require an explicit modulus convention; incomplete values depend on an amplitude, while complete values use amplitude π/2.

## Why introduce another function?

An integral can be well defined without an elementary antiderivative. Instead of repeating a numerical integration every time, define a new function, prove its properties, and tabulate it. This is the role of an elliptic integral. Review [[08.01 Definite integrals]] and [[04.04 Angular measure]]. This article uses real inputs with $0\le k<1$ and $0\le\varphi\le\pi/2$. The parameter $k$ is the **modulus**; $\varphi$ is the **amplitude**, in radians.

We use the definitions in [NIST DLMF §19.2](https://dlmf.nist.gov/19.2). The word elliptic refers to their relation to ellipse geometry, not to an elliptical graph of the function. The two first kinds have different integrands and cannot be interchanged.

## First kind: accumulated reciprocal root

Define

$$
F(\varphi,k)=\int_0^\varphi\frac{d\theta}{\sqrt{1-k^2\sin^2\theta}}.
$$

For $0\le k<1$, the square root is positive on the whole interval. The integrand is at least 1, so $F(\varphi,k)\ge\varphi$. At $k=0$, it is exactly $\varphi$. Increasing $k$ increases the integrand and thus the value. These simple tests catch a wrong table or a mistaken argument.

With $t=\sin\theta$, the same integral becomes

$$
F(\varphi,k)=\int_0^{\sin\varphi}\frac{dt}{\sqrt{(1-t^2)(1-k^2t^2)}}.
$$

This form explains the quartic radical. For a concrete application, $\int_0^{1/2}dt/\sqrt{(1-t^2)(1-t^2/4)}$ equals $F(\pi/6,1/2)$. Both the transformed upper limit and the modulus must be matched.

## Second kind: accumulated root

Define

$$
E(\varphi,k)=\int_0^\varphi\sqrt{1-k^2\sin^2\theta}\,d\theta.
$$

Now the integrand is at most 1, so $E(\varphi,k)\le\varphi$. Increasing $k$ decreases the value. At $k=0$, it again equals $\varphi$. Thus $E\le\varphi\le F$ in this real domain.

The geometric origin is ellipse arc length. For the mathematical ellipse $(x,y)=(a\sin\theta,b\cos\theta)$ with $a\ge b>0$, the speed of this parametrization is $\sqrt{a^2\cos^2\theta+b^2\sin^2\theta}=a\sqrt{1-k^2\sin^2\theta}$, where $k^2=1-b^2/a^2$. Its arc from 0 to $\varphi$ is $aE(\varphi,k)$. These are mathematical lengths in a coordinate plane; no physical unit is assumed.

## Complete integrals K and E

Set the upper amplitude to $\pi/2$:

$$
K(k)=F(\pi/2,k),\qquad E(k)=E(\pi/2,k).
$$

The one-argument $E(k)$ is complete; the two-argument $E(\varphi,k)$ is incomplete. The following values use the modulus $k$ and are rounded to six decimal places.

| Modulus $k$ | $K(k)$ | $E(k)$ |
| --- | --- | --- |
| 0 | 1.570796 | 1.570796 |
| 0.25 | 1.596242 | 1.545957 |
| 0.50 | 1.685750 | 1.467462 |
| 0.75 | 1.910990 | 1.318472 |
| 0.90 | 2.280549 | 1.171697 |

As $k\to1^-$, $K(k)$ diverges; $E(k)$ tends to 1. Do not linearly extrapolate a finite table to assert a finite value of $K(1)$. The first-kind integrand at $k=1$ becomes $1/\cos\theta$ and has a nonintegrable endpoint singularity.

## Worked example and a convention trap

For an ellipse with semiaxes $a=2$ and $b=\sqrt3$, $k^2=1-3/4=1/4$ and $k=1/2$. Its complete perimeter is $4aE(k)=8E(0.5)\approx11.739696$. As a check, a circle of radius 2 has perimeter $4\pi\approx12.5664$, and the ellipse should have a smaller perimeter.

Some libraries use the **parameter** $m=k^2$, rather than $k$. For example, SciPy's `ellipk(m)` and `ellipe(m)` take $m$. The table row at $k=0.5$ corresponds to input $m=0.25$ in that convention. Entering 0.5 there requests a different integral. [SciPy elliptic-integral convention](https://docs.scipy.org/doc/scipy/reference/generated/scipy.special.ellipk.html)

For small $k$, expand the integrands with the binomial series and integrate each term. This gives $K(k)=(\pi/2)[1+k^2/4+9k^4/64+\cdots]$ and $E(k)=(\pi/2)[1-k^2/4-3k^4/64-\cdots]$. The opposite signs agree with the earlier inequalities. These expansions also provide independent low-modulus checks on the table.

## Practice

1. Find $F(\pi/3,0)$ and $E(\pi/3,0)$ from the definitions.
2. A library takes $m$. Which argument gives $K(0.75)$ in the modulus table? Estimate the perimeter for $a=1$, $b=\sqrt7/4$.

> [!example]- Worked answers
> 1. Both integrands become 1, so both values are $\pi/3$.
> 2. The argument is $m=0.75^2=0.5625$. For the ellipse, $b^2=7/16$, so $k^2=9/16$ and $k=0.75$. The perimeter is $4E(0.75)\approx5.273888$.
