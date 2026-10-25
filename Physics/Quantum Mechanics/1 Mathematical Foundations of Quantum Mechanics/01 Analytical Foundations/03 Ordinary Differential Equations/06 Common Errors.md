---
title: "Common Errors"
---

> [!TLDR]
> Keep all integration constants and impose the required initial or boundary conditions. Distinguish characteristic roots from functions, and use complex solutions correctly.

## Error 1 — Forget the integration constant

The general solution of $y'=ky$ is $y=C\mathrm{e}^{kx}$, with arbitrary $C$. Writing $y=\mathrm{e}^{kx}$ gives a particular solution, not the general solution. The initial conditions determine $C$.

## Error 2 — Confuse general and particular solutions

The general solution of a second-order ODE has two free constants, $C_1$ and $C_2$. If you find only one, information has been lost. The two initial conditions $y(x_0)=y_0$ and $y'(x_0)=v_0$ determine both constants.

> [!note]
> This statement assumes an ordinary second-order equation in normal form with suitable regularity, as used in this chapter. Singular or nonlinear equations need their own existence and solution analysis.

## Error 3 — Treat boundary conditions as optional

If you omit the boundary conditions from an eigenvalue problem, you have not specified the problem. The source states that without boundary conditions every $\lambda$ is an eigenvalue, so there is no quantization. The physics enters through the boundary conditions.

> [!note]
> The statement about every $\lambda$ describes the unrestricted formal solution of the chapter's example equations. It is not a general spectral theorem. Eigenvalues require a specified operator domain, and some problems have continuous spectra. See [[04 Eigenvalues of Differential Operators]].

## Error 4 — Assume eʳˣ is real when r is complex

If the roots are complex conjugates, $r=\alpha\pm\mathrm{i}\beta$, the solutions $\mathrm{e}^{(\alpha+\mathrm{i}\beta)x}$ and $\mathrm{e}^{(\alpha-\mathrm{i}\beta)x}$ are complex. Their real linear combinations give the independent real solutions

$$
\mathrm{e}^{\alpha x}\cos(\beta x),
\qquad\mathrm{e}^{\alpha x}\sin(\beta x).
$$

Complex solutions are allowed and expected in quantum mechanics.

> [!note]
> To obtain the sine solution from the two complex exponentials, divide their difference by $2\mathrm{i}$. Thus, the source's phrase “real linear combinations” should be understood as combinations that give real-valued functions; the exponential-basis coefficients need not all be real.

## Error 5 — Solve the characteristic equation for y instead of r

In $ar^2+br+c=0$, the unknown is $r$, the parameter in the exponent $\mathrm{e}^{rx}$. This is not an equation for $y$.
