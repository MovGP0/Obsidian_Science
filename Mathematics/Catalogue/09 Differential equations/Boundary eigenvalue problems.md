---
title: "Boundary eigenvalue problems"
catalogue_ids:
  - "9.1.3"
  - "9.1.3.1"
  - "9.1.3.2"
  - "9.1.3.3"
  - "9.1.3.4"
---

> [!TLDR]
> Boundary conditions select eigenvalues and orthogonal eigenfunctions; regular finite-interval theorems must not be applied unchanged at singular endpoints.

## Data at more than one point

Read [[Linear equations and order reduction]], [[15.05 Eigenvalue problems]], and [[16.03 Function inner products]]. A second-order boundary-value problem prescribes conditions at endpoints of an interval, such as $y(0)=0$ and $y(1)=1$. An initial-value uniqueness theorem does not automatically apply to these separated data.

For example, $y''+y=0$ has $y=A\cos x+B\sin x$. On $[0,\pi]$, zero values at both ends give $A=0$ and leave $B$ arbitrary. Replacing the right-end value by $1$ gives no solution. The number and placement of conditions do not alone guarantee a solution.

## A regular Sturm–Liouville problem

A useful eigenvalue form is

$$
-(p y')'+q y=\lambda w y,\qquad a<x<b.
$$

The number $\lambda$ is unknown, and $y$ must not be identically zero. For the regular case take a finite interval, real $p\in C^1[a,b]$, continuous real $q,w$, and $p>0$, $w>0$ on the closed interval. Use real separated homogeneous conditions

$$
\alpha_1y(a)+\alpha_2p(a)y'(a)=0,\qquad
\beta_1y(b)+\beta_2p(b)y'(b)=0,
$$

where neither coefficient pair is zero. These conditions make the integration-by-parts boundary term vanish for two functions satisfying the same conditions. The resulting regular self-adjoint problem has real eigenvalues, a discrete sequence tending to $+\infty$, and a complete orthogonal eigenfunction system for its weighted square-integrable space. For these separated scalar conditions each eigenvalue is simple. A full proof of completeness needs analysis beyond this introductory lesson.

These hypotheses do not imply that every eigenvalue is positive: the sign of $q$ and the boundary conditions matter. Positivity in the next example follows from a separate integration identity. Periodic conditions are also self-adjoint in suitable form, but are not separated and can give repeated eigenvalues.

## Why different eigenfunctions are orthogonal

Let $y_m,y_n$ have distinct eigenvalues. Multiply their equations by $y_n,y_m$, subtract, and integrate. Integration by parts gives

$$
(\lambda_m-\lambda_n)\int_a^b w y_my_n\,dx
=[p(y_m y_n'-y_m'y_n)]_a^b=0.
$$

Thus the weighted inner product is zero. For complex functions put a complex conjugate on the second factor. This is the function-space counterpart of orthogonal eigenvectors of a real symmetric matrix. The weight $w$ belongs in the inner product; omitting it changes the coefficient formula.

## Worked eigenvalue problem

Solve $-y''=\lambda y$ on $(0,1)$ with $y(0)=y(1)=0$. Multiplying by $y$ and integrating gives

$$
\lambda\int_0^1 y^2dx=\int_0^1(y')^2dx\ge0.
$$

If $\lambda=0$, $y=A+Bx$, and both zero endpoint values force $A=B=0$, which is excluded. For $\lambda=k^2>0$, $y=A\cos kx+B\sin kx$. The left condition gives $A=0$, and the right requires $\sin k=0$. Therefore

$$
\lambda_n=n^2\pi^2,\qquad y_n(x)=\sin(n\pi x),\qquad n=1,2,\ldots.
$$

Changing the right condition to $y'(1)=0$ changes the list to $\lambda_n=((n+1/2)\pi)^2$, $n=0,1,\ldots$. The boundary conditions are part of the operator, not information added after its eigenvalues are found.

## Expand a function in eigenfunctions

For an orthogonal family, an expansion $f=\sum_n c_ny_n$ has coefficients

$$
c_n=\frac{\int_a^b w f y_n\,dx}{\int_a^b w y_n^2\,dx}.
$$

With the sine functions above, the denominator is $1/2$. For $f(x)=x$ on $(0,1)$, integration by parts gives

$$
c_n=2\int_0^1x\sin(n\pi x)dx
=\frac{2(-1)^{n+1}}{n\pi}.
$$

The series represents $x$ in the interval interior and in the square-integral sense. At $x=1$ each sine term is zero, while the assigned value $f(1)$ is $1$. Endpoint convergence must be interpreted through the sine extension, not assumed from the interior equality. Differentiating such a series term by term needs stronger convergence assumptions.

## Singular cases and endpoint behavior

The regular theorem is unavailable if the interval is infinite, if $p$ or $w$ loses positivity at an endpoint, or if coefficients fail its continuity conditions. Such problems are **singular**. They can still have useful self-adjoint operators, but the admissible endpoint behavior and function space must be specified separately.

For $-(xy')'=0$ on $(0,1)$, integration gives $xy'=C$, so $y=C\log x+D$. The coefficient $p=x$ vanishes at the excluded endpoint. Requiring $y$ to remain bounded as $x\to0^+$ removes the logarithm. Requiring only $\int_0^1|y|^2dx<\infty$ does not remove it, because $\int_0^1(\log x)^2dx=2$. These are different endpoint requirements. One cannot replace them by a casual “value at zero” for a divergent candidate.

On an unbounded interval the spectrum need not be discrete: the operator $-d^2/dx^2$ on the real line has oscillatory generalized modes rather than a countable square-integrable sine basis. Singular does not mean automatically discrete, automatically continuous, or unsolvable.

## Practice

1. Find the zero mode and positive eigenvalues for $-y''=\lambda y$ on $(0,1)$ with $y'(0)=y'(1)=0$.
2. Expand $f(x)=\sin\pi x+3\sin2\pi x$ in the Dirichlet eigenfunctions. Explain the coefficient calculation.

## Worked answers

1. For $\lambda=0$, every nonzero constant works. For positive $\lambda=k^2$, the first derivative condition removes the sine term and the second gives $\sin k=0$. Thus $\lambda_n=n^2\pi^2$, with $y_n=\cos n\pi x$, for $n=0,1,\ldots$. The integration identity excludes negative eigenvalues here.
2. The coefficients are $c_1=1$, $c_2=3$, and all others zero. In the coefficient formula, distinct sine terms integrate to zero, while each squared sine integrates to $1/2$. Dividing by that same $1/2$ preserves the two stated amplitudes.

## Further reading

Jiří Lebl’s [Sturm–Liouville lesson](https://www.jirka.org/diffyqs/html/slproblems_section.html) develops regularity, eigenvalues, and eigenfunction expansions.
