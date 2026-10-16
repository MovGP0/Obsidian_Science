---
title: "Trace Theorems and Tensor Contractions"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "436"
pdf_page: 450
---

> [!TLDR]
> The source lists gamma-matrix trace identities and metric and Levi-Civita tensor contractions for transition calculations.

<!-- PDF page 450; printed page 436 -->

In evaluating the traces of products of $\gamma$-matrices that occur in the computation of transition matrix elements, the following theorems are useful:

$$
\operatorname{tr}(\mathbb{I})=4, \tag{A.3.1}
$$

$$
\operatorname{tr}(AB)=\operatorname{tr}(BA), \tag{A.3.2}
$$

$$
\operatorname{tr}(\gamma_\mu)=0, \tag{A.3.3}
$$

$$
\operatorname{tr}(\text{odd number of }\gamma\text{-matrices})=0, \tag{A.3.4}
$$

$$
\operatorname{tr}(\gamma_\mu\gamma_\nu)=4g_{\mu\nu}, \tag{A.3.5a}
$$

$$
\operatorname{tr}(\not{a}\not{b})=4a\cdot b, \tag{A.3.5b}
$$

$$
\operatorname{tr}(\gamma_\mu\gamma_\nu\gamma_\rho\gamma_\sigma)
=4[g_{\mu\nu}g_{\rho\sigma}-g_{\mu\rho}g_{\nu\sigma}+g_{\mu\sigma}g_{\nu\rho}],
\tag{A.3.6a}
$$

$$
\operatorname{tr}(\not{a}\not{b}\not{c}\not{d})=
4[(a\cdot b)(c\cdot d)-(a\cdot c)(b\cdot d)+(a\cdot d)(b\cdot c)],
\tag{A.3.6b}
$$

<!-- PDF page 451; printed page 437 -->

$$
\operatorname{tr}(\gamma_5)=0, \tag{A.3.7}
$$

$$
\operatorname{tr}(\gamma_5\gamma_\mu)=0, \tag{A.3.8}
$$

$$
\operatorname{tr}(\gamma_5\gamma_\mu\gamma_\nu)=0, \tag{A.3.9}
$$

$$
\operatorname{tr}(\gamma_5\gamma_\mu\gamma_\nu\gamma_\rho)=0, \tag{A.3.10}
$$

$$
\operatorname{tr}(\gamma_5\gamma_\mu\gamma_\nu\gamma_\rho\gamma_\sigma)
=4i\varepsilon_{\mu\nu\rho\sigma}, \tag{A.3.11a}
$$

$$
\operatorname{tr}(\gamma_5\not{a}\not{b}\not{c}\not{d})
=4i\varepsilon_{\mu\nu\rho\sigma}a^\mu b^\nu c^\rho d^\sigma, \tag{A.3.11b}
$$

Derivations and extensions of these results may be found in many places, including section 7.2 of Bjorken and Drell (Ref. [1]) and section 22 of the “Landau and Lifshitz” QED volume [3].

Some useful results from tensor calculus are:

$$
g^{\lambda\mu}g_{\mu\nu}=\delta_\nu^\lambda=
\begin{cases}
1,&\lambda=\nu,\\
0,&\text{otherwise,}
\end{cases} \tag{A.3.12}
$$

$$
\begin{aligned}
-\varepsilon^{\alpha\lambda\mu\nu}\varepsilon_{\alpha\rho\sigma\tau}
={}&\delta_\rho^\lambda(\delta_\sigma^\mu\delta_\tau^\nu-\delta_\tau^\mu\delta_\sigma^\nu)\\
&-\delta_\sigma^\lambda(\delta_\rho^\mu\delta_\tau^\nu-\delta_\tau^\mu\delta_\rho^\nu)\\
&+\delta_\tau^\lambda(\delta_\rho^\mu\delta_\sigma^\nu-\delta_\sigma^\mu\delta_\rho^\nu),
\end{aligned} \tag{A.3.13}
$$

$$
-\varepsilon^{\alpha\beta\mu\nu}\varepsilon_{\alpha\beta\sigma\tau}
=2(\delta_\sigma^\mu\delta_\tau^\nu-\delta_\tau^\mu\delta_\sigma^\nu), \tag{A.3.14}
$$

$$
-\varepsilon^{\alpha\beta\gamma\nu}\varepsilon_{\alpha\beta\gamma\tau}
=6\delta_\tau^\nu, \tag{A.3.15}
$$

$$
-\varepsilon^{\alpha\beta\gamma\delta}\varepsilon_{\alpha\beta\gamma\delta}
=24. \tag{A.3.16}
$$
