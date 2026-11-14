---
title: "Generalizations and Advanced Applications"
source_chapter: "B"
source_section: "B.6"
source_page: 479
---

> [!TLDR]
> Multivariable saddles, Gaussian fluctuations, and auxiliary fields extend the method to mean-field and field-theory calculations.

In more than one variable, a single peak has several independent widths. The main task is to find which directions are stable and which remain broad. This connects the determinant in a Gaussian integral with fluctuations of collective variables.

## Saddle point in several variables

For an integral over $\mathbf x\in\mathbb R^n$ with large positive parameter $N$ and fixed finite $n$, let $\mathbf x_0$ be an interior maximum of $f$ with $\nabla f(\mathbf x_0)=0$. Assume smoothness near the maximum and that the rest of the integration region is negligible at this exponential order, as in [[B.01 Laplace Approximation]]. Its Hessian,

$$
H_{ij}
=\left.\frac{\partial^2f}{\partial x_i\partial x_j}\right|_{\mathbf x_0},
$$

must be negative definite. Equation (A.3) gives

$$
\int e^{Nf(\mathbf x)}\,d^n x
\sim e^{Nf(\mathbf x_0)}
\left(\frac{2\pi}{N}\right)^{n/2}
\frac1{\sqrt{\lvert\det\mathbf H\rvert}}.
$$

Negative definiteness is a local stability condition; it does not establish that this peak dominates the full integral. If there are several separated global maxima, add their contributions.

To understand the determinant, diagonalize the real symmetric matrix $-\mathbf H$. Its positive eigenvalues $a_j$ give independent quadratic terms $-Na_jy_j^2/2$ in orthonormal coordinates. Each direction contributes $\sqrt{2\pi/(Na_j)}$, so their product gives the stated determinant. For example,

$$
\int_{\mathbb R^2}e^{-N(ax^2+by^2)/2}\,dx\,dy
=\frac{2\pi}{N\sqrt{ab}},\qquad a,b>0,
$$

is an exact separable check. A small eigenvalue gives a broad direction; a zero eigenvalue makes this formula singular rather than proving that the original integral diverges. For example, a stabilizing quartic term can keep the integral finite, with width $N^{-1/4}$ instead of $N^{-1/2}$ in that direction.

## Mean-field theory

The mean-field Ising partition function can be written as a functional integral. In the large-particle-number limit, the equilibrium configuration dominates it: this is the saddle of the effective action. Gaussian fluctuations around the saddle give one-loop corrections. Higher-order terms generate the perturbation series.

> [!note] Scope of the mean-field statement
> A uniform mean-field saddle retains the collective order parameter and neglects spatial fluctuations. Taking a large system does not by itself make that approximation exact for a short-range Ising model: the number of fluctuation modes also grows. The saddle selects a minimum of the effective free energy, and Gaussian integration describes fluctuations around a stable choice. A field integral needs a specified measure and a regularization before a finite-dimensional determinant formula can be applied. [Tong, Statistical Field Theory §1](https://www.damtp.cam.ac.uk/user/tong/sft/sfthtml/S1.html) explains this distinction between a collective-variable saddle and the mean-field approximation used to construct its free energy.

## Hubbard–Stratonovich transformation

This closely related method introduces an auxiliary field $\phi$ to decouple four-particle interactions, or more general nonlinear terms. A Gaussian Fourier identity is

$$
e^{-ax^2/2}
=\frac1{\sqrt{2\pi a}}
\int_{-\infty}^{+\infty}
e^{-\phi^2/(2a)-ix\phi}\,d\phi,
\qquad a>0.
$$

> [!note] Source correction
> The source prints $+\phi^2/(2a)$ in the exponent on the real integration path. For $a>0$, that integral diverges. The minus sign shown above gives the convergent Gaussian identity and reproduces the left-hand side.

A saddle approximation to the auxiliary-field integral gives mean-field theory. Exact integration recovers the original exponential.

Here $a$, $x$, and $\phi$ are mathematical variables, with dimensionless exponents. The purpose of the identity is to replace a quadratic dependence on $x$ by a linear coupling $-ix\phi$ at the cost of an additional Gaussian integral. When $x$ represents a sum of many variables, the linear coupling can make their original sum or integral factorize. The transformation is exact; choosing only a saddle of the resulting integral is the approximation.

The normalization and sign can be checked without a contour shift. Let $G(x)$ denote the right-hand side. At $x=0$ the normalized Gaussian gives $G(0)=1$. Differentiate under the integral and integrate by parts in $\phi$; the Gaussian makes the boundary term vanish. This gives $G'(x)=-axG(x)$ and hence $G(x)=e^{-ax^2/2}$. Thus both the normalization and the minus sign in the source correction are required. The identity assumes real $x$ and $a>0$ as written; other signs require a different representation or contour.

> [!note]
> The saddle-point method has a physical meaning as well as a computational use: it selects the configuration that dominates the partition function in the thermodynamic limit. This is the thermodynamic equilibrium configuration.

Systematic corrections describe fluctuations around equilibrium. They become important near a continuous phase transition, where the curvature $\lvert f''(x_0)\rvert$ vanishes at the critical point and the nondegenerate Gaussian approximation breaks down.

Before applying a Gaussian formula near such a point, identify the soft direction and retain its first stabilizing higher-order term. For a fixed finite number of variables this changes the power of $N$ in the width. For fields, it also requires analysis of the many spatial modes; a single quartic integral does not establish the critical behaviour of an interacting field theory.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $N$ | $1$ | Particle count | The number of particles in the system. |
