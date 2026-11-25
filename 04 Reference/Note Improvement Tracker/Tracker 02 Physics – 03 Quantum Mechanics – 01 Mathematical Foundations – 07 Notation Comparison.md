---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/07 Notation Comparison"
---

> [!TLDR]
> This note tracks the review of the 7 notes in `02 Physics/03 Quantum Mechanics/01 Mathematical Foundations/07 Notation Comparison`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1990 | [[00 Notation Comparison\|00 Notation Comparison]] | Analyzed | low | no | no | [[#N1990\|View]] |
| N1991 | [[01 The Inner Product\|01 The Inner Product]] | Analyzed | low | no | no | [[#N1991\|View]] |
| N1992 | [[02 The Adjoint of an Operator\|02 The Adjoint of an Operator]] | Analyzed | low | no | no | [[#N1992\|View]] |
| N1993 | [[03 The Fourier Transform\|03 The Fourier Transform]] | Analyzed | low | no | no | [[#N1993\|View]] |
| N1994 | [[04 Index Conventions\|04 Index Conventions]] | Analyzed | low | no | no | [[#N1994\|View]] |
| N1995 | [[05 Dirac Notation versus Function Notation\|05 Dirac Notation versus Function Notation]] | Analyzed | low | no | no | [[#N1995\|View]] |
| N1996 | [[06 Recurring Symbols\|06 Recurring Symbols]] | Analyzed | low | no | no | [[#N1996\|View]] |

## Suggestions

### N1990

Note: [[00 Notation Comparison|00 Notation Comparison]]  
Priority: low · Graph: no · Manim: no

Clear hub with a useful translation route; links resolve.

- [Structure] No change needed.

### N1991

Note: [[01 The Inner Product|01 The Inner Product]]  
Priority: low · Graph: no · Manim: no

Correct comparison; the worked values ($i$ versus $-i$, coefficient $i/\sqrt2$ in both conventions) check out.

- [Structure] Put the answer to "Try the translation" in a collapsed callout so readers can attempt it first; currently the answer is given in the same sentence as the question.

### N1992

Note: [[02 The Adjoint of an Operator|02 The Adjoint of an Operator]]  
Priority: low · Graph: no · Manim: no

Correct and careful; the explicit adjoint and Gram-matrix example $N=\begin{pmatrix}0&0\\1/2&0\end{pmatrix}$ are verified.

- [Example] In the Gram-matrix check, show the numbers: with $u=e_1$, $v=e_2$, $u^\dagger GMv=1$ and $(Nu)^\dagger Gv=(1/2)\cdot2=1$, while using $M^\dagger$ would give 2; this completes the "check the basis dependence" exercise for the reader.

### N1993

Note: [[03 The Fourier Transform|03 The Fourier Transform]]  
Priority: low · Graph: no · Manim: no

Correct convention table and conversion $\hat f_{\rm sym}(k)=\hat f_{\rm cyc}(k/2\pi)/\sqrt{2\pi}$; well checked.

- [Example] Add the physics momentum convention as a fourth row, $\tilde\psi(p)=(2\pi\hbar)^{-1/2}\int\psi(x)e^{-ipx/\hbar}dx$, since it is the one quantum-mechanics readers most often need to translate to.
- [Structure] The physical-quantities table lists only $t$ and $\nu$; add a sentence that $x$, $k$ and $\xi$ are generic variables without fixed units here, so the table does not look incomplete.

### N1994

Note: [[04 Index Conventions|04 Index Conventions]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the examples $Av=(2,3)^T$ and second column of $AB=(4,6)^T$ check out.

- [Structure] No change needed.

### N1995

Note: [[05 Dirac Notation versus Function Notation|05 Dirac Notation versus Function Notation]]  
Priority: low · Graph: no · Manim: no

Correct and careful dictionary with an appropriate distribution caveat.

- [Example] Add the momentum rows $\langle x|p\rangle=(2\pi\hbar)^{-1/2}e^{ipx/\hbar}$ and $\langle x|\hat p|\psi\rangle=-i\hbar\,\partial_x\psi(x)$, the most common translations readers need after the position rows.

### N1996

Note: [[06 Recurring Symbols|06 Recurring Symbols]]  
Priority: low · Graph: no · Manim: no

Correct symbol dictionary with helpful type and normalization checks.

- [Structure] No change needed; optionally add $\hat H$, $\hat x$, $\hat p$ and $\langle\hat A\rangle$, which recur throughout the book but are missing from the table.
