---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/06 Interacting Fields and Perturbation Theory"
---

> [!TLDR]
> This note tracks the review of the 49 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/06 Interacting Fields and Perturbation Theory`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (6 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2532|N2532]] 06.03.01 Definition: $\mathcal T$ is used both for time ordering ($\mathcal S=\mathcal T\exp(\dots)$) and for the transition operator ($\mathcal S=1+i\mathcal T$) in the same note; rename the transition operator (e.g. $\hat T$ or $\mathbb T$) here and in \[\[06.03.02 General Properties\]\]. **Partly:** Clash confirmed; renamed the transition operator to T-hat in this note and added a sentence on time ordering; 06.03.02 General Properties is not in this batch and still uses calligraphic T for the transition operator, so it needs the same rename.
- [[#N2545|N2545]] 06.06.03 Formula for Scalar Fields: Display the LSZ formula in the chapter convention as the main equation: incoming weight $\int d^4x_j\,e^{-ip_j\cdot x_j}(\Box+m_{\mathrm{ph}}^2)$ and outgoing weight $\int d^4y_k\,e^{+ip'_k\cdot y_k}(\Box+m_{\mathrm{ph}}^2)$; keep the source phases only in a callout. **Fixed:** Main formula now uses e^{-ip_j x_j} for incoming and e^{+ip'_k y_k} for outgoing; the callout records the source phases.
- [[#N2545|N2545]] 06.06.03 Formula for Scalar Fields: In the momentum-space form, replace the full $\tilde G^{(n+m)}$ by the connected Green function when writing $i\mathcal M$, as the callout already states, rather than displaying the uncorrected source expression. **Fixed:** Displayed formula now uses the connected G~_c^{(n+m)}; the callout records the source form; the table row includes G~_c.
- [[#N2555|N2555]] 06.08.03 Decay Width: $n$ labels the last final particle in $1\to2+\dots+n$ and also the size of a set of identical particles in "a factor $1/n!$ for each set of $n$ identical final particles"; use a different letter (e.g. $1/k!$) for the identical set. **Fixed:** Changed the identical-particle factor to 1/k! for each set of k identical final particles.
- [[#N2562|N2562]] 06.10 Examples: The displayed Yukawa density has $+\frac{\mu^2}2\phi^2$; display the correct $-\frac{\mu^2}2\phi^2$ (consistent with the propagator used in the amplitude) and keep the source sign only in a callout. **Fixed:** Displayed -mu^2/2 phi^2; the first callout records the source sign; the second callout reworded to match.
- [[#N2562|N2562]] 06.10 Examples: $\mechanical{m}$ is the scalar mass in Example 6.8 and the fermion mass in Example 6.9; the table entry "mass parameters" lumps them. Use e.g. $M$ for the fermion mass or split the table rows by example. **Fixed:** Renamed the Yukawa fermion mass to M and split the table row into scalar masses (6.8) and Yukawa masses M, mu (6.9).
- [[#N2574|N2574]] 06.12.10 Symmetry factor of the disconnected double figure eight: $S$ is used both for the second-order Dyson term $S^{(2)}$ and for the symmetry factor $S=128$; rename the Dyson term (for example $\mathcal S^{(2)}$) and add it to the quantity table. **Fixed:** Renamed the Dyson term to calligraphic S^{(2)} and added it to the quantity table.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2526 | [[06.00 Historical and Bibliographical Notes\|06.00 Historical and Bibliographical Notes]] | Analyzed | low | no | no | [[#N2526\|View]] |
| N2527 | [[06.01 Interaction Terms and Coupling Powers\|06.01 Interaction Terms and Coupling Powers]] | Analyzed | low | no | no | [[#N2527\|View]] |
| N2528 | [[06.02 Interaction Picture\|06.02 Interaction Picture]] | Analyzed | low | no | no | [[#N2528\|View]] |
| N2529 | [[06.02.01 Schrödinger, Heisenberg, and Dirac Pictures\|06.02.01 Schrödinger, Heisenberg, and Dirac Pictures]] | Analyzed | low | no | no | [[#N2529\|View]] |
| N2530 | [[06.02.02 Time-Evolution Operator and Dyson Series\|06.02.02 Time-Evolution Operator and Dyson Series]] | Analyzed | low | yes | no | [[#N2530\|View]] |
| N2531 | [[06.03 S-Matrix\|06.03 S-Matrix]] | Analyzed | low | no | no | [[#N2531\|View]] |
| N2532 | [[06.03.01 Definition\|06.03.01 Definition]] | Analyzed | medium | no | no | [[#N2532\|View]] |
| N2533 | [[06.03.02 General Properties\|06.03.02 General Properties]] | Analyzed | low | no | no | [[#N2533\|View]] |
| N2534 | [[06.04 Dyson Formula\|06.04 Dyson Formula]] | Analyzed | low | no | no | [[#N2534\|View]] |
| N2535 | [[06.04.01 Hamiltonian Density and Covariant Form\|06.04.01 Hamiltonian Density and Covariant Form]] | Analyzed | low | no | no | [[#N2535\|View]] |
| N2536 | [[06.04.02 Perturbative Expansion\|06.04.02 Perturbative Expansion]] | Analyzed | low | no | no | [[#N2536\|View]] |
| N2537 | [[06.05 Wick's Theorem\|06.05 Wick's Theorem]] | Analyzed | low | no | no | [[#N2537\|View]] |
| N2538 | [[06.05.01 Normal Ordering\|06.05.01 Normal Ordering]] | Analyzed | low | no | no | [[#N2538\|View]] |
| N2539 | [[06.05.02 Contractions and the Feynman Propagator\|06.05.02 Contractions and the Feynman Propagator]] | Analyzed | low | no | no | [[#N2539\|View]] |
| N2540 | [[06.05.03 Statement and Proof\|06.05.03 Statement and Proof]] | Analyzed | low | no | yes | [[#N2540\|View]] |
| N2541 | [[06.05.04 Applications\|06.05.04 Applications]] | Analyzed | low | no | no | [[#N2541\|View]] |
| N2542 | [[06.06 LSZ Reduction Formula\|06.06 LSZ Reduction Formula]] | Analyzed | low | no | no | [[#N2542\|View]] |
| N2543 | [[06.06.01 Asymptotic States\|06.06.01 Asymptotic States]] | Analyzed | low | no | no | [[#N2543\|View]] |
| N2544 | [[06.06.02 Renormalization Constant Z\|06.06.02 Renormalization Constant Z]] | Analyzed | low | yes | no | [[#N2544\|View]] |
| N2545 | [[06.06.03 Formula for Scalar Fields\|06.06.03 Formula for Scalar Fields]] | Analyzed | high | no | no | [[#N2545\|View]] |
| N2546 | [[06.06.04 Dirac and Vector Fields\|06.06.04 Dirac and Vector Fields]] | Analyzed | low | no | no | [[#N2546\|View]] |
| N2547 | [[06.06.05 Physical Interpretation\|06.06.05 Physical Interpretation]] | Analyzed | low | no | no | [[#N2547\|View]] |
| N2548 | [[06.07 Connected Diagrams and Vacuum Bubbles\|06.07 Connected Diagrams and Vacuum Bubbles]] | Analyzed | low | no | no | [[#N2548\|View]] |
| N2549 | [[06.07.01 Structure of the Diagrams\|06.07.01 Structure of the Diagrams]] | Analyzed | low | no | no | [[#N2549\|View]] |
| N2550 | [[06.07.02 Cancellation of Vacuum Bubbles\|06.07.02 Cancellation of Vacuum Bubbles]] | Analyzed | low | no | no | [[#N2550\|View]] |
| N2551 | [[06.07.03 Connected Decomposition\|06.07.03 Connected Decomposition]] | Analyzed | low | no | no | [[#N2551\|View]] |
| N2552 | [[06.08 Cross Sections and Decay Widths\|06.08 Cross Sections and Decay Widths]] | Analyzed | low | no | no | [[#N2552\|View]] |
| N2553 | [[06.08.01 Invariant Phase Space\|06.08.01 Invariant Phase Space]] | Analyzed | medium | no | no | [[#N2553\|View]] |
| N2554 | [[06.08.02 Differential Cross Section\|06.08.02 Differential Cross Section]] | Analyzed | low | no | no | [[#N2554\|View]] |
| N2555 | [[06.08.03 Decay Width\|06.08.03 Decay Width]] | Analyzed | low | yes | no | [[#N2555\|View]] |
| N2556 | [[06.08.04 2 → 2 Kinematics in the Center-of-Mass Frame\|06.08.04 2 → 2 Kinematics in the Center-of-Mass Frame]] | Analyzed | low | no | no | [[#N2556\|View]] |
| N2557 | [[06.08.05 Mandelstam Variables\|06.08.05 Mandelstam Variables]] | Analyzed | low | yes | no | [[#N2557\|View]] |
| N2558 | [[06.08.06 Total Cross Section and the Optical Theorem\|06.08.06 Total Cross Section and the Optical Theorem]] | Analyzed | low | no | no | [[#N2558\|View]] |
| N2559 | [[06.09 From the Lagrangian to Observables\|06.09 From the Lagrangian to Observables]] | Analyzed | low | no | no | [[#N2559\|View]] |
| N2560 | [[06.09.01 Synthesis of the Perturbative Program\|06.09.01 Synthesis of the Perturbative Program]] | Analyzed | low | no | no | [[#N2560\|View]] |
| N2561 | [[06.09.02 Physical Meaning of Propagators\|06.09.02 Physical Meaning of Propagators]] | Analyzed | low | yes | no | [[#N2561\|View]] |
| N2562 | [[06.10 Examples\|06.10 Examples]] | Analyzed | medium | no | no | [[#N2562\|View]] |
| N2563 | [[06.11 Connection to Feynman Diagrams\|06.11 Connection to Feynman Diagrams]] | Analyzed | low | no | yes | [[#N2563\|View]] |
| N2564 | [[06.12 Exercises\|06.12 Exercises/06.12 Exercises]] | Analyzed | low | no | no | [[#N2564\|View]] |
| N2565 | [[06.12.01 Time ordering and the Feynman propagator\|06.12 Exercises/06.12.01 Time ordering and the Feynman propagator]] | Analyzed | low | yes | no | [[#N2565\|View]] |
| N2566 | [[06.12.02 Wick's theorem for six fields\|06.12 Exercises/06.12.02 Wick's theorem for six fields]] | Analyzed | low | no | no | [[#N2566\|View]] |
| N2567 | [[06.12.03 Fermion propagator from Wick's theorem\|06.12 Exercises/06.12.03 Fermion propagator from Wick's theorem]] | Analyzed | low | no | no | [[#N2567\|View]] |
| N2568 | [[06.12.04 Mandelstam identities for equal-mass scattering\|06.12 Exercises/06.12.04 Mandelstam identities for equal-mass scattering]] | Analyzed | low | yes | no | [[#N2568\|View]] |
| N2569 | [[06.12.05 Lorentz-invariant flux factor\|06.12 Exercises/06.12.05 Lorentz-invariant flux factor]] | Analyzed | low | no | no | [[#N2569\|View]] |
| N2570 | [[06.12.06 Leading total cross section in quartic scalar theory\|06.12 Exercises/06.12.06 Leading total cross section in quartic scalar theory]] | Analyzed | low | yes | no | [[#N2570\|View]] |
| N2571 | [[06.12.07 LSZ for the free scalar field\|06.12 Exercises/06.12.07 LSZ for the free scalar field]] | Analyzed | medium | no | no | [[#N2571\|View]] |
| N2572 | [[06.12.08 Scalar decay in Yukawa theory\|06.12 Exercises/06.12.08 Scalar decay in Yukawa theory]] | Analyzed | low | yes | no | [[#N2572\|View]] |
| N2573 | [[06.12.09 Optical theorem at second order in quartic theory\|06.12 Exercises/06.12.09 Optical theorem at second order in quartic theory]] | Analyzed | low | no | no | [[#N2573\|View]] |
| N2574 | [[06.12.10 Symmetry factor of the disconnected double figure eight\|06.12 Exercises/06.12.10 Symmetry factor of the disconnected double figure eight]] | Analyzed | low | no | no | [[#N2574\|View]] |

## Suggestions

### N2526

Note: [[06.00 Historical and Bibliographical Notes|06.00 Historical and Bibliographical Notes]]  
Priority: low · Graph: no · Manim: no

Clear historical overview.

- [Simplify] The sentence "It became standard notation, but its introduction greatly simplified calculations" has a contradictory "but"; rephrase.
- [Links] Add the LSZ 1955 paper reference (Nuovo Cimento 1, 205) alongside the Dyson and Wick DOIs.

### N2527

Note: [[06.01 Interaction Terms and Coupling Powers|06.01 Interaction Terms and Coupling Powers]]  
Priority: low · Graph: no · Manim: no

Clear introduction with correct power counting.

- [Example] Add the general formula for the coupling dimension with fermions and derivatives, $[g]=4-n_B-\frac32n_F-n_\partial$, which covers all three listed examples in one line.

### N2528

Note: [[06.02 Interaction Picture|06.02 Interaction Picture]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2529

Note: [[06.02.01 Schrödinger, Heisenberg, and Dirac Pictures|06.02.01 Schrödinger, Heisenberg, and Dirac Pictures]]  
Priority: low · Graph: no · Manim: no

Correct and clear.

- [Simplify] Derive (6.1) in two lines from the Schrödinger equation and the definition $|\psi\rangle_I=e^{iH_0t}|\psi\rangle_S$.
- [Structure] Add a three-row table (picture, state evolution, operator evolution) as a summary.

### N2530

Note: [[06.02.02 Time-Evolution Operator and Dyson Series|06.02.02 Time-Evolution Operator and Dyson Series]]  
Priority: low · Graph: yes · Manim: no

Correct Dyson series with a good warning about time ordering.

- [Graph] Plot the square $[t_0,t]^2$ in the $(t_1,t_2)$ plane split by the diagonal into the two triangles $t_2<t_1$ and $t_1<t_2$, illustrating the factor $1/2!$.
- [Structure] The "Time ordering" section is used before it is defined (in the second-order symmetrization); move it above that display.

### N2531

Note: [[06.03 S-Matrix|06.03 S-Matrix]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2532

Note: [[06.03.01 Definition|06.03.01 Definition]]  
Priority: medium · Graph: no · Manim: no

Correct definition, but one symbol denotes two different operators.

- [Correctness] $\mathcal T$ is used both for time ordering ($\mathcal S=\mathcal T\exp(\dots)$) and for the transition operator ($\mathcal S=1+i\mathcal T$) in the same note; rename the transition operator (e.g. $\hat T$ or $\mathbb T$) here and in \[\[06.03.02 General Properties\]\].
- [Example] Show that $\langle f|i\rangle$ for two-particle momentum states is a sum of products of $\delta^{(3)}$ factors, to make clear why it is separated from the connected $(2\pi)^4\delta^{(4)}\mathcal M$ term.

### N2533

Note: [[06.03.02 General Properties|06.03.02 General Properties]]  
Priority: low · Graph: no · Manim: no

Correct and compact.

- [Simplify] Use a symbol for the transition operator that differs from the time-ordering $\mathcal T$ (see 06.03.01).

### N2534

Note: [[06.04 Dyson Formula|06.04 Dyson Formula]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2535

Note: [[06.04.01 Hamiltonian Density and Covariant Form|06.04.01 Hamiltonian Density and Covariant Form]]  
Priority: low · Graph: no · Manim: no

Correct and clear, including the locality caveat.

- [Example] Name a derivative interaction where $\mathcal H_{\mathrm{int}}\neq-\mathcal L_{\mathrm{int}}$ (e.g. scalar QED with $A_\mu\phi^*\overleftrightarrow{\partial^\mu}\phi$, which generates an extra $A_0^2|\phi|^2$ term).

### N2536

Note: [[06.04.02 Perturbative Expansion|06.04.02 Perturbative Expansion]]  
Priority: low · Graph: no · Manim: no

Correct and clear.

- [Example] Give one nontrivial symmetry factor at second order, e.g. the $s$-channel one-loop $2\to2$ diagram with factor $\frac12$, to illustrate "the actual contraction count".

### N2537

Note: [[06.05 Wick's Theorem|06.05 Wick's Theorem]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2538

Note: [[06.05.01 Normal Ordering|06.05.01 Normal Ordering]]  
Priority: low · Graph: no · Manim: no

Correct and clear.

- [Simplify] The convention that $\phi^+$ is the annihilation part is the opposite of some textbooks; put this warning directly after the definition rather than at the end.

### N2539

Note: [[06.05.02 Contractions and the Feynman Propagator|06.05.02 Contractions and the Feynman Propagator]]  
Priority: low · Graph: no · Manim: no

Correct derivation of the contraction and propagators.

- [Simplify] Show the step from the commutator $[\phi^+(x),\phi^-(y)]=\int\frac{d^3k}{(2\pi)^32\omega_k}e^{-ik(x-y)}$ to the four-dimensional Fourier form via the $k^0$ contour (link \[\[05.14.06 Photon propagator in position space\]\] for the contour).

### N2540

Note: [[06.05.03 Statement and Proof|06.05.03 Statement and Proof]]  
Priority: low · Graph: no · Manim: yes

Correct theorem and induction proof.

- [Manim] Animate the induction step: $\phi_1^+$ moving right through a normal-ordered string, splitting off a contraction line each time it passes a $\phi_j^-$.
- [Example] Write out $n=3$ explicitly ($\mathcal N\{\phi_1\phi_2\phi_3\}+\Delta_{12}\phi_3+\Delta_{13}\phi_2+\Delta_{23}\phi_1$) before the general induction.

### N2541

Note: [[06.05.04 Applications|06.05.04 Applications]]  
Priority: low · Graph: no · Manim: no

Correct examples, clearly connected to the $-i\lambda$ amplitude.

- [Example] Show how the $4!$ attachments arise: $\langle p_3p_4|\mathcal N\{\phi^4\}|p_1p_2\rangle=4!\,e^{i(p_3+p_4-p_1-p_2)\cdot x}$, then the $x$ integral gives $(2\pi)^4\delta^{(4)}$.

### N2542

Note: [[06.06 LSZ Reduction Formula|06.06 LSZ Reduction Formula]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2543

Note: [[06.06.01 Asymptotic States|06.06.01 Asymptotic States]]  
Priority: low · Graph: no · Manim: no

Correct and careful about asymptotic limits.

- [Simplify] Write the weak asymptotic condition explicitly, $\phi(x)\to\sqrt Z\,\phi_{\mathrm{in/out}}(x)$ as $t\to\mp\infty$ in matrix elements, since it is the key formula and is only described.

### N2544

Note: [[06.06.02 Renormalization Constant Z|06.06.02 Renormalization Constant Z]]  
Priority: low · Graph: yes · Manim: no

Correct; the measure-label mismatch is flagged instead of fixed.

- [Simplify] Use one Fourier variable ($d^4p$ with $e^{-ip\cdot(x-y)}$) in the first display and drop the callout about $d^4k$ versus $p$.
- [Graph] Sketch the spectral density $\rho(\mu^2)$: a delta peak of weight $Z$ at $m_{\mathrm{ph}}^2$ and a continuum starting at the multiparticle threshold (e.g. $(3m)^2$ in $\phi^4$ with $\phi\to-\phi$ symmetry), illustrating $0\le Z\le1$.
- [Intuition] Add the Källén–Lehmann sum rule consequence $0\le Z\le1$ for canonically normalized fields.

### N2545

Note: [[06.06.03 Formula for Scalar Fields|06.06.03 Formula for Scalar Fields]]  
Priority: high · Graph: no · Manim: no

The main coordinate-space formula is displayed with phases that the note itself says are wrong for its convention, and several callouts correct the source, which makes the theorem hard to use.

- [Correctness] Display the LSZ formula in the chapter convention as the main equation: incoming weight $\int d^4x_j\,e^{-ip_j\cdot x_j}(\Box+m_{\mathrm{ph}}^2)$ and outgoing weight $\int d^4y_k\,e^{+ip'_k\cdot y_k}(\Box+m_{\mathrm{ph}}^2)$; keep the source phases only in a callout.
- [Correctness] In the momentum-space form, replace the full $\tilde G^{(n+m)}$ by the connected Green function when writing $i\mathcal M$, as the callout already states, rather than displaying the uncorrected source expression.
- [Example] Apply the practical formula once to tree-level $\phi^4$ ($Z=1$, $\tilde G_{\mathrm{amp}}=-i\lambda$) to recover $i\mathcal M=-i\lambda$ from 06.05.04.

### N2546

Note: [[06.06.04 Dirac and Vector Fields|06.06.04 Dirac and Vector Fields]]  
Priority: low · Graph: no · Manim: no

Correct with the antifermion spinor assignment fixed.

- [Structure] Put the corrected external-leg assignments ($u$, $\bar u$, $\bar v$ incoming antifermion, $v$ outgoing antifermion, $\epsilon$, $\epsilon^*$) in a small table as the main content and move the source error into a short note.

### N2547

Note: [[06.06.05 Physical Interpretation|06.06.05 Physical Interpretation]]  
Priority: low · Graph: no · Manim: no

Clear summary.

- [Example] Make the rescaling check a formula: $\phi\to c\phi$ gives $G^{(n)}\to c^nG^{(n)}$ and $Z\to c^2Z$, so $(\sqrt Z)^{-n}G^{(n)}$ is invariant.

### N2548

Note: [[06.07 Connected Diagrams and Vacuum Bubbles|06.07 Connected Diagrams and Vacuum Bubbles]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2549

Note: [[06.07.01 Structure of the Diagrams|06.07.01 Structure of the Diagrams]]  
Priority: low · Graph: no · Manim: no

Clear classification; the "Disconnected" bullet is broken by an inserted paragraph.

- [Structure] Move the four-point example paragraph after the list so the three categories appear as one list.

### N2550

Note: [[06.07.02 Cancellation of Vacuum Bubbles|06.07.02 Cancellation of Vacuum Bubbles]]  
Priority: low · Graph: no · Manim: no

Correct, though the order-by-order check is described only in words.

- [Example] Show the first-order check explicitly in $\phi^4$: numerator $\Delta_F(x-y)[1+V_1]+\dots$, denominator $1+V_1$ with $V_1=-\frac{i\lambda}{8}\int d^4z\,\Delta_F(0)^2$, ratio $\Delta_F(x-y)+$ connected terms.

### N2551

Note: [[06.07.03 Connected Decomposition|06.07.03 Connected Decomposition]]  
Priority: low · Graph: no · Manim: no

Correct decomposition and a sound correction of the source's pole-counting argument.

- [Structure] Shorten the presentation of the incorrect source argument to one sentence and lead with the correct statement that LSZ of the full $G$ retains disconnected S-matrix pieces.

### N2552

Note: [[06.08 Cross Sections and Decay Widths|06.08 Cross Sections and Decay Widths]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2553

Note: [[06.08.01 Invariant Phase Space|06.08.01 Invariant Phase Space]]  
Priority: medium · Graph: no · Manim: no

Correct formulas, but the label-versus-count indexing of $d\Phi_n$ forces two dimension statements and is confusing.

- [Simplify] Index the measure by the number of final particles, $d\Phi_N$ with $N=n-2$, so only one dimension statement ($2N-4$) is needed; delete the final sentence about $2n-8$.
- [Example] Show the $p^0$ integration step $\delta(p^2-m^2)\theta(p^0)=\delta(p^0-E)/(2E)$ explicitly.

### N2554

Note: [[06.08.02 Differential Cross Section|06.08.02 Differential Cross Section]]  
Priority: low · Graph: no · Manim: no

Correct and careful about flux and normalization.

- [Example] Show that in the CM frame the invariant flux equals $4|\mathbf p_{\mathrm{CM}}|\sqrt s$, which is used in 06.08.04 and 06.08.06.

### N2555

Note: [[06.08.03 Decay Width|06.08.03 Decay Width]]  
Priority: low · Graph: yes · Manim: no

Correct formulas, with one reused letter.

- [Correctness] $n$ labels the last final particle in $1\to2+\dots+n$ and also the size of a set of identical particles in "a factor $1/n!$ for each set of $n$ identical final particles"; use a different letter (e.g. $1/k!$) for the identical set.
- [Example] Add the two-body width $\Gamma=\frac{|\mathbf p|}{8\pi M^2}\overline{|\mathcal M|^2}$ as the most-used special case.
- [Graph] Plot the two-body phase-space factor $|\mathbf p|/(8\pi M^2)$ against $M/(m_2+m_3)\in[1,5]$, showing the square-root threshold behaviour.

### N2556

Note: [[06.08.04 2 → 2 Kinematics in the Center-of-Mass Frame|06.08.04 2 → 2 Kinematics in the Center-of-Mass Frame]]  
Priority: low · Graph: no · Manim: no

Correct results; the derivation of $d\Phi_2$ is only described in words.

- [Example] Show the radial integral: $\int\frac{p^2dp}{16\pi^2E_3E_4}\delta(E_3+E_4-\sqrt s)=\frac{p_f}{16\pi^2\sqrt s}$ using $d(E_3+E_4)/dp=p\sqrt s/(E_3E_4)$.
- [Example] Apply (6.9) to $\phi^4$: $d\sigma/d\Omega=\lambda^2/(64\pi^2s)$ and $\sigma=\lambda^2/(32\pi s)$ with the identical-particle factor $\frac12$.

### N2557

Note: [[06.08.05 Mandelstam Variables|06.08.05 Mandelstam Variables]]  
Priority: low · Graph: yes · Manim: no

Correct and well checked; the Compton formula is quoted without derivation.

- [Graph] Plot $t$ and $u$ (in units of $s-4m^2$) against $\cos\theta\in[-1,1]$ for equal-mass elastic scattering, showing the $t\leftrightarrow u$ mirror symmetry.
- [Graph] Plot $\omega'/\omega$ against $\theta\in[0,\pi]$ for $\omega/m_e=0.1,1,10$ from the Compton formula.
- [Example] Derive the Compton shift in two lines from $(p+k-k')^2=m_e^2$, i.e. $p\cdot(k-k')=k\cdot k'$.

### N2558

Note: [[06.08.06 Total Cross Section and the Optical Theorem|06.08.06 Total Cross Section and the Optical Theorem]]  
Priority: low · Graph: no · Manim: no

Correct with a good perturbative consistency check.

- [Example] Make the $\phi^4$ check quantitative: the one-loop $s$-channel bubble has $\mathrm{Im}\,\mathcal M=\frac{\lambda^2}{32\pi}\sqrt{1-4m^2/s}$, which reproduces $\sigma_{\mathrm{tot}}=\lambda^2/(32\pi s)$ in the massless limit via (6.10).

### N2559

Note: [[06.09 From the Lagrangian to Observables|06.09 From the Lagrangian to Observables]]  
Priority: low · Graph: no · Manim: no

Clear hub.

- [Structure] No change needed.

### N2560

Note: [[06.09.01 Synthesis of the Perturbative Program|06.09.01 Synthesis of the Perturbative Program]]  
Priority: low · Graph: no · Manim: no

Clear synthesis.

- [Structure] Add the relevant note link to each of the six steps (e.g. step 4 to \[\[06.05.03 Statement and Proof\]\], step 5 to \[\[06.06.03 Formula for Scalar Fields\]\]).

### N2561

Note: [[06.09.02 Physical Meaning of Propagators|06.09.02 Physical Meaning of Propagators]]  
Priority: low · Graph: yes · Manim: no

Correct and careful interpretation.

- [Graph] Plot $|i/(k^2-m^2+i\epsilon)|$ against $k^2/m^2$ for a small finite $\epsilon$ (e.g. $\epsilon=0.05m^2$), showing the peak at the mass shell and the off-shell tails.

### N2562

Note: [[06.10 Examples|06.10 Examples]]  
Priority: medium · Graph: no · Manim: no

Correct amplitudes, but the Yukawa Lagrangian is displayed with a wrong mass sign and one mass symbol has two meanings.

- [Correctness] The displayed Yukawa density has $+\frac{\mu^2}2\phi^2$; display the correct $-\frac{\mu^2}2\phi^2$ (consistent with the propagator used in the amplitude) and keep the source sign only in a callout.
- [Correctness] $\mechanical{m}$ is the scalar mass in Example 6.8 and the fermion mass in Example 6.9; the table entry "mass parameters" lumps them. Use e.g. $M$ for the fermion mass or split the table rows by example.
- [Simplify] The superscript in $G^{(2)}$ means two-point function, while $|_{\lambda^2}$ marks second order; state this explicitly to avoid reading $(2)$ as the order.
- [Example] Draw or link the setting-sun and tadpole diagrams (Chapter 7) so the three topologies can be identified visually.

### N2563

Note: [[06.11 Connection to Feynman Diagrams|06.11 Connection to Feynman Diagrams]]  
Priority: low · Graph: no · Manim: yes

Short, correct bridge note that states the line/vertex dictionary clearly but never shows a concrete Wick term turning into a picture.

- [Example] Add one worked translation: the first-order term $\langle p_1'p_2'|\mathcal N\{\phi^4(x)\}|p_1p_2\rangle$ and its four external attachments drawn as the contact vertex, with the $4!$ attachments cancelling the $1/4!$ to give $-i\lambda$.
- [Manim] Animate the six-field pairing $\langle\phi_1\cdots\phi_6\rangle$: arcs joining field labels morph into propagator lines between points, showing that one complete pairing is one diagram.
- [Links] Link "Chapter 7" to \[\[07.01 From Wick's Theorem to Diagrams\]\] and mention that Chapter 7 renames the quartic coupling from $\lambda$ to $g$.

### N2564

Note: [[06.12 Exercises|06.12 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise hub with a useful reading order; no changes needed.

- [Structure] No change needed; optionally drop the redundant one-line "Source solutions" section, which repeats the previous sentence.

### N2565

Note: [[06.12.01 Time ordering and the Feynman propagator|06.12.01 Time ordering and the Feynman propagator]]  
Priority: low · Graph: yes · Manim: no

Correct derivation with a verified step-function representation, but the final step to the four-dimensional integral is only asserted.

- [Simplify] After the step-function representation, write out the substitution: insert $\theta(\pm\tau)$, shift to $k^0$, and combine $\frac{1}{2\omega_{\mathbf k}}[\frac{1}{k^0-\omega_{\mathbf k}+i0}-\frac{1}{k^0+\omega_{\mathbf k}-i0}]=\frac{1}{k^2-m^2+i\epsilon}$, instead of "as in Chapter 3".
- [Graph] Add a 2D complex-$k^0$ plane figure with poles at $k^0=\pm(\omega_{\mathbf k}-i\epsilon)$ and the lower/upper closing contours for $\tau>0$ and $\tau<0$.
- [Intuition] State in one sentence why only the $\phi^+(x)\phi^-(y)$ term is not normal ordered (annihilator to the left of a creator) before using the commutator.

### N2566

Note: [[06.12.02 Wick's theorem for six fields|06.12.02 Wick's theorem for six fields]]  
Priority: low · Graph: no · Manim: no

Correct and complete enumeration of the fifteen pairings with a useful counting recursion.

- [Simplify] The paragraph on operator-identity terms with one or two contractions repeats the earlier sentence about incomplete contractions; merge them into one sentence.
- [Intuition] Add the general count $(2n-1)!!$ for $2n$ fields and note that an odd number of fields gives zero, so the six-field case reads as one instance of a rule.

### N2567

Note: [[06.12.03 Fermion propagator from Wick's theorem|06.12.03 Fermion propagator from Wick's theorem]]  
Priority: low · Graph: no · Manim: no

Correct derivation including both fermionic minus signs and a good inverse-Dirac-operator check.

- [Structure] The exercise writes spinors as $u_\alpha^s(k)$ and the operator as $\not\partial$ while the solution uses $u_\alpha(k,s)$ and $\not\partial_x$; use one notation throughout.
- [Simplify] Show explicitly that $(i\not\partial_x+m)$ acting on $e^{+ik\cdot(x-y)}$ gives $-(\not k-m)$, which is exactly where the fermionic exchange sign and the $v\bar v$ mass sign combine; this is the step readers most often lose.

### N2568

Note: [[06.12.04 Mandelstam identities for equal-mass scattering|06.12.04 Mandelstam identities for equal-mass scattering]]  
Priority: low · Graph: yes · Manim: no

Clean, correct derivation with good sign and sum-rule checks.

- [Graph] Plot $t/(s-4m^2)$ and $u/(s-4m^2)$ against $\cos\theta\in[-1,1]$ (two straight lines between 0 and $-1$), marking their crossing at $\theta=\pi/2$ and the forward and backward limits $t=0$, $u=0$.
- [Intuition] Add one sentence noting that $s\ge4m^2$, $t\le0$, $u\le0$ define the physical s-channel region, linking to the Mandelstam-channel discussion in Chapter 7.

### N2569

Note: [[06.12.05 Lorentz-invariant flux factor|06.12.05 Lorentz-invariant flux factor]]  
Priority: low · Graph: no · Manim: no

Correct and careful, with a good counterexample for non-collinear beams, though the CM algebra step is skipped.

- [Simplify] Show the CM step: with $E_{1,2}^2=|\mathbf p_i|^2+m_{1,2}^2$, $(E_1E_2+|\mathbf p_i|^2)^2-m_1^2m_2^2=|\mathbf p_i|^2(E_1+E_2)^2$, so the reader sees where $\sqrt s$ comes from.
- [Example] Make the perpendicular-beam counterexample numeric: for $|\mathbf v_1|=|\mathbf v_2|=v$ at 90 degrees compare $|\mathbf v_1-\mathbf v_2|=\sqrt2\,v$ with the Møller value $\sqrt{2v^2-v^4}$.

### N2570

Note: [[06.12.06 Leading total cross section in quartic scalar theory|06.12.06 Leading total cross section in quartic scalar theory]]  
Priority: low · Graph: yes · Manim: no

Correct result and dimensional check, with a helpful explanation of the identical-particle factor.

- [Graph] Plot $m^2\sigma_{\mathrm{tot}}/\lambda^2=1/(32\pi\,s/m^2)$ versus $\sqrt s/m$ from 2 to 10 to show the $1/s$ fall-off from the threshold value $\lambda^2/(128\pi m^2)$.
- [Simplify] The threshold paragraph is dense; state simply that flux and two-body phase space both scale as $|\mathbf p|$ near threshold, so their ratio stays finite.

### N2571

Note: [[06.12.07 LSZ for the free scalar field|06.12.07 LSZ for the free scalar field]]  
Priority: medium · Graph: no · Manim: no

Correct in substance and honest about the source error, but the main message (free $S=\mathbf 1$, connected part zero) is buried under formal distributional caveats.

- [Structure] Lead with the conclusion ($\langle p'|S|p\rangle=\langle p'|p\rangle$, connected amplitude zero) and then present the formal double amputation as the reason the source's route fails.
- [Simplify] Merge the last two paragraphs (wave-packet check and the four-dimensional delta remark), which repeat the same point about not cancelling one pole and setting the remaining inverse factor to zero.
- [Intuition] Add one sentence: LSZ amputates the external poles, and a free two-point function is nothing but an external pole, so after amputation nothing nontrivial remains.

### N2572

Note: [[06.12.08 Scalar decay in Yukawa theory|06.12.08 Scalar decay in Yukawa theory]]  
Priority: low · Graph: yes · Manim: no

Correct and complete calculation; all intermediate factors and the final width check.

- [Graph] Plot $\Gamma/(g^2M/8\pi)=(1-4m^2/M^2)^{3/2}$ versus $2m/M\in[0,1]$, optionally with the pseudoscalar $(1-4m^2/M^2)^{1/2}$ curve, to show the threshold suppression.
- [Intuition] Explain the exponent $3/2$: one power of $\beta=\sqrt{1-4m^2/M^2}$ from phase space and $\beta^2$ from the spin sum, because a scalar decaying to $f\bar f$ by parity must produce a P-wave pair.

### N2573

Note: [[06.12.09 Optical theorem at second order in quartic theory|06.12.09 Optical theorem at second order in quartic theory]]  
Priority: low · Graph: no · Manim: no

Correct verification with matching factors and a useful cut-convention note; the t/u-channel paragraph is hard to follow.

- [Simplify] Rewrite the t/u-channel paragraph as one statement: at forward kinematics $t=0$ and $u=4m^2-s<0$, both below the $4m^2$ two-particle threshold, so only the s-channel bubble has an imaginary part.
- [Intuition] Add that the cut puts both internal lines on shell, turning the loop into the tree amplitude squared times phase space; a small figure of the bubble with a dashed cut line would help.

### N2574

Note: [[06.12.10 Symmetry factor of the disconnected double figure eight|06.12.10 Symmetry factor of the disconnected double figure eight]]  
Priority: low · Graph: no · Manim: no

Correct count and automorphism check, but one letter is reused for two different quantities.

- [Correctness] $S$ is used both for the second-order Dyson term $S^{(2)}$ and for the symmetry factor $S=128$; rename the Dyson term (for example $\mathcal S^{(2)}$) and add it to the quantity table.
- [Simplify] Add one sentence explaining why the $1/2!$ survives here: the two vertices are self-contracted, so exchanging $x$ and $y$ gives no new contraction, unlike connected second-order graphs where it cancels the Dyson factor.
