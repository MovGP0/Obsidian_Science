---
title: "Note Improvement Tracker – 02 Physics/02 Thermodynamics and Statistical Mechanics/01 Review of Thermodynamics"
---

> [!TLDR]
> This note tracks the review of the 30 notes in `02 Physics/02 Thermodynamics and Statistical Mechanics/01 Review of Thermodynamics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 3 possible errors or notation conflicts. 3 of them are verified (3 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N1214|N1214]] Thermodynamic equilibrium, work, and the fundamental postulates: Postulate II margin: "$\Delta G=H-T\Delta S$" should be $\Delta G=\Delta H-T\Delta S$ (constant $T$), and "$\Delta G_{\mathrm{univ}}>0$" is wrong as a spontaneity criterion; state instead that at fixed $T,P$ a spontaneous process has $\Delta G_{\mathrm{sys}}<0$, equivalent to $\Delta S_{\mathrm{univ}}=-\Delta G/T>0$, or drop the margin line. **Fixed:** Wrote Delta G=Delta H-T Delta S at constant T and stated that Delta G_univ>0 is not a criterion; at fixed T,P spontaneity is Delta G_sys<0, equivalent to Delta S_univ=-Delta G_sys/T>0
- [[#N1214|N1214]] Thermodynamic equilibrium, work, and the fundamental postulates: Physical-quantities table lists symbols the note never uses and that clash with used ones: $\thermal{T}_c$ as "Curie temperature" (the note uses $T_c$ for the cold reservoir), $n$ as "number density" (the note uses $n$ in mol), $\energy{E}$ Boltzmann-weight energy, Landé $g$, degeneracy $g$, fugacity $z$, fine-structure $\alpha$ (the note's $\alpha$ is a power-rule exponent), and $\mechanical{\vec x}$; remove these and add the used $\thermal{T}_h$, $\thermal{T}_0$, $\thermal{T}_{\mathrm f}$, $\mechanical{P}_0$, $\mechanical{V}_0$, $\mechanical{F}_{\mathrm{int}}$, $\mechanical{F}_{\mathrm{ext}}$. **Fixed:** Removed vec x, Boltzmann E, number density n, Curie T_c, Lande g, fugacity z, degeneracy g, fine-structure alpha rows; added T_0, T_f, T_h, T_c (reservoirs), P_0, V_0, F_int, F_ext
- [[#N1214|N1214]] Thermodynamic equilibrium, work, and the fundamental postulates: Symbol clashes: $W$ is work and multiplicity ($S=k_B\ln W$ in "Isothermal and adiabatic compression"), and $x$ is the piston coordinate in metres and the dimensionless $x=V/V_0$; use $\Omega$ for multiplicity and e.g. $\xi=V/V_0$ for the substitution. **Fixed:** Multiplicity renamed Omega (S=k_B ln Omega, with a note on the notebook W, table row updated); substitution renamed xi=V/V_0 in the integral and power-rule line

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N1185 | [[01.00 Review of Thermodynamics\|01.00 Review of Thermodynamics]] | Analyzed | low | no | no | [[#N1185\|View]] |
| N1186 | [[01.01 Thermodynamic Systems and State Variables\|01.01 Thermodynamic Systems and State Variables]] | Analyzed | low | no | no | [[#N1186\|View]] |
| N1187 | [[01.01.01 System Definition and Classification\|01.01.01 System Definition and Classification]] | Analyzed | low | no | no | [[#N1187\|View]] |
| N1188 | [[01.01.02 Equilibrium State and State Variables\|01.01.02 Equilibrium State and State Variables]] | Analyzed | low | no | no | [[#N1188\|View]] |
| N1189 | [[01.01.03 Equation of State and Thermodynamic Space\|01.01.03 Equation of State and Thermodynamic Space]] | Analyzed | low | yes | no | [[#N1189\|View]] |
| N1190 | [[01.02 First Law of Thermodynamics\|01.02 First Law of Thermodynamics]] | Analyzed | low | no | no | [[#N1190\|View]] |
| N1191 | [[01.02.01 Internal Energy, Heat, and Work\|01.02.01 Internal Energy, Heat, and Work]] | Analyzed | low | yes | no | [[#N1191\|View]] |
| N1192 | [[01.02.02 Differential Form and Quasi-Static Processes\|01.02.02 Differential Form and Quasi-Static Processes]] | Analyzed | low | no | yes | [[#N1192\|View]] |
| N1193 | [[01.02.03 Heat Capacities\|01.02.03 Heat Capacities]] | Analyzed | low | no | no | [[#N1193\|View]] |
| N1194 | [[01.03 Second Law of Thermodynamics\|01.03 Second Law of Thermodynamics]] | Analyzed | low | no | no | [[#N1194\|View]] |
| N1195 | [[01.03.01 Classical Formulations\|01.03.01 Classical Formulations]] | Analyzed | low | no | no | [[#N1195\|View]] |
| N1196 | [[01.03.02 Carnot Cycle and Carnot's Theorem\|01.03.02 Carnot Cycle and Carnot's Theorem]] | Analyzed | low | no | yes | [[#N1196\|View]] |
| N1197 | [[01.03.03 Entropy as a State Function\|01.03.03 Entropy as a State Function]] | Analyzed | low | yes | no | [[#N1197\|View]] |
| N1198 | [[01.03.04 Clausius Inequality\|01.03.04 Clausius Inequality]] | Analyzed | low | no | no | [[#N1198\|View]] |
| N1199 | [[01.03.05 Principle of Maximum Entropy\|01.03.05 Principle of Maximum Entropy]] | Analyzed | low | yes | no | [[#N1199\|View]] |
| N1200 | [[01.04 Third Law of Thermodynamics\|01.04 Third Law of Thermodynamics]] | Analyzed | low | yes | no | [[#N1200\|View]] |
| N1201 | [[01.05 Thermodynamic Potentials\|01.05 Thermodynamic Potentials]] | Analyzed | low | no | no | [[#N1201\|View]] |
| N1202 | [[01.05.01 Motivation - Natural Variables\|01.05.01 Motivation - Natural Variables]] | Analyzed | low | no | no | [[#N1202\|View]] |
| N1203 | [[01.05.02 Legendre Transformation\|01.05.02 Legendre Transformation]] | Analyzed | medium | yes | yes | [[#N1203\|View]] |
| N1204 | [[01.05.03 Four Thermodynamic Potentials\|01.05.03 Four Thermodynamic Potentials]] | Analyzed | low | no | no | [[#N1204\|View]] |
| N1205 | [[01.05.04 Chemical Potential and Open Systems\|01.05.04 Chemical Potential and Open Systems]] | Analyzed | low | no | no | [[#N1205\|View]] |
| N1206 | [[01.06 Maxwell Relations\|01.06 Maxwell Relations]] | Analyzed | low | no | no | [[#N1206\|View]] |
| N1207 | [[01.06.01 Systematic Derivation\|01.06.01 Systematic Derivation]] | Analyzed | low | no | no | [[#N1207\|View]] |
| N1208 | [[01.06.02 Applications of the Maxwell Relations\|01.06.02 Applications of the Maxwell Relations]] | Analyzed | low | yes | no | [[#N1208\|View]] |
| N1209 | [[01.07 Thermodynamic Stability\|01.07 Thermodynamic Stability]] | Analyzed | low | no | no | [[#N1209\|View]] |
| N1210 | [[01.07.01 General Stability Conditions\|01.07.01 General Stability Conditions]] | Analyzed | medium | yes | no | [[#N1210\|View]] |
| N1211 | [[01.07.02 Inequalities between Susceptibilities\|01.07.02 Inequalities between Susceptibilities]] | Analyzed | medium | no | no | [[#N1211\|View]] |
| N1212 | [[01.08 Worked Examples\|01.08 Worked Examples]] | Analyzed | medium | yes | yes | [[#N1212\|View]] |
| N1213 | [[01.09 Summary and Connection to Statistical Mechanics\|01.09 Summary and Connection to Statistical Mechanics]] | Analyzed | low | no | no | [[#N1213\|View]] |
| N1214 | [[Thermodynamic equilibrium, work, and the fundamental postulates\|Thermodynamic equilibrium, work, and the fundamental postulates]] | Analyzed | high | yes | yes | [[#N1214\|View]] |

## Suggestions

### N1185

Note: [[01.00 Review of Thermodynamics|01.00 Review of Thermodynamics]]  
Priority: low · Graph: no · Manim: no

Concise chapter hub with a useful guiding example (gas in a cylinder) and correct links.

- No change needed; optionally list the nine section links (01.01 to 01.09) directly so the hub is navigable without going through the contents note.

### N1186

Note: [[01.01 Thermodynamic Systems and State Variables|01.01 Thermodynamic Systems and State Variables]]  
Priority: low · Graph: no · Manim: no

Short, clear section hub with a good steady-state-versus-equilibrium check question.

- No change needed.

### N1187

Note: [[01.01.01 System Definition and Classification|01.01.01 System Definition and Classification]]  
Priority: low · Graph: no · Manim: no

Clear and correct classification of systems and walls with good caveats about adiabatic versus isolated.

- [Structure] The wall list at the end belongs before the paragraph on adiabatic and rigid walls, which already uses those terms; move it up directly after Definition 1.1.
- [Example] Add a small table mapping wall combinations (adiabatic+rigid+impermeable, diathermal+rigid+impermeable, diathermal+rigid+permeable) to system type and ensemble (microcanonical, canonical, grand canonical) to make the ensemble paragraph scannable.

### N1188

Note: [[01.01.02 Equilibrium State and State Variables|01.01.02 Equilibrium State and State Variables]]  
Priority: low · Graph: no · Manim: no

Accurate and readable; good caveats on steady states, glasses, and limits of extensivity.

- [Structure] Molar concentration appears in the table with symbol "—"; give it a symbol (for example $c$) or drop the row, and add "per particle" to the $\energy{\mu}$ description to contrast with the per-mole $	hermal{s}$ defined in the same note.
- [Intuition] Add one sentence on why only a few variables suffice (most microscopic degrees of freedom average out; conserved quantities and external constraints survive), as a forward pointer to Chapter 2.

### N1189

Note: [[01.01.03 Equation of State and Thermodynamic Space|01.01.03 Equation of State and Thermodynamic Space]]  
Priority: low · Graph: yes · Manim: no

Clear and correct, with useful checks; the "thermodynamic space" idea would benefit from a picture.

- [Graph] Add a 3D surface plot of the ideal-gas equation of state $P=nRT/V$ for $n=1\,\mathrm{mol}$, $V\in[0.005,0.05]\,\mathrm{m^3}$, $T\in[100,600]\,\mathrm{K}$, with isotherm curves drawn on it, to show that equilibrium states form a 2D surface in $(P,V,T)$ space.
- [Example] Since the van der Waals equation is mentioned, state it here, $\left(P+a n^2/V^2\right)(V-nb)=nRT$, with one sentence on what $a$ and $b$ correct, instead of only referring to the source's Example 1.3.

### N1190

Note: [[01.02 First Law of Thermodynamics|01.02 First Law of Thermodynamics]]  
Priority: low · Graph: no · Manim: no

Short, clear section hub with a good motivating contrast between constant-volume and constant-pressure heating.

- No change needed.

### N1191

Note: [[01.02.01 Internal Energy, Heat, and Work|01.02.01 Internal Energy, Heat, and Work]]  
Priority: low · Graph: yes · Manim: no

Correct, with clear sign convention and a helpful sign check; path dependence of heat and work is stated but not shown.

- [Example] Add a numerical example of two paths between the same ideal-gas states (isothermal versus isochoric-then-isobaric) with computed $Q$ and $W$ differing but $\Delta U$ equal, to make "heat and work are not state functions" concrete.
- [Graph] Add a $P$–$V$ plot of those two paths for $1\,\mathrm{mol}$ ideal gas between $(V_A,T)$ and $(2V_A,T)$, shading the areas under each path to show different work.

### N1192

Note: [[01.02.02 Differential Form and Quasi-Static Processes|01.02.02 Differential Form and Quasi-Static Processes]]  
Priority: low · Graph: no · Manim: yes

Careful and correct treatment of quasi-static versus reversible and of when $P\,dV$ is the actual work.

- [Simplify] The paragraph on the state-identity status of (1.2) is dense; add a two-line worked example: free expansion of an ideal gas from $V$ to $2V$ has $Q=W=0$ but $\int T\,dS = nRT\ln 2$ and $\int P\,dV = nRT\ln 2$, so the terms are not actual heat and work.
- [Manim] Optional animation of a piston: slow quasi-static expansion with gas pressure tracking the external pressure versus sudden release into vacuum, with a $P$–$V$ trace drawn only for the quasi-static case.

### N1193

Note: [[01.02.03 Heat Capacities|01.02.03 Heat Capacities]]  
Priority: low · Graph: no · Manim: no

Correct definitions and a correct $C_P-C_V$ relation with good unit and sign checks; the derivation of (1.3) is deferred.

- [Simplify] Show the short ideal-gas substitution explicitly: $TV(1/T)^2/(1/P)=PV/T=nR$, instead of only describing it.
- [Example] Add numbers for water at room temperature ($\alpha_P\approx2.1\times10^{-4}\,\mathrm{K^{-1}}$, $\kappa_T\approx4.6\times10^{-10}\,\mathrm{Pa^{-1}}$) to show that $C_P-C_V$ is about 1% of $C_P$ for liquids, contrasting with gases.

### N1194

Note: [[01.03 Second Law of Thermodynamics|01.03 Second Law of Thermodynamics]]  
Priority: low · Graph: no · Manim: no

Short, clear section hub; the refrigerator example correctly warns against subsystem-only entropy reasoning.

- No change needed.

### N1195

Note: [[01.03.01 Classical Formulations|01.03.01 Classical Formulations]]  
Priority: low · Graph: no · Manim: no

Correct statements and a correct equivalence argument, but the equivalence proof is a dense verbal paragraph.

- [Simplify] Rewrite the equivalence paragraph as two numbered constructions with explicit heat bookkeeping: engine takes $Q$ from hot and gives $W=Q$; refrigerator takes $Q_C$ from cold and gives $Q_C+W$ to hot; net effect $Q_C$ moved cold to hot with no work. Do the same for the converse.
- [Graph] Add a simple static block diagram (hot reservoir, cold reservoir, engine and refrigerator boxes with heat and work arrows) for each of the two composite devices.
- [Simplify] The sentence attributing a "tendency of isolated systems to increase their disorder" to the source invites the disorder misconception; either drop it or add that disorder is only a heuristic and entropy is defined in 01.03.03.

### N1196

Note: [[01.03.02 Carnot Cycle and Carnot's Theorem|01.03.02 Carnot Cycle and Carnot's Theorem]]  
Priority: low · Graph: no · Manim: yes

Correct, with an accurate native $P$–$V$ graph (adiabat and isotherm intersections check out for $\gamma=5/3$); the proof of (1.4) is only sketched in words.

- [Simplify] Write the two-line derivation explicitly: $\Delta S_{\text{cycle}}=0 \Rightarrow Q_H/T_H=Q_C/T_C$, hence $\eta=1-Q_C/Q_H=1-T_C/T_H$; the current paragraph describes it without equations.
- [Example] Add a numeric example, for instance $T_H=500\,\mathrm{K}$, $T_C=300\,\mathrm{K}$ gives $\eta_{\text{rev}}=0.40$, and link to \[\[01.08 Worked Examples|Example 1.1\]\] for the full ideal-gas calculation.
- [Manim] Animate one Carnot cycle: a piston-cylinder alternately in contact with hot and cold reservoirs and insulated, with a dot tracing A→B→C→D on the $P$–$V$ diagram and the enclosed area (net work) filling in at the end.
- [Graph] Optionally add a companion $T$–$S$ diagram (a rectangle between $T_C$ and $T_H$) next to Fig. 1.1, which makes $Q_H$, $Q_C$ and $W$ visible as areas.

### N1197

Note: [[01.03.03 Entropy as a State Function|01.03.03 Entropy as a State Function]]  
Priority: low · Graph: yes · Manim: no

Correct and well argued; the decomposition of an arbitrary reversible cycle into Carnot cycles is described but not shown.

- [Graph] Add a static $P$–$V$ figure of an arbitrary closed reversible cycle overlaid with a mesh of thin adiabats and isotherm segments, showing how interior segments cancel and only the outer zigzag remains.
- [Example] Give the explicit ideal-gas entropy difference $\Delta S=nC_{V,m}\ln(T_B/T_A)+nR\ln(V_B/V_A)$ computed along two different reversible paths to show path independence concretely.

### N1198

Note: [[01.03.04 Clausius Inequality|01.03.04 Clausius Inequality]]  
Priority: low · Graph: no · Manim: no

Correct and careful about the reservoir temperature; applying the inequality before stating it is slightly awkward.

- [Structure] Move the opening paragraph on the reservoir temperature to after Proposition 1.1 and start with the cyclic inequality, so the reader sees the statement before its caveats.
- [Example] Add a worked example: a block of heat capacity $C$ at $T_1$ placed in a reservoir at $T_2$; show $\Delta S_{\text{block}}=C\ln(T_2/T_1)\ge C(T_2-T_1)/T_2=Q/T_2$, with equality only when $T_1=T_2$.

### N1199

Note: [[01.03.05 Principle of Maximum Entropy|01.03.05 Principle of Maximum Entropy]]  
Priority: low · Graph: yes · Manim: no

Correct and clear with a good two-body example; the example would be stronger with the actual calculation and a plot.

- [Example] Make the two-body example quantitative: with $U_1+U_2$ fixed, $dS_{\text{tot}}/dU_1=1/T_1-1/T_2=0$, and give a numeric final temperature for two equal blocks.
- [Graph] Plot total entropy $S_{\text{tot}}(U_1)$ and the two subsystem entropies for two identical blocks with constant heat capacity $C$ ($U_1$ from near 0 to $U_{\text{tot}}$), marking the maximum at $U_1=U_{\text{tot}}/2$.

### N1200

Note: [[01.04 Third Law of Thermodynamics|01.04 Third Law of Thermodynamics]]  
Priority: low · Graph: yes · Manim: no

Correct, with two justified corrections to the source; the unattainability statement is left without a valid argument after the source's argument is corrected.

- [Intuition] After the cooling-argument correction, give the standard valid argument: since all $S(T,X)$ curves for different control parameters $X$ meet at $T=0$, alternating isothermal and adiabatic steps shrink and infinitely many steps are needed to reach $T=0$.
- [Graph] Plot $S(T)$ for two values of a control parameter (for example a paramagnet $S(T,B)$ at $B_1<B_2$) converging at $T=0$, with the staircase of isothermal and adiabatic steps drawn between them.
- [Graph] Optionally plot Debye $C_V/(3nR)$ against $T/\Theta_D$ from 0 to 2 together with the Dulong–Petit line at 1, showing the $T^3$ approach to zero.

### N1201

Note: [[01.05 Thermodynamic Potentials|01.05 Thermodynamic Potentials]]  
Priority: low · Graph: no · Manim: no

Short, clear section hub that ties potentials to experimental constraints.

- No change needed.

### N1202

Note: [[01.05.01 Motivation - Natural Variables|01.05.01 Motivation - Natural Variables]]  
Priority: low · Graph: no · Manim: no

Correct and well motivated; the Legendre preview is given in words where one equation would be clearer.

- [Simplify] Replace the verbal paragraph on subtracting $TS$ with the one-line computation $d(U-TS)=T\,dS-P\,dV-T\,dS-S\,dT=-S\,dT-P\,dV$.
- [Intuition] Add one sentence on why "without losing information" matters: $U(T,V)$ obtained by plain substitution determines $U(S,V)$ only up to an unknown function, whereas $F(T,V)$ contains the full information.

### N1203

Note: [[01.05.02 Legendre Transformation|01.05.02 Legendre Transformation]]  
Priority: medium · Graph: yes · Manim: yes

Mathematically correct but abstract; the key geometric idea (tangent lines and intercepts) is missing, which makes the transformation hard to grasp.

- [Intuition] Add the geometric picture: $-g(p)$ is the $y$-intercept of the tangent line of slope $p$ to $f$, so the family of tangents encodes $f$ as fully as its points do.
- [Graph] Plot a convex $f(x)=x^2/2+1$ on $x\in[-3,3]$ with tangent lines for slopes $p=-2,-1,0,1,2$, marking each intercept $-g(p)$; beside it plot $g(p)=p^2/2-1$.
- [Example] Work one explicit example ($f=x^2/2\Rightarrow g=p^2/2$, or $f=e^x\Rightarrow g=p\ln p-p$) and verify $g'(p)=x$ for it.
- [Manim] Animate a tangent line rolling along the convex curve while its intercept is plotted as a point tracing out $g(p)$ in a second panel.

### N1204

Note: [[01.05.03 Four Thermodynamic Potentials|01.05.03 Four Thermodynamic Potentials]]  
Priority: low · Graph: no · Manim: no

Complete, correct derivations of all four differentials with a good explanation of minimum principles.

- [Intuition] Add a short physical meaning for each potential (for example $-\Delta F$ is the maximum work obtainable at fixed $T$; $-\Delta G$ is the maximum non-$PV$ work at fixed $T,P$), which motivates the name "free energy".
- [Structure] Consider a thermodynamic-square mnemonic as a compact summary after the four sections.

### N1205

Note: [[01.05.04 Chemical Potential and Open Systems|01.05.04 Chemical Potential and Open Systems]]  
Priority: low · Graph: no · Manim: no

Correct and thorough; Euler relation, Gibbs–Duhem and the phase-rule count are right.

- [Simplify] Show the one-line Euler derivation: differentiate $U(\lambda S,\lambda V,\lambda N_i)=\lambda U$ with respect to $\lambda$ at $\lambda=1$, instead of only citing Euler's theorem.
- [Example] Add the ideal-gas chemical potential $\mu=k_BT\ln(n\lambda_T^3)$ as a preview, linking to \[\[05.01.04 Chemical Potential of the Classical Ideal Gas\]\], to give $\mu$ a concrete form and sign.

### N1206

Note: [[01.06 Maxwell Relations|01.06 Maxwell Relations]]  
Priority: low · Graph: no · Manim: no

Short, clear section hub with appropriate caveats.

- No change needed.

### N1207

Note: [[01.06.01 Systematic Derivation|01.06.01 Systematic Derivation]]  
Priority: low · Graph: no · Manim: no

Correct derivation of all four Maxwell relations with a useful sign rule.

- [Simplify] For (1.7), show the mixed-derivative step $\partial^2F/\partial V\partial T$ computed both ways, so each relation can be reproduced rather than just read.
- [Structure] Add a compact table of the four relations with their generating potentials for quick reference.

### N1208

Note: [[01.06.02 Applications of the Maxwell Relations|01.06.02 Applications of the Maxwell Relations]]  
Priority: low · Graph: yes · Manim: no

Correct derivations of the Joule equation, $C_P-C_V$ and the Joule–Thomson coefficient; the real-gas inversion behavior is only mentioned.

- [Example] Apply the Joule equation to the van der Waals gas: $(\partial U/\partial V)_T=an^2/V^2$, a two-line result that shows what internal pressure means physically.
- [Graph] Plot the Joule–Thomson inversion curve of a van der Waals gas in reduced variables ($T_r$ against $P_r$, $P_r$ from 0 to 9), shading the cooling region $\mu_{JT}>0$.
- [Structure] The physical-quantities row with symbol "—" for the water expansion-zero temperature is not a quantity symbol; remove it from the table and keep the value in the text.

### N1209

Note: [[01.07 Thermodynamic Stability|01.07 Thermodynamic Stability]]  
Priority: low · Graph: no · Manim: no

Short, clear section hub distinguishing local stability from global equilibrium.

- No change needed.

### N1210

Note: [[01.07.01 General Stability Conditions|01.07.01 General Stability Conditions]]  
Priority: medium · Graph: yes · Manim: no

Correct conditions with good feedback intuition, but the step from $\delta^2 S<0$ to $C_V>0$ is asserted ("expanding the stability conditions gives") rather than shown.

- [Simplify] Show the thermal case explicitly: transfer $\delta U$ between two equal halves, $\delta^2S\propto(\partial^2 S/\partial U^2)_V(\delta U)^2=-(\delta U)^2/(T^2C_V)<0$, hence $C_V>0$.
- [Graph] Plot a van der Waals isotherm below $T_c$ in reduced variables ($T_r=0.9$, $V_r$ from 0.45 to 5), marking the spinodal points where $\partial P/\partial V=0$, the unstable branch between them, and the metastable branches out to the Maxwell-construction coexistence volumes.
- [Intuition] Add a free-energy picture: $F(V)$ at fixed $T$ with a concave region between the spinodals and the common tangent defining coexistence, to show local versus global stability.

### N1211

Note: [[01.07.02 Inequalities between Susceptibilities|01.07.02 Inequalities between Susceptibilities]]  
Priority: medium · Graph: no · Manim: no

Statements are correct, but neither $C_P\ge C_V$ from stability nor $\kappa_T/\kappa_S=C_P/C_V$ is derived, so the note reads as a list of results.

- [Simplify] Derive $\kappa_T/\kappa_S=C_P/C_V$ in a few lines (Jacobians, or $(\partial V/\partial P)_S=(\partial V/\partial P)_T+(\partial V/\partial T)_P(\partial T/\partial P)_S$), and state the companion $\kappa_T-\kappa_S=TV\alpha_P^2/C_P$.
- [Links] Link the $C_P\ge C_V$ statement to its proof in \[\[01.06.02 Applications of the Maxwell Relations\]\] and to (1.3) in \[\[01.02.03 Heat Capacities\]\].
- [Example] Add the physical consequence: the speed of sound uses $\kappa_S$ ($c^2=1/(\rho\kappa_S)$); Newton's isothermal estimate for air was about 15% low because it used $\kappa_T$.

### N1212

Note: [[01.08 Worked Examples|01.08 Worked Examples]]  
Priority: medium · Graph: yes · Manim: yes

Derivations are correct (Carnot work/heat, Joule coefficient, van der Waals cooling, critical constants, $Z_c=3/8$, entropy from $F$, Maxwell relation) and well checked, but some passages are dense and two examples stop short of the most instructive result.

- [Simplify] Example 1.1 and 1.3 share near-identical subscripts: $\thermal{T}_C$ (cold reservoir) vs $\thermal{T}_c$ (critical), and $\mechanical{V}_C$ (state C) vs $\mechanical{V}_c$ (critical), all listed on the same table rows; rename the cold reservoir to $\thermal{T}_L$/$\thermal{Q}_L$ or the critical values to $\thermal{T}_{\mathrm{cr}}$, $\mechanical{V}_{\mathrm{cr}}$ to remove the case-only distinction.
- [Example] Example 1.2 "Entropy change": the callout says the van der Waals entropy must include cooling but never gives it; add $\Delta\thermal{S}=\mechanical{n}\thermal{R}\ln\frac{\mechanical{v}_2-\mechanical{b}}{\mechanical{v}_1-\mechanical{b}}+\thermal{C}_V\ln\frac{\thermal{T}_2}{\thermal{T}_1}$ (from the entropy derived in Example 1.3) and a number, e.g. argon ($\mechanical{a}\approx0.1355\,\unit{Pa\,m^6\,mol^{-2}}$, $\thermal{C}_V=\tfrac32\mechanical{n}\thermal{R}$) doubling from $22.4$ to $44.8\,\unit{L\,mol^{-1}}$ gives $\Delta\thermal{T}\approx-0.24\,\unit{K}$, showing why Joule observed no effect.
- [Simplify] Work and efficiency paragraph: "If the isothermal volume ratio approaches one, the entire cycle shrinks ... their ratio has the Carnot value only as a nonzero-cycle limit" is confusing; state that $\energy{\eta}=1-\thermal{T}_C/\thermal{T}_H$ is independent of $\mechanical{V}_B/\mechanical{V}_A$ for every finite cycle, and that the cycle collapses onto the two adiabats (not to a point) as the ratio tends to one.
- [Graph] Fig. 1.3: the $\thermal{T}_r=0.70$ isotherm is clipped at $\mechanical{P}_r=-0.3$ although its minimum is $\mechanical{P}_r\approx-1.35$ at $\mechanical{V}_r\approx0.58$; either extend the lower bound or note the negative-pressure dip, and add the Maxwell equal-area tie line and spinodal points for $\thermal{T}_r=0.85$ so the caption's "spinodal points" and the coexistence remark in the text are visible.
- [Manim] Example 1.2: animate particles initially confined to the left half spreading into the vacuum after the partition is removed, with a counter showing $\energy{U}$ constant and $\Delta\thermal{S}=\mechanical{n}\thermal{R}\ln2$; motion conveys the irreversible transient better than the static before/after Fig. 1.2.
- [Links] "equation (1.4)" and "Maxwell relation (1.8)" are cited as bare numbers; link them to \[\[01.03.02 Carnot Cycle and Carnot's Theorem\]\] and \[\[01.06.01 Systematic Derivation\]\], and move the first mention of "Equation (1.10)" (before its definition) to after the displayed equation.

### N1213

Note: [[01.09 Summary and Connection to Statistical Mechanics|01.09 Summary and Connection to Statistical Mechanics]]  
Priority: low · Graph: no · Manim: no

Correct and useful dictionary between thermodynamics and statistical mechanics, with appropriate scope caveats.

- [Links] Link each Table 1.2 row to the note where it is derived (for example \[\[02.05.02 Boltzmann Formula\]\], \[\[02.06 Gibbs Entropy\]\], and the canonical and grand canonical chapters), so the summary works as a navigation hub.
- [Simplify] The temperature row ("Controls the energy distribution") is vague next to the others; give the explicit relation $1/T=(\partial S/\partial E)_{V,N}$ or the Boltzmann factor $e^{-E/k_BT}$.

### N1214

Note: [[Thermodynamic equilibrium, work, and the fundamental postulates|Thermodynamic equilibrium, work, and the fundamental postulates]]  
Priority: high · Graph: yes · Manim: yes

The isothermal and adiabatic derivations are correct and well checked, but the note reads as a page-by-page notebook transcription with sketch narration and trivia, a wrong Gibbs margin formula, and a physical-quantities table full of symbols from other notes.

- [Correctness] Postulate II margin: "$\Delta G=H-T\Delta S$" should be $\Delta G=\Delta H-T\Delta S$ (constant $T$), and "$\Delta G_{\mathrm{univ}}>0$" is wrong as a spontaneity criterion; state instead that at fixed $T,P$ a spontaneous process has $\Delta G_{\mathrm{sys}}<0$, equivalent to $\Delta S_{\mathrm{univ}}=-\Delta G/T>0$, or drop the margin line.
- [Correctness] Physical-quantities table lists symbols the note never uses and that clash with used ones: $\thermal{T}_c$ as "Curie temperature" (the note uses $T_c$ for the cold reservoir), $n$ as "number density" (the note uses $n$ in mol), $\energy{E}$ Boltzmann-weight energy, Landé $g$, degeneracy $g$, fugacity $z$, fine-structure $\alpha$ (the note's $\alpha$ is a power-rule exponent), and $\mechanical{\vec x}$; remove these and add the used $\thermal{T}_h$, $\thermal{T}_0$, $\thermal{T}_{\mathrm f}$, $\mechanical{P}_0$, $\mechanical{V}_0$, $\mechanical{F}_{\mathrm{int}}$, $\mechanical{F}_{\mathrm{ext}}$.
- [Correctness] Symbol clashes: $W$ is work and multiplicity ($S=k_B\ln W$ in "Isothermal and adiabatic compression"), and $x$ is the piston coordinate in metres and the dimensionless $x=V/V_0$; use $\Omega$ for multiplicity and e.g. $\xi=V/V_0$ for the substitution.
- [Links] The Postulate II link "\[\[#Statistical thermodynamics with C. Martens|the section on · Statistical thermodynamics ...\]\]" has a stray "·" and should point to \[\[#Second law of thermodynamics\]\]; the link at the end of "Isothermal and adiabatic compression" points to its own section and can be replaced by "above".
- [Structure] Cut transcription narration and trivia ("The sketch shows ...", room NS2-2208, GitHub reference, the missed January 12 lecture, the Cuba Libre sketch, $\exists/\forall$ reminder) and merge the duplicate isothermal compression (worked twice) and repeated steady-state Earth paragraphs; in "Enthalpy and a Maxwell relation" actually state the resulting relation $(\partial T/\partial V)_S=-(\partial P/\partial S)_V$ instead of only the equal mixed derivatives, and say explicitly in "State functions" that there is no $\Delta Q$ or $\Delta W$.
- [Graph] Add a $P/P_0$ versus $V/V_0$ plot on $[0.5,1]$ with the isotherm $1/x$ and the adiabat $x^{-5/3}$, shading the areas under each so the reader sees $W_{\mathrm{iso}}=\ln 2\,P_0V_0\approx0.693\,P_0V_0$ versus $W_{\mathrm{ad}}=\tfrac32(2^{2/3}-1)P_0V_0\approx0.881\,P_0V_0$; optional Manim of a piston compressing slowly while a state point traces the isotherm and then the adiabat on the same $PV$ diagram.
