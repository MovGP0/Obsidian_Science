---
title: "Note Improvement Tracker – 04 Reference/02 Units and Constants"
---

> [!TLDR]
> This note tracks the review of the 1 notes in `04 Reference/02 Units and Constants`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (4 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3850|N3850]] SI Base Units: The unit relations leave out the defining numerical values: "$1\,\mathrm m=c\cdot1\,\mathrm s$" gives 299 792 458 m; it should be $1\,\mathrm m=\frac{c}{299\,792\,458}\cdot1\,\mathrm s$. Similarly $1\,\mathrm{kg}=\frac{h}{6.626\,070\,15\times10^{-34}}\,\mathrm{m^{-2}\,s}$, $1\,\mathrm A=\frac{e}{1.602\,176\,634\times10^{-19}}\,\mathrm{s^{-1}}$, $1\,\mathrm K=\frac{1.380\,649\times10^{-23}}{k}\,\mathrm J$; the note's "$\frac{h}{c^2}\cdot1\,\mathrm{Hz}$", "$e\cdot1\,\mathrm{Hz}$" and "$\frac hk\cdot1\,\mathrm{Hz}$" are off by those factors. **Fixed:** m, kg, A, K rows now use c/299 792 458, h/6.626 070 15e-34, e/1.602 176 634e-19, 1.380 649e-23/k with correct units (dimension-checked).
- [[#N3850|N3850]] SI Base Units: "$1\mathrm{mol}=N_A\cdot1\,\mathrm{Hz}$" is dimensionally wrong (mol vs Hz/mol); it should be $1\,\mathrm{mol}=\frac{6.022\,140\,76\times10^{23}}{N_A}$. **Fixed:** Now 1 mol = 6.022 140 76e23 / N_A.
- [[#N3850|N3850]] SI Base Units: "$ℏ=\frac{2\pi}{h}$" is inverted; it is $\hbar=\frac{h}{2\pi}$. **Fixed:** Now ℏ = h/(2π); also replaced the Unicode minus in the exponent of h.
- [[#N3850|N3850]] SI Base Units: The table omits the candela (7th base unit) and the defining constants $\Delta\nu_{\mathrm{Cs}}=9\,192\,631\,770\,\mathrm{Hz}$ (needed for the empty "s" row), $e=1.602\,176\,634\times10^{-19}\,\mathrm C$ (used for the ampere but not listed) and $K_{\mathrm{cd}}=683\,\mathrm{lm/W}$; also fix "Avogrado" → Avogadro. **Fixed:** Added cd row and s derivation via ΔνCs; added ΔνCs, e and Kcd constant rows; fixed Avogadro spelling.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3850 | [[SI Base Units\|SI Base Units]] | Analyzed | high | no | no | [[#N3850\|View]] |

## Suggestions

### N3850

Note: [[SI Base Units|SI Base Units]]  
Priority: high · Graph: no · Manim: no

A short table in which almost every "Derivation" entry and one constant are wrong by a large numerical factor or in dimension.

- [Correctness] The unit relations leave out the defining numerical values: "$1\,\mathrm m=c\cdot1\,\mathrm s$" gives 299 792 458 m; it should be $1\,\mathrm m=\frac{c}{299\,792\,458}\cdot1\,\mathrm s$. Similarly $1\,\mathrm{kg}=\frac{h}{6.626\,070\,15\times10^{-34}}\,\mathrm{m^{-2}\,s}$, $1\,\mathrm A=\frac{e}{1.602\,176\,634\times10^{-19}}\,\mathrm{s^{-1}}$, $1\,\mathrm K=\frac{1.380\,649\times10^{-23}}{k}\,\mathrm J$; the note's "$\frac{h}{c^2}\cdot1\,\mathrm{Hz}$", "$e\cdot1\,\mathrm{Hz}$" and "$\frac hk\cdot1\,\mathrm{Hz}$" are off by those factors.
- [Correctness] "$1\mathrm{mol}=N_A\cdot1\,\mathrm{Hz}$" is dimensionally wrong (mol vs Hz/mol); it should be $1\,\mathrm{mol}=\frac{6.022\,140\,76\times10^{23}}{N_A}$.
- [Correctness] "$ℏ=\frac{2\pi}{h}$" is inverted; it is $\hbar=\frac{h}{2\pi}$.
- [Correctness] The table omits the candela (7th base unit) and the defining constants $\Delta\nu_{\mathrm{Cs}}=9\,192\,631\,770\,\mathrm{Hz}$ (needed for the empty "s" row), $e=1.602\,176\,634\times10^{-19}\,\mathrm C$ (used for the ampere but not listed) and $K_{\mathrm{cd}}=683\,\mathrm{lm/W}$; also fix "Avogrado" → Avogadro.
