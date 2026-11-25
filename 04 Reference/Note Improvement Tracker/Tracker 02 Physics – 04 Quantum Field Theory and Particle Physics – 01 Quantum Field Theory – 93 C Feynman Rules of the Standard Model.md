---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/93 C Feynman Rules of the Standard Model"
---

> [!TLDR]
> This note tracks the review of the 21 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/93 C Feynman Rules of the Standard Model`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (2 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2995|N2995]] C.06 Coupling Constants and Numerical Values: The table claims PDG 2024, but $\signal{\alpha}_s(\mechanical{m}_Z)=0.1179$, $\sin^2\hat{\signal{\theta}}_W(\mechanical{m}_Z)=0.2312$ and $\mechanical{m}_\tau=1.77686\,\unit{GeV}$ are PDG 2022 numbers. PDG 2024 gives $0.1180(9)$, $0.23129(4)$ (rounds to $0.2313$) and $1.77693\,\unit{GeV}$. Either update them (and the "$0.2232$ vs $0.2312$" sentence) or relabel the table as the source's 2022-era inputs. Also check against the PDG 2026 edition, which should be out by now. **Fixed:** Added a "PDG 2024 values" callout (0.1180(9), 0.23129(4), 1.77693 GeV, alpha^-1(mZ)=127.930(8)) and kept the source table for reproducibility; PDG 2026 edition not checked (no access), callout tells reader to check the latest edition
- [[#N2995|N2995]] C.06 Coupling Constants and Numerical Values: The row $\electric{\alpha}^{-1}(\mechanical{m}_Z)=127.95$ is the PDG 2022 $\overline{\text{MS}}$ value $127.951$. The PDG 2024 electroweak review (Sec. 10.2) gives $\hat\alpha^{(5)}(\mechanical{m}_Z)^{-1}=127.930\pm0.008$. The comment column should also name the $\overline{\text{MS}}$ scheme, because the on-shell $\alpha(\mechanical{m}_Z)^{-1}\approx128.9$ differs by about one unit. **Fixed:** Comment column now names the MS-bar scheme and gives on-shell value about 128.9; PDG 2024 value 127.930(8) given in the new callout

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2975 | [[C.01 General Conventions\|C.01 General Conventions]] | Analyzed | low | no | no | [[#N2975\|View]] |
| N2976 | [[C.02 Propagators\|C.02 Propagators]] | Analyzed | low | no | no | [[#N2976\|View]] |
| N2977 | [[C.02.01 Bosonic Propagators\|C.02.01 Bosonic Propagators]] | Analyzed | low | no | no | [[#N2977\|View]] |
| N2978 | [[C.02.02 Faddeev–Popov Ghost Propagators\|C.02.02 Faddeev–Popov Ghost Propagators]] | Analyzed | low | no | no | [[#N2978\|View]] |
| N2979 | [[C.02.03 Goldstone Boson Propagators\|C.02.03 Goldstone Boson Propagators]] | Analyzed | low | no | no | [[#N2979\|View]] |
| N2980 | [[C.02.04 Fermionic Propagators\|C.02.04 Fermionic Propagators]] | Analyzed | low | no | no | [[#N2980\|View]] |
| N2981 | [[C.03 Electromagnetic Interaction Vertices\|C.03 Electromagnetic Interaction Vertices]] | Analyzed | low | no | no | [[#N2981\|View]] |
| N2982 | [[C.04 Electroweak Interaction Vertices\|C.04 Electroweak Interaction Vertices]] | Analyzed | low | no | no | [[#N2982\|View]] |
| N2983 | [[C.04.01 Charged Currents (W–Fermion–Fermion Vertex)\|C.04.01 Charged Currents (W–Fermion–Fermion Vertex)]] | Analyzed | low | no | no | [[#N2983\|View]] |
| N2984 | [[C.04.02 Neutral Current (Z–Fermion–Fermion Vertex)\|C.04.02 Neutral Current (Z–Fermion–Fermion Vertex)]] | Analyzed | low | yes | no | [[#N2984\|View]] |
| N2985 | [[C.04.03 Higgs–Fermion–Fermion Vertex\|C.04.03 Higgs–Fermion–Fermion Vertex]] | Analyzed | low | yes | no | [[#N2985\|View]] |
| N2986 | [[C.04.04 Triple Gauge Vertices (TGC)\|C.04.04 Triple Gauge Vertices (TGC)]] | Analyzed | medium | no | no | [[#N2986\|View]] |
| N2987 | [[C.04.05 Quartic Gauge Vertices (QGC)\|C.04.05 Quartic Gauge Vertices (QGC)]] | Analyzed | low | no | no | [[#N2987\|View]] |
| N2988 | [[C.04.06 Higgs–Gauge-Boson Vertices\|C.04.06 Higgs–Gauge-Boson Vertices]] | Analyzed | low | no | no | [[#N2988\|View]] |
| N2989 | [[C.04.07 Higgs Field Self-Interactions\|C.04.07 Higgs Field Self-Interactions]] | Analyzed | low | yes | no | [[#N2989\|View]] |
| N2990 | [[C.05 QCD Vertices\|C.05 QCD Vertices]] | Analyzed | low | no | no | [[#N2990\|View]] |
| N2991 | [[C.05.01 Quark–Gluon Vertex\|C.05.01 Quark–Gluon Vertex]] | Analyzed | low | no | no | [[#N2991\|View]] |
| N2992 | [[C.05.02 Three-Gluon Vertex\|C.05.02 Three-Gluon Vertex]] | Analyzed | low | no | no | [[#N2992\|View]] |
| N2993 | [[C.05.03 Four-Gluon Vertex\|C.05.03 Four-Gluon Vertex]] | Analyzed | low | no | no | [[#N2993\|View]] |
| N2994 | [[C.05.04 Ghost–Gluon Vertex\|C.05.04 Ghost–Gluon Vertex]] | Analyzed | low | no | no | [[#N2994\|View]] |
| N2995 | [[C.06 Coupling Constants and Numerical Values\|C.06 Coupling Constants and Numerical Values]] | Analyzed | medium | yes | no | [[#N2995\|View]] |

## Suggestions

### N2975

Note: [[C.01 General Conventions|C.01 General Conventions]]  
Priority: low · Graph: no · Manim: no

A clear and correct convention page; the momentum, symmetry-factor, loop-sign and factor-of-i rules are right, but the sign convention that fixes all vertex signs is never written down explicitly.

- [Structure] State the covariant-derivative convention that all later vertices assume, e.g. $D_\mu=\partial_\mu-i\electric{e}\electric{Q}A_\mu-i\signal{g}T^aW^a_\mu-i\signal{g}'YB_\mu-i\signal{g}_sT^aG^a_\mu$ (equivalently Romão–Silva $\eta=-1$). This matches (C.13), (C.14)–(C.16), (C.33), (C.34) and the corrected TGC signs, and matches $D_\mu=\partial_\mu+i\electric{e}A_\mu$ with $-i\electric{e}\gamma^\mu$ for the electron in 08.01.02/08.02. One line here would make the C.04.04 convention note self-explanatory.
- [Links] The sentence that the source values agree with PDG 2024 should point to C.06 and warn that several C.06 entries are PDG 2022 values (see the C.06 block). Otherwise the reader gets a misleading provenance statement.
- [Example] Add a short worked use of the rules, e.g. tree-level $e^+e^-\to\mu^+\mu^-$ via photon: all-incoming momenta, two vertices (C.13), one propagator (C.2) at $\xi=1$, the outgoing-momentum sign flip, and $S=1$. This illustrates the "How to use" paragraph.

### N2976

Note: [[C.02 Propagators|C.02 Propagators]]  
Priority: low · Graph: no · Manim: no

A short, correct hub that explains the role of propagators and points to the four subnotes.

- [Structure] No change needed beyond optionally adding a one-line summary table (line type, numerator, pole position at general $\xi$) so the reader can see at a glance that the vector, Goldstone and ghost poles at $\xi\mechanical{m}^2$ belong together.

### N2977

Note: [[C.02.01 Bosonic Propagators|C.02.01 Bosonic Propagators]]  
Priority: low · Graph: no · Manim: no

Correct Rξ propagators (C.1)–(C.5) with useful gauge and dimension checks; the prose is dense but accurate.

- [Intuition] In "Gauge and dimension checks", add the unitary limit explicitly: $\xi\to\infty$ in (C.3) gives $-i[g^{\mu\nu}-\mechanical{p}^\mu\mechanical{p}^\nu/\mechanical{m}_W^2]/(\mechanical{p}^2-\mechanical{m}_W^2)$. This shows the bad high-energy behavior of the longitudinal term that motivates the Rξ gauge and is listed in C.01 but never shown.
- [Simplify] Split the vector propagator into transverse and longitudinal projectors: $-i\left[\frac{g^{\mu\nu}-p^\mu p^\nu/p^2}{p^2-m^2}+\frac{\xi\,p^\mu p^\nu/p^2}{p^2-\xi m^2}\right]$. This makes the two poles (physical $m^2$ and gauge-dependent $\xi m^2$) and the link to the Goldstone/ghost poles visible in one line.
- [Links] Link the gauge-dependent pole at $\xi\mechanical{m}_{W,Z}^2$ to [[C.02.03 Goldstone Boson Propagators]] and [[C.02.02 Faddeev–Popov Ghost Propagators]], where the same poles appear.

### N2978

Note: [[C.02.02 Faddeev–Popov Ghost Propagators|C.02.02 Faddeev–Popov Ghost Propagators]]  
Priority: low · Graph: no · Manim: no

Correct ghost propagators (C.6)–(C.9) with an accurate correction of the source's photon-ghost color indices.

- [Intuition] Add one sentence on why the ghost and Goldstone masses equal $\sqrt{\xi}\mechanical{m}_{W,Z}$: both come from the same 't Hooft gauge-fixing function $\partial^\mu W_\mu-\xi\mechanical{m}_W\phi$, whose BRST variation gives the ghost mass term. This turns the stated coincidence into a reason.
- [Links] Link the ghost–gluon interaction in [[C.05.04 Ghost–Gluon Vertex]] next to (C.7), and state that the electroweak ghost vertices are not listed in this appendix (C.01 already warns about this).

### N2979

Note: [[C.02.03 Goldstone Boson Propagators|C.02.03 Goldstone Boson Propagators]]  
Priority: low · Graph: no · Manim: no

Correct and carefully caveated; the gauge dependence of the Goldstone poles is well explained.

- [Intuition] Mention the Goldstone-boson equivalence theorem in one sentence: at energies $E\gg\mechanical{m}_W$ the amplitude for a longitudinal W or Z equals, up to a phase, the amplitude with the corresponding Goldstone. This is the main practical reason to keep these fields.
- [Structure] The note says that Goldstone vertices are needed but none are listed in this appendix. Add a pointer to where they can be found (e.g. Romão–Silva section 5) so that the propagators are usable.

### N2980

Note: [[C.02.04 Fermionic Propagators|C.02.04 Fermionic Propagators]]  
Priority: low · Graph: no · Manim: no

Correct Dirac propagator (C.12) with sound remarks on momentum routing and the Majorana case.

- [Simplify] (C.12) mixes $+i\varepsilon$ and $+i0$ for the same prescription. Use one notation, consistent with C.02.
- [Example] Show the explicit check $(\not{\mechanical{p}}-\mechanical{m}_f)(\not{\mechanical{p}}+\mechanical{m}_f)=\mechanical{p}^2-\mechanical{m}_f^2$ as a one-line equation instead of only describing it in prose.

### N2981

Note: [[C.03 Electromagnetic Interaction Vertices|C.03 Electromagnetic Interaction Vertices]]  
Priority: low · Graph: no · Manim: no

The vertex (C.13) and charge table are correct and consistent with Chapter 8 ($-i\electric{e}\gamma^\mu$ for the electron).

- [Structure] State the Lagrangian term behind the rule, $\mathcal{L}\supset+\electric{e}\electric{Q}_f\bar f\gamma^\mu fA_\mu$ (from $D_\mu=\partial_\mu-i\electric{e}\electric{Q}_fA_\mu$). This anchors the sign convention that the TGC correction in C.04.04 depends on.
- [Simplify] Show the Ward check as an equation: $\bar u(\mechanical{p}')\,\mechanical{q}_\mu\gamma^\mu u(\mechanical{p})=0$ for $\mechanical{q}=\mechanical{p}'-\mechanical{p}$, instead of only describing it.

### N2982

Note: [[C.04 Electroweak Interaction Vertices|C.04 Electroweak Interaction Vertices]]  
Priority: low · Graph: no · Manim: no

A correct hub with the right tree-level relations $\signal{g}=\electric{e}/\sin\signal{\theta}_W$, $\signal{g}'=\electric{e}/\cos\signal{\theta}_W$, $\signal{v}=2\mechanical{m}_W/\signal{g}$.

- [Links] The reading list omits [[C.04.03 Higgs–Fermion–Fermion Vertex]], [[C.04.06 Higgs–Gauge-Boson Vertices]] and [[C.04.07 Higgs Field Self-Interactions]]; add them instead of the generic "The Higgs vertices in this section" sentence.
- [Intuition] Add the field rotation $Z=\cos\signal{\theta}_W W^3-\sin\signal{\theta}_W B$, $A=\sin\signal{\theta}_W W^3+\cos\signal{\theta}_W B$ and $W^\pm=(W^1\mp iW^2)/\sqrt2$. Every coefficient in C.04.01–C.04.05 follows from these three lines, and the sign of the TGC correction depends on them.

### N2983

Note: [[C.04.01 Charged Currents (W–Fermion–Fermion Vertex)|C.04.01 Charged Currents (W–Fermion–Fermion Vertex)]]  
Priority: low · Graph: no · Manim: no

The vertices (C.14) and (C.15) are correct and consistent with (C.13); the PMNS statement is too vague to use.

- [Simplify] Replace "include the PMNS matrix with the conjugation required" by the explicit rule: with $\nu_\ell=\sum_i\signal{U}_{\ell i}\nu_i$, the vertex $W^+_\mu\bar\nu_i\ell$ carries $\signal{U}_{\ell i}^*$ and $W^-_\mu\bar\ell\nu_i$ carries $\signal{U}_{\ell i}$. This parallels the CKM statement for quarks.
- [Intuition] Add the low-energy check $\signal{G}_F/\sqrt2=\signal{g}^2/(8\mechanical{m}_W^2)$: two vertices (C.14) and the W propagator at $\mechanical{p}^2\ll\mechanical{m}_W^2$ give the Fermi interaction. This connects the vertex to the $\signal{G}_F$ entry in C.06.

### N2984

Note: [[C.04.02 Neutral Current (Z–Fermion–Fermion Vertex)|C.04.02 Neutral Current (Z–Fermion–Fermion Vertex)]]  
Priority: low · Graph: yes · Manim: no

The Z vertex (C.16)–(C.17) and its chiral decomposition are correct; a small coupling table and a graph would make the numbers tangible.

- [Example] Add a table of $\signal{g}_V^f$ and $\signal{g}_A^f$ for $\nu,e,u,d$ at $\sin^2\signal{\theta}_W=0.2312$: $\signal{g}_V^\nu=0.5$, $\signal{g}_V^e\approx-0.038$, $\signal{g}_V^u\approx0.192$, $\signal{g}_V^d\approx-0.346$. The small electron vector coupling explains why the Z-pole forward–backward asymmetries are small.
- [Graph] Plot $\signal{g}_V^f(\sin^2\signal{\theta}_W)=T_3^f-2\electric{Q}_f\sin^2\signal{\theta}_W$ for $\nu,e,u,d$ (four straight lines), with $\sin^2\signal{\theta}_W\in[0,0.5]$ on the x-axis and a vertical marker at 0.2312.

### N2985

Note: [[C.04.03 Higgs–Fermion–Fermion Vertex|C.04.03 Higgs–Fermion–Fermion Vertex]]  
Priority: low · Graph: yes · Manim: no

The Yukawa vertex (C.18) is correct, and so is its equivalent form $\signal{g}\mechanical{m}_f/(2\mechanical{m}_W)$; numbers would show the hierarchy.

- [Example] Add numerical values of $\mechanical{m}_f/\signal{v}$ from C.06: top $\approx0.70$, bottom $\approx0.017$, tau $\approx0.0072$, muon $\approx4.3\times10^{-4}$, electron $\approx2.1\times10^{-6}$. They show why Higgs production goes through top loops and why $h\to b\bar b$ dominates.
- [Graph] Show a log-scale plot of $\mechanical{m}_f/\signal{v}$ (y-axis, $10^{-6}$ to 1) against fermion mass $\mechanical{m}_f$ (x-axis, log), with the straight line of slope 1 and the SM fermions marked as points.

### N2986

Note: [[C.04.04 Triple Gauge Vertices (TGC)|C.04.04 Triple Gauge Vertices (TGC)]]  
Priority: medium · Graph: no · Manim: no

The convention correction is right (I re-derived $-i\electric{e}\Gamma$ and $-i\signal{g}\cos\signal{\theta}_W\Gamma$ from the SU(2) cubic term with $D=\partial-i\signal{g}T^aW^a$), but the sign-incompatible source equations remain the numbered rules, which invites misuse.

- [Structure] Make the corrected coefficients $-i\electric{e}\Gamma^{\mu\nu\rho}$ and $-i\signal{g}\cos\signal{\theta}_W\Gamma^{\mu\nu\rho}$ the numbered equations (C.19) and (C.20). Move the source's plus-sign forms into the note as "source form, opposite convention". At present, a reader who copies the numbered equation gets the wrong relative sign with (C.13)–(C.16).
- [Intuition] Explain the sign in one line: with leg coefficients $C^1_\pm=1/\sqrt2$, $C^2_\pm=\pm i/\sqrt2$, $C^3=1$, one has $\sum\epsilon^{abc}C^a_+C^b_-C^c_3=-i$. The SU(2) analogue of the three-gluon rule (C.34), $\signal{g}\epsilon^{abc}\Gamma$, therefore becomes $-i\signal{g}\Gamma$ for $W^+W^-W^3$, and $W^3=\cos\signal{\theta}_WZ+\sin\signal{\theta}_WA$. This is clearer than the component check with $\Gamma^{001}$.
- [Links] Link [[C.05.02 Three-Gluon Vertex]] as the same Yang–Mills tensor with $f^{abc}$, so that the reader sees the two rules are one structure.
- [Simplify] The last paragraph's numerical component check ($\Gamma^{001}=1\,\unit{GeV}$) is hard to follow without the expanded Lagrangian. Either show the cubic Lagrangian term $-\signal{g}\epsilon^{abc}(\partial_\mu W^a_\nu)W^{b\mu}W^{c\nu}$ it is checked against or drop the paragraph in favor of the derivation above.

### N2987

Note: [[C.04.05 Quartic Gauge Vertices (QGC)|C.04.05 Quartic Gauge Vertices (QGC)]]  
Priority: low · Graph: no · Manim: no

The quartic rules (C.23)–(C.26), including the corrected $+i\signal{g}^2$ for $W^+W^-W^+W^-$, are correct; I verified (C.26) from $\mathcal{L}_{4W}=\tfrac{\signal{g}^2}{2}[(W^+\cdot W^+)(W^-\cdot W^-)-(W^+\cdot W^-)^2]$.

- [Simplify] Display the charged quartic Lagrangian $\tfrac{\signal{g}^2}{2}[(W^+\cdot W^+)(W^-\cdot W^-)-(W^+\cdot W^-)^2]$ in the correction note. Differentiating it in two lines gives (C.26) and makes the sign correction verifiable instead of asserted.
- [Intuition] Note that the quartic signs depend only on $\signal{g}^2$ and are therefore independent of the covariant-derivative sign convention that changes the TGC signs in C.04.04. Readers comparing tables need this point.

### N2988

Note: [[C.04.06 Higgs–Gauge-Boson Vertices|C.04.06 Higgs–Gauge-Boson Vertices]]  
Priority: low · Graph: no · Manim: no

The vertices (C.27)–(C.30) and the explanation of the identical-field factors are correct.

- [Simplify] Show the source term $\left(\mechanical{m}_W^2W^+_\mu W^{-\mu}+\tfrac12\mechanical{m}_Z^2Z_\mu Z^\mu\right)(1+\signal{h}/\signal{v})^2$ explicitly. All four rules then follow from it in one line each, which replaces the prose paragraph on factors of two.
- [Example] Give the numbers $\signal{g}\mechanical{m}_W\approx52.5\,\unit{GeV}$ and $\signal{g}\mechanical{m}_Z/\cos\signal{\theta}_W\approx67.5\,\unit{GeV}$ (tree level, C.06 inputs), and the thresholds $2\mechanical{m}_W\approx160.7\,\unit{GeV}$ and $2\mechanical{m}_Z\approx182.4\,\unit{GeV}$ against $\mechanical{m}_h=125.2\,\unit{GeV}$, to make the off-shell statement concrete.

### N2989

Note: [[C.04.07 Higgs Field Self-Interactions|C.04.07 Higgs Field Self-Interactions]]  
Priority: low · Graph: yes · Manim: no

The rules (C.31)–(C.32) and the reconstruction of the cubic and quartic coefficients are correct.

- [Example] Add the numbers: $\signal{\lambda}=\mechanical{m}_h^2/(2\signal{v}^2)\approx0.129$, $|hhh|=3\mechanical{m}_h^2/\signal{v}\approx191\,\unit{GeV}$, $|hhhh|=3\mechanical{m}_h^2/\signal{v}^2\approx0.78$. Mention that the trilinear coupling is probed via $hh$ production.
- [Simplify] Write the expanded potential explicitly, $\energy{V}=\tfrac12\mechanical{m}_h^2\signal{h}^2+\frac{\mechanical{m}_h^2}{2\signal{v}}\signal{h}^3+\frac{\mechanical{m}_h^2}{8\signal{v}^2}\signal{h}^4+\text{const}$, instead of describing the coefficients in prose.
- [Graph] Plot $\energy{V}(\signal{h})-\energy{V}(0)$ along the vacuum direction for $\signal{h}/\signal{v}\in[-2.2,1]$ together with its quadratic approximation $\tfrac12\mechanical{m}_h^2\signal{h}^2$. The asymmetry shows the cubic term and the second minimum at $\signal{h}=-2\signal{v}$, which is the symmetric image of the vacuum.

### N2990

Note: [[C.05 QCD Vertices|C.05 QCD Vertices]]  
Priority: low · Graph: no · Manim: no

A correct hub for the SU(3) conventions; one sentence points to the wrong place.

- [Structure] "The trace normalization below fixes how the strong coupling is defined" refers to a normalization that is displayed above that sentence. Change it to "above", and state the implied covariant derivative $D_\mu=\partial_\mu-i\signal{g}_sT^aG^a_\mu$. That is the convention for which (C.33), (C.34) and (C.36) have the signs shown (Peskin–Schroeder convention).

### N2991

Note: [[C.05.01 Quark–Gluon Vertex|C.05.01 Quark–Gluon Vertex]]  
Priority: low · Graph: no · Manim: no

The vertex (C.33) is correct and consistent in sign with (C.13) and (C.34).

- [Example] Add the color-factor check $\sum_a(T^aT^a)_{ij}=C_F\delta_{ij}$ with $C_F=4/3$. It is the first thing one computes with two of these vertices on one line, and it can link to [[B.06.02 SU(3) - Gell-Mann Matrices and Casimir Operators]].

### N2992

Note: [[C.05.02 Three-Gluon Vertex|C.05.02 Three-Gluon Vertex]]  
Priority: low · Graph: no · Manim: no

The rule (C.34) is correct (it matches the direct derivation from $-\signal{g}_sf^{abc}(\partial_\mu G^a_\nu)G^{b\mu}G^{c\nu}$ with $D=\partial-i\signal{g}_sT^aG^a$), and the Bose-symmetry check is well explained.

- [Intuition] Explain why the rule has no explicit factor $i$: the factor $i$ from the vertex and the factor $-i$ from each derivative acting on an incoming plane wave cancel. Readers otherwise suspect a missing $i$ next to the other rules.
- [Links] Point to [[C.04.04 Triple Gauge Vertices (TGC)]] as the electroweak analogue with the same tensor (C.21).

### N2993

Note: [[C.05.03 Four-Gluon Vertex|C.05.03 Four-Gluon Vertex]]  
Priority: low · Graph: no · Manim: no

The rule (C.35) is correct (Peskin–Schroeder form) and clearly explained.

- [Simplify] No change needed; optionally show the source term $-\tfrac14\signal{g}_s^2f^{abe}f^{cde}G^a_\mu G^b_\nu G^{c\mu}G^{d\nu}$ so that the three color pairings can be traced back to it.

### N2994

Note: [[C.05.04 Ghost–Gluon Vertex|C.05.04 Ghost–Gluon Vertex]]  
Priority: low · Graph: no · Manim: no

The rule (C.36) is correct; with outgoing ghost $b$, gluon $c$ and incoming ghost $a$, $f^{abc}=f^{bca}$ reproduces Peskin's $-\signal{g}f^{abc}p^\mu$ ordering (out, gluon, in).

- [Simplify] Show the ghost Lagrangian $\bar c^a(-\partial^\mu D_\mu^{ac})c^c$ with $D_\mu^{ac}=\partial_\mu\delta^{ac}+\signal{g}_sf^{abc}G^b_\mu$. One line explains why only the antighost (outgoing) momentum appears, which the second paragraph now explains only in words.

### N2995

Note: [[C.06 Coupling Constants and Numerical Values|C.06 Coupling Constants and Numerical Values]]  
Priority: medium · Graph: yes · Manim: no

The scheme caveats and the relations (C.37)–(C.38) are good, but several table entries labelled "Review of Particle Physics 2024" are actually PDG 2022 values.

- [Correctness] The table claims PDG 2024, but $\signal{\alpha}_s(\mechanical{m}_Z)=0.1179$, $\sin^2\hat{\signal{\theta}}_W(\mechanical{m}_Z)=0.2312$ and $\mechanical{m}_\tau=1.77686\,\unit{GeV}$ are PDG 2022 numbers. PDG 2024 gives $0.1180(9)$, $0.23129(4)$ (rounds to $0.2313$) and $1.77693\,\unit{GeV}$. Either update them (and the "$0.2232$ vs $0.2312$" sentence) or relabel the table as the source's 2022-era inputs. Also check against the PDG 2026 edition, which should be out by now.
- [Correctness] The row $\electric{\alpha}^{-1}(\mechanical{m}_Z)=127.95$ is the PDG 2022 $\overline{\text{MS}}$ value $127.951$. The PDG 2024 electroweak review (Sec. 10.2) gives $\hat\alpha^{(5)}(\mechanical{m}_Z)^{-1}=127.930\pm0.008$. The comment column should also name the $\overline{\text{MS}}$ scheme, because the on-shell $\alpha(\mechanical{m}_Z)^{-1}\approx128.9$ differs by about one unit.
- [Graph] Plot the one-loop running $\signal{\alpha}_s(Q)=\signal{\alpha}_s(\mechanical{m}_Z)/[1+\tfrac{\beta_0}{4\pi}\signal{\alpha}_s(\mechanical{m}_Z)\ln(Q^2/\mechanical{m}_Z^2)]$ with $\beta_0=23/3$ ($n_f=5$), for $Q\in[5,1000]\,\unit{GeV}$ on a log axis, and optionally $\electric{\alpha}^{-1}(Q)$ on a second axis. This makes the "use couplings at their stated scale" warning concrete.
- [Example] Add the derived tree-level couplings as a worked check: $\signal{g}=2\mechanical{m}_W/\signal{v}\approx0.653$, $\electric{e}=\sqrt{4\pi\electric{\alpha}(\mechanical{m}_Z)}\approx0.313$, $\signal{g}_s=\sqrt{4\pi\signal{\alpha}_s}\approx1.22$, $\signal{\lambda}\approx0.129$. Show that $\electric{e}/\sqrt{\sin^2\hat{\signal{\theta}}_W}\approx0.652$ agrees with $\signal{g}$ only to scheme accuracy.
