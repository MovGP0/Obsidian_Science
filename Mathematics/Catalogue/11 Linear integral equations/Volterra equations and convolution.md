---
title: "Volterra equations and convolution"
catalogue_ids:
  - "11.4"
  - "11.4.1"
  - "11.4.2"
  - "11.4.3"
  - "11.4.4"
  - "11.4.5"
---

> [!TLDR]
> A Volterra equation uses values below the current input; its triangular integration region gives convergent iteration and step-by-step numerical methods.

## Volterra integral equations

Read [[Kernels and classification]], [[08.03 The fundamental theorem]], and [[09.02 Infinite series#Geometric series]]. A Volterra equation on $[0,b]$ integrates from $0$ to the current input $x$:

$$
u(x)=f(x)+\lambda\int_0^xK(x,t)u(t)\,dt.
$$

The known upper bound $b$ specifies where we seek the answer, but the integral at $x$ stops at $x$. This triangular ordering is the central distinction from a fixed-limit Fredholm equation. For example, at $x=0$ the integral is zero, so a second-kind solution must have $u(0)=f(0)$.

## Theoretical foundations

Assume $f$ is continuous and $K$ is continuous on the closed triangle $0\leq t\leq x\leq b$, with $|K|\leq M$. Write $Vu(x)=\int_0^xK(x,t)u(t)\,dt$. Repeated integration gives

$$
|(V^nu)(x)|\leq\frac{M^nx^n}{n!}\|u\|_\infty.
$$

For $n=1$, this is the ordinary integral estimate. If it holds for $n$, the next step is bounded by $M\int_0^xM^nt^n\|u\|_\infty/n!\,dt$, which equals the bound for $n+1$. This inductive calculation proves the factorial factor rather than assuming a contraction for the whole interval.

For any finite $\lambda$, the series $\sum_n(|\lambda|Mb)^n/n!$ converges. Thus the Neumann series gives a continuous solution on the full finite interval. To prove uniqueness, a difference $d$ of two solutions satisfies $d=\lambda^nV^nd$ for every $n$. Its norm is at most $(|\lambda|Mb)^n\|d\|/n!$. The factor tends to zero, so $d=0$. This theorem concerns continuous bounded kernels; a singular kernel requires a separate result.

## Solution by differentiation

For $u(x)=1+\lambda\int_0^xu(t)\,dt$, differentiating gives $u'=\lambda u$ and the endpoint equation gives $u(0)=1$. Hence $u=e^{\lambda x}$. Substitution verifies it even if the differential-equation method is unfamiliar, since $\lambda\int_0^xe^{\lambda t}\,dt=e^{\lambda x}-1$ for $\lambda\ne0$. For $\lambda=0$, $u=1$ directly.

More generally, if $K$ has a continuous partial derivative $K_x$, the variable-limit rule gives

$$
\frac{d}{dx}\int_0^xK(x,t)u(t)\,dt
=K(x,x)u(x)+\int_0^xK_x(x,t)u(t)\,dt.
$$

There are two terms: one from moving the boundary and one from changing the kernel. Omitting either can change the problem. For a first-kind equation $\int_0^xK(x,t)u(t)\,dt=f(x)$, the necessary condition is $f(0)=0$. If $K(x,x)$ is never zero and $f$ is continuously differentiable, differentiation produces a second-kind equation after division by $K(x,x)$.

For example, $\int_0^x(x-t)u(t)\,dt=x^3/6$ has a zero diagonal kernel. One derivative gives $\int_0^xu(t)\,dt=x^2/2$; a second gives $u=x$. Both endpoint conditions $f(0)=f'(0)=0$ hold. Checking the original integral gives $x^3/6$. Differentiation can lose endpoint constraints, so always check the original equation.

## Neumann series for second-kind equations

Starting with $u_0=f$, set $u_{n+1}=f+\lambda Vu_n$. For $K=1$ and $f=1$, the successive functions are

$$
1,\quad1+\lambda x,\quad1+\lambda x+\frac{\lambda^2x^2}{2!},\quad\ldots.
$$

They converge to $e^{\lambda x}$ for every finite $x$ and $\lambda$. The convergence is not restricted by $|\lambda|b<1$: that would discard the factorial structure. A useful bound on the tail after degree $n$ is

$$
\|u-u_n\|_\infty\leq\|f\|_\infty
e^{|\lambda|Mb}\frac{(|\lambda|Mb)^{n+1}}{(n+1)!}.
$$

It follows by bounding the exponential-series tail. The same Volterra mechanism underlies Picard iteration; see [Angenent's Wisconsin notes on existence by iteration](https://people.math.wisc.edu/~angenent/519.2016s/notes/picard.html).

## Convolution-type equations

If $K(x,t)=k(x-t)$, write $(k*u)(x)=\int_0^xk(x-t)u(t)\,dt$. This is the **one-sided convolution**. It depends on the difference of inputs. It is not the two-sided integral over the whole real line.

For functions of at most exponential growth on $[0,\infty)$, define the Laplace transform $U(s)=\int_0^\infty e^{-sx}u(x)\,dx$ for real $s$ sufficiently large. An absolutely convergent change of integration order proves $\mathcal L(k*u)=K(s)U(s)$, where $K(s)$ here names the transform of $k$, not a two-variable kernel. Thus

$$
U(s)=\frac{F(s)}{1-\lambda K(s)}
$$

where the denominator is nonzero in the region used. Inverse transformation still needs the growth and transform conventions.

For $u=1+\int_0^xe^{-(x-t)}u(t)\,dt$, $F=1/s$ and $K=1/(s+1)$. Hence $U=(s+1)/s^2=1/s+1/s^2$, so $u=1+x$. One can avoid transforms entirely: its convolution integral is $\int_0^xe^{-(x-t)}(1+t)\,dt=x$. The two methods agree.

## Numerical treatment

Let $x_i=ih$ and approximate the integral with a composite trapezoidal rule. For $i\geq1$,

$$
\left(1-\frac{\lambda h}{2}K(x_i,x_i)\right)U_i
=f(x_i)+\lambda h\left[\frac12K(x_i,0)U_0+
\sum_{j=1}^{i-1}K(x_i,x_j)U_j\right],
\qquad U_0=f(0).
$$

Only earlier values and the current diagonal coefficient occur. This makes a step-by-step solution possible. Require the diagonal coefficient to be nonzero; choose a smaller step if necessary. Smoothness assumptions for trapezoidal error are stronger than mere continuity. For sufficiently smooth data, this method has second-order global accuracy on a fixed interval.

For $K=1$, $f=1$, and $\lambda=1$, subtract consecutive grid equations to obtain $U_i=[(1+h/2)/(1-h/2)]U_{i-1}$. With $h=1/2$, $U_0=1$, $U_1=5/3$, and $U_2=25/9$. The exact endpoint value is $e$, so the endpoint error is about $0.0595$. Refinement and comparison with a known answer test the numerical method.

## Practice

1. Solve $\int_0^xu(t)\,dt=x^3$ and check the endpoint condition.
2. For $u=1+2\int_0^xu(t)\,dt$, find $u_2$ and the exact answer.

## Worked answers

1. Differentiation gives $u(x)=3x^2$. The right-hand side is zero at $0$. Substitution gives $\int_0^x3t^2\,dt=x^3$, so differentiation has retained the required equation.
2. With $u_0=1$, $u_1=1+2x$ and $u_2=1+2x+2x^2$. The differential equation is $u'=2u$, $u(0)=1$, so $u=e^{2x}$. The series is its exponential expansion, not a geometric series in $2x$.
