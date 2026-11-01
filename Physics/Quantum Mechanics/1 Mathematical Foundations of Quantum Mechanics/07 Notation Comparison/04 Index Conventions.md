---
title: "Index Conventions"
---

> [!TLDR]
> Modern matrix notation places the row index first and the column index second. Matrix–vector multiplication sums over the column index.

Some notation in linear algebra can be ambiguous. This book uses the following conventions:

| Object | Standard convention | Alternatives |
| --- | --- | --- |
| Column vector | $v_i$ is the $i$th component | No alternative is used here. |
| Matrix | $A_{ij}$ is the entry in row $i$, column $j$ | Some historical texts reverse the index order. |
| Matrix action on a vector | $v_i\mapsto\sum_jA_{ij}v_j$ | No alternative is used here. |
| Component of $Av$ | $(Av)_i=\sum_jA_{ij}v_j$ | No alternative is used here. |

The index $j$ is summed. The free index $i$ identifies the resulting vector component.

In an orthonormal basis $\{e_i\}$, these entries mean $v_j=\langle e_j,v\rangle$ and $A_{ij}=\langle e_i,Ae_j\rangle$, with the physics inner product. The column index labels the input basis vector. The row index labels its output component. In a non-orthonormal basis, matrix entries are still the coefficients of $Ae_j$, but the simple inner-product formula must use a dual basis.

For example,

$$
A=\begin{pmatrix}1&2\\0&3\end{pmatrix},
\qquad v=\begin{pmatrix}0\\1\end{pmatrix}
\quad\Longrightarrow\quad
Av=\begin{pmatrix}2\\3\end{pmatrix}.
$$

The result is the second column, since $v$ selects the second input basis vector. Reversing the index order would instead select the second row and give a different result.

For a product, follow the intermediate component:

$$
(ABv)_i=\sum_j A_{ij}\sum_k B_{jk}v_k,
\qquad (AB)_{ik}=\sum_j A_{ij}B_{jk}.
$$

Here $B$ acts first. The index $j$ is a dummy label and can be renamed throughout its sum. The free indices $i,k$ label the entry being calculated. This appendix writes sums explicitly; a repeated lower index does not impose an unstated tensor convention.

**Check the translation:** With $B=\operatorname{diag}(1,2)$ and the matrix $A$ above, reconstruct the second column of $AB$ before multiplying the matrices. It is twice the second column of $A$, namely $(4,6)^T$. This also checks which factor acts first.

A countably infinite basis uses the same index pattern, with convergence and operator-domain conditions. A continuous representation instead uses a kernel and an integral, $(Af)(x)=\int K(x,y)f(y)\,dy$, where defined. The input variable $y$ is integrated out; the output variable $x$ remains. Do not replace an infinite sum by an integral without specifying the representation and measure.
