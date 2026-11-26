---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/14 Many-Particle Systems and Identical Particles"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/14 Many-Particle Systems and Identical Particles`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 1 possible errors or notation conflicts. 1 of them are verified (1 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2147|N2147]] 14.08 Many-Particle Systems and Identical Particles Exercises: $\Psi_\pm$ denotes the symmetric/antisymmetric well states in Exercises 4, 6, 7 and 8, while $\lvert\Psi^\pm\rangle$ denotes Bell states in Exercises 1 and 8; Exercise 8 uses both in one line. Rename the well states (e.g. $\Phi_S,\Phi_A$). **Fixed:** Renamed the well states to Psi_S (symmetric) and Psi_A (antisymmetric) in Exercises 4, 6, 7, 8 and the table; did not use Phi because Phi^pm are also Bell states

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2139 | [[14.00 Many-Particle Systems and Identical Particles\|14.00 Many-Particle Systems and Identical Particles]] | Analyzed | low | no | no | [[#N2139\|View]] |
| N2140 | [[14.01 Tensor Product\|14.01 Tensor Product]] | Analyzed | low | no | no | [[#N2140\|View]] |
| N2141 | [[14.02 Entanglement and Bell States\|14.02 Entanglement and Bell States]] | Analyzed | low | yes | no | [[#N2141\|View]] |
| N2142 | [[14.03 Identical Particles\|14.03 Identical Particles]] | Analyzed | low | no | no | [[#N2142\|View]] |
| N2143 | [[14.04 Pauli Exclusion Principle\|14.04 Pauli Exclusion Principle]] | Analyzed | low | yes | no | [[#N2143\|View]] |
| N2144 | [[14.05 Statistics of Two Bosons and Two Fermions in a Potential Well\|14.05 Statistics of Two Bosons and Two Fermions in a Potential Well]] | Analyzed | low | yes | no | [[#N2144\|View]] |
| N2145 | [[14.06 Helium Atom\|14.06 Helium Atom]] | Analyzed | medium | yes | no | [[#N2145\|View]] |
| N2146 | [[14.07 Notes on the Periodic Structure of the Elements\|14.07 Notes on the Periodic Structure of the Elements]] | Analyzed | low | yes | no | [[#N2146\|View]] |
| N2147 | [[14.08 Many-Particle Systems and Identical Particles Exercises\|14.08 Many-Particle Systems and Identical Particles Exercises]] | Analyzed | low | no | no | [[#N2147\|View]] |

## Suggestions

### N2139

Note: [[14.00 Many-Particle Systems and Identical Particles|14.00 Many-Particle Systems and Identical Particles]]  
Priority: low · Graph: no · Manim: no

Clear and correct chapter hub.

- [Structure] No change needed; optionally link the summary bullets to the section notes 14.01–14.07.

### N2140

Note: [[14.01 Tensor Product|14.01 Tensor Product]]  
Priority: low · Graph: no · Manim: no

Correct but terse; the claim that $c_1\lvert a_1b_1\rangle+c_2\lvert a_2b_2\rangle$ cannot factor is stated without the one-line argument.

- [Simplify] Add the proof: a product $(\sum\alpha_i\lvert a_i\rangle)(\sum\beta_j\lvert b_j\rangle)$ has coefficient matrix $\alpha_i\beta_j$ of rank one, while $\operatorname{diag}(c_1,c_2)$ has rank two.
- [Example] Give the explicit Kronecker-product matrix of $\sigma_z\otimes I$ and $I\otimes\sigma_x$ on two qubits to show the commuting factors concretely.

### N2141

Note: [[14.02 Entanglement and Bell States|14.02 Entanglement and Bell States]]  
Priority: low · Graph: yes · Manim: no

Correct and readable; it overlaps strongly with 15.01–15.04.

- [Graph] Add a 2D plot of the singlet correlation $E(\theta)=-\cos\theta$ versus the angle between the two analyzers, $\theta\in[0,\pi]$, with the classical linear local model $-1+2\theta/\pi$ overlaid, to preview the Bell violation.
- [Structure] Since chapter 15 repeats the Bell-state definitions and Bell inequalities, keep this note to the definition and singlet anticorrelation and link to 15.02 and 15.04 for details.

### N2142

Note: [[14.03 Identical Particles|14.03 Identical Particles]]  
Priority: low · Graph: no · Manim: no

Correct and concise presentation of the symmetrization postulate.

- [Intuition] Add one sentence that the restriction to eigenvalues $\pm1$ relies on three dimensions; in two dimensions exchange phases $e^{i\theta}$ (anyons) are possible.
- [Example] Add the observable consequence: in a two-particle interference experiment (Hong–Ou–Mandel) bosons bunch, illustrating that exchange symmetry is not just a label convention.

### N2143

Note: [[14.04 Pauli Exclusion Principle|14.04 Pauli Exclusion Principle]]  
Priority: low · Graph: yes · Manim: no

Correct with good figures; the occupation-statistics plot is placed in this note without any text deriving or discussing the formulas.

- [Structure] Fig. 14.2 is introduced only by a closing sentence; add the formulas $\langle n\rangle=1/(e^{(\varepsilon-\mu)/k_BT}\pm1)$ and $e^{-(\varepsilon-\mu)/k_BT}$ with one sentence each, or move the figure to a statistics note.
- [Example] Show the two-fermion Slater determinant written out, $\tfrac1{\sqrt2}[\phi_1(1)\phi_2(2)-\phi_1(2)\phi_2(1)]$, before the general $N$ case.

### N2144

Note: [[14.05 Statistics of Two Bosons and Two Fermions in a Potential Well|14.05 Statistics of Two Bosons and Two Fermions in a Potential Well]]  
Priority: low · Graph: yes · Manim: no

Correct and clear energy comparison ($5E_1$ vs $2E_1$, $\sum n^2$ formula verified).

- [Graph] Add a 2D density plot of $\lvert\Psi(x_1,x_2)\rvert^2$ on $[0,L]^2$ for the symmetric and antisymmetric $\phi_1\phi_2$ states (two panels or a toggle), showing the nodal line $x_1=x_2$ for fermions and enhancement on the diagonal for bosons.
- [Example] Add the spin-$1/2$ case for $N=2$: the singlet with both particles in $\phi_1$ gives $2E_1$, the same as bosons, which clarifies the role of spin.

### N2145

Note: [[14.06 Helium Atom|14.06 Helium Atom]]  
Priority: medium · Graph: yes · Manim: no

Correct numbers ($-108.8$, $-78.98$, $-77.5\,\mathrm{eV}$, $Z_{\mathrm{eff}}=27/16$) and clear exchange discussion, but the first-order perturbative estimate is skipped.

- [Example] Add the first-order perturbation estimate $\langle V_{ee}\rangle=\tfrac54Z\cdot13.6\,\mathrm{eV}=34\,\mathrm{eV}$, giving $E\approx-74.8\,\mathrm{eV}$, so the sequence $-108.8\to-74.8\to-77.5\to-79.0\,\mathrm{eV}$ shows how each improvement works.
- [Simplify] Write the variational energy $E(Z_{\mathrm{eff}})=[Z_{\mathrm{eff}}^2-2ZZ_{\mathrm{eff}}+\tfrac58Z_{\mathrm{eff}}]\,(2\times13.6\,\mathrm{eV})$ so the minimum $Z_{\mathrm{eff}}=Z-5/16$ follows in one line.
- [Graph] Plot $E(Z_{\mathrm{eff}})$ for $Z_{\mathrm{eff}}\in[1.2,2.2]$ with the minimum at $27/16$ and a horizontal line at the measured $-78.98\,\mathrm{eV}$.
- [Intuition] Explain the exchange splitting sign with the exchange integral: $E_{\pm}=J\pm K$ with $K>0$, the triplet (antisymmetric spatial) taking $J-K$.

### N2146

Note: [[14.07 Notes on the Periodic Structure of the Elements|14.07 Notes on the Periodic Structure of the Elements]]  
Priority: low · Graph: yes · Manim: no

Correct summary of screening, filling order, period lengths and Hund's rules, with a good carbon example.

- [Links] The source link \[\[Hydrogen, spin, and the structure of the periodic table#Hydrogen and atomic physics|Physics 10\]\] points to a general section; the matching material is under "#Hund's rules" and "#Carbon term symbols" in that note.
- [Graph] Add a 2D plot of the first ionization energy versus $Z$ for $Z=1$–$36$ to show the shell closures (He, Ne, Ar, Kr) that the filling order explains.
- [Example] Add oxygen ($2p^4$, more than half filled) as a second worked case giving $^3P_2$, to illustrate Hund's third rule in the other direction.

### N2147

Note: [[14.08 Many-Particle Systems and Identical Particles Exercises|14.08 Many-Particle Systems and Identical Particles Exercises]]  
Priority: low · Graph: no · Manim: no

Good exercise list with correct results, but one symbol is reused for two different kinds of state.

- [Correctness] $\Psi_\pm$ denotes the symmetric/antisymmetric well states in Exercises 4, 6, 7 and 8, while $\lvert\Psi^\pm\rangle$ denotes Bell states in Exercises 1 and 8; Exercise 8 uses both in one line. Rename the well states (e.g. $\Phi_S,\Phi_A$).
- [Example] Add the closed-form results for Exercises 6–7: $\langle(x_1-x_2)^2\rangle=\langle x^2\rangle_1+\langle x^2\rangle_2-2\langle x\rangle_1\langle x\rangle_2\mp2\lvert\langle x\rangle_{12}\rvert^2$ with $\langle x\rangle_{12}=-16L/(9\pi^2)$.
