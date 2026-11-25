---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/12 Non-Abelian Gauge Theories"
---

> [!TLDR]
> This note tracks the review of the 51 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/12 Non-Abelian Gauge Theories`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2828|N2828]] 12.04.01 Propagators: The Fig. 12.5 caption says "dashed line", but QFT-12-05-Ghost-Propagator.svg uses stroke-dasharray "1 7" (a dotted line), and 12.04.02 calls ghost legs "dotted"; change the caption to "dotted line". **Fixed:** Changed the caption to "dotted line" (SVG has stroke-dasharray 1 7)
- [[#N2829|N2829]] 12.04.02 Vertices: The Physical quantities table lists $\mechanical{k}$ among the vertex momenta, but $k$ never appears in the note; remove it. **Fixed:** Removed k and reworded the description to the outgoing antighost momentum
- [[#N2835|N2835]] 12.06.01 Structure of the One-Loop Calculation: The physical-quantities table lists $\mechanical{\ell}$ ("integration momentum in Fig. 12.8"), but the note text never uses $\ell$; drop it or introduce the loop momentum in the gluon-loop section. **Fixed:** Introduced the loop momentum ℓ and ℓ+k in the gluon-loop section (these labels appear in Fig. 12.8 SVG); kept the table row
- [[#N2837|N2837]] 12.06.03 Running Coupling and the Landau Scale: At $\mechanical{M}_Z=91.2\,\unit{GeV}$ the top quark ($173\,\unit{GeV}$) is not active, so the physical one-loop curve through $\signal{\alpha}_s(\mechanical{M}_Z)=0.118$ uses $N_f=5$, $\beta_0=23/3$, giving $\energy{\Lambda}^{(5)}_{\mathrm{1\,loop}}\approx88\,\unit{MeV}$; state this instead of the $N_f=6$, $\beta_0=7$ point at $x\approx7.61$, and keep $N_f=6$ only as an explicit formal exercise. **Fixed:** Callout now gives N_f=5, β0=23/3, Λ(5)≈88 MeV as physical and marks the N_f=6 point at x≈7.61 as formal; caption says formal six-flavor β0=7; graph unchanged
- [[#N2850|N2850]] 12.10.02 Covariance of the covariant derivative: The physical-quantities table lists $\signal{A}_\mu^a$ and describes the fields as appearing "in the field equations", but this note uses neither the components nor any field equation; list only $\signal{A}_\mu$, $\signal{A}_\mu^U$, $\signal{A}'_\mu$. **Fixed:** Row now lists A_μ, A_μ^U, A'_μ, with the description limited to the covariance check

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2810 | [[12.01 Lie Groups and Lie Algebras\|12.01 Lie Groups and Lie Algebras]] | Analyzed | low | no | no | [[#N2810\|View]] |
| N2811 | [[12.01.01 General Structure\|12.01.01 General Structure]] | Analyzed | low | no | no | [[#N2811\|View]] |
| N2812 | [[12.01.02 Representations\|12.01.02 Representations]] | Analyzed | low | no | no | [[#N2812\|View]] |
| N2813 | [[12.01.03 The Group SU(2)\|12.01.03 The Group SU(2)]] | Analyzed | low | yes | no | [[#N2813\|View]] |
| N2814 | [[12.01.04 The Group SU(3)\|12.01.04 The Group SU(3)]] | Analyzed | low | no | no | [[#N2814\|View]] |
| N2815 | [[12.02 Yang–Mills Gauge Fields\|12.02 Yang–Mills Gauge Fields]] | Analyzed | low | no | no | [[#N2815\|View]] |
| N2816 | [[12.02.01 Local Non-Abelian Gauge Invariance\|12.02.01 Local Non-Abelian Gauge Invariance]] | Analyzed | low | no | no | [[#N2816\|View]] |
| N2817 | [[12.02.02 Transformation of Gauge Fields\|12.02.02 Transformation of Gauge Fields]] | Analyzed | low | no | no | [[#N2817\|View]] |
| N2818 | [[12.02.03 Field Strength Tensor\|12.02.03 Field Strength Tensor]] | Analyzed | low | no | yes | [[#N2818\|View]] |
| N2819 | [[12.02.04 The Yang–Mills Lagrangian\|12.02.04 The Yang–Mills Lagrangian]] | Analyzed | low | no | no | [[#N2819\|View]] |
| N2820 | [[12.02.05 Self-Interactions of Gauge Bosons\|12.02.05 Self-Interactions of Gauge Bosons]] | Analyzed | low | no | no | [[#N2820\|View]] |
| N2821 | [[12.03 Faddeev–Popov Quantization\|12.03 Faddeev–Popov Quantization]] | Analyzed | low | no | no | [[#N2821\|View]] |
| N2822 | [[12.03.01 Gauge Orbits and Gauge Fixing\|12.03.01 Gauge Orbits and Gauge Fixing]] | Analyzed | low | yes | no | [[#N2822\|View]] |
| N2823 | [[12.03.02 The Faddeev–Popov Prescription\|12.03.02 The Faddeev–Popov Prescription]] | Analyzed | medium | no | no | [[#N2823\|View]] |
| N2824 | [[12.03.03 Ghost Fields\|12.03.03 Ghost Fields]] | Analyzed | low | no | no | [[#N2824\|View]] |
| N2825 | [[12.03.04 The Fully Quantized Lagrangian\|12.03.04 The Fully Quantized Lagrangian]] | Analyzed | low | no | no | [[#N2825\|View]] |
| N2826 | [[12.03.05 BRST Symmetry\|12.03.05 BRST Symmetry]] | Analyzed | medium | no | no | [[#N2826\|View]] |
| N2827 | [[12.04 Feynman Rules for Yang–Mills Theory\|12.04 Feynman Rules for Yang–Mills Theory]] | Analyzed | low | no | no | [[#N2827\|View]] |
| N2828 | [[12.04.01 Propagators\|12.04.01 Propagators]] | Analyzed | low | no | no | [[#N2828\|View]] |
| N2829 | [[12.04.02 Vertices\|12.04.02 Vertices]] | Analyzed | low | no | no | [[#N2829\|View]] |
| N2830 | [[12.04.03 Additional Rules\|12.04.03 Additional Rules]] | Analyzed | low | no | no | [[#N2830\|View]] |
| N2831 | [[12.05 QCD as an SU(3) Gauge Theory\|12.05 QCD as an SU(3) Gauge Theory]] | Analyzed | low | no | no | [[#N2831\|View]] |
| N2832 | [[12.05.01 Color Charge and Representations\|12.05.01 Color Charge and Representations]] | Analyzed | low | no | no | [[#N2832\|View]] |
| N2833 | [[12.05.02 Color Factors\|12.05.02 Color Factors]] | Analyzed | low | no | no | [[#N2833\|View]] |
| N2834 | [[12.06 Asymptotic Freedom and the QCD Beta Function\|12.06 Asymptotic Freedom and the QCD Beta Function]] | Analyzed | low | no | no | [[#N2834\|View]] |
| N2835 | [[12.06.01 Structure of the One-Loop Calculation\|12.06.01 Structure of the One-Loop Calculation]] | Analyzed | high | no | no | [[#N2835\|View]] |
| N2836 | [[12.06.02 Overall Result\|12.06.02 Overall Result]] | Analyzed | medium | no | no | [[#N2836\|View]] |
| N2837 | [[12.06.03 Running Coupling and the Landau Scale\|12.06.03 Running Coupling and the Landau Scale]] | Analyzed | medium | yes | no | [[#N2837\|View]] |
| N2838 | [[12.07 Confinement\|12.07 Confinement]] | Analyzed | low | no | no | [[#N2838\|View]] |
| N2839 | [[12.07.01 Evidence for Confinement\|12.07.01 Evidence for Confinement]] | Analyzed | medium | yes | yes | [[#N2839\|View]] |
| N2840 | [[12.07.02 Theoretical Criteria for Confinement\|12.07.02 Theoretical Criteria for Confinement]] | Analyzed | low | yes | no | [[#N2840\|View]] |
| N2841 | [[12.08 Ward–Slavnov–Taylor Identities\|12.08 Ward–Slavnov–Taylor Identities]] | Analyzed | low | no | no | [[#N2841\|View]] |
| N2842 | [[12.08.01 The WST Identity for the Propagator\|12.08.01 The WST Identity for the Propagator]] | Analyzed | low | no | no | [[#N2842\|View]] |
| N2843 | [[12.08.02 Relations between Renormalizations\|12.08.02 Relations between Renormalizations]] | Analyzed | low | no | no | [[#N2843\|View]] |
| N2844 | [[12.09 Advanced Topics and Outlook\|12.09 Advanced Topics and Outlook]] | Analyzed | low | no | no | [[#N2844\|View]] |
| N2845 | [[12.09.01 The Topological Sector - Instantons\|12.09.01 The Topological Sector - Instantons]] | Analyzed | medium | no | no | [[#N2845\|View]] |
| N2846 | [[12.09.02 Large-N_c Expansion\|12.09.02 Large-N_c Expansion]] | Analyzed | low | no | no | [[#N2846\|View]] |
| N2847 | [[12.09.03 Wilson Operators and ’t Hooft Loops\|12.09.03 Wilson Operators and ’t Hooft Loops]] | Analyzed | low | no | no | [[#N2847\|View]] |
| N2848 | [[12.10 Exercises\|12.10 Exercises/12.10 Exercises]] | Analyzed | low | no | no | [[#N2848\|View]] |
| N2849 | [[12.10.01 Structure constants of SU(2)\|12.10 Exercises/12.10.01 Structure constants of SU(2)]] | Analyzed | low | no | no | [[#N2849\|View]] |
| N2850 | [[12.10.02 Covariance of the covariant derivative\|12.10 Exercises/12.10.02 Covariance of the covariant derivative]] | Analyzed | low | no | no | [[#N2850\|View]] |
| N2851 | [[12.10.03 Jacobi identity for the structure constants\|12.10 Exercises/12.10.03 Jacobi identity for the structure constants]] | Analyzed | low | no | no | [[#N2851\|View]] |
| N2852 | [[12.10.04 Adjoint quadratic Casimir of SU(N)\|12.10 Exercises/12.10.04 Adjoint quadratic Casimir of SU(N)]] | Analyzed | low | no | no | [[#N2852\|View]] |
| N2853 | [[12.10.05 Yang–Mills equations of motion\|12.10 Exercises/12.10.05 Yang–Mills equations of motion]] | Analyzed | low | no | no | [[#N2853\|View]] |
| N2854 | [[12.10.06 Non-Abelian Bianchi identity\|12.10 Exercises/12.10.06 Non-Abelian Bianchi identity]] | Analyzed | low | no | no | [[#N2854\|View]] |
| N2855 | [[12.10.07 Three-gluon vertex with two equal color indices\|12.10 Exercises/12.10.07 Three-gluon vertex with two equal color indices]] | Analyzed | low | no | no | [[#N2855\|View]] |
| N2856 | [[12.10.08 Annihilation color factor for quark–antiquark scattering\|12.10 Exercises/12.10.08 Annihilation color factor for quark–antiquark scattering]] | Analyzed | low | no | no | [[#N2856\|View]] |
| N2857 | [[12.10.09 Fermion screening and gluon antiscreening\|12.10 Exercises/12.10.09 Fermion screening and gluon antiscreening]] | Analyzed | low | no | no | [[#N2857\|View]] |
| N2858 | [[12.10.10 Formal infrared scale in QCD\|12.10 Exercises/12.10.10 Formal infrared scale in QCD]] | Analyzed | low | yes | no | [[#N2858\|View]] |
| N2859 | [[12.10.11 Gluon propagator in covariant gauges\|12.10 Exercises/12.10.11 Gluon propagator in covariant gauges]] | Analyzed | low | no | no | [[#N2859\|View]] |
| N2860 | [[12.10.12 Symmetry of the four-gluon vertex\|12.10 Exercises/12.10.12 Symmetry of the four-gluon vertex]] | Analyzed | low | no | no | [[#N2860\|View]] |

## Suggestions

### N2810

Note: [[12.01 Lie Groups and Lie Algebras|12.01 Lie Groups and Lie Algebras]]  
Priority: low · Graph: no · Manim: no

Clear chapter introduction with appropriate caveats about asymptotic freedom and confinement.

- [Links] Add links to [[12.01.03 The Group SU(2)]] and [[12.01.04 The Group SU(3)]] where "the two concrete groups" are mentioned, so the hub links all four section notes.

### N2811

Note: [[12.01.01 General Structure|12.01.01 General Structure]]  
Priority: low · Graph: no · Manim: no

Correct and compact (Jacobi identity in standard form), but the explanatory paragraph refers to an identity before it is displayed.

- [Structure] The paragraph "The commutator measures ... Substitute (12.1) twice to obtain the displayed identity" precedes the Jacobi identity; move it after the displayed $f^{abe}f^{ecd}+\ldots=0$.
- [Example] Add the SU(2) instance $f^{abc}=\varepsilon^{abc}$, giving $K^{ab}=\varepsilon^{acd}\varepsilon^{bcd}=2\delta^{ab}$, as a concrete check of the positive-definite form.

### N2812

Note: [[12.01.02 Representations|12.01.02 Representations]]  
Priority: low · Graph: no · Manim: no

Correct normalizations and Casimirs; the trace check is described in words before the Casimir is introduced.

- [Structure] Move the "useful normalization check" paragraph below the Quadratic Casimir section and write it as an equation: $(N^2-1)T_F=N\,C_F\Rightarrow C_F=(N^2-1)/(2N)$.
- [Example] Add the adjoint check $f^{acd}f^{bcd}=C_A\delta^{ab}=N\delta^{ab}$ (linking it to $K^{ab}$ in [[12.01.01 General Structure]]), and move Example 12.1 (SU(2) Casimir, currently in the SU(3) note) here.

### N2813

Note: [[12.01.03 The Group SU(2)|12.01.03 The Group SU(2)]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the double-cover argument is stated in words and would benefit from one formula and a plot.

- [Example] Display $e^{i\theta\sigma^3/2}=\mathrm{diag}(e^{i\theta/2},e^{-i\theta/2})$ so the minus sign at $\theta=2\pi$ is visible.
- [Graph] Plot the characters $\chi_{1/2}(\theta)=2\cos(\theta/2)$ (doublet) and $\chi_1(\theta)=1+2\cos\theta$ (adjoint, vector) for $\theta\in[0,4\pi]$ to show the $4\pi$ versus $2\pi$ periodicity.

### N2814

Note: [[12.01.04 The Group SU(3)|12.01.04 The Group SU(3)]]  
Priority: low · Graph: no · Manim: no

Correct matrices, structure constants, $d$-symbol definition and completeness relation, but the worked example concerns SU(2) rather than SU(3).

- [Structure] Example 12.1 checks the SU(2) Casimir; move it to [[12.01.03 The Group SU(2)]] or [[12.01.02 Representations]] and replace it here with the SU(3) check $\sum_a(\lambda^a/2)^2=\frac43\mathbf1$, obtained from the completeness relation by contracting $j=k$.
- [Example] Add one worked structure-constant evaluation, e.g. $f^{458}=-2i\operatorname{Tr}([T^4,T^5]T^8)=\sqrt3/2$, to show how the table is obtained.

### N2815

Note: [[12.02 Yang–Mills Gauge Fields|12.02 Yang–Mills Gauge Fields]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a good three-step reading guide.

- [Links] The first sentence links 12.02.01 and the next paragraph links it again; drop the first sentence, and add [[12.02.05 Self-Interactions of Gauge Bosons]] to the reading list.

### N2816

Note: [[12.02.01 Local Non-Abelian Gauge Invariance|12.02.01 Local Non-Abelian Gauge Invariance]]  
Priority: low · Graph: no · Manim: no

Correct setup of the covariant derivative; the motivational paragraphs are placed before the sentence they motivate.

- [Structure] The paragraph "The connection compares internal vectors at neighboring points..." comes before "The extra term breaks local invariance"; reorder so the problem (the extra $(\partial_\mu U)\psi$ term) is stated before the remedy.
- [Simplify] Show explicitly why the Dirac term fails: $\bar\psi i\gamma^\mu\partial_\mu\psi\to\bar\psi i\gamma^\mu\partial_\mu\psi+\bar\psi i\gamma^\mu U^\dagger(\partial_\mu U)\psi$, which makes the need for $D_\mu$ concrete.

### N2817

Note: [[12.02.02 Transformation of Gauge Fields|12.02.02 Transformation of Gauge Fields]]  
Priority: low · Graph: no · Manim: no

Correct finite and infinitesimal transformations ($\delta A^a=\frac1g\partial\alpha^a+f^{abc}A^b\alpha^c$ checks out), but the derivation of (12.3) is described rather than shown.

- [Simplify] Replace the descriptive derivation paragraph by the short computation $(\partial_\mu-igA'_\mu)U\psi=U(\partial_\mu-igA_\mu)\psi\Rightarrow A'_\mu=UA_\mu U^\dagger-\frac{i}{g}(\partial_\mu U)U^\dagger$ plus the identity $(\partial U)U^\dagger=-U\partial U^\dagger$.
- [Simplify] Show the infinitesimal step $i\alpha^b[T^b,A_\mu]=-f^{abc}\alpha^bA_\mu^cT^a$ that produces the $f^{abc}A^b\alpha^c$ term.

### N2818

Note: [[12.02.03 Field Strength Tensor|12.02.03 Field Strength Tensor]]  
Priority: low · Graph: no · Manim: yes

Correct derivation and component form (12.4), with a useful test-field remark; the geometric meaning of curvature is missing.

- [Intuition] Add the holonomy interpretation: transporting a color vector around a small $\mu\nu$ loop of area $\epsilon^2$ multiplies it by $1+ig\epsilon^2F_{\mu\nu}+\ldots$, which explains why $F$ measures non-commuting covariant derivatives.
- [Manim] Animate parallel transport of an internal (color) arrow around a small square plaquette in the $\mu\nu$ plane, showing that it returns rotated by an amount proportional to $F_{\mu\nu}$, and that under a gauge transformation the rotation is conjugated ($F\to UFU^\dagger$) rather than removed.
- [Simplify] Show the infinitesimal step from $UFU^\dagger$ to $-f^{abc}\alpha^bF^c$ in one line, mirroring 12.02.02.

### N2819

Note: [[12.02.04 The Yang–Mills Lagrangian|12.02.04 The Yang–Mills Lagrangian]]  
Priority: low · Graph: no · Manim: no

Correct expansion (12.6) with matching cubic and quartic coefficients; the cross-term step is not shown.

- [Simplify] Show how the cubic coefficient arises: the cross term $-\frac12 gf^{abc}(\partial_\mu A^a_\nu-\partial_\nu A^a_\mu)A^{b\mu}A^{c\nu}$ collapses to $-gf^{abc}(\partial_\mu A^a_\nu)A^{b\mu}A^{c\nu}$ by antisymmetry of $f^{abc}$ in $b,c$.
- [Structure] The bullet for $\mathcal L_4$ uses $f^{abe}f^{cde}$ while (12.6) uses $f^{abc}f^{ade}$; use the same index pattern to avoid confusion.

### N2820

Note: [[12.02.05 Self-Interactions of Gauge Bosons|12.02.05 Self-Interactions of Gauge Bosons]]  
Priority: low · Graph: no · Manim: no

Three- and four-gluon rules match the standard (Peskin–Schroeder) forms and the field equation is correct; the vertex derivation is omitted.

- [Simplify] Sketch how (12.7) follows from $\mathcal L_3$: Fourier transform ($\partial_\mu\to-ip_\mu$ for incoming momentum), sum over the $3!$ leg assignments, and multiply by $i$; this makes the absence of an explicit $i$ in (12.7) understandable.
- [Example] In Example 12.2, write the component form $\partial_\nu F^{a\mu\nu}+gf^{abc}A^b_\nu F^{c\mu\nu}=0$ and move the gluon term to the right as a color current to make the "self-source" statement explicit.

### N2821

Note: [[12.03 Faddeev–Popov Quantization|12.03 Faddeev–Popov Quantization]]  
Priority: low · Graph: no · Manim: no

Clear section hub explaining why gauge fixing is needed.

- [Links] Add [[12.03.04 The Fully Quantized Lagrangian]], the only section note not linked from the hub.

### N2822

Note: [[12.03.01 Gauge Orbits and Gauge Fixing|12.03.01 Gauge Orbits and Gauge Fixing]]  
Priority: low · Graph: yes · Manim: no

Clear conceptual note with an appropriate Gribov caveat; it lacks a concrete toy model.

- [Example] Add the finite-dimensional toy $\int d^2x\,e^{-S(|x|)}$ with rotations as the "gauge" symmetry: the orbits are circles, the slice $\theta=0$ picks one representative, and the Jacobian $r$ plays the role of the FP determinant; this anticipates 12.03.02.
- [Graph] Plot the toy model: concentric circular orbits in the plane with a radial gauge-fixing line, plus a curved slice that crosses one orbit twice to illustrate a Gribov copy.

### N2823

Note: [[12.03.02 The Faddeev–Popov Prescription|12.03.02 The Faddeev–Popov Prescription]]  
Priority: medium · Graph: no · Manim: no

The source's index-order error is correctly identified and fixed, but the note never completes the prescription (factoring out the gauge volume) and the table is thin.

- [Simplify] Complete the argument after the determinant: insert the identity, use gauge invariance of $S$, $\mathcal DA$ and $\Delta_{\mathrm{FP}}$ to rename $A^\alpha\to A$, factor out $\int\mathcal D\alpha$, and average $\delta(G-\omega)$ with $e^{-i\int\omega^2/2\xi}$ to arrive at $\mathcal L_{\mathrm{gf}}$ of 12.03.04.
- [Structure] Lead with the corrected operator $M^{ab}$ and put the source's version in the callout, rather than displaying the incomplete source formula as the main text.
- [Structure] The table lacks $G^a$, $\alpha^a$, $\Delta_{\mathrm{FP}}$ and $M^{ab}$; add them.

### N2824

Note: [[12.03.03 Ghost Fields|12.03.03 Ghost Fields]]  
Priority: low · Graph: no · Manim: no

Correct ghost Lagrangian and integration by parts (consistent with $D^{ab}c^b=\partial c^a+gf^{abc}A^bc^c$); the link between $M$ and the ghost operator is implicit.

- [Simplify] State explicitly that $M^{ab}=\frac1g\partial^\mu D^{ab}_\mu$ from 12.03.02 is replaced by $-\partial^\mu D^{ab}_\mu$ (the constant factor $-1/g$ goes into the normalization), so the reader connects the determinant identity to (12.10).
- [Links] Link [[12.03.02 The Faddeev–Popov Prescription]] at the first mention of the FP determinant, and [[12.04.02 Vertices]] where the ghost–gluon vertex is named.

### N2825

Note: [[12.03.04 The Fully Quantized Lagrangian|12.03.04 The Fully Quantized Lagrangian]]  
Priority: low · Graph: no · Manim: no

Correct and consistent with 12.03.03 and 12.02.02; brief and clear.

- [Simplify] Add one line deriving $\mathcal L_{\mathrm{gf}}$ from Gaussian averaging over $\delta(\partial A-\omega)$ with weight $e^{-i\int\omega^2/(2\xi)}$, so $\xi$ is not introduced without motivation.

### N2826

Note: [[12.03.05 BRST Symmetry|12.03.05 BRST Symmetry]]  
Priority: medium · Graph: no · Manim: no

Transformations are internally consistent ($s(\mathcal L_{\mathrm{gf}}+\mathcal L_{\mathrm{ghost}})=0$ and $s^2\bar c=-\partial Dc/\xi$ check out), but the note asserts rather than shows invariance.

- [Example] Show the short check that the gauge-fixing and ghost terms cancel: $s\mathcal L_{\mathrm{gf}}=-\frac1\xi(\partial A)\,\partial^\mu D_\mu c$ and $s(-\bar c\,\partial^\mu D_\mu c)=+\frac1\xi(\partial A)\,\partial^\mu D_\mu c$, using $s(D_\mu c)=0$.
- [Intuition] Explain that $s$ acts as a gauge transformation with parameter $\alpha^a=gc^a$ (compare 12.02.02), which makes $sA$ and $sq$ immediately recognizable.
- [Structure] Add $s$, $\xi$ and $T^a$ to the table, and display the Nakanishi–Lautrup version ($s\bar c^a=B^a$, $sB^a=0$) instead of mentioning it only in the callout.

### N2827

Note: [[12.04 Feynman Rules for Yang–Mills Theory|12.04 Feynman Rules for Yang–Mills Theory]]  
Priority: low · Graph: no · Manim: no

Correct reference table consistent with the detailed propagator and vertex notes; all links resolve.

- [Structure] State in the ghost–gluon row that $q$ is the outgoing antighost momentum, since the table is meant to be usable on its own.

### N2828

Note: [[12.04.01 Propagators|12.04.01 Propagators]]  
Priority: low · Graph: no · Manim: no

Correct propagators and a useful gauge check $k^\mu[\ldots]_{\mu\nu}=\xi k_\nu$; one caption does not match its figure.

- [Correctness] The Fig. 12.5 caption says "dashed line", but QFT-12-05-Ghost-Propagator.svg uses stroke-dasharray "1 7" (a dotted line), and 12.04.02 calls ghost legs "dotted"; change the caption to "dotted line".
- [Simplify] Note that Landau gauge $\xi=0$ is reached as the limit $\xi\to0$ of the family (the gauge-fixing term itself is singular there), and give the Landau-gauge propagator $-i\delta^{ab}(g_{\mu\nu}-k_\mu k_\nu/k^2)/k^2$ explicitly.

### N2829

Note: [[12.04.02 Vertices|12.04.02 Vertices]]  
Priority: low · Graph: no · Manim: no

Correct vertex factors, but the table lists an unused symbol and one explanatory sentence is misleading.

- [Correctness] The Physical quantities table lists $\mechanical{k}$ among the vertex momenta, but $k$ never appears in the note; remove it.
- [Intuition] "This asymmetry reflects the antisymmetry of $f^{abc}$ and the derivative acting only on $\bar c$" attributes the asymmetry partly to $f^{abc}$; it comes from the derivative on $\bar c$ in (12.10), so rephrase.
- [Simplify] Derive the ghost vertex from (12.10) in one line (the derivative on the outgoing antighost gives a factor of $q^\mu$, times $i$ from $e^{iS}$, giving $-gf^{abc}q^\mu$).

### N2830

Note: [[12.04.03 Additional Rules|12.04.03 Additional Rules]]  
Priority: low · Graph: no · Manim: no

Short, correct rule list whose correction note and loop-count check already make the scope clear.

- [Simplify] The bullet "Each ghost loop gives a factor $-1$ from Fermi statistics" should say the sign comes from the anticommuting (Grassmann) ghost fields; ghosts are spin-zero, so "Fermi statistics" invites a spin-statistics misreading.
- [Example] Add one worked loop count, e.g. the one-loop gluon self-energy: $I=2$ internal lines, $V=2$ vertices, $L=I-V+1=1$, with the symmetry factor $1/2$ of the gluon bubble, to make the $L=I-V+1$ rule and the "actual graph symmetry" note concrete.

### N2831

Note: [[12.05 QCD as an SU(3) Gauge Theory|12.05 QCD as an SU(3) Gauge Theory]]  
Priority: low · Graph: no · Manim: no

Clear hub that separates color from flavor and links both subnotes; no change needed.

- [Structure] No change needed; at most state $\dim SU(3)=N_c^2-1=8$ explicitly next to "eight adjoint gauge fields" so the count is derived rather than asserted.

### N2832

Note: [[12.05.01 Color Charge and Representations|12.05.01 Color Charge and Representations]]  
Priority: low · Graph: no · Manim: no

Correct and readable overview of quark and gluon color representations and singlet hadrons.

- [Simplify] The color index is written as a superscript in $\signal{q}_\alpha^i$ and as a subscript in $\bar{\signal{q}}_i\gamma^\mu(T^a)_{ij}\signal{A}_\mu^a\signal{q}_j$; use one index position throughout the note.
- [Example] Write the explicit singlet states $\frac{1}{\sqrt3}\delta_{ij}\bar q^i q^j$ for mesons and $\frac{1}{\sqrt6}\varepsilon_{ijk}q^iq^jq^k$ for baryons, so the decompositions $\mathbf3\otimes\bar{\mathbf3}=\mathbf1\oplus\mathbf8$ and the $\varepsilon^{ijk}$ remark become concrete.
- [Intuition] State the dimension count behind $\mathbf3\otimes\mathbf3\otimes\mathbf3=\mathbf1\oplus\mathbf8\oplus\mathbf8\oplus\mathbf{10}$ ($27=1+8+8+10$) and that the singlet is totally antisymmetric in color, which is why baryon wavefunctions must be symmetric in the other labels.

### N2833

Note: [[12.05.02 Color Factors|12.05.02 Color Factors]]  
Priority: low · Graph: no · Manim: no

Correct color-factor summary with two well-checked examples (2/9 and the TᵃTᵇTᵃ identity).

- [Simplify] In Example 12.3 the left side $\sum\lvert(T^a)_{i'i}(T^a)_{j'j}\rvert^2$ hides the sum over $a$ inside the modulus while the right side introduces $b$; write $\sum_{a,b}(T^a)_{i'i}(T^a)_{j'j}(T^b)^*_{i'i}(T^b)^*_{j'j}$ before converting to traces, as done in Exercise 12.8.
- [Intuition] Add one line explaining $C_F=4/3$ via the Fierz identity: contracting $\sum_a(T^a)_{ij}(T^a)_{jl}$ with the displayed completeness relation gives $T_F(N_c-1/N_c)\delta_{il}$, which links the "Useful relations" section directly to the Casimir values.
- [Example] Mention the physical use of $C_F-C_A/2=-1/(2N_c)$ from Example 12.4, e.g. that the color-octet $q\bar q$ potential is repulsive with factor $1/6$ while the singlet is attractive with $C_F=4/3$.

### N2834

Note: [[12.06 Asymptotic Freedom and the QCD Beta Function|12.06 Asymptotic Freedom and the QCD Beta Function]]  
Priority: low · Graph: no · Manim: no

Correct statement of the one-loop beta function and its sign, with the qualitative discussion placed before the formula.

- [Structure] The paragraph "The minus sign before the coefficient matters... coefficient is seven" refers to a formula that appears only later; move it after (12.13) so the reader sees $\beta_0=(11N_c-2N_f)/3$ before its numerical checks.
- [Intuition] Add the one-line consequence $\mathrm d(1/\signal{\alpha}_s)/\mathrm d\ln\energy{\mu}=\beta_0/(2\pi)>0$, which makes "the coupling decreases as the scale increases" immediate and links to 12.06.03.

### N2835

Note: [[12.06.01 Structure of the One-Loop Calculation|12.06.01 Structure of the One-Loop Calculation]]  
Priority: high · Graph: no · Manim: no

The note is dominated by caveats about the source's non-standard polarization normalization, so a reader cannot extract a clean, correct calculation.

- [Correctness] The physical-quantities table lists $\mechanical{\ell}$ ("integration momentum in Fig. 12.8"), but the note text never uses $\ell$; drop it or introduce the loop momentum in the gluon-loop section.
- [Simplify] Rewrite the gauge-sector result in the background-field gauge, where the coefficients are clean and gauge independent: $\signal{\Pi}_{\mathrm{BF}}=\frac{\signal{g}_s^2}{16\pi^2}\left(\frac{11}{3}C_A-\frac43T_FN_f\right)\ln(\energy{\mu}^2/(-\mechanical{k}^2))$, which gives $\beta_0$ directly; then the four source-normalization callouts can shrink to one sentence.
- [Example] Alternatively show the ordinary covariant-gauge numbers explicitly, $Z_3=1+\frac{\signal{g}_s^2}{16\pi^2\varepsilon}\left[\left(\frac{13}{6}-\frac{\xi}{2}\right)C_A-\frac43T_FN_f\right]$ and $Z_1$ from the three-gluon vertex, and combine $Z_g=Z_1Z_3^{-3/2}$ so the $\xi$-dependence visibly cancels.
- [Structure] Group all source-convention remarks (factor-two normalization, tadpole vanishing in dimensional regularization, external-momentum arrows) into one callout at the end, keeping the main text a linear derivation.

### N2836

Note: [[12.06.02 Overall Result|12.06.02 Overall Result]]  
Priority: medium · Graph: no · Manim: no

The final β₀ is correct, but the factor 2 between the source's polarization coefficient and β₀ is introduced without explanation.

- [Simplify] Explain the step $\beta_0=2\left(\frac{11}{6}C_A-\frac23T_FN_f\right)$: state that the source's $\signal{\Pi}$ is normalized to half the conventional coefficient (cf. the $4T_FN_f/3$ remark in 12.06.01), or derive $\beta(\signal{g}_s)=-\frac{\signal{g}_s}{2}\,\mathrm d\signal{\Pi}/\mathrm d\ln\energy{\mu}$ in that convention, so the factor is not magic.
- [Example] Add a small table of $\beta_0$ for $N_f=3,4,5,6$ ($9,\,25/3,\,23/3,\,7$) to show which value applies in which energy range.

### N2837

Note: [[12.06.03 Running Coupling and the Landau Scale|12.06.03 Running Coupling and the Landau Scale]]  
Priority: medium · Graph: yes · Manim: no

The one-loop solution is correct and well explained, but the benchmark combines αs(M_Z) with six active flavors, which is physically inconsistent.

- [Correctness] At $\mechanical{M}_Z=91.2\,\unit{GeV}$ the top quark ($173\,\unit{GeV}$) is not active, so the physical one-loop curve through $\signal{\alpha}_s(\mechanical{M}_Z)=0.118$ uses $N_f=5$, $\beta_0=23/3$, giving $\energy{\Lambda}^{(5)}_{\mathrm{1\,loop}}\approx88\,\unit{MeV}$; state this instead of the $N_f=6$, $\beta_0=7$ point at $x\approx7.61$, and keep $N_f=6$ only as an explicit formal exercise.
- [Graph] Replace or supplement Fig. 12.11 with $\signal{\alpha}_s(\energy{\mu})$ versus $\energy{\mu}$ on a log axis from $1$ to $1000\,\unit{GeV}$, one-loop with $N_f=5$ through $0.118$ at $91.2\,\unit{GeV}$, optionally switching to $N_f=6$ at $m_t=173\,\unit{GeV}$ and $N_f=4$ at $m_b=4.2\,\unit{GeV}$; the current $x=\ln(\energy{\mu}/\energy{\Lambda})$ axis hides the physical energy scale.
- [Intuition] Add a one-line numerical sense of the running, e.g. one-loop $N_f=5$ from $0.118$ gives about $0.17$ at $10\,\unit{GeV}$ and about $0.09$ at $1\,\unit{TeV}$.
- [Simplify] In Example 12.5 relate the QED result to the QCD normalization: one Dirac fermion of unit charge contributes $-\frac43$ to $\beta_0$ in the convention of (12.13), which reproduces $\beta(\electric{\alpha})=+2\electric{\alpha}^2/(3\pi)$.

### N2838

Note: [[12.07 Confinement|12.07 Confinement]]  
Priority: low · Graph: no · Manim: no

Clear hub that distinguishes colored fields in calculations from color-singlet asymptotic states.

- [Structure] No change needed.

### N2839

Note: [[12.07.01 Evidence for Confinement|12.07.01 Evidence for Confinement]]  
Priority: medium · Graph: yes · Manim: yes

Correct physics with good caveats, but the Cornell potential lacks a picture and a string-breaking estimate.

- [Simplify] The potential is labelled "$\mechanical{r}\to\infty$" although the next lines say the Coulomb term dominates at short distance; label it as the Cornell potential valid over $0.1\lesssim r\lesssim1\,\mathrm{fm}$ instead.
- [Graph] Plot $\energy{V}(r)=-\frac{4}{3}\frac{\signal{\alpha}_s\hbar c}{r}+\energy{\sigma}r$ for $r=0.05$–$1.5\,\mathrm{fm}$ with $\signal{\alpha}_s\approx0.3$ and $\energy{\sigma}=0.18\,\unit{GeV^2}\approx0.91\,\unit{GeV/fm}$, plus a dashed flat continuation beyond $r_b\approx1.2\,\mathrm{fm}$ to show schematically where dynamical light quarks break the string.
- [Example] Convert the string tension to intuitive units, $\energy{\sigma}\approx0.18\,\unit{GeV^2}\approx0.9\,\unit{GeV/fm}\approx14$ tonnes-force, and estimate the breaking distance $r_b\approx1.2\,\mathrm{fm}$ from $\energy{\sigma}r_b\approx1$–$1.2\,\unit{GeV}$, the energy needed to create a light quark pair that binds to the static sources.
- [Manim] Animate a quark–antiquark pair being pulled apart: field lines collapse into a flux tube whose length grows, then the tube snaps and a new $q\bar q$ pair forms two mesons; this shows string breaking better than a static plot.

### N2840

Note: [[12.07.02 Theoretical Criteria for Confinement|12.07.02 Theoretical Criteria for Confinement]]  
Priority: low · Graph: yes · Manim: no

Correct and carefully qualified Wilson-loop criterion; the area-law-to-potential step could be shown as one equation.

- [Simplify] Write the derivation in one line: $\langle\signal{W}(R,T)\rangle\xrightarrow{T\to\infty}e^{-\energy{V}(R)T}$, so area law $e^{-\energy{\sigma}RT}$ gives $\energy{V}(R)=\energy{\sigma}R$ and perimeter law gives $\energy{V}(R)\to2\energy{\kappa}$ (constant); the current prose paragraph conveys this less directly.
- [Graph] Plot $\energy{V}(R)=-\ln\langle W\rangle/T$ versus $R$ for the area law (linear, slope $\energy{\sigma}$) and the perimeter law (saturating at $2\energy{\kappa}$) at large $T$, with $R$ in units of $\energy{\sigma}^{-1/2}$.
- [Simplify] The Wilson loop uses $\signal{g}$ while the rest of the chapter uses $\signal{g}_s$; either use $\signal{g}_s$ or state that the criterion is for a general gauge group.

### N2841

Note: [[12.08 Ward–Slavnov–Taylor Identities|12.08 Ward–Slavnov–Taylor Identities]]  
Priority: low · Graph: no · Manim: no

Concise, correct hub on the origin of the WST identities.

- [Structure] No change needed; optionally write the generic identity $\langle\delta_{\mathrm{BRST}}\mathcal O\rangle=0$ as one display so the "integral of this change vanishes" sentence has a formula.

### N2842

Note: [[12.08.01 The WST Identity for the Propagator|12.08.01 The WST Identity for the Propagator]]  
Priority: low · Graph: no · Manim: no

Correct and short; the tensor-decomposition argument is described in words but not shown.

- [Example] Show the two-line decomposition: $\signal{\Pi}_{\mu\nu}=A(k^2)g_{\mu\nu}+B(k^2)k_\mu k_\nu$, and $k^\mu\signal{\Pi}_{\mu\nu}=(A+Bk^2)k_\nu=0$ gives $B=-A/k^2$, i.e. the transverse form; then a Proca term $m^2g_{\mu\nu}$ fails because $k^\mu m^2g_{\mu\nu}=m^2k_\nu\neq0$.

### N2843

Note: [[12.08.02 Relations between Renormalizations|12.08.02 Relations between Renormalizations]]  
Priority: low · Graph: no · Manim: no

The four ratios for Z_g are correct and the leg-counting explanation is helpful, but the gluon field factor changes name mid-note.

- [Simplify] Define $\signal{A}_{\mu,0}^a=Z_A^{1/2}\signal{A}_\mu^a$ directly (or use $Z_3$ in the identity) instead of switching from $Z_3$ to $Z_A$ and explaining it in a callout; also define $Z_q$ by $\signal{q}_0=Z_q^{1/2}\signal{q}$ in the opening display.
- [Example] State the one-loop consequence $Z_g=1-\frac{\signal{g}^2}{16\pi^2\varepsilon}\frac{\beta_0}{2}$ (with $\beta_0=\frac{11}{3}C_A-\frac43T_FN_f$), which shows how these identities feed the beta function of 12.06.

### N2844

Note: [[12.09 Advanced Topics and Outlook|12.09 Advanced Topics and Outlook]]  
Priority: low · Graph: no · Manim: no

Clear hub that states what each advanced tool is for; no change needed.

- [Structure] No change needed.

### N2845

Note: [[12.09.01 The Topological Sector - Instantons|12.09.01 The Topological Sector - Instantons]]  
Priority: medium · Graph: no · Manim: no

Correct with the normalization fix, but the note lacks the instanton action and the tunnelling suppression that give the topic its physical meaning.

- [Simplify] Move the corrected charge $\signal{Q}=\frac{\signal{g}_s^2}{32\pi^2}\int\signal{F}\hat{\signal{F}}$ into the main text and put the source's coupling-absorbed form into the callout, so the primary formula matches the chapter convention.
- [Intuition] Add the Bogomolny bound $S_E\geq\frac{8\pi^2}{\signal{g}_s^2}\lvert\signal{Q}\rvert$, saturated by (anti-)self-dual fields; this explains both why instantons solve the equations and why tunnelling is suppressed by $e^{-8\pi^2/\signal{g}_s^2}$.
- [Example] Add the BPST instanton $A_\mu\propto\frac{x^\nu}{x^2+\rho^2}$ with action density $\propto\rho^4/(x^2+\rho^2)^4$ to show a concrete $\signal{Q}=1$ configuration of size $\rho$.
- [Simplify] Replace "The source discusses ... strong CP problem" with the actual statement: the term $\frac{\bar\theta\,\signal{g}_s^2}{32\pi^2}\signal{F}\tilde{\signal{F}}$ is bounded by the neutron EDM to $\lvert\bar\theta\rvert\lesssim10^{-10}$.

### N2846

Note: [[12.09.02 Large-N_c Expansion|12.09.02 Large-N_c Expansion]]  
Priority: low · Graph: no · Manim: no

Correct and well-motivated description of the 't Hooft limit.

- [Example] Give the standard counting results in one line: planar diagrams scale as $N_c^2$ for vacuum graphs, each handle costs $1/N_c^2$, each quark loop costs $1/N_c$, and meson couplings scale as $1/\sqrt{N_c}$ (narrow, weakly interacting mesons).
- [Intuition] Mention the double-line notation (gluon as a quark–antiquark color line pair) as the device that makes the planar dominance visible.

### N2847

Note: [[12.09.03 Wilson Operators and ’t Hooft Loops|12.09.03 Wilson Operators and ’t Hooft Loops]]  
Priority: low · Graph: no · Manim: no

Correct idealized phase table with appropriate caveats.

- [Simplify] Add the defining 't Hooft commutation relation $\signal{W}(C)\signal{B}(C')=e^{2\pi i n/N}\signal{B}(C')\signal{W}(C)$ for linked loops (linking number $n$), which makes "magnetic disorder operator" and the electric–magnetic duality of the table precise.

### N2848

Note: [[12.10 Exercises|12.10 Exercises]]  
Priority: low · Graph: no · Manim: no

Useful exercise index with a reading guide; no change needed.

- [Structure] No change needed.

### N2849

Note: [[12.10.01 Structure constants of SU(2)|12.10.01 Structure constants of SU(2)]]  
Priority: low · Graph: no · Manim: no

Correct and complete short exercise.

- [Structure] The two prediction/check paragraphs appear before the actual calculation; move them after the matrix product so the solution reads calculation first, checks second.

### N2850

Note: [[12.10.02 Covariance of the covariant derivative|12.10.02 Covariance of the covariant derivative]]  
Priority: low · Graph: no · Manim: no

Correct derivation with a clear cancellation of the derivative terms.

- [Correctness] The physical-quantities table lists $\signal{A}_\mu^a$ and describes the fields as appearing "in the field equations", but this note uses neither the components nor any field equation; list only $\signal{A}_\mu$, $\signal{A}_\mu^U$, $\signal{A}'_\mu$.
- [Simplify] The hint uses $\signal{A}_\mu^U$ and the solution uses $\signal{A}'_\mu$ for the same object; use one symbol.

### N2851

Note: [[12.10.03 Jacobi identity for the structure constants|12.10.03 Jacobi identity for the structure constants]]  
Priority: low · Graph: no · Manim: no

Correct and compact solution.

- [Example] Show the claimed adjoint check explicitly: with $(T^a_{\mathrm{adj}})_{bc}=-if^{abc}$, $[T^a_{\mathrm{adj}},T^b_{\mathrm{adj}}]_{ce}=if^{abd}(T^d_{\mathrm{adj}})_{ce}$ is exactly the derived identity after relabelling; currently it is only asserted.

### N2852

Note: [[12.10.04 Adjoint quadratic Casimir of SU(N)|12.10.04 Adjoint quadratic Casimir of SU(N)]]  
Priority: low · Graph: no · Manim: no

Correct, and the double-commutator route fills the source's gap well.

- [Simplify] Show the one-line derivation of $\sum_aT^aXT^a=\frac12\operatorname{tr}(X)\,1-\frac{X}{2N}$ from the completeness relation (contract with $X_{jk}$), since the final result depends on it.

### N2853

Note: [[12.10.05 Yang–Mills equations of motion|12.10.05 Yang–Mills equations of motion]]  
Priority: low · Graph: no · Manim: no

Correct Euler–Lagrange derivation with good checks.

- [Simplify] The step from $-\signal{g}f^{bac}\signal{F}^{b\mu}{}_\nu\signal{A}^{c\nu}$ to $+\signal{g}f^{abc}\signal{A}_\nu^b\signal{F}^{c\nu\mu}$ is summarized as "reordering"; show the two moves (antisymmetry $F^{\mu\nu}=-F^{\nu\mu}$ and relabelling $b\leftrightarrow c$ with $f^{acb}=-f^{abc}$) explicitly.
- [Intuition] Add the matter-source version $(D_\nu\signal{F}^{\nu\mu})^a=-\signal{g}\bar\psi\gamma^\mu T^a\psi$ (sign per convention) to show that the gluon field itself carries color current, unlike Maxwell.

### N2854

Note: [[12.10.06 Non-Abelian Bianchi identity|12.10.06 Non-Abelian Bianchi identity]]  
Priority: low · Graph: no · Manim: no

Correct operator proof, though the step from the Jacobi identity to the cyclic curvature identity is skipped.

- [Simplify] Insert the intermediate line $[D_\mu,[D_\nu,D_\rho]]=-i\signal{g}[D_\mu,\signal{F}_{\nu\rho}]=-i\signal{g}(D_\mu\signal{F}_{\nu\rho})$ so the cyclic identity follows visibly, and give the component form $(D_\mu F_{\nu\rho})^a=\partial_\mu F^a_{\nu\rho}+gf^{abc}A^b_\mu F^c_{\nu\rho}$.

### N2855

Note: [[12.10.07 Three-gluon vertex with two equal color indices|12.10.07 Three-gluon vertex with two equal color indices]]  
Priority: low · Graph: no · Manim: no

Correct short solution with a useful counterexample (f¹²⁸ = 0).

- [Simplify] Clarify that $f^{aac}$ here means a fixed component with no sum over $a$; with the summation convention it would read as a contraction.

### N2856

Note: [[12.10.08 Annihilation color factor for quark–antiquark scattering|12.10.08 Annihilation color factor for quark–antiquark scattering]]  
Priority: low · Graph: no · Manim: no

Correct 2/9 result with a justified mismatch note; the coherent-versus-incoherent explanation is repeated several times.

- [Simplify] Merge the two paragraphs after the "Color-factor mismatch" note with the earlier callout; the coherent internal sum versus incoherent external average is explained three times.
- [Example] Add the companion $t$-channel and interference color factors for identical flavors ($2/9$, $2/9$, and $-2/27$), which is what a combined channel structure would need and shows why $16/9$ cannot arise.

### N2857

Note: [[12.10.09 Fermion screening and gluon antiscreening|12.10.09 Fermion screening and gluon antiscreening]]  
Priority: low · Graph: no · Manim: no

Correct qualitative and quantitative comparison of screening and antiscreening.

- [Intuition] Add the Nielsen–Hughes decomposition: each massless helicity state of spin $s$ contributes to $\beta_0$ in proportion to $(-1)^{2s}[(2s)^2-1/3]$, so a gluon gives $4-1/3=11/3$ (times $C_A$; paramagnetic spin term $4$ beats diamagnetic $-1/3$), a Weyl fermion $-(1-1/3)=-2/3$ (times $T_F$, hence $-\frac43T_F$ per Dirac flavor); this makes the "paramagnetic analogy" quantitative.

### N2858

Note: [[12.10.10 Formal infrared scale in QCD|12.10.10 Formal infrared scale in QCD]]  
Priority: low · Graph: yes · Manim: no

Numbers are correct for the stated fixed six-flavor exercise, and the caveats are explicit.

- [Example] Add the physically appropriate five-flavor one-loop value for comparison: $\beta_0=23/3$ gives $\ln(\mechanical{M}_Z/\energy{\Lambda})=6.945$ and $\energy{\Lambda}^{(5)}\approx88\,\unit{MeV}$, $\energy{\mu}^*\approx200\,\unit{MeV}$, which closes much of the gap to the $210\,\unit{MeV}$ benchmark.
- [Graph] Plot one-loop $\signal{\alpha}_s(\energy{\mu})$ for $N_f=6$ and $N_f=5$ through $0.118$ at $91.2\,\unit{GeV}$, $\energy{\mu}$ from $0.05$ to $100\,\unit{GeV}$ (log axis), with horizontal line $\signal{\alpha}_s=1$ and the poles at $45$ and $88\,\unit{MeV}$ marked.

### N2859

Note: [[12.10.11 Gluon propagator in covariant gauges|12.10.11 Gluon propagator in covariant gauges]]  
Priority: low · Graph: no · Manim: no

Correct propagators and a clear correction of the source's gauge-independence claim.

- [Example] Give the actual counterexample for part (c): at one loop in pure Yang–Mills the divergent part of the scalar is $\propto C_A\left(\frac{13}{6}-\frac{\xi}{2}\right)$, which visibly depends on $\xi$; this is stronger than the abstract argument.

### N2860

Note: [[12.10.12 Symmetry of the four-gluon vertex|12.10.12 Symmetry of the four-gluon vertex]]  
Priority: low · Graph: no · Manim: no

Correct vertex and symmetry argument, with the long historical note somewhat out of place.

- [Structure] Move the historical note (Weyl, Yang–Mills, Faddeev–Popov, BRST, Nobel 2004) to the chapter exercise index or chapter introduction; it is unrelated to the vertex symmetry task.
- [Simplify] The exercise asks for the simultaneous exchange of both pairs; add one sentence stating that invariance under each exchange separately implies invariance under their composition.
