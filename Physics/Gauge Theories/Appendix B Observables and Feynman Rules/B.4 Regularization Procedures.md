---
title: "B.4 Regularization Procedures"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "452"
pdf_page: 466
bead: "Obsidian_Electronics-l4vx.110"
---

> [!TLDR]
> Pauli–Villars and dimensional regularization control divergent loop integrals while preserving gauge invariance.

<!-- PDF page 466; printed page 452 -->

It is frequently the case that the Feynman graphs to be calculated suffer from severe ultraviolet divergences. Several procedures have been developed to regularize the integrals without losing the gauge invariance of the theory. The simplest such method is the Pauli–Villars procedure [3] described in section 8.2 in the calculation of the vacuum polarization in electrodynamics. We add unphysical fields of adjustable mass to the Lagrangian in a gauge-invariant manner. After gauge-invariant renormalization, the unphysical masses are taken to be infinite, and the renormalized quantities are shown to be finite.

This device is ill suited to deal with non-Abelian theories. An alternative scheme, known as dimensional regularization, was applied to this problem by ’t Hooft and Veltman [4]. Stated simply, dimensional regularization consists in defining the loop integral in exponential form in $(d-1)>3$ space dimensions and 1 time dimension, while restricting the external momenta and polarization vectors to the physical $(3+1)$-dimensional space. After performing the $(d-4)$-dimensional integration in the space orthogonal to the physical space, we analytically continue the result in $d$. For sufficiently small values of $d$ or for complex values of $d$, the subsequent 4-dimensional integrals are convergent. Divergences may then be

<!-- PDF page 467; printed page 453 -->

isolated systematically as singularities of the form $(d-4)^{-1}$, and so on. The following results are sufficient to deal with integrals encountered in this book:

$$
(2\pi)^{-d}\int d^d\mechanical{k}\,\exp(i\lambda\mechanical{k}^{\,2})
=\frac{-\exp(-i\pi d/4)}{(4\pi\lambda)^{d/2}i}, \tag{B.4.1}
$$

$$
(2\pi)^{-d}\int d^d\mechanical{k}\,(\mechanical{k}^{\,2})^m
\exp(i\lambda\mechanical{k}^{\,2})
=\frac{-\exp(-i\pi d/4)\Gamma(m+d/2)}
{(4\pi\lambda)^{d/2}i(-i\lambda)^m\Gamma(d/2)}, \tag{B.4.2}
$$

where symmetric integration yields

$$
\mechanical{k}_\mu\mechanical{k}_\nu\to
\frac{\mechanical{k}^{\,2}}{d}g_{\mu\nu},\ldots. \tag{B.4.3}
$$

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{k}$ | $\unit{\mathrm{GeV}}$ | Loop momentum | The momentum in the dimensionally continued loop integral. |
