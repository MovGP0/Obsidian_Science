---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/14 The Quantum Hall Effects - Gravity in Condensed Matter"
---

> [!TLDR]
> This note tracks the review of the 21 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/14 The Quantum Hall Effects - Gravity in Condensed Matter`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 6 possible errors or notation conflicts. 6 of them are verified (4 fixed, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3711|N3711]] 14 References: Bose, Z. Phys. **26**, starts on page 178 (178–181), not 168–171. **Fixed:** Changed page range to 178–181
- [[#N3715|N3715]] 14.03 The 2-D Dynamics of Electrons in a Magnetic Field: The Fig. 14.4 graph draws levels at heights 0.5, 1, 2, 3 (labels ½ℏω, ℏω, 2ℏω, 3ℏω), which is not equally spaced and contradicts $E_n=(n+\tfrac12)\hbar\omega_c$. Redraw at 0.5, 1.5, 2.5, 3.5 with labels $(n+\tfrac12)\hbar\omega_c$ and keep the source labels in the caption only. **Partly:** Confirmed the graph contradicts E_n = (n+½)ħω_c; no edit because the brief forbids redrawing figures, and the existing note already flags the label mismatch; the graph needs levels at 0.5, 1.5, 2.5, 3.5 with bounds raised
- [[#N3717|N3717]] 14.04 The Fractional Quantum Hall Effect: Fig. 14.7 draws a deep longitudinal-resistance minimum at $\nu=1/4$, but 1/4 is an even-denominator filling without an FQHE plateau (the chapter itself says so in 14.06.01 and 14.07.01). Replace it with an odd-denominator state such as $3/7$ or $2/9$, or draw 1/4 without a minimum. **Partly:** Confirmed (last factor of the functiongraph places a minimum at B = 16 T labelled 1/4); no edit because the brief forbids redrawing figures; fix by removing that factor or relabelling to an odd-denominator state
- [[#N3728|N3728]] 14.10 The Quantum Hall Effects in Graphene: "Two spin projections and two sublattices add a fourfold degeneracy" is wrong: the fourfold degeneracy comes from spin and valley ($K$, $K'$). The two sublattices form the pseudospin components of each Dirac spinor. **Fixed:** Sentence now names two valleys (K and K′) and states the sublattices form the pseudospin components of each Dirac spinor
- [[#N3728|N3728]] 14.10 The Quantum Hall Effects in Graphene: With the stated rule that successive orbit areas differ by one flux quantum ($\pi r_0^2B=h/e$, so $r_0^2=2\hbar/(eB)$), (14.17) gives $E_n=v_F\sqrt{\hbar eBn}$, a factor $\sqrt2$ below the printed (and correct) $v_F\sqrt{2\hbar eBn}$. The printed step works only if $r_0=l_0=\sqrt{\hbar/(eB)}$; add this to the note. **Fixed:** Verified r0² = 2ħ/(eB) from πr0²B = h/e; added to the note that the step requires r0 = l0 = √(ħ/(eB)) and the stated rule gives a result √2 below (14.15)
- [[#N3730|N3730]] 14.12 The Wavefunctions in the QHE: Symbol clash: $m$ is the single-particle angular-momentum index in (14.22) and the Laughlin exponent in (14.23); use, for example, $\ell$ for the former and $q$ (with $\nu=1/q$) for the latter. **Fixed:** Renamed single-particle index to ℓ (14.22, z^ℓ phase sentence, note) and Laughlin exponent to q (14.23, ν = 1/q, q = 3, charge 1/q); added ℓ and q rows to the table

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3711 | [[14 References\|14 References]] | Analyzed | low | no | no | [[#N3711\|View]] |
| N3712 | [[14.00 The Quantum Hall Effects - Gravity in Condensed Matter\|14.00 The Quantum Hall Effects - Gravity in Condensed Matter]] | Analyzed | low | no | no | [[#N3712\|View]] |
| N3713 | [[14.01 The Hall Effect\|14.01 The Hall Effect]] | Analyzed | low | no | yes | [[#N3713\|View]] |
| N3714 | [[14.02 The Quantum Hall Effect\|14.02 The Quantum Hall Effect]] | Analyzed | medium | yes | no | [[#N3714\|View]] |
| N3715 | [[14.03 The 2-D Dynamics of Electrons in a Magnetic Field\|14.03 The 2-D Dynamics of Electrons in a Magnetic Field]] | Analyzed | medium | yes | yes | [[#N3715\|View]] |
| N3716 | [[14.03.01 The Theory of the IQHE Plateaux\|14.03.01 The Theory of the IQHE Plateaux]] | Analyzed | medium | no | yes | [[#N3716\|View]] |
| N3717 | [[14.04 The Fractional Quantum Hall Effect\|14.04 The Fractional Quantum Hall Effect]] | Analyzed | medium | yes | no | [[#N3717\|View]] |
| N3718 | [[14.05 The Current Theories of the FQHE\|14.05 The Current Theories of the FQHE]] | Analyzed | medium | yes | no | [[#N3718\|View]] |
| N3719 | [[14.06 The Need for a New Unified Theory\|14.06 The Need for a New Unified Theory]] | Analyzed | low | no | no | [[#N3719\|View]] |
| N3720 | [[14.06.01 Summary of the Reasons for a New Theory\|14.06.01 Summary of the Reasons for a New Theory]] | Analyzed | low | no | no | [[#N3720\|View]] |
| N3721 | [[14.07 New Physics Input to the QHE - Cosmic Gravity\|14.07 New Physics Input to the QHE - Cosmic Gravity]] | Analyzed | low | no | no | [[#N3721\|View]] |
| N3722 | [[14.07.01 The Quantum Degeneracy of the Landau Levels\|14.07.01 The Quantum Degeneracy of the Landau Levels]] | Analyzed | medium | no | no | [[#N3722\|View]] |
| N3723 | [[14.08 The Integrated Theory of the Quantum Hall Effects\|14.08 The Integrated Theory of the Quantum Hall Effects]] | Analyzed | medium | yes | no | [[#N3723\|View]] |
| N3724 | [[14.08.01 FQHE Beyond the Filling Factor nu = 1-3\|14.08.01 FQHE Beyond the Filling Factor nu = 1-3]] | Analyzed | low | no | no | [[#N3724\|View]] |
| N3725 | [[14.08.02 The 5-2-FQHE State and the Half-Integer States\|14.08.02 The 5-2-FQHE State and the Half-Integer States]] | Analyzed | low | no | no | [[#N3725\|View]] |
| N3726 | [[14.08.03 The Excitation Energy Gaps\|14.08.03 The Excitation Energy Gaps]] | Analyzed | low | yes | no | [[#N3726\|View]] |
| N3727 | [[14.09 Electron-Hole Symmetry and the FQHE\|14.09 Electron-Hole Symmetry and the FQHE]] | Analyzed | low | no | no | [[#N3727\|View]] |
| N3728 | [[14.10 The Quantum Hall Effects in Graphene\|14.10 The Quantum Hall Effects in Graphene]] | Analyzed | medium | yes | no | [[#N3728\|View]] |
| N3729 | [[14.11 Charge and Thermal Transport by Edge States\|14.11 Charge and Thermal Transport by Edge States]] | Analyzed | medium | no | no | [[#N3729\|View]] |
| N3730 | [[14.12 The Wavefunctions in the QHE\|14.12 The Wavefunctions in the QHE]] | Analyzed | low | yes | no | [[#N3730\|View]] |
| N3731 | [[14.13 Summary\|14.13 Summary]] | Analyzed | low | no | no | [[#N3731\|View]] |

## Suggestions

### N3711

Note: [[14 References|14 References]]  
Priority: low · Graph: no · Manim: no

Reference list; nearly all entries check out against standard citations.

- [Correctness] Bose, Z. Phys. **26**, starts on page 178 (178–181), not 168–171.

### N3712

Note: [[14.00 The Quantum Hall Effects - Gravity in Condensed Matter|14.00 The Quantum Hall Effects - Gravity in Condensed Matter]]  
Priority: low · Graph: no · Manim: no

Concise chapter abstract with a sound caveat about constant energy offsets.

- [Intuition] Add the scale comparison: $mc^2=511\,\mathrm{keV}$ against $\hbar\omega_c\approx17\,\mathrm{meV}$ for GaAs ($m^*=0.067m_e$) at 10 T. This shows why the size of a constant term is irrelevant unless it varies.

### N3713

Note: [[14.01 The Hall Effect|14.01 The Hall Effect]]  
Priority: low · Graph: no · Manim: yes

Correct and clear classical Hall derivation.

- [Example] Add a number: copper ($n=8.5\times10^{28}\,\mathrm{m^{-3}}$), $I=1\,\mathrm{A}$, $B=1\,\mathrm{T}$, $d=0.1\,\mathrm{mm}$ gives $V_H=IB/(ned)\approx0.7\,\mathrm{\mu V}$. This explains why Hall needed thin gold leaf.
- [Manim] Animate carriers drifting along the strip, being deflected by $\mathbf B$, piling up on one edge until the transverse field cancels the magnetic force, after which they drift straight.
- [Simplify] Fix the sign convention of $V_H$ before (14.1) (which edge is positive for electrons), so that $ne=-IB/(V_Hd)$ is visibly positive.

### N3714

Note: [[14.02 The Quantum Hall Effect|14.02 The Quantum Hall Effect]]  
Priority: medium · Graph: yes · Manim: no

Correct definitions and resistance quantum, but the plateau graph omits the classical Hall line it should sit on.

- [Graph] Fig. 14.2b has $R_H=0$ below the first step; add the classical background $R_H=B/(\rho e)$ and place the plateaux at $B\propto1/\nu$ (for example $\nu=4,3,2,1$ at $B_1/4,B_1/3,B_1/2,B_1$), so the staircase crosses the classical line at integer filling.
- [Example] Add a worked number: $\rho=3\times10^{15}\,\mathrm{m^{-2}}$ reaches $\nu=1$ at $B=\rho h/e\approx12.4\,\mathrm{T}$.
- [Simplify] The sheet density $\rho$ clashes with the resistivity $\rho_{xx}$ used later in the chapter (14.08.03); consider $n_s$ for sheet density across the chapter.

### N3715

Note: [[14.03 The 2-D Dynamics of Electrons in a Magnetic Field|14.03 The 2-D Dynamics of Electrons in a Magnetic Field]]  
Priority: medium · Graph: yes · Manim: yes

Correct cyclotron and Landau-level physics, but the level diagram contradicts the stated equal spacing.

- [Correctness] The Fig. 14.4 graph draws levels at heights 0.5, 1, 2, 3 (labels ½ℏω, ℏω, 2ℏω, 3ℏω), which is not equally spaced and contradicts $E_n=(n+\tfrac12)\hbar\omega_c$. Redraw at 0.5, 1.5, 2.5, 3.5 with labels $(n+\tfrac12)\hbar\omega_c$ and keep the source labels in the caption only.
- [Example] Give GaAs numbers at 10 T: $\hbar\omega_c\approx17\,\mathrm{meV}\approx200\,\mathrm{K}$ and degeneracy $B/\phi_0\approx2.4\times10^{15}\,\mathrm{m^{-2}}$.
- [Manim] Animate several electrons on cyclotron orbits of different radius and speed that all complete their circles at the same time, showing the speed-independent frequency the note calls crucial.

### N3716

Note: [[14.03.01 The Theory of the IQHE Plateaux|14.03.01 The Theory of the IQHE Plateaux]]  
Priority: medium · Graph: no · Manim: yes

Good qualitative plateau mechanism with a helpful schematic; the spin bookkeeping is ambiguous.

- [Simplify] The text allows two opposite-spin electrons per orbital and also high-field spin polarisation; state that odd-integer plateaux need resolved spin splitting, so each spin-resolved level counts as one $\nu$ step.
- [Manim] Animate the Fermi level rising through broadened Landau bands (Fig. 14.6) while the Hall staircase is traced alongside: flat while it crosses localised tails, stepping at extended centres.
- [Intuition] Add one sentence on Laughlin's gauge argument (adding one flux quantum pumps exactly one electron per filled level edge to edge), which explains why localised states do not change $\sigma_{xy}$.

### N3717

Note: [[14.04 The Fractional Quantum Hall Effect|14.04 The Fractional Quantum Hall Effect]]  
Priority: medium · Graph: yes · Manim: no

Clear phenomenology, but the illustrative graph shows a fractional minimum at an even-denominator filling.

- [Correctness] Fig. 14.7 draws a deep longitudinal-resistance minimum at $\nu=1/4$, but 1/4 is an even-denominator filling without an FQHE plateau (the chapter itself says so in 14.06.01 and 14.07.01). Replace it with an odd-denominator state such as $3/7$ or $2/9$, or draw 1/4 without a minimum.
- [Example] Explain that the relation $B\nu\approx4\,\mathrm{T}$ corresponds to a sheet density $\rho=\nu B/\phi_0\approx9.7\times10^{14}\,\mathrm{m^{-2}}$.
- [Simplify] Group the long fraction list into the sequences $n/(2n\pm1)$ and $n/(4n\pm1)$ plus their particle–hole partners; this prepares the counting in 14.08.

### N3718

Note: [[14.05 The Current Theories of the FQHE|14.05 The Current Theories of the FQHE]]  
Priority: medium · Graph: yes · Manim: no

Correct composite-fermion algebra (14.5)–(14.6), but the inverse relation that produces the fraction sequences is not shown.

- [Simplify] Add the inverse $\nu=\nu^*/(2p\nu^*\pm1)$ and list $1/3,2/5,3/7,\dots$ and $2/3,3/5,\dots$; this connects directly to the author's (14.11) in 14.08.
- [Intuition] Explain why an even number of attached flux quanta keeps fermionic statistics: each attached quantum adds an exchange phase $\pi$, so $2p$ quanta add $2p\pi$.
- [Graph] Plot $\nu^*=\nu/(1-2\nu)$ for $\nu\in[0.2,0.8]$ with horizontal lines at $|\nu^*|=1,2,3$, marking the intersections at the observed fractions and the divergence at $\nu=1/2$.

### N3719

Note: [[14.06 The Need for a New Unified Theory|14.06 The Need for a New Unified Theory]]  
Priority: low · Graph: no · Manim: no

Short bridge note with a fair Interpretation section; no change needed.

- [Structure] No change needed.

### N3720

Note: [[14.06.01 Summary of the Reasons for a New Theory|14.06.01 Summary of the Reasons for a New Theory]]  
Priority: low · Graph: no · Manim: no

Clear numbered list of the author's objections; one item is confusingly worded and the list is interrupted.

- [Simplify] Item 4: say that the Hall resistance keeps following the classical line $B/(\rho e)$ at even-denominator fillings, and that $B^*=B(1-2\nu)$ is an effective field of the composite fermions, not the measured Hall field. As written, "longitudinal resistance ... proportional to applied field" is unclear.
- [Structure] The sentence "These are the author's critiques..." sits between items 7 and 8 and splits the list; move it after item 8.

### N3721

Note: [[14.07 New Physics Input to the QHE - Cosmic Gravity|14.07 New Physics Input to the QHE - Cosmic Gravity]]  
Priority: low · Graph: no · Manim: no

Brief statement of the proposed input with an appropriate constant-offset caveat.

- [Intuition] Add the one-line demonstration: $H\to H-m\Phi_u$ multiplies every state by $e^{im\Phi_ut/\hbar}$, so all energy differences and the Landau state count are unchanged.

### N3722

Note: [[14.07.01 The Quantum Degeneracy of the Landau Levels|14.07.01 The Quantum Degeneracy of the Landau Levels]]  
Priority: medium · Graph: no · Manim: no

The algebra of (14.8) checks out with $\Omega=eB/m$, and the notes correctly identify the area-normalisation and $k=2$ issues; the derivation is dense.

- [Simplify] Make the sample area explicit: $G_q=eBA/h$ states in area $A$, then divide by $A$ to obtain $g_m$; this removes the need for the note on (14.7).
- [Example] Work one case in numbers: a sample with $\rho=1\times10^{15}\,\mathrm{m^{-2}}$ at $\nu=1/3$ has $B\approx12.4\,\mathrm{T}$, $b=3\rho$, and corrected $g=b-2\rho=\rho$.
- [Simplify] Rename the magnetic degeneracy $g_m$ (it clashes with the gyromagnetic $g_m$ of 13.04 and the total degeneracy $g$); for example $n_B$ for the flux-quantum density.

### N3723

Note: [[14.08 The Integrated Theory of the Quantum Hall Effects|14.08 The Integrated Theory of the Quantum Hall Effects]]  
Priority: medium · Graph: yes · Manim: no

The fraction sequences from (14.11) and the figure counts (5 of 15, 6 of 15, 7 of 14) are arithmetically correct; the note would benefit from a plot and from naming its identity with the composite-fermion formula.

- [Graph] Plot $\nu^*=\nu/|1-2\nu|$ for $\nu\in(0,1)$ with horizontal lines $\nu^*=1,2,3$; the intersections give $1/3,2/5,3/7$ and $1,2/3,3/5$, with the singularity at $1/2$.
- [Intuition] State explicitly that (14.10) is algebraically identical to Jain's (14.6) with $p=1$, so both accounts predict the same fractions and differ only in physical interpretation; this is the key comparison for the reader.
- [Example] Evaluate the Coulomb sublevel scale: for GaAs ($\varepsilon_r=12.9$) and $\rho=10^{15}\,\mathrm{m^{-2}}$, $l=\rho^{-1/2}\approx32\,\mathrm{nm}$ and $E_C=e^2/(4\pi\varepsilon_0\varepsilon_rl)\approx3.5\,\mathrm{meV}$, against $\hbar\omega_c\approx17\,\mathrm{meV}$ at 10 T.

### N3724

Note: [[14.08.01 FQHE Beyond the Filling Factor nu = 1-3|14.08.01 FQHE Beyond the Filling Factor nu = 1-3]]  
Priority: low · Graph: no · Manim: no

The source inconsistencies are flagged correctly; the intended formula could simply be stated.

- [Simplify] Write the intended relation $\rho/g=\nu/|1-4\nu|$ for $k=2$ and list both branches $\nu=n/(4n+1)=1/5,2/9,3/13$ and $\nu=n/(4n-1)=1/3,2/7,3/11,4/15$; this confirms the note that 4/11 should be 4/15.

### N3725

Note: [[14.08.02 The 5-2-FQHE State and the Half-Integer States|14.08.02 The 5-2-FQHE State and the Half-Integer States]]  
Priority: low · Graph: no · Manim: no

Short and appropriately hedged description of the author's mixed-domain hypothesis.

- [Intuition] Mention what the hypothesis must reproduce: the 5/2 state shows a quantised $R_{xy}=h/(2.5e^2)$ and a measured activation gap of order 0.5 K in the best samples. A domain mixture would need to give both, not only an intermediate resistance.

### N3726

Note: [[14.08.03 The Excitation Energy Gaps|14.08.03 The Excitation Energy Gaps]]  
Priority: low · Graph: yes · Manim: no

The notes correctly flag the nonstandard magnetic length; a standard-form example would make the scaling concrete.

- [Simplify] Give the standard $l_B=\sqrt{\hbar/(eB)}$ and $E_C=e^2/(4\pi\varepsilon_0\varepsilon_rl_B)$ with a number: at 10 T, $l_B\approx8.1\,\mathrm{nm}$ and $E_C\approx14\,\mathrm{meV}$ in GaAs. Measured FQHE gaps are a small fraction (about 0.1) of this.
- [Graph] Plot $\ln(\rho_{xx}/\rho_0)=-\Delta/(2k_BT)$ against $1/T\in[0,10]\,\mathrm{K^{-1}}$ for $\Delta/k_B=1,3,5\,\mathrm{K}$, to show how the Arrhenius slope gives the gap.

### N3727

Note: [[14.09 Electron-Hole Symmetry and the FQHE|14.09 Electron-Hole Symmetry and the FQHE]]  
Priority: low · Graph: no · Manim: no

Brief qualitative argument; adequate.

- [Example] Show the particle–hole pairing $\nu\leftrightarrow1-\nu$ with $1/3\leftrightarrow2/3$ and $2/5\leftrightarrow3/5$, and note that both members of each pair come from the same formula $\nu/|1-2\nu|$ in 14.08.

### N3728

Note: [[14.10 The Quantum Hall Effects in Graphene|14.10 The Quantum Hall Effects in Graphene]]  
Priority: medium · Graph: yes · Manim: no

The graphene Landau spectrum (14.15) is correct, but the degeneracy origin is misstated and the source's heuristic derivation does not reproduce it under its own stated rule.

- [Correctness] "Two spin projections and two sublattices add a fourfold degeneracy" is wrong: the fourfold degeneracy comes from spin and valley ($K$, $K'$). The two sublattices form the pseudospin components of each Dirac spinor.
- [Correctness] With the stated rule that successive orbit areas differ by one flux quantum ($\pi r_0^2B=h/e$, so $r_0^2=2\hbar/(eB)$), (14.17) gives $E_n=v_F\sqrt{\hbar eBn}$, a factor $\sqrt2$ below the printed (and correct) $v_F\sqrt{2\hbar eBn}$. The printed step works only if $r_0=l_0=\sqrt{\hbar/(eB)}$; add this to the note.
- [Simplify] State the standard graphene sequence $\sigma_{xy}=\pm4(N+\tfrac12)e^2/h$, i.e. $\nu=\pm2,\pm6,\pm10$, instead of "$\rho/(B/\phi_0)=4(\nu+1/2)$" with $\nu$ reused as a level index.
- [Graph] Plot $E_n$ against $n=0..6$ at $B=10\,\mathrm{T}$ for graphene ($v_F\sqrt{2\hbar eBn}$, $E_1\approx115\,\mathrm{meV}$) and for a GaAs 2DEG ($(n+\tfrac12)\hbar\omega_c$, about 17 meV spacing), showing the shrinking graphene gaps and its zero-energy level.

### N3729

Note: [[14.11 Charge and Thermal Transport by Edge States|14.11 Charge and Thermal Transport by Edge States]]  
Priority: medium · Graph: no · Manim: no

Clear presentation of edge charge and heat transport claims with good unit notes, but the data comparison omits the standard prediction for the same states.

- [Intuition] Note that the graphene table values also match the standard non-equilibrated count of downstream plus upstream modes (for example $5/3$: $2+1=3$; $8/3$: $3+1=4$; $4/3$: $1+1=2$; $7/3$: 3), so these data do not discriminate between the accounts. This is in line with "vanishing thermal equilibration" in the cited title.
- [Example] Give the thermal quantum in numbers: $\pi^2k_B^2/(3h)\approx9.5\times10^{-13}\,\mathrm{W/K^2}$, so one channel at 20 mK carries $\kappa T\approx1.9\times10^{-14}\,\mathrm{W/K}$.
- [Simplify] Next to (14.19), state the hole-conjugate $2/3$ prediction explicitly: net $n_+-n_-=0$ when equilibrated and 2 when not. This makes the "backward heat flow" discussion concrete.

### N3730

Note: [[14.12 The Wavefunctions in the QHE|14.12 The Wavefunctions in the QHE]]  
Priority: low · Graph: yes · Manim: no

Correct standard wavefunctions; one letter does two jobs.

- [Correctness] Symbol clash: $m$ is the single-particle angular-momentum index in (14.22) and the Laughlin exponent in (14.23); use, for example, $\ell$ for the former and $q$ (with $\nu=1/q$) for the latter.
- [Graph] Plot the radial density $r^{2\ell}e^{-r^2/2l_0^2}$ for $\ell=0..4$ against $r/l_0\in[0,5]$; the peaks at $r=\sqrt{2\ell}\,l_0$ enclose areas $\ell\,h/(eB)$, i.e. one flux quantum per state. This is the standard picture behind the state counting the author invokes.

### N3731

Note: [[14.13 Summary|14.13 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate chapter summary.

- [Links] Link the summarised claims to 14.07.01 (degeneracy), 14.08 (fractions), 14.08.02 (5/2), 14.10 (graphene), and 14.11 (edge transport).
