---
title: "Nonlinear derivatives and Newton iteration"
catalogue_ids:
  - "12.8"
  - "12.8.1"
  - "12.8.2"
  - "12.8.3"
---

> [!TLDR]
> The derivative of a nonlinear operator is a bounded linear approximation; Newton iteration repeatedly solves that linear approximation.

## Prerequisite route

Start with [[07.03 The derivative]], [[07.08 Linear approximation]], [[10.04 Linear systems]], and [[Bounded operators and convergence]]. A Banach space is a complete normed vector space. An open set contains a small ball about each of its points. We use real scalars here, since complex differentiability imposes extra conditions.

## Nonlinear operators and examples

A map $F:X\to Y$ is **nonlinear** if it fails the linear rule $F(ax+by)=aF(x)+bF(y)$. An operator can act on a number, a vector, a sequence, or a function. The map $F(x,y)=(x^2+y,x-y^2)$ is a nonlinear operator on $\mathbb R^2$. Its output remains a vector. The map $J(u)=\int_0^1u(t)^2\,dt$ on continuous functions has scalar output, so it is a nonlinear functional.

For a function-space example, let $X=C[0,1]$ with $\|u\|_\infty=\max|u(t)|$. Define

$$
N(u)(t)=u(t)^2.
$$

This maps continuous functions to continuous functions. It is not linear: $N(2u)=4N(u)$, whereas linearity would require $2N(u)$. It is continuous, since

$$
\|N(u)-N(v)\|_\infty
\le(\|u\|_\infty+\|v\|_\infty)\|u-v\|_\infty.
$$

It is Lipschitz on each fixed bounded ball, but this estimate does not give one Lipschitz constant for the whole space. Nonlinearity and discontinuity are separate properties.

## Differentiability of nonlinear operators

For $F:U\subset X\to Y$ with $U$ open, a **Fréchet derivative** at $u$ is a bounded linear operator $A:X\to Y$ such that

$$
\frac{\|F(u+h)-F(u)-Ah\|_Y}{\|h\|_X}\longrightarrow0
\quad\text{as }h\to0,\ h\ne0.
$$

Write $A=DF(u)$. The derivative is linear in the increment $h$, even when $F$ is nonlinear in $u$. It controls the remainder for increments approaching zero from every direction.

The **Gâteaux derivative** checks a fixed direction:

$$
\lim_{s\to0}\frac{F(u+sh)-F(u)}s=Ah.
$$

Here we require the directional values to be given by one bounded linear $A$. Some authors call a map directionally differentiable without this linearity condition. Fréchet differentiability implies Gâteaux differentiability, but directional limits alone do not provide the uniform remainder estimate needed for Fréchet differentiability. [Hamburg lecture notes, section 2.19](https://www.math.uni-hamburg.de/spag/zms/LectureNotes_HH2005.pdf)

For the squaring operator, expand directly:

$$
N(u+h)-N(u)=2uh+h^2.
$$

Choose $DN(u)h=2uh$, with pointwise multiplication. It is linear in $h$ and bounded by $2\|u\|_\infty\|h\|_\infty$. The remaining quotient is at most $\|h\|_\infty$, which tends to zero. This proves Fréchet differentiability, including the required uniform control.

The scalar functional $J$ above has derivative $DJ(u)h=2\int_0^1u(t)h(t)\,dt$. Its remainder is $\int h^2$, bounded by $\|h\|_\infty^2$. Again the derivative is linear in its increment.

## Newton's method

To solve $F(u)=0$, replace $F(u+h)$ by $F(u)+DF(u)h$. Set this approximation to zero and solve

$$
DF(u_n)h_n=-F(u_n),\qquad u_{n+1}=u_n+h_n.
$$

This formulation avoids explicitly computing an inverse. In finite dimensions $DF(u_n)$ is the Jacobian matrix. In a Banach space the derivative is a bounded linear operator, whose invertibility must be checked.

For a precise local convergence statement, suppose $F$ is continuously Fréchet differentiable near a root $u_*$, $DF(u_*)$ has a bounded inverse, and $DF$ is locally Lipschitz in operator norm: $\|DF(u)-DF(v)\|\le L\|u-v\|$ for one finite $L$ throughout a neighborhood of $u_*$. A neighborhood here contains a ball centered at the root. Then all starting points sufficiently close to $u_*$ generate well-defined Newton iterates converging to $u_*$, with $\|u_{n+1}-u_*\|\le C\|u_n-u_*\|^2$ locally. This is **quadratic convergence**. It is a local theorem; it does not guarantee success from any starting point.

## Worked example: square root of two

Take $F(u)=u^2-2$ on $\mathbb R$. Since $DF(u)h=2uh$, the correction is $h=(2-u^2)/(2u)$ when $u\ne0$. Therefore

$$
u_{n+1}=\frac12\left(u_n+\frac2{u_n}\right).
$$

Starting at $u_0=1$ gives $u_1=3/2$, $u_2=17/12$, and $u_3=577/408$. The residuals $u_n^2-2$ are $-1,1/4,1/144,1/166464$. If $r=\sqrt2$ and $u_n>0$, exact subtraction gives

$$
u_{n+1}-r=\frac{(u_n-r)^2}{2u_n}.
$$

This identity explains quadratic error reduction near $r$. Starting at $u_0=0$ fails because the derivative is zero, so the correction equation has no solution. A small residual alone also does not prove proximity to a specified root when several roots exist.

## Practice

1. On $C[0,1]$, find and justify $DF(u)$ for $F(u)=u^3$.
2. Apply one Newton step to $F(x,y)=(x^2-2,y-3)$ from $(1,0)$.

> [!example]- Worked answers
> 1. Expansion gives $(u+h)^3-u^3=3u^2h+3uh^2+h^3$. Thus $DF(u)h=3u^2h$. The remainder divided by $\|h\|_\infty$ is at most $3\|u\|_\infty\|h\|_\infty+\|h\|_\infty^2$, which tends to zero.
> 2. At $(1,0)$ the residual is $(-1,-3)$ and the derivative matrix is $\operatorname{diag}(2,1)$. Solve $2h_1=1$, $h_2=3$. The new point is $(3/2,3)$. The first residual is now $1/4$ and the second is exactly zero.
