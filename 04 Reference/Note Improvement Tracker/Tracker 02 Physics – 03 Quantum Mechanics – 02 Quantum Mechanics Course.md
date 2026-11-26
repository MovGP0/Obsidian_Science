---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course"
---

> [!TLDR]
> This note tracks the review of the 4 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 2 possible errors or notation conflicts. 2 of them are verified (1 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2251|N2251]] Quantum rotations, unitarity, and course review calculations: The physical-quantities table is copied from another note: it describes $x$, $p$ as "along the oscillator axis" and lists $t_0$, $\Delta t$, $E_0$, $F_0$, $x_0$ (shifted equilibrium), $E$ (field times charge, in N) and $A$, $B$ (Einstein coefficients), none of which match their use here ($A$, $B$ are states in Example 4.1, $x_0$ is a WKB integration limit, and $F=-U'(a)$ is the force itself, not its negative); rebuild it with $\psi$, $U$, $p(x)$, $C$, $F$, $a$, $b$, $U(t)$, $H$, $L$, $\lambda_i$, $\alpha_i$. **Fixed:** Rebuilt the table with hbar, m, x/x_0, psi, E, U, p(x), C coefficients, a/b, F = -U'(a) as the force, z/y/rho, t/epsilon, U(t), H, L/lambda_i, alpha_i
- [[#N2251|N2251]] Quantum rotations, unitarity, and course review calculations: Semantic macros: the complex-plane helper variables $\rho$, $\varphi$, $y$ and the short time step $\epsilon$ are wrapped in the mechanical macro, while $\hbar$ is left uncolored throughout; use $\mechanical{\hbar}$ as in the rest of the course and keep contour coordinates uncolored. **Partly:** Uncolored the contour angle varphi; kept rho and y (lengths) and epsilon (a time step) mechanical, and kept hbar plain because the sibling QM II notes from the same source use plain hbar

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2000 | [[00.00 Quantum Mechanics\|00.00 Quantum Mechanics]] | Analyzed | low | no | no | [[#N2000\|View]] |
| N2001 | [[02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/00.01 Introduction\|00.01 Introduction]] | Analyzed | low | no | no | [[#N2001\|View]] |
| N2250 | [[24.00 Glossary\|24.00 Glossary]] | Analyzed | low | no | no | [[#N2250\|View]] |
| N2251 | [[Quantum rotations, unitarity, and course review calculations\|Quantum rotations, unitarity, and course review calculations]] | Analyzed | high | yes | yes | [[#N2251\|View]] |

## Suggestions

### N2000

Note: [[00.00 Quantum Mechanics|00.00 Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Clean course index; every chapter and section link resolves.

- [Links] No change needed. Optionally link the four Kabasares worked-problem notes (chapters 1 and 2), which are currently reachable only from 01.02 and the reference collection.

### N2001

Note: [[02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/00.01 Introduction|00.01 Introduction]]  
Priority: low · Graph: no · Manim: no

Clear prose overview of the course with no formulas to check.

- [Links] Link each Part bullet to its first chapter note (01.00, 04.00, 09.00, 13.00) so the overview works as a second entry point.
- [Example] Make "one part in a billion" concrete by naming the comparison, for example the electron anomalous magnetic moment, so the reader knows what was tested.

### N2250

Note: [[24.00 Glossary|24.00 Glossary]]  
Priority: low · Graph: no · Manim: no

Accurate definitions, but entries are not in alphabetical order (apparently the order of a translated source) and none link to the defining notes.

- [Structure] Sort the entries alphabetically (Angular momentum, Blackbody, Bloch sphere, Born probability, Boson, Bra, ...); the current order starting with "Probability amplitude, Spherical harmonics, Eigenstate" makes lookup hard.
- [Links] Link each term to its defining note, for example Collapse to \[\[02.04 Wave Function Collapse\]\] and the golden-rule and uncertainty entries to the reference notes in folder 22.

### N2251

Note: [[Quantum rotations, unitarity, and course review calculations|Quantum rotations, unitarity, and course review calculations]]  
Priority: high · Graph: yes · Manim: yes

The WKB connection and unitarity derivations are correct, but the title promises rotations that never appear, the text keeps referring to the handwriting, and the physical-quantities table belongs to a different note.

- [Correctness] The physical-quantities table is copied from another note: it describes $x$, $p$ as "along the oscillator axis" and lists $t_0$, $\Delta t$, $E_0$, $F_0$, $x_0$ (shifted equilibrium), $E$ (field times charge, in N) and $A$, $B$ (Einstein coefficients), none of which match their use here ($A$, $B$ are states in Example 4.1, $x_0$ is a WKB integration limit, and $F=-U'(a)$ is the force itself, not its negative); rebuild it with $\psi$, $U$, $p(x)$, $C$, $F$, $a$, $b$, $U(t)$, $H$, $L$, $\lambda_i$, $\alpha_i$.
- [Correctness] Semantic macros: the complex-plane helper variables $\rho$, $\varphi$, $y$ and the short time step $\epsilon$ are wrapped in the mechanical macro, while $\hbar$ is left uncolored throughout; use $\mechanical{\hbar}$ as in the rest of the course and keep contour coordinates uncolored.
- [Structure] The title mentions quantum rotations, but the note covers WKB connection formulas, unitarity, and expectation values; rename it (for example "WKB connection formulas, unitarity, and expectation values") and fix the heading levels (H2 followed directly by H5).
- [Simplify] Remove the transcription remarks ("as noted in the margin", "The final handwritten line suppresses the $\hbar$", "The box in the handwriting assigns both properties to $H$") and state the results directly.
- [Graph] WKB section: plot the exact Airy solution $\mathrm{Ai}(-s)$ against its two WKB asymptotes $\pi^{-1/2}s^{-1/4}\cos(\tfrac23s^{3/2}-\pi/4)$ for $s>0$ and $\tfrac12\pi^{-1/2}\lvert s\rvert^{-1/4}e^{-\frac23\lvert s\rvert^{3/2}}$ for $s<0$, over $s\in[-4,10]$, to show where the connection formula holds and where it fails near the turning point.
- [Manim] Continuation around the turning point: animate $z=a+\rho e^{i\varphi}$ moving along the upper semicircle while the phase of $(z-a)^{-1/4}$ rotates from 0 to $-\pi/4$, making the origin of the $\pi/4$ visible.
