---
title: "Partial fractions and improper integral problems"
---

> [!TLDR]
> These problems decompose rational functions and use one-sided limits at singularities or infinite endpoints.

## Worked lecture material

##### Partial fraction decomposition

Use partial fractions to integrate rational functions. The numerator must have lower degree than the denominator. If its degree is at least as high, apply polynomial long division first. Stop when the remainder has lower degree than the divisor.

**Example.** Divide $x^2+4x-8$ by $x-2$. The first quotient term is $x$, and subtracting $x(x-2)$ leaves $6x-8$. The next quotient term is $6$, and subtracting $6(x-2)$ leaves the remainder $4$.

$$
\begin{aligned}
(x^2+4x-8)-(x^2-2x)&=6x-8,\\
(6x-8)-(6x-12)&=4.
\end{aligned}
$$

$$
\frac{x^2+4x-8}{x-2}=\boxed{x+6+\frac{4}{x-2}}.
$$

**Example.** Divide $x^3+4x+6$ by $x^2+1$. Use $0x^2$ as a placeholder in the numerator and $0x$ as a placeholder in the denominator. The first quotient term is $x$.

$$
(x^3+0x^2+4x+6)-x(x^2+0x+1)
=(x^3+0x^2+4x+6)-(x^3+0x^2+x)
=3x+6.
$$

The remainder has degree one, so the division stops.

$$
\frac{x^3+4x+6}{x^2+1}=\boxed{x+\frac{3x+6}{x^2+1}}.
$$

##### Polynomial long division

Divide $x^3+2x^2+x+1$ by $x-3$. The quotient terms are $x^2$, $5x$, and $16$ in order. Subtract each term times the divisor.

$$
\begin{aligned}
(x^3+2x^2+x+1)-(x^3-3x^2)&=5x^2+x+1,\\
(5x^2+x+1)-(5x^2-15x)&=16x+1,\\
(16x+1)-(16x-48)&=49.
\end{aligned}
$$

$$
\frac{x^3+2x^2+x+1}{x-3}=\boxed{x^2+5x+16+\frac{49}{x-3}}.
$$

Divide $x^4-x^2+x-4$ by $x^2-2x+5$. Write $0x^3$ in the dividend to align the powers. The quotient terms are $x^2$, $2x$, and $-2$.

$$
\begin{aligned}
(x^4+0x^3-x^2+x-4)-(x^4-2x^3+5x^2)&=2x^3-6x^2+x-4,\\
(2x^3-6x^2+x-4)-(2x^3-4x^2+10x)&=-2x^2-9x-4,\\
(-2x^2-9x-4)-(-2x^2+4x-10)&=-13x+6.
\end{aligned}
$$

$$
\frac{x^4-x^2+x-4}{x^2-2x+5}
=\boxed{x^2+2x-2+\frac{-13x+6}{x^2-2x+5}}.
$$

The transcription uses the remainder $-13x+6$ shown in the division. The handwritten box changes the sign of the constant when placing a minus sign in front of the fraction.

##### Partial fractions

**1. Distinct linear factors.** Use a constant numerator for each factor.

$$
\begin{aligned}
\frac{x}{(x+3)(x-2)}&=\frac{A}{x+3}+\frac{B}{x-2},\\
\frac{1}{(x-2)(2x+3)x}&=\frac{A}{x-2}+\frac{B}{2x+3}+\frac{C}{x}.
\end{aligned}
$$

**2. Linear factors, some repeated.** Include a term for each power of a repeated factor through its multiplicity.

$$
\frac{3x+1}{(x+1)^3x}
=\frac{A}{x+1}+\frac{B}{(x+1)^2}+\frac{C}{(x+1)^3}+\frac{D}{x}.
$$

Factor the denominator first to identify repeated factors.

$$
\frac{1}{(x^2-4)(x-2)}
=\frac{1}{(x-2)(x+2)(x-2)}
=\frac{1}{(x-2)^2(x+2)}.
$$

**3. Distinct irreducible quadratic factors.** Use numerators of degree at most one.

$$
\frac{x+1}{(x^2+4)(x^2+9)}
=\frac{Ax+B}{x^2+4}+\frac{Cx+D}{x^2+9}.
$$

**4. Irreducible quadratic factors, some repeated.** Include a linear numerator for each power of a repeated quadratic factor.

$$
\begin{aligned}
\frac{x+1}{(x^2+4)^3(x^2+9)}
={}&\frac{Ax+B}{x^2+4}+\frac{Cx+D}{(x^2+4)^2}\\
&+\frac{Ex+F}{(x^2+4)^3}+\frac{Gx+H}{x^2+9}.
\end{aligned}
$$

The transcription writes the denominator of the third term as $(x^2+4)^3$ to match the repeated quadratic on the left.

##### Example with linear and quadratic factors

The denominator has a repeated linear factor $x$, a distinct linear factor $x+1$, and a repeated irreducible quadratic factor $x^2+3$.

$$
\begin{aligned}
\frac{x+4}{x^2(x+1)(x^2+3)^4}
={}&\frac{A}{x}+\frac{B}{x^2}+\frac{C}{x+1}+\frac{Dx+E}{x^2+3}\\
&+\frac{Fx+G}{(x^2+3)^2}+\frac{Hx+I}{(x^2+3)^3}
+\frac{Jx+K}{(x^2+3)^4}.
\end{aligned}
$$

##### Determining coefficients by substitution

Factor the denominator in $\int x/(x^2+3x+2)\,dx$ as $(x+1)(x+2)$. Write the partial fractions and multiply through by $(x+1)(x+2)$.

$$
\begin{aligned}
\frac{x}{(x+1)(x+2)}&=\frac{A}{x+1}+\frac{B}{x+2},\\
x&=A(x+2)+B(x+1).
\end{aligned}
$$

Substitute the roots of the denominator into the resulting polynomial identity.

$$
\begin{aligned}
x=-2&:\quad -2=A(-2+2)+B(-2+1)=-B,\qquad B=2,\\
x=-1&:\quad -1=A(-1+2)+B(-1+1)=A,\qquad A=-1.
\end{aligned}
$$

$$
\begin{aligned}
\int\frac{x}{(x+1)(x+2)}\,dx
&=-\int\frac{dx}{x+1}+2\int\frac{dx}{x+2}\\
&=\boxed{2\ln|x+2|-\ln|x+1|+C}.
\end{aligned}
$$

##### Determining coefficients by matching powers

Return to the identity from the previous example. Expand the right-hand side and match the coefficients of $x$ and the constant terms.

$$
\begin{aligned}
x&=A(x+2)+B(x+1)\\
&=Ax+2A+Bx+B,\\
1x+0&=(A+B)x+(2A+B).
\end{aligned}
$$

$$
1=A+B,\qquad 0=2A+B.
$$

The first equation gives $B=1-A$. In the second equation,

$$
0=2A+1-A
\quad\Longrightarrow\quad
A=2A+1
\quad\Longrightarrow\quad
-A=1
\quad\Longrightarrow\quad
A=-1.
$$

Then $0=2(-1)+B$, giving $B=2$.

**Example.** Evaluate $\displaystyle\int\frac{x+1}{x^2-2x-8}\,dx$. Factor the denominator and clear the fractions.

$$
\begin{aligned}
\frac{x+1}{x^2-2x-8}
&=\frac{x+1}{(x+2)(x-4)}
=\frac{A}{x+2}+\frac{B}{x-4},\\
x+1&=A(x-4)+B(x+2).
\end{aligned}
$$

$$
\begin{aligned}
x=4&:\quad 5=6B,\qquad B=\frac56,\\
x=-2&:\quad -1=A(-2-4)=-6A,\qquad A=\frac16.
\end{aligned}
$$

$$
\begin{aligned}
\int\frac{x+1}{(x+2)(x-4)}\,dx
&=\frac16\int\frac{dx}{x+2}+\frac56\int\frac{dx}{x-4}\\
&=\boxed{\frac16\ln|x+2|+\frac56\ln|x-4|+C}.
\end{aligned}
$$

##### Example with a repeated linear factor

Evaluate $\displaystyle\int\frac{x+2}{x(x+1)^2}\,dx$.

$$
\begin{aligned}
\frac{x+2}{x(x+1)^2}&=\frac{A}{x}+\frac{B}{x+1}+\frac{C}{(x+1)^2},\\
x+2&=A(x+1)^2+Bx(x+1)+Cx.
\end{aligned}
$$

At $x=0$, the polynomial identity gives $2=A$. At $x=-1$, it gives $1=-C$, hence $C=-1$. Expand to find $B$.

$$
\begin{aligned}
x+2&=Ax^2+2Ax+A+Bx^2+Bx+Cx,\\
0x^2+1x+2&=(A+B)x^2+(2A+B+C)x+A.
\end{aligned}
$$

The $x^2$ coefficient gives $A+B=0$, so $2+B=0$ and $B=-2$. The transcription includes the $C$ term in the coefficient of $x$.

$$
\begin{aligned}
\int\frac{x+2}{x(x+1)^2}\,dx
&=2\int\frac{dx}{x}-2\int\frac{dx}{x+1}
-\int\frac{dx}{(x+1)^2}\\
&=2\ln|x|-2\ln|x+1|-\int\frac{dx}{(x+1)^2}.
\end{aligned}
$$

For the remaining integral, let $u=x+1$ and $du=dx$. Up to an additive constant,

$$
\int\frac{dx}{(x+1)^2}=\int u^{-2}\,du=-u^{-1}=-\frac{1}{x+1}.
$$

Therefore,

$$
\int\frac{x+2}{x(x+1)^2}\,dx
=\boxed{2\ln|x|-2\ln|x+1|+\frac{1}{x+1}+C}.
$$

**Example.** Evaluate $\displaystyle\int\frac{5}{(2x+1)(x-2)}\,dx$.

$$
\begin{aligned}
\frac{5}{(2x+1)(x-2)}&=\frac{A}{2x+1}+\frac{B}{x-2},\\
5&=A(x-2)+B(2x+1).
\end{aligned}
$$

Use the roots of the two denominator factors.

$$
\begin{aligned}
x=2&:\quad 5=B(4+1)=5B,\qquad B=1,\\
x=-\frac12&:\quad 5=A\left(-\frac12-\frac42\right)
=-\frac52A,\qquad A=-2.
\end{aligned}
$$

$$
\begin{aligned}
\int\frac{5}{(2x+1)(x-2)}\,dx
&=-2\int\frac{dx}{2x+1}+\int\frac{dx}{x-2}\\
&=-2\cdot\frac12\ln|2x+1|+\ln|x-2|+C\\
&=\boxed{-\ln|2x+1|+\ln|x-2|+C}.
\end{aligned}
$$

**Example.** Evaluate $\displaystyle\int\frac{x^3+4}{x^2+4}\,dx$. Polynomial long division gives quotient $x$ and remainder $-4x+4$.

$$
(x^3+0x^2+0x+4)-x(x^2+0x+4)
=(x^3+0x^2+0x+4)-(x^3+0x^2+4x)
=-4x+4.
$$

$$
\begin{aligned}
\int\frac{x^3+4}{x^2+4}\,dx
&=\int x\,dx+\int\frac{-4x+4}{x^2+4}\,dx\\
&=\frac{x^2}{2}-\int\frac{4x}{x^2+4}\,dx+\int\frac{4}{x^2+4}\,dx.
\end{aligned}
$$

For the first remaining integral, use $u=x^2+4$ and $du=2x\,dx$, so $2\,du=4x\,dx$. The following antiderivatives are written up to additive constants.

$$
\int\frac{4x}{x^2+4}\,dx
=2\int\frac{du}{u}
=2\ln|u|
=2\ln|x^2+4|.
$$

For the second, use $x=2\tan\theta$, so $dx=2\sec^2\theta\,d\theta$ and $\tan\theta=x/2$.

![[Kyle Kabasares - Integral Calculus - Triangle for quadratic denominator.png|**Fig. 11** The triangle for $x=2\tan\theta$, drawn for $x>0$.]]

$$
\begin{aligned}
\int\frac{4}{x^2+4}\,dx
&=\int\frac{4\cdot2\sec^2\theta}{4\tan^2\theta+4}\,d\theta\\
&=\int\frac{8\sec^2\theta}{4(\tan^2\theta+1)}\,d\theta
=\int\frac{8\sec^2\theta}{4\sec^2\theta}\,d\theta\\
&=\int 2\,d\theta
=2\theta
=2\arctan\left(\frac{x}{2}\right).
\end{aligned}
$$

$$
\int\frac{x^3+4}{x^2+4}\,dx
=\boxed{\frac{x^2}{2}-2\ln|x^2+4|+2\arctan\left(\frac{x}{2}\right)+C}.
$$

The transcription carries the signed remainder $-4x+4$ through the split and includes the integration constant in the boxed result.

**Example.** Evaluate $\displaystyle\int\frac{10}{x^2-25}\,dx$. Factor $x^2-25=(x+5)(x-5)$ and take the factor $10$ outside the integral.

$$
\begin{aligned}
\frac{1}{(x+5)(x-5)}&=\frac{A}{x+5}+\frac{B}{x-5},\\
1&=A(x-5)+B(x+5).
\end{aligned}
$$

At $x=5$, $1=10B$, so $B=1/10$. At $x=-5$, $1=-10A$, so $A=-1/10$.

$$
\begin{aligned}
\int\frac{10}{x^2-25}\,dx
&=10\left(-\frac1{10}\int\frac{dx}{x+5}
+\frac1{10}\int\frac{dx}{x-5}\right)\\
&=10\left[-\frac1{10}\ln|x+5|+\frac1{10}\ln|x-5|\right]+C\\
&=\boxed{\ln|x-5|-\ln|x+5|+C}.
\end{aligned}
$$

**Example.** Evaluate $\displaystyle\int\frac{e^x}{(e^{2x}-4)(e^{2x}+1)}\,dx$. Let $u=e^x$ and $du=e^x\,dx$. Then

$$
\int\frac{e^x\,dx}{(e^{2x}-4)(e^{2x}+1)}
=\int\frac{du}{(u^2-4)(u^2+1)}
=\int\frac{du}{(u+2)(u-2)(u^2+1)}.
$$

$$
\begin{aligned}
\frac{1}{(u+2)(u-2)(u^2+1)}
&=\frac{A}{u+2}+\frac{B}{u-2}+\frac{Cu+D}{u^2+1},\\
1&=A(u-2)(u^2+1)+B(u+2)(u^2+1)+(Cu+D)(u+2)(u-2).
\end{aligned}
$$

After clearing denominators, the equation is a polynomial identity and can be evaluated at both roots of $u^2-4$.

$$
\begin{aligned}
u=2&:\quad 1=B(2+2)(4+1)=20B,\qquad B=\frac1{20},\\
u=-2&:\quad 1=A(-2-2)(4+1)=-20A,\qquad A=-\frac1{20}.
\end{aligned}
$$

##### Exponential substitution and partial fractions

Expand the polynomial identity from [[#Example with a repeated linear factor|the section on Example with a repeated linear factor]] and collect powers of $u$.

$$
\begin{aligned}
1={}&(Au-2A)(u^2+1)+(Bu+2B)(u^2+1)\\
&+(Cu^2+2Cu+Du+2D)(u-2)\\
={}&(A+B+C)u^3+(-2A+2B+D)u^2\\
&+(A+B-4C)u+(-2A+2B-4D).
\end{aligned}
$$

The transcription cancels the opposite $2Cu^2$ and $2Du$ terms in the expansion. Matching the coefficients of $u^3$ and $u^2$, with $A=-1/20$ and $B=1/20$, gives

$$
\begin{aligned}
0&=A+B+C=C,\\
0&=-2A+2B+D=\frac{2}{20}+\frac{2}{20}+D,\\
D&=-\frac15.
\end{aligned}
$$

Thus, up to an additive constant,

$$
\begin{aligned}
\int\frac{du}{(u+2)(u-2)(u^2+1)}
&=\int\left(-\frac{1}{20(u+2)}+\frac{1}{20(u-2)}-\frac{1}{5(u^2+1)}\right)\,du\\
&=-\frac1{20}\ln|u+2|+\frac1{20}\ln|u-2|-\frac15\int\frac{du}{u^2+1}.
\end{aligned}
$$

To evaluate the last term, set $u=\tan\theta$, with $du=\sec^2\theta\,d\theta$.

$$
\begin{aligned}
-\frac15\int\frac{du}{u^2+1}
&=-\frac15\int\frac{\sec^2\theta}{\tan^2\theta+1}\,d\theta
=-\frac15\int d\theta\\
&=-\frac15\theta
=-\frac15\arctan u.
\end{aligned}
$$

The transcription retains the negative sign from $D=-1/5$ throughout this substitution. Return to $u=e^x$.

$$
\int\frac{e^x\,dx}{(e^{2x}-4)(e^{2x}+1)}
=\boxed{-\frac1{20}\ln|e^x+2|+\frac1{20}\ln|e^x-2|-\frac15\arctan(e^x)+C}.
$$

##### Improper integrals

##### Infinite upper limit

Replace the infinite endpoint with $t$ and take the limit.

$$
\int_1^\infty\frac{dx}{x^2}
=\lim_{t\to\infty}\int_1^t x^{-2}\,dx
=\lim_{t\to\infty}\left[-\frac1x\right]_1^t
=\lim_{t\to\infty}\left(-\frac1t+1\right)
=\boxed{1}.
$$

##### Infinite discontinuity at an endpoint

Approach $x=0$ from the left.

$$
\int_{-1}^0\frac{dx}{x^2}
=\lim_{t\to0^-}\int_{-1}^t x^{-2}\,dx
=\lim_{t\to0^-}\left(-\frac1t-1\right)
=+\infty.
$$

The integral diverges.

##### Infinite upper and lower limits

Split at $x=0$.

$$
\int_{-\infty}^{\infty}x^2e^{-x^3}\,dx
=\int_{-\infty}^0x^2e^{-x^3}\,dx+\int_0^\infty x^2e^{-x^3}\,dx.
$$

Set $u=-x^3$ and $du=-3x^2\,dx$. On the positive half-line, $x=0$ gives $u=0$ and $x=t$ gives $u=-t^3$, so

$$
\int_0^\infty x^2e^{-x^3}\,dx
=\lim_{t\to\infty}-\frac13\int_0^{-t^3}e^u\,du
=\lim_{t\to\infty}\frac{1-e^{-t^3}}{3}
=\frac13.
$$

On the negative half-line, $x=-t$ gives $u=t^3$, so

$$
\int_{-\infty}^0 x^2e^{-x^3}\,dx
=\lim_{t\to\infty}-\frac13\int_{t^3}^0e^u\,du
=\lim_{t\to\infty}\frac{e^{t^3}-1}{3}
=+\infty.
$$

The full integral diverges, as stated in the notes. The transcription changes the bounds with the substitution and evaluates both halves. The divergence comes from the negative half-line.

##### Example with an interior singularity

Split the integral at $x=0$.

$$
\int_{-1}^1\frac{e^x}{e^x-1}\,dx
=\int_{-1}^0\frac{e^x}{e^x-1}\,dx
+\int_0^1\frac{e^x}{e^x-1}\,dx.
$$

For the left-hand integral, let $u=e^x-1$, with $du=e^x\,dx$. The antiderivative is $\ln|u|=\ln|e^x-1|$, up to an additive constant. The lower and upper bounds in $u$ are $e^{-1}-1$ and $e^t-1$ respectively.

$$
\begin{aligned}
\int_{-1}^0\frac{e^x}{e^x-1}\,dx
&=\lim_{t\to0^-}\int_{-1}^t\frac{e^x}{e^x-1}\,dx\\
&=\lim_{t\to0^-}\int_{e^{-1}-1}^{e^t-1}\frac{du}{u}\\
&=\lim_{t\to0^-}\bigl[\ln|e^t-1|-\ln|e^{-1}-1|\bigr]
=-\infty.
\end{aligned}
$$

Since the left-hand integral diverges, the full improper integral diverges.

**Example.** Evaluate $\displaystyle\int_1^\infty\frac{dx}{(x+2)^2}$. With $u=x+2$ and $du=dx$, the bounds $1$ and $t$ become $3$ and $t+2$.

$$
\begin{aligned}
\int_1^\infty\frac{dx}{(x+2)^2}
&=\lim_{t\to\infty}\int_1^t\frac{dx}{(x+2)^2}\\
&=\lim_{t\to\infty}\int_3^{t+2}\frac{du}{u^2}
=\lim_{t\to\infty}\left[-\frac1u\right]_3^{t+2}\\
&=\lim_{t\to\infty}\left(-\frac1{t+2}+\frac13\right)
=\boxed{\frac13}.
\end{aligned}
$$

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
