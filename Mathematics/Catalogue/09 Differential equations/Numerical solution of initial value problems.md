---
title: "Numerical solution of initial value problems"
catalogue_ids:
  - "9.1.1.5"
---

> [!TLDR]
> Euler, improved Euler, and Runge–Kutta methods approximate initial-value solutions by sampled slopes, with errors controlled by smoothness, step size, and stability.

## Why approximate an equation?

Read [[First-order initial value problems]] and [[07.08 Linear approximation]]. An initial-value problem $y'=f(x,y)$, $y(x_0)=y_0$ may have no usable elementary formula. A numerical method computes values $Y_n$ at grid points $x_n=x_0+nh$. The capital $Y_n$ distinguishes an approximation from the exact value $y(x_n)$. The step $h$ is normally positive for forward calculation.

The integral form is

$$
y(x_{n+1})=y(x_n)+\int_{x_n}^{x_n+h}f(s,y(s))\,ds.
$$

Numerical methods replace this unknown integral by estimates built from accessible slopes. They need a domain where $f$ is defined and enough regularity for the claimed error order. A number output by an algorithm is not evidence that the exact solution exists past a pole.

## Euler's method

Replace the integral by the starting slope times the step:

$$
Y_{n+1}=Y_n+h f(x_n,Y_n).
$$

This is **Euler's method**. Its straight step is the tangent approximation from calculus. If the exact solution has a bounded second derivative, Taylor's formula shows that one step started from the exact value has error $O(h^2)$. Over a fixed bounded interval, stability and a Lipschitz bound allow the accumulated global error to be $O(h)$. The meanings differ: local error concerns one exact-start step; global error includes previous errors.

For $y'=y$, $y(0)=1$, with $h=1/2$, Euler gives $Y_1=1.5$ and $Y_2=2.25$. The exact endpoint is $e\approx2.71828$. Euler remains below the exact curve because positive exponential curvature makes the graph rise above each tangent step. With four steps of $h=1/4$, $Y_4=(1.25)^4=2.44140625$. The smaller step improves the answer, although it does not make it exact.

## Improved Euler: predict and correct

The explicit trapezoidal method, also called Heun's method or improved Euler, first predicts an endpoint and then averages two slopes:

$$
k_1=f(x_n,Y_n),\qquad
k_2=f(x_n+h,Y_n+hk_1),\qquad
Y_{n+1}=Y_n+\frac h2(k_1+k_2).
$$

The second slope uses a prediction; it is not the unknown true endpoint slope. Under suitable smoothness and stability assumptions the global error is $O(h^2)$. For $y'=y$, one step multiplies by $1+h+h^2/2$. With $h=1/2$, $Y_1=1.625$ and $Y_2=2.640625$, closer to $e$ than the two Euler steps.

An implicit trapezoidal method instead uses $f(x_{n+1},Y_{n+1})$ in the average and must solve an equation for $Y_{n+1}$. Similar names do not make the explicit and implicit algorithms identical.

## Classical fourth-order Runge–Kutta

The standard RK4 scheme uses four slope samples:

$$
\begin{aligned}
k_1&=f(x_n,Y_n),\\
k_2&=f(x_n+h/2,Y_n+hk_1/2),\\
k_3&=f(x_n+h/2,Y_n+hk_2/2),\\
k_4&=f(x_n+h,Y_n+hk_3),\\
Y_{n+1}&=Y_n+\frac h6(k_1+2k_2+2k_3+k_4).
\end{aligned}
$$

For smooth nonstiff problems its fixed-interval global error is $O(h^4)$. Here each $k_i$ is a slope, so the factor $h$ belongs outside the weighted sum. Some software definitions include $h$ inside their $k_i$; never combine the two conventions.

For one step of $h=1$ in $y'=y$, $Y_0=1$, the slopes are $1$, $1.5$, $1.75$, and $2.75$. Thus $Y_1=1+(1+3+3.5+2.75)/6=65/24\approx2.70833$. This is a good approximation in this example, but one successful large step is not a general step-size rule.

## Stability can dominate accuracy

For the test equation $y'=-ay$ with $a>0$, the true solution decays. Euler gives $Y_{n+1}=(1-ah)Y_n$. Repeated values decay only when $|1-ah|<1$, which means $0<ah<2$. If $a=10$ and $h=0.3$, the factor is $-2$, so the numerical output alternates and grows even though the true curve decays.

At $ah=2$ the numerical amplitude stays constant and does not imitate the true decay. At $ah=1$ the numerical value becomes zero after one step; that is stable but can still be inaccurate. Stability and accuracy answer different questions. A **stiff** problem forces a much smaller explicit step for stability than the visible slow behavior seems to require; implicit methods can help.

Compare calculations with steps $h$ and $h/2$ on the same interval. If errors are in the expected asymptotic regime, an order-$p$ method reduces its leading error by about $2^p$. This is an error diagnostic, not a proof. Roundoff, nonsmooth data, singularities, and stiffness can invalidate the expected trend. Check event locations and residuals as well as endpoint values.

## Practice

1. Apply one Euler step and one Heun step with $h=0.1$ to $y'=x+y$, $y(0)=1$.
2. For $y'=-4y$, determine the positive Euler steps that give strict decay in magnitude.

## Worked answers

1. Euler uses $f(0,1)=1$, so $Y_1=1.1$. Heun predicts the same $1.1$, then uses $k_2=f(0.1,1.1)=1.2$. Its answer is $1+0.1(1+1.2)/2=1.11$. The exact solution $2e^x-x-1$ gives about $1.11034$ at $0.1$.
2. The multiplier is $1-4h$. Strict decay requires $-1<1-4h<1$, hence $0<h<1/2$. The endpoints are excluded because their multiplier magnitude is $1$.
