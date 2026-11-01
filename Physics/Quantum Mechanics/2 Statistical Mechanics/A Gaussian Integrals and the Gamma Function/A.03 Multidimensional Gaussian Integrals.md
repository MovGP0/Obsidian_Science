---
title: "Multidimensional Gaussian Integrals"
source_chapter: "A"
source_section: "A.3"
source_page: 463
---

> [!TLDR]
> A positive-definite quadratic form gives a Gaussian integral determined by the matrix determinant and its inverse.

Coupled quadratic terms arise when several fluctuations affect the same energy. A product of one-dimensional formulas cannot be used in the original coordinates if cross terms are present. Rotate to the principal axes, where each independent mode has its own Gaussian width. The result below is a finite-dimensional real integral; it does not by itself define an infinite-dimensional functional measure.

Let $\mathbf A$ be a real symmetric positive-definite $n\times n$ matrix, and let $\mathbf b\in\mathbb R^n$. Then

$$
\int_{\mathbb R^n}
\exp\left(-\frac12\mathbf x^{\mathsf T}\mathbf A\mathbf x
+\mathbf b^{\mathsf T}\mathbf x\right)d^n x
=\frac{(2\pi)^{n/2}}{\sqrt{\det\mathbf A}}
\exp\left(\frac12\mathbf b^{\mathsf T}\mathbf A^{-1}\mathbf b\right).
\tag{A.3}
$$

Positive definiteness means decay in every direction, not just positive diagonal entries. A zero eigenvalue leaves an undamped direction; a negative eigenvalue makes the exponential grow. Both cases prevent normalization on all of $\mathbb R^n$, even when $\mathbf b=0$.

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

The scalar terms in the exponent add to $\sum_i(b_i')^2/(2\lambda_i)$. Since $\mathbf A^{-1}=\mathbf O\mathbf D^{-1}\mathbf O^{\mathsf T}$, this sum is $\frac12\mathbf b^{\mathsf T}\mathbf A^{-1}\mathbf b$, which proves (A.3). A smaller positive eigenvalue gives a broader mode and a larger integral. Thus $(\det\mathbf A)^{-1/2}$ measures the product of all mode widths.

The case used most often in statistical mechanics is $\mathbf b=0$:

$$
\int_{\mathbb R^n}
e^{-\frac12\mathbf x^{\mathsf T}\mathbf A\mathbf x}\,d^n x
=\frac{(2\pi)^{n/2}}{\sqrt{\det\mathbf A}}.
\tag{A.4}
$$

> [!note] Remark A.1
> Equation (A.3) is the basis of path integrals and perturbation expansions in field theory. Gaussian fluctuations around a classical action produce the factor $(\det\mathbf A)^{-1/2}$ in the one-loop partition function.

The field-theory remark refers to a Gaussian expansion about a suitable stationary configuration. Zero modes, negative modes, and continuum limits need separate treatment; the finite matrix formula must not be applied to them without checking these issues.

For expectations, divide the integral by its value at $\mathbf b=0$. Derivatives with respect to the components of $\mathbf b$, evaluated at zero, insert factors of $x_i$. Two derivatives of $\exp(\mathbf b^{\mathsf T}\mathbf A^{-1}\mathbf b/2)$ give $\langle x_i x_j\rangle=(\mathbf A^{-1})_{ij}$; all first moments vanish. This explains why the inverse matrix, rather than the matrix itself, gives the covariance.

For a centred Gaussian measure, correlation functions obey **Wick's theorem**:

$$
\left\langle x_{i_1}x_{i_2}\cdots x_{i_{2k}}\right\rangle
=\sum_{\text{pairings}}
\prod_{\text{pairs }(a,b)}
(\mathbf A^{-1})_{i_a i_b}.
$$

The sum covers every pairing of the indices. There are $(2k)!/(2^k k!)$ terms. For four variables this gives three products of two covariances. In one dimension, $\mathbf A=(2a)$ gives $\langle x^4\rangle=3/(4a^2)$, which agrees with [[A.02 Moments of the Gaussian Integral]]. A non-Gaussian weight need not obey this pairing rule.
