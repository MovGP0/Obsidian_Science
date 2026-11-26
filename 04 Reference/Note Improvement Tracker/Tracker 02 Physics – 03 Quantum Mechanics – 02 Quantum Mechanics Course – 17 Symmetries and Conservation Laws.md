---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/17 Symmetries and Conservation Laws"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/17 Symmetries and Conservation Laws`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2173 | [[17.00 Symmetries and Conservation Laws\|17.00 Symmetries and Conservation Laws]] | Analyzed | low | no | no | [[#N2173\|View]] |
| N2174 | [[17.01 Symmetries as Unitary Operators\|17.01 Symmetries as Unitary Operators]] | Analyzed | low | no | no | [[#N2174\|View]] |
| N2175 | [[17.02 Spatial Translations and Conservation of Momentum\|17.02 Spatial Translations and Conservation of Momentum]] | Analyzed | low | no | no | [[#N2175\|View]] |
| N2176 | [[17.03 Rotations and Conservation of Angular Momentum\|17.03 Rotations and Conservation of Angular Momentum]] | Analyzed | low | no | no | [[#N2176\|View]] |
| N2177 | [[17.04 Parity\|17.04 Parity]] | Analyzed | low | no | no | [[#N2177\|View]] |
| N2178 | [[17.05 Time Reversal\|17.05 Time Reversal]] | Analyzed | medium | no | no | [[#N2178\|View]] |
| N2179 | [[17.06 Symmetry and Degeneracy\|17.06 Symmetry and Degeneracy]] | Analyzed | low | no | no | [[#N2179\|View]] |
| N2180 | [[17.07 Summary Table\|17.07 Summary Table]] | Analyzed | low | no | no | [[#N2180\|View]] |
| N2181 | [[17.08 Symmetries and Conservation Laws Exercises\|17.08 Symmetries and Conservation Laws Exercises]] | Analyzed | low | no | no | [[#N2181\|View]] |

## Suggestions

### N2173

Note: [[17.00 Symmetries and Conservation Laws|17.00 Symmetries and Conservation Laws]]  
Priority: low · Graph: no · Manim: no

Clear and correct chapter hub with an accurate summary of the chapter's results.

- [Links] Turn the summary bullets into links to the section notes (\[\[17.01 Symmetries as Unitary Operators\]\] … \[\[17.06 Symmetry and Degeneracy\]\]) so the hub works as a reading route.

### N2174

Note: [[17.01 Symmetries as Unitary Operators|17.01 Symmetries as Unitary Operators]]  
Priority: low · Graph: no · Manim: no

Correct and compact, but the step from commuting generator to conserved quantity is stated rather than shown.

- [Simplify] Below Theorem 17.1, add the one-line Heisenberg argument $\mathrm d\langle\hat G\rangle/\mathrm dt=(i/\hbar)\langle[\energy{\hat H},\hat G]\rangle+\langle\partial_t\hat G\rangle=0$, which is what "constant of motion" means here.
- [Example] Give one concrete pair after the definition, e.g. $\lambda=a$ with $\hat G=\mechanical{\hat p}_x$ (translation) and $\lambda=\alpha$ with $\hat G=\mechanical{\hat J}_z$ (rotation), to make "their product has units of action" in the table concrete.

### N2175

Note: [[17.02 Spatial Translations and Conservation of Momentum|17.02 Spatial Translations and Conservation of Momentum]]  
Priority: low · Graph: no · Manim: no

Correct and clear derivation of momentum as the translation generator.

- [Intuition] State the result per component: a potential invariant only under translations along $x$ (e.g. $\energy V(y,z)$) conserves $\mechanical{\hat p}_x$ only; this matches the TLDR's "corresponding component" claim, which the body states only for full translation invariance.
- [Links] Link "electronic band theory" to \[\[19.01 Discrete Translation Symmetry\]\].

### N2176

Note: [[17.03 Rotations and Conservation of Angular Momentum|17.03 Rotations and Conservation of Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the Wigner–Eckart section is dense for a first encounter.

- [Simplify] Note that without spin–orbit coupling a central potential conserves $\mechanical{\mathbf L}$ and $\mechanical{\mathbf S}$ separately, and only $\mechanical{\mathbf J}$ survives once spin–orbit terms are added; this explains why the labels $j,m_j$ are chosen.
- [Example] Add one worked dipole example such as $\langle 1s|\hat z|2p,m\rangle\ne0$ only for $m=0$ (since $\hat z\propto\hat T^{(1)}_0$), so the rule $m'=m+q$ is seen in action; the table lists $m_j$ but the formula uses $m,m'$, so align the notation.

### N2177

Note: [[17.04 Parity|17.04 Parity]]  
Priority: low · Graph: no · Manim: no

Correct and readable note with a good selection-rule argument and a useful polar/axial-vector caveat.

- [Simplify] Add the one-line proof that a nondegenerate eigenstate has definite parity ($\hat\Pi\psi$ has the same energy, so $\hat\Pi\psi=c\psi$ with $c^2=1$).
- [Structure] Rephrase the "Polar and axial vectors" callout without the transcription meta ("The source caption applies…") and state the result directly: $\hat\Pi\hat{\mathbf L}\hat\Pi=+\hat{\mathbf L}$.

### N2178

Note: [[17.05 Time Reversal|17.05 Time Reversal]]  
Priority: medium · Graph: no · Manim: no

Correct statements, but Kramers' theorem is asserted without its short proof and the antiunitary nature is not made concrete.

- [Simplify] Add the two-line proof of Kramers' theorem: for antiunitary $\hat\Theta$, $\langle\psi|\hat\Theta\psi\rangle=\langle\hat\Theta^2\psi|\hat\Theta\psi\rangle=-\langle\psi|\hat\Theta\psi\rangle$, so $\langle\psi|\hat\Theta\psi\rangle=0$ and the partners are orthogonal.
- [Example] Show $\hat\Theta=-i\sigma_y\hat K$ acting on $\lvert\uparrow\rangle,\lvert\downarrow\rangle$ ($\lvert\uparrow\rangle\mapsto\lvert\downarrow\rangle$, $\lvert\downarrow\rangle\mapsto-\lvert\uparrow\rangle$) and check $\hat\Theta^2=-\hat I$ explicitly.
- [Intuition] Explain why $\hat\Theta$ must be antiunitary: a unitary $\hat\Theta$ that reverses the time evolution would need $\hat\Theta\energy{\hat H}=-\energy{\hat H}\hat\Theta$, which gives a spectrum unbounded below.

### N2179

Note: [[17.06 Symmetry and Degeneracy|17.06 Symmetry and Degeneracy]]  
Priority: low · Graph: no · Manim: no

Correct, compact overview of symmetry-protected degeneracies and their breaking.

- [Example] Add a numerical Zeeman example (for example the hydrogen $2p$ level splitting into $m_\ell=-1,0,1$ with spacing $\mu_B B\approx\quantity{5.8\times10^{-5}}{eV}$ at $\quantity{1}{T}$, ignoring spin) to make "lifting the degeneracy" concrete.

### N2180

Note: [[17.07 Summary Table|17.07 Summary Table]]  
Priority: low · Graph: no · Manim: no

A useful summary table; one cell is redundant.

- [Simplify] In the Rotation row, the "Conserved quantity" cell $\mechanical{\mathbf L}+\mechanical{\mathbf S}$ just restates the generator; write "Total angular momentum $\mechanical{\mathbf J}$" for consistency with the other rows.

### N2181

Note: [[17.08 Symmetries and Conservation Laws Exercises|17.08 Symmetries and Conservation Laws Exercises]]  
Priority: low · Graph: no · Manim: no

Well-posed exercises; the stated results (translation, $\hat R_z(\pi/2)$ matrix, $\hat R_z^\dagger\hat L_+\hat R_z$) check out.

- [Example] Exercise 11 asks to "calculate" the ratio but gives no result; add the expected value (about $3.8$, from the known rates $6.27\times10^8$ and $1.67\times10^8\,\unit{s^{-1}}$) so the reader can check the $\omega^3|\electric{\mathbf d}|^2$ estimate.
