---
title: "Least-squares and numerical calculus review problems"
---

> [!TLDR]
> Review continuous fitting, quadrature, and finite differences through explicit final-exam calculations.

## Worked lecture material

##### Least-squares criterion

The notes attribute this review to PatrickJMT. The sketch motivates a linear model for weight as a function of height. For vertical residuals $d_i$, choose the line that minimizes $D=d_1^2+\cdots+d_m^2$.

![[Kyle Kabasares - Numerical Analysis - Weight versus height regression.png|**Fig. 33** The fitted line is chosen by minimizing squared vertical deviations in the weight measurements.]]

For general data $(x_i,y_i)$, $i=1,\ldots,m$, fit $f(x)=a_0+a_1x$ by minimizing

$$
E(a_0,a_1)=\sum_{i=1}^m\bigl[y_i-(a_0+a_1x_i)\bigr]^2.
$$

Setting both partial derivatives to zero gives $-2\sum_i[y_i-(a_0+a_1x_i)]=0$ and $-2\sum_i x_i[y_i-(a_0+a_1x_i)]=0$. Rearrange to obtain

$$
\begin{aligned}
ma_0+\left(\sum_{i=1}^m x_i\right)a_1&=\sum_{i=1}^m y_i,\\
\left(\sum_{i=1}^m x_i\right)a_0+\left(\sum_{i=1}^m x_i^2\right)a_1&=\sum_{i=1}^m x_i y_i.
\end{aligned}
$$

The matrix form of the linear normal equations is

$$
\begin{bmatrix}m&\sum_i x_i\\\sum_i x_i&\sum_i x_i^2\end{bmatrix}
\begin{bmatrix}a_0\\a_1\end{bmatrix}
=\begin{bmatrix}\sum_i y_i\\\sum_i x_i y_i\end{bmatrix}.
$$

##### PatrickJMT example. Calculating a least-squares regression line

Fit weight as a function of height with $\mechanical{\widehat y}=b_0+b_1\mechanical{x}$, where $b_0$ is the intercept and $b_1$ is the slope. The handwritten data give no units.

| Observation | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Height $\mechanical{x}$ | 65 | 65 | 62 | 67 | 69 | 65 | 61 | 67 |
| Weight $\mechanical{y}$ | 105 | 125 | 110 | 120 | 140 | 135 | 95 | 130 |

For $n$ observations, the generic formula for the slope is

$$
b_1=\frac{\sum_i(x_i-\bar x)(y_i-\bar y)}{\sum_i(x_i-\bar x)^2}
=\frac{\sum_i x_i y_i-(\sum_i x_i)(\sum_i y_i)/n}
{\sum_i x_i^2-(\sum_i x_i)^2/n}.
$$

Equivalently, solve $A^{\mathsf T}A\mathbf a=A^{\mathsf T}\mathbf y$, with $A$ formed from rows $(1,x_i)$ and $\mathbf a=(a_0,a_1)^{\mathsf T}$. The column of sums on the right side is $A^{\mathsf T}\mathbf y$, where $\mathbf y$ is the column of observations.

Find the least-squares line $y=a_0+a_1x$ for $(0,6)$, $(1,0)$ and $(2,0)$. The design matrix has rows $(1,0)$, $(1,1)$ and $(1,2)$, and its transpose has rows $(1,1,1)$ and $(0,1,2)$. The sums $\sum_i y_i=6$ and $\sum_i x_i y_i=0$ give the right-hand side.

$$
A^{\mathsf T}A=
\begin{bmatrix}1&1&1\\0&1&2\end{bmatrix}
\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix}
=\begin{bmatrix}3&3\\3&5\end{bmatrix},\qquad
A^{\mathsf T}\mathbf y=\begin{bmatrix}6\\0\end{bmatrix}.
$$

The normal equations are $3a_0+3a_1=6$ and $3a_0+5a_1=0$. The second gives $a_1=-3a_0/5$. Substituting into the first gives $(15/5-9/5)a_0=6$, so $a_0=5$ and $a_1=-3$.

The best-fitting line in the preceding example is $y=5-3x$.

##### Polynomial least-squares approximation review

For $f\in C[a,b]$, seek $P_n(x)=\sum_{k=0}^n a_kx^k$ minimizing $E_2(a_0,\ldots,a_n)=\int_a^b[f(x)-P_n(x)]^2\,dx$. At a minimizer, $\partial E_2/\partial a_j=0$ for $j=0,\ldots,n$.

For $f(x)=e^x$ on $[-1,1]$ and $P_1(x)=a_0+a_1x$, expand the squared error and integrate.

$$
\begin{aligned}
E_2(a_0,a_1)
&=\int_{-1}^1(e^{2x}-2a_0e^x-2a_1xe^x+a_0^2+2a_0a_1x+a_1^2x^2)\,dx\\
&=\left[\tfrac12e^{2x}-2a_0e^x-2a_1(xe^x-e^x)+a_0^2x+a_0a_1x^2+\tfrac13a_1^2x^3\right]_{-1}^1.
\end{aligned}
$$

Alternatively, differentiate under the integral first.

$$
0=\frac{\partial E_2}{\partial a_0}
=-2\int_{-1}^1(e^x-a_0-a_1x)\,dx
=\left[-2e^x+2a_0x+a_1x^2\right]_{-1}^1.
$$

The second stationarity condition for fitting $e^x$ on $[-1,1]$ is

$$
\begin{aligned}
0=\frac{\partial E_2}{\partial a_1}
&=-2\int_{-1}^1(e^x-a_0-a_1x)x\,dx\\
&=2\int_{-1}^1(a_1x^2-xe^x)\,dx\\
&=2\left[\frac{a_1x^3}{3}-xe^x+e^x\right]_{-1}^1.
\end{aligned}
$$

The term $a_0x$ integrates to zero because it is odd. For the other term, integration by parts with $u=x$ and $dv=e^x\,dx$ gives $\int xe^x\,dx=xe^x-e^x+C$. The notes leave the coefficient calculation for later.

##### Numerical integration and differentiation review

Review integration from tabulated data, open and closed Newton–Cotes formulas, and the role of node spacing. Standard Newton–Cotes formulas use equally spaced data. The closed rules include both endpoints, and the open rules use interior nodes. The two-point closed rule is the trapezoidal rule, the three-point closed rule is Simpson's $1/3$ rule, and the four-point closed rule is Simpson's $3/8$ rule.

![[Kyle Kabasares - Numerical Analysis - Trapezoid and Simpson comparison.png|**Fig. 34** The review sketches the trapezoidal rule and Simpson's $1/3$ rule.]]

##### Trapezoid rule from the Lagrange interpolant

Approximate $\int_a^b f(x)\,dx$ by integrating the line $P_1$ through the endpoint data.

![[Kyle Kabasares - Numerical Analysis - Linear Lagrange quadrature sketch.png|**Fig. 35** The line through the nodes at $a$ and $b$ bounds the shaded trapezoid.]]

For comparison, the quadratic Lagrange formula is

$$
\begin{aligned}
P_2(x)={}&\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)}y_0
+\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)}y_1\\
&+\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}y_2.
\end{aligned}
$$

With just $x_0=a$, $x_1=b$ and $y_i=f(x_i)$, the linear expression to integrate is

$$
P_1(x)=\frac{x-x_1}{x_0-x_1}f(x_0)+\frac{x-x_0}{x_1-x_0}f(x_1).
$$

Integrate the linear formula term by term.

$$
\begin{aligned}
\int_{x_0}^{x_1}P_1(x)\,dx
={}&\frac{f(x_0)}{x_0-x_1}\left[\frac{x^2}{2}-xx_1\right]_{x_0}^{x_1}
+\frac{f(x_1)}{x_1-x_0}\left[\frac{x^2}{2}-xx_0\right]_{x_0}^{x_1}\\
={}&(x_1-x_0)\frac{f(x_0)+f(x_1)}2.
\end{aligned}
$$

This is the trapezoidal rule with $n=1$. Simpson's $1/3$ rule with $h=(b-a)/2$ is

$$
\frac h3[f(x_0)+4f(x_1)+f(x_2)]
=\frac{b-a}{6}[f(x_0)+4f(x_1)+f(x_2)].
$$

Simpson's $3/8$ rule with $h=(b-a)/3$ is

$$
\frac{3h}{8}[f(x_0)+3f(x_1)+3f(x_2)+f(x_3)]
=\frac{b-a}{8}[f(x_0)+3f(x_1)+3f(x_2)+f(x_3)].
$$

The handwritten $b-a$ form on this page omits the two interior weights of $3$. The boxed $h$ form supplies them.

##### Composite Newton–Cotes rules

![[Kyle Kabasares - Numerical Analysis - Composite Newton-Cotes sketch.png|**Fig. 36** The sketch subdivides the integration interval and marks sample points on the curve.]]

For equal spacing $h=(x_n-x_0)/n$, split the integral into $\sum_{i=1}^n\int_{x_{i-1}}^{x_i}f(x)\,dx$. Summing the trapezoids gives

$$
T_n[f]=\frac h2\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$

Summing Simpson panels, each with weights $1,4,1$, gives for even $n$

$$
S_n[f]=\frac h3\left[f(x_0)+4\sum_{j=1}^{n/2}f(x_{2j-1})
+2\sum_{j=1}^{n/2-1}f(x_{2j})+f(x_n)\right].
$$

##### Numerical differentiation review

The definition is $f'(x)=\lim_{\Delta x\to0}[f(x+\Delta x)-f(x)]/\Delta x$, with $h$ also used for $\Delta x$.

![[Kyle Kabasares - Numerical Analysis - Finite-difference neighboring nodes.png|**Fig. 37** For equally spaced data, $x_{i-1}$ and $x_{i+1}$ are one step from $x_i$.]]

Expand at $a=x_i$ and evaluate at $x=x_{i-1}=x_i-h$.

$$
f(x_{i-1})=f(x_i)-hf'(x_i)+\frac{h^2}{2!}f''(x_i)
-\frac{h^3}{3!}f^{(3)}(x_i)+\cdots.
$$

Solving for the derivative gives

$$
f'(x_i)=\frac{f(x_i)-f(x_{i-1})}h+\frac h{2!}f''(x_i)
-\frac{h^2}{3!}f^{(3)}(x_i)+\cdots.
$$

The review collects the forward, backward and centered formulas for $f'(x_0)$.

$$
\frac{f(x_0+h)-f(x_0)}h,\qquad
\frac{f(x_0)-f(x_0-h)}h,\qquad
\frac{f(x_0+h)-f(x_0-h)}{2h}.
$$

##### Richardson extrapolation review

For the first example, the review gives the samples

| $x$ | $1.2$ | $1.225$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $6.049647$ | $6.280817$ | $7.0286876$ |

The forward difference with $h=0.025$ is reported as $9.24676445$, with absolute error $0.17229325$. Combining it with the forward difference with $h=0.1$ gives

$$
\frac13\left[4\frac{f(1.225)-f(1.2)}{0.025}
-\frac{f(1.3)-f(1.2)}{0.1}\right]\approx9.06552213
$$

as written here. The notes give its absolute error as $0.008919$ and ask where the formula comes from. [[Finite differences and Richardson calculations#Richardson extrapolation|the section on Richardson extrapolation]] gives the same formula with a slightly different last part of the decimal estimate.

The second example uses a point on either side of $1.2$.

| $x$ | $1.15$ | $1.2$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $5.612521$ | $6.049647$ | $7.0286876$ |

Given $[f(1.3)-f(1.2)]/0.1\approx9.790401$ and $[f(1.15)-f(1.2)]/(-0.05)\approx8.742529$, find a higher-accuracy approximation of $f'(1.2)$.

With one more sample, the table becomes

| $x$ | $1.15$ | $1.2$ | $1.3$ | $1.4$ |
| --- | ---: | ---: | ---: | ---: |
| $f(x)$ | $5.612521$ | $6.049647$ | $7.0286876$ | $8.166170$ |

This page writes $7.08286876$ in the table at $1.3$. The earlier table and the forward quotient below agree with $7.0286876$. For $M=f'(1.2)$ and $h=0.1$, the notes give these first-order estimates.

$$
\begin{aligned}
N(h)&=\frac{f(1.3)-f(1.2)}{0.1}\approx9.790401,\\
N(-h/2)&=\frac{f(1.15)-f(1.2)}{-0.05}\approx8.742529,\\
N(2h)&=\frac{f(1.4)-f(1.2)}{0.2}\approx10.582612.
\end{aligned}
$$

##### Richardson extrapolation continued, from Burden and Faires

Suppose $M-N_1(h)=K_1h+K_2h^2+K_3h^3+\cdots$ with constants independent of $h$. The first-order model gives $M-N_1(0.1)\approx0.1K_1$ and $M-N_1(0.01)\approx0.01K_1$. Combine first-order approximations to obtain higher-order truncation errors. Write

$$
\begin{aligned}
M&=N_1(h)+K_1h+K_2h^2+K_3h^3+\cdots,\\
M&=N_1(h/2)+K_1h/2+K_2h^2/4+K_3h^3/8+\cdots.
\end{aligned}
$$

Taking twice the second equation minus the first gives

$$
M=2N_1(h/2)-N_1(h)+K_2(h^2/2-h^2)+K_3(h^3/4-h^3)+\cdots.
$$

Define $N_2(h)=2N_1(h/2)-N_1(h)$. The expansion just derived reads

$$
M=N_2(h)-\tfrac12K_2h^2-\tfrac34K_3h^3+\cdots.
$$

##### Another Richardson extrapolation example

The forward-difference estimates of $f'(0.8)$ are $0.95375$ for $h=0.2$ and $0.96851$ for $h=0.1$. Estimate $f'(0.8)$ more accurately. Model the signed truncation error, exact value minus approximation, by $Ch$ to first order.

$$
\begin{aligned}
f'(0.8)&\approx0.95375+C(0.2),\\
f'(0.8)&\approx0.96851+C(0.1).
\end{aligned}
$$

Take twice the second equation minus the first to eliminate $C$. The improved estimate is $2(0.96851)-0.95375=0.98327$.

##### Numerical differentiation with unequally spaced data

Fit a polynomial to the data, using a piecewise fit where appropriate, and then differentiate the fit.

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
