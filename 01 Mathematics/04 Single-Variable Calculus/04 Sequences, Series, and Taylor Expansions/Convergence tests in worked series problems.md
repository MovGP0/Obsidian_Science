---
title: "Convergence tests in worked series problems"
---

> [!TLDR]
> These lecture calculations apply comparison, integral, alternating-series, and ratio tests to specific sequences and sums.

## Worked lecture material

**11.1 Sequences**

Monotonic sequence theorem.

$$
\begin{aligned}
\cos x&=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots,\\
\sin x&=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\frac{x^7}{7!}+\cdots,\\
e^x&=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots.
\end{aligned}
$$

**Example.** The sequence $1/3,1/9,1/27,\ldots$ has general term $a_n=1/3^n$, where $n$ is the index.

$$
\lim_{n\to\infty}a_n=\lim_{n\to\infty}\frac1{3^n}=\boxed{0}.
$$

**Example.**

$$
\lim_{n\to\infty}\frac{n^3+3n}{4n^3+5}=\boxed{\frac14}.
$$

**11.2 Series**

##### Geometric series

The partial sum of the first $n$ terms is

$$
s_n=a+ar+ar^2+\cdots+ar^{n-1}=\sum_{k=1}^{n}ar^{k-1}.
$$

The series converges for $|r|<1$, and its sum is

$$
\sum_{n=1}^\infty ar^{n-1}=\frac{a}{1-r}.
$$

For $a\ne0$, the series diverges when $|r|\ge1$. The transcription gives the partial sum a finite upper index and includes both signs of $r$ in the divergence condition.

##### Telescoping sum

Show that $\sum_{n=1}^\infty 1/[n(n+1)]$ converges and find its sum. Each term is $1/n-1/(n+1)$, giving the partial sum $S_n=1-1/(n+1)$.

$$
S=\lim_{n\to\infty}S_n
=\lim_{n\to\infty}\left(1-\frac1{n+1}\right)
=1-0=\boxed{1}.
$$

**Example.** For $\sum_{n=1}^\infty n^2/(5n^2+4)$,

$$
\lim_{n\to\infty}a_n=\lim_{n\to\infty}\frac{n^2}{5n^2+4}
=\frac15\ne0.
$$

The series diverges by the test for divergence.

**Example.** For $\sum_{n=1}^\infty1/n$, the terms satisfy $\lim_{n\to\infty}1/n=0$, so the test for divergence is inconclusive.

##### Testing series for convergence

Many series lack a closed-form sum like that of a geometric series. For a convergent series in such cases, use a partial sum to approximate the infinite sum.

**11.3 Integral test**

For $a_n=f(n)$ with $f$ continuous, positive, and decreasing on $[1,\infty)$, the series $\sum_{n=1}^\infty a_n$ converges if $\int_1^\infty f(x)\,dx$ converges and diverges if the integral diverges.

##### $p$-series

The series $\sum_{n=1}^\infty 1/n^p$ converges for $p>1$ and diverges for $p\le1$.

##### Error estimation

Suppose $f(k)=a_k$, where $f$ is continuous, positive, and decreasing for $x\ge n$, and the series $\sum a_k$ converges to $S$. If $R_n=S-s_n$, then

$$
\int_{n+1}^{\infty} f(x)\,dx\le R_n\le \int_n^{\infty} f(x)\,dx.
$$

![[Kyle Kabasares - Integral Calculus - Integral test remainder rectangles.png|**Fig. 47** The first two unit-width rectangles of the tail have heights $a_{n+1}$ and $a_{n+2}$. They lie beneath the decreasing curve, illustrating the upper integral bound.]]

$$
s_n=a_1+a_2+\cdots+a_n,\qquad
R_n=a_{n+1}+a_{n+2}+\cdots,\qquad
S=s_n+R_n.
$$

**Example.** How many terms suffice to approximate $\pi^2$ with absolute error below $0.0005$? Use

$$
\sum_{n=1}^\infty\frac1{n^2}=\frac{\pi^2}{6},
\qquad
S=\sum_{n=1}^\infty\frac6{n^2}=\pi^2.
$$

For $R_n=S-S_n$, impose the sufficient condition $R_n<\int_n^\infty 6x^{-2}\,dx<0.0005$.

$$
\int_n^\infty\frac6{x^2}\,dx
=\lim_{a\to\infty}\left[-\frac6x\right]_n^a
=\lim_{a\to\infty}\left(-\frac6a+\frac6n\right)
=\frac6n.
$$

Thus $6/0.0005<n$, giving $\boxed{12000<n}$ as the condition on the upper bound. The notes also record the numerical partial sum $\sum_{n=1}^{12000}6/n^2\approx9.86910$. At $n=12000$ the upper bound equals $0.0005$, and the strictly decreasing integrand still makes the actual remainder smaller than the bound.

##### Comparison test

Suppose $\sum a_n$ and $\sum b_n$ have positive terms.

1. If $\sum b_n$ converges and $a_n\le b_n$ for all $n$, then $\sum a_n$ converges.
2. If $\sum b_n$ diverges and $a_n\ge b_n$ for all $n$, then $\sum a_n$ diverges.

##### Part 1

Let $\sum b_n=b_1+b_2+b_3+\cdots$ be the known series and $\sum a_n=a_1+a_2+a_3+\cdots$ the series being tested. Both have positive terms. If $b_n>a_n$ for all $n$ and $\sum b_n$ converges, then $\sum a_n$ converges.

![[Kyle Kabasares - Integral Calculus - Comparison test upper bound sketch.png|**Fig. 48** The drawing places the smaller series $\sum a_n$ inside the convergent comparison series $\sum b_n$.]]

##### Part 2

If $b_n<a_n$ for all $n$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

![[Kyle Kabasares - Integral Calculus - Comparison test lower bound sketch.png|**Fig. 49** The drawing places the divergent comparison series $\sum b_n$ inside the larger series $\sum a_n$.]]

**Example.** For $a_n=n/(2n^3+1)$, use

$$
b_n=\frac{n}{2n^3}=\frac12\frac1{n^2}.
$$

The series $\sum b_n$ converges by the $p$-series rule with $p=2$. Cross-multiplying $n/(2n^3)>n/(2n^3+1)$ gives $n(2n^3+1)>2n^4$, which reduces to $n>0$. Therefore $a_n<b_n$ for every $n\ge1$ and $\sum_{n=1}^\infty a_n$ converges by comparison.

**Example.** For $\sum_{n=2}^\infty n^3/(n^4-1)$, compare with $b_n=n^3/n^4=1/n$. The comparison series is a divergent $p$-series with $p=1$. For $n\ge2$ both denominators are positive, and

$$
\frac{n^3}{n^4-1}>\frac{n^3}{n^4}
\quad\Longleftrightarrow\quad
n^7>n^7-n^3
\quad\Longleftrightarrow\quad
0>-n^3.
$$

Thus $a_n>b_n$ and $\sum a_n$ diverges by comparison.

##### Limit comparison test

Suppose $\sum a_n$ and $\sum b_n$ are series with positive terms. If $\lim_{n\to\infty}a_n/b_n=c$, where $c$ is finite and positive, both series converge or both diverge.

**Example.** The denominator in this example is written with a plus sign.

$$
\lim_{n\to\infty}\frac{n^3}{n^4+1}\frac{n^4}{n^3}
=\lim_{n\to\infty}\frac{n^4}{n^4+1}
=\lim_{n\to\infty}\frac{1}{1+1/n^4}
=\boxed{1}.
$$

Comparison with the harmonic series also gives divergence for $\sum_{n=1}^\infty n^3/(n^4+1)$.

**Example.** Test the series

$$
\frac15+\frac18+\frac1{11}+\frac1{14}+\cdots
=\sum_{n=1}^\infty\frac1{3n+2}.
$$

Use $a_n=1/(3n+2)$ and $b_n=1/(3n)$. The series $\sum b_n=\frac13\sum 1/n$ diverges, and $a_n<b_n$ for all $n\ge1$. Direct comparison with this upper bound is inconclusive.

![[Kyle Kabasares - Integral Calculus - Inconclusive comparison with harmonic series.png|**Fig. 50** The series being tested lies inside the divergent upper comparison series in the sketch.]]

The limit comparison gives

$$
\lim_{n\to\infty}\frac{a_n}{b_n}
=\lim_{n\to\infty}\frac{3n}{3n+2}
=\lim_{n\to\infty}\frac3{3+2/n}=1>0.
$$

Therefore $\sum a_n$ diverges by limit comparison.

**Example.** Compare $\sum_{n=1}^\infty\sqrt{n^2-1}/(n^3+2n^2+5)$ with the convergent series $\sum \sqrt{n^2}/n^3=\sum 1/n^2$.

$$
\begin{aligned}
\lim_{n\to\infty}\frac{a_n}{b_n}
&=\lim_{n\to\infty}\frac{\sqrt{n^2-1}}{n^3+2n^2+5}
\frac{n^3}{\sqrt{n^2}}\\
&=\lim_{n\to\infty}\sqrt{\frac{n^2-1}{n^2}}\,
\frac1{1+2/n+5/n^3}
=1\cdot1=\boxed{1}>0.
\end{aligned}
$$

The given series converges by limit comparison on the tail $n\ge2$.

**Example 3.** Compare $\sum_{n=1}^\infty 9^n/(10^n-3)$ with $\sum_{n=1}^\infty 9^n/10^n=\sum_{n=1}^\infty(9/10)^n$, a convergent geometric series with $|r|=9/10<1$.

$$
\lim_{n\to\infty}\frac{9^n}{10^n-3}\frac{10^n}{9^n}
=\lim_{n\to\infty}\frac{10^n}{10^n-3}
=\lim_{n\to\infty}\frac1{1-3/10^n}
=1>0.
$$

The given series converges by limit comparison.

##### Alternating series test

Suppose $b_n>0$ in the alternating series

$$
\sum_{n=1}^\infty(-1)^{n-1}b_n=b_1-b_2+b_3-b_4+\cdots.
$$

If $b_{n+1}\le b_n$ for all $n$ and $\lim_{n\to\infty}b_n=0$, then the series converges. The first partial sums are

$$
S_1=b_1,\qquad S_2=b_1-b_2,\qquad S_3=b_1-b_2+b_3.
$$

The partial sums tend to $L$ as $n\to\infty$.

![[Kyle Kabasares - Integral Calculus - Alternating partial sums around the limit.png|**Fig. 51** The changes in successive partial sums have decreasing magnitudes, and the sums approach the line labeled $L$.]]

**Example.** The alternating harmonic series is

$$
\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n}
=\sum_{n=1}^\infty(-1)^{n-1}\frac1n
=1-\frac12+\frac13-\frac14+\frac15-\cdots.
$$

For $b_n=1/n$, we have $b_{n+1}=1/(n+1)<1/n=b_n$. Equivalently, $f(x)=1/x$ has $f'(x)=-1/x^2<0$ for $x>0$. Also, $\lim_{n\to\infty}b_n=0$. The series converges by the alternating series test. The notes give its sum as $\ln 2$.

**Example 2.** Consider $\sum_{n=1}^\infty(-1)^{n-1}3n/(4n-1)$, with $b_n=3n/(4n-1)$. Check whether $b_{n+1}<b_n$.

$$
\begin{aligned}
\frac{3(n+1)}{4(n+1)-1}<\frac{3n}{4n-1}
&\quad\Longleftrightarrow\quad (3n+3)(4n-1)<3n(4n+3)\\
&\quad\Longleftrightarrow\quad 12n^2+9n-3<12n^2+9n\\
&\quad\Longleftrightarrow\quad -3<0.
\end{aligned}
$$

The magnitudes decrease, but

$$
\lim_{n\to\infty}b_n
=\lim_{n\to\infty}\frac{3}{4-1/n}
=\frac34\ne0.
$$

The alternating series test gives no conclusion. The handwritten example continues on the next page.

**Example 2, continued.** Use the test for divergence on

$$
a_n=(-1)^{n-1}\frac{3n}{4n-1}.
$$

The factor $3n/(4n-1)$ tends to $3/4$. The factor $(-1)^{n-1}$ is $1$ on odd indices and $-1$ on even indices. Consequently,

$$
\lim_{k\to\infty}a_{2k-1}=\frac34,\qquad
\lim_{k\to\infty}a_{2k}=-\frac34.
$$

The term limit does not exist, so $\sum a_n$ diverges. The transcription uses the two subsequences to justify the conclusion because the handwritten product of limits contains a factor with no limit.

**Example.** Test $\sum_{n=1}^\infty(-1)^{n-1}n^2/(n^3+1)$ for convergence. Let $b_n=n^2/(n^3+1)$. To check whether $b_{n+1}<b_n$, cross-multiply the positive denominators.

$$
\frac{(n+1)^2}{(n+1)^3+1}<\frac{n^2}{n^3+1}
\quad\Longleftrightarrow\quad
(n^3+1)(n+1)^2<n^2[(n+1)^3+1].
$$

Expanding both sides gives

$$
n^5+2n^4+n^3+n^2+2n+1
<n^5+3n^4+3n^3+2n^2.
$$

After canceling common terms, this is $n^2+2n+1<n^4+2n^3+2n^2$. It holds for $n\ge1$, so $b_{n+1}<b_n$.

The notes also check eventual decrease by differentiating $f(x)=x^2/(x^3+1)$.

$$
\begin{aligned}
f'(x)
&=\frac{2x(x^3+1)-3x^2\cdot x^2}{(x^3+1)^2}\\
&=\frac{2x^4+2x-3x^4}{(x^3+1)^2}
=\frac{2x-x^4}{(x^3+1)^2}.
\end{aligned}
$$

The derivative is negative for $x>\sqrt[3]{2}$. Also,

$$
\lim_{n\to\infty}b_n
=\lim_{n\to\infty}\frac{1/n}{1+1/n^3}=0.
$$

The series converges by the alternating series test.

##### Alternating series estimation theorem

If $S=\sum_{n=1}^\infty(-1)^{n-1}b_n$, $0\le b_{n+1}\le b_n$, and $b_n\to0$, then the error after $n$ terms satisfies $|R_n|=|S-S_n|\le b_{n+1}$.

How many terms are needed for three decimal places?

##### Alternating-series remainder

Write $\sum_{n=1}^\infty(-1)^{n-1}b_n=b_1-b_2+b_3-b_4+\cdots$, where the magnitudes decrease to zero. The first partial sums are

$$
S_1=b_1,\qquad S_2=b_1-b_2,\qquad S_3=b_1-b_2+b_3.
$$

After three terms the error satisfies $|R_3|=|S-S_3|\le b_4$. In general,

$$
|R_n|=|S-S_n|\le b_{n+1}.
$$

**Example.** Estimate $\ln 2$ to the stated tolerance of $0.0005$. Use

$$
\ln 2=\sum_{n=1}^\infty\frac{(-1)^{n-1}}{n},\qquad
b_n=\frac1n,\qquad b_{n+1}=\frac1{n+1}.
$$

The notes take a strict inequality in solving the bound.

$$
\frac1{n+1}<0.0005
\quad\Longleftrightarrow\quad
n+1>2000
\quad\Longleftrightarrow\quad
\boxed{n>1999}.
$$

Thus $2000$ terms suffice for that strict bound. For the non-strict bound $\frac1{n+1}\le0.0005$, $1999$ terms suffice.

##### Absolute and conditional convergence

1. A series $\sum a_n$ is **absolutely convergent** if $\sum |a_n|$ converges.
2. A series $\sum a_n$ is **conditionally convergent** if it converges while $\sum |a_n|$ diverges.

The positive series $\sum 1/n^2$ converges absolutely by the $p$-series rule. The alternating harmonic series with $a_n=(-1)^{n-1}/n$ converges, while $\sum|a_n|=\sum 1/n$ diverges. It converges conditionally.

If $\sum |a_n|$ converges, then $\sum a_n$ converges. The proof uses

$$
0\le |a_n|-a_n\le 2|a_n|.
$$

Both bounds can be attained, so the transcription uses non-strict inequalities.

##### Absolute convergence

For $a_n=(-1)^n/n^2$, the magnitudes are $|a_n|=1/n^2$, whose sum converges.

##### Proof

Let $M=\sum_{n=1}^\infty |a_n|$ and $b_n=|a_n|-a_n$. The series $\sum 2|a_n|$ converges to $2M$. Since $0\le b_n\le2|a_n|$, comparison gives convergence of $\sum b_n$ to some $L$. For finite partial sums,

$$
\sum_{n=1}^{N}a_n=\sum_{n=1}^{N}|a_n|-\sum_{n=1}^{N}b_n.
$$

Taking limits gives $\boxed{\sum_{n=1}^\infty a_n=M-L}$.

**Example.** For $\sum_{n=1}^\infty \cos(n)/n^2$, the inequality $-1\le\cos n\le1$ implies

$$
0\le\frac{|\cos n|}{n^2}\le\frac1{n^2}.
$$

The upper series is a convergent $p$-series, so $\sum|\cos(n)/n^2|$ converges by comparison. The original series converges absolutely.

##### Ratio test

Let $L=\lim_{n\to\infty}|a_{n+1}/a_n|$, assuming the ratios are defined for sufficiently large $n$.

1. If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
2. If $L>1$ or $L=+\infty$, then the series diverges.
3. If $L=1$, the ratio test is inconclusive.

##### Proof of the second case

For large enough $n$, the ratio is greater than $1$, so $|a_{n+1}|>|a_n|$. The magnitudes are eventually bounded below by a positive term, so the terms fail to tend to zero and the series diverges.

**Example.** Test $\sum_{n=1}^\infty(-1)^n n^3/n!$. The consecutive terms are

$$
a_n=\frac{(-1)^n n^3}{n!},\qquad
a_{n+1}=\frac{(-1)^{n+1}(n+1)^3}{(n+1)!}.
$$

$$
\begin{aligned}
\left|\frac{a_{n+1}}{a_n}\right|
&=\left|\frac{(-1)^{n+1}}{(-1)^n}\frac{(n+1)^3}{n^3}
\frac{n!}{(n+1)!}\right|\\
&=|-1|\left(\frac{n+1}{n}\right)^3\frac{n!}{(n+1)!}.
\end{aligned}
$$

##### Factorial series

Since $(n+1)!=(n+1)n!$, cancel $n!$ in the ratio from [[#Ratio test|the section on Ratio test]].

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\left(\frac{n+1}{n}\right)^3\frac{1}{n+1}
=1\cdot0=0.
$$

The series converges absolutely by the ratio test.

**Example.** For $\sum_{n=1}^\infty(-1)^n/\sqrt n$,

$$
a_n=\frac{(-1)^n}{\sqrt n},\qquad a_{n+1}=\frac{(-1)^{n+1}}{\sqrt{n+1}}.
$$

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\sqrt{\frac{n}{n+1}}=1.
$$

The ratio test is inconclusive.

**Example.** For $\sum_{n=1}^\infty(-1)^ne^n/n^3$, the consecutive terms are $a_n=(-1)^ne^n/n^3$ and $a_{n+1}=(-1)^{n+1}e^{n+1}/(n+1)^3$.

$$
\begin{aligned}
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
&=\lim_{n\to\infty}\left|\frac{(-1)^{n+1}}{(-1)^n}\frac{e^{n+1}}{e^n}\frac{n^3}{(n+1)^3}\right|\\
&=1\cdot e\cdot1=e>1.
\end{aligned}
$$

The series diverges by the ratio test. The test for divergence also applies. Three applications of l'Hôpital's rule give

$$
\lim_{x\to\infty}\frac{e^x}{x^3}
=\lim_{x\to\infty}\frac{e^x}{3x^2}
=\lim_{x\to\infty}\frac{e^x}{6x}
=\lim_{x\to\infty}\frac{e^x}{6}=+\infty.
$$

Thus $|a_n|\to+\infty$, so the terms fail to tend to zero. The transcription takes the limit of the magnitude to avoid a product involving the oscillating factor $(-1)^n$.

##### Root test

Let $L=\lim_{n\to\infty}\sqrt[n]{|a_n|}$. The transcription includes the absolute value as in the statement on [[Sequences, series tests, and power-series review#Tests for convergence and divergence|the section on Tests for convergence and divergence]].

1. If $L<1$, then $\sum_{n=1}^\infty a_n$ converges absolutely.
2. If $L>1$, then the series diverges.
3. If $L=1$, the test is inconclusive.

**Example.** Test $\sum_{n=1}^\infty\left(\frac{2n+3}{3n+2}\right)^n$. The base tends to $2/3$, suggesting the convergent geometric series with ratio $2/3$. For the root test,

$$
\sqrt[n]{|a_n|}=\frac{2n+3}{3n+2},
\qquad
\lim_{n\to\infty}\frac{2n+3}{3n+2}=\frac23<1.
$$

The series converges by the root test.

**11.7 Testing series**

- Does the term $a_n$ fail to tend to zero?
- Is the series related to a $p$-series or a geometric series?
- Is the series alternating?
- Does the series contain factorials or constants raised to the $n$th power?
- For a rational function of $n$, the ratio test gives the inconclusive limit $1$.
- Is $a_n$ of the form $(b_n)^n$?

##### Testing series

If $a_n=f(n)$ and $\int f(x)\,dx$ is easy to evaluate, consider the integral test. The notes list it as a last resort.

**Examples**

1. Inspect the series and predict whether it converges or diverges.
2. Identify a test.
3. List the conditions of the test.
4. Apply the test.

For $\sum_{n=1}^\infty (n-1)/(2n+1)$, the term limit is $\lim_{n\to\infty}(n-1)/(2n+1)=1/2\ne0$. The series diverges by the test for divergence.

For $\sum_{n=1}^\infty ne^{-n^2}$, the notes suggest the comparison test or the integral test and leave the remaining steps blank.

For $\sum_{n=1}^\infty(-1)^{n-1}n/(n^2+1)$, the magnitudes $b_n=n/(n^2+1)$ behave like $1/n$ for large $n$. The notes identify the alternating series test.

**Example.** For $\sum_{n=1}^\infty(-1)^n/n!$, the consecutive terms are $a_n=(-1)^n/n!$ and $a_{n+1}=(-1)^{n+1}/(n+1)!$. The ratio test gives

$$
\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|
=\lim_{n\to\infty}\frac{n!}{(n+1)!}
=\lim_{n\to\infty}\frac1{n+1}=0<1.
$$

The series converges absolutely.

**Example.** For $\sum_{n=1}^\infty\cos(2n)/(2+3^n)$, compare the absolute values of the terms with a geometric series.

$$
\left|\frac{\cos(2n)}{2+3^n}\right|
\le\frac1{2+3^n}\le\frac1{3^n}.
$$

Since $\sum_{n=1}^\infty 1/3^n$ converges with common ratio $1/3$, the original series converges absolutely.

## Source

Kyle Kabasares, *Calculus II - Integral Calculus (Math 22, UC Merced 2013)*.
