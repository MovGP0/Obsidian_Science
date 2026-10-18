---
title: "Constraints and free endpoints"
catalogue_ids:
  - "10.3.3"
---

> [!TLDR]
> Constraints restrict the allowed variations; an integral constraint introduces a multiplier, while a free endpoint introduces a boundary condition.

## Three different restrictions

Start with [[Functionals and stationary curves]]. Fixing $y(a)$ restricts a value at one point. Requiring $\int_a^by\,dx=M$ restricts the entire curve. Requiring $g(x,y(x))=0$ restricts it at every point. These are distinct conditions, and the corresponding multipliers are different. An integral condition usually has a constant multiplier; a pointwise condition can require a multiplier function of $x$.

For a scalar integral constraint $K[y]=M$, suppose a constrained stationary curve is regular: there is an allowed endpoint-preserving direction in which $\delta K$ is nonzero. The multiplier theorem then gives a constant $\lambda$ such that

$$
\delta(J+\lambda K)[y;\eta]=0
$$

for every endpoint-preserving direction $\eta$. In practice, apply the Euler–Lagrange equation to the combined integrand $F+\lambda G$ when $K=\int G\,dx$, and determine $\lambda$ from the constraint. Subtracting the constant $\lambda M$ changes no variation. The regularity assumption prevents division by a vanishing constraint gradient. Without it, the general multiplier statement uses $\lambda_0J+\lambda K$ with the two constants not both zero, and one cannot assume $\lambda_0=1$.

For a regular pointwise relation $g(x,y_1,y_2)=0$, one may instead eliminate one unknown locally or add $\lambda(x)g$ to the integrand. Variation with respect to $\lambda(x)$ returns the constraint. The gradient of $g$ with respect to the unknown values must not vanish for the usual regular multiplier argument. An inequality such as $y\geq0$ can allow only one-sided changes at contact points. A simple equality multiplier formula does not settle such a problem.

## Worked example: fixed average and fixed ends

Minimize $J[y]=\int_0^1y'^2\,dx$ subject to $y(0)=y(1)=0$ and $\int_0^1y\,dx=M$, where $M$ is a prescribed real number. The combined integrand is $y'^2+\lambda y$. Its equation gives $2y''=\lambda$, so the endpoint values give

$$
y_*(x)=c\,x(1-x).
$$

Since $\int_0^1x(1-x)dx=1/6$, the constraint sets $c=6M$ and $\lambda=-24M$. Thus the square-slope cost is $J[y_*]=12M^2$.

To prove a minimum, any competitor can be written $y_*+h$ with $h(0)=h(1)=0$ and $\int_0^1h\,dx=0$. Expansion gives

$$
J[y_*+h]-J[y_*]
=-2\int_0^1y_*''h\,dx+\int_0^1h'^2dx
=\int_0^1h'^2dx.
$$

The first integral vanishes because $y_*''$ is constant and $h$ has zero integral. The result is nonnegative and has equality only at $h=0$. This verifies the constrained global minimum, including $M=0$.

## Free values at fixed coordinates

The boundary term in the first variation is $[F_p\eta]_a^b$. If the coordinate $b$ is fixed but the value $y(b)$ is free, then $\eta(b)$ is arbitrary. After the interior equation holds, stationarity requires the **natural boundary condition**

$$
F_p(b,y(b),y'(b))=0.
$$

It need not say $y'(b)=0$. For $F=\tfrac12(y'-2)^2$, it says $y'(b)=2$. With $y(0)=0$ on $[0,1]$, the interior equation is $y''=0$ and the stationary curve is $y=2x$. Its cost is zero, which directly proves it minimizes this nonnegative integral. An extra endpoint cost $B(y(b))$ changes the condition to $F_p+B'=0$.

## Moving endpoints and transversality

Now let the final coordinate move too. Write its small changes as $(\Delta b,\Delta Y)$. The change of the old function at the old coordinate is $\eta(b)=\Delta Y-y'(b)\Delta b$ to first order. Moving the upper integration limit contributes $F(b)\Delta b$. The full endpoint contribution is therefore

$$
F_p\Delta Y+(F-y'F_p)\Delta b.
$$

If the endpoint lies on the smooth graph $Y=\psi(b)$, then $\Delta Y=\psi'(b)\Delta b$. Since $\Delta b$ is free, the **transversality condition** is

$$
F+(\psi'-y')F_p=0
$$

at the endpoint. This formula assumes no extra endpoint cost and a regular endpoint graph. It is not a general instruction that curves meet at right angles.

![[catalogue-ch10-free-endpoint.svg|**Fig. C.ch10.2** For ordinary length, a shortest segment from a fixed point meets a free terminal line at a right angle.]]

For ordinary length, $F=\sqrt{1+y'^2}$, the condition becomes $1+y'\psi'=0$ when both slopes are finite. These two slopes multiply to $-1$, so the curves are perpendicular. For example, the shortest path from $(0,0)$ to $Y=2-X$ is the segment to $(1,1)$. Its slope is $1$, the terminal line has slope $-1$, and its length is $\sqrt2$. This special geometric result is shown in Fig. C.ch10.2. [[17.05 Boundary terms]] treats fixed-coordinate and moving-coordinate endpoints separately.

## Practice

1. In the fixed-average example, take $M=1/3$. Find $y_*$ and $J[y_*]$.
2. Minimize $\int_0^1\tfrac12y'^2dx+\tfrac12(y(1)-3)^2$ with $y(0)=0$ and final value free.

### Worked answers

1. $c=6M=2$, so $y_*=2x(1-x)$ and $J=12/9=4/3$. Its integral is $2/6=1/3$, so the constraint holds.
2. The interior equation gives $y=cx$. The endpoint condition is $y'(1)+y(1)-3=0$, so $2c=3$ and $y=3x/2$. The cost as a function of $c$ is $c^2/2+(c-3)^2/2=(c-3/2)^2+9/4$. More generally, expansion about this curve gives a positive sum of $\tfrac12\int h'^2$ and $\tfrac12h(1)^2$, so the curve is the unique global minimizer.
