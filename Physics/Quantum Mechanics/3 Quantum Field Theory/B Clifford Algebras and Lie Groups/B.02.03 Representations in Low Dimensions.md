---
title: "Representations in Low Dimensions"
---

> [!TLDR]
> Low-dimensional gamma matrices can be built from Pauli matrices. Spinor sizes and possible reality or chirality conditions depend on dimension and signature.

**Table B.1** Clifford-algebra and spinor properties as listed in the source. It calls $N_s$ the minimal irreducible spinor dimension and uses $f(d)=\operatorname{tr}(\mathbf1)$ in the Dirac representation.

| $d$ | Signature | $N_s$ | $f(d)$ | Source type label |
| --- | --- | --- | --- | --- |
| $2$ | $(2,0)$ | $1$ | $2$ | Majorana/Weyl |
| $2$ | $(1,1)$ | $1$ | $2$ | Majorana |
| $3$ | $(3,0)$ | $2$ | $2$ | Majorana |
| $3$ | $(2,1)$ | $2$ | $2$ | Majorana |
| $4$ | $(4,0)$ | $2$ | $4$ | Weyl |
| $4$ | $(3,1)$ | $2$ | $4$ | Majorana or Weyl |
| $5$ | $(4,1)$ | $4$ | $4$ | Dirac |
| $6$ | $(5,1)$ | $4$ | $8$ | Weyl |
| $8$ | $(8,0)$ | $8$ | $16$ | Majorana–Weyl |
| $10$ | $(9,1)$ | $16$ | $32$ | Majorana–Weyl |

> [!note] Scope of the source table
> The entries are retained as source labels. The table does not consistently distinguish a full irreducible Clifford module from an irreducible spin-group or chiral module. For example, (B.25) uses $2\times2$ Clifford matrices in $d=2$, while the table lists $N_s=1$. Reality conditions also depend on signature and on whether dimensions are counted over the real or complex numbers; this table alone does not specify those conventions. Its $(3,1)$ row uses the opposite overall sign to the appendix's default $(1,3)$ Minkowski signature.

## Two Euclidean dimensions

A representation is
$$
\gamma^1=\sigma_1=
\begin{pmatrix}0&1\\1&0\end{pmatrix},
\qquad
\gamma^2=\sigma_2=
\begin{pmatrix}0&-i\\i&0\end{pmatrix}.
\tag{B.25}
$$

## Three-dimensional Minkowski representation

A choice with metric $\operatorname{diag}(+1,-1,-1)$ is
$$
\gamma^0=\sigma_3,
\qquad
\gamma^1=i\sigma_1,
\qquad
\gamma^2=i\sigma_2.
\tag{B.26}
$$

> [!note] Correction to the source
> The source labels this representation $(2,1)$. With its definition that the first entry counts positive directions, the displayed matrices instead have signature $(1,2)$: their squares are $+\mathbf1,-\mathbf1,-\mathbf1$.

## Four-dimensional Minkowski representation — Dirac basis

$$
\gamma^0=
\begin{pmatrix}\mathbf1_2&0\\0&-\mathbf1_2\end{pmatrix},
\qquad
\gamma^i=
\begin{pmatrix}0&\sigma^i\\-\sigma^i&0\end{pmatrix},
\qquad
\gamma^5=
\begin{pmatrix}0&\mathbf1_2\\\mathbf1_2&0\end{pmatrix}.
\tag{B.27}
$$

## Four-dimensional Minkowski representation — Weyl basis

$$
\gamma^\mu=
\begin{pmatrix}0&\sigma^\mu\\\bar\sigma^\mu&0\end{pmatrix},
\qquad
\gamma^5=
\begin{pmatrix}-\mathbf1_2&0\\0&\mathbf1_2\end{pmatrix},
\tag{B.28}
$$
where
$$
\sigma^\mu=(\mathbf1_2,\boldsymbol\sigma),
\qquad
\bar\sigma^\mu=(\mathbf1_2,-\boldsymbol\sigma).
$$

## Four Euclidean dimensions

Starting from mostly-minus Minkowski matrices, take
$$
\gamma_E^4=\gamma_M^0,
\qquad
\gamma_E^i=i\gamma_M^i,
\qquad i=1,2,3,
\qquad
\{\gamma_E^\mu,\gamma_E^\nu\}=2\delta^{\mu\nu}\mathbf1.
\tag{B.29}
$$

## Reading the table and checking the matrices

The explicit matrices provide checks that do not require interpreting the source's type labels. In (B.26), the squares are $+\mathbf1,-\mathbf1,-\mathbf1$; anticommutators of distinct matrices vanish. Their product is $-i\mathbf1$, so its trace is $-2i$. This also checks the odd-dimensional exception to (B.17).

In four dimensions, the Dirac and Weyl bases describe the same complex Clifford module. A change of basis changes the components and matrices together; it does not change traces or the number of independent components. The Weyl basis makes the two eigenvalues of $\gamma^5$ visible. A single two-component Weyl space is preserved by Lorentz generators, but not by all four gamma matrices, which exchange the two chiral spaces.

Consequently, the table's $N_s$ must not be read as the size of matrices satisfying the full Clifford relation. To interpret a real-spinor label, use the signature-dependent classification in [Van Proeyen, §3.2 and Table 2](https://arxiv.org/pdf/hep-th/9910030#page=20). The source table is retained as reported, rather than converted into an unqualified classification.
