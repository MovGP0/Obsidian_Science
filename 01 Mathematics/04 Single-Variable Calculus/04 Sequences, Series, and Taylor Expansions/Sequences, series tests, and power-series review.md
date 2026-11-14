---
title: "Sequences, series tests, and power-series review"
---

> [!TLDR]
> Worked problems compare sequences and series, choose convergence tests, and handle power-series endpoints separately.

## Worked lecture material

##### Sequences

A sequence is an ordered list of numbers. The first term is $a_1$, the second is $a_2$, and the $n$th term is $a_n$.

**Example.** Find a formula for the general term of the sequence

$$
\frac35,\quad -\frac4{25},\quad \frac5{125},\quad -\frac6{625},\quad \ldots.
$$

The numerators have magnitudes $n+2$, the denominators are $5^n$, and the signs alternate. The boxed formula in the notes gives a minus sign for the fourth term.

$$
\boxed{a_n=(-1)^{n-1}\frac{n+2}{5^n}}.
$$

##### Monotonic sequence theorem

Every bounded monotonic sequence converges.

- A sequence is bounded above if there is a number $M$ such that $a_n\le M$ for all $n\ge1$.
- It is bounded below if there is a number $m$ such that $m\le a_n$ for all $n\ge1$.
- A sequence is monotonic if it is increasing or decreasing.

**Example.** List the first five terms of $a_n=2n/(n^2+1)$.

$$
a_1=\frac{2(1)}{1^2+1}=1,\qquad
a_2=\frac45,\qquad
a_3=\frac6{10},\qquad
a_4=\frac8{17},\qquad
a_5=\frac{10}{26}.
$$

**Examples.** Find a formula for the general term of each sequence.

$$
1,\ \frac13,\ \frac15,\ \frac17,\ \frac19,\ \ldots
\qquad\Longrightarrow\qquad \boxed{a_n=\frac1{2n-1}}.
$$

The first terms are $a_1=1$, $a_2=1/[2(2)-1]=1/3$, and $a_3=1/[2(3)-1]=1/5$.

$$
\frac12,\ -\frac43,\ \frac94,\ -\frac{16}5,\ \frac{25}6,\ \ldots
\qquad\Longrightarrow\qquad \boxed{a_n=(-1)^{n-1}\frac{n^2}{n+1}}.
$$

Using the equivalent sign factor $(-1)^{n+1}$ gives $a_1=(-1)^{1+1}(1)^2/(1+1)=1/2$ and $a_2=(-1)^{2+1}(2)^2/(2+1)=-4/3$.

**Examples.** Determine whether each sequence converges and find its limit if it does.

1. Let $a_n=\tan\left(\frac{2n\pi}{1+8n}\right)$ and $b_n=\frac{2n\pi}{1+8n}$. Then

   $$
   \lim_{n\to\infty}b_n
   =\lim_{n\to\infty}\frac{2\pi}{1/n+8}
   =\frac{2\pi}{8}
   =\frac{\pi}{4}.
   $$

   By continuity of tangent at $\pi/4$, $\lim_{n\to\infty}a_n=\tan(\pi/4)=\boxed{1}$.

2. Let $a_n=\frac{e^n+e^{-n}}{e^{2n}-1}$. Multiply the numerator and denominator by $e^{-n}$.

   $$
   a_n=\frac{1+e^{-2n}}{e^n-e^{-n}}.
   $$

   The numerator tends to $1$ and the denominator tends to $+\infty$, so $\lim_{n\to\infty}a_n=\boxed{0}$.

##### Sequence limits

Apply l'Hôpital's rule to the corresponding real-variable limits. For $a_n=n^2e^{-n}$, two applications give

$$
\lim_{x\to\infty}\frac{x^2}{e^x}
=\lim_{x\to\infty}\frac{2x}{e^x}
=\lim_{x\to\infty}\frac{2}{e^x}
=\boxed{0}.
$$

The last quotient tends to zero directly. The sequence has the same limit.

For $a_n=\ln n/\ln(3n)$,

$$
\lim_{x\to\infty}\frac{\ln x}{\ln(3x)}
=\lim_{x\to\infty}\frac{1/x}{3/(3x)}
=\boxed{1}.
$$

##### Series

A series is a sum of terms. Its partial sums are

$$
\begin{aligned}
s_1&=a_1,\\
s_2&=a_1+a_2,\\
s_3&=a_1+a_2+a_3,\\
s_n&=a_1+a_2+\cdots+a_{n-1}+a_n=\sum_{i=1}^n a_i.
\end{aligned}
$$

##### Geometric series

A geometric series has first term $a=a_1$, common ratio $r$, and general term $a_n=a_1r^{n-1}$.

$$
a+ar+ar^2+ar^3+\cdots=\sum_{n=1}^\infty ar^{n-1}.
$$

For $|r|<1$, the sum is $a/(1-r)$.

**Example.** Find $\displaystyle\sum_{n=3}^\infty 5(2/3)^{n-1}$. Its first included term is $5(2/3)^2=20/9$, and its common ratio is $2/3$.

$$
\sum_{n=3}^\infty 5\left(\frac23\right)^{n-1}
=\frac{20/9}{1-2/3}
=\frac{20}{9}\cdot3
=\boxed{\frac{20}{3}}.
$$

**Example.** The series

$$
\sum_{n=1}^\infty\frac{\pi^n}{3^{n+2}}
=\sum_{n=1}^\infty\frac{\pi^n}{3^n\,3^2}
=\frac19\sum_{n=1}^\infty\left(\frac{\pi}{3}\right)^n
$$

is a divergent geometric series because $|\pi/3|>1$.

##### $p$-series

The series $\sum_{n=1}^\infty 1/n^p$ converges if $p>1$ and diverges if $p\le1$.

##### Tests for convergence and divergence

1. **Test for divergence.** If $\lim_{n\to\infty}a_n$ does not exist or is unequal to zero, then $\sum_{n=1}^\infty a_n$ diverges.
2. **Integral test.** Suppose $f$ is continuous, positive, and decreasing on $[1,\infty)$ and $a_n=f(n)$. Then $\sum_{n=1}^\infty a_n$ converges if and only if $\int_1^\infty f(x)\,dx$ converges.
3. **Comparison test.** Suppose $\sum a_n$ and $\sum b_n$ have positive terms.
   - If $\sum b_n$ converges and $a_n\le b_n$ for every $n$, then $\sum a_n$ converges.
   - If $\sum b_n$ diverges and $a_n\ge b_n$ for every $n$, then $\sum a_n$ diverges.

4. **Limit comparison test.** Suppose $\sum a_n$ and $\sum b_n$ have positive terms. If $\lim_{n\to\infty}a_n/b_n=c$ for a finite $c>0$, then both series converge or both diverge.
5. **Alternating series test.** The alternating series $\sum_{n=1}^\infty(-1)^{n-1}b_n$ converges if its term magnitudes satisfy $b_{n+1}\le b_n$ for all $n$ and $\lim_{n\to\infty}b_n=0$.
6. **Ratio test.** Let $L=\lim_{n\to\infty}|a_{n+1}/a_n|$.
   - If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
   - If $L>1$ or $L=+\infty$, then the series diverges.
   - If $L=1$, the test is inconclusive.
7. **Root test.** Let $L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$.
   - If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
   - If $L>1$ or $L=+\infty$, then the series diverges.
   - If $L=1$, the test is inconclusive.

##### Error estimation

##### Remainder estimate for the integral test

Let $S$ be the sum of the series with $a_n=f(n)$, and let $S_n$ be its $n$th partial sum. Under the integral-test hypotheses, the remainder $R_n=S-S_n$ satisfies

$$
\int_{n+1}^\infty f(x)\,dx\le R_n\le\int_n^\infty f(x)\,dx.
$$

The integral starting at $n$ gives an upper bound for the remainder.

##### Alternating series estimation theorem

Suppose $S=\sum_{n=1}^\infty(-1)^{n-1}b_n$, where $0\le b_{n+1}\le b_n$ and $\lim_{n\to\infty}b_n=0$. Then

$$
|R_n|=|S-S_n|\le b_{n+1}.
$$

##### Ratio test example

For the series $\sum_{n=1}^\infty 1/(n+3^n)$ written at the start of the example, the ratio is

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{n+3^n}{n+1+3^{n+1}}
=\lim_{n\to\infty}\frac{n/3^n+1}{(n+1)/3^n+3}
=\frac13<1.
$$

The handwritten calculation below that expression uses $a_n=1/(n\,3^n)$, which also gives the limit $1/3$.

$$
\lim_{n\to\infty}\frac{n}{n+1}\frac{3^n}{3^{n+1}}
=1\cdot\frac13=\frac13.
$$

Both series converge by the ratio test.

##### Root test example

For $\sum_{n=1}^\infty (2n+1)^n/n^{2n}$,

$$
\sqrt[n]{|a_n|}
=\left[\frac{(2n+1)^n}{n^{2n}}\right]^{1/n}
=\frac{2n+1}{n^2}.
$$

Its limit is $\lim_{n\to\infty}(2/n+1/n^2)=0$. The series converges absolutely by the root test.

**Example.** For $\sum_{n=1}^\infty(-1)^n n/(n+2)$, the magnitudes of the terms satisfy

$$
\lim_{n\to\infty}|a_n|=\lim_{n\to\infty}\frac{n}{n+2}
=\lim_{n\to\infty}\frac{1}{1+2/n}=1.
$$

The terms themselves have no limit. The even subsequence tends to $1$ and the odd subsequence tends to $-1$. The series diverges by the test for divergence.

**Example.** For $\sum_{n=2}^\infty 1/(n\sqrt{\ln n})$, use $f(x)=1/(x\sqrt{\ln x})$, which is continuous, positive, and decreasing for $x\ge2$. Set $u=\ln x$ and $du=dx/x$.

$$
\begin{aligned}
\int_2^\infty\frac{dx}{x\sqrt{\ln x}}
&=\lim_{t\to\infty}\int_2^t\frac{dx}{x\sqrt{\ln x}}\\
&=\lim_{t\to\infty}\int_{\ln 2}^{\ln t}u^{-1/2}\,du\\
&=\lim_{t\to\infty}\left(2\sqrt{\ln t}-2\sqrt{\ln 2}\right)
=+\infty.
\end{aligned}
$$

The series diverges by the integral test. The transcription uses $\ln t$ as the transformed upper limit.

**Example.** For $\sum_{k=1}^\infty k^2e^{-k}=\sum_{k=1}^\infty k^2/e^k$, the ratio test gives

$$
\lim_{k\to\infty}\left|\frac{a_{k+1}}{a_k}\right|
=\lim_{k\to\infty}\frac{(k+1)^2}{k^2}\frac{e^k}{e^{k+1}}
=\frac1e<1.
$$

The series converges absolutely. The transcription includes the square on $k$ in the ratio's denominator.

**Example.** For $\sum_{n=1}^\infty n/5^n$,

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{n+1}{n}\frac{5^n}{5^{n+1}}
=\frac15<1.
$$

The series converges absolutely by the ratio test.

**Example.** Test $\sum_{n=1}^\infty n\ln n/(n+1)^3$ for convergence. Compare with $b_n=n\ln n/n^3=\ln n/n^2$ and let $f(x)=\ln x/x^2$.

$$
f'(x)=\frac{x^2(1/x)-2x\ln x}{x^4}
=\frac{x(1-2\ln x)}{x^4}
=\frac{1-2\ln x}{x^3}.
$$

The function is decreasing when $2\ln x>1$, in particular on $[2,\infty)$. It is continuous and positive there.

To evaluate $\int_1^\infty f(x)\,dx$, integrate by parts using $u=\ln x$, $du=dx/x$, $dv=x^{-2}\,dx$, and $v=-1/x$.

$$
\int\frac{\ln x}{x^2}\,dx
=-\frac{\ln x}{x}-\int\left(-\frac1x\right)\frac{dx}{x}
=-\frac{\ln x}{x}-\frac1x+C.
$$

$$
\begin{aligned}
\int_1^\infty\frac{\ln x}{x^2}\,dx
&=\lim_{t\to\infty}\left[-\frac{\ln x}{x}-\frac1x\right]_1^t\\
&=\lim_{t\to\infty}\left(-\frac{\ln t}{t}-\frac1t+1\right)
=\boxed{1}.
\end{aligned}
$$

The integral test on the tail from $n=2$ gives convergence of $\sum b_n$. The transcription makes the final comparison explicit. Since $(n+1)^3\ge n^3$ and $n\ln n\ge0$ for $n\ge1$, the given series is bounded term by term by $\sum b_n$ and also converges.

**Example.** Compare $\sum_{n=1}^\infty 1/(10n+1)$ with the divergent harmonic series $\sum_{n=1}^\infty 1/n$, a $p$-series with $p=1$.

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=\lim_{n\to\infty}\frac{1/(10n+1)}{1/n}
=\lim_{n\to\infty}\frac{n}{10n+1}
=\frac1{10}>0.
$$

The series diverges by the limit comparison test.

**Example.** For $\sum_{n=1}^\infty 1/n^{1/5}$, take $b_n=1/n$. Since $n\ge n^{1/5}$ for $n\ge1$,

$$
a_n=\frac1{n^{1/5}}\ge\frac1n=b_n.
$$

The series diverges by comparison with the harmonic series. It also diverges by the $p$-series rule with $p=1/5$.

**Example.** Compare $\sum_{n=1}^\infty 1/(2n+1)^3$ with $\sum_{n=1}^\infty 1/(2n^3)$, a constant multiple of a convergent $p$-series with exponent $p=3$. For $n\ge1$,

$$
(2n+1)^3=(4n^2+4n+1)(2n+1)
=8n^3+12n^2+6n+1>2n^3.
$$

Hence $1/(2n+1)^3<1/(2n^3)$, and the series converges by the comparison test.

**Example.** How many terms suffice to approximate $\pi$ with absolute error at most $0.0005$? Use

$$
\pi=\sum_{n=1}^\infty(-1)^{n-1}\frac4{2n-1}.
$$

The alternating-series estimate gives $|\pi-S_n|\le b_{n+1}$, where $b_n=4/(2n-1)$. Require

$$
b_{n+1}=\frac4{2(n+1)-1}=\frac4{2n+1}\le0.0005.
$$

Then $4/0.0005=8000\le2n+1$, so $7999\le2n$. The first integer meeting this bound is $\boxed{4000}$.

**Example.** How many terms suffice to approximate $\pi^2$ with absolute error less than $0.0005$? From $\sum_{n=1}^\infty 1/n^2=\pi^2/6$, use $\sum_{n=1}^\infty 6/n^2=\pi^2$ and the integral-test remainder bound.

$$
R_n=S-S_n\le\int_n^\infty\frac6{x^2}\,dx
=\lim_{t\to\infty}\left[-\frac6x\right]_n^t
=\lim_{t\to\infty}\left(-\frac6t+\frac6n\right)
=\frac6n.
$$

The sufficient condition $6/n<0.0005$ gives $\boxed{n>12000}$, so $12001$ terms satisfy the displayed strict bound.

**Example.** Estimate the error from using ten terms of $\sum_{n=2}^\infty 1/[n(\ln n)^2]$. Set $f(x)=1/[x(\ln x)^2]$, which is positive, continuous, and decreasing for $x\ge2$. The substitution $u=\ln x$, $du=dx/x$, gives

$$
\begin{aligned}
\int_2^\infty f(x)\,dx
&=\lim_{t\to\infty}\int_{\ln 2}^{\ln t}\frac{du}{u^2}\\
&=\lim_{t\to\infty}\left(-\frac{1}{\ln t}+\frac1{\ln 2}\right)
=\frac1{\ln 2}.
\end{aligned}
$$

The series converges by the integral test. For a partial sum ending at index $N$, the integral remainder estimate is

$$
R_N\le\int_N^\infty f(x)\,dx
=\lim_{t\to\infty}\left[-\frac{1}{\ln x}\right]_N^t
=\frac1{\ln N}.
$$

The notes give $R_{10}\le 1/\ln 10$, for a sum ending at index $10$. Ten terms from $n=2$ end at $n=11$, giving the bound $\boxed{1/\ln 11}$ for the question as worded.

**Example.** How many terms suffice to approximate $\pi^2$ with absolute error at most $0.00005$? Start with the alternating series identity.

$$
\sum_{n=1}^\infty(-1)^{n-1}\frac1{n^2}=\frac{\pi^2}{12},
\qquad
\sum_{n=1}^\infty(-1)^{n-1}\frac{12}{n^2}=\pi^2.
$$

The alternating-series estimate gives

$$
|R_n|\le b_{n+1}=\frac{12}{(n+1)^2}.
$$

Require $12/(n+1)^2\le0.00005$. This gives

$$
(n+1)^2\ge\frac{12}{0.00005}=240000,
\qquad
n+1\ge\sqrt{240000}.
$$

The smallest integer $n+1$ meeting the bound is $490$, so $\boxed{489}$ terms suffice.

##### Power-series representation of functions

Use the geometric series with common ratio $x$.

$$
\frac1{1-x}=\sum_{n=0}^\infty x^n,\qquad |x|<1.
$$

**Examples.** Substitute the indicated expressions for the common ratio. The convergence conditions follow from requiring that its magnitude be less than one.

$$
\begin{aligned}
\frac1{1+x}
&=\frac1{1-(-x)}
=\boxed{\sum_{n=0}^\infty(-x)^n},
& |x|&<1,\\
\frac1{1-x^3}
&=\sum_{n=0}^\infty(x^3)^n
=\boxed{\sum_{n=0}^\infty x^{3n}},
& |x|&<1,\\
\frac1{1+9x^2}
&=\frac1{1-(-9x^2)}
=\boxed{\sum_{n=0}^\infty(-9x^2)^n},
& |x|&<\frac13.
\end{aligned}
$$

$$
\begin{aligned}
\frac{x}{4x+1}
&=x\frac1{1-(-4x)}\\
&=x\sum_{n=0}^\infty(-4x)^n
=\boxed{\sum_{n=0}^\infty(-4)^n x^{n+1}},\qquad |x|<\frac14.
\end{aligned}
$$

$$
\begin{aligned}
\frac{x}{9+x^2}
&=x\frac1{9(1+x^2/9)}\\
&=\frac{x}{9}\frac1{1-(-x^2/9)}
=\frac{x}{9}\sum_{n=0}^\infty\left(-\frac{x^2}{9}\right)^n\\
&=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{9^{n+1}}},\qquad |x|<3.
\end{aligned}
$$

##### Finding the interval and radius of convergence

**Example.** For $\sum_{n=1}^\infty x^n/\sqrt n$, apply the ratio test at $x\ne0$.

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{x^{n+1}}{x^n}\right|
\frac{\sqrt n}{\sqrt{n+1}}
=|x|.
$$

The series converges absolutely for $|x|<1$, including $x=0$ where all terms are zero. It diverges for $|x|>1$. The radius of convergence is $R=1$.

- At $x=1$, the series is $\sum_{n=1}^\infty 1/n^{1/2}$, a divergent $p$-series with $p=1/2$.
- At $x=-1$, the series is $\sum_{n=1}^\infty(-1)^n/n^{1/2}$. The magnitudes $b_n=1/\sqrt n$ tend to zero and $b_{n+1}=1/\sqrt{n+1}<1/\sqrt n$. The series converges by the alternating series test.

The interval of convergence is $\boxed{[-1,1)}$.

**Example.** Find the radius and interval of convergence of $\sum_{n=0}^\infty (-3)^n x^n/\sqrt{n+1}$. For $x\ne0$, the ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left|\frac{(-3)^{n+1}x^{n+1}}{(-3)^n x^n}\right|
\frac{\sqrt{n+1}}{\sqrt{n+2}}
=3|x|.
$$

The series converges absolutely for $|x|<1/3$, including $x=0$ directly, and diverges for $|x|>1/3$. Thus $\boxed{R=1/3}$.

At $x=-1/3$, the terms become $a_n=1/\sqrt{n+1}$. Compare the tail with $b_n=1/\sqrt n$, whose series diverges because $p=1/2$.

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=\lim_{n\to\infty}\frac{\sqrt n}{\sqrt{n+1}}=1.
$$

The series diverges at the left endpoint by limit comparison.

At $x=1/3$, the terms become $(-1)^n/\sqrt{n+1}$. The magnitudes $b_n=1/\sqrt{n+1}$ tend to zero and satisfy $b_{n+1}=1/\sqrt{n+2}<1/\sqrt{n+1}$. The series converges at the right endpoint by the alternating series test.

The interval of convergence is $\boxed{(-1/3,1/3]}$.

##### Taylor and Maclaurin series

The Taylor series of $f$ about $a$ is

$$
\begin{aligned}
\sum_{n=0}^\infty\frac{f^{(n)}(a)}{n!}(x-a)^n
={}&f(a)+\frac{f'(a)}{1!}(x-a)+\frac{f''(a)}{2!}(x-a)^2\\
&+\frac{f'''(a)}{3!}(x-a)^3+\cdots.
\end{aligned}
$$

Where the Taylor series represents $f$, the expression equals $f(x)$. The case $a=0$ is a Maclaurin series.

**Example.** Find the Maclaurin series for $f(x)=\sin x$. The coefficients are $c_n=f^{(n)}(0)/n!$.

| $n$ | $f^{(n)}(x)$ | $f^{(n)}(0)$ | $c_n$ |
| --- | --- | --- | --- |
| $0$ | $\sin x$ | $0$ | $0/0!$ |
| $1$ | $\cos x$ | $1$ | $1/1!$ |
| $2$ | $-\sin x$ | $0$ | $0/2!$ |
| $3$ | $-\cos x$ | $-1$ | $-1/3!$ |
| $4$ | $\sin x$ | $0$ | $0/4!$ |

$$
\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots
=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{(2n+1)!}}.
$$

The third-degree Taylor polynomial is $T_3(x)=x-x^3/3!$.

**Example.** Find the Maclaurin series for $f(x)=e^x$.

| Order | Derivative | Value at $0$ | Coefficient |
| --- | --- | --- | --- |
| $0$ | $e^x$ | $1$ | $1/0!$ |
| $1$ | $e^x$ | $1$ | $1/1!$ |
| $2$ | $e^x$ | $1$ | $1/2!$ |
| $3$ | $e^x$ | $1$ | $1/3!$ |
| $n$ | $e^x$ | $1$ | $1/n!$ |

$$
e^x
=1+\frac{x}{1!}+\frac{x^2}{2!}+\frac{x^3}{3!}+\frac{x^4}{4!}+\cdots
=\boxed{\sum_{n=0}^\infty\frac{x^n}{n!}}.
$$

**Example.** Find the Maclaurin series for $f(x)=e^{5x}$.

| Order | Derivative | Value at $0$ | Coefficient |
| --- | --- | --- | --- |
| $0$ | $e^{5x}$ | $1$ | $1/0!$ |
| $1$ | $5e^{5x}$ | $5$ | $5/1!$ |
| $2$ | $25e^{5x}$ | $25$ | $5^2/2!$ |
| $3$ | $125e^{5x}$ | $125$ | $5^3/3!$ |
| $4$ | $625e^{5x}$ | $625$ | $5^4/4!$ |
| $n$ | $5^n e^{5x}$ | $5^n$ | $5^n/n!$ |

$$
e^{5x}=\boxed{\sum_{n=0}^\infty\frac{5^n}{n!}x^n}.
$$

##### Differentiating and integrating series

**Example.** Find a power series for $x^2/(1-2x)^2$. Start with the geometric series

$$
\frac1{1-2x}=\sum_{n=0}^\infty(2x)^n
=\sum_{n=0}^\infty 2^n x^n,\qquad |x|<\frac12.
$$

Differentiate within the interval of convergence and reindex the sum.

$$
\frac{d}{dx}\left(\frac1{1-2x}\right)
=\frac2{(1-2x)^2}
=\sum_{n=1}^\infty 2^n n x^{n-1}
=\sum_{n=0}^\infty 2^{n+1}(n+1)x^n.
$$

Multiply by $x^2/2$ to obtain

$$
\frac{x^2}{(1-2x)^2}
=\boxed{\sum_{n=0}^\infty 2^n(n+1)x^{n+2}},\qquad |x|<\frac12.
$$

##### Constructing new Taylor series from known series

**Example.** Find the Taylor series of $1/(1+x)^2$ about $0$. Start with

$$
\frac1{1+x}=1-x+x^2-x^3+\cdots=\sum_{n=0}^\infty(-1)^n x^n,\qquad |x|<1.
$$

Differentiate term by term.

$$
\frac{d}{dx}\left(\frac1{1+x}\right)
=-\frac1{(1+x)^2}
=-1+2x-3x^2+4x^3-\cdots
=\sum_{n=0}^\infty(-1)^{n+1}(n+1)x^n.
$$

Thus

$$
\frac1{(1+x)^2}
=1-2x+3x^2-4x^3+\cdots
=\boxed{\sum_{n=0}^\infty(-1)^n(n+1)x^n},\qquad |x|<1.
$$

**Example.** Find the Taylor series of $\arctan x$ about $0$. Use the geometric series for $1/(1+x^2)$ and integrate term by term from $0$ to $x$, with $|x|<1$.

$$
\begin{aligned}
\arctan x
&=\int_0^x\frac{dt}{1+t^2}
=\int_0^x(1-t^2+t^4-t^6+\cdots)\,dt\\
&=x-\frac{x^3}{3}+\frac{x^5}{5}-\frac{x^7}{7}+\cdots\\
&=\boxed{\sum_{n=0}^\infty\frac{(-1)^n x^{2n+1}}{2n+1}}.
\end{aligned}
$$

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
