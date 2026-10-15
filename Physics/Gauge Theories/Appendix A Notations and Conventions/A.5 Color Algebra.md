---
title: "A.5 Color Algebra"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "440"
pdf_page: 454
bead: "Obsidian_Electronics-l4vx.104"
---

> [!TLDR]
> Color algebra separates QCD color factors from Lorentz structure and represents their identities with quark, gluon, and double-line diagrams.

<!-- PDF page 454; printed page 440 -->

Any Feynman diagram in QCD may be expressed as the product of color factors and Lorentz structure. Although the color factor can be evaluated by algebraic means, a graphical representation of the color structure may make it easier to recognize relationships and to see simplifications [5].

In color space, the quark (8.3.9) and gluon (8.3.7) propagators are simply identity matrices for the fundamental and adjoint representations, respectively:

$$
\delta^F_{\alpha\beta},\qquad\delta^A_{ab}. \tag{A.5.1}
$$

![[gauge-theories-equation-A-5-1-color-diagram.svg|Quark and gluon identity propagators in color space.]]

<!-- PDF page 455; printed page 441 -->

Loops with no external legs amount to traces over the color indices. For a quark loop,

$$
\operatorname{tr}(\mathbb{I}_F)=\delta_{\alpha\alpha}=N: \tag{A.5.2}
$$

![[gauge-theories-equation-A-5-2-color-diagram.svg|A closed quark color loop gives N.]]

whereas for a gluon loop,

$$
\operatorname{tr}(\mathbb{I}_A)=\delta_{aa}=N^2-1: \tag{A.5.3}
$$

![[gauge-theories-equation-A-5-3-color-diagram.svg|A closed gluon color loop gives N² − 1.]]

Three-point functions correspond to generators of the color algebra [recall from (8.1.16) that $T^a=\frac12\lambda^a$].

$$
T^a_{\alpha\beta} \tag{A.5.4}
$$

![[gauge-theories-equation-A-5-4-color-diagram.svg|The quark–quark–gluon color vertex.]]

$$
if^{abc} \tag{A.5.5}
$$

![[gauge-theories-equation-A-5-5-color-diagram.svg|The three-gluon color vertex.]]

Accordingly, the color factor for a quark loop with one external gluon (a quark tadpole) is

$$
\operatorname{tr}(T^a)=0: \tag{A.5.6}
$$

![[gauge-theories-equation-A-5-6-color-diagram.svg|The quark tadpole color factor is zero.]]

For a gluon tadpole, we have

$$
f^{abb}=0: \tag{A.5.7}
$$

![[gauge-theories-equation-A-5-7-color-diagram.svg|The gluon tadpole color factor is zero.]]

<!-- PDF page 456; printed page 442 -->

For a quark loop with two external gluons, the color factor is [cf. (8.1.8)]

$$
\operatorname{tr}(T^aT^b)=T_R\delta_{ab}=\frac12\delta_{ab}: \tag{A.5.8}
$$

![[gauge-theories-equation-A-5-8-color-diagram.svg|The two-gluon quark loop reduces to T_R times a gluon color propagator.]]

A gluon loop with two external gluons contributes with weight

$$
f^{acd}f^{bcd}=C_A\delta_{ab}=N\delta_{ab}: \tag{A.5.9}
$$

![[gauge-theories-equation-A-5-9-color-diagram.svg|The two-gluon gluon loop reduces to C_A times a gluon color propagator.]]

A quark self-energy loop carries a color factor [cf. (8.3.20)]

$$
(T^aT^a)_{\alpha\beta}=C_F\delta_{\alpha\beta}
=\frac{N^2-1}{2N}\delta_{\alpha\beta}: \tag{A.5.10}
$$

![[gauge-theories-equation-A-5-10-color-diagram.svg|The quark self-energy color loop reduces to C_F times the quark color propagator.]]

The commutation relations [cf. (8.1.9)] for the generators in the fundamental representation have a simple graphical interpretation:

$$
[T^a,T^b]=if^{abc}T^c, \tag{A.5.11}
$$

![[gauge-theories-equation-A-5-11-color-diagram.svg|The commutator in the fundamental representation.]]

In the graphical depiction of the commutation relations in the adjoint representation,

![[gauge-theories-equation-A-5-12-color-diagram.svg|The commutator in the adjoint representation, equation A.5.12.]]

<!-- PDF page 457; printed page 443 -->

we immediately recognize the Jacobi identity:

![[gauge-theories-equation-A-5-13-color-diagram.svg|The graphical Jacobi identity, equation A.5.13.]]

The Fierz relation derived in problem 8.11,

$$
T^a_{\alpha\beta}T^a_{\gamma\delta}
=\frac12\delta_{\alpha\delta}\delta_{\beta\gamma}
-\frac{1}{2N}\delta_{\alpha\beta}\delta_{\gamma\delta}, \tag{A.5.14}
$$

may be expressed graphically as

![[gauge-theories-equation-A-5-14-color-diagram.svg|The graphical form of the color Fierz relation.]]

which makes manifest the replacement of a gluon as a quark-antiquark pair, as in the $1/N$ construction of section 8.10:

![[gauge-theories-equation-A-5-15-color-diagram.svg|A gluon represented by oppositely directed color lines, equation A.5.15.]]

Evidently the quark–quark–gluon vertex may now be expressed in double-line notation as

![[gauge-theories-equation-A-5-16-color-diagram.svg|The double-line quark–quark–gluon vertex with the hairpin subtraction, equation A.5.16.]]

The diagram weighted by $1/N$, for which the quark and antiquark in the hairpin must carry the same color, ensures the tracelessness of the generator $T^a$. The overall factor $1/\sqrt2$ reflects the normalization of the generators characterized by $T_R$.

In similar fashion, the three-gluon vertex is represented by

![[gauge-theories-equation-A-5-17-color-diagram.svg|The difference of the two double-line three-gluon color flows, equation A.5.17.]]

<!-- PDF page 458; printed page 444 -->

As in the $1/N$ expansion, a closed loop of color, which stands for the trace of the unit matrix in the fundamental representation, yields a factor of $N$ [6].

The color factors for vertex corrections at one loop are readily evaluated using graphical methods. For the first diagram in figure 8.19(b), we may either apply (A.5.14) and (A.5.6) or the double-line calculus of (A.5.16) to find

$$
(T^bT^aT^b)=-\frac{1}{2N}T^a
=\left(C_F-\frac12C_A\right)T^a \tag{A.5.18}
$$

![[gauge-theories-equation-A-5-18-color-diagram.svg|The first one-loop vertex correction color factor.]]

To evaluate the color factor for the second diagram in figure 8.19(b), we employ the commutation relations expressed in (A.5.11) to replace the mixed quark–gluon–gluon loop with the gluon bubble (A.5.9). In this way we find

$$
if^{abc}(T^bT^c)=\frac{C_A}{2}T^a=\frac{N}{2}T^a \tag{A.5.19}
$$

![[gauge-theories-equation-A-5-19-color-diagram.svg|The second one-loop vertex correction, with the printed graphical factors retained.]]
