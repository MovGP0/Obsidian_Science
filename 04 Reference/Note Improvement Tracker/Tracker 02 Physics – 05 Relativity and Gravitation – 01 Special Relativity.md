---
title: "Note Improvement Tracker – 02 Physics/05 Relativity and Gravitation/01 Special Relativity"
---

> [!TLDR]
> This note tracks the review of the 10 notes in `02 Physics/05 Relativity and Gravitation/01 Special Relativity`. It lists possible errors, the review status of each note, and the improvement suggestions.

Back to the index: [[Note Improvement Tracker]]

## Correctness findings

The review found 23 possible errors or notation conflicts. 23 of them are verified (21 fixed, 2 partly); the other 0 are not verified yet. Each item links to the full suggestion entry.

- [[#N3257|N3257]] Inertial frames, light clocks, and simultaneity problems: The Physical quantities table lists $\mechanical{V}_A,\mechanical{V}_B,\mechanical{V}_C$ (ship speeds) and $\energy{\mathrm{BE}}/A$ (binding energy per nucleon), which this note never uses. Remove both rows. **Fixed:** Removed both rows; neither symbol appears in the note.
- [[#N3257|N3257]] Inertial frames, light clocks, and simultaneity problems: Symbol clash for $\tau$: it is a proper interval in "Longitudinal length" ($\tau=t/\gamma$), a clock reading in "Clock synchronization", and the dilated laboratory lifetime in the muon example ($\tau=\gamma\tau_0$). The table also lists $\tau$ in two rows with opposite meanings. Rename the lab lifetime $t_{\mathrm{lab}}$. **Fixed:** Renamed the muon lab lifetime to t_lab in the example and table; split the table so tau_0/t_lab are lifetimes and tau, tau'_A, tau'_B have a separate clock-reading row.
- [[#N3257|N3257]] Inertial frames, light clocks, and simultaneity problems: Symbol clash for $L$: in example 4 and "Proper length…", $L$ (or $L_0$) is the Earth-frame proper distance of about 4 light-years, but in "Longitudinal length" $L=D/\gamma$ is the contracted length. Use $L_0$ consistently for the proper length. **Fixed:** Example 4 now uses L_0 for the 4 ly Earth-frame distance; table now has separate rows for d, L (contracted) and L_0 (rest length).
- [[#N3257|N3257]] Inertial frames, light clocks, and simultaneity problems: Airplane example: with $v=100$ m/s, $\beta=3.3\times10^{-7}$ gives $\gamma-1=5.6\times10^{-14}$, about 200 ps per hour. Even the rounded $\beta=3\times10^{-7}$ gives $4.5\times10^{-14}\times3600$ s $\approx160$ ps, not "roughly 150 ps". State about 160–200 ps. **Fixed:** Verified (4.5e-14 x 3600 s = 162 ps; beta=3.33e-7 gives 200 ps); text now says about 160 ps with the rounding and about 200 ps unrounded.
- [[#N3258|N3258]] Lorentz transformations and clock comparisons: Macro misuse: the note writes $\mechanical{\Delta x}$, which colors the operator $\Delta$. The preamble rules keep operators uncolored, so write $\Delta\mechanical{x}$. Also, $\gamma$ is uncolored and $c$ uses `\signal`, while the sibling notes use $\mechanical{\gamma}$ and $\mechanical{c}$; align them. **Fixed:** Replaced all mechanical{\Delta x} with \Delta\mechanical{x}, colored gamma with \mechanical{\gamma} and changed \signal{c} to \mechanical{c} in text and table, matching sibling notes.
- [[#N3259|N3259]] Lorentz transformations and spacetime diagram problems: The Physical quantities table lists symbols this note never uses: $\tau_0,\tau$ as muon lifetimes, $\Delta t_{\mathrm{rest}}$, $\theta'$, and $\Delta t$ described as the "interferometer travel-time difference". It also omits symbols the note does use: $\mechanical{V}_A,\mechanical{V}_B,\mechanical{V}_C$, $t_{\mathrm f}$, $t_1$, $t_0$ and $\mechanical{v}'$ (upward rod speed). Rebuild the table from this note. **Fixed:** Rebuilt the table from the note: removed muon lifetimes, Delta t_rest, theta' and the interferometer wording; added x_1,x_2, t_1,t_2, t_f, t_A,t_B, t_0, V_A,V_B,V_C, v', Delta x/Delta y, d and L meanings.
- [[#N3260|N3260]] Proper time and spacetime interval review problems: "Four-position and proper time": $\mechanical{X}_{\mu}=(ct,x,y,z)$ uses a lower index for contravariant components. With signature $(+,-,-,-)$, $X_\mu=(ct,-x,-y,-z)$. Write $X^\mu$. **Fixed:** Changed to X^mu in the equation and table (signature (+,-,-,-)); the component labels x_0..x_3 were left as written.
- [[#N3260|N3260]] Proper time and spacetime interval review problems: The table describes $\mechanical{M}_0,\mechanical{M}$ as masses "before and after photon absorption or rocket acceleration", but no rocket appears here. It also lists $\energy{E}',\energy{E}_{\mathrm{tot}}$, the muon lifetimes $\tau_0,\tau$, the interferometer $\Delta t$ and $\theta'$, none of which the note uses. It omits $\mechanical{m}_{\mathrm f}$, $\mechanical{V}_{\mathrm f}$, $\mechanical{V}_0$, $\mechanical{V}_1$, $\mechanical{V}_2$ and $\mechanical{M}$ (Problem 10-7). **Fixed:** Rebuilt the table: removed E', E_tot, muon lifetimes, interferometer Delta t, theta', L; corrected M_0 (target mass) and M; added m_0,V_0, m_f,V_f, V_1,V_2, gamma_1,gamma_2, p, E_gamma, x_0..x_3, Delta s, d.
- [[#N3261|N3261]] Relativistic collisions, decays, and threshold exercises: The Physical quantities table lists $\mechanical{m}_{K^0}$ (the kaon does not appear here), muon lifetimes, and $\mechanical{p}_{\mathrm{tot}}$. It describes $\signal{\nu},\signal{\nu}'$ as frequencies "before and after scattering", but here they are the frequencies in the two frames of a Doppler problem. It also omits $\mechanical{V}$, $\mechanical{u}$, $\mechanical{\gamma}_m$, $\mechanical{p}_0$, $\mechanical{p}_x$ and $\mechanical{V}_{\mathrm f}$. **Partly:** Confirmed except V_f, which this note does not use (p_f is used); rebuilt table without m_K0, muon lifetimes, p_tot, L, Delta t_rest; nu/nu' now Doppler frame frequencies; added V, u, v', gamma_m, p_0, p_x, p_f, tau, Delta m, Delta E and other used symbols.
- [[#N3261|N3261]] Relativistic collisions, decays, and threshold exercises: Sigma-minus decay: $1.5\times10^{-10}$ s is the $\Sigma^-$ mean lifetime (PDG $1.48\times10^{-10}$ s), not its half-life. Relabel it, or note that the value does not enter the kinetic-energy ratio. **Fixed:** Added that the value is the mean lifetime (PDG 1.48e-10 s), not the half-life, and that it does not enter the ratio; recomputed ratio 5.026 is correct.
- [[#N3261|N3261]] Relativistic collisions, decays, and threshold exercises: Torpedo: $\mechanical{p}_{\mu}'=(\tfrac54mc,\tfrac34mc,0,0)$ uses a lower index with all spatial components positive. Write $p^\mu$ (upper index). In part (d), state the final result $u=(15/17)c$ explicitly. **Fixed:** Changed p_mu' and p_mu to p'^mu and p^mu (table too) and added the result u=(15/17)c after part (d).
- [[#N3262|N3262]] Relativistic energy, Compton scattering, and Doppler calculations: $\mechanical{X}_{\mu}$, $\mechanical{U}_{\mu}$ and $\mechanical{p}_{\mu}=(E/c,\vec p)$ are written with lower indices, although with the note's $(-,+,+,+)$ convention the lower-index time component carries a minus sign. Use $X^\mu$, $U^\mu$ and $p^\mu$ throughout. **Fixed:** Changed every X_mu, U_mu, p_mu and p_mu' to upper-index form in text and table.
- [[#N3262|N3262]] Relativistic energy, Compton scattering, and Doppler calculations: $\theta$ means three things in one note: the Lorentz-axis tilt ($\tan\theta=\beta$), the Compton scattering angle, and the Doppler propagation angle. $\nu'$ is the scattered frequency in the Compton section but the source-frame frequency in the Doppler section. The table describes $\nu,\nu'$ only as "before and after scattering" and also lists unused rows (muon lifetimes, interferometer $\Delta t$). Rename the axis tilt $\alpha$ and fix the table. **Fixed:** Renamed the Lorentz-axis tilt to alpha; table now has separate rows for Compton and Doppler nu/nu' and for the scattering angle and propagation angle; removed muon lifetime, Delta t_rest and interferometer rows; added alpha, x_a', L, V_1',V_2', p', gamma', V_f, a and other used symbols.
- [[#N3263|N3263]] Relativistic formulation of Agular Momentum: $K^i=x^iE/c-tp^i$ is dimensionally inconsistent: the first term has units m·kg·m/s, the second s·kg·m/s. From $M^{i0}=x^iP^0-x^0P^i$ with $x^0=ct$, the correct form is $K^i=x^iE/c-ct\,p^i$; equivalently, the conserved mass moment is $x^iE/c^2-tp^i$. **Fixed:** Changed to K^i = M^{i0} = x^i E/c - ct p^i, which follows from M^{i0} with x^0=ct.
- [[#N3263|N3263]] Relativistic formulation of Agular Momentum: "Conservation law" writes $\partial_\alpha M^{\mu\nu\alpha}=0$ with a three-index object the note never defines. Define the angular-momentum current $M^{\mu\nu\alpha}=x^\mu T^{\nu\alpha}-x^\nu T^{\mu\alpha}$, which needs a symmetric $T^{\mu\nu}$, and show how $\partial_\alpha M^{\mu\nu\alpha}=0$ integrates to a conserved $M^{\mu\nu}$. **Fixed:** Added a short definition M^{mu nu alpha}=x^mu T^{nu alpha}-x^nu T^{mu alpha} with symmetric T, why its divergence vanishes, and the integral M^{mu nu}=(1/c) int M^{mu nu 0} d^3x with dM/dt=0.
- [[#N3263|N3263]] Relativistic formulation of Agular Momentum: $L^i=\epsilon^{ijk}x^jp^k$ is called "the relativistic version" of $\mathbf L=\mathbf r\times\mathbf p$, but it is the same expression. State the relation to the tensor, $L^i=\tfrac12\epsilon^{ijk}M^{jk}$. **Fixed:** Reworded as the same expression and added L^i = (1/2) epsilon^{ijk} M^{jk}.
- [[#N3264|N3264]] Spacetime Coordinates: "$dl^2=dx^2+dt^2$" is wrong: the spatial line element is $dl^2=dx^2+dy^2+dz^2$, and time does not enter. **Fixed:** Changed to dl^2 = dx^2 + dy^2 + dz^2.
- [[#N3264|N3264]] Spacetime Coordinates: "$ds^2=\eta_xdx^2+\eta_tdt^2$ with $\eta_t=-1$" drops $c^2$, which makes it dimensionally inconsistent. Write $ds^2=\eta_{\mu\nu}dx^\mu dx^\nu$ with $x^0=ct$ and $\eta=\mathrm{diag}(-1,1,1,1)$. **Fixed:** Replaced with ds^2 = eta_{mu nu} dx^mu dx^nu, x^0=ct, eta=diag(-1,1,1,1).
- [[#N3264|N3264]] Spacetime Coordinates: $ds=\sqrt{dx^2+dy^2+dz^2-c^2dt^2}$ is imaginary for timelike separations. Define $ds^2$ as the invariant, and $d\tau=\sqrt{-ds^2}/c$ for timelike pairs. **Fixed:** Wrote ds^2 = dx^2+dy^2+dz^2-c^2dt^2 as the invariant and added d tau = sqrt(-ds^2)/c for timelike pairs.
- [[#N3265|N3265]] Spacetime Interval: "$a(t)\approx1+H\,dt$" is wrong. The scale factor expands as $a(t)\approx a_0[1+H_0(t-t_0)]$, in coordinate time, not in the differential $dt$, so the $(1+2H\,dt)$ factors in all later lines are invalid. **Fixed:** Replaced with a(t) approx a_0[1+H_0(t-t_0)], a_0=1, and changed every dependent (1+H dt) and (1+2H dt) factor and the "H dt can be ignored" sentence to use H_0(t-t_0).
- [[#N3265|N3265]] Spacetime Interval: "Time Dilation": substituting $dx'=dx-v\,dt$ gives $ds'^2=-c^2(1-v^2/c^2)dt^2-2v\,dx\,dt+dx^2$; the note drops $dx$ in the cross term ("$-2v\,dt$"). In coordinates $(t,x)$ the metric's off-diagonal entries are $-v$, not $-v/c$. The bullet "$g_{00}=-(1-v^2/c^2)$" contradicts the matrix entry $-c^2(1-v^2/c^2)$. Also fix the typos "glocks" and "intertial". **Fixed:** Cross term now -2v dx dt; matrix off-diagonals now -v in (t,x); added a sentence that in (ct,x) g_00=-(1-v^2/c^2) and g_01=-v/c, and labeled the bullets with (ct,x); fixed glocks and intertial.
- [[#N3265|N3265]] Spacetime Interval: Galilean transformation: applying a Galilean boost to the Minkowski metric does not give special-relativistic time dilation. The resulting off-diagonal term is a coordinate artifact of a non-Lorentz frame, not a "gravitomagnetic potential" representing "the origin of inertia". Either use a Lorentz boost (the metric stays $\eta$) or clearly label this as a Galilean-coordinate exercise. **Fixed:** Added a note callout that labels this a Galilean-coordinate exercise, says a Lorentz boost keeps eta, and says the gravitomagnetic interpretation belongs to the Machian framework the note follows.
- [[#N3265|N3265]] Spacetime Interval: With $A_g=-v/c$ and $\nabla\times v=2\Omega$, $\nabla\times A_g=-2\Omega/c$, not $-2\Omega$. The claim $\Phi_U'=\gamma\Phi_U$ is unsourced and nonstandard; cite the source (it appears to be a Machian framework) or remove it. **Partly:** Changed curl result to -2 Omega/c; the note gives no source for Phi_U' and I cannot identify one, so I added a statement that the relation is framework-specific, not standard, and unsourced.

## Tracking table

Legend: **Priority** shows how much a note gains from a rewrite. **Graph** and **Manim** show whether a plot or an animation is recommended.

| ID | Note | Status | Priority | Graph | Manim | Suggestions |
| --- | --- | --- | --- | --- | --- | --- |
| N3256 | [[Four-momentum and reaction thresholds\|Four-momentum and reaction thresholds]] | Analyzed | low | yes | no | [[#N3256\|View]] |
| N3257 | [[Inertial frames, light clocks, and simultaneity problems\|Inertial frames, light clocks, and simultaneity problems]] | Analyzed | medium | yes | yes | [[#N3257\|View]] |
| N3258 | [[Lorentz transformations and clock comparisons\|Lorentz transformations and clock comparisons]] | Analyzed | low | yes | no | [[#N3258\|View]] |
| N3259 | [[Lorentz transformations and spacetime diagram problems\|Lorentz transformations and spacetime diagram problems]] | Analyzed | medium | yes | yes | [[#N3259\|View]] |
| N3260 | [[Proper time and spacetime interval review problems\|Proper time and spacetime interval review problems]] | Analyzed | medium | yes | no | [[#N3260\|View]] |
| N3261 | [[Relativistic collisions, decays, and threshold exercises\|Relativistic collisions, decays, and threshold exercises]] | Analyzed | medium | no | no | [[#N3261\|View]] |
| N3262 | [[Relativistic energy, Compton scattering, and Doppler calculations\|Relativistic energy, Compton scattering, and Doppler calculations]] | Analyzed | medium | yes | no | [[#N3262\|View]] |
| N3263 | [[Relativistic formulation of Agular Momentum\|Relativistic formulation of Agular Momentum]] | Analyzed | high | no | no | [[#N3263\|View]] |
| N3264 | [[Spacetime Coordinates\|Spacetime Coordinates]] | Analyzed | high | no | no | [[#N3264\|View]] |
| N3265 | [[Spacetime Interval\|Spacetime Interval]] | Analyzed | high | yes | no | [[#N3265\|View]] |

## Suggestions

### N3256

Note: [[Four-momentum and reaction thresholds|Four-momentum and reaction thresholds]]  
Priority: low · Graph: yes · Manim: no

A short, correct note on the threshold invariant; the threshold formula $E_{\gamma,\mathrm{thr}}=m_\pi c^2(1+m_\pi/2m_p)$ checks out, but there is no number and no general formula.

- [Example] After the threshold formula, add the number: with $m_pc^2=938.3$ MeV and $m_{\pi^0}c^2=135.0$ MeV, $E_{\gamma,\mathrm{thr}}\approx144.7$ MeV. Compare it with the naive $135$ MeV to show the size of the recoil correction.
- [Simplify] Write the lab expansion of $s$ in one explicit line, $s=(E_\gamma+m_pc^2)^2-E_\gamma^2=m_p^2c^4+2m_pc^2E_\gamma$, so the reader sees how the $E_\gamma^2$ terms cancel.
- [Structure] Give the general fixed-target threshold $E_{1,\mathrm{th}}=[(\sum m_f)^2-m_1^2-m_2^2]c^2/(2m_2)$ and link to the worked $pp\to pp\pi^0$ example in \[\[Relativistic collisions, decays, and threshold exercises#2. Threshold for neutral pion production\]\].
- [Graph] Plot the threshold $E_{\mathrm{thr}}/(m_\pi c^2)=1+m_\pi/(2M)$ against the target mass $M/m_\pi$ from 0.5 to 50, showing that it falls toward 1 as the target gets heavy (the heavy-target limit mentioned in the text).

### N3257

Note: [[Inertial frames, light clocks, and simultaneity problems|Inertial frames, light clocks, and simultaneity problems]]  
Priority: medium · Graph: yes · Manim: yes

A long, faithful transcription; the derivations I re-checked are correct (Michelson–Morley, clock offsets, magician paradox), but the quantities table is copied from elsewhere and several symbols clash.

- [Correctness] The Physical quantities table lists $\mechanical{V}_A,\mechanical{V}_B,\mechanical{V}_C$ (ship speeds) and $\energy{\mathrm{BE}}/A$ (binding energy per nucleon), which this note never uses. Remove both rows.
- [Correctness] Symbol clash for $\tau$: it is a proper interval in "Longitudinal length" ($\tau=t/\gamma$), a clock reading in "Clock synchronization", and the dilated laboratory lifetime in the muon example ($\tau=\gamma\tau_0$). The table also lists $\tau$ in two rows with opposite meanings. Rename the lab lifetime $t_{\mathrm{lab}}$.
- [Correctness] Symbol clash for $L$: in example 4 and "Proper length…", $L$ (or $L_0$) is the Earth-frame proper distance of about 4 light-years, but in "Longitudinal length" $L=D/\gamma$ is the contracted length. Use $L_0$ consistently for the proper length.
- [Correctness] Airplane example: with $v=100$ m/s, $\beta=3.3\times10^{-7}$ gives $\gamma-1=5.6\times10^{-14}$, about 200 ps per hour. Even the rounded $\beta=3\times10^{-7}$ gives $4.5\times10^{-14}\times3600$ s $\approx160$ ps, not "roughly 150 ps". State about 160–200 ps.
- [Structure] Collect the many transcription remarks ("The handwritten date reads…", "appears to repeat…") in one source-notes callout. Add one short summary box with the three rules: time dilation $\gamma$, contraction $1/\gamma$, and leading-clock lag $Dv/c^2$.
- [Manim] Light clock: show the same tick side by side in the rest frame (vertical bounce) and the platform frame (zig-zag), with the Pythagorean triangle drawn as the clock moves. Optionally add the two-ship simultaneity timeline ($a,b,c,d$) replayed in frames C, A and B.

### N3258

Note: [[Lorentz transformations and clock comparisons|Lorentz transformations and clock comparisons]]  
Priority: low · Graph: yes · Manim: no

A compact, correct summary; the worked numbers (375 m, −0.75 µs) check out, but the macro use differs from the sibling notes.

- [Correctness] Macro misuse: the note writes $\mechanical{\Delta x}$, which colors the operator $\Delta$. The preamble rules keep operators uncolored, so write $\Delta\mechanical{x}$. Also, $\gamma$ is uncolored and $c$ uses `\signal`, while the sibling notes use $\mechanical{\gamma}$ and $\mechanical{c}$; align them.
- [Simplify] In "Clock offset in a worked comparison", state at the start that the 300 m rod is at rest in the primed frame. Otherwise the 375 m rest length and the sign of $\Delta t'=-\gamma v\Delta x/c^2$ look like they come from nowhere.
- [Graph] Add a Minkowski diagram ($ct$ vs $x$, both from −500 to 500 m) with the primed axes for $\beta=0.6$ and the two rod-end events at $x=0$ and $300$ m on $t=0$. Show their primed-time difference by drawing the primed simultaneity line through one event.

### N3259

Note: [[Lorentz transformations and spacetime diagram problems|Lorentz transformations and spacetime diagram problems]]  
Priority: medium · Graph: yes · Manim: yes

The derivations are correct and well ordered, but two worked problems stop before their answers and the copied quantities table does not match the note.

- [Correctness] The Physical quantities table lists symbols this note never uses: $\tau_0,\tau$ as muon lifetimes, $\Delta t_{\mathrm{rest}}$, $\theta'$, and $\Delta t$ described as the "interferometer travel-time difference". It also omits symbols the note does use: $\mechanical{V}_A,\mechanical{V}_B,\mechanical{V}_C$, $t_{\mathrm f}$, $t_1$, $t_0$ and $\mechanical{v}'$ (upward rod speed). Rebuild the table from this note.
- [Example] Problem 6-13 stops after $t_0=80$ h in the symmetric frame, although the question asks for the explosion time in $A$'s frame. Finish it: the explosion event $(t,x)=(80\,\mathrm h,-48\,\mathrm{lh})$ boosted by $0.6c$ gives $t'_A=1.25(80+0.6\cdot48)=136$ h. The pursuit equation $\tfrac15c\,t=192$ lh is also left unsolved ($t=960$ h); solve it and state what it answers.
- [Structure] "Minkowski spacetime" defines $s^2=x^2+y^2+z^2-c^2t^2$, while "Lorentz transformations and clock comparisons" and the interval sections elsewhere use the time-positive sign. Add one sentence saying which convention this note uses and that the causal classification flips sign with it.
- [Simplify] "Transverse light clock review" derives $\Delta t=2D/(c\sqrt{1-v^2/c^2})$ twice in a row; keep one derivation.
- [Graph] Light rays and light cones: draw a 2D Minkowski diagram ($ct$ and $x$ from −3 to 3) with the light lines, the $x'$ axis ($ct=\beta x$) and the $ct'$ axis ($x=\beta ct$) for $\beta=0.5$, and the hyperbolae $c^2t^2-x^2=\pm1$. Shade the absolute past, absolute future and elsewhere regions.
- [Manim] Animate the primed axes closing like scissors toward the light line as $\beta$ goes from 0 to 0.9, keeping the light cone fixed. This shows the relativity of simultaneity for the two-flash spaceship example.

### N3260

Note: [[Proper time and spacetime interval review problems|Proper time and spacetime interval review problems]]  
Priority: medium · Graph: yes · Manim: no

All problem answers re-check correctly, but index placement, a sign-convention switch within the note, and the table need fixing.

- [Correctness] "Four-position and proper time": $\mechanical{X}_{\mu}=(ct,x,y,z)$ uses a lower index for contravariant components. With signature $(+,-,-,-)$, $X_\mu=(ct,-x,-y,-z)$. Write $X^\mu$.
- [Correctness] The table describes $\mechanical{M}_0,\mechanical{M}$ as masses "before and after photon absorption or rocket acceleration", but no rocket appears here. It also lists $\energy{E}',\energy{E}_{\mathrm{tot}}$, the muon lifetimes $\tau_0,\tau$, the interferometer $\Delta t$ and $\theta'$, none of which the note uses. It omits $\mechanical{m}_{\mathrm f}$, $\mechanical{V}_{\mathrm f}$, $\mechanical{V}_0$, $\mechanical{V}_1$, $\mechanical{V}_2$ and $\mechanical{M}$ (Problem 10-7).
- [Structure] The note opens with the time-positive interval $(x_0)^2-(x_1)^2$ but closes with eq. 9.11, $(\Delta s)^2=-(c\Delta t)^2+\dots$. State the switch explicitly and give the timelike/spacelike criteria in both conventions side by side.
- [Example] Problem 11-3 gives $m=1.0\times10^8$ kg but never uses it. Add $K=9mc^2\approx8.1\times10^{25}$ J to make the scale tangible.
- [Graph] Chapter 9, problem 1: plot the Lorentz-rotated axes, $ct=\beta x$ and $x=\beta ct$, for $\beta=0.3,0.6,0.9$ on a $(x,ct)$ diagram from −2 to 2 with the 45° light line. This completes the discussion that the notes leave mid-sentence.

### N3261

Note: [[Relativistic collisions, decays, and threshold exercises|Relativistic collisions, decays, and threshold exercises]]  
Priority: medium · Graph: no · Manim: no

The problems are clearly solved and all the numbers re-check (1218 MeV threshold, ratio 5.026, $3-2\sqrt2$, 5 GJ), but the table is copied from elsewhere and two physics labels are off.

- [Correctness] The Physical quantities table lists $\mechanical{m}_{K^0}$ (the kaon does not appear here), muon lifetimes, and $\mechanical{p}_{\mathrm{tot}}$. It describes $\signal{\nu},\signal{\nu}'$ as frequencies "before and after scattering", but here they are the frequencies in the two frames of a Doppler problem. It also omits $\mechanical{V}$, $\mechanical{u}$, $\mechanical{\gamma}_m$, $\mechanical{p}_0$, $\mechanical{p}_x$ and $\mechanical{V}_{\mathrm f}$.
- [Correctness] Sigma-minus decay: $1.5\times10^{-10}$ s is the $\Sigma^-$ mean lifetime (PDG $1.48\times10^{-10}$ s), not its half-life. Relabel it, or note that the value does not enter the kinetic-energy ratio.
- [Correctness] Torpedo: $\mechanical{p}_{\mu}'=(\tfrac54mc,\tfrac34mc,0,0)$ uses a lower index with all spatial components positive. Write $p^\mu$ (upper index). In part (d), state the final result $u=(15/17)c$ explicitly.
- [Simplify] Symmetric U-238 fission: "lower by about $(238)(1\,\mathrm{MeV})$, giving roughly 200 MeV" understates the note's own estimate, which is about 240 MeV. Write about 240 MeV and add that the measured value is about 200 MeV.
- [Simplify] Proton beam and fleeing ship: $\mechanical{v}$ here is the beam speed and $\mechanical{V}$ the frame speed, the reverse of the rest of the note. Rename the beam speed $u$ to avoid the clash, and cross-check with velocity addition: $(0.8-0.6)/(1-0.48)=5/13$.

### N3262

Note: [[Relativistic energy, Compton scattering, and Doppler calculations|Relativistic energy, Compton scattering, and Doppler calculations]]  
Priority: medium · Graph: yes · Manim: no

The Compton and Doppler derivations are correct and readable, but the kaon example is unfinished, index placement is wrong, and symbols clash across sections.

- [Correctness] $\mechanical{X}_{\mu}$, $\mechanical{U}_{\mu}$ and $\mechanical{p}_{\mu}=(E/c,\vec p)$ are written with lower indices, although with the note's $(-,+,+,+)$ convention the lower-index time component carries a minus sign. Use $X^\mu$, $U^\mu$ and $p^\mu$ throughout.
- [Correctness] $\theta$ means three things in one note: the Lorentz-axis tilt ($\tan\theta=\beta$), the Compton scattering angle, and the Doppler propagation angle. $\nu'$ is the scattered frequency in the Compton section but the source-frame frequency in the Doppler section. The table describes $\nu,\nu'$ only as "before and after scattering" and also lists unused rows (muon lifetimes, interferometer $\Delta t$). Rename the axis tilt $\alpha$ and fix the table.
- [Example] The kaon decay stops at $\gamma=5/4$. Finish it: in the CM frame $E'=248.8$ MeV and $p'c=209.0$ MeV ($v'=0.840c$), so the lab pion energies are $E=1.25(248.8\pm0.6\cdot209.0)\approx468$ MeV and $154$ MeV.
- [Simplify] In the Compton section, replace the source asides about $h^4$ and the "approximately $4\times10^{-12}$ m" maximum shift with the correct values only ($2\lambda_C=4.86\times10^{-12}$ m) and move the aside into a footnote.
- [Graph] Plot $\nu/\nu'=\sqrt{1-\beta^2}/(1-\beta\cos\theta)$ against $\theta\in[0,\pi]$ for $\beta=0.1,0.5,0.9$, with a horizontal line at 1, showing where the curves cross ("Can $\nu=\nu'$?"). Optionally also plot $\Delta\lambda/\lambda_C=1-\cos\theta$.

### N3263

Note: [[Relativistic formulation of Agular Momentum|Relativistic formulation of Agular Momentum]]  
Priority: high · Graph: no · Manim: no

An informal draft with a dimensional error, an undefined conservation law, no vault formatting (no TLDR, macros or table), and a title and filename that do not match.

- [Correctness] $K^i=x^iE/c-tp^i$ is dimensionally inconsistent: the first term has units m·kg·m/s, the second s·kg·m/s. From $M^{i0}=x^iP^0-x^0P^i$ with $x^0=ct$, the correct form is $K^i=x^iE/c-ct\,p^i$; equivalently, the conserved mass moment is $x^iE/c^2-tp^i$.
- [Correctness] "Conservation law" writes $\partial_\alpha M^{\mu\nu\alpha}=0$ with a three-index object the note never defines. Define the angular-momentum current $M^{\mu\nu\alpha}=x^\mu T^{\nu\alpha}-x^\nu T^{\mu\alpha}$, which needs a symmetric $T^{\mu\nu}$, and show how $\partial_\alpha M^{\mu\nu\alpha}=0$ integrates to a conserved $M^{\mu\nu}$.
- [Correctness] $L^i=\epsilon^{ijk}x^jp^k$ is called "the relativistic version" of $\mathbf L=\mathbf r\times\mathbf p$, but it is the same expression. State the relation to the tensor, $L^i=\tfrac12\epsilon^{ijk}M^{jk}$.
- [Structure] The frontmatter title "Relativistic formulation" does not match the filename, and "Agular" in the filename is a typo. Rename to "Relativistic formulation of angular momentum" (update the tracker link). Add a TLDR, semantic macros and a physical-quantities table.
- [Example] Extend the offset-particle example ($\mathbf r=(0,b,0)$, $\mathbf p=(p,0,0)$) by computing $K^i$. It gives $K^y=bE/c$ at $t=0$, and its conservation means the center of energy moves uniformly. That gives a concrete meaning to the boost components.
- [Simplify] Drop or make concrete the vague "force acts in a direction…" example and the "conversion" section, for instance with a two-particle collision that redistributes orbital angular momentum and conserves the total $M^{\mu\nu}$.

### N3264

Note: [[Spacetime Coordinates|Spacetime Coordinates]]  
Priority: high · Graph: no · Manim: no

A fragmentary stub with wrong formulas and an outdated imaginary-time framing; it has no frontmatter, TLDR or table.

- [Correctness] "$dl^2=dx^2+dt^2$" is wrong: the spatial line element is $dl^2=dx^2+dy^2+dz^2$, and time does not enter.
- [Correctness] "$ds^2=\eta_xdx^2+\eta_tdt^2$ with $\eta_t=-1$" drops $c^2$, which makes it dimensionally inconsistent. Write $ds^2=\eta_{\mu\nu}dx^\mu dx^\nu$ with $x^0=ct$ and $\eta=\mathrm{diag}(-1,1,1,1)$.
- [Correctness] $ds=\sqrt{dx^2+dy^2+dz^2-c^2dt^2}$ is imaginary for timelike separations. Define $ds^2$ as the invariant, and $d\tau=\sqrt{-ds^2}/c$ for timelike pairs.
- [Structure] Mark the $ict$ (imaginary time) remark as a historical convention no longer used. Add frontmatter, a TLDR, macros and a physical-quantities table. Consider merging this stub into \[\[Spacetime Interval\]\] or into "Lorentz transformations and spacetime diagram problems".

### N3265

Note: [[Spacetime Interval|Spacetime Interval]]  
Priority: high · Graph: yes · Manim: no

The note mixes the FLRW metric, Galilean transformations and nonstandard "gravitomagnetic potential of the universe" claims, with several algebra and dimension errors, in a special-relativity folder.

- [Correctness] "$a(t)\approx1+H\,dt$" is wrong. The scale factor expands as $a(t)\approx a_0[1+H_0(t-t_0)]$, in coordinate time, not in the differential $dt$, so the $(1+2H\,dt)$ factors in all later lines are invalid.
- [Correctness] "Time Dilation": substituting $dx'=dx-v\,dt$ gives $ds'^2=-c^2(1-v^2/c^2)dt^2-2v\,dx\,dt+dx^2$; the note drops $dx$ in the cross term ("$-2v\,dt$"). In coordinates $(t,x)$ the metric's off-diagonal entries are $-v$, not $-v/c$. The bullet "$g_{00}=-(1-v^2/c^2)$" contradicts the matrix entry $-c^2(1-v^2/c^2)$. Also fix the typos "glocks" and "intertial".
- [Correctness] Galilean transformation: applying a Galilean boost to the Minkowski metric does not give special-relativistic time dilation. The resulting off-diagonal term is a coordinate artifact of a non-Lorentz frame, not a "gravitomagnetic potential" representing "the origin of inertia". Either use a Lorentz boost (the metric stays $\eta$) or clearly label this as a Galilean-coordinate exercise.
- [Correctness] With $A_g=-v/c$ and $\nabla\times v=2\Omega$, $\nabla\times A_g=-2\Omega/c$, not $-2\Omega$. The claim $\Phi_U'=\gamma\Phi_U$ is unsourced and nonstandard; cite the source (it appears to be a Machian framework) or remove it.
- [Structure] Separate the special-relativity content (the Minkowski interval $ds^2=-c^2dt^2+dx^2+dy^2+dz^2$ and the timelike/spacelike/null classification, which is correct) from the FLRW material, which belongs under cosmology. Add frontmatter, a TLDR, macros and a table, and fix "It's sign".
- [Graph] For the interpretation section, draw a light-cone diagram ($ct$ vs $x$ from −2 to 2) with example event pairs marked timelike, null and spacelike, and the hyperbolae $-c^2t^2+x^2=\pm1$.
