---
title: "Compactness, weak convergence, and Fredholm equations"
catalogue_ids:
  - "12.7"
  - "12.7.1"
  - "12.7.2"
  - "12.7.2.1"
  - "12.7.2.2"
  - "12.7.2.3"
  - "12.7.3"
---

> [!TLDR]
> Compact operators turn bounded sequences into outputs with convergent subsequences, which makes many infinite systems behave like finite ones.

## Prerequisite route

Read [[27.02 Compactness]], [[Bounded operators and convergence]], [[Continuous functionals and representation]], and [[Dual and Hilbert adjoints]]. The norm gives the distance $d(x,y)=\|x-y\|$. A subsequence retains terms with increasing indices. A set is bounded when all its points have norm below some common constant. Its closure adds every limit of convergent sequences from the set.

## Compact subsets in normed spaces

For metric spaces, a set $K$ is **compact** exactly when each sequence in $K$ has a subsequence converging to a point of $K$. In finite-dimensional normed spaces this is equivalent to being closed and bounded. In infinite dimensions closed and bounded is not sufficient.

In $\ell^2$, the unit coordinate vectors $e_n$ all lie in the closed unit ball, but

$$
\|e_n-e_m\|=\sqrt2\quad(n\ne m).
$$

No subsequence is Cauchy, so none converges. This proves that the closed unit ball is not compact. The problem is an unlimited number of independent directions, not unbounded vector length.

A useful criterion is **total boundedness**: for each $\varepsilon>0$, finitely many balls of radius $\varepsilon$ cover the set. A subset of a Banach space has compact closure if and only if it is totally bounded. Completeness is needed to ensure that Cauchy subsequences have limits. [MIT lecture 19](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/39ac233d5d7cbfffcdce8086143688f6_MIT18_102s21_lec19.pdf)

## Compact operators

A linear operator $K:X\to Y$ is **compact** when it maps every bounded sequence to a sequence with a convergent subsequence in $Y$. Equivalently, images of bounded sets have compact closure. A compact linear operator is bounded. Indeed, an unbounded linear map would produce unit-ball inputs with unbounded outputs, which could not have a convergent subsequence.

Every bounded finite-rank operator is compact, because its output lies in a finite-dimensional subspace. **Finite rank** means that this output subspace has finite dimension. Finite sums of compact operators are compact. Composition with a bounded operator on either side preserves compactness when the spaces match. If the target is Banach, an operator-norm limit of compact operators is compact. Strong limits alone do not suffice: the finite-rank truncations $P_n$ converge strongly to the noncompact identity on $\ell^2$.

The diagonal map $Dx=(x_n/n)$ is compact. Let $D_Nx=(x_1,x_2/2,\ldots,x_N/N,0,\ldots)$. Each $D_N$ has finite rank and

$$
\|D-D_N\|=\frac1{N+1}\longrightarrow0.
$$

The upper bound follows coordinatewise. The vector $e_{N+1}$ attains it. This provides both a compactness proof and a quantitative finite-dimensional approximation.

![[catalogue-ch12b-compact-tail.svg|**Fig. C.ch12b.2** The compact diagonal operator shrinks the nth coordinate by 1/n; discarding coordinates after N leaves an error at most 1/(N + 1) on the unit ball.]]

## Weak convergence of elements

A sequence converges **weakly**, written $x_n\rightharpoonup x$, if $f(x_n)\to f(x)$ for every continuous linear functional $f$. Norm convergence implies weak convergence. The converse fails.

For $\ell^2$, Riesz representation identifies functionals with square-summable sequences. The value of any fixed functional on $e_n$ is one coordinate of its representing sequence, and these coordinates tend to zero. Thus $e_n\rightharpoonup0$, although $\|e_n\|=1$ for every $n$.

A compact linear map sends a weakly convergent sequence to a norm-convergent sequence: $Kx_n\to Kx$. The reason is that weakly convergent sequences are bounded, compactness provides convergent output subsequences, and testing against functionals forces every possible output limit to be $Kx$. If the whole sequence did not converge to that limit, a subsequence staying a fixed distance away would give a contradiction.

## Fredholm alternative

For a compact operator $K$ on a Hilbert space $H$, the equation

$$
(I-K)x=y
$$

has a solution exactly when $y$ is perpendicular to $\ker(I-K^*)$. Its range is closed. If $\ker(I-K)=\{0\}$, then $I-K$ is bijective with bounded inverse. Otherwise the homogeneous equation has a nonzero finite-dimensional solution space, and solvability requires the orthogonality condition. This is a standard **Fredholm alternative**. The theorem concerns an identity minus a compact map, not an arbitrary operator equation. [Hunter, appendix 4.B on the Fredholm alternative](https://math.ucdavis.edu/~hunter/pdes/pde_notes.pdf)

For an accessible worked example, let $P(x,y)=(x,0)$. The equation $(I-P)(x,y)=(a,b)$ becomes $(0,y)=(a,b)$. It has a solution if and only if $a=0$. The adjoint is $P$ itself, and $\ker(I-P)$ is the horizontal axis. The condition that $(a,b)$ be perpendicular to that axis is precisely $a=0$. When it holds, $y=b$ and $x$ is arbitrary. The orthogonality condition decides existence; the kernel decides nonuniqueness.

## Practice

1. Is the identity on $\mathbb R^3$ compact? Is the identity on $\ell^2$ compact? Explain the different answers.
2. Let $K=\operatorname{diag}(1,1/2)$ on $\mathbb R^2$. Solve $(I-K)x=(a,b)$ and identify the compatibility condition.

> [!example]- Worked answers
> 1. On $\mathbb R^3$, every bounded sequence has a convergent subsequence, so the identity is compact. On $\ell^2$, the sequence $e_n$ is bounded and has no norm-convergent subsequence, so the identity is not compact.
> 2. The equation is $(0,x_2/2)=(a,b)$. It is solvable exactly when $a=0$. Then $x_2=2b$, while $x_1$ is free. The adjoint kernel is the first coordinate axis, and orthogonality gives the same condition.
