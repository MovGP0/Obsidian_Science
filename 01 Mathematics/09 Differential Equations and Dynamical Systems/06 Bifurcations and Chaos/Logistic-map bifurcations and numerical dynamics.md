---
title: "Logistic-map bifurcations and numerical dynamics"
---

> [!TLDR]
> Analyze fixed points, period doubling, and sensitivity in a nonlinear recurrence, then compare numerical trajectories.

## Worked lecture material

Solve $x^*=f(x^*)$ for $f(x)=\beta x(1-x)$. Rearranging gives

$$
x^*-\beta x^*(1-x^*)=0
\quad\Longleftrightarrow\quad
\beta(x^*)^2+(1-\beta)x^*=0.
$$

For $\beta\ne0$, the fixed points are $0$ and $1-1/\beta=(\beta-1)/\beta$.

If $|f'(x^*)|<1$, iteration converges to $x^*$ from a sufficiently close starting point. The notes write a geometric error bound with the base $|f'(x^*)|$. A local contraction bound follows by choosing any $q$ with $|f'(x^*)|<q<1$ and keeping the iterates in a neighborhood where $|f'|\le q$.

$$
|x_n-x^*|\le q^n|x_0-x^*|.
$$

For the logistic map,

$$
f'(x)=\beta(1-2x),\qquad
f'(0)=\beta,\qquad
f'\left(\frac{\beta-1}{\beta}\right)=2-\beta.
$$

For $0<\beta<1$, the origin attracts nearby iterates. For $1<\beta<3$, the positive fixed point attracts nearby iterates and the origin is repelling.

##### Logistic map

The lecture focuses on how to visualize the results of iterating the logistic map and how to explain them. The final project schedule lists a written report due Friday, May 5, and a 10–15 minute oral presentation during the last two lectures and the discussion. Required meetings are listed with François during the week of April 10 and with Terese during the week of April 24. The page also includes a birthday annotation.

Write $x_{n+1}=f(x_n)=\beta x_n(1-x_n)$. The fixed points are $x_1^*=0$ and $x_2^*=(\beta-1)/\beta$, with derivatives $f'(x_1^*)=\beta$ and $f'(x_2^*)=2-\beta$.

##### Example with $0<\beta<1$

Take $\beta=0.5$. At $x=1/2$ the map has value $\beta/4=1/8$. The sketch starts at $x_0$, reads $x_1=f(x_0)$ from the parabola, and uses the diagonal to feed $x_1$ back into the map.

![[Kyle Kabasares - Mathematical Modeling - Logistic map cobweb at beta one half.png|**Fig. 76** The graph of $f(x)=0.5x(1-x)$ and the diagonal $y=x$ show successive iterates moving toward the origin.]]

For this parameter value any $0\le x_0\le1$ gives $x_n\to0$. The page ends by introducing the range $1\le\beta\le2$ and the example $\beta=2$.

##### Example with $\beta=2$

Every initial point strictly between 0 and 1 gives $x_n\to1/2$. The endpoints themselves map to zero.

![[Kyle Kabasares - Mathematical Modeling - Logistic map cobweb at beta two.png|**Fig. 77** The cobweb construction shows iterates from two starting values moving toward $1/2$.]]

##### Example with $\beta=3.2$

The cobweb suggests a loop that repeats every two steps.

![[Kyle Kabasares - Mathematical Modeling - Logistic map cobweb at beta three point two.png|**Fig. 78** The sketch follows two successive iterates near a repeating orbit.]]

With $f(x)=\beta x(1-x)$, the condition for returning after two iterations is

$$
x_n=x_{n+2}
=\beta x_{n+1}(1-x_{n+1})
=\beta\bigl[\beta x_n(1-x_n)\bigr]
\bigl[1-\beta x_n(1-x_n)\bigr].
$$

This equation finds fixed points of $f\circ f$. Two distinct values $y_1,y_2$ form a two-cycle if $y_2=f(y_1)$ and $y_1=f(y_2)$. The notes describe other starting points approaching the pair as $n\to\infty$, with the even and odd subsequences approaching different members of the cycle.

As $\beta$ increases beyond the first period doubling, the logistic map can have an attracting cycle of four distinct values.

$$
y_1=f(y_4),\qquad y_2=f(y_1),\qquad
y_3=f(y_2),\qquad y_4=f(y_3).
$$

The sketch labels the first split “Hopf bifurcation.” Here the fixed-point derivative crosses $-1$ at $\beta=3$, so the split is a period-doubling bifurcation. The notes mark the onset of chaos near $\beta=3.57$.

![[Kyle Kabasares - Mathematical Modeling - Logistic map period doubling and onset of chaos.png|**Fig. 79** Schematic bifurcation diagram of long-term values of $x_n$ as $\beta$ increases. The handwritten axis is approximate.]]

##### Sample population model

The lecture lists an age-structured model and a further look at the logistic method. Time $t$ is in years. The four populations are $y_1$ for ages 0–19, $y_2$ for ages 20–39, $y_3$ for ages 40–59, and $y_4$ for ages 60 and above. The last two groups are annotated “mature” and “old,” respectively.

$$
\begin{aligned}
\frac{dy_1}{dt}&=-d_1(t)+a_2(t)y_2+a_3(t)y_3+a_1y_1+a_4y_4,\\
\frac{dy_2}{dt}&=-d_2y_2+\frac{y_1}{20}-\frac{y_2}{20}+I_2(t),\\
\frac{dy_3}{dt}&=-d_3(t)y_3+\frac{y_2}{20}+I_3(t)-\frac{y_3}{20},\\
\frac{dy_4}{dt}&=-d_4y_4+\frac{y_3}{20}+I_4(t).
\end{aligned}
$$

The first equation is transcribed as written, with $-d_1(t)$ standing alone and no explicit aging outflow. The other rows show the aging transfers between groups.

Let $M$ be the maximum capacity in the age-structured model. The symbol for the total population appears to be $\tau$.

$$
\tau=y_1+y_2+y_3+y_4,
\qquad
1-\frac{\tau}{M}.
$$

The page writes the capacity factor on its own and leaves its placement in the system unspecified.

##### Newton's method

To solve $f(x)=0$, choose an initial guess $x_0$ and iterate

$$
x_n=x_{n-1}-\frac{f(x_{n-1})}{f'(x_{n-1})}.
$$

The scalar line appears to omit the subtraction sign before the fraction. The vector formula below includes the subtraction explicitly. For $\vec F(\vec x)=\vec 0$, choose $\vec x_0$ and use the Jacobian $J$ of $\vec F$.

$$
\vec x_n=\vec x_{n-1}-J(\vec x_{n-1})^{-1}\vec F(\vec x_{n-1}).
$$

##### Logistic difference equation

A first-order recurrence has the form $y_{n+1}=g(y_n)$. For comparison, the Euler step for $y'=f(t,y)$ is $y_{n+1}=y_n+\Delta t\,f(t_n,y_n)$. The short line below the update reads $y'=f(t)$, while the update itself includes both arguments.

##### Fibonacci sequence

Use $x_{n+1}=x_n+x_{n-1}$ with $x_0=x_1=1$. This indexing gives $1,1,2,3,5,8,\ldots$.

The discussion recalls the logistic difference and differential equations.

$$
y_{n+1}=\beta y_n(1-y_n),
\qquad
\frac{dy}{dt}=\alpha y(1-y).
$$

The proposed program for the difference equation takes an initial value $y_0$, a parameter $1<\beta<4$, and a number of generations. The notes call for a phase portrait using successive generation values.

![[Kyle Kabasares - Mathematical Modeling - Successive generation values phase plot.png|**Fig. 80** A sketch plotting the value at generation $n+1$ against the value at generation $n$.]]

##### Introduction to chaos

The lecture asks how to recognize, measure, and observe chaos. In a chaotic system, small differences in initial conditions can become large within a finite time. The notes call this the butterfly effect.

Consider the predator–prey phase plane near the axes. Two nearby initial points can have markedly different trajectories, especially near the separatrix. The notes describe that separation as confined to a small region near the axes.

![[Kyle Kabasares - Mathematical Modeling - Nearby initial conditions near predator prey axes.png|**Fig. 81** The sketch marks two nearby starting points near the horizontal axis and shows their differing paths.]]

The page describes a chaotic domain as one where separation occurs from arbitrarily small perturbations and says those perturbations can point in any direction. The usual sensitivity condition requires that arbitrarily near each point there exist initial conditions whose orbits eventually separate by a fixed positive distance. Requiring every perturbation direction is stronger.

The notes list three difficulties in modeling chaotic systems.

1. Initial conditions are known only approximately.
2. The model omits some aspects of the real system.
3. Numerical errors can produce large differences in the computed results.

To study systems that may be chaotic, the notes start with a periodic reference motion. If $\vec f(\vec x_0,t)$ is the solution from initial state $\vec x_0$ and has period $T$, then

$$
\vec f(\vec x_0,t)=\vec f(\vec x_0,t+T).
$$

The page describes stroboscopic sampling as a Poincaré map. At a fixed phase $t_0$, record one measurement per period, $\vec F_i(\vec x_0)=\vec f(\vec x_0,t_0+iT)$. To compare nearby initial conditions, measure

$$
\left\|\vec F_i(\vec x_0)-\vec F_i(\vec x_0+\Delta\vec x)\right\|.
$$

![[Kyle Kabasares - Mathematical Modeling - Separation sampled once per period.png|**Fig. 82** The sketch plots the distance between the sampled trajectories against the sampling index $i$.]]

The notes model exponential separation by $\|\vec F_i(\vec x_0)-\vec F_i(\vec x_0+\Delta\vec x)\|\approx e^{\lambda t}\|\Delta\vec x\|$, where elapsed time is $t=iT$. Here $\lambda$ is a Lyapunov exponent. A positive value corresponds to exponential growth of a sufficiently small perturbation along the expanding direction. The handwritten line uses $\lambda=0$ to indicate no chaos. Zero for a measured direction indicates no exponential growth in that direction.

**Example.** For $y''+y=0$, the characteristic equation $r^2+1=0$ gives $r=\pm i$. Thus

$$
y(x)=c_1e^{ix}+c_2e^{-ix}=A\cos x+B\sin x.
$$

The initial conditions on the page are $y(0)=1$ and $y'(0)=0$. They give $A=1$ and $B=0$.

For $y''+y=0$ with $y(0)=1$ and $y'(0)=0$, the solution is $y(t)=\cos t$, with $y'(t)=-\sin t$ and $y''(t)=-\cos t$. In the $(y,y')$ plane the reference trajectory is the unit circle.

![[Kyle Kabasares - Mathematical Modeling - Oscillator phase circle with initial perturbation.png|**Fig. 83** The perturbation $\Delta\vec x$ shifts the starting point along the horizontal axis of the phase plane.]]

Apply $\Delta\vec x=(\epsilon,0)$ with a small positive $\epsilon$. The perturbed solution has $y_1(0)=1+\epsilon$ and $y_1'(0)=0$, so

$$
y_1(t)=(1+\epsilon)\cos t,\qquad
y_1''(t)=-(1+\epsilon)\cos t.
$$

Both trajectories have period $T=2\pi$ in these normalized coordinates.

![[Kyle Kabasares - Mathematical Modeling - Concentric oscillator trajectories.png|**Fig. 84** The reference and perturbed solutions trace concentric circles of radii 1 and $1+\epsilon$.]]

At each sample, $\|\vec F_i(\vec x_0)-\vec F_i(\vec x_0+\Delta\vec x)\|=\epsilon$. The separation stays constant, giving zero exponential growth.

##### The Lorenz system and optimization

The day of the month has a handwritten 5 above an overwritten digit. The agenda lists the Lorenz system, homework feedback, and an introduction to optimization. The notes date the Lorenz system to the 1960s and write it as

$$
\frac{dx}{dt}=\sigma(y-x),\qquad
\frac{dy}{dt}=x(\rho-z)-y,\qquad
\frac{dz}{dt}=xy-\beta z,
\qquad \sigma,\beta,\rho>0.
$$

##### Numerical optimization

The goal is to maximize $f(\vec x)$, sometimes with constraints on $\vec x$. Where $\nabla f$ is nonzero, it points in the direction of steepest increase. The simplest algorithm moves from a starting point in that direction.

![[Kyle Kabasares - Mathematical Modeling - First gradient ascent step inside the domain.png|**Fig. 85** A gradient step from $P_0=(x_0,y_0)$ toward $P_1$ in the domain $D$.]]

With step size $h$, the first update is $\vec P_1=\vec P_0+h\nabla f(x_0,y_0)$.

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $t$, $1/\alpha$ | $\unit{s}$ | Elapsed time | Time in the population model and time for one factor of $e$ of exponential growth, expressed in the chosen time unit. |
| $\alpha$ | $\unit{s^{-1}}$ | Population growth rate | Fractional rate of increase, expressed in the inverse of the chosen time unit. |
| $M$ | 1 | Carrying capacity | Population that the modeled resources can sustain at equilibrium. |
| $\beta$ | $\unit{s^{-1}}$ | Crowding coefficient | Coefficient of the quadratic reduction in growth when population is counted as a dimensionless number. |
| $t_0$ | $\unit{s}$ | Inflection time | Time at which the logistic population reaches half its carrying capacity. |
| $\beta$ | 1 | Predator effect coefficient | Reciprocal of the wolf count at which the rabbit growth term vanishes. |
| $\epsilon$ | 1 | Rate ratio | Ratio of the wolf decline rate to the rabbit growth rate. |
| $d_2$, $d_3(t)$, $d_4$ | $\unit{yr^{-1}}$ | Death-rate coefficients | Per-capita loss coefficients for the three older groups. |
| $d_1(t)$, $I_i(t)$ | $\unit{yr^{-1}}$ | Population flows | Direct loss and external inflow terms in the equations as written, with population counted as a dimensionless number. |
| $\tau$ | 1 | Total population | Sum of the four age-group populations. |
| $T$ | $\unit{s}$ | Sampling period | Time between successive measurements at the same phase. |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $t$ | — | Iron surplus | Iron above the minimum required per serving, in the unspecified iron units of the exercise. |
