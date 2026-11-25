---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/13 Density Matrix and Decoherence"
---

> [!TLDR]
> This note tracks the review of the 10 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/13 Density Matrix and Decoherence`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2129 | [[13.00 Density Matrix and Decoherence\|13.00 Density Matrix and Decoherence]] | Analyzed | low | no | no | [[#N2129\|View]] |
| N2130 | [[13.01 Limitations of Pure States\|13.01 Limitations of Pure States]] | Analyzed | low | no | no | [[#N2130\|View]] |
| N2131 | [[13.02 Definition and Properties of the Density Matrix\|13.02 Definition and Properties of the Density Matrix]] | Analyzed | low | no | no | [[#N2131\|View]] |
| N2132 | [[13.03 Expectation Values and Purity\|13.03 Expectation Values and Purity]] | Analyzed | low | yes | no | [[#N2132\|View]] |
| N2133 | [[13.04 Composite Systems and Partial Trace\|13.04 Composite Systems and Partial Trace]] | Analyzed | low | no | no | [[#N2133\|View]] |
| N2134 | [[13.05 Von Neumann Entropy\|13.05 Von Neumann Entropy]] | Analyzed | low | yes | no | [[#N2134\|View]] |
| N2135 | [[13.06 Liouville–von Neumann Equation\|13.06 Liouville–von Neumann Equation]] | Analyzed | low | no | no | [[#N2135\|View]] |
| N2136 | [[13.07 Decoherence\|13.07 Decoherence]] | Analyzed | medium | yes | yes | [[#N2136\|View]] |
| N2137 | [[13.08 Lindblad Equation\|13.08 Lindblad Equation]] | Analyzed | medium | yes | yes | [[#N2137\|View]] |
| N2138 | [[13.09 Density Matrix and Decoherence Exercises\|13.09 Density Matrix and Decoherence Exercises]] | Analyzed | low | no | no | [[#N2138\|View]] |

## Suggestions

### N2129

Note: [[13.00 Density Matrix and Decoherence|13.00 Density Matrix and Decoherence]]  
Priority: low · Graph: no · Manim: no

Clear, correct chapter hub; the summary bullets (purity range, Bloch ball, $T_2\le2T_1$, Lindblad generator) are accurate.

- [Structure] No change needed; optionally link each summary bullet to its section note (13.01–13.08).

### N2130

Note: [[13.01 Limitations of Pure States|13.01 Limitations of Pure States]]  
Priority: low · Graph: no · Manim: no

Clear and correct motivating example contrasting a coherent superposition with a $z$-basis mixture.

- [Example] Write the two density matrices side by side, $\tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ versus $\tfrac12 I$, and note that the off-diagonal entry is exactly what $\langle\hat S_x\rangle=\hbar\operatorname{Re}\rho_{01}$ detects; this bridges to 13.02.

### N2131

Note: [[13.02 Definition and Properties of the Density Matrix|13.02 Definition and Properties of the Density Matrix]]  
Priority: low · Graph: no · Manim: no

Correct and well structured definition with a proof of the characterization theorem.

- [Example] Illustrate Remark 13.1 with the standard example: equal mixtures of $\{\lvert0\rangle,\lvert1\rangle\}$, of $\{\lvert+\rangle,\lvert-\rangle\}$, and of three states at $120^\circ$ on a great circle of the Bloch sphere all give $\hat I/2$.

### N2132

Note: [[13.03 Expectation Values and Purity|13.03 Expectation Values and Purity]]  
Priority: low · Graph: yes · Manim: no

Correct and clear, with a good interactive Bloch-ball figure.

- [Simplify] Prove the qubit purity formula in one line: $\operatorname{Tr}\hat\rho^2=\tfrac14\operatorname{Tr}(I+2\mathbf a\cdot\boldsymbol\sigma+(\mathbf a\cdot\boldsymbol\sigma)^2)=\tfrac12(1+\lvert\mathbf a\rvert^2)$, using $(\mathbf a\cdot\boldsymbol\sigma)^2=\lvert\mathbf a\rvert^2I$.
- [Graph] Optionally add a small 2D plot of $\mathcal P=(1+r^2)/2$ for $r=\lvert\mathbf a\rvert\in[0,1]$, marking $1/2$ at the centre and $1$ on the surface.

### N2133

Note: [[13.04 Composite Systems and Partial Trace|13.04 Composite Systems and Partial Trace]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the Bell-state partial trace is stated rather than computed.

- [Example] Show the partial-trace step for $\lvert\Phi^+\rangle$ explicitly: expand $\lvert\Phi^+\rangle\langle\Phi^+\rvert$ into four terms and show that $\langle n\rvert_B$ kills the cross terms $\lvert0\rangle\langle1\rvert\otimes\lvert0\rangle\langle1\rvert$.
- [Example] Contrast with a product state such as $\lvert+\rangle\lvert0\rangle$, whose reduced state stays pure, to make Remark 13.2 concrete.

### N2134

Note: [[13.05 Von Neumann Entropy|13.05 Von Neumann Entropy]]  
Priority: low · Graph: yes · Manim: no

Correct list of entropy properties; it would benefit from one plot and one worked example.

- [Graph] Add a 2D plot of the qubit entropy $S(p)=-p\ln p-(1-p)\ln(1-p)$ for $p\in[0,1]$, with the maximum $\ln2$ at $p=1/2$; optionally overlay the linear entropy $1-\mathcal P=2p(1-p)$ for comparison.
- [Intuition] Add one sentence on why $S(\hat\rho_A)=S(\hat\rho_B)$ for a pure joint state (Schmidt decomposition gives both reduced states the same nonzero spectrum $\lvert c_k\rvert^2$).

### N2135

Note: [[13.06 Liouville–von Neumann Equation|13.06 Liouville–von Neumann Equation]]  
Priority: low · Graph: no · Manim: no

Correct derivation and a good classical analogy (sign of $\partial_t f=\{H,f\}$ checked).

- [Intuition] Point out the sign difference from the Heisenberg equation, $d\hat A_H/dt=+\tfrac{i}{\hbar}[\hat H,\hat A_H]$ versus $d\hat\rho/dt=-\tfrac{i}{\hbar}[\hat H,\hat\rho]$, since students often confuse the two.
- [Example] Add the qubit example in the energy basis: $\rho_{01}(t)=\rho_{01}(0)e^{-i\omega_{01}t}$ with populations constant, showing that unitary evolution rotates coherences but does not damp them (contrast with 13.07).

### N2136

Note: [[13.07 Decoherence|13.07 Decoherence]]  
Priority: medium · Graph: yes · Manim: yes

Correct and well-motivated treatment (the reduced-state formula with $\langle E_1\mid E_0\rangle$ is right), but the decoherence-time model is quoted without derivation or scale.

- [Structure] State that the exponential law $\rho_{01}\propto e^{-t/\tau_d}$ is a Markovian approximation; in the spin–boson pure-dephasing model the decay is generally Gaussian at short times and depends on the bath spectral density, so the quoted $\coth$ formula is a high-level summary, not a general result.
- [Example] Add a numerical scale example (e.g. a dust grain in air or a $\mu$m superposition at room temperature) so the reader sees why $\tau_d$ is extraordinarily short for macroscopic objects.
- [Graph] Add a 2D plot of $\lvert\rho_{01}(t)\rvert/\lvert\rho_{01}(0)\rvert=e^{-t/\tau_d}$ together with constant populations $\lvert c_0\rvert^2=0.7$, $\lvert c_1\rvert^2=0.3$ for $t/\tau_d\in[0,5]$.
- [Manim] Animate the Bloch vector of the system qubit shrinking from the surface onto the $z$-axis as $\langle E_0\mid E_1\rangle$ decays, showing coherence loss without population change.

### N2137

Note: [[13.08 Lindblad Equation|13.08 Lindblad Equation]]  
Priority: medium · Graph: yes · Manim: yes

Correct (the rates for $\hat L=\sigma_-/\sqrt{T_1}$ and $\hat L=\sigma_z/\sqrt{2T_\phi}$ and $1/T_2=1/(2T_1)+1/T_\phi$ check out), but the population and coherence equations are not written out.

- [Example] Write the component equations for amplitude damping: $\dot\rho_{11}=-\rho_{11}/T_1$, $\dot\rho_{00}=+\rho_{11}/T_1$, $\dot\rho_{01}=-\rho_{01}/(2T_1)$, so the reader can see where the factor $1/(2T_1)$ in $1/T_2$ comes from.
- [Graph] Add a 2D plot of $\rho_{11}(t)=e^{-t/T_1}$ and $\lvert\rho_{01}(t)\rvert=\tfrac12e^{-t/T_2}$ for $T_1=1$, $T_\phi=2$ (so $T_2=1$) over $t\in[0,5]$, starting from $\lvert+\rangle$.
- [Manim] Animate the Bloch vector under combined relaxation and dephasing (with a small Hamiltonian precession), spiralling from $\lvert+\rangle$ to the ground-state pole.

### N2138

Note: [[13.09 Density Matrix and Decoherence Exercises|13.09 Density Matrix and Decoherence Exercises]]  
Priority: low · Graph: no · Manim: no

Good exercise list; all results verified (Ex. 3 purity, Ex. 8 entropy $\simeq1.011$ nats, Ex. 10 precession signs, Ex. 11 $T_\phi=1/(2\gamma)$).

- [Structure] No change needed; optionally add a result line to Exercises 2, 5 and 7 consistent with the others, and the Bloch vector $\mathbf a=(\sin\theta,0,\cos\theta)$ to Exercise 1.
