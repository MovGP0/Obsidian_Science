---
title: "Note Improvement Tracker – 02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/04 Schrödinger Equation"
---

> [!TLDR]
> This note tracks the review of the 9 notes in `02 Physics/03 Quantum Mechanics/02 Quantum Mechanics Course/04 Schrödinger Equation`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found no possible errors in this folder.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2037 | [[04.00 Schrödinger Equation\|04.00 Schrödinger Equation]] | Analyzed | low | no | no | [[#N2037\|View]] |
| N2038 | [[04.01 From Unitary Time Evolution to the Equation\|04.01 From Unitary Time Evolution to the Equation]] | Analyzed | low | no | no | [[#N2038\|View]] |
| N2039 | [[04.02 Time-Independent Schrödinger Equation\|04.02 Time-Independent Schrödinger Equation]] | Analyzed | medium | yes | yes | [[#N2039\|View]] |
| N2040 | [[04.03 Probability Conservation and Current\|04.03 Probability Conservation and Current]] | Analyzed | medium | no | yes | [[#N2040\|View]] |
| N2041 | [[04.04 Wave Packets\|04.04 Wave Packets]] | Analyzed | medium | yes | yes | [[#N2041\|View]] |
| N2042 | [[04.05 Heisenberg Picture\|04.05 Heisenberg Picture]] | Analyzed | medium | no | no | [[#N2042\|View]] |
| N2043 | [[04.06 Ehrenfest Theorem\|04.06 Ehrenfest Theorem]] | Analyzed | low | yes | no | [[#N2043\|View]] |
| N2044 | [[04.07 Symmetries and Conserved Quantities\|04.07 Symmetries and Conserved Quantities]] | Analyzed | low | no | no | [[#N2044\|View]] |
| N2045 | [[04.08 Schrödinger Equation Exercises\|04.08 Schrödinger Equation Exercises]] | Analyzed | low | no | no | [[#N2045\|View]] |

## Suggestions

### N2037

Note: [[04.00 Schrödinger Equation|04.00 Schrödinger Equation]]  
Priority: low · Graph: no · Manim: no

Correct chapter hub; summary formulas (current, Gaussian spreading, Ehrenfest, Heisenberg equation) check out.

- [Structure] Macro use differs from the section notes: the hub writes $\mechanical{\hbar}$ and an uncolored $\hat x$ in the Ehrenfest bullet, while 04.01–04.03 use plain $\hbar$ and $\mechanical{x}$; align with the section notes.
- [Links] Link each summary bullet to its section note (04.01–04.07).

### N2038

Note: [[04.01 From Unitary Time Evolution to the Equation|04.01 From Unitary Time Evolution to the Equation]]  
Priority: low · Graph: no · Manim: no

Correct and clear derivation; the Hermiticity step is compressed.

- [Simplify] Write out the Hermiticity step: differentiating $\hat U\hat U^\dagger=\hat I$ with Eq. (4.1) and its adjoint gives $(\hat H-\hat H^\dagger)/(i\hbar)=0$ after using $\hat U\hat U^\dagger=\hat I$, hence $\hat H=\hat H^\dagger$.
- [Example] Add a two-level worked example of Eq. (4.2), e.g. $\hat H=\hbar\omega\sigma_x/2$ acting on $\lvert\uparrow\rangle$, giving $\cos(\omega t/2)\lvert\uparrow\rangle-i\sin(\omega t/2)\lvert\downarrow\rangle$, to show how the spectral expansion produces dynamics.

### N2039

Note: [[04.02 Time-Independent Schrödinger Equation|04.02 Time-Independent Schrödinger Equation]]  
Priority: medium · Graph: yes · Manim: yes

Correct and clear; the superposition example would gain much from a concrete system and a visualization of the beating density.

- [Example] Make the superposition example concrete with the infinite well of width $L$: $\psi_n=\sqrt{2/L}\sin(n\pi x/L)$, $E_n=n^2\pi^2\hbar^2/(2mL^2)$, so $\omega_{21}=3\pi^2\hbar/(2mL^2)$, and show that $\langle x\rangle(t)$ oscillates at $\omega_{21}$.
- [Graph] Plot $\lvert\psi(x,t)\rvert^2$ for the infinite-well $n=1,2$ superposition at $\omega_{21}t=0,\pi/2,\pi$ on $x/L\in[0,1]$, showing the density sloshing from one side to the other.
- [Manim] Animate the same density over one beat period $2\pi/\omega_{21}$ with a moving marker for $\langle x\rangle(t)$, contrasted with a stationary $n=1$ density.
- [Intuition] In the bound/scattering bullets, add one sentence explaining why bound energies are discrete (the solution must decay on both sides, which only selected $E$ allow), linking to the one-dimensional-systems chapter.

### N2040

Note: [[04.03 Probability Conservation and Current|04.03 Probability Conservation and Current]]  
Priority: medium · Graph: no · Manim: yes

Correct derivation and plane-wave example; the reflection/transmission paragraph is dense prose without formulas, and the source link points to a less relevant heading.

- [Simplify] Show the intermediate identity $\psi^*\nabla^2\psi-\psi\nabla^2\psi^*=\nabla\cdot(\psi^*\nabla\psi-\psi\nabla\psi^*)$, which is the key step that turns the subtraction into a divergence.
- [Example] Replace the reflection-probability prose with formulas for a step: $\psi=e^{ikx}+re^{-ikx}$ for $x<0$ and $te^{iqx}$ for $x>0$, giving $R=\lvert r\rvert^2$, $T=(q/k)\lvert t\rvert^2$, and $R+T=1$ from constant $J$.
- [Links] The source link targets `#Free particle`, but the flux and reflection material in that note is under the headings "Flux density" and "Reflection and transmission"; link there instead.
- [Structure] Use the same macros as the hub 04.00 ($\signal{\rho}$, $\signal{\mathbf J}$) or make the hub match this note; currently $\rho$ and $\vec J$ are uncolored here and colored in 04.00.
- [Manim] Animate a Gaussian packet hitting a step, showing the density and the current $J(x,t)$ together with running totals of probability on each side converging to $R$ and $T$.

### N2041

Note: [[04.04 Wave Packets|04.04 Wave Packets]]  
Priority: medium · Graph: yes · Manim: yes

Correct and compact (Gaussian width law, figure parameters, and electron and 1 kg spreading times all check out), but the spreading mechanism and the meaning of phase versus group velocity are stated rather than explained.

- [Simplify] In "Spreading of a Gaussian packet", replace "Different Fourier components propagate with different group velocities" with the precise statement: the spectrum has width $\Delta k=1/(2\sigma)$, so the velocities $\hbar k/m$ spread by $\Delta v=\hbar/(2m\sigma)$, which gives $\sigma(t)\approx\Delta v\,t$ at large $t$. This also derives the asymptote quoted in the text.
- [Intuition] State the trade-off explicitly: a narrower initial packet (small $\sigma$) spreads faster because $t_*=2m\sigma^2/\hbar$. Link this to the uncertainty relation $\Delta x\,\Delta p=\hbar/2$ at $t=0$.
- [Graph] Add a 2D plot of $\sigma(t)/\sigma=\sqrt{1+(t/t_*)^2}$ against $t/t_*$ on $[0,5]$, with the asymptote $t/t_*$ dashed, to show the crossover from no spreading to linear spreading.
- [Manim] Animate $\mathrm{Re}\,\psi(x,t)$ and $|\psi|$ for a Gaussian packet with $k_0\sigma\approx5$: the carrier crests move at $v_g/2$ and slip backward through the envelope, which moves at $v_g$ and broadens.
- [Simplify] Mention briefly why $v_f=v_g/2$ is not a paradox: the phase velocity has no physical signal content and depends on the arbitrary zero of energy.

### N2042

Note: [[04.05 Heisenberg Picture|04.05 Heisenberg Picture]]  
Priority: medium · Graph: no · Manim: no

Correct and brief, but it omits the short derivation of the Heisenberg equation and of Eqs. (4.6) and (4.7), and the first sentence is garbled.

- [Simplify] Fix the opening sentence "operators have only any explicit time dependence". Write it as "operators carry only their explicit time dependence, if any".
- [Example] Show the one-line derivation $d\hat A_H/dt=(i/\hbar)\hat U^\dagger[\hat H,\hat A]\hat U+(\partial_t\hat A)_H$ from $i\hbar\,\partial_t\hat U=\hat H\hat U$. Also show the two commutators $[\hat x,\hat p^2]=2i\hbar\hat p$ and $[\hat p,V(\hat x)]=-i\hbar V'(\hat x)$ that give Eqs. (4.6) and (4.7).
- [Example] Add the free-particle solution $\hat x_H(t)=\hat x+\hat p\,t/m$. It gives $\Delta x(t)^2$ directly and links back to the packet spreading in 04.04.
- [Structure] Colour $\hat x_H$ consistently with $\hat p_H$, using \mechanical{} for both or for neither. At present the momentum is coloured and the position is not.

### N2043

Note: [[04.06 Ehrenfest Theorem|04.06 Ehrenfest Theorem]]  
Priority: low · Graph: yes · Manim: no

Clear and correct; the key subtlety $\langle V'(\hat x)\rangle\ne V'(\langle\hat x\rangle)$ is stated but has no worked illustration.

- [Example] Make the nonlinear-force caveat concrete. For $V=\lambda x^4$, show that $\langle V'\rangle=4\lambda(\langle x\rangle^3+3\langle x\rangle\,\Delta x^2+\langle(x-\langle x\rangle)^3\rangle)$. The correction terms vanish only as $\Delta x\to0$.
- [Graph] Plot a double-well $V(x)$ together with a Gaussian density centred on the barrier top, and mark $-V'(\langle x\rangle)=0$ against a nonzero $-\langle V'\rangle$ for an off-centre packet. This illustrates the "packet spread over a barrier" sentence.
- [Simplify] In the derivation, note that $[\hat x,V(\hat x)]=0$ and $[\hat p,\hat p^2]=0$. These explain why only one term survives in each commutator.

### N2044

Note: [[04.07 Symmetries and Conserved Quantities|04.07 Symmetries and Conserved Quantities]]  
Priority: low · Graph: no · Manim: no

Correct and concise, but it ends with an unrelated "Physical meaning" section about probability amplitudes.

- [Structure] Move the "Physical meaning" paragraph about amplitudes and state reduction to the chapter hub (04.00) or delete it. It does not concern symmetries. If the note keeps a meaning section, use it to explain why commuting with $\hat H$ fixes the whole outcome distribution: the eigenbasis of $\hat A$ can be chosen to be stationary.
- [Intuition] Add one sentence linking each example to its symmetry: translation invariance gives momentum, rotation invariance gives angular momentum, and reflection invariance gives parity. This prepares the Noether link.

### N2045

Note: [[04.08 Schrödinger Equation Exercises|04.08 Schrödinger Equation Exercises]]  
Priority: low · Graph: no · Manim: no

A well-formed exercise list; the given results (current, norm decay, propagator) are correct.

- [Structure] Exercise 11: state that the squared norm decays as $e^{-\gamma t}$, matching the table entry for $\gamma$, so that a reader does not confuse $\gamma$ with the amplitude decay rate.
