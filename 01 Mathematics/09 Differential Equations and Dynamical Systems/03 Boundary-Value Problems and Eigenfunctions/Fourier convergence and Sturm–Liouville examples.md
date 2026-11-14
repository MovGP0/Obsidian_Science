---
title: "Fourier convergence and Sturm–Liouville examples"
---

> [!TLDR]
> Use parity and convergence rules for Fourier series, then put differential operators in self-adjoint form to find weighted modes.

## Worked lecture material

##### Convergence of Fourier series

Suppose $f$ and $f'$ are piecewise continuous on $[-L,L]$, and extend $f$ periodically with period $2L$. Then its Fourier series converges at every point. At a continuity point it converges to $f(x)$. At a discontinuity it converges to the average of the one-sided limits,

$$
\frac{f(x^+)+f(x^-)}{2},
\qquad
f(x^+)=\lim_{h\to0^+}f(x+h),\qquad
f(x^-)=\lim_{h\to0^+}f(x-h).
$$

At an endpoint of $[-L,L]$, use the limits of the periodic extension. The notes mention the Gibbs phenomenon beside the sketch. The midpoint formula describes the limiting value at a jump, and Gibbs oscillations concern the partial sums near it.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Fourier midpoint.png|**Fig. 2** The marked midpoint averages the left- and right-hand limits at a jump.]]

##### Piecewise continuity

A continuous function is piecewise continuous. A piecewise continuous function can have jumps between its continuous pieces. The notes give a step function as an example.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Piecewise continuous function.png|**Fig. 3** A piecewise continuous function on $[a,b]$ with breakpoints $x_1$, $x_2$, and $x_3$.]]

##### Fourier series of a step function

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

##### Piecewise constant and linear function

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

##### Even and odd functions

For an even function $f$, the integral satisfies $\int_{-L}^L f(x)\,dx=2\int_0^L f(x)\,dx$. This symmetry simplifies the coefficients in Fourier cosine and sine series.

An even function satisfies $f(-x)=f(x)$. An odd function satisfies $f(-x)=-f(x)$ and integrates to zero on $[-L,L]$. A separate note in the margin records the Hermitian matrix condition $A=A^\dagger=\overline{A}^{\mathsf T}$.

##### Fourier series and parity

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

##### An even piecewise linear function

Let

$$
f(x)=\begin{cases}
x+5,&-2<x<0,\\
-x+5,&0\le x\le2.
\end{cases}
$$

Replacing $x$ by $-x$ interchanges the two expressions on the interior of the interval, so $f(-x)=f(x)$. Equivalently, $f(x)=5-|x|$. Its Fourier series therefore uses cosine modes.

##### 4 on Sturm–Liouville problems

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

##### Legendre's equation

$$
(1-x^2)y''-2xy'+n(n+1)y=0.
$$

The margin connects this equation to the Schrödinger equation for hydrogen in spherical coordinates.

##### Legendre's equation in self-adjoint form

With $p(x)=1-x^2$, the product rule gives

$$
(p(x)y')'=p'(x)y'+p(x)y''=-2xy'+(1-x^2)y''.
$$

Thus Legendre's equation is already in self-adjoint form:

$$
\bigl[(1-x^2)y'\bigr]'+n(n+1)y=0.
$$

The coefficients are $p(x)=1-x^2$, $q(x)=0$, and $r(x)=1$, with $\lambda=n(n+1)$.

##### Bessel's equation

The notes associate the Bessel equation with wave propagation. For fixed $n$ and $\alpha>0$, the equation is

$$
x^2y''+xy'+(\alpha^2x^2-n^2)y=0,\qquad x\ge0.
$$

The leading terms are $x(xy''+y')=x(xy')'$. For $x>0$, divide by $x$ to obtain the self-adjoint form

$$
(xy')'+\left(-\frac{n^2}{x}+\alpha^2x\right)y=0.
$$

Hence $p(x)=x$, $q(x)=-n^2/x$, $r(x)=x$, and $\lambda=\alpha^2$.

##### Putting an equation in self-adjoint form

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

##### Eigenvalues of a regular problem

For a regular Sturm–Liouville problem with separated boundary conditions, the eigenvalues form a strictly increasing sequence of real numbers $\lambda_1<\lambda_2<\lambda_3<\cdots$.

##### Further properties of regular Sturm–Liouville problems

For the regular problem with separated boundary conditions, the list continues:

2. Each eigenvalue $\lambda_i$ has one eigenfunction up to a nonzero constant factor.
3. Eigenfunctions associated with distinct eigenvalues are linearly independent.
4. They are orthogonal with respect to the weight $r(x)$. For $\lambda_i\ne\lambda_j$,

   $$
   \int_a^b r(x)y_{\lambda_i}(x)y_{\lambda_j}(x)\,dx=0.
   $$

##### A Cauchy–Euler boundary-value problem

Consider

$$
x^2y''+xy'+\lambda y=0,\qquad 1<x<e^\pi,\qquad
y(1)=y(e^\pi)=0.
$$

First put the equation in self-adjoint form and show that the problem is regular. Then find the eigenvalues and corresponding nonzero eigenfunctions.

##### The Sturm–Liouville operator

One can write the original differential equation as $L_\lambda y=0$ with

$$
L_\lambda=a(x)\frac{d^2}{dx^2}+b(x)\frac{d}{dx}+[c(x)+\lambda d(x)],
$$

together with its boundary conditions. After transforming to the self-adjoint form, define a new operator that separates the eigenvalue parameter:

$$
L_{\mathrm{new}}y=\frac{d}{dx}\left(p(x)\frac{dy}{dx}\right)+q(x)y.
$$

The equation is then $L_{\mathrm{new}}y=-\lambda r(x)y$.

The conversion formulas, referenced to page 444 of the textbook in the handwritten notes, are

$$
p(x)=\exp\left(\int\frac{b(x)}{a(x)}\,dx\right),\qquad
q(x)=\frac{c(x)}{a(x)}p(x),\qquad
r(x)=\frac{d(x)}{a(x)}p(x).
$$

##### Regular Sturm–Liouville problems

For continuous $p,q,r$ on $[a,b]$ with $p,r>0$ and the separated homogeneous boundary conditions, the eigenvalues obey

$$
\lambda_1<\lambda_2<\cdots,\qquad \lim_{n\to\infty}\lambda_n=+\infty.
$$

Each $\lambda_i$ has a nonzero eigenfunction $y_{\lambda_i}$. The family is linearly independent and orthogonal for the inner product

$$
\langle f,g\rangle_r=\int_a^b r(x)f(x)g(x)\,dx.
$$

For $x^2y''+xy'+\lambda y=0$, $a=x^2$, $b=x$, $c=0$, and $d=1$. Thus on $[1,e^\pi]$,

$$
p(x)=e^{\ln x}=x,\qquad q(x)=0,\qquad
r(x)=\frac{x}{x^2}=\frac1x.
$$

These coefficients are continuous and $p,r$ are positive, so the problem is regular. To obtain eigenfunctions, make the change $x=e^t$. With $Y(t)=y(e^t)$, the transformed equation is $Y''+\lambda Y=0$.

##### Chain rule for the Cauchy–Euler substitution

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

Chapter 11 topics include eigenvalues and eigenfunctions of boundary-value problems, orthogonality of functions and sets of functions, Fourier series, and Sturm–Liouville problems.

##### Mixed endpoint conditions

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

##### Orthogonality and norms

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

##### Fourier series of an even function

Let

$$
f(x)=\begin{cases}
x+6,&-2<x<0,\\
-x+6,&0\le x<2.
\end{cases}
$$

The function is even and $L=2$. Its Fourier series starts with $a_0/2$, followed by the positive-frequency modes $a_n\cos(n\pi x/L)+b_n\sin(n\pi x/L)$. The handwritten sum starts at $n=0$, but the constant is already written separately. By parity, all $b_n=0$.

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.
