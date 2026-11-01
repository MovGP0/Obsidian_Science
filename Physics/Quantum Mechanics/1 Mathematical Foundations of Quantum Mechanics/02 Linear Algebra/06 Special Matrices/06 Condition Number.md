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

For a perturbation $\delta b$ with fixed $A$, the solution perturbation is $\delta x=A^{-1}\delta b$. Combine $\|\delta x\|\le\|A^{-1}\|\|\delta b\|$ with $\|b\|\le\|A\|\|x\|$ to obtain $\|\delta x\|/\|x\|\le\kappa(A)\|\delta b\|/\|b\|$ for nonzero $b$. This shows where the bound comes from and why it is a worst-case bound.

Take $A=\operatorname{diag}(1,\varepsilon)$ with $0<\varepsilon\ll1$, $b=(1,0)^T$, and $\delta b=(0,\delta)^T$. Then $x=(1,0)^T$ and $\delta x=(0,\delta/\varepsilon)^T$: the amplification is $1/\varepsilon$. A quantum numerical model can therefore be sensitive even when its algebra is exact. Conditioning describes the problem; it is separate from errors of a chosen algorithm.

> [!note]
> This simple relative-error bound assumes a fixed, invertible matrix $A$ and a perturbation of the right-hand side $b$. Perturbations of $A$ require additional conditions in the bound. For a singular matrix, $A^{-1}$ is undefined; its spectral condition number is conventionally infinite.
