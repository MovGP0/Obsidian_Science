---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/10 Cosmic Relativity - The Theory and Its Primary Fundamental Results"
---

> [!TLDR]
> This note tracks the review of the 37 notes in `02 Physics/05 Relativity and Gravitation/05 Cosmic Relativity/10 Cosmic Relativity - The Theory and Its Primary Fundamental Results`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 38 possible errors or notation conflicts. 38 of them are verified (36 fixed, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3624|N3624]] 10 References: Ref. 7 should read R. A. Lyttleton, H. Bondi, Proc. R. Soc. Lond. A 252, 313–333 (1959) (author is Lyttleton, journal is Proc. Roy. Soc. A, not Proc. Phys. Soc.). **Fixed:** Corrected author name and journal.
- [[#N3625|N3625]] 10.00 Cosmic Relativity - The Theory and Its Primary Fundamental Results: "density close to critical to about 3%" is outdated: Planck 2018 + BAO give $\Omega_k=0.001\pm0.002$, i.e. flatness to a few tenths of a per cent; update the value or mark it as the source's. **Fixed:** Marked 3 % as the source's value and added Planck 2018 + BAO Ω_k = 0.001 ± 0.002 (few tenths of a per cent); updated the table row.
- [[#N3626|N3626]] 10.01 The Universe That Determines the Physics of Relativity: The Fig. 10.1 caption says "roughly 13 billion years of slowly expanding, matter-dominated history" whereas the text says ten billion; in ΛCDM, matter dominated only until about 9.8 Gyr after the big bang and dark energy has dominated since; align the caption with the text. **Fixed:** Changed caption to roughly ten billion years of mostly matter-dominated history.
- [[#N3627|N3627]] 10.02 A Hypothetical Scenario in Electrodynamics: The potential at the centre of a uniformly charged sphere is $\electric{\phi}_e=3\electric{Q}/(8\pi\electric{\epsilon}_0\mechanical{R})=\electric{q}\mechanical{R}^2/(2\electric{\epsilon}_0)$, not $3\electric{Q}/(4\pi\electric{\epsilon}_0\mechanical{R})$; with $\electric{q}=10^{-59}\,\unit{C/m^3}$ and $\mechanical{R}=10^{26}\,\unit{m}$ this gives about $6\,\unit{kV}$ (order $10^4\,\unit{V}$ still holds). **Fixed:** Corrected the formula and the value (about 6 kV, of order 10^4 V) in text and table.
- [[#N3627|N3627]] 10.02 A Hypothetical Scenario in Electrodynamics: $\magnetic{\mathbf A}=\mechanical{\mathbf v}\electric{\phi}/\mechanical{c}$ is the Gaussian-unit form; in the SI units used elsewhere in the note (with $\electric{\epsilon}_0$) it is $\magnetic{\mathbf A}=\mechanical{\mathbf v}\electric{\phi}/\mechanical{c}^2$ in $\unit{V\,s/m}$; fix the formula and the table's "unit convention unspecified". **Fixed:** Corrected the formula and the table unit and description.
- [[#N3629|N3629]] 10.04 Physics in the Gravitationally Charged Universe: "$\energy{H}=\mechanical{p}^2/(2\mechanical{m})-\mechanical{m}\mechanical{\Phi}_u$ ... Such a Hamiltonian produces observable noninertial effects": a spatially and temporally constant $\mechanical{\Phi}_u$ only shifts $\energy{H}$ by a constant and leaves Hamilton's equations unchanged; say that effects arise only from the velocity-dependent (vector-potential) terms introduced later. **Fixed:** Replaced the sentence with the constant-shift statement and the vector-potential origin of effects.
- [[#N3629|N3629]] 10.04 Physics in the Gravitationally Charged Universe: "CMBR ... synchronised throughout the Universe better than one part in $10^5$" conflates temperature anisotropy ($\Delta T/T\sim10^{-5}$) with timing; converting to time needs $|dT/dt|$ (here $T\propto1/a$), so state it as a temperature uniformity, not a synchronisation accuracy. **Fixed:** Restated as temperature uniformity and attributed the simultaneity conclusion to the author.
- [[#N3630|N3630]] 10.05 The Gravitational Foundation of Cosmic Relativity: (10.5)–(10.6) declare the primed (moving) interval Minkowskian and rewrite it in unprimed coordinates, so the result is the metric of the moving-frame chart expressed in rest-frame coordinates, not $\mechanical{g}'_{\mu\nu}$; substituting $\mechanical{x}=\mechanical{x}'+\mechanical{v}t'$ into the rest-frame interval (10.3) gives $\mechanical{g}'_{00}=-(1-\mechanical{v}^2/\mechanical{c}^2)$ and $\mechanical{g}'_{0x}=+\mechanical{v}/\mechanical{c}$ (cross term $+2\mechanical{v}\,d\mechanical{x}'dt'$). **Fixed:** Added a note with the correct substitution and g'_00, g'_0x = +v/c; kept the source sign −v/c because the later chapter notes (10.06.04, 10.07.01, 10.08.x, 10.10.x) use it.
- [[#N3630|N3630]] 10.05 The Gravitational Foundation of Cosmic Relativity: "spatially homogeneous cosmic potential, $\nabla^2\mechanical{\phi}_u=0$" contradicts Poisson's equation $\nabla^2\mechanical{\phi}=4\pi\mechanical{G}\mechanical{\rho}\neq0$ for uniform density; the intended statement is $\nabla\mechanical{\phi}_u=0$ (no local force), which needs the cosmological boundary argument. **Fixed:** Changed to ∇Φ_u = 0 and added the Poisson-equation caveat.
- [[#N3630|N3630]] 10.05 The Gravitational Foundation of Cosmic Relativity: Symbol clash: $\mechanical{\phi}$ is the azimuthal coordinate in (10.1) and $\mechanical{\phi}_u$ the cosmic potential, while $\mechanical{\Phi}_u$ is also the cosmic potential later in the note; use $\mechanical{\Phi}_u$ throughout for the potential. **Fixed:** Used Φ_u for the potential and removed the φ_u table row.
- [[#N3630|N3630]] 10.05 The Gravitational Foundation of Cosmic Relativity: "potential scales as $\mechanical{\rho}\mechanical{R}_u^2\propto\mechanical{c}^2(1/t^2)t^2$" drops $\mechanical{G}$; write $\mechanical{\Phi}_u\sim\mechanical{G}\mechanical{\rho}\mechanical{R}_u^2$ with $\mechanical{\rho}\propto1/(\mechanical{G}t^2)$ and $\mechanical{R}_u\propto\mechanical{c}t$, giving $\mechanical{\Phi}_u\propto\mechanical{c}^2$. **Fixed:** Rewrote as Φ_u ~ GρR_u² with ρ ∝ 1/(Gt²), R_u ∝ ct, giving c²; added a G table row.
- [[#N3632|N3632]] 10.06.01 The Modification of Duration and Distance: The spatial metric is called $\mechanical{\gamma}_{ab}$, the same letter as the Lorentz factor used in neighbouring notes (10.06.02–10.06.04); rename it (e.g. $h_{ab}$) to avoid a clash in the chapter. **Fixed:** Renamed to h_ab in the text and table.
- [[#N3633|N3633]] 10.06.02 Interpretation in Terms of the Gravitational Potentials: The sentence "The source also writes $\mechanical{A}_i=\mechanical{g}_{0i}/\mechanical{g}_{00}$" gives, with 10.05's components, $(\mechanical{v}_i/\mechanical{c})\mechanical{\gamma}^2$, which is neither dimensionally nor in its $\mechanical{\gamma}$ power equal to (10.11); state this mismatch explicitly in the note box. **Partly:** Note box already stated the unit mismatch; added that g'_0i/g'_00=(v_i/c)gamma^2 is dimensionless with gamma^2 and disagrees with (10.11) even with Phi_u=-c^2
- [[#N3634|N3634]] 10.06.03 The Time Dilation of Physical Clocks: The symbol $\mechanical{\lambda}_r$ is introduced for $1/\mechanical{\gamma}$ and never used again; drop it or use it in (10.13). **Fixed:** Inserted lambda_r into (10.13) as the clock-rate ratio equal to sqrt(1-v^2/c^2)
- [[#N3636|N3636]] 10.06.05 The Propagation of Light: "total duration $\mechanical{T}=\mechanical{L}/\mechanical{c}$" for a two-way trip over $\mechanical{L}_x$ should be $2\mechanical{L}/\mechanical{c}$ (and (10.14) correspondingly $2\mechanical{L}/\mechanical{c}'$); also unify $\mechanical{L}_x$ and $\mechanical{L}$. **Fixed:** Set T=2L/c, (10.14) T'=2L/c', c'T'=cT=2L, note box updated; replaced L_x by L in text and table
- [[#N3638|N3638]] 10.07.01 Laws of Dynamics - Newton's Law of Motion: In (10.16), $\frac1{\mechanical{c}}\frac{d}{dt}(\mechanical{m}\mechanical{A}'_i)=+\frac{d}{dt}(\mechanical{\gamma}\mechanical{m}\mechanical{v}_i\mechanical{\Phi}_u/\mechanical{c}^2)$ with $\mechanical{A}'_i=\mechanical{\gamma}\mechanical{v}_i\mechanical{\Phi}_u/\mechanical{c}$, yet it is equated to $-\frac{d}{dt}(\ldots)$, which is then set equal to $+\frac{\mechanical{\Phi}_u}{\mechanical{c}^2}(\ldots)$; at least two signs are inconsistent. Write $\mechanical{F}_{\mathrm{react}}=-\frac{d}{dt}(\mechanical{\gamma}\mechanical{m}\mechanical{v}_i|\mechanical{\Phi}_u|/\mechanical{c}^2)$ and the applied force as its negative. **Fixed:** Rewrote (10.16) with Phi_u=-abs(Phi_u) ending in F_react=-(abs(Phi_u)/c^2)(...); defined applied F=-F_react; (10.18), (10.19) and the c^2 normalisation use abs(Phi_u); note box rewritten; F_react added to table
- [[#N3638|N3638]] 10.07.01 Laws of Dynamics - Newton's Law of Motion: (10.17) "$\frac{\mechanical{\Phi}_u}{\mechanical{c}^2}\mechanical{\gamma}\mechanical{m}\frac{d\mechanical{v}}{dt}=\frac{\mechanical{\Phi}_u}{\mechanical{c}^2}\mechanical{\gamma}\frac{d\mechanical{p}}{dt}$" has an extra $\mechanical{\gamma}$: for transverse acceleration $d\mechanical{p}/dt=\mechanical{\gamma}\mechanical{m}\,d\mechanical{v}/dt$, so the right side should be $(\mechanical{\Phi}_u/\mechanical{c}^2)\,d\mechanical{p}/dt$. **Fixed:** Right side now (abs(Phi_u)/c^2) dp/dt
- [[#N3638|N3638]] 10.07.01 Laws of Dynamics - Newton's Law of Motion: "$\mechanical{g}_{0i}=-\mechanical{v}_i/\mechanical{c}=\mechanical{A}_i$" conflicts with (10.11) $\mechanical{A}_i=-\mechanical{\gamma}\mechanical{v}_i\mechanical{\Phi}_u/\mechanical{c}$ used earlier in the same note ($\mechanical{A}'_i$); state the normalisation $\mechanical{\Phi}_u/\mechanical{c}^2=1$, $\mechanical{\gamma}\approx1$ under which they agree, or use distinct symbols. **Fixed:** Added that this A_i is dimensionless and equals A'_i/abs(Phi_u)=-gamma v_i/c only for gamma approx 1
- [[#N3641|N3641]] 10.08.02 The Centrifugal Force: (10.20) carries the sign $-\mechanical{\Phi}_u/\mechanical{c}^2$ while (10.10) gives $\mechanical{\Phi}_u\approx-\mechanical{c}^2$, which would make the reaction point inward (centripetal); use $|\mechanical{\Phi}_u|$ so the result is outward. **Fixed:** Replaced Phi_u by abs(Phi_u) in (10.20) and (10.21) and added one sentence that the reaction points outward
- [[#N3642|N3642]] 10.08.03 The Coriolis Force: The Coriolis force in a frame rotating at $\mechanical{\boldsymbol\Omega}$ is $\mechanical{\mathbf F}=-2\mechanical{m}\mechanical{\boldsymbol\Omega}\times\mechanical{\mathbf u}=+2\mechanical{m}\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$; the note's $-2\mechanical{m}_i\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$ (in (10.22), the text and Fig. 10.4 caption, and $\mechanical{\mathbf a}_k=-2\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$) has the opposite sign and would deflect northern-hemisphere winds to the left. The note's own "Interpretation and checks" states the correct form. **Fixed:** (10.22) now ends in +2 gamma m_i u x Omega; text, a_k and both Fig. 10.4 caption formulas changed to -2(m_i) Omega x u (the SVG has no formula)
- [[#N3642|N3642]] 10.08.03 The Coriolis Force: In (10.22), $\mechanical{\mathbf A}_g=-\mechanical{\gamma}\mechanical{\Phi}_u\mechanical{\mathbf v}/\mechanical{c}$ gives $\nabla\times\mechanical{\mathbf A}_g=-(\mechanical{\gamma}\mechanical{\Phi}_u/\mechanical{c})\nabla\times\mechanical{\mathbf v}$, but the next step writes $\mechanical{\gamma}\mechanical{\Phi}_u/\mechanical{c}^2$; fix the power of $\mechanical{c}$ (and the coupling's units) and show $\nabla\times(\mechanical{\boldsymbol\Omega}\times\mechanical{\mathbf r})=2\mechanical{\boldsymbol\Omega}$ explicitly. **Fixed:** Coupling written (m/c) u x B_g so units are force and the c^2 step is correct; added v=Omega x r, curl=2 Omega, m_i=abs(Phi_u)m/c^2; B_g unit set to source-dependent; r added to table
- [[#N3643|N3643]] 10.09 The Twist in Tropical Cyclones: "Its component at latitude $\mechanical{\lambda}$ is $\mechanical{\Omega}\sin\mechanical{\lambda}$" contradicts $\mechanical{\mathbf B}_g\approx-2\mechanical{\boldsymbol\Omega}$ and the caption; the vertical component is $2\mechanical{\Omega}\sin\mechanical{\lambda}$ (the Coriolis parameter $f$). **Fixed:** Changed to vertical component of magnitude 2 Omega sin lambda
- [[#N3643|N3643]] 10.09 The Twist in Tropical Cyclones: $\mechanical{\Phi}_i$ in the $\mechanical{\mathbf B}_g$ formula is undefined (presumably $\mechanical{\Phi}_u$), and the force $-2\mechanical{m}\mechanical{\mathbf v}\times\mechanical{\boldsymbol\Omega}\sin\mechanical{\lambda}$ inherits the sign error of 10.08.03; the standard horizontal Coriolis force is $-\mechanical{m}f\,\hat{\mathbf z}\times\mechanical{\mathbf v}$ with $f=2\mechanical{\Omega}\sin\mechanical{\lambda}$. **Fixed:** Phi_i to Phi_u (text and table); force now -2m Omega sin lambda z-hat x v with a sentence on the Coriolis parameter and right deflection; source sign of B_g approx -2 Omega kept as printed
- [[#N3646|N3646]] 10.10.02 Weightlessness in Free Fall and the EEP: (10.24) "$-\mechanical{m}\mechanical{\mathbf g}=-\mechanical{m}\nabla\mechanical{\phi}_l$" contradicts the note's own $\mechanical{\mathbf g}=-\nabla\mechanical{\phi}$; the gravitational force is $\mechanical{m}\mechanical{\mathbf g}=-\mechanical{m}\nabla\mechanical{\phi}_l=\mechanical{m}_i\mechanical{\mathbf a}$, so free fall gives $\mechanical{\mathbf a}=\mechanical{\mathbf g}$ (not $\mechanical{\mathbf g}=-\mechanical{\mathbf a}$), and the induced force (10.23) is $-\mechanical{m}_i\mechanical{\mathbf a}=-\mechanical{m}_i\mechanical{\mathbf g}$. Correct the chain instead of retaining it. **Fixed:** (10.24) left side now m g; text now gives a=g with abs(Phi_u)/c^2=1; (10.23) ends -m_i a=-m_i g; note box rewritten
- [[#N3646|N3646]] 10.10.02 Weightlessness in Free Fall and the EEP: (10.23) uses $\mechanical{\Phi}$ without subscript and a partial derivative $\partial\mechanical{\mathbf v}/\partial t$ of a particle velocity, and the text uses $\mechanical{\phi}$ and $\mechanical{\phi}_l$ for the same local potential; use $\mechanical{\Phi}_u$, $d\mechanical{\mathbf v}/dt$ and one symbol $\mechanical{\phi}_l$. **Fixed:** (10.23) uses abs(Phi_u) and dv/dt; text uses phi_l only; table row trimmed
- [[#N3646|N3646]] 10.10.02 Weightlessness in Free Fall and the EEP: The electromagnetic analogue "$\mechanical{F}=-\electric{e}\,d\magnetic{A}_i/(\mechanical{c}\,dt)$" with "$\magnetic{A}_i=\mechanical{v}_i\electric{\phi}/\mechanical{c}$" is Gaussian; in SI it is $\mechanical{F}=-\electric{e}\,d\magnetic{A}_i/dt$ with $\magnetic{A}_i=\mechanical{v}_i\electric{\phi}/\mechanical{c}^2$. **Partly:** The formulas are consistent Gaussian expressions, not an error; added the label (in Gaussian units)
- [[#N3647|N3647]] 10.10.03 Two Kinds of Gravitational Forces and the Geodesic Principle: Beyond units, the sign is off: with $\mechanical{g}_{0i}=-\mechanical{v}/\mechanical{c}$, $-\mechanical{c}\,d\mechanical{g}_{0i}/dt=+d\mechanical{v}/dt$, not $-d\mechanical{v}/dt$; replace the displayed relation and the note box by $\mechanical{g}_a=-\mechanical{c}\,d\mechanical{g}_{0i}/dt=d\mechanical{v}/dt$ (or define the induced field with the opposite sign explicitly). **Fixed:** Changed to g_a=c dg_0i/dt=-dv/dt (induced field opposes acceleration, as in 10.10.02); stated g_0i=-v/c; note box updated
- [[#N3649|N3649]] 10.11 The EEP and the Time Dilation of Clocks in an Accelerated Frame: With $\mechanical{d}=\mechanical{x}_1-\mechanical{x}_2$ and uniform $\mechanical{\mathbf g}=-\nabla\mechanical{\phi}$ along $x$, $\mechanical{\phi}(\mechanical{x}_1)-\mechanical{\phi}(\mechanical{x}_2)=-\mechanical{g}\mechanical{d}$, so the small-separation form is $\Delta T=-T\mechanical{g}\mechanical{d}/\mechanical{c}^2$ unless $\mechanical{d}$ is defined as the height of C1 above C2 against the field; fix so the higher clock runs faster. **Fixed:** Defined x upward against the field so phi(x1)-phi(x2)=gd and d is the height of C1 above C2; added that the higher clock runs faster; table updated
- [[#N3649|N3649]] 10.11 The EEP and the Time Dilation of Clocks in an Accelerated Frame: The Lorentz factor is written $\signal{\gamma}$; it is a kinematic quantity and should use $\mechanical{\gamma}$ as in the rest of the chapter. **Fixed:** Replaced in text and table
- [[#N3652|N3652]] 10.12.02 Motional Time Dilation in Cosmic Relativity: $\signal{\gamma}$ for the Lorentz factor should be $\mechanical{\gamma}$, consistent with the rest of the vault. **Fixed:** Replaced in equation and table
- [[#N3652|N3652]] 10.12.02 Motional Time Dilation in Cosmic Relativity: "$\energy{\delta E}_g=\mechanical{m}\,\delta\mechanical{\phi}$" wraps the variation operator in the macro and conflicts in sign with $\energy{E}_g=-\mechanical{m}\mechanical{\Phi}_u$; write $\delta\energy{E}_g=-\mechanical{m}\,\delta\mechanical{\phi}$ or state the magnitude convention. **Fixed:** Now delta E_g=-m delta phi with delta outside the macro (text and table)
- [[#N3653|N3653]] 10.12.03 Synchronisation of Clocks in Cosmic Relativity: "uniform to a few microkelvin, ... better than one part in a million" is incorrect: after removing the $3.36\,\unit{mK}$ dipole, intrinsic CMB anisotropies are tens of $\unit{\mu K}$ ($\Delta T/T\sim10^{-5}$, as [[10.04 Physics in the Gravitationally Charged Universe]] says); the current mean is $2.7255\,\unit{K}$. **Fixed:** Kept the source statement and added a correction: after 3.36 mK dipole removal anisotropies are tens of microkelvin, Delta T/T ~ 1e-5 (link to 10.04), mean 2.7255 K; Delta T row added
- [[#N3654|N3654]] 10.12.04 The Addition of Velocities in Cosmic Relativity: $\signal{\gamma}$ for the Lorentz factor should be $\mechanical{\gamma}$. **Fixed:** Replaced all four occurrences
- [[#N3657|N3657]] 10.13.02 The Optical Aberration and the Fresnel Drag: "Refraction reduces the angle by $1/\signal{n}$, so the inferred additional aberration remains $\mechanical{v}/\mechanical{c}$": to go from $\mechanical{v}/(\mechanical{c}\signal{n})$ inside to $\mechanical{v}/\mechanical{c}$ outside, refraction must multiply the angle by $\signal{n}$ (small-angle Snell, $\theta_{\mathrm{out}}=\signal{n}\theta_{\mathrm{in}}$). **Fixed:** Text now says exit refraction multiplies the small angle by n (Snell)
- [[#N3657|N3657]] 10.13.02 The Optical Aberration and the Fresnel Drag: The text calls the relative speeds $\mechanical{c}'\mp\mechanical{v}$, but (10.39) uses $\mechanical{c}/\signal{n}\pm\mechanical{v}/\signal{n}^2$; with (10.38), $\mechanical{c}'-\mechanical{v}=\mechanical{c}/\signal{n}-\mechanical{v}/\signal{n}^2$, so define $\mechanical{c}'_\pm=\mechanical{c}/\signal{n}\pm\mechanical{v}/\signal{n}^2$ explicitly as the apparatus-frame speeds against and along the motion. **Fixed:** Defined c'_+/- = c/n +/- v/n^2 from (10.38) as telescope-frame speeds against and along the motion, with c'-v=c'_- as example
- [[#N3658|N3658]] 10.14 The Unipolar Induction: (10.40) equates a scalar integral of $\electric{i}_1\,d\mechanical{l}\cdot\electric{i}_2$ with the vector $-\electric{q}\mechanical{v}\times\magnetic{\mathbf B}$, while the following text gives the Lorentz force $+\electric{q}\mechanical{v}\times\magnetic{\mathbf B}$; the force on a charge moving near a long wire is $\electric{q}\mechanical{\mathbf v}\times\magnetic{\mathbf B}$ with $\magnetic{B}=\magnetic{\mu}_0\electric{i}/(2\pi\mechanical{r})$. Fix sign and vector form. **Fixed:** (10.40) now F=q v x B with magnitude mu0 i1 q v/(2 pi r) for v parallel to the wire; added a sentence on the source form; table rows include vector F and v
- [[#N3660|N3660]] 10.16 Summary: The summary gives $\mechanical{B}_g=-2\boldsymbol{\Omega}\mechanical{\Phi}_u/\mechanical{c}^2$ whereas [[10.15 Cosmic Relativity and the Spin Angular Momentum]] gives $-2\boldsymbol{\Omega}$; state the normalisation $|\mechanical{\Phi}_u|=\mechanical{c}^2$ or use one form. **Fixed:** Replaced by the 10.15 form B_g=c curl g_0i=-2 Omega and stated that it is the normalised form with g_0i=-v_i/c
- [[#N3660|N3660]] 10.16 Summary: $\signal{\gamma}$ in the scalar and vector potentials should be $\mechanical{\gamma}$. **Fixed:** Replaced in potentials and table

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3624 | [[10 References\|10 References]] | Analyzed | low | no | no | [[#N3624\|View]] |
| N3625 | [[10.00 Cosmic Relativity - The Theory and Its Primary Fundamental Results\|10.00 Cosmic Relativity - The Theory and Its Primary Fundamental Results]] | Analyzed | low | no | no | [[#N3625\|View]] |
| N3626 | [[10.01 The Universe That Determines the Physics of Relativity\|10.01 The Universe That Determines the Physics of Relativity]] | Analyzed | low | yes | no | [[#N3626\|View]] |
| N3627 | [[10.02 A Hypothetical Scenario in Electrodynamics\|10.02 A Hypothetical Scenario in Electrodynamics]] | Analyzed | medium | no | no | [[#N3627\|View]] |
| N3628 | [[10.03 A Theory of Relativity and Dynamics Without Postulates\|10.03 A Theory of Relativity and Dynamics Without Postulates]] | Analyzed | low | no | no | [[#N3628\|View]] |
| N3629 | [[10.04 Physics in the Gravitationally Charged Universe\|10.04 Physics in the Gravitationally Charged Universe]] | Analyzed | medium | no | no | [[#N3629\|View]] |
| N3630 | [[10.05 The Gravitational Foundation of Cosmic Relativity\|10.05 The Gravitational Foundation of Cosmic Relativity]] | Analyzed | high | no | no | [[#N3630\|View]] |
| N3631 | [[10.06 The Primary Results in Cosmic Relativity\|10.06 The Primary Results in Cosmic Relativity]] | Analyzed | low | no | no | [[#N3631\|View]] |
| N3632 | [[10.06.01 The Modification of Duration and Distance\|10.06.01 The Modification of Duration and Distance]] | Analyzed | medium | no | no | [[#N3632\|View]] |
| N3633 | [[10.06.02 Interpretation in Terms of the Gravitational Potentials\|10.06.02 Interpretation in Terms of the Gravitational Potentials]] | Analyzed | medium | yes | no | [[#N3633\|View]] |
| N3634 | [[10.06.03 The Time Dilation of Physical Clocks\|10.06.03 The Time Dilation of Physical Clocks]] | Analyzed | low | no | no | [[#N3634\|View]] |
| N3635 | [[10.06.04 Cosmic Relativity and the Principle of Relativity\|10.06.04 Cosmic Relativity and the Principle of Relativity]] | Analyzed | low | no | no | [[#N3635\|View]] |
| N3636 | [[10.06.05 The Propagation of Light\|10.06.05 The Propagation of Light]] | Analyzed | medium | no | yes | [[#N3636\|View]] |
| N3637 | [[10.07 Cosmic Relativity and Dynamics\|10.07 Cosmic Relativity and Dynamics]] | Analyzed | low | no | no | [[#N3637\|View]] |
| N3638 | [[10.07.01 Laws of Dynamics - Newton's Law of Motion\|10.07.01 Laws of Dynamics - Newton's Law of Motion]] | Analyzed | high | yes | no | [[#N3638\|View]] |
| N3639 | [[10.08 Cosmic Relativity and the Origin of Inertia\|10.08 Cosmic Relativity and the Origin of Inertia]] | Analyzed | low | no | no | [[#N3639\|View]] |
| N3640 | [[10.08.01 Cosmic Relativity and the Inertial Forces\|10.08.01 Cosmic Relativity and the Inertial Forces]] | Analyzed | low | no | no | [[#N3640\|View]] |
| N3641 | [[10.08.02 The Centrifugal Force\|10.08.02 The Centrifugal Force]] | Analyzed | medium | no | yes | [[#N3641\|View]] |
| N3642 | [[10.08.03 The Coriolis Force\|10.08.03 The Coriolis Force]] | Analyzed | high | no | yes | [[#N3642\|View]] |
| N3643 | [[10.09 The Twist in Tropical Cyclones\|10.09 The Twist in Tropical Cyclones]] | Analyzed | medium | yes | yes | [[#N3643\|View]] |
| N3644 | [[10.10 Cosmic Relativity and the Principles of Equivalence\|10.10 Cosmic Relativity and the Principles of Equivalence]] | Analyzed | low | no | no | [[#N3644\|View]] |
| N3645 | [[10.10.01 Newton's Law and the WEP\|10.10.01 Newton's Law and the WEP]] | Analyzed | low | no | no | [[#N3645\|View]] |
| N3646 | [[10.10.02 Weightlessness in Free Fall and the EEP\|10.10.02 Weightlessness in Free Fall and the EEP]] | Analyzed | medium | no | yes | [[#N3646\|View]] |
| N3647 | [[10.10.03 Two Kinds of Gravitational Forces and the Geodesic Principle\|10.10.03 Two Kinds of Gravitational Forces and the Geodesic Principle]] | Analyzed | low | no | no | [[#N3647\|View]] |
| N3648 | [[10.10.04 The Equivalence Principle and Universality of Free Fall\|10.10.04 The Equivalence Principle and Universality of Free Fall]] | Analyzed | low | no | no | [[#N3648\|View]] |
| N3649 | [[10.11 The EEP and the Time Dilation of Clocks in an Accelerated Frame\|10.11 The EEP and the Time Dilation of Clocks in an Accelerated Frame]] | Analyzed | medium | yes | no | [[#N3649\|View]] |
| N3650 | [[10.12 Clocks and Time Dilation in Cosmic Relativity\|10.12 Clocks and Time Dilation in Cosmic Relativity]] | Analyzed | low | no | no | [[#N3650\|View]] |
| N3651 | [[10.12.01 Time Dilation in the STR\|10.12.01 Time Dilation in the STR]] | Analyzed | low | no | no | [[#N3651\|View]] |
| N3652 | [[10.12.02 Motional Time Dilation in Cosmic Relativity\|10.12.02 Motional Time Dilation in Cosmic Relativity]] | Analyzed | medium | no | no | [[#N3652\|View]] |
| N3653 | [[10.12.03 Synchronisation of Clocks in Cosmic Relativity\|10.12.03 Synchronisation of Clocks in Cosmic Relativity]] | Analyzed | low | no | no | [[#N3653\|View]] |
| N3654 | [[10.12.04 The Addition of Velocities in Cosmic Relativity\|10.12.04 The Addition of Velocities in Cosmic Relativity]] | Analyzed | low | no | no | [[#N3654\|View]] |
| N3655 | [[10.13 Cosmic Relativity and the Electrodynamics of Moving Media\|10.13 Cosmic Relativity and the Electrodynamics of Moving Media]] | Analyzed | low | no | no | [[#N3655\|View]] |
| N3656 | [[10.13.01 The Doppler Shift\|10.13.01 The Doppler Shift]] | Analyzed | low | yes | no | [[#N3656\|View]] |
| N3657 | [[10.13.02 The Optical Aberration and the Fresnel Drag\|10.13.02 The Optical Aberration and the Fresnel Drag]] | Analyzed | medium | no | no | [[#N3657\|View]] |
| N3658 | [[10.14 The Unipolar Induction\|10.14 The Unipolar Induction]] | Analyzed | high | no | yes | [[#N3658\|View]] |
| N3659 | [[10.15 Cosmic Relativity and the Spin Angular Momentum\|10.15 Cosmic Relativity and the Spin Angular Momentum]] | Analyzed | low | no | no | [[#N3659\|View]] |
| N3660 | [[10.16 Summary\|10.16 Summary]] | Analyzed | low | no | no | [[#N3660\|View]] |

## Suggestions

### N3624

Note: [[10 References|10 References]]  
Priority: low · Graph: no · Manim: no

Clean reference list with a useful study route; one bibliographic entry is wrong.

- [Correctness] Ref. 7 should read R. A. Lyttleton, H. Bondi, Proc. R. Soc. Lond. A 252, 313–333 (1959) (author is Lyttleton, journal is Proc. Roy. Soc. A, not Proc. Phys. Soc.).

### N3625

Note: [[10.00 Cosmic Relativity - The Theory and Its Primary Fundamental Results|10.00 Cosmic Relativity - The Theory and Its Primary Fundamental Results]]  
Priority: low · Graph: no · Manim: no

Chapter abstract and introduction; readable, with an outdated curvature/density precision figure.

- [Correctness] "density close to critical to about 3%" is outdated: Planck 2018 + BAO give $\Omega_k=0.001\pm0.002$, i.e. flatness to a few tenths of a per cent; update the value or mark it as the source's.
- [Structure] There are two headings ("Lecture account" immediately followed by "Abstract"); drop the empty "Lecture account" heading or nest Abstract/Introduction under it, and add links to the 10.01–10.16 subsections.

### N3626

Note: [[10.01 The Universe That Determines the Physics of Relativity|10.01 The Universe That Determines the Physics of Relativity]]  
Priority: low · Graph: yes · Manim: no

Clear motivational section; the figure caption contradicts the text and current cosmology on the matter-dominated era.

- [Correctness] The Fig. 10.1 caption says "roughly 13 billion years of slowly expanding, matter-dominated history" whereas the text says ten billion; in ΛCDM, matter dominated only until about 9.8 Gyr after the big bang and dark energy has dominated since; align the caption with the text.
- [Graph] Replace or supplement the schematic with a plot of the ΛCDM scale factor $a(t)$ for $H_0=67.7$, $\Omega_m=0.31$, $\Omega_\Lambda=0.69$, $t\in[0,14]\,\unit{Gyr}$, with a log-scale inset marking the last $10^4\,\unit{yr}$ to make "civilisation is negligible" quantitative.

### N3627

Note: [[10.02 A Hypothetical Scenario in Electrodynamics|10.02 A Hypothetical Scenario in Electrodynamics]]  
Priority: medium · Graph: no · Manim: no

Instructive analogy, but the uniform-sphere potential formula is off by a factor of two and the vector potential mixes SI and Gaussian units.

- [Correctness] The potential at the centre of a uniformly charged sphere is $\electric{\phi}_e=3\electric{Q}/(8\pi\electric{\epsilon}_0\mechanical{R})=\electric{q}\mechanical{R}^2/(2\electric{\epsilon}_0)$, not $3\electric{Q}/(4\pi\electric{\epsilon}_0\mechanical{R})$; with $\electric{q}=10^{-59}\,\unit{C/m^3}$ and $\mechanical{R}=10^{26}\,\unit{m}$ this gives about $6\,\unit{kV}$ (order $10^4\,\unit{V}$ still holds).
- [Correctness] $\magnetic{\mathbf A}=\mechanical{\mathbf v}\electric{\phi}/\mechanical{c}$ is the Gaussian-unit form; in the SI units used elsewhere in the note (with $\electric{\epsilon}_0$) it is $\magnetic{\mathbf A}=\mechanical{\mathbf v}\electric{\phi}/\mechanical{c}^2$ in $\unit{V\,s/m}$; fix the formula and the table's "unit convention unspecified".
- [Example] Show the charge-density estimate explicitly: $10^{-27}\,\unit{kg/m^3}/(1.67\times10^{-27}\,\unit{kg})\approx0.6$ protons per $\unit{m^3}$, times $10^{-40}\times1.6\times10^{-19}\,\unit{C}$, giving $\sim10^{-59}\,\unit{C/m^3}$.
- [Intuition] Add the one-line reason why acceleration creates a force: $\electric{\mathbf E}=-\partial\magnetic{\mathbf A}/\partial t=-(\electric{\phi}/\mechanical{c}^2)\,d\mechanical{\mathbf v}/dt$, so the force $\electric{q}\electric{\mathbf E}$ opposes acceleration like an extra inertia $\electric{q}\electric{\phi}/\mechanical{c}^2$; this is the core of the analogy used in later sections.

### N3628

Note: [[10.03 A Theory of Relativity and Dynamics Without Postulates|10.03 A Theory of Relativity and Dynamics Without Postulates]]  
Priority: low · Graph: no · Manim: no

Short programmatic section, clearly written; the interpretation checklist is a good counterweight.

- [Simplify] "Matter and gravity replace space, time, and matter as physical starting points" lists matter on both sides; rephrase as "Matter and its gravity replace empty space and time as starting points".

### N3629

Note: [[10.04 Physics in the Gravitationally Charged Universe|10.04 Physics in the Gravitationally Charged Universe]]  
Priority: medium · Graph: no · Manim: no

Clear contrast of empty and matter-filled backgrounds, but presents a constant potential term as producing observable effects, which is false as written.

- [Correctness] "$\energy{H}=\mechanical{p}^2/(2\mechanical{m})-\mechanical{m}\mechanical{\Phi}_u$ ... Such a Hamiltonian produces observable noninertial effects": a spatially and temporally constant $\mechanical{\Phi}_u$ only shifts $\energy{H}$ by a constant and leaves Hamilton's equations unchanged; say that effects arise only from the velocity-dependent (vector-potential) terms introduced later.
- [Intuition] Add the electromagnetic analogue explicitly: a uniform charge density at rest gives only $\electric{\phi}$; seen by a moving observer it becomes a current density $-\electric{\rho}\mechanical{\mathbf v}$ with a vector potential, which is exactly the "anisotropy" the note describes.
- [Correctness] "CMBR ... synchronised throughout the Universe better than one part in $10^5$" conflates temperature anisotropy ($\Delta T/T\sim10^{-5}$) with timing; converting to time needs $|dT/dt|$ (here $T\propto1/a$), so state it as a temperature uniformity, not a synchronisation accuracy.

### N3630

Note: [[10.05 The Gravitational Foundation of Cosmic Relativity|10.05 The Gravitational Foundation of Cosmic Relativity]]  
Priority: high · Graph: no · Manim: no

The key metric derivation is short and easy to follow, but it transforms in the wrong direction, mislabels the result as the moving-frame metric, and contains a Poisson-equation error and a symbol clash.

- [Correctness] (10.5)–(10.6) declare the primed (moving) interval Minkowskian and rewrite it in unprimed coordinates, so the result is the metric of the moving-frame chart expressed in rest-frame coordinates, not $\mechanical{g}'_{\mu\nu}$; substituting $\mechanical{x}=\mechanical{x}'+\mechanical{v}t'$ into the rest-frame interval (10.3) gives $\mechanical{g}'_{00}=-(1-\mechanical{v}^2/\mechanical{c}^2)$ and $\mechanical{g}'_{0x}=+\mechanical{v}/\mechanical{c}$ (cross term $+2\mechanical{v}\,d\mechanical{x}'dt'$).
- [Correctness] "spatially homogeneous cosmic potential, $\nabla^2\mechanical{\phi}_u=0$" contradicts Poisson's equation $\nabla^2\mechanical{\phi}=4\pi\mechanical{G}\mechanical{\rho}\neq0$ for uniform density; the intended statement is $\nabla\mechanical{\phi}_u=0$ (no local force), which needs the cosmological boundary argument.
- [Correctness] Symbol clash: $\mechanical{\phi}$ is the azimuthal coordinate in (10.1) and $\mechanical{\phi}_u$ the cosmic potential, while $\mechanical{\Phi}_u$ is also the cosmic potential later in the note; use $\mechanical{\Phi}_u$ throughout for the potential.
- [Correctness] "potential scales as $\mechanical{\rho}\mechanical{R}_u^2\propto\mechanical{c}^2(1/t^2)t^2$" drops $\mechanical{G}$; write $\mechanical{\Phi}_u\sim\mechanical{G}\mechanical{\rho}\mechanical{R}_u^2$ with $\mechanical{\rho}\propto1/(\mechanical{G}t^2)$ and $\mechanical{R}_u\propto\mechanical{c}t$, giving $\mechanical{\Phi}_u\propto\mechanical{c}^2$.
- [Simplify] In (10.6) combine $-\mechanical{v}\,d\mechanical{x}\,dt-\mechanical{v}\,dt\,d\mechanical{x}$ into $-2\mechanical{v}\,d\mechanical{x}\,dt$ and state how the off-diagonal component is read off ($2\mechanical{g}_{0x}\mechanical{c}\,dt\,d\mechanical{x}$), so the reader can verify $\mechanical{g}_{0x}=\mp\mechanical{v}/\mechanical{c}$.

### N3631

Note: [[10.06 The Primary Results in Cosmic Relativity|10.06 The Primary Results in Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

Short section hub with a sensible "prediction ledger" check; no change needed beyond navigation.

- [Links] Add links to the five subsections 10.06.01–10.06.05.

### N3632

Note: [[10.06.01 The Modification of Duration and Distance|10.06.01 The Modification of Duration and Distance]]  
Priority: medium · Graph: no · Manim: no

Concise statement of the author's absolute dilation and contraction; the distance argument is compressed to the point of being hard to follow and inherits the metric-direction issue from 10.05.

- [Simplify] Spell out the distance argument in three steps: (1) true round-trip time for a body at relative speed $\mechanical{u}$ is $\mechanical{T}'_0$; (2) the moving clock reads $\sqrt{-\mechanical{g}'_{00}}\,\mechanical{T}'_0$; (3) PoR requires the inferred distance $\mechanical{u}\times$reading$/2$ to equal the rest value, so the physical length must shrink by the same factor. As written the reader cannot see which quantity is held fixed.
- [Correctness] The spatial metric is called $\mechanical{\gamma}_{ab}$, the same letter as the Lorentz factor used in neighbouring notes (10.06.02–10.06.04); rename it (e.g. $h_{ab}$) to avoid a clash in the chapter.
- [Intuition] Note that (10.8) as written contracts every direction equally, whereas the observed (Lorentz) contraction is only along the motion; the transverse case (used in 10.06.05) should be addressed explicitly, since the interpretation section already hints at this.

### N3633

Note: [[10.06.02 Interpretation in Terms of the Gravitational Potentials|10.06.02 Interpretation in Terms of the Gravitational Potentials]]  
Priority: medium · Graph: yes · Manim: no

The shell integral and the invariant (10.12) are correct, but the claimed numerical result $\mechanical{\Phi}_u\approx-\mechanical{c}^2$ hides a factor of order 0.75.

- [Example] Show the number: with $\mechanical{\rho}_c=3\mechanical{H}_0^2/(8\pi\mechanical{G})$ and $\mechanical{R}_u=\mechanical{c}\mechanical{T}_u$, (10.9) gives $|\mechanical{\Phi}_u|=\tfrac34(\mechanical{H}_0\mechanical{T}_u)^2\mechanical{c}^2\approx0.73\,\mechanical{c}^2$ for $\mechanical{H}_0=70$ and $13.8\,\unit{Gyr}$; state that "$\approx$" means order unity.
- [Simplify] Verify (10.12) in one line for the reader: $\mechanical{\gamma}^2\mechanical{\Phi}_u^2-\mechanical{\gamma}^2\mechanical{v}^2\mechanical{\Phi}_u^2/\mechanical{c}^2=\mechanical{\Phi}_u^2$, and point out it is the Lorentz-invariant norm of a four-vector $(\mechanical{\Phi},\mechanical{\mathbf A})$.
- [Graph] Plot $|\mechanical{\Phi}_u|/\mechanical{c}^2=2\pi\mechanical{G}\mechanical{\rho}_c\mechanical{R}^2/\mechanical{c}^2$ versus cutoff radius $\mechanical{R}\in[1,20]\,\unit{Gly}$, with horizontal line at 1, to show the cutoff sensitivity stated in "Interpretation and checks".
- [Correctness] The sentence "The source also writes $\mechanical{A}_i=\mechanical{g}_{0i}/\mechanical{g}_{00}$" gives, with 10.05's components, $(\mechanical{v}_i/\mechanical{c})\mechanical{\gamma}^2$, which is neither dimensionally nor in its $\mechanical{\gamma}$ power equal to (10.11); state this mismatch explicitly in the note box.

### N3634

Note: [[10.06.03 The Time Dilation of Physical Clocks|10.06.03 The Time Dilation of Physical Clocks]]  
Priority: low · Graph: no · Manim: no

Short and clear statement of the author's central identification; consistent with (10.12) and the zero-speed limit.

- [Intuition] Compare explicitly with ordinary gravitational redshift, $\Delta\mechanical{T}/\mechanical{T}\approx1+\Delta\mechanical{\Phi}/\mechanical{c}^2$ (additive, weak field), versus the multiplicative ratio $\mechanical{\Phi}_0/\mechanical{\Phi}_v$ used here, so the reader sees that the rule is a new assumption, not the GR weak-field formula.
- [Correctness] The symbol $\mechanical{\lambda}_r$ is introduced for $1/\mechanical{\gamma}$ and never used again; drop it or use it in (10.13).

### N3635

Note: [[10.06.04 Cosmic Relativity and the Principle of Relativity|10.06.04 Cosmic Relativity and the Principle of Relativity]]  
Priority: low · Graph: no · Manim: no

Clear argument that uniform potentials are internally undetectable, with a good interpretation caveat.

- [Example] Add the contrast case where a uniform vector potential is detectable: a rotating frame (Sagnac), where $\oint\mechanical{\mathbf A}\cdot d\mechanical{\mathbf l}\neq0$ because $\nabla\times\mechanical{\mathbf A}\neq0$; this links forward to [[11.10.02 The Experiments by G. Sagnac]].

### N3636

Note: [[10.06.05 The Propagation of Light|10.06.05 The Propagation of Light]]  
Priority: medium · Graph: no · Manim: yes

The perpendicular-light argument is muddled: the round-trip time is misstated and the note fails to show that $\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$ and $\mechanical{c}\pm\mechanical{v}$ are simply the Galilean vector rule.

- [Correctness] "total duration $\mechanical{T}=\mechanical{L}/\mechanical{c}$" for a two-way trip over $\mechanical{L}_x$ should be $2\mechanical{L}/\mechanical{c}$ (and (10.14) correspondingly $2\mechanical{L}/\mechanical{c}'$); also unify $\mechanical{L}_x$ and $\mechanical{L}$.
- [Simplify] Resolve the note box: in the cosmic frame the round trip takes $2\mechanical{L}/(\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2})$; the moving clock runs slow by $\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$, so it reads $2\mechanical{L}/\mechanical{c}$, unchanged, which is the PoR statement. The two printed factors are coordinate time versus clock reading, not a contradiction.
- [Intuition] Point out that $\mechanical{c}'=\mechanical{c}\sqrt{1-\mechanical{v}^2/\mechanical{c}^2}$ transverse and $\mechanical{c}\mp\mechanical{v}$ longitudinal are both $|\mechanical{\mathbf c}-\mechanical{\mathbf v}|$ for Galilean vector subtraction; this replaces the claim in "Interpretation and checks" that they are unrelated constructions.
- [Manim] Animate a light pulse bouncing transversely in an apparatus moving at $\mechanical{v}$ through the cosmic frame: diagonal path in the cosmic frame, vertical path in the apparatus frame with reduced relative speed, plus the slowed clock, ending with equal clock readings at $\mechanical{v}=0$ and $\mechanical{v}\neq0$.

### N3637

Note: [[10.07 Cosmic Relativity and Dynamics|10.07 Cosmic Relativity and Dynamics]]  
Priority: low · Graph: no · Manim: no

Short section introduction; the interpretation checklist is apt.

- [Links] Add a link to [[10.07.01 Laws of Dynamics - Newton's Law of Motion]].

### N3638

Note: [[10.07.01 Laws of Dynamics - Newton's Law of Motion|10.07.01 Laws of Dynamics - Newton's Law of Motion]]  
Priority: high · Graph: yes · Manim: no

Central derivation of the chapter, but (10.16)–(10.18) contain sign errors and an extra $\mechanical{\gamma}$, so the reader cannot follow how $\mechanical{F}=\mechanical{\gamma}^3\mechanical{m}\mechanical{a}$ arises.

- [Correctness] In (10.16), $\frac1{\mechanical{c}}\frac{d}{dt}(\mechanical{m}\mechanical{A}'_i)=+\frac{d}{dt}(\mechanical{\gamma}\mechanical{m}\mechanical{v}_i\mechanical{\Phi}_u/\mechanical{c}^2)$ with $\mechanical{A}'_i=\mechanical{\gamma}\mechanical{v}_i\mechanical{\Phi}_u/\mechanical{c}$, yet it is equated to $-\frac{d}{dt}(\ldots)$, which is then set equal to $+\frac{\mechanical{\Phi}_u}{\mechanical{c}^2}(\ldots)$; at least two signs are inconsistent. Write $\mechanical{F}_{\mathrm{react}}=-\frac{d}{dt}(\mechanical{\gamma}\mechanical{m}\mechanical{v}_i|\mechanical{\Phi}_u|/\mechanical{c}^2)$ and the applied force as its negative.
- [Correctness] (10.17) "$\frac{\mechanical{\Phi}_u}{\mechanical{c}^2}\mechanical{\gamma}\mechanical{m}\frac{d\mechanical{v}}{dt}=\frac{\mechanical{\Phi}_u}{\mechanical{c}^2}\mechanical{\gamma}\frac{d\mechanical{p}}{dt}$" has an extra $\mechanical{\gamma}$: for transverse acceleration $d\mechanical{p}/dt=\mechanical{\gamma}\mechanical{m}\,d\mechanical{v}/dt$, so the right side should be $(\mechanical{\Phi}_u/\mechanical{c}^2)\,d\mechanical{p}/dt$.
- [Simplify] Show the longitudinal step explicitly: $\mechanical{\gamma}\mechanical{m}\mechanical{a}+\mechanical{\gamma}^3\mechanical{m}\mechanical{v}^2\mechanical{a}/\mechanical{c}^2=\mechanical{\gamma}^3\mechanical{m}\mechanical{a}[(1-\mechanical{v}^2/\mechanical{c}^2)+\mechanical{v}^2/\mechanical{c}^2]=\mechanical{\gamma}^3\mechanical{m}\mechanical{a}$, and drop the unexplained sign flip at the end of (10.18) (the existing note box can then shrink to one line on $|\mechanical{\Phi}_u|$).
- [Graph] Plot longitudinal and transverse effective masses $\mechanical{\gamma}^3\mechanical{m}$ and $\mechanical{\gamma}\mechanical{m}$ versus $\mechanical{v}/\mechanical{c}\in[0,0.95]$ to make the direction-dependent inertial response concrete.
- [Correctness] "$\mechanical{g}_{0i}=-\mechanical{v}_i/\mechanical{c}=\mechanical{A}_i$" conflicts with (10.11) $\mechanical{A}_i=-\mechanical{\gamma}\mechanical{v}_i\mechanical{\Phi}_u/\mechanical{c}$ used earlier in the same note ($\mechanical{A}'_i$); state the normalisation $\mechanical{\Phi}_u/\mechanical{c}^2=1$, $\mechanical{\gamma}\approx1$ under which they agree, or use distinct symbols.

### N3639

Note: [[10.08 Cosmic Relativity and the Origin of Inertia|10.08 Cosmic Relativity and the Origin of Inertia]]  
Priority: low · Graph: no · Manim: no

Short, clear statement of the inertia hypothesis with a good dimension check.

- [Example] Relate the approximation $\mechanical{m}_i=\mechanical{G}\mechanical{M}\mechanical{m}/(\mechanical{R}\mechanical{c}^2)$ to (10.9): with $\mechanical{M}=\tfrac43\pi\mechanical{\rho}\mechanical{R}^3$, $2\pi\mechanical{G}\mechanical{\rho}\mechanical{R}^2=\tfrac32\mechanical{G}\mechanical{M}/\mechanical{R}$, so the two estimates differ by a factor 3/2; state this so "approximately" is quantified.

### N3640

Note: [[10.08.01 Cosmic Relativity and the Inertial Forces|10.08.01 Cosmic Relativity and the Inertial Forces]]  
Priority: low · Graph: no · Manim: no

Short section introduction; no change needed beyond navigation.

- [Links] Add links to [[10.08.02 The Centrifugal Force]] and [[10.08.03 The Coriolis Force]].

### N3641

Note: [[10.08.02 The Centrifugal Force|10.08.02 The Centrifugal Force]]  
Priority: medium · Graph: no · Manim: yes

The broken cross-product chain in (10.21) is correctly flagged, but the note never gives the correct short derivation, leaving the section without usable mathematics.

- [Simplify] Replace (10.21) with the correct chain: $d\mechanical{\mathbf v}/dt=\mechanical{v}\,d\hat{\mathbf v}/dt=(\mechanical{v}^2/\mechanical{r})\hat{\mathbf n}$, so $\mechanical{F}_g=-(|\mechanical{\Phi}_u|/\mechanical{c}^2)\mechanical{\gamma}\mechanical{m}(\mechanical{v}^2/\mechanical{r})\hat{\mathbf n}$, i.e. magnitude $\mechanical{\gamma}\mechanical{m}\mechanical{v}^2/\mechanical{r}$ pointing outward; keep the source chain only in the note box.
- [Correctness] (10.20) carries the sign $-\mechanical{\Phi}_u/\mechanical{c}^2$ while (10.10) gives $\mechanical{\Phi}_u\approx-\mechanical{c}^2$, which would make the reaction point inward (centripetal); use $|\mechanical{\Phi}_u|$ so the result is outward.
- [Manim] Animate a mass on a circular path with the velocity arrow rotating, the inward rate of change $d\mechanical{\mathbf v}/dt$, and the opposing outward reaction, to show centrifugal force as reaction to the change of velocity direction.

### N3642

Note: [[10.08.03 The Coriolis Force|10.08.03 The Coriolis Force]]  
Priority: high · Graph: no · Manim: yes

Engaging current–current narrative, but the Coriolis force is given with the wrong sign throughout, and (10.22) mixes $1/\mechanical{c}$ and $1/\mechanical{c}^2$.

- [Correctness] The Coriolis force in a frame rotating at $\mechanical{\boldsymbol\Omega}$ is $\mechanical{\mathbf F}=-2\mechanical{m}\mechanical{\boldsymbol\Omega}\times\mechanical{\mathbf u}=+2\mechanical{m}\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$; the note's $-2\mechanical{m}_i\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$ (in (10.22), the text and Fig. 10.4 caption, and $\mechanical{\mathbf a}_k=-2\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$) has the opposite sign and would deflect northern-hemisphere winds to the left. The note's own "Interpretation and checks" states the correct form.
- [Correctness] In (10.22), $\mechanical{\mathbf A}_g=-\mechanical{\gamma}\mechanical{\Phi}_u\mechanical{\mathbf v}/\mechanical{c}$ gives $\nabla\times\mechanical{\mathbf A}_g=-(\mechanical{\gamma}\mechanical{\Phi}_u/\mechanical{c})\nabla\times\mechanical{\mathbf v}$, but the next step writes $\mechanical{\gamma}\mechanical{\Phi}_u/\mechanical{c}^2$; fix the power of $\mechanical{c}$ (and the coupling's units) and show $\nabla\times(\mechanical{\boldsymbol\Omega}\times\mechanical{\mathbf r})=2\mechanical{\boldsymbol\Omega}$ explicitly.
- [Intuition] Add a one-line check that the corrected sign deflects motion to the right of the velocity for counterclockwise rotation (northern hemisphere), matching 10.09.
- [Manim] Animate a puck moving straight in the inertial frame while the turntable rotates beneath it, then switch to the rotating view showing the curved path, with the Coriolis arrow $2\mechanical{m}\mechanical{\mathbf u}\times\mechanical{\boldsymbol\Omega}$ attached.

### N3643

Note: [[10.09 The Twist in Tropical Cyclones|10.09 The Twist in Tropical Cyclones]]  
Priority: medium · Graph: yes · Manim: yes

Correct hemispheric chiralities and correct Eötvös-effect direction for equatorial winds, but the field component at latitude loses its factor 2 and an undefined $\mechanical{\Phi}_i$ appears.

- [Correctness] "Its component at latitude $\mechanical{\lambda}$ is $\mechanical{\Omega}\sin\mechanical{\lambda}$" contradicts $\mechanical{\mathbf B}_g\approx-2\mechanical{\boldsymbol\Omega}$ and the caption; the vertical component is $2\mechanical{\Omega}\sin\mechanical{\lambda}$ (the Coriolis parameter $f$).
- [Correctness] $\mechanical{\Phi}_i$ in the $\mechanical{\mathbf B}_g$ formula is undefined (presumably $\mechanical{\Phi}_u$), and the force $-2\mechanical{m}\mechanical{\mathbf v}\times\mechanical{\boldsymbol\Omega}\sin\mechanical{\lambda}$ inherits the sign error of 10.08.03; the standard horizontal Coriolis force is $-\mechanical{m}f\,\hat{\mathbf z}\times\mechanical{\mathbf v}$ with $f=2\mechanical{\Omega}\sin\mechanical{\lambda}$.
- [Example] Give the magnitude: at $20^\circ$ N, $f=5\times10^{-5}\,\unit{s^{-1}}$; for $10\,\unit{m/s}$ wind the Coriolis acceleration is $5\times10^{-4}\,\unit{m/s^2}$, and the Rossby number $U/(fL)$ explains why cyclones (L ~ 500 km) feel it but sinks do not.
- [Graph] Plot $f(\mechanical{\lambda})=2\mechanical{\Omega}\sin\mechanical{\lambda}$ for $\mechanical{\lambda}\in[-90^\circ,90^\circ]$, shading the $\pm5^\circ$ band where tropical cyclones rarely form.
- [Manim] Animate air parcels converging radially on a low-pressure centre in each hemisphere, deflected right (north) or left (south), forming counterclockwise and clockwise spirals.

### N3644

Note: [[10.10 Cosmic Relativity and the Principles of Equivalence|10.10 Cosmic Relativity and the Principles of Equivalence]]  
Priority: low · Graph: no · Manim: no

Short section introduction, clear and with a good caveat on conditional results.

- [Links] Add links to the four subsections 10.10.01–10.10.04.

### N3645

Note: [[10.10.01 Newton's Law and the WEP|10.10.01 Newton's Law and the WEP]]  
Priority: low · Graph: no · Manim: no

Short and clear; the interpretation section correctly shows why Newton's law alone does not imply WEP.

- [Example] Make the contrast concrete with a formula: in a field $\electric{\mathbf E}$ the acceleration is $(\electric{q}/\mechanical{m}_i)\electric{\mathbf E}$ while in gravity it is $(\mechanical{m}_g/\mechanical{m}_i)\mechanical{\mathbf g}$; the author's claim amounts to $\mechanical{m}_i\propto\mechanical{m}_g$ universally, which a test with $\electric{\mathbf E}$ measures only if $\mechanical{m}_g$ is known independently.

### N3646

Note: [[10.10.02 Weightlessness in Free Fall and the EEP|10.10.02 Weightlessness in Free Fall and the EEP]]  
Priority: medium · Graph: no · Manim: yes

Readable two-force account of free fall, but signs and symbols in (10.23)–(10.24) are inconsistent, which the note only flags.

- [Correctness] (10.24) "$-\mechanical{m}\mechanical{\mathbf g}=-\mechanical{m}\nabla\mechanical{\phi}_l$" contradicts the note's own $\mechanical{\mathbf g}=-\nabla\mechanical{\phi}$; the gravitational force is $\mechanical{m}\mechanical{\mathbf g}=-\mechanical{m}\nabla\mechanical{\phi}_l=\mechanical{m}_i\mechanical{\mathbf a}$, so free fall gives $\mechanical{\mathbf a}=\mechanical{\mathbf g}$ (not $\mechanical{\mathbf g}=-\mechanical{\mathbf a}$), and the induced force (10.23) is $-\mechanical{m}_i\mechanical{\mathbf a}=-\mechanical{m}_i\mechanical{\mathbf g}$. Correct the chain instead of retaining it.
- [Correctness] (10.23) uses $\mechanical{\Phi}$ without subscript and a partial derivative $\partial\mechanical{\mathbf v}/\partial t$ of a particle velocity, and the text uses $\mechanical{\phi}$ and $\mechanical{\phi}_l$ for the same local potential; use $\mechanical{\Phi}_u$, $d\mechanical{\mathbf v}/dt$ and one symbol $\mechanical{\phi}_l$.
- [Correctness] The electromagnetic analogue "$\mechanical{F}=-\electric{e}\,d\magnetic{A}_i/(\mechanical{c}\,dt)$" with "$\magnetic{A}_i=\mechanical{v}_i\electric{\phi}/\mechanical{c}$" is Gaussian; in SI it is $\mechanical{F}=-\electric{e}\,d\magnetic{A}_i/dt$ with $\magnetic{A}_i=\mechanical{v}_i\electric{\phi}/\mechanical{c}^2$.
- [Manim] Animate a falling box near Earth with two arrows on an inner test mass (local gravity down, induced cosmic force up) cancelling at the centre, then show two separated masses drifting due to the tidal gradient, matching Fig. 10.7 and the interpretation check.

### N3647

Note: [[10.10.03 Two Kinds of Gravitational Forces and the Geodesic Principle|10.10.03 Two Kinds of Gravitational Forces and the Geodesic Principle]]  
Priority: low · Graph: no · Manim: no

Clear distinction between gradient and induction-type gravity; the unit issue in $\mechanical{g}_a=-d\mechanical{g}_{0i}/dt$ is properly flagged.

- [Correctness] Beyond units, the sign is off: with $\mechanical{g}_{0i}=-\mechanical{v}/\mechanical{c}$, $-\mechanical{c}\,d\mechanical{g}_{0i}/dt=+d\mechanical{v}/dt$, not $-d\mechanical{v}/dt$; replace the displayed relation and the note box by $\mechanical{g}_a=-\mechanical{c}\,d\mechanical{g}_{0i}/dt=d\mechanical{v}/dt$ (or define the induced field with the opposite sign explicitly).
- [Simplify] "The geodesic equation follows from the postulate that force-free inertial motion obeys this relation" is circular; say that GR obtains it from $\ddot{\mechanical{x}}=0$ in a local inertial frame plus general covariance.

### N3648

Note: [[10.10.04 The Equivalence Principle and Universality of Free Fall|10.10.04 The Equivalence Principle and Universality of Free Fall]]  
Priority: low · Graph: no · Manim: no

Clear algebraic illustration; the mass-label inconsistency is flagged, and the cancellation is easy to follow.

- [Simplify] Replace $\mechanical{m}_g$ in (10.28) with $\mechanical{m}_1$, $\mechanical{m}_2$ directly and drop the note box; then (10.29) reads cleanly.
- [Simplify] Say what "$\mechanical{k}\mechanical{G}=1$" achieves: the common acceleration $\mechanical{M}/(\mechanical{R}^2\mechanical{k})$ equals $\mechanical{G}\mechanical{M}/\mechanical{R}^2$ for the reference coupling, independent of $\mechanical{G}_n$.

### N3649

Note: [[10.11 The EEP and the Time Dilation of Clocks in an Accelerated Frame|10.11 The EEP and the Time Dilation of Clocks in an Accelerated Frame]]  
Priority: medium · Graph: yes · Manim: no

Clearly states the author's falsifiable prediction, but the sign of the small-separation formula is ambiguous and $\mechanical{\gamma}$ uses the wrong semantic macro.

- [Correctness] With $\mechanical{d}=\mechanical{x}_1-\mechanical{x}_2$ and uniform $\mechanical{\mathbf g}=-\nabla\mechanical{\phi}$ along $x$, $\mechanical{\phi}(\mechanical{x}_1)-\mechanical{\phi}(\mechanical{x}_2)=-\mechanical{g}\mechanical{d}$, so the small-separation form is $\Delta T=-T\mechanical{g}\mechanical{d}/\mechanical{c}^2$ unless $\mechanical{d}$ is defined as the height of C1 above C2 against the field; fix so the higher clock runs faster.
- [Correctness] The Lorentz factor is written $\signal{\gamma}$; it is a kinematic quantity and should use $\mechanical{\gamma}$ as in the rest of the chapter.
- [Graph] Plot the fractional rate difference $\mechanical{g}\mechanical{d}/\mechanical{c}^2$ versus separation $\mechanical{d}\in[0,10]\,\unit{m}$ for $\mechanical{g}=9.81$ and $100\,\unit{m/s^2}$, with the $10^{-18}$ level of current optical clocks marked, to show what the proposed accelerated-frame test would need.
- [Intuition] Add the standard Rindler result (rate ratio $1+\mechanical{a}\mechanical{d}/\mechanical{c}^2$ between front and back clocks of an accelerating rocket, obtainable from the Doppler shift of light sent along the rocket) so the reader sees exactly what the author's "no relative dilation" contradicts.

### N3650

Note: [[10.12 Clocks and Time Dilation in Cosmic Relativity|10.12 Clocks and Time Dilation in Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

Philosophical section on time as comparison of material processes; clear, no technical content to correct.

- [Links] Add links to the four subsections 10.12.01–10.12.04.

### N3651

Note: [[10.12.01 Time Dilation in the STR|10.12.01 Time Dilation in the STR]]  
Priority: low · Graph: no · Manim: no

Clear summary of the author's critique with a balanced interpretation section.

- [Example] Add a concrete standard case the "kinematic" description predicts: CERN muon storage ring ($\mechanical{\gamma}=29.3$, lab lifetime $64.4\,\unit{\mu s}$ versus $2.197\,\unit{\mu s}$ at rest), so the reader sees what any alternative must reproduce.

### N3652

Note: [[10.12.02 Motional Time Dilation in Cosmic Relativity|10.12.02 Motional Time Dilation in Cosmic Relativity]]  
Priority: medium · Graph: no · Manim: no

Clear restatement of the author's clock mechanism, with a dimension issue correctly flagged; a macro misuse and a sign/notation issue remain.

- [Correctness] $\signal{\gamma}$ for the Lorentz factor should be $\mechanical{\gamma}$, consistent with the rest of the vault.
- [Correctness] "$\energy{\delta E}_g=\mechanical{m}\,\delta\mechanical{\phi}$" wraps the variation operator in the macro and conflicts in sign with $\energy{E}_g=-\mechanical{m}\mechanical{\Phi}_u$; write $\delta\energy{E}_g=-\mechanical{m}\,\delta\mechanical{\phi}$ or state the magnitude convention.
- [Simplify] Replace the note box by writing the GR result in its correct form $\delta t/t=\delta\mechanical{\phi}/\mechanical{c}^2$ directly.
- [Intuition] In $\signal{\varphi}=T\energy{E}_s\mechanical{\Phi}_u/(\energy{\hbar}\mechanical{c}^2)$, note that with $|\mechanical{\Phi}_u|=\mechanical{c}^2$ it reduces to the usual $\energy{E}_sT/\energy{\hbar}$, which is what keeps the proposal consistent with ordinary atomic-clock operation.

### N3653

Note: [[10.12.03 Synchronisation of Clocks in Cosmic Relativity|10.12.03 Synchronisation of Clocks in Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

Clear account of the proposed cosmic clock, but the CMB uniformity figure is wrong by an order of magnitude.

- [Correctness] "uniform to a few microkelvin, ... better than one part in a million" is incorrect: after removing the $3.36\,\unit{mK}$ dipole, intrinsic CMB anisotropies are tens of $\unit{\mu K}$ ($\Delta T/T\sim10^{-5}$, as [[10.04 Physics in the Gravitationally Charged Universe]] says); the current mean is $2.7255\,\unit{K}$.
- [Example] Add the conversion the interpretation section asks for: $T\propto1/a$ gives $|\dot T/T|=H_0\approx7\times10^{-11}\,\unit{yr^{-1}}$, so a $10^{-5}$ temperature resolution corresponds to about $1.4\times10^5\,\unit{yr}$ of cosmic time, which shows how coarse this "clock" is.

### N3654

Note: [[10.12.04 The Addition of Velocities in Cosmic Relativity|10.12.04 The Addition of Velocities in Cosmic Relativity]]  
Priority: low · Graph: no · Manim: no

Algebra of (10.32)–(10.33) checks and recovers the relativistic addition law; clear and compact.

- [Correctness] $\signal{\gamma}$ for the Lorentz factor should be $\mechanical{\gamma}$.
- [Example] Add the light-speed check explicitly: $\mechanical{u}=\mechanical{c}$ gives $\mechanical{u}_a=\mechanical{c}-\mechanical{v}$ (the Galilean relative speed the author predicts) and $\mechanical{w}=\mechanical{c}$; this ties the note to [[10.06.05 The Propagation of Light]].

### N3655

Note: [[10.13 Cosmic Relativity and the Electrodynamics of Moving Media|10.13 Cosmic Relativity and the Electrodynamics of Moving Media]]  
Priority: low · Graph: no · Manim: no

Short section introduction with valid links to Chapters 3 and 4.

- [Links] Add links to the subsections [[10.13.01 The Doppler Shift]] and [[10.13.02 The Optical Aberration and the Fresnel Drag]].

### N3656

Note: [[10.13.01 The Doppler Shift|10.13.01 The Doppler Shift]]  
Priority: low · Graph: yes · Manim: no

Formulas (10.34)–(10.36) are correct (the forward-direction CMB temperature equals the standard $\thermal{T}_0\sqrt{(1+\beta)/(1-\beta)}$), but the sign convention of $\pm$ is not stated.

- [Simplify] State the sign convention under (10.34) and (10.35) (upper sign for source receding and observer approaching), and note that the two agree at first order and differ only at second order.
- [Graph] Plot $\thermal{T}(\theta)=\thermal{T}_0\sqrt{1-\beta^2}/(1-\beta\cos\theta)$ for $\beta=1.23\times10^{-3}$ ($370\,\unit{km/s}$), $\theta\in[0,\pi]$, giving the $\pm3.36\,\unit{mK}$ dipole; this generalises (10.36) to all directions as the interpretation section suggests.

### N3657

Note: [[10.13.02 The Optical Aberration and the Fresnel Drag|10.13.02 The Optical Aberration and the Fresnel Drag]]  
Priority: medium · Graph: no · Manim: no

Fresnel formula and drag-split algebra are correct, but the final aberration step misstates the effect of refraction and the relative-speed expressions are inconsistent.

- [Correctness] "Refraction reduces the angle by $1/\signal{n}$, so the inferred additional aberration remains $\mechanical{v}/\mechanical{c}$": to go from $\mechanical{v}/(\mechanical{c}\signal{n})$ inside to $\mechanical{v}/\mechanical{c}$ outside, refraction must multiply the angle by $\signal{n}$ (small-angle Snell, $\theta_{\mathrm{out}}=\signal{n}\theta_{\mathrm{in}}$).
- [Correctness] The text calls the relative speeds $\mechanical{c}'\mp\mechanical{v}$, but (10.39) uses $\mechanical{c}/\signal{n}\pm\mechanical{v}/\signal{n}^2$; with (10.38), $\mechanical{c}'-\mechanical{v}=\mechanical{c}/\signal{n}-\mechanical{v}/\signal{n}^2$, so define $\mechanical{c}'_\pm=\mechanical{c}/\signal{n}\pm\mechanical{v}/\signal{n}^2$ explicitly as the apparatus-frame speeds against and along the motion.
- [Simplify] Use $\electric{\varepsilon}_r=\signal{n}^2$ throughout instead of the note box on absolute versus relative permittivity.
- [Example] Add Fizeau numbers: water $\signal{n}=1.333$, drag coefficient $1-1/\signal{n}^2=0.437$, flow $7\,\unit{m/s}$ changes the light speed by about $3.1\,\unit{m/s}$.

### N3658

Note: [[10.14 The Unipolar Induction|10.14 The Unipolar Induction]]  
Priority: high · Graph: no · Manim: yes

Rich historical material with well-chosen quotations, but very long, with many dimensionally inconsistent source formulas retained only as note boxes and no standard-physics benchmark for comparison.

- [Structure] Split into (a) history and experiments (Faraday, Barnett, Kennard) and (b) the author's two-mechanism model; the 23 kB note mixes both and the reader loses the experimental facts.
- [Correctness] (10.40) equates a scalar integral of $\electric{i}_1\,d\mechanical{l}\cdot\electric{i}_2$ with the vector $-\electric{q}\mechanical{v}\times\magnetic{\mathbf B}$, while the following text gives the Lorentz force $+\electric{q}\mechanical{v}\times\magnetic{\mathbf B}$; the force on a charge moving near a long wire is $\electric{q}\mechanical{\mathbf v}\times\magnetic{\mathbf B}$ with $\magnetic{B}=\magnetic{\mu}_0\electric{i}/(2\pi\mechanical{r})$. Fix sign and vector form.
- [Simplify] The contraction factors $(\mechanical{v}\pm\mechanical{v}_i)^2/(2\mechanical{c}^2)$ give the stated differential $\pm\electric{\lambda}\mechanical{v}\mechanical{v}_i/\mechanical{c}^2$ only after subtracting the common $(\mechanical{v}^2+\mechanical{v}_i^2)/(2\mechanical{c}^2)$; show this step.
- [Intuition] Add the standard account for comparison: the rotating-disc EMF is $\tfrac12\magnetic{B}\signal{\omega}R^2$ from $\int(\mechanical{\mathbf v}\times\magnetic{\mathbf B})\cdot d\mechanical{\mathbf l}$ along the moving conductor in the lab frame, and rotating an axisymmetric magnet does not change its field; this lets the reader judge the author's alternative.
- [Example] Give a number for Faraday's disc: $\magnetic{B}=0.1\,\unit{T}$, $R=0.1\,\unit{m}$, $3000\,\unit{rpm}$ gives about $0.16\,\unit{V}$.
- [Manim] Animate the three Faraday configurations (disc rotates, magnet rotates, both rotate) with the galvanometer reading, highlighting that only conductor rotation matters.

### N3659

Note: [[10.15 Cosmic Relativity and the Spin Angular Momentum|10.15 Cosmic Relativity and the Spin Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Clear overview of the spin analogy; units issues are flagged and the $\mechanical{B}_g=-2\boldsymbol{\Omega}$ step checks.

- [Simplify] "The exact spin coupling is $\mechanical{\mathbf s}\cdot\mechanical{\mathbf B}_g/2$, with an additional factor of two" is confusing; state that with $\mechanical{\mathbf B}_g=-2\boldsymbol{\Omega}$ it gives $-\mechanical{\mathbf s}\cdot\boldsymbol{\Omega}$, the standard spin–rotation (Mashhoon) coupling.
- [Example] Make the Beth experiment [25] concrete: each photon carries $\hbar$, so a circularly polarised beam of power $P$ and angular frequency $\omega$ delivers torque $P/\omega$.

### N3660

Note: [[10.16 Summary|10.16 Summary]]  
Priority: low · Graph: no · Manim: no

Faithful, clearly attributed chapter summary; two normalisation/notation inconsistencies with the body notes.

- [Correctness] The summary gives $\mechanical{B}_g=-2\boldsymbol{\Omega}\mechanical{\Phi}_u/\mechanical{c}^2$ whereas [[10.15 Cosmic Relativity and the Spin Angular Momentum]] gives $-2\boldsymbol{\Omega}$; state the normalisation $|\mechanical{\Phi}_u|=\mechanical{c}^2$ or use one form.
- [Correctness] $\signal{\gamma}$ in the scalar and vector potentials should be $\mechanical{\gamma}$.
