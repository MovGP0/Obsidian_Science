---
title: "Higher-order equations and initial-value data"
---

> [!TLDR]
> Classify higher-order equations, find independent solutions, and handle linear forcing with variation of parameters.

## Worked lecture material

Office hours were Monday and Wednesday from 4 to 5 p.m. The notebook mentions class participation, bonus points, and extra credit for office-hour attendance. The two midterms were scheduled for Wednesday, October 5 and Wednesday, November 9. The final was scheduled for Saturday, December 10.

##### Classifying differential equations

In $y''+y'+1000=t$, the unknown is the function $y$ of the independent variable $t$. Both $y'$ and $\dot y(t)$ denote $dy/dt$. A general differential equation has the form $F(t,y,y',y'',\ldots)=0$.

An ordinary differential equation has one independent variable, as in $y'+y=1$. A partial differential equation can involve several independent variables. For example, $y=y(t,x)$ can satisfy $\partial y/\partial t=\partial^2y/\partial x^2$.

The order is the highest derivative order. The examples $y''+5(y')^3+y=t^2$ and $\partial^2y/\partial x^2-\partial y/\partial t+\partial^3y/\partial x^3=\sin x$ have orders two and three, respectively.

A linear equation of order $n$ has the form

$$
a_n(t)y^{(n)}+a_{n-1}(t)y^{(n-1)}+\cdots+a_0(t)y=f(t).
$$

The Math 24 review lists integrating factors, separation of variables, variation of parameters, and undetermined coefficients. In the separable case $y'=F(t)G(y)$, an example is $y'=ty$.

##### Higher-order equations

The section on initial-value problems starts with the general linear equation of order $n$ above.

An initial-value problem (IVP) for an equation of order $n$ specifies $n$ known values at the same point,

$$
y(t_0)=y_0,\quad y'(t_0)=y_1,\quad \ldots,\quad y^{(n-1)}(t_0)=y_{n-1}.
$$

The sketch shows a solution curve starting at $(t_0,y(t_0))$ and continuing along a time interval. An example is $y''+y'+ty=t^2$ with $y(0)=1$ and $y'(0)=2$, interpreted as initial position and velocity.

##### Intervals of validity

##### First theorem

Consider $y'+a(x)y=g(x)$ with $y(x_0)=y_0$. If $a,g$ are continuous on an open interval $(\alpha,\beta)$ containing $x_0$, then the IVP has a unique solution on that interval.

##### Second theorem

Consider $y'=f(t,y)$ with $y(t_0)=y_0$. If $f$ and $\partial f/\partial y$ are continuous in an open rectangle $a<t<b$, $c<y<d$ containing $(t_0,y_0)$, then there is a unique solution on some interval $(t_0-h,t_0+h)\subset(a,b)$.

##### Higher-order initial-value problems

The lecture writes the linear equation $a_n(t)y^{(n)}+\cdots+a_1(t)y'+a_0(t)y=f(t)$, where $y^{(n)}=d^ny/dt^n$. An IVP combines this equation with the specified initial values above. For a second-order equation $a_2(t)y''+a_1(t)y'+a_0(t)y=f(t)$, the two conditions are $y(t_0)=y_0$ and $y'(t_0)=y_1$. Harmonic oscillators and circuits are examples of second-order systems. The page starts the existence and uniqueness theorem for continuous coefficients, which continues on the next page.

The linear IVP has a unique solution on an interval $I$ containing $t_0$ if $a_n,\ldots,a_0$ and $f$ are continuous on $I$ and $a_n(t)\ne0$ throughout $I$.

**Example 2.** For $y^{(5)}+y^{(4)}-y'''+y''+9y'-10y=-10$, take $y(1)=1$ and set derivatives of orders one through four to zero at $1$. The constant function $y(t)=1$ satisfies the equation and the initial data, so it is the unique solution.

**Example 3.** Consider

$$
\frac{t^2}{2}y''-ty'+y=2015,\qquad y(0)=2015,\qquad y'(0)=2016.
$$

The leading coefficient vanishes at the initial point. In this example the solution is not unique. Each $y(t)=ct^2+2016t+2015$ satisfies the equation and both conditions.

##### Boundary-value problems

A boundary-value problem (BVP) specifies conditions at different points. The sketch shows one solution curve passing through $(a,y_0)$ and $(b,y_1)$. For the same second-order equation on $a<t<b$, the IVP can prescribe $y(a)=y_0$ and $y'(a)=y_1$, while the BVP can prescribe $y(a)=y_0$ and $y(b)=y_1$. A BVP can have zero, one, or infinitely many solutions.

For $y''+4y=0$, substitute $y=e^{\lambda t}$ to obtain $\lambda^2+4=0$. The roots are $\lambda=\pm2i$. Combining the complex exponential solutions gives the real general solution $y(t)=c_1\cos(2t)+c_2\sin(2t)$. The conditions $y(0)=-2$ and $y(\pi/4)=10$ fix $c_1=-2$ and $c_2=10$, giving a unique solution. A second example uses the same equation with $y(0)=2$ and $y(2\pi)=-2$.

For $y''+4y=0$, the value at $2\pi$ is $c_1\cos(4\pi)+c_2\sin(4\pi)=c_1$, the same as at zero. This page takes $y(0)=-2$, giving the infinitely many solutions $y(t)=-2\cos(2t)+c_2\sin(2t)$ when both endpoints are $-2$. The preceding page writes $y(0)=2$ with $y(2\pi)=-2$. Those two values give no solution.

##### Integrating factor

For a first-order linear equation $y'+P(x)y=Q(x)$, multiply by $I(x)=e^{\int P(x)\,dx}$. The left side becomes $(Iy)'$, which can be integrated directly.

For $y'-2xy=x$, take $I=e^{-x^2}$. Then

$$
\begin{aligned}
(e^{-x^2}y)'&=xe^{-x^2},\\
e^{-x^2}y&=\int xe^{-x^2}\,dx=-\tfrac12 e^{-x^2}+C,\\
y&=-\tfrac12+Ce^{x^2}.
\end{aligned}
$$

The substitution is $u=-x^2$, $du=-2x\,dx$. The final boxed line in the source omits the factor $e^{x^2}$ on the integration constant.

For $y'+\frac{2x}{1+x^2}y=\frac{4}{(1+x^2)^2}$, the substitution $u=1+x^2$ gives $\int 2x/(1+x^2)\,dx=\ln(1+x^2)$, so the factor is $1+x^2$. Thus

$$
\bigl[(1+x^2)y\bigr]'=\frac{4}{1+x^2},
\qquad
y=\frac{4\arctan x+C}{1+x^2}.
$$

##### Variation of parameters

This method calculates a particular solution of $y''+py'+qy=f$ from a fundamental set $\{y_1,y_2\}$ for the associated homogeneous equation $y''+py'+qy=0$.

With $y_1,y_2$ a fundamental set for the homogeneous equation, solve

$$
v_1'y_1+v_2'y_2=0,\qquad
v_1'y_1'+v_2'y_2'=f.
$$

Integrate for $v_1,v_2$. Then $y_p=v_1y_1+v_2y_2$ is a particular solution. For example, $\{x,x^3\}$ is a fundamental set for $x^2y''-3xy'+3y=0$ on an interval away from zero. To solve $x^2y''-3xy'+3y=4x^7$, first divide by $x^2$,

$$
y''-\frac3x y'+\frac3{x^2}y=4x^5.
$$

The first equation for the parameters is $xv_1'+x^3v_2'=0$.

##### Initial and boundary data

For a second-order problem on $[t_0,t_{\mathrm{end}}]$, initial data specify $y(t_0)$ and $y'(t_0)$. Boundary data can specify $y(t_0)$ and $y(t_{\mathrm{end}})$. A BVP can have zero, one, or infinitely many solutions.

The handwritten examples interchange numbers and put a prime on $y$ in some copies of the oscillator equation. The worked no-solution calculation uses $y''+4y=0$, $y(0)=-2$, and $y(2\pi)=3$. Since $y(t)=c_1\cos(2t)+c_2\sin(2t)$, the first condition gives $c_1=-2$ and the second would require $c_1=3$. The review's infinite-solution case corresponds to equal endpoint values at $0$ and $2\pi$. Its unique-solution case on [[#Boundary-value problems|the section on Boundary-value problems]] uses the second endpoint $\pi/4$.

##### Homogeneous and nonhomogeneous problems

The lecture calls an IVP homogeneous when its differential equation has zero forcing $f(t)$, regardless of the initial values. It calls a BVP homogeneous when both $f(t)$ and the prescribed boundary values are zero. For $ty''+y'-y=0$, the notes give $y(0)=1$, $y'(0)=2$ as an IVP for a homogeneous equation, and $y(0)=1$, $y(2)=3$ as a nonhomogeneous BVP.

##### Fundamental set of solutions

For a regular homogeneous linear equation $Ly=0$ of order $n$, a fundamental set on $I$ consists of $n$ linearly independent solutions on $I$.

##### Linear independence and the Wronskian

The functions $y_1,\ldots,y_n$ are linearly independent on an interval if $c_1y_1(x)+\cdots+c_ny_n(x)=0$ for all $x$ in the interval forces all constants to vanish. A relation with some nonzero coefficient instead gives dependence. The source uses “independent” for that second condition in its first sentence, then uses the nonzero Wronskian test correctly.

The Wronskian is the determinant whose rows are the functions and their derivatives through order $n-1$. If it is nonzero at some point, the functions are independent. Given a fundamental set, the general solution of $Ly=0$ is $y_h=c_1y_1+\cdots+c_ny_n$.

**Example 2.** For $y^{(4)}+y''=0$, substitute $e^{\lambda t}$. The characteristic equation is $\lambda^4+\lambda^2=\lambda^2(\lambda^2+1)=0$. The double root zero gives $1,t$. The conjugate pair $\pm i$ gives $\cos t,\sin t$. Their Wronskian is

$$
W=\begin{vmatrix}
1&t&\cos t&\sin t\\
0&1&-\sin t&\cos t\\
0&0&-\cos t&-\sin t\\
0&0&\sin t&-\cos t
\end{vmatrix}=\cos^2t+\sin^2t=1.
$$

Thus $y_h=c_1+c_2t+c_3\cos t+c_4\sin t$. The boxed example writes these four terms with unit coefficients.

##### Nonhomogeneous linear equations

For $Ly=f$ with nonzero forcing, use superposition. Find the general homogeneous solution $y_h$ and a particular solution $y_p$ of the forced equation. Their sum gives the general solution.

The general solution of the nonhomogeneous linear equation is $y=y_h+y_p$.

##### Characteristic equations and differential operators

Let $D=d/dx$. Then $Dy=y'$ and $D^2y=y''$. Expressions such as $D+1$ and $D^2+5D+4$ are differential operators, with the constants understood as multiples of the identity. For $y''+5y'+4y=0$,

$$
(D^2+5D+4)y=(D+4)(D+1)y=0.
$$

The two factors commute. Solving $(D+4)y=0$ by separation gives $dy/y=-4\,dx$ and the solution $e^{-4x}$ up to a multiplier. Solving $(D+1)y=0$ gives $dy/y=-dx$ and $e^{-x}$. The second factor appears with a minus sign in one handwritten heading, but the calculation uses $Dy=-y$. The general solution is $c_1e^{-4x}+c_2e^{-x}$, corresponding to roots $-4,-1$ of the auxiliary equation $\lambda^2+5\lambda+4=0$.

##### Repeated roots

For $(D-a)^2y=0$, one solution is $e^{ax}$. To find another, set $u=(D-a)y$. Then $(D-a)u=0$, so $u=Ae^{ax}$. Solve $y'-ay=Ae^{ax}$ by an integrating factor. The factor is $e^{-ax}$, consistent with the coefficient $-a$.

Multiplying $y'-ay=Ae^{ax}$ by $e^{-ax}$ gives $(e^{-ax}y)'=A$, so $e^{-ax}y=Ax+B$. Hence the repeated root $a$ gives $y=(Ax+B)e^{ax}$.

For complex conjugate roots $\alpha\pm i\beta$,

$$
y=Ae^{(\alpha+i\beta)x}+Be^{(\alpha-i\beta)x}
=e^{\alpha x}(Ae^{i\beta x}+Be^{-i\beta x}).
$$

For real solutions use $y=e^{\alpha x}(c_1\sin\beta x+c_2\cos\beta x)$.

##### Variation of parameters formula

For $y''+q(t)y'+r(t)y=g(t)$, let $y_1,y_2$ form a fundamental set for the homogeneous equation. With $W=y_1y_2'-y_2y_1'$,

$$
y_p(t)=-y_1(t)\int\frac{y_2(t)g(t)}{W(t)}\,dt
+y_2(t)\int\frac{y_1(t)g(t)}{W(t)}\,dt.
$$

##### Systems and the matrix exponential

A system of $n$ first-order equations for $x_1(t),\ldots,x_n(t)$ is

$$
x_i'(t)=g_i(t,x_1,\ldots,x_n),\qquad i=1,\ldots,n. \tag{I}
$$

The functions $g_i$ can be nonlinear. In a linear system they have the form $g_i=\sum_{j=1}^n a_{ij}(t)x_j+f_i(t)$. For example, $x'=2x-3y+t$ and $y'=x+2y+e^t$ give

$$
A=\begin{pmatrix}2&-3\\1&2\end{pmatrix},
\qquad
\mathbf f(t)=\begin{pmatrix}t\\e^t\end{pmatrix}.
$$

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.
