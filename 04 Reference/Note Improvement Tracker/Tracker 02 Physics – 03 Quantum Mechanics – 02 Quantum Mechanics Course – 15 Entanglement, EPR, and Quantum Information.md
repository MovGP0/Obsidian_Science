---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/15 Entanglement, EPR, and Quantum Information"
---

> [!TLDR]
> This note tracks the review of the 11 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/15 Entanglement, EPR, and Quantum Information`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2148 | [[15.00 Entanglement, EPR, and Quantum Information\|15.00 Entanglement, EPR, and Quantum Information]] | Analyzed | low | no | no | [[#N2148\|View]] |
| N2149 | [[15.01 Separable and Entangled States\|15.01 Separable and Entangled States]] | Analyzed | low | yes | no | [[#N2149\|View]] |
| N2150 | [[15.02 Bell States\|15.02 Bell States]] | Analyzed | low | no | no | [[#N2150\|View]] |
| N2151 | [[15.03 EPR Paradox\|15.03 EPR Paradox]] | Analyzed | low | no | no | [[#N2151\|View]] |
| N2152 | [[15.04 Bell and CHSH Inequalities\|15.04 Bell and CHSH Inequalities]] | Analyzed | medium | yes | no | [[#N2152\|View]] |
| N2153 | [[15.05 Experimental Tests\|15.05 Experimental Tests]] | Analyzed | medium | no | no | [[#N2153\|View]] |
| N2154 | [[15.06 No-Cloning Theorem\|15.06 No-Cloning Theorem]] | Analyzed | low | no | no | [[#N2154\|View]] |
| N2155 | [[15.07 Qubits and Quantum Gates\|15.07 Qubits and Quantum Gates]] | Analyzed | medium | no | yes | [[#N2155\|View]] |
| N2156 | [[15.08 Quantum Teleportation\|15.08 Quantum Teleportation]] | Analyzed | low | no | no | [[#N2156\|View]] |
| N2157 | [[15.09 Superdense Coding\|15.09 Superdense Coding]] | Analyzed | low | no | no | [[#N2157\|View]] |
| N2158 | [[15.10 Entanglement, EPR, and Quantum Information Exercises\|15.10 Entanglement, EPR, and Quantum Information Exercises]] | Analyzed | low | no | no | [[#N2158\|View]] |

## Suggestions

### N2148

Note: [[15.00 Entanglement, EPR, and Quantum Information|15.00 Entanglement, EPR, and Quantum Information]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub with an accurate summary of the chapter's results.

- [Structure] No change needed beyond optionally linking each summary bullet to its section note (15.01–15.09) so the hub doubles as a navigation index.

### N2149

Note: [[15.01 Separable and Entangled States|15.01 Separable and Entangled States]]  
Priority: low · Graph: yes · Manim: no

Correct and compact, but the mixed-state paragraph refers to a partial-transpose test that is never introduced.

- [Simplify] The sentence "some entangled states have a positive partial transpose and escape that test" refers to "that test" without ever stating the Peres–Horodecki (PPT) criterion; either state it in one line (separable implies $\rho^{T_B}\ge0$, which is also sufficient for $2\times2$ and $2\times3$) or drop the remark.
- [Intuition] Add the general product test for two qubits: $a_{00}\lvert00\rangle+a_{01}\lvert01\rangle+a_{10}\lvert10\rangle+a_{11}\lvert11\rangle$ is a product iff $a_{00}a_{11}-a_{01}a_{10}=0$; this turns the ad hoc $\lvert\Phi^+\rangle$ argument (and exercises 1–2 of 15.10) into a one-line check.
- [Example] Compute the Schmidt coefficients and $E$ for the partially entangled state $\cos\theta\lvert00\rangle+\sin\theta\lvert11\rangle$, giving $E=-\cos^2\theta\log_2\cos^2\theta-\sin^2\theta\log_2\sin^2\theta$, to show the interpolation between 0 and 1 bit.
- [Graph] Plot that $E(\theta)$ for $\theta\in[0,\pi/2]$ (binary entropy curve, maximum 1 bit at $\theta=\pi/4$).

### N2150

Note: [[15.02 Bell States|15.02 Bell States]]  
Priority: low · Graph: no · Manim: no

Correct and concise; Proposition 15.1 would be clearer with the actual eigenvalue table.

- [Simplify] After Proposition 15.1, list the eigenvalues of $(\sigma_x\sigma_x,\sigma_y\sigma_y,\sigma_z\sigma_z)$: $\Phi^+:(+,-,+)$, $\Phi^-:(-,+,+)$, $\Psi^+:(+,+,-)$, $\Psi^-:(-,-,-)$, and note that their product is always $-1$ because $(\sigma_x\otimes\sigma_x)(\sigma_y\otimes\sigma_y)=-\sigma_z\otimes\sigma_z$.
- [Intuition] Mention that the four Bell states are obtained from $\lvert\Phi^+\rangle$ by applying $\hat I,Z,X,XZ$ to one qubit, which links directly to superdense coding (15.09) and teleportation (15.08).

### N2151

Note: [[15.03 EPR Paradox|15.03 EPR Paradox]]  
Priority: low · Graph: no · Manim: no

Clear, correct statement of the EPR premises and Bohm's spin version.

- [Intuition] Close with one sentence stating what quantum mechanics says instead (no pre-existing values for both $\mathbf a$ and $\mathbf a'$) and that Bell (15.04) showed the dispute is experimentally decidable, so the reader sees why the next note matters.
- [Example] Add the probabilities for axes at relative angle $\theta$: $P(+,-)=P(-,+)=\tfrac12\cos^2(\theta/2)$, $P(+,+)=P(-,-)=\tfrac12\sin^2(\theta/2)$, which generalizes the $(0,1/2,1/2,0)$ list and prepares $E=-\cos\theta$ in 15.04.

### N2152

Note: [[15.04 Bell and CHSH Inequalities|15.04 Bell and CHSH Inequalities]]  
Priority: medium · Graph: yes · Manim: no

Correct derivation of the CHSH bound and the Tsirelson value, but the singlet correlation $-\mathbf a\cdot\mathbf b$ is asserted rather than derived.

- [Simplify] Show the two-line derivation of $E(\mathbf a,\mathbf b)=-\mathbf a\cdot\mathbf b$: use $(\boldsymbol\sigma\otimes\hat I+\hat I\otimes\boldsymbol\sigma)\lvert\Psi^-\rangle=0$ to replace $\hat I\otimes(\mathbf b\cdot\boldsymbol\sigma)$ by $-(\mathbf b\cdot\boldsymbol\sigma)\otimes\hat I$, then apply the Pauli identity and $\langle\boldsymbol\sigma\otimes\hat I\rangle=0$; "rotational invariance" alone does not give the sign or the cosine.
- [Graph] Plot the singlet correlation $E(\theta)=-\cos\theta$ against the best local-realist straight-line model $E_{\mathrm{LHV}}(\theta)=-1+2\theta/\pi$ for $\theta\in[0,\pi]$; the gap at $\theta=\pi/4$ and $3\pi/4$ is exactly what the chosen axes exploit.
- [Intuition] Explain why the angles $0,\pi/4,\pi/2,3\pi/4$ are optimal: with $E=-\cos$, three pairs differ by $\pi/4$ and one by $3\pi/4$, so all four terms of $S$ add with the same sign.
- [Structure] State the assumptions behind $\lvert S\rvert\le2$ explicitly (locality, setting-independent $\rho(\lambda)$, outcomes $\pm1$), since 15.05 discusses loopholes in terms of exactly these assumptions.

### N2153

Note: [[15.05 Experimental Tests|15.05 Experimental Tests]]  
Priority: medium · Graph: no · Manim: no

Correct but very thin; the loophole-free experiments are described vaguely without names, dates, or numbers.

- [Structure] Name the 2015 loophole-free tests (Delft NV centres separated by 1.3 km, Vienna and NIST photon tests with high-efficiency superconducting detectors) and the 2022 Nobel Prize (Aspect, Clauser, Zeilinger); "photons over long distances" is misleading, since the 2015 photon tests closed the detection loophole with efficient detectors at separations of tens to a few hundred metres.
- [Links] Link each loophole to the CHSH assumption it attacks (fair sampling, locality, measurement independence) and to the derivation in [[15.04 Bell and CHSH Inequalities]].
- [Simplify] In the efficiency note, give the formulas behind the numbers: $\eta>2/(1+\sqrt2)\approx82.8\%$ for the maximally entangled state and Eberhard's $\eta>2/3$ for weakly entangled states.

### N2154

Note: [[15.06 No-Cloning Theorem|15.06 No-Cloning Theorem]]  
Priority: low · Graph: no · Manim: no

Correct standard proof; the global-phase remark is muddled.

- [Simplify] Rewrite the sentence "The same physical state can also be represented by a vector that differs by a global phase": the proof gives $z\in\{0,1\}$, and allowing an output phase does not rescue cloning of nonorthogonal states (the modulus version $\lvert z\rvert=\lvert z\rvert^2$ gives the same conclusion); say this explicitly.
- [Intuition] Add the linearity argument as an alternative: cloning $\lvert0\rangle$ and $\lvert1\rangle$ forces $(\lvert0\rangle+\lvert1\rangle)/\sqrt2\mapsto(\lvert00\rangle+\lvert11\rangle)/\sqrt2$, an entangled state, not the product $\lvert{+}\rangle\lvert{+}\rangle$; this also links to CNOT in 15.07.

### N2155

Note: [[15.07 Qubits and Quantum Gates|15.07 Qubits and Quantum Gates]]  
Priority: medium · Graph: no · Manim: yes

Correct and well organized, but the gates are listed without showing their Bloch-sphere action, and the no-signalling section belongs elsewhere.

- [Manim] Animate a Bloch vector under $X$, $Z$, $H$, $S$, and $T$ as rotations (by $\pi$ about $x$, $z$, $(x+z)/\sqrt2$, and by $\pi/2$, $\pi/4$ about $z$), ending with $H\lvert0\rangle=\lvert+\rangle$.
- [Simplify] State the rotation angles of $S$ and $T$ (about $z$ by $\pi/2$ and $\pi/4$) alongside the Pauli and Hadamard statements, and note $H=(X+Z)/\sqrt2$, which makes its rotation axis obvious.
- [Example] Write out $\operatorname{CNOT}(H\otimes\hat I)\lvert00\rangle$ step by step: $(\lvert00\rangle+\lvert10\rangle)/\sqrt2\to(\lvert00\rangle+\lvert11\rangle)/\sqrt2$.
- [Structure] Move the "Nonlocality and no-signalling" section to 15.04 or 15.05 (or its own note); it is unrelated to gates, and here the letter $S$ (phase gate) also collides with the CHSH combination $S$ used in the neighbouring notes.

### N2156

Note: [[15.08 Quantum Teleportation|15.08 Quantum Teleportation]]  
Priority: low · Graph: no · Manim: no

The Bell-basis decomposition, bit table, and corrections are correct; a transcription callout about "the source" distracts.

- [Structure] Remove or rewrite the "Bit order in the source" callout; readers cannot see "the source prose", and the table plus $Z^aX^b$ is already self-consistent (verified: $\Phi^+\to00$, $\Phi^-\to10$, $\Psi^+\to01$, $\Psi^-\to11$ for CNOT then $H$ on $C$).
- [Simplify] Add one line showing how Eq. (15.3) is obtained: substitute $\lvert00\rangle=(\Phi^++\Phi^-)/\sqrt2$, $\lvert11\rangle=(\Phi^+-\Phi^-)/\sqrt2$, $\lvert01\rangle=(\Psi^++\Psi^-)/\sqrt2$, $\lvert10\rangle=(\Psi^+-\Psi^-)/\sqrt2$ for qubits $CA$.
- [Intuition] Note that the bit convention here ($10\to Z$, $01\to X$) differs from the message labels in 15.09 ($01\to Z$, $10\to X$); align them or flag the difference.

### N2157

Note: [[15.09 Superdense Coding|15.09 Superdense Coding]]  
Priority: low · Graph: no · Manim: no

Short, correct description of the protocol.

- [Simplify] Note that $XZ$ produces $-\lvert\Psi^-\rangle$ (as exercise 11 of 15.10 states) and describe the Bell measurement concretely as CNOT then $H$ followed by computational-basis readout, as in Fig. 15.3.
- [Structure] Use the same bit-to-gate convention as 15.08 or state the mapping difference explicitly.

### N2158

Note: [[15.10 Entanglement, EPR, and Quantum Information Exercises|15.10 Entanglement, EPR, and Quantum Information Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise list with correct results (all eleven checked).

- [Structure] No change needed; optionally add a hint to exercise 2 using the determinant test $a_{00}a_{11}-a_{01}a_{10}=1/3\ne0$.
