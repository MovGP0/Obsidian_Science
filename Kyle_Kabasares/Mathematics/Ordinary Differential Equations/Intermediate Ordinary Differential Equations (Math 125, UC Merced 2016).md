---
title: "Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)"
---

> [!TLDR]
> These lectures solve ordinary differential equations using matrix exponentials, power series, Fourier series, and Laplace transforms. Sturm–Liouville problems and separation of variables connect the solution methods to the heat equation.

Source notes by Kyle Kabasares. [[Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016).pdf|Original PDF]].

Transcribed PDF pages 1–83 of 83.

### PDF page 1

#### August 24, 2016. Course information

Office hours were Monday and Wednesday from 4 to 5 p.m. The notebook mentions class participation, bonus points, and extra credit for office-hour attendance. The two midterms were scheduled for Wednesday, October 5 and Wednesday, November 9. The final was scheduled for Saturday, December 10.

#### Classifying differential equations

In $y''+y'+1000=t$, the unknown is the function $y$ of the independent variable $t$. Both $y'$ and $\dot y(t)$ denote $dy/dt$. A general differential equation has the form $F(t,y,y',y'',\ldots)=0$.

An ordinary differential equation has one independent variable, as in $y'+y=1$. A partial differential equation can involve several independent variables. For example, $y=y(t,x)$ can satisfy $\partial y/\partial t=\partial^2y/\partial x^2$.

The order is the highest derivative order. The examples $y''+5(y')^3+y=t^2$ and $\partial^2y/\partial x^2-\partial y/\partial t+\partial^3y/\partial x^3=\sin x$ have orders two and three, respectively.

A linear equation of order $n$ has the form

$$
a_n(t)y^{(n)}+a_{n-1}(t)y^{(n-1)}+\cdots+a_0(t)y=f(t).
$$

The Math 24 review lists integrating factors, separation of variables, variation of parameters, and undetermined coefficients. In the separable case $y'=F(t)G(y)$, an example is $y'=ty$.

#### Lecture 1. Higher-order equations

The section on initial-value problems starts with the general linear equation of order $n$ above.

### PDF page 2

An initial-value problem (IVP) for an equation of order $n$ specifies $n$ known values at the same point,

$$
y(t_0)=y_0,\quad y'(t_0)=y_1,\quad \ldots,\quad y^{(n-1)}(t_0)=y_{n-1}.
$$

The sketch shows a solution curve starting at $(t_0,y(t_0))$ and continuing along a time interval. An example is $y''+y'+ty=t^2$ with $y(0)=1$ and $y'(0)=2$, interpreted as initial position and velocity.

#### Intervals of validity

**First theorem.** Consider $y'+a(x)y=g(x)$ with $y(x_0)=y_0$. If $a,g$ are continuous on an open interval $(\alpha,\beta)$ containing $x_0$, then the IVP has a unique solution on that interval.

**Second theorem.** Consider $y'=f(t,y)$ with $y(t_0)=y_0$. If $f$ and $\partial f/\partial y$ are continuous in an open rectangle $a<t<b$, $c<y<d$ containing $(t_0,y_0)$, then there is a unique solution on some interval $(t_0-h,t_0+h)\subset(a,b)$.

#### Lecture 8/29/2016. Higher-order initial-value problems

The lecture writes the linear equation $a_n(t)y^{(n)}+\cdots+a_1(t)y'+a_0(t)y=f(t)$, where $y^{(n)}=d^ny/dt^n$. An IVP combines this equation with the specified initial values above. For a second-order equation $a_2(t)y''+a_1(t)y'+a_0(t)y=f(t)$, the two conditions are $y(t_0)=y_0$ and $y'(t_0)=y_1$. Harmonic oscillators and circuits are examples of second-order systems. The page starts the existence and uniqueness theorem for continuous coefficients, which continues on the next page.

### PDF page 3

The linear IVP has a unique solution on an interval $I$ containing $t_0$ if $a_n,\ldots,a_0$ and $f$ are continuous on $I$ and $a_n(t)\ne0$ throughout $I$.

**Example 2.** For $y^{(5)}+y^{(4)}-y'''+y''+9y'-10y=-10$, take $y(1)=1$ and set derivatives of orders one through four to zero at $1$. The constant function $y(t)=1$ satisfies the equation and the initial data, so it is the unique solution.

**Example 3.** Consider

$$
\frac{t^2}{2}y''-ty'+y=2015,\qquad y(0)=2015,\qquad y'(0)=2016.
$$

The leading coefficient vanishes at the initial point. In this example the solution is not unique. Each $y(t)=ct^2+2016t+2015$ satisfies the equation and both conditions.

#### Boundary-value problems

A boundary-value problem (BVP) specifies conditions at different points. The sketch shows one solution curve passing through $(a,y_0)$ and $(b,y_1)$. For the same second-order equation on $a<t<b$, the IVP can prescribe $y(a)=y_0$ and $y'(a)=y_1$, while the BVP can prescribe $y(a)=y_0$ and $y(b)=y_1$. A BVP can have zero, one, or infinitely many solutions.

For $y''+4y=0$, substitute $y=e^{\lambda t}$ to obtain $\lambda^2+4=0$. The roots are $\lambda=\pm2i$. Combining the complex exponential solutions gives the real general solution $y(t)=c_1\cos(2t)+c_2\sin(2t)$. The conditions $y(0)=-2$ and $y(\pi/4)=10$ fix $c_1=-2$ and $c_2=10$, giving a unique solution. A second example uses the same equation with $y(0)=2$ and $y(2\pi)=-2$.

### PDF page 4

For $y''+4y=0$, the value at $2\pi$ is $c_1\cos(4\pi)+c_2\sin(4\pi)=c_1$, the same as at zero. This page takes $y(0)=-2$, giving the infinitely many solutions $y(t)=-2\cos(2t)+c_2\sin(2t)$ when both endpoints are $-2$. The preceding page writes $y(0)=2$ with $y(2\pi)=-2$. Those two values give no solution.

#### Math 24 review. Integrating factor

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

#### Variation of parameters

This method calculates a particular solution of $y''+py'+qy=f$ from a fundamental set $\{y_1,y_2\}$ for the associated homogeneous equation $y''+py'+qy=0$.

### PDF page 5

#### Variation of parameters, continued

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

#### Lecture 8/31/2016. Initial and boundary data

For a second-order problem on $[t_0,t_{\mathrm{end}}]$, initial data specify $y(t_0)$ and $y'(t_0)$. Boundary data can specify $y(t_0)$ and $y(t_{\mathrm{end}})$. A BVP can have zero, one, or infinitely many solutions.

The handwritten examples interchange numbers and put a prime on $y$ in some copies of the oscillator equation. The worked no-solution calculation uses $y''+4y=0$, $y(0)=-2$, and $y(2\pi)=3$. Since $y(t)=c_1\cos(2t)+c_2\sin(2t)$, the first condition gives $c_1=-2$ and the second would require $c_1=3$. The review's infinite-solution case corresponds to equal endpoint values at $0$ and $2\pi$. Its unique-solution case on page 3 uses the second endpoint $\pi/4$.

#### Homogeneous and nonhomogeneous problems

The lecture calls an IVP homogeneous when its differential equation has zero forcing $f(t)$, regardless of the initial values. It calls a BVP homogeneous when both $f(t)$ and the prescribed boundary values are zero. For $ty''+y'-y=0$, the notes give $y(0)=1$, $y'(0)=2$ as an IVP for a homogeneous equation, and $y(0)=1$, $y(2)=3$ as a nonhomogeneous BVP.

#### Fundamental set of solutions

For a regular homogeneous linear equation $Ly=0$ of order $n$, a fundamental set on $I$ consists of $n$ linearly independent solutions on $I$.

### PDF page 6

#### Linear independence and the Wronskian

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

#### Nonhomogeneous linear equations

For $Ly=f$ with nonzero forcing, use superposition. Find the general homogeneous solution $y_h$ and a particular solution $y_p$ of the forced equation. Their sum gives the general solution.

### PDF page 7

The general solution of the nonhomogeneous linear equation is $y=y_h+y_p$.

#### Characteristic equations and differential operators

Let $D=d/dx$. Then $Dy=y'$ and $D^2y=y''$. Expressions such as $D+1$ and $D^2+5D+4$ are differential operators, with the constants understood as multiples of the identity. For $y''+5y'+4y=0$,

$$
(D^2+5D+4)y=(D+4)(D+1)y=0.
$$

The two factors commute. Solving $(D+4)y=0$ by separation gives $dy/y=-4\,dx$ and the solution $e^{-4x}$ up to a multiplier. Solving $(D+1)y=0$ gives $dy/y=-dx$ and $e^{-x}$. The second factor appears with a minus sign in one handwritten heading, but the calculation uses $Dy=-y$. The general solution is $c_1e^{-4x}+c_2e^{-x}$, corresponding to roots $-4,-1$ of the auxiliary equation $\lambda^2+5\lambda+4=0$.

#### Repeated roots

For $(D-a)^2y=0$, one solution is $e^{ax}$. To find another, set $u=(D-a)y$. Then $(D-a)u=0$, so $u=Ae^{ax}$. Solve $y'-ay=Ae^{ax}$ by an integrating factor. The factor is $e^{-ax}$, consistent with the coefficient $-a$.

### PDF page 8

Multiplying $y'-ay=Ae^{ax}$ by $e^{-ax}$ gives $(e^{-ax}y)'=A$, so $e^{-ax}y=Ax+B$. Hence the repeated root $a$ gives $y=(Ax+B)e^{ax}$.

For complex conjugate roots $\alpha\pm i\beta$,

$$
y=Ae^{(\alpha+i\beta)x}+Be^{(\alpha-i\beta)x}
=e^{\alpha x}(Ae^{i\beta x}+Be^{-i\beta x}).
$$

For real solutions use $y=e^{\alpha x}(c_1\sin\beta x+c_2\cos\beta x)$.

#### Variation of parameters formula

For $y''+q(t)y'+r(t)y=g(t)$, let $y_1,y_2$ form a fundamental set for the homogeneous equation. With $W=y_1y_2'-y_2y_1'$,

$$
y_p(t)=-y_1(t)\int\frac{y_2(t)g(t)}{W(t)}\,dt
+y_2(t)\int\frac{y_1(t)g(t)}{W(t)}\,dt.
$$

#### Lecture 9/7/2016. Systems and the matrix exponential

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

### PDF page 9

**Example 2.** The system $x'=2x^2-3y+t$, $y'=x+2y+\cos y$ is nonlinear in the unknowns. Linearity requires that the unknowns enter to the first power in linear combinations. The coefficient and forcing functions can depend nonlinearly on the independent variable $t$.

#### Matrix form of a linear system

Write $\mathbf x=(x_1,\ldots,x_n)^{\mathsf T}$, $A(t)=(a_{ij}(t))_{i,j=1}^n$, and $\mathbf F=(f_1,\ldots,f_n)^{\mathsf T}$. Solving the $n$ component equations is equivalent to solving

$$
\mathbf x'=A(t)\mathbf x+\mathbf F(t). \tag{III}
$$

The lecture returns to Example 1 with $A=\begin{pmatrix}2&-3\\1&2\end{pmatrix}$, $\mathbf x=(x,y)^{\mathsf T}$, and $\mathbf F=(t,e^t)^{\mathsf T}$.

**Example 3.** The third-order equation $y'''+2y''+3y'+4y=0$ has auxiliary polynomial $\lambda^3+2\lambda^2+3\lambda+4$. It can also be written as a first-order system. Set $x_1=y$, $x_2=y'$, and $x_3=y''$. In general the last state is $x_n=y^{(n-1)}$. Here the derivatives are

$$
\mathbf x'=\begin{pmatrix}x_2\\x_3\\-2x_3-3x_2-4x_1\end{pmatrix}.
$$

### PDF page 10

For the system on page 9,

$$
\mathbf x'=\begin{pmatrix}0&1&0\\0&0&1\\-4&-3&-2\end{pmatrix}\mathbf x.
$$

Solving the scalar equation of order $n$ is equivalent to solving a first-order system with $n$ state components and an initial vector $\mathbf x(t_0)=\mathbf x_0$. If $A(t)$ and $\mathbf F(t)$ are continuous on the interval, the IVP $\mathbf x'=A(t)\mathbf x+\mathbf F(t)$ has a unique vector solution there. The notes use $I=[t_0,T]$.

#### Lecture 9/12/2016. Superposition and fundamental sets

An equation such as $y^{(10)}+2y-t=0$ can be converted to a system $\mathbf x'=A\mathbf x+\mathbf F(t)$. When $\mathbf F(t)=0$, the system is homogeneous.

For a homogeneous system of $n$ equations, a fundamental set on $I$ consists of $n$ linearly independent solution vectors $\mathbf X_1,\ldots,\mathbf X_n$. The notebook writes the components of column $j$ as $x_{1j}(t),\ldots,x_{nj}(t)$. The general solution is

$$
\mathbf x=c_1\mathbf X_1+c_2\mathbf X_2+\cdots+c_n\mathbf X_n.
$$

### PDF page 11

#### Wronskian of solution vectors

For $n$ solutions of an $n$-component homogeneous linear system, assemble their vectors as the columns of a square matrix. The Wronskian is $W(\mathbf X_1,\ldots,\mathbf X_n)=\det[\mathbf X_1\ \cdots\ \mathbf X_n]$. Its entries are the components themselves, so this determinant requires no differentiation. A nonzero determinant at one point gives linear independence. For solutions of the same continuous linear system, independence also implies that this determinant is nonzero at every point.

#### Example 1. Section 8.1, exercise 14

Verify that

$$
A=\begin{pmatrix}2&1\\-1&0\end{pmatrix},\qquad
\mathbf x=\begin{pmatrix}1\\3\end{pmatrix}e^t+\begin{pmatrix}4\\-4\end{pmatrix}te^t
$$

give $\mathbf x'=A\mathbf x$. Differentiation yields

$$
\mathbf x'
=\begin{pmatrix}1\\3\end{pmatrix}e^t+\begin{pmatrix}4\\-4\end{pmatrix}(1+t)e^t
=\begin{pmatrix}5+4t\\-1-4t\end{pmatrix}e^t.
$$

Multiplying each constant vector by $A$ gives $(5,-1)^{\mathsf T}$ and $(4,-4)^{\mathsf T}$, respectively. Therefore $A\mathbf x$ equals the displayed derivative.

### PDF page 12

**25.** Prove that the general solution of $\mathbf x'=A\mathbf x$ on $\mathbb R$ for $A=\begin{pmatrix}0&6&0\\1&0&1\\1&1&0\end{pmatrix}$ is

$$
\mathbf x=c_1\begin{pmatrix}6\\-1\\-5\end{pmatrix}e^{-t}
+c_2\begin{pmatrix}-3\\1\\1\end{pmatrix}e^{-2t}
+c_3\begin{pmatrix}2\\1\\1\end{pmatrix}e^{3t}.
$$

Use the Wronskian to show independence of the three solution vectors. The notebook leaves the calculation as practice.

#### Matrix exponential

For $y'=ay$ with $y(t_0)=y_0$, the solution is $y_0e^{a(t-t_0)}$. The displayed $y_0e^{at}$ takes $t_0=0$. The lecture asks whether $\mathbf x=e^{At}\mathbf x_0$ similarly solves $\mathbf x'=A\mathbf x$ at $t_0=0$.

Extend the scalar power series to an $n\times n$ matrix $A$ by taking $A^0=I_n$,

$$
e^A=\sum_{k=0}^\infty\frac{A^k}{k!},\qquad
e^{At}=I_n+At+\frac{A^2t^2}{2!}+\frac{A^3t^3}{3!}+\cdots
=\sum_{k=0}^\infty\frac{t^kA^k}{k!}.
$$

To verify that the columns of $X(t)=e^{At}$ solve the homogeneous system, differentiate the series.

### PDF page 13

Termwise differentiation gives

$$
\frac{d}{dt}e^{At}=\sum_{k=1}^\infty\frac{A^k t^{k-1}}{(k-1)!}=Ae^{At}.
$$

#### Eigenvalues and eigenvectors

Think of a matrix as a transformation from a vector $\mathbf r$ to an output $\mathbf R$. A nonzero $\mathbf r$ is an eigenvector if $\mathbf R=\lambda\mathbf r$ for some scalar $\lambda$.

For $A=\begin{pmatrix}5&-2\\-2&2\end{pmatrix}$, the component equations for $A(x,y)^{\mathsf T}=\lambda(x,y)^{\mathsf T}$ are $(5-\lambda)x-2y=0$ and $-2x+(2-\lambda)y=0$. A nonzero solution requires the secular determinant to vanish,

$$
\begin{vmatrix}5-\lambda&-2\\-2&2-\lambda\end{vmatrix}
=(5-\lambda)(2-\lambda)-4
=\lambda^2-7\lambda+6=(\lambda-1)(\lambda-6)=0.
$$

For $\lambda=1$, substitution gives $4x-2y=0$, so $y=2x$. For $\lambda=6$, it gives $-x-2y=0$, so $y=-x/2$.

#### Forced second-order linear equations

The constant-coefficient equation is

$$
a_2\frac{d^2y}{dx^2}+a_1\frac{dy}{dx}+a_0y=f(x). \tag{6.1}
$$

Dividing by $a_2$ gives $y''+(a_1/a_2)y'+(a_0/a_2)y=F(x)$, with $F=f/a_2$. The right-hand side is the forcing function, such as an applied force in mechanics or an electromotive force in a circuit.

### PDF page 14

#### Superposition example

Consider

$$
(D^2+5D+4)y=\cos 2x.
$$

The characteristic polynomial of the homogeneous equation factors as $(r+1)(r+4)$. The complementary solution is $y_c=Ae^{-x}+Be^{-4x}$. A particular solution is $y_p=\frac{1}{10}\sin 2x$, since

$$
(D^2+5D+4)y_p
=-\frac{4}{10}\sin 2x+\cos 2x+\frac{4}{10}\sin 2x
=\cos 2x.
$$

As $(D^2+5D+4)y_c=0$, the general solution is

$$
y=Ae^{-x}+Be^{-4x}+\frac{1}{10}\sin 2x.
$$

In general, for $a_2\ne0$, write a second-order linear equation in the normalized form

$$
y''+\frac{a_1}{a_2}y'+\frac{a_0}{a_2}y=F(x).
$$

The general solution is $y=y_c+y_p$, where $y_c$ solves the associated homogeneous equation and $y_p$ is any particular solution of the nonhomogeneous equation.

#### Lecture, September 14, 2016. Matrix exponential review

The matrix exponential is defined by

$$
e^A=I+A+\frac{A^2}{2!}+\frac{A^3}{3!}+\cdots.
$$

The scalar equation $x'=ax$ has solutions $x(t)=e^{at}c$. Analogously, $X'=AX$ with $X(0)=I$ has the matrix solution $X(t)=e^{At}$.

1. $e^{A0}=I$.
2. $\frac{d}{dt}e^{At}=Ae^{At}$.
3. The initial-value problem $\mathbf{x}'=A\mathbf{x}$, $\mathbf{x}(t_0)=\mathbf{x}_0$ has solution $\mathbf{x}(t)=e^{(t-t_0)A}\mathbf{x}_0$.

The order of multiplication matters. The column vector belongs on the right, and even for square matrices of the same size, $AB$ need not equal $BA$.

The first example is the system $x'=x$, $y'=2y$.

### PDF page 15

#### Exponential of a diagonal matrix

For $x'=x$, $y'=2y$, take

$$
\mathbf{x}'=A\mathbf{x},\qquad
A=\begin{bmatrix}1&0\\0&2\end{bmatrix},\qquad
\mathbf{x}(0)=\begin{bmatrix}x(0)\\y(0)\end{bmatrix}=\begin{bmatrix}1\\2\end{bmatrix}.
$$

The matrix powers stay diagonal. For instance, $A^2t^2=\operatorname{diag}(t^2,4t^2)$, and the exponential series becomes

$$
e^{At}
=I+At+\frac{A^2t^2}{2!}+\cdots
=\begin{bmatrix}
1+t+\frac{t^2}{2!}+\cdots&0\\
0&1+2t+\frac{(2t)^2}{2!}+\cdots
\end{bmatrix}
=\begin{bmatrix}e^t&0\\0&e^{2t}\end{bmatrix}.
$$

Thus $\mathbf{x}(t)=e^{At}\mathbf{x}(0)$ gives $x(t)=e^t$ and $y(t)=2e^{2t}$. The initial-value list uses $y(0)$ twice. The column vector and solution identify the first entry as $x(0)=1$.

4. If $A=\operatorname{diag}(a_1,a_2,\ldots,a_n)$, then $e^{At}=\operatorname{diag}(e^{a_1t},e^{a_2t},\ldots,e^{a_nt})$. For example, $\operatorname{diag}(-3,5)$ gives $\operatorname{diag}(e^{-3t},e^{5t})$.

#### A nondiagonal coefficient matrix

For $x'=4x-2y$, $y'=x+y$, the coefficient matrix is

$$
A=\begin{bmatrix}4&-2\\1&1\end{bmatrix}.
$$

To compute $e^{At}$ using the preceding property, seek a change of basis that makes $A$ diagonal.

### PDF page 16

#### Similarity and diagonalization

A square matrix $A$ is **diagonalizable** if it is similar to a diagonal matrix. Two square matrices $A$ and $B$ are **similar** if there is an invertible matrix $T$ such that $B=T^{-1}AT$. Multiplying on the left by $T$ gives $TB=AT$. Multiplying on the right by $T^{-1}$ then gives $A=TBT^{-1}$, so similarity is symmetric.

Similar matrices have the same characteristic polynomial and therefore the same eigenvalues. With the convention $p_A(\lambda)=\det(A-\lambda I)$, the determinant example is

$$
p_A(\lambda)=
\begin{vmatrix}1-\lambda&2\\3&4-\lambda\end{vmatrix}
=(1-\lambda)(4-\lambda)-6.
$$

The final sign is read as subtraction, as required by the determinant. For similar $A$ and $B$, $\det(A-\lambda I)=\det(B-\lambda I)$ and $p_A=p_B$.

If $B=T^{-1}AT$ is diagonal, its diagonal entries are the eigenvalues of $A$. The problem is to find $T$ so that

$$
T^{-1}AT=D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$

Equivalently, $AT=TD$.

### PDF page 17

#### Finding the change of basis

Write $T=[\mathbf{v}_1\ \mathbf{v}_2\ \cdots\ \mathbf{v}_n]$, where each $\mathbf{v}_i$ is a column. The equation $AT=TD$ reads

$$
[A\mathbf{v}_1\ A\mathbf{v}_2\ \cdots\ A\mathbf{v}_n]
=[\lambda_1\mathbf{v}_1\ \lambda_2\mathbf{v}_2\ \cdots\ \lambda_n\mathbf{v}_n].
$$

Thus $A\mathbf{v}_i=\lambda_i\mathbf{v}_i$ for each $i$. The columns are eigenvectors, and $T$ is invertible exactly when these columns are linearly independent.

1. Find the eigenvalues of $A$.
2. Find $n$ linearly independent eigenvectors $\mathbf{v}_1,\ldots,\mathbf{v}_n$, if they exist.
3. Use the eigenvectors as the columns of $T$. The diagonal entries of $D=T^{-1}AT$ are the corresponding eigenvalues in the same order.

Since $A=TDT^{-1}$, the matrix exponential is

$$
e^{At}=Te^{Dt}T^{-1}
=T\operatorname{diag}(e^{\lambda_1t},\ldots,e^{\lambda_nt})T^{-1}.
$$

### PDF page 18

#### Example 2. Solving a system by diagonalization

Consider

$$
\mathbf{x}'=A\mathbf{x},\qquad
A=\begin{bmatrix}4&-2\\1&1\end{bmatrix},\qquad
\mathbf{x}(0)=\begin{bmatrix}1\\2\end{bmatrix}.
$$

The opening matrix on this page appears to have $-1$ in the lower-right entry. The previous page, the characteristic determinant, and the resulting eigenpairs all use $+1$.

First solve

$$
\begin{vmatrix}4-\lambda&-2\\1&1-\lambda\end{vmatrix}
=(4-\lambda)(1-\lambda)+2
=\lambda^2-5\lambda+6=0.
$$

The eigenvalues are $\lambda_1=2$ and $\lambda_2=3$. Their eigenvectors are $\mathbf{v}_1=(1,1)^{\mathsf T}$ and $\mathbf{v}_2=(2,1)^{\mathsf T}$, respectively. Verify both eigenvector equations. Then

$$
T=\begin{bmatrix}1&2\\1&1\end{bmatrix},\qquad
D=\begin{bmatrix}2&0\\0&3\end{bmatrix},\qquad
e^{At}
=\begin{bmatrix}1&2\\1&1\end{bmatrix}
\begin{bmatrix}e^{2t}&0\\0&e^{3t}\end{bmatrix}
\begin{bmatrix}-1&2\\1&-1\end{bmatrix}.
$$

Multiplying by the initial vector gives

$$
\mathbf{x}(t)=
\begin{bmatrix}3e^{2t}-2e^{3t}\\3e^{2t}-e^{3t}\end{bmatrix}.
$$

If the eigenvalues are ordered as $\lambda_1=3$, $\lambda_2=2$, then $D=\operatorname{diag}(3,2)$ and $T=\begin{bmatrix}2&1\\1&1\end{bmatrix}$. The column ordering in $T$ must match the order in $D$.

### PDF page 19

#### Review of diagonalization for differential equations

For any square matrix $A$, take $A^2=AA$, $A^3=AA^2$, and $A^n=AA^{n-1}$. Then

$$
e^{At}=I+At+\frac{A^2t^2}{2!}+\cdots.
$$

For $A=\operatorname{diag}(1,2)$, this gives $e^{At}=\operatorname{diag}(e^t,e^{2t})$.

The aim is to replace the coupled equations

$$
x_i'=\sum_{j=1}^n a_{ij}x_j,\qquad i=1,\ldots,n,
$$

with independent scalar equations in the new coordinates, $y_i'=d_{ii}y_i$. Writing $\mathbf{x}=T\mathbf{y}$ gives $\mathbf{y}'=D\mathbf{y}$ when $D=T^{-1}AT$.

For $x'=4x-2y$, $y'=x+y$, $x(0)=1$, and $y(0)=2$, we have

$$
\begin{bmatrix}x\\y\end{bmatrix}'=
\begin{bmatrix}4&-2\\1&1\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}.
$$

The equation for an eigenvector is $(A-\lambda I)\mathbf{v}=\mathbf{0}$. Its determinant condition is

$$
(4-\lambda)(1-\lambda)+2
=\lambda^2-5\lambda+6
=(\lambda-2)(\lambda-3)=0.
$$

The two distinct eigenvalues yield a diagonalization with $D=\operatorname{diag}(2,3)$. The solution is $\mathbf{x}(t)=Te^{Dt}T^{-1}\mathbf{x}_0$, where $e^{Dt}=\operatorname{diag}(e^{2t},e^{3t})$ and $\mathbf{x}_0=(1,2)^{\mathsf T}$.

### PDF page 20

#### The Laplace transform

The Laplace transform is the integral transform

$$
\mathcal{L}\{f\}(p)=F(p)=\int_0^\infty f(t)e^{-pt}\,dt.
$$

It is convenient to define $f(t)=0$ for $t<0$. For $f(t)=1$ on $t\ge0$ and $p>0$,

$$
F(p)=\int_0^\infty e^{-pt}\,dt
=\left[-\frac{1}{p}e^{-pt}\right]_0^\infty
=\frac{1}{p}.
$$

#### Lecture, September 19, 2016. Power series

For a power series $\sum_{n=0}^\infty c_n(x-a)^n$, the ratio test uses

$$
L=\lim_{n\to\infty}\left|\frac{c_{n+1}(x-a)^{n+1}}{c_n(x-a)^n}\right|
=|x-a|\lim_{n\to\infty}\left|\frac{c_{n+1}}{c_n}\right|
$$

where the ratios and limit are defined. If $L<1$, the series converges absolutely. If $L>1$, it diverges. Convergence at the endpoints of the interval of convergence requires separate checks.

#### Diagonalization with a repeated eigenvalue

An $n\times n$ matrix $A$ is diagonalizable when it has $n$ linearly independent eigenvectors. A sufficient condition is that it have $n$ distinct eigenvalues.

For example, consider $A=\begin{bmatrix}4&1\\-1&2\end{bmatrix}$. The characteristic equation is

$$
\begin{vmatrix}4-\lambda&1\\-1&2-\lambda\end{vmatrix}
=(4-\lambda)(2-\lambda)+1
=\lambda^2-6\lambda+9
=(\lambda-3)^2=0.
$$

The two eigenvalues coincide at $\lambda=3$. In this example $A$ cannot be diagonalized. Indeed, a diagonal matrix with both entries equal to $3$ would be $3I$, and any matrix similar to $3I$ equals $3I$. This check supplies the justification beyond the repeated root recorded in the notes.

### PDF page 21

#### Applications of diagonalization

For $A=\begin{bmatrix}4&-2\\1&1\end{bmatrix}$, the eigenvalues $2$ and $3$ are distinct, so $A=TDT^{-1}$ for $D=\operatorname{diag}(2,3)$. The intermediate factors $T^{-1}T$ cancel when taking powers, giving

$$
A^k=(TDT^{-1})^k
=TD^kT^{-1}
=T\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k)T^{-1}.
$$

In particular, $A^{10}=TD^{10}T^{-1}$ with $D^{10}=\operatorname{diag}(2^{10},3^{10})$.

A separate calculation in the margin uses the lower-right entry $-1$ and finds the adjugate

$$
\operatorname{adj}\begin{bmatrix}4&-2\\1&-1\end{bmatrix}
=\begin{bmatrix}-1&2\\-1&4\end{bmatrix}.
$$

#### Variation of constants

For a constant matrix $A$, the nonhomogeneous initial-value problem $\mathbf{x}'=A\mathbf{x}+\mathbf{F}(t)$ with $\mathbf{x}(t_0)=\mathbf{x}_0$ has solution

$$
\mathbf{x}(t)=e^{A(t-t_0)}\mathbf{x}_0
+\int_{t_0}^t e^{A(t-s)}\mathbf{F}(s)\,ds.
$$

This is the **variation of constants** or **variation of parameters** formula.

In Example 3, $A=\operatorname{diag}(1,2)$, $\mathbf{F}(t)=(t,e^{4t})^{\mathsf T}$, and $\mathbf{x}(0)=(1,2)^{\mathsf T}$. Substitution gives

$$
\begin{aligned}
\mathbf{x}(t)
&=\begin{bmatrix}e^t&0\\0&e^{2t}\end{bmatrix}
\begin{bmatrix}1\\2\end{bmatrix}
+\int_0^t
\begin{bmatrix}e^{t-s}&0\\0&e^{2(t-s)}\end{bmatrix}
\begin{bmatrix}s\\e^{4s}\end{bmatrix}\,ds\\
&=\begin{bmatrix}e^t\\2e^{2t}\end{bmatrix}
+\int_0^t \begin{bmatrix}se^{t-s}\\e^{2t+2s}\end{bmatrix}\,ds\\
&=\begin{bmatrix}
2e^t-t-1\\
2e^{2t}+\frac{1}{2}(e^{4t}-e^{2t})
\end{bmatrix}.
\end{aligned}
$$

The first entry in the handwritten boxed result differs from the preceding integral. Here it is evaluated using $\int_0^t se^{t-s}\,ds=e^t-t-1$.

### PDF page 22

#### Chapter 6. Series solutions of linear differential equations

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

#### Lecture, September 21, 2016. Section 6.1

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

### PDF page 23

#### Taylor series examples

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

#### Example 5. Solving $y'+y=0$ by a power series

The solution is known to be $y(x)=Ce^{-x}$. To recover it by a series, write the unknown function as $y(x)=\sum_{n=0}^\infty c_n x^n$. Termwise differentiation and substitution give

$$
\sum_{n=1}^\infty n c_n x^{n-1}+\sum_{n=0}^\infty c_nx^n=0.
$$

Set $k=n-1$ in the derivative series and use $k$ as the index in the original series. Then

$$
\sum_{k=0}^\infty(k+1)c_{k+1}x^k+\sum_{k=0}^\infty c_kx^k
=\sum_{k=0}^\infty\bigl((k+1)c_{k+1}+c_k\bigr)x^k=0.
$$

### PDF page 24

Equating coefficients in $y'+y=0$ gives $(k+1)c_{k+1}+c_k=0$. Therefore $c_n=(-1)^n c_0/n!$ and $y(x)=c_0e^{-x}$. The exponent at the top of the page appears positive. The alternating coefficients and the preceding page give $-x$.

#### September 23, 2016. Rewriting a second-order equation as a system

For $u''+11u'+24u=t^2$, put $x_1=u$ and $x_2=u'$. Then $x_1'=x_2$ and $x_2'=-24x_1-11x_2+t^2$, or

$$
\mathbf{x}'(t)
=\begin{bmatrix}0&1\\-24&-11\end{bmatrix}\mathbf{x}(t)
+\begin{bmatrix}0\\t^2\end{bmatrix}.
$$

#### Lecture, September 26, 2016. Series solutions near an ordinary point

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

### PDF page 25

#### Ordinary and singular points

For polynomial coefficients, every $x_0$ with $a_2(x_0)\ne0$ is an ordinary point. To apply the converse, first cancel any common factors in the ratios $a_1/a_2$ and $a_0/a_2$. A point where either ratio fails to be analytic is a **singular point**.

1. For $y''+y=0$, the leading coefficient is $a_2(x)=1$. Every real or complex point is ordinary.
2. For $(x^2-1)y''-4xy'+6y=0$, the leading coefficient vanishes at $x=\pm1$. These points are singular, and every other point is ordinary. The handwritten summary appears to omit the negation in $x_0\ne\pm1$, which is present in the line above.
3. For $(x^2+1)y''-4xy'+6y=0$, $x^2+1=0$ gives $x=\pm i$. These are the singular points in the complex plane.

If $x_0$ is an ordinary point, a solution near $x_0$ can be represented by a power series

$$
y(x)=\sum_{n=0}^\infty c_n(x-x_0)^n
$$

converging for $|x-x_0|<r$, where $r$ is its radius of convergence. The number-line sketch shows the interval $(x_0-r,x_0+r)$ centered at $x_0$, with ordinary points in its interior when $r$ is chosen within the nearest singularity.

#### Example. Series solutions of $y''+y=0$

Find the guaranteed radius of convergence for the expansion about $x_0=0$, and find a power-series solution of the equation.

### PDF page 26

The equation $y''+y=0$ has no singular points, so its series about zero has radius of convergence $r=\infty$.

#### Lecture, September 28, 2016. Series at ordinary points

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

### PDF page 27

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

#### Example 3. Airy's equation with the argument reversed

For $y''+xy=0$, assume $y(x)=\sum_{n=0}^\infty c_n x^n$. The product term is

$$
xy=x\sum_{n=0}^\infty c_n x^n
=\sum_{n=0}^\infty c_nx^{n+1}
=\sum_{k=1}^\infty c_{k-1}x^k,
$$

where $k=n+1$.

#### Method of undetermined coefficients

Consider the nonhomogeneous equation

$$
y''+p(x)y'+q(x)y=g(x). \tag{1}
$$

If $y_1$ and $y_2$ are independent homogeneous solutions and $y_p$ is a particular solution, then the general solution is $y=C_1y_1+C_2y_2+y_p$. When the coefficients and forcing admit a suitable trial form, the procedure is as follows.

1. Solve the corresponding homogeneous equation $y''+p(x)y'+q(x)y=0$.
2. Choose a trial form for $y_p$ with undetermined coefficients.
3. Substitute it into equation (1) and solve for the coefficients. Add the resulting $y_p$ to the homogeneous solution.

### PDF page 28

#### Exponential forcing

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

#### Sinusoidal forcing

Find a particular solution of $y''+y'-y=\sin(2x)$. Try $y_p=A\sin(2x)+B\cos(2x)$. Then

$$
\begin{aligned}
y_p'&=2A\cos(2x)-2B\sin(2x),\\
y_p''&=-4A\sin(2x)-4B\cos(2x).
\end{aligned}
$$

Substitute these expressions into the equation.

### PDF page 29

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

#### PatrickJMT review of second-order homogeneous equations

The general linear form is $P(x)y''+Q(x)y'+R(x)y=G(x)$. For a homogeneous equation with constant coefficients, $ay''+by'+cy=0$, solve $ar^2+br+c=0$.

| Roots | General solution |
| --- | --- |
| Two distinct real roots $r_1,r_2$ | $C_1e^{r_1x}+C_2e^{r_2x}$ |
| One repeated real root $r$ | $C_1e^{rx}+C_2xe^{rx}$ |
| Complex conjugates $\alpha\pm i\beta$ | $e^{\alpha x}\bigl(C_1\cos(\beta x)+C_2\sin(\beta x)\bigr)$ |

For example, $y''+y'-6y=0$ gives $\lambda^2+\lambda-6=(\lambda+3)(\lambda-2)=0$. Hence $y(x)=C_1e^{2x}+C_2e^{-3x}$.

### PDF page 30

For $y''-8y'+16y=0$, the characteristic equation is $(\lambda-4)^2=0$. The repeated root gives $y_h(x)=C_1e^{4x}+C_2xe^{4x}$.

#### Variation of parameters for a scalar equation

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

#### Example. Variable coefficients

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

### PDF page 31

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

#### Undetermined coefficients with polynomial forcing

Solve $y''+3y'+2y=x^2$. The complementary equation is $y''+3y'+2y=0$, with characteristic polynomial $\lambda^2+3\lambda+2=(\lambda+1)(\lambda+2)$. The roots $-1$ and $-2$ give $y_c=C_1e^{-x}+C_2e^{-2x}$.

### PDF page 32

For $y''+3y'+2y=x^2$, take $y_p=Ax^2+Bx+C$. Then $y_p'=2Ax+B$ and $y_p''=2A$. Substitution gives

$$
2A+3(2Ax+B)+2(Ax^2+Bx+C)
=2Ax^2+(6A+2B)x+(2A+3B+2C).
$$

Match coefficients with $x^2+0x+0$. From $2A=1$ we get $A=1/2$. Then $6A+2B=0$ gives $B=-3/2$. Finally $2A+3B+2C=0$ gives $1-9/2+2C=0$, so $C=7/4$. The complete solution is

$$
y(x)=\frac12 x^2-\frac32x+\frac74+C_1e^{-x}+C_2e^{-2x}.
$$

#### Lecture, October 3, 2016. Airy's equation

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

### PDF page 33

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

### PDF page 34

#### Review of initial-value and boundary-value problems

For a second-order equation, initial conditions can specify $y(a)$ and $y'(a)$. Boundary conditions can specify $y(a)$ and $y(b)$ at different points, or combine values and derivatives at the two endpoints. The general schematic at the top uses one prime, but the conditions and examples are for second-order equations.

For $y''+25y=\cos t$, compare the initial conditions $y(0)=1$, $y'(0)=5$ with the mixed boundary conditions $y(\pi/2)=1$, $y'(0)=5$. The characteristic equation $\lambda^2+25=0$ has roots $\pm5i$, giving

$$
y_h=C_1\cos(5t)+C_2\sin(5t).
$$

A trial particular solution is $A\cos t+B\sin t$, with separate coefficients for the two terms. The imposed conditions give equations for $C_1$ and $C_2$.

#### Review of systems

The equations $x'=3x+y$ and $y'=7x-3y$ give

$$
\mathbf{x}'=A\mathbf{x},\qquad
A=\begin{bmatrix}3&1\\7&-3\end{bmatrix},\qquad
\mathbf{x}(0)=\begin{bmatrix}x(0)\\y(0)\end{bmatrix}
=\begin{bmatrix}3\\2\end{bmatrix}.
$$

#### Lecture, October 10, 2016. Chapter 11 and Section 11.4

The Sturm–Liouville topic begins with eigenvalue and eigenfunction boundary-value problems. Compare these four equations, each with $y(0)=y(\pi/2)=0$:

1. $y''+9y=0$.
2. $y''+4y=0$.
3. $y''-y=0$.
4. $y''=0$.

### PDF page 35

Of the four problems with $y(0)=y(\pi/2)=0$, only the second has nontrivial solutions.

1. For $y''+9y=0$, the endpoint conditions force both coefficients to vanish.
2. For $y''+4y=0$, the solutions are $y(x)=C_2\sin(2x)$ with $C_2$ arbitrary.
3. For $y''-y=0$, $y(0)=0$ gives $C_1+C_2=0$ for the coefficients of $e^x$ and $e^{-x}$. The condition at $\pi/2$ then forces both coefficients to vanish.
4. For $y''=0$, the general solution $C_1x+C_2$ must vanish at both endpoints, so both constants are zero.

#### Two-point eigenvalue problem

Consider

$$
\begin{cases}
y''+\lambda y=0,\qquad 0<x<L,\\
y(0)=y(L)=0.
\end{cases} \tag{*}
$$

The zero function always solves this problem. The **eigenvalues** are the values of $\lambda$ for which a nonzero solution exists. A corresponding nonzero solution $y_\lambda$ is an **eigenfunction**. In the four examples above, $\lambda=4$ is the only eigenvalue among the values tested for $L=\pi/2$. One eigenfunction is $\sin(2x)$.

The matrix analogy is $A\mathbf{x}=\lambda\mathbf{x}$ with $\mathbf{x}\ne\mathbf{0}$ and $\det(A-\lambda I)=0$. For the differential equation, define $Dy=d^2y/dx^2$. Then $Dy+\lambda y=0$ becomes $Dy=-\lambda y$, with the endpoint conditions included in the domain of $D$.

### PDF page 36

#### Eigenvalues for two zero endpoints

Find the real values of $\lambda$ for which $y''+\lambda y=0$, $y(0)=y(L)=0$, with $L>0$, has a nonzero solution.

**Case 1. $\lambda=0$.** The solution of $y''=0$ has the form $y=C_1x+C_2$. The condition at zero gives $C_2=0$, and the condition at $L$ gives $C_1L=0$. Thus $y=0$.

**Case 2. $\lambda<0$.** Write $\lambda=-\alpha^2$ with $\alpha>0$. For instance, $-4=-2^2$ and $-8=-(2\sqrt2)^2$. The characteristic roots of $y''-\alpha^2y=0$ are $\pm\alpha$, so $y=C_1e^{\alpha x}+C_2e^{-\alpha x}$. The boundary conditions give

$$
C_1+C_2=0,\qquad
C_1e^{\alpha L}+C_2e^{-\alpha L}=0.
$$

Because $e^{\alpha L}\ne e^{-\alpha L}$, both coefficients vanish.

**Case 3. $\lambda>0$.** Write $\lambda=\alpha^2$ with $\alpha>0$. For instance, $20=(2\sqrt5)^2$.

### PDF page 37

For $\lambda=\alpha^2>0$, the characteristic roots are $\pm i\alpha$ and

$$
y(x)=C_1\cos(\alpha x)+C_2\sin(\alpha x).
$$

The first boundary condition gives $C_1=0$. The second gives $C_2\sin(\alpha L)=0$. For a nonzero solution, $\sin(\alpha L)=0$, so $\alpha L=n\pi$ and $\alpha=n\pi/L$. Therefore

$$
\lambda_n=\left(\frac{n\pi}{L}\right)^2,\qquad
y_n(x)=C_2\sin\left(\frac{n\pi x}{L}\right),\qquad n=1,2,\ldots,\quad C_2\ne0.
$$

The handwritten eigenvalue list includes $0$ and appears to use $\pm$ signs. The zero and negative cases on the preceding page give only the zero solution, so the list here uses the positive values from the sine condition.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Zero endpoint eigenfunction.png|**Fig. 1** The first sine mode vanishes at both ends, as in the particle-in-a-box example noted in the margin.]]

For $L=\pi/2$, the eigenvalues are $(2n)^2$. Thus $\lambda=9$ gives only the zero solution, and $\lambda=4$ gives a multiple of $\sin(2x)$. For $y''+2016y=0$ with $y(0)=y(\pi)=0$, a nonzero solution would require $2016=n^2$ for some positive integer $n$. There is no such integer.

#### Lecture, October 12, 2016. Eigenvalues of a differential operator

For an $n\times n$ matrix $A$, solve $\det(A-\lambda I)=0$ to find its eigenvalues. The boundary-value analogue uses the operator $Dy=y''$ with endpoint conditions on its domain. Then the equation reads $Dy=-\lambda y$, and the values of $\lambda$ are selected by requiring a nonzero solution satisfying the endpoint conditions.

### PDF page 38

#### Zero derivative at both endpoints

Find eigenvalues and eigenfunctions of $y''+\lambda y=0$ with $y'(0)=y'(L)=0$. In the $\lambda=0$ case, the eigenfunctions are nonzero constants $y_\lambda(x)=C_2$. For $\lambda<0$, the boundary conditions force the zero solution. The handwritten case list ends there before turning to orthogonality.

The margin defines the Kronecker delta:

$$
\delta_{mn}=\begin{cases}
1,&m=n,\\
0,&m\ne n.
\end{cases}
$$

#### Orthogonal functions

For the earlier problem with $y(0)=y(L)=0$, let $L=\pi$. The eigenfunctions $\sin(n\pi x/L)$ become $\sin(nx)$ for $n=1,2,\ldots$. In particular, verify

$$
\langle\sin x,\sin(2x)\rangle
=\int_0^\pi\sin x\sin(2x)\,dx=0.
$$

Two real-valued functions $f_1$ and $f_2$ are **orthogonal** on $[a,b]$ if

$$
\langle f_1,f_2\rangle=\int_a^b f_1(x)f_2(x)\,dx=0.
$$

For example, $f_1(x)=x$ and $f_2(x)=1$ on $[0,1]$ have inner product $\int_0^1 x\,dx=1/2$, so their inner product is nonzero.

### PDF page 39

#### Lecture, October 17, 2016. Eigenfunctions and vibrations

Eigenvalues determine the natural frequencies of vibration, and eigenfunctions determine the shapes of the corresponding modes. The notes illustrate the amplitude of a forced vibration with

$$
\mechanical{m}\ddot{\mechanical{x}}+
\mechanical{c}\dot{\mechanical{x}}+
\mechanical{k}\mechanical{x}
=\mechanical{F}\cos(\signal{\omega}\signal{t}).
$$

The sketch of the response writes $\mechanical{x}(\signal{t})=\signal{A}\cos(\signal{\omega}\signal{t})$ and highlights a large amplitude. In general, a damped steady response also has a phase shift relative to the driving force.

#### Inner products and norms

For real functions on $[a,b]$, set $\langle f_1,f_2\rangle=\int_a^b f_1(x)f_2(x)\,dx$. Orthogonality means this inner product equals zero.

For $y''+\lambda y=0$ with $y(0)=y(\pi)=0$, the eigenfunctions are $y_n(x)=\sin(nx)$. They provide an expansion of the form $y(x)=\sum_{n=1}^\infty c_n\sin(nx)$ for functions admitting such a sine series. For distinct positive integers $m,n$,

$$
\int_0^\pi\sin(mx)\sin(nx)\,dx=0.
$$

The distinction between $m$ and $n$ is implicit in the handwritten orthogonality calculation.

Spaces of continuous functions are infinite dimensional, and the integral inner product can also be used on a space of square-integrable functions. The corresponding norm is

$$
\|f\|=\sqrt{\langle f,f\rangle}
=\sqrt{\int_a^b f(x)^2\,dx}.
$$

Compare it with the Euclidean norm of $\mathbf{u}=(1,2)$, which is $\|\mathbf{u}\|=\sqrt{1^2+2^2}$.

### PDF page 40

#### Example 2. Norm of a sine mode

For $f(x)=\sin(nx)$ on $[0,\pi]$, with $n$ a positive integer,

$$
\|f\|
=\sqrt{\int_0^\pi\sin^2(nx)\,dx}
=\sqrt{\frac12\int_0^\pi(1-\cos(2nx))\,dx}
=\sqrt{\frac{\pi}{2}}.
$$

The handwritten integral is shown for $n=1$. The same endpoint calculation applies for each positive integer $n$.

#### Example 3. Norm of a cosine mode

Let $y_n(x)=\cos(n\pi x/L)$ on $[-L,L]$. For $n\ge1$, put $\alpha=2n\pi/L$. The double-angle identity gives

$$
\begin{aligned}
\|y_n\|^2
&=\int_{-L}^L\cos^2\left(\frac{n\pi x}{L}\right)\,dx\\
&=\frac12\int_{-L}^L(1+\cos(\alpha x))\,dx\\
&=L+\frac{\sin(L\alpha)-\sin(-L\alpha)}{2\alpha}
=L.
\end{aligned}
$$

Thus $\|y_n\|=\sqrt{L}$. The factor $1/2$ multiplies both terms in the double-angle identity. The sine contribution vanishes at the endpoints. If the constant mode $n=0$ is included, its norm is $\sqrt{2L}$.

### PDF page 41

#### Orthogonal sets of functions

A set of real-valued functions $\{\phi_0,\phi_1,\ldots\}$ is **orthogonal** on $[a,b]$ if

$$
\langle\phi_m,\phi_n\rangle=\int_a^b\phi_m(x)\phi_n(x)\,dx=0
\qquad\text{for all }m\ne n.
$$

Example 4 asks to show that the constant, cosine, and sine modes

$$
1,\qquad \cos\left(\frac{n\pi x}{L}\right),\qquad
\sin\left(\frac{n\pi x}{L}\right),\qquad n=1,2,\ldots,
$$

are orthogonal on $[-L,L]$. These modes solve $y''+\lambda y=0$ for their respective eigenvalues with periodic endpoint conditions. Set $C_n(x)=\cos(n\pi x/L)$ and $S_n(x)=\sin(n\pi x/L)$. The checks are

$$
\begin{aligned}
\langle 1,C_n\rangle&=0,\\
\langle 1,S_m\rangle&=0,\\
\langle S_m,C_n\rangle&=0,\\
\langle C_m,C_n\rangle&=0\quad(m\ne n),\\
\langle S_m,S_n\rangle&=0\quad(m\ne n).
\end{aligned}
$$

#### Fourier series, part I

A Fourier series expands a function in constant, sine, and cosine modes. On an interval of length $2\pi$, the modes in the two sums are $\sin(nx)$ and $\cos(nx)$. The introductory shorthand omits $n$ from the arguments. The basic period identity is $\sin(x+2\pi)=\sin x$.

### PDF page 42

#### Boundary conditions and trigonometric expansions

For $y''+\lambda y=0$ on $[0,L]$, homogeneous conditions on the values, $y(0)=y(L)=0$, give sine modes $\sin(n\pi x/L)$ for $n\ge1$. Their associated expansion has the form

$$
\sum_{n=1}^\infty b_n\sin\left(\frac{n\pi x}{L}\right).
$$

Homogeneous conditions on both derivatives, $y'(0)=y'(L)=0$, give cosine modes $\cos(n\pi x/L)$ for $n\ge1$, with a constant mode at $\lambda=0$. The positive modes give the sum

$$
\sum_{n=1}^\infty a_n\cos\left(\frac{n\pi x}{L}\right).
$$

The handwritten examples appear to use $\lambda x$ in the sine equation and $y(L)=0$ in the cosine boundary condition. The sine modes require $\lambda y$, and the cosine modes and the earlier zero-derivative example give $y'(L)=0$. Page 38 identifies the constant mode.

With periodic conditions on $[-L,L]$, $y(-L)=y(L)$ and $y'(-L)=y'(L)$, the modes include $1$, $\cos(n\pi x/L)$, and $\sin(n\pi x/L)$. The notes call the series a general solution. A fixed $\lambda$ selects its own eigenspace, while the full series combines modes from different eigenvalues.

#### Fourier series and periodicity

The formal expansion of a function $f$ on $[-L,L]$ is

$$
f(x)\sim\frac{a_0}{2}
+\sum_{n=1}^\infty
\left[
a_n\cos\left(\frac{n\pi x}{L}\right)
+b_n\sin\left(\frac{n\pi x}{L}\right)
\right].
$$

Here $a_0/2$ is the constant term. The next question is how to compute $a_n$ and $b_n$ from $f$.

A function is **periodic** with period $T>0$ if $f(x+T)=f(x)$ for all $x$. For example, $\sin(x+2\pi)=\sin x$ and $\cos(x+2\pi)=\cos x$.

### PDF page 43

The trigonometric modes are orthogonal and linearly independent. Since $\sin(x+2\pi)=\sin x$,

$$
\sin\left(\frac{n\pi}{L}x\right)
=\sin\left(\frac{n\pi}{L}\left(x+\frac{2L}{n}\right)\right).
$$

The fundamental period of the $n$th sine mode is $2L/n$. The next step is to determine $a_0$, $a_n$, and $b_n$.

#### Mapping a general interval to a symmetric one

A function defined on $[a,b]$ can be expressed in a coordinate $t$ on $[-L,L]$ using

$$
t=-L+\frac{x-a}{b-a}\,2L.
$$

This sends $x=a$ to $t=-L$ and $x=b$ to $t=L$.

#### Coefficients of an orthogonal expansion

Let $\{\phi_0,\phi_1,\phi_2,\ldots\}$ be nonzero orthogonal functions on $[a,b]$. If $f=\sum_{m=0}^\infty c_m\phi_m$ with convergence in the inner-product norm, then

$$
\langle f,\phi_n\rangle
=\sum_{m=0}^\infty c_m\langle\phi_m,\phi_n\rangle
=c_n\|\phi_n\|^2.
$$

Only the $m=n$ term contributes. Thus

$$
c_n=\frac{\langle f,\phi_n\rangle}{\|\phi_n\|^2}
=\frac{\int_a^b f(x)\phi_n(x)\,dx}{\|\phi_n\|^2}.
$$

### PDF page 44

#### Fourier coefficients on $[-L,L]$

The constant mode has squared norm $2L$, and each sine and cosine mode with $n\ge1$ has squared norm $L$. Applying the orthogonal coefficient formula gives

$$
\begin{aligned}
a_n&=\frac{1}{L}\int_{-L}^L f(x)\cos\left(\frac{n\pi x}{L}\right)\,dx,\quad n\ge1,\\
b_n&=\frac{1}{L}\int_{-L}^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx,\quad n\ge1,\\
\frac{a_0}{2}&=\frac{\langle f,1\rangle}{\|1\|^2}
=\frac{1}{2L}\int_{-L}^L f(x)\,dx.
\end{aligned}
$$

In particular, $a_0=L^{-1}\int_{-L}^L f(x)\,dx$. The sine integrand on the incomplete handwritten line follows from the same projection formula.

#### Example 1. Fourier series of $f(x)=x$ on $[-1,1]$

Here $L=1$. Since $x$ and $x\cos(n\pi x)$ are odd, $a_0=a_n=0$. The sine coefficient is

$$
b_n=\int_{-1}^1 x\sin(n\pi x)\,dx
=-\frac{2(-1)^n}{n\pi}.
$$

The resulting series is

$$
x=\sum_{n=1}^\infty\frac{2(-1)^{n+1}}{n\pi}\sin(n\pi x),\qquad -1<x<1.
$$

At the endpoints the periodic extension jumps from $1$ to $-1$, and the sine series takes the midpoint value $0$.

### PDF page 45

#### Lecture, October 24, 2016. Fourier series, Sections 11.2–11.3

For $f$ defined on $[-L,L]$, write the Fourier series as

$$
\frac{a_0}{2}+\sum_{n=1}^\infty
\left[
a_n\cos\left(\frac{n\pi x}{L}\right)
+b_n\sin\left(\frac{n\pi x}{L}\right)
\right].
$$

“Fourier's trick” is to multiply by the relevant mode and integrate. Orthogonality removes the other modes. This yields

$$
\begin{aligned}
a_0&=\frac1L\int_{-L}^L f(x)\,dx,\\
a_n&=\frac1L\int_{-L}^L f(x)\cos\left(\frac{n\pi x}{L}\right)\,dx,\\
b_n&=\frac1L\int_{-L}^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

For $f(x)=x$ on $[-1,1]$, $a_0=a_n=0$ and $b_n=2(-1)^{n+1}/(n\pi)$. The first two terms of the approximation are

$$
x\approx\frac{2}{\pi}\sin(\pi x)-\frac{1}{\pi}\sin(2\pi x).
$$

The handwritten denominators still show $n\pi$ beside the substituted modes. Evaluating them at $n=1,2$ gives the denominators above.

#### Pointwise convergence

The series converges at a point $x$ if the following limit exists as a finite number:

$$
\lim_{N\to\infty}
\left[
\frac{a_0}{2}
+\sum_{n=1}^{N}
\left(
a_n\cos\left(\frac{n\pi x}{L}\right)
+b_n\sin\left(\frac{n\pi x}{L}\right)
\right)
\right].
$$

### PDF page 46

#### Convergence of Fourier series

Suppose $f$ and $f'$ are piecewise continuous on $[-L,L]$, and extend $f$ periodically with period $2L$. Then its Fourier series converges at every point. At a continuity point it converges to $f(x)$. At a discontinuity it converges to the average of the one-sided limits,

$$
\frac{f(x^+)+f(x^-)}{2},
\qquad
f(x^+)=\lim_{h\to0^+}f(x+h),\qquad
f(x^-)=\lim_{h\to0^+}f(x-h).
$$

At an endpoint of $[-L,L]$, use the limits of the periodic extension. The notes mention the Gibbs phenomenon beside the sketch. The midpoint formula describes the limiting value at a jump, and Gibbs oscillations concern the partial sums near it.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Fourier midpoint.png|**Fig. 2** The marked midpoint averages the left- and right-hand limits at a jump.]]

#### Piecewise continuity

A continuous function is piecewise continuous. A piecewise continuous function can have jumps between its continuous pieces. The notes give a step function as an example.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Piecewise continuous function.png|**Fig. 3** A piecewise continuous function on $[a,b]$ with breakpoints $x_1$, $x_2$, and $x_3$.]]

### PDF page 47

#### Fourier series of a step function

On one period let $f(x)=0$ for $-\pi\le x<0$ and $f(x)=1$ for $0<x\le\pi$. The left and right limits at zero are $0$ and $1$, respectively. The Fourier series converges to $1/2$ at zero, and to the given function at continuity points. For the periodic extension, the same midpoint rule applies at every integer multiple of $\pi$.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Periodic step function.png|**Fig. 4** The step rises from zero to one at the origin, where its Fourier series takes the value $1/2$.]]

Here $L=\pi$. The coefficients are

$$
a_0=\frac1\pi\int_0^\pi1\,dx=1,\qquad
a_n=\frac1\pi\int_0^\pi\cos(nx)\,dx=0,\qquad
b_n=\frac{1-\cos(n\pi)}{n\pi}.
$$

Thus $b_n=0$ for even $n$ and $b_n=2/(n\pi)$ for odd $n$. The sum is

$$
\frac12+\sum_{n=1}^\infty\frac{1+(-1)^{n+1}}{n\pi}\sin(nx).
$$

At $x=0$, all sine terms vanish.

#### Example 3. Piecewise constant and linear function

Find the Fourier series of

$$
f(x)=\begin{cases}
1,&-1<x<0,\\
x,&0\le x<1.
\end{cases}
$$

The coefficients to verify are

$$
a_0=\frac32,\qquad a_n=\frac{(-1)^n-1}{(n\pi)^2},\qquad b_n=-\frac{1}{n\pi}.
$$

#### Even and odd functions

For an even function $f$, the integral satisfies $\int_{-L}^L f(x)\,dx=2\int_0^L f(x)\,dx$. This symmetry simplifies the coefficients in Fourier cosine and sine series.

### PDF page 48

An even function satisfies $f(-x)=f(x)$. An odd function satisfies $f(-x)=-f(x)$ and integrates to zero on $[-L,L]$. A separate note in the margin records the Hermitian matrix condition $A=A^\dagger=\overline{A}^{\mathsf T}$.

#### Lecture, October 26, 2016. Fourier series and parity

For even $f$ on $[-L,L]$, every $b_n=0$, leaving a cosine series with a possible constant term. For odd $f$, every $a_n=0$, including $a_0$, leaving a sine series.

In Example 1, $f(x)=|x|$ on $[-\pi,\pi]$. The V-shaped graph is symmetric about the vertical axis, so use a cosine series. Its constant coefficient is

$$
a_0=\frac1\pi\int_{-\pi}^{\pi}|x|\,dx
=\frac2\pi\int_0^\pi x\,dx
=\pi.
$$

For $n\ge1$, parity and integration by parts give

$$
a_n=\frac1\pi\int_{-\pi}^{\pi}|x|\cos(nx)\,dx
=\frac2\pi\int_0^\pi x\cos(nx)\,dx
=\frac{2}{n^2\pi}\bigl((-1)^n-1\bigr).
$$

Therefore

$$
|x|=\frac{\pi}{2}
+\sum_{n=1}^\infty \frac{2\bigl((-1)^n-1\bigr)}{n^2\pi}\cos(nx),
\qquad -\pi\le x\le\pi.
$$

The final handwritten sum appears to drop the square on $n$. The coefficient derived directly above it has $n^2\pi$ in the denominator.

### PDF page 49

#### Example 2. An even piecewise linear function

Let

$$
f(x)=\begin{cases}
x+5,&-2<x<0,\\
-x+5,&0\le x\le2.
\end{cases}
$$

Replacing $x$ by $-x$ interchanges the two expressions on the interior of the interval, so $f(-x)=f(x)$. Equivalently, $f(x)=5-|x|$. Its Fourier series therefore uses cosine modes.

#### Lecture, October 31, 2016. Section 11.4 on Sturm–Liouville problems

The earlier problems for $y''+\lambda y=0$, with either both values or both derivatives zero, are special cases of the equation in self-adjoint form

$$
\bigl(p(x)y'\bigr)'+\bigl(q(x)+\lambda r(x)\bigr)y=0.
$$

Here $\lambda$ is the eigenvalue parameter. Separated homogeneous boundary conditions at $a$ and $b$ have the form

$$
\alpha_1y(a)+\beta_1y'(a)=0,\qquad
\alpha_2y(b)+\beta_2y'(b)=0.
$$

Expanding the derivative identifies $a_2=p$, $a_1=p'$, and $a_0=q+\lambda r$ in the second-order form $a_2y''+a_1y'+a_0y=0$.

On a finite interval $[a,b]$, the regular problem has continuous $p,q,r$ and strictly positive $p,r$ throughout the interval. Failure of the regularity conditions can give a **singular Sturm–Liouville problem**.

For $y''+\lambda y=0$ on $[0,L]$, the coefficients are $p=1$, $p'=0$, $q=0$, and $r=1$. This is regular with either $y(0)=y(L)=0$ or $y'(0)=y'(L)=0$.

#### Example 2. Legendre's equation

$$
(1-x^2)y''-2xy'+n(n+1)y=0.
$$

The margin connects this equation to the Schrödinger equation for hydrogen in spherical coordinates.

### PDF page 50

#### Legendre's equation in self-adjoint form

With $p(x)=1-x^2$, the product rule gives

$$
(p(x)y')'=p'(x)y'+p(x)y''=-2xy'+(1-x^2)y''.
$$

Thus Legendre's equation is already in self-adjoint form:

$$
\bigl[(1-x^2)y'\bigr]'+n(n+1)y=0.
$$

The coefficients are $p(x)=1-x^2$, $q(x)=0$, and $r(x)=1$, with $\lambda=n(n+1)$.

#### Example 3. Bessel's equation

The notes associate the Bessel equation with wave propagation. For fixed $n$ and $\alpha>0$, the equation is

$$
x^2y''+xy'+(\alpha^2x^2-n^2)y=0,\qquad x\ge0.
$$

The leading terms are $x(xy''+y')=x(xy')'$. For $x>0$, divide by $x$ to obtain the self-adjoint form

$$
(xy')'+\left(-\frac{n^2}{x}+\alpha^2x\right)y=0.
$$

Hence $p(x)=x$, $q(x)=-n^2/x$, $r(x)=x$, and $\lambda=\alpha^2$.

### PDF page 51

#### Putting an equation in self-adjoint form

Consider

$$
a(x)y''+b(x)y'+[c(x)+\lambda d(x)]y=0.
$$

If $a'=b$, then $ay''+by'=(ay')'$, and the equation is already in the required form with $p=a$.

If $a'\ne b$, first divide by $a$ on an interval where it is nonzero:

$$
y''+\frac ba y'+\left(\frac ca+\lambda\frac da\right)y=0.
$$

Recall that for $y'+P(t)y=f(t)$ the integrating factor is $I=e^{\int P(t)\,dt}$. Here multiply the normalized second-order equation by $p=e^{\int(b/a)\,dx}$. Since $p'=(b/a)p$, the derivative terms combine as $py''+p'y'=(py')'$. The resulting coefficients are

$$
p(x)=\exp\left(\int\frac{b(x)}{a(x)}\,dx\right)>0,\qquad
q(x)=\frac{c(x)}{a(x)}p(x),\qquad
r(x)=\frac{d(x)}{a(x)}p(x).
$$

Check the construction on the Bessel example, for which $a=x^2$ and $b=x$.

#### Eigenvalues of a regular problem

For a regular Sturm–Liouville problem with separated boundary conditions, the eigenvalues form a strictly increasing sequence of real numbers $\lambda_1<\lambda_2<\lambda_3<\cdots$.

### PDF page 52

#### Further properties of regular Sturm–Liouville problems

For the regular problem with separated boundary conditions, the list continues:

2. Each eigenvalue $\lambda_i$ has one eigenfunction up to a nonzero constant factor.
3. Eigenfunctions associated with distinct eigenvalues are linearly independent.
4. They are orthogonal with respect to the weight $r(x)$. For $\lambda_i\ne\lambda_j$,

   $$
   \int_a^b r(x)y_{\lambda_i}(x)y_{\lambda_j}(x)\,dx=0.
   $$

#### Example 4. A Cauchy–Euler boundary-value problem

Consider

$$
x^2y''+xy'+\lambda y=0,\qquad 1<x<e^\pi,\qquad
y(1)=y(e^\pi)=0.
$$

First put the equation in self-adjoint form and show that the problem is regular. Then find the eigenvalues and corresponding nonzero eigenfunctions.

#### Lecture, November 2, 2016. The Sturm–Liouville operator

One can write the original differential equation as $L_\lambda y=0$ with

$$
L_\lambda=a(x)\frac{d^2}{dx^2}+b(x)\frac{d}{dx}+[c(x)+\lambda d(x)],
$$

together with its boundary conditions. After transforming to the self-adjoint form, define a new operator that separates the eigenvalue parameter:

$$
L_{\mathrm{new}}y=\frac{d}{dx}\left(p(x)\frac{dy}{dx}\right)+q(x)y.
$$

The equation is then $L_{\mathrm{new}}y=-\lambda r(x)y$.

### PDF page 53

The conversion formulas, referenced to page 444 of the textbook in the handwritten notes, are

$$
p(x)=\exp\left(\int\frac{b(x)}{a(x)}\,dx\right),\qquad
q(x)=\frac{c(x)}{a(x)}p(x),\qquad
r(x)=\frac{d(x)}{a(x)}p(x).
$$

#### Regular Sturm–Liouville problems

For continuous $p,q,r$ on $[a,b]$ with $p,r>0$ and the separated homogeneous boundary conditions, the eigenvalues obey

$$
\lambda_1<\lambda_2<\cdots,\qquad \lim_{n\to\infty}\lambda_n=+\infty.
$$

Each $\lambda_i$ has a nonzero eigenfunction $y_{\lambda_i}$. The family is linearly independent and orthogonal for the inner product

$$
\langle f,g\rangle_r=\int_a^b r(x)f(x)g(x)\,dx.
$$

#### Example 4 continued

For $x^2y''+xy'+\lambda y=0$, $a=x^2$, $b=x$, $c=0$, and $d=1$. Thus on $[1,e^\pi]$,

$$
p(x)=e^{\ln x}=x,\qquad q(x)=0,\qquad
r(x)=\frac{x}{x^2}=\frac1x.
$$

These coefficients are continuous and $p,r$ are positive, so the problem is regular. To obtain eigenfunctions, make the change $x=e^t$. With $Y(t)=y(e^t)$, the transformed equation is $Y''+\lambda Y=0$.

### PDF page 54

#### Chain rule for the Cauchy–Euler substitution

Let $x=e^t$, so $t=\ln x$ and $dt/dx=1/x=e^{-t}$. Write $Y(t)=y(e^t)$ to distinguish the derivatives with respect to $x$ and $t$. Then

$$
y'(x)=\frac{dY}{dt}\frac{dt}{dx}
=\frac{Y'(t)}{e^t}.
$$

Apply the chain rule again:

$$
y''(x)=\frac{d}{dt}\left(\frac{Y'(t)}{e^t}\right)\frac{1}{e^t}
=e^{-2t}\bigl(Y''(t)-Y'(t)\bigr).
$$

The final derivative is crossed out in the source, but it follows from the preceding chain-rule expression. Thus $x^2y''+xy'=Y''-Y'+Y'=Y''$, giving the constant-coefficient equation $Y''+\lambda Y=0$.

### PDF page 55

#### Lecture, November 7, 2016. Midterm 2 review

Chapter 11 topics include eigenvalues and eigenfunctions of boundary-value problems, orthogonality of functions and sets of functions, Fourier series, and Sturm–Liouville problems.

#### Mixed endpoint conditions

Find eigenvalues of $y''+\lambda y=0$ with $y(0)=0$ and $y'(\pi)=0$. For $\lambda=\alpha^2>0$, write

$$
y=C_1\cos(\alpha x)+C_2\sin(\alpha x).
$$

The first condition gives $C_1=0$, and the second requires $C_2\alpha\cos(\alpha\pi)=0$. A nonzero solution has $\alpha\pi=\pi/2+n\pi$, so

$$
\lambda_n=\left(\frac{2n+1}{2}\right)^2,\qquad
y_{\lambda_n}(x)=C_2\sin\left(\frac{2n+1}{2}x\right),
\qquad n=0,1,2,\ldots,\quad C_2\ne0.
$$

The review works out the positive case. For $\lambda=0$ the endpoint conditions force both coefficients of a linear function to vanish. For $\lambda=-\alpha^2<0$, $y(0)=0$ leaves a multiple of $\sinh(\alpha x)$, whose derivative can vanish at $\pi$ only if the multiple is zero.

For $y''+100y=0$ with the same boundary conditions, the eigenvalue condition would require $(2n+1)/2=10$, or $n=19/2$. Since this is outside the integer index set, only the zero solution satisfies the problem.

### PDF page 56

#### Review problem 2. Orthogonality and norms

Let $S=\{1,\cos(2015x),\sin(2015x)\}$ on $[-\pi,\pi]$. To show orthogonality, evaluate the pairwise inner products. For example,

$$
\langle 1,\cos(2015x)\rangle
=2\int_0^\pi\cos(2015x)\,dx
=2\left[\frac{\sin(2015x)}{2015}\right]_0^\pi=0.
$$

The other two products are odd and integrate to zero over the symmetric interval.

The norm on $[a,b]$ is $\|f\|_{[a,b]}=\sqrt{\int_a^b f(x)^2\,dx}$. For real functions,

$$
\langle f+g,f+g\rangle
=\langle f,f\rangle+2\langle f,g\rangle+\langle g,g\rangle.
$$

Taking $f(x)=\sin(2015x)$ and $g(x)=\cos(2015x)$ removes the cross term by orthogonality. The cross term in the handwritten expansion abbreviates the cosine argument, which is $2015x$ in the original sum.

#### Review problem 3. Fourier series of an even function

Let

$$
f(x)=\begin{cases}
x+6,&-2<x<0,\\
-x+6,&0\le x<2.
\end{cases}
$$

The function is even and $L=2$. Its Fourier series starts with $a_0/2$, followed by the positive-frequency modes $a_n\cos(n\pi x/L)+b_n\sin(n\pi x/L)$. The handwritten sum starts at $n=0$, but the constant is already written separately. By parity, all $b_n=0$.

### PDF page 57

For the even function $f(x)=6-|x|$ on $[-2,2]$, $L=2$ and $a_0=10$. The coefficient formulas on the page are

$$
a_n=\frac1L\int_{-L}^L f(x)\cos\left(\frac{n\pi x}{L}\right)\,dx,\qquad
b_n=\frac1L\int_{-L}^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

Here $b_n=0$. For $n\ge1$, the constant part of $f$ contributes zero to $a_n$, leaving the integral

$$
a_n=-\int_0^2 x\cos\left(\frac{n\pi x}{2}\right)\,dx
=-\left[
\frac{2x}{n\pi}\sin\left(\frac{n\pi x}{2}\right)
+\left(\frac{2}{n\pi}\right)^2\cos\left(\frac{n\pi x}{2}\right)
\right]_0^2.
$$

The upper margin has a separate interval sketch marked $-L,0,L$ and a possible $L=\pi$ annotation. The interval and mode arguments in this worked example give $L=2$. The plus sign between the antiderivative terms follows by differentiation.

#### Fourier forcing of an initial-value problem

Solve $y''+4y=f(x)$ with $y(0)=y'(0)=0$ and the same piecewise forcing. Its Fourier series is $5+\sum_{n=1}^\infty a_n\cos(n\pi x/2)$. With $k_n=n\pi/2$, try

$$
\begin{aligned}
y_p(x)&=A_0+\sum_{n=1}^\infty A_n\cos(k_nx),\\
y_p'(x)&=-\sum_{n=1}^\infty k_nA_n\sin(k_nx),\\
y_p''(x)&=-\sum_{n=1}^\infty k_n^2A_n\cos(k_nx).
\end{aligned}
$$

Substitution gives

$$
y_p''+4y_p=4A_0+\sum_{n=1}^\infty(4-k_n^2)A_n\cos(k_nx).
$$

The factor $4$ applies to both the constant and the series in $4y_p$.

### PDF page 58

#### Periodic driving force

Fourier series help find a particular solution when the driving force in a physical system is periodic. For an undamped mass–spring system,

$$
\mechanical{m}\frac{d^2\mechanical{x}}{d\signal{t}^2}
+\mechanical{k}\mechanical{x}
=\mechanical{f}(\signal{t}).
$$

In the example, $\mechanical{m}=\quantity{\frac1{16}}{slug}$ and $\mechanical{k}=\quantity{4}{lbf\,ft^{-1}}$. The force increases as $\mechanical{f}(\signal{t})=(\quantity{\pi}{lbf\,s^{-1}})\signal{t}$ for $0<\signal{t}<\quantity{1}{s}$. The sketch gives its odd, periodic extension, with half-period $\signal{L}=\quantity{1}{s}$. The force therefore has a Fourier sine series.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Sawtooth driving force.png|**Fig. 5** The driving force ramps from $-\pi$ to $\pi$ and repeats every two seconds.]]

The product of the odd force and the odd sine mode is even, so

$$
b_n
=\frac{1}{\signal{L}}\int_{-\signal{L}}^{\signal{L}}
\mechanical{f}(\signal{t})\sin\left(\frac{n\pi\signal{t}}{\signal{L}}\right)\,d\signal{t}
=\frac{2}{\signal{L}}\int_0^{\signal{L}}
\mechanical{f}(\signal{t})\sin\left(\frac{n\pi\signal{t}}{\signal{L}}\right)\,d\signal{t}.
$$

Using numerical time in seconds and force in pounds-force, this reduces to $2\pi\int_0^1 t\sin(n\pi t)\,dt$. Integration by parts with $u=t$ and $dv=\sin(n\pi t)\,dt$ gives

$$
2\pi\int_0^1 t\sin(n\pi t)\,dt
=2\pi\left[-\frac{t}{n\pi}\cos(n\pi t)\right]_0^1
+\frac2n\int_0^1\cos(n\pi t)\,dt.
$$

### PDF page 59

#### Fourier coefficients of the driving force

In the integration by parts, the term $\int_0^1\cos(n\pi t)\,dt$ vanishes. The lower endpoint in $[-t\cos(n\pi t)/(n\pi)]_0^1$ also vanishes because of the factor $t$. The initial calculation on the page includes a nonzero lower-endpoint term and marks it as uncertain. The corrected calculation below it gives the force coefficient $b_n=2(-1)^{n+1}/n$ in pounds-force. Thus, using numerical time and force,

$$
f(t)=\sum_{n=1}^\infty\frac{2(-1)^{n+1}}{n}\sin(n\pi t)
$$

at continuity points.

#### Trial solution for the forced oscillator

The oscillator equation in numerical units of feet, seconds, and pounds-force is

$$
\frac1{16}x''+4x
=\sum_{n=1}^\infty\frac{2(-1)^{n+1}}{n}\sin(n\pi t).
$$

Try a particular solution with the same sine modes. Its series and the differentiated series used in the substitution are

$$
\begin{aligned}
x_p(t)&=\sum_{n=1}^\infty B_n\sin(n\pi t),\\
x_p'(t)&=\sum_{n=1}^\infty n\pi B_n\cos(n\pi t),\\
x_p''(t)&=-\sum_{n=1}^\infty(n\pi)^2B_n\sin(n\pi t).
\end{aligned}
$$

The coefficients $B_n$ are carried through differentiation.

### PDF page 60

#### Matching the oscillator's sine coefficients

Substitute the trial series into $\frac1{16}x_p''+4x_p=f(t)$, with $B_n$ inside each sum and a negative sign from the second derivative. Comparing the coefficients of $\sin(n\pi t)$ gives

$$
\left(4-\frac{n^2\pi^2}{16}\right)B_n
=\frac{2(-1)^{n+1}}n.
$$

Hence

$$
B_n=\frac{32(-1)^{n+1}}{n(64-n^2\pi^2)},\qquad
x_p(t)=\sum_{n=1}^\infty
\frac{32(-1)^{n+1}}{n(64-n^2\pi^2)}\sin(n\pi t).
$$

The denominators are nonzero for every positive integer $n$.

#### Practice midterm, problem 4b

For $y''+\frac1x y'+\frac{\lambda}{x^2}y=0$ with $y$ a function of $x$, use the substitution $x=e^t$.

#### Lecture, November 14, 2016. Chapter 7 on the Laplace transform

The notes review separation of variables, integrating factors, variation of parameters, undetermined coefficients, power series, and Fourier series. The Laplace transform provides another method for an oscillator

$$
\mechanical{m}\ddot{\mechanical{x}}+
\mechanical{b}\dot{\mechanical{x}}+
\mechanical{k}\mechanical{x}
=\mechanical{f}(\signal{t})
$$

with discontinuous forcing. The lecture emphasizes the limitations of applying the earlier methods directly across a jump.

### PDF page 61

The sketch uses a sawtooth as an example of a discontinuous input.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Discontinuous sawtooth.png|**Fig. 6** A ramp rises and resets abruptly at the end of each cycle.]]

#### How the Laplace transform solves a linear equation

Apply $\mathcal L$ to the differential equation for $y(t)$. This produces an algebraic equation for $Y(s)=\mathcal L\{y\}(s)$. Solve for $Y(s)$ and use $\mathcal L^{-1}\{Y\}$ to recover $y(t)$.

The transform of $f$ is

$$
\mathcal L\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt
$$

for values of $s$ for which the integral converges. The notes begin by considering real $s>0$.

#### Analogy with a generating function

The power series $A(x)=\sum_{n=0}^\infty a(n)x^n$ associates a function with a sequence $a(n)$. For $a(n)=1/n!$ this gives $e^x$. For $a(n)=1$ it gives $1/(1-x)$ on $|x|<1$.

A continuous analogue replaces the discrete index $n$ by $t$ and the sum by the integral $\int_0^\infty a(t)x^t\,dt$. The margin recalls the same passage from a sum to an integral in a Riemann sum, $\int_a^b f(x)\,dx=\lim_{N\to\infty}\sum_{j=1}^{N} f(x_j^*)\,\Delta x$.

### PDF page 62

For the continuous analogue $A(x)=\int_0^\infty a(t)x^t\,dt$, choose $0<x<1$. Then $\ln x<0$. Set $s=-\ln x>0$ and use $x^t=e^{t\ln x}=e^{-st}$ to obtain

$$
A(e^{-s})=\int_0^\infty a(t)e^{-st}\,dt.
$$

The decaying kernel is useful for convergence, which also depends on the growth of $a(t)$. Renaming $a(t)$ as $f(t)$ gives the Laplace transform.

The transform maps a function of $t$ to a function $F(s)$ of the transform variable. Ordinary differentiation produces $f'(t)$ or $f''(t)$, which are still functions of $t$.

#### Linearity and the transform of the constant function

Where the integrals converge, additivity follows from

$$
\mathcal L\{f+g\}(s)
=\int_0^\infty (f(t)+g(t))e^{-st}\,dt
=\mathcal L\{f\}(s)+\mathcal L\{g\}(s).
$$

Constants can also be pulled outside the integral, so $\mathcal L$ is linear. For $s>0$,

$$
\mathcal L\{1\}(s)=\int_0^\infty e^{-st}\,dt
=\left[-\frac{1}{s}e^{-st}\right]_0^\infty
=-\frac1s(0-1)=\frac1s.
$$

### PDF page 63

By linearity, a constant $c$ has transform $\mathcal L\{c\}(s)=c/s$ for $s>0$.

#### Example 2. Powers of $t$

For $f(t)=t$, integrate by parts with $u=t$ and $dv=e^{-st}\,dt$:

$$
\begin{aligned}
\mathcal L\{t\}(s)
&=\int_0^\infty te^{-st}\,dt\\
&=\lim_{b\to\infty}\left[-\frac{t}{s}e^{-st}-\frac{1}{s^2}e^{-st}\right]_0^b
=\frac{1}{s^2}.
\end{aligned}
$$

For $s>0$, both $e^{-sb}$ and $be^{-sb}$ vanish as $b\to\infty$. More generally, for integers $n\ge1$, integration by parts gives

$$
\mathcal L\{t^n\}(s)
=\frac{n}{s}\mathcal L\{t^{n-1}\}(s)
=\frac{n(n-1)}{s^2}\mathcal L\{t^{n-2}\}(s)\quad(n\ge2).
$$

Continuing to $\mathcal L\{1\}$ gives $\mathcal L\{t^n\}(s)=n!/s^{n+1}$ for all integers $n\ge0$. A polynomial $a_0+a_1t+\cdots+a_nt^n$ can therefore be transformed term by term.

#### Conditions for existence

A sufficient condition is that $f$ be piecewise continuous on each finite interval $[0,B]$ and of exponential order: $|f(t)|\le M e^{\alpha t}$ for all $t>T>0$ and some $M,\alpha$. Then the Laplace integral converges absolutely for real $s>\alpha$. The notes state the conditions using $(0,\infty)$, with the usual finite-interval interpretation at the lower limit.

### PDF page 64

The upper sketch marks the positive-time side of a function as sufficient for the one-sided Laplace transform. The integral uses $t\ge0$.

#### Lecture, November 16, 2016. Existence and basic transforms

The analogy is $\sum_{n=0}^\infty f(n)x^n$ for a sequence and $\int_0^\infty f(t)e^{-st}\,dt$ for a function of a continuous variable, using $x=e^{-s}$.

The notes recall two sufficient conditions for the Laplace transform to exist for all sufficiently large real $s$:

1. The function $f$ is continuous or piecewise continuous on every finite interval in $[0,\infty)$.
2. There are constants $M,c,T$ with $M>0$, $T>0$, such that $|f(t)|\le Me^{ct}$ for all $t>T$.

The bound gives convergence for $s>c$. The $s>0$ notation on the page applies to the power examples, for which $\mathcal L\{t^n\}=n!/s^{n+1}$.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Exponential order.png|**Fig. 7** A function that grows more slowly than an exponential after some time can satisfy the exponential-order bound.]]

For a constant $a$ and $s\ne a$, start the exponential example with

$$
\mathcal L\{e^{at}\}(s)
=\int_0^\infty e^{(a-s)t}\,dt
=\lim_{B\to\infty}\frac{e^{(a-s)B}-1}{a-s}.
$$

### PDF page 65

For real $s>a$, the exponential term at the upper limit vanishes, giving $\mathcal L\{e^{at}\}(s)=1/(s-a)$. In contrast, $f(t)=1/t^2$ has a divergent Laplace integral at $t=0$.

#### Transforms of cosine and sine

Euler's identity $e^{i\theta}=\cos\theta+i\sin\theta$ gives $\cos(at)=(e^{iat}+e^{-iat})/2$. For real $a$ and $s>0$,

$$
\mathcal L\{\cos(at)\}(s)
=\frac12\left(\frac{1}{s-ia}+\frac{1}{s+ia}\right)
=\frac{s}{s^2+a^2}.
$$

The sine transform is $\mathcal L\{\sin(at)\}(s)=a/(s^2+a^2)$.

#### Example 5. A function that jumps at $t=1$

For $f(t)=1$ on $0\le t<1$ and $f(t)=2$ on $t\ge1$, split the transform integral at the jump. For $s>0$,

$$
\begin{aligned}
\mathcal L\{f\}(s)
&=\int_0^1 e^{-st}\,dt+\int_1^\infty 2e^{-st}\,dt\\
&=\frac{1-e^{-s}}{s}+\frac{2e^{-s}}s
=\frac{1+e^{-s}}s.
\end{aligned}
$$

#### Shift in the transform variable

Suppose $\mathcal L\{f\}(s)=F(s)$. Wherever the integral on the right converges,

$$
\mathcal L\{e^{at}f(t)\}(s)
=\int_0^\infty e^{-st}e^{at}f(t)\,dt
=\int_0^\infty e^{-(s-a)t}f(t)\,dt
=F(s-a).
$$

### PDF page 66

The shift formula gives $\mathcal L\{e^{at}t^2\}(s)=2!/(s-a)^3$. To start solving an equation such as $y''+2y'=\cos t$, apply the transform to both sides, giving $\mathcal L\{y''+2y'\}=\mathcal L\{\cos t\}$.

#### Inverse Laplace transform

Given $F(s)$, find a function $f(t)$ satisfying

$$
\mathcal L\{f\}(s)=\int_0^\infty f(t)e^{-st}\,dt=F(s).
$$

Write this function as $f(t)=\mathcal L^{-1}\{F(s)\}(t)$. The basic transform pairs give

$$
\mathcal L^{-1}\left\{\frac{c}{s}\right\}=c,\qquad
\mathcal L^{-1}\left\{\frac{n!}{s^{n+1}}\right\}=t^n.
$$

For example, $10/s^3=5\cdot2!/s^{2+1}$, so $\mathcal L^{-1}\{10/s^3\}=5t^2$. Also, $s+10=s-(-10)$, giving

$$
\mathcal L^{-1}\left\{\frac1{s+10}\right\}=e^{-10t}.
$$

Since $3=(\sqrt3)^2$, the cosine pair gives

$$
\mathcal L^{-1}\left\{\frac{s}{s^2+3}\right\}=\cos(\sqrt3\,t).
$$

### PDF page 67

#### Lecture, November 21, 2016. Applying Laplace transforms to first-order equations

Consider $ay'+by=f(t)$ with $y(0)=y_0$, where $a,b$ are real constants and $a\ne0$. Set $Y(s)=\mathcal L\{y\}(s)$ and $F(s)=\mathcal L\{f\}(s)$. Applying the transform gives $a\mathcal L\{y'\}+bY=F$.

To transform the derivative, integrate by parts with $u=e^{-st}$ and $dv=y'(t)\,dt$. Then $du=-se^{-st}\,dt$ and $v=y(t)$, so

$$
\mathcal L\{y'\}(s)
=\left[e^{-st}y(t)\right]_0^\infty
+s\int_0^\infty e^{-st}y(t)\,dt.
$$

For $s$ large enough that $e^{-st}y(t)\to0$ at infinity, the boundary term is $-y_0$. Therefore

$$
\mathcal L\{y'\}(s)=sY(s)-y_0.
$$

Substitution gives $(as+b)Y(s)-ay_0=F(s)$, hence

$$
Y(s)=\frac{F(s)+ay_0}{as+b}.
$$

### PDF page 68

#### Example 2. A first-order initial-value problem

To recover $y(t)$ from $Y(s)$, apply the inverse transform. For $y'+6y=e^{4t}$, $y(0)=2$, the transformed equation is

$$
-2+sY(s)+6Y(s)=\frac1{s-4},\qquad s>4.
$$

Solving gives

$$
Y(s)=\frac{2s-7}{(s-4)(s+6)}
=\frac{A}{s-4}+\frac{B}{s+6}.
$$

The middle fraction on the page appears to have $s-6$ in one denominator. Both the transformed equation and the boxed result use $s+6$. Matching the numerator gives $A+B=2$ and $6A-4B=-7$. Substituting $A=2-B$ gives $-10B=-19$, hence $B=19/10$ and $A=1/10$. Inverting term by term yields

$$
y(t)=\frac1{10}e^{4t}+\frac{19}{10}e^{-6t}.
$$

#### Second-order initial-value problems

For $ay''+by'+cy=f(t)$ with $y(0)=y_0$ and $y'(0)=v_0$, transforming gives

$$
a\mathcal L\{y''\}+b\bigl(sY(s)-y_0\bigr)+cY(s)=F(s).
$$

The remaining ingredient is the transform of $y''$.

### PDF page 69

#### Laplace transform of higher derivatives

Integrating by parts with $u=e^{-st}$ and $dv=y''(t)\,dt$ gives

$$
\mathcal L\{y''\}
=\left[e^{-st}y'(t)\right]_0^\infty+s\mathcal L\{y'\}
=-v_0+s(sY-y_0)
=s^2Y-sy_0-v_0.
$$

Thus the equation $ay''+by'+cy=f(t)$ with the given initial data yields

$$
(as^2+bs+c)Y=F+(as+b)y_0+av_0,\qquad
Y(s)=\frac{F(s)+(as+b)y_0+av_0}{as^2+bs+c}.
$$

In the same way, $\mathcal L\{y'''\}=s\mathcal L\{y''\}-y''(0)$. Iterating gives

$$
\mathcal L\{y^{(n)}\}(s)
=s^nY(s)-\sum_{j=0}^{n-1}s^{n-1-j}y^{(j)}(0).
$$

#### Example 2. Polynomial forcing

Solve $y''-y'=2t$, $y(0)=1$, $y'(0)=-2$. The transformed solution simplifies as follows:

$$
Y(s)
=\frac{2/s^2+(s-1)-2}{s^2-s}
=\frac{s^3-3s^2+2}{s^2(s^2-s)}
=\frac{s^2-2s-2}{s^3}
=\frac1s-\frac2{s^2}-\frac2{s^3}.
$$

Inverting gives $y(t)=1-2t-t^2$.

### PDF page 70

#### Lecture, November 28, 2016. Introduction to partial differential equations

The lecture begins by reviewing the Laplace method for ordinary differential equations. Transform the differential equation to obtain an algebraic equation for $Y(s)=\int_0^\infty y(t)e^{-st}\,dt$, solve for $Y(s)$, and invert it to recover $y(t)$.

#### Example 3. A second-order initial-value problem

Solve $y''-2y'+5y=8e^t$ with $y(0)=1$ and $y'(0)=2$. Linearity and the exponential pair give

$$
\mathcal L\{y''\}-2\mathcal L\{y'\}+5Y(s)=\frac8{s-1},\qquad s>1.
$$

Recall

$$
\begin{aligned}
\mathcal L\{y'\}&=sY-y(0),\\
\mathcal L\{y''\}&=s^2Y-sy(0)-y'(0),\\
\mathcal L\{y^{(n)}\}
&=s^nY-s^{n-1}y(0)-s^{n-2}y'(0)-\cdots-y^{(n-1)}(0).
\end{aligned}
$$

Substitute the first and second derivative formulas and collect the terms in $Y$:

$$
(s^2-2s+5)Y(s)=s y(0)+y'(0)-2y(0)+\frac8{s-1}.
$$

### PDF page 71

With $y(0)=1$ and $y'(0)=2$, the constant terms $+2$ and $-2$ cancel, leaving

$$
(s^2-2s+5)Y(s)=s+\frac8{s-1},\qquad
Y(s)=\frac{s^2-s+8}{(s-1)(s^2-2s+5)}.
$$

For the inverse transform, decompose this expression as

$$
Y(s)=\frac{A}{s-1}+\frac{Bs+C}{s^2-2s+5}.
$$

After multiplying by the common denominator, evaluate the polynomial identity at $s=1$ to get $8=4A$, so $A=2$. At $s=0$, the rational identity gives $-8/5=-2+C/5$, so $C=2$. The numerator $8$ at $s=0$ follows from the displayed substitution above the abbreviated arithmetic. At $s=2$, the identity gives $2=2+(2B+2)/5$, so $B=-1$. Thus

$$
Y(s)=\frac{2}{s-1}+\frac{-s+2}{s^2-2s+5}.
$$

The inverse of the first term is $2e^t$. The second term remains to be inverted.

### PDF page 72

#### Inverting the shifted quadratic

For $s>a$ and real $a,b$,

$$
\mathcal L\{e^{at}\sin(bt)\}(s)=\frac{b}{(s-a)^2+b^2},\qquad
\mathcal L\{e^{at}\cos(bt)\}(s)=\frac{s-a}{(s-a)^2+b^2}.
$$

Complete the square in the remaining term of Example 3:

$$
\frac{-s+2}{s^2-2s+5}
=-\frac{s-1}{(s-1)^2+2^2}+\frac1{(s-1)^2+2^2}.
$$

The resulting solution is

$$
y(t)=2e^t-e^t\cos(2t)+\frac12e^t\sin(2t).
$$

The minus sign in $(s-1)^2$ comes from the original quadratic, despite a plus sign in one intermediate line. The boxed handwritten solution omits the factor $1/2$ on the sine term. It is needed because the sine transform has numerator $2$, and it gives the required $y'(0)=2$.

#### Shifting the starting time to zero

If the initial conditions are given at $t=6$, set $\xi=t-6$ and $u(\xi)=y(\xi+6)$. Then $t=\xi+6$, $dt=d\xi$, and differentiation with respect to $\xi$ gives the same derivatives evaluated at $t=\xi+6$.

The notes use a shifted forcing $8e^{t-6}$, which becomes $8e^\xi$. Thus the corresponding problem

$$
y''-2y'+5y=8e^{t-6},\qquad y(6)=1,\qquad y'(6)=2
$$

becomes $u''-2u'+5u=8e^\xi$ with $u(0)=1$ and $u'(0)=2$. The boxed line appears to show $u(0)=0$, while the stated starting value is $y(6)=1$. With the stated data, the shifted problem is exactly Example 3 in the new variable.

### PDF page 73

#### Example 5. Changing the forcing at one point

Consider $y''+4y=f(t)$ with

$$
f(t)=\begin{cases}
1,&0<t<1,\\
-1,&t=1,\\
1,&t>1.
\end{cases}
$$

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Forcing with one exceptional value.png|**Fig. 8** The forcing is one except for the value $-1$ at $t=1$.]]

For $s>0$, a change at the single point $t=1$ does not affect the integral:

$$
\mathcal L\{f\}(s)=\int_0^1 e^{-st}\,dt+\int_1^\infty e^{-st}\,dt=\frac1s.
$$

The notes use this to explain why the inverse transform determines the function only up to values at isolated points in this example. Both the constant $1$ and the piecewise $f$ give $1/s$.

The calculation takes $y(0)=y'(0)=0$, as shown by the disappearance of the initial terms. Then

$$
(s^2+4)Y(s)=\frac1s,\qquad
Y(s)=\frac1{s(s^2+4)}=\frac1{4s}-\frac{s}{4(s^2+4)}.
$$

The inverse is $y(t)=\frac14-\frac14\cos(2t)$. It satisfies the equation on each open interval on either side of $t=1$. The Laplace calculation treats the forcing up to its value at the exceptional point.

#### Lecture, November 30, 2016. Introduction to PDEs

An ordinary differential equation such as $y''(t)+2y(t)=e^t$ uses a function of one independent variable. A partial differential equation uses a function of several independent variables. For example, the one-dimensional heat equation for the temperature $\thermal{y}(\mechanical{x},\signal{t})$ is

$$
\frac{\partial\thermal{y}}{\partial\signal{t}}
=\thermal{k}\frac{\partial^2\thermal{y}}{\partial\mechanical{x}^2}.
$$

### PDF page 74

#### Partial differential equations and notation

A PDE is a relation involving partial derivatives of an unknown function $u$. In applications, $u$ can depend on spatial variables $x,y,z$ and a time variable $t$. The derivative notation on this page is

$$
\begin{aligned}
u_x&=\frac{\partial u}{\partial x},\\
u_{xx}&=\frac{\partial}{\partial x}\left(\frac{\partial u}{\partial x}\right)
=\frac{\partial^2u}{\partial x^2},\\
u_{xt}&=\frac{\partial}{\partial t}\left(\frac{\partial u}{\partial x}\right)
=\frac{\partial^2u}{\partial t\,\partial x}.
\end{aligned}
$$

The mixed partials $u_{xy}=\partial_y(\partial_xu)$ and $u_{yx}=\partial_x(\partial_yu)$ can differ without a regularity hypothesis. They agree if $u$ has continuous second partial derivatives in a neighborhood.

#### Linear second-order equations in two variables

For $u=u(x,y)$, the general form given is

$$
A u_{xx}+B u_{xy}+C u_{yy}+D u_x+E u_y+F u=G. \tag{I}
$$

The coefficients and forcing can be constant or depend on the independent variables $x,y$. The note in the margin is read as ruling out dependence on the unknown $u$, since $y$ itself is an independent variable here.

### PDF page 75

#### Classification of linear second-order PDEs

Laplace's equation is $u_{xx}+u_{yy}=0$. Its coefficients in (I) are $A=C=1$ and $B=D=E=F=G=0$. The first subscript in the handwritten equation looks like $xy$, but the stated coefficients and the name of the equation give $xx$. A second example is $u_{xx}+4u_{xy}+4u_{yy}+u=1$.

Where the second-order part is nonzero, use the discriminant $B^2-4AC$:

| Sign | Type |
| --- | --- |
| $B^2-4AC>0$ | Hyperbolic |
| $B^2-4AC=0$ | Parabolic |
| $B^2-4AC<0$ | Elliptic |

The names parallel the classification of nondegenerate conics $ax^2+bxy+cy^2+dx+ey+f=0$. With the mixed coefficient written as $b$, the determinant of the quadratic part is $ac-b^2/4$. The notes use $ac-b^2$, which corresponds to a mixed term written as $2bxy$. In both examples below the mixed coefficient is zero.

For the hyperbola $x^2-y^2=1$, $a=1$, $b=0$, $c=-1$, so the determinant is negative.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Hyperbola.png|**Fig. 9** The two branches of $x^2-y^2=1$ meet the horizontal axis at $x=-1$ and $x=1$.]]

For the ellipse $x^2/4+y^2=1$, the determinant is $(1/4)\cdot1=1/4>0$.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Ellipse.png|**Fig. 10** The ellipse has horizontal semiaxis $2$ and vertical semiaxis $1$.]]

### PDF page 76

#### The wave equation and separation of variables

The wave equation is

$$
\frac{\partial^2\mechanical{u}}{\partial\signal{t}^2}
=\mechanical{c}^2\frac{\partial^2\mechanical{u}}{\partial\mechanical{x}^2},
\qquad \mechanical{u}=\mechanical{u}(\mechanical{x},\signal{t}).
$$

Writing the second-order part with coefficients $A=\mechanical{c}^2$, $B=0$, and $C=-1$ gives $B^2-4AC=4\mechanical{c}^2>0$ for nonzero wave speed. The wave equation is hyperbolic. The heat equation is parabolic.

The method of **separation of variables** seeks a product $u(x,y)=X(x)Y(y)$ for equation (I). The goal is to determine the two single-variable functions. The first exercise is to try this approach on $u_x=u_y$.

#### PatrickJMT review. Uniqueness of the inverse transform

If $f$ and $g$ are continuous and their Laplace transforms exist and agree for all $s>a$, then $f(t)=g(t)$ for all $t>0$. This is the continuous-function case of uniqueness.

For $F(s)=\frac1{s-3}-\frac{16}{s^2+9}$, use linearity and rewrite $16/(s^2+9)$ as $(16/3)\cdot3/(s^2+9)$. This gives

$$
\mathcal L^{-1}\{F\}(t)=e^{3t}-\frac{16}{3}\sin(3t).
$$

### PDF page 77

#### Laplace-transform practice. Example 1

Solve $y''-2y'+y=3e^t$ with $y(0)=y'(0)=1$. Set $Y(s)=\mathcal L\{y\}(s)$. The formulas used are

$$
\mathcal L\{y'\}=sY-y(0),\qquad
\mathcal L\{y''\}=s^2Y-sy(0)-y'(0),\qquad
\mathcal L\{e^{at}\}=\frac1{s-a}\quad(s>a).
$$

Apply the transform and insert the initial values:

$$
\begin{aligned}
(s^2Y-s-1)-2(sY-1)+Y&=\frac3{s-1},\\
(s^2-2s+1)Y&=\frac3{s-1}+s-1
=\frac{s^2-2s+4}{s-1}.
\end{aligned}
$$

Therefore

$$
Y(s)=\frac{s^2-2s+4}{(s^2-2s+1)(s-1)}.
$$

### PDF page 78

#### Lecture, December 5, 2016. Separating $u_x=u_y$

Set $u(x,y)=X(x)Y(y)$, so $u_x=X'(x)Y(y)$ and $u_y=X(x)Y'(y)$. For a nonzero product, separation gives

$$
\frac{X'(x)}{X(x)}=\frac{Y'(y)}{Y(y)}=-\lambda.
$$

The two ratios depend on independent variables, so their common value is constant. Thus $X'+\lambda X=0$ and $Y'+\lambda Y=0$, with $X(x)=C_1e^{-\lambda x}$ and $Y(y)=C_2e^{-\lambda y}$. The resulting separated solution is

$$
u(x,y)=C_1C_2e^{-\lambda(x+y)}.
$$

#### Deriving the heat equation

Let $\Omega$ be a region occupied by a solid. The unknown $\thermal{u}(\mechanical{x},\mechanical{y},\mechanical{z},\signal{t})$ gives the temperature at position $(\mechanical{x},\mechanical{y},\mechanical{z})$ and time $\signal{t}$.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Solid region for heat conduction.png|**Fig. 11** The solid region $\Omega$ is shown in three spatial coordinates, with an arrow pointing into the region.]]

### PDF page 79

#### Energy balance in a thin conducting rod

Heat flows from higher temperature to lower temperature. The rate of change of thermal energy in a region equals the incoming heat rate minus the outgoing heat rate plus the rate of heat generation inside.

Take a thin circular rod of cross-sectional area $\mechanical{A}$ with insulated sides and no internal heat generation. Consider a slice from $\mechanical{x}$ to $\mechanical{x}+\Delta\mechanical{x}$. Heat crosses its two end faces by conduction.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Thin conducting rod.png|**Fig. 12** A slice in the conducting rod extends from $\mechanical{x}$ to $\mechanical{x}+\Delta\mechanical{x}$.]]

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Rod slice.png|**Fig. 13** The slice volume is $\mechanical{A}\Delta\mechanical{x}$.]]

Let $\mechanical{\rho}$ be the material density and $\thermal{c}$ its specific heat capacity. The slice has mass $\mechanical{m}=\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}$. Approximating the slice temperature by $\thermal{u}(\mechanical{x},\signal{t})$, its thermal energy relative to the chosen reference is

$$
\thermal{Q}\approx\thermal{c}\mechanical{m}\thermal{u}(\mechanical{x},\signal{t}),\qquad
\thermal{Q}_t\approx\thermal{c}\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}\,
\thermal{u}_t(\mechanical{x},\signal{t}).
$$

The sketch uses $m$ for mass per unit length, while the calculation $m=\rho A\Delta x$ uses it for the mass of the slice. The displayed balance uses the slice mass.

With conductivity $\thermal{K}$, the heat rates in the positive $\mechanical{x}$ direction across the left and right faces are $-\thermal{K}\mechanical{A}\thermal{u}_x(\mechanical{x},\signal{t})$ and $-\thermal{K}\mechanical{A}\thermal{u}_x(\mechanical{x}+\Delta\mechanical{x},\signal{t})$. Their difference gives the slice balance

$$
\thermal{c}\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}\,\thermal{u}_t
\approx \thermal{K}\mechanical{A}
\bigl[\thermal{u}_x(\mechanical{x}+\Delta\mechanical{x},\signal{t})
-\thermal{u}_x(\mechanical{x},\signal{t})\bigr].
$$

### PDF page 80

#### The one-dimensional heat equation

Divide the slice balance by $\thermal{c}\mechanical{\rho}\mechanical{A}\Delta\mechanical{x}$ to obtain the difference quotient

$$
\thermal{u}_t\approx
\frac{\thermal{K}}{\thermal{c}\mechanical{\rho}}
\frac{\thermal{u}_x(\mechanical{x}+\Delta\mechanical{x},\signal{t})
-\thermal{u}_x(\mechanical{x},\signal{t})}{\Delta\mechanical{x}}.
$$

As $\Delta\mechanical{x}\to0$, this gives the heat equation

$$
\thermal{u}_t=\frac{\thermal{K}}{\thermal{c}\mechanical{\rho}}\thermal{u}_{xx}
=\thermal{k}\thermal{u}_{xx}.
$$

For a rod of length $\mechanical{L}$, specify the initial temperature $\thermal{u}(\mechanical{x},0)=\thermal{f}(\mechanical{x})$ and the boundary conditions $\thermal{u}(0,\signal{t})=\thermal{u}(\mechanical{L},\signal{t})=0$.

#### Laplace's equation as steady heat conduction

In two dimensions, the heat equation is $\thermal{u}_t=\thermal{k}(\thermal{u}_{xx}+\thermal{u}_{yy})$. If the temperature on a plate is time independent, $\thermal{u}_t=0$. With $\thermal{k}>0$, this gives

$$
\Delta\thermal{u}=\thermal{u}_{xx}+\thermal{u}_{yy}=0.
$$

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Hot plate.png|**Fig. 14** A plate motivates the two-dimensional steady-temperature model.]]

#### Lecture, December 7, 2016. Review

1. Solve $\mathbf{x}'=A\mathbf{x}$, $\mathbf{x}(t_0)=\mathbf{x}_0$ using the matrix exponential.
2. Solve second-order linear equations by power series or Fourier series.
3. Find eigenvalues and eigenfunctions of boundary-value problems.
4. Solve differential equations using the Laplace transform.

### PDF page 81

5. Classify simple PDEs and solve them by separation of variables.

#### Practice final, problem 5. Solving the heat equation

The rod sketch has endpoints at $x=0$ and $x=L$. The specific problem, in numerical coordinates, is

$$
\begin{cases}
u_t=3u_{xx},&0<x<4,\quad t>0,\\
u(x,0)=\sin x,&0<x<4,\\
u(0,t)=u(4,t)=0,&t>0.
\end{cases}
$$

The handwritten domain includes the endpoints in the first line. The equation is imposed in the interior, with endpoint values for positive time. The initial profile has $\sin 4\ne0$, so a solution with these data cannot be continuous at the corner $(4,0)$.

For the general heat equation $\thermal{k}\thermal{u}_{xx}-\thermal{u}_t=0$ with $\thermal{k}>0$, take $\mechanical{x},\signal{t}$ as the two independent variables. The coefficients in the classification formula are $A=\thermal{k}$, $B=C=0$, and $E=-1$. Thus $B^2-4AC=0$ and the equation is parabolic.

To find separated solutions on $0<\mechanical{x}<\mechanical{L}$ with $\thermal{u}(\mechanical{x},0)=\thermal{f}(\mechanical{x})$, set $\thermal{u}(\mechanical{x},\signal{t})=X(\mechanical{x})T(\signal{t})$. Then $\thermal{u}_t=X(\mechanical{x})T'(\signal{t})$ and $\thermal{u}_{xx}=X''(\mechanical{x})T(\signal{t})$, so

$$
X(\mechanical{x})T'(\signal{t})=\thermal{k}X''(\mechanical{x})T(\signal{t}).
$$

### PDF page 82

#### Spatial eigenfunctions and time dependence

Dividing the separated equation by $\thermal{k}XT$ gives

$$
\frac{X''(\mechanical{x})}{X(\mechanical{x})}=\frac{T'(\signal{t})}{\thermal{k}T(\signal{t})}=-\lambda.
$$

The left side is independent of $\signal{t}$ and the right side independent of $\mechanical{x}$, so their common value is constant. Therefore

$$
X''+\lambda X=0,\qquad T'+\thermal{k}\lambda T=0.
$$

For a nonzero time factor, the boundary conditions $\thermal{u}(0,\signal{t})=\thermal{u}(\mechanical{L},\signal{t})=0$ require $X(0)=X(\mechanical{L})=0$. The cases $\lambda=0$ and $\lambda<0$ give only the zero spatial factor. For $\lambda=\alpha^2>0$, the solution starts as $X(\mechanical{x})=C_1\cos(\alpha \mechanical{x})+C_2\sin(\alpha \mechanical{x})$. The endpoints force $C_1=0$ and $\alpha=n\pi/\mechanical{L}$, giving

$$
\lambda_n=\left(\frac{n\pi}{\mechanical{L}}\right)^2,\qquad
X_n(\mechanical{x})=\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right),\qquad n\ge1.
$$

The time factor is a multiple of $T_n(\signal{t})=e^{-\thermal{k}(n\pi/\mechanical{L})^2\signal{t}}$. In the product on the handwritten page, the argument of $X_n$ appears as $\signal{t}$. This factor depends on $\mechanical{x}$. The separated solutions and their superposition are

$$
\thermal{u}_n(\mechanical{x},\signal{t})=e^{-\thermal{k}(n\pi/\mechanical{L})^2\signal{t}}\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right),\qquad
\thermal{u}(\mechanical{x},\signal{t})=\sum_{n=1}^\infty A_n\thermal{u}_n(\mechanical{x},\signal{t}).
$$

### PDF page 83

#### Matching the initial temperature

At $\signal{t}=0$ the exponential factors are one, so the initial data require

$$
\thermal{f}(\mechanical{x})=\sum_{n=1}^\infty A_n\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right).
$$

The sine factor is a function of $\mechanical{x}$, as in the initial-data line. Orthogonality on $[0,\mechanical{L}]$ determines $A_n$. In the numerical coordinates of the example, $L=4$ and $f(x)=\sin x$, giving

$$
\begin{aligned}
A_n
&=\frac{2}{\mechanical{L}}\int_0^\mechanical{L} \thermal{f}(\mechanical{x})\sin\left(\frac{n\pi \mechanical{x}}{\mechanical{L}}\right)\,d\mechanical{x}\\
&=\frac24\int_0^4\sin x\sin\left(\frac{n\pi x}{4}\right)\,dx\\
&=\frac14\left[
\int_0^4\cos\left(\left(1-\frac{n\pi}{4}\right)x\right)\,dx
-\int_0^4\cos\left(\left(1+\frac{n\pi}{4}\right)x\right)\,dx
\right].
\end{aligned}
$$

The last line uses the product-to-sum identity for two sines.

#### Practice problem 4. Laplace transform of $t\cos t$

Consider $y''-2y'+y=t\cos t$ with $y(0)=y'(0)=0$. The forcing transform can be computed by integration by parts or by differentiating the transform of $\cos t$. For real $s>0$, use $\frac{\partial}{\partial s}e^{-st}=-te^{-st}$:

$$
\begin{aligned}
\mathcal L\{t\cos t\}(s)
&=\int_0^\infty t\cos(t)e^{-st}\,dt\\
&=-\frac{d}{ds}\int_0^\infty\cos(t)e^{-st}\,dt
=-\frac{d}{ds}\left(\frac{s}{s^2+1}\right)
=\frac{s^2-1}{(s^2+1)^2}.
\end{aligned}
$$

The zero initial data give $(s^2-2s+1)Y(s)=(s^2-1)/(s^2+1)^2$. Factoring and canceling one $s-1$ gives

$$
Y(s)=\frac{s^2-1}{(s^2+1)^2(s^2-2s+1)}
=\frac{s+1}{(s^2+1)^2(s-1)}.
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the vibrating body or of a slice of the conducting rod. |
| $\mechanical{x}$ | $\unit{m}$ | Displacement or spatial coordinate | Position relative to equilibrium in the oscillator or distance along the wave and heat models. |
| $\mechanical{c}$ | $\unit{N\,s\,m^{-1}}$ | Viscous damping coefficient | Proportionality between velocity and damping force. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Proportionality between displacement and restoring force. |
| $\mechanical{F}$ | $\unit{N}$ | Driving-force amplitude | Magnitude of the sinusoidal force coefficient. |
| $\signal{\omega}$ | $\unit{rad\,s^{-1}}$ | Driving angular frequency | Rate of change of the driving phase. |
| $\signal{t}$ | $\unit{s}$ | Time | Independent variable in the vibration and heat models. |
| $\signal{A}$ | $\unit{m}$ | Response amplitude | Displacement coefficient of the sinusoidal response. |
| $\mechanical{f}(\signal{t})$ | $\unit{N}$ | Driving force | Time-dependent input to the oscillator, given in pounds-force in the sawtooth example. |
| $\signal{L}$ | $\unit{s}$ | Half-period | Half the time between successive repeats of the sawtooth force. |
| $\mechanical{b}$ | $\unit{N\,s\,m^{-1}}$ | Viscous damping coefficient | Notation for the coefficient of velocity in the Laplace-transform motivation. |
| $\thermal{y}$ | $\unit{K}$ | Temperature | Dependent variable in the heat equation on page 73. |
| $\thermal{k}$ | $\unit{m^2\,s^{-1}}$ | Thermal diffusivity | Coefficient of the second spatial derivative in the heat equation. |
| $\mechanical{u}$ | $\unit{m}$ | Wave displacement | Dependent variable in the one-dimensional mechanical wave model. |
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Wave speed | Coefficient whose square multiplies the second spatial derivative in the wave equation. |
| $\thermal{u}$ | $\unit{K}$ | Temperature field | Temperature in the solid as a function of position and time. |
| $\mechanical{y}$, $\mechanical{z}$ | $\unit{m}$ | Transverse spatial coordinates | The two remaining coordinates alongside $\mechanical{x}$ in the three-dimensional heat equation. |
| $\mechanical{A}$ | $\unit{m^2}$ | Cross-sectional area | Area of either end face of a rod slice. |
| $\Delta\mechanical{x}$ | $\unit{m}$ | Slice length | Distance between the end faces used in the energy balance. |
| $\mechanical{\rho}$ | $\unit{kg\,m^{-3}}$ | Mass density | Mass per volume of rod material. |
| $\thermal{c}$ | $\unit{J\,kg^{-1}\,K^{-1}}$ | Specific heat capacity | Energy per unit mass per temperature increment. |
| $\thermal{Q}$ | $\unit{J}$ | Thermal energy | Energy of the slice relative to a chosen temperature reference. |
| $\thermal{K}$ | $\unit{W\,m^{-1}\,K^{-1}}$ | Thermal conductivity | Proportionality between temperature gradient and conductive heat flux. |
| $\mechanical{L}$ | $\unit{m}$ | Rod length | Distance between the endpoints used in the heat equation. |
| $\thermal{f}$ | $\unit{K}$ | Initial temperature profile | Temperature as a function of position at the initial time. |
