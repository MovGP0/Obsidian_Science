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

All components with a repeated index vanish; an odd permutation changes the sign. For (A.58), each of the $4!$ nonzero upper/lower products is minus one, giving minus twenty-four. For (A.59) with both free indices zero, the remaining $3!$ products give minus six. These checks fix the Lorentzian sign before using a contraction identity.

The epsilon object is a pseudotensor: its transformation under an orientation reversal differs by a sign from that of an ordinary tensor. Keep the orientation convention fixed when comparing parity or duality formulas. Applying (A.60) to an antisymmetric tensor shows that taking the dual twice gives minus the original tensor. The factor one half in (A.62) prevents double counting of the two orders of each antisymmetric index pair. This result is specific to the stated four-dimensional Lorentzian convention; the Euclidean double-dual sign differs.
