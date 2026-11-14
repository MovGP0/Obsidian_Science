---
title: "Taylor and Maclaurin series problems"
---

> [!TLDR]
> Build Taylor series from derivatives and known expansions, then estimate the remainder of a truncation.

## Worked lecture material

##### Taylor and Maclaurin series

**Example.** Find the Maclaurin series for $f(x)=e^{5x}$. At $a=0$, the Taylor series $\sum c_n(x-a)^n$ becomes $\sum c_nx^n$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n=f^{(n)}(0)/n!$ |
| --- | --- | --- | --- |
| $0$ | $e^{5x}$ | $1$ | $1/0!$ |
| $1$ | $5e^{5x}$ | $5$ | $5/1!=5$ |
| $2$ | $25e^{5x}$ | $25$ | $25/2!=5^2/2!$ |
| $n$ | $5^ne^{5x}$ | $5^n$ | $5^n/n!$ |

The transcription retains the factorials in the coefficient column, consistent with the boxed series.

$$
\boxed{e^{5x}=\sum_{n=0}^\infty\frac{5^nx^n}{n!}}.
$$

**Example 2.** For $\sum_{n=1}^\infty 1/n^4$, choose the number of terms so that the remainder $R_n=S-S_n$ is below $0.0005$. The integral-test remainder bound gives

$$
\begin{aligned}
R_n&<\int_n^\infty x^{-4}\,dx\\
&=\lim_{t\to\infty}\left[-\frac1{3x^3}\right]_n^t
=\lim_{t\to\infty}\left(\frac1{3n^3}-\frac1{3t^3}\right)
=\frac1{3n^3}.
\end{aligned}
$$

To make the upper bound smaller than $0.0005$, require

$$
\frac1{3n^3}<0.0005
\quad\Longleftrightarrow\quad
3n^3>\frac1{0.0005}=2000
\quad\Longleftrightarrow\quad
n>\sqrt[3]{\frac{2000}{3}}.
$$

The smallest integer satisfying this bound is $\boxed{9}$. The handwritten calculation uses $12000$ for the reciprocal and then takes a square root. The transcription uses $2000$ and the cube root.

**Example 3.** For $\sum_{n=1}^\infty 1/[n\sqrt{n^2+1}]$, take

$$
a_n=\frac1{n\sqrt{n^2+1}},\qquad b_n=\frac1{n\sqrt{n^2}}=\frac1{n^2}.
$$

For $n\ge1$, the inequality $n^2<n^2+1$ gives $n<\sqrt{n^2+1}$, hence $n^2<n\sqrt{n^2+1}$ and $a_n<b_n$. The series $\sum b_n$ converges because it is a $p$-series with $p=2$. Therefore $\sum a_n$ converges by comparison.

**Example.** For $a_n=(3+\cos^2 n)/n^2$, start with $0\le\cos^2 n\le1$. Adding $3$ and dividing by $n^2$ gives

$$
\frac3{n^2}\le\frac{3+\cos^2 n}{n^2}\le\frac4{n^2}.
$$

The upper comparison series is $\sum_{n=1}^\infty b_n=4\sum_{n=1}^\infty 1/n^2$ with $b_n=4/n^2$. It converges because $p=2>1$. Therefore $\sum a_n$ converges by the comparison test.

**Example.** Consider $a_n=(3n^3-2n^2)/(n^5-n^3)$ and compare with $b_n=3n^3/n^5=3/n^2$. The source starts the series at $n=1$, where the denominator vanishes. The convergence calculation applies to the series starting at $n=2$.

$$
\begin{aligned}
\lim_{n\to\infty}\frac{a_n}{b_n}
&=\lim_{n\to\infty}\frac{(3n^3-2n^2)n^2}{3(n^5-n^3)}\\
&=\lim_{n\to\infty}\frac{3n^5-2n^4}{3n^5-3n^3}
=1.
\end{aligned}
$$

Since $\sum_{n=2}^\infty b_n$ converges, $\sum_{n=2}^\infty a_n$ converges by limit comparison.

**Example.** Test $\sum_{n=1}^\infty(-1)^{n-1}ne^{-n}$. Its term magnitudes are $b_n=ne^{-n}$. For $f(x)=xe^{-x}$, the product rule gives

$$
f'(x)=(1)e^{-x}+x(-e^{-x})
=e^{-x}-xe^{-x}
=e^{-x}(1-x).
$$

Thus $f$ decreases for $x>1$. Also, by l'Hôpital's rule applied to the corresponding real-variable limit,

$$
\lim_{n\to\infty}ne^{-n}
=\lim_{x\to\infty}\frac{x}{e^x}
=\lim_{x\to\infty}\frac1{e^x}=0.
$$

The series converges by the alternating series test.

**Example.** The page gives the following series as a new exercise.

$$
\sum_{n=2}^\infty\frac{9^n}{(-2)^{n+1}n}.
$$

##### Absolute convergence, conditional convergence, and divergence

1. If $\sum |a_n|$ converges, then $\sum a_n$ also converges and is called **absolutely convergent**.
2. If $\sum |a_n|$ diverges but $\sum a_n$ converges, then $\sum a_n$ is called **conditionally convergent**.
3. If both series diverge, then $\sum a_n$ is **divergent**.

**Example.** For $a_n=(-10)^n/n!$, the series of absolute values is $\sum_{n=0}^\infty 10^n/n!$. By the ratio test,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{10^{n+1}}{(n+1)!}\frac{n!}{10^n}
=\lim_{n\to\infty}\frac{10}{n+1}=0<1.
$$

The series converges absolutely.

**Example.** Consider $\sum_{n=1}^\infty(-1)^{n+1}/\sqrt[4]n$. Its absolute-value series is $\sum_{n=1}^\infty 1/n^{1/4}$, a divergent $p$-series. For $b_n=n^{-1/4}$, $\lim_{n\to\infty}b_n=0$. Also, $f(x)=x^{-1/4}$ has $f'(x)=-\tfrac14x^{-5/4}<0$ for $x>0$, so the magnitudes decrease. The alternating series test gives convergence, and the original series is conditionally convergent.

**Example.** Consider $\sum_{n=1}^\infty(-1)^nn/(n+5)$. The terms of its absolute-value series satisfy $\lim_{n\to\infty}n/(n+5)=1\ne0$, so that series diverges. For the original series the even terms approach $1$ and the odd terms approach $-1$. Its term limit does not exist, so the original series also diverges by the test for divergence.

##### Root test

Let $L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$.

1. If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
2. If $L>1$ or $L=+\infty$, then the series diverges.
3. If $L=1$, the test is inconclusive.

**Example.** For $a_n=\left(\frac{n^2+1}{2n^2+1}\right)^n$,

$$
\lim_{n\to\infty}\sqrt[n]{|a_n|}
=\lim_{n\to\infty}\frac{n^2+1}{2n^2+1}
=\frac12.
$$

The series converges by the root test.

**Example.** For $\sum_{n=1}^\infty n^n/3^{1+3n}$,

$$
\lim_{n\to\infty}\left(\frac{n^n}{3^{1+3n}}\right)^{1/n}
=\lim_{n\to\infty}\frac{n}{3^{1/n}\cdot3^3}
=+\infty.
$$

The series diverges by the root test. The denominator uses $3^{1+3n}=3\cdot3^{3n}$, so its $n$th root tends to $27$.

##### Taylor series

When $f$ is represented by a power series about $a$,

$$
f(x)=\sum_{n=0}^\infty c_n(x-a)^n,\qquad c_n=\frac{f^{(n)}(a)}{n!}.
$$

For $f(x)=\ln x$ and $a=1$:

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(1)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\ln x$ | $0$ | $0$ |
| $1$ | $x^{-1}$ | $1$ | $1$ |
| $2$ | $-x^{-2}$ | $-1$ | $-1/2!$ |
| $3$ | $2x^{-3}$ | $2$ | $2/3!$ |
| $4$ | $-3\cdot2\,x^{-4}$ | $-6$ | $-1/4$ |
| $5$ | $4\cdot3\cdot2\,x^{-5}$ | $24$ | $1/5$ |
| $6$ | $-5\cdot4\cdot3\cdot2\,x^{-6}$ | $-120$ | $-1/6$ |

The coefficients are aligned with their derivative orders using $c_n=f^{(n)}(1)/n!$. For $n\ge1$, $c_n=(-1)^{n+1}/n$, giving

$$
\ln x=\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n}(x-1)^n
=(x-1)-\frac12(x-1)^2+\frac13(x-1)^3-\cdots.
$$

##### Interval of convergence

For $x\ne1$, the ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}|x-1|\frac{n}{n+1}
=|x-1|.
$$

The condition $|x-1|<1$ gives $0<x<2$. At the center $x=1$ all terms vanish.

- At $x=0$, $(-1)^{n+1}(x-1)^n/n=(-1)^{2n+1}/n=-1/n$, so the series diverges.
- At $x=2$, the series is $\sum_{n=1}^\infty(-1)^{n+1}/n$. The magnitudes satisfy $1/(n+1)<1/n$ and tend to zero. The series converges by the alternating series test.

The interval of convergence is $\boxed{(0,2]}$.

##### Logarithmic series

$$
\ln x=\sum_{n=1}^\infty\frac{(-1)^{n+1}(x-1)^n}{n},\qquad 0<x\le2.
$$

##### Challenge problem

Find $\ln 3$. Use $\ln 3=-\ln(1/3)$, so the argument of the series lies in its interval of convergence.

##### Binomial series expansion

The Taylor series about $x=0$ for $f(x)=(1+x)^k$ is the binomial series.

$$
(1+x)^k=\sum_{n=0}^\infty\binom{k}{n}x^n,\qquad |x|<1.
$$

Here $\binom{k}{0}=1$, and for $n\ge1$,

$$
\binom{k}{n}=\frac{k(k-1)(k-2)\cdots(k-n+1)}{n!}.
$$

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $(1+x)^k$ | $1$ | $1/0!$ |
| $1$ | $k(1+x)^{k-1}$ | $k$ | $k/1!$ |
| $2$ | $k(k-1)(1+x)^{k-2}$ | $k(k-1)$ | $k(k-1)/2!$ |
| $3$ | $k(k-1)(k-2)(1+x)^{k-3}$ | $k(k-1)(k-2)$ | $k(k-1)(k-2)/3!$ |

For nonnegative integer $k$, the expansion terminates and the coefficients come from Pascal's triangle. The rows shown are $1$, $1,2,1$, and $1,3,3,1$.

$$
\begin{aligned}
(1+x)^3&=1+3x+3x^2+x^3,\\
(1+x)^4&=1+4x+6x^2+4x^3+x^4.
\end{aligned}
$$

For $k=-1$,

$$
\begin{aligned}
(1+x)^{-1}
&=1-x+\frac{(-1)(-2)}{2!}x^2+\frac{(-1)(-2)(-3)}{3!}x^3+\cdots\\
&=1-x+x^2-x^3+x^4-x^5+\cdots.
\end{aligned}
$$

This is the geometric series for $1/(1+x)$. The transcription uses the plus sign in the denominator to match the alternating terms and the preceding line.

##### How good is the partial sum?

Write $f(x)=T_n(x)+R_n(x)$, where $T_n$ is the Taylor polynomial and $R_n$ is the remainder. The error depends on the distance from the expansion point $x=a$.

![[Kyle Kabasares - Integral Calculus - Sine and cubic Taylor sketch.png|**Fig. 54** The source sketch compares $\sin x$ with its third-degree Taylor polynomial near the expansion point.]]

##### Taylor's inequality

If $M$ is an upper bound for $|f^{(n+1)}|$ on $|x-a|<d$, then throughout that interval

$$
|R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}.
$$

**Example.** Estimate the error when $e^x$ is approximated by its fourth-degree Maclaurin polynomial on $-0.5<x<0.5$.

$$
T_4(x)=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}.
$$

![[Kyle Kabasares - Integral Calculus - Exponential and quartic Taylor sketch.png|**Fig. 55** The handwritten sketch marks the interval from $-0.5$ to $0.5$ around the expansion point.]]

Use $n=4$ and $a=0$. All derivatives of $f(x)=e^x$ equal $e^x$, so $M=e^{0.5}$ is an upper bound for the fifth derivative on the interval.

$$
|R_4(x)|\le\frac{e^{0.5}|x|^5}{5!}
<\frac{e^{0.5}(0.5)^5}{5!}
\approx0.0004294<0.0005.
$$

The transcription retains the fifth power of $|x|$ and gives the bound before rounding it to the handwritten $0.0004$.

**Example.** Determine how many terms of the Maclaurin expansion of $\sin x$ are needed to estimate $\sin(0.5)$ within $0.00005$, the tolerance used here for four decimal places.

Use $a=0$ and $f(x)=\sin x$ in Taylor's inequality,

$$
|R_n(x)|\le\frac{M|x-a|^{n+1}}{(n+1)!}.
$$

The notes first consider $\sin(0.5)$ as a derivative bound and then use $M=1$, which bounds the magnitudes of both sine and cosine and therefore works for every derivative order.

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots.
$$

![[Kyle Kabasares - Integral Calculus - Sine near the Maclaurin center.png|**Fig. 56** The sketch highlights the sine curve near zero and marks $x=-0.5$ and $x=0.5$.]]

With $M=1$, require

$$
|R_n(0.5)|\le\frac{(0.5)^{n+1}}{(n+1)!}\le0.00005.
$$

By trial, the first degree satisfying this bound is $\boxed{n=5}$. The resulting polynomial has three nonzero terms, $x-x^3/3!+x^5/5!$.

##### Creating new series from known series

Find the Taylor series for $f(x)=\sin(x^2)$, $f(x)=\cos^2 x$, and $f(x)=1/(1+x^2)$.

Substitute $x^2$ into the sine series.

$$
\sin(x^2)=x^2-\frac{x^6}{3!}+\frac{x^{10}}{5!}-\frac{x^{14}}{7!}+\cdots.
$$

For $\cos^2 x$, use the double-angle identity and substitute $2x$ into the cosine series.

$$
\cos^2 x=\frac12[1+\cos(2x)],
\qquad
\cos(2x)=1-\frac{(2x)^2}{2!}+\frac{(2x)^4}{4!}-\cdots.
$$

##### New series by differentiation and integration

- Find a series for $\cos x$ starting with the series for $\sin x$.
- Find a series for $\ln(1-x)$ starting with the series for $(1-x)^{-1}$.
- Find a series for $\arctan x$ starting with the series for $(1+x^2)^{-1}$.

For $|x|<1$, the geometric series gives

$$
\frac1{1+x^2}=1-x^2+x^4-x^6+x^8-\cdots.
$$

Integrate term by term from $0$ to $x$.

$$
\begin{aligned}
\arctan x&=\int_0^x\frac{dt}{1+t^2}
=\int_0^x(1-t^2+t^4-t^6+t^8-\cdots)\,dt\\
&=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots.
\end{aligned}
$$

At the endpoint $x=1$, the integrated series converges by the alternating series test and gives

$$
\arctan 1=\frac{\pi}{4}=1-\frac13+\frac15-\frac17+\cdots.
$$

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| — | $\unit{lbf/ft}$ | Cable weight per unit length | Weight of one foot of cable. |
| — | $\unit{lbf}$ | Coal weight | Constant load carried by the cable. |
| — | $\unit{kg/m}$ | Water loss per unit lift | The decrease in water mass per meter of bucket travel. |
