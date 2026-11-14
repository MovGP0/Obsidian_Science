---
title: "Power-series solutions and forcing methods"
---

> [!TLDR]
> Solve near ordinary points by matching series coefficients and compare the construction with undetermined coefficients.

## Worked lecture material

##### Series solutions of linear differential equations

The equation $y''+ty=0$ motivates a method for solving equations with variable coefficients. Seek power-series solutions to

$$
a_2(t)y''+a_1(t)y'+a_0(t)y=0,
$$

where at least one coefficient varies with $t$. The second derivative mark beside $a_1(t)$ in the handwritten line is read as a single prime in this standard second-order form.

A **power series** centered at $a$ is an infinite series of the form

$$
\sum_{n=0}^\infty c_n(x-a)^n
=c_0+c_1(x-a)+c_2(x-a)^2+c_3(x-a)^3+\cdots.
$$

An example is the sine series

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots
=\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!}.
$$

The Taylor series of $f$ about $a$ is

$$
f(a)+f'(a)(x-a)+\frac{f''(a)}{2!}(x-a)^2+\cdots
=\sum_{n=0}^\infty\frac{f^{(n)}(a)}{n!}(x-a)^n.
$$

Where the Taylor series represents $f$, this sum equals $f(x)$. The factorial rule $(n+1)!=(n+1)n!$ gives $4!=4\cdot 3!$ and, more generally, $n!/n=(n-1)!$ for $n\ge1$. With $n=1$, it gives $0!=1!/1=1$.

##### Taylor series examples

For $f(x)=e^x$, all derivatives at zero equal $e^0=1$. Thus the Taylor coefficients are $f^{(n)}(0)/n!=1/n!$, and

$$
e^x=\sum_{n=0}^\infty\frac{x^n}{n!}.
$$

For $f(x)=\cos x$ centered at zero, $c_0=f(0)=1$ and $c_1=f'(0)/1!=-\sin(0)=0$. The derivatives repeat every four steps. The addition formula $\cos(a+b)=\cos a\cos b-\sin a\sin b$ gives

$$
\begin{aligned}
f'(x)&=-\sin x=\cos(x+\pi/2),\\
f''(x)&=-\cos x=\cos(x+\pi),\\
f'''(x)&=\sin x=\cos(x+3\pi/2),\\
f^{(4)}(x)&=\cos x.
\end{aligned}
$$

##### Solving $y'+y=0$ by a power series

The solution is known to be $y(x)=Ce^{-x}$. To recover it by a series, write the unknown function as $y(x)=\sum_{n=0}^\infty c_n x^n$. Termwise differentiation and substitution give

$$
\sum_{n=1}^\infty n c_n x^{n-1}+\sum_{n=0}^\infty c_nx^n=0.
$$

Set $k=n-1$ in the derivative series and use $k$ as the index in the original series. Then

$$
\sum_{k=0}^\infty(k+1)c_{k+1}x^k+\sum_{k=0}^\infty c_kx^k
=\sum_{k=0}^\infty\bigl((k+1)c_{k+1}+c_k\bigr)x^k=0.
$$

Equating coefficients in $y'+y=0$ gives $(k+1)c_{k+1}+c_k=0$. Therefore $c_n=(-1)^n c_0/n!$ and $y(x)=c_0e^{-x}$. The exponent at the top of the page appears positive. The alternating coefficients and the preceding page give $-x$.

##### Rewriting a second-order equation as a system

For $u''+11u'+24u=t^2$, put $x_1=u$ and $x_2=u'$. Then $x_1'=x_2$ and $x_2'=-24x_1-11x_2+t^2$, or

$$
\mathbf{x}'(t)
=\begin{bmatrix}0&1\\-24&-11\end{bmatrix}\mathbf{x}(t)
+\begin{bmatrix}0\\t^2\end{bmatrix}.
$$

##### Series solutions near an ordinary point

To solve $y'+y=0$, substitute $y(x)=\sum_{n=0}^\infty c_nx^n$:

$$
\sum_{n=1}^\infty nc_nx^{n-1}+\sum_{n=0}^\infty c_nx^n=0.
$$

After shifting the index of the first sum, the coefficient of $x^k$ is $(k+1)c_{k+1}+c_k$. Setting it to zero gives

$$
c_{k+1}=-\frac{c_k}{k+1}
=\frac{c_{k-1}}{k(k+1)}\quad(k\ge1).
$$

The index in the second denominator follows from applying the recurrence at $k-1$.

For $a_2(x)y''+a_1(x)y'+a_0(x)y=0$, the point $x=x_0$ is an **ordinary point** if both

$$
p(x)=\frac{a_1(x)}{a_2(x)},\qquad
q(x)=\frac{a_0(x)}{a_2(x)}
$$

are analytic at $x_0$, meaning each is represented by its Taylor series in a neighborhood of $x_0$.

##### Ordinary and singular points

For polynomial coefficients, every $x_0$ with $a_2(x_0)\ne0$ is an ordinary point. To apply the converse, first cancel any common factors in the ratios $a_1/a_2$ and $a_0/a_2$. A point where either ratio fails to be analytic is a **singular point**.

1. For $y''+y=0$, the leading coefficient is $a_2(x)=1$. Every real or complex point is ordinary.
2. For $(x^2-1)y''-4xy'+6y=0$, the leading coefficient vanishes at $x=\pm1$. These points are singular, and every other point is ordinary. The handwritten summary appears to omit the negation in $x_0\ne\pm1$, which is present in the line above.
3. For $(x^2+1)y''-4xy'+6y=0$, $x^2+1=0$ gives $x=\pm i$. These are the singular points in the complex plane.

If $x_0$ is an ordinary point, a solution near $x_0$ can be represented by a power series

$$
y(x)=\sum_{n=0}^\infty c_n(x-x_0)^n
$$

converging for $|x-x_0|<r$, where $r$ is its radius of convergence. The number-line sketch shows the interval $(x_0-r,x_0+r)$ centered at $x_0$, with ordinary points in its interior when $r$ is chosen within the nearest singularity.

##### Example. Series solutions of $y''+y=0$

Find the guaranteed radius of convergence for the expansion about $x_0=0$, and find a power-series solution of the equation.

The equation $y''+y=0$ has no singular points, so its series about zero has radius of convergence $r=\infty$.

##### Series at ordinary points

Put the equation $a_2(x)y''+a_1(x)y'+a_0(x)y=0$ in the form $y''+p(x)y'+q(x)y=0$. At an ordinary point $x_0$, both normalized coefficients are analytic and solutions have convergent power-series expansions about $x_0$. At a singular point, the ordinary-point theorem gives no such guarantee. The handwritten branch beside “exists?” appears to say “singular,” while the definition and example on the same page use the ordinary-point criterion.

For $y''+y=0$, take $y=\sum_{n=0}^\infty c_n x^n$ and substitute

$$
y''=\sum_{n=2}^\infty n(n-1)c_nx^{n-2}
=\sum_{k=0}^\infty(k+2)(k+1)c_{k+2}x^k.
$$

Then $(k+2)(k+1)c_{k+2}+c_k=0$, or

$$
c_n=-\frac{c_{n-2}}{n(n-1)}\qquad(n\ge2).
$$

The handwritten reindexing appears to use $n(n+1)$ in the denominator, but both the previous equation and the calculation of $c_2$ give $n(n-1)$. The coefficients $c_0$ and $c_1$ are arbitrary, and $c_2=-c_0/[2(2-1)]=-c_0/2$.

For $y''+y=0$, the recurrence gives $c_3=-c_1/[3(3-1)]=-c_1/6$. The even and odd coefficients are

$$
c_{2k}=\frac{(-1)^k}{(2k)!}c_0,\qquad
c_{2k+1}=\frac{(-1)^k}{(2k+1)!}c_1.
$$

The two series give

$$
y(x)=c_0\sum_{k=0}^\infty\frac{(-1)^k x^{2k}}{(2k)!}
+c_1\sum_{k=0}^\infty\frac{(-1)^k x^{2k+1}}{(2k+1)!}
=c_0\cos x+c_1\sin x.
$$

The handwritten sine and cosine labels appear reversed. The even powers form cosine and the odd powers form sine.

##### Airy's equation with the argument reversed

For $y''+xy=0$, assume $y(x)=\sum_{n=0}^\infty c_n x^n$. The product term is

$$
xy=x\sum_{n=0}^\infty c_n x^n
=\sum_{n=0}^\infty c_nx^{n+1}
=\sum_{k=1}^\infty c_{k-1}x^k,
$$

where $k=n+1$.

##### Method of undetermined coefficients

Consider the nonhomogeneous equation

$$
y''+p(x)y'+q(x)y=g(x). \tag{1}
$$

If $y_1$ and $y_2$ are independent homogeneous solutions and $y_p$ is a particular solution, then the general solution is $y=C_1y_1+C_2y_2+y_p$. When the coefficients and forcing admit a suitable trial form, the procedure is as follows.

1. Solve the corresponding homogeneous equation $y''+p(x)y'+q(x)y=0$.
2. Choose a trial form for $y_p$ with undetermined coefficients.
3. Substitute it into equation (1) and solve for the coefficients. Add the resulting $y_p$ to the homogeneous solution.

##### Exponential forcing

Find the general solution of $y''-3y'-10y=2e^{3x}$. The constant coefficients give the characteristic equation

$$
r^2-3r-10=(r-5)(r+2)=0,
$$

with roots $r_1=5$ and $r_2=-2$. Thus $y_c=C_1e^{5x}+C_2e^{-2x}$.

For a particular solution, try $y_p=Ae^{3x}$. Its first two derivatives are $3Ae^{3x}$ and $9Ae^{3x}$. Substitution gives

$$
9Ae^{3x}-3(3Ae^{3x})-10Ae^{3x}
=-10Ae^{3x}=2e^{3x}.
$$

So $A=-1/5$ and

$$
y(x)=C_1e^{5x}+C_2e^{-2x}-\frac15e^{3x}.
$$

##### Sinusoidal forcing

Find a particular solution of $y''+y'-y=\sin(2x)$. Try $y_p=A\sin(2x)+B\cos(2x)$. Then

$$
\begin{aligned}
y_p'&=2A\cos(2x)-2B\sin(2x),\\
y_p''&=-4A\sin(2x)-4B\cos(2x).
\end{aligned}
$$

Substitute these expressions into the equation.

For $y''+y'-y=\sin(2x)$, substitution of the trial solution gives

$$
(2A-5B)\cos(2x)+(-5A-2B)\sin(2x)
=0\cos(2x)+\sin(2x).
$$

Hence $2A-5B=0$ and $-5A-2B=1$. Eliminate $A$ with the row operation $R_2\leftarrow R_2+\frac52R_1$:

$$
\left[\begin{array}{rr|r}2&-5&0\\-5&-2&1\end{array}\right]
\longrightarrow
\left[\begin{array}{rr|r}2&-5&0\\0&-\frac{29}{2}&1\end{array}\right].
$$

This gives $B=-2/29$, $A=-5/29$, and

$$
y_p(x)=-\frac5{29}\sin(2x)-\frac2{29}\cos(2x).
$$

##### PatrickJMT review of second-order homogeneous equations

The general linear form is $P(x)y''+Q(x)y'+R(x)y=G(x)$. For a homogeneous equation with constant coefficients, $ay''+by'+cy=0$, solve $ar^2+br+c=0$.

| Roots | General solution |
| --- | --- |
| Two distinct real roots $r_1,r_2$ | $C_1e^{r_1x}+C_2e^{r_2x}$ |
| One repeated real root $r$ | $C_1e^{rx}+C_2xe^{rx}$ |
| Complex conjugates $\alpha\pm i\beta$ | $e^{\alpha x}\bigl(C_1\cos(\beta x)+C_2\sin(\beta x)\bigr)$ |

For example, $y''+y'-6y=0$ gives $\lambda^2+\lambda-6=(\lambda+3)(\lambda-2)=0$. Hence $y(x)=C_1e^{2x}+C_2e^{-3x}$.

For $y''-8y'+16y=0$, the characteristic equation is $(\lambda-4)^2=0$. The repeated root gives $y_h(x)=C_1e^{4x}+C_2xe^{4x}$.

##### Variation of parameters for a scalar equation

To find a particular solution of $y''+p(x)y'+q(x)y=f(x)$:

1. Find a fundamental set $\{y_1,y_2\}$ of the associated homogeneous equation.
2. Solve the system for $v_1'$ and $v_2'$,

   $$
   \begin{aligned}
   v_1'y_1+v_2'y_2&=0,\\
   v_1'y_1'+v_2'y_2'&=f.
   \end{aligned}
   $$

3. Integrate to obtain $v_1,v_2$ and form $y_p=v_1y_1+v_2y_2$.

##### Example. Variable coefficients

Given $\{x,x^3\}$ as a fundamental set of solutions of $x^2y''-3xy'+3y=0$, solve $x^2y''-3xy'+3y=4x^7$. Divide by $x^2$ on an interval excluding zero:

$$
y''-\frac3x y'+\frac3{x^2}y=4x^5.
$$

Using $y_1=x$ and $y_2=x^3$ gives

$$
\begin{aligned}
xv_1'+x^3v_2'&=0,\\
v_1'+3x^2v_2'&=4x^5.
\end{aligned}
$$

The first equation gives $v_1'=-x^2v_2'$. Substituting in the second yields

$$
-x^2v_2'+3x^2v_2'=4x^5,\qquad
v_2'=\frac{4x^5}{2x^2}=2x^3.
$$

Thus $v_2=\int 2x^3\,dx=x^4/2$, and $v_1'=-2x^5$ gives $v_1=-x^6/3$. Constants of integration can be absorbed into the homogeneous solution. The particular solution is

$$
y_p=v_1y_1+v_2y_2
=-\frac{x^7}{3}+\frac{x^7}{2}
=\frac{x^7}{6}.
$$

The complete solution is $y=x^7/6+C_1x+C_2x^3$ on an interval excluding zero.

##### Undetermined coefficients with polynomial forcing

Solve $y''+3y'+2y=x^2$. The complementary equation is $y''+3y'+2y=0$, with characteristic polynomial $\lambda^2+3\lambda+2=(\lambda+1)(\lambda+2)$. The roots $-1$ and $-2$ give $y_c=C_1e^{-x}+C_2e^{-2x}$.

For $y''+3y'+2y=x^2$, take $y_p=Ax^2+Bx+C$. Then $y_p'=2Ax+B$ and $y_p''=2A$. Substitution gives

$$
2A+3(2Ax+B)+2(Ax^2+Bx+C)
=2Ax^2+(6A+2B)x+(2A+3B+2C).
$$

Match coefficients with $x^2+0x+0$. From $2A=1$ we get $A=1/2$. Then $6A+2B=0$ gives $B=-3/2$. Finally $2A+3B+2C=0$ gives $1-9/2+2C=0$, so $C=7/4$. The complete solution is

$$
y(x)=\frac12 x^2-\frac32x+\frac74+C_1e^{-x}+C_2e^{-2x}.
$$

##### Airy's equation

For $y''+xy=0$, take $y=\sum_{n=0}^\infty c_nx^n$. Then

$$
y'=\sum_{n=1}^\infty nc_nx^{n-1},\qquad
y''=\sum_{n=2}^\infty n(n-1)c_nx^{n-2}.
$$

Substitute and reindex with $k=n-2$ in $y''$ and $k=n+1$ in $xy$:

$$
\begin{aligned}
0
&=\sum_{k=0}^\infty(k+2)(k+1)c_{k+2}x^k
+\sum_{k=1}^\infty c_{k-1}x^k\\
&=2c_2+\sum_{k=1}^\infty\bigl((k+2)(k+1)c_{k+2}+c_{k-1}\bigr)x^k.
\end{aligned}
$$

Thus $c_2=0$ and $(k+2)(k+1)c_{k+2}+c_{k-1}=0$ for $k\ge1$. The last handwritten line appears to say $c_{k+1}$, while the sum above gives $c_{k-1}$.

For Airy's equation in the form $y''+xy=0$, the recurrence is

$$
c_2=0,\qquad c_{k+2}=-\frac{c_{k-1}}{(k+2)(k+1)}\quad(k\ge1).
$$

The coefficients $c_0$ and $c_1$ are arbitrary. The first few steps give

$$
c_3=-\frac{c_0}{3\cdot2},\qquad
c_4=-\frac{c_1}{4\cdot3},\qquad
c_5=-\frac{c_2}{5\cdot4}=0,\qquad
c_6=\frac{c_0}{(6\cdot5)(3\cdot2)}.
$$

The recurrence separates the coefficients by their indices modulo three. In particular, $c_2=c_5=c_8=c_{11}=\cdots=0$. For $k\ge1$ the remaining coefficients are

$$
c_{3k}=\frac{(-1)^k c_0}{\prod_{\ell=1}^k(3\ell-1)(3\ell)},\qquad
c_{3k+1}=\frac{(-1)^k c_1}{\prod_{\ell=1}^k(3\ell)(3\ell+1)}.
$$

Consequently $y(x)=c_0y_1(x)+c_1y_2(x)$, where

$$
\begin{aligned}
y_1(x)&=1+\sum_{k=1}^\infty
\frac{(-1)^k x^{3k}}{\prod_{\ell=1}^k(3\ell-1)(3\ell)},\\
y_2(x)&=x+\sum_{k=1}^\infty
\frac{(-1)^k x^{3k+1}}{\prod_{\ell=1}^k(3\ell)(3\ell+1)}.
\end{aligned}
$$

The handwritten intermediate expansion seems to pair $c_7$ with $x^6$. The definition of the coefficients and the final series pair it with $x^7$.

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.
