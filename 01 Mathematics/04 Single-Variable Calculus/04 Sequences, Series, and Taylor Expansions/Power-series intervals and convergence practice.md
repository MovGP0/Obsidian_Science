---
title: "Power-series intervals and convergence practice"
---

> [!TLDR]
> Find radii of convergence, check each endpoint, and use inequalities to test absolute convergence.

## Worked lecture material

**Example 1.** Since $-1\le\cos(2n)\le1$,

$$
0\le\left|\frac{\cos(2n)}{2+3^n}\right|
\le\frac1{2+3^n}\le\left(\frac13\right)^n.
$$

The upper bound gives a convergent geometric series with ratio $1/3$. The series of absolute values converges by comparison.

**Example 2.** For $a_n=\left(\frac{n}{2n+1}\right)^{2n}$, the root test gives

$$
\sqrt[n]{|a_n|}=\left(\frac{n}{2n+1}\right)^2,\qquad
\lim_{n\to\infty}\left(\frac{n}{2n+1}\right)^2=\frac14<1.
$$

Thus $\sum_{n=1}^\infty a_n$ converges absolutely.

**11.8 Power series**

A power series has the form $\sum_{n=0}^\infty c_n(x-a)^n$, with coefficients $c_n$ and expansion point $a$. There are three possibilities.

1. The series converges only at $x=a$.
2. The series converges for all $x$.
3. There is a positive number $R$ such that the series converges for $|x-a|<R$ and diverges for $|x-a|>R$.

**Example 1.** Find the interval and radius of convergence of $f(x)=\sum_{n=1}^\infty(4x+1)^n/n^2$. Apply the ratio test away from $x=-1/4$, where every term is zero.

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{(4x+1)^{n+1}}{(4x+1)^n}\frac{n^2}{(n+1)^2}\right|\\
&=|4x+1|\lim_{n\to\infty}\left(\frac{n}{n+1}\right)^2
=|4x+1|.
\end{aligned}
$$

The condition $|4x+1|<1$ becomes $-1<4x+1<1$, hence $-2<4x<0$ and $-1/2<x<0$. Test both endpoints separately.

- At $x=0$, the series becomes $\sum_{n=1}^\infty 1/n^2$, a convergent $p$-series.
- At $x=-1/2$, the series becomes $\sum_{n=1}^\infty(-1)^n/n^2$, which converges absolutely.

The interval of convergence is $\boxed{[-1/2,0]}$ and its radius is $\boxed{R=1/4}$.

![[Kyle Kabasares - Integral Calculus - Closed interval of convergence.png|**Fig. 52** The interval includes both endpoints, and its radius is measured from the center $x=-1/4$.]]

**Example 2.** Consider $\sum_{n=1}^\infty x^n/(5^n n^5)$. For $x\ne0$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\right|
\frac{5^n}{5^{n+1}}\frac{n^5}{(n+1)^5}
=\frac{|x|}{5}.
$$

The transcription keeps $x^n$ in the denominator of the ratio. The ratio is below $1$ when $-5<x<5$, and the series at $x=0$ is zero. At $x=5$, it reduces to the convergent $p$-series $\sum 1/n^5$. At $x=-5$, it becomes $\sum(-1)^n/n^5$, which converges absolutely. The interval is $[-5,5]$.

Using the cubic Maclaurin polynomial of $e^x$,

$$
e^{0.3}\approx1+0.3+\frac{0.3^2}{2!}+\frac{0.3^3}{3!}.
$$

**Example 1.** Consider $\sum_{n=1}^\infty \frac{2^n}{n}(4x-8)^n$. For $x\ne2$,

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{2^{n+1}}{2^n}\frac{n}{n+1}
\frac{(4x-8)^{n+1}}{(4x-8)^n}\right|\\
&=2|4x-8|.
\end{aligned}
$$

The condition $2|4x-8|<1$ gives $-\frac12<4x-8<\frac12$, then $\frac{15}{2}<4x<\frac{17}{2}$, and hence $\frac{15}{8}<x<\frac{17}{8}$. At $x=2$, the terms are zero.

At $x=15/8$, $4x-8=-1/2$, and the series becomes

$$
\sum_{n=1}^\infty\frac{2^n(-1/2)^n}{n}
=\sum_{n=1}^\infty\frac{(-1)^n}{n}.
$$

It converges by the alternating series test with $b_n=1/n$.

##### Endpoint test

At $x=17/8$, $4x-8=1/2$, so

$$
\sum_{n=1}^\infty\frac{2^n}{n}(4x-8)^n
=\sum_{n=1}^\infty\frac{2^n(1/2)^n}{n}
=\sum_{n=1}^\infty\frac1n.
$$

The harmonic series diverges. The interval of convergence is $\boxed{[15/8,17/8)}$.

![[Kyle Kabasares - Integral Calculus - Half open interval of convergence.png|**Fig. 53** The interval includes the left endpoint $15/8$ and excludes the right endpoint $17/8$.]]

**Example.** For $\sum_{n=1}^\infty x^n/n!$, apply the ratio test for $x\ne0$.

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\frac{n!}{(n+1)!}\right|
=|x|\lim_{n\to\infty}\frac1{n+1}=0<1.
$$

The series also converges at $x=0$, so it converges for every $x$ and $\boxed{R=\infty}$.

##### Functions as power series

For $|r|<1$, the geometric series satisfies $\sum_{n=1}^\infty ar^{n-1}=a/(1-r)$. With $a=1$ and $r=x$,

$$
\frac1{1-x}=\sum_{n=1}^\infty x^{n-1}=1+x+x^2+x^3+\cdots,\qquad |x|<1.
$$

**Example 1.** Replace $x$ by $-x$.

$$
\frac1{1+x}=\frac1{1-(-x)}
=1-x+x^2-x^3+x^4-\cdots
=\sum_{n=0}^\infty(-1)^n x^n.
$$

Integrating term by term for $|x|<1$ gives

$$
\ln|1+x|=x-\frac{x^2}{2}+\frac{x^3}{3}-\frac{x^4}{4}+\cdots+C.
$$

At $x=0$, the left-hand side is $\ln 1=0$, so $C=0$.

##### Taylor series

A power series about $a$ has the form $\sum_{n=0}^\infty c_n(x-a)^n$. To express $e^x$ as a power series about $0$, start with

$$
e^x=c_0+c_1x+c_2x^2+c_3x^3+\cdots.
$$

At $x=0$, $e^0=1=c_0$. Differentiate and evaluate at zero to obtain the next coefficients.

$$
\begin{aligned}
\frac{d}{dx}e^x&=c_1+2c_2x+3c_3x^2+\cdots,
&1&=c_1,\\
\frac{d^2}{dx^2}e^x&=2c_2+3\cdot2\,c_3x+4\cdot3\,c_4x^2+\cdots,
&1&=2c_2,\\
\frac{d^3}{dx^3}e^x&=3\cdot2\,c_3+4\cdot3\cdot2\,c_4x+\cdots,
&1&=3\cdot2\,c_3.
\end{aligned}
$$

Thus $c_2=1/2$ and $c_3=1/6$. In general $c_n=1/n!$, so

$$
\boxed{e^x=\sum_{n=0}^\infty\frac{x^n}{n!}}
=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots.
$$

##### Taylor polynomial

If $f(x)=\sum_{n=0}^\infty c_n(x-a)^n$ for $|x-a|<R$, then the coefficients are

$$
\boxed{c_n=\frac{f^{(n)}(a)}{n!}}.
$$

For $f(x)=e^x$ and $a=0$, this gives the same coefficients.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $e^x$ | $1$ | $1/0!$ |
| $1$ | $e^x$ | $1$ | $1/1!$ |
| $2$ | $e^x$ | $1$ | $1/2!$ |
| $3$ | $e^x$ | $1$ | $1/3!$ |
| $4$ | $e^x$ | $1$ | $1/4!$ |
| $5$ | $e^x$ | $1$ | $1/5!$ |

##### Maclaurin series

When $a=0$, the Taylor series $\sum c_n(x-a)^n$ becomes the Maclaurin series $\sum c_nx^n$. Use $c_n=f^{(n)}(0)/n!$.

##### Sine

Find the Maclaurin series and the third-degree Taylor polynomial for $f(x)=\sin x$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\sin x$ | $0$ | $0/0!$ |
| $1$ | $\cos x$ | $1$ | $1/1!=1$ |
| $2$ | $-\sin x$ | $0$ | $0/2!=0$ |
| $3$ | $-\cos x$ | $-1$ | $-1/3!$ |
| $4$ | $\sin x$ | $0$ | $0/4!=0$ |
| $5$ | $\cos x$ | $1$ | $1/5!$ |

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\frac{x^9}{9!}-\cdots
=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!}}.
$$

$$
\boxed{T_3(x)=x-\frac{x^3}{3!}}.
$$

##### Cosine

For $f(x)=\cos x$, the derivative values give the even powers.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\cos x$ | $1$ | $1/0!$ |
| $1$ | $-\sin x$ | $0$ | $0/1!$ |
| $2$ | $-\cos x$ | $-1$ | $-1/2!$ |
| $3$ | $\sin x$ | $0$ | $0/3!$ |
| $4$ | $\cos x$ | $1$ | $1/4!$ |
| $5$ | $-\sin x$ | $0$ | $0/5!$ |
| $6$ | $-\cos x$ | $-1$ | $-1/6!$ |

$$
\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\frac{x^6}{6!}+\cdots
=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n}}{(2n)!}}.
$$

**Example.** Find the Taylor series of $f(x)=\ln x$. Choose $a=1$ as the expansion point and write $\ln x=\sum_{n=0}^\infty c_n(x-1)^n$ with $c_n=f^{(n)}(1)/n!$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(1)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\ln x$ | $0$ | $0$ |
| $1$ | $1/x$ | $1$ | $1/1!=1$ |
| $2$ | $-1/x^2$ | $-1$ | $-1/2$ |
| $3$ | $2/x^3$ | $2$ | $2/3!=1/3$ |
| $4$ | $-6/x^4$ | $-6$ | $-6/4!=-6/24=-1/4$ |

$$
\begin{aligned}
\ln x
&=(x-1)-\frac12(x-1)^2+\frac13(x-1)^3-\frac14(x-1)^4+\cdots\\
&=\boxed{\sum_{n=1}^\infty \frac{(-1)^{n+1}(x-1)^n}{n}}.
\end{aligned}
$$

This expansion represents $\ln x$ at least for $|x-1|<1$.

**Kyle Kabasares — Midterm 3 study guide**

##### Sequences

- $1,2,3,4,\ldots$ tends to $+\infty$ and diverges.
- $1,0.1,0.01,0.001,0.0001,\ldots$ converges to $0$.

**Example.** For $a_n=3(-1)^n/n!$, the first three terms are

$$
a_1=\frac{3(-1)^1}{1!}=\boxed{-3},\qquad
a_2=\frac{3(-1)^2}{2!}=\boxed{\frac32},\qquad
a_3=\frac{3(-1)^3}{3!}=-\frac36=\boxed{-\frac12}.
$$

##### Converge or diverge?

For $a_n=n(n-1)$, the limit is $+\infty$, so the sequence diverges. In the next example,

$$
\lim_{n\to\infty}\frac{2^n}{3^{n+1}}
=\lim_{n\to\infty}\frac{2^n}{3\cdot3^n}
=\frac13\lim_{n\to\infty}\left(\frac23\right)^n=0.
$$

##### Geometric sequences

Each term after the first is obtained by multiplying the preceding term by a fixed nonzero number called the common ratio. If the first term is $a_1$ and the common ratio is $r$, then the $n$th term is $a_n=a_1r^{n-1}$.

**Example.** For the geometric sequence $3,6,12,24,48,\ldots$, derive a formula for $a_n$ and find $a_8$.

$$
a_1=3,\qquad a_2=3\cdot2,\qquad a_3=3\cdot2^2,\qquad a_4=3\cdot2^3.
$$

The exponent is one less than the index, so $\boxed{a_n=3\cdot2^{n-1}}$. In particular,

$$
a_8=3\cdot2^{8-1}=3\cdot2^7=3\cdot128=\boxed{384}.
$$

##### Series

A series is a sum of numbers.

##### Geometric series

For $|r|<1$, equivalently $-1<r<1$, the sum is the first term $a$ divided by $1-r$.

$$
1+0.1+0.01+0.001+0.0001+\cdots
=\sum_{n=1}^\infty 1\left(\frac1{10}\right)^{n-1}
=\frac1{1-1/10}
=\boxed{\frac{10}{9}}.
$$

The transcription includes the $0.1$ term implied by the common ratio and the summation formula.

##### Test for divergence

If the terms $a_n$ fail to tend to zero, the series $\sum a_n$ diverges.

**Converge or diverge?**

**Example.** The series $1+0.4+0.16+0.064+\cdots$ is geometric with common ratio $r=0.4$. Since $|r|<1$, it converges to

$$
\sum_{n=1}^\infty\left(\frac4{10}\right)^{n-1}
=\frac1{1-0.4}
=\frac1{1-4/10}
=\frac{10}{6}
=\boxed{\frac53=1.\overline{6}}.
$$

**Example.** The series $\sum_{n=3}^\infty 5(2/3)^{n-1}$ is geometric and converges because $|2/3|<1$. Its first included term is $5(2/3)^2=20/9$.

$$
\sum_{n=3}^\infty5\left(\frac23\right)^{n-1}
=\frac{20/9}{1-2/3}
=\frac{20}{9}\cdot3
=\boxed{\frac{20}{3}}.
$$

**Example.** The series

$$
\sum_{n=1}^\infty\frac{\pi^n}{3^{n+2}}
=\sum_{n=1}^\infty\frac{\pi^n}{3^n\cdot3^2}
=\frac19\sum_{n=1}^\infty\left(\frac\pi3\right)^n
$$

is geometric and diverges because $\pi/3>1$.

**Example.** For $\sum_{n=1}^\infty n^2/(2n^2-1)$,

$$
\lim_{n\to\infty}\frac{n^2}{2n^2-1}=\frac12\ne0,
$$

so the series diverges by the test for divergence.

**Example.** Split the sum into two geometric series.

$$
\begin{aligned}
\sum_{n=1}^\infty\frac{3^n+2^n}{6^n}
&=\sum_{n=1}^\infty\left(\frac36\right)^n+\sum_{n=1}^\infty\left(\frac26\right)^n\\
&=\sum_{n=1}^\infty\left(\frac12\right)^n+\sum_{n=1}^\infty\left(\frac13\right)^n\\
&=\frac{1/2}{1-1/2}+\frac{1/3}{1-1/3}
=1+\frac12
=\boxed{\frac32}.
\end{aligned}
$$

Both common ratios have magnitude less than one.

##### Integral test for series

If $a_n=f(n)$ with $f$ continuous, positive, and decreasing on $[1,\infty)$, then $\sum_{n=1}^\infty a_n$ converges if $\int_1^\infty f(x)\,dx$ converges.

**Example.** For $\sum_{n=1}^\infty ne^{-n^2}$, let $f(x)=xe^{-x^2}$. It is continuous and positive for $x\ge1$, with derivative

$$
f'(x)=e^{-x^2}+x e^{-x^2}(-2x)=e^{-x^2}(1-2x^2).
$$

The derivative vanishes at $x=\pm1/\sqrt2$ and is negative for $x\ge1$, so $f$ decreases on the required interval. With $u=-x^2$ and $du=-2x\,dx$,

$$
\begin{aligned}
\int_1^\infty xe^{-x^2}\,dx
&=\lim_{t\to\infty}\int_1^t xe^{-x^2}\,dx\\
&=\lim_{t\to\infty}\left[-\frac12e^{-x^2}\right]_1^t\\
&=-\frac12\lim_{t\to\infty}(e^{-t^2}-e^{-1})
=\boxed{\frac1{2e}}.
\end{aligned}
$$

The series converges by the integral test.

##### Alternating series

For $\sum_{n=1}^\infty(-1)^n b_n$ with $b_n\ge0$, check that $b_{n+1}\le b_n$ and $\lim_{n\to\infty}b_n=0$. It is enough for the inequality to hold from some index onward.

**Example.** For $\sum_{n=1}^\infty(-1)^n/n$, let $b_n=1/n$. Then $1/(n+1)\le1/n$ because $n\le n+1$ for $n\ge1$. Also $\lim_{n\to\infty}1/n=0$. The series converges by the alternating series test.

**Example.** For $\sum_{n=1}^\infty(-1)^{n-1}\ln(n)/n$, use $b_n=\ln(n)/n$. By l'Hôpital's rule on the real-variable limit,

$$
\lim_{x\to\infty}\frac{\ln x}{x}
=\lim_{x\to\infty}\frac1x=0.
$$

For $f(x)=\ln(x)/x$,

$$
f'(x)=\frac{x(1/x)-\ln(x)\cdot1}{x^2}
=\frac{1-\ln x}{x^2}.
$$

The derivative vanishes at $x=e$ and is negative for $x>e$. The tail from $n=3$ therefore has decreasing magnitudes tending to zero, so the series converges by the alternating series test.

**Example.** Since $\cos(n\pi)=(-1)^n$,

$$
\sum_{n=1}^\infty\frac{\cos(n\pi)}{n^{3/4}}
=\sum_{n=1}^\infty(-1)^n\frac1{n^{3/4}}.
$$

The magnitudes tend to zero. They are decreasing because $n^{3/4}\le(n+1)^{3/4}$ for $n\ge1$, so $1/(n+1)^{3/4}\le1/n^{3/4}$. The series converges by the alternating series test.

##### Alternating series estimation theorem

For an alternating series $\sum(-1)^n b_n$ with nonnegative magnitudes $b_n$ decreasing to zero, the error in the partial sum $S_n$ is at most the magnitude of the first neglected term.

$$
|R_n|=|S-S_n|\le b_{n+1}.
$$

**Example.** For $\sum_{n=1}^\infty(-1)^{n+1}/n$,

$$
S=1-\frac12+\frac13-\frac14+\frac15-\frac16+\cdots.
$$

Taking $S_3=1-\frac12+\frac13$ gives $|S-S_3|\le 1/4=0.25$, since the first neglected term is $-1/4$.

**Example.** Approximate $\ln 2$ with absolute error at most $0.0005$, the tolerance used in the notes for three decimal places.

$$
\ln 2=\sum_{n=1}^\infty\frac{(-1)^{n+1}}{n},
\qquad
b_n=\frac1n,\qquad b_{n+1}=\frac1{n+1}.
$$

Using the strict bound shown in the calculation,

$$
\frac1{n+1}<0.0005
\quad\Longrightarrow\quad
2000<n+1
\quad\Longrightarrow\quad
\boxed{1999<n}.
$$

Thus $2000$ terms suffice under that bound. The transcription uses the sign convention that starts with $+1$, consistent with the stated sum $\ln 2$.

**Example.** Test $\sum_{n=1}^\infty \left(\frac{n}{n+1}\right)^{n^2}$ for convergence. By the root test,

$$
\begin{aligned}
\lim_{n\to\infty}\sqrt[n]{|a_n|}
&=\lim_{n\to\infty}\left[\left(\frac{n}{n+1}\right)^{n^2}\right]^{1/n}\\
&=\lim_{n\to\infty}\left(\frac{n}{n+1}\right)^n
=\lim_{n\to\infty}\frac{1}{(1+1/n)^n}
=\frac1e<1.
\end{aligned}
$$

The series converges absolutely.

##### Representations of functions as power series

Use the geometric series identity

$$
1+x+x^2+x^3+x^4+\cdots
=\frac1{1-x}
=\sum_{n=0}^\infty x^n,\qquad |x|<1.
$$

**Example.** Replace the common ratio $x$ by $-x$.

$$
\frac1{1+x}
=\frac1{1-(-x)}
=\sum_{n=0}^\infty(-x)^n,\qquad |x|<1.
$$

The interval is $\boxed{-1<x<1}$.

**Example.** Replace the common ratio $x$ by $x^3$.

$$
\frac1{1-x^3}
=\sum_{n=0}^\infty(x^3)^n
=\sum_{n=0}^\infty x^{3n}.
$$

The condition $|x^3|<1$ gives $|x|<1$, hence $\boxed{-1<x<1}$.

**Example.** Use the geometric series with ratio $-9x^2$.

$$
\frac1{1+9x^2}=\frac1{1-(-9x^2)}
=\sum_{n=0}^\infty(-9x^2)^n.
$$

The convergence condition $|-9x^2|<1$ gives $|x|^2<1/9$, hence $\boxed{-1/3<x<1/3}$.

**Example.** Factor out $x$ and use the geometric series with ratio $-4x$.

$$
\frac{x}{4x+1}
=x\frac1{1+4x}
=x\frac1{1-(-4x)}
=x\sum_{n=0}^\infty(-4x)^n
=\boxed{\sum_{n=0}^\infty(-4)^nx^{n+1}},\qquad |x|<\frac14.
$$

##### Finding the interval of convergence for power series

**Example.** Consider $\sum_{n=1}^\infty x^n/\sqrt n$. For $x\ne0$ the ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\right|
\frac{\sqrt n}{\sqrt{n+1}}
=|x|.
$$

The radius is $R=1$, and the series converges absolutely for $-1<x<1$, including $x=0$ directly. At $x=-1$ the series becomes $\sum_{n=1}^\infty(-1)^n/n^{1/2}$. The magnitudes $b_n=1/n^{1/2}$ tend to zero. To check decrease, write $b_n=f(n)$ for $f(x)=x^{-1/2}$. Then $f'(x)=-\frac12x^{-3/2}<0$ for $x>0$. The alternating series test gives convergence at $x=-1$.

At $x=1$, the series from [[#Finding the interval of convergence for power series|the section on Finding the interval of convergence for power series]] becomes

$$
\sum_{n=1}^\infty\frac{1^n}{\sqrt n}=\sum_{n=1}^\infty\frac1{n^{1/2}}.
$$

This $p$-series diverges because $p=1/2$. The interval of convergence is $\boxed{[-1,1)}$.

**Example.** Find the interval of convergence of $\sum_{n=0}^\infty n^3(x-5)^n$. For $x\ne5$, the ratio test gives

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{(n+1)^3(x-5)^{n+1}}{n^3(x-5)^n}\right|\\
&=|x-5|\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^3
=|x-5|.
\end{aligned}
$$

The transcription retains the factor $|x-5|$ after taking the limit. The condition $|x-5|<1$ gives $4<x<6$. At $x=5$ the series is zero.

- At $x=4$, the series becomes $\sum_{n=0}^\infty n^3(-1)^n$. The magnitudes tend to $+\infty$, so the terms fail to tend to zero.
- At $x=6$, it becomes $\sum_{n=0}^\infty n^3$. The terms tend to $+\infty$.

Both endpoints fail the test for convergence of the terms to zero. The interval of convergence is $\boxed{(4,6)}$.

**Example.** Find the interval and radius of convergence of $\sum_{n=0}^\infty (x+2)^n/(n+3)$. For $x\ne-2$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{(x+2)^{n+1}}{(x+2)^n}\right|\frac{n+3}{n+4}
=|x+2|.
$$

The condition $|x+2|<1$ gives $-1<x+2<1$, hence $-3<x<-1$. At the center $x=-2$, only the constant term is nonzero.

At $x=-3$, the series becomes

$$
\sum_{n=0}^\infty\frac{(-3+2)^n}{n+3}
=\sum_{n=0}^\infty\frac{(-1)^n}{n+3}.
$$

The magnitudes $b_n=1/(n+3)$ tend to zero. For $f(x)=(x+3)^{-1}$, the derivative is $f'(x)=-(x+3)^{-2}<0$ for $x\ge0$. Thus $b_n$ is decreasing, and the alternating series test gives convergence.

At $x=-1$, the series becomes

$$
\sum_{n=0}^\infty\frac{(-1+2)^n}{n+3}
=\sum_{n=0}^\infty\frac1{n+3}.
$$

The notes compare $1/(n+3)<1/n$ for $n>0$. This bounds the terms above by a divergent series. The endpoint divergence follows by reindexing $\sum_{n=0}^\infty1/(n+3)=\sum_{k=3}^\infty1/k$, a tail of the harmonic series.

The interval is $\boxed{[-3,-1)}$ and the radius is $\boxed{R=(-1-(-3))/2=1}$.

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
