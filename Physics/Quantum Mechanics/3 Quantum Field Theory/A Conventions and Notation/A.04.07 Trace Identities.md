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
