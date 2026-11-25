---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/07 Einstein's General Theory of Relativity"
---

> [!TLDR]
> This note tracks the review of the 19 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/07 Einstein's General Theory of Relativity`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 24 possible errors or notation conflicts. 24 of them are verified (24 fixed); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3565|N3565]] 07 References: Refs 9 and 10: Collected Papers Vol. 6 is "The Berlin Years: Writings, 1914–1917", not "1912–1914"; ref 11: Vol. 8 is "The Berlin Years: Correspondence, 1914–1918", not "1912–1914"; also "Abrahams expression" should be "Abraham's expression". **Fixed:** Vol. 6 entries (refs 9, 10) now "The Berlin Years: Writings, 1914–1917"; Vol. 8 (ref 11) now "The Berlin Years: Correspondence, 1914–1918"; "Abraham’s expression"
- [[#N3568|N3568]] 07.02 General Theory of Relativity as a Theory of Gravity: "$g_{00}\simeq-(1+\phi/c^2)$" is missing a factor 2 and uses the $(-,+,+,+)$ signature, while later "$g_{00}=1+h_{00}$" uses $(+,-,-,-)$; pick one signature and write $g_{00}\simeq-(1+2\phi/c^2)$ or $g_{00}\simeq1+2\phi/c^2$ consistently. **Fixed:** Changed to g00 ≃ 1 + 2φ/c² with signature (+,−,−,−), consistent with g00 = 1 + h00 below
- [[#N3568|N3568]] 07.02 General Theory of Relativity as a Theory of Gravity: Eq. (7.10): with $(+,-,-,-)$, $g^{ij}=-\delta^{ij}$ and $h_{00}=2\phi/c^2$, (7.8) and (7.9) give $d^2x^i/dt^2=-c^2\Gamma^i_{00}=-(c^2/2)\partial_ih_{00}=-\partial_i\phi$; the printed $+(c^2/2)\nabla h_{00}$ has the wrong sign, and the following statement "$\Gamma^i_{00}=\nabla h_{00}$" drops the factor $1/2$. **Fixed:** (7.10) now d²xⁱ/dt² = −c²Γⁱ₀₀ = −(c²/2)∇h00; following sentence now uses −c²Γⁱ₀₀ = −(c²/2)∇h00 = g = −∇φ, i.e. h00 = 2φ/c²
- [[#N3568|N3568]] 07.02 General Theory of Relativity as a Theory of Gravity: The main text still states "full contraction gives $R=\kappa T$"; the callout correctly notes $R=-\kappa T$. Fix the sentence itself rather than keeping a wrong sign with a disclaimer, since (7.5) follows only from $R=-\kappa T$. **Fixed:** Changed to R = −κT and updated the note to say the sign is corrected
- [[#N3568|N3568]] 07.02 General Theory of Relativity as a Theory of Gravity: "time derivatives for the car are small" contains a stray word ("car"); it should read "time derivatives of the metric are small for a static field". **Fixed:** Changed to "time derivatives of the metric are small for a static field"
- [[#N3569|N3569]] 07.03 The GTR from an Action Principle: Eq. (7.12) with $d^4x$ in $\mathrm{m}^4$ (time as $ct$) has units of $\mathrm{J\,m}$, not $\mathrm{J\,s}$; the standard form is $S=\frac{1}{c}\int\left(\frac{c^4}{16\pi G}R+\mathcal L_m\right)\sqrt{-g}\,d^4x$, equivalently $\frac{c^3}{16\pi G}\int R\sqrt{-g}\,dt\,d^3x$ for the gravitational part. **Fixed:** Changed coefficients to c³/(16πG) and 1/c on the matter term; added that d⁴x is in m⁴ with x⁰ = ct; updated the coordinate table row
- [[#N3569|N3569]] 07.03 The GTR from an Action Principle: Write the particle action as $S=-mc^2\int d\tau$ (with $\tau$ in seconds) in the text instead of keeping $-c\int m\,d\tau$ with a disclaimer. **Fixed:** Text now S = −mc²∫dτ; removed the obsolete note
- [[#N3570|N3570]] 07.04 The GTR as the Geometric Theory of Gravity: Eq. (7.16): Baez–Bunn give $\ddot V/V=-4\pi G(\rho+(P_x+P_y+P_z)/c^2)$, i.e. $\ddot V/V=-\tfrac12\kappa c^2(T_{00}+T_{11}+T_{22}+T_{33})$ with $T_{00}=\rho c^2$; the printed $-\kappa\sum T_{ii}$ lacks $c^2/2$ and has units $\mathrm{m^{-2}}$ instead of $\mathrm{s^{-2}}$. **Fixed:** Now V̈/V = −(κc²/2)Σ_{i=0}^{3} T_ii, with T00 = ρc² and pressures in the cloud rest frame (gives −4πG(ρ+3P/c²) for isotropic P); added ρ to the table
- [[#N3570|N3570]] 07.04 The GTR as the Geometric Theory of Gravity: "Its components are typically $v\phi/c$": $g_{0i}$ is dimensionless; its order of magnitude is $(v/c)(\phi/c^2)$, with a factor of about 4 in linearised GR. **Fixed:** Changed to dimensionless order (v/c)(φ/c²), with a factor of about 4 in linearised GR
- [[#N3570|N3570]] 07.04 The GTR as the Geometric Theory of Gravity: "Space-time symmetries and physical constraints reduce the geometric object to the symmetric ten-component Ricci tensor" is misleading: the Ricci tensor is a contraction of the Riemann tensor; the remaining ten Weyl components are not removed and carry the vacuum tidal field, which is why $R_{ik}=0$ outside the Sun still has curvature. Say this explicitly, consistent with 07.02. **Fixed:** Stated that the field equations contain only the Ricci contraction and that the other ten Weyl components remain and carry the vacuum tidal field, so curvature exists where R_ik = 0
- [[#N3571|N3571]] 07.05 Einstein's Hole Argument: "restricted to metric determinant 1": the 4 November 1915 restriction was to coordinate transformations with Jacobian (substitution) determinant 1, as the quoted sentence itself says, not to metrics with determinant 1. **Fixed:** Changed to coordinate transformations with substitution (Jacobian) determinant 1
- [[#N3571|N3571]] 07.05 Einstein's Hole Argument: The trace assumption $\sum T^\mu{}_\mu=0$ was introduced in the 11 November 1915 addendum, not in the first (4 November) paper; "At this stage" should say so. **Fixed:** "At this stage" changed to "In the addendum of 11 November 1915"
- [[#N3572|N3572]] 07.05.01 Revisiting the Hole Argument: The Galilean map $x'=x-vt$ does not reduce to the identity outside L, so it is not a hole-type transformation and cannot support the conclusion drawn for the hole; it also changes the description of the matter outside L. **Fixed:** Removed "in the hole" and added that this map does not reduce to the identity outside L and changes the matter description there
- [[#N3572|N3572]] 07.05.01 Revisiting the Hole Argument: Comparing $\sqrt{-\gamma_{00}}\,dt$ with $\sqrt{-\gamma'_{00}}\,dt$ at the same coordinate label compares two different physical clocks: a clock at rest in the old chart inside L is generally not at rest in the new chart, so its proper time is $\int\sqrt{-\gamma'_{\mu\nu}\dot x'^\mu\dot x'^\nu}\,dt'$, which equals the original value. Add this computation (as the interpretation section requests) or mark the claim as the author's contested view. **Fixed:** Added to the interpretation section the proper-time integral in the new chart, its equality with the original value, and a label that the lecture's conclusion is the author's contested view; added t' to the table
- [[#N3573|N3573]] 07.06 The GTR and Its Galilean Metrics: Eq. (7.21): with $x'=x-vt$, $dx=dx'+v\,dt$ gives $ds^2=-c^2dt^2(1-v^2/c^2)+2v\,dx'\,dt+dx'^2$; the cross term is $+2v$, not $-2v$, and likewise (7.22) should read $+2R^2\Omega\,d\phi'\,dt$ for $\phi'=\phi-\Omega t$. **Fixed:** (7.21) now +2v dx' dt + dx'²; (7.22) now +2R²Ω dφ' dt + R² dφ'² with φ' = φ − Ωt defined in the text
- [[#N3573|N3573]] 07.06 The GTR and Its Galilean Metrics: Painlevé derivation: $r'=r+vt$ with $v=\sqrt{2GM/r}$ does not produce (7.23) because $v$ depends on $r$; (7.23) follows from the non-integrable substitution $dr\to dr+v(r)\,dt$ in $-c^2dt^2+dr^2+\dots$. A genuine coordinate transformation of flat spacetime cannot generate Schwarzschild curvature (Kretschmann scalar $48G^2M^2/(c^4r^6)\neq0$), and the frame is not "uniformly accelerated". **Fixed:** Added a note that (7.23) follows only from the non-integrable substitution dr → dr + v(r)dt, that flat-space coordinate changes cannot give curvature (Kretschmann 48G²M²/(c⁴r⁶) ≠ 0), and that the frame is not uniformly accelerated; changed "uniformly accelerated frame" to "freely falling frame"; the author's closing claim of a derivation is left in his voice
- [[#N3573|N3573]] 07.06 The GTR and Its Galilean Metrics: "the Langevin metric ... is evidently not special or general relativity": it is the Minkowski metric written in rotating coordinates (zero Riemann tensor) and is therefore a special-relativistic result; keep the claim only as an explicitly labelled author's interpretation. **Fixed:** Labelled as the author's conclusion and added that it is the Minkowski metric in rotating coordinates (zero Riemann tensor), so also a special-relativistic result
- [[#N3573|N3573]] 07.06 The GTR and Its Galilean Metrics: Notation: the text uses $R,\Omega$ while the Fig. 7.4 caption uses $r,\omega$, and (7.22) contains $dR^2$ although $R$ is constant on the loop; use one set and drop $dR^2$ or explain it as the radial coordinate. **Fixed:** Dropped dR² (R constant on the loop); added to the Fig. 7.4 caption that r and ω are written R and Ω in the text (figure labels not redrawn)
- [[#N3576|N3576]] 07.09 The GTR and Gravitomagnetism: "The potentials are of order $v/c$" should be "of order $(v/c)(GM/Rc^2)$", consistent with $B_g\sim\Omega GM/(Rc^2)$ in the next sentence. **Fixed:** Changed the order estimate to (v/c) GM/(Rc^2), consistent with the B_g estimate.
- [[#N3576|N3576]] 07.09 The GTR and Gravitomagnetism: "measured to about 5% accuracy through LAGEOS ... and in Gravity Probe-B": the GP-B frame-dragging result $37.2\pm7.2\,\mathrm{mas/yr}$ is a 19% measurement; LAGEOS analyses claim about 10%. Quote each separately. **Fixed:** Now quotes about 10% for LAGEOS and about 19% (37.2 ± 7.2 mas/yr) for Gravity Probe-B separately.
- [[#N3579|N3579]] 07.12 The GTR and Mach's Principle: In (7.32)–(7.33) the left side is Einstein's 1918 notation, where $G_{\mu\nu}$ denotes the Ricci tensor; with the chapter's convention ($G_{ik}$ = Einstein tensor, 07.02 and 07.04) the trace-reversed right side is wrong. Write $R_{\mu\nu}$ (or state the notation change) so that (7.32) matches (7.5). **Fixed:** Wrote R_{mu nu} in (7.32), (7.33) and the table; the checks section now states that Einstein wrote G for the Ricci tensor and that (7.32) matches (7.5).
- [[#N3579|N3579]] 07.12 The GTR and Mach's Principle: "the energy–momentum trace would then represent abnormal matter, now called the cosmological constant" is garbled: the $\lambda g_{\mu\nu}$ term acts like a source with $\rho_\Lambda=-p_\Lambda/c^2$; rephrase. Also fix the typo "Machs principle". **Fixed:** Rephrased: the lambda g term acts like abnormal matter with p_Lambda = -rho_Lambda c^2; corrected to "Mach’s"; added p_Lambda, rho_Lambda, c to the table.
- [[#N3580|N3580]] 07.13 The GTR and Cosmology: Eq. (7.35) is written with $-\Lambda g_{\mu\nu}$ while (7.34) uses the $(-,+,+,+)$ signature, in which the standard Einstein equation is $G_{\mu\nu}+\Lambda g_{\mu\nu}=\kappa T_{\mu\nu}$ (positive $\Lambda$ repulsive); either change the sign or state that a $(+,-,-,-)$ convention is meant. **Fixed:** Changed to +Lambda g and stated that positive Lambda is repulsive in this signature; also changed the same term in (7.36) of 07.15 (same batch) for consistency.
- [[#N3582|N3582]] 07.15 What Lies Beyond the GTR: Fig. 7.7 caption and the following line give the metric factor $1-GM/(rc^2)$; the weak-field component is $g_{00}=-(1-2GM/(rc^2))$, and $1-GM/(rc^2)$ is the clock-rate factor $\sqrt{-g_{00}}$. State which one is meant. **Fixed:** Caption and following line now call it the clock-rate factor sqrt(-g00) and give g00 = -(1 - 2GM/(rc^2)).

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3565 | [[07 References\|07 References]] | Analyzed | low | no | no | [[#N3565\|View]] |
| N3566 | [[07.00 Einstein's General Theory of Relativity\|07.00 Einstein's General Theory of Relativity]] | Analyzed | low | no | no | [[#N3566\|View]] |
| N3567 | [[07.01 The Genesis and Its Salient Points\|07.01 The Genesis and Its Salient Points]] | Analyzed | low | no | yes | [[#N3567\|View]] |
| N3568 | [[07.02 General Theory of Relativity as a Theory of Gravity\|07.02 General Theory of Relativity as a Theory of Gravity]] | Analyzed | high | no | no | [[#N3568\|View]] |
| N3569 | [[07.03 The GTR from an Action Principle\|07.03 The GTR from an Action Principle]] | Analyzed | medium | no | no | [[#N3569\|View]] |
| N3570 | [[07.04 The GTR as the Geometric Theory of Gravity\|07.04 The GTR as the Geometric Theory of Gravity]] | Analyzed | high | no | yes | [[#N3570\|View]] |
| N3571 | [[07.05 Einstein's Hole Argument\|07.05 Einstein's Hole Argument]] | Analyzed | medium | no | yes | [[#N3571\|View]] |
| N3572 | [[07.05.01 Revisiting the Hole Argument\|07.05.01 Revisiting the Hole Argument]] | Analyzed | medium | no | no | [[#N3572\|View]] |
| N3573 | [[07.06 The GTR and Its Galilean Metrics\|07.06 The GTR and Its Galilean Metrics]] | Analyzed | high | no | yes | [[#N3573\|View]] |
| N3574 | [[07.07 Gravitation and Electrodynamics - A Comparison\|07.07 Gravitation and Electrodynamics - A Comparison]] | Analyzed | low | no | no | [[#N3574\|View]] |
| N3575 | [[07.08 The Achievements of the GTR\|07.08 The Achievements of the GTR]] | Analyzed | low | no | no | [[#N3575\|View]] |
| N3576 | [[07.09 The GTR and Gravitomagnetism\|07.09 The GTR and Gravitomagnetism]] | Analyzed | medium | yes | yes | [[#N3576\|View]] |
| N3577 | [[07.10 The GTR and Gravitational Waves\|07.10 The GTR and Gravitational Waves]] | Analyzed | medium | no | yes | [[#N3577\|View]] |
| N3578 | [[07.11 The Experimental and Observational Tests of the GTR\|07.11 The Experimental and Observational Tests of the GTR]] | Analyzed | low | no | no | [[#N3578\|View]] |
| N3579 | [[07.12 The GTR and Mach's Principle\|07.12 The GTR and Mach's Principle]] | Analyzed | medium | no | no | [[#N3579\|View]] |
| N3580 | [[07.13 The GTR and Cosmology\|07.13 The GTR and Cosmology]] | Analyzed | medium | yes | no | [[#N3580\|View]] |
| N3581 | [[07.14 The Unsolved Riddle of Inertia - The Incompleteness of the GTR\|07.14 The Unsolved Riddle of Inertia - The Incompleteness of the GTR]] | Analyzed | low | no | no | [[#N3581\|View]] |
| N3582 | [[07.15 What Lies Beyond the GTR\|07.15 What Lies Beyond the GTR]] | Analyzed | low | no | no | [[#N3582\|View]] |
| N3583 | [[02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/07 Einstein's General Theory of Relativity/07.16 Summary\|07.16 Summary]] | Analyzed | low | no | no | [[#N3583\|View]] |

## Suggestions

### N3565

Note: [[07 References|07 References]]  
Priority: low · Graph: no · Manim: no

Complete reference list with mostly correct bibliographic data, but two Collected Papers volume titles carry the wrong year ranges.

- [Correctness] Refs 9 and 10: Collected Papers Vol. 6 is "The Berlin Years: Writings, 1914–1917", not "1912–1914"; ref 11: Vol. 8 is "The Berlin Years: Correspondence, 1914–1918", not "1912–1914"; also "Abrahams expression" should be "Abraham's expression".

### N3566

Note: [[07.00 Einstein's General Theory of Relativity|07.00 Einstein's General Theory of Relativity]]  
Priority: low · Graph: no · Manim: no

Clear chapter introduction; the abstract contains one loose phrase about flat spacetime and the reason list could link to its sections.

- [Simplify] "intrinsic measures of space and time (the metric) remain invariant from point to point" is loose; say that in flat spacetime there exist global coordinates in which the metric components are constant ($\eta_{\mu\nu}$), while in curved spacetime no such coordinates exist.
- [Links] Turn the five bullet "reasons" into links to the sections that treat them (07.02–07.04, 07.07, 07.09, 07.12, 07.14, 07.15).

### N3567

Note: [[07.01 The Genesis and Its Salient Points|07.01 The Genesis and Its Salient Points]]  
Priority: low · Graph: no · Manim: yes

Mostly quotation with short commentary; readable, with no equations to check.

- [Simplify] "It took another eight years" should be anchored: from the 1907 "happiest thought" to November 1915; give both dates so the reader does not have to infer them.
- [Manim] Animate the falling observer from the roof: in the ground frame the observer and released objects accelerate together, then switch to the observer's frame where the objects float at rest, illustrating the quoted passage.

### N3568

Note: [[07.02 General Theory of Relativity as a Theory of Gravity|07.02 General Theory of Relativity as a Theory of Gravity]]  
Priority: high · Graph: no · Manim: no

Valuable historical route to the field equations, but the weak-field part mixes metric signatures, drops factors of 2, and gives the Newtonian equation of motion with the wrong sign.

- [Correctness] "$g_{00}\simeq-(1+\phi/c^2)$" is missing a factor 2 and uses the $(-,+,+,+)$ signature, while later "$g_{00}=1+h_{00}$" uses $(+,-,-,-)$; pick one signature and write $g_{00}\simeq-(1+2\phi/c^2)$ or $g_{00}\simeq1+2\phi/c^2$ consistently.
- [Correctness] Eq. (7.10): with $(+,-,-,-)$, $g^{ij}=-\delta^{ij}$ and $h_{00}=2\phi/c^2$, (7.8) and (7.9) give $d^2x^i/dt^2=-c^2\Gamma^i_{00}=-(c^2/2)\partial_ih_{00}=-\partial_i\phi$; the printed $+(c^2/2)\nabla h_{00}$ has the wrong sign, and the following statement "$\Gamma^i_{00}=\nabla h_{00}$" drops the factor $1/2$.
- [Correctness] The main text still states "full contraction gives $R=\kappa T$"; the callout correctly notes $R=-\kappa T$. Fix the sentence itself rather than keeping a wrong sign with a disclaimer, since (7.5) follows only from $R=-\kappa T$.
- [Correctness] "time derivatives for the car are small" contains a stray word ("car"); it should read "time derivatives of the metric are small for a static field".
- [Simplify] The 9 + 3 + 4 = 16 → 10 component count is heuristic and conflicts with the next paragraph's 20 Riemann components; label it explicitly as a counting of metric potentials, not of curvature components.
- [Structure] Put the weak-field derivation (7.6)–(7.11) in its own subsection with a one-line statement of the sign convention, separate from the history of November 1915.

### N3569

Note: [[07.03 The GTR from an Action Principle|07.03 The GTR from an Action Principle]]  
Priority: medium · Graph: no · Manim: no

Concise statement of the Hilbert–Einstein action, but the printed action has the wrong dimensions and the particle analogy is only patched by a callout.

- [Correctness] Eq. (7.12) with $d^4x$ in $\mathrm{m}^4$ (time as $ct$) has units of $\mathrm{J\,m}$, not $\mathrm{J\,s}$; the standard form is $S=\frac{1}{c}\int\left(\frac{c^4}{16\pi G}R+\mathcal L_m\right)\sqrt{-g}\,d^4x$, equivalently $\frac{c^3}{16\pi G}\int R\sqrt{-g}\,dt\,d^3x$ for the gravitational part.
- [Correctness] Write the particle action as $S=-mc^2\int d\tau$ (with $\tau$ in seconds) in the text instead of keeping $-c\int m\,d\tau$ with a disclaimer.
- [Simplify] The analogy "$R/G$ times $d^3x\,dt$ is like $M\,d\tau$" is not dimensionally an analogy; replace it with the statement that both actions are "invariant scalar times invariant measure" ($d\tau$ for a worldline, $\sqrt{-g}\,d^4x$ for spacetime).
- [Intuition] Add the one-line result of the variation, $\delta(\sqrt{-g}R)/\delta g^{ik}=\sqrt{-g}(R_{ik}-\tfrac12g_{ik}R)$ and $T_{ik}=-\frac{2}{\sqrt{-g}}\frac{\delta(\sqrt{-g}\mathcal L_m)}{\delta g^{ik}}$, so the reader sees how (7.2) emerges.

### N3570

Note: [[07.04 The GTR as the Geometric Theory of Gravity|07.04 The GTR as the Geometric Theory of Gravity]]  
Priority: high · Graph: no · Manim: yes

Rich and mostly sound geometric discussion, but the Baez–Bunn volume equation is missing a factor and is dimensionally inconsistent, the gravitomagnetic metric estimate is dimensionally wrong, and the Ricci-tensor reduction is misdescribed.

- [Correctness] Eq. (7.16): Baez–Bunn give $\ddot V/V=-4\pi G(\rho+(P_x+P_y+P_z)/c^2)$, i.e. $\ddot V/V=-\tfrac12\kappa c^2(T_{00}+T_{11}+T_{22}+T_{33})$ with $T_{00}=\rho c^2$; the printed $-\kappa\sum T_{ii}$ lacks $c^2/2$ and has units $\mathrm{m^{-2}}$ instead of $\mathrm{s^{-2}}$.
- [Correctness] "Its components are typically $v\phi/c$": $g_{0i}$ is dimensionless; its order of magnitude is $(v/c)(\phi/c^2)$, with a factor of about 4 in linearised GR.
- [Correctness] "Space-time symmetries and physical constraints reduce the geometric object to the symmetric ten-component Ricci tensor" is misleading: the Ricci tensor is a contraction of the Riemann tensor; the remaining ten Weyl components are not removed and carry the vacuum tidal field, which is why $R_{ik}=0$ outside the Sun still has curvature. Say this explicitly, consistent with 07.02.
- [Simplify] Eqs. (7.14)–(7.15) reuse $\alpha$ and $u$ with changed meanings (flagged in the callout); rewrite with the standard geodesic-deviation equation $D^2\xi^i/d\tau^2=-R^i{}_{jkl}u^j\xi^ku^l$ and its Newtonian limit $\ddot\xi^i=-(\partial_i\partial_j\phi)\xi^j$, which is shorter and dimensionally clean.
- [Example] Add the Earth tidal example from Fig. 7.1: for separation $\xi$, radial stretching $2GM\xi/r^3$ and transverse squeezing $GM\xi/r^3$ in each of two directions; the trace is zero in vacuum, which is the content of $R_{00}=0$ and connects directly to (7.16).
- [Manim] Animate a small spherical cloud of free particles falling towards Earth, deforming into a prolate ellipsoid with unchanged volume (vacuum, Weyl) and, in a second scene inside a uniform dust ball, shrinking in volume at rate $\ddot V/V=-4\pi G\rho$ (Ricci).

### N3571

Note: [[07.05 Einstein's Hole Argument|07.05 Einstein's Hole Argument]]  
Priority: medium · Graph: no · Manim: yes

Faithful quotation-based account of the hole argument and its history, with technical misstatements about the 1915 covariance restriction and the timing of the trace assumption.

- [Correctness] "restricted to metric determinant 1": the 4 November 1915 restriction was to coordinate transformations with Jacobian (substitution) determinant 1, as the quoted sentence itself says, not to metrics with determinant 1.
- [Correctness] The trace assumption $\sum T^\mu{}_\mu=0$ was introduced in the 11 November 1915 addendum, not in the first (4 November) paper; "At this stage" should say so.
- [Intuition] Add the standard resolution in two sentences next to the author's verdict (active diffeomorphism: $\phi^*g$ and $g$ give the same coincidences of matter worldlines and clock readings), so readers see the alternative the interpretation section mentions.
- [Manim] Animate a hole region with matter worldlines outside and a smooth deformation of the coordinate grid only inside, followed by a clock worldline carried along with the deformation so its reading is unchanged.

### N3572

Note: [[07.05.01 Revisiting the Hole Argument|07.05.01 Revisiting the Hole Argument]]  
Priority: medium · Graph: no · Manim: no

The author's argument is easy to follow, but its central example is not a hole transformation and the clock-rate comparison uses the wrong worldline.

- [Correctness] The Galilean map $x'=x-vt$ does not reduce to the identity outside L, so it is not a hole-type transformation and cannot support the conclusion drawn for the hole; it also changes the description of the matter outside L.
- [Correctness] Comparing $\sqrt{-\gamma_{00}}\,dt$ with $\sqrt{-\gamma'_{00}}\,dt$ at the same coordinate label compares two different physical clocks: a clock at rest in the old chart inside L is generally not at rest in the new chart, so its proper time is $\int\sqrt{-\gamma'_{\mu\nu}\dot x'^\mu\dot x'^\nu}\,dt'$, which equals the original value. Add this computation (as the interpretation section requests) or mark the claim as the author's contested view.
- [Example] Work a one-dimensional example: $t'=t+f(t,x)$ with $f$ vanishing outside L; show that $\gamma'_{00}$ changes while $\int d\tau$ along the same worldline is unchanged.

### N3573

Note: [[07.06 The GTR and Its Galilean Metrics|07.06 The GTR and Its Galilean Metrics]]  
Priority: high · Graph: no · Manim: yes

The Painlevé-to-Schwarzschild algebra is mostly right, but the Langevin cross-term signs are wrong, the "Galilean transformation" to the Painlevé metric is not a coordinate transformation, and the split expansion (7.25)–(7.27) is confusing.

- [Correctness] Eq. (7.21): with $x'=x-vt$, $dx=dx'+v\,dt$ gives $ds^2=-c^2dt^2(1-v^2/c^2)+2v\,dx'\,dt+dx'^2$; the cross term is $+2v$, not $-2v$, and likewise (7.22) should read $+2R^2\Omega\,d\phi'\,dt$ for $\phi'=\phi-\Omega t$.
- [Correctness] Painlevé derivation: $r'=r+vt$ with $v=\sqrt{2GM/r}$ does not produce (7.23) because $v$ depends on $r$; (7.23) follows from the non-integrable substitution $dr\to dr+v(r)\,dt$ in $-c^2dt^2+dr^2+\dots$. A genuine coordinate transformation of flat spacetime cannot generate Schwarzschild curvature (Kretschmann scalar $48G^2M^2/(c^4r^6)\neq0$), and the frame is not "uniformly accelerated".
- [Correctness] "the Langevin metric ... is evidently not special or general relativity": it is the Minkowski metric written in rotating coordinates (zero Riemann tensor) and is therefore a special-relativistic result; keep the claim only as an explicitly labelled author's interpretation.
- [Simplify] Replace (7.25)–(7.26), which mix $dt$ and $dT$, by completing the square: with $dt=dT+\beta\,dr$, $\beta=v/(c^2-v^2)$, the cross term vanishes and the $dr^2$ coefficient becomes $1+v^2/(c^2-v^2)=1/(1-2GM/c^2r)$, giving (7.27) in two lines.
- [Correctness] Notation: the text uses $R,\Omega$ while the Fig. 7.4 caption uses $r,\omega$, and (7.22) contains $dR^2$ although $R$ is constant on the loop; use one set and drop $dR^2$ or explain it as the radial coordinate.
- [Manim] Animate infalling "raindrop" observers in Painlevé coordinates: light cones tilting inward as $r$ decreases and crossing $r=2GM/c^2$ smoothly, contrasting with Schwarzschild coordinates where the cones close up at the horizon.

### N3574

Note: [[07.07 Gravitation and Electrodynamics - A Comparison|07.07 Gravitation and Electrodynamics - A Comparison]]  
Priority: low · Graph: no · Manim: no

Clear qualitative comparison of gravity and electromagnetism; the formulas are quoted without context and the induction analogy is loosely named.

- [Simplify] "$F\propto-dA/dt$" is Faraday's induced electric field $E=-\partial A/\partial t$ (Lenz's law gives only its sign); name it that way and give the gravitational analogue in one formula.
- [Intuition] Add a table with columns "electromagnetism" and "linearised gravity": source (charge vs mass-energy), coupling sign (like charges repel vs attract), parallel currents (attract vs repel), field self-charge (no vs yes), radiation (dipole vs quadrupole), so the many prose comparisons can be seen at once.
- [Example] Evaluate Einstein's 1912 induction coefficient $k=3GM a/(2Rc^2)$ for a shell with $GM/(Rc^2)=10^{-6}$ to show how small the effect is ($k/a\approx1.5\times10^{-6}$).

### N3575

Note: [[07.08 The Achievements of the GTR|07.08 The Achievements of the GTR]]  
Priority: low · Graph: no · Manim: no

Short and readable list of achievements, but Fig. 7.5 is placed here although it belongs to the gravitomagnetism note, and the ephemeris-time paragraph links GR to a Newtonian time standard.

- [Structure] Move Fig. 7.5 (mass currents) to [[07.09 The GTR and Gravitomagnetism]], where it is discussed, and leave a link here.
- [Simplify] The ephemeris-time paragraph implies that GR made ephemerides practical "around 1950"; ephemeris time (IAU 1952, SI second 1960–1967) was based on Newtonian solar theory, and relativistic ephemerides came later. Separate the two statements.
- [Example] Give the GPS numbers that the GNSS sentence alludes to: $+45.7\,\mu\mathrm{s/day}$ gravitational, $-7.2\,\mu\mathrm{s/day}$ velocity, net $+38.5\,\mu\mathrm{s/day}$, about 11 km/day of ranging error if ignored.

### N3576

Note: [[07.09 The GTR and Gravitomagnetism|07.09 The GTR and Gravitomagnetism]]  
Priority: medium · Graph: yes · Manim: yes

Good qualitative introduction to frame dragging, but the potential estimate is dimensionally wrong, a field value lacks units, and the quoted experimental accuracy is wrong for Gravity Probe B.

- [Correctness] "The potentials are of order $v/c$" should be "of order $(v/c)(GM/Rc^2)$", consistent with $B_g\sim\Omega GM/(Rc^2)$ in the next sentence.
- [Correctness] "measured to about 5% accuracy through LAGEOS ... and in Gravity Probe-B": the GP-B frame-dragging result $37.2\pm7.2\,\mathrm{mas/yr}$ is a 19% measurement; LAGEOS analyses claim about 10%. Quote each separately.
- [Simplify] "Attainable laboratory values of $B_g$ are no larger than about $10^{-22}$" lacks a unit; state $\mathrm{rad/s}$ and the assumed rotor ($M\sim10^3\,\mathrm{kg}$, $R\sim0.5\,\mathrm{m}$, $\Omega\sim10^3\,\mathrm{rad/s}$ gives $\sim10^{-21}$).
- [Links] "(see the source's Section 7.10)" should be a wiki link to [[07.10 The GTR and Gravitational Waves]], which contains the GP-B calculation.
- [Graph] Plot the orbit-averaged Lense–Thirring precession for a polar orbit, $\Omega_{LT}=GJ/(2c^2r^3)$ in mas/yr, against altitude 200–20,000 km for Earth, marking GP-B (642 km, 39 mas/yr predicted) and LAGEOS.
- [Manim] Animate a gyroscope in polar orbit around a rotating Earth, with its spin axis slowly precessing in the direction of Earth's rotation (exaggerated), separately from the larger geodetic precession in the orbital plane.

### N3577

Note: [[07.10 The GTR and Gravitational Waves|07.10 The GTR and Gravitational Waves]]  
Priority: medium · Graph: no · Manim: yes

The GP-B numerical estimate of $\mu_G$ and $c_g$ recomputes correctly, but the interaction formula is schematic and the note omits the far stronger direct bound on the speed of gravitational waves.

- [Simplify] Eq. (7.28) $E=\mu_G\,\mathbf s\cdot\mathbf J/R^3$ omits the dipole angular structure $3(\mathbf s\cdot\hat r)(\mathbf J\cdot\hat r)-\mathbf s\cdot\mathbf J$; say that (7.29) is its polar-orbit average, and note that GR gives $\mu_G=G/c^2=7.4\times10^{-28}\,\mathrm{m/kg}$ for comparison with (7.30).
- [Structure] Add the GW170817/GRB 170817A bound $-3\times10^{-15}<(c_g-c)/c<7\times10^{-16}$ next to the 20% GP-B estimate, so readers see the current constraint on $c_g$.
- [Example] Show the unit chain used in (7.29)–(7.30): $37.2\,\mathrm{mas/yr}=5.7\times10^{-15}\,\mathrm{rad/s}$, $J=0.33MR_\oplus^2\Omega=5.9\times10^{33}\,\mathrm{kg\,m^2/s}$, $R=7.01\times10^6\,\mathrm{m}$, giving $\mu_G=2R^3\omega/J=6.7\times10^{-28}\,\mathrm{m/kg}$.
- [Manim] Animate a ring of free test masses under a passing gravitational wave, first with $+$ then with $\times$ polarisation, to show the quadrupolar (not dipolar) nature mentioned in the first paragraph.

### N3578

Note: [[07.11 The Experimental and Observational Tests of the GTR|07.11 The Experimental and Observational Tests of the GTR]]  
Priority: low · Graph: no · Manim: no

Short overview that lists tests without numbers; clear but thin.

- [Example] Add a compact table of the classic tests with prediction and current precision: perihelion of Mercury ($43''$/century), solar light bending ($1.75''$; VLBI $\gamma-1\sim10^{-4}$), Cassini Shapiro delay ($\gamma-1=(2.1\pm2.3)\times10^{-5}$), Hulse–Taylor orbital decay (agreement at 0.2%), GP-B geodetic (0.3%).
- [Links] Link "The preceding chapter" to [[06.07 A Brief Account of Experimental Tests]] and the frame-dragging remark to [[07.09 The GTR and Gravitomagnetism]].

### N3579

Note: [[07.12 The GTR and Mach's Principle|07.12 The GTR and Mach's Principle]]  
Priority: medium · Graph: no · Manim: no

Valuable collection of Einstein quotations on Mach's principle, but the field equations quoted use $G_{\mu\nu}$ for the Ricci tensor, which clashes with the chapter's use of $G_{ik}$ for the Einstein tensor.

- [Correctness] In (7.32)–(7.33) the left side is Einstein's 1918 notation, where $G_{\mu\nu}$ denotes the Ricci tensor; with the chapter's convention ($G_{ik}$ = Einstein tensor, 07.02 and 07.04) the trace-reversed right side is wrong. Write $R_{\mu\nu}$ (or state the notation change) so that (7.32) matches (7.5).
- [Correctness] "the energy–momentum trace would then represent abnormal matter, now called the cosmological constant" is garbled: the $\lambda g_{\mu\nu}$ term acts like a source with $\rho_\Lambda=-p_\Lambda/c^2$; rephrase. Also fix the typo "Machs principle".
- [Structure] Add dates and context in one line per quotation (1913 article, 1916 obituary, 1918 review, 1917 letter to de Sitter, 1954 letter to Pirani) as a short timeline, which makes the change of view easier to follow.
- [Intuition] Give one concrete Machian prediction of GR, such as frame dragging inside a rotating shell, $\omega_{\mathrm{drag}}=4GM\Omega/(3Rc^2)$, to show which part of Mach's idea GR does contain.

### N3580

Note: [[07.13 The GTR and Cosmology|07.13 The GTR and Cosmology]]  
Priority: medium · Graph: yes · Manim: no

Clear presentation of the FLRW metric and the author's proposed equation, but the sign of the $\Lambda$ term does not match the stated signature and the cosmic-potential estimate is given without the integral's value.

- [Correctness] Eq. (7.35) is written with $-\Lambda g_{\mu\nu}$ while (7.34) uses the $(-,+,+,+)$ signature, in which the standard Einstein equation is $G_{\mu\nu}+\Lambda g_{\mu\nu}=\kappa T_{\mu\nu}$ (positive $\Lambda$ repulsive); either change the sign or state that a $(+,-,-,-)$ convention is meant.
- [Example] Evaluate the cosmic potential: $\int_0^{R}4\pi G\rho r\,dr=2\pi G\rho R^2$; with $\rho=\rho_c=3H_0^2/(8\pi G)$ and $R=c/H_0$ this gives $\tfrac34c^2$, which makes "nearly equals $c^2$" checkable.
- [Intuition] Explain that the FLRW cosmic time $t$ is the proper time of comoving observers (the preferred matter congruence), which is compatible with local Lorentz invariance; then present the author's claim of a conflict as an interpretation.
- [Graph] Plot $a(t)/a_0$ against $t$ for flat matter-only ($a\propto t^{2/3}$), radiation-only ($a\propto t^{1/2}$) and $\Lambda$CDM ($\Omega_m=0.31$, $\Omega_\Lambda=0.69$), $t$ from 0 to 30 Gyr, marking today, to illustrate what $a(t)$ and $H=\dot a/a$ mean.

### N3581

Note: [[07.14 The Unsolved Riddle of Inertia - The Incompleteness of the GTR|07.14 The Unsolved Riddle of Inertia - The Incompleteness of the GTR]]  
Priority: low · Graph: no · Manim: no

Short argumentative note that states the author's position clearly; no equations to check.

- [Links] Link "Mach's suggestion" to [[07.12 The GTR and Mach's Principle]] and "the Machian scheme" to the Cosmic Relativity chapter that implements it.

### N3582

Note: [[07.15 What Lies Beyond the GTR|07.15 What Lies Beyond the GTR]]  
Priority: low · Graph: no · Manim: no

Clear statement of the author's modified equation; the figure caption uses a metric factor without the standard factor 2.

- [Correctness] Fig. 7.7 caption and the following line give the metric factor $1-GM/(rc^2)$; the weak-field component is $g_{00}=-(1-2GM/(rc^2))$, and $1-GM/(rc^2)$ is the clock-rate factor $\sqrt{-g_{00}}$. State which one is meant.
- [Intuition] Add the check the interpretation section asks for in one line: taking $\nabla^\mu$ of (7.36) requires $\nabla^\mu T^U_{\mu\nu}=0$ separately, which is a nontrivial condition on the cosmic tensor.

### N3583

Note: [[02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/07 Einstein's General Theory of Relativity/07.16 Summary|07.16 Summary]]  
Priority: low · Graph: no · Manim: no

Adequate chapter summary of the author's arguments; no change needed beyond links.

- [Links] Add wiki links to the summarised notes (07.05.01, 07.06, 07.09, 07.10, 07.13, 07.15) and to [[08.00 Our Universe]] for "the next chapter".
