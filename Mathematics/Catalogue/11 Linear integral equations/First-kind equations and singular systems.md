---
title: "First-kind equations and singular systems"
catalogue_ids:
  - "11.3"
  - "11.3.1"
  - "11.3.2"
  - "11.3.3"
  - "11.3.4"
  - "11.3.5"
  - "11.3.6"
---

> [!TLDR]
> A first-kind equation recovers a function from weighted averages; its nullspace and small singular values determine lost information and instability.

## Fredholm equations of the first kind

Read [[Kernels and classification]] and [[10.04 Linear systems]]. A first-kind equation has the form

$$
(Tu)(x)=\int_a^bK(x,t)u(t)\,dt=f(x).
$$

The unknown has no separate identity term. Even the simple kernel $K=1$ loses most of the information in $u$: every output is the constant $\int_a^bu$. There can be no solution when $f$ is not constant, and many solutions when it is. Recovering a function from integrals is an **inverse problem**.

## Concepts and analytical foundations

There are three distinct requirements for a well-posed problem: existence for the prescribed data, uniqueness in the chosen function class, and continuous dependence on the data. The last condition means that sufficiently small data errors cause small answer errors in stated norms. A unique formal formula can fail this condition.

For this lesson use real square-integrable functions on $[0,1]$. Their size is $\|u\|_2=(\int_0^1u^2)^{1/2}$ and their inner product is $\langle u,v\rangle=\int_0^1uv$. Functions that differ only on a set of length zero are identified. Two functions are **orthogonal** if their inner product is zero, and **orthonormal** if each also has norm $1$. These are the integral versions of perpendicular unit vectors.

A square-integrable kernel gives a compact operator on this space. Compactness means that a bounded sequence of inputs has a subsequence whose outputs converge. In an infinite-rank compact problem, singular values tend to zero. Inverting them can magnify data errors without a fixed bound. The next concrete example shows the same issue with only two modes, before we state the infinite version.

## Degenerate kernels

Let $K(x,t)=\sum_{j=1}^ra_j(x)b_j(t)$, with linearly independent $a_j$. Set $c_j=\int_0^1b_j(t)u(t)\,dt$. The equation becomes $\sum_ja_j(x)c_j=f(x)$. Thus $f$ must lie in the span of the $a_j$. When it does, its coefficients prescribe moments of $u$ rather than the entire function.

For $K=1+xt$, an answer can exist only for affine data $f(x)=\alpha+\beta x$. The required moments are $\int_0^1u=\alpha$ and $\int_0^1tu=\beta$. Try $u=A+Bt$. Its moments give

$$
\begin{pmatrix}1&1/2\\1/2&1/3\end{pmatrix}
\begin{pmatrix}A\\B\end{pmatrix}
=\begin{pmatrix}\alpha\\\beta\end{pmatrix}.
$$

The matrix is invertible because its determinant is $1/12$. For $f=1$, it gives $A=4$, $B=-6$. Directly, $\int_0^1(4-6t)=1$ and $\int_0^1t(4-6t)=0$, so the output is $1$ for all $x$.

## Reduction to a linear system

For a general kernel, a quadrature rule gives $\sum_jw_jK(x_i,t_j)U_j\approx f(x_i)$. A trial-space method writes $u_m=\sum_jc_j\phi_j$ and matches the data at selected points or matches inner products with test functions. Both produce a matrix equation $Ac\approx d$.

Unlike a well-conditioned second-kind problem, refining the matrix can reveal more very small singular values. A direct inverse can then magnify rounding and data errors. A small matrix residual $\|Ac-d\|$ measures agreement with the data; it does not bound the answer error without additional stability information. Choose the resolution and a regularization rule together, rather than assuming more nodes always improve a noisy answer.

## Homogeneous first-kind equations

The homogeneous equation is $Tu=0$. Its solutions form the **nullspace**. For $K=1+xt$, they have both zero mean and zero first moment. The nonzero polynomial

$$
q(t)=t^2-t+\frac16
$$

has these properties: its integrals are $1/3-1/2+1/6=0$ and $1/4-1/3+1/12=0$. Therefore all functions $4-6t+cq(t)$ solve $Tu=1$. More generally, every solution is one particular solution plus an arbitrary element of the nullspace. A finite-rank operator on an infinite-dimensional space generally cannot be one-to-one.

## Two special orthonormal systems

For a matrix, singular vectors separate independent input directions and output directions. For an integral operator the analogous **singular system** consists of orthonormal input functions $v_n$, orthonormal output functions $w_n$, and positive numbers $\sigma_n$ such that

$$
Tv_n=\sigma_nw_n,
\qquad T^*w_n=\sigma_nv_n.
$$

For real functions, $T^*$ uses the transposed kernel: $(T^*w)(t)=\int_0^1K(x,t)w(x)\,dx$. Construct the systems by first finding orthonormal eigenfunctions $v_n$ of $T^*T$ with positive eigenvalues $\sigma_n^2$, then setting $w_n=Tv_n/\sigma_n$. Indeed,

$$
\langle w_m,w_n\rangle
=\frac{\langle v_m,T^*Tv_n\rangle}{\sigma_m\sigma_n}
=\frac{\sigma_n^2\langle v_m,v_n\rangle}{\sigma_m\sigma_n}.
$$

This equals $1$ if $m=n$ and $0$ otherwise. Thus the construction proves orthonormality of the output system. Eigenvalue concepts are in [[10.07 Eigenvalues and eigenvectors]]. General compact-operator spectral theory supplies the existence theorem; a proof is beyond this introductory lesson.

For a fully explicit example, set $e_0(t)=1$ and $e_1(t)=\sqrt{12}(t-1/2)$. Their means and squared integrals show that they are orthonormal. Define

$$
K(x,t)=e_0(x)e_0(t)+\frac14e_1(x)e_1(t).
$$

Then $Te_0=e_0$, $Te_1=e_1/4$, and the two systems coincide with $(e_0,e_1)$. For $f=2e_0+e_1$, the smallest-norm answer is $u=2e_0+4e_1$. A data error $\delta e_1$ becomes an answer error $4\delta e_1$. Figure C.11.2 shows the two independent channels. Any input orthogonal to both is invisible to this operator.

![[catalogue-ch11-singular-channels.svg|**Fig. C.11.2** Integration preserves one orthonormal mode and reduces another by a factor of four; inversion multiplies its errors by four.]]

In the general compact case, an answer requires $f$ orthogonal to the nullspace of $T^*$ and the **Picard condition**

$$
\sum_n\frac{|\langle f,w_n\rangle|^2}{\sigma_n^2}<\infty.
$$

Then the smallest-norm solution is $u^\dagger=\sum_n\langle f,w_n\rangle v_n/\sigma_n$. Other answers add nullspace elements. Orthogonality alone puts $f$ in the closure of the range; the summability condition is what makes the candidate an actual square-integrable solution. See [Clason's lecture notes on regularization](https://arxiv.org/abs/2001.00617) for the precise singular-system theorem and Picard criterion.

The smallest-norm statement has a geometric meaning. Each positive singular input mode is perpendicular to the nullspace. Thus $u^\dagger$ is perpendicular to every invisible addition $z$ with $Tz=0$. Expanding the square gives $\|u^\dagger+z\|_2^2=\|u^\dagger\|_2^2+\|z\|_2^2$. An invisible addition cannot improve the fit, and can only increase the norm. This selects one answer without claiming that the original data determine the invisible part.

## Iterative method

The **Landweber iteration** uses the residual without dividing directly by small singular values:

$$
u_{k+1}=u_k+\omega T^*(f-Tu_k),\qquad u_0=0,
\qquad 0<\omega<\frac2{\|T\|^2}.
$$

Here $\|T\|=\sup_{\|v\|_2=1}\|Tv\|_2$. For exact solvable data it converges to the smallest-norm solution. In a mode of singular value $\sigma$, the coefficient error is multiplied by $1-\omega\sigma^2$ each step. The displayed bound makes its absolute value less than $1$ for nonzero modes.

In the two-mode example choose $\omega=1$ and $f=2e_0+e_1$. The first step is $u_1=2e_0+e_1/4$. The second is $u_2=2e_0+31e_1/64$, since the second residual coefficient is $1-1/16=15/16$. The second answer coefficient tends slowly to $4$ with factor $15/16$. With noisy data, stop early; unlimited iteration eventually restores amplified noise. [Cornell's lecture on slow convergence](https://www.cs.cornell.edu/courses/cs6241/2025sp/lec/2025-01-30.html) explains this filtering role of early stopping.

## Practice

1. For $K=1+xt$, can $f(x)=x^2$ be exact output? Explain. Give a nonzero homogeneous solution.
2. For the two-mode operator, data are $3e_0+\tfrac12e_1$. Find the smallest-norm solution and the first Landweber step with $\omega=1$.

## Worked answers

1. No: every output is affine, and $x^2$ is not affine on an interval. The polynomial $q=t^2-t+1/6$ is a nonzero homogeneous solution because both of its required moments vanish.
2. Divide each output coefficient by its singular value: $u^\dagger=3e_0+2e_1$. The first step applies $T^*$ to the data, giving $u_1=3e_0+e_1/8$. Its slow second coefficient is deliberate; the operator does not observe that direction as strongly.
