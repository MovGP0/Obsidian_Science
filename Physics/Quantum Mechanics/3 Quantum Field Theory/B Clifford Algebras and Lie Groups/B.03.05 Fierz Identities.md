---
title: "Fierz Identities"
---

> [!TLDR]
> Fierz identities rearrange products of spinor bilinears by using completeness of a Clifford-matrix basis.

Fierz identities rewrite products of spinor bilinears.
In four dimensions, completeness of the Clifford basis
$$
\{\mathbf1,\gamma^\mu,\gamma^{\mu\nu},
\gamma^\mu\gamma^5,\gamma^5\}
$$
gives rearrangements of the schematic form
$$
(\bar{\signal{\psi}}_1\Gamma_A\signal{\psi}_2)
(\bar{\signal{\psi}}_3\Gamma_B\signal{\psi}_4)
=\sum_C\mathcal F_{AB}^{\ C}
(\bar{\signal{\psi}}_1\Gamma_C\signal{\psi}_4)
(\bar{\signal{\psi}}_3\Gamma^C\signal{\psi}_2).
\tag{B.34}
$$

> [!note]
> Equation (B.34) retains the source's schematic notation. The basis normalization, Lorentz contractions, and commuting or anticommuting spinor convention must be specified to fix its coefficients. A fully general rearrangement with independent matrix indices uses two output basis labels rather than the single contracted label shown here.

The Fierz coefficients are fixed by the algebra and the chosen basis.

## Useful four-dimensional rearrangements

For anticommuting spinor fields, the left-chiral current identity is
$$
(\bar u\gamma^\mu P_Lv)(\bar w\gamma_\mu P_Lx)
=(\bar u\gamma^\mu P_Lx)(\bar w\gamma_\mu P_Lv).
\tag{B.35}
$$
For commuting numerical spinors, the right-hand side instead has a minus sign.

With commuting numerical spinors and
$\gamma^{\mu\nu}=\tfrac12[\gamma^\mu,\gamma^\nu]$,
the scalar-bilinear rearrangement is
$$
\begin{aligned}
(\bar uv)(\bar wx)
={}&\frac14(\bar ux)(\bar wv)
+\frac14(\bar u\gamma^5x)(\bar w\gamma^5v)\\
&+\frac14(\bar u\gamma^\mu x)(\bar w\gamma_\mu v)
-\frac14(\bar u\gamma^\mu\gamma^5x)(\bar w\gamma_\mu\gamma^5v)\\
&-\frac18(\bar u\gamma^{\mu\nu}x)(\bar w\gamma_{\mu\nu}v).
\end{aligned}
\tag{B.36}
$$

> [!note] Correction and statistics convention
> The source prints negative pseudoscalar and vector terms, a positive axial term, and a positive tensor term in (B.36). Those signs do not give the scalar completeness identity with the stated gamma basis. The corrected commuting-spinor form is shown here. For anticommuting fields, the complete rearranged right-hand side acquires an additional overall minus sign.
>
> The distinction between matrix identities and anticommuting fields, including the chiral-current sign in (B.35), follows the completeness derivation in [C. C. Nishi, *Simple derivation of general Fierz-type identities*, Eqs. (31)–(35)](https://arxiv.org/pdf/hep-ph/0412245).

## How to derive rather than memorize a rearrangement

Choose sixteen independent matrices $E_A$ and a trace-dual basis $E^A$ with $\operatorname{tr}(E^AE_B)=4\delta^A{}_B$. Every complex $4\times4$ matrix then obeys
$$
M=\frac14\sum_A E_A\operatorname{tr}(E^AM).
$$
Apply this expansion to a rank-one outer product and then contract the remaining two spinors. This changes the pairing of spinor indices and gives the Fierz coefficients as traces. The dual tensor basis must account for antisymmetric index pairs; summing all ordered pairs counts each independent pair twice. This explains the tensor factor in (B.36). [Nishi, §§III–IV](https://arxiv.org/pdf/hep-ph/0412245#page=5) develops this matrix-completeness construction.

Only after the matrix identity is established should Grassmann components be inserted and reordered. This separates a trace sign from a statistics sign. As a check on a proposed coefficient set, use each matrix unit $M_{ij}=\delta_{ir}\delta_{js}$ in the expansion; these sixteen tests establish a linear matrix identity. A single chosen set of spinors can disprove an incorrect identity but cannot establish all its coefficients.

To choose an efficient basis, consider four left-chiral currents. Which matrices in the full Clifford basis survive multiplication by the chiral projectors on the required sides? Apply the projector relations before taking traces. The eliminated terms explain why (B.35) is much shorter than the scalar completeness expansion.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\signal{\psi}_i,\bar{\signal{\psi}}_i$ | — | Spinors and adjoints | The four spinors whose bilinears are rearranged; their physical normalization is not specified here. |
