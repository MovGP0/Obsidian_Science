---
title: "Bounded operators and convergence"
catalogue_ids:
  - "12.5"
  - "12.5.1"
  - "12.5.1.1"
  - "12.5.1.2"
  - "12.5.1.3"
  - "12.5.2"
---

> [!TLDR]
> A bounded linear operator controls output error by input error; operator norm convergence controls this error uniformly.

## Prerequisite route

Start with [[05.07 Linear combinations]], [[10.02 Linear maps]], [[07.01 Limits]], and [[09.01 Sequences]], then use [[Norms Banach spaces and series]] for function-space lengths. A **norm** $\|x\|$ is a length with the triangle inequality and $\|ax\|=|a|\|x\|$. It is zero only for the zero vector. A **Banach space** is a normed vector space in which every Cauchy sequence has a limit in the space. A Cauchy sequence has terms that become arbitrarily close to one another. Completeness ensures that no required limit is missing.

## Continuous linear operators and functionals

An **operator** is a map between vector spaces. It can take a function as its input and return another function. For example, $Tf=2f$ multiplies every function value by two. **Linear** means $T(ax+by)=aTx+bTy$. A **functional** is an operator whose output is a scalar. The input and output spaces must be specified: differentiation behaves differently with different choices of norm and domain.

For normed spaces $X,Y$, a linear $T:X\to Y$ is **bounded** if a finite constant $C$ satisfies

$$
\|Tx\|_Y\le C\|x\|_X\quad\text{for every }x\in X.
$$

This does not mean that all outputs have a common finite bound. Multiplication by two has arbitrarily large outputs. It means that the ratio of output length to input length has a common bound.

## Boundedness and norm

The smallest suitable $C$ is the **operator norm**,

$$
\|T\|=\sup_{\|x\|\le1}\|Tx\|.
$$

The supremum is the least upper bound; a maximizing vector need not exist. Boundedness implies continuity because

$$
\|Tx-Ty\|\le\|T\|\|x-y\|.
$$

Conversely, continuity at zero gives a $\delta>0$ for which $\|x\|<\delta$ implies $\|Tx\|<1$. Scale any nonzero $x$ by $\delta/(2\|x\|)$. Linearity gives $\|Tx\|\le (2/\delta)\|x\|$. Thus, for linear operators, boundedness and continuity are equivalent.

For the matrix $T=\operatorname{diag}(3,-2)$ on the Euclidean plane,

$$
\|T(x,y)\|^2=9x^2+4y^2\le9(x^2+y^2).
$$

Equality at $(1,0)$ proves $\|T\|=3$. This is a complete upper-and-lower-bound argument, not a guess from a few test vectors.

## Space of continuous linear operators

Write $\mathcal B(X,Y)$ for all bounded linear operators. Addition and scalar multiplication act on outputs. Operator norm makes this a normed space. If $Y$ is Banach, so is $\mathcal B(X,Y)$, even if $X$ is incomplete. Indeed, an operator-norm Cauchy sequence $T_n$ makes each $T_nx$ Cauchy in $Y$. Define $Tx=\lim T_nx$; the common norm estimates prove linearity, boundedness, and convergence in operator norm.

For compatible bounded operators, $\|ST\|\le\|S\|\|T\|$. Products therefore preserve continuity, although the order matters.

## Convergence of sequences of operators

**Norm convergence** means $\|T_n-T\|\to0$. **Strong convergence** means $\|T_nx-Tx\|\to0$ for every fixed $x$. Norm convergence implies strong convergence. The reverse implication fails in infinite dimensions.

Consider $\ell^2$, the space of sequences $x=(x_1,x_2,\ldots)$ with $\sum|x_j|^2<\infty$. Its norm is the square root of that sum. Let $P_nx=(x_1,\ldots,x_n,0,\ldots)$. Then

$$
\|P_nx-x\|^2=\sum_{j>n}|x_j|^2\longrightarrow0.
$$

Thus $P_n\to I$ strongly. But $\|(I-P_n)e_{n+1}\|=1$ for the unit coordinate vector $e_{n+1}$, so $\|P_n-I\|=1$ for all $n$. The difficult input changes with $n$.

## Continuous operators in Banach spaces

Three important theorems require completeness. The **uniform boundedness principle** says that if $X$ is Banach and a family $T_j\in\mathcal B(X,Y)$ has $\sup_j\|T_jx\|<\infty$ for each $x$, then $\sup_j\|T_j\|<\infty$. The **bounded inverse theorem** says that a bounded linear bijection between Banach spaces has a bounded inverse. The **closed graph theorem** says that an everywhere-defined linear map between Banach spaces is bounded if its graph is closed: $x_n\to x$ and $Tx_n\to y$ imply $Tx=y$. These are advanced existence results; proofs use the Baire category theorem. [MIT lectures 3–4](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/resources/lecture-notes/index.html)

For a caution, differentiation from continuously differentiable functions with the uniform norm to continuous functions with the uniform norm is unbounded. Set $f_n(t)=\sin(nt)/n$ on $[0,2\pi]$. Then $\|f_n\|_\infty=1/n$, but $\|f_n'\|_\infty=1$. Changing the domain norm to $\|f\|_\infty+\|f'\|_\infty$ makes differentiation bounded. Always give both the space and its norm.

## Practice

1. Find the Euclidean operator norm of $A(x,y)=(2x,5y)$. Give an input that proves your upper bound is sharp.
2. Set $Q_nx=x_n e_n$ on $\ell^2$. Does $Q_n$ converge strongly to zero? Does it converge in operator norm?

> [!example]- Worked answers
> 1. $\|A(x,y)\|^2=4x^2+25y^2\le25(x^2+y^2)$, so $\|A\|\le5$. At $(0,1)$ the output has length $5$, so the norm is exactly $5$.
> 2. A square-summable sequence has $x_n\to0$, so $\|Q_nx\|=|x_n|\to0$ for each fixed $x$. Strong convergence holds. Since $Q_ne_n=e_n$, $\|Q_n\|=1$ for every $n$, so norm convergence fails.
