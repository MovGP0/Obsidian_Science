---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/12 Cosmic Relativity and Quantum Dynamics"
---

> [!TLDR]
> This note tracks the review of the 12 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/12 Cosmic Relativity and Quantum Dynamics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (7 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3684|N3684]] 12 References: Entry 5 is garbled: "A tribute to G., ed. by G. Umesh et al. (Ramachandran, ...)" should read "A tribute to G. Ramachandran, ed. by G. Umesh et al. (Sriranga Digital Software Technologies, ...)"; entry 18's title is *The Principles of Quantum Mechanics*. **Fixed:** Entry 5 now reads A tribute to G. Ramachandran, ed. by G. Umesh et al. (Sriranga Digital Software Technologies, ...); entry 18 title corrected
- [[#N3686|N3686]] 12.01 Cosmic Relativity and Quantum Dynamics: "$\Delta x\,\Delta p\ge\hbar$" is not the standard bound; for standard deviations the Kennard relation is $\Delta x\,\Delta p\ge\hbar/2$. State it and keep the source's form only as a quoted variant. **Fixed:** Display now gives the Kennard relation >= hbar/2; the source form is stated as an order-of-magnitude variant
- [[#N3687|N3687]] 12.02 The True Nature of the Schrodinger Equation: "momentum represented in the source by $i\hbar\nabla$" has the wrong sign; the position-space operator is $\hat{\mathbf p}=-i\hbar\nabla$, and the sign fixes the direction of the probability current in (12.10). **Fixed:** Text now gives p = -i hbar nabla and notes the source sign error
- [[#N3687|N3687]] 12.02 The True Nature of the Schrodinger Equation: "The two path probabilities are written as $a^2$ and $b^2$" (and the coefficients $a,b,c$ in (12.16)) treat complex amplitudes as real; the probabilities are $|a|^2$ and $|b|^2$. **Fixed:** Changed to squared moduli abs(a)^2 and abs(b)^2 in the text and described a, b, c as complex weights in the table
- [[#N3689|N3689]] 12.04 The Quantum Interference of Single Particles: Symbol clash: $a,b$ are both the path weights and the labels in $S(a)$, $S(b)$, and (12.22) defines $\zeta_B$ while (12.23)–(12.24) use $\zeta$. Write $S_1,S_2$ for the path actions and use one name for the combined wave. **Fixed:** Renamed S(a), S(b) to S_1, S_2 throughout (also in the two action contributions), renamed zeta_B to zeta, and updated the table
- [[#N3692|N3692]] 12.07 The Minuteness of the Quantum Zero-Point Energy: Symbol clash: $p$ is momentum ($p$, $p_0$) and also pressure ($p=-\rho c^2$) in the same note; rename the pressure $P$. **Fixed:** Renamed the pressure to P (\energy{P}) in the text and table
- [[#N3693|N3693]] 12.08 The Dirac Equation and Relativity: "$\hat p_j=i\hbar\,\partial/\partial x_j$" has the wrong sign; the operator is $\hat p_j=-i\hbar\,\partial/\partial x_j$. **Fixed:** Text now gives p_j = -i hbar d/dx_j and notes that the source omits the minus sign

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3684 | [[12 References\|12 References]] | Analyzed | low | no | no | [[#N3684\|View]] |
| N3685 | [[12.00 Cosmic Relativity and Quantum Dynamics\|12.00 Cosmic Relativity and Quantum Dynamics]] | Analyzed | low | no | no | [[#N3685\|View]] |
| N3686 | [[12.01 Cosmic Relativity and Quantum Dynamics\|12.01 Cosmic Relativity and Quantum Dynamics]] | Analyzed | medium | no | no | [[#N3686\|View]] |
| N3687 | [[12.02 The True Nature of the Schrodinger Equation\|12.02 The True Nature of the Schrodinger Equation]] | Analyzed | medium | yes | no | [[#N3687\|View]] |
| N3688 | [[12.03 The Law of Motion in the Microscopic Physical World\|12.03 The Law of Motion in the Microscopic Physical World]] | Analyzed | medium | no | no | [[#N3688\|View]] |
| N3689 | [[12.04 The Quantum Interference of Single Particles\|12.04 The Quantum Interference of Single Particles]] | Analyzed | medium | yes | yes | [[#N3689\|View]] |
| N3690 | [[12.05 The Continuity Equation and the Schrodinger Equation\|12.05 The Continuity Equation and the Schrodinger Equation]] | Analyzed | medium | no | no | [[#N3690\|View]] |
| N3691 | [[12.06 L. de Broglie's Non-existent Matter-Waves\|12.06 L. de Broglie's Non-existent Matter-Waves]] | Analyzed | low | no | no | [[#N3691\|View]] |
| N3692 | [[12.07 The Minuteness of the Quantum Zero-Point Energy\|12.07 The Minuteness of the Quantum Zero-Point Energy]] | Analyzed | medium | no | no | [[#N3692\|View]] |
| N3693 | [[12.08 The Dirac Equation and Relativity\|12.08 The Dirac Equation and Relativity]] | Analyzed | medium | yes | no | [[#N3693\|View]] |
| N3694 | [[12.09 Cosmic Relativity and Quantum Mechanics\|12.09 Cosmic Relativity and Quantum Mechanics]] | Analyzed | low | no | no | [[#N3694\|View]] |
| N3695 | [[12.10 Summary\|12.10 Summary]] | Analyzed | low | no | no | [[#N3695\|View]] |

## Suggestions

### N3684

Note: [[12 References|12 References]]  
Priority: low · Graph: no · Manim: no

Reference list with a clear provenance disclaimer.

- [Correctness] Entry 5 is garbled: "A tribute to G., ed. by G. Umesh et al. (Ramachandran, ...)" should read "A tribute to G. Ramachandran, ed. by G. Umesh et al. (Sriranga Digital Software Technologies, ...)"; entry 18's title is *The Principles of Quantum Mechanics*.

### N3685

Note: [[12.00 Cosmic Relativity and Quantum Dynamics|12.00 Cosmic Relativity and Quantum Dynamics]]  
Priority: low · Graph: no · Manim: no

Concise chapter abstract; no change needed apart from navigation.

- [Links] Add a short contents list linking 12.01–12.10 so the abstract works as a hub.

### N3686

Note: [[12.01 Cosmic Relativity and Quantum Dynamics|12.01 Cosmic Relativity and Quantum Dynamics]]  
Priority: medium · Graph: no · Manim: no

Readable introduction, but it quotes the uncertainty relation with the wrong bound and writes the Schrödinger equation in a nonstandard form.

- [Correctness] "$\Delta x\,\Delta p\ge\hbar$" is not the standard bound; for standard deviations the Kennard relation is $\Delta x\,\Delta p\ge\hbar/2$. State it and keep the source's form only as a quoted variant.
- [Simplify] Equation (12.1) uses $d\psi/dt$ for a wavefunction $\psi(\mathbf x,t)$; write $i\hbar\,\partial\psi/\partial t=\hat H\psi$ (or use a state vector $|\psi(t)\rangle$) to avoid suggesting a total derivative along a path.
- [Example] Add one numeric illustration of the action criterion mentioned in Interpretation, for example an electron in a hydrogen orbit ($S\sim\hbar$) compared with a 1 mg dust grain moving at 1 mm/s over 1 mm ($S\sim10^{21}\hbar$).

### N3687

Note: [[12.02 The True Nature of the Schrodinger Equation|12.02 The True Nature of the Schrodinger Equation]]  
Priority: medium · Graph: yes · Manim: no

The continuity-to-Schrödinger derivation (12.6)–(12.14) is algebraically correct and well annotated, but the note is long and has a momentum-operator sign error and real-coefficient normalisations.

- [Correctness] "momentum represented in the source by $i\hbar\nabla$" has the wrong sign; the position-space operator is $\hat{\mathbf p}=-i\hbar\nabla$, and the sign fixes the direction of the probability current in (12.10).
- [Correctness] "The two path probabilities are written as $a^2$ and $b^2$" (and the coefficients $a,b,c$ in (12.16)) treat complex amplitudes as real; the probabilities are $|a|^2$ and $|b|^2$.
- [Simplify] After (12.13), state that $C$ must be real for $iC\psi$ to cancel in the continuity equation, and show the second real equation of the polar decomposition (the Hamilton–Jacobi equation with the quantum potential), which makes concrete why continuity alone does not fix Schrödinger evolution.
- [Graph] Plot $|\langle e^{i\theta}\rangle|=e^{-\sigma^2/2}$ against the Gaussian phase spread $\sigma\in[0,3]\,\mathrm{rad}$ to show why (12.15) does not have unit modulus and why the incoherent limit tends to 0 rather than $\exp(i0)=1$.
- [Structure] Split the 18 KB note: put the measurement and collapse discussion from (12.16) onward under its own heading or a separate note.

### N3688

Note: [[12.03 The Law of Motion in the Microscopic Physical World|12.03 The Law of Motion in the Microscopic Physical World]]  
Priority: medium · Graph: no · Manim: no

The modified Hamilton equation and (12.20) check out algebraically, but key intermediate steps and the meaning of the extra terms are left implicit.

- [Simplify] Before (12.20), show $\nabla^2\zeta=\left[(i/\hbar)\nabla^2S-(\nabla S)^2/\hbar^2\right]\zeta$, so the reader sees where $p^2/2m$ and the imaginary $i\hbar\nabla^2S/2m$ term come from.
- [Simplify] The coefficient $a=-i\hbar c$ introduces a velocity named $c$ that is not light speed; rename it (for example $u$), because $c$ means light speed throughout the Cosmic Relativity notes.
- [Intuition] Show the arithmetic behind "an ant ... about $10^{20}\hbar$ per second": a 10 mg ant at 1 cm/s has kinetic energy $\approx5\times10^{-10}\,\mathrm{J}$, so it accumulates about $5\times10^{24}\hbar$ per second. The source's estimate is conservative, and the numbers make the action criterion tangible.
- [Simplify] Below (12.21), say that the coefficient $i\hbar/2m$ is imaginary, so the equation has the form of a free Schrödinger equation (oscillatory spreading), not real diffusion.

### N3689

Note: [[12.04 The Quantum Interference of Single Particles|12.04 The Quantum Interference of Single Particles]]  
Priority: medium · Graph: yes · Manim: yes

Correct two-path interference algebra, but the labels reuse the amplitude letters and the result is not visualised.

- [Correctness] Symbol clash: $a,b$ are both the path weights and the labels in $S(a)$, $S(b)$, and (12.22) defines $\zeta_B$ while (12.23)–(12.24) use $\zeta$. Write $S_1,S_2$ for the path actions and use one name for the combined wave.
- [Graph] Plot $I(\Delta S/\hbar)=\rho_1+\rho_2+2\sqrt{\rho_1\rho_2}\cos(\Delta S/\hbar)$ for $\Delta S/\hbar\in[0,4\pi]$ with $(\rho_1,\rho_2)=(0.5,0.5)$ and $(0.8,0.2)$, showing how visibility $2\sqrt{\rho_1\rho_2}/(\rho_1+\rho_2)$ falls for unequal weights.
- [Manim] Animate single detection dots arriving one at a time on a screen and gradually building the $\cos^2$ fringe envelope, which shows the "repeated histories accumulate a pattern" statement directly.
- [Intuition] Next to the existing note on maxima above one, add that the screen-normalised probability density is $I(x)/\int I\,dx$, so the fringe pattern itself is unchanged.

### N3690

Note: [[12.05 The Continuity Equation and the Schrodinger Equation|12.05 The Continuity Equation and the Schrodinger Equation]]  
Priority: medium · Graph: no · Manim: no

The Kennard force law (12.25) is transcribed with the correct sign, but the quantum potential is never named or written separately.

- [Simplify] Define $Q=-\sum_i\frac{\hbar^2}{2m_i}\frac{\nabla_i^2A}{A}$ and write (12.25) as $m_j\dot{\mathbf v}_j=-\nabla_j(V+Q)$; this names the "quantum force" in the Kennard quote.
- [Intuition] Add the product-state check suggested in Interpretation: for $\psi=\psi_1(x_1)\psi_2(x_2)$, $A$ factorises and the force on particle $j$ depends only on $x_j$. Only entangled states couple distant coordinates, which pins down exactly what the nonlocality debate is about.

### N3691

Note: [[12.06 L. de Broglie's Non-existent Matter-Waves|12.06 L. de Broglie's Non-existent Matter-Waves]]  
Priority: low · Graph: no · Manim: no

Clear historical narrative, with a symbol for the spatial period that differs from the rest of the chapter.

- [Simplify] The spatial period is $l=h/p$ here but $\lambda=h/p$ in 12.04; use one symbol across the chapter.
- [Example] Anchor the relation with two measured cases: a 100 eV electron has $h/p\approx0.123\,\mathrm{nm}$ (crystal diffraction), and a C$_{60}$ molecule at 200 m/s has $h/p\approx2.8\,\mathrm{pm}$ (molecule interferometry).

### N3692

Note: [[12.07 The Minuteness of the Quantum Zero-Point Energy|12.07 The Minuteness of the Quantum Zero-Point Energy]]  
Priority: medium · Graph: no · Manim: no

Short and readable, but it uses one letter for two quantities, leaves the action condition unexplained, and gives no numerical example.

- [Correctness] Symbol clash: $p$ is momentum ($p$, $p_0$) and also pressure ($p=-\rho c^2$) in the same note; rename the pressure $P$.
- [Simplify] Replace the unexplained "$S=Np\,l\pm\hbar$" with the Bohr–Sommerfeld condition $\oint p\,dx=2pl=nh$, which gives $p_n=nh/(2l)$ and the stated ground-state momentum $p_0=h/(2l)$ (the infinite-well result).
- [Example] Evaluate the claim: an electron in a 1 nm well has $E_0=h^2/(8ml^2)\approx0.38\,\mathrm{eV}$, against a rest energy of 511 keV.
- [Intuition] In Interpretation, name the Casimir force as the standard measured effect that any "no vacuum ZPE" account must reproduce.

### N3693

Note: [[12.08 The Dirac Equation and Relativity|12.08 The Dirac Equation and Relativity]]  
Priority: medium · Graph: yes · Manim: no

Carefully annotated transcription; the 4×4 eigenvalue claim is correct but unproved, and the momentum operator has the wrong sign.

- [Correctness] "$\hat p_j=i\hbar\,\partial/\partial x_j$" has the wrong sign; the operator is $\hat p_j=-i\hbar\,\partial/\partial x_j$.
- [Simplify] Prove the eigenvalue statement in one line: (12.33) has block form $\begin{bmatrix}\hbar\Omega&M\\M&-\hbar\Omega\end{bmatrix}$ with $M=\mu\boldsymbol\sigma\cdot\mathbf B$, $M^2=\mu^2B^2$, so $H^2=(\hbar^2\Omega^2+\mu^2B^2)\mathbb 1$ and each sign of $E_\pm$ is doubly degenerate. This also explains "two energy values rather than four".
- [Graph] Plot $E_\pm=\pm\sqrt{(\hbar\Omega)^2+(\mu B)^2}$ against $\mu B/\hbar\Omega\in[-3,3]$ together with the additive tensor-product levels $\pm\hbar\Omega\pm\mu B$, to visualise the avoided crossing and the difference the Interpretation section describes.
- [Simplify] Rewrite (12.41)–(12.42) with $\hbar\Omega$ instead of reusing $\Omega$ as an energy, so the duplicate table row for $\Omega$ can be removed.

### N3694

Note: [[12.09 Cosmic Relativity and Quantum Mechanics|12.09 Cosmic Relativity and Quantum Mechanics]]  
Priority: low · Graph: no · Manim: no

Brief statement of the claimed gravitational phase coupling with a useful relative-phase caveat.

- [Example] Add the neutron gravity-interferometer (COW) phase $\Delta\phi=mg\,\Delta h\,T/\hbar$ for two paths at heights differing by $\Delta h$, as a concrete measured relative gravitational phase against which the claim can be checked.

### N3695

Note: [[12.10 Summary|12.10 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate chapter summary; the schematic phase integrals lack the factors that make them dimensionless phases.

- [Simplify] Write the phase terms as $(mc^2/\hbar)\int g_{00}\,dt$ and $(mc/\hbar)\int g_{0i}\,dx^i$; as printed, $\int m g_{00}\,dt$ has units kg·s, not action.
- [Links] Link each summarised result to its section (12.02 ensemble equation, 12.03 modified Hamilton equation, 12.07 ZPE, 12.08 Dirac analogy).
