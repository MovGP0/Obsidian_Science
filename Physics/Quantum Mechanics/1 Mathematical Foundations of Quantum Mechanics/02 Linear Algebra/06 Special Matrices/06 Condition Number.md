---
title: "Condition Number"
---

> [!TLDR]
> The condition number measures sensitivity to data errors. In the spectral norm, it is the ratio of the largest singular value to the smallest singular value.

For a linear system $Ax=b$, the relative error in the solution is amplified by at most the factor

$$
\kappa(A)=\|A\|\cdot\|A^{-1}\|
=\frac{\sigma_{\max}}{\sigma_{\min}}.
$$

This is the **condition number**. The norm here is the spectral norm induced by the Euclidean vector norm. The values $\sigma_{\max}$ and $\sigma_{\min}$ are the largest and smallest singular values.

If $\kappa(A)\gg1$, the matrix is **ill-conditioned**. Small data errors can produce large errors in the solution.

> [!note]
> This simple relative-error bound assumes a fixed, invertible matrix $A$ and a perturbation of the right-hand side $b$. Perturbations of $A$ require additional conditions in the bound. For a singular matrix, $A^{-1}$ is undefined; its spectral condition number is conventionally infinite.
