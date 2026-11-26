---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/22 Essential Formula Reference"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/22 Essential Formula Reference`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2232 | [[22.00 Essential Formula Reference\|22.00 Essential Formula Reference]] | Analyzed | low | no | no | [[#N2232\|View]] |
| N2233 | [[22.01 Postulates and Probabilities\|22.01 Postulates and Probabilities]] | Analyzed | low | no | no | [[#N2233\|View]] |
| N2234 | [[22.02 Canonical Operators\|22.02 Canonical Operators]] | Analyzed | low | no | no | [[#N2234\|View]] |
| N2235 | [[22.03 Uncertainty\|22.03 Uncertainty]] | Analyzed | low | no | no | [[#N2235\|View]] |
| N2236 | [[22.04 Time Evolution\|22.04 Time Evolution]] | Analyzed | low | no | no | [[#N2236\|View]] |
| N2237 | [[22.05 One-Dimensional Systems\|22.05 One-Dimensional Systems]] | Analyzed | low | no | no | [[#N2237\|View]] |
| N2238 | [[22.06 Harmonic Oscillator\|22.06 Harmonic Oscillator]] | Analyzed | low | no | no | [[#N2238\|View]] |
| N2239 | [[22.07 Angular Momentum and Spin\|22.07 Angular Momentum and Spin]] | Analyzed | low | no | no | [[#N2239\|View]] |
| N2240 | [[22.08 Hydrogen Atom\|22.08 Hydrogen Atom]] | Analyzed | low | no | no | [[#N2240\|View]] |
| N2241 | [[22.09 Perturbation Theory and Scattering\|22.09 Perturbation Theory and Scattering]] | Analyzed | low | no | no | [[#N2241\|View]] |
| N2242 | [[22.10 Useful Identities and Integrals\|22.10 Useful Identities and Integrals]] | Analyzed | low | no | no | [[#N2242\|View]] |
| N2243 | [[22.11 Baker–Campbell–Hausdorff Formulas\|22.11 Baker–Campbell–Hausdorff Formulas]] | Analyzed | low | no | no | [[#N2243\|View]] |

## Suggestions

### N2232

Note: [[22.00 Essential Formula Reference|22.00 Essential Formula Reference]]  
Priority: low · Graph: no · Manim: no

A hub with a TLDR and one sentence but no links to the eleven reference notes.

- [Links] Add a list of links to \[\[22.01 Postulates and Probabilities\]\] through \[\[22.11 Baker–Campbell–Hausdorff Formulas\]\], as the 23.00 hub does for its notes.

### N2233

Note: [[22.01 Postulates and Probabilities|22.01 Postulates and Probabilities]]  
Priority: low · Graph: no · Manim: no

Correct, compact formula table with a working link to the postulates chapter.

- [Simplify] Add the degenerate Born rule $P(a)=\langle\psi\rvert\hat P_a\lvert\psi\rangle$ next to the nondegenerate row, since the collapse row already uses $\hat P_a$.

### N2234

Note: [[22.02 Canonical Operators|22.02 Canonical Operators]]  
Priority: low · Graph: no · Manim: no

Correct and complete for its purpose; no change needed beyond an optional link.

- [Links] Add a link to the chapter note that derives the position and momentum representations so readers can find the derivation.

### N2235

Note: [[22.03 Uncertainty|22.03 Uncertainty]]  
Priority: low · Graph: no · Manim: no

Correct formula reference with the Mandelstam–Tamm time properly defined; no change needed.

- [Links] Optionally link the chapter note that derives the Robertson and Mandelstam–Tamm relations.

### N2236

Note: [[22.04 Time Evolution|22.04 Time Evolution]]  
Priority: low · Graph: no · Manim: no

Correct and concise formula table.

- [Simplify] Add the Heisenberg equation $\mathrm d\hat A_H/\mathrm dt=(i/\hbar)[\hat H,\hat A_H]+(\partial_t\hat A)_H$, from which the listed Ehrenfest equations follow.

### N2237

Note: [[22.05 One-Dimensional Systems|22.05 One-Dimensional Systems]]  
Priority: low · Graph: no · Manim: no

Correct formula table (well levels, thick-barrier and WKB transmission, delta bound state, Bohr–Sommerfeld).

- [Simplify] Define $\kappa$ for the rectangular barrier explicitly ($\kappa=\sqrt{2m(V_0-E)}/\hbar$, the constant case of the line below the table) and state "thick" as $\kappa a\gg1$.

### N2238

Note: [[22.06 Harmonic Oscillator|22.06 Harmonic Oscillator]]  
Priority: low · Graph: no · Manim: no

Correct oscillator formula table.

- [Simplify] Give the normalization of $\psi_n(x)$, $(2^nn!)^{-1/2}(\pi x_0^2)^{-1/4}$, instead of $\propto$, and wrap $\psi_n$ in the signal macro as the other notes do.

### N2239

Note: [[22.07 Angular Momentum and Spin|22.07 Angular Momentum and Spin]]  
Priority: low · Graph: no · Manim: no

Correct formula table; the spin rotation is stated only for spin 1/2 without saying so.

- [Simplify] Label the rotation row "Spin-1/2 rotation" and add the general form $e^{-i\alpha\hat{\mathbf n}\cdot\hat{\mathbf J}/\hbar}$, so the $\cos(\alpha/2)$ formula is not applied to other spins.

### N2240

Note: [[22.08 Hydrogen Atom|22.08 Hydrogen Atom]]  
Priority: low · Graph: no · Manim: no

Correct hydrogen formula table (radial averages and selection rules verified).

- [Simplify] Note that $\mathrm{Ry}=13.606$ eV and $a_0$ with $m_e$ are infinite-nuclear-mass values, and that the reduced mass gives the 0.05 % correction used in spectroscopy.

### N2241

Note: [[22.09 Perturbation Theory and Scattering|22.09 Perturbation Theory and Scattering]]  
Priority: low · Graph: no · Manim: no

Correct formula table; the Rabi row and Born amplitude leave their conventions implicit.

- [Simplify] State the Rabi row's initial condition (population in the lower level at $t=0$) and the Born row's convention $\widetilde V(\mathbf q)=\int e^{-i\mathbf q\cdot\mathbf r}V(\mathbf r)\,\mathrm d^3r$ with $\mathbf q=\mathbf k'-\mathbf k$.

### N2242

Note: [[22.10 Useful Identities and Integrals|22.10 Useful Identities and Integrals]]  
Priority: low · Graph: no · Manim: no

Correct list of standard identities.

- [Simplify] Add the conditions $\operatorname{Re}a>0$ and integer $n\ge0$ to the exponential-moment row, as the Gaussian row already states its condition.

### N2243

Note: [[22.11 Baker–Campbell–Hausdorff Formulas|22.11 Baker–Campbell–Hausdorff Formulas]]  
Priority: low · Graph: no · Manim: no

Both formulas are correct and the note is complete for a reference card.

- [Example] Add one application, for example $e^{\alpha\hat a^\dagger-\alpha^*\hat a}=e^{-\lvert\alpha\rvert^2/2}e^{\alpha\hat a^\dagger}e^{-\alpha^*\hat a}$ for the displacement operator.
