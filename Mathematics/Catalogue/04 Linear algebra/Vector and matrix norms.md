---
title: "Vector and matrix norms"
catalogue_ids:
  - "4.1.6"
  - "4.1.6.1"
  - "4.1.6.2"
---

> [!TLDR]
> A vector norm measures size; an induced matrix norm measures the largest possible amplification of that size.

## What a size rule must satisfy

Read [[Matrices and linear maps]] first. A **norm** assigns a nonnegative real number $\|x\|$ to a vector. It must satisfy three conditions: only the zero vector has zero norm; $\|cx\|=|c|\|x\|$; and $\|x+y\|\le\|x\|+\|y\|$. The last condition is the triangle inequality. It prevents the combined size from exceeding the sum of the separate sizes.

For $x=(x_1,\ldots,x_n)^T$, three common choices are

$$
\|x\|_1=\sum_i|x_i|,\qquad
\|x\|_2=\sqrt{\sum_i x_i^2},\qquad
\|x\|_\infty=\max_i|x_i|.
$$

The $2$-norm is ordinary Euclidean length. The $1$-norm measures the total absolute change in the coordinates. The infinity norm measures the largest coordinate magnitude. For $(3,-4)$ they give $7$, $5$, and $4$. These are different questions about the same vector, not conflicting values of one fixed notion of size.

For the $1$-norm, the triangle inequality follows by adding $|x_i+y_i|\le|x_i|+|y_i|$. For the infinity norm, each $|x_i+y_i|$ is at most $\|x\|_\infty+\|y\|_\infty$, so their maximum is too. For Euclidean length, expand $\|x+y\|_2^2$ and use $|x\cdot y|\le\|x\|_2\|y\|_2$, the Cauchy–Schwarz inequality. [[05.05 Dot products]] explains the dot product used here.

## From input size to output size

For a matrix $A$, its **induced norm** uses the same vector norm on input and output:

$$
\|A\|=\max_{x\ne0}\frac{\|Ax\|}{\|x\|}
=\max_{\|x\|=1}\|Ax\|.
$$

In finite-dimensional real spaces this maximum exists. Rescaling an input changes both numerator and denominator by the same factor, which explains the second expression. The defining benefit is $\|Ax\|\le\|A\|\|x\|$. Consequently $\|AB\|\le\|A\|\|B\|$: apply the first bound twice to any input.

For the $1$-norm, the matrix norm is the largest absolute column sum. Indeed, $\sum_i|\sum_j a_{ij}x_j|\le\sum_j(\sum_i|a_{ij}|)|x_j|$, bounded by that largest column sum times $\|x\|_1$. Choosing the coordinate vector for a largest column attains the bound. For the infinity norm, the answer is the largest absolute row sum. Choose the input signs to match a largest row to attain its bound.

The Euclidean induced norm $\|A\|_2$ is the largest singular value, introduced in [[Singular value decomposition]]. It is usually not the largest entry. Another useful norm is the **Frobenius norm** $\|A\|_F=\sqrt{\sum_{ij}a_{ij}^2}$. It measures the total entry size. It is a matrix norm but is not generally the induced Euclidean norm: $\|I_n\|_F=\sqrt n$, whereas $\|I_n\|_2=1$.

## Worked example and a usable bound

Take

$$
A=\begin{pmatrix}1&-2\\3&0\end{pmatrix}.
$$

Its absolute column sums are $4$ and $2$, so $\|A\|_1=4$. Its row sums are $3$ and $3$, so $\|A\|_\infty=3$. The Frobenius norm is $\sqrt{1+4+9}=\sqrt{14}$. For $x=(1,-1)^T$, $Ax=(3,3)^T$. Thus $\|Ax\|_\infty=3=\|A\|_\infty\|x\|_\infty$: this input attains the worst amplification.

Suppose an input perturbation $e$ satisfies $\|e\|_\infty\le0.01$. Since the output change is exactly $Ae$, the bound gives $\|Ae\|_\infty\le0.03$. No individual perturbation needs to be tested. This is a statement about absolute error, not necessarily relative error: cancellation may make the unperturbed output small.

## Common mistakes

Keep the same norm throughout a bound unless a conversion factor is included. In $\mathbb R^n$, $\|x\|_\infty\le\|x\|_2\le\sqrt n\|x\|_\infty$, so conversion can cost a factor. Norms also depend on coordinates unless an underlying geometric structure and its coordinate metric are specified. Finally, a large matrix norm measures amplification, not by itself the sensitivity of solving $Ax=b$. That needs both $A$ and its inverse; see [[Least squares and numerical stability]].

## Practice

1. Find the three vector norms of $(1,-2,2)^T$.
2. Find the induced $1$-norm and infinity norm of $B=\begin{pmatrix}2&1\\0&-4\end{pmatrix}$. Bound $\|Be\|_1$ when $\|e\|_1\le0.02$.

## Worked answers

1. Add absolute values to get $5$; square, add, and take a square root to get $\sqrt9=3$; take the largest absolute coordinate to get $2$.
2. The column sums are $2$ and $5$, so $\|B\|_1=5$. The row sums are $3$ and $4$, so $\|B\|_\infty=4$. The compatible bound is $\|Be\|_1\le5(0.02)=0.10$.
