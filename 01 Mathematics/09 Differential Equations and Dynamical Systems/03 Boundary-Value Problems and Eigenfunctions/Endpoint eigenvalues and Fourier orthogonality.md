---
title: "Endpoint eigenvalues and Fourier orthogonality"
---

> [!TLDR]
> Derive allowed eigenvalues from endpoint conditions and use orthogonality to project a function onto modes.

## Worked lecture material

##### Review of initial-value and boundary-value problems

For a second-order equation, initial conditions can specify $y(a)$ and $y'(a)$. Boundary conditions can specify $y(a)$ and $y(b)$ at different points, or combine values and derivatives at the two endpoints. The general schematic at the top uses one prime, but the conditions and examples are for second-order equations.

For $y''+25y=\cos t$, compare the initial conditions $y(0)=1$, $y'(0)=5$ with the mixed boundary conditions $y(\pi/2)=1$, $y'(0)=5$. The characteristic equation $\lambda^2+25=0$ has roots $\pm5i$, giving

$$
y_h=C_1\cos(5t)+C_2\sin(5t).
$$

A trial particular solution is $A\cos t+B\sin t$, with separate coefficients for the two terms. The imposed conditions give equations for $C_1$ and $C_2$.

##### Review of systems

The equations $x'=3x+y$ and $y'=7x-3y$ give

$$
\mathbf{x}'=A\mathbf{x},\qquad
A=\begin{bmatrix}3&1\\7&-3\end{bmatrix},\qquad
\mathbf{x}(0)=\begin{bmatrix}x(0)\\y(0)\end{bmatrix}
=\begin{bmatrix}3\\2\end{bmatrix}.
$$

##### Chapter 11 and Section 11.4

The Sturm–Liouville topic begins with eigenvalue and eigenfunction boundary-value problems. Compare these four equations, each with $y(0)=y(\pi/2)=0$:

1. $y''+9y=0$.
2. $y''+4y=0$.
3. $y''-y=0$.
4. $y''=0$.

Of the four problems with $y(0)=y(\pi/2)=0$, only the second has nontrivial solutions.

1. For $y''+9y=0$, the endpoint conditions force both coefficients to vanish.
2. For $y''+4y=0$, the solutions are $y(x)=C_2\sin(2x)$ with $C_2$ arbitrary.
3. For $y''-y=0$, $y(0)=0$ gives $C_1+C_2=0$ for the coefficients of $e^x$ and $e^{-x}$. The condition at $\pi/2$ then forces both coefficients to vanish.
4. For $y''=0$, the general solution $C_1x+C_2$ must vanish at both endpoints, so both constants are zero.

##### Two-point eigenvalue problem

Consider

$$
\begin{cases}
y''+\lambda y=0,\qquad 0<x<L,\\
y(0)=y(L)=0.
\end{cases} \tag{*}
$$

The zero function always solves this problem. The **eigenvalues** are the values of $\lambda$ for which a nonzero solution exists. A corresponding nonzero solution $y_\lambda$ is an **eigenfunction**. In the four examples above, $\lambda=4$ is the only eigenvalue among the values tested for $L=\pi/2$. One eigenfunction is $\sin(2x)$.

The matrix analogy is $A\mathbf{x}=\lambda\mathbf{x}$ with $\mathbf{x}\ne\mathbf{0}$ and $\det(A-\lambda I)=0$. For the differential equation, define $Dy=d^2y/dx^2$. Then $Dy+\lambda y=0$ becomes $Dy=-\lambda y$, with the endpoint conditions included in the domain of $D$.

##### Eigenvalues for two zero endpoints

Find the real values of $\lambda$ for which $y''+\lambda y=0$, $y(0)=y(L)=0$, with $L>0$, has a nonzero solution.

##### Case 1. $\lambda=0$

The solution of $y''=0$ has the form $y=C_1x+C_2$. The condition at zero gives $C_2=0$, and the condition at $L$ gives $C_1L=0$. Thus $y=0$.

##### Case 2. $\lambda<0$

Write $\lambda=-\alpha^2$ with $\alpha>0$. For instance, $-4=-2^2$ and $-8=-(2\sqrt2)^2$. The characteristic roots of $y''-\alpha^2y=0$ are $\pm\alpha$, so $y=C_1e^{\alpha x}+C_2e^{-\alpha x}$. The boundary conditions give

$$
C_1+C_2=0,\qquad
C_1e^{\alpha L}+C_2e^{-\alpha L}=0.
$$

Because $e^{\alpha L}\ne e^{-\alpha L}$, both coefficients vanish.

##### Case 3. $\lambda>0$

Write $\lambda=\alpha^2$ with $\alpha>0$. For instance, $20=(2\sqrt5)^2$.

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

##### Eigenvalues of a differential operator

For an $n\times n$ matrix $A$, solve $\det(A-\lambda I)=0$ to find its eigenvalues. The boundary-value analogue uses the operator $Dy=y''$ with endpoint conditions on its domain. Then the equation reads $Dy=-\lambda y$, and the values of $\lambda$ are selected by requiring a nonzero solution satisfying the endpoint conditions.

##### Zero derivative at both endpoints

Find eigenvalues and eigenfunctions of $y''+\lambda y=0$ with $y'(0)=y'(L)=0$. In the $\lambda=0$ case, the eigenfunctions are nonzero constants $y_\lambda(x)=C_2$. For $\lambda<0$, the boundary conditions force the zero solution. The handwritten case list ends there before turning to orthogonality.

The margin defines the Kronecker delta:

$$
\delta_{mn}=\begin{cases}
1,&m=n,\\
0,&m\ne n.
\end{cases}
$$

##### Orthogonal functions

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

##### Eigenfunctions and vibrations

Eigenvalues determine the natural frequencies of vibration, and eigenfunctions determine the shapes of the corresponding modes. The notes illustrate the amplitude of a forced vibration with

$$
\mechanical{m}\ddot{\mechanical{x}}+
\mechanical{c}\dot{\mechanical{x}}+
\mechanical{k}\mechanical{x}
=\mechanical{F}\cos(\signal{\omega}\signal{t}).
$$

The sketch of the response writes $\mechanical{x}(\signal{t})=\signal{A}\cos(\signal{\omega}\signal{t})$ and highlights a large amplitude. In general, a damped steady response also has a phase shift relative to the driving force.

##### Inner products and norms

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

##### Norm of a sine mode

For $f(x)=\sin(nx)$ on $[0,\pi]$, with $n$ a positive integer,

$$
\|f\|
=\sqrt{\int_0^\pi\sin^2(nx)\,dx}
=\sqrt{\frac12\int_0^\pi(1-\cos(2nx))\,dx}
=\sqrt{\frac{\pi}{2}}.
$$

The handwritten integral is shown for $n=1$. The same endpoint calculation applies for each positive integer $n$.

##### Norm of a cosine mode

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

##### Orthogonal sets of functions

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

##### Fourier series, part I

A Fourier series expands a function in constant, sine, and cosine modes. On an interval of length $2\pi$, the modes in the two sums are $\sin(nx)$ and $\cos(nx)$. The introductory shorthand omits $n$ from the arguments. The basic period identity is $\sin(x+2\pi)=\sin x$.

##### Boundary conditions and trigonometric expansions

For $y''+\lambda y=0$ on $[0,L]$, homogeneous conditions on the values, $y(0)=y(L)=0$, give sine modes $\sin(n\pi x/L)$ for $n\ge1$. Their associated expansion has the form

$$
\sum_{n=1}^\infty b_n\sin\left(\frac{n\pi x}{L}\right).
$$

Homogeneous conditions on both derivatives, $y'(0)=y'(L)=0$, give cosine modes $\cos(n\pi x/L)$ for $n\ge1$, with a constant mode at $\lambda=0$. The positive modes give the sum

$$
\sum_{n=1}^\infty a_n\cos\left(\frac{n\pi x}{L}\right).
$$

The handwritten examples appear to use $\lambda x$ in the sine equation and $y(L)=0$ in the cosine boundary condition. The sine modes require $\lambda y$, and the cosine modes and the earlier zero-derivative example give $y'(L)=0$. [[#Zero derivative at both endpoints|the section on Zero derivative at both endpoints]] identifies the constant mode.

With periodic conditions on $[-L,L]$, $y(-L)=y(L)$ and $y'(-L)=y'(L)$, the modes include $1$, $\cos(n\pi x/L)$, and $\sin(n\pi x/L)$. The notes call the series a general solution. A fixed $\lambda$ selects its own eigenspace, while the full series combines modes from different eigenvalues.

##### Fourier series and periodicity

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

The trigonometric modes are orthogonal and linearly independent. Since $\sin(x+2\pi)=\sin x$,

$$
\sin\left(\frac{n\pi}{L}x\right)
=\sin\left(\frac{n\pi}{L}\left(x+\frac{2L}{n}\right)\right).
$$

The fundamental period of the $n$th sine mode is $2L/n$. The next step is to determine $a_0$, $a_n$, and $b_n$.

##### Mapping a general interval to a symmetric one

A function defined on $[a,b]$ can be expressed in a coordinate $t$ on $[-L,L]$ using

$$
t=-L+\frac{x-a}{b-a}\,2L.
$$

This sends $x=a$ to $t=-L$ and $x=b$ to $t=L$.

##### Coefficients of an orthogonal expansion

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

##### Fourier coefficients on $[-L,L]$

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

##### Fourier series of $f(x)=x$ on $[-1,1]$

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

##### Fourier series, Sections 11.2–11.3

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

##### Pointwise convergence

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

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.

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
| $\mechanical{c}$ | $\unit{m\,s^{-1}}$ | Wave speed | Coefficient whose square multiplies the second spatial derivative in the wave equation. |
