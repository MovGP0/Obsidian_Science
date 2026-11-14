---
title: "Constrained estimation and model fitting"
---

> [!TLDR]
> Use Lagrange multipliers and likelihood scores to fit constrained models, including paired-comparison ratings.

## Worked lecture material

The gradient $\nabla f$ points in the direction of fastest increase where it is nonzero.

![[Kyle Kabasares - Mathematical Modeling - Objective gradients along a circular constraint.png|**Fig. 52** Arrows show possible directions of $\nabla f$ at points of the constraint curve $g(\vec x)=0$.]]

At a local maximum or minimum of $f$ restricted to a smooth constraint curve, the derivative along the curve is zero. Thus $\nabla f$ is perpendicular to its tangent. The notes assume $f$ is twice differentiable.

##### Constrained optimization

The page marks this lecture as missed. To maximize $f(\vec x)$ subject to $g(\vec x)=0$, use the fact that $\nabla g$ is normal to the level curve wherever $\nabla g\ne\vec 0$. At a regular constrained extremum $\vec x^*$ the gradients are linearly dependent. The notes describe this as parallel vectors with zero cross product, or one vector being a scalar multiple of the other.

$$
\nabla f(\vec x^*)=\lambda\nabla g(\vec x^*),
\qquad
g(\vec x^*)=0.
$$

The scalar $\lambda$ is the Lagrange multiplier.

**Example.** Maximize $f(x,y)=x^2-2y^2$ subject to $x^2+y^2=1$.

![[Kyle Kabasares - Mathematical Modeling - Unit-circle constraint for the quadratic example.png|**Fig. 53** The feasible points lie on the unit circle.]]

Form $P(\vec x,\lambda)=f(\vec x)-\lambda g(\vec x)$ and find its critical points. In two variables the equations are

$$
P_x=f_x-\lambda g_x=0,\qquad
P_y=f_y-\lambda g_y=0,\qquad
P_\lambda=-g(\vec x)=0.
$$

The first two give $\nabla f=\lambda\nabla g$, and the last recovers the constraint.

For the quadratic example, the page uses $g(x,y)=1-x^2-y^2$, which has the same zero set as the earlier choice. Then

$$
P(x,y,\lambda)=x^2-2y^2-\lambda(1-x^2-y^2).
$$

The conditions are

$$
2x(1+\lambda)=0,\qquad 2y(\lambda-2)=0,\qquad x^2+y^2=1.
$$

If $\lambda=-1$, then $y=0$ and $x=\pm1$. If $x=0$, the constraint gives $y=\pm1$, so $\lambda=2$. The handwritten second branch appears to label the resulting $\pm1$ values with $\lambda$. The constraint gives those values for $y$. The candidates are $(1,0)$, $(-1,0)$, $(0,1)$, and $(0,-1)$.

##### Return to the two-team model

Team 1 has rating $p_1$ and $w_1$ wins, and team 2 has rating $p_2$ and $w_2$ wins. The probability of the observed win counts is

$$
\binom{w_1+w_2}{w_1}
\left(\frac{p_1}{p_1+p_2}\right)^{w_1}
\left(\frac{p_2}{p_1+p_2}\right)^{w_2}.
$$

Under the constraint $p_1+p_2=1$, maximize $\binom{w_1+w_2}{w_1}p_1^{w_1}p_2^{w_2}$.

Take the logarithm of the win-count probability under $p_1+p_2=1$.

$$
f(p_1,p_2)=\log\Pr(\text{observed win counts}\mid p_1,p_2)
=w_1\log p_1+w_2\log p_2+\log\binom{w_1+w_2}{w_1}.
$$

The equality constraint is $g(p_1,p_2)=1-p_1-p_2=0$.

##### Rating a new team

The page recalls stationarity equations such as $\partial F/\partial p_1=0$ and $\partial F/\partial p_2=0$ for a function of the ratings. It lists fixed-point iteration and Newton's method as ways to solve equations.

Suppose $N$ teams have known ratings $p_1,\ldots,p_N$. A new “Dream Team” with unknown rating $p$ beats the first $k$ teams and loses to the rest. Its win probability against team $i$ is $p/(p+p_i)$. The notes give $k/N$ as a rough starting point. The new rating is estimated on the existing scale without a new sum constraint.

For independent results the likelihood is

$$
f(p)=\prod_{i=1}^k\frac{p}{p+p_i}
\prod_{i=k+1}^N\frac{p_i}{p+p_i}.
$$

The log-likelihood is

$$
\log f(p)=\sum_{i=1}^k\log\left(\frac{p}{p+p_i}\right)
+\sum_{i=k+1}^N\log\left(\frac{p_i}{p+p_i}\right).
$$

The product in the notes gives the denominators for both sums. The final handwritten line says to set $\log f(p)=0$. An interior maximum instead requires $d(\log f(p))/dp=0$.

Differentiate the new team's log-likelihood.

$$
\begin{aligned}
\frac{d}{dp}\log f(p)
&=\sum_{i=1}^k\left(\frac1p-\frac1{p+p_i}\right)
-\sum_{i=k+1}^N\frac1{p+p_i}\\
&=\frac{k}{p}-\sum_{i=1}^N\frac1{p+p_i}.
\end{aligned}
$$

An interior estimate solves $k/p=\sum_{i=1}^N 1/(p+p_i)$. The notes observe that the model uses the strength of the schedule, so stronger opponents can raise the estimate for the same number of wins. The likelihood distinguishes which teams were beaten, but changing the identities of the defeated teams while holding the schedule and the win total fixed only changes a factor independent of $p$. The estimate is therefore unchanged by that change in outcomes.

The notes say there is no maximum-likelihood estimator if $k=N$ or $k=0$. For positive opponent ratings and $p>0$, there is no interior maximum in either case. With all wins the supremum is approached as $p\to\infty$. With all losses the supremum is approached as $p\to0^+$, and $p=0$ attains it if that endpoint is allowed.

##### Equal opponent ratings

If $p_i=p_0$ for every $i$ and $0<k<N$, the stationarity equation gives

$$
\frac{k}{p}=\frac{N}{p+p_0},\qquad
1+\frac{p_0}{p}=\frac Nk,\qquad
\widehat p=\frac{kp_0}{N-k}.
$$

**Example.** The new team wins $k=2$ of $N=3$ games against opponents rated $p_1=1/4$, $p_2=1/2$, and $p_3=3/4$. Its rating $p$ satisfies

$$
\frac{2}{p}
=\frac{1}{p+1/4}+\frac{1}{p+1/2}+\frac{1}{p+3/4}.
$$

The handwritten calculation combines the terms over a common denominator and gives $p^3-(11/16)p-6/64=0$, with $p\approx0.89$. Clearing the denominators in the displayed score equation gives

$$
p^3-\frac{11}{16}p-\frac{3}{16}=0,
\qquad
\widehat p\approx0.94161.
$$

The constant term is $-2(1/4)(1/2)(3/4)=-3/16$. The notes remark that the likelihood varies weakly with $p$ and ask whether the expected win fraction is $2/3$. Using the handwritten estimate $p\approx0.89$, they calculate a mean win probability of about $0.654$. At the corrected estimate the score equation gives

$$
\frac13\sum_{i=1}^3\frac{\widehat p}{\widehat p+p_i}=\frac23.
$$

The notes connect this question to unbiasedness. The fitted expected win fraction follows directly from the score equation. Unbiasedness concerns the expectation of the rating estimator over repeated samples.

##### Lagrange multipliers

To optimize $f(x,y,z)$ subject to $g(x,y,z)=k$, form $F(x,y,z,\lambda)=f(x,y,z)-\lambda(g(x,y,z)-k)$ and solve

$$
F_x=F_y=F_z=F_\lambda=0.
$$

Evaluate $f$ at the resulting candidate points.

**Example.** Find the constrained extremum of $C(x,y)=6x^2+12y^2$ subject to $x+y=90$. Define

$$
F(x,y,\lambda)=6x^2+12y^2-\lambda(x+y-90)
=6x^2+12y^2-\lambda x-\lambda y+90\lambda.
$$

The stationarity equations are

$$
\begin{aligned}
F_x&=12x-\lambda=0, & x&=\frac{\lambda}{12},\\
F_y&=24y-\lambda=0, & y&=\frac{\lambda}{24},\\
F_\lambda&=-x-y+90=0.
\end{aligned}
$$

Substitute the first two expressions into the third equation.

$$
-\frac{\lambda}{12}-\frac{\lambda}{24}+90
=-\frac{3\lambda}{24}+90=0.
$$

It follows that $\lambda/24=30$, so $\lambda=720$, $x=720/12=60$, and $y=720/24=30$. Substitution into the objective gives $C(60,30)=6(60)^2+12(30)^2=32{,}400$. The notes classify this as a minimum and compare it with the larger value at the nearby feasible point $(61,29)$. Along the constraint, $C(x,90-x)=18(x-60)^2+32{,}400$, which confirms the minimum.

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\lambda$ | $\unit{s^{-1}}$ | Lyapunov exponent | Exponential rate of growth or decay of a perturbation in time. |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
