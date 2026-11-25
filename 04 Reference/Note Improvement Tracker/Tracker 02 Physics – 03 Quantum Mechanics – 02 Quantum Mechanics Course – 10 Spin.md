---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/10 Spin"
---

> [!TLDR]
> This note tracks the review of the 10 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/10 Spin`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2102|N2102]] Spin in magnetic fields and atomic Zeeman splitting: The physical-quantities table lists $\mechanical{v}$ twice (particle speed and molar volume) and $A,B$ twice (emission coefficients and virial coefficients), includes unused symbols ($\mechanical t_0$, $\Delta\mechanical t$, oscillator $\mechanical x$, $E$ in N, box length $\mechanical L$, $\Delta E,\delta E$), and omits the spin-coupling constant $A$, $a,\tilde a$, $b_i$, $g$, $g_J$, $\mu_B$, $m_j$, $\chi$, $R_{n\ell}$; rebuild it and rename the spin-coupling constant to avoid the clash with $\magnetic{\mathbf A}$ and the virial $A(T)$. **Fixed:** Spin-coupling constant A renamed K (with the coupling K S1.S2 stated); rebuilt the table: removed t0, Delta t, oscillator x, E in N, Delta E and delta E, box L, particle speed v, emission A,B, T_c; added K, a and tilde a, b_i, g, g_J, mu_B, mu, m_j and other quantum numbers, chi, R_nl, B, P, V, alpha and others
- [[#N2103|N2103]] Unitary rotations of spinors and Pauli matrices: The Physical quantities table lists symbols the note never uses ($\mechanical{L}$ as "Box side length", $c$, and $A$, $B$ as mode emission/absorption coefficients); $\mechanical{L}$ as a length also clashes with the orbital angular momentum $\mechanical{\mathbf L}$ in the same table. Remove these rows. **Fixed:** Removed the three rows
- [[#N2103|N2103]] Unitary rotations of spinors and Pauli matrices: In "Spinor rotation" the Cartesian rotation is written $O=e^{-i\phi\widehat{\mathbf n}\cdot\mathbf L}$ with dimensionless generators, while the same letter $\mechanical{\mathbf L}$ is the dimensionful orbital operator elsewhere in the note; rename the $3\times3$ generators (e.g. $\mathcal J_i$) or write $e^{-i\phi\widehat{\mathbf n}\cdot\mechanical{\mathbf L}/\hbar}$. **Fixed:** Rewrote O=e^{-i phi n.L} as O=e^{-i phi n.calJ} with dimensionless 3x3 generators calJ_i (the formula is in the scalar/vector paragraph after Spinor rotation)

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2094 | [[10.00 Spin\|10.00 Spin]] | Analyzed | low | no | no | [[#N2094\|View]] |
| N2095 | [[10.01 Algebraic Definition\|10.01 Algebraic Definition]] | Analyzed | low | no | no | [[#N2095\|View]] |
| N2096 | [[10.02 Spin ½ and the Pauli Matrices\|10.02 Spin ½ and the Pauli Matrices]] | Analyzed | low | no | no | [[#N2096\|View]] |
| N2097 | [[10.03 Bloch Sphere\|10.03 Bloch Sphere]] | Analyzed | low | no | yes | [[#N2097\|View]] |
| N2098 | [[10.04 Larmor Precession\|10.04 Larmor Precession]] | Analyzed | low | yes | yes | [[#N2098\|View]] |
| N2099 | [[10.05 Stern–Gerlach Revisited\|10.05 Stern–Gerlach Revisited]] | Analyzed | low | no | yes | [[#N2099\|View]] |
| N2100 | [[10.06 Introduction to Combining Two Spin-½ Systems\|10.06 Introduction to Combining Two Spin-½ Systems]] | Analyzed | low | no | no | [[#N2100\|View]] |
| N2101 | [[10.07 Spin Exercises\|10.07 Spin Exercises]] | Analyzed | low | no | no | [[#N2101\|View]] |
| N2102 | [[Spin in magnetic fields and atomic Zeeman splitting\|Spin in magnetic fields and atomic Zeeman splitting]] | Analyzed | high | yes | no | [[#N2102\|View]] |
| N2103 | [[Unitary rotations of spinors and Pauli matrices\|Unitary rotations of spinors and Pauli matrices]] | Analyzed | high | no | yes | [[#N2103\|View]] |

## Suggestions

### N2094

Note: [[10.00 Spin|10.00 Spin]]  
Priority: low · Graph: no · Manim: no

Clear and correct chapter hub with an accurate summary of the spin-1/2 results and conventions.

- [Structure] No change needed; optionally link each summary bullet to its section note (10.01–10.06).

### N2095

Note: [[10.01 Algebraic Definition|10.01 Algebraic Definition]]  
Priority: low · Graph: no · Manim: no

Correct and concise; the reason spin can be half-integer while orbital momentum cannot is stated but not motivated.

- [Intuition] Add one sentence that spin has no coordinate wave function $e^{im\phi}$, so the single-valuedness argument of 09.03 does not apply and the algebra alone allows $s=1/2,3/2,\ldots$; mention that the $2\pi$ sign flip in 10.03 is the observable consequence.
- [Example] Add the spin-1/2 numbers directly: $\lvert\mathbf S\rvert=\hbar\sqrt3/2$ and $S_z=\pm\hbar/2$, so the spin is never aligned with $z$.

### N2096

Note: [[10.02 Spin ½ and the Pauli Matrices|10.02 Spin ½ and the Pauli Matrices]]  
Priority: low · Graph: no · Manim: no

Correct and compact reference for the Pauli matrices and their eigenvectors.

- [Example] Add one worked check, for example $\sigma_x\sigma_y=i\sigma_z$ by explicit multiplication, and the general eigenvector of $\boldsymbol\sigma\cdot\hat{\mathbf n}$ as a bridge to the Bloch sphere note.

### N2097

Note: [[10.03 Bloch Sphere|10.03 Bloch Sphere]]  
Priority: low · Graph: no · Manim: yes

Correct and clear, with an accurate Bloch-sphere figure; the half-angle and the $2\pi$ sign flip could use more intuition.

- [Intuition] Explain why the parametrization uses $\theta/2$: orthogonal states $\lvert+\rangle,\lvert-\rangle$ are antipodal on the sphere, so a Hilbert-space angle of $\pi/2$ maps to a sphere angle of $\pi$.
- [Example] Show the short calculation $\langle\sigma_x\rangle=2\,\mathrm{Re}(\alpha^*\beta)=\sin\theta\cos\phi$ instead of only "direct calculation gives".
- [Manim] Animate $\hat R_z(\alpha)$ for $\alpha$ from $0$ to $4\pi$: the Bloch vector returns after $2\pi$ while a side indicator of the spinor phase $e^{-i\alpha/2}$ shows $-1$ at $2\pi$ and $+1$ at $4\pi$.

### N2098

Note: [[10.04 Larmor Precession|10.04 Larmor Precession]]  
Priority: low · Graph: yes · Manim: yes

Correct with a consistent signed-frequency convention ($\dot\phi=-\omega_L$ matches the figure arrow and exercise 10.07.7); the resonance example is very terse.

- [Manim] Animate the Bloch vector precessing about $\mathbf B$ on a cone for $\omega_L>0$ and $\omega_L<0$, tracing the transverse components as they oscillate; motion is the point of this note.
- [Graph] Plot $\langle S_x\rangle=(\hbar/2)\cos\omega_Lt$ and $\langle S_y\rangle=-(\hbar/2)\sin\omega_Lt$ for $\omega_Lt\in[0,4\pi]$ next to Fig. 10.2.
- [Example] Give numbers: for an electron $\lvert\gamma\rvert/2\pi\approx28\,\mathrm{GHz/T}$ and for a proton $\approx42.6\,\mathrm{MHz/T}$, so a $1.5\,\mathrm{T}$ MRI magnet resonates near $64\,\mathrm{MHz}$.
- [Simplify] In the NMR example, "amplitude grows linearly" is only the short-time limit; mention that at resonance the populations undergo Rabi oscillations at $\Omega=\lvert\gamma\rvert B_1$.

### N2099

Note: [[10.05 Stern–Gerlach Revisited|10.05 Stern–Gerlach Revisited]]  
Priority: low · Graph: no · Manim: yes

Correct and clear description of sequential Stern–Gerlach analyzers.

- [Manim] Animate a beam passing through $z$, $x$, then $z$ analyzers with the blocked beams fading, showing the reappearance of the $-z$ component after the $x$ selection.
- [Example] Add the generalization: an analyzer tilted by angle $\theta$ from $z$ passes $\lvert+z\rangle$ with probability $\cos^2(\theta/2)$, which reduces to $1/2$ for $\theta=\pi/2$.

### N2100

Note: [[10.06 Introduction to Combining Two Spin-½ Systems|10.06 Introduction to Combining Two Spin-½ Systems]]  
Priority: low · Graph: no · Manim: no

Correct and concise introduction; the triplet and singlet states are stated without showing how they are obtained.

- [Example] Show $\hat S_-\lvert++\rangle=\hbar(\lvert-+\rangle+\lvert+-\rangle)$, which gives $\lvert1,0\rangle$ after normalization, and obtain the singlet as the state orthogonal to it.
- [Intuition] Note the exchange symmetry: the triplet is symmetric and the singlet antisymmetric under swapping the particles, which matters for identical fermions.

### N2101

Note: [[10.07 Spin Exercises|10.07 Spin Exercises]]  
Priority: low · Graph: no · Manim: no

Good exercises with correct results (checked 5, 7, 8, 9, 10, and the Berry-phase sign).

- [Links] Link exercise 7 to [[10.04 Larmor Precession]] so the sign convention for $\omega_L$ is traceable.

### N2102

Note: [[Spin in magnetic fields and atomic Zeeman splitting|Spin in magnetic fields and atomic Zeeman splitting]]  
Priority: high · Graph: yes · Manim: no

The physics checked is correct (two-spin Hamiltonian matrix, gauge transformation, spin precession equation, Landé factor, Boyle temperature), but the note mixes unrelated topics and its quantity table is badly inconsistent.

- [Correctness] The physical-quantities table lists $\mechanical{v}$ twice (particle speed and molar volume) and $A,B$ twice (emission coefficients and virial coefficients), includes unused symbols ($\mechanical t_0$, $\Delta\mechanical t$, oscillator $\mechanical x$, $E$ in N, box length $\mechanical L$, $\Delta E,\delta E$), and omits the spin-coupling constant $A$, $a,\tilde a$, $b_i$, $g$, $g_J$, $\mu_B$, $m_j$, $\chi$, $R_{n\ell}$; rebuild it and rename the spin-coupling constant to avoid the clash with $\magnetic{\mathbf A}$ and the virial $A(T)$.
- [Structure] Move "Final exam topics", "Hydrogen radial wavefunction", "Real gases and phase transitions", and "Boyle temperature and virial expansion" to separate notes; they are unrelated to the title.
- [Simplify] State the unit system once (the spin part uses Gaussian units with $c$, the hydrogen part SI) and remove source references such as "on the preceding page", "the homework", and "the handwritten result".
- [Graph] Plot the four eigenvalues of the $4\times4$ Hamiltonian versus $(b_1-b_2)/(A\hbar^2)$ with $b_1+b_2$ fixed, showing the level repulsion between $\lvert1,0\rangle$ and $\lvert0,0\rangle$.
- [Example] Add a Landé example: $g_J=4/3$ for $^2P_{3/2}$ and $g_J=2/3$ for $^2P_{1/2}$, and plot the anomalous Zeeman splitting $\Delta E=g_Jm_j\mu_BB$ versus $B$ for both levels.

### N2103

Note: [[Unitary rotations of spinors and Pauli matrices|Unitary rotations of spinors and Pauli matrices]]  
Priority: high · Graph: no · Manim: yes

The algebra checks out (CG states for $1\otimes1$, the passive rotation $g^\dagger(\mathbf r\cdot\boldsymbol\sigma)g$, $S_+$), but the note is a loose transcription that jumps between spinor rotations, $1\otimes1$ coupling, occupation numbers, photons and hydrogen without a storyline.

- [Correctness] The Physical quantities table lists symbols the note never uses ($\mechanical{L}$ as "Box side length", $c$, and $A$, $B$ as mode emission/absorption coefficients); $\mechanical{L}$ as a length also clashes with the orbital angular momentum $\mechanical{\mathbf L}$ in the same table. Remove these rows.
- [Correctness] In "Spinor rotation" the Cartesian rotation is written $O=e^{-i\phi\widehat{\mathbf n}\cdot\mathbf L}$ with dimensionless generators, while the same letter $\mechanical{\mathbf L}$ is the dimensionful orbital operator elsewhere in the note; rename the $3\times3$ generators (e.g. $\mathcal J_i$) or write $e^{-i\phi\widehat{\mathbf n}\cdot\mechanical{\mathbf L}/\hbar}$.
- [Structure] Move the $\ell_1=\ell_2=1$ coupled states (quintet, triplet, singlet) and the occupation-number / photon paragraph out of the spinor section (they belong in the chapter 11 or 14 notes) and drop the meta remarks about the "handwritten" $\sigma_y$ sign, "the preceding page", and the upper-right entry "reduced to one too early".
- [Intuition] After $e^{-i\phi\sigma_z/2}=\cos(\phi/2)I-i\sin(\phi/2)\sigma_z$, state explicitly that $\phi=2\pi$ gives $-I$ and $\phi=4\pi$ gives $+I$, and that this sign is observable only in interference (neutron interferometry), to make the $SU(2)\to SO(3)$ double cover concrete.
- [Manim] Animate a spin-up Bloch vector rotating about $\hat z$ by $\phi$ from $0$ to $4\pi$ while a side panel shows the spinor phase $e^{-i\phi/2}$ on a unit circle, so the viewer sees the vector return at $2\pi$ while the spinor phase only returns at $4\pi$.
