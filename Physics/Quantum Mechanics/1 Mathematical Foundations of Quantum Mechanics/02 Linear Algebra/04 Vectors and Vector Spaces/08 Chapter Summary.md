---
title: "Chapter Summary"
---

> [!TLDR]
> Bases give vector coordinates, while inner products define norms and orthogonality. In quantum mechanics, coordinates in an orthonormal state basis are probability amplitudes.

- A vector space over $\mathbb{C}$ is closed under addition and scalar multiplication, with eight axioms.
- Linear independence means $\sum_i\alpha_iv_i=0\Longrightarrow\alpha_i=0$ for every $i$.
- A basis is an independent set that spans the whole space. The dimension is the number of basis elements.
- A Hermitian inner product satisfies $\langle u,v\rangle=\langle v,u\rangle^*$ and is antilinear in its first argument.
- The norm is $\|v\|=\sqrt{\langle v,v\rangle}$.
- For an orthonormal basis, $\langle e_i,e_j\rangle=\delta_{ij}$, and the coordinates are $c_i=\langle e_i,v\rangle$.
- Gram–Schmidt constructs an orthonormal basis from any basis.
- In quantum mechanics, states are represented by vectors and probability amplitudes are coordinates. In an orthonormal state basis, the basis-state probabilities are $|\signal{c}_n|^2$.

## Reconstruct the chapter

Given a proposed state expansion, first ask whether its vectors span the required space. Next test independence to establish unique coordinates. Only then ask whether the basis is orthonormal, which permits direct coefficient extraction by inner products. These are separate assumptions.

For a check, $(1,0)^T$ and $(1,1)^T$ span $\mathbb{C}^2$ independently, but their inner product is $1$. Gram–Schmidt removes the shared component and produces the standard orthonormal directions. Explain why simply normalizing the original two vectors would leave a nonzero overlap. The finite procedure does not by itself prove convergence of infinite state expansions.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{c}_n$ | $1$ | Probability amplitudes | The quantum state coordinates in an orthonormal basis. |
| $\lvert\signal{c}_n\rvert^2$ | $1$ | Basis-state probabilities | The probabilities given by squared amplitude magnitudes. |
