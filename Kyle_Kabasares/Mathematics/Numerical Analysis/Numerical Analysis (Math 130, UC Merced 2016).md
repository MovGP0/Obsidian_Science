---
title: "Numerical Analysis (Math 130, UC Merced 2016)"
---

> [!TLDR]
> These notes develop numerical methods for root finding, interpolation, least-squares fitting, integration, and differentiation. Taylor remainders and convergence estimates quantify approximation error, while finite-digit arithmetic shows how round-off can limit accuracy.

Source notes by Kyle Kabasares. [[Numerical Analysis (Math 130, UC Merced 2016).pdf|Original PDF]].

Transcribed PDF pages 1–89 of 89.

### PDF page 1

Math 130 with Dr. Noemi Petra. Homework and quizzes count for 25%, the two midterms for 20% each, the final exam for 25%, and participation for 10%.

#### August 25, 2016 — mathematical preliminaries and error analysis

Approximate a function $f$ by an easily evaluated function $\widehat f$. The lecture lists $\cos x$, $e^x$, and $\sqrt x$ as examples of functions to approximate. Polynomials, including Taylor polynomials, are a common choice.

For $f(x)=e^x$, take $P_1(x)=b_0+b_1x$. Match the value and slope at zero:

$$
P_1(0)=f(0)=1,\qquad P_1'(0)=f'(0)=1.
$$

It follows that $b_0=b_1=1$, so $P_1(x)=1+x$. The remaining questions are how to improve the approximation and how to measure the error.

![[Kyle Kabasares - Numerical Analysis - Linear Taylor approximation to the exponential.png|**Fig. 1** The linear Taylor polynomial matches the exponential and its slope at zero.]]

#### August 29, 2016

Suppose information about a function and its derivatives at $x=a$ is available, including $f(a)$ and $f''(a)$. The aim is to approximate $f$ at other points by a polynomial of degree at most two, $P_2(x)=b_0+b_1x+b_2x^2$. The next step is to choose the coefficients by matching at $a$.

### PDF page 2

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

### PDF page 3

The degree-$n$ Taylor polynomial at $a$ is

$$
P_n(x)=f(a)+f'(a)(x-a)+\cdots+\frac{f^{(n)}(a)}{n!}(x-a)^n.
$$

For $f(x)=e^x$ and $a=0$, every derivative at the center equals $1$, so $P_n(x)=1+x+\tfrac12 x^2+\cdots+x^n/n!$.

For $f(x)=\log x$ and $a=1$, the first derivative is $1/x$, the second is $-1/x^2$, and the general formula is $f^{(n)}(x)=(-1)^{n-1}(n-1)!/x^n$ for $n\ge 1$. Thus

$$
P_1(x)=x-1,\qquad P_2(x)=x-1-\tfrac12(x-1)^2.
$$

#### Taylor's theorem

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

### PDF page 4

The exponential example gives $|r_2(x)|\le e/6\approx 0.453$ for $0\le x\le 1$, using $x^3\le 1$ and $e^\xi\le e$.

#### September 1, 2016 lecture

Midterm 1 is scheduled for September 29, 2016. Example 3 on page 9 asks for a quadratic approximation to $f(x)=\sin x$ around $x_0=\pi/2$.

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

#### 1.2 Round-off errors and computer arithmetic

Mathematically, $(\sqrt{3})^2=3$. A computer may return a nearby value because the intermediate value $\sqrt{3}$ is represented with finite precision. The resulting approximation error is called **round-off error**.

### PDF page 5

#### Decimal machine numbers

Write the significand in normalized form, $y=0.d_1d_2d_3\ldots\times10^n$. The floating-point representation $\operatorname{fl}(y)$ retains $k$ digits.

- **Chopping** discards the digits after $d_k$.
- **Rounding** adds one unit in the last retained place if $d_{k+1}\ge 5$, carrying as needed. If $d_{k+1}<5$, it gives the same result as chopping.

For example, $\pi=0.314159265\ldots\times10^1$. Five-digit chopping yields $0.31415\times10^1$, and five-digit rounding yields $0.31416\times10^1$ because the sixth digit is $9$.

#### Approximation errors

For an approximation $p^*$ to $p$, the signed error is $p-p^*$, the absolute error is $|p-p^*|$, and the relative error is $|p-p^*|/|p|$ when $p\ne 0$.

#### Finite-digit arithmetic

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

### PDF page 6

With five-digit rounding, $\operatorname{fl}(5/7)=0.71429$ and $\operatorname{fl}(1/3)=0.33333$. Using the chopped inputs from the previous page, machine addition gives

$$
x\oplus y=\operatorname{fl}(0.71428+0.33333)=0.10476\times10^1=1.0476.
$$

The exact sum is $22/21$, so the relative error is about $0.18\times10^{-4}$.

#### September 2, 2016 discussion

Example 3 asks for the second- and third-order Taylor polynomials of $f(x)=\cos x$ about $x_0=0$. Check the hypotheses of Taylor's theorem first, including continuity of derivatives through order $n$, existence of $f^{(n+1)}$, and inclusion of the center in the interval. Cosine is smooth on $\mathbb R$. Its successive derivatives are $-\sin x$, $-\cos x$, $\sin x$ and $\cos x$.

Using $f^{(j)}(x_0)(x-x_0)^j/j!$ for the term of order $j$, the second-order formula gives

$$
\cos x=\cos 0-x\sin 0-\frac{x^2}{2}\cos 0+\frac{x^3}{6}\sin\xi
=1-\frac{x^2}{2}+\frac{x^3}{6}\sin\xi,
$$

where $\xi$ lies between $0$ and $x$. The third-order polynomial is also $1-x^2/2$ because $f^{(3)}(0)=\sin 0=0$. The third-order remainder is $R_3(x)=x^4\cos\xi/24$, with $\xi$ again between $0$ and $x$.

### PDF page 7

#### Error analysis for cosine

At $x=0.01$, the second-order approximation is $1-\tfrac12(0.01)^2=0.99995$. For some $\xi$ between $0$ and $0.01$,

$$
\begin{aligned}
\cos(0.01)&=0.99995+\frac{10^{-6}}6\sin\xi,\\
|\cos(0.01)-0.99995|&=\frac{10^{-6}}6|\sin\xi|\le\frac{10^{-6}}6\approx1.67\times10^{-7}.
\end{aligned}
$$

#### Choosing a degree for sine

Find the smallest integer $n$ for which the Taylor remainder of $\sin x$ about $x_0=\pi/4$ can be bounded by $10^{-6}$ throughout $[0,\pi/4]$. The remainder is

$$
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-\pi/4)^{n+1}
$$

with $\xi$ between $x$ and $\pi/4$. All derivatives of sine are bounded in absolute value by $1$. When $n+1$ is even, the absolute value of the power is $(x-\pi/4)^{n+1}$. When $n+1$ is odd, it is $(\pi/4-x)^{n+1}$. Both are bounded by $(\pi/4)^{n+1}$. Try successive values of $n$ in

$$
|R_n(x)|\le\frac{(\pi/4)^{n+1}}{(n+1)!}\le 10^{-6}.
$$

### PDF page 8

The preceding bound has order of magnitude $10^{-5}$ at $n=7$, $10^{-6}$ at $n=8$, and $10^{-7}$ at $n=9$. The notes underline $n=9$. Direct evaluation gives about $3.13\times10^{-7}$ already at $n=8$, the first degree that meets the target using this bound. A margin example writes $0.2=2\times 10^{-1}$ to illustrate order-of-magnitude notation.

A decimal machine number has the form $0.d_1d_2\ldots d_kd_{k+1}\ldots\times10^n$. For example, $3/62=0.048387\ldots=0.48387\ldots\times10^{-1}$.

#### September 6, 2016 lecture

The absolute error $|p-p^*|$ depends on the scale and units of the quantity. The relative error $|p-p^*|/|p|$, for $p\ne 0$, is invariant under a change of units.

- **Modeling and input errors** arise when approximating real applications and from errors in the input data. The margin mentions Monte Carlo methods for diagnosing errors.
- **Approximation errors in computation** include interpolation, integration, discretization and convergence errors. Discretization replaces a continuous problem with a discrete one. The notes describe convergence errors as tending to behave more monotonically.
- **Round-off errors** arise from finite-precision representation of real numbers.

The working assumption is that approximation errors dominate round-off errors.

#### Discretization error in a derivative

Approximate $f'(x_0)$ for $f(x)=\sin x$ at $x_0=1.2$. The function value is $\sin(1.2)\approx 0.932$. Discretize the interval $[a,b]$ and use a neighboring point $x_0+h$.

![[Kyle Kabasares - Numerical Analysis - Forward discretization grid.png|**Fig. 4** Discretization of $[a,b]$ with a forward step $h$ from $x_0$.]]

### PDF page 9

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

### PDF page 10

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

#### September 8, 2016 lecture. Algorithms and their properties

**Accuracy** is one feature of a good numerical algorithm. Its design should make it possible to determine the magnitude of the error.

### PDF page 11

**Efficiency** means reaching an acceptable error tolerance in a reasonable amount of computation time. It depends on the rate of convergence, storage requirements and the number of floating-point operations (FLOPs).

Consider $P(x)=c_0+c_1x+c_2x^2+\cdots+c_nx^n$. One approach builds the partial sums $c_0$, $c_0+c_1x$, $(c_0+c_1x)+c_2x^2$, and so forth. If each term $c_kx^k$ is computed from scratch, the multiplications sum to $1+2+\cdots+n=n(n+1)/2$, of order $O(n^2)$. Repeated work can be avoided by retaining intermediate products, such as $x^2$ when forming $x^3$, or by writing the polynomial in nested form.

$$
P(x)=c_0+x\bigl(c_1+x(c_2+\cdots+x(c_{n-1}+xc_n)\cdots)\bigr).
$$

The nested evaluation costs $O(n)$ operations.

**Robustness** means reaching the correct result within an acceptable tolerance or terminating with a warning when the method cannot achieve that accuracy. A problem is **ill-conditioned** if small perturbations in the input can produce large changes in the result.

### PDF page 12

An algorithm is **backward stable** if its computed result is the exact solution of a slightly perturbed problem.

#### Error accumulation

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

### PDF page 13

#### Chapter 2. Solutions of nonlinear equations in one variable

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

### PDF page 14

#### Intermediate value theorem and bisection

If $f$ is continuous on $[a,b]$ and $k$ lies between $f(a)$ and $f(b)$, some $c\in[a,b]$ satisfies $f(c)=k$. In particular, if $f(a)f(b)<0$, there is a root $c\in(a,b)$.

![[Kyle Kabasares - Numerical Analysis - Intermediate value theorem.png|**Fig. 9** A continuous curve with opposite signs at $a$ and $b$ crosses the horizontal axis.]]


For a continuous function with $f(a)f(b)<0$, bisection generates midpoint approximations $p_n$ to a root $p$ with

$$
|p_n-p|\le\frac{b-a}{2^n},\qquad n\ge1.
$$

If the initial midpoint is counted as step zero, the bound at step $n$ is $(b-a)/2^{n+1}$. Equating this bound to a tolerance gives $n=\log_2((b-a)/(2\,\mathrm{tol}))$, rounded upward for an integer step count.

For $f(x)=x^3+4x^2-10$, $f(1)=-5$ and $f(2)=14$, so there is a root in $[1,2]$. To reach $10^{-4}$, the notes write $\log_2(5000)$ and give a rough estimate of $15$ steps. The logarithm is about $12.29$, so the stated bound guarantees the tolerance by step $13$ with zero-based indexing, or by midpoint $14$ when counting from one. Implement Algorithm 2.1.

### PDF page 15

Use the triangle inequality $|x+y|\le |x|+|y|$ when bounding a remainder. For the quadratic remainder on this page,

$$
|R_2(x)|=\left|\frac{x^3e^\xi}{3}\right||\cos\xi-\sin\xi|.
$$

Since $-\sin\xi=\sin(-\xi)$, the trigonometric factor is at most $|\cos\xi|+|\sin(-\xi)|\le2$. The expansion center is $0$ and $\xi$ lies between $0$ and $x$. Thus for $x\in[-\pi/4,\pi/4]$,

$$
|R_2(x)|\le\frac23 e^{\pi/4}|x|^3\le\frac23 e^{\pi/4}\left(\frac\pi4\right)^3.
$$

For $f(x)=e^x$ expanded at $a=1$, find $n$ so that $|R_n(x)|\le 10^{-3}$ throughout $[0,1]$. Since $f^{(n+1)}(\xi)=e^\xi\le e$ and $|x-1|^{n+1}\le1$ regardless of the parity of $n+1$, it suffices that

$$
|R_n(x)|=\frac{e^\xi |x-1|^{n+1}}{(n+1)!}\le\frac e{(n+1)!}\le10^{-3}.
$$

### PDF page 16

The exponential remainder bound requires $(n+1)!\ge e/10^{-3}\approx2718.28$. This first holds at $n=6$, since $6!=720$ and $7!=5040$.

For another example, bound $\frac{e^\xi}{5!}(\cos\xi-2\sin\xi)$ for $\xi\in[2,6]$. The triangle inequality gives $|\cos\xi-2\sin\xi|\le|\cos\xi|+2|\sin\xi|\le3$, and $e^\xi/5!\le e^6/5!$. The absolute value of the product is at most $3e^6/5!$.

#### Rates of convergence

Iterative methods produce sequences, so the speed of convergence is important. Definition 1.18 takes sequences $\beta_n\to 0$ and $\alpha_n\to\alpha$. If a constant $K>0$ satisfies $|\alpha_n-\alpha|\le K|\beta_n|$ for all sufficiently large $n$, then $\alpha_n$ converges to $\alpha$ at rate $O(\beta_n)$.

For a step size $h$, write $e_h=O(h^\ell)$ if there are constants $\ell,c>0$ such that $|e_h|\le ch^\ell$ for all sufficiently small $h>0$. In a discretization with $h=1/n$, the comparison sequence is $\beta_n=1/n^\ell=h^\ell$. For $e_h=\alpha_n-\alpha$, the rate condition becomes $|e_h|\le Kh^\ell$.

### PDF page 17

If $e_h\approx kh^\ell$ and $e_{2h}\approx k(2h)^\ell$, then $e_{2h}/e_h\approx2^\ell$. Estimate the order from two step sizes using

$$
\ell\approx\log_2\left(\frac{|e_{2h}|}{|e_h|}\right).
$$

If the exact solution $\alpha$ is unknown, use a very accurate reference solution or construct a test problem with a known solution.

#### Convergence orders

For sufficiently large $n$, the error in $\alpha_n\to\alpha$ may satisfy one of these bounds.

- **Linear convergence** has $|\alpha_{n+1}-\alpha|\le q|\alpha_n-\alpha|$ for a constant $0<q<1$.
- **Quadratic convergence** has $|\alpha_{n+1}-\alpha|\le M|\alpha_n-\alpha|^2$ for some constant $M>0$.
- **Superlinear convergence** has $|\alpha_{n+1}-\alpha|\le q_n|\alpha_n-\alpha|$ for a sequence $q_n\to0$.

For bisection, the bound $|p_n-p|\le (b-a)/2^n$ is halved at each iteration. Bisection converges given a sign-changing bracket for a continuous function and allows the required number of iterations to be estimated analytically. It needs a starting bracket and is difficult to extend to more general settings.

### PDF page 18

Bisection's error bound $E_n=(b-a)/2^n$ has $E_{n+1}/E_n=1/2$, a linear rate. A faster method could aim for quadratic convergence, $|p_{n+1}-p|\le M|p_n-p|^2$. Bisection uses function signs on a bracket with $f(a)f(b)<0$. It can provide a starting value for a faster method that uses derivatives of $f$.

#### From roots to fixed points

Using derivative information may speed up root finding, although it can complicate the convergence analysis. One way to study such methods is to reformulate the equation as a fixed-point problem.

A **fixed point** of $g$ is a number $p$ such that $g(p)=p$. Given $f$, set $g(x)=x-f(x)$ so that $g(p)=p$ exactly when $f(p)=0$. Conversely, take $f(x)=x-g(x)$. More generally,

$$
g(x)=x-\ell(x)f(x).
$$

Where $\ell$ is nonzero, the fixed points are precisely the roots of $f$. Choosing $\ell(x)$ using derivatives of $f$ may make fixed-point iteration converge faster.

### PDF page 19

For $g(x)=e^{-x}$ on $[0.2,1.2]$, start at $x_0=1$. The first iterates are $x_1=g(x_0)=e^{-1}\approx0.368$ and $x_2=g(x_1)=e^{-e^{-1}}\approx0.692$.

![[Kyle Kabasares - Numerical Analysis - Exponential fixed-point iteration.png|**Fig. 10** The iterates for $g(x)=e^{-x}$ alternate around the intersection of $y=g(x)$ and $y=x$.]]


#### Fixed-point iteration algorithm

Given a scalar equation $f(x)=0$, choose $g$ such that $f(x)=0$ is equivalent to $g(x)=x$.

1. Start from an initial guess $x_0$.
2. For $k=0,1,2,\ldots$, compute $x_{k+1}=g(x_k)$ until the latest iterate satisfies the termination criterion.

The aim is to approximate a point $x^*$ satisfying $x^*=g(x^*)$. For the same initial guess, convergence can depend strongly on which $g$ is used. Possible choices include

$$
g(x)=x-f(x),\qquad g(x)=x+2f(x),\qquad g(x)=x-\frac{f(x)}{f'(x)}
$$

where the last expression is defined. They all have the general form $g(x)=x-\ell(x)f(x)$.

### PDF page 20

For continuous $g$ on $[a,b]$, the main questions are whether there is a fixed point in the interval, whether it is unique, whether the iterates converge to it, how fast they converge, and what failure to converge says about existence.

Textbook Example 1 takes $g(x)=x^2-2$. A fixed point satisfies $p=p^2-2$, hence $0=p^2-p-2=(p-2)(p+1)$. The fixed points are $2$ and $-1$.

![[Kyle Kabasares - Numerical Analysis - Quadratic fixed points.png|**Fig. 11** A fixed point occurs at each intersection of $y=x^2-2$ with $y=x$.]]


#### September 15, 2016 lecture. Section 2.2, fixed-point iteration continued

**Fixed-point theorem.** If $g\in C[a,b]$ and $a\le g(x)\le b$ for every $x\in[a,b]$, then $g$ has a fixed point $x^*\in[a,b]$. If $g'$ also exists on $(a,b)$ and some constant $0\le\ell<1$ satisfies $|g'(x)|\le\ell$ throughout $(a,b)$, the fixed point is unique.

### PDF page 21

#### Proof of the fixed-point theorem

**Existence.** Since $g$ maps $[a,b]$ into itself, $g(a)\ge a$ and $g(b)\le b$. Equality at either endpoint gives a fixed point. Otherwise define $\phi(x)=g(x)-x$, so $\phi(a)>0$ and $\phi(b)<0$. The intermediate value theorem gives $x^*\in(a,b)$ with $\phi(x^*)=0$.

**Uniqueness.** Suppose $x^*$ and $y^*$ are distinct fixed points. By the mean value theorem, for some $c$ between them,

$$
|x^*-y^*|=|g(x^*)-g(y^*)|=|g'(c)||x^*-y^*|\le q|x^*-y^*|
$$

with $q<1$. Thus $|x^*-y^*|=0$, contradicting distinctness.

#### Convergence of fixed-point iteration

Take $x_0\in[a,b]$ and define $x_{k+1}=g(x_k)$ for $k\ge0$. The iterates stay in $[a,b]$. Applying the mean value theorem at each step gives

$$
|x_k-x^*|=|g(x_{k-1})-g(x^*)|\le q|x_{k-1}-x^*|
\le\cdots\le q^k|x_0-x^*|.
$$

Because $q^k\to0$, the iterates converge to $x^*$. The error satisfies the linear bound $e_{k+1}\le qe_k$, where $e_k=|x_k-x^*|$.

### PDF page 22

#### Introduction to simple fixed-point iteration

Write $f(x)=g(x)-h(x)$ with $g(x)=x$. The root equation becomes $g(x)=h(x)$, or $x=h(x)$. This is an open method, so convergence depends on the map and the initial guess. Closed methods maintain a bracket. The notes encourage deriving the method from the intersection instead of memorizing the updates.

Start with $x_i$ on the line $g(x)=x$. The sketch traces the values $v_1=g(x_i)$, $v_2=h(v_1)$, $v_3=g(v_2)$, $v_4=h(v_3)$, and so on. The identity map copies each new value to the input of the next application of $h$.

![[Kyle Kabasares - Numerical Analysis - Fixed-point cobweb.png|**Fig. 12** Successive vertical and horizontal steps between $y=h(x)$ and $y=x$ approach the intersection in the convergent case.]]


For a separate example, use $g(x)=x^2+3/16$. A fixed point obeys $p^2-p+3/16=0$. With $a=1$, $b=-1$ and $c=3/16$, the quadratic formula gives

$$
p=\frac{1\pm\sqrt{1-4(3/16)}}2=\frac{1\pm1/2}2.
$$

### PDF page 23

#### September 20, 2016 lecture

Fixed-point iteration, also called Picard iteration here, is easy to implement and analyze, and each step can be cheap. The contraction condition provides a convergence guarantee on an invariant interval. Choosing a suitable $g$ can be difficult, and convergence is often linear.

The **order** is the exponent $p$ in an error bound $e_{n+1}\le Ce_n^p$. For the fixed-point iteration the mean value theorem gives $e_{n+1}=|g'(\xi)|e_n$ for some $\xi$ between $x_n$ and $x^*$. In the linear case, $p=1$ and the factor is controlled by $|g'(\xi)|$. If this is about $0.3$, the new error is about $3/10$ of the preceding one.

#### 2.3 Newton's method

To seek faster convergence, use the fixed-point form $g(x)=x-\ell(x)f(x)$. Choosing $\ell(x)=1/f'(x)$ where $f'(x)\ne0$ gives Newton's method.

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)},\qquad k=0,1,2,\ldots.
$$

### PDF page 24

#### Deriving Newton's method

For $f\in C^2[a,b]$, Taylor's theorem at $x_k$ gives

$$
f(x)=f(x_k)+(x-x_k)f'(x_k)+\frac{(x-x_k)^2}{2!}f''(\xi_k),
$$

with $\xi_k$ between $x_k$ and $x$. For an affine function the remainder vanishes. Setting $f(x^*)=0$ then gives

$$
f'(x_k)(x^*-x_k)=-f(x_k),\qquad
x^*=x_k-\frac{f(x_k)}{f'(x_k)}.
$$

For a nonlinear function, use the same equation to find the zero of the tangent-line approximation.

![[Kyle Kabasares - Numerical Analysis - Newton tangent construction.png|**Fig. 13** Newton's method takes the horizontal intercept of each tangent as the next iterate.]]


The tangent at $(x_0,f(x_0))$ has point-slope form $y-f(x_0)=f'(x_0)(x-x_0)$. At its intercept $x_1$, $0=f(x_0)+f'(x_0)(x_1-x_0)$, so $x_1=x_0-f(x_0)/f'(x_0)$. Repeating this construction gives $x_{k+1}=x_k-f(x_k)/f'(x_k)$. The next question is when these iterates converge.

### PDF page 25

#### Convergence of Newton's method

Assume $f\in C^2[a,b]$ and $x^*$ is a root with $f'(x^*)\ne0$. By continuity, $f'$ stays nonzero near $x^*$. Taylor's theorem at $x_k$ gives

$$
0=f(x^*)=f(x_k)+(x^*-x_k)f'(x_k)+\frac{(x^*-x_k)^2}{2}f''(\xi_k),
$$

where $\xi_k$ lies between $x_k$ and $x^*$. Divide by $f'(x_k)$ and use $f(x_k)/f'(x_k)=x_k-x_{k+1}$. With the signed error $e_k=x^*-x_k$,

$$
e_{k+1}=-\frac{f''(\xi_k)}{2f'(x_k)}e_k^2.
$$

Close to the root, the factor approaches $M=-f''(x^*)/(2f'(x^*))$, so the constant-coefficient model is $Me_{k+1}\approx(Me_k)^2$. Repeated squaring in that model drives $Me_k$ to zero if $|Me_0|<1$. For a local convergence bound, choose a positive constant that bounds the magnitude of the error coefficient in a neighborhood of $x^*$. A sufficiently close initial guess stays in that neighborhood.

#### September 22, 2016 lecture

Recall that $x^*-x_{n+1}\approx-[f''(x^*)/(2f'(x^*))](x^*-x_n)^2$. With a sufficiently close initial guess, a nonzero derivative at the root, and continuous derivatives through second order near it, Newton's method converges at least quadratically.

### PDF page 26

For a root $x^*$, the mean value theorem gives $f(x_n)=f(x_n)-f(x^*)=f'(\xi_n)(x_n-x^*)$ for $\xi_n$ between $x_n$ and $x^*$. Near a simple root, $f'(\xi_n)\approx f'(x_n)$, so the Newton step estimates the remaining signed error.

$$
x^*-x_n=-\frac{f(x_n)}{f'(\xi_n)}\approx-\frac{f(x_n)}{f'(x_n)}=x_{n+1}-x_n.
$$

Combining this estimate with the quadratic error formula gives a way to estimate the asymptotic constant using only iterates.

$$
\frac{|x_{n+2}-x_{n+1}|}{|x_{n+1}-x_n|^2}\approx
\left|\frac{f''(x^*)}{2f'(x^*)}\right|.
$$

#### Order of convergence (Definition 2.7)

Let $x_n\to x^*$ with $x_n\ne x^*$ for all $n$. If there are positive constants $\alpha$ and $\lambda$ such that

$$
\lim_{n\to\infty}\frac{|x_{n+1}-x^*|}{|x_n-x^*|^\alpha}=\lambda,
$$

the order of convergence is $\alpha$ and the asymptotic error constant is $\lambda$. Convergence is linear when $\alpha=1$ and $\lambda<1$, and quadratic when $\alpha=2$. The notes compare ordinary fixed-point iteration with $g(x)=x-f(x)$ to Newton's choice $g(x)=x-f(x)/f'(x)$ as typical linear and quadratic cases, respectively.

![[Kyle Kabasares - Numerical Analysis - Linear and quadratic convergence.png|**Fig. 14** Sketch comparing how many iterations two convergence rates take to reach an error of $10^{-6}$.]]

### PDF page 27

#### The secant method

Start with two guesses $x_0$ and $x_1$. The secant passes through $(x_0,f(x_0))$ and $(x_1,f(x_1))$.

![[Kyle Kabasares - Numerical Analysis - Secant line construction.png|**Fig. 15** A secant through two points on the curve gives a new estimate at its horizontal intercept.]]


Equate the ratios on the secant and cross-multiply.

$$
\begin{aligned}
\frac{x-x_1}{x-x_0}&=\frac{y-f(x_1)}{y-f(x_0)},\\
(x-x_1)(y-f(x_0))&=(x-x_0)(y-f(x_1)),\\
y(x_0-x_1)&=(x-x_1)f(x_0)-(x-x_0)f(x_1).
\end{aligned}
$$

The right side can be grouped as $(x-x_1)(f(x_0)-f(x_1))+(x_0-x_1)f(x_1)$. Thus

$$
y=f(x_1)+(x-x_1)\frac{f(x_1)-f(x_0)}{x_1-x_0}.
$$

At the intercept $x_2$, set $y=0$ and solve to obtain

$$
x_2=x_1-\frac{f(x_1)}{[f(x_1)-f(x_0)]/(x_1-x_0)}.
$$

The divided difference in the denominator approximates the derivative when the two guesses are close.

### PDF page 28

The secant update for $n\ge1$ is

$$
x_{n+1}=x_n-\frac{f(x_n)}{[f(x_n)-f(x_{n-1})]/(x_n-x_{n-1})}.
$$

In the usual local convergence case of a simple root with $f''(x^*)\ne 0$, the order is $\alpha=(1+\sqrt5)/2\approx1.62$ and

$$
\lim_{n\to\infty}\frac{|x^*-x_{n+1}|}{|x^*-x_n|^\alpha}
=\left|\frac{f''(x^*)}{2f'(x^*)}\right|^{\alpha-1}=C.
$$

Thus the next error is asymptotically $C$ times the current error raised to $\alpha$.

A fixed-point exercise considers $g(x)=x^4+x^2+x+1$. The equation $g(x)=x$ reduces to $x^4+x^2+1=0$, which has no real solution.

The next questions list $|x|$ on $[-1,1]$, $e^x\sin x$ on $[10^6,10^8]$, and $|x|$ on $[1,100]$, with handwritten answers “no,” “yes,” and “yes.” These answers match the check $f\in C^2[a,b]$. The local Newton convergence theorem also needs a root with nonzero derivative and a sufficiently close starting point. In particular, $|x|$ has no root in $[1,100]$, and the quadratic convergence theorem does not apply at its cusp at $0$.

#### Homework 4 review

On $[-1,2]$, let

$$
f(x)=x^4-8x^3+24x^2-32x+16,\qquad
g(x)=x-\alpha f(x),\qquad \alpha=\frac1{100}.
$$

Check existence and uniqueness of a fixed point of $g$. To apply the interval form of the existence theorem, check that $g$ maps the interval into itself. Since this $g$ is increasing there, its extrema occur at the endpoints.

![[Kyle Kabasares - Numerical Analysis - Endpoint test for the iteration map.png|**Fig. 16** The sketch uses the endpoints to bound the range of the increasing iteration map.]]

### PDF page 29

For the uniqueness test, look for $k\in(0,1)$ such that $|g'(x)|\le k$. Differentiating the Homework 4 map gives

$$
|g'(x)|=\left|1-\frac1{100}(4x^3-24x^2+48x-32)\right|.
$$

The handwritten triangle-inequality estimate gives $k=0.92$ and concludes uniqueness. Factoring the polynomial gives $f(x)=(x-2)^4$, so $g'(x)=1-(x-2)^3/25>1$ on $[-1,2)$. The proposed contraction bound fails, and $g(-1)=-1.81$ is outside the interval. The fixed-point equation itself still gives the unique point $x=2$.

#### September 27, 2016 review lecture

- **Chapter 1.** Taylor polynomials and approximation error. Review chopping, rounding, finite-digit arithmetic, types of error and the damaging effects of round-off. Review accuracy, efficiency, robustness and stability of algorithms.
- **Chapter 2.** Root finding. For bisection, review assumptions, algorithm, advantages and disadvantages. For fixed-point (Picard) iteration, also review existence and uniqueness and convergence. For Newton's method and the secant method, review derivation, algorithm, convergence and error estimation.

#### Taylor polynomial example 1

1. Find $P_4(x)$ for $e^x$ about $x_0=0$ on $[-1,1]$.
2. Write the remainder term.
3. Use the remainder to bound the error of $P_4(-0.5)$ as an approximation to $e^{-0.5}$.
4. Use a calculator to find the absolute error.

### PDF page 30

At $x_0=0$, the exponential has $f^{(j)}(0)=1$ for all $j$. Therefore

$$
P_4(x)=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!},
\qquad
R_4(x)=\frac{f^{(5)}(\xi)(x-x_0)^5}{5!}=\frac{e^\xi x^5}{5!}.
$$

The remainder point $\xi$ lies between the evaluation point $x$ and the expansion center $x_0$. In the example at $x=-0.5$, this gives $-0.5\le \xi\le 0$.

For a bisection example, take $f(x)=3x-e^x$ on $[1,2]$. Since $f(1)\approx0.28$ and $f(2)\approx-1.39$, the intermediate value theorem guarantees a root. The first three brackets and midpoints are as follows, with the midpoint residuals recalculated from the stated function.

| $n$ | $a$ | $b$ | $p_n$ | $f(p_n)$ |
| ---: | ---: | ---: | ---: | ---: |
| $1$ | $1$ | $2$ | $3/2$ | $0.01831$ |
| $2$ | $3/2$ | $2$ | $7/4$ | $-0.50460$ |
| $3$ | $3/2$ | $7/4$ | $13/8$ | $-0.20342$ |

#### October 4, 2016 lecture. Chapter 3, interpolation and approximation

Midterm scheduled for November 1. The chapter covers linear, quadratic and higher-order polynomial interpolation, Lagrange functions, Newton divided differences, interpolation error, Chebyshev polynomials and least-squares approximation.

### PDF page 31

#### Polynomial interpolation

Interpolation extends a function known only at discrete points, supplies an easy-to-evaluate approximation to an expensive function, and helps create smooth curves and surfaces in computer graphics.

**Weierstrass approximation theorem.** If $f\in C[a,b]$, then for each $\varepsilon>0$ there is a polynomial $P_n$ such that $|f(x)-P_n(x)|<\varepsilon$ for every $x\in[a,b]$.

![[Kyle Kabasares - Numerical Analysis - Weierstrass approximation.png|**Fig. 17** A polynomial $P_n$ and the function $f$ it approximates.]]


#### Linear interpolation

The interpolant through $(x_0,y_0)$ and $(x_1,y_1)$ with $x_0\ne x_1$ follows from the line equation. For distinct heights, write

$$
\frac{y-y_0}{y_1-y_0}=\frac{x-x_0}{x_1-x_0}.
$$

The resulting formula also works when the heights are equal.

$$
\begin{aligned}
P_1(x)&=\frac{x_1-x}{x_1-x_0}y_0+\frac{x-x_0}{x_1-x_0}y_1\\
&=\frac{x-x_1}{x_0-x_1}y_0+\frac{x-x_0}{x_1-x_0}y_1.
\end{aligned}
$$

![[Kyle Kabasares - Numerical Analysis - Linear interpolant.png|**Fig. 18** The straight line through the two data points defines the linear interpolant.]]

### PDF page 32

The linear interpolant matches the data at the nodes, $P_1(x_i)=y_i$ for $i=0,1$.

#### Quadratic interpolation

Given $(x_0,y_0)$, $(x_1,y_1)$ and $(x_2,y_2)$ with distinct nodes, form the Lagrange basis polynomials

$$
\begin{aligned}
L_0(x)&=\frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)},\\
L_1(x)&=\frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)},\\
L_2(x)&=\frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}.
\end{aligned}
$$

Each basis polynomial is quadratic and satisfies the Kronecker delta property

$$
L_i(x_j)=\delta_{ij}=
\begin{cases}
1,&i=j,\\
0,&i\ne j.
\end{cases}
$$

The Lagrange formula $P_2(x)=L_0(x)y_0+L_1(x)y_1+L_2(x)y_2$ has degree at most two and satisfies $P_2(x_0)=y_0$, $P_2(x_1)=y_1$ and $P_2(x_2)=y_2$.

For an example, substitute the data $(0,-1)$, $(1,-1)$ and $(2,7)$ into the formula.

### PDF page 33

Substituting the three data points gives

$$
\begin{aligned}
P_2(x)
&=\frac{(x-1)(x-2)}{(0-1)(0-2)}(-1)
+\frac{(x-0)(x-2)}{(1-0)(1-2)}(-1)
+\frac{(x-0)(x-1)}{(2-0)(2-1)}(7)\\
&=4x^2-4x-1.
\end{aligned}
$$

In particular, $P_2(0)=-1$, $P_2(1)=-1$ and $P_2(2)=7$.

#### Higher-degree interpolation

For $n+1$ data points $(x_0,y_0),\ldots,(x_n,y_n)$ with distinct nodes, the Lagrange formulas are

$$
L_i(x)=\prod_{\substack{0\le j\le n\\j\ne i}}\frac{x-x_j}{x_i-x_j},
\qquad
P_n(x)=\sum_{i=0}^n L_i(x)y_i.
$$

Each $L_i$ still satisfies $L_i(x_j)=\delta_{ij}$. For instance, the last basis polynomial is $L_n(x)=\prod_{j=0}^{n-1}(x-x_j)/(x_n-x_j)$, with the ratio understood factor by factor.

#### Lagrange interpolation error

Let $x_0,\ldots,x_n$ be distinct nodes in $[a,b]$, and let $P_n$ interpolate $f$ at those nodes. For $f\in C^{n+1}[a,b]$ and an evaluation point $x$ distinct from the nodes, there is a point $\xi$ between the smallest and largest of $x,x_0,\ldots,x_n$ such that

$$
f(x)=P_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)(x-x_1)\cdots(x-x_n).
$$

At a node, the error is zero.

### PDF page 34

The interpolation conditions are $\deg P_n\le n$ and $P_n(x_i)=y_i$. For $f(x)=1/x$, use the nodes $x_0=2$, $x_1=2.75$ and $x_2=4$ to construct $P_2$, then approximate $f(3)$ and determine the error.

$$
\begin{aligned}
P_2(x)
&=\frac{(x-2.75)(x-4)}{(2-2.75)(2-4)}\cdot\frac12\\
&\quad+\frac{(x-2)(x-4)}{(2.75-2)(2.75-4)}\cdot\frac1{2.75}\\
&\quad+\frac{(x-2)(x-2.75)}{(4-2)(4-2.75)}\cdot\frac14\\
&=\frac{x^2}{22}-\frac{35x}{88}+\frac{49}{44}.
\end{aligned}
$$

This gives $P_2(3)=29/88\approx0.32955$. The derivatives are $f'(x)=-x^{-2}$, $f''(x)=2x^{-3}$ and $f^{(3)}(x)=-6x^{-4}$. Substituting into the interpolation error formula gives

$$
f(x)-P_2(x)
=\frac{f^{(3)}(\xi)}{3!}(x-2)(x-2.75)(x-4)
=-\frac{(x-2)(x-2.75)(x-4)}{\xi^4},
$$

where $\xi\in(2,4)$ for an evaluation point $x\in[2,4]$ distinct from the nodes.

### PDF page 35

Since $2\le\xi\le4$ in the preceding example, $4^{-4}\le \xi^{-4}\le 2^{-4}$ and $|f(x)-P_2(x)|\le |k(x)|/16$, where $k(x)=(x-2)(x-2.75)(x-4)$. To maximize $|k|$ on $[2,4]$, examine the endpoints and the stationary points of $k$.

$$
k'(x)=3x^2-\frac{35}{2}x+\frac{49}{2}=\tfrac12(3x-7)(2x-7).
$$

The stationary points are $7/3$ and $7/2$. Their values are about $0.23$ and $-0.56$, respectively, and the endpoints give zero. The maximum absolute value is $9/16$ at $x=7/2$. Thus the uniform bound is $9/256\approx 0.03516$, of order $10^{-2}$.

#### Divided differences

Divided differences let us build the interpolating polynomial by reusing previous calculations. The first-order difference at distinct nodes is

$$
f[x_0,x_1]=\frac{f(x_1)-f(x_0)}{x_1-x_0}.
$$

For continuous $f$ differentiable between the nodes, the mean value theorem gives $f[x_0,x_1]=f'(c)$ for some $c$ between them. With nearby nodes and a continuous derivative, $f'((x_0+x_1)/2)$ evaluated at the midpoint is an approximation to this slope. For three distinct nodes, the second-order divided difference is

$$
f[x_0,x_1,x_2]=\frac{f[x_1,x_2]-f[x_0,x_1]}{x_2-x_0}.
$$

### PDF page 36

For distinct nodes, higher-order divided differences are recursive.

$$
\begin{aligned}
f[x_0,x_1,x_2,x_3]&=\frac{f[x_1,x_2,x_3]-f[x_0,x_1,x_2]}{x_3-x_0},\\
f[x_0,\ldots,x_n]&=\frac{f[x_1,\ldots,x_n]-f[x_0,\ldots,x_{n-1}]}{x_n-x_0}.
\end{aligned}
$$

If $n\ge1$, $f$ has $n$ continuous derivatives on $[\alpha,\beta]$, and $x_0,\ldots,x_n$ are distinct points there, then

$$
f[x_0,\ldots,x_n]=\frac{f^{(n)}(c)}{n!}
$$

for some $c$ between the smallest and largest nodes.

For $f(x)=\cos x$ at $x_0=0.2$, $x_1=0.3$ and $x_2=0.4$,

$$
\begin{aligned}
f[x_1,x_2]&=\frac{\cos(0.4)-\cos(0.3)}{0.4-0.3}\approx-0.3427,\\
f[x_0,x_1]&\approx-0.2473,\\
f[x_0,x_1,x_2]&\approx-0.4772705.
\end{aligned}
$$

Using the midpoint for $c$ in $f''(c)/2!$ gives $-\cos(0.3)/2\approx-0.4776682$. The order of nodes within a divided difference does not affect its value, as illustrated by $f[x_1,x_0]=f[x_0,x_1]$.

#### Newton's divided difference interpolation formula

The interpolant $P_n$ has degree at most $n$ and satisfies $P_n(x_i)=f(x_i)$ for $i=0,\ldots,n$. The first two cases are

$$
\begin{aligned}
P_1(x)&=f(x_0)+(x-x_0)f[x_0,x_1],\\
P_2(x)&=P_1(x)+(x-x_0)(x-x_1)f[x_0,x_1,x_2].
\end{aligned}
$$

### PDF page 37

#### October 7, 2016 discussion

For $f(x)=e^x$ and five given nodes $x_i$, $i=0,\ldots,4$, the goal is to construct the interpolant using Newton divided differences.

$$
\begin{aligned}
P_4(x)={}&f(x_0)+f[x_0,x_1](x-x_0)\\
&+f[x_0,x_1,x_2](x-x_0)(x-x_1)\\
&+f[x_0,x_1,x_2,x_3](x-x_0)(x-x_1)(x-x_2)\\
&+f[x_0,x_1,x_2,x_3,x_4](x-x_0)(x-x_1)(x-x_2)(x-x_3).
\end{aligned}
$$

Start with $f[x_0,x_1]=(f(x_1)-f(x_0))/(x_1-x_0)$, and use neighboring entries from each column to build the next column. The page has the following partial table. The numerical entries are as written and do not match either $e^{x_i}$ or the differences calculated from the displayed function values.

| $i$ | $x_i$ | $f(x_i)$ | First differences as written | Second differences as written |
| ---: | ---: | ---: | ---: | ---: |
| $0$ | $1$ | $0.76$ | $-0.48$ | $-0.10$ |
| $1$ | $2$ | $0.62$ | $-0.54$ | $-0.40$ |
| $2$ | $3$ | $-0.45$ | $-0.578$ | $0.01$ |
| $3$ | $4$ | $-0.28$ | $-0.571$ | — |

The first-column work lists $f[x_0,x_1]\approx-0.48$, $f[x_1,x_2]\approx-0.54$, $f[x_2,x_3]\approx-0.57$, and starts the expression for $f[x_3,x_4]$. The next column starts with

$$
f[x_0,x_1,x_2]=\frac{f[x_1,x_2]-f[x_0,x_1]}{x_2-x_0}.
$$

The handwritten value at the bottom is $-0.18$. The page leaves the higher columns incomplete.

### PDF page 38

The October 7 example continues with the second-order entry

$$
f[x_1,x_2,x_3]=\frac{f[x_2,x_3]-f[x_1,x_2]}{x_3-x_1}.
$$

The notes list $-0.40$ for this entry and $0.06$ for $f[x_0,x_1,x_2,x_3]$, then leave $f[x_1,x_2,x_3,x_4]$ unfinished. These are the handwritten values from the partial table.

#### October 11, 2016 lecture. Interpolation error

**Existence and uniqueness.** For $n\ge 0$, distinct nodes $x_0,\ldots,x_n$ and data values $y_0,\ldots,y_n$, there is exactly one polynomial $P_n$ of degree at most $n$ with $P_n(x_i)=y_i$ for each $i$. If $y_i=f(x_i)$, the Lagrange representation is $P_n(x)=\sum_{j=0}^n f(x_j)L_j(x)$.

**Error theorem.** If $f\in C^{n+1}[a,b]$ and $x_0,\ldots,x_n$ are distinct nodes in $[a,b]$, then for $x\in[a,b]$,

$$
f(x)-P_n(x)=\frac{\psi_n(x)}{(n+1)!}f^{(n+1)}(\xi),
\qquad
\psi_n(x)=\prod_{i=0}^n(x-x_i).
$$

The point $\xi$ lies between the minimum and maximum of $x_0,\ldots,x_n,x$.

To derive the error formula using Newton divided differences, construct $P_{n+1}$ interpolating $f$ at the $n+2$ nodes $x_0,\ldots,x_n,x_{n+1}$.

### PDF page 39

Newton's formula for one additional node is

$$
P_{n+1}(x)=P_n(x)+\left(\prod_{i=0}^n(x-x_i)\right) f[x_0,\ldots,x_n,x_{n+1}].
$$

Set the new node $x_{n+1}=t$, distinct from the existing nodes. Since $P_{n+1}(t)=f(t)$, the error is

$$
f(t)-P_n(t)=\left(\prod_{i=0}^n(t-x_i)\right)f[x_0,\ldots,x_n,t].
$$

Comparing with the derivative form of the error and canceling the nonzero product gives

$$
f[x_0,\ldots,x_n,t]=\frac{f^{(n+1)}(\xi)}{(n+1)!},
$$

where $\xi$ lies between the least and greatest of the nodes and $t$. With $m=n+1$ and $t=x_m$, this is $f[x_0,\ldots,x_m]=f^{(m)}(\xi)/m!$.

#### Spline interpolation

Suppose $n$ data points $(x_i,y_i)$ are given, with $x_1<\cdots<x_n$, $a=x_1$ and $b=x_n$. Seek $s$ on $[a,b]$ with $s(x_i)=y_i$ for $i=1,\ldots,n$. Require continuity of $s'$ and $s''$ for smoothness, and seek to minimize $\int_a^b[s''(x)]^2\,dx$.

### PDF page 40

The minimization problem has a unique solution, the **natural cubic spline** interpolating the data. It satisfies three properties.

1. On each $[x_{j-1},x_j]$ for $j=2,\ldots,n$, $s$ is a polynomial of degree at most three.
2. The functions $s$, $s'$ and $s''$ are continuous on $[a,b]$.
3. The endpoint second derivatives vanish, $s''(x_1)=s''(x_n)=0$.

#### Constructing the natural cubic spline

Let $M_i=s''(x_i)$ for $i=1,\ldots,n$. Express the spline in terms of these unknowns, then derive equations to solve for them.

On $[x_{j-1},x_j]$, the second derivative of the cubic piece is linear. Interpolate between $s''(x_{j-1})=M_{j-1}$ and $s''(x_j)=M_j$ to obtain

$$
s''(x)=\frac{(x_j-x)M_{j-1}+(x-x_{j-1})M_j}{x_j-x_{j-1}},
\qquad x_{j-1}\le x\le x_j.
$$

Integrate twice on this subinterval and impose the conditions $s(x_{j-1})=y_{j-1}$ and $s(x_j)=y_j$.

### PDF page 41

Integrating the second derivative twice and enforcing interpolation at the endpoints gives

$$
\begin{aligned}
s(x)
={}&\frac{(x_j-x)^3 M_{j-1}+(x-x_{j-1})^3 M_j}{6(x_j-x_{j-1})}\\
&+\frac{(x_j-x)y_{j-1}+(x-x_{j-1})y_j}{x_j-x_{j-1}}\\
&-\frac{x_j-x_{j-1}}{6}\bigl[(x_j-x)M_{j-1}+(x-x_{j-1})M_j\bigr].
\end{aligned}
$$

Matching the first derivatives at the interior knots gives, for $j=2,\ldots,n-1$,

$$
\begin{aligned}
&\frac{x_j-x_{j-1}}6 M_{j-1}
+\frac{x_{j+1}-x_{j-1}}3 M_j
+\frac{x_{j+1}-x_j}6 M_{j+1}\\
&\qquad=\frac{y_{j+1}-y_j}{x_{j+1}-x_j}
-\frac{y_j-y_{j-1}}{x_j-x_{j-1}}.
\end{aligned}
\tag{4.64}
$$

These $n-2$ equations and the natural conditions $M_1=M_n=0$ from (4.65) determine the $M_i$ and hence $s$.

For the data $(1,1)$, $(2,1/2)$, $(3,1/3)$ and $(4,1/4)$, all node spacings equal one. The system is

$$
\begin{aligned}
\tfrac16 M_1+\tfrac23 M_2+\tfrac16 M_3&=\tfrac13,\\
\tfrac16 M_2+\tfrac23 M_3+\tfrac16 M_4&=\tfrac1{12}.
\end{aligned}
$$

For example, at $j=2$ the right side is $(1/3-1/2)/(3-2)-(1/2-1)/(2-1)=1/3$.

### PDF page 42

#### October 18, 2016 lecture. Cubic spline interpolation continued

Here the nodes are indexed $x_0,\ldots,x_n$.

1. Each piece $s_j$ is a cubic polynomial on $[x_j,x_{j+1}]$ for $j=0,\ldots,n-1$.
2. The endpoints of each piece interpolate the data, $s_j(x_j)=f(x_j)$ and $s_j(x_{j+1})=f(x_{j+1})$.
3. At $x_{j+1}$ for $j=0,\ldots,n-2$, the adjacent pieces agree, $s_{j+1}(x_{j+1})=s_j(x_{j+1})$.
4. Their first derivatives agree, $s'_{j+1}(x_{j+1})=s'_j(x_{j+1})$.
5. Their second derivatives agree, $s''_{j+1}(x_{j+1})=s''_j(x_{j+1})$.
6. Natural boundary conditions are $s''(x_0)=s''(x_n)=0$. Clamped boundary conditions are $s'(x_0)=f'(x_0)$ and $s'(x_n)=f'(x_n)$.

#### Constructing a cubic spline in local powers

$$
\begin{aligned}
s_j(x)&=a_j+b_j(x-x_j)+c_j(x-x_j)^2+d_j(x-x_j)^3,\\
s_j'(x)&=b_j+2c_j(x-x_j)+3d_j(x-x_j)^2,\\
s_j''(x)&=2c_j+6d_j(x-x_j).
\end{aligned}
$$

Interpolation at $x_j$ gives $a_j=f(x_j)$. Set $h_j=x_{j+1}-x_j$ and define $a_n=f(x_n)$ as well. Interpolation at $x_{j+1}$ gives

$$
a_{j+1}=a_j+b_jh_j+c_jh_j^2+d_jh_j^3,\qquad j=0,\ldots,n-1.
$$

Matching first derivatives gives $b_{j+1}=b_j+2c_jh_j+3d_jh_j^2$ at each interior knot. The formula also holds for $j=n-1$ if $b_n$ is defined as the right endpoint derivative $s'(x_n)$.

### PDF page 43

For the second derivatives, $s_j''(x_j)=2c_j$. Define $s''(x_n)=2c_n$ at the right endpoint. Matching at $x_{j+1}$ gives

$$
2c_{j+1}=2c_j+6d_jh_j,\qquad
d_j=\frac{c_{j+1}-c_j}{3h_j},\qquad j=0,\ldots,n-1.
$$

Substituting into the interpolation equation yields

$$
a_{j+1}=a_j+b_jh_j+\frac{h_j^2}{3}(2c_j+c_{j+1}),\qquad
b_j=\frac{a_{j+1}-a_j}{h_j}-\frac{h_j}{3}(2c_j+c_{j+1}).
$$

With the formula for $d_{j-1}$, the first-derivative matching equation becomes $b_j=b_{j-1}+h_{j-1}(c_{j-1}+c_j)$. Substitute the expressions for $b_j$ and $b_{j-1}$ and collect coefficients. For $j=1,\ldots,n-1$,

$$
\begin{aligned}
h_{j-1}c_{j-1}+2(h_{j-1}+h_j)c_j+h_jc_{j+1}
&=\frac{3}{h_j}(a_{j+1}-a_j)-\frac{3}{h_{j-1}}(a_j-a_{j-1}).
\end{aligned}
$$

The natural conditions are $c_0=c_n=0$. The spacings $h_j$ and the values $a_j=f(x_j)$ are known. Solve the system $Ac=b$ for $c_j$, then recover $b_j$ and $d_j$ from their formulas.

### PDF page 44

#### Spline interpolation and error

Data at ordered nodes $a=x_0<x_1<\cdots<x_n=b$ determine a unique natural cubic spline interpolant, satisfying $s''(a)=s''(b)=0$. For sufficiently smooth $f$ and a uniform mesh with $h=x_i-x_{i-1}$, the notes give

$$
\max_{a\le x\le b}|f(x)-s(x)|\le Ch^2.
$$

The constant depends on the endpoint curvatures $f''(a)$ and $f''(b)$ and a bound for $|f^{(4)}|$ on the interval.

#### Minimizing Lagrange interpolation error with Chebyshev polynomials

A **weight function** on an interval $I$ is integrable, nonnegative and nonzero on a set of positive measure in each nontrivial subinterval. It gives different parts of the interval different importance in an approximation.

![[Kyle Kabasares - Numerical Analysis - Chebyshev weight function.png|**Fig. 19** The weight $w(x)=1/\sqrt{1-x^2}$ increases toward both ends of $(-1,1)$.]]


A set $\{\phi_0,\phi_1,\ldots\}$ is orthogonal on $[a,b]$ with respect to $w$ if

$$
\int_a^b w(x)\phi_j(x)\phi_k(x)\,dx=
\begin{cases}
0,&j\ne k,\\
\alpha_j,&j=k,
\end{cases}
$$

where $\alpha_j>0$ is the squared norm. If every $\alpha_j=1$, the set is orthonormal.

### PDF page 45

The Chebyshev polynomials of the first kind are

$$
T_n(x)=\cos(n\arccos x),\qquad -1\le x\le1,\quad n\ge0.
$$

Under the change of variables $x=\cos\theta$, this becomes $T_n(\cos\theta)=\cos(n\theta)$. The first examples are $T_0(x)=1$, $T_1(x)=x$ and $T_2(x)=2x^2-1$. The polynomials are orthogonal with respect to the weight on the preceding page.

$$
\int_{-1}^1\frac{T_j(x)T_k(x)}{\sqrt{1-x^2}}\,dx=
\begin{cases}
0,&j\ne k,\\
\alpha_j,&j=k.
\end{cases}
$$

The recursion for $n\ge1$ is $T_{n+1}(x)=2xT_n(x)-T_{n-1}(x)$. For example, $T_3(x)=2x(2x^2-1)-x$ and $T_4(x)=2xT_3(x)-T_2(x)$. To derive it, use $\cos(\alpha\pm\beta)=\cos\alpha\cos\beta\mp\sin\alpha\sin\beta$.

$$
\begin{aligned}
T_{n+1}(x)&=\cos(n\theta)\cos\theta-\sin(n\theta)\sin\theta,\\
T_{n-1}(x)&=\cos(n\theta)\cos\theta+\sin(n\theta)\sin\theta.
\end{aligned}
$$

Adding gives $T_{n+1}(x)+T_{n-1}(x)=2xT_n(x)$.

For the minimum-size property, note that $|T_n(x)|\le1$ on $[-1,1]$ and that for $n\ge1$ the leading term is $2^{n-1}x^n$.

### PDF page 46

For $n\ge1$, the monic Chebyshev polynomial is $\widetilde T_n(x)=T_n(x)/2^{n-1}=x^n+\text{lower-degree terms}$. The leading term follows by induction from the recurrence.

#### October 25, 2016 lecture. Least-squares approximations

Continuing with Chebyshev polynomials, extend the interpolation points from $[-1,1]$ to a general closed interval $[a,b]$ by the change of variables

$$
\widetilde x=\frac{(b-a)x+a+b}{2}.
$$

For $f(x)=xe^x$ on $[0,1.5]$, compare the cubic Lagrange interpolant on four equally spaced nodes with the interpolant on the mapped zeros of $T_4$.

![[Kyle Kabasares - Numerical Analysis - Equally spaced interpolation nodes.png|**Fig. 20** The equally spaced nodes are $0$, $0.5$, $1$ and $1.5$.]]


For the equally spaced nodes, $f(0)=0$, $f(0.5)=\tfrac12e^{1/2}$, $f(1)=e$ and $f(1.5)=1.5e^{1.5}$. Consequently

$$
P_3(x)=L_1(x)\tfrac12e^{1/2}+L_2(x)e+L_3(x)(1.5e^{1.5}),
$$

where

$$
\begin{aligned}
L_1(x)&=\frac{x(x-1)(x-1.5)}{(0.5)(-0.5)(-1)}=4x^3-10x^2+6x,\\
L_2(x)&=\frac{x(x-0.5)(x-1.5)}{(1)(0.5)(-0.5)}=-4x^3+8x^2-3x,\\
L_3(x)&=\frac{x(x-0.5)(x-1)}{(1.5)(1)(0.5)}=\tfrac43 x^3-2x^2+\tfrac23 x.
\end{aligned}
$$

### PDF page 47

The notes substitute the equally spaced basis polynomials and report $P_3(x)\approx1.38x^3+0.05x^2+1.27x$ using rounded coefficients for $L_3$.

The four zeros of $T_4$ are $x_j=\cos((2j+1)\pi/8)$, $j=0,1,2,3$. The transformation for $[0,1.5]$ is $\widetilde x=0.75x+0.75$.

| $j$ | $x_j$ | Approximate $x_j$ | Mapped value in the notes |
| ---: | --- | ---: | ---: |
| $0$ | $\cos(\pi/8)$ | $0.92$ | $1.44$ |
| $1$ | $\cos(3\pi/8)$ | $0.38$ | $1.035$ |
| $2$ | $\cos(5\pi/8)$ | $-0.38$ | $0.46$ |
| $3$ | $\cos(7\pi/8)$ | $-0.92$ | $0.05$ |

Using the mapped nodes for $f(x)=xe^x$, form $\widetilde P_3(x)=\sum_{i=0}^3 \widetilde L_i(x)f(\widetilde x_i)$. For instance,

$$
\widetilde L_0(x)=
\frac{(x-\widetilde x_1)(x-\widetilde x_2)(x-\widetilde x_3)}
{(\widetilde x_0-\widetilde x_1)(\widetilde x_0-\widetilde x_2)(\widetilde x_0-\widetilde x_3)}.
$$

The handwritten approximate expansions are

$$
\begin{aligned}
\widetilde L_0(x)&\approx 1.81x^3-2.52x^2+1.02x-0.01,\\
\widetilde L_1(x)&\approx-4.37x^3+8.59x^2-3.4x+0.16,\\
\widetilde L_2(x)&\approx 4.37x^3-11.11x^2+7.17x-0.37,\\
\widetilde L_3(x)&\approx-1.81x^3+5.33x^2-4.79x+1.25.
\end{aligned}
$$

The page reports $\widetilde P_3(x)\approx1.38x^3+0.04x^2+1.30x-0.01$.

### PDF page 48

#### October 27, 2016 lecture. Review for the November 1 midterm

- Linear interpolation uses a polynomial of degree at most one that agrees with the data at the nodes.
- Review quadratic interpolation with Lagrange polynomials, higher-degree interpolation, and first- and second-order Newton divided differences.
- For splines, review natural and clamped boundary conditions, the construction of a cubic spline interpolant, its properties, and its error.
- For Chebyshev polynomials, review their properties and orthogonality with respect to the weight, why their zeros matter for minimizing the interpolation error, and how to use the error formula. Know how to extend the construction to an arbitrary interval.

Recommended textbook examples include Example 1 on page 106, Example 2 on page 108, Examples 3 and 4 on page 111, Example 1 on page 124, an example on page 144 whose number was overwritten, Example 2 on page 148, and Example 1 on page 531.

| Section | Pages | Recommended exercises |
| --- | --- | --- |
| 3.2 | 113–114 | 1(a,b), 2(a), 3, 15 |
| 3.5 | 158–159 | 1, 3(a), 5(a), 11, 12 |
| 8.3 | 533–534 | 1, 3, 5(a) |

### PDF page 49

**Corollary 8.11 (page 531).** If $f\in C^{n+1}[-1,1]$ and $P_n$ interpolates $f$ at the $n+1$ zeros of $T_{n+1}$, then

$$
\max_{-1\le x\le1}|f(x)-P_n(x)|\le
\frac{1}{2^n(n+1)!}\max_{-1\le x\le1}|f^{(n+1)}(x)|.
$$

#### Interpolation with Chebyshev polynomials

Discrete orthogonality at the Chebyshev nodes $x_0,\ldots,x_n$ gives an efficient formula. The constant term is weighted by one half.

$$
P_n(x)=\tfrac12 c_0T_0(x)+\sum_{i=1}^n c_iT_i(x),\qquad
c_i=\frac{2}{n+1}\sum_{k=0}^n f(x_k)T_i(x_k),\quad i=0,\ldots,n.
$$

#### Discrete least-squares approximation

For data fitting, choose a polynomial $P_n$ that minimizes the sum of squared residuals $\sum_i(y_i-P_n(x_i))^2$.

![[Kyle Kabasares - Numerical Analysis - Least-squares line.png|**Fig. 21** A line fitted to scattered data points. The objective measures each residual in the data value at its given abscissa.]]

### PDF page 50

#### Linear least-squares approximation

Given $m$ data points $(x_i,y_i)$, find the line $P_1(x)=a_0+a_1x$ that minimizes the least-squares error

$$
E_2(a_0,a_1)=\frac12\sum_{i=1}^m\bigl(y_i-(a_0+a_1x_i)\bigr)^2.
\tag{1}
$$

Set the partial derivatives with respect to $a_0$ and $a_1$ to zero.

$$
\begin{aligned}
0=\frac{\partial E_2}{\partial a_0}&=-\sum_{i=1}^m(y_i-a_0-a_1x_i),\\
0=\frac{\partial E_2}{\partial a_1}&=-\sum_{i=1}^m x_i(y_i-a_0-a_1x_i).
\end{aligned}
$$

Collecting the coefficients gives the normal equations.

$$
\begin{bmatrix}
m & \sum_i x_i\\
\sum_i x_i & \sum_i x_i^2
\end{bmatrix}
\begin{bmatrix}a_0\\a_1\end{bmatrix}
=
\begin{bmatrix}\sum_i y_i\\ \sum_i x_iy_i\end{bmatrix}.
$$

The matrix on the left is $A^{\mathsf T}A$, where $A$ has rows $(1,x_i)$.

$$
A^{\mathsf T}A=
\begin{bmatrix}
1 & 1 & \cdots & 1\\
x_1 & x_2 & \cdots & x_m
\end{bmatrix}
\begin{bmatrix}
1 & x_1\\
1 & x_2\\
\vdots & \vdots\\
1 & x_m
\end{bmatrix}.
$$

### PDF page 51

Write the normal equations as $A^{\mathsf T}A\mathbf a=A^{\mathsf T}\mathbf y$, with $\mathbf a=(a_0,a_1)^{\mathsf T}$ and $\mathbf y=(y_1,\ldots,y_m)^{\mathsf T}$.

Find the least-squares line for $(0,6)$, $(1,0)$ and $(2,0)$. Then

$$
A=\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix},\qquad
A^{\mathsf T}=\begin{bmatrix}1&1&1\\0&1&2\end{bmatrix},
\qquad
\mathbf y=\begin{bmatrix}6\\0\\0\end{bmatrix}.
$$

The products are $A^{\mathsf T}A=\begin{bmatrix}3&3\\3&5\end{bmatrix}$ and $A^{\mathsf T}\mathbf y=(6,0)^{\mathsf T}$. Thus

$$
\mathbf a=(A^{\mathsf T}A)^{-1}A^{\mathsf T}\mathbf y
=\frac16\begin{bmatrix}5&-3\\-3&3\end{bmatrix}
\begin{bmatrix}6\\0\end{bmatrix}
=\frac16\begin{bmatrix}30\\-18\end{bmatrix}
=\begin{bmatrix}5\\-3\end{bmatrix}.
$$

The fitted line is $y=5-3x$.

#### November 2, 2016 class notes. Continuous least squares

For continuous least squares, approximate a function $f\in C[a,b]$ with $P_n(x)=\sum_{k=0}^n a_kx^k$. Choose the coefficients to minimize

$$
E_2(a_0,\ldots,a_n)=\int_a^b(f(x)-P_n(x))^2\,dx.
$$

A necessary condition at a minimum is $\partial E_2/\partial a_j=0$ for $j=0,\ldots,n$.

### PDF page 52

In the monomial basis, the $n+1$ normal equations for the $n+1$ coefficients are

$$
\sum_{k=0}^n a_k\int_a^b x^{j+k}\,dx=\int_a^b x^j f(x)\,dx,\qquad j=0,\ldots,n.
\tag{*}
$$

On $[0,1]$, the coefficient $\int_0^1 x^{j+k}\,dx=1/(j+k+1)$ is an entry of the Hilbert matrix, a classic example of an ill-conditioned matrix. This makes the normal equations difficult to solve numerically. The notes motivate using a basis of special polynomials, such as Chebyshev polynomials with their corresponding weight.

#### Linear independence of a polynomial basis

The functions $\phi_0,\ldots,\phi_n$ are **linearly independent** on $[a,b]$ if

$$
\sum_{j=0}^n c_j\phi_j(x)=0\quad\text{for all }x\in[a,b]
$$

implies $c_0=\cdots=c_n=0$. If a nontrivial combination vanishes, the functions are linearly dependent.

**Theorem.** If $\phi_j$ has degree exactly $j$ for each $j=0,\ldots,n$, then $\{\phi_0,\ldots,\phi_n\}$ is linearly independent on any interval $[a,b]$ with $a<b$. Write $\Pi_n$ for the space of polynomials of degree at most $n$.

### PDF page 53

If $\phi_0,\ldots,\phi_n$ are linearly independent polynomials in $\Pi_n$, they form a basis. Every $P_n\in\Pi_n$ can be written as $P_n(x)=\sum_{j=0}^n c_j\phi_j(x)$.

If $\phi_0,\ldots,\phi_n$ form an orthogonal set for the weight $w$ on $[a,b]$, the weighted least-squares approximation from their span is

$$
P_n(x)=\sum_{j=0}^n a_j\phi_j(x),\qquad
a_j=\frac{\displaystyle\int_a^b w(x)\phi_j(x)f(x)\,dx}
{\displaystyle\int_a^b w(x)\phi_j(x)^2\,dx}.
$$

### PDF page 54

#### November 8, 2016 lecture with Dr. Kim. Numerical integration

The aim is to compute a definite integral $I=\int_a^b f(x)\,dx$. If $f=F'$, the fundamental theorem of calculus gives $I=F(b)-F(a)$. Numerical integration is useful when the antiderivative is unknown or inconvenient to evaluate.

For example, take the initial-value problem $y'+2ty=\sin t$, $y(0)=y_0$. Multiplying by the integrating factor $e^{\int 2t\,dt}=e^{t^2}$ gives

$$
(ye^{t^2})'=e^{t^2}\sin t.
$$

Integrating from $0$ to $t$ and dividing by $e^{t^2}$ gives

$$
y(t)=y_0e^{-t^2}+e^{-t^2}\int_0^t e^{\tau^2}\sin\tau\,d\tau.
$$

In particular, computing $y(2)$ requires $\int_0^2 e^{\tau^2}\sin\tau\,d\tau$. **Numerical quadrature** approximates definite integrals such as this one.

### PDF page 55

Replace $f$ with a polynomial interpolant, then integrate that polynomial exactly. For the linear Lagrange interpolant on $[x_0,x_1]$,

$$
P_1(x)=\frac{x-x_1}{x_0-x_1}f(x_0)+\frac{x-x_0}{x_1-x_0}f(x_1).
$$

Using $\int (u-c)\,du=\tfrac12(u-c)^2+C$, we get

$$
\begin{aligned}
\int_{x_0}^{x_1}f(x)\,dx
&\approx\int_{x_0}^{x_1}P_1(x)\,dx\\
&=\frac{f(x_0)}{x_0-x_1}\left[\tfrac12(x-x_1)^2\right]_{x_0}^{x_1}
+\frac{f(x_1)}{x_1-x_0}\left[\tfrac12(x-x_0)^2\right]_{x_0}^{x_1}\\
&=\frac{x_1-x_0}{2}\bigl[f(x_0)+f(x_1)\bigr].
\end{aligned}
$$

This is the **trapezoid rule**, the average of the left- and right-endpoint rectangle rules.

![[Kyle Kabasares - Numerical Analysis - Trapezoid rule area.png|**Fig. 22** The trapezoid uses the line joining the function values at $a$ and $b$.]]

### PDF page 56

#### Simpson's rule from the quadratic interpolant

Approximate $\int_{x_0}^{x_2}f(x)\,dx$ by the integral of $P_2(x)$ through $x_0,x_1,x_2$.

![[Kyle Kabasares - Numerical Analysis - Simpson rule area.png|**Fig. 23** The sketch marks the three nodes for quadrature using a quadratic interpolant.]]


With the Lagrange basis written explicitly, the integral is

$$
\begin{aligned}
\int_{x_0}^{x_2}P_2(x)\,dx
={}&\frac{f(x_0)}{(x_0-x_1)(x_0-x_2)}
\int_{x_0}^{x_2}(x-x_1)(x-x_2)\,dx\\
&+\frac{f(x_1)}{(x_1-x_0)(x_1-x_2)}
\int_{x_0}^{x_2}(x-x_0)(x-x_2)\,dx\\
&+\frac{f(x_2)}{(x_2-x_0)(x_2-x_1)}
\int_{x_0}^{x_2}(x-x_0)(x-x_1)\,dx.
\end{aligned}
$$

For each integral, use $\int (x-a)(x-b)\,dx=x^3/3-(a+b)x^2/2+abx+C$. The respective pairs $(a,b)$ are $(x_1,x_2)$, $(x_0,x_2)$ and $(x_0,x_1)$. Evaluate each antiderivative at $x_2$ and $x_0$ and take the difference.

### PDF page 57

The coefficient of $f(x_0)$ in the quadratic quadrature formula is

$$
\begin{aligned}
\int_{x_0}^{x_2}L_0(x)\,dx
&=\frac{\left[x^3/3-(x_1+x_2)x^2/2+x_1x_2x\right]_{x_0}^{x_2}}
{(x_0-x_1)(x_0-x_2)}\\
&=\frac{-x_2^3/6+x_1x_2^2/2-x_0^3/3
+(x_1+x_2)x_0^2/2-x_0x_1x_2}
{(x_0-x_1)(x_0-x_2)}.
\end{aligned}
$$

Choosing equally spaced nodes with $x_1-x_0=x_2-x_1=h$ simplifies the expressions and gives Simpson's rule.

#### November 10, 2016 lecture with Dr. Tokman. Numerical integration continued

Replace $f$ by a polynomial and integrate the polynomial to approximate $I[f]=\int_a^b f(x)\,dx$.

![[Kyle Kabasares - Numerical Analysis - Trapezoid under a concave curve.png|**Fig. 24** The area under the straight interpolant approximates the area under the curve on $[a,b]$.]]


For example, $\int_0^{\pi/2}\sin x\,dx$ could be approximated by integrating a truncated Taylor series. The Taylor polynomial uses the function and its derivatives at one point. The Lagrange interpolant uses function values at multiple nodes.

![[Kyle Kabasares - Numerical Analysis - Taylor and Lagrange input data.png|**Fig. 25** Taylor approximation uses data at $x_0$, and Lagrange interpolation uses values at $x_0,x_1,x_2$.]]


The degree-one Lagrange interpolant through $(a,f(a))$ and $(b,f(b))$ is

$$
P_1(x)=\frac{(b-x)f(a)+(x-a)f(b)}{b-a}.
$$

Integrating it gives the trapezoidal rule.

### PDF page 58

The trapezoidal approximation is $I_T[f]=\tfrac12(b-a)(f(a)+f(b))$. For the sine example,

$$
I_T[\sin]=\frac\pi4\bigl(\sin(\pi/2)+\sin0\bigr)=\frac\pi4\approx0.785398.
$$

The exact integral is $[-\cos x]_0^{\pi/2}=1$, so the error is $1-\pi/4\approx0.215$.

A more accurate approximation can use both endpoint values and the midpoint value $f((a+b)/2)$. These are the three values used to construct the quadratic interpolant for Simpson's rule.

![[Kyle Kabasares - Numerical Analysis - Endpoint and midpoint quadrature nodes.png|**Fig. 26** The three nodes are the two endpoints and the midpoint.]]


The second numerical example on this page uses the **composite trapezoid rule** on two equal subintervals. Although the handwritten error expression labels it $I_S$, its weights are $1,2,1$.

$$
\frac\pi8\bigl[\sin0+2\sin(\pi/4)+\sin(\pi/2)\bigr]\approx0.948059.
$$

The absolute error is about $0.0519$. The lecture defers the proof of the trapezoidal error formula to Tuesday.

### PDF page 59

#### Error of the trapezoidal rule

For $f\in C^2[a,b]$ and $h=b-a$, the single-panel error is

$$
E_T[f]=I[f]-I_T[f]=-\frac{h^2(b-a)}{12}f''(\mu)
$$

for some $\mu\in(a,b)$. With $x_0=a$, $x_1=b$, integrate the linear interpolation error to obtain

$$
E_T[f]=\int_a^b \frac{(x-a)(x-b)}2 f''(\xi(x))\,dx.
$$

The factor $(x-a)(x-b)/2$ has fixed sign on the interval. The weighted average of the second-derivative values therefore lies between the minimum and maximum of $f''$. By continuity it equals $f''(\mu)$ for an intermediate $\mu$. The weight integrates to

$$
\frac12\left[\frac{x^3}{3}-\frac{a+b}{2}x^2+abx\right]_a^b
=-\frac{(b-a)^3}{12}.
$$

#### Composite integration

Split $[a,b]$ into subintervals and apply a low-order rule, such as the trapezoidal rule, on each one. For $x_0=a$, $x_n=b$ and equally spaced nodes with $h=(x_n-x_0)/n$,

$$
I[f]=\sum_{i=1}^n\int_{x_{i-1}}^{x_i}f(x)\,dx
\approx\sum_{i=1}^n\frac h2\bigl[f(x_{i-1})+f(x_i)\bigr].
$$

### PDF page 60

Combining repeated interior nodes gives the **composite trapezoidal rule**.

$$
T_n[f]=\frac h2\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$

#### Composite Simpson's rule

Let $n$ be even, $h=(b-a)/n$ and $x_i=a+ih$, $i=0,\ldots,n$. Apply the single-panel rule $\tfrac h3[f(x_0)+4f(x_1)+f(x_2)]$ to each pair of subintervals.

![[Kyle Kabasares - Numerical Analysis - Composite Simpson panels.png|**Fig. 27** Each Simpson panel spans two subintervals. Adjacent panels share their endpoints.]]


Thus

$$
S_n[f]=\frac h3\left[
f(x_0)+4\sum_{j=1}^{n/2}f(x_{2j-1})
+2\sum_{j=1}^{n/2-1}f(x_{2j})+f(x_n)\right].
$$

**Error theorem.** If $f\in C^4[a,b]$, then for some $\xi_n\in(a,b)$,

$$
E_n^S[f]=I[f]-S_n[f]=-\frac{h^4(b-a)}{180}f^{(4)}(\xi_n).
$$

This is a fourth-order method.

#### November 15, 2016 lecture. Deriving quadrature error formulas

Start from the Lagrange interpolant and its remainder.

$$
f(x)=P_n(x)+E_n(x)
=\sum_{i=0}^n f(x_i)L_i(x)
+\left(\prod_{i=0}^n(x-x_i)\right)\frac{f^{(n+1)}(\xi(x))}{(n+1)!}.
$$

### PDF page 61

Integrating the Lagrange formula separates the quadrature approximation and its error.

$$
\begin{aligned}
I[f]&=\sum_{i=0}^n f(x_i)\int_a^b L_i(x)\,dx+E_n^I,\\
E_n^I&=\int_a^b
\left(\prod_{i=0}^n(x-x_i)\right)\frac{f^{(n+1)}(\xi(x))}{(n+1)!}\,dx.
\end{aligned}
$$

For the trapezoidal rule, $n=1$, $x_0=a$ and $x_1=b$. The product has one sign on the interval, so the weighted mean value argument gives

$$
E_1^{I_T}=\frac{f''(\mu)}2\int_a^b(x-x_0)(x-x_1)\,dx
=-\frac{h^3}{12}f''(\mu),\qquad h=b-a.
$$

#### Simpson's rule

![[Kyle Kabasares - Numerical Analysis - Single Simpson panel nodes.png|**Fig. 28** One Simpson panel has endpoints $x_0=a$ and $x_2=b$ and midpoint $x_1=(a+b)/2$.]]


For $h=(b-a)/2$, the rule is $\int_{x_0}^{x_2} f(x)\,dx\approx \tfrac h3[f(x_0)+4f(x_1)+f(x_2)]$. Its interpolation error is

$$
E_2^{I_S}=\frac16\int_{x_0}^{x_2}(x-x_0)(x-x_1)(x-x_2) f^{(3)}(\xi(x))\,dx.
$$

Taking absolute values gives an $O(h^4)$ bound. The cubic weight changes sign at $x_1$, so the trapezoid mean value argument cannot be used to factor out a single third derivative. A Taylor expansion about $x_1$ reveals the sharper $O(h^5)$ local error.

$$
f(x)=f(x_1)+(x-x_1)f'(x_1)
+\frac{(x-x_1)^2}{2}f''(x_1)
+\frac{(x-x_1)^3}{3!}f^{(3)}(x_1)
+\frac{(x-x_1)^4}{4!}f^{(4)}(\xi(x)).
$$

On integration from $x_1-h$ to $x_1+h$, the odd terms cancel. The first-power integral contains the difference $h^2-(-h)^2=0$. The quadratic term instead contains $h^3-(-h)^3=2h^3$.

### PDF page 62

With $x_0=x_1-h$ and $x_2=x_1+h$, the fourth-order Taylor remainder integrates to $h^5 f^{(4)}(\mu)/60$. This follows from the nonnegative weight $(x-x_1)^4/4!$ and its integral $2h^5/120$. The integrated expansion is

$$
\int_{x_0}^{x_2}f(x)\,dx=2hf(x_1)+\frac{h^3}{3}f''(x_1)
+\frac{h^5}{60}f^{(4)}(\mu).
$$

The centered difference for the second derivative gives

$$
f''(x_1)=\frac{f(x_0)-2f(x_1)+f(x_2)}{h^2}-\frac{h^2}{12}f^{(4)}(\xi).
$$

Substitution yields

$$
\int_{x_0}^{x_2}f(x)\,dx
=\frac h3\bigl[f(x_0)+4f(x_1)+f(x_2)\bigr]
-\frac{h^5}{36}f^{(4)}(\xi)+\frac{h^5}{60}f^{(4)}(\mu).
$$

This establishes a local error of $O(h^5)$ for bounded $f^{(4)}$. The notes then use the sharper single-panel remainder $-h^5 f^{(4)}(\xi_1)/90$ in the composite formula. Combining the two derivative terms into one at an intermediate point requires a separate argument because their coefficients have opposite signs.

For even $n$ with $x_0=a$ and $x_n=b$, sum the single-panel expressions.

$$
\int_a^b f(x)\,dx=
\sum_{j=1}^{n/2}\left[
\frac h3\bigl(f(x_{2j-2})+4f(x_{2j-1})+f(x_{2j})\bigr)
-\frac{h^5}{90}f^{(4)}(\xi_j)
\right].
$$

### PDF page 63

![[Kyle Kabasares - Numerical Analysis - First and last Simpson panels.png|**Fig. 29** The first panel runs from $x_0$ to $x_2$, and the last runs from $x_{n-2}$ to $x_n$.]]


The sum of the approximations is the composite Simpson formula. Its error is $-h^5/90$ times the sum of the panel values $f^{(4)}(\xi_j)$. Their average lies between the minimum and maximum of $f^{(4)}$ on $[a,b]$.

$$
\min_{[a,b]} f^{(4)}\le
\frac2n\sum_{j=1}^{n/2} f^{(4)}(\xi_j)
\le\max_{[a,b]} f^{(4)}.
$$

Continuity gives a point $\xi^*$ where $f^{(4)}$ equals this average. Substituting $n=(b-a)/h$ gives

$$
I[f]-S_n[f]=-\frac{h^5}{90}\frac n2 f^{(4)}(\xi^*)
=-\frac{h^4(b-a)}{180}f^{(4)}(\xi^*).
$$

#### November 17, 2016 lecture. Quadrature weights

Approximate $\int_a^b f(x)\,dx$ by $\sum_{j=0}^n c_jf(x_j)$ for $x_j=a+jh$, with $x_0=a$ and $x_n=b$. In the trapezoidal rule, $n=1$ and $c_0=c_1=(b-a)/2$.

### PDF page 64

The trapezoidal rule is exact for a linear function because its second derivative vanishes. For example,

$$
\int_2^6(-3x+\tfrac12)\,dx
=\left[-\tfrac32x^2+\tfrac12x\right]_2^6
=(-54+3)-(-6+1)=-46.
$$

Simpson's rule is exact for cubics because the fourth derivative vanishes. The margin gives $\int_{-1}^1(3x^3+2x^2)\,dx$ as an example.

Can a two-node quadrature rule gain precision by choosing nodes other than the endpoints? On $[-1,1]$, take $\widetilde x_0=-\sqrt3/3$, $\widetilde x_1=\sqrt3/3$ and $c_0=c_1=1$. Then

$$
\int_{-1}^1 f(x)\,dx\approx f(-\sqrt3/3)+f(\sqrt3/3).
$$

This is exact for every polynomial of degree at most three. Check the monomials $1,x,x^2,x^3$. For $1$, both the integral and the weighted sum are $2$. For $x$, both are zero because the nodes are opposites.

### PDF page 65

For the remaining two monomials, the two-node rule gives

$$
\begin{aligned}
\int_{-1}^1 x^2\,dx&=(-\sqrt3/3)^2+(\sqrt3/3)^2=\tfrac23,\\
\int_{-1}^1 x^3\,dx&=(-\sqrt3/3)^3+(\sqrt3/3)^3=0.
\end{aligned}
$$

To find the nodes and weights for higher-order rules, the notes refer to textbook Table 4.12 or to their construction using Legendre polynomials.

Two functions $P$ and $Q$ are orthogonal on $[a,b]$ with unit weight if $\int_a^b P(x)Q(x)\,dx=0$. For example, $P(x)=1$ and $Q(x)=x$ are orthogonal on $[-1,1]$ because $\int_{-1}^1 x\,dx=0$.

#### Legendre polynomials

The normalization used here is monic. The polynomial $P_k$ has degree $k$ and leading coefficient $1$, and $\int_{-1}^1 P_k(x)P_j(x)\,dx=0$ for $j\ne k$. The first five are

$$
\begin{aligned}
P_0(x)&=1,\\
P_1(x)&=x,\\
P_2(x)&=x^2-\tfrac13,\\
P_3(x)&=x^3-\tfrac35x,\\
P_4(x)&=x^4-\tfrac67x^2+\tfrac3{35}.
\end{aligned}
$$

The notes refer to Math 132 for deriving these polynomials.

### PDF page 66

For example, $P_1$ and $P_2$ are orthogonal because

$$
\int_{-1}^1 x(x^2-\tfrac13)\,dx
=\left[\frac{x^4}{4}-\frac{x^2}{6}\right]_{-1}^1=0.
$$

#### Gaussian quadrature

By choosing both the weights $c_j$ and the nodes $\widetilde x_j$ for $j=0,\ldots,n$, Gaussian quadrature can make

$$
\int_a^b f(x)\,dx\approx\sum_{j=0}^n c_j f(\widetilde x_j)
$$

exact for polynomials of degree at most $2n+1$. To construct the rule for $[-1,1]$, begin with two facts about the Legendre basis.

1. Any polynomial $Q$ of degree at most $n$ can be written as $\sum_{j=0}^n\alpha_jP_j(x)$. For example, $3x^2+x-4=3P_2(x)+P_1(x)-3P_0(x)$.
2. $P_{n+1}$ is orthogonal to every such $Q$, since
   $$
   \int_{-1}^1 P_{n+1}(x)Q(x)\,dx
   =\sum_{j=0}^n\alpha_j\int_{-1}^1P_{n+1}(x)P_j(x)\,dx=0.
   $$

### PDF page 67

**Step 3.** For a polynomial $f$ of degree $2n+1$, divide by the monic Legendre polynomial $P_{n+1}$ to write $f=P_{n+1}Q+R$, where $\deg Q=n$ and $\deg R\le n$. For example, $P_2(x)(x+1)=(x^2-\tfrac13)(x+1)=x^3+x^2-\tfrac13 x-\tfrac13$, of degree $3=2(1)+1$.

The notes start another division with $n=2$, $f(x)=5x^5+3x^4-8x+1$ and divisor $P_3(x)=x^3-\tfrac35 x$. The written division uses $-1$ for the constant instead of the $+1$ in the definition. Using the stated $+1$, the quotient is $5x^2+3x+3$ and the remainder is $\tfrac95 x^2-\tfrac{31}5x+1$.

**Step 4.** Orthogonality gives

$$
\int_{-1}^1 f(x)\,dx=\int_{-1}^1 P_{n+1}(x)Q(x)\,dx+\int_{-1}^1R(x)\,dx
=\int_{-1}^1R(x)\,dx.
$$

**Step 5.** Let $\widetilde x_0,\ldots,\widetilde x_n$ be the roots of $P_{n+1}$. At each root, $f(\widetilde x_j)=R(\widetilde x_j)$ because the product $P_{n+1}Q$ vanishes there.

**Step 6.** Since $\deg R\le n$, recover $R$ from its $n+1$ values at these nodes using Lagrange interpolation.

### PDF page 68

The Lagrange representation at the roots of $P_{n+1}$ is

$$
R(x)=\sum_{j=0}^n R(\widetilde x_j)
\prod_{\substack{0\le i\le n\\i\ne j}}\frac{x-\widetilde x_i}{\widetilde x_j-\widetilde x_i}.
$$

Integrate $R$ and use $R(\widetilde x_j)=f(\widetilde x_j)$. For $f$ of degree at most $2n+1$, this gives

$$
\int_{-1}^1 f(x)\,dx=\sum_{j=0}^n c_j f(\widetilde x_j),
\qquad
c_j=\int_{-1}^1\prod_{\substack{0\le i\le n\\i\ne j}}
\frac{x-\widetilde x_i}{\widetilde x_j-\widetilde x_i}\,dx.
$$

| $n$ | Monic Legendre polynomial $P_{n+1}(x)$ | Nodes |
| ---: | --- | --- |
| $0$ | $x$ | $0$ |
| $1$ | $x^2-\tfrac13$ | $-\sqrt3/3$, $\sqrt3/3$ |
| $2$ | $x^3-\tfrac35 x$ | $-\sqrt{3/5}$, $0$, $\sqrt{3/5}$ |

#### November 29, 2016 lecture. Gaussian quadrature continued

Apply the two- and three-point Gaussian rules to $\int_{-1}^1[x\cos(3x)-\cos x]\,dx$.

### PDF page 69

Let $f(x)=x\cos(3x)-\cos x$. Its odd part integrates to zero on $[-1,1]$, so the exact integral is $-2\sin1\approx-1.682942$. The approximations in the notes are

$$
\begin{aligned}
f(-\sqrt3/3)+f(\sqrt3/3)&\approx-1.675824,\\
\tfrac59 f(-\sqrt{3/5})+\tfrac89f(0)+\tfrac59 f(\sqrt{3/5})
&\approx-1.683003,\\
\tfrac13 f(-1)+\tfrac43 f(0)+\tfrac13 f(1)&\approx-1.69353487.
\end{aligned}
$$

The first two are Gaussian quadrature with two and three points. The last is Simpson's rule. The three-point Gaussian error is about $6.1\times10^{-5}$, and the Simpson error is about $1.1\times10^{-2}$.

For a general interval $[a,b]$, set $x=(a+b+(b-a)t)/2$. Then $t=-1$ gives $x=a$, $t=1$ gives $x=b$, and $dx=(b-a)\,dt/2$. Thus

$$
\int_a^b g(x)\,dx=\frac{b-a}{2}\int_{-1}^1g\!\left(\frac{a+b+(b-a)t}{2}\right)\,dt.
$$

For example,

$$
\int_2^7 x\cos x\,dx=\frac52\int_{-1}^1\frac{9+5t}{2}\cos\!\left(\frac{9+5t}{2}\right)\,dt.
$$

### PDF page 70

For the previous example, set $f(t)=\tfrac12(9+5t)\cos((9+5t)/2)$. Two-point Gaussian quadrature gives

$$
\int_2^7 x\cos x\,dx\approx\frac52\bigl[f(-\sqrt3/3)+f(\sqrt3/3)\bigr].
$$

#### Approximating derivatives

Numerical derivatives help solve differential equations when a closed form is unavailable. As motivation, suppose the position $\mechanical{f}(x)$ of a particle moving along a line is known at several times $x$. Estimate the signed velocity at $x=1.2$ from the two recorded positions. The speed is the magnitude of that velocity.

$$
\mechanical{f}'(1.2)\approx\frac{\mechanical{f}(1.2)-\mechanical{f}(1.1)}{1.2-1.1}.
$$

The notes give no units for these sample times or positions.

For a general function, put $x=a+h$ in the definition of the derivative.

$$
f'(a)=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}
=\lim_{h\to0}\frac{f(a+h)-f(a)}h.
$$

The second-degree Taylor formula is

$$
f(a+h)=f(a)+hf'(a)+\frac{h^2}{2!}f''(a)+\frac{h^3}{3!}f^{(3)}(\xi).
$$

Here $\xi$ is between $a$ and $a+h$. Using the first-degree formula with its second-derivative remainder instead gives

$$
\frac{f(a+h)-f(a)}h=f'(a)+\frac h2 f''(\xi).
$$

### PDF page 71

The absolute error in the two-point difference is

$$
\left|f'(a)-\frac{f(a+h)-f(a)}{h}\right|=\frac{|h|}{2}|f''(\xi)|.
$$

For the position example, $a=1.2$ and $h=-0.1$, so the backward difference has first-order error, with magnitude bounded by $0.1$ times half a bound on the second derivative.

For a better approximation, take the centered difference. Expand $f(a+h)$ and $f(a-h)$ about $a$, with $\xi_+$ and $\xi_-$ in the respective intervals. Subtraction cancels the constant and quadratic terms.

$$
\begin{aligned}
f(a+h)-f(a-h)&=2hf'(a)+\frac{h^3}{3!}\bigl[f^{(3)}(\xi_+)+f^{(3)}(\xi_-)\bigr],\\
f'(a)-\frac{f(a+h)-f(a-h)}{2h}
&=-\frac{h^2}{12}\bigl[f^{(3)}(\xi_+)+f^{(3)}(\xi_-)\bigr].
\end{aligned}
$$

The centered difference is second order when the third derivative is bounded. The notes distinguish the two-point forward formula ($h>0$) and backward formula ($h<0$), the three-point midpoint formula, and the three-point endpoint formula.

#### December 1, 2016 lecture. Richardson extrapolation

What if the data are unequally spaced?

| $x$ | $1.2$ | $1.225$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $6.04967$ | $6.280817$ | $7.0286876$ |

![[Kyle Kabasares - Numerical Analysis - Unequally spaced derivative samples.png|**Fig. 30** Samples at $1.2$, $1.225$ and $1.3$ provide two forward step sizes from the first node.]]

### PDF page 72

The short-step forward difference gives

$$
f'(1.2)\approx\frac{f(1.225)-f(1.2)}{1.225-1.2}.
$$

The notes report $9.24676445$, with absolute error $0.17229325$. The extrapolated estimate is

$$
f'(1.2)\approx \frac13\left[
4\frac{f(1.225)-f(1.2)}{1.225-1.2}
-\frac{f(1.3)-f(1.2)}{1.3-1.2}\right],
$$

reported as $9.065552213$ with absolute error $0.008919$. The displayed sample values on the preceding page are rounded.

Let $M=f'(1.2)$ be the target and $N(h)=[f(1.2+h)-f(1.2)]/h$ the approximation. Taylor expansion about a general $x$ gives

$$
f(x+h)=f(x)+hf'(x)+\frac{h^2}{2!}f''(x)+\frac{h^3}{3!}f^{(3)}(x)+\cdots.
$$

Subtract $f(x)$ and divide by $h$. At $x=1.2$, this gives $M-N(h)=K_1h+K_2h^2+K_3h^3+\cdots$, with $K_1=-f''(1.2)/2!$ and $K_2=-f^{(3)}(1.2)/3!$. The long step is $h=0.1$, so $N(h)=[f(1.3)-f(1.2)]/0.1$. The short step is $h/4=0.025$, so

$$
M-N(h/4)=K_1(h/4)+K_2(h/4)^2+K_3(h/4)^3+\cdots.
$$

### PDF page 73

The short-step estimate is $N(0.025)=[f(1.225)-f(1.2)]/0.025$. Multiply the error equation for $h/4$ by $4$ and subtract the equation for $h$. The $K_1h$ terms cancel.

$$
\begin{aligned}
3M-4N(h/4)+N(h)&=K_2(h^2/4-h^2)+O(h^3),\\
M-\frac{4N(h/4)-N(h)}3&=-\frac{K_2}{4}h^2+O(h^3).
\end{aligned}
$$

#### Unequal steps on opposite sides

| $x$ | $1.15$ | $1.2$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $5.612521$ | $6.049647$ | $7.0286876$ |

The more precise value for $f(1.2)$ here clarifies the entry on page 71. The notes give $[f(1.3)-f(1.2)]/0.1\approx9.790401$. They report $8.472527$ for $[f(1.15)-f(1.2)]/(-0.05)$, while the displayed samples give approximately $8.74252$.

Seek a higher-accuracy estimate of $M=f'(1.2)$ using $N(h)$ with $h=0.1$ and $N(-h/2)$ with $-h/2=-0.05=1.15-1.2$. The Taylor expansion gives $M-N(h)=-f''(1.2)h/2!-f^{(3)}(1.2)h^2/3!+\cdots$ as before.

### PDF page 74

Add twice the error expansion for $-h/2$ to the expansion for $h$. The $K_1$ terms cancel and

$$
\begin{aligned}
3M-2N(-h/2)-N(h)&=\tfrac32 K_2 h^2+O(h^3),\\
M-\frac{2N(-h/2)+N(h)}3&=O(h^2).
\end{aligned}
$$

The annotated numerical estimates are $N(-h/2)=8.742529$ and $N(h)=9.790401$. The squared step is positive, so the first equation uses $2(-h/2)^2+h^2=3h^2/2$.

#### Adding a third step size

A sample at $x=1.4$ gives a step of $0.2=2h$. Combine the three errors $M-N(2h)$, $a(M-N(h))$ and $b(M-N(-h/2))$. To cancel the terms in $K_1h$ and $K_2h^2$, require

$$
2+a-\tfrac12b=0,\qquad 4+a+\tfrac14b=0.
$$

Solve the system to obtain

$$
\begin{bmatrix}a\\b\end{bmatrix}
=\frac43\begin{bmatrix}1/4&1/2\\-1&1\end{bmatrix}
\begin{bmatrix}-2\\-4\end{bmatrix}
=\begin{bmatrix}-10/3\\-8/3\end{bmatrix}.
$$

The combined coefficient of $M$ is $1+a+b=-5$. Dividing by it gives the third-order approximation

$$
M=-\tfrac15\left[N(2h)-\tfrac{10}{3}N(h)-\tfrac83N(-h/2)\right]+O(h^3).
$$

### PDF page 75

#### December 6, 2016 lecture. Finite differences

The derivative is the limit of the forward quotient as $h\to0$. Substitute the Taylor expansion of $f(x_0+h)$ about $x_0$ and cancel $f(x_0)$. Retaining the remainder after the first derivative gives

$$
\frac{f(x_0+h)-f(x_0)}h=f'(x_0)+\frac h2 f''(\xi),
$$

where $\xi$ lies between $x_0$ and $x_0+h$. Thus the forward difference has error of order $h$.

For $h>0$, the backward and centered approximations are

$$
f'(x_0)\approx\frac{f(x_0)-f(x_0-h)}h,\qquad
f'(x_0)\approx\frac{f(x_0+h)-f(x_0-h)}{2h},
$$

respectively.

To use four nodes, interpolate $f$ at $x_0-h$, $x_0$, $x_0+h$ and $x_0+2h$ with a cubic $P_3$, then approximate $f'(x_0)$ by $P_3'(x_0)$. This has the form

$$
a_1 f(x_0-h)+a_2f(x_0)+a_3f(x_0+h)+a_4f(x_0+2h).
$$

The first term of $P_3(x)$ in the Lagrange representation is

$$
f(x_0-h)\frac{(x-x_0)(x-x_0-h)(x-x_0-2h)}{(-h)(-2h)(-3h)}.
$$

The other terms follow on the next page.

### PDF page 76

With $u=x-x_0$, the three remaining terms of the Lagrange interpolant are

$$
f(x_0)\frac{(u+h)(u-h)(u-2h)}{2h^3}
-f(x_0+h)\frac{(u+h)u(u-2h)}{2h^3}
+f(x_0+2h)\frac{(u+h)u(u-h)}{6h^3}.
$$

Differentiate each numerator and evaluate at $u=0$. In node order $x_0-h,x_0,x_0+h,x_0+2h$, the numerator derivatives are $2h^2,-h^2,-2h^2,-h^2$. The handwritten boxed formula drops the $f(x_0)$ term. Retaining its derivative gives

$$
f'(x_0)\approx P_3'(x_0)
=\frac{-\tfrac13 f(x_0-h)-\tfrac12 f(x_0)+f(x_0+h)-\tfrac16 f(x_0+2h)}{h}.
$$

#### Richardson extrapolation

The forward quotient $D(h)=[f(x_0+h)-f(x_0)]/h$ satisfies $f'(x_0)=D(h)-hf''(\xi)/2$. The error depends on $h$. For a sufficiently smooth $f$, express the target as $D(h)+N_1h+N_2h^2+N_3h^3+\cdots$ to see how combining steps cancels powers of $h$.

### PDF page 77

For half the step size,

$$
f'(x_0)=D(h/2)+N_1(h/2)+N_2(h/2)^2+N_3(h/2)^3+\cdots,
\qquad D(h/2)=\frac{f(x_0+h/2)-f(x_0)}{h/2}.
$$

Take twice this equation minus the corresponding equation for $h$. The first-order terms cancel, giving

$$
f'(x_0)=2D(h/2)-D(h)-\tfrac12N_2h^2+O(h^3).
$$

The extrapolated approximation is second order.

The review note labeled “Gaussian Quadrature” here shows the endpoint **trapezoidal rule**, $\int_{x_0}^{x_0+h} f(x)\,dx\approx (h/2)[f(x_0)+f(x_0+h)]$.

![[Kyle Kabasares - Numerical Analysis - Endpoint trapezoid.png|**Fig. 31** A trapezoid based on the function values at the two endpoints.]]


#### December 8, 2016 lecture. Closed Newton–Cotes formulas

Approximate $\int_a^b f(x)\,dx$ by integrating the Lagrange interpolant on equally spaced nodes that include $a$ and $b$. Five nodes give an interpolant of degree at most four.

![[Kyle Kabasares - Numerical Analysis - Five closed Newton-Cotes nodes.png|**Fig. 32** Five equally spaced interpolation nodes with $x_0=a$ and $x_4=b$.]]

### PDF page 78

#### Math 130 final review. Least-squares criterion

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

### PDF page 79

The matrix form of the linear normal equations is

$$
\begin{bmatrix}m&\sum_i x_i\\\sum_i x_i&\sum_i x_i^2\end{bmatrix}
\begin{bmatrix}a_0\\a_1\end{bmatrix}
=\begin{bmatrix}\sum_i y_i\\\sum_i x_i y_i\end{bmatrix}.
$$

#### PatrickJMT example. Calculating a least-squares regression line

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

### PDF page 80

Find the least-squares line $y=a_0+a_1x$ for $(0,6)$, $(1,0)$ and $(2,0)$. The design matrix has rows $(1,0)$, $(1,1)$ and $(1,2)$, and its transpose has rows $(1,1,1)$ and $(0,1,2)$. The sums $\sum_i y_i=6$ and $\sum_i x_i y_i=0$ give the right-hand side.

$$
A^{\mathsf T}A=
\begin{bmatrix}1&1&1\\0&1&2\end{bmatrix}
\begin{bmatrix}1&0\\1&1\\1&2\end{bmatrix}
=\begin{bmatrix}3&3\\3&5\end{bmatrix},\qquad
A^{\mathsf T}\mathbf y=\begin{bmatrix}6\\0\end{bmatrix}.
$$

The normal equations are $3a_0+3a_1=6$ and $3a_0+5a_1=0$. The second gives $a_1=-3a_0/5$. Substituting into the first gives $(15/5-9/5)a_0=6$, so $a_0=5$ and $a_1=-3$.

### PDF page 81

The best-fitting line in the preceding example is $y=5-3x$.

#### Polynomial least-squares approximation review

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

### PDF page 82

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

### PDF page 83

#### Numerical integration and differentiation review

Review integration from tabulated data, open and closed Newton–Cotes formulas, and the role of node spacing. Standard Newton–Cotes formulas use equally spaced data. The closed rules include both endpoints, and the open rules use interior nodes. The two-point closed rule is the trapezoidal rule, the three-point closed rule is Simpson's $1/3$ rule, and the four-point closed rule is Simpson's $3/8$ rule.

![[Kyle Kabasares - Numerical Analysis - Trapezoid and Simpson comparison.png|**Fig. 34** The review sketches the trapezoidal rule and Simpson's $1/3$ rule.]]


#### Trapezoid rule from the Lagrange interpolant

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

### PDF page 84

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

#### Composite Newton–Cotes rules

![[Kyle Kabasares - Numerical Analysis - Composite Newton-Cotes sketch.png|**Fig. 36** The sketch subdivides the integration interval and marks sample points on the curve.]]

### PDF page 85

For equal spacing $h=(x_n-x_0)/n$, split the integral into $\sum_{i=1}^n\int_{x_{i-1}}^{x_i}f(x)\,dx$. Summing the trapezoids gives

$$
T_n[f]=\frac h2\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$

Summing Simpson panels, each with weights $1,4,1$, gives for even $n$

$$
S_n[f]=\frac h3\left[f(x_0)+4\sum_{j=1}^{n/2}f(x_{2j-1})
+2\sum_{j=1}^{n/2-1}f(x_{2j})+f(x_n)\right].
$$

#### Numerical differentiation review

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

### PDF page 86

The review collects the forward, backward and centered formulas for $f'(x_0)$.

$$
\frac{f(x_0+h)-f(x_0)}h,\qquad
\frac{f(x_0)-f(x_0-h)}h,\qquad
\frac{f(x_0+h)-f(x_0-h)}{2h}.
$$

#### Richardson extrapolation review

For the first example, the review gives the samples

| $x$ | $1.2$ | $1.225$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $6.049647$ | $6.280817$ | $7.0286876$ |

The forward difference with $h=0.025$ is reported as $9.24676445$, with absolute error $0.17229325$. Combining it with the forward difference with $h=0.1$ gives

$$
\frac13\left[4\frac{f(1.225)-f(1.2)}{0.025}
-\frac{f(1.3)-f(1.2)}{0.1}\right]\approx9.06552213
$$

as written here. The notes give its absolute error as $0.008919$ and ask where the formula comes from. Page 72 gives the same formula with a slightly different last part of the decimal estimate.

The second example uses a point on either side of $1.2$.

| $x$ | $1.15$ | $1.2$ | $1.3$ |
| --- | ---: | ---: | ---: |
| $f(x)$ | $5.612521$ | $6.049647$ | $7.0286876$ |

Given $[f(1.3)-f(1.2)]/0.1\approx9.790401$ and $[f(1.15)-f(1.2)]/(-0.05)\approx8.742529$, find a higher-accuracy approximation of $f'(1.2)$.

### PDF page 87

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

#### Richardson extrapolation continued, from Burden and Faires

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

### PDF page 88

Define $N_2(h)=2N_1(h/2)-N_1(h)$. The expansion just derived reads

$$
M=N_2(h)-\tfrac12K_2h^2-\tfrac34K_3h^3+\cdots.
$$

#### Another Richardson extrapolation example

The forward-difference estimates of $f'(0.8)$ are $0.95375$ for $h=0.2$ and $0.96851$ for $h=0.1$. Estimate $f'(0.8)$ more accurately. Model the signed truncation error, exact value minus approximation, by $Ch$ to first order.

$$
\begin{aligned}
f'(0.8)&\approx0.95375+C(0.2),\\
f'(0.8)&\approx0.96851+C(0.1).
\end{aligned}
$$

Take twice the second equation minus the first to eliminate $C$. The improved estimate is $2(0.96851)-0.95375=0.98327$.

### PDF page 89

#### Numerical differentiation with unequally spaced data

Fit a polynomial to the data, using a piecewise fit where appropriate, and then differentiate the fit.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
| $\mechanical{f}(x)$ | $\unit{m}$ | Position | Signed position along the particle's line of motion. |
| $\mechanical{f}'(x)$ | $\unit{m\,s^{-1}}$ | Velocity | Rate of change of position with time. Its magnitude is speed. |
| $\mechanical{x}_i$ | $\unit{m}$ | Height | Horizontal coordinate in the regression sketch. No unit is specified in the sketch. |
| $\mechanical{y}_i$ | $\unit{N}$ | Weight | Vertical coordinate if weight is taken as a force. The sketch gives no measurement units. |
