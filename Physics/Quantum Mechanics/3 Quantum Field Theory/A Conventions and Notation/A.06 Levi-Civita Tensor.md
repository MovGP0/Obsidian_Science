---
title: "Levi-Civita Tensor"
---

> [!TLDR]
> The four-dimensional Levi-Civita tensor has upper component ε⁰¹²³ = +1 and lower component ε₀₁₂₃ = −1 in the mostly-minus convention.

Define the four-dimensional Levi-Civita tensor by
$$
\epsilon^{0123}=+1.
\tag{A.57}
$$
Lowering all indices gives
$$
\epsilon_{\mu\nu\rho\sigma}
=g_{\mu\alpha}g_{\nu\beta}g_{\rho\gamma}g_{\sigma\delta}
\epsilon^{\alpha\beta\gamma\delta}.
$$
For the mostly-minus metric, $\det(g_{\mu\nu})=-1$.
Thus $\epsilon_{0123}=-1$ and, numerically, the lower-index components have the opposite signs to the corresponding upper-index components.

## Contraction identities

$$
\epsilon^{\mu\nu\rho\sigma}\epsilon_{\mu\nu\rho\sigma}=-24,
\tag{A.58}
$$
$$
\epsilon^{\mu\nu\rho\sigma}\epsilon_{\alpha\nu\rho\sigma}
=-6\delta^\mu_\alpha,
\tag{A.59}
$$
$$
\epsilon^{\mu\nu\rho\sigma}\epsilon_{\alpha\beta\rho\sigma}
=-2\bigl(\delta^\mu_\alpha\delta^\nu_\beta
-\delta^\mu_\beta\delta^\nu_\alpha\bigr),
\tag{A.60}
$$
$$
\epsilon^{\mu\nu\rho\sigma}\epsilon_{\alpha\beta\gamma\sigma}
=-\det\begin{pmatrix}
\delta^\mu_\alpha&\delta^\mu_\beta&\delta^\mu_\gamma\\
\delta^\nu_\alpha&\delta^\nu_\beta&\delta^\nu_\gamma\\
\delta^\rho_\alpha&\delta^\rho_\beta&\delta^\rho_\gamma
\end{pmatrix}.
\tag{A.61}
$$

## Dual tensor

The dual of an antisymmetric tensor $F^{\mu\nu}$ is
$$
\tilde F^{\mu\nu}
=\frac12\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}.
\tag{A.62}
$$
