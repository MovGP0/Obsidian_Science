---
title: "Trapezoidal, Simpson, and Gaussian quadrature"
---

> [!TLDR]
> Derive integration weights from interpolating polynomials and use error terms to compare quadrature rules.

## Worked lecture material

##### Dr. Kim. Numerical integration

The aim is to compute a definite integral $I=\int_a^b f(x)\,dx$. If $f=F'$, the fundamental theorem of calculus gives $I=F(b)-F(a)$. Numerical integration is useful when the antiderivative is unknown or inconvenient to evaluate.

For example, take the initial-value problem $y'+2ty=\sin t$, $y(0)=y_0$. Multiplying by the integrating factor $e^{\int 2t\,dt}=e^{t^2}$ gives

$$
(ye^{t^2})'=e^{t^2}\sin t.
$$

Integrating from $0$ to $t$ and dividing by $e^{t^2}$ gives

$$
y(t)=y_0e^{-t^2}+e^{-t^2}\int_0^t e^{\tau^2}\sin\tau\,d\tau.
$$

In particular, computing $y(2)$ requires $\int_0^2 e^{\tau^2}\sin\tau\,d\tau$. **Numerical quadrature** approximates definite integrals such as this one.

Replace $f$ with a polynomial interpolant, then integrate that polynomial exactly. For the linear Lagrange interpolant on $[x_0,x_1]$,

$$
P_1(x)=\frac{x-x_1}{x_0-x_1}f(x_0)+\frac{x-x_0}{x_1-x_0}f(x_1).
$$

Using $\int (u-c)\,du=\tfrac12(u-c)^2+C$, we get

$$
\begin{aligned}
\int_{x_0}^{x_1}f(x)\,dx
&\approx\int_{x_0}^{x_1}P_1(x)\,dx\\
&=\frac{f(x_0)}{x_0-x_1}\left[\tfrac12(x-x_1)^2\right]_{x_0}^{x_1}
+\frac{f(x_1)}{x_1-x_0}\left[\tfrac12(x-x_0)^2\right]_{x_0}^{x_1}\\
&=\frac{x_1-x_0}{2}\bigl[f(x_0)+f(x_1)\bigr].
\end{aligned}
$$

This is the **trapezoid rule**, the average of the left- and right-endpoint rectangle rules.

![[Kyle Kabasares - Numerical Analysis - Trapezoid rule area.png|**Fig. 22** The trapezoid uses the line joining the function values at $a$ and $b$.]]

##### Simpson's rule from the quadratic interpolant

Approximate $\int_{x_0}^{x_2}f(x)\,dx$ by the integral of $P_2(x)$ through $x_0,x_1,x_2$.

![[Kyle Kabasares - Numerical Analysis - Simpson rule area.png|**Fig. 23** The sketch marks the three nodes for quadrature using a quadratic interpolant.]]

With the Lagrange basis written explicitly, the integral is

$$
\begin{aligned}
\int_{x_0}^{x_2}P_2(x)\,dx
={}&\frac{f(x_0)}{(x_0-x_1)(x_0-x_2)}
\int_{x_0}^{x_2}(x-x_1)(x-x_2)\,dx\\
&+\frac{f(x_1)}{(x_1-x_0)(x_1-x_2)}
\int_{x_0}^{x_2}(x-x_0)(x-x_2)\,dx\\
&+\frac{f(x_2)}{(x_2-x_0)(x_2-x_1)}
\int_{x_0}^{x_2}(x-x_0)(x-x_1)\,dx.
\end{aligned}
$$

For each integral, use $\int (x-a)(x-b)\,dx=x^3/3-(a+b)x^2/2+abx+C$. The respective pairs $(a,b)$ are $(x_1,x_2)$, $(x_0,x_2)$ and $(x_0,x_1)$. Evaluate each antiderivative at $x_2$ and $x_0$ and take the difference.

The coefficient of $f(x_0)$ in the quadratic quadrature formula is

$$
\begin{aligned}
\int_{x_0}^{x_2}L_0(x)\,dx
&=\frac{\left[x^3/3-(x_1+x_2)x^2/2+x_1x_2x\right]_{x_0}^{x_2}}
{(x_0-x_1)(x_0-x_2)}\\
&=\frac{-x_2^3/6+x_1x_2^2/2-x_0^3/3
+(x_1+x_2)x_0^2/2-x_0x_1x_2}
{(x_0-x_1)(x_0-x_2)}.
\end{aligned}
$$

Choosing equally spaced nodes with $x_1-x_0=x_2-x_1=h$ simplifies the expressions and gives Simpson's rule.

##### Dr. Tokman. Numerical integration

Replace $f$ by a polynomial and integrate the polynomial to approximate $I[f]=\int_a^b f(x)\,dx$.

![[Kyle Kabasares - Numerical Analysis - Trapezoid under a concave curve.png|**Fig. 24** The area under the straight interpolant approximates the area under the curve on $[a,b]$.]]

For example, $\int_0^{\pi/2}\sin x\,dx$ could be approximated by integrating a truncated Taylor series. The Taylor polynomial uses the function and its derivatives at one point. The Lagrange interpolant uses function values at multiple nodes.

![[Kyle Kabasares - Numerical Analysis - Taylor and Lagrange input data.png|**Fig. 25** Taylor approximation uses data at $x_0$, and Lagrange interpolation uses values at $x_0,x_1,x_2$.]]

The degree-one Lagrange interpolant through $(a,f(a))$ and $(b,f(b))$ is

$$
P_1(x)=\frac{(b-x)f(a)+(x-a)f(b)}{b-a}.
$$

Integrating it gives the trapezoidal rule.

The trapezoidal approximation is $I_T[f]=\tfrac12(b-a)(f(a)+f(b))$. For the sine example,

$$
I_T[\sin]=\frac\pi4\bigl(\sin(\pi/2)+\sin0\bigr)=\frac\pi4\approx0.785398.
$$

The exact integral is $[-\cos x]_0^{\pi/2}=1$, so the error is $1-\pi/4\approx0.215$.

A more accurate approximation can use both endpoint values and the midpoint value $f((a+b)/2)$. These are the three values used to construct the quadratic interpolant for Simpson's rule.

![[Kyle Kabasares - Numerical Analysis - Endpoint and midpoint quadrature nodes.png|**Fig. 26** The three nodes are the two endpoints and the midpoint.]]

The second numerical example on this page uses the **composite trapezoid rule** on two equal subintervals. Although the handwritten error expression labels it $I_S$, its weights are $1,2,1$.

$$
\frac\pi8\bigl[\sin0+2\sin(\pi/4)+\sin(\pi/2)\bigr]\approx0.948059.
$$

The absolute error is about $0.0519$. The lecture defers the proof of the trapezoidal error formula to Tuesday.

##### Error of the trapezoidal rule

For $f\in C^2[a,b]$ and $h=b-a$, the single-panel error is

$$
E_T[f]=I[f]-I_T[f]=-\frac{h^2(b-a)}{12}f''(\mu)
$$

for some $\mu\in(a,b)$. With $x_0=a$, $x_1=b$, integrate the linear interpolation error to obtain

$$
E_T[f]=\int_a^b \frac{(x-a)(x-b)}2 f''(\xi(x))\,dx.
$$

The factor $(x-a)(x-b)/2$ has fixed sign on the interval. The weighted average of the second-derivative values therefore lies between the minimum and maximum of $f''$. By continuity it equals $f''(\mu)$ for an intermediate $\mu$. The weight integrates to

$$
\frac12\left[\frac{x^3}{3}-\frac{a+b}{2}x^2+abx\right]_a^b
=-\frac{(b-a)^3}{12}.
$$

##### Composite integration

Split $[a,b]$ into subintervals and apply a low-order rule, such as the trapezoidal rule, on each one. For $x_0=a$, $x_n=b$ and equally spaced nodes with $h=(x_n-x_0)/n$,

$$
I[f]=\sum_{i=1}^n\int_{x_{i-1}}^{x_i}f(x)\,dx
\approx\sum_{i=1}^n\frac h2\bigl[f(x_{i-1})+f(x_i)\bigr].
$$

Combining repeated interior nodes gives the **composite trapezoidal rule**.

$$
T_n[f]=\frac h2\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$

##### Composite Simpson's rule

Let $n$ be even, $h=(b-a)/n$ and $x_i=a+ih$, $i=0,\ldots,n$. Apply the single-panel rule $\tfrac h3[f(x_0)+4f(x_1)+f(x_2)]$ to each pair of subintervals.

![[Kyle Kabasares - Numerical Analysis - Composite Simpson panels.png|**Fig. 27** Each Simpson panel spans two subintervals. Adjacent panels share their endpoints.]]

Thus

$$
S_n[f]=\frac h3\left[
f(x_0)+4\sum_{j=1}^{n/2}f(x_{2j-1})
+2\sum_{j=1}^{n/2-1}f(x_{2j})+f(x_n)\right].
$$

##### Error theorem

If $f\in C^4[a,b]$, then for some $\xi_n\in(a,b)$,

$$
E_n^S[f]=I[f]-S_n[f]=-\frac{h^4(b-a)}{180}f^{(4)}(\xi_n).
$$

This is a fourth-order method.

##### Deriving quadrature error formulas

Start from the Lagrange interpolant and its remainder.

$$
f(x)=P_n(x)+E_n(x)
=\sum_{i=0}^n f(x_i)L_i(x)
+\left(\prod_{i=0}^n(x-x_i)\right)\frac{f^{(n+1)}(\xi(x))}{(n+1)!}.
$$

Integrating the Lagrange formula separates the quadrature approximation and its error.

$$
\begin{aligned}
I[f]&=\sum_{i=0}^n f(x_i)\int_a^b L_i(x)\,dx+E_n^I,\\
E_n^I&=\int_a^b
\left(\prod_{i=0}^n(x-x_i)\right)\frac{f^{(n+1)}(\xi(x))}{(n+1)!}\,dx.
\end{aligned}
$$

For the trapezoidal rule, $n=1$, $x_0=a$ and $x_1=b$. The product has one sign on the interval, so the weighted mean value argument gives

$$
E_1^{I_T}=\frac{f''(\mu)}2\int_a^b(x-x_0)(x-x_1)\,dx
=-\frac{h^3}{12}f''(\mu),\qquad h=b-a.
$$

##### Simpson's rule

![[Kyle Kabasares - Numerical Analysis - Single Simpson panel nodes.png|**Fig. 28** One Simpson panel has endpoints $x_0=a$ and $x_2=b$ and midpoint $x_1=(a+b)/2$.]]

For $h=(b-a)/2$, the rule is $\int_{x_0}^{x_2} f(x)\,dx\approx \tfrac h3[f(x_0)+4f(x_1)+f(x_2)]$. Its interpolation error is

$$
E_2^{I_S}=\frac16\int_{x_0}^{x_2}(x-x_0)(x-x_1)(x-x_2) f^{(3)}(\xi(x))\,dx.
$$

Taking absolute values gives an $O(h^4)$ bound. The cubic weight changes sign at $x_1$, so the trapezoid mean value argument cannot be used to factor out a single third derivative. A Taylor expansion about $x_1$ reveals the sharper $O(h^5)$ local error.

$$
f(x)=f(x_1)+(x-x_1)f'(x_1)
+\frac{(x-x_1)^2}{2}f''(x_1)
+\frac{(x-x_1)^3}{3!}f^{(3)}(x_1)
+\frac{(x-x_1)^4}{4!}f^{(4)}(\xi(x)).
$$

On integration from $x_1-h$ to $x_1+h$, the odd terms cancel. The first-power integral contains the difference $h^2-(-h)^2=0$. The quadratic term instead contains $h^3-(-h)^3=2h^3$.

With $x_0=x_1-h$ and $x_2=x_1+h$, the fourth-order Taylor remainder integrates to $h^5 f^{(4)}(\mu)/60$. This follows from the nonnegative weight $(x-x_1)^4/4!$ and its integral $2h^5/120$. The integrated expansion is

$$
\int_{x_0}^{x_2}f(x)\,dx=2hf(x_1)+\frac{h^3}{3}f''(x_1)
+\frac{h^5}{60}f^{(4)}(\mu).
$$

The centered difference for the second derivative gives

$$
f''(x_1)=\frac{f(x_0)-2f(x_1)+f(x_2)}{h^2}-\frac{h^2}{12}f^{(4)}(\xi).
$$

Substitution yields

$$
\int_{x_0}^{x_2}f(x)\,dx
=\frac h3\bigl[f(x_0)+4f(x_1)+f(x_2)\bigr]
-\frac{h^5}{36}f^{(4)}(\xi)+\frac{h^5}{60}f^{(4)}(\mu).
$$

This establishes a local error of $O(h^5)$ for bounded $f^{(4)}$. The notes then use the sharper single-panel remainder $-h^5 f^{(4)}(\xi_1)/90$ in the composite formula. Combining the two derivative terms into one at an intermediate point requires a separate argument because their coefficients have opposite signs.

For even $n$ with $x_0=a$ and $x_n=b$, sum the single-panel expressions.

$$
\int_a^b f(x)\,dx=
\sum_{j=1}^{n/2}\left[
\frac h3\bigl(f(x_{2j-2})+4f(x_{2j-1})+f(x_{2j})\bigr)
-\frac{h^5}{90}f^{(4)}(\xi_j)
\right].
$$

![[Kyle Kabasares - Numerical Analysis - First and last Simpson panels.png|**Fig. 29** The first panel runs from $x_0$ to $x_2$, and the last runs from $x_{n-2}$ to $x_n$.]]

The sum of the approximations is the composite Simpson formula. Its error is $-h^5/90$ times the sum of the panel values $f^{(4)}(\xi_j)$. Their average lies between the minimum and maximum of $f^{(4)}$ on $[a,b]$.

$$
\min_{[a,b]} f^{(4)}\le
\frac2n\sum_{j=1}^{n/2} f^{(4)}(\xi_j)
\le\max_{[a,b]} f^{(4)}.
$$

Continuity gives a point $\xi^*$ where $f^{(4)}$ equals this average. Substituting $n=(b-a)/h$ gives

$$
I[f]-S_n[f]=-\frac{h^5}{90}\frac n2 f^{(4)}(\xi^*)
=-\frac{h^4(b-a)}{180}f^{(4)}(\xi^*).
$$

##### Quadrature weights

Approximate $\int_a^b f(x)\,dx$ by $\sum_{j=0}^n c_jf(x_j)$ for $x_j=a+jh$, with $x_0=a$ and $x_n=b$. In the trapezoidal rule, $n=1$ and $c_0=c_1=(b-a)/2$.

The trapezoidal rule is exact for a linear function because its second derivative vanishes. For example,

$$
\int_2^6(-3x+\tfrac12)\,dx
=\left[-\tfrac32x^2+\tfrac12x\right]_2^6
=(-54+3)-(-6+1)=-46.
$$

Simpson's rule is exact for cubics because the fourth derivative vanishes. The margin gives $\int_{-1}^1(3x^3+2x^2)\,dx$ as an example.

Can a two-node quadrature rule gain precision by choosing nodes other than the endpoints? On $[-1,1]$, take $\widetilde x_0=-\sqrt3/3$, $\widetilde x_1=\sqrt3/3$ and $c_0=c_1=1$. Then

$$
\int_{-1}^1 f(x)\,dx\approx f(-\sqrt3/3)+f(\sqrt3/3).
$$

This is exact for every polynomial of degree at most three. Check the monomials $1,x,x^2,x^3$. For $1$, both the integral and the weighted sum are $2$. For $x$, both are zero because the nodes are opposites.

For the remaining two monomials, the two-node rule gives

$$
\begin{aligned}
\int_{-1}^1 x^2\,dx&=(-\sqrt3/3)^2+(\sqrt3/3)^2=\tfrac23,\\
\int_{-1}^1 x^3\,dx&=(-\sqrt3/3)^3+(\sqrt3/3)^3=0.
\end{aligned}
$$

To find the nodes and weights for higher-order rules, the notes refer to textbook Table 4.12 or to their construction using Legendre polynomials.

Two functions $P$ and $Q$ are orthogonal on $[a,b]$ with unit weight if $\int_a^b P(x)Q(x)\,dx=0$. For example, $P(x)=1$ and $Q(x)=x$ are orthogonal on $[-1,1]$ because $\int_{-1}^1 x\,dx=0$.

##### Legendre polynomials

The normalization used here is monic. The polynomial $P_k$ has degree $k$ and leading coefficient $1$, and $\int_{-1}^1 P_k(x)P_j(x)\,dx=0$ for $j\ne k$. The first five are

$$
\begin{aligned}
P_0(x)&=1,\\
P_1(x)&=x,\\
P_2(x)&=x^2-\tfrac13,\\
P_3(x)&=x^3-\tfrac35x,\\
P_4(x)&=x^4-\tfrac67x^2+\tfrac3{35}.
\end{aligned}
$$

The notes refer to Math 132 for deriving these polynomials.

For example, $P_1$ and $P_2$ are orthogonal because

$$
\int_{-1}^1 x(x^2-\tfrac13)\,dx
=\left[\frac{x^4}{4}-\frac{x^2}{6}\right]_{-1}^1=0.
$$

##### Gaussian quadrature

By choosing both the weights $c_j$ and the nodes $\widetilde x_j$ for $j=0,\ldots,n$, Gaussian quadrature can make

$$
\int_a^b f(x)\,dx\approx\sum_{j=0}^n c_j f(\widetilde x_j)
$$

exact for polynomials of degree at most $2n+1$. To construct the rule for $[-1,1]$, begin with two facts about the Legendre basis.

1. Any polynomial $Q$ of degree at most $n$ can be written as $\sum_{j=0}^n\alpha_jP_j(x)$. For example, $3x^2+x-4=3P_2(x)+P_1(x)-3P_0(x)$.
2. $P_{n+1}$ is orthogonal to every such $Q$, since
   $$
   \int_{-1}^1 P_{n+1}(x)Q(x)\,dx
   =\sum_{j=0}^n\alpha_j\int_{-1}^1P_{n+1}(x)P_j(x)\,dx=0.
   $$

##### Step 3

For a polynomial $f$ of degree $2n+1$, divide by the monic Legendre polynomial $P_{n+1}$ to write $f=P_{n+1}Q+R$, where $\deg Q=n$ and $\deg R\le n$. For example, $P_2(x)(x+1)=(x^2-\tfrac13)(x+1)=x^3+x^2-\tfrac13 x-\tfrac13$, of degree $3=2(1)+1$.

The notes start another division with $n=2$, $f(x)=5x^5+3x^4-8x+1$ and divisor $P_3(x)=x^3-\tfrac35 x$. The written division uses $-1$ for the constant instead of the $+1$ in the definition. Using the stated $+1$, the quotient is $5x^2+3x+3$ and the remainder is $\tfrac95 x^2-\tfrac{31}5x+1$.

##### Step 4

Orthogonality gives

$$
\int_{-1}^1 f(x)\,dx=\int_{-1}^1 P_{n+1}(x)Q(x)\,dx+\int_{-1}^1R(x)\,dx
=\int_{-1}^1R(x)\,dx.
$$

##### Step 5

Let $\widetilde x_0,\ldots,\widetilde x_n$ be the roots of $P_{n+1}$. At each root, $f(\widetilde x_j)=R(\widetilde x_j)$ because the product $P_{n+1}Q$ vanishes there.

##### Step 6

Since $\deg R\le n$, recover $R$ from its $n+1$ values at these nodes using Lagrange interpolation.

The Lagrange representation at the roots of $P_{n+1}$ is

$$
R(x)=\sum_{j=0}^n R(\widetilde x_j)
\prod_{\substack{0\le i\le n\\i\ne j}}\frac{x-\widetilde x_i}{\widetilde x_j-\widetilde x_i}.
$$

Integrate $R$ and use $R(\widetilde x_j)=f(\widetilde x_j)$. For $f$ of degree at most $2n+1$, this gives

$$
\int_{-1}^1 f(x)\,dx=\sum_{j=0}^n c_j f(\widetilde x_j),
\qquad
c_j=\int_{-1}^1\prod_{\substack{0\le i\le n\\i\ne j}}
\frac{x-\widetilde x_i}{\widetilde x_j-\widetilde x_i}\,dx.
$$

| $n$ | Monic Legendre polynomial $P_{n+1}(x)$ | Nodes |
| ---: | --- | --- |
| $0$ | $x$ | $0$ |
| $1$ | $x^2-\tfrac13$ | $-\sqrt3/3$, $\sqrt3/3$ |
| $2$ | $x^3-\tfrac35 x$ | $-\sqrt{3/5}$, $0$, $\sqrt{3/5}$ |

Apply the two- and three-point Gaussian rules to $\int_{-1}^1[x\cos(3x)-\cos x]\,dx$.

Let $f(x)=x\cos(3x)-\cos x$. Its odd part integrates to zero on $[-1,1]$, so the exact integral is $-2\sin1\approx-1.682942$. The approximations in the notes are

$$
\begin{aligned}
f(-\sqrt3/3)+f(\sqrt3/3)&\approx-1.675824,\\
\tfrac59 f(-\sqrt{3/5})+\tfrac89f(0)+\tfrac59 f(\sqrt{3/5})
&\approx-1.683003,\\
\tfrac13 f(-1)+\tfrac43 f(0)+\tfrac13 f(1)&\approx-1.69353487.
\end{aligned}
$$

The first two are Gaussian quadrature with two and three points. The last is Simpson's rule. The three-point Gaussian error is about $6.1\times10^{-5}$, and the Simpson error is about $1.1\times10^{-2}$.

For a general interval $[a,b]$, set $x=(a+b+(b-a)t)/2$. Then $t=-1$ gives $x=a$, $t=1$ gives $x=b$, and $dx=(b-a)\,dt/2$. Thus

$$
\int_a^b g(x)\,dx=\frac{b-a}{2}\int_{-1}^1g\!\left(\frac{a+b+(b-a)t}{2}\right)\,dt.
$$

For example,

$$
\int_2^7 x\cos x\,dx=\frac52\int_{-1}^1\frac{9+5t}{2}\cos\!\left(\frac{9+5t}{2}\right)\,dt.
$$

## Source

Kyle Kabasares, *Numerical Analysis (Math 130, UC Merced 2016)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$ | $\unit{s}$ | Time | Independent variable in the particle example. The recorded values have no specified unit. |
