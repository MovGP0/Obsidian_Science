---
title: "Solve equations with Laplace transforms"
catalogue_ids:
  - "15.2.3"
  - "15.2.3.1"
  - "15.2.3.2"
  - "15.2.3.3"
---

> [!TLDR]
> Laplace transformation uses initial data to turn constant-coefficient differential equations into algebra and some variable-coefficient equations into new differential equations.

## Read the equation and its data

Use [[Laplace transform rules and impulses]] and [[Invert Laplace transforms]] first. A differential equation relates an unknown function to its derivatives. An initial-value problem also supplies values at $t=0$. A transform does not supply missing data. The notation $Y(s)=\mathcal L[y](s)$ keeps the unknown function and its transformed function distinct.

For a constant-coefficient equation

$$
ay''+by'+cy=r(t),\qquad y(0)=y_0,\quad y'(0)=v_0,
$$

the transform rules give

$$
(as^2+bs+c)Y(s)=R(s)+a(sy_0+v_0)+by_0.
$$

Divide by the polynomial, invert, and verify the result. Existence of the transforms requires suitable growth of the solution and forcing; for continuous forcing of exponential order and constant coefficients these conditions hold. This method is especially useful when the forcing is delayed or piecewise defined. See [[14.04 Constant-coefficient equations]] for an alternative solution method.

## Worked example with constant coefficients

Solve $y'+2y=1$ with $y(0)=3$. Its transform is $sY-3+2Y=1/s$, so

$$
Y=\frac{3+1/s}{s+2}=\frac1{2s}+\frac{5}{2(s+2)}.
$$

Therefore $y(t)=1/2+(5/2)e^{-2t}$. At zero this is $3$. Its derivative is $-5e^{-2t}$, while $2y=1+5e^{-2t}$; the sum is exactly $1$. Both checks are needed. The long-run value $1/2$ also makes sense because the derivative then tends to zero.

For an impulse forcing, take $y'+y=\delta(t-a)$ with $a>0$ and $y(0)=0$. Transforming gives $Y=e^{-as}/(s+1)$ and hence $y=H(t-a)e^{-(t-a)}$. Integration of the equation over an interval shrinking onto $a$ gives a jump of $1$. This solution is understood distributionally at the jump and satisfies the ordinary equation away from it.

For a second-order example with an ordinary constant forcing, take $y''+y=1$, $y(0)=0$, $y'(0)=0$. The transformed equation is $(s^2+1)Y=1/s$, so $Y=1/s-s/(s^2+1)$. Inversion gives $y=1-\cos t$. At zero, both the value and derivative are zero; the second derivative is $\cos t$, and adding the original function gives $1$. This example shows why a zero initial value does not mean a zero solution when a forcing term remains. It also shows that polynomial division and partial fractions can be replaced by recognizing a simple difference of table pairs.

## Variable coefficients

Multiplication by the independent variable becomes differentiation in $s$. It does not usually leave an algebraic equation. For example,

$$
\mathcal L[ty']=-\frac{d}{ds}(sY-y(0))=-Y-sY'.
$$

Consider $(t+1)y'+y=0$, $y(0)=1$. Transforming yields

$$
(-Y-sY')+(sY-1)+Y=0,
\qquad Y'-Y=-\frac1s.
$$

For real $s>0$, multiply by $e^{-s}$ and use the decay appropriate to a Laplace transform. The solution is

$$
Y(s)=e^s\int_s^\infty\frac{e^{-u}}u\,du.
$$

To recognize it, transform $1/(1+t)$ and substitute $u=s(1+t)$; this gives the same expression. Thus $y(t)=1/(1+t)$. Its original equation checks immediately. The transformed differential equation has a homogeneous term $Ce^s$. The usual bound $Y(s)\to0$ as $s\to+\infty$ excludes it. This illustrates a limitation: data about the transform class can be necessary to select the correct transformed solution. A direct first-order method would be shorter for this example; the purpose here is to show what a variable coefficient does.

## Partial differential equations

A **partial differential equation** has several independent variables. Transform one variable while leaving the others untouched. On $x\in\mathbb R$, $t\geq0$, consider

$$
u_t+cu_x=0,\qquad u(x,0)=f(x),\qquad c>0.
$$

Here $c$ is simply a fixed mathematical parameter. Define $U(x,s)=\int_0^\infty u(x,t)e^{-st}dt$. Under smoothness and growth assumptions that permit differentiating under the integral, the equation becomes $cU_x+sU=f(x)$. An integrating factor in $x$ gives the bounded solution, for bounded $f$ and real $s>0$,

$$
U(x,s)=\frac1c\int_{-\infty}^x e^{-s(x-\xi)/c}f(\xi)\,d\xi
=\int_0^\infty e^{-st}f(x-ct)\,dt.
$$

The last expression identifies $u(x,t)=f(x-ct)$. Differentiate it: $u_t=-cf'(x-ct)$ and $u_x=f'(x-ct)$, so the equation and initial value hold. We selected a bounded condition over the entire $x$ line; a half-line problem instead needs an appropriate boundary value. The transformed equation still has an $x$ derivative. Transforming one variable does not remove derivatives in all variables.

## Convolution and general forcing

Define $(f*g)(t)=\int_0^tf(t-v)g(v)dv$ for causal inputs, which are taken as zero for negative arguments. Under absolute-convergence assumptions, changing integration order proves $\mathcal L[f*g]=FG$. Thus the solution of $y'+ay=r$, $y(0)=0$, is

$$
y(t)=\int_0^te^{-a(t-v)}r(v)\,dv.
$$

This formula also follows by an integrating factor, and it works when partial fractions are unavailable. It separates the effect of the equation from the selected forcing.

## Practice

1. Solve $y''+y=0$, $y(0)=0$, $y'(0)=2$ by Laplace transformation.
2. Solve $y'+y=H(t-2)$, $y(0)=0$.

> [!example]- Worked answers
> 1. The transformed equation is $(s^2+1)Y=2$. Hence $y=2\sin t$. Its initial derivative is $2$, which checks the missing-data-sensitive term.
> 2. The forcing transforms to $e^{-2s}/s$, so $Y=e^{-2s}/[s(s+1)]$. Since $1/[s(s+1)]=1/s-1/(s+1)$, the result is $H(t-2)(1-e^{-(t-2)})$. It is zero before $2$ and joins continuously there.
