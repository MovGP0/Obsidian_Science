---
title: "Initial value algorithms"
catalogue_ids:
  - "19.4"
  - "19.4.1"
  - "19.4.1.1"
  - "19.4.1.2"
  - "19.4.1.3"
  - "19.4.1.4"
  - "19.4.1.5"
---

> [!TLDR]
> An initial value algorithm advances a differential equation in steps; consistency, stability, and step size determine its accuracy.

## Entry route and notation

Read [[07.03 The derivative]], [[08.01 Definite integrals]], and [[14.02 Solutions and data]]. An initial value problem specifies a slope and one starting value:

$$
y'(t)=f(t,y(t)),\qquad y(t_0)=y_0.
$$

The independent variable $t$ is simply a real coordinate in this article. It need not describe time. Choose a step $h>0$ and grid $t_n=t_0+nh$. Write $Y_n$ for the computed estimate of the exact value $y(t_n)$. A useful basic assumption is that $f$ is continuous and locally Lipschitz in $y$; this supports local existence and uniqueness. Smoothness beyond this is needed for the order claims below.

## Euler's polygonal method

Use the slope at the left endpoint for one straight segment:

$$
Y_{n+1}=Y_n+h f(t_n,Y_n).
$$

The connected straight segments form Euler's polygon. Taylor's formula gives $y(t+h)=y(t)+hy'(t)+O(h^2)$ when $y''$ is bounded. Thus one exact-start step has error $O(h^2)$, but about $1/h$ steps on a fixed interval usually yield global error $O(h)$. The global statement also requires stability, not only a local Taylor expansion.

For $y'=y$, $y(0)=1$, and $h=0.1$, Euler gives $Y_1=1.1$ and $Y_2=1.21$. The exact values are $e^{0.1}\approx1.105170$ and $e^{0.2}\approx1.221403$. Euler underestimates here because the exact graph bends upwards.

## Runge–Kutta methods

A Runge–Kutta method samples several slopes within a step. The explicit midpoint method first predicts a midpoint, then uses its slope:

$$
k_1=f(t_n,Y_n),\qquad
k_2=f(t_n+h/2,Y_n+hk_1/2),\qquad
Y_{n+1}=Y_n+hk_2.
$$

It has global order $2$ for sufficiently smooth $f$ on a fixed interval where the solution and derivatives remain bounded. For the same example, $k_1=1$, $k_2=1.05$, and $Y_1=1.105$.

Classical RK4 uses

$$
\begin{aligned}
k_1&=f(t_n,Y_n),\\
k_2&=f(t_n+h/2,Y_n+hk_1/2),\\
k_3&=f(t_n+h/2,Y_n+hk_2/2),\\
k_4&=f(t_n+h,Y_n+hk_3),\\
Y_{n+1}&=Y_n+\frac h6(k_1+2k_2+2k_3+k_4).
\end{aligned}
$$

For $y'=y$ and $h=0.1$, its first value is $1.1051708333$. The fourth-order global accuracy assumes sufficient derivatives and a stable fixed-interval computation. Four slope samples do not supply an automatic error certificate. Embedded Runge–Kutta pairs estimate local error by comparing two orders and adjust $h$.

## Multistep and predictor–corrector methods

Multistep methods reuse earlier slopes. The two-step Adams–Bashforth formula is

$$
Y_{n+1}=Y_n+\frac h2(3f_n-f_{n-1}),\qquad f_n=f(t_n,Y_n).
$$

It integrates the linear extrapolant of the two known slopes and has order $2$. A starting method must supply $Y_1$ with suitable accuracy. The trapezoidal Adams–Moulton corrector is

$$
Y_{n+1}=Y_n+\frac h2[f_n+f(t_{n+1},Y_{n+1})].
$$

This is implicit: the unknown appears on both sides. In a predictor–corrector scheme, first predict by Adams–Bashforth, evaluate a new slope at that prediction, then insert it into the trapezoidal formula. One correction is an explicit combined algorithm; it does not have exactly the same stability as fully solving the implicit equation. Repeated corrections are a fixed-point iteration and need a condition such as $hL/2<1$, where $L$ is a Lipschitz constant in $y$.

## Consistency, zero-stability, and convergence

**Consistency** means the local defect, divided by $h$, tends to zero for the exact solution. **Zero-stability** controls amplification of starting and local perturbations as $h\to0$ on a fixed interval. **Convergence** means $\max_n|Y_n-y(t_n)|\to0$. For consistent, zero-stable linear multistep methods applied under standard Lipschitz assumptions with convergent starting values, convergence follows.

For $\sum_{j=0}^k\alpha_jY_{n+j}=h\sum_{j=0}^k\beta_j f_{n+j}$, put $\rho(z)=\sum_j\alpha_jz^j$. Zero-stability requires all its roots to have modulus at most $1$ and every unit-modulus root to be simple. Adams–Bashforth two-step has $\rho(z)=z^2-z$, so roots $0$ and $1$ pass. This root condition is explained in [Driscoll and Braun, zero-stability](https://fncbook.github.io/v1.0/ivp/zerostability.html). A full convergence proof is beyond this introductory lesson.

Absolute stability is a separate fixed-step question. For $y'=\lambda y$, Euler multiplies each value by $1+h\lambda$. Decay is reproduced only when $|1+h\lambda|<1$. With real $\lambda<0$, this requires $0<h<-2/\lambda$. For $\lambda=-100$, $h=0.1$ gives multiplier $-9$ and a growing numerical answer, although the exact solution decays. Reducing $h$ to $0.01$ gives multiplier $0$. Accuracy may still require smaller steps.

## Practice

1. Take one explicit midpoint step for $y'=t+y$, $y(0)=1$, with $h=0.2$.
2. For $y'=-4y$, determine the Euler step range that gives strict decay.

> [!example]- Worked answers
> 1. $k_1=1$. The predicted midpoint is $1+0.1=1.1$ at $t=0.1$, so $k_2=1.2$ and $Y_1=1+0.2(1.2)=1.24$.
> 2. Require $|1-4h|<1$, so $-1<1-4h<1$. For positive steps this gives $0<h<1/2$. The endpoints give a multiplier of modulus $1$ and therefore no strict decay.
