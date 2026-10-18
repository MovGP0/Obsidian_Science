---
title: "Walsh functions and step expansions"
catalogue_ids:
  - "15.6"
  - "15.6.1"
  - "15.6.2"
---

> [!TLDR]
> Walsh functions are orthogonal step patterns with values +1 and −1; their ordering must be stated before coefficients are compared.

## Step functions

A step function is constant on each of finitely many intervals. Its value can jump at an interval boundary. For example, a function on $[0,1)$ can have values $x_0,x_1,x_2,x_3$ on the four equal subintervals. Its integral is $(x_0+x_1+x_2+x_3)/4$. Endpoint values do not change this integral. Use half-open intervals so each boundary point has one assigned value.

Walsh analysis represents such functions with sign patterns rather than sine waves. Read [[08.01 Definite integrals]] and [[10.03 Matrices]] for the integral and matrix notation. The finite four-entry example below needs only sums and subtraction.

## Build a Walsh system

For $t\in[0,1)$ define the Rademacher functions

$$
r_j(t)=(-1)^{\lfloor 2^{j+1}t\rfloor},\qquad j=0,1,2,\ldots.
$$

Here $\lfloor u\rfloor$ is the greatest integer not exceeding $u$. Thus $r_0$ is positive on the first half and negative on the second. The next function alternates signs on successive quarters. Express a nonnegative integer $n$ in binary, $n=\sum_jn_j2^j$ with digits $n_j\in\{0,1\}$. Define

$$
w_n(t)=\prod_{j\geq0}r_j(t)^{n_j}.
$$

Only finitely many factors differ from one. We use this explicit **binary-product ordering**, commonly called Walsh–Paley ordering for this Rademacher indexing. The first four patterns on quarter intervals are

| Function | First quarter | Second quarter | Third quarter | Fourth quarter |
| --- | --- | --- | --- | --- |
| $w_0=1$ | $+1$ | $+1$ | $+1$ | $+1$ |
| $w_1=r_0$ | $+1$ | $+1$ | $-1$ | $-1$ |
| $w_2=r_1$ | $+1$ | $-1$ | $+1$ | $-1$ |
| $w_3=r_0r_1$ | $+1$ | $-1$ | $-1$ | $+1$ |

![[catalogue-ch15-walsh-patterns.svg|**Fig. C.ch15.4** Four orthogonal Walsh patterns in the binary-product ordering used in this lesson.]]

The term **sequency ordering** means ordering finite patterns by their number of sign changes across the interval. For these four, the order is $w_0,w_1,w_3,w_2$, with zero, one, two, and three changes. Natural Hadamard order can use yet another row arrangement, depending on the bit convention. Because names vary between texts and software, the displayed patterns and exact definition are authoritative here. A row permutation changes coefficient order but not the available information.

## Orthogonality and expansion

The inner product of real functions here is $\langle f,g\rangle=\int_0^1f(t)g(t)dt$. Each Walsh function has norm one because its square is one. A nonconstant binary product of Rademacher functions has equal positive and negative area: its fastest-changing factor cancels on pairs of adjacent intervals while the slower factors are constant there. Products of two distinct Walsh functions are such nonconstant products. Hence

$$
\int_0^1w_n(t)w_m(t)dt=\begin{cases}1,&n=m,\\0,&n\ne m.\end{cases}
$$

Define coefficients $c_n=\int_0^1f(t)w_n(t)dt$. For a function constant on $N=2^J$ equal intervals, the first $N$ patterns give an exact finite expansion $f(t)=\sum_{n=0}^{N-1}c_nw_n(t)$ on those intervals. There are $N$ orthogonal nonzero vectors in an $N$-dimensional step-function space, so they form a basis.

For general $L^2[0,1]$ functions, the complete system is an orthonormal basis and the series converges in mean square. This follows because dyadic step functions approximate square-integrable functions and each such space is spanned as above. A proof of the approximation statement needs integration theory beyond this lesson. Mean-square convergence does not assert pointwise convergence everywhere or smoothness of partial sums.

## Worked four-entry transform

Let $f$ have quarter-interval values $(3,1,1,3)$. Multiply by each sign row and average:

$$
c_0=\frac{3+1+1+3}{4}=2,\qquad
c_1=\frac{3+1-1-3}{4}=0,
$$
$$
c_2=\frac{3-1+1-3}{4}=0,\qquad
c_3=\frac{3-1-1+3}{4}=1.
$$

Thus $f=2w_0+w_3$. Its values are $(2,2,2,2)+(1,-1,-1,1)=(3,1,1,3)$, so recovery is exact.

If $W$ is the matrix whose rows are the displayed patterns, then $WW^{\mathsf T}=4I$, $c=Wx/4$, and $x=W^{\mathsf T}c$. The transpose is important: a row-permuted Walsh matrix need not remain symmetric. An orthonormal vector convention instead uses coefficients $Wx/2$ and inverse $W^{\mathsf T}/2$. Do not mix that convention with the interval-average coefficients used here.

## Compare with Haar and Fourier analysis

Walsh patterns have full support on $[0,1)$ and take only the values $+1$ and $-1$. Haar wavelets in [[Haar wavelets and fast discrete transforms]] become local as their scale gets finer and can be zero outside a small interval. Fourier modes are smooth oscillations. A Walsh expansion is useful when binary sign patterns fit the problem, but a sign-change count is not the same as the frequency of a sine wave. A shifted pattern need not retain a simple phase-multiplier rule as in Fourier analysis.

Fast Walsh–Hadamard algorithms recursively use addition and subtraction and take $O(N\log_2N)$ operations for $N=2^J$ entries. They require a stated row ordering and normalization. Orthogonality ensures invertibility of the complete transform; discarding coefficients is an approximation and loses data.

## Practice

1. Find the four interval-average Walsh coefficients for $(1,1,-1,-1)$.
2. Use the displayed rows to recover the values from $(c_0,c_1,c_2,c_3)=(1,0,2,0)$.

> [!example]- Worked answers
> 1. The input is exactly $w_1$. Its inner product with itself is $1$, and with the other rows is zero. The coefficients are $(0,1,0,0)$.
> 2. The expansion is $w_0+2w_2$. Add $(1,1,1,1)$ to $(2,-2,2,-2)$ to obtain $(3,-1,3,-1)$. The mean is $1$, which checks $c_0$.

## Reference

[MathWorks, discrete Walsh–Hadamard transform](https://www.mathworks.com/help/signal/ug/discrete-walsh-hadamard-transform.html) displays natural Hadamard and sequency arrangements. Its rows illustrate why coefficient ordering must be fixed explicitly; this lesson instead defines its own binary-product ordering before calculating.
