---
title: "Bisection, fixed-point, Newton, and secant iterations"
---

> [!TLDR]
> Compare bracketed and open root solvers, and use derivative bounds and error ratios to study convergence.

## Worked lecture material

##### Intermediate value theorem and bisection

If $f$ is continuous on $[a,b]$ and $k$ lies between $f(a)$ and $f(b)$, some $c\in[a,b]$ satisfies $f(c)=k$. In particular, if $f(a)f(b)<0$, there is a root $c\in(a,b)$.

![[Kyle Kabasares - Numerical Analysis - Intermediate value theorem.png|**Fig. 9** A continuous curve with opposite signs at $a$ and $b$ crosses the horizontal axis.]]

For a continuous function with $f(a)f(b)<0$, bisection generates midpoint approximations $p_n$ to a root $p$ with

$$
|p_n-p|\le\frac{b-a}{2^n},\qquad n\ge1.
$$

If the initial midpoint is counted as step zero, the bound at step $n$ is $(b-a)/2^{n+1}$. Equating this bound to a tolerance gives $n=\log_2((b-a)/(2\,\mathrm{tol}))$, rounded upward for an integer step count.

For $f(x)=x^3+4x^2-10$, $f(1)=-5$ and $f(2)=14$, so there is a root in $[1,2]$. To reach $10^{-4}$, the notes write $\log_2(5000)$ and give a rough estimate of $15$ steps. The logarithm is about $12.29$, so the stated bound guarantees the tolerance by step $13$ with zero-based indexing, or by midpoint $14$ when counting from one. Implement Algorithm 2.1.

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

The exponential remainder bound requires $(n+1)!\ge e/10^{-3}\approx2718.28$. This first holds at $n=6$, since $6!=720$ and $7!=5040$.

For another example, bound $\frac{e^\xi}{5!}(\cos\xi-2\sin\xi)$ for $\xi\in[2,6]$. The triangle inequality gives $|\cos\xi-2\sin\xi|\le|\cos\xi|+2|\sin\xi|\le3$, and $e^\xi/5!\le e^6/5!$. The absolute value of the product is at most $3e^6/5!$.

##### Rates of convergence

Iterative methods produce sequences, so the speed of convergence is important. Definition 1.18 takes sequences $\beta_n\to 0$ and $\alpha_n\to\alpha$. If a constant $K>0$ satisfies $|\alpha_n-\alpha|\le K|\beta_n|$ for all sufficiently large $n$, then $\alpha_n$ converges to $\alpha$ at rate $O(\beta_n)$.

For a step size $h$, write $e_h=O(h^\ell)$ if there are constants $\ell,c>0$ such that $|e_h|\le ch^\ell$ for all sufficiently small $h>0$. In a discretization with $h=1/n$, the comparison sequence is $\beta_n=1/n^\ell=h^\ell$. For $e_h=\alpha_n-\alpha$, the rate condition becomes $|e_h|\le Kh^\ell$.

If $e_h\approx kh^\ell$ and $e_{2h}\approx k(2h)^\ell$, then $e_{2h}/e_h\approx2^\ell$. Estimate the order from two step sizes using

$$
\ell\approx\log_2\left(\frac{|e_{2h}|}{|e_h|}\right).
$$

If the exact solution $\alpha$ is unknown, use a very accurate reference solution or construct a test problem with a known solution.

##### Convergence orders

For sufficiently large $n$, the error in $\alpha_n\to\alpha$ may satisfy one of these bounds.

- **Linear convergence** has $|\alpha_{n+1}-\alpha|\le q|\alpha_n-\alpha|$ for a constant $0<q<1$.
- **Quadratic convergence** has $|\alpha_{n+1}-\alpha|\le M|\alpha_n-\alpha|^2$ for some constant $M>0$.
- **Superlinear convergence** has $|\alpha_{n+1}-\alpha|\le q_n|\alpha_n-\alpha|$ for a sequence $q_n\to0$.

For bisection, the bound $|p_n-p|\le (b-a)/2^n$ is halved at each iteration. Bisection converges given a sign-changing bracket for a continuous function and allows the required number of iterations to be estimated analytically. It needs a starting bracket and is difficult to extend to more general settings.

Bisection's error bound $E_n=(b-a)/2^n$ has $E_{n+1}/E_n=1/2$, a linear rate. A faster method could aim for quadratic convergence, $|p_{n+1}-p|\le M|p_n-p|^2$. Bisection uses function signs on a bracket with $f(a)f(b)<0$. It can provide a starting value for a faster method that uses derivatives of $f$.

##### From roots to fixed points

Using derivative information may speed up root finding, although it can complicate the convergence analysis. One way to study such methods is to reformulate the equation as a fixed-point problem.

A **fixed point** of $g$ is a number $p$ such that $g(p)=p$. Given $f$, set $g(x)=x-f(x)$ so that $g(p)=p$ exactly when $f(p)=0$. Conversely, take $f(x)=x-g(x)$. More generally,

$$
g(x)=x-\ell(x)f(x).
$$

Where $\ell$ is nonzero, the fixed points are precisely the roots of $f$. Choosing $\ell(x)$ using derivatives of $f$ may make fixed-point iteration converge faster.

For $g(x)=e^{-x}$ on $[0.2,1.2]$, start at $x_0=1$. The first iterates are $x_1=g(x_0)=e^{-1}\approx0.368$ and $x_2=g(x_1)=e^{-e^{-1}}\approx0.692$.

![[Kyle Kabasares - Numerical Analysis - Exponential fixed-point iteration.png|**Fig. 10** The iterates for $g(x)=e^{-x}$ alternate around the intersection of $y=g(x)$ and $y=x$.]]

##### Fixed-point iteration algorithm

Given a scalar equation $f(x)=0$, choose $g$ such that $f(x)=0$ is equivalent to $g(x)=x$.

1. Start from an initial guess $x_0$.
2. For $k=0,1,2,\ldots$, compute $x_{k+1}=g(x_k)$ until the latest iterate satisfies the termination criterion.

The aim is to approximate a point $x^*$ satisfying $x^*=g(x^*)$. For the same initial guess, convergence can depend strongly on which $g$ is used. Possible choices include

$$
g(x)=x-f(x),\qquad g(x)=x+2f(x),\qquad g(x)=x-\frac{f(x)}{f'(x)}
$$

where the last expression is defined. They all have the general form $g(x)=x-\ell(x)f(x)$.

For continuous $g$ on $[a,b]$, the main questions are whether there is a fixed point in the interval, whether it is unique, whether the iterates converge to it, how fast they converge, and what failure to converge says about existence.

Textbook Example 1 takes $g(x)=x^2-2$. A fixed point satisfies $p=p^2-2$, hence $0=p^2-p-2=(p-2)(p+1)$. The fixed points are $2$ and $-1$.

![[Kyle Kabasares - Numerical Analysis - Quadratic fixed points.png|**Fig. 11** A fixed point occurs at each intersection of $y=x^2-2$ with $y=x$.]]

##### Fixed-point iteration

##### Fixed-point theorem

If $g\in C[a,b]$ and $a\le g(x)\le b$ for every $x\in[a,b]$, then $g$ has a fixed point $x^*\in[a,b]$. If $g'$ also exists on $(a,b)$ and some constant $0\le\ell<1$ satisfies $|g'(x)|\le\ell$ throughout $(a,b)$, the fixed point is unique.

##### Proof of the fixed-point theorem

##### Existence

Since $g$ maps $[a,b]$ into itself, $g(a)\ge a$ and $g(b)\le b$. Equality at either endpoint gives a fixed point. Otherwise define $\phi(x)=g(x)-x$, so $\phi(a)>0$ and $\phi(b)<0$. The intermediate value theorem gives $x^*\in(a,b)$ with $\phi(x^*)=0$.

##### Uniqueness

Suppose $x^*$ and $y^*$ are distinct fixed points. By the mean value theorem, for some $c$ between them,

$$
|x^*-y^*|=|g(x^*)-g(y^*)|=|g'(c)||x^*-y^*|\le q|x^*-y^*|
$$

with $q<1$. Thus $|x^*-y^*|=0$, contradicting distinctness.

##### Convergence of fixed-point iteration

Take $x_0\in[a,b]$ and define $x_{k+1}=g(x_k)$ for $k\ge0$. The iterates stay in $[a,b]$. Applying the mean value theorem at each step gives

$$
|x_k-x^*|=|g(x_{k-1})-g(x^*)|\le q|x_{k-1}-x^*|
\le\cdots\le q^k|x_0-x^*|.
$$

Because $q^k\to0$, the iterates converge to $x^*$. The error satisfies the linear bound $e_{k+1}\le qe_k$, where $e_k=|x_k-x^*|$.

##### Introduction to simple fixed-point iteration

Write $f(x)=g(x)-h(x)$ with $g(x)=x$. The root equation becomes $g(x)=h(x)$, or $x=h(x)$. This is an open method, so convergence depends on the map and the initial guess. Closed methods maintain a bracket. The notes encourage deriving the method from the intersection instead of memorizing the updates.

Start with $x_i$ on the line $g(x)=x$. The sketch traces the values $v_1=g(x_i)$, $v_2=h(v_1)$, $v_3=g(v_2)$, $v_4=h(v_3)$, and so on. The identity map copies each new value to the input of the next application of $h$.

![[Kyle Kabasares - Numerical Analysis - Fixed-point cobweb.png|**Fig. 12** Successive vertical and horizontal steps between $y=h(x)$ and $y=x$ approach the intersection in the convergent case.]]

For a separate example, use $g(x)=x^2+3/16$. A fixed point obeys $p^2-p+3/16=0$. With $a=1$, $b=-1$ and $c=3/16$, the quadratic formula gives

$$
p=\frac{1\pm\sqrt{1-4(3/16)}}2=\frac{1\pm1/2}2.
$$

Fixed-point iteration, also called Picard iteration here, is easy to implement and analyze, and each step can be cheap. The contraction condition provides a convergence guarantee on an invariant interval. Choosing a suitable $g$ can be difficult, and convergence is often linear.

The **order** is the exponent $p$ in an error bound $e_{n+1}\le Ce_n^p$. For the fixed-point iteration the mean value theorem gives $e_{n+1}=|g'(\xi)|e_n$ for some $\xi$ between $x_n$ and $x^*$. In the linear case, $p=1$ and the factor is controlled by $|g'(\xi)|$. If this is about $0.3$, the new error is about $3/10$ of the preceding one.

##### 2.3 Newton's method

To seek faster convergence, use the fixed-point form $g(x)=x-\ell(x)f(x)$. Choosing $\ell(x)=1/f'(x)$ where $f'(x)\ne0$ gives Newton's method.

$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)},\qquad k=0,1,2,\ldots.
$$

##### Deriving Newton's method

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

##### Convergence of Newton's method

Assume $f\in C^2[a,b]$ and $x^*$ is a root with $f'(x^*)\ne0$. By continuity, $f'$ stays nonzero near $x^*$. Taylor's theorem at $x_k$ gives

$$
0=f(x^*)=f(x_k)+(x^*-x_k)f'(x_k)+\frac{(x^*-x_k)^2}{2}f''(\xi_k),
$$

where $\xi_k$ lies between $x_k$ and $x^*$. Divide by $f'(x_k)$ and use $f(x_k)/f'(x_k)=x_k-x_{k+1}$. With the signed error $e_k=x^*-x_k$,

$$
e_{k+1}=-\frac{f''(\xi_k)}{2f'(x_k)}e_k^2.
$$

Close to the root, the factor approaches $M=-f''(x^*)/(2f'(x^*))$, so the constant-coefficient model is $Me_{k+1}\approx(Me_k)^2$. Repeated squaring in that model drives $Me_k$ to zero if $|Me_0|<1$. For a local convergence bound, choose a positive constant that bounds the magnitude of the error coefficient in a neighborhood of $x^*$. A sufficiently close initial guess stays in that neighborhood.

Recall that $x^*-x_{n+1}\approx-[f''(x^*)/(2f'(x^*))](x^*-x_n)^2$. With a sufficiently close initial guess, a nonzero derivative at the root, and continuous derivatives through second order near it, Newton's method converges at least quadratically.

For a root $x^*$, the mean value theorem gives $f(x_n)=f(x_n)-f(x^*)=f'(\xi_n)(x_n-x^*)$ for $\xi_n$ between $x_n$ and $x^*$. Near a simple root, $f'(\xi_n)\approx f'(x_n)$, so the Newton step estimates the remaining signed error.

$$
x^*-x_n=-\frac{f(x_n)}{f'(\xi_n)}\approx-\frac{f(x_n)}{f'(x_n)}=x_{n+1}-x_n.
$$

Combining this estimate with the quadratic error formula gives a way to estimate the asymptotic constant using only iterates.

$$
\frac{|x_{n+2}-x_{n+1}|}{|x_{n+1}-x_n|^2}\approx
\left|\frac{f''(x^*)}{2f'(x^*)}\right|.
$$

##### Order of convergence (Definition 2.7)

Let $x_n\to x^*$ with $x_n\ne x^*$ for all $n$. If there are positive constants $\alpha$ and $\lambda$ such that

$$
\lim_{n\to\infty}\frac{|x_{n+1}-x^*|}{|x_n-x^*|^\alpha}=\lambda,
$$

the order of convergence is $\alpha$ and the asymptotic error constant is $\lambda$. Convergence is linear when $\alpha=1$ and $\lambda<1$, and quadratic when $\alpha=2$. The notes compare ordinary fixed-point iteration with $g(x)=x-f(x)$ to Newton's choice $g(x)=x-f(x)/f'(x)$ as typical linear and quadratic cases, respectively.

![[Kyle Kabasares - Numerical Analysis - Linear and quadratic convergence.png|**Fig. 14** Sketch comparing how many iterations two convergence rates take to reach an error of $10^{-6}$.]]

##### The secant method

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

**Homework 4 review**

On $[-1,2]$, let

$$
f(x)=x^4-8x^3+24x^2-32x+16,\qquad
g(x)=x-\alpha f(x),\qquad \alpha=\frac1{100}.
$$

Check existence and uniqueness of a fixed point of $g$. To apply the interval form of the existence theorem, check that $g$ maps the interval into itself. Since this $g$ is increasing there, its extrema occur at the endpoints.

![[Kyle Kabasares - Numerical Analysis - Endpoint test for the iteration map.png|**Fig. 16** The sketch uses the endpoints to bound the range of the increasing iteration map.]]

For the uniqueness test, look for $k\in(0,1)$ such that $|g'(x)|\le k$. Differentiating the Homework 4 map gives

$$
|g'(x)|=\left|1-\frac1{100}(4x^3-24x^2+48x-32)\right|.
$$

The handwritten triangle-inequality estimate gives $k=0.92$ and concludes uniqueness. Factoring the polynomial gives $f(x)=(x-2)^4$, so $g'(x)=1-(x-2)^3/25>1$ on $[-1,2)$. The proposed contraction bound fails, and $g(-1)=-1.81$ is outside the interval. The fixed-point equation itself still gives the unique point $x=2$.

##### Root-finding comparisons

- **Chapter 1.** Taylor polynomials and approximation error. Review chopping, rounding, finite-digit arithmetic, types of error and the damaging effects of round-off. Review accuracy, efficiency, robustness and stability of algorithms.
- **Chapter 2.** Root finding. For bisection, review assumptions, algorithm, advantages and disadvantages. For fixed-point (Picard) iteration, also review existence and uniqueness and convergence. For Newton's method and the secant method, review derivation, algorithm, convergence and error estimation.

##### Taylor polynomial example 1

1. Find $P_4(x)$ for $e^x$ about $x_0=0$ on $[-1,1]$.
2. Write the remainder term.
3. Use the remainder to bound the error of $P_4(-0.5)$ as an approximation to $e^{-0.5}$.
4. Use a calculator to find the absolute error.

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
