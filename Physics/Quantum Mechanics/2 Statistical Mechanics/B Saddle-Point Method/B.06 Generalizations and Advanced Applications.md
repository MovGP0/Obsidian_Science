---
title: "Generalizations and Advanced Applications"
source_chapter: "B"
source_section: "B.6"
source_page: 479
---

> [!TLDR]
> Multivariable saddles, Gaussian fluctuations, and auxiliary fields extend the method to mean-field and field-theory calculations.

## Saddle point in several variables

For an integral over $\mathbf x\in\mathbb R^n$ with large parameter $N$, let $\mathbf x_0$ be a maximum of $f$ with $\nabla f(\mathbf x_0)=0$. Its Hessian,

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

## Mean-field theory

The mean-field Ising partition function can be written as a functional integral. In the large-particle-number limit, the equilibrium configuration dominates it: this is the saddle of the effective action. Gaussian fluctuations around the saddle give one-loop corrections. Higher-order terms generate the perturbation series.

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

> [!note]
> The saddle-point method has a physical meaning as well as a computational use: it selects the configuration that dominates the partition function in the thermodynamic limit. This is the thermodynamic equilibrium configuration.

Systematic corrections describe fluctuations around equilibrium. They become important near a continuous phase transition, where the curvature $\lvert f''(x_0)\rvert$ vanishes at the critical point and the nondegenerate Gaussian approximation breaks down.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $N$ | $1$ | Particle count | The number of particles in the system. |
