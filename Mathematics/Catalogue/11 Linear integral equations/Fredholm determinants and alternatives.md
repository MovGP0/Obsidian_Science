---
title: "Fredholm determinants and alternatives"
catalogue_ids:
  - "11.2.3"
  - "11.2.3.1"
  - "11.2.3.2"
---

> [!TLDR]
> Fredholm theory extends determinant-based solving to continuous kernels and identifies exactly which right-hand sides are compatible at exceptional parameters.

## Fredholm's solution method and theorems

For one equation $(1-\lambda a)c=d$, division works when $1-\lambda a\ne0$. At a zero coefficient, either $d=0$ and many answers are possible, or $d\ne0$ and none is possible. [[Finite-rank kernels and successive approximation]] gives the matrix version. Fredholm's method extends this pattern to a continuous kernel on a finite square.

We use $u-\lambda Tu=f$ with $(Tu)(x)=\int_a^bK(x,t)u(t)\,dt$. All kernels in the determinant construction are continuous. The function $f$ is continuous as well. The determinant is a tool for fixed-limit second-kind equations, not a general inversion formula for first-kind or singular equations.

## Fredholm's solution method

Recall that the determinant of a two-by-two matrix is $ad-bc$. For a continuous kernel, sample an increasing number of integration points, use quadrature weights, and form the matrix $I-\lambda A$. Expanding its determinant produces sums of determinants of kernel values. Their integral limit motivates the **Fredholm determinant**

$$
D(\lambda)=1+\sum_{n=1}^{\infty}\frac{(-\lambda)^n}{n!}
\int_{[a,b]^n}\det[K(t_i,t_j)]_{i,j=1}^n\,dt_1\cdots dt_n.
$$

The multiple integral means integration once in each variable over $[a,b]$. The factorial $n!$ removes repeated orderings of sample indices. For example,

$$
D(\lambda)=1-\lambda\int_a^bK(t,t)\,dt+
\frac{\lambda^2}{2}\int_a^b\int_a^b
\bigl(K(s,s)K(t,t)-K(s,t)K(t,s)\bigr)\,ds\,dt+\cdots.
$$

Define the **first minor** by a similar series, but hold the first row input $x$ and first column input $t$ fixed:

$$
D_1(x,t;\lambda)=K(x,t)+\sum_{n=1}^{\infty}\frac{(-\lambda)^n}{n!}
\int_{[a,b]^n}
\det\begin{pmatrix}
K(x,t)&K(x,t_1)&\cdots&K(x,t_n)\\
K(t_1,t)&K(t_1,t_1)&\cdots&K(t_1,t_n)\\
\vdots&\vdots&\ddots&\vdots\\
K(t_n,t)&K(t_n,t_1)&\cdots&K(t_n,t_n)
\end{pmatrix}\,dt_1\cdots dt_n.
$$

For continuous kernels these series converge for every finite $\lambda$. If $D(\lambda)\ne0$, set $R=D_1/D$. The solution is

$$
u(x)=f(x)+\lambda\int_a^bR(x,t;\lambda)f(t)\,dt.
$$

The determinant quotient generalizes the adjugate-over-determinant rule for a matrix inverse. The convergence and inverse identities require more analysis than a school-level proof; the formulas specify the construction. The series and sign conventions were checked against [Western University notes on the Fredholm determinant](https://www.math.uwo.ca/faculty/khalkhali/files/Fredholm_Determinant.pdf), which use $I+K$; here the replacement is $K\mapsto-\lambda K$.

### Worked example: all higher determinants vanish

Take $K(x,t)=xt$ on $[0,1]$. Every matrix $[K(t_i,t_j)]$ has proportional columns, so all determinants of size two or larger vanish. Thus $D(\lambda)=1-\lambda/3$. All higher terms in the minor also vanish, giving $D_1=xt$. For $f=1$,

$$
u(x)=1+\frac{\lambda x}{1-\lambda/3}\int_0^1t\,dt
=1+\frac{\lambda x}{2(1-\lambda/3)}.
$$

This works for $\lambda\ne3$. At $\lambda=3$, the quotient is undefined; use compatibility, not a cancelled or infinite “answer.”

## Fredholm theorems

For the compatibility statement, allow square-integrable functions: $\int_a^b|u|^2<\infty$. Equality then means equality except on sets of length zero. Their inner product is $\langle f,v\rangle=\int_a^bf(x)\overline{v(x)}\,dx$. The bar denotes complex conjugation. The **adjoint** is

$$
(T^*v)(t)=\int_a^b\overline{K(x,t)}v(x)\,dx.
$$

It satisfies $\langle Tu,v\rangle=\langle u,T^*v\rangle$, as one checks by interchanging the integrals. The Fredholm alternative for a compact $T$ says that either $I-\lambda T$ is invertible, or its homogeneous equation has a nonzero finite-dimensional solution space. In the latter case,

$$
(I-\lambda T)u=f
\quad\text{is solvable exactly when}\quad
\langle f,v\rangle=0
\ \text{for every }v\text{ with }(I-\overline\lambda T^*)v=0.
$$

For $\lambda\ne0$, the two homogeneous solution spaces have equal finite dimension. A continuous kernel on a finite square gives a compact operator: every bounded sequence of inputs has a subsequence whose outputs converge. The full compactness proof is beyond this lesson. This is the precise setting of the alternative, not an assumption that every infinite matrix behaves like a finite one. See [Ramm's paper on the Fredholm alternative, Theorem 1.1](https://arxiv.org/pdf/math/0011133).

Necessity is accessible: pair the equation with an adjoint homogeneous solution. Moving $T$ to the other side makes the left-hand side zero. Sufficiency is the deeper part of the theorem. Any two solutions differ by a homogeneous solution, so all solutions are one particular answer plus that finite-dimensional space.

For $K=xt$ and $\lambda=3$, both homogeneous spaces are spanned by $x$. Compatibility is $\int_0^1xf(x)\,dx=0$. Data $f=1$ fail. Data $f=1-3x/2$ pass. Since $Tf=0$, the complete family is $u=f+cx$, with arbitrary constant $c$.

## Practice

1. For $K=1$ on $[0,1]$, find $D(\lambda)$ and the solution for $f=x$ when $\lambda\ne1$.
2. At $\lambda=1$ for the same kernel, compare data $f=x$ and $f=x-1/2$.

## Worked answers

1. Rank one makes higher determinants zero, so $D=1-\lambda$. Put $c=\int_0^1u$. Then $c=1/2+\lambda c$, and $u(x)=x+\lambda/[2(1-\lambda)]$.
2. The adjoint nullspace consists of constants. Hence compatibility requires zero mean. The mean of $x$ is $1/2$, so no answer exists. The mean of $x-1/2$ is zero, and every $u=x-1/2+c$ is a solution. Directly, $u-\int_0^1u=x-1/2$.
