---
title: "Taylor expansions and Laurent annuli"
---

> [!TLDR]
> Use singularity locations to choose regions of convergence and construct local expansions from geometric series.

## Worked lecture material

##### Complex sequences and series

A complex sequence is a function from the natural numbers to the complex numbers. Its terms are $z_1,z_2,z_3,\ldots$, and the sequence is denoted $\{z_n\}$.

**Example.** For $n\in\mathbb N$ with $n\ge1$, let

$$
z_n=\left(2-\frac1n\right)+i\left(5+\frac1n\right).
$$

The notes observe that the component sequences $x_n=2-1/n$ and $y_n=5+1/n$ both converge and suggest that the complex sequence converges as well.

##### Sequence limits

A sequence $\{z_n\}$ has limit $z$ if for each real $\epsilon>0$ there is an $N$ such that $|z_n-z|<\epsilon$ whenever $n>N$. Write $\lim_{n\to\infty}z_n=z$. Subtracting the proposed limit reduces the condition to convergence to $0$.

![[Kyle Kabasares - Complex Variables - Complex sequence eventually in the epsilon disk.png|**Fig. 120** Early terms may lie outside the circle of radius $\epsilon$. All terms with $n>N$ lie inside it.]]

![[Kyle Kabasares - Complex Variables - Real sequence terms beyond the index N.png|**Fig. 121** The real-variable sketch shows the terms $x_n$ staying near $x$ after index $N$.]]

A sequence may diverge. When its limit exists, the limit is unique. The page suggests proving uniqueness by contradiction using the limit definition.

##### Theorem

Suppose $z_n=x_n+iy_n$ and $z=x+iy$. Then

$$
\lim_{n\to\infty}z_n=z
\quad\Longleftrightarrow\quad
\lim_{n\to\infty}x_n=x\quad\text{and}\quad\lim_{n\to\infty}y_n=y.
$$

##### From the component limits to the complex limit

Given $\epsilon>0$, choose $N_x$ and $N_y$ so that $|x_n-x|<\epsilon/2$ for $n>N_x$ and $|y_n-y|<\epsilon/2$ for $n>N_y$. Let $N=\max\{N_x,N_y\}$. For $n>N$, the triangle inequality gives

$$
|z_n-z|
=|(x_n-x)+i(y_n-y)|
\le|x_n-x|+|y_n-y|
<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon.
$$

Thus $z_n\to z$ as $n\to\infty$. The handwritten boxed limit uses $n\to0$, while the theorem and the proof use $n\to\infty$.

##### From the complex limit to the component limits

For each $\epsilon>0$, choose $N$ so that $|z_n-z|<\epsilon$ for $n>N$. Then

$$
|x_n-x|\le|(x_n-x)+i(y_n-y)|=|z_n-z|<\epsilon.
$$

The same bound holds for $|y_n-y|$, giving both component limits.

**Example.** Find the limit of $z_n=(\sqrt n+i(n+1))/n$. The real component is $x_n=\sqrt n/n=1/\sqrt n$, which tends to zero. The page begins the proof by choosing an index $N$ that makes $|x_n-0|<\epsilon$ for $n>N$.

For the real component $x_n=1/\sqrt n$, the inequality $|x_n-0|<\epsilon$ holds when $n>1/\epsilon^2$. Choose $N=\lceil1/\epsilon^2\rceil$. For the imaginary component $y_n=(n+1)/n=1+1/n$,

$$
|y_n-1|=\frac1n<\epsilon
$$

whenever $n>N$ and $N>1/\epsilon$. Thus $x_n\to0$, $y_n\to1$, and $z_n\to i$.

##### Divergence example

Show that $z_n=(1+i)^n$ diverges. The polar form is

$$
(1+i)^n=(\sqrt2)^n e^{in\pi/4}
=(\sqrt2)^n\cos\frac{n\pi}{4}
+i(\sqrt2)^n\sin\frac{n\pi}{4}.
$$

The first handwritten expansion drops the exponent on $\sqrt2$, which reappears in the component formulas. The notes propose showing that one of the components diverges. For instance, at $n=8k$ the real component equals $(\sqrt2)^{8k}$, which is unbounded.

##### Complex series

The infinite series $\sum_{n=1}^{\infty}z_n$ converges to $S$ if the sequence of partial sums

$$
S_N=\sum_{n=1}^N z_n=z_1+z_2+\cdots+z_N
$$

converges to $S$. For $z_n=x_n+iy_n$ and $S=X+iY$, the condition $\sum_{n=1}^{\infty}z_n=S$ is equivalent to $\sum_{n=1}^{\infty}x_n=X$ and $\sum_{n=1}^{\infty}y_n=Y$.

A series is **absolutely convergent** if $\sum_{n=1}^{\infty}|z_n|$ converges. This implies that both $\sum_{n=1}^{\infty}|x_n|$ and $\sum_{n=1}^{\infty}|y_n|$ converge.

##### Geometric series

For $|z|<1$,

$$
\sum_{n=0}^{\infty}z^n=\frac{1}{1-z}.
$$

For $|z|\ge1$, the series diverges.

##### D'Alembert's ratio test

For a complex series $\sum_{n=0}^{\infty}z_n$, suppose the ratios are eventually defined and $\lim_{n\to\infty}|z_{n+1}|/|z_n|=L$. The series converges absolutely if $L<1$ and diverges if $L>1$. The test is inconclusive if $L=1$.

##### Proof for $L<1$

Set $r=(L+1)/2$, so $L<r<1$. For sufficiently large $N$, $|z_{n+1}|<r|z_n|$ for $n\ge N$. Iteration gives $|z_{N+j}|\le r^j|z_N|$ for $j\ge1$. Thus

$$
\sum_{j=1}^{\infty}|z_{N+j}|
\le |z_N|\sum_{j=1}^{\infty}r^j
=|z_N|\frac{r}{1-r}<\infty.
$$

The written tail bound uses $z_{N+1}$ with powers starting at $r^1$. Using $z_N$ with those powers aligns the indices. The finite sum $\sum_{n=0}^N |z_n|$ adds only a finite amount, so $\sum_{n=0}^{\infty}|z_n|$ converges.

##### Taylor series

If $f$ is analytic in $|z-z_0|<R$, then throughout that disk,

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n,\qquad
a_n=\frac{f^{(n)}(z_0)}{n!},\quad n=0,1,2,\ldots.
$$

- **Liouville's theorem.** An entire function bounded on $\mathbb C$ is constant.
- **Fundamental theorem of algebra.** Every polynomial $P$ of degree $n\ge1$ has at least one root $z_0$, so $P(z_0)=0$.
- **Mean value theorem.** If $f$ is analytic on and inside the circle $|z-z_0|=\rho$, then $f(z_0)=\frac1{2\pi}\int_0^{2\pi}f(z_0+\rho e^{i\theta})\,d\theta$.

**Example.** Let $f$ be entire and suppose $u(x,y)=\operatorname{Re}f(z)\le u_0$ everywhere. Put $g(z)=e^{f(z)}$. With $f=u+iv$,

$$
|g(z)|=|e^ue^{iv}|=e^u\le e^{u_0}.
$$

The entire function $g$ is bounded and therefore constant by Liouville's theorem. Then $g'(z)=e^{f(z)}f'(z)=0$. Since the exponential is nonzero, $f'(z)=0$, so $f$ and its real part $u$ are constant.

**Worksheet**

**1(a).** Evaluate $\int_C\cosh z/z^4\,dz$ on the positively oriented contour around the origin.

![[Kyle Kabasares - Complex Variables - Worksheet contour around the origin.png|**Fig. 122** The circular contour encloses the origin.]]

Since $\cosh z=(e^z+e^{-z})/2$, its third derivative is $\sinh z$. The Cauchy formula for derivatives gives

$$
\int_C\frac{\cosh z}{z^4}\,dz
=\frac{2\pi i}{3!}\sinh(0)=0.
$$

The handwritten denominator in this coefficient is unclear. The exponent $4$ requires $3!$.

**1(b).** For $-2<x_0<2$, the page applies the same formula to the first derivative of $\tan(z/2)$ at $x_0$. For positive orientation, with $x_0$ inside $C$ and $\tan(z/2)$ analytic on and inside $C$,

$$
\int_C\frac{\tan(z/2)}{(z-x_0)^2}\,dz
=\frac{2\pi i}{1!}\,\frac12\sec^2(x_0/2)
=\pi i\sec^2(x_0/2).
$$

**2.** The line for $z^k-z_0^k$ ends after the equals sign.

**3.** The worksheet gives $\int_0^{2\pi}\cos(\cos\theta)\cosh(\sin\theta)\,d\theta=2\pi$ and begins by expanding the product.

$$
\begin{aligned}
\cos(\cos\theta)\cosh(\sin\theta)
&=\tfrac14(e^{i\cos\theta}+e^{-i\cos\theta})(e^{\sin\theta}+e^{-\sin\theta})\\
&=\tfrac14\bigl(e^{i\cos\theta+\sin\theta}+e^{i\cos\theta-\sin\theta}
+e^{-i\cos\theta+\sin\theta}+e^{-i\cos\theta-\sin\theta}\bigr).
\end{aligned}
$$

##### Proof of Taylor's theorem

Laurent series are listed as a generalization. If $f$ is analytic in the disk $|z-z_0|<R_0$, its Taylor series is

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n,\qquad a_n=\frac{f^{(n)}(z_0)}{n!}.
$$

The opening statement writes a closed radius bound. The proof establishes the formula for $|z-z_0|<R_0$ by choosing an intermediate circle inside that disk.

Translate the center to $z_0=0$. The proof uses the Cauchy formula for derivatives and the geometric series. For fixed $z$ with $|z|=r<R_0$, choose $r<r_0<R_0$ and integrate with respect to $s$ on $C_{r_0}$.

![[Kyle Kabasares - Complex Variables - Intermediate circle for the Taylor proof.png|**Fig. 123** The point $z$ lies inside the dashed circle of radius $r_0$, which lies inside the disk of radius $R_0$.]]

$$
f(z)=\frac{1}{2\pi i}\int_{C_{r_0}}\frac{f(s)}{s-z}\,ds,\qquad
\frac1{s-z}=\frac1s\frac1{1-z/s},\qquad
\left|\frac zs\right|=\frac r{r_0}<1.
$$

The factored kernel matches $1/(s-z)$ in the integral. The handwritten kernel on the last line reverses that order.

##### Geometric series with a remainder

For $|p|<1$,

$$
\frac1{1-p}=\sum_{n=0}^{\infty}p^n
=\sum_{n=0}^{N-1}p^n+\sum_{n=N}^{\infty}p^n
=\sum_{n=0}^{N-1}p^n+\frac{p^N}{1-p}.
$$

In the Cauchy formula on $C_{r_0}$, substitute $p=z/s$. This gives

$$
\begin{aligned}
f(z)
&=\frac1{2\pi i}\int_{C_{r_0}}\frac{f(s)}s
\left[\sum_{n=0}^{N-1}\left(\frac zs\right)^n+
\frac{(z/s)^N}{1-z/s}\right]\,ds\\
&=\sum_{n=0}^{N-1}z^n\,\frac1{2\pi i}
\int_{C_{r_0}}\frac{f(s)}{s^{n+1}}\,ds+E_N(z)\\
&=\sum_{n=0}^{N-1}\frac{f^{(n)}(0)}{n!}z^n+E_N(z),
\end{aligned}
$$

where the last equality uses the Cauchy formula for derivatives and

$$
E_N(z)=\frac1{2\pi i}\int_{C_{r_0}}\frac{f(s)z^N}{(s-z)s^N}\,ds.
$$

On the circle, $|s|=r_0$ and $|s-z|\ge\bigl||s|-|z|\bigr|=r_0-r$ since $r_0>r$. Write $M_{r_0}=\max_{s\in C_{r_0}}|f(s)|$. Using the length $2\pi r_0$ in the ML inequality gives

$$
\begin{aligned}
|E_N(z)|
&\le \frac{r^N}{2\pi(r_0-r)}
\int_{C_{r_0}}\left|\frac{f(s)}{s^N}\right|\,|ds|\\
&\le\frac{r^N}{2\pi(r_0-r)}(2\pi r_0)\frac{M_{r_0}}{r_0^N}
=\frac{r_0M_{r_0}}{r_0-r}\left(\frac r{r_0}\right)^N.
\end{aligned}
$$

Here $|ds|$ denotes arc length along the circle, written $ds$ in the handwritten modulus bound. The remainder tends to zero as $N\to\infty$ because $r/r_0<1$.

##### Remarks

A Taylor series centered at $z_0$ converges inside the disk whose radius is the distance to the nearest point where the function fails to be analytic. The Taylor series is unique.

**Example 1.** Find the Taylor series of $3/(2+iz)$ about $0$. Multiply numerator and denominator by $i$ and factor $2i$.

$$
\frac{3}{2+iz}
=\frac{3i}{2i-z}
=\frac32\frac1{1-z/(2i)}
=\frac32\sum_{n=0}^{\infty}\left(\frac z{2i}\right)^n,\qquad |z|<2.
$$

**Example 2.** Expand $1/z$ about $z_0=1$.

$$
\frac1z=\frac1{1-(1-z)}
=\sum_{n=0}^{\infty}(1-z)^n
=\sum_{n=0}^{\infty}(-1)^n(z-1)^n,\qquad |z-1|<1.
$$

The handwriting puts both the factor $(-1)^n$ and the power $(1-z)^n$ in one intermediate term. The two equivalent forms above use the factor with $(z-1)^n$.

**Example 3.** Seek a series centered at $0$ for $f(z)=(1+2z^2)/(z^3+z^5)$, which fails to be analytic at the center. First rewrite

$$
f(z)=\frac1{z^3}\frac{1+2z^2}{1+z^2}
=\frac1{z^3}\left(2-\frac1{1+z^2}\right).
$$

The geometric series gives $1/(1+z^2)=\sum_{n=0}^{\infty}(-1)^nz^{2n}$ for $|z|<1$. Hence

$$
f(z)=\frac1{z^3}(2-1+z^2-z^4+z^6-z^8+\cdots)
=\frac1{z^3}+\frac1z-z+z^3-z^5+\cdots,\qquad 0<|z|<1.
$$

##### Laurent's theorem

Suppose $f$ is analytic throughout an annular domain $R_1<|z-z_0|<R_2$. Let $C$ be any positively oriented simple closed contour enclosing $z_0$ and lying in the annulus.

For every $z$ with $R_1<|z-z_0|<R_2$,

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+
\sum_{n=1}^{\infty}\frac{b_n}{(z-z_0)^n}.
$$

On the contour $C$ from the theorem, the coefficients are

$$
a_n=\frac{1}{2\pi i}\int_C\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta,
\qquad
b_n=\frac{1}{2\pi i}\int_C f(\zeta)(\zeta-z_0)^{n-1}\,d\zeta.
$$

The notes relate the first coefficient formula to the Cauchy integral formula for derivatives.

![[Kyle Kabasares - Complex Variables - Annulus with inner and outer radii.png|**Fig. 124** Two concentric circles mark the inner and outer boundaries of the annulus.]]

##### Power series

A power series is an infinite series of the form $\sum_{n=0}^{\infty}a_n(z-z_0)^n$, with complex coefficients $a_n$ and center $z_0$.

##### Theorem A

If the series converges at some $z_1\ne z_0$, then it converges absolutely for every $z$ with $|z-z_0|<|z_1-z_0|$.

##### Start of proof

Choose $r$ such that $|z-z_0|\le r<|z_1-z_0|$.

![[Kyle Kabasares - Complex Variables - Power series convergence on a smaller disk.png|**Fig. 125** The smaller disk centered at $z_0$ contains $z$. The point $z_1$ lies on the outer circle.]]

Since $\sum_{n=0}^{\infty}a_n(z_1-z_0)^n$ converges, its terms tend to zero. Hence there is a constant $M$ such that $|a_n|\,|z_1-z_0|^n\le M$ for every $n$.

##### Proof of Theorem A

Set $p=r/|z_1-z_0|$. The choice $|z-z_0|\le r<|z_1-z_0|$ gives $0\le p<1$, so

$$
|a_n|\,|z-z_0|^n
=|a_n|\,|z_1-z_0|^n
\left(\frac{|z-z_0|}{|z_1-z_0|}\right)^n
\le Mp^n.
$$

The handwritten reminder for $p<1$ uses $z$ in one place. The denominator and the chosen upper bound on $r$ use $z_1$. Since the geometric series $\sum_{n=0}^{\infty}Mp^n$ converges, comparison gives convergence of $\sum_{n=0}^{\infty}|a_n|\,|z-z_0|^n$. Therefore the power series converges absolutely.

##### Radius of convergence

The notes distinguish three cases.

1. If the series converges only at $z=z_0$, then $R=0$.

   ![[Kyle Kabasares - Complex Variables - Convergence set with zero radius.png|**Fig. 126** The only point shown in the convergence set is $z_0$.]]

2. If it converges for every $z$, then $R=\infty$.

   ![[Kyle Kabasares - Complex Variables - Convergence across the whole plane.png|**Fig. 127** Hatching represents convergence throughout the plane.]]

3. If the radius is finite and positive, the series converges absolutely for $|z-z_0|<R$ and diverges for $|z-z_0|>R$. At $|z-z_0|=R$, use a separate convergence test.

   ![[Kyle Kabasares - Complex Variables - Convergence disk of radius five.png|**Fig. 128** The dashed boundary illustrates the finite-radius case with $R=5$.]]

##### Ratio test

For $z\ne0$, the ratio of successive terms of $\sum_{n=0}^{\infty}(-1)^n z^n/n!$ gives

$$
\lim_{n\to\infty}
\left|\frac{(-1)^{n+1}z^{n+1}}{(n+1)!}
\frac{n!}{(-1)^n z^n}\right|
=\lim_{n\to\infty}\frac{|z|}{n+1}=0.
$$

The page recalls that the ratio test gives absolute convergence below $1$, divergence above $1$, and is inconclusive at $1$. The series converges at $z=0$ as well, so $R=\infty$.

##### Root test

Apply $\lim_{n\to\infty}\sqrt[n]{|a_n|}$, when the limit exists, to the terms $a_n$ of the series. For $\sum_{n=0}^{\infty}5^n(z-1)^n$, the limit is

$$
\lim_{n\to\infty}|5^n(z-1)^n|^{1/n}=5|z-1|.
$$

It is less than $1$ for $|z-1|<1/5$, giving $R=1/5$.

![[Kyle Kabasares - Complex Variables - Radius one fifth around the center one.png|**Fig. 129** The dashed circle shows the disk centered at $1$ with radius $1/5$.]]

##### Derivative of a power series

If $f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n$ has radius $R>0$, including $R=\infty$, then $f$ is infinitely differentiable for $|z-z_0|<R$. Termwise differentiation gives

$$
f^{(k)}(z)=\sum_{n=k}^{\infty}
n(n-1)\cdots(n-k+1)a_n(z-z_0)^{n-k}.
$$

**Example.** With $a_n=n$ and $z_0=0$,

$$
\begin{aligned}
f(z)&=\sum_{n=0}^{\infty}nz^n=z+2z^2+3z^3+\cdots,\\
f'(z)&=\sum_{n=1}^{\infty}n^2z^{n-1}=1+4z+9z^2+\cdots.
\end{aligned}
$$

##### Power series at the center

In the formula

$$
f^{(k)}(z)=\sum_{n=k}^{\infty}n(n-1)\cdots(n-k+1)a_n(z-z_0)^{n-k},
$$

the term with $n=k$ is constant, and the terms with $n>k$ vanish at $z=z_0$. The notes mark the constant term with $0^0$ and a side calculation $\lim_{t\to0^+}t^t=1$. Here the factor is $1$ because it is the constant monomial. Thus $f^{(k)}(z_0)=k!a_k$, so

$$
a_k=\frac{f^{(k)}(z_0)}{k!}.
$$

**Example.** Let $f(z)=\sum_{n=0}^{\infty}z^n/n!$. The center is $0$ and the radius of convergence is infinite. Differentiation and reindexing give

$$
f'(z)=\sum_{n=1}^{\infty}\frac{nz^{n-1}}{n!}
=\sum_{n=1}^{\infty}\frac{z^{n-1}}{(n-1)!}
=\sum_{n=0}^{\infty}\frac{z^n}{n!}=f(z).
$$

Therefore

$$
\frac{d}{dz}\bigl(e^{-z}f(z)\bigr)
=e^{-z}f'(z)-e^{-z}f(z)=0.
$$

The second term in the handwriting also carries a prime. The product rule gives the unprimed factor above. Since $f(0)=1$, the constant $e^{-z}f(z)$ equals $1$, and $f(z)=e^z$.

##### Laurent series

Suppose $f$ is analytic for $R_1<|z-z_0|<R_2$. Take a positively oriented simple closed contour $C$ in the annulus enclosing $z_0$.

![[Kyle Kabasares - Complex Variables - Contour C between the two annular radii.png|**Fig. 130** The contour $C$ lies between the circles of radii $R_1$ and $R_2$.]]

$$
f(z)=\sum_{n=0}^{\infty}a_n(z-z_0)^n+\sum_{n=1}^{\infty}\frac{b_n}{(z-z_0)^n}.
$$

##### Laurent coefficients

The coefficient formulas are

$$
a_n=\frac{1}{2\pi i}\int_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz,
\qquad
b_n=\frac{1}{2\pi i}\int_C f(z)(z-z_0)^{n-1}\,dz.
$$

If $f$ is analytic on the full disk $|z-z_0|<R_2$, including the center, then all $b_n$ vanish by Cauchy–Goursat. In that case $a_n=f^{(n)}(z_0)/n!$, an equality written next to the first coefficient formula on the page.

Two approaches are to evaluate the coefficient integrals directly or rearrange the expression using a known series, such as the geometric series or $e^x=\sum_{n=0}^{\infty}x^n/n!$.

**Example.** Expand $f(z)=1/(1-z)$ about $0$. The pole at $1$ lies on the unit circle.

![[Kyle Kabasares - Complex Variables - Unit circle through the pole at one.png|**Fig. 131** The circle is centered at $0$ and goes through the pole $z=1$.]]

The geometric series gives the Taylor expansion $\frac1{1-z}=\sum_{n=0}^{\infty}z^n$ for $|z|<1$. For the exterior annulus $1<|z|<\infty$, use $|1/z|<1$ there.

$$
\frac1{1-z}=-\frac1z\frac1{1-1/z}
=-\frac1z\sum_{n=0}^{\infty}\left(\frac1z\right)^n
=-\sum_{m=1}^{\infty}z^{-m}.
$$

The boxed result and the numerical check both include the minus sign. A later restatement on the page drops it. At $z=2$, the function gives $1/(1-2)=-1$, and the Laurent series gives $-(1/2)/(1-1/2)=-1$.

The preceding exterior series also gives $f(3)=-(1/3)/(1-1/3)=-1/2$.

**Example.** Find the series about $0$ for

$$
f(z)=-\frac1{(z-1)(z-2)}
=\frac1{z-1}-\frac1{z-2}.
$$

The poles divide the problem into $D_1$ with $|z|<1$, $D_2$ with $1<|z|<2$, and $D_3$ with $|z|>2$. Taylor and Laurent series may be added term by term on their common region of convergence.

![[Kyle Kabasares - Complex Variables - Circles through the poles at one and two.png|**Fig. 132** The circles of radii $1$ and $2$ separate the three regions for the expansions centered at $0$.]]

##### Region $D_1$

For $|z|<1$,

$$
\frac1{z-1}=-\frac1{1-z}=-\sum_{n=0}^{\infty}z^n.
$$

The other term expands for $|z|<2$.

$$
-\frac1{z-2}=\frac1{2-z}
=\frac12\frac1{1-z/2}
=\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n.
$$

Adding the two gives

$$
f(z)=\sum_{n=0}^{\infty}\left(-1+\frac1{2^{n+1}}\right)z^n,
\qquad |z|<1.
$$

The page also suggests direct coefficient evaluation using $a_n=(2\pi i)^{-1}\int_C f(z)/z^{n+1}\,dz$. The handwritten prefactor omits $i$.

##### Region $D_2$

For $1<|z|<2$, expand the first term in inverse powers because $|1/z|<1$.

$$
\frac1{z-1}=\frac1z\frac1{1-1/z}
=\frac1z\sum_{n=0}^{\infty}\left(\frac1z\right)^n.
$$

Since $|z|<2$, the second term is

$$
-\frac1{z-2}=\frac1{2-z}=\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n.
$$

On $1<|z|<2$, combine it with the inverse-power expansion from [[#Region $D_1$|the section on Region $D_1$]].

$$
f(z)=\frac1z\sum_{n=0}^{\infty}\left(\frac1z\right)^n+
\frac12\sum_{n=0}^{\infty}\left(\frac z2\right)^n.
$$

The page recalls $a_n=(2\pi i)^{-1}\int_C f(z)/(z-z_0)^{n+1}\,dz$ and the geometric tail $\sum_{n=k}^{\infty}r^n=r^k/(1-r)$ for $|r|<1$, with first term $r^k$.

For $f(z)=1/(1-z)$, the series $\sum_{n=0}^{\infty}z^n$ converges for $|z|<1$.

![[Kyle Kabasares - Complex Variables - Unit disk for the geometric series at zero.png|**Fig. 133** The dashed unit circle bounds the convergence disk centered at $0$.]]

The Taylor coefficients can be computed from the derivatives or by a contour integral.

$$
a_n=\frac{f^{(n)}(0)}{n!}
=\frac1{2\pi i}\int_C\frac{f(z)}{z^{n+1}}\,dz.
$$

Here $f(0)=1$, $f'(0)=1$, and $f''(0)=2$. In general $f^{(n)}(z)=n!(1-z)^{-(n+1)}$, giving $a_n=1$.

##### Expansion about $z_0=3$

The disk in the sketch has radius $2$, reaching from $1$ to $5$ along the real axis. Its condition is $|z-3|<2$, written $|z|<2$ on one line.

![[Kyle Kabasares - Complex Variables - Taylor disk centered at three.png|**Fig. 134** The disk centered at $3$ reaches the pole at $1$ on its boundary.]]

The notes suggest writing the fraction in the form $A/[B-(z-3)]$. The last line gives the factorization that determines the alternating signs in the series.

$$
\begin{aligned}
\frac1{1-z}
&=\frac1{1-3-(z-3)}
=-\frac12\frac1{1+(z-3)/2}\\
&=-\frac12\sum_{n=0}^{\infty}\left(-\frac{z-3}{2}\right)^n
=\sum_{n=0}^{\infty}\frac{(-1)^{n+1}}{2^{n+1}}(z-3)^n.
\end{aligned}
$$

The intermediate series on the page drops the minus sign in the geometric ratio.

With $c=z-3$, the preceding factorization reads $1/(-2-c)=1/[-2(1+c/2)]$.

**Laurent series**

##### Region $D_3$

Continue the example $f(z)=1/(z-1)-1/(z-2)$. The handwritten product form on this page loses its leading minus sign. For $|z|>2$, expand the second partial fraction using $|2/z|<1$.

$$
-\frac1{z-2}
=-\frac1z\frac1{1-2/z}
=-\frac1z\sum_{n=0}^{\infty}\left(\frac2z\right)^n
=-\sum_{n=0}^{\infty}\frac{2^n}{z^{n+1}}.
$$

Both fractions now expand in inverse powers. Adding them and reindexing gives

$$
f(z)=\sum_{n=0}^{\infty}\frac{1-2^n}{z^{n+1}}
=\sum_{m=1}^{\infty}(1-2^{m-1})z^{-m},
\qquad |z|>2.
$$

The ratio condition and final region are reversed in places in the handwriting. The exterior expansion requires $|2/z|<1$.

##### Properties of power series

Let $f(z)=\sum_{n=0}^{\infty}a_nz^n$ and $g(z)=\sum_{n=0}^{\infty}b_nz^n$ on a common disk $|z|<R$.

$$
\begin{aligned}
f(z)+g(z)&=\sum_{n=0}^{\infty}(a_n+b_n)z^n,\\
f'(z)&=\sum_{n=1}^{\infty}na_nz^{n-1},\\
F(z)&=\sum_{n=0}^{\infty}\frac{a_n}{n+1}z^{n+1},\qquad F'=f,\\
f(z)g(z)&=\sum_{k=0}^{\infty}\left(\sum_{n=0}^k a_n b_{k-n}\right)z^k.
\end{aligned}
$$

The indices in the last two handwritten formulas are inconsistent. The antiderivative includes the contribution $a_0z$, and the product coefficient collects powers with indices adding to $k$.

##### Cauchy–Goursat theorem

If $f$ is analytic on and inside a simple closed contour $C$, then $\int_C f(z)\,dz=0$.

##### Isolated singular points

A singular point is a point where $f$ fails to be analytic. It is isolated if $f$ is analytic on a punctured disk $0<|z-z_0|<\delta$ for some $\delta>0$.

1. For $f(z)=1/z$, the origin is an isolated singularity.
2. For $f(z)=1/\sin(\pi/z)$, the points $z=1/n$ for nonzero integers $n$ are isolated singularities. They accumulate at $0$, so the origin is a nonisolated singularity.

## Source

Kyle Kabasares, *Complex Variables and Applications (Math 122, UC Merced 2016)*.
