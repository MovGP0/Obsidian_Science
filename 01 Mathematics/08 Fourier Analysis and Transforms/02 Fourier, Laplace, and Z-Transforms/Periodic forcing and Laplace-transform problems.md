---
title: "Periodic forcing and Laplace-transform problems"
---

> [!TLDR]
> Expand a periodic drive in harmonics and use the one-sided Laplace transform to solve initial-value problems with forcing.

## Worked lecture material

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

##### Fourier forcing of an initial-value problem

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

##### Periodic driving force

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

##### Fourier coefficients of the driving force

In the integration by parts, the term $\int_0^1\cos(n\pi t)\,dt$ vanishes. The lower endpoint in $[-t\cos(n\pi t)/(n\pi)]_0^1$ also vanishes because of the factor $t$. The initial calculation on the page includes a nonzero lower-endpoint term and marks it as uncertain. The corrected calculation below it gives the force coefficient $b_n=2(-1)^{n+1}/n$ in pounds-force. Thus, using numerical time and force,

$$
f(t)=\sum_{n=1}^\infty\frac{2(-1)^{n+1}}{n}\sin(n\pi t)
$$

at continuity points.

##### Trial solution for the forced oscillator

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

##### Matching the oscillator's sine coefficients

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

##### Practice midterm, problem 4b

For $y''+\frac1x y'+\frac{\lambda}{x^2}y=0$ with $y$ a function of $x$, use the substitution $x=e^t$.

##### Chapter 7 on the Laplace transform

The notes review separation of variables, integrating factors, variation of parameters, undetermined coefficients, power series, and Fourier series. The Laplace transform provides another method for an oscillator

$$
\mechanical{m}\ddot{\mechanical{x}}+
\mechanical{b}\dot{\mechanical{x}}+
\mechanical{k}\mechanical{x}
=\mechanical{f}(\signal{t})
$$

with discontinuous forcing. The lecture emphasizes the limitations of applying the earlier methods directly across a jump.

The sketch uses a sawtooth as an example of a discontinuous input.

![[Kyle Kabasares - Intermediate Ordinary Differential Equations - Discontinuous sawtooth.png|**Fig. 6** A ramp rises and resets abruptly at the end of each cycle.]]

##### How the Laplace transform solves a linear equation

Apply $\mathcal L$ to the differential equation for $y(t)$. This produces an algebraic equation for $Y(s)=\mathcal L\{y\}(s)$. Solve for $Y(s)$ and use $\mathcal L^{-1}\{Y\}$ to recover $y(t)$.

The transform of $f$ is

$$
\mathcal L\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt
$$

for values of $s$ for which the integral converges. The notes begin by considering real $s>0$.

##### Analogy with a generating function

The power series $A(x)=\sum_{n=0}^\infty a(n)x^n$ associates a function with a sequence $a(n)$. For $a(n)=1/n!$ this gives $e^x$. For $a(n)=1$ it gives $1/(1-x)$ on $|x|<1$.

A continuous analogue replaces the discrete index $n$ by $t$ and the sum by the integral $\int_0^\infty a(t)x^t\,dt$. The margin recalls the same passage from a sum to an integral in a Riemann sum, $\int_a^b f(x)\,dx=\lim_{N\to\infty}\sum_{j=1}^{N} f(x_j^*)\,\Delta x$.

For the continuous analogue $A(x)=\int_0^\infty a(t)x^t\,dt$, choose $0<x<1$. Then $\ln x<0$. Set $s=-\ln x>0$ and use $x^t=e^{t\ln x}=e^{-st}$ to obtain

$$
A(e^{-s})=\int_0^\infty a(t)e^{-st}\,dt.
$$

The decaying kernel is useful for convergence, which also depends on the growth of $a(t)$. Renaming $a(t)$ as $f(t)$ gives the Laplace transform.

The transform maps a function of $t$ to a function $F(s)$ of the transform variable. Ordinary differentiation produces $f'(t)$ or $f''(t)$, which are still functions of $t$.

##### Linearity and the transform of the constant function

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

By linearity, a constant $c$ has transform $\mathcal L\{c\}(s)=c/s$ for $s>0$.

##### Powers of $t$

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

##### Conditions for existence

A sufficient condition is that $f$ be piecewise continuous on each finite interval $[0,B]$ and of exponential order: $|f(t)|\le M e^{\alpha t}$ for all $t>T>0$ and some $M,\alpha$. Then the Laplace integral converges absolutely for real $s>\alpha$. The notes state the conditions using $(0,\infty)$, with the usual finite-interval interpretation at the lower limit.

The upper sketch marks the positive-time side of a function as sufficient for the one-sided Laplace transform. The integral uses $t\ge0$.

##### Existence and basic transforms

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

For real $s>a$, the exponential term at the upper limit vanishes, giving $\mathcal L\{e^{at}\}(s)=1/(s-a)$. In contrast, $f(t)=1/t^2$ has a divergent Laplace integral at $t=0$.

##### Transforms of cosine and sine

Euler's identity $e^{i\theta}=\cos\theta+i\sin\theta$ gives $\cos(at)=(e^{iat}+e^{-iat})/2$. For real $a$ and $s>0$,

$$
\mathcal L\{\cos(at)\}(s)
=\frac12\left(\frac{1}{s-ia}+\frac{1}{s+ia}\right)
=\frac{s}{s^2+a^2}.
$$

The sine transform is $\mathcal L\{\sin(at)\}(s)=a/(s^2+a^2)$.

##### A function that jumps at $t=1$

For $f(t)=1$ on $0\le t<1$ and $f(t)=2$ on $t\ge1$, split the transform integral at the jump. For $s>0$,

$$
\begin{aligned}
\mathcal L\{f\}(s)
&=\int_0^1 e^{-st}\,dt+\int_1^\infty 2e^{-st}\,dt\\
&=\frac{1-e^{-s}}{s}+\frac{2e^{-s}}s
=\frac{1+e^{-s}}s.
\end{aligned}
$$

##### Shift in the transform variable

Suppose $\mathcal L\{f\}(s)=F(s)$. Wherever the integral on the right converges,

$$
\mathcal L\{e^{at}f(t)\}(s)
=\int_0^\infty e^{-st}e^{at}f(t)\,dt
=\int_0^\infty e^{-(s-a)t}f(t)\,dt
=F(s-a).
$$

The shift formula gives $\mathcal L\{e^{at}t^2\}(s)=2!/(s-a)^3$. To start solving an equation such as $y''+2y'=\cos t$, apply the transform to both sides, giving $\mathcal L\{y''+2y'\}=\mathcal L\{\cos t\}$.

##### Inverse Laplace transform

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

##### Applying Laplace transforms to first-order equations

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

##### A first-order initial-value problem

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

##### Second-order initial-value problems

For $ay''+by'+cy=f(t)$ with $y(0)=y_0$ and $y'(0)=v_0$, transforming gives

$$
a\mathcal L\{y''\}+b\bigl(sY(s)-y_0\bigr)+cY(s)=F(s).
$$

The remaining ingredient is the transform of $y''$.

##### Laplace transform of higher derivatives

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

##### Polynomial forcing

Solve $y''-y'=2t$, $y(0)=1$, $y'(0)=-2$. The transformed solution simplifies as follows:

$$
Y(s)
=\frac{2/s^2+(s-1)-2}{s^2-s}
=\frac{s^3-3s^2+2}{s^2(s^2-s)}
=\frac{s^2-2s-2}{s^3}
=\frac1s-\frac2{s^2}-\frac2{s^3}.
$$

Inverting gives $y(t)=1-2t-t^2$.

##### Introduction to partial differential equations

The lecture begins by reviewing the Laplace method for ordinary differential equations. Transform the differential equation to obtain an algebraic equation for $Y(s)=\int_0^\infty y(t)e^{-st}\,dt$, solve for $Y(s)$, and invert it to recover $y(t)$.

##### A second-order initial-value problem

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

##### Inverting the shifted quadratic

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

##### Shifting the starting time to zero

If the initial conditions are given at $t=6$, set $\xi=t-6$ and $u(\xi)=y(\xi+6)$. Then $t=\xi+6$, $dt=d\xi$, and differentiation with respect to $\xi$ gives the same derivatives evaluated at $t=\xi+6$.

The notes use a shifted forcing $8e^{t-6}$, which becomes $8e^\xi$. Thus the corresponding problem

$$
y''-2y'+5y=8e^{t-6},\qquad y(6)=1,\qquad y'(6)=2
$$

becomes $u''-2u'+5u=8e^\xi$ with $u(0)=1$ and $u'(0)=2$. The boxed line appears to show $u(0)=0$, while the stated starting value is $y(6)=1$. With the stated data, the shifted problem is exactly Example 3 in the new variable.

## Source

Kyle Kabasares, *Intermediate Ordinary Differential Equations (Math 125, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{m}$ | $\unit{kg}$ | Mass | Mass of the vibrating body or of a slice of the conducting rod. |
| $\mechanical{x}$ | $\unit{m}$ | Displacement or spatial coordinate | Position relative to equilibrium in the oscillator or distance along the wave and heat models. |
| $\mechanical{k}$ | $\unit{N\,m^{-1}}$ | Spring constant | Proportionality between displacement and restoring force. |
| $\signal{t}$ | $\unit{s}$ | Time | Independent variable in the vibration and heat models. |
| $\mechanical{f}(\signal{t})$ | $\unit{N}$ | Driving force | Time-dependent input to the oscillator, given in pounds-force in the sawtooth example. |
| $\signal{L}$ | $\unit{s}$ | Half-period | Half the time between successive repeats of the sawtooth force. |
| $\mechanical{b}$ | $\unit{N\,s\,m^{-1}}$ | Viscous damping coefficient | Notation for the coefficient of velocity in the Laplace-transform motivation. |
