---
title: "Taylor error bounds and finite-digit arithmetic"
---

> [!TLDR]
> Bound a Taylor approximation and examine which digits survive rounding and cancellation.

## Worked lecture material

Math 130 with Dr. Noemi Petra. Homework and quizzes count for 25%, the two midterms for 20% each, the final exam for 25%, and participation for 10%.

##### Mathematical preliminaries and error analysis

Approximate a function $f$ by an easily evaluated function $\widehat f$. The lecture lists $\cos x$, $e^x$, and $\sqrt x$ as examples of functions to approximate. Polynomials, including Taylor polynomials, are a common choice.

For $f(x)=e^x$, take $P_1(x)=b_0+b_1x$. Match the value and slope at zero:

$$
P_1(0)=f(0)=1,\qquad P_1'(0)=f'(0)=1.
$$

It follows that $b_0=b_1=1$, so $P_1(x)=1+x$. The remaining questions are how to improve the approximation and how to measure the error.

![[Kyle Kabasares - Numerical Analysis - Linear Taylor approximation to the exponential.png|**Fig. 1** The linear Taylor polynomial matches the exponential and its slope at zero.]]

Suppose information about a function and its derivatives at $x=a$ is available, including $f(a)$ and $f''(a)$. The aim is to approximate $f$ at other points by a polynomial of degree at most two, $P_2(x)=b_0+b_1x+b_2x^2$. The next step is to choose the coefficients by matching at $a$.

Choose $b_0,b_1,b_2$ so that $P_2(x)=b_0+b_1x+b_2x^2$ agrees with $f$, $f'$ and $f''$ at $x=a$. Since $P_2'(x)=b_1+2b_2x$ and $P_2''(x)=2b_2$, the matching conditions form the linear system

$$
\begin{aligned}
b_0+b_1a+b_2a^2&=f(a),\\
b_1+2b_2a&=f'(a),\\
2b_2&=f''(a).
\end{aligned}
$$

Solve from the last equation upward.

$$
\begin{aligned}
b_2&=\tfrac12 f''(a),\\
b_1&=f'(a)-2b_2a=f'(a)-f''(a)a,\\
b_0&=f(a)-b_1a-b_2a^2=f(a)-f'(a)a+\tfrac12 f''(a)a^2.
\end{aligned}
$$

Substitution and collection by derivative give the quadratic Taylor polynomial.

$$
\begin{aligned}
P_2(x)&=f(a)+f'(a)(x-a)+\tfrac12 f''(a)(a^2-2xa+x^2)\\
&=f(a)+f'(a)(x-a)+\tfrac12 f''(a)(x-a)^2.
\end{aligned}
$$

The order of each derivative matches the power of $x-a$. The degree-one Taylor polynomial is $P_1(x)=f(a)+f'(a)(x-a)$. In general, knowing $f(a)$ and the derivative values $f^{(j)}(a)$ for $j=1,\ldots,n$ gives the data for a degree-$n$ Taylor polynomial.

The degree-$n$ Taylor polynomial at $a$ is

$$
P_n(x)=f(a)+f'(a)(x-a)+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n.
$$

For $f(x)=e^x$ and $a=0$, every derivative at the center equals $1$, so $P_n(x)=1+x+\tfrac12 x^2+\cdots+x^n/n!$.

For $f(x)=\log x$ and $a=1$, the first derivative is $1/x$, the second is $-1/x^2$, and the general formula is $f^{(n)}(x)=(-1)^{n-1}(n-1)!/x^n$ for $n\ge 1$. Thus

$$
P_1(x)=x-1,\qquad P_2(x)=x-1-\tfrac12(x-1)^2.
$$

##### Taylor's theorem

Suppose $f\in C^n[a,b]$ and $f^{(n+1)}$ exists on $(a,b)$. Let $x_0\in[a,b]$. For $x\in[a,b]$ distinct from $x_0$, there is a point $\xi$ between $x_0$ and $x$ such that

$$
\begin{aligned}
f(x)&=P_n(x)+r_n(x),\\
P_n(x)&=\sum_{j=0}^{n}\frac{f^{(j)}(x_0)}{j!}(x-x_0)^j,\\
r_n(x)&=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}.
\end{aligned}
$$

The remainder $r_n$ is the error of the degree-$n$ Taylor approximation. For $f(x)=e^x$, $x_0=0$, $n=2$ and $0<x\le 1$, the polynomial is $P_2(x)=1+x+\tfrac12 x^2$, and the remainder is $e^\xi x^3/3!$ for $0<\xi<x$. At $x=0$ the error is zero.

![[Kyle Kabasares - Numerical Analysis - Quadratic Taylor error.png|**Fig. 2** Sketch of the gap between a function and its Taylor approximation.]]

The exponential example gives $|r_2(x)|\le e/6\approx 0.453$ for $0\le x\le 1$, using $x^3\le 1$ and $e^\xi\le e$.

Midterm 1 is scheduled for September 29, 2016. Example 3 on [[#Discretization error in a derivative|the section on Discretization error in a derivative]] asks for a quadratic approximation to $f(x)=\sin x$ around $x_0=\pi/2$.

![[Kyle Kabasares - Numerical Analysis - Sine function.png|**Fig. 3** The sine function, with its maximum at the Taylor expansion center $\pi/2$.]]

At $\pi/2$, the value is $1$, the first derivative is $0$, and the second derivative is $-1$. Therefore

$$
\begin{aligned}
P_2(x)&=1-\tfrac12(x-\pi/2)^2\\
&=-\tfrac12 x^2+\tfrac{\pi}{2}x+1-\tfrac{\pi^2}{8}.
\end{aligned}
$$

The error to plot is

$$
R_2(x)=-\frac{(x-\pi/2)^3}{6}\cos\xi,
$$

where $\xi$ lies between $\pi/2$ and $x$.

For $f(x)=e^x$ expanded about zero and evaluated at $x=1$, how large must $n$ be to guarantee $R_n(1)\le 10^{-9}$? Since $0<\xi<1$ and $1<e^\xi<3$,

$$
\frac{1}{(n+1)!}<R_n(1)=\frac{e^\xi}{(n+1)!}<\frac{3}{(n+1)!}.
$$

The upper bound is below $10^{-9}$ when $n\ge 12$.

##### 1.2 Round-off errors and computer arithmetic

Mathematically, $(\sqrt{3})^2=3$. A computer may return a nearby value because the intermediate value $\sqrt{3}$ is represented with finite precision. The resulting approximation error is called **round-off error**.

##### Decimal machine numbers

Write the significand in normalized form, $y=0.d_1d_2d_3\ldots\times10^n$. The floating-point representation $\operatorname{fl}(y)$ retains $k$ digits.

- **Chopping** discards the digits after $d_k$.
- **Rounding** adds one unit in the last retained place if $d_{k+1}\ge 5$, carrying as needed. If $d_{k+1}<5$, it gives the same result as chopping.

For example, $\pi=0.314159265\ldots\times10^1$. Five-digit chopping yields $0.31415\times10^1$, and five-digit rounding yields $0.31416\times10^1$ because the sixth digit is $9$.

##### Approximation errors

For an approximation $p^*$ to $p$, the signed error is $p-p^*$, the absolute error is $|p-p^*|$, and the relative error is $|p-p^*|/|p|$ when $p\ne 0$.

##### Finite-digit arithmetic

The machine first represents each operand as a floating-point number, then represents the result of the operation in the same format.

$$
\begin{aligned}
x\oplus y&=\operatorname{fl}(\operatorname{fl}(x)+\operatorname{fl}(y)),\\
x\ominus y&=\operatorname{fl}(\operatorname{fl}(x)-\operatorname{fl}(y)),\\
x\otimes y&=\operatorname{fl}(\operatorname{fl}(x)\times\operatorname{fl}(y)),\\
x\oslash y&=\operatorname{fl}(\operatorname{fl}(x)\div\operatorname{fl}(y)).
\end{aligned}
$$

Take $x=5/7=0.714285\ldots$ and $y=1/3=0.33333\ldots$. With five-digit chopping, $\operatorname{fl}(x)=0.71428$ and $\operatorname{fl}(y)=0.33333$.

With five-digit rounding, $\operatorname{fl}(5/7)=0.71429$ and $\operatorname{fl}(1/3)=0.33333$. Using the chopped inputs from the previous page, machine addition gives

$$
x\oplus y=\operatorname{fl}(0.71428+0.33333)=0.10476\times10^1=1.0476.
$$

The exact sum is $22/21$, so the relative error is about $0.18\times10^{-4}$.

Example 3 asks for the second- and third-order Taylor polynomials of $f(x)=\cos x$ about $x_0=0$. Check the hypotheses of Taylor's theorem first, including continuity of derivatives through order $n$, existence of $f^{(n+1)}$, and inclusion of the center in the interval. Cosine is smooth on $\mathbb R$. Its successive derivatives are $-\sin x$, $-\cos x$, $\sin x$ and $\cos x$.

Using $f^{(j)}(x_0)(x-x_0)^j/j!$ for the term of order $j$, the second-order formula gives

$$
\cos x=\cos 0-x\sin 0-\frac{x^2}{2}\cos 0+\frac{x^3}{6}\sin\xi
=1-\frac{x^2}{2}+\frac{x^3}{6}\sin\xi,
$$

where $\xi$ lies between $0$ and $x$. The third-order polynomial is also $1-x^2/2$ because $f^{(3)}(0)=\sin 0=0$. The third-order remainder is $R_3(x)=x^4\cos\xi/24$, with $\xi$ again between $0$ and $x$.

##### Error analysis for cosine

At $x=0.01$, the second-order approximation is $1-\tfrac12(0.01)^2=0.99995$. For some $\xi$ between $0$ and $0.01$,

$$
\begin{aligned}
\cos(0.01)&=0.99995+\frac{10^{-6}}6\sin\xi,\\
|\cos(0.01)-0.99995|&=\frac{10^{-6}}6|\sin\xi|\le\frac{10^{-6}}6\approx1.67\times10^{-7}.
\end{aligned}
$$

##### Choosing a degree for sine

Find the smallest integer $n$ for which the Taylor remainder of $\sin x$ about $x_0=\pi/4$ can be bounded by $10^{-6}$ throughout $[0,\pi/4]$. The remainder is

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-\pi/4)^{n+1}
$$

with $\xi$ between $x$ and $\pi/4$. All derivatives of sine are bounded in absolute value by $1$. When $n+1$ is even, the absolute value of the power is $(x-\pi/4)^{n+1}$. When $n+1$ is odd, it is $(\pi/4-x)^{n+1}$. Both are bounded by $(\pi/4)^{n+1}$. Try successive values of $n$ in

$$
|R_n(x)|\le\frac{(\pi/4)^{n+1}}{(n+1)!}\le 10^{-6}.
$$

The preceding bound has order of magnitude $10^{-5}$ at $n=7$, $10^{-6}$ at $n=8$, and $10^{-7}$ at $n=9$. The notes underline $n=9$. Direct evaluation gives about $3.13\times10^{-7}$ already at $n=8$, the first degree that meets the target using this bound. A margin example writes $0.2=2\times 10^{-1}$ to illustrate order-of-magnitude notation.

A decimal machine number has the form $0.d_1d_2\ldots d_kd_{k+1}\ldots\times10^n$. For example, $3/62=0.048387\ldots=0.48387\ldots\times10^{-1}$.

The absolute error $|p-p^*|$ depends on the scale and units of the quantity. The relative error $|p-p^*|/|p|$, for $p\ne 0$, is invariant under a change of units.

- **Modeling and input errors** arise when approximating real applications and from errors in the input data. The margin mentions Monte Carlo methods for diagnosing errors.
- **Approximation errors in computation** include interpolation, integration, discretization and convergence errors. Discretization replaces a continuous problem with a discrete one. The notes describe convergence errors as tending to behave more monotonically.
- **Round-off errors** arise from finite-precision representation of real numbers.

The working assumption is that approximation errors dominate round-off errors.

##### Discretization error in a derivative

Approximate $f'(x_0)$ for $f(x)=\sin x$ at $x_0=1.2$. The function value is $\sin(1.2)\approx 0.932$. Discretize the interval $[a,b]$ and use a neighboring point $x_0+h$.

![[Kyle Kabasares - Numerical Analysis - Forward discretization grid.png|**Fig. 4** Discretization of $[a,b]$ with a forward step $h$ from $x_0$.]]

Let $h>0$. Substitute $x=x_0+h$ into the Taylor formula, so $x-x_0=h$.

$$
f(x_0+h)=f(x_0)+hf'(x_0)+\frac{h^2}{2}f''(x_0)+\cdots
+\frac{h^n}{n!}f^{(n)}(x_0)+\frac{h^{n+1}}{(n+1)!}f^{(n+1)}(\xi_+),
\tag{2}
$$

where $x_0<\xi_+<x_0+h$. Substituting $x=x_0-h$ gives $x-x_0=-h$ and

$$
f(x_0-h)=f(x_0)-hf'(x_0)+\frac{h^2}{2}f''(x_0)+\cdots,
\tag{3}
$$

with the remainder evaluated at a point between $x_0-h$ and $x_0$.

Rearrange (2) to isolate the derivative.

$$
f'(x_0)=\underbrace{\frac{f(x_0+h)-f(x_0)}{h}}_{f_h'(x_0)}
-\left(\frac h2 f''(x_0)+\frac{h^2}{6}f^{(3)}(x_0)+\cdots\right).
$$

The **forward difference** $f_h'(x_0)$ approximates the derivative. Its absolute error is $|f'(x_0)-f_h'(x_0)|$, whose leading term for small $h$ and $f''(x_0)\ne 0$ is $h|f''(x_0)|/2$. A bounded second derivative near $x_0$ ensures an $O(h)$ error.

![[Kyle Kabasares - Numerical Analysis - Forward difference slope.png|**Fig. 5** The forward difference uses the secant slope from $x_0$ to $x_0+h$ to approximate the tangent slope at $x_0$.]]

For $f(x)=\sin x$ and $x_0=1.2$, the exact derivative is $\cos(1.2)=0.3623\ldots$. At $h=0.1$ the forward difference gives $0.315\ldots$. Since $f''(x_0)/2\approx-0.466$, the predicted absolute discretization error is about $0.466h$.

| Step size $h$ | Observed absolute error |
| ---: | ---: |
| $10^{-1}$ | $4.71\times10^{-2}$ |
| $10^{-2}$ | $4.66\times10^{-3}$ |
| $10^{-3}$ | $4.66\times10^{-4}$ |
| $10^{-4}$ | $4.66\times10^{-5}$ |
| $10^{-7}$ | $4.66\times10^{-8}$ |
| $10^{-8}$ | $4.36\times10^{-10}$ |
| $10^{-9}$ | $5.59\times10^{-8}$ |
| $10^{-10}$ | $1.66\times10^{-7}$ |
| $10^{-11}$ | $7.93\times10^{-6}$ |

The observed error begins to grow as round-off dominates. To aim for

$$
\left|\cos(1.2)-\frac{\sin(1.2+h)-\sin(1.2)}h\right|<10^{-10},
$$

the first-order estimate alone suggests trying $h=10^{-10}/0.466\approx 10^{-9}/4$. That choice falls in the regime where the round-off term matters.

![[Kyle Kabasares - Numerical Analysis - Round-off crossover.png|**Fig. 6** Log-log sketch of the absolute error against $h$. The line represents the first-order discretization error and the irregular curve marks the small-step regime where round-off dominates. The sketch labels the crossover near $10^{-9}$.]]

##### Algorithms and their properties

**Accuracy** is one feature of a good numerical algorithm. Its design should make it possible to determine the magnitude of the error.

**Efficiency** means reaching an acceptable error tolerance in a reasonable amount of computation time. It depends on the rate of convergence, storage requirements and the number of floating-point operations (FLOPs).

Consider $P(x)=c_0+c_1x+c_2x^2+\cdots+c_nx^n$. One approach builds the partial sums $c_0$, $c_0+c_1x$, $(c_0+c_1x)+c_2x^2$, and so forth. If each term $c_kx^k$ is computed from scratch, the multiplications sum to $1+2+\cdots+n=n(n+1)/2$, of order $O(n^2)$. Repeated work can be avoided by retaining intermediate products, such as $x^2$ when forming $x^3$, or by writing the polynomial in nested form.

$$
P(x)=c_0+x\bigl(c_1+x(c_2+\cdots+x(c_{n-1}+xc_n)\cdots)\bigr).
$$

The nested evaluation costs $O(n)$ operations.

**Robustness** means reaching the correct result within an acceptable tolerance or terminating with a warning when the method cannot achieve that accuracy. A problem is **ill-conditioned** if small perturbations in the input can produce large changes in the result.

An algorithm is **backward stable** if its computed result is the exact solution of a slightly perturbed problem.

##### Error accumulation

For initial error $e_0$, the model $e_n=c_0ne_0$ with constant $c_0$ describes linear growth. The model $e_n=c_1^ne_0$ with $c_1>1$ describes exponential growth.

For example, compute

$$
y_n=\int_0^1\frac{x^n}{x+10}\,dx,\qquad n=1,2,\ldots,30.
$$

Combining integrands gives

$$
y_n+10y_{n-1}=\int_0^1\frac{x^n+10x^{n-1}}{x+10}\,dx
=\int_0^1x^{n-1}\,dx=\frac1n.
$$

The forward recurrence is $y_n=1/n-10y_{n-1}$ with $y_0=\ln(11)-\ln(10)$. Thus $y_1=1-10(\ln(11)-\ln(10))$ and $y_2=\tfrac12-10y_1$. Each step multiplies the contribution from the initial value by $-10$. Its magnitude grows as $10^n|y_0|$ within the expanded expression, and a perturbation in $y_0$ is amplified by the same factor $10^n$.

##### Solutions of nonlinear equations in one variable

Find $x^*$ with $f(x^*)=0$ for continuous $f$ on $[a,b]$.

1. For $f(x)=x-1$ on $[0,2]$, the root is $x^*=1$.
2. For $f(x)=\sin x$ on $[0,2\pi]$, the roots are $0$, $\pi$ and $2\pi$.
3. For $f(x)=10\cosh(x/4)-x$ on $\mathbb R$, the graph stays above the axis and there are no real roots. Here $\cosh t=(e^t+e^{-t})/2$.

![[Kyle Kabasares - Numerical Analysis - Function without real roots.png|**Fig. 7** A curve lying entirely above the horizontal axis.]]
![[Kyle Kabasares - Numerical Analysis - Successive root estimates.png|**Fig. 8** Trial points $p_1,p_2,p_3,\ldots$ approaching a root between endpoints with opposite function signs.]]

An iterative method can stop when the change between approximations or the residual is sufficiently small. Common tests, used individually or together, are

$$
|p_{k+1}-p_k|<\mathrm{atol},\qquad
\frac{|p_{k+1}-p_k|}{|p_k|}<\mathrm{rtol}\quad(p_k\ne 0),\qquad
|f(p_{k+1})|<\mathrm{ftol}.
$$

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
| $\mechanical{f}'(x)$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of position with time. Its magnitude is speed. |
| $\mechanical{x}_i$ | $\unit{m}$ | Height | Horizontal coordinate in the regression sketch. No unit is specified in the sketch. |
| $\mechanical{y}_i$ | $\unit{N}$ | Weight | Vertical coordinate if weight is taken as a force. The sketch gives no measurement units. |
