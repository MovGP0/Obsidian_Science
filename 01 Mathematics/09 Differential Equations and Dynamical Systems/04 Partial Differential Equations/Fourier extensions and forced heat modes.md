---
title: "Fourier extensions and forced heat modes"
---

> [!TLDR]
> Use even or odd extensions to select a Fourier basis and obtain forced mode equations by projection.

## Worked lecture material

##### Fourier series

The notes cite page 86. Separation of variables for the periodic heat equation requires representing the initial profile as a linear combination of the spatial eigenfunctions of the boundary value problem.

$$
f(x)=a_0+\sum_{n=1}^{\infty}a_n\cos\left(\frac{n\pi x}{L}\right)
+\sum_{n=1}^{\infty}b_n\sin\left(\frac{n\pi x}{L}\right).
$$

Does the series converge? If it converges, does it converge to $f$? Does the resulting infinite series for $u$ solve the PDE?

Recall that a piecewise smooth function has $f$ and $f'$ continuous on the separate pieces of its domain. The sketches illustrate what may occur where the pieces meet.

![[Kyle Kabasares - Partial Differential Equations - Jump in a piecewise smooth function.png|**Fig. 13** The function approaches two different values on the two sides of $x_0$.]]

![[Kyle Kabasares - Partial Differential Equations - Piecewise smooth function with a kink.png|**Fig. 14** A kink at $x_1$ interrupts continuity of the slope. The sketch also shows jumps between other pieces.]]

For $f(x)=x^{1/3}$, the derivative is $f'(x)=\tfrac13 x^{-2/3}=1/(3x^{2/3})$ for $x\ne0$. It is unbounded at zero, so this example fails the piecewise-smooth condition on an interval containing zero.

![[Kyle Kabasares - Partial Differential Equations - Cube root with an unbounded derivative.png|**Fig. 15** The cube-root curve has a vertical tangent at the origin.]]

##### Periodic extension

The Fourier series formed from $f$ on $[-L,L]$ is periodic with period $2L$. The original function need only be given on the base interval. For example, repeat $f(x)=\tfrac32 x$ from the interior of $[-L,L]$ to form a sawtooth with jumps at the joins.

![[Kyle Kabasares - Partial Differential Equations - Sawtooth periodic extension of a linear function.png|**Fig. 16** The line rises from $-3L/2$ to $3L/2$ on each period of length $2L$.]]

The Fourier series on $[-L,L]$ is

$$
a_0+\sum_{n=1}^{\infty}a_n\cos\left(\frac{n\pi x}{L}\right)
+\sum_{n=1}^{\infty}b_n\sin\left(\frac{n\pi x}{L}\right),
$$

with Fourier coefficients $a_0$ and $a_n,b_n$ for $n=1,2,\ldots$.

The Fourier coefficients on $[-L,L]$ are

$$
\begin{aligned}
a_0&=\frac{1}{2L}\int_{-L}^L f(x)\,dx,\\
a_n&=\frac1L\int_{-L}^L f(x)\cos(n\pi x/L)\,dx,\\
b_n&=\frac1L\int_{-L}^L f(x)\sin(n\pi x/L)\,dx,\qquad n\ge1.
\end{aligned}
$$

The coefficient $a_0$ requires that $\int_{-L}^L f(x)\,dx$ exist and be finite.

##### Fourier series convergence theorem

If $f$ is piecewise smooth on $[-L,L]$, its Fourier series converges to the value of its $2L$-periodic extension wherever that extension is continuous. At a jump, it converges to the mean of the two one-sided limits,

$$
\frac{f_{\mathrm{per}}(x^+)+f_{\mathrm{per}}(x^-)}2.
$$

In the interior, the limit is $f(x)$ at continuity points. At either endpoint the two limits come from opposite ends of the base interval, giving $(f(-L^+)+f(L^-))/2$. The handwritten endpoint line has a minus sign between the limits. The theorem statement and the sketching instructions use their sum.

To sketch the Fourier series limit, draw $f$ on the base interval, extend it periodically, and mark the mean of the one-sided limits at each jump with a cross.

##### Fourier series of a step

On $[-L,L]$, let $f(x)=0$ for $x\le L/2$ and $f(x)=1$ for $x>L/2$.

![[Kyle Kabasares - Partial Differential Equations - Step function on its base interval.png|**Fig. 17** The value is zero at $x=L/2$ and jumps to one immediately to its right.]]

![[Kyle Kabasares - Partial Differential Equations - Periodic extension of the step function.png|**Fig. 18** The nonzero segment repeats every $2L$. The sketch shows the next copy between $5L/2$ and $3L$.]]

By the convergence theorem, the Fourier series has the following limit on the base interval.

$$
\begin{cases}
\frac12 & x=-L,\\
0 & -L<x<L/2,\\
\frac12 & x=L/2,\\
1 & L/2<x<L,\\
\frac12 & x=L.
\end{cases}
$$

##### Fourier sine series

The heat solution with homogeneous Dirichlet conditions is

$$
\thermal{u}(x,t)=\sum_{n=1}^\infty B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
$$

##### )

The page lists $f(x)=x^3$ on $[-1,1]$ as a Fourier-series example. It then considers the forced heat equation on $[0,L]$ with fixed endpoint temperatures $\thermal{A},\thermal{B}\in\mathbb R$ and initial profile $\thermal{f}(x)$.

$$
\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}+\thermal{Q}'(x),
\qquad
\thermal{u}(0,t)=\thermal{A},
\qquad
\thermal{u}(L,t)=\thermal{B},
\qquad
\thermal{u}(x,0)=\thermal{f}(x).
$$

At equilibrium, the time derivative is zero, so $\thermal{k}\thermal{u}_E''=-\thermal{Q}'(x)$. The example takes $\thermal{Q}'=1$, $\thermal{A}=2$, $\thermal{B}=3$, and $L=1$. Integrating gives $\thermal{u}_E(x)=-x^2/(2\thermal{k})+c_1x+c_2$. The endpoints give $c_2=2$ and $c_1=1+1/(2\thermal{k})$, so

$$
\thermal{u}_E(x)=-\frac{x^2}{2\thermal{k}}
+\frac{2\thermal{k}+1}{2\thermal{k}}x+2.
$$

Propose $\thermal{v}=\thermal{u}-\thermal{u}_E$. Then $\partial_t\thermal{u}=\partial_t\thermal{v}+\partial_t\thermal{u}_E$ and $\partial_x^2\thermal{u}=\partial_x^2\thermal{v}+\partial_x^2\thermal{u}_E$.

In the forced example, $\partial_t\thermal{u}_E=0$ and $\thermal{u}_E''=-1/\thermal{k}$. Thus

$$
\partial_t\thermal{v}
=\thermal{k}\partial_x^2\thermal{v}+\thermal{k}(-1/\thermal{k})+1
=\thermal{k}\partial_x^2\thermal{v}.
$$

The boundary conditions become $\thermal{v}(0,t)=2-2=0$ and $\thermal{v}(1,t)=3-3=0$. The initial condition is $\thermal{v}(x,0)=\thermal{f}(x)-\thermal{u}_E(x)$. After solving for $\thermal{v}$, recover $\thermal{u}=\thermal{v}+\thermal{u}_E$.

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ on $[-L,L]$, impose $\thermal{u}(-L,t)=\thermal{u}(L,t)$ and $\partial_x\thermal{u}(-L,t)=\partial_x\thermal{u}(L,t)$ for $t>0$. The initial profile is the step from [[#Fourier series of a step|the section on Fourier series of a step]], zero for $x<L/2$ and one for $x>L/2$.

$$
\thermal{u}(x,t)=a_0+\sum_{n=1}^{\infty}
e^{-\thermal{k}(n\pi/L)^2t}\bigl[a_n\cos(n\pi x/L)+b_n\sin(n\pi x/L)\bigr].
$$

The exponent is negative because the heat modes decay. The handwritten exponent places the negative sign inside the square. The coefficients for the initial data are

$$
\begin{aligned}
a_0&=\frac1{2L}\int_{-L}^L\thermal{f}(x)\,dx,\\
a_n&=\frac1L\int_{-L}^L\thermal{f}(x)\cos(n\pi x/L)\,dx,\\
b_n&=\frac1L\int_{-L}^L\thermal{f}(x)\sin(n\pi x/L)\,dx.
\end{aligned}
$$

##### Fourier sine series and odd extension

If $f$ is odd, $f(-x)=-f(x)$. Since $\sin(-x)=-\sin x$, the product $f(x)\sin(n\pi x/L)$ is even. Thus

$$
B_n=\frac1L\int_{-L}^L f(x)\sin(n\pi x/L)\,dx
=\frac2L\int_0^L f(x)\sin(n\pi x/L)\,dx.
$$

For a function given on $[0,L]$, form the odd extension by taking $-f(-x)$ on $(-L,0)$ and using zero at the origin for the odd extension. If this extension is piecewise smooth, the Fourier theorem gives the sine series $f(x)\sim\sum_{n=1}^\infty B_n\sin(n\pi x/L)$ on $[0,L]$, with the one-sided average at jumps.

![[Kyle Kabasares - Partial Differential Equations - Odd extension by reflection through the origin.png|**Fig. 19** The dashed left half of the sketch is obtained from the right half by changing the signs of both coordinates.]]

To sketch the sine-series limit, draw $f$ on $[0,L]$, extend it oddly to $[-L,L]$, repeat with period $2L$, and mark the average of the limits at each jump with a cross.

The example cites page 95 and asks for the sine series of $f(x)=100$ on $[0,L]$. The first two sketching steps give the following.

![[Kyle Kabasares - Partial Differential Equations - Odd extension of the constant one hundred.png|**Fig. 20** The odd extension is $-100$ on $(-L,0)$ and $100$ on $(0,L)$.]]

![[Kyle Kabasares - Partial Differential Equations - Periodic square wave from the odd extension.png|**Fig. 21** The odd periodic extension alternates between $100$ and $-100$. At each jump, the crosses mark the sine series limit of zero.]]

The sine series is $100$ for $0<x<L$ and zero at $x=0,L$. For the heat equation with homogeneous Dirichlet conditions,

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},
$$

where

$$
B_n=\frac{200}{L}\int_0^L\sin(n\pi x/L)\,dx
=\frac{200}{n\pi}\bigl(1-(-1)^n\bigr)
=\begin{cases}
0 & n\text{ even},\\
400/(n\pi) & n\text{ odd}.
\end{cases}
$$

The middle handwritten expression has $200/L$. Evaluating the integral gives $200/(n\pi)$, which agrees with the final case split. The sine eigenfunctions satisfy the zero Dirichlet conditions.

**)**

Section 3.3.2 begins by recalling the full series on $[-L,L]$ and its coefficients.

$$
f(x)\sim a_0+\sum_{n=1}^{\infty}a_n\cos(n\pi x/L)
+\sum_{n=1}^{\infty}b_n\sin(n\pi x/L),
$$

$$
a_0=\frac1{2L}\int_{-L}^L f(x)\,dx,\quad
a_n=\frac1L\int_{-L}^L f(x)\cos(n\pi x/L)\,dx,\quad
b_n=\frac1L\int_{-L}^L f(x)\sin(n\pi x/L)\,dx.
$$

For an even function $f$, $f(-x)=f(x)$. The product $g(x)=f(x)\sin(n\pi x/L)$ is odd because $g(-x)=-g(x)$. Its integral on $[-L,L]$ vanishes, so $b_n=0$. The cosine integrands are even, giving

$$
a_0=\frac1L\int_0^L f(x)\,dx,\qquad
a_n=\frac2L\int_0^L f(x)\cos(n\pi x/L)\,dx,\quad n=1,2,\ldots.
$$

The cosine series can be written $a_0+\sum_{n=1}^{\infty}a_n\cos(n\pi x/L)$ or $\sum_{n=0}^{\infty}a_n\cos(n\pi x/L)$.

For $f$ given on $[0,L]$, form the even extension on $[-L,L]$ by reflection, with value $f(-x)$ for $x<0$. If $f$ is piecewise smooth, so is the extension, and the Fourier convergence theorem applies. The coefficients are the same integrals on $[0,L]$ as above.

To sketch the cosine-series limit, draw $f$ on $[0,L]$, reflect it evenly, extend periodically, and mark the average of the one-sided limits at each jump. The example is $f(x)=x$ for $0\le x\le L$.

For $f(x)=x$ on $[0,L]$, the even extension on $[-L,L]$ is $\lvert x\rvert$. Repeating it with period $2L$ gives a continuous triangular wave. Therefore the Fourier cosine series converges to $f(x)$ on the whole interval $[0,L]$.

![[Kyle Kabasares - Partial Differential Equations - Even reflection of the linear function.png|**Fig. 22** Reflecting the line $f(x)=x$ across the vertical axis produces $\lvert x\rvert$.]]

![[Kyle Kabasares - Partial Differential Equations - Triangular periodic extension of the linear function.png|**Fig. 23** The even extension repeats with period $2L$ and joins continuously at the endpoints.]]

The coefficients are

$$
a_0=\frac1L\int_0^L x\,dx=\frac L2,
\qquad
a_n=\frac2L\int_0^L x\cos(n\pi x/L)\,dx
=\frac{2L}{(n\pi)^2}(\cos(n\pi)-1).
$$

For the insulated heat problem with this initial profile,

$$
\thermal{u}(x,t)=\frac L2+
\sum_{n=1}^{\infty}\frac{2L(\cos(n\pi)-1)}{(n\pi)^2}
\cos(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
$$

On a symmetric domain, any function can be written as the sum of its even and odd parts.

$$
f(x)=\underbrace{\frac{f(x)+f(-x)}2}_{f_e(x)}
+\underbrace{\frac{f(x)-f(-x)}2}_{f_o(x)}.
$$

The expansion of the two halves in the handwritten line uses a minus sign for the odd part, which is the sign needed in the grouped formula.

The Fourier series of $f$ is the sum of the cosine series of its even part and the sine series of its odd part.

##### Continuous Fourier series

For piecewise smooth $f$ on $[-L,L]$, the Fourier series has a continuous limit equal to $f$ throughout the base interval if and only if $f$ is continuous and $f(-L)=f(L)$. The endpoint equality ensures that the periodic extension joins continuously.

For a piecewise smooth function on $[0,L]$, the notes also ask when the sine series has a continuous limit equal to $f$. Continuity of $f$ is required. Equality at both endpoints also requires $f(0)=f(L)=0$, since every sine term vanishes there.

**)**

For $\partial_t\thermal{u}=\thermal{k}\partial_x^2\thermal{u}$ with $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ and initial profile $\thermal{f}(x)$, recall

$$
\thermal{u}(x,t)=\sum_{n=1}^\infty B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},
\qquad
B_n=\frac2L\int_0^L\thermal{f}(x)\sin(n\pi x/L)\,dx.
$$

The sine series reproduces the initial profile at interior continuity points. Formally differentiating gives

$$
\begin{aligned}
\partial_t\thermal{u}
&=-\sum_{n=1}^\infty\thermal{k}(n\pi/L)^2 B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t},\\
\partial_x^2\thermal{u}
&=-\sum_{n=1}^\infty(n\pi/L)^2 B_n\sin(n\pi x/L)e^{-\thermal{k}(n\pi/L)^2t}.
\end{aligned}
$$

These expressions verify the PDE if differentiating the series term by term is justified. In general, $(\sum_{n=1}^\infty c_nu_n)'$ need not equal $\sum_{n=1}^\infty c_nu_n'$. The next page uses $f(x)=x$ on $[-L,L]$ as a counterexample.

![[Kyle Kabasares - Partial Differential Equations - Linear branch of the sawtooth differentiation example.png|**Fig. 24** The graph of $f(x)=x$ on $(-L,L)$, with both endpoints open.]]

The Fourier series for $f(x)=x$ on $(-L,L)$ is

$$
f(x)\sim 2\sum_{n=1}^{\infty}\frac{L}{n\pi}(-1)^{n+1}\sin\left(\frac{n\pi x}{L}\right).
$$

The derivative is $f'(x)=1$ on $(-L,L)$. Differentiating the series formally gives

$$
2\sum_{n=1}^{\infty}(-1)^{n+1}\cos\left(\frac{n\pi x}{L}\right).
$$

At $x=0$ the terms alternate between $2$ and $-2$, so the differentiated series diverges there. The periodic extension of $f$ has a jump at the ends of the interval.

When does differentiating a Fourier series term by term recover the derivative?

- **Full Fourier series.** Suppose $f$ is continuous on $[-L,L]$, $f(-L)=f(L)$, and $f'$ is piecewise smooth. The differentiated series converges to the derivative wherever the derivative of the periodic extension is continuous. At a jump of that derivative, the series converges to the average of its one-sided limits.
- **Fourier cosine series.** If $f$ is continuous on $[0,L]$ and $f'$ is piecewise smooth, use the even extension $f(-x)=f(x)$, which automatically matches the endpoint values at $-L$ and $L$. The same rule then applies to the differentiated series.

The handwritten full-series condition calls $f$ piecewise smooth. The statement above uses the sufficient hypothesis that $f'$ is piecewise smooth, as specified in the cosine-series case.

##### Differentiation of a Fourier sine series

Let $f$ be continuous on $[0,L]$ with piecewise smooth derivative. If $f(0)=f(L)=0$, the Fourier sine series can be differentiated term by term to obtain the Fourier cosine series of $f'$.

Write the sine series of $f$ as

$$
f(x)\sim\sum_{n=1}^{\infty}B_n\sin\left(\frac{n\pi x}{L}\right),
\qquad
B_n=\frac{2}{L}\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

Since $f'$ is piecewise smooth, its cosine series is

$$
f'(x)\sim A_0+\sum_{n=1}^{\infty}A_n\cos\left(\frac{n\pi x}{L}\right),
$$

where

$$
\begin{aligned}
A_0
&=\frac{1}{L}\int_0^L f'(x)\,dx
=\frac{f(L)-f(0)}{L},\\
A_n
&=\frac{2}{L}\int_0^L f'(x)\cos\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

Integrate by parts with $u=\cos(n\pi x/L)$ and $dv=f'(x)\,dx$. Then $du=-(n\pi/L)\sin(n\pi x/L)\,dx$ and $v=f(x)$, so

$$
\begin{aligned}
A_n
&=\frac{2}{L}\left[f(x)\cos\left(\frac{n\pi x}{L}\right)\right]_0^L
+\frac{n\pi}{L}\frac{2}{L}\int_0^L f(x)\sin\left(\frac{n\pi x}{L}\right)\,dx\\
&=\frac{2}{L}\bigl[(-1)^n f(L)-f(0)\bigr]+\frac{n\pi}{L}B_n.
\end{aligned}
$$

Formal differentiation of the sine series gives the cosine coefficients $(n\pi/L)B_n$. They equal $A_n$ for every $n$ precisely when $(-1)^n f(L)-f(0)=0$ for both odd and even $n$, which gives $f(0)=f(L)=0$. These conditions also give $A_0=0$. Thus under the endpoint conditions,

$$
f'(x)\sim\sum_{n=1}^{\infty}\frac{n\pi}{L}B_n\cos\left(\frac{n\pi x}{L}\right).
$$

##### Eigenfunction expansion for the heat equation

Expand the temperature in sine eigenfunctions with time-dependent coefficients,

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty} B_n(t)\sin\left(\frac{n\pi x}{L}\right).
$$

The initial condition $\thermal{u}(x,0)=\thermal{f}(x)$ requires the sine expansion of $\thermal{f}$ at $t=0$, so

$$
B_n(0)=\frac{2}{L}\int_0^L \thermal{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

To check $\thermal{u}_t=\thermal{k}\thermal{u}_{xx}$, differentiate the series.

$$
\begin{aligned}
\thermal{u}_{xx}(x,t)
&=-\sum_{n=1}^{\infty}\left(\frac{n\pi}{L}\right)^2 B_n(t)
  \sin\left(\frac{n\pi x}{L}\right),\\
\thermal{u}_t(x,t)
&=\sum_{n=1}^{\infty}\frac{dB_n(t)}{dt}\sin\left(\frac{n\pi x}{L}\right).
\end{aligned}
$$

Matching coefficients gives the same decay factors as separation of variables.

$$
B_n'(t)=-\thermal{k}\left(\frac{n\pi}{L}\right)^2B_n(t),
\qquad
B_n(t)=B_n(0)e^{-\thermal{k}(n\pi/L)^2t}.
$$

##### Time differentiation of a Fourier series

For a continuous function $u(x,t)$, write its Fourier series in $x$ as

$$
u(x,t)\sim a_0(t)+\sum_{n=1}^{\infty}\left[
a_n(t)\cos\left(\frac{n\pi x}{L}\right)
+b_n(t)\sin\left(\frac{n\pi x}{L}\right)
\right].
$$

When differentiation under the coefficient integrals is valid and $\partial u/\partial t$ is piecewise smooth in $x$, the Fourier series of $\partial u/\partial t$ is

$$
\frac{\partial u}{\partial t}(x,t)\sim a_0'(t)+\sum_{n=1}^{\infty}\left[
a_n'(t)\cos\left(\frac{n\pi x}{L}\right)
+b_n'(t)\sin\left(\frac{n\pi x}{L}\right)
\right].
$$

The handwritten statement lists piecewise smoothness of $\partial u/\partial t$ as its condition. The interchange with the coefficient integrals is stated explicitly here.

| Date | Topic |
| --- | --- |
| March 7 | Finish Chapter 3 |
| March 9 | Chapter 4, derive the one-dimensional wave equation |
| March 14 | Section 4.4, solve the one-dimensional wave equation |
| March 16 | Sturm–Liouville eigenvalues |
| March 21 | Section 5.3 and practice midterm |
| March 23 | Midterm 2 |

##### Term-by-term differentiation of Fourier series and the method of eigenfunction expansion

Consider the heat equation with zero endpoint temperatures and a prescribed initial temperature.

$$
\begin{cases}
\displaystyle\frac{\partial\thermal{u}}{\partial t}
=\thermal{k}\frac{\partial^2\thermal{u}}{\partial x^2},\\[4pt]
\thermal{u}(0,t)=\thermal{u}(L,t)=0,\\
\thermal{u}(x,0)=\thermal{f}(x).
\end{cases}
$$

The initial statement on the page equates the two endpoint temperatures. The later calculation explicitly sets both to zero.

Separation of variables gives

$$
\begin{aligned}
\thermal{u}(x,t)
&=\sum_{n=1}^{\infty}B_n\sin\left(\frac{n\pi x}{L}\right)e^{-\thermal{k}(n\pi/L)^2t},\\
B_n
&=\frac{2}{L}\int_0^L\thermal{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
\end{aligned}
$$

For the eigenfunction expansion, write

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n(t)\sin\left(\frac{n\pi x}{L}\right),
$$

where $B_n(t)$ are the Fourier sine coefficients. The condition $\thermal{u}(x,0)=\thermal{f}(x)$ requires

$$
\thermal{f}(x)\sim\sum_{n=1}^{\infty}B_n(0)\sin\left(\frac{n\pi x}{L}\right),
\qquad
B_n(0)=\frac{2}{L}\int_0^L\thermal{f}(x)\sin\left(\frac{n\pi x}{L}\right)\,dx.
$$

To show that the expansion satisfies the heat equation, differentiate in $x$. With $\thermal{u}(0,t)=\thermal{u}(L,t)=0$ and the regularity required for the sine-series differentiation rule, the first derivative has a cosine series. Where $\partial\thermal{u}/\partial x$ is continuous, the series gives its value. Applying the cosine-series differentiation rule then gives the second derivative as a sine series.

$$
\begin{aligned}
\frac{\partial\thermal{u}}{\partial x}
&\sim\sum_{n=1}^{\infty}\frac{n\pi}{L}B_n(t)\cos\left(\frac{n\pi x}{L}\right),\\
\frac{\partial^2\thermal{u}}{\partial x^2}
&\sim-\sum_{n=1}^{\infty}\left(\frac{n\pi}{L}\right)^2B_n(t)\sin\left(\frac{n\pi x}{L}\right).
\end{aligned}
$$

Differentiate the sine expansion in time under the regularity conditions for termwise differentiation.

$$
\frac{\partial\thermal{u}}{\partial t}
=\sum_{n=1}^{\infty}B_n'(t)\sin\left(\frac{n\pi x}{L}\right).
$$

The margin assumption appears to name $\partial\thermal{u}/\partial x$ as piecewise smooth. The time-differentiation rule on [[#Eigenfunction expansion for the heat equation|the section on Eigenfunction expansion for the heat equation]] refers to $\partial\thermal{u}/\partial t$.

Substituting both differentiated series into the heat equation gives

$$
\sum_{n=1}^{\infty}\left[B_n'(t)+\thermal{k}\left(\frac{n\pi}{L}\right)^2B_n(t)\right]
\sin\left(\frac{n\pi x}{L}\right)=0.
$$

By orthogonality, each coefficient in brackets is zero. For each $n$, the solution is $B_n(t)=C e^{-\thermal{k}(n\pi/L)^2t}$ with $C=B_n(0)$. Thus

$$
\thermal{u}(x,t)=\sum_{n=1}^{\infty}B_n(0)e^{-\thermal{k}(n\pi/L)^2t}
\sin\left(\frac{n\pi x}{L}\right).
$$

##### Term-by-term integration of Fourier series

Take $f(x)=1$ on $[0,L]$. Its sine coefficients follow from the projection formula in Eq. (3.3.23).

$$
b_n=\frac{2}{L}\int_0^L\sin\left(\frac{n\pi x}{L}\right)\,dx
=\begin{cases}
\displaystyle\frac{4}{n\pi},&n\text{ odd},\\[4pt]
0,&n\text{ even}.
\end{cases}
$$

The resulting sine series is

$$
1\sim\sum_{\substack{n\ge 1\\ n\text{ odd}}}\frac{4}{n\pi}\sin\left(\frac{n\pi x}{L}\right)
=\frac{4}{\pi}\left[\sin\left(\frac{\pi x}{L}\right)
+\frac{1}{3}\sin\left(\frac{3\pi x}{L}\right)+\cdots\right].
$$

Integrate the sine series of $1$ from $0$ to $x$.

$$
\begin{aligned}
\int_0^x 1\,dt
&=\frac{4}{\pi}\left[
\int_0^x \sin\left(\frac{\pi t}{L}\right)\,dt+
\frac{1}{3}\int_0^x \sin\left(\frac{3\pi t}{L}\right)\,dt+\cdots\right],\\
x&=\frac{4L}{\pi^2}\left(1+\frac{1}{3^2}+\frac{1}{5^2}+\cdots\right)
-\frac{4L}{\pi^2}\sum_{\substack{n\ge 1\\ n\text{ odd}}}
\frac{\cos(n\pi x/L)}{n^2}.
\end{aligned}
$$

The sum over odd integers is the full sum minus its even terms.

$$
\sum_{\substack{n\ge 1\\ n\text{ odd}}}\frac{1}{n^2}
=\sum_{n=1}^{\infty}\frac{1}{n^2}
-\sum_{n=1}^{\infty}\frac{1}{(2n)^2}
=\frac{\pi^2}{6}-\frac{1}{4}\frac{\pi^2}{6}
=\frac{\pi^2}{8}.
$$

This gives the Fourier cosine series of $x$ on $[0,L]$.

$$
x=\frac{L}{2}-\frac{4L}{\pi^2}
\left[\cos\left(\frac{\pi x}{L}\right)
+\frac{1}{3^2}\cos\left(\frac{3\pi x}{L}\right)+\cdots\right].
$$

Its constant coefficient also follows directly from the projection formula.

$$
A_0=\frac{1}{L}\int_0^L x\,dx
=\frac{1}{L}\left[\frac{x^2}{2}\right]_0^L=\frac{L}{2}.
$$

##### Wave equation

The page introduces the one-dimensional scalar wave equation and also writes a vector form.

$$
\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{c}^{\,2}\frac{\partial^2\mechanical{u}}{\partial x^2},
\qquad
\nabla^2\vec{A}=\frac{1}{\mechanical{v}^{\,2}}\frac{\partial^2\vec{A}}{\partial t^2}.
$$

The scalar function $\mechanical{u}(x,t)$ can describe the displacement of a wave. The constant $\mechanical{c}$ typically represents the wave speed.

The wave equation is a second-order, linear, homogeneous hyperbolic PDE. It models propagation, including water waves, sound and pressure waves, electromagnetic waves, and seismic waves. The notes list applications in elasticity, seismology, quantum mechanics, and plasma physics, and mention the evolution of surfaces as another propagation phenomenon.

##### Derivation for an elastic string

The wave equation can be derived in several physical settings. A standard example is the transverse vibration of an elastic string. The displacement $\mechanical{u}$ is the height of the string relative to its equilibrium line.

![[Kyle Kabasares - Partial Differential Equations - Displacement of a vibrating elastic string.png|**Fig. 25** Two profiles of a vibrating string. The arrow measures the transverse displacement from the equilibrium line.]]

The string obeys Newton's laws under tension and any applied loads. Consider the short segment between $x$ and $x+\Delta x$. Its mass is approximately $\mechanical{\rho}_0(x)\Delta x$, where $\mechanical{\rho}_0(x)$ is the mass per unit length.

![[Kyle Kabasares - Partial Differential Equations - Short segment of the elastic string.png|**Fig. 26** The short segment of the string lies above the interval from $x$ to $x+\Delta x$.]]

The goal is to derive an equation for the change in $\mechanical{u}$ with time.

Apply Newton's second law, $\mechanical{\vec F}=\mechanical{m}\mechanical{\vec a}$, to the segment. Body forces, such as gravity, act throughout the segment. Tension acts along the tangent to the string at each endpoint.

Let $\mechanical{\theta}(x,t)$ be the angle between the string and the horizontal. The slope is

$$
\frac{\partial\mechanical{u}}{\partial x}
=\tan\mechanical{\theta}
=\frac{\sin\mechanical{\theta}}{\cos\mechanical{\theta}}
\approx\sin\mechanical{\theta}
$$

for small $\mechanical{\theta}$.

![[Kyle Kabasares - Partial Differential Equations - Vertical component of the string tension.png|**Fig. 27** The vertical component of the tangential tension is $T\sin\theta$.]]

The vertical equation of motion for the short segment is

$$
\begin{aligned}
\mechanical{\rho}_0(x)\Delta x\frac{\partial^2\mechanical{u}}{\partial t^2}
&=-\mechanical{T}(x,t)\sin\mechanical{\theta}(x,t)\\
&\quad+\mechanical{T}(x+\Delta x,t)\sin\mechanical{\theta}(x+\Delta x,t)\\
&\quad+\mechanical{\rho}_0(x)\mechanical{Q}(x,t)\Delta x.
\end{aligned}
$$

Here $\mechanical{Q}$ is the vertical body force per unit mass, for example $-\mechanical{g}$ for gravity. The factor $\Delta x$ in the body-force term follows from the segment mass and the continuum equation below.

Divide by $\Delta x$ and let $\Delta x\to 0$.

$$
\mechanical{\rho}_0(x)\frac{\partial^2\mechanical{u}}{\partial t^2}
=\frac{\partial}{\partial x}\left[\mechanical{T}(x,t)\sin\mechanical{\theta}(x,t)\right]
+\mechanical{\rho}_0(x)\mechanical{Q}(x,t).
$$

The small-slope approximation replaces $\sin\mechanical{\theta}$ by $\partial\mechanical{u}/\partial x$. For the idealized elastic string, take the tension to be the constant $\mechanical{T}_0$. Then

$$
\boxed{\mechanical{\rho}_0(x)\frac{\partial^2\mechanical{u}}{\partial t^2}
=\mechanical{T}_0\frac{\partial^2\mechanical{u}}{\partial x^2}
+\mechanical{\rho}_0(x)\mechanical{Q}(x,t).}
$$

If the body force per unit length is negligible compared with the tension term and $\mechanical{\rho}_0$ is uniform, the equation becomes

$$
\frac{\partial^2\mechanical{u}}{\partial t^2}
=\frac{\mechanical{T}_0}{\mechanical{\rho}_0}
\frac{\partial^2\mechanical{u}}{\partial x^2},
\qquad
\mechanical{c}=\sqrt{\frac{\mechanical{T}_0}{\mechanical{\rho}_0}}.
$$

The ratio labeled $c^2$ in the sketch is the square of the wave speed.

## Source

Kyle Kabasares, *Partial Differential Equations (Math 126, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{u}$ | $\unit{Pa}$ | Pressure | Unknown pressure in the divergence-form example. |
| $\thermal{u}$ | $\unit{K}$ | Temperature | Temperature in the rod as a function of position and time. |
| $\mechanical{\rho}$ | $\unit{kg/m^3}$ | Mass density | Mass per unit volume of the rod. |
| $\thermal{k}$ | $\unit{m^2/s}$ | Thermal diffusivity | Ratio of conductivity to volumetric heat capacity. |
| $\thermal{Q}$ | $\unit{W/m^3}$ | Volumetric heat source | Thermal energy supplied per unit time and volume. |
| $\thermal{Q}'$ | $\unit{K/s}$ | Temperature source | Volumetric heat source divided by volumetric heat capacity. |
| $\thermal{f}(x)$ | $\unit{K}$ | Initial temperature | Prescribed temperature distribution in the discussion example. |
| $\thermal{A},\thermal{B}$ | $\unit{K}$ | Fixed boundary temperatures | Prescribed endpoint values in the nonhomogeneous Dirichlet problem. |
| $\thermal{u}_E$ | $\unit{K}$ | Equilibrium temperature | Time-independent temperature profile with the prescribed boundary values. |
| $\thermal{v}$ | $\unit{K}$ | Temperature difference | Temperature relative to the equilibrium profile. |
| $\mechanical{u}(x,t)$ | $\unit{m}$ | Wave displacement | Scalar displacement at position $x$ and time $t$ in the one-dimensional wave model. |
| $\mechanical{c}$, $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Wave speed | Constant propagation speed in the scalar or vector wave equation. |
| $\mechanical{\rho}_0(x)$ | $\unit{kg\,m^{-1}}$ | Linear mass density | Mass per unit length of the string near $x$. |
| $\mechanical{T}(x,t)$, $\mechanical{T}_0$ | $\unit{N}$ | String tension | Tangential force and its constant value in the idealized model. |
| $\mechanical{\theta}(x,t)$ | $\unit{rad}$ | Tangent angle | Angle between the tangent to the string and the horizontal. |
| $\mechanical{Q}(x,t)$ | $\unit{m\,s^{-2}}$ | Vertical body force per unit mass | Applied vertical acceleration, such as $-\mechanical{g}$ for gravity. |
| $\mechanical{Q}$ in Exercise 4.4.2 | $\unit{N\,m^{-1}}$ | Load per unit length | Displacement-proportional load added directly to the string equation on [[Weighted eigenfunctions and Rayleigh bounds#Theorems for regular Sturm–Liouville problems with separated boundary conditions\|the section on Theorems for regular Sturm–Liouville problems with separated boundary conditions]]. |
| $L$, $H$ | $\unit{m}$ | Rectangular membrane dimensions | Length in the $x$ direction and height in the $y$ direction. |
| $r$, $a$ | $\unit{m}$ | Radial distance and membrane radius | Distance from the center and its value at the fixed rim. |
