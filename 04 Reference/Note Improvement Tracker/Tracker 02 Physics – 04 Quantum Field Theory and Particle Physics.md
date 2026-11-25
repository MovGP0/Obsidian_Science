---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics"
---

> [!TLDR]
> This note tracks the review of the 4 notes in `02 Physics/04 Quantum Field Theory and Particle Physics`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 9 possible errors or notation conflicts. 9 of them are verified (8 fixed, 1 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3252|N3252]] Nuclear and quantum statistics review calculations: The physical-quantities table lists symbols the note does not use with those meanings: $F$ as Faraday constant (the note uses $F_G$, $F_C$ for forces and $F(v)$ for a density), $R$ as activity (the note uses $R$ for nuclear radius, interaction range, and $3R$ gas constant), $T$ "determines the blackbody spectrum", and $\lambda$ only as decay constant (the note uses $\lambda=m/(2k_BT)$ and de Broglie wavelength); rebuild the table from the symbols actually used ($A$, $Z$, $N$, $L$, $m_\ell$, $k_B$, $g(E)$, $f$, $R_{21}$, $a_0$, $C_V$, $N_A$, $R$, $F_G$, $F_C$). **Fixed:** Rebuilt the table from the symbols the note uses (A, Z, N, N_tot, masses, L, m_l, E, T, k_B, f, g(E), n(E), F(v), C_F, lambda as exponent coefficient, P, V, R_21, a_0, C_V molar, U, N_A, R gas constant, B, nuclear radius/range R, d, F_G, F_C, e, G, k_e)
- [[#N3252|N3252]] Nuclear and quantum statistics review calculations: Symbol clashes: $A$ is mass number and also the normalization constant in $f_{\mathrm{MB}}$ and $F(v)=Av^3e^{-\lambda v^2}$; $N$ is neutron number and particle number in $P=(2/3)N\langle E\rangle/V$; rename the normalization constants (e.g. $C$) and the particle count. **Fixed:** Renamed f_MB normalization to C_MB, F(v) normalization to C_F, and the gas particle count to N_tot in the pressure relation and the mean-energy sentence
- [[#N3254|N3254]] Nuclear mass, decay channels, and dating problems: Neutron-discovery sketch: the recoil protons from paraffin had energies up to about 5.7 MeV (Chadwick 1932), not "5.7 keV"; note the handwritten label as a slip. **Fixed:** Kept the handwritten label and added a sentence that it is a slip and the recoil protons had energies up to about 5.7 MeV
- [[#N3254|N3254]] Nuclear mass, decay channels, and dating problems: The physical-quantities table lists $\varepsilon$ as emissivity, but the note only uses $\varepsilon_0$ (vacuum permittivity); also $R$ is activity in the table but the note uses $\mechanical{R}$ for nuclear radius and $R$, $S$ for breakup products, and $N$ for both neutron number and $N(t)$; rename the products and fix the table. **Partly:** Replaced emissivity row with vacuum permittivity epsilon_0, renamed breakup products R and S to P_1 and P_2, added rows for A, Z, N, N(t) and N_0, nuclear radius R and R_0, and M; R as activity is correct (R=-dN/dt is used) so kept, and N(t) vs neutron number is kept as standard notation with separate table rows
- [[#N3254|N3254]] Nuclear mass, decay channels, and dating problems: Be-8 two-alpha value: $[2(4.002603)-8.005305]\times931.5=-0.0922$ MeV, not $-0.093$ MeV (as correctly given in the review-calculations note). **Fixed:** Changed -0.093 MeV to -0.0922 MeV (recomputed: -0.09222 MeV)
- [[#N3255|N3255]] Standard Model: Covariant derivative: the SU(2) term must be $-ig\,\tfrac{\tau^i}{2}W^i_\mu$ (generators $T^i=\tau^i/2$), not $-ig\tau^iW^i_\mu$; otherwise $m_W=\tfrac12gv$ is off by a factor 2. **Fixed:** Changed -ig tau^i W^i_mu to -ig (tau^i/2) W^i_mu, consistent with m_W = g v/2
- [[#N3255|N3255]] Standard Model: With $\mathcal L\supset-\mu^2\phi^\dagger\phi-\lambda(\phi^\dagger\phi)^2$ and $\mu^2<0$, the minimum is at $v=\sqrt{-\mu^2/\lambda}$, not $\sqrt{\mu^2/\lambda}$. **Fixed:** Changed v = sqrt(mu^2/lambda) to v = sqrt(-mu^2/lambda)
- [[#N3255|N3255]] Standard Model: Yukawa terms: "$-\ldots-\text{h.c.}$" makes the Lagrangian anti-Hermitian; write $-(\bar Q_LY_d\phi d_R+\bar Q_LY_u\tilde\phi u_R+\bar L_LY_e\phi e_R+\text{h.c.})$, and fix the Compact Form, whose inner minus signs flip the up-type and lepton terms relative to the Yukawa section. **Fixed:** Wrote L_Yukawa = -(Qbar Y_d phi d_R + Qbar Y_u phitilde u_R + Lbar Y_e phi e_R + h.c.) and changed the inner minus signs in the Compact Form to plus
- [[#N3255|N3255]] Standard Model: Rendering errors: column vectors written as `\begin{pmatrix} u_L \ d_L \end{pmatrix}` (also $L_L$ and $\langle\phi\rangle$) need `\\`, $m_Z=\tfrac12\sqrt{g^2+g'^2},v$ needs `\,v`, and the Higgs doublet mixes Unicode `φ⁺`/`ϕ⁰`; also "left-handed means only one spin orientation" conflates chirality with helicity, and right-handed singlets do couple to the $Z$ via hypercharge. **Fixed:** Added \\ in Q_L, L_L and VEV vectors, changed ,v to \,v in m_Z, replaced Unicode with \phi^+ and \phi^0, rewrote the table text to say left-handed means chirality and only left-chiral fields couple to W, and right-handed singlets couple to Z and photon via hypercharge

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3252 | [[Nuclear and quantum statistics review calculations\|Nuclear and quantum statistics review calculations]] | Analyzed | high | yes | no | [[#N3252\|View]] |
| N3253 | [[Nuclear binding and radioactive decay\|Nuclear binding and radioactive decay]] | Analyzed | low | yes | no | [[#N3253\|View]] |
| N3254 | [[Nuclear mass, decay channels, and dating problems\|Nuclear mass, decay channels, and dating problems]] | Analyzed | medium | yes | no | [[#N3254\|View]] |
| N3255 | [[Standard Model\|Standard Model]] | Analyzed | high | yes | yes | [[#N3255\|View]] |

## Suggestions

### N3252

Note: [[Nuclear and quantum statistics review calculations|Nuclear and quantum statistics review calculations]]  
Priority: high · Graph: yes · Manim: no

A grab bag of correct worked numbers (angular-momentum angles, Be-8, carbon-nucleus forces, range-mass estimate all verify), but the physical-quantities table is wrong, several letters are reused, and some results are left unfinished.

- [Correctness] The physical-quantities table lists symbols the note does not use with those meanings: $F$ as Faraday constant (the note uses $F_G$, $F_C$ for forces and $F(v)$ for a density), $R$ as activity (the note uses $R$ for nuclear radius, interaction range, and $3R$ gas constant), $T$ "determines the blackbody spectrum", and $\lambda$ only as decay constant (the note uses $\lambda=m/(2k_BT)$ and de Broglie wavelength); rebuild the table from the symbols actually used ($A$, $Z$, $N$, $L$, $m_\ell$, $k_B$, $g(E)$, $f$, $R_{21}$, $a_0$, $C_V$, $N_A$, $R$, $F_G$, $F_C$).
- [Correctness] Symbol clashes: $A$ is mass number and also the normalization constant in $f_{\mathrm{MB}}$ and $F(v)=Av^3e^{-\lambda v^2}$; $N$ is neutron number and particle number in $P=(2/3)N\langle E\rangle/V$; rename the normalization constants (e.g. $C$) and the particle count.
- [Example] Finish the open calculations: the hydrogen population ratio is $4e^{-404}\approx10^{-175}$ at 293 K, Homework 13.1 gives $\langle K\rangle=\mechanical{m}/\lambda=2k_BT$ (flux-weighted, larger than $\tfrac32k_BT$), and $\Pr(a_0\le r\le2a_0)\approx0.049$ for the 2p state.
- [Structure] Split into topic sections (nuclear basics, angular momentum, statistics, wells, hydrogen) or move items to their topical notes; the title "Nuclear and quantum statistics" hides the angular-momentum and finite-well material, and Be-8 duplicates the other two nuclear notes.
- [Graph] Plot $f_{\mathrm{BE}}$, $f_{\mathrm{MB}}$, $f_{\mathrm{FD}}$ versus $(E-\mu)/k_BT$ from $-3$ to 5 (with $B=1$) as a native graph to replace or accompany Fig. 70, and $P(r)=r^4e^{-r/a_0}/(24a_0^5)$ on $0\le r\le12a_0$ with the shaded interval $[a_0,2a_0]$.

### N3253

Note: [[Nuclear binding and radioactive decay|Nuclear binding and radioactive decay]]  
Priority: low · Graph: yes · Manim: no

Short, clear and correct summary of binding, Q values and decay law (the $5.19\times10^6$ nuclei example checks).

- [Structure] The speed of light is wrapped in `\signal{c}` while the Gauge Theories notes use `\mechanical{c}`, and $t$, $\lambda$ are uncolored; align the macro choice with the vault convention.
- [Example] Add the Be-8 numbers inline ($B=+56.5$ MeV vs free nucleons, $Q_{2\alpha}=+0.092$ MeV) so the stated example is self-contained.
- [Graph] Plot $\mathcal N(t)/\mathcal N_0=e^{-t\ln2/t_{1/2}}$ for $t_{1/2}=1$ h over 0–5 h, and on a log axis the sum of two exponentials ($t_{1/2}=1$ h and 5 h, equal initial activities) to show the curved mixture described in the text.

### N3254

Note: [[Nuclear mass, decay channels, and dating problems|Nuclear mass, decay channels, and dating problems]]  
Priority: medium · Graph: yes · Manim: no

Many correct worked examples (Po-210, confinement estimate, density, deuteron, U-230 channels, U–Pb age all verify), but with one wrong transcribed energy, a wrong table entry, duplications, and letter reuse.

- [Correctness] Neutron-discovery sketch: the recoil protons from paraffin had energies up to about 5.7 MeV (Chadwick 1932), not "5.7 keV"; note the handwritten label as a slip.
- [Correctness] The physical-quantities table lists $\varepsilon$ as emissivity, but the note only uses $\varepsilon_0$ (vacuum permittivity); also $R$ is activity in the table but the note uses $\mechanical{R}$ for nuclear radius and $R$, $S$ for breakup products, and $N$ for both neutron number and $N(t)$; rename the products and fix the table.
- [Correctness] Be-8 two-alpha value: $[2(4.002603)-8.005305]\times931.5=-0.0922$ MeV, not $-0.093$ MeV (as correctly given in the review-calculations note).
- [Structure] Remove the duplicated sentence "For ${}^8$Be$\to2\alpha$, compare ..." and merge the two confinement-estimate passages; the "Decay series" heading contains no decay series, so rename it or add the $^{238}$U chain.
- [Example] The U-230 proton channel needs $M({}^{229}\mathrm{Pa})=229.032097$ u, which is not listed; add it so $Q=-5.6$ MeV can be reproduced.
- [Graph] Plot $N_{\mathrm{Pb}}/N_{\mathrm U}=e^{\lambda t}-1$ versus $t$ from 0 to 10 Gyr with $t_{1/2}=4.47$ Gyr, marking the ratio 0.60 at $t=3.0$ Gyr.

### N3255

Note: [[Standard Model|Standard Model]]  
Priority: high · Graph: yes · Manim: yes

A useful overview of the SM Lagrangian, but it lacks frontmatter and TLDR, contains several sign and factor errors, and has broken LaTeX column vectors.

- [Correctness] Covariant derivative: the SU(2) term must be $-ig\,\tfrac{\tau^i}{2}W^i_\mu$ (generators $T^i=\tau^i/2$), not $-ig\tau^iW^i_\mu$; otherwise $m_W=\tfrac12gv$ is off by a factor 2.
- [Correctness] With $\mathcal L\supset-\mu^2\phi^\dagger\phi-\lambda(\phi^\dagger\phi)^2$ and $\mu^2<0$, the minimum is at $v=\sqrt{-\mu^2/\lambda}$, not $\sqrt{\mu^2/\lambda}$.
- [Correctness] Yukawa terms: "$-\ldots-\text{h.c.}$" makes the Lagrangian anti-Hermitian; write $-(\bar Q_LY_d\phi d_R+\bar Q_LY_u\tilde\phi u_R+\bar L_LY_e\phi e_R+\text{h.c.})$, and fix the Compact Form, whose inner minus signs flip the up-type and lepton terms relative to the Yukawa section.
- [Correctness] Rendering errors: column vectors written as `\begin{pmatrix} u_L \ d_L \end{pmatrix}` (also $L_L$ and $\langle\phi\rangle$) need `\\`, $m_Z=\tfrac12\sqrt{g^2+g'^2},v$ needs `\,v`, and the Higgs doublet mixes Unicode `φ⁺`/`ϕ⁰`; also "left-handed means only one spin orientation" conflates chirality with helicity, and right-handed singlets do couple to the $Z$ via hypercharge.
- [Structure] Add quoted frontmatter title, TLDR, semantic macros, a units column, and move the symbol table to a "Physical quantities" section at the end per the Obsidian skill; add the mixing relations $A_\mu=\sin\theta_WW^3_\mu+\cos\theta_WB_\mu$, $e=g\sin\theta_W$.
- [Graph] 3D surface of $V(\phi)=\mu^2\lvert\phi\rvert^2+\lambda\lvert\phi\rvert^4$ over $(\mathrm{Re}\,\phi,\mathrm{Im}\,\phi)\in[-1.5,1.5]^2$ with $\mu^2=-1$, $\lambda=0.5$ (Mexican hat).
- [Manim] Animate $\mu^2$ going from $+1$ to $-1$ so the bowl morphs into the hat and a ball rolls to the circle of minima at $\lvert\phi\rvert=v/\sqrt2$.
