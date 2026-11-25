---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/04 The Dirac Field"
---

> [!TLDR]
> This note tracks the review of the 73 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/01 Quantum Field Theory/04 The Dirac Field`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 16 possible errors or notation conflicts. 16 of them are verified (16 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2411|N2411]] 04.03.01 The Attempt with Commutators: (4.23) and (4.24) integrate over $d^3k$ while the integrand depends on $\mathbf p$, and the mode commutator omits the $(2\pi)^3$ that the $(2\pi)^{-3}$ measure requires. Use $d^3p$ throughout and $[b^s_{\mathbf p},b^{s'\dagger}_{\mathbf q}]=(2\pi)^3\delta_{ss'}\delta^{(3)}(\mathbf p-\mathbf q)$, rather than retaining the inconsistency. **Fixed:** Measures changed to d^3 p, commutator now (2pi)^3 delta delta, source-retention callout removed, table updated
- [[#N2415|N2415]] 04.04.01 Field Expansion: (4.27) and (4.28) integrate over $d^3\mechanical{k}$ while every factor of the integrand depends on $\mechanical{p}$; write $\int\frac{d^3\mechanical{p}}{(2\pi)^3\sqrt{2E_{\mathbf p}}}$ and delete the callout and the "retained k/p mismatch" paragraph. **Fixed:** Measures changed to d^3 p, callout and retained-mismatch paragraph deleted, table updated
- [[#N2420|N2420]] 04.05.03 Number Operators: (4.35) integrates over $d^3\mechanical{k}$ with integrand labelled by $\mathbf p$; use $d^3\mechanical{p}$ and remove the callout. **Fixed:** Both measures changed to d^3 p, callout removed, table row now p
- [[#N2422|N2422]] 04.06.01 Hamiltonian Operator in Mode Variables: (4.37) and (4.38) integrate over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$ and delete the "printed k/p integration labels" sentence. **Fixed:** Measures changed to d^3 p, k/p sentence deleted, table updated
- [[#N2423|N2423]] 04.06.02 The Noether Current and Charge: (4.40) integrates over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$. **Fixed:** Measure changed to d^3 p, table row updated
- [[#N2424|N2424]] 04.06.03 The Four-Momentum Vector: (4.41) integrates over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$ and drop the sentence about identifying the label during evaluation. **Fixed:** Measure changed to d^3 p, label-identification sentence removed, table row updated
- [[#N2427|N2427]] 04.07.02 Calculation of the Propagator: (4.43) and (4.44) integrate over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$. **Fixed:** Changed all four measures to d^3p, removed the source-label sentence, and dropped k from the table.
- [[#N2428|N2428]] 04.07.03 Momentum Representation: (4.47) integrates over $d^4\mechanical{k}$ with a $p$-dependent integrand; use $d^4\mechanical{p}$ and remove the sentence about the source label. **Fixed:** Changed the measure to d^4p, removed the source-label sentence, and dropped k from the table.
- [[#N2434|N2434]] 04.08.04 The CPT Theorem: (4.59) $\Theta\psi\Theta^{-1}=\eta_{CPT}\bar\psi^T(-x)$ omits the spinor matrix; replace it by the derived $\Theta\psi(x)\Theta^{-1}=\eta\,i\gamma^0\gamma^5\bar\psi^T(-x)=-\eta\,i\gamma^5\psi^*(-x)$ (I verified $T\gamma^0C=i\gamma^0\gamma^5$) and drop both callouts about the printed form. **Fixed:** Verified T gamma^0 C = i gamma^0 gamma^5 numerically; (4.59) now reads eta i gamma^0 gamma^5 psibar^T(-x) = -eta i gamma^5 psi^*(-x); both callouts replaced by one short derivation sentence; phase row updated.
- [[#N2434|N2434]] 04.08.04 The CPT Theorem: Table 4.1 tensor row: replace the checkmarks by the actual signs $P:(-1)^\mu(-1)^\nu$, $T:-(-1)^\mu(-1)^\nu$, $CP:-(-1)^\mu(-1)^\nu$ (with $(-1)^\mu=+1$ for $\mu=0$, $-1$ otherwise), consistent with $C=-1$, $CPT=+1$; then the callout on checkmarks can go. **Fixed:** Replaced by P (-1)^mu(-1)^nu, T -(-1)^mu(-1)^nu, CP -(-1)^mu(-1)^nu; replaced the checkmark callout by the definition of (-1)^mu and removed the related sentence in the closing paragraph.
- [[#N2437|N2437]] 04.09.02 Fierz Identities: Replace (4.61) by the standard scalar Fierz identity for commuting spinors, $(\bar\psi_1\psi_2)(\bar\psi_3\psi_4)=\tfrac14[(\bar\psi_1\psi_4)(\bar\psi_3\psi_2)+(\bar\psi_1\gamma^\mu\psi_4)(\bar\psi_3\gamma_\mu\psi_2)+\tfrac12(\bar\psi_1\sigma^{\mu\nu}\psi_4)(\bar\psi_3\sigma_{\mu\nu}\psi_2)-(\bar\psi_1\gamma^\mu\gamma^5\psi_4)(\bar\psi_3\gamma_\mu\gamma^5\psi_2)+(\bar\psi_1\gamma^5\psi_4)(\bar\psi_3\gamma^5\psi_2)]$, with an overall minus sign for anticommuting fields; the printed $-\tfrac14\sum_\Gamma\Gamma\otimes\bar\Gamma$ gives $+$ for the axial term (since $\overline{\gamma^\mu\gamma^5}=\gamma^\mu\gamma^5$), the wrong sign for $i\gamma^5$, and no $\tfrac12$ for $\sigma^{\mu\nu}$. **Fixed:** Verified the standard scalar Fierz identity numerically and displayed it as (4.61) with the minus-sign rule for anticommuting fields; removed the caveat callout and updated the diagnostic sentence.
- [[#N2448|N2448]] 04.12 Examples of Trace Calculations: (4.89) has the wrong sign: by (4.76), $\mathrm{tr}(\not p\gamma^\mu\not q\gamma^\nu\gamma^5)=-4i\epsilon^{\alpha\mu\beta\nu}p_\alpha q_\beta=+4i\epsilon^{\alpha\beta\mu\nu}p_\alpha q_\beta$; print the corrected formula and remove the callout. **Fixed:** (4.89) now gives -4i eps^{alpha mu beta nu} p_alpha p'_beta = +4i eps^{alpha beta mu nu} p_alpha p'_beta; removed the callout and updated the intro sentence.
- [[#N2448|N2448]] 04.12 Examples of Trace Calculations: Example 4.8 states the ansatz $\psi=e^{-imt}(\phi,\chi)$ but (4.93)–(4.94) are the unshifted equations; either drop the phase from the ansatz or print the shifted equations $i\partial_t\phi=\boldsymbol\sigma\cdot\mathbf p\,\chi$, $i\partial_t\chi=\boldsymbol\sigma\cdot\mathbf p\,\phi-2m\chi$, and rename the example (it does not start from Klein–Gordon). **Fixed:** Dropped the phase from the ansatz so (4.93)-(4.94) are consistent, removed the inconsistency callout (the example title already names the Dirac equation), and stated the shifted ansatz explicitly in the remaining callout.
- [[#N2448|N2448]] 04.12 Examples of Trace Calculations: Symbol clash: $\mechanical{q}$ is the photon momentum in Example 4.4 but a generic vector in (4.89), and $\mechanical{k}$ is the muon momentum label in 4.4 but the integration variable in (4.90) (whose integrand uses $p$); use distinct letters and integrate (4.90) over $d^3p$. **Fixed:** Renamed q to p' in (4.89), integrated (4.90) over d^3p, removed the k-mismatch sentence and the k table row, and updated the p row.
- [[#N2453|N2453]] 04.14 Connection to Quantum Electrodynamics: The caption and table call the photon propagator $\tilde{\signal{S}}_F^\gamma$, reusing the Dirac propagator letter for a different object with different index structure ($-ig_{\mu\nu}/(q^2+i\varepsilon)$); use $\tilde D_{F\mu\nu}$ as is standard. **Fixed:** Renamed it to D~_{F mu nu} in the Fig. 4.1 caption and the table.
- [[#N2462|N2462]] 04.18.03 Fermion Fock number: The physical-quantities table lists $\signal{n}$, but the note only uses the operator $\hat{\signal{n}}$; list $\hat{\signal{n}}$ (eigenvalues $0,1$). **Fixed:** Table row now lists n-hat as the mode number operator with eigenvalues zero and one.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2399 | [[04.00 The Dirac Field\|04.00 The Dirac Field]] | Analyzed | low | no | no | [[#N2399\|View]] |
| N2400 | [[04.01 The Dirac Equation and Its Solutions\|04.01 The Dirac Equation and Its Solutions]] | Analyzed | low | no | no | [[#N2400\|View]] |
| N2401 | [[04.01.01 Derivation and Algebraic Structure\|04.01.01 Derivation and Algebraic Structure]] | Analyzed | low | no | no | [[#N2401\|View]] |
| N2402 | [[04.01.02 Dirac–Pauli Representation\|04.01.02 Dirac–Pauli Representation]] | Analyzed | low | no | no | [[#N2402\|View]] |
| N2403 | [[04.01.03 Plane-Wave Solutions\|04.01.03 Plane-Wave Solutions]] | Analyzed | low | yes | no | [[#N2403\|View]] |
| N2404 | [[04.01.04 Normalization Products and Orthogonality Relations\|04.01.04 Normalization Products and Orthogonality Relations]] | Analyzed | low | no | no | [[#N2404\|View]] |
| N2405 | [[04.01.05 Completeness Relations (Spin Sum)\|04.01.05 Completeness Relations (Spin Sum)]] | Analyzed | low | no | no | [[#N2405\|View]] |
| N2406 | [[04.02 Lagrangian and Conjugate Momenta\|04.02 Lagrangian and Conjugate Momenta]] | Analyzed | low | no | no | [[#N2406\|View]] |
| N2407 | [[04.02.01 Lagrangian Density\|04.02.01 Lagrangian Density]] | Analyzed | low | no | no | [[#N2407\|View]] |
| N2408 | [[04.02.02 Conjugate Momenta\|04.02.02 Conjugate Momenta]] | Analyzed | low | no | no | [[#N2408\|View]] |
| N2409 | [[04.02.03 Hamiltonian Density\|04.02.03 Hamiltonian Density]] | Analyzed | low | no | no | [[#N2409\|View]] |
| N2410 | [[04.03 Canonical Quantization and Anticommutation Relations\|04.03 Canonical Quantization and Anticommutation Relations]] | Analyzed | low | no | no | [[#N2410\|View]] |
| N2411 | [[04.03.01 The Attempt with Commutators\|04.03.01 The Attempt with Commutators]] | Analyzed | medium | yes | no | [[#N2411\|View]] |
| N2412 | [[04.03.02 The Spin–Statistics Theorem\|04.03.02 The Spin–Statistics Theorem]] | Analyzed | low | no | no | [[#N2412\|View]] |
| N2413 | [[04.03.03 Canonical Anticommutation Relations\|04.03.03 Canonical Anticommutation Relations]] | Analyzed | low | no | no | [[#N2413\|View]] |
| N2414 | [[04.04 Mode Expansion and Creation and Annihilation Operators\|04.04 Mode Expansion and Creation and Annihilation Operators]] | Analyzed | low | no | no | [[#N2414\|View]] |
| N2415 | [[04.04.01 Field Expansion\|04.04.01 Field Expansion]] | Analyzed | medium | no | no | [[#N2415\|View]] |
| N2416 | [[04.04.02 Anticommutation Relations of the Operators\|04.04.02 Anticommutation Relations of the Operators]] | Analyzed | medium | no | no | [[#N2416\|View]] |
| N2417 | [[04.05 Fock Space and the Pauli Exclusion Principle\|04.05 Fock Space and the Pauli Exclusion Principle]] | Analyzed | low | no | no | [[#N2417\|View]] |
| N2418 | [[04.05.01 Structure of Fock Space\|04.05.01 Structure of Fock Space]] | Analyzed | low | no | no | [[#N2418\|View]] |
| N2419 | [[04.05.02 The Pauli Exclusion Principle as an Algebraic Consequence\|04.05.02 The Pauli Exclusion Principle as an Algebraic Consequence]] | Analyzed | low | no | no | [[#N2419\|View]] |
| N2420 | [[04.05.03 Number Operators\|04.05.03 Number Operators]] | Analyzed | low | yes | no | [[#N2420\|View]] |
| N2421 | [[04.06 Hamiltonian Operator and Charge Operator\|04.06 Hamiltonian Operator and Charge Operator]] | Analyzed | low | no | no | [[#N2421\|View]] |
| N2422 | [[04.06.01 Hamiltonian Operator in Mode Variables\|04.06.01 Hamiltonian Operator in Mode Variables]] | Analyzed | medium | no | no | [[#N2422\|View]] |
| N2423 | [[04.06.02 The Noether Current and Charge\|04.06.02 The Noether Current and Charge]] | Analyzed | low | no | no | [[#N2423\|View]] |
| N2424 | [[04.06.03 The Four-Momentum Vector\|04.06.03 The Four-Momentum Vector]] | Analyzed | low | no | no | [[#N2424\|View]] |
| N2425 | [[04.07 The Dirac Propagator\|04.07 The Dirac Propagator]] | Analyzed | low | no | no | [[#N2425\|View]] |
| N2426 | [[04.07.01 Definition and Structure\|04.07.01 Definition and Structure]] | Analyzed | low | no | no | [[#N2426\|View]] |
| N2427 | [[04.07.02 Calculation of the Propagator\|04.07.02 Calculation of the Propagator]] | Analyzed | low | no | no | [[#N2427\|View]] |
| N2428 | [[04.07.03 Momentum Representation\|04.07.03 Momentum Representation]] | Analyzed | medium | yes | no | [[#N2428\|View]] |
| N2429 | [[04.07.04 Equation Satisfied by the Propagator\|04.07.04 Equation Satisfied by the Propagator]] | Analyzed | low | no | no | [[#N2429\|View]] |
| N2430 | [[04.08 Discrete Symmetries - C, P, T\|04.08 Discrete Symmetries - C, P, T]] | Analyzed | low | no | no | [[#N2430\|View]] |
| N2431 | [[04.08.01 Parity (P)\|04.08.01 Parity (P)]] | Analyzed | low | no | yes | [[#N2431\|View]] |
| N2432 | [[04.08.02 Charge Conjugation (C)\|04.08.02 Charge Conjugation (C)]] | Analyzed | low | no | no | [[#N2432\|View]] |
| N2433 | [[04.08.03 Time Reversal (T)\|04.08.03 Time Reversal (T)]] | Analyzed | low | no | no | [[#N2433\|View]] |
| N2434 | [[04.08.04 The CPT Theorem\|04.08.04 The CPT Theorem]] | Analyzed | medium | no | no | [[#N2434\|View]] |
| N2435 | [[04.09 Covariant Bilinear Forms\|04.09 Covariant Bilinear Forms]] | Analyzed | low | no | no | [[#N2435\|View]] |
| N2436 | [[04.09.01 Classification by the Lorentz Group\|04.09.01 Classification by the Lorentz Group]] | Analyzed | low | no | no | [[#N2436\|View]] |
| N2437 | [[04.09.02 Fierz Identities\|04.09.02 Fierz Identities]] | Analyzed | high | no | no | [[#N2437\|View]] |
| N2438 | [[04.09.03 Current Density and Global Symmetries\|04.09.03 Current Density and Global Symmetries]] | Analyzed | low | no | no | [[#N2438\|View]] |
| N2439 | [[04.10 Chirality, Helicity, and Weyl Spinors\|04.10 Chirality, Helicity, and Weyl Spinors]] | Analyzed | low | no | no | [[#N2439\|View]] |
| N2440 | [[04.10.01 Chiral Projectors\|04.10.01 Chiral Projectors]] | Analyzed | low | no | no | [[#N2440\|View]] |
| N2441 | [[04.10.02 The Dirac Equation in Chiral Form\|04.10.02 The Dirac Equation in Chiral Form]] | Analyzed | low | no | no | [[#N2441\|View]] |
| N2442 | [[04.10.03 Helicity and Chirality\|04.10.03 Helicity and Chirality]] | Analyzed | medium | yes | yes | [[#N2442\|View]] |
| N2443 | [[04.10.04 The Majorana Field\|04.10.04 The Majorana Field]] | Analyzed | low | no | no | [[#N2443\|View]] |
| N2444 | [[04.11 Traces of Gamma Matrices\|04.11 Traces of Gamma Matrices]] | Analyzed | low | no | no | [[#N2444\|View]] |
| N2445 | [[04.11.01 General Properties of the Trace\|04.11.01 General Properties of the Trace]] | Analyzed | low | no | no | [[#N2445\|View]] |
| N2446 | [[04.11.02 Fundamental Identities for Contractions\|04.11.02 Fundamental Identities for Contractions]] | Analyzed | low | no | no | [[#N2446\|View]] |
| N2447 | [[04.11.03 Traces of Products of Gamma Matrices\|04.11.03 Traces of Products of Gamma Matrices]] | Analyzed | low | no | no | [[#N2447\|View]] |
| N2448 | [[04.12 Examples of Trace Calculations\|04.12 Examples of Trace Calculations]] | Analyzed | medium | yes | no | [[#N2448\|View]] |
| N2449 | [[04.13 Normal Ordering and Wick's Theorem for Fermions\|04.13 Normal Ordering and Wick's Theorem for Fermions]] | Analyzed | low | no | no | [[#N2449\|View]] |
| N2450 | [[04.13.01 Fermionic Normal Ordering\|04.13.01 Fermionic Normal Ordering]] | Analyzed | low | no | no | [[#N2450\|View]] |
| N2451 | [[04.13.02 Wick Contractions\|04.13.02 Wick Contractions]] | Analyzed | low | no | no | [[#N2451\|View]] |
| N2452 | [[04.13.03 Wick's Theorem for Fermions\|04.13.03 Wick's Theorem for Fermions]] | Analyzed | low | no | no | [[#N2452\|View]] |
| N2453 | [[04.14 Connection to Quantum Electrodynamics\|04.14 Connection to Quantum Electrodynamics]] | Analyzed | low | no | no | [[#N2453\|View]] |
| N2454 | [[04.15 The Dirac Field as a Dirac–Bergmann System\|04.15 The Dirac Field as a Dirac–Bergmann System]] | Analyzed | low | no | no | [[#N2454\|View]] |
| N2455 | [[04.15.01 Constrained Structure of the Hamiltonian Operator\|04.15.01 Constrained Structure of the Hamiltonian Operator]] | Analyzed | high | no | no | [[#N2455\|View]] |
| N2456 | [[04.15.02 Dirac Brackets and Quantization\|04.15.02 Dirac Brackets and Quantization]] | Analyzed | medium | no | no | [[#N2456\|View]] |
| N2457 | [[04.16 Gordon Identity\|04.16 Gordon Identity]] | Analyzed | low | no | no | [[#N2457\|View]] |
| N2458 | [[04.17 Summary of Rules and Fundamental Relations\|04.17 Summary of Rules and Fundamental Relations]] | Analyzed | low | no | no | [[#N2458\|View]] |
| N2459 | [[04.18 Exercises\|04.18 Exercises/04.18 Exercises]] | Analyzed | low | no | no | [[#N2459\|View]] |
| N2460 | [[04.18.01 Clifford algebra in arbitrary dimension\|04.18 Exercises/04.18.01 Clifford algebra in arbitrary dimension]] | Analyzed | low | no | no | [[#N2460\|View]] |
| N2461 | [[04.18.02 Canonical anticommutators and inversion\|04.18 Exercises/04.18.02 Canonical anticommutators and inversion]] | Analyzed | low | no | no | [[#N2461\|View]] |
| N2462 | [[04.18.03 Fermion Fock number\|04.18 Exercises/04.18.03 Fermion Fock number]] | Analyzed | low | no | no | [[#N2462\|View]] |
| N2463 | [[04.18.04 Massless position-space propagator\|04.18 Exercises/04.18.04 Massless position-space propagator]] | Analyzed | low | no | no | [[#N2463\|View]] |
| N2464 | [[04.18.05 Noether current and charge\|04.18 Exercises/04.18.05 Noether current and charge]] | Analyzed | low | no | no | [[#N2464\|View]] |
| N2465 | [[04.18.06 Charge-conjugation symmetry of the propagator\|04.18 Exercises/04.18.06 Charge-conjugation symmetry of the propagator]] | Analyzed | low | no | no | [[#N2465\|View]] |
| N2466 | [[04.18.07 Gordon identity\|04.18 Exercises/04.18.07 Gordon identity]] | Analyzed | low | no | no | [[#N2466\|View]] |
| N2467 | [[04.18.08 Anomalous magnetic moment\|04.18 Exercises/04.18.08 Anomalous magnetic moment]] | Analyzed | low | no | no | [[#N2467\|View]] |
| N2468 | [[04.18.09 Traces with the Levi-Civita tensor\|04.18 Exercises/04.18.09 Traces with the Levi-Civita tensor]] | Analyzed | low | no | no | [[#N2468\|View]] |
| N2469 | [[04.18.10 Weyl spinors and chirality\|04.18 Exercises/04.18.10 Weyl spinors and chirality]] | Analyzed | medium | yes | no | [[#N2469\|View]] |
| N2470 | [[04.18.11 The Majorana field\|04.18 Exercises/04.18.11 The Majorana field]] | Analyzed | low | no | no | [[#N2470\|View]] |
| N2471 | [[04.18.12 Causality of the propagator\|04.18 Exercises/04.18.12 Causality of the propagator]] | Analyzed | medium | yes | no | [[#N2471\|View]] |

## Suggestions

### N2399

Note: [[04.00 The Dirac Field|04.00 The Dirac Field]]  
Priority: low · Graph: no · Manim: no

This is a clear chapter hub; all linked notes exist.

- [Structure] No change needed; optionally add [[04.02 Lagrangian and Conjugate Momenta]] to the stage list, since the reading guide skips from 04.01 to 04.03.

### N2400

Note: [[04.01 The Dirac Equation and Its Solutions|04.01 The Dirac Equation and Its Solutions]]  
Priority: low · Graph: no · Manim: no

This is an adequate section hub.

- [Structure] No change needed.

### N2401

Note: [[04.01.01 Derivation and Algebraic Structure|04.01.01 Derivation and Algebraic Structure]]  
Priority: low · Graph: no · Manim: no

The squaring argument and the Clifford algebra are correct and well motivated.

- [Example] Show the cross-term cancellation explicitly: $(-i\gamma^\nu\partial_\nu-m)(i\gamma^\mu\partial_\mu-m)=\gamma^\nu\gamma^\mu\partial_\nu\partial_\mu+m^2$, with the $\pm im\gamma\cdot\partial$ terms cancelling. This makes "the first-order operator with the opposite derivative sign" concrete.
- [Intuition] Add one sentence on why $2\times2$ is too small: only three mutually anticommuting $2\times2$ matrices exist (the Pauli matrices), but four are needed.

### N2402

Note: [[04.01.02 Dirac–Pauli Representation|04.01.02 Dirac–Pauli Representation]]  
Priority: low · Graph: no · Manim: no

Both representations and the $\gamma^5$ matrices are correct.

- [Structure] Tag the Dirac–Pauli matrices with an equation number (only the Weyl set carries (4.5)).
- [Example] Show the check $(\gamma^i)^2=-\sigma^i\sigma^i\,\mathbf 1=-\mathbf 1$ as a one-line block product, since the text asks the reader to perform it.

### N2403

Note: [[04.01.03 Plane-Wave Solutions|04.01.03 Plane-Wave Solutions]]  
Priority: low · Graph: yes · Manim: no

The spinors (4.7)–(4.8) are correct (they satisfy (4.6), and $\bar uu=2m$, $\bar vv=-2m$), but the stated size of the small-component suppression is inconsistent.

- [Simplify] The text gives the small-to-large ratio first as "momentum magnitude divided by mass" and later as "divided by twice the mass". Use the precise $|\mathbf p|/(E+m)\approx|\mathbf p|/2m$ in both places.
- [Graph] Plot $|\mathbf p|/(E_{\mathbf p}+m)$ against $|\mathbf p|/m\in[0,5]$ together with the approximation $|\mathbf p|/2m$. This shows the NR regime and the approach to 1 (equal components) in the ultrarelativistic limit.
- [Example] Show the substitution check for one component: the top row of $(\not p-m)u$ gives $(E-m)\chi-\frac{(\sigma\cdot\mathbf p)^2}{E+m}\chi=0$, using $(\sigma\cdot\mathbf p)^2=\mathbf p^2$.

### N2404

Note: [[04.01.04 Normalization Products and Orthogonality Relations|04.01.04 Normalization Products and Orthogonality Relations]]  
Priority: low · Graph: no · Manim: no

The normalization products are correct and well interpreted, but the note omits the Hermitian orthogonality needed later.

- [Example] Add the relation $u^\dagger(\mathbf p,s)v(-\mathbf p,s')=0$ (opposite spatial momentum), which the Hamiltonian calculation uses. Also note that $u^\dagger(\mathbf p)v(\mathbf p)=2\chi^\dagger\sigma\cdot\mathbf p\,\xi\neq0$ in general, so that the reader does not assume same-momentum Hermitian orthogonality.
- [Example] Show the explicit computation $\bar uu=(E+m)[1-\mathbf p^2/(E+m)^2]=2m$ from (4.7).

### N2405

Note: [[04.01.05 Completeness Relations (Spin Sum)|04.01.05 Completeness Relations (Spin Sum)]]  
Priority: low · Graph: no · Manim: no

The spin sums, the rest-frame check and the projector argument are correct.

- [Example] Add the matching rest-frame check for (4.14): $\sum_s v\bar v=2m\,\mathrm{diag}(0,0,1,1)\gamma^0=2m\,\mathrm{diag}(0,0,-1,-1)=m(\gamma^0-1)$, confirming $\not p-m$.
- [Simplify] Write the projectors explicitly, $\Lambda_\pm=(\pm\not p+m)/2m$, instead of describing the sign of the second projector in words.

### N2406

Note: [[04.02 Lagrangian and Conjugate Momenta|04.02 Lagrangian and Conjugate Momenta]]  
Priority: low · Graph: no · Manim: no

This is a clear hub; the linked Dirac–Bergmann note exists.

- [Structure] No change needed.

### N2407

Note: [[04.02.01 Lagrangian Density|04.02.01 Lagrangian Density]]  
Priority: low · Graph: no · Manim: no

The Euler–Lagrange variations (4.18)–(4.19) are correct and the dimension check is sound.

- [Example] Show the intermediate derivatives for (4.19): $\partial\mathcal L/\partial\psi=-m\bar\psi$ and $\partial\mathcal L/\partial(\partial_\mu\psi)=i\bar\psi\gamma^\mu$. Without them the arrow notation is opaque.
- [Intuition] Show the symmetric form $\tfrac{i}{2}\bar\psi\gamma^\mu\overleftrightarrow{\partial_\mu}\psi-m\bar\psi\psi$, which is manifestly Hermitian, to justify "Hermitian up to a total derivative".

### N2408

Note: [[04.02.02 Conjugate Momenta|04.02.02 Conjugate Momenta]]  
Priority: low · Graph: no · Manim: no

The momenta are correct and the constraint discussion is clear.

- [Simplify] Number the two momentum equations so that later notes ([[04.15.02 Dirac Brackets and Quantization]]) can cite them, and write the constraints explicitly as $\pi-i\psi^\dagger\approx0$ and $\bar\pi\approx0$.

### N2409

Note: [[04.02.03 Hamiltonian Density|04.02.03 Hamiltonian Density]]  
Priority: low · Graph: no · Manim: no

(4.20)–(4.21) are correct, but the text contradicts itself about whether the field equation is used.

- [Simplify] The sentence "The field equation writes the time derivative in terms of spatial derivatives ... Hence (4.21)" conflicts with "No use of the field equation is needed for this cancellation". Show the direct cancellation $i\psi^\dagger\partial_0\psi-\bar\psi\,i\gamma^0\partial_0\psi=0$ first, then mention the field equation only for the interpretation $i\partial_0\psi=h\psi$.
- [Example] Give the rest-frame check explicitly: $h=m\gamma^0$ has eigenvalues $\pm m$.

### N2410

Note: [[04.03 Canonical Quantization and Anticommutation Relations|04.03 Canonical Quantization and Anticommutation Relations]]  
Priority: low · Graph: no · Manim: no

This is an adequate hub with a useful orientation paragraph.

- [Structure] No change needed.

### N2411

Note: [[04.03.01 The Attempt with Commutators|04.03.01 The Attempt with Commutators]]  
Priority: medium · Graph: yes · Manim: no

The physics conclusion and the callout on the antiparticle commutator sign are correct, but the displayed mode expansion and Hamiltonian keep the source's mismatched variables.

- [Correctness] (4.23) and (4.24) integrate over $d^3k$ while the integrand depends on $\mathbf p$, and the mode commutator omits the $(2\pi)^3$ that the $(2\pi)^{-3}$ measure requires. Use $d^3p$ throughout and $[b^s_{\mathbf p},b^{s'\dagger}_{\mathbf q}]=(2\pi)^3\delta_{ss'}\delta^{(3)}(\mathbf p-\mathbf q)$, rather than retaining the inconsistency.
- [Simplify] Show the key step behind (4.24): $H=\int\frac{d^3p}{(2\pi)^3}E_{\mathbf p}\sum_s(b^\dagger b-d\,d^\dagger)$, and then how $[d,d^\dagger]$ versus $\{d,d^\dagger\}$ decides the sign. Integrate the long callout into this derivation.
- [Graph] Plot the energy of $n$ antiparticle quanta in one mode, $E(n)=-nE_{\mathbf p}$ for bosonic $n=0..10$, against the fermionic allowed values $n\in\{0,1\}$ with $+nE_{\mathbf p}$. This illustrates "unbounded below" against Pauli blocking.

### N2412

Note: [[04.03.02 The Spin–Statistics Theorem|04.03.02 The Spin–Statistics Theorem]]  
Priority: low · Graph: no · Manim: no

This is a correct, concise statement of the theorem and its assumptions.

- [Intuition] Add the converse illustration: quantizing a scalar field with anticommutators makes $\{\phi(x),\phi(y)\}=\Delta^++\Delta^-\neq0$ at spacelike separation, so locality fails. This complements the energy argument for fermions.

### N2413

Note: [[04.03.03 Canonical Anticommutation Relations|04.03.03 Canonical Anticommutation Relations]]  
Priority: low · Graph: no · Manim: no

The relations (4.25)–(4.26) and the dimension check are correct.

- [Example] Show the immediate consequence of (4.26) for a smeared mode operator, $b^2=\tfrac12\{b,b\}=0$, which gives the Pauli exclusion principle in one line.

### N2414

Note: [[04.04 Mode Expansion and Creation and Annihilation Operators|04.04 Mode Expansion and Creation and Annihilation Operators]]  
Priority: low · Graph: no · Manim: no

This is an adequate hub; both linked subnotes exist.

- [Structure] No change needed.

### N2415

Note: [[04.04.01 Field Expansion|04.04.01 Field Expansion]]  
Priority: medium · Graph: no · Manim: no

The expansion (4.27)–(4.28) is standard and correctly normalized, but the note keeps a known transcription error (measure in $k$, integrand in $p$) and spends two paragraphs apologizing for it.

- [Correctness] (4.27) and (4.28) integrate over $d^3\mechanical{k}$ while every factor of the integrand depends on $\mechanical{p}$; write $\int\frac{d^3\mechanical{p}}{(2\pi)^3\sqrt{2E_{\mathbf p}}}$ and delete the callout and the "retained k/p mismatch" paragraph.
- [Intuition] Add the comparison with the complex scalar (3.52): $a\to b^s u$, $b^\dagger\to d^{s\dagger}v$, linking [[03.05.02 Mode Expansion and Operators]], so the reader sees the Dirac expansion as the scalar one with spinor polarization vectors.
- [Example] Add the one-particle matrix element $\langle0|\psi(x)|\mathbf p,s\rangle=u(p,s)e^{-ip\cdot x}$ (with the covariant state normalization) as a formula instead of the sentence "A vacuum-to-one-particle matrix element extracts a numerical spinor amplitude".

### N2416

Note: [[04.04.02 Anticommutation Relations of the Operators|04.04.02 Anticommutation Relations of the Operators]]  
Priority: medium · Graph: no · Manim: no

The algebra (4.29)–(4.31) is correct, but the derivation is only "schematic" and the first schematic paragraph names the wrong spinor product, which a callout then retracts.

- [Simplify] Replace the "Schematic derivation" paragraph (which cites $\bar uu=2m$) and the correcting callout with the actual inversion: $b^s_{\mathbf p}=\int d^3x\,e^{ip\cdot x}\,u^\dagger(p,s)\psi(x)/\sqrt{2E_{\mathbf p}}$ using $u^\dagger(p,r)u(p,s)=2E_{\mathbf p}\delta^{rs}$ and $u^\dagger(p,r)v(-p,s)=0$, then insert $\{\psi_\alpha,\psi^\dagger_\beta\}=\delta_{\alpha\beta}\delta^{(3)}$.
- [Structure] State explicitly that $\{b,d^\dagger\}=0$ as well; "All other anticommutators vanish" is correct but the displayed list (4.31) omits the mixed creation–annihilation case most likely to be misapplied.

### N2417

Note: [[04.05 Fock Space and the Pauli Exclusion Principle|04.05 Fock Space and the Pauli Exclusion Principle]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a useful remark that a mode includes spin.

- No change needed.

### N2418

Note: [[04.05.01 Structure of Fock Space|04.05.01 Structure of Fock Space]]  
Priority: low · Graph: no · Manim: no

Correct and concise.

- [Example] Show the sign explicitly: $b^{r\dagger}_{\mathbf p}b^{s\dagger}_{\mathbf q}|0\rangle=-b^{s\dagger}_{\mathbf q}b^{r\dagger}_{\mathbf p}|0\rangle$, i.e. $|\mathbf p,r;\mathbf q,s\rangle=-|\mathbf q,s;\mathbf p,r\rangle$, next to the prose about interchanging labels.

### N2419

Note: [[04.05.02 The Pauli Exclusion Principle as an Algebraic Consequence|04.05.02 The Pauli Exclusion Principle as an Algebraic Consequence]]  
Priority: low · Graph: no · Manim: no

Correct and short; the caveat about continuum modes is appropriate.

- [Intuition] Add one sentence connecting to observable consequences: the Fermi sea and degeneracy pressure (white dwarfs) follow from occupation at most one per mode, which the next note quantifies.

### N2420

Note: [[04.05.03 Number Operators|04.05.03 Number Operators]]  
Priority: low · Graph: yes · Manim: no

The idempotence proof (4.36) is correct and well explained; the integration label mismatch is retained again.

- [Correctness] (4.35) integrates over $d^3\mechanical{k}$ with integrand labelled by $\mathbf p$; use $d^3\mechanical{p}$ and remove the callout.
- [Graph] Plot the Fermi–Dirac occupation $1/(e^{(E-\mu)/T}+1)$ versus $E/\mu\in[0,2]$ for $T/\mu=0.01,0.1,0.3$, showing the step at zero temperature as the many-mode consequence of $n\in\{0,1\}$.

### N2421

Note: [[04.06 Hamiltonian Operator and Charge Operator|04.06 Hamiltonian Operator and Charge Operator]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a good check (a particle–antiparticle pair).

- No change needed.

### N2422

Note: [[04.06.01 Hamiltonian Operator in Mode Variables|04.06.01 Hamiltonian Operator in Mode Variables]]  
Priority: medium · Graph: no · Manim: no

The unordered form (4.38), the sign of the vacuum constant and the normal-ordered result (4.37) are correct, but the substitution leading to (4.38) is not shown and the integration label is wrong.

- [Correctness] (4.37) and (4.38) integrate over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$ and delete the "printed k/p integration labels" sentence.
- [Simplify] Show the short route to (4.38): $H=\int d^3x\,\psi^\dagger i\partial_t\psi$ with the expansion gives $E_{\mathbf p}(b^\dagger b-dd^\dagger)$ directly because $i\partial_t$ brings $+E$ for the $b$ branch and $-E$ for the $d^\dagger$ branch.
- [Intuition] Contrast explicitly with what commutators would give: with $[d,d^\dagger]$ the term becomes $-d^\dagger d$ and energy is unbounded below; link [[04.03.01 The Attempt with Commutators]].

### N2423

Note: [[04.06.02 The Noether Current and Charge|04.06.02 The Noether Current and Charge]]  
Priority: low · Graph: no · Manim: no

The current, the charge (4.40) and the remark on signs are correct; the unordered intermediate step is missing and the integration label is wrong.

- [Correctness] (4.40) integrates over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$.
- [Simplify] Show the unordered result $Q=\int\frac{d^3p}{(2\pi)^3}\sum_s(b^\dagger b+dd^\dagger)$ and that anticommutation turns $+dd^\dagger$ into $-d^\dagger d$ plus a constant; this is exactly where the fermion and boson cases differ (for the complex scalar the sign came from the current instead).

### N2424

Note: [[04.06.03 The Four-Momentum Vector|04.06.03 The Four-Momentum Vector]]  
Priority: low · Graph: no · Manim: no

Correct result; the source of (4.41) (the momentum density) is not written down.

- [Correctness] (4.41) integrates over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$ and drop the sentence about identifying the label during evaluation.
- [Simplify] Write the spatial momentum operator explicitly, $\mathbf P=\int d^3x\,\psi^\dagger(-i\nabla)\psi$, before quoting the normal-ordered mode form.

### N2425

Note: [[04.07 The Dirac Propagator|04.07 The Dirac Propagator]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2426

Note: [[04.07.01 Definition and Structure|04.07.01 Definition and Structure]]  
Priority: low · Graph: no · Manim: no

Correct definition with the fermionic minus sign explained.

- [Intuition] Add the relation $S_F(x-y)=(i\not\partial_x+m)\Delta_F(x-y)$ to the scalar Feynman function of [[03.07.04 The Feynman Propagator]] here, since the section hub promises this first-order-operator connection but no note states it.

### N2427

Note: [[04.07.02 Calculation of the Propagator|04.07.02 Calculation of the Propagator]]  
Priority: low · Graph: no · Manim: no

Both contractions (4.43)–(4.44) and the spin sums are correct; the integration label is again mismatched.

- [Correctness] (4.43) and (4.44) integrate over $d^3\mechanical{k}$ with a $\mathbf p$-labelled integrand; use $d^3\mechanical{p}$.
- [Simplify] Combine the two results into the covariant formula $S_F=(i\not\partial_x+m)[\theta(x^0-y^0)\Delta^+(x-y)+\theta(y^0-x^0)\Delta^-(x-y)]$ to show where the plus and minus of $\not p\pm m$ come from.

### N2428

Note: [[04.07.03 Momentum Representation|04.07.03 Momentum Representation]]  
Priority: medium · Graph: yes · Manim: no

The step-function representation (4.45) and the propagator (4.46) are correct, but the step from (4.43)–(4.44) to (4.46) ("Combining the contractions gives") is skipped.

- [Correctness] (4.47) integrates over $d^4\mechanical{k}$ with a $p$-dependent integrand; use $d^4\mechanical{p}$ and remove the sentence about the source label.
- [Simplify] Show the $p^0$ contour integral: poles at $p^0=\pm(E_{\mathbf p}-i\varepsilon)$; for $x^0>0$ close below and pick up $(\not p+m)e^{-ip\cdot x}/(2E)$ at $p^0=E$, reproducing (4.43); for $x^0<0$ close above, reproducing minus (4.44) after $\mathbf p\to-\mathbf p$.
- [Graph] Draw the complex $p^0$ plane with the two Feynman poles (positive-energy below, negative-energy above the real axis) and the two closing semicircles labelled $x^0>0$ and $x^0<0$.

### N2429

Note: [[04.07.04 Equation Satisfied by the Propagator|04.07.04 Equation Satisfied by the Propagator]]  
Priority: low · Graph: no · Manim: no

Correct and concise.

- [Simplify] Show the one-line coordinate check $i\not\partial_x e^{-ip\cdot x}=\not p\,e^{-ip\cdot x}$ that links (4.48) to (4.49).

### N2430

Note: [[04.08 Discrete Symmetries - C, P, T|04.08 Discrete Symmetries - C, P, T]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2431

Note: [[04.08.01 Parity (P)|04.08.01 Parity (P)]]  
Priority: low · Graph: no · Manim: yes

The transformation laws (4.50)–(4.53) and the opposite intrinsic parity of fermion and antifermion are correct.

- [Simplify] Replace "one of the four signs and imaginary signs" with $\eta_P\in\{\pm1,\pm i\}$.
- [Example] Add the physical consequence of opposite intrinsic parity: a fermion–antifermion pair in orbital state $L$ has $P=(-1)^{L+1}$, so positronium ground state and the pion are pseudoscalar.
- [Manim] Animate a particle with momentum arrow and spin arrow under spatial inversion: the momentum reverses, the spin (axial) does not, so helicity flips; then show time reversal reversing both so helicity is kept, which ties 04.08.01 and 04.08.03 together.

### N2432

Note: [[04.08.02 Charge Conjugation (C)|04.08.02 Charge Conjugation (C)]]  
Priority: low · Graph: no · Manim: no

The conditions (4.55), $C=i\gamma^2\gamma^0$ and the current sign (4.57) are correct.

- [Simplify] Add $C\bar\psi^T=i\gamma^2\psi^*$ in the Dirac–Pauli representation, the form most readers meet elsewhere.
- [Example] Add the explicit rest-frame check the note recommends: apply $i\gamma^2(\cdot)^*$ to $u(m,s=1)$ and show it gives $v$ with the expected spin label, so the convention caveat becomes a worked computation.

### N2433

Note: [[04.08.03 Time Reversal (T)|04.08.03 Time Reversal (T)]]  
Priority: low · Graph: no · Manim: no

Correct and compact; the claim that $T$ interchanges the spin states can be shown explicitly.

- [Simplify] Show $T=i\gamma^1\gamma^3=\mathrm{diag}(-\sigma^2,-\sigma^2)$ in the Dirac–Pauli representation, which makes the spin flip visible, and add $\mathcal T^2=-1$ on one-fermion states (Kramers degeneracy) as the concrete consequence of the last sentence.

### N2434

Note: [[04.08.04 The CPT Theorem|04.08.04 The CPT Theorem]]  
Priority: medium · Graph: no · Manim: no

The bilinear table and current transformation are correct, but the note displays a wrong main equation (4.59) and puts the correct one in a callout, and the tensor row uses unspecific checkmarks.

- [Correctness] (4.59) $\Theta\psi\Theta^{-1}=\eta_{CPT}\bar\psi^T(-x)$ omits the spinor matrix; replace it by the derived $\Theta\psi(x)\Theta^{-1}=\eta\,i\gamma^0\gamma^5\bar\psi^T(-x)=-\eta\,i\gamma^5\psi^*(-x)$ (I verified $T\gamma^0C=i\gamma^0\gamma^5$) and drop both callouts about the printed form.
- [Correctness] Table 4.1 tensor row: replace the checkmarks by the actual signs $P:(-1)^\mu(-1)^\nu$, $T:-(-1)^\mu(-1)^\nu$, $CP:-(-1)^\mu(-1)^\nu$ (with $(-1)^\mu=+1$ for $\mu=0$, $-1$ otherwise), consistent with $C=-1$, $CPT=+1$; then the callout on checkmarks can go.
- [Example] Add the experimental test as a concrete number: the $K^0$–$\bar K^0$ mass difference bound $|m_{K^0}-m_{\bar K^0}|/m_K\lesssim10^{-18}$ (check the current PDG value) as the strongest CPT test of the mass-equality statement.

### N2435

Note: [[04.09 Covariant Bilinear Forms|04.09 Covariant Bilinear Forms]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2436

Note: [[04.09.01 Classification by the Lorentz Group|04.09.01 Classification by the Lorentz Group]]  
Priority: low · Graph: no · Manim: no

Correct classification and component count.

- [Example] Add one physical use per row (scalar: mass term and Yukawa, pseudoscalar: pion–nucleon coupling, vector: QED current, axial: weak current, tensor: anomalous magnetic moment $\bar\psi\sigma^{\mu\nu}\psi F_{\mu\nu}$) as a fourth table column.

### N2437

Note: [[04.09.02 Fierz Identities|04.09.02 Fierz Identities]]  
Priority: high · Graph: no · Manim: no

The displayed identity (4.61) is incorrect as printed (missing tensor weight $\tfrac12$ and wrong axial and pseudoscalar signs), and the note offers only caveats instead of a usable formula.

- [Correctness] Replace (4.61) by the standard scalar Fierz identity for commuting spinors, $(\bar\psi_1\psi_2)(\bar\psi_3\psi_4)=\tfrac14[(\bar\psi_1\psi_4)(\bar\psi_3\psi_2)+(\bar\psi_1\gamma^\mu\psi_4)(\bar\psi_3\gamma_\mu\psi_2)+\tfrac12(\bar\psi_1\sigma^{\mu\nu}\psi_4)(\bar\psi_3\sigma_{\mu\nu}\psi_2)-(\bar\psi_1\gamma^\mu\gamma^5\psi_4)(\bar\psi_3\gamma_\mu\gamma^5\psi_2)+(\bar\psi_1\gamma^5\psi_4)(\bar\psi_3\gamma^5\psi_2)]$, with an overall minus sign for anticommuting fields; the printed $-\tfrac14\sum_\Gamma\Gamma\otimes\bar\Gamma$ gives $+$ for the axial term (since $\overline{\gamma^\mu\gamma^5}=\gamma^\mu\gamma^5$), the wrong sign for $i\gamma^5$, and no $\tfrac12$ for $\sigma^{\mu\nu}$.
- [Simplify] Derive it from the completeness relation $\delta_{ab}\delta_{cd}=\tfrac14\sum_A(\Gamma_A)_{ad}(\Gamma^A)_{cb}$ with $\mathrm{tr}(\Gamma_A\Gamma^B)=4\delta_A^B$; this makes the weights and signs (dual of $\gamma^\mu\gamma^5$ is $-\gamma_\mu\gamma^5$) follow in two lines and replaces the three caveat paragraphs.
- [Example] Add the classic application: $(V-A)\times(V-A)$ is Fierz invariant, $(\bar\psi_1\gamma^\mu P_L\psi_2)(\bar\psi_3\gamma_\mu P_L\psi_4)=+(\bar\psi_1\gamma^\mu P_L\psi_4)(\bar\psi_3\gamma_\mu P_L\psi_2)$ for anticommuting fields, used to rewrite muon decay in charge-retention form.

### N2438

Note: [[04.09.03 Current Density and Global Symmetries|04.09.03 Current Density and Global Symmetries]]  
Priority: low · Graph: no · Manim: no

The divergence (4.62) is correct; the derivation is only described.

- [Simplify] Show the two-line derivation: $\partial_\mu(\bar\psi\gamma^\mu\gamma^5\psi)=(\partial_\mu\bar\psi\gamma^\mu)\gamma^5\psi-\bar\psi\gamma^5\not\partial\psi=im\bar\psi\gamma^5\psi+im\bar\psi\gamma^5\psi$, using $\not\partial\psi=-im\psi$ and $\partial_\mu\bar\psi\gamma^\mu=im\bar\psi$.
- [Links] Mention the axial anomaly in one sentence with a link to the note where it is treated, since the paragraph already says quantum conservation needs separate analysis.

### N2439

Note: [[04.10 Chirality, Helicity, and Weyl Spinors|04.10 Chirality, Helicity, and Weyl Spinors]]  
Priority: low · Graph: no · Manim: no

Clear section hub with a useful distinction between the three classifications.

- No change needed.

### N2440

Note: [[04.10.01 Chiral Projectors|04.10.01 Chiral Projectors]]  
Priority: low · Graph: no · Manim: no

Correct projectors and Weyl-representation form.

- [Simplify] Show the one-line proof $P_R^2=\tfrac14(1+2\gamma^5+(\gamma^5)^2)=P_R$ and $P_RP_L=\tfrac14(1-(\gamma^5)^2)=0$ instead of describing it.
- [Example] Add $\bar\psi\psi=\bar\psi_L\psi_R+\bar\psi_R\psi_L$ and $\bar\psi\gamma^\mu\psi=\bar\psi_L\gamma^\mu\psi_L+\bar\psi_R\gamma^\mu\psi_R$, which makes the last paragraph (mass couples the chiralities) concrete.

### N2441

Note: [[04.10.02 The Dirac Equation in Chiral Form|04.10.02 The Dirac Equation in Chiral Form]]  
Priority: low · Graph: no · Manim: no

The chiral equations (4.66)–(4.68) are correct in the Peskin convention.

- [Simplify] Write the Weyl-representation matrix $\gamma^\mu=\begin{pmatrix}0&\sigma^\mu\\\bar\sigma^\mu&0\end{pmatrix}$ before (4.66) so the reader can do the block multiplication.
- [Example] Show the elimination claimed in the text: applying $i\bar\sigma^\nu\partial_\nu$ to (4.66) and using $\bar\sigma^\nu\sigma^\mu\partial_\nu\partial_\mu=\Box$ gives $(\Box+m^2)\psi_R=0$.

### N2442

Note: [[04.10.03 Helicity and Chirality|04.10.03 Helicity and Chirality]]  
Priority: medium · Graph: yes · Manim: yes

The physics is correct, but the note describes a source sketch in words and a table instead of showing the quantitative relation, and the caveat callouts overlap.

- [Graph] Replace the description of the unnumbered source sketch and the two-row table with a plot of the wrong-chirality fraction of a positive-helicity spinor, $f=(E-|\mathbf p|)/(2E)=\tfrac12\big(1-1/\sqrt{1+x^2}\big)$ with $x=m/|\mathbf p|\in[0,5]$; it goes from 0 (ultrarelativistic) to $\tfrac12$ (at rest), making "approximately equal" quantitative.
- [Example] Add a numeric case: a 1 GeV electron has $m/|\mathbf p|\approx5\times10^{-4}$, so its wrong-chirality admixture is about $6\times10^{-8}$; this explains why helicity suppression of $\pi^+\to e^+\nu$ relative to $\pi^+\to\mu^+\nu$ is so strong.
- [Structure] Merge the two callouts ("Exact identification" and "Scope of the massless identification") into one; they make the same point about massive helicity eigenstates.
- [Manim] Animate an observer boosting past a massive particle: the momentum arrow reverses in the observer frame while the spin arrow does not, so helicity flips; then repeat for a massless particle where the boost can only redshift, never reverse, the momentum.

### N2443

Note: [[04.10.04 The Majorana Field|04.10.04 The Majorana Field]]  
Priority: low · Graph: no · Manim: no

Correct statement of the Majorana condition with careful caveats; the mode-count claim could be shown.

- [Example] Write the Majorana field explicitly: $\psi_M=\int\frac{d^3p}{(2\pi)^3\sqrt{2E}}\sum_s[b^s_{\mathbf p}u e^{-ip\cdot x}+b^{s\dagger}_{\mathbf p}v e^{ip\cdot x}]$, and in Weyl form $\psi_M=(\psi_L,\,i\sigma^2\psi_L^*)$, so the halving of degrees of freedom is visible.
- [Intuition] Add one sentence on the physical test: neutrinoless double beta decay is possible only for Majorana neutrinos, which is how the open question mentioned in the callout is probed experimentally.

### N2444

Note: [[04.11 Traces of Gamma Matrices|04.11 Traces of Gamma Matrices]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2445

Note: [[04.11.01 General Properties of the Trace|04.11.01 General Properties of the Trace]]  
Priority: low · Graph: no · Manim: no

Correct and complete proof.

- No change needed.

### N2446

Note: [[04.11.02 Fundamental Identities for Contractions|04.11.02 Fundamental Identities for Contractions]]  
Priority: low · Graph: no · Manim: no

The four identities (4.73) are correct; only the second is derived.

- [Simplify] Show the derivation of the third identity in two lines, $\gamma^\mu\not a\not b\gamma_\mu=\gamma^\mu\not a(2b_\mu-\gamma_\mu\not b)=2\not b\not a+2\not a\not b=4a\cdot b$, so the pattern for the fourth is clear.
- [Structure] Add the $d$-dimensional forms ($\gamma^\mu\gamma_\mu=d$, $\gamma^\mu\not a\gamma_\mu=-(d-2)\not a$, etc.) as a second column, since the note warns about dimensional regularization but never gives them.

### N2447

Note: [[04.11.03 Traces of Products of Gamma Matrices|04.11.03 Traces of Products of Gamma Matrices]]  
Priority: low · Graph: no · Manim: no

Correct traces with a consistent $\epsilon^{0123}=+1$ convention; the four-matrix proof stops at "$=\cdots$".

- [Simplify] Complete (4.78): after the third step the term is $-\mathrm{tr}(\not b\not c\not d\not a)+2(a\cdot d)\mathrm{tr}(\not b\not c)$, and cyclicity gives $2\,\mathrm{tr}(\not a\not b\not c\not d)=8[(a\cdot b)(c\cdot d)-(a\cdot c)(b\cdot d)+(a\cdot d)(b\cdot c)]$; the missing line is the crux of the proof.
- [Simplify] Display the 0123 check for (4.76) as a formula, $\gamma^0\gamma^1\gamma^2\gamma^3=-i\gamma^5\Rightarrow\mathrm{tr}(\gamma^5\gamma^0\gamma^1\gamma^2\gamma^3)=-i\,\mathrm{tr}(1)=-4i$, instead of the prose description; it fixes the sign convention unambiguously when comparing references.

### N2448

Note: [[04.12 Examples of Trace Calculations|04.12 Examples of Trace Calculations]]  
Priority: medium · Graph: yes · Manim: no

Example 4.4 and 4.7 are correct (I rechecked $8[(p_1\cdot k_1)(p_2\cdot k_2)+(p_1\cdot k_2)(p_2\cdot k_1)]\to e^4(1+\cos^2\theta)$), but Examples 4.5 and 4.8 retain known errors with corrections only in callouts, and symbols are reused.

- [Correctness] (4.89) has the wrong sign: by (4.76), $\mathrm{tr}(\not p\gamma^\mu\not q\gamma^\nu\gamma^5)=-4i\epsilon^{\alpha\mu\beta\nu}p_\alpha q_\beta=+4i\epsilon^{\alpha\beta\mu\nu}p_\alpha q_\beta$; print the corrected formula and remove the callout.
- [Correctness] Example 4.8 states the ansatz $\psi=e^{-imt}(\phi,\chi)$ but (4.93)–(4.94) are the unshifted equations; either drop the phase from the ansatz or print the shifted equations $i\partial_t\phi=\boldsymbol\sigma\cdot\mathbf p\,\chi$, $i\partial_t\chi=\boldsymbol\sigma\cdot\mathbf p\,\phi-2m\chi$, and rename the example (it does not start from Klein–Gordon).
- [Correctness] Symbol clash: $\mechanical{q}$ is the photon momentum in Example 4.4 but a generic vector in (4.89), and $\mechanical{k}$ is the muon momentum label in 4.4 but the integration variable in (4.90) (whose integrand uses $p$); use distinct letters and integrate (4.90) over $d^3p$.
- [Simplify] In Example 4.4 show the centre-of-mass kinematics $p_1\cdot k_1=p_2\cdot k_2=\tfrac s4(1-\cos\theta)$, $p_1\cdot k_2=p_2\cdot k_1=\tfrac s4(1+\cos\theta)$ and $q^4=s^2$ that turn (4.85) into (4.86); "with the standard normalization factors" hides a three-line computation.
- [Graph] Polar plot of $d\sigma/d\Omega\propto1+\cos^2\theta$, optionally overlaid with $1+\cos^2\theta+\tfrac83A_{FB}\cos\theta$ for $A_{FB}=0.1$ to illustrate the $g_Vg_A$ interference of Example 4.5.

### N2449

Note: [[04.13 Normal Ordering and Wick's Theorem for Fermions|04.13 Normal Ordering and Wick's Theorem for Fermions]]  
Priority: low · Graph: no · Manim: no

Clear section hub.

- No change needed.

### N2450

Note: [[04.13.01 Fermionic Normal Ordering|04.13.01 Fermionic Normal Ordering]]  
Priority: low · Graph: no · Manim: no

The decomposition and (4.96) are correct, including the sign of the third term.

- [Example] Add the difference $\psi_\alpha\bar\psi_\beta-\mathcal N(\psi_\alpha\bar\psi_\beta)=\{\psi^+_\alpha,\bar\psi^-_\beta\}$, a c-number whose vacuum value is the positive-frequency contraction (4.43); this prepares (4.97).

### N2451

Note: [[04.13.02 Wick Contractions|04.13.02 Wick Contractions]]  
Priority: low · Graph: no · Manim: no

Correct definitions and sign rule.

- No change needed.

### N2452

Note: [[04.13.03 Wick's Theorem for Fermions|04.13.03 Wick's Theorem for Fermions]]  
Priority: low · Graph: no · Manim: no

The expansion (4.100) is correct (I rechecked all seven signs), but spinor indices are suppressed, which makes terms like $S_F(x_4-x_1)\mathcal N(\bar\psi_3\psi_2)$ ambiguous as matrices.

- [Simplify] Restore spinor indices in (4.100), e.g. $+S_F(x_4-x_1)_{\delta\alpha}\mathcal N(\bar\psi_{3\gamma}\psi_{2\beta})$, or state that each term is a component expression; without indices the matrix order is unclear.
- [Example] Show the sign count for one nontrivial term: contracting $\bar\psi_1$ with $\psi_4$ needs two exchanges ($+$), the contraction gives $-S_F(x_4-x_1)$, and $\mathcal N(\psi_2\bar\psi_3)=-\mathcal N(\bar\psi_3\psi_2)$, giving the displayed $+$.

### N2453

Note: [[04.14 Connection to Quantum Electrodynamics|04.14 Connection to Quantum Electrodynamics]]  
Priority: low · Graph: no · Manim: no

The covariant derivative, interaction term and vertex rule are correct and consistent; the photon propagator symbol and the chapter reference are weak points.

- [Correctness] The caption and table call the photon propagator $\tilde{\signal{S}}_F^\gamma$, reusing the Dirac propagator letter for a different object with different index structure ($-ig_{\mu\nu}/(q^2+i\varepsilon)$); use $\tilde D_{F\mu\nu}$ as is standard.
- [Links] Replace "see Chapter 5" with a wiki link to the corresponding photon-field chapter note.
- [Simplify] Show the gauge transformation explicitly, $\psi\to e^{-ie\alpha(x)}\psi$, $A_\mu\to A_\mu+\partial_\mu\alpha$, and that $D_\mu\psi\to e^{-ie\alpha}D_\mu\psi$, instead of describing the compensating term in prose.

### N2454

Note: [[04.15 The Dirac Field as a Dirac–Bergmann System|04.15 The Dirac Field as a Dirac–Bergmann System]]  
Priority: low · Graph: no · Manim: no

Short hub that frames the constrained-system treatment clearly but stays abstract.

- [Intuition] Add one sentence naming the two primary constraints explicitly ($\pi_\psi-i\psi^\dagger\approx0$ and $\bar\pi\approx0$) so the reader knows what "redundant momenta" means before opening the subnotes.

### N2455

Note: [[04.15.01 Constrained Structure of the Hamiltonian Operator|04.15.01 Constrained Structure of the Hamiltonian Operator]]  
Priority: high · Graph: no · Manim: no

The note repeatedly refers to a "missing companion momentum relation" and a second-class classification without ever writing the complete constraint set or computing anything, so it is hard to follow.

- [Simplify] Write the full primary set explicitly: $\phi_\alpha=\pi_{\psi,\alpha}-i(\bar\psi\gamma^0)_\alpha\approx0$ and $\chi_\alpha=\bar\pi_\alpha\approx0$ (for $\mathcal L=\bar\psi(i\not\partial-m)\psi$), instead of the two paragraphs that describe this relation only in words.
- [Example] Compute the mixed constraint bracket $\{\phi_\alpha(\mathbf x),\chi_\beta(\mathbf y)\}_{\mathrm{PB}}\propto i(\gamma^0)_{\beta\alpha}\delta^{(3)}(\mathbf x-\mathbf y)$ (graded bracket, sign per convention) and show the constraint matrix is invertible; this is the actual reason the constraints are second class.
- [Structure] Remove the paragraph beginning "The missing companion momentum relation in the note above matters operationally" once the constraint is written out; it duplicates the callout.
- [Simplify] Note that the symmetric Lagrangian $\frac i2(\bar\psi\gamma^\mu\partial_\mu\psi-\partial_\mu\bar\psi\gamma^\mu\psi)$ gives $\bar\pi\neq0$; state which form of $\mathcal L$ is used, since the statement $\bar\pi=0$ depends on it.

### N2456

Note: [[04.15.02 Dirac Brackets and Quantization|04.15.02 Dirac Brackets and Quantization]]  
Priority: medium · Graph: no · Manim: no

Correct general definition of the Dirac bracket, but the Dirac-field result is asserted rather than derived.

- [Example] Evaluate (4.104) for the Dirac field with the constraint matrix from 04.15.01 and show $\{\psi_\alpha(\mathbf x),\psi^\dagger_\beta(\mathbf y)\}_D=-i\delta_{\alpha\beta}\delta^{(3)}(\mathbf x-\mathbf y)$, which then maps by (4.105) to (4.25); currently "the result agrees" is only stated.
- [Simplify] Replace the last two paragraphs (reconstruction test, graded-parity remarks) with one sentence plus the explicit check $\{\phi_a,F\}_D=0$ derived in one line from $C\,C^{-1}=1$.

### N2457

Note: [[04.16 Gordon Identity|04.16 Gordon Identity]]  
Priority: low · Graph: no · Manim: no

Correct and compact proof of the Gordon identity; the closing paragraphs are somewhat abstract.

- [Intuition] Add a nonrelativistic reading: in the Breit frame the $\sigma^{0i}q_i$ term vanishes and $\sigma^{ij}q_j$ gives $\boldsymbol\sigma\times\mathbf q$, i.e. a spin magnetic moment $\frac{e}{2m}\boldsymbol\sigma$ with $g=2$; this makes "magnetic contribution" concrete.
- [Simplify] Merge the three closing paragraphs (on-shell condition, $p'=p$ limit, loop calculation) into a short bullet list of validity conditions.

### N2458

Note: [[04.17 Summary of Rules and Fundamental Relations|04.17 Summary of Rules and Fundamental Relations]]  
Priority: low · Graph: no · Manim: no

Useful formula sheet; the measure-label mismatch is flagged in a callout instead of being fixed.

- [Simplify] In (4.112)–(4.114) write $\int\frac{d^3\mathbf p}{(2\pi)^3}E_{\mathbf p}\sum_s(b^{s\dagger}_{\mathbf p}b^s_{\mathbf p}+\dots)$ with one consistent label and drop the callout explaining the $k$/$p$ mismatch.
- [Structure] Add the Dirac equation, $\bar u u=2m$, and $\operatorname{tr}\gamma^5$-type traces (or link [[04.18.09 Traces with the Levi-Civita tensor]]) so the sheet is complete for later QED chapters.

### N2459

Note: [[04.18 Exercises|04.18 Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise index; fine as is.

- [Structure] No change needed apart from noting that 4.10 also contains the largest source correction, so readers should consult it before reusing chirality statements.

### N2460

Note: [[04.18.01 Clifford algebra in arbitrary dimension|04.18.01 Clifford algebra in arbitrary dimension]]  
Priority: low · Graph: no · Manim: no

Correct solution with a clear distinction between spinor and spacetime dimension, but the same point is repeated three times.

- [Simplify] The prompt callout, the "Correction to the exercise statement" callout and the $d=3$ counterexample paragraph all make the same point; keep one callout and the $d=3$ example.
- [Example] Give an explicit $d=3$ representation ($\gamma^0=\sigma^3,\gamma^1=i\sigma^1,\gamma^2=i\sigma^2$) to show $\operatorname{tr}(\gamma^\mu\gamma^\nu)=2g^{\mu\nu}$ while $\gamma^\mu\gamma_\mu=3$.

### N2461

Note: [[04.18.02 Canonical anticommutators and inversion|04.18.02 Canonical anticommutators and inversion]]  
Priority: low · Graph: no · Manim: no

Clear, correct step-by-step derivation of the equal-time anticommutator.

- [Simplify] Time is written $\mechanical{t}$ here but $\signal{t}$ in 04.17 and 05.03; use one macro for time across the chapter.
- [Structure] The two closing paragraphs restate the reflection step already explained; shorten to two sentences.

### N2462

Note: [[04.18.03 Fermion Fock number|04.18.03 Fermion Fock number]]  
Priority: low · Graph: no · Manim: no

Clear and correct one-mode construction.

- [Correctness] The physical-quantities table lists $\signal{n}$, but the note only uses the operator $\hat{\signal{n}}$; list $\hat{\signal{n}}$ (eigenvalues $0,1$).
- [Example] Add the two-mode Jordan–Wigner construction ($b_1=\sigma^-\otimes1$, $b_2=\sigma^3\otimes\sigma^-$) that the last paragraph mentions, so the "relative signs" claim is shown concretely.

### N2463

Note: [[04.18.04 Massless position-space propagator|04.18.04 Massless position-space propagator]]  
Priority: low · Graph: no · Manim: no

Correct derivation with a good distributional check.

- [Simplify] Show the one-line differentiation $\partial_\mu(x^2)^{-1}=-2x_\mu(x^2)^{-2}$ that leads from $\Delta_F$ to $i\not x/(2\pi^2(x^2-i\epsilon)^2)$; it is currently skipped.
- [Links] Link [[05.14.06 Photon propagator in position space]] where the massless $\Delta_F$ is derived by contour integration.

### N2464

Note: [[04.18.05 Noether current and charge|04.18.05 Noether current and charge]]  
Priority: low · Graph: no · Manim: no

Correct, if long; the mixed terms are shown after the diagonal result, which reverses the logical order.

- [Structure] Move the mixed-term display before the diagonal result ("Before the orthogonality relations are applied...") so the derivation reads top to bottom.
- [Simplify] Use $\signal{t}$ consistently with the rest of the chapter instead of $\mechanical{t}$ in the oscillating exponentials.

### N2465

Note: [[04.18.06 Charge-conjugation symmetry of the propagator|04.18.06 Charge-conjugation symmetry of the propagator]]  
Priority: low · Graph: no · Manim: no

Correct with both a position-space and an explicit momentum-space check.

- [Simplify] State the convention for $C$ used (e.g. $C=i\gamma^2\gamma^0$, $C^{-1}=C^\dagger=-C$) at the start so the sign of $\mathscr C\bar\psi\mathscr C^{-1}$ can be verified.

### N2466

Note: [[04.18.07 Gordon identity|04.18.07 Gordon identity]]  
Priority: low · Graph: no · Manim: no

Correct alternative proof; largely duplicates 04.16.

- [Structure] Point out that this proof differs from 04.16 (it uses $\gamma\gamma=g\mp i\sigma$ rather than the symmetric/antisymmetric split) so the duplication has a purpose, or link [[04.16 Gordon Identity]] directly.

### N2467

Note: [[04.18.08 Anomalous magnetic moment|04.18.08 Anomalous magnetic moment]]  
Priority: low · Graph: no · Manim: no

Correct and clear; could cite the current experimental value as context.

- [Example] Compare $\alpha/2\pi\approx1.1614\times10^{-3}$ with the measured $a_e\approx1.15965218\times10^{-3}$ to show the size of higher-order terms.
- [Simplify] $\electric{F}_1$ and $\magnetic{F}_2$ use different macro groups although both are vertex form factors; consider one group or state why.

### N2468

Note: [[04.18.09 Traces with the Levi-Civita tensor|04.18.09 Traces with the Levi-Civita tensor]]  
Priority: low · Graph: no · Manim: no

Correct trace results with an explicit coefficient check.

- [Simplify] Show the reordering count explicitly ($3+2+1=6$ transpositions) in the $\mu\nu\rho\sigma=0123$ check, since the displayed line jumps from $(-1)^6$ to $(-1)^3$.
- [Intuition] Warn that textbooks differ in the sign of $\epsilon^{0123}$ and of $\gamma^5$, so the overall sign of (a) must be rechecked with the component test before comparing with another source.

### N2469

Note: [[04.18.10 Weyl spinors and chirality|04.18.10 Weyl spinors and chirality]]  
Priority: medium · Graph: yes · Manim: no

The physics is corrected properly, but the note is dominated by layered source corrections that make the actual answers hard to find.

- [Structure] Lead each part with the correct result and move the source errors into one collapsed callout at the end.
- [Graph] Plot $\langle\gamma^5\rangle=2h|\mathbf p|/E$ against $|\mathbf p|/m\in[0,10]$ for $h=\pm\frac12$, showing the approach to $\pm1$ in the ultrarelativistic limit.
- [Example] Give the explicit Weyl-basis spinor $u=(\sqrt{E-2h|\mathbf p|}\,\xi,\sqrt{E+2h|\mathbf p|}\,\xi)/\sqrt{\cdot}$ from which $\langle\gamma^5\rangle$ follows in one line.

### N2470

Note: [[04.18.11 The Majorana field|04.18.11 The Majorana field]]  
Priority: low · Graph: no · Manim: no

Correct and careful; the closing paragraphs repeat the main arguments.

- [Simplify] Shorten the two closing paragraphs; the symmetric-matrix plus Grassmann argument is already stated in part (c).
- [Intuition] Mention that, quantized, $J^\mu$ vanishes up to a c-number ordering constant, which normal ordering removes.

### N2471

Note: [[04.18.12 Causality of the propagator|04.18.12 Causality of the propagator]]  
Priority: medium · Graph: yes · Manim: no

Correct derivation of fermionic microcausality, but long and partly repetitive.

- [Graph] Plot the massive Pauli–Jordan function $\Delta(t,r)$ (e.g. $m=1$, $r=2$, $t\in[-5,5]$) to show it is zero for $|t|<r$ and nonzero inside the light cone, next to $\mathrm{Re}\,\Delta_F$ which is not.
- [Simplify] Merge the two closing paragraphs on open spacelike regions and Feynman versus causal functions into one.
