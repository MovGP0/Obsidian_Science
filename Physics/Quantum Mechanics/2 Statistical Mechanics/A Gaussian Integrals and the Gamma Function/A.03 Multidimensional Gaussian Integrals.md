---
title: "Multidimensional Gaussian Integrals"
source_chapter: "A"
source_section: "A.3"
source_page: 463
---

> [!TLDR]
> A positive-definite quadratic form gives a Gaussian integral determined by the matrix determinant and its inverse.

Let $\mathbf A$ be a real symmetric positive-definite $n\times n$ matrix, and let $\mathbf b\in\mathbb R^n$. Then

$$
\int_{\mathbb R^n}
\exp\left(-\frac12\mathbf x^{\mathsf T}\mathbf A\mathbf x
+\mathbf b^{\mathsf T}\mathbf x\right)d^n x
=\frac{(2\pi)^{n/2}}{\sqrt{\det\mathbf A}}
\exp\left(\frac12\mathbf b^{\mathsf T}\mathbf A^{-1}\mathbf b\right).
\tag{A.3}
$$

## Proof

Since $\mathbf A$ is real symmetric and positive definite, there is an orthogonal matrix $\mathbf O$ with

$$
\mathbf O^{\mathsf T}\mathbf A\mathbf O
=\mathbf D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n),
\qquad \lambda_i>0.
$$

Set $\mathbf x=\mathbf O\mathbf y$. The absolute Jacobian determinant is $\lvert\det\mathbf O\rvert=1$; the eigenvector orientation can be chosen so that $\det\mathbf O=1$. Then

$$
\mathbf x^{\mathsf T}\mathbf A\mathbf x
=\mathbf y^{\mathsf T}\mathbf D\mathbf y
=\sum_{i=1}^n\lambda_i y_i^2.
$$

With $\mathbf b'=\mathbf O^{\mathsf T}\mathbf b$, the integral factors into $n$ one-dimensional Gaussian integrals:

$$
\prod_{i=1}^n
\int_{-\infty}^{+\infty}
\exp\left(-\frac12\lambda_i y_i^2+b_i'y_i\right)dy_i.
$$

Each factor evaluates to $\sqrt{2\pi/\lambda_i}\exp[(b_i')^2/(2\lambda_i)]$. The prefactors give

$$
\prod_i\sqrt{\frac{2\pi}{\lambda_i}}
=\frac{(2\pi)^{n/2}}{\sqrt{\det\mathbf D}}
=\frac{(2\pi)^{n/2}}{\sqrt{\det\mathbf A}}.
$$

The exponent is $\frac12\mathbf b^{\mathsf T}\mathbf A^{-1}\mathbf b$, which proves (A.3).

The case used most often in statistical mechanics is $\mathbf b=0$:

$$
\int_{\mathbb R^n}
e^{-\frac12\mathbf x^{\mathsf T}\mathbf A\mathbf x}\,d^n x
=\frac{(2\pi)^{n/2}}{\sqrt{\det\mathbf A}}.
\tag{A.4}
$$

> [!note] Remark A.1
> Equation (A.3) is the basis of path integrals and perturbation expansions in field theory. Gaussian fluctuations around a classical action produce the factor $(\det\mathbf A)^{-1/2}$ in the one-loop partition function.

For a centred Gaussian measure, correlation functions obey **Wick's theorem**:

$$
\left\langle x_{i_1}x_{i_2}\cdots x_{i_{2k}}\right\rangle
=\sum_{\text{pairings}}
\prod_{\text{pairs }(a,b)}
(\mathbf A^{-1})_{i_a i_b}.
$$

The sum covers every pairing of the indices. There are $(2k)!/(2^k k!)$ terms.
