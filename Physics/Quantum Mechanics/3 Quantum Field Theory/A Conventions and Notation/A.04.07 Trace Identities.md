---
title: "Trace Identities"
---

> [!TLDR]
> Gamma-matrix traces reduce products to metric contractions and, with a chirality matrix, to the Levi-Civita tensor.

Use $\operatorname{Tr}[\mathbf1_4]=4$.
The trace identities are
$$
\operatorname{Tr}[\gamma^\mu\gamma^\nu]
=4g^{\mu\nu},
\tag{A.35}
$$
$$
\operatorname{Tr}[\text{product of an odd number of }\gamma^\mu]=0,
\tag{A.36}
$$
$$
\operatorname{Tr}[\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma]
=4\bigl(g^{\mu\nu}g^{\rho\sigma}
-g^{\mu\rho}g^{\nu\sigma}
+g^{\mu\sigma}g^{\nu\rho}\bigr),
\tag{A.37}
$$
$$
\operatorname{Tr}[\gamma^5]=0,
\tag{A.38}
$$
$$
\operatorname{Tr}[\gamma^5\gamma^\mu\gamma^\nu]=0,
\tag{A.39}
$$
$$
\operatorname{Tr}[\gamma^5\gamma^\mu\gamma^\nu\gamma^\rho\gamma^\sigma]
=-4i\epsilon^{\mu\nu\rho\sigma}.
\tag{A.40}
$$
For an even number of gamma matrices, the recursive form begins
$$
\begin{aligned}
\operatorname{Tr}[\gamma^{\mu_1}\cdots\gamma^{\mu_{2n}}]
={}&g^{\mu_1\mu_2}
\operatorname{Tr}[\gamma^{\mu_3}\cdots\gamma^{\mu_{2n}}]\\
&-g^{\mu_1\mu_3}
\operatorname{Tr}[\gamma^{\mu_2}\gamma^{\mu_4}\cdots\gamma^{\mu_{2n}}]
+\cdots.
\end{aligned}
\tag{A.41}
$$
The last relation reduces the trace of any even number of gamma matrices recursively.

> [!note]
> The chirality-matrix identities use the four-dimensional definition of $\gamma^5$ and the stated Levi-Civita convention. Their use in dimensional regularization requires a specified $\gamma^5$ prescription; they cannot all be continued unchanged to general $d$.

These formulas convert spin sums in squared amplitudes into Lorentz scalar contractions; combine them with [[A.05.05 Completeness Relations]]. Matrix order matters. Cyclic permutations leave a trace unchanged, but arbitrary swaps require the Clifford algebra. The alternating signs in (A.37) record these swaps.

A quick check sets all four indices in (A.37) to zero: its right side is four, as is the trace of the fourth power of the time gamma matrix. For the chirality sign, choose $(\mu,\nu,\rho,\sigma)=(0,1,2,3)$ in (A.40). Definition (A.16) makes the product inside the trace equal to $-i\mathbf1_4$, giving $-4i$. This checks the epsilon convention independently of a remembered trace sign. In (A.41), each pairing of the first index with a later index alternates sign; the terminal trace is four, including the empty product.
