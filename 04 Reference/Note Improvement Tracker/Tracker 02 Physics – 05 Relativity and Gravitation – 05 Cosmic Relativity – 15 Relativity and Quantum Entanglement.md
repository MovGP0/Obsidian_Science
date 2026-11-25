---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/15 Relativity and Quantum Entanglement"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/15 Relativity and Quantum Entanglement`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 4 possible errors or notation conflicts. 4 of them are verified (3 fixed, 1 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3732|N3732]] 15 References: Entry 7: "Stud. Hist. Phil. Set." should be "Stud. Hist. Phil. Sci." (Studies in History and Philosophy of Science). **Fixed:** Changed to Stud. Hist. Phil. Sci.
- [[#N3735|N3735]] 15.02 Quantum Mechanics of Entanglement: (15.4) writes "$\Psi'=\psi_A\psi_B$" after A is found positive; the updated state is $\psi_{A+}\psi_B$ (up to normalisation), as the right-hand side shows. **Fixed:** Changed left side to Ψ' = a ψ_{A+} ψ_B, matching the unnormalised right-hand side
- [[#N3738|N3738]] 15.04.01 The Correlations in the LHVT: With $a=0^\circ$, $a'=90^\circ$, $b=45^\circ$, $b'=-45^\circ$ (Fig. 15.3a), the $135^\circ$ pair is $(a',b')$, not $(a,b')$ as the text states. With $-\cos\theta$, the combination $(ab)+(a'b)+(a'b')-(ab')$ then evaluates to 0. Use $b'=+135^\circ$ (so $(a,b')=135^\circ$ and the other pairs $45^\circ$, giving $|B|=2\sqrt2$) or move the minus sign to $(a'b')$. **Rejected:** = 2√2 as stated; added "angles measured from the horizontal a′ direction" to the caption to remove the ambiguity
- [[#N3739|N3739]] 15.05 The Proof of Strict Locality in Quantum Correlations: The quantities table lists $s,s_+,s_-$ twice with conflicting units (J·s in one row, dimensionless "units of ℏ" in another), while (15.16)–(15.20) use them as dimensionless; keep one row with the dimensionless meaning. **Fixed:** Removed the J·s row, merged s into the dimensionless row, and rewrote the one dimensional use (action sentence) as ħs±(θi-φ) and ħsφ

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3732 | [[15 References\|15 References]] | Analyzed | low | no | no | [[#N3732\|View]] |
| N3733 | [[15.00 Relativity and Quantum Entanglement\|15.00 Relativity and Quantum Entanglement]] | Analyzed | low | no | no | [[#N3733\|View]] |
| N3734 | [[15.01 The Space-Time Context of the Problem\|15.01 The Space-Time Context of the Problem]] | Analyzed | low | no | yes | [[#N3734\|View]] |
| N3735 | [[15.02 Quantum Mechanics of Entanglement\|15.02 Quantum Mechanics of Entanglement]] | Analyzed | low | no | no | [[#N3735\|View]] |
| N3736 | [[15.03 The EPR Argument of the Incompleteness of Quantum Mechanics\|15.03 The EPR Argument of the Incompleteness of Quantum Mechanics]] | Analyzed | low | no | no | [[#N3736\|View]] |
| N3737 | [[15.04 Measurements of the Quantised Observables of the Microworld\|15.04 Measurements of the Quantised Observables of the Microworld]] | Analyzed | medium | yes | no | [[#N3737\|View]] |
| N3738 | [[15.04.01 The Correlations in the LHVT\|15.04.01 The Correlations in the LHVT]] | Analyzed | medium | yes | no | [[#N3738\|View]] |
| N3739 | [[15.05 The Proof of Strict Locality in Quantum Correlations\|15.05 The Proof of Strict Locality in Quantum Correlations]] | Analyzed | medium | yes | no | [[#N3739\|View]] |
| N3740 | [[15.06 Summary\|15.06 Summary]] | Analyzed | low | no | no | [[#N3740\|View]] |

## Suggestions

### N3732

Note: [[15 References|15 References]]  
Priority: low · Graph: no · Manim: no

Reference list with provenance disclaimer.

- [Correctness] Entry 7: "Stud. Hist. Phil. Set." should be "Stud. Hist. Phil. Sci." (Studies in History and Philosophy of Science).

### N3733

Note: [[15.00 Relativity and Quantum Entanglement|15.00 Relativity and Quantum Entanglement]]  
Priority: low · Graph: no · Manim: no

Clear chapter introduction with a well-framed audit section.

- [Intuition] Give Bell locality as one formula, $P(A,B\mid a,b,\lambda)=P(A\mid a,\lambda)\,P(B\mid b,\lambda)$, next to the no-signalling condition $P(A\mid a,b)=P(A\mid a)$, so the three notions in "Physical question" are concrete.

### N3734

Note: [[15.01 The Space-Time Context of the Problem|15.01 The Space-Time Context of the Problem]]  
Priority: low · Graph: no · Manim: yes

Clear discussion of event ordering; a worked number would make the frame dependence tangible.

- [Example] Add a number: events 1 km apart and simultaneous in O are separated by $\Delta t'=-\gamma v\Delta x/c^2\approx-2.5\,\mathrm{\mu s}$ in a frame moving at $0.6c$.
- [Manim] Animate a Minkowski diagram in which the simultaneity line of O′ tilts as its speed increases, swapping the order of spacelike events A and B while the light cones stay fixed.

### N3735

Note: [[15.02 Quantum Mechanics of Entanglement|15.02 Quantum Mechanics of Entanglement]]  
Priority: low · Graph: no · Manim: no

Good elementary introduction to product and entangled states; one state label is wrong.

- [Correctness] (15.4) writes "$\Psi'=\psi_A\psi_B$" after A is found positive; the updated state is $\psi_{A+}\psi_B$ (up to normalisation), as the right-hand side shows.
- [Simplify] Show the nonfactorisability proof in one line: matching (15.5) to $(a\psi_{A+}+b\psi_{A-})(c\psi_{B+}+d\psi_{B-})$ needs $ac=bd=0$ but $ad,bc\neq0$, which is impossible. Also add $|\alpha|^2+|\beta|^2=1$ with the singlet values $\alpha=-\beta=1/\sqrt2$.

### N3736

Note: [[15.03 The EPR Argument of the Incompleteness of Quantum Mechanics|15.03 The EPR Argument of the Incompleteness of Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Clear reconstruction of the representational-incompleteness reading of EPR.

- [Example] Add the original EPR position–momentum state (perfect correlation of $x_1-x_2$ and anticorrelation of $p_1+p_2$), to show concretely how choosing position or momentum at A assigns different wavefunctions to B (step 2).

### N3737

Note: [[15.04 Measurements of the Quantised Observables of the Microworld|15.04 Measurements of the Quantised Observables of the Microworld]]  
Priority: medium · Graph: yes · Manim: no

Clear setup with the subset-weighting fix noted; the origin of the conditional cosine is still opaque.

- [Intuition] Show where the conditional means come from: for the singlet, $P(B=+\mid A=+)=\sin^2(\theta/2)$, so $\langle B\mid A=+\rangle=\sin^2(\theta/2)-\cos^2(\theta/2)=-\cos\theta$. This uses the quantum state, as the Interpretation says, not conservation alone.
- [Simplify] Derive $S_a=\mathbf n\cdot\mathbf a$ from $P(+)=\cos^2(\theta/2)$ for a spin prepared along $\mathbf n$ at angle $\theta$ to $\mathbf a$.
- [Graph] Plot $C(\theta)=-\cos\theta$ for $\theta\in[0,\pi]$ with markers at $0$, $\pi/2$, $\pi$ (values $-1,0,+1$) matching the sign checks in Interpretation.

### N3738

Note: [[15.04.01 The Correlations in the LHVT|15.04.01 The Correlations in the LHVT]]  
Priority: medium · Graph: yes · Manim: no

Good explanation of the Bell bound, but the stated analyser settings do not produce the quoted CHSH value.

- [Correctness] With $a=0^\circ$, $a'=90^\circ$, $b=45^\circ$, $b'=-45^\circ$ (Fig. 15.3a), the $135^\circ$ pair is $(a',b')$, not $(a,b')$ as the text states. With $-\cos\theta$, the combination $(ab)+(a'b)+(a'b')-(ab')$ then evaluates to 0. Use $b'=+135^\circ$ (so $(a,b')=135^\circ$ and the other pairs $45^\circ$, giving $|B|=2\sqrt2$) or move the minus sign to $(a'b')$.
- [Graph] Extend Fig. 15.3b over $\theta\in[0,\pi]$ and use Bell's linear example $-1+2\theta/\pi$, which meets $-\cos\theta$ at $0$, $\pi/2$, and $\pi$. The gap between the curves near $45^\circ$ and $135^\circ$ is exactly what CHSH exploits.
- [Simplify] Show the two-line CHSH bound: $A(a)[B(b)+B(b')]+A(a')[B(b)-B(b')]=\pm2$ for local $\pm1$ responses, so the average lies in $[-2,2]$.

### N3739

Note: [[15.05 The Proof of Strict Locality in Quantum Correlations|15.05 The Proof of Strict Locality in Quantum Correlations]]  
Priority: medium · Graph: yes · Manim: no

The algebra (15.12)–(15.22) is correct as transcribed and the branch-selection caveat is well noted, but the table is inconsistent and the marginals are not checked.

- [Correctness] The quantities table lists $s,s_+,s_-$ twice with conflicting units (J·s in one row, dimensionless "units of ℏ" in another), while (15.16)–(15.20) use them as dimensionless; keep one row with the dimensionless meaning.
- [Intuition] Write out all four joint probabilities $p_{++}=p_{--}=\tfrac12\sin^2(\theta/2)$ and $p_{+-}=p_{-+}=\tfrac12\cos^2(\theta/2)$, and show that each marginal is $1/2$ for every setting (no signalling). This is the check the Interpretation section asks for.
- [Graph] Plot $p_-=\cos^2(\theta/2)$, $p_+=\sin^2(\theta/2)$, and $C=-\cos\theta$ for $\theta\in[0,\pi]$.

### N3740

Note: [[15.06 Summary|15.06 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate concise chapter summary.

- [Links] Link the summarised steps to 15.03 (EPR), 15.04 (cosine correlation), 15.04.01 (Bell bound), and 15.05 (action-wave correlations).
