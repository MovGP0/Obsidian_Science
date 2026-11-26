---
title: "Note Improvement Tracker – 02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles"
---

> [!TLDR]
> This note tracks the review of the 136 notes in `02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 129 possible errors or notation conflicts. 129 of them are verified (117 fixed, 7 partly, 5 rejected); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N2998|N2998]] 0.1 Elementary Particle Physics: "photons, neutrinos, and gluons are all (apparently) massless" is outdated: neutrino oscillations (Super-Kamiokande 1998, SNO 2001) prove that at least two neutrinos have mass (KATRIN direct bound $m_\nu<0.45\,\unit{eV}/c^2$); add a modern-status callout rather than changing the source text. **Fixed:** Added a "Modern status" callout (oscillations Super-K 1998 and SNO 2001, KATRIN m_nu<0.45 eV/c^2) and a table row for m_nu
- [[#N2998|N2998]] 0.1 Elementary Particle Physics: "Since 1978 ... it has met every experimental test" needs a note that neutrino masses require at least a minimal extension of the original Standard Model; the Higgs boson was found in 2012 ($125.2\,\unit{GeV}/c^2$). **Fixed:** Added a "Modern status" callout after the paragraph (minimal extension for neutrino masses, Higgs found 2012 at about 125.2 GeV/c^2)
- [[#N2999|N2999]] 0.2 How Do You Produce Elementary Particles -: "At present, the heaviest known particle is the $Z^0$" is outdated: the top quark ($172.6\,\unit{GeV}/c^2$, PDG) and the Higgs boson ($125.2\,\unit{GeV}/c^2$) are heavier; add a modern-status callout. **Fixed:** Added "Modern status" callout after the paragraph: top quark (about 172.6 GeV/c^2, 1995) and Higgs (about 125.2 GeV/c^2, 2012) are heavier
- [[#N2999|N2999]] 0.2 How Do You Produce Elementary Particles -: "the particle gains enormously in energy if you collide two high-speed particles head-on" is misleading: what grows is the centre-of-mass (available) energy $\sqrt{s}$, not the particle's energy; reword the note's gloss or add a clarifying footnote. **Fixed:** Same callout explains that the center-of-mass energy sqrt(s) grows (2E for colliding beams versus about sqrt(2Emc^2) for a fixed target); added E, m, sqrt(s) to the quantities table
- [[#N2999|N2999]] 0.2 How Do You Produce Elementary Particles -: Fig. I.2 caption "LEP ... now under construction" is dated (LEP ran 1989 to 2000 up to about $104.5\,\unit{GeV}$ per beam; the LHC now runs in the same tunnel); flag it in a callout. **Fixed:** Same callout states LEP ran 1989 to 2000 up to about 104.5 GeV per beam and the LHC now uses the tunnel (placed after the paragraph so the page-split sentence stays intact)
- [[#N3000|N3000]] 0.3 How Do You Detect Elementary Particles -: "the bubble chamber photograph in Fig. 1.11 ... five neutral particles" refers to the $\Omega^-$ discovery photograph, which is Fig. 1.10 in this vault (note 1.7); Fig. 1.11 there is the meson-nonet diagram. Change it to Fig. 1.10 and link it as \[\[1.7 The Eightfold Way (1961-1964)\]\]. **Fixed:** Changed to Fig. 1.10 with link \[\[1.7 The Eightfold Way (1961-1964)\]\] and an editorial footnote that the source itself says Fig. 1.11 (verified in the source PDF text, where Fig. 1.10 is the Omega photograph)
- [[#N3003|N3003]] 1.1 The Classical Era (1897-1932): "In 1914 Niels Bohr proposed a model for hydrogen" — the Bohr model was published in 1913; add a footnote (the source text may keep 1914). **Fixed:** Kept source text and added an editorial footnote that Bohr published the model in 1913
- [[#N3004|N3004]] 1.10 Intermediate Vector Bosons (1983): Add the current PDG values next to (1.30) and the 1983 measurements: $M_W=80.369\pm0.013\,\unit{GeV}/c^2$ and $M_Z=91.1880\pm0.0020\,\unit{GeV}/c^2$; the 1983 values $81\pm5$ and $95\pm3$ are historical only. **Fixed:** Added a "Modern values" callout with M_W=80.369(13) and M_Z=91.1880(20) GeV/c^2 and marked 1983 values as historical
- [[#N3005|N3005]] 1.11 The Standard Model (1978- - ): Several statements are outdated and need a status callout: top quark discovered 1995 ($172.6\,\unit{GeV}/c^2$), $\nu_\tau$ observed directly 2000 (DONUT), a single Higgs boson found in 2012 ($125.2\,\unit{GeV}/c^2$), gluon evidence now compelling (PETRA three-jet events 1979, LEP), glueballs still not established. **Fixed:** Added a "Modern status" callout at the end of the section (top 1995, DONUT 2000, Higgs 2012, PETRA three-jet 1979 and LEP, glueballs not established)
- [[#N3005|N3005]] 1.11 The Standard Model (1978- - ): The separate conservation of $L_e$, $L_\mu$, $L_\tau$ implied by the lepton table is violated by neutrino oscillations; only the total $L$ is conserved in the Standard Model with massive neutrinos (as far as is known). **Fixed:** Added a "Modern status" callout after the lepton table (only total L conserved as far as known) and a table row for L
- [[#N3005|N3005]] 1.11 The Standard Model (1978- - ): The text cites "(Fig. 1.16)" for the generations mimicking each other, but only Fig. 1.15 is embedded and no fig-1-16 asset exists in `Attachements`; add the missing figure or fix the reference. **Fixed:** Changed reference to Fig. 1.15 with an editorial footnote; source PDF confirms the source text says 1.16 but the generations figure is Fig. 1.15 (source typo)
- [[#N3005|N3005]] 1.11 The Standard Model (1978- - ): The physical-quantities table lists $\mechanical{m}$ (particle mass), which the note text never uses (it appears only in the figure); remove it or use it in the text. **Fixed:** Removed the m row from the physical-quantities table
- [[#N3006|N3006]] 1.2 The Photon (1900-1924): $\energy{E}$ means both the photon energy in (1.1) and the emitted electron's kinetic energy in (1.3), and the table lists $\energy{E}$ twice; write (1.3) as $\energy{K_{\max}}=\mechanical{h}\signal{\nu}-\energy{w}$ (or $\energy{E_e}$) to remove the clash. **Fixed:** Renamed the electron energy in (1.3) to E_e (kept the source's <= relation) and updated the table row
- [[#N3008|N3008]] 1.4 Antiparticles (1930-1956): The text says Anderson discovered the positron "in late 1931", but the Fig. 1.5 caption says 1932; the discovery was in August 1932. Add a footnote so the note is self-consistent. **Fixed:** Added editorial footnote: Anderson discovered the positron in August 1932
- [[#N3008|N3008]] 1.4 Antiparticles (1930-1956): Dirac's equation was published in early 1928 (Proc. R. Soc. A 117), not 1927; footnote the date. **Fixed:** Added editorial footnote: published early 1928 in Proc. R. Soc. A 117
- [[#N3008|N3008]] 1.4 Antiparticles (1930-1956): The neutron charge structure "positive at the center and at the edges, negative in between" is outdated; modern form factors give a positive core and a negative outer region (mean-square charge radius $\langle r^2\rangle_n=-0.1155\,\unit{fm^2}$, PDG). **Fixed:** Added editorial footnote: positive core and negative outer region, <r^2>_n=-0.1155 fm^2 (PDG); added table row
- [[#N3009|N3009]] 1.5 Neutrinos (1930-1962): "as far as we know, its mass is in fact zero" is outdated: oscillations prove nonzero neutrino masses ($\Delta m^2_{21}\approx7.5\times10^{-5}\,\unit{eV^2}$, $|\Delta m^2_{32}|\approx2.5\times10^{-3}\,\unit{eV^2}$; KATRIN $m_\nu<0.45\,\unit{eV}$), and the separate conservation of $L_e$ and $L_\mu$ is violated in oscillations. **Fixed:** Added editorial footnote with oscillation mass splittings, KATRIN bound, and family-number violation; added table rows for Delta m^2 and m_nu
- [[#N3009|N3009]] 1.5 Neutrinos (1930-1962): "established that the neutrino and antineutrino are distinct particles" overstates the Davis result: the null result is also explained by helicity (V−A), and whether neutrinos are Dirac or Majorana is still open (neutrinoless double-beta-decay searches). **Fixed:** Added editorial footnote: helicity (V-A) also explains the null result; Dirac or Majorana nature still open (neutrinoless double-beta decay)
- [[#N3009|N3009]] 1.5 Neutrinos (1930-1962): The 1962 Brookhaven description does not match the experiment (Danby et al.): the beam was mainly $\nu_\mu$ from $\pi^+\to\mu^+\nu_\mu$, the observed reaction was $\nu_\mu+n\to\mu^-+p$ (29 muon events), and the few shower events were consistent with background; footnote the correction. **Fixed:** Added editorial footnote: beam mainly nu_mu from pi+ decay, reaction nu_mu+n->mu-+p (29 muon events), shower events consistent with background
- [[#N3009|N3009]] 1.5 Neutrinos (1930-1962): "The upper number is the atomic weight (the number of neutrons plus protons)" names the mass number $A$, not the atomic weight; footnote the modern term. Also update (1.16): the current limit is $\mathrm{BR}(\mu\to e\gamma)<1.5\times10^{-13}$ (MEG II). **Fixed:** Added editorial footnotes: mass number (no symbol, to avoid clash with nucleus A) and MEG II limit BR<1.5e-13
- [[#N3010|N3010]] 1.6 Strange Particles (1947-1960): The proton-stability footnote cites 1981–85 articles only; add the current bound $\tau/B(p\to e^+\pi^0)>2.4\times10^{34}\,\unit{yr}$ (Super-Kamiokande), which excludes minimal SU(5) GUTs. **Fixed:** Appended editorial note to the footnote: Super-Kamiokande tau/BR(p->e+ pi0)>2.4e34 yr excludes minimal SU(5); added tau table row
- [[#N3010|N3010]] 1.6 Strange Particles (1947-1960): $A$ denotes baryon number in the text, while the Fig. 1.9 caption uses $A$ and $B$ as vertex labels ("decays at $A$"); rename the vertices or note the clash (most texts use $B$ for baryon number, but $B$ is beauty in 1.11). **Partly:** Clash is real but the labels are part of the photograph and cannot be renamed; caption now says "point A (a vertex label, not the baryon number)" and "point B"
- [[#N3011|N3011]] 1.7 The Eightfold Way (1961-1964): In the baryon-decuplet graph the $S=-2$, $Q=0$ point at (1, -0.464) is labelled "Ξ*⁺"; it must be "Ξ*⁰" (the $\Xi^*$ doublet is $\Xi^{*-}$, $\Xi^{*0}$; see the $uss$ row in 1.8). **Fixed:** Changed graph label to Xi*0
- [[#N3011|N3011]] 1.7 The Eightfold Way (1961-1964): In the Fig. 1.11 nonet graph, the $^3P_0$ isoscalar label "S*⁰′" looks garbled (the source has $S^*$ and $\epsilon$); check against PDF page 44. Also add a footnote that the old names ($\kappa$, $\delta$, $\epsilon$, $Q$, $A_1$, $D$, $E$, $g$) correspond to modern $K_0^*$, $a_0(980)$, $f_0$, $K_1$, $a_1(1260)$, $f_1(1285)$, $f_1(1420)$, $\rho_3(1690)$. **Partly:** Removed the spurious prime (label now S*0, matching the source's S* by the pattern of the other nonets; the PDF page image could not be rendered to confirm) and added an editorial footnote mapping kappa, delta, S*, epsilon, Q, A1, D, E, g to modern names
- [[#N3012|N3012]] 1.8 The Quark Model (1964): "none has ever been found" for exotic hadrons is outdated: tetraquark candidates ($X(3872)$ 2003, $Z_c(3900)$ 2013), the doubly charged $T_{c\bar s0}(2900)^{++}$ (LHCb 2022, a meson-like state with $Q=+2$, against "nor can there be a meson with a charge of +2") and pentaquarks $P_c$ (LHCb 2015) have been observed. **Fixed:** Added an update note after the paragraph: X(3872), Z_c(3900), P_c pentaquarks, doubly charged T_cs0(2900)++ (c s̄ u d̄); they are color singlets compatible with QCD.
- [[#N3012|N3012]] 1.8 The Quark Model (1964): "The only colorless combinations you can make are $q\bar q$, $qqq$, and $\bar q\bar q\bar q$" is wrong: $qq\bar q\bar q$ and $qqqq\bar q$ (and glueballs) are also colour singlets; restate the rule as "colour-singlet combinations, the simplest being $q\bar q$ and $qqq$". **Fixed:** Changed "The only" to "The simplest" and added a note on tetraquarks, pentaquarks, and glueballs as further color singlets.
- [[#N3012|N3012]] 1.8 The Quark Model (1964): The nonet table pairs $u\bar u\to\pi^0$ and $d\bar d\to\eta$, which is wrong even with the later caveat; give the physical states $\pi^0=(u\bar u-d\bar d)/\sqrt2$, $\eta\approx(u\bar u+d\bar d-2s\bar s)/\sqrt6$, $\eta'\approx(u\bar u+d\bar d+s\bar s)/\sqrt3$, or write "mixtures" in the meson column. **Fixed:** Kept the source table and added a note that these are placeholders, with π0=(uū−dd̄)/√2, η≈(uū+dd̄−2ss̄)/√6, η'≈(uū+dd̄+ss̄)/√3.
- [[#N3012|N3012]] 1.8 The Quark Model (1964): The confinement paragraph ("crucial theoretical problem for the eighties ... solution may be at hand") and the DIS "not conclusive" remark are dated; add a callout that QCD is established, that lattice QCD shows a linearly rising quark potential, and that free-quark searches set tight limits. **Fixed:** Added an update note: QCD established, lattice QCD linearly rising potential, free fractional-charge searches set tight limits.
- [[#N3013|N3013]] 1.9 The November Revolution and Its Aftermath (1974-1983): Fig. 1.13(b) vector-meson graph: "s̄d̄ (K̄*⁰)" is two antiquarks and not a meson (should be $s\bar d$, $\bar K^{*0}$); "s̄c" at the charm $-1$ vertex has charm $+1$ (should be $s\bar c$); "ud̄ (ρ*)" should be $u\bar d$ ($\rho^+$). **Fixed:** Changed graph labels to sd̄ (K̄*⁰), sc̄, and ud̄ (ρ⁺); label text only, no layout change (not checked in Obsidian reading mode).
- [[#N3013|N3013]] 1.9 The November Revolution and Its Aftermath (1974-1983): Fig. 1.13(d) spin-½ graph: the charm $+2$ vertex "scs" should be $ccs$, the charm $+1$ vertex at (−1.6, 1.1) labelled "ccd" should be $cdd$ ($\Sigma_c^0$), and "uss (Ξ*⁺)" should be $uss$ ($\Xi^0$); Fig. 1.13(e): the charm $+2$ vertex at (−0.75, 1.7) labelled "cdd" should be $ccd$. **Fixed:** Changed (d) scs→ccs, charm +1 ccd→cdd, uss (Ξ*⁺)→uss (Ξ⁰), and (e) charm +2 cdd→ccd; also fixed (d) charm +2 vertex "cuu"→"ccu" (same error type); label text only.
- [[#N3013|N3013]] 1.9 The November Revolution and Its Aftermath (1974-1983): Fig. 1.13(a) is a stray circle with three labels ($d\bar d$, $s\bar s$, $c\bar c$) instead of the pseudoscalar 16-plet; rebuild it as the pseudoscalar analogue of (b) ($D$, $D_s$, $K$, $\pi$, $\eta$, $\eta_c$) or remove it, and add the missing outer labels ($K^{*\pm}$, $n$, $p$, $\Delta^0$, $\Sigma^{*-}$, $\Sigma^{*0}$) so the reader can actually use the diagrams for Problems 1.14–1.15. **Partly:** Confirmed (a) is a placeholder and K*±, n, p, Δ⁰, Σ*⁻, Σ*⁰ labels are missing; not edited because the brief forbids redrawing figures; (a) needs a manual rebuild and the labels need placement checked in reading mode.
- [[#N3014|N3014]] 1.B References and Notes: Note 10: "Phys. Rev. **92**, 8301 (1953)" should read "**92**, 830 (1953)" (Reines and Cowan); the extra digit looks like a merged footnote mark. **Fixed:** Changed the page to 830 (Reines and Cowan 1953).
- [[#N3015|N3015]] 1.P Problems: Symbol clash: $\mechanical{p}$ is used for electron momentum in Problem 1.3 and for the proton mass in the Coleman–Glashow relation (Problem 1.9), and the table lists both; write the masses in 1.9 as $m_p, m_n, m_{\Sigma^\pm}, m_{\Xi^{0,-}}$ or state explicitly that the particle names stand for masses only there. **Rejected:** Problem 1.9 already states that the particle names stand for their masses, and the table lists these masses in a separate row; this is the claim's own alternative remedy.
- [[#N3017|N3017]] 2.2 Quantum Electrodynamics (QED): "each vertex within a diagram introduces a factor of $\alpha=e^2/\hbar c=1/137$": each vertex contributes $\sqrt{\alpha}$ (i.e. $e$) to the amplitude, so a diagram with $n$ vertices scales as $\alpha^{n/2}$ in the amplitude and $\alpha^{n}$ in the rate; also write $\alpha\approx1/137$ rather than "=". **Fixed:** Now each vertex gives √α in the amplitude, α≈1/137, and an n-vertex diagram scales as α^(n/2) in the amplitude and α^n in the rate.
- [[#N3021|N3021]] 2.4.2 Quarks: Eq. (2.6) is outdated: current PDG magnitudes are about $|V_{ud}|=0.974$, $|V_{us}|=0.225$, $|V_{ub}|=0.0037$, $|V_{cd}|=0.225$, $|V_{cs}|=0.973$, $|V_{cb}|=0.042$, $|V_{td}|=0.0086$, $|V_{ts}|=0.041$, $|V_{tb}|=0.999$; the ranges "0. to 0.014" and "0. to 0.024" also suggest $V_{ub}$, $V_{td}$ could vanish, which is now excluded. Add the current values in a callout. **Fixed:** Kept Eq. (2.6) and added an update note with current PDG magnitudes (0.974, 0.225, 0.0037; 0.225, 0.973, 0.042; 0.0086, 0.041, 0.999) and that V_ub and V_td are nonzero.
- [[#N3021|N3021]] 2.4.2 Quarks: "$d+\nu_e\to u+e$" should read $d+\nu_e\to u+e^-$ (charge bookkeeping is the point of the example). **Fixed:** Changed to d+ν_e→u+e^-.
- [[#N3023|N3023]] 2.5 Decays and Conservation Laws: Opening paragraph: "The neutrinos and the photon are stable (having zero mass ...)" is outdated; neutrino oscillations show at least two neutrinos are massive. The lightest neutrino is still stable, and heavier ones could only decay at unobservably slow rates, so rephrase the reason. **Fixed:** Added an update note after the opening paragraph: at least two neutrinos are massive; lightest is stable, heavier ones decay unobservably slowly; photon massless and stable.
- [[#N3024|N3024]] 2.6 Unification Schemes: "the half-life is ... at least $10^{20}$ times the age of the universe" is outdated: Super-Kamiokande gives $\tau/B(p\to e^+\pi^0)>2.4\times10^{34}$ yr, i.e. more than $10^{24}$ times the age of the universe, which rules out minimal non-supersymmetric SU(5). **Fixed:** Added an update note: Super-Kamiokande τ/B(p→e+π0)>2.4e34 yr, more than 10^24 times the age of the universe, excludes minimal SU(5); added τ and B table rows.
- [[#N3024|N3024]] 2.6 Unification Schemes: Fig. 2.5 and the text imply the three couplings meet at one point near $10^{15}$ GeV; LEP precision data show that with Standard Model running they do not meet at a single point (they nearly do with supersymmetric running near $2\times10^{16}$ GeV). Add this caveat; also $M_Z=91.19\,\mathrm{GeV}/c^2$, not 90. **Fixed:** Added an update note below the Fig. 2.5 caption: no single SM meeting point, near-meeting with SUSY at about 2e16 GeV, M_Z=91.19 GeV/c².
- [[#N3029|N3029]] 3.3 Energy and Momentum: "at least two types of massless particles (the photon and the neutrinos) are known to exist" is outdated; neutrinos are massive (oscillations), so the examples of massless particles are the photon and the gluon. **Fixed:** Added an update note after the Planck-formula paragraph: neutrinos are massive; the Standard Model massless particles are the photon and the gluon.
- [[#N3035|N3035]] 4.2 Spin and Orbital Angular Momentum: Table 4.3 shows "—" for elementary spin-0 bosons; the Higgs boson (spin 0, $125\,\mathrm{GeV}/c^2$, discovered 2012) belongs there. Mention also the hypothetical spin-2 graviton. **Fixed:** Entered "Higgs boson" in the cell and added a note (spin 0, about 125 GeV/c², discovered 2012; hypothetical spin-2 graviton); added Higgs mass and c table rows.
- [[#N3036|N3036]] 4.3 Addition of Angular Momenta: Eq. (4.17) sums over $j_1,j_2$, but $j_1,j_2$ are fixed; the sum must run over $m_1,m_2$ with $m_1+m_2=m$: $\lvert j\,m\rangle=\sum_{m_1+m_2=m}C^{j\,j_1\,j_2}_{m\,m_1\,m_2}\lvert j_1m_1\rangle\lvert j_2m_2\rangle$. **Fixed:** Changed the summation index to m_1+m_2=m.
- [[#N3038|N3038]] 4.5 Flavor Symmetries: Table 4.4 is outdated: current PDG values are about $m_u=2.2$, $m_d=4.7$, $m_s=93$ MeV (MS-bar at 2 GeV), $m_c=1.27$ GeV, $m_b=4.18$ GeV, and $m_t=172.6$ GeV (directly measured since the 1995 discovery), not "$>23{,}000$"; replace or annotate the table and the "putative top quark" sentence. **Fixed:** Added an update note after the table warning with PDG values (m_u 2.2, m_d 4.7, m_s 93 MeV MS-bar at 2 GeV; m_c 1.27, m_b 4.18, m_t 172.6 GeV, top found 1995, no hadrons); added a quark-mass table row.
- [[#N3039|N3039]] 4.6 Parity: Wu experiment: electrons from polarised $^{60}$Co are emitted preferentially opposite to the nuclear spin ("southerly"), not "in the direction of the nuclear spin"; fix the text, the Fig. 4.7 caption, and the mirror-image statements and Fig. 4.8 caption (the mirror image then has electrons preferentially along the spin). Griffiths corrected this in the 2nd edition. **Fixed:** Fixed the text ("southerly", opposite to spin), Fig. 4.7 caption, mirror statement (electrons along the spin), and Fig. 4.8 caption; the SVGs in Attachements still draw the electron arrow along the spin and need redrawing.
- [[#N3039|N3039]] 4.6 Parity: "The neutrino is massless ... the helicity of a neutrino is Lorentz-invariant" is outdated; neutrinos have small masses, so strictly it is chirality (not helicity) that the weak interaction selects, and helicity equals chirality only up to corrections of order $m_\nu/E$. Add a callout (the footnote's "if neutrinos have a small but nonzero mass" is now confirmed). **Fixed:** Added an update note: neutrinos are massive, the weak interaction selects chirality, helicity equals chirality up to O(m_ν c²/E); added m_ν and E table rows.
- [[#N3039|N3039]] 4.6 Parity: Table 4.6 uses obsolete 1980s meson names; current PDG names are $b_1, K_{1B}, h_1/h_1'$ for $1^{+-}$; $a_0, K_0^*, f_0$ for $0^{++}$; $a_1, K_{1A}, f_1(1285)/f_1(1420)$ for $1^{++}$; $a_2, K_2^*, f_2/f_2'$ for $2^{++}$. Give modern names (old names in brackets). **Fixed:** Added current PDG names with source names in parentheses (b1, K1B, h1/h1'; a0, K0*, f0/f0'; a1, K1A, f1(1285)/f1(1420); a2, K2*, f2/f2') and a one-line remark below the table.
- [[#N3041|N3041]] 4.8 CP Violation: "has never been observed outside the neutral kaon system" is outdated: CP violation was observed in $B^0$ decays (BaBar/Belle 2001), in charm decays (LHCb 2019) and in baryon decays (LHCb 2025); the CKM phase is now the established Standard Model mechanism (Nobel Prize 2008). Add an update callout and soften "no one has yet found a natural way". **Fixed:** Added an update note: CP violation in B0 (2001), charm (2019), baryons (2025); CKM phase is the established mechanism (Nobel 2008); open question is the baryon asymmetry.
- [[#N3042|N3042]] 4.9 Time Reversal and the TCP Theorem: Eq. (4.76) and "As of 1985, no experiment has shown direct evidence of T violation" are outdated: the current neutron EDM limit is $\lvert d_n\rvert<1.8\times10^{-26}\,e\,\mathrm{cm}$ (PSI, 2020), and CPLEAR (1998, $K^0\leftrightarrow\bar K^0$) and BaBar (2012, entangled $B$ mesons) observed T violation directly; add a dated update callout. **Fixed:** Added an update note: neutron EDM limit 1.8e-26 e·cm (PSI 2020); direct T violation by CPLEAR (1998) and BaBar (2012); added d_n to the dipole-moment table row.
- [[#N3044|N3044]] 4.P Problems: The physical-quantities table assigns $\mechanical{m}$ both to the electron mass (Problem 4.8) and to the projection quantum number in the ladder-operator formula (Problem 4.23); list them as separate rows or write the projection as $m_s$ in 4.23. **Rejected:** The table already lists them in separate rows (electron mass; angular momentum quantum numbers), which is what the claim asks for.
- [[#N3045|N3045]] 5.1 The Schrödinger Equation for a Central Potential: "hadrons made out of heavy quarks ($c,b$, and $t$)" and the later "substantially less than $c,b$, and $t$": the top quark decays ($\tau\approx5\times10^{-25}$ s) before it can form hadrons, so drop $t$ or add a footnote. **Fixed:** Added a footnote at "(c, b, and t)": the top decays (about 5e-25 s) before it forms hadrons, so only c and b form heavy-quark hadrons; added a lifetime table row.
- [[#N3046|N3046]] 5.10 Baryon Masses and Magnetic Moments: Table 5.6, $\Lambda$ row is swapped: with $m_u=363$, $m_s=538$, $A'\hbar^2/m_u^2=200$ MeV, eq. (5.132) gives $1264-150=1114$ MeV (calculated), while the observed mass is 1116 MeV; the row should read Calculated 1114, Observed 1116. **Fixed:** 2(363)+538-150=1114 calculated; row now reads Calculated 1114, Observed 1116
- [[#N3046|N3046]] 5.10 Baryon Masses and Magnetic Moments: Example 5.3: the contribution is written $(2/3\sqrt2)^2\,(\hbar/2)\sum\langle\cdots\rangle$; by eq. (5.117) the prefactor must be $2/\hbar$, otherwise the result $\tfrac29(2\mu_u-\mu_d)$ does not follow (dimensions are off by $\hbar^2$). **Fixed:** changed prefactor to 2/hbar per eq. (5.117); result 2/9(2mu_u-mu_d) now follows
- [[#N3046|N3046]] 5.10 Baryon Masses and Magnetic Moments: After eq. (5.118) the experimental value is quoted as $0.68497945$; the ratio $\mu_n/\mu_p$ is negative, $-0.68497945$. **Fixed:** changed 0.68497945 to -0.68497945
- [[#N3046|N3046]] 5.10 Baryon Masses and Magnetic Moments: The Table 5.5 predictions (2.79, −1.86, …) require $m_u=m_d\approx336$ and $m_s\approx540$ MeV; the Table 4.4 baryon masses the text cites ($363$, $538$) give $\mu_p\approx2.59$, $\mu_n\approx-1.72$; state the masses actually used. **Fixed:** checked 938/336=2.79 vs 938/363=2.59; text now states 336 and 540 MeV/c^2 and notes Table 4.4 baryon masses give 2.59 and -1.72
- [[#N3046|N3046]] 5.10 Baryon Masses and Magnetic Moments: Experimental moments are 1981 values: current PDG gives $\Sigma^+=2.458\pm0.010$, $\Sigma^-=-1.160\pm0.025$, $\Xi^0=-1.250\pm0.014$, $\Xi^-=-0.6507\pm0.0025$, $\Lambda=-0.613$; also footnote "No decuplet moments have been measured" is outdated ($\mu_{\Omega^-}=-2.02\pm0.05\,\mu_N$). **Partly:** table values are correct for the cited 1981 source and kept; added a sentence with current PDG values and amended footnote to say Omega- moment is now measured (-2.02+-0.05)
- [[#N3047|N3047]] 5.2 The Hydrogen Atom: Eq. (5.34) $R=m e^4 c/(4\pi\hbar^3)$ has the wrong dimension; from (5.32) divided by $hc$ it must be $R=m e^4/(4\pi c\hbar^3)$ (Gaussian), which gives $1.097\times10^5\,\mathrm{cm^{-1}}$. **Fixed:** (5.32)/(hc) gives m e^4/(4 pi c hbar^3); moved c to the denominator
- [[#N3049|N3049]] 5.3.1 The Relativistic Correction: Eq. (5.42) prefactor $1/(4n^2)$ is wrong; inserting (5.40), (5.41) and $E_n=-\alpha^2mc^2/2n^2$ into (5.39) gives $\Delta E_{\mathrm{rel}}=-\alpha^4mc^2\frac{1}{4n^4}\left[\frac{2n}{l+1/2}-\frac32\right]$. **Fixed:** E_n^2 carries 1/n^4 (n=1 gives -5/8 alpha^4 mc^2); changed to 1/(4n^4)
- [[#N3050|N3050]] 5.3.2 Spin-Orbit Coupling: Eq. (5.52) prefactor $1/(4n^2)$ must be $1/(4n^4)$: $\Delta E_{\mathrm{fs}}=-\alpha^4mc^2\frac{1}{4n^4}\left[\frac{2n}{j+1/2}-\frac32\right]$ (check: $n=2$, $j=1/2$ gives $-\tfrac{5}{128}\alpha^4mc^2$, the Dirac result). **Fixed:** changed to 1/(4n^4); n=2 j=1/2 gives -5/128 alpha^4 mc^2 (Dirac result)
- [[#N3050|N3050]] 5.3.2 Spin-Orbit Coupling: The torque footnote uses $\magnetic{\mathbf m}$ for the magnetic moment while $\mechanical{m}$ is the electron mass in the same note; use $\boldsymbol\mu$ as in (5.45). **Fixed:** replaced magnetic bold m with boldsymbol mu in footnote and removed it from the quantity table row
- [[#N3052|N3052]] 5.5 Hyperfine Structure: The delta-function footnote uses $\epsilon$ for the radius of the small sphere while $\epsilon$ is the hyperfine gap in (5.65)–(5.66); rename the radius (for example $\delta r$). **Fixed:** renamed the sphere radius in the delta-function footnote to r_0
- [[#N3053|N3053]] 5.6 Positronium: In (5.80) $n$ denotes the number of photons while $\mechanical{n}$ is the principal quantum number in the same section; use $N_\gamma$ for the photon count. **Fixed:** renamed photon count to N_gamma in the text and in eq. (5.80)
- [[#N3054|N3054]] 5.7 Quarkonium: Table 5.2, $F_0=1500$ MeV/fm, $E_2$: solving the radial equation with $\mu=750$ MeV and $\alpha_s=0.2$ gives $E_2\approx1464$ MeV, not 1480 (all other entries reproduce within about 5 MeV); check the source value. **Fixed:** finite-difference solution (mu=750 MeV, alpha_s=0.2) reproduces all other entries and gives E2=1464.4; changed 1480 to 1464
- [[#N3054|N3054]] 5.7 Quarkonium: Outdated claims: the $2^1P_1$ state ($h_c(3525)$) was observed in 2005; top quarks decay ($\Gamma_t\approx1.4$ GeV) before forming toponium or $c\bar t$, $b\bar t$ bound states, so the closing paragraphs on toponium need a dated note. **Fixed:** added parenthetical h_c(3525) observation in 2005 and a dated note that top decays (width about 1.4 GeV) before t-tbar, c-tbar, b-tbar bound states form
- [[#N3055|N3055]] 5.8 Light Quark Mesons: "in exactly the same sense that the $\pi^0$ is a singlet under $SU(2)$" is wrong: $\pi^0$ is the $I_3=0$ member of the isotriplet; the $SU(2)$ singlet is $(u\bar u+d\bar d)/\sqrt2$ of eq. (5.90). **Fixed:** replaced the pi0 with the isosinglet combination (u ubar + d dbar)/sqrt2 of eq. (5.90)
- [[#N3056|N3056]] 5.9 Baryons: Outdated: "it is hard enough to make a baryon with one heavy quark" (doubly charmed $\Xi_{cc}^{++}$ observed by LHCb in 2017), and "$cbt$" baryons cannot form because the top quark decays before hadronizing. **Fixed:** added a dated note after the heavy-baryon sentence
- [[#N3056|N3056]] 5.9 Baryons: Table 5.4 uses 1981 resonance names that differ from current PDG: $N(1688)\to N(1680)$, $N(1470)\to N(1440)$, $\Delta(1690)\to\Delta(1600)$, $\Delta(1890)\to\Delta(1905)$; add a note that the table is historical. **Fixed:** added a note below the source line that names are historical, with N(1680), N(1440), Delta(1600), Delta(1905)
- [[#N3058|N3058]] 5.P Problems: Problem 5.22 hint: from eq. (5.92) the $\eta$ is $\tfrac16u\bar u$, $\tfrac16d\bar d$ and $\tfrac23s\bar s$ (probabilities sum to 1), not $\tfrac13s\bar s$. **Fixed:** from (u ubar + d dbar - 2 s sbar)/sqrt6 the weights are 1/6, 1/6, 2/3; changed 1/3 to 2/3
- [[#N3058|N3058]] 5.P Problems: Problem 5.23(b) "only $B(b\bar u)$ and $\Upsilon(b\bar b)$ have been detected" is outdated ($B^*$, $B_s$, $B_s^*$, $B_c$, $\eta_b$ are observed), and the $F$, $F^*$ mesons are now called $D_s$, $D_s^*$. **Fixed:** added a dated note after the bracket in 5.23(b)
- [[#N3058|N3058]] 5.P Problems: Symbol clashes: the quantity table gives $\mechanical{m}$ as both projection quantum number and mass, and Problem 5.12 uses $\alpha$ for a proportionality constant next to the fine-structure $\alpha$; rename (for example $m_l$ and $k$). **Fixed:** removed projection m (only an index of Y_l^m) from the quantum-number table row; renamed the Problem 5.12 proportionality constant alpha to k
- [[#N3060|N3060]] 6.2 The Golden Rule: In (6.25) the second denominator root reads $\sqrt{m_3^2c^2+\mathbf p_2^2}$; after the substitution it must be $\sqrt{m_3^2c^2+\rho^2}$. **Fixed:** changed bold p_2^2 to rho^2
- [[#N3060|N3060]] 6.2 The Golden Rule: After (6.41): "the same as in equation (6.25), with $m_2\to m_4$ and $m_1\to(E_1+E_2)/c^2$" should read $m_2\to m_3$, $m_3\to m_4$, $m_1\to(E_1+E_2)/c^2$. **Fixed:** changed to m_2 to m_3, m_3 to m_4, and m_1 to (E_1+E_2)/c^2
- [[#N3063|N3063]] 6.5 Scattering: Eq. (6.49) reads $g^2/[(p_4-p_2)-m_C^2c^2]$; the propagator needs the square: $\mathcal M=g^2/[(p_4-p_2)^2-m_C^2c^2]$. **Fixed:** added ^2 to (p_4-p_2)
- [[#N3063|N3063]] 6.5 Scattering: In eqs. (6.53)-(6.54) the unbold $p^2$ means $|\mathbf p|^2$, while elsewhere in the note unbold $p_i$ are four-momenta (for which $p^2=m^2c^2$); write $|\mathbf p|^2$ there to avoid the clash. **Fixed:** wrote abs(bold p)^2 in both equations and in the quantity table
- [[#N3064|N3064]] 6.6 Higher-Order Diagrams: Eq. (6.55): the third denominator factor is $(q_1^2-m_B^2c^2)$; it must be $(q_3^2-m_B^2c^2)$ (the B line in the loop carries $q_3$, as eq. 6.56 then correctly shows). **Fixed:** changed (q_1^2 - m_B^2 c^2) to (q_3^2 - m_B^2 c^2)
- [[#N3068|N3068]] 7.2 Solutions to the Dirac Equation: Eq. (7.43), case (3): "Pick $u_B=(0,1)^T$" must be $u_B=(1,0)^T$; the right-hand side already uses $(\mathbf p\cdot\boldsymbol\sigma)(1,0)^T$, and $u^{(3)}$ in eq. (7.46) has lower components $(1,0)$. **Fixed:** changed pick to u_B=(1,0)^T, consistent with the right side and u^(3)
- [[#N3069|N3069]] 7.3 Bilinear Covariants: Eq. (7.55): the right-hand side reads $|\psi_3|^2+|\psi_2|^2+|\psi_3|^2+|\psi_4|^2$; the first term must be $|\psi_1|^2$. **Fixed:** changed first term to abs(psi_1)^2
- [[#N3070|N3070]] 7.4 The Photon: The spin quantum numbers $s$ and $m_s$ are wrapped in `\mechanical{}` (so $m_s$ reads like a mass); they are dimensionless quantum numbers and should be left uncolored, also in the table. **Rejected:** the vault colors quantum numbers (n, l, m_l, j, s) with mechanical throughout these notes; m_s has a subscript and no clash with a mass in this note
- [[#N3075|N3075]] 7.9 Renormalization: Before (7.177): "$\not p_1 u(p_1)=mc,\ \bar u(p_3)\not p_3=u(p_3)mc$" is wrong (a spinor cannot equal a scalar, and the bar is lost); it must read $\not p_1u(p_1)=mc\,u(p_1)$ and $\bar u(p_3)\not p_3=mc\,\bar u(p_3)$, which then gives $\bar u(p_3)\not q\,u(p_1)=0$. **Fixed:** now pslash_1 u(p_1)=mc u(p_1) and ubar(p_3) pslash_3=mc ubar(p_3)
- [[#N3077|N3077]] 7.P Problems: Problem 7.34 hint: the interference term must have denominator $4(p_1-p_3)^2(p_1-p_4)^2$, because $\mathcal M_2$ in (7.105) carries $1/(p_1-p_4)^2$; the written $(p_2-p_4)^2$ equals $(p_1-p_3)^2$ and would repeat the first propagator instead. **Fixed:** Changed (p2-p4)^2 to (p1-p4)^2 in the hint denominator to match the second propagator of (7.105); removed BOM.
- [[#N3079|N3079]] 8.2 Hadron Production in e⁺e⁻ Scattering: Eq. (8.2): the second trace is written $\operatorname{Tr}[\gamma^\mu(\not p_4-Mc)\gamma^\nu(\not p_3+Mc)]$ with upper indices, so the two traces are not contracted; it must be $\operatorname{Tr}[\gamma_\mu(\not p_4-Mc)\gamma_\nu(\not p_3+Mc)]$ (compare eq. 7.124). **Fixed:** Changed gamma^mu, gamma^nu to gamma_mu, gamma_nu in the second trace.
- [[#N3079|N3079]] 8.2 Hadron Production in e⁺e⁻ Scattering: In the paragraph after eq. (8.11): "an underestimate in the region above $1784\,\mathrm{GeV}$" must be $1784\,\mathrm{MeV}$ (the tau threshold, as stated correctly earlier in the note and in the footnote). **Fixed:** Changed the unit to MeV in the paragraph after (8.11).
- [[#N3079|N3079]] 8.2 Hadron Production in e⁺e⁻ Scattering: Outdated statements presented as current: "By 1987 the Linear Collider at SLAC should be operating" and "evidently its [top] mass exceeds $18\,\mathrm{GeV}/c^2$"; add a callout that SLC/LEP ran from 1989, the top was discovered in 1995 with $m_t\approx172.6\,\mathrm{GeV}/c^2$ (PDG), so the $R=5$ step lies above $2E\approx345\,\mathrm{GeV}$ and was never seen in $e^+e^-\to$ hadrons, and that near $2E\approx91\,\mathrm{GeV}$ $Z^0$ exchange dominates. **Fixed:** Added two Modern status callouts: SLC/LEP from 1989 with Z0 dominance near 2E of 91 GeV; top found 1995 at 172.6 GeV/c^2, R=5 step above 2E of 345 GeV never seen in e+e-.
- [[#N3080|N3080]] 8.3 Elastic Electron-Proton Scattering: Eq. (8.16) reads $q_\mu K^{\mu\nu}=1$; it must be $q_\mu K^{\mu\nu}=0$ (current conservation; Problem 8.4's hint and eq. 8.30 use 0, and eq. 8.17 follows only from 0). **Fixed:** Changed to 0; checked that (8.17) follows from 0.
- [[#N3080|N3080]] 8.3 Elastic Electron-Proton Scattering: Footnote ep-8-3-regimes cites "The Mott formula (7.127)"; in the vault eq. (7.127) is the amplitude and the Mott formula is eq. (7.128) (as Problem 8.10 correctly cites). **Fixed:** Changed to (7.128), which is the Mott cross section in 7.8.
- [[#N3080|N3080]] 8.3 Elastic Electron-Proton Scattering: Symbol clash: bare $K$ (proton anomalous magnetic moment, factor $1+K$ in the Fig. 8.4 caption and table) shares its letter with the form factors $K_1,K_2,K_4,K_5$ and the tensor $K^{\mu\nu}$; rename it $\kappa_p$ (value 1.7928) here and in 8.B. **Partly:** Renamed K to kappa_p in the Fig. 8.4 caption and table in 8.3; 8.B is not in this batch, so its K (used in K_1=-q^2(F_1+K F_2)^2) still needs the same rename.
- [[#N3081|N3081]] 8.4 Inelastic Electron-Proton Scattering: Symbol clash: $W$ is used for the missing mass in the Fig. 8.5 caption and table ($W=\sqrt{p_{\mathrm{tot}}^2}/c$) and also for the structure functions $W_1,W_2,W_4,W_5$ and the tensor $W^{\mu\nu}$; rename the missing mass (for example $M_X$) or add an explicit warning in the table. **Fixed:** Renamed the missing mass to M_X in the Fig. 8.5 caption and the table (8.B, not in batch, still uses W for it).
- [[#N3082|N3082]] 8.5 The Parton Model and Bjorken Scaling: Eq. (8.40): $W_2^i=-\frac{2m_ic\,Q_i^2}{q^2}\delta(x_i-1)$ is missing a factor $c$; from (8.35) and (8.36) with $M\to m_i$ it is $W_2^i=-\frac{2m_ic^2Q_i^2}{q^2}\delta(x_i-1)$ (needed for units $\mathrm{g^{-1}}$ and for eq. 8.45, which correctly has $c^2$). **Fixed:** Changed c to c^2; checked against (8.35), (8.36) and (8.45).
- [[#N3086|N3086]] 9.1 Feynman Rules for Chromodynamics: Symbol clash: $\signal{c}$ is the quark color vector (9.3, 9.12, 9.13) while $\mechanical{c}$ is the speed of light in the propagator (9.15) and the table; rename the color vector (for example $\signal{\xi}$) or add an explicit warning next to (9.15). **Fixed:** Added an explicit warning sentence after (9.15); did not rename because the color vector c is used across 9.1 to 9.P.
- [[#N3087|N3087]] 9.2 The Quark-Quark Interaction: In the triplet list (9.34) the second state reads "bg-gb)/\sqrt2" with a missing opening parenthesis; it should be $(bg-gb)/\sqrt2$. **Fixed:** Changed bg-gb)/sqrt2 to (bg-gb)/sqrt2.
- [[#N3087|N3087]] 9.2 The Quark-Quark Interaction: In Example 9.4 the first display has a minus sign before the fourth term $[(0\,1\,0)\lambda^\alpha(0\,1\,0)^T][(1\,0\,0)\lambda^\alpha(1\,0\,0)^T]$; expanding $(rb-br)\otimes(rb-br)$ gives $+\lambda^\alpha_{22}\lambda^\alpha_{11}$ (as the next line correctly has), so the sign must be $+$. **Fixed:** Changed the sign of the br-br term to +; the expansion and the next line now agree.
- [[#N3088|N3088]] 9.3 Pair Annihilation in QCD: Symbol clash: $\signal{c}$, $\signal{c_1}$, $\signal{c_2}$ are color vectors while $\mechanical{c}$ is the speed of light in the same equations (9.40)-(9.66); rename the color vectors or warn explicitly. **Fixed:** Added an explicit warning sentence after (9.40); no rename, for consistency with the other chapter-9 notes.
- [[#N3089|N3089]] 9.4 Asymptotic Freedom: Eq. (9.72) "100 MeV < $\Lambda c$ < 500 MeV" is outdated; add current values, e.g. $\alpha_s(M_Z)=0.1180\pm0.0009$ (PDG 2024), $\Lambda^{(5)}_{\overline{MS}}\approx 210$ MeV, $\Lambda^{(3)}\approx 340$ MeV, and note that $\Lambda$ depends on the scheme and the number of active flavors. **Fixed:** Added a Modern status callout: alpha_s(M_Z)=0.1180+-0.0009 (PDG 2024), Lambda^(5) about 210 MeV, Lambda^(3) about 340 MeV in MS-bar, scheme and flavor dependence; added m_q and M_Z to the table.
- [[#N3089|N3089]] 9.4 Asymptotic Freedom: "$f$ is the number of flavors (6, in the Standard Model)" is misleading for (9.69): $f$ must be the number of active flavors with $m_q c\lesssim|q|$ (e.g. $f=5$ between $m_b$ and $m_t$), and $\Lambda$ changes at each threshold. **Fixed:** Reworded f as the number of active flavors with m_q c below sqrt(abs(q^2)), at most 6, f=5 between b and t thresholds.
- [[#N3090|N3090]] 9.5 Applications of QCD: "Why don't we now calculate the neutron-proton mass difference ... or the binding energy of the deuteron?" and "embarrassingly meager" are outdated: lattice QCD+QED has computed the neutron-proton mass difference (Borsanyi et al., Science 347, 1452 (2015)) and the light hadron spectrum to about 1%; add a dated callout with the current status. **Fixed:** Added a dated Modern status callout: lattice light-hadron spectrum to about 1% (Durr 2008), n-p mass difference (Borsanyi 2015), nuclear binding still hard.
- [[#N3091|N3091]] 9.B References and Notes: Ref. 6 lists Politzer's review as "*Phys. Rev.* **14C**, 130 (1974)"; the source PDF (and the actual publication) has *Phys. Rep.* **14C**, so it should read *Phys. Rep.*; also remove the UTF-8 BOM. **Fixed:** Changed the journal to Phys. Rep. and removed the BOM (UTF-8, LF).
- [[#N3092|N3092]] 9.P Problems: Problem 9.5(a) answer "$\frac{7\cdot6}{3\cdot2\cdot1}=56$" is wrong arithmetic (it equals 7); it should be $\binom83=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$. **Fixed:** Changed to 8*7*6/(3*2*1)=56.
- [[#N3092|N3092]] 9.P Problems: Problem 9.2: with $\signal{c'}=U\signal{c}$ and the given $U$, red $(1,0,0)^T$ maps to $(0,0,1)^T$ (green), so this $U$ takes $r\to g$, $b\to r$, $g\to b$, not "$r\to b$, $b\to g$, $g\to r$"; either use $U=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}$ or correct the stated mapping. **Fixed:** With r=(1,0,0), b=(0,1,0), g=(0,0,1), U takes r to g, b to r, g to b; corrected the stated mapping and kept U.
- [[#N3092|N3092]] 9.P Problems: Problems 9.6(b), 9.6(c) and 9.8 write the states as "$(r\bar r-b\bar b)\sqrt2$", "$(r\bar r+b\bar b-2g\bar g)\sqrt6$", "$(rb+br)\sqrt2$"; the normalized states are divided by $\sqrt2$, $\sqrt6$, $\sqrt2$ (cf. (9.4), (9.35)). **Fixed:** Changed to /sqrt2, /sqrt6, /sqrt2.
- [[#N3093|N3093]] 10.1 Charged Leptonic Weak Interactions: Eq. (10.1) quotes $M_W=82\pm2$ and $M_Z=92\pm2\,\mathrm{GeV}/c^2$; give current values ($M_W\approx80.37$, $M_Z\approx91.19\,\mathrm{GeV}/c^2$) in a short note. "By far the heaviest elementary particles yet detected" is no longer true, because the top quark (~173 GeV) and the Higgs boson (~125 GeV) are heavier. **Fixed:** Added a Modern status callout after (10.1): M_W about 80.37, M_Z about 91.19 GeV/c^2; top quark and Higgs boson are heavier.
- [[#N3094|N3094]] 10.2 Decay of the Muon: Eq. (10.39) writes $G$ while the note defines $G_F$ in (10.38) and uses $G_F$ elsewhere; write $G_F^2$ in (10.39) and drop the table's remark that the equation "prints the symbol G". **Fixed:** Changed G^2 to G_F^2 and removed the table remark about the printed symbol G.
- [[#N3094|N3094]] 10.2 Decay of the Muon: "New machines are presently under construction that will run at energies close to $M_Wc^2$" is outdated (LEP2, Tevatron, and LHC have run there). Update it or mark it as historical. $g_w=0.66$ is consistent with the current $M_W$ ($g_w\approx0.653$). **Fixed:** Added a Modern status callout: LEP2, Tevatron, LHC have run there; current M_W gives g_w about 0.65 (checked numerically), close to (10.41).
- [[#N3095|N3095]] 10.3 Decay of the Neutron: The experimental lifetime "$898\pm16$ sec" is outdated (PDG: $878.4\pm0.5$ s), and $c_A=1.26\pm0.02$ is now $g_A\approx1.2754$. The claim that 914 s "is now within the error bars" and the footnote's "within 6%" no longer hold (963 s is ~10% above 878 s; even against 898 s the gap was 7%). Add an updated remark. **Partly:** Modern values right; 914 s was inside 898+-16 for the book data and 963 s is 6.8 to 7.2% above 898 s, so the book text was defensible; added a callout with 878.4+-0.5 s, g_A 1.2754, recomputed 944 s (about 7% high) and noted the omitted Coulomb and radiative corrections.
- [[#N3095|N3095]] 10.3 Decay of the Neutron: The Cabibbo angle $13.1^\circ$ in (10.70) is close to the current $\approx13.0^\circ$ ($|V_{ud}|=0.9737$); state the modern $|V_{ud}|$ in a note, since it enters (10.71) directly. **Fixed:** Included abs(V_ud)=0.97367 in the same callout as the modern value of cos(theta_C).
- [[#N3096|N3096]] 10.4 Decay of the Pion: "If the electron were truly massless, then (like the neutrino) it would only exist as a left-handed particle" is wrong. A massless electron would still have both helicities (the photon couples to both); only the $(1-\gamma^5)$ weak vertex selects the left-handed one. Rephrase so that the "More precisely" sentence is the main statement. **Fixed:** Made the 1-gamma^5 vertex statement the main sentence and added that a massless electron could still be right-handed but the weak vertex cannot produce it.
- [[#N3097|N3097]] 10.5 Charged Weak Interactions of Quarks: Footnote ep-10-5-rotation states "all neutrinos are massless" as the reason why there is no lepton mixing. Neutrino oscillations show nonzero masses and a lepton mixing (PMNS) matrix, so add a modern note. **Fixed:** Appended a modern note to footnote ep-10-5-rotation: neutrinos have nonzero masses and leptons mix through the PMNS matrix.
- [[#N3097|N3097]] 10.5 Charged Weak Interactions of Quarks: The KM magnitudes in (10.91) and "only their magnitudes are known" are outdated. Current values: $|V_{ud}|\approx0.974$, $|V_{us}|\approx0.224$, $|V_{ub}|\approx0.0038$, $|V_{cb}|\approx0.041$, $|V_{td}|\approx0.0086$, $|V_{ts}|\approx0.041$. The CP phase is measured ($\gamma\approx66^\circ$), and footnote ep-10-5-generations ("it remains to be seen whether δ is the source of CP violation") should mention the B-factory confirmation. **Fixed:** Added a note callout after (10.91) with current PDG magnitudes and gamma about 66 degrees; appended B-factory (BaBar/Belle 2001) CP-violation confirmation to footnote ep-10-5-generations.
- [[#N3097|N3097]] 10.5 Charged Weak Interactions of Quarks: Symbol clash: $c_i=\cos\theta_i$ in (10.90) versus the speed of light $c$ used in the same note. Consider writing $\cos\theta_i$, or say that $c_i$ is unrelated to $c$. **Rejected:** The note defines c_i explicitly right after (10.90); the subscript and the uncolored versus mechanical{c} macro keep them distinct.
- [[#N3098|N3098]] 10.6 Neutral Weak Interactions: Table 10.1, electron row: $c_V=-\frac12+2\sin\theta_w$ is missing the square. It must be $-\frac12+2\sin^2\theta_w$, which is consistent with (10.104) and (10.116). **Fixed:** Changed -1/2+2 sin theta_w to -1/2+2 sin^2 theta_w.
- [[#N3098|N3098]] 10.6 Neutral Weak Interactions: Eq. (10.118) is missing a square. On the pole, $\sigma_Z/\sigma_\gamma\cong\frac18(M_Zc^2/\hbar\Gamma_Z)^2$, which gives $\approx166\approx200$ with $\hbar\Gamma_Z=2.5$ GeV as stated in the text; the printed linear form would give only ~4.5. **Fixed:** Verified from (10.116) at 2E=M_Z c^2 that the ratio is (1/8)(M_Z c^2/hbar Gamma_Z)^2 (about 170 for 92/2.5); added the square.
- [[#N3098|N3098]] 10.6 Neutral Weak Interactions: Outdated statements: $M_W=82$ and $M_Z=92\,\mathrm{GeV}/c^2$ (now 80.37 and 91.19); "$m_t>23$ GeV" (now 172.6 GeV); SLC and LEP "presently under construction"; and $\tau_Z$ "not yet accurately measured" ($\hbar\Gamma_Z=2.4952$ GeV, $N_\nu=2.984\pm0.008$). Add brief modern notes. **Fixed:** Added note callouts with M_W 80.37 and M_Z 91.19 GeV, SLC/LEP start in 1989, hbar Gamma_Z 2.4952 GeV and N_nu 2.984; added modern notes for m_t 172.6 GeV in footnote ep-10-6-top and for the measured width next to tau_Z.
- [[#N3098|N3098]] 10.6 Neutral Weak Interactions: The Fig. 10.6 caption says "The neutrino enters from the left", but the reaction is $\bar\nu_\mu+e^-$; write "antineutrino". **Fixed:** Changed "The neutrino enters" to "The antineutrino enters".
- [[#N3100|N3100]] 10.7.1 Chiral Fermion States: The footnote ending "as far as we know right-handed neutrinos do not exist at all" should mention that neutrinos have mass. Their chirality is therefore not exactly helicity, and right-handed (sterile) neutrinos are allowed but unobserved. **Fixed:** Appended a modern note: neutrinos have mass, chirality is not exactly helicity, and right-handed (sterile) neutrinos are allowed but unobserved.
- [[#N3104|N3104]] 10.P Problems: Problem 10.1(a) asks for $\langle|\mathcal M|^2\rangle$ and says that it reduces to (10.11), but the printed answer is the spin sum $\sum|\mathcal M|^2$. At $\epsilon=-1$ it gives $4(g_w/M_Wc)^4(p_1\cdot p_2)(p_3\cdot p_4)$, i.e. (10.10). Either relabel to (10.10) or note the extra factor 1/2. **Fixed:** Confirmed epsilon=-1 gives 4(g_w/M_W c)^4(p1.p2)(p3.p4)=(10.10); added a sentence that this is the spin sum and dividing by 2 gives (10.11).
- [[#N3104|N3104]] 10.P Problems: Problem 10.16 assumes a $T^+(t\bar d)$ meson, but the top quark decays before it hadronizes, so no top mesons exist. Add a note, and likewise note that the "$2m_t<M_Z$" assumptions in 10.20 and 10.21 are counterfactual. **Fixed:** Added modern notes to Problems 10.16, 10.20(b), and 10.21.
- [[#N3107|N3107]] 11.3 Local Gauge Invariance: Footnote ep-11-3-minimal: "$p_\mu\to p_\mu-i(q/c)A_\mu$" has a spurious $i$. With $p_\mu\leftrightarrow i\hbar\partial_\mu$ and (11.38), $i\hbar\mathcal D_\mu=i\hbar\partial_\mu-(q/c)A_\mu$, so the rule is $p_\mu\to p_\mu-(q/c)A_\mu$. **Fixed:** With p_mu = i hbar d_mu and (11.38), i hbar D_mu = i hbar d_mu - (q/c)A_mu; changed to p_mu -> p_mu - (q/c)A_mu.
- [[#N3108|N3108]] 11.4 Yang-Mills Theory: Eq. (11.62), second line: the interaction term must contain the isospin matrices, $-(q\bar\psi\gamma^\mu\boldsymbol\tau\psi)\cdot\mathbf A_\mu$, which follows from $\mathcal D_\mu$ in (11.56) and agrees with (11.67). As written, $(q\bar\psi\gamma^\mu\psi)\cdot\mathbf A_\mu$ is not a valid dot product. **Fixed:** Inserted boldsymbol tau: -(q psibar gamma^mu tau psi).A_mu, consistent with (11.56) and (11.67).
- [[#N3108|N3108]] 11.4 Yang-Mills Theory: Footnote ep-11-4-u2 writes $U(2)=U(1)\otimes SU(2)$. This holds only locally; globally $U(2)\cong[U(1)\times SU(2)]/\mathbb Z_2$, because $-1$ lies in both factors. **Fixed:** Added to footnote ep-11-4-u2 that globally U(2) is [U(1)xSU(2)]/Z_2.
- [[#N3109|N3109]] 11.5 Chromodynamics: Footnote ep-11-5-u3 writes $U(3)=U(1)\otimes SU(3)$; globally this should be $[U(1)\times SU(3)]/\mathbb Z_3$ (the same caveat as in 11.4). **Fixed:** Added to footnote ep-11-5-u3 that globally U(3) is [U(1)xSU(3)]/Z_3.
- [[#N3111|N3111]] 11.7 The Mass Term: In (11.105) the term $e^{-(\alpha\phi)^2}$ is dimensionless, while $\mathcal L$ is an energy density, and identifying $\alpha^2=\frac12(mc/\hbar)^2$ makes $\alpha$ an inverse length, so $\alpha\phi$ is not dimensionless. Insert a constant energy density, $\mathcal L=\ldots+\varepsilon_0e^{-(\alpha\phi)^2}$, which gives $(mc/\hbar)^2=2\varepsilon_0\alpha^2$. The table's "—" unit for $\alpha$ hides the problem. **Fixed:** Confirmed; kept the source equations and added a note callout after (11.107) giving the consistent form with a constant energy density epsilon_0 and (mc/hbar)^2=2 epsilon_0 alpha^2; added epsilon_0 to the table and clarified the alpha row.
- [[#N3112|N3112]] 11.8 Spontaneous Symmetry-Breaking: Eq. (11.120): with $\eta\equiv\phi_1-\mu/\lambda$ from (11.119), the cubic term is $-\mu\lambda(\eta^3+\eta\xi^2)$, not $+\mu\lambda(\ldots)$. Compare (11.131) in \[\[11.9 The Higgs Mechanism\]\], which correctly has $-\lambda\mu(\eta^3+\eta\xi^2)$ for the same definition. The $+$ sign belongs to the opposite shift $\eta=\phi+\mu/\lambda$ used in (11.113). **Fixed:** Expanded U with phi_1=eta+mu/lambda: L contains -mu lambda(eta^3+eta xi^2); changed the sign.
- [[#N3113|N3113]] 11.9 The Higgs Mechanism: Eqs. (11.131) and (11.133): the mixing term $-2i(\mu/\lambda)(q/\hbar c)(\partial_\mu\xi)A^\mu$ cannot appear in a real Lagrangian. Expanding $\frac12|(\partial_\mu+iqA_\mu/\hbar c)(\eta+\mu/\lambda+i\xi)|^2$ gives $+(\mu/\lambda)(q/\hbar c)(\partial_\mu\xi)A^\mu$. **Fixed:** ^2 (other terms in (11.131) agree); changed the term to +(mu/lambda)(q/hbar c)(d_mu xi)A^mu in both (11.131) and (11.133).
- [[#N3113|N3113]] 11.9 The Higgs Mechanism: Outdated statements: "the Higgs particle has never been seen" (discovered at the LHC in 2012, $m_H\approx125$ GeV); the SSC footnote (the project was cancelled in 1993); and the Yukawa footnote "only when the Higgs is found" (its couplings to $t$, $b$, $\tau$, and $\mu$ are now measured). Add a modern note. **Fixed:** Added a modern note callout (2012 LHC discovery, m_H about 125 GeV, SSC cancelled 1993, measured couplings to t, b, tau, mu) after the paragraph; added m_H to the table.
- [[#N3115|N3115]] 11.P Problems: The Problem 11.12 answers use $g$ for the gauge coupling, while the text uses $q$ throughout (11.61, 11.65), and $g$ in the same note is the gravitational acceleration (Problem 11.1). Replace $g$ with $q$ in both answers and in the table row "g, α". **Fixed:** Replaced g with q in both answers (consistent with (11.61) and (11.66)) and changed the table row to q, alpha.
- [[#N3115|N3115]] 11.P Problems: The Problem 11.12(a) answer opens a bracket "[" that is never closed. Close it after $-\mathbf A^\nu\times\partial^\mu\boldsymbol\lambda$. **Fixed:** Added the closing ] after -A^nu x d^mu lambda.
- [[#N3115|N3115]] 11.P Problems: Other symbol clashes in the same note: $\phi$ is the cone azimuth in Problem 11.1 and the scalar field elsewhere, and $L$ (angular momentum, 11.1c) collides with the Lagrangian $L$. Consider $\varphi$ and $\ell_z$ for Problem 11.1. **Rejected:** The note writes the Lagrangian density as script L, never plain L; phi is used in separate problems with distinct macros and separate table rows.
- [[#N3119|N3119]] B.2 Cross Sections: Symbol clash: $\mathbf p_i$ means "momentum of particle $i$" in (B.5) but "incoming momentum magnitude" in (B.7), next to $\mathbf p_f$. Rename to $\mathbf p_{\mathrm{in}},\mathbf p_{\mathrm{out}}$ in (B.7), and add $\mathbf p_3$ (used in B.10–B.13) to the table. **Partly:** The clash is real: renamed to p_in and p_out in (B.7) and its text and added a table row. p_3 is already covered by the generic p_i row, which now names p_1 and p_3 as examples.
- [[#N3122|N3122]] C.2 Dirac Matrices: (C.9) writes $\gamma^0=\begin{pmatrix}1&0\\0&1\end{pmatrix}$, which is the identity. The Dirac representation has $\gamma^0=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, as in \[\[Reference Formulas\]\]. With the identity, (C.15) $\{\gamma^0,\gamma^i\}=0$ and the claim "traceless" both fail. **Fixed:** Changed (C.9) to diag(1,-1), consistent with Reference Formulas.
- [[#N3128|N3128]] Particle Data: Outdated values: $t$ ">23,000" (now about $172{,}600\,\mathrm{MeV}$), $W$ $81{,}800$ (now $80{,}370$), $Z$ $92{,}600$ (now $91{,}188$), $W/Z$ lifetimes "unknown" (now about $3.2\times10^{-25}$ and $2.6\times10^{-25}\,\mathrm s$ from the widths), $\tau$ mass 1784 and lifetime $3.3\times10^{-13}$ (now 1776.9 and $2.90\times10^{-13}$), neutron lifetime 900 s (now about 878 s), and neutrino masses 0 (now known to be nonzero). Keep the historical table and add a callout that gives current PDG values. **Fixed:** Kept the historical tables and added a note callout with current PDG values (t 172600, W 80370 and 3.2e-25 s, Z 91188 and 2.6e-25 s, tau 1776.9 and 2.90e-13 s, neutron 878 s, nonzero neutrino masses).
- [[#N3129|N3129]] Physical Constants and Conversion Factors: $\alpha=e^2/\hbar c$, $r_e=e^2/m_ec^2$, $a=\hbar^2/e^2m_e$ and $E_n=-m_ee^4/2\hbar^2n^2$ are Gaussian formulas, but the table gives $e$ in C and the lengths in m. Either state "Gaussian units, $e$ in esu" or replace $e^2$ by $e^2/4\pi\varepsilon_0$. **Fixed:** Added a note callout that the alpha, r_e, a, E_n formulas use Gaussian units with e in esu and that SI needs e^2/4 pi epsilon_0; added epsilon_0 to the table.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N2996 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/00 Front matter/Preface\|00 Front matter/Preface]] | Analyzed | low | no | no | [[#N2996\|View]] |
| N2997 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/00 Front matter/Title and Publication Details\|00 Front matter/Title and Publication Details]] | Analyzed | low | no | no | [[#N2997\|View]] |
| N2998 | [[0.1 Elementary Particle Physics\|00 Introduction/0.1 Elementary Particle Physics]] | Analyzed | low | no | no | [[#N2998\|View]] |
| N2999 | [[0.2 How Do You Produce Elementary Particles -\|00 Introduction/0.2 How Do You Produce Elementary Particles -]] | Analyzed | medium | yes | no | [[#N2999\|View]] |
| N3000 | [[0.3 How Do You Detect Elementary Particles -\|00 Introduction/0.3 How Do You Detect Elementary Particles -]] | Analyzed | low | no | no | [[#N3000\|View]] |
| N3001 | [[0.4 Units\|00 Introduction/0.4 Units]] | Analyzed | low | no | no | [[#N3001\|View]] |
| N3002 | [[0.B References and Notes\|00 Introduction/0.B References and Notes]] | Analyzed | low | no | no | [[#N3002\|View]] |
| N3003 | [[1.1 The Classical Era (1897-1932)\|01 Historical Introduction to the Elementary Particles/1.1 The Classical Era (1897-1932)]] | Analyzed | medium | yes | yes | [[#N3003\|View]] |
| N3004 | [[1.10 Intermediate Vector Bosons (1983)\|01 Historical Introduction to the Elementary Particles/1.10 Intermediate Vector Bosons (1983)]] | Analyzed | medium | no | no | [[#N3004\|View]] |
| N3005 | [[1.11 The Standard Model (1978- - )\|01 Historical Introduction to the Elementary Particles/1.11 The Standard Model (1978- - )]] | Analyzed | medium | yes | no | [[#N3005\|View]] |
| N3006 | [[1.2 The Photon (1900-1924)\|01 Historical Introduction to the Elementary Particles/1.2 The Photon (1900-1924)]] | Analyzed | medium | yes | no | [[#N3006\|View]] |
| N3007 | [[1.3 Mesons (1934-1947)\|01 Historical Introduction to the Elementary Particles/1.3 Mesons (1934-1947)]] | Analyzed | medium | yes | no | [[#N3007\|View]] |
| N3008 | [[1.4 Antiparticles (1930-1956)\|01 Historical Introduction to the Elementary Particles/1.4 Antiparticles (1930-1956)]] | Analyzed | medium | yes | yes | [[#N3008\|View]] |
| N3009 | [[1.5 Neutrinos (1930-1962)\|01 Historical Introduction to the Elementary Particles/1.5 Neutrinos (1930-1962)]] | Analyzed | high | yes | no | [[#N3009\|View]] |
| N3010 | [[1.6 Strange Particles (1947-1960)\|01 Historical Introduction to the Elementary Particles/1.6 Strange Particles (1947-1960)]] | Analyzed | medium | no | no | [[#N3010\|View]] |
| N3011 | [[1.7 The Eightfold Way (1961-1964)\|01 Historical Introduction to the Elementary Particles/1.7 The Eightfold Way (1961-1964)]] | Analyzed | high | yes | no | [[#N3011\|View]] |
| N3012 | [[1.8 The Quark Model (1964)\|01 Historical Introduction to the Elementary Particles/1.8 The Quark Model (1964)]] | Analyzed | high | no | yes | [[#N3012\|View]] |
| N3013 | [[1.9 The November Revolution and Its Aftermath (1974-1983)\|01 Historical Introduction to the Elementary Particles/1.9 The November Revolution and Its Aftermath (1974-1983)]] | Analyzed | medium | no | no | [[#N3013\|View]] |
| N3014 | [[1.B References and Notes\|01 Historical Introduction to the Elementary Particles/1.B References and Notes]] | Analyzed | low | no | no | [[#N3014\|View]] |
| N3015 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/01 Historical Introduction to the Elementary Particles/1.P Problems\|01 Historical Introduction to the Elementary Particles/1.P Problems]] | Analyzed | low | no | no | [[#N3015\|View]] |
| N3016 | [[2.1 The Four Forces\|02 Elementary Particle Dynamics/2.1 The Four Forces]] | Analyzed | low | no | no | [[#N3016\|View]] |
| N3017 | [[2.2 Quantum Electrodynamics (QED)\|02 Elementary Particle Dynamics/2.2 Quantum Electrodynamics (QED)]] | Analyzed | low | no | no | [[#N3017\|View]] |
| N3018 | [[2.3 Quantum Chromodynamics (QCD)\|02 Elementary Particle Dynamics/2.3 Quantum Chromodynamics (QCD)]] | Analyzed | medium | yes | no | [[#N3018\|View]] |
| N3019 | [[2.4 Weak Interactions\|02 Elementary Particle Dynamics/2.4 Weak Interactions]] | Analyzed | low | no | no | [[#N3019\|View]] |
| N3020 | [[2.4.1 Leptons\|02 Elementary Particle Dynamics/2.4.1 Leptons]] | Analyzed | low | no | no | [[#N3020\|View]] |
| N3021 | [[2.4.2 Quarks\|02 Elementary Particle Dynamics/2.4.2 Quarks]] | Analyzed | medium | no | no | [[#N3021\|View]] |
| N3022 | [[2.4.3 Weak and Electromagnetic Couplings of W and Z\|02 Elementary Particle Dynamics/2.4.3 Weak and Electromagnetic Couplings of W and Z]] | Analyzed | low | no | no | [[#N3022\|View]] |
| N3023 | [[2.5 Decays and Conservation Laws\|02 Elementary Particle Dynamics/2.5 Decays and Conservation Laws]] | Analyzed | medium | yes | no | [[#N3023\|View]] |
| N3024 | [[2.6 Unification Schemes\|02 Elementary Particle Dynamics/2.6 Unification Schemes]] | Analyzed | medium | yes | no | [[#N3024\|View]] |
| N3025 | [[2.B References and Notes\|02 Elementary Particle Dynamics/2.B References and Notes]] | Analyzed | low | no | no | [[#N3025\|View]] |
| N3026 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/02 Elementary Particle Dynamics/2.P Problems\|02 Elementary Particle Dynamics/2.P Problems]] | Analyzed | low | no | no | [[#N3026\|View]] |
| N3027 | [[3.1 Lorentz Transformations\|03 Relativistic Kinematics/3.1 Lorentz Transformations]] | Analyzed | low | yes | yes | [[#N3027\|View]] |
| N3028 | [[3.2 Four-Vectors\|03 Relativistic Kinematics/3.2 Four-Vectors]] | Analyzed | low | no | no | [[#N3028\|View]] |
| N3029 | [[3.3 Energy and Momentum\|03 Relativistic Kinematics/3.3 Energy and Momentum]] | Analyzed | low | yes | no | [[#N3029\|View]] |
| N3030 | [[3.4 Collisions\|03 Relativistic Kinematics/3.4 Collisions]] | Analyzed | low | no | no | [[#N3030\|View]] |
| N3031 | [[3.5 Examples and Applications\|03 Relativistic Kinematics/3.5 Examples and Applications]] | Analyzed | low | yes | no | [[#N3031\|View]] |
| N3032 | [[3.B References and Notes\|03 Relativistic Kinematics/3.B References and Notes]] | Analyzed | low | no | no | [[#N3032\|View]] |
| N3033 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/03 Relativistic Kinematics/3.P Problems\|03 Relativistic Kinematics/3.P Problems]] | Analyzed | low | no | no | [[#N3033\|View]] |
| N3034 | [[4.1 Symmetries, Groups, and Conservation Laws\|04 Symmetries/4.1 Symmetries, Groups, and Conservation Laws]] | Analyzed | low | no | yes | [[#N3034\|View]] |
| N3035 | [[4.2 Spin and Orbital Angular Momentum\|04 Symmetries/4.2 Spin and Orbital Angular Momentum]] | Analyzed | low | no | no | [[#N3035\|View]] |
| N3036 | [[4.3 Addition of Angular Momenta\|04 Symmetries/4.3 Addition of Angular Momenta]] | Analyzed | low | no | no | [[#N3036\|View]] |
| N3037 | [[4.4 Spin 1-2\|04 Symmetries/4.4 Spin 1-2]] | Analyzed | low | no | yes | [[#N3037\|View]] |
| N3038 | [[4.5 Flavor Symmetries\|04 Symmetries/4.5 Flavor Symmetries]] | Analyzed | medium | yes | no | [[#N3038\|View]] |
| N3039 | [[4.6 Parity\|04 Symmetries/4.6 Parity]] | Analyzed | high | no | yes | [[#N3039\|View]] |
| N3040 | [[4.7 Charge Conjugation\|04 Symmetries/4.7 Charge Conjugation]] | Analyzed | low | no | no | [[#N3040\|View]] |
| N3041 | [[4.8 CP Violation\|04 Symmetries/4.8 CP Violation]] | Analyzed | medium | yes | yes | [[#N3041\|View]] |
| N3042 | [[4.9 Time Reversal and the TCP Theorem\|04 Symmetries/4.9 Time Reversal and the TCP Theorem]] | Analyzed | medium | no | no | [[#N3042\|View]] |
| N3043 | [[4.B References and Notes\|04 Symmetries/4.B References and Notes]] | Analyzed | low | no | no | [[#N3043\|View]] |
| N3044 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/04 Symmetries/4.P Problems\|04 Symmetries/4.P Problems]] | Analyzed | low | no | no | [[#N3044\|View]] |
| N3045 | [[5.1 The Schrödinger Equation for a Central Potential\|05 Bound States/5.1 The Schrödinger Equation for a Central Potential]] | Analyzed | medium | yes | no | [[#N3045\|View]] |
| N3046 | [[5.10 Baryon Masses and Magnetic Moments\|05 Bound States/5.10 Baryon Masses and Magnetic Moments]] | Analyzed | high | yes | no | [[#N3046\|View]] |
| N3047 | [[5.2 The Hydrogen Atom\|05 Bound States/5.2 The Hydrogen Atom]] | Analyzed | high | yes | no | [[#N3047\|View]] |
| N3048 | [[5.3 Fine Structure\|05 Bound States/5.3 Fine Structure]] | Analyzed | low | no | no | [[#N3048\|View]] |
| N3049 | [[5.3.1 The Relativistic Correction\|05 Bound States/5.3.1 The Relativistic Correction]] | Analyzed | high | no | no | [[#N3049\|View]] |
| N3050 | [[5.3.2 Spin-Orbit Coupling\|05 Bound States/5.3.2 Spin-Orbit Coupling]] | Analyzed | high | yes | no | [[#N3050\|View]] |
| N3051 | [[5.4 The Lamb Shift\|05 Bound States/5.4 The Lamb Shift]] | Analyzed | medium | yes | no | [[#N3051\|View]] |
| N3052 | [[5.5 Hyperfine Structure\|05 Bound States/5.5 Hyperfine Structure]] | Analyzed | medium | no | no | [[#N3052\|View]] |
| N3053 | [[5.6 Positronium\|05 Bound States/5.6 Positronium]] | Analyzed | medium | yes | no | [[#N3053\|View]] |
| N3054 | [[5.7 Quarkonium\|05 Bound States/5.7 Quarkonium]] | Analyzed | medium | yes | no | [[#N3054\|View]] |
| N3055 | [[5.8 Light Quark Mesons\|05 Bound States/5.8 Light Quark Mesons]] | Analyzed | medium | yes | no | [[#N3055\|View]] |
| N3056 | [[5.9 Baryons\|05 Bound States/5.9 Baryons]] | Analyzed | medium | no | no | [[#N3056\|View]] |
| N3057 | [[5.B References and Notes\|05 Bound States/5.B References and Notes]] | Analyzed | low | no | no | [[#N3057\|View]] |
| N3058 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/05 Bound States/5.P Problems\|05 Bound States/5.P Problems]] | Analyzed | low | no | no | [[#N3058\|View]] |
| N3059 | [[6.1 Lifetimes and Cross Sections\|06 The Feynman Calculus/6.1 Lifetimes and Cross Sections]] | Analyzed | medium | yes | yes | [[#N3059\|View]] |
| N3060 | [[6.2 The Golden Rule\|06 The Feynman Calculus/6.2 The Golden Rule]] | Analyzed | medium | yes | no | [[#N3060\|View]] |
| N3061 | [[6.3 The Feynman Rules for a Toy Theory\|06 The Feynman Calculus/6.3 The Feynman Rules for a Toy Theory]] | Analyzed | low | no | no | [[#N3061\|View]] |
| N3062 | [[6.4 Lifetime of the A\|06 The Feynman Calculus/6.4 Lifetime of the A]] | Analyzed | low | yes | no | [[#N3062\|View]] |
| N3063 | [[6.5 Scattering\|06 The Feynman Calculus/6.5 Scattering]] | Analyzed | medium | yes | no | [[#N3063\|View]] |
| N3064 | [[6.6 Higher-Order Diagrams\|06 The Feynman Calculus/6.6 Higher-Order Diagrams]] | Analyzed | medium | yes | no | [[#N3064\|View]] |
| N3065 | [[6.B References and Notes\|06 The Feynman Calculus/6.B References and Notes]] | Analyzed | low | no | no | [[#N3065\|View]] |
| N3066 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/06 The Feynman Calculus/6.P Problems\|06 The Feynman Calculus/6.P Problems]] | Analyzed | low | no | no | [[#N3066\|View]] |
| N3067 | [[7.1 The Dirac Equation\|07 Quantum Electrodynamics/7.1 The Dirac Equation]] | Analyzed | medium | no | no | [[#N3067\|View]] |
| N3068 | [[7.2 Solutions to the Dirac Equation\|07 Quantum Electrodynamics/7.2 Solutions to the Dirac Equation]] | Analyzed | medium | yes | no | [[#N3068\|View]] |
| N3069 | [[7.3 Bilinear Covariants\|07 Quantum Electrodynamics/7.3 Bilinear Covariants]] | Analyzed | medium | no | no | [[#N3069\|View]] |
| N3070 | [[7.4 The Photon\|07 Quantum Electrodynamics/7.4 The Photon]] | Analyzed | medium | no | yes | [[#N3070\|View]] |
| N3071 | [[7.5 The Feynman Rules for Quantum Electrodynamics\|07 Quantum Electrodynamics/7.5 The Feynman Rules for Quantum Electrodynamics]] | Analyzed | medium | no | no | [[#N3071\|View]] |
| N3072 | [[7.6 Examples\|07 Quantum Electrodynamics/7.6 Examples]] | Analyzed | medium | no | no | [[#N3072\|View]] |
| N3073 | [[7.7 Casimir's Trick and the Trace Theorems\|07 Quantum Electrodynamics/7.7 Casimir's Trick and the Trace Theorems]] | Analyzed | medium | no | no | [[#N3073\|View]] |
| N3074 | [[7.8 Cross Sections and Lifetimes\|07 Quantum Electrodynamics/7.8 Cross Sections and Lifetimes]] | Analyzed | medium | yes | no | [[#N3074\|View]] |
| N3075 | [[7.9 Renormalization\|07 Quantum Electrodynamics/7.9 Renormalization]] | Analyzed | high | yes | no | [[#N3075\|View]] |
| N3076 | [[7.B References and Notes\|07 Quantum Electrodynamics/7.B References and Notes]] | Analyzed | low | no | no | [[#N3076\|View]] |
| N3077 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/07 Quantum Electrodynamics/7.P Problems\|07 Quantum Electrodynamics/7.P Problems]] | Analyzed | low | no | no | [[#N3077\|View]] |
| N3078 | [[8.1 Electron-Quark Interactions\|08 Electrodynamics of Quarks and Hadrons/8.1 Electron-Quark Interactions]] | Analyzed | low | no | no | [[#N3078\|View]] |
| N3079 | [[8.2 Hadron Production in e⁺e⁻ Scattering\|08 Electrodynamics of Quarks and Hadrons/8.2 Hadron Production in e⁺e⁻ Scattering]] | Analyzed | medium | yes | no | [[#N3079\|View]] |
| N3080 | [[8.3 Elastic Electron-Proton Scattering\|08 Electrodynamics of Quarks and Hadrons/8.3 Elastic Electron-Proton Scattering]] | Analyzed | medium | yes | no | [[#N3080\|View]] |
| N3081 | [[8.4 Inelastic Electron-Proton Scattering\|08 Electrodynamics of Quarks and Hadrons/8.4 Inelastic Electron-Proton Scattering]] | Analyzed | medium | yes | no | [[#N3081\|View]] |
| N3082 | [[8.5 The Parton Model and Bjorken Scaling\|08 Electrodynamics of Quarks and Hadrons/8.5 The Parton Model and Bjorken Scaling]] | Analyzed | medium | yes | yes | [[#N3082\|View]] |
| N3083 | [[8.6 Quark Distribution Functions\|08 Electrodynamics of Quarks and Hadrons/8.6 Quark Distribution Functions]] | Analyzed | medium | yes | yes | [[#N3083\|View]] |
| N3084 | [[8.B References and Notes\|08 Electrodynamics of Quarks and Hadrons/8.B References and Notes]] | Analyzed | low | no | no | [[#N3084\|View]] |
| N3085 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/08 Electrodynamics of Quarks and Hadrons/8.P Problems\|08 Electrodynamics of Quarks and Hadrons/8.P Problems]] | Analyzed | low | no | no | [[#N3085\|View]] |
| N3086 | [[9.1 Feynman Rules for Chromodynamics\|09 Quantum Chromodynamics/9.1 Feynman Rules for Chromodynamics]] | Analyzed | medium | no | no | [[#N3086\|View]] |
| N3087 | [[9.2 The Quark-Quark Interaction\|09 Quantum Chromodynamics/9.2 The Quark-Quark Interaction]] | Analyzed | medium | yes | no | [[#N3087\|View]] |
| N3088 | [[9.3 Pair Annihilation in QCD\|09 Quantum Chromodynamics/9.3 Pair Annihilation in QCD]] | Analyzed | medium | no | no | [[#N3088\|View]] |
| N3089 | [[9.4 Asymptotic Freedom\|09 Quantum Chromodynamics/9.4 Asymptotic Freedom]] | Analyzed | medium | yes | no | [[#N3089\|View]] |
| N3090 | [[9.5 Applications of QCD\|09 Quantum Chromodynamics/9.5 Applications of QCD]] | Analyzed | medium | yes | no | [[#N3090\|View]] |
| N3091 | [[9.B References and Notes\|09 Quantum Chromodynamics/9.B References and Notes]] | Analyzed | low | no | no | [[#N3091\|View]] |
| N3092 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/09 Quantum Chromodynamics/9.P Problems\|09 Quantum Chromodynamics/9.P Problems]] | Analyzed | low | no | no | [[#N3092\|View]] |
| N3093 | [[10.1 Charged Leptonic Weak Interactions\|10 Weak Interactions/10.1 Charged Leptonic Weak Interactions]] | Analyzed | medium | yes | no | [[#N3093\|View]] |
| N3094 | [[10.2 Decay of the Muon\|10 Weak Interactions/10.2 Decay of the Muon]] | Analyzed | medium | yes | no | [[#N3094\|View]] |
| N3095 | [[10.3 Decay of the Neutron\|10 Weak Interactions/10.3 Decay of the Neutron]] | Analyzed | medium | yes | no | [[#N3095\|View]] |
| N3096 | [[10.4 Decay of the Pion\|10 Weak Interactions/10.4 Decay of the Pion]] | Analyzed | medium | yes | no | [[#N3096\|View]] |
| N3097 | [[10.5 Charged Weak Interactions of Quarks\|10 Weak Interactions/10.5 Charged Weak Interactions of Quarks]] | Analyzed | medium | no | no | [[#N3097\|View]] |
| N3098 | [[10.6 Neutral Weak Interactions\|10 Weak Interactions/10.6 Neutral Weak Interactions]] | Analyzed | high | yes | no | [[#N3098\|View]] |
| N3099 | [[10.7 Electroweak Unification\|10 Weak Interactions/10.7 Electroweak Unification]] | Analyzed | low | no | no | [[#N3099\|View]] |
| N3100 | [[10.7.1 Chiral Fermion States\|10 Weak Interactions/10.7.1 Chiral Fermion States]] | Analyzed | medium | yes | no | [[#N3100\|View]] |
| N3101 | [[10.7.2 Weak Isospin and Hypercharge\|10 Weak Interactions/10.7.2 Weak Isospin and Hypercharge]] | Analyzed | low | yes | no | [[#N3101\|View]] |
| N3102 | [[10.7.3 Electro-Weak Mixing\|10 Weak Interactions/10.7.3 Electro-Weak Mixing]] | Analyzed | low | yes | no | [[#N3102\|View]] |
| N3103 | [[10.B References and Notes\|10 Weak Interactions/10.B References and Notes]] | Analyzed | low | no | no | [[#N3103\|View]] |
| N3104 | [[10.P Problems\|10 Weak Interactions/10.P Problems]] | Analyzed | low | yes | no | [[#N3104\|View]] |
| N3105 | [[11.1 Lagrangian Formulation of Classical Particle Mechanics\|11 Gauge Theories/11.1 Lagrangian Formulation of Classical Particle Mechanics]] | Analyzed | low | no | no | [[#N3105\|View]] |
| N3106 | [[11.2 Lagrangians in Relativistic Field Theory\|11 Gauge Theories/11.2 Lagrangians in Relativistic Field Theory]] | Analyzed | low | no | no | [[#N3106\|View]] |
| N3107 | [[11.3 Local Gauge Invariance\|11 Gauge Theories/11.3 Local Gauge Invariance]] | Analyzed | medium | no | yes | [[#N3107\|View]] |
| N3108 | [[11.4 Yang-Mills Theory\|11 Gauge Theories/11.4 Yang-Mills Theory]] | Analyzed | medium | no | no | [[#N3108\|View]] |
| N3109 | [[11.5 Chromodynamics\|11 Gauge Theories/11.5 Chromodynamics]] | Analyzed | low | no | no | [[#N3109\|View]] |
| N3110 | [[11.6 Feynman Rules\|11 Gauge Theories/11.6 Feynman Rules]] | Analyzed | low | no | no | [[#N3110\|View]] |
| N3111 | [[11.7 The Mass Term\|11 Gauge Theories/11.7 The Mass Term]] | Analyzed | medium | yes | yes | [[#N3111\|View]] |
| N3112 | [[11.8 Spontaneous Symmetry-Breaking\|11 Gauge Theories/11.8 Spontaneous Symmetry-Breaking]] | Analyzed | medium | no | yes | [[#N3112\|View]] |
| N3113 | [[11.9 The Higgs Mechanism\|11 Gauge Theories/11.9 The Higgs Mechanism]] | Analyzed | high | no | no | [[#N3113\|View]] |
| N3114 | [[11.B References and Notes\|11 Gauge Theories/11.B References and Notes]] | Analyzed | low | no | no | [[#N3114\|View]] |
| N3115 | [[11.P Problems\|11 Gauge Theories/11.P Problems]] | Analyzed | low | no | no | [[#N3115\|View]] |
| N3116 | [[Appendix A.0 The Dirac Delta Function\|91 Appendix A The Dirac Delta Function/Appendix A.0 The Dirac Delta Function]] | Analyzed | low | yes | yes | [[#N3116\|View]] |
| N3117 | [[Appendix B.0 Decay Rates and Cross Sections\|92 Appendix B Decay Rates and Cross Sections/Appendix B.0 Decay Rates and Cross Sections]] | Analyzed | low | no | no | [[#N3117\|View]] |
| N3118 | [[B.1 Decays\|92 Appendix B Decay Rates and Cross Sections/B.1 Decays]] | Analyzed | low | yes | no | [[#N3118\|View]] |
| N3119 | [[B.2 Cross Sections\|92 Appendix B Decay Rates and Cross Sections/B.2 Cross Sections]] | Analyzed | low | yes | no | [[#N3119\|View]] |
| N3120 | [[Appendix C.0 Pauli and Dirac Matrices\|93 Appendix C Pauli and Dirac Matrices/Appendix C.0 Pauli and Dirac Matrices]] | Analyzed | low | no | no | [[#N3120\|View]] |
| N3121 | [[C.1 Pauli Matrices\|93 Appendix C Pauli and Dirac Matrices/C.1 Pauli Matrices]] | Analyzed | low | no | no | [[#N3121\|View]] |
| N3122 | [[C.2 Dirac Matrices\|93 Appendix C Pauli and Dirac Matrices/C.2 Dirac Matrices]] | Analyzed | medium | no | no | [[#N3122\|View]] |
| N3123 | [[Appendix D.0 Feynman Rules\|94 Appendix D Feynman Rules/Appendix D.0 Feynman Rules]] | Analyzed | low | no | no | [[#N3123\|View]] |
| N3124 | [[D.1 External Lines\|94 Appendix D Feynman Rules/D.1 External Lines]] | Analyzed | low | no | no | [[#N3124\|View]] |
| N3125 | [[D.2 Propagators\|94 Appendix D Feynman Rules/D.2 Propagators]] | Analyzed | low | no | no | [[#N3125\|View]] |
| N3126 | [[D.3 Vertex Factors\|94 Appendix D Feynman Rules/D.3 Vertex Factors]] | Analyzed | medium | yes | no | [[#N3126\|View]] |
| N3127 | [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/99 Back matter/Index\|99 Back matter/Index]] | Analyzed | low | no | no | [[#N3127\|View]] |
| N3128 | [[Particle Data\|99 Back matter/Particle Data]] | Analyzed | medium | no | no | [[#N3128\|View]] |
| N3129 | [[Physical Constants and Conversion Factors\|99 Back matter/Physical Constants and Conversion Factors]] | Analyzed | low | no | no | [[#N3129\|View]] |
| N3130 | [[Reference Formulas\|99 Back matter/Reference Formulas]] | Analyzed | low | no | no | [[#N3130\|View]] |
| N3131 | [[Elementary Particles - Contents\|Elementary Particles - Contents]] | Analyzed | low | no | no | [[#N3131\|View]] |

## Suggestions

### N2996

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/00 Front matter/Preface|Preface]]  
Priority: low · Graph: no · Manim: no

Faithful transcription of the 1987 preface; clear and needs no rewrite.

- [Structure] The file starts with a UTF-8 BOM and uses CRLF line endings (committed as i/crlf); the vault rule is UTF-8 without BOM and LF, so re-save it (the same applies to every note in this batch).
- [Intuition] Add a one-line callout that "ten years ago" and "the last decade" refer to roughly 1977 to 1987 (first edition), so readers do not read the dated claims as current.

### N2997

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/00 Front matter/Title and Publication Details|Title and Publication Details]]  
Priority: low · Graph: no · Manim: no

Bibliographic front matter; no content changes needed.

- [Structure] Remove the UTF-8 BOM and convert CRLF to LF; otherwise no change needed.

### N2998

Note: [[0.1 Elementary Particle Physics|0.1 Elementary Particle Physics]]  
Priority: low · Graph: no · Manim: no

Clear, readable overview of why particle physics needs quantum field theory, but some 1987 statements are now outdated.

- [Correctness] "photons, neutrinos, and gluons are all (apparently) massless" is outdated: neutrino oscillations (Super-Kamiokande 1998, SNO 2001) prove that at least two neutrinos have mass (KATRIN direct bound $m_\nu<0.45\,\unit{eV}/c^2$); add a modern-status callout rather than changing the source text.
- [Correctness] "Since 1978 ... it has met every experimental test" needs a note that neutrino masses require at least a minimal extension of the original Standard Model; the Higgs boson was found in 2012 ($125.2\,\unit{GeV}/c^2$).
- [Example] In the paragraph on $\Delta\to p+\pi$, add the numbers: $m_\Delta\approx1232\,\unit{MeV}/c^2$ versus $m_p+m_\pi\approx1078\,\unit{MeV}/c^2$, so about $154\,\unit{MeV}$ of rest energy becomes kinetic energy.
- [Structure] Remove the UTF-8 BOM and convert CRLF to LF.

### N2999

Note: [[0.2 How Do You Produce Elementary Particles -|0.2 How Do You Produce Elementary Particles -]]  
Priority: medium · Graph: yes · Manim: no

Readable but contains dated facility and record claims and a vague statement about collider energy that a worked example would fix.

- [Correctness] "At present, the heaviest known particle is the $Z^0$" is outdated: the top quark ($172.6\,\unit{GeV}/c^2$, PDG) and the Higgs boson ($125.2\,\unit{GeV}/c^2$) are heavier; add a modern-status callout.
- [Correctness] "the particle gains enormously in energy if you collide two high-speed particles head-on" is misleading: what grows is the centre-of-mass (available) energy $\sqrt{s}$, not the particle's energy; reword the note's gloss or add a clarifying footnote.
- [Example] Add the comparison for the SPS: a $450\,\unit{GeV}$ proton on a fixed proton target gives $\sqrt{s}\approx\sqrt{2m_pc^2E}\approx29\,\unit{GeV}$, while $450+450\,\unit{GeV}$ head-on gives $\sqrt{s}=900\,\unit{GeV}$.
- [Graph] Log-log plot of $\sqrt{s}$ (GeV) against beam energy $E$ from 1 to $10^4\,\unit{GeV}$ for proton fixed target, $\sqrt{2m_pc^2E+2m_p^2c^4}$, and a symmetric collider, $2E$.
- [Correctness] Fig. I.2 caption "LEP ... now under construction" is dated (LEP ran 1989 to 2000 up to about $104.5\,\unit{GeV}$ per beam; the LHC now runs in the same tunnel); flag it in a callout.
- [Structure] Remove the UTF-8 BOM and convert CRLF to LF.

### N3000

Note: [[0.3 How Do You Detect Elementary Particles -|0.3 How Do You Detect Elementary Particles -]]  
Priority: low · Graph: no · Manim: no

Short, clear description of track detectors; one figure cross-reference points to the wrong figure.

- [Correctness] "the bubble chamber photograph in Fig. 1.11 ... five neutral particles" refers to the $\Omega^-$ discovery photograph, which is Fig. 1.10 in this vault (note 1.7); Fig. 1.11 there is the meson-nonet diagram. Change it to Fig. 1.10 and link it as \[\[1.7 The Eightfold Way (1961-1964)\]\].
- [Example] After $R=pc/qB$ (Gaussian), add the practical form $p\,[\unit{GeV}/c]=0.3\,B\,[\unit{T}]\,R\,[\unit{m}]$ with a worked case (a $1\,\unit{GeV}/c$ track in $1.5\,\unit{T}$ has $R\approx2.2\,\unit{m}$).
- [Structure] Remove the UTF-8 BOM and convert CRLF to LF.

### N3001

Note: [[0.4 Units|0.4 Units]]  
Priority: low · Graph: no · Manim: no

Clear and correct unit discussion; the charge-unit relation and natural-unit description check out.

- [Example] Add a short conversion box for natural units: $\hbar c=197.327\,\unit{MeV\,fm}$, $\hbar=6.582\times10^{-22}\,\unit{MeV\,s}$, $1\,\unit{eV}=1.602176634\times10^{-19}\,\unit{J}$ (exact), with one worked conversion (for example $1/m_\pi\approx1.41\,\unit{fm}$).
- [Simplify] Write $\alpha\approx1/137.036$ (CODATA) instead of the bare equality "$=1/137$", or mark it as approximate.
- [Structure] Remove the UTF-8 BOM and convert CRLF to LF.

### N3002

Note: [[0.B References and Notes|0.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list from 1987; fine as a transcription.

- [Links] Optionally add a modern-sources callout (PDG Review of Particle Physics, Griffiths 2nd ed. 2008) so readers can update the dated values found in Chapter 1; also remove the BOM and convert CRLF to LF.

### N3003

Note: [[1.1 The Classical Era (1897-1932)|1.1 The Classical Era (1897-1932)]]  
Priority: medium · Graph: yes · Manim: yes

Engaging folk history that is easy to read but gives no numbers or formulas for the two key experiments.

- [Correctness] "In 1914 Niels Bohr proposed a model for hydrogen" — the Bohr model was published in 1913; add a footnote (the source text may keep 1914).
- [Example] Add the Thomson crossed-field result: balance $qE=qvB/c$ gives $v=cE/B$, then deflection by $E$ alone gives $q/m$; quote the modern $e/m_e=5.273\times10^{17}\,\unit{esu/g}$.
- [Graph] Plot the Rutherford angular distribution $\propto1/\sin^4(\theta/2)$ (log scale, $\theta$ from $5^\circ$ to $180^\circ$) next to the Gaussian small-angle falloff expected from a diffuse Thomson atom, to show why rare large-angle events point to a nucleus.
- [Manim] Animate a fan of $\alpha$-particle trajectories with varying impact parameter past a point nucleus (hyperbolic orbits) versus nearly straight paths through a diffuse plum-pudding sphere.
- [Structure] Remove the UTF-8 BOM and convert CRLF to LF.

### N3004

Note: [[1.10 Intermediate Vector Bosons (1983)|1.10 Intermediate Vector Bosons (1983)]]  
Priority: medium · Graph: no · Manim: no

Clear narrative, but the quoted masses are 1983 values with no current comparison, and $c$ is coloured inconsistently with the introduction notes.

- [Correctness] Add the current PDG values next to (1.30) and the 1983 measurements: $M_W=80.369\pm0.013\,\unit{GeV}/c^2$ and $M_Z=91.1880\pm0.0020\,\unit{GeV}/c^2$; the 1983 values $81\pm5$ and $95\pm3$ are historical only.
- [Intuition] Give the weak range explicitly: $\hbar/(M_Wc)\approx197.3\,\unit{MeV\,fm}/80.4\,\unit{GeV}\approx2.5\times10^{-3}\,\unit{fm}$, which shows why Fermi's contact interaction works at low energy (compare with the Yukawa estimate in 1.3).
- [Structure] Here and in 1.2–1.8, $c$ and $h$ are wrapped in `\mechanical{}`, while notes 0.1–0.4 leave them uncoloured; pick one convention for constants across the book.
- [Links] The UA2 collaboration also reported the $W$ in January 1983; a short footnote would keep the history balanced. Remove the BOM and convert CRLF to LF.

### N3005

Note: [[1.11 The Standard Model (1978- - )|1.11 The Standard Model (1978- - )]]  
Priority: medium · Graph: yes · Manim: no

Tables are correct for Griffiths's sign conventions, but the state of knowledge is 1987, and one figure reference has no figure behind it.

- [Correctness] Several statements are outdated and need a status callout: top quark discovered 1995 ($172.6\,\unit{GeV}/c^2$), $\nu_\tau$ observed directly 2000 (DONUT), a single Higgs boson found in 2012 ($125.2\,\unit{GeV}/c^2$), gluon evidence now compelling (PETRA three-jet events 1979, LEP), glueballs still not established.
- [Correctness] The separate conservation of $L_e$, $L_\mu$, $L_\tau$ implied by the lepton table is violated by neutrino oscillations; only the total $L$ is conserved in the Standard Model with massive neutrinos (as far as is known).
- [Correctness] The text cites "(Fig. 1.16)" for the generations mimicking each other, but only Fig. 1.15 is embedded and no fig-1-16 asset exists in `Attachements`; add the missing figure or fix the reference.
- [Correctness] The physical-quantities table lists $\mechanical{m}$ (particle mass), which the note text never uses (it appears only in the figure); remove it or use it in the text.
- [Graph] Log-scale strip plot of the 12 fermion masses by generation (PDG: $e$ 0.511 MeV, $\mu$ 105.7 MeV, $\tau$ 1776.9 MeV, $u\approx2.2$, $d\approx4.7$, $s\approx93$ MeV, $c\approx1.27$, $b\approx4.18$, $t\approx172.6$ GeV) to show the generation pattern behind Fig. 1.15. Also remove the BOM and convert CRLF to LF.

### N3006

Note: [[1.2 The Photon (1900-1924)|1.2 The Photon (1900-1924)]]  
Priority: medium · Graph: yes · Manim: no

Correct and readable; the Compton and photoelectric formulas would benefit from plots and one symbol is reused.

- [Correctness] $\energy{E}$ means both the photon energy in (1.1) and the emitted electron's kinetic energy in (1.3), and the table lists $\energy{E}$ twice; write (1.3) as $\energy{K_{\max}}=\mechanical{h}\signal{\nu}-\energy{w}$ (or $\energy{E_e}$) to remove the clash.
- [Graph] Plot the Compton shift $\Delta\lambda=\lambda_c(1-\cos\theta)$ for an electron ($\lambda_c=2.426\times10^{-10}\,\unit{cm}$) for $\theta$ from 0 to $\pi$, marking the maximum $2\lambda_c$ at backscatter.
- [Graph] Plot $K_{\max}=h\nu-w$ against $\nu$ for two metals (for example $w=2.3\,\unit{eV}$ and $4.5\,\unit{eV}$): parallel lines with slope $h$ and different threshold frequencies, showing that intensity does not appear.
- [Example] Evaluate (1.5) numerically for the electron and note that the shift matters only when $\lambda$ is comparable (X-rays), which explains why Compton needed X-rays. Remove the BOM and convert CRLF to LF.

### N3007

Note: [[1.3 Mesons (1934-1947)|1.3 Mesons (1934-1947)]]  
Priority: medium · Graph: yes · Manim: no

Clear story of the pion-muon confusion, but it skips the Yukawa mass estimate, and the footnote's force law is only approximate.

- [Example] Show Yukawa's estimate: $mc^2\approx\hbar c/a$; with $a\approx1.4\,\unit{fm}$ this gives $\approx140\,\unit{MeV}$, matching $m_{\pi^\pm}=139.57\,\unit{MeV}/c^2$ (PDG).
- [Simplify] The footnote's "$e^{-r/a}/r^2$" is the force only for $r\ll a$; the Yukawa potential is $V\propto e^{-r/a}/r$ and the force is $\propto e^{-r/a}(1/r^2+1/(ar))$. Add this so the claim is precise.
- [Graph] Plot $e^{-r/a}/r$ and $1/r$ (normalized at $r=0.5\,\unit{fm}$) for $r$ from 0.2 to 5 fm with $a=1.4\,\unit{fm}$, to show what "range" means.
- [Intuition] Add a small table with current PDG values: $m_\mu=105.658\,\unit{MeV}/c^2$, $\tau_\mu=2.197\times10^{-6}\,\unit{s}$, $\tau_{\pi^\pm}=2.603\times10^{-8}\,\unit{s}$, which makes "the pion decays long before reaching the ground" quantitative ($c\tau_\pi\approx7.8\,\unit{m}$). Remove the BOM and convert CRLF to LF.

### N3008

Note: [[1.4 Antiparticles (1930-1956)|1.4 Antiparticles (1930-1956)]]  
Priority: medium · Graph: yes · Manim: yes

Good conceptual account of antiparticles and crossing, with a date inconsistency and one outdated structure statement.

- [Correctness] The text says Anderson discovered the positron "in late 1931", but the Fig. 1.5 caption says 1932; the discovery was in August 1932. Add a footnote so the note is self-consistent.
- [Correctness] Dirac's equation was published in early 1928 (Proc. R. Soc. A 117), not 1927; footnote the date.
- [Correctness] The neutron charge structure "positive at the center and at the edges, negative in between" is outdated; modern form factors give a positive core and a negative outer region (mean-square charge radius $\langle r^2\rangle_n=-0.1155\,\unit{fm^2}$, PDG).
- [Graph] Plot the two branches $E=\pm\sqrt{p^2c^2+m^2c^4}$ against $p$ with the gap $2mc^2$ shaded, to show the negative-energy problem and the pair-creation threshold.
- [Manim] Animate the Dirac sea: a photon lifts an electron across the $2mc^2$ gap, leaving a hole that moves like a positive charge, then show the Feynman–Stückelberg reinterpretation; also spell "Stückelberg" with the umlaut as in 1.6. Remove the BOM and convert CRLF to LF.
- [Example] Add the threshold for $p+p\to p+p+p+\bar p$ on a fixed target: $T_{\min}=6m_pc^2\approx5.6\,\unit{GeV}$, which is why the Bevatron was built for about $6\,\unit{GeV}$.

### N3009

Note: [[1.5 Neutrinos (1930-1962)|1.5 Neutrinos (1930-1962)]]  
Priority: high · Graph: yes · Manim: no

Long and well narrated, but several physics claims are now wrong or outdated and need visible modern-status callouts.

- [Correctness] "as far as we know, its mass is in fact zero" is outdated: oscillations prove nonzero neutrino masses ($\Delta m^2_{21}\approx7.5\times10^{-5}\,\unit{eV^2}$, $|\Delta m^2_{32}|\approx2.5\times10^{-3}\,\unit{eV^2}$; KATRIN $m_\nu<0.45\,\unit{eV}$), and the separate conservation of $L_e$ and $L_\mu$ is violated in oscillations.
- [Correctness] "established that the neutrino and antineutrino are distinct particles" overstates the Davis result: the null result is also explained by helicity (V−A), and whether neutrinos are Dirac or Majorana is still open (neutrinoless double-beta-decay searches).
- [Correctness] The 1962 Brookhaven description does not match the experiment (Danby et al.): the beam was mainly $\nu_\mu$ from $\pi^+\to\mu^+\nu_\mu$, the observed reaction was $\nu_\mu+n\to\mu^-+p$ (29 muon events), and the few shower events were consistent with background; footnote the correction.
- [Correctness] "The upper number is the atomic weight (the number of neutrons plus protons)" names the mass number $A$, not the atomic weight; footnote the modern term. Also update (1.16): the current limit is $\mathrm{BR}(\mu\to e\gamma)<1.5\times10^{-13}$ (MEG II).
- [Example] Evaluate (1.7) for free neutron decay: $E=(m_n^2-m_p^2+m_e^2)c^2/2m_n=1.293\,\unit{MeV}$, so $T_{\max}=0.782\,\unit{MeV}$; for tritium the endpoint is $18.6\,\unit{keV}$.
- [Graph] Plot the allowed beta spectrum $N(T)\propto pE(T_0-T)^2$ for tritium ($T_0=18.6\,\unit{keV}$, ignoring the Fermi function) against the single spike that a two-body decay would give at $T_0$. Remove the BOM and convert CRLF to LF.

### N3010

Note: [[1.6 Strange Particles (1947-1960)|1.6 Strange Particles (1947-1960)]]  
Priority: medium · Graph: no · Manim: no

Clear introduction to baryon number and strangeness; the reaction lists (1.27)–(1.29) check out, but the proton-decay status and one symbol need updating.

- [Correctness] The proton-stability footnote cites 1981–85 articles only; add the current bound $\tau/B(p\to e^+\pi^0)>2.4\times10^{34}\,\unit{yr}$ (Super-Kamiokande), which excludes minimal SU(5) GUTs.
- [Correctness] $A$ denotes baryon number in the text, while the Fig. 1.9 caption uses $A$ and $B$ as vertex labels ("decays at $A$"); rename the vertices or note the clash (most texts use $B$ for baryon number, but $B$ is beauty in 1.11).
- [Example] Add a worked strangeness bookkeeping table for one allowed and one forbidden reaction from (1.27)/(1.28) (columns $Q$, $A$, $S$ before and after), so readers can check the other lines themselves.
- [Intuition] Add PDG masses and lifetimes for the particles named ($K^\pm$ 493.7 MeV, $\tau=1.24\times10^{-8}\,\unit{s}$; $K^0$ 497.6 MeV; $\Lambda$ 1115.7 MeV, $\tau=2.6\times10^{-10}\,\unit{s}$) to make the $10^{-23}$ s versus $10^{-10}$ s contrast concrete. Remove the BOM and convert CRLF to LF.

### N3011

Note: [[1.7 The Eightfold Way (1961-1964)|1.7 The Eightfold Way (1961-1964)]]  
Priority: high · Graph: yes · Manim: no

The native octet and decuplet diagrams are a strong addition, but the decuplet has a wrong label, and the key Gell-Mann–Okubo prediction is only mentioned, never shown.

- [Correctness] In the baryon-decuplet graph the $S=-2$, $Q=0$ point at (1, -0.464) is labelled "Ξ*⁺"; it must be "Ξ*⁰" (the $\Xi^*$ doublet is $\Xi^{*-}$, $\Xi^{*0}$; see the $uss$ row in 1.8).
- [Correctness] In the Fig. 1.11 nonet graph, the $^3P_0$ isoscalar label "S*⁰′" looks garbled (the source has $S^*$ and $\epsilon$); check against PDF page 44. Also add a footnote that the old names ($\kappa$, $\delta$, $\epsilon$, $Q$, $A_1$, $D$, $E$, $g$) correspond to modern $K_0^*$, $a_0(980)$, $f_0$, $K_1$, $a_1(1260)$, $f_1(1285)$, $f_1(1420)$, $\rho_3(1690)$.
- [Example] Show the equal-spacing prediction: with PDG masses $\Delta(1232)$, $\Sigma^*(1384.6)$, $\Xi^*(1533.4)$ the spacings are about 153 and 149 MeV, giving $m_\Omega\approx1682$ to $1684\,\unit{MeV}/c^2$ versus the measured $1672.45\pm0.29\,\unit{MeV}/c^2$ (lifetime $0.821\times10^{-10}\,\unit{s}$).
- [Graph] Plot decuplet mass (MeV) against strangeness $S=0,-1,-2,-3$ with the PDG points and a straight-line fit through the first three, extrapolated to $S=-3$ to show the $\Omega^-$ prediction.
- [Structure] The Fig. 1.11 caption is a bold paragraph below the graph block; mark it as the graph's caption in the skill's caption format. Make the physical-quantities $c$ unit consistent with the other chapter notes (cm/s versus m/s). Remove the BOM and convert CRLF to LF.

### N3012

Note: [[1.8 The Quark Model (1964)|1.8 The Quark Model (1964)]]  
Priority: high · Graph: no · Manim: yes

Quark diagrams and the decuplet and nonet tables are correct, but the claims about exotic hadrons and colour singlets are now false, and the nonet table assignment is misleading.

- [Correctness] "none has ever been found" for exotic hadrons is outdated: tetraquark candidates ($X(3872)$ 2003, $Z_c(3900)$ 2013), the doubly charged $T_{c\bar s0}(2900)^{++}$ (LHCb 2022, a meson-like state with $Q=+2$, against "nor can there be a meson with a charge of +2") and pentaquarks $P_c$ (LHCb 2015) have been observed.
- [Correctness] "The only colorless combinations you can make are $q\bar q$, $qqq$, and $\bar q\bar q\bar q$" is wrong: $qq\bar q\bar q$ and $qqqq\bar q$ (and glueballs) are also colour singlets; restate the rule as "colour-singlet combinations, the simplest being $q\bar q$ and $qqq$".
- [Correctness] The nonet table pairs $u\bar u\to\pi^0$ and $d\bar d\to\eta$, which is wrong even with the later caveat; give the physical states $\pi^0=(u\bar u-d\bar d)/\sqrt2$, $\eta\approx(u\bar u+d\bar d-2s\bar s)/\sqrt6$, $\eta'\approx(u\bar u+d\bar d+s\bar s)/\sqrt3$, or write "mixtures" in the meson column.
- [Correctness] The confinement paragraph ("crucial theoretical problem for the eighties ... solution may be at hand") and the DIS "not conclusive" remark are dated; add a callout that QCD is established, that lattice QCD shows a linearly rising quark potential, and that free-quark searches set tight limits.
- [Manim] Animate a meson as a $q\bar q$ pair joined by a colour flux tube: pulling the quarks apart stretches the tube until it breaks into two $q\bar q$ pairs instead of freeing a quark, making confinement intuitive. Remove the BOM and convert CRLF to LF.

### N3013

Note: [[1.9 The November Revolution and Its Aftermath (1974-1983)|1.9 The November Revolution and Its Aftermath (1974-1983)]]  
Priority: medium · Graph: no · Manim: no

Faithful, readable transcription of the 1974–1983 history, but the hand-built Fig. 1.13 supermultiplet graphs contain several wrong quark labels and the 1987 "future" statements are not annotated.

- [Correctness] Fig. 1.13(b) vector-meson graph: "s̄d̄ (K̄*⁰)" is two antiquarks and not a meson (should be $s\bar d$, $\bar K^{*0}$); "s̄c" at the charm $-1$ vertex has charm $+1$ (should be $s\bar c$); "ud̄ (ρ*)" should be $u\bar d$ ($\rho^+$).
- [Correctness] Fig. 1.13(d) spin-½ graph: the charm $+2$ vertex "scs" should be $ccs$, the charm $+1$ vertex at (−1.6, 1.1) labelled "ccd" should be $cdd$ ($\Sigma_c^0$), and "uss (Ξ*⁺)" should be $uss$ ($\Xi^0$); Fig. 1.13(e): the charm $+2$ vertex at (−0.75, 1.7) labelled "cdd" should be $ccd$.
- [Correctness] Fig. 1.13(a) is a stray circle with three labels ($d\bar d$, $s\bar s$, $c\bar c$) instead of the pseudoscalar 16-plet; rebuild it as the pseudoscalar analogue of (b) ($D$, $D_s$, $K$, $\pi$, $\eta$, $\eta_c$) or remove it, and add the missing outer labels ($K^{*\pm}$, $n$, $p$, $\Delta^0$, $\Sigma^{*-}$, $\Sigma^{*0}$) so the reader can actually use the diagrams for Problems 1.14–1.15.
- [Structure] Add an editorial callout after the last paragraph: the top quark was discovered at Fermilab in 1995 (mass about $173\,\mathrm{GeV}/c^2$), $\Lambda_b$ is firmly established, and the $F^+$ is now listed as $D_s^+$; the "summer 1984 CERN" top signal was spurious.
- [Intuition] The $\psi$ lifetime comparison ($10^{-20}$ vs $10^{-23}$ s) would benefit from one sentence pointing forward to the OZI-rule explanation in \[\[2.5 Decays and Conservation Laws\]\], so the reader knows the puzzle is resolved later.
- [Structure] The file starts with a UTF-8 BOM before the frontmatter `---` (true for every note in this batch); save as UTF-8 without BOM.

### N3014

Note: [[1.B References and Notes|1.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list transcribed cleanly; one citation has a page-number transcription error.

- [Correctness] Note 10: "Phys. Rev. **92**, 8301 (1953)" should read "**92**, 830 (1953)" (Reines and Cowan); the extra digit looks like a merged footnote mark.
- [Structure] Note 42 colours $\theta_W$ with `\mechanical{}`, which is not a mechanical quantity; leave the mixing angle uncoloured (as the other chapters do for couplings) and drop `\mechanical{c}` inside the unit expression.

### N3015

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/01 Historical Introduction to the Elementary Particles/1.P Problems|1.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem set transcribed accurately; the only issue is a symbol clash created by the semantic table.

- [Correctness] Symbol clash: $\mechanical{p}$ is used for electron momentum in Problem 1.3 and for the proton mass in the Coleman–Glashow relation (Problem 1.9), and the table lists both; write the masses in 1.9 as $m_p, m_n, m_{\Sigma^\pm}, m_{\Xi^{0,-}}$ or state explicitly that the particle names stand for masses only there.
- [Links] Problem 1.9 citation "Phys. Rev. **B134**, 671 (1964)" is the conventional misprint for Phys. Rev. **134**, B671 (1964); fix the volume/page format.

### N3016

Note: [[2.1 The Four Forces|2.1 The Four Forces]]  
Priority: low · Graph: no · Manim: no

Short, clear overview of the four forces with a sensible caveat footnote on "strength".

- [Intuition] The strength table ($10$, $10^{-2}$, $10^{-13}$, $10^{-42}$) gives no reference scale; add one line saying these are rough dimensionless couplings for two protons at about $10^{-15}\,\mathrm{m}$, and link Problem 2.1 in \[\[2.P Problems\]\] (gravity vs Coulomb for two electrons, ratio $\approx 2.4\times10^{-43}$) as a concrete check.
- [Structure] Add a brief note that the electroweak theory and QCD in this table are now jointly called the Standard Model and that the Higgs boson (spin 0, discovered 2012) is an additional elementary boson not in the mediator column.

### N3017

Note: [[2.2 Quantum Electrodynamics (QED)|2.2 Quantum Electrodynamics (QED)]]  
Priority: low · Graph: no · Manim: no

Clear qualitative introduction to Feynman diagrams and virtual particles; one standard oversimplification about the vertex factor.

- [Correctness] "each vertex within a diagram introduces a factor of $\alpha=e^2/\hbar c=1/137$": each vertex contributes $\sqrt{\alpha}$ (i.e. $e$) to the amplitude, so a diagram with $n$ vertices scales as $\alpha^{n/2}$ in the amplitude and $\alpha^{n}$ in the rate; also write $\alpha\approx1/137$ rather than "=".
- [Example] In the paragraph on $e^-\to e^-+\gamma$, add the two-line four-vector proof ($p=p'+k$ gives $m^2c^2=m^2c^2+2p'\cdot k$, and $p'\cdot k>0$ for a real photon) to make the "purely kinematical" argument explicit.
- [Manim] A short animation that rotates the Møller diagram by $90^\circ$ into the Bhabha annihilation diagram, flipping the arrow on the backward line to an antiparticle, would make crossing symmetry and the "backward in time" rule concrete.

### N3018

Note: [[2.3 Quantum Chromodynamics (QCD)|2.3 Quantum Chromodynamics (QCD)]]  
Priority: medium · Graph: yes · Manim: no

Good qualitative account of colour, gluon self-coupling, screening and asymptotic freedom; the running-coupling discussion stays purely verbal.

- [Graph] Add a plot of the one-loop running coupling $\alpha_s(Q)=\dfrac{12\pi}{(33-2f)\ln(Q^2/\Lambda^2)}$ with $f=5$, $\Lambda=0.2\,\mathrm{GeV}$, $Q\in[1,1000]\,\mathrm{GeV}$ (log axis), with the measured $\alpha_s(M_Z)\approx0.118$ marked, to show quantitatively what "asymptotic freedom" means and connect it to $a=2f-11n$ in (2.2).
- [Intuition] Connect (2.2) to the standard form: the one-loop coefficient is proportional to $11n-2f$, so $a=-21$ for $f=6$, $n=3$ is the sign that makes $\alpha_s$ fall; note that asymptotic freedom survives as long as $f\le16$.
- [Structure] Add a short update callout: confinement is still unproven analytically but is strongly supported by lattice QCD (linear static potential, string tension about $0.9\,\mathrm{GeV/fm}$), replacing the 1987 pointer to "ref. 25 in Chapter 1".
- [Simplify] The table colours $\lambda_c$ with `\signal{}`; it is a length scale (Compton wavelength of the electron), so `\mechanical{}` or uncoloured fits the macro semantics better.

### N3019

Note: [[2.4 Weak Interactions|2.4 Weak Interactions]]  
Priority: low · Graph: no · Manim: no

Short hub that introduces weak charge and lists the three subchapters; links resolve.

- [Structure] The note body starts with an orphan "<sup>4</sup>" before the first paragraph; move the footnote marker to the end of the first sentence (where Griffiths' note 4 on the classic weak-interaction papers belongs).

### N3020

Note: [[2.4.1 Leptons|2.4.1 Leptons]]  
Priority: low · Graph: no · Manim: no

Clear description of charged and neutral leptonic weak vertices with well-chosen example processes.

- [Intuition] After the muon-decay diagram, add one sentence explaining why weak processes are so slow at low energy: the $W$ propagator gives a factor $\approx g^2/M_W^2c^2$, which leads to the Fermi constant $G_F/(\hbar c)^3\approx1.17\times10^{-5}\,\mathrm{GeV}^{-2}$.
- [Structure] Frontmatter lacks the `source_pdf`, `source_page`, `pdf_page` fields that the other notes in the chapter carry; add them for consistency.

### N3021

Note: [[2.4.2 Quarks|2.4.2 Quarks]]  
Priority: medium · Graph: no · Manim: no

Good step-by-step build-up from leptonic to quark weak vertices and Cabibbo/KM mixing, but the quoted KM matrix is the 1984 range table.

- [Correctness] Eq. (2.6) is outdated: current PDG magnitudes are about $|V_{ud}|=0.974$, $|V_{us}|=0.225$, $|V_{ub}|=0.0037$, $|V_{cd}|=0.225$, $|V_{cs}|=0.973$, $|V_{cb}|=0.042$, $|V_{td}|=0.0086$, $|V_{ts}|=0.041$, $|V_{tb}|=0.999$; the ranges "0. to 0.014" and "0. to 0.024" also suggest $V_{ub}$, $V_{td}$ could vanish, which is now excluded. Add the current values in a callout.
- [Correctness] "$d+\nu_e\to u+e$" should read $d+\nu_e\to u+e^-$ (charge bookkeeping is the point of the example).
- [Intuition] Add the two-generation Cabibbo form $d'=d\cos\theta_C+s\sin\theta_C$ with $\theta_C\approx13^\circ$ before the $3\times3$ matrix, so the reader sees mixing as a rotation and why $\Lambda$ decay is suppressed by $\sin^2\theta_C\approx0.05$.
- [Structure] Frontmatter lacks the source fields used elsewhere in the chapter.

### N3022

Note: [[2.4.3 Weak and Electromagnetic Couplings of W and Z|2.4.3 Weak and Electromagnetic Couplings of W and Z]]  
Priority: low · Graph: no · Manim: no

Very short note listing the gauge-boson self-couplings; correct.

- [Structure] Add a one-line update: these triple and quartic couplings ($WW\gamma$, $WWZ$) were measured directly at LEP2 ($e^+e^-\to W^+W^-$, 1996–2000) and at the LHC, so "limited practical importance" is historical.

### N3023

Note: [[2.5 Decays and Conservation Laws|2.5 Decays and Conservation Laws]]  
Priority: medium · Graph: yes · Manim: no

Well-organised list of conservation laws with good worked examples (strangeness, OZI rule); numbers check, but the massless-neutrino premise is outdated.

- [Correctness] Opening paragraph: "The neutrinos and the photon are stable (having zero mass ...)" is outdated; neutrino oscillations show at least two neutrinos are massive. The lightest neutrino is still stable, and heavier ones could only decay at unobservably slow rates, so rephrase the reason.
- [Graph] Add a log-scale chart of lifetimes ($10^{-24}$ to $10^{3}$ s) placing $\Delta$ ($5.6\times10^{-24}$ s), $\pi^0$ ($8.4\times10^{-17}$), $\Sigma^0$ ($7.4\times10^{-20}$), $\psi$ ($7\times10^{-21}$), $\tau$ ($2.9\times10^{-13}$), $\Lambda$ ($2.6\times10^{-10}$), $\pi^+$ ($2.6\times10^{-8}$), $\mu$ ($2.2\times10^{-6}$), $n$ ($879$ s), coloured by strong/EM/weak, to visualise the gaps discussed in the text.
- [Example] Under "OZI rule", give the actual numbers: $\phi\to K\bar K$ about 83% vs $\phi\to3\pi$ about 15%, and $2m_D\approx3730\,\mathrm{MeV}/c^2>m_\psi=3097\,\mathrm{MeV}/c^2$, so the reader sees both halves of the $\psi$ argument quantitatively.
- [Simplify] In point 3, add that baryon number is now usually written $B$ (the note uses Griffiths' older $A$) so readers recognise it in other sources.

### N3024

Note: [[2.6 Unification Schemes|2.6 Unification Schemes]]  
Priority: medium · Graph: yes · Manim: no

Readable motivation for electroweak and grand unification, but the quantitative GUT claims are 1987 values that later data changed.

- [Correctness] "the half-life is ... at least $10^{20}$ times the age of the universe" is outdated: Super-Kamiokande gives $\tau/B(p\to e^+\pi^0)>2.4\times10^{34}$ yr, i.e. more than $10^{24}$ times the age of the universe, which rules out minimal non-supersymmetric SU(5).
- [Correctness] Fig. 2.5 and the text imply the three couplings meet at one point near $10^{15}$ GeV; LEP precision data show that with Standard Model running they do not meet at a single point (they nearly do with supersymmetric running near $2\times10^{16}$ GeV). Add this caveat; also $M_Z=91.19\,\mathrm{GeV}/c^2$, not 90.
- [Graph] Replace the schematic Fig. 2.5 with the actual one-loop running of $\alpha_1^{-1},\alpha_2^{-1},\alpha_3^{-1}$ versus $\log_{10}(Q/\mathrm{GeV})\in[2,17]$ (straight lines starting at $M_Z$ from about 59, 29.6, 8.5 with slopes $-41/10$, $19/6$, $7$ over $2\pi$), which shows the near-miss clearly.
- [Structure] The table lists $\energy{E}$ for "interaction energy", but the note never uses the symbol in text (only as an axis label); either use it in the paragraph ("at $E\approx10^{15}$ GeV") or drop it from the table.

### N3025

Note: [[2.B References and Notes|2.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Short reference list; no issues found.

- [Structure] No change needed beyond removing the UTF-8 BOM.

### N3026

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/02 Elementary Particle Dynamics/2.P Problems|2.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem set transcribed accurately; a few historical statements could be annotated.

- [Simplify] Problem 2.2 calls $\gamma+\gamma\to\gamma+\gamma$ "Delbruck scattering"; that name refers to photon scattering in the Coulomb field of a nucleus; the process here is light-by-light scattering (Delbrück scattering is a special case with virtual photons from the nucleus). Also spell "Delbrück".
- [Structure] Problem 2.6 ("if a positron-electron collider is ever built with sufficient energy to make two $W$'s") deserves a footnote that LEP2 did exactly this from 1996, confirming the $\gamma WW$ and $ZWW$ couplings.

### N3027

Note: [[3.1 Lorentz Transformations|3.1 Lorentz Transformations]]  
Priority: low · Graph: yes · Manim: yes

Clear, correct summary of the Lorentz transformations and their four classic consequences; the derivations are short and checkable.

- [Graph] Add a Minkowski diagram ($ct$ vertical, $x$ horizontal, range $\pm3$) showing the $S'$ axes $ct'$ (slope $c/v$) and $x'$ (slope $v/c$) for $\beta=0.6$, with two simultaneous events at $t=0$, $x_A=0$, $x_B=2$ and the tilted line of constant $t'$ through $A$, illustrating (3.4).
- [Manim] Animate the Minkowski diagram as $\beta$ goes from 0 to 0.9: the $x'$ and $ct'$ axes scissor toward the light cone while a fixed pair of events changes time order in $S'$; this conveys simultaneity and the invariant light cone better than a static plot.
- [Example] In "Time dilation", add a one-line number (for example $v=0.998c$ gives $\gamma=15.8$, so a $2.2\,\mu\mathrm{s}$ muon lives $35\,\mu\mathrm{s}$ in the lab) linking to Problem 3.4 in \[\[3.P Problems\]\].
- [Simplify] The text refers to "equation (i)" and "eq. (iv′)" while the displays are tagged (3.1) and (3.3); say "(3.1 i)" and "(3.3 iv)" so the reference is unambiguous.

### N3028

Note: [[3.2 Four-Vectors|3.2 Four-Vectors]]  
Priority: low · Graph: no · Manim: no

Clean and correct introduction to four-vector index notation, metric, invariants and tensors.

- [Example] After (3.20), add a short worked example: $a=(5,3,0,0)$, $b=(2,1,1,0)$ give $a\cdot b=10-3=7$, and boosting both with $\beta=0.6$ gives the same 7, so the invariance claim is seen in numbers.
- [Simplify] The sentence "put an arrow over all three-vectors ... In this book, I use boldface" is self-contradictory as transcribed; keep only the boldface convention the note actually uses.
- [Intuition] Add one sentence after (3.24) on the physical meaning: timelike separations can be causally connected, spacelike ones cannot, lightlike ones lie on the light cone.

### N3029

Note: [[3.3 Energy and Momentum|3.3 Energy and Momentum]]  
Priority: low · Graph: yes · Manim: no

Clear motivation of proper time, proper velocity and the energy-momentum four-vector; one outdated physics claim.

- [Correctness] "at least two types of massless particles (the photon and the neutrinos) are known to exist" is outdated; neutrinos are massive (oscillations), so the examples of massless particles are the photon and the gluon.
- [Graph] Plot $T/mc^2=\gamma-1$ and the classical $\tfrac12\beta^2$ for $\beta\in[0,0.99]$, plus $p/(mc)=\gamma\beta$ versus $\beta$, to show where the Taylor expansion (3.43) fails and why $v<c$ always.
- [Example] In the photon paragraph, add the numbers: $\lambda=hc/E$ gives $620\,\mathrm{nm}$ for $2\,\mathrm{eV}$ and $413\,\mathrm{nm}$ for $3\,\mathrm{eV}$, which supports the "red" and "purple" remark.

### N3030

Note: [[3.4 Collisions|3.4 Collisions]]  
Priority: low · Graph: no · Manim: no

Clear classical-versus-relativistic comparison of collision types; correct.

- [Example] Add a numerical illustration of the "hot potato" remark: heating $1\,\mathrm{kg}$ of water by $80\,\mathrm{K}$ adds $3.3\times10^{5}\,\mathrm{J}$, i.e. $\Delta m=Q/c^2\approx3.7\times10^{-12}\,\mathrm{kg}$ (a worked estimate for Problem 3.12 in \[\[3.P Problems\]\]).
- [Simplify] In the callout, say "the sum of the rest masses is not conserved" rather than "mass is not conserved", since the invariant mass of the whole system is conserved; this avoids confusion with the invariant-mass method of \[\[3.5 Examples and Applications\]\].

### N3031

Note: [[3.5 Examples and Applications|3.5 Examples and Applications]]  
Priority: low · Graph: yes · Manim: no

Excellent worked examples with explicit strategy suggestions; all results check ($M=5m/2$, $v_\mu=0.271c$, $E=7mc^2$, $T'\approx3918\,\mathrm{GeV}$).

- [Structure] Example 3.1 repeats its question ("Question: What is the mass, $M$ of the final composite lump?") as a duplicate line; delete the second copy.
- [Graph] Plot $T'/T=4(1+T/2mc^2)$ from (3.53) for electrons and protons, $T\in[10^{-3},10^{3}]\,\mathrm{GeV}$ on log axes, to show the collider advantage growing linearly with $T$.
- [Example] After Example 3.4, add the collider comparison in numbers: fixed target needs $T=6mc^2=5.63\,\mathrm{GeV}$, colliding beams need $T=mc^2=0.938\,\mathrm{GeV}$ per proton.
- [Simplify] The table gives $m_\pi,m_\mu$ in kg but $m_d,m_p,m_n$ in $\mathrm{MeV}/c^2$; use $\mathrm{MeV}/c^2$ throughout, as the numerical evaluation does.

### N3032

Note: [[3.B References and Notes|3.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Two-item reference list; no issues.

- [Structure] No change needed beyond removing the UTF-8 BOM.

### N3033

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/03 Relativistic Kinematics/3.P Problems|3.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem set transcribed accurately; all checked answers (3.13, 3.16, 3.18 = 186 m, 3.22, 3.23, 3.24) are correct.

- [Simplify] The symbol $\mechanical{t}$ is used for time ($t'$ in Problem 3.1) and for the Mandelstam variable in Problems 3.22–3.23, and $\mechanical{\tau}$ for the muon lifetime; consider leaving Mandelstam $s,t,u$ uncoloured (they are invariants, not mechanical coordinates) to separate them visually.
- [Structure] The note callout under Problem 3.2 refers to "her" while the problem says "an observer"; harmless, but the callout could state the physics point directly (observed after light-travel correction vs seen).

### N3034

Note: [[4.1 Symmetries, Groups, and Conservation Laws|4.1 Symmetries, Groups, and Conservation Laws]]  
Priority: low · Graph: no · Manim: yes

Clear, engaging introduction to symmetry, groups and Noether's theorem; correct.

- [Simplify] "conversely, every conservation law reveals an underlying symmetry" overstates Noether's theorem: it links continuous symmetries of an action to conserved currents; discrete symmetries such as parity give multiplicative conservation laws without Noether. Add one qualifying sentence.
- [Manim] Animate the six operations of the triangle group on Fig. 4.2 (labelled vertices A, B, C), then show $R_aR_+\ne R_+R_a$ by applying them in both orders, which makes closure and non-commutativity visible.
- [Example] Add the $3\times3$ multiplication table of the triangle group (or point to Problem 4.1) so the four group axioms can be checked on a concrete finite group.
- [Structure] The note has no Physical quantities table although it uses symbols such as $f(x)$ and group elements; add a short table or a line stating that the note has no physical quantities.

### N3035

Note: [[4.2 Spin and Orbital Angular Momentum|4.2 Spin and Orbital Angular Momentum]]  
Priority: low · Graph: no · Manim: no

Clear summary of quantised orbital and spin angular momentum with a good vector-model figure; Table 4.3 predates the Higgs.

- [Correctness] Table 4.3 shows "—" for elementary spin-0 bosons; the Higgs boson (spin 0, $125\,\mathrm{GeV}/c^2$, discovered 2012) belongs there. Mention also the hypothetical spin-2 graviton.
- [Intuition] Under Fig. 4.3, add that the cone angle satisfies $\cos\theta=m_l/\sqrt{l(l+1)}$ (for $l=2$, $m_l=2$: $\theta\approx35^\circ$), which quantifies "cannot be oriented purely in the $z$ direction".

### N3036

Note: [[4.3 Addition of Angular Momenta|4.3 Addition of Angular Momenta]]  
Priority: low · Graph: no · Manim: no

Clear and correct treatment of angular-momentum addition with good worked examples; the Example 4.3 coefficients check.

- [Correctness] Eq. (4.17) sums over $j_1,j_2$, but $j_1,j_2$ are fixed; the sum must run over $m_1,m_2$ with $m_1+m_2=m$: $\lvert j\,m\rangle=\sum_{m_1+m_2=m}C^{j\,j_1\,j_2}_{m\,m_1\,m_2}\lvert j_1m_1\rangle\lvert j_2m_2\rangle$.
- [Example] Add a quick dimension count to (4.12): $(2j_1+1)(2j_2+1)=\sum_j(2j+1)$, e.g. $2\times2=3+1$ and $5\times2=6+4$, which checks the decomposition and Example 4.2 ($2\times2\times2=4+2+2$).
- [Simplify] "The Clebsch–Gordan coefficients give the probability" should say "their squares give the probability"; the next sentence corrects it, but the first sentence as written is wrong on its own.

### N3037

Note: [[4.4 Spin 1-2|4.4 Spin 1-2]]  
Priority: low · Graph: no · Manim: yes

Clear, correct development of spinors, Pauli matrices and the SU(2) rotation rule.

- [Manim] Animate a spinor on the Bloch sphere under $U(\theta\hat z)=e^{-i\theta\sigma_z/2}$ as $\theta$ goes from 0 to $4\pi$, showing the overall phase factor reaching $-1$ at $2\pi$ and returning to $+1$ at $4\pi$; this illustrates the double-cover footnote.
- [Example] After (4.24), add a concrete case: $\alpha=\sqrt{2/3}$, $\beta=1/\sqrt3$ gives $P(S_x=+\hbar/2)=\tfrac12(\alpha+\beta)^2\approx0.97$, so the general procedure is seen with numbers.
- [Intuition] Add the closed form $e^{-i\boldsymbol\theta\cdot\boldsymbol\sigma/2}=\cos(\theta/2)-i(\hat{\mathbf n}\cdot\boldsymbol\sigma)\sin(\theta/2)$, which makes the $2\pi\to-1$ statement immediate rather than deferred to Problem 4.21.

### N3038

Note: [[4.5 Flavor Symmetries|4.5 Flavor Symmetries]]  
Priority: medium · Graph: yes · Manim: no

Strong exposition of isospin and its dynamical consequences (CG decompositions and cross-section ratios all check), but Table 4.4 quark masses and the "putative top" are badly outdated.

- [Correctness] Table 4.4 is outdated: current PDG values are about $m_u=2.2$, $m_d=4.7$, $m_s=93$ MeV (MS-bar at 2 GeV), $m_c=1.27$ GeV, $m_b=4.18$ GeV, and $m_t=172.6$ GeV (directly measured since the 1995 discovery), not "$>23{,}000$"; replace or annotate the table and the "putative top quark" sentence.
- [Graph] Recreate Fig. 4.6 natively: plot $\sigma_{\mathrm{tot}}(\pi^+p)$ and $\sigma_{\mathrm{tot}}(\pi^-p)$ versus pion lab momentum or CM energy $1.1$–$2.0$ GeV with Breit–Wigner peaks of about 200 mb and 70 mb at 1232 MeV, highlighting the 3:1 ratio of (4.51).
- [Example] After (4.43), state the measured outcome: $\sigma(pp\to d\pi^+)/\sigma(np\to d\pi^0)\approx2$, so the reader sees the isospin prediction confirmed numerically rather than only by reference 6.
- [Simplify] In the paragraph on effective masses, add that "bare" means the current-quark mass of the QCD Lagrangian and "effective" the constituent mass, and that the roughly $350\,\mathrm{MeV}/c^2$ offset is attributed to chiral-symmetry breaking in QCD (now well reproduced by lattice calculations).

### N3039

Note: [[4.6 Parity|4.6 Parity]]  
Priority: high · Graph: no · Manim: yes

Good conceptual treatment of parity, helicity and intrinsic parity, but the central Wu-experiment statement has the electron direction reversed and the meson table uses obsolete names.

- [Correctness] Wu experiment: electrons from polarised $^{60}$Co are emitted preferentially opposite to the nuclear spin ("southerly"), not "in the direction of the nuclear spin"; fix the text, the Fig. 4.7 caption, and the mirror-image statements and Fig. 4.8 caption (the mirror image then has electrons preferentially along the spin). Griffiths corrected this in the 2nd edition.
- [Correctness] "The neutrino is massless ... the helicity of a neutrino is Lorentz-invariant" is outdated; neutrinos have small masses, so strictly it is chirality (not helicity) that the weak interaction selects, and helicity equals chirality only up to corrections of order $m_\nu/E$. Add a callout (the footnote's "if neutrinos have a small but nonzero mass" is now confirmed).
- [Correctness] Table 4.6 uses obsolete 1980s meson names; current PDG names are $b_1, K_{1B}, h_1/h_1'$ for $1^{+-}$; $a_0, K_0^*, f_0$ for $0^{++}$; $a_1, K_{1A}, f_1(1285)/f_1(1420)$ for $1^{++}$; $a_2, K_2^*, f_2/f_2'$ for $2^{++}$. Give modern names (old names in brackets).
- [Manim] Animate the cobalt nucleus with spin arrow and emitted electrons, then reflect it in a mirror: the spin (axial vector) flips while the electron momenta (polar vectors) do not, showing why an asymmetric emission pattern violates parity.
- [Simplify] In the pion-decay paragraph, add a small sketch or sentence with explicit arrows: $\pi^-$ at rest, $\mu^-$ to the left with spin left, $\bar\nu_\mu$ to the right with spin right, so "opposite spins + opposite momenta = equal helicity" is visible.

### N3040

Note: [[4.7 Charge Conjugation|4.7 Charge Conjugation]]  
Priority: low · Graph: no · Manim: no

Concise, correct account of C eigenvalues and G-parity with useful decay selection rules.

- [Example] Add a short table of $I^G(J^{PC})$ for $\pi$ ($1^-(0^{-+})$), $\eta$ ($0^+(0^{-+})$), $\rho$ ($1^+(1^{--})$), $\omega$ ($0^-(1^{--})$), $\phi$ ($0^-(1^{--})$) and the allowed pion multiplicities, so (4.60)–(4.61) are applied systematically.
- [Simplify] Using $\lvert p\rangle$ for a generic particle in (4.54)–(4.56) clashes with $p$ as the proton elsewhere in the chapter; use $\lvert\psi\rangle$ or $\lvert a\rangle$.

### N3041

Note: [[4.8 CP Violation|4.8 CP Violation]]  
Priority: medium · Graph: yes · Manim: yes

Clear, well-motivated account of neutral-kaon mixing and CP violation with numbers that check ($\tau_S$, $\tau_L$, $\Delta m$, $\epsilon$, 45/22,700), but the "only in kaons" and "no natural way" statements are long outdated.

- [Correctness] "has never been observed outside the neutral kaon system" is outdated: CP violation was observed in $B^0$ decays (BaBar/Belle 2001), in charm decays (LHCb 2019) and in baryon decays (LHCb 2025); the CKM phase is now the established Standard Model mechanism (Nobel Prize 2008). Add an update callout and soften "no one has yet found a natural way".
- [Links] The parenthetical "among the 'stable' particles only $D^0\bar D^0$ and $B^0\bar B^0$ share the property" should also list $B_s^0\bar B_s^0$, which has the fastest oscillation ($\Delta m_s\approx17.8\,\mathrm{ps}^{-1}$).
- [Graph] Plot the decay-rate fractions $e^{-t/\tau_S}$ and $e^{-t/\tau_L}$ (normalised, log scale) for a $K^0$ beam versus proper time $0$–$50\,\tau_S$, together with the $2\pi$ rate $|e^{-t/2\tau_S}+\epsilon\,e^{-t/2\tau_L}|^2$ with $|\epsilon|=2.2\times10^{-3}$, showing the long-time $2\pi$ tail that Cronin and Fitch saw.
- [Manim] Animate strangeness oscillation of a $K^0$ beam: the $K^0$ and $\bar K^0$ probabilities $\tfrac14[e^{-t/\tau_S}+e^{-t/\tau_L}\pm2e^{-t/2\tau_S-t/2\tau_L}\cos(\Delta m\,t)]$ evolving along the beam while the $K_S$ component dies off.
- [Simplify] In "$K_L$ semileptonic decays", spell out that the asymmetry $\delta_L=(\Gamma^+-\Gamma^-)/(\Gamma^++\Gamma^-)\approx2\,\mathrm{Re}\,\epsilon\approx3.3\times10^{-3}$, linking the two measured numbers.

### N3042

Note: [[4.9 Time Reversal and the TCP Theorem|4.9 Time Reversal and the TCP Theorem]]  
Priority: medium · Graph: no · Manim: no

A faithful, readable transcription of Griffiths' 1987 discussion, but its experimental statements are badly dated and it gives no concrete transformation rules for P and T.

- [Correctness] Eq. (4.76) and "As of 1985, no experiment has shown direct evidence of T violation" are outdated: the current neutron EDM limit is $\lvert d_n\rvert<1.8\times10^{-26}\,e\,\mathrm{cm}$ (PSI, 2020), and CPLEAR (1998, $K^0\leftrightarrow\bar K^0$) and BaBar (2012, entangled $B$ mesons) observed T violation directly; add a dated update callout.
- [Simplify] Qualify "all particles are eigenstates of $P$": this holds for intrinsic parity of a particle at rest; also say plainly that $T$ is antiunitary, which is why no $T$ eigenvalue can be multiplied like $P$ or $C$ numbers.
- [Intuition] Add a small table of how $\mathbf x,\mathbf p,\mathbf s,\mathbf E,\mathbf B,\mathbf d$ transform under $P$ and $T$ so that the EDM footnote argument ($\mathbf d\parallel\mathbf s$ violates both) becomes a one-line check.
- [Links] Link the Fitch–Cronin sentence to \[\[4.8 CP Violation\]\] and the detailed-balance remark to a later cross-section note.
- [Structure] Split the long paragraphs under headings: detailed balance tests, EDM tests, the TCP theorem and its tests (mass/lifetime equality).

### N3043

Note: [[4.B References and Notes|4.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list; correct and complete, and the bag-model estimate in note 9 checks out ($2.5\cdot197/1.5\approx330$ MeV).

- [Structure] No change needed; optionally add a one-line callout that the references date from the 1980s and point to the current PDG review for updated values.

### N3044

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/04 Symmetries/4.P Problems|4.P Problems]]  
Priority: low · Graph: no · Manim: no

Clean problem list; only the quantity table has a symbol issue.

- [Correctness] The physical-quantities table assigns $\mechanical{m}$ both to the electron mass (Problem 4.8) and to the projection quantum number in the ladder-operator formula (Problem 4.23); list them as separate rows or write the projection as $m_s$ in 4.23.
- [Links] Link the cited equations and examples (Example 4.1/4.2, eq. 4.12, eq. 4.28, Figure 4.6) to their notes (4.3 Addition of Angular Momenta, 4.4 Spin 1-2, 4.5 Flavor Symmetries) so problems can be solved from the vault.

### N3045

Note: [[5.1 The Schrödinger Equation for a Central Potential|5.1 The Schrödinger Equation for a Central Potential]]  
Priority: medium · Graph: yes · Manim: no

Correct and well motivated review (all spherical harmonics in Table 5.1 check out), but long and without any visual of the centrifugal barrier or the angular functions.

- [Correctness] "hadrons made out of heavy quarks ($c,b$, and $t$)" and the later "substantially less than $c,b$, and $t$": the top quark decays ($\tau\approx5\times10^{-25}$ s) before it can form hadrons, so drop $t$ or add a footnote.
- [Graph] Plot the effective radial potential $V_{\mathrm{eff}}(r)=-1/r+\ell(\ell+1)/(2r^2)$ in atomic units for $\ell=0,1,2$, $r\in[0.2,20]$, $y\in[-1,0.5]$, to show the centrifugal barrier of eq. (5.24).
- [Graph] Add polar plots of $\lvert Y_l^{m}(\theta)\rvert^2$ for $(l,m)=(0,0),(1,0),(1,1),(2,0),(2,1),(2,2)$ beside Table 5.1.
- [Example] Show the one-line step from (5.16) to (5.24): with $u=rR$, $\frac{1}{r^2}\frac{d}{dr}(r^2R')=u''/r$.
- [Simplify] Move the italic chapter preface to the chapter hub and state early that for two-body systems $m$ means the reduced mass (see 5.6).

### N3046

Note: [[5.10 Baryon Masses and Magnetic Moments|5.10 Baryon Masses and Magnetic Moments]]  
Priority: high · Graph: yes · Manim: no

The derivations are clear, but the note contains a swapped table row, a wrong prefactor, a missing sign, and inconsistent quark masses.

- [Correctness] Table 5.6, $\Lambda$ row is swapped: with $m_u=363$, $m_s=538$, $A'\hbar^2/m_u^2=200$ MeV, eq. (5.132) gives $1264-150=1114$ MeV (calculated), while the observed mass is 1116 MeV; the row should read Calculated 1114, Observed 1116.
- [Correctness] Example 5.3: the contribution is written $(2/3\sqrt2)^2\,(\hbar/2)\sum\langle\cdots\rangle$; by eq. (5.117) the prefactor must be $2/\hbar$, otherwise the result $\tfrac29(2\mu_u-\mu_d)$ does not follow (dimensions are off by $\hbar^2$).
- [Correctness] After eq. (5.118) the experimental value is quoted as $0.68497945$; the ratio $\mu_n/\mu_p$ is negative, $-0.68497945$.
- [Correctness] The Table 5.5 predictions (2.79, −1.86, …) require $m_u=m_d\approx336$ and $m_s\approx540$ MeV; the Table 4.4 baryon masses the text cites ($363$, $538$) give $\mu_p\approx2.59$, $\mu_n\approx-1.72$; state the masses actually used.
- [Correctness] Experimental moments are 1981 values: current PDG gives $\Sigma^+=2.458\pm0.010$, $\Sigma^-=-1.160\pm0.025$, $\Xi^0=-1.250\pm0.014$, $\Xi^-=-0.6507\pm0.0025$, $\Lambda=-0.613$; also footnote "No decuplet moments have been measured" is outdated ($\mu_{\Omega^-}=-2.02\pm0.05\,\mu_N$).
- [Graph] Dot plot of predicted versus measured values per baryon (Table 5.5 moments in $\mu_N$, $y\in[-2,3]$; Table 5.6 masses, $y\in[900,1700]$ MeV) to show the quality of the fit.

### N3047

Note: [[5.2 The Hydrogen Atom|5.2 The Hydrogen Atom]]  
Priority: high · Graph: yes · Manim: no

Clear overview of the hydrogen spectrum, but the Rydberg constant formula is dimensionally wrong.

- [Correctness] Eq. (5.34) $R=m e^4 c/(4\pi\hbar^3)$ has the wrong dimension; from (5.32) divided by $hc$ it must be $R=m e^4/(4\pi c\hbar^3)$ (Gaussian), which gives $1.097\times10^5\,\mathrm{cm^{-1}}$.
- [Graph] Energy-level plot $E_n=-13.6/n^2$ eV for $n=1\ldots6$ with arrows for the Lyman ($n_f=1$), Balmer ($n_f=2$) and Paschen ($n_f=3$) series, as a native supplement to the raster Fig. 5.1.
- [Graph] Plot radial probability densities $r^2\lvert R_{nl}\rvert^2$ for $1s,2s,2p,3s,3p,3d$ versus $r/a\in[0,25]$ to make (5.28) concrete.
- [Example] Add a worked Balmer-alpha line: $1/\lambda=R(1/4-1/9)$ gives $\lambda=656$ nm.
- [Simplify] Note that (5.28) uses the old Laguerre convention $L^p_{q-p}$ of (5.30), which differs from the modern one in normalization, so readers comparing with current texts are not confused.

### N3048

Note: [[5.3 Fine Structure|5.3 Fine Structure]]  
Priority: low · Graph: no · Manim: no

Short hub that introduces first-order perturbation theory clearly.

- [Simplify] The state label $j$ in (5.35) clashes with the total angular momentum $j$ used in the subnotes; rename the generic label (for example $k$).
- [Intuition] Add one sentence that the hydrogen levels are degenerate, so (5.35) is valid only in a basis that diagonalizes $\Delta H$ (the $n,l,j,m_j$ states used in 5.3.2).

### N3049

Note: [[5.3.1 The Relativistic Correction|5.3.1 The Relativistic Correction]]  
Priority: high · Graph: no · Manim: no

Short, clear derivation, but the final result has the wrong power of $n$.

- [Correctness] Eq. (5.42) prefactor $1/(4n^2)$ is wrong; inserting (5.40), (5.41) and $E_n=-\alpha^2mc^2/2n^2$ into (5.39) gives $\Delta E_{\mathrm{rel}}=-\alpha^4mc^2\frac{1}{4n^4}\left[\frac{2n}{l+1/2}-\frac32\right]$.
- [Example] Show the intermediate step $E_n^2-2E_n\langle V\rangle+\langle V^2\rangle=\alpha^4m^2c^4\left[\frac{1}{(l+1/2)n^3}-\frac{3}{4n^4}\right]$ so readers can verify (5.42).
- [Structure] The note lacks the source_pdf/source_page frontmatter that sibling notes carry; add it for consistency.

### N3050

Note: [[5.3.2 Spin-Orbit Coupling|5.3.2 Spin-Orbit Coupling]]  
Priority: high · Graph: yes · Manim: no

Good physical explanation with a native level diagram, but the combined fine-structure formula has the wrong power of $n$ and one symbol clash.

- [Correctness] Eq. (5.52) prefactor $1/(4n^2)$ must be $1/(4n^4)$: $\Delta E_{\mathrm{fs}}=-\alpha^4mc^2\frac{1}{4n^4}\left[\frac{2n}{j+1/2}-\frac32\right]$ (check: $n=2$, $j=1/2$ gives $-\tfrac{5}{128}\alpha^4mc^2$, the Dirac result).
- [Correctness] The torque footnote uses $\magnetic{\mathbf m}$ for the magnetic moment while $\mechanical{m}$ is the electron mass in the same note; use $\boldsymbol\mu$ as in (5.45).
- [Graph] Redraw Fig. 5.2 to scale for $n=2,3$ using (5.52) (shifts in units of $\alpha^4mc^2$), or add a small plot of $\Delta E_{\mathrm{fs}}$ versus $j$ for $n=1\ldots4$; the current diagram is admittedly not to scale (the n=4 shift is drawn larger than the n=2 shift).
- [Example] Add the numerical $n=2$ splitting: $E(2P_{3/2})-E(2P_{1/2})=\alpha^4mc^2/32=4.5\times10^{-5}$ eV (10.9 GHz).
- [Intuition] Explain in one sentence why the Thomas factor 1/2 appears (rotating rest frame of the accelerated electron) before quoting (5.47).

### N3051

Note: [[5.4 The Lamb Shift|5.4 The Lamb Shift]]  
Priority: medium · Graph: yes · Manim: no

Clear qualitative account of radiative corrections, but no numbers show the size of the effect.

- [Example] Evaluate the $2S_{1/2}-2P_{1/2}$ gap from (5.53)–(5.54): $\frac{\alpha^5mc^2}{32}\left[k(2,0)+\frac{1}{1.5\pi}-k(2,1)\right]\approx4.4\times10^{-6}$ eV, i.e. about 1.05 GHz versus the measured 1057.8 MHz.
- [Graph] Native level diagram for $n=2$: Bohr level, fine-structure split into $j=1/2,3/2$, and the Lamb split of $2S_{1/2}$ above $2P_{1/2}$, with the energy gaps labeled.
- [Intuition] Add Welton's picture: vacuum fluctuations smear the electron position, which matters most where $\psi(0)\neq0$, so $S$ states are raised most.
- [Links] Link "Figure 5.2" and "fine structure formula (5.52)" to \[\[5.3.2 Spin-Orbit Coupling\]\].

### N3052

Note: [[5.5 Hyperfine Structure|5.5 Hyperfine Structure]]  
Priority: medium · Graph: no · Manim: no

Careful and correct derivation (5.64, 5.65, 5.68, 5.69 and the 21.1 cm result all check out), but long and with one symbol clash.

- [Correctness] The delta-function footnote uses $\epsilon$ for the radius of the small sphere while $\epsilon$ is the hyperfine gap in (5.65)–(5.66); rename the radius (for example $\delta r$).
- [Example] Give the numbers behind (5.66): $\alpha^4mc^2=1.45\times10^{-3}$ eV, multiplied by $(m/m_p)\cdot8\gamma_p/3$ gives $\epsilon=5.9\times10^{-6}$ eV, $\nu=1420$ MHz, $\lambda=21.1$ cm.
- [Intuition] Explain the sign: the electron moment is antiparallel to its spin and the contact field is parallel to $\boldsymbol\mu_p$, so the singlet (spins antiparallel, moments parallel) lies lower.
- [Simplify] Put a short roadmap before (5.56): two interactions (nuclear spin-orbit, spin-spin), then the $l=0$ case (contact term only), then $l\neq0$ (contact term vanishes).

### N3053

Note: [[5.6 Positronium|5.6 Positronium]]  
Priority: medium · Graph: yes · Manim: no

Correct and informative (formulas 5.75–5.84 check, including the $7/12$ ground-state splitting and the 125 ps lifetime), but dense and with a symbol clash.

- [Correctness] In (5.80) $n$ denotes the number of photons while $\mechanical{n}$ is the principal quantum number in the same section; use $N_\gamma$ for the photon count.
- [Simplify] The terminology footnote is garbled ("except the pair annihilation term (see below) including the spin-spin …"); rewrite as "all perturbations of order $\alpha^4mc^2$ (except the pair-annihilation term, see below), including the spin-spin and positron spin-orbit couplings".
- [Example] Work out $n=1$ from (5.77)–(5.79): singlet $-\tfrac{21}{64}$, triplet $+\tfrac{1}{192}+\tfrac14$ in units of $\alpha^4mc^2$, so the gap is $\tfrac{7}{12}\alpha^4mc^2=8.45\times10^{-4}$ eV (about 204 GHz, measured 203.4 GHz).
- [Graph] Native to-scale level diagram of the $n=1$ and $n=2$ positronium states from (5.77)–(5.79), as a complement to the raster Fig. 5.7.
- [Intuition] Add one sentence on why $e^+e^-\to\gamma$ is forbidden (energy-momentum conservation for one massless photon), answering the question posed in the text.

### N3054

Note: [[5.7 Quarkonium|5.7 Quarkonium]]  
Priority: medium · Graph: yes · Manim: no

Engaging narrative with a native level-spacing figure, but several statements are outdated and one table entry does not reproduce.

- [Correctness] Table 5.2, $F_0=1500$ MeV/fm, $E_2$: solving the radial equation with $\mu=750$ MeV and $\alpha_s=0.2$ gives $E_2\approx1464$ MeV, not 1480 (all other entries reproduce within about 5 MeV); check the source value.
- [Correctness] Outdated claims: the $2^1P_1$ state ($h_c(3525)$) was observed in 2005; top quarks decay ($\Gamma_t\approx1.4$ GeV) before forming toponium or $c\bar t$, $b\bar t$ bound states, so the closing paragraphs on toponium need a dated note.
- [Graph] Plot $V(r)=-\frac43\alpha_s\hbar c/r+F_0r$ for $\alpha_s=0.2$, $F_0=900$ MeV/fm, $r\in[0.05,2]$ fm, with the Coulomb and linear parts dashed.
- [Simplify] Clarify the "16 tons": $900\,\mathrm{MeV/fm}\approx1.44\times10^5$ N, which is 16 short tons (14.7 metric tonnes-force).
- [Intuition] Add the scaling argument for the level spacing ($\propto m$ for Coulomb, $m^{-1/3}$ for linear, $m^0$ for logarithmic) as a small table next to Fig. 5.10.

### N3055

Note: [[5.8 Light Quark Mesons|5.8 Light Quark Mesons]]  
Priority: medium · Graph: yes · Manim: no

Clear construction of the meson flavor states and mass formula (Table 5.3 reproduces), but one wrong statement about SU(2) singlets.

- [Correctness] "in exactly the same sense that the $\pi^0$ is a singlet under $SU(2)$" is wrong: $\pi^0$ is the $I_3=0$ member of the isotriplet; the $SU(2)$ singlet is $(u\bar u+d\bar d)/\sqrt2$ of eq. (5.90).
- [Example] Show one row of Table 5.3 explicitly: $M_\pi=620-\tfrac34\cdot4\cdot160=140$ MeV, $M_K=793-480\cdot310/483\approx485$ MeV, $M_\eta=\tfrac13M_{u\bar u}+\tfrac23M_{s\bar s}=559$ MeV.
- [Graph] Plot calculated versus observed masses of Table 5.3 (meson on x, mass 0–1100 MeV on y) to show the 1% agreement.
- [Simplify] Replace the 1980s names "$D$ and $E$" mesons by current names ($f_1(1285)$, $f_1(1420)$/$\eta(1405)$) or remove the remark.
- [Intuition] Mention the modern pseudoscalar mixing angle (about $-11^\circ$ to $-20^\circ$) versus ideal mixing ($\omega$, $\phi$) to explain why (5.92)–(5.93) are approximate.

### N3056

Note: [[5.9 Baryons|5.9 Baryons]]  
Priority: medium · Graph: no · Manim: no

Correct and thorough (Examples 5.1, 5.2 and eq. 5.105 check out), but very long and some experimental remarks are dated.

- [Correctness] Outdated: "it is hard enough to make a baryon with one heavy quark" (doubly charmed $\Xi_{cc}^{++}$ observed by LHCb in 2017), and "$cbt$" baryons cannot form because the top quark decays before hadronizing.
- [Correctness] Table 5.4 uses 1981 resonance names that differ from current PDG: $N(1688)\to N(1680)$, $N(1470)\to N(1440)$, $\Delta(1690)\to\Delta(1600)$, $\Delta(1890)\to\Delta(1905)$; add a note that the table is historical.
- [Simplify] The quantity table lists $\psi_A$, but the prose never defines it; state in the text that $\psi_A$ is the totally antisymmetric flavor singlet shown in the diagrams.
- [Structure] Add subheadings: spin combinations, Pauli principle, flavor multiplets, color, octet and decuplet wave functions.
- [Example] After (5.105), write out the check $\lvert\rangle_{12}+\lvert\rangle_{23}=(\uparrow\downarrow\uparrow-\downarrow\uparrow\uparrow+\uparrow\uparrow\downarrow-\uparrow\downarrow\uparrow)/\sqrt2=\lvert\rangle_{13}$.

### N3057

Note: [[5.B References and Notes|5.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list; no issues found.

- [Structure] No change needed.

### N3058

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/05 Bound States/5.P Problems|5.P Problems]]  
Priority: low · Graph: no · Manim: no

Clean problem list with one wrong hint and a few dated remarks.

- [Correctness] Problem 5.22 hint: from eq. (5.92) the $\eta$ is $\tfrac16u\bar u$, $\tfrac16d\bar d$ and $\tfrac23s\bar s$ (probabilities sum to 1), not $\tfrac13s\bar s$.
- [Correctness] Problem 5.23(b) "only $B(b\bar u)$ and $\Upsilon(b\bar b)$ have been detected" is outdated ($B^*$, $B_s$, $B_s^*$, $B_c$, $\eta_b$ are observed), and the $F$, $F^*$ mesons are now called $D_s$, $D_s^*$.
- [Correctness] Symbol clashes: the quantity table gives $\mechanical{m}$ as both projection quantum number and mass, and Problem 5.12 uses $\alpha$ for a proportionality constant next to the fine-structure $\alpha$; rename (for example $m_l$ and $k$).

### N3059

Note: [[6.1 Lifetimes and Cross Sections|6.1 Lifetimes and Cross Sections]]  
Priority: medium · Graph: yes · Manim: yes

Clear and correct introduction to decay rates and cross sections (Examples 6.1–6.4 check), which would profit from plots and a trajectory animation.

- [Simplify] The text calls the incident flux (particles per area per time) "luminosity"; add a note that in accelerator usage luminosity is flux times the number of target particles, so "event rate = cross section × luminosity" holds in that sense.
- [Simplify] $dN$ means a number of decays in (6.1) but a rate per unit time in the beam formula; use a distinct symbol (for example $d\dot N$) for the scattered rate.
- [Graph] Plot $D(\theta)$ for hard-sphere ($R^2/4$, constant) and Rutherford ($\propto1/\sin^4(\theta/2)$, scaled to equal value at $\theta=90^\circ$) for $\theta\in[5^\circ,180^\circ]$ on a log $y$ axis.
- [Graph] Plot $N(t)/N_0=e^{-t/\tau}$ for $t\in[0,5\tau]$ with $t=\tau$ ($1/e$) marked, next to eqs. (6.2)–(6.3).
- [Manim] Animate a row of incident particles with evenly spaced impact parameters bouncing off a hard sphere and, separately, following Coulomb hyperbolae, so the $b\to\theta$ mapping and the area-to-solid-angle idea of Fig. 6.3 are seen directly.

### N3060

Note: [[6.2 The Golden Rule|6.2 The Golden Rule]]  
Priority: medium · Graph: yes · Manim: no

Correct derivations of the two-body decay and scattering formulas (6.23, 6.30–6.32, 6.37, 6.42 check), with two transcription slips.

- [Correctness] In (6.25) the second denominator root reads $\sqrt{m_3^2c^2+\mathbf p_2^2}$; after the substitution it must be $\sqrt{m_3^2c^2+\rho^2}$.
- [Correctness] After (6.41): "the same as in equation (6.25), with $m_2\to m_4$ and $m_1\to(E_1+E_2)/c^2$" should read $m_2\to m_3$, $m_3\to m_4$, $m_1\to(E_1+E_2)/c^2$.
- [Example] Apply (6.31)–(6.32) to $\pi^+\to\mu^++\nu_\mu$: $\lvert\mathbf p\rvert=(m_\pi^2-m_\mu^2)c/(2m_\pi)=29.8$ MeV/c.
- [Graph] Plot $\lvert\mathbf p\rvert/(m_1c)$ from (6.31) versus $m_2/m_1\in[0,1]$ for $m_3=0$ and versus $m_2/m_1\in[0,0.5]$ for $m_3=m_2$, showing the closing of phase space at threshold.
- [Intuition] Explain that $d^3\mathbf p/(2E)$ is the Lorentz-invariant phase-space element, which is why the factors are grouped as in (6.15).

### N3061

Note: [[6.3 The Feynman Rules for a Toy Theory|6.3 The Feynman Rules for a Toy Theory]]  
Priority: low · Graph: no · Manim: no

Clear statement of the six ABC-theory rules; correct, but abstract until the next note.

- [Example] Apply the rules at once to the lowest-order $A\to B+C$ diagram: one vertex gives $-ig(2\pi)^4\delta^4(p_1-p_2-p_3)$, no internal lines, so $\mathcal M=g$.
- [Intuition] Add one sentence on why the propagator $i/(q^2-m^2c^2)$ grows as $q^2\to m^2c^2$ (virtual particle near its mass shell, origin of resonances).
- [Simplify] Connect the dimension of $g$ (momentum) to eq. (6.44): a three-line amplitude has dimension $(mc)^{1}$, which is consistent with $\mathcal M=g$.

### N3062

Note: [[6.4 Lifetime of the A|6.4 Lifetime of the A]]  
Priority: low · Graph: yes · Manim: no

Short, correct worked example (eqs. 6.45-6.48 and the table units check out), but it leaves the promised unit check and any physical feel for the result to the reader.

- [Example] Add the unit check the text asks for: with $[g]=[\mathcal M]=$ momentum (from eq. 6.44, $n=3$), $g^2|\mathbf p|/(\hbar m_A^2 c)$ has units $\mathrm{s^{-1}}$; show it in two lines.
- [Intuition] State the limits of eq. 6.47: $|\mathbf p|\to0$ (and $\tau\to\infty$) at threshold $m_A=m_B+m_C$, and $|\mathbf p|=m_Ac/2$ when $m_B=m_C=0$, so the reader sees why phase space controls the lifetime.
- [Graph] 2D plot of $\Gamma/\Gamma_{\max}=2|\mathbf p|/(m_Ac)$ against $m_B/m_A$ for $m_C/m_A\in\{0,0.2,0.4\}$, $m_B/m_A$ from 0 to $1-m_C/m_A$, showing the closing of phase space at threshold.
- [Structure] The file starts with a UTF-8 BOM (bytes EF BB BF); save it as UTF-8 without BOM as the vault rules require.

### N3063

Note: [[6.5 Scattering|6.5 Scattering]]  
Priority: medium · Graph: yes · Manim: no

Faithful transcription of the AA to BB example; the algebra of eqs. 6.50-6.54 checks out, but one equation drops a square and the CM kinematics behind eqs. 6.51-6.52 are skipped.

- [Correctness] Eq. (6.49) reads $g^2/[(p_4-p_2)-m_C^2c^2]$; the propagator needs the square: $\mathcal M=g^2/[(p_4-p_2)^2-m_C^2c^2]$.
- [Correctness] In eqs. (6.53)-(6.54) the unbold $p^2$ means $|\mathbf p|^2$, while elsewhere in the note unbold $p_i$ are four-momenta (for which $p^2=m^2c^2$); write $|\mathbf p|^2$ there to avoid the clash.
- [Simplify] Before eq. (6.51) write the CM four-momenta explicitly, $p_{1,2}=(E/c,\pm\mathbf p)$, $p_{3,4}=(E/c,\pm\mathbf p')$ with $|\mathbf p'|=|\mathbf p|$ and $\mathbf p\cdot\mathbf p'=|\mathbf p|^2\cos\theta$, and show $p_2\cdot p_4=E^2/c^2-|\mathbf p|^2\cos\theta$; then 6.51-6.53 follow in one line each.
- [Intuition] Explain the $1/\sin^4\theta$ result: the two diagrams are $t$- and $u$-channel exchanges of a massless C, giving forward and backward poles, which is why the total cross section diverges (as for Rutherford); mention the $S=1/2$ factor for identical B's.
- [Graph] 2D plot of $d\sigma/d\Omega$ in units of $\tfrac12(\hbar c g^2/16\pi E|\mathbf p|^2)^2$, i.e. $1/\sin^4\theta$, for $\theta\in[10^\circ,170^\circ]$ on a log y axis, overlaid with the $t$-channel-only term $1/[4(1-\cos\theta)^2]$ to show each diagram's pole.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N3064

Note: [[6.6 Higher-Order Diagrams|6.6 Higher-Order Diagrams]]  
Priority: medium · Graph: yes · Manim: no

Clear narrative on loops and renormalization with correct prefactors in eq. 6.57, but eq. 6.55 has a wrong propagator momentum and the power-counting step glosses over the Minkowski-versus-Euclidean measure.

- [Correctness] Eq. (6.55): the third denominator factor is $(q_1^2-m_B^2c^2)$; it must be $(q_3^2-m_B^2c^2)$ (the B line in the loop carries $q_3$, as eq. 6.56 then correctly shows).
- [Simplify] Add one line counting the factors in 6.55: $(-ig)^4=g^4$, $i^4=1$ from four propagators, and $(2\pi)^{16}$ from four delta functions cancels $(2\pi)^{-16}$ from four integrations; then explain that the leftover $\delta^4$ needs a $(2\pi)^4$ to be erased, which produces the $i(g/2\pi)^4$ in 6.57.
- [Intuition] Note that $d^4q=q^3\,dq\,d\Omega'$ in eq. 6.58 is meant after a Wick rotation to Euclidean momentum (in Minkowski space $q^2$ is not positive-definite); the power-counting conclusion (four powers up, four down, log divergence) is unchanged.
- [Intuition] After eq. 6.59 show why the factor tames the integral: it adds two more powers of $q$ in the denominator, so the integrand falls as $1/q^6$ and the regulated result grows only like $\ln M$.
- [Graph] Log-x 2D plot of the cutoff integral $I(\Lambda)=\int_0^\Lambda q^3dq/(q^2+m^2)^2$ against $\Lambda/m$ from 1 to $10^6$, compared with $\ln(\Lambda/m)$, to make "logarithmically divergent" concrete.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N3065

Note: [[6.B References and Notes|6.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list for Chapter 6; no change needed beyond file encoding.

- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N3066

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/06 The Feynman Calculus/6.P Problems|6.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem list with correct equation references and supplied answers (6.8-6.10 rechecked, including the Compton limit of 6.10b); only small table and encoding issues.

- [Links] Turn the in-text equation references (eq. 6.23, 6.31, 6.34, 6.36, 6.44) into wiki links to \[\[6.2 The Golden Rule\]\] (and \[\[6.1 Lifetimes and Cross Sections\]\] for eqs. 6.2 and 6.3) so readers can jump to the cited formula.
- [Structure] Drop the table row with symbol "—" for "Given elapsed times" (it names no symbol), and remove the UTF-8 BOM at the start of the file.

### N3067

Note: [[7.1 The Dirac Equation|7.1 The Dirac Equation]]  
Priority: medium · Graph: no · Manim: no

Correct and well-motivated derivation of the Dirac equation, though the step from the anticommutator conditions to explicit $4\times4$ matrices is asserted rather than shown.

- [Structure] The text says the operator acts on "the wave function, $\psi$" but eq. (7.3) uses $\Psi$; use one symbol (and list only that one in the table).
- [Example] After eq. (7.17) add a short check that $(\gamma^0)^2=1$, $(\gamma^i)^2=-1$ and $\{\gamma^0,\gamma^i\}=0$ using $\sigma_i^2=1$ and the block form, so the reader sees eq. (7.15) is satisfied.
- [Intuition] Explain briefly why $2\times2$ matrices cannot work: at most three mutually anticommuting $2\times2$ matrices exist (the Pauli matrices), but four are needed, and the dimension must be even; this motivates the four-component spinor.
- [Intuition] Next to the remark on the KG equation's statistical interpretation, give the reason in one line: the conserved KG density $\rho\propto i(\psi^*\partial_t\psi-\psi\partial_t\psi^*)$ is not positive-definite because the equation is second order in time.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N3068

Note: [[7.2 Solutions to the Dirac Equation|7.2 Solutions to the Dirac Equation]]  
Priority: medium · Graph: yes · Manim: no

Careful step-by-step solution of the free Dirac equation (normalization 7.47 and the $v$ spinors 7.50 check out), but one case in eq. 7.43 has the wrong seed spinor and the physical meaning of the small components is left implicit.

- [Correctness] Eq. (7.43), case (3): "Pick $u_B=(0,1)^T$" must be $u_B=(1,0)^T$; the right-hand side already uses $(\mathbf p\cdot\boldsymbol\sigma)(1,0)^T$, and $u^{(3)}$ in eq. (7.46) has lower components $(1,0)$.
- [Intuition] After eq. (7.46) note that the lower components of $u^{(1)},u^{(2)}$ are of order $|\mathbf p|c/(E+mc^2)\approx v/2c$, so for slow electrons the Dirac spinor reduces to a Pauli two-spinor; this links back to the rest solutions (7.30).
- [Example] Show the normalization check for $u^{(1)}$: $u^\dagger u=N^2[1+c^2\mathbf p^2/(E+mc^2)^2]=N^2\,2E/(E+mc^2)$, which equals $2E/c$ for $N^2=(E+mc^2)/c$; it takes two lines and removes the forward reference to Problem 7.3.
- [Graph] 2D plot of the ratio of lower to upper component magnitudes, $|\mathbf p|c/(E+mc^2)=\sqrt{(\gamma-1)/(\gamma+1)}$, against $\beta=v/c$ from 0 to 1, showing it grows from 0 to 1 (nonrelativistic to ultrarelativistic).
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N3069

Note: [[7.3 Bilinear Covariants|7.3 Bilinear Covariants]]  
Priority: medium · Graph: no · Manim: no

Clear account of adjoint spinors and bilinear covariants (eqs. 7.53, 7.57, 7.64-7.67 and the unit of $a$ check out) with one typo in an explicit sum.

- [Correctness] Eq. (7.55): the right-hand side reads $|\psi_3|^2+|\psi_2|^2+|\psi_3|^2+|\psi_4|^2$; the first term must be $|\psi_1|^2$.
- [Example] Add the two-line derivation of eq. (7.57): $S$ is Hermitian and $(\gamma^0\gamma^1)^2=1$, so $S^2=(a_+^2+a_-^2)+2a_+a_-\gamma^0\gamma^1=\gamma-\gamma(v/c)\gamma^0\gamma^1$; likewise $\gamma^0$ anticommutes with $\gamma^0\gamma^1$, which gives $S^\dagger\gamma^0S=\gamma^0$.
- [Intuition] Draw the analogy explicitly: $\gamma^0$ in $\bar\psi=\psi^\dagger\gamma^0$ plays the role of the metric that lowers an index, which is why $\bar\psi\psi$ is invariant while $\psi^\dagger\psi$ is the time component of the current $\bar\psi\gamma^\mu\psi$.
- [Structure] Add a compact table of the five bilinears (7.68) with columns: matrix, number of components, Lorentz character, sign under parity; and remove the UTF-8 BOM at the start of the file.

### N3070

Note: [[7.4 The Photon|7.4 The Photon]]  
Priority: medium · Graph: no · Manim: yes

Correct and readable route from Maxwell's equations to transverse photon polarization, with minor macro and notation inconsistencies and a gauge naming that deserves a clarifying remark.

- [Correctness] The spin quantum numbers $s$ and $m_s$ are wrapped in `\mechanical{}` (so $m_s$ reads like a mass); they are dimensionless quantum numbers and should be left uncolored, also in the table.
- [Structure] The polarization basis is written $\boldsymbol\epsilon_{(1)},\boldsymbol\epsilon_{(2)}$ in eq. (7.92) but $\boldsymbol\epsilon_1,\boldsymbol\epsilon_2$ in the footnote; use one form and list it once in the table.
- [Intuition] After eq. (7.86) add that $A^0=0$ together with $\nabla\cdot\mathbf A=0$ is possible only in source-free space (often called radiation gauge); with charges present the Coulomb gauge keeps $\nabla\cdot\mathbf A=0$ but $A^0$ is the instantaneous Coulomb potential.
- [Simplify] Show the substitution step behind eqs. (7.89) and (7.90): $\partial_\mu\to-(i/\hbar)p_\mu$ on the plane wave turns $\square A^\mu=0$ into $p^2=0$ and $\partial_\mu A^\mu=0$ into $p\cdot\epsilon=0$.
- [Manim] Animate a plane wave along $z$ with the field vector traced for $\boldsymbol\epsilon_{(1)}$, $\boldsymbol\epsilon_{(2)}$ and the circular combinations $\boldsymbol\epsilon_\pm$, showing that the vector stays in the $xy$ plane (transverse) and rotates for helicity $\pm1$.
- [Structure] The file starts with a UTF-8 BOM; save it as UTF-8 without BOM.

### N3071

Note: [[7.5 The Feynman Rules for Quantum Electrodynamics|7.5 The Feynman Rules for Quantum Electrodynamics]]  
Priority: medium · Graph: no · Manim: no

A faithful, correct reference statement of the QED Feynman rules, but it is a dense list with no worked mini-example or intuition for why each factor appears.

- [Structure] The file starts with a UTF-8 BOM before the frontmatter `---`; save it as UTF-8 without BOM (same for every note in this folder).
- [Intuition] After rule 2, add one sentence explaining the pattern of the external-line table: the fermion line is read against the arrow, so the line ends give $\bar u$ or $\bar v$ (adjoint) and the line starts give $u$ or $v$, which is why an incoming positron gets $\bar v$.
- [Example] After rule 8, add a three-line "recipe check" that applies rules 1–7 to the single electron–muon diagram and shows how $i\cdot i\cdot(-i)$ produces the overall minus in (7.104), linking forward to \[\[7.6 Examples#Example 7.1 Electron–Muon Scattering\]\].
- [Simplify] Rule 5 and footnote `ep-7-5-arrows`: state the momentum convention once as a short rule ("momentum flows along the arrow except on external positron lines, where it flows against it") instead of the nested parenthetical.
- [Links] Section references in the text ("Section 7.2", equations (7.46), (7.50), (7.92)) are plain text; link them to \[\[7.2 Solutions to the Dirac Equation\]\] and \[\[7.4 The Photon\]\], and link "the final section of this chapter" to \[\[7.9 Renormalization\]\].

### N3072

Note: [[7.6 Examples|7.6 Examples]]  
Priority: medium · Graph: no · Manim: no

The four amplitudes and their relative signs are correct, but the step from the integral to $\mathcal M$ and the reasons for adding versus subtracting diagrams are compressed.

- [Simplify] Example 7.1: show the one intermediate line of the "trivial" $q$ integration, i.e. that $\delta^4(p_1-p_3-q)$ sets $q=p_1-p_3$, leaving $(2\pi)^4\delta^4(p_1+p_2-p_3-p_4)$, and that $i\cdot i\cdot(-i)=i$ gives $-i\mathcal M=i g_e^2(\dots)/q^2$, hence the minus sign in (7.104).
- [Intuition] Example 7.2: add one sentence that the relative minus sign is the Pauli principle (the amplitude must be antisymmetric under $p_3,s_3\leftrightarrow p_4,s_4$), and note the forward and backward peaks from the $1/(p_1-p_3)^2$ and $1/(p_1-p_4)^2$ poles.
- [Intuition] Example 7.3: label the two Bhabha diagrams as $t$-channel (scattering) and $s$-channel (annihilation) and explain why the annihilation term is suppressed by $(v/c)^2$ at low energy, connecting to footnote `ep-7-6-classical-limit`.
- [Simplify] Example 7.4: state explicitly that in Fig. 7.6 the electron first emits photon 3 and then absorbs photon 2 (so $q=p_1-p_3$), while in Fig. 7.7 it first absorbs photon 2 ($q=p_1+p_2$); this makes the different orders of $\not\epsilon(2)$ and $\not\epsilon(3)^*$ in (7.110) and (7.111) obvious.
- [Links] Link "rule 8" and the Feynman rules to \[\[7.5 The Feynman Rules for Quantum Electrodynamics\]\], and "cross-section formula (6.34)" in the footnote to the Chapter 6 note where (6.34) is defined.

### N3073

Note: [[7.7 Casimir's Trick and the Trace Theorems|7.7 Casimir's Trick and the Trace Theorems]]  
Priority: medium · Graph: no · Manim: no

Casimir's trick, the trace theorems, and the electron–muon result (7.126) are correct, but the final contraction step is skipped and the book footnote number is a dead superscript.

- [Links] `<sup>5</sup>` after "Casimir was apparently the first one to use it" is an unlinked book footnote number; replace it with an Obsidian footnote or a link to \[\[7.B References and Notes\]\] (reference 5).
- [Example] Between (7.125) and (7.126), show the contraction explicitly: write the product of the two brackets term by term ($2(p_1\cdot p_2)(p_3\cdot p_4)+2(p_1\cdot p_4)(p_2\cdot p_3)$, the $g^{\mu\nu}$ cross terms, and $g^{\mu\nu}g_{\mu\nu}=4$) so the reader can check the coefficients $8$, $-1$, $-1$, $+2$ in (7.126).
- [Intuition] Before (7.119), add one sentence of motivation: summing over unobserved spins turns a product of spinors into $\sum_s u\bar u=\not p+mc$, a $4\times4$ matrix, so only traces of $\gamma$ matrices remain and no explicit spinor is ever needed.
- [Simplify] Contraction theorems 6–9: add a one-line proof of rule 7 from rule 5 ($\gamma_\mu\gamma^\nu\gamma^\mu=(2g^\nu_\mu-\gamma^\nu\gamma_\mu)\gamma^\mu=2\gamma^\nu-4\gamma^\nu$) as a template for the others.
- [Structure] The footnote `[^ep-7-7-permutations]` sits alone on its own line after the $\epsilon$ definition; attach it to the sentence that introduces the $\epsilon^{\mu\nu\lambda\sigma}$ definition so the reference reads naturally.

### N3074

Note: [[7.8 Cross Sections and Lifetimes|7.8 Cross Sections and Lifetimes]]  
Priority: medium · Graph: yes · Manim: no

The Mott/Rutherford derivation and the long singlet-annihilation calculation check out (including (7.151)–(7.160), (7.165), and the para-positronium rate), but the note is long and lacks a roadmap, plots, and working footnote links.

- [Graph] Example 7.7: plot the ratio of (7.128) to the Rutherford form $(\alpha\hbar mc/(2p^2\sin^2(\theta/2)))^2$, i.e. $1+(p/mc)^2\cos^2(\theta/2)$ in momentum form, versus $\theta\in[0.1,\pi]$ for $|\mathbf p|/(mc)=0.1,1,3$, together with the absolute $d\sigma/d\Omega$ on a log axis, to show the $\sin^{-4}(\theta/2)$ forward peak and the spin (magnetic) correction.
- [Structure] Example 7.8 spans (7.130)–(7.160); add a short roadmap at its start (1. simplify with $p_1\cdot\epsilon=p_3\cdot\epsilon=0$ and the Dirac equation, 2. reduce to the $\boldsymbol\Sigma$ form (7.146), 3. insert singlet fermion spins, 4. insert photon helicities) so the reader knows where each block leads.
- [Links] `<sup>6</sup>` after "the total cross section is $4\pi$ times this" is a dead book footnote number; link it to \[\[7.B References and Notes\]\] (reference 6). Also link "equation (6.42)", "Problem (6.8)", and "eq. (5.84)" to the Chapter 6 and Chapter 5 notes.
- [Intuition] After (7.169), add the closing number: with $|\psi(0)|^2=1/(\pi(2a_0)^3)$ and $a_0=\hbar/(mc\alpha)$, $\Gamma=\alpha^5mc^2/(2\hbar)\approx8.0\times10^9\,\mathrm{s^{-1}}$, i.e. $\tau\approx1.25\times10^{-10}\,\mathrm{s}$, so the reader sees the payoff of the whole calculation.
- [Simplify] Around (7.161): say explicitly why no $S=\tfrac12$ appears for the two identical photons when integrating over $4\pi$, since the reader just learned in 7.6 that identical final particles carry $S$; this is the subtle point the book defers to its reference 6.

### N3075

Note: [[7.9 Renormalization|7.9 Renormalization]]  
Priority: high · Graph: yes · Manim: no

The renormalization argument and the numbers ((7.181), (7.186), (7.188), the $6\times10^{-6}$ estimate) are correct, but one Dirac-equation line is mistranscribed and the key figure is a raster scan rather than a native plot.

- [Correctness] Before (7.177): "$\not p_1 u(p_1)=mc,\ \bar u(p_3)\not p_3=u(p_3)mc$" is wrong (a spinor cannot equal a scalar, and the bar is lost); it must read $\not p_1u(p_1)=mc\,u(p_1)$ and $\bar u(p_3)\not p_3=mc\,\bar u(p_3)$, which then gives $\bar u(p_3)\not q\,u(p_1)=0$.
- [Graph] Replace the PNG Fig. 7.11 (`elementary-particles-fig-7-11-source-plot.png`) with a native plot of $f(x)=6\int_0^1z(1-z)\ln(1+xz(1-z))\,dz$ for $x\in[10^{-2},10^{3}]$ on a log $x$ axis, together with $x/5$ and $\ln x$ (and optionally $\ln x-5/3$, the true large-$x$ asymptote).
- [Graph] Add a plot of the running coupling (7.188), $1/\alpha(q^2)$ versus $\log_{10}(-q^2/m^2c^2)$ from $10^{-2}$ to $10^{10}$, marking the head-on $v=c/10$ point of Problem 7.41 (correction $\approx6\times10^{-6}$), and note that the measured $1/\alpha\approx128$ at the $Z$ mass also includes muon, tau, and quark loops.
- [Simplify] (7.178)–(7.180): the letter $x$ is first a mass-squared integration variable in $\int_{m^2}^{\infty}dx/x$ and then the dimensionless argument of $f(x)$; rename the dummy variable (e.g. $\int_{m^2}^{\infty}d\kappa^2/\kappa^2$) and say that the $c^2$ factors are suppressed in those limits.
- [Intuition] Point 2: add the physical picture: virtual pairs act as a polarizable dielectric, so at large distance (small $|q^2|$) the charge is screened and $\alpha(0)\approx1/137.036$, while probing closer (large $|q^2|$) sees more of the bare charge, hence $\alpha$ grows.
- [Links] Dead superscripts `<sup>7</sup>` and `<sup>8</sup>` should link to \[\[7.B References and Notes\]\]; "Chapter 2" and "Chapter 6" should link to the corresponding notes; "Section 7.6" should link to \[\[7.6 Examples\]\].

### N3076

Note: [[7.B References and Notes|7.B References and Notes]]  
Priority: low · Graph: no · Manim: no

A short, accurate reference list; no change needed beyond making it reachable from the dead footnote superscripts in 7.7–7.9.

- [Links] Add block IDs (e.g. `^ref-5` to `^ref-8`) to references 5–8 so the `<sup>5</sup>`–`<sup>8</sup>` markers in \[\[7.7 Casimir's Trick and the Trace Theorems\]\], \[\[7.8 Cross Sections and Lifetimes\]\], and \[\[7.9 Renormalization\]\] can link directly to them.

### N3077

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/07 Quantum Electrodynamics/7.P Problems|7.P Problems]]  
Priority: low · Graph: no · Manim: no

A clean problem list whose supplied answers check out (7.7 normalization, 7.33 identities, 7.34–7.36 cross sections), apart from one wrong denominator in a hint.

- [Correctness] Problem 7.34 hint: the interference term must have denominator $4(p_1-p_3)^2(p_1-p_4)^2$, because $\mathcal M_2$ in (7.105) carries $1/(p_1-p_4)^2$; the written $(p_2-p_4)^2$ equals $(p_1-p_3)^2$ and would repeat the first propagator instead.
- [Links] "Compare the answers to Problems 7.35 and 7.36. (See footnote page 234)" points to a printed page; link it to the classical-limit footnote in \[\[7.6 Examples\]\] instead, and link "Halzen and Martin, ref. 7" and "ref. 3" to \[\[7.B References and Notes\]\].
- [Structure] Problem 7.44(a) has a stray closing parenthesis in "$e^++e^-\to\gamma+\gamma$)"; remove it.

### N3078

Note: [[8.1 Electron-Quark Interactions|8.1 Electron-Quark Interactions]]  
Priority: low · Graph: no · Manim: no

Short, clear chapter introduction that names the two processes (e+e- to hadrons, deep inelastic scattering) with their basic diagrams.

- [Links] Turn the plain-text references into wiki links: "Chapter 7" to \[\[7.5 The Feynman Rules for Quantum Electrodynamics\]\], and point the two diagrams to \[\[8.2 Hadron Production in e⁺e⁻ Scattering\]\] and \[\[8.4 Inelastic Electron-Proton Scattering\]\] / \[\[8.5 The Parton Model and Bjorken Scaling\]\] so the intro works as a chapter hub.
- [Intuition] Add one sentence that the two diagrams are crossing-related versions of the same QED vertex pair (annihilation in the s-channel vs. photon exchange in the t-channel), which is why the same QED machinery covers both.

### N3079

Note: [[8.2 Hadron Production in e⁺e⁻ Scattering|8.2 Hadron Production in e⁺e⁻ Scattering]]  
Priority: medium · Graph: yes · Manim: no

Faithful and readable transcription of the R-ratio argument, but it carries an index error in eq. (8.2), a GeV/MeV slip, and 1987-era statements about the top quark and the SLC presented as current.

- [Correctness] Eq. (8.2): the second trace is written $\operatorname{Tr}[\gamma^\mu(\not p_4-Mc)\gamma^\nu(\not p_3+Mc)]$ with upper indices, so the two traces are not contracted; it must be $\operatorname{Tr}[\gamma_\mu(\not p_4-Mc)\gamma_\nu(\not p_3+Mc)]$ (compare eq. 7.124).
- [Correctness] In the paragraph after eq. (8.11): "an underestimate in the region above $1784\,\mathrm{GeV}$" must be $1784\,\mathrm{MeV}$ (the tau threshold, as stated correctly earlier in the note and in the footnote).
- [Correctness] Outdated statements presented as current: "By 1987 the Linear Collider at SLAC should be operating" and "evidently its [top] mass exceeds $18\,\mathrm{GeV}/c^2$"; add a callout that SLC/LEP ran from 1989, the top was discovered in 1995 with $m_t\approx172.6\,\mathrm{GeV}/c^2$ (PDG), so the $R=5$ step lies above $2E\approx345\,\mathrm{GeV}$ and was never seen in $e^+e^-\to$ hadrons, and that near $2E\approx91\,\mathrm{GeV}$ $Z^0$ exchange dominates.
- [Graph] Plot the predicted staircase $R(E)$ versus beam energy $E$ (0.5 to 20 GeV) using eq. (8.5) with the electron mass dropped, $R=3\sum_i Q_i^2\sqrt{1-(M_ic^2/E)^2}[1+\tfrac12(M_ic^2/E)^2]$, with $M_uc^2\approx M_dc^2\approx0$, $M_sc^2\approx0.5$, $M_cc^2\approx1.5$, $M_bc^2\approx4.7\,\mathrm{GeV}$, plus dashed horizontal lines at 2, 10/3, 11/3 and the no-color curve (divided by 3), to show the smoothed corners the text mentions.
- [Simplify] State explicitly right before eq. (8.8) that the muon-pair cross section is eq. (8.6) with $Q=1$, so $R$ is the ratio of two copies of (8.6) and all kinematic factors cancel; the current "equation (8.6) gives" leaves this step implicit.
- [Intuition] Add a one-line limiting case of eq. (8.4): for $E\gg Mc^2$ it becomes $Q^2g_e^4(1+\cos^2\theta)$, the angular distribution of spin-1/2 pair production, which is also the experimental signature that quarks carry spin 1/2 in two-jet events.

### N3080

Note: [[8.3 Elastic Electron-Proton Scattering|8.3 Elastic Electron-Proton Scattering]]  
Priority: medium · Graph: yes · Manim: no

The tensor construction leading to the Rosenbluth formula is clear and the algebra checks out, but the current-conservation condition is misprinted and the form factors are never connected to the plotted $G_E$, $G_M$.

- [Correctness] Eq. (8.16) reads $q_\mu K^{\mu\nu}=1$; it must be $q_\mu K^{\mu\nu}=0$ (current conservation; Problem 8.4's hint and eq. 8.30 use 0, and eq. 8.17 follows only from 0).
- [Correctness] Footnote ep-8-3-regimes cites "The Mott formula (7.127)"; in the vault eq. (7.127) is the amplitude and the Mott formula is eq. (7.128) (as Problem 8.10 correctly cites).
- [Correctness] Symbol clash: bare $K$ (proton anomalous magnetic moment, factor $1+K$ in the Fig. 8.4 caption and table) shares its letter with the form factors $K_1,K_2,K_4,K_5$ and the tensor $K^{\mu\nu}$; rename it $\kappa_p$ (value 1.7928) here and in 8.B.
- [Structure] Add a short bridge after eq. (8.23) giving the conversion used in Fig. 8.4: $K_1=-q^2G_M^2$, $K_2=(2Mc)^2(G_E^2+\tau G_M^2)/(1+\tau)$ with $\tau=-q^2/(4M^2c^2)$, so the reader can relate the Rosenbluth formula to the plotted $G_E$, $G_M$ and the point-proton limit $G_E=G_M=1$.
- [Graph] Plot the dipole form factor $G_d(Q^2)=(1+Q^2/0.71\,\mathrm{GeV}^2)^{-2}$ for $Q^2=0$ to $10\,(\mathrm{GeV}/c)^2$ on a log axis, together with $E'/E$ from eq. (8.21) versus $\theta$ (0 to 180 deg) for $E=0.5,2,10\,\mathrm{GeV}$, to show both the structure falloff and the recoil.
- [Simplify] Before eq. (8.15), say in one sentence why each term is allowed (only $g^{\mu\nu}$ and products of $p,q$ are available) and that dividing by $(Mc)^2$ gives all $K_i$ units of momentum squared; also note that $q\cdot p=-q^2/2$ follows from $(p+q)^2=p^2$.

### N3081

Note: [[8.4 Inelastic Electron-Proton Scattering|8.4 Inelastic Electron-Proton Scattering]]  
Priority: medium · Graph: yes · Manim: no

Correct and well-structured derivation of the inclusive cross section (8.33), dense but logically complete; it would benefit from a kinematic picture of the $(E',\theta)$ plane.

- [Correctness] Symbol clash: $W$ is used for the missing mass in the Fig. 8.5 caption and table ($W=\sqrt{p_{\mathrm{tot}}^2}/c$) and also for the structure functions $W_1,W_2,W_4,W_5$ and the tensor $W^{\mu\nu}$; rename the missing mass (for example $M_X$) or add an explicit warning in the table.
- [Intuition] After eq. (8.34), add $p_{\mathrm{tot}}^2=(p+q)^2=M^2c^2+2q\cdot p\,(1-x)$, which shows directly that $x=1$ is elastic, why $0\le x\le1$, and why larger missing mass means smaller $x$.
- [Graph] Plot the scattered energy $E'$ versus $\theta$ for $E=10\,\mathrm{GeV}$ with curves of constant missing mass $W=0.938$ (elastic, eq. 8.21), 1.232, 1.5, 2, 3 GeV, and overlay contours of constant $x$ (0.1, 0.25, 0.5), to show that inelastic scattering fills a 2D region while elastic scattering is one line.
- [Simplify] Between (8.32) and (8.33), quote the lab-frame intermediate results $q\cdot p=M(E-E')$, $-q^2=(4EE'/c^2)\sin^2(\theta/2)$ and $L^{\mu\nu}W_{\mu\nu}=(4EE'/c^2)[2W_1\sin^2(\theta/2)+W_2\cos^2(\theta/2)]$, so the reader sees how (8.28) turns into (8.33).
- [Example] Sketch the check of eq. (8.35) in the note: insert it into (8.33), convert $\delta(x-1)$ into a delta in $E'$ at fixed $\theta$, and show that the $E'$ integral reproduces (8.23) including the factor $E'/E$; this makes the elastic-as-special-case claim concrete (full details remain Problem 8.12).

### N3082

Note: [[8.5 The Parton Model and Bjorken Scaling|8.5 The Parton Model and Bjorken Scaling]]  
Priority: medium · Graph: yes · Manim: yes

Clear historical and derivational account of scaling and Callan–Gross, with one dimensional error in eq. (8.40) and an under-explained delta-function step.

- [Correctness] Eq. (8.40): $W_2^i=-\frac{2m_ic\,Q_i^2}{q^2}\delta(x_i-1)$ is missing a factor $c$; from (8.35) and (8.36) with $M\to m_i$ it is $W_2^i=-\frac{2m_ic^2Q_i^2}{q^2}\delta(x_i-1)$ (needed for units $\mathrm{g^{-1}}$ and for eq. 8.45, which correctly has $c^2$).
- [Simplify] Between (8.44) and (8.45), show the step $\delta(x/z_i-1)=z_i\,\delta(x-z_i)$ together with $m_i=z_iM$, which is where $1/(2m_i)$ becomes $1/(2M)$ and $m_i$ in $W_2$ becomes $x^2M$; currently "hence" hides the only nontrivial manipulation.
- [Intuition] Explain why scaling signals pointlike constituents: scattering off a pointlike target introduces no length scale, so the structure functions can depend only on the dimensionless ratio $x$, whereas a target of size $a$ brings in a scale $\hbar/a$ and makes the response fall with $-q^2$ as in Fig. 8.4.
- [Graph] Plot $F_2$ versus $-q^2$ at fixed $x=0.25$ for (a) a pointlike-parton model (flat line, as in Fig. 8.6) and (b) an extended constituent with dipole suppression $G_d^2(Q^2)$, $Q^2=0.5$ to $10\,(\mathrm{GeV}/c)^2$, to contrast scaling with the elastic falloff.
- [Manim] Animate the infinite-momentum-frame picture: a boosted proton flattens into a disk of three partons each carrying a fraction $z_i$ of $p$, the virtual photon strikes one parton with $x=z_i$, and the struck parton recoils while the rest move on, illustrating why $x$ equals the struck momentum fraction.
- [Structure] Call $f_i(z_i)$ a probability density (as in the table and in 8.6) rather than "the probability that the $i$th quark carries momentum fraction $z_i$", and state its normalization $\int_0^1f_i\,dz=1$ here where it is first used.

### N3083

Note: [[8.6 Quark Distribution Functions|8.6 Quark Distribution Functions]]  
Priority: medium · Graph: yes · Manim: yes

The momentum and sea-quark sum-rule arithmetic checks out and the gluon-momentum argument is clear, but the sea-quark assumptions are presented without the later data that contradict them.

- [Structure] Add a callout after eq. (8.62) that the symmetric-sea assumption is a 1987 simplification: the NMC Gottfried-sum-rule measurement and Drell–Yan data (E866) show $\bar d(x)>\bar u(x)$, and the strange sea is suppressed relative to $\bar u,\bar d$, so eq. (8.64) is only a rough model.
- [Graph] Plot representative distributions, for example $u_v(x)\propto x^{-0.5}(1-x)^3$ normalized so $\int u_v=2$, $d_v(x)\propto x^{-0.5}(1-x)^4$ with $\int d_v=1$, and a small sea $s(x)\propto x^{-1}(1-x)^7$, shown as $xq(x)$ for $0<x<1$, together with the resulting $F_2(x)$ from eqs. (8.56) and (8.63); this makes Fig. 8.8 reproducible and shows why the sea matters only at low $x$.
- [Manim] Animate the smearing of the naive delta peaks at $x=1/3$ from eq. (8.55) into broad valence distributions, then add the rising low-$x$ sea component and shade the missing momentum fraction $1-0.54$ attributed to gluons.
- [Example] Show the short derivations explicitly: $\int F_2=\tfrac49\int xu+\tfrac19\int xd=(\tfrac89+\tfrac19)\int xd$ for eq. (8.58), and $2\int F_1=1+\tfrac43\int s$ from (8.64) and (8.65) for eq. (8.66), since these are the note's key quantitative results.
- [Intuition] Add the modern comparison: gluons carry about half of the proton momentum at $Q^2\sim10\,(\mathrm{GeV}/c)^2$, consistent with the 54% quark fraction of eq. (8.60), and the integral in (8.66) diverges because $s(x)\sim1/x$ as $x\to0$, which explains the "0.5 to infinity" remark.

### N3084

Note: [[8.B References and Notes|8.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list with a useful notation glossary; the quoted $K_1,K_2,G_E,G_M$ relations agree with the standard Rosenbluth form.

- [Structure] Rename bare $K$ (anomalous moment, 1.7928) to $\kappa_p$ consistently with 8.3 so it is not confused with $K_1,K_2$; otherwise no change needed.

### N3085

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/08 Electrodynamics of Quarks and Hadrons/8.P Problems|8.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem list transcribed cleanly; the supplied answers (8.6, 8.13, 8.14, 8.15) check out.

- [Links] Link equation references to their notes, for example "equation (8.16)" to \[\[8.3 Elastic Electron-Proton Scattering\]\] and "Mott formula (7.128)" to \[\[7.8 Cross Sections and Lifetimes#Example 7.7 Mott and Rutherford Scattering\]\]; note that Problem 8.4 asks to prove (8.16), which is currently misprinted as $q_\mu K^{\mu\nu}=1$ in 8.3.

### N3086

Note: [[9.1 Feynman Rules for Chromodynamics|9.1 Feynman Rules for Chromodynamics]]  
Priority: medium · Graph: no · Manim: no

Faithful and correct transcription of the QCD Feynman rules (λ matrices, structure constants and vertices all check out), but it is a dense list with little guidance on how color factors arise in practice.

- [Correctness] Symbol clash: $\signal{c}$ is the quark color vector (9.3, 9.12, 9.13) while $\mechanical{c}$ is the speed of light in the propagator (9.15) and the table; rename the color vector (for example $\signal{\xi}$) or add an explicit warning next to (9.15).
- [Structure] The four-gluon vertex sentence "(summation over $\eta$ implied." is missing its closing parenthesis; the file also starts with a UTF-8 BOM, which the vault rules forbid.
- [Intuition] Before (9.17), add one sentence on why the vertex carries $\lambda^\alpha/2$: the color part $c_{out}^\dagger\lambda^\alpha c_{in}$ projects the quark color change onto gluon state $|\alpha\rangle$; show it for the pictured $r\to b$ vertex (only $\lambda^1,\lambda^2$ contribute, i.e. gluons $|1\rangle,|2\rangle$ combine to $r\bar b$).
- [Simplify] Add a short summary table comparing QED and QCD rules (coupling $g_e\to g_s/2$, extra color vectors $c$, $a$, matrix $\lambda^\alpha$, new three- and four-gluon vertices) so the reader sees that only the color bookkeeping and the self-interaction are new.
- [Links] Replace the bare references "Section 5.8", "Sect. 7.4", "equation (7.81)" and the superscript reference "1" with wiki links to \[\[5.8 Light Quark Mesons\]\], \[\[7.4 The Photon\]\] and \[\[9.B References and Notes\]\].

### N3087

Note: [[9.2 The Quark-Quark Interaction|9.2 The Quark-Quark Interaction]]  
Priority: medium · Graph: yes · Manim: no

Clear worked color-factor examples with correct final values ($-1/6$, $4/3$, $1/3$, $-2/3$), but two transcription errors in the triplet formulas and stale book page references.

- [Correctness] In the triplet list (9.34) the second state reads "bg-gb)/\sqrt2" with a missing opening parenthesis; it should be $(bg-gb)/\sqrt2$.
- [Correctness] In Example 9.4 the first display has a minus sign before the fourth term $[(0\,1\,0)\lambda^\alpha(0\,1\,0)^T][(1\,0\,0)\lambda^\alpha(1\,0\,0)^T]$; expanding $(rb-br)\otimes(rb-br)$ gives $+\lambda^\alpha_{22}\lambda^\alpha_{11}$ (as the next line correctly has), so the sign must be $+$.
- [Graph] Plot $V(r)/(\alpha_s\hbar c)$ versus $r$ (arbitrary units, $r\in[0.1,3]$) for the four channels: singlet $-\tfrac43/r$, triplet $-\tfrac23/r$, octet $+\tfrac16/r$, sextet $+\tfrac13/r$, to make the "maximally attractive channel" ordering visible at a glance.
- [Example] Add a short cross-check using the identity of Problem 9.9, $\lambda^\alpha_{ij}\lambda^\alpha_{kl}=2\delta_{il}\delta_{jk}-\tfrac23\delta_{ij}\delta_{kl}$, or the Casimir shortcut $f=\pm\tfrac12[C(\text{pair})-C_1-C_2]$ (with $C_3=\tfrac43$, $C_{\bar 3}=\tfrac43$, $C_8=3$, $C_6=\tfrac{10}{3}$, $C_1=0$) that reproduces all four factors in one line.
- [Intuition] The diquark footnote ("speculation about the possible existence of diquarks within nuclei") is dated; add a modern note that diquark correlations are used in hadron spectroscopy and that tetraquark and pentaquark states have been observed (e.g. LHCb pentaquarks 2015, $T_{cc}^+$ 2021).
- [Links] Replace "footnote (*) on p. 284", "footnote, page 234", "(7.104)", "(7.106)" and "Section 5.9" with wiki links to \[\[9.1 Feynman Rules for Chromodynamics\]\], \[\[7.6 Examples\]\] and \[\[5.9 Baryons\]\]; the file also has a UTF-8 BOM to remove.

### N3088

Note: [[9.3 Pair Annihilation in QCD|9.3 Pair Annihilation in QCD]]  
Priority: medium · Graph: no · Manim: no

The derivation is correct (three-gluon vertex momenta, kinematics (9.46)-(9.48), color factor $\sqrt{2/3}$ and rate (9.66) all re-derive), but it is a long algebra chain without a roadmap and with one garbled sentence.

- [Correctness] Symbol clash: $\signal{c}$, $\signal{c_1}$, $\signal{c_2}$ are color vectors while $\mechanical{c}$ is the speed of light in the same equations (9.40)-(9.66); rename the color vectors or warn explicitly.
- [Structure] Add a short roadmap before (9.40): three diagrams, then the at-rest limit, then the spin singlet, then the color singlet, then cross section and $\eta_c$ rate, so the reader knows where the algebra is heading.
- [Simplify] The sentence "Just as the cross section for $e^++e^-\to\gamma+\gamma$ indicated, the positronium decay rate $\Gamma=\sigma v|\psi(0)|^2$" is incomplete; rewrite as "Just as the $e^+e^-\to\gamma\gamma$ cross section gave the positronium decay rate via $\Gamma=\sigma v|\psi(0)|^2$, ...".
- [Intuition] Explain in one sentence why the three-gluon diagram drops out at rest in the spin singlet: it is proportional to $\epsilon_3\cdot\epsilon_4$, while the spin-0 amplitude needs $(\boldsymbol\epsilon_3\times\boldsymbol\epsilon_4)_z$; note that it is still needed for gauge invariance (Problem 9.11).
- [Simplify] Write the meson as $J/\psi$ in "note that $\psi$ and $\Upsilon$ themselves carry spin 1" to avoid confusion with the wave function $\signal{\psi}(0)$ used two lines earlier; remove the UTF-8 BOM.
- [Links] Link "Example 7.8", "(7.137)-(7.168)" and "Problems 9.10-9.13" to \[\[7.6 Examples\]\], \[\[7.8 Cross Sections and Lifetimes\]\], \[\[9.P Problems\]\] and \[\[5.7 Quarkonium\]\].

### N3089

Note: [[9.4 Asymptotic Freedom|9.4 Asymptotic Freedom]]  
Priority: medium · Graph: yes · Manim: no

Formulas (9.67)-(9.71) and the $10^{280}$ MeV Landau-pole estimate are correct, but the running is never shown graphically, the $\Lambda$ range is outdated, and the antiscreening mechanism is left without intuition.

- [Correctness] Eq. (9.72) "100 MeV < $\Lambda c$ < 500 MeV" is outdated; add current values, e.g. $\alpha_s(M_Z)=0.1180\pm0.0009$ (PDG 2024), $\Lambda^{(5)}_{\overline{MS}}\approx 210$ MeV, $\Lambda^{(3)}\approx 340$ MeV, and note that $\Lambda$ depends on the scheme and the number of active flavors.
- [Correctness] "$f$ is the number of flavors (6, in the Standard Model)" is misleading for (9.69): $f$ must be the number of active flavors with $m_q c\lesssim|q|$ (e.g. $f=5$ between $m_b$ and $m_t$), and $\Lambda$ changes at each threshold.
- [Graph] Plot $\alpha_s(Q)$ from (9.71) with $n=3$, $f=5$, $\Lambda c=0.21$ GeV for $Q$ from 1 to 1000 GeV on a log axis, next to $\alpha(Q)$ from (9.68) (rising from 1/137 to roughly 1/128 at 91 GeV once all charged fermions are included) to contrast antiscreening and screening.
- [Intuition] Replace "I do not know of a persuasive qualitative explanation" with the standard picture: the QCD vacuum acts as a color paramagnet; the gluon spin gives a paramagnetic (antiscreening) contribution that outweighs the diamagnetic (screening) one, producing the $-11n$ coefficient, while each quark flavor screens like an electron loop and contributes $+2$.
- [Structure] Remove the physical-quantities row with symbol "—" ("Formal pole energy"), which lists no symbol; remove the UTF-8 BOM; link the superscripts 4-6 and "eq. (7.185)" to \[\[9.B References and Notes\]\] and \[\[7.9 Renormalization\]\].

### N3090

Note: [[9.5 Applications of QCD|9.5 Applications of QCD]]  
Priority: medium · Graph: yes · Manim: no

A short, readable 1980s outlook whose claims about what QCD cannot calculate are now outdated.

- [Correctness] "Why don't we now calculate the neutron-proton mass difference ... or the binding energy of the deuteron?" and "embarrassingly meager" are outdated: lattice QCD+QED has computed the neutron-proton mass difference (Borsanyi et al., Science 347, 1452 (2015)) and the light hadron spectrum to about 1%; add a dated callout with the current status.
- [Intuition] Add a callout that a rigorous proof of confinement and the mass gap is still open (Clay Millennium problem), so the "rigorous proof would be preferable" remark stays accurate today.
- [Graph] Plot $R(\sqrt s)=3\sum_q Q_q^2\,(1+\alpha_s/\pi)$ versus $\sqrt s$ from 1 to 50 GeV, with steps at the c and b thresholds ($2\to10/3\to11/3$ before the QCD correction) to illustrate the "QCD corrections to the $R$ formula".
- [Links] Link "eq. (8.8)" to the corresponding note in the 08 Electrodynamics of Quarks and Hadrons folder and the superscripts 7-9 to \[\[9.B References and Notes\]\]; remove the UTF-8 BOM.

### N3091

Note: [[9.B References and Notes|9.B References and Notes]]  
Priority: low · Graph: no · Manim: no

Reference list, accurate apart from one journal-name transcription error.

- [Correctness] Ref. 6 lists Politzer's review as "*Phys. Rev.* **14C**, 130 (1974)"; the source PDF (and the actual publication) has *Phys. Rep.* **14C**, so it should read *Phys. Rep.*; also remove the UTF-8 BOM.

### N3092

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/09 Quantum Chromodynamics/9.P Problems|9.P Problems]]  
Priority: low · Graph: no · Manim: no

Problem set transcribed cleanly (the Problem 9.9 identity, the Problem 9.12 singlet derivation and the 9/8 answer of 9.13 check out), with a few arithmetic and normalization errors.

- [Correctness] Problem 9.5(a) answer "$\frac{7\cdot6}{3\cdot2\cdot1}=56$" is wrong arithmetic (it equals 7); it should be $\binom83=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$.
- [Correctness] Problem 9.2: with $\signal{c'}=U\signal{c}$ and the given $U$, red $(1,0,0)^T$ maps to $(0,0,1)^T$ (green), so this $U$ takes $r\to g$, $b\to r$, $g\to b$, not "$r\to b$, $b\to g$, $g\to r$"; either use $U=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix}$ or correct the stated mapping.
- [Correctness] Problems 9.6(b), 9.6(c) and 9.8 write the states as "$(r\bar r-b\bar b)\sqrt2$", "$(r\bar r+b\bar b-2g\bar g)\sqrt6$", "$(rb+br)\sqrt2$"; the normalized states are divided by $\sqrt2$, $\sqrt6$, $\sqrt2$ (cf. (9.4), (9.35)).
- [Structure] Use $\signal{\epsilon_3}$ in Problem 9.11 to match the colored notation of 9.3, and remove the UTF-8 BOM.

### N3093

Note: [[10.1 Charged Leptonic Weak Interactions|10.1 Charged Leptonic Weak Interactions]]  
Priority: medium · Graph: yes · Manim: no

A faithful transcription whose algebra checks out (10.12–10.14 re-derived), but the experimental values are from the 1980s and the step from 10.11 to 10.12 is skipped.

- [Correctness] Eq. (10.1) quotes $M_W=82\pm2$ and $M_Z=92\pm2\,\mathrm{GeV}/c^2$; give current values ($M_W\approx80.37$, $M_Z\approx91.19\,\mathrm{GeV}/c^2$) in a short note. "By far the heaviest elementary particles yet detected" is no longer true, because the top quark (~173 GeV) and the Higgs boson (~125 GeV) are heavier.
- [Simplify] Between (10.11) and (10.12), show the CM kinematics: $p_1\cdot p_2=2E^2/c^2$ and $p_3\cdot p_4=(s-m_\mu^2c^2)/2$ with $s=4E^2/c^2$. Also show where the second factor of $\{1-(m_\mu c^2/2E)^2\}$ in (10.13) comes from ($|\mathbf p_f|/|\mathbf p_i|$).
- [Intuition] Add one sentence on why the cross section grows as $E^2$ in the four-fermion limit (10.4). Say that this growth violates unitarity at high energy and that the full propagator (10.3) cures it.
- [Graph] Plot $\sigma(E)/\sigma_0$ from (10.14) against $E$ from the threshold $m_\mu c^2/2\approx52.8$ MeV up to ~1 GeV, i.e. $(E/E_0)^2[1-(m_\mu c^2/2E)^2]^2$. Mark the threshold.
- [Links] Plain-text references such as "Chapter 7", "eq. (7.123)", and "Chap. 4, Sect. 4.6" could become wiki links to the corresponding notes, for example the Casimir's trick and parity-violation notes.

### N3094

Note: [[10.2 Decay of the Muon|10.2 Decay of the Muon]]  
Priority: medium · Graph: yes · Manim: no

The derivation is clear and was verified step by step (10.17–10.39 all consistent), but one symbol is inconsistent and some book-specific and outdated remarks remain.

- [Correctness] Eq. (10.39) writes $G$ while the note defines $G_F$ in (10.38) and uses $G_F$ elsewhere; write $G_F^2$ in (10.39) and drop the table's remark that the equation "prints the symbol G".
- [Links] Footnote ep-10-2-fermi refers to "the footnote (*) on p. 303", a page reference to the printed book; replace it with a wiki link to the V–A footnote in \[\[10.1 Charged Leptonic Weak Interactions\]\].
- [Correctness] "New machines are presently under construction that will run at energies close to $M_Wc^2$" is outdated (LEP2, Tevatron, and LHC have run there). Update it or mark it as historical. $g_w=0.66$ is consistent with the current $M_W$ ($g_w\approx0.653$).
- [Graph] Plot the normalized electron spectrum from (10.35): with $x=2E/m_\mu c^2\in[0,1]$, $d\Gamma/dx\propto x^2(3-2x)$. This shows the peak at the endpoint $E_{\max}=m_\mu c^2/2$.
- [Simplify] Before the integration, say which particle is which (2 = $\bar\nu_e$, 3 = $\nu_\mu$, 4 = $e$). The reader must otherwise infer this from the spinor $v(2)$ in (10.15).

### N3095

Note: [[10.3 Decay of the Neutron|10.3 Decay of the Neutron]]  
Priority: medium · Graph: yes · Manim: no

The calculation is correct (1316 s, 914 s, and 963 s reproduced numerically, and the closed form (10.63) was checked), but the experimental comparison uses data that is decades old, which changes the story's conclusion.

- [Correctness] The experimental lifetime "$898\pm16$ sec" is outdated (PDG: $878.4\pm0.5$ s), and $c_A=1.26\pm0.02$ is now $g_A\approx1.2754$. The claim that 914 s "is now within the error bars" and the footnote's "within 6%" no longer hold (963 s is ~10% above 878 s; even against 898 s the gap was 7%). Add an updated remark.
- [Correctness] The Cabibbo angle $13.1^\circ$ in (10.70) is close to the current $\approx13.0^\circ$ ($|V_{ud}|=0.9737$); state the modern $|V_{ud}|$ in a note, since it enters (10.71) directly.
- [Graph] Plot the electron spectrum (10.62), $E\sqrt{E^2-m_e^2c^4}\,(\Delta mc^2-E)^2$, for $E$ from 0.511 to 1.293 MeV, and optionally the matching Kurie plot, so that the reader can compare it with Fig. 10.2.
- [Simplify] Problem 10.5 hides the expansion that gives (10.61). Add a one-line sketch of how $E_\pm$ from (10.55) are expanded to lowest order in $\epsilon,\delta,\eta,\phi$, or at least state which terms are dropped.
- [Intuition] Explain the factor $\tfrac14(c_V^2+3c_A^2)$ in (10.68): one Fermi (vector, spin-singlet) channel plus three Gamow–Teller (axial, spin-triplet) channels.

### N3096

Note: [[10.4 Decay of the Pion|10.4 Decay of the Pion]]  
Priority: medium · Graph: yes · Manim: no

The derivation (10.74–10.81) is short and was verified, including the ratio $1.283\times10^{-4}$, but the helicity explanation contains one misleading sentence.

- [Correctness] "If the electron were truly massless, then (like the neutrino) it would only exist as a left-handed particle" is wrong. A massless electron would still have both helicities (the photon couples to both); only the $(1-\gamma^5)$ weak vertex selects the left-handed one. Rephrase so that the "More precisely" sentence is the main statement.
- [Graph] Plot $m_l^2(m_\pi^2-m_l^2)^2$ (normalized) against $m_l$ from 0 to $m_\pi$. Mark $m_e$, $m_\mu$, and the maximum at $m_l=m_\pi/\sqrt3\approx80.6$ MeV, so that the helicity suppression is visible next to the phase-space factor.
- [Intuition] Mention that the tree-level ratio $1.28\times10^{-4}$ becomes $1.235\times10^{-4}$ after radiative corrections, in agreement with the current measurement $1.2327(23)\times10^{-4}$. This explains the residual 4% discrepancy.
- [Simplify] In (10.74), say that the trace is (10.9) with the momentum labels changed, contracted with $p^\mu p^\nu$ so that the $\epsilon$ term vanishes; the reader currently has to work out that contraction.

### N3097

Note: [[10.5 Charged Weak Interactions of Quarks|10.5 Charged Weak Interactions of Quarks]]  
Priority: medium · Graph: no · Manim: no

The Cabibbo–GIM–KM story is clear and the numbers check (0.96 and 0.19 reproduced), but several statements about neutrinos, CKM data, and CP violation are outdated physics.

- [Correctness] Footnote ep-10-5-rotation states "all neutrinos are massless" as the reason why there is no lepton mixing. Neutrino oscillations show nonzero masses and a lepton mixing (PMNS) matrix, so add a modern note.
- [Correctness] The KM magnitudes in (10.91) and "only their magnitudes are known" are outdated. Current values: $|V_{ud}|\approx0.974$, $|V_{us}|\approx0.224$, $|V_{ub}|\approx0.0038$, $|V_{cb}|\approx0.041$, $|V_{td}|\approx0.0086$, $|V_{ts}|\approx0.041$. The CP phase is measured ($\gamma\approx66^\circ$), and footnote ep-10-5-generations ("it remains to be seen whether δ is the source of CP violation") should mention the B-factory confirmation.
- [Correctness] Symbol clash: $c_i=\cos\theta_i$ in (10.90) versus the speed of light $c$ used in the same note. Consider writing $\cos\theta_i$, or say that $c_i$ is unrelated to $c$.
- [Intuition] Add a picture of the Cabibbo rotation (10.87) as a rotation of the $(d,s)$ axes by $\theta_C$ in flavor space. Optionally state the Wolfenstein hierarchy $\lambda,\lambda^2,\lambda^3$ to explain why the third-generation mixing is small.
- [Simplify] Example 10.2 says that $f_\pi$ "contained a factor of $\cos\theta_C$", but 10.4 never introduced that factor (it appears only in a footnote ansatz). Make the assumption explicit: $f_K/f_\pi=\tan\theta_C$, and the experimental mismatch is mostly $f_K/f_\pi\approx1.19$.

### N3098

Note: [[10.6 Neutral Weak Interactions|10.6 Neutral Weak Interactions]]  
Priority: high · Graph: yes · Manim: no

The long derivations are well transcribed and mostly correct (10.100–10.117 verified), but there are two real formula errors and many outdated experimental statements.

- [Correctness] Table 10.1, electron row: $c_V=-\frac12+2\sin\theta_w$ is missing the square. It must be $-\frac12+2\sin^2\theta_w$, which is consistent with (10.104) and (10.116).
- [Correctness] Eq. (10.118) is missing a square. On the pole, $\sigma_Z/\sigma_\gamma\cong\frac18(M_Zc^2/\hbar\Gamma_Z)^2$, which gives $\approx166\approx200$ with $\hbar\Gamma_Z=2.5$ GeV as stated in the text; the printed linear form would give only ~4.5.
- [Correctness] Outdated statements: $M_W=82$ and $M_Z=92\,\mathrm{GeV}/c^2$ (now 80.37 and 91.19); "$m_t>23$ GeV" (now 172.6 GeV); SLC and LEP "presently under construction"; and $\tau_Z$ "not yet accurately measured" ($\hbar\Gamma_Z=2.4952$ GeV, $N_\nu=2.984\pm0.008$). Add brief modern notes.
- [Graph] Plot the ratio (10.116) against $2E$ from 10 to 150 GeV on a log y-axis with the bracket = 2, $M_Zc^2=91.19$ GeV, and $\hbar\Gamma_Z=2.50$ GeV (this is Problem 10.22). Optionally add the angular distribution (10.111) to show the forward–backward asymmetry term.
- [Simplify] Between (10.109) and (10.110), give the CM dot products $p_1\cdot p_3=(E/c)^2(1-\cos\theta)$ and $p_1\cdot p_4=(E/c)^2(1+\cos\theta)$, which produce $(1+\cos^2\theta)$ and $-8\cos\theta$.
- [Correctness] The Fig. 10.6 caption says "The neutrino enters from the left", but the reaction is $\bar\nu_\mu+e^-$; write "antineutrino".

### N3099

Note: [[10.7 Electroweak Unification|10.7 Electroweak Unification]]  
Priority: low · Graph: no · Manim: no

A hub note with three correct child links.

- [Structure] No change needed; optionally add a one-line description after each link (chirality, weak isospin/hypercharge, mixing angle).

### N3100

Note: [[10.7.1 Chiral Fermion States|10.7.1 Chiral Fermion States]]  
Priority: medium · Graph: yes · Manim: no

The chirality-versus-helicity explanation is correct (10.120 verified in the Dirac representation) but dense, and the neutrino remark needs updating.

- [Correctness] The footnote ending "as far as we know right-handed neutrinos do not exist at all" should mention that neutrinos have mass. Their chirality is therefore not exactly helicity, and right-handed (sterile) neutrinos are allowed but unobserved.
- [Graph] Plot the helicity content of a left-chiral state against speed: the probabilities of helicity $-1$ and $+1$ are $(1+\beta)/2$ and $(1-\beta)/2$, for $\beta=|\mathbf p|c/E$ from 0 to 1. This makes "approximately so if $E\gg mc^2$" concrete.
- [Example] Add a numerical example: for a 1 MeV electron, compute $\beta$ and the right-handed-helicity admixture of $u_L$, and link it to the suppression in \[\[10.4 Decay of the Pion\]\].
- [Links] Link "Appendix D" in footnote ep-10-7-1-bosons to \[\[Appendix D.0 Feynman Rules\]\], and link eq. (7.48) to its note.
- [Simplify] Table 10.2 would read faster with a column for helicity in the massless limit ($-1$, $+1$, and the reversed assignment for antiparticles), so that the $v_L=\frac12(1+\gamma^5)v$ sign reversal is explained in the table.

### N3101

Note: [[10.7.2 Weak Isospin and Hypercharge|10.7.2 Weak Isospin and Hypercharge]]  
Priority: low · Graph: yes · Manim: no

A correct and readable note (10.141, 10.142, and 10.144 checked) that would gain from an explicit quantum-number table.

- [Structure] Add a table of $T^3$, $Y$, and $Q$ for $\nu_L,e_L,e_R,u_L,d_L,u_R,d_R$ that checks $Q=T^3+Y/2$ in each row. The note currently derives $Y$ only implicitly through (10.144).
- [Graph] A 2D weight diagram with $T^3$ on the x-axis and $Y$ on the y-axis for one generation of chiral fermions, with lines of constant $Q$, would show the doublet and singlet structure at a glance.
- [Simplify] State explicitly that $j_\mu^\pm=j_\mu^1\pm ij_\mu^2$ with $j_\mu^a=\frac12\bar\chi_L\gamma_\mu\tau^a\chi_L$, which links (10.140) to (10.146); 10.7.3 uses this relation without saying where it comes from.

### N3102

Note: [[10.7.3 Electro-Weak Mixing|10.7.3 Electro-Weak Mixing]]  
Priority: low · Graph: yes · Manim: no

A concise, correct derivation (10.151, 10.156, 10.158, and 10.159 verified) with a minor notation inconsistency.

- [Simplify] "The arrow denotes a three-vector in weak isospin space", but the note uses bold $\mathbf W$ and $\mathbf j$, not arrows; change "arrow" to "boldface".
- [Graph] Draw the $(B,W^3)$ plane with the $(A,Z)$ axes rotated by $\theta_w\approx28.7^\circ$ from (10.155), so that the mixing reads as a rotation.
- [Example] Work out one more Table 10.1 entry explicitly (for example the electron $c_V=-\frac12+2\sin^2\theta_w$, $c_A=-\frac12$ from (10.159)) to show how the right-handed component enters through $j^{em}$.
- [Structure] The colors are inconsistent: $A_\mu$ uses \electric{} while $B_\mu$, $W^3_\mu$, and $Z_\mu$ use \signal{}, although (10.155) mixes them. Consider one group for all boson fields.

### N3103

Note: [[10.B References and Notes|10.B References and Notes]]  
Priority: low · Graph: no · Manim: no

A reference list; no change needed.

- [Links] Optionally link "Figure (10.4)" in note 7 to the Fig. 10.4 embed in \[\[10.5 Charged Weak Interactions of Quarks\]\].

### N3104

Note: [[10.P Problems|10.P Problems]]  
Priority: low · Graph: yes · Manim: no

The problem list is faithful; the given answers that were checked are right (10.4, 10.6, 10.9, and the 10.20 branching ratios), with one label inconsistency and one outdated premise.

- [Correctness] Problem 10.1(a) asks for $\langle|\mathcal M|^2\rangle$ and says that it reduces to (10.11), but the printed answer is the spin sum $\sum|\mathcal M|^2$. At $\epsilon=-1$ it gives $4(g_w/M_Wc)^4(p_1\cdot p_2)(p_3\cdot p_4)$, i.e. (10.10). Either relabel to (10.10) or note the extra factor 1/2.
- [Correctness] Problem 10.16 assumes a $T^+(t\bar d)$ meson, but the top quark decays before it hadronizes, so no top mesons exist. Add a note, and likewise note that the "$2m_t<M_Z$" assumptions in 10.20 and 10.21 are counterfactual.
- [Graph] Problem 10.22 asks for a plot of (10.116); the plot could be embedded as a native graph (see the 10.6 suggestion).
- [Structure] Typo in Problem 10.18: "easier to produce then" should be "than".

### N3105

Note: [[11.1 Lagrangian Formulation of Classical Particle Mechanics|11.1 Lagrangian Formulation of Classical Particle Mechanics]]  
Priority: low · Graph: no · Manim: no

A short, correct introduction to the Euler–Lagrange equation.

- [Example] Add one non-Cartesian example (for example a plane pendulum in $\theta$) to show the advantage claimed in the text, or link to the vault's Classical Mechanics Lagrangian notes.
- [Links] Link the Euler–Lagrange equation to the vault's classical-mechanics note on the principle of least action (reference 2 mentions it only in plain text).

### N3106

Note: [[11.2 Lagrangians in Relativistic Field Theory|11.2 Lagrangians in Relativistic Field Theory]]  
Priority: low · Graph: no · Manim: no

Correct and clear; the Proca, Dirac, and Maxwell Euler–Lagrange steps and the Gaussian units in the table were all verified.

- [Simplify] For (11.17), show the one-line derivation (or the factor-of-2 origin from the two identical $F$ factors), because Problem 11.2 is the only pointer.
- [Intuition] After (11.25), add a sentence linking the continuity equation to the gauge invariance discussed in \[\[11.3 Local Gauge Invariance\]\] (a non-conserved $J$ would make $-J\cdot A/c$ change under $A\to A+\partial\lambda$ by more than a divergence).

### N3107

Note: [[11.3 Local Gauge Invariance|11.3 Local Gauge Invariance]]  
Priority: medium · Graph: no · Manim: yes

A clear presentation of the gauge principle (11.29–11.39 verified), with one error in the minimal-coupling footnote.

- [Correctness] Footnote ep-11-3-minimal: "$p_\mu\to p_\mu-i(q/c)A_\mu$" has a spurious $i$. With $p_\mu\leftrightarrow i\hbar\partial_\mu$ and (11.38), $i\hbar\mathcal D_\mu=i\hbar\partial_\mu-(q/c)A_\mu$, so the rule is $p_\mu\to p_\mu-(q/c)A_\mu$.
- [Manim] Animate a row of phase arrows $e^{i\theta(x)}$ at lattice points: a global rotation leaves the neighbor differences unchanged, while a local rotation changes them, and a compensating link field $A$ restores the covariant difference.
- [Intuition] Add one sentence explaining $\mathcal D_\mu$ as a comparison of field values at neighboring points after "parallel transport" by $A$; this makes the factor $iqA/\hbar c$ less arbitrary.
- [Links] Link "Chapter 7 [eq. (7.81)]" and "Table 4.2" to their notes.

### N3108

Note: [[11.4 Yang-Mills Theory|11.4 Yang-Mills Theory]]  
Priority: medium · Graph: no · Manim: no

A good transcription of the non-Abelian construction (11.58–11.61 verified), with a missing matrix in one equation and a loose group statement.

- [Correctness] Eq. (11.62), second line: the interaction term must contain the isospin matrices, $-(q\bar\psi\gamma^\mu\boldsymbol\tau\psi)\cdot\mathbf A_\mu$, which follows from $\mathcal D_\mu$ in (11.56) and agrees with (11.67). As written, $(q\bar\psi\gamma^\mu\psi)\cdot\mathbf A_\mu$ is not a valid dot product.
- [Correctness] Footnote ep-11-4-u2 writes $U(2)=U(1)\otimes SU(2)$. This holds only locally; globally $U(2)\cong[U(1)\times SU(2)]/\mathbb Z_2$, because $-1$ lies in both factors.
- [Simplify] Show the commutator step from (11.60) to (11.61) explicitly with $[\boldsymbol\tau\cdot\mathbf a,\boldsymbol\tau\cdot\mathbf b]=2i\boldsymbol\tau\cdot(\mathbf a\times\mathbf b)$, instead of only citing Problem 4.20.
- [Intuition] Explain physically why $\mathbf F^{\mu\nu}$ needs the $\mathbf A\times\mathbf A$ term: the gauge bosons themselves carry the "charge", so they self-interact. This differs from photons and links to the three- and four-gluon vertices in \[\[11.6 Feynman Rules\]\].

### N3109

Note: [[11.5 Chromodynamics|11.5 Chromodynamics]]  
Priority: low · Graph: no · Manim: no

A short, correct generalization to SU(3) that mirrors 11.4.

- [Correctness] Footnote ep-11-5-u3 writes $U(3)=U(1)\otimes SU(3)$; globally this should be $[U(1)\times SU(3)]/\mathbb Z_3$ (the same caveat as in 11.4).
- [Simplify] State the SU(3) commutator $[\lambda_i,\lambda_j]=2if_{ijk}\lambda_k$ next to (11.84), so that it is clear why (11.83) has the same form as (11.61).

### N3110

Note: [[11.6 Feynman Rules|11.6 Feynman Rules]]  
Priority: low · Graph: no · Manim: no

A correct and clear recipe; the Proca inverse (11.95), the vertex normalizations (11.101) and (11.103), and the expansion (11.104) were all verified.

- [Simplify] In (11.104), say that the first two bracketed terms are equal (so the prefactor is effectively $q/4\pi\hbar c$), and label which line gives the three-gluon and which the four-gluon vertex, instead of "first term"/"second term".
- [Links] Link "(9.18)" and "(9.19)" to the QCD gluon-vertex notes, and "Chapters 6, 7, and 10" to their propagator notes.

### N3111

Note: [[11.7 The Mass Term|11.7 The Mass Term]]  
Priority: medium · Graph: yes · Manim: yes

The idea is clear and the shifted Lagrangian (11.113) is correct, but the exponential toy model is dimensionally inconsistent.

- [Correctness] In (11.105) the term $e^{-(\alpha\phi)^2}$ is dimensionless, while $\mathcal L$ is an energy density, and identifying $\alpha^2=\frac12(mc/\hbar)^2$ makes $\alpha$ an inverse length, so $\alpha\phi$ is not dimensionless. Insert a constant energy density, $\mathcal L=\ldots+\varepsilon_0e^{-(\alpha\phi)^2}$, which gives $(mc/\hbar)^2=2\varepsilon_0\alpha^2$. The table's "—" unit for $\alpha$ hides the problem.
- [Graph] Extend Fig. 11.1 by overlaying the quadratic approximation $\mathcal U\approx-\mu^4/4\lambda^2+\mu^2\eta^2$ near $\phi=+\mu/\lambda$, and the inverted parabola $-\frac12\mu^2\phi^2$ at $\phi=0$, to show the "wrong-sign mass" visually. The label colors (#00bcd4, #9b59b6) also do not match the \signal and \energy macro colors.
- [Manim] Animate a ball placed on the hilltop at $\phi=0$ rolling into one well and oscillating there; the oscillation frequency corresponds to $m=\sqrt2\mu\hbar/c$.
- [Structure] Typo: "has no affect on the field equations" should be "effect".

### N3112

Note: [[11.8 Spontaneous Symmetry-Breaking|11.8 Spontaneous Symmetry-Breaking]]  
Priority: medium · Graph: no · Manim: yes

A good conceptual note with an interactive 3D Mexican-hat figure, but the cubic coupling in (11.120) has the wrong sign.

- [Correctness] Eq. (11.120): with $\eta\equiv\phi_1-\mu/\lambda$ from (11.119), the cubic term is $-\mu\lambda(\eta^3+\eta\xi^2)$, not $+\mu\lambda(\ldots)$. Compare (11.131) in \[\[11.9 The Higgs Mechanism\]\], which correctly has $-\lambda\mu(\eta^3+\eta\xi^2)$ for the same definition. The $+$ sign belongs to the opposite shift $\eta=\phi+\mu/\lambda$ used in (11.113).
- [Manim] On the Mexican-hat surface, animate a ball in the valley doing (a) radial oscillation (the massive $\eta$) and (b) free rolling around the rim (the massless Goldstone $\xi$). This shows the footnote intuition directly.
- [Simplify] Show the short trick for (11.120): with $s=\eta^2+\xi^2+2v\eta$ and $v=\mu/\lambda$ the potential is $\frac14\lambda^2s^2+\text{const}$, which makes the cancellation of the linear term transparent.
- [Structure] The Fig. 11.3 graph3d block is about 40 kB of sampled coordinates. If the plugin allows, define the surface parametrically or as a function so that the note stays editable.

### N3113

Note: [[11.9 The Higgs Mechanism|11.9 The Higgs Mechanism]]  
Priority: high · Graph: no · Manim: no

The narrative is clear and the mass (11.132) is correct, but the key bilinear term is printed as imaginary, and the experimental status is badly outdated.

- [Correctness] Eqs. (11.131) and (11.133): the mixing term $-2i(\mu/\lambda)(q/\hbar c)(\partial_\mu\xi)A^\mu$ cannot appear in a real Lagrangian. Expanding $\frac12|(\partial_\mu+iqA_\mu/\hbar c)(\eta+\mu/\lambda+i\xi)|^2$ gives $+(\mu/\lambda)(q/\hbar c)(\partial_\mu\xi)A^\mu$.
- [Correctness] Outdated statements: "the Higgs particle has never been seen" (discovered at the LHC in 2012, $m_H\approx125$ GeV); the SSC footnote (the project was cancelled in 1993); and the Yukawa footnote "only when the Higgs is found" (its couplings to $t$, $b$, $\tau$, and $\mu$ are now measured). Add a modern note.
- [Intuition] Add a degree-of-freedom count before and after the gauge choice: $2+2$ (complex scalar plus massless vector) equals $1+3$ (Higgs plus massive vector).
- [Simplify] After (11.131), group the terms by role (free fields, mass terms, bilinear mixing, interactions) and point out that the $\frac12(q\mu/\lambda\hbar c)^2A^2$ term comes from $|iqA\,v/\hbar c|^2$ with $v=\mu/\lambda$.

### N3114

Note: [[11.B References and Notes|11.B References and Notes]]  
Priority: low · Graph: no · Manim: no

A reference list; no change needed.

- [Links] Optionally link reference 11 (Halzen and Martin, GWS Higgs sector) to \[\[10.7.3 Electro-Weak Mixing\]\] for the in-vault continuation.

### N3115

Note: [[11.P Problems|11.P Problems]]  
Priority: low · Graph: no · Manim: no

The problem list is faithful and includes a rotatable cone figure; the answer to Problem 11.12 was checked and is algebraically right, but it uses a clashing symbol and is missing a bracket.

- [Correctness] The Problem 11.12 answers use $g$ for the gauge coupling, while the text uses $q$ throughout (11.61, 11.65), and $g$ in the same note is the gravitational acceleration (Problem 11.1). Replace $g$ with $q$ in both answers and in the table row "g, α".
- [Correctness] The Problem 11.12(a) answer opens a bracket "[" that is never closed. Close it after $-\mathbf A^\nu\times\partial^\mu\boldsymbol\lambda$.
- [Correctness] Other symbol clashes in the same note: $\phi$ is the cone azimuth in Problem 11.1 and the scalar field elsewhere, and $L$ (angular momentum, 11.1c) collides with the Lagrangian $L$. Consider $\varphi$ and $\ell_z$ for Problem 11.1.

### N3116

Note: [[Appendix A.0 The Dirac Delta Function|Appendix A.0 The Dirac Delta Function]]  
Priority: low · Graph: yes · Manim: yes

A clear and correct introduction to the delta function (A.7–A.13 and Example A.1 checked), with very heavy embedded figure data.

- [Graph] Add an interactive plot with a slider $n=1..20$ that shows the rectangle (height $n$, width $1/n$), the triangle (height $n$, base $2/n$), and a Gaussian $\frac{n}{\sqrt\pi}e^{-n^2x^2}$ together, all with unit area, to illustrate the limit in Fig. A.2.
- [Manim] Animate a Gaussian narrowing with its area held fixed while $\int f(x)\delta_n(x)\,dx$ converges to $f(0)$ for a sample $f$; this is the sifting property in motion.
- [Structure] The Fig. A.1 and A.3 graph blocks are 28–33 kB each; replace the sampled point lists with a compact functiongraph or line definition. Also close the unbalanced parenthesis in "(that is, *not* another delta function—…".
- [Example] Add the answer form for Problem A.4 as a plotted check: $f(y)=1/\sqrt{1-y}$ for $0<y<1$ and 0 otherwise, which follows directly from (A.13).

### N3117

Note: [[Appendix B.0 Decay Rates and Cross Sections|Appendix B.0 Decay Rates and Cross Sections]]  
Priority: low · Graph: no · Manim: no

Short appendix hub whose two links resolve correctly.

- [Structure] No change needed; the hub lists \[\[B.1 Decays\]\] and \[\[B.2 Cross Sections\]\] correctly.

### N3118

Note: [[B.1 Decays|B.1 Decays]]  
Priority: low · Graph: yes · Manim: no

Accurate formula sheet (B.1–B.4 check out, including the massless limit B.4) but gives no derivation hints or worked example.

- [Intuition] Add one sentence that (B.2) follows from (B.1) by using the delta function to do the $d^3\mathbf p_3$ integral in the rest frame, and that the square root in (B.3) is the Källén function $\lambda^{1/2}(m_1^2,m_2^2,m_3^2)$.
- [Simplify] The table says the units of $\mathcal M$ "depend on the final particle count"; state the rule explicitly: $[\mathcal M]=(mc)^{4-n}$ with $n$ external lines, so for a two-body decay $\mathcal M$ has momentum units and (B.2) has units of $\mathrm{s^{-1}}$.
- [Example] Add a worked example with (B.3): $\pi^+\to\mu^+\nu_\mu$ gives $|\mathbf p|=(m_\pi^2-m_\mu^2)c/(2m_\pi)\approx29.8\,\mathrm{MeV}/c$.
- [Graph] Plot $|\mathbf p|/(m_1c)$ from (B.3) against $m_2/m_1\in[0,1]$ for $m_3/m_1=0,\,0.2,\,0.5$; the curves end at the threshold $m_2+m_3=m_1$.

### N3119

Note: [[B.2 Cross Sections|B.2 Cross Sections]]  
Priority: low · Graph: yes · Manim: no

Formulas B.5–B.13 are correctly transcribed and dimensionally consistent, but the momentum notation is overloaded.

- [Correctness] Symbol clash: $\mathbf p_i$ means "momentum of particle $i$" in (B.5) but "incoming momentum magnitude" in (B.7), next to $\mathbf p_f$. Rename to $\mathbf p_{\mathrm{in}},\mathbf p_{\mathrm{out}}$ in (B.7), and add $\mathbf p_3$ (used in B.10–B.13) to the table.
- [Intuition] Explain that $\sqrt{(p_1\cdot p_2)^2-(m_1m_2c^2)^2}$ is the Lorentz-invariant flux factor, and show that it reduces to (B.6) and (B.9) in the two frames.
- [Graph] For a massless projectile on a heavy target, (B.11) needs $E_3/E_1=1/[1+(E_1/m_2c^2)(1-\cos\theta)]$. Plot $(E_3/E_1)^2$ against $\theta\in[0,\pi]$ for $E_1/m_2c^2=0.1,1,10$ to show when the recoil-free limit (B.12) applies.

### N3120

Note: [[Appendix C.0 Pauli and Dirac Matrices|Appendix C.0 Pauli and Dirac Matrices]]  
Priority: low · Graph: no · Manim: no

Short hub whose links resolve.

- [Structure] No change needed.

### N3121

Note: [[C.1 Pauli Matrices|C.1 Pauli Matrices]]  
Priority: low · Graph: no · Manim: no

Correct and compact list of Pauli identities.

- [Intuition] After (C.8), say that $\theta=|\boldsymbol\theta|$ and that $e^{-i\phi\,\hat n\cdot\boldsymbol\sigma/2}$ rotates a spin-½ state by $\phi$, so a $2\pi$ rotation gives $-1$.
- [Example] Show (C.3) as the special case $\mathbf a=\mathbf b$ of (C.7), $(\mathbf a\cdot\boldsymbol\sigma)^2=|\mathbf a|^2$, which is the step that leads to (C.8).

### N3122

Note: [[C.2 Dirac Matrices|C.2 Dirac Matrices]]  
Priority: medium · Graph: no · Manim: no

Useful trace sheet with one transcription error in the definition of gamma^0.

- [Correctness] (C.9) writes $\gamma^0=\begin{pmatrix}1&0\\0&1\end{pmatrix}$, which is the identity. The Dirac representation has $\gamma^0=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, as in \[\[Reference Formulas\]\]. With the identity, (C.15) $\{\gamma^0,\gamma^i\}=0$ and the claim "traceless" both fail.
- [Simplify] The sentence "Since $\gamma^5$ is the product of an even number..., it follows that $\operatorname{Tr}(\gamma^5\gamma^\mu)=0$" reads as a contradiction. Rephrase: $\gamma^5$ times an odd number of $\gamma$'s is an odd product, so its trace is zero.
- [Example] Give the explicit $\gamma^5=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and verify $\operatorname{Tr}(\gamma^5\gamma^0\gamma^1\gamma^2\gamma^3)=-4i$, which is consistent with (C.25) and $\epsilon^{0123}=-1$.
- [Links] Link the trace theorems to \[\[7.7 Casimir's Trick and the Trace Theorems\]\], where they are used.

### N3123

Note: [[Appendix D.0 Feynman Rules|Appendix D.0 Feynman Rules]]  
Priority: low · Graph: no · Manim: no

Short hub whose three links resolve.

- [Structure] No change needed.

### N3124

Note: [[D.1 External Lines|D.1 External Lines]]  
Priority: low · Graph: no · Manim: no

Correct minimal rule list.

- [Intuition] Add one line on the order of factors: write the spinors by following each fermion line backward against the arrow, so $\bar u\ldots u$ or $\bar v\ldots v$ brackets the vertex matrices.
- [Links] Link to \[\[7.5 The Feynman Rules for Quantum Electrodynamics\]\] for context.

### N3125

Note: [[D.2 Propagators|D.2 Propagators]]  
Priority: low · Graph: no · Manim: no

Correct propagator list, without the $i\varepsilon$ prescription or any interpretation.

- [Intuition] State that the propagators have poles at the on-shell condition $q^2=(mc)^2$, that the $+i\varepsilon$ is suppressed, and that the massive spin-1 numerator is the polarization sum $\sum\epsilon_\mu\epsilon_\nu^*$.

### N3126

Note: [[D.3 Vertex Factors|D.3 Vertex Factors]]  
Priority: medium · Graph: yes · Manim: no

Correct vertex catalogue, with all SVG embeds present, but it does not explain where the neutral-current coefficients come from and colors the couplings inconsistently.

- [Intuition] Add the generating rule $c_V^f=T_3^f-2Q_f\sin^2\theta_w$, $c_A^f=T_3^f$. It reproduces every row of the $c_V,c_A$ table, for example $u$: $\tfrac12-\tfrac43\sin^2\theta_w$.
- [Example] Give numbers: $g_e=\sqrt{4\pi/137}\approx0.303$, $\sin^2\theta_w\approx0.231$, so $g_w\approx0.63$ and $g_z\approx0.72$. This shows that weak couplings are not small; the propagators suppress the weak interactions.
- [Graph] Plot $c_V^f$ against $\sin^2\theta_w\in[0,0.5]$ for $e$, $u$ and $d$ (straight lines), and mark the physical value 0.231 where $c_V^e\approx-0.04$ is nearly zero.
- [Structure] Macro use is inconsistent: $g_e$ is wrapped in `\electric{}`, but $g_s$, $g_w$ and $g_z$ are uncolored. Treat all couplings the same way.

### N3127

Note: [[02 Physics/04 Quantum Field Theory and Particle Physics/02 Elementary Particles/99 Back matter/Index|Index]]  
Priority: low · Graph: no · Manim: no

Plain transcribed index with a few punctuation slips.

- [Structure] Add missing commas before page numbers in "Asymptotic freedom 62–64", "local 348–350" and "Gell-Mann matrices 282"; write "α𝑤" (math-italic Unicode) as "α_w", consistent with "αₛ".

### N3128

Note: [[Particle Data|Particle Data]]  
Priority: medium · Graph: no · Manim: no

Faithful 1987 data sheet, but several values are now superseded and could mislead readers.

- [Correctness] Outdated values: $t$ ">23,000" (now about $172{,}600\,\mathrm{MeV}$), $W$ $81{,}800$ (now $80{,}370$), $Z$ $92{,}600$ (now $91{,}188$), $W/Z$ lifetimes "unknown" (now about $3.2\times10^{-25}$ and $2.6\times10^{-25}\,\mathrm s$ from the widths), $\tau$ mass 1784 and lifetime $3.3\times10^{-13}$ (now 1776.9 and $2.90\times10^{-13}$), neutron lifetime 900 s (now about 878 s), and neutrino masses 0 (now known to be nonzero). Keep the historical table and add a callout that gives current PDG values.
- [Structure] Say in the TLDR or the opening line that this is the 1987 edition's table, and point to the PDG for current data.

### N3129

Note: [[Physical Constants and Conversion Factors|Physical Constants and Conversion Factors]]  
Priority: low · Graph: no · Manim: no

Correct values, but the formulas use Gaussian units while the charge is given in coulombs.

- [Correctness] $\alpha=e^2/\hbar c$, $r_e=e^2/m_ec^2$, $a=\hbar^2/e^2m_e$ and $E_n=-m_ee^4/2\hbar^2n^2$ are Gaussian formulas, but the table gives $e$ in C and the lengths in m. Either state "Gaussian units, $e$ in esu" or replace $e^2$ by $e^2/4\pi\varepsilon_0$.
- [Structure] Several digits are dated ($m_e=0.511003$, now 0.51099895 MeV; $m_p=938.280$, now 938.272 MeV; $1\,\mathrm{eV}=1.602176634\times10^{-19}\,\mathrm J$, exact since 2019). Add a short note.

### N3130

Note: [[Reference Formulas|Reference Formulas]]  
Priority: low · Graph: no · Manim: no

Correct summary sheet (gamma^0 is right here), with plain-text cross-references instead of links.

- [Links] Replace "see Appendix C" and "see Appendix D" with \[\[C.2 Dirac Matrices\]\] and \[\[D.3 Vertex Factors\]\], and consider embedding \[\[D.1 External Lines\]\] and \[\[D.2 Propagators\]\] instead of duplicating them.

### N3131

Note: [[Elementary Particles - Contents|Elementary Particles - Contents]]  
Priority: low · Graph: no · Manim: no

Complete contents hub; all wiki links resolve uniquely.

- [Structure] No change needed.
