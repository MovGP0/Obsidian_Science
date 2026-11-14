---
title: "Chebyshev nodes and least-squares approximation"
---

> [!TLDR]
> Choose interpolation nodes to control error and fit functions or discrete data by minimizing squared residuals.

## Worked lecture material

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

For $n\ge1$, the monic Chebyshev polynomial is $\widetilde T_n(x)=T_n(x)/2^{n-1}=x^n+\text{lower-degree terms}$. The leading term follows by induction from the recurrence.

##### Least-squares approximations

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

##### Corollary 8.11 (page 531)

If $f\in C^{n+1}[-1,1]$ and $P_n$ interpolates $f$ at the $n+1$ zeros of $T_{n+1}$, then

$$
\max_{-1\le x\le1}|f(x)-P_n(x)|\le
\frac{1}{2^n(n+1)!}\max_{-1\le x\le1}|f^{(n+1)}(x)|.
$$

##### Interpolation with Chebyshev polynomials

Discrete orthogonality at the Chebyshev nodes $x_0,\ldots,x_n$ gives an efficient formula. The constant term is weighted by one half.

$$
P_n(x)=\tfrac12 c_0T_0(x)+\sum_{i=1}^n c_iT_i(x),\qquad
c_i=\frac{2}{n+1}\sum_{k=0}^n f(x_k)T_i(x_k),\quad i=0,\ldots,n.
$$

##### Discrete least-squares approximation

For data fitting, choose a polynomial $P_n$ that minimizes the sum of squared residuals $\sum_i(y_i-P_n(x_i))^2$.

![[Kyle Kabasares - Numerical Analysis - Least-squares line.png|**Fig. 21** A line fitted to scattered data points. The objective measures each residual in the data value at its given abscissa.]]

##### Linear least-squares approximation

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

##### Continuous least squares

For continuous least squares, approximate a function $f\in C[a,b]$ with $P_n(x)=\sum_{k=0}^n a_kx^k$. Choose the coefficients to minimize

$$
E_2(a_0,\ldots,a_n)=\int_a^b(f(x)-P_n(x))^2\,dx.
$$

A necessary condition at a minimum is $\partial E_2/\partial a_j=0$ for $j=0,\ldots,n$.

In the monomial basis, the $n+1$ normal equations for the $n+1$ coefficients are

$$
\sum_{k=0}^n a_k\int_a^b x^{j+k}\,dx=\int_a^b x^j f(x)\,dx,\qquad j=0,\ldots,n.
\tag{*}
$$

On $[0,1]$, the coefficient $\int_0^1 x^{j+k}\,dx=1/(j+k+1)$ is an entry of the Hilbert matrix, a classic example of an ill-conditioned matrix. This makes the normal equations difficult to solve numerically. The notes motivate using a basis of special polynomials, such as Chebyshev polynomials with their corresponding weight.

##### Linear independence of a polynomial basis

The functions $\phi_0,\ldots,\phi_n$ are **linearly independent** on $[a,b]$ if

$$
\sum_{j=0}^n c_j\phi_j(x)=0\quad\text{for all }x\in[a,b]
$$

implies $c_0=\cdots=c_n=0$. If a nontrivial combination vanishes, the functions are linearly dependent.

##### Theorem

If $\phi_j$ has degree exactly $j$ for each $j=0,\ldots,n$, then $\{\phi_0,\ldots,\phi_n\}$ is linearly independent on any interval $[a,b]$ with $a<b$. Write $\Pi_n$ for the space of polynomials of degree at most $n$.

If $\phi_0,\ldots,\phi_n$ are linearly independent polynomials in $\Pi_n$, they form a basis. Every $P_n\in\Pi_n$ can be written as $P_n(x)=\sum_{j=0}^n c_j\phi_j(x)$.

If $\phi_0,\ldots,\phi_n$ form an orthogonal set for the weight $w$ on $[a,b]$, the weighted least-squares approximation from their span is

$$
P_n(x)=\sum_{j=0}^n a_j\phi_j(x),\qquad
a_j=\frac{\displaystyle\int_a^b w(x)\phi_j(x)f(x)\,dx}
{\displaystyle\int_a^b w(x)\phi_j(x)^2\,dx}.
$$

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
