---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics"
---

> [!TLDR]
> This note tracks the review of the 2 notes in `02 Physics/03 Quantum Mechanics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2252|N2252]] Hamiltonian of the Hydrogen Atom: Relativistic correction: $\hat H_{\mathrm{rel}}=-\frac{\hbar^2}{8\mu^2c^2}\nabla^4$ has the wrong dimension; the correct form is $\hat H_{\mathrm{rel}}=-\hat p^4/(8m^3c^2)=-\frac{\hbar^4}{8m^3c^2}\nabla^4$. **Fixed:** Changed to -hbar^4/(8 mu^3 c^2) nabla^4 (= -p^4/(8 m^3 c^2)); kept the note's mu symbol.
- [[#N2252|N2252]] Hamiltonian of the Hydrogen Atom: Spin–orbit term: $\frac{e\hbar}{2\mu c^2r}\mathbf L\cdot\mathbf S$ is not an energy; the SI form is $\hat H_{\mathrm{so}}=\frac{e^2}{8\pi\varepsilon_0m^2c^2r^3}\hat{\mathbf L}\cdot\hat{\mathbf S}$ (including the Thomas factor 1/2). **Fixed:** Changed to e^2/(8 pi epsilon_0 mu^2 c^2 r^3) L.S (SI, Thomas factor included); dimension checked.
- [[#N2252|N2252]] Hamiltonian of the Hydrogen Atom: Darwin term: $\frac{e^2\hbar^2}{8\mu c^2\epsilon_0}\delta(\mathbf r)$ is missing a mass factor; the correct form is $\hat H_D=\frac{e^2\hbar^2}{8\varepsilon_0m^2c^2}\delta^3(\mathbf r)$. Also $e$ is the elementary charge (a magnitude), not "the charge of the electron". **Fixed:** Changed to e^2 hbar^2/(8 mu^2 c^2 epsilon_0) delta^3(r) and described e as the elementary charge.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2252 | [[Hamiltonian of the Hydrogen Atom\|Hamiltonian of the Hydrogen Atom]] | Analyzed | high | no | no | [[#N2252\|View]] |
| N2253 | [[Spin Angular Momentum\|Spin Angular Momentum]] | Analyzed | high | no | no | [[#N2253\|View]] |

## Suggestions

### N2252

Note: [[Hamiltonian of the Hydrogen Atom|Hamiltonian of the Hydrogen Atom]]  
Priority: high · Graph: no · Manim: no

An early-format stub without frontmatter, TLDR, macros, or quantity table, and three of its fine-structure formulas are dimensionally wrong.

- [Correctness] Relativistic correction: $\hat H_{\mathrm{rel}}=-\frac{\hbar^2}{8\mu^2c^2}\nabla^4$ has the wrong dimension; the correct form is $\hat H_{\mathrm{rel}}=-\hat p^4/(8m^3c^2)=-\frac{\hbar^4}{8m^3c^2}\nabla^4$.
- [Correctness] Spin–orbit term: $\frac{e\hbar}{2\mu c^2r}\mathbf L\cdot\mathbf S$ is not an energy; the SI form is $\hat H_{\mathrm{so}}=\frac{e^2}{8\pi\varepsilon_0m^2c^2r^3}\hat{\mathbf L}\cdot\hat{\mathbf S}$ (including the Thomas factor 1/2).
- [Correctness] Darwin term: $\frac{e^2\hbar^2}{8\mu c^2\epsilon_0}\delta(\mathbf r)$ is missing a mass factor; the correct form is $\hat H_D=\frac{e^2\hbar^2}{8\varepsilon_0m^2c^2}\delta^3(\mathbf r)$. Also $e$ is the elementary charge (a magnitude), not "the charge of the electron".
- [Structure] Add a quoted frontmatter title, a TLDR, semantic macros, and a physical-quantities table; the opening "is then given by" refers to missing context. Consider merging into or linking the course chapter on hydrogen fine structure.
- [Intuition] Add the size of each correction ($\sim\alpha^2\,\mathrm{Ry}$ for fine structure, $\sim\alpha^2(m_e/m_p)\,\mathrm{Ry}$ for hyperfine, with the 21 cm line as example) and mention the Lamb shift, which this Hamiltonian omits.

### N2253

Note: [[Spin Angular Momentum|Spin Angular Momentum]]  
Priority: high · Graph: no · Manim: no

Placeholder file containing only "TODO".

- [Structure] Either write the note (spin-1/2 operators, Pauli matrices, eigenstates, Stern–Gerlach motivation, link to [[22.07 Angular Momentum and Spin]]) or delete it and redirect links to the course chapter on spin.
