---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/01 Mathematical Foundations"
---

> [!TLDR]
> This note tracks the review of the 4 notes in `02 Physics/03 Quantum Mechanics/01 Mathematical Foundations`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1714|N1714]] 00 Introduction: The part list says Part II = Chapters 4–7, Part III = 8–10, Part IV = 11–12, Part V = 13–14, but the vault folders are 04–08 (Linear Algebra incl. "06 Special Matrices" and "08 Hilbert Space"), 09–11, 12–13, 14–15; update the ranges (and add special matrices to the Part II description) to match the folders. **Fixed:** Set Parts II–V to Chapters 4–8, 9–11, 12–13, 14–15, added special matrices to Part II, and reworded the closing note to say the ranges follow the table of contents and folders
- [[#N1998|N1998]] 09 Glossary of Terms: Symbol clash in the physical-quantities table and entries: $a$ is simultaneously the potential offset $\energy{a}$ (Ehrenfest entry, unit J), the translation distance $\mechanical{a}$ (Momentum entry, unit m), and an observable eigenvalue $a$ (Projector entry); rename the potential coefficients (e.g. $V_0+F_1x+\tfrac12\kappa x^2$) or the translation (e.g. $\mechanical{s}$) so each symbol has one meaning in the note. **Fixed:** Renamed the translation distance to \mechanical{s} in the Momentum entry and table; potential offset and eigenvalue a now each have one meaning per entry
- [[#N1998|N1998]] 09 Glossary of Terms: In "Pure and mixed states", the displayed mixture $\rho=\sum_ip_i|\psi_i\rangle\langle\psi_i|$ is stated to satisfy $\operatorname{Tr}(\rho^2)<1$ unconditionally, but a mixture of identical states (or a single $p_i=1$) is pure; add "with at least two distinct states and nonzero weights" or reuse the Density matrix entry's "genuinely mixed" qualifier. **Fixed:** Added that the strict inequality needs nonzero weights on at least two physically different states, otherwise the mixture is pure
- [[#N1999|N1999]] Functions of operators, continuous bases, and Gaussian packets: The physical-quantities table lists $R$, $T$ (reflection and transmission coefficients) and $a_0$ (Bohr radius), none of which appear in this note; $a_0$ here is the identity coefficient in the Pauli expansion $X=a_0I+\boldsymbol\sigma\cdot\mathbf a$. Replace the table with the quantities actually used ($x$, $k$, $a$, $\Delta$, $\psi$, $A$) or drop it for the purely mathematical parts. **Fixed:** Replaced the table with rows for x, k, a, Delta, Delta X, psi and A as used in the note
- [[#N1999|N1999]] Functions of operators, continuous bases, and Gaussian packets: Symbol clashes: $X$ denotes both the position operator and the arbitrary $2\times2$ matrix in "Sakurai 1.2"; $\Delta$ denotes both the averaging-interval length in the plane-wave limit and the Gaussian width parameter (while $\Delta X$ is the uncertainty); $L$ is both the interval length $[0,L]$ and the lower limit of the averaging integral. Rename the Sakurai matrix (e.g. $M$) and the averaging length (e.g. $\Lambda$). **Fixed:** Renamed the Sakurai matrix to M, the averaging length to Lambda, and the averaging lower limit to x_0

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1714 | [[00 Introduction\|00 Introduction]] | Analyzed | medium | no | no | [[#N1714\|View]] |
| N1997 | [[08 Exercise Solutions\|08 Exercise Solutions]] | Analyzed | low | no | no | [[#N1997\|View]] |
| N1998 | [[09 Glossary of Terms\|09 Glossary of Terms]] | Analyzed | low | no | no | [[#N1998\|View]] |
| N1999 | [[Functions of operators, continuous bases, and Gaussian packets\|Functions of operators, continuous bases, and Gaussian packets]] | Analyzed | high | yes | no | [[#N1999\|View]] |

## Suggestions

### N1714

Note: [[00 Introduction|00 Introduction]]  
Priority: medium · Graph: no · Manim: no

Clear motivation and a useful reading route, but the part-to-chapter mapping in the body contradicts the vault's folder structure and a source-meta callout is left in the note.

- [Correctness] The part list says Part II = Chapters 4–7, Part III = 8–10, Part IV = 11–12, Part V = 13–14, but the vault folders are 04–08 (Linear Algebra incl. "06 Special Matrices" and "08 Hilbert Space"), 09–11, 12–13, 14–15; update the ranges (and add special matrices to the Part II description) to match the folders.
- [Structure] Delete the closing "[!note] The chapter ranges above follow the supplied introduction..." callout once the ranges are fixed; it is transcription meta-commentary, not content.
- [Links] The route omits \[\[00 Special Matrices\]\] between \[\[00 Matrices and Linear Operators\]\] and \[\[00 Eigenvalues and Eigenvectors\]\]; add it so every Part II chapter is reachable from the introduction.
- [Simplify] The first paragraph repeats "collection of rules/methods" and "consistent framework" three times; cut it to the gap (missing Hilbert-space/operator structure) and the aim in about half the length.

### N1997

Note: [[08 Exercise Solutions|08 Exercise Solutions]]  
Priority: low · Graph: no · Manim: no

A clear hub; all 15 chapter links resolve and the stated exercise counts match the exercise folders.

- [Structure] No change needed.

### N1998

Note: [[09 Glossary of Terms|09 Glossary of Terms]]  
Priority: low · Graph: no · Manim: no

A correct, well-qualified glossary; all chapter links resolve uniquely, with one letter reused for unrelated quantities.

- [Correctness] Symbol clash in the physical-quantities table and entries: $a$ is simultaneously the potential offset $\energy{a}$ (Ehrenfest entry, unit J), the translation distance $\mechanical{a}$ (Momentum entry, unit m), and an observable eigenvalue $a$ (Projector entry); rename the potential coefficients (e.g. $V_0+F_1x+\tfrac12\kappa x^2$) or the translation (e.g. $\mechanical{s}$) so each symbol has one meaning in the note.
- [Correctness] In "Pure and mixed states", the displayed mixture $\rho=\sum_ip_i|\psi_i\rangle\langle\psi_i|$ is stated to satisfy $\operatorname{Tr}(\rho^2)<1$ unconditionally, but a mixture of identical states (or a single $p_i=1$) is pure; add "with at least two distinct states and nonzero weights" or reuse the Density matrix entry's "genuinely mixed" qualifier.
- [Links] Expectation value and Uncertainty entries could also link the course note on expectation value and standard deviation (02 Postulates of Quantum Mechanics/02.06), connecting the math book glossary to the physics course.

### N1999

Note: [[Functions of operators, continuous bases, and Gaussian packets|Functions of operators, continuous bases, and Gaussian packets]]  
Priority: high · Graph: yes · Manim: no

Mathematically sound transcription of lecture notes (all checked derivations, eigenvectors and Gaussian moments are correct), but out of order, flat in structure, with a wrong physical-quantities table and an incomplete Gaussian example.

- [Correctness] The physical-quantities table lists $R$, $T$ (reflection and transmission coefficients) and $a_0$ (Bohr radius), none of which appear in this note; $a_0$ here is the identity coefficient in the Pauli expansion $X=a_0I+\boldsymbol\sigma\cdot\mathbf a$. Replace the table with the quantities actually used ($x$, $k$, $a$, $\Delta$, $\psi$, $A$) or drop it for the purely mathematical parts.
- [Correctness] Symbol clashes: $X$ denotes both the position operator and the arbitrary $2\times2$ matrix in "Sakurai 1.2"; $\Delta$ denotes both the averaging-interval length in the plane-wave limit and the Gaussian width parameter (while $\Delta X$ is the uncertainty); $L$ is both the interval length $[0,L]$ and the lower limit of the averaging integral. Rename the Sakurai matrix (e.g. $M$) and the averaging length (e.g. $\Lambda$).
- [Structure] Sections run §1.9, §1.10, then §1.8 (eigenvalue problem), Sakurai 1.2 and Shankar 4.2.4, all as level-5 headings; reorder to §1.8 → §1.9 → §1.10 → Gaussian packet, use H2/H3 headings, and consider moving the Sakurai Pauli expansion to the Pauli formula notes.
- [Example] The TLDR promises Gaussian wave-packet uncertainty and Fig. 64 shows the momentum amplitude, but the note stops at $\Delta X=\Delta/\sqrt2$; add $\psi(p)=(\Delta^2/(\pi\hbar^2))^{1/4}e^{-ipa/\hbar}e^{-p^2\Delta^2/(2\hbar^2)}$, $\langle P\rangle=0$, $\Delta P=\hbar/(\sqrt2\Delta)$ and the product $\Delta X\Delta P=\hbar/2$.
- [Intuition] In "Eigenvalues and normalized eigenvectors", note that because $\Omega$ is non-Hermitian its eigenvectors $(1,0,0)$, $(-5,-2,1)/\sqrt{30}$, $(1,0,3)/\sqrt{10}$ are not orthogonal (e.g. $\langle V_1|V_3\rangle=1/\sqrt{10}$), contrasting directly with the preceding Hermitian diagonalization theorem; also replace "using Mathematica" with the one-line hand calculation.
- [Graph] Plot $|\psi(x)|^2$ and $|\psi(p)|^2$ for the Gaussian packet with $a=2$ and $\Delta=0.5,1,2$ (units $\hbar=1$) side by side, marking $\pm\Delta X$ and $\pm\Delta P$, to replace or complement the scanned Fig. 64 and show the reciprocal widths.
