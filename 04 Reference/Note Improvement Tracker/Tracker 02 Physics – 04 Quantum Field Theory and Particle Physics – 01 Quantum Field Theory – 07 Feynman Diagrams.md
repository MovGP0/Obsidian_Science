---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/07 Feynman Diagrams"
---

> [!TLDR]
> This note tracks the review of the 55 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/07 Feynman Diagrams`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 5 possible errors or notation conflicts. 5 of them are verified (5 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2596|N2596]] 07.06.02 Annihilation - e⁺e⁻ → μ⁺μ⁻: Equation (7.4) displays $4(g^{\mu\nu}g^{\rho\sigma}-g^{\mu\rho}g^{\nu\sigma}+g^{\sigma\rho}g^{\mu\nu})$; display the correct $4(g^{\mu\nu}g^{\rho\sigma}-g^{\mu\rho}g^{\nu\sigma}+g^{\mu\sigma}g^{\nu\rho})$ and keep the misprint only in the callout, so readers cannot copy the wrong identity. **Fixed:** Displayed +g^{mu sigma}g^{nu rho} in (7.4) and moved the misprint to the callout.
- [[#N2606|N2606]] 07.09.02 Counting Divergences: "Other amplitudes with more external legs have negative superficial degree" leaves out $E_e=0,E_\gamma=1$ ($D=3$), $E_e=0,E_\gamma=3$ ($D=1$) and the vacuum graph ($D=4$), which also have $D\ge0$; add them to the table with "vanishes by Lorentz invariance / Furry's theorem" and "vacuum energy, cancels in normalized amplitudes". **Fixed:** Verified D=3, D=1, D=4; added three rows (vacuum energy cancels; one- and three-photon amplitudes vanish by Lorentz invariance or Furry's theorem) and changed "The source lists" to "The cases are".
- [[#N2606|N2606]] 07.09.02 Counting Divergences: The physical-quantity table lists $\delta\mechanical{m}$, which the note never uses; either write the chiral-symmetry statement as $\delta\mechanical{m}\propto\mechanical{m}\ln(\energy{\Lambda}/\mechanical{m})$ in the text or drop it from the table. **Fixed:** Wrote delta m proportional to m ln(Lambda/m) in the chiral-symmetry sentence.
- [[#N2608|N2608]] 07.09.04 The Vertex Correction: The caption "The logarithmic divergence contributes to charge renormalization" is misleading for QED: by $Z_1=Z_2$ the vertex divergence cancels against the electron field renormalization, and the charge is renormalized only through $Z_3$ (vacuum polarization); rephrase the caption. **Fixed:** Caption now says the vertex constant equals the electron field constant by the Ward identity, so charge is renormalized only by vacuum polarization.
- [[#N2626|N2626]] 07.15.08 Electron–muon scattering amplitude: Symbol clash: $\bar u_\mu(\mechanical{q}')\gamma_\mu u_\mu(\mechanical{q})$ and $\signal{L}_{\mu,\mu\nu}$ use $\mu$ both as the muon species label and as a contracted Lorentz index; use e.g. $u_{(\mu)}$ and $\signal{L}^{(\mu)}_{\alpha\beta}$, or Lorentz indices $\alpha,\beta$. **Fixed:** Renamed muon spinors to u_{(mu)} and the muon tensor to L^{(mu)}_{mu nu} (also in the table) and added a sentence that (mu) is the species label.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2575 | [[07.01 From Wick's Theorem to Diagrams\|07.01 From Wick's Theorem to Diagrams]] | Analyzed | low | no | yes | [[#N2575\|View]] |
| N2576 | [[07.01.01 Translation Rules\|07.01.01 Translation Rules]] | Analyzed | low | no | no | [[#N2576\|View]] |
| N2577 | [[07.02 Position-Space Feynman Rules - φ⁴ Theory\|07.02 Position-Space Feynman Rules - φ⁴ Theory]] | Analyzed | low | no | no | [[#N2577\|View]] |
| N2578 | [[07.02.01 The Propagator and the Internal Line\|07.02.01 The Propagator and the Internal Line]] | Analyzed | low | yes | no | [[#N2578\|View]] |
| N2579 | [[07.02.02 The Vertex in Position Space\|07.02.02 The Vertex in Position Space]] | Analyzed | low | no | no | [[#N2579\|View]] |
| N2580 | [[07.02.03 φφ → φφ Scattering at First Order\|07.02.03 φφ → φφ Scattering at First Order]] | Analyzed | low | no | no | [[#N2580\|View]] |
| N2581 | [[07.03 Momentum-Space Feynman Rules\|07.03 Momentum-Space Feynman Rules]] | Analyzed | low | no | no | [[#N2581\|View]] |
| N2582 | [[07.03.01 Momentum-Space Feynman Rules for φ⁴\|07.03.01 Momentum-Space Feynman Rules for φ⁴]] | Analyzed | low | no | no | [[#N2582\|View]] |
| N2583 | [[07.03.02 φφ → φφ Scattering at One Loop\|07.03.02 φφ → φφ Scattering at One Loop]] | Analyzed | low | no | no | [[#N2583\|View]] |
| N2584 | [[07.04 Symmetry Factors\|07.04 Symmetry Factors]] | Analyzed | low | no | no | [[#N2584\|View]] |
| N2585 | [[07.04.01 General Rule\|07.04.01 General Rule]] | Analyzed | medium | no | no | [[#N2585\|View]] |
| N2586 | [[07.04.02 Graphical Examples of Symmetry Factors\|07.04.02 Graphical Examples of Symmetry Factors]] | Analyzed | medium | no | no | [[#N2586\|View]] |
| N2587 | [[07.05 Feynman Rules for QED\|07.05 Feynman Rules for QED]] | Analyzed | low | no | no | [[#N2587\|View]] |
| N2588 | [[07.05.01 Internal Propagators\|07.05.01 Internal Propagators]] | Analyzed | low | no | no | [[#N2588\|View]] |
| N2589 | [[07.05.02 External Lines\|07.05.02 External Lines]] | Analyzed | low | no | no | [[#N2589\|View]] |
| N2590 | [[07.05.03 The QED Vertex\|07.05.03 The QED Vertex]] | Analyzed | low | no | no | [[#N2590\|View]] |
| N2591 | [[07.05.04 Signs from Fermion Loops\|07.05.04 Signs from Fermion Loops]] | Analyzed | low | no | no | [[#N2591\|View]] |
| N2592 | [[07.05.05 Ordering along Fermion Lines\|07.05.05 Ordering along Fermion Lines]] | Analyzed | low | no | no | [[#N2592\|View]] |
| N2593 | [[07.05.06 Summary Table of Feynman Rules for QED\|07.05.06 Summary Table of Feynman Rules for QED]] | Analyzed | low | no | no | [[#N2593\|View]] |
| N2594 | [[07.06 Worked Examples in QED\|07.06 Worked Examples in QED]] | Analyzed | low | no | no | [[#N2594\|View]] |
| N2595 | [[07.06.01 Møller Scattering - e⁻e⁻ → e⁻e⁻\|07.06.01 Møller Scattering - e⁻e⁻ → e⁻e⁻]] | Analyzed | low | no | no | [[#N2595\|View]] |
| N2596 | [[07.06.02 Annihilation - e⁺e⁻ → μ⁺μ⁻\|07.06.02 Annihilation - e⁺e⁻ → μ⁺μ⁻]] | Analyzed | medium | yes | no | [[#N2596\|View]] |
| N2597 | [[07.06.03 Compton Scattering - e⁻γ → e⁻γ\|07.06.03 Compton Scattering - e⁻γ → e⁻γ]] | Analyzed | low | yes | no | [[#N2597\|View]] |
| N2598 | [[07.07 Crossing Symmetry\|07.07 Crossing Symmetry]] | Analyzed | low | no | no | [[#N2598\|View]] |
| N2599 | [[07.07.01 Crossing Rule for Fermions and Photons\|07.07.01 Crossing Rule for Fermions and Photons]] | Analyzed | medium | no | no | [[#N2599\|View]] |
| N2600 | [[07.07.02 Crossing Examples\|07.07.02 Crossing Examples]] | Analyzed | medium | no | yes | [[#N2600\|View]] |
| N2601 | [[07.08 Mandelstam Variables and Scattering Channels\|07.08 Mandelstam Variables and Scattering Channels]] | Analyzed | low | yes | no | [[#N2601\|View]] |
| N2602 | [[07.08.01 Physical Interpretation of the Channels\|07.08.01 Physical Interpretation of the Channels]] | Analyzed | low | no | no | [[#N2602\|View]] |
| N2603 | [[07.08.02 The Variables in the Center-of-Mass Frame\|07.08.02 The Variables in the Center-of-Mass Frame]] | Analyzed | medium | yes | no | [[#N2603\|View]] |
| N2604 | [[07.09 One-Loop Diagrams and Ultraviolet Divergences\|07.09 One-Loop Diagrams and Ultraviolet Divergences]] | Analyzed | low | no | no | [[#N2604\|View]] |
| N2605 | [[07.09.01 The Photon Propagator at One Loop\|07.09.01 The Photon Propagator at One Loop]] | Analyzed | medium | yes | no | [[#N2605\|View]] |
| N2606 | [[07.09.02 Counting Divergences\|07.09.02 Counting Divergences]] | Analyzed | medium | no | no | [[#N2606\|View]] |
| N2607 | [[07.09.03 Electron Self-Energy\|07.09.03 Electron Self-Energy]] | Analyzed | low | no | no | [[#N2607\|View]] |
| N2608 | [[07.09.04 The Vertex Correction\|07.09.04 The Vertex Correction]] | Analyzed | medium | no | no | [[#N2608\|View]] |
| N2609 | [[07.10 The Ward Identity and Its Consequences\|07.10 The Ward Identity and Its Consequences]] | Analyzed | medium | no | no | [[#N2609\|View]] |
| N2610 | [[07.11 Form Factors and the Anomalous Magnetic Moment\|07.11 Form Factors and the Anomalous Magnetic Moment]] | Analyzed | medium | no | no | [[#N2610\|View]] |
| N2611 | [[07.12 Vacuum Diagrams and Connected Structure\|07.12 Vacuum Diagrams and Connected Structure]] | Analyzed | low | no | no | [[#N2611\|View]] |
| N2612 | [[07.12.01 Vacuum Diagrams\|07.12.01 Vacuum Diagrams]] | Analyzed | low | no | no | [[#N2612\|View]] |
| N2613 | [[07.12.02 Connectedness and 1PI Diagrams\|07.12.02 Connectedness and 1PI Diagrams]] | Analyzed | low | no | no | [[#N2613\|View]] |
| N2614 | [[07.13 Trace Techniques\|07.13 Trace Techniques]] | Analyzed | low | no | no | [[#N2614\|View]] |
| N2615 | [[07.13.01 Clifford Algebra in d = 4 Dimensions\|07.13.01 Clifford Algebra in d = 4 Dimensions]] | Analyzed | low | no | no | [[#N2615\|View]] |
| N2616 | [[07.13.02 Traces of γ Matrices\|07.13.02 Traces of γ Matrices]] | Analyzed | low | no | no | [[#N2616\|View]] |
| N2617 | [[07.14 Bhabha Scattering - e⁺e⁻ → e⁺e⁻\|07.14 Bhabha Scattering - e⁺e⁻ → e⁺e⁻]] | Analyzed | medium | yes | no | [[#N2617\|View]] |
| N2618 | [[07.15 Exercises\|07.15 Exercises/07.15 Exercises]] | Analyzed | low | no | no | [[#N2618\|View]] |
| N2619 | [[07.15.01 Symmetry factors in quartic scalar theory\|07.15 Exercises/07.15.01 Symmetry factors in quartic scalar theory]] | Analyzed | low | no | no | [[#N2619\|View]] |
| N2620 | [[07.15.02 Scalar propagator in position space\|07.15 Exercises/07.15.02 Scalar propagator in position space]] | Analyzed | low | yes | no | [[#N2620\|View]] |
| N2621 | [[07.15.03 Gamma-matrix traces\|07.15 Exercises/07.15.03 Gamma-matrix traces]] | Analyzed | low | no | no | [[#N2621\|View]] |
| N2622 | [[07.15.04 Compton cross section in the Thomson limit\|07.15 Exercises/07.15.04 Compton cross section in the Thomson limit]] | Analyzed | low | yes | no | [[#N2622\|View]] |
| N2623 | [[07.15.05 Crossing from Compton scattering to two-photon annihilation\|07.15 Exercises/07.15.05 Crossing from Compton scattering to two-photon annihilation]] | Analyzed | low | yes | no | [[#N2623\|View]] |
| N2624 | [[07.15.06 Transversality of the vacuum-polarization tensor\|07.15 Exercises/07.15.06 Transversality of the vacuum-polarization tensor]] | Analyzed | low | no | no | [[#N2624\|View]] |
| N2625 | [[07.15.07 Schwinger magnetic moment\|07.15 Exercises/07.15.07 Schwinger magnetic moment]] | Analyzed | medium | no | no | [[#N2625\|View]] |
| N2626 | [[07.15.08 Electron–muon scattering amplitude\|07.15 Exercises/07.15.08 Electron–muon scattering amplitude]] | Analyzed | medium | yes | no | [[#N2626\|View]] |
| N2627 | [[07.15.09 Tadpole in quartic scalar theory\|07.15 Exercises/07.15.09 Tadpole in quartic scalar theory]] | Analyzed | low | yes | no | [[#N2627\|View]] |
| N2628 | [[07.15.10 Power counting in quartic scalar theory\|07.15 Exercises/07.15.10 Power counting in quartic scalar theory]] | Analyzed | low | no | no | [[#N2628\|View]] |
| N2629 | [[02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/07 Feynman Diagrams/07.16 Summary\|07.16 Summary]] | Analyzed | low | no | no | [[#N2629\|View]] |

## Suggestions

### N2575

Note: [[07.01 From Wick's Theorem to Diagrams|07.01 From Wick's Theorem to Diagrams]]  
Priority: low · Graph: no · Manim: yes

Clear chapter introduction with good caveats about what lines mean; no math errors.

- [Structure] I could not confirm that the opening quotation is something Freeman Dyson actually said; verify the source or remove the attribution.
- [Manim] Animate the first-order matrix element: the four fields of $\phi^4(x)$ connect to the four external particles and then collapse into the contact-vertex picture, with the $4!$ attachment count displayed.
- [Example] Show one contraction explicitly (for example $\langle0|\mathcal T\{\phi(x)\phi(y)\}|0\rangle$ drawn as a line) before the dictionary is stated in words.

### N2576

Note: [[07.01.01 Translation Rules|07.01.01 Translation Rules]]  
Priority: low · Graph: no · Manim: no

Correct, compact dictionary with a good plane-wave sign check.

- [Example] Add a minimal check: one contact vertex with two incoming and two outgoing plane waves integrates to $(2\pi)^4\delta^{(4)}(p_1+p_2-p_1'-p_2')$, linking to [[07.02.03 φφ → φφ Scattering at First Order]].

### N2577

Note: [[07.02 Position-Space Feynman Rules - φ⁴ Theory|07.02 Position-Space Feynman Rules - φ⁴ Theory]]  
Priority: low · Graph: no · Manim: no

Short hub that orients the reader well.

- [Structure] No change needed.

### N2578

Note: [[07.02.01 The Propagator and the Internal Line|07.02.01 The Propagator and the Internal Line]]  
Priority: low · Graph: yes · Manim: no

Correct and clear; the propagator remains abstract without showing how it behaves with separation.

- [Graph] Plot the spacelike propagator $\Delta(r)=\frac{m}{4\pi^2 r}K_1(mr)$ (in units of $m^2$) versus $mr\in[0.1,5]$ on a log axis to show the $1/(4\pi^2r^2)$ short-distance behavior and the $e^{-mr}$ decay set by the mass.
- [Intuition] Add one sentence that the propagator is nonzero at spacelike separation, which is a further reason it cannot be read as a classical trajectory.

### N2579

Note: [[07.02.02 The Vertex in Position Space|07.02.02 The Vertex in Position Space]]  
Priority: low · Graph: no · Manim: no

Correct and readable explanation of why $1/4!$ cancels.

- [Example] Make the $4!$ count explicit: $p_1$ can attach to 4 fields, $p_2$ to 3, $p_1'$ to 2, $p_2'$ to 1, giving 24, and contrast it with the tadpole count of 12.

### N2580

Note: [[07.02.03 φφ → φφ Scattering at First Order|07.02.03 φφ → φφ Scattering at First Order]]  
Priority: low · Graph: no · Manim: no

Correct and clear tree-level example with a good note on the two amplitude normalizations.

- [Simplify] Give the delta-containing quantity its own symbol (for example $\langle f|iT|i\rangle$) instead of reusing $i\mathcal M$; the note and the "—" unit entry in the table then become unnecessary.

### N2581

Note: [[07.03 Momentum-Space Feynman Rules|07.03 Momentum-Space Feynman Rules]]  
Priority: low · Graph: no · Manim: no

Clear hub with a correct loop-counting argument.

- [Intuition] State the counting formula $L=I-V+1$ explicitly, since the paragraph only describes it in words.

### N2582

Note: [[07.03.01 Momentum-Space Feynman Rules for φ⁴|07.03.01 Momentum-Space Feynman Rules for φ⁴]]  
Priority: low · Graph: no · Manim: no

Correct rule list with a good dimension check.

- [Structure] Add the external-line rule (factor 1 for each amputated external scalar line) to the numbered list so it parallels the QED table.
- [Simplify] Mark the fermion-loop rule explicitly as a forward reference to QED, since it never applies in this note.

### N2583

Note: [[07.03.02 φφ → φφ Scattering at One Loop|07.03.02 φφ → φφ Scattering at One Loop]]  
Priority: low · Graph: no · Manim: no

Correct bubble expression; the definition of $q$ is repeated and the paragraph order is disjointed.

- [Simplify] Define $q=p_1+p_2$ once (it is stated twice, before and after the integral) and place the paragraph on the factor one half directly after the $S=2$ sentence.
- [Intuition] Give the power-counting reason for the logarithmic divergence ($d^4k$ against $k^{-4}$ from two propagators) and write the full one-loop sum as the same integral with $q^2\to s,t,u$.

### N2584

Note: [[07.04 Symmetry Factors|07.04 Symmetry Factors]]  
Priority: low · Graph: no · Manim: no

Clear hub with a correct definition and a good boundary example.

- [Structure] No change needed.

### N2585

Note: [[07.04.01 General Rule|07.04.01 General Rule]]  
Priority: medium · Graph: no · Manim: no

The tadpole and figure-eight counts are correct and well explained, but the "double bubble" example is ambiguous.

- [Simplify] Specify the "double bubble" precisely (which correlation function, how many external legs, which loops are in series); at second order in $\phi^4$ both the two-point cactus and the two separate tadpoles have $S=4$, and the reader cannot tell which graph is meant or check it.
- [Example] Add the explicit Wick count for the four-point s-channel bubble ($S=2$) as a third worked count, since it is the case used most later.

### N2586

Note: [[07.04.02 Graphical Examples of Symmetry Factors|07.04.02 Graphical Examples of Symmetry Factors]]  
Priority: medium · Graph: no · Manim: no

Panel (a) is correct; panel (b) is acknowledged in the note to be a cubic topology, which makes the figure confusing in a quartic-theory chapter.

- [Example] Replace panel (b) with a genuine quartic example, for example the two-loop sunset self-energy with $S=3!=6$ or the four-point s-channel bubble with $S=2$, so the warning callout is no longer needed.
- [Simplify] Remove the paragraph about "independent tests" once the figure is fixed; it exists only to explain the source mismatch.

### N2587

Note: [[07.05 Feynman Rules for QED|07.05 Feynman Rules for QED]]  
Priority: low · Graph: no · Manim: no

Correct hub; one sentence about the charge convention and units is unclear.

- [Simplify] Replace "This makes the charge convention, rather than a unit conversion, the relevant issue for its sign" with a plain statement that $e>0$, the electron charge is $-e$, and this fixes the sign of the vertex factor.

### N2588

Note: [[07.05.01 Internal Propagators|07.05.01 Internal Propagators]]  
Priority: low · Graph: no · Manim: no

Correct propagators with useful caveats about gauge and polarization.

- [Structure] Give the general covariant-gauge propagator $\frac{-i}{k^2+i\epsilon}[g^{\mu\nu}-(1-\xi)k^\mu k^\nu/k^2]$ once, so the "Feynman gauge, $\xi=1$" label has a referent.

### N2589

Note: [[07.05.02 External Lines|07.05.02 External Lines]]  
Priority: low · Graph: no · Manim: no

Correct table and a helpful row/column-spinor check.

- [Example] Illustrate the check with one chain: for $e^+(p_+)e^-(p_-)\to\gamma^*$ it is $\bar v(p_+)\gamma^\mu u(p_-)$, row spinor on the left and column spinor on the right.

### N2590

Note: [[07.05.03 The QED Vertex|07.05.03 The QED Vertex]]  
Priority: low · Graph: no · Manim: no

Correct and clear.

- [Structure] No change needed.

### N2591

Note: [[07.05.04 Signs from Fermion Loops|07.05.04 Signs from Fermion Loops]]  
Priority: low · Graph: no · Manim: no

Correct statement of the loop sign and trace, but the origin of the minus sign is only asserted.

- [Example] Show the two-vertex vacuum-polarization contraction explicitly: closing the chain requires one odd permutation of fermion fields, giving $-\mathrm{Tr}[\gamma^\mu S_F(x-y)\gamma^\nu S_F(y-x)]$.

### N2592

Note: [[07.05.05 Ordering along Fermion Lines|07.05.05 Ordering along Fermion Lines]]  
Priority: low · Graph: no · Manim: no

Correct rule, but the constructive recipe appears only in the last paragraph.

- [Structure] Move the last paragraph (start at the outgoing bra and follow the line against the arrow) to the top, then give the Compton ordering as an application.

### N2593

Note: [[07.05.06 Summary Table of Feynman Rules for QED|07.05.06 Summary Table of Feynman Rules for QED]]  
Priority: low · Graph: no · Manim: no

Correct reference table with a useful three-pass procedure.

- [Structure] No change needed; optionally add a row for the relative minus sign between diagrams that differ by exchange of identical external fermions.

### N2594

Note: [[07.06 Worked Examples in QED|07.06 Worked Examples in QED]]  
Priority: low · Graph: no · Manim: no

Clear hub that previews the three examples well.

- [Structure] No change needed.

### N2595

Note: [[07.06.01 Møller Scattering - e⁻e⁻ → e⁻e⁻|07.06.01 Møller Scattering - e⁻e⁻ → e⁻e⁻]]  
Priority: low · Graph: no · Manim: no

Correct amplitudes with a clear explanation of the relative sign.

- [Example] Quote the massless unpolarized result $\overline{|\mathcal M|^2}=2e^4[\frac{s^2+u^2}{t^2}+\frac{s^2+t^2}{u^2}+\frac{2s^2}{tu}]$ so the reader sees the interference term in the final answer.
- [Links] Link to [[08.07 Møller Scattering - e⁻e⁻ → e⁻e⁻]] for the squared amplitude.

### N2596

Note: [[07.06.02 Annihilation - e⁺e⁻ → μ⁺μ⁻|07.06.02 Annihilation - e⁺e⁻ → μ⁺μ⁻]]  
Priority: medium · Graph: yes · Manim: no

The calculation and numbers are correct (all factors and the 11 pb estimate check), but trace identity (7.4) is displayed with a known misprint.

- [Correctness] Equation (7.4) displays $4(g^{\mu\nu}g^{\rho\sigma}-g^{\mu\rho}g^{\nu\sigma}+g^{\sigma\rho}g^{\mu\nu})$; display the correct $4(g^{\mu\nu}g^{\rho\sigma}-g^{\mu\rho}g^{\nu\sigma}+g^{\mu\sigma}g^{\nu\rho})$ and keep the misprint only in the callout, so readers cannot copy the wrong identity.
- [Simplify] Show the intermediate step behind (7.5): for massless legs the $g^{\mu\nu}$ terms cancel and $L_e^{\mu\nu}L^{(m)}_{\mu\nu}=32[(q_1\cdot p_2)(q_2\cdot p_1)+(q_1\cdot p_1)(q_2\cdot p_2)]$.
- [Graph] Add a polar plot of $d\sigma/d\Omega\propto1+\cos^2\theta$ for $\theta\in[0,\pi]$ to show the forward-backward symmetric shape.
- [Structure] Give the total cross section its own equation label instead of retaining the duplicated (7.7).

### N2597

Note: [[07.06.03 Compton Scattering - e⁻γ → e⁻γ|07.06.03 Compton Scattering - e⁻γ → e⁻γ]]  
Priority: low · Graph: yes · Manim: no

Correct amplitudes, Klein–Nishina formula and Thomson limit; the cross-section derivation is only quoted.

- [Graph] Add a polar plot of the Klein–Nishina $d\sigma/d\Omega$ in units of $\alpha^2/m_e^2$ for $\omega/m_e=0.01,0.5,2,10$, using $\omega'/\omega=1/[1+(\omega/m_e)(1-\cos\theta)]$, to show the Thomson shape and the forward peaking at high energy.
- [Simplify] Add the $+i\epsilon$ to the crossed-diagram denominator for consistency with the direct one.
- [Links] Link the Klein–Nishina result to [[08.06.02 Klein–Nishina Formula]] for the full derivation.

### N2598

Note: [[07.07 Crossing Symmetry|07.07 Crossing Symmetry]]  
Priority: low · Graph: no · Manim: no

Correct conceptual hub with useful caveats on cross sections versus amplitudes.

- [Example] Add one concrete crossing pair, for example $e^-\mu^-\to e^-\mu^-$ and $e^+e^-\to\mu^+\mu^-$ related by $s\leftrightarrow t$, so the abstract rule has an anchor.

### N2599

Note: [[07.07.01 Crossing Rule for Fermions and Photons|07.07.01 Crossing Rule for Fermions and Photons]]  
Priority: medium · Graph: no · Manim: no

Correct but abstract; the rule is stated and hedged without a single worked leg-by-leg example, so a reader cannot see what "reverse the momentum and pick the new spinor" means in practice.

- [Example] Add a minimal worked case right after the replacement rule: take the outgoing electron $\bar u(\mechanical{p}')$ of $\mathrm e^-\mu^-\to\mathrm e^-\mu^-$, cross it to an incoming positron, and show the resulting $\bar v(\bar{\mechanical{p}})$ factor and the new conservation law.
- [Simplify] Merge the two paragraphs on "analytic prescriptions" and "not equalities between positive-energy spinors" into one sentence plus a short list of three steps (reverse momentum, swap spinor type, track the overall fermion sign).
- [Intuition] Move the photon caveat into the main text: crossing turns $\signal{\epsilon}$ into $\signal{\epsilon}^*$ because incoming and outgoing photon wavefunctions are complex conjugates, instead of quoting "unchanged" and then contradicting it in a note.
- [Structure] Mention the overall factor $(-1)$ per crossed fermion in spin-summed squared amplitudes (used in 07.15.05) so the rule is complete here.

### N2600

Note: [[07.07.02 Crossing Examples|07.07.02 Crossing Examples]]  
Priority: medium · Graph: no · Manim: yes

Momentum map and the s↔t identification are correct, but most of the note corrects the source figure and the "both fermionic lines" wording rather than showing a clean crossed diagram.

- [Structure] Replace (or supplement) the incorrect source sketch Fig. 7.13 with a correct pair of annihilation diagrams (t and u channel, one photon per vertex); keep the source figure only as a short side note.
- [Structure] Harmonize photon labels with Exercise 7.5: here $\mechanical{k}\to-\mechanical{k}_1$, but [[07.15.05 Crossing from Compton scattering to two-photon annihilation]] uses $\mechanical{k}\to-\mechanical{k}_2$ and $\mechanical{k}'\to\mechanical{k}_1$; pick one convention for the chapter.
- [Example] Write out the explicit map for $\gamma\gamma\to\mathrm e^+\mathrm e^-$ (incoming $\mathrm e^-(\mechanical{p})$ becomes an outgoing positron with $\mechanical{p}\to-\bar{\mechanical{p}}$, outgoing $\gamma(\mechanical{k}')$ becomes incoming with $\mechanical{k}'\to-\mechanical{k}_2$) instead of only saying the source wording is insufficient.
- [Manim] Animate the Compton s-channel diagram with legs rotating: the outgoing electron leg swings to the initial side and becomes a positron (arrow kept, momentum label flips sign), the incoming photon swings to the final side, ending in the annihilation diagram.

### N2601

Note: [[07.08 Mandelstam Variables and Scattering Channels|07.08 Mandelstam Variables and Scattering Channels]]  
Priority: low · Graph: yes · Manim: no

Definitions and the sum rule are correct and compact; the verbal derivation of the sum rule is harder to follow than the one-line algebra it describes.

- [Simplify] Replace the prose derivation with the display $\energy{s}+\mechanical{t}+\mechanical{u}=3\mechanical{m}_1^2+\mechanical{m}_2^2+\mechanical{m}_3^2+\mechanical{m}_4^2+2\mechanical{p}_1\cdot(\mechanical{p}_2-\mechanical{p}_3-\mechanical{p}_4)$ followed by $\mechanical{p}_2-\mechanical{p}_3-\mechanical{p}_4=-\mechanical{p}_1$.
- [Graph] Add a 2D Mandelstam plane for equal masses $\mechanical{m}=1$: axes $\energy{s}$ and $\mechanical{t}$ (range $-10$ to $10$), the lines $\energy{s}=0$, $\mechanical{t}=0$, $\mechanical{u}=4-\energy{s}-\mechanical{t}=0$, and shaded physical regions of the s channel ($\energy{s}\ge4$, $\mechanical{t}\le0$, $\mechanical{u}\le0$) and of the crossed t and u channels.
- [Intuition] Add one sentence on why the sum rule matters: only two invariants are independent, so a 2→2 amplitude is a function of $(\energy{s},\mechanical{t})$.

### N2602

Note: [[07.08.01 Physical Interpretation of the Channels|07.08.01 Physical Interpretation of the Channels]]  
Priority: low · Graph: no · Manim: no

Clear and correct short note; the equal-mass condition for the spacelike transfer is slightly over-restricted.

- [Simplify] In the paragraph on the spacelike transfer, a vanishing CM energy component of $\mechanical{p}_1-\mechanical{p}_3$ only needs $\mechanical{m}_1=\mechanical{m}_3$ and $\mechanical{m}_2=\mechanical{m}_4$ (elastic), not all masses equal; state it that way.
- [Example] Give one concrete process per channel: $\mathrm e^+\mathrm e^-\to\mu^+\mu^-$ (pure s), $\mathrm e^-\mu^-\to\mathrm e^-\mu^-$ (pure t), Møller (t and u), Bhabha (s and t), linking [[07.14 Bhabha Scattering - e⁺e⁻ → e⁺e⁻]].

### N2603

Note: [[07.08.02 The Variables in the Center-of-Mass Frame|07.08.02 The Variables in the Center-of-Mass Frame]]  
Priority: medium · Graph: yes · Manim: no

The general $\mechanical{t}(\cos\mechanical{\theta})$ formula, exact equal-mass relations and massless Møller result are correct (checked), but the Møller pole discussion is one dense paragraph and the formula is not derived.

- [Simplify] Derive the general formula in two lines from $\mechanical{t}=\mechanical{m}^2+\mechanical{m}'^{\,2}-2(E_1E_3-|\mathbf p||\mathbf p'|\cos\mechanical{\theta})$ with $E_1=E_3=\sqrt{\energy{s}}/2$ and $|\mathbf p|=\lambda^{1/2}(\energy{s},\mechanical{m}^2,\mechanical{m}^2)/(2\sqrt{\energy{s}})$, so the Källén factors are motivated.
- [Structure] Split the long Møller paragraph into (i) exact equal-mass relations, (ii) forward and backward Coulomb poles, (iii) the need for an angular cut.
- [Graph] Plot $-\mechanical{t}/\energy{s}$ and $-\mechanical{u}/\energy{s}$ versus $\cos\mechanical{\theta}\in[-1,1]$ (massless case), and separately $\overline{|\signal{\mathcal M}|^2}_{\text{Møller}}/\electric{e}^{\,4}$ on a log axis versus $\mechanical{\theta}\in[5^\circ,175^\circ]$, showing the symmetric forward and backward poles.
- [Example] Add a numerical check: for $\sqrt{\energy{s}}=10\unit{MeV}$ and $\mechanical{\theta}=90^\circ$, $\mechanical{t}=\mechanical{u}=-(\energy{s}-4\mechanical{m}_e^2)/2$, and verify $\energy{s}+\mechanical{t}+\mechanical{u}=4\mechanical{m}_e^2$.

### N2604

Note: [[07.09 One-Loop Diagrams and Ultraviolet Divergences|07.09 One-Loop Diagrams and Ultraviolet Divergences]]  
Priority: low · Graph: no · Manim: no

Adequate hub that frames loops, regulators and renormalization conditions.

- [Structure] No change needed beyond optionally adding a short descriptor next to each child link (photon bubble $D=2$, self-energy $D=1$, vertex $D=0$).

### N2605

Note: [[07.09.01 The Photon Propagator at One Loop|07.09.01 The Photon Propagator at One Loop]]  
Priority: medium · Graph: yes · Manim: no

Loop expression, sign, dimension count and transverse decomposition are correct, but the note stops before saying what $\electric{\Pi}(\mechanical{q}^{\,2})$ does physically.

- [Intuition] Add the physical consequence: after renormalization the effective coupling is $\electric{\alpha}_{\mathrm{eff}}(\mechanical{q}^{\,2})=\electric{\alpha}/[1-\hat{\electric{\Pi}}(\mechanical{q}^{\,2})]$, i.e. charge screening and the running of $\electric{\alpha}$ (about $1/128$ at the Z mass).
- [Graph] Plot the renormalized one-loop $\hat{\electric{\Pi}}_2(\mechanical{q}^{\,2})=-(2\electric{\alpha}/\pi)\int_0^1dx\,x(1-x)\ln[\mechanical{m}^2/(\mechanical{m}^2-x(1-x)\mechanical{q}^{\,2})]$ for spacelike $-\mechanical{q}^{\,2}/\mechanical{m}^2\in[10^{-2},10^{6}]$ on a log axis, showing the crossover to $(\electric{\alpha}/3\pi)\ln(-\mechanical{q}^{\,2}/\mechanical{m}^2)$.
- [Structure] The routing $\mechanical{k}-\mechanical{q}$ here differs from $\mechanical{k}+\mechanical{q}$ in [[07.15.06 Transversality of the vacuum-polarization tensor]]; harmonize or state that the routing is a free choice.
- [Intuition] Explain the Lorentz decomposition step: the only available rank-2 tensors are $g^{\mu\nu}$ and $\mechanical{q}^\mu\mechanical{q}^\nu$, and (7.10) fixes their relative coefficient.

### N2606

Note: [[07.09.02 Counting Divergences|07.09.02 Counting Divergences]]  
Priority: medium · Graph: no · Manim: no

The power-counting formula and listed cases are correct, but the table omits the $D\ge0$ pure-photon amplitudes that vanish by Furry's theorem, and the follow-up sentence then misstates the remaining cases.

- [Correctness] "Other amplitudes with more external legs have negative superficial degree" leaves out $E_e=0,E_\gamma=1$ ($D=3$), $E_e=0,E_\gamma=3$ ($D=1$) and the vacuum graph ($D=4$), which also have $D\ge0$; add them to the table with "vanishes by Lorentz invariance / Furry's theorem" and "vacuum energy, cancels in normalized amplitudes".
- [Correctness] The physical-quantity table lists $\delta\mechanical{m}$, which the note never uses; either write the chiral-symmetry statement as $\delta\mechanical{m}\propto\mechanical{m}\ln(\energy{\Lambda}/\mechanical{m})$ in the text or drop it from the table.
- [Simplify] Derive $D=4-E_\gamma-\tfrac32E_e$ in three lines from $D=4L-I_e-2I_\gamma$, $L=I_e+I_\gamma-V+1$, $2V=2I_e+E_e$ and $V=2I_\gamma+E_\gamma$, so Remark 7.6 is not just quoted.
- [Structure] Add $E_e$, $E_\gamma$ and $D$ to the physical-quantity table as dimensionless counts.

### N2607

Note: [[07.09.03 Electron Self-Energy|07.09.03 Electron Self-Energy]]  
Priority: low · Graph: no · Manim: no

Correct expression and a useful dimension check; the reason the linear divergence becomes logarithmic appears only in the caption.

- [Intuition] Explain in the text why $D=1$ reduces to a logarithm: the linearly divergent piece would be $\propto\energy{\Lambda}\mathbf 1$, which chiral symmetry forbids at $\mechanical{m}=0$, so $\delta\mechanical{m}\propto\mechanical{m}\ln\energy{\Lambda}$; link [[07.09.02 Counting Divergences]].
- [Example] Quote the standard cutoff result $\delta\mechanical{m}\approx(3\electric{\alpha}/4\pi)\mechanical{m}\ln(\energy{\Lambda}^2/\mechanical{m}^2)$ and contrast it with the linearly divergent classical electrostatic self-energy of a point charge.

### N2608

Note: [[07.09.04 The Vertex Correction|07.09.04 The Vertex Correction]]  
Priority: medium · Graph: no · Manim: no

The power count is correct, but the figure caption attributes the vertex divergence to charge renormalization, contradicting the Ward-identity statement in the text.

- [Correctness] The caption "The logarithmic divergence contributes to charge renormalization" is misleading for QED: by $Z_1=Z_2$ the vertex divergence cancels against the electron field renormalization, and the charge is renormalized only through $Z_3$ (vacuum polarization); rephrase the caption.
- [Intuition] Add the payoff sentence: the finite magnetic part of this diagram gives $\magnetic{F}_2(0)=\electric{\alpha}/2\pi$, linking [[07.11 Form Factors and the Anomalous Magnetic Moment]].
- [Structure] Write the loop integral explicitly (with $\gamma^\nu S(\mechanical{p}'-\mechanical{k})\gamma^\mu S(\mechanical{p}-\mechanical{k})\gamma_\nu$ times the photon propagator), as the two sibling notes do, so the power count can be read off.

### N2609

Note: [[07.10 The Ward Identity and Its Consequences|07.10 The Ward Identity and Its Consequences]]  
Priority: medium · Graph: no · Manim: no

Identity, tree check and consequences are correct, but the note does not show how $\signal{Z}_1=\signal{Z}_2$ follows from it, which is its main use.

- [Example] Add the short derivation of $\signal{Z}_1=\signal{Z}_2$: take $\mechanical{q}\to0$ to get $\Gamma^\mu(\mechanical{p},\mechanical{p})=\partial\signal{S}_F^{-1}/\partial\mechanical{p}_\mu$ (the original Ward identity), then compare the residues near the mass shell.
- [Intuition] Explain in one line why charge renormalization is then universal: only $\signal{Z}_3$ enters, so electrons and muons keep equal renormalized charges.
- [Structure] The table calls $\signal{S}_F$ "renormalized" while the text writes $\not{\mechanical{p}}-\mechanical{m}-\energy{\Sigma}$ without saying whether $\mechanical{m}$ is bare or physical; state which.

### N2610

Note: [[07.11 Form Factors and the Anomalous Magnetic Moment|07.11 Form Factors and the Anomalous Magnetic Moment]]  
Priority: medium · Graph: no · Manim: no

Decomposition and $\electric{\alpha}/2\pi$ are correct, but the zero-transfer paragraphs are convoluted and the precision statement lacks current numbers.

- [Simplify] Replace the two paragraphs on "the coefficient extracted before the external-field response" with one sentence: $\magnetic{F}_2(0)$ is the coefficient of the $\sigma^{\mu\nu}\mechanical{q}_\nu$ term, which becomes the coupling to $\magnetic{\mathbf B}$ in a static field, so it is read off before $\mechanical{q}\to0$.
- [Example] Replace the vague "twelve significant figures" with current values: $\magnetic{a}_e^{\exp}=0.001\,159\,652\,180\,59(13)$ (Fan et al. 2023), noting that the theory comparison is limited by the Cs and Rb determinations of $\electric{\alpha}$; compare with $\electric{\alpha}/2\pi=0.0011614$.
- [Links] Link the Gordon-decomposition argument in [[07.15.07 Schwinger magnetic moment]] to explain why $\magnetic{g}=2[\electric{F}_1(0)+\magnetic{F}_2(0)]$.

### N2611

Note: [[07.12 Vacuum Diagrams and Connected Structure|07.12 Vacuum Diagrams and Connected Structure]]  
Priority: low · Graph: no · Manim: no

Short hub with a helpful framing of the two questions.

- [Structure] No change needed.

### N2612

Note: [[07.12.01 Vacuum Diagrams|07.12.01 Vacuum Diagrams]]  
Priority: low · Graph: no · Manim: no

Correct exponentiation and loop-count note; the combinatorial argument is given only in words.

- [Example] Show the exponentiation explicitly: for bubble types $V_i$ appearing $n_i$ times the weight is $\prod_iV_i^{n_i}/n_i!$, and summing over all $n_i$ gives $\exp(\sum_iV_i)$.
- [Intuition] Add the link to vacuum energy: $\langle0|\mathcal S|0\rangle=e^{-iE_0T}$, so $\sum_iV_i=-iE_0T$ grows with spacetime volume, which explains why bubbles must be divided out.

### N2613

Note: [[07.12.02 Connectedness and 1PI Diagrams|07.12.02 Connectedness and 1PI Diagrams]]  
Priority: low · Graph: no · Manim: no

Correct definitions and generating-functional relations; a figure would make the cut test concrete.

- [Example] Add a small diagram pair: two self-energy bubbles in series on a propagator (reducible, cut the middle line) versus a single sunset graph (1PI).
- [Structure] Add $Z[J]$ and $W[J]$ to the physical-quantity table ($W$ is dimensionless like $\energy{\Gamma}$).

### N2614

Note: [[07.13 Trace Techniques|07.13 Trace Techniques]]  
Priority: low · Graph: no · Manim: no

Clear hub explaining why traces appear and which averaging factors to apply.

- [Example] Optionally show the one-line completeness step $\sum_{s,s'}|\bar u(p')\gamma^\mu u(p)|^2$-type sums becoming $\operatorname{Tr}[(\not p'+m)\gamma^\mu(\not p+m)\gamma^\nu]$; otherwise no change needed.

### N2615

Note: [[07.13.01 Clifford Algebra in d = 4 Dimensions|07.13.01 Clifford Algebra in d = 4 Dimensions]]  
Priority: low · Graph: no · Manim: no

Correct identities with a good check of the second; the dimensional-regularization warning stays abstract.

- [Example] Give the $d$-dimensional forms $\gamma^\mu\gamma_\mu=d$, $\gamma^\mu\not a\gamma_\mu=-(d-2)\not a$, $\gamma^\mu\not a\not b\gamma_\mu=4a\cdot b-(4-d)\not a\not b$ to make the warning concrete.
- [Links] Point to [[07.15.03 Gamma-matrix traces]] for the derivation of the third identity.

### N2616

Note: [[07.13.02 Traces of γ Matrices|07.13.02 Traces of γ Matrices]]  
Priority: low · Graph: no · Manim: no

Trace list, the $\gamma^5$ sign convention ($\epsilon^{0123}=+1$ gives $\operatorname{Tr}[\gamma^5\gamma^0\gamma^1\gamma^2\gamma^3]=-4i$, consistent) and the leptonic contraction are correct.

- [Simplify] Write the example in slash notation $\operatorname{Tr}[\not{\mechanical{q}}_1\gamma^\mu\not{\mechanical{q}}_2\gamma^\nu]$ and state the contraction rule $(a^\mu b^\nu+a^\nu b^\mu-g^{\mu\nu}a\cdot b)(c_\mu d_\nu+c_\nu d_\mu-g_{\mu\nu}c\cdot d)=2(a\cdot c)(b\cdot d)+2(a\cdot d)(b\cdot c)$ used in the last step.
- [Example] Finish the example in the CM frame (e.g. $\mechanical{q}_1\cdot\mechanical{p}_1=\energy{s}(1\pm\cos\theta)/4$ depending on labels) to obtain the $1+\cos^2\theta$ distribution, and link [[07.06.02 Annihilation - e⁺e⁻ → μ⁺μ⁻]].

### N2617

Note: [[07.14 Bhabha Scattering - e⁺e⁻ → e⁺e⁻|07.14 Bhabha Scattering - e⁺e⁻ → e⁺e⁻]]  
Priority: medium · Graph: yes · Manim: no

Amplitudes and the relative sign are correct, but the note never gives the squared result or cross section, so the forward-peaking claim stays qualitative.

- [Example] Add the massless spin-averaged result $\overline{|\signal{\mathcal M}|^2}=2\electric{e}^{\,4}[(\energy{s}^2+\mechanical{u}^2)/\mechanical{t}^2+(\mechanical{t}^2+\mechanical{u}^2)/\energy{s}^2+2\mechanical{u}^2/(\energy{s}\mechanical{t})]$ with $d\sigma/d\Omega=\overline{|\signal{\mathcal M}|^2}/(64\pi^2\energy{s})$, and note it follows from Møller by crossing $\energy{s}\leftrightarrow\mechanical{u}$.
- [Graph] Plot $\energy{s}\,d\sigma/d\Omega$ in units of $\electric{\alpha}^2$ versus $\cos\theta\in[-0.95,0.95]$ for Bhabha and for $\mathrm e^+\mathrm e^-\to\mu^+\mu^-$ ($\tfrac14(1+\cos^2\theta)$) on a log axis, showing the forward t-channel peak.
- [Intuition] Mention that the forward peak makes small-angle Bhabha scattering the standard luminosity monitor at $\mathrm e^+\mathrm e^-$ colliders.

### N2618

Note: [[07.15 Exercises|07.15 Exercises]]  
Priority: low · Graph: no · Manim: no

Clear exercise index; all links resolve.

- [Structure] No change needed.

### N2619

Note: [[07.15.01 Symmetry factors in quartic scalar theory|07.15.01 Symmetry factors in quartic scalar theory]]  
Priority: low · Graph: no · Manim: no

Counts are correct ($S=8$; $N=192$ giving $S=6$; $S=2$) and the source leg-count error is handled well; the diagrams are only described in words.

- [Example] Add small drawings (SVG) of the figure-eight, the setting-sun and the s-channel bubble with external labels, so the automorphisms can be seen.
- [Structure] Since (b) as posed is inconsistent, state in the exercise which corrected question is answered (two-point setting-sun), and optionally note the genuine two-to-two one-loop graphs (s, t, u bubbles, each $S=2$).

### N2620

Note: [[07.15.02 Scalar propagator in position space|07.15.02 Scalar propagator in position space]]  
Priority: low · Graph: yes · Manim: no

Bessel-function result, asymptotics and dimensions are correct and the source's $1/r$ error is properly corrected; $\mechanical{k}$ doubles as four-momentum and radial magnitude.

- [Graph] Plot $4\pi^2\mechanical{r}^2\signal{\Delta}_{\mathrm E}=\mechanical{m}\mechanical{r}K_1(\mechanical{m}\mechanical{r})$ versus $\mechanical{m}\mechanical{r}\in[0.01,10]$ (log x-axis) together with the large-distance asymptote $\sqrt{\pi z/2}\,e^{-z}$, showing the massless value 1 at short distance and the exponential fall-off.
- [Intuition] State the short-distance limit $\signal{\Delta}_{\mathrm E}\to1/(4\pi^2\mechanical{r}^2)$ (from $K_1(z)\approx1/z$); it is the four-dimensional analogue of the Coulomb $1/(4\pi r)$ and supports the dimension argument.
- [Simplify] Use a separate symbol (e.g. $\kappa$) for the radial Euclidean momentum magnitude instead of reusing $\mechanical{k}$.

### N2621

Note: [[07.15.03 Gamma-matrix traces|07.15.03 Gamma-matrix traces]]  
Priority: low · Graph: no · Manim: no

All three derivations are correct and well ordered.

- [Simplify] Add a one-line proof that odd traces vanish (insert $\gamma^5\gamma^5$ and anticommute), since the solution relies on it; otherwise no change needed.

### N2622

Note: [[07.15.04 Compton cross section in the Thomson limit|07.15.04 Compton cross section in the Thomson limit]]  
Priority: low · Graph: yes · Manim: no

Correct limit, integral and numerical value ($6.65\times10^{-25}\unit{cm^2}$); a good place for a Klein–Nishina plot.

- [Graph] Plot $(\mechanical{m}_e^2/\electric{\alpha}^2)\,d\mechanical{\sigma}/d\mechanical{\Omega}$ versus $\mechanical{\theta}\in[0,\pi]$ for $\energy{\omega}/\mechanical{m}_e=0,0.1,1,10$ (polar or Cartesian), showing the Thomson shape and the forward concentration at high energy.
- [Example] Show the conversion to $\unit{cm^2}$ with $\hbar c=197.327\unit{MeV\,fm}$ and $\mechanical{m}_e=0.511\unit{MeV}$, i.e. $\mechanical{\sigma}_T=\tfrac{8\pi}{3}r_e^2$ with $r_e=\electric{\alpha}\hbar c/\mechanical{m}_e=2.818\unit{fm}$.

### N2623

Note: [[07.15.05 Crossing from Compton scattering to two-photon annihilation|07.15.05 Crossing from Compton scattering to two-photon annihilation]]  
Priority: low · Graph: yes · Manim: no

Momentum map, channel table, the extra crossing sign and the final $2\electric{e}^4(\mechanical{u}/\mechanical{t}+\mechanical{t}/\mechanical{u})$ are correct; the requested diagrams are not drawn.

- [Example] Add the two annihilation diagrams the exercise asks for (t and u channel, one photon per vertex), which also replaces the faulty source sketch discussed in [[07.07.02 Crossing Examples]].
- [Structure] Photon labels differ from 07.07.02 ($\mechanical{k}\to-\mechanical{k}_2$ here versus $\mechanical{k}\to-\mechanical{k}_1$ there); harmonize.
- [Graph] Plot $\overline{|\signal{\mathcal M}|^2}/(2\electric{e}^4)=2(1+\cos^2\theta)/(1-\cos^2\theta)$ versus $\cos\theta\in[-0.95,0.95]$ (massless CM), showing the forward and backward peaks.

### N2624

Note: [[07.15.06 Transversality of the vacuum-polarization tensor|07.15.06 Transversality of the vacuum-polarization tensor]]  
Priority: low · Graph: no · Manim: no

Correct and careful proof with good regulator and photon-mass caveats; slightly repetitive.

- [Simplify] Merge the paragraph "The key step is the difference of inverse kernels" into the derivation and replace the repeated Ward–Takahashi statement by a link to [[07.10 The Ward Identity and Its Consequences]].
- [Intuition] Give the concrete counterexample behind the regulator caveat: a hard four-momentum cutoff produces a non-transverse term $\propto g^{\mu\nu}\energy{\Lambda}^2$, i.e. a spurious photon mass.

### N2625

Note: [[07.15.07 Schwinger magnetic moment|07.15.07 Schwinger magnetic moment]]  
Priority: medium · Graph: no · Manim: no

Correct conclusion, but the key step from the Gordon spin term to $\magnetic{g}=2(\electric{F}_1+\magnetic{F}_2)$ is asserted rather than shown, and the Gordon identity is displayed twice.

- [Simplify] Show the nonrelativistic step: in a static external field the $i\sigma^{\mu\nu}\mechanical{q}_\nu/2\mechanical{m}$ terms combine to $-\frac{\electric{e}}{2\mechanical{m}}\,2[\electric{F}_1(0)+\magnetic{F}_2(0)]\,\mechanical{\mathbf S}\cdot\magnetic{\mathbf B}$ using $\boldsymbol\sigma=2\mechanical{\mathbf S}$, from which $\magnetic{g}$ is read off.
- [Structure] Remove the duplicate display of the Gordon decomposition (exercise and solution) and the vague sentence "the factor two ... is essential".
- [Structure] The table writes $\mechanical{p}\prime$; use $\mechanical{p}'$ as in the text.
- [Example] Compare $\electric{\alpha}/2\pi=0.0011614$ with the measured $\magnetic{a}_e=0.0011597$ and note that the two-loop term $-0.328\,(\electric{\alpha}/\pi)^2$ closes most of the gap.

### N2626

Note: [[07.15.08 Electron–muon scattering amplitude|07.15.08 Electron–muon scattering amplitude]]  
Priority: medium · Graph: yes · Manim: no

Amplitude, trace result $2\electric{e}^4(\energy{s}^2+\mechanical{u}^2)/\mechanical{t}^2$ and the Møller comparison are correct, but the muon label $\mu$ collides with the Lorentz index $\mu$.

- [Correctness] Symbol clash: $\bar u_\mu(\mechanical{q}')\gamma_\mu u_\mu(\mechanical{q})$ and $\signal{L}_{\mu,\mu\nu}$ use $\mu$ both as the muon species label and as a contracted Lorentz index; use e.g. $u_{(\mu)}$ and $\signal{L}^{(\mu)}_{\alpha\beta}$, or Lorentz indices $\alpha,\beta$.
- [Simplify] Show the contraction from $\signal{L}_e^{\mu\nu}\signal{L}^{(\mu)}_{\mu\nu}$ to $8[(\mechanical{p}\cdot\mechanical{q})(\mechanical{p}'\cdot\mechanical{q}')+(\mechanical{p}\cdot\mechanical{q}')(\mechanical{p}'\cdot\mechanical{q})]$ by reusing Example 7.8 in [[07.13.02 Traces of γ Matrices]].
- [Graph] Plot $\overline{|\signal{\mathcal M}|^2}/(2\electric{e}^4)$ versus $\cos\theta\in[-1,0.95]$ for e–μ, $[4+(1+\cos\theta)^2]/(1-\cos\theta)^2$, and for Møller on a log axis, showing the missing backward peak for distinct particles.
- [Structure] Add one sentence that Z exchange is neglected (tree-level QED only).

### N2627

Note: [[07.15.09 Tadpole in quartic scalar theory|07.15.09 Tadpole in quartic scalar theory]]  
Priority: low · Graph: yes · Manim: no

Cutoff integral, dimensional-regularization result and the $\Gamma(-1+\epsilon)$ expansion are correct (checked), and the regulator discussion is careful.

- [Graph] Plot $32\pi^2\energy{\Sigma}_{\mathrm{tad}}/(\signal{\lambda}\mechanical{m}^2)$ versus $\energy{\Lambda}/\mechanical{m}\in[1,100]$ (log axes) together with its separate pieces $\energy{\Lambda}^2/\mechanical{m}^2$ and $-\ln(1+\energy{\Lambda}^2/\mechanical{m}^2)$, to show the quadratic dominance.
- [Intuition] Add the physical point behind the quadratic divergence: a mass correction of order $\signal{\lambda}\energy{\Lambda}^2/32\pi^2$ is the scalar fine-tuning (hierarchy) problem, which dimensional regularization hides but does not remove.

### N2628

Note: [[07.15.10 Power counting in quartic scalar theory|07.15.10 Power counting in quartic scalar theory]]  
Priority: low · Graph: no · Manim: no

Correct derivation of $D=4-E$; the table has overlapping rows ($E=6$ and $E\ge6$).

- [Structure] Merge the $E=6$ and $E\ge6$ rows and add an $E=0$ row ($D=4$, vacuum energy).
- [Example] Add the general-dimension formula $D=d-\frac{d-2}{2}E+(d-4)V$ to show why the vertex count cancels only in $d=4$ (super-renormalizable below, non-renormalizable above).

### N2629

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/07 Feynman Diagrams/07.16 Summary|07.16 Summary]]  
Priority: low · Graph: no · Manim: no

Accurate chapter summary with useful reconstruction checks.

- [Links] Turn plain references into wiki links, e.g. Table 7.1 to [[07.05.06 Summary Table of Feynman Rules for QED]] and the Ward identity to [[07.10 The Ward Identity and Its Consequences]].
