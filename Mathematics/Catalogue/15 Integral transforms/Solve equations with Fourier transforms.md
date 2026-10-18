---
title: "Solve equations with Fourier transforms"
catalogue_ids:
  - "15.3.2"
  - "15.3.2.1"
  - "15.3.2.2"
---

> [!TLDR]
> Fourier transformation changes derivatives in a whole-line variable into multiplication and makes each transformed parameter solve a simpler equation.

## Which variable is transformed

Read [[Fourier integrals and transform rules]] first. For a function $y(x)$ over the whole real line, write $\widehat y(k)=\int_{\mathbb R}y(x)e^{-ikx}dx$. Under suitable decay, $y'$ transforms to $ik\widehat y$ and $y''$ to $-k^2\widehat y$. This is useful for equations whose data are specified on a whole line or through decay at both ends.

A Fourier transform over the full line does not automatically encode a value at $x=0$. A half-line initial-value problem often fits a one-sided Laplace transform better. For several independent variables, transform only the selected variable. If $u=u(x,t)$ and $x$ is transformed, then $u_t$ transforms to $\partial_t\widehat u(k,t)$, while $u_{xx}$ transforms to $-k^2\widehat u(k,t)$. Smoothness and domination must permit differentiation under the integral.

## Ordinary linear differential equations

Consider the whole-line problem

$$
-y''(x)+a^2y(x)=f(x),\qquad a>0,
$$

with decay at $x\to\pm\infty$. Its transformed equation is $(k^2+a^2)\widehat y(k)=\widehat f(k)$. Since $k^2+a^2$ is positive for real $k$, division is safe. From the exponential pair in the preceding lesson,

$$
G(x)=\frac{e^{-a|x|}}{2a},\qquad \widehat G(k)=\frac1{k^2+a^2}.
$$

Therefore $y=G*f$. For smooth compactly supported $f$, this convolution gives the classical decaying solution. More general integrable data admit a weak or distributional interpretation. The function $G$ has a corner at zero; its derivative jump is $-1$. Consequently $-G''+a^2G=\delta$ in the distribution sense. The corner is necessary, rather than an error.

## Worked example on the whole line

Set $a=1$ and $f(x)=e^{-|x|}$. The convolution formula gives, for $x\geq0$,

$$
y(x)=\frac12\int_{-\infty}^{\infty}e^{-|x-v|}e^{-|v|}\,dv.
$$

Split at $v=0$ and $v=x$. The three contributions before the factor $1/2$ are $e^{-x}/2$, $xe^{-x}$, and $e^{-x}/2$. Thus $y(x)=(x+1)e^{-x}/2$ for $x\geq0$. Symmetry gives

$$
y(x)=\frac{1+|x|}{2}e^{-|x|}.
$$

For $x>0$, $y'=-xe^{-x}/2$ and $y''=(x-1)e^{-x}/2$. Hence $-y''+y=e^{-x}$. Reflection proves the negative half, and the derivatives join at zero. The solution decays in both directions. Adding $Ce^x+De^{-x}$ solves the homogeneous equation but cannot preserve decay at both ends unless $C=D=0$.

## Partial differential equations

For the mathematical diffusion equation on $\mathbb R\times(0,\infty)$,

$$
u_t=u_{xx},\qquad u(x,0)=f(x),
$$

Fourier transformation in $x$ yields an ordinary differential equation for each $k$:

$$
\partial_t\widehat u=-k^2\widehat u,\qquad
\widehat u(k,0)=\widehat f(k).
$$

Thus $\widehat u(k,t)=e^{-k^2t}\widehat f(k)$. The Gaussian pair gives

$$
u(x,t)=\int_{\mathbb R}\frac{e^{-(x-v)^2/(4t)}}{\sqrt{4\pi t}}f(v)\,dv,
\qquad t>0.
$$

For bounded continuous $f$, this integral is defined and approaches $f(x)$ at each continuity point as $t\downarrow0$. For rapidly decreasing smooth $f$, all the preceding transforms and derivatives can be justified directly. The kernel integrates to one and is concentrated near zero when $t$ is small. These facts explain the initial limit. Higher values of $|k|$ are reduced more quickly because of $e^{-k^2t}$, which explains smoothing without invoking a physical interpretation.

With $f(x)=e^{-x^2}$, multiplication of Gaussian transforms and inversion give

$$
u(x,t)=\frac1{\sqrt{1+4t}}\exp\left(-\frac{x^2}{1+4t}\right).
$$

At $t=0$ the formula returns $f$. Direct differentiation checks $u_t=u_{xx}$. The integral over $x$ remains $\sqrt\pi$, since the wider Gaussian has a compensating lower prefactor.

## Limitations and other domains

If the multiplier vanishes on the real transform axis, division can produce singularities and non-uniqueness. For $y''+a^2y=f$, the multiplier is $a^2-k^2$ and vanishes at $k=\pm a$. Extra conditions and a different inverse interpretation can be needed. Do not treat it as the positive-denominator example above.

On a finite interval, boundary conditions often select sine or cosine series instead of a full-line transform. On a half-line, odd or even extension can enforce a zero value or zero derivative at the endpoint. Check the extension and boundary conditions explicitly; see [[16.09 Boundary-value applications]].

Transport gives another instructive PDE. If $u_t+cu_x=0$ and $u(x,0)=f(x)$, Fourier transformation in $x$ gives $\partial_t\widehat u=-ick\widehat u$. Thus $\widehat u=e^{-ickt}\widehat f(k)$, and the translation rule returns $u(x,t)=f(x-ct)$. Unlike the Gaussian multiplier, this multiplier has modulus one for real $c,k,t$. It moves the function without smoothing it. Comparing these two transformed equations explains how a derivative multiplier can produce either translation or smoothing, depending on the original differential operator.

## Practice

1. For $u_t=3u_{xx}$, write the transformed solution with initial function $f$.
2. Find the decaying solution of $-y''+4y=\delta(x)$ in the distribution sense.

> [!example]- Worked answers
> 1. Each parameter solves $\partial_t\widehat u=-3k^2\widehat u$, so $\widehat u=e^{-3k^2t}\widehat f(k)$. Inversion gives convolution with $e^{-x^2/(12t)}/\sqrt{12\pi t}$.
> 2. The transform of the impulse is $1$, so $\widehat y=1/(k^2+4)$. Put $a=2$ in the exponential pair to obtain $y=e^{-2|x|}/4$. Its derivative jump is $-1$, as the impulse equation requires.
