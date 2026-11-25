---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/13 Cosmic Gravity and the Quantum Spin"
---

> [!TLDR]
> This note tracks the review of the 15 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/13 Cosmic Gravity and the Quantum Spin`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 10 possible errors or notation conflicts. 10 of them are verified (10 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3696|N3696]] 13 References: Fix the entries that can be verified: Pauli 1940 is Phys. Rev. **58**, 716–722 (not 48); Berry 1984 is Proc. R. Soc. Lond. A **392**, 45–57; Uhlenbeck's initial is G.; Duck and Sudarshan, Am. J. Phys. **66**, 284 is 1998; "Lamoroux" is Lamoreaux; Bose, Z. Phys. **26** starts on page 178. **Fixed:** Applied all six corrections (Bose page range now 178-181)
- [[#N3697|N3697]] 13.00 Cosmic Gravity and the Quantum Spin: "the source writes the electromagnetic coupling as $E=\boldsymbol\mu\cdot\mathbf B$"; the dipole energy is $E=-\boldsymbol\mu\cdot\mathbf B$, which matters because the gravitational analogy is built on it. **Fixed:** Text now gives E = -mu.B and notes that the source omits the minus sign
- [[#N3697|N3697]] 13.00 Cosmic Gravity and the Quantum Spin: Torque (13.3) $\mathbf T=\mathbf s\times\mathbf B_g/2$ does not follow from energy (13.2): $H=\tfrac12\mathbf s\cdot\mathbf B_g=-\mathbf s\cdot\boldsymbol\Omega$ gives $d\mathbf s/dt=\tfrac12\mathbf B_g\times\mathbf s=-\boldsymbol\Omega\times\mathbf s$, the familiar apparent precession of a free gyroscope in a rotating frame, whereas (13.3) gives the opposite sign. **Fixed:** Verified via Heisenberg equation ds/dt = (1/2)B_g x s = -Omega x s; (13.3) now reads T = ds/dt = (1/2)B_g x s = -Omega x s with a sentence on the source sign; 13.02 (not in batch) still says the order in (13.3) gives the opposite direction and needs a wording update
- [[#N3698|N3698]] 13.01 The Physical Meaning of Spin: The table calls $s$ the "magnitude", but the text uses $s=\hbar/2$ as the maximal projection ($+s,\dots,-s$); the magnitude of spin-½ angular momentum is $\sqrt{s(s+1)}\,\hbar=(\sqrt3/2)\hbar$. Distinguish the quantum number $s$, the magnitude, and the projection $m_s\hbar$. **Fixed:** Added a sentence that s is the maximal projection and the spin-1/2 magnitude is (√3/2)ħ; table now separates maximal projection s, vector magnitude S, and projection S_n
- [[#N3699|N3699]] 13.02 Spin as the Fundamental Gravitomagnetic Moment: (13.6) $d\mathbf s/dt=\tfrac12\mathbf s\times\mathbf B_g$ is inconsistent with (13.5): the Heisenberg or Poisson equation from $H=\tfrac12\mathbf s\cdot\mathbf B_g$ gives $d\mathbf s/dt=\tfrac12\mathbf B_g\times\mathbf s=-\tfrac12\mathbf s\times\mathbf B_g$. **Fixed:** Heisenberg equation checked (ds/dt = ½ B_g × s); changed (13.6) to ½ B_g × s and added a sentence that the source order (also in 13.00 eq. 13.3, not in this batch) gives the opposite precession direction
- [[#N3700|N3700]] 13.03 Cosmic Gravitational Effects on Spin: With $\mathbf s=\hbar\boldsymbol\sigma/2$, the derived term $\hbar\boldsymbol\sigma\cdot\boldsymbol\Omega$ in (13.10) equals $2\,\mathbf s\cdot\boldsymbol\Omega$, not "$+\mathbf s\cdot\boldsymbol\Omega$". The minimal-coupling route gives a gyrogravitational factor 2, like $g=2$, which conflicts in magnitude as well as sign with (13.2) $E_g=-\mathbf s\cdot\boldsymbol\Omega$. State this explicitly instead of the vague normalisation note. **Fixed:** Re-derived Π×Π term (gives -ħσ·B_g/2 = +ħσ·Ω); extended the sign note to state the term is +2 s·Ω, a gyrogravitational factor 2, disagreeing with (13.2) in sign and magnitude
- [[#N3701|N3701]] 13.03.01 Emphasising the Spin-Phase Puzzle: Here $\mathbf B_g=+2\boldsymbol\omega$ and $E_g=+\mathbf s\cdot\boldsymbol\omega$, whereas 13.00 and 13.02 use $\mathbf B_g=-2\boldsymbol\Omega$ and $E_g=-\mathbf s\cdot\boldsymbol\Omega$; state the orientation of $\boldsymbol\omega$ relative to the orbit so that the signs agree within the chapter. **Fixed:** Added to the note that the signs agree with (13.1)-(13.2) only if ω = -Ω is the cosmic-matter angular velocity relative to the orbital frame (opposite to the orbital angular velocity); phase magnitude unaffected
- [[#N3704|N3704]] 13.04 Spin Transport in Chiral Molecules and Spintronics: Equating the per-state energy $\hbar\Omega/2$ ($=s\Omega$ with $s=\hbar/2$) with the per-state Zeeman energy $\tfrac g2\mu_BB=\mu_BB$ gives $B=\hbar\Omega/(2\mu_B)=mv/(er)\approx5.7\times10^3\,\mathrm{T}$. The printed $B_{eq}=\hbar\Omega/(2g_m\mu_B)$ and $B_f=mv/(2er)\approx2.8\times10^3\,\mathrm{T}$ set a per-state energy equal to the full splitting $g\mu_BB$ and halve the field. **Fixed:** Recomputed B = mv/(er) ≈ 5.7e3 T; changed B_eq to ħΩ/(g_m μ_B), the B_f equality to (g/2)μ_B B_f = eħB_f/(2m), B_f to mv/(er) ≈ 5.7×10³ T, and rewrote both notes to record the source's halved forms
- [[#N3704|N3704]] 13.04 Spin Transport in Chiral Molecules and Spintronics: Room-temperature thermal energy is $k_BT\approx4.1\times10^{-21}\,\mathrm{J}=0.026\,\mathrm{eV}$, not $3\times10^{-21}\,\mathrm{J}$; the ratio to 0.66 eV is about 25. **Fixed:** Replaced 3e-21 J / 30 times with k_BT ≈ 4.1×10⁻²¹ J ≈ 0.026 eV and about 25 times; table thermal-energy symbol set to k_BT
- [[#N3706|N3706]] 13.05.01 The Dawn of the Spin-Statistics Connection: "Dirac named the integer-spin particles bosons ... in his 1926 paper" is wrong: Dirac coined both "fermion" and "boson" in a 1945 lecture. His 1926 paper derived the antisymmetric (Fermi–Dirac) statistics. **Fixed:** Sentence now says the 1926 paper derived the antisymmetric statistics and Dirac introduced the names fermion and boson in a 1945 lecture

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3696 | [[13 References\|13 References]] | Analyzed | low | no | no | [[#N3696\|View]] |
| N3697 | [[13.00 Cosmic Gravity and the Quantum Spin\|13.00 Cosmic Gravity and the Quantum Spin]] | Analyzed | medium | no | no | [[#N3697\|View]] |
| N3698 | [[13.01 The Physical Meaning of Spin\|13.01 The Physical Meaning of Spin]] | Analyzed | low | no | no | [[#N3698\|View]] |
| N3699 | [[13.02 Spin as the Fundamental Gravitomagnetic Moment\|13.02 Spin as the Fundamental Gravitomagnetic Moment]] | Analyzed | medium | no | yes | [[#N3699\|View]] |
| N3700 | [[13.03 Cosmic Gravitational Effects on Spin\|13.03 Cosmic Gravitational Effects on Spin]] | Analyzed | medium | no | no | [[#N3700\|View]] |
| N3701 | [[13.03.01 Emphasising the Spin-Phase Puzzle\|13.03.01 Emphasising the Spin-Phase Puzzle]] | Analyzed | medium | no | no | [[#N3701\|View]] |
| N3702 | [[13.03.02 The Thomas Precession in Atoms and the Spectral Fine Structure\|13.03.02 The Thomas Precession in Atoms and the Spectral Fine Structure]] | Analyzed | medium | no | no | [[#N3702\|View]] |
| N3703 | [[13.03.03 Geometric Phases and Cosmic Gravity\|13.03.03 Geometric Phases and Cosmic Gravity]] | Analyzed | medium | yes | yes | [[#N3703\|View]] |
| N3704 | [[13.04 Spin Transport in Chiral Molecules and Spintronics\|13.04 Spin Transport in Chiral Molecules and Spintronics]] | Analyzed | medium | no | no | [[#N3704\|View]] |
| N3705 | [[13.05 Bosons, Fermions, and the Proof of the Spin-Statistics Connection\|13.05 Bosons, Fermions, and the Proof of the Spin-Statistics Connection]] | Analyzed | low | no | no | [[#N3705\|View]] |
| N3706 | [[13.05.01 The Dawn of the Spin-Statistics Connection\|13.05.01 The Dawn of the Spin-Statistics Connection]] | Analyzed | low | yes | no | [[#N3706\|View]] |
| N3707 | [[13.05.02 Pauli's Proof and His Inconclusive Tryst with the SSC\|13.05.02 Pauli's Proof and His Inconclusive Tryst with the SSC]] | Analyzed | low | no | no | [[#N3707\|View]] |
| N3708 | [[13.05.03 Physical Proofs of the Spin-Statistics Connection\|13.05.03 Physical Proofs of the Spin-Statistics Connection]] | Analyzed | low | no | no | [[#N3708\|View]] |
| N3709 | [[13.06 The Proof of the Spin-Statistics Connection\|13.06 The Proof of the Spin-Statistics Connection]] | Analyzed | medium | no | yes | [[#N3709\|View]] |
| N3710 | [[13.07 Summary\|13.07 Summary]] | Analyzed | low | no | no | [[#N3710\|View]] |

## Suggestions

### N3696

Note: [[13 References|13 References]]  
Priority: low · Graph: no · Manim: no

Reference list with an explicit not-verified disclaimer; several entries are verifiably wrong.

- [Correctness] Fix the entries that can be verified: Pauli 1940 is Phys. Rev. **58**, 716–722 (not 48); Berry 1984 is Proc. R. Soc. Lond. A **392**, 45–57; Uhlenbeck's initial is G.; Duck and Sudarshan, Am. J. Phys. **66**, 284 is 1998; "Lamoroux" is Lamoreaux; Bose, Z. Phys. **26** starts on page 178.

### N3697

Note: [[13.00 Cosmic Gravity and the Quantum Spin|13.00 Cosmic Gravity and the Quantum Spin]]  
Priority: medium · Graph: no · Manim: no

Good overview of the gravitomagnetic spin proposal, but the electromagnetic comparison and the torque formula carry sign errors.

- [Correctness] "the source writes the electromagnetic coupling as $E=\boldsymbol\mu\cdot\mathbf B$"; the dipole energy is $E=-\boldsymbol\mu\cdot\mathbf B$, which matters because the gravitational analogy is built on it.
- [Correctness] Torque (13.3) $\mathbf T=\mathbf s\times\mathbf B_g/2$ does not follow from energy (13.2): $H=\tfrac12\mathbf s\cdot\mathbf B_g=-\mathbf s\cdot\boldsymbol\Omega$ gives $d\mathbf s/dt=\tfrac12\mathbf B_g\times\mathbf s=-\boldsymbol\Omega\times\mathbf s$, the familiar apparent precession of a free gyroscope in a rotating frame, whereas (13.3) gives the opposite sign.
- [Simplify] The metric components use $\omega$ and (13.1)–(13.2) use $\Omega$ for the same frame rotation; use one symbol.
- [Intuition] Give the scale: for Earth's $\Omega=7.29\times10^{-5}\,\mathrm{rad/s}$, an electron's $\hbar\Omega/2\approx3.8\times10^{-39}\,\mathrm{J}\approx2.4\times10^{-20}\,\mathrm{eV}$, which shows how small the spin–rotation energy is in laboratory frames.

### N3698

Note: [[13.01 The Physical Meaning of Spin|13.01 The Physical Meaning of Spin]]  
Priority: low · Graph: no · Manim: no

Clear basic account of spin, but the symbol $s$ is used for both magnitude and maximal projection.

- [Correctness] The table calls $s$ the "magnitude", but the text uses $s=\hbar/2$ as the maximal projection ($+s,\dots,-s$); the magnitude of spin-½ angular momentum is $\sqrt{s(s+1)}\,\hbar=(\sqrt3/2)\hbar$. Distinguish the quantum number $s$, the magnitude, and the projection $m_s\hbar$.
- [Simplify] $S_n=S\cos\theta$ introduces $S$ for the magnitude while the table and the rest of the note use $s$; pick one.
- [Example] Add the spin-1 case (projections $+\hbar,0,-\hbar$) next to spin ½ to show the $\hbar$ spacing rule.

### N3699

Note: [[13.02 Spin as the Fundamental Gravitomagnetic Moment|13.02 Spin as the Fundamental Gravitomagnetic Moment]]  
Priority: medium · Graph: no · Manim: yes

Short and clear, but the precession equation has the opposite sign to the stated interaction energy.

- [Correctness] (13.6) $d\mathbf s/dt=\tfrac12\mathbf s\times\mathbf B_g$ is inconsistent with (13.5): the Heisenberg or Poisson equation from $H=\tfrac12\mathbf s\cdot\mathbf B_g$ gives $d\mathbf s/dt=\tfrac12\mathbf B_g\times\mathbf s=-\tfrac12\mathbf s\times\mathbf B_g$.
- [Manim] Animate two spin vectors of different length precessing about $\mathbf B_g$ at the same rate $B_g/2$, to show the claimed magnitude independence (the analogue of the weak equivalence principle).
- [Intuition] State the analogy explicitly: $\gamma=gq/2m$ for magnetic precession versus a "gyrogravitational" ratio $1/2$ here, so the reader sees why charge-to-mass drops out.

### N3700

Note: [[13.03 Cosmic Gravitational Effects on Spin|13.03 Cosmic Gravitational Effects on Spin]]  
Priority: medium · Graph: no · Manim: no

The Pauli-equation algebra is sound in structure and well annotated, but the stated interaction energy is off by a factor two from the derived term.

- [Correctness] With $\mathbf s=\hbar\boldsymbol\sigma/2$, the derived term $\hbar\boldsymbol\sigma\cdot\boldsymbol\Omega$ in (13.10) equals $2\,\mathbf s\cdot\boldsymbol\Omega$, not "$+\mathbf s\cdot\boldsymbol\Omega$". The minimal-coupling route gives a gyrogravitational factor 2, like $g=2$, which conflicts in magnitude as well as sign with (13.2) $E_g=-\mathbf s\cdot\boldsymbol\Omega$. State this explicitly instead of the vague normalisation note.
- [Intuition] Mention that the spin–rotation coupling $H=-\mathbf s\cdot\boldsymbol\Omega$ (Mashhoon) is a standard rotating-frame result and has been measured with neutrons (Demirel et al., New J. Phys. 17, 023065, 2015); this gives the reader a benchmark for the factor and sign.
- [Simplify] Introduce $\boldsymbol\Pi\times\boldsymbol\Pi=i\hbar(e\mathbf B+m\nabla\times\mathbf A_g)$ as a separate displayed step before (13.10); this makes both spin terms follow from one commutator.

### N3701

Note: [[13.03.01 Emphasising the Spin-Phase Puzzle|13.03.01 Emphasising the Spin-Phase Puzzle]]  
Priority: medium · Graph: no · Manim: no

The phase arithmetic (13.12)–(13.13) checks out for one cyclotron period, but the sign convention differs from the rest of the chapter and the standard Pauli resolution is missing.

- [Correctness] Here $\mathbf B_g=+2\boldsymbol\omega$ and $E_g=+\mathbf s\cdot\boldsymbol\omega$, whereas 13.00 and 13.02 use $\mathbf B_g=-2\boldsymbol\Omega$ and $E_g=-\mathbf s\cdot\boldsymbol\Omega$; state the orientation of $\boldsymbol\omega$ relative to the orbit so that the signs agree within the chapter.
- [Intuition] Show the Pauli Landau spectrum $E=(n+\tfrac12)\hbar\omega_c\pm\tfrac g2\cdot\tfrac12\hbar\omega_c$: for $g=2$ the Zeeman term cancels or doubles the zero-point term, giving $n\hbar\omega_c$ and $(n+1)\hbar\omega_c$. This is where the "extra π" sits in standard theory.
- [Simplify] In (13.12), evaluate over one period ($\oint dt=2\pi/\omega$) to get $\pi$, and drop or explain the final "$=\pi\Phi/\Phi_0=\pi n$" step, which reintroduces the orbital integer.

### N3702

Note: [[13.03.02 The Thomas Precession in Atoms and the Spectral Fine Structure|13.03.02 The Thomas Precession in Atoms and the Spectral Fine Structure]]  
Priority: medium · Graph: no · Manim: no

The key results (13.14) circular limit and (13.15)–(13.17) with the factor $(g-1)$ are algebraically consistent, but Gaussian and SI conventions are mixed.

- [Simplify] Quote the standard Thomas result $\boldsymbol\omega_T=\frac{\gamma^2}{\gamma+1}\frac{\mathbf a\times\mathbf v}{c^2}\approx-\frac{\mathbf v\times\mathbf a}{2c^2}$ next to (13.14), so the reader can see that the source's expression matches it to first order.
- [Structure] Rewrite (13.15)–(13.17) in SI with $1/(4\pi\varepsilon_0)$ and $\mu_B=e\hbar/2m$ and use $\langle r^{-3}\rangle$; this removes the convention note and the extra $e$ in the induced-field expression.
- [Example] Anchor the magnitude: the hydrogen $2p_{3/2}$–$2p_{1/2}$ splitting is about 10.9 GHz ($4.5\times10^{-5}\,\mathrm{eV}$), and the sodium D doublet in Fig. 13.3 corresponds to about 2.1 meV.

### N3703

Note: [[13.03.03 Geometric Phases and Cosmic Gravity|13.03.03 Geometric Phases and Cosmic Gravity]]  
Priority: medium · Graph: yes · Manim: yes

The polarisation-rotation algebra (13.19) is correct, but the link between $-2\pi\cos\theta$ and the solid-angle phase is only asserted.

- [Intuition] Show that a cone of half-angle $\theta$ subtends the solid angle $\Omega_s=2\pi(1-\cos\theta)$, and that the source's $-2\pi\cos\theta$ equals $\Omega_s$ modulo $2\pi$, which is why adding the fibre's $2\pi$ winding reproduces the Tomita–Chiao result.
- [Simplify] Clarify the "factor $1/2$" remark: for spin ½ each state acquires $\mp\tfrac12\Omega_s$, and experiments measure the up–down relative phase, which is $\Omega_s$, so there is no factor-two discrepancy in the reported values.
- [Graph] Plot the geometric phase against $\theta\in[0,\pi]$: $2\pi(1-\cos\theta)$ for the photon, $\pi(1-\cos\theta)$ per spin-½ state, and the source's $-2\pi\cos\theta$ reduced mod $2\pi$.
- [Manim] Animate the fibre tangent tracing a circle on the unit sphere of directions while the polarisation vector is parallel-transported, ending rotated by the enclosed solid angle.

### N3704

Note: [[13.04 Spin Transport in Chiral Molecules and Spintronics|13.04 Spin Transport in Chiral Molecules and Spintronics]]  
Priority: medium · Graph: no · Manim: no

The headline estimate $\hbar\Omega\approx0.66\,\mathrm{eV}$ checks out, but the equivalent-field derivation and the thermal energy carry factor errors.

- [Correctness] Equating the per-state energy $\hbar\Omega/2$ ($=s\Omega$ with $s=\hbar/2$) with the per-state Zeeman energy $\tfrac g2\mu_BB=\mu_BB$ gives $B=\hbar\Omega/(2\mu_B)=mv/(er)\approx5.7\times10^3\,\mathrm{T}$. The printed $B_{eq}=\hbar\Omega/(2g_m\mu_B)$ and $B_f=mv/(2er)\approx2.8\times10^3\,\mathrm{T}$ set a per-state energy equal to the full splitting $g\mu_BB$ and halve the field.
- [Correctness] Room-temperature thermal energy is $k_BT\approx4.1\times10^{-21}\,\mathrm{J}=0.026\,\mathrm{eV}$, not $3\times10^{-21}\,\mathrm{J}$; the ratio to 0.66 eV is about 25.
- [Intuition] State the assumption behind $\Omega=v/r$: a coherent ballistic electron circling a 0.5 nm helix at $5\times10^5\,\mathrm{m/s}$. Say that tunnelling or hopping transport through DNA is not obviously described this way, so the reader can judge the estimate.

### N3705

Note: [[13.05 Bosons, Fermions, and the Proof of the Spin-Statistics Connection|13.05 Bosons, Fermions, and the Proof of the Spin-Statistics Connection]]  
Priority: low · Graph: no · Manim: no

Clear motivation for the spin–statistics section; no change needed beyond navigation.

- [Links] Link the three review subsections 13.05.01–13.05.03 and the proposal in 13.06 at the end of the Lecture account.

### N3706

Note: [[13.05.01 The Dawn of the Spin-Statistics Connection|13.05.01 The Dawn of the Spin-Statistics Connection]]  
Priority: low · Graph: yes · Manim: no

Good historical overview with one misattribution.

- [Correctness] "Dirac named the integer-spin particles bosons ... in his 1926 paper" is wrong: Dirac coined both "fermion" and "boson" in a 1945 lecture. His 1926 paper derived the antisymmetric (Fermi–Dirac) statistics.
- [Graph] Plot $1/(e^x-1)$ (for $x>0$), $1/(e^x+1)$, and $e^{-x}$ against $x=(E-\mu)/k_BT\in[-3,5]$, to show the common Boltzmann limit at large $x$ and the Bose enhancement and Fermi blocking at small $x$; include $\mu$ in the displayed formulas.

### N3707

Note: [[13.05.02 Pauli's Proof and His Inconclusive Tryst with the SSC|13.05.02 Pauli's Proof and His Inconclusive Tryst with the SSC]]  
Priority: low · Graph: no · Manim: no

Accurate account of Pauli's conditions and the author's objections.

- [Simplify] Add the factor $1/\sqrt2$ to (13.20)–(13.21) for orthonormal $\psi_1,\psi_2$ and show the exchange $x_1\leftrightarrow x_2$ explicitly giving $\pm\Psi$.
- [Links] The DOI in Interpretation (PhysRev.58.716) is correct but contradicts the chapter reference list ("48"); fix the list so the two agree.

### N3708

Note: [[13.05.03 Physical Proofs of the Spin-Statistics Connection|13.05.03 Physical Proofs of the Spin-Statistics Connection]]  
Priority: low · Graph: no · Manim: no

Short and clear review; adequate as a bridge note.

- [Example] Add the standard heuristic that a $2\pi$ rotation multiplies a spin-$s$ state by $(-1)^{2s}$, and state clearly that this rotation sign is not by itself the exchange sign; this matches the Interpretation's warning.

### N3709

Note: [[13.06 The Proof of the Spin-Statistics Connection|13.06 The Proof of the Spin-Statistics Connection]]  
Priority: medium · Graph: no · Manim: yes

The proposal is transcribed faithfully with its inconsistencies noted, but no consistent version of the phase bookkeeping is offered.

- [Simplify] Give one self-consistent version next to the source: each particle acquires $\delta\varphi=-s\theta/\hbar$; in the exchange route each turns by an extra $\pi$, so the pair gains $\Delta\varphi=2\pi s/\hbar$ and $e^{i\Delta\varphi}=(-1)^{2s/\hbar}$. This replaces the double-$\hbar$ and sign confusions in (13.25)–(13.27).
- [Manim] Animate the two indistinguishable scattering routes, with momentum arrows turning through $\theta$ and $\theta+\pi$ and a phase dial for each spin accumulating $-s\,d\theta/\hbar$, ending with dials differing by $\pi$ for spin ½ and $2\pi$ for spin 1.
- [Example] Add quick checks: photon ($s=\hbar$) gives $+1$, spin-3/2 gives $-1$, and a composite of two spin-½ particles gives $+1$, so the reader can test the rule.

### N3710

Note: [[13.07 Summary|13.07 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate concise chapter summary.

- [Links] Link each summarised application to its section note (13.03.01, 13.03.02, 13.03.03, 13.04, 13.06).
