---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/05 Grand Canonical Ensemble"
---

> [!TLDR]
> This note tracks the review of the 35 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/05 Grand Canonical Ensemble`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 7 possible errors or notation conflicts. 7 of them are verified (7 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1338|N1338]] 05.01.03 Physical Interpretation: Fig. 5.1 labels "Tᵦ, Pᵦ, μᵦ", "Nᵦ particles" and the equilibrium line use U+1D66 (Greek subscript beta), not a Latin B; this reads as $T_\beta$ and clashes with the inverse temperature $\beta$; use Latin "B" labels (e.g. MathJax $T_B$). **Fixed:** Replaced with HTML <sub>B</sub> (and <sub>A</sub> for the matching A labels, as used elsewhere in the vault); not checked in Obsidian reading mode
- [[#N1361|N1361]] 05.07 Solved Examples: Symbol clash: $z$ is the fugacity while $z_{\mathrm{rot}}$, $z_{\mathrm{osc}}$, $z_{\mathrm{int}}$ are single-particle partition functions, and they appear together in products such as $zVz_{\mathrm{rot}}/\lambda_T^3$ and $zz_{\mathrm{osc}}^3$; rename the partition functions (e.g. $q_{\mathrm{rot}},q_{\mathrm{osc}},q_{\mathrm{int}}$). **Fixed:** Renamed single-particle partition functions to q_rot, q_osc, q_int (all occurrences)
- [[#N1361|N1361]] 05.07 Solved Examples: The same site occupation is $N_{\mathrm{site}}$ in Example 5.5 but $n_{\mathrm{site}}$ in Example 5.7, and the table row for $\Delta$ lists "Signed chemical-potential offset", a meaning never used in this note; unify the occupation symbol and fix the table row. **Fixed:** Example 5.5 now uses n_site; Delta row now positive spacing between the two internal levels
- [[#N1363|N1363]] 05.09 Summary: The quantity table lists entropy ${\thermal{S}}$, which the summary never uses; remove the row or add the entropy result $S=-(\partial\Phi/\partial T)_{V,\mu}$ to item 3. **Fixed:** Removed the S row (S occurs only as a derivative subscript)
- [[#N1368|N1368]] Grand potentials, exchange symmetry, and occupation numbers: Dates: Fermi's statistics paper is from 1926 (not 1925), and Pauli's spin–statistics theorem was published in 1940 (Phys. Rev. 58, 716), not 1941 or 1944; state the correct dates instead of only reporting the notebook values. **Fixed:** Added that Fermi published his statistics in 1926 and Pauli published the theorem in 1940 (Phys. Rev. 58, 716), next to the notebook dates
- [[#N1368|N1368]] Grand potentials, exchange symmetry, and occupation numbers: Symbol clashes: $\Omega$ (state count) and $\energy{\Omega}$ (grand potential) appear in the same note, $\energy{H}$ (Hamiltonian) and $\magnetic{H}$ (field) appear in the spin section, and $\alpha$ is the exchange phase while the table calls it the fine-structure constant; use $\Phi_G$ or $\Phi$ for the grand potential (as in 05.09) and $B$ for the field. **Fixed:** Grand potential renamed \energy{\Phi} (as in 05.09) with an explanatory sentence; field renamed \magnetic{B} with a note on the notebook H; alpha row now exchange phase
- [[#N1368|N1368]] Grand potentials, exchange symmetry, and occupation numbers: Quantity table lists symbols the note never uses or with wrong meanings: $\alpha$ "fine-structure constant", $\mechanical{M}$ twice including "stellar mass", $j$ "internal partition function", $g$ twice, $P_{\mathrm{int}},P_{\mathrm{ext}}$ "piston", $n$ twice (moles, density), $q_i,p_i$, and $\mechanical{c}$ described through a "photon spectrum formula"; trim it to the symbols used. **Fixed:** Removed P_int/P_ext, both n, q_i/p_i, F, both g, j, fine-structure alpha, stellar mass rows; H row Hamiltonian only; Omega and c descriptions corrected

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1334 | [[05.00 Grand Canonical Ensemble\|05.00 Grand Canonical Ensemble]] | Analyzed | low | no | no | [[#N1334\|View]] |
| N1335 | [[05.01 Chemical Potential\|05.01 Chemical Potential]] | Analyzed | low | no | no | [[#N1335\|View]] |
| N1336 | [[05.01.01 Thermodynamic Definition\|05.01.01 Thermodynamic Definition]] | Analyzed | low | no | no | [[#N1336\|View]] |
| N1337 | [[05.01.02 Gibbs–Duhem Relation\|05.01.02 Gibbs–Duhem Relation]] | Analyzed | low | no | no | [[#N1337\|View]] |
| N1338 | [[05.01.03 Physical Interpretation\|05.01.03 Physical Interpretation]] | Analyzed | medium | no | yes | [[#N1338\|View]] |
| N1339 | [[05.01.04 Chemical Potential of the Classical Ideal Gas\|05.01.04 Chemical Potential of the Classical Ideal Gas]] | Analyzed | medium | yes | no | [[#N1339\|View]] |
| N1340 | [[05.02 Derivation of the Grand Canonical Ensemble\|05.02 Derivation of the Grand Canonical Ensemble]] | Analyzed | low | no | no | [[#N1340\|View]] |
| N1341 | [[05.02.01 System in Contact with a Reservoir\|05.02.01 System in Contact with a Reservoir]] | Analyzed | low | no | yes | [[#N1341\|View]] |
| N1342 | [[05.02.02 Derivation of the Grand Canonical Distribution\|05.02.02 Derivation of the Grand Canonical Distribution]] | Analyzed | low | no | no | [[#N1342\|View]] |
| N1343 | [[05.02.03 Derivation from the Maximum-Entropy Principle\|05.02.03 Derivation from the Maximum-Entropy Principle]] | Analyzed | low | no | no | [[#N1343\|View]] |
| N1344 | [[05.03 Grand Partition Function\|05.03 Grand Partition Function]] | Analyzed | low | no | no | [[#N1344\|View]] |
| N1345 | [[05.03.01 Definition and Properties\|05.03.01 Definition and Properties]] | Analyzed | low | yes | no | [[#N1345\|View]] |
| N1346 | [[05.03.02 Grand Potential\|05.03.02 Grand Potential]] | Analyzed | low | no | no | [[#N1346\|View]] |
| N1347 | [[05.03.03 Relation between Grand Potential and Pressure\|05.03.03 Relation between Grand Potential and Pressure]] | Analyzed | low | no | no | [[#N1347\|View]] |
| N1348 | [[05.03.04 Calculation of Thermodynamic Quantities\|05.03.04 Calculation of Thermodynamic Quantities]] | Analyzed | low | no | no | [[#N1348\|View]] |
| N1349 | [[05.04 Particle-Number Fluctuations\|05.04 Particle-Number Fluctuations]] | Analyzed | low | no | no | [[#N1349\|View]] |
| N1350 | [[05.04.01 Calculation of the Variance\|05.04.01 Calculation of the Variance]] | Analyzed | low | yes | no | [[#N1350\|View]] |
| N1351 | [[05.04.02 Relation to Isothermal Compressibility\|05.04.02 Relation to Isothermal Compressibility]] | Analyzed | medium | yes | no | [[#N1351\|View]] |
| N1352 | [[05.04.03 Ideal-Gas Case\|05.04.03 Ideal-Gas Case]] | Analyzed | low | no | no | [[#N1352\|View]] |
| N1353 | [[05.05 Equivalence to Other Ensembles in the Thermodynamic Limit\|05.05 Equivalence to Other Ensembles in the Thermodynamic Limit]] | Analyzed | low | no | no | [[#N1353\|View]] |
| N1354 | [[05.05.01 Thermodynamic Limit\|05.05.01 Thermodynamic Limit]] | Analyzed | low | yes | no | [[#N1354\|View]] |
| N1355 | [[05.05.02 Proof for the Ideal Gas\|05.05.02 Proof for the Ideal Gas]] | Analyzed | low | no | no | [[#N1355\|View]] |
| N1356 | [[05.05.03 When Ensembles Are Not Equivalent\|05.05.03 When Ensembles Are Not Equivalent]] | Analyzed | low | yes | no | [[#N1356\|View]] |
| N1357 | [[05.06 Applications of the Grand Canonical Ensemble\|05.06 Applications of the Grand Canonical Ensemble]] | Analyzed | low | no | no | [[#N1357\|View]] |
| N1358 | [[05.06.01 Classical Ideal Gas in the Grand Canonical Ensemble\|05.06.01 Classical Ideal Gas in the Grand Canonical Ensemble]] | Analyzed | medium | yes | yes | [[#N1358\|View]] |
| N1359 | [[05.06.02 Surface Adsorption - Langmuir Isotherm\|05.06.02 Surface Adsorption - Langmuir Isotherm]] | Analyzed | medium | yes | yes | [[#N1359\|View]] |
| N1360 | [[05.06.03 Chemical Equilibrium and the Law of Mass Action\|05.06.03 Chemical Equilibrium and the Law of Mass Action]] | Analyzed | medium | yes | no | [[#N1360\|View]] |
| N1361 | [[05.07 Solved Examples\|05.07 Solved Examples]] | Analyzed | medium | yes | no | [[#N1361\|View]] |
| N1362 | [[05.08 Exercises\|05.08 Exercises]] | Analyzed | low | no | no | [[#N1362\|View]] |
| N1363 | [[05.09 Summary\|05.09 Summary]] | Analyzed | low | no | no | [[#N1363\|View]] |
| N1364 | [[05.01 Grand Potential and Ideal-Gas Entropy\|99 Exercises/05.01 Grand Potential and Ideal-Gas Entropy]] | Analyzed | low | no | no | [[#N1364\|View]] |
| N1365 | [[05.02 Langmuir Heat Capacity at Fixed Chemical Potential\|99 Exercises/05.02 Langmuir Heat Capacity at Fixed Chemical Potential]] | Analyzed | low | yes | no | [[#N1365\|View]] |
| N1366 | [[05.03 Particle Fluctuations in a Dilute van der Waals Gas\|99 Exercises/05.03 Particle Fluctuations in a Dilute van der Waals Gas]] | Analyzed | low | yes | no | [[#N1366\|View]] |
| N1367 | [[05.04 BET Multilayer Adsorption\|99 Exercises/05.04 BET Multilayer Adsorption]] | Analyzed | low | yes | no | [[#N1367\|View]] |
| N1368 | [[Grand potentials, exchange symmetry, and occupation numbers\|Grand potentials, exchange symmetry, and occupation numbers]] | Analyzed | high | yes | no | [[#N1368\|View]] |

## Suggestions

### N1334

Note: [[05.00 Grand Canonical Ensemble|05.00 Grand Canonical Ensemble]]  
Priority: low · Graph: no · Manim: no

Clear chapter hub that motivates open systems and states what the reservoir fixes; links and figure numbering (5.1-5.4) are consistent with the chapter notes.

- [Intuition] In "Choose the system before the ensemble", add a three-row table contrasting the ensembles by what is fixed versus fluctuating ($E,V,N$ / $T,V,N$ / $T,V,\mu$), so the reader sees at a glance that $N$ becomes an output here.

### N1335

Note: [[05.01 Chemical Potential|05.01 Chemical Potential]]  
Priority: low · Graph: no · Manim: no

Short, well-ordered section hub with a sensible reading path.

- [Structure] No change needed; optionally move the bullet list below the motivating paragraph so the reading-order prose comes first.

### N1336

Note: [[05.01.01 Thermodynamic Definition|05.01.01 Thermodynamic Definition]]  
Priority: low · Graph: no · Manim: no

Correct and compact definition with all four equivalent derivatives; the closing caveat paragraphs are dense prose without equations.

- [Simplify] After the extensivity display, state the Euler step explicitly: differentiate $G(T,P,\lambda N)=\lambda G$ with respect to $\lambda$ at $\lambda=1$ to get $G=N(\partial G/\partial N)_{T,P}=\mu N$; "Euler's theorem gives" currently skips the one-line argument.
- [Intuition] Explain why $\mu=(\partial U/\partial N)_{S,V}$ is not the naive "energy to add a particle": adding a particle at fixed $S$ forces the system to shed energy so that entropy does not rise, which is why $\mu$ is often negative; this makes the existing fixed-temperature remark concrete.
- [Simplify] Merge the last two paragraphs (equilibrium assumptions, units, small-system caveat) into a short "Assumptions" callout with bullet points; the run-on prose hides three distinct conditions.

### N1337

Note: [[05.01.02 Gibbs–Duhem Relation|05.01.02 Gibbs–Duhem Relation]]  
Priority: low · Graph: no · Manim: no

Correct, short derivation; the final paragraph describes the ideal-gas integration in words instead of showing it.

- [Example] Replace the verbal ideal-gas check in the last paragraph with the two-line calculation $d\mu=(k_BT/P)\,dP\Rightarrow\mu(T,P)-\mu(T,P_0)=k_BT\ln(P/P_0)$, linking to Eq. (5.3) in [[05.01.04 Chemical Potential of the Classical Ideal Gas]].
- [Intuition] Add one sentence on why $T,P,\mu$ cannot all be independent: all three are intensive, and the intensive state of a one-component phase is fixed by two numbers; there is no size variable to absorb a third change.

### N1338

Note: [[05.01.03 Physical Interpretation|05.01.03 Physical Interpretation]]  
Priority: medium · Graph: no · Manim: yes

The physics is correct, but the free-energy argument for the transfer direction is given only in words and the figure labels use a Greek subscript for system B.

- [Correctness] Fig. 5.1 labels "Tᵦ, Pᵦ, μᵦ", "Nᵦ particles" and the equilibrium line use U+1D66 (Greek subscript beta), not a Latin B; this reads as $T_\beta$ and clashes with the inverse temperature $\beta$; use Latin "B" labels (e.g. MathJax $T_B$).
- [Simplify] Write the transfer argument as an equation: $dF=dF_A+dF_B=(\mu_B-\mu_A)\,dN$ for $dN>0$ moved from A to B at fixed $T,V_A,V_B$, so $dF<0$ iff $\mu_A>\mu_B$; the sentence "the transferred count times the chemical potential in B minus that in A" is harder to read than the formula.
- [Structure] "as stated below" at the end of the caveat paragraph points to nothing below except the caption; reference Fig. 5.1 explicitly, and turn the long caveat paragraph into a short bulleted "Assumptions" callout.
- [Manim] Two boxes of ideal gas at equal $T$ with different densities joined by a permeable wall: particles diffuse until the densities equalize while two gauges show $\mu_A=k_BT\ln(n_A\lambda_T^3)$ and $\mu_B$ converging, illustrating flow from high to low $\mu$ and continued microscopic exchange at equilibrium.

### N1339

Note: [[05.01.04 Chemical Potential of the Classical Ideal Gas|05.01.04 Chemical Potential of the Classical Ideal Gas]]  
Priority: medium · Graph: yes · Manim: no

Correct derivation of Eqs. (5.2)-(5.3) with good caveats; Remark 5.2's temperature trend is stated without the supporting derivative and a numerical sense of scale is missing.

- [Simplify] Justify Remark 5.2's temperature claim with $(\partial\mu/\partial T)_n=k_B\ln(n\lambda_T^3)-\tfrac32k_B<0$ in the dilute regime, instead of stating it bare.
- [Example] Add a numerical example: argon at $300\,\mathrm K$ and $1\,\mathrm{atm}$ ($n\approx2.4\times10^{25}\,\mathrm{m^{-3}}$, $\lambda_T\approx16\,\mathrm{pm}$) gives $n\lambda_T^3\sim10^{-7}$ and $\mu\approx-16\,k_BT\approx-0.4\,\mathrm{eV}$, showing how deep in the classical regime ordinary gases are.
- [Simplify] In the last paragraph write the density-doubling check as $\Delta\mu=k_BT\ln2$ rather than "the thermal energy times the natural logarithm of two"; likewise give $\mu^\circ(T)=k_BT\ln(P_0\lambda_T^3/k_BT)$ explicitly after Eq. (5.3).
- [Graph] Plot $\mu/(k_BT)=\ln(n\lambda_T^3)$ versus $\log_{10}(n\lambda_T^3)$ from $-8$ to $0$, shading $n\lambda_T^3\gtrsim0.1$ as the region where the classical formula fails; this shows the negative sign and the logarithmic slope.

### N1340

Note: [[05.02 Derivation of the Grand Canonical Ensemble|05.02 Derivation of the Grand Canonical Ensemble]]  
Priority: low · Graph: no · Manim: no

Concise section hub that correctly contrasts the reservoir and maximum-entropy routes.

- [Structure] No change needed.

### N1341

Note: [[05.02.01 System in Contact with a Reservoir|05.02.01 System in Contact with a Reservoir]]  
Priority: low · Graph: no · Manim: yes

Correct setup with a clear figure; the two caveat paragraphs overlap and contain an awkward sentence.

- [Simplify] Merge "The reservoir approximation has two separate requirements" with the following paragraph into a two-item list (large response, weak but nonzero coupling); rephrase "A large reservoir with an impermeable boundary fixes no particle exchange by itself" as "a reservoir behind an impermeable wall does not fix the subsystem's chemical potential".
- [Example] Add a concrete size separation: a $1\,\mu\mathrm m^3$ observation volume inside $1\,\mathrm L$ of air at room conditions has $N_S\sim10^{7}$ against $N_R\sim10^{22}$.
- [Manim] Animate particles crossing the dashed boundary between reservoir and small system, with a live trace of $N_S(t)$ and $E_S(t)$ fluctuating about constant means, to show that equilibrium means stationary statistics, not frozen values.

### N1342

Note: [[05.02.02 Derivation of the Grand Canonical Distribution|05.02.02 Derivation of the Grand Canonical Distribution]]  
Priority: low · Graph: no · Manim: no

Correct reservoir-counting derivation with the sign of the particle term handled properly; the paragraph after Eq. (5.4) repeats in words what the displayed derivatives already show.

- [Simplify] Replace the prose paragraph "The minus sign in the reservoir particle derivative is essential" with the single relation $dS_R=dE_R/T-\mu\,dN_R/T$ (fixed $V_R$) and the substitutions $dE_R=-E_r$, $dN_R=-N_r$.
- [Intuition] Justify the truncation: the second-order energy term is of order $E_r^2/(k_BT^2C_R)$, which vanishes as the reservoir heat capacity $C_R$ grows; one sentence makes "neglect the higher reservoir terms" precise.

### N1343

Note: [[05.02.03 Derivation from the Maximum-Entropy Principle|05.02.03 Derivation from the Maximum-Entropy Principle]]  
Priority: low · Graph: no · Manim: no

Correct Lagrange-multiplier derivation; the identification of the multipliers with thermodynamics is asserted rather than shown.

- [Simplify] Show the identification: inserting $p_r$ into $S$ gives $S/k_B=\ln\Xi+\beta\langle E\rangle+\gamma\langle N\rangle$; comparing with $\Phi=U-TS-\mu N$ and $\Phi=-k_BT\ln\Xi$ reads off $\beta=1/k_BT$, $\gamma=-\beta\mu$. Currently "comparison with thermodynamics identifies" skips this.
- [Simplify] Condense the last paragraph (units, existence, convergence, interpretation) into a brief callout; the four separate caveats dilute the main result.

### N1344

Note: [[05.03 Grand Partition Function|05.03 Grand Partition Function]]  
Priority: low · Graph: no · Manim: no

Brief, correct hub with a useful warning about held variables.

- [Structure] No change needed.

### N1345

Note: [[05.03.01 Definition and Properties|05.03.01 Definition and Properties]]  
Priority: low · Graph: yes · Manim: no

Correct definition and fugacity form with good remarks on quantum state counting; a small concrete example of the sector sum would aid intuition.

- [Example] Add a minimal worked example before the remarks: a single site holding 0 or 1 particle ($Z_0=1$, $Z_1=e^{\beta\varepsilon_b}$) gives $\Xi=1+ze^{\beta\varepsilon_b}$; point forward to the ideal gas $\Xi=e^{zV/\lambda_T^3}$.
- [Graph] Bar chart of the sector probabilities $P(N)=z^NZ_N/\Xi$ for the classical ideal gas with $zV/\lambda_T^3=3$ and $10$ ($N=0\dots25$), illustrating that the grand ensemble is a weighted mixture of canonical sectors.

### N1346

Note: [[05.03.02 Grand Potential|05.03.02 Grand Potential]]  
Priority: low · Graph: no · Manim: no

Correct definition and natural derivatives; the closing paragraph on stability and convexity is hard to parse.

- [Simplify] Replace "Thus stability with respect to changing the internal state should not be confused with convexity in the externally imposed chemical potential" with the explicit statement $(\partial^2\Phi/\partial\mu^2)_{T,V}=-\beta(\Delta N)^2\le0$, i.e. $\Phi$ is concave in $\mu$.
- [Simplify] Show the one-line step from $\Phi=-k_BT\ln\Xi$ to $\langle N\rangle=-(\partial\Phi/\partial\mu)_{T,V}$ by differentiating the sum, so the statistical and thermodynamic definitions are visibly the same.

### N1347

Note: [[05.03.03 Relation between Grand Potential and Pressure|05.03.03 Relation between Grand Potential and Pressure]]  
Priority: low · Graph: no · Manim: no

Correct short proof with a sensible range note and useful consistency checks.

- [Example] Make the ideal-gas check explicit in one line: $\ln\Xi=zV/\lambda_T^3$ gives $P=k_BTz/\lambda_T^3=\langle N\rangle k_BT/V$ both from $-\Phi/V$ and from $-(\partial\Phi/\partial V)_{T,\mu}$.

### N1348

Note: [[05.03.04 Calculation of Thermodynamic Quantities|05.03.04 Calculation of Thermodynamic Quantities]]  
Priority: low · Graph: no · Manim: no

The working relations are correct (checked $\langle E\rangle$ and $S$) and the fixed-fugacity versus fixed-$\mu$ warning is valuable; the final derivative check is stated only in words.

- [Simplify] Write the derivative check of the last paragraph as equations: with $\ln\Xi=zV\lambda_T^{-3}\propto z\beta^{-3/2}$, $-(\partial\ln\Xi/\partial\beta)_{V,z}=\tfrac32\langle N\rangle k_BT$ while $-(\partial\ln\Xi/\partial\beta)_{V,\mu}=\tfrac32\langle N\rangle k_BT-\mu\langle N\rangle$.
- [Simplify] Note that only $P=k_BT\ln\Xi/V$ needs the bulk extensivity of Eq. (5.7); the $\langle N\rangle$, $\langle E\rangle$ and $S$ relations hold generally, but the lead-in "For a homogeneous bulk system" applies the restriction to all four.

### N1349

Note: [[05.04 Particle-Number Fluctuations|05.04 Particle-Number Fluctuations]]  
Priority: low · Graph: no · Manim: no

Clear hub with a motivating question and a reference check.

- [Structure] No change needed.

### N1350

Note: [[05.04.01 Calculation of the Variance|05.04.01 Calculation of the Variance]]  
Priority: low · Graph: yes · Manim: no

Correct derivation of Eq. (5.9) with good boundary checks; the middle step skips the intermediate expression for $\partial\langle N\rangle/\partial\mu$.

- [Simplify] Insert the intermediate line $\partial\langle N\rangle/\partial\mu=\beta(\langle N^2\rangle-\langle N\rangle^2)$ from differentiating the ratio $\sum Ne^{\dots}/\Xi$ by the quotient rule, before the second-derivative form; this shows where the subtracted term comes from.
- [Graph] For the adsorption-site check in the last paragraph, plot $\theta=1/(1+e^{-x})$ and $\theta(1-\theta)$ against $x=\beta(\mu+\varepsilon_b)$ from $-6$ to $6$, showing that the variance equals the slope $d\theta/dx$ and peaks at half filling.

### N1351

Note: [[05.04.02 Relation to Isothermal Compressibility|05.04.02 Relation to Isothermal Compressibility]]  
Priority: medium · Graph: yes · Manim: no

Correct derivation of Eq. (5.10) and Proposition 5.3 (Fig. 5.3 widths 5% and 12% do match means 400 and 69); the figure shows continuous Gaussians although the text stresses the discrete Poisson law.

- [Simplify] Present the chain as $(\partial n/\partial\mu)_T=(\partial n/\partial P)_T(\partial P/\partial\mu)_T=n\kappa_T\cdot n$ so both factors of $n$ are visibly accounted for.
- [Example] "For a macroscopic ideal gas, relative fluctuations are of order $10^{-12}$" depends on size; say "for one mole" and add a contrasting case, e.g. a $(10\,\mathrm{nm})^3$ volume of air at STP with $\langle N\rangle\approx27$ and relative fluctuation $\approx19\%$.
- [Graph] Replace or supplement Fig. 5.3 with discrete Poisson bars of $p(N)$ versus $N/\langle N\rangle$ for $\langle N\rangle=10,100,1000$ overlaid on Gaussian envelopes, showing both the $\langle N\rangle^{-1/2}$ narrowing and the discreteness the caption mentions.
- [Intuition] Add one sentence on critical opalescence as the observable consequence of $\kappa_T\to\infty$ near the critical point, where the note currently only says a separate analysis is needed.

### N1352

Note: [[05.04.03 Ideal-Gas Case|05.04.03 Ideal-Gas Case]]  
Priority: low · Graph: no · Manim: no

Correct and short; Example 5.1 checks out ($1/\sqrt{6.022\times10^{23}}=1.29\times10^{-12}$).

- [Simplify] Show the substitution: $\kappa_T=1/P$ and $P=\langle N\rangle k_BT/V$ in Eq. (5.10) give $(\Delta N)^2=k_BT\langle N\rangle^2/(VP)=\langle N\rangle$.
- [Simplify] Quote the absolute deviation directly, $\sqrt{6.022\times10^{23}}\approx7.8\times10^{11}$, instead of "of order a trillion particles".

### N1353

Note: [[05.05 Equivalence to Other Ensembles in the Thermodynamic Limit|05.05 Equivalence to Other Ensembles in the Thermodynamic Limit]]  
Priority: low · Graph: no · Manim: no

Clear hub that separates thermodynamic agreement from distributional agreement.

- [Structure] No change needed.

### N1354

Note: [[05.05.01 Thermodynamic Limit|05.05.01 Thermodynamic Limit]]  
Priority: low · Graph: yes · Manim: no

Correct statement of the limit and Theorem 5.1 with careful qualifications; it lacks the core mechanism of why matched ensembles agree.

- [Intuition] Add the core reason: the grand sum is dominated by sectors within $\sim\sqrt{\langle N\rangle}$ of $\langle N\rangle$, so $\ln\Xi=\beta\mu\langle N\rangle+\ln Z_{\langle N\rangle}+O(\ln N)$, which is exactly the Legendre relation in the second display.
- [Graph] Plot the normalized sector weight $z^NZ_N/\max$ (ideal gas) versus $N/\langle N\rangle$ for $\langle N\rangle=10,100,1000$, showing the sharpening peak that justifies replacing the sum by its largest term.

### N1355

Note: [[05.05.02 Proof for the Ideal Gas|05.05.02 Proof for the Ideal Gas]]  
Priority: low · Graph: no · Manim: no

Correct ideal-gas comparison ($\Phi+\mu\langle N\rangle$ reproduces the Stirling form of $F$); the pressure check is given only in prose.

- [Simplify] Write the pressure check as $P=k_BT(\partial\ln Z_N/\partial V)_{T,N}=Nk_BT/V$ instead of "differentiating the canonical logarithm with respect to volume gives...".
- [Example] Quantify the subleading factorial term: $\ln N!-(N\ln N-N)\approx\tfrac12\ln(2\pi N)\approx3.2$ for $N=100$ versus $N\ln N-N\approx361$, so "the same thermodynamic accuracy" becomes concrete.

### N1356

Note: [[05.05.03 When Ensembles Are Not Equivalent|05.05.03 When Ensembles Are Not Equivalent]]  
Priority: low · Graph: yes · Manim: no

Correct and suitably cautious list of non-equivalence cases; it stays abstract without a concrete illustration.

- [Graph] For the first-order transition bullet, plot a schematic bimodal grand canonical density distribution $P(n)$ at coexistence (two peaks at vapour and liquid densities) next to the canonical fixed-density delta, making "the grand canonical density can jump" visible.
- [Example] Name one concrete long-range case, e.g. the negative microcanonical heat capacity of self-gravitating systems, which the canonical ensemble cannot represent.

### N1357

Note: [[05.06 Applications of the Grand Canonical Ensemble|05.06 Applications of the Grand Canonical Ensemble]]  
Priority: low · Graph: no · Manim: no

Clear hub that contrasts the three state spaces.

- [Structure] No change needed.

### N1358

Note: [[05.06.01 Classical Ideal Gas in the Grand Canonical Ensemble|05.06.01 Classical Ideal Gas in the Grand Canonical Ensemble]]  
Priority: medium · Graph: yes · Manim: yes

Correct exact calculation (verified $p(110)\approx0.0234$); the step from $z^NZ_N/\Xi$ to the Poisson form is skipped and the result would benefit from a plot.

- [Simplify] Show the substitution in the probability section: $p(N)=(z\xi)^Ne^{-z\xi}/N!$ with $z\xi=\langle N\rangle$, which is the Poisson form; the display currently jumps directly.
- [Example] Contrast Example 5.2 with the tail probability $P(N\ge110)\approx0.17$, and with $\langle N\rangle=10^{23}$ where a 10% deviation is about $3\times10^{10}$ standard deviations, making "negligible probability" quantitative.
- [Graph] Bar chart of the Poisson $p(N)$ for $\langle N\rangle=100$ over $N=60\dots140$ with the bar at $N=110$ highlighted and the $\pm\Delta N$ band shaded.
- [Manim] Repeated snapshots of an open observation box inside a gas, counting the particles in each frame while a histogram of counts builds up and converges to the Poisson curve.

### N1359

Note: [[05.06.02 Surface Adsorption - Langmuir Isotherm|05.06.02 Surface Adsorption - Langmuir Isotherm]]  
Priority: medium · Graph: yes · Manim: yes

The Langmuir isotherm and the isosteric heat $\varepsilon_b+\tfrac52k_BT$ are correct and Fig. 5.4 is good, but two caveat paragraphs precede the derivation they comment on.

- [Structure] Move the paragraphs "The two terms in the site partition function..." and "The pressure conversion assumes..." after the Pressure form section; as written they refer to the site partition function and Fig. 5.4 before either appears.
- [Simplify] Drop $\varepsilon_0$ (used only in $\varepsilon_b=|\varepsilon_0|$ and the table) and define the occupied energy directly as $-\varepsilon_b$; the table row for $\varepsilon_b$ also says "first-layer binding energy", implying a multilayer model this note does not use.
- [Graph] Add $\theta$ versus absolute $P$ for three temperatures (e.g. $\varepsilon_b=0.3\,\mathrm{eV}$, N2 mass, $T=250,300,350\,\mathrm K$), showing how $P_0(T)\propto T^{5/2}e^{-\varepsilon_b/k_BT}$ shifts the isotherm and why heating desorbs.
- [Manim] A grid of sites in contact with a gas whose pressure ramps up: sites flicker between empty and occupied, the occupied fraction tracks $P/(P+P_0)$, and a dot moves along the Langmuir curve.

### N1360

Note: [[05.06.03 Chemical Equilibrium and the Law of Mass Action|05.06.03 Chemical Equilibrium and the Law of Mass Action]]  
Priority: medium · Graph: yes · Manim: no

The mass-action law and dissociation example are correct (checked $K_P=4\alpha^2P_{\mathrm{tot}}/[(1-\alpha^2)P_0]$ and its inverse), but the note derives equilibrium only via Gibbs minimization although it sits in the grand canonical chapter, and it contains an editing-history callout.

- [Structure] Shorten the "Species notation" callout: "Its former thermal color annotation and heat-capacity table row were a notation error" describes a past edit, not physics; a one-line note that $C$ is a species suffices.
- [Simplify] $\nu_i$ is unsigned in Eq. (5.13) and signed afterwards; introduce only the signed convention (or rename the unsigned coefficients) so one symbol does not carry two sign conventions.
- [Intuition] Add the grand canonical route: with species reservoirs $\Xi=\prod_i\exp(z_i\xi_i)$, and reaction equilibrium forces $\prod_iz_i^{\nu_i}=1$, which gives $\prod_in_i^{\nu_i}=\prod_i(\xi_i/V)^{\nu_i}$ directly and ties the note to the chapter's ensemble.
- [Graph] Plot $\alpha$ versus $P_{\mathrm{tot}}/P_0$ on a log axis from $10^{-3}$ to $10^{3}$ for $K_P=0.01,0.1,1$, illustrating that lower pressure favors dissociation.

### N1361

Note: [[05.07 Solved Examples|05.07 Solved Examples]]  
Priority: medium · Graph: yes · Manim: no

All four examples check out (diatomic $\tfrac52k_BT$, half-coverage $P_0/g$, geometric Einstein model and its heat capacity, two-level site energy), but the letter $z$ is overloaded and the site-occupation symbol changes between examples.

- [Correctness] Symbol clash: $z$ is the fugacity while $z_{\mathrm{rot}}$, $z_{\mathrm{osc}}$, $z_{\mathrm{int}}$ are single-particle partition functions, and they appear together in products such as $zVz_{\mathrm{rot}}/\lambda_T^3$ and $zz_{\mathrm{osc}}^3$; rename the partition functions (e.g. $q_{\mathrm{rot}},q_{\mathrm{osc}},q_{\mathrm{int}}$).
- [Correctness] The same site occupation is $N_{\mathrm{site}}$ in Example 5.5 but $n_{\mathrm{site}}$ in Example 5.7, and the table row for $\Delta$ lists "Signed chemical-potential offset", a meaning never used in this note; unify the occupation symbol and fix the table row.
- [Graph] For Example 5.6, plot $C_{\langle N\rangle}/(3\langle N\rangle k_B)$ versus $k_BT/(\hbar\omega)$ from 0 to 2, showing the exponential low-temperature suppression and the Dulong-Petit limit.
- [Graph] For Example 5.7, plot $\langle\varepsilon_{\mathrm{site}}\rangle/\Delta$ versus $k_BT/\Delta$ for $z=0.1,1,10$ and $z\to\infty$, showing the occupation prefactor approaching the ordinary two-level curve.

### N1362

Note: [[05.08 Exercises|05.08 Exercises]]  
Priority: low · Graph: no · Manim: no

Exercise index with working links and a useful paragraph on which modelling decision each exercise tests.

- [Structure] No change needed; optionally move the link list below the two guidance paragraphs so the reader sees the purpose before the list.

### N1363

Note: [[05.09 Summary|05.09 Summary]]  
Priority: low · Graph: no · Manim: no

Correct and compact chapter summary with a good "reconstruct the argument" section.

- [Correctness] The quantity table lists entropy ${\thermal{S}}$, which the summary never uses; remove the row or add the entropy result $S=-(\partial\Phi/\partial T)_{V,\mu}$ to item 3.
- [Links] Add a link from each numbered result to its chapter note (e.g. item 4 to [[05.04.02 Relation to Isothermal Compressibility]], item 7 to [[05.06.02 Surface Adsorption - Langmuir Isotherm]]) so the summary works as a navigation hub.

### N1364

Note: [[05.01 Grand Potential and Ideal-Gas Entropy|05.01 Grand Potential and Ideal-Gas Entropy]]  
Priority: low · Graph: no · Manim: no

Correct derivation of $\Phi$, $P$ and the Sackur–Tetrode entropy with careful attention to the fixed variables.

- [Simplify] The "path check" paragraph on fixed fugacity is hard to follow in words; replace it with the one-line contrast $(\partial\bar N/\partial T)_{V,z}=\frac{3}{2T}\bar N$ versus $(\partial\bar N/\partial T)_{V,\mu}=\bar N(\frac{3}{2T}-\frac{\mu}{k_{\mathrm B}T^2})$.
- [Example] Add a numerical check of the entropy, for example argon at 300 K and 1 bar gives $S/(\bar Nk_{\mathrm B})\approx18.6$ ($\approx155\,\mathrm{J\,mol^{-1}K^{-1}}$), matching the tabulated standard entropy.

### N1365

Note: [[05.02 Langmuir Heat Capacity at Fixed Chemical Potential|05.02 Langmuir Heat Capacity at Fixed Chemical Potential]]  
Priority: low · Graph: yes · Manim: no

Correct and well-argued; the peak value $y^*\approx2.399357$, height $0.439229\,Mk_{\mathrm B}$ and $T^*\approx0.416778\,|\Delta|/k_{\mathrm B}$ check out numerically.

- [Graph] Plot $C_\mu/(Mk_{\mathrm B})=y^2/(4\cosh^2(y/2))$ against $k_{\mathrm B}T/|\Delta|\in[0,3]$, marking the peak at $0.417$, and overlay $(\partial U/\partial T)_\mu/(Mk_{\mathrm B})$ for a negative $\Delta$ to show the sign difference discussed in the note.
- [Simplify] Shorten the clarifying callout under the question: state once that $C_\mu=T(\partial S/\partial T)_\mu=(\partial\langle K\rangle/\partial T)_\mu$ and defer the $\Delta<0$ remark to the comparison paragraph.

### N1366

Note: [[05.03 Particle Fluctuations in a Dilute van der Waals Gas|05.03 Particle Fluctuations in a Dilute van der Waals Gas]]  
Priority: low · Graph: yes · Manim: no

Correct derivation and a good critical-point caveat; the final section repeats the caveat at length.

- [Graph] Plot $(\Delta N/\langle N\rangle)\sqrt{\langle N\rangle}=(1-2an/k_{\mathrm B}T)^{-1/2}$ against $2an/k_{\mathrm B}T\in[0,0.95]$, shading the region where $bn$ is no longer small for a typical ratio $a/(bk_{\mathrm B}T)$.
- [Simplify] Merge the last section "Control the approximation" into the callout; its points (ideal limit at $a=0$, sign of the enhancement, failure near zero slope) are already stated above.
- [Example] Add a numerical case, e.g. CO₂ at 1 bar and 300 K, to show that the enhancement factor is only about $1+an/(k_{\mathrm B}T)\approx1.005$ in ordinary dilute conditions.

### N1367

Note: [[05.04 BET Multilayer Adsorption|05.04 BET Multilayer Adsorption]]  
Priority: low · Graph: yes · Manim: no

Correct column-partition derivation of the BET isotherm with good normalization and limit checks.

- [Graph] Plot $\theta(x)=cx/[(1-x)(1+(c-1)x)]$ for $x=P/P_s\in[0,0.9]$ and $c=1,10,100$, together with the Langmuir curve $cx/(1+cx)$, to show the knee near monolayer completion and the divergence at $P_s$.
- [Example] Add the linearized BET form $x/[\theta(1-x)]=1/c+(c-1)x/c$ used to extract surface area from data, as a direct consequence of the derived isotherm.

### N1368

Note: [[Grand potentials, exchange symmetry, and occupation numbers|Grand potentials, exchange symmetry, and occupation numbers]]  
Priority: high · Graph: yes · Manim: no

Lecture transcription with correct grand-canonical derivations and a correct dilute-gas estimate ($\lambda^3\sim10^{-24}\,\mathrm{cm^3}$, $z\sim10^{-7}$), but with wrong historical dates, symbol clashes, an inaccurate quantity table, and a loose mixture of topics.

- [Correctness] Dates: Fermi's statistics paper is from 1926 (not 1925), and Pauli's spin–statistics theorem was published in 1940 (Phys. Rev. 58, 716), not 1941 or 1944; state the correct dates instead of only reporting the notebook values.
- [Correctness] Symbol clashes: $\Omega$ (state count) and $\energy{\Omega}$ (grand potential) appear in the same note, $\energy{H}$ (Hamiltonian) and $\magnetic{H}$ (field) appear in the spin section, and $\alpha$ is the exchange phase while the table calls it the fine-structure constant; use $\Phi_G$ or $\Phi$ for the grand potential (as in 05.09) and $B$ for the field.
- [Correctness] Quantity table lists symbols the note never uses or with wrong meanings: $\alpha$ "fine-structure constant", $\mechanical{M}$ twice including "stellar mass", $j$ "internal partition function", $g$ twice, $P_{\mathrm{int}},P_{\mathrm{ext}}$ "piston", $n$ twice (moles, density), $q_i,p_i$, and $\mechanical{c}$ described through a "photon spectrum formula"; trim it to the symbols used.
- [Structure] Split or reorder: the rotor exercise and the repeated spin-½ material belong with [[Classical canonical gases and spin magnetization]]; keep this note focused on grand potential, ideal gas, Bose/Fermi occupations, and exchange symmetry.
- [Links] Link the Bose and Fermi derivations to [[06.06.01 Derivation]] and [[06.07.01 Derivation]], and the exchange-symmetry section to [[06.01.02 Consequences for the Wavefunction]].
- [Graph] Replace or supplement the two occupation images with a native plot of $[e^{x}+1]^{-1}$, $[e^{x}-1]^{-1}$ and $e^{-x}$ against $x=\beta(E-\mu)\in[-3,5]$ (BE only for $x>0$).
