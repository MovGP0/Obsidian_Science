---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories"
---

> [!TLDR]
> This note tracks the review of the 120 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 135 possible errors or notation conflicts. 135 of them are verified (126 fixed, 7 partly, 2 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3134|N3134]] 1.0 Chapter introduction: Outdated statements: the Higgs boson is now established with $m_H\approx125.1\,\mathrm{GeV}$ (not only "less than 200 GeV" from indirect fits), and the LHC has run at 13 and 13.6 TeV. Add a dated status callout rather than editing the source text. **Fixed:** Added a dated status note callout (m_H about 125.1 GeV, LHC at 13 and 13.6 TeV) without editing the source text; added m_H to the table.
- [[#N3136|N3136]] 1.2 Leptons: Symbol clash: $\tau$ denotes the tau lepton, the tau lifetime ($c\tau=87\,\mu\mathrm m$) and the isospin matrices $\tau_\pm$. The table lists only the lifetime. Rename the lifetime to $\tau_\tau$ and add $\tau_\pm,\tau_{1,2}$ to the table. **Partly:** Renamed the lifetime to tau_tau in the text and table; did not add tau_pm and tau_1,2 to the table because they are matrices (operators), which the skill excludes from the table.
- [[#N3136|N3136]] 1.2 Leptons: Outdated: tau-family universality "verified within 1.5%" is now tested at the few-per-mille level (PDG). Add a dated note. **Fixed:** Added a dated status note that PDG data now test it at the few-per-mille level.
- [[#N3137|N3137]] 1.3 Quarks: Transcription slips: "proposed quarks in 1964 by as a means" (delete "by"), and "may be produced in the semifinal state" should read "final state". **Fixed:** Deleted "by" and changed "semifinal state" to "final state".
- [[#N3137|N3137]] 1.3 Quarks: Symbol clash: $B$ is baryon number in Table 1.1 and (1.3.6), and $B_1,B_3,B_{\mathrm{exp}}$ are branching ratios. Rename the latter to $\mathrm{BR}_1$ and so on. **Fixed:** Renamed the branching ratios to \mathrm{BR}_1, \mathrm{BR}_3, \mathrm{BR}_{\mathrm{exp}} in (1.3.14)-(1.3.16) and the quantities table.
- [[#N3137|N3137]] 1.3 Quarks: Dated data: $B_{\mathrm{exp}}=(17.44\pm0.85)\%$ is now $(17.82\pm0.04)\%$, and the measured $\Gamma(\pi^0\to\gamma\gamma)$ is now about $7.80\pm0.12\,\mathrm{eV}$. Add a status note. **Fixed:** Kept the source values and added short parenthetical notes with current world averages (17.82 +/- 0.04)% and about (7.80 +/- 0.12) eV.
- [[#N3143|N3143]] 2.1 Hamilton's Principle: "joining $q_1\equiv q_1(t)$ and $q_2\equiv q_2(t)$" should read $q_1\equiv q(t_1)$ and $q_2\equiv q(t_2)$, the fixed endpoint values. **Fixed:** Changed to q_1 = q(t_1) and q_2 = q(t_2).
- [[#N3145|N3145]] 2.3 Symmetries and Conservation Laws: With $\Theta^{\mu\nu}\equiv\frac{\partial\mathcal L}{\partial(\partial_\nu\phi)}\partial^\mu\phi-g^{\mu\nu}\mathcal L$ as in (2.3.8), the result (2.3.7) gives $\partial_\nu\Theta^{\mu\nu}=0$, not $\partial_\mu\Theta^{\mu\nu}=0$ as in (2.3.9). The momentum densities are then $\Theta^{\mu0}$. Swap the indices in (2.3.8) to $\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}\partial^\nu\phi$ so that (2.3.9) and "$\Theta^{0\nu}$ momentum densities" hold. **Fixed:** Changed (2.3.8) to dL/d(d_mu phi) d^nu phi - g^{mu nu} L; (2.3.7) then gives d_mu Theta^{mu nu} = 0 and Theta^{00} is unchanged.
- [[#N3145|N3145]] 2.3 Symmetries and Conservation Laws: With $\partial\mathcal L/\partial(\partial_\mu\psi)=\bar\psi i\gamma^\mu$, (2.3.20) gives $\mathbf J^\mu=-\bar\psi\gamma^\mu\frac{\boldsymbol\tau}{2}\psi$, the opposite sign to (2.3.22). Define $\mathbf J^\mu$ with $-\tfrac{i}{2}$ or state that the overall sign is a convention. **Fixed:** Verified the sign (J = -psibar gamma tau/2 psi from (2.3.20)); added a parenthetical before (2.3.22) that states the sign difference and that the overall current sign is a convention.
- [[#N3147|N3147]] 2.P Problems: Problem 2.5: "$-G_{\mathrm N}\sum_{i\ne j}m_im_j/(\mathbf x_i-\mathbf x_j)^2$" has the wrong power and the wrong sign (repulsive), and it double counts. It should be $L=\tfrac12\sum_i m_i\dot{\mathbf x}_i^2+\tfrac{G_{\mathrm N}}2\sum_{i\ne j}m_im_j/|\mathbf x_i-\mathbf x_j|$. **Fixed:** Replaced the term by +(G_N/2) sum_{i!=j} m_i m_j over the distance abs(x_i - x_j).
- [[#N3152|N3152]] 3.4 Significance of Potentials in Quantum Theory: (3.4.8) writes $S_i=\int_{\text{path }i}d\mathbf x\cdot\mathbf A$ without the charge. It must be $S_i=q\int_{\text{path }i}d\mathbf x\cdot\mathbf A$, consistent with (3.4.3) and (3.4.9). **Fixed:** Added \electric{q} so S_i = q int dx.A, consistent with (3.4.3) and (3.4.9).
- [[#N3153|N3153]] 3.5 Phase Invariance in Field Theory: Second line of (3.5.8): "$iq[\phi^*\partial^\mu\phi-(\partial^\mu\phi)\phi^*]$" is identically zero. It must be $iq[\phi^*\partial^\mu\phi-(\partial^\mu\phi^*)\phi]$, which follows from the first line with $\partial\mathcal L/\partial(\partial_\mu\phi)=\partial^\mu\phi^*$. **Fixed:** Changed (d^mu phi) phi^* to (d^mu phi^*) phi; checked against the first line.
- [[#N3153|N3153]] 3.5 Phase Invariance in Field Theory: In (3.5.2), the second Klein–Gordon equation lacks "$=0$": $(\Box+m^2)\phi^*(x)=0$. **Fixed:** Added "=0".
- [[#N3153|N3153]] 3.5 Phase Invariance in Field Theory: Symbol clash: (3.5.19) uses $m$ for the photon mass, while $m$ is the scalar or fermion mass in (3.5.1) and (3.5.15). Use $M_\gamma$, as in (3.5.21). **Fixed:** Changed to \mechanical{M_\gamma} and updated the table description to "photon mass and its limit".
- [[#N3159|N3159]] 4.2 Construction: The last term of (4.2.31) should be $-\frac1{ig}G[G^{-1}\partial_\nu G,G^{-1}\partial_\mu G]G^{-1}$ $(=+\frac{i}{g}\ldots)$, and the last term of (4.2.35) should be $+\frac1{ig}G[\ldots]G^{-1}$. Both signs are flipped (checked numerically). The cancellation and the conclusion (4.2.26) are unaffected. **Fixed:** Re-derived with d G^{-1} = -G^{-1}(dG)G^{-1}; changed (4.2.31) last term to -1/(ig) and (4.2.35) last term to +1/(ig); cancellation and (4.2.26) unchanged.
- [[#N3160|N3160]] 4.3 Some Physical Consequences: The physical-quantities row for $I,\mathbf I,\mathbf I^{(1)},\mathbf I^{(2)}$ says "in units of reduced Planck constant"; isospin is a dimensionless internal quantum number, not an angular momentum, so drop the $\hbar$ wording. **Fixed:** Replaced with "(dimensionless internal quantum number)".
- [[#N3160|N3160]] 4.3 Some Physical Consequences: In (4.3.2) the vertex for a nucleon $\alpha$ turning into $\beta$ should strictly carry $(\tau^a)_{\beta\alpha}$ (row = outgoing, column = incoming, from $\bar\psi_\beta\tau^a_{\beta\alpha}\psi_\alpha$); $(\tau^a)_{\alpha\beta}$ differs by a sign for $\tau^2$ (the sum in (4.3.3) is unaffected because $\sum_a\tau^a_{ij}\tau^a_{kl}=2\delta_{il}\delta_{jk}-\delta_{ij}\delta_{kl}$ is real). **Fixed:** Changed the index order to (tau^a)_{beta alpha}; left (4.3.3) unchanged because the summed product is real and therefore equal.
- [[#N3163|N3163]] 4.P Problems: The physical-quantities row "$I,s,S,L$ ... in units of reduced Planck constant" wrongly includes isospin $I$; isospin is dimensionless and not measured in $\hbar$. **Fixed:** Rewrote the description so isospin is a dimensionless internal quantum number and only the spins and L are in units of hbar.
- [[#N3168|N3168]] 5.3 Spontaneous Breaking of a Gauge Symmetry: Eq. (5.3.13) mixes index positions: $\magnetic{A'_\mu}=\magnetic{A_\mu}+\frac1{\electric{q}v}\partial^\mu\zeta$ should read $\magnetic{A'_\mu}=\magnetic{A_\mu}+\frac1{\electric{q}v}\partial_\mu\zeta$ (consistent with (5.3.6) for $\alpha=-\zeta/(\electric{q}v)$). **Fixed:** Changed to d_mu zeta.
- [[#N3168|N3168]] 5.3 Spontaneous Breaking of a Gauge Symmetry: Symbol clash: $\phi'$ means the gauge-transformed field in (5.3.5), (5.3.6) and (5.3.14) but the shifted field $\phi-\langle\phi\rangle_0$ in (5.3.9), and the table lists only "shifted"; rename the shifted field (e.g. $\tilde\phi$) or drop (5.3.9), which is never used afterwards. **Fixed:** Renamed the shifted field in (5.3.9) to \tilde\phi and added phi' (gauge-transformed) and \tilde\phi (shifted) to the table row.
- [[#N3169|N3169]] 5.4 The Sigma Model: (5.4.7a,b): decomposing $\boldsymbol\alpha_LP_L+\boldsymbol\alpha_RP_R=\frac12(\boldsymbol\alpha_R+\boldsymbol\alpha_L)+\frac12\gamma_5(\boldsymbol\alpha_R-\boldsymbol\alpha_L)$ requires $\boldsymbol\alpha=\frac12(\boldsymbol\alpha_R+\boldsymbol\alpha_L)$ and $\boldsymbol\alpha_5=\frac12(\boldsymbol\alpha_R-\boldsymbol\alpha_L)$; as written a pure isospin rotation $\boldsymbol\alpha_L=\boldsymbol\alpha_R$ would be counted twice. **Fixed:** Verified alpha_L P_L + alpha_R P_R decomposition; set alpha = (alpha_R + alpha_L)/2 and alpha_5 = (alpha_R - alpha_L)/2.
- [[#N3169|N3169]] 5.4 The Sigma Model: Second line of (5.4.11): with the note's own projectors (5.4.2)-(5.4.3), $\bar\psi_L\boldsymbol\tau\psi_R-\bar\psi_R\boldsymbol\tau\psi_L=\bar\psi\boldsymbol\tau\gamma_5\psi$, so the pion term is $-ig\boldsymbol\pi\cdot\bar\psi\boldsymbol\tau\gamma_5\psi$, not $+ig\ldots$ (the same sign carries into (5.4.17)); state the convention if the source sign is kept. **Fixed:** Verified psibar_L tau psi_R - psibar_R tau psi_L = psibar tau gamma_5 psi; changed +ig to -ig in (5.4.11) line 2 and in (5.4.17).
- [[#N3173|N3173]] 5.P Problems: Problem 5.2 cites "transformation laws (5.4.6) and (5.4.8)", but in the sigma-model note (5.4.6) is the mass term; the nucleon transformation law is (5.4.5). **Fixed:** Changed to (5.4.5).
- [[#N3173|N3173]] 5.P Problems: Problem 5.7(b): since $\electric{e^*}=-2\electric{e}<0$, the formula $\magnetic{\lambda}^{-1}=\electric{e^*}|\langle\psi\rangle_0|/\sqrt{\mechanical{m^*}c^2}$ gives a negative inverse length; use $|\electric{e^*}|$ (and state the unit system, since the free energy is written in natural units while $c$ appears here). **Partly:** Sign issue right: changed e^* to abs(e^*); did not add a unit-system statement because the intended system (hbar = 1 with c kept) is not certain from the note.
- [[#N3173|N3173]] 5.P Problems: Problem 5.4: $\cos\theta_C\approx0.9746$ is dated; the current value is $|V_{ud}|\approx0.9737$ (PDG 2024). **Fixed:** Kept the source value and added a parenthetical with the current value abs(V_ud) = 0.9737.
- [[#N3174|N3174]] 5.R For Further Reading: Migdal–Polyakov entry says "included in the Farhi–Suskind reprint collection"; the reprint collection cited earlier in this note is Farhi and Jackiw, *Dynamical Gauge Symmetry Breaking* (also "Int. J. Mod. Phys. 24" should be "Int. J. Mod. Phys. A 24"). **Fixed:** Changed to "Farhi–Jackiw reprint collection" (the collection cited earlier in the note) and "Int. J. Mod. Phys. A 24".
- [[#N3176|N3176]] 6.1 An Effective Lagrangian for the Weak Interactions: (6.1.71): the first line "$\mechanical{q_1}\cdot\mechanical{p_1}=\mechanical{m}e$" should be $\mechanical{m}\energy{E}$, and "$\mechanical{p_1}\cdot\mechanical{p_2}=\mechanical{m}\energy{E}$" should be $\mechanical{m}\energy{E'}$ (electron at rest, $p_2^0=E'$). **Fixed:** Changed to m E and m E'; re-derived all six invariants, the other four are correct.
- [[#N3176|N3176]] 6.1 An Effective Lagrangian for the Weak Interactions: (6.1.41): from (6.1.40), $\mathcal I=-128\operatorname{Re}(C_S^*C_T)(\mechanical{m}\energy{E})^2(1-2y)$ gives $d\sigma_{ST}/dy=-\frac{2\mechanical{m}\energy{E}}{\pi}(1-2y)\operatorname{Re}(C_S^*C_T)$, as Table 6.1 also states; the displayed plus sign is wrong. **Fixed:** Changed to -(2mE/pi)(1-2y) Re(C_S^* C_T), consistent with (6.1.40), (6.1.38) and Table 6.1; (6.1.42) unaffected.
- [[#N3176|N3176]] 6.1 An Effective Lagrangian for the Weak Interactions: Item 10 heading reads "V + A interaction: $\bar\nu_e e\rightarrow\nu_e e$"; it should be $\bar\nu_e e\rightarrow\bar\nu_e e$. **Fixed:** Changed to antineutrino-electron to antineutrino-electron (\bar\nu_e e -> \bar\nu_e e).
- [[#N3177|N3177]] 6.2 Intermediate Vector Bosons -  A First Look: (6.2.2) and (6.2.3): the massive-vector propagator numerator is $g_{\mu\nu}-\mechanical{k_\mu}\mechanical{k_\nu}/\mechanical{M_W}^2$, not $g_{\mu\nu}-\mechanical{k_\mu}\mechanical{k_\nu}$ (dimensionally inconsistent as written). **Fixed:** Changed numerator to g_{mu nu} - k_mu k_nu/M_W^2 in both.
- [[#N3177|N3177]] 6.2 Intermediate Vector Bosons -  A First Look: (6.2.39): integrating (6.2.38), $d\sigma/d\Omega=32G_F^2\energy{Q}^4\sin^2\theta/(64\pi^2s)$ with $s=4\energy{Q}^2$ gives $\sigma=G_F^2\energy{Q}^2/3\pi=G_F^2s/12\pi$, not $G_F^2s/3\pi$; either $Q$ must be $\sqrt s$ or the factor should be $1/12\pi$ (the growth $\propto s$ and the conclusion are unaffected). **Fixed:** Recomputed from (6.2.38) with s = 4Q^2 and integral of sin^2 = 8pi/3; changed result to G_F^2 s/(12 pi) = G_F^2 Q^2/(3 pi); the s growth and the conclusion are unchanged.
- [[#N3178|N3178]] 6.3 The Standard Electroweak Theory of Leptons: (6.3.35): from $\frac{v^2}{8}g^2|b^1-ib^2|^2=\frac{g^2v^2}{4}W^+_\mu W^{-\mu}$ the mass term is $\frac{g^2v^2}{8}(|W_\mu^+|^2+|W_\mu^-|^2)$, not $\frac{g^2v^2}{2}(\ldots)$; only the former gives (6.3.36) $\mechanical{M_W}=gv/2$. **Fixed:** ^2=2W+W-), consistent with M_W=gv/2.
- [[#N3178|N3178]] 6.3 The Standard Electroweak Theory of Leptons: (6.3.72) has $\frac{ig}{8\mechanical{M_W}^2}$; it must be $\frac{ig^2}{8\mechanical{M_W}^2}$, since with $\not k_+-\not k_-\to-2\not P$ it has to reproduce $-\frac{ig^2}{4\mechanical{M_W}^2}$ in (6.3.73); also (6.3.68) has an unbalanced bracket in $g_{\alpha\nu}[(\mechanical{k_+}+\mechanical{S})_\beta$. **Fixed:** Changed prefactor to ig^2/(8M_W^2) so (6.3.73) follows; removed the stray [ before (k_++S)_beta.
- [[#N3178|N3178]] 6.3 The Standard Electroweak Theory of Leptons: (6.3.63) as written, $|\mathcal M(Z\to\nu\bar\nu)|^2=\frac12\frac{\mechanical{M_Z}^2}{\mechanical{M_W}^2}|\mathcal M(W\to e\bar\nu)|^2$, accounts only for the coupling ratio; since $|\mathcal M|^2\propto G_FM^4$ (6.2.18), the ratio at the respective masses is $\frac12(\mechanical{M_Z}/\mechanical{M_W})^4$, which is what yields $\Gamma=G_F\mechanical{M_Z}^3/(12\pi\sqrt2)$. **Fixed:** Changed exponent to 4; with physical amplitudes this reproduces Gamma=G_F M_Z^3/(12 pi sqrt2) (checked).
- [[#N3178|N3178]] 6.3 The Standard Electroweak Theory of Leptons: Outdated values: the electron-neutrino mass bound "$\lesssim2\,\unit{eV}$" is now $m_\nu<0.45\,\unit{eV}$ (KATRIN 2025), and "ATLAS and CMS ... will probe ... at $\sqrt s=7\,\unit{TeV}$" should be updated to the completed 13 and 13.6 TeV WW and triple-gauge-coupling measurements. **Fixed:** Bound now <0.45 eV (90% CL, KATRIN 2025); LHC sentence now states completed WW and triple-gauge measurements at 7, 8, 13, 13.6 TeV.
- [[#N3179|N3179]] 6.4 Neutral-Current Interactions among Leptons: In the paragraph after (6.4.23), "because expressions (6.4.22) and (6.4.21) contain terms linear in $(v+a)$" cites the wrong equation: (6.4.21) for $\bar\nu_\mu e$ has no linear term; it should read "(6.4.22) and (6.4.23)". **Fixed:** Changed "(6.4.22) and (6.4.21)" to "(6.4.22) and (6.4.23)".
- [[#N3179|N3179]] 6.4 Neutral-Current Interactions among Leptons: Symbol clash: $v$ denotes both the vector coupling $v_e$, $v$ in (6.4.18)-(6.4.23) and (6.4.31), and the antiparticle spinor $v(\mu,\mechanical{q_+})$, $\bar v(e,\mechanical{p_+})$ in (6.4.24); the physical-quantities table lists both under $v$. Add a sentence distinguishing them (or write the coupling as $g_V$-style notation in commentary), and note that $\mechanical{\mu}$ is also used both as the muon mass ("neglect of $\mechanical{m}^2$ and $\mechanical{\mu}^2$") and as a flavour label. **Fixed:** Added disambiguating sentences to the coupling, spinor, and lepton-mass rows of the physical-quantities table; equations unchanged.
- [[#N3180|N3180]] 6.5 The Higgs Boson -  A First Look: Eqs. (6.5.8) and (6.5.9) contain a spurious $1/x$ (and $1/x'$): the correct widths are $\Gamma(H\to W^+W^-)=\frac{G_F M_H^3}{32\pi\sqrt2}(1-x)^{1/2}(3x^2-4x+4)$ and the $ZZ$ analogue with $64\pi$; with $1/x$ the width would grow like $M_H^5$, contradicting the stated asymptotic $M_H^3$ behaviour and the $2x^2$ transverse-polarization remark. **Fixed:** Removed them; asymptotic G_F M_H^3/(8 pi sqrt2) now matches the stated M_H^3 behavior.
- [[#N3180|N3180]] 6.5 The Higgs Boson -  A First Look: In (6.5.6) the middle expression $|\mathcal M|^2/(64\pi^2 M_H)$ omits the two-body phase-space factor $(1-4m_f^2/M_H^2)^{1/2}=2q/M_H$ (and $N_c$); only with it does $|\mathcal M|^2$ from (6.5.5) give the stated $\beta^{3/2}$ result. **Fixed:** Added N_c and (1-4m_f^2/M_H^2)^(1/2); verified it reproduces the right-hand side with (6.5.5).
- [[#N3180|N3180]] 6.5 The Higgs Boson -  A First Look: Fig. 6.25 vertex factors (e) and (f): the left-hand sides $ig^2/2$ and $ig^2/(2\cos^2\theta_W)$ lack the $g_{\mu\nu}$ that appears on the right; write $\frac{ig^2}{2}g_{\mu\nu}$ etc. **Fixed:** Added g_{mu nu} to both left-hand sides.
- [[#N3180|N3180]] 6.5 The Higgs Boson -  A First Look: Symbol clash: $v$ is both the vacuum expectation value (vertex factor, table) and the antifermion spinor $v(f,p_2)$ in (6.5.2); rename or add a remark, and drop the unused $\Gamma_H$ from the physical-quantities table. **Fixed:** Added disambiguation to the spinor table row; removed Gamma_H from the table.
- [[#N3182|N3182]] 6.7 Neutrino Mixing and Neutrino Mass: In (6.7.11) the $\nu_{\mu,\tau}e$ cross section should be $\frac{G_F^2m_eE_\nu}{2\pi}\left(L_e^2+\frac{R_e^2}{3}\right)$ (as in note 6.4, eq. for $\nu_\mu e$); $\left(\frac{L_e^2}{3}+R_e^2\right)$ is the $\bar\nu_\mu e$ result. The $\tfrac17$ weighting survives only because $L_e^2=R_e^2$ at $\sin^2\theta_W=\tfrac14$. **Fixed:** Changed to (L_e^2+R_e^2/3); the 1/7 weighting is unchanged.
- [[#N3182|N3182]] 6.7 Neutrino Mixing and Neutrino Mass: Fig. 6.32 caption: "total ${}^8\mathrm{Be}$ solar neutrino flux" should be ${}^8\mathrm{B}$ (boron-8), consistent with the body text. **Fixed:** Changed to 8B in the caption.
- [[#N3182|N3182]] 6.7 Neutrino Mixing and Neutrino Mass: Numbers: with Table 6.5 the inverted-hierarchy minimum is $\sum m_\nu=\sqrt{2.40\times10^{-3}}+\sqrt{2.48\times10^{-3}}\approx0.099\,\mathrm{eV}$, so "$\gtrsim0.11$ eV" should read $\gtrsim0.10$ eV; and (6.7.20) with $v=246\,\mathrm{GeV}$, $M=1.22\times10^{19}\,\mathrm{GeV}$ gives $m\approx2.5\times10^{-6}\,\mathrm{eV}$, not "$\sim10^{-5}$ eV". **Fixed:** Changed 0.11 eV to 0.10 eV (computed 0.0987 eV); changed ~1e-5 eV to approx 2.5e-6 eV (v^2/2M with v=246 GeV).
- [[#N3182|N3182]] 6.7 Neutrino Mixing and Neutrino Mass: Symbol clashes: $m_1,m_2$ denote both the $\nu_1,\nu_2$ mass eigenvalues and the seesaw eigenvalues in (6.7.23); $L$ is both baseline and lepton number (plus $L_e$, $\mathsf L_\ell$); $\tau$ is both lifetime and the tau lepton; $\phi$ is both Higgs doublet and flux $\phi_e$. Rename (for example $m_{\mathrm{light}},m_{\mathrm{heavy}}$, $L_{\mathrm{lep}}$, $\Phi_e$), fix the table, and check whether $\mathcal L_{\mathrm{CC}}^{(q)}$ in (6.7.12) should carry a lepton label $(\ell)$. **Partly:** Renamed seesaw eigenvalues to m_light, m_heavy (equation and table) and L_CC^(q) to L_CC^(l); kept L, tau, phi since color or context already distinguish them.
- [[#N3182|N3182]] 6.7 Neutrino Mixing and Neutrino Mass: Outdated values need an update callout: KATRIN now gives $m_{\nu_e}<0.45\,\mathrm{eV}$ (90% CL, 2024; Table 6.4 still "$<2$ eV", sensitivity "0.2 eV" as future); cosmology now gives $\sum m_\nu\lesssim0.07$-$0.12\,\mathrm{eV}$ (Planck+DESI), not 0.44 eV; $h\approx0.67$-$0.73$, not $0.742$; $\theta_{13}\approx8.5^\circ$ is precisely measured; the LEP $N_\nu$ fit is $2.996\pm0.007$ after the 2019 luminosity correction; OPERA confirmed $\nu_\tau$ appearance; MicroBooNE disfavours the MiniBooNE low-energy excess as electrons. **Fixed:** Added one short update note callout after (6.7.5) that lists the current values; source text kept.
- [[#N3183|N3183]] 6.8 Renormalizability of the Theory: With the mixing term $+\mechanical{M}\magnetic{A_\mu}(\partial^\mu\zeta)$ in (6.8.2), the gauge-fixing term (6.8.3) $-\frac{1}{2\xi}(\partial^\mu\magnetic{A_\mu}+\xi\mechanical{M}\zeta)^2$ has cross term $-\mechanical{M}\zeta\,\partial^\mu\magnetic{A_\mu}\simeq+\mechanical{M}\magnetic{A_\mu}\partial^\mu\zeta$ (after integration by parts), which doubles rather than cancels the mixing; use $(\partial^\mu\magnetic{A_\mu}-\xi\mechanical{M}\zeta)^2$ or flip the sign of the mixing term (sign of $\zeta$), and show the one-line integration by parts. **Fixed:** Changed (6.8.3) to (dA - xi M zeta)^2 (mixing sign agrees with 5.3.11) and added the one-line integration by parts.
- [[#N3183|N3183]] 6.8 Renormalizability of the Theory: Before (6.8.12), "the only anomaly is proportional to $\operatorname{tr}(\{\tau^a,\tau^b\}Y)$" is too strong: the $[U(1)_Y]^3$ anomaly $\sum_R Y^3-\sum_L Y^3$ (and the mixed gravitational $\sum Y$ anomaly) is also nonzero for leptons alone (e.g. $-8-2(-1)=-6$ per family with $Q=T_3+Y/2$) and also cancels only once three colors of quarks are added; add a sentence or footnote saying so, while the $SU(2)^3$ and $SU(2)\,[U(1)_Y]^2$ anomalies vanish identically. **Partly:** U(1)_Y^3 part is right (-6 per family, +6 from three colored quarks): restricted the statement and added a sentence; the mixed gravitational sum Y is zero for leptons alone (-2-(-2)=0), so not added.
- [[#N3183|N3183]] 6.8 Renormalizability of the Theory: "$g_A\approx1.25$" after (6.8.17) is an outdated value; the current PDG value is $g_A\approx1.275$ (quote $\approx1.27$). **Fixed:** Changed to g_A approx 1.27.
- [[#N3185|N3185]] 6.B References: Ref. 19: the Aubert et al. neutral-current papers are *Phys. Rev. Lett.* **32**, 1454, 1457 (1974), not volume **34** (volume 34 is 1975). **Fixed:** Changed to Phys. Rev. Lett. 32, 1454, 1457 (1974).
- [[#N3185|N3185]] 6.B References: Footnote 26: "$\mechanical{M_W}\exp^{1/\alpha}$" is malformed; write $\mechanical{M_W}\exp(1/\alpha)$ (or $\mechanical{M_W}e^{1/\alpha}$). **Fixed:** Changed to M_W exp(1/alpha).
- [[#N3185|N3185]] 6.B References: Ref. 59: "pp. 95Ð98" is an encoding artifact; it should read "pp. 95–98". **Fixed:** Changed to 95–98.
- [[#N3185|N3185]] 6.B References: Ref. 49: the Daya Bay *Phys. Rev. Lett.* **108**, 171803 (2012) paper is arXiv:1203.1669; arXiv:1210.6327 is the later improved measurement (Chin. Phys. C **37**, 011001), so fix the arXiv number or cite both explicitly (also "Double-CHOZ" should be "Double Chooz"). **Fixed:** Changed arXiv:1210.6327 to arXiv:1203.1669 and Double-CHOZ to Double Chooz.
- [[#N3186|N3186]] 6.P Problems: Problem 6.13: the quartic term should be $-(|\lambda|/4)(2w^+w^-+z^2+h^2)^2$ (Lee–Quigg–Thacker); the note drops $z^2$, which removes the $z^4$ and $z^2h^2$ contact terms needed for the $hz\to hz$ amplitude in part (b). Also the citation should read "H. B. Thacker", not "H. H. Thacker" (and "it respect" should be "it respects"). **Fixed:** Added z^2 to the quartic term (verified by expanding the potential), changed to H. B. Thacker and "it respects".
- [[#N3186|N3186]] 6.P Problems: Problem 6.16: the Ross–Veltman result is $\rho=\sum_i[I_i(I_i+1)-\tfrac14Y_i^2]\langle\phi_i\rangle_0^2\big/\sum_i\tfrac12Y_i^2\langle\phi_i\rangle_0^2$ (with $Q=I_3+Y/2$ and the vev in the $I_3=-Y/2$ component); the note's numerator $I_i(I_i+1)-\tfrac12Y_i(\tfrac12Y_i-1)$ over $\sum Y_i^2\langle\phi_i\rangle_0^2$ agrees only when the vev sits in the $I_3=-I$ component (it gives $\rho=10/16$ instead of 1 for the $I=3$, $Y=4$ septet). **Fixed:** Replaced with sum[I(I+1)-Y^2/4]<phi>^2 / sum (1/2)Y^2<phi>^2; checked rho=1 for the doublet and the I=3, Y=4 septet.
- [[#N3186|N3186]] 6.P Problems: Physical-quantities table lists four-momenta $\mechanical{p},\mechanical{q}$ "in problem 6.10" but the note never uses them ($p$ appears only as a proton spinor in 6.17); also $\sigma$ is both a cross section and the sigma-model field, $\lambda$ both the scalar coupling and a Lorentz index/Fierz matrix $\lambda_{ij}$, and $\theta$ both the scattering angle (6.11) and the vacuum mixing angle (6.23); disambiguate the table rows. **Fixed:** Removed p, q from the momentum row; added disambiguation to the sigma, lambda (Fierz lambda_ij), and theta rows.
- [[#N3186|N3186]] 6.P Problems: Problem 6.17: $g_A=1.2695\pm0.0029$ is outdated; the current PDG value is $g_A\approx1.2754\pm0.0013$ (add a note if the source value is kept). **Fixed:** Changed to 1.2754 +- 0.0013 (PDG 2024) with the source value kept in parentheses.
- [[#N3187|N3187]] 6.R For Further Reading: "A. Salam and J. C. Ward, *Phys. Rev. Lett.* **13**, 168 (1964)" should be *Phys. Lett.* **13**, 168 (1964), as correctly given in 6.B ref. 1. **Fixed:** Changed to Phys. Lett. 13, 168 (1964).
- [[#N3189|N3189]] 7.1 The Standard Electroweak Theory -  Preliminaries: Fig. 7.2 photon vertex "$-i\electric{Q_q}\gamma_\mu$" is missing the coupling $e$; it should be $-ie\electric{Q_q}\gamma_\mu$. **Fixed:** Vertex now -ie Q_q gamma_mu; added an e (elementary charge) row to the quantities table that separates it from the electron field e
- [[#N3189|N3189]] 7.1 The Standard Electroweak Theory -  Preliminaries: Eq. (7.1.33): $\mathcal M^f=\mathsf V_L^f\zeta^f\mathsf V_R^{f\dagger}$ is dimensionless as written while the table gives $\mathcal M^f$ in GeV; the mass matrix is $\mathcal M^f=(v/\sqrt2)\,\mathsf V_L^f\zeta^f\mathsf V_R^{f\dagger}$. Also the fragment "with $f=u,d$. Accordingly, ..." after the vertex factors belongs directly after (7.1.33), not after Fig. 7.2. **Fixed:** (7.1.33) now M^f = (v/sqrt2) V_L zeta V_R^dagger; moved the "with f=u,d ... (7.1.34) ... (7.1.27)" text to directly after (7.1.33)
- [[#N3189|N3189]] 7.1 The Standard Electroweak Theory -  Preliminaries: "Whenever it is necessary to retain the color indices, we shall suppress them" is logically inverted; it should say the color indices are suppressed except where they are needed. **Fixed:** Changed "Whenever it is necessary to retain" to "Except where it is necessary to retain"
- [[#N3189|N3189]] 7.1 The Standard Electroweak Theory -  Preliminaries: Dated values: $\cos\theta_C=0.97425$ (now $|V_{ud}|\approx0.97367$) and $B(K^+\to\pi^+\nu\bar\nu)=(1.73^{+1.15}_{-1.05})\times10^{-10}$ (NA62 2024: $(1.30^{+0.33}_{-0.30})\times10^{-10}$); add an update callout or refresh with current PDG values together with (7.1.28). **Fixed:** = 0.97367 +- 0.00032, also refers to (7.1.28)) and after (7.1.17) (NA62 2024 value)
- [[#N3191|N3191]] 7.11 The Hierarchy Problem: "$\mechanical{M_{\mathrm{Pl}}}=(\hbar\mechanical{c}/G_{\mathrm{N}})^{1/2}\approx1.2\times10^{19}\,\unit{GeV}$" mixes units: with the SI units in the table $(\hbar c/G_N)^{1/2}$ is a mass ($2.18\times10^{-8}$ kg); write $\mechanical{M_{\mathrm{Pl}}}c^2=(\hbar c^5/G_N)^{1/2}\approx1.22\times10^{19}\,\unit{GeV}$ or state natural units. **Fixed:** Value now 1.2e19 GeV/c^2; table unit changed to GeV/c^2 with a remark that it is an energy in GeV when c = 1
- [[#N3192|N3192]] 7.12 The Vacuum Energy Problem: Intro: the gravitational to electrostatic attraction ratio for an electron and a proton is $Gm_em_p/(e^2/4\pi\varepsilon_0)\approx4.4\times10^{-40}$, so it is about 39 to 40 orders of magnitude smaller, not 41. Correct the number or give the explicit ratio. **Fixed:** Recomputed ratio 4.4e-40; text now says about 40 orders of magnitude and gives the ratio
- [[#N3194|N3194]] 7.2 Electroweak Gauge Bosons: Eq. 7.2.11, first line: "$3[2\cdot\Gamma(Z^0\to u\bar u)+3\cdot\Gamma(Z^0\to d\bar d)]$" mixes widths into a dimensionless ratio, and it double-counts color because $\Gamma(Z^0\to q\bar q)$ in 7.2.10 already contains the factor 3. Write $3[2(L_u^2+R_u^2)+3(L_d^2+R_d^2)]$, or equivalently $[2\Gamma(u\bar u)+3\Gamma(d\bar d)]/\Gamma(\nu\bar\nu)$. **Fixed:** First line now 3[2(L_u^2+R_u^2)+3(L_d^2+R_d^2)], consistent with the second line and (7.2.10)
- [[#N3195|N3195]] 7.3 Electron-Positron Annihilations: Eq. 7.3.10: "$1-\frac{8x_W}{3}+\frac{32x_W^2}{3}$" should be $1-\frac{8x_W}{3}+\frac{32x_W^2}{9}$, as in 7.2.11 and 7.3.19b. With $/3$, $R_{\mathrm{peak}}^{(u\bar u)}$ becomes 1066 instead of the tabulated 693. **Fixed:** Changed to 32x_W^2/9 (= L_u^2+R_u^2), as in (7.2.11) and (7.3.19b)
- [[#N3195|N3195]] 7.3 Electron-Positron Annihilations: Text before 7.3.14: "$(R_i-L_i)=\tau_3^{(i)}$" has the wrong sign. With $L_e=-1+2x_W$ and $R_e=2x_W$, one gets $R_e-L_e=+1$ while $\tau_3^{(e)}=-1$, so it must read $(R_i-L_i)=-\tau_3^{(i)}$, which is consistent with 7.3.14 as written. **Fixed:** Checked R_e-L_e = +1 with tau_3(e) = -1; text now (R_i-L_i) = -tau_3^(i), consistent with (7.3.14)
- [[#N3196|N3196]] 7.4 Deeply Inelastic Lepton-Hadron Scattering: (7.4.70) has prefactor $\frac{G_F^2}{2\pi}\energy{E'}\energy{E}$, which gives $\unit{GeV}^{-3}$ instead of $\unit{GeV}^{-5}$ for $d^2\sigma/dQ^2d\nu$ (with $W_i\sim\unit{GeV}^{-1}$); it must be $\frac{G_F^2}{2\pi}\frac{\energy{E'}}{\energy{E}}$, matching (7.4.27) and the Jacobian $2ME^2y$ that leads to (7.4.71). **Fixed:** Checked dimensions (GeV^-5) and the Jacobian 2ME^2y to (7.4.71); prefactor now (G_F^2/2pi)(E'/E)
- [[#N3196|N3196]] 7.4 Deeply Inelastic Lepton-Hadron Scattering: (7.4.97) $A/Q^2\simeq-7.2\times10^{-5}$ is missing its unit: it should read $-7.2\times10^{-5}\,\unit{GeV}^{-2}$ (recomputed: $G_F\cdot\frac45/(4\pi\alpha\sqrt2)=7.19\times10^{-5}\,\unit{GeV}^{-2}$). **Fixed:** Recomputed 7.19e-5 GeV^-2; added GeV^-2
- [[#N3196|N3196]] 7.4 Deeply Inelastic Lepton-Hadron Scattering: Symbol slips: the table defines $N$ only as "parton count", but the note also uses $N$ for the target nucleon in (7.4.1), (7.4.69), (7.4.85)-(7.4.89); in (7.4.28) one form factor is written $\Gamma_2^2(\mechanical{q}^2)$ while all the others take $\mechanical{Q}^2$; the rule (7.4.47) needs an absolute value, $1/|\partial h/\partial x|$. **Fixed:** 
- [[#N3196|N3196]] 7.4 Deeply Inelastic Lepton-Hadron Scattering: The world average $M_W=80.399\pm0.023\,\unit{GeV}$ (PDG 2010) near the end is outdated; add an editorial note giving the current PDG value ($80.369\pm0.013\,\unit{GeV}$, PDG 2024) and mark "most precise to date" and "recent" (BoNuS, HERA) as statements made at the source's date. **Fixed:** Added a dated note callout after the paragraph: wording refers to 2012; PDG 2024 M_W = 80.369 +- 0.013 GeV
- [[#N3197|N3197]] 7.5 Hadron-Hadron Interactions: Eq. (7.5.9) has the wrong Jacobian: $\partial(x,\tau)/\partial(x_a,x_b)=x_a+x_b=(x^2+4\tau)^{1/2}$, so it should read $F(\tau,x)=x_ax_b\,g(x_a,x_b)/(x^2+4\tau)^{1/2}$. Only with the square root does integrating over $x$ give (7.5.11) and the standard $d^2\sigma/dM^2dx_F=(4\pi\alpha^2/9M^4)\,x_ax_b/(x_a+x_b)\sum e_i^2[\dots]$. **Fixed:** Checked d(x,tau)/d(x_a,x_b) = x_a+x_b and the integration to (7.5.11); denominator now (x^2+4tau)^(1/2)
- [[#N3197|N3197]] 7.5 Hadron-Hadron Interactions: In the paragraph after (7.5.15), "studying $1.96$-GeV proton–antiproton collisions" should say $1.96\,\mathrm{TeV}$. In the Fig. 7.17 caption, CMS stands for "Compact Muon Solenoid", not "Compact Muon Spectrometer". **Fixed:** Changed both
- [[#N3197|N3197]] 7.5 Hadron-Hadron Interactions: Several values are out of date and should be marked as 2012 values or updated: the LHC has run at $13$ and $13.6\,\mathrm{TeV}$; the PDG 2024 average is $M_W=80.369\pm0.013\,\mathrm{GeV}$ (CDF 2022 reported $80.434\pm0.009$); the sequential $W'$ is now excluded below about $6\,\mathrm{TeV}$ and the sequential $Z'$ below about $5\,\mathrm{TeV}$ (ATLAS/CMS full Run 2), not "$>2\,\mathrm{TeV}$". **Fixed:** Added a dated note callout before the quantities table (13 and 13.6 TeV, PDG 2024 M_W, CDF 2022, W' about 6 TeV, Z' about 5 TeV)
- [[#N3198|N3198]] 7.6 Further Tests of the Electroweak Theory: Paragraph 3: "$B(B_s\to\mu^+\mu^-)<(3.5\pm0.2)\times10^{-9}$" is the standard-model expectation, not a bound, so the "$<$" with an uncertainty is wrong. Write the SM value with "$=$" and give the 2012 bound separately. Also note that $B_s\to\mu^+\mu^-$ has since been observed (world average about $3.3\times10^{-9}$, consistent with the SM value $\approx3.66\times10^{-9}$). **Fixed:** Changed to "=" (SM value) and stated the bound separately as about 4.2e-9 (1.2 x 3.5e-9); observation added in the update callout
- [[#N3198|N3198]] 7.6 Further Tests of the Electroweak Theory: "departures from the CMK paradigm" should read "CKM". **Fixed:** Changed to CKM
- [[#N3198|N3198]] 7.6 Further Tests of the Electroweak Theory: Several statements are outdated: the first-row sum is now $\mathcal S_u\approx0.9985\pm0.0007$ (PDG 2024, the "Cabibbo-angle anomaly"), not $0.9999\pm0.0006$; CP violation in charm was established by LHCb in 2019 ($\Delta A_{CP}\approx-1.5\times10^{-3}$); top FCNC limits are now about $10^{-5}$–$10^{-4}$; a sequential fourth generation is excluded by the measured Higgs production rate. Add a dated "status update" callout. **Fixed:** Added a dated note callout (S_u about 0.998, Cabibbo-angle anomaly, LHCb 2019 charm CPV, top FCNC 1e-5 to 1e-4, fourth generation excluded by Higgs rate, B_s -> mu mu observed)
- [[#N3199|N3199]] 7.7 A Brief Look at Quantum Corrections: The values have been superseded: the 2023 Northwestern measurement gives electron $g/2=1.001\,159\,652\,180\,59(13)$, and QED is now known through $(\alpha/\pi)^5$; $m_t=172.57\pm0.29\,\mathrm{GeV}$ (PDG 2024) rather than $173.2\pm0.9$; the Higgs boson has been found at $M_H=125.20\pm0.11\,\mathrm{GeV}$, so the fit discussion around Fig. 7.22 should say that the fitted $92^{+34}_{-26}$ GeV is consistent with it at about $1\sigma$. **Fixed:** Added a dated note callout after the Higgs-fit paragraph (2023 electron g/2, QED to (alpha/pi)^5, PDG 2024 m_t and M_H, consistency with 92+34-26 GeV at about 1 sigma)
- [[#N3200|N3200]] 7.8 The Scale of Fermion Masses: The last paragraph ("Until the Higgs boson is discovered and shown to couple to fermion pairs…") is outdated. Since 2012–2020, Higgs couplings to $t$, $b$, $\tau$ and $\mu$ have been observed and found proportional to mass, while the $He\bar e$ coupling is still unestablished. Add a dated update note. **Fixed:** Added a dated note callout: couplings to t, b, tau observed, evidence for mu (not yet a 5 sigma observation), proportional to mass, He-ebar coupling not established
- [[#N3201|N3201]] 7.9 Search for the Higgs Boson: Add a dated update callout: $M_H=125.20\pm0.11\,\mathrm{GeV}$ (PDG 2024); spin-parity $0^+$ is established (not just "even-integer spin"); $H\to b\bar b$, $\tau\tau$, $\mu\mu$ and $t\bar tH$ have been observed; a fourth generation, which the text says "would raise the $gg\to H$ rate", is excluded by exactly that rate. **Fixed:** Added a dated note callout before the quantities table; H -> mu mu stated as evidence, not observation
- [[#N3203|N3203]] 7.P Problems: Problem 7.3(a): "Express $V_{ub}=A\lambda^2$" should be "$V_{cb}=A\lambda^2$". The next sentence then correctly sets $V_{ub}=0$, and part (b) assigns $s_{23}=A\lambda^2$, i.e. $V_{cb}$. **Fixed:** Changed to V_cb = A lambda^2
- [[#N3203|N3203]] 7.P Problems: Problem 7.4: "(for $j\ne k$ and $i\ne j$, respectively)" should be "$i\ne k$", since the second condition is $\sum_jV_{ij}V_{kj}^*=\delta_{ik}$. **Fixed:** Changed to i != k
- [[#N3203|N3203]] 7.P Problems: Problem 7.19 has two parts labelled "(b)"; the second, on $\delta p/p$, should be "(c)". Also add the missing comma in "$e^+e^-$ $\mu^+\mu^-$". **Fixed:** Second (b) relabelled (c); added the comma after e+e-
- [[#N3206|N3206]] 8.1 A Color Gauge Theory: Eq. (8.1.20): the left side reads $\sum_{i<j}\langle\mathbf T^{(i)}\cdot\mathbf T^{(i)}\rangle$ and should be $\sum_{i<j}\langle\mathbf T^{(i)}\cdot\mathbf T^{(j)}\rangle$. **Fixed:** Changed the left side to sum_{i<j} <T^(i).T^(j)>
- [[#N3208|N3208]] 8.11 Strong-Interaction Symmetries: Discussion of the U(1) problem: "the obvious candidate, $\eta(958)$" should be $\eta'(958)$. The $\eta$ is at 548 MeV. **Fixed:** Changed $\eta(958)$ to $\eta'(958)$.
- [[#N3208|N3208]] 8.11 Strong-Interaction Symmetries: Eqs. (8.11.10) and (8.11.11) are inconsistent. For the $e^{in\theta}$ weighting of (8.11.9) to be reproduced, the action $\int d^4x\,\mathcal L_\theta$ must equal $n\theta$, so the coefficients must match: $1/8\pi^2$ in $n$ requires $\theta/8\pi^2$ in $\mathcal L_\theta$, not $\theta/16\pi^2$. With the unrescaled fields of (8.1.4)–(8.1.6), both also need a factor $g^2$. The standard forms are $n=\frac{g^2}{16\pi^2}\int d^4x\,\mathrm{tr}\,G\tilde G$ and $\mathcal L_\theta=\frac{\theta g^2}{16\pi^2}\mathrm{tr}\,G\tilde G$ with $\tilde G^{\mu\nu}=\tfrac12\epsilon^{\mu\nu\alpha\beta}G_{\alpha\beta}$. **Fixed:** With unrescaled fields of (8.1.4)-(8.1.6) set n = g^2/(16 pi^2) int tr G*G and L_theta = theta g^2/(16 pi^2) tr G*G so that int L_theta = n theta; added g row to the table.
- [[#N3208|N3208]] 8.11 Strong-Interaction Symmetries: The last paragraph says the new U(1) "is spontaneously broken in the course of electroweak symmetry breaking". That is the original Peccei–Quinn–Weinberg–Wilczek axion, which was excluded long ago. Viable "invisible" axions (KSVZ, DFSZ) break the PQ symmetry at $f_a\gg v$, and $\bar\theta$ relaxes to zero through the axion potential. Also introduce $\bar\theta=\theta+\arg\det M_q$ explicitly, since the text mentions that the two phases combine. **Fixed:** Introduced theta-bar = theta + arg det M_q, used theta-bar in (8.11.13) and the strong CP sentence, stated that the electroweak-scale version is excluded and that invisible axions break the U(1) at f_a much larger than the electroweak scale with the axion potential driving theta-bar to zero; added table rows for theta-bar, M_q, f_a.
- [[#N3208|N3208]] 8.11 Strong-Interaction Symmetries: The nEDM limit in (8.11.12) is outdated: the current bound is $|d_n|<1.8\times10^{-26}\,e\,\mathrm{cm}$ (90% CL, PSI 2020). It still gives $|\bar\theta|\lesssim10^{-10}$. **Rejected:** The value 2.9e-26 e cm matches the cited source measurement [120]; it is outdated, not wrong, and the conclusion abs(theta-bar) < 1e-10 is unchanged; updating it would break the citation.
- [[#N3209|N3209]] 8.12 Assessment: AdS/CFT paragraph: "$\mathrm{AdS}^5\otimes S_5$" should read $\mathrm{AdS}_5\times S^5$ (five-dimensional anti-de Sitter space times the five-sphere), as the bracketed gloss itself says. **Fixed:** Changed to $\mathrm{AdS}_5\times S^5$.
- [[#N3210|N3210]] 8.2 Charge Renormalization in Electrodynamics: (8.2.12): the $z_1$ exponent is printed as $iz_1(k^2-m^2-i\epsilon)$; it must be $+i\epsilon$, as in (8.2.11) and as used in (8.2.16), where $-(m^2-i\epsilon)(z_1+z_2)$ appears. **Fixed:** Changed to +i epsilon, consistent with (8.2.11) and (8.2.16).
- [[#N3210|N3210]] 8.2 Charge Renormalization in Electrodynamics: (8.2.27) still carries $i\sigma$ in the exponent although $\sigma=1$ was already set (it should be $\exp\{i[q^2z_1z_2/(z_1+z_2)-(M_i^2-i\epsilon)(z_1+z_2)]\}$), and (8.2.28) reads $\delta(\sigma-x_1-x_2)$ where it should be $\delta(\sigma-z_1-z_2)$. **Fixed:** Removed sigma from the (8.2.27) exponent and changed (8.2.28) to delta(sigma-z_1-z_2).
- [[#N3210|N3210]] 8.2 Charge Renormalization in Electrodynamics: Sign of (8.2.51)–(8.2.53): the $-e^2$ in (8.2.44) and $\int d^nl\,e^{il^2z}/(2\pi)^n=ie^{-i\pi n/4}/(4\pi z)^{n/2}$ give the prefactor $-ie^2e^{-i\pi n/4}/(4\pi)^{n/2}$, so the pole term is $+\frac{ie^2}{16\pi^2}(q^\mu q^\nu-q^2g^{\mu\nu})\frac{2}{4-n}\int(1-2z)^2$. As printed, the expansion $\Gamma(2-n/2)X^{n/2-2}=\frac{2}{4-n}-\ln X$ gives a log term with the opposite sign to (8.2.54). (8.2.54)–(8.2.56) themselves are correct. **Fixed:** Verified the Minkowski Gaussian integral gives i e^{-i pi n/4}/(4 pi z)^{n/2}, so with -e^2 from (8.2.44) the prefactor is -i e^2 e^{-i pi n/4}/(4 pi)^{n/2}; changed it in the three lines of (8.2.51) and in (8.2.52), and the pole term (8.2.53) to +i e^2/(16 pi^2); (8.2.54)-(8.2.56) now follow. The same sign slip also affects the Delta prefactor in (8.2.47)-(8.2.48), which I did not change because Delta=0 and it was not claimed.
- [[#N3210|N3210]] 8.2 Charge Renormalization in Electrodynamics: Symbol clash: $\epsilon$ denotes both the dielectric constant $\electric{\epsilon}$ (8.2.1) and the Feynman $i\epsilon$ in every propagator. Rename one, for example $\varepsilon_{\mathrm r}$ for the dielectric constant, and fix "the effective electric charges increases" after (8.2.36). **Fixed:** Renamed the dielectric constant to $\electric{\varepsilon_{\mathrm{r}}}$ in (8.2.1), (8.2.2), the text and the table; changed "charges increases" to "charge increases".
- [[#N3211|N3211]] 8.3 The Running Coupling Constant in QCD: Symbol clash for $\alpha$: it is the gauge function $\alpha(x)$ in (3.5.14)/(8.3.6), quark color indices $\alpha,\beta,\gamma$ in (8.3.9) and (8.3.19)–(8.3.22), and part of $\alpha_s$. Also, the ghost is called a color octet, yet (8.3.14) gives it triplet-style indices $\alpha,\beta$; use adjoint indices $a,b$ there. **Partly:** The ghost index point is right: changed the ghost indices to adjoint a, b in the text and in (8.3.14). The alpha uses (index, function argument of a QED gauge transformation, subscripted alpha_s) are standard textbook conventions in separate contexts and are not renamed.
- [[#N3212|N3212]] 8.4 Perturbative QCD -  A First Example: After (8.4.3): "which vanishes in the soft-gluon limit … also vanishes if $k\cdot q_i=0$" is backwards. The denominator $k^2+2q_i\cdot k$ vanishes, so the propagator diverges; that divergence is the soft and collinear singularity. **Fixed:** Changed to "whose denominator vanishes" and added "In both limits the propagator diverges."
- [[#N3212|N3212]] 8.4 Perturbative QCD -  A First Example: The physical-quantities table lists $p_1,p_2$, which the note never uses. $\theta$ is used both for the step function in (8.4.1) and for the angles $\theta_{1g},\theta_{2g}$ in (8.4.12). Also fix "three-jet cross differential cross section". **Fixed:** Removed p_1, p_2 from the table, renamed the step function to Theta in (8.4.1) and the text, and changed the phrase to "the three-jet differential cross section".
- [[#N3213|N3213]] 8.5 QCD Corrections to Deeply Inelastic Scattering: (8.5.49): the third term must be $1/[(n+1)(n+2)]$, not $1/[n(n+1)(n+2)]$, since $\int_0^1z^{n-1}z(1-z)\,dz=1/[(n+1)(n+2)]$. Check: only the corrected form gives $A_2(g\leftarrow g)=-n_f/3$, as required by (8.5.27) and used in (8.5.70); the printed form gives $-1/4-n_f/3$. **Fixed:** Verified from (8.5.43) moments and A_2(g<-g) = -n_f/3; corrected the term.
- [[#N3213|N3213]] 8.5 QCD Corrections to Deeply Inelastic Scattering: (8.5.75): the momentum fraction per quark or antiquark species is $\Sigma_2^\infty/(2n_f)=\frac{9/17}{12}=\frac{3}{68}$, not $\tfrac12\Sigma_2^\infty$ (which would be $9/34$). The numerical value $3/68$ and the check (8.5.77) are correct. **Fixed:** Changed the prefactor to 1/(2 n_f); value 3/68 unchanged.
- [[#N3213|N3213]] 8.5 QCD Corrections to Deeply Inelastic Scattering: (8.5.50)/(8.5.51): with (7.4.86)–(7.4.87), where $u(x)$ is a number density, the cross-section difference gives $x\mathcal F_3=x[u-\bar u+d-\bar d]$, so the first line is missing a factor $x$. The nonsinglet moment should then be $\Delta_n=\int_0^1dx\,x^{n-1}\mathcal F_3=\int_0^1dx\,x^{n-1}(q-\bar q)$, so that $\Delta_1$ counts valence quarks, consistent with $A_1=0$ expressing fermion-number conservation. **Fixed:** Verified from (7.4.71), (7.4.86), (7.4.87) that x F_3 = x[u - ubar + d - dbar]; added the factor x and changed Delta_n to int x^{n-1} F_3.
- [[#N3213|N3213]] 8.5 QCD Corrections to Deeply Inelastic Scattering: Several typos: (8.5.53) the denominator should be $\ln(\Delta_k(\tau)/\Delta_k(0))$, not $\Delta_n(0)$; in (8.5.67) $F_2(x,Q^2)$ inside $\int_x^1du/u^3$ must be $F_2(u,Q^2)$; (8.5.10)–(8.5.11) write $(x,t)$ for $(x,\tau)$; "the beam prepared in (8.27)" should say figure 8.27. Also $y$ is both the parent momentum fraction in (8.5.5) and the inelasticity in (8.5.62), and the table lists it twice; rename one. **Fixed:** Fixed Delta_k(0), F_2(u,Q^2), (x,tau) arguments, "figure 8.27"; renamed the convolution variable y to xi in (8.5.5)-(8.5.14) and the text, updated the table (xi row, removed the t note).
- [[#N3214|N3214]] 8.6 Jets in Hadron-Hadron Collisions: Physical-quantities table: with dimensionless number densities $f_i$ and the left side of (8.6.3) in $\mathrm{GeV}^{-3}$, the prefactor $2\pi p_\perp/s$ (in $\mathrm{GeV}^{-1}$) requires $\hat\sigma_{ij}$ in $\mathrm{GeV}^{-2}$, not $\mathrm{GeV}^{-4}$. Correct the unit, or state that $\hat\sigma_{ij}$ is the Owens–Reya–Glück scaled form $\hat s\,d\hat\sigma/(\pi\,d\hat t)$. **Fixed:** Dimensional check confirms GeV^-2; changed the unit and described hat-sigma as the scaled form hat-s d hat-sigma/(pi d hat-t).
- [[#N3214|N3214]] 8.6 Jets in Hadron-Hadron Collisions: The text calls figure 8.37 "the doubly differential dijet cross section", but the caption (and the figure) show the inclusive jet cross section against $p_\perp$ in rapidity bins. Make them consistent. **Fixed:** Changed the text to "doubly differential inclusive jet cross section".
- [[#N3215|N3215]] 8.7 Two-Photon Processes and the Photon-Structure Function: (8.7.32): each $q_i$ and $\bar q_i$ receives a photon source $\propto e_i^2$, so $d\Sigma/d\tau\supset2\sum_ie_i^2$ and $\Delta^{(i)}$ gets $e_i^2-\frac{1}{n_f}\sum_je_j^2$. For (8.7.31) and (8.7.33) to agree, $\langle e^2\rangle$ must be $\frac{1}{n_f}\sum_ie_i^2$, not $\frac{1}{2n_f}\sum_ie_i^2$. The table's "printed flavor sum" wording hints at this. **Fixed:** Verified the photon source for Sigma is 2 sum e_i^2; changed (8.7.32) to 1/n_f and updated the table description.
- [[#N3215|N3215]] 8.7 Two-Photon Processes and the Photon-Structure Function: Integrand arguments: in (8.7.31), $\Delta^{(i)}(x,\tau)$ inside $\int_x^1dy/y$ should be $\Delta^{(i)}(y,\tau)$; in (8.7.33), $\gamma(x,\tau)$ and $\Sigma(x,\tau)$ should be $\gamma(y,\tau)$ and $\Sigma(y,\tau)$. "Taking moments of (8.7.30)" should refer to (8.7.31). **Fixed:** Changed Delta, gamma, Sigma integrand arguments to the integration variable and "moments of (8.7.30)" to (8.7.31).
- [[#N3215|N3215]] 8.7 Two-Photon Processes and the Photon-Structure Function: Symbol clash: $y$ is the inelasticity in (8.7.18) and (8.7.20) and the convolution variable in (8.7.22)–(8.7.33); $x$ is also the argument of the flux factor $f(x)$ in (8.7.3). Rename the convolution variable, for example $\xi$. **Partly:** Renamed the convolution variable to xi in (8.7.22)-(8.7.33) and the table; left x in f(x) because it is only the dummy argument of a defined function.
- [[#N3216|N3216]] 8.8 Color Confinement: (8.8.6): in the Gaussian units used throughout ($W=\frac1{8\pi}\int D\cdot E$, $\sigma=(1-\epsilon)D/4\pi\epsilon$), the relation is $\mathbf D=\mathbf E+4\pi\mathbf P$, not $\mathbf D=\mathbf E+\mathbf P$. **Fixed:** Confirmed Gaussian units from W = (1/8 pi) int D.E and (8.8.11); added 4 pi.
- [[#N3216|N3216]] 8.8 Color Confinement: Figure 8.47 caption: the lattice temperature is $T=1/(aN_\tau)$, not $a/N_\tau$; the latter has units of length (the table gives $a$ in $\mathrm{GeV}^{-1}$). **Fixed:** Changed to T = 1/(a N_tau).
- [[#N3217|N3217]] 8.9 QCD-induced Electroweak Symmetry Breaking: (8.9.4): with off-diagonal $+gg'$, the massless eigenvector in $(b_3,\mathcal A)$ is $\propto(g',-g)$, i.e. $A\propto g'b_3-g\mathcal A$, which contradicts the stated $A=(g\mathcal A+g'b_3)/\sqrt{g^2+g'^2}$ and $Z=(gb_3-g'\mathcal A)/\sqrt{g^2+g'^2}$. For those eigenvectors (and $Q=T_3+Y/2$), the off-diagonal entries must be $-gg'$. **Fixed:** Verified the null vector of \[\[g^2,-gg'],[-gg',g'^2\]\] is (g',g), matching A and Z; changed both off-diagonal entries to -gg'.
- [[#N3219|N3219]] 8.P Problems: Problem 8.4: right after defining $V(r)=\frac{\alpha_s}{r}\langle\mathbf T^{(1)}\cdot\mathbf T^{(2)}\rangle$, the four potentials are printed as $-\frac43\alpha_s r$, $+\frac16\alpha_s r$, $-\frac23\alpha_s r$, $+\frac13\alpha_s r$. They must be $-\frac43\alpha_s/r$, $+\frac16\alpha_s/r$, $-\frac23\alpha_s/r$, $+\frac13\alpha_s/r$. **Fixed:** Replaced alpha_s r by alpha_s/r in all four potentials.
- [[#N3219|N3219]] 8.P Problems: Problem 8.5 table: the single box is the $6$ of $\mathrm{SU}(6)$ with $(3,2)$ and $G^2=35/12$, not dimension "1". Also, the embedded pair images are swapped relative to their content: the $21$ [$(6,3)\oplus(3^*,1)$, $G^2=20/3$] is the symmetric (horizontal) pair, and the $15$ [$G^2=14/3$] is the antisymmetric (vertical) pair, as the filenames vertical-pair and horizontal-pair indicate the opposite. **Fixed:** Set dimension of single box to 6 (Casimir 35/12 checks); swapped embeds so the 21 uses horizontal-pair.svg and the 15 uses vertical-pair.svg (SVG content checked; Casimirs 20/3 and 14/3 check).
- [[#N3219|N3219]] 8.P Problems: Problem 8.22 table: at $90^\circ$, $\hat\sigma(gg\to q\bar q)/\hat\sigma(ud\to ud)=\frac{7/48}{20/9}=\frac{21}{320}\approx0.066$, not $\approx0.66$. All other ratios check (0.1, 22/15, 7/6, 7/15, 11/4, 2187/160). **Fixed:** Changed 0.66 to 0.066 (7/48 divided by 20/9 = 21/320 checked).
- [[#N3219|N3219]] 8.P Problems: Problem 8.10 cites "the Feynman rules for the Faddeev–Popov ghost given in figure 8.10". Figure 8.10 is the dielectric polarization; the ghost vertex is figure 8.17. **Fixed:** Changed to figure 8.17 (Fig. 8.17 is the gluon-ghost-ghost vertex in 8.3; Fig. 8.10 is the dielectric figure in 8.2).
- [[#N3219|N3219]] 8.P Problems: Problem 8.27(c): $\sum_{i=u,d,s}e_i^4=2/9$; the quoted $2/3$ includes the color factor and should read $3\sum_ie_i^4=2/3$. The Han–Nambu citation should be *Phys. Rev.* **139**, B1006 (1965), not "149B, 1006". **Fixed:** Wrote 3 sum e_i^4 = 2/3 (color factor) and changed citation to Phys. Rev. 139, B1006 (1965).
- [[#N3219|N3219]] 8.P Problems: Problem 8.9: for the attractive Coulomb potential $-\alpha/r$, the factor $1+\alpha|\mathbf q|^2/(15\pi m^2)$ yields the contact term $-\frac{4\alpha_{\mathrm R}^2}{15m^2}\delta^3(\mathbf x)$. The printed $\frac{4}{15}\frac{\alpha_{\mathrm R}}{m^2}\delta^3(\mathbf x)$ is missing one power of $\alpha_{\mathrm R}$ and the sign. **Fixed:** Changed to -(4/15) alpha_R^2/m^2 delta^3(x) (Fourier transform of -4 pi alpha/q^2 times 1+alpha q^2/(15 pi m^2)).
- [[#N3220|N3220]] 8.R For Further Reading: HQET list: the second Eichten–Hill paper is *Phys. Lett.* **B243**, 427 (1990), not "*Phys. Rev.* **B243**". **Fixed:** Changed Phys. Rev. to Phys. Lett. for B243, 427 (1990).
- [[#N3223|N3223]] 9.2 The SU(5) Model: (9.2.19), hypercharge term: the coefficient must be $-\frac{g_5}{2}\sqrt{\frac35}\,\mathcal A_\mu\sum\bar f\gamma^\mu Yf$ (i.e. $-\frac{g'}{2}$), not $-\frac{g_5}{2}\frac35$, to agree with (9.2.21) $g'=g_5\sqrt{3/5}$ and (9.2.26). **Fixed:** Changed -(g5/2)(3/5) to -(g5/2) sqrt(3/5), consistent with (9.2.21).
- [[#N3223|N3223]] 9.2 The SU(5) Model: Outdated bounds and status: (9.2.28) should be updated to Super-Kamiokande (2020), $\tau/B(p\to e^+\pi^0)>2.4\times10^{34}\,\mathrm{yr}$ and $\tau/B(p\to\mu^+\pi^0)>1.6\times10^{34}\,\mathrm{yr}$. (9.2.29) has been superseded by SNO+ ($\sim10^{30}\,\mathrm{yr}$ for invisible proton decay). "the normal Higgs scalar $H^0$, still with unknown mass" should note $M_H\approx125\,\mathrm{GeV}$ (2012). **Fixed:** Kept source values; added an Update-to-the-source-values note after (9.2.29) with Super-K 2020 bounds (2.4e34 and 1.6e34 yr) and SNO+ invisible bound of order 1e30 yr; added M_H about 125 GeV (2012) to the Higgs sentence.
- [[#N3224|N3224]] 9.3 Coupling-Constant Unification: In (9.3.9), with the vault convention $Q=I_3+\tfrac12 Y$ of (6.3.6), $\tfrac12[\operatorname{tr}(Y_{\mathrm L}^2)+\operatorname{tr}(Y_{\mathrm R}^2)]=20/3$ per generation, not $5/3$; the traces must be of $(Y/2)^2$, i.e. write $\tfrac12[\operatorname{tr}(Y_{\mathrm L}/2)^2+\operatorname{tr}(Y_{\mathrm R}/2)^2]=\tfrac53 n_g$ so that $4\pi b_Y=-20n_g/9$ follows. **Fixed:** Replaced tr(Y_L^2), tr(Y_R^2) by tr(Y_L/2)^2, tr(Y_R/2)^2 (recomputed: 20/3 with Y, 5/3 with Y/2 per generation).
- [[#N3224|N3224]] 9.3 Coupling-Constant Unification: (9.3.15): solving (9.3.13) with $\alpha^{-1}=128.957$, $\alpha_s^{-1}=8.446$ gives $\mechanical{u}=1.45\times10^{15}\,\mathrm{GeV}$ ($\log_{10}u=15.161$, exactly the endpoint used in Fig. 9.3), not $1.44\times10^{15}$; state 1.45 or note the rounding. **Fixed:** Changed to 1.45e15 GeV (recomputed log10 u = 15.161).
- [[#N3224|N3224]] 9.3 Coupling-Constant Unification: Inputs are dated: current PDG values are $\alpha_s(M_Z^2)=0.1180\pm0.0009$, $M_Z=91.1876\,\mathrm{GeV}$, and $M_W\approx80.37\,\mathrm{GeV}$ gives $x_W^{(\mathrm{os})}=1-M_W^2/M_Z^2\approx0.2232$ rather than 0.2226 in (9.3.22); add a dated-values callout and recompute $u$ and (9.3.21). **Fixed:** Kept source values; added an Update-to-the-source-values note after (9.3.22): alpha_s = 0.1180, M_Z = 91.1876 GeV give u about 1.42e15 GeV and x_W about 0.203; M_W about 80.37 GeV gives x_W(os) about 0.2232 (recomputed).
- [[#N3225|N3225]] 9.4 Nucleon Decay: "Super-Kamiokande ... has a fiducial volume of $32{,}000\,\mathrm{m^3}$": 32 kt is the inner-detector volume; the standard fiducial volume is 22.5 kt ($22{,}500\,\mathrm{m^3}$) of the 50 kt tank. **Fixed:** Changed to inner-detector volume 32,000 m^3 with standard fiducial volume 22,500 m^3.
- [[#N3225|N3225]] 9.4 Nucleon Decay: The bound $8.2\times10^{33}$ yr for $p\to e^+\pi^0$ is superseded: Super-K (2020) gives $\tau/B>2.4\times10^{34}$ yr, so (9.4.14) is now more than 100 times below the limit; update the sentence and the "megaton-class detectors" remark (Hyper-Kamiokande and DUNE are under construction). **Fixed:** Kept source sentence; added an Update-to-the-source-values note: 2.4e34 yr, more than 100 times (9.4.14), Hyper-Kamiokande and DUNE under construction.
- [[#N3225|N3225]] 9.4 Nucleon Decay: The physical-quantities table assigns $B$ to both baryon number and branching fraction; rename the branching fraction (e.g. $\mathcal{B}$) in the table and in the Fig. 9.5 caption. **Fixed:** Renamed branching fraction to mathcal{B} in the table rows (B and tau/B); the Fig. 9.5 caption does not contain the symbol, so no caption change.
- [[#N3226|N3226]] 9.5 The Baryon Number of the Universe: With the convention (9.5.9) $S_{ba}=S(a\to b)$, (9.5.10) $(SS^\dagger)_{aa}=\sum_i S_{ai}S^*_{ai}=\sum_i\lvert S(i\to a)\rvert^2$, whereas $\sum_i\lvert S(a\to i)\rvert^2$ is $(S^\dagger S)_{aa}$; relabel the first line (both equal 1, so the conclusion stands). **Fixed:** Changed (SS^dagger)_aa to (S^dagger S)_aa; the rest stands by unitarity.
- [[#N3226|N3226]] 9.5 The Baryon Number of the Universe: (9.5.1) is outdated: Planck CMB plus BBN give $\eta=n_B/n_\gamma=(6.1\pm0.04)\times10^{-10}$; add the current value next to the source range. **Fixed:** Added a parenthetical after the source range: Planck CMB and BBN give about 6.1e-10 with approximately 1% uncertainty.
- [[#N3227|N3227]] 9.6 The Problem of Fermion Masses: Subtracting (9.6.4) from (9.6.3) gives $+\frac{3}{20n_f}+\frac{27}{20n_f}=+\frac{3}{2n_f}$, so (9.6.5) must read $+\frac{3}{2n_f}\ln(\alpha_1(\mu^2)/\alpha_u)$, not $-\frac{3}{2n_f}$; only the plus sign reproduces $m_b/m_\tau=e^{(4/7)\ln8-(1/4)\ln(65/40)}=2.91$, while the printed minus gives 3.70. **Fixed:** Changed -3/(2n_f) to +3/(2n_f) (3/20 + 27/20 = 3/2; plus sign gives m_b/m_tau = 2.91 as in (9.6.6), minus gives 3.70).
- [[#N3233|N3233]] A.1 Four-Vectors and Scalar Product: The letter $x$ denotes both the four-vector $x^\mu$ and its first spatial component in (A.1.1), and $x^2$ means the invariant (A.1.4) while $x^2$ with an index means a component; note this explicitly or write the spatial components as $x^1,x^2,x^3$ only. **Fixed:** Added one clarifying sentence after (A.1.4) on the two meanings of x and x^2 (source notation kept).
- [[#N3236|N3236]] A.4 Dirac Equation and Dirac Spinors: Symbol clashes: $\lambda$ is the helicity label and also the Fierz matrix $\lambda_{ij}$ in (A.4.30), and $\mu$ is a helicity label in (A.4.7)–(A.4.9) as well as a Lorentz index; use e.g. $\lambda,\lambda'$ for helicities and $C_{ij}$ for the Fierz coefficients. **Fixed:** Renamed helicity mu to lambda' in (A.4.7)-(A.4.9) and Fierz lambda_ij to C_ij in (A.4.29)-(A.4.30); added lambda' to the helicity table row.
- [[#N3236|N3236]] A.4 Dirac Equation and Dirac Spinors: The physical-quantities table lists $\mechanical{s}$ twice (as "spin state" and as polarization four-vector); merge into one row for the polarization four-vector. **Fixed:** Merged the spin-state row into the polarization-vector row.
- [[#N3237|N3237]] A.5 Color Algebra: (A.5.19): with $[T^b,T^c]=if^{bcd}T^d$ and $f^{abc}f^{dbc}=N\delta^{ad}$, $if^{abc}T^bT^c=\tfrac{i}{2}f^{abc}[T^b,T^c]=-\tfrac{N}{2}T^a$, not $+\tfrac{C_A}{2}T^a$; either correct the sign or state that the vertex factor is taken as $-if^{abc}$ in this diagram. **Fixed:** Changed left side to -i f^{abc}(T^b T^c) so the stated C_A/2 T^a result and the figure factor 1/2 stay correct.
- [[#N3242|N3242]] B.1 Phase-Space Formulas -  Decay Rates and Cross Sections: (B.1.4) must read $d\Gamma/d\Omega_{\mathrm{cm}}=\lvert\mathcal M\rvert^2 S_{12}/(64\pi^2 m_\alpha^3)\cdot S$ (equivalently $\lvert\mathcal M\rvert^2\lvert\mathbf p\rvert/(32\pi^2m_\alpha^2)$); with $m_\alpha^2$ the right side has dimension $\mathrm{GeV}^2$ instead of GeV. **Fixed:** /(32 pi^2 m^2)).
- [[#N3242|N3242]] B.1 Phase-Space Formulas -  Decay Rates and Cross Sections: $S$ denotes the statistical weight and $S_{12},S_{34}$ the kinematic factor; rename one (e.g. $\lambda^{1/2}_{12}$ for the kinematic factor) to avoid the clash. **Rejected:** The kinematic factors always carry pair subscripts and are colored, S never does, and the table defines both; renaming the source notation is not needed.
- [[#N3243|N3243]] B.2 Feynman Rules -  Generalities: $\epsilon$ is used for the polarization vector and for the $+i\epsilon$ prescription in the propagators; write the infinitesimal as $i0^+$ or $i\eta$. **Fixed:** Replaced the four +i epsilon propagator terms by +i0^+.
- [[#N3244|N3244]] B.3 Feynman Integrals: Wick rotation gives $\mathcal I_{mn}=(-1)^{n-m+1}B(m,n-m)/[16\pi^2 i(a^2)^{n-m}]$; the printed form without the sign factor is right for $n-m$ odd (e.g. $m=2,n=3$: $-i/(32\pi^2a^2)$) but wrong for $n-m$ even (e.g. $m=2,n=4$ gives $+i/(96\pi^2a^4)$, not $-i/(96\pi^2a^4)$). **Fixed:** Added the factor (Wick rotation recomputed; m=2,n=3 gives -i/(32 pi^2 a^2) as before).
- [[#N3244|N3244]] B.3 Feynman Integrals: $m$ is both a mass ($m_j$, $m_k$ in (B.3.2)) and the power index in (B.3.12) and (B.3.17), and $\lambda$ here is a Schwinger parameter; rename the index (e.g. $r$) to avoid the clash. **Partly:** Renamed the power index m to r in (B.3.12), its condition, and (B.3.17); lambda has only the Schwinger meaning inside this note, so no change.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3132 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/00 Front matter/Preface\|00 Front matter/Preface]] | Analyzed | low | no | no | [[#N3132\|View]] |
| N3133 | [[Title, Publication Details, and Epigraph\|00 Front matter/Title, Publication Details, and Epigraph]] | Analyzed | low | no | no | [[#N3133\|View]] |
| N3134 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/01 Introduction/1.0 Chapter introduction\|01 Introduction/1.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3134\|View]] |
| N3135 | [[1.1 Elements of the Standard Model of Particle Physics\|01 Introduction/1.1 Elements of the Standard Model of Particle Physics]] | Analyzed | low | no | yes | [[#N3135\|View]] |
| N3136 | [[1.2 Leptons\|01 Introduction/1.2 Leptons]] | Analyzed | medium | no | no | [[#N3136\|View]] |
| N3137 | [[1.3 Quarks\|01 Introduction/1.3 Quarks]] | Analyzed | medium | yes | no | [[#N3137\|View]] |
| N3138 | [[1.4 The Fundamental Interactions\|01 Introduction/1.4 The Fundamental Interactions]] | Analyzed | medium | no | no | [[#N3138\|View]] |
| N3139 | [[1.B References\|01 Introduction/1.B References]] | Analyzed | low | no | no | [[#N3139\|View]] |
| N3140 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/01 Introduction/1.P Problems\|01 Introduction/1.P Problems]] | Analyzed | low | no | no | [[#N3140\|View]] |
| N3141 | [[1.R For Further Reading\|01 Introduction/1.R For Further Reading]] | Analyzed | low | no | no | [[#N3141\|View]] |
| N3142 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/02 Lagrangian Formalism and Conservation Laws/2.0 Chapter introduction\|02 Lagrangian Formalism and Conservation Laws/2.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3142\|View]] |
| N3143 | [[2.1 Hamilton's Principle\|02 Lagrangian Formalism and Conservation Laws/2.1 Hamilton's Principle]] | Analyzed | medium | yes | yes | [[#N3143\|View]] |
| N3144 | [[2.2 Free Field Theory Examples\|02 Lagrangian Formalism and Conservation Laws/2.2 Free Field Theory Examples]] | Analyzed | medium | yes | no | [[#N3144\|View]] |
| N3145 | [[2.3 Symmetries and Conservation Laws\|02 Lagrangian Formalism and Conservation Laws/2.3 Symmetries and Conservation Laws]] | Analyzed | high | no | no | [[#N3145\|View]] |
| N3146 | [[2.B References\|02 Lagrangian Formalism and Conservation Laws/2.B References]] | Analyzed | low | no | no | [[#N3146\|View]] |
| N3147 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/02 Lagrangian Formalism and Conservation Laws/2.P Problems\|02 Lagrangian Formalism and Conservation Laws/2.P Problems]] | Analyzed | medium | yes | no | [[#N3147\|View]] |
| N3148 | [[2.R For Further Reading\|02 Lagrangian Formalism and Conservation Laws/2.R For Further Reading]] | Analyzed | low | no | no | [[#N3148\|View]] |
| N3149 | [[3.1 Historical Preliminaries\|03 The Idea of Gauge Invariance/3.1 Historical Preliminaries]] | Analyzed | medium | no | yes | [[#N3149\|View]] |
| N3150 | [[3.2 Gauge Invariance in Classical Electrodynamics\|03 The Idea of Gauge Invariance/3.2 Gauge Invariance in Classical Electrodynamics]] | Analyzed | medium | no | yes | [[#N3150\|View]] |
| N3151 | [[3.3 Phase Invariance in Quantum Mechanics\|03 The Idea of Gauge Invariance/3.3 Phase Invariance in Quantum Mechanics]] | Analyzed | low | no | yes | [[#N3151\|View]] |
| N3152 | [[3.4 Significance of Potentials in Quantum Theory\|03 The Idea of Gauge Invariance/3.4 Significance of Potentials in Quantum Theory]] | Analyzed | medium | yes | yes | [[#N3152\|View]] |
| N3153 | [[3.5 Phase Invariance in Field Theory\|03 The Idea of Gauge Invariance/3.5 Phase Invariance in Field Theory]] | Analyzed | high | yes | no | [[#N3153\|View]] |
| N3154 | [[3.6 Feynman Rules for Electromagnetism\|03 The Idea of Gauge Invariance/3.6 Feynman Rules for Electromagnetism]] | Analyzed | medium | no | no | [[#N3154\|View]] |
| N3155 | [[3.B References\|03 The Idea of Gauge Invariance/3.B References]] | Analyzed | low | no | no | [[#N3155\|View]] |
| N3156 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/03 The Idea of Gauge Invariance/3.P Problems\|03 The Idea of Gauge Invariance/3.P Problems]] | Analyzed | low | no | no | [[#N3156\|View]] |
| N3157 | [[3.R For Further Reading\|03 The Idea of Gauge Invariance/3.R For Further Reading]] | Analyzed | low | no | no | [[#N3157\|View]] |
| N3158 | [[4.1 Motivation\|04 Non-Abelian Gauge Theories/4.1 Motivation]] | Analyzed | low | no | no | [[#N3158\|View]] |
| N3159 | [[4.2 Construction\|04 Non-Abelian Gauge Theories/4.2 Construction]] | Analyzed | medium | no | yes | [[#N3159\|View]] |
| N3160 | [[4.3 Some Physical Consequences\|04 Non-Abelian Gauge Theories/4.3 Some Physical Consequences]] | Analyzed | medium | yes | no | [[#N3160\|View]] |
| N3161 | [[4.4 Assessment\|04 Non-Abelian Gauge Theories/4.4 Assessment]] | Analyzed | low | no | no | [[#N3161\|View]] |
| N3162 | [[4.B References\|04 Non-Abelian Gauge Theories/4.B References]] | Analyzed | low | no | no | [[#N3162\|View]] |
| N3163 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/04 Non-Abelian Gauge Theories/4.P Problems\|04 Non-Abelian Gauge Theories/4.P Problems]] | Analyzed | low | no | no | [[#N3163\|View]] |
| N3164 | [[4.R For Further Reading\|04 Non-Abelian Gauge Theories/4.R For Further Reading]] | Analyzed | low | no | no | [[#N3164\|View]] |
| N3165 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/05 Hidden Symmetries/5.0 Chapter introduction\|05 Hidden Symmetries/5.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3165\|View]] |
| N3166 | [[5.1 The Idea of Spontaneously Broken Symmetries\|05 Hidden Symmetries/5.1 The Idea of Spontaneously Broken Symmetries]] | Analyzed | medium | yes | yes | [[#N3166\|View]] |
| N3167 | [[5.2 Spontaneous Breaking of Continuous Symmetries\|05 Hidden Symmetries/5.2 Spontaneous Breaking of Continuous Symmetries]] | Analyzed | medium | yes | yes | [[#N3167\|View]] |
| N3168 | [[5.3 Spontaneous Breaking of a Gauge Symmetry\|05 Hidden Symmetries/5.3 Spontaneous Breaking of a Gauge Symmetry]] | Analyzed | medium | yes | yes | [[#N3168\|View]] |
| N3169 | [[5.4 The Sigma Model\|05 Hidden Symmetries/5.4 The Sigma Model]] | Analyzed | medium | yes | no | [[#N3169\|View]] |
| N3170 | [[5.5 Spontaneous Breaking of a Non-Abelian Symmetry\|05 Hidden Symmetries/5.5 Spontaneous Breaking of a Non-Abelian Symmetry]] | Analyzed | low | no | no | [[#N3170\|View]] |
| N3171 | [[5.6 Prospects\|05 Hidden Symmetries/5.6 Prospects]] | Analyzed | low | no | no | [[#N3171\|View]] |
| N3172 | [[5.B References\|05 Hidden Symmetries/5.B References]] | Analyzed | low | no | no | [[#N3172\|View]] |
| N3173 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/05 Hidden Symmetries/5.P Problems\|05 Hidden Symmetries/5.P Problems]] | Analyzed | low | no | no | [[#N3173\|View]] |
| N3174 | [[5.R For Further Reading\|05 Hidden Symmetries/5.R For Further Reading]] | Analyzed | low | no | no | [[#N3174\|View]] |
| N3175 | [[6.0 Chapter introduction\|06 Electroweak Interactions of Leptons/6.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3175\|View]] |
| N3176 | [[6.1 An Effective Lagrangian for the Weak Interactions\|06 Electroweak Interactions of Leptons/6.1 An Effective Lagrangian for the Weak Interactions]] | Analyzed | medium | yes | yes | [[#N3176\|View]] |
| N3177 | [[6.2 Intermediate Vector Bosons -  A First Look\|06 Electroweak Interactions of Leptons/6.2 Intermediate Vector Bosons -  A First Look]] | Analyzed | medium | yes | no | [[#N3177\|View]] |
| N3178 | [[6.3 The Standard Electroweak Theory of Leptons\|06 Electroweak Interactions of Leptons/6.3 The Standard Electroweak Theory of Leptons]] | Analyzed | medium | no | no | [[#N3178\|View]] |
| N3179 | [[6.4 Neutral-Current Interactions among Leptons\|06 Electroweak Interactions of Leptons/6.4 Neutral-Current Interactions among Leptons]] | Analyzed | medium | yes | no | [[#N3179\|View]] |
| N3180 | [[6.5 The Higgs Boson -  A First Look\|06 Electroweak Interactions of Leptons/6.5 The Higgs Boson -  A First Look]] | Analyzed | medium | yes | no | [[#N3180\|View]] |
| N3181 | [[6.6 The Higgs Boson, Asymptotic Behavior, and the 1-TeV Scale\|06 Electroweak Interactions of Leptons/6.6 The Higgs Boson, Asymptotic Behavior, and the 1-TeV Scale]] | Analyzed | low | yes | no | [[#N3181\|View]] |
| N3182 | [[6.7 Neutrino Mixing and Neutrino Mass\|06 Electroweak Interactions of Leptons/6.7 Neutrino Mixing and Neutrino Mass]] | Analyzed | medium | no | yes | [[#N3182\|View]] |
| N3183 | [[6.8 Renormalizability of the Theory\|06 Electroweak Interactions of Leptons/6.8 Renormalizability of the Theory]] | Analyzed | medium | yes | no | [[#N3183\|View]] |
| N3184 | [[6.9 Interim Assessment\|06 Electroweak Interactions of Leptons/6.9 Interim Assessment]] | Analyzed | low | no | no | [[#N3184\|View]] |
| N3185 | [[6.B References\|06 Electroweak Interactions of Leptons/6.B References]] | Analyzed | low | no | no | [[#N3185\|View]] |
| N3186 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/06 Electroweak Interactions of Leptons/6.P Problems\|06 Electroweak Interactions of Leptons/6.P Problems]] | Analyzed | medium | no | no | [[#N3186\|View]] |
| N3187 | [[6.R For Further Reading\|06 Electroweak Interactions of Leptons/6.R For Further Reading]] | Analyzed | low | no | no | [[#N3187\|View]] |
| N3188 | [[7.0 Chapter introduction\|07 Electroweak Interactions of Quarks/7.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3188\|View]] |
| N3189 | [[7.1 The Standard Electroweak Theory -  Preliminaries\|07 Electroweak Interactions of Quarks/7.1 The Standard Electroweak Theory -  Preliminaries]] | Analyzed | medium | no | no | [[#N3189\|View]] |
| N3190 | [[7.10 Incompleteness of the Electroweak Theory\|07 Electroweak Interactions of Quarks/7.10 Incompleteness of the Electroweak Theory]] | Analyzed | medium | yes | no | [[#N3190\|View]] |
| N3191 | [[7.11 The Hierarchy Problem\|07 Electroweak Interactions of Quarks/7.11 The Hierarchy Problem]] | Analyzed | medium | yes | no | [[#N3191\|View]] |
| N3192 | [[7.12 The Vacuum Energy Problem\|07 Electroweak Interactions of Quarks/7.12 The Vacuum Energy Problem]] | Analyzed | medium | yes | no | [[#N3192\|View]] |
| N3193 | [[7.13 Reflections\|07 Electroweak Interactions of Quarks/7.13 Reflections]] | Analyzed | low | no | no | [[#N3193\|View]] |
| N3194 | [[7.2 Electroweak Gauge Bosons\|07 Electroweak Interactions of Quarks/7.2 Electroweak Gauge Bosons]] | Analyzed | low | yes | no | [[#N3194\|View]] |
| N3195 | [[7.3 Electron-Positron Annihilations\|07 Electroweak Interactions of Quarks/7.3 Electron-Positron Annihilations]] | Analyzed | medium | yes | no | [[#N3195\|View]] |
| N3196 | [[7.4 Deeply Inelastic Lepton-Hadron Scattering\|07 Electroweak Interactions of Quarks/7.4 Deeply Inelastic Lepton-Hadron Scattering]] | Analyzed | medium | yes | no | [[#N3196\|View]] |
| N3197 | [[7.5 Hadron-Hadron Interactions\|07 Electroweak Interactions of Quarks/7.5 Hadron-Hadron Interactions]] | Analyzed | medium | yes | yes | [[#N3197\|View]] |
| N3198 | [[7.6 Further Tests of the Electroweak Theory\|07 Electroweak Interactions of Quarks/7.6 Further Tests of the Electroweak Theory]] | Analyzed | medium | yes | no | [[#N3198\|View]] |
| N3199 | [[7.7 A Brief Look at Quantum Corrections\|07 Electroweak Interactions of Quarks/7.7 A Brief Look at Quantum Corrections]] | Analyzed | medium | yes | no | [[#N3199\|View]] |
| N3200 | [[7.8 The Scale of Fermion Masses\|07 Electroweak Interactions of Quarks/7.8 The Scale of Fermion Masses]] | Analyzed | low | yes | no | [[#N3200\|View]] |
| N3201 | [[7.9 Search for the Higgs Boson\|07 Electroweak Interactions of Quarks/7.9 Search for the Higgs Boson]] | Analyzed | low | no | no | [[#N3201\|View]] |
| N3202 | [[7.B References\|07 Electroweak Interactions of Quarks/7.B References]] | Analyzed | low | no | no | [[#N3202\|View]] |
| N3203 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/07 Electroweak Interactions of Quarks/7.P Problems\|07 Electroweak Interactions of Quarks/7.P Problems]] | Analyzed | low | no | no | [[#N3203\|View]] |
| N3204 | [[7.R For Further Reading\|07 Electroweak Interactions of Quarks/7.R For Further Reading]] | Analyzed | low | no | no | [[#N3204\|View]] |
| N3205 | [[8.0 Chapter introduction\|08 Strong Interactions among Quarks/8.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3205\|View]] |
| N3206 | [[8.1 A Color Gauge Theory\|08 Strong Interactions among Quarks/8.1 A Color Gauge Theory]] | Analyzed | medium | yes | yes | [[#N3206\|View]] |
| N3207 | [[8.10 The 1 - N Expansion\|08 Strong Interactions among Quarks/8.10 The 1 - N Expansion]] | Analyzed | low | no | yes | [[#N3207\|View]] |
| N3208 | [[8.11 Strong-Interaction Symmetries\|08 Strong Interactions among Quarks/8.11 Strong-Interaction Symmetries]] | Analyzed | medium | no | no | [[#N3208\|View]] |
| N3209 | [[8.12 Assessment\|08 Strong Interactions among Quarks/8.12 Assessment]] | Analyzed | low | no | no | [[#N3209\|View]] |
| N3210 | [[8.2 Charge Renormalization in Electrodynamics\|08 Strong Interactions among Quarks/8.2 Charge Renormalization in Electrodynamics]] | Analyzed | medium | yes | yes | [[#N3210\|View]] |
| N3211 | [[8.3 The Running Coupling Constant in QCD\|08 Strong Interactions among Quarks/8.3 The Running Coupling Constant in QCD]] | Analyzed | medium | yes | yes | [[#N3211\|View]] |
| N3212 | [[8.4 Perturbative QCD -  A First Example\|08 Strong Interactions among Quarks/8.4 Perturbative QCD -  A First Example]] | Analyzed | medium | yes | no | [[#N3212\|View]] |
| N3213 | [[8.5 QCD Corrections to Deeply Inelastic Scattering\|08 Strong Interactions among Quarks/8.5 QCD Corrections to Deeply Inelastic Scattering]] | Analyzed | high | yes | yes | [[#N3213\|View]] |
| N3214 | [[8.6 Jets in Hadron-Hadron Collisions\|08 Strong Interactions among Quarks/8.6 Jets in Hadron-Hadron Collisions]] | Analyzed | low | yes | no | [[#N3214\|View]] |
| N3215 | [[8.7 Two-Photon Processes and the Photon-Structure Function\|08 Strong Interactions among Quarks/8.7 Two-Photon Processes and the Photon-Structure Function]] | Analyzed | medium | yes | no | [[#N3215\|View]] |
| N3216 | [[8.8 Color Confinement\|08 Strong Interactions among Quarks/8.8 Color Confinement]] | Analyzed | medium | yes | yes | [[#N3216\|View]] |
| N3217 | [[8.9 QCD-induced Electroweak Symmetry Breaking\|08 Strong Interactions among Quarks/8.9 QCD-induced Electroweak Symmetry Breaking]] | Analyzed | low | no | no | [[#N3217\|View]] |
| N3218 | [[8.B References\|08 Strong Interactions among Quarks/8.B References]] | Analyzed | low | no | no | [[#N3218\|View]] |
| N3219 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/08 Strong Interactions among Quarks/8.P Problems\|08 Strong Interactions among Quarks/8.P Problems]] | Analyzed | low | no | no | [[#N3219\|View]] |
| N3220 | [[8.R For Further Reading\|08 Strong Interactions among Quarks/8.R For Further Reading]] | Analyzed | low | no | no | [[#N3220\|View]] |
| N3221 | [[9.0 Chapter introduction\|09 Unified Theories/9.0 Chapter introduction]] | Analyzed | low | no | no | [[#N3221\|View]] |
| N3222 | [[9.1 Why Unify -\|09 Unified Theories/9.1 Why Unify -]] | Analyzed | low | no | no | [[#N3222\|View]] |
| N3223 | [[9.2 The SU(5) Model\|09 Unified Theories/9.2 The SU(5) Model]] | Analyzed | medium | no | no | [[#N3223\|View]] |
| N3224 | [[9.3 Coupling-Constant Unification\|09 Unified Theories/9.3 Coupling-Constant Unification]] | Analyzed | medium | yes | no | [[#N3224\|View]] |
| N3225 | [[9.4 Nucleon Decay\|09 Unified Theories/9.4 Nucleon Decay]] | Analyzed | medium | yes | no | [[#N3225\|View]] |
| N3226 | [[9.5 The Baryon Number of the Universe\|09 Unified Theories/9.5 The Baryon Number of the Universe]] | Analyzed | medium | yes | no | [[#N3226\|View]] |
| N3227 | [[9.6 The Problem of Fermion Masses\|09 Unified Theories/9.6 The Problem of Fermion Masses]] | Analyzed | medium | yes | no | [[#N3227\|View]] |
| N3228 | [[9.7 Assessment\|09 Unified Theories/9.7 Assessment]] | Analyzed | low | no | no | [[#N3228\|View]] |
| N3229 | [[9.B References\|09 Unified Theories/9.B References]] | Analyzed | low | no | no | [[#N3229\|View]] |
| N3230 | [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/09 Unified Theories/9.P Problems\|09 Unified Theories/9.P Problems]] | Analyzed | low | no | no | [[#N3230\|View]] |
| N3231 | [[9.R For Further Reading\|09 Unified Theories/9.R For Further Reading]] | Analyzed | low | no | no | [[#N3231\|View]] |
| N3232 | [[Epilogue.0 Epilogue\|90 Epilogue/Epilogue.0 Epilogue]] | Analyzed | low | no | no | [[#N3232\|View]] |
| N3233 | [[A.1 Four-Vectors and Scalar Product\|91 Appendix A Notations and Conventions/A.1 Four-Vectors and Scalar Product]] | Analyzed | low | no | no | [[#N3233\|View]] |
| N3234 | [[A.2 Dirac Matrices\|91 Appendix A Notations and Conventions/A.2 Dirac Matrices]] | Analyzed | low | no | no | [[#N3234\|View]] |
| N3235 | [[A.3 Trace Theorems and Tensor Contractions\|91 Appendix A Notations and Conventions/A.3 Trace Theorems and Tensor Contractions]] | Analyzed | low | no | no | [[#N3235\|View]] |
| N3236 | [[A.4 Dirac Equation and Dirac Spinors\|91 Appendix A Notations and Conventions/A.4 Dirac Equation and Dirac Spinors]] | Analyzed | low | no | no | [[#N3236\|View]] |
| N3237 | [[A.5 Color Algebra\|91 Appendix A Notations and Conventions/A.5 Color Algebra]] | Analyzed | low | no | no | [[#N3237\|View]] |
| N3238 | [[A.6 Weyl-van der Waerden Spinors\|91 Appendix A Notations and Conventions/A.6 Weyl-van der Waerden Spinors]] | Analyzed | low | no | no | [[#N3238\|View]] |
| N3239 | [[Appendix A.B References\|91 Appendix A Notations and Conventions/Appendix A.B References]] | Analyzed | low | no | no | [[#N3239\|View]] |
| N3240 | [[Appendix B.B References\|92 Appendix B Observables and Feynman Rules/Appendix B.B References]] | Analyzed | low | no | no | [[#N3240\|View]] |
| N3241 | [[Appendix B.R For Further Reading\|92 Appendix B Observables and Feynman Rules/Appendix B.R For Further Reading]] | Analyzed | low | no | no | [[#N3241\|View]] |
| N3242 | [[B.1 Phase-Space Formulas -  Decay Rates and Cross Sections\|92 Appendix B Observables and Feynman Rules/B.1 Phase-Space Formulas -  Decay Rates and Cross Sections]] | Analyzed | medium | no | no | [[#N3242\|View]] |
| N3243 | [[B.2 Feynman Rules -  Generalities\|92 Appendix B Observables and Feynman Rules/B.2 Feynman Rules -  Generalities]] | Analyzed | low | no | no | [[#N3243\|View]] |
| N3244 | [[B.3 Feynman Integrals\|92 Appendix B Observables and Feynman Rules/B.3 Feynman Integrals]] | Analyzed | medium | no | no | [[#N3244\|View]] |
| N3245 | [[B.4 Regularization Procedures\|92 Appendix B Observables and Feynman Rules/B.4 Regularization Procedures]] | Analyzed | low | no | no | [[#N3245\|View]] |
| N3246 | [[B.5 Feynman Rules -  Electrodynamics\|92 Appendix B Observables and Feynman Rules/B.5 Feynman Rules -  Electrodynamics]] | Analyzed | low | no | no | [[#N3246\|View]] |
| N3247 | [[Appendix C.0 Physical Constants\|93 Appendix C Physical Constants/Appendix C.0 Physical Constants]] | Analyzed | low | no | no | [[#N3247\|View]] |
| N3248 | [[Appendix C.R For Further Reading\|93 Appendix C Physical Constants/Appendix C.R For Further Reading]] | Analyzed | low | no | no | [[#N3248\|View]] |
| N3249 | [[Author Index\|99 Back matter/Author Index]] | Analyzed | low | no | no | [[#N3249\|View]] |
| N3250 | [[Subject Index\|99 Back matter/Subject Index]] | Analyzed | low | no | no | [[#N3250\|View]] |
| N3251 | [[Gauge Theories - Contents\|Gauge Theories - Contents]] | Analyzed | low | no | no | [[#N3251\|View]] |

## Suggestions

### N3132

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/00 Front matter/Preface|Preface]]  
Priority: low · Graph: no · Manim: no

Clean preface transcription.

- [Structure] "Institut für Theoretical Particle Physics" mixes German and English. Check it against the source: the Karlsruhe institute is "Institut für Theoretische Teilchenphysik".

### N3133

Note: [[Title, Publication Details, and Epigraph|Title, Publication Details, and Epigraph]]  
Priority: low · Graph: no · Manim: no

Front-matter transcription; nothing to improve.

- [Structure] No change needed.

### N3134

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/01 Introduction/1.0 Chapter introduction|1.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Readable overview prose from 2013 that contains statements now superseded by experiment.

- [Correctness] Outdated statements: the Higgs boson is now established with $m_H\approx125.1\,\mathrm{GeV}$ (not only "less than 200 GeV" from indirect fits), and the LHC has run at 13 and 13.6 TeV. Add a dated status callout rather than editing the source text.
- [Intuition] For "shorter than about $10^{-15}\,\mathrm{cm}$, less than 1% of the proton radius", add the actual range $\hbar/M_Wc\approx2.5\times10^{-16}\,\mathrm{cm}$. Note that $10^{-15}\,\mathrm{cm}$ is about 1.2% of $r_p\approx0.84\times10^{-13}\,\mathrm{cm}$.
- [Structure] End the long prose with a short bullet list of the open questions it raises (EWSB agent, fermion masses, hierarchy, vacuum energy, dark matter, baryon asymmetry).

### N3135

Note: [[1.1 Elements of the Standard Model of Particle Physics|1.1 Elements of the Standard Model of Particle Physics]]  
Priority: low · Graph: no · Manim: yes

Clear introduction to the fermion content and parity violation; the resolution estimate has no worked example.

- [Example] Work the resolution estimate: $\hbar c\approx197\,\mathrm{MeV\,fm}=1.97\times10^{-19}\,\mathrm{TeV\,m}$, so $E_\perp=2\,\mathrm{TeV}$ gives $r\approx10^{-19}\,\mathrm m$.
- [Manim] Animate the Wu experiment under a mirror (parity) reflection: the axial spin $\vec J$ stays the same while the electron momentum reverses, so the preferred sign of $\vec J\cdot\hat p_e$ flips. This shows why the observed asymmetry violates parity.
- [Structure] $\hbar$ and $c$ are uncolored in text and table, while the vault convention is `\energy{\hbar}` and `\mechanical{c}`. The Fig. 1.1 caption writes "SU(2)ₗ" (lowercase) where "SU(2)_L" is meant.

### N3136

Note: [[1.2 Leptons|1.2 Leptons]]  
Priority: medium · Graph: no · Manim: no

Short and correct in substance, but tau is overloaded and the V−A structure is not explained.

- [Correctness] Symbol clash: $\tau$ denotes the tau lepton, the tau lifetime ($c\tau=87\,\mu\mathrm m$) and the isospin matrices $\tau_\pm$. The table lists only the lifetime. Rename the lifetime to $\tau_\tau$ and add $\tau_\pm,\tau_{1,2}$ to the table.
- [Intuition] Explain that $\tfrac12(1-\gamma_5)$ is the left-handed projector $P_L$, so (1.2.2) couples only the L components in (1.2.1).
- [Correctness] Outdated: tau-family universality "verified within 1.5%" is now tested at the few-per-mille level (PDG). Add a dated note.
- [Links] Link "problem 1.6" and "problem 1.9" to \[\[1.P Problems\]\].

### N3137

Note: [[1.3 Quarks|1.3 Quarks]]  
Priority: medium · Graph: yes · Manim: no

Rich evidence for quark spin, charge and color, with the R ratios and the pi^0 width correct, but with typos, one symbol clash and dated measurements.

- [Correctness] Transcription slips: "proposed quarks in 1964 by as a means" (delete "by"), and "may be produced in the semifinal state" should read "final state".
- [Correctness] Symbol clash: $B$ is baryon number in Table 1.1 and (1.3.6), and $B_1,B_3,B_{\mathrm{exp}}$ are branching ratios. Rename the latter to $\mathrm{BR}_1$ and so on.
- [Correctness] Dated data: $B_{\mathrm{exp}}=(17.44\pm0.85)\%$ is now $(17.82\pm0.04)\%$, and the measured $\Gamma(\pi^0\to\gamma\gamma)$ is now about $7.80\pm0.12\,\mathrm{eV}$. Add a status note.
- [Graph] Step plot of $R$ against $\sqrt s$ from 1 to 15 GeV: $R=2$ (u, d, s), $10/3$ above the charm threshold of about 3.7 GeV, and $11/3$ above about 10.6 GeV, overlaid with the $N_c=1$ values $2/3$, $10/9$ and $11/9$.
- [Example] Show the substitution in (1.3.17): $\alpha=1/137$, $M_\pi=135\,\mathrm{MeV}$, $f_\pi=92.4\,\mathrm{MeV}$ gives 0.86 eV $\times N_c^2$, which reproduces (1.3.18).

### N3138

Note: [[1.4 The Fundamental Interactions|1.4 The Fundamental Interactions]]  
Priority: medium · Graph: no · Manim: no

Correct currents (1.4.10 and 1.4.12 check out), but it leaves the chiral couplings unstated and the GIM cancellation underived.

- [Example] Give $L_e$ and $R_e$ explicitly. From (1.4.5), with $J^{(\mathrm{EM})}=-\bar e\gamma e$ split into chiral parts, $L_e=-\tfrac12+\sin^2\theta_W$ and $R_e=\sin^2\theta_W$ in the normalization of (1.4.6).
- [Intuition] Add the one-line reason for GIM: $(d_\theta,s_\theta)$ is a rotation of $(d,s)$, so $\bar d_\theta d_\theta+\bar s_\theta s_\theta=\bar dd+\bar ss$ and the $\bar sd$ cross terms of (1.4.10) cancel in (1.4.12).
- [Structure] Remove the stray comma in "framework of the electroweak, theory".

### N3139

Note: [[1.B References|1.B References]]  
Priority: low · Graph: no · Manim: no

Reference list; nothing to explain.

- [Structure] No change needed. Optionally add the current PDG Review of Particle Physics next to ref. 2.

### N3140

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/01 Introduction/1.P Problems|1.P Problems]]  
Priority: low · Graph: no · Manim: no

Correct problem statements; the formulas in 1.1, 1.2 and 1.8 check out.

- [Structure] $\sigma$ is both the charged scalar and the cross section (1.4, 1.5). Consider calling the scalar $S^\pm$ to remove the clash that the table only acknowledges.
- [Links] "appendix B.5" refers to Quigg's appendix, which is not transcribed. Add a link when it exists, or point to \[\[D.3 Vertex Factors\]\] (Griffiths conventions) with a warning about sign conventions.

### N3141

Note: [[1.R For Further Reading|1.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Annotated reading list.

- [Structure] No change needed.

### N3142

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/02 Lagrangian Formalism and Conservation Laws/2.0 Chapter introduction|2.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Short, clear chapter overview.

- [Links] Link the three announced topics to \[\[2.1 Hamilton's Principle\]\], \[\[2.2 Free Field Theory Examples\]\] and \[\[2.3 Symmetries and Conservation Laws\]\].

### N3143

Note: [[2.1 Hamilton's Principle|2.1 Hamilton's Principle]]  
Priority: medium · Graph: yes · Manim: yes

Standard, correct derivation of the Euler–Lagrange equations with one endpoint-notation error and no visual intuition.

- [Correctness] "joining $q_1\equiv q_1(t)$ and $q_2\equiv q_2(t)$" should read $q_1\equiv q(t_1)$ and $q_2\equiv q(t_2)$, the fixed endpoint values.
- [Simplify] Replace "principle of least action" with "stationary action" or add a remark, because the text itself later says "stationary" and the action is not always a minimum.
- [Graph] For the free particle, take trial paths $q(t)=q_{\mathrm{cl}}(t)+\varepsilon\sin(\pi(t-t_1)/(t_2-t_1))$ and plot $S(\varepsilon)$ for $\varepsilon\in[-1,1]$. The parabola has its minimum at $\varepsilon=0$.
- [Manim] Animate a family of varied paths between fixed endpoints, with $\delta q$ vanishing at $t_1,t_2$, while a side meter shows $S$ and the classical path is marked where $dS/d\varepsilon=0$.

### N3144

Note: [[2.2 Free Field Theory Examples|2.2 Free Field Theory Examples]]  
Priority: medium · Graph: yes · Manim: no

Correct catalogue of free Lagrangians; the Euler–Lagrange steps are skipped and the letter A_mu is reused.

- [Example] Show one Euler–Lagrange step for (2.2.1): $\partial\mathcal L/\partial(\partial_\mu\phi)=\partial^\mu\phi$ and $\partial\mathcal L/\partial\phi=-m^2\phi$, which give (2.2.2).
- [Structure] $A_\mu$ denotes both the photon potential (`\magnetic`) and the massive Proca field (uncolored) in one note. Use a separate letter such as $V_\mu$ for the Proca field.
- [Intuition] After (2.2.12), count degrees of freedom: Proca has 3 polarizations and the massless photon has 2. This explains why the $M\to0$ limit is subtle.
- [Structure] Close the parenthesis in "(or, equivalently, of $a$ and $b$ then yield".
- [Graph] Plot the Klein–Gordon dispersion $E=\sqrt{p^2+m^2}$ for $m=0$ and $m=1$ (natural units), $p\in[0,3]$, to show the rest-energy gap.

### N3145

Note: [[2.3 Symmetries and Conservation Laws|2.3 Symmetries and Conservation Laws]]  
Priority: high · Graph: no · Manim: no

Clear Noether examples, but the index placement of the stress tensor and the sign of the isospin current are internally inconsistent.

- [Correctness] With $\Theta^{\mu\nu}\equiv\frac{\partial\mathcal L}{\partial(\partial_\nu\phi)}\partial^\mu\phi-g^{\mu\nu}\mathcal L$ as in (2.3.8), the result (2.3.7) gives $\partial_\nu\Theta^{\mu\nu}=0$, not $\partial_\mu\Theta^{\mu\nu}=0$ as in (2.3.9). The momentum densities are then $\Theta^{\mu0}$. Swap the indices in (2.3.8) to $\frac{\partial\mathcal L}{\partial(\partial_\mu\phi)}\partial^\nu\phi$ so that (2.3.9) and "$\Theta^{0\nu}$ momentum densities" hold.
- [Correctness] With $\partial\mathcal L/\partial(\partial_\mu\psi)=\bar\psi i\gamma^\mu$, (2.3.20) gives $\mathbf J^\mu=-\bar\psi\gamma^\mu\frac{\boldsymbol\tau}{2}\psi$, the opposite sign to (2.3.22). Define $\mathbf J^\mu$ with $-\tfrac{i}{2}$ or state that the overall sign is a convention.
- [Example] Compute $\Theta^{00}$ for the Klein–Gordon Lagrangian (2.2.1): $\tfrac12(\dot\phi^2+|\nabla\phi|^2+m^2\phi^2)\ge0$. This shows that (2.3.10) is the familiar positive energy density.
- [Structure] Fix the comma in "will, therefore change".

### N3146

Note: [[2.B References|2.B References]]  
Priority: low · Graph: no · Manim: no

Short reference list.

- [Structure] No change needed.

### N3147

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/02 Lagrangian Formalism and Conservation Laws/2.P Problems|2.P Problems]]  
Priority: medium · Graph: yes · Manim: no

Good exercises; the actions in 2.6 and 2.7 are correct, but the N-body Lagrangian in 2.5 is wrong.

- [Correctness] Problem 2.5: "$-G_{\mathrm N}\sum_{i\ne j}m_im_j/(\mathbf x_i-\mathbf x_j)^2$" has the wrong power and the wrong sign (repulsive), and it double counts. It should be $L=\tfrac12\sum_i m_i\dot{\mathbf x}_i^2+\tfrac{G_{\mathrm N}}2\sum_{i\ne j}m_im_j/|\mathbf x_i-\mathbf x_j|$.
- [Graph] For problem 2.7, plot $S(T)$ for $m=\omega=1$, $x_1=1$, $x_2=0.5$, $\omega T\in(0,3\pi)$. $S$ diverges at $\omega T=n\pi$, where the classical endpoint problem degenerates.
- [Structure] $T$ is wrapped in `\signal{}` while $t_1,t_2$ are uncolored. Use one convention for times.

### N3148

Note: [[2.R For Further Reading|2.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Annotated reading list.

- [Structure] No change needed.

### N3149

Note: [[3.1 Historical Preliminaries|3.1 Historical Preliminaries]]  
Priority: medium · Graph: no · Manim: yes

Correct (3.1.5 and 3.1.6 check out) but abstract; Weyl's scale idea and Einstein's objection would benefit from a picture.

- [Intuition] Explain Einstein's objection concretely: transporting a ruler or clock around a closed loop rescales it by $\exp\oint S\cdot dx$, which is nonzero when the field strength is nonzero. Two identical atoms with different histories would then have different frequencies.
- [Manim] Side by side, transport a ruler (Weyl scale, its length changes) and a phase arrow (phase version, it rotates by $q\oint A\cdot dx$) around the same loop. This shows why only the phase version is unobservable locally.
- [Simplify] After (3.1.6), state the components: $E\to E-qV$ and $\mathbf p\to\mathbf p-q\mathbf A$.

### N3150

Note: [[3.2 Gauge Invariance in Classical Electrodynamics|3.2 Gauge Invariance in Classical Electrodynamics]]  
Priority: medium · Graph: no · Manim: yes

Correct and complete (F^{01}=E_1, the dual tensor and 3.2.19/3.2.22 check out), but the matrix forms are given without a verification step.

- [Example] Verify one entry explicitly, for example $F^{01}=\partial^1A^0-\partial^0A^1=-\partial_xV-\partial_tA_x=E_1$, so readers can check the sign conventions of (3.2.10).
- [Manim] Morph a 2D vector potential $\mathbf A$ into $\mathbf A+\nabla\Lambda$ (for example $\Lambda=\sin x\cos y$) while a color map of $B_z=\nabla\times\mathbf A$ stays fixed. This makes "gauge invariance" visible.
- [Structure] Add $\Lambda$ to the physical-quantities table.

### N3151

Note: [[3.3 Phase Invariance in Quantum Mechanics|3.3 Phase Invariance in Quantum Mechanics]]  
Priority: low · Graph: no · Manim: yes

Clear, correct statement of the gauge principle; the key verification is left to the reader.

- [Example] Write out (3.3.7) in one line: $D'_\mu\psi'=e^{i\alpha}[\partial_\mu\psi+i(\partial_\mu\alpha)\psi+iqA_\mu\psi-i(\partial_\mu\alpha)\psi]=e^{i\alpha}D_\mu\psi$.
- [Manim] Show a row of phase arrows with a position-dependent $\alpha(x)$: the plain derivative picks up the gradient term, and a compensating shift of $A_\mu$ cancels it.

### N3152

Note: [[3.4 Significance of Potentials in Quantum Theory|3.4 Significance of Potentials in Quantum Theory]]  
Priority: medium · Graph: yes · Manim: yes

Good physical discussion of the Aharonov–Bohm effect, with a missing charge factor and no quantitative fringe picture.

- [Correctness] (3.4.8) writes $S_i=\int_{\text{path }i}d\mathbf x\cdot\mathbf A$ without the charge. It must be $S_i=q\int_{\text{path }i}d\mathbf x\cdot\mathbf A$, consistent with (3.4.3) and (3.4.9).
- [Simplify] (3.4.3) calls $q\int d\mathbf x\cdot\mathbf A$ "the classical action". Say that it is the vector-potential part of the action, which is the only part that changes.
- [Graph] Plot the interference intensity $I(\Phi)\propto1+\cos(q\Phi/\hbar)$ against $\Phi/\Phi_0$ for $\Phi/\Phi_0\in[0,3]$, with $\Phi_0=h/e\approx4.14\times10^{-15}\,\mathrm{Wb}$.
- [Manim] Animate two beams passing either side of a solenoid while the enclosed flux ramps up. The fringe pattern on the screen shifts periodically, but no force acts on the beams.
- [Structure] The Fig. 3.1 caption says "time-dependent vector potential", but the text describes a static solenoid. Check the caption against the source.

### N3153

Note: [[3.5 Phase Invariance in Field Theory|3.5 Phase Invariance in Field Theory]]  
Priority: high · Graph: yes · Manim: no

Central derivation of scalar and spinor QED, with a current that vanishes identically as written and several small errors.

- [Correctness] Second line of (3.5.8): "$iq[\phi^*\partial^\mu\phi-(\partial^\mu\phi)\phi^*]$" is identically zero. It must be $iq[\phi^*\partial^\mu\phi-(\partial^\mu\phi^*)\phi]$, which follows from the first line with $\partial\mathcal L/\partial(\partial_\mu\phi)=\partial^\mu\phi^*$.
- [Correctness] In (3.5.2), the second Klein–Gordon equation lacks "$=0$": $(\Box+m^2)\phi^*(x)=0$.
- [Correctness] Symbol clash: (3.5.19) uses $m$ for the photon mass, while $m$ is the scalar or fermion mass in (3.5.1) and (3.5.15). Use $M_\gamma$, as in (3.5.21).
- [Structure] Fix the typos "section section 2.2" and "orbitcollected".
- [Graph] Plot $rV(r)\propto e^{-r/r_0}$ against $r/r_0\in[0,3]$ together with the pure Coulomb value 1, to show what the photon-mass bound $r_0>2\times10^8\,\mathrm{km}$ constrains.

### N3154

Note: [[3.6 Feynman Rules for Electromagnetism|3.6 Feynman Rules for Electromagnetism]]  
Priority: medium · Graph: no · Manim: no

Correct vertex factors and propagators (3.6.8 and 3.6.11 check out), but the key substitution steps are compressed.

- [Example] Before (3.6.7), show that $\phi^*\partial^\mu\phi\to-ip_1^\mu S_2S_1$ and $(\partial^\mu\phi^*)\phi\to+ip_2^\mu S_2S_1$. Their difference gives $-i(p_1+p_2)^\mu$.
- [Intuition] Explain that the factor 2 in (3.6.11) comes from the two ways of assigning the two external photons to $A_\mu A_\nu$.
- [Structure] "The general form of the wave functions is typified by..." should read "wave equations". The re-quoted equation keeps the tag (3.2.22); mark it as a repeat or link to \[\[3.2 Gauge Invariance in Classical Electrodynamics\]\].

### N3155

Note: [[3.B References|3.B References]]  
Priority: low · Graph: no · Manim: no

Reference list.

- [Structure] No change needed.

### N3156

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/03 The Idea of Gauge Invariance/3.P Problems|3.P Problems]]  
Priority: low · Graph: no · Manim: no

Correct problem statements; the duality rotation in 3.4 and the Faraday-cage action in 3.6 are correct.

- [Structure] $\sigma$ is again both the scalar particle and the cross section, and the table mixes natural units ($\mathbf E,\mathbf B$ in $\mathrm{GeV^2}$) with SI ($V$ in volts, $S$ in J s). Rename the scalar and state the unit system per problem.

### N3157

Note: [[3.R For Further Reading|3.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Annotated reading list.

- [Structure] No change needed.

### N3158

Note: [[4.1 Motivation|4.1 Motivation]]  
Priority: low · Graph: no · Manim: no

Clear motivation for local isospin symmetry.

- [Links] The re-quoted (2.3.14) and (2.3.13) should link to \[\[2.3 Symmetries and Conservation Laws\]\].
- [Intuition] Add one sentence that a local SU(2) rotation lets "proton" at one point be a superposition of $p$ and $n$ at another. Compensating for this needs three gauge fields, one per generator.

### N3159

Note: [[4.2 Construction|4.2 Construction]]  
Priority: medium · Graph: no · Manim: yes

Careful Yang–Mills construction (4.2.10–4.2.22 and 4.2.37 check out), but the sign of the last term in (4.2.31) and in (4.2.35) is wrong.

- [Correctness] The last term of (4.2.31) should be $-\frac1{ig}G[G^{-1}\partial_\nu G,G^{-1}\partial_\mu G]G^{-1}$ $(=+\frac{i}{g}\ldots)$, and the last term of (4.2.35) should be $+\frac1{ig}G[\ldots]G^{-1}$. Both signs are flipped (checked numerically). The cancellation and the conclusion (4.2.26) are unaffected.
- [Example] Show the shortcut with (4.2.16): $\tau\cdot\alpha\,\tau\cdot b-\tau\cdot b\,\tau\cdot\alpha=2i\,\tau\cdot(\alpha\times b)$, which gives (4.2.20) in one line.
- [Intuition] After (4.2.37), explain that the $g\epsilon_{jkl}b^jb^k$ term makes $-\frac14\mathbf F^2$ contain cubic and quartic terms in $b$, so the gauge bosons carry isospin and interact with each other. Link to the three- and four-gluon vertices in \[\[D.3 Vertex Factors\]\].
- [Manim] In 3D isospace, show the infinitesimal transformation $\mathbf b'_\mu=\mathbf b_\mu-\boldsymbol\alpha\times\mathbf b_\mu-\frac1g\partial_\mu\boldsymbol\alpha$ as a rotation of the arrow $\mathbf b$ about $\boldsymbol\alpha$ plus a shift. This contrasts with the shift-only Abelian case (4.2.12).
- [Structure] In (4.2.21), $b^k$ lacks its Lorentz index; write $b_\mu^k$.

### N3160

Note: [[4.3 Some Physical Consequences|4.3 Some Physical Consequences]]  
Priority: medium · Graph: yes · Manim: no

Faithful and mostly correct transcription whose isospin-channel calculation is compressed and whose closing range argument is stated without a quantitative picture.

- [Correctness] The physical-quantities row for $I,\mathbf I,\mathbf I^{(1)},\mathbf I^{(2)}$ says "in units of reduced Planck constant"; isospin is a dimensionless internal quantum number, not an angular momentum, so drop the $\hbar$ wording.
- [Correctness] In (4.3.2) the vertex for a nucleon $\alpha$ turning into $\beta$ should strictly carry $(\tau^a)_{\beta\alpha}$ (row = outgoing, column = incoming, from $\bar\psi_\beta\tau^a_{\beta\alpha}\psi_\alpha$); $(\tau^a)_{\alpha\beta}$ differs by a sign for $\tau^2$ (the sum in (4.3.3) is unaffected because $\sum_a\tau^a_{ij}\tau^a_{kl}=2\delta_{il}\delta_{jk}-\delta_{ij}\delta_{kl}$ is real).
- [Simplify] Before (4.3.5) show the two-line evaluation $\langle\mathbf I^{(1)}\cdot\mathbf I^{(2)}\rangle=\tfrac12[I(I+1)-\tfrac34-\tfrac34]$ giving $-\tfrac34$ for $I=0$ and $+\tfrac14$ for $I=1$, and state that $\energy{\mathcal E}=g^2\langle\mathbf I^{(1)}\cdot\mathbf I^{(2)}\rangle$, so positive means repulsive as for like charges.
- [Graph] After the final paragraph, plot the Coulomb-like potential $-1/r$ against Yukawa potentials $-e^{-m r}/r$ for $m=0$, $m_\pi\approx0.71\,\mathrm{fm^{-1}}$ and $m_\rho\approx3.9\,\mathrm{fm^{-1}}$ over $r=0.2$–$5\,\mathrm{fm}$, to make "infinite range versus short range" concrete.
- [Intuition] Add one sentence contrasting with QED: the photon has zero charge so there is no $AAA$ vertex, while $b_\mu^a$ carries isospin, which is exactly why the $\epsilon^{abc}$ term in $F_{\mu\nu}$ yields the cubic and quartic vertices of Fig. 4.2; write the schematic $\partial b\,b\,b$ and $b^4$ structure.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3161

Note: [[4.4 Assessment|4.4 Assessment]]  
Priority: low · Graph: no · Manim: no

Short, clear summary section that needs no substantive change.

- [Links] Link the "massless vector bosons" argument back to \[\[4.3 Some Physical Consequences\]\] and "the following chapter" to \[\[5.0 Chapter introduction\]\].
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3162

Note: [[4.B References|4.B References]]  
Priority: low · Graph: no · Manim: no

Accurate reference list; no change needed beyond file encoding.

- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3163

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/04 Non-Abelian Gauge Theories/4.P Problems|4.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem statements are correct (checked the $C,P,G$ formulas, the nine-term $|p\uparrow\rangle$ with norm $\sqrt{18}$, and $\mu_n/\mu_p=-2/3$), with only table issues.

- [Correctness] The physical-quantities row "$I,s,S,L$ ... in units of reduced Planck constant" wrongly includes isospin $I$; isospin is dimensionless and not measured in $\hbar$.
- [Structure] $\sigma$ is used for the cross section, for the scalar particle in $e^+e^-\to\sigma^+\sigma^-$ (problem 4.2) and for the Pauli matrix $\sigma_z^{(i)}$ (problem 4.7); add the latter two meanings to the table or note the clash.
- [Structure] In 4.7(b) the elementary charge $e$ in $\mu=e\hbar/2mc$ is uncolored while $\electric{e_q}$ is colored; apply $\electric{e}$ consistently.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3164

Note: [[4.R For Further Reading|4.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Accurate annotated reading list; no change needed beyond encoding.

- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM (optionally note that the PDG Young-diagram review cited from 2010 is maintained in the current Review of Particle Physics).

### N3165

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/05 Hidden Symmetries/5.0 Chapter introduction|5.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

Clear motivational introduction that sets up the three kinds of symmetry realization well.

- [Structure] Add a small three-row table (exact and manifest; explicitly broken, $\mathcal L=\mathcal L_{\rm sym}+\varepsilon\mathcal L_{\rm break}$; spontaneously broken, symmetric $\mathcal L$ with non-invariant vacuum) with the ferromagnet example for each, so the reader has the map before 5.1.
- [Links] Link "chapter 2" (Noether's theorem) and "the Higgs mechanism" to the corresponding vault notes.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3166

Note: [[5.1 The Idea of Spontaneously Broken Symmetries|5.1 The Idea of Spontaneously Broken Symmetries]]  
Priority: medium · Graph: yes · Manim: yes

Correct and readable (the shifted Lagrangian (5.1.19) and the mass$^2$ $2|\mu|^2$ check out), but the key expansion is not shown and the figures lack vacuum markers.

- [Simplify] Before (5.1.19) show the shortcut $\energy{V}=\tfrac{|\lambda|}{4}(\phi^2-v^2)^2-\tfrac{|\mu|^2v^2}{4}$ and $\phi^2-v^2=2v\phi'+\phi'^2$, which gives the quadratic term $|\lambda|v^2\phi'^2=|\mu|^2\phi'^2$ in one line, i.e. mass$^2=V''(v)=2|\mu|^2$.
- [Intuition] State that $\phi\to-\phi$ here is an internal $\mathbb Z_2$ reflection of the field, called "parity" only by analogy (it is spatial parity only if $\phi$ is a pseudoscalar), to avoid confusion with $\mathbf x\to-\mathbf x$.
- [Graph] In Fig. 5.1(b) mark the minima at $\phi=\pm v$ ($\pm1$ in the plotted units) with points and labels $\pm v$, and mark the local maximum at $\phi=0$; in Fig. 5.1(a) mark the unique minimum at $\phi=0$.
- [Manim] Animate $V(\phi)=\tfrac12\mu^2\phi^2+\tfrac14\phi^4$ as $\mu^2$ is swept from positive to negative: the single well flattens and splits into a double well while a ball at $\phi=0$ rolls into one of the two minima, showing the vacuum choice.
- [Structure] Both graph blocks sit in the middle of the sentence "does not return to zero / when the applied field is turned off"; move them after the paragraph introducing (5.1.7) where Fig. 5.1 is first referenced.
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3167

Note: [[5.2 Spontaneous Breaking of Continuous Symmetries|5.2 Spontaneous Breaking of Continuous Symmetries]]  
Priority: medium · Graph: yes · Manim: yes

Correct exposition of the Goldstone model (the surfaces match $\tfrac12r^2+\tfrac14r^4$ and $\tfrac14(r^2-1)^2$), but the step to (5.2.9) is skipped and the 3D figures carry no labels.

- [Simplify] Show the expansion behind (5.2.9): write $\energy{V}=\tfrac{|\lambda|}{4}(\boldsymbol\phi^2-v^2)^2+\text{const}$ and $\boldsymbol\phi^2-v^2=2v\eta+\eta^2+\zeta^2$, so the quadratic part is $|\lambda|v^2\eta^2=-\mechanical{\mu}^2\eta^2$ and $\zeta$ appears only in cubic and quartic terms.
- [Graph] The two graph3d figures have no axis labels or markers; add text3d labels $\phi_1,\phi_2,V$, draw the vacuum circle $r=v$ in an accent color in Fig. 5.2(b), and mark the chosen vacuum $(v,0)$ with short arrows for the radial $\eta$ and tangential $\zeta$ directions.
- [Structure] Each 3D figure is about 155 KB of hard-coded curve3d samples on one line; if the plugin supports surface or parametric-curve expressions, generate the mesh from $z=\tfrac14(r^2-1)^2$ instead to keep the note editable.
- [Manim] Animate a ball at $(v,0)$ in the Mexican hat: a radial nudge makes it oscillate (massive $\eta$), a tangential nudge makes it roll freely along the trough (massless $\zeta$), visualizing "no restoring force against angular oscillations".
- [Intuition] Add one sentence counting generators for the general statement: SO(2) has one generator, the vacuum $(v,0)$ breaks it, hence one Goldstone boson; preview that for SO(3) with $\langle\boldsymbol\phi\rangle\propto\hat z$ two generators are broken (problems 5.5, 5.6).
- [Structure] The file starts with a UTF-8 BOM; save as UTF-8 without BOM.

### N3168

Note: [[5.3 Spontaneous Breaking of a Gauge Symmetry|5.3 Spontaneous Breaking of a Gauge Symmetry]]  
Priority: medium · Graph: yes · Manim: yes

A faithful, compact derivation of the Abelian Higgs model whose small-oscillation algebra checks out, but it skips the expansion step and has an index slip and a symbol clash.

- [Correctness] Eq. (5.3.13) mixes index positions: $\magnetic{A'_\mu}=\magnetic{A_\mu}+\frac1{\electric{q}v}\partial^\mu\zeta$ should read $\magnetic{A'_\mu}=\magnetic{A_\mu}+\frac1{\electric{q}v}\partial_\mu\zeta$ (consistent with (5.3.6) for $\alpha=-\zeta/(\electric{q}v)$).
- [Correctness] Symbol clash: $\phi'$ means the gauge-transformed field in (5.3.5), (5.3.6) and (5.3.14) but the shifted field $\phi-\langle\phi\rangle_0$ in (5.3.9), and the table lists only "shifted"; rename the shifted field (e.g. $\tilde\phi$) or drop (5.3.9), which is never used afterwards.
- [Simplify] Show the two-line expansion behind (5.3.11): with $\phi\approx(v+\eta+i\zeta)/\sqrt2$, $D_\mu\phi$ gives the cross term $\electric{q}v\magnetic{A_\mu}\partial^\mu\zeta$ and mass term $\frac12\electric{q}^2v^2A^2$, and $V$ expanded to second order gives $-\mechanical{\mu}^2\eta^2$ using $v^2=-\mechanical{\mu}^2/|\lambda|$; also fix the typo "from out study".
- [Graph] 3D surface of $V(\phi_1,\phi_2)=\frac{\mechanical{\mu}^2}{2}(\phi_1^2+\phi_2^2)+\frac{|\lambda|}{4}(\phi_1^2+\phi_2^2)^2$ with $\mechanical{\mu}^2=-1$, $|\lambda|=1$, $\phi_{1,2}\in[-1.6,1.6]$, marking the radial $\eta$ and angular $\zeta$ directions at $\phi_1=v$.
- [Manim] Animate the degree-of-freedom bookkeeping: the Goldstone phase $\zeta$ on the vacuum circle being rotated away by the unitary-gauge transformation (5.3.14) while a massless photon's two transverse helicities gain a third longitudinal arrow.
- [Links] Link "the Goldstone model discussed in the previous section" to \[\[5.2 Spontaneous Breaking of Continuous Symmetries\]\] and "Higgs mechanism" forward to the electroweak note 6.3.

### N3169

Note: [[5.4 The Sigma Model|5.4 The Sigma Model]]  
Priority: medium · Graph: yes · Manim: no

Clear and well structured, with a correct ππ-scattering calculation, but two factor/sign slips in the chiral decomposition and terse numerics.

- [Correctness] (5.4.7a,b): decomposing $\boldsymbol\alpha_LP_L+\boldsymbol\alpha_RP_R=\frac12(\boldsymbol\alpha_R+\boldsymbol\alpha_L)+\frac12\gamma_5(\boldsymbol\alpha_R-\boldsymbol\alpha_L)$ requires $\boldsymbol\alpha=\frac12(\boldsymbol\alpha_R+\boldsymbol\alpha_L)$ and $\boldsymbol\alpha_5=\frac12(\boldsymbol\alpha_R-\boldsymbol\alpha_L)$; as written a pure isospin rotation $\boldsymbol\alpha_L=\boldsymbol\alpha_R$ would be counted twice.
- [Correctness] Second line of (5.4.11): with the note's own projectors (5.4.2)-(5.4.3), $\bar\psi_L\boldsymbol\tau\psi_R-\bar\psi_R\boldsymbol\tau\psi_L=\bar\psi\boldsymbol\tau\gamma_5\psi$, so the pion term is $-ig\boldsymbol\pi\cdot\bar\psi\boldsymbol\tau\gamma_5\psi$, not $+ig\ldots$ (the same sign carries into (5.4.17)); state the convention if the source sign is kept.
- [Example] Make (5.4.21) reproducible: give the inputs ($g_{\pi NN}\approx13.15$ from $g^2/4\pi\approx13.7$, $f_\pi\approx92.4\,\unit{MeV}$) since $13.12\times92\approx1207\,\unit{MeV}$, not $1215$, with the rounded values quoted in the text.
- [Intuition] Before (5.4.8) explain in one sentence why $\boldsymbol\Sigma$ must transform as $G_L\boldsymbol\Sigma G_R^\dagger$: it is exactly what makes $\bar\psi_L\boldsymbol\Sigma\psi_R$ invariant, which is the whole point of Gell-Mann–Lévy.
- [Graph] Plot $|\mathcal M|f_\pi^2$ from (5.4.26) versus $\mechanical{q}^2/\mechanical{m_\sigma}^2\in[0,0.8]$: exact $x/(1-x)$ against the leading term $x$, showing the low-energy theorem and where the $\sigma$ pole matters.

### N3170

Note: [[5.5 Spontaneous Breaking of a Non-Abelian Symmetry|5.5 Spontaneous Breaking of a Non-Abelian Symmetry]]  
Priority: low · Graph: no · Manim: no

Short and correct (the $g^2v^2$ mass term and $T_3$ invariance check out), but it uses $\mechanical{\mu}$ without ever defining the potential.

- [Simplify] State the potential explicitly, $\energy{V}=\frac12\mechanical{\mu}^2\boldsymbol\phi\cdot\boldsymbol\phi+\frac14|\lambda|(\boldsymbol\phi\cdot\boldsymbol\phi)^2$ with $v^2=-\mechanical{\mu}^2/|\lambda|$; otherwise "mass $\mechanical{\mu}$" and $(\text{mass})^2=-2\mechanical{\mu}^2$ in (5.5.11) are unsupported.
- [Example] Show the one-line mass computation: $(D_\mu\langle\boldsymbol\phi\rangle)_k=g\epsilon_{jk3}b_\mu^jv$ gives components $(-gvb^2,\,gvb^1,\,0)$, hence $\frac12g^2v^2[(b^1)^2+(b^2)^2]$ and no $b^3$ term.
- [Simplify] Harmonize generator notation ($T_i$, $T^j$, $T_3$ are used interchangeably) and tabulate the degree-of-freedom count before/after (9 = 3·1 + 3·2 = 1·1 + 2·3 + 1·2).
- [Links] Link "section 5.3" to \[\[5.3 Spontaneous Breaking of a Gauge Symmetry\]\] and "problem 5.5" to \[\[5.P Problems#5.5\]\].

### N3171

Note: [[5.6 Prospects|5.6 Prospects]]  
Priority: low · Graph: no · Manim: no

A brief, accurate chapter wrap-up.

- [Structure] Add a short note box that the Higgs boson was observed in 2012 at about $125\,\unit{GeV}$, so the forward reference to "constraints on the Higgs-boson mass" in section 7.10 reads as historical context.

### N3172

Note: [[5.B References|5.B References]]  
Priority: low · Graph: no · Manim: no

Reference list; citations checked look correct.

- No change needed.

### N3173

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/05 Hidden Symmetries/5.P Problems|5.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem list transcribed faithfully, including a few source slips worth correcting.

- [Correctness] Problem 5.2 cites "transformation laws (5.4.6) and (5.4.8)", but in the sigma-model note (5.4.6) is the mass term; the nucleon transformation law is (5.4.5).
- [Correctness] Problem 5.7(b): since $\electric{e^*}=-2\electric{e}<0$, the formula $\magnetic{\lambda}^{-1}=\electric{e^*}|\langle\psi\rangle_0|/\sqrt{\mechanical{m^*}c^2}$ gives a negative inverse length; use $|\electric{e^*}|$ (and state the unit system, since the free energy is written in natural units while $c$ appears here).
- [Correctness] Problem 5.4: $\cos\theta_C\approx0.9746$ is dated; the current value is $|V_{ud}|\approx0.9737$ (PDG 2024).
- [Links] Link the referenced equations (5.4.5), (5.4.8), (5.4.11) to \[\[5.4 The Sigma Model\]\] and problem 5.8's "Abelian Higgs model" to \[\[5.3 Spontaneous Breaking of a Gauge Symmetry\]\].

### N3174

Note: [[5.R For Further Reading|5.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Reading list; one wrong attribution inherited from the source.

- [Correctness] Migdal–Polyakov entry says "included in the Farhi–Suskind reprint collection"; the reprint collection cited earlier in this note is Farhi and Jackiw, *Dynamical Gauge Symmetry Breaking* (also "Int. J. Mod. Phys. 24" should be "Int. J. Mod. Phys. A 24").

### N3175

Note: [[6.0 Chapter introduction|6.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

A clear chapter overview with one dated statement.

- [Structure] "Experimental tools to search for, and characterize, the agent of electroweak symmetry breaking are now at hand" predates the 2012 Higgs discovery; add a note box with the discovery and current status.

### N3176

Note: [[6.1 An Effective Lagrangian for the Weak Interactions|6.1 An Effective Lagrangian for the Weak Interactions]]  
Priority: medium · Graph: yes · Manim: yes

A long but systematic catalogue of four-fermion cross sections whose numbers recompute correctly, with a few transcription errors in the inverse-muon-decay kinematics and the interference results.

- [Correctness] (6.1.71): the first line "$\mechanical{q_1}\cdot\mechanical{p_1}=\mechanical{m}e$" should be $\mechanical{m}\energy{E}$, and "$\mechanical{p_1}\cdot\mechanical{p_2}=\mechanical{m}\energy{E}$" should be $\mechanical{m}\energy{E'}$ (electron at rest, $p_2^0=E'$).
- [Correctness] (6.1.41): from (6.1.40), $\mathcal I=-128\operatorname{Re}(C_S^*C_T)(\mechanical{m}\energy{E})^2(1-2y)$ gives $d\sigma_{ST}/dy=-\frac{2\mechanical{m}\energy{E}}{\pi}(1-2y)\operatorname{Re}(C_S^*C_T)$, as Table 6.1 also states; the displayed plus sign is wrong.
- [Correctness] Item 10 heading reads "V + A interaction: $\bar\nu_e e\rightarrow\nu_e e$"; it should be $\bar\nu_e e\rightarrow\bar\nu_e e$.
- [Structure] Add a short roadmap before item 1 (S, P, T, V−A, V+A for $\nu$ and $\bar\nu$, results collected in Table 6.1) and state once that the couplings $C_i$ are set to 1 in items 1–10, so readers can skip to the V−A results and the unitarity argument.
- [Graph] Plot the Table 6.1 rows, $(\pi/\mechanical{m}\energy{E})\,d\sigma/dy$ versus $y\in[0,1]$, for S, T, V−A and V+A as two panels ($\nu_e e$ and $\bar\nu_e e$), illustrating the "confusion theorem" discussion.
- [Manim] Animate Fig. 6.3: helicity arrows of the incoming and outgoing leptons as the c.m. scattering angle sweeps from forward to backward, showing $J_z=1$ for $\bar\nu_e e$ cannot be matched at $y=1$ so the cross section goes as $(1-y)^2$.

### N3177

Note: [[6.2 Intermediate Vector Bosons -  A First Look|6.2 Intermediate Vector Bosons -  A First Look]]  
Priority: medium · Graph: yes · Manim: no

A well-motivated account of why W exchange tames but does not cure the four-fermion theory; most results recompute correctly, but the propagator lacks its $1/M_W^2$ and the $\nu\bar\nu\to W_0W_0$ cross section does not follow from (6.2.38).

- [Correctness] (6.2.2) and (6.2.3): the massive-vector propagator numerator is $g_{\mu\nu}-\mechanical{k_\mu}\mechanical{k_\nu}/\mechanical{M_W}^2$, not $g_{\mu\nu}-\mechanical{k_\mu}\mechanical{k_\nu}$ (dimensionally inconsistent as written).
- [Correctness] (6.2.39): integrating (6.2.38), $d\sigma/d\Omega=32G_F^2\energy{Q}^4\sin^2\theta/(64\pi^2s)$ with $s=4\energy{Q}^2$ gives $\sigma=G_F^2\energy{Q}^2/3\pi=G_F^2s/12\pi$, not $G_F^2s/3\pi$; either $Q$ must be $\sqrt s$ or the factor should be $1/12\pi$ (the growth $\propto s$ and the conclusion are unaffected).
- [Simplify] Fix the typo "Because the electron emitted the $W^-$ decay" (missing "in") and, after (6.2.8), give the worked number: for $\mechanical{M_W}=100\,\unit{GeV}$ the exponent is $\pi\sqrt2/(G_F\mechanical{M_W}^2)\approx38$, so $s\lesssim3.5\times10^{20}\,\unit{GeV^2}$, i.e. $\energy{E}\approx3.4\times10^{23}\,\unit{GeV}$.
- [Intuition] Before (6.2.31) explain physically why $\epsilon_0^\mu\to k^\mu/M_W$ makes longitudinal amplitudes grow with energy, since this is the mechanism behind every bad high-energy behaviour in the section.
- [Graph] Plot $\sigma(\nu_\mu e\rightarrow\mu\nu_e)/E$ from (6.1.74) (point coupling) and (6.2.5) with $\mechanical{M_W}=80.4\,\unit{GeV}$ versus $E$ from $11\,\unit{GeV}$ to $10^8\,\unit{GeV}$ on log axes, showing threshold, linear rise and saturation at $G_F^2\mechanical{M_W}^2/\pi$.

### N3178

Note: [[6.3 The Standard Electroweak Theory of Leptons|6.3 The Standard Electroweak Theory of Leptons]]  
Priority: medium · Graph: no · Manim: no

The core electroweak construction is clear and the couplings and numerical predictions recompute correctly, but several displayed factors are wrong and some experimental statements are dated.

- [Correctness] (6.3.35): from $\frac{v^2}{8}g^2|b^1-ib^2|^2=\frac{g^2v^2}{4}W^+_\mu W^{-\mu}$ the mass term is $\frac{g^2v^2}{8}(|W_\mu^+|^2+|W_\mu^-|^2)$, not $\frac{g^2v^2}{2}(\ldots)$; only the former gives (6.3.36) $\mechanical{M_W}=gv/2$.
- [Correctness] (6.3.72) has $\frac{ig}{8\mechanical{M_W}^2}$; it must be $\frac{ig^2}{8\mechanical{M_W}^2}$, since with $\not k_+-\not k_-\to-2\not P$ it has to reproduce $-\frac{ig^2}{4\mechanical{M_W}^2}$ in (6.3.73); also (6.3.68) has an unbalanced bracket in $g_{\alpha\nu}[(\mechanical{k_+}+\mechanical{S})_\beta$.
- [Correctness] (6.3.63) as written, $|\mathcal M(Z\to\nu\bar\nu)|^2=\frac12\frac{\mechanical{M_Z}^2}{\mechanical{M_W}^2}|\mathcal M(W\to e\bar\nu)|^2$, accounts only for the coupling ratio; since $|\mathcal M|^2\propto G_FM^4$ (6.2.18), the ratio at the respective masses is $\frac12(\mechanical{M_Z}/\mechanical{M_W})^4$, which is what yields $\Gamma=G_F\mechanical{M_Z}^3/(12\pi\sqrt2)$.
- [Correctness] Outdated values: the electron-neutrino mass bound "$\lesssim2\,\unit{eV}$" is now $m_\nu<0.45\,\unit{eV}$ (KATRIN 2025), and "ATLAS and CMS ... will probe ... at $\sqrt s=7\,\unit{TeV}$" should be updated to the completed 13 and 13.6 TeV WW and triple-gauge-coupling measurements.
- [Structure] The vertex-factor lists for Fig. 6.14 and Fig. 6.15 interrupt sentences ("(6.3.67) ... which shows very promising agreement" and "(6.3.69) ... and the other kinematical quantities"); move each list after the paragraph it splits.
- [Links] Link "procedure of section 5.5" to \[\[5.5 Spontaneous Breaking of a Non-Abelian Symmetry\]\], "§5.4" to \[\[5.4 The Sigma Model\]\], and the reused equations (6.2.20), (6.2.25), (6.2.37) to \[\[6.2 Intermediate Vector Bosons -  A First Look\]\].

### N3179

Note: [[6.4 Neutral-Current Interactions among Leptons|6.4 Neutral-Current Interactions among Leptons]]  
Priority: medium · Graph: yes · Manim: no

A faithful, mostly correct transcription (Tables 6.2/6.3, Eqs. 6.4.8-6.4.35 and the Fig. 6.20 curves all recompute correctly), but it is dense, has one wrong equation reference and a v-symbol clash, and its native graph is stored as ~6100 lines of one-number-per-line JSON.

- [Correctness] In the paragraph after (6.4.23), "because expressions (6.4.22) and (6.4.21) contain terms linear in $(v+a)$" cites the wrong equation: (6.4.21) for $\bar\nu_\mu e$ has no linear term; it should read "(6.4.22) and (6.4.23)".
- [Correctness] Symbol clash: $v$ denotes both the vector coupling $v_e$, $v$ in (6.4.18)-(6.4.23) and (6.4.31), and the antiparticle spinor $v(\mu,\mechanical{q_+})$, $\bar v(e,\mechanical{p_+})$ in (6.4.24); the physical-quantities table lists both under $v$. Add a sentence distinguishing them (or write the coupling as $g_V$-style notation in commentary), and note that $\mechanical{\mu}$ is also used both as the muon mass ("neglect of $\mechanical{m}^2$ and $\mechanical{\mu}^2$") and as a flavour label.
- [Structure] The Fig. 6.20 `graph` block serializes four 501-point curves one number per line (lines 163-6294, about 95% of the file); regenerate it with compact point arrays or `functiongraph` elements on the log axis, and give the four curves distinct hex colors (all are #222222 now) so the labels $\nu_e e$, $\bar\nu_e e$, $\nu_\mu e$, $\bar\nu_\mu e$ can be matched without guessing. The file also starts with a UTF-8 BOM, which the vault rules forbid.
- [Intuition] After (6.4.19)-(6.4.23), add a short worked example: at $x_W\approx0.23$, $v_e\approx-0.04$, so $\sigma(\nu_\mu e)\approx\sigma(\bar\nu_\mu e)$ to within ~20%, and $\sigma(\nu_e e)$ is ~6x larger than $\sigma(\nu_\mu e)$ because the $W$ exchange shifts $L_e\to L_e+2$ (constructive interference); explain physically why $(1-y)^2$ attaches to $R_e$ for $\nu$ and to $L_e$ for $\bar\nu$ (helicity suppression of backward scattering).
- [Graph] Add a 2D plot of the $a$-$v$ plane (to complement the static Fig. 6.21): the ellipses $a^2+av+v^2=c_1$ and $a^2-av+v^2=c_2$ for $\nu_\mu e$ and $\bar\nu_\mu e$ with $c_{1,2}$ set from the SM values at $x_W=0.23$, plus the $\nu_e e$ curve $(a^2+av+v^2)/3+a+v+1=c_3$, over $a,v\in[-1,1]$, marking the four intersections and the SM point $(a,v)=(-\tfrac12,-\tfrac12+2x_W)$, so the $v\leftrightarrow a$ and sign ambiguities are visible.
- [Graph] Plot $d\sigma/dz$ from (6.4.27) normalized to the QED term, and $A(\sqrt s)$ for $\sqrt s\in[10,120]\,\unit{GeV}$ with $\mechanical{M_Z}=91.19\,\unit{GeV}$, $\Gamma=2.50\,\unit{GeV}$, $x_W=0.231$, overlaying the low-energy line (6.4.29) $A\approx-6.7\times10^{-5}s/\unit{GeV^2}$, to show where the linear approximation (e.g. $-17\%$ at $50\,\unit{GeV}$) breaks down near the pole; also state the modern value $x_W\approx0.231$ next to the text's $x_W\approx\tfrac14$.

### N3180

Note: [[6.5 The Higgs Boson -  A First Look|6.5 The Higgs Boson -  A First Look]]  
Priority: medium · Graph: yes · Manim: no

Faithful, compact transcription with correct couplings and cross-section numbers, but two width formulas carry a spurious factor and the pre-discovery framing is never updated.

- [Correctness] Eqs. (6.5.8) and (6.5.9) contain a spurious $1/x$ (and $1/x'$): the correct widths are $\Gamma(H\to W^+W^-)=\frac{G_F M_H^3}{32\pi\sqrt2}(1-x)^{1/2}(3x^2-4x+4)$ and the $ZZ$ analogue with $64\pi$; with $1/x$ the width would grow like $M_H^5$, contradicting the stated asymptotic $M_H^3$ behaviour and the $2x^2$ transverse-polarization remark.
- [Correctness] In (6.5.6) the middle expression $|\mathcal M|^2/(64\pi^2 M_H)$ omits the two-body phase-space factor $(1-4m_f^2/M_H^2)^{1/2}=2q/M_H$ (and $N_c$); only with it does $|\mathcal M|^2$ from (6.5.5) give the stated $\beta^{3/2}$ result.
- [Correctness] Fig. 6.25 vertex factors (e) and (f): the left-hand sides $ig^2/2$ and $ig^2/(2\cos^2\theta_W)$ lack the $g_{\mu\nu}$ that appears on the right; write $\frac{ig^2}{2}g_{\mu\nu}$ etc.
- [Correctness] Symbol clash: $v$ is both the vacuum expectation value (vertex factor, table) and the antifermion spinor $v(f,p_2)$ in (6.5.2); rename or add a remark, and drop the unused $\Gamma_H$ from the physical-quantities table.
- [Structure] Add a short callout that the Higgs was discovered in 2012 with $M_H\approx125.2\,\mathrm{GeV}$ and SM width $\approx4.1\,\mathrm{MeV}$ (dominant $b\bar b$ at about 58%, $\gamma\gamma$ seen first), so phrases like "if the Higgs boson is light" and the Higgs-factory discussion read as historical context; note the $\mu^+\mu^-$ factor 42,750 checks out.
- [Graph] Native log-log plot of $\Gamma(H\to b\bar b)$, $\Gamma(H\to\tau\tau)$, $\Gamma(H\to W^+W^-)$, $\Gamma(H\to ZZ)$ from (6.5.7)-(6.5.9) for $M_H=100$-$1000\,\mathrm{GeV}$, with a vertical marker at 125 GeV and a reference line $\Gamma=M_H$, to show the $M_H$ vs $M_H^3$ scaling and the thresholds at $2M_W,2M_Z$.

### N3181

Note: [[6.6 The Higgs Boson, Asymptotic Behavior, and the 1-TeV Scale|6.6 The Higgs Boson, Asymptotic Behavior, and the 1-TeV Scale]]  
Priority: low · Graph: yes · Manim: no

Correct and clearly argued (the $J=0$ projection, the 1.5 TeV$^2$ and 1 TeV bounds and the coupled-channel eigenvalues all check out), though the A/B/C cancellation bookkeeping is wordy.

- [Simplify] Replace the two prose paragraphs on A- and B-force cancellations with a small table (rows $J=0,1,2$; columns A-force, B-force; entries naming which diagrams cancel) so the role of Higgs exchange at subleading order is visible at a glance.
- [Example] After (6.6.4) add the two-line derivation of the $t$-channel projection ($t=-s(1-\cos\theta)/2$, $a_0=\frac1{32\pi}\int_{-1}^1\mathcal M\,d\cos\theta$) that produces the logarithm; the step is currently skipped.
- [Graph] Plot $|a_0|$ from (6.6.4) versus $\sqrt s$ ($0.2$-$5\,\mathrm{TeV}$, off the pole) for $M_H=0.125, 0.5, 1.0, 1.5\,\mathrm{TeV}$ with the unitarity line $|a_0|=1$ (and optionally $1/2$), showing the approach to the constant (6.6.5) and where heavy-Higgs curves cross the bound.
- [Structure] Add a closing callout that $M_H=125\,\mathrm{GeV}$ satisfies (6.6.11) by a wide margin, so $W_LW_L$ scattering stays perturbative, which turns the LHC "no-lose" argument into a confirmed outcome.

### N3182

Note: [[6.7 Neutrino Mixing and Neutrino Mass|6.7 Neutrino Mixing and Neutrino Mass]]  
Priority: medium · Graph: no · Manim: yes

Broad and readable survey with good native reproductions of Figs. 6.33-6.35, but it has a swapped cross-section formula, a caption typo, loose numbers, symbol clashes, and many experimental values from about 2012.

- [Correctness] In (6.7.11) the $\nu_{\mu,\tau}e$ cross section should be $\frac{G_F^2m_eE_\nu}{2\pi}\left(L_e^2+\frac{R_e^2}{3}\right)$ (as in note 6.4, eq. for $\nu_\mu e$); $\left(\frac{L_e^2}{3}+R_e^2\right)$ is the $\bar\nu_\mu e$ result. The $\tfrac17$ weighting survives only because $L_e^2=R_e^2$ at $\sin^2\theta_W=\tfrac14$.
- [Correctness] Fig. 6.32 caption: "total ${}^8\mathrm{Be}$ solar neutrino flux" should be ${}^8\mathrm{B}$ (boron-8), consistent with the body text.
- [Correctness] Numbers: with Table 6.5 the inverted-hierarchy minimum is $\sum m_\nu=\sqrt{2.40\times10^{-3}}+\sqrt{2.48\times10^{-3}}\approx0.099\,\mathrm{eV}$, so "$\gtrsim0.11$ eV" should read $\gtrsim0.10$ eV; and (6.7.20) with $v=246\,\mathrm{GeV}$, $M=1.22\times10^{19}\,\mathrm{GeV}$ gives $m\approx2.5\times10^{-6}\,\mathrm{eV}$, not "$\sim10^{-5}$ eV".
- [Correctness] Symbol clashes: $m_1,m_2$ denote both the $\nu_1,\nu_2$ mass eigenvalues and the seesaw eigenvalues in (6.7.23); $L$ is both baseline and lepton number (plus $L_e$, $\mathsf L_\ell$); $\tau$ is both lifetime and the tau lepton; $\phi$ is both Higgs doublet and flux $\phi_e$. Rename (for example $m_{\mathrm{light}},m_{\mathrm{heavy}}$, $L_{\mathrm{lep}}$, $\Phi_e$), fix the table, and check whether $\mathcal L_{\mathrm{CC}}^{(q)}$ in (6.7.12) should carry a lepton label $(\ell)$.
- [Correctness] Outdated values need an update callout: KATRIN now gives $m_{\nu_e}<0.45\,\mathrm{eV}$ (90% CL, 2024; Table 6.4 still "$<2$ eV", sensitivity "0.2 eV" as future); cosmology now gives $\sum m_\nu\lesssim0.07$-$0.12\,\mathrm{eV}$ (Planck+DESI), not 0.44 eV; $h\approx0.67$-$0.73$, not $0.742$; $\theta_{13}\approx8.5^\circ$ is precisely measured; the LEP $N_\nu$ fit is $2.996\pm0.007$ after the 2019 luminosity correction; OPERA confirmed $\nu_\tau$ appearance; MicroBooNE disfavours the MiniBooNE low-energy excess as electrons.
- [Manim] Animate two-flavour oscillation: two mass-eigenstate phasors rotating at frequencies $m_i^2/2E$ with the projected flavour probabilities $P_{\alpha\to\beta}(L)$ from (6.7.7) traced as a function of $L$ alongside, making clear why a common phase (massless case) gives no flavour change.

### N3183

Note: [[6.8 Renormalizability of the Theory|6.8 Renormalizability of the Theory]]  
Priority: medium · Graph: yes · Manim: no

A faithful, readable transcription of the gauge-fixing and anomaly argument, but it has a sign inconsistency between (6.8.2) and (6.8.3), an overstated "only anomaly" claim, and terse steps in the anomaly bookkeeping.

- [Correctness] With the mixing term $+\mechanical{M}\magnetic{A_\mu}(\partial^\mu\zeta)$ in (6.8.2), the gauge-fixing term (6.8.3) $-\frac{1}{2\xi}(\partial^\mu\magnetic{A_\mu}+\xi\mechanical{M}\zeta)^2$ has cross term $-\mechanical{M}\zeta\,\partial^\mu\magnetic{A_\mu}\simeq+\mechanical{M}\magnetic{A_\mu}\partial^\mu\zeta$ (after integration by parts), which doubles rather than cancels the mixing; use $(\partial^\mu\magnetic{A_\mu}-\xi\mechanical{M}\zeta)^2$ or flip the sign of the mixing term (sign of $\zeta$), and show the one-line integration by parts.
- [Correctness] Before (6.8.12), "the only anomaly is proportional to $\operatorname{tr}(\{\tau^a,\tau^b\}Y)$" is too strong: the $[U(1)_Y]^3$ anomaly $\sum_R Y^3-\sum_L Y^3$ (and the mixed gravitational $\sum Y$ anomaly) is also nonzero for leptons alone (e.g. $-8-2(-1)=-6$ per family with $Q=T_3+Y/2$) and also cancels only once three colors of quarks are added; add a sentence or footnote saying so, while the $SU(2)^3$ and $SU(2)\,[U(1)_Y]^2$ anomalies vanish identically.
- [Correctness] "$g_A\approx1.25$" after (6.8.17) is an outdated value; the current PDG value is $g_A\approx1.275$ (quote $\approx1.27$).
- [Simplify] Between (6.8.12) and (6.8.13), spell out the step: $\{\tau^a,\tau^b\}=2\delta^{ab}$, so each doublet contributes its hypercharge, and with $Q=T_3+Y/2$ the sum of $Y$ over a doublet equals the sum of its two charges; then a small table of left-handed doublet charge sums (lepton $-1$, quark $+\tfrac13$ per color, $3\times\tfrac13=+1$) makes (6.8.15)-(6.8.20) immediate.
- [Structure] The physical-quantities table lists $V_\mu,V_\nu,A_\lambda$, which never appear in the text and the figure labels only V, V, A; either drop the row or label the figure vertices, and note that $A$ is used for the gauge field $\magnetic{A_\mu}$, the anomaly coefficient $A^{abc}$, and the axial current.
- [Graph] Plot the $q_\mu q_\nu$ coefficient $(1-\xi)/(\mechanical{q}^2-\xi\mechanical{M}^2)$ of (6.8.5) times $\mechanical{M}^2$ versus $\mechanical{q}^2/\mechanical{M}^2\in[-10,10]$ for $\xi=0,1,3,10$ plus the unitary-gauge limit $1/\mechanical{M}^2$ (i.e. constant 1), showing the $1/q^2$ falloff at large $|q^2|$ for finite $\xi$ versus the constant unitary-gauge term that spoils power counting.

### N3184

Note: [[6.9 Interim Assessment|6.9 Interim Assessment]]  
Priority: low · Graph: no · Manim: no

A correct but single dense paragraph that summarizes the lepton electroweak chapter; it reads as pre-2012 text.

- [Structure] Split the paragraph into a short bulleted list of what the theory explains (charged currents, neutral currents, massive $W^\pm$/$Z^0$, Higgs-generated lepton masses) and what it leaves open (values of Yukawa couplings, neutrino mass, anomaly cancellation needing quark families).
- [Structure] Add an update callout after "Should we discover a standard-model Higgs boson": the Higgs was discovered in 2012 at about 125 GeV, and LHC measurements confirm couplings to $\tau$, $b$, $t$ (and evidence for $\mu$) that scale roughly with $\mechanical{m}$.
- [Links] Link "following chapter" to the 7.1 Preliminaries note and the anomaly remark to the §6.8 anomaly note so the reader can follow the quark-family argument.

### N3185

Note: [[6.B References|6.B References]]  
Priority: low · Graph: no · Manim: no

Reference list transcribed faithfully apart from a few citation and encoding errors.

- [Correctness] Ref. 19: the Aubert et al. neutral-current papers are *Phys. Rev. Lett.* **32**, 1454, 1457 (1974), not volume **34** (volume 34 is 1975).
- [Correctness] Footnote 26: "$\mechanical{M_W}\exp^{1/\alpha}$" is malformed; write $\mechanical{M_W}\exp(1/\alpha)$ (or $\mechanical{M_W}e^{1/\alpha}$).
- [Correctness] Ref. 59: "pp. 95Ð98" is an encoding artifact; it should read "pp. 95–98".
- [Correctness] Ref. 49: the Daya Bay *Phys. Rev. Lett.* **108**, 171803 (2012) paper is arXiv:1203.1669; arXiv:1210.6327 is the later improved measurement (Chin. Phys. C **37**, 011001), so fix the arXiv number or cite both explicitly (also "Double-CHOZ" should be "Double Chooz").

### N3186

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/06 Electroweak Interactions of Leptons/6.P Problems|6.P Problems]]  
Priority: medium · Graph: no · Manim: no

Clear exercise list, but two displayed formulas (6.13, 6.16) contain errors and the quantity table has stray and clashing entries.

- [Correctness] Problem 6.13: the quartic term should be $-(|\lambda|/4)(2w^+w^-+z^2+h^2)^2$ (Lee–Quigg–Thacker); the note drops $z^2$, which removes the $z^4$ and $z^2h^2$ contact terms needed for the $hz\to hz$ amplitude in part (b). Also the citation should read "H. B. Thacker", not "H. H. Thacker" (and "it respect" should be "it respects").
- [Correctness] Problem 6.16: the Ross–Veltman result is $\rho=\sum_i[I_i(I_i+1)-\tfrac14Y_i^2]\langle\phi_i\rangle_0^2\big/\sum_i\tfrac12Y_i^2\langle\phi_i\rangle_0^2$ (with $Q=I_3+Y/2$ and the vev in the $I_3=-Y/2$ component); the note's numerator $I_i(I_i+1)-\tfrac12Y_i(\tfrac12Y_i-1)$ over $\sum Y_i^2\langle\phi_i\rangle_0^2$ agrees only when the vev sits in the $I_3=-I$ component (it gives $\rho=10/16$ instead of 1 for the $I=3$, $Y=4$ septet).
- [Correctness] Physical-quantities table lists four-momenta $\mechanical{p},\mechanical{q}$ "in problem 6.10" but the note never uses them ($p$ appears only as a proton spinor in 6.17); also $\sigma$ is both a cross section and the sigma-model field, $\lambda$ both the scalar coupling and a Lorentz index/Fierz matrix $\lambda_{ij}$, and $\theta$ both the scattering angle (6.11) and the vacuum mixing angle (6.23); disambiguate the table rows.
- [Correctness] Problem 6.17: $g_A=1.2695\pm0.0029$ is outdated; the current PDG value is $g_A\approx1.2754\pm0.0013$ (add a note if the source value is kept).

### N3187

Note: [[6.R For Further Reading|6.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

A well-organized annotated reading list; only a citation slip and some dated claims need attention.

- [Correctness] "A. Salam and J. C. Ward, *Phys. Rev. Lett.* **13**, 168 (1964)" should be *Phys. Lett.* **13**, 168 (1964), as correctly given in 6.B ref. 1.
- [Structure] Add a short dated callout under "Neutrinoless double beta decay": the Klapdor-Kleingrothaus $^{76}$Ge claim was excluded by GERDA and KamLAND-Zen, and the EXO-200/KamLAND-Zen limits cited are superseded by KamLAND-Zen 800 ($T_{1/2}>3.8\times10^{26}$ yr).

### N3188

Note: [[7.0 Chapter introduction|7.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

A clear chapter roadmap with no technical content to correct.

- [Links] Turn the section references (section 6.8, section 6.4, chapter 8, and the topics in the last paragraph) into wiki links to the corresponding notes so the intro works as a chapter hub; also note that the Higgs boson is no longer "hitherto missing" (discovered 2012).

### N3189

Note: [[7.1 The Standard Electroweak Theory -  Preliminaries|7.1 The Standard Electroweak Theory -  Preliminaries]]  
Priority: medium · Graph: no · Manim: no

Solid derivation of quark doublets, GIM and CKM structure, with a few transcription errors, a misplaced fragment, and dated numbers.

- [Correctness] Fig. 7.2 photon vertex "$-i\electric{Q_q}\gamma_\mu$" is missing the coupling $e$; it should be $-ie\electric{Q_q}\gamma_\mu$.
- [Correctness] Eq. (7.1.33): $\mathcal M^f=\mathsf V_L^f\zeta^f\mathsf V_R^{f\dagger}$ is dimensionless as written while the table gives $\mathcal M^f$ in GeV; the mass matrix is $\mathcal M^f=(v/\sqrt2)\,\mathsf V_L^f\zeta^f\mathsf V_R^{f\dagger}$. Also the fragment "with $f=u,d$. Accordingly, ..." after the vertex factors belongs directly after (7.1.33), not after Fig. 7.2.
- [Correctness] "Whenever it is necessary to retain the color indices, we shall suppress them" is logically inverted; it should say the color indices are suppressed except where they are needed.
- [Correctness] Dated values: $\cos\theta_C=0.97425$ (now $|V_{ud}|\approx0.97367$) and $B(K^+\to\pi^+\nu\bar\nu)=(1.73^{+1.15}_{-1.05})\times10^{-10}$ (NA62 2024: $(1.30^{+0.33}_{-0.30})\times10^{-10}$); add an update callout or refresh with current PDG values together with (7.1.28).
- [Intuition] Before (7.1.29), show the two-generation GIM cancellation explicitly: $\bar d_\theta d_\theta+\bar s_\theta s_\theta=\bar d d+\bar s s$, so the $\sin\theta_C\cos\theta_C$ cross terms of (7.1.14) cancel; this one line makes the general $[\mathcal O,\mathcal O^\dagger]$ argument intuitive.
- [Simplify] Add one sentence explaining how to read the ternary plot in Fig. 7.1 (each corner is 100% $d$, $s$ or $b$; $d'$ sits near the $d$ corner shifted by $|V_{us}|^2\approx0.05$ towards $s$).

### N3190

Note: [[7.10 Incompleteness of the Electroweak Theory|7.10 Incompleteness of the Electroweak Theory]]  
Priority: medium · Graph: yes · Manim: no

Correct triviality and vacuum-stability derivations (re-derived 7.10.1–7.10.12), but compact and missing the post-2012 conclusion.

- [Graph] Plot the one-loop triviality bound (7.10.5) as $\log_{10}(\energy{\Lambda^\star}/\unit{GeV})$ versus $\mechanical{M_H}$ for $100\le\mechanical{M_H}\le800\,\unit{GeV}$ with $v=246\,\unit{GeV}$, with a vertical marker at $125\,\unit{GeV}$ and horizontal lines at $1\,\unit{TeV}$, $10^{16}$ and $1.2\times10^{19}\,\unit{GeV}$; note that the one-loop curve reaches the Planck scale near $\mechanical{M_H}\approx143\,\unit{GeV}$, versus $180\,\unit{GeV}$ from the two-loop analysis in (7.10.6).
- [Graph] Plot the effective potential (7.10.7) $\energy{V}(x)=-\mechanical{\mu}^2x+Bx^2\ln(x/\mechanical{M}^2)$ in dimensionless form for $\ln(x_0/\mechanical{M}^2)$ just above and just below $-1$ to show the minimum ceasing to be absolute, which motivates (7.10.10).
- [Simplify] In (7.10.11) state that $\energy{V}''$ is the second derivative with respect to the real field $\phi$ (using $\phi^\dagger\phi=\phi^2/2$), not with respect to $\phi^\dagger\phi$; otherwise the factor $4B\langle\phi^\dagger\phi\rangle_0$ looks wrong.
- [Structure] Add an update callout after the "chimney" paragraph: with $\mechanical{M_H}\approx125.1\,\unit{GeV}$ and $\mechanical{m_t}\approx172.5\,\unit{GeV}$, the measured point lies below the absolute-stability bound in the metastable region, which is exactly the scenario described in the final paragraph.
- [Intuition] Explain in one sentence why the sign in (7.10.1) makes $\lambda$ grow with energy (screening, as in QED), so a large $\lambda$ at low energy hits a Landau pole sooner, giving the upper bound.

### N3191

Note: [[7.11 The Hierarchy Problem|7.11 The Hierarchy Problem]]  
Priority: medium · Graph: yes · Manim: no

A readable qualitative account of the hierarchy problem that would gain from one concrete fine-tuning estimate.

- [Correctness] "$\mechanical{M_{\mathrm{Pl}}}=(\hbar\mechanical{c}/G_{\mathrm{N}})^{1/2}\approx1.2\times10^{19}\,\unit{GeV}$" mixes units: with the SI units in the table $(\hbar c/G_N)^{1/2}$ is a mass ($2.18\times10^{-8}$ kg); write $\mechanical{M_{\mathrm{Pl}}}c^2=(\hbar c^5/G_N)^{1/2}\approx1.22\times10^{19}\,\unit{GeV}$ or state natural units.
- [Example] Add a worked estimate using the top-quark loop, $\delta\mechanical{M_H}^2\approx-\frac{3G_F}{\sqrt2\pi^2}\mechanical{m_t}^2\energy{\Lambda}^2$, and give the required cancellation for $\energy{\Lambda}=10\,\unit{TeV}$ (about 1 part in 100) and for $\energy{\Lambda}=\mechanical{M_{\mathrm{Pl}}}$ (about 1 part in $10^{32}$), linking to problem 7.21.
- [Graph] Plot the fine-tuning measure $|\delta\mechanical{M_H}^2|/\mechanical{M_H}^2$ from the problem 7.21 formula $\frac{3G_F\energy{\Lambda}^2}{4\pi^2\sqrt2}(2\mechanical{M_W}^2+\mechanical{M_Z}^2+\mechanical{M_H}^2-4\mechanical{m_t}^2)$ versus $\energy{\Lambda}$ on log axes from $0.5$ to $10^{19}\,\unit{GeV}$ with $\mechanical{M_H}=125\,\unit{GeV}$.
- [Structure] Add an update callout: no superpartners, technicolor resonances or little-Higgs partners have been seen at the LHC up to roughly 1–2 TeV, so the "less than about 1 TeV" expectations in the supersymmetry paragraph are now strongly constrained.
- [Intuition] Explain why fermion masses do not suffer the same problem (chiral symmetry makes $\delta m_f\propto m_f\ln\energy{\Lambda}$), which makes clear why the scalar mass is special.

### N3192

Note: [[7.12 The Vacuum Energy Problem|7.12 The Vacuum Energy Problem]]  
Priority: medium · Graph: yes · Manim: no

Short and essentially correct (7.12.1, 7.12.2 and the $1.2\times10^8\,\mathrm{GeV}^4$ estimate recompute exactly), but the intro has a wrong order of magnitude, the numbers are dated, and the sign convention for $\varrho_H$ is left implicit.

- [Correctness] Intro: the gravitational to electrostatic attraction ratio for an electron and a proton is $Gm_em_p/(e^2/4\pi\varepsilon_0)\approx4.4\times10^{-40}$, so it is about 39 to 40 orders of magnitude smaller, not 41. Correct the number or give the explicit ratio.
- [Intuition] After 7.12.2, say explicitly that the potential at the minimum is $V_{\min}=-\mechanical{M_H}^2v^2/8$ and that $\varrho_H$ is defined as its magnitude. The puzzle is the size, $|\varrho_H|/\varrho_{\mathrm{vac}}\sim10^{54}$, and the sign is fixed only up to an arbitrary additive constant in $V$, which is the real content of the fine-tuning problem.
- [Simplify] Give the $\Lambda=(8\pi G_{\mathrm N}/c^4)\varrho_H$ relation together with the conversion from natural units ($1\,\mathrm{GeV}^4=2.09\times10^{37}\,\mathrm{J\,m^{-3}}$, using $(\hbar c)^3$). With that conversion the reader can check the $\mathrm{m^{-2}}$ unit in the table.
- [Structure] Add a short updated-values note: $\mechanical{M_H}\approx125.2\,\mathrm{GeV}$, and Planck gives $\varrho_\Lambda\approx(2.2\,\mathrm{meV})^4\approx2.5\times10^{-47}\,\mathrm{GeV}^4$ as a measured value, not only an upper bound. The mismatch remains about 54 to 55 orders of magnitude.
- [Graph] Plot the Mexican-hat slice $V(\varphi)=\mu^2\varphi^2/2+|\lambda|\varphi^4/4$ against $\varphi$ in units of $v$ ($\varphi\in[-1.6v,1.6v]$), using $\mu^2=-M_H^2/2$ and $|\lambda|=M_H^2/(2v^2)$. Mark the minima at $\varphi=\pm v$ with depth $-M_H^2v^2/8$, and show the level $V=0$ next to an (invisibly small) observed $\varrho_{\mathrm{vac}}$ line to make the scale point.

### N3193

Note: [[7.13 Reflections|7.13 Reflections]]  
Priority: low · Graph: no · Manim: no

Clear qualitative essay with no math to check, but one sentence is garbled and several statements are frozen at the 2012 state of knowledge.

- [Simplify] Fix the garbled question "if the Higgs boson is responsible for fermion mass, is what determines the masses and mixings of the fermions?" so that it reads "what determines the masses and mixings of the fermions?".
- [Structure] Add a brief dated callout at the end: the 125 GeV boson is now established as a spin-0, CP-even scalar with measured couplings to $W$, $Z$, $t$, $b$, $\tau$ and $\mu$ that agree with the standard model. This answers several of the open questions in the note ("does the H couple to fermions?") without rewriting the source text.

### N3194

Note: [[7.2 Electroweak Gauge Bosons|7.2 Electroweak Gauge Bosons]]  
Priority: low · Graph: yes · Manim: no

Clean, well-ordered derivation whose numbers all recompute (227 MeV, 166 MeV, 2.474 GeV, 1.722 GeV, 84.8 MeV, 3.43%, 69.6%, 20.1%), with one notational slip in 7.2.11.

- [Correctness] Eq. 7.2.11, first line: "$3[2\cdot\Gamma(Z^0\to u\bar u)+3\cdot\Gamma(Z^0\to d\bar d)]$" mixes widths into a dimensionless ratio, and it double-counts color because $\Gamma(Z^0\to q\bar q)$ in 7.2.10 already contains the factor 3. Write $3[2(L_u^2+R_u^2)+3(L_d^2+R_d^2)]$, or equivalently $[2\Gamma(u\bar u)+3\Gamma(d\bar d)]/\Gamma(\nu\bar\nu)$.
- [Intuition] Before 7.2.11, state the couplings it uses ($L_u=1-4x_W/3$, $R_u=-4x_W/3$, $L_d=-1+2x_W/3$, $R_d=2x_W/3$, normalized so that $L_\nu=1$). The reader can then check $L_u^2+R_u^2=1-8x_W/3+32x_W^2/9$ in one line.
- [Simplify] After 7.2.8, add a counting sentence: each of 3 lepton channels plus 2 quark doublets times 3 colors gives 9 equal channels, so $1/9$ and $6/9=2/3$ follow directly. For the $Z$, the analogous count of 21 neutrino-width units at $x_W=0$ in 7.2.13 is a useful limiting case to mention.
- [Graph] Plot $\Gamma(Z^0\to\mathrm{all})/\Gamma(\nu\bar\nu)=21-40x+160x^2/3$, $\Gamma(\mathrm{had})/\Gamma(\nu\bar\nu)$ and $\Gamma(e^+e^-)/\Gamma(\nu\bar\nu)$ for $x_W\in[0.15,0.30]$, with vertical markers at $x_W=0.2122$ and $0.232$. This shows how weakly the total width depends on the mixing parameter.
- [Structure] Add a short note giving current PDG values ($M_W\approx80.37\,\mathrm{GeV}$, $\Gamma_W=2.085\,\mathrm{GeV}$, $\Gamma_Z=2.4955\,\mathrm{GeV}$) and saying that the quoted Ref. [3] numbers are from about 2010.

### N3195

Note: [[7.3 Electron-Positron Annihilations|7.3 Electron-Positron Annihilations]]  
Priority: medium · Graph: yes · Manim: no

Dense but correct overall, with Table 7.1, 7.3.12, 7.3.16, the peak asymmetries and the polarizations all recomputing exactly; it has two equation errors and no step-by-step guidance from 7.3.3 to the peak formulas.

- [Correctness] Eq. 7.3.10: "$1-\frac{8x_W}{3}+\frac{32x_W^2}{3}$" should be $1-\frac{8x_W}{3}+\frac{32x_W^2}{9}$, as in 7.2.11 and 7.3.19b. With $/3$, $R_{\mathrm{peak}}^{(u\bar u)}$ becomes 1066 instead of the tabulated 693.
- [Correctness] Text before 7.3.14: "$(R_i-L_i)=\tau_3^{(i)}$" has the wrong sign. With $L_e=-1+2x_W$ and $R_e=2x_W$, one gets $R_e-L_e=+1$ while $\tau_3^{(e)}=-1$, so it must read $(R_i-L_i)=-\tau_3^{(i)}$, which is consistent with 7.3.14 as written.
- [Structure] Fig. 7.3 caption: the graph has four panels (a) to (d), but the caption labels only (a) to (c) and runs "$u\bar u$ ... final state; $d\bar d$ ..." together. Insert "(d)" before the $d\bar d$ item.
- [Simplify] Between 7.3.3 and 7.3.5, add the two steps: at $s=M_Z^2$ only the $G_F^2$ term survives, and $\int_{-1}^1(1+z^2)\,dz=8/3$ (the $z$ term integrates to zero). Also state $\sigma_{\mathrm{QED}}=4\pi\alpha^2/3s$ before 7.3.7, because the reader needs it to get 7.3.7 and the 10.45 pb reference value.
- [Intuition] After 7.3.19, explain in one sentence that every peak asymmetry carries the factor $A_e\propto v_ea_e\propto(1-4x_W)$. That is why the measured $A^{(\ell\ell)}=0.0171$ pins $x_W$ so sharply: $x_W=0.232$ gives 0.0154 and $x_W=0.2122$ gives 0.066. A one-line numeric example would help here.
- [Graph] Add a native line-shape graph for $\sigma_{\mathrm{had}}(\sqrt s)$ on $\sqrt s\in[88,95]\,\mathrm{GeV}$, using the resonant term of 7.3.3 with $\Gamma_Z=\Gamma_{\mathrm{vis}}+N_\nu\cdot166\,\mathrm{MeV}$ for $N_\nu=2,3,4$. This makes Fig. 7.5's neutrino-counting argument computable alongside the PNG. Also give the solid, dashed and dot-dashed curves of Figs. 7.6 and 7.7 a legend inside the graph.

### N3196

Note: [[7.4 Deeply Inelastic Lepton-Hadron Scattering|7.4 Deeply Inelastic Lepton-Hadron Scattering]]  
Priority: medium · Graph: yes · Manim: no

Faithful and mostly correct transcription (kinematics, tensor algebra, sum rules, $R_\nu$, $R_{\bar\nu}$ and the asymmetry all re-derive), but it is one 1100-line unbroken text block with a dimensional error in (7.4.70) and a few unit and symbol slips.

- [Correctness] (7.4.70) has prefactor $\frac{G_F^2}{2\pi}\energy{E'}\energy{E}$, which gives $\unit{GeV}^{-3}$ instead of $\unit{GeV}^{-5}$ for $d^2\sigma/dQ^2d\nu$ (with $W_i\sim\unit{GeV}^{-1}$); it must be $\frac{G_F^2}{2\pi}\frac{\energy{E'}}{\energy{E}}$, matching (7.4.27) and the Jacobian $2ME^2y$ that leads to (7.4.71).
- [Correctness] (7.4.97) $A/Q^2\simeq-7.2\times10^{-5}$ is missing its unit: it should read $-7.2\times10^{-5}\,\unit{GeV}^{-2}$ (recomputed: $G_F\cdot\frac45/(4\pi\alpha\sqrt2)=7.19\times10^{-5}\,\unit{GeV}^{-2}$).
- [Correctness] Symbol slips: the table defines $N$ only as "parton count", but the note also uses $N$ for the target nucleon in (7.4.1), (7.4.69), (7.4.85)-(7.4.89); in (7.4.28) one form factor is written $\Gamma_2^2(\mechanical{q}^2)$ while all the others take $\mechanical{Q}^2$; the rule (7.4.47) needs an absolute value, $1/|\partial h/\partial x|$.
- [Correctness] The world average $M_W=80.399\pm0.023\,\unit{GeV}$ (PDG 2010) near the end is outdated; add an editorial note giving the current PDG value ($80.369\pm0.013\,\unit{GeV}$, PDG 2024) and mark "most precise to date" and "recent" (BoNuS, HERA) as statements made at the source's date.
- [Structure] Add section headings (kinematics and invariants; hadron tensor and structure functions; virtual-photon cross sections; parton model and scaling; sum rules; charged-current neutrino DIS; neutral currents and $R_\nu$; $\gamma$-$Z$ interference and the SLAC asymmetry; HERA). Also remove the UTF-8 BOM at the start of the file, and change the Fig. 7.12 embed from Markdown `![..](file.png)` to the `!\[\[...|caption\]\]` wiki-embed style used for the other figures.
- [Graph] Add two native plots. (a) The $y$-distributions $1$ and $(1-y)^2$ for $y\in[0,1]$, which shows why $\sigma(\bar\nu N)/\sigma(\nu N)\approx1/3$ next to (7.4.74). (b) $R_\nu=\tfrac12-x_W+\tfrac{20}{27}x_W^2$ and $R_{\bar\nu}=\tfrac12-x_W+\tfrac{20}{9}x_W^2$ for $x_W\in[0,0.5]$, with a marker at $x_W=0.2122$ (0.32, 0.39). One could also plot the propagator factors $1/Q^4$ and $1/(Q^2+M_W^2)^2$ on log axes for $Q^2\in[10^2,10^5]\,\unit{GeV}^2$ to explain Fig. 7.14.

### N3197

Note: [[7.5 Hadron-Hadron Interactions|7.5 Hadron-Hadron Interactions]]  
Priority: medium · Graph: yes · Manim: yes

A faithful but dense transcription of the parton-model formulas for Drell–Yan, W and Z production, with one wrong Jacobian, two factual slips, and many 2012-era numbers.

- [Correctness] Eq. (7.5.9) has the wrong Jacobian: $\partial(x,\tau)/\partial(x_a,x_b)=x_a+x_b=(x^2+4\tau)^{1/2}$, so it should read $F(\tau,x)=x_ax_b\,g(x_a,x_b)/(x^2+4\tau)^{1/2}$. Only with the square root does integrating over $x$ give (7.5.11) and the standard $d^2\sigma/dM^2dx_F=(4\pi\alpha^2/9M^4)\,x_ax_b/(x_a+x_b)\sum e_i^2[\dots]$.
- [Correctness] In the paragraph after (7.5.15), "studying $1.96$-GeV proton–antiproton collisions" should say $1.96\,\mathrm{TeV}$. In the Fig. 7.17 caption, CMS stands for "Compact Muon Solenoid", not "Compact Muon Spectrometer".
- [Correctness] Several values are out of date and should be marked as 2012 values or updated: the LHC has run at $13$ and $13.6\,\mathrm{TeV}$; the PDG 2024 average is $M_W=80.369\pm0.013\,\mathrm{GeV}$ (CDF 2022 reported $80.434\pm0.009$); the sequential $W'$ is now excluded below about $6\,\mathrm{TeV}$ and the sequential $Z'$ below about $5\,\mathrm{TeV}$ (ATLAS/CMS full Run 2), not "$>2\,\mathrm{TeV}$".
- [Simplify] After (7.5.8), say that the prefactor is $\sigma(e^+e^-\to\mu^+\mu^-)$ at $s=\mathcal{M}^2$ divided by $\mathcal{M}^2$; as written it is called a cross section but has units $\mathrm{GeV}^{-4}$. In (7.5.11), (7.5.14) and (7.5.17) the integration variable $x$ actually runs over $x_a$ (from $\tau$ to 1, with $x_b=\tau/x$). This clashes with the Feynman-$x$ of (7.5.4); rename the dummy variable to $x_a$ or $\xi$.
- [Example] Add a short worked check of the rates quoted in the text, e.g. $12.5\,\mathrm{nb}\times5\times10^{33}\,\mathrm{cm^{-2}s^{-1}}\approx60\,W/\mathrm{s}$ and $1.1\,\mathrm{nb}\to5.5\,Z/\mathrm{s}$, so readers see how cross section times luminosity gives an event rate. Also fix the inconsistency between $540$ GeV in the text and $546$ GeV in the Fig. 7.18 caption, or explain both.
- [Graph] Plot $x_a$ and $x_b$ from (7.5.5) against $x\in[-1,1]$ for $\tau=(M_W/\sqrt s)^2$ at $\sqrt s=0.63,1.96,13\,\mathrm{TeV}$; and plot the decay distribution $(1+\cos\theta^*)^2$ for $\theta^*\in[0,\pi]$ next to the flat background. [Manim] Animate $u\bar d\to W^+$ with spin arrows: the left-handed $u$ and right-handed $\bar d$ give total spin along the $\bar p$ direction, then the $\ell^+$ is emitted along the $W$ spin. This shows where the charge asymmetry comes from.

### N3198

Note: [[7.6 Further Tests of the Electroweak Theory|7.6 Further Tests of the Electroweak Theory]]  
Priority: medium · Graph: yes · Manim: no

A short survey of rare decays and CKM unitarity, readable but with a garbled $B_s$ sentence, a typo, and almost every experimental number superseded.

- [Correctness] Paragraph 3: "$B(B_s\to\mu^+\mu^-)<(3.5\pm0.2)\times10^{-9}$" is the standard-model expectation, not a bound, so the "$<$" with an uncertainty is wrong. Write the SM value with "$=$" and give the 2012 bound separately. Also note that $B_s\to\mu^+\mu^-$ has since been observed (world average about $3.3\times10^{-9}$, consistent with the SM value $\approx3.66\times10^{-9}$).
- [Correctness] "departures from the CMK paradigm" should read "CKM".
- [Correctness] Several statements are outdated: the first-row sum is now $\mathcal S_u\approx0.9985\pm0.0007$ (PDG 2024, the "Cabibbo-angle anomaly"), not $0.9999\pm0.0006$; CP violation in charm was established by LHCb in 2019 ($\Delta A_{CP}\approx-1.5\times10^{-3}$); top FCNC limits are now about $10^{-5}$–$10^{-4}$; a sequential fourth generation is excluded by the measured Higgs production rate. Add a dated "status update" callout.
- [Simplify] At (7.6.2), state that the apex is $\bar\rho+i\bar\eta=-V_{ud}V_{ub}^*/(V_{cd}V_{cb}^*)$. Dividing by $V_{cd}V_{cb}^*$ alone gives vertices $(0,0)$, $(-1,0)$ and $-(\bar\rho,\bar\eta)$, so the sign flip that puts the triangle on $(0,0)$, $(1,0)$, $(\bar\rho,\bar\eta)$ should be shown. Also give the Jarlskog relation explicitly: area $=J/2$ for every unnormalized triangle.
- [Graph] Plot the normalized unitarity triangle with vertices $(0,0)$, $(1,0)$, $(\bar\rho,\bar\eta)\approx(0.16,0.35)$. Label the angles $\alpha,\beta,\gamma$ and the sides $R_u,R_t$, so readers can see the geometry before they see the CKMfitter figure.

### N3199

Note: [[7.7 A Brief Look at Quantum Corrections|7.7 A Brief Look at Quantum Corrections]]  
Priority: medium · Graph: yes · Manim: no

The formulas check out, including (7.7.2)–(7.7.4), (7.7.7) and (7.7.9), but the note is narrative-heavy, gives no numerical $\Delta\rho$ example, and quotes pre-discovery numbers.

- [Correctness] The values have been superseded: the 2023 Northwestern measurement gives electron $g/2=1.001\,159\,652\,180\,59(13)$, and QED is now known through $(\alpha/\pi)^5$; $m_t=172.57\pm0.29\,\mathrm{GeV}$ (PDG 2024) rather than $173.2\pm0.9$; the Higgs boson has been found at $M_H=125.20\pm0.11\,\mathrm{GeV}$, so the fit discussion around Fig. 7.22 should say that the fitted $92^{+34}_{-26}$ GeV is consistent with it at about $1\sigma$.
- [Example] After (7.7.8), insert the number: $\Delta\rho=3G_Fm_t^2/(8\sqrt2\pi^2)\approx0.0094$ for $m_t=173\,\mathrm{GeV}$. Compare it with the CHARM-II error on $\rho$ in (7.7.6) to show why LEP-level precision was needed.
- [Intuition] Explain in one sentence why $\Delta\rho\propto m_t^2$ (it is non-decoupling, because the Yukawa coupling grows with the mass) while the Higgs dependence is only $\ln M_H$ (Veltman screening). Right now the text states both without a reason.
- [Graph] Plot $\Delta\rho$ from (7.7.7) against $m_t\in[0,250]\,\mathrm{GeV}$ with $m_b=4.8\,\mathrm{GeV}$, together with the asymptote (7.7.8). Also plot $\sigma(\nu_\mu e)/\sigma(\bar\nu_\mu e)$ from (7.7.2)/(7.7.3) against $x_W\in[0,0.5]$, marking $x_W=0.237$, to show how the ratio determines $x_W$.
- [Structure] Change the Fig. 7.23 embed from Markdown `![..](file.png)` to the `!\[\[...|caption\]\]` wiki-embed style used for the other figures (the caption contains nested brackets). Remove the UTF-8 BOM at the start of the file. Add subheadings (lepton $g-2$; top-mass prediction; the $\rho$ parameter; Higgs-mass fits; running $\sin^2\theta_W$).

### N3200

Note: [[7.8 The Scale of Fermion Masses|7.8 The Scale of Fermion Masses]]  
Priority: low · Graph: yes · Manim: no

A concise and correct argument (I checked (7.8.1): $\sqrt{s_e}\approx1.7\times10^9$ GeV, $\sqrt{s_t}\approx3$ TeV, $\zeta_e\approx2.9\times10^{-6}$, $\zeta_t\approx1$), but its closing paragraph predates the Higgs discovery.

- [Correctness] The last paragraph ("Until the Higgs boson is discovered and shown to couple to fermion pairs…") is outdated. Since 2012–2020, Higgs couplings to $t$, $b$, $\tau$ and $\mu$ have been observed and found proportional to mass, while the $He\bar e$ coupling is still unestablished. Add a dated update note.
- [Simplify] The phrase "saturate partial-wave unitarity for the standard model with a Higgs mechanism" is confusing, because the scenario has explicit fermion masses and no Higgs–fermion coupling. Reword it as "in a theory where the gauge bosons get mass but the fermion mass is put in by hand".
- [Graph] Make a log-log plot of the critical energy $\sqrt{s_i}=8\pi v^2/(\sqrt{3\eta_i}\,m_i)$ against $m_i$ from $10^{-4}$ to $10^3$ GeV, with separate lines for $\eta=1$ and $\eta=3$ and markers at $e,\mu,\tau,u,d,s,c,b,t$. Add a horizontal line at the LHC energy, so readers see that only the top mass is tested at accessible energies.

### N3201

Note: [[7.9 Search for the Higgs Boson|7.9 Search for the Higgs Boson]]  
Priority: low · Graph: no · Manim: no

A clear historical narrative of the Higgs search up to July 2012; the physics is correct for its time but the status is now obsolete.

- [Correctness] Add a dated update callout: $M_H=125.20\pm0.11\,\mathrm{GeV}$ (PDG 2024); spin-parity $0^+$ is established (not just "even-integer spin"); $H\to b\bar b$, $\tau\tau$, $\mu\mu$ and $t\bar tH$ have been observed; a fourth generation, which the text says "would raise the $gg\to H$ rate", is excluded by exactly that rate.
- [Intuition] Explain briefly why the gluon-fusion shoulder sits near $M_H\approx2m_t\approx350\,\mathrm{GeV}$: the top loop becomes real at the $t\bar t$ threshold. The text says "near 400 GeV" without a reason.
- [Structure] Split the note into "pre-LHC constraints", "LHC discovery", "production and decay channels" and "alternatives (SUSY, composite, extra generation)", and remove the UTF-8 BOM.

### N3202

Note: [[7.B References|7.B References]]  
Priority: low · Graph: no · Manim: no

A complete numbered reference list (115 entries, matching the TLDR) that needs no content change.

- [Structure] No content change needed; only remove the UTF-8 BOM at the start of the file. The "Physical quantities" table covers symbols that appear only in reference titles and could be trimmed.

### N3203

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/07 Electroweak Interactions of Quarks/7.P Problems|7.P Problems]]  
Priority: low · Graph: no · Manim: no

A well-structured problem list (28 problems; I checked (7.22), (7.21) and the heavy-mass limits of (7.27), and they are correct), with a few transcription errors.

- [Correctness] Problem 7.3(a): "Express $V_{ub}=A\lambda^2$" should be "$V_{cb}=A\lambda^2$". The next sentence then correctly sets $V_{ub}=0$, and part (b) assigns $s_{23}=A\lambda^2$, i.e. $V_{cb}$.
- [Correctness] Problem 7.4: "(for $j\ne k$ and $i\ne j$, respectively)" should be "$i\ne k$", since the second condition is $\sum_jV_{ij}V_{kj}^*=\delta_{ik}$.
- [Correctness] Problem 7.19 has two parts labelled "(b)"; the second, on $\delta p/p$, should be "(c)". Also add the missing comma in "$e^+e^-$ $\mu^+\mu^-$".
- [Structure] Problem 7.23 ends with escaped double brackets `\[\[cf. … \]\]` that render as literal "\[\[…\]\]"; use single brackets. In the table, $\zeta_\pm$ from 7.27 (which clashes with the Yukawa $\zeta_i$ of 7.1) is missing, and $M_Z$ appears twice; also remove the UTF-8 BOM.

### N3204

Note: [[7.R For Further Reading|7.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

An annotated reading list that is clean and needs no content change.

- [Structure] No change needed apart from removing the UTF-8 BOM. Optionally add a dated note that several resources (PDG 2010, the j.mp short links) have newer editions or dead links.

### N3205

Note: [[8.0 Chapter introduction|8.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

A clear chapter overview with no errors.

- [Links] Turn the forward references (section 8.5.3 Altarelli–Parisi, section 8.8 lattice, section 8.9) into wiki links to the corresponding notes in this folder, and remove the UTF-8 BOM.

### N3206

Note: [[8.1 A Color Gauge Theory|8.1 A Color Gauge Theory]]  
Priority: medium · Graph: yes · Manim: yes

A good, mostly correct introduction (I checked (8.1.6) and (8.1.12), Tables 8.1–8.3 and the string integrals (8.1.25)–(8.1.29)), held back by one index typo and a lack of worked steps and visuals.

- [Correctness] Eq. (8.1.20): the left side reads $\sum_{i<j}\langle\mathbf T^{(i)}\cdot\mathbf T^{(i)}\rangle$ and should be $\sum_{i<j}\langle\mathbf T^{(i)}\cdot\mathbf T^{(j)}\rangle$.
- [Example] Work out one entry of Table 8.2 and one of Table 8.3 explicitly: for the triplet, $I_3\in\{\tfrac12,-\tfrac12,0\}$ gives $\langle T^2\rangle=8\cdot\tfrac12/3=4/3$; for the singlet $(q\bar q)$, $(0-\tfrac43-\tfrac43)/2=-\tfrac43$; for the octet, $(3-\tfrac83)/2=+\tfrac16$. This lets readers reproduce the rest of the table.
- [Simplify] In §8.1.2, show the substitution $u=2r/r_0$ that turns (8.1.25) and (8.1.26) into $\int_0^1du/\sqrt{1-u^2}=\pi/2$ and $\int_0^1u^2du/\sqrt{1-u^2}=\pi/4$. Note also that $1\,\mathrm{GeV/fm}=0.197\,\mathrm{GeV^2}$ uses $\hbar c=0.197\,\mathrm{GeV\,fm}$.
- [Graph] Plot the Chew–Frautschi line $J=\alpha_0+\alpha'M^2$ with $\alpha'=0.88\,\mathrm{GeV^{-2}}$ and $\alpha_0\approx0.5$, with points for $\rho(770)$, $a_2(1320)$/$f_2(1270)$, $\rho_3(1690)$ and $f_4(2050)$ on axes $M^2\in[0,5]\,\mathrm{GeV^2}$. Optionally add a second plot of the string speed profile $\beta(r)=2r/r_0$ and the energy density $k/\sqrt{1-\beta^2}$.
- [Manim] Animate the rotating string of Fig. 8.4: a segment spinning with its tips at speed $c$, colored by local $\gamma=1/\sqrt{1-\beta^2}$. A second short scene could show string breaking (Fig. 8.3): the stretched flux tube snaps into two $q\bar q$ mesons once its energy exceeds about one hadron mass.
- [Structure] Remove the UTF-8 BOM. The table lists $\mechanical{k}$ twice with different units, and $x_{21},x_{22},u(x,Q^2)$ appear only inside figures; say so in the descriptions.

### N3207

Note: [[8.10 The 1 - N Expansion|8.10 The 1 - N Expansion]]  
Priority: low · Graph: no · Manim: yes

A clear and correct exposition of large-$N$ counting (I checked the powers in (8.10.1)–(8.10.11) and the $\phi$ decay ratio $\approx5.4$), which would gain most from an explicit counting rule and a visual.

- [Simplify] State the general counting rule once: a connected vacuum diagram scales as $N^{\chi}$ with $\chi=2-2h-b$ (genus $h$, $b$ quark-loop boundaries), using the 't Hooft coupling $\lambda=g^2N$ held fixed. Writing "$g/\sqrt N$ with $g$ fixed" reuses $g$ for two different couplings.
- [Intuition] In item 7, add why glueball widths go as $1/N^2$ while meson widths go as $1/N$: glueball–glueball couplings scale as $1/N$, whereas meson–meson couplings scale as $1/\sqrt N$.
- [Manim] Animate one gluon line splitting into a double index line, then trace closed index loops in the planar diagram of Fig. 8.51 and the nonplanar diagram of Fig. 8.52 (3 loops vs 1). This shows directly where the $1/N^2$ suppression comes from.
- [Structure] Write "sections 8.4–8.7" with an en dash, and remove the UTF-8 BOM.

### N3208

Note: [[8.11 Strong-Interaction Symmetries|8.11 Strong-Interaction Symmetries]]  
Priority: medium · Graph: no · Manim: no

A readable qualitative survey of flavor, chiral and CP symmetries, with a meson-name error, inconsistent $\theta$-term normalizations, and an outdated description of the axion and the nEDM limit.

- [Correctness] Discussion of the U(1) problem: "the obvious candidate, $\eta(958)$" should be $\eta'(958)$. The $\eta$ is at 548 MeV.
- [Correctness] Eqs. (8.11.10) and (8.11.11) are inconsistent. For the $e^{in\theta}$ weighting of (8.11.9) to be reproduced, the action $\int d^4x\,\mathcal L_\theta$ must equal $n\theta$, so the coefficients must match: $1/8\pi^2$ in $n$ requires $\theta/8\pi^2$ in $\mathcal L_\theta$, not $\theta/16\pi^2$. With the unrescaled fields of (8.1.4)–(8.1.6), both also need a factor $g^2$. The standard forms are $n=\frac{g^2}{16\pi^2}\int d^4x\,\mathrm{tr}\,G\tilde G$ and $\mathcal L_\theta=\frac{\theta g^2}{16\pi^2}\mathrm{tr}\,G\tilde G$ with $\tilde G^{\mu\nu}=\tfrac12\epsilon^{\mu\nu\alpha\beta}G_{\alpha\beta}$.
- [Correctness] The last paragraph says the new U(1) "is spontaneously broken in the course of electroweak symmetry breaking". That is the original Peccei–Quinn–Weinberg–Wilczek axion, which was excluded long ago. Viable "invisible" axions (KSVZ, DFSZ) break the PQ symmetry at $f_a\gg v$, and $\bar\theta$ relaxes to zero through the axion potential. Also introduce $\bar\theta=\theta+\arg\det M_q$ explicitly, since the text mentions that the two phases combine.
- [Correctness] The nEDM limit in (8.11.12) is outdated: the current bound is $|d_n|<1.8\times10^{-26}\,e\,\mathrm{cm}$ (90% CL, PSI 2020). It still gives $|\bar\theta|\lesssim10^{-10}$.
- [Intuition] Add one line to estimate the bound: $d_n\sim\bar\theta\,e\,m_q/m_n^2\sim10^{-16}\bar\theta\,e\,\mathrm{cm}$, so the nEDM limit gives $|\bar\theta|\lesssim10^{-10}$. Also replace the redundant "spontaneously broken chiral symmetry breaking" with "spontaneously broken chiral symmetry".
- [Structure] Remove the UTF-8 BOM, and add subheadings (heavy-quark symmetries; isospin and quark masses; chiral symmetry and the U(1) problem; electroweak corrections; strong CP and axions).

### N3209

Note: [[8.12 Assessment|8.12 Assessment]]  
Priority: low · Graph: no · Manim: no

A readable qualitative essay; one notation slip and some time-stamped statements.

- [Correctness] AdS/CFT paragraph: "$\mathrm{AdS}^5\otimes S_5$" should read $\mathrm{AdS}_5\times S^5$ (five-dimensional anti-de Sitter space times the five-sphere), as the bracketed gloss itself says.
- [Structure] "tested and validated up to energies of $1\,\mathrm{TeV}$" and "early experimentation at the LHC" are dated to the 2013 source; add a short dated-content callout noting that LHC jet data now reach multi-TeV transverse momenta at $\sqrt{s}=13$–$13.6\,\mathrm{TeV}$.

### N3210

Note: [[8.2 Charge Renormalization in Electrodynamics|8.2 Charge Renormalization in Electrodynamics]]  
Priority: medium · Graph: yes · Manim: yes

A faithful but very dense loop calculation whose physics message (screening, running $\alpha$) is clear, with a few sign and typo errors in the intermediate steps.

- [Correctness] (8.2.12): the $z_1$ exponent is printed as $iz_1(k^2-m^2-i\epsilon)$; it must be $+i\epsilon$, as in (8.2.11) and as used in (8.2.16), where $-(m^2-i\epsilon)(z_1+z_2)$ appears.
- [Correctness] (8.2.27) still carries $i\sigma$ in the exponent although $\sigma=1$ was already set (it should be $\exp\{i[q^2z_1z_2/(z_1+z_2)-(M_i^2-i\epsilon)(z_1+z_2)]\}$), and (8.2.28) reads $\delta(\sigma-x_1-x_2)$ where it should be $\delta(\sigma-z_1-z_2)$.
- [Correctness] Sign of (8.2.51)–(8.2.53): the $-e^2$ in (8.2.44) and $\int d^nl\,e^{il^2z}/(2\pi)^n=ie^{-i\pi n/4}/(4\pi z)^{n/2}$ give the prefactor $-ie^2e^{-i\pi n/4}/(4\pi)^{n/2}$, so the pole term is $+\frac{ie^2}{16\pi^2}(q^\mu q^\nu-q^2g^{\mu\nu})\frac{2}{4-n}\int(1-2z)^2$. As printed, the expansion $\Gamma(2-n/2)X^{n/2-2}=\frac{2}{4-n}-\ln X$ gives a log term with the opposite sign to (8.2.54). (8.2.54)–(8.2.56) themselves are correct.
- [Correctness] Symbol clash: $\epsilon$ denotes both the dielectric constant $\electric{\epsilon}$ (8.2.1) and the Feynman $i\epsilon$ in every propagator. Rename one, for example $\varepsilon_{\mathrm r}$ for the dielectric constant, and fix "the effective electric charges increases" after (8.2.36).
- [Graph] Plot the one-loop vacuum-polarization correction $\Delta\Pi(Q^2)=\frac{2\alpha}{\pi}\int_0^1z(1-z)\ln[1+Q^2z(1-z)/m^2]\,dz$ against $\log_{10}(Q/m)$ from $-2$ to $4$. Overlay the Uehling limit $\alpha Q^2/(15\pi m^2)$ and the asymptote $\frac{\alpha}{3\pi}\ln(Q^2/m^2)-\frac{5\alpha}{9\pi}$ so the crossover between the limits of (8.2.32) is visible.
- [Manim] Animate the opening dielectric analogy for the vacuum: virtual $e^+e^-$ dipoles align around a test charge while a Gaussian sphere shrinks, and a counter shows the enclosed charge rising toward the bare value as the sphere passes inside the polarization cloud.

### N3211

Note: [[8.3 The Running Coupling Constant in QCD|8.3 The Running Coupling Constant in QCD]]  
Priority: medium · Graph: yes · Manim: yes

The derivation is correct and checks out numerically ((8.3.16) transversality, (8.3.27) → (8.3.28)), but the gauge-dependent bookkeeping is hard to follow, and quoted values date from 2012.

- [Correctness] Symbol clash for $\alpha$: it is the gauge function $\alpha(x)$ in (3.5.14)/(8.3.6), quark color indices $\alpha,\beta,\gamma$ in (8.3.9) and (8.3.19)–(8.3.22), and part of $\alpha_s$. Also, the ghost is called a color octet, yet (8.3.14) gives it triplet-style indices $\alpha,\beta$; use adjoint indices $a,b$ there.
- [Intuition] After (8.3.27), add a small table of the Landau-gauge ($\xi=0$) contributions to the coefficient of $\frac{g^2}{16\pi^2}\ln(-q^2/\mu^2)$: quark loops $+2n_f/3$, gluon plus ghost loops $-13N/6$, two vertices $-2\cdot3N/4$, sum $(2n_f-11N)/3$. This makes clear where the $33-2n_f$ comes from.
- [Simplify] "Feynman (or Lorenz) gauge for $\xi=1$" is misleading: imposing the Lorenz condition (8.3.1) strictly corresponds to Landau gauge $\xi\to0$, and $\xi=1$ is usually called Feynman–'t Hooft gauge. Reword.
- [Example] Add a worked number. Inserting $\Lambda^{(5)}_{\overline{\mathrm{MS}}}=213\,\mathrm{MeV}$ into the one-loop (8.3.30) at $Q=M_Z$ gives $\alpha_s\approx0.135$, not the quoted $0.118$, because $\Lambda_{\overline{\mathrm{MS}}}$ is defined through the higher-loop formula. Say so explicitly so readers do not think (8.3.30) and (8.3.31) contradict each other.
- [Graph] Plot $1/\alpha_s(Q)$ and $\alpha_s(Q)$ against $\log_{10}(Q/\mathrm{GeV})$ from $0$ to $4$ using one-loop (8.3.29), anchored at $\alpha_s(M_Z)=0.118$, with $n_f$ switching at $m_c=1.27$, $m_b=4.18$, $m_t=173\,\mathrm{GeV}$ and $\alpha_s$ continuous at each threshold. This shows the slope changes the text mentions, including the one at top threshold.
- [Manim] Animate figure 8.21: a blue quark repeatedly emits a virtual $B\bar G$ gluon and turns green, so its color charge spreads into a cloud. A probe of shrinking wavelength then sees less net color, which is antiscreening.

### N3212

Note: [[8.4 Perturbative QCD -  A First Example|8.4 Perturbative QCD -  A First Example]]  
Priority: medium · Graph: yes · Manim: no

A clear first example whose formulas check out ((8.4.10)–(8.4.12)), with one wrong physics phrase about the propagator and a few table and notation slips.

- [Correctness] After (8.4.3): "which vanishes in the soft-gluon limit … also vanishes if $k\cdot q_i=0$" is backwards. The denominator $k^2+2q_i\cdot k$ vanishes, so the propagator diverges; that divergence is the soft and collinear singularity.
- [Correctness] The physical-quantities table lists $p_1,p_2$, which the note never uses. $\theta$ is used both for the step function in (8.4.1) and for the angles $\theta_{1g},\theta_{2g}$ in (8.4.12). Also fix "three-jet cross differential cross section".
- [Simplify] (8.4.2): explain that the schematic $|A\otimes C|$ means the interference term $2\,\mathrm{Re}(A^*C)$, which is $O(\alpha_s)$ even though $C$ is a one-loop amplitude. Otherwise the order counting under the braces is opaque.
- [Graph] Draw the Dalitz triangle $0\le x_1,x_2\le1$, $x_1+x_2\ge1$, colored or contoured by $(x_1^2+x_2^2)/[(1-x_1)(1-x_2)]$ from (8.4.11). Add the jet-resolution cuts $1-x_1>y_{\mathrm{cut}}$, $1-x_2>y_{\mathrm{cut}}$, $1-x_g>y_{\mathrm{cut}}$ for $y_{\mathrm{cut}}=0.1$, so the collinear edges and the soft corner of (8.4.12) are visible.
- [Graph] Plot $R(\sqrt s)$ from 2 to $40\,\mathrm{GeV}$ as the quark-parton-model steps $3\sum e_q^2=2,\ 10/3,\ 11/3$ (dashed) and multiplied by $1+\alpha_s(s)/\pi$ with one-loop $\alpha_s$ (solid), mirroring figure 8.25 without the $Z$ pole.
- [Intuition] After the KLN sentence, add two lines explaining why summing over degenerate final states (a quark plus a collinear or soft gluon is indistinguishable from a quark) makes the real and virtual singularities cancel.

### N3213

Note: [[8.5 QCD Corrections to Deeply Inelastic Scattering|8.5 QCD Corrections to Deeply Inelastic Scattering]]  
Priority: high · Graph: yes · Manim: yes

An excellent intuitive structure (the QED prototype, then splitting functions and moments), but it contains several verifiable formula errors, and the long moment algebra would benefit from plots.

- [Correctness] (8.5.49): the third term must be $1/[(n+1)(n+2)]$, not $1/[n(n+1)(n+2)]$, since $\int_0^1z^{n-1}z(1-z)\,dz=1/[(n+1)(n+2)]$. Check: only the corrected form gives $A_2(g\leftarrow g)=-n_f/3$, as required by (8.5.27) and used in (8.5.70); the printed form gives $-1/4-n_f/3$.
- [Correctness] (8.5.75): the momentum fraction per quark or antiquark species is $\Sigma_2^\infty/(2n_f)=\frac{9/17}{12}=\frac{3}{68}$, not $\tfrac12\Sigma_2^\infty$ (which would be $9/34$). The numerical value $3/68$ and the check (8.5.77) are correct.
- [Correctness] (8.5.50)/(8.5.51): with (7.4.86)–(7.4.87), where $u(x)$ is a number density, the cross-section difference gives $x\mathcal F_3=x[u-\bar u+d-\bar d]$, so the first line is missing a factor $x$. The nonsinglet moment should then be $\Delta_n=\int_0^1dx\,x^{n-1}\mathcal F_3=\int_0^1dx\,x^{n-1}(q-\bar q)$, so that $\Delta_1$ counts valence quarks, consistent with $A_1=0$ expressing fermion-number conservation.
- [Correctness] Several typos: (8.5.53) the denominator should be $\ln(\Delta_k(\tau)/\Delta_k(0))$, not $\Delta_n(0)$; in (8.5.67) $F_2(x,Q^2)$ inside $\int_x^1du/u^3$ must be $F_2(u,Q^2)$; (8.5.10)–(8.5.11) write $(x,t)$ for $(x,\tau)$; "the beam prepared in (8.27)" should say figure 8.27. Also $y$ is both the parent momentum fraction in (8.5.5) and the inelasticity in (8.5.62), and the table lists it twice; rename one.
- [Graph] Plot the nonsinglet moment ratios $\Delta_n(Q^2)/\Delta_n(Q_0^2)$ from (8.5.59) for $n=2,\dots,6$ with $n_f=4$, $\Lambda=0.2\,\mathrm{GeV}$, $Q_0^2=4\,\mathrm{GeV}^2$, and $Q^2$ from 4 to $10^4\,\mathrm{GeV}^2$ (log axis). Add a second panel with the $n=2$ singlet and gluon momentum fractions approaching $9/17$ and $8/17$, which shows how slow the approach to the asymptotic limit is.
- [Manim] Animate the Gedankenexperiment of figures 8.27–8.30: as the resolution $\tau$ grows, the electron's $\delta(z-1)$ spike leaks into a continuum through $e\to e\gamma$ and then $\gamma\to e^+e^-$, with the histograms $e(x,\tau)$ and $\gamma(x,\tau)$ updating live. Motion makes the "PDFs depend on resolution" idea concrete.

### N3214

Note: [[8.6 Jets in Hadron-Hadron Collisions|8.6 Jets in Hadron-Hadron Collisions]]  
Priority: low · Graph: yes · Manim: no

A short qualitative section that is clear overall; the one central formula has a dimension mismatch in its table entry and the text and caption disagree about figure 8.37.

- [Correctness] Physical-quantities table: with dimensionless number densities $f_i$ and the left side of (8.6.3) in $\mathrm{GeV}^{-3}$, the prefactor $2\pi p_\perp/s$ (in $\mathrm{GeV}^{-1}$) requires $\hat\sigma_{ij}$ in $\mathrm{GeV}^{-2}$, not $\mathrm{GeV}^{-4}$. Correct the unit, or state that $\hat\sigma_{ij}$ is the Owens–Reya–Glück scaled form $\hat s\,d\hat\sigma/(\pi\,d\hat t)$.
- [Correctness] The text calls figure 8.37 "the doubly differential dijet cross section", but the caption (and the figure) show the inclusive jet cross section against $p_\perp$ in rapidity bins. Make them consistent.
- [Simplify] Make (8.6.3) self-contained: give $x_{a,b}=\frac{p_\perp}{\sqrt s}(e^{\pm y_1}+e^{\pm y_2})$ and $\hat s=x_ax_bs$, define $y_{\mathrm{boost}}=\tfrac12(y_1+y_2)$ (currently used without definition), and explain that $1/(1+\delta_{ij})$ avoids double counting identical partons.
- [Graph] Plot rapidity $y$ and pseudorapidity $\eta=-\ln\tan(\theta/2)$ against polar angle $\theta\in(0.05,\pi/2)$ for $m/p_\perp=0,\ 0.5,\ 1$, which shows when $\eta\approx y$ (problem 8.18).

### N3215

Note: [[8.7 Two-Photon Processes and the Photon-Structure Function|8.7 Two-Photon Processes and the Photon-Structure Function]]  
Priority: medium · Graph: yes · Manim: no

Good physics narrative, and the numbers check out ((8.7.5) prefactor 224/27, ratio ~1 at 1 GeV and ~$10^3$ at 20 GeV, 35/27). The singlet/nonsinglet evolution equations, however, contain an inconsistent charge average and several wrong integrand arguments.

- [Correctness] (8.7.32): each $q_i$ and $\bar q_i$ receives a photon source $\propto e_i^2$, so $d\Sigma/d\tau\supset2\sum_ie_i^2$ and $\Delta^{(i)}$ gets $e_i^2-\frac{1}{n_f}\sum_je_j^2$. For (8.7.31) and (8.7.33) to agree, $\langle e^2\rangle$ must be $\frac{1}{n_f}\sum_ie_i^2$, not $\frac{1}{2n_f}\sum_ie_i^2$. The table's "printed flavor sum" wording hints at this.
- [Correctness] Integrand arguments: in (8.7.31), $\Delta^{(i)}(x,\tau)$ inside $\int_x^1dy/y$ should be $\Delta^{(i)}(y,\tau)$; in (8.7.33), $\gamma(x,\tau)$ and $\Sigma(x,\tau)$ should be $\gamma(y,\tau)$ and $\Sigma(y,\tau)$. "Taking moments of (8.7.30)" should refer to (8.7.31).
- [Correctness] Symbol clash: $y$ is the inelasticity in (8.7.18) and (8.7.20) and the convolution variable in (8.7.22)–(8.7.33); $x$ is also the argument of the flux factor $f(x)$ in (8.7.3). Rename the convolution variable, for example $\xi$.
- [Example] Add the numbers behind (8.7.6). At $E=1\,\mathrm{GeV}$, (8.7.5) gives $\approx34\,\mathrm{nb}$ against $\sigma_{\mu\mu}=4\pi\alpha^2/3s\approx22\,\mathrm{nb}$. At $E=20\,\mathrm{GeV}$ it gives $\approx150\,\mathrm{nb}$ against $0.054\,\mathrm{nb}$, a ratio of a few $\times10^3$.
- [Graph] Plot the parton-model photon structure function $F_2^\gamma/\alpha=\frac{3}{\pi}\sum_q e_q^4\,x[x^2+(1-x)^2]\ln(Q^2/\Lambda^2)$ ($u,d,s,c$, $\Lambda=0.2\,\mathrm{GeV}$) for $Q^2=10$ and $100\,\mathrm{GeV}^2$ over $0<x<1$. It rises toward large $x$ and grows with $\ln Q^2$, which contrasts with the proton. A second small plot could show the flux factor $f(x)$ of (8.7.3).
- [Intuition] Before (8.7.38), explain in words why the photon's scaling violations are positive at all $x$: the pointlike $\gamma\to q\bar q$ source feeds large-$x$ quarks faster than gluon radiation degrades them. This is the inhomogeneous term in (8.7.36).

### N3216

Note: [[8.8 Color Confinement|8.8 Color Confinement]]  
Priority: medium · Graph: yes · Manim: yes

The dia-electric bubble argument is elegant, and its algebra checks out ((8.8.4), (8.8.11)–(8.8.21)); there is one units slip in Gaussian electrostatics and a wrong lattice-temperature formula.

- [Correctness] (8.8.6): in the Gaussian units used throughout ($W=\frac1{8\pi}\int D\cdot E$, $\sigma=(1-\epsilon)D/4\pi\epsilon$), the relation is $\mathbf D=\mathbf E+4\pi\mathbf P$, not $\mathbf D=\mathbf E+\mathbf P$.
- [Correctness] Figure 8.47 caption: the lattice temperature is $T=1/(aN_\tau)$, not $a/N_\tau$; the latter has units of length (the table gives $a$ in $\mathrm{GeV}^{-1}$).
- [Structure] (8.8.23): add a dated-value note. Current lattice and PDG averages ($m_s\approx93.5\,\mathrm{MeV}$, $\tfrac12(m_u+m_d)\approx3.4$–$3.5\,\mathrm{MeV}$ at $2\,\mathrm{GeV}$) agree with the quoted values but have errors of a few percent instead of 10–20%.
- [Graph] Plot $W(R)=\frac{Q^2}{2\epsilon R}+\frac{4\pi}{3}vR^3$ for $Q=v=1$ and $\epsilon=0.5,\ 0.1,\ 0.02$ over $R\in(0.2,3)$. Mark the minima from (8.8.18) so the reader sees the bubble radius and energy growing without bound as $\epsilon\to0$, as (8.8.22) states.
- [Example] Add a plot or worked example of the Coulomb-plus-linear potential $V(r)=-\frac{4}{3}\frac{\alpha_s}{r}+\sigma r$ with $\alpha_s\approx0.3$ and $\sigma\approx0.18\,\mathrm{GeV}^2$ for $r$ from 0.05 to $1.5\,\mathrm{fm}$, connecting the dielectric picture to figure 8.45 and estimating where string breaking (~$1\,\mathrm{fm}$) sets in.
- [Manim] Animate a dipole in a dia-electric medium: as the two charges separate, the bubble elongates into a flux tube of fixed cross-section and the energy readout grows linearly. Show alongside the ordinary dielectric case, where the field spreads out and the energy saturates.

### N3217

Note: [[8.9 QCD-induced Electroweak Symmetry Breaking|8.9 QCD-induced Electroweak Symmetry Breaking]]  
Priority: low · Graph: no · Manim: no

A clear conceptual section whose numbers check out ($\bar M_W\approx28$, $\bar M_Z\approx32\,\mathrm{MeV}$, ratio $\approx2800$); the mass matrix sign conflicts with the stated eigenvectors.

- [Correctness] (8.9.4): with off-diagonal $+gg'$, the massless eigenvector in $(b_3,\mathcal A)$ is $\propto(g',-g)$, i.e. $A\propto g'b_3-g\mathcal A$, which contradicts the stated $A=(g\mathcal A+g'b_3)/\sqrt{g^2+g'^2}$ and $Z=(gb_3-g'\mathcal A)/\sqrt{g^2+g'^2}$. For those eigenvectors (and $Q=T_3+Y/2$), the off-diagonal entries must be $-gg'$.
- [Example] Show the arithmetic for (8.9.6) inline: $\bar M_W=g\tilde f_\pi/2=0.65\times87/2\approx28\,\mathrm{MeV}$, $\bar M_Z=\sqrt{g^2+g'^2}\,\tilde f_\pi/2\approx32\,\mathrm{MeV}$, and $v/\tilde f_\pi\approx2830$.
- [Intuition] Justify "weak isodoublet with $|Y|=1$" in one line: $\bar q_{\mathrm L}q_{\mathrm R}$ carries weak isospin $\tfrac12$ and $Y=Y_{\mathrm R}-Y_{\mathrm L}=\tfrac43-\tfrac13=1$ (or $-\tfrac23-\tfrac13=-1$), exactly the Higgs-doublet quantum numbers.
- [Structure] Fix "interact more strongly through than the normal color triplets". Add a dated-value note for $M_W=80.399\pm0.023\,\mathrm{GeV}$ (current PDG average $\approx80.37\,\mathrm{GeV}$).

### N3218

Note: [[8.B References|8.B References]]  
Priority: low · Graph: no · Manim: no

A reference list; no change needed.

- [Structure] No change needed. Optionally note next to refs. [24] and [25] (PDG 2010/2012, Bethke 2009) that current values are in the latest Review of Particle Physics.

### N3219

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/08 Strong Interactions among Quarks/8.P Problems|8.P Problems]]  
Priority: low · Graph: no · Manim: no

An exercise list, transcribed faithfully except for several factual and transcription errors in the stated results.

- [Correctness] Problem 8.4: right after defining $V(r)=\frac{\alpha_s}{r}\langle\mathbf T^{(1)}\cdot\mathbf T^{(2)}\rangle$, the four potentials are printed as $-\frac43\alpha_s r$, $+\frac16\alpha_s r$, $-\frac23\alpha_s r$, $+\frac13\alpha_s r$. They must be $-\frac43\alpha_s/r$, $+\frac16\alpha_s/r$, $-\frac23\alpha_s/r$, $+\frac13\alpha_s/r$.
- [Correctness] Problem 8.5 table: the single box is the $6$ of $\mathrm{SU}(6)$ with $(3,2)$ and $G^2=35/12$, not dimension "1". Also, the embedded pair images are swapped relative to their content: the $21$ [$(6,3)\oplus(3^*,1)$, $G^2=20/3$] is the symmetric (horizontal) pair, and the $15$ [$G^2=14/3$] is the antisymmetric (vertical) pair, as the filenames vertical-pair and horizontal-pair indicate the opposite.
- [Correctness] Problem 8.22 table: at $90^\circ$, $\hat\sigma(gg\to q\bar q)/\hat\sigma(ud\to ud)=\frac{7/48}{20/9}=\frac{21}{320}\approx0.066$, not $\approx0.66$. All other ratios check (0.1, 22/15, 7/6, 7/15, 11/4, 2187/160).
- [Correctness] Problem 8.10 cites "the Feynman rules for the Faddeev–Popov ghost given in figure 8.10". Figure 8.10 is the dielectric polarization; the ghost vertex is figure 8.17.
- [Correctness] Problem 8.27(c): $\sum_{i=u,d,s}e_i^4=2/9$; the quoted $2/3$ includes the color factor and should read $3\sum_ie_i^4=2/3$. The Han–Nambu citation should be *Phys. Rev.* **139**, B1006 (1965), not "149B, 1006".
- [Correctness] Problem 8.9: for the attractive Coulomb potential $-\alpha/r$, the factor $1+\alpha|\mathbf q|^2/(15\pi m^2)$ yields the contact term $-\frac{4\alpha_{\mathrm R}^2}{15m^2}\delta^3(\mathbf x)$. The printed $\frac{4}{15}\frac{\alpha_{\mathrm R}}{m^2}\delta^3(\mathbf x)$ is missing one power of $\alpha_{\mathrm R}$ and the sign.

### N3220

Note: [[8.R For Further Reading|8.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

An annotated reading list; fine apart from one citation slip.

- [Correctness] HQET list: the second Eichten–Hill paper is *Phys. Lett.* **B243**, 427 (1990), not "*Phys. Rev.* **B243**".

### N3221

Note: [[9.0 Chapter introduction|9.0 Chapter introduction]]  
Priority: low · Graph: no · Manim: no

A clear motivational introduction; the left–right charge formulas check out with the $Q=T_3+Y/2$ convention.

- [Structure] The block quote on "the human scale is not preferred" has no attribution; mark it as the author's (Quigg's) own statement so it does not read as an anonymous citation.
- [Intuition] Next to $Y=2I_{3\mathrm R}+(B-L)$, add a one-line check, for example $u_{\mathrm R}$: $2\cdot\tfrac12+\tfrac13=\tfrac43$ and $e_{\mathrm R}$: $2(-\tfrac12)-1=-2$, so the reader sees how the "curious" hypercharges come out.

### N3222

Note: [[9.1 Why Unify -|9.1 Why Unify -]]  
Priority: low · Graph: no · Manim: no

A concise and correct motivational list (the 25-parameter count and (9.1.3) both check out).

- [Example] Quantify "of the same size": the ratio of (9.1.3) to (9.1.4) is $1/(8x_W^2)\approx2.4$ for $x_W\approx0.23$.
- [Structure] Present the 25-parameter tally as a small table (3 couplings + 6 quark masses + 3 angles + 1 phase + 10 lepton parameters + 2 Higgs-potential parameters) for readability.
- [Links] "the evolution of the strong coupling constant given by (8.3.28)" is better pointed at the resummed form (8.3.29). Add a forward pointer to 9.3 Coupling-Constant Unification, where the $10^{15}\,\mathrm{GeV}$ meeting point is derived.

### N3223

Note: [[9.2 The SU(5) Model|9.2 The SU(5) Model]]  
Priority: medium · Graph: no · Manim: no

The core group theory is correct ($A(5^*)=-1$, $A(10)=1$, $\kappa^2=5/3$, $\sin^2\theta_W=3/8$, branching-rule dimensions), but one coupling factor in the Lagrangian is wrong and the experimental status is outdated.

- [Correctness] (9.2.19), hypercharge term: the coefficient must be $-\frac{g_5}{2}\sqrt{\frac35}\,\mathcal A_\mu\sum\bar f\gamma^\mu Yf$ (i.e. $-\frac{g'}{2}$), not $-\frac{g_5}{2}\frac35$, to agree with (9.2.21) $g'=g_5\sqrt{3/5}$ and (9.2.26).
- [Correctness] Outdated bounds and status: (9.2.28) should be updated to Super-Kamiokande (2020), $\tau/B(p\to e^+\pi^0)>2.4\times10^{34}\,\mathrm{yr}$ and $\tau/B(p\to\mu^+\pi^0)>1.6\times10^{34}\,\mathrm{yr}$. (9.2.29) has been superseded by SNO+ ($\sim10^{30}\,\mathrm{yr}$ for invisible proton decay). "the normal Higgs scalar $H^0$, still with unknown mass" should note $M_H\approx125\,\mathrm{GeV}$ (2012).
- [Simplify] Before (9.2.9), walk through why the $5^*\oplus10$ works: the charge sum over the $5^*$ is $3(\tfrac13)+(-1)+0=0$ and over the $10$ ($u^c,u,d,e^c$) is $3(-\tfrac23)+3(\tfrac23)+3(-\tfrac13)+1=0$. Also explain in one sentence why the $15$ and $45$ fail (color sextets and octets).
- [Example] Expand (9.2.23)–(9.2.27) into explicit steps ($\sum_{5^*}Q^2=3\cdot\frac19+1=\frac43$, $\sum T_3^2=\frac12$) and immediately compare $3/8$ with the measured $\sin^2\theta_W(M_Z)\approx0.231$, motivating the running in 9.3.
- [Intuition] Near figure 9.2, note that each leptoquark vertex has $\Delta B=\Delta L$, so proton decay conserves $B-L$ ($p\to e^+\pi^0$ but not $p\to e^-\pi^+\pi^+$), which is a key SU(5) signature.
- [Structure] After (9.2.40)–(9.2.42), give numbers showing the failure: $m_b(m_b)\approx4.2$ vs $m_\tau\approx1.78\,\mathrm{GeV}$, $m_s/m_\mu\approx0.9$, $m_d/m_e\approx9$ at $2\,\mathrm{GeV}$. This shows why running (section 9.6) helps $m_b/m_\tau$ but not the lighter generations.

### N3224

Note: [[9.3 Coupling-Constant Unification|9.3 Coupling-Constant Unification]]  
Priority: medium · Graph: yes · Manim: no

A careful leading-log derivation whose coefficients (9.3.10), (9.3.13), (9.3.20) and both figures check out numerically, but it has a hypercharge-normalization slip in (9.3.9), a rounding mismatch for the unification scale, and dated inputs.

- [Correctness] In (9.3.9), with the vault convention $Q=I_3+\tfrac12 Y$ of (6.3.6), $\tfrac12[\operatorname{tr}(Y_{\mathrm L}^2)+\operatorname{tr}(Y_{\mathrm R}^2)]=20/3$ per generation, not $5/3$; the traces must be of $(Y/2)^2$, i.e. write $\tfrac12[\operatorname{tr}(Y_{\mathrm L}/2)^2+\operatorname{tr}(Y_{\mathrm R}/2)^2]=\tfrac53 n_g$ so that $4\pi b_Y=-20n_g/9$ follows.
- [Correctness] (9.3.15): solving (9.3.13) with $\alpha^{-1}=128.957$, $\alpha_s^{-1}=8.446$ gives $\mechanical{u}=1.45\times10^{15}\,\mathrm{GeV}$ ($\log_{10}u=15.161$, exactly the endpoint used in Fig. 9.3), not $1.44\times10^{15}$; state 1.45 or note the rounding.
- [Correctness] Inputs are dated: current PDG values are $\alpha_s(M_Z^2)=0.1180\pm0.0009$, $M_Z=91.1876\,\mathrm{GeV}$, and $M_W\approx80.37\,\mathrm{GeV}$ gives $x_W^{(\mathrm{os})}=1-M_W^2/M_Z^2\approx0.2232$ rather than 0.2226 in (9.3.22); add a dated-values callout and recompute $u$ and (9.3.21).
- [Intuition] After (9.3.21), compare also with the $\overline{\mathrm{MS}}$ value $\sin^2\hat\theta_W(M_Z)\approx0.2312$, which is the scheme closer to the leading-log running, and say explicitly that the gap 0.203 vs 0.231 is many standard deviations; this makes the "quantitative failure" concrete.
- [Graph] Extend Fig. 9.3 with dashed SUSY curves from Table 9.2 ($4\pi\tilde b=(9,6,0)-2n_g+(0,-1/2,-3/10)N_H$, $n_g=3$, $N_H=2$, starting at $M_Z$ from measured $\alpha_i^{-1}(M_Z)\approx(59.0,29.6,8.47)$) on the same axes $\log_{10}Q\in[2,17]$, so the near-miss vs near-meeting is visible.
- [Structure] All Gauge Theories notes in this batch except the Contents page carry a committed UTF-8 BOM; run the skill's formatter over the folder to strip it.

### N3225

Note: [[9.4 Nucleon Decay|9.4 Nucleon Decay]]  
Priority: medium · Graph: yes · Manim: no

Clear dimensional estimate (9.4.1) that reproduces about $10^{34}$ years, but the detector and experimental-limit numbers are outdated or misstated and the physical-quantities table reuses $B$.

- [Correctness] "Super-Kamiokande ... has a fiducial volume of $32{,}000\,\mathrm{m^3}$": 32 kt is the inner-detector volume; the standard fiducial volume is 22.5 kt ($22{,}500\,\mathrm{m^3}$) of the 50 kt tank.
- [Correctness] The bound $8.2\times10^{33}$ yr for $p\to e^+\pi^0$ is superseded: Super-K (2020) gives $\tau/B>2.4\times10^{34}$ yr, so (9.4.14) is now more than 100 times below the limit; update the sentence and the "megaton-class detectors" remark (Hyper-Kamiokande and DUNE are under construction).
- [Correctness] The physical-quantities table assigns $B$ to both baryon number and branching fraction; rename the branching fraction (e.g. $\mathcal{B}$) in the table and in the Fig. 9.5 caption.
- [Example] Show the arithmetic of (9.4.1): $(m_\mu/m_p)^5=(0.1126)^5\approx1.8\times10^{-5}$, $(u/M_W)^4\approx10^{52}$, $\tau_\mu=7\times10^{-14}$ yr, giving $1.3\times10^{34}$ yr; then note that a factor 2 in $u$ changes $\tau_p$ by 16.
- [Graph] Log-log plot of $\tau_p$ from (9.4.1) versus $u$ for $10^{14}$ to $10^{17}$ GeV, with a horizontal line at the Super-K limit $2.4\times10^{34}$ yr and markers at the minimal SU(5) value $1.45\times10^{15}$ GeV and a SUSY-like $2\times10^{16}$ GeV.

### N3226

Note: [[9.5 The Baryon Number of the Universe|9.5 The Baryon Number of the Universe]]  
Priority: medium · Graph: yes · Manim: no

A readable account of the Sakharov conditions with a correct (9.5.5) argument, but the unitarity indices are mislabeled, the baryon-to-photon range is dated, and the reason SU(5) baryogenesis fails is not stated.

- [Correctness] With the convention (9.5.9) $S_{ba}=S(a\to b)$, (9.5.10) $(SS^\dagger)_{aa}=\sum_i S_{ai}S^*_{ai}=\sum_i\lvert S(i\to a)\rvert^2$, whereas $\sum_i\lvert S(a\to i)\rvert^2$ is $(S^\dagger S)_{aa}$; relabel the first line (both equal 1, so the conclusion stands).
- [Correctness] (9.5.1) is outdated: Planck CMB plus BBN give $\eta=n_B/n_\gamma=(6.1\pm0.04)\times10^{-10}$; add the current value next to the source range.
- [Intuition] Add one sentence that SU(5) conserves $B-L$ and electroweak sphalerons wash out any $B+L$ asymmetry with $B-L=0$, which is a key reason minimal-GUT baryogenesis fails, and replace "seeds electroweak baryogenesis" by "is converted to a baryon asymmetry by sphalerons" for leptogenesis.
- [Graph] Plot the out-of-equilibrium condition: $\log_{10}$ of the expansion rate $H(T)=1.66\,g_*^{1/2}T^2/M_{\mathrm{Pl}}$ ($g_*\approx100$) and of a decay rate $\Gamma_X\approx\alpha M_X$ ($\alpha=1/40$, $M_X=10^{15}$ GeV) versus $T$ from $10^{12}$ to $10^{19}$ GeV, marking where $\Gamma_X<H$ at $T\sim M_X$.

### N3227

Note: [[9.6 The Problem of Fermion Masses|9.6 The Problem of Fermion Masses]]  
Priority: medium · Graph: yes · Manim: no

Concise and well motivated, but the combined b–τ formula (9.6.5) has a sign error that contradicts the quoted numerical result (9.6.6).

- [Correctness] Subtracting (9.6.4) from (9.6.3) gives $+\frac{3}{20n_f}+\frac{27}{20n_f}=+\frac{3}{2n_f}$, so (9.6.5) must read $+\frac{3}{2n_f}\ln(\alpha_1(\mu^2)/\alpha_u)$, not $-\frac{3}{2n_f}$; only the plus sign reproduces $m_b/m_\tau=e^{(4/7)\ln8-(1/4)\ln(65/40)}=2.91$, while the printed minus gives 3.70.
- [Intuition] State that $m_b=5.16$ GeV should be compared with $m_b(m_b)\approx4.18$ GeV ($\overline{\mathrm{MS}}$) or the pole mass about 4.8 GeV, and that the toy inputs ($1/\alpha_3=5$, $1/\alpha_1=65$) control the factor; "suggestive" then has a concrete meaning.
- [Example] Add the failure case in one line: the same running applied to $m_s=m_\mu$, $m_d=m_e$ at $u$ gives $m_s/m_d=m_\mu/m_e\approx207$, whereas experiment gives about 20 (the Georgi–Jarlskog motivation used in problem 9.18).
- [Graph] Plot $m_b(\mu)/m_\tau(\mu)$ from (9.6.5) (with the corrected sign) versus $\log_{10}\mu$ from $\log_{10}m_b$ to 15, using one-loop $\alpha_3,\alpha_1$ from Table 9.2, showing the ratio rising from 1 at $u$ to about 3 at low scale.
- [Simplify] Fix "two-step spontaneously symmetry breaking" to "two-step spontaneous symmetry breaking".

### N3228

Note: [[9.7 Assessment|9.7 Assessment]]  
Priority: low · Graph: no · Manim: no

A clear summary list; numbers (13 orders between $M_Z$ and $M_X$, four orders to $M_{\mathrm{Pl}}$) are consistent with 9.3.

- [Links] Add links from each bullet to the section that supports it (charge quantization to 9.2, $b/\tau$ to 9.6, coupling non-unification to 9.3, proton decay to 9.4, baryon asymmetry to 9.5).
- [Structure] Add a short dated callout that neutrino masses are now established by oscillations, which sharpens the bullet that SU(5) "does not predict ... neutrino masses" (minimal SU(5) predicts massless neutrinos).

### N3229

Note: [[9.B References|9.B References]]  
Priority: low · Graph: no · Manim: no

Reference list; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3230

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/03 Gauge Theories/09 Unified Theories/9.P Problems|9.P Problems]]  
Priority: low · Graph: no · Manim: no

Faithful problem list; spot checks of 9.2 (hypercharge bits), 9.10 (exponent 11/9) and 9.13 (1/6 + 5/9 and 1/5 + 7/15) all verify.

- [Links] Link the referenced equations and tables to their notes (Table 9.2 and (9.3.13) in 9.3, (9.2.32) and (9.2.9)–(9.2.10) in 9.2, (9.6.2)–(9.6.4) in 9.6).

### N3231

Note: [[9.R For Further Reading|9.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Reading list; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3232

Note: [[Epilogue.0 Epilogue|Epilogue.0 Epilogue]]  
Priority: low · Graph: no · Manim: no

A clear list of open questions, correctly framed as the source edition's view.

- [Structure] Add a short dated callout after the list noting what has since been answered or sharpened: the Higgs boson was found in 2012 ($m_H\approx125$ GeV), and no superpartners or proton decay have been seen; keep the original text unchanged.

### N3233

Note: [[A.1 Four-Vectors and Scalar Product|A.1 Four-Vectors and Scalar Product]]  
Priority: low · Graph: no · Manim: no

Correct and compact conventions page; (A.1.8) and (A.1.9) signs check out.

- [Correctness] The letter $x$ denotes both the four-vector $x^\mu$ and its first spatial component in (A.1.1), and $x^2$ means the invariant (A.1.4) while $x^2$ with an index means a component; note this explicitly or write the spatial components as $x^1,x^2,x^3$ only.
- [Example] Add one worked line, e.g. $p\cdot x=Et-\mathbf p\cdot\mathbf x$ and $e^{-ip\cdot x}$ as a positive-energy plane wave, to show why the metric sign matters.

### N3234

Note: [[A.2 Dirac Matrices|A.2 Dirac Matrices]]  
Priority: low · Graph: no · Manim: no

Accurate reference; (A.2.6), (A.2.7), (A.2.18), (A.2.22) and (A.2.23) were verified numerically in the stated representation.

- [Simplify] "Other useful identities follow at once from the commutation relations" should say anticommutation relations (A.2.1), and (A.2.13) should end with a period, not a comma.

### N3235

Note: [[A.3 Trace Theorems and Tensor Contractions|A.3 Trace Theorems and Tensor Contractions]]  
Priority: low · Graph: no · Manim: no

Correct trace and Levi-Civita identities; (A.3.11a) $=4i\varepsilon_{\mu\nu\rho\sigma}$ with $\varepsilon_{0123}=+1$ checks numerically.

- [Intuition] Add a one-line reminder that the sign of (A.3.11) depends on $\varepsilon_{0123}=+1$ (A.2.19), which differs from many modern texts ($\varepsilon^{0123}=+1$), so readers comparing results know where a sign flip comes from.

### N3236

Note: [[A.4 Dirac Equation and Dirac Spinors|A.4 Dirac Equation and Dirac Spinors]]  
Priority: low · Graph: no · Manim: no

Correct spinor conventions (checked (A.4.15), (A.4.18)–(A.4.20), (A.4.17), (A.4.27)–(A.4.28)), with some symbol reuse.

- [Correctness] Symbol clashes: $\lambda$ is the helicity label and also the Fierz matrix $\lambda_{ij}$ in (A.4.30), and $\mu$ is a helicity label in (A.4.7)–(A.4.9) as well as a Lorentz index; use e.g. $\lambda,\lambda'$ for helicities and $C_{ij}$ for the Fierz coefficients.
- [Correctness] The physical-quantities table lists $\mechanical{s}$ twice (as "spin state" and as polarization four-vector); merge into one row for the polarization four-vector.
- [Simplify] Say that $\tfrac12(1\pm\gamma_5)$ are chirality projectors that coincide with helicity projectors only for $m\to0$, which is what (A.4.20)–(A.4.21) show.

### N3237

Note: [[A.5 Color Algebra|A.5 Color Algebra]]  
Priority: low · Graph: no · Manim: no

Helpful graphical color-algebra summary; (A.5.18) is correct but (A.5.19) has a sign problem.

- [Correctness] (A.5.19): with $[T^b,T^c]=if^{bcd}T^d$ and $f^{abc}f^{dbc}=N\delta^{ad}$, $if^{abc}T^bT^c=\tfrac{i}{2}f^{abc}[T^b,T^c]=-\tfrac{N}{2}T^a$, not $+\tfrac{C_A}{2}T^a$; either correct the sign or state that the vertex factor is taken as $-if^{abc}$ in this diagram.
- [Example] Add a numerical check for $N=3$: $C_F=4/3$, $C_A=3$, $T_R=1/2$, and $C_F-\tfrac12C_A=-1/6$ for (A.5.18).

### N3238

Note: [[A.6 Weyl-van der Waerden Spinors|A.6 Weyl-van der Waerden Spinors]]  
Priority: low · Graph: no · Manim: no

Short pointer section; adequate as a placeholder.

- [Example] Add the chiral-representation decomposition $\psi=(\xi_\alpha,\bar\eta^{\dot\alpha})^{\mathrm T}$ with $P_L\psi=(\xi,0)^{\mathrm T}$ so the claim that Dirac spinors combine two irreducible representations is shown in one line.

### N3239

Note: [[Appendix A.B References|Appendix A.B References]]  
Priority: low · Graph: no · Manim: no

Reference list; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3240

Note: [[Appendix B.B References|Appendix B.B References]]  
Priority: low · Graph: no · Manim: no

Reference list; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3241

Note: [[Appendix B.R For Further Reading|Appendix B.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Reading list; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3242

Note: [[B.1 Phase-Space Formulas -  Decay Rates and Cross Sections|B.1 Phase-Space Formulas -  Decay Rates and Cross Sections]]  
Priority: medium · Graph: no · Manim: no

Compact and mostly correct phase-space summary, but the two-body decay formula (B.1.4) is dimensionally wrong.

- [Correctness] (B.1.4) must read $d\Gamma/d\Omega_{\mathrm{cm}}=\lvert\mathcal M\rvert^2 S_{12}/(64\pi^2 m_\alpha^3)\cdot S$ (equivalently $\lvert\mathcal M\rvert^2\lvert\mathbf p\rvert/(32\pi^2m_\alpha^2)$); with $m_\alpha^2$ the right side has dimension $\mathrm{GeV}^2$ instead of GeV.
- [Correctness] $S$ denotes the statistical weight and $S_{12},S_{34}$ the kinematic factor; rename one (e.g. $\lambda^{1/2}_{12}$ for the kinematic factor) to avoid the clash.
- [Simplify] State that in (B.1.6)–(B.1.8) $S_{12}$ is (B.1.5) with $m_\alpha^2\to s$, so $S_{12}=2\sqrt s\,\lvert\mathbf p_{\mathrm{cm}}\rvert$, and give the massless limit $S_{12}=s$.
- [Example] Add a check: integrating (B.1.4) for a scalar decaying to two massless scalars with $\mathcal M=g$ gives $\Gamma=g^2/(16\pi m_\alpha)$.

### N3243

Note: [[B.2 Feynman Rules -  Generalities|B.2 Feynman Rules -  Generalities]]  
Priority: low · Graph: no · Manim: no

Correct and readable list of generic Feynman rules.

- [Correctness] $\epsilon$ is used for the polarization vector and for the $+i\epsilon$ prescription in the propagators; write the infinitesimal as $i0^+$ or $i\eta$.
- [Simplify] "For the massless case, $k\cdot\epsilon=0$ as well" suggests it fails for massive bosons; $k\cdot\epsilon(k,\lambda)=0$ holds for all three massive polarizations too (e.g. $(M;0,0,0)\cdot(0;0,0,-1)=0$), with the extra gauge freedom only in the massless case.

### N3244

Note: [[B.3 Feynman Integrals|B.3 Feynman Integrals]]  
Priority: medium · Graph: no · Manim: no

Useful toolbox whose combining identities (B.3.6), (B.3.7), (B.3.13)–(B.3.17) check out, but the master integral (B.3.12) has a sign valid only for odd $n-m$.

- [Correctness] Wick rotation gives $\mathcal I_{mn}=(-1)^{n-m+1}B(m,n-m)/[16\pi^2 i(a^2)^{n-m}]$; the printed form without the sign factor is right for $n-m$ odd (e.g. $m=2,n=3$: $-i/(32\pi^2a^2)$) but wrong for $n-m$ even (e.g. $m=2,n=4$ gives $+i/(96\pi^2a^4)$, not $-i/(96\pi^2a^4)$).
- [Correctness] $m$ is both a mass ($m_j$, $m_k$ in (B.3.2)) and the power index in (B.3.12) and (B.3.17), and $\lambda$ here is a Schwinger parameter; rename the index (e.g. $r$) to avoid the clash.
- [Example] Work one case end to end: combine $1/[(k^2-m^2)((k-p)^2-m^2)]$ with (B.3.3), shift $k\to k+zp$, and apply (B.3.12) with $a^2=m^2-z(1-z)p^2$.

### N3245

Note: [[B.4 Regularization Procedures|B.4 Regularization Procedures]]  
Priority: low · Graph: no · Manim: no

Brief but correct; (B.4.1)–(B.4.2) reduce to (B.3.16)–(B.3.17) at $d=4$.

- [Example] Add the standard result $\int d^dk/(2\pi)^d\,(k^2-\Delta)^{-2}=\tfrac{i}{16\pi^2}[2/(4-d)-\gamma_E+\ln4\pi-\ln\Delta]+O(4-d)$ to show how the $(d-4)^{-1}$ pole appears.
- [Structure] The physical-quantities table lists only $k$; add $d$, $\lambda$ and $m$ (or note that they are dimensionless or defined in B.3).

### N3246

Note: [[B.5 Feynman Rules -  Electrodynamics|B.5 Feynman Rules -  Electrodynamics]]  
Priority: low · Graph: no · Manim: no

Correct and consistent vertex factors for spinor and scalar QED.

- [Intuition] Add one sentence that the two-photon seagull $2iq^2g_{\mu\nu}$ is required for gauge invariance of scalar Compton scattering, with a link to section 3.6.

### N3247

Note: [[Appendix C.0 Physical Constants|Appendix C.0 Physical Constants]]  
Priority: low · Graph: no · Manim: no

Internally consistent 2010 constants table (conversions such as $G_F^2(\hbar c)^2=5.297\times10^{-38}\,\mathrm{cm^2/GeV^2}$ check out), clearly labeled as source values.

- [Structure] Add a "current value" column (CODATA 2022/PDG 2024): $\hbar=6.582119569\ldots\times10^{-22}\,\mathrm{MeV\,s}$ and $\hbar c=197.3269804\,\mathrm{MeV\,fm}$ are exact since the 2019 SI, $\alpha^{-1}=137.035999177(21)$, $G_F=1.1663788(6)\times10^{-5}\,\mathrm{GeV^{-2}}$, $G_N=6.67430(15)\times10^{-11}\,\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $M_{\mathrm{Pl}}=1.220890(14)\times10^{19}\,\mathrm{GeV}$.

### N3248

Note: [[Appendix C.R For Further Reading|Appendix C.R For Further Reading]]  
Priority: low · Graph: no · Manim: no

Reading list; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3249

Note: [[Author Index|Author Index]]  
Priority: low · Graph: no · Manim: no

Index transcription; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3250

Note: [[Subject Index|Subject Index]]  
Priority: low · Graph: no · Manim: no

Index transcription covering printed pages 475–482; no change needed beyond the formatting issue.

- [Structure] Strip the committed UTF-8 BOM with the skill's formatter.

### N3251

Note: [[Gauge Theories - Contents|Gauge Theories - Contents]]  
Priority: low · Graph: no · Manim: no

Complete contents hub; all 119 wiki links resolve.

- No change needed.
