---
title: "Polynomial and spline interpolation problems"
---

> [!TLDR]
> Construct interpolants from data, update divided differences, and impose spline continuity and endpoint conditions.

## Worked lecture material

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

##### Interpolation and approximation

Midterm scheduled for November 1. The chapter covers linear, quadratic and higher-order polynomial interpolation, Lagrange functions, Newton divided differences, interpolation error, Chebyshev polynomials and least-squares approximation.

##### Polynomial interpolation

Interpolation extends a function known only at discrete points, supplies an easy-to-evaluate approximation to an expensive function, and helps create smooth curves and surfaces in computer graphics.

##### Weierstrass approximation theorem

If $f\in C[a,b]$, then for each $\varepsilon>0$ there is a polynomial $P_n$ such that $|f(x)-P_n(x)|<\varepsilon$ for every $x\in[a,b]$.

![[Kyle Kabasares - Numerical Analysis - Weierstrass approximation.png|**Fig. 17** A polynomial $P_n$ and the function $f$ it approximates.]]

##### Linear interpolation

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

The linear interpolant matches the data at the nodes, $P_1(x_i)=y_i$ for $i=0,1$.

##### Quadratic interpolation

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

##### Higher-degree interpolation

For $n+1$ data points $(x_0,y_0),\ldots,(x_n,y_n)$ with distinct nodes, the Lagrange formulas are

$$
L_i(x)=\prod_{\substack{0\le j\le n\\j\ne i}}\frac{x-x_j}{x_i-x_j},
\qquad
P_n(x)=\sum_{i=0}^n L_i(x)y_i.
$$

Each $L_i$ still satisfies $L_i(x_j)=\delta_{ij}$. For instance, the last basis polynomial is $L_n(x)=\prod_{j=0}^{n-1}(x-x_j)/(x_n-x_j)$, with the ratio understood factor by factor.

##### Lagrange interpolation error

Let $x_0,\ldots,x_n$ be distinct nodes in $[a,b]$, and let $P_n$ interpolate $f$ at those nodes. For $f\in C^{n+1}[a,b]$ and an evaluation point $x$ distinct from the nodes, there is a point $\xi$ between the smallest and largest of $x,x_0,\ldots,x_n$ such that

$$
f(x)=P_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)(x-x_1)\cdots(x-x_n).
$$

At a node, the error is zero.

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

Since $2\le\xi\le4$ in the preceding example, $4^{-4}\le \xi^{-4}\le 2^{-4}$ and $|f(x)-P_2(x)|\le |k(x)|/16$, where $k(x)=(x-2)(x-2.75)(x-4)$. To maximize $|k|$ on $[2,4]$, examine the endpoints and the stationary points of $k$.

$$
k'(x)=3x^2-\frac{35}{2}x+\frac{49}{2}=\tfrac12(3x-7)(2x-7).
$$

The stationary points are $7/3$ and $7/2$. Their values are about $0.23$ and $-0.56$, respectively, and the endpoints give zero. The maximum absolute value is $9/16$ at $x=7/2$. Thus the uniform bound is $9/256\approx 0.03516$, of order $10^{-2}$.

##### Divided differences

Divided differences let us build the interpolating polynomial by reusing previous calculations. The first-order difference at distinct nodes is

$$
f[x_0,x_1]=\frac{f(x_1)-f(x_0)}{x_1-x_0}.
$$

For continuous $f$ differentiable between the nodes, the mean value theorem gives $f[x_0,x_1]=f'(c)$ for some $c$ between them. With nearby nodes and a continuous derivative, $f'((x_0+x_1)/2)$ evaluated at the midpoint is an approximation to this slope. For three distinct nodes, the second-order divided difference is

$$
f[x_0,x_1,x_2]=\frac{f[x_1,x_2]-f[x_0,x_1]}{x_2-x_0}.
$$

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

##### Newton's divided difference interpolation formula

The interpolant $P_n$ has degree at most $n$ and satisfies $P_n(x_i)=f(x_i)$ for $i=0,\ldots,n$. The first two cases are

$$
\begin{aligned}
P_1(x)&=f(x_0)+(x-x_0)f[x_0,x_1],\\
P_2(x)&=P_1(x)+(x-x_0)(x-x_1)f[x_0,x_1,x_2].
\end{aligned}
$$

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

The October 7 example continues with the second-order entry

$$
f[x_1,x_2,x_3]=\frac{f[x_2,x_3]-f[x_1,x_2]}{x_3-x_1}.
$$

The notes list $-0.40$ for this entry and $0.06$ for $f[x_0,x_1,x_2,x_3]$, then leave $f[x_1,x_2,x_3,x_4]$ unfinished. These are the handwritten values from the partial table.

##### Interpolation error

##### Existence and uniqueness

For $n\ge 0$, distinct nodes $x_0,\ldots,x_n$ and data values $y_0,\ldots,y_n$, there is exactly one polynomial $P_n$ of degree at most $n$ with $P_n(x_i)=y_i$ for each $i$. If $y_i=f(x_i)$, the Lagrange representation is $P_n(x)=\sum_{j=0}^n f(x_j)L_j(x)$.

##### Error theorem

If $f\in C^{n+1}[a,b]$ and $x_0,\ldots,x_n$ are distinct nodes in $[a,b]$, then for $x\in[a,b]$,

$$
f(x)-P_n(x)=\frac{\psi_n(x)}{(n+1)!}f^{(n+1)}(\xi),
\qquad
\psi_n(x)=\prod_{i=0}^n(x-x_i).
$$

The point $\xi$ lies between the minimum and maximum of $x_0,\ldots,x_n,x$.

To derive the error formula using Newton divided differences, construct $P_{n+1}$ interpolating $f$ at the $n+2$ nodes $x_0,\ldots,x_n,x_{n+1}$.

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

##### Spline interpolation

Suppose $n$ data points $(x_i,y_i)$ are given, with $x_1<\cdots<x_n$, $a=x_1$ and $b=x_n$. Seek $s$ on $[a,b]$ with $s(x_i)=y_i$ for $i=1,\ldots,n$. Require continuity of $s'$ and $s''$ for smoothness, and seek to minimize $\int_a^b[s''(x)]^2\,dx$.

The minimization problem has a unique solution, the **natural cubic spline** interpolating the data. It satisfies three properties.

1. On each $[x_{j-1},x_j]$ for $j=2,\ldots,n$, $s$ is a polynomial of degree at most three.
2. The functions $s$, $s'$ and $s''$ are continuous on $[a,b]$.
3. The endpoint second derivatives vanish, $s''(x_1)=s''(x_n)=0$.

##### Constructing the natural cubic spline

Let $M_i=s''(x_i)$ for $i=1,\ldots,n$. Express the spline in terms of these unknowns, then derive equations to solve for them.

On $[x_{j-1},x_j]$, the second derivative of the cubic piece is linear. Interpolate between $s''(x_{j-1})=M_{j-1}$ and $s''(x_j)=M_j$ to obtain

$$
s''(x)=\frac{(x_j-x)M_{j-1}+(x-x_{j-1})M_j}{x_j-x_{j-1}},
\qquad x_{j-1}\le x\le x_j.
$$

Integrate twice on this subinterval and impose the conditions $s(x_{j-1})=y_{j-1}$ and $s(x_j)=y_j$.

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

##### Cubic spline interpolation

Here the nodes are indexed $x_0,\ldots,x_n$.

1. Each piece $s_j$ is a cubic polynomial on $[x_j,x_{j+1}]$ for $j=0,\ldots,n-1$.
2. The endpoints of each piece interpolate the data, $s_j(x_j)=f(x_j)$ and $s_j(x_{j+1})=f(x_{j+1})$.
3. At $x_{j+1}$ for $j=0,\ldots,n-2$, the adjacent pieces agree, $s_{j+1}(x_{j+1})=s_j(x_{j+1})$.
4. Their first derivatives agree, $s'_{j+1}(x_{j+1})=s'_j(x_{j+1})$.
5. Their second derivatives agree, $s''_{j+1}(x_{j+1})=s''_j(x_{j+1})$.
6. Natural boundary conditions are $s''(x_0)=s''(x_n)=0$. Clamped boundary conditions are $s'(x_0)=f'(x_0)$ and $s'(x_n)=f'(x_n)$.

##### Constructing a cubic spline in local powers

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

##### Spline interpolation and error

Data at ordered nodes $a=x_0<x_1<\cdots<x_n=b$ determine a unique natural cubic spline interpolant, satisfying $s''(a)=s''(b)=0$. For sufficiently smooth $f$ and a uniform mesh with $h=x_i-x_{i-1}$, the notes give

$$
\max_{a\le x\le b}|f(x)-s(x)|\le Ch^2.
$$

The constant depends on the endpoint curvatures $f''(a)$ and $f''(b)$ and a bound for $|f^{(4)}|$ on the interval.

##### Minimizing Lagrange interpolation error with Chebyshev polynomials

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

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
