---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics"
---

> [!TLDR]
> This note tracks the review of the 3 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (1 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1713|N1713]] Statistical populations and quantum counting problems: Symbol clash: $\energy{E}_1,\energy{E}_2$ are hydrogen levels 10.2 eV apart in the Maxwell–Boltzmann example, but later $\energy{E}_1=h^2/(8\mechanical{m}L^2)$ is the infinite-well ground energy. Rename one of them (for example $\energy{E}_{\mathrm{box}}$). **Fixed:** Renamed the infinite-well ground energy to \energy{E}_{\mathrm{box}} in all four lines of the infinite-well section.
- [[#N1713|N1713]] Statistical populations and quantum counting problems: Physical-quantities table: $\thermal{T}$ "Determines the blackbody spectrum" and $\energy{E}_n$ "relative to ionization" do not match this note (there is no blackbody, and here $E_n=E_1n^2$ are box levels). It omits $\mechanical{m}$, $N$, $g(E)$, $n(E)$ and $f$, and $k_B$ and $h$ appear without the semantic macros used elsewhere in the vault. **Partly:** Corrected T and E_n descriptions, added E_1/E_2, E_box, m, N, g(E), n(E), f and k_B rows; did not add macros to k_B and h because they are uncolored throughout the body and a note-wide recoloring exceeds a narrow fix.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1183 | [[00.00 Statistical Mechanics\|00.00 Statistical Mechanics]] | Analyzed | low | no | no | [[#N1183\|View]] |
| N1184 | [[02 Physics/02 Thermodynamics and Statistical Mechanics/00.01 Introduction\|00.01 Introduction]] | Analyzed | low | no | no | [[#N1184\|View]] |
| N1713 | [[Statistical populations and quantum counting problems\|Statistical populations and quantum counting problems]] | Analyzed | medium | yes | no | [[#N1713\|View]] |

## Suggestions

### N1183

Note: [[00.00 Statistical Mechanics|00.00 Statistical Mechanics]]  
Priority: low · Graph: no · Manim: no

Clear course hub with a useful reading-route section; all links resolve, but a few chapter introductions are missing and two links are ambiguous.

- [Links] Chapters 10, 11, 12, 13 and appendices A, B, C have no "Chapter introduction" entry although the notes exist; add \[\[10.00 Phase Transitions\]\], \[\[11.00 Ising Model\]\], \[\[12.00 Landau Theory and the Renormalization Group\]\], \[\[13.00 Exercise Solutions\]\], \[\[A.00 Gaussian Integrals and the Gamma Function\]\], \[\[B.00 Saddle-Point Method\]\] and \[\[C.00 Elements of Combinatorics and Probability\]\] to match Chapters 1–9.
- [Links] \[\[02.10 Summary\]\] and \[\[10.12 Summary\]\] are ambiguous basenames (identically named notes exist in 04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory); path-qualify them, e.g. \[\[02 Foundations of Statistical Mechanics/02.10 Summary|2.10 Summary\]\], so Obsidian cannot resolve them to the QFT notes.
- [Structure] Chapter 5 lists "5.8 Exercises" as a numbered section while other chapters use unnumbered "Exercises" (xx.99); either keep it as is but note the inconsistency, or align the naming.

### N1184

Note: [[02 Physics/02 Thermodynamics and Statistical Mechanics/00.01 Introduction|00.01 Introduction]]  
Priority: low · Graph: no · Manim: no

Clear motivating introduction with a concrete canonical-ensemble example; the last paragraph is generic book-blurb text.

- [Simplify] The closing paragraph ("Many figures help the reader visualize the concepts") is source-preface boilerplate; either drop it or replace it with a short reading-path list linking \[\[01.00 Review of Thermodynamics\]\] and \[\[02.00 Foundations of Statistical Mechanics\]\].
- [Links] Add a link to \[\[00.00 Statistical Mechanics\]\] (the contents hub) so the introduction is not a dead end in the vault graph.

### N1713

Note: [[Statistical populations and quantum counting problems|Statistical populations and quantum counting problems]]  
Priority: medium · Graph: yes · Manim: no

The physics checks out (hydrogen ratios $1.4\times10^{-175}$, $2.1\times10^{-10}$ and $3.55$; $E_F$; $n_{\mathrm{FD}}(E)$; $\langle p_x\rangle=0$), but a reused symbol, a wrong quantity table and transcription-style asides make it hard to follow.

- [Correctness] Symbol clash: $\energy{E}_1,\energy{E}_2$ are hydrogen levels 10.2 eV apart in the Maxwell–Boltzmann example, but later $\energy{E}_1=h^2/(8\mechanical{m}L^2)$ is the infinite-well ground energy. Rename one of them (for example $\energy{E}_{\mathrm{box}}$).
- [Correctness] Physical-quantities table: $\thermal{T}$ "Determines the blackbody spectrum" and $\energy{E}_n$ "relative to ionization" do not match this note (there is no blackbody, and here $E_n=E_1n^2$ are box levels). It omits $\mechanical{m}$, $N$, $g(E)$, $n(E)$ and $f$, and $k_B$ and $h$ appear without the semantic macros used elsewhere in the vault.
- [Simplify] After the distribution table, "These correct the signs written in this table" is confusing because the table already shows the corrected forms. Say "The handwritten table had these signs reversed; the forms above are correct."
- [Links] The link text "the section on Maxwell–Boltzmann example — Lecture 35, slide 10" is garbled; use \[\[Nuclear and quantum statistics review calculations#Maxwell–Boltzmann population example|Homework 13.1\]\].
- [Graph] Plot $f_{\mathrm{MB}}$, $f_{\mathrm{BE}}$ and $f_{\mathrm{FD}}$ against $(E-\mu)/k_BT\in[-3,5]$. In "Quantum statistics", add $f_{\mathrm{FD}}(E/E_F)$ for $k_BT/E_F=0,0.02,0.1$ to show the step smoothing.
